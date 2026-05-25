LEARN('os', {
  intro: 'A textbook-style tour of operating systems — processes, threads, scheduling, synchronization, memory, file systems, and kernel design.',
  chapters: [

    /* ============ Chapter 1 — What an OS Does ============ */
    {
      id: 'os-c1',
      title: 'What an Operating System Does',
      icon: '🖥️',
      sections: [
        { type: 'heading', text: 'What is an operating system?', level: 1 },
        { type: 'para', html: 'An <strong>operating system</strong> is the software that sits between your applications and the raw hardware. It wears two hats at once: an <em>abstraction layer</em> that hides messy hardware behind clean APIs, and a <em>resource manager</em> that fairly shares CPU, memory, and devices among many programs.' },
        { type: 'para', html: 'Without an OS, every program would have to know how to drive disks, network cards, and clocks directly. With one, you call <code>open("file.txt")</code> and the OS deals with sectors, controllers, and interrupts.' },

        { type: 'heading', text: 'The two big jobs', level: 2 },
        { type: 'image', alt: 'OS as middleman',
          svg: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.app{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.os{fill:#fef3c7;stroke:#b45309;stroke-width:2}.hw{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{fill:none;stroke:#475569;stroke-width:2}</style>
</defs>
<rect x="50" y="30" width="600" height="60" rx="10" class="app"/>
<text x="350" y="55" class="tb">User Applications</text>
<text x="350" y="78" class="t">browser · editor · compiler · game</text>
<rect x="50" y="115" width="600" height="60" rx="10" class="os"/>
<text x="350" y="140" class="tb">Operating System</text>
<text x="350" y="163" class="t">abstraction · scheduling · protection · IPC</text>
<rect x="50" y="200" width="600" height="60" rx="10" class="hw"/>
<text x="350" y="225" class="tb">Hardware</text>
<text x="350" y="248" class="t">CPU · RAM · Disk · NIC · GPU</text>
<line x1="350" y1="90" x2="350" y2="113" class="arr" marker-end="url(#a)"/>
<line x1="350" y1="175" x2="350" y2="198" class="arr" marker-end="url(#a)"/>
<defs><marker id="a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker></defs>
</svg>` },
        { type: 'list', kind: 'check', items: [
          '<strong>Abstraction</strong> — turns a disk into "files", RAM into "address spaces", a CPU into "processes / threads"',
          '<strong>Resource management</strong> — fairly shares CPU, memory, and devices among competing processes',
          '<strong>Protection</strong> — keeps one process from corrupting another or the kernel itself'
        ] },

        { type: 'heading', text: 'User mode vs kernel mode', level: 2 },
        { type: 'para', html: 'CPUs provide at least two privilege levels. Your code runs in <strong>user mode</strong> with restricted instructions; the OS runs in <strong>kernel mode</strong> with full access to hardware. To do anything privileged — open a file, allocate memory, fork — your code issues a <em>system call</em> that traps into the kernel.' },

        { type: 'code', lang: 'c', code: `<span class="com">// A system call in C — read 100 bytes from fd into buf</span>
<span class="ty">int</span> n = <span class="fn">read</span>(fd, buf, <span class="num">100</span>);
<span class="com">//        ^^^^^^^^^^^^^^^^^^^</span>
<span class="com">//  user mode → trap → kernel reads disk → returns → user mode</span>` },

        { type: 'callout', kind: 'tip', html: 'Each syscall costs ~hundreds of cycles for the mode switch alone. That\'s why high-performance code batches I/O and uses zero-copy tricks like <code>sendfile()</code>.' },

        { type: 'heading', text: 'A taste of common syscalls', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>fork()</code>, <code>execve()</code>, <code>wait()</code>, <code>exit()</code> — process control',
          '<code>open()</code>, <code>read()</code>, <code>write()</code>, <code>close()</code> — files',
          '<code>mmap()</code>, <code>brk()</code> — memory',
          '<code>socket()</code>, <code>connect()</code>, <code>send()</code> — network',
          '<code>pthread_create()</code> (library, wraps <code>clone()</code> on Linux) — threads'
        ] },

        { type: 'callout', kind: 'info', html: 'Run <code>strace ls</code> on Linux to see every syscall a program makes. It\'s a great way to peek behind the curtain.' }
      ]
    },

    /* ============ Chapter 2 — Processes ============ */
    {
      id: 'os-c2',
      title: 'Processes',
      icon: '⚙️',
      sections: [
        { type: 'heading', text: 'A process is a program in execution', level: 1 },
        { type: 'para', html: 'A <strong>program</strong> is bytes on disk — instructions and data, sitting still. A <strong>process</strong> is a running instance of that program: it has CPU registers, memory, open files, a stack, signals, the works. Two terminals running <code>vim</code> are one program, two processes.' },

        { type: 'heading', text: 'The Process Control Block (PCB)', level: 2 },
        { type: 'para', html: 'The kernel tracks every process in a per-process struct — Linux calls it <code>task_struct</code>, textbooks call it the <strong>PCB</strong>. It holds everything needed to suspend and resume a process.' },

        { type: 'code', lang: 'c', code: `<span class="com">// Simplified — Linux task_struct is ~3000 lines!</span>
<span class="kw">struct</span> <span class="ty">PCB</span> {
    <span class="ty">int</span>             pid;
    <span class="ty">enum</span> state     state;        <span class="com">// ready, running, waiting, ...</span>
    <span class="ty">void</span>*           pc;           <span class="com">// program counter</span>
    <span class="ty">Registers</span>       regs;         <span class="com">// saved CPU registers</span>
    <span class="ty">PageTable</span>*      pgdir;        <span class="com">// memory map</span>
    <span class="ty">FileTable</span>       files;        <span class="com">// open file descriptors</span>
    <span class="ty">PCB</span>*            parent;
    <span class="ty">List</span>            children;
    <span class="ty">uint64_t</span>        cpu_time_used;
    <span class="ty">SignalHandlers</span>  signals;
};` },

        { type: 'heading', text: 'The 5-state diagram', level: 2 },
        { type: 'image', alt: 'Process state diagram',
          svg: `<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.r{fill:#dcfce7;stroke:#15803d;stroke-width:2}.w{fill:#fef3c7;stroke:#b45309;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:15px;font-weight:700;text-anchor:middle}.lab{fill:#334155;font-family:Inter,sans-serif;font-size:11px;text-anchor:middle}.arr{fill:none;stroke:#475569;stroke-width:1.7}</style>
  <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<ellipse cx="80" cy="170" rx="60" ry="36" class="s"/>
<text x="80" y="175" class="t">NEW</text>
<ellipse cx="280" cy="170" rx="60" ry="36" class="r"/>
<text x="280" y="175" class="t">READY</text>
<ellipse cx="480" cy="170" rx="60" ry="36" class="s"/>
<text x="480" y="175" class="t">RUNNING</text>
<ellipse cx="680" cy="170" rx="60" ry="36" class="s"/>
<text x="680" y="175" class="t">TERMINATED</text>
<ellipse cx="380" cy="320" rx="60" ry="22" class="w"/>
<text x="380" y="325" class="t">WAITING</text>
<line x1="140" y1="170" x2="220" y2="170" class="arr" marker-end="url(#ah)"/>
<text x="180" y="160" class="lab">admit</text>
<line x1="340" y1="160" x2="420" y2="160" class="arr" marker-end="url(#ah)"/>
<text x="380" y="150" class="lab">dispatch</text>
<line x1="420" y1="180" x2="340" y2="180" class="arr" marker-end="url(#ah)"/>
<text x="380" y="200" class="lab">preempt / quantum</text>
<line x1="540" y1="170" x2="620" y2="170" class="arr" marker-end="url(#ah)"/>
<text x="580" y="160" class="lab">exit</text>
<line x1="465" y1="200" x2="400" y2="298" class="arr" marker-end="url(#ah)"/>
<text x="460" y="255" class="lab">I/O request</text>
<line x1="350" y1="300" x2="285" y2="205" class="arr" marker-end="url(#ah)"/>
<text x="295" y="255" class="lab">I/O done</text>
</svg>` },

        { type: 'list', kind: 'check', items: [
          '<strong>NEW</strong> — created but not yet admitted to the scheduler',
          '<strong>READY</strong> — sitting in the run queue, waiting for CPU',
          '<strong>RUNNING</strong> — actually executing on a core',
          '<strong>WAITING</strong> — blocked on I/O, sleep, or another event',
          '<strong>TERMINATED</strong> — exited; PCB lingers briefly to deliver exit code'
        ] },

        { type: 'heading', text: 'Context switch', level: 2 },
        { type: 'para', html: 'A <strong>context switch</strong> is the kernel saving one process\'s registers into its PCB and loading another\'s into the CPU. Cheap compared to creating processes, but not free — a few microseconds plus cache and TLB pollution. Switching too often is wasteful.' },

        { type: 'callout', kind: 'warn', html: 'Linux\'s context switch is measured in microseconds. Switching 100,000 times a second eats a meaningful chunk of one core. Designers tune quanta to keep switches at a few hundred per second per process.' }
      ]
    },

    /* ============ Chapter 3 — Process Creation ============ */
    {
      id: 'os-c3',
      title: 'Process Creation: fork & exec',
      icon: '🍴',
      sections: [
        { type: 'heading', text: 'How Unix creates processes', level: 1 },
        { type: 'para', html: 'Unix uses a two-step dance: <strong>fork</strong> clones the calling process, then <strong>exec</strong> replaces the child\'s memory with a new program. Windows has a single <code>CreateProcess()</code> that bundles both, but the fork-then-exec model is wonderfully flexible — you can tweak file descriptors, environment variables, or the working directory between fork and exec.' },

        { type: 'code', lang: 'c', code: `<span class="kw">pid_t</span> pid = <span class="fn">fork</span>();    <span class="com">// returns twice!</span>

<span class="kw">if</span> (pid == <span class="num">0</span>) {
    <span class="com">// CHILD</span>
    <span class="fn">execvp</span>(<span class="str">"/bin/ls"</span>, args);
    <span class="fn">perror</span>(<span class="str">"exec failed"</span>);
    <span class="fn">exit</span>(<span class="num">1</span>);
} <span class="kw">else if</span> (pid > <span class="num">0</span>) {
    <span class="com">// PARENT</span>
    <span class="ty">int</span> status;
    <span class="fn">waitpid</span>(pid, &status, <span class="num">0</span>);
} <span class="kw">else</span> {
    <span class="fn">perror</span>(<span class="str">"fork failed"</span>);
}` },

        { type: 'heading', text: 'fork\'s two-faced return', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Returns 0</strong> — we are the child',
          '<strong>Returns &gt; 0</strong> — we are the parent; the value is the child\'s PID',
          '<strong>Returns -1</strong> — fork failed (too many processes, OOM)'
        ] },

        { type: 'heading', text: 'The classic fork bomb counter', level: 2 },
        { type: 'image', alt: 'Fork tree showing 2^N processes',
          svg: `<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.n{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.l{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:12px;fill:#475569;text-anchor:middle}.line{stroke:#475569;stroke-width:1.5;fill:none}</style>
</defs>
<text x="360" y="22" class="l" font-weight="700" font-size="15">After two fork() calls → 4 processes</text>
<circle cx="360" cy="60" r="22" class="n"/>
<text x="360" y="65" class="l">P</text>
<text x="430" y="65" class="lab">fork #1</text>
<line x1="360" y1="82" x2="240" y2="135" class="line"/>
<line x1="360" y1="82" x2="480" y2="135" class="line"/>
<circle cx="240" cy="158" r="22" class="n"/>
<text x="240" y="163" class="l">P</text>
<circle cx="480" cy="158" r="22" class="n"/>
<text x="480" y="163" class="l">C1</text>
<text x="590" y="163" class="lab">fork #2</text>
<line x1="240" y1="180" x2="180" y2="225" class="line"/>
<line x1="240" y1="180" x2="300" y2="225" class="line"/>
<line x1="480" y1="180" x2="420" y2="225" class="line"/>
<line x1="480" y1="180" x2="540" y2="225" class="line"/>
<circle cx="180" cy="245" r="20" class="n"/>
<text x="180" y="250" class="l">P</text>
<circle cx="300" cy="245" r="20" class="n"/>
<text x="300" y="250" class="l">C2</text>
<circle cx="420" cy="245" r="20" class="n"/>
<text x="420" y="250" class="l">C1</text>
<circle cx="540" cy="245" r="20" class="n"/>
<text x="540" y="250" class="l">C3</text>
</svg>` },
        { type: 'para', html: 'Each <code>fork()</code> doubles the count of processes. N forks ⇒ 2^N processes — and each one runs the code AFTER fork(). A classic interview puzzle: "How many lines does this print?"' },

        { type: 'heading', text: 'Zombies and orphans', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Zombie</strong> — child exited but parent hasn\'t called <code>wait()</code>. PCB lingers holding the exit code. Almost no memory cost, but holds a PID.',
          '<strong>Orphan</strong> — parent exited while child still running. The child is re-parented to <code>init</code> (PID 1), which routinely reaps its adopted kids.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Long-running daemons commonly set <code>signal(SIGCHLD, SIG_IGN)</code> so the kernel auto-reaps children, avoiding zombie buildup.' },

        { type: 'code', lang: 'c', code: `<span class="com">// Avoid zombies: ignore SIGCHLD so kernel reaps automatically</span>
<span class="fn">signal</span>(SIGCHLD, SIG_IGN);

<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">100</span>; i++) {
    <span class="kw">if</span> (<span class="fn">fork</span>() == <span class="num">0</span>) {
        <span class="fn">do_work</span>();
        <span class="fn">exit</span>(<span class="num">0</span>);
    }
}` }
      ]
    },

    /* ============ Chapter 4 — Threads ============ */
    {
      id: 'os-c4',
      title: 'Threads',
      icon: '🧵',
      sections: [
        { type: 'heading', text: 'Threads share an address space', level: 1 },
        { type: 'para', html: 'A process can have many <strong>threads</strong>, each with its own stack, registers, and program counter — but sharing the same heap, code, and open files. Threads are cheaper to create than processes and let multiple cores execute the same program in parallel.' },

        { type: 'image', alt: 'Process with multiple threads',
          svg: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.box{fill:#f1f5f9;stroke:#475569;stroke-width:2}.sh{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.th{fill:#fef3c7;stroke:#b45309;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}</style>
</defs>
<rect x="20" y="20" width="660" height="240" rx="12" class="box"/>
<text x="350" y="44" class="tb">Process (one address space)</text>
<rect x="40" y="60" width="200" height="80" rx="6" class="sh"/>
<text x="140" y="85" class="tb">Code</text>
<text x="140" y="108" class="t">shared by all threads</text>
<rect x="40" y="155" width="200" height="80" rx="6" class="sh"/>
<text x="140" y="180" class="tb">Heap / Globals</text>
<text x="140" y="203" class="t">shared by all threads</text>
<rect x="270" y="60" width="120" height="175" rx="6" class="th"/>
<text x="330" y="85" class="tb">Thread 1</text>
<text x="330" y="110" class="t">PC, regs</text>
<text x="330" y="130" class="t">Stack</text>
<rect x="410" y="60" width="120" height="175" rx="6" class="th"/>
<text x="470" y="85" class="tb">Thread 2</text>
<text x="470" y="110" class="t">PC, regs</text>
<text x="470" y="130" class="t">Stack</text>
<rect x="550" y="60" width="120" height="175" rx="6" class="th"/>
<text x="610" y="85" class="tb">Thread 3</text>
<text x="610" y="110" class="t">PC, regs</text>
<text x="610" y="130" class="t">Stack</text>
</svg>` },

        { type: 'heading', text: 'Threading models', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Many-to-one</strong> — many user threads mapped to one kernel thread. Cheap, but no true parallelism and any blocking syscall stalls them all.',
          '<strong>One-to-one</strong> — each user thread gets its own kernel thread. Real parallelism, blocking is isolated. Used by Linux NPTL and Windows.',
          '<strong>Many-to-many</strong> — many user threads scheduled onto fewer kernel threads. Theoretically best of both worlds, complex to implement (older Solaris).'
        ] },

        { type: 'heading', text: 'POSIX threads — pthreads', level: 2 },
        { type: 'code', lang: 'c', code: `<span class="com">#include &lt;pthread.h&gt;</span>

<span class="ty">void</span>* <span class="fn">worker</span>(<span class="ty">void</span>* arg) {
    <span class="ty">int</span> id = *(<span class="ty">int</span>*)arg;
    <span class="fn">printf</span>(<span class="str">"hello from thread %d\\n"</span>, id);
    <span class="kw">return</span> NULL;
}

<span class="ty">int</span> <span class="fn">main</span>() {
    <span class="ty">pthread_t</span> t[<span class="num">4</span>];
    <span class="ty">int</span> ids[<span class="num">4</span>];
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">4</span>; i++) {
        ids[i] = i;
        <span class="fn">pthread_create</span>(&t[i], NULL, worker, &ids[i]);
    }
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">4</span>; i++)
        <span class="fn">pthread_join</span>(t[i], NULL);
}` },

        { type: 'callout', kind: 'warn', html: 'A segfault in one thread kills the whole process. Threads share fate — they\'re not isolated like processes. If you need fault isolation, use processes with IPC.' },

        { type: 'heading', text: 'When to thread vs process', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Threads</strong>: shared data, tight communication, parallel compute on the same data',
          '<strong>Processes</strong>: isolation, fault tolerance, security boundaries, possibly different binaries'
        ] }
      ]
    },

    /* ============ Chapter 5 — CPU Scheduling ============ */
    {
      id: 'os-c5',
      title: 'CPU Scheduling',
      icon: '⏱️',
      sections: [
        { type: 'heading', text: 'Who runs next?', level: 1 },
        { type: 'para', html: 'When multiple processes are READY, the <strong>scheduler</strong> picks one. Different algorithms optimize different metrics: throughput, average waiting time, interactive responsiveness, or fairness.' },

        { type: 'heading', text: 'The four metrics', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>CPU utilization</strong> — fraction of time CPU is busy with useful work',
          '<strong>Throughput</strong> — processes finished per unit time',
          '<strong>Turnaround time</strong> — completion − arrival',
          '<strong>Waiting time</strong> — time spent in the ready queue (not on CPU, not blocked)',
          '<strong>Response time</strong> — first time on CPU − arrival (matters for interactive workloads)'
        ] },

        { type: 'heading', text: 'FCFS — First Come First Served', level: 2 },
        { type: 'para', html: 'Simplest possible: a FIFO of arrivals. Non-preemptive. Suffers the <strong>convoy effect</strong> — one long CPU-bound process stalls a parade of short interactive jobs behind it.' },

        { type: 'image', alt: 'Gantt chart showing FCFS convoy effect',
          svg: `<svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.p1{fill:#fca5a5;stroke:#b91c1c;stroke-width:1.5}.p2{fill:#86efac;stroke:#15803d;stroke-width:1.5}.p3{fill:#93c5fd;stroke:#1d4ed8;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.ax{stroke:#0f172a;stroke-width:1.5}</style>
</defs>
<text x="380" y="28" class="tb">FCFS · bursts P1=24, P2=3, P3=3 · order P1, P2, P3</text>
<rect x="60" y="60" width="480" height="60" class="p1"/>
<text x="300" y="95" class="t">P1 (24)</text>
<rect x="540" y="60" width="60" height="60" class="p2"/>
<text x="570" y="95" class="t">P2</text>
<rect x="600" y="60" width="60" height="60" class="p3"/>
<text x="630" y="95" class="t">P3</text>
<line x1="60" y1="135" x2="660" y2="135" class="ax"/>
<text x="60" y="155" class="t">0</text>
<text x="540" y="155" class="t">24</text>
<text x="600" y="155" class="t">27</text>
<text x="660" y="155" class="t">30</text>
<text x="380" y="185" class="t">Avg wait = (0 + 24 + 27) / 3 = 17 — short jobs suffered!</text>
</svg>` },

        { type: 'heading', text: 'SJF — Shortest Job First', level: 2 },
        { type: 'para', html: 'Pick the process with the smallest CPU burst. Provably <strong>optimal</strong> for average waiting time. The catch: you usually can\'t know burst times — they\'re estimated from history. Its preemptive cousin is <strong>SRTF</strong> (Shortest Remaining Time First).' },

        { type: 'heading', text: 'Round Robin', level: 2 },
        { type: 'para', html: 'FCFS with a <strong>time quantum</strong> (e.g., 10ms). After each quantum, the running process moves to the back of the queue. Great response time, no starvation.' },
        { type: 'image', alt: 'Round Robin Gantt chart',
          svg: `<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.p1{fill:#fca5a5;stroke:#b91c1c;stroke-width:1.5}.p2{fill:#86efac;stroke:#15803d;stroke-width:1.5}.p3{fill:#93c5fd;stroke:#1d4ed8;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.ax{stroke:#0f172a;stroke-width:1.5}</style>
</defs>
<text x="380" y="28" class="tb">Round Robin · quantum=4 · bursts P1=10, P2=4, P3=6</text>
<rect x="40" y="60" width="80" height="50" class="p1"/><text x="80" y="90" class="t">P1</text>
<rect x="120" y="60" width="80" height="50" class="p2"/><text x="160" y="90" class="t">P2</text>
<rect x="200" y="60" width="80" height="50" class="p3"/><text x="240" y="90" class="t">P3</text>
<rect x="280" y="60" width="80" height="50" class="p1"/><text x="320" y="90" class="t">P1</text>
<rect x="360" y="60" width="40" height="50" class="p3"/><text x="380" y="90" class="t">P3</text>
<rect x="400" y="60" width="40" height="50" class="p1"/><text x="420" y="90" class="t">P1</text>
<line x1="40" y1="125" x2="440" y2="125" class="ax"/>
<text x="40" y="143" class="t">0</text>
<text x="120" y="143" class="t">4</text>
<text x="200" y="143" class="t">8</text>
<text x="280" y="143" class="t">12</text>
<text x="360" y="143" class="t">16</text>
<text x="400" y="143" class="t">18</text>
<text x="440" y="143" class="t">20</text>
<text x="380" y="180" class="t">Quantum too small → context switches dominate; too large → behaves like FCFS</text>
</svg>` },

        { type: 'heading', text: 'Priority & MLFQ', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Priority scheduling</strong> — highest priority ready process runs. Risk of <em>starvation</em>. Fix: <em>aging</em> — gradually raise priority of waiting processes.',
          '<strong>MLFQ (Multi-Level Feedback Queue)</strong> — multiple queues with different quanta. CPU-hogs drop to lower-priority/longer-quantum queues; interactive processes stay high. Used by Linux O(1) era and Windows.'
        ] },

        { type: 'callout', kind: 'info', html: 'Modern Linux uses CFS (Completely Fair Scheduler), which orders ready tasks by virtual runtime in a red-black tree. Every process gets a fair share of CPU proportional to its weight.' }
      ]
    },

    /* ============ Chapter 6 — Synchronization ============ */
    {
      id: 'os-c6',
      title: 'Synchronization',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Concurrency makes simple things hard', level: 1 },
        { type: 'para', html: 'When two threads read and write shared state, ordering matters. Even <code>counter++</code> isn\'t atomic — it compiles to load, increment, store. If two threads interleave, an update can be lost.' },

        { type: 'code', lang: 'c', code: `<span class="ty">int</span> counter = <span class="num">0</span>;

<span class="com">// Two threads each run this 1,000,000 times</span>
counter++;

<span class="com">// What the CPU actually does:</span>
<span class="com">//   LOAD  r1, counter</span>
<span class="com">//   ADD   r1, 1</span>
<span class="com">//   STORE counter, r1</span>

<span class="com">// Bad interleaving:</span>
<span class="com">//   T1 LOAD 0 → r1</span>
<span class="com">//   T2 LOAD 0 → r1</span>
<span class="com">//   T1 ADD r1, 1; STORE 1</span>
<span class="com">//   T2 ADD r1, 1; STORE 1   ← lost update!</span>` },

        { type: 'heading', text: 'The critical section', level: 2 },
        { type: 'para', html: 'A <strong>critical section</strong> is the code that touches shared state. We need three properties for a correct solution:' },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Mutual exclusion</strong> — at most one thread in the CS at any time',
          '<strong>Progress</strong> — if the CS is free, some thread waiting to enter must eventually do so',
          '<strong>Bounded waiting</strong> — no thread waits forever (no starvation)'
        ] },

        { type: 'heading', text: 'Peterson\'s algorithm (2 threads, software only)', level: 2 },
        { type: 'code', lang: 'c', code: `<span class="kw">volatile</span> <span class="ty">int</span> flag[<span class="num">2</span>] = {<span class="num">0</span>, <span class="num">0</span>};
<span class="kw">volatile</span> <span class="ty">int</span> turn = <span class="num">0</span>;

<span class="ty">void</span> <span class="fn">enter</span>(<span class="ty">int</span> i) {
    <span class="ty">int</span> j = <span class="num">1</span> - i;
    flag[i] = <span class="num">1</span>;
    turn = j;
    <span class="kw">while</span> (flag[j] &amp;&amp; turn == j) ; <span class="com">// busy wait</span>
}
<span class="ty">void</span> <span class="fn">leave</span>(<span class="ty">int</span> i) { flag[i] = <span class="num">0</span>; }` },
        { type: 'callout', kind: 'warn', html: 'Peterson\'s assumes sequential consistency — modern CPUs reorder memory operations, so you also need memory barriers. In practice we use hardware-supported primitives (atomic test-and-set, compare-and-swap) and OS-provided mutexes.' },

        { type: 'heading', text: 'Mutex, semaphore, monitor', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Mutex</strong> — binary lock with ownership. Only the locking thread can unlock.',
          '<strong>Semaphore</strong> — counter. <code>wait()</code> decrements (blocks at 0); <code>signal()</code> increments. Counting form controls N resource instances.',
          '<strong>Monitor</strong> — object whose methods auto-acquire a per-object lock. Java <code>synchronized</code> blocks plus <code>wait</code> / <code>notify</code> are monitors.'
        ] },

        { type: 'code', lang: 'java', code: `<span class="com">// Java monitor: synchronized + condition variable</span>
<span class="kw">synchronized</span> (lock) {
    <span class="kw">while</span> (!ready) lock.<span class="fn">wait</span>();
    <span class="com">// critical section</span>
}

<span class="com">// elsewhere</span>
<span class="kw">synchronized</span> (lock) {
    ready = <span class="kw">true</span>;
    lock.<span class="fn">notifyAll</span>();
}` },

        { type: 'callout', kind: 'tip', html: 'Always <code>wait</code> in a <code>while</code> loop, never an <code>if</code>. Spurious wakeups happen — recheck the condition.' }
      ]
    },

    /* ============ Chapter 7 — Classic sync problems ============ */
    {
      id: 'os-c7',
      title: 'Classic Synchronization Problems',
      icon: '🥖',
      sections: [
        { type: 'heading', text: 'Three textbook problems that teach everything', level: 1 },
        { type: 'para', html: 'Producer–consumer, readers–writers, and dining philosophers each highlight a different concurrency challenge. Master them and you\'ve seen most of the patterns you\'ll meet in real systems.' },

        { type: 'heading', text: 'Producer–Consumer (bounded buffer)', level: 2 },
        { type: 'code', lang: 'c', code: `<span class="ty">sem_t</span>   empty;   <span class="com">// initially N — number of free slots</span>
<span class="ty">sem_t</span>   full;    <span class="com">// initially 0 — number of full slots</span>
<span class="ty">mutex_t</span> m;       <span class="com">// protects index arithmetic</span>
<span class="ty">item_t</span>  buffer[N];
<span class="ty">int</span>     in = <span class="num">0</span>, out = <span class="num">0</span>;

<span class="ty">void</span> <span class="fn">producer</span>() {
    <span class="kw">while</span> (<span class="num">1</span>) {
        <span class="ty">item_t</span> item = <span class="fn">make</span>();
        <span class="fn">wait</span>(&empty);
        <span class="fn">lock</span>(&m);
        buffer[in] = item; in = (in + <span class="num">1</span>) % N;
        <span class="fn">unlock</span>(&m);
        <span class="fn">signal</span>(&full);
    }
}

<span class="ty">void</span> <span class="fn">consumer</span>() {
    <span class="kw">while</span> (<span class="num">1</span>) {
        <span class="fn">wait</span>(&full);
        <span class="fn">lock</span>(&m);
        <span class="ty">item_t</span> item = buffer[out]; out = (out + <span class="num">1</span>) % N;
        <span class="fn">unlock</span>(&m);
        <span class="fn">signal</span>(&empty);
        <span class="fn">consume</span>(item);
    }
}` },
        { type: 'callout', kind: 'warn', html: 'Don\'t swap <code>wait(empty)</code> and <code>lock(m)</code>. If the buffer is full and you locked first, the producer holds the mutex the consumer needs to drain — instant deadlock.' },

        { type: 'heading', text: 'Readers–Writers', level: 2 },
        { type: 'para', html: 'Many readers may share the resource; writers need exclusive access. A naïve "reader priority" implementation can <strong>starve writers</strong> if reads never stop coming. Writer-priority and queue-fairness solutions exist.' },
        { type: 'code', lang: 'c', code: `<span class="ty">int</span>     readers = <span class="num">0</span>;
<span class="ty">mutex_t</span> m;          <span class="com">// protects 'readers'</span>
<span class="ty">sem_t</span>   rw;         <span class="com">// exclusive access — initially 1</span>

<span class="ty">void</span> <span class="fn">reader</span>() {
    <span class="fn">lock</span>(&m);
    <span class="kw">if</span> (++readers == <span class="num">1</span>) <span class="fn">wait</span>(&rw);
    <span class="fn">unlock</span>(&m);
    <span class="fn">read_data</span>();
    <span class="fn">lock</span>(&m);
    <span class="kw">if</span> (--readers == <span class="num">0</span>) <span class="fn">signal</span>(&rw);
    <span class="fn">unlock</span>(&m);
}
<span class="ty">void</span> <span class="fn">writer</span>() {
    <span class="fn">wait</span>(&rw);
    <span class="fn">write_data</span>();
    <span class="fn">signal</span>(&rw);
}` },

        { type: 'heading', text: 'Dining philosophers', level: 2 },
        { type: 'image', alt: 'Dining philosophers diagram',
          svg: `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.tbl{fill:#fef3c7;stroke:#b45309;stroke-width:2}.p{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.f{stroke:#475569;stroke-width:4;stroke-linecap:round}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle;font-weight:700}</style>
</defs>
<circle cx="240" cy="180" r="80" class="tbl"/>
<text x="240" y="185" class="t">Table</text>
<circle cx="240" cy="60" r="24" class="p"/><text x="240" y="65" class="t">P0</text>
<circle cx="354" cy="124" r="24" class="p"/><text x="354" y="129" class="t">P1</text>
<circle cx="324" cy="246" r="24" class="p"/><text x="324" y="251" class="t">P2</text>
<circle cx="156" cy="246" r="24" class="p"/><text x="156" y="251" class="t">P3</text>
<circle cx="126" cy="124" r="24" class="p"/><text x="126" y="129" class="t">P4</text>
<line x1="305" y1="92" x2="280" y2="115" class="f"/>
<line x1="345" y1="195" x2="320" y2="178" class="f"/>
<line x1="240" y1="263" x2="240" y2="237" class="f"/>
<line x1="135" y1="195" x2="160" y2="178" class="f"/>
<line x1="175" y1="92" x2="200" y2="115" class="f"/>
<text x="240" y="335" class="t">5 philosophers, 5 forks · need both neighbors to eat</text>
</svg>` },
        { type: 'para', html: 'If every philosopher grabs the left fork first, all hold one and wait for the other — perfect deadlock. Fixes include resource ordering, allowing at most N−1 to attempt, or making one philosopher asymmetric.' }
      ]
    },

    /* ============ Chapter 8 — Deadlocks ============ */
    {
      id: 'os-c8',
      title: 'Deadlocks',
      icon: '🔒',
      sections: [
        { type: 'heading', text: 'Four conditions, four strategies', level: 1 },
        { type: 'para', html: 'A <strong>deadlock</strong> is a state where a set of processes are all waiting on resources held by each other, forever. Coffman (1971) proved that ALL FOUR of these conditions are necessary:' },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Mutual exclusion</strong> — at least one resource is non-sharable',
          '<strong>Hold and wait</strong> — a process holds a resource while waiting for another',
          '<strong>No preemption</strong> — resources are released only voluntarily',
          '<strong>Circular wait</strong> — a cycle exists in the resource dependency graph'
        ] },

        { type: 'image', alt: 'Resource allocation graph with cycle',
          svg: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.proc{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.res{fill:#fef3c7;stroke:#b45309;stroke-width:2}.dot{fill:#b45309}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{fill:none;stroke:#475569;stroke-width:2}</style>
  <marker id="m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<text x="350" y="28" class="t">Cycle ⇒ deadlock (single-instance resources)</text>
<circle cx="150" cy="160" r="34" class="proc"/><text x="150" y="165" class="t">P1</text>
<rect x="316" y="80" width="68" height="68" rx="6" class="res"/>
<text x="350" y="118" class="t">R1</text>
<circle cx="345" cy="135" r="4" class="dot"/>
<circle cx="550" cy="160" r="34" class="proc"/><text x="550" y="165" class="t">P2</text>
<rect x="316" y="200" width="68" height="68" rx="6" class="res"/>
<text x="350" y="238" class="t">R2</text>
<circle cx="345" cy="255" r="4" class="dot"/>
<line x1="184" y1="155" x2="316" y2="125" class="arr" marker-end="url(#m)"/>
<line x1="384" y1="125" x2="520" y2="155" class="arr" marker-end="url(#m)"/>
<line x1="520" y1="170" x2="384" y2="235" class="arr" marker-end="url(#m)"/>
<line x1="316" y1="235" x2="184" y2="170" class="arr" marker-end="url(#m)"/>
<text x="240" y="115" font-size="12" fill="#334155" text-anchor="middle">P1 wants R1</text>
<text x="470" y="115" font-size="12" fill="#334155" text-anchor="middle">R1 held by P2</text>
<text x="470" y="220" font-size="12" fill="#334155" text-anchor="middle">P2 wants R2</text>
<text x="240" y="220" font-size="12" fill="#334155" text-anchor="middle">R2 held by P1</text>
</svg>` },

        { type: 'heading', text: 'Four strategies', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Prevention</strong> — make at least one condition impossible (e.g., resource ordering breaks circular wait)',
          '<strong>Avoidance</strong> — at runtime, only grant requests that leave the system in a "safe state" (Banker\'s algorithm)',
          '<strong>Detection</strong> — periodically check for cycles; if found, recover',
          '<strong>Recovery</strong> — abort one or more processes; or rollback a process to a checkpoint'
        ] },

        { type: 'heading', text: 'Banker\'s algorithm', level: 2 },
        { type: 'code', lang: 'pseudo', code: `<span class="com">// Per-resource type:</span>
Available[m]      <span class="com">// currently free</span>
Max[n][m]         <span class="com">// process max claim</span>
Allocation[n][m]  <span class="com">// currently held</span>
Need = Max - Allocation

<span class="com">// Safety check — is there a finish order?</span>
work   = Available
finish = [<span class="kw">false</span>] * n
<span class="kw">while</span> exists p with !finish[p] and Need[p] ≤ work:
    work += Allocation[p]
    finish[p] = <span class="kw">true</span>
<span class="kw">return</span> all(finish)</div>` },
        { type: 'para', html: 'A request is granted only if the resulting state passes the safety check. Conservative: an "unsafe" state means a deadlock is <em>possible</em>, not certain — Banker still refuses.' },

        { type: 'callout', kind: 'info', html: 'Most production OSes use the simplest strategy: <strong>"ostrich algorithm"</strong> — pretend deadlocks won\'t happen, since they\'re rare in practice. When they do happen, kill a process. Banker\'s algorithm is mostly a teaching tool.' }
      ]
    },

    /* ============ Chapter 9 — Memory Management ============ */
    {
      id: 'os-c9',
      title: 'Memory Management',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'Putting processes into RAM', level: 1 },
        { type: 'para', html: 'Memory management decides where processes live in physical memory and how their addresses are translated. Early systems used <strong>contiguous allocation</strong>; modern systems use <strong>paging</strong> with virtual memory.' },

        { type: 'heading', text: 'Contiguous allocation', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>First fit</strong> — assign first hole that fits',
          '<strong>Best fit</strong> — smallest hole that fits (creates tiny leftovers)',
          '<strong>Worst fit</strong> — largest hole (rarely best)'
        ] },
        { type: 'callout', kind: 'warn', html: 'Contiguous allocation suffers <strong>external fragmentation</strong>: total free RAM is enough but it\'s scattered in tiny holes. Compaction (moving processes) helps but is expensive.' },

        { type: 'heading', text: 'Paging — the workhorse', level: 2 },
        { type: 'para', html: 'Split physical memory into fixed-size <strong>frames</strong>, and the address space of each process into same-size <strong>pages</strong>. A <strong>page table</strong> maps page → frame.' },

        { type: 'image', alt: 'Page table mapping pages to frames',
          svg: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.va{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.pt{fill:#fef3c7;stroke:#b45309;stroke-width:1.5}.pa{fill:#dcfce7;stroke:#15803d;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none}</style>
  <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<text x="120" y="28" class="tb">Virtual</text>
<text x="380" y="28" class="tb">Page Table</text>
<text x="640" y="28" class="tb">Physical</text>
<rect x="50" y="50" width="140" height="40" class="va"/><text x="120" y="75" class="t">Page 0</text>
<rect x="50" y="100" width="140" height="40" class="va"/><text x="120" y="125" class="t">Page 1</text>
<rect x="50" y="150" width="140" height="40" class="va"/><text x="120" y="175" class="t">Page 2</text>
<rect x="50" y="200" width="140" height="40" class="va"/><text x="120" y="225" class="t">Page 3</text>
<rect x="310" y="50" width="160" height="40" class="pt"/><text x="390" y="75" class="t">PT[0] → Frame 5</text>
<rect x="310" y="100" width="160" height="40" class="pt"/><text x="390" y="125" class="t">PT[1] → Frame 2</text>
<rect x="310" y="150" width="160" height="40" class="pt"/><text x="390" y="175" class="t">PT[2] → invalid</text>
<rect x="310" y="200" width="160" height="40" class="pt"/><text x="390" y="225" class="t">PT[3] → Frame 7</text>
<rect x="570" y="50" width="140" height="40" class="pa"/><text x="640" y="75" class="t">Frame 0</text>
<rect x="570" y="100" width="140" height="40" class="pa"/><text x="640" y="125" class="t">Frame 1</text>
<rect x="570" y="150" width="140" height="40" class="pa"/><text x="640" y="175" class="t">Frame 2 (P1)</text>
<rect x="570" y="200" width="140" height="40" class="pa"/><text x="640" y="225" class="t">Frame 5 (P0)</text>
<rect x="570" y="250" width="140" height="40" class="pa"/><text x="640" y="275" class="t">Frame 7 (P3)</text>
<line x1="190" y1="70" x2="310" y2="70" class="arr" marker-end="url(#ar)"/>
<line x1="190" y1="120" x2="310" y2="120" class="arr" marker-end="url(#ar)"/>
<line x1="190" y1="220" x2="310" y2="220" class="arr" marker-end="url(#ar)"/>
<line x1="470" y1="70" x2="570" y2="220" class="arr" marker-end="url(#ar)"/>
<line x1="470" y1="120" x2="570" y2="170" class="arr" marker-end="url(#ar)"/>
<line x1="470" y1="220" x2="570" y2="270" class="arr" marker-end="url(#ar)"/>
<text x="380" y="320" class="t">Page table per process — kernel reloads it on context switch</text>
</svg>` },

        { type: 'heading', text: 'Address translation', level: 2 },
        { type: 'code', lang: 'pseudo', code: `<span class="com">// 32-bit address, 4KB pages → 20-bit page #, 12-bit offset</span>
virt_addr = 0x00003123
page  = virt_addr &gt;&gt; <span class="num">12</span>        <span class="com">// = 0x00003</span>
off   = virt_addr &amp; <span class="num">0xFFF</span>      <span class="com">// = 0x123</span>
frame = PageTable[page]
phys  = (frame &lt;&lt; <span class="num">12</span>) | off</div>` },

        { type: 'heading', text: 'Segmentation', level: 2 },
        { type: 'para', html: 'An older alternative: split the address space into variable-length <strong>segments</strong> with semantic meaning — code, stack, heap. Each has a base and limit. Suffers external fragmentation. Modern systems use paging; segmentation lingers in x86 but is mostly inert.' }
      ]
    },

    /* ============ Chapter 10 — Virtual Memory ============ */
    {
      id: 'os-c10',
      title: 'Virtual Memory',
      icon: '🪟',
      sections: [
        { type: 'heading', text: 'Pretend RAM is bigger', level: 1 },
        { type: 'para', html: 'Virtual memory gives each process a huge address space (e.g., 256 TB on x86-64) even though physical RAM is tiny by comparison. Inactive pages live on disk in the <strong>swap area</strong>. Only the actively-touched pages are in RAM.' },

        { type: 'heading', text: 'Demand paging', level: 2 },
        { type: 'image', alt: 'Page fault flow',
          svg: `<svg viewBox="0 0 780 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.cpu{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.mmu{fill:#fef3c7;stroke:#b45309;stroke-width:2}.disk{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none}.lab{font-family:Inter,sans-serif;font-size:12px;fill:#334155;text-anchor:middle}</style>
  <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<rect x="40" y="120" width="130" height="80" rx="8" class="cpu"/>
<text x="105" y="150" class="tb">CPU</text>
<text x="105" y="175" class="t">access vaddr</text>
<rect x="240" y="120" width="130" height="80" rx="8" class="mmu"/>
<text x="305" y="150" class="tb">MMU / PT</text>
<text x="305" y="175" class="t">valid bit?</text>
<rect x="440" y="40" width="130" height="80" rx="8" class="cpu"/>
<text x="505" y="65" class="tb">RAM</text>
<text x="505" y="90" class="t">page already here</text>
<rect x="440" y="200" width="130" height="80" rx="8" class="disk"/>
<text x="505" y="230" class="tb">Swap (disk)</text>
<text x="505" y="255" class="t">page lives here</text>
<rect x="640" y="120" width="120" height="80" rx="8" class="mmu"/>
<text x="700" y="150" class="tb">OS handler</text>
<text x="700" y="175" class="t">load & retry</text>
<line x1="170" y1="160" x2="240" y2="160" class="arr" marker-end="url(#ar2)"/>
<line x1="370" y1="140" x2="440" y2="80" class="arr" marker-end="url(#ar2)"/>
<text x="400" y="105" class="lab">valid=1 (HIT)</text>
<line x1="370" y1="180" x2="440" y2="240" class="arr" marker-end="url(#ar2)"/>
<text x="400" y="220" class="lab">valid=0 (FAULT)</text>
<line x1="570" y1="240" x2="640" y2="180" class="arr" marker-end="url(#ar2)"/>
<text x="610" y="220" class="lab">trap</text>
<line x1="700" y1="200" x2="540" y2="280" class="arr" marker-end="url(#ar2)"/>
<text x="630" y="295" class="lab">read into free frame</text>
</svg>` },

        { type: 'list', kind: 'numbered', items: [
          'CPU references a virtual address',
          'MMU walks the page table',
          'If valid bit = 0 → trap to OS (page fault)',
          'OS finds a free frame (or evicts one — see Chapter 11)',
          'OS reads the page from swap into the frame',
          'OS updates the page table, restarts the instruction'
        ] },

        { type: 'heading', text: 'The TLB', level: 2 },
        { type: 'para', html: 'Walking the page table on every memory access would be brutal. The <strong>TLB (Translation Lookaside Buffer)</strong> is a small associative cache of recent translations. A hit is single-cycle; a miss costs a page-table walk.' },

        { type: 'image', alt: 'TLB hit vs miss',
          svg: `<svg viewBox="0 0 740 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.tlb{fill:#dcfce7;stroke:#15803d;stroke-width:2}.pt{fill:#fef3c7;stroke:#b45309;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none}.cost{font-family:Inter,sans-serif;font-size:12px;font-weight:700;fill:#15803d;text-anchor:middle}.cost2{font-family:Inter,sans-serif;font-size:12px;font-weight:700;fill:#b91c1c;text-anchor:middle}</style>
  <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<text x="370" y="28" class="tb">TLB Hit vs Miss</text>
<rect x="60" y="60" width="140" height="60" rx="8" class="tlb"/>
<text x="130" y="95" class="tb">TLB lookup</text>
<line x1="200" y1="80" x2="320" y2="80" class="arr" marker-end="url(#ar3)"/>
<text x="260" y="65" class="cost">HIT (~1 cycle)</text>
<rect x="320" y="60" width="160" height="60" rx="8" class="tlb"/>
<text x="400" y="95" class="tb">Memory access</text>
<line x1="200" y1="120" x2="200" y2="170" class="arr" marker-end="url(#ar3)"/>
<text x="140" y="155" class="cost2">MISS</text>
<rect x="120" y="170" width="160" height="60" rx="8" class="pt"/>
<text x="200" y="205" class="tb">Walk page table</text>
<line x1="280" y1="200" x2="350" y2="200" class="arr" marker-end="url(#ar3)"/>
<rect x="350" y="170" width="160" height="60" rx="8" class="pt"/>
<text x="430" y="205" class="tb">Install in TLB</text>
<line x1="510" y1="200" x2="600" y2="200" class="arr" marker-end="url(#ar3)"/>
<rect x="600" y="170" width="100" height="60" rx="8" class="tlb"/>
<text x="650" y="205" class="tb">Access</text>
<text x="510" y="160" class="cost2">~100+ cycles</text>
</svg>` },

        { type: 'callout', kind: 'tip', html: 'Effective Access Time = hit_ratio × (TLB + memory) + miss_ratio × (TLB + page_table_walk + memory). High locality = high hit rate. That\'s why arrays beat linked lists for streaming.' },

        { type: 'heading', text: 'Thrashing', level: 2 },
        { type: 'para', html: 'When too many processes try to fit in too little RAM, the working set of each is bigger than its share, and page faults are nonstop. The CPU spends more time waiting for disk than computing — throughput collapses. Mitigation: page-fault-frequency monitoring, working-set models, or killing some processes.' }
      ]
    },

    /* ============ Chapter 11 — Page Replacement ============ */
    {
      id: 'os-c11',
      title: 'Page Replacement',
      icon: '🔁',
      sections: [
        { type: 'heading', text: 'When RAM is full, who gets evicted?', level: 1 },
        { type: 'para', html: 'On a page fault with no free frames, the OS must pick a victim page to evict. The choice affects how many future faults you get. Algorithms vary in quality and cost.' },

        { type: 'heading', text: 'FIFO', level: 2 },
        { type: 'para', html: 'Evict the page loaded earliest. Easy to implement (a queue). But suffers <strong>Belady\'s anomaly</strong>: adding more frames can sometimes <em>increase</em> the number of page faults — a counterintuitive paradox.' },

        { type: 'heading', text: 'Optimal (OPT)', level: 2 },
        { type: 'para', html: 'Evict the page that won\'t be used for the longest time in the future. Provably optimal, but requires an oracle — impossible in practice. We use OPT as a baseline to compare other algorithms.' },

        { type: 'heading', text: 'LRU — Least Recently Used', level: 2 },
        { type: 'para', html: 'Evict the page not used for the longest time in the past. Approximates OPT well under temporal locality. Pure LRU is expensive to maintain — every access updates a timestamp or moves a list node.' },

        { type: 'heading', text: 'Clock (second chance)', level: 2 },
        { type: 'image', alt: 'Clock page replacement diagram',
          svg: `<svg viewBox="0 0 460 380" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.c{fill:none;stroke:#1d4ed8;stroke-width:2}.p0{fill:#dcfce7;stroke:#15803d;stroke-width:2}.p1{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.bit{font-family:Inter,sans-serif;font-size:11px;fill:#0f172a;text-anchor:middle}.h{stroke:#b45309;stroke-width:3;fill:none}</style>
  <marker id="hh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#b45309"/></marker>
</defs>
<text x="230" y="28" class="tb">Clock algorithm — circular sweep</text>
<circle cx="230" cy="200" r="140" class="c"/>
<circle cx="230" cy="60" r="32" class="p1"/><text x="230" y="65" class="t">A</text><text x="230" y="80" class="bit">ref=1</text>
<circle cx="350" cy="130" r="32" class="p0"/><text x="350" y="135" class="t">B</text><text x="350" y="150" class="bit">ref=0</text>
<circle cx="350" cy="270" r="32" class="p1"/><text x="350" y="275" class="t">C</text><text x="350" y="290" class="bit">ref=1</text>
<circle cx="230" cy="340" r="32" class="p0"/><text x="230" y="345" class="t">D</text><text x="230" y="360" class="bit">ref=0</text>
<circle cx="110" cy="270" r="32" class="p1"/><text x="110" y="275" class="t">E</text><text x="110" y="290" class="bit">ref=1</text>
<circle cx="110" cy="130" r="32" class="p0"/><text x="110" y="135" class="t">F</text><text x="110" y="150" class="bit">ref=0</text>
<line x1="230" y1="200" x2="230" y2="100" class="h" marker-end="url(#hh)"/>
<text x="250" y="200" class="t">hand</text>
</svg>` },
        { type: 'para', html: 'A circular list with a "hand" pointer and a <strong>reference bit</strong> per page (set by hardware on each access). On a fault:' },
        { type: 'list', kind: 'numbered', items: [
          'If the current page has ref=1, clear it to 0 and advance the hand (second chance)',
          'If the current page has ref=0, evict it',
          'Replace the slot with the new page (ref=1) and advance'
        ] },

        { type: 'callout', kind: 'tip', html: 'Linux uses a variant of clock with two lists ("active" and "inactive"). NRU (Not Recently Used) and Aging are other LRU approximations.' },

        { type: 'heading', text: 'Worked example — FIFO vs LRU', level: 2 },
        { type: 'code', lang: 'pseudo', code: `<span class="com">Reference: 7 0 1 2 0 3 0 4 2 3 0 3 2 (3 frames)</span>

<span class="com">FIFO:</span> 7,0,1 → 2(evict 7) → 0 hit → 3(evict 0) → 0(evict 1) → 4(evict 2) → ...
       Total faults ≈ 15 depending on details

<span class="com">LRU:</span>  7,0,1 → 2(evict 7) → 0 hit → 3(evict 1) → 0 hit → 4(evict 2) → 2(evict 3) → 3(evict 0) → 0(evict 4) → 3 hit → 2 hit
       Total faults = <span class="num">9</span>` }
      ]
    },

    /* ============ Chapter 12 — File Systems ============ */
    {
      id: 'os-c12',
      title: 'File Systems',
      icon: '📁',
      sections: [
        { type: 'heading', text: 'Files, directories, inodes', level: 1 },
        { type: 'para', html: 'A <strong>file</strong> is a named sequence of bytes. A <strong>directory</strong> is a special file mapping names to inode numbers. An <strong>inode</strong> holds the file\'s metadata and pointers to its data blocks.' },

        { type: 'image', alt: 'Inode pointer structure',
          svg: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.in{fill:#fef3c7;stroke:#b45309;stroke-width:2}.b{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.ind{fill:#dcfce7;stroke:#15803d;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none}</style>
  <marker id="ari" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<rect x="20" y="30" width="180" height="330" rx="8" class="in"/>
<text x="110" y="55" class="tb">inode</text>
<text x="110" y="80" class="t">mode, owner, size</text>
<text x="110" y="100" class="t">timestamps, links</text>
<rect x="40" y="115" width="140" height="22" class="b"/><text x="110" y="131" class="t">direct[0]</text>
<rect x="40" y="140" width="140" height="22" class="b"/><text x="110" y="156" class="t">direct[1]</text>
<text x="110" y="178" class="t">. . .</text>
<rect x="40" y="190" width="140" height="22" class="b"/><text x="110" y="206" class="t">direct[11]</text>
<rect x="40" y="225" width="140" height="22" class="ind"/><text x="110" y="241" class="t">single indirect</text>
<rect x="40" y="255" width="140" height="22" class="ind"/><text x="110" y="271" class="t">double indirect</text>
<rect x="40" y="285" width="140" height="22" class="ind"/><text x="110" y="301" class="t">triple indirect</text>
<rect x="260" y="50" width="120" height="40" class="b"/><text x="320" y="75" class="t">data block 0</text>
<rect x="260" y="100" width="120" height="40" class="b"/><text x="320" y="125" class="t">data block 1</text>
<rect x="260" y="150" width="120" height="40" class="b"/><text x="320" y="175" class="t">data block 11</text>
<line x1="180" y1="126" x2="260" y2="70" class="arr" marker-end="url(#ari)"/>
<line x1="180" y1="151" x2="260" y2="120" class="arr" marker-end="url(#ari)"/>
<line x1="180" y1="201" x2="260" y2="170" class="arr" marker-end="url(#ari)"/>
<rect x="430" y="220" width="140" height="60" class="ind"/>
<text x="500" y="240" class="t">indirect block</text>
<text x="500" y="260" class="t">(1024 pointers)</text>
<rect x="620" y="200" width="120" height="30" class="b"/><text x="680" y="220" class="t">data block</text>
<rect x="620" y="240" width="120" height="30" class="b"/><text x="680" y="260" class="t">data block</text>
<rect x="620" y="280" width="120" height="30" class="b"/><text x="680" y="300" class="t">data block</text>
<line x1="180" y1="236" x2="430" y2="245" class="arr" marker-end="url(#ari)"/>
<line x1="570" y1="240" x2="620" y2="215" class="arr" marker-end="url(#ari)"/>
<line x1="570" y1="250" x2="620" y2="255" class="arr" marker-end="url(#ari)"/>
<line x1="570" y1="260" x2="620" y2="295" class="arr" marker-end="url(#ari)"/>
</svg>` },

        { type: 'heading', text: 'Hard links vs symbolic links', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Hard link</strong> — another directory entry pointing to the SAME inode. Increments link count. Cannot cross file systems.',
          '<strong>Symbolic (soft) link</strong> — its own inode whose contents are a path string. Resolved on access. Can be dangling.'
        ] },

        { type: 'code', lang: 'bash', code: `<span class="com"># hard link — second name for the same inode</span>
ln file.txt also.txt
ls -li file.txt also.txt   <span class="com"># same inode number</span>

<span class="com"># symbolic link — own inode holding a path</span>
ln -s file.txt soft.txt
ls -li soft.txt            <span class="com"># different inode, marked 'l'</span>` },

        { type: 'heading', text: 'Allocation methods', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Contiguous</strong> — file in consecutive blocks. Fast sequential I/O, hard to grow, external fragmentation.',
          '<strong>Linked</strong> — each block points to next. Easy growth, terrible random access.',
          '<strong>Indexed</strong> — an index block listing data blocks. Fast random access. Unix uses a multi-level variant: direct + indirect + double + triple.'
        ] },

        { type: 'heading', text: 'Sample inode size limits', level: 2 },
        { type: 'code', lang: 'pseudo', code: `<span class="com">Block = 4 KB, pointer = 4 bytes (1024 pointers per indirect block)</span>

12 direct                = 12 × 4K           = 48 KB
1 single indirect        = 1024 × 4K         = 4 MB
1 double indirect        = 1024 × 1024 × 4K  = 4 GB
1 triple indirect        = 1024^3 × 4K       = 4 TB

Total max file size ≈ <span class="num">4</span> TB` }
      ]
    },

    /* ============ Chapter 13 — File System Implementations ============ */
    {
      id: 'os-c13',
      title: 'FS Implementations: FAT, ext, NTFS',
      icon: '💾',
      sections: [
        { type: 'heading', text: 'The big three families', level: 1 },
        { type: 'para', html: 'Three lineages dominate today: FAT (and exFAT), the Unix inode line (ext2/3/4), and Windows NTFS. Each makes different tradeoffs.' },

        { type: 'heading', text: 'FAT — File Allocation Table', level: 2 },
        { type: 'para', html: 'FAT keeps the linked-list of blocks in a separate table at the start of the disk. Each entry is the next block number (or EOF). Simple, universally readable, but slow random access on big files. FAT32 has a 4 GB file-size cap; exFAT relaxes it.' },

        { type: 'heading', text: 'ext family (Linux)', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>ext2</strong> — inode + multi-level indirect blocks. No journaling.',
          '<strong>ext3</strong> — ext2 + journal for crash safety',
          '<strong>ext4</strong> — adds <em>extents</em> (start + length ranges, much more compact than per-block pointers), larger limits, delayed allocation'
        ] },

        { type: 'heading', text: 'NTFS', level: 2 },
        { type: 'para', html: 'Built around the <strong>Master File Table (MFT)</strong> — every file has an MFT record. Small files can live entirely inside their MFT record (resident attribute). Directories are B+ trees, scaling to millions of entries. NTFS also brings ACLs, compression, encryption (EFS), and journaling.' },

        { type: 'heading', text: 'Journaling: the safety net', level: 2 },
        { type: 'image', alt: 'Journaling sequence',
          svg: `<svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fef3c7;stroke:#b45309;stroke-width:2}.j{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:2;fill:none}</style>
  <marker id="arj" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#475569"/></marker>
</defs>
<text x="360" y="28" class="tb">Journaling write — atomic from crash perspective</text>
<rect x="30" y="60" width="140" height="60" rx="8" class="b"/>
<text x="100" y="95" class="tb">1. Write intent</text>
<rect x="200" y="60" width="140" height="60" rx="8" class="j"/>
<text x="270" y="85" class="tb">Journal</text>
<text x="270" y="105" class="t">"about to do X"</text>
<rect x="370" y="60" width="140" height="60" rx="8" class="b"/>
<text x="440" y="95" class="tb">2. Apply to disk</text>
<rect x="540" y="60" width="140" height="60" rx="8" class="b"/>
<text x="610" y="85" class="tb">3. Mark done</text>
<text x="610" y="105" class="t">in journal</text>
<line x1="170" y1="90" x2="200" y2="90" class="arr" marker-end="url(#arj)"/>
<line x1="340" y1="90" x2="370" y2="90" class="arr" marker-end="url(#arj)"/>
<line x1="510" y1="90" x2="540" y2="90" class="arr" marker-end="url(#arj)"/>
<text x="360" y="170" class="t">Crash in middle → replay or undo from journal on next mount</text>
</svg>` },
        { type: 'callout', kind: 'info', html: 'ZFS and Btrfs use copy-on-write instead of journaling: writes go to new locations, and a final pointer flip commits them atomically.' }
      ]
    },

    /* ============ Chapter 14 — Disk Scheduling ============ */
    {
      id: 'os-c14',
      title: 'I/O & Disk Scheduling',
      icon: '💿',
      sections: [
        { type: 'heading', text: 'Minimize the head sweep', level: 1 },
        { type: 'para', html: 'On a spinning disk, seek time dominates random I/O. Pending I/O requests can be reordered to reduce head movement. Several classic algorithms exist, drawn from elevator scheduling.' },

        { type: 'heading', text: 'The classic 5 algorithms', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>FCFS</strong> — serve in arrival order. Fair, simple, slow.',
          '<strong>SSTF</strong> — shortest seek time first. Greedy. Can starve far cylinders.',
          '<strong>SCAN</strong> — the "elevator": sweep one direction, reverse at the edge.',
          '<strong>C-SCAN</strong> — circular SCAN: sweep one direction, jump to start, sweep again. More uniform wait time.',
          '<strong>LOOK / C-LOOK</strong> — like SCAN / C-SCAN but reverse at the last actual request, not the cylinder edge.'
        ] },

        { type: 'heading', text: 'Worked example', level: 2 },
        { type: 'image', alt: 'Disk scheduling visualization',
          svg: `<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.ax{stroke:#0f172a;stroke-width:1.5}.req{fill:#b91c1c}.start{fill:#1d4ed8}.path{fill:none;stroke:#475569;stroke-width:1.5;stroke-dasharray:4,3}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}</style>
</defs>
<text x="380" y="28" class="tb">SSTF · head=53 · queue {98,183,37,122,14,124,65,67}</text>
<line x1="60" y1="250" x2="700" y2="250" class="ax"/>
<text x="60" y="270" class="t">0</text>
<text x="700" y="270" class="t">199</text>
<text x="380" y="290" class="t">Cylinder</text>
<circle cx="222" cy="250" r="6" class="start"/><text x="222" y="240" class="t">53 (head)</text>
<circle cx="265" cy="250" r="4" class="req"/><text x="265" y="278" class="t">65</text>
<circle cx="272" cy="250" r="4" class="req"/><text x="280" y="218" class="t">67</text>
<circle cx="180" cy="250" r="4" class="req"/><text x="180" y="278" class="t">37</text>
<circle cx="105" cy="250" r="4" class="req"/><text x="105" y="218" class="t">14</text>
<circle cx="375" cy="250" r="4" class="req"/><text x="375" y="278" class="t">98</text>
<circle cx="453" cy="250" r="4" class="req"/><text x="453" y="218" class="t">122</text>
<circle cx="460" cy="250" r="4" class="req"/><text x="460" y="278" class="t">124</text>
<circle cx="650" cy="250" r="4" class="req"/><text x="650" y="278" class="t">183</text>
<path d="M222 245 Q243 200 265 245" class="path"/>
<path d="M265 245 Q268 200 272 245" class="path"/>
<path d="M272 245 Q226 170 180 245" class="path"/>
<path d="M180 245 Q142 170 105 245" class="path"/>
<path d="M105 245 Q240 100 375 245" class="path"/>
<path d="M375 245 Q414 170 453 245" class="path"/>
<path d="M453 245 Q456 200 460 245" class="path"/>
<path d="M460 245 Q555 130 650 245" class="path"/>
<text x="380" y="80" class="t">Total movement = 12+2+30+23+84+24+2+59 = 236</text>
</svg>` },

        { type: 'callout', kind: 'info', html: 'On modern SSDs, there is no head — random and sequential access have similar costs. Linux\'s noop and mq-deadline schedulers do minimal reordering, leaving the work to the device.' }
      ]
    },

    /* ============ Chapter 15 — Kernel Architectures ============ */
    {
      id: 'os-c15',
      title: 'Kernel Architectures',
      icon: '🏛️',
      sections: [
        { type: 'heading', text: 'Monolithic, microkernel, hybrid', level: 1 },
        { type: 'para', html: 'OSes differ widely in how much code lives in kernel mode. The three philosophies — monolithic, microkernel, hybrid — represent different tradeoffs between speed and isolation.' },

        { type: 'heading', text: 'Monolithic', level: 2 },
        { type: 'para', html: 'Everything — drivers, file systems, network stack, scheduler — runs in kernel mode in one big address space. <strong>Linux</strong>, classic Unix, BSD. Fast: no IPC overhead between kernel modules. But: a buggy driver can corrupt the whole kernel.' },
        { type: 'callout', kind: 'info', html: 'Linux is monolithic but supports <strong>Loadable Kernel Modules</strong> (LKMs). You can <code>insmod</code> a driver at runtime, no reboot needed.' },

        { type: 'heading', text: 'Microkernel', level: 2 },
        { type: 'para', html: 'Only IPC, scheduling, and basic memory management in the kernel. Drivers, file systems, even networking are user-space servers that talk via IPC. <strong>QNX, Minix, seL4</strong>. More resilient (a crashed driver doesn\'t kill the OS) but slower (every interaction is a context switch).' },

        { type: 'image', alt: 'Kernel architecture comparison',
          svg: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.k{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.u{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style>
</defs>
<text x="125" y="30" class="tb">Monolithic</text>
<rect x="30" y="50" width="190" height="50" rx="6" class="u"/><text x="125" y="80" class="t">User apps</text>
<rect x="30" y="110" width="190" height="220" rx="6" class="k"/>
<text x="125" y="135" class="tb">Kernel</text>
<text x="125" y="160" class="t">Scheduler</text>
<text x="125" y="180" class="t">Memory mgmt</text>
<text x="125" y="200" class="t">File systems</text>
<text x="125" y="220" class="t">Drivers</text>
<text x="125" y="240" class="t">Network stack</text>
<text x="125" y="260" class="t">IPC</text>
<text x="125" y="320" class="lab">e.g. Linux, BSD</text>
<text x="380" y="30" class="tb">Microkernel</text>
<rect x="285" y="50" width="190" height="170" rx="6" class="u"/>
<text x="380" y="75" class="tb">User space</text>
<text x="380" y="100" class="t">Drivers</text>
<text x="380" y="120" class="t">File systems</text>
<text x="380" y="140" class="t">Network stack</text>
<text x="380" y="160" class="t">App processes</text>
<rect x="285" y="230" width="190" height="100" rx="6" class="k"/>
<text x="380" y="255" class="tb">Microkernel</text>
<text x="380" y="280" class="t">IPC</text>
<text x="380" y="300" class="t">Scheduling</text>
<text x="380" y="320" class="t">Minimal MM</text>
<text x="635" y="30" class="tb">Hybrid</text>
<rect x="540" y="50" width="190" height="50" rx="6" class="u"/><text x="635" y="80" class="t">User apps</text>
<rect x="540" y="110" width="190" height="220" rx="6" class="k"/>
<text x="635" y="135" class="tb">Hybrid kernel</text>
<text x="635" y="160" class="t">Scheduler</text>
<text x="635" y="180" class="t">FS, drivers</text>
<text x="635" y="200" class="t">(mostly in kernel)</text>
<text x="635" y="225" class="t">+ some servers</text>
<text x="635" y="245" class="t">in user space</text>
<text x="635" y="320" class="lab">e.g. Windows, macOS</text>
</svg>` },

        { type: 'heading', text: 'Hybrid kernels', level: 2 },
        { type: 'para', html: '<strong>Windows NT</strong> and <strong>macOS (XNU)</strong> sit in between: mostly monolithic for speed, but some services (Win32 subsystems, Mach servers) are isolated. Pragmatic — not pure but works.' },

        { type: 'heading', text: 'A quick Linux vs Windows comparison', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Linux</strong>: monolithic + LKMs, fork/exec process model, ext4/xfs default, signals, everything is a file (kinda)',
          '<strong>Windows NT</strong>: hybrid (Executive + microkernel-style HAL), CreateProcess() not fork, NTFS, structured exception handling, MFT-based FS',
          '<strong>macOS</strong>: XNU = Mach microkernel core + BSD layer + I/O Kit drivers (C++ in kernel!)'
        ] },

        { type: 'callout', kind: 'tip', html: 'Pure architectures rarely survive contact with reality. Linux is "monolithic-ish + modules", Windows is "microkernel-flavored monolithic", macOS is "Mach with BSD glued on top." Engineering wins over purity.' },

        { type: 'heading', text: 'Where to go next', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Read <em>Operating Systems: Three Easy Pieces</em> (Remzi & Andrea Arpaci-Dusseau) — free PDF, the modern classic',
          'Skim Linux <code>kernel/sched/core.c</code> to see CFS in real code',
          'Try <em>xv6</em>: a teaching OS based on v6 Unix — full source, runs in QEMU',
          'For interview prep, drill through the GATE-style scheduling and page-replacement problems'
        ] }
      ]
    }

  ]
});

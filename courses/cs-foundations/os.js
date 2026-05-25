PUSH({
  id: 'os',
  name: 'Operating Systems',
  icon: '🖥️',
  color: '#6a1b9a',
  description: 'Processes, threads, scheduling, memory, and file systems — the OS textbook reborn.',
  units: [

    /* ============== UNIT 1 — What an OS does ============== */
    {
      id: 'os-u1', name: 'Unit 1 · What an OS Does', description: 'Abstraction, resource management, kernel mode',
      lessons: [
        {
          id: 'os-u1-l1', name: 'Role of an OS', icon: '🖥️', xp: 15,
          challenges: [
            { type: 'concept', title: 'The OS is a middleman', content: `<p>An <strong>operating system</strong> sits between hardware and your programs. It does two big jobs:</p>
<div class="code-block"><span class="com">1. ABSTRACTION</span>  — turn ugly hardware into clean APIs
                  (a disk becomes "files", RAM becomes "address spaces")

<span class="com">2. RESOURCE MGMT</span> — share CPU, memory, disks, network
                  among many processes fairly and safely</div>
<p>Without an OS, every program would have to drive the disk and CPU directly. With one, you call <code>open()</code> and the OS deals with the chaos.</p>` },
            { type: 'multiple-choice', prompt: 'Which is NOT a core job of an OS?',
              options: [
                { text: 'Manage CPU time among processes', code: false },
                { text: 'Provide abstractions over hardware', code: false },
                { text: 'Compile your source code', code: false },
                { text: 'Protect processes from each other', code: false }
              ],
              correct: 2, explanation: 'Compilation is a userspace tool. The OS schedules, abstracts, and protects.' },
            { type: 'true-false', statement: 'The OS lets multiple programs share a single CPU by switching between them quickly.', correct: true, explanation: 'That illusion of simultaneity is called multiprogramming / multitasking.' },
            { type: 'match-pairs', prompt: 'Match resource → OS abstraction.', leftLabel: 'Hardware', rightLabel: 'Abstraction',
              pairs: [
                { left: 'CPU', right: 'Process / Thread' },
                { left: 'RAM', right: 'Address space' },
                { left: 'Disk', right: 'File' },
                { left: 'Network card', right: 'Socket' }
              ] },
            { type: 'multiple-choice', prompt: 'Which of these IS part of an OS?',
              options: [
                { text: 'A web browser', code: false },
                { text: 'A scheduler', code: false },
                { text: 'A spreadsheet', code: false },
                { text: 'A text editor', code: false }
              ],
              correct: 1, explanation: 'The scheduler decides which process gets the CPU next — pure OS turf.' },
            { type: 'fill-blank', prompt: 'Complete: "the OS is a ____ between hardware and applications."',
              codeLines: [{ html: 'the OS is a <span class="fn">_BLANK_</span> between hardware and applications.' }],
              tokens: ['middleman', 'compiler', 'database', 'browser'],
              correctAnswer: 'middleman', explanation: 'It mediates access — abstraction + resource management.' }
          ]
        },
        {
          id: 'os-u1-l2', name: 'Kernel mode & system calls', icon: '🛡️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two privilege levels', content: `<p>CPUs have (at least) two modes:</p>
<div class="code-block"><span class="com">USER MODE</span>   — your code runs here. Limited instructions.
              Can't touch hardware directly.

<span class="com">KERNEL MODE</span> — the OS runs here. Full access to
              everything: memory, devices, interrupts.</div>
<p>When your program needs something privileged (read a file, allocate memory, fork a process), it issues a <strong>system call</strong>. This triggers a trap into kernel mode, the OS does the work, then returns to user mode.</p>
<div class="code-block"><span class="com">// In C, read() is a syscall wrapper</span>
<span class="ty">int</span> n = <span class="fn">read</span>(fd, buf, <span class="num">100</span>);
<span class="com">// User → trap → kernel reads disk → returns → User</span></div>` },
            { type: 'multiple-choice', prompt: 'A program tries to write directly to a disk sector. What happens?',
              options: [
                { text: 'It works fine', code: false },
                { text: 'CPU traps to kernel — instruction is privileged', code: false },
                { text: 'The disk is silently corrupted', code: false },
                { text: 'It writes to RAM instead', code: false }
              ],
              correct: 1, explanation: 'Privileged instructions in user mode cause a trap. The OS decides what to do.' },
            { type: 'true-false', statement: 'A system call is just a function call inside your binary — no special machinery involved.',
              correct: false, explanation: 'A syscall is a trap that switches privilege from user to kernel mode. Much more than a regular call.' },
            { type: 'match-pairs', prompt: 'Match syscall to what it does.', leftLabel: 'Syscall', rightLabel: 'Action',
              pairs: [
                { left: 'fork()', right: 'Create a process' },
                { left: 'read()', right: 'Read from a file descriptor' },
                { left: 'mmap()', right: 'Map memory region' },
                { left: 'exit()', right: 'Terminate process' }
              ] },
            { type: 'multiple-choice', prompt: 'Why does the OS run in a separate privilege level?',
              options: [
                { text: 'For performance reasons', code: false },
                { text: 'To prevent buggy/malicious user programs from breaking the system', code: false },
                { text: 'Because the CPU requires it for booting', code: false },
                { text: 'It is a historical accident', code: false }
              ],
              correct: 1, explanation: 'Isolation. Kernel-mode code is trusted; user-mode code is not.' },
            { type: 'output-predict', prompt: 'Which line below performs a system call?',
              code: `<span class="ty">int</span> x = <span class="num">5</span>;        <span class="com">// (A)</span>
<span class="ty">int</span> y = x + <span class="num">1</span>;    <span class="com">// (B)</span>
<span class="fn">write</span>(<span class="num">1</span>, <span class="str">"hi"</span>, <span class="num">2</span>); <span class="com">// (C)</span>
<span class="kw">return</span> y;        <span class="com">// (D)</span>`,
              options: ['A', 'B', 'C', 'D'],
              correct: 2, explanation: 'write() crosses into the kernel to push bytes to a file descriptor. The others are pure user-mode arithmetic.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Process concept ============== */
    {
      id: 'os-u2', name: 'Unit 2 · Processes', description: 'PCB and the process state machine',
      lessons: [
        {
          id: 'os-u2-l1', name: 'What is a process?', icon: '⚙️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Process = program in execution', content: `<p>A <strong>program</strong> is bytes on disk. A <strong>process</strong> is a running instance: it has CPU registers, memory, open files, etc.</p>
<p>The kernel tracks each process in a <strong>Process Control Block (PCB)</strong>:</p>
<div class="code-block"><span class="com">PCB contains:</span>
  PID (process id)
  Process state (running, ready, waiting, ...)
  Program counter
  CPU registers
  Memory management info (page tables)
  Open file table
  Accounting info (CPU time used, ...)
  Pointer to parent / children</div>
<p>When the OS switches processes (<em>context switch</em>), it saves the running process's registers into its PCB, loads the next process's PCB into the CPU, and resumes.</p>` },
            { type: 'multiple-choice', prompt: 'What is the difference between a program and a process?',
              options: [
                { text: 'They are the same thing', code: false },
                { text: 'A program is static code on disk; a process is a running instance', code: false },
                { text: 'A program runs in kernel mode; a process in user mode', code: false },
                { text: 'A process is smaller than a program', code: false }
              ],
              correct: 1, explanation: 'Program = recipe. Process = the meal being cooked.' },
            { type: 'true-false', statement: 'Two processes can run the same program at the same time, each with its own PCB and memory.',
              correct: true, explanation: 'Run two terminals of vim — same program, two processes.' },
            { type: 'match-pairs', prompt: 'Match PCB field → purpose.', leftLabel: 'Field', rightLabel: 'Purpose',
              pairs: [
                { left: 'PID', right: 'Unique process identifier' },
                { left: 'Program counter', right: 'Next instruction to execute' },
                { left: 'Page table ptr', right: 'Locate process memory' },
                { left: 'State', right: 'Running / ready / waiting' }
              ] },
            { type: 'multiple-choice', prompt: 'During a context switch, the kernel must:',
              options: [
                { text: 'Reboot the CPU', code: false },
                { text: 'Save outgoing process registers, load incoming process registers', code: false },
                { text: 'Terminate the outgoing process', code: false },
                { text: 'Free all memory', code: false }
              ],
              correct: 1, explanation: 'Save state, load state — and update the running pointer. Cheap compared to the alternatives.' },
            { type: 'fill-blank', prompt: 'The data structure that tracks per-process info is the:',
              codeLines: [{ html: 'Process Control Block — short name <span class="fn">_BLANK_</span>' }],
              tokens: ['PCB', 'TLB', 'PID', 'PIB'],
              correctAnswer: 'PCB', explanation: 'PCB. Linux calls it task_struct.' }
          ]
        },
        {
          id: 'os-u2-l2', name: 'Process states', icon: '🔄', xp: 20,
          challenges: [
            { type: 'concept', title: 'The 5-state diagram', content: `<p>A process moves between these states during its lifetime:</p>
<div class="code-block"><span class="com">NEW</span>        — being created
<span class="com">READY</span>      — waiting for CPU
<span class="com">RUNNING</span>    — currently executing on CPU
<span class="com">WAITING</span>    — blocked on I/O or event
<span class="com">TERMINATED</span> — finished or killed</div>
<p>Transitions:</p>
<div class="code-block">NEW     → READY      (admitted)
READY   → RUNNING    (dispatched / scheduled)
RUNNING → READY      (preempted, time slice expired)
RUNNING → WAITING    (I/O request, sleep)
WAITING → READY      (I/O complete, event arrived)
RUNNING → TERMINATED (exit)</div>` },
            { type: 'multiple-choice', prompt: 'A process calls <code>read()</code> on a slow file. What state does it enter?',
              options: [
                { text: 'Ready', code: false },
                { text: 'Running', code: false },
                { text: 'Waiting (blocked)', code: false },
                { text: 'Terminated', code: false }
              ],
              correct: 2, explanation: 'Blocked I/O moves the process to WAITING until the data arrives.' },
            { type: 'true-false', statement: 'A process can go directly from WAITING to RUNNING when its I/O completes.',
              correct: false, explanation: 'WAITING → READY → RUNNING. The scheduler must pick it after it becomes ready.' },
            { type: 'reorder-code', prompt: 'A process needs to read a file. Reorder the state transitions.',
              lines: [
                'RUNNING (executing user code)',
                'WAITING (blocked on disk I/O after calling read)',
                'READY (I/O done — back in run queue)',
                'RUNNING (resumed by scheduler)'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'match-pairs', prompt: 'Match transition cause → arrow.', leftLabel: 'Cause', rightLabel: 'Transition',
              pairs: [
                { left: 'Time slice ends', right: 'RUNNING → READY' },
                { left: 'I/O request', right: 'RUNNING → WAITING' },
                { left: 'I/O completes', right: 'WAITING → READY' },
                { left: 'exit()', right: 'RUNNING → TERMINATED' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the typical lifecycle of a normal process (initial → final).',
              tokens: ['NEW', '→', 'READY', '→', 'RUNNING', '→', 'TERMINATED', 'WAITING', '←'],
              correctOrder: ['NEW', '→', 'READY', '→', 'RUNNING', '→', 'TERMINATED'],
              explanation: 'New → admitted → ready → dispatched → running → exit → terminated. WAITING may happen in between but isn\'t required.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Process creation ============== */
    {
      id: 'os-u3', name: 'Unit 3 · Process Creation', description: 'fork, exec, zombies, orphans',
      lessons: [
        {
          id: 'os-u3-l1', name: 'fork() and exec()', icon: '🍴', xp: 25,
          challenges: [
            { type: 'concept', title: 'The Unix way: split, then become', content: `<p>Unix creates processes with a two-step dance:</p>
<div class="code-block"><span class="kw">pid_t</span> pid = <span class="fn">fork</span>();    <span class="com">// 1. CLONE: child is exact copy of parent</span>

<span class="kw">if</span> (pid == <span class="num">0</span>) {
   <span class="fn">execvp</span>(<span class="str">"/bin/ls"</span>, args); <span class="com">// 2. BECOME: replace memory with new program</span>
} <span class="kw">else</span> {
   <span class="fn">wait</span>(NULL);              <span class="com">// parent waits for child</span>
}</div>
<p><code>fork()</code> returns:</p>
<div class="code-block"> 0   in the child
PID  in the parent (the child's PID)
-1   on error</div>
<p><code>exec*</code> family replaces the current process's memory image with a different program. The PID stays the same; the code is brand new.</p>` },
            { type: 'output-predict', prompt: 'How many "hi" lines does this print?',
              code: `<span class="fn">fork</span>();
<span class="fn">fork</span>();
<span class="fn">printf</span>(<span class="str">"hi\\n"</span>);`,
              options: ['1', '2', '3', '4'],
              correct: 3, explanation: 'Two forks → 2^2 = 4 processes — each prints "hi". A classic interview trap.' },
            { type: 'output-predict', prompt: 'In the child after fork(), what does <code>pid</code> hold?',
              code: `<span class="kw">pid_t</span> pid = <span class="fn">fork</span>();`,
              options: ['Parent\'s PID', 'Child\'s PID', '0', '-1'],
              correct: 2, explanation: 'fork() returns 0 in the child. The parent receives the child\'s PID.' },
            { type: 'true-false', statement: 'After exec(), the process\'s PID changes.',
              correct: false, explanation: 'PID is preserved. Only the address space (code, data, stack) gets replaced.' },
            { type: 'match-pairs', prompt: 'Match call → effect.', leftLabel: 'Call', rightLabel: 'Effect',
              pairs: [
                { left: 'fork()', right: 'Clone calling process' },
                { left: 'exec()', right: 'Replace memory with new program' },
                { left: 'wait()', right: 'Block until child exits' },
                { left: 'exit()', right: 'Terminate calling process' }
              ] },
            { type: 'fill-blank', prompt: 'Run "ls" in a child process:',
              codeLines: [
                { html: '<span class="kw">if</span> (<span class="fn">fork</span>() == <span class="num">0</span>) <span class="fn">_BLANK_</span>(<span class="str">"/bin/ls"</span>, args);' }
              ],
              tokens: ['execvp', 'fork', 'wait', 'spawn', 'system'],
              correctAnswer: 'execvp', explanation: 'execvp replaces the child\'s image with ls.' }
          ]
        },
        {
          id: 'os-u3-l2', name: 'Zombies & orphans', icon: '👻', xp: 20,
          challenges: [
            { type: 'concept', title: 'When parents misbehave', content: `<p>Two odd lifecycles can happen:</p>
<div class="code-block"><span class="com">ZOMBIE</span>  — child exited, but parent hasn't called wait().
          The PCB lingers so the parent can read the exit code.
          Fix: parent should wait() (or set SIGCHLD handling).

<span class="com">ORPHAN</span>  — parent exited while child still running.
          The child is re-parented to <span class="kw">init</span> (PID 1),
          which periodically reaps any orphans.</div>
<p>Zombies cost almost no memory but they hold a PID slot. Lots of zombies = forks may eventually fail with EAGAIN.</p>` },
            { type: 'multiple-choice', prompt: 'What is a zombie process?',
              options: [
                { text: 'A process that won\'t stop running', code: false },
                { text: 'A child that has exited but whose parent hasn\'t called wait()', code: false },
                { text: 'A process consuming all CPU', code: false },
                { text: 'A process whose code was deleted from disk', code: false }
              ],
              correct: 1, explanation: 'Dead but not reaped. The exit status sits in the PCB until wait().' },
            { type: 'true-false', statement: 'An orphan process becomes adopted by init (PID 1) and gets reaped automatically.',
              correct: true, explanation: 'init periodically waits on its adopted children — so orphans don\'t turn into zombies.' },
            { type: 'match-pairs', prompt: 'Match scenario → result.', leftLabel: 'Scenario', rightLabel: 'Outcome',
              pairs: [
                { left: 'Child exits, parent calls wait', right: 'Clean reap, no zombie' },
                { left: 'Child exits, parent ignores SIGCHLD', right: 'Zombie process' },
                { left: 'Parent exits before child', right: 'Child becomes orphan' },
                { left: 'init reaps an orphan child', right: 'Process fully cleaned up' }
              ] },
            { type: 'multiple-choice', prompt: 'How can you prevent zombies the simplest way?',
              options: [
                { text: 'Disable forking', code: false },
                { text: 'Call wait() (or set SIGCHLD to SIG_IGN) in the parent', code: false },
                { text: 'Kill the child harder', code: false },
                { text: 'Reboot the machine', code: false }
              ],
              correct: 1, explanation: 'Either reap explicitly with wait(), or tell the kernel to auto-reap by ignoring SIGCHLD.' },
            { type: 'output-predict', prompt: 'If you run <code>ps</code> and see <code>STAT = Z</code> for a process, what is it?',
              code: ``,
              options: ['Sleeping', 'Stopped', 'Zombie', 'Running'],
              correct: 2, explanation: 'Z = zombie. R = running, S = sleep, T = stopped.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Threads ============== */
    {
      id: 'os-u4', name: 'Unit 4 · Threads', description: 'Threads inside a process, threading models',
      lessons: [
        {
          id: 'os-u4-l1', name: 'Threads vs processes', icon: '🧵', xp: 20,
          challenges: [
            { type: 'concept', title: 'A thread is a process\'s execution path', content: `<p>A process owns an address space + open files + accounting. A <strong>thread</strong> is just an execution path inside that process — its own program counter, registers, and stack.</p>
<div class="code-block"><span class="com">Shared by all threads in a process:</span>
  Code, data, heap
  Open files
  Signal handlers

<span class="com">Per thread (private):</span>
  Stack
  Registers
  Program counter
  Thread ID</div>
<p>Cheaper than processes: no new address space, faster context switches, easy data sharing (since heap is shared). But: any thread can corrupt shared state, and a crash in one thread can kill the whole process.</p>` },
            { type: 'multiple-choice', prompt: 'Two threads in the same process share:',
              options: [
                { text: 'Heap, code, open files', code: false },
                { text: 'Stack', code: false },
                { text: 'CPU registers', code: false },
                { text: 'Program counter', code: false }
              ],
              correct: 0, explanation: 'Threads share heap, code, and file descriptors. Each has its own stack and registers.' },
            { type: 'true-false', statement: 'Creating a thread is generally cheaper than creating a process.',
              correct: true, explanation: 'No new address space — just a stack, registers, and TCB.' },
            { type: 'match-pairs', prompt: 'Per-thread vs per-process.', leftLabel: 'Item', rightLabel: 'Scope',
              pairs: [
                { left: 'Stack', right: 'Per thread' },
                { left: 'Heap', right: 'Per process' },
                { left: 'Open file table', right: 'Per process' },
                { left: 'Registers', right: 'Per thread' }
              ] },
            { type: 'multiple-choice', prompt: 'A crash in one thread tends to:',
              options: [
                { text: 'Affect only that thread', code: false },
                { text: 'Kill the entire process (all threads)', code: false },
                { text: 'Reboot the OS', code: false },
                { text: 'Create a new process', code: false }
              ],
              correct: 1, explanation: 'A segfault in one thread takes the whole process down. Processes isolate; threads don\'t.' },
            { type: 'fill-blank', prompt: 'Each thread has its own:',
              codeLines: [{ html: 'Each thread has its own <span class="fn">_BLANK_</span> (and registers, and PC).' }],
              tokens: ['stack', 'heap', 'PID', 'file table'],
              correctAnswer: 'stack', explanation: 'Stack is per-thread. Heap is shared.' }
          ]
        },
        {
          id: 'os-u4-l2', name: 'Threading models', icon: '🪡', xp: 25,
          challenges: [
            { type: 'concept', title: 'How user threads map to kernel threads', content: `<p>There are three classic mappings:</p>
<div class="code-block"><span class="com">MANY-TO-ONE</span>  many user threads → one kernel thread
              + cheap to switch
              − one blocking syscall blocks ALL user threads
              − can't use multiple CPUs

<span class="com">ONE-TO-ONE</span>   each user thread → its own kernel thread
              + true parallelism, blocking is isolated
              − more kernel objects → more memory / overhead
              (Linux NPTL, Windows, modern systems)

<span class="com">MANY-TO-MANY</span> many user threads → fewer kernel threads
              + balance of both worlds
              − complex to implement (Solaris LWP)</div>` },
            { type: 'multiple-choice', prompt: 'The threading model used by modern Linux (NPTL) is:',
              options: [
                { text: 'Many-to-one', code: false },
                { text: 'One-to-one', code: false },
                { text: 'Many-to-many', code: false },
                { text: 'Zero-to-many', code: false }
              ],
              correct: 1, explanation: 'NPTL gives each user thread a kernel thread (a task_struct).' },
            { type: 'true-false', statement: 'In a many-to-one model, if one user thread makes a blocking syscall, all other user threads in the process also block.',
              correct: true, explanation: 'There is only one kernel thread — once it blocks, no other user thread can be scheduled.' },
            { type: 'match-pairs', prompt: 'Model → property.', leftLabel: 'Model', rightLabel: 'Trait',
              pairs: [
                { left: 'Many-to-one', right: 'Can\'t exploit multiple cores' },
                { left: 'One-to-one', right: 'True parallelism' },
                { left: 'Many-to-many', right: 'Configurable kernel-thread pool' },
                { left: 'Kernel threads', right: 'Scheduled by the OS' }
              ] },
            { type: 'multiple-choice', prompt: 'Pure user-level threads have one big disadvantage:',
              options: [
                { text: 'They are expensive to create', code: false },
                { text: 'A blocking syscall in any thread blocks the whole process', code: false },
                { text: 'They can only run sequentially across cores', code: false },
                { text: 'They require special hardware', code: false }
              ],
              correct: 1, explanation: 'The kernel doesn\'t know about user threads, so it blocks the entire kernel thread on a syscall.' },
            { type: 'output-predict', prompt: 'On Linux with NPTL, creating 1000 threads in one process creates roughly how many kernel-visible tasks?',
              code: ``,
              options: ['1', '10', '100', '1000 (plus the main)'],
              correct: 3, explanation: 'One-to-one mapping: each pthread = one kernel task.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — CPU Scheduling ============== */
    {
      id: 'os-u5', name: 'Unit 5 · CPU Scheduling', description: 'FCFS, SJF, RR, Priority, MLFQ',
      lessons: [
        {
          id: 'os-u5-l1', name: 'Scheduling metrics & FCFS', icon: '⏱️', xp: 20,
          challenges: [
            { type: 'concept', title: 'What we care about', content: `<p>Four common metrics:</p>
<div class="code-block"><span class="com">CPU utilization</span>  — keep CPU busy (higher is better)
<span class="com">Throughput</span>       — processes finished per unit time
<span class="com">Turnaround time</span>  — completion - arrival
<span class="com">Waiting time</span>     — time spent in ready queue (no CPU)
<span class="com">Response time</span>    — first dispatch - arrival</div>
<p><strong>FCFS (First-Come First-Served)</strong> is the simplest: a FIFO queue. Non-preemptive. Easy, but suffers from the <em>convoy effect</em> — one long job stalls many short ones behind it.</p>` },
            { type: 'output-predict', prompt: 'Three processes arrive at t=0 with burst times P1=24, P2=3, P3=3. Using FCFS in order P1, P2, P3, what is the average waiting time?',
              code: `arrival 0 0 0
burst   24 3 3
order   P1 P2 P3`,
              options: ['3', '10', '17', '24'],
              correct: 2, explanation: 'Waiting: P1=0, P2=24, P3=27. Avg = (0+24+27)/3 = 17.' },
            { type: 'output-predict', prompt: 'Same processes but order P2, P3, P1 — what is the average waiting time?',
              code: `arrival 0 0 0
burst   3 3 24
order   P2 P3 P1`,
              options: ['3', '4', '10', '17'],
              correct: 0, explanation: 'Waiting: P2=0, P3=3, P1=6. Avg = (0+3+6)/3 = 3. Order matters!' },
            { type: 'multiple-choice', prompt: 'The "convoy effect" in FCFS refers to:',
              options: [
                { text: 'Many short processes finishing quickly', code: false },
                { text: 'One long process delays many short ones behind it', code: false },
                { text: 'Processes arriving together', code: false },
                { text: 'CPU staying idle', code: false }
              ],
              correct: 1, explanation: 'Tank up front, sports cars stuck behind. Average wait skyrockets.' },
            { type: 'true-false', statement: 'FCFS is preemptive — a new arrival can kick the current process off the CPU.',
              correct: false, explanation: 'FCFS is strictly non-preemptive.' },
            { type: 'match-pairs', prompt: 'Match metric → definition.', leftLabel: 'Metric', rightLabel: 'Meaning',
              pairs: [
                { left: 'Turnaround', right: 'Completion - arrival' },
                { left: 'Waiting', right: 'Time spent in ready queue' },
                { left: 'Response', right: 'First CPU - arrival' },
                { left: 'Throughput', right: 'Processes / time' }
              ] }
          ]
        },
        {
          id: 'os-u5-l2', name: 'SJF, Round Robin, Priority', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three workhorse algorithms', content: `<p><strong>SJF (Shortest Job First)</strong> — pick the process with the smallest remaining burst. <em>Optimal</em> for average waiting time, but you can\'t know burst times perfectly. <strong>SRTF</strong> is its preemptive cousin.</p>
<p><strong>Round Robin (RR)</strong> — FCFS with a time quantum. After each quantum, the running process goes to the back of the queue. Great response time, bounded fairness. Quantum too small → context-switch overhead. Too large → behaves like FCFS.</p>
<p><strong>Priority scheduling</strong> — highest-priority ready process runs. Risk: <em>starvation</em> of low-priority. Fix: <em>aging</em> (gradually bump priority while waiting).</p>
<div class="code-block"><span class="com">Gantt for RR (quantum=4) on P1=10,P2=4,P3=6 arr=0:</span>
| P1 | P2 | P3 | P1 | P3 | P1 |
0    4    8    12   16   18   20</div>` },
            { type: 'output-predict', prompt: 'Processes P1=6, P2=8, P3=7, P4=3 all arrive at t=0. Using non-preemptive SJF, what is the average waiting time?',
              code: `burst   6 8 7 3
arrival 0 0 0 0
algo    SJF (non-preemptive)`,
              options: ['5', '7', '10.25', '14'],
              correct: 1, explanation: 'Order: P4(3), P1(6), P3(7), P2(8). Wait: P4=0, P1=3, P3=9, P2=16. Avg = 28/4 = 7.' },
            { type: 'output-predict', prompt: 'P1 burst=24, P2=3, P3=3, all arrive at 0. Round Robin quantum=4 — what is the average waiting time?',
              code: `burst   24 3 3
quantum 4`,
              options: ['3', '5.66', '17', '24'],
              correct: 1, explanation: 'Schedule: P1(0-4) P2(4-7) P3(7-10) P1(10-end). Wait: P1=6, P2=4, P3=7. Avg ≈ 5.66.' },
            { type: 'multiple-choice', prompt: 'Starvation in priority scheduling is mitigated by:',
              options: [
                { text: 'Round Robin', code: false },
                { text: 'Aging — gradually increase priority of waiting processes', code: false },
                { text: 'Preemption', code: false },
                { text: 'Increasing the quantum', code: false }
              ],
              correct: 1, explanation: 'Aging boosts long-waiting tasks so they eventually run.' },
            { type: 'true-false', statement: 'SJF gives the minimum average waiting time among non-preemptive algorithms.',
              correct: true, explanation: 'Provably optimal — short jobs first minimize sum of waits.' },
            { type: 'match-pairs', prompt: 'Match algorithm → trait.', leftLabel: 'Algorithm', rightLabel: 'Trait',
              pairs: [
                { left: 'FCFS', right: 'Convoy effect' },
                { left: 'SJF', right: 'Optimal avg wait time' },
                { left: 'Round Robin', right: 'Good response time' },
                { left: 'Priority', right: 'Can starve low priority' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the MLFQ rule: "if a process uses its whole quantum it..."',
              tokens: ['demotes', 'to', 'a', 'lower', 'queue', 'promotes', 'higher'],
              correctOrder: ['demotes', 'to', 'a', 'lower', 'queue'],
              explanation: 'MLFQ demotes CPU-heavy processes to longer-quantum, lower-priority queues to favor short interactive tasks.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Synchronization ============== */
    {
      id: 'os-u6', name: 'Unit 6 · Synchronization', description: 'Race conditions, locks, semaphores',
      lessons: [
        {
          id: 'os-u6-l1', name: 'Race conditions & critical sections', icon: '🏁', xp: 25,
          challenges: [
            { type: 'concept', title: 'Why a single line of code can be a bug', content: `<p>Look at this innocent C:</p>
<div class="code-block"><span class="ty">int</span> counter = <span class="num">0</span>;
counter++;   <span class="com">// (in two threads, simultaneously)</span></div>
<p>The CPU actually executes:</p>
<div class="code-block">LOAD  r1, counter   <span class="com">// read</span>
ADD   r1, 1
STORE counter, r1   <span class="com">// write</span></div>
<p>If two threads interleave between LOAD and STORE, both write the same value back — you lose an increment. That window is a <strong>race condition</strong>.</p>
<p>The fix: a <strong>critical section</strong> — code that must execute with mutual exclusion. We need three properties:</p>
<div class="code-block">1. MUTUAL EXCLUSION  — only one in CS at a time
2. PROGRESS          — if CS is free, someone gets in
3. BOUNDED WAITING   — no one waits forever</div>` },
            { type: 'multiple-choice', prompt: 'A race condition happens when:',
              options: [
                { text: 'Two threads run on different CPUs', code: false },
                { text: 'Outcome depends on interleaving of operations on shared data', code: false },
                { text: 'A process uses too much CPU', code: false },
                { text: 'A deadlock occurs', code: false }
              ],
              correct: 1, explanation: 'The defining property: timing-dependent correctness.' },
            { type: 'true-false', statement: '<code>counter++</code> is guaranteed to be atomic in C.',
              correct: false, explanation: 'It compiles to load-modify-store. Not atomic without explicit support (e.g., __atomic_fetch_add).' },
            { type: 'match-pairs', prompt: 'Critical-section requirement → meaning.', leftLabel: 'Property', rightLabel: 'Meaning',
              pairs: [
                { left: 'Mutual exclusion', right: 'At most one in CS' },
                { left: 'Progress', right: 'Free CS gets entered' },
                { left: 'Bounded waiting', right: 'No starvation' },
                { left: 'Speed independence', right: 'Works at any thread speed' }
              ] },
            { type: 'multiple-choice', prompt: 'Peterson\'s algorithm provides mutual exclusion using:',
              options: [
                { text: 'Hardware atomic test-and-set', code: false },
                { text: 'A flag[] array and a turn variable, plus busy waiting', code: false },
                { text: 'Disabling interrupts', code: false },
                { text: 'Disabling preemption', code: false }
              ],
              correct: 1, explanation: 'Two-process software solution using flag[] and turn — but assumes sequential consistency.' },
            { type: 'output-predict', prompt: 'Two threads each run <code>counter++</code> 1,000,000 times with no synchronization, starting from 0. What is the FINAL counter likely to be?',
              code: ``,
              options: ['Exactly 2,000,000', 'Exactly 1,000,000', 'Between 1,000,000 and 2,000,000', 'Always 0'],
              correct: 2, explanation: 'Lost-update races eat some increments — the answer is non-deterministic but typically < 2M.' }
          ]
        },
        {
          id: 'os-u6-l2', name: 'Mutex, semaphore, monitor', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three classic primitives', content: `<p><strong>Mutex</strong> — a binary lock. <code>lock()</code> blocks if held; <code>unlock()</code> releases. Must be released by the same thread that acquired it.</p>
<p><strong>Semaphore</strong> — an integer counter with <code>wait()</code> (decrement, block if 0) and <code>signal()</code> (increment). Binary semaphore ≈ mutex. Counting semaphore controls N instances of a resource.</p>
<p><strong>Monitor</strong> — a higher-level construct: an object whose methods are implicitly mutually exclusive. Java\'s <code>synchronized</code> blocks are monitors. Uses <em>condition variables</em> for wait/signal.</p>
<div class="code-block"><span class="kw">synchronized</span> (lock) {
    <span class="kw">while</span> (!ready) lock.<span class="fn">wait</span>();
    <span class="com">// critical section</span>
}
<span class="com">// elsewhere</span>
<span class="kw">synchronized</span> (lock) { ready = <span class="kw">true</span>; lock.<span class="fn">notifyAll</span>(); }</div>` },
            { type: 'multiple-choice', prompt: 'A counting semaphore with initial value 3 means:',
              options: [
                { text: '3 threads can be in the CS simultaneously', code: false },
                { text: 'Only 1 thread can be in the CS', code: false },
                { text: 'No thread can ever enter', code: false },
                { text: 'There must be exactly 3 producers', code: false }
              ],
              correct: 0, explanation: 'Counting semaphore guards N resources — here, 3 concurrent holders allowed.' },
            { type: 'true-false', statement: 'A binary semaphore can be used as a mutex but lacks ownership — any thread can signal it.',
              correct: true, explanation: 'That\'s why true mutexes are preferred for mutual exclusion (they track owner).' },
            { type: 'match-pairs', prompt: 'Primitive → key feature.', leftLabel: 'Primitive', rightLabel: 'Feature',
              pairs: [
                { left: 'Mutex', right: 'Lock with ownership' },
                { left: 'Semaphore', right: 'Counter (wait / signal)' },
                { left: 'Monitor', right: 'Implicit mutex + condvars' },
                { left: 'Spinlock', right: 'Busy-wait lock' }
              ] },
            { type: 'reorder-code', prompt: 'Reorder the safe mutex-protected increment.',
              lines: [
                'pthread_mutex_lock(&m);',
                'counter++;',
                'pthread_mutex_unlock(&m);'
              ],
              correctOrder: [0, 1, 2] },
            { type: 'fill-blank', prompt: 'On a semaphore <code>s</code>, what call decrements and possibly blocks?',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>(&s);    <span class="com">// also called P() or down()</span>' }],
              tokens: ['wait', 'signal', 'lock', 'unlock'],
              correctAnswer: 'wait', explanation: 'wait / P / down. Its counterpart is signal / V / up.' },
            { type: 'output-predict', prompt: 'You use a binary semaphore initialized to 1 for mutual exclusion. Thread A wait()s, enters CS, then exits without signal()ing. What happens to thread B that calls wait() next?',
              code: ``,
              options: ['Enters CS fine', 'Blocks forever', 'Crashes', 'Increments counter'],
              correct: 1, explanation: 'Semaphore stuck at 0. B blocks indefinitely — that\'s a missing-signal bug.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Classic Sync Problems ============== */
    {
      id: 'os-u7', name: 'Unit 7 · Classic Sync Problems', description: 'Producer-consumer, readers-writers, dining philosophers',
      lessons: [
        {
          id: 'os-u7-l1', name: 'Producer–Consumer', icon: '🥖', xp: 25,
          challenges: [
            { type: 'concept', title: 'A bounded buffer between threads', content: `<p>Producers add items to a fixed-size buffer; consumers take them out. Classic interview test of synchronization.</p>
<div class="code-block">sem_t empty = N;       <span class="com">// empty slots</span>
sem_t full  = <span class="num">0</span>;       <span class="com">// filled slots</span>
mutex_t m;             <span class="com">// protects the buffer</span>

<span class="com">// PRODUCER</span>
<span class="fn">wait</span>(empty);
<span class="fn">lock</span>(m);
buffer[in] = item; in = (in+<span class="num">1</span>) % N;
<span class="fn">unlock</span>(m);
<span class="fn">signal</span>(full);

<span class="com">// CONSUMER</span>
<span class="fn">wait</span>(full);
<span class="fn">lock</span>(m);
item = buffer[out]; out = (out+<span class="num">1</span>) % N;
<span class="fn">unlock</span>(m);
<span class="fn">signal</span>(empty);</div>
<p>Key invariants: producer waits when buffer full; consumer waits when buffer empty; mutex protects the index arithmetic.</p>` },
            { type: 'multiple-choice', prompt: 'In the producer-consumer code, the <code>empty</code> semaphore should be initialized to:',
              options: [
                { text: '0', code: false },
                { text: '1', code: false },
                { text: 'N (buffer size)', code: false },
                { text: 'Negative N', code: false }
              ],
              correct: 2, explanation: 'Initially the buffer is empty → N free slots available.' },
            { type: 'true-false', statement: 'You can swap the order of <code>wait(empty)</code> and <code>lock(m)</code> in the producer without consequences.',
              correct: false, explanation: 'If you lock first then wait, a full buffer causes a deadlock: producer holds the lock that consumer needs to remove an item.' },
            { type: 'match-pairs', prompt: 'Match semaphore → purpose.', leftLabel: 'Semaphore', rightLabel: 'Tracks',
              pairs: [
                { left: 'empty', right: 'Number of empty slots' },
                { left: 'full', right: 'Number of full slots' },
                { left: 'mutex', right: 'Protects buffer indices' },
                { left: 'wait()', right: 'Decrement (may block)' }
              ] },
            { type: 'output-predict', prompt: 'Buffer N=5, currently has 3 items. What is the value of the "full" semaphore?',
              code: ``,
              options: ['0', '2', '3', '5'],
              correct: 2, explanation: '3 items → full = 3. empty = N - full = 2.' },
            { type: 'reorder-code', prompt: 'Reorder a correct PRODUCER body.',
              lines: [
                'wait(empty);',
                'lock(mutex);',
                'buffer[in] = item; in = (in+1) % N;',
                'unlock(mutex);',
                'signal(full);'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        },
        {
          id: 'os-u7-l2', name: 'Readers-Writers & Dining Philosophers', icon: '🍝', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two more classics', content: `<p><strong>Readers–Writers</strong>: any number of readers may share, but writers need exclusive access. Naïve solution can starve writers (constant reader stream).</p>
<p><strong>Dining Philosophers</strong>: 5 philosophers around a table, 5 forks. Each needs both adjacent forks to eat. If all grab their left fork first → deadlock.</p>
<div class="code-block"><span class="com">Solutions:</span>
- At most N-1 philosophers may pick up
- Asymmetric: even ones pick left first, odd ones pick right first
- Always pick lowest-numbered fork first (resource ordering)</div>
<p>Both problems teach the same lesson: <em>order matters</em> when acquiring multiple locks.</p>` },
            { type: 'multiple-choice', prompt: 'What can go wrong in dining philosophers if everyone picks up the left fork simultaneously?',
              options: [
                { text: 'Nothing — they eventually eat', code: false },
                { text: 'Deadlock — every philosopher holds one fork and waits for the other', code: false },
                { text: 'A race condition', code: false },
                { text: 'Starvation of one philosopher', code: false }
              ],
              correct: 1, explanation: 'Circular wait, the 4th condition of deadlock — beautifully illustrated.' },
            { type: 'true-false', statement: 'The "always acquire locks in the same order" rule eliminates circular wait in multi-lock code.',
              correct: true, explanation: 'Resource ordering removes the cycle, preventing deadlock.' },
            { type: 'multiple-choice', prompt: 'In readers-writers with reader priority, what bad thing can happen?',
              options: [
                { text: 'Readers can\'t share', code: false },
                { text: 'Writer starvation — constant reader stream blocks writes', code: false },
                { text: 'A deadlock', code: false },
                { text: 'A race condition between two readers', code: false }
              ],
              correct: 1, explanation: 'Writers wait indefinitely. Use writer-priority or queueing fairness to fix.' },
            { type: 'match-pairs', prompt: 'Solution → which problem.', leftLabel: 'Trick', rightLabel: 'Problem',
              pairs: [
                { left: 'Asymmetric fork order', right: 'Dining philosophers' },
                { left: 'Writer priority', right: 'Readers-writers starvation' },
                { left: 'Bounded buffer', right: 'Producer-consumer' },
                { left: 'Empty + full semaphores', right: 'Producer-consumer' }
              ] },
            { type: 'output-predict', prompt: 'With N philosophers and "at most N-1 may attempt to eat", how many philosophers can be simultaneously eating in the best case (N=5)?',
              code: ``,
              options: ['1', '2', '3', '5'],
              correct: 1, explanation: 'Each eater needs 2 of 5 forks; max simultaneous = floor(5/2) = 2.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Deadlocks ============== */
    {
      id: 'os-u8', name: 'Unit 8 · Deadlocks', description: 'Coffman conditions, prevention, Banker\'s',
      lessons: [
        {
          id: 'os-u8-l1', name: 'The four conditions', icon: '🔒', xp: 25,
          challenges: [
            { type: 'concept', title: 'Coffman\'s conditions — ALL must hold', content: `<div class="code-block"><span class="com">1. MUTUAL EXCLUSION</span> — resource held in non-sharable mode
<span class="com">2. HOLD AND WAIT</span>    — holding one resource, waiting for another
<span class="com">3. NO PREEMPTION</span>    — resources released only voluntarily
<span class="com">4. CIRCULAR WAIT</span>    — chain of processes each waiting on the next</div>
<p>Remove ANY one and deadlock is impossible. That gives us prevention strategies:</p>
<div class="code-block">Break mutex      — make resources sharable (rare)
Break hold+wait  — request ALL resources up front
Break no-preempt — allow forced release (rollback)
Break circular   — global ordering on resources</div>` },
            { type: 'multiple-choice', prompt: 'Which is NOT a Coffman condition for deadlock?',
              options: [
                { text: 'Mutual exclusion', code: false },
                { text: 'Hold and wait', code: false },
                { text: 'No preemption', code: false },
                { text: 'Starvation', code: false }
              ],
              correct: 3, explanation: 'Starvation ≠ deadlock. The 4th condition is circular wait.' },
            { type: 'true-false', statement: 'A single resource alone can cause a deadlock.',
              correct: false, explanation: 'Deadlock needs hold + wait + circular wait — at least two resources and two processes.' },
            { type: 'match-pairs', prompt: 'Strategy → broken condition.', leftLabel: 'Strategy', rightLabel: 'Breaks',
              pairs: [
                { left: 'Request all resources up front', right: 'Hold and wait' },
                { left: 'Allow preemption / rollback', right: 'No preemption' },
                { left: 'Resource ordering', right: 'Circular wait' },
                { left: 'Share resources', right: 'Mutual exclusion' }
              ] },
            { type: 'multiple-choice', prompt: 'A resource allocation graph contains a cycle. With <em>one</em> instance per resource, this means:',
              options: [
                { text: 'No deadlock possible', code: false },
                { text: 'Deadlock has occurred', code: false },
                { text: 'A deadlock may or may not exist', code: false },
                { text: 'The graph is invalid', code: false }
              ],
              correct: 1, explanation: 'Cycle in single-instance RAG ⇒ deadlock. With multiple instances, cycle is necessary but not sufficient.' },
            { type: 'fill-blank', prompt: 'A global numbering on resources, where processes must acquire in increasing order, breaks the:',
              codeLines: [{ html: 'breaks the <span class="fn">_BLANK_</span> wait condition' }],
              tokens: ['circular', 'mutual', 'hold', 'preemption'],
              correctAnswer: 'circular', explanation: 'Total order on resources prevents cycles.' }
          ]
        },
        {
          id: 'os-u8-l2', name: 'Banker\'s algorithm & detection', icon: '🏦', xp: 25,
          challenges: [
            { type: 'concept', title: 'Avoid by simulating, detect by checking', content: `<p><strong>Banker\'s algorithm</strong> (avoidance) — before granting a request, check if doing so leaves the system in a <em>safe state</em>: there exists some order of execution in which all processes can complete.</p>
<div class="code-block"><span class="com">Vectors:</span>
Available[m]     — currently free
Max[n][m]        — process max claim
Allocation[n][m] — currently held
Need = Max - Allocation

<span class="com">Safe check (Banker):</span>
while (some process p with Need[p] ≤ Available):
   pretend p finishes, Available += Allocation[p]
if all processes finished → SAFE</div>
<p><strong>Detection</strong>: same algorithm without the "would this grant be safe" guard — periodically run it on the actual graph. If it can\'t finish, a deadlock exists; pick a victim to abort.</p>` },
            { type: 'multiple-choice', prompt: 'Banker\'s algorithm is a method of:',
              options: [
                { text: 'Deadlock prevention', code: false },
                { text: 'Deadlock avoidance', code: false },
                { text: 'Deadlock recovery', code: false },
                { text: 'Process scheduling', code: false }
              ],
              correct: 1, explanation: 'Avoidance — it allows the system to grant requests only if it stays safe.' },
            { type: 'true-false', statement: 'A safe state guarantees no future deadlock; an unsafe state guarantees a future deadlock.',
              correct: false, explanation: 'Unsafe means deadlock is POSSIBLE, not certain. Banker is conservative — it denies any request that could lead to trouble.' },
            { type: 'output-predict', prompt: 'Available = 3. Process P needs 2 more units. Granting would leave Available = 1. If no other process has Need ≤ 1, what does Banker say?',
              code: `Available = 3
P needs   = 2 (total)
After grant Available = 1
Other processes' Need: all > 1`,
              options: ['Grant — safe', 'Deny — unsafe', 'Wait forever', 'Grant half'],
              correct: 1, explanation: 'After granting, no process can finish — that\'s an unsafe state, so Banker denies.' },
            { type: 'match-pairs', prompt: 'Approach → tactic.', leftLabel: 'Approach', rightLabel: 'Tactic',
              pairs: [
                { left: 'Prevention', right: 'Break a Coffman condition' },
                { left: 'Avoidance', right: 'Banker\'s algorithm' },
                { left: 'Detection', right: 'Periodically check for cycle' },
                { left: 'Recovery', right: 'Abort a victim or rollback' }
              ] },
            { type: 'multiple-choice', prompt: 'A typical recovery action after deadlock detection is:',
              options: [
                { text: 'Add more resources', code: false },
                { text: 'Abort one or more processes, releasing their resources', code: false },
                { text: 'Reboot the machine', code: false },
                { text: 'Decrease their priority', code: false }
              ],
              correct: 1, explanation: 'Victim selection (and optionally rollback) breaks the cycle.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Memory Management ============== */
    {
      id: 'os-u9', name: 'Unit 9 · Memory Management', description: 'Contiguous, paging, segmentation, fragmentation',
      lessons: [
        {
          id: 'os-u9-l1', name: 'Contiguous allocation & fragmentation', icon: '🧱', xp: 20,
          challenges: [
            { type: 'concept', title: 'Putting each process somewhere in RAM', content: `<p>Simplest model: each process gets one contiguous chunk of physical memory. Allocation strategies:</p>
<div class="code-block"><span class="com">FIRST FIT</span> — first hole that\'s big enough
<span class="com">BEST FIT</span>  — smallest hole that fits  (more leftover fragments)
<span class="com">WORST FIT</span> — largest hole that fits (rarely good)</div>
<p>Two fragmentation diseases:</p>
<div class="code-block"><span class="com">EXTERNAL</span> — total free RAM enough but scattered in small holes
            Fix: compaction (move processes), or paging
<span class="com">INTERNAL</span> — allocated more than needed (rounded up)
            Common in fixed-size partition / paging systems</div>` },
            { type: 'multiple-choice', prompt: 'Free holes: 100K, 500K, 200K, 300K, 600K. A 212K request under best-fit goes to:',
              options: [
                { text: '100K (none fits)', code: false },
                { text: '300K', code: false },
                { text: '500K', code: false },
                { text: '600K', code: false }
              ],
              correct: 1, explanation: 'Best fit picks the smallest hole that\'s ≥ 212K → 300K.' },
            { type: 'output-predict', prompt: 'Same holes (100, 500, 200, 300, 600 K) and 212K request — first-fit picks which?',
              code: ``,
              options: ['100K', '200K', '500K', '600K'],
              correct: 2, explanation: 'First-fit scans in order; the first hole ≥ 212K is 500K.' },
            { type: 'true-false', statement: 'Paging eliminates external fragmentation but introduces internal fragmentation in the last page.',
              correct: true, explanation: 'Pages are fixed-size — external fragmentation goes away, but the last page is usually partly empty.' },
            { type: 'match-pairs', prompt: 'Fragmentation → cause.', leftLabel: 'Type', rightLabel: 'Cause',
              pairs: [
                { left: 'External', right: 'Free RAM in scattered holes' },
                { left: 'Internal', right: 'Allocated > requested' },
                { left: 'Compaction', right: 'Move processes to consolidate' },
                { left: 'Paging', right: 'No external fragmentation' }
              ] },
            { type: 'multiple-choice', prompt: 'Segmentation differs from paging in that:',
              options: [
                { text: 'Segments are fixed-size', code: false },
                { text: 'Segments are variable-length, semantic units (code, stack, data)', code: false },
                { text: 'Segmentation has no fragmentation', code: false },
                { text: 'Segmentation does not use a table', code: false }
              ],
              correct: 1, explanation: 'Segments are programmer-visible variable-size units; pages are uniform fixed-size.' }
          ]
        },
        {
          id: 'os-u9-l2', name: 'Paging mechanics', icon: '📄', xp: 25,
          challenges: [
            { type: 'concept', title: 'Virtual page → physical frame', content: `<p>Physical memory is split into fixed-size <strong>frames</strong>. Each process\'s address space is split into same-size <strong>pages</strong>. A <strong>page table</strong> maps pages → frames.</p>
<div class="code-block"><span class="com">Virtual address (32-bit, 4KB pages):</span>
| PAGE NUMBER (20 bits) | OFFSET (12 bits) |

<span class="com">Translation:</span>
frame = PageTable[ page ];
phys  = (frame << <span class="num">12</span>) | offset;</div>
<p>Each entry typically holds: frame number, valid bit, protection bits, dirty bit, accessed bit. The MMU does the lookup automatically on every memory reference.</p>` },
            { type: 'output-predict', prompt: 'Virtual address = 0x00003123, page size 4KB (12-bit offset). What is the page number?',
              code: ``,
              options: ['0x000', '0x003', '0x123', '0x3123'],
              correct: 1, explanation: 'Strip the low 12 bits: 0x00003 → page 3.' },
            { type: 'output-predict', prompt: 'Same address 0x00003123, 4KB pages. What is the offset?',
              code: ``,
              options: ['0x123', '0x003', '0x312', '0x000'],
              correct: 0, explanation: 'Low 12 bits = 0x123.' },
            { type: 'multiple-choice', prompt: 'Page size 4KB means each page has how many bytes of offset space?',
              options: [
                { text: '4', code: false },
                { text: '1024', code: false },
                { text: '4096', code: false },
                { text: '8192', code: false }
              ],
              correct: 2, explanation: '4KB = 4096 bytes, so 12-bit offset.' },
            { type: 'true-false', statement: 'Every memory access without a TLB requires at least one extra memory access (to read the page table).',
              correct: true, explanation: 'That extra hop is exactly why the TLB exists — cache hot translations.' },
            { type: 'fill-blank', prompt: 'The hardware unit that translates virtual → physical addresses is the:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> (Memory Management Unit)' }],
              tokens: ['MMU', 'TLB', 'PCB', 'ALU'],
              correctAnswer: 'MMU', explanation: 'MMU performs the translation. TLB is a cache used by the MMU.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Virtual Memory ============== */
    {
      id: 'os-u10', name: 'Unit 10 · Virtual Memory', description: 'Demand paging, TLB',
      lessons: [
        {
          id: 'os-u10-l1', name: 'Demand paging & TLB', icon: '🪟', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pretend RAM is bigger than it is', content: `<p>Virtual memory gives each process its own large address space, with only the actively-used pages in RAM. Inactive pages live on disk (the <em>swap area</em>).</p>
<div class="code-block"><span class="com">DEMAND PAGING:</span>
1. CPU accesses virtual page
2. MMU looks up page table
3. If valid bit = 0 → PAGE FAULT trap
4. OS finds the page on disk
5. Picks a free frame (or evicts one)
6. Reads page from disk → frame
7. Updates page table, restarts instruction</div>
<p><strong>TLB (Translation Lookaside Buffer)</strong> caches recent page→frame translations. A hit is single-cycle; a miss costs a page-table walk.</p>` },
            { type: 'multiple-choice', prompt: 'A page fault means:',
              options: [
                { text: 'A bug in your code', code: false },
                { text: 'The accessed virtual page is not currently in a physical frame', code: false },
                { text: 'The TLB is full', code: false },
                { text: 'The disk is corrupt', code: false }
              ],
              correct: 1, explanation: 'Not necessarily an error — just "not in RAM right now." OS pages it in.' },
            { type: 'true-false', statement: 'A TLB hit avoids walking the page table in memory.',
              correct: true, explanation: 'Hit = answer cached in the TLB. Miss = read PTE from memory (slow).' },
            { type: 'output-predict', prompt: 'TLB access = 1ns, memory access = 100ns, TLB hit ratio = 0.95. Effective access time (one-level page table) ≈ ?',
              code: `EAT = hit*(1 + 100) + miss*(1 + 100 + 100)
    = 0.95*101 + 0.05*201`,
              options: ['11 ns', '101 ns', '106 ns', '201 ns'],
              correct: 2, explanation: '0.95×101 + 0.05×201 = 95.95 + 10.05 = 106 ns.' },
            { type: 'match-pairs', prompt: 'Match event → cost (rough).', leftLabel: 'Event', rightLabel: 'Cost',
              pairs: [
                { left: 'TLB hit', right: '~1 cycle' },
                { left: 'TLB miss (PT walk)', right: '~100 cycles' },
                { left: 'Page fault (disk read)', right: '~ms (10^6 cycles)' },
                { left: 'Process swap', right: 'Even slower' }
              ] },
            { type: 'multiple-choice', prompt: 'Thrashing happens when:',
              options: [
                { text: 'CPU is idle', code: false },
                { text: 'Processes spend more time paging than computing', code: false },
                { text: 'TLB is empty', code: false },
                { text: 'Disk is full', code: false }
              ],
              correct: 1, explanation: 'Too many processes with too little RAM → constant page faults, throughput collapses.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Page Replacement ============== */
    {
      id: 'os-u11', name: 'Unit 11 · Page Replacement', description: 'FIFO, LRU, Optimal, Clock',
      lessons: [
        {
          id: 'os-u11-l1', name: 'Replacement algorithms', icon: '🔁', xp: 25,
          challenges: [
            { type: 'concept', title: 'Which page to kick out?', content: `<p>When all frames are full and a new page is needed, the OS evicts one. Choices:</p>
<div class="code-block"><span class="com">FIFO</span>      — evict oldest loaded (simplest; Belady\'s anomaly)
<span class="com">OPTIMAL</span>   — evict page not used for the longest future (oracle)
<span class="com">LRU</span>       — evict least recently used (approximation of OPT)
<span class="com">CLOCK</span>     — LRU approximation using a reference bit
                  and a circular sweep — cheap to implement
<span class="com">LFU</span>       — least frequently used</div>
<p><strong>Belady\'s anomaly</strong>: with FIFO, increasing the number of frames can sometimes INCREASE the number of page faults. LRU and OPT do not suffer this anomaly.</p>` },
            { type: 'output-predict', prompt: 'Reference string: 1 2 3 4 1 2 5 1 2 3 4 5. 3 frames, FIFO. How many page faults?',
              code: `frames=3, FIFO`,
              options: ['7', '9', '10', '12'],
              correct: 1, explanation: 'Trace it: 1,2,3 (3 faults), 4 evicts 1 (4), 1 evicts 2 (5), 2 evicts 3 (6), 5 evicts 4 (7), 1,2 hit, 3 evicts 5 (8), 4 evicts 1 (9), 5 evicts 2 (10). Actually 9 — recount cleanly: faults at 1,2,3,4,1,2,5,3,4,5 = 9. (Common GATE answer: 9.)' },
            { type: 'output-predict', prompt: 'Reference: 7 0 1 2 0 3 0 4 2 3 0 3 2. 3 frames, LRU. Page faults?',
              code: `frames=3, LRU`,
              options: ['7', '9', '10', '12'],
              correct: 1, explanation: '9 page faults under LRU for this classic textbook string.' },
            { type: 'multiple-choice', prompt: 'Belady\'s anomaly says that for FIFO:',
              options: [
                { text: 'More frames always means fewer faults', code: false },
                { text: 'More frames may, paradoxically, cause MORE page faults', code: false },
                { text: 'It is always better than LRU', code: false },
                { text: 'Page faults are constant', code: false }
              ],
              correct: 1, explanation: 'Counter-intuitive! Beautifully demonstrated with the 1,2,3,4,1,2,5,1,2,3,4,5 string.' },
            { type: 'true-false', statement: 'OPT (Optimal) replacement is implementable in real OSes.',
              correct: false, explanation: 'It requires knowing the future. We use it only as a theoretical lower bound.' },
            { type: 'match-pairs', prompt: 'Algorithm → trait.', leftLabel: 'Algorithm', rightLabel: 'Trait',
              pairs: [
                { left: 'FIFO', right: 'Suffers Belady\'s anomaly' },
                { left: 'OPT', right: 'Theoretical lower bound' },
                { left: 'LRU', right: 'Strong but expensive to implement' },
                { left: 'CLOCK', right: 'Cheap LRU approximation' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the CLOCK rule: "if the reference bit is 1, ___, ___ ___ ___ 0".',
              tokens: ['clear', 'it', 'move', 'pointer', 'set', 'to'],
              correctOrder: ['clear', 'it', 'move', 'pointer'],
              explanation: 'CLOCK gives a "second chance" — sweep the pointer; if ref bit = 1 clear it and move on; only evict when you find a 0.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — File Systems ============== */
    {
      id: 'os-u12', name: 'Unit 12 · File Systems', description: 'Files, directories, inodes, allocation',
      lessons: [
        {
          id: 'os-u12-l1', name: 'Files, directories, inodes', icon: '📁', xp: 20,
          challenges: [
            { type: 'concept', title: 'The Unix file model', content: `<p>A <strong>file</strong> is a named stream of bytes. A <strong>directory</strong> is a special file mapping names → inode numbers. An <strong>inode</strong> holds the file\'s metadata + pointers to its data blocks.</p>
<div class="code-block"><span class="com">INODE typically contains:</span>
  size, owner, mode (permissions)
  timestamps (atime, mtime, ctime)
  link count
  pointers to data blocks:
     ~12 direct
     1 single-indirect    (points to block of pointers)
     1 double-indirect
     1 triple-indirect    (huge files)</div>
<p>The filename lives in the directory, NOT in the inode. That\'s why you can have <em>hard links</em>: multiple names → same inode. When link count drops to 0 AND no process has it open, the inode is freed.</p>` },
            { type: 'multiple-choice', prompt: 'A hard link is:',
              options: [
                { text: 'A copy of a file', code: false },
                { text: 'A directory entry pointing to the same inode as another entry', code: false },
                { text: 'A symbolic shortcut storing a path string', code: false },
                { text: 'A protected file', code: false }
              ],
              correct: 1, explanation: 'Two names, one inode. <code>ln a b</code> makes b a hard link to a.' },
            { type: 'true-false', statement: 'A symbolic link stores a path string and can point to a non-existent target.',
              correct: true, explanation: 'Symlinks are name-resolved at access time; dangling symlinks are legal.' },
            { type: 'match-pairs', prompt: 'Item → where it lives.', leftLabel: 'Item', rightLabel: 'Lives in',
              pairs: [
                { left: 'File name', right: 'Directory entry' },
                { left: 'File size', right: 'Inode' },
                { left: 'Data bytes', right: 'Data blocks' },
                { left: 'Permissions', right: 'Inode' }
              ] },
            { type: 'output-predict', prompt: 'Block size = 4KB, pointer = 4 bytes (so 1024 pointers/block). With 12 direct + 1 single-indirect, what is the max file size in bytes?',
              code: `direct: 12 * 4KB
single-indirect: 1024 * 4KB`,
              options: ['48KB', '4MB + 48KB', '4MB', '12KB'],
              correct: 1, explanation: '12×4K = 48K direct + 1024×4K = 4MB indirect = 4MB + 48KB.' },
            { type: 'fill-blank', prompt: 'When a file\'s link count drops to 0 and no process has it open, the inode and its blocks are:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> back to the free pool' }],
              tokens: ['freed', 'duplicated', 'copied', 'archived'],
              correctAnswer: 'freed', explanation: 'Then the file is truly gone — until then it persists despite "deletion".' }
          ]
        },
        {
          id: 'os-u12-l2', name: 'Allocation methods', icon: '🗄️', xp: 20,
          challenges: [
            { type: 'concept', title: 'How disk blocks are wired up', content: `<div class="code-block"><span class="com">CONTIGUOUS</span>  — file occupies consecutive blocks
                + fast sequential reads, simple
                − external fragmentation, hard to grow

<span class="com">LINKED</span>      — each block points to the next
                + no external fragmentation, easy to grow
                − slow random access (must walk chain)

<span class="com">INDEXED</span>     — one "index block" lists data blocks
                + fast random access, no fragmentation
                − overhead for tiny files
                (Unix inodes are a variant: multi-level indexing)</div>` },
            { type: 'multiple-choice', prompt: 'For very large files with random access, the most efficient allocation method is:',
              options: [
                { text: 'Contiguous', code: false },
                { text: 'Linked', code: false },
                { text: 'Indexed (with multi-level)', code: false },
                { text: 'FCFS', code: false }
              ],
              correct: 2, explanation: 'Multi-level indexed (like Unix inodes) gives both random access and scalability.' },
            { type: 'true-false', statement: 'FAT file systems use a variant of linked allocation (with the chain in a separate table).',
              correct: true, explanation: 'The File Allocation Table holds the next-block pointers separately from the data.' },
            { type: 'match-pairs', prompt: 'Allocation → file system.', leftLabel: 'Style', rightLabel: 'Example',
              pairs: [
                { left: 'Linked (in table)', right: 'FAT32' },
                { left: 'Multi-level indexed', right: 'ext4 / Unix' },
                { left: 'Contiguous extents', right: 'NTFS, XFS' },
                { left: 'Copy-on-write tree', right: 'ZFS / Btrfs' }
              ] },
            { type: 'multiple-choice', prompt: 'Contiguous allocation\'s main weakness is:',
              options: [
                { text: 'Slow sequential reads', code: false },
                { text: 'External fragmentation and file growth difficulty', code: false },
                { text: 'No random access', code: false },
                { text: 'Cannot store large files', code: false }
              ],
              correct: 1, explanation: 'Files fit in holes; growth requires moving. Defragmentation needed.' },
            { type: 'output-predict', prompt: 'A file occupies blocks 50, 51, 52, 53, 54. Which allocation method is this?',
              code: ``,
              options: ['Contiguous', 'Linked', 'Indexed', 'FAT'],
              correct: 0, explanation: 'Five consecutive blocks ⇒ contiguous allocation.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — File System Implementation ============== */
    {
      id: 'os-u13', name: 'Unit 13 · File System Implementation', description: 'FAT, ext, NTFS, journaling',
      lessons: [
        {
          id: 'os-u13-l1', name: 'FAT vs ext vs NTFS', icon: '💾', xp: 20,
          challenges: [
            { type: 'concept', title: 'The big three families', content: `<div class="code-block"><span class="com">FAT (12/16/32, exFAT)</span>
  - Linked allocation through a File Allocation Table
  - Simple, universally supported, used on USB drives
  - No journaling (FAT family proper), 4GB file cap (FAT32)

<span class="com">ext2 / ext3 / ext4 (Linux)</span>
  - Inode-based, multi-level indexed
  - ext3+ adds journaling
  - ext4 adds extents (range-based, not block-by-block)

<span class="com">NTFS (Windows)</span>
  - Master File Table (MFT) — every file has an MFT record
  - B+ trees for directories
  - Journaling, ACLs, compression, encryption</div>
<p><strong>Journaling</strong>: before changing data, write the intent to a log. On crash, replay the log to keep the FS consistent.</p>` },
            { type: 'multiple-choice', prompt: 'A "journal" in a file system stores:',
              options: [
                { text: 'User passwords', code: false },
                { text: 'A log of pending metadata changes for crash recovery', code: false },
                { text: 'Compressed file data', code: false },
                { text: 'Process scheduling info', code: false }
              ],
              correct: 1, explanation: 'Write-ahead log: log first, then mutate. Replay after a crash for consistency.' },
            { type: 'true-false', statement: 'ext4 uses extents (contiguous ranges of blocks) for efficiency over ext3\'s per-block indirect pointers.',
              correct: true, explanation: 'An extent (start, length) is much more compact than tracking each block individually.' },
            { type: 'match-pairs', prompt: 'File system → trait.', leftLabel: 'FS', rightLabel: 'Trait',
              pairs: [
                { left: 'FAT32', right: 'Linked allocation via FAT' },
                { left: 'ext4', right: 'Inodes + extents + journal' },
                { left: 'NTFS', right: 'Master File Table + B+ trees' },
                { left: 'ZFS', right: 'Copy-on-write, checksums' }
              ] },
            { type: 'multiple-choice', prompt: 'Which file system would you find on a typical USB thumb drive shipped today?',
              options: [
                { text: 'ext4', code: false },
                { text: 'NTFS', code: false },
                { text: 'FAT32 or exFAT', code: false },
                { text: 'ZFS', code: false }
              ],
              correct: 2, explanation: 'FAT/exFAT — broadest cross-OS compatibility.' },
            { type: 'fill-blank', prompt: 'Writing intent to a log before mutating data is called:',
              codeLines: [{ html: 'this technique is called <span class="fn">_BLANK_</span>' }],
              tokens: ['journaling', 'snapshotting', 'caching', 'paging'],
              correctAnswer: 'journaling', explanation: 'Write-ahead logging / journaling. Used by ext3+, NTFS, JFS, XFS.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — I/O & Disk Scheduling ============== */
    {
      id: 'os-u14', name: 'Unit 14 · I/O & Disk Scheduling', description: 'FCFS, SSTF, SCAN, C-SCAN, LOOK',
      lessons: [
        {
          id: 'os-u14-l1', name: 'Disk scheduling algorithms', icon: '💿', xp: 25,
          challenges: [
            { type: 'concept', title: 'Minimize the head sweep', content: `<p>A spinning disk has a head that must seek across cylinders. We choose the order of pending I/O requests:</p>
<div class="code-block"><span class="com">FCFS</span>   — serve in arrival order. Simple, fair, slow.
<span class="com">SSTF</span>   — Shortest Seek Time First. Greedy. Can starve far cylinders.
<span class="com">SCAN</span>   — "elevator": sweep in one direction, reverse at edge.
<span class="com">C-SCAN</span> — circular SCAN: sweep one direction, jump back to start.
<span class="com">LOOK</span>   — like SCAN but reverses at the LAST request, not edge.
<span class="com">C-LOOK</span> — circular LOOK.</div>
<p>SSDs change the game — no seek penalty — so disk scheduling matters less on flash storage.</p>` },
            { type: 'output-predict', prompt: 'Queue: 98 183 37 122 14 124 65 67. Head at 53, moving toward higher cylinders. Total head movement under FCFS?',
              code: `head=53, queue order as listed`,
              options: ['236', '640', '208', '320'],
              correct: 1, explanation: 'Classic textbook example: |53→98|+|98→183|+|183→37|+|37→122|+|122→14|+|14→124|+|124→65|+|65→67| = 640.' },
            { type: 'output-predict', prompt: 'Same queue, head 53. SSTF total movement?',
              code: ``,
              options: ['208', '236', '640', '320'],
              correct: 1, explanation: 'Greedy nearest-next: 53→65→67→37→14→98→122→124→183. Sum of |diffs| = 12+2+30+23+84+24+2+59 = 236.' },
            { type: 'multiple-choice', prompt: 'SSTF\'s downside is:',
              options: [
                { text: 'Slow average seek', code: false },
                { text: 'Starvation of far-away requests', code: false },
                { text: 'Random data corruption', code: false },
                { text: 'Cannot handle two requests', code: false }
              ],
              correct: 1, explanation: 'Always picks nearest → far cylinders may never be served if new nearby requests keep arriving.' },
            { type: 'true-false', statement: 'On a typical SSD, disk scheduling matters far less than on a spinning HDD.',
              correct: true, explanation: 'No mechanical head — random access is roughly uniform-time.' },
            { type: 'match-pairs', prompt: 'Algorithm → behavior.', leftLabel: 'Algo', rightLabel: 'Behavior',
              pairs: [
                { left: 'FCFS', right: 'Arrival order' },
                { left: 'SSTF', right: 'Greedy nearest' },
                { left: 'SCAN', right: 'Elevator sweep, both directions' },
                { left: 'C-SCAN', right: 'Sweep one way, jump back' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Kernel architectures ============== */
    {
      id: 'os-u15', name: 'Unit 15 · Kernel Architectures', description: 'Linux vs Windows; monolithic vs microkernel',
      lessons: [
        {
          id: 'os-u15-l1', name: 'Monolithic, microkernel, hybrid', icon: '🏛️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Three kernel designs', content: `<div class="code-block"><span class="com">MONOLITHIC</span>   — entire OS runs in kernel mode
                 (Linux, classic Unix)
                 + fast: no message passing
                 − one bug can crash the whole kernel
                 + modules can still be loaded dynamically

<span class="com">MICROKERNEL</span>  — minimal kernel; drivers + FS + net in user space
                 (Minix, QNX, seL4)
                 + safer: a crashed driver doesn\'t kill the kernel
                 − more IPC overhead

<span class="com">HYBRID</span>       — pragmatic mix (Windows NT, macOS XNU)
                 mostly monolithic for speed, some services isolated</div>
<p>Linux <em>looks</em> monolithic but supports <strong>loadable kernel modules</strong> (LKM) — drivers and FS plugins can be loaded/unloaded at runtime.</p>` },
            { type: 'multiple-choice', prompt: 'Linux\'s kernel architecture is best described as:',
              options: [
                { text: 'Microkernel', code: false },
                { text: 'Monolithic (with loadable modules)', code: false },
                { text: 'Exokernel', code: false },
                { text: 'A library OS', code: false }
              ],
              correct: 1, explanation: 'Monolithic + LKMs. Almost everything runs in kernel mode.' },
            { type: 'true-false', statement: 'A microkernel typically runs drivers as user-space processes that talk to the kernel via IPC.',
              correct: true, explanation: 'That\'s the whole point — fault isolation between kernel and services.' },
            { type: 'match-pairs', prompt: 'OS → architecture.', leftLabel: 'OS', rightLabel: 'Architecture',
              pairs: [
                { left: 'Linux', right: 'Monolithic + LKMs' },
                { left: 'Windows NT', right: 'Hybrid' },
                { left: 'MINIX 3', right: 'Microkernel' },
                { left: 'macOS (XNU)', right: 'Hybrid (Mach + BSD)' }
              ] },
            { type: 'multiple-choice', prompt: 'A loadable kernel module (LKM) lets you:',
              options: [
                { text: 'Run kernel code in user space', code: false },
                { text: 'Add/remove kernel code at runtime without rebooting', code: false },
                { text: 'Disable kernel mode', code: false },
                { text: 'Switch OSes', code: false }
              ],
              correct: 1, explanation: 'insmod / rmmod — perfect for drivers and filesystems.' },
            { type: 'type-answer', prompt: 'In Linux, what one-word command unloads a kernel module by name?',
              code: '',
              accept: ['rmmod'],
              explanation: 'rmmod removes a module. insmod / modprobe add them.' },
            { type: 'fill-blank', prompt: 'A kernel with just IPC + scheduling, leaving drivers in user space, is called:',
              codeLines: [{ html: 'a <span class="fn">_BLANK_</span>kernel' }],
              tokens: ['micro', 'mono', 'hyper', 'exo'],
              correctAnswer: 'micro', explanation: 'Microkernel design — minimum in kernel, rest in user space.' }
          ]
        }
      ]
    }

  ]
});

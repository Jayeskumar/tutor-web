LEARN('linux', {
  intro: 'Live in the terminal — Linux shell, files, processes, permissions, scripting, and ops.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'lnx-c1', title: 'Linux in a Nutshell', icon: '🐧', sections: [
      { type: 'heading', text: 'The OS that quietly runs everything', level: 1 },
      { type: 'para', html: '<strong>Linux</strong> is a free, open-source OS kernel. Combined with a userspace (shell, package manager, GUI) it becomes a <em>distribution</em>: Ubuntu, Fedora, Debian, Arch, Alpine, ...' },

      { type: 'image', alt: 'where linux runs', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Where Linux runs</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="100" height="130" rx="10" fill="#33691e"/>
    <text x="70" y="80" text-anchor="middle" fill="white">Servers</text>
    <text x="70" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">~96% of</text>
    <text x="70" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">the top sites</text>

    <rect x="135" y="50" width="100" height="130" rx="10" fill="#558b2f"/>
    <text x="185" y="80" text-anchor="middle" fill="white">Cloud</text>
    <text x="185" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">AWS · GCP</text>
    <text x="185" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Azure</text>

    <rect x="250" y="50" width="100" height="130" rx="10" fill="#7cb342"/>
    <text x="300" y="80" text-anchor="middle" fill="white">Mobile</text>
    <text x="300" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Android uses</text>
    <text x="300" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Linux kernel</text>

    <rect x="365" y="50" width="100" height="130" rx="10" fill="#9ccc65"/>
    <text x="415" y="80" text-anchor="middle" fill="white">Embedded</text>
    <text x="415" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Routers · IoT</text>
    <text x="415" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">smart TVs</text>

    <rect x="480" y="50" width="100" height="130" rx="10" fill="#aed581"/>
    <text x="530" y="80" text-anchor="middle" fill="white">Containers</text>
    <text x="530" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Docker · K8s</text>
    <text x="530" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">use Linux</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Distros — same kernel, different flavor', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Ubuntu / Debian</strong> — friendly, huge community, <code>apt</code> package manager',
        '<strong>Fedora / RHEL / CentOS</strong> — enterprise / RedHat ecosystem, <code>dnf/yum</code>',
        '<strong>Arch</strong> — bleeding-edge, DIY, "rolling release", <code>pacman</code>',
        '<strong>Alpine</strong> — tiny (~5MB base), <code>apk</code>, ubiquitous in containers',
        '<strong>macOS</strong> — not Linux but BSD-Unix; most commands work the same'
      ]},
      { type: 'callout', kind: 'tip', html: 'For learning — start with Ubuntu (huge community + docs). For containers — Alpine. For enterprise — RHEL/Rocky.' }
    ]},

    /* ============== CH 2 — Shell ============== */
    { id: 'lnx-c2', title: 'The Shell & Terminal', icon: '🖥️', sections: [
      { type: 'heading', text: 'Terminal ≠ Shell', level: 1 },
      { type: 'para', html: 'A <strong>terminal</strong> is just a window. The <strong>shell</strong> is the program running inside it — it interprets what you type.' },

      { type: 'image', alt: 'terminal vs shell', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="JetBrains Mono">
    <rect x="60" y="40" width="480" height="160" rx="10" fill="#1e1e2e" stroke="#666"/>
    <rect x="60" y="40" width="480" height="22" fill="#3c3c3c"/>
    <circle cx="78" cy="51" r="5" fill="#ff5555"/>
    <circle cx="98" cy="51" r="5" fill="#ffc800"/>
    <circle cx="118" cy="51" r="5" fill="#58cc02"/>
    <text x="300" y="56" text-anchor="middle" fill="#aaa" font-size="11" font-family="Nunito">Terminal (the window)</text>

    <text x="80" y="90" fill="#7ee032" font-size="14">ana@laptop:~/code$</text>
    <text x="80" y="115" fill="#fff" font-size="14">ls -la</text>
    <text x="80" y="140" fill="#888" font-size="12">drwxr-xr-x  3 ana  staff  ...  src/</text>
    <text x="80" y="155" fill="#888" font-size="12">-rw-r--r--  1 ana  staff  ...  README.md</text>
    <text x="80" y="180" fill="#7ee032" font-size="14">ana@laptop:~/code$ _</text>

    <text x="540" y="100" font-family="Nunito" font-size="11" fill="#888">← Shell (bash/zsh)</text>
    <text x="540" y="115" font-family="Nunito" font-size="11" fill="#888">  runs INSIDE</text>
  </g>
</svg>` },

      { type: 'heading', text: 'The prompt decoded', level: 2 },
      { type: 'code', lang: 'text', code:
`ana@laptop:~/projects$ _
└─┘  └────┘ └────────┘└─ cursor — ready for input
user   host    pwd

  user     who you are
  @host    machine name
  cwd      current working directory (~ = home)
  $        prompt char ($ for user, # for root)` },

      { type: 'heading', text: 'Bash basics', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Tab completion</strong> — start typing, hit Tab. Type some more, hit Tab again',
        '<strong>↑ / ↓</strong> — cycle through command history',
        '<strong>Ctrl+R</strong> — reverse search history (the killer feature)',
        '<strong>Ctrl+A / Ctrl+E</strong> — jump to start/end of line',
        '<strong>Ctrl+L</strong> — clear screen',
        '<strong>Ctrl+C</strong> — cancel current input or process'
      ]},

      { type: 'callout', kind: 'tip', html: '<strong>Master tab completion + Ctrl+R</strong>. These two alone double your terminal speed.' }
    ]},

    /* ============== CH 3 — Navigation ============== */
    { id: 'lnx-c3', title: 'Filesystem Navigation', icon: '🧭', sections: [
      { type: 'heading', text: 'A single tree, rooted at /', level: 1 },

      { type: 'image', alt: 'filesystem tree', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Linux filesystem layout (FHS)</text>
  <g font-family="JetBrains Mono" font-size="11">
    <rect x="270" y="40" width="60" height="22" fill="#33691e"/>
    <text x="300" y="56" text-anchor="middle" fill="white" font-weight="bold">/</text>

    <line x1="300" y1="62" x2="100" y2="100" stroke="#999"/>
    <line x1="300" y1="62" x2="200" y2="100" stroke="#999"/>
    <line x1="300" y1="62" x2="300" y2="100" stroke="#999"/>
    <line x1="300" y1="62" x2="400" y2="100" stroke="#999"/>
    <line x1="300" y1="62" x2="500" y2="100" stroke="#999"/>

    <rect x="55" y="100" width="90" height="22" fill="#558b2f"/><text x="100" y="116" text-anchor="middle" fill="white">/bin</text>
    <rect x="155" y="100" width="90" height="22" fill="#558b2f"/><text x="200" y="116" text-anchor="middle" fill="white">/etc</text>
    <rect x="255" y="100" width="90" height="22" fill="#558b2f"/><text x="300" y="116" text-anchor="middle" fill="white">/home</text>
    <rect x="355" y="100" width="90" height="22" fill="#558b2f"/><text x="400" y="116" text-anchor="middle" fill="white">/var</text>
    <rect x="455" y="100" width="90" height="22" fill="#558b2f"/><text x="500" y="116" text-anchor="middle" fill="white">/usr</text>

    <text x="100" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#666">essential binaries</text>
    <text x="200" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#666">config files</text>
    <text x="300" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#666">user homes</text>
    <text x="400" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#666">logs · variable</text>
    <text x="500" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#666">user programs</text>

    <line x1="300" y1="122" x2="300" y2="160" stroke="#999"/>
    <rect x="255" y="160" width="90" height="22" fill="#7cb342"/><text x="300" y="176" text-anchor="middle" fill="white">/home/ana</text>

    <line x1="300" y1="182" x2="200" y2="220" stroke="#999"/>
    <line x1="300" y1="182" x2="300" y2="220" stroke="#999"/>
    <line x1="300" y1="182" x2="400" y2="220" stroke="#999"/>

    <rect x="160" y="220" width="80" height="22" fill="#aed581"/><text x="200" y="236" text-anchor="middle" fill="#3c3c3c">.bashrc</text>
    <rect x="260" y="220" width="80" height="22" fill="#aed581"/><text x="300" y="236" text-anchor="middle" fill="#3c3c3c">code/</text>
    <rect x="360" y="220" width="80" height="22" fill="#aed581"/><text x="400" y="236" text-anchor="middle" fill="#3c3c3c">.ssh/</text>

    <text x="300" y="270" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">FHS = Filesystem Hierarchy Standard (more dirs exist: /tmp, /opt, /proc, /sys, ...)</text>
  </g>
</svg>` },

      { type: 'heading', text: 'The four navigation commands', level: 2 },
      { type: 'code', lang: 'text', code:
`pwd                  <span class="com"># where am I?</span>
ls                   <span class="com"># what\'s in this directory?</span>
cd /path/to/somewhere   <span class="com"># go there</span>
cd ..                <span class="com"># go up one level</span>

<span class="com"># Useful ls flags</span>
ls -l                <span class="com"># long format with perms, size, date</span>
ls -la               <span class="com"># include hidden (dotfiles)</span>
ls -lh               <span class="com"># human-readable sizes (1.2K, 3.4M)</span>
ls -lt               <span class="com"># sort by modified time</span>

<span class="com"># Shortcuts</span>
cd                   <span class="com"># by itself: go home</span>
cd ~                 <span class="com"># also home</span>
cd -                 <span class="com"># back to previous directory</span>
cd ~ana              <span class="com"># go to user "ana"\'s home</span>` },

      { type: 'heading', text: 'Paths — absolute vs relative', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Absolute</strong>: starts with <code>/</code>. Always points to the same place.<br/><code>/home/ana/projects/myapp/src/index.js</code>',
        '<strong>Relative</strong>: starts with anything else. Depends on where you are.<br/><code>../shared/utils.js</code>, <code>./script.sh</code>, <code>src/index.js</code>',
        '<code>.</code> = current directory · <code>..</code> = parent · <code>~</code> = home'
      ]}
    ]},

    /* ============== CH 4 — File ops ============== */
    { id: 'lnx-c4', title: 'Files & Directories', icon: '📁', sections: [
      { type: 'heading', text: 'CRUD operations from the shell', level: 1 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Create</span>
mkdir docs                       <span class="com"># one directory</span>
mkdir -p a/b/c                   <span class="com"># nested (creates missing parents)</span>
touch file.txt                   <span class="com"># empty file (or refresh timestamp)</span>
echo "hello" &gt; greet.txt          <span class="com"># write into a new file</span>

<span class="com"># Read (covered in next chapter)</span>
cat / less / head / tail

<span class="com"># Update / Move / Rename</span>
mv old.txt new.txt               <span class="com"># rename</span>
mv file.txt subdir/              <span class="com"># move to subdir</span>
cp src.txt dst.txt               <span class="com"># copy</span>
cp -r mydir backup/              <span class="com"># recursive copy</span>

<span class="com"># Delete</span>
rm file.txt
rm -r mydir                      <span class="com"># recursive</span>
rm -rf mydir                     <span class="com"># force, no prompts — careful!</span>
rmdir empty_dir                  <span class="com"># only empty directories</span>` },

      { type: 'callout', kind: 'danger', html: '<strong>There is no undo in the shell.</strong> <code>rm</code> deletes permanently (no trash bin). Always pause before <code>rm -rf</code>. <code>rm -rf /</code> as root has destroyed many systems.' },

      { type: 'heading', text: 'Useful tricks', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Globbing — wildcards</span>
ls *.txt                  <span class="com"># all .txt files in cwd</span>
ls **/*.js                <span class="com"># all .js files recursively (with globstar)</span>
rm tmp_*                  <span class="com"># anything starting with tmp_</span>
mv {old,new}.txt          <span class="com"># brace expansion — equivalent to "mv old.txt new.txt"</span>
cp file.txt{,.bak}         <span class="com"># quick backup → creates file.txt.bak</span>

<span class="com"># Hidden files start with .</span>
ls -a                     <span class="com"># show them</span>
ls .git/                  <span class="com"># peek inside a hidden dir</span>` }
    ]},

    /* ============== CH 5 — Permissions ============== */
    { id: 'lnx-c5', title: 'Permissions & Ownership', icon: '🔐', sections: [
      { type: 'heading', text: 'rwx for user, group, other', level: 1 },

      { type: 'image', alt: 'permission bits', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Anatomy of a permission string</text>
  <g font-family="JetBrains Mono" font-size="16">
    <text x="80"  y="80" fill="#666">-</text>
    <text x="120" y="80" fill="#7c4dff" font-weight="bold">r</text>
    <text x="145" y="80" fill="#7c4dff" font-weight="bold">w</text>
    <text x="170" y="80" fill="#7c4dff" font-weight="bold">x</text>
    <text x="220" y="80" fill="#1cb0f6" font-weight="bold">r</text>
    <text x="245" y="80" fill="#1cb0f6" font-weight="bold">-</text>
    <text x="270" y="80" fill="#1cb0f6" font-weight="bold">x</text>
    <text x="320" y="80" fill="#58cc02" font-weight="bold">r</text>
    <text x="345" y="80" fill="#58cc02" font-weight="bold">-</text>
    <text x="370" y="80" fill="#58cc02" font-weight="bold">-</text>

    <text x="80" y="105" font-family="Nunito" font-size="10" fill="#666">type</text>
    <text x="145" y="105" font-family="Nunito" font-size="10" fill="#7c4dff" text-anchor="middle">user</text>
    <text x="245" y="105" font-family="Nunito" font-size="10" fill="#1cb0f6" text-anchor="middle">group</text>
    <text x="345" y="105" font-family="Nunito" font-size="10" fill="#58cc02" text-anchor="middle">other</text>

    <text x="450" y="80" fill="#3c3c3c" font-weight="bold">= 754</text>

    <text x="60" y="150" font-family="Nunito" font-size="11" fill="#666" font-weight="bold">Octal: r=4  w=2  x=1  →  sum per group</text>
    <text x="60" y="170" font-family="Nunito" font-size="11" fill="#666">user: rwx = 4+2+1 = 7   ·   group: r-x = 4+0+1 = 5   ·   other: r-- = 4</text>
    <text x="60" y="195" font-family="Nunito" font-size="11" fill="#666">First char: - file · d directory · l symlink</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Changing permissions', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Octal mode — full set</span>
chmod 755 script.sh         <span class="com"># rwx r-x r-x  (typical exec script / dir)</span>
chmod 644 doc.txt           <span class="com"># rw- r-- r--  (typical regular file)</span>
chmod 600 secret.key        <span class="com"># rw- --- ---  (private — SSH keys)</span>
chmod 700 ~/.ssh            <span class="com"># the dir holding your keys</span>

<span class="com"># Symbolic mode — add/remove bits</span>
chmod u+x file              <span class="com"># add x for user</span>
chmod a+r file              <span class="com"># add r for ALL (a = ugo)</span>
chmod go-w file             <span class="com"># remove w from group and other</span>
chmod u=rw,g=r,o= file      <span class="com"># explicit set</span>

<span class="com"># Changing ownership (usually needs sudo)</span>
sudo chown ana file              <span class="com"># change owner</span>
sudo chown ana:staff file        <span class="com"># owner + group</span>
sudo chown -R ana:ana mydir/     <span class="com"># recursive</span>` },

      { type: 'callout', kind: 'warn', html: '<strong>Don\'t <code>chmod 777</code> in production</strong>. It\'s the universal sign of "I gave up on fixing the real permission issue." Find and grant the minimum needed.' }
    ]},

    /* ============== CH 6 — Processes ============== */
    { id: 'lnx-c6', title: 'Processes', icon: '⚙️', sections: [
      { type: 'heading', text: 'See, control, kill', level: 1 },
      { type: 'para', html: 'Every running program is a <strong>process</strong> with a unique PID. Linux processes form a tree — every process has a parent.' },

      { type: 'heading', text: 'Listing processes', level: 2 },
      { type: 'code', lang: 'text', code:
`ps                        <span class="com"># your processes in this shell</span>
ps aux                    <span class="com"># all processes (Berkeley style)</span>
ps -ef                    <span class="com"># all processes (System V — with parent PID)</span>
ps -eo pid,user,cmd       <span class="com"># custom columns</span>

top                       <span class="com"># live process viewer</span>
htop                      <span class="com"># prettier, more interactive</span>

pgrep -f myapp            <span class="com"># find PIDs by command line</span>
pidof nginx               <span class="com"># find PID of a known program</span>` },

      { type: 'heading', text: 'Signals — talking to processes', level: 2 },
      { type: 'image', alt: 'signals', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Common Linux signals</text>
  <g font-family="JetBrains Mono" font-size="12">
    <rect x="20" y="50" width="560" height="22" fill="#37474f"/>
    <text x="60" y="66" fill="white" font-weight="bold">SIGNAL</text>
    <text x="180" y="66" fill="white" font-weight="bold">NUM</text>
    <text x="260" y="66" fill="white" font-weight="bold">MEANING</text>
    <text x="500" y="66" fill="white" font-weight="bold">CATCHABLE?</text>

    <rect x="20" y="73" width="560" height="22" fill="#fff"/>
    <text x="60" y="89" font-weight="bold">SIGTERM</text><text x="180" y="89">15</text><text x="260" y="89">Polite "please exit"</text><text x="500" y="89">Yes</text>

    <rect x="20" y="96" width="560" height="22" fill="#fafafa"/>
    <text x="60" y="112" font-weight="bold">SIGKILL</text><text x="180" y="112">9</text><text x="260" y="112">Force kill (NO cleanup)</text><text x="500" y="112">NO</text>

    <rect x="20" y="119" width="560" height="22" fill="#fff"/>
    <text x="60" y="135" font-weight="bold">SIGINT</text><text x="180" y="135">2</text><text x="260" y="135">Interrupt (Ctrl+C)</text><text x="500" y="135">Yes</text>

    <rect x="20" y="142" width="560" height="22" fill="#fafafa"/>
    <text x="60" y="158" font-weight="bold">SIGHUP</text><text x="180" y="158">1</text><text x="260" y="158">Hang up — many daemons reload config</text><text x="500" y="158">Yes</text>

    <rect x="20" y="165" width="560" height="22" fill="#fff"/>
    <text x="60" y="181" font-weight="bold">SIGSTOP</text><text x="180" y="181">19</text><text x="260" y="181">Pause (Ctrl+Z)</text><text x="500" y="181">NO</text>
  </g>
</svg>` },

      { type: 'code', lang: 'text', code:
`kill 1234                  <span class="com"># SIGTERM by default</span>
kill -9 1234               <span class="com"># SIGKILL — unkillable</span>
kill -HUP 1234             <span class="com"># reload config (nginx, etc.)</span>
killall firefox            <span class="com"># by name</span>
pkill -f myscript          <span class="com"># by command line match</span>` },

      { type: 'heading', text: 'Foreground / background jobs', level: 2 },
      { type: 'code', lang: 'text', code:
`./long_task &amp;              <span class="com"># run in background</span>
jobs                       <span class="com"># list background jobs</span>
fg %1                      <span class="com"># bring job 1 to foreground</span>
bg %1                      <span class="com"># continue job 1 in background</span>
Ctrl+Z                     <span class="com"># suspend the foreground process</span>
Ctrl+C                     <span class="com"># SIGINT to foreground</span>

nohup ./long_task &amp;        <span class="com"># keep running after you log out</span>
disown                     <span class="com"># detach from your shell</span>` },
      { type: 'callout', kind: 'tip', html: 'For long-running tasks: use <strong>tmux</strong> or <strong>screen</strong> — they keep sessions alive across logout and let you reattach.' }
    ]},

    /* ============== CH 7 — Pipes ============== */
    { id: 'lnx-c7', title: 'Pipes & Redirection', icon: '🔀', sections: [
      { type: 'heading', text: 'The Unix superpower', level: 1 },
      { type: 'para', html: '"<em>Write programs that do one thing well. Write programs to work together.</em>" — pipes let you compose small tools into anything.' },

      { type: 'heading', text: 'Redirection — moving streams to/from files', level: 2 },
      { type: 'code', lang: 'text', code:
`echo "hello" &gt; file.txt              <span class="com"># stdout → file (overwrite)</span>
echo "world" &gt;&gt; file.txt             <span class="com"># stdout → file (append)</span>
program 2&gt; errors.log                <span class="com"># stderr → file</span>
program 1&gt; out.log 2&gt; err.log         <span class="com"># split streams</span>
program &amp;&gt; all.log                   <span class="com"># both stdout AND stderr → file</span>
program &gt; /dev/null 2&gt;&amp;1             <span class="com"># discard everything</span>
program &lt; input.txt                  <span class="com"># file → stdin</span>` },

      { type: 'heading', text: 'Pipes — chaining commands', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Count .js files in current dir</span>
ls *.js | wc -l

<span class="com"># Find log lines mentioning errors, last 100</span>
tail -n 1000 app.log | grep -i error | tail -n 100

<span class="com"># Top 5 most common IPs in nginx access log</span>
awk \'{print $1}\' access.log | sort | uniq -c | sort -rn | head -n 5

<span class="com"># Save AND show output</span>
ls -la | tee dir-listing.txt | wc -l</div>` },

      { type: 'heading', text: 'Logical operators', level: 2 },
      { type: 'code', lang: 'text', code:
`make &amp;&amp; ./run               <span class="com"># only run if make succeeded</span>
ping -c 1 host || echo "down"    <span class="com"># run echo only on failure</span>
mkdir tmp; cd tmp           <span class="com"># sequential, ignores errors</span>

<span class="com">; vs && vs ||
   ;   → run both unconditionally
   &&  → run B only if A succeeded
   ||  → run B only if A failed</span>` },
      { type: 'callout', kind: 'tip', html: 'Master <code>grep | sort | uniq -c | sort -rn | head</code> — the most useful "what is most common" pipeline.' }
    ]},

    /* ============== CH 8 — Text processing ============== */
    { id: 'lnx-c8', title: 'Text Processing — grep · sed · awk', icon: '🪄', sections: [
      { type: 'heading', text: 'Three tools that make logs (and data) talk', level: 1 },

      { type: 'heading', text: 'grep — find lines', level: 2 },
      { type: 'code', lang: 'text', code:
`grep "error" log.txt                  <span class="com"># lines containing "error"</span>
grep -i error log.txt                 <span class="com"># case-insensitive</span>
grep -v debug log.txt                 <span class="com"># INVERT (lines NOT matching)</span>
grep -n error log.txt                 <span class="com"># show line numbers</span>
grep -c error log.txt                 <span class="com"># just the count</span>
grep -A 3 -B 1 error log.txt          <span class="com"># 3 lines after, 1 before context</span>

grep -r "TODO" .                      <span class="com"># recursive in current dir</span>
grep -rn --include="*.js" TODO src/   <span class="com"># only .js files</span>

grep -E "warn|error|fatal" log.txt    <span class="com"># extended regex (OR)</span>
grep -P "\\d{4}-\\d{2}" log.txt          <span class="com"># Perl regex (if available)</span>

<span class="com"># Use with pipes</span>
ps aux | grep python | grep -v grep
docker ps | grep mongo` },

      { type: 'heading', text: 'sed — substitute, delete, edit', level: 2 },
      { type: 'code', lang: 'text', code:
`sed \'s/foo/bar/\' file.txt          <span class="com"># first occurrence per line</span>
sed \'s/foo/bar/g\' file.txt         <span class="com"># every occurrence per line</span>
sed -i \'s/foo/bar/g\' file.txt      <span class="com"># IN-PLACE (modifies file)</span>
sed -i.bak \'s/.../.../g\' file       <span class="com"># in-place + backup</span>

sed \'/^#/d\' file.txt               <span class="com"># delete lines starting with #</span>
sed \'5d\' file.txt                  <span class="com"># delete line 5</span>
sed -n \'10,20p\' file.txt           <span class="com"># print only lines 10-20</span>

<span class="com"># Real-world: replace https URL in config</span>
sed -i \'s|http://|https://|g\' nginx.conf` },

      { type: 'heading', text: 'awk — column ninja', level: 2 },
      { type: 'code', lang: 'text', code:
`awk \'{print $1}\' file.txt          <span class="com"># first column (whitespace-split)</span>
awk \'{print $1, $3}\' file.txt      <span class="com"># columns 1 and 3</span>
awk -F, \'{print $2}\' data.csv      <span class="com"># custom delimiter (CSV)</span>
awk \'NR == 1 {print}\' f.txt        <span class="com"># first row only (header)</span>
awk \'$3 &gt; 100 {print $0}\' f.txt    <span class="com"># filter by column value</span>
awk \'{sum += $1} END {print sum}\' nums.txt   <span class="com"># sum first column</span>

<span class="com"># Average response time from nginx logs (col 11 = ms)</span>
awk \'{s += $11; n++} END {print s/n}\' access.log` },
      { type: 'callout', kind: 'tip', html: 'For complex transformations consider <code>jq</code> for JSON, <code>miller (mlr)</code> for CSV/TSV — modern, ergonomic alternatives.' }
    ]},

    /* ============== CH 9 — Networking ============== */
    { id: 'lnx-c9', title: 'Networking', icon: '📡', sections: [
      { type: 'heading', text: 'Daily networking commands', level: 1 },

      { type: 'heading', text: 'Connectivity', level: 2 },
      { type: 'code', lang: 'text', code:
`ping example.com                     <span class="com"># is it reachable?</span>
ping -c 4 1.1.1.1                    <span class="com"># 4 packets and quit</span>
traceroute example.com               <span class="com"># show network hops</span>
dig example.com                      <span class="com"># DNS lookup</span>
host example.com                     <span class="com"># simpler DNS</span>
nslookup example.com                 <span class="com"># older DNS tool</span>` },

      { type: 'heading', text: 'HTTP from the terminal', level: 2 },
      { type: 'code', lang: 'text', code:
`curl https://api.example.com/users
curl -i URL                          <span class="com"># include response headers</span>
curl -I URL                          <span class="com"># HEAD — headers only</span>
curl -X POST -d \'{"a":1}\' \\
     -H "Content-Type: application/json" URL
curl -u user:pass URL                <span class="com"># basic auth</span>
curl -L URL                          <span class="com"># follow redirects</span>
curl -o file.zip URL                 <span class="com"># save to file</span>
curl --resolve host:443:1.2.3.4 URL  <span class="com"># skip DNS for tests</span>

wget URL                             <span class="com"># mirror tool (different from curl)</span>
wget -c URL                          <span class="com"># resume interrupted download</span>` },

      { type: 'heading', text: 'SSH & file transfer', level: 2 },
      { type: 'code', lang: 'text', code:
`ssh ana@server.com                   <span class="com"># connect</span>
ssh -p 2222 user@host                <span class="com"># non-default port</span>
ssh -i ~/.ssh/key.pem user@host      <span class="com"># specific key file</span>
ssh-keygen -t ed25519                <span class="com"># generate keypair</span>
ssh-copy-id user@host                <span class="com"># install your pubkey there</span>

<span class="com"># Run a single remote command</span>
ssh user@host \'df -h\'

<span class="com"># File transfer</span>
scp local.txt user@host:~/           <span class="com"># local → remote</span>
scp user@host:remote.txt .           <span class="com"># remote → local</span>
scp -r mydir/ user@host:~/dst/       <span class="com"># recursive</span>

<span class="com"># rsync — much better than scp for big/recurring transfers</span>
rsync -av --progress src/ user@host:dst/   <span class="com"># incremental, only changes</span>
rsync -av --delete src/ user@host:dst/     <span class="com"># also delete extras on dst</span>` },

      { type: 'heading', text: 'Inspecting your machine\'s networking', level: 2 },
      { type: 'code', lang: 'text', code:
`ip addr                              <span class="com"># show interfaces + IPs (modern)</span>
ifconfig                             <span class="com"># older equivalent</span>
ip route                             <span class="com"># routing table</span>

ss -tln                              <span class="com"># open TCP listening ports</span>
ss -tunap                            <span class="com"># all sockets with PIDs</span>
netstat -tlnp                        <span class="com"># older equivalent</span>
lsof -i :3000                        <span class="com"># what\'s on port 3000?</span>

<span class="com"># What\'s my public IP?</span>
curl ifconfig.me
curl ipinfo.io` },
      { type: 'callout', kind: 'tip', html: 'Set up <code>~/.ssh/config</code> to give servers short aliases — <code>ssh prod</code> instead of <code>ssh -i ~/.ssh/prod.pem -p 2222 ubuntu@1.2.3.4</code>.' }
    ]},

    /* ============== CH 10 — Shell scripting ============== */
    { id: 'lnx-c10', title: 'Shell Scripting', icon: '📜', sections: [
      { type: 'heading', text: 'Automate the boring stuff', level: 1 },
      { type: 'code', lang: 'text', code:
`#!/usr/bin/env bash
set -euo pipefail
<span class="com"># -e: exit on error
# -u: error on undefined var
# -o pipefail: pipe fails if any stage fails</span>

<span class="com"># Variables (no spaces around =)</span>
NAME="Ana"
TODAY=$(date +%Y-%m-%d)

<span class="com"># Quote your variables to handle spaces</span>
echo "Hello, $NAME! Today is $TODAY."

<span class="com"># Read input</span>
read -p "Your name? " who
echo "Hi, $who"

<span class="com"># Conditionals</span>
if [[ -f config.yml ]]; then
  echo "config exists"
elif [[ -d configs ]]; then
  echo "configs dir exists"
else
  echo "neither"
fi

<span class="com"># Numeric comparison</span>
if (( count &gt; 10 )); then
  echo "big"
fi

<span class="com"># Loops</span>
for f in *.log; do
  gzip "$f"
done

for i in {1..5}; do
  echo "iter $i"
done

while read -r line; do
  echo "got: $line"
done &lt; input.txt

<span class="com"># Functions</span>
greet() {
  local name="$1"   <span class="com"># local scope</span>
  echo "Hi, $name"
  return 0
}
greet "Bob"

<span class="com"># Command-line arguments</span>
echo "Script: $0"
echo "First arg: $1"
echo "All args: $@"
echo "Number of args: $#"` },

      { type: 'heading', text: 'A real example — backup script', level: 2 },
      { type: 'code', lang: 'text', code:
`#!/usr/bin/env bash
set -euo pipefail

SRC="\${1:-$HOME/data}"
DST="\${2:-/backups}"
TS=$(date +%Y%m%d-%H%M%S)
ARCHIVE="$DST/backup-$TS.tar.gz"

mkdir -p "$DST"
echo "Backing up $SRC → $ARCHIVE"
tar czf "$ARCHIVE" "$SRC"
echo "Done: $(du -h $ARCHIVE | cut -f1)"

<span class="com"># Keep only the last 7 backups</span>
ls -1t "$DST"/backup-*.tar.gz | tail -n +8 | xargs -r rm

echo "Cleanup complete."` },

      { type: 'heading', text: 'Common patterns', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Always start with <code>set -euo pipefail</code> for safer scripts',
        'Use <code>"$var"</code> with double quotes — handles spaces correctly',
        'Use <code>$(cmd)</code> for command substitution (not backticks)',
        'Use <code>[[ ... ]]</code> for tests, not legacy <code>[ ... ]</code>',
        'Check file existence: <code>-f</code> (file), <code>-d</code> (dir), <code>-e</code> (exists)',
        'Run <code>shellcheck script.sh</code> — it catches most bash bugs'
      ]},
      { type: 'callout', kind: 'tip', html: 'For non-trivial scripts (over a few hundred lines), consider switching to Python. Bash gets hairy fast.' }
    ]},

    /* ============== CH 11 — Package management ============== */
    { id: 'lnx-c11', title: 'Package Management', icon: '📦', sections: [
      { type: 'heading', text: 'Different distros, same idea', level: 1 },

      { type: 'image', alt: 'package managers', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Package managers by distro</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="180" height="140" rx="10" fill="#e94e1b"/>
    <text x="110" y="80" text-anchor="middle" fill="white" font-weight="bold">Debian/Ubuntu</text>
    <text x="110" y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="12">apt</text>
    <text x="110" y="125" text-anchor="middle" fill="white" font-size="10">apt update</text>
    <text x="110" y="140" text-anchor="middle" fill="white" font-size="10">apt install nginx</text>
    <text x="110" y="155" text-anchor="middle" fill="white" font-size="10">apt remove nginx</text>
    <text x="110" y="175" text-anchor="middle" fill="white" font-size="10">apt search ...</text>

    <rect x="210" y="50" width="180" height="140" rx="10" fill="#294172"/>
    <text x="300" y="80" text-anchor="middle" fill="white" font-weight="bold">Fedora/RHEL</text>
    <text x="300" y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="12">dnf (or yum)</text>
    <text x="300" y="125" text-anchor="middle" fill="white" font-size="10">dnf check-update</text>
    <text x="300" y="140" text-anchor="middle" fill="white" font-size="10">dnf install nginx</text>
    <text x="300" y="155" text-anchor="middle" fill="white" font-size="10">dnf remove nginx</text>

    <rect x="400" y="50" width="180" height="140" rx="10" fill="#1793d1"/>
    <text x="490" y="80" text-anchor="middle" fill="white" font-weight="bold">Arch</text>
    <text x="490" y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="12">pacman</text>
    <text x="490" y="125" text-anchor="middle" fill="white" font-size="10">pacman -Syu</text>
    <text x="490" y="140" text-anchor="middle" fill="white" font-size="10">pacman -S nginx</text>
    <text x="490" y="155" text-anchor="middle" fill="white" font-size="10">pacman -R nginx</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Common workflows', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Ubuntu / Debian (apt)</span>
sudo apt update                       <span class="com"># refresh lists</span>
sudo apt upgrade                      <span class="com"># upgrade all installed</span>
sudo apt install nginx postgresql     <span class="com"># install</span>
sudo apt remove nginx                 <span class="com"># uninstall (keep config)</span>
sudo apt purge nginx                  <span class="com"># uninstall + remove config</span>
apt search keyword                    <span class="com"># search</span>
apt show nginx                        <span class="com"># info about a package</span>
sudo apt autoremove                   <span class="com"># clean up unused deps</span>

<span class="com"># macOS — Homebrew</span>
brew install ripgrep
brew update &amp;&amp; brew upgrade
brew search jq
brew uninstall nginx

<span class="com"># Language-specific (separate ecosystem)</span>
npm install -g typescript    <span class="com"># Node.js global</span>
pip install --user httpx     <span class="com"># Python user-level</span>
cargo install ripgrep        <span class="com"># Rust crates</span>
go install ...               <span class="com"># Go modules</span>` },
      { type: 'callout', kind: 'warn', html: 'Don\'t mix system Python with <code>sudo pip install</code>. Use <code>--user</code>, virtualenv, or modern tools like <strong>uv</strong>/<strong>pipx</strong>.' }
    ]},

    /* ============== CH 12 — Monitoring & ops ============== */
    { id: 'lnx-c12', title: 'Monitoring, Logs & Cron', icon: '📊', sections: [
      { type: 'heading', text: 'Operating the machine', level: 1 },

      { type: 'heading', text: 'Resources at a glance', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Disk</span>
df -h                       <span class="com"># filesystem usage (human-readable)</span>
df -i                       <span class="com"># inode usage (you can run out of these too!)</span>
du -sh /var                 <span class="com"># size of a directory</span>
du -sh */ | sort -h         <span class="com"># sorted dir sizes</span>
ncdu /                      <span class="com"># interactive disk usage (install: apt install ncdu)</span>

<span class="com"># Memory</span>
free -h                     <span class="com"># memory + swap</span>
vmstat 1                    <span class="com"># live stats every 1 second</span>

<span class="com"># CPU / processes</span>
uptime                      <span class="com"># load averages: 1, 5, 15 minute</span>
top                         <span class="com"># live (q to quit, k to kill)</span>
htop                        <span class="com"># prettier, colorful, mouse-friendly</span>

<span class="com"># I/O</span>
iostat -x 2                 <span class="com"># detailed I/O stats every 2s</span>
iotop                       <span class="com"># top, but for I/O usage per process</span></div>` },

      { type: 'heading', text: 'Reading load averages', level: 2 },
      { type: 'callout', kind: 'info', html: '<code>load average: 1.2, 0.8, 0.6</code> means avg waiting/running processes over 1, 5, 15 min. Healthy if &lt; number of cores. If your 4-core box hits load 8 sustained, you have a problem.' },

      { type: 'heading', text: 'Logs — journalctl & /var/log', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># systemd journal (modern)</span>
journalctl                          <span class="com"># everything (oldest first)</span>
journalctl -r                       <span class="com"># newest first</span>
journalctl -f                       <span class="com"># follow (like tail -f)</span>
journalctl -u nginx                 <span class="com"># for a specific service</span>
journalctl -u nginx --since "10 min ago"
journalctl -p err                   <span class="com"># errors and worse</span>
journalctl -k                       <span class="com"># kernel messages</span>

<span class="com"># Classic log files (where they exist)</span>
tail -f /var/log/syslog
tail -f /var/log/nginx/access.log
sudo less /var/log/auth.log         <span class="com"># SSH attempts etc.</span>` },

      { type: 'heading', text: 'Cron — schedule recurring tasks', level: 2 },
      { type: 'code', lang: 'text', code:
`crontab -e                  <span class="com"># edit your crontab</span>
crontab -l                  <span class="com"># list it</span>

<span class="com"># Format: min hour day-of-month month day-of-week command</span>
<span class="com"># Each field: * = any, comma = list, - = range, / = step</span>

0  2   *  *  *   /usr/local/bin/backup.sh         <span class="com"># daily at 02:00</span>
*/5 *  *  *  *   /usr/local/bin/healthcheck.sh    <span class="com"># every 5 minutes</span>
0  9   *  *  1-5 /home/ana/morning-report.sh      <span class="com"># weekdays 09:00</span>
0  0   1  *  *   /usr/local/bin/monthly.sh         <span class="com"># 1st of each month at 00:00</span>

<span class="com"># Always redirect output — cron emails by default (often broken)</span>
0 2 * * * /usr/local/bin/backup.sh &gt;&gt; /var/log/backup.log 2&gt;&amp;1` },

      { type: 'heading', text: 'Systemd services', level: 2 },
      { type: 'code', lang: 'text', code:
`systemctl status nginx              <span class="com"># is it running?</span>
sudo systemctl start nginx          <span class="com"># start now</span>
sudo systemctl stop nginx           <span class="com"># stop</span>
sudo systemctl restart nginx        <span class="com"># restart</span>
sudo systemctl reload nginx         <span class="com"># reload config without restart</span>
sudo systemctl enable nginx         <span class="com"># start on boot</span>
sudo systemctl disable nginx        <span class="com"># don\'t start on boot</span>
sudo systemctl daemon-reload        <span class="com"># after editing a .service file</span></div>` },
      { type: 'callout', kind: 'success', html: '🎉 You now have the toolkit to live happily in a Linux terminal — install software, navigate the filesystem, manage processes, work with logs, schedule jobs, and script the boring parts. Welcome to the club.' }
    ]}
  ]
});

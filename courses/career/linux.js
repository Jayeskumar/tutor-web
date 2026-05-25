PUSH({
  id: 'linux',
  name: 'Linux',
  icon: '🐧',
  color: '#33691e',
  description: 'Master the command line — shell, files, processes, scripting, and ops.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'lnx-u1', name: 'Unit 1 · What is Linux?', description: 'The OS that runs the world',
      lessons: [
        {
          id: 'lnx-u1-l1', name: 'Kernel, distros, history', icon: '🐧', xp: 15,
          challenges: [
            { type: 'concept', title: 'Linux in one minute', content: `<p><strong>Linux</strong> is an open-source Unix-like operating system kernel created by Linus Torvalds in 1991. A <strong>distribution (distro)</strong> is the kernel + tooling: shell, package manager, GUI, etc.</p>
<div class="code-block"><span class="com">Where Linux runs:</span>
- ~96% of the world\'s top servers
- Android (Linux kernel underneath)
- Cloud (AWS, GCP, Azure default to Linux)
- Embedded devices, routers, smart TVs
- Developer laptops (macOS is Unix-flavored too)

<span class="com">Popular distros:</span>
- Debian / Ubuntu — beginner-friendly
- Fedora / RHEL / CentOS — enterprise
- Arch — DIY, bleeding-edge
- Alpine — tiny, popular in containers</div>` },
            { type: 'multiple-choice', prompt: 'Which is true about Linux?',
              options: [{text:'It\'s a programming language', code:false},{text:'It\'s an OS kernel + ecosystem, open-source', code:false},{text:'Owned by Microsoft', code:false},{text:'Only runs on servers', code:false}],
              correct: 1, explanation: 'Linux = kernel; distros bundle it with userspace tools.' },
            { type: 'true-false', statement: 'macOS is technically a Unix-like OS (BSD-derived), so most Linux commands work on Mac.', correct: true, explanation: 'Most commands are identical; some flags differ (BSD vs GNU).' },
            { type: 'match-pairs', prompt: 'Distro → reputation.', leftLabel: 'Distro', rightLabel: 'Known for',
              pairs: [{left:'Ubuntu', right:'Beginner-friendly'},{left:'Arch', right:'DIY / minimal'},{left:'RHEL', right:'Enterprise/stable'},{left:'Alpine', right:'Tiny — containers'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Shell ============== */
    {
      id: 'lnx-u2', name: 'Unit 2 · The Shell & Terminal', description: 'Where you live as a Linux user',
      lessons: [
        {
          id: 'lnx-u2-l1', name: 'Bash, zsh, prompts', icon: '🖥️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Terminal ≠ Shell', content: `<p>The <strong>terminal</strong> is the window. The <strong>shell</strong> is the program inside that interprets your commands.</p>
<div class="code-block"><span class="com">Common shells:</span>
- bash    — default on most Linux
- zsh     — default on macOS, prettier
- fish    — beginner-friendly, opinionated

<span class="com">A prompt typically shows:</span>
ana@desktop:~/projects$
└─┘  └──────┘ └────────┘ └ end of prompt
user   host    cwd</div>` },
            { type: 'multiple-choice', prompt: 'Default shell on most Linux distributions?',
              options: [{text:'fish', code:true},{text:'bash', code:true},{text:'zsh', code:true},{text:'cmd.exe', code:true}],
              correct: 1, explanation: 'bash is the default; macOS switched to zsh in 2019.' },
            { type: 'true-false', statement: 'The terminal and the shell are the same thing.', correct: false, explanation: 'Terminal = window (terminal emulator). Shell = command interpreter (bash, zsh) running inside it.' },
            { type: 'fill-blank', prompt: 'Print the path to your home directory using a single command:',
              codeLines: [{html:'<span class="fn">_BLANK_</span>'}],
              tokens: ['pwd','home','where','dir'], correctAnswer: 'pwd', explanation: 'pwd = print working directory.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Navigation ============== */
    {
      id: 'lnx-u3', name: 'Unit 3 · Filesystem Navigation', description: 'Move around without a GUI',
      lessons: [
        {
          id: 'lnx-u3-l1', name: 'ls, cd, pwd, paths', icon: '🧭', xp: 20,
          challenges: [
            { type: 'concept', title: 'The basics', content: `<div class="code-block">pwd                   <span class="com"># print working directory</span>
ls                    <span class="com"># list current directory</span>
ls -la                <span class="com"># long listing with hidden files</span>
ls -lh                <span class="com"># human-readable file sizes</span>
cd /etc               <span class="com"># absolute path</span>
cd projects           <span class="com"># relative path</span>
cd ..                 <span class="com"># up one directory</span>
cd ~                  <span class="com"># home directory</span>
cd -                  <span class="com"># back to previous directory</span></div>
<p><strong>Paths</strong>: absolute starts with <code>/</code>, relative starts with anything else. <code>~</code> = home, <code>.</code> = current, <code>..</code> = parent.</p>` },
            { type: 'multiple-choice', prompt: 'How to list ALL files including hidden ones?',
              options: [{text:'ls', code:true},{text:'ls -a', code:true},{text:'ls -h', code:true},{text:'ls --hidden', code:true}],
              correct: 1, explanation: '-a shows files starting with . (hidden).' },
            { type: 'multiple-choice', prompt: '<code>cd ../..</code> takes you:',
              options: [{text:'To root', code:false},{text:'Up two directories', code:false},{text:'To home', code:false},{text:'Nowhere', code:false}],
              correct: 1, explanation: 'Each .. is one level up; chained = multiple levels.' },
            { type: 'fill-blank', prompt: 'Jump straight to your home directory:',
              codeLines: [{html:'cd <span class="fn">_BLANK_</span>'}],
              tokens: ['~','home','/','*'], correctAnswer: '~', explanation: '~ expands to $HOME.' },
            { type: 'true-false', statement: '<code>/</code> is the root of the filesystem (everything is under it).', correct: true, explanation: 'Unlike Windows drive letters, Linux has one tree.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — File ops ============== */
    {
      id: 'lnx-u4', name: 'Unit 4 · Files & Directories', description: 'Create, move, copy, delete',
      lessons: [
        {
          id: 'lnx-u4-l1', name: 'Essential file commands', icon: '📁', xp: 20,
          challenges: [
            { type: 'concept', title: 'The CRUD of files', content: `<div class="code-block">mkdir docs                 <span class="com"># create directory</span>
mkdir -p a/b/c            <span class="com"># create nested directories</span>
touch file.txt            <span class="com"># create empty file (or update timestamp)</span>
cp src.txt dst.txt        <span class="com"># copy</span>
cp -r mydir backup/       <span class="com"># recursive copy</span>
mv old.txt new.txt        <span class="com"># rename (or move)</span>
rm file.txt               <span class="com"># delete file</span>
rm -r mydir               <span class="com"># recursive delete</span>
rm -rf mydir              <span class="com"># force, no prompts — DANGEROUS</span>
rmdir empty_dir           <span class="com"># only removes empty dir</span></div>` },
            { type: 'multiple-choice', prompt: 'Copy a folder and all its contents?',
              options: [{text:'cp folder dest', code:true},{text:'cp -r folder dest', code:true},{text:'mv -r folder dest', code:true},{text:'copy folder', code:true}],
              correct: 1, explanation: '-r = recursive for folders.' },
            { type: 'multiple-choice', prompt: '<code>rm -rf /</code> as root would:',
              options: [{text:'Be harmless', code:false},{text:'Delete the entire filesystem — total disaster', code:false},{text:'Restart the computer', code:false},{text:'Format the disk', code:false}],
              correct: 1, explanation: 'A famous mistake. Modern rm refuses with --no-preserve-root flag missing, but the lesson stands: -rf at the wrong path is catastrophic.' },
            { type: 'true-false', statement: '<code>mv old.txt new.txt</code> in the same directory effectively renames the file.', correct: true, explanation: 'No separate "rename" command — mv handles both.' },
            { type: 'fill-blank', prompt: 'Create a nested directory tree in one command:',
              codeLines: [{html:'mkdir <span class="fn">_BLANK_</span> docs/year/month'}],
              tokens: ['-p','-r','-a','-n'], correctAnswer: '-p', explanation: '-p creates parents as needed.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Viewing/editing ============== */
    {
      id: 'lnx-u5', name: 'Unit 5 · Viewing & Editing Files', description: 'cat, less, nano, vim',
      lessons: [
        {
          id: 'lnx-u5-l1', name: 'Read files quickly', icon: '👀', xp: 15,
          challenges: [
            { type: 'concept', title: 'When to use what', content: `<div class="code-block">cat file.txt              <span class="com"># print whole file — small files only</span>
less file.txt             <span class="com"># scroll, search, paged — best for big files</span>
head file.txt             <span class="com"># first 10 lines</span>
head -n 50 file.txt       <span class="com"># first 50 lines</span>
tail file.txt             <span class="com"># last 10 lines</span>
tail -f log.txt           <span class="com"># follow — watch a log file live</span>
wc -l file.txt            <span class="com"># count lines</span>
file mystery.bin          <span class="com"># detect file type</span></div>
<p><code>tail -f</code> is the classic way to watch logs as they\'re written.</p>` },
            { type: 'multiple-choice', prompt: 'Watch a log file as new lines are appended?',
              options: [{text:'cat -f', code:true},{text:'tail -f', code:true},{text:'less -F', code:true},{text:'Both 2 and 3', code:true}],
              correct: 3, explanation: 'Both work. tail -f is more common; less +F is fancier (lets you scroll back).' },
            { type: 'multiple-choice', prompt: 'For a 2GB log file, use:',
              options: [{text:'cat', code:false},{text:'less', code:false},{text:'echo', code:false},{text:'print', code:false}],
              correct: 1, explanation: 'cat would dump everything; less pages through it.' },
            { type: 'fill-blank', prompt: 'First 20 lines of a file:',
              codeLines: [{html:'head <span class="fn">_BLANK_</span> <span class="num">20</span> file.txt'}],
              tokens: ['-n','-l','-c','-h'], correctAnswer: '-n', explanation: '-n <number> for line count.' }
          ]
        },
        {
          id: 'lnx-u5-l2', name: 'Editors — nano & vim', icon: '✏️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two essential editors', content: `<p><strong>nano</strong> — easy, friendly. Shortcuts at the bottom of the screen.</p>
<div class="code-block">nano file.txt
<span class="com"># Ctrl+O save, Ctrl+X exit, Ctrl+W search</span></div>

<p><strong>vim</strong> — powerful, modal, ubiquitous (installed on every server).</p>
<div class="code-block">vim file.txt
<span class="com">i</span>          → insert mode (start typing)
<span class="com">Esc</span>        → back to command mode
<span class="com">:w</span>         → save
<span class="com">:q</span>         → quit
<span class="com">:wq</span>        → save and quit
<span class="com">:q!</span>        → quit without saving
<span class="com">dd</span>         → delete line
<span class="com">/word</span>      → search for "word"
<span class="com">u</span>          → undo</div>` },
            { type: 'multiple-choice', prompt: 'In vim, save and quit?',
              options: [{text:':save', code:true},{text:':wq (or ZZ)', code:true},{text:'Ctrl+X', code:true},{text:'Esc', code:true}],
              correct: 1, explanation: ':wq writes then quits. ZZ is a shortcut.' },
            { type: 'multiple-choice', prompt: 'You opened vim by accident. How to quit without changes?',
              options: [{text:'Ctrl+C', code:true},{text:'Esc :q!', code:true},{text:'Close terminal', code:true},{text:'Both 2 and 3 work but Esc :q! is the proper way', code:true}],
              correct: 3, explanation: '"How do I exit vim" is the most-Googled programming question ever.' },
            { type: 'true-false', statement: 'vim is "modal" — different keys do different things depending on which mode you\'re in.', correct: true, explanation: 'Insert, normal, visual, command-line modes — each with its own keymap.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Permissions ============== */
    {
      id: 'lnx-u6', name: 'Unit 6 · Permissions & Ownership', description: 'Who can do what',
      lessons: [
        {
          id: 'lnx-u6-l1', name: 'chmod & chown', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'rwx for user, group, other', content: `<p>Every file has 3 sets of 3 permissions:</p>
<div class="code-block">ls -l shows:
-rwxr-xr--  1 ana staff  4096 Apr 1 10:00 script.sh
 │└─┬─┘└─┬─┘└─┬─┘
 │  │   │   └ other (everyone else)
 │  │   └ group
 │  └ user (owner)
 └ file type (- file, d directory, l symlink)

Each set: r=read(4) w=write(2) x=execute(1) → sum = octal
rwx = 7   rw- = 6   r-x = 5   r-- = 4   --x = 1   --- = 0</div>
<p>Common modes: <code>755</code> (rwx for owner, rx for others — typical for scripts/dirs), <code>644</code> (rw for owner, r for others — typical for files), <code>600</code> (owner only — secrets).</p>` },
            { type: 'multiple-choice', prompt: 'Make a file executable for everyone?',
              options: [{text:'chmod 755 file', code:true},{text:'chmod +x file', code:true},{text:'chmod a+x file', code:true},{text:'All work', code:true}],
              correct: 3, explanation: 'All three add execute. <code>+x</code> means add x for everyone unless u/g/o is specified.' },
            { type: 'multiple-choice', prompt: 'What does <code>chmod 600 secret.key</code> do?',
              options: [{text:'Make it readable+writable by owner only', code:false},{text:'Make it executable', code:false},{text:'Delete it', code:false},{text:'Make it world-readable', code:false}],
              correct: 0, explanation: '6 = rw-, others get 0 = ---. Standard for SSH keys etc.' },
            { type: 'multiple-choice', prompt: 'Change file ownership to user "ana"?',
              options: [{text:'chown ana file.txt', code:true},{text:'chmod ana file.txt', code:true},{text:'sudo chown ana file.txt (usually needs sudo)', code:true},{text:'Both 1 and 3', code:true}],
              correct: 3, explanation: 'chown changes owner; you typically need sudo.' },
            { type: 'fill-blank', prompt: 'Recursively change ownership of a directory:',
              codeLines: [{html:'chown <span class="fn">_BLANK_</span> ana:staff mydir/'}],
              tokens: ['-R','-r','-a','-x'], correctAnswer: '-R', explanation: '-R recursively applies to all contents.' },
            { type: 'true-false', statement: '<code>chmod 777</code> means "everyone can read, write, AND execute" — almost never what you want in production.', correct: true, explanation: '777 is a security smell. Use the least permission needed.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Users / sudo ============== */
    {
      id: 'lnx-u7', name: 'Unit 7 · Users & sudo', description: 'Who you are matters',
      lessons: [
        {
          id: 'lnx-u7-l1', name: 'sudo, whoami, su', icon: '👤', xp: 20,
          challenges: [
            { type: 'concept', title: 'Privilege escalation', content: `<div class="code-block">whoami                 <span class="com"># current user</span>
id                     <span class="com"># uid + groups</span>
sudo command           <span class="com"># run command as root (with your password)</span>
sudo -i                <span class="com"># become root with a new shell (careful!)</span>
sudo -u other cmd      <span class="com"># run as a different user</span>
su - other             <span class="com"># switch shell to another user (needs their password)</span>
passwd                 <span class="com"># change YOUR password</span>
sudo passwd alice      <span class="com"># change ALICE\'s password</span></div>
<p>The user <strong>root</strong> (uid 0) can do anything — including delete your whole filesystem. Use sudo sparingly.</p>` },
            { type: 'multiple-choice', prompt: '<code>sudo</code> stands for:',
              options: [{text:'Super User DO', code:false},{text:'Substitute User DO', code:false},{text:'Specific User DO', code:false},{text:'Both 1 and 2 are commonly cited', code:false}],
              correct: 3, explanation: '"superuser do" or "substitute user do" — both are used.' },
            { type: 'true-false', statement: 'Running everything as root saves time and is recommended.', correct: false, explanation: 'NO — one typo can destroy your system. Use sudo only when needed.' },
            { type: 'fill-blank', prompt: 'Find out who you currently are:',
              codeLines: [{html:'<span class="fn">_BLANK_</span>'}],
              tokens: ['whoami','who','id','userinfo'], correctAnswer: 'whoami', explanation: 'whoami prints the effective user.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Processes ============== */
    {
      id: 'lnx-u8', name: 'Unit 8 · Process Management', description: 'See, control, kill',
      lessons: [
        {
          id: 'lnx-u8-l1', name: 'ps, top, kill, jobs', icon: '⚙️', xp: 25,
          challenges: [
            { type: 'concept', title: 'What\'s running?', content: `<div class="code-block">ps                     <span class="com"># your processes in this shell</span>
ps aux                 <span class="com"># all processes, classic format</span>
ps -ef                 <span class="com"># all processes, hierarchical</span>
top                    <span class="com"># live process viewer</span>
htop                   <span class="com"># prettier top (install separately)</span>

kill 1234              <span class="com"># SIGTERM — polite "please exit"</span>
kill -9 1234           <span class="com"># SIGKILL — force kill (no cleanup)</span>
killall firefox        <span class="com"># kill by name</span>
pkill -f myscript      <span class="com"># kill matching command line</span>

<span class="com"># Job control in your shell:</span>
sleep 100 &amp;            <span class="com"># run in background</span>
jobs                   <span class="com"># list background jobs</span>
fg %1                  <span class="com"># bring job 1 to foreground</span>
bg %1                  <span class="com"># continue job 1 in background</span>
Ctrl+Z                 <span class="com"># suspend foreground process</span>
Ctrl+C                 <span class="com"># send SIGINT (interrupt)</span></div>` },
            { type: 'multiple-choice', prompt: 'Difference between <code>kill 1234</code> and <code>kill -9 1234</code>?',
              options: [{text:'Both same', code:false},{text:'-9 forces immediate kill; default sends SIGTERM (process can clean up)', code:false},{text:'-9 is gentler', code:false},{text:'-9 just logs', code:false}],
              correct: 1, explanation: 'SIGKILL (9) cannot be caught — use only if SIGTERM fails.' },
            { type: 'multiple-choice', prompt: 'You ran <code>./long_script</code> in foreground. How to send it to background WITHOUT exiting?',
              options: [{text:'Ctrl+C', code:false},{text:'Ctrl+Z then "bg"', code:false},{text:'Type "background"', code:false},{text:'Kill the terminal', code:false}],
              correct: 1, explanation: 'Ctrl+Z suspends; bg resumes it in background.' },
            { type: 'multiple-choice', prompt: 'Live process monitor — best command?',
              options: [{text:'ps', code:true},{text:'top (or htop)', code:true},{text:'jobs', code:true},{text:'monitor', code:true}],
              correct: 1, explanation: 'ps is a snapshot; top is live.' },
            { type: 'true-false', statement: 'Every process has a parent — the init/systemd process is the ancestor of all.', correct: true, explanation: 'PID 1 is special — never killable.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Pipes / Redirection ============== */
    {
      id: 'lnx-u9', name: 'Unit 9 · Pipes & Redirection', description: 'The Unix philosophy in action',
      lessons: [
        {
          id: 'lnx-u9-l1', name: '|, >, <, &&, ||', icon: '🔀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Compose small programs', content: `<div class="code-block"><span class="com"># Output redirection</span>
echo hello &gt; out.txt        <span class="com"># overwrite</span>
echo world &gt;&gt; out.txt       <span class="com"># append</span>
program 2&gt; errors.log       <span class="com"># redirect stderr</span>
program &amp;&gt; all.log          <span class="com"># both stdout + stderr</span>
program &gt; /dev/null         <span class="com"># discard output</span>

<span class="com"># Input redirection</span>
sort &lt; names.txt

<span class="com"># Pipes — output of one becomes input of next</span>
ls -l | grep ".js" | wc -l   <span class="com"># count .js files</span>
ps aux | grep python | grep -v grep
cat log.txt | sort | uniq -c | sort -rn | head

<span class="com"># Conditional execution</span>
make &amp;&amp; ./run          <span class="com"># run only if make succeeded</span>
test -f x || touch x   <span class="com"># create x if it doesn\'t exist</span>

<span class="com"># tee — split output to file AND screen</span>
ls | tee files.txt | wc -l</div>` },
            { type: 'multiple-choice', prompt: 'What does <code>cmd > /dev/null 2>&1</code> do?',
              options: [{text:'Errors a lot', code:false},{text:'Redirects both stdout and stderr to /dev/null (discards everything)', code:false},{text:'Pipes to a file', code:false},{text:'Just logs', code:false}],
              correct: 1, explanation: 'Suppresses ALL output. Common in cron jobs.' },
            { type: 'multiple-choice', prompt: 'Count files in current directory ending in .py:',
              options: [{text:'ls *.py | wc -l', code:true},{text:'ls | grep .py | wc -l', code:true},{text:'find . -name "*.py" | wc -l', code:true},{text:'All work, with different scopes', code:true}],
              correct: 3, explanation: 'All approaches work. <code>find</code> recurses; others only current dir.' },
            { type: 'fill-blank', prompt: 'Run B only if A succeeds:',
              codeLines: [{html:'A <span class="fn">_BLANK_</span> B'}],
              tokens: ['&&','||','|','&'], correctAnswer: '&&', explanation: '&& = and (short-circuit). || = or.' },
            { type: 'true-false', statement: 'A pipe (<code>|</code>) connects the stdout of one command to the stdin of the next.', correct: true, explanation: 'Foundation of Unix composability.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Text processing ============== */
    {
      id: 'lnx-u10', name: 'Unit 10 · Text Processing', description: 'grep · sed · awk · the data tools',
      lessons: [
        {
          id: 'lnx-u10-l1', name: 'grep — find text fast', icon: '🔍', xp: 20,
          challenges: [
            { type: 'concept', title: 'Pattern matching from a stream', content: `<div class="code-block">grep "error" log.txt              <span class="com"># lines containing "error"</span>
grep -i "error" log.txt           <span class="com"># case-insensitive</span>
grep -v "debug" log.txt           <span class="com"># INVERT — lines NOT matching</span>
grep -r "TODO" .                  <span class="com"># recursive</span>
grep -n "error" log.txt           <span class="com"># show line numbers</span>
grep -A 3 -B 1 "error" log.txt    <span class="com"># 3 lines after, 1 before context</span>
grep -E "warn|error" log.txt      <span class="com"># extended regex (or)</span>
grep -c "error" log.txt           <span class="com"># count matches</span>

<span class="com"># Combine in pipelines</span>
ps aux | grep python
journalctl | grep -i sshd</div>` },
            { type: 'multiple-choice', prompt: 'Recursively search the codebase for TODO comments?',
              options: [{text:'grep "TODO" .', code:true},{text:'grep -r "TODO" .', code:true},{text:'find TODO', code:true},{text:'cat TODO', code:true}],
              correct: 1, explanation: '-r = recursive into subdirs.' },
            { type: 'multiple-choice', prompt: 'Show lines that DO NOT contain "DEBUG":',
              options: [{text:'grep DEBUG file', code:false},{text:'grep -v DEBUG file', code:false},{text:'grep -n DEBUG file', code:false},{text:'grep -! DEBUG file', code:false}],
              correct: 1, explanation: '-v inverts the match.' },
            { type: 'true-false', statement: '<code>ps aux | grep python | grep -v grep</code> avoids matching the grep command itself.', correct: true, explanation: 'Classic gotcha — grep finds itself in <code>ps aux</code>. <code>-v grep</code> filters it out.' }
          ]
        },
        {
          id: 'lnx-u10-l2', name: 'sed & awk basics', icon: '🪄', xp: 25,
          challenges: [
            { type: 'concept', title: 'Transform streams', content: `<div class="code-block"><span class="com"># sed — stream editor (find/replace, often)</span>
sed \'s/foo/bar/\' file.txt           <span class="com"># first occurrence per line</span>
sed \'s/foo/bar/g\' file.txt          <span class="com"># global per line</span>
sed -i \'s/foo/bar/g\' file.txt       <span class="com"># in-place (modifies the file)</span>
sed \'/^#/d\' file.txt                <span class="com"># delete lines starting with #</span>
sed -n \'5,10p\' file.txt             <span class="com"># print lines 5-10 only</span>

<span class="com"># awk — column-oriented mini-language</span>
awk \'{print $1}\' file.txt           <span class="com"># first column</span>
awk -F, \'{print $2}\' csv.txt        <span class="com"># 2nd column, CSV</span>
awk \'$3 > 100 {print $0}\' file      <span class="com"># conditional print</span>
ps aux | awk \'{print $1, $11}\'      <span class="com"># user + command from ps</span>

<span class="com"># Other useful tools</span>
cut -d: -f1 /etc/passwd             <span class="com"># first field, : delimiter</span>
sort file.txt | uniq -c             <span class="com"># count unique lines</span>
tr \'A-Z\' \'a-z\' &lt; file.txt           <span class="com"># lowercase everything</span></div>` },
            { type: 'multiple-choice', prompt: 'Replace all "v1" with "v2" in a file, in-place:',
              options: [{text:'sed "s/v1/v2/" file', code:true},{text:'sed -i "s/v1/v2/g" file', code:true},{text:'sed -g "v1 v2" file', code:true},{text:'awk v1 v2', code:true}],
              correct: 1, explanation: '<code>-i</code> = in-place, <code>g</code> = global per line.' },
            { type: 'multiple-choice', prompt: 'Top users by process count:',
              options: [{text:'ps aux | awk \'{print $1}\' | sort | uniq -c | sort -rn | head', code:true},{text:'who', code:true},{text:'top', code:true}],
              correct: 0, explanation: 'Classic pipeline: extract field → sort → count uniques → sort by count.' },
            { type: 'true-false', statement: 'sed and awk both shine when chained in pipelines.', correct: true, explanation: 'Unix is built on small tools that compose well.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Searching ============== */
    {
      id: 'lnx-u11', name: 'Unit 11 · Searching the System', description: 'find, locate, which',
      lessons: [
        {
          id: 'lnx-u11-l1', name: 'Where is that file?', icon: '🔎', xp: 20,
          challenges: [
            { type: 'concept', title: 'find — the swiss army knife', content: `<div class="code-block">find . -name "*.log"                  <span class="com"># by name</span>
find / -name "passwd" 2&gt;/dev/null     <span class="com"># whole system, silence errors</span>
find . -type f -size +10M             <span class="com"># files bigger than 10 MB</span>
find . -type d -name "node_modules"   <span class="com"># directories</span>
find . -mtime -7                      <span class="com"># modified in last 7 days</span>
find . -name "*.tmp" -delete          <span class="com"># find + delete (DANGER)</span>
find . -name "*.txt" -exec wc -l {} \\;  <span class="com"># run a command on each</span>

<span class="com"># Faster lookups when you don\'t need real-time</span>
locate filename     <span class="com"># uses a pre-built index (sudo updatedb)</span>

<span class="com"># Where\'s the binary?</span>
which python        <span class="com"># show PATH location</span>
whereis python      <span class="com"># binary + man pages + source</span>
type cd             <span class="com"># is cd a command, builtin, alias, function?</span></div>` },
            { type: 'multiple-choice', prompt: 'Find every Python file in the current directory tree:',
              options: [{text:'find . -name "*.py"', code:true},{text:'grep -r "py"', code:true},{text:'ls *.py', code:true},{text:'find . -t .py', code:true}],
              correct: 0, explanation: '<code>find . -name "*.py"</code> walks the tree.' },
            { type: 'multiple-choice', prompt: '<code>locate</code> vs <code>find</code> tradeoff?',
              options: [{text:'No difference', code:false},{text:'locate is much faster but uses a stale index; find scans live but slower', code:false},{text:'locate is slower', code:false},{text:'find needs the index too', code:false}],
              correct: 1, explanation: 'Use locate for "I know it exists somewhere"; find for live results.' },
            { type: 'true-false', statement: '<code>find . -name "node_modules" -prune</code> can skip massive directories.', correct: true, explanation: '<code>-prune</code> stops descending — speeds up searches across repos.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Package management ============== */
    {
      id: 'lnx-u12', name: 'Unit 12 · Package Management', description: 'Install software the proper way',
      lessons: [
        {
          id: 'lnx-u12-l1', name: 'apt, yum, dnf, pacman, brew', icon: '📦', xp: 20,
          challenges: [
            { type: 'concept', title: 'Different distros, same idea', content: `<div class="code-block"><span class="com"># Debian / Ubuntu (apt)</span>
sudo apt update                  <span class="com"># refresh package lists</span>
sudo apt install nginx           <span class="com"># install</span>
sudo apt upgrade                 <span class="com"># upgrade all packages</span>
sudo apt remove nginx            <span class="com"># uninstall</span>
apt search keyword               <span class="com"># search</span>

<span class="com"># Fedora / RHEL (dnf — modern; yum on older)</span>
sudo dnf install nginx
sudo dnf update

<span class="com"># Arch (pacman)</span>
sudo pacman -Syu                 <span class="com"># sync + upgrade</span>
sudo pacman -S nginx             <span class="com"># install</span>

<span class="com"># macOS (Homebrew)</span>
brew install nginx
brew update &amp;&amp; brew upgrade

<span class="com"># Language-specific (separate ecosystem)</span>
npm install -g typescript        <span class="com"># Node</span>
pip install --user requests      <span class="com"># Python</span>
cargo install ripgrep            <span class="com"># Rust</span></div>` },
            { type: 'multiple-choice', prompt: 'On Ubuntu, update package lists then install nginx:',
              options: [{text:'sudo apt update && sudo apt install nginx', code:true},{text:'sudo nginx install', code:true},{text:'sudo brew install nginx', code:true},{text:'sudo dnf nginx', code:true}],
              correct: 0, explanation: 'apt = Debian-family. Update lists first, then install.' },
            { type: 'multiple-choice', prompt: 'apt vs apt-get?',
              options: [{text:'No difference', code:false},{text:'apt is newer, friendlier — recommended for interactive use', code:false},{text:'apt-get is faster', code:false},{text:'apt-get is for desktops only', code:false}],
              correct: 1, explanation: 'apt is a modern wrapper. Both work; apt is preferred for humans.' },
            { type: 'true-false', statement: 'You should NOT run <code>sudo pip install ...</code> — it can break your system Python. Use <code>pip install --user</code> or virtualenv.', correct: true, explanation: 'System Python is for the OS. Don\'t pollute it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Networking ============== */
    {
      id: 'lnx-u13', name: 'Unit 13 · Networking', description: 'Talk to other machines',
      lessons: [
        {
          id: 'lnx-u13-l1', name: 'ping, curl, ssh, scp', icon: '📡', xp: 25,
          challenges: [
            { type: 'concept', title: 'Daily networking', content: `<div class="code-block"><span class="com"># Can I reach it?</span>
ping google.com
ping -c 4 1.1.1.1                       <span class="com"># 4 packets and quit</span>

<span class="com"># HTTP from the command line</span>
curl https://api.example.com/users
curl -X POST -H "Content-Type: application/json" \\
     -d \'{"name":"Ana"}\' https://api.example.com/users
curl -I https://example.com              <span class="com"># headers only (HEAD)</span>
wget https://example.com/file.zip        <span class="com"># download a file</span>

<span class="com"># SSH — remote shells</span>
ssh ana@server.com
ssh -i ~/.ssh/key.pem ec2-user@1.2.3.4

<span class="com"># Copy files between machines</span>
scp file.txt ana@server.com:~/          <span class="com"># local → remote</span>
scp ana@server.com:~/data.zip ./         <span class="com"># remote → local</span>
rsync -av src/ ana@server.com:dst/      <span class="com"># efficient incremental sync</span>

<span class="com"># What\'s listening / connected?</span>
ss -tln                                 <span class="com"># open TCP listening ports</span>
ss -tunap                               <span class="com"># everything (modern replacement for netstat)</span>
lsof -i :3000                           <span class="com"># who is on port 3000?</span></div>` },
            { type: 'multiple-choice', prompt: 'SSH into a remote server as user "ana":',
              options: [{text:'ssh ana@server', code:true},{text:'login ana server', code:true},{text:'sudo ana', code:true},{text:'connect ana', code:true}],
              correct: 0, explanation: 'ssh user@host. Add -p PORT or -i KEY as needed.' },
            { type: 'multiple-choice', prompt: 'Show which process is using port 3000:',
              options: [{text:'kill 3000', code:true},{text:'lsof -i :3000 (or ss -tlnp)', code:true},{text:'ports 3000', code:true},{text:'whoport 3000', code:true}],
              correct: 1, explanation: 'lsof shows open files including network sockets.' },
            { type: 'multiple-choice', prompt: 'Best command to sync big folders between machines, only changes?',
              options: [{text:'scp -r', code:true},{text:'rsync -av', code:true},{text:'cp -r', code:true},{text:'cat | nc', code:true}],
              correct: 1, explanation: 'rsync transfers only changed blocks; scp re-sends everything.' },
            { type: 'true-false', statement: 'SSH keys (public/private) let you skip typing passwords for every login.', correct: true, explanation: 'Generate with <code>ssh-keygen</code>; copy with <code>ssh-copy-id user@host</code>.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Shell scripting ============== */
    {
      id: 'lnx-u14', name: 'Unit 14 · Shell Scripting', description: 'Automate the boring stuff',
      lessons: [
        {
          id: 'lnx-u14-l1', name: 'Variables, conditions, loops', icon: '📜', xp: 25,
          challenges: [
            { type: 'concept', title: 'A complete bash script', content: `<div class="code-block">#!/usr/bin/env bash
set -euo pipefail              <span class="com"># exit on error, undefined vars, pipe failures</span>

<span class="com"># Variables (no spaces around =)</span>
NAME=<span class="str">"Ana"</span>
COUNT=<span class="num">5</span>

<span class="com"># Use them</span>
echo <span class="str">"Hello, $NAME!"</span>
echo <span class="str">"Count is $COUNT"</span>

<span class="com"># Command substitution</span>
TODAY=$(date +%Y-%m-%d)
echo <span class="str">"Today is $TODAY"</span>

<span class="com"># If / else</span>
if [[ $COUNT -gt <span class="num">3</span> ]]; then
  echo <span class="str">"big"</span>
elif [[ $COUNT -eq <span class="num">0</span> ]]; then
  echo <span class="str">"empty"</span>
else
  echo <span class="str">"small"</span>
fi

<span class="com"># For loop over args</span>
for file in *.txt; do
  echo <span class="str">"Found: $file"</span>
done

<span class="com"># While reading lines from stdin</span>
while read -r line; do
  echo <span class="str">"Line: $line"</span>
done &lt; input.txt

<span class="com"># Functions</span>
greet() {
  echo <span class="str">"Hi, $1"</span>             <span class="com"># $1, $2... = args; $@ = all</span>
}
greet <span class="str">"Bob"</span></div>` },
            { type: 'multiple-choice', prompt: 'What does <code>set -euo pipefail</code> do?',
              options: [{text:'Nothing', code:false},{text:'Makes scripts safer: stop on error, undefined var, or pipe failure', code:false},{text:'Sets variables', code:false},{text:'Enables debug', code:false}],
              correct: 1, explanation: 'A "strict mode" for bash. Saves you from silent disasters.' },
            { type: 'multiple-choice', prompt: 'In bash, <code>$1</code> inside a function is:',
              options: [{text:'A constant', code:false},{text:'The first argument passed to the function', code:false},{text:'The script\'s first arg', code:false},{text:'Random', code:false}],
              correct: 1, explanation: '$1, $2, ... = positional arguments. $@ = all of them.' },
            { type: 'fill-blank', prompt: 'Shebang line for bash:',
              codeLines: [{html:'<span class="fn">_BLANK_</span>!/usr/bin/env bash'}],
              tokens: ['#','//','/*','--'], correctAnswer: '#', explanation: 'Shebang = #! at the top.' },
            { type: 'true-false', statement: 'Bash variables MUST have no spaces around <code>=</code>: <code>X=5</code> works, <code>X = 5</code> does not.', correct: true, explanation: 'Common trap. <code>X = 5</code> runs <code>X</code> as a command with arg "=".' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Monitoring / cron ============== */
    {
      id: 'lnx-u15', name: 'Unit 15 · Monitoring, Logs & Cron', description: 'Keeping the system happy',
      lessons: [
        {
          id: 'lnx-u15-l1', name: 'Resources, logs, schedules', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'Operational essentials', content: `<div class="code-block"><span class="com"># Resources</span>
df -h                       <span class="com"># disk usage (human-readable)</span>
du -sh /var                 <span class="com"># size of a directory</span>
free -h                     <span class="com"># memory</span>
uptime                      <span class="com"># load averages</span>
top / htop                  <span class="com"># live CPU + memory</span>

<span class="com"># Logs</span>
journalctl                  <span class="com"># systemd journal (recent first: -r)</span>
journalctl -u nginx         <span class="com"># logs for a specific service</span>
journalctl -f               <span class="com"># follow new entries</span>
tail -f /var/log/syslog     <span class="com"># classic log file (where it exists)</span>

<span class="com"># Cron — schedule recurring jobs</span>
crontab -e                  <span class="com"># edit your user crontab</span>
crontab -l                  <span class="com"># list it</span>

<span class="com"># Cron format: min hour day-of-month month day-of-week command</span>
0  2  *  *  *  /usr/local/bin/backup.sh  <span class="com"># every day at 02:00</span>
*/5 *  *  *  *  /home/ana/healthcheck.sh   <span class="com"># every 5 minutes</span>

<span class="com"># Systemd services</span>
systemctl status nginx
systemctl restart nginx
systemctl enable nginx       <span class="com"># start on boot</span></div>` },
            { type: 'multiple-choice', prompt: 'Show disk usage in human-readable form:',
              options: [{text:'df -h', code:true},{text:'du -h', code:true},{text:'free -h', code:true},{text:'mem', code:true}],
              correct: 0, explanation: 'df = filesystem free space. du = directory usage. Both have -h.' },
            { type: 'multiple-choice', prompt: '"Every 5 minutes" in cron is:',
              options: [{text:'5 * * * *', code:true},{text:'*/5 * * * *', code:true},{text:'5m * * * *', code:true},{text:'@5min', code:true}],
              correct: 1, explanation: '<code>*/5</code> means "every 5 units" in the minute field.' },
            { type: 'multiple-choice', prompt: 'Auto-start a service on boot (systemd):',
              options: [{text:'systemctl start name', code:true},{text:'systemctl enable name', code:true},{text:'systemctl on name', code:true},{text:'service name auto', code:true}],
              correct: 1, explanation: 'enable = start on boot; start = start NOW.' },
            { type: 'true-false', statement: '<code>journalctl -u nginx -f</code> follows live logs for the nginx service.', correct: true, explanation: '-u = unit, -f = follow.' }
          ]
        }
      ]
    }

  ]
});

PUSH({
  id: 'git',
  name: 'Git',
  icon: '🌿',
  color: '#f05032',
  description: 'Version control — from your first commit to advanced workflows.',
  units: [

    /* ============ UNIT 1 — What is Git? ============ */
    {
      id: 'git-u1', name: 'Unit 1 · What is Git?', description: 'Why version control matters',
      lessons: [
        {
          id: 'git-u1-l1', name: 'Meet Git', icon: '🌿', xp: 15,
          challenges: [
            { type: 'concept', title: 'Git tracks changes over time', content: `<p><strong>Git</strong> is a <em>distributed version control system</em> — it records snapshots of your project so you can rewind, branch, and collaborate without overwriting each other's work.</p>
<p>Every developer keeps a <strong>full copy</strong> of the project history on their machine. No central server is required to commit, view history, or branch.</p>
<div class="code-block"><span class="com"># Your first three commands ever</span>
git init        <span class="com"># turn this folder into a Git repo</span>
git add .       <span class="com"># stage all current files</span>
git commit -m <span class="str">"first commit"</span></div>
<p>Git was created in 2005 by Linus Torvalds for the Linux kernel. Today it powers GitHub, GitLab, Bitbucket, and basically every modern codebase.</p>` },
            { type: 'multiple-choice', prompt: 'What does the "D" in DVCS stand for?',
              options: [{text:'Direct', code:false},{text:'Distributed', code:false},{text:'Database', code:false},{text:'Diff', code:false}],
              correct: 1, explanation: 'Distributed — every clone is a full repo with complete history.' },
            { type: 'true-false', statement: 'Git requires an internet connection to commit changes.', correct: false, explanation: 'No — Git is distributed. You commit locally; pushing to a remote is a separate step.' },
            { type: 'match-pairs', prompt: 'Match the tool to what it is.', leftLabel: 'Tool', rightLabel: 'Role',
              pairs: [
                {left:'Git', right:'The version control system'},
                {left:'GitHub', right:'A hosting service for Git repos'},
                {left:'Repo', right:'A project tracked by Git'},
                {left:'Commit', right:'A saved snapshot in history'}
              ] },
            { type: 'multiple-choice', prompt: 'Who created Git?',
              options: [{text:'Guido van Rossum', code:false},{text:'Linus Torvalds', code:false},{text:'Brian Kernighan', code:false},{text:'James Gosling', code:false}],
              correct: 1, explanation: 'Linus Torvalds built Git in 2005 to manage Linux kernel development.' }
          ]
        },
        {
          id: 'git-u1-l2', name: 'Install & configure', icon: '⚙️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Tell Git who you are', content: `<p>Before your first commit, set your name and email. Git stamps every commit with these so collaborators know who did what.</p>
<div class="code-block">git config --global user.name <span class="str">"Ada Lovelace"</span>
git config --global user.email <span class="str">"ada@example.com"</span>

<span class="com"># Check it</span>
git config --list
git config user.name     <span class="com"># prints "Ada Lovelace"</span></div>
<p><strong>--global</strong> stores in <code>~/.gitconfig</code> (applies everywhere). Without it, settings apply only to the current repo.</p>` },
            { type: 'fill-blank', prompt: 'Set your global commit name:',
              codeLines: [{ html: 'git config --global user.<span class="fn">_BLANK_</span> <span class="str">"Ada Lovelace"</span>' }],
              tokens: ['name', 'username', 'author', 'email'],
              correctAnswer: 'name',
              explanation: '<code>user.name</code> is the canonical key Git records on every commit.' },
            { type: 'multiple-choice', prompt: 'Where does <code>--global</code> config live?',
              options: [{text:'In the current repo', code:false},{text:'In <code>~/.gitconfig</code> in your home directory', code:false},{text:'In <code>/etc/gitconfig</code>', code:false},{text:'In a database', code:false}],
              correct: 1, explanation: 'Global config = per-user, stored in your home directory.' },
            { type: 'tap-tokens', prompt: 'Build the command to set your global email.',
              tokens: ['git', 'config', '--global', 'user.email', '"me@x.com"', '--local', 'user.name', 'set'],
              correctOrder: ['git', 'config', '--global', 'user.email', '"me@x.com"'],
              explanation: 'Four pieces: program, sub-command, scope flag, key, value.' },
            { type: 'true-false', statement: 'You must set <code>user.email</code> before Git lets you commit.', correct: true, explanation: 'Git refuses to record a commit without an author identity (or it warns + uses a system default that you usually do not want).' }
          ]
        }
      ]
    },

    /* ============ UNIT 2 — Repositories ============ */
    {
      id: 'git-u2', name: 'Unit 2 · Repositories', description: 'init and clone',
      lessons: [
        {
          id: 'git-u2-l1', name: 'init vs clone', icon: '📦', xp: 15,
          challenges: [
            { type: 'concept', title: 'Two ways to start a repo', content: `<p>You either <strong>create</strong> a fresh repo, or you <strong>copy</strong> an existing one from elsewhere.</p>
<div class="code-block"><span class="com"># Start a brand new repo in the current folder</span>
git init

<span class="com"># Or clone an existing repo from a URL</span>
git clone https://github.com/torvalds/linux.git
git clone git@github.com:torvalds/linux.git    <span class="com"># SSH</span></div>
<p>Both create a hidden <code>.git/</code> directory — that's where Git stores all history, objects, branches, and config. Delete that folder and you delete the repo (but the working files stay).</p>` },
            { type: 'multiple-choice', prompt: 'Which command would you use to start tracking a folder that already contains your code?',
              options: [
                { text: 'git clone', code: true },
                { text: 'git init', code: true },
                { text: 'git start', code: true },
                { text: 'git new', code: true }
              ],
              correct: 1, explanation: '<code>git init</code> turns the current directory into a repo. <code>clone</code> is for downloading an existing remote repo.' },
            { type: 'multiple-choice', prompt: 'What does <code>git clone &lt;url&gt;</code> do?',
              options: [
                { text: 'Creates a fresh empty repo', code: false },
                { text: 'Downloads the repo + sets origin remote + checks out default branch', code: false },
                { text: 'Pushes your code to the URL', code: false },
                { text: 'Verifies the remote exists', code: false }
              ],
              correct: 1, explanation: 'Clone downloads all history, configures the remote as <code>origin</code>, and checks out the default branch.' },
            { type: 'true-false', statement: 'Deleting the hidden <code>.git/</code> folder removes Git tracking but leaves your files intact.', correct: true, explanation: 'Your code stays — Git just stops tracking it.' },
            { type: 'type-answer', prompt: 'What is the name of the hidden folder Git creates inside every repo?',
              accept: ['.git', '.git/', '.git folder'],
              explanation: 'Everything Git knows about your project lives in <code>.git/</code>.' }
          ]
        }
      ]
    },

    /* ============ UNIT 3 — Staging & commits ============ */
    {
      id: 'git-u3', name: 'Unit 3 · Staging & commits', description: 'add, commit, status, diff',
      lessons: [
        {
          id: 'git-u3-l1', name: 'Your first commit', icon: '✍️', xp: 20,
          challenges: [
            { type: 'concept', title: 'add → commit', content: `<p>A commit is a snapshot. To make one you (1) <strong>stage</strong> the files you want included with <code>git add</code>, then (2) record the snapshot with <code>git commit</code>.</p>
<div class="code-block"><span class="com"># See what changed</span>
git status

<span class="com"># Stage a specific file (or "." for everything)</span>
git add README.md
git add .

<span class="com"># Snapshot it with a message</span>
git commit -m <span class="str">"Add README"</span>

<span class="com"># Shortcut: stage all tracked changes AND commit in one step</span>
git commit -am <span class="str">"Fix typo"</span></div>
<p><strong>Untracked</strong> files (new ones Git has never seen) are NOT included by <code>-a</code> — you must <code>git add</code> them first.</p>` },
            { type: 'multiple-choice', prompt: 'Which command stages every changed file in the current directory?',
              options: [
                { text: 'git stage all', code: true },
                { text: 'git add .', code: true },
                { text: 'git commit -A', code: true },
                { text: 'git push', code: true }
              ],
              correct: 1, explanation: '<code>git add .</code> stages everything in the current dir (and subdirs).' },
            { type: 'reorder-code', prompt: 'Put these in the order you would run them to save a new file:',
              lines: [
                'echo <span class="str">"hi"</span> &gt; notes.txt',
                'git add notes.txt',
                'git commit -m <span class="str">"Add notes"</span>'
              ],
              correctOrder: [0, 1, 2] },
            { type: 'tap-tokens', prompt: 'Build a commit command with an inline message.',
              tokens: ['git', 'commit', '-m', '"Fix bug"', 'add', '-a', 'push', '--all'],
              correctOrder: ['git', 'commit', '-m', '"Fix bug"'],
              explanation: '<code>-m</code> + a quoted message is the standard inline form.' },
            { type: 'true-false', statement: '<code>git commit -a</code> stages and commits untracked files Git has never seen.', correct: false, explanation: '<code>-a</code> only includes files Git already tracks. New files must be <code>git add</code>-ed first.' },
            { type: 'fill-blank', prompt: 'Show the working tree status:',
              codeLines: [{ html: 'git <span class="fn">_BLANK_</span>' }],
              tokens: ['status', 'log', 'diff', 'show'],
              correctAnswer: 'status',
              explanation: '<code>git status</code> lists tracked changes, staged files, and untracked files.' }
          ]
        },
        {
          id: 'git-u3-l2', name: 'diff & inspect', icon: '🔎', xp: 20,
          challenges: [
            { type: 'concept', title: 'See what changed before you commit', content: `<p><code>git diff</code> shows line-level changes. By default it shows <em>unstaged</em> changes (working dir vs staging area).</p>
<div class="code-block">git diff             <span class="com"># working dir vs staging</span>
git diff --staged    <span class="com"># staging vs last commit (use before pushing)</span>
git diff HEAD        <span class="com"># working dir vs last commit (both)</span>
git diff main feat   <span class="com"># compare two branches</span></div>
<p>Reading a diff: lines starting with <code>-</code> were removed, lines starting with <code>+</code> were added.</p>` },
            { type: 'multiple-choice', prompt: 'You staged some files. Which command shows what is about to be committed?',
              options: [
                { text: 'git diff', code: true },
                { text: 'git diff --staged', code: true },
                { text: 'git status --porcelain', code: true },
                { text: 'git log -p', code: true }
              ],
              correct: 1, explanation: 'Plain <code>git diff</code> shows UNSTAGED changes. Use <code>--staged</code> (or <code>--cached</code>) for what is about to be committed.' },
            { type: 'output-predict', prompt: 'In a diff hunk, what does this line indicate?',
              code: `<span class="com">- int x = 5;</span>
<span class="com">+ int x = 10;</span>`,
              options: [
                'A new line was added with no removal',
                'Line "int x = 5;" was removed and "int x = 10;" was added',
                'Both lines exist in the file',
                'A merge conflict marker'
              ],
              correct: 1, explanation: 'A leading <code>-</code> means removed; leading <code>+</code> means added. Together they show a modification.' },
            { type: 'true-false', statement: '<code>git diff</code> with no arguments shows the difference between your working directory and the staging area.', correct: true, explanation: 'Default behavior: working dir vs index.' }
          ]
        }
      ]
    },

    /* ============ UNIT 4 — Three areas ============ */
    {
      id: 'git-u4', name: 'Unit 4 · The three areas', description: 'Working dir · Staging · Repo',
      lessons: [
        {
          id: 'git-u4-l1', name: 'Working dir → Staging → Repo', icon: '🧭', xp: 20,
          challenges: [
            { type: 'concept', title: 'Three places a file can live', content: `<p>Every file Git knows about lives in one (or more) of three areas:</p>
<div class="code-block">┌─────────────────┐   git add    ┌──────────────┐  git commit  ┌──────────────┐
│  Working Dir    │  ──────────&gt;  │  Staging     │  ──────────&gt;  │  Repository  │
│ (your edits)    │              │  (index)      │              │ (.git, history)│
└─────────────────┘   git restore └──────────────┘  git reset   └──────────────┘
                     &lt;──────────                  &lt;──────────</div>
<p><strong>Working directory</strong> — actual files on disk. <strong>Staging area (index)</strong> — list of changes queued for the next commit. <strong>Repository</strong> — committed history in <code>.git/</code>.</p>
<p>This is why you stage <em>before</em> commit — staging lets you craft exactly what goes into the snapshot.</p>` },
            { type: 'match-pairs', prompt: 'Match command → moves changes between which areas?', leftLabel: 'Command', rightLabel: 'Effect',
              pairs: [
                { left: 'git add',     right: 'Working → Staging' },
                { left: 'git commit',  right: 'Staging → Repository' },
                { left: 'git restore --staged', right: 'Staging → Working' },
                { left: 'git checkout (file)',  right: 'Repo → Working (overwrite)' }
              ] },
            { type: 'multiple-choice', prompt: 'Why have a staging area at all? Why not commit directly?',
              options: [
                { text: 'Speed — staging is faster than committing', code: false },
                { text: 'It lets you craft a commit out of a subset of your changes', code: false },
                { text: 'Required by the file system', code: false },
                { text: 'For backup purposes', code: false }
              ],
              correct: 1, explanation: 'The index is what makes partial commits possible — stage only the changes that belong together, even from the same file.' },
            { type: 'true-false', statement: 'A file can be both modified in the working directory AND have an older version staged at the same time.', correct: true, explanation: 'You staged a snapshot, then kept editing. <code>git diff</code> shows working-vs-staged; <code>git diff --staged</code> shows staged-vs-HEAD.' }
          ]
        }
      ]
    },

    /* ============ UNIT 5 — History ============ */
    {
      id: 'git-u5', name: 'Unit 5 · History', description: 'log, show, blame',
      lessons: [
        {
          id: 'git-u5-l1', name: 'Reading history', icon: '📜', xp: 20,
          challenges: [
            { type: 'concept', title: 'log, show, blame', content: `<div class="code-block"><span class="com"># Commit list (most recent first)</span>
git log
git log --oneline           <span class="com"># compact, one line each</span>
git log --graph --all       <span class="com"># ASCII branch graph</span>
git log -n 5                <span class="com"># last 5 commits</span>
git log --author=<span class="str">"Ada"</span>      <span class="com"># filter by author</span>

<span class="com"># Inspect a specific commit (diff + meta)</span>
git show abc123

<span class="com"># Who last changed each line of a file?</span>
git blame README.md</div>
<p>Every commit has a 40-character SHA-1 hash. You can use the first 7+ characters as a short ID anywhere a commit is expected.</p>` },
            { type: 'multiple-choice', prompt: 'Which command shows one line per commit?',
              options: [
                { text: 'git log --short', code: true },
                { text: 'git log --oneline', code: true },
                { text: 'git log -1', code: true },
                { text: 'git log --brief', code: true }
              ],
              correct: 1, explanation: '<code>--oneline</code> = abbreviated hash + subject, one per line.' },
            { type: 'multiple-choice', prompt: 'What does <code>git blame &lt;file&gt;</code> show?',
              options: [
                { text: 'Files containing bugs', code: false },
                { text: 'Who last modified each line and in which commit', code: false },
                { text: 'The diff of the file', code: false },
                { text: 'A list of branches touching the file', code: false }
              ],
              correct: 1, explanation: 'Annotates every line with its last-touching commit + author + date.' },
            { type: 'type-answer', prompt: 'How long (in characters) is a full Git commit SHA-1 hash?',
              accept: ['40', 'forty'],
              explanation: 'Git uses SHA-1 (40 hex chars). You can usually abbreviate to 7+.' },
            { type: 'tap-tokens', prompt: 'Build the command to view a pretty branch graph.',
              tokens: ['git', 'log', '--graph', '--oneline', '--all', 'show', 'tree'],
              correctOrder: ['git', 'log', '--graph', '--oneline', '--all'],
              explanation: 'The classic "look at all branches" one-liner.' }
          ]
        }
      ]
    },

    /* ============ UNIT 6 — Branches ============ */
    {
      id: 'git-u6', name: 'Unit 6 · Branches', description: 'branch, checkout, switch',
      lessons: [
        {
          id: 'git-u6-l1', name: 'Branching basics', icon: '🌳', xp: 20,
          challenges: [
            { type: 'concept', title: 'Branches are cheap pointers', content: `<p>A <strong>branch</strong> is just a movable pointer to a commit. Creating one is instant — no file copying, no overhead.</p>
<div class="code-block"><span class="com"># List branches (* marks current)</span>
git branch

<span class="com"># Create a new branch (does NOT switch to it)</span>
git branch feature/login

<span class="com"># Switch to it (modern command)</span>
git switch feature/login

<span class="com"># Create + switch in one step</span>
git switch -c feature/login
git checkout -b feature/login   <span class="com"># older equivalent</span>

<span class="com"># Delete a (merged) branch</span>
git branch -d old-feature
git branch -D old-feature       <span class="com"># force delete unmerged</span></div>
<p>Modern Git prefers <code>git switch</code> for changing branches and <code>git restore</code> for files. The older <code>git checkout</code> does both jobs (and more), which made it confusing.</p>` },
            { type: 'multiple-choice', prompt: 'Which command creates a new branch AND switches to it?',
              options: [
                { text: 'git branch feat', code: true },
                { text: 'git switch -c feat', code: true },
                { text: 'git checkout feat', code: true },
                { text: 'git new feat', code: true }
              ],
              correct: 1, explanation: '<code>-c</code> means "create". Equivalent legacy form is <code>git checkout -b feat</code>.' },
            { type: 'true-false', statement: 'Creating a branch in Git copies all the project files to a new folder.', correct: false, explanation: 'No — branches are tiny pointers. Creation is O(1) and uses almost zero disk.' },
            { type: 'fill-blank', prompt: 'Switch to a branch named <code>main</code> using the modern command:',
              codeLines: [{ html: 'git <span class="fn">_BLANK_</span> main' }],
              tokens: ['switch', 'checkout', 'goto', 'use'],
              correctAnswer: 'switch',
              explanation: '<code>git switch</code> is the modern, dedicated command for branch changes.' },
            { type: 'match-pairs', prompt: 'Match command → effect.', leftLabel: 'Command', rightLabel: 'Effect',
              pairs: [
                { left: 'git branch', right: 'List branches' },
                { left: 'git branch feat', right: 'Create branch (no switch)' },
                { left: 'git branch -d feat', right: 'Delete (only if merged)' },
                { left: 'git branch -m new-name', right: 'Rename current branch' }
              ] },
            { type: 'multiple-choice', prompt: 'What does <code>HEAD</code> refer to?',
              options: [
                { text: 'The first commit in the repo', code: false },
                { text: 'The latest commit on the currently checked-out branch', code: false },
                { text: 'The remote tracking branch', code: false },
                { text: 'The largest file', code: false }
              ],
              correct: 1, explanation: '<code>HEAD</code> is a pointer to the current branch tip (where new commits will land).' }
          ]
        }
      ]
    },

    /* ============ UNIT 7 — Merging ============ */
    {
      id: 'git-u7', name: 'Unit 7 · Merging', description: 'Fast-forward, merge commits, conflicts',
      lessons: [
        {
          id: 'git-u7-l1', name: 'Merging branches', icon: '🔀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Bringing changes together', content: `<p>You finished work on <code>feature</code> and want it on <code>main</code>. Switch to the destination, then merge.</p>
<div class="code-block">git switch main
git merge feature</div>
<p>Two outcomes:</p>
<ul>
  <li><strong>Fast-forward</strong> — if <code>main</code> hasn't moved since you branched, Git just slides the pointer forward. No new commit.</li>
  <li><strong>Three-way merge</strong> — if both branches moved, Git creates a new <em>merge commit</em> combining the two histories.</li>
</ul>
<div class="code-block"><span class="com"># Refuse fast-forward — always create a merge commit</span>
git merge --no-ff feature

<span class="com"># Allow ONLY fast-forward (fails otherwise)</span>
git merge --ff-only feature

<span class="com"># Abort an in-progress merge (e.g., during conflicts)</span>
git merge --abort</div>` },
            { type: 'multiple-choice', prompt: 'A fast-forward merge happens when:',
              options: [
                { text: 'The two branches have diverged', code: false },
                { text: 'The target branch has no new commits since the feature branched off', code: false },
                { text: 'There are conflicts', code: false },
                { text: 'You use --no-ff', code: false }
              ],
              correct: 1, explanation: 'No divergence → Git just moves the pointer. No merge commit is created.' },
            { type: 'true-false', statement: '<code>git merge --no-ff</code> creates a merge commit even when a fast-forward is possible.', correct: true, explanation: 'Useful for preserving the "this was a feature branch" history.' },
            { type: 'reorder-code', prompt: 'Steps to merge <code>feature</code> into <code>main</code>:',
              lines: [
                'git switch main',
                'git pull',
                'git merge feature',
                'git push'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'multiple-choice', prompt: 'You ran <code>git merge feature</code> and got conflicts. What does Git want you to do?',
              options: [
                { text: 'Run <code>git merge</code> again', code: false },
                { text: 'Edit the conflicting files, <code>git add</code> them, then <code>git commit</code>', code: false },
                { text: 'Delete the branch', code: false },
                { text: 'Reboot', code: false }
              ],
              correct: 1, explanation: 'Resolve markers, stage the resolution, commit to complete the merge. Or <code>git merge --abort</code> to bail.' }
          ]
        },
        {
          id: 'git-u7-l2', name: 'Conflicts', icon: '⚔️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Conflict markers explained', content: `<p>When Git can't auto-merge two changes to the same lines, it writes both into the file with markers and asks you to choose.</p>
<div class="code-block">function greet() {
<span class="kw">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
  console.log(<span class="str">"Hello!"</span>);
<span class="kw">=======</span>
  console.log(<span class="str">"Hi there!"</span>);
<span class="kw">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</span>
}</div>
<p>Edit the file to whatever the resolution should be (keep one side, keep both, or write something new), remove ALL the marker lines, then:</p>
<div class="code-block">git add greet.js
git commit                <span class="com"># Git pre-fills a merge message</span></div>
<p>Useful tools: <code>git diff</code> (shows conflict regions), <code>git status</code> (lists "Unmerged paths"), <code>git mergetool</code> (opens a 3-way GUI).</p>` },
            { type: 'output-predict', prompt: 'In a conflict, what is between <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> and <code>=======</code>?',
              code: '<<<<<<< HEAD\n   YOUR side\n=======\n   THEIR side\n>>>>>>> feature',
              options: [
                'The version from the other branch',
                'The version from your current branch (HEAD)',
                'A backup',
                "Git's suggested merge"
              ],
              correct: 1, explanation: 'Top half = current branch (HEAD). Bottom half (between <code>=======</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>) = incoming branch.' },
            { type: 'true-false', statement: 'After resolving conflicts, you must <code>git add</code> the resolved files before completing the merge.', correct: true, explanation: 'Staging tells Git "this conflict is resolved". Then <code>git commit</code> finalizes.' },
            { type: 'type-answer', prompt: 'What command throws away an in-progress merge and restores the pre-merge state?',
              accept: ['git merge --abort', 'merge --abort', '--abort'],
              explanation: '<code>git merge --abort</code> resets to the state before <code>git merge</code> was run.' }
          ]
        }
      ]
    },

    /* ============ UNIT 8 — Rebase ============ */
    {
      id: 'git-u8', name: 'Unit 8 · Rebase', description: 'Replay commits on a new base',
      lessons: [
        {
          id: 'git-u8-l1', name: 'Rebase vs merge', icon: '♻️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Rebase rewrites; merge preserves', content: `<p><strong>Merge</strong> joins two histories with a merge commit — both lines remain visible. <strong>Rebase</strong> picks up your commits and replays them on top of the target, producing a straight line of history.</p>
<div class="code-block"><span class="com"># Move feature's commits to sit on top of latest main</span>
git switch feature
git rebase main

<span class="com"># Interactive: reorder, squash, edit commits</span>
git rebase -i main
git rebase -i HEAD~5      <span class="com"># last 5 commits</span>

<span class="com"># Abort if it gets messy</span>
git rebase --abort
<span class="com"># Or after fixing conflicts:</span>
git rebase --continue</div>
<p><strong>Golden rule:</strong> never rebase commits you have already shared with others. Rebase rewrites history, and rewriting public history breaks everyone else's clones.</p>` },
            { type: 'multiple-choice', prompt: 'What is the main visual difference between merge and rebase?',
              options: [
                { text: 'Merge produces a linear history; rebase produces a branching one', code: false },
                { text: 'Rebase produces a linear history; merge preserves the branch structure', code: false },
                { text: 'They produce identical histories', code: false },
                { text: 'Rebase is faster but no different in result', code: false }
              ],
              correct: 1, explanation: 'Rebase = straight line. Merge = visible branch + merge commit.' },
            { type: 'true-false', statement: 'It is safe to rebase commits you have already pushed and others may have pulled.', correct: false, explanation: 'No — rebase rewrites SHAs. Others now have orphaned copies of "the same" commits. Only rebase local, unpublished work.' },
            { type: 'match-pairs', prompt: 'Interactive rebase actions:', leftLabel: 'Command', rightLabel: 'Meaning',
              pairs: [
                { left: 'pick',   right: 'Use the commit as-is' },
                { left: 'reword', right: 'Use commit, but edit its message' },
                { left: 'squash', right: 'Combine with previous commit' },
                { left: 'drop',   right: 'Discard the commit entirely' }
              ] },
            { type: 'fill-blank', prompt: 'Resume an in-progress rebase after fixing a conflict:',
              codeLines: [{ html: 'git rebase --<span class="fn">_BLANK_</span>' }],
              tokens: ['continue', 'resume', 'next', 'commit'],
              correctAnswer: 'continue',
              explanation: '<code>git rebase --continue</code> tells Git to apply the next commit in the queue.' },
            { type: 'tap-tokens', prompt: 'Build the command for interactive rebase of the last 3 commits.',
              tokens: ['git', 'rebase', '-i', 'HEAD~3', 'merge', '--squash', '-3'],
              correctOrder: ['git', 'rebase', '-i', 'HEAD~3'],
              explanation: '<code>HEAD~3</code> = three commits back. <code>-i</code> opens the editor.' }
          ]
        }
      ]
    },

    /* ============ UNIT 9 — Remotes ============ */
    {
      id: 'git-u9', name: 'Unit 9 · Remotes', description: 'fetch, pull, push',
      lessons: [
        {
          id: 'git-u9-l1', name: 'Working with remotes', icon: '☁️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Sync local ↔ remote', content: `<p>A <strong>remote</strong> is a named pointer to another copy of the repo — usually on a server like GitHub. When you <code>git clone</code>, Git automatically names the source remote <strong>origin</strong>.</p>
<div class="code-block"><span class="com"># List + manage remotes</span>
git remote -v
git remote add origin git@github.com:you/repo.git
git remote rename origin upstream
git remote remove origin

<span class="com"># Download remote refs but DON'T merge</span>
git fetch
git fetch origin main

<span class="com"># Fetch + merge into current branch in one go</span>
git pull
git pull --rebase     <span class="com"># prefer rebase over merge</span>

<span class="com"># Send local commits to the remote</span>
git push origin main
git push -u origin feature   <span class="com"># set upstream first time</span></div>` },
            { type: 'multiple-choice', prompt: '<code>git fetch</code> differs from <code>git pull</code> because fetch:',
              options: [
                { text: 'Is faster', code: false },
                { text: 'Downloads remote changes WITHOUT merging into your branch', code: false },
                { text: 'Pushes to the remote', code: false },
                { text: 'Deletes local branches', code: false }
              ],
              correct: 1, explanation: 'Pull = fetch + merge (or fetch + rebase). Fetch alone is non-destructive.' },
            { type: 'multiple-choice', prompt: 'What is "origin"?',
              options: [
                { text: 'The first commit of the repo', code: false },
                { text: 'The default name Git gives the remote you cloned from', code: false },
                { text: 'A special protected branch', code: false },
                { text: 'A Git command', code: false }
              ],
              correct: 1, explanation: 'Just a default alias. You can rename it (<code>git remote rename origin upstream</code>).' },
            { type: 'true-false', statement: '<code>git push -u origin feature</code> sets up <code>feature</code> to track the remote branch so future pushes/pulls need no arguments.', correct: true, explanation: '<code>-u</code> (or <code>--set-upstream</code>) wires the local branch to its remote counterpart.' },
            { type: 'output-predict', prompt: 'You run <code>git remote -v</code> in a freshly cloned repo. What do you typically see?',
              code: 'git remote -v',
              options: [
                'No output (no remotes)',
                'Two lines: origin ... (fetch) and origin ... (push)',
                'A list of all branches',
                'An error'
              ],
              correct: 1, explanation: 'Cloning creates <code>origin</code> with the URL listed twice — for fetch and for push.' },
            { type: 'tap-tokens', prompt: 'Push the local <code>main</code> branch to <code>origin</code> for the first time.',
              tokens: ['git', 'push', '-u', 'origin', 'main', 'pull', '-f', '--all'],
              correctOrder: ['git', 'push', '-u', 'origin', 'main'],
              explanation: '<code>-u</code> sets upstream so later <code>git push</code> needs no arguments.' }
          ]
        }
      ]
    },

    /* ============ UNIT 10 — GitHub workflow ============ */
    {
      id: 'git-u10', name: 'Unit 10 · GitHub workflow', description: 'PRs, forks, upstream',
      lessons: [
        {
          id: 'git-u10-l1', name: 'Pull requests & forks', icon: '🐙', xp: 20,
          challenges: [
            { type: 'concept', title: 'How team collaboration actually works', content: `<p>You don't push directly to <code>main</code> on a team. Instead:</p>
<ol>
  <li>Create a branch (<code>feature/login</code>)</li>
  <li>Commit your work locally</li>
  <li>Push the branch to the remote</li>
  <li>Open a <strong>Pull Request (PR)</strong> on GitHub/GitLab</li>
  <li>Get review + CI passing</li>
  <li>Merge the PR — your changes land on <code>main</code></li>
</ol>
<p><strong>Forking</strong> is for contributing to repos you don't have write access to (open-source). You fork → clone your fork → push to your fork → open a PR from your fork to the original.</p>
<div class="code-block"><span class="com"># Typical fork workflow</span>
git clone git@github.com:you/their-repo.git
git remote add upstream git@github.com:them/their-repo.git
git fetch upstream
git switch -c fix-bug
<span class="com"># ...work...</span>
git push origin fix-bug
<span class="com"># Then open PR on GitHub</span></div>` },
            { type: 'multiple-choice', prompt: 'A Pull Request is:',
              options: [
                { text: 'A Git command that pulls remote changes', code: false },
                { text: 'A code-review workflow built on top of Git by hosting platforms', code: false },
                { text: 'A type of merge conflict', code: false },
                { text: 'A way to revert commits', code: false }
              ],
              correct: 1, explanation: 'PRs are a platform feature (GitHub/GitLab/Bitbucket) — not part of core Git. They wrap a branch in review + merge UI.' },
            { type: 'true-false', statement: 'When you fork a repo, you get a copy under your own account that you can freely push to.', correct: true, explanation: 'Forking creates a server-side clone you fully own. You then PR back to the original ("upstream").' },
            { type: 'match-pairs', prompt: 'Match the remote convention:', leftLabel: 'Remote name', rightLabel: 'Usually points to',
              pairs: [
                { left: 'origin', right: 'Your fork (your account on GitHub)' },
                { left: 'upstream', right: 'The original repo you forked from' },
                { left: 'fork', right: 'Sometimes used for additional forks' },
                { left: 'heroku', right: 'A deployment target' }
              ] },
            { type: 'multiple-choice', prompt: 'You want to bring the latest changes from the original repo into your fork. What is the typical command sequence?',
              options: [
                { text: 'git pull origin', code: true },
                { text: 'git fetch upstream then git merge upstream/main', code: true },
                { text: 'git clone upstream', code: true },
                { text: 'git rebase origin', code: true }
              ],
              correct: 1, explanation: 'Fetch from <code>upstream</code> (the original), then merge or rebase its <code>main</code> into your local <code>main</code>.' }
          ]
        }
      ]
    },

    /* ============ UNIT 11 — Undoing ============ */
    {
      id: 'git-u11', name: 'Unit 11 · Undoing changes', description: 'reset, revert, restore, checkout',
      lessons: [
        {
          id: 'git-u11-l1', name: 'Undo, safely', icon: '↩️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick the right undo tool', content: `<div class="code-block"><span class="com"># Discard unstaged changes to a file (DESTROYS edits)</span>
git restore file.txt
git checkout -- file.txt              <span class="com"># older form</span>

<span class="com"># Unstage a file (keeps your edits)</span>
git restore --staged file.txt
git reset HEAD file.txt               <span class="com"># older form</span>

<span class="com"># Amend the last commit (message or content)</span>
git commit --amend
git commit --amend -m <span class="str">"new message"</span>

<span class="com"># Move HEAD backward (keep changes / wipe them)</span>
git reset --soft  HEAD~1   <span class="com"># keep changes staged</span>
git reset --mixed HEAD~1   <span class="com"># keep changes unstaged (default)</span>
git reset --hard  HEAD~1   <span class="com"># DESTROY changes</span>

<span class="com"># Create a NEW commit that undoes an old one (safe for shared history)</span>
git revert abc123</div>` },
            { type: 'multiple-choice', prompt: 'Which command creates a NEW commit that reverses a previous one without rewriting history?',
              options: [
                { text: 'git reset', code: true },
                { text: 'git revert', code: true },
                { text: 'git undo', code: true },
                { text: 'git rm', code: true }
              ],
              correct: 1, explanation: '<code>git revert</code> is the safe choice for already-pushed commits — it makes a new commit, doesn\'t rewrite history.' },
            { type: 'multiple-choice', prompt: 'You ran <code>git reset --hard HEAD~1</code> with uncommitted changes. What happened?',
              options: [
                { text: 'Changes were stashed', code: false },
                { text: 'The last commit was removed AND your uncommitted changes are gone forever', code: false },
                { text: 'Nothing — reset needs --force', code: false },
                { text: 'Git asked for confirmation', code: false }
              ],
              correct: 1, explanation: '<code>--hard</code> wipes both staging AND working dir. If the changes were never committed, they may be unrecoverable.' },
            { type: 'true-false', statement: '<code>git revert</code> rewrites history, so you should avoid it on shared branches.', correct: false, explanation: 'Opposite — <code>git revert</code> is SAFE on shared history. It adds a new commit. <code>git reset</code> is the dangerous one for shared branches.' },
            { type: 'match-pairs', prompt: 'Match <code>git reset</code> flag → effect on working dir:', leftLabel: 'Flag', rightLabel: 'Working dir / staging',
              pairs: [
                { left: '--soft',  right: 'Staged changes kept' },
                { left: '--mixed', right: 'Unstaged but kept (default)' },
                { left: '--hard',  right: 'Wiped completely' },
                { left: '--keep',  right: 'Refuse if changes would be lost' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the command to amend the last commit\'s message.',
              tokens: ['git', 'commit', '--amend', '-m', '"new msg"', 'revert', '--soft', '-am'],
              correctOrder: ['git', 'commit', '--amend', '-m', '"new msg"'],
              explanation: '<code>--amend</code> replaces the last commit. With <code>-m</code> it also rewrites the message.' }
          ]
        }
      ]
    },

    /* ============ UNIT 12 — Stash, tags, cherry-pick ============ */
    {
      id: 'git-u12', name: 'Unit 12 · Stash, tags, cherry-pick', description: 'Useful side tools',
      lessons: [
        {
          id: 'git-u12-l1', name: 'Stash & tags', icon: '🏷️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Stash, tag, cherry-pick', content: `<div class="code-block"><span class="com"># Save unfinished work and clean your working dir</span>
git stash
git stash push -m <span class="str">"WIP login form"</span>
git stash list           <span class="com"># show stashes</span>
git stash pop            <span class="com"># reapply + remove top stash</span>
git stash apply stash@{1}<span class="com"># reapply specific without removing</span>
git stash drop stash@{0}

<span class="com"># Tag a release</span>
git tag v1.0.0                  <span class="com"># lightweight</span>
git tag -a v1.0.0 -m <span class="str">"Release"</span>  <span class="com"># annotated (preferred)</span>
git push origin v1.0.0          <span class="com"># push the tag</span>
git push --tags                 <span class="com"># push all tags</span>

<span class="com"># Apply a specific commit from another branch</span>
git cherry-pick abc123
git cherry-pick a1..a5          <span class="com"># range</span></div>` },
            { type: 'multiple-choice', prompt: 'You\'re in the middle of a feature when a critical bug needs fixing on <code>main</code>. What is the cleanest move?',
              options: [
                { text: 'Commit half-done code', code: false },
                { text: 'git stash, switch to main, fix, then come back and git stash pop', code: false },
                { text: 'git reset --hard', code: false },
                { text: 'Open a separate clone', code: false }
              ],
              correct: 1, explanation: 'Stash is exactly for "save my WIP, do something else, come back".' },
            { type: 'true-false', statement: 'A Git <strong>tag</strong> is just a movable pointer like a branch — it advances with new commits.', correct: false, explanation: 'Tags are FIXED pointers to a specific commit. Branches move with each new commit; tags don\'t.' },
            { type: 'fill-blank', prompt: 'Reapply the most recent stash and remove it:',
              codeLines: [{ html: 'git stash <span class="fn">_BLANK_</span>' }],
              tokens: ['pop', 'apply', 'use', 'show'],
              correctAnswer: 'pop',
              explanation: '<code>pop</code> = apply + drop. <code>apply</code> reapplies but leaves it in the stash list.' },
            { type: 'multiple-choice', prompt: '<code>git cherry-pick abc123</code> does what?',
              options: [
                { text: 'Reverts commit abc123', code: false },
                { text: 'Copies commit abc123 onto the current branch as a new commit', code: false },
                { text: 'Deletes commit abc123', code: false },
                { text: 'Moves commit abc123 to a new branch', code: false }
              ],
              correct: 1, explanation: 'Cherry-pick replays a single commit on your branch — useful for backporting fixes.' },
            { type: 'output-predict', prompt: 'What happens after this sequence?',
              code: `git stash
git switch main
git pull
git switch feature
git stash pop`,
              options: [
                'Loses uncommitted work',
                'Saves WIP on feature, updates main, returns, restores WIP',
                'Creates a merge conflict on purpose',
                'Pushes the stash to origin'
              ],
              correct: 1, explanation: 'Classic "set work aside, do something else, return" pattern.' }
          ]
        }
      ]
    },

    /* ============ UNIT 13 — .gitignore & hooks ============ */
    {
      id: 'git-u13', name: 'Unit 13 · ignore, attributes, hooks', description: 'Project-level customization',
      lessons: [
        {
          id: 'git-u13-l1', name: '.gitignore essentials', icon: '🙈', xp: 20,
          challenges: [
            { type: 'concept', title: 'Keep junk out of your repo', content: `<p>The <code>.gitignore</code> file lists patterns Git should never track. One pattern per line.</p>
<div class="code-block"><span class="com"># build artifacts</span>
node_modules/
dist/
target/
*.class

<span class="com"># OS / editor noise</span>
.DS_Store
.idea/
*.swp

<span class="com"># secrets</span>
.env
*.pem

<span class="com"># negate a pattern (do NOT ignore)</span>
!important.env</div>
<p><strong>Caveat:</strong> <code>.gitignore</code> only stops <em>untracked</em> files from being added. If you committed a file once, you have to untrack it explicitly:</p>
<div class="code-block">git rm --cached secrets.env
echo <span class="str">"secrets.env"</span> &gt;&gt; .gitignore
git commit -m <span class="str">"Stop tracking secrets.env"</span></div>` },
            { type: 'multiple-choice', prompt: 'You added a pattern to <code>.gitignore</code> but the file is still tracked. Why?',
              options: [
                { text: 'gitignore takes 24 hours to apply', code: false },
                { text: 'gitignore only affects UNTRACKED files. Already-tracked files need <code>git rm --cached</code>', code: false },
                { text: 'You need to restart Git', code: false },
                { text: 'gitignore syntax must use !', code: false }
              ],
              correct: 1, explanation: 'gitignore is for new files. Existing tracked files keep being tracked until you remove them from the index.' },
            { type: 'true-false', statement: 'A pattern starting with <code>!</code> in .gitignore <em>negates</em> a previous ignore rule.', correct: true, explanation: 'Use it to whitelist a specific file inside an ignored directory.' },
            { type: 'match-pairs', prompt: 'Match the file → what it controls:', leftLabel: 'File', rightLabel: 'Controls',
              pairs: [
                { left: '.gitignore',    right: 'Which files Git ignores' },
                { left: '.gitattributes', right: 'Line endings, diff/merge drivers, binary marking' },
                { left: '.git/hooks/',    right: 'Scripts run at lifecycle events' },
                { left: '.git/config',    right: 'Repo-local config' }
              ] },
            { type: 'multiple-choice', prompt: 'Where do Git hooks live by default?',
              options: [
                { text: '.git/hooks/', code: true },
                { text: '~/.githooks/', code: true },
                { text: '.github/workflows/', code: true },
                { text: '/etc/git/hooks/', code: true }
              ],
              correct: 0, explanation: 'Each repo has <code>.git/hooks/</code> with sample scripts. Rename a file from <code>pre-commit.sample</code> to <code>pre-commit</code> and make it executable.' },
            { type: 'fill-blank', prompt: 'Stop tracking a committed file without deleting it from disk:',
              codeLines: [{ html: 'git rm --<span class="fn">_BLANK_</span> secrets.env' }],
              tokens: ['cached', 'untrack', 'ignore', 'remove'],
              correctAnswer: 'cached',
              explanation: '<code>--cached</code> removes from the index only — leaves the file on your filesystem.' }
          ]
        }
      ]
    },

    /* ============ UNIT 14 — Best practices ============ */
    {
      id: 'git-u14', name: 'Unit 14 · Best practices', description: 'Commit messages & branching strategies',
      lessons: [
        {
          id: 'git-u14-l1', name: 'Good commits', icon: '✨', xp: 20,
          challenges: [
            { type: 'concept', title: 'Write commits you\'ll thank yourself for', content: `<p>A commit message has two parts: a 50-char <strong>subject</strong> line (imperative mood) and an optional body explaining <em>why</em>.</p>
<div class="code-block"><span class="com">Bad:</span>
fixed stuff
updates
WIP
asdf

<span class="com">Good — conventional commits:</span>
feat(auth): add password reset endpoint
fix(api): handle null user gracefully in /me
refactor: extract retry logic into helper
docs: clarify rebase warning in README
chore: bump eslint to 9.5

<span class="com">Anatomy:</span>
&lt;type&gt;(&lt;scope&gt;): &lt;short summary in imperative mood&gt;

&lt;optional body — explain WHY, not what&gt;

&lt;optional footer — BREAKING CHANGE / refs #123&gt;</div>
<p><strong>Rules of thumb:</strong> imperative mood ("Add", not "Added"), capitalize the subject, no trailing period, present-tense, &lt;= 72 chars per body line.</p>` },
            { type: 'multiple-choice', prompt: 'Which is the best commit subject?',
              options: [
                { text: 'fixed the bug where users got logged out on refresh sometimes', code: false },
                { text: 'fix(auth): persist session across page reloads', code: false },
                { text: 'Update', code: false },
                { text: 'WIP - working on the auth thing', code: false }
              ],
              correct: 1, explanation: 'Imperative, scoped, concrete. Future-you can grep for it.' },
            { type: 'true-false', statement: 'Commit messages should be in past tense ("Added feature X").', correct: false, explanation: 'Imperative mood ("Add feature X") is the Git convention — it reads like an instruction the commit would carry out.' },
            { type: 'match-pairs', prompt: 'Conventional Commits — match type → meaning:', leftLabel: 'Type', rightLabel: 'Use for',
              pairs: [
                { left: 'feat',     right: 'New feature' },
                { left: 'fix',      right: 'Bug fix' },
                { left: 'refactor', right: 'Code change without behavior change' },
                { left: 'chore',    right: 'Build / tooling / dependencies' }
              ] },
            { type: 'type-answer', prompt: 'What is the recommended maximum length (in characters) for a commit message subject line?',
              accept: ['50', '50 characters', 'fifty'],
              explanation: '50 chars is the widely-cited Git convention; many tools warn past that. Bodies wrap around 72.' }
          ]
        },
        {
          id: 'git-u14-l2', name: 'Branching strategies', icon: '🗺️', xp: 25,
          challenges: [
            { type: 'concept', title: 'GitFlow · GitHub Flow · Trunk-based', content: `<p>How a team uses branches is a strategic choice. Three common patterns:</p>
<div class="code-block"><span class="com">GitFlow</span> (Vincent Driessen, 2010)
  main      — production releases (tagged)
  develop   — integration branch
  feature/* — start from develop, merge back to develop
  release/* — stabilization before tagging on main
  hotfix/*  — emergency fixes from main

  Pros: structured, supports parallel release versions
  Cons: many long-lived branches, complex merges

<span class="com">GitHub Flow</span> (simpler)
  main      — always deployable
  feature/* — short-lived, opened via PR, merged to main

  Pros: simple, fits continuous deployment
  Cons: assumes a single release stream

<span class="com">Trunk-based</span>
  Tiny short-lived branches OR commit directly to main
  Behind feature flags
  Pros: minimal merge pain, fast iteration
  Cons: requires strong CI + feature flag discipline</div>` },
            { type: 'multiple-choice', prompt: 'GitHub Flow uses how many long-lived branches?',
              options: [
                { text: 'One — main', code: false },
                { text: 'Two — main + develop', code: false },
                { text: 'Three — main, develop, release', code: false },
                { text: 'As many as you want', code: false }
              ],
              correct: 0, explanation: 'GitHub Flow is "main + many short-lived feature branches via PR".' },
            { type: 'multiple-choice', prompt: 'Which strategy assumes feature flags hide unfinished work in production?',
              options: [
                { text: 'GitFlow', code: false },
                { text: 'Trunk-based development', code: false },
                { text: 'GitHub Flow', code: false },
                { text: 'Forking workflow', code: false }
              ],
              correct: 1, explanation: 'Trunk-based teams merge to <code>main</code> constantly; flags toggle features on/off without branching.' },
            { type: 'true-false', statement: 'A long-lived feature branch makes merging easier the longer it lives.', correct: false, explanation: 'Opposite — the longer it lives, the more <code>main</code> drifts, the more conflicts you accumulate. Merge often.' },
            { type: 'match-pairs', prompt: 'Match GitFlow branch → role:', leftLabel: 'Branch', rightLabel: 'Role',
              pairs: [
                { left: 'main',     right: 'Production releases (tagged)' },
                { left: 'develop',  right: 'Integration of finished features' },
                { left: 'feature/*', right: 'In-progress work' },
                { left: 'hotfix/*',  right: 'Urgent prod fixes' }
              ] },
            { type: 'reorder-code', prompt: 'GitHub Flow — typical sequence:',
              lines: [
                'git switch -c feature/login',
                'git commit -m <span class="str">"Add login"</span>',
                'git push -u origin feature/login',
                'Open PR → review → merge'
              ],
              correctOrder: [0, 1, 2, 3] }
          ]
        }
      ]
    }

  ]
});

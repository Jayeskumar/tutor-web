LEARN('git', {
  intro: 'A guided tour of Git — from your very first commit to confidently rebasing, resolving conflicts, and shipping with a team.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'git-c1',
      title: 'What is Git?',
      icon: '🌿',
      sections: [
        { type: 'heading', text: 'Why version control exists', level: 1 },
        { type: 'para', html: 'Before Git, software teams traded zip files, emailed patches, and lived in fear of overwriting each other\'s work. <strong>Version control</strong> solves all of that — it records every change so any version of the project is one command away.' },
        { type: 'para', html: '<strong>Git</strong> is the version control system that won. Created in 2005 by Linus Torvalds for Linux kernel development, it powers nearly every modern codebase, including GitHub, GitLab, the Linux kernel, the Android source tree, and probably the codebase you\'ll work on tomorrow.' },

        { type: 'heading', text: 'Centralized vs distributed', level: 2 },
        { type: 'para', html: 'Older systems (SVN, CVS, Perforce) are <em>centralized</em> — one server holds the true history; clients check out a snapshot. Git is <strong>distributed</strong>: every clone is a full repo with complete history.' },

        { type: 'image', alt: 'Centralized vs distributed version control',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.srv{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.cli{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.dist{fill:#dcfce7;stroke:#15803d;stroke-width:2}.ln{stroke:#475569;stroke-width:1.5;fill:none}</style>
</defs>
<text x="200" y="28" class="t tb" text-anchor="middle" font-size="18">Centralized (SVN)</text>
<rect x="150" y="50" width="100" height="50" rx="6" class="srv"/>
<text x="200" y="80" class="t tb" text-anchor="middle" font-size="13">Server</text>
<rect x="40" y="180" width="80" height="40" rx="6" class="cli"/>
<text x="80" y="205" class="t" text-anchor="middle" font-size="12">Client A</text>
<rect x="160" y="180" width="80" height="40" rx="6" class="cli"/>
<text x="200" y="205" class="t" text-anchor="middle" font-size="12">Client B</text>
<rect x="280" y="180" width="80" height="40" rx="6" class="cli"/>
<text x="320" y="205" class="t" text-anchor="middle" font-size="12">Client C</text>
<line x1="200" y1="100" x2="80" y2="180" class="ln"/>
<line x1="200" y1="100" x2="200" y2="180" class="ln"/>
<line x1="200" y1="100" x2="320" y2="180" class="ln"/>
<text x="200" y="260" class="t" text-anchor="middle" font-size="12">Server has history. Clients have snapshots.</text>
<line x1="410" y1="20" x2="410" y2="260" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
<text x="610" y="28" class="t tb" text-anchor="middle" font-size="18">Distributed (Git)</text>
<rect x="560" y="50" width="100" height="50" rx="6" class="dist"/>
<text x="610" y="80" class="t tb" text-anchor="middle" font-size="13">Remote</text>
<rect x="450" y="180" width="80" height="40" rx="6" class="dist"/>
<text x="490" y="200" class="t" text-anchor="middle" font-size="11">Dev A</text>
<text x="490" y="214" class="t" text-anchor="middle" font-size="10">+ full history</text>
<rect x="570" y="180" width="80" height="40" rx="6" class="dist"/>
<text x="610" y="200" class="t" text-anchor="middle" font-size="11">Dev B</text>
<text x="610" y="214" class="t" text-anchor="middle" font-size="10">+ full history</text>
<rect x="690" y="180" width="80" height="40" rx="6" class="dist"/>
<text x="730" y="200" class="t" text-anchor="middle" font-size="11">Dev C</text>
<text x="730" y="214" class="t" text-anchor="middle" font-size="10">+ full history</text>
<line x1="610" y1="100" x2="490" y2="180" class="ln"/>
<line x1="610" y1="100" x2="610" y2="180" class="ln"/>
<line x1="610" y1="100" x2="730" y2="180" class="ln"/>
<text x="610" y="260" class="t" text-anchor="middle" font-size="12">Everyone has the whole repo. Sync when ready.</text>
</svg>` },

        { type: 'heading', text: 'What Git buys you', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Safety net</strong> — you can undo anything, even mistakes from weeks ago',
          '<strong>Collaboration</strong> — multiple people work on the same code without overwriting each other',
          '<strong>Branching</strong> — try ideas in isolation, throw them away or merge them in',
          '<strong>History</strong> — every change is attributed, dated, and explained',
          '<strong>Offline-first</strong> — commit, branch, view history with no internet'
        ] },

        { type: 'callout', kind: 'info', html: 'Git is the tool. <strong>GitHub</strong>, <strong>GitLab</strong>, and <strong>Bitbucket</strong> are hosting services that build on top of Git, adding pull requests, code review, issues, and CI/CD. You can use Git without any of them — they just make collaboration easier.' },

        { type: 'heading', text: 'Your very first commands', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Install Git, then check the version</span>
git --version

<span class="com"># Tell Git who you are (once)</span>
git config --global user.name <span class="str">"Ada Lovelace"</span>
git config --global user.email <span class="str">"ada@example.com"</span>

<span class="com"># Start a repo in the current folder</span>
git init

<span class="com"># Or clone an existing one</span>
git clone https://github.com/someone/their-repo.git` },

        { type: 'callout', kind: 'tip', html: 'On macOS, <code>git</code> is preinstalled (or installs with Xcode Command Line Tools). On Linux, <code>apt install git</code> or <code>dnf install git</code>. On Windows, grab the installer from <a href="https://git-scm.com">git-scm.com</a>.' }
      ]
    },

    /* ============ Chapter 2 ============ */
    {
      id: 'git-c2',
      title: 'The three areas',
      icon: '🧭',
      sections: [
        { type: 'heading', text: 'Working dir · Staging · Repository', level: 1 },
        { type: 'para', html: 'The single most important mental model in Git: every file you care about lives in (or moves between) three areas. Get this right and the commands suddenly stop feeling random.' },

        { type: 'image', alt: 'The three areas of Git',
          svg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.wd{fill:#fef3c7;stroke:#92400e;stroke-width:2}.sa{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.rp{fill:#dcfce7;stroke:#15803d;stroke-width:2}.ar{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#arr)}</style>
  <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0,0 L10,5 L0,10 z" fill="#475569"/>
  </marker>
</defs>
<rect x="30" y="80" width="200" height="120" rx="12" class="wd"/>
<text x="130" y="110" class="t tb" text-anchor="middle" font-size="16">Working Directory</text>
<text x="130" y="135" class="t" text-anchor="middle" font-size="12">Your files on disk</text>
<text x="130" y="155" class="t" text-anchor="middle" font-size="12">(what you edit)</text>
<text x="130" y="180" class="t" text-anchor="middle" font-size="11" fill="#475569">README.md, src/, etc.</text>
<rect x="300" y="80" width="200" height="120" rx="12" class="sa"/>
<text x="400" y="110" class="t tb" text-anchor="middle" font-size="16">Staging Area</text>
<text x="400" y="135" class="t" text-anchor="middle" font-size="12">aka the "index"</text>
<text x="400" y="155" class="t" text-anchor="middle" font-size="12">Queued for next commit</text>
<text x="400" y="180" class="t" text-anchor="middle" font-size="11" fill="#475569">.git/index</text>
<rect x="570" y="80" width="200" height="120" rx="12" class="rp"/>
<text x="670" y="110" class="t tb" text-anchor="middle" font-size="16">Repository</text>
<text x="670" y="135" class="t" text-anchor="middle" font-size="12">All committed history</text>
<text x="670" y="155" class="t" text-anchor="middle" font-size="12">(snapshots forever)</text>
<text x="670" y="180" class="t" text-anchor="middle" font-size="11" fill="#475569">.git/objects/</text>
<line x1="232" y1="130" x2="298" y2="130" class="ar"/>
<text x="265" y="120" class="t" text-anchor="middle" font-size="11" fill="#1d4ed8">git add</text>
<line x1="502" y1="130" x2="568" y2="130" class="ar"/>
<text x="535" y="120" class="t" text-anchor="middle" font-size="11" fill="#15803d">git commit</text>
<line x1="298" y1="170" x2="232" y2="170" class="ar"/>
<text x="265" y="195" class="t" text-anchor="middle" font-size="11" fill="#dc2626">git restore --staged</text>
<line x1="568" y1="170" x2="502" y2="170" class="ar"/>
<text x="535" y="195" class="t" text-anchor="middle" font-size="11" fill="#dc2626">git reset</text>
<text x="400" y="40" class="t tb" text-anchor="middle" font-size="20">A file's life inside Git</text>
<text x="400" y="60" class="t" text-anchor="middle" font-size="13" fill="#475569">Edit → Stage → Commit</text>
<text x="400" y="265" class="t" text-anchor="middle" font-size="12" fill="#475569">git status shows you where each file currently lives.</text>
</svg>` },

        { type: 'heading', text: 'Why staging exists', level: 2 },
        { type: 'para', html: 'New Git users wonder why we need an extra step between editing and committing. The answer: <strong>staging lets you craft a commit</strong>. You can have ten changes in your working dir but only commit three of them as "Fix typo in README" — leaving the rest unstaged for a separate commit.' },

        { type: 'code', lang: 'bash', code: `<span class="com"># Stage one file</span>
git add README.md

<span class="com"># Stage all changes in current dir + subdirs</span>
git add .

<span class="com"># Stage only PART of a file (interactive picker)</span>
git add -p src/auth.js

<span class="com"># See what's staged vs what isn't</span>
git status

<span class="com"># See diffs</span>
git diff             <span class="com"># working dir vs staging</span>
git diff --staged    <span class="com"># staging vs last commit</span>` },

        { type: 'callout', kind: 'tip', html: '<code>git add -p</code> is a power move. It walks through your changes hunk by hunk and asks "stage this one? y/n". Perfect when one editing session contains two logically separate changes.' },

        { type: 'heading', text: 'Reading git status', level: 2 },
        { type: 'code', lang: 'bash', code: `$ git status
On branch main
Changes to be committed:        <span class="com"># GREEN — already staged</span>
  modified:   src/auth.js

Changes not staged for commit:  <span class="com"># RED — modified, not staged</span>
  modified:   README.md

Untracked files:                <span class="com"># RED — never added at all</span>
  notes.txt` },

        { type: 'list', kind: 'check', items: [
          'Green = already staged, ready to commit',
          'Red, modified = changed but not yet staged',
          'Red, untracked = Git has never seen this file. <code>git add</code> it to start tracking'
        ] }
      ]
    },

    /* ============ Chapter 3 ============ */
    {
      id: 'git-c3',
      title: 'Commits, history, and SHAs',
      icon: '📜',
      sections: [
        { type: 'heading', text: 'A commit is a snapshot', level: 1 },
        { type: 'para', html: 'Many people think of commits as diffs ("the changes I made"). It\'s more accurate to think of them as <strong>snapshots</strong> — a frozen picture of every tracked file at a moment in time. Git is smart about storing only what changed, but conceptually each commit is a complete state of your project.' },

        { type: 'heading', text: 'What a commit contains', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>A snapshot</strong> of every tracked file',
          '<strong>Author</strong> — name + email (from <code>user.name</code> / <code>user.email</code>)',
          '<strong>Date</strong> — timestamp',
          '<strong>Message</strong> — what you wrote',
          '<strong>Parent commit(s)</strong> — usually one. Merge commits have two.',
          '<strong>A SHA-1 hash</strong> — a unique 40-character ID computed from everything above'
        ] },

        { type: 'code', lang: 'bash', code: `$ git log
commit a1b2c3d4e5f6789012345678901234567890abcd  <span class="com">(HEAD -> main)</span>
Author: Ada Lovelace <ada@example.com>
Date:   Mon Apr 15 09:23:11 2024 +0000

    feat(auth): add password reset endpoint

commit 9876543210fedcba0987654321fedcba09876543
Author: Ada Lovelace <ada@example.com>
Date:   Sun Apr 14 17:02:48 2024 +0000

    chore: bump dependencies` },

        { type: 'callout', kind: 'info', html: 'The SHA is computed from the contents + parent + message + author + date. Change any of these and the SHA changes. That\'s how Git knows two commits are "the same" — same SHA, same commit.' },

        { type: 'heading', text: 'Browsing history', level: 2 },
        { type: 'code', lang: 'bash', code: `git log                       <span class="com"># full log</span>
git log --oneline             <span class="com"># one line per commit</span>
git log --graph --all         <span class="com"># ASCII art of all branches</span>
git log -n 10                 <span class="com"># last 10</span>
git log --since=<span class="str">"2 weeks ago"</span>
git log --author=<span class="str">"Ada"</span>
git log --grep=<span class="str">"password"</span>     <span class="com"># commits whose msg matches</span>
git log -- src/auth.js        <span class="com"># commits touching a path</span>
git log -p                    <span class="com"># show diffs inline</span>

git show HEAD                 <span class="com"># latest commit (meta + diff)</span>
git show a1b2c3d              <span class="com"># a specific commit</span>

git blame README.md           <span class="com"># who/when changed each line</span>` },

        { type: 'heading', text: 'Refer to commits by name', level: 2 },
        { type: 'para', html: 'You don\'t always need the full 40-char SHA. Git accepts many shorthands:' },
        { type: 'list', kind: 'bullet', items: [
          '<code>HEAD</code> — the current commit (tip of current branch)',
          '<code>HEAD~1</code> — one commit back. <code>HEAD~5</code> = five back.',
          '<code>HEAD^</code> — first parent. <code>HEAD^2</code> = second parent (merge commits)',
          '<code>main</code>, <code>feature/login</code> — branch names point to their tip',
          '<code>a1b2c3d</code> — first 7+ chars of a SHA',
          '<code>v1.0.0</code> — tag names'
        ] },

        { type: 'callout', kind: 'tip', html: 'Add an alias to your global config and you have <code>git l</code> for a glance at the whole repo: <code>git config --global alias.l "log --oneline --graph --all"</code>' }
      ]
    },

    /* ============ Chapter 4 ============ */
    {
      id: 'git-c4',
      title: 'Branches',
      icon: '🌳',
      sections: [
        { type: 'heading', text: 'Branches are pointers, not folders', level: 1 },
        { type: 'para', html: 'New Git users imagine branches as parallel copies of the code. Reality: a branch is just a <strong>tiny pointer to a commit</strong>. Creating one writes a single file containing one SHA. That\'s why branching is instant and uses no measurable disk space.' },

        { type: 'image', alt: 'Branch as a pointer to a commit',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.c{fill:#fff;stroke:#475569;stroke-width:2}.ct{font-family:monospace;font-size:11px;fill:#475569}.bm{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.bf{fill:#dcfce7;stroke:#15803d;stroke-width:2}.h{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.ln{stroke:#475569;stroke-width:2;fill:none}</style>
</defs>
<text x="400" y="30" class="t tb" text-anchor="middle" font-size="18">Branches are labels on commits</text>
<circle cx="100" cy="160" r="28" class="c"/>
<text x="100" y="165" class="ct" text-anchor="middle">a1b2</text>
<circle cx="220" cy="160" r="28" class="c"/>
<text x="220" y="165" class="ct" text-anchor="middle">c3d4</text>
<circle cx="340" cy="160" r="28" class="c"/>
<text x="340" y="165" class="ct" text-anchor="middle">e5f6</text>
<circle cx="460" cy="100" r="28" class="c"/>
<text x="460" y="105" class="ct" text-anchor="middle">7890</text>
<circle cx="580" cy="100" r="28" class="c"/>
<text x="580" y="105" class="ct" text-anchor="middle">1234</text>
<circle cx="460" cy="220" r="28" class="c"/>
<text x="460" y="225" class="ct" text-anchor="middle">5678</text>
<line x1="128" y1="160" x2="192" y2="160" class="ln"/>
<line x1="248" y1="160" x2="312" y2="160" class="ln"/>
<line x1="365" y1="148" x2="438" y2="115" class="ln"/>
<line x1="488" y1="100" x2="552" y2="100" class="ln"/>
<line x1="365" y1="172" x2="438" y2="205" class="ln"/>
<rect x="540" y="40" width="80" height="30" rx="6" class="bm"/>
<text x="580" y="60" class="t tb" text-anchor="middle" font-size="12">main</text>
<polygon points="580,82 575,73 585,73" fill="#1d4ed8"/>
<rect x="420" y="250" width="100" height="30" rx="6" class="bf"/>
<text x="470" y="270" class="t tb" text-anchor="middle" font-size="12">feature/x</text>
<polygon points="465,242 460,251 470,251" fill="#15803d"/>
<rect x="630" y="60" width="80" height="30" rx="6" class="h"/>
<text x="670" y="80" class="t tb" text-anchor="middle" font-size="12">HEAD</text>
<line x1="630" y1="80" x2="610" y2="95" class="ln"/>
</svg>` },

        { type: 'para', html: 'In the diagram, <code>main</code> and <code>feature/x</code> are just labels on specific commits. <code>HEAD</code> is a label on <em>a branch</em> (or sometimes directly on a commit, called "detached HEAD"). When you commit, the branch label moves forward to the new commit.' },

        { type: 'heading', text: 'Working with branches', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># List branches (* = current)</span>
git branch
git branch -a              <span class="com"># include remote-tracking branches</span>
git branch -v              <span class="com"># show last commit on each</span>

<span class="com"># Create a branch (does NOT switch to it)</span>
git branch feature/login

<span class="com"># Switch to it</span>
git switch feature/login
git checkout feature/login   <span class="com"># legacy equivalent</span>

<span class="com"># Create + switch in one step</span>
git switch -c feature/login
git checkout -b feature/login  <span class="com"># legacy</span>

<span class="com"># Rename current branch</span>
git branch -m new-name

<span class="com"># Delete a branch</span>
git branch -d feature/login    <span class="com"># refuses if not merged</span>
git branch -D feature/login    <span class="com"># force delete</span>` },

        { type: 'callout', kind: 'info', html: '<strong>switch vs checkout:</strong> <code>git checkout</code> historically did everything (change branches, restore files, detach HEAD). Modern Git split it into <code>git switch</code> (branches) and <code>git restore</code> (files). Both old and new forms work.' },

        { type: 'heading', text: 'A typical short-lived branch', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Start fresh from latest main</span>
git switch main
git pull

<span class="com"># Create your branch</span>
git switch -c feature/password-reset

<span class="com"># ...edit files...</span>

git add .
git commit -m <span class="str">"feat(auth): add password reset endpoint"</span>

<span class="com"># Push and open a PR</span>
git push -u origin feature/password-reset` },

        { type: 'callout', kind: 'tip', html: '<strong>Branch naming convention:</strong> <code>feature/...</code> for new features, <code>fix/...</code> for bug fixes, <code>chore/...</code> for tooling, <code>release/...</code> for release prep. Pick one your team agrees on and stick to it.' }
      ]
    },

    /* ============ Chapter 5 ============ */
    {
      id: 'git-c5',
      title: 'Merging branches',
      icon: '🔀',
      sections: [
        { type: 'heading', text: 'Bringing changes together', level: 1 },
        { type: 'para', html: 'You finished work on a branch and want those changes on <code>main</code>. Switch to the destination, then merge the source.' },

        { type: 'code', lang: 'bash', code: `git switch main
git pull               <span class="com"># make sure main is up to date</span>
git merge feature/login
git push` },

        { type: 'heading', text: 'Fast-forward merges', level: 2 },
        { type: 'para', html: 'If <code>main</code> hasn\'t moved since you branched off, Git can just slide the <code>main</code> pointer forward to the tip of your feature branch. No new commit, no merge.' },

        { type: 'image', alt: 'Fast-forward vs three-way merge',
          svg: `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.c{fill:#fff;stroke:#475569;stroke-width:2}.cm{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.ct{font-family:monospace;font-size:10px;fill:#475569}.ln{stroke:#475569;stroke-width:2;fill:none}</style>
</defs>
<text x="200" y="28" class="t tb" text-anchor="middle" font-size="16">Fast-forward</text>
<text x="200" y="48" class="t" text-anchor="middle" font-size="11">main had not moved</text>
<circle cx="60" cy="100" r="20" class="c"/><text x="60" y="104" class="ct" text-anchor="middle">A</text>
<circle cx="130" cy="100" r="20" class="c"/><text x="130" y="104" class="ct" text-anchor="middle">B</text>
<circle cx="200" cy="100" r="20" class="c"/><text x="200" y="104" class="ct" text-anchor="middle">C</text>
<circle cx="270" cy="100" r="20" class="c"/><text x="270" y="104" class="ct" text-anchor="middle">D</text>
<line x1="80" y1="100" x2="110" y2="100" class="ln"/>
<line x1="150" y1="100" x2="180" y2="100" class="ln"/>
<line x1="220" y1="100" x2="250" y2="100" class="ln"/>
<text x="60" y="145" class="t" text-anchor="middle" font-size="10">old main</text>
<text x="270" y="145" class="t tb" text-anchor="middle" font-size="11" fill="#1d4ed8">main (moved)</text>
<text x="270" y="160" class="t" text-anchor="middle" font-size="10">feature</text>
<text x="200" y="180" class="t" text-anchor="middle" font-size="10" fill="#475569">Linear history — no merge commit</text>
<line x1="400" y1="20" x2="400" y2="370" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
<text x="600" y="28" class="t tb" text-anchor="middle" font-size="16">Three-way merge</text>
<text x="600" y="48" class="t" text-anchor="middle" font-size="11">both branches advanced</text>
<circle cx="460" cy="200" r="20" class="c"/><text x="460" y="204" class="ct" text-anchor="middle">A</text>
<circle cx="530" cy="200" r="20" class="c"/><text x="530" y="204" class="ct" text-anchor="middle">B</text>
<circle cx="600" cy="150" r="20" class="c"/><text x="600" y="154" class="ct" text-anchor="middle">C</text>
<circle cx="670" cy="150" r="20" class="c"/><text x="670" y="154" class="ct" text-anchor="middle">D</text>
<circle cx="600" cy="260" r="20" class="c"/><text x="600" y="264" class="ct" text-anchor="middle">E</text>
<circle cx="670" cy="260" r="20" class="c"/><text x="670" y="264" class="ct" text-anchor="middle">F</text>
<circle cx="740" cy="200" r="22" class="cm"/><text x="740" y="204" class="ct" text-anchor="middle" font-weight="700">M</text>
<line x1="480" y1="200" x2="510" y2="200" class="ln"/>
<line x1="552" y1="190" x2="582" y2="160" class="ln"/>
<line x1="552" y1="210" x2="582" y2="250" class="ln"/>
<line x1="620" y1="150" x2="650" y2="150" class="ln"/>
<line x1="620" y1="260" x2="650" y2="260" class="ln"/>
<line x1="688" y1="162" x2="725" y2="190" class="ln"/>
<line x1="688" y1="248" x2="725" y2="215" class="ln"/>
<text x="670" y="135" class="t" text-anchor="middle" font-size="10">main</text>
<text x="670" y="290" class="t" text-anchor="middle" font-size="10">feature</text>
<text x="740" y="240" class="t tb" text-anchor="middle" font-size="11" fill="#1d4ed8">merge commit</text>
<text x="600" y="345" class="t" text-anchor="middle" font-size="11" fill="#475569">M has TWO parents: D and F</text>
</svg>` },

        { type: 'heading', text: 'Three-way merges', level: 2 },
        { type: 'para', html: 'If both branches advanced since they diverged, Git can\'t just move a pointer. It creates a <strong>merge commit</strong> with two parents — one from each side. The branch graph keeps its shape, so anyone looking at the history can see "this was a feature branch."' },

        { type: 'code', lang: 'bash', code: `<span class="com"># Force a merge commit even when fast-forward is possible</span>
git merge --no-ff feature

<span class="com"># Refuse to create merge commits — only fast-forward</span>
git merge --ff-only feature

<span class="com"># Squash all feature commits into one before merging</span>
git merge --squash feature
git commit -m <span class="str">"feat: feature in one commit"</span>` },

        { type: 'heading', text: 'Conflicts', level: 2 },
        { type: 'para', html: 'When both branches changed the same lines, Git can\'t decide which version wins. It writes both into the file with markers and asks you to resolve.' },
        { type: 'code', lang: 'bash', code: `function greet() {
<span class="kw"><<<<<<< HEAD</span>
  console.log(<span class="str">"Hello!"</span>);     <span class="com">// your branch (HEAD)</span>
<span class="kw">=======</span>
  console.log(<span class="str">"Hi there!"</span>);  <span class="com">// incoming branch</span>
<span class="kw">>>>>>>> feature</span>
}` },
        { type: 'list', kind: 'numbered', items: [
          'Open the file. Decide what the final content should be.',
          'Delete the marker lines (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>) entirely.',
          'Save. Run <code>git add &lt;file&gt;</code> to mark it resolved.',
          'Run <code>git commit</code> — Git pre-fills a merge commit message.',
          'Or escape: <code>git merge --abort</code> to pretend the merge never started.'
        ] },

        { type: 'callout', kind: 'warn', html: 'If you see a file with conflict markers checked into a repo, somebody forgot step 2. The build will break in surprising ways. Always grep for <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> before pushing.' }
      ]
    },

    /* ============ Chapter 6 ============ */
    {
      id: 'git-c6',
      title: 'Rebase: rewriting history',
      icon: '♻️',
      sections: [
        { type: 'heading', text: 'Rebase vs merge', level: 1 },
        { type: 'para', html: 'A <strong>rebase</strong> takes your branch\'s commits, picks them up, and replays them on top of another branch. The result is a linear history — as if you had branched off the latest target all along.' },

        { type: 'image', alt: 'Merge vs rebase visual',
          svg: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.c{fill:#fff;stroke:#475569;stroke-width:2}.cm{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.cn{fill:#fef3c7;stroke:#92400e;stroke-width:2}.ct{font-family:monospace;font-size:10px;fill:#475569}.ln{stroke:#475569;stroke-width:2;fill:none}.gh{stroke:#dc2626;stroke-width:2;fill:none;stroke-dasharray:4,3}</style>
</defs>
<text x="400" y="28" class="t tb" text-anchor="middle" font-size="18">Same situation, two outcomes</text>
<text x="200" y="58" class="t tb" text-anchor="middle" font-size="14" fill="#15803d">After MERGE</text>
<circle cx="60" cy="160" r="18" class="c"/><text x="60" y="164" class="ct" text-anchor="middle">A</text>
<circle cx="130" cy="160" r="18" class="c"/><text x="130" y="164" class="ct" text-anchor="middle">B</text>
<circle cx="200" cy="110" r="18" class="c"/><text x="200" y="114" class="ct" text-anchor="middle">C</text>
<circle cx="270" cy="110" r="18" class="c"/><text x="270" y="114" class="ct" text-anchor="middle">D</text>
<circle cx="200" cy="210" r="18" class="c"/><text x="200" y="214" class="ct" text-anchor="middle">X</text>
<circle cx="270" cy="210" r="18" class="c"/><text x="270" y="214" class="ct" text-anchor="middle">Y</text>
<circle cx="340" cy="160" r="20" class="cm"/><text x="340" y="164" class="ct" text-anchor="middle" font-weight="700">M</text>
<line x1="78" y1="160" x2="112" y2="160" class="ln"/>
<line x1="146" y1="150" x2="182" y2="120" class="ln"/>
<line x1="146" y1="170" x2="182" y2="200" class="ln"/>
<line x1="218" y1="110" x2="252" y2="110" class="ln"/>
<line x1="218" y1="210" x2="252" y2="210" class="ln"/>
<line x1="288" y1="120" x2="322" y2="150" class="ln"/>
<line x1="288" y1="200" x2="322" y2="170" class="ln"/>
<text x="340" y="195" class="t" text-anchor="middle" font-size="10" fill="#1d4ed8">merge commit</text>
<text x="200" y="280" class="t" text-anchor="middle" font-size="11" fill="#475569">Both branches visible. Two parents.</text>
<line x1="400" y1="50" x2="400" y2="340" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
<text x="600" y="58" class="t tb" text-anchor="middle" font-size="14" fill="#dc2626">After REBASE</text>
<circle cx="450" cy="160" r="18" class="c"/><text x="450" y="164" class="ct" text-anchor="middle">A</text>
<circle cx="510" cy="160" r="18" class="c"/><text x="510" y="164" class="ct" text-anchor="middle">B</text>
<circle cx="570" cy="160" r="18" class="c"/><text x="570" y="164" class="ct" text-anchor="middle">C</text>
<circle cx="630" cy="160" r="18" class="c"/><text x="630" y="164" class="ct" text-anchor="middle">D</text>
<circle cx="690" cy="160" r="18" class="cn"/><text x="690" y="164" class="ct" text-anchor="middle">X'</text>
<circle cx="750" cy="160" r="18" class="cn"/><text x="750" y="164" class="ct" text-anchor="middle">Y'</text>
<line x1="468" y1="160" x2="492" y2="160" class="ln"/>
<line x1="528" y1="160" x2="552" y2="160" class="ln"/>
<line x1="588" y1="160" x2="612" y2="160" class="ln"/>
<line x1="648" y1="160" x2="672" y2="160" class="ln"/>
<line x1="708" y1="160" x2="732" y2="160" class="ln"/>
<text x="720" y="200" class="t" text-anchor="middle" font-size="10" fill="#92400e">X' and Y' are NEW commits</text>
<text x="720" y="215" class="t" text-anchor="middle" font-size="10" fill="#92400e">(different SHAs from X, Y)</text>
<text x="600" y="280" class="t" text-anchor="middle" font-size="11" fill="#475569">Straight line. No merge commit.</text>
</svg>` },

        { type: 'heading', text: 'Doing a rebase', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Move feature on top of latest main</span>
git switch feature
git fetch origin
git rebase origin/main

<span class="com"># If conflicts pop up:</span>
<span class="com">#   1. fix the files</span>
<span class="com">#   2. git add &lt;files&gt;</span>
<span class="com">#   3. continue:</span>
git rebase --continue

<span class="com"># Or give up:</span>
git rebase --abort` },

        { type: 'heading', text: 'Interactive rebase', level: 2 },
        { type: 'para', html: '<code>git rebase -i</code> opens an editor with the list of commits you\'re replaying. You can reorder, squash, edit, or drop them — essentially rewriting any local history.' },
        { type: 'code', lang: 'bash', code: `git rebase -i HEAD~4    <span class="com"># last 4 commits</span>

<span class="com"># Editor opens:</span>
pick   a1b2c3d add login form
pick   c3d4e5f fix typo in form
pick   e5f6789 fix another typo
pick   7890abc add tests

<span class="com"># Common commands you can use:</span>
<span class="com">#   pick    use the commit as-is</span>
<span class="com">#   reword  use the commit, but edit its message</span>
<span class="com">#   edit    pause to amend the commit</span>
<span class="com">#   squash  combine into previous (keeps both messages)</span>
<span class="com">#   fixup   like squash but discards this commit's message</span>
<span class="com">#   drop    remove the commit entirely</span>
<span class="com">#   reorder change line order to reorder commits</span>` },

        { type: 'callout', kind: 'danger', html: '<strong>The Golden Rule of Rebase:</strong> never rebase commits you have already pushed and shared. Rebase rewrites SHAs — everyone else now has "the same" commits with different IDs, and pulling becomes a nightmare. Rebase local, unpublished work. Merge published work.' },

        { type: 'heading', text: 'When to rebase, when to merge', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Rebase</strong> your local feature branch onto the latest <code>main</code> before pushing — keeps history linear, shows your work as if you started today',
          '<strong>Rebase -i</strong> to clean up your commits before opening a PR — squash WIPs, reword messages, drop scratch commits',
          '<strong>Merge</strong> when bringing a finished branch into <code>main</code> on shared remotes (especially via PRs)',
          'Some teams use squash-merge on PR merge — Git merges as one commit, history stays linear even without rebasing'
        ] }
      ]
    },

    /* ============ Chapter 7 ============ */
    {
      id: 'git-c7',
      title: 'Remotes: pull, push, fetch',
      icon: '☁️',
      sections: [
        { type: 'heading', text: 'Local repo, remote repo', level: 1 },
        { type: 'para', html: 'A <strong>remote</strong> is just a named URL of another copy of your repo — usually on GitHub/GitLab. Your local repo is connected to one or more remotes; you sync history by pushing and pulling.' },

        { type: 'image', alt: 'Local and remote sync diagram',
          svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;fill:#0f172a}.tb{font-weight:700}.l{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.r{fill:#fce7f3;stroke:#be185d;stroke-width:2}.ar{stroke:#475569;stroke-width:2;fill:none;marker-end:url(#arr2)}.box{font-family:monospace;font-size:11px;fill:#0f172a}</style>
  <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
    <path d="M0,0 L10,5 L0,10 z" fill="#475569"/>
  </marker>
</defs>
<text x="400" y="32" class="t tb" text-anchor="middle" font-size="18">Sync between local and remote</text>
<rect x="80" y="70" width="240" height="200" rx="12" class="l"/>
<text x="200" y="100" class="t tb" text-anchor="middle" font-size="16">Local repo</text>
<text x="200" y="125" class="t" text-anchor="middle" font-size="12">~/code/myapp/.git</text>
<rect x="100" y="140" width="200" height="40" rx="6" fill="#fff" stroke="#1d4ed8"/>
<text x="200" y="165" class="box" text-anchor="middle">main, feature/login</text>
<rect x="100" y="195" width="200" height="40" rx="6" fill="#fff" stroke="#1d4ed8"/>
<text x="200" y="220" class="box" text-anchor="middle">origin/main (tracking)</text>
<text x="200" y="255" class="t" text-anchor="middle" font-size="10" fill="#475569">your branches + a cached</text>
<rect x="480" y="70" width="240" height="200" rx="12" class="r"/>
<text x="600" y="100" class="t tb" text-anchor="middle" font-size="16">Remote (origin)</text>
<text x="600" y="125" class="t" text-anchor="middle" font-size="12">github.com/you/myapp</text>
<rect x="500" y="140" width="200" height="40" rx="6" fill="#fff" stroke="#be185d"/>
<text x="600" y="165" class="box" text-anchor="middle">main</text>
<rect x="500" y="195" width="200" height="40" rx="6" fill="#fff" stroke="#be185d"/>
<text x="600" y="220" class="box" text-anchor="middle">feature/login (others can push)</text>
<text x="600" y="255" class="t" text-anchor="middle" font-size="10" fill="#475569">canonical branches</text>
<line x1="320" y1="160" x2="478" y2="160" class="ar"/>
<text x="400" y="150" class="t" text-anchor="middle" font-size="11" fill="#15803d">git push</text>
<line x1="478" y1="215" x2="320" y2="215" class="ar"/>
<text x="400" y="232" class="t" text-anchor="middle" font-size="11" fill="#1d4ed8">git fetch / pull</text>
<text x="400" y="305" class="t" text-anchor="middle" font-size="11" fill="#475569">"origin" is just the default name. You can have many remotes.</text>
</svg>` },

        { type: 'heading', text: 'Managing remotes', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># List configured remotes</span>
git remote -v

<span class="com"># Add a remote</span>
git remote add origin git@github.com:you/myapp.git

<span class="com"># Add a second one (e.g., for forks)</span>
git remote add upstream git@github.com:original/myapp.git

<span class="com"># Rename / remove</span>
git remote rename origin github
git remote remove old-server

<span class="com"># Change a remote's URL</span>
git remote set-url origin git@github.com:you/newname.git` },

        { type: 'heading', text: 'fetch vs pull vs push', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Download remote refs (commits, branches) WITHOUT changing your branch</span>
git fetch
git fetch origin
git fetch origin main

<span class="com"># Fetch + integrate into current branch in one step</span>
git pull                  <span class="com"># default: fetch + merge</span>
git pull --rebase         <span class="com"># fetch + rebase instead</span>
git config --global pull.rebase true   <span class="com"># make rebase default</span>

<span class="com"># Send your commits up</span>
git push                       <span class="com"># needs an upstream</span>
git push origin main
git push -u origin feature     <span class="com"># first time: set upstream</span>
git push --force-with-lease    <span class="com"># safer than --force</span>` },

        { type: 'callout', kind: 'warn', html: '<code>git push --force</code> overwrites the remote branch. If a teammate pushed in between, their commits vanish. Use <code>--force-with-lease</code> instead — it refuses if the remote has changed since your last fetch.' },

        { type: 'heading', text: 'Tracking branches', level: 2 },
        { type: 'para', html: 'When you <code>git clone</code> or <code>git push -u</code>, your local branch becomes <strong>tracking</strong> a remote branch. After that, <code>git pull</code> and <code>git push</code> work with no arguments — they remember where to go.' },
        { type: 'list', kind: 'bullet', items: [
          '<code>origin/main</code> — local cached view of the remote\'s <code>main</code>',
          'Your local <code>main</code> tracks <code>origin/main</code>',
          '<code>git status</code> tells you if you\'re ahead, behind, or diverged from your upstream',
          '<code>git branch -vv</code> shows tracking relationships for every local branch'
        ] }
      ]
    },

    /* ============ Chapter 8 ============ */
    {
      id: 'git-c8',
      title: 'GitHub flow & pull requests',
      icon: '🐙',
      sections: [
        { type: 'heading', text: 'How modern teams actually ship', level: 1 },
        { type: 'para', html: 'Nobody pushes directly to <code>main</code> on a real team. Instead, every change goes through a <strong>pull request (PR)</strong> — a proposed merge that gets reviewed, automatically tested, and approved before landing.' },

        { type: 'heading', text: 'The lifecycle of a change', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Pick up an issue (or have an idea). Start from the latest <code>main</code>.',
          'Create a branch: <code>git switch -c fix/login-redirect</code>',
          'Commit your work. Push to the remote: <code>git push -u origin fix/login-redirect</code>',
          'On GitHub, open a <strong>Pull Request</strong> from your branch into <code>main</code>',
          'CI runs (tests, lints, builds). Reviewers leave comments.',
          'Push more commits to address feedback — the PR updates automatically',
          'Once approved + CI green, merge the PR (squash, merge commit, or rebase — team choice)',
          'Delete the branch. Pull the merged change back into your local <code>main</code>.'
        ] },

        { type: 'code', lang: 'bash', code: `<span class="com"># The same sequence at the command line</span>
git switch main
git pull

git switch -c fix/login-redirect

<span class="com"># ...code, save, repeat...</span>

git add .
git commit -m <span class="str">"fix(auth): redirect to /home after login"</span>
git push -u origin fix/login-redirect

<span class="com"># Open the PR in your browser (or via CLI)</span>
gh pr create --fill

<span class="com"># After it's merged:</span>
git switch main
git pull
git branch -d fix/login-redirect` },

        { type: 'heading', text: 'Forks: contributing to repos you don\'t own', level: 2 },
        { type: 'para', html: 'You can\'t push to a repo you don\'t have write access to. For open-source contributions, you <strong>fork</strong> the repo (a server-side copy under your account), push to your fork, and open a PR from your fork into the original.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Click "Fork" on GitHub, then clone YOUR fork</span>
git clone git@github.com:you/their-project.git
cd their-project

<span class="com"># Add the original as "upstream"</span>
git remote add upstream git@github.com:them/their-project.git
git remote -v
<span class="com"># origin    git@github.com:you/their-project   (your fork)</span>
<span class="com"># upstream  git@github.com:them/their-project  (the original)</span>

<span class="com"># Keep your fork in sync with upstream periodically</span>
git fetch upstream
git switch main
git merge upstream/main
git push origin main

<span class="com"># Work as usual</span>
git switch -c fix/typo
<span class="com"># ...edit...</span>
git push origin fix/typo

<span class="com"># Then open PR on GitHub: fix/typo → them:main</span>` },

        { type: 'callout', kind: 'tip', html: '<strong>PR description matters.</strong> A good PR explains what changed, why, how to test it, and links to the issue. Reviewers spend their time on the code, not on guessing your intent.' },

        { type: 'heading', text: 'Merge strategies on the PR', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Create a merge commit</strong> — preserves the branch shape in history',
          '<strong>Squash and merge</strong> — combines all your PR commits into one before landing on <code>main</code>. Keeps history linear and tidy.',
          '<strong>Rebase and merge</strong> — replays your commits onto <code>main</code> with no merge commit, preserving individual commits'
        ] }
      ]
    },

    /* ============ Chapter 9 ============ */
    {
      id: 'git-c9',
      title: 'Undoing things',
      icon: '↩️',
      sections: [
        { type: 'heading', text: 'You will mess up. Git lets you fix it.', level: 1 },
        { type: 'para', html: 'Almost any Git mistake is recoverable. The hard part is picking the right undo command — they look similar but do very different things to your working dir, staging area, and history.' },

        { type: 'heading', text: 'Cheat sheet', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Throw away unstaged edits to a file (DESTROYS the changes)</span>
git restore README.md
git checkout -- README.md            <span class="com"># legacy form</span>

<span class="com"># Unstage a file (keeps your edits)</span>
git restore --staged README.md
git reset HEAD README.md             <span class="com"># legacy form</span>

<span class="com"># Restore a file from a specific commit</span>
git restore --source=HEAD~3 src/auth.js

<span class="com"># Throw away ALL local changes (DANGEROUS)</span>
git restore .
git checkout -- .

<span class="com"># Move HEAD backward — three flavors</span>
git reset --soft  HEAD~1   <span class="com"># keep changes staged</span>
git reset --mixed HEAD~1   <span class="com"># keep changes unstaged (default)</span>
git reset --hard  HEAD~1   <span class="com"># DESTROY changes</span>

<span class="com"># Amend the most recent commit</span>
git commit --amend                            <span class="com"># keep msg, replace content</span>
git commit --amend -m <span class="str">"better message"</span>

<span class="com"># Create a NEW commit that undoes a previous one — SAFE for pushed history</span>
git revert a1b2c3d
git revert HEAD                               <span class="com"># undo the last commit</span>

<span class="com"># Recover a "lost" commit (it's still in reflog for 30+ days)</span>
git reflog
git reset --hard HEAD@{2}` },

        { type: 'callout', kind: 'tip', html: '<strong>reflog is your friend.</strong> Every change to <code>HEAD</code> is recorded for ~90 days. Did you reset hard and panic? <code>git reflog</code> will list every prior position; <code>git reset --hard HEAD@{N}</code> to get back.' },

        { type: 'heading', text: 'reset vs revert — when to use which', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>reset</strong> rewrites history. Use on LOCAL commits that haven\'t been pushed.',
          '<strong>revert</strong> adds a new commit that undoes an old one. Use on SHARED history.',
          '<strong>restore</strong> only affects your working dir or staging — never touches commits',
          '<strong>amend</strong> rewrites the LAST commit only. If pushed, treat it like a small rebase (don\'t do it on shared branches without coordination)'
        ] },

        { type: 'heading', text: 'The "I broke main" scenario', level: 2 },
        { type: 'para', html: 'You\'re on a shared branch and need to undo something already pushed. Don\'t reset — that rewrites history and breaks everyone else. Use <code>revert</code> instead.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Bad commit landed on main. Undo it safely:</span>
git switch main
git pull
git revert a1b2c3d        <span class="com"># creates a new commit "Revert ..."</span>
git push` }
      ]
    },

    /* ============ Chapter 10 ============ */
    {
      id: 'git-c10',
      title: 'Stash, tags, and cherry-pick',
      icon: '🏷️',
      sections: [
        { type: 'heading', text: 'Useful side tools', level: 1 },
        { type: 'para', html: 'Three commands you\'ll reach for less often than the daily ones, but that are invaluable when you need them.' },

        { type: 'heading', text: 'Stash — set work aside', level: 2 },
        { type: 'para', html: 'You\'re mid-feature when a production bug appears. Your working dir is dirty. You don\'t want to commit half-done code. <code>git stash</code> tucks your changes into a hidden shelf, leaving your working dir clean.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Save uncommitted changes (tracked files)</span>
git stash
git stash push -m <span class="str">"WIP: login form"</span>      <span class="com"># with a label</span>
git stash -u                                <span class="com"># include UNTRACKED files</span>

<span class="com"># See your stashes</span>
git stash list
<span class="com"># stash@{0}: WIP on feature: 9af3 add form</span>
<span class="com"># stash@{1}: WIP on bugfix:  77a0 try fix</span>

<span class="com"># Restore</span>
git stash pop          <span class="com"># reapply top stash, remove from list</span>
git stash apply        <span class="com"># reapply, KEEP in list</span>
git stash apply stash@{1}

<span class="com"># Inspect or delete</span>
git stash show -p stash@{0}
git stash drop stash@{0}
git stash clear        <span class="com"># nuke all stashes</span>` },

        { type: 'callout', kind: 'info', html: 'Stashes are local-only — they don\'t push, don\'t belong to a branch, and aren\'t backed up. Treat them as a temporary shelf, not long-term storage.' },

        { type: 'heading', text: 'Tags — mark releases', level: 2 },
        { type: 'para', html: 'A <strong>tag</strong> is a permanent name for a specific commit — typically used to mark releases (v1.0.0, v2.3.1). Unlike branches, tags don\'t move.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Lightweight tag (just a name)</span>
git tag v1.0.0

<span class="com"># Annotated tag (recommended — has author, date, message)</span>
git tag -a v1.0.0 -m <span class="str">"Release 1.0.0"</span>

<span class="com"># Tag a specific commit (not current HEAD)</span>
git tag -a v0.9.0 a1b2c3d -m <span class="str">"Last beta"</span>

<span class="com"># Push tags (they don't push by default!)</span>
git push origin v1.0.0
git push --tags                  <span class="com"># all tags</span>

<span class="com"># List + inspect</span>
git tag
git tag -l <span class="str">"v1.*"</span>
git show v1.0.0

<span class="com"># Delete</span>
git tag -d v1.0.0                <span class="com"># local</span>
git push --delete origin v1.0.0  <span class="com"># remote</span>` },

        { type: 'heading', text: 'Cherry-pick — copy one commit', level: 2 },
        { type: 'para', html: '<code>git cherry-pick</code> takes a commit from anywhere and applies it on your current branch as a NEW commit. Useful for backporting fixes from <code>main</code> to a release branch.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Apply one commit by SHA</span>
git cherry-pick a1b2c3d

<span class="com"># A range (a1..a5 = three commits after a1, up to and including a5)</span>
git cherry-pick a1b2c3d^..e5f6789

<span class="com"># Cherry-pick without committing (lets you tweak before)</span>
git cherry-pick -n a1b2c3d

<span class="com"># If conflicts, fix and:</span>
git cherry-pick --continue
<span class="com"># or bail:</span>
git cherry-pick --abort` },

        { type: 'callout', kind: 'warn', html: 'Cherry-picking creates a duplicate of the commit with a different SHA. If you cherry-pick A from branch X onto Y, then later merge X into Y, Git is usually smart enough to recognize them — but you can end up with the commit appearing twice in history if not careful.' }
      ]
    },

    /* ============ Chapter 11 ============ */
    {
      id: 'git-c11',
      title: '.gitignore, attributes, hooks',
      icon: '🙈',
      sections: [
        { type: 'heading', text: 'Project-level customization', level: 1 },
        { type: 'para', html: 'Three special files (and one directory) control how Git behaves inside your repo.' },

        { type: 'heading', text: '.gitignore — keep junk out', level: 2 },
        { type: 'para', html: 'Lists patterns Git should ignore. Build artifacts, dependency folders, OS noise, secrets, log files — none of these belong in version control.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Example .gitignore</span>

<span class="com"># Dependencies</span>
node_modules/
venv/
target/

<span class="com"># Build output</span>
dist/
build/
*.class
*.o

<span class="com"># Editor / OS</span>
.DS_Store
Thumbs.db
.idea/
.vscode/
*.swp

<span class="com"># Secrets — NEVER commit</span>
.env
.env.*
*.pem
*.key

<span class="com"># Negation: do NOT ignore</span>
!.env.example

<span class="com"># Specific files in root only (leading /)</span>
/secret.txt

<span class="com"># Match any subdirectory</span>
**/temp/` },
        { type: 'callout', kind: 'warn', html: '<code>.gitignore</code> only affects <em>untracked</em> files. If a file was committed once and you add it to <code>.gitignore</code>, Git still tracks it. Fix: <code>git rm --cached &lt;file&gt;</code> then commit.' },

        { type: 'heading', text: '.gitattributes — file-level rules', level: 2 },
        { type: 'para', html: 'Tells Git how to treat specific paths — line endings, diff drivers, merge strategies, binary marking.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># Example .gitattributes</span>

* text=auto                  <span class="com"># let Git normalize line endings</span>
*.sh   text eol=lf           <span class="com"># shell scripts always LF</span>
*.bat  text eol=crlf         <span class="com"># Windows batch always CRLF</span>
*.png  binary
*.jpg  binary

<span class="com"># Don't diff certain generated files</span>
package-lock.json -diff

<span class="com"># Use a custom merge driver</span>
*.lock merge=ours` },

        { type: 'heading', text: 'Hooks — scripts on Git events', level: 2 },
        { type: 'para', html: 'Hooks are scripts that run at specific points in Git\'s lifecycle: before a commit, after a push, etc. They live in <code>.git/hooks/</code> as files named after the event (no extension).' },
        { type: 'code', lang: 'bash', code: `<span class="com"># See available hook samples</span>
ls .git/hooks/
<span class="com"># pre-commit.sample  pre-push.sample  commit-msg.sample  ...</span>

<span class="com"># Activate by renaming + making executable</span>
mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit

<span class="com"># Example: a pre-commit that runs your tests</span>
<span class="com">#!/usr/bin/env bash</span>
npm test
<span class="com"># exit code != 0 aborts the commit</span>` },

        { type: 'list', kind: 'check', items: [
          '<strong>pre-commit</strong> — run linters/formatters; abort commit if they fail',
          '<strong>commit-msg</strong> — enforce commit message format (e.g., conventional commits)',
          '<strong>pre-push</strong> — run tests before allowing push',
          '<strong>post-merge</strong> — run <code>npm install</code> after pulling (handy when deps changed)'
        ] },

        { type: 'callout', kind: 'tip', html: 'Hooks in <code>.git/hooks/</code> are NOT versioned — they\'re per-clone. Tools like <strong>Husky</strong> (Node), <strong>pre-commit</strong> (Python), and <strong>lefthook</strong> manage hooks <em>in</em> your repo so the whole team gets them automatically.' }
      ]
    },

    /* ============ Chapter 12 ============ */
    {
      id: 'git-c12',
      title: 'Best practices & workflows',
      icon: '✨',
      sections: [
        { type: 'heading', text: 'Writing commits future-you will thank you for', level: 1 },
        { type: 'para', html: 'Commits are how the next developer (often future-you) understands why the code looks the way it does. Good commits explain intent. Bad commits make code archeology a nightmare.' },

        { type: 'heading', text: 'Commit message anatomy', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># &lt;type&gt;(&lt;scope&gt;): &lt;short summary&gt;</span>
<span class="com">#</span>
<span class="com"># [optional body — explain WHY, not what]</span>
<span class="com">#</span>
<span class="com"># [optional footer — BREAKING CHANGE, refs #123]</span>

feat(auth): add password reset endpoint

The reset link is single-use and expires after 15 minutes.
Implements RFC-1234-compatible token rotation so multiple
devices can request reset in parallel without collisions.

Closes #547` },

        { type: 'list', kind: 'check', items: [
          'Imperative mood: "Add login" not "Added login" or "Adds login"',
          'Subject line ≤ 50 chars. Body wrapped at 72.',
          'Capitalize the subject. No trailing period.',
          'Body explains <em>why</em>, not what (the diff shows what)',
          'Reference issues with <code>refs #123</code> or <code>closes #123</code>'
        ] },

        { type: 'heading', text: 'Conventional Commits', level: 2 },
        { type: 'para', html: 'A widely-adopted convention. The type prefix lets tools auto-generate changelogs, version bumps, and release notes.' },
        { type: 'code', lang: 'bash', code: `feat:     a new feature                 <span class="com"># minor version bump</span>
fix:      a bug fix                      <span class="com"># patch version bump</span>
docs:     documentation only
style:    formatting, whitespace, etc.
refactor: code change, no behavior change
perf:     performance improvement
test:     adding/updating tests
build:    build system or deps
ci:       CI config changes
chore:    other (releases, housekeeping)

<span class="com"># Breaking change — major version bump</span>
feat(api)!: drop /v1 endpoints

BREAKING CHANGE: clients must migrate to /v2.` },

        { type: 'heading', text: 'Branching strategies', level: 2 },
        { type: 'para', html: 'How you organize branches is a strategic choice — there\'s no single right answer.' },

        { type: 'list', kind: 'bullet', items: [
          '<strong>GitFlow</strong> — main, develop, feature/*, release/*, hotfix/*. Structured, fits versioned products with parallel release lines. Heavy for a single deploy stream.',
          '<strong>GitHub Flow</strong> — just main + short-lived feature branches via PR. Simple, fits continuous deployment to one environment.',
          '<strong>Trunk-based development</strong> — commit to main constantly, hide unfinished work behind feature flags. Requires strong CI + flag discipline. Used at Google, Facebook, etc.',
          '<strong>Release branches</strong> — main is bleeding edge; <code>release/x.y</code> is what\'s in production. Backport fixes via cherry-pick.'
        ] },

        { type: 'callout', kind: 'tip', html: '<strong>Pick one and stick to it.</strong> The worst strategy is "ad hoc whatever feels right today." A simple, consistent flow trumps a clever, inconsistent one. Most modern web teams use GitHub Flow.' },

        { type: 'heading', text: 'General team etiquette', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Pull/rebase often. Long-lived branches mean ugly merges later.',
          'Keep PRs small. 50 lines reviews in 5 minutes. 5,000 lines reviews in 5 days (or never).',
          'Don\'t force-push to shared branches. <code>--force-with-lease</code> at least, but ideally avoid.',
          'Write the commit message before the code is fresh in your head, not after.',
          'Squash WIP and "fix typo" commits before opening a PR (<code>git rebase -i</code>)',
          'Add hooks to enforce the formatter — saves arguments in PR reviews.',
          'If your repo will accept open-source contributors: write a clear <code>CONTRIBUTING.md</code>.'
        ] },

        { type: 'divider' },

        { type: 'heading', text: 'Quick reference', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="com"># Setup</span>
git config --global user.name <span class="str">"You"</span>
git config --global user.email <span class="str">"you@x.com"</span>

<span class="com"># Daily</span>
git status
git diff
git add -p
git commit -m <span class="str">"feat: ..."</span>
git push

<span class="com"># Branches</span>
git switch -c feature/x
git switch main
git merge feature/x
git branch -d feature/x

<span class="com"># Sync</span>
git fetch
git pull --rebase
git push -u origin feature/x

<span class="com"># Undo</span>
git restore file.txt
git restore --staged file.txt
git commit --amend
git revert &lt;sha&gt;

<span class="com"># History</span>
git log --oneline --graph --all
git show &lt;sha&gt;
git blame file.txt

<span class="com"># Stash / tag / cherry-pick</span>
git stash; git stash pop
git tag -a v1.0 -m <span class="str">"release"</span>
git cherry-pick &lt;sha&gt;` },

        { type: 'callout', kind: 'success', html: 'You now know enough Git to handle 95% of day-to-day work. The remaining 5% — fixing weird merge artifacts, recovering from rebase gone wrong, signing commits — you\'ll learn one Stack Overflow trip at a time. And when in doubt: <code>git reflog</code> can almost always rescue you.' }
      ]
    }

  ]
});

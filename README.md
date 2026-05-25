# 🤖 Tutor — Learn to code, the fun way

A Duolingo-inspired interactive learning web app for **programming, computer science, and career skills**. No build step, no dependencies — pure HTML, CSS, and vanilla JavaScript.

## What's inside

**18 courses** across programming, CS foundations, career skills, and exam prep:

### Programming
- ☕ **Java** — from "Hello World" to OOP, generics, streams
- 🧩 **DSA Basics** — arrays, linked lists, trees, graphs, complexity
- ⚡ **DSA in Java** — Java Collections Framework deep dive

### CS Foundations
- 🧠 **Algorithms** — search, sort, recursion, DP, graph algos
- 🤖 **Machine Learning** — supervised, unsupervised, NNs, transformers
- 🧮 **Math for Code** — binary, modular arithmetic, logic, linear algebra

### Career
- 🔢 **Aptitude** — quantitative aptitude for placements
- 🧩 **Reasoning** — logical, verbal, non-verbal reasoning
- 🩺 **Interview Prep** — behavioral, system design, negotiation
- 🦾 **AI Engineer** — career path from foundations to LLMs to MLOps
- 💻 **Coding Interview** — DSA patterns + interview frameworks
- 🏛️ **Low-Level Design** — OOP, SOLID, design patterns, UML
- 🌐 **API Design** — REST, GraphQL, gRPC, auth, versioning
- 🥞 **MERN Stack** — MongoDB + Express + React + Node end-to-end
- 🐧 **Linux** — shell, files, processes, scripting, ops
- 🗄️ **SQL & Databases** — SELECT to window functions to NoSQL

### Exam Prep
- 🎓 **GATE CS** — all 10 GATE Computer Science subjects
- 📊 **GATE DA** — GATE Data Science & AI

**By the numbers**: ~3,800 challenges (Practice) + ~5,900 instructional sections (Learn) with 230+ inline SVG diagrams and 15 interactive visualizations.

## Two modes per course

Every course has two tabs:

### 🎯 Practice
Quiz-style gamified challenges. 9 challenge types (concept slides, multiple choice, true/false, fill-blank, tap-tokens, match-pairs, reorder-code, output-predict, type-answer). XP, hearts (lives), gems, daily streak, mascot animations, sound effects.

### 📖 Learn
Long-form chapters with text, code blocks, callouts, lists, embedded SVG diagrams, and **interactive widgets** (code steppers, array visualizers, sort animators, BST builders, hash tables, graph traversers, gradient descent — see [docs/WIDGETS.md](docs/WIDGETS.md)).

## Quick start

```bash
# Just open it
open index.html

# Or serve it (recommended — avoids file:// quirks)
python3 -m http.server 8765
# then visit http://localhost:8765
```

That's it. No `npm install`, no compile step.

## Project layout

```
tutor-web/
├── index.html                 single page, loads all JS in order
├── styles.css                 all styling
├── animations.css             all keyframes
├── app.js                     state · routing · challenge engine · learn renderer
├── data.js                    bootstrap (declares globals + mascot SVGs)
├── learn-widgets.js           15 interactive visualizations
├── courses/                   Practice content (one file per course)
│   ├── programming/          java, dsa, dsa-java
│   ├── cs-foundations/       algorithms, ml, math
│   ├── career/               most courses live here
│   └── gate/                 gate-cs, gate-da
├── learn/                    Learn content (one file per course id)
├── CLAUDE.md                 ← agent context file (auto-loaded by Claude Code)
├── README.md                 ← this file
├── ARCHITECTURE.md           internal architecture
└── docs/
    ├── ADDING_A_COURSE.md    full step-by-step playbook
    ├── WIDGETS.md            widget reference
    └── CONVENTIONS.md        conventions, validation, gotchas
```

## Stack

- **Vanilla JS** — no React, no bundler, no transpiler
- **CSS** — custom, with CSS variables for theming
- **Web Audio API** — for sound effects (no audio files)
- **Inline SVG** — every diagram is hand-authored SVG
- **localStorage** — XP, hearts, streak, read state per course

## Adding to the project

See **[docs/ADDING_A_COURSE.md](docs/ADDING_A_COURSE.md)** for the most common task. TL;DR:

1. Create `courses/career/<id>.js` with one `PUSH({...})` call
2. Create `learn/<id>.js` with one `LEARN('<id>', {...})` call
3. Add two `<script>` tags to `index.html`
4. Bump `?v=N` cache version
5. `node -c` both files; full validation in `docs/CONVENTIONS.md`

## Browser support

- **Chrome / Edge / Safari / Firefox** — latest 2 versions
- Mobile-responsive (tested down to 360px wide)

## Acknowledgments

Inspired by Duolingo's gamification approach and how it turns intimidating subjects into bite-sized, addictive practice. The character mascot ("Bit") is a hand-authored SVG.

## License

Add your license of choice.

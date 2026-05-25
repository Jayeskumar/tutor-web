# Tutor — Project Context for Claude

This file is read automatically by Claude Code on session start. Keep it concise and current.

## What this project is

**Tutor** is a Duolingo-style interactive coding & career learning web app. Pure HTML/CSS/JS — no build step, no dependencies. Open `index.html` (or serve any way) and it runs.

It has **18 courses**, each with two tabs:
- **🎯 Practice** — gamified quiz challenges (XP, hearts, streaks)
- **📖 Learn** — long-form chapters with code, callouts, SVG diagrams, and interactive widgets

Catalog at the moment:
- **Programming**: Java · DSA Basics · DSA in Java
- **CS Foundations**: Algorithms · Machine Learning · Math for Code
- **Career**: Aptitude · Reasoning · Interview Prep · AI Engineer · Coding Interview · Low-Level Design · API Design · MERN Stack · Linux · SQL & Databases
- **GATE**: GATE CS · GATE DA

**Totals**: 18 courses · 352 units · ~700 lessons · ~3,800 challenges · 380+ chapters · ~5,900 sections · ~230 SVG diagrams · 15 interactive widgets.

## Top-level layout

```
tutor-web/
├── index.html                 ← single page, loads all JS in order
├── styles.css                 ← all styling (long but organized by section)
├── animations.css             ← all keyframes
├── app.js                     ← state, routing, challenge engine, learn renderer
├── data.js                    ← bootstrap: declares `COURSES = []`, `LEARN_DATA = {}`, mascot SVGs
├── learn-widgets.js           ← 15 interactive widgets for Learn mode
├── courses/                   ← Practice course content
│   ├── programming/
│   ├── cs-foundations/
│   ├── career/                ← most courses live here
│   └── gate/
└── learn/                     ← Learn course content (one file per course id)
```

The course folder you pick is cosmetic — what matters is the `id` in the file's `PUSH({...})` call. Files inside `courses/<folder>/` push a course onto the global `COURSES` array. Files inside `learn/` register Learn content via `LEARN(courseId, {...})`.

## How to add a new course (the #1 task)

See **`docs/ADDING_A_COURSE.md`** for the full step-by-step playbook. Short version:

1. **Practice course** — create `courses/career/<id>.js` with one top-level `PUSH({ id, name, icon, color, description, units: [...] })`.
2. **Learn content** — create `learn/<id>.js` with one top-level `LEARN('<id>', { intro, chapters: [...] })`.
3. **Wire into `index.html`** — add two `<script>` tags (one under the practice section, one under the learn section).
4. **Bump cache** — `sed -i '' 's/?v=N/?v=N+1/g' index.html`.
5. **Validate** — `node -c courses/career/<id>.js && node -c learn/<id>.js`. Then run the full cross-file integrity script (see `docs/CONVENTIONS.md`).

## Critical conventions

- **Data files are JS, not JSON.** They use `PUSH({...})` and `LEARN(id, {...})` because that's simpler than module loading without a bundler. Each file is one top-level statement.
- **No imports/exports** anywhere. All globals are intentional.
- **Cache-busting via `?v=N`** on every `<script>` and `<link>` in `index.html`. Bump after every change or browsers serve stale files.
- **`const LEARN_DATA = ...`** is NOT on `window` — use `typeof LEARN_DATA !== 'undefined'` for guards.
- **`tap-tokens` `correctOrder`** is an array of **strings** that must appear in `tokens` (with enough duplicates if needed). NOT numeric indices.
- **`reorder-code` `correctOrder`** IS an array of numeric indices into `lines`.
- **`output-predict` needs `options` + numeric `correct`**. Never `accept`. Use `type-answer` for free-text.
- **Bash code inside template literals** — escape `${...}` as `\${...}` or it collides with JS template interpolation.
- **HTML entities** in template strings — use real `<` `>` for plain text and operators; use `&lt;` `&gt;` only when they actually need to appear as HTML.

## The two data schemas (concise)

### Practice course
```js
PUSH({
  id: 'unique-id', name: 'Display Name', icon: '🎯', color: '#hex',
  description: 'one-line tagline',
  units: [{
    id, name: 'Unit N · Topic', description,
    lessons: [{
      id, name, icon, xp: 10–30,
      challenges: [ /* 5–8 challenges; FIRST must be concept */ ]
    }]
  }]
});
```

Challenge types (9): `concept`, `multiple-choice`, `true-false`, `fill-blank`, `tap-tokens`, `match-pairs`, `reorder-code`, `output-predict`, `type-answer`. Full shapes documented in `docs/ADDING_A_COURSE.md`.

### Learn content
```js
LEARN('course-id', {
  intro: '...',
  chapters: [{
    id, title, icon,
    sections: [ /* heading | para | code | callout | list | image | divider | widget */ ]
  }]
});
```

## Available Learn widgets

All widgets live in `learn-widgets.js`. Reference in chapters with:
```js
{ type: 'widget', name: '<widget-name>', props: { ... } }
```

15 widgets: `code-stepper`, `array-vis`, `binary-converter`, `sort-vis`, `binary-search-vis`, `bst-vis`, `truth-table`, `stack-queue-vis`, `linked-list-vis`, `gradient-descent`, `hash-table-vis`, `graph-vis`, `tree-traversal-vis`, `sliding-window-vis`, `mod-wheel`. See `docs/WIDGETS.md` for prop shapes.

## Validation script

Run after any data change:

```bash
node -e "
const fs = require('fs');
const data = fs.readFileSync('data.js','utf8');
const courseFiles = [];
['programming','cs-foundations','career','gate'].forEach(d =>
  fs.readdirSync('courses/'+d).forEach(f => courseFiles.push('courses/'+d+'/'+f)));
const COURSES = new Function(data + '\n' + courseFiles.map(f => fs.readFileSync(f,'utf8')).join('\n') + '\nreturn COURSES;')();
const LEARN_DATA = new Function(data + '\n' + fs.readdirSync('learn').map(f => fs.readFileSync('learn/'+f,'utf8')).join('\n') + '\nreturn LEARN_DATA;')();
// ... structure checks
"
```

The longer, full validator (counts + integrity checks across all courses + learn data) is in `docs/CONVENTIONS.md` under "Validation".

## Known gotchas

- **JS template literals with bash `${var}`** — escape as `\${var}`. Same for any JS-like `${...}` shapes inside backtick strings.
- **Apostrophes inside strings** — when the outer quote is `'`, escape inner apostrophes as `\'` (e.g., `"don\'t"`). Or use template literals.
- **HTML inside template-literal `content` fields** — write real HTML; the renderer uses `innerHTML`.
- **Code-block whitespace** — `.code-block` in CSS has `white-space: pre`, so newlines and indentation in `content` are preserved. Don't reformat.
- **Cross-course ID uniqueness** — lesson IDs must be globally unique across all courses (state.progress key). Prefix with course shorthand (e.g., `mern-u3-l1`).
- **Browser cache** — `const` globals at top of scripts are NOT on `window`. Use `typeof X !== 'undefined'` checks.

## Common workflows

| Task | Where to look |
|---|---|
| Add a new course | `docs/ADDING_A_COURSE.md` |
| Add a new Learn chapter | Edit `learn/<courseId>.js`, append to `chapters: [...]` |
| Add a new challenge type | `app.js` → `renderChallenge()` + `handleCheck()`, add CSS |
| Add a new widget | `learn-widgets.js` → `Widgets['name'] = function(container, props) {...}` + CSS |
| Style updates | `styles.css` (long; organized by section comment) |
| New keyframes | `animations.css` |
| Debug "course missing" | Check `index.html` has the `<script>` tag with current `?v=N` |
| Debug "stale browser" | Bump `?v=` everywhere with `sed -i '' 's/?v=N/?v=N+1/g' index.html` |

## Where things are documented

- **CLAUDE.md** — this file (project map + critical conventions)
- **README.md** — user-facing intro
- **ARCHITECTURE.md** — internal app flow (state, screens, rendering, storage)
- **docs/ADDING_A_COURSE.md** — full playbook for the #1 task with complete schemas
- **docs/WIDGETS.md** — every widget's props + visual purpose
- **docs/CONVENTIONS.md** — naming, validation, gotchas learned the hard way

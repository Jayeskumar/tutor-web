# Tutor — Architecture

How the app actually works under the hood. Read this if you need to change behavior (not just content).

## High-level architecture

```
┌────────────────────────────────────────────────────────────┐
│ index.html — single page with 5 screens                    │
└────────────────────────────────────────────────────────────┘
          │
          ▼
┌──────────────────────────────────────────────────────────────────────┐
│  Load order (matters!):                                              │
│  1. styles.css + animations.css                                      │
│  2. data.js                  ← declares globals: COURSES, LEARN_DATA │
│  3. courses/**/*.js          ← each calls PUSH({...})                │
│  4. learn-widgets.js         ← declares Widgets                      │
│  5. learn/*.js               ← each calls LEARN(id, {...})           │
│  6. app.js                   ← state, render, event wiring           │
└──────────────────────────────────────────────────────────────────────┘
          │
          ▼
┌────────────────────────────────────────────────────────────┐
│ Single-page app — JS shows/hides 5 `.screen` divs          │
│                                                            │
│  splash ──▶ home ──▶ course (Learn or Practice)            │
│                       │                                    │
│                       ▼ on lesson start                    │
│                   lesson  ──▶ complete                     │
└────────────────────────────────────────────────────────────┘
```

## The 5 screens

All defined in `index.html` as `<section class="screen" id="screen-X">` elements. JS toggles `.active` on one at a time.

| ID | Purpose |
|---|---|
| `screen-splash` | Branding + "Get Started" button. Shown only on first visit |
| `screen-home` | Course grid + stats bar (XP, hearts, streak, gems) |
| `screen-course` | Course view with Learn/Practice tabs |
| `screen-lesson` | Active Practice lesson — one challenge at a time |
| `screen-complete` | Post-lesson celebration + stats |

Modals (out-of-hearts, quit-confirm) are `<div class="modal-backdrop">` toggled with `.active`.

## State

All state lives in a single global `state` object (`app.js`), persisted to `localStorage` under key `tutor.state.v1`:

```js
state = {
  user: { xp, hearts, maxHearts, gems, streak, lastActiveDate, name },
  progress: { '<lessonId>': 'completed', ... },  // map of lesson id → status
  soundOn: true,
  lastCourse: 'java',                            // for back-navigation
}
```

Per-course read state (Learn mode) is stored separately:
```
localStorage['tutor.read.<courseId>'] = JSON-array of read chapter ids
```

## The Practice flow

```
home → click course card → openCourse(id)
                            │
                            ├─ renderSkillTree(course)
                            └─ setCourseTab('learn' or 'practice')

course screen → click lesson node → startLesson(courseId, lessonId)
                                     │
                                     └─ lessonRun = { queue, index, mistakes, ... }

lesson screen → renderCurrentChallenge()
                 │
                 └─ renderChallenge(ch)  // switches on ch.type
                                       // returns DOM, attaches to #challengeContainer

user clicks Check → handleCheck()
                     │
                     ├─ validate answer
                     ├─ decorate UI (correct/incorrect classes)
                     ├─ play sound, spawn sparkles + floating-XP
                     └─ wait for user → click "Continue" → advance()

advance() → index++ if correct, else re-insert challenge later in queue
            → renderCurrentChallenge() OR completeLesson()

complete screen → "Continue" → openCourse(lastCourse)
```

## The Learn flow

```
course screen → click "Learn" tab → setCourseTab('learn')
                                    │
                                    └─ renderLearnView(course)

renderLearnView:
  ├─ build sidebar with chapter list (with progress dots + course progress)
  └─ renderChapter(body, currentChapter, course, learn)
                │
                └─ for each section:
                    └─ renderSection(sec)  // switches on sec.type
                        - heading / para / code / callout / list / image / divider
                        - widget → Widgets[sec.name](host, sec.props)

User clicks chapter link → goToChapter(course, idx)
                            │
                            ├─ fade out
                            ├─ currentChapterIdx = idx
                            └─ re-render

User clicks "Next" → auto-marks current chapter as read → goToChapter(idx+1)
```

## Challenge engine internals

`lessonRun` is the state object for the active lesson:

```js
lessonRun = {
  courseId, lessonId, course, lesson,
  queue: [...lesson.challenges],   // a copy — wrong answers get re-inserted
  index: 0,
  total,
  mistakes: 0,
  correctCount: 0,
  startedAt: Date.now(),
  currentChallenge: null,
  answered: false,                 // true after Check is clicked
  answerCorrect: false,
  answerData: null,                // user's input (varies by type)
}
```

### Per-type input format (what gets stored in `answerData`)

| Type | answerData value |
|---|---|
| `concept` | `null` (auto-correct; just "Continue") |
| `multiple-choice` | index of selected option |
| `true-false` | `true` or `false` |
| `fill-blank` | the selected token string |
| `tap-tokens` | array of selected token strings (order matters) |
| `match-pairs` | set automatically when all pairs match |
| `reorder-code` | array of original-line indices in user's order |
| `output-predict` | index of selected option (same as multiple-choice) |
| `type-answer` | the typed string |

`handleCheck()` validates each type against the challenge's `correct` / `correctAnswer` / `correctOrder` / `accept` fields.

### Wrong-answer behavior

Incorrect answers DO NOT advance. The challenge is spliced out of the queue at the current index and re-inserted at `index + 2` (clamped), so it appears again 2 challenges later. Wrong answers also cost a heart and shake the container.

When `state.user.hearts === 0`, the out-of-hearts modal opens.

## Render helpers

`app.js` has a small `el(tag, props, ...children)` helper used everywhere:

```js
const div = el('div', { class: 'foo', onclick: handler, html: '<b>raw</b>' }, ...);
```

- Strings become text nodes
- DOM nodes are appended as-is
- `class`, `html`, and any `on*` event prop are handled specially
- Everything else becomes an attribute

## Widgets system

`learn-widgets.js` defines a global `Widgets` map:

```js
const Widgets = {};
Widgets['array-vis'] = function(container, props) { ... };
```

Each widget creates its own DOM (using `w_el`, a local helper identical to `el`), wires controls, and appends to `container`. They are self-contained — no shared state.

When the Learn renderer sees `{ type: 'widget', name, props }`, it does:

```js
const host = el('div', {});
Widgets[name](host, props || {});
return host;
```

If the widget name doesn't exist, the renderer shows a callout-warn instead of crashing. See `docs/WIDGETS.md` for the full widget catalog.

## Sound (Web Audio API)

`Sound` (in `app.js`) is an IIFE returning small functions like `Sound.correct()`, `Sound.wrong()`, `Sound.xpGain()`. Each uses Web Audio oscillators — no audio files, no fetches. Toggled by the floating `🔊`/`🔇` button.

## Cache busting

Every `<script>` and `<link>` in `index.html` has a `?v=N` query string. Bump `N` after every change with:

```bash
sed -i '' 's/?v=N/?v=N+1/g' index.html
```

Without this, browsers will serve stale JS for hours/days. The `<meta http-equiv="Cache-Control">` tags also exist but are not respected everywhere.

## Why no build step?

- **Onboarding**: anyone can read every file and understand it
- **Zero dependencies**: nothing to update, nothing to break
- **Fast iteration**: edit + reload = done
- **Easy to host**: any static host works

Trade-off: file count is high (one per course/learn), but `index.html`'s explicit script tags make load order crystal clear.

## Performance notes

- Total JS payload is ~3.5MB minified-ish (a lot of inline content). Loads in <1s on local.
- Practice mode renders one challenge at a time — DOM is tiny
- Learn mode renders one chapter at a time; widgets initialize on demand
- SVG diagrams are inline (not network round-trips), so chapters render in one paint
- Widgets do NOT auto-run animations on render — user clicks a button to start

If shipping at scale: minify, gzip, lazy-load course bundles. For local/learning use, no optimization needed.

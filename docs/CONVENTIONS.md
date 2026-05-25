# Conventions & Gotchas

Lessons learned the hard way. Read once; saves hours later.

## File conventions

| Rule | Why |
|---|---|
| One top-level statement per content file (`PUSH({...})` or `LEARN(id, {...})`) | No bundler — globals are intentional |
| No `import` / `export` / `require` anywhere | Same reason |
| No CommonJS / ESM module syntax | The browser loads via `<script>` tags |
| Use `const` for content data; the loader script reads them via `new Function(...)` | `const` works inside `Function(...)` body |
| One file per course (both `courses/` and `learn/`) | Easier to diff, review, and parallel-author |

## ID conventions

Lesson IDs are used as **keys in `state.progress`** — they MUST be globally unique across ALL courses.

Recommended pattern:

```
<courseId>-u<unitNum>-l<lessonNum>

Examples:
  java-u3-l2
  mern-u8-l1
  sql-u6-l1
  lnx-u14-l1
```

Unit IDs and chapter IDs aren't shared keys, but follow the same pattern for consistency.

## Color palette (current 18 courses)

Pick a color that visually differs from existing cards on the home page. Run this snippet if you forget what's used:

```bash
grep -h "color: '" courses/**/*.js
```

## Syntax-highlight spans (use INSIDE code blocks & inline code)

| Span | For |
|---|---|
| `<span class="kw">word</span>` | keywords: `if`, `while`, `class`, `public`, `import` |
| `<span class="ty">word</span>` | types/classes: `int`, `String`, `ArrayList`, custom class names |
| `<span class="fn">word</span>` | function/method names: `println`, `add`, `useState` |
| `<span class="str">"text"</span>` | string literals — **include the quotes** |
| `<span class="num">42</span>` | numeric literals |
| `<span class="com">// comment</span>` | comments |

Multi-line code in a `concept.content` field goes inside `<div class="code-block">...</div>`. CSS preserves whitespace there (`white-space: pre`).

## The biggest gotchas

### 1. JS template literal vs Bash/SQL `${var}`

JavaScript expands `${expr}` inside backtick template literals. So:

```js
code: `SRC="${1:-$HOME/data}"`     // ❌ JS SyntaxError
code: `SRC="\${1:-$HOME/data}"`    // ✅ literal $ preserved
```

Same for SQL `${param}` if you happen to use it.

### 2. `correctOrder` shapes — string vs index

Two challenge types both have a `correctOrder`, but they're different:

```js
// tap-tokens: STRINGS that appear in tokens[]
{ type: 'tap-tokens',
  tokens: ['if', '(', 'x', '==', '5', ')'],
  correctOrder: ['if', '(', 'x', '==', '5', ')'] }   // strings

// reorder-code: NUMERIC INDICES into lines[]
{ type: 'reorder-code',
  lines: ['line a', 'line b', 'line c'],
  correctOrder: [0, 1, 2] }                          // indices
```

### 3. `output-predict` vs `type-answer`

- `output-predict` → `options` array + numeric `correct`
- `type-answer` → `accept` array of acceptable strings

Don't mix the fields. The renderer only checks the right one for each type.

### 4. Concept-first rule

EVERY lesson must start with `{ type: 'concept', ... }`. The validator and the app both rely on this.

### 5. `_BLANK_` is a literal marker

In `fill-blank.codeLines[].html`, write the literal string `_BLANK_` where the slot should appear. The renderer replaces it. There's exactly one blank per challenge.

### 6. Browser caching of JS files

Every `<script>` and `<link>` in `index.html` has `?v=N`. Bump N after any data/code change:

```bash
# bump from 19 to 20
sed -i '' 's/?v=19/?v=20/g' index.html
```

Without this, browsers serve stale JS for hours. The `<meta>` cache-control tags don't help across all browsers.

### 7. `const` globals are NOT on `window`

```js
// at the top of data.js
const LEARN_DATA = {};

// Wrong:
if (window.LEARN_DATA) { ... }     // always undefined

// Right:
if (typeof LEARN_DATA !== 'undefined') { ... }
```

Top-level `const`/`let` in scripts goes into a "script scope" visible to other scripts as bare names, but NOT as `window.X`.

### 8. HTML escaping inside template literals

Inside `content: \`...\``:

| Want to show | Write |
|---|---|
| Less-than as text/operator | real `<` (e.g., `a < b`) |
| Less-than as HTML (showing `<div>`) | `&lt;div&gt;` |
| `&` literal character | `&amp;` |
| `${name}` literal | `\${name}` |

### 9. Empty array vs missing property

The validator distinguishes `tokens: []` from missing `tokens`. If a challenge type requires a field, provide an empty array rather than omitting — but most validators will catch either way.

## Validation script (run after every change)

Paste into a terminal:

```bash
node -e "
const fs = require('fs');
const data = fs.readFileSync('data.js','utf8');

// Practice — load all courses
const courseFiles = [];
['programming','cs-foundations','career','gate'].forEach(d =>
  fs.readdirSync('courses/'+d).forEach(f => courseFiles.push('courses/'+d+'/'+f)));
const COURSES = new Function(data + '\n' + courseFiles.map(f => fs.readFileSync(f,'utf8')).join('\n') + '\nreturn COURSES;')();

// Learn — load all chapters
const LEARN_DATA = new Function(data + '\n' + fs.readdirSync('learn').map(f => fs.readFileSync('learn/'+f,'utf8')).join('\n') + '\nreturn LEARN_DATA;')();

// Totals
let pU=0, pL=0, pC=0;
for (const c of COURSES) { pU += c.units.length; for (const u of c.units) { pL += u.lessons.length; for (const l of u.lessons) pC += l.challenges.length; } }
let lCh=0, lSec=0, lWid=0, lSvg=0;
for (const id in LEARN_DATA) for (const ch of LEARN_DATA[id].chapters) { lCh++; for (const s of ch.sections) { lSec++; if (s.type==='widget') lWid++; if (s.type==='image') lSvg++; } }
console.log('Practice: ' + COURSES.length + ' courses · ' + pU + ' units · ' + pL + ' lessons · ' + pC + ' challenges');
console.log('Learn:    ' + Object.keys(LEARN_DATA).length + ' courses · ' + lCh + ' chapters · ' + lSec + ' sections · ' + lWid + ' widgets · ' + lSvg + ' SVGs');

// Integrity
const seen = new Set(); let dup = null;
let bad = 0;
for (const c of COURSES) for (const u of c.units) for (const l of u.lessons) {
  if (seen.has(l.id)) dup = l.id; seen.add(l.id);
  if (!l.challenges[0] || l.challenges[0].type !== 'concept') { console.log('not concept-first:', l.id); bad++; }
  for (const ch of l.challenges) {
    if ((ch.type==='multiple-choice'||ch.type==='output-predict') &&
        (typeof ch.correct !== 'number' || ch.correct < 0 || ch.correct >= (ch.options||[]).length))
      { console.log('bad correct:', l.id+':'+ch.type); bad++; }
    if (ch.type==='reorder-code' &&
        (!Array.isArray(ch.correctOrder) || ch.correctOrder.length !== (ch.lines||[]).length))
      { console.log('bad reorder:', l.id); bad++; }
    if (ch.type==='fill-blank' && (!ch.tokens || !ch.tokens.includes(ch.correctAnswer)))
      { console.log('fill-blank correct not in tokens:', l.id); bad++; }
    if (ch.type==='tap-tokens') {
      const tally={}, need={};
      for (const x of (ch.tokens||[])) tally[x]=(tally[x]||0)+1;
      for (const x of (ch.correctOrder||[])) need[x]=(need[x]||0)+1;
      for (const k of Object.keys(need)) if (!tally[k] || tally[k] < need[k]) { console.log('tap missing:', l.id+':'+k); bad++; break; }
    }
  }
}
console.log('cross-course collision:', dup || 'none');
console.log('total issues:', bad);
"
```

Healthy output:

```
Practice: 18 courses · 352 units · 696 lessons · 3777 challenges
Learn:    18 courses · 382 chapters · 5872 sections · 79 widgets · 231 SVGs
cross-course collision: none
total issues: 0
```

## Style nudges

- **Tone**: friendly + concrete > formal + abstract. "Two pointers is one of the most common patterns" beats "The two-pointer technique constitutes a frequently-employed algorithmic strategy."
- **Length**: each `concept` slide should fit in one viewport without scrolling. If it doesn't, split it.
- **Variety**: don't lean on `multiple-choice` for every challenge. Each lesson should mix at least 3-4 different types from the 9 available.
- **Explanations**: every non-concept challenge needs an `explanation` field. Use them — they're shown after the user answers.
- **Worked examples** beat abstract definitions. Show, then explain.

## Deployment

Static-host anywhere. Tested:
- `python3 -m http.server` (local)
- GitHub Pages
- Netlify / Vercel / Cloudflare Pages — drag-and-drop, no config
- Any S3 + CloudFront / nginx

No env vars, no secrets, no API keys. Everything client-side.

## Performance notes

If file count or total JS size gets uncomfortable:

- Total JS is ~3.5MB raw; gzipped ~600KB. Acceptable for an "all-in-one" page
- Could split into per-course bundles loaded on demand (Practice course bytes don't need to load until the user enters that course)
- Could move SVGs to separate files with `<img>` references (loses inline-styling benefits)
- Could lazy-load Learn chapters by chapter id

None of these are needed for current usage. Optimize only if shipping at scale.

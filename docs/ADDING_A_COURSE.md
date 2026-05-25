# Adding a New Course — Step-by-Step Playbook

This is the most common task. Follow these steps in order.

## Quick checklist

- [ ] 1. Pick `id`, `name`, `icon`, `color`
- [ ] 2. Create `courses/<folder>/<id>.js` with `PUSH({...})`
- [ ] 3. Create `learn/<id>.js` with `LEARN('<id>', {...})`
- [ ] 4. Add two `<script>` tags to `index.html`
- [ ] 5. Bump `?v=N` cache busters
- [ ] 6. `node -c` both files
- [ ] 7. Run cross-course validator (`docs/CONVENTIONS.md`)
- [ ] 8. Hard-refresh the browser to verify

---

## Step 1 — Identity

Pick four things:

| Field | Example | Notes |
|---|---|---|
| `id` | `'redis'` | Unique across all courses. Used as a key in localStorage. Stable forever once shipped. |
| `name` | `'Redis'` | Display name on the card |
| `icon` | `'🔴'` | A single emoji |
| `color` | `'#d32f2f'` | Hex color. Must visually differ from existing course cards |

**Color conflict check** — current palette in use:

```
Java         #f89820   DSA          #00b8a9   DSA-Java     #ff6b6b
Algorithms   #845ec2   ML           #4d96ff   Math         #ffc75f
Aptitude     #ff6f61   Reasoning    #9b59b6   Interview    #26a69a
AI Engineer  #00bcd4   GATE CS      #3f51b5   GATE DA      #00897b
Coding Iview #e53935   LLD          #37474f   API Design   #ec407a
MERN         #00c853   Linux        #33691e   SQL & DB     #1976d2
```

## Step 2 — Practice course

Create `courses/<folder>/<id>.js` (pick the folder that fits: `programming`, `cs-foundations`, `career`, or `gate`).

```js
PUSH({
  id: 'YOUR-ID',
  name: 'Display Name',
  icon: '🎯',
  color: '#hexcolor',
  description: 'One-line tagline — shown on the home card.',
  units: [

    {
      id: 'YOUR-ID-u1',
      name: 'Unit 1 · Topic',
      description: 'Short subtitle',
      lessons: [
        {
          id: 'YOUR-ID-u1-l1',
          name: 'Lesson name',
          icon: '👋',
          xp: 15,                      // 10–30; harder = more
          challenges: [
            // FIRST challenge MUST be a concept slide
            { type: 'concept', title: '...', content: `<p>HTML...</p>` },
            // ... 4–7 more challenges, mix the 8 other types
          ]
        }
      ]
    }

  ]
});
```

### The 9 challenge types

#### 1. `concept` — teaching slide (every lesson starts with one)
```js
{
  type: 'concept',
  title: 'Slide title',
  content: `<p>HTML with <strong>bold</strong>, <code>code</code>, lists.
<div class="code-block"><span class="kw">int</span> x = <span class="num">42</span>;</div>
<p>More text. Use the syntax-highlight span classes.</p>`
}
```

#### 2. `multiple-choice`
```js
{
  type: 'multiple-choice',
  prompt: 'Question text — may include <code>inline code</code>.',
  options: [
    { text: 'option text', code: false },
    { text: 'System.out.println', code: true },   // monospace styling
  ],
  correct: 1,        // 0-indexed
  explanation: 'Why the answer is correct (shown after answering)'
}
```

#### 3. `true-false`
```js
{
  type: 'true-false',
  statement: 'Java is case-sensitive. <code>Foo</code> ≠ <code>foo</code>.',
  correct: true,
  explanation: '...'
}
```

#### 4. `fill-blank` (token bank fills a slot)
```js
{
  type: 'fill-blank',
  prompt: 'Complete the line.',
  codeLines: [
    { html: '<span class="ty">System</span>.out.<span class="fn">_BLANK_</span>(<span class="str">"Hi"</span>);' }
  ],
  tokens: ['println', 'print', 'log', 'write'],   // 4–6 with distractors
  correctAnswer: 'println',
  explanation: '...'
}
```
**Rules:** `_BLANK_` is the literal marker for the slot (one per challenge). `correctAnswer` must appear in `tokens`.

#### 5. `tap-tokens` (build a statement by tapping in order)
```js
{
  type: 'tap-tokens',
  prompt: 'Build a print statement.',
  tokens: ['System', '.', 'out', '.', 'println', '(', '"Hi"', ')', ';', 'console', 'log'],
  correctOrder: ['System', '.', 'out', '.', 'println', '(', '"Hi"', ')', ';'],
  explanation: '...'
}
```
**Rules:** `correctOrder` values must all appear in `tokens` with enough duplicates. If `correctOrder` repeats a token (e.g., two dots), `tokens` must contain two of that string. **`correctOrder` is strings, NOT indices.**

#### 6. `match-pairs` (typically 4 pairs)
```js
{
  type: 'match-pairs',
  prompt: 'Match keyword to meaning.',
  leftLabel: 'Keyword',
  rightLabel: 'Meaning',
  pairs: [
    { left: 'public',  right: 'accessible everywhere' },
    { left: 'private', right: 'only inside the class' },
    { left: 'static',  right: 'belongs to the class' },
    { left: 'final',   right: 'cannot be changed' }
  ]
}
```

#### 7. `reorder-code`
```js
{
  type: 'reorder-code',
  prompt: 'Reorder these lines.',
  lines: [
    '<span class="kw">int</span> i = <span class="num">0</span>;',
    'i++;',
    '<span class="ty">System</span>.out.<span class="fn">println</span>(i);'
  ],
  correctOrder: [0, 1, 2]    // numeric indices into `lines`
}
```
**Rules:** `correctOrder` IS numeric indices (different from `tap-tokens`).

#### 8. `output-predict`
```js
{
  type: 'output-predict',
  prompt: 'What does this print?',
  code: `<span class="ty">int</span> x = <span class="num">5</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(x * <span class="num">2</span>);`,
  options: ['5', '10', '52', 'error'],
  correct: 1,
  explanation: '...'
}
```
**Rules:** Always has `options` array + numeric `correct`. **Never use `accept` here** (that belongs to `type-answer`).

#### 9. `type-answer` (free text)
```js
{
  type: 'type-answer',
  prompt: 'What keyword declares a constant in Java?',
  code: '',                                       // optional code block above input
  accept: ['final'],                              // case-insensitive
  explanation: '...'
}
```

### Syntax highlighting (use INSIDE code-related fields)

| Span | Purpose | Example |
|---|---|---|
| `<span class="kw">word</span>` | Keywords | `if`, `public`, `return` |
| `<span class="ty">word</span>` | Types/classes | `int`, `String`, `ArrayList` |
| `<span class="fn">word</span>` | Function/method names | `println`, `add` |
| `<span class="str">"text"</span>` | String literals (with quotes) | `"hello"` |
| `<span class="num">42</span>` | Numeric literals | `42`, `3.14` |
| `<span class="com">// text</span>` | Comments | `// note` |

Wrap multi-line code in `<div class="code-block">...</div>` inside `concept.content`.

## Step 3 — Learn content

Create `learn/<id>.js`:

```js
LEARN('YOUR-ID', {
  intro: 'One-line tagline shown above the chapter list.',
  chapters: [

    {
      id: 'YOUR-ID-c1',
      title: 'Chapter Title',
      icon: '👋',
      sections: [
        { type: 'heading', text: 'Big Heading', level: 1 },
        { type: 'para', html: 'Body with <strong>bold</strong>, <code>inline</code>, <em>italic</em>.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> x = <span class="num">5</span>;` },
        { type: 'callout', kind: 'info', html: 'Did you know...' },
        { type: 'list', kind: 'check', items: ['point one', 'point two'] },
        { type: 'image', alt: 'description', svg: `<svg viewBox="0 0 600 200">...</svg>` },
        { type: 'divider' },
        { type: 'widget', name: 'code-stepper', props: { lines: [...], steps: [...] } }
      ]
    }

  ]
});
```

### Section types

| Type | Required fields | Notes |
|---|---|---|
| `heading` | `text`, `level: 1\|2\|3` | H2s auto-populate the mini-TOC if a chapter has ≥3 |
| `para` | `html` | Inline HTML allowed |
| `code` | `lang`, `code` | Use highlight spans; wrap multi-line in backticks |
| `callout` | `kind`, `html` | kinds: `info`, `tip`, `warn`, `danger`, `success` |
| `list` | `kind`, `items` | kinds: `bullet`, `numbered`, `check` |
| `image` | `alt`, `svg` | Inline SVG (no external refs!) |
| `divider` | — | Horizontal rule |
| `widget` | `name`, `props` | See `docs/WIDGETS.md` for available widgets and their props |

### Style guidelines

- Aim for **8–12 sections per chapter** with a mix of types
- Every chapter should have **at least one** widget OR SVG diagram
- Open with a `heading` (level 1)
- 1–2 callouts per chapter feels right
- Code blocks should use real highlight spans, not just raw text

## Step 4 — Wire into `index.html`

Find these blocks in `index.html` and add your two new `<script>` tags. Match the existing version number (or bump per Step 5).

```html
<!-- career -->
<script src="courses/career/aptitude.js?v=N"></script>
...
<script src="courses/career/sql.js?v=N"></script>
<script src="courses/career/YOUR-ID.js?v=N"></script>   ← add here

<!-- learn mode -->
<script src="learn-widgets.js?v=N"></script>
<script src="learn-data.js?v=N"></script>
<script src="learn/java.js?v=N"></script>
...
<script src="learn/sql.js?v=N"></script>
<script src="learn/YOUR-ID.js?v=N"></script>            ← add here
```

## Step 5 — Bump cache version

```bash
# Increment ALL ?v= entries by 1
sed -i '' 's/?v=N/?v=N+1/g' index.html
```

Replace `N` with the current number. Find it with `grep "?v=" index.html | head -1`.

## Step 6 — Validate syntax

```bash
node -c courses/career/YOUR-ID.js && echo "practice OK"
node -c learn/YOUR-ID.js && echo "learn OK"
```

If you get `SyntaxError: Missing } in template expression`, you have unescaped `${...}` inside a template literal (common with bash/SQL code) — escape as `\${...}`.

## Step 7 — Cross-course integrity

Run this one-liner to catch ID collisions, missing concept-firsts, broken references:

```bash
node -e "
const fs = require('fs');
const data = fs.readFileSync('data.js','utf8');
const files = [];
['programming','cs-foundations','career','gate'].forEach(d =>
  fs.readdirSync('courses/'+d).forEach(f => files.push('courses/'+d+'/'+f)));
const COURSES = new Function(data + '\n' + files.map(f => fs.readFileSync(f,'utf8')).join('\n') + '\nreturn COURSES;')();

// Cross-course lesson ID uniqueness
const seen = new Set(); let dup = null;
for (const c of COURSES) for (const u of c.units) for (const l of u.lessons) {
  if (seen.has(l.id)) dup = l.id; seen.add(l.id);
}
console.log('cross-course collision:', dup || 'none');

// Concept-first check + answer-reference check
let bad = 0;
for (const c of COURSES) for (const u of c.units) for (const l of u.lessons) {
  if (!l.challenges[0] || l.challenges[0].type !== 'concept') { console.log('not concept-first:', l.id); bad++; }
  for (const ch of l.challenges) {
    if ((ch.type==='multiple-choice'||ch.type==='output-predict') &&
        (typeof ch.correct !== 'number' || ch.correct < 0 || ch.correct >= (ch.options||[]).length))
      { console.log('bad correct ref:', l.id+':'+ch.type); bad++; }
    if (ch.type==='reorder-code' &&
        (!Array.isArray(ch.correctOrder) || ch.correctOrder.length !== (ch.lines||[]).length))
      { console.log('bad reorder:', l.id); bad++; }
    if (ch.type==='fill-blank' && (!ch.tokens || !ch.tokens.includes(ch.correctAnswer)))
      { console.log('fillblank correct not in tokens:', l.id); bad++; }
    if (ch.type==='tap-tokens') {
      const tally={}, need={};
      for (const x of (ch.tokens||[])) tally[x]=(tally[x]||0)+1;
      for (const x of (ch.correctOrder||[])) need[x]=(need[x]||0)+1;
      for (const k of Object.keys(need)) if (!tally[k] || tally[k] < need[k]) { console.log('tap missing:', l.id+':'+k); bad++; break; }
    }
  }
}
console.log('total issues:', bad);
"
```

## Step 8 — Hard-refresh the browser

```
Cmd+Shift+R  (Mac)
Ctrl+Shift+R (Windows/Linux)
```

Then click the new course card. Both **Learn** and **Practice** tabs should be populated.

---

## Common gotchas (read these once!)

### Bash / SQL `${var}` inside template literals
JavaScript will try to interpolate `${var}` inside backticks. Escape:
```js
// BAD
code: `SRC="${1:-$HOME}"`   // SyntaxError

// GOOD
code: `SRC="\${1:-$HOME}"`  // literal $ kept
```

### Cross-course lesson IDs
Lesson IDs are used as keys in `state.progress` — they MUST be unique across ALL courses. Prefix with course shorthand:
- ✅ `mern-u3-l1`, `lnx-u7-l2`, `sql-u4-l1`
- ❌ `u3-l1` (collides with other courses)

### Apostrophes in strings
Single quotes inside `'...'` strings:
```js
explanation: 'don\'t use bare apostrophes'         // escape
explanation: "don't worry about apostrophes"        // or double-quote outer
explanation: `don't worry about apostrophes either` // or template literal
```

### HTML entities
Inside `content` template literals, write real HTML:
- Plain text comparisons (`a < b`): use real `<` and `>` — they don't parse as HTML
- Actual HTML tag examples (showing `<div>`): use `&lt;div&gt;`
- The `&` character itself: `&amp;`

### Concept slide MUST be first
Every lesson must start with a `{ type: 'concept', ... }` challenge. The validator and the app both rely on this.

### `?v=` after every file change
Browsers cache scripts aggressively. If you save changes but don't bump `?v=N`, you'll spend an hour debugging "why isn't my change showing" — it's already saved, just cached.

### Don't import or export
No `module.exports`, no ES imports. Each file is one top-level statement (`PUSH(...)` or `LEARN(...)`). Globals are intentional.

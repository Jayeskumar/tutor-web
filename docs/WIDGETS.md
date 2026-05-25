# Learn-Mode Widgets — Reference

All widgets are defined in `learn-widgets.js`. Use them in Learn chapters like this:

```js
{ type: 'widget', name: '<widget-name>', props: { ... } }
```

If a widget name doesn't exist, the renderer shows a warning callout (no crash).

---

## 1. `code-stepper`

**Step through code line by line with variable state.** Best for explaining recursion, loops, algorithms.

```js
{ type: 'widget', name: 'code-stepper', props: {
  lines: [
    '<span class="ty">int</span> sum = <span class="num">0</span>;',
    '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i &lt;= <span class="num">4</span>; i++) {',
    '  sum = sum + i;',
    '}',
    '<span class="ty">System</span>.out.<span class="fn">println</span>(sum);'
  ],
  steps: [
    { line: 0, vars: { sum: 0 }, note: 'sum starts at 0.' },
    { line: 1, vars: { sum: 0, i: 1 }, note: 'Enter loop with i = 1.' },
    { line: 2, vars: { sum: 1, i: 1 }, note: 'sum = 0 + 1.' },
    // ...
    { line: 4, vars: { sum: 10 }, note: 'Print 10.' }
  ]
}}
```

**Props:**
- `lines` — array of HTML strings (use syntax-highlight spans)
- `steps` — array of `{ line: <index>, vars: {name: value, ...}, note: '...' }`

UI: Reset / Prev / Play / Next buttons + step counter.

---

## 2. `array-vis`

**Animated array with push/pop/shift/unshift controls.** Best for explaining arrays vs linked lists, time complexities of front vs back operations.

```js
{ type: 'widget', name: 'array-vis', props: { values: [10, 20, 30, 40, 50] } }
```

**Props:**
- `values` — initial array of numbers
- `readonly` — `true` to hide controls (default `false`)

---

## 3. `binary-converter`

**Toggle bits, see decimal/hex/binary live.** Best for binary chapters, bitwise operations.

```js
{ type: 'widget', name: 'binary-converter', props: { bits: 8 } }
```

**Props:**
- `bits` — number of bits (default `8`)

---

## 4. `sort-vis`

**Bar-chart sort animator** — bubble, selection, insertion. Best for sorting chapters.

```js
{ type: 'widget', name: 'sort-vis', props: { values: [29, 10, 14, 37, 13, 5, 41, 23] } }
```

**Props:**
- `values` — initial unsorted array (numbers; sized to bar height)

UI: Reset / Bubble / Selection / Insertion / Shuffle buttons. Status line shows current operation.

---

## 5. `binary-search-vis`

**Animated binary search on sorted array.** Best for the "binary search" chapter.

```js
{ type: 'widget', name: 'binary-search-vis', props: {
  sorted: [3, 7, 12, 18, 23, 30, 36, 42, 48, 55, 61, 70],
  target: 36
}}
```

**Props:**
- `sorted` — array (will be re-sorted defensively)
- `target` — value to search for

UI: target input + Search button. Shows lo/hi/mid markers, step count.

---

## 6. `bst-vis`

**Interactive Binary Search Tree.** Insert values, see structure, run in-order traversal.

```js
{ type: 'widget', name: 'bst-vis', props: {} }
```

**Props:** none (sample button loads a demo tree).

UI: number input + Insert / In-order / Clear / Sample buttons. SVG tree rendering.

---

## 7. `truth-table`

**Live truth table for any boolean expression.** Best for logic / boolean algebra chapters.

```js
{ type: 'widget', name: 'truth-table', props: {
  vars: ['A', 'B'],
  expr: 'A && B'
}}
```

**Props:**
- `vars` — array of single-letter variable names
- `expr` — JS-style boolean expression using `vars` (uses `&&`, `||`, `!`)

The widget builds a `new Function(...vars, 'return (' + expr + ');')` internally — be careful with user input.

---

## 8. `stack-queue-vis`

**Animated stack OR queue with TOP/FRONT/REAR labels.**

```js
{ type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } }
{ type: 'widget', name: 'stack-queue-vis', props: { kind: 'queue' } }
```

**Props:**
- `kind` — `'stack'` (vertical, LIFO) or `'queue'` (horizontal, FIFO)

UI: Push / Pop (or Enqueue / Dequeue) / Clear buttons.

---

## 9. `linked-list-vis`

**Build a singly-linked list visually.** Best for linked list chapters.

```js
{ type: 'widget', name: 'linked-list-vis', props: {} }
```

**Props:** none.

UI: Add head / Add tail / Remove head / Clear. Each operation shows a complexity hint in the log.

---

## 10. `gradient-descent`

**Canvas-based 1D gradient descent on `f(x) = (x − 3)² + 1`.** Best for ML / calculus / optimization chapters.

```js
{ type: 'widget', name: 'gradient-descent', props: {} }
```

**Props:** none.

UI: Step / Run / Reset buttons + learning-rate slider (0.01 to 0.5).

---

## 11. `hash-table-vis`

**Hash table with chained collisions, animated put/get/remove.** Best for HashMap chapters.

```js
{ type: 'widget', name: 'hash-table-vis', props: { buckets: 8 } }
```

**Props:**
- `buckets` — number of buckets (default `8`)

UI: key + value inputs, put/get/remove buttons, sample loader. Shows hash calculation + bucket chains.

---

## 12. `graph-vis`

**SVG graph with animated BFS / DFS traversal.**

```js
{ type: 'widget', name: 'graph-vis', props: {
  nodes: [{id:'A', x:80, y:60}, {id:'B', x:200, y:30}, ...],
  edges: [['A','B'], ['A','C'], ...],
  start: 'A'
}}
```

**Props:**
- `nodes` — array of `{ id, x, y }` (x/y in 0–600 / 0–220 viewBox)
- `edges` — array of `[fromId, toId]` (undirected)
- `start` — starting node id for traversals

If omitted, defaults to a built-in 8-node sample graph.

UI: BFS / DFS / Reset buttons. Visited nodes turn green, current is gold, queue/stack contents shown.

---

## 13. `tree-traversal-vis`

**Pre-order / In-order / Post-order traversal animation on a binary tree.**

```js
{ type: 'widget', name: 'tree-traversal-vis', props: {
  tree: { v: 1, l: {v:2, l:{v:4,l:null,r:null}, r:{v:5,l:null,r:null}},
                 r: {v:3, l:{v:6,l:null,r:null}, r:{v:7,l:null,r:null}} }
}}
```

**Props:**
- `tree` — recursive `{ v, l, r }` structure (leaves have `null` children)

If omitted, uses a 7-node default tree.

UI: Preorder / Inorder / Postorder / Reset buttons. Output line shows visit order.

---

## 14. `sliding-window-vis`

**Slide a fixed-size window across an array.** Best for sliding-window pattern chapters.

```js
{ type: 'widget', name: 'sliding-window-vis', props: {
  values: [2, 1, 5, 1, 3, 2],
  windowSize: 3
}}
```

**Props:**
- `values` — array of numbers
- `windowSize` — number of cells in the window

UI: Slide / Auto / Reset. Status shows current window contents + sum/max.

---

## 15. `mod-wheel`

**Circular modular-arithmetic visualizer.** Best for modular arithmetic chapters.

```js
{ type: 'widget', name: 'mod-wheel', props: { mod: 12 } }
```

**Props:**
- `mod` — modulus (default `12`, like a clock)

UI: Number input + ±1 / +mod buttons. Wheel highlights the result of `(n % mod + mod) % mod`.

---

## Adding a new widget

In `learn-widgets.js`:

```js
Widgets['my-widget'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-my-widget' });
  // ... build DOM, wire events, append to container
  container.appendChild(wrap);
};
```

`w_el(tag, props, ...children)` is the same `el()` helper from `app.js`, scoped to widgets.

Then add styles in `styles.css` under "WIDGET STYLES" — give your widget a class prefix (e.g., `.widget-my-widget`, `.mw-cell`, etc.) so it doesn't collide with other widgets.

Update `docs/WIDGETS.md` (this file) with usage. That's it — chapters can now reference `{ type: 'widget', name: 'my-widget', props: {...} }`.

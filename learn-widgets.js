/* ============================================================
   Tutor — interactive Learn-mode widgets
   Each widget exports a render(container, props) function.
   ============================================================ */

const Widgets = {};

/* ---------------- helpers ---------------- */
function w_el(tag, props = {}, ...children) {
  const e = document.createElement(tag);
  for (const k in props) {
    if (k === 'class') e.className = props[k];
    else if (k === 'html') e.innerHTML = props[k];
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), props[k]);
    else e.setAttribute(k, props[k]);
  }
  for (const c of children) {
    if (c == null) continue;
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return e;
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ============================================================
   1) Code Stepper
   Steps through code line by line with variable state.
   props: {
     lang: 'java',
     lines: ['<line1 html>', '<line2 html>', ...],
     steps: [{ line, vars, note }, ...]   // each step highlights `line` and shows `vars`
   }
   ============================================================ */
Widgets['code-stepper'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-code-stepper' });
  const codeBox = w_el('div', { class: 'cs-code' });
  props.lines.forEach((html, i) => {
    const line = w_el('div', { class: 'cs-line', 'data-idx': i });
    line.appendChild(w_el('span', { class: 'cs-lineno' }, String(i + 1)));
    line.appendChild(w_el('span', { class: 'cs-linecode', html }));
    codeBox.appendChild(line);
  });
  wrap.appendChild(codeBox);

  const stateBox = w_el('div', { class: 'cs-state' });
  const varsRow = w_el('div', { class: 'cs-vars' });
  const noteRow = w_el('div', { class: 'cs-note' });
  stateBox.appendChild(varsRow);
  stateBox.appendChild(noteRow);
  wrap.appendChild(stateBox);

  const controls = w_el('div', { class: 'widget-controls' });
  const stepIdxLabel = w_el('span', { class: 'widget-status' }, 'Step 0 / ' + props.steps.length);
  let currentStep = -1;

  function show(idx) {
    currentStep = idx;
    codeBox.querySelectorAll('.cs-line').forEach(l => l.classList.remove('active'));
    if (idx >= 0 && idx < props.steps.length) {
      const s = props.steps[idx];
      const ln = codeBox.querySelector(`.cs-line[data-idx="${s.line}"]`);
      if (ln) ln.classList.add('active');
      varsRow.innerHTML = '';
      for (const k in (s.vars || {})) {
        const v = w_el('div', { class: 'cs-var cs-var-pop' });
        v.appendChild(w_el('span', { class: 'cs-var-key' }, k));
        v.appendChild(w_el('span', { class: 'cs-var-val' }, String(s.vars[k])));
        varsRow.appendChild(v);
      }
      noteRow.textContent = s.note || '';
      stepIdxLabel.textContent = `Step ${idx + 1} / ${props.steps.length}`;
    } else {
      varsRow.innerHTML = ''; noteRow.textContent = '';
      stepIdxLabel.textContent = `Step 0 / ${props.steps.length}`;
    }
  }

  const btnReset = w_el('button', { class: 'wbtn wbtn-sec' }, '⟲ Reset');
  const btnPrev  = w_el('button', { class: 'wbtn' }, '◀ Prev');
  const btnNext  = w_el('button', { class: 'wbtn wbtn-primary' }, 'Next ▶');
  const btnPlay  = w_el('button', { class: 'wbtn' }, '▶ Play');
  btnReset.addEventListener('click', () => show(-1));
  btnPrev.addEventListener('click', () => { if (currentStep > 0) show(currentStep - 1); });
  btnNext.addEventListener('click', () => { if (currentStep < props.steps.length - 1) show(currentStep + 1); });
  btnPlay.addEventListener('click', async () => {
    btnPlay.disabled = true;
    let i = Math.max(0, currentStep);
    while (i < props.steps.length) { show(i); i++; await sleep(900); }
    btnPlay.disabled = false;
  });
  controls.appendChild(btnReset);
  controls.appendChild(btnPrev);
  controls.appendChild(btnPlay);
  controls.appendChild(btnNext);
  controls.appendChild(stepIdxLabel);
  wrap.appendChild(controls);

  container.appendChild(wrap);
  show(-1);
};

/* ============================================================
   2) Array Visualizer
   Animated array with push/pop/insert/set/clear controls.
   props: { values: [..], readonly: false }
   ============================================================ */
Widgets['array-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-array' });
  let arr = [...(props.values || [1, 2, 3, 4, 5])];
  const stage = w_el('div', { class: 'av-stage' });
  const log = w_el('div', { class: 'av-log' });
  const idxRow = w_el('div', { class: 'av-indices' });

  function repaint(animClass) {
    stage.innerHTML = ''; idxRow.innerHTML = '';
    arr.forEach((v, i) => {
      const cell = w_el('div', { class: 'av-cell' + (animClass ? ' ' + animClass : '') });
      cell.textContent = String(v);
      stage.appendChild(cell);
      idxRow.appendChild(w_el('div', { class: 'av-idx' }, String(i)));
    });
  }

  function note(msg, kind = 'info') {
    log.textContent = msg;
    log.className = 'av-log av-log-' + kind;
  }

  function push() {
    const v = Math.floor(Math.random() * 90) + 10;
    arr.push(v);
    repaint();
    stage.lastChild?.classList.add('av-pop-in');
    note(`pushed ${v}  ·  array now has ${arr.length} elements`, 'good');
  }
  function pop() {
    if (!arr.length) { note('array is empty', 'warn'); return; }
    const v = arr.pop();
    repaint();
    note(`popped ${v}  ·  length now ${arr.length}`, 'good');
  }
  function shift() {
    if (!arr.length) { note('array is empty', 'warn'); return; }
    const v = arr.shift();
    repaint();
    note(`shifted ${v} from front  ·  O(n) — every element moved left`, 'warn');
  }
  function unshift() {
    const v = Math.floor(Math.random() * 90) + 10;
    arr.unshift(v);
    repaint();
    stage.firstChild?.classList.add('av-pop-in');
    note(`unshifted ${v} at front  ·  O(n) — all existing elements shifted right`, 'warn');
  }
  function clear() { arr = []; repaint(); note('cleared', 'info'); }

  const controls = w_el('div', { class: 'widget-controls' });
  if (!props.readonly) {
    [['push (end)', push], ['pop (end)', pop], ['unshift (front)', unshift], ['shift (front)', shift], ['clear', clear]].forEach(([t, fn]) => {
      controls.appendChild(w_el('button', { class: 'wbtn', onclick: fn }, t));
    });
  }
  wrap.appendChild(stage);
  wrap.appendChild(idxRow);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  repaint();
  note('Try the buttons — front operations are O(n), end operations are O(1).');
};

/* ============================================================
   3) Binary Converter
   Click bits to toggle; live shows decimal & hex.
   props: { bits: 8 }
   ============================================================ */
Widgets['binary-converter'] = function(container, props) {
  const bits = props.bits || 8;
  const wrap = w_el('div', { class: 'widget widget-binary' });
  const row = w_el('div', { class: 'bc-row' });
  const state = new Array(bits).fill(0);
  const out = w_el('div', { class: 'bc-out' });
  function repaint() {
    let dec = 0;
    state.forEach((b, i) => { dec += b * Math.pow(2, bits - 1 - i); });
    out.innerHTML = `<span class="bc-num"><b>Decimal:</b> ${dec}</span>` +
                    `<span class="bc-num"><b>Hex:</b> 0x${dec.toString(16).toUpperCase().padStart(Math.ceil(bits/4),'0')}</span>` +
                    `<span class="bc-num"><b>Binary:</b> ${state.join('')}</span>`;
  }
  for (let i = 0; i < bits; i++) {
    const place = Math.pow(2, bits - 1 - i);
    const cell = w_el('button', { class: 'bc-bit' });
    cell.appendChild(w_el('div', { class: 'bc-bit-val' }, '0'));
    cell.appendChild(w_el('div', { class: 'bc-bit-place' }, '2^' + (bits - 1 - i)));
    cell.appendChild(w_el('div', { class: 'bc-bit-place2' }, '= ' + place));
    cell.addEventListener('click', () => {
      state[i] = state[i] ? 0 : 1;
      cell.querySelector('.bc-bit-val').textContent = String(state[i]);
      cell.classList.toggle('on', state[i] === 1);
      repaint();
    });
    row.appendChild(cell);
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => { state.fill(0); row.querySelectorAll('.bc-bit').forEach(b => { b.classList.remove('on'); b.querySelector('.bc-bit-val').textContent = '0'; }); repaint(); } }, '⟲ Clear'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => { state.fill(1); row.querySelectorAll('.bc-bit').forEach(b => { b.classList.add('on'); b.querySelector('.bc-bit-val').textContent = '1'; }); repaint(); } }, 'All 1s'));
  wrap.appendChild(row);
  wrap.appendChild(out);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  repaint();
};

/* ============================================================
   4) Sort Visualizer (bubble / selection / insertion)
   props: { values: [..], algo: 'bubble'|'selection'|'insertion' }
   ============================================================ */
Widgets['sort-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-sort' });
  let arr = [...(props.values || [29, 10, 14, 37, 13, 5, 41, 23])];
  let original = [...arr];
  const stage = w_el('div', { class: 'sv-stage' });
  const status = w_el('div', { class: 'sv-status' });
  const max = Math.max(...arr);
  function render(active = [], sorted = []) {
    stage.innerHTML = '';
    arr.forEach((v, i) => {
      const bar = w_el('div', { class: 'sv-bar' });
      bar.style.height = (8 + (v / max) * 140) + 'px';
      if (active.includes(i)) bar.classList.add('sv-active');
      if (sorted.includes(i)) bar.classList.add('sv-sorted');
      bar.appendChild(w_el('span', { class: 'sv-val' }, String(v)));
      stage.appendChild(bar);
    });
  }
  async function bubble() {
    const sorted = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        status.textContent = `Compare arr[${j}]=${arr[j]} vs arr[${j+1}]=${arr[j+1]}`;
        render([j, j+1], sorted);
        await sleep(260);
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          status.textContent = `Swap arr[${j}] ↔ arr[${j+1}]`;
          render([j, j+1], sorted);
          await sleep(260);
        }
      }
      sorted.unshift(arr.length - i - 1);
    }
    status.textContent = 'Done ✓ — sorted in O(n²)';
    render([], arr.map((_, i) => i));
  }
  async function selection() {
    const sorted = [];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        status.textContent = `min so far = arr[${minIdx}]=${arr[minIdx]}; checking arr[${j}]=${arr[j]}`;
        render([minIdx, j], sorted);
        await sleep(220);
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        status.textContent = `Swap arr[${i}] ↔ arr[${minIdx}]`;
        render([i, minIdx], sorted);
        await sleep(280);
      }
      sorted.push(i);
    }
    status.textContent = 'Done ✓ — selection sort O(n²)';
    render([], arr.map((_, i) => i));
  }
  async function insertion() {
    const sorted = [0];
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j-1] > arr[j]) {
        status.textContent = `Shift arr[${j-1}]=${arr[j-1]} right`;
        render([j-1, j], sorted);
        await sleep(240);
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        j--;
      }
      sorted.push(i);
    }
    status.textContent = 'Done ✓ — insertion sort, near-sorted = O(n)';
    render([], arr.map((_, i) => i));
  }
  function reset() {
    arr = [...original];
    status.textContent = 'Reset';
    render();
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: reset }, '⟲ Reset'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => { reset(); bubble(); } }, '🫧 Bubble'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => { reset(); selection(); } }, '🎯 Selection'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => { reset(); insertion(); } }, '🃏 Insertion'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => {
    arr = arr.map(() => Math.floor(Math.random() * 60) + 5);
    original = [...arr]; render();
  }}, '🎲 Shuffle'));
  wrap.appendChild(stage);
  wrap.appendChild(status);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
};

/* ============================================================
   5) Binary Search Visualizer
   props: { sorted: [..], target: <num> }
   ============================================================ */
Widgets['binary-search-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-bsearch' });
  let arr = [...(props.sorted || [3, 7, 12, 18, 23, 30, 36, 42, 48, 55, 61, 70])].sort((a, b) => a - b);
  let target = props.target ?? 42;
  const stage = w_el('div', { class: 'bs-stage' });
  const log = w_el('div', { class: 'bs-log' });
  function render(lo, hi, mid) {
    stage.innerHTML = '';
    arr.forEach((v, i) => {
      const c = w_el('div', { class: 'bs-cell' });
      if (i < lo || i > hi) c.classList.add('bs-out');
      if (i === mid) c.classList.add('bs-mid');
      if (i === lo) c.classList.add('bs-lo');
      if (i === hi) c.classList.add('bs-hi');
      c.appendChild(w_el('div', { class: 'bs-val' }, String(v)));
      c.appendChild(w_el('div', { class: 'bs-i' }, String(i)));
      stage.appendChild(c);
    });
  }
  async function run() {
    let lo = 0, hi = arr.length - 1, steps = 0;
    log.textContent = `Searching for ${target}…`;
    render(lo, hi, -1);
    await sleep(500);
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      steps++;
      log.textContent = `Step ${steps}: lo=${lo}, hi=${hi}, mid=${mid}, arr[mid]=${arr[mid]}`;
      render(lo, hi, mid);
      await sleep(700);
      if (arr[mid] === target) { log.textContent = `Found ${target} at index ${mid} in ${steps} steps ✓`; return; }
      if (arr[mid] < target) lo = mid + 1; else hi = mid - 1;
    }
    log.textContent = `${target} not found (after ${steps} steps)`;
  }
  const controls = w_el('div', { class: 'widget-controls' });
  const inp = w_el('input', { type: 'number', class: 'wnum', value: String(target) });
  inp.addEventListener('input', () => { target = parseInt(inp.value, 10) || 0; });
  controls.appendChild(w_el('span', { class: 'widget-status' }, 'Target:'));
  controls.appendChild(inp);
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: run }, '🔍 Search'));
  wrap.appendChild(stage);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render(0, arr.length - 1, -1);
};

/* ============================================================
   6) Binary Search Tree Visualizer
   ============================================================ */
Widgets['bst-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-bst' });
  let root = null;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'bst-svg');
  svg.setAttribute('viewBox', '0 0 600 300');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  const log = w_el('div', { class: 'bs-log' });

  function insert(node, val) {
    if (!node) return { v: val, l: null, r: null };
    if (val < node.v) node.l = insert(node.l, val);
    else if (val > node.v) node.r = insert(node.r, val);
    return node;
  }
  function inorder(node, out) {
    if (!node) return;
    inorder(node.l, out); out.push(node.v); inorder(node.r, out);
  }
  function layout(node, x, y, dx) {
    if (!node) return [];
    const nodes = [{ v: node.v, x, y }];
    const edges = [];
    if (node.l) { edges.push({ x1: x, y1: y, x2: x - dx, y2: y + 60 }); nodes.push(...layout(node.l, x - dx, y + 60, dx / 1.8).filter(n => !n.edge).map(n => n)); }
    if (node.r) { edges.push({ x1: x, y1: y, x2: x + dx, y2: y + 60 }); nodes.push(...layout(node.r, x + dx, y + 60, dx / 1.8).filter(n => !n.edge).map(n => n)); }
    return [...edges.map(e => ({ edge: true, ...e })), ...nodes];
  }
  function render() {
    svg.innerHTML = '';
    if (!root) {
      const t = document.createElementNS(svgNS, 'text');
      t.setAttribute('x', '300'); t.setAttribute('y', '150'); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('fill', '#999'); t.setAttribute('font-size', '16');
      t.textContent = '(empty tree — insert some values)';
      svg.appendChild(t);
      return;
    }
    const items = layout(root, 300, 35, 130);
    for (const it of items) {
      if (it.edge) {
        const ln = document.createElementNS(svgNS, 'line');
        ln.setAttribute('x1', it.x1); ln.setAttribute('y1', it.y1);
        ln.setAttribute('x2', it.x2); ln.setAttribute('y2', it.y2);
        ln.setAttribute('stroke', '#7c4dff'); ln.setAttribute('stroke-width', '2');
        svg.appendChild(ln);
      }
    }
    for (const it of items) {
      if (!it.edge) {
        const c = document.createElementNS(svgNS, 'circle');
        c.setAttribute('cx', it.x); c.setAttribute('cy', it.y); c.setAttribute('r', '20');
        c.setAttribute('fill', '#7c4dff'); c.setAttribute('stroke', '#5e35d5'); c.setAttribute('stroke-width', '3');
        svg.appendChild(c);
        const t = document.createElementNS(svgNS, 'text');
        t.setAttribute('x', it.x); t.setAttribute('y', it.y + 5); t.setAttribute('text-anchor', 'middle');
        t.setAttribute('fill', 'white'); t.setAttribute('font-weight', '900'); t.setAttribute('font-size', '14');
        t.textContent = String(it.v);
        svg.appendChild(t);
      }
    }
  }
  const controls = w_el('div', { class: 'widget-controls' });
  const inp = w_el('input', { type: 'number', class: 'wnum', placeholder: 'value', value: '50' });
  controls.appendChild(inp);
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => {
    const v = parseInt(inp.value, 10);
    if (isNaN(v)) return;
    root = insert(root, v);
    log.textContent = `Inserted ${v}`;
    render();
    inp.value = '';
  } }, '+ Insert'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => {
    const out = []; inorder(root, out);
    log.textContent = 'In-order: ' + (out.length ? out.join(' → ') : '(empty)');
  } }, '📜 In-order traversal'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => {
    root = null; log.textContent = 'Tree cleared'; render();
  } }, '⟲ Clear'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => {
    root = null; [50, 30, 70, 20, 40, 60, 80, 35, 45, 75].forEach(v => root = insert(root, v));
    log.textContent = 'Loaded sample tree'; render();
  } }, '🌱 Sample'));
  wrap.appendChild(svg);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
};

/* ============================================================
   7) Truth Table
   props: { vars: ['A','B'], expr: 'A && B' }
   Evaluates expr over all combos.
   ============================================================ */
Widgets['truth-table'] = function(container, props) {
  const vars = props.vars || ['A', 'B'];
  const exprStr = props.expr || '(A && B)';
  const wrap = w_el('div', { class: 'widget widget-truth' });
  const table = w_el('table', { class: 'tt-table' });
  const head = w_el('tr');
  vars.forEach(v => head.appendChild(w_el('th', {}, v)));
  head.appendChild(w_el('th', {}, exprStr));
  table.appendChild(head);
  const rows = 1 << vars.length;
  // Build a safe evaluator
  function evaluate(env) {
    try {
      const fn = new Function(...vars, 'return (' + exprStr + ');');
      return fn(...vars.map(v => env[v])) ? 1 : 0;
    } catch { return '?'; }
  }
  for (let i = 0; i < rows; i++) {
    const env = {};
    vars.forEach((v, k) => { env[v] = ((i >> (vars.length - 1 - k)) & 1) === 1; });
    const tr = w_el('tr');
    vars.forEach(v => {
      const td = w_el('td', { class: env[v] ? 'tt-t' : 'tt-f' }, env[v] ? 'T' : 'F');
      tr.appendChild(td);
    });
    const res = evaluate(env);
    const td = w_el('td', { class: res === 1 ? 'tt-t tt-result' : 'tt-f tt-result' }, res === 1 ? 'T' : 'F');
    tr.appendChild(td);
    table.appendChild(tr);
  }
  wrap.appendChild(w_el('div', { class: 'tt-expr' }, 'Expression: ' + exprStr));
  wrap.appendChild(table);
  container.appendChild(wrap);
};

/* ============================================================
   8) Stack / Queue Visualizer
   props: { kind: 'stack'|'queue' }
   ============================================================ */
Widgets['stack-queue-vis'] = function(container, props) {
  const kind = props.kind || 'stack';
  const wrap = w_el('div', { class: 'widget widget-stack-queue' });
  let data = [];
  const stage = w_el('div', { class: 'sq-stage ' + (kind === 'queue' ? 'sq-horiz' : 'sq-vert') });
  const log = w_el('div', { class: 'sq-log' });
  function render(animClass) {
    stage.innerHTML = '';
    const items = kind === 'stack' ? [...data].reverse() : [...data];
    items.forEach((v, i) => {
      const c = w_el('div', { class: 'sq-cell' + (animClass && i === 0 ? ' ' + animClass : '') });
      c.appendChild(w_el('div', { class: 'sq-val' }, String(v)));
      if (kind === 'stack' && i === 0) c.appendChild(w_el('div', { class: 'sq-label' }, 'TOP'));
      if (kind === 'queue' && i === 0) c.appendChild(w_el('div', { class: 'sq-label' }, 'FRONT'));
      if (kind === 'queue' && i === items.length - 1 && items.length > 1) c.appendChild(w_el('div', { class: 'sq-label' }, 'REAR'));
      stage.appendChild(c);
    });
    if (!items.length) {
      stage.appendChild(w_el('div', { class: 'sq-empty' }, kind === 'stack' ? '(empty stack)' : '(empty queue)'));
    }
  }
  function push() {
    const v = Math.floor(Math.random() * 90) + 10;
    data.push(v);
    render('sq-in');
    log.textContent = (kind === 'stack' ? 'push' : 'enqueue') + ' ' + v + ' — O(1)';
  }
  function pop() {
    if (!data.length) { log.textContent = 'empty!'; return; }
    const v = kind === 'stack' ? data.pop() : data.shift();
    render();
    log.textContent = (kind === 'stack' ? 'pop' : 'dequeue') + ' → ' + v;
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: push }, kind === 'stack' ? '⬆ Push' : '➡ Enqueue'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: pop }, kind === 'stack' ? '⬇ Pop' : '↩ Dequeue'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => { data = []; render(); log.textContent = 'cleared'; } }, '⟲ Clear'));
  wrap.appendChild(stage);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
  log.textContent = kind === 'stack' ? 'LIFO — Last In, First Out' : 'FIFO — First In, First Out';
};

/* ============================================================
   9) Linked List Visualizer
   ============================================================ */
Widgets['linked-list-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-linked' });
  let head = null;
  let counter = 1;
  const stage = w_el('div', { class: 'll-stage' });
  const log = w_el('div', { class: 'sq-log' });
  function render() {
    stage.innerHTML = '';
    let n = head;
    if (!n) { stage.appendChild(w_el('div', { class: 'sq-empty' }, '(empty list)')); return; }
    while (n) {
      const cell = w_el('div', { class: 'll-node ll-in' });
      cell.appendChild(w_el('div', { class: 'll-val' }, String(n.v)));
      cell.appendChild(w_el('div', { class: 'll-next' }, 'next'));
      stage.appendChild(cell);
      if (n.next) stage.appendChild(w_el('div', { class: 'll-arrow' }, '→'));
      else stage.appendChild(w_el('div', { class: 'll-null' }, 'NULL'));
      n = n.next;
    }
  }
  function addHead() { head = { v: counter++, next: head }; log.textContent = `added at head — O(1)`; render(); }
  function addTail() {
    const node = { v: counter++, next: null };
    if (!head) head = node;
    else { let p = head; while (p.next) p = p.next; p.next = node; }
    log.textContent = `added at tail — O(n) (had to traverse)`;
    render();
  }
  function removeHead() {
    if (!head) { log.textContent = 'empty'; return; }
    const v = head.v; head = head.next; log.textContent = `removed head (${v}) — O(1)`; render();
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: addHead }, '⬅ Add head'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: addTail }, 'Add tail ➡'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: removeHead }, '✂ Remove head'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => { head = null; counter = 1; render(); log.textContent = 'cleared'; } }, '⟲ Clear'));
  wrap.appendChild(stage);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
}

/* ============================================================
   10) Gradient Descent 1D Visualizer
   ============================================================ */
Widgets['gradient-descent'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-gd' });
  const W = 480, H = 240;
  const canvas = w_el('canvas', { width: String(W), height: String(H), class: 'gd-canvas' });
  const ctx = canvas.getContext('2d');
  const status = w_el('div', { class: 'sq-log' });
  // f(x) = (x-3)^2 + 1
  function f(x) { return (x - 3) ** 2 + 1; }
  function fprime(x) { return 2 * (x - 3); }
  let x = -4, lr = 0.1, running = false;
  function drawCurve() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#fafafa'; ctx.fillRect(0, 0, W, H);
    // axes
    const ox = W / 2, oy = H - 30, scaleX = 40, scaleY = 12;
    ctx.strokeStyle = '#ccc'; ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
    // f(x) curve
    ctx.strokeStyle = '#7c4dff'; ctx.lineWidth = 2; ctx.beginPath();
    for (let px = 0; px < W; px++) {
      const xv = (px - ox) / scaleX;
      const yv = f(xv);
      const py = oy - yv * scaleY;
      if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    // current point
    const cx = ox + x * scaleX, cy = oy - f(x) * scaleY;
    ctx.fillStyle = '#ff4b4b'; ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3c3c3c'; ctx.font = 'bold 12px Nunito';
    ctx.fillText(`x = ${x.toFixed(3)}, f(x) = ${f(x).toFixed(3)}`, 10, 20);
    ctx.fillText(`f\'(x) = ${fprime(x).toFixed(3)}`, 10, 40);
  }
  async function step() {
    x = x - lr * fprime(x);
    drawCurve();
    status.textContent = `step → x = ${x.toFixed(3)} (gradient was ${fprime(x).toFixed(3)})`;
  }
  async function run() {
    if (running) return;
    running = true;
    for (let i = 0; i < 30; i++) {
      x = x - lr * fprime(x); drawCurve();
      status.textContent = `iter ${i+1}: x = ${x.toFixed(3)}, f(x) = ${f(x).toFixed(3)}`;
      await sleep(220);
      if (Math.abs(fprime(x)) < 0.001) break;
    }
    running = false;
  }
  function reset() { x = -4; drawCurve(); status.textContent = 'reset to x = -4'; }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: step }, 'Step'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: run }, '▶ Run'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: reset }, '⟲ Reset'));
  controls.appendChild(w_el('span', { class: 'widget-status' }, 'Learning rate:'));
  const lrIn = w_el('input', { type: 'range', min: '0.01', max: '0.5', step: '0.01', value: '0.1', class: 'wrange' });
  lrIn.addEventListener('input', () => { lr = parseFloat(lrIn.value); status.textContent = 'lr = ' + lr.toFixed(2); });
  controls.appendChild(lrIn);
  wrap.appendChild(canvas);
  wrap.appendChild(status);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  drawCurve();
  status.textContent = 'Minimize f(x) = (x − 3)² + 1   ·   true min at x = 3';
};

/* ============================================================
   11) Hash Table Visualizer
   props: { buckets: 8 } — shows buckets with chained collisions
   ============================================================ */
Widgets['hash-table-vis'] = function(container, props) {
  const numBuckets = props.buckets || 8;
  const wrap = w_el('div', { class: 'widget widget-hash' });
  const buckets = Array.from({length: numBuckets}, () => []);
  const stage = w_el('div', { class: 'ht-stage' });
  const log = w_el('div', { class: 'sq-log' });
  function hash(k) {
    let h = 0;
    for (let i = 0; i < k.length; i++) h = (h * 31 + k.charCodeAt(i)) | 0;
    return Math.abs(h) % numBuckets;
  }
  function render(highlightIdx) {
    stage.innerHTML = '';
    for (let i = 0; i < numBuckets; i++) {
      const row = w_el('div', { class: 'ht-row' + (highlightIdx === i ? ' ht-active' : '') });
      row.appendChild(w_el('div', { class: 'ht-idx' }, '[' + i + ']'));
      const chain = w_el('div', { class: 'ht-chain' });
      buckets[i].forEach(({k, v}, j) => {
        const cell = w_el('div', { class: 'ht-node' + (highlightIdx === i ? ' ht-in' : '') });
        cell.appendChild(w_el('span', { class: 'ht-key' }, k));
        cell.appendChild(w_el('span', { class: 'ht-arrow' }, ':'));
        cell.appendChild(w_el('span', { class: 'ht-val' }, String(v)));
        chain.appendChild(cell);
        if (j < buckets[i].length - 1) chain.appendChild(w_el('span', { class: 'll-arrow' }, '→'));
      });
      if (!buckets[i].length) chain.appendChild(w_el('span', { class: 'sq-empty' }, '∅'));
      row.appendChild(chain);
      stage.appendChild(row);
    }
  }
  function put(k, v) {
    const idx = hash(k);
    const existing = buckets[idx].find(e => e.k === k);
    if (existing) existing.v = v;
    else buckets[idx].push({k, v});
    log.textContent = `put("${k}", ${v}) → hash="${k}" % ${numBuckets} = ${idx}` + (buckets[idx].length > 1 ? ' (collision! chained)' : '');
    render(idx);
  }
  function get(k) {
    const idx = hash(k);
    const existing = buckets[idx].find(e => e.k === k);
    log.textContent = `get("${k}") → bucket ${idx} → ${existing ? existing.v : 'not found'}`;
    render(idx);
  }
  function rem(k) {
    const idx = hash(k);
    const before = buckets[idx].length;
    buckets[idx] = buckets[idx].filter(e => e.k !== k);
    log.textContent = `remove("${k}") → bucket ${idx}` + (before === buckets[idx].length ? ' (not found)' : ' (removed)');
    render(idx);
  }
  const controls = w_el('div', { class: 'widget-controls' });
  const keyIn = w_el('input', { type: 'text', class: 'wnum', placeholder: 'key', style: 'width:80px;' });
  const valIn = w_el('input', { type: 'number', class: 'wnum', placeholder: 'value', value: '0' });
  controls.appendChild(keyIn);
  controls.appendChild(valIn);
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => {
    if (!keyIn.value) return;
    put(keyIn.value, parseInt(valIn.value, 10) || 0);
    keyIn.value = '';
  } }, 'put'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => keyIn.value && get(keyIn.value) }, 'get'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => keyIn.value && rem(keyIn.value) }, 'remove'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => {
    ['apple', 'banana', 'cherry', 'date', 'elder', 'fig'].forEach((k, i) => put(k, (i + 1) * 10));
  } }, '🌱 Sample'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => {
    buckets.forEach(b => b.length = 0);
    render(); log.textContent = 'cleared';
  } }, '⟲ Clear'));
  wrap.appendChild(stage);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
  log.textContent = `${numBuckets} buckets. Hash function: Σ(char × 31^i) % ${numBuckets}.`;
};

/* ============================================================
   12) Graph BFS / DFS Visualizer
   props: { nodes: [{id, x, y}], edges: [[a,b],...], start: id }
   ============================================================ */
Widgets['graph-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-graph' });
  const nodes = props.nodes || [
    {id:'A', x:80,  y:60},
    {id:'B', x:200, y:30},
    {id:'C', x:200, y:120},
    {id:'D', x:320, y:60},
    {id:'E', x:320, y:160},
    {id:'F', x:440, y:100},
    {id:'G', x:540, y:60},
    {id:'H', x:540, y:160}
  ];
  const edges = props.edges || [['A','B'],['A','C'],['B','D'],['C','D'],['C','E'],['D','F'],['E','F'],['F','G'],['F','H']];
  const start = props.start || 'A';
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'graph-svg');
  svg.setAttribute('viewBox', '0 0 600 220');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  const log = w_el('div', { class: 'sq-log' });

  function neighbors(id) {
    const r = [];
    for (const [a,b] of edges) { if (a===id) r.push(b); if (b===id) r.push(a); }
    return r;
  }
  function render(visited = [], current = null, queue = []) {
    svg.innerHTML = '';
    // edges
    for (const [a,b] of edges) {
      const na = nodes.find(n => n.id===a), nb = nodes.find(n => n.id===b);
      const ln = document.createElementNS(svgNS, 'line');
      ln.setAttribute('x1', na.x); ln.setAttribute('y1', na.y);
      ln.setAttribute('x2', nb.x); ln.setAttribute('y2', nb.y);
      const active = visited.includes(a) && visited.includes(b);
      ln.setAttribute('stroke', active ? '#58cc02' : '#ccc');
      ln.setAttribute('stroke-width', active ? '3' : '2');
      svg.appendChild(ln);
    }
    // nodes
    for (const n of nodes) {
      const isCurrent = n.id === current;
      const isVisited = visited.includes(n.id);
      const isInQueue = queue.includes(n.id);
      const c = document.createElementNS(svgNS, 'circle');
      c.setAttribute('cx', n.x); c.setAttribute('cy', n.y); c.setAttribute('r', '20');
      c.setAttribute('fill', isCurrent ? '#ffc800' : isVisited ? '#58cc02' : isInQueue ? '#1cb0f6' : '#7c4dff');
      c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', '3');
      svg.appendChild(c);
      const t = document.createElementNS(svgNS, 'text');
      t.setAttribute('x', n.x); t.setAttribute('y', n.y+5); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('fill', 'white'); t.setAttribute('font-weight', '900');
      t.textContent = n.id;
      svg.appendChild(t);
    }
  }
  async function bfs() {
    const visited = [], q = [start];
    const order = [];
    while (q.length) {
      const node = q.shift();
      if (visited.includes(node)) continue;
      visited.push(node); order.push(node);
      render(visited, node, q);
      log.textContent = `BFS visiting: ${node}. Queue: [${q.join(', ')}]. Order so far: ${order.join(' → ')}`;
      await sleep(700);
      for (const nb of neighbors(node)) {
        if (!visited.includes(nb) && !q.includes(nb)) q.push(nb);
      }
    }
    log.textContent = `BFS complete! Order: ${order.join(' → ')}`;
    render(visited);
  }
  async function dfs() {
    const visited = [], stack = [start];
    const order = [];
    while (stack.length) {
      const node = stack.pop();
      if (visited.includes(node)) continue;
      visited.push(node); order.push(node);
      render(visited, node, stack);
      log.textContent = `DFS visiting: ${node}. Stack: [${stack.join(', ')}]. Order: ${order.join(' → ')}`;
      await sleep(700);
      for (const nb of neighbors(node).reverse()) {
        if (!visited.includes(nb)) stack.push(nb);
      }
    }
    log.textContent = `DFS complete! Order: ${order.join(' → ')}`;
    render(visited);
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: bfs }, '🔵 BFS'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: dfs }, '🔴 DFS'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => { render(); log.textContent = 'Reset — start = ' + start; } }, '⟲ Reset'));
  wrap.appendChild(svg);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
  log.textContent = `Graph with ${nodes.length} nodes. Click BFS or DFS to traverse from ${start}.`;
};

/* ============================================================
   13) Tree Traversal Animator
   props: { tree: { v, l, r }, traversal: 'inorder'|'preorder'|'postorder' }
   ============================================================ */
Widgets['tree-traversal-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-tree-traversal' });
  const root = props.tree || {
    v: 1, l: {
      v: 2, l: { v: 4, l: null, r: null }, r: { v: 5, l: null, r: null }
    },
    r: {
      v: 3, l: { v: 6, l: null, r: null }, r: { v: 7, l: null, r: null }
    }
  };
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 600 260');
  svg.setAttribute('class', 'bst-svg');
  const log = w_el('div', { class: 'sq-log' });
  const output = w_el('div', { class: 'tt-out' });
  function layout(n, x, y, dx) {
    if (!n) return [];
    const out = [{ v: n.v, x, y }];
    const edges = [];
    if (n.l) { edges.push({x1:x,y1:y,x2:x-dx,y2:y+60}); out.push(...layout(n.l, x-dx, y+60, dx/1.8)); }
    if (n.r) { edges.push({x1:x,y1:y,x2:x+dx,y2:y+60}); out.push(...layout(n.r, x+dx, y+60, dx/1.8)); }
    return [...edges.map(e => ({edge:true, ...e})), ...out];
  }
  function render(visited = [], current = null) {
    svg.innerHTML = '';
    const items = layout(root, 300, 35, 140);
    for (const it of items) if (it.edge) {
      const ln = document.createElementNS(svgNS, 'line');
      ln.setAttribute('x1', it.x1); ln.setAttribute('y1', it.y1);
      ln.setAttribute('x2', it.x2); ln.setAttribute('y2', it.y2);
      ln.setAttribute('stroke', '#7c4dff'); ln.setAttribute('stroke-width', '2');
      svg.appendChild(ln);
    }
    for (const it of items) if (!it.edge) {
      const c = document.createElementNS(svgNS, 'circle');
      c.setAttribute('cx', it.x); c.setAttribute('cy', it.y); c.setAttribute('r', '20');
      c.setAttribute('fill', current === it.v ? '#ffc800' : visited.includes(it.v) ? '#58cc02' : '#7c4dff');
      c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', '3');
      svg.appendChild(c);
      const t = document.createElementNS(svgNS, 'text');
      t.setAttribute('x', it.x); t.setAttribute('y', it.y+5); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('fill', 'white'); t.setAttribute('font-weight', '900');
      t.textContent = String(it.v);
      svg.appendChild(t);
    }
  }
  async function traverse(kind) {
    const visited = [];
    output.textContent = '';
    async function visit(n) {
      if (!n) return;
      if (kind === 'preorder') { visited.push(n.v); output.textContent = visited.join(' → '); render(visited, n.v); await sleep(700); }
      await visit(n.l);
      if (kind === 'inorder')  { visited.push(n.v); output.textContent = visited.join(' → '); render(visited, n.v); await sleep(700); }
      await visit(n.r);
      if (kind === 'postorder'){ visited.push(n.v); output.textContent = visited.join(' → '); render(visited, n.v); await sleep(700); }
    }
    log.textContent = `${kind} traversal running...`;
    await visit(root);
    log.textContent = `${kind} done. Order: ${visited.join(' → ')}`;
    render(visited);
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => traverse('preorder') }, 'Preorder'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => traverse('inorder') }, 'Inorder'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: () => traverse('postorder') }, 'Postorder'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: () => { render(); output.textContent = ''; log.textContent = 'Reset'; } }, '⟲ Reset'));
  wrap.appendChild(svg);
  wrap.appendChild(output);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render();
  log.textContent = 'Try each traversal to see the difference in visit order.';
};

/* ============================================================
   14) Sliding Window Visualizer
   props: { values: [..], windowSize: 3 }
   ============================================================ */
Widgets['sliding-window-vis'] = function(container, props) {
  const wrap = w_el('div', { class: 'widget widget-sw' });
  let arr = [...(props.values || [4, 2, 1, 7, 8, 1, 2, 8, 1, 0])];
  let k = props.windowSize || 3;
  let pos = 0;
  const stage = w_el('div', { class: 'av-stage' });
  const log = w_el('div', { class: 'sq-log' });
  function render() {
    stage.innerHTML = '';
    arr.forEach((v, i) => {
      const cell = w_el('div', { class: 'av-cell' });
      cell.textContent = String(v);
      if (i >= pos && i < pos + k) cell.style.background = 'linear-gradient(135deg, #ffc800, #e6a800)';
      stage.appendChild(cell);
    });
  }
  function step() {
    if (pos + k >= arr.length) { log.textContent = 'End reached. Restart!'; return; }
    pos++; render();
    const window = arr.slice(pos, pos + k);
    log.textContent = `Window: [${window.join(', ')}], sum=${window.reduce((a,b)=>a+b,0)}, max=${Math.max(...window)}`;
  }
  function reset() { pos = 0; render(); log.textContent = `Window of size ${k} at position 0`; }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-primary', onclick: step }, 'Slide ▶'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: async () => { reset(); while (pos + k < arr.length) { await sleep(500); step(); } } }, '▶▶ Auto'));
  controls.appendChild(w_el('button', { class: 'wbtn wbtn-sec', onclick: reset }, '⟲ Reset'));
  wrap.appendChild(stage);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  reset();
};

/* ============================================================
   15) Modular Number Wheel
   props: { mod: 12 }
   ============================================================ */
Widgets['mod-wheel'] = function(container, props) {
  const m = props.mod || 12;
  const wrap = w_el('div', { class: 'widget widget-mod' });
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 300 300');
  svg.setAttribute('class', 'mod-svg');
  const log = w_el('div', { class: 'sq-log' });
  let current = 0;
  function render(highlight = current) {
    svg.innerHTML = '';
    // outer circle
    const c = document.createElementNS(svgNS, 'circle');
    c.setAttribute('cx', '150'); c.setAttribute('cy', '150'); c.setAttribute('r', '110');
    c.setAttribute('fill', 'none'); c.setAttribute('stroke', '#7c4dff'); c.setAttribute('stroke-width', '3');
    svg.appendChild(c);
    // numbers around
    for (let i = 0; i < m; i++) {
      const angle = (i / m) * 2 * Math.PI - Math.PI / 2;
      const x = 150 + Math.cos(angle) * 110;
      const y = 150 + Math.sin(angle) * 110;
      const isHi = i === highlight;
      const dot = document.createElementNS(svgNS, 'circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.setAttribute('r', '16');
      dot.setAttribute('fill', isHi ? '#ffc800' : '#7c4dff');
      svg.appendChild(dot);
      const t = document.createElementNS(svgNS, 'text');
      t.setAttribute('x', x); t.setAttribute('y', y + 5); t.setAttribute('text-anchor', 'middle');
      t.setAttribute('fill', 'white'); t.setAttribute('font-weight', '900');
      t.textContent = String(i);
      svg.appendChild(t);
    }
    // center text
    const ct = document.createElementNS(svgNS, 'text');
    ct.setAttribute('x', '150'); ct.setAttribute('y', '155'); ct.setAttribute('text-anchor', 'middle');
    ct.setAttribute('fill', '#7c4dff'); ct.setAttribute('font-size', '30'); ct.setAttribute('font-weight', '900');
    ct.textContent = String(highlight);
    svg.appendChild(ct);
    const md = document.createElementNS(svgNS, 'text');
    md.setAttribute('x', '150'); md.setAttribute('y', '180'); md.setAttribute('text-anchor', 'middle');
    md.setAttribute('fill', '#666'); md.setAttribute('font-size', '14');
    md.textContent = 'mod ' + m;
    svg.appendChild(md);
  }
  const controls = w_el('div', { class: 'widget-controls' });
  controls.appendChild(w_el('span', { class: 'widget-status' }, 'Number:'));
  const inp = w_el('input', { type: 'number', class: 'wnum', value: '0' });
  inp.addEventListener('input', () => {
    const v = parseInt(inp.value, 10) || 0;
    const r = ((v % m) + m) % m;
    current = r; render(r);
    log.textContent = `${v} mod ${m} = ${r}`;
  });
  controls.appendChild(inp);
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => { inp.value = String(parseInt(inp.value || '0', 10) + 1); inp.dispatchEvent(new Event('input')); } }, '+1'));
  controls.appendChild(w_el('button', { class: 'wbtn', onclick: () => { inp.value = String(parseInt(inp.value || '0', 10) + m); inp.dispatchEvent(new Event('input')); } }, '+' + m));
  wrap.appendChild(svg);
  wrap.appendChild(log);
  wrap.appendChild(controls);
  container.appendChild(wrap);
  render(0);
  log.textContent = `Cycle of ${m}: any number reduces to 0..${m-1} via modulo.`;
};

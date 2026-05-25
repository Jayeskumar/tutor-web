LEARN('algo', {
  intro: 'Algorithms are recipes for solving problems with code. In this track we move beyond syntax and learn the patterns that great engineers reach for: searching, sorting, recursion, divide and conquer, dynamic programming, graphs and more. Every chapter blends intuition, animated visualizations, and Java code you can read and run.',
  chapters: [
    {
      id: 'algo-c1',
      title: 'Algorithmic Thinking',
      sections: [
        { type: 'heading', text: 'What is an Algorithm?', level: 1 },
        { type: 'para', html: 'An <b>algorithm</b> is a finite sequence of unambiguous instructions that, given some input, produces an output. Think of a recipe for chocolate cake: precise steps, definite ingredients, and a delicious result.' },
        { type: 'para', html: 'Algorithms power everything: the route your GPS picks, how Netflix ranks shows, how your phone unlocks with your face. Behind every magical app is a stack of carefully chosen algorithms.' },
        { type: 'heading', text: 'Properties of a Good Algorithm', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<b>Finiteness</b> — it must terminate after a finite number of steps.',
          '<b>Definiteness</b> — every step is precise and unambiguous.',
          '<b>Input</b> — zero or more well-defined inputs.',
          '<b>Output</b> — at least one well-defined output.',
          '<b>Effectiveness</b> — each step is basic enough to actually execute.',
          '<b>Correctness</b> — produces the right answer for every valid input.',
          '<b>Efficiency</b> — uses time and memory wisely.'
        ]},
        { type: 'callout', kind: 'info', html: 'A clever algorithm can turn an impossible computation (running for centuries) into a trivial one (running in milliseconds). The right algorithm matters more than the fastest hardware.' },
        { type: 'heading', text: 'Pseudocode: thinking before coding', level: 2 },
        { type: 'para', html: 'Pseudocode is plain-English code-like description. It lets you reason about logic without fighting syntax. Most engineers sketch in pseudocode before writing real code.' },
        { type: 'code', lang: 'text', code: `<span class="com">// Find max in an array (pseudocode)</span>
max = first element
for each element x in array:
    if x > max:
        max = x
return max` },
        { type: 'heading', text: 'A Problem-Solving Framework', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<b>Understand</b> the problem. Restate it. Identify inputs and outputs.',
          '<b>Examples</b> — work through small inputs by hand.',
          '<b>Plan</b> — choose a strategy (brute force, divide & conquer, greedy, DP...).',
          '<b>Pseudocode</b> the plan.',
          '<b>Code</b> it in your language.',
          '<b>Test</b> — edge cases (empty, one element, duplicates, huge inputs).',
          '<b>Optimize</b> — measure, then improve.'
        ]},
        { type: 'heading', text: 'A first complete algorithm', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="com">// Return the maximum value in an array.</span>
<span class="kw">public</span> <span class="kw">static</span> <span class="ty">int</span> <span class="fn">findMax</span>(<span class="ty">int</span>[] arr) {
    <span class="kw">if</span> (arr.length == <span class="num">0</span>) <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"empty"</span>);
    <span class="ty">int</span> max = arr[<span class="num">0</span>];
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] > max) max = arr[i];
    }
    <span class="kw">return</span> max;
}` },
        { type: 'widget', name: 'array-vis', props: { values: [3, 9, 1, 14, 7, 22, 5] } },
        { type: 'callout', kind: 'tip', html: 'Whenever you read an algorithm, trace it on a small example with paper and pen. You internalize logic far faster than by just reading.' },
        { type: 'para', html: 'Throughout this track, every algorithm will be presented this way: motivation, intuition, code, complexity, and edge cases. Buckle up.' }
      ]
    },
    {
      id: 'algo-c2',
      title: 'Big O Refresher with Visualizations',
      sections: [
        { type: 'heading', text: 'Why Big O?', level: 1 },
        { type: 'para', html: 'Big O notation describes how an algorithm <i>scales</i>. It tells us the shape of the runtime curve as input grows, ignoring constants and small terms.' },
        { type: 'para', html: 'An <i>O(n)</i> algorithm with input of 1 million takes roughly 1 million steps. An <i>O(n²)</i> algorithm with the same input takes 1 <i>trillion</i> steps. That difference is the difference between &ldquo;blink of an eye&rdquo; and &ldquo;coffee break&rdquo;.' },
        { type: 'heading', text: 'Growth rates compared', level: 2 },
        { type: 'image', alt: 'Growth rate chart', svg: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="300" fill="#0f1626"/>
          <g stroke="#2a3550" stroke-width="1">
            <line x1="60" y1="20" x2="60" y2="270"/>
            <line x1="60" y1="270" x2="580" y2="270"/>
          </g>
          <text x="20" y="40" fill="#9aa5b1" font-size="12">time</text>
          <text x="540" y="290" fill="#9aa5b1" font-size="12">input n</text>
          <path d="M60 270 Q 200 268, 580 260" stroke="#7ed957" fill="none" stroke-width="2"/>
          <text x="500" y="255" fill="#7ed957" font-size="12">O(log n)</text>
          <path d="M60 270 L 580 200" stroke="#5fb6ff" fill="none" stroke-width="2"/>
          <text x="500" y="195" fill="#5fb6ff" font-size="12">O(n)</text>
          <path d="M60 270 Q 300 220, 580 130" stroke="#ffd166" fill="none" stroke-width="2"/>
          <text x="500" y="125" fill="#ffd166" font-size="12">O(n log n)</text>
          <path d="M60 270 Q 350 220, 480 30" stroke="#ff7b7b" fill="none" stroke-width="2"/>
          <text x="430" y="40" fill="#ff7b7b" font-size="12">O(n²)</text>
          <path d="M60 270 L 180 30" stroke="#c77dff" fill="none" stroke-width="2"/>
          <text x="190" y="40" fill="#c77dff" font-size="12">O(2ⁿ)</text>
        </svg>` },
        { type: 'heading', text: 'Common complexity classes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>O(1)</b> — constant, like accessing array[i].',
          '<b>O(log n)</b> — binary search, balanced trees.',
          '<b>O(n)</b> — linear scan.',
          '<b>O(n log n)</b> — merge sort, heap sort.',
          '<b>O(n²)</b> — bubble, selection, insertion sort.',
          '<b>O(2ⁿ)</b> — naive recursive Fibonacci, brute force subset.',
          '<b>O(n!)</b> — generating every permutation (travelling salesman brute force).'
        ]},
        { type: 'heading', text: 'Reading code for complexity', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// O(n) — single loop</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n; i++) sum += arr[i];

<span class="com">// O(n²) — nested loops</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n; i++)
    <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j < n; j++) print(i, j);

<span class="com">// O(log n) — halving</span>
<span class="kw">while</span> (n > <span class="num">1</span>) n = n / <span class="num">2</span>;` },
        { type: 'callout', kind: 'warn', html: 'Big O is about <b>scaling</b>, not absolute speed. An O(n²) algorithm with tiny constants may beat an O(n log n) one for small inputs.' },
        { type: 'heading', text: 'Common pitfalls', level: 3 },
        { type: 'list', kind: 'bullet', items: [
          'Forgetting hidden costs in library calls (a List.contains is O(n)).',
          'Mixing best, average, and worst case carelessly.',
          'Calling an O(n) function inside another O(n) loop without noticing.',
          'Ignoring space complexity — recursion eats stack memory.'
        ]},
        { type: 'heading', text: 'Try it: which is which?', level: 2 },
        { type: 'widget', name: 'array-vis', props: { values: [1, 2, 4, 8, 16, 32, 64, 128] } },
        { type: 'para', html: 'Sizes that double or halve scream <i>logarithmic</i>. Sizes that grow in nested loops scream <i>quadratic</i>. Train your eye to spot patterns at a glance.' },
        { type: 'callout', kind: 'tip', html: 'When estimating runtime: count loops, account for recursion depth and branching factor, then keep only the largest term.' }
      ]
    },
    {
      id: 'algo-c3',
      title: 'Linear Search',
      sections: [
        { type: 'heading', text: 'The simplest search', level: 1 },
        { type: 'para', html: 'Linear search walks through the array element by element until it finds the target (or reaches the end). No assumptions, no setup, no magic — just look at everything.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="ty">int</span> <span class="fn">linearSearch</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> target) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
    }
    <span class="kw">return</span> -<span class="num">1</span>;  <span class="com">// not found</span>
}` },
        { type: 'heading', text: 'Step-by-step', level: 2 },
        { type: 'widget', name: 'code-stepper', props: {
          lines: [
            'int linearSearch(int[] arr, int target) {',
            '  for (int i = 0; i < arr.length; i++) {',
            '    if (arr[i] == target) return i;',
            '  }',
            '  return -1;',
            '}'
          ],
          steps: [
            { line: 1, vars: { arr: '[3,8,2,5]', target: 5 }, note: 'Called with target=5.' },
            { line: 2, vars: { i: 0 }, note: 'Start loop, i=0.' },
            { line: 3, vars: { i: 0, 'arr[i]': 3 }, note: '3 != 5, continue.' },
            { line: 2, vars: { i: 1 }, note: 'i becomes 1.' },
            { line: 3, vars: { i: 1, 'arr[i]': 8 }, note: '8 != 5, continue.' },
            { line: 2, vars: { i: 2 }, note: 'i becomes 2.' },
            { line: 3, vars: { i: 2, 'arr[i]': 2 }, note: '2 != 5, continue.' },
            { line: 2, vars: { i: 3 }, note: 'i becomes 3.' },
            { line: 3, vars: { i: 3, 'arr[i]': 5 }, note: 'Match! Return 3.' }
          ]
        }},
        { type: 'heading', text: 'Best, worst, average', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>Best case</b>: target is first element → O(1).',
          '<b>Worst case</b>: target is last or absent → O(n).',
          '<b>Average</b>: O(n/2), still O(n).'
        ]},
        { type: 'callout', kind: 'info', html: 'Linear search makes <b>no assumption</b> about the data: unsorted, duplicates, linked list — it works on all of them.' },
        { type: 'heading', text: 'When to use it', level: 3 },
        { type: 'list', kind: 'check', items: [
          'Small arrays where setup cost of fancier algorithms isn&apos;t worth it.',
          'Unsorted data where sorting first would cost more than the search saves.',
          'Linked structures with no random access.',
          'When clarity matters more than speed.'
        ]},
        { type: 'widget', name: 'array-vis', props: { values: [4, 12, 7, 9, 23, 1, 16, 8] } },
        { type: 'para', html: 'Even with its modest reputation, linear search appears in surprisingly many libraries — and it&apos;s the foundation for understanding more advanced searches.' }
      ]
    },
    {
      id: 'algo-c4',
      title: 'Binary Search Deep Dive',
      sections: [
        { type: 'heading', text: 'Halving the haystack', level: 1 },
        { type: 'para', html: 'Binary search is the classic divide-and-conquer search. By repeatedly halving the candidate range it finds an element in O(log n) time — but it demands a <b>sorted</b> array.' },
        { type: 'callout', kind: 'warn', html: 'The data <b>must be sorted</b>. Run binary search on unsorted data and you get garbage answers, not a clean failure.' },
        { type: 'heading', text: 'The algorithm', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Set <code>lo = 0</code>, <code>hi = n - 1</code>.',
          'While <code>lo &le; hi</code>: compute <code>mid = lo + (hi - lo) / 2</code>.',
          'If <code>arr[mid] == target</code> return <code>mid</code>.',
          'If <code>arr[mid] &lt; target</code> set <code>lo = mid + 1</code>.',
          'Else set <code>hi = mid - 1</code>.',
          'If the loop ends, return -1.'
        ]},
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="ty">int</span> <span class="fn">binarySearch</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> target) {
    <span class="ty">int</span> lo = <span class="num">0</span>, hi = a.length - <span class="num">1</span>;
    <span class="kw">while</span> (lo <= hi) {
        <span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
        <span class="kw">if</span> (a[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (a[mid] < target) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid - <span class="num">1</span>;
    }
    <span class="kw">return</span> -<span class="num">1</span>;
}` },
        { type: 'callout', kind: 'tip', html: 'Always write <code>mid = lo + (hi - lo) / 2</code> instead of <code>(lo + hi) / 2</code>. For huge arrays the latter can overflow.' },
        { type: 'heading', text: 'Visualize a search', level: 2 },
        { type: 'widget', name: 'binary-search-vis', props: { sorted: [3, 7, 12, 18, 23, 30, 36, 42, 48, 55], target: 36 } },
        { type: 'heading', text: 'Recursive form', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">bs</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> lo, <span class="ty">int</span> hi, <span class="ty">int</span> t) {
    <span class="kw">if</span> (lo > hi) <span class="kw">return</span> -<span class="num">1</span>;
    <span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
    <span class="kw">if</span> (a[mid] == t) <span class="kw">return</span> mid;
    <span class="kw">if</span> (a[mid] < t)  <span class="kw">return</span> <span class="fn">bs</span>(a, mid+<span class="num">1</span>, hi, t);
    <span class="kw">return</span> <span class="fn">bs</span>(a, lo, mid-<span class="num">1</span>, t);
}` },
        { type: 'heading', text: 'Variants you should know', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>Lower bound</b> — first index where <code>a[i] &ge; target</code>.',
          '<b>Upper bound</b> — first index where <code>a[i] &gt; target</code>.',
          '<b>First/last occurrence</b> of duplicates.',
          '<b>Binary search on answer</b> — when the answer space is monotonic.'
        ]},
        { type: 'code', lang: 'java', code: `<span class="com">// Lower bound: first index with a[i] >= target.</span>
<span class="kw">static</span> <span class="ty">int</span> <span class="fn">lowerBound</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> t) {
    <span class="ty">int</span> lo = <span class="num">0</span>, hi = a.length;
    <span class="kw">while</span> (lo < hi) {
        <span class="ty">int</span> mid = (lo + hi) >>> <span class="num">1</span>;
        <span class="kw">if</span> (a[mid] < t) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid;
    }
    <span class="kw">return</span> lo;
}` },
        { type: 'heading', text: 'Why O(log n)?', level: 3 },
        { type: 'para', html: 'Each iteration halves the search space. Starting from n elements, after k iterations only n/2ᵏ remain. The loop terminates when n/2ᵏ ≤ 1, i.e. k ≥ log₂ n. So roughly ⌈log₂ n⌉ comparisons.' },
        { type: 'image', alt: 'Binary search halving', svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="200" fill="#0f1626"/>
          <g font-family="monospace" font-size="14">
            <rect x="20" y="20" width="560" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="290" y="40" fill="#dfe7f5" text-anchor="middle">range of 16 (start)</text>
            <rect x="300" y="60" width="280" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="440" y="80" fill="#dfe7f5" text-anchor="middle">range of 8</text>
            <rect x="300" y="100" width="140" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="370" y="120" fill="#dfe7f5" text-anchor="middle">range of 4</text>
            <rect x="370" y="140" width="70" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="405" y="160" fill="#dfe7f5" text-anchor="middle">range of 2</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Edge cases', level: 3 },
        { type: 'list', kind: 'check', items: [
          'Empty array → return -1.',
          'Single element → still works.',
          'Target smaller than all → returns -1 (or 0 for lower bound).',
          'Target larger than all → returns -1 (or n for lower bound).'
        ]},
        { type: 'callout', kind: 'success', html: 'Binary search is short, elegant, and famously tricky. Bugs hide in &ldquo;mid+1&rdquo; vs &ldquo;mid&rdquo; and &ldquo;&lt;=&rdquo; vs &ldquo;&lt;&rdquo;. Memorize a template you trust.' },
        { type: 'para', html: 'Java&apos;s standard library exposes <code>Arrays.binarySearch</code> and <code>Collections.binarySearch</code> — but you should still understand the mechanics.' }
      ]
    },
    {
      id: 'algo-c5',
      title: 'Bubble Sort',
      sections: [
        { type: 'heading', text: 'The bubble', level: 1 },
        { type: 'para', html: 'Bubble sort repeatedly compares adjacent pairs and swaps them if out of order. After each pass, the largest unsorted element &ldquo;bubbles&rdquo; to the end.' },
        { type: 'widget', name: 'sort-vis', props: { values: [29, 10, 14, 37, 13, 5, 41, 23] } },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">bubbleSort</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span> n = a.length;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n - <span class="num">1</span>; i++) {
        <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j < n - <span class="num">1</span> - i; j++) {
            <span class="kw">if</span> (a[j] > a[j+<span class="num">1</span>]) {
                <span class="ty">int</span> tmp = a[j];
                a[j] = a[j+<span class="num">1</span>];
                a[j+<span class="num">1</span>] = tmp;
            }
        }
    }
}` },
        { type: 'heading', text: 'Walkthrough', level: 2 },
        { type: 'para', html: 'Take <code>[5,1,4,2]</code>. After the first pass: <code>[1,4,2,5]</code> — 5 bubbled to the right. After the next: <code>[1,2,4,5]</code> — done.' },
        { type: 'heading', text: 'Optimization: early exit', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">bubbleSortOpt</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span> n = a.length;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n - <span class="num">1</span>; i++) {
        <span class="ty">boolean</span> swapped = <span class="kw">false</span>;
        <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j < n - <span class="num">1</span> - i; j++) {
            <span class="kw">if</span> (a[j] > a[j+<span class="num">1</span>]) { <span class="com">/* swap */</span> swapped = <span class="kw">true</span>; }
        }
        <span class="kw">if</span> (!swapped) <span class="kw">break</span>;  <span class="com">// already sorted</span>
    }
}` },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Worst & average: <b>O(n²)</b> comparisons and swaps.',
          'Best case (already sorted, with optimization): <b>O(n)</b>.',
          'Space: <b>O(1)</b> — in-place.',
          'Stable: <b>yes</b> (equal elements stay in original order).'
        ]},
        { type: 'callout', kind: 'warn', html: 'Bubble sort is famously slow. It is rarely used in production — but it&apos;s pedagogically valuable as an introduction to comparison sorts.' },
        { type: 'heading', text: 'When (if ever) to use it', level: 3 },
        { type: 'list', kind: 'check', items: [
          'Tiny arrays where simplicity beats speed.',
          'Teaching tool for explaining sorting.',
          'Data that&apos;s almost sorted (optimized version is O(n)).'
        ]},
        { type: 'callout', kind: 'tip', html: 'For real workloads, prefer <code>Arrays.sort</code> in Java — it uses dual-pivot quicksort for primitives and TimSort for objects.' },
        { type: 'para', html: 'Despite its poor reputation, bubble sort introduced the key idea of element comparison sorts — and lays the groundwork for selection and insertion sort next.' }
      ]
    },
    {
      id: 'algo-c6',
      title: 'Selection Sort',
      sections: [
        { type: 'heading', text: 'Find min, swap, repeat', level: 1 },
        { type: 'para', html: 'Selection sort splits the array into a sorted prefix and unsorted suffix. Each pass it scans the suffix for the smallest element and swaps it to the boundary.' },
        { type: 'widget', name: 'sort-vis', props: { values: [64, 25, 12, 22, 11, 90, 30] } },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">selectionSort</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span> n = a.length;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n - <span class="num">1</span>; i++) {
        <span class="ty">int</span> minIdx = i;
        <span class="kw">for</span> (<span class="ty">int</span> j = i + <span class="num">1</span>; j < n; j++) {
            <span class="kw">if</span> (a[j] < a[minIdx]) minIdx = j;
        }
        <span class="ty">int</span> tmp = a[i];
        a[i] = a[minIdx];
        a[minIdx] = tmp;
    }
}` },
        { type: 'heading', text: 'Why it&apos;s called &ldquo;in-place&rdquo;', level: 2 },
        { type: 'para', html: 'Selection sort sorts the array using only a few extra variables (the index of the minimum, a temp for swapping). No auxiliary array is needed, so its memory usage is O(1).' },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Time: <b>O(n²)</b> always — even on already sorted input.',
          'Swaps: <b>O(n)</b> — fewer than bubble sort.',
          'Space: O(1) extra.',
          'Stable: <b>no</b> (the long-distance swap can reorder equal keys).'
        ]},
        { type: 'callout', kind: 'info', html: 'Selection sort makes the minimum number of swaps among the simple sorts — useful when swaps are expensive (e.g. writing to flash memory).' },
        { type: 'heading', text: 'Selection vs Bubble', level: 3 },
        { type: 'list', kind: 'bullet', items: [
          'Both O(n²) time, both simple to code.',
          'Selection: fewer swaps, not stable, always O(n²).',
          'Bubble: more swaps, stable, can detect early termination.'
        ]},
        { type: 'callout', kind: 'tip', html: 'A common interview variant: write a one-pass &ldquo;find min and max simultaneously&rdquo;. Try it!' }
      ]
    },
    {
      id: 'algo-c7',
      title: 'Insertion Sort',
      sections: [
        { type: 'heading', text: 'Sort like a card player', level: 1 },
        { type: 'para', html: 'Imagine sorting a hand of cards. You pick up one card at a time and insert it into its correct place among the cards already in your hand. That&apos;s insertion sort.' },
        { type: 'widget', name: 'sort-vis', props: { values: [5, 2, 4, 6, 1, 3] } },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">insertionSort</span>(<span class="ty">int</span>[] a) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i < a.length; i++) {
        <span class="ty">int</span> key = a[i];
        <span class="ty">int</span> j = i - <span class="num">1</span>;
        <span class="kw">while</span> (j >= <span class="num">0</span> && a[j] > key) {
            a[j + <span class="num">1</span>] = a[j];
            j--;
        }
        a[j + <span class="num">1</span>] = key;
    }
}` },
        { type: 'heading', text: 'Step by step', level: 2 },
        { type: 'para', html: 'Iteration 1: take 2, insert into [5] → [2,5]. Iteration 2: take 4, insert → [2,4,5]. Iteration 3: take 6, already in place → [2,4,5,6]. Iteration 4: take 1, slide everything right → [1,2,4,5,6].' },
        { type: 'heading', text: 'When it shines', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Small arrays (n &lt; 50 or so).',
          'Nearly sorted data — O(n) when input is almost sorted.',
          'Adaptive sort: faster as inputs become more sorted.',
          'Online algorithm: can sort a stream of incoming numbers.',
          'Stable sort: preserves order of equals.'
        ]},
        { type: 'callout', kind: 'info', html: 'Many real-world hybrid sorts (TimSort, Introsort) fall back to insertion sort on small subarrays because it&apos;s extremely fast on tiny inputs.' },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Best case: <b>O(n)</b> (input already sorted).',
          'Worst case: <b>O(n²)</b> (reverse sorted).',
          'Average: <b>O(n²)</b>.',
          'Space: O(1).'
        ]},
        { type: 'heading', text: 'Binary insertion sort', level: 3 },
        { type: 'para', html: 'You can use binary search to find the insertion position in O(log n) — but shifting elements is still O(n), so overall is still O(n²). Comparisons drop to O(n log n), useful when comparisons are expensive.' },
        { type: 'callout', kind: 'tip', html: 'In practice, insertion sort beats fancier algorithms when n is under ~16 because it has very low overhead per element.' }
      ]
    },
    {
      id: 'algo-c8',
      title: 'Merge Sort',
      sections: [
        { type: 'heading', text: 'Divide, sort, merge', level: 1 },
        { type: 'para', html: 'Merge sort is the textbook example of <b>divide and conquer</b>: split the array in half, recursively sort each half, then merge them. Result: a guaranteed O(n log n) algorithm.' },
        { type: 'image', alt: 'Merge sort divide phase', svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="260" fill="#0f1626"/>
          <g font-family="monospace" font-size="13" fill="#dfe7f5" text-anchor="middle">
            <rect x="200" y="10" width="200" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="300" y="30">[8,3,2,9,7,1,5,4]</text>
            <rect x="80" y="70" width="120" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="140" y="90">[8,3,2,9]</text>
            <rect x="400" y="70" width="120" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="460" y="90">[7,1,5,4]</text>
            <rect x="30" y="130" width="80" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="70" y="150">[8,3]</text>
            <rect x="170" y="130" width="80" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="210" y="150">[2,9]</text>
            <rect x="350" y="130" width="80" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="390" y="150">[7,1]</text>
            <rect x="490" y="130" width="80" height="30" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="530" y="150">[5,4]</text>
            <g font-size="11">
              <text x="50" y="200">[8]</text><text x="90" y="200">[3]</text>
              <text x="190" y="200">[2]</text><text x="230" y="200">[9]</text>
              <text x="370" y="200">[7]</text><text x="410" y="200">[1]</text>
              <text x="510" y="200">[5]</text><text x="550" y="200">[4]</text>
            </g>
            <text x="300" y="240" fill="#9aa5b1">divide until single elements, then merge back up</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'The merge step', level: 2 },
        { type: 'para', html: 'Given two sorted arrays, walking through them with two pointers produces a sorted union in O(n). That&apos;s the engine of merge sort.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">merge</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> l, <span class="ty">int</span> m, <span class="ty">int</span> r) {
    <span class="ty">int</span>[] L = <span class="ty">Arrays</span>.<span class="fn">copyOfRange</span>(a, l, m + <span class="num">1</span>);
    <span class="ty">int</span>[] R = <span class="ty">Arrays</span>.<span class="fn">copyOfRange</span>(a, m + <span class="num">1</span>, r + <span class="num">1</span>);
    <span class="ty">int</span> i = <span class="num">0</span>, j = <span class="num">0</span>, k = l;
    <span class="kw">while</span> (i < L.length && j < R.length) {
        a[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    }
    <span class="kw">while</span> (i < L.length) a[k++] = L[i++];
    <span class="kw">while</span> (j < R.length) a[k++] = R[j++];
}` },
        { type: 'heading', text: 'Putting it together', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">mergeSort</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> l, <span class="ty">int</span> r) {
    <span class="kw">if</span> (l >= r) <span class="kw">return</span>;
    <span class="ty">int</span> m = l + (r - l) / <span class="num">2</span>;
    <span class="fn">mergeSort</span>(a, l, m);
    <span class="fn">mergeSort</span>(a, m + <span class="num">1</span>, r);
    <span class="fn">merge</span>(a, l, m, r);
}` },
        { type: 'widget', name: 'sort-vis', props: { values: [38, 27, 43, 3, 9, 82, 10] } },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Time: <b>O(n log n)</b> — always, regardless of input order.',
          'Space: <b>O(n)</b> auxiliary array.',
          'Stable: <b>yes</b>.',
          'Not in-place (in its standard form).'
        ]},
        { type: 'callout', kind: 'info', html: 'Merge sort is the algorithm Java uses for sorting objects (via TimSort). It plays especially well with linked lists, where you can merge sort in O(1) extra space.' },
        { type: 'heading', text: 'Recursion tree analysis', level: 3 },
        { type: 'para', html: 'At each level we do O(n) merging work. There are log₂ n levels, so total work is O(n log n). The recurrence: <code>T(n) = 2T(n/2) + O(n)</code>.' },
        { type: 'heading', text: 'Linked list bonus', level: 3 },
        { type: 'para', html: 'On a linked list, merge sort uses O(1) extra space (just pointer manipulation) instead of O(n). That&apos;s why <code>LinkedList</code>-like structures love merge sort.' },
        { type: 'callout', kind: 'tip', html: 'When stability matters — e.g. sorting records by a secondary key after a primary sort — merge sort is the gold standard.' }
      ]
    },
    {
      id: 'algo-c9',
      title: 'Quick Sort',
      sections: [
        { type: 'heading', text: 'Pivot, partition, recurse', level: 1 },
        { type: 'para', html: 'Quick sort picks a pivot, partitions the array into &ldquo;less than pivot&rdquo; and &ldquo;greater than pivot&rdquo;, then recursively sorts each side. It&apos;s the fastest general-purpose sort in practice.' },
        { type: 'image', alt: 'Quick sort partition', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g font-family="monospace" font-size="14" fill="#dfe7f5">
            <text x="20" y="40">pivot = 7</text>
            <g>
              <rect x="20" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="40" y="86" text-anchor="middle">3</text>
              <rect x="60" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="80" y="86" text-anchor="middle">2</text>
              <rect x="100" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="120" y="86" text-anchor="middle">5</text>
              <rect x="140" y="60" width="40" height="40" fill="#7ed957" stroke="#5fb6ff"/><text x="160" y="86" text-anchor="middle">7</text>
              <rect x="180" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="200" y="86" text-anchor="middle">8</text>
              <rect x="220" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="240" y="86" text-anchor="middle">12</text>
              <rect x="260" y="60" width="40" height="40" fill="#1c2740" stroke="#5fb6ff"/><text x="280" y="86" text-anchor="middle">9</text>
            </g>
            <text x="20" y="130" fill="#9aa5b1">[3,2,5] &lt; 7 ≤ [8,12,9]</text>
            <text x="20" y="160" fill="#9aa5b1">recurse on each side</text>
            <text x="20" y="190" fill="#7ed957">Result: [2,3,5,7,8,9,12]</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Lomuto partition', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">partition</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> lo, <span class="ty">int</span> hi) {
    <span class="ty">int</span> pivot = a[hi];
    <span class="ty">int</span> i = lo - <span class="num">1</span>;
    <span class="kw">for</span> (<span class="ty">int</span> j = lo; j < hi; j++) {
        <span class="kw">if</span> (a[j] <= pivot) {
            i++;
            <span class="ty">int</span> t = a[i]; a[i] = a[j]; a[j] = t;
        }
    }
    <span class="ty">int</span> t = a[i+<span class="num">1</span>]; a[i+<span class="num">1</span>] = a[hi]; a[hi] = t;
    <span class="kw">return</span> i + <span class="num">1</span>;
}

<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">quickSort</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> lo, <span class="ty">int</span> hi) {
    <span class="kw">if</span> (lo < hi) {
        <span class="ty">int</span> p = <span class="fn">partition</span>(a, lo, hi);
        <span class="fn">quickSort</span>(a, lo, p - <span class="num">1</span>);
        <span class="fn">quickSort</span>(a, p + <span class="num">1</span>, hi);
    }
}` },
        { type: 'widget', name: 'sort-vis', props: { values: [10, 80, 30, 90, 40, 50, 70] } },
        { type: 'heading', text: 'Pivot strategies', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>First / last element</b> — simple but pathological on sorted input.',
          '<b>Random pivot</b> — robust expected O(n log n).',
          '<b>Median-of-three</b> — pick median of first, middle, last for robust behavior.',
          '<b>Dual pivot</b> — used by Java for primitive sort, very fast.'
        ]},
        { type: 'callout', kind: 'warn', html: 'Naive quicksort hits O(n²) on already sorted input with last-element pivot. Always use a randomized or median-of-three pivot in production code.' },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Average: <b>O(n log n)</b>.',
          'Worst case: <b>O(n²)</b> (bad pivot).',
          'Space: O(log n) recursion stack on average.',
          'Stable: <b>no</b>.'
        ]},
        { type: 'heading', text: 'Why so fast in practice', level: 3 },
        { type: 'para', html: 'Quicksort has excellent cache behavior, low constant factors, and works in place. Despite its worst-case being O(n²), randomized quicksort is wildly fast on real hardware.' },
        { type: 'heading', text: 'Hoare partition (alternative)', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">hoare</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> lo, <span class="ty">int</span> hi) {
    <span class="ty">int</span> pivot = a[lo];
    <span class="ty">int</span> i = lo - <span class="num">1</span>, j = hi + <span class="num">1</span>;
    <span class="kw">while</span> (<span class="kw">true</span>) {
        <span class="kw">do</span> i++; <span class="kw">while</span> (a[i] < pivot);
        <span class="kw">do</span> j--; <span class="kw">while</span> (a[j] > pivot);
        <span class="kw">if</span> (i >= j) <span class="kw">return</span> j;
        <span class="ty">int</span> t = a[i]; a[i] = a[j]; a[j] = t;
    }
}` },
        { type: 'callout', kind: 'tip', html: 'For very small subarrays, hybrid sorts switch to insertion sort. <code>Arrays.sort</code> in Java uses this exact trick.' },
        { type: 'para', html: 'Quick sort is the workhorse. It is asked in interviews, used in libraries, and worth deeply understanding.' }
      ]
    },
    {
      id: 'algo-c10',
      title: 'Heap Sort',
      sections: [
        { type: 'heading', text: 'Sorting with a heap', level: 1 },
        { type: 'para', html: 'A <b>binary heap</b> is a complete binary tree where every parent is &ge; (max-heap) or &le; (min-heap) its children. We can store it in an array. Heap sort uses it to repeatedly extract the maximum.' },
        { type: 'image', alt: 'Max heap structure', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g stroke="#5fb6ff" stroke-width="1.5" fill="none">
            <line x1="300" y1="50" x2="200" y2="110"/>
            <line x1="300" y1="50" x2="400" y2="110"/>
            <line x1="200" y1="110" x2="140" y2="170"/>
            <line x1="200" y1="110" x2="260" y2="170"/>
            <line x1="400" y1="110" x2="340" y2="170"/>
            <line x1="400" y1="110" x2="460" y2="170"/>
          </g>
          <g font-family="monospace" font-size="14">
            <circle cx="300" cy="50" r="22" fill="#7ed957"/><text x="300" y="55" text-anchor="middle" fill="#0f1626">90</text>
            <circle cx="200" cy="110" r="22" fill="#5fb6ff"/><text x="200" y="115" text-anchor="middle" fill="#0f1626">36</text>
            <circle cx="400" cy="110" r="22" fill="#5fb6ff"/><text x="400" y="115" text-anchor="middle" fill="#0f1626">80</text>
            <circle cx="140" cy="170" r="20" fill="#ffd166"/><text x="140" y="175" text-anchor="middle" fill="#0f1626">20</text>
            <circle cx="260" cy="170" r="20" fill="#ffd166"/><text x="260" y="175" text-anchor="middle" fill="#0f1626">25</text>
            <circle cx="340" cy="170" r="20" fill="#ffd166"/><text x="340" y="175" text-anchor="middle" fill="#0f1626">50</text>
            <circle cx="460" cy="170" r="20" fill="#ffd166"/><text x="460" y="175" text-anchor="middle" fill="#0f1626">70</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Array layout of a heap', level: 2 },
        { type: 'para', html: 'Index <code>i</code>: parent at <code>(i-1)/2</code>, left child at <code>2i+1</code>, right at <code>2i+2</code>. No pointers — just clever indexing.' },
        { type: 'heading', text: 'The algorithm', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Build a max-heap from the array (O(n)).',
          'Swap the root (largest) with the last element.',
          'Reduce heap size by 1.',
          '&ldquo;Sift down&rdquo; the new root to restore the heap.',
          'Repeat until size = 1.'
        ]},
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">static</span> <span class="kw">void</span> <span class="fn">heapSort</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span> n = a.length;
    <span class="kw">for</span> (<span class="ty">int</span> i = n / <span class="num">2</span> - <span class="num">1</span>; i >= <span class="num">0</span>; i--) <span class="fn">siftDown</span>(a, n, i);
    <span class="kw">for</span> (<span class="ty">int</span> i = n - <span class="num">1</span>; i > <span class="num">0</span>; i--) {
        <span class="ty">int</span> t = a[<span class="num">0</span>]; a[<span class="num">0</span>] = a[i]; a[i] = t;
        <span class="fn">siftDown</span>(a, i, <span class="num">0</span>);
    }
}

<span class="kw">static</span> <span class="kw">void</span> <span class="fn">siftDown</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> n, <span class="ty">int</span> i) {
    <span class="kw">while</span> (<span class="kw">true</span>) {
        <span class="ty">int</span> l = <span class="num">2</span>*i + <span class="num">1</span>, r = <span class="num">2</span>*i + <span class="num">2</span>, big = i;
        <span class="kw">if</span> (l < n && a[l] > a[big]) big = l;
        <span class="kw">if</span> (r < n && a[r] > a[big]) big = r;
        <span class="kw">if</span> (big == i) <span class="kw">return</span>;
        <span class="ty">int</span> t = a[i]; a[i] = a[big]; a[big] = t;
        i = big;
    }
}` },
        { type: 'widget', name: 'sort-vis', props: { values: [12, 11, 13, 5, 6, 7] } },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Time: <b>O(n log n)</b> — every push/pop is O(log n).',
          'Build heap: <b>O(n)</b> (looks like O(n log n) but mathematical analysis shows O(n)).',
          'Space: <b>O(1)</b> — in-place!',
          'Stable: <b>no</b>.'
        ]},
        { type: 'callout', kind: 'info', html: 'Heap sort guarantees O(n log n) in the worst case, unlike quick sort. It&apos;s the safe choice when worst-case performance matters.' },
        { type: 'heading', text: 'PriorityQueue connection', level: 3 },
        { type: 'para', html: 'Java&apos;s <code>PriorityQueue</code> is a binary heap. Insert is O(log n), poll-min is O(log n). Same machinery as heap sort.' },
        { type: 'callout', kind: 'tip', html: 'Heap sort is rarely the fastest on real hardware (quicksort wins), but it is the only common O(1)-space O(n log n) sort.' }
      ]
    },
    {
      id: 'algo-c11',
      title: 'Non-Comparison Sorts',
      sections: [
        { type: 'heading', text: 'Sorts that break the n log n barrier', level: 1 },
        { type: 'para', html: 'Any sort that only compares elements has a lower bound of Ω(n log n). But if we exploit structure (like &ldquo;values fit in a small range&rdquo;), we can sort in <b>linear</b> time.' },
        { type: 'heading', text: 'Counting sort', level: 2 },
        { type: 'para', html: 'When values are integers in <code>[0..k]</code> with k not much larger than n, count occurrences and reconstruct.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span>[] <span class="fn">countingSort</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> k) {
    <span class="ty">int</span>[] count = <span class="kw">new</span> <span class="ty">int</span>[k + <span class="num">1</span>];
    <span class="kw">for</span> (<span class="ty">int</span> x : a) count[x]++;
    <span class="ty">int</span>[] out = <span class="kw">new</span> <span class="ty">int</span>[a.length];
    <span class="ty">int</span> idx = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> v = <span class="num">0</span>; v <= k; v++)
        <span class="kw">while</span> (count[v]-- > <span class="num">0</span>) out[idx++] = v;
    <span class="kw">return</span> out;
}` },
        { type: 'callout', kind: 'warn', html: 'Counting sort uses O(n + k) space. If k = 10⁹ but n = 100, the array dwarfs the data — use only when k is small relative to n.' },
        { type: 'heading', text: 'Radix sort', level: 2 },
        { type: 'para', html: 'Sort numbers digit by digit using a stable sort (often counting sort) per digit, starting from the least significant. Final pass orders the most significant digit, producing a fully sorted array.' },
        { type: 'heading', text: 'Bucket sort', level: 2 },
        { type: 'para', html: 'Partition values into k buckets by range, sort each bucket (often with insertion sort), and concatenate. Excellent when values are uniformly distributed.' },
        { type: 'widget', name: 'array-vis', props: { values: [29, 25, 3, 49, 9, 37, 21, 43] } },
        { type: 'callout', kind: 'tip', html: 'Non-comparison sorts work magic on integer or string keys. They&apos;re used inside big data tools to sort huge datasets quickly.' }
      ]
    },
    {
      id: 'algo-c12',
      title: 'Recursion Basics',
      sections: [
        { type: 'heading', text: 'A function that calls itself', level: 1 },
        { type: 'para', html: '<b>Recursion</b> is when a function solves a problem by calling a smaller version of itself. Every recursion needs two pieces: a <b>base case</b> (a problem so small you can solve it directly) and a <b>recursive case</b> (reduce to smaller subproblems).' },
        { type: 'heading', text: 'The factorial classic', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">long</span> <span class="fn">factorial</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n <= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;    <span class="com">// base case</span>
    <span class="kw">return</span> n * <span class="fn">factorial</span>(n - <span class="num">1</span>);   <span class="com">// recursive case</span>
}` },
        { type: 'widget', name: 'code-stepper', props: {
          lines: [
            'long factorial(int n) {',
            '  if (n <= 1) return 1;',
            '  return n * factorial(n - 1);',
            '}'
          ],
          steps: [
            { line: 1, vars: { n: 4 }, note: 'factorial(4) called.' },
            { line: 2, vars: { n: 4 }, note: '4 > 1, skip base.' },
            { line: 3, vars: { n: 4 }, note: 'Call factorial(3).' },
            { line: 1, vars: { n: 3 }, note: 'factorial(3) starts.' },
            { line: 3, vars: { n: 3 }, note: 'Call factorial(2).' },
            { line: 1, vars: { n: 2 }, note: 'factorial(2) starts.' },
            { line: 3, vars: { n: 2 }, note: 'Call factorial(1).' },
            { line: 2, vars: { n: 1 }, note: 'Base case hit, return 1.' },
            { line: 3, vars: { n: 2, ret: 1 }, note: 'Return 2 * 1 = 2.' },
            { line: 3, vars: { n: 3, ret: 2 }, note: 'Return 3 * 2 = 6.' },
            { line: 3, vars: { n: 4, ret: 6 }, note: 'Return 4 * 6 = 24.' }
          ]
        }},
        { type: 'heading', text: 'The recursion tree', level: 2 },
        { type: 'image', alt: 'Recursion tree for factorial', svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="200" fill="#0f1626"/>
          <g font-family="monospace" font-size="14" fill="#dfe7f5" text-anchor="middle">
            <text x="300" y="30">factorial(4)</text>
            <line x1="300" y1="40" x2="300" y2="60" stroke="#5fb6ff"/>
            <text x="300" y="80">factorial(3)</text>
            <line x1="300" y1="90" x2="300" y2="110" stroke="#5fb6ff"/>
            <text x="300" y="130">factorial(2)</text>
            <line x1="300" y1="140" x2="300" y2="160" stroke="#5fb6ff"/>
            <text x="300" y="180" fill="#7ed957">factorial(1) = 1 (base)</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Stack frames', level: 2 },
        { type: 'para', html: 'Each recursive call creates a new <b>stack frame</b> holding parameters and locals. Too many frames → <code>StackOverflowError</code>.' },
        { type: 'callout', kind: 'warn', html: 'Always make sure the recursive case strictly moves toward the base case. Missing or wrong base cases cause infinite recursion.' },
        { type: 'heading', text: 'Three patterns', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>Reduce by one</b>: factorial, sum 1..n.',
          '<b>Reduce by half</b>: binary search, merge sort.',
          '<b>Branch into many</b>: tree traversal, permutations.'
        ]},
        { type: 'heading', text: 'Recursion vs iteration', level: 3 },
        { type: 'para', html: 'Any recursive algorithm can be rewritten iteratively (often using a stack). Recursive code is usually shorter and clearer for tree/graph problems but slower due to stack overhead.' },
        { type: 'heading', text: 'Common pitfalls', level: 3 },
        { type: 'list', kind: 'bullet', items: [
          'Missing base case → stack overflow.',
          'Wrong base case → wrong answers.',
          'Mutating shared state without restoring it (in backtracking).',
          'Re-computing the same subproblem repeatedly (cure: memoization).'
        ]},
        { type: 'callout', kind: 'tip', html: 'Draw the recursion tree on paper. Suddenly the algorithm makes sense — and you spot wasted work.' },
        { type: 'para', html: 'Recursion is a thinking tool as much as a programming one. Master it now; it powers divide-and-conquer, dynamic programming, backtracking, and graph traversal.' }
      ]
    },
    {
      id: 'algo-c13',
      title: 'Recursive Patterns',
      sections: [
        { type: 'heading', text: 'Patterns beyond factorial', level: 1 },
        { type: 'para', html: 'Recursion shows up in many flavors. Understanding the common shapes lets you recognize and write them faster.' },
        { type: 'heading', text: 'Head vs tail recursion', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Tail recursive — recursion is the LAST thing.</span>
<span class="kw">static</span> <span class="ty">int</span> <span class="fn">sumTail</span>(<span class="ty">int</span> n, <span class="ty">int</span> acc) {
    <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> acc;
    <span class="kw">return</span> <span class="fn">sumTail</span>(n - <span class="num">1</span>, acc + n);
}

<span class="com">// Head recursive — work happens AFTER the call.</span>
<span class="kw">static</span> <span class="ty">int</span> <span class="fn">sumHead</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> <span class="num">0</span>;
    <span class="kw">return</span> n + <span class="fn">sumHead</span>(n - <span class="num">1</span>);
}` },
        { type: 'callout', kind: 'info', html: 'Some languages optimize tail recursion into a loop (no extra stack). Java does <b>not</b> — but understanding the form still matters.' },
        { type: 'heading', text: 'Fibonacci: naive vs memo', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Exponential — recalculates the same fibs over and over!</span>
<span class="kw">static</span> <span class="ty">int</span> <span class="fn">fibSlow</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n < <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="fn">fibSlow</span>(n - <span class="num">1</span>) + <span class="fn">fibSlow</span>(n - <span class="num">2</span>);
}

<span class="com">// Memoized — each fib computed once.</span>
<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; cache = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
<span class="ty">int</span> <span class="fn">fibFast</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n < <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="kw">if</span> (cache.containsKey(n)) <span class="kw">return</span> cache.get(n);
    <span class="ty">int</span> r = <span class="fn">fibFast</span>(n - <span class="num">1</span>) + <span class="fn">fibFast</span>(n - <span class="num">2</span>);
    cache.put(n, r);
    <span class="kw">return</span> r;
}` },
        { type: 'heading', text: 'Common subproblems', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>Smaller n</b>: factorial, fib, sum.',
          '<b>Smaller string / array</b>: reverse, isPalindrome.',
          '<b>Subtree</b>: traversal, max depth, balanced check.',
          '<b>Choice</b>: include/exclude, subsets, partitions.'
        ]},
        { type: 'widget', name: 'code-stepper', props: {
          lines: [
            'int fibSlow(int n) {',
            '  if (n < 2) return n;',
            '  return fibSlow(n-1) + fibSlow(n-2);',
            '}'
          ],
          steps: [
            { line: 1, vars: { n: 4 }, note: 'fib(4) called.' },
            { line: 3, vars: { n: 4 }, note: 'Calls fib(3) and fib(2).' },
            { line: 1, vars: { n: 3 }, note: 'fib(3) called.' },
            { line: 3, vars: { n: 3 }, note: 'Calls fib(2) and fib(1).' },
            { line: 1, vars: { n: 2 }, note: 'fib(2) — recomputed!' },
            { line: 2, vars: { n: 1 }, note: 'fib(1) = 1.' },
            { line: 2, vars: { n: 0 }, note: 'fib(0) = 0.' }
          ]
        }},
        { type: 'callout', kind: 'warn', html: 'Naive recursion can be catastrophically slow when subproblems repeat. Memoization (caching) is the cure — and the gateway to dynamic programming.' },
        { type: 'heading', text: 'Reverse a string recursively', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">String</span> <span class="fn">rev</span>(<span class="ty">String</span> s) {
    <span class="kw">if</span> (s.length() <= <span class="num">1</span>) <span class="kw">return</span> s;
    <span class="kw">return</span> <span class="fn">rev</span>(s.substring(<span class="num">1</span>)) + s.charAt(<span class="num">0</span>);
}` },
        { type: 'callout', kind: 'tip', html: 'Whenever you see overlapping subproblems, reach for memoization. Whenever you see independent subproblems, recursion is enough.' }
      ]
    },
    {
      id: 'algo-c14',
      title: 'Divide & Conquer Pattern',
      sections: [
        { type: 'heading', text: 'A three-step recipe', level: 1 },
        { type: 'list', kind: 'numbered', items: [
          '<b>Divide</b>: split the problem into smaller sub-problems.',
          '<b>Conquer</b>: solve sub-problems recursively.',
          '<b>Combine</b>: assemble sub-solutions into the answer.'
        ]},
        { type: 'heading', text: 'Examples', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Merge sort, quick sort.',
          'Binary search.',
          'Strassen&apos;s matrix multiplication.',
          'Karatsuba&apos;s fast multiplication.',
          'Closest pair of points in 2D.',
          'Maximum subarray (Kadane and D&amp;C versions).'
        ]},
        { type: 'heading', text: 'Master theorem (informal)', level: 2 },
        { type: 'para', html: 'For recurrences <code>T(n) = a·T(n/b) + f(n)</code>, the answer depends on whether f(n) grows slower, equal, or faster than n^log_b(a). It explains why mergesort is O(n log n) and binary search is O(log n).' },
        { type: 'image', alt: 'Divide and conquer schematic', svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="200" fill="#0f1626"/>
          <g font-family="monospace" font-size="13" fill="#dfe7f5" text-anchor="middle">
            <rect x="240" y="20" width="120" height="34" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="300" y="42">Problem</text>
            <line x1="300" y1="54" x2="180" y2="90" stroke="#5fb6ff"/>
            <line x1="300" y1="54" x2="420" y2="90" stroke="#5fb6ff"/>
            <rect x="120" y="90" width="120" height="34" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="180" y="112">Sub A</text>
            <rect x="360" y="90" width="120" height="34" fill="#1c2740" stroke="#5fb6ff"/>
            <text x="420" y="112">Sub B</text>
            <line x1="180" y1="124" x2="300" y2="160" stroke="#7ed957"/>
            <line x1="420" y1="124" x2="300" y2="160" stroke="#7ed957"/>
            <rect x="240" y="160" width="120" height="34" fill="#1c2740" stroke="#7ed957"/>
            <text x="300" y="182">Combine</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'A concrete example: max subarray', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">maxSub</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> l, <span class="ty">int</span> r) {
    <span class="kw">if</span> (l == r) <span class="kw">return</span> a[l];
    <span class="ty">int</span> m = (l + r) / <span class="num">2</span>;
    <span class="ty">int</span> left  = <span class="fn">maxSub</span>(a, l, m);
    <span class="ty">int</span> right = <span class="fn">maxSub</span>(a, m + <span class="num">1</span>, r);
    <span class="ty">int</span> cross = <span class="fn">crossMax</span>(a, l, m, r);
    <span class="kw">return</span> <span class="ty">Math</span>.<span class="fn">max</span>(left, <span class="ty">Math</span>.<span class="fn">max</span>(right, cross));
}` },
        { type: 'callout', kind: 'tip', html: 'When the answer can be assembled from sub-answers cheaply, divide and conquer is your friend.' }
      ]
    },
    {
      id: 'algo-c15',
      title: 'Backtracking',
      sections: [
        { type: 'heading', text: 'Generate all, prune early', level: 1 },
        { type: 'para', html: 'Backtracking explores a decision tree: at each step, try every option; if it leads to a dead end, undo and try the next. It is brute force with intelligence — pruning cuts away branches we know cannot succeed.' },
        { type: 'image', alt: 'Decision tree for subsets', svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="240" fill="#0f1626"/>
          <g stroke="#5fb6ff" fill="none">
            <line x1="300" y1="40" x2="150" y2="100"/>
            <line x1="300" y1="40" x2="450" y2="100"/>
            <line x1="150" y1="100" x2="80" y2="170"/>
            <line x1="150" y1="100" x2="230" y2="170"/>
            <line x1="450" y1="100" x2="370" y2="170"/>
            <line x1="450" y1="100" x2="520" y2="170"/>
          </g>
          <g font-family="monospace" font-size="12" fill="#dfe7f5" text-anchor="middle">
            <circle cx="300" cy="40" r="20" fill="#1c2740" stroke="#7ed957"/><text x="300" y="44">[]</text>
            <circle cx="150" cy="100" r="22" fill="#1c2740" stroke="#5fb6ff"/><text x="150" y="104">[1]</text>
            <circle cx="450" cy="100" r="22" fill="#1c2740" stroke="#5fb6ff"/><text x="450" y="104">[]</text>
            <circle cx="80" cy="170" r="26" fill="#1c2740" stroke="#5fb6ff"/><text x="80" y="174">[1,2]</text>
            <circle cx="230" cy="170" r="22" fill="#1c2740" stroke="#5fb6ff"/><text x="230" y="174">[1]</text>
            <circle cx="370" cy="170" r="22" fill="#1c2740" stroke="#5fb6ff"/><text x="370" y="174">[2]</text>
            <circle cx="520" cy="170" r="20" fill="#1c2740" stroke="#5fb6ff"/><text x="520" y="174">[]</text>
            <text x="300" y="220" fill="#9aa5b1">choices: include or exclude</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">backtrack</span>(<span class="ty">State</span> s) {
    <span class="kw">if</span> (<span class="fn">isGoal</span>(s)) { <span class="fn">record</span>(s); <span class="kw">return</span>; }
    <span class="kw">for</span> (<span class="ty">Move</span> m : <span class="fn">choices</span>(s)) {
        <span class="kw">if</span> (!<span class="fn">isValid</span>(s, m)) <span class="kw">continue</span>;   <span class="com">// prune</span>
        <span class="fn">apply</span>(s, m);
        <span class="fn">backtrack</span>(s);
        <span class="fn">undo</span>(s, m);                  <span class="com">// the key step</span>
    }
}` },
        { type: 'heading', text: 'Subsets', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">subsets</span>(<span class="ty">int</span>[] nums, <span class="ty">int</span> start, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; out) {
    out.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur));
    <span class="kw">for</span> (<span class="ty">int</span> i = start; i < nums.length; i++) {
        cur.add(nums[i]);
        <span class="fn">subsets</span>(nums, i + <span class="num">1</span>, cur, out);
        cur.remove(cur.size() - <span class="num">1</span>);
    }
}` },
        { type: 'heading', text: 'Permutations', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">permute</span>(<span class="ty">int</span>[] nums, <span class="ty">boolean</span>[] used, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; out) {
    <span class="kw">if</span> (cur.size() == nums.length) {
        out.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur));
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < nums.length; i++) {
        <span class="kw">if</span> (used[i]) <span class="kw">continue</span>;
        used[i] = <span class="kw">true</span>;
        cur.add(nums[i]);
        <span class="fn">permute</span>(nums, used, cur, out);
        cur.remove(cur.size() - <span class="num">1</span>);
        used[i] = <span class="kw">false</span>;
    }
}` },
        { type: 'heading', text: 'N-Queens', level: 2 },
        { type: 'para', html: 'Place N queens on an N×N board so none attack each other. Backtracking tries each column for each row, pruning conflicts immediately.' },
        { type: 'code', lang: 'java', code: `<span class="kw">boolean</span> <span class="fn">place</span>(<span class="ty">int</span>[] cols, <span class="ty">int</span> row, <span class="ty">int</span> n) {
    <span class="kw">if</span> (row == n) <span class="kw">return</span> <span class="kw">true</span>;
    <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c < n; c++) {
        <span class="kw">if</span> (<span class="fn">safe</span>(cols, row, c)) {
            cols[row] = c;
            <span class="kw">if</span> (<span class="fn">place</span>(cols, row + <span class="num">1</span>, n)) <span class="kw">return</span> <span class="kw">true</span>;
        }
    }
    <span class="kw">return</span> <span class="kw">false</span>;
}` },
        { type: 'callout', kind: 'info', html: 'Good pruning rules can transform an exponential brute force into a fast practical solver. Sudoku and crossword solvers use backtracking.' },
        { type: 'heading', text: 'Common backtracking problems', level: 3 },
        { type: 'list', kind: 'check', items: [
          'Subsets / power set.',
          'Permutations / combinations.',
          'Word search in a grid.',
          'Sudoku, N-queens, knight&apos;s tour.',
          'Parenthesis generation.',
          'Path in maze.'
        ]},
        { type: 'callout', kind: 'tip', html: 'Always undo state when you return — forgetting this is the #1 backtracking bug.' }
      ]
    },
    {
      id: 'algo-c16',
      title: 'Greedy Algorithms',
      sections: [
        { type: 'heading', text: 'Locally optimal choice', level: 1 },
        { type: 'para', html: 'A <b>greedy</b> algorithm makes the choice that looks best right now and never reconsiders. When it works, it&apos;s fast and elegant. When it fails, it fails spectacularly.' },
        { type: 'heading', text: 'Coin change (canonical coins)', level: 2 },
        { type: 'para', html: 'With coins {1, 5, 10, 25} (USA), to make 41¢ pick the largest coin that fits, repeat: 25, 10, 5, 1 → 4 coins. This works because the coin system is &ldquo;canonical&rdquo;.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">coinsGreedy</span>(<span class="ty">int</span>[] coins, <span class="ty">int</span> amount) {
    <span class="ty">Arrays</span>.<span class="fn">sort</span>(coins);
    <span class="ty">int</span> n = coins.length, count = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = n - <span class="num">1</span>; i >= <span class="num">0</span>; i--) {
        <span class="kw">while</span> (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    <span class="kw">return</span> amount == <span class="num">0</span> ? count : -<span class="num">1</span>;
}` },
        { type: 'callout', kind: 'warn', html: 'For coins {1, 3, 4} and amount 6, greedy gives 4+1+1 (3 coins) but the optimal is 3+3 (2 coins). Greedy can be wrong!' },
        { type: 'heading', text: 'Activity selection', level: 2 },
        { type: 'para', html: 'Given intervals, choose the maximum number of non-overlapping activities. Greedy strategy: sort by end time, pick activity, skip all that conflict, repeat.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">maxActivities</span>(<span class="ty">int</span>[][] iv) {
    <span class="ty">Arrays</span>.<span class="fn">sort</span>(iv, (a, b) -&gt; a[<span class="num">1</span>] - b[<span class="num">1</span>]);
    <span class="ty">int</span> count = <span class="num">1</span>, end = iv[<span class="num">0</span>][<span class="num">1</span>];
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i < iv.length; i++) {
        <span class="kw">if</span> (iv[i][<span class="num">0</span>] >= end) {
            count++;
            end = iv[i][<span class="num">1</span>];
        }
    }
    <span class="kw">return</span> count;
}` },
        { type: 'heading', text: 'When greedy works', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<b>Greedy choice property</b>: a locally optimal choice leads to a globally optimal solution.',
          '<b>Optimal substructure</b>: optimal solution contains optimal sub-solutions.',
          'Classic wins: Huffman coding, MST (Kruskal/Prim), Dijkstra, fractional knapsack.'
        ]},
        { type: 'heading', text: 'When greedy fails', level: 3 },
        { type: 'list', kind: 'bullet', items: [
          '0/1 knapsack — must consider trade-offs (use DP).',
          'Longest path in graph.',
          'Coin change with weird denominations.'
        ]},
        { type: 'callout', kind: 'tip', html: 'Always prove (or convincingly argue) that the greedy choice is safe before trusting it. Otherwise, fall back to dynamic programming.' },
        { type: 'widget', name: 'array-vis', props: { values: [1, 5, 10, 25, 100] } }
      ]
    },
    {
      id: 'algo-c17',
      title: 'Dynamic Programming Intro',
      sections: [
        { type: 'heading', text: 'Remember to remember', level: 1 },
        { type: 'para', html: '<b>Dynamic programming (DP)</b> is the art of solving problems by combining solutions to overlapping sub-problems, storing each sub-answer once. It looks like recursion with a memory.' },
        { type: 'heading', text: 'Two prerequisites', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<b>Overlapping subproblems</b>: the same small problems appear over and over.',
          '<b>Optimal substructure</b>: optimal answer is built from optimal sub-answers.'
        ]},
        { type: 'heading', text: 'Memoization (top-down)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">int</span>[] memo;
<span class="ty">int</span> <span class="fn">fib</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n < <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="kw">if</span> (memo[n] != <span class="num">0</span>) <span class="kw">return</span> memo[n];
    <span class="kw">return</span> memo[n] = <span class="fn">fib</span>(n - <span class="num">1</span>) + <span class="fn">fib</span>(n - <span class="num">2</span>);
}` },
        { type: 'widget', name: 'code-stepper', props: {
          lines: [
            'int fib(int n) {',
            '  if (n < 2) return n;',
            '  if (memo[n] != 0) return memo[n];',
            '  return memo[n] = fib(n-1) + fib(n-2);',
            '}'
          ],
          steps: [
            { line: 1, vars: { n: 5 }, note: 'fib(5)' },
            { line: 4, vars: { n: 5 }, note: 'call fib(4), fib(3)' },
            { line: 1, vars: { n: 4 }, note: 'fib(4)' },
            { line: 4, vars: { n: 4 }, note: 'call fib(3), fib(2)' },
            { line: 1, vars: { n: 3 }, note: 'fib(3) NOT yet cached' },
            { line: 4, vars: { n: 3 }, note: 'call fib(2), fib(1)' },
            { line: 3, vars: { n: 3 }, note: 'cache fib(3) = 2' },
            { line: 3, vars: { n: 4 }, note: 'fib(3) returns from cache!' }
          ]
        }},
        { type: 'heading', text: 'Tabulation (bottom-up)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">fibTab</span>(<span class="ty">int</span> n) {
    <span class="kw">if</span> (n < <span class="num">2</span>) <span class="kw">return</span> n;
    <span class="ty">int</span>[] dp = <span class="kw">new</span> <span class="ty">int</span>[n + <span class="num">1</span>];
    dp[<span class="num">1</span>] = <span class="num">1</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i <= n; i++) dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];
    <span class="kw">return</span> dp[n];
}` },
        { type: 'heading', text: 'Space optimization', level: 3 },
        { type: 'para', html: 'Often you only need the last few entries of the DP table. Fibonacci needs only two variables — O(1) space!' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">fibTiny</span>(<span class="ty">int</span> n) {
    <span class="ty">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n; i++) {
        <span class="ty">int</span> t = a + b; a = b; b = t;
    }
    <span class="kw">return</span> a;
}` },
        { type: 'heading', text: 'Memo vs Tab — when to choose what', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Memoization: more natural when you start from a recursive solution.',
          'Tabulation: typically faster (no recursion overhead) and easier to optimize space.',
          'Tabulation requires you to know the dependency order; memo figures it out automatically.'
        ]},
        { type: 'callout', kind: 'info', html: 'DP is best learned by recognizing patterns. Solve 20 problems and you start seeing recurrences everywhere.' },
        { type: 'heading', text: 'The DP recipe', level: 3 },
        { type: 'list', kind: 'numbered', items: [
          'Define the state (what does dp[i] mean?).',
          'Write the recurrence.',
          'Identify base cases.',
          'Choose memoization or tabulation.',
          'Optimize space if possible.'
        ]},
        { type: 'callout', kind: 'tip', html: 'When stuck, write the brute-force recursion first. Then add a cache. Magic — you have DP.' },
        { type: 'para', html: 'Next chapter: classic DP problems you should master.' }
      ]
    },
    {
      id: 'algo-c18',
      title: 'DP Classic Problems',
      sections: [
        { type: 'heading', text: 'Climbing stairs', level: 1 },
        { type: 'para', html: 'You can climb 1 or 2 steps at a time. How many ways to reach step n? Answer: Fibonacci sequence!' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">stairs</span>(<span class="ty">int</span> n) {
    <span class="ty">int</span> a = <span class="num">1</span>, b = <span class="num">1</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i <= n; i++) {
        <span class="ty">int</span> t = a + b; a = b; b = t;
    }
    <span class="kw">return</span> b;
}` },
        { type: 'heading', text: 'House Robber', level: 2 },
        { type: 'para', html: 'Houses in a row, each with money. Robber can&apos;t hit adjacent houses. Maximize loot.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">rob</span>(<span class="ty">int</span>[] nums) {
    <span class="ty">int</span> prev = <span class="num">0</span>, curr = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> x : nums) {
        <span class="ty">int</span> next = <span class="ty">Math</span>.<span class="fn">max</span>(curr, prev + x);
        prev = curr;
        curr = next;
    }
    <span class="kw">return</span> curr;
}` },
        { type: 'heading', text: 'Longest Increasing Subsequence', level: 2 },
        { type: 'para', html: 'Find length of the longest strictly increasing subsequence. O(n²) DP, O(n log n) with patience sorting.' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">lis</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span>[] dp = <span class="kw">new</span> <span class="ty">int</span>[a.length];
    <span class="ty">Arrays</span>.<span class="fn">fill</span>(dp, <span class="num">1</span>);
    <span class="ty">int</span> best = <span class="num">1</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i < a.length; i++) {
        <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j < i; j++) {
            <span class="kw">if</span> (a[j] < a[i]) dp[i] = <span class="ty">Math</span>.<span class="fn">max</span>(dp[i], dp[j] + <span class="num">1</span>);
        }
        best = <span class="ty">Math</span>.<span class="fn">max</span>(best, dp[i]);
    }
    <span class="kw">return</span> best;
}` },
        { type: 'heading', text: '0/1 Knapsack', level: 2 },
        { type: 'para', html: 'Pick items with weight w and value v to maximize value without exceeding capacity W. Each item: take or leave (no fractions).' },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">knapsack</span>(<span class="ty">int</span>[] w, <span class="ty">int</span>[] v, <span class="ty">int</span> W) {
    <span class="ty">int</span> n = w.length;
    <span class="ty">int</span>[][] dp = <span class="kw">new</span> <span class="ty">int</span>[n + <span class="num">1</span>][W + <span class="num">1</span>];
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i <= n; i++)
        <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c <= W; c++) {
            dp[i][c] = dp[i-<span class="num">1</span>][c];
            <span class="kw">if</span> (c >= w[i-<span class="num">1</span>])
                dp[i][c] = <span class="ty">Math</span>.<span class="fn">max</span>(dp[i][c], dp[i-<span class="num">1</span>][c - w[i-<span class="num">1</span>]] + v[i-<span class="num">1</span>]);
        }
    <span class="kw">return</span> dp[n][W];
}` },
        { type: 'heading', text: 'Coin change (min coins)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">coinChange</span>(<span class="ty">int</span>[] coins, <span class="ty">int</span> amount) {
    <span class="ty">int</span>[] dp = <span class="kw">new</span> <span class="ty">int</span>[amount + <span class="num">1</span>];
    <span class="ty">Arrays</span>.<span class="fn">fill</span>(dp, amount + <span class="num">1</span>);
    dp[<span class="num">0</span>] = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i <= amount; i++)
        <span class="kw">for</span> (<span class="ty">int</span> c : coins)
            <span class="kw">if</span> (c <= i) dp[i] = <span class="ty">Math</span>.<span class="fn">min</span>(dp[i], dp[i - c] + <span class="num">1</span>);
    <span class="kw">return</span> dp[amount] > amount ? -<span class="num">1</span> : dp[amount];
}` },
        { type: 'widget', name: 'array-vis', props: { values: [10, 9, 2, 5, 3, 7, 101, 18] } },
        { type: 'callout', kind: 'info', html: 'Each of these problems is worth memorizing. They form the backbone of DP interviews and real-world optimization.' },
        { type: 'heading', text: 'Edit Distance (Levenshtein)', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">edit</span>(<span class="ty">String</span> a, <span class="ty">String</span> b) {
    <span class="ty">int</span> m = a.length(), n = b.length();
    <span class="ty">int</span>[][] dp = <span class="kw">new</span> <span class="ty">int</span>[m+<span class="num">1</span>][n+<span class="num">1</span>];
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i <= m; i++) dp[i][<span class="num">0</span>] = i;
    <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j <= n; j++) dp[<span class="num">0</span>][j] = j;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i <= m; i++)
        <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">1</span>; j <= n; j++) {
            <span class="kw">if</span> (a.charAt(i-<span class="num">1</span>) == b.charAt(j-<span class="num">1</span>)) dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>];
            <span class="kw">else</span> dp[i][j] = <span class="num">1</span> + <span class="ty">Math</span>.<span class="fn">min</span>(dp[i-<span class="num">1</span>][j-<span class="num">1</span>], <span class="ty">Math</span>.<span class="fn">min</span>(dp[i-<span class="num">1</span>][j], dp[i][j-<span class="num">1</span>]));
        }
    <span class="kw">return</span> dp[m][n];
}` },
        { type: 'callout', kind: 'tip', html: 'Practice DP by re-deriving these solutions from scratch. Patterns will stick.' }
      ]
    },
    {
      id: 'algo-c19',
      title: 'Graph Representations',
      sections: [
        { type: 'heading', text: 'Graphs everywhere', level: 1 },
        { type: 'para', html: 'A <b>graph</b> is a set of vertices connected by edges. They model roads, friendships, dependencies, web pages, neural networks — almost any structured relationship.' },
        { type: 'image', alt: 'Adjacency list vs matrix', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g font-family="monospace" font-size="13" fill="#dfe7f5">
            <text x="20" y="30">Adjacency List</text>
            <text x="20" y="60">0 → 1, 2</text>
            <text x="20" y="80">1 → 0, 3</text>
            <text x="20" y="100">2 → 0, 3</text>
            <text x="20" y="120">3 → 1, 2</text>
            <text x="20" y="160" fill="#9aa5b1">Space: O(V + E)</text>
            <text x="300" y="30">Adjacency Matrix</text>
            <g font-family="monospace" font-size="12">
              <text x="320" y="60">  0 1 2 3</text>
              <text x="300" y="80">0  0 1 1 0</text>
              <text x="300" y="100">1  1 0 0 1</text>
              <text x="300" y="120">2  1 0 0 1</text>
              <text x="300" y="140">3  0 1 1 0</text>
            </g>
            <text x="300" y="180" fill="#9aa5b1">Space: O(V²)</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Adjacency list', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < n; i++) adj.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;());
adj.get(<span class="num">0</span>).add(<span class="num">1</span>); adj.get(<span class="num">1</span>).add(<span class="num">0</span>);  <span class="com">// undirected edge 0-1</span>` },
        { type: 'heading', text: 'Adjacency matrix', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">int</span>[][] m = <span class="kw">new</span> <span class="ty">int</span>[n][n];
m[<span class="num">0</span>][<span class="num">1</span>] = m[<span class="num">1</span>][<span class="num">0</span>] = <span class="num">1</span>;  <span class="com">// undirected</span>` },
        { type: 'heading', text: 'When to use which', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<b>List</b> — sparse graphs, easy iteration over neighbors, O(V + E) space.',
          '<b>Matrix</b> — dense graphs, O(1) edge existence check, O(V²) space.',
          '<b>Edge list</b> — useful for Kruskal&apos;s and bulk processing.'
        ]},
        { type: 'callout', kind: 'info', html: 'Most interview and competitive code uses adjacency lists. Matrices appear when V is small or when you need ultra-fast edge queries.' },
        { type: 'heading', text: 'Directed vs undirected, weighted', level: 3 },
        { type: 'para', html: 'Directed graphs have one-way edges (Twitter follow). Weighted graphs attach a number to each edge (road distance, cost). Choose your representation to support these features.' },
        { type: 'callout', kind: 'tip', html: 'When you read a problem about &ldquo;dependencies&rdquo;, &ldquo;routes&rdquo;, &ldquo;networks&rdquo;, or &ldquo;reachability&rdquo;, think GRAPH.' }
      ]
    },
    {
      id: 'algo-c20',
      title: 'BFS — Breadth-First Search',
      sections: [
        { type: 'heading', text: 'Explore by layers', level: 1 },
        { type: 'para', html: 'BFS visits all vertices at distance 1, then 2, then 3, and so on. It uses a queue. On an unweighted graph it finds the shortest path between two vertices.' },
        { type: 'image', alt: 'BFS layers', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g font-family="monospace" font-size="13" fill="#dfe7f5" text-anchor="middle">
            <text x="60" y="30" fill="#9aa5b1">Layer 0</text>
            <text x="200" y="30" fill="#9aa5b1">Layer 1</text>
            <text x="380" y="30" fill="#9aa5b1">Layer 2</text>
            <text x="540" y="30" fill="#9aa5b1">Layer 3</text>
            <circle cx="60" cy="110" r="24" fill="#7ed957"/><text x="60" y="115" fill="#0f1626">A</text>
            <circle cx="200" cy="80" r="22" fill="#5fb6ff"/><text x="200" y="85" fill="#0f1626">B</text>
            <circle cx="200" cy="140" r="22" fill="#5fb6ff"/><text x="200" y="145" fill="#0f1626">C</text>
            <circle cx="380" cy="60" r="22" fill="#ffd166"/><text x="380" y="65" fill="#0f1626">D</text>
            <circle cx="380" cy="120" r="22" fill="#ffd166"/><text x="380" y="125" fill="#0f1626">E</text>
            <circle cx="380" cy="180" r="22" fill="#ffd166"/><text x="380" y="185" fill="#0f1626">F</text>
            <circle cx="540" cy="120" r="22" fill="#ff7b7b"/><text x="540" y="125" fill="#0f1626">G</text>
            <g stroke="#5fb6ff" fill="none">
              <line x1="84" y1="110" x2="178" y2="80"/>
              <line x1="84" y1="110" x2="178" y2="140"/>
              <line x1="222" y1="80" x2="358" y2="60"/>
              <line x1="222" y1="80" x2="358" y2="120"/>
              <line x1="222" y1="140" x2="358" y2="180"/>
              <line x1="402" y1="120" x2="518" y2="120"/>
            </g>
          </g>
        </svg>` },
        { type: 'heading', text: 'The algorithm', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">bfs</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj, <span class="ty">int</span> src) {
    <span class="ty">boolean</span>[] seen = <span class="kw">new</span> <span class="ty">boolean</span>[adj.size()];
    <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
    q.offer(src);
    seen[src] = <span class="kw">true</span>;
    <span class="kw">while</span> (!q.isEmpty()) {
        <span class="ty">int</span> u = q.poll();
        <span class="ty">System</span>.<span class="fn">out</span>.<span class="fn">println</span>(u);
        <span class="kw">for</span> (<span class="ty">int</span> v : adj.get(u)) {
            <span class="kw">if</span> (!seen[v]) {
                seen[v] = <span class="kw">true</span>;
                q.offer(v);
            }
        }
    }
}` },
        { type: 'widget', name: 'stack-queue-vis', props: { kind: 'queue' } },
        { type: 'heading', text: 'Shortest path (unweighted)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span>[] <span class="fn">shortestPaths</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj, <span class="ty">int</span> src) {
    <span class="ty">int</span> n = adj.size();
    <span class="ty">int</span>[] dist = <span class="kw">new</span> <span class="ty">int</span>[n];
    <span class="ty">Arrays</span>.<span class="fn">fill</span>(dist, -<span class="num">1</span>);
    dist[src] = <span class="num">0</span>;
    <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
    q.offer(src);
    <span class="kw">while</span> (!q.isEmpty()) {
        <span class="ty">int</span> u = q.poll();
        <span class="kw">for</span> (<span class="ty">int</span> v : adj.get(u)) {
            <span class="kw">if</span> (dist[v] == -<span class="num">1</span>) {
                dist[v] = dist[u] + <span class="num">1</span>;
                q.offer(v);
            }
        }
    }
    <span class="kw">return</span> dist;
}` },
        { type: 'heading', text: 'Level-order on a tree', level: 2 },
        { type: 'para', html: 'A binary tree level-order traversal is just BFS starting at the root. Print one level per outer iteration by tracking queue size.' },
        { type: 'heading', text: 'Use cases', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Shortest path in unweighted graph.',
          'Bipartite check via 2-coloring.',
          'Connected components in an undirected graph.',
          'Grid problems (flood fill, walls and gates).',
          'Web crawler (frontier of URLs).'
        ]},
        { type: 'callout', kind: 'info', html: 'BFS explores closer vertices first — exactly the property you need for unweighted shortest paths and minimum step puzzles.' },
        { type: 'heading', text: 'Complexity', level: 3 },
        { type: 'para', html: 'Each vertex and edge is examined once: O(V + E) time, O(V) space for the visited set and queue.' },
        { type: 'heading', text: 'Grid BFS example', level: 3 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] dx = {<span class="num">1</span>, -<span class="num">1</span>, <span class="num">0</span>, <span class="num">0</span>};
<span class="kw">int</span>[] dy = {<span class="num">0</span>, <span class="num">0</span>, <span class="num">1</span>, -<span class="num">1</span>};
<span class="com">// Use these to step into the four neighbors.</span>` },
        { type: 'callout', kind: 'tip', html: 'Always mark a node as visited BEFORE enqueueing (not after dequeueing) — otherwise the queue can fill up with duplicates.' }
      ]
    },
    {
      id: 'algo-c21',
      title: 'DFS — Depth-First Search',
      sections: [
        { type: 'heading', text: 'Go deep, then back', level: 1 },
        { type: 'para', html: 'DFS dives as far down a branch as possible before backtracking. It is naturally recursive (or iterative with a stack).' },
        { type: 'image', alt: 'DFS traversal order', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g stroke="#5fb6ff" fill="none">
            <line x1="300" y1="40" x2="180" y2="110"/>
            <line x1="300" y1="40" x2="420" y2="110"/>
            <line x1="180" y1="110" x2="120" y2="180"/>
            <line x1="180" y1="110" x2="240" y2="180"/>
            <line x1="420" y1="110" x2="360" y2="180"/>
            <line x1="420" y1="110" x2="480" y2="180"/>
          </g>
          <g font-family="monospace" font-size="13" fill="#0f1626" text-anchor="middle">
            <circle cx="300" cy="40" r="22" fill="#7ed957"/><text x="300" y="44">1</text>
            <circle cx="180" cy="110" r="22" fill="#5fb6ff"/><text x="180" y="114">2</text>
            <circle cx="420" cy="110" r="22" fill="#ffd166"/><text x="420" y="114">5</text>
            <circle cx="120" cy="180" r="22" fill="#5fb6ff"/><text x="120" y="184">3</text>
            <circle cx="240" cy="180" r="22" fill="#5fb6ff"/><text x="240" y="184">4</text>
            <circle cx="360" cy="180" r="22" fill="#ffd166"/><text x="360" y="184">6</text>
            <circle cx="480" cy="180" r="22" fill="#ffd166"/><text x="480" y="184">7</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Recursive DFS', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj, <span class="ty">int</span> u, <span class="ty">boolean</span>[] seen) {
    seen[u] = <span class="kw">true</span>;
    <span class="ty">System</span>.<span class="fn">out</span>.<span class="fn">println</span>(u);
    <span class="kw">for</span> (<span class="ty">int</span> v : adj.get(u)) {
        <span class="kw">if</span> (!seen[v]) <span class="fn">dfs</span>(adj, v, seen);
    }
}` },
        { type: 'heading', text: 'Iterative DFS', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">dfsIter</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj, <span class="ty">int</span> src) {
    <span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; st = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
    <span class="ty">boolean</span>[] seen = <span class="kw">new</span> <span class="ty">boolean</span>[adj.size()];
    st.push(src);
    <span class="kw">while</span> (!st.isEmpty()) {
        <span class="ty">int</span> u = st.pop();
        <span class="kw">if</span> (seen[u]) <span class="kw">continue</span>;
        seen[u] = <span class="kw">true</span>;
        <span class="kw">for</span> (<span class="ty">int</span> v : adj.get(u)) <span class="kw">if</span> (!seen[v]) st.push(v);
    }
}` },
        { type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } },
        { type: 'heading', text: 'Cycle detection (undirected)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">boolean</span> <span class="fn">hasCycle</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj, <span class="ty">int</span> u, <span class="ty">int</span> parent, <span class="ty">boolean</span>[] seen) {
    seen[u] = <span class="kw">true</span>;
    <span class="kw">for</span> (<span class="ty">int</span> v : adj.get(u)) {
        <span class="kw">if</span> (!seen[v]) {
            <span class="kw">if</span> (<span class="fn">hasCycle</span>(adj, v, u, seen)) <span class="kw">return</span> <span class="kw">true</span>;
        } <span class="kw">else if</span> (v != parent) <span class="kw">return</span> <span class="kw">true</span>;
    }
    <span class="kw">return</span> <span class="kw">false</span>;
}` },
        { type: 'heading', text: 'Topological sort intuition', level: 2 },
        { type: 'para', html: 'On a DAG, DFS gives a topological order if you record vertices in reverse post-order (when DFS finishes a vertex, prepend it to a list).' },
        { type: 'callout', kind: 'info', html: 'DFS is the engine behind connectivity, articulation points, bridges, Tarjan&apos;s SCC, and topological sort.' },
        { type: 'heading', text: 'Complexity', level: 3 },
        { type: 'para', html: 'O(V + E) time and O(V) space (visited set + recursion/stack depth). On a deeply nested graph, recursion can blow the JVM stack — use the iterative form.' },
        { type: 'callout', kind: 'tip', html: 'BFS = shortest steps. DFS = paths and connectivity. Choose based on the shape of your question.' }
      ]
    },
    {
      id: 'algo-c22',
      title: 'Dijkstra\'s Algorithm',
      sections: [
        { type: 'heading', text: 'Shortest paths with weights', level: 1 },
        { type: 'para', html: 'Dijkstra finds shortest paths from a source to every other vertex in a graph with <b>non-negative</b> edge weights. It uses a priority queue.' },
        { type: 'image', alt: 'Dijkstra graph example', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="220" fill="#0f1626"/>
          <g stroke="#5fb6ff" fill="none" stroke-width="1.5">
            <line x1="80" y1="110" x2="240" y2="60"/>
            <line x1="80" y1="110" x2="240" y2="160"/>
            <line x1="240" y1="60" x2="400" y2="110"/>
            <line x1="240" y1="160" x2="400" y2="110"/>
            <line x1="240" y1="60" x2="240" y2="160"/>
            <line x1="400" y1="110" x2="520" y2="110"/>
          </g>
          <g font-family="monospace" font-size="12" fill="#ffd166">
            <text x="150" y="80">4</text>
            <text x="150" y="150">2</text>
            <text x="330" y="80">3</text>
            <text x="330" y="150">5</text>
            <text x="250" y="120">1</text>
            <text x="450" y="100">6</text>
          </g>
          <g font-family="monospace" font-size="14" fill="#0f1626" text-anchor="middle">
            <circle cx="80" cy="110" r="22" fill="#7ed957"/><text x="80" y="114">A</text>
            <circle cx="240" cy="60" r="22" fill="#5fb6ff"/><text x="240" y="64">B</text>
            <circle cx="240" cy="160" r="22" fill="#5fb6ff"/><text x="240" y="164">C</text>
            <circle cx="400" cy="110" r="22" fill="#5fb6ff"/><text x="400" y="114">D</text>
            <circle cx="520" cy="110" r="22" fill="#ff7b7b"/><text x="520" y="114">E</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'The algorithm', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Initialize <code>dist[src] = 0</code>, all others = ∞.',
          'Push (0, src) into a min-priority queue.',
          'Pop the vertex with smallest dist.',
          'For each neighbor, relax: if <code>dist[u] + w &lt; dist[v]</code>, update and push.',
          'Repeat until queue empty.'
        ]},
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span>[] <span class="fn">dijkstra</span>(<span class="ty">List</span>&lt;<span class="ty">int</span>[]&gt;[] adj, <span class="ty">int</span> src) {
    <span class="ty">int</span> n = adj.length;
    <span class="ty">int</span>[] dist = <span class="kw">new</span> <span class="ty">int</span>[n];
    <span class="ty">Arrays</span>.<span class="fn">fill</span>(dist, <span class="ty">Integer</span>.MAX_VALUE);
    dist[src] = <span class="num">0</span>;
    <span class="ty">PriorityQueue</span>&lt;<span class="ty">int</span>[]&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;((a, b) -&gt; a[<span class="num">1</span>] - b[<span class="num">1</span>]);
    pq.offer(<span class="kw">new</span> <span class="ty">int</span>[]{src, <span class="num">0</span>});
    <span class="kw">while</span> (!pq.isEmpty()) {
        <span class="ty">int</span>[] cur = pq.poll();
        <span class="ty">int</span> u = cur[<span class="num">0</span>], d = cur[<span class="num">1</span>];
        <span class="kw">if</span> (d > dist[u]) <span class="kw">continue</span>;
        <span class="kw">for</span> (<span class="ty">int</span>[] e : adj[u]) {
            <span class="ty">int</span> v = e[<span class="num">0</span>], w = e[<span class="num">1</span>];
            <span class="kw">if</span> (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.offer(<span class="kw">new</span> <span class="ty">int</span>[]{v, dist[v]});
            }
        }
    }
    <span class="kw">return</span> dist;
}` },
        { type: 'callout', kind: 'warn', html: 'Dijkstra requires <b>non-negative</b> edge weights. Negative edges break the assumption that the smallest-distance node is finalized when popped. Use Bellman-Ford instead.' },
        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'With binary heap: <b>O((V + E) log V)</b>.',
          'With Fibonacci heap: O(E + V log V) (theoretically, rarely in practice).',
          'Space: O(V).'
        ]},
        { type: 'heading', text: 'Reconstructing the path', level: 3 },
        { type: 'para', html: 'Keep a <code>parent[]</code> array updated whenever you relax. To trace from src to target, walk parent links backwards.' },
        { type: 'callout', kind: 'info', html: 'Variants: A* (heuristic-guided), 0-1 BFS (when weights are 0 or 1), and bidirectional Dijkstra.' },
        { type: 'heading', text: 'Real-world uses', level: 3 },
        { type: 'list', kind: 'check', items: [
          'GPS routing (with extra heuristics).',
          'Network routing protocols (OSPF).',
          'Game pathfinding (with A*).',
          'Image segmentation, robotics, supply chain.'
        ]}
      ]
    },
    {
      id: 'algo-c23',
      title: 'Two Pointers & Sliding Window',
      sections: [
        { type: 'heading', text: 'Patterns for arrays and strings', level: 1 },
        { type: 'para', html: 'Two pointers and sliding window are not single algorithms but powerful <i>techniques</i>. They turn many O(n²) brute forces into O(n) gems.' },
        { type: 'heading', text: 'Two pointers: reverse', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="kw">void</span> <span class="fn">reverse</span>(<span class="ty">int</span>[] a) {
    <span class="ty">int</span> i = <span class="num">0</span>, j = a.length - <span class="num">1</span>;
    <span class="kw">while</span> (i < j) {
        <span class="ty">int</span> t = a[i]; a[i] = a[j]; a[j] = t;
        i++; j--;
    }
}` },
        { type: 'heading', text: 'Two pointers: two-sum sorted', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span>[] <span class="fn">twoSumSorted</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> target) {
    <span class="ty">int</span> i = <span class="num">0</span>, j = a.length - <span class="num">1</span>;
    <span class="kw">while</span> (i < j) {
        <span class="ty">int</span> s = a[i] + a[j];
        <span class="kw">if</span> (s == target) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">int</span>[]{i, j};
        <span class="kw">if</span> (s < target) i++; <span class="kw">else</span> j--;
    }
    <span class="kw">return</span> <span class="kw">new</span> <span class="ty">int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}` },
        { type: 'heading', text: 'Sliding window: longest substring no repeats', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">longestUnique</span>(<span class="ty">String</span> s) {
    <span class="ty">int</span>[] last = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">128</span>];
    <span class="ty">Arrays</span>.<span class="fn">fill</span>(last, -<span class="num">1</span>);
    <span class="ty">int</span> start = <span class="num">0</span>, best = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < s.length(); i++) {
        <span class="ty">char</span> c = s.charAt(i);
        <span class="kw">if</span> (last[c] >= start) start = last[c] + <span class="num">1</span>;
        last[c] = i;
        best = <span class="ty">Math</span>.<span class="fn">max</span>(best, i - start + <span class="num">1</span>);
    }
    <span class="kw">return</span> best;
}` },
        { type: 'heading', text: 'Sliding window: max sum of size k', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">maxSumK</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> k) {
    <span class="ty">int</span> sum = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < k; i++) sum += a[i];
    <span class="ty">int</span> best = sum;
    <span class="kw">for</span> (<span class="ty">int</span> i = k; i < a.length; i++) {
        sum += a[i] - a[i - k];
        best = <span class="ty">Math</span>.<span class="fn">max</span>(best, sum);
    }
    <span class="kw">return</span> best;
}` },
        { type: 'widget', name: 'array-vis', props: { values: [2, 1, 5, 1, 3, 2, 4, 7] } },
        { type: 'callout', kind: 'info', html: 'Sliding window works wherever a sub-array of contiguous elements satisfies a monotonic predicate (sum, count, distinct character count).' },
        { type: 'heading', text: 'Common patterns', level: 3 },
        { type: 'list', kind: 'check', items: [
          'Two pointers from both ends (palindrome, 2-sum sorted).',
          'Fast & slow pointers (cycle in linked list).',
          'Sliding window of fixed size.',
          'Sliding window of variable size (grow / shrink).',
          'Three pointers (3-sum).'
        ]},
        { type: 'callout', kind: 'tip', html: 'When you see &ldquo;contiguous subarray&rdquo; or &ldquo;substring&rdquo;, immediately consider sliding window. When you see &ldquo;pair / triplet that sums to X&rdquo;, consider two pointers (sort first).' },
        { type: 'para', html: 'Master these two techniques and you can crush a huge category of array/string interview questions.' }
      ]
    }
  ]
});

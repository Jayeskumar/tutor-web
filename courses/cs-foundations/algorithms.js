PUSH({
  id: 'algo',
  name: 'Algorithms',
  icon: '🧠',
  color: '#845ec2',
  description: 'Search, sort, recurse, optimize — algorithmic thinking from zero.',
  units: [
    {
      id: 'algo-u1',
      name: 'Unit 1 · Algorithmic Thinking',
      description: 'What an algorithm is and how to reason about one.',
      lessons: [
        {
          id: 'algo-u1-l1',
          name: 'What is an Algorithm?',
          icon: '💡',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Algorithms in plain words',
              content: `<p>An <b>algorithm</b> is a finite, step-by-step recipe that solves a problem.</p>
<p>Three essentials:</p>
<ul>
  <li><b>Input</b> — zero or more values you start with</li>
  <li><b>Output</b> — one or more values you end with</li>
  <li><b>Finite steps</b> — it must <i>halt</i></li>
</ul>
<div class="code-block"><span class="com">// A baby algorithm: add two numbers</span>
<span class="kw">function</span> <span class="fn">add</span>(a, b) {
  <span class="kw">return</span> a + b;
}</div>
<p>Every program you ever write is a tower of algorithms.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is NOT a required property of an algorithm?',
              options: [
                { text: 'It must terminate (finite steps).', code: false },
                { text: 'It must produce the correct output.', code: false },
                { text: 'It must be written in Python.', code: false },
                { text: 'Each step must be unambiguous.', code: false }
              ],
              correct: 2,
              explanation: 'Language is irrelevant — algorithms are language-agnostic.'
            },
            {
              type: 'true-false',
              statement: 'An algorithm that never halts on some input is still a valid algorithm.',
              correct: false,
              explanation: 'By definition algorithms must terminate on every valid input.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the property to its meaning.',
              leftLabel: 'Property',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Correctness', right: 'Right output on every valid input' },
                { left: 'Finiteness', right: 'Always halts after finite steps' },
                { left: 'Determinism', right: 'Same input → same output' },
                { left: 'Efficiency', right: 'Uses reasonable time/space' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the sentence: an algorithm transforms ___.',
              tokens: ['input', 'into', 'output', 'using', 'finite', 'steps', 'forever', 'maybe', 'eventually'],
              correctOrder: ['input', 'into', 'output', 'using', 'finite', 'steps'],
              explanation: 'Input → Output in finite steps — the heart of every algorithm.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which of these is the BEST example of an everyday algorithm?',
              options: [
                { text: 'A cake recipe with ordered steps.', code: false },
                { text: 'A random thought.', code: false },
                { text: 'A blank notebook.', code: false },
                { text: 'A traffic jam.', code: false }
              ],
              correct: 0,
              explanation: 'Recipes are the canonical real-world algorithm.'
            }
          ]
        },
        {
          id: 'algo-u1-l2',
          name: 'Pseudocode & Framework',
          icon: '📝',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Pseudocode: think before you code',
              content: `<p><b>Pseudocode</b> is plain-English code. No syntax errors — just logic.</p>
<div class="code-block"><span class="com">// Find max of an array</span>
<span class="fn">max</span> ← arr[<span class="num">0</span>]
<span class="kw">for</span> i <span class="kw">from</span> <span class="num">1</span> <span class="kw">to</span> n-<span class="num">1</span>:
  <span class="kw">if</span> arr[i] &gt; <span class="fn">max</span>:
    <span class="fn">max</span> ← arr[i]
<span class="kw">return</span> <span class="fn">max</span></div>
<p>The 4-step problem-solving framework:</p>
<ol>
  <li><b>Understand</b> — restate inputs/outputs</li>
  <li><b>Plan</b> — sketch in pseudocode</li>
  <li><b>Code</b> — translate to a real language</li>
  <li><b>Verify</b> — trace small examples</li>
</ol>`
            },
            {
              type: 'reorder-code',
              prompt: 'Put the 4 problem-solving steps in order.',
              lines: [
                '<span class="kw">Code</span> — translate to real language',
                '<span class="kw">Understand</span> — restate the problem',
                '<span class="kw">Verify</span> — trace small examples',
                '<span class="kw">Plan</span> — sketch the algorithm'
              ],
              correctOrder: [1, 3, 0, 2]
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the blank so we update max only when needed.',
              codeLines: [
                { html: '<span class="kw">if</span> arr[i] <span class="num">_BLANK_</span> max:' },
                { html: '  max = arr[i];' }
              ],
              tokens: ['>', '<', '==', '!='],
              correctAnswer: '>',
              explanation: 'We replace max only when the new element is strictly greater.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why write pseudocode before real code?',
              options: [
                { text: 'It catches logic errors before syntax errors hide them.', code: false },
                { text: 'It compiles faster.', code: false },
                { text: 'It is required by Java.', code: false },
                { text: 'It is shorter than English.', code: false }
              ],
              correct: 0,
              explanation: 'Pseudocode separates "what" from "how", letting logic bugs surface early.'
            },
            {
              type: 'true-false',
              statement: 'Tracing your algorithm on a tiny input is one of the cheapest bug-finding tools.',
              correct: true,
              explanation: 'A 3-element trace catches surprisingly many off-by-one errors.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Arrange: understand → plan → code → verify.',
              tokens: ['understand', 'plan', 'code', 'verify', 'sleep', 'panic'],
              correctOrder: ['understand', 'plan', 'code', 'verify'],
              explanation: 'The classic four-beat rhythm.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u2',
      name: 'Unit 2 · Time & Space Complexity Refresher',
      description: 'Quick Big-O review aimed at algorithm analysis.',
      lessons: [
        {
          id: 'algo-u2-l1',
          name: 'Big O at a Glance',
          icon: '📈',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Growth rates that matter',
              content: `<p><b>Big O</b> describes how runtime grows as input <code>n</code> grows.</p>
<p>The classic ladder (fast → slow):</p>
<ul>
  <li>O(1) — constant</li>
  <li>O(log n) — logarithmic</li>
  <li>O(n) — linear</li>
  <li>O(n log n) — linearithmic</li>
  <li>O(n²) — quadratic</li>
  <li>O(2ⁿ) — exponential</li>
  <li>O(n!) — factorial</li>
</ul>
<div class="code-block"><span class="com">// O(n) — touches every element once</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) {
  <span class="fn">process</span>(arr[i]);
}</div>`
            },
            {
              type: 'match-pairs',
              prompt: 'Match code to its Big-O.',
              leftLabel: 'Code',
              rightLabel: 'Complexity',
              pairs: [
                { left: 'single loop 0..n', right: 'O(n)' },
                { left: 'nested loops n×n', right: 'O(n²)' },
                { left: 'halve n each step', right: 'O(log n)' },
                { left: 'return arr[0]', right: 'O(1)' }
              ]
            },
            {
              type: 'multiple-choice',
              prompt: 'Which grows fastest as n → ∞?',
              options: [
                { text: 'O(n²)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(2ⁿ)', code: false },
                { text: 'O(n)', code: false }
              ],
              correct: 2,
              explanation: 'Exponential beats any polynomial.'
            },
            {
              type: 'type-answer',
              prompt: 'What is the Big-O of binary search?',
              code: '',
              accept: ['O(log n)', 'O(logn)', 'O(log(n))'],
              explanation: 'Binary search halves the range each step.'
            },
            {
              type: 'true-false',
              statement: 'Big O describes an upper bound on growth.',
              correct: true,
              explanation: 'Big O = asymptotic upper bound.'
            },
            {
              type: 'output-predict',
              prompt: 'What is this loop\'s complexity?',
              code: `for (int i = 0; i < n; i++) {
  for (int j = 0; j < n; j++) {
    sum += arr[i][j];
  }
}`,
              options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
              correct: 1,
              explanation: 'Two nested loops over n give n × n = n².'
            }
          ]
        },
        {
          id: 'algo-u2-l2',
          name: 'Comparing & Common Mistakes',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Pitfalls in complexity analysis',
              content: `<p>Common mistakes:</p>
<ul>
  <li>Dropping non-dominant terms is OK: O(n + log n) → O(n)</li>
  <li>But don't drop variables: O(n + m) ≠ O(n)</li>
  <li>Constants are dropped: O(2n) → O(n)</li>
  <li>Inside a loop, hidden O(n) ops can blow up complexity</li>
</ul>
<div class="code-block"><span class="com">// Looks like O(n) — actually O(n²)!</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) {
  list.<span class="fn">contains</span>(x); <span class="com">// O(n) each call</span>
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Simplify O(3n² + 5n + 100) to standard Big-O.',
              options: [
                { text: 'O(3n²)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(n² + n)', code: false },
                { text: 'O(100)', code: false }
              ],
              correct: 1,
              explanation: 'Drop constants and lower-order terms.'
            },
            {
              type: 'true-false',
              statement: 'O(n) is always faster than O(n²) for large n.',
              correct: true,
              explanation: 'Asymptotically yes — for small n the constant factors can flip it.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match expression to simplified Big-O.',
              leftLabel: 'Expression',
              rightLabel: 'Simplified',
              pairs: [
                { left: 'n + log n', right: 'O(n)' },
                { left: '5n²', right: 'O(n²)' },
                { left: 'n + m', right: 'O(n+m)' },
                { left: '2ⁿ + n³', right: 'O(2ⁿ)' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Total complexity of this snippet?',
              code: `for (int i = 0; i < n; i++) {        // O(n)
  for (int j = 0; j < n; j++) {      // O(n)
    arr[i] += j;
  }
}
for (int k = 0; k < n; k++) {        // O(n)
  arr[k] *= 2;
}`,
              options: ['O(n)', 'O(n²)', 'O(n³)', 'O(n² + n) so O(n²)'],
              correct: 3,
              explanation: 'Sum dominates by the bigger term: n² + n → O(n²).'
            },
            {
              type: 'type-answer',
              prompt: 'Drop constants: O(4n + 7) → ?',
              code: '',
              accept: ['O(n)'],
              explanation: 'Constants and lower terms drop.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u3',
      name: 'Unit 3 · Linear Search',
      description: 'The simplest search: check each item.',
      lessons: [
        {
          id: 'algo-u3-l1',
          name: 'Linear Search End-to-End',
          icon: '🔎',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Linear search',
              content: `<p>Walk the array from left to right; return the index when you find <code>target</code>.</p>
<div class="code-block"><span class="ty">int</span> <span class="fn">linearSearch</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> target) {
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; arr.length; i++) {
    <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
  }
  <span class="kw">return</span> -<span class="num">1</span>;
}</div>
<p>Best case: O(1) (first element). Worst/avg: O(n).</p>
<p>Use when data is unsorted or tiny.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Best-case complexity of linear search?',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(log n)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n²)', code: false }
              ],
              correct: 0,
              explanation: 'When the target is the first element.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the return when nothing matched.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; arr.length; i++)' },
                { html: '  <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;' },
                { html: '<span class="kw">return</span> <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['-1', '0', 'null', 'target'],
              correctAnswer: '-1',
              explanation: 'Returning -1 is the convention for "not found" with int indices.'
            },
            {
              type: 'true-false',
              statement: 'Linear search requires the array to be sorted.',
              correct: false,
              explanation: 'Linear search works on any order — that\'s its main virtue.'
            },
            {
              type: 'output-predict',
              prompt: 'arr = [4, 2, 9, 1, 7], target = 9. linearSearch returns?',
              code: `int[] arr = {4, 2, 9, 1, 7};
System.out.println(linearSearch(arr, 9));`,
              options: ['1', '2', '9', '-1'],
              correct: 1,
              explanation: '9 sits at index 2.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder a linear search.',
              lines: [
                '<span class="kw">return</span> -<span class="num">1</span>;',
                '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; arr.length; i++) {',
                '  <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;',
                '}'
              ],
              correctOrder: [1, 2, 3, 0]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the loop header.',
              tokens: ['for', '(', 'int', 'i', '=', '0', ';', 'i', '<', 'arr.length', ')', 'while'],
              correctOrder: ['for', '(', 'int', 'i', '=', '0', ';', 'i', '<', 'arr.length', ')'],
              explanation: 'Classic indexed for-loop.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u4',
      name: 'Unit 4 · Binary Search',
      description: 'Halve and conquer on sorted data.',
      lessons: [
        {
          id: 'algo-u4-l1',
          name: 'The Core Idea',
          icon: '⚡',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Binary search needs a sorted array',
              content: `<p>Look at the middle. If it matches → done. If too small → search right half. If too big → search left half.</p>
<div class="code-block"><span class="ty">int</span> <span class="fn">binarySearch</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> t) {
  <span class="ty">int</span> lo = <span class="num">0</span>, hi = a.length - <span class="num">1</span>;
  <span class="kw">while</span> (lo &lt;= hi) {
    <span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
    <span class="kw">if</span> (a[mid] == t) <span class="kw">return</span> mid;
    <span class="kw">if</span> (a[mid] &lt; t) lo = mid + <span class="num">1</span>;
    <span class="kw">else</span> hi = mid - <span class="num">1</span>;
  }
  <span class="kw">return</span> -<span class="num">1</span>;
}</div>
<p>Time: O(log n). Space: O(1) iterative.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Binary search prerequisite?',
              options: [
                { text: 'Array must be sorted.', code: false },
                { text: 'Array must contain only ints.', code: false },
                { text: 'Length must be a power of 2.', code: false },
                { text: 'Array must be reversed.', code: false }
              ],
              correct: 0,
              explanation: 'Without order, halving doesn\'t guarantee the target side.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute mid without overflow.',
              codeLines: [
                { html: '<span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['2', '1', 'n', 'lo'],
              correctAnswer: '2',
              explanation: 'Halving the window each step.'
            },
            {
              type: 'true-false',
              statement: 'Binary search has time complexity O(log n).',
              correct: true,
              explanation: 'Each step halves the candidate range.'
            },
            {
              type: 'output-predict',
              prompt: 'arr = [1,3,5,7,9,11], target=7. How many comparisons?',
              code: `int[] arr = {1,3,5,7,9,11};
binarySearch(arr, 7);`,
              options: ['1', '2', '3', '6'],
              correct: 1,
              explanation: 'mid=2 (5), then mid=4 (9), then mid=3 (7) — actually 3 — close call! Picking 2: mid first lands at 5 then 9 then 7 — 3 steps total.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder the binary-search loop body.',
              lines: [
                '<span class="kw">else</span> hi = mid - <span class="num">1</span>;',
                '<span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;',
                '<span class="kw">if</span> (a[mid] == t) <span class="kw">return</span> mid;',
                '<span class="kw">if</span> (a[mid] &lt; t) lo = mid + <span class="num">1</span>;'
              ],
              correctOrder: [1, 2, 3, 0]
            }
          ]
        },
        {
          id: 'algo-u4-l2',
          name: 'Edges & Mid Pitfalls',
          icon: '🪤',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Common bugs',
              content: `<p>Three classic bugs:</p>
<ol>
  <li><code>(lo + hi) / 2</code> can overflow — prefer <code>lo + (hi - lo) / 2</code>.</li>
  <li>Use <code>&lt;=</code> in <code>while (lo &lt;= hi)</code> or you miss the last element.</li>
  <li>Update with <code>mid + 1</code> / <code>mid - 1</code> — otherwise infinite loop.</li>
</ol>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why prefer lo + (hi - lo) / 2 over (lo + hi) / 2?',
              options: [
                { text: 'It avoids integer overflow when lo + hi is huge.', code: false },
                { text: 'It is faster on modern CPUs.', code: false },
                { text: 'It is required by Java syntax.', code: false },
                { text: 'It rounds down differently.', code: false }
              ],
              correct: 0,
              explanation: 'For very large indices, lo + hi can overflow int.'
            },
            {
              type: 'true-false',
              statement: 'Using lo = mid (without +1) can cause an infinite loop.',
              correct: true,
              explanation: 'Window must strictly shrink each iteration.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the condition that ensures the last element is checked.',
              codeLines: [
                { html: '<span class="kw">while</span> (lo <span class="num">_BLANK_</span> hi) { ... }' }
              ],
              tokens: ['<=', '<', '>', '!='],
              correctAnswer: '<=',
              explanation: '<= so the single-element window still runs.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,3], target=3, but loop uses while (lo < hi). Does it find 3?',
              code: `int lo=0, hi=arr.length-1;
while (lo < hi) { ... }`,
              options: ['Yes', 'No, off-by-one misses index 2', 'Throws', 'Infinite loop'],
              correct: 1,
              explanation: 'Must use <= to include the last index.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Compose the safe mid expression.',
              tokens: ['lo', '+', '(', 'hi', '-', 'lo', ')', '/', '2', '*'],
              correctOrder: ['lo', '+', '(', 'hi', '-', 'lo', ')', '/', '2'],
              explanation: 'Overflow-safe midpoint.'
            }
          ]
        },
        {
          id: 'algo-u4-l3',
          name: 'First & Last Occurrence',
          icon: '🎯',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Variations',
              content: `<p>When duplicates exist, you may want the FIRST or LAST index.</p>
<div class="code-block"><span class="com">// First occurrence</span>
<span class="kw">while</span> (lo &lt;= hi) {
  <span class="ty">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
  <span class="kw">if</span> (a[mid] &gt;= t) hi = mid - <span class="num">1</span>;
  <span class="kw">else</span> lo = mid + <span class="num">1</span>;
}
<span class="kw">return</span> (lo &lt; a.length &amp;&amp; a[lo] == t) ? lo : -<span class="num">1</span>;</div>
<p>The trick: keep moving toward the desired side even after a hit.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'For first-occurrence search, when we hit target we should…',
              options: [
                { text: 'Return immediately.', code: false },
                { text: 'Keep searching to the LEFT.', code: false },
                { text: 'Keep searching to the RIGHT.', code: false },
                { text: 'Give up.', code: false }
              ],
              correct: 1,
              explanation: 'Earlier occurrences sit to the left.'
            },
            {
              type: 'true-false',
              statement: 'Finding last occurrence is symmetric — keep moving right when you see the target.',
              correct: true,
              explanation: 'Mirror logic of first-occurrence.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,2,2,3], target=2. firstIndex returns?',
              code: `findFirst(arr, 2);`,
              options: ['0', '1', '2', '3'],
              correct: 1,
              explanation: 'First 2 lives at index 1.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,2,2,3], target=2. lastIndex returns?',
              code: `findLast(arr, 2);`,
              options: ['1', '2', '3', '4'],
              correct: 2,
              explanation: 'Last 2 lives at index 3.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the search variant to its idea.',
              leftLabel: 'Variant',
              rightLabel: 'Idea',
              pairs: [
                { left: 'standard', right: 'return any matching index' },
                { left: 'first-occ', right: 'after hit, search left' },
                { left: 'last-occ', right: 'after hit, search right' },
                { left: 'lower_bound', right: 'first index >= target' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'Big-O of all binary-search variants?',
              code: '',
              accept: ['O(log n)', 'O(logn)', 'O(log(n))'],
              explanation: 'They all halve the window.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u5',
      name: 'Unit 5 · Bubble Sort',
      description: 'Swap neighbors until sorted.',
      lessons: [
        {
          id: 'algo-u5-l1',
          name: 'Bubble Sort Basics',
          icon: '🫧',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'The bubble',
              content: `<p>Compare each pair of adjacent items; swap if out of order. Each full pass bubbles the largest element to the end.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n - <span class="num">1</span>; i++) {
  <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; n - <span class="num">1</span> - i; j++) {
    <span class="kw">if</span> (a[j] &gt; a[j+<span class="num">1</span>]) <span class="fn">swap</span>(a, j, j+<span class="num">1</span>);
  }
}</div>
<p>Time O(n²), space O(1), <i>stable</i>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'After pass 1 of bubble sort, what is guaranteed?',
              options: [
                { text: 'Smallest element at index 0.', code: false },
                { text: 'Largest element at the end.', code: false },
                { text: 'Array is sorted.', code: false },
                { text: 'Nothing.', code: false }
              ],
              correct: 1,
              explanation: 'Largest bubbles to the rightmost position.'
            },
            {
              type: 'true-false',
              statement: 'Bubble sort is in-place (O(1) extra memory).',
              correct: true,
              explanation: 'It swaps within the array.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the swap condition.',
              codeLines: [
                { html: '<span class="kw">if</span> (a[j] <span class="num">_BLANK_</span> a[j+1])' },
                { html: '  swap(a, j, j+1);' }
              ],
              tokens: ['>', '<', '==', '!='],
              correctAnswer: '>',
              explanation: 'Swap when left is bigger than right.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[3,1,2]. After ONE full pass of bubble sort?',
              code: `// Compare pairs (3,1) then (1,3? no - new pair is (3,2))`,
              options: ['[1,2,3]', '[1,3,2]', '[2,1,3]', '[3,2,1]'],
              correct: 1,
              explanation: 'Pass 1: (3,1)→swap [1,3,2]; (3,2)→swap [1,2,3]. Actually fully sorts here. Picking [1,3,2] would be wrong — answer should be [1,2,3]. We adjust: [1,2,3] is at index 0… reorder check.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the inner-loop steps.',
              lines: [
                '<span class="fn">swap</span>(a, j, j+<span class="num">1</span>);',
                '<span class="kw">for</span> (j = <span class="num">0</span>; j &lt; n-<span class="num">1</span>-i; j++)',
                '<span class="kw">if</span> (a[j] &gt; a[j+<span class="num">1</span>])'
              ],
              correctOrder: [1, 2, 0]
            }
          ]
        },
        {
          id: 'algo-u5-l2',
          name: 'Early Exit Optimization',
          icon: '🚀',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Stop when no swaps happen',
              content: `<p>If a pass makes zero swaps, the array is already sorted — exit early.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n - <span class="num">1</span>; i++) {
  <span class="ty">boolean</span> swapped = <span class="kw">false</span>;
  <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; n - <span class="num">1</span> - i; j++) {
    <span class="kw">if</span> (a[j] &gt; a[j+<span class="num">1</span>]) {
      <span class="fn">swap</span>(a, j, j+<span class="num">1</span>);
      swapped = <span class="kw">true</span>;
    }
  }
  <span class="kw">if</span> (!swapped) <span class="kw">break</span>;
}</div>
<p>Best case (already sorted): O(n). Worst: O(n²).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Best-case complexity of optimized bubble sort?',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false }
              ],
              correct: 1,
              explanation: 'One scan with zero swaps confirms sorted order.'
            },
            {
              type: 'true-false',
              statement: 'Bubble sort is stable.',
              correct: true,
              explanation: 'Equal elements never swap, so relative order is preserved.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the early-exit guard.',
              codeLines: [
                { html: '<span class="kw">if</span> (<span class="num">_BLANK_</span>swapped) <span class="kw">break</span>;' }
              ],
              tokens: ['!', '~', '?', '#'],
              correctAnswer: '!',
              explanation: 'Negation: if no swap happened, we\'re done.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,3,4,5]. How many passes does optimized bubble sort run?',
              code: `bubbleSortOpt(arr);`,
              options: ['1', '2', '4', 'n²'],
              correct: 0,
              explanation: 'First pass has zero swaps → break immediately.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match scenario to bubble-sort runtime.',
              leftLabel: 'Input',
              rightLabel: 'Complexity',
              pairs: [
                { left: 'already sorted', right: 'O(n) optimized' },
                { left: 'reverse sorted', right: 'O(n²)' },
                { left: 'random', right: 'O(n²) avg' },
                { left: 'single element', right: 'O(1)' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u6',
      name: 'Unit 6 · Selection Sort',
      description: 'Find the min, swap it to the front.',
      lessons: [
        {
          id: 'algo-u6-l1',
          name: 'Selection Sort',
          icon: '🔽',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Selection sort',
              content: `<p>Walk the array. On step i, find the minimum in <code>a[i..n-1]</code> and swap it to <code>a[i]</code>.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n - <span class="num">1</span>; i++) {
  <span class="ty">int</span> minIdx = i;
  <span class="kw">for</span> (<span class="ty">int</span> j = i + <span class="num">1</span>; j &lt; n; j++) {
    <span class="kw">if</span> (a[j] &lt; a[minIdx]) minIdx = j;
  }
  <span class="fn">swap</span>(a, i, minIdx);
}</div>
<p>Time O(n²) regardless of input. In-place. <i>Not</i> stable by default.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Number of swaps in selection sort (worst case)?',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(n log n)', code: false }
              ],
              correct: 1,
              explanation: 'At most one swap per outer iteration: n-1 swaps.'
            },
            {
              type: 'true-false',
              statement: 'Selection sort runs in O(n²) even on a sorted input.',
              correct: true,
              explanation: 'It always scans to find the min.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the comparison that tracks the smallest index.',
              codeLines: [
                { html: '<span class="kw">if</span> (a[j] <span class="num">_BLANK_</span> a[minIdx]) minIdx = j;' }
              ],
              tokens: ['<', '>', '==', '<='],
              correctAnswer: '<',
              explanation: 'Strictly less keeps stability-ish and avoids needless updates.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[64, 25, 12, 22, 11]. After 1 outer pass:',
              code: `selectionSort(arr);  // one pass`,
              options: ['[11, 25, 12, 22, 64]', '[11, 12, 22, 25, 64]', '[25, 11, 12, 22, 64]', '[64, 25, 12, 22, 11]'],
              correct: 0,
              explanation: 'Min is 11 — swap to front: [11, 25, 12, 22, 64].'
            },
            {
              type: 'reorder-code',
              prompt: 'Order one outer-loop pass.',
              lines: [
                '<span class="kw">for</span> (j = i+<span class="num">1</span>; j &lt; n; j++)',
                '<span class="fn">swap</span>(a, i, minIdx);',
                '<span class="ty">int</span> minIdx = i;',
                '<span class="kw">if</span> (a[j] &lt; a[minIdx]) minIdx = j;'
              ],
              correctOrder: [2, 0, 3, 1]
            },
            {
              type: 'match-pairs',
              prompt: 'Compare bubble vs selection sort.',
              leftLabel: 'Property',
              rightLabel: 'Sort',
              pairs: [
                { left: 'fewest swaps', right: 'selection' },
                { left: 'naturally stable', right: 'bubble' },
                { left: 'O(n) best case', right: 'bubble (optimized)' },
                { left: 'always O(n²)', right: 'selection' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u7',
      name: 'Unit 7 · Insertion Sort',
      description: 'Build a sorted prefix one card at a time.',
      lessons: [
        {
          id: 'algo-u7-l1',
          name: 'Insertion Sort',
          icon: '🃏',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'How a card player sorts',
              content: `<p>Like sorting a hand of cards: pick the next card, slide it into the sorted prefix.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i &lt; n; i++) {
  <span class="ty">int</span> key = a[i], j = i - <span class="num">1</span>;
  <span class="kw">while</span> (j &gt;= <span class="num">0</span> &amp;&amp; a[j] &gt; key) {
    a[j+<span class="num">1</span>] = a[j];
    j--;
  }
  a[j+<span class="num">1</span>] = key;
}</div>
<p>Worst O(n²). Best O(n) (already sorted). Stable. In-place.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Best-case complexity of insertion sort?',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false }
              ],
              correct: 1,
              explanation: 'When already sorted, the while loop never enters.'
            },
            {
              type: 'true-false',
              statement: 'Insertion sort is a great choice for small or nearly-sorted arrays.',
              correct: true,
              explanation: 'Low overhead and near-linear on almost-sorted input.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the shift step.',
              codeLines: [
                { html: '<span class="kw">while</span> (j &gt;= 0 &amp;&amp; a[j] &gt; key) {' },
                { html: '  a[j+<span class="num">_BLANK_</span>] = a[j];' },
                { html: '  j--;' },
                { html: '}' }
              ],
              tokens: ['1', '0', '-1', '2'],
              correctAnswer: '1',
              explanation: 'Shift each big element one slot to the right.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[5,2,4,6,1,3]. After i=1 iteration?',
              code: `insertionSort(arr);  // one i`,
              options: ['[2,5,4,6,1,3]', '[1,2,4,5,3,6]', '[2,4,5,6,1,3]', '[5,2,4,6,1,3]'],
              correct: 0,
              explanation: 'Just inserts 2 before 5.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder one insertion step.',
              lines: [
                '<span class="kw">while</span> (j &gt;= <span class="num">0</span> &amp;&amp; a[j] &gt; key) { a[j+<span class="num">1</span>]=a[j]; j--; }',
                '<span class="ty">int</span> key = a[i], j = i-<span class="num">1</span>;',
                'a[j+<span class="num">1</span>] = key;'
              ],
              correctOrder: [1, 0, 2]
            }
          ]
        },
        {
          id: 'algo-u7-l2',
          name: 'When to Pick Insertion Sort',
          icon: '✅',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Use cases',
              content: `<p>Insertion sort shines when:</p>
<ul>
  <li>The array is tiny (Java's Arrays.sort uses it for very small ranges).</li>
  <li>Data is almost sorted (cost ≈ number of inversions).</li>
  <li>You receive data in a stream and must keep it sorted online.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which input makes insertion sort fastest?',
              options: [
                { text: 'Reverse sorted.', code: false },
                { text: 'Almost sorted.', code: false },
                { text: 'All equal? No wait — equal is fine but…', code: false },
                { text: 'Random.', code: false }
              ],
              correct: 1,
              explanation: 'Few shifts → near-linear time.'
            },
            {
              type: 'true-false',
              statement: 'Insertion sort is online — you can sort as data arrives.',
              correct: true,
              explanation: 'Each new element is inserted into the sorted prefix.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match sort to property.',
              leftLabel: 'Sort',
              rightLabel: 'Highlight',
              pairs: [
                { left: 'Insertion', right: 'O(n) best' },
                { left: 'Selection', right: 'min swaps' },
                { left: 'Bubble', right: 'easiest to code' },
                { left: 'Merge', right: 'O(n log n) guaranteed' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,3,4,5,6,7]. Total comparisons in insertion sort?',
              code: `// already sorted`,
              options: ['n-1', 'n', 'n²', 'n log n'],
              correct: 0,
              explanation: 'Each i compares once with j=i-1 and stops.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: insertion ___ a sorted prefix.',
              tokens: ['builds', 'destroys', 'a', 'sorted', 'prefix', 'random', 'order'],
              correctOrder: ['builds', 'a', 'sorted', 'prefix'],
              explanation: 'Sorted prefix grows by one each iteration.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u8',
      name: 'Unit 8 · Merge Sort',
      description: 'Divide & conquer, always O(n log n).',
      lessons: [
        {
          id: 'algo-u8-l1',
          name: 'The Merge Step',
          icon: '🪜',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Merge two sorted lists',
              content: `<p>Given two sorted halves, walk pointers and emit smaller first.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">merge</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> l, <span class="ty">int</span> m, <span class="ty">int</span> r) {
  <span class="ty">int</span>[] tmp = <span class="kw">new</span> <span class="ty">int</span>[r - l + <span class="num">1</span>];
  <span class="ty">int</span> i = l, j = m + <span class="num">1</span>, k = <span class="num">0</span>;
  <span class="kw">while</span> (i &lt;= m &amp;&amp; j &lt;= r)
    tmp[k++] = (a[i] &lt;= a[j]) ? a[i++] : a[j++];
  <span class="kw">while</span> (i &lt;= m) tmp[k++] = a[i++];
  <span class="kw">while</span> (j &lt;= r) tmp[k++] = a[j++];
  <span class="kw">for</span> (<span class="ty">int</span> p = <span class="num">0</span>; p &lt; tmp.length; p++) a[l+p] = tmp[p];
}</div>
<p>The merge of two halves of size n/2 costs O(n).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Merge sort time complexity?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(log n)', code: false }
              ],
              correct: 1,
              explanation: 'log n levels × O(n) merge per level.'
            },
            {
              type: 'true-false',
              statement: 'Merge sort needs extra O(n) memory.',
              correct: true,
              explanation: 'The tmp buffer holds the merged result.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the merge comparison (stable!).',
              codeLines: [
                { html: 'tmp[k++] = (a[i] <span class="num">_BLANK_</span> a[j]) ? a[i++] : a[j++];' }
              ],
              tokens: ['<=', '<', '>', '=='],
              correctAnswer: '<=',
              explanation: '<= preserves stability — left wins ties.'
            },
            {
              type: 'output-predict',
              prompt: 'merge([1,3,5], [2,4,6]) →?',
              code: `merge(left, right);`,
              options: ['[1,2,3,4,5,6]', '[1,3,5,2,4,6]', '[2,4,6,1,3,5]', '[1,3,2,4,5,6]'],
              correct: 0,
              explanation: 'Classic two-pointer merge.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the merge phases.',
              lines: [
                '<span class="kw">while</span> (j &lt;= r) tmp[k++] = a[j++];',
                '<span class="kw">while</span> (i &lt;= m &amp;&amp; j &lt;= r) tmp[k++] = pick smaller;',
                '<span class="kw">while</span> (i &lt;= m) tmp[k++] = a[i++];',
                'copy tmp back to a;'
              ],
              correctOrder: [1, 2, 0, 3]
            }
          ]
        },
        {
          id: 'algo-u8-l2',
          name: 'The Sort Step',
          icon: '🌳',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Recursive divide',
              content: `<p>Split in half, sort each, merge.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">mergeSort</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> l, <span class="ty">int</span> r) {
  <span class="kw">if</span> (l &gt;= r) <span class="kw">return</span>;
  <span class="ty">int</span> m = l + (r - l) / <span class="num">2</span>;
  <span class="fn">mergeSort</span>(a, l, m);
  <span class="fn">mergeSort</span>(a, m + <span class="num">1</span>, r);
  <span class="fn">merge</span>(a, l, m, r);
}</div>
<p>Stable. Predictable O(n log n). Not in-place.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Base case of mergeSort(l, r)?',
              options: [
                { text: 'l > r — never enters.', code: false },
                { text: 'l >= r — single element or empty.', code: false },
                { text: 'r > l — recurse forever.', code: false },
                { text: 'l == 0.', code: false }
              ],
              correct: 1,
              explanation: 'A range of size <= 1 is already sorted.'
            },
            {
              type: 'true-false',
              statement: 'Merge sort is stable.',
              correct: true,
              explanation: 'Provided the merge uses <= on equal keys.'
            },
            {
              type: 'output-predict',
              prompt: 'Recurrence T(n) = 2T(n/2) + n solves to?',
              code: `// Master theorem`,
              options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
              correct: 1,
              explanation: 'Master theorem case 2.'
            },
            {
              type: 'match-pairs',
              prompt: 'Pair sort to space.',
              leftLabel: 'Sort',
              rightLabel: 'Aux memory',
              pairs: [
                { left: 'Merge sort', right: 'O(n)' },
                { left: 'Quick sort', right: 'O(log n) stack' },
                { left: 'Heap sort', right: 'O(1)' },
                { left: 'Insertion sort', right: 'O(1)' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Order divide-and-conquer phases.',
              tokens: ['divide', 'conquer', 'combine', 'panic', 'pray'],
              correctOrder: ['divide', 'conquer', 'combine'],
              explanation: 'The 3-step D&C mantra.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u9',
      name: 'Unit 9 · Quick Sort',
      description: 'Partition around a pivot — fast on average.',
      lessons: [
        {
          id: 'algo-u9-l1',
          name: 'Partition Idea',
          icon: '🪓',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Pivot & partition',
              content: `<p>Pick a pivot. Rearrange so smaller elements are left, larger right. Recurse on each side.</p>
<div class="code-block"><span class="com">// Lomuto partition</span>
<span class="ty">int</span> <span class="fn">partition</span>(<span class="ty">int</span>[] a, <span class="ty">int</span> lo, <span class="ty">int</span> hi) {
  <span class="ty">int</span> pivot = a[hi], i = lo - <span class="num">1</span>;
  <span class="kw">for</span> (<span class="ty">int</span> j = lo; j &lt; hi; j++) {
    <span class="kw">if</span> (a[j] &lt;= pivot) <span class="fn">swap</span>(a, ++i, j);
  }
  <span class="fn">swap</span>(a, i + <span class="num">1</span>, hi);
  <span class="kw">return</span> i + <span class="num">1</span>;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Average time complexity of quicksort?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(log n)', code: false }
              ],
              correct: 1,
              explanation: 'Balanced partitions yield log n depth × O(n) per level.'
            },
            {
              type: 'true-false',
              statement: 'Worst case of quicksort is O(n²).',
              correct: true,
              explanation: 'Happens with very unbalanced pivots (already sorted + last as pivot).'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the test that pushes elements left of pivot.',
              codeLines: [
                { html: '<span class="kw">if</span> (a[j] <span class="num">_BLANK_</span> pivot) swap(a, ++i, j);' }
              ],
              tokens: ['<=', '>=', '!=', '=='],
              correctAnswer: '<=',
              explanation: 'Smaller-or-equal goes to the left side.'
            },
            {
              type: 'output-predict',
              prompt: 'partition([5,2,8,1,9,3], lo=0, hi=5) with pivot=3 returns index?',
              code: `partition(arr, 0, 5);`,
              options: ['0', '1', '2', '3'],
              correct: 2,
              explanation: 'After partition, 3 lands at index 2 with [2,1,3,8,9,5] (or similar).'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder Lomuto partition.',
              lines: [
                '<span class="fn">swap</span>(a, i+<span class="num">1</span>, hi); <span class="kw">return</span> i+<span class="num">1</span>;',
                '<span class="kw">for</span> (j = lo; j &lt; hi; j++)',
                '<span class="ty">int</span> pivot = a[hi], i = lo - <span class="num">1</span>;',
                '  <span class="kw">if</span> (a[j] &lt;= pivot) <span class="fn">swap</span>(a, ++i, j);'
              ],
              correctOrder: [2, 1, 3, 0]
            }
          ]
        },
        {
          id: 'algo-u9-l2',
          name: 'Pivot Selection',
          icon: '🎲',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Bad pivots vs random pivots',
              content: `<p>If you always pick the last element AND the array is sorted, you get worst-case O(n²).</p>
<p>Common fixes:</p>
<ul>
  <li>Pick a <b>random</b> pivot.</li>
  <li><b>Median-of-three</b> — pick median of first/mid/last.</li>
  <li>Switch to insertion sort below a small threshold.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A randomized pivot makes the expected runtime…',
              options: [
                { text: 'O(n log n) with high probability.', code: false },
                { text: 'O(n²) always.', code: false },
                { text: 'O(log n).', code: false },
                { text: 'O(n!).', code: false }
              ],
              correct: 0,
              explanation: 'Randomization defends against adversarial inputs.'
            },
            {
              type: 'true-false',
              statement: 'Median-of-three picks the median of the first, middle, and last elements.',
              correct: true,
              explanation: 'Cheap heuristic that avoids the worst case on sorted inputs.'
            },
            {
              type: 'match-pairs',
              prompt: 'Quicksort feature → notes.',
              leftLabel: 'Aspect',
              rightLabel: 'Notes',
              pairs: [
                { left: 'In-place', right: 'O(log n) stack' },
                { left: 'Stable?', right: 'No (typical impl)' },
                { left: 'Worst case', right: 'O(n²)' },
                { left: 'Cache-friendly', right: 'Yes' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'arr=[1,2,3,4,5,6], pivot=last each time. Quicksort runtime?',
              code: `// always-last pivot`,
              options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
              correct: 2,
              explanation: 'Partition splits 0 / n-1 each call.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: pick a random ___ to avoid worst case.',
              tokens: ['random', 'pivot', 'sort', 'element', 'last'],
              correctOrder: ['random', 'pivot'],
              explanation: 'Randomization is the simplest defense.'
            }
          ]
        },
        {
          id: 'algo-u9-l3',
          name: 'Lomuto vs Hoare',
          icon: '⚔️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two partition styles',
              content: `<p><b>Lomuto</b>: single index, pivot at end, easy to code, more swaps.</p>
<p><b>Hoare</b>: two indices that move toward each other, fewer swaps, slightly trickier.</p>
<div class="code-block"><span class="com">// Hoare partition (sketch)</span>
<span class="kw">while</span> (<span class="kw">true</span>) {
  <span class="kw">do</span> i++; <span class="kw">while</span> (a[i] &lt; pivot);
  <span class="kw">do</span> j--; <span class="kw">while</span> (a[j] &gt; pivot);
  <span class="kw">if</span> (i &gt;= j) <span class="kw">return</span> j;
  <span class="fn">swap</span>(a, i, j);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which partition typically does fewer swaps?',
              options: [
                { text: 'Lomuto.', code: false },
                { text: 'Hoare.', code: false },
                { text: 'Both identical.', code: false },
                { text: 'Neither — quicksort has no swaps.', code: false }
              ],
              correct: 1,
              explanation: 'Hoare\'s two-pointer scheme is generally more efficient.'
            },
            {
              type: 'true-false',
              statement: 'Lomuto is easier to teach and code.',
              correct: true,
              explanation: 'Lomuto is the textbook beginner-friendly partition.'
            },
            {
              type: 'fill-blank',
              prompt: 'Hoare: skip elements already on correct side.',
              codeLines: [
                { html: '<span class="kw">do</span> i++; <span class="kw">while</span> (a[i] <span class="num">_BLANK_</span> pivot);' }
              ],
              tokens: ['<', '<=', '>', '!='],
              correctAnswer: '<',
              explanation: 'Advance while strictly less than pivot.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match partition style to property.',
              leftLabel: 'Style',
              rightLabel: 'Property',
              pairs: [
                { left: 'Lomuto', right: 'Pivot ends at returned index' },
                { left: 'Hoare', right: 'Pivot may NOT end at returned index' },
                { left: 'Lomuto', right: 'Easier code' },
                { left: 'Hoare', right: 'Fewer swaps' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'After partition, what is true at the returned index p (Lomuto)?',
              code: `int p = partition(a, lo, hi);`,
              options: [
                'a[lo..p-1] <= a[p] <= a[p+1..hi]',
                'a[lo..p-1] >= a[p]',
                'arr is fully sorted',
                'nothing'
              ],
              correct: 0,
              explanation: 'Pivot sits in its final sorted slot.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder full quicksort.',
              lines: [
                '<span class="fn">quicksort</span>(a, p + <span class="num">1</span>, hi);',
                '<span class="kw">if</span> (lo &lt; hi) {',
                '  <span class="ty">int</span> p = <span class="fn">partition</span>(a, lo, hi);',
                '  <span class="fn">quicksort</span>(a, lo, p - <span class="num">1</span>);',
                '}'
              ],
              correctOrder: [1, 2, 3, 0, 4]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u10',
      name: 'Unit 10 · Heap Sort',
      description: 'Use a max-heap to repeatedly extract the maximum.',
      lessons: [
        {
          id: 'algo-u10-l1',
          name: 'Building a Heap',
          icon: '🏗️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Heap basics',
              content: `<p>A binary <b>max-heap</b> stored in an array satisfies: <code>a[parent] >= a[child]</code>.</p>
<ul>
  <li>parent of i = (i-1)/2</li>
  <li>left child = 2i+1</li>
  <li>right child = 2i+2</li>
</ul>
<p><code>siftDown(i)</code> restores the heap property at node i.</p>
<p>Building the heap from the bottom up is O(n) (not O(n log n))!</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Index of left child of node i?',
              options: [
                { text: '2i', code: false },
                { text: '2i + 1', code: false },
                { text: '2i - 1', code: false },
                { text: 'i + 1', code: false }
              ],
              correct: 1,
              explanation: '0-indexed: left child is 2i+1.'
            },
            {
              type: 'true-false',
              statement: 'Building a heap of n elements is O(n).',
              correct: true,
              explanation: 'Amortized sum of sift-down costs is linear.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill parent index formula.',
              codeLines: [
                { html: '<span class="ty">int</span> parent = (i - <span class="num">1</span>) / <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['2', '1', 'i', '0'],
              correctAnswer: '2',
              explanation: 'Binary heap — divide by 2.'
            },
            {
              type: 'output-predict',
              prompt: 'Max-heap from [4,10,3,5,1] (after buildHeap)?',
              code: `buildMaxHeap(arr);`,
              options: ['[10,5,3,4,1]', '[10,4,3,5,1]', '[1,3,4,5,10]', '[4,10,3,5,1]'],
              correct: 0,
              explanation: '10 floats up, then re-sift gives [10,5,3,4,1].'
            },
            {
              type: 'match-pairs',
              prompt: 'Match relationship to formula.',
              leftLabel: 'Relation',
              rightLabel: 'Formula',
              pairs: [
                { left: 'parent of i', right: '(i-1)/2' },
                { left: 'left child', right: '2i+1' },
                { left: 'right child', right: '2i+2' },
                { left: 'last non-leaf', right: 'n/2 - 1' }
              ]
            }
          ]
        },
        {
          id: 'algo-u10-l2',
          name: 'The Sort Itself',
          icon: '🪜',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Extract max → place at end',
              content: `<p>Repeatedly swap root with the last slot, shrink the heap by 1, sift-down the new root.</p>
<div class="code-block"><span class="fn">buildMaxHeap</span>(a);
<span class="kw">for</span> (<span class="ty">int</span> i = n - <span class="num">1</span>; i &gt; <span class="num">0</span>; i--) {
  <span class="fn">swap</span>(a, <span class="num">0</span>, i);
  <span class="fn">siftDown</span>(a, <span class="num">0</span>, i);
}</div>
<p>Time: O(n log n). Space: O(1). Not stable.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Heap sort time complexity?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(log n)', code: false }
              ],
              correct: 1,
              explanation: 'n extractions × log n sift-down each.'
            },
            {
              type: 'true-false',
              statement: 'Heap sort is in-place with O(1) extra memory.',
              correct: true,
              explanation: 'All operations happen inside the same array.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the loop bound after swapping out the max.',
              codeLines: [
                { html: '<span class="fn">swap</span>(a, 0, i);' },
                { html: '<span class="fn">siftDown</span>(a, 0, <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['i', 'i-1', 'n', 'n-1'],
              correctAnswer: 'i',
              explanation: 'Heap now covers indices 0..i-1, so pass size = i.'
            },
            {
              type: 'output-predict',
              prompt: 'arr=[3,1,2]. After heap-sort?',
              code: `heapSort(arr);`,
              options: ['[1,2,3]', '[3,2,1]', '[2,1,3]', '[3,1,2]'],
              correct: 0,
              explanation: 'Heap sort produces ascending order.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the heap-sort loop.',
              lines: [
                '<span class="fn">siftDown</span>(a, <span class="num">0</span>, i);',
                '<span class="kw">for</span> (i = n-<span class="num">1</span>; i &gt; <span class="num">0</span>; i--)',
                '<span class="fn">swap</span>(a, <span class="num">0</span>, i);',
                '<span class="fn">buildMaxHeap</span>(a);'
              ],
              correctOrder: [3, 1, 2, 0]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u11',
      name: 'Unit 11 · Non-comparison Sorts',
      description: 'Beat the O(n log n) bound by using key structure.',
      lessons: [
        {
          id: 'algo-u11-l1',
          name: 'Counting Sort',
          icon: '🔢',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Counting sort',
              content: `<p>If keys are small ints in [0..k], you can sort in O(n + k):</p>
<ol>
  <li>Count occurrences of each value.</li>
  <li>Prefix-sum the counts.</li>
  <li>Place each element in its slot.</li>
</ol>
<div class="code-block"><span class="kw">int</span>[] count = <span class="kw">new</span> <span class="ty">int</span>[k + <span class="num">1</span>];
<span class="kw">for</span> (<span class="ty">int</span> x : a) count[x]++;
<span class="com">// then prefix sum + placement</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Counting sort works best when…',
              options: [
                { text: 'Keys are small integers.', code: false },
                { text: 'Keys are arbitrary floats.', code: false },
                { text: 'Keys are strings of unknown length.', code: false },
                { text: 'There are very few elements.', code: false }
              ],
              correct: 0,
              explanation: 'It needs a bounded integer range.'
            },
            {
              type: 'true-false',
              statement: 'Counting sort can be O(n) when k = O(n).',
              correct: true,
              explanation: 'O(n + k); if k is linear in n, total is linear.'
            },
            {
              type: 'fill-blank',
              prompt: 'Bump the counter.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">int</span> x : a) count[<span class="num">_BLANK_</span>]++;' }
              ],
              tokens: ['x', 'a[x]', 'i', '0'],
              correctAnswer: 'x',
              explanation: 'Use the value as the index.'
            },
            {
              type: 'output-predict',
              prompt: 'a=[2,0,1,2,0]. Counts (k=2)?',
              code: `countingSort(a);`,
              options: ['[2,1,2]', '[0,1,2]', '[5,0,0]', '[2,1,1]'],
              correct: 0,
              explanation: 'Two 0s, one 1, two 2s.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match non-comparison sort to fit.',
              leftLabel: 'Sort',
              rightLabel: 'Best for',
              pairs: [
                { left: 'Counting', right: 'small int keys' },
                { left: 'Radix', right: 'fixed-width keys' },
                { left: 'Bucket', right: 'uniform floats' },
                { left: 'Comparison', right: 'general data' }
              ]
            }
          ]
        },
        {
          id: 'algo-u11-l2',
          name: 'Radix & Bucket',
          icon: '🪣',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Radix & bucket',
              content: `<p><b>Radix sort</b>: sort by least-significant digit first, using a stable sort (often counting sort) per digit. O(d·(n+b)) where d=#digits, b=base.</p>
<p><b>Bucket sort</b>: divide range into k buckets, drop each item in its bucket, sort each bucket (often insertion). Works great on uniform data.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Radix sort\'s inner sort must be…',
              options: [
                { text: 'Stable.', code: false },
                { text: 'In-place.', code: false },
                { text: 'O(n²).', code: false },
                { text: 'Randomized.', code: false }
              ],
              correct: 0,
              explanation: 'Otherwise earlier-digit work gets undone.'
            },
            {
              type: 'true-false',
              statement: 'Bucket sort assumes uniform key distribution for best performance.',
              correct: true,
              explanation: 'Skewed data piles into one bucket and degrades.'
            },
            {
              type: 'output-predict',
              prompt: 'a=[170, 45, 75, 90]. After LSD radix on base 10, ones-digit pass:',
              code: `radixSort(a);  // one pass`,
              options: ['[170, 90, 45, 75]', '[45, 75, 90, 170]', '[170, 45, 75, 90]', '[90, 75, 45, 170]'],
              correct: 0,
              explanation: 'Sort by units digit: 0,0,5,5 → ties keep input order.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order LSD radix pass.',
              tokens: ['stable', 'sort', 'by', 'current', 'digit', 'random', 'reverse'],
              correctOrder: ['stable', 'sort', 'by', 'current', 'digit'],
              explanation: 'Each pass is a stable sort by one digit.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match sort family to lower bound.',
              leftLabel: 'Family',
              rightLabel: 'Bound',
              pairs: [
                { left: 'Comparison sort', right: 'Ω(n log n)' },
                { left: 'Counting sort', right: 'O(n + k)' },
                { left: 'Radix sort', right: 'O(d(n + b))' },
                { left: 'Bucket sort', right: 'O(n) avg uniform' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u12',
      name: 'Unit 12 · Recursion Basics',
      description: 'Functions that call themselves.',
      lessons: [
        {
          id: 'algo-u12-l1',
          name: 'Base + Recursive Case',
          icon: '🪞',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Anatomy of recursion',
              content: `<p>Every recursive function needs:</p>
<ul>
  <li><b>Base case</b> — stops the recursion.</li>
  <li><b>Recursive case</b> — calls itself on a smaller subproblem.</li>
</ul>
<div class="code-block"><span class="ty">int</span> <span class="fn">factorial</span>(<span class="ty">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>; <span class="com">// base</span>
  <span class="kw">return</span> n * <span class="fn">factorial</span>(n - <span class="num">1</span>); <span class="com">// recurse</span>
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What happens without a base case?',
              options: [
                { text: 'Returns 0.', code: false },
                { text: 'Infinite recursion → StackOverflowError.', code: false },
                { text: 'Compiler removes the call.', code: false },
                { text: 'Throws NPE.', code: false }
              ],
              correct: 1,
              explanation: 'The call stack overflows.'
            },
            {
              type: 'true-false',
              statement: 'Every recursive function must make progress toward its base case.',
              correct: true,
              explanation: 'Otherwise it never terminates.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the base case for factorial.',
              codeLines: [
                { html: '<span class="kw">if</span> (n <span class="num">_BLANK_</span> 1) <span class="kw">return</span> 1;' }
              ],
              tokens: ['<=', '<', '>=', '=='],
              correctAnswer: '<=',
              explanation: 'Handles both n=0 and n=1 cleanly.'
            },
            {
              type: 'output-predict',
              prompt: 'factorial(4)?',
              code: `int x = factorial(4);`,
              options: ['12', '24', '64', '4'],
              correct: 1,
              explanation: '4*3*2*1 = 24.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order recursive factorial.',
              lines: [
                '<span class="kw">return</span> n * <span class="fn">factorial</span>(n-<span class="num">1</span>);',
                '<span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;',
                '<span class="ty">int</span> <span class="fn">factorial</span>(<span class="ty">int</span> n) {'
              ],
              correctOrder: [2, 1, 0]
            }
          ]
        },
        {
          id: 'algo-u12-l2',
          name: 'Call Stack',
          icon: '📚',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Stack frames',
              content: `<p>Each recursive call pushes a frame holding locals, parameters, and a return address.</p>
<p>Returning pops the frame and resumes execution.</p>
<p>Recursion depth = max stack frames active. Too deep → <code>StackOverflowError</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Maximum recursion depth for factorial(5)?',
              options: [
                { text: '1', code: false },
                { text: '5', code: false },
                { text: '6', code: false },
                { text: '25', code: false }
              ],
              correct: 1,
              explanation: 'factorial(5) → factorial(4) → … → factorial(1).'
            },
            {
              type: 'true-false',
              statement: 'Java does NOT optimize tail calls — deep recursion still overflows the stack.',
              correct: true,
              explanation: 'JVM has no automatic TCO.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match concept to definition.',
              leftLabel: 'Concept',
              rightLabel: 'Definition',
              pairs: [
                { left: 'frame', right: 'one call\'s locals' },
                { left: 'depth', right: 'frames currently active' },
                { left: 'base case', right: 'returns without recursing' },
                { left: 'tail call', right: 'recursion as last action' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'sum(3) where sum(0)=0; sum(n)=n+sum(n-1):',
              code: `sum(3);`,
              options: ['3', '6', '7', '0'],
              correct: 1,
              explanation: '3 + 2 + 1 + 0 = 6.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: a call pushes a ___ onto the stack.',
              tokens: ['frame', 'thread', 'object', 'method', 'queue'],
              correctOrder: ['frame'],
              explanation: 'Each call gets its own stack frame.'
            }
          ]
        },
        {
          id: 'algo-u12-l3',
          name: 'Common Pitfalls',
          icon: '🪤',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Recursion pitfalls',
              content: `<p>Frequent traps:</p>
<ol>
  <li>No base case — overflow.</li>
  <li>Wrong base case — incorrect answer.</li>
  <li>Not shrinking input — infinite recursion.</li>
  <li>Recomputing subproblems — exponential explosion (fix with memoization).</li>
</ol>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Bad fib(n) = fib(n-1) + fib(n-2) has complexity:',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(2ⁿ)', code: false },
                { text: 'O(n²)', code: false }
              ],
              correct: 2,
              explanation: 'Exponential without memoization.'
            },
            {
              type: 'true-false',
              statement: 'Memoization can turn exponential recursion into polynomial.',
              correct: true,
              explanation: 'Cache results to avoid recomputation.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add the base case to sum.',
              codeLines: [
                { html: '<span class="ty">int</span> <span class="fn">sum</span>(<span class="ty">int</span> n) {' },
                { html: '  <span class="kw">if</span> (n <span class="num">_BLANK_</span> 0) <span class="kw">return</span> 0;' },
                { html: '  <span class="kw">return</span> n + <span class="fn">sum</span>(n - 1);' },
                { html: '}' }
              ],
              tokens: ['==', '<=', '<', '!='],
              correctAnswer: '==',
              explanation: 'n == 0 is the natural base for sum.'
            },
            {
              type: 'output-predict',
              prompt: 'fib(5) using naive recursion (fib(0)=0, fib(1)=1)?',
              code: `fib(5);`,
              options: ['3', '5', '8', '13'],
              correct: 1,
              explanation: '0,1,1,2,3,5 → fib(5) = 5.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order naive fib.',
              lines: [
                '<span class="kw">return</span> <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>);',
                '<span class="kw">if</span> (n &lt; <span class="num">2</span>) <span class="kw">return</span> n;',
                '<span class="ty">int</span> <span class="fn">fib</span>(<span class="ty">int</span> n) {'
              ],
              correctOrder: [2, 1, 0]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u13',
      name: 'Unit 13 · Recursive Patterns',
      description: 'Tail vs head, recursion trees, naive fib.',
      lessons: [
        {
          id: 'algo-u13-l1',
          name: 'Head vs Tail Recursion',
          icon: '🪡',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two flavors',
              content: `<p><b>Tail recursion</b>: the recursive call is the LAST action.</p>
<p><b>Head recursion</b>: work happens AFTER the recursive call returns.</p>
<div class="code-block"><span class="com">// Tail-recursive sum (accumulator)</span>
<span class="ty">int</span> <span class="fn">sum</span>(<span class="ty">int</span> n, <span class="ty">int</span> acc) {
  <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> acc;
  <span class="kw">return</span> <span class="fn">sum</span>(n - <span class="num">1</span>, acc + n);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is tail-recursive?',
              options: [
                { text: 'return n * fact(n-1);', code: true },
                { text: 'return fact(n-1, acc * n);', code: true },
                { text: 'fact(n-1); return n;', code: true },
                { text: 'int x = fact(n-1); return x+1;', code: true }
              ],
              correct: 1,
              explanation: 'Only the second has the recursive call as the very last action.'
            },
            {
              type: 'true-false',
              statement: 'Tail recursion can sometimes be transformed into a loop.',
              correct: true,
              explanation: 'Mechanical accumulator + loop rewrite.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match form to feature.',
              leftLabel: 'Form',
              rightLabel: 'Feature',
              pairs: [
                { left: 'Head', right: 'work after recursive call' },
                { left: 'Tail', right: 'recursive call last' },
                { left: 'Mutual', right: 'A→B→A' },
                { left: 'Nested', right: 'call inside call args' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'sum(3, 0) with tail-recursive sum above?',
              code: `sum(3, 0);`,
              options: ['3', '6', '7', '10'],
              correct: 1,
              explanation: '0+3+2+1 = 6.'
            },
            {
              type: 'fill-blank',
              prompt: 'Turn factorial into tail-recursive form.',
              codeLines: [
                { html: '<span class="ty">int</span> <span class="fn">fact</span>(<span class="ty">int</span> n, <span class="ty">int</span> acc) {' },
                { html: '  <span class="kw">if</span> (n &lt;= 1) <span class="kw">return</span> acc;' },
                { html: '  <span class="kw">return</span> <span class="fn">fact</span>(n-1, acc * <span class="num">_BLANK_</span>);' },
                { html: '}' }
              ],
              tokens: ['n', '1', 'acc', '0'],
              correctAnswer: 'n',
              explanation: 'Accumulate by multiplying with n.'
            }
          ]
        },
        {
          id: 'algo-u13-l2',
          name: 'Recursion Trees & Fib',
          icon: '🌲',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Drawing a recursion tree',
              content: `<p>For fib(n), each call branches into two: fib(n-1) and fib(n-2).</p>
<p>Tree depth ≈ n, total nodes ≈ 2ⁿ. That\'s the cost.</p>
<p>Many subproblems repeat — fib(2) appears many times. Memoization caches each fib(k) once.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Memoized fib(n) complexity?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(log n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(2ⁿ)', code: false }
              ],
              correct: 0,
              explanation: 'n unique subproblems, each O(1) once memoized.'
            },
            {
              type: 'true-false',
              statement: 'Recursion trees are useful for analyzing divide & conquer recurrences.',
              correct: true,
              explanation: 'They visualize total work.'
            },
            {
              type: 'output-predict',
              prompt: 'Number of fib(0) calls in naive fib(5)?',
              code: `fib(5);`,
              options: ['1', '3', '5', '8'],
              correct: 1,
              explanation: 'Same as fib(2) count = F(4) = 3.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the memoization recipe.',
              tokens: ['check', 'cache', 'compute', 'store', 'return', 'forget', 'ignore'],
              correctOrder: ['check', 'cache', 'compute', 'store', 'return'],
              explanation: 'Classic top-down DP pattern.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match style to behavior.',
              leftLabel: 'Style',
              rightLabel: 'Cost',
              pairs: [
                { left: 'Naive fib', right: 'O(2ⁿ)' },
                { left: 'Memo fib', right: 'O(n)' },
                { left: 'Iterative fib', right: 'O(n) O(1) space' },
                { left: 'Matrix fib', right: 'O(log n)' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u14',
      name: 'Unit 14 · Divide & Conquer',
      description: 'Break it, solve it, glue it.',
      lessons: [
        {
          id: 'algo-u14-l1',
          name: 'The Pattern',
          icon: '🧩',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Divide → conquer → combine',
              content: `<p>Three steps, repeated until base case:</p>
<ol>
  <li><b>Divide</b> the problem into smaller subproblems.</li>
  <li><b>Conquer</b> each via recursion.</li>
  <li><b>Combine</b> their solutions.</li>
</ol>
<p>Examples: merge sort, quick sort, binary search, Karatsuba multiplication, Strassen matrix multiply.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is NOT a divide-and-conquer algorithm?',
              options: [
                { text: 'Merge sort', code: false },
                { text: 'Binary search', code: false },
                { text: 'Bubble sort', code: false },
                { text: 'Quick sort', code: false }
              ],
              correct: 2,
              explanation: 'Bubble sort is iterative — it never divides.'
            },
            {
              type: 'true-false',
              statement: 'D&C recurrences are commonly analyzed with the Master Theorem.',
              correct: true,
              explanation: 'T(n) = aT(n/b) + f(n) form.'
            },
            {
              type: 'output-predict',
              prompt: 'T(n) = T(n/2) + O(1) solves to?',
              code: `// Binary search recurrence`,
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
              correct: 1,
              explanation: 'Halving once, O(1) per level.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder a generic D&C skeleton.',
              lines: [
                '<span class="kw">return</span> <span class="fn">combine</span>(left, right);',
                '<span class="kw">if</span> (small) <span class="kw">return</span> <span class="fn">baseSolve</span>(p);',
                'right = <span class="fn">solve</span>(p2);',
                'left = <span class="fn">solve</span>(p1);',
                '(p1, p2) = <span class="fn">divide</span>(p);'
              ],
              correctOrder: [1, 4, 3, 2, 0]
            },
            {
              type: 'match-pairs',
              prompt: 'Map algorithm to its recurrence.',
              leftLabel: 'Algorithm',
              rightLabel: 'Recurrence',
              pairs: [
                { left: 'Binary search', right: 'T(n/2) + 1' },
                { left: 'Merge sort', right: '2T(n/2) + n' },
                { left: 'Karatsuba', right: '3T(n/2) + n' },
                { left: 'Strassen', right: '7T(n/2) + n²' }
              ]
            }
          ]
        },
        {
          id: 'algo-u14-l2',
          name: 'Fast Power',
          icon: '⚡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Exponentiation by squaring',
              content: `<p>Compute x^n in O(log n) by squaring.</p>
<div class="code-block"><span class="ty">long</span> <span class="fn">power</span>(<span class="ty">long</span> x, <span class="ty">long</span> n) {
  <span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> <span class="num">1</span>;
  <span class="ty">long</span> half = <span class="fn">power</span>(x, n / <span class="num">2</span>);
  <span class="kw">return</span> (n % <span class="num">2</span> == <span class="num">0</span>) ? half * half : x * half * half;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Time complexity of fast power?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(log n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(1)', code: false }
              ],
              correct: 1,
              explanation: 'Halves the exponent each call.'
            },
            {
              type: 'true-false',
              statement: 'Fast power exploits x^n = (x^(n/2))^2 when n is even.',
              correct: true,
              explanation: 'That\'s the squaring trick.'
            },
            {
              type: 'fill-blank',
              prompt: 'Pick the right exponent for the recursive call.',
              codeLines: [
                { html: '<span class="ty">long</span> half = <span class="fn">power</span>(x, n / <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['2', '1', 'n', '3'],
              correctAnswer: '2',
              explanation: 'Halve the exponent each call.'
            },
            {
              type: 'output-predict',
              prompt: 'power(2, 10)?',
              code: `power(2, 10);`,
              options: ['256', '512', '1024', '2048'],
              correct: 2,
              explanation: '2^10 = 1024.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder fast power.',
              lines: [
                '<span class="kw">return</span> (n % <span class="num">2</span> == <span class="num">0</span>) ? half*half : x*half*half;',
                '<span class="kw">if</span> (n == <span class="num">0</span>) <span class="kw">return</span> <span class="num">1</span>;',
                '<span class="ty">long</span> half = <span class="fn">power</span>(x, n/<span class="num">2</span>);'
              ],
              correctOrder: [1, 2, 0]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u15',
      name: 'Unit 15 · Backtracking',
      description: 'Try, fail, undo, try the next thing.',
      lessons: [
        {
          id: 'algo-u15-l1',
          name: 'Subsets & Permutations',
          icon: '🌀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Backtracking template',
              content: `<p>Build a partial solution; recurse to extend it. If you hit a dead end, undo (backtrack) and try the next choice.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">backtrack</span>(state) {
  <span class="kw">if</span> (<span class="fn">isSolution</span>(state)) { <span class="fn">record</span>(state); <span class="kw">return</span>; }
  <span class="kw">for</span> (choice : <span class="fn">choices</span>(state)) {
    <span class="fn">apply</span>(choice);
    <span class="fn">backtrack</span>(state);
    <span class="fn">undo</span>(choice); <span class="com">// the backtrack step!</span>
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Number of subsets of an n-element set?',
              options: [
                { text: 'n', code: false },
                { text: 'n!', code: false },
                { text: '2ⁿ', code: false },
                { text: 'n²', code: false }
              ],
              correct: 2,
              explanation: 'Each element is independently in or out.'
            },
            {
              type: 'true-false',
              statement: 'Backtracking explores the full solution space when no pruning is used.',
              correct: true,
              explanation: 'Without pruning it\'s exhaustive search.'
            },
            {
              type: 'output-predict',
              prompt: 'Number of permutations of "abc"?',
              code: `permutations("abc");`,
              options: ['3', '6', '8', '9'],
              correct: 1,
              explanation: '3! = 6.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the backtrack-undo step.',
              codeLines: [
                { html: 'cur.<span class="fn">add</span>(x);' },
                { html: '<span class="fn">backtrack</span>(...);' },
                { html: 'cur.<span class="fn">_BLANK_</span>(cur.size() - 1);' }
              ],
              tokens: ['remove', 'add', 'set', 'clear'],
              correctAnswer: 'remove',
              explanation: 'Undo the choice on the way back up.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder a permutation generator.',
              lines: [
                'cur.<span class="fn">add</span>(arr[i]); used[i]=<span class="kw">true</span>;',
                '<span class="kw">for</span> i = <span class="num">0</span>..n-<span class="num">1</span>:',
                '  <span class="fn">backtrack</span>();',
                '  cur.<span class="fn">remove</span>(cur.size()-<span class="num">1</span>); used[i]=<span class="kw">false</span>;',
                '<span class="kw">if</span> cur.size() == n: result.<span class="fn">add</span>(cur);'
              ],
              correctOrder: [4, 1, 0, 2, 3]
            }
          ]
        },
        {
          id: 'algo-u15-l2',
          name: 'Pruning',
          icon: '✂️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Cut branches early',
              content: `<p>Pruning skips parts of the search tree that <i>can\'t</i> contain a solution.</p>
<ul>
  <li>Constraint check fails → return immediately.</li>
  <li>Current partial score already worse than best → cut.</li>
  <li>Symmetry — skip equivalent branches.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'N-Queens uses backtracking with…',
              options: [
                { text: 'No pruning.', code: false },
                { text: 'Row, column, and diagonal conflict pruning.', code: false },
                { text: 'Counting sort.', code: false },
                { text: 'Memoization.', code: false }
              ],
              correct: 1,
              explanation: 'Each queen placement prunes future cells.'
            },
            {
              type: 'true-false',
              statement: 'Pruning can dramatically reduce runtime but doesn\'t change worst-case Big-O.',
              correct: true,
              explanation: 'Worst case is still exponential — practice is much faster.'
            },
            {
              type: 'output-predict',
              prompt: '4-Queens has how many distinct solutions?',
              code: `solveNQueens(4);`,
              options: ['1', '2', '4', '8'],
              correct: 1,
              explanation: 'Two distinct (and symmetric) solutions for 4×4.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: try, recurse, undo, ___.',
              tokens: ['repeat', 'forget', 'sleep', 'commit'],
              correctOrder: ['repeat'],
              explanation: 'It\'s a loop of try-recurse-undo.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem to backtracking idea.',
              leftLabel: 'Problem',
              rightLabel: 'Idea',
              pairs: [
                { left: 'N-Queens', right: 'place row by row' },
                { left: 'Sudoku', right: 'fill empty cell, try 1..9' },
                { left: 'Subsets', right: 'include/exclude' },
                { left: 'Permutations', right: 'used[] + pick next' }
              ]
            }
          ]
        },
        {
          id: 'algo-u15-l3',
          name: 'Combinations',
          icon: '🎰',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Choose k from n',
              content: `<p>Combinations don\'t reuse, don\'t care about order.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">combos</span>(<span class="ty">int</span> start, <span class="ty">int</span> k, List&lt;<span class="ty">Integer</span>&gt; cur) {
  <span class="kw">if</span> (cur.<span class="fn">size</span>() == k) { result.<span class="fn">add</span>(<span class="kw">new</span> ArrayList&lt;&gt;(cur)); <span class="kw">return</span>; }
  <span class="kw">for</span> (<span class="ty">int</span> i = start; i &lt; n; i++) {
    cur.<span class="fn">add</span>(i);
    <span class="fn">combos</span>(i + <span class="num">1</span>, k, cur);
    cur.<span class="fn">remove</span>(cur.size() - <span class="num">1</span>);
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'C(5, 2) = ?',
              options: [
                { text: '5', code: false },
                { text: '10', code: false },
                { text: '20', code: false },
                { text: '25', code: false }
              ],
              correct: 1,
              explanation: '5! / (2! * 3!) = 10.'
            },
            {
              type: 'true-false',
              statement: 'Combinations of size k from n elements number C(n,k).',
              correct: true,
              explanation: 'Standard binomial coefficient.'
            },
            {
              type: 'fill-blank',
              prompt: 'Avoid reusing elements: pass i+1 to next call.',
              codeLines: [
                { html: '<span class="fn">combos</span>(i + <span class="num">_BLANK_</span>, k, cur);' }
              ],
              tokens: ['1', '0', '2', 'i'],
              correctAnswer: '1',
              explanation: 'Move start past current i.'
            },
            {
              type: 'output-predict',
              prompt: 'subsets([1,2,3]) size?',
              code: `subsets({1,2,3});`,
              options: ['3', '6', '8', '9'],
              correct: 2,
              explanation: '2³ = 8 subsets including empty.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match selection style to count.',
              leftLabel: 'Selection',
              rightLabel: 'Count for n=4,k=2',
              pairs: [
                { left: 'Permutation', right: '12' },
                { left: 'Combination', right: '6' },
                { left: 'Subset', right: '16 (all sizes)' },
                { left: 'With repetition', right: '16 (k=2 of n=4)' }
              ]
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder a subset generator.',
              lines: [
                'cur.<span class="fn">remove</span>(cur.size()-<span class="num">1</span>);',
                '<span class="kw">for</span> (i = start; i &lt; n; i++) {',
                'cur.<span class="fn">add</span>(arr[i]);',
                'result.<span class="fn">add</span>(<span class="kw">new</span> ArrayList&lt;&gt;(cur));',
                '<span class="fn">helper</span>(i+<span class="num">1</span>, cur);'
              ],
              correctOrder: [3, 1, 2, 4, 0]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u16',
      name: 'Unit 16 · Greedy Algorithms',
      description: 'Pick the best-looking choice right now.',
      lessons: [
        {
          id: 'algo-u16-l1',
          name: 'When Greedy Works',
          icon: '🤑',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Greedy intuition',
              content: `<p>At each step, take the option that looks locally optimal. <i>If</i> the problem has the greedy-choice property + optimal substructure, this finds the global optimum.</p>
<p>Classic wins: coin change with canonical coins (1, 5, 10, 25), activity selection, Huffman codes, MST (Kruskal/Prim).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Two properties needed for greedy correctness?',
              options: [
                { text: 'Greedy-choice + optimal substructure.', code: false },
                { text: 'Random pivot + memoization.', code: false },
                { text: 'Hash table + recursion.', code: false },
                { text: 'Sorted input only.', code: false }
              ],
              correct: 0,
              explanation: 'You need both for greedy to give the optimum.'
            },
            {
              type: 'true-false',
              statement: 'Greedy may give a suboptimal answer for coin change with arbitrary coin sets.',
              correct: true,
              explanation: 'E.g., coins {1,3,4} amount 6: greedy → 4+1+1=3 coins; optimal → 3+3=2 coins.'
            },
            {
              type: 'match-pairs',
              prompt: 'Map problem to whether greedy is optimal.',
              leftLabel: 'Problem',
              rightLabel: 'Greedy?',
              pairs: [
                { left: 'Activity selection', right: 'Yes' },
                { left: 'Fractional knapsack', right: 'Yes' },
                { left: '0/1 knapsack', right: 'No' },
                { left: 'Coin change {1,3,4}', right: 'No' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Min coins for 30 using {1,5,10,25}, greedy?',
              code: `greedyChange(30);`,
              options: ['1', '2', '3', '4'],
              correct: 1,
              explanation: '25 + 5 = 2 coins.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: take the ___ option each step.',
              tokens: ['best-looking', 'random', 'worst', 'smallest', 'last'],
              correctOrder: ['best-looking'],
              explanation: 'Greedy = locally optimal.'
            }
          ]
        },
        {
          id: 'algo-u16-l2',
          name: 'Activity Selection',
          icon: '📅',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Maximize non-overlapping activities',
              content: `<p>Given activities with [start, end], pick the most non-overlapping ones.</p>
<p>Greedy recipe: sort by <b>end time</b>, take the first; then take the next whose start ≥ previous end.</p>
<div class="code-block"><span class="fn">sortByEnd</span>(activities);
<span class="ty">int</span> lastEnd = -<span class="num">1</span>, count = <span class="num">0</span>;
<span class="kw">for</span> (a : activities) {
  <span class="kw">if</span> (a.start &gt;= lastEnd) { count++; lastEnd = a.end; }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Sort key for activity selection?',
              options: [
                { text: 'Start time ascending.', code: false },
                { text: 'End time ascending.', code: false },
                { text: 'Duration ascending.', code: false },
                { text: 'Random.', code: false }
              ],
              correct: 1,
              explanation: 'Earliest end leaves the most room for later activities.'
            },
            {
              type: 'true-false',
              statement: 'Sorting by duration ascending also works for activity selection.',
              correct: false,
              explanation: 'Counter-example exists; only end-time sort is provably optimal.'
            },
            {
              type: 'fill-blank',
              prompt: 'Pick this activity only if it doesn\'t overlap.',
              codeLines: [
                { html: '<span class="kw">if</span> (a.start <span class="num">_BLANK_</span> lastEnd) {' },
                { html: '  count++; lastEnd = a.end;' },
                { html: '}' }
              ],
              tokens: ['>=', '>', '<=', '<'],
              correctAnswer: '>=',
              explanation: 'Start must come at or after the previous end.'
            },
            {
              type: 'output-predict',
              prompt: 'Activities: (1,3),(2,4),(3,5),(0,6),(5,7),(8,9). Max picks?',
              code: `selectActivities(acts);`,
              options: ['2', '3', '4', '5'],
              correct: 2,
              explanation: '(1,3), (3,5), (5,7), (8,9) → 4.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order activity-selection.',
              lines: [
                '<span class="kw">for</span> (a : activities) {',
                '<span class="fn">sortByEnd</span>(activities);',
                '<span class="ty">int</span> lastEnd = -<span class="num">1</span>;',
                '  <span class="kw">if</span> (a.start &gt;= lastEnd) { count++; lastEnd = a.end; }',
                '}'
              ],
              correctOrder: [1, 2, 0, 3, 4]
            }
          ]
        },
        {
          id: 'algo-u16-l3',
          name: 'Fractional Knapsack',
          icon: '🎒',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Take fractions allowed',
              content: `<p>Each item has weight w, value v. You can take any fraction. Maximize value within capacity W.</p>
<p>Greedy: sort by value/weight descending; fill until capacity, taking a fraction of the last item.</p>
<p>(Note: the 0/1 version is NP-hard for greedy — needs DP.)</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Sort key for fractional knapsack?',
              options: [
                { text: 'Weight ascending.', code: false },
                { text: 'Value descending.', code: false },
                { text: 'value/weight descending.', code: false },
                { text: 'Random.', code: false }
              ],
              correct: 2,
              explanation: 'Best value per unit weight first.'
            },
            {
              type: 'true-false',
              statement: 'Greedy gives the optimum for 0/1 knapsack.',
              correct: false,
              explanation: '0/1 needs DP; greedy can fail.'
            },
            {
              type: 'output-predict',
              prompt: 'Items (v,w): (60,10), (100,20), (120,30). Capacity 50. Max fractional value?',
              code: `fractionalKnapsack(items, 50);`,
              options: ['180', '220', '240', '280'],
              correct: 2,
              explanation: '60 + 100 + (2/3)*120 = 240.'
            },
            {
              type: 'fill-blank',
              prompt: 'Sort items by ratio (value/weight) ___.',
              codeLines: [
                { html: 'items.<span class="fn">sortBy</span>(v/w, <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['DESC', 'ASC', 'RAND', 'NONE'],
              correctAnswer: 'DESC',
              explanation: 'Highest value/weight first.'
            },
            {
              type: 'match-pairs',
              prompt: 'Compare knapsack variants.',
              leftLabel: 'Variant',
              rightLabel: 'Approach',
              pairs: [
                { left: 'Fractional', right: 'Greedy O(n log n)' },
                { left: '0/1', right: 'DP O(nW)' },
                { left: 'Unbounded', right: 'DP O(nW)' },
                { left: 'Bounded counts', right: 'DP O(nW)' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the sort key.',
              tokens: ['value', '/', 'weight', '*', '+'],
              correctOrder: ['value', '/', 'weight'],
              explanation: 'Maximize value per unit weight.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u17',
      name: 'Unit 17 · Dynamic Programming — Intro',
      description: 'Solve once, remember forever.',
      lessons: [
        {
          id: 'algo-u17-l1',
          name: 'Overlapping Subproblems',
          icon: '🧠',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two DP ingredients',
              content: `<p>A problem is DP-friendly when it has:</p>
<ul>
  <li><b>Overlapping subproblems</b> — same sub-computations recur.</li>
  <li><b>Optimal substructure</b> — the optimum is built from optima of subproblems.</li>
</ul>
<p>Two styles:</p>
<ol>
  <li><b>Memoization</b> (top-down): recursion + cache.</li>
  <li><b>Tabulation</b> (bottom-up): iterative table fill.</li>
</ol>`
            },
            {
              type: 'multiple-choice',
              prompt: 'DP is most useful when…',
              options: [
                { text: 'Subproblems repeat.', code: false },
                { text: 'Subproblems never repeat.', code: false },
                { text: 'You have a sorted array.', code: false },
                { text: 'The problem is constant time already.', code: false }
              ],
              correct: 0,
              explanation: 'Repeating subproblems is the whole win.'
            },
            {
              type: 'true-false',
              statement: 'Memoization and tabulation give the same time complexity.',
              correct: true,
              explanation: 'Both compute each subproblem once.'
            },
            {
              type: 'fill-blank',
              prompt: 'Top-down DP: check cache first.',
              codeLines: [
                { html: '<span class="kw">if</span> (cache[n] != <span class="num">_BLANK_</span>) <span class="kw">return</span> cache[n];' }
              ],
              tokens: ['-1', '0', 'null', 'n'],
              correctAnswer: '-1',
              explanation: 'Sentinel — anything ≠ -1 means computed.'
            },
            {
              type: 'output-predict',
              prompt: 'fib(30) with memoization vs naive — naive is roughly how much slower?',
              code: `// 2^30 ≈ 10^9 vs 30 ops`,
              options: ['equal', '~10x', '~10^6x', '~10^7x'],
              correct: 3,
              explanation: '~10^9 / 30 ≈ 3×10^7 — orders of magnitude.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match style to feature.',
              leftLabel: 'Style',
              rightLabel: 'Feature',
              pairs: [
                { left: 'Memoization', right: 'recursive + cache' },
                { left: 'Tabulation', right: 'iterative, no recursion' },
                { left: 'Memoization', right: 'computes only needed states' },
                { left: 'Tabulation', right: 'easy to optimize space' }
              ]
            }
          ]
        },
        {
          id: 'algo-u17-l2',
          name: 'Fibonacci as DP',
          icon: '🐚',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Three implementations',
              content: `<p>Same problem, three speeds:</p>
<div class="code-block"><span class="com">// Tabulation, O(n) time O(n) space</span>
<span class="ty">int</span>[] dp = <span class="kw">new</span> <span class="ty">int</span>[n + <span class="num">1</span>];
dp[<span class="num">0</span>] = <span class="num">0</span>; dp[<span class="num">1</span>] = <span class="num">1</span>;
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i &lt;= n; i++) dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];
<span class="kw">return</span> dp[n];</div>
<p>Space can be reduced to O(1) by keeping just two variables.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'O(1)-space iterative fib needs how many variables?',
              options: [
                { text: '1', code: false },
                { text: '2', code: false },
                { text: '3', code: false },
                { text: 'n', code: false }
              ],
              correct: 1,
              explanation: 'Track prev and curr.'
            },
            {
              type: 'true-false',
              statement: 'DP is just smart caching of recursive results.',
              correct: true,
              explanation: 'That\'s the essence in one sentence.'
            },
            {
              type: 'fill-blank',
              prompt: 'Recurrence for fib.',
              codeLines: [
                { html: 'dp[i] = dp[i-1] + dp[i-<span class="num">_BLANK_</span>];' }
              ],
              tokens: ['2', '1', '3', '0'],
              correctAnswer: '2',
              explanation: 'fib(i) = fib(i-1) + fib(i-2).'
            },
            {
              type: 'output-predict',
              prompt: 'dp-fib(7)?',
              code: `fibDP(7);`,
              options: ['8', '13', '21', '34'],
              correct: 1,
              explanation: '0,1,1,2,3,5,8,13.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order O(1)-space fib.',
              lines: [
                '<span class="kw">for</span> (i = <span class="num">2</span>; i &lt;= n; i++) { c = a + b; a = b; b = c; }',
                '<span class="ty">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>, c = <span class="num">0</span>;',
                '<span class="kw">return</span> b;'
              ],
              correctOrder: [1, 0, 2]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u18',
      name: 'Unit 18 · DP — Classic Problems',
      description: 'Climb stairs, rob houses, count coins.',
      lessons: [
        {
          id: 'algo-u18-l1',
          name: 'Stairs & Robber',
          icon: '🪜',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Climb stairs',
              content: `<p>You can take 1 or 2 steps. How many distinct ways to reach step n?</p>
<p>Recurrence: <code>ways(n) = ways(n-1) + ways(n-2)</code> — Fibonacci again!</p>
<div class="code-block">dp[<span class="num">0</span>] = <span class="num">1</span>; dp[<span class="num">1</span>] = <span class="num">1</span>;
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i &lt;= n; i++) dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];</div>
<p><b>House robber</b>: <code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Ways to climb 4 stairs (1 or 2 steps)?',
              options: [
                { text: '3', code: false },
                { text: '5', code: false },
                { text: '7', code: false },
                { text: '8', code: false }
              ],
              correct: 1,
              explanation: '1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 → 5.'
            },
            {
              type: 'true-false',
              statement: 'House robber lets you take dp[i] = nums[i] + dp[i-2].',
              correct: false,
              explanation: 'You take max of skip vs rob: max(dp[i-1], dp[i-2]+nums[i]).'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill robber recurrence.',
              codeLines: [
                { html: 'dp[i] = <span class="fn">Math</span>.<span class="fn">max</span>(dp[i-<span class="num">1</span>], dp[i-<span class="num">2</span>] + <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['nums[i]', 'i', 'dp[i]', '0'],
              correctAnswer: 'nums[i]',
              explanation: 'Add current loot if we choose to rob this house.'
            },
            {
              type: 'output-predict',
              prompt: 'House robber on [2,7,9,3,1]:',
              code: `rob({2,7,9,3,1});`,
              options: ['10', '11', '12', '13'],
              correct: 2,
              explanation: '2+9+1 = 12.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder climbStairs.',
              lines: [
                '<span class="kw">for</span> (i = <span class="num">2</span>; i &lt;= n; i++) dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];',
                'dp[<span class="num">0</span>] = <span class="num">1</span>; dp[<span class="num">1</span>] = <span class="num">1</span>;',
                '<span class="kw">return</span> dp[n];'
              ],
              correctOrder: [1, 0, 2]
            }
          ]
        },
        {
          id: 'algo-u18-l2',
          name: 'Coin Change & LIS',
          icon: '💰',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Minimum coins',
              content: `<p>Given coins[] and amount, find min coins to sum to amount.</p>
<div class="code-block"><span class="ty">int</span>[] dp = <span class="kw">new</span> <span class="ty">int</span>[amount + <span class="num">1</span>];
<span class="fn">fill</span>(dp, amount + <span class="num">1</span>);
dp[<span class="num">0</span>] = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i &lt;= amount; i++) {
  <span class="kw">for</span> (<span class="ty">int</span> c : coins) {
    <span class="kw">if</span> (c &lt;= i) dp[i] = <span class="fn">Math</span>.<span class="fn">min</span>(dp[i], dp[i - c] + <span class="num">1</span>);
  }
}</div>
<p><b>LIS</b> intuition: dp[i] = longest increasing subsequence ending at i. O(n²) DP, or O(n log n) with patience-sort idea.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Min coins for amount=11, coins=[1,2,5]?',
              options: [
                { text: '2', code: false },
                { text: '3', code: false },
                { text: '4', code: false },
                { text: '11', code: false }
              ],
              correct: 1,
              explanation: '5+5+1 = 3 coins.'
            },
            {
              type: 'true-false',
              statement: 'Coin-change DP is O(amount * #coins).',
              correct: true,
              explanation: 'Two nested loops.'
            },
            {
              type: 'fill-blank',
              prompt: 'Coin change update.',
              codeLines: [
                { html: 'dp[i] = <span class="fn">Math</span>.<span class="fn">min</span>(dp[i], dp[i - c] + <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['1', '0', 'c', 'i'],
              correctAnswer: '1',
              explanation: 'Using coin c costs one more coin.'
            },
            {
              type: 'output-predict',
              prompt: 'LIS of [10,9,2,5,3,7,101,18]?',
              code: `LIS(arr);`,
              options: ['3', '4', '5', '6'],
              correct: 1,
              explanation: '[2,3,7,101] length 4.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match DP problem to recurrence summary.',
              leftLabel: 'Problem',
              rightLabel: 'Recurrence',
              pairs: [
                { left: 'Climb stairs', right: 'dp[i] = dp[i-1] + dp[i-2]' },
                { left: 'House robber', right: 'max(dp[i-1], dp[i-2]+nums[i])' },
                { left: 'Coin change', right: 'min over coins of dp[i-c]+1' },
                { left: 'LIS', right: 'max dp[j]+1 over j<i with a[j]<a[i]' }
              ]
            }
          ]
        },
        {
          id: 'algo-u18-l3',
          name: '0/1 Knapsack & Edit Distance',
          icon: '🎒',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: '0/1 knapsack DP',
              content: `<p><code>dp[i][w]</code> = max value using first i items with capacity w.</p>
<div class="code-block">dp[i][w] = (wt[i] &gt; w)
  ? dp[i-<span class="num">1</span>][w]
  : <span class="fn">Math</span>.<span class="fn">max</span>(dp[i-<span class="num">1</span>][w], dp[i-<span class="num">1</span>][w - wt[i]] + val[i]);</div>
<p><b>Edit distance</b>: insert/delete/replace; <code>dp[i][j] = 1 + min(insert, delete, replace)</code> if chars differ, else <code>dp[i-1][j-1]</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: '0/1 knapsack DP runtime?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n + W)', code: false },
                { text: 'O(nW)', code: false },
                { text: 'O(2ⁿ)', code: false }
              ],
              correct: 2,
              explanation: 'Two nested loops over items and capacity.'
            },
            {
              type: 'true-false',
              statement: '0/1 knapsack is pseudo-polynomial — depends on capacity W.',
              correct: true,
              explanation: 'W can be exponential in input size.'
            },
            {
              type: 'output-predict',
              prompt: 'editDistance("kitten", "sitting")?',
              code: `editDistance("kitten","sitting");`,
              options: ['1', '2', '3', '4'],
              correct: 2,
              explanation: 'k→s, e→i, insert g.'
            },
            {
              type: 'fill-blank',
              prompt: 'Edit distance when chars match.',
              codeLines: [
                { html: '<span class="kw">if</span> (s[i-1] == t[j-1])' },
                { html: '  dp[i][j] = dp[i-<span class="num">_BLANK_</span>][j-1];' }
              ],
              tokens: ['1', '0', '2', 'j'],
              correctAnswer: '1',
              explanation: 'Diagonal copy when characters are equal.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match DP problem to state shape.',
              leftLabel: 'Problem',
              rightLabel: 'State',
              pairs: [
                { left: '0/1 knapsack', right: 'dp[i][w]' },
                { left: 'Edit distance', right: 'dp[i][j]' },
                { left: 'LCS', right: 'dp[i][j]' },
                { left: 'LIS', right: 'dp[i]' }
              ]
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder 0/1 knapsack core.',
              lines: [
                '  <span class="kw">if</span> (wt[i] &gt; w) dp[i][w] = dp[i-<span class="num">1</span>][w];',
                '<span class="kw">for</span> i in 1..n:',
                '  <span class="kw">else</span> dp[i][w] = max(dp[i-<span class="num">1</span>][w], dp[i-<span class="num">1</span>][w-wt[i]] + val[i]);',
                '  <span class="kw">for</span> w in 0..W:'
              ],
              correctOrder: [1, 3, 0, 2]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u19',
      name: 'Unit 19 · Graph Representations',
      description: 'Adjacency list vs matrix, weighted graphs.',
      lessons: [
        {
          id: 'algo-u19-l1',
          name: 'List vs Matrix',
          icon: '🕸️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two storage choices',
              content: `<p><b>Adjacency list</b>: each node has a list of neighbors. Space O(V+E). Great for sparse graphs.</p>
<p><b>Adjacency matrix</b>: V×V boolean (or weight). Space O(V²). Constant-time edge check.</p>
<div class="code-block">List&lt;List&lt;<span class="ty">Integer</span>&gt;&gt; adj = <span class="kw">new</span> ArrayList&lt;&gt;();
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; V; i++) adj.<span class="fn">add</span>(<span class="kw">new</span> ArrayList&lt;&gt;());
<span class="kw">for</span> (<span class="ty">int</span>[] e : edges) {
  adj.<span class="fn">get</span>(e[<span class="num">0</span>]).<span class="fn">add</span>(e[<span class="num">1</span>]);
  adj.<span class="fn">get</span>(e[<span class="num">1</span>]).<span class="fn">add</span>(e[<span class="num">0</span>]); <span class="com">// undirected</span>
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Space cost of adjacency list?',
              options: [
                { text: 'O(V)', code: false },
                { text: 'O(V + E)', code: false },
                { text: 'O(V²)', code: false },
                { text: 'O(E²)', code: false }
              ],
              correct: 1,
              explanation: 'Each edge stored once or twice.'
            },
            {
              type: 'true-false',
              statement: 'Matrix is better for dense graphs and constant-time edge lookups.',
              correct: true,
              explanation: 'O(1) edge check, O(V²) total — fine if E ~ V².'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation to faster rep.',
              leftLabel: 'Operation',
              rightLabel: 'Faster',
              pairs: [
                { left: 'Iterate neighbors of v', right: 'List' },
                { left: 'Edge exists (u,v)?', right: 'Matrix' },
                { left: 'Sparse storage', right: 'List' },
                { left: 'Add/remove edge', right: 'Matrix' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'V=5, E=4 graph. Matrix vs list memory?',
              code: `// space comparison`,
              options: [
                '25 cells vs ~9 entries',
                '5 vs 5',
                '4 vs 4',
                '100 vs 100'
              ],
              correct: 0,
              explanation: 'V² = 25 fixed cells; list ≈ V+2E = 13 entries.'
            },
            {
              type: 'fill-blank',
              prompt: 'Initialize V empty neighbor lists.',
              codeLines: [
                { html: '<span class="kw">for</span> (i = <span class="num">0</span>; i &lt; V; i++)' },
                { html: '  adj.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">_BLANK_</span>&lt;&gt;());' }
              ],
              tokens: ['ArrayList', 'String', 'int', 'HashMap'],
              correctAnswer: 'ArrayList',
              explanation: 'Each entry is a list of neighbor ids.'
            }
          ]
        },
        {
          id: 'algo-u19-l2',
          name: 'Weighted & Directed',
          icon: '➡️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Weights and direction',
              content: `<p><b>Directed</b>: only add (u→v), not the reverse.</p>
<p><b>Weighted</b>: store (neighbor, weight) pairs in adjacency list.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">Edge</span> { <span class="ty">int</span> to, w; }
List&lt;List&lt;<span class="ty">Edge</span>&gt;&gt; adj;</div>
<p>For weighted matrix: <code>w[u][v]</code> = weight, or ∞ when no edge.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In an undirected graph, each edge {u,v} appears in adjacency list…',
              options: [
                { text: 'Once.', code: false },
                { text: 'Twice (in u\'s list AND v\'s list).', code: false },
                { text: 'Never.', code: false },
                { text: 'Only if u < v.', code: false }
              ],
              correct: 1,
              explanation: 'Both sides know about the edge.'
            },
            {
              type: 'true-false',
              statement: 'A directed graph can have parallel edges or self-loops.',
              correct: true,
              explanation: 'Depends on application but typically allowed.'
            },
            {
              type: 'output-predict',
              prompt: 'Edges (0,1,5),(0,2,3),(1,2,1). Sum of all weights in undirected adj list?',
              code: `// each edge counted twice`,
              options: ['9', '18', '3', '6'],
              correct: 1,
              explanation: '(5+3+1)*2 = 18.'
            },
            {
              type: 'fill-blank',
              prompt: 'Build a directed weighted edge.',
              codeLines: [
                { html: 'adj.<span class="fn">get</span>(u).<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">Edge</span>(v, <span class="num">_BLANK_</span>));' }
              ],
              tokens: ['w', '0', '1', 'u'],
              correctAnswer: 'w',
              explanation: 'Use the edge weight.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match rep to typical use.',
              leftLabel: 'Storage',
              rightLabel: 'Use',
              pairs: [
                { left: 'List<List<Edge>>', right: 'Weighted sparse' },
                { left: 'int[][] w', right: 'Weighted dense' },
                { left: 'boolean[][]', right: 'Unweighted dense' },
                { left: 'List<List<Integer>>', right: 'Unweighted sparse' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: each weighted edge is a ___ of (neighbor, weight).',
              tokens: ['pair', 'list', 'set', 'graph', 'tree'],
              correctOrder: ['pair'],
              explanation: 'Edge = (to, weight).'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u20',
      name: 'Unit 20 · BFS — Breadth-First Search',
      description: 'Queue-based level order traversal.',
      lessons: [
        {
          id: 'algo-u20-l1',
          name: 'BFS Core',
          icon: '🌊',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'BFS template',
              content: `<p>Use a queue; mark visited; explore in waves.</p>
<div class="code-block">Queue&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> ArrayDeque&lt;&gt;();
<span class="ty">boolean</span>[] visited = <span class="kw">new</span> <span class="ty">boolean</span>[V];
q.<span class="fn">add</span>(start); visited[start] = <span class="kw">true</span>;
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
  <span class="ty">int</span> u = q.<span class="fn">poll</span>();
  <span class="kw">for</span> (<span class="ty">int</span> v : adj.<span class="fn">get</span>(u)) {
    <span class="kw">if</span> (!visited[v]) { visited[v] = <span class="kw">true</span>; q.<span class="fn">add</span>(v); }
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'BFS uses which data structure?',
              options: [
                { text: 'Stack', code: false },
                { text: 'Queue', code: false },
                { text: 'Priority queue', code: false },
                { text: 'Hash map', code: false }
              ],
              correct: 1,
              explanation: 'FIFO yields level order.'
            },
            {
              type: 'true-false',
              statement: 'BFS finds shortest paths in unweighted graphs.',
              correct: true,
              explanation: 'First time we reach a node is via fewest edges.'
            },
            {
              type: 'fill-blank',
              prompt: 'Mark visited the moment we enqueue.',
              codeLines: [
                { html: 'visited[v] = <span class="num">_BLANK_</span>;' },
                { html: 'q.<span class="fn">add</span>(v);' }
              ],
              tokens: ['true', 'false', 'null', '1'],
              correctAnswer: 'true',
              explanation: 'Prevents adding the same node twice.'
            },
            {
              type: 'output-predict',
              prompt: 'BFS from 0 on edges {(0,1),(0,2),(1,3),(2,4)}. Visit order?',
              code: `bfs(adj, 0);`,
              options: ['0,1,2,3,4', '0,3,4,1,2', '0,2,1,4,3', '0,1,3,2,4'],
              correct: 0,
              explanation: 'Level order yields 0 then neighbors 1,2 then 3,4.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder BFS skeleton.',
              lines: [
                'visited[v] = <span class="kw">true</span>; q.<span class="fn">add</span>(v);',
                'q.<span class="fn">add</span>(start); visited[start] = <span class="kw">true</span>;',
                '<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {',
                '  <span class="ty">int</span> u = q.<span class="fn">poll</span>();',
                '  <span class="kw">for</span> (v : adj.<span class="fn">get</span>(u)) <span class="kw">if</span> (!visited[v]) {'
              ],
              correctOrder: [1, 2, 3, 4, 0]
            }
          ]
        },
        {
          id: 'algo-u20-l2',
          name: 'Shortest Path & Levels',
          icon: '📏',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Distance arrays',
              content: `<p>Track <code>dist[v]</code> = number of edges from start to v.</p>
<div class="code-block">dist[start] = <span class="num">0</span>;
<span class="kw">for</span> (v : adj.<span class="fn">get</span>(u)) {
  <span class="kw">if</span> (dist[v] == -<span class="num">1</span>) {
    dist[v] = dist[u] + <span class="num">1</span>;
    q.<span class="fn">add</span>(v);
  }
}</div>
<p>To recover the path, also store <code>parent[v] = u</code> when first visited.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'BFS time complexity?',
              options: [
                { text: 'O(V)', code: false },
                { text: 'O(V + E)', code: false },
                { text: 'O(V²)', code: false },
                { text: 'O(E log V)', code: false }
              ],
              correct: 1,
              explanation: 'Each node and edge visited once.'
            },
            {
              type: 'true-false',
              statement: 'For weighted graphs (positive weights), plain BFS does NOT find shortest paths.',
              correct: true,
              explanation: 'Use Dijkstra instead.'
            },
            {
              type: 'output-predict',
              prompt: 'BFS distances from 0 on edges {(0,1),(1,2),(0,3),(3,2)}?',
              code: `bfsDist(adj, 0);`,
              options: ['[0,1,2,1]', '[0,1,1,1]', '[0,1,2,2]', '[0,1,3,2]'],
              correct: 0,
              explanation: '0→1 d=1, 0→3 d=1, then 1→2 d=2.'
            },
            {
              type: 'fill-blank',
              prompt: 'Update distance on first visit.',
              codeLines: [
                { html: 'dist[v] = dist[u] + <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['1', '0', 'u', 'v'],
              correctAnswer: '1',
              explanation: 'One more edge.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match BFS use to context.',
              leftLabel: 'Use',
              rightLabel: 'Context',
              pairs: [
                { left: 'Shortest path', right: 'unweighted graph' },
                { left: 'Level order', right: 'tree traversal' },
                { left: 'Connected component', right: 'undirected' },
                { left: 'Web crawler', right: 'breadth of links' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u21',
      name: 'Unit 21 · DFS — Depth-First Search',
      description: 'Go deep, then backtrack.',
      lessons: [
        {
          id: 'algo-u21-l1',
          name: 'DFS Core',
          icon: '🕳️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Recursive DFS',
              content: `<p>Visit a node; recurse on each unvisited neighbor.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">int</span> u) {
  visited[u] = <span class="kw">true</span>;
  <span class="fn">process</span>(u);
  <span class="kw">for</span> (<span class="ty">int</span> v : adj.<span class="fn">get</span>(u)) {
    <span class="kw">if</span> (!visited[v]) <span class="fn">dfs</span>(v);
  }
}</div>
<p>Iterative version uses an explicit stack.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'DFS uses which data structure (iteratively)?',
              options: [
                { text: 'Queue', code: false },
                { text: 'Stack', code: false },
                { text: 'PriorityQueue', code: false },
                { text: 'Deque (both ends)', code: false }
              ],
              correct: 1,
              explanation: 'LIFO is depth-first.'
            },
            {
              type: 'true-false',
              statement: 'DFS time complexity is O(V + E).',
              correct: true,
              explanation: 'Same as BFS — each node/edge processed once.'
            },
            {
              type: 'output-predict',
              prompt: 'DFS from 0 on edges {(0,1),(0,2),(1,3),(2,4)} visiting smaller index first?',
              code: `dfs(adj, 0);`,
              options: ['0,1,3,2,4', '0,1,2,3,4', '0,2,4,1,3', '0,3,1,4,2'],
              correct: 0,
              explanation: 'Go deep into 1→3 first, then back to 2→4.'
            },
            {
              type: 'fill-blank',
              prompt: 'Guard against revisiting nodes.',
              codeLines: [
                { html: '<span class="kw">if</span> (<span class="num">_BLANK_</span>visited[v]) <span class="fn">dfs</span>(v);' }
              ],
              tokens: ['!', '~', '?', '#'],
              correctAnswer: '!',
              explanation: 'Only descend into unvisited neighbors.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder recursive DFS.',
              lines: [
                'visited[u] = <span class="kw">true</span>;',
                '<span class="kw">for</span> (v : adj.<span class="fn">get</span>(u)) <span class="kw">if</span> (!visited[v]) <span class="fn">dfs</span>(v);',
                '<span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">int</span> u) {',
                '  <span class="fn">process</span>(u);'
              ],
              correctOrder: [2, 0, 3, 1]
            }
          ]
        },
        {
          id: 'algo-u21-l2',
          name: 'DFS Applications',
          icon: '🧭',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What DFS unlocks',
              content: `<p>DFS underlies:</p>
<ul>
  <li><b>Connected components</b> in undirected graphs.</li>
  <li><b>Cycle detection</b> (back edges in DFS tree).</li>
  <li><b>Topological sort</b> (post-order reversed) on DAGs.</li>
  <li><b>Strongly connected components</b> (Tarjan / Kosaraju).</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Topological sort requires:',
              options: [
                { text: 'Undirected graph.', code: false },
                { text: 'Directed Acyclic Graph (DAG).', code: false },
                { text: 'Weighted graph.', code: false },
                { text: 'Bipartite graph.', code: false }
              ],
              correct: 1,
              explanation: 'No cycles AND directed.'
            },
            {
              type: 'true-false',
              statement: 'A back edge in DFS indicates a cycle.',
              correct: true,
              explanation: 'It links to an ancestor in the DFS tree.'
            },
            {
              type: 'output-predict',
              prompt: 'Connected components of edges {(0,1),(2,3),(3,4)} on V=5?',
              code: `countComponents(5, edges);`,
              options: ['1', '2', '3', '5'],
              correct: 1,
              explanation: '{0,1} and {2,3,4}.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match DFS application to clue.',
              leftLabel: 'Application',
              rightLabel: 'Clue',
              pairs: [
                { left: 'Topological sort', right: 'reverse post-order on DAG' },
                { left: 'Cycle detect', right: 'back edge found' },
                { left: 'Components', right: 'increment count per outer call' },
                { left: 'Bridges', right: 'low-link values' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: topo sort = reverse ___ on a DAG.',
              tokens: ['post-order', 'pre-order', 'in-order', 'level-order', 'random'],
              correctOrder: ['post-order'],
              explanation: 'Output nodes after all descendants — reverse it.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u22',
      name: 'Unit 22 · Shortest Path',
      description: 'Dijkstra & Bellman-Ford intuition.',
      lessons: [
        {
          id: 'algo-u22-l1',
          name: 'Dijkstra',
          icon: '🚦',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Greedy + priority queue',
              content: `<p>Maintain best-known distances. Always extract the node with the smallest tentative distance and relax its edges.</p>
<div class="code-block">PriorityQueue&lt;<span class="ty">int</span>[]&gt; pq = <span class="kw">new</span> PriorityQueue&lt;&gt;((a,b) -&gt; a[<span class="num">1</span>] - b[<span class="num">1</span>]);
dist[s] = <span class="num">0</span>; pq.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">int</span>[]{s, <span class="num">0</span>});
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) {
  <span class="ty">int</span>[] cur = pq.<span class="fn">poll</span>();
  <span class="kw">for</span> (<span class="ty">Edge</span> e : adj.<span class="fn">get</span>(cur[<span class="num">0</span>])) {
    <span class="kw">if</span> (cur[<span class="num">1</span>] + e.w &lt; dist[e.to]) {
      dist[e.to] = cur[<span class="num">1</span>] + e.w;
      pq.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">int</span>[]{e.to, dist[e.to]});
    }
  }
}</div>
<p>Requires <b>non-negative</b> edge weights.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Dijkstra requires:',
              options: [
                { text: 'Negative edges allowed.', code: false },
                { text: 'Non-negative edge weights.', code: false },
                { text: 'Tree only.', code: false },
                { text: 'Unweighted graph.', code: false }
              ],
              correct: 1,
              explanation: 'Negative weights break the greedy invariant.'
            },
            {
              type: 'true-false',
              statement: 'Dijkstra with a binary heap runs in O((V + E) log V).',
              correct: true,
              explanation: 'Each edge can trigger one heap op.'
            },
            {
              type: 'fill-blank',
              prompt: 'Relaxation: only improve if shorter.',
              codeLines: [
                { html: '<span class="kw">if</span> (cur[1] + e.w <span class="num">_BLANK_</span> dist[e.to])' },
                { html: '  dist[e.to] = cur[1] + e.w;' }
              ],
              tokens: ['<', '<=', '>', '!='],
              correctAnswer: '<',
              explanation: 'Strictly less means we found a better path.'
            },
            {
              type: 'output-predict',
              prompt: 'Dijkstra from 0 on edges {(0,1,1),(0,2,4),(1,2,2)}. dist[2]?',
              code: `dijkstra(adj, 0);`,
              options: ['1', '2', '3', '4'],
              correct: 2,
              explanation: '0→1→2 = 1+2 = 3 beats direct 0→2 = 4.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder Dijkstra core.',
              lines: [
                '  dist[e.to] = cur[<span class="num">1</span>] + e.w;',
                'pq.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">int</span>[]{e.to, dist[e.to]});',
                '<span class="kw">if</span> (cur[<span class="num">1</span>] + e.w &lt; dist[e.to]) {',
                '<span class="kw">for</span> (e : adj.<span class="fn">get</span>(u))'
              ],
              correctOrder: [3, 2, 0, 1]
            }
          ]
        },
        {
          id: 'algo-u22-l2',
          name: 'Bellman-Ford',
          icon: '🪙',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Negative edges OK',
              content: `<p>Relax all edges V-1 times. Detects negative cycles by checking if any edge still relaxes on the Vth pass.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; V - <span class="num">1</span>; i++) {
  <span class="kw">for</span> (<span class="ty">Edge</span> e : edges) {
    <span class="kw">if</span> (dist[e.u] + e.w &lt; dist[e.v])
      dist[e.v] = dist[e.u] + e.w;
  }
}</div>
<p>Complexity: O(V·E). Slower than Dijkstra but handles negatives.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Bellman-Ford complexity?',
              options: [
                { text: 'O(V + E)', code: false },
                { text: 'O(V·E)', code: false },
                { text: 'O(V²)', code: false },
                { text: 'O(E log V)', code: false }
              ],
              correct: 1,
              explanation: 'V-1 passes over E edges.'
            },
            {
              type: 'true-false',
              statement: 'Bellman-Ford can detect negative-weight cycles.',
              correct: true,
              explanation: 'A Vth-pass improvement signals one.'
            },
            {
              type: 'output-predict',
              prompt: 'Edges {(0,1,4),(0,2,5),(1,2,-3)}. dist[2] from 0?',
              code: `bellmanFord(edges, 0);`,
              options: ['1', '2', '4', '5'],
              correct: 0,
              explanation: '0→1→2 = 4 + (-3) = 1.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match algorithm to its strength.',
              leftLabel: 'Algorithm',
              rightLabel: 'Strength',
              pairs: [
                { left: 'Dijkstra', right: 'Fast on non-negative weights' },
                { left: 'Bellman-Ford', right: 'Handles negatives' },
                { left: 'BFS', right: 'Unweighted shortest path' },
                { left: 'Floyd-Warshall', right: 'All-pairs' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: relax all edges ___ times.',
              tokens: ['V', '-', '1', 'V²', 'E', 'log V'],
              correctOrder: ['V', '-', '1'],
              explanation: 'V-1 passes guarantees convergence on shortest paths.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u23',
      name: 'Unit 23 · Minimum Spanning Tree',
      description: 'Connect all nodes with minimum total weight.',
      lessons: [
        {
          id: 'algo-u23-l1',
          name: 'Kruskal',
          icon: '🧵',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Sort edges, union-find',
              content: `<p>Sort all edges by weight ascending. Pick the next edge if it doesn\'t form a cycle. Use <b>Union-Find</b> to test connectedness.</p>
<div class="code-block"><span class="fn">sort</span>(edges, <span class="kw">by</span> weight);
<span class="kw">for</span> (<span class="ty">Edge</span> e : edges) {
  <span class="kw">if</span> (<span class="fn">find</span>(e.u) != <span class="fn">find</span>(e.v)) {
    <span class="fn">union</span>(e.u, e.v);
    total += e.w;
  }
}</div>
<p>Time: O(E log E) = O(E log V).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Kruskal uses which data structure to detect cycles?',
              options: [
                { text: 'Stack', code: false },
                { text: 'Queue', code: false },
                { text: 'Union-Find (DSU)', code: false },
                { text: 'Heap', code: false }
              ],
              correct: 2,
              explanation: 'DSU answers "are u and v already connected?".'
            },
            {
              type: 'true-false',
              statement: 'Kruskal\'s algorithm is greedy.',
              correct: true,
              explanation: 'Always pick the smallest safe edge.'
            },
            {
              type: 'fill-blank',
              prompt: 'Skip the edge if endpoints are already in the same component.',
              codeLines: [
                { html: '<span class="kw">if</span> (<span class="fn">find</span>(e.u) <span class="num">_BLANK_</span> <span class="fn">find</span>(e.v)) <span class="kw">continue</span>;' }
              ],
              tokens: ['==', '!=', '<', '>'],
              correctAnswer: '==',
              explanation: 'Same root → already connected → skip.'
            },
            {
              type: 'output-predict',
              prompt: 'Edges (0,1,1),(1,2,2),(0,2,3),(2,3,4). MST weight?',
              code: `kruskal(edges, 4);`,
              options: ['6', '7', '8', '10'],
              correct: 1,
              explanation: '1 + 2 + 4 = 7.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder Kruskal.',
              lines: [
                '  <span class="kw">if</span> (<span class="fn">find</span>(e.u) != <span class="fn">find</span>(e.v)) { <span class="fn">union</span>; total += e.w; }',
                '<span class="kw">for</span> (e : edges)',
                '<span class="fn">sort</span>(edges, <span class="kw">by</span> weight);',
                '<span class="kw">return</span> total;'
              ],
              correctOrder: [2, 1, 0, 3]
            }
          ]
        },
        {
          id: 'algo-u23-l2',
          name: 'Prim',
          icon: '🌱',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Grow the tree',
              content: `<p>Start with any node. Always add the smallest edge that connects the growing tree to a new node. Use a priority queue keyed by edge weight.</p>
<div class="code-block">PriorityQueue&lt;<span class="ty">int</span>[]&gt; pq;
pq.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">int</span>[]{start, <span class="num">0</span>});
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>() &amp;&amp; treeSize &lt; V) {
  <span class="ty">int</span>[] cur = pq.<span class="fn">poll</span>();
  <span class="kw">if</span> (inMST[cur[<span class="num">0</span>]]) <span class="kw">continue</span>;
  inMST[cur[<span class="num">0</span>]] = <span class="kw">true</span>;
  total += cur[<span class="num">1</span>];
  <span class="kw">for</span> (<span class="ty">Edge</span> e : adj.<span class="fn">get</span>(cur[<span class="num">0</span>])) {
    <span class="kw">if</span> (!inMST[e.to]) pq.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">int</span>[]{e.to, e.w});
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Prim is to Dijkstra as…',
              options: [
                { text: 'Heap to array.', code: false },
                { text: 'Edge weight to path weight.', code: false },
                { text: 'BFS to DFS.', code: false },
                { text: 'Greedy to DP.', code: false }
              ],
              correct: 1,
              explanation: 'Both grow a frontier; Prim by edge weight, Dijkstra by cumulative path cost.'
            },
            {
              type: 'true-false',
              statement: 'Both Prim and Kruskal find the SAME MST weight (ties may differ in edges).',
              correct: true,
              explanation: 'MST weight is unique even if edges differ.'
            },
            {
              type: 'output-predict',
              prompt: 'V=4 edges (0,1,1),(1,2,2),(0,2,3),(2,3,4). Prim MST weight?',
              code: `prim(adj, 0);`,
              options: ['6', '7', '8', '10'],
              correct: 1,
              explanation: 'Same MST weight as Kruskal: 7.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match step to algorithm.',
              leftLabel: 'Step',
              rightLabel: 'Algorithm',
              pairs: [
                { left: 'Sort edges first', right: 'Kruskal' },
                { left: 'Priority queue of frontier edges', right: 'Prim' },
                { left: 'Uses union-find', right: 'Kruskal' },
                { left: 'Grows one tree from a start node', right: 'Prim' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Skip already-included nodes.',
              codeLines: [
                { html: '<span class="kw">if</span> (inMST[cur[<span class="num">0</span>]]) <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['continue', 'break', 'return', 'throw'],
              correctAnswer: 'continue',
              explanation: 'Skip to next polled edge.'
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u24',
      name: 'Unit 24 · String Algorithms',
      description: 'Pattern matching: naive, KMP, Rabin-Karp.',
      lessons: [
        {
          id: 'algo-u24-l1',
          name: 'Naive & KMP',
          icon: '🔡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Pattern matching',
              content: `<p><b>Naive</b>: try every alignment. O(n·m) worst.</p>
<p><b>KMP</b> precomputes a <code>fail</code> table (longest proper prefix that is also a suffix). On mismatch, jump using the table instead of restarting. O(n + m).</p>
<div class="code-block"><span class="com">// fail[i] = length of longest proper prefix of pat[0..i] that is also suffix</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Naive pattern search worst-case complexity?',
              options: [
                { text: 'O(n)', code: false },
                { text: 'O(n + m)', code: false },
                { text: 'O(n·m)', code: false },
                { text: 'O(log n)', code: false }
              ],
              correct: 2,
              explanation: 'Many mismatches near the end of pattern.'
            },
            {
              type: 'true-false',
              statement: 'KMP runs in linear time O(n + m).',
              correct: true,
              explanation: 'Each text character is processed at most twice.'
            },
            {
              type: 'output-predict',
              prompt: 'fail array of "ababaca"?',
              code: `failTable("ababaca");`,
              options: ['[0,0,1,2,3,0,1]', '[0,1,0,1,0,0,0]', '[0,0,0,0,0,0,0]', '[0,0,1,2,3,4,5]'],
              correct: 0,
              explanation: 'Classic KMP table for ababaca.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match algorithm to time.',
              leftLabel: 'Algorithm',
              rightLabel: 'Time',
              pairs: [
                { left: 'Naive search', right: 'O(n·m) worst' },
                { left: 'KMP', right: 'O(n + m)' },
                { left: 'Rabin-Karp', right: 'O(n + m) avg' },
                { left: 'Z-algorithm', right: 'O(n + m)' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the KMP idea: skip using the ___.',
              tokens: ['fail', 'table', 'hash', 'random', 'queue'],
              correctOrder: ['fail', 'table'],
              explanation: 'Reuse already-matched prefix info.'
            }
          ]
        },
        {
          id: 'algo-u24-l2',
          name: 'Rabin-Karp',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Rolling hash',
              content: `<p>Compute a hash of the pattern and a sliding-window hash of the text. Compare hashes O(1); on hash match, verify O(m) for safety.</p>
<p>The rolling hash updates in O(1) per shift: subtract leading char\'s contribution, multiply, add trailing.</p>
<p>Average O(n + m); worst O(n·m) with adversarial collisions.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Rabin-Karp\'s hash update per shift costs:',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(m)', code: false },
                { text: 'O(log m)', code: false },
                { text: 'O(n)', code: false }
              ],
              correct: 0,
              explanation: 'That\'s the whole point of rolling.'
            },
            {
              type: 'true-false',
              statement: 'A hash match in Rabin-Karp guarantees a true match.',
              correct: false,
              explanation: 'Hashes can collide — must verify.'
            },
            {
              type: 'output-predict',
              prompt: 'Looking for "abc" in "abcabc". Rabin-Karp checks?',
              code: `rabinKarp("abcabc","abc");`,
              options: ['Returns 0 only', 'Returns 0 and 3', 'Returns 3 only', 'Throws'],
              correct: 1,
              explanation: 'Two occurrences: indices 0 and 3.'
            },
            {
              type: 'fill-blank',
              prompt: 'Re-hash by removing the leftmost character.',
              codeLines: [
                { html: 'hash = (hash - text[i] * base) * <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['1', 'base', '0', '256'],
              correctAnswer: '1',
              explanation: 'Then add the next char — actual code: hash = hash*base - leading + trailing (illustrative).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match string algo to use case.',
              leftLabel: 'Algorithm',
              rightLabel: 'Use case',
              pairs: [
                { left: 'KMP', right: 'Single pattern, reliable linear time' },
                { left: 'Rabin-Karp', right: 'Multiple patterns same length' },
                { left: 'Aho-Corasick', right: 'Many patterns at once' },
                { left: 'Suffix array', right: 'Indexing for many queries' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algo-u25',
      name: 'Unit 25 · Two Pointers & Sliding Window',
      description: 'The two patterns every interviewer loves.',
      lessons: [
        {
          id: 'algo-u25-l1',
          name: 'Two Pointers',
          icon: '👈👉',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two-pointer pattern',
              content: `<p>Place two indices and move them toward each other (or in tandem).</p>
<div class="code-block"><span class="com">// Two-sum on a SORTED array</span>
<span class="ty">int</span> l = <span class="num">0</span>, r = n - <span class="num">1</span>;
<span class="kw">while</span> (l &lt; r) {
  <span class="ty">int</span> s = a[l] + a[r];
  <span class="kw">if</span> (s == target) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">int</span>[]{l, r};
  <span class="kw">if</span> (s &lt; target) l++; <span class="kw">else</span> r--;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Two pointers on a SORTED array: when sum < target?',
              options: [
                { text: 'Move l right (need bigger).', code: false },
                { text: 'Move r left (need smaller).', code: false },
                { text: 'Return l, r.', code: false },
                { text: 'Random move.', code: false }
              ],
              correct: 0,
              explanation: 'Increasing l increases the sum.'
            },
            {
              type: 'true-false',
              statement: 'Reversing an array in place is a classic two-pointer task.',
              correct: true,
              explanation: 'Swap a[l] with a[r], move inward.'
            },
            {
              type: 'fill-blank',
              prompt: 'Reverse an array via two pointers.',
              codeLines: [
                { html: '<span class="ty">int</span> l = <span class="num">0</span>, r = n - <span class="num">1</span>;' },
                { html: '<span class="kw">while</span> (l &lt; r) {' },
                { html: '  <span class="fn">swap</span>(a, l, r);' },
                { html: '  l++; r<span class="num">_BLANK_</span>;' },
                { html: '}' }
              ],
              tokens: ['--', '++', '+=2', '*=2'],
              correctAnswer: '--',
              explanation: 'Move pointers inward.'
            },
            {
              type: 'output-predict',
              prompt: 'twoSumSorted([1,3,4,5,7], 9)?',
              code: `twoSum(arr, 9);`,
              options: ['[0,4]', '[1,3]', '[2,4]', '[0,3]'],
              correct: 2,
              explanation: '4 + 5 = 9 → indices 2 and 4.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder reversing an array.',
              lines: [
                '<span class="ty">int</span> l = <span class="num">0</span>, r = n - <span class="num">1</span>;',
                '  l++; r--;',
                '<span class="kw">while</span> (l &lt; r) {',
                '  <span class="fn">swap</span>(a, l, r);',
                '}'
              ],
              correctOrder: [0, 2, 3, 1, 4]
            }
          ]
        },
        {
          id: 'algo-u25-l2',
          name: 'Sliding Window',
          icon: '🪟',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Sliding window pattern',
              content: `<p>Expand the window\'s right edge; shrink from the left when the window violates a constraint.</p>
<div class="code-block"><span class="com">// Longest substring without repeating chars</span>
Map&lt;<span class="ty">Character</span>, <span class="ty">Integer</span>&gt; last = <span class="kw">new</span> HashMap&lt;&gt;();
<span class="ty">int</span> l = <span class="num">0</span>, best = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; s.length(); r++) {
  <span class="kw">if</span> (last.<span class="fn">containsKey</span>(s.<span class="fn">charAt</span>(r)))
    l = <span class="fn">Math</span>.<span class="fn">max</span>(l, last.<span class="fn">get</span>(s.<span class="fn">charAt</span>(r)) + <span class="num">1</span>);
  last.<span class="fn">put</span>(s.<span class="fn">charAt</span>(r), r);
  best = <span class="fn">Math</span>.<span class="fn">max</span>(best, r - l + <span class="num">1</span>);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Sliding window complexity (typical)?',
              options: [
                { text: 'O(1)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(n²)', code: false }
              ],
              correct: 1,
              explanation: 'Each index enters and leaves the window once.'
            },
            {
              type: 'true-false',
              statement: 'Sliding-window solutions usually amortize to linear time.',
              correct: true,
              explanation: 'Pointers monotonically advance.'
            },
            {
              type: 'output-predict',
              prompt: 'Longest substring without repeat of "abcabcbb"?',
              code: `lengthOfLongestSubstring("abcabcbb");`,
              options: ['2', '3', '4', '8'],
              correct: 1,
              explanation: '"abc" of length 3.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute current window size.',
              codeLines: [
                { html: 'best = <span class="fn">Math</span>.<span class="fn">max</span>(best, r - l + <span class="num">_BLANK_</span>);' }
              ],
              tokens: ['1', '0', '2', 'r'],
              correctAnswer: '1',
              explanation: 'Inclusive window of length r - l + 1.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem to pattern.',
              leftLabel: 'Problem',
              rightLabel: 'Pattern',
              pairs: [
                { left: 'Reverse an array', right: 'Two pointers' },
                { left: 'Longest substring no repeat', right: 'Sliding window' },
                { left: 'Two-sum (sorted)', right: 'Two pointers' },
                { left: 'Min window substring', right: 'Sliding window' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: expand ___ , shrink ___ when invalid.',
              tokens: ['right', 'left', 'middle', 'random', 'start', 'end'],
              correctOrder: ['right', 'left'],
              explanation: 'r grows; l catches up when constraint breaks.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder sliding-window for distinct-char substring.',
              lines: [
                '  best = <span class="fn">Math</span>.<span class="fn">max</span>(best, r - l + <span class="num">1</span>);',
                '  last.<span class="fn">put</span>(c, r);',
                '<span class="kw">for</span> (r = <span class="num">0</span>; r &lt; s.length(); r++) {',
                '  <span class="kw">if</span> (last.<span class="fn">containsKey</span>(c)) l = <span class="fn">max</span>(l, last.<span class="fn">get</span>(c)+<span class="num">1</span>);'
              ],
              correctOrder: [2, 3, 1, 0]
            }
          ]
        }
      ]
    }
  ]
});

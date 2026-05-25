PUSH({
  id: 'dsa',
  name: 'DSA Basics',
  icon: '🧩',
  color: '#00b8a9',
  description: 'Data structures and algorithms — the foundations of all great code.',
  units: [
    // ============================================================
    // UNIT 1 — What is DSA?
    // ============================================================
    {
      id: 'u1-what-is-dsa',
      name: 'Unit 1 · What is DSA?',
      description: 'Meet the building blocks of every program ever written.',
      lessons: [
        {
          id: 'u1-l1',
          name: 'Welcome to DSA',
          icon: '🚀',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'What does DSA mean?',
              content: `<p><b>DSA</b> stands for <b>Data Structures and Algorithms</b>. It is the science of organizing data and writing recipes (steps) to work with that data efficiently.</p>
<p>Every app you use — Google Maps, Instagram, your IDE — runs on DSA under the hood.</p>
<div class="code-block"><span class="com">// Data structure: how we store things</span>
<span class="ty">int</span>[] scores = { <span class="num">90</span>, <span class="num">85</span>, <span class="num">72</span> };

<span class="com">// Algorithm: what we do with them</span>
<span class="ty">int</span> total = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> s : scores) total += s;</div>
<p>Learning DSA makes you faster at solving problems and writing code that scales.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does DSA stand for?',
              options: [
                { text: 'Data Storage and Access', code: false },
                { text: 'Data Structures and Algorithms', code: false },
                { text: 'Dynamic System Architecture', code: false },
                { text: 'Database Storage Array', code: false }
              ],
              correct: 1,
              explanation: 'DSA = Data Structures and Algorithms. The bread and butter of programming.'
            },
            {
              type: 'true-false',
              statement: 'A data structure is a way of organizing data so it can be used efficiently.',
              correct: true,
              explanation: 'Exactly. Arrays, lists, trees — they are all data structures.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the concept with its meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Data structure', right: 'How data is stored' },
                { left: 'Algorithm', right: 'Steps to solve a problem' },
                { left: 'Technique', right: 'A reusable strategy (e.g. recursion)' },
                { left: 'Complexity', right: 'How fast / how much memory' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a sentence: pick the words that complete the definition.',
              tokens: ['Algorithms', 'are', 'random', 'a', 'set', 'of', 'steps', 'colors', 'to', 'solve', 'a', 'problem'],
              correctOrder: ['Algorithms', 'are', 'a', 'set', 'of', 'steps', 'to', 'solve', 'a', 'problem'],
              explanation: 'An algorithm is a finite sequence of steps that solves a well-defined problem.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is an example of a data structure?',
              options: [
                { text: 'A for-loop', code: false },
                { text: 'Binary search', code: false },
                { text: 'An array', code: true },
                { text: 'Recursion', code: false }
              ],
              correct: 2,
              explanation: 'An array stores data. A for-loop is control flow, binary search is an algorithm, recursion is a technique.'
            }
          ]
        },
        {
          id: 'u1-l2',
          name: 'Why DSA matters',
          icon: '🌍',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Why should you care?',
              content: `<p>Imagine you have <b>1 million users</b>. A slow algorithm that takes 1 second per user means <b>11 days</b> of computing! A fast one might finish in seconds.</p>
<p>Real-world places DSA shows up:</p>
<ul>
<li><b>Google search</b> — inverted indexes (hash tables) and graph algorithms.</li>
<li><b>Maps</b> — shortest path algorithms over graphs.</li>
<li><b>Spotify</b> — heaps for top-N recommendations.</li>
<li><b>Your phone keyboard</b> — tries for autocomplete.</li>
</ul>
<p>DSA isn't theory — it's how real software stays fast.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which app most likely uses graph algorithms for shortest paths?',
              options: [
                { text: 'Notes app', code: false },
                { text: 'Calculator', code: false },
                { text: 'Google Maps', code: false },
                { text: 'A timer', code: false }
              ],
              correct: 2,
              explanation: 'Maps need to find the shortest route between two points — a classic graph problem.'
            },
            {
              type: 'true-false',
              statement: 'Choosing the right data structure can make a slow program 1000x faster.',
              correct: true,
              explanation: 'A hash table lookup is O(1) versus O(n) for a list scan — enormous difference at scale.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the product with the DSA concept it uses.',
              leftLabel: 'Product',
              rightLabel: 'DSA',
              pairs: [
                { left: 'Keyboard autocomplete', right: 'Trie' },
                { left: 'Undo/redo', right: 'Stack' },
                { left: 'Music playlist queue', right: 'Queue' },
                { left: 'Friend suggestions', right: 'Graph' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'How many users can a 1-second-per-user algorithm process in 10 seconds?',
              code: `<span class="com">// 1 user takes 1 second</span>
<span class="com">// budget = 10 seconds</span>`,
              options: ['1', '10', '100', '1000'],
              correct: 1,
              explanation: 'Just 10 users. Now imagine a million — that\'s why we optimize.'
            },
            {
              type: 'type-answer',
              prompt: 'What three-letter abbreviation are we studying?',
              code: '',
              accept: ['DSA', 'dsa'],
              explanation: 'Data Structures and Algorithms — the heart of programming.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 2 — Time Complexity & Big O
    // ============================================================
    {
      id: 'u2-big-o',
      name: 'Unit 2 · Time Complexity & Big O',
      description: 'Learn to measure how fast (or slow) your code really is.',
      lessons: [
        {
          id: 'u2-l1',
          name: 'Big O intuition',
          icon: '📈',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is Big O?',
              content: `<p><b>Big O</b> describes how an algorithm's running time grows as the input gets bigger. It ignores constants and small terms — we care about <i>shape</i>, not exact seconds.</p>
<div class="code-block"><span class="com">// O(1) — constant: independent of n</span>
<span class="kw">return</span> arr[<span class="num">0</span>];

<span class="com">// O(n) — linear: one pass over n items</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) sum += arr[i];

<span class="com">// O(n²) — quadratic: nested loops</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++)
  <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; n; j++) ...;</div>
<p>Bigger O = grows faster = slower at scale.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which Big O is the fastest at scale?',
              options: [
                { text: 'O(n²)', code: true },
                { text: 'O(n log n)', code: true },
                { text: 'O(1)', code: true },
                { text: 'O(2^n)', code: true }
              ],
              correct: 2,
              explanation: 'O(1) is constant — it doesn\'t grow at all with input size.'
            },
            {
              type: 'true-false',
              statement: 'Big O ignores constants — O(2n) and O(n) are both written O(n).',
              correct: true,
              explanation: 'Big O captures the growth rate, not exact multipliers.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the time complexity of this code?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) {
  <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; n; j++) {
    <span class="fn">print</span>(i, j);
  }
}`,
              options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
              correct: 2,
              explanation: 'Two nested loops over n give n × n = O(n²).'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the Big O notation for a single loop.',
              codeLines: [
                { html: '<span class="com">// runs n times</span>' },
                { html: '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) sum++;' },
                { html: '<span class="com">// Big O = O(_BLANK_)</span>' }
              ],
              tokens: ['n', '1', 'n²', 'log n'],
              correctAnswer: 'n',
              explanation: 'A single loop over n elements is O(n) — linear time.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the code shape with its Big O.',
              leftLabel: 'Code shape',
              rightLabel: 'Complexity',
              pairs: [
                { left: 'One pass over n items', right: 'O(n)' },
                { left: 'Nested loops i × j over n', right: 'O(n²)' },
                { left: 'Halve the input each step', right: 'O(log n)' },
                { left: 'Direct array access', right: 'O(1)' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'Express the Big O for a single for-loop over n elements.',
              code: '',
              accept: ['O(n)', 'O(N)', 'o(n)'],
              explanation: 'Linear time, written as O(n).'
            }
          ]
        },
        {
          id: 'u2-l2',
          name: 'The Big O zoo',
          icon: '🦁',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The common complexities',
              content: `<p>Memorize these — they cover 95% of code you'll ever see:</p>
<ul>
<li><b>O(1)</b> — constant. Array index, hash lookup.</li>
<li><b>O(log n)</b> — logarithmic. Binary search.</li>
<li><b>O(n)</b> — linear. Scanning a list.</li>
<li><b>O(n log n)</b> — linearithmic. Merge sort, quicksort (avg).</li>
<li><b>O(n²)</b> — quadratic. Bubble sort, nested scans.</li>
<li><b>O(2^n)</b> — exponential. Brute-force subsets.</li>
<li><b>O(n!)</b> — factorial. All permutations (travelling salesman brute force).</li>
</ul>
<p>Rule of thumb: O(n!) and O(2^n) become unusable past n ≈ 20–30.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Binary search has what complexity?',
              options: [
                { text: 'O(n)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n log n)', code: true },
                { text: 'O(1)', code: true }
              ],
              correct: 1,
              explanation: 'Binary search halves the search space each step — O(log n).'
            },
            {
              type: 'true-false',
              statement: 'O(2^n) is faster than O(n²) for very large n.',
              correct: false,
              explanation: 'Exponential is far worse than polynomial. O(2^n) explodes past n ≈ 30.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order these from fastest to slowest at large n.',
              tokens: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)', 'O(2^n)', 'O(n!)'],
              correctOrder: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)', 'O(2^n)', 'O(n!)'],
              explanation: 'Classic order: constant → log → linear → linearithmic → quadratic → exponential → factorial.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the complexity?',
              code: `<span class="ty">int</span> lo = <span class="num">0</span>, hi = n;
<span class="kw">while</span> (lo &lt; hi) {
  <span class="ty">int</span> mid = (lo + hi) / <span class="num">2</span>;
  <span class="kw">if</span> (arr[mid] == key) <span class="kw">return</span> mid;
  <span class="kw">if</span> (arr[mid] &lt; key) lo = mid + <span class="num">1</span>;
  <span class="kw">else</span> hi = mid;
}`,
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
              correct: 1,
              explanation: 'It halves the range each iteration — binary search, O(log n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the algorithm with its time complexity.',
              leftLabel: 'Algorithm',
              rightLabel: 'Big O',
              pairs: [
                { left: 'Bubble sort', right: 'O(n²)' },
                { left: 'Merge sort', right: 'O(n log n)' },
                { left: 'Binary search', right: 'O(log n)' },
                { left: 'Hash lookup', right: 'O(1)' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A nested loop with two passes over n: write the Big O.',
              code: '',
              accept: ['O(n^2)', 'O(n²)', 'O(n2)', 'O(n*n)'],
              explanation: 'Two nested loops over n yield n × n = O(n²).'
            }
          ]
        },
        {
          id: 'u2-l3',
          name: 'Best, worst, space',
          icon: '🏋️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Best vs worst vs average',
              content: `<p>An algorithm can have <b>different complexities</b> depending on the input:</p>
<ul>
<li><b>Best case</b> — luckiest input. Linear search best case = O(1) (item is first).</li>
<li><b>Average case</b> — typical input.</li>
<li><b>Worst case</b> — unluckiest input. Usually the one we report.</li>
</ul>
<p><b>Space complexity</b> measures extra memory used (besides the input). Same Big O notation.</p>
<div class="code-block"><span class="com">// O(n) time, O(1) extra space</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) max = Math.<span class="fn">max</span>(max, arr[i]);

<span class="com">// O(n) time, O(n) extra space</span>
<span class="ty">int</span>[] copy = arr.<span class="fn">clone</span>();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Linear search worst case is:',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n²)', code: true }
              ],
              correct: 2,
              explanation: 'In the worst case, the item is last (or absent) and we check all n items.'
            },
            {
              type: 'true-false',
              statement: 'Space complexity counts the memory of the input array we were given.',
              correct: false,
              explanation: 'We count *extra* memory — the auxiliary space the algorithm uses beyond its input.'
            },
            {
              type: 'output-predict',
              prompt: 'Space complexity of this function?',
              code: `<span class="ty">int</span>[] <span class="fn">double</span>(<span class="ty">int</span>[] arr) {
  <span class="ty">int</span>[] out = <span class="kw">new</span> <span class="ty">int</span>[arr.length];
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; arr.length; i++) out[i] = arr[i] * <span class="num">2</span>;
  <span class="kw">return</span> out;
}`,
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
              correct: 2,
              explanation: 'We allocate a new array of size n — O(n) extra space.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill in the worst-case Big O for linear search.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++)' },
                { html: '  <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;' },
                { html: '<span class="com">// Worst case: O(_BLANK_)</span>' }
              ],
              tokens: ['n', '1', 'log n', 'n²'],
              correctAnswer: 'n',
              explanation: 'Worst case scans every element — O(n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match case type with description.',
              leftLabel: 'Case',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Best', right: 'Luckiest input' },
                { left: 'Average', right: 'Typical input' },
                { left: 'Worst', right: 'Pessimistic upper bound' },
                { left: 'Space', right: 'Extra memory used' }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 3 — Arrays (Static)
    // ============================================================
    {
      id: 'u3-arrays',
      name: 'Unit 3 · Arrays — Static',
      description: 'The simplest, oldest, and most useful data structure.',
      lessons: [
        {
          id: 'u3-l1',
          name: 'What is an array?',
          icon: '📦',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Arrays in one slide',
              content: `<p>An <b>array</b> is a contiguous block of memory holding a fixed number of same-type values, accessed by integer <b>index</b>.</p>
<div class="code-block"><span class="ty">int</span>[] nums = { <span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span> };
<span class="com">// indexes:    0    1    2    3    4</span>

<span class="fn">println</span>(nums[<span class="num">2</span>]);   <span class="com">// → 30</span>
nums[<span class="num">2</span>] = <span class="num">99</span>;     <span class="com">// update in place</span></div>
<p>Key facts:</p>
<ul>
<li><b>Index starts at 0.</b> Valid indexes: 0 to n−1.</li>
<li><b>Fixed size</b> once created (static arrays).</li>
<li><b>O(1) access</b> by index — that's why arrays are everywhere.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is nums[0] in { 7, 14, 21 }?',
              options: [
                { text: '14', code: true },
                { text: '7', code: true },
                { text: '21', code: true },
                { text: 'undefined', code: true }
              ],
              correct: 1,
              explanation: 'Arrays are 0-indexed. The first element is at index 0.'
            },
            {
              type: 'true-false',
              statement: 'In a static array, you can change its length after creation.',
              correct: false,
              explanation: 'Static arrays have a fixed size. Use a dynamic array (ArrayList/Vector) for resizing.'
            },
            {
              type: 'output-predict',
              prompt: 'What gets printed?',
              code: `<span class="ty">int</span>[] a = { <span class="num">5</span>, <span class="num">10</span>, <span class="num">15</span>, <span class="num">20</span> };
<span class="fn">println</span>(a[<span class="num">3</span>] - a[<span class="num">1</span>]);`,
              options: ['5', '10', '15', '20'],
              correct: 1,
              explanation: 'a[3]=20, a[1]=10, so 20-10=10.'
            },
            {
              type: 'fill-blank',
              prompt: 'Access the last element of an array of length n.',
              codeLines: [
                { html: '<span class="ty">int</span> last = arr[n - <span class="num">_BLANK_</span>];' }
              ],
              tokens: ['1', '0', '2', 'n'],
              correctAnswer: '1',
              explanation: 'Indexes go 0 to n-1, so the last element is at n-1.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Declare and initialize an int array of 3 elements.',
              tokens: ['int', '[', ']', 'arr', '=', '{', '1', ',', '2', ',', '3', '}', ';', 'new'],
              correctOrder: ['int', '[', ']', 'arr', '=', '{', '1', ',', '2', ',', '3', '}', ';'],
              explanation: 'Java syntax: int[] arr = {1, 2, 3};'
            },
            {
              type: 'match-pairs',
              prompt: 'Match index with element in { 100, 200, 300, 400 }.',
              leftLabel: 'Index',
              rightLabel: 'Value',
              pairs: [
                { left: '0', right: '100' },
                { left: '1', right: '200' },
                { left: '2', right: '300' },
                { left: '3', right: '400' }
              ]
            }
          ]
        },
        {
          id: 'u3-l2',
          name: 'Array operations',
          icon: '⚙️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Costs of array operations',
              content: `<p>Time complexities for a static array of size n:</p>
<ul>
<li><b>Access by index</b> — O(1). Direct memory address.</li>
<li><b>Search (unsorted)</b> — O(n). Must scan.</li>
<li><b>Search (sorted)</b> — O(log n) with binary search.</li>
<li><b>Insert at end</b> — O(1) if space left, O(n) if must resize.</li>
<li><b>Insert at middle</b> — O(n). Must shift elements right.</li>
<li><b>Delete</b> — O(n). Must shift elements left.</li>
</ul>
<div class="code-block"><span class="com">// Insert 99 at index 2 — shift right</span>
<span class="kw">for</span> (<span class="ty">int</span> i = n; i &gt; <span class="num">2</span>; i--) arr[i] = arr[i - <span class="num">1</span>];
arr[<span class="num">2</span>] = <span class="num">99</span>;</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Accessing arr[42] in an array of size 1000 takes:',
              options: [
                { text: 'O(n) — scan to index 42', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(1) — direct memory access', code: true },
                { text: 'O(42)', code: true }
              ],
              correct: 2,
              explanation: 'Array access is O(1). The memory address is computed directly from base + index × element size.'
            },
            {
              type: 'true-false',
              statement: 'Inserting at the start of an array of size n is O(n) because everything must shift.',
              correct: true,
              explanation: 'All n elements move one slot right — linear time.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the worst-case time complexity?',
              code: `<span class="com">// Search target in unsorted arr of size n</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++)
  <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
<span class="kw">return</span> -<span class="num">1</span>;`,
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
              correct: 2,
              explanation: 'Worst case scans the whole array — O(n).'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the steps to insert value v at index k.',
              lines: [
                '<span class="kw">for</span> (<span class="ty">int</span> i = n; i &gt; k; i--)',
                '  arr[i] = arr[i - <span class="num">1</span>];',
                'arr[k] = v;',
                'n++;'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match the operation with its time complexity.',
              leftLabel: 'Operation',
              rightLabel: 'Big O',
              pairs: [
                { left: 'Access arr[i]', right: 'O(1)' },
                { left: 'Search unsorted', right: 'O(n)' },
                { left: 'Insert at middle', right: 'O(n)' },
                { left: 'Binary search (sorted)', right: 'O(log n)' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Compute the midpoint for binary search.',
              codeLines: [
                { html: '<span class="ty">int</span> mid = (lo + hi) / <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['2', '1', '4', 'n'],
              correctAnswer: '2',
              explanation: 'Binary search halves the range, so we divide by 2.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 4 — Dynamic Arrays
    // ============================================================
    {
      id: 'u4-dynamic-arrays',
      name: 'Unit 4 · Dynamic Arrays',
      description: 'Arrays that grow on demand — the magic behind ArrayList.',
      lessons: [
        {
          id: 'u4-l1',
          name: 'Resizable arrays',
          icon: '📐',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'How dynamic arrays work',
              content: `<p>A <b>dynamic array</b> (ArrayList in Java, list in Python, vector in C++) is a static array that grows when full.</p>
<p>Trick: when full, allocate a new array <b>2× the size</b> and copy everything over.</p>
<div class="code-block"><span class="ty">ArrayList</span>&lt;<span class="ty">Integer</span>&gt; list = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
list.<span class="fn">add</span>(<span class="num">1</span>);  <span class="com">// O(1) average</span>
list.<span class="fn">add</span>(<span class="num">2</span>);
list.<span class="fn">add</span>(<span class="num">3</span>);
<span class="com">// internal array: [1, 2, 3, _, _, _, _, _]</span></div>
<p>Most adds are O(1). Occasionally one is O(n) (the resize). On average it's <b>amortized O(1)</b>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'When a dynamic array is full and you append, what typically happens?',
              options: [
                { text: 'Allocate a new array twice the size and copy', code: false },
                { text: 'Throw an error', code: false },
                { text: 'Add one slot at a time', code: false },
                { text: 'Halve the array', code: false }
              ],
              correct: 0,
              explanation: 'Doubling keeps the amortized cost O(1) per append.'
            },
            {
              type: 'true-false',
              statement: 'Appending to a dynamic array is amortized O(1).',
              correct: true,
              explanation: 'Even with occasional resizes, the average per-append cost stays constant.'
            },
            {
              type: 'output-predict',
              prompt: 'Starting at capacity 4, how many resizes after 10 appends?',
              code: `<span class="com">// Capacity doubles: 4 → 8 → 16</span>`,
              options: ['0', '1', '2', '3'],
              correct: 2,
              explanation: 'At index 4 we resize to 8; at index 8 we resize to 16. Two resizes.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match dynamic-array operation with cost.',
              leftLabel: 'Operation',
              rightLabel: 'Amortized cost',
              pairs: [
                { left: 'append', right: 'O(1)' },
                { left: 'access by index', right: 'O(1)' },
                { left: 'insert at front', right: 'O(n)' },
                { left: 'delete from middle', right: 'O(n)' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the Java line to create an empty ArrayList of strings.',
              tokens: ['ArrayList', '<', 'String', '>', 'list', '=', 'new', 'ArrayList', '<', '>', '(', ')', ';', 'int', 'static'],
              correctOrder: ['ArrayList', '<', 'String', '>', 'list', '=', 'new', 'ArrayList', '<', '>', '(', ')', ';'],
              explanation: 'Generic ArrayList<String> with diamond <>.'
            }
          ]
        },
        {
          id: 'u4-l2',
          name: 'Static vs dynamic',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Pick the right tool',
              content: `<p>Static array — choose when the size is known and fixed.</p>
<p>Dynamic array — choose when the size changes at runtime.</p>
<ul>
<li>Static — slightly faster (no resize overhead).</li>
<li>Dynamic — more flexible (grow/shrink).</li>
<li>Both — O(1) index access, O(n) middle insert.</li>
</ul>
<div class="code-block"><span class="com">// Static</span>
<span class="ty">int</span>[] fixed = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">100</span>];

<span class="com">// Dynamic</span>
<span class="ty">ArrayList</span>&lt;<span class="ty">Integer</span>&gt; flex = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You need to read 1000 sensor readings — count is known. Use:',
              options: [
                { text: 'A linked list', code: false },
                { text: 'A static array of size 1000', code: false },
                { text: 'A hash table', code: false },
                { text: 'A tree', code: false }
              ],
              correct: 1,
              explanation: 'Known fixed size → static array is simplest and fastest.'
            },
            {
              type: 'true-false',
              statement: 'A dynamic array can shrink memory back down, not just grow.',
              correct: true,
              explanation: 'Many implementations halve the backing array when usage drops below ~25%.'
            },
            {
              type: 'output-predict',
              prompt: 'Capacity after 5 doublings from initial 4?',
              code: `<span class="com">// 4 → 8 → 16 → 32 → 64 → ?</span>`,
              options: ['64', '128', '256', '512'],
              correct: 1,
              explanation: '4 × 2⁵ = 128.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the language with its dynamic-array name.',
              leftLabel: 'Language',
              rightLabel: 'Name',
              pairs: [
                { left: 'Java', right: 'ArrayList' },
                { left: 'Python', right: 'list' },
                { left: 'C++', right: 'vector' },
                { left: 'JavaScript', right: 'Array' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Java: add element to end of an ArrayList.',
              codeLines: [
                { html: 'list.<span class="fn">_BLANK_</span>(<span class="num">42</span>);' }
              ],
              tokens: ['add', 'push', 'append', 'insert'],
              correctAnswer: 'add',
              explanation: 'In Java, ArrayList.add(x) appends to the end.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 5 — 2D Arrays & Matrices
    // ============================================================
    {
      id: 'u5-matrices',
      name: 'Unit 5 · 2D Arrays & Matrices',
      description: 'Tables of data: rows × columns.',
      lessons: [
        {
          id: 'u5-l1',
          name: 'Rows and columns',
          icon: '🔢',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a 2D array?',
              content: `<p>A 2D array is an array of arrays — a grid, matrix, or table.</p>
<div class="code-block"><span class="ty">int</span>[][] grid = {
  { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> },
  { <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span> },
  { <span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span> }
};
<span class="fn">println</span>(grid[<span class="num">1</span>][<span class="num">2</span>]);  <span class="com">// → 6 (row 1, col 2)</span></div>
<p>Convention: <b>grid[row][col]</b>. Row first, column second.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In grid[2][0], which axis is 2?',
              options: [
                { text: 'Column', code: false },
                { text: 'Row', code: false },
                { text: 'Depth', code: false },
                { text: 'Diagonal', code: false }
              ],
              correct: 1,
              explanation: 'By convention, the first index is the row.'
            },
            {
              type: 'true-false',
              statement: 'A 2D array of size R×C uses R×C memory cells.',
              correct: true,
              explanation: 'A grid of R rows × C columns has R×C cells total.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span>[][] m = { {<span class="num">10</span>,<span class="num">20</span>}, {<span class="num">30</span>,<span class="num">40</span>} };
<span class="fn">println</span>(m[<span class="num">0</span>][<span class="num">1</span>] + m[<span class="num">1</span>][<span class="num">0</span>]);`,
              options: ['30', '40', '50', '60'],
              correct: 2,
              explanation: 'm[0][1]=20, m[1][0]=30, sum=50.'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare a 5×5 int matrix.',
              codeLines: [
                { html: '<span class="ty">int</span>[][] mat = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">_BLANK_</span>][<span class="num">5</span>];' }
              ],
              tokens: ['5', '25', '1', '0'],
              correctAnswer: '5',
              explanation: 'For a 5×5 matrix: new int[5][5].'
            },
            {
              type: 'match-pairs',
              prompt: 'Match cell position to value in {{1,2},{3,4}}.',
              leftLabel: 'Cell',
              rightLabel: 'Value',
              pairs: [
                { left: 'm[0][0]', right: '1' },
                { left: 'm[0][1]', right: '2' },
                { left: 'm[1][0]', right: '3' },
                { left: 'm[1][1]', right: '4' }
              ]
            }
          ]
        },
        {
          id: 'u5-l2',
          name: 'Traversal patterns',
          icon: '🧭',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Common matrix traversals',
              content: `<p>Most matrix problems share a few traversal shapes:</p>
<div class="code-block"><span class="com">// Row-major (most common)</span>
<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; R; r++)
  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; C; c++)
    visit(grid[r][c]);

<span class="com">// Column-major</span>
<span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; C; c++)
  <span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; R; r++)
    visit(grid[r][c]);

<span class="com">// Diagonal</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) visit(grid[i][i]);</div>
<p>Total visited cells = R × C → traversal is O(R·C).</p>`
            },
            {
              type: 'output-predict',
              prompt: 'How many iterations total?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; <span class="num">3</span>; r++)
  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; <span class="num">4</span>; c++)
    count++;`,
              options: ['7', '12', '34', '16'],
              correct: 1,
              explanation: '3 rows × 4 columns = 12 cells.'
            },
            {
              type: 'true-false',
              statement: 'Visiting every cell of an R×C grid is O(R·C).',
              correct: true,
              explanation: 'You touch each cell once — linear in the total number of cells.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which iterates the main diagonal of an n×n grid?',
              options: [
                { text: 'for r=0..n: visit grid[0][r]', code: true },
                { text: 'for i=0..n: visit grid[i][i]', code: true },
                { text: 'for r=0..n,c=0..n: visit grid[r][c]', code: true },
                { text: 'visit grid[n][n]', code: true }
              ],
              correct: 1,
              explanation: 'grid[i][i] is the main diagonal: (0,0), (1,1), (2,2)…'
            },
            {
              type: 'reorder-code',
              prompt: 'Order lines to sum all cells of an R×C matrix.',
              lines: [
                '<span class="ty">int</span> sum = <span class="num">0</span>;',
                '<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; R; r++)',
                '  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; C; c++)',
                '    sum += grid[r][c];',
                '<span class="kw">return</span> sum;'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap tokens to visit a cell at row r and column c.',
              tokens: ['visit', '(', 'grid', '[', 'r', ']', '[', 'c', ']', ')', ';', 'rc', 'x'],
              correctOrder: ['visit', '(', 'grid', '[', 'r', ']', '[', 'c', ']', ')', ';'],
              explanation: 'Always grid[row][col] in row-major notation.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 6 — Linked Lists — Singly
    // ============================================================
    {
      id: 'u6-linked-list',
      name: 'Unit 6 · Linked Lists — Singly',
      description: 'Nodes connected by pointers — flexible but with tradeoffs.',
      lessons: [
        {
          id: 'u6-l1',
          name: 'Nodes & pointers',
          icon: '🔗',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a linked list?',
              content: `<p>A <b>singly linked list</b> is a chain of nodes. Each node holds a value and a pointer to the <b>next</b> node. The last node points to <code>null</code>.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">Node</span> {
  <span class="ty">int</span> value;
  <span class="ty">Node</span> next;
}

<span class="com">// head → [1|*] → [2|*] → [3|null]</span></div>
<p>Unlike arrays, nodes can live anywhere in memory — they don't have to be contiguous.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In a singly linked list, what does the last node\'s next point to?',
              options: [
                { text: 'The first node', code: false },
                { text: 'Itself', code: false },
                { text: 'null', code: true },
                { text: 'A random node', code: false }
              ],
              correct: 2,
              explanation: 'The tail\'s next pointer is null, marking the end.'
            },
            {
              type: 'true-false',
              statement: 'Linked-list nodes must be stored next to each other in memory.',
              correct: false,
              explanation: 'They can be anywhere — that\'s why we need explicit next pointers.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the Node class.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">Node</span> {' },
                { html: '  <span class="ty">int</span> value;' },
                { html: '  <span class="ty">Node</span> <span class="num">_BLANK_</span>;' },
                { html: '}' }
              ],
              tokens: ['next', 'prev', 'value', 'parent'],
              correctAnswer: 'next',
              explanation: 'A singly linked list node points to the next node via next.'
            },
            {
              type: 'output-predict',
              prompt: 'Walk this list: head→[3]→[7]→[9]→null. What is head.next.value?',
              code: `<span class="ty">Node</span> head = <span class="fn">build</span>(<span class="num">3</span>, <span class="num">7</span>, <span class="num">9</span>);
<span class="fn">println</span>(head.next.value);`,
              options: ['3', '7', '9', 'null'],
              correct: 1,
              explanation: 'head is 3; head.next is the 7 node.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match parts of a linked list.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'head', right: 'Pointer to first node' },
                { left: 'tail', right: 'Last node' },
                { left: 'next', right: 'Pointer to following node' },
                { left: 'null', right: 'Marks the end' }
              ]
            }
          ]
        },
        {
          id: 'u6-l2',
          name: 'Insertions & deletions',
          icon: '✏️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Where you insert matters',
              content: `<p>Costs for a singly linked list of length n:</p>
<ul>
<li><b>Insert at head</b> — O(1). Make new node point to old head.</li>
<li><b>Insert at tail</b> — O(n) without a tail pointer, O(1) with one.</li>
<li><b>Insert at middle</b> — O(n) to find position.</li>
<li><b>Delete head</b> — O(1).</li>
<li><b>Search</b> — O(n). Walk node by node.</li>
</ul>
<div class="code-block"><span class="com">// insert at head</span>
<span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(value);
n.next = head;
head = n;</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Inserting at the head of a singly linked list is:',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n²)', code: true }
              ],
              correct: 0,
              explanation: 'Just create a new node and update head — constant time.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order steps to insert a new node at head.',
              lines: [
                '<span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(v);',
                'n.next = head;',
                'head = n;'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'true-false',
              statement: 'Deleting the head of a linked list is O(1).',
              correct: true,
              explanation: 'Just point head to head.next — constant time.'
            },
            {
              type: 'output-predict',
              prompt: 'List: 1→2→3. After `head = head.next;` what is head.value?',
              code: `head = head.next;
<span class="fn">println</span>(head.value);`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: 'We just removed node 1 by advancing head — now head points to 2.'
            },
            {
              type: 'fill-blank',
              prompt: 'Delete the head node.',
              codeLines: [
                { html: 'head = head.<span class="num">_BLANK_</span>;' }
              ],
              tokens: ['next', 'prev', 'value', 'null'],
              correctAnswer: 'next',
              explanation: 'Advance head to its next — the old head is garbage collected.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Insert node n right after some node p.',
              tokens: ['n', '.', 'next', '=', 'p', '.', 'next', ';', 'p', '.', 'next', '=', 'n', ';'],
              correctOrder: ['n', '.', 'next', '=', 'p', '.', 'next', ';', 'p', '.', 'next', '=', 'n', ';'],
              explanation: 'Order matters: first n.next = p.next; then p.next = n; otherwise we lose the tail.'
            }
          ]
        },
        {
          id: 'u6-l3',
          name: 'Array vs Linked List',
          icon: '🆚',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Which to pick?',
              content: `<p>Side-by-side:</p>
<div class="code-block"><span class="com">// Random access</span>
arr[<span class="num">i</span>]              <span class="com">// O(1) — array wins</span>

<span class="com">// Insert at head</span>
list.head = newNode    <span class="com">// O(1) — list wins</span>

<span class="com">// Memory</span>
<span class="com">// Array: tight contiguous block</span>
<span class="com">// List : one pointer per node = extra memory</span></div>
<ul>
<li>Need fast index lookup? <b>Array</b>.</li>
<li>Frequent insertions/deletions at the front? <b>Linked list</b>.</li>
<li>CPU cache-friendly streaming? <b>Array</b>.</li>
<li>Unknown size, grows wildly? Either dynamic array or list.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which beats an array for inserting at the front?',
              options: [
                { text: 'Static array', code: false },
                { text: 'Linked list', code: false },
                { text: 'Hash table', code: false },
                { text: 'Heap', code: false }
              ],
              correct: 1,
              explanation: 'Linked-list head insertion is O(1); array head insertion is O(n).'
            },
            {
              type: 'true-false',
              statement: 'Random access by index is faster in a linked list than in an array.',
              correct: false,
              explanation: 'Arrays give O(1) indexed access; linked lists are O(n) — must walk from head.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation with the data structure that does it faster.',
              leftLabel: 'Operation',
              rightLabel: 'Winner',
              pairs: [
                { left: 'Index access', right: 'Array' },
                { left: 'Insert at head', right: 'Linked list' },
                { left: 'Memory locality', right: 'Array' },
                { left: 'No need to shift on insert', right: 'Linked list' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'You insert N items at the front. Linked-list total cost?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; N; i++)
  list.<span class="fn">addFirst</span>(i);`,
              options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
              correct: 2,
              explanation: 'Each add is O(1); N additions → O(N) total.'
            },
            {
              type: 'fill-blank',
              prompt: 'Linked-list index access is O(?).',
              codeLines: [
                { html: '<span class="com">// to reach node i, walk i steps from head</span>' },
                { html: '<span class="com">// time: O(_BLANK_)</span>' }
              ],
              tokens: ['n', '1', 'log n', 'i'],
              correctAnswer: 'n',
              explanation: 'In the worst case we walk the whole list — O(n).'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 7 — Linked Lists — Doubly & Circular
    // ============================================================
    {
      id: 'u7-doubly-circular',
      name: 'Unit 7 · Doubly & Circular Lists',
      description: 'Two-way pointers and loops.',
      lessons: [
        {
          id: 'u7-l1',
          name: 'Doubly linked lists',
          icon: '↔️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two pointers per node',
              content: `<p>A <b>doubly linked list</b> node has both <code>next</code> and <code>prev</code> pointers, allowing traversal in both directions.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">DNode</span> {
  <span class="ty">int</span> value;
  <span class="ty">DNode</span> prev;
  <span class="ty">DNode</span> next;
}

<span class="com">// null ← [1] ⇄ [2] ⇄ [3] → null</span></div>
<p>Trade-off: extra memory (one more pointer per node) for the ability to:</p>
<ul>
<li>Walk backward.</li>
<li>Delete a node in O(1) given a reference to it.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What extra field does a doubly linked node have over a singly linked one?',
              options: [
                { text: 'value', code: true },
                { text: 'next', code: true },
                { text: 'prev', code: true },
                { text: 'index', code: true }
              ],
              correct: 2,
              explanation: 'A prev pointer — that\'s the defining feature.'
            },
            {
              type: 'true-false',
              statement: 'Given a direct reference to a node, doubly linked lists can delete it in O(1).',
              correct: true,
              explanation: 'Update node.prev.next and node.next.prev — both pointers are right there.'
            },
            {
              type: 'reorder-code',
              prompt: 'Delete node n from a doubly linked list.',
              lines: [
                'n.prev.next = n.next;',
                'n.next.prev = n.prev;'
              ],
              correctOrder: [0, 1]
            },
            {
              type: 'match-pairs',
              prompt: 'Match data structure with property.',
              leftLabel: 'Structure',
              rightLabel: 'Property',
              pairs: [
                { left: 'Singly linked', right: 'One pointer per node' },
                { left: 'Doubly linked', right: 'Two pointers per node' },
                { left: 'Array', right: 'No pointers, contiguous' },
                { left: 'Circular', right: 'Tail points back to head' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Wire the prev pointer when inserting node n after p.',
              codeLines: [
                { html: 'n.next = p.next;' },
                { html: 'n.prev = p;' },
                { html: '<span class="kw">if</span> (p.next != null) p.next.<span class="num">_BLANK_</span> = n;' },
                { html: 'p.next = n;' }
              ],
              tokens: ['prev', 'next', 'value', 'head'],
              correctAnswer: 'prev',
              explanation: 'The node that was after p must now treat n as its prev.'
            }
          ]
        },
        {
          id: 'u7-l2',
          name: 'Circular lists',
          icon: '🔁',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The list loops back',
              content: `<p>In a <b>circular linked list</b>, the tail's <code>next</code> points back to the head — there is no null end.</p>
<div class="code-block"><span class="com">// head → [A] → [B] → [C] →┐</span>
<span class="com">//        ↑________________ ┘</span></div>
<p>Useful for:</p>
<ul>
<li>Round-robin scheduling (operating systems).</li>
<li>Circular buffers.</li>
<li>Game turn order.</li>
</ul>
<p>Be careful: traversal must use a stopping condition (e.g. "until you come back to head") — otherwise it's an infinite loop.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the tail.next in a circular linked list?',
              options: [
                { text: 'null', code: true },
                { text: 'head', code: true },
                { text: 'tail itself', code: true },
                { text: 'undefined', code: true }
              ],
              correct: 1,
              explanation: 'Tail loops back to head — that\'s what makes it circular.'
            },
            {
              type: 'true-false',
              statement: 'A naive while(node != null) loop terminates on a circular list.',
              correct: false,
              explanation: 'It will never reach null — it loops forever. Stop on node == head instead.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order steps to traverse a circular list exactly once.',
              lines: [
                '<span class="ty">Node</span> cur = head;',
                '<span class="kw">do</span> {',
                '  visit(cur);',
                '  cur = cur.next;',
                '} <span class="kw">while</span> (cur != head);'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'match-pairs',
              prompt: 'Match scenario with best list type.',
              leftLabel: 'Scenario',
              rightLabel: 'List type' ,
              pairs: [
                { left: 'Browser history (back/forward)', right: 'Doubly linked' },
                { left: 'Turn-taking game', right: 'Circular' },
                { left: 'Simple stack of items', right: 'Singly linked' },
                { left: 'Round-robin scheduling', right: 'Circular' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Make a single-node list circular.',
              tokens: ['head', '.', 'next', '=', 'head', ';', 'null', 'tail', '0'],
              correctOrder: ['head', '.', 'next', '=', 'head', ';'],
              explanation: 'One node pointing to itself is a valid 1-element circular list.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 8 — Stacks
    // ============================================================
    {
      id: 'u8-stacks',
      name: 'Unit 8 · Stacks',
      description: 'Last-In, First-Out: think stacks of plates.',
      lessons: [
        {
          id: 'u8-l1',
          name: 'LIFO basics',
          icon: '🥞',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a stack?',
              content: `<p>A <b>stack</b> follows <b>LIFO</b> — Last In, First Out. The last thing you pushed is the first thing you pop.</p>
<div class="code-block"><span class="ty">Stack</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">Stack</span>&lt;&gt;();
s.<span class="fn">push</span>(<span class="num">1</span>);
s.<span class="fn">push</span>(<span class="num">2</span>);
s.<span class="fn">push</span>(<span class="num">3</span>);
<span class="fn">println</span>(s.<span class="fn">pop</span>());   <span class="com">// 3</span>
<span class="fn">println</span>(s.<span class="fn">peek</span>());  <span class="com">// 2</span></div>
<p>Three core ops, all O(1):</p>
<ul>
<li><b>push(x)</b> — add x on top.</li>
<li><b>pop()</b> — remove and return the top.</li>
<li><b>peek()</b> — look at top without removing.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does LIFO stand for?',
              options: [
                { text: 'Linear In, Final Out', code: false },
                { text: 'Last In, First Out', code: false },
                { text: 'List In, File Out', code: false },
                { text: 'Last Index, First Operation', code: false }
              ],
              correct: 1,
              explanation: 'LIFO = Last In, First Out.'
            },
            {
              type: 'output-predict',
              prompt: 'Predict the final output.',
              code: `s.<span class="fn">push</span>(<span class="num">1</span>);
s.<span class="fn">push</span>(<span class="num">2</span>);
s.<span class="fn">push</span>(<span class="num">3</span>);
s.<span class="fn">pop</span>();
<span class="fn">println</span>(s.<span class="fn">peek</span>());`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: 'After pushing 1,2,3 and popping 3, the top is 2.'
            },
            {
              type: 'true-false',
              statement: 'A stack\'s push and pop are both O(1).',
              correct: true,
              explanation: 'Both operate only at the top — constant time.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the stack operation with its description.',
              leftLabel: 'Operation',
              rightLabel: 'Effect',
              pairs: [
                { left: 'push', right: 'Add to top' },
                { left: 'pop', right: 'Remove top and return' },
                { left: 'peek', right: 'Read top without removing' },
                { left: 'isEmpty', right: 'Check if empty' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Push 5 onto a Stack named s.',
              tokens: ['s', '.', 'push', '(', '5', ')', ';', 'pop', 'add'],
              correctOrder: ['s', '.', 'push', '(', '5', ')', ';'],
              explanation: 's.push(5) adds 5 on top.'
            }
          ]
        },
        {
          id: 'u8-l2',
          name: 'Where stacks shine',
          icon: '✨',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Applications of stacks',
              content: `<p>Stacks appear all over computing:</p>
<ul>
<li><b>Function calls</b> — the call stack tracks active functions.</li>
<li><b>Undo / Redo</b> — push every action; pop to undo.</li>
<li><b>Balanced parentheses</b> — push opens, match closes.</li>
<li><b>Expression evaluation</b> — postfix evaluator uses a stack.</li>
<li><b>Browser back button</b> — stack of pages.</li>
</ul>
<div class="code-block"><span class="com">// Balanced parens check</span>
<span class="kw">for</span> (<span class="ty">char</span> c : input.<span class="fn">toCharArray</span>()) {
  <span class="kw">if</span> (c == <span class="str">'('</span>) stack.<span class="fn">push</span>(c);
  <span class="kw">else if</span> (c == <span class="str">')'</span>) <span class="kw">if</span> (stack.<span class="fn">isEmpty</span>()) <span class="kw">return</span> <span class="kw">false</span>; <span class="kw">else</span> stack.<span class="fn">pop</span>();
}
<span class="kw">return</span> stack.<span class="fn">isEmpty</span>();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which problem is most naturally solved with a stack?',
              options: [
                { text: 'Finding shortest path in a maze', code: false },
                { text: 'Checking if parentheses are balanced', code: false },
                { text: 'Sorting numbers', code: false },
                { text: 'Hash-table lookup', code: false }
              ],
              correct: 1,
              explanation: 'Push opens, pop on closes — classic stack use.'
            },
            {
              type: 'true-false',
              statement: 'The call stack is a stack.',
              correct: true,
              explanation: 'Each function call pushes a frame; returning pops one.'
            },
            {
              type: 'output-predict',
              prompt: 'Is "(()" balanced?',
              code: `<span class="com">// (() has unmatched (</span>`,
              options: ['Yes', 'No', 'Maybe', 'Depends'],
              correct: 1,
              explanation: 'Two opens but only one close — stack ends non-empty.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order steps to check balanced parens.',
              lines: [
                '<span class="kw">for</span> (<span class="ty">char</span> c : s.<span class="fn">toCharArray</span>())',
                '  <span class="kw">if</span> (c == <span class="str">\'(\'</span>) stack.<span class="fn">push</span>(c);',
                '  <span class="kw">else if</span> (c == <span class="str">\')\'</span>) { <span class="kw">if</span> (stack.<span class="fn">isEmpty</span>()) <span class="kw">return</span> <span class="kw">false</span>; stack.<span class="fn">pop</span>(); }',
                '<span class="kw">return</span> stack.<span class="fn">isEmpty</span>();'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match the real-world feature with stack use.',
              leftLabel: 'Feature',
              rightLabel: 'Stack purpose',
              pairs: [
                { left: 'Browser back', right: 'Pop previous page' },
                { left: 'Text undo', right: 'Pop last edit' },
                { left: 'Calculator', right: 'Postfix evaluation' },
                { left: 'Recursion', right: 'Call stack' }
              ]
            }
          ]
        },
        {
          id: 'u8-l3',
          name: 'Array vs linked stack',
          icon: '🏗️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two ways to implement',
              content: `<p>A stack is an interface — many implementations:</p>
<ul>
<li><b>Array-backed</b> — push at end, pop from end. Resizes occasionally. Cache-friendly.</li>
<li><b>Linked-list-backed</b> — push at head, pop at head. No resizing. Extra memory per node.</li>
</ul>
<div class="code-block"><span class="com">// Linked-list push</span>
<span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(v);
n.next = top;
top = n;</div>
<p>Both give O(1) push/pop.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which implementation uses more memory per element?',
              options: [
                { text: 'Array-backed', code: false },
                { text: 'Linked-list-backed', code: false },
                { text: 'Both equal', code: false },
                { text: 'It depends on the value', code: false }
              ],
              correct: 1,
              explanation: 'Linked list adds a pointer per node — extra memory overhead.'
            },
            {
              type: 'true-false',
              statement: 'Array-backed stack push is amortized O(1).',
              correct: true,
              explanation: 'Like a dynamic array, occasional resize is amortized away.'
            },
            {
              type: 'fill-blank',
              prompt: 'Linked-list pop (return the top value).',
              codeLines: [
                { html: '<span class="ty">int</span> v = top.value;' },
                { html: 'top = top.<span class="num">_BLANK_</span>;' },
                { html: '<span class="kw">return</span> v;' }
              ],
              tokens: ['next', 'prev', 'value', 'head'],
              correctAnswer: 'next',
              explanation: 'Advance top to top.next — the old top is gone.'
            },
            {
              type: 'output-predict',
              prompt: 'Push 1, push 2, push 3, pop, pop. Top now is?',
              code: `s.<span class="fn">push</span>(<span class="num">1</span>); s.<span class="fn">push</span>(<span class="num">2</span>); s.<span class="fn">push</span>(<span class="num">3</span>); s.<span class="fn">pop</span>(); s.<span class="fn">pop</span>();`,
              options: ['null', '1', '2', '3'],
              correct: 1,
              explanation: 'Pushed 1,2,3 then popped 3 and 2. Top is 1.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the call to remove and return the top.',
              tokens: ['stack', '.', 'pop', '(', ')', ';', 'peek', 'push'],
              correctOrder: ['stack', '.', 'pop', '(', ')', ';'],
              explanation: 'stack.pop() removes and returns the top.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match implementation with characteristic.',
              leftLabel: 'Stack impl',
              rightLabel: 'Property',
              pairs: [
                { left: 'Array', right: 'Cache-friendly, occasional resize' },
                { left: 'Linked list', right: 'No resize, extra pointer memory' },
                { left: 'Both', right: 'O(1) push/pop' },
                { left: 'Neither', right: 'O(1) random index' }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 9 — Queues
    // ============================================================
    {
      id: 'u9-queues',
      name: 'Unit 9 · Queues',
      description: 'First-In, First-Out: like a line at the coffee shop.',
      lessons: [
        {
          id: 'u9-l1',
          name: 'FIFO basics',
          icon: '🚶‍♂️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a queue?',
              content: `<p>A <b>queue</b> follows <b>FIFO</b> — First In, First Out. Whoever joins first leaves first.</p>
<div class="code-block"><span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="num">1</span>);  <span class="com">// enqueue</span>
q.<span class="fn">offer</span>(<span class="num">2</span>);
q.<span class="fn">offer</span>(<span class="num">3</span>);
<span class="fn">println</span>(q.<span class="fn">poll</span>());  <span class="com">// 1 (dequeue)</span></div>
<p>Core ops:</p>
<ul>
<li><b>enqueue / offer / add</b> — push to back.</li>
<li><b>dequeue / poll / remove</b> — pop from front.</li>
<li><b>peek</b> — see front without removing.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'FIFO means:',
              options: [
                { text: 'First In, First Out', code: false },
                { text: 'Fast Input, Final Output', code: false },
                { text: 'First Index, Final Order', code: false },
                { text: 'Filtered In, First Out', code: false }
              ],
              correct: 0,
              explanation: 'FIFO = First In, First Out.'
            },
            {
              type: 'true-false',
              statement: 'The first element pushed into a queue is the first one popped.',
              correct: true,
              explanation: 'That\'s the very definition of FIFO.'
            },
            {
              type: 'output-predict',
              prompt: 'After enqueue 1,2,3 and dequeue, what is the front?',
              code: `q.<span class="fn">offer</span>(<span class="num">1</span>); q.<span class="fn">offer</span>(<span class="num">2</span>); q.<span class="fn">offer</span>(<span class="num">3</span>); q.<span class="fn">poll</span>();
<span class="fn">println</span>(q.<span class="fn">peek</span>());`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: 'After removing 1, front is 2.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match queue op with effect.',
              leftLabel: 'Operation',
              rightLabel: 'Effect',
              pairs: [
                { left: 'enqueue', right: 'Add to back' },
                { left: 'dequeue', right: 'Remove from front' },
                { left: 'peek', right: 'See front' },
                { left: 'isEmpty', right: 'Check empty' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Java: add element to a Queue interface.',
              codeLines: [
                { html: 'q.<span class="fn">_BLANK_</span>(<span class="num">42</span>);' }
              ],
              tokens: ['offer', 'pop', 'push', 'enqueue'],
              correctAnswer: 'offer',
              explanation: 'Queue.offer(x) adds to the back (similarly add()).'
            }
          ]
        },
        {
          id: 'u9-l2',
          name: 'Queue applications & circular',
          icon: '⏳',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Where queues show up',
              content: `<p>Queues power a lot of important algorithms:</p>
<ul>
<li><b>BFS (breadth-first search)</b> on trees and graphs.</li>
<li><b>Job scheduling</b> — print queue, OS task queue.</li>
<li><b>Buffering</b> — streaming, networking.</li>
<li><b>Producer–consumer</b> patterns.</li>
</ul>
<p>A <b>circular queue</b> reuses fixed array slots — when the back wraps past the end, it goes back to index 0.</p>
<div class="code-block"><span class="com">// Circular increment</span>
back = (back + <span class="num">1</span>) % capacity;</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which traversal uses a queue?',
              options: [
                { text: 'DFS', code: true },
                { text: 'BFS', code: true },
                { text: 'Inorder', code: true },
                { text: 'Binary search', code: true }
              ],
              correct: 1,
              explanation: 'BFS visits level by level using a queue.'
            },
            {
              type: 'true-false',
              statement: 'A circular queue overwrites the oldest element when full (depending on the implementation).',
              correct: true,
              explanation: 'A circular buffer commonly overwrites the oldest data when full.'
            },
            {
              type: 'fill-blank',
              prompt: 'Advance the back pointer of a circular queue.',
              codeLines: [
                { html: 'back = (back + <span class="num">1</span>) % <span class="num">_BLANK_</span>;' }
              ],
              tokens: ['capacity', '2', 'size', 'n'],
              correctAnswer: 'capacity',
              explanation: 'Modulo by total capacity to wrap around.'
            },
            {
              type: 'output-predict',
              prompt: 'capacity=4, back=3. After back=(back+1)%capacity?',
              code: `back = (<span class="num">3</span> + <span class="num">1</span>) % <span class="num">4</span>;`,
              options: ['0', '3', '4', '-1'],
              correct: 0,
              explanation: '(3+1)%4 = 4%4 = 0 — wraps to the front.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match scenario with queue use.',
              leftLabel: 'Scenario',
              rightLabel: 'Why queue',
              pairs: [
                { left: 'Print server', right: 'Job order matters' },
                { left: 'Graph BFS', right: 'Explore level by level' },
                { left: 'Streaming buffer', right: 'Smooth data flow' },
                { left: 'OS scheduler', right: 'Fair ordering' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Java: dequeue from Queue q.',
              tokens: ['q', '.', 'poll', '(', ')', ';', 'push', 'pop'],
              correctOrder: ['q', '.', 'poll', '(', ')', ';'],
              explanation: 'Queue.poll() removes and returns the head (front).'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 10 — Deques & Priority Queues
    // ============================================================
    {
      id: 'u10-deque-pq',
      name: 'Unit 10 · Deques & Priority Queues',
      description: 'Add/remove at both ends — or always pop the highest priority.',
      lessons: [
        {
          id: 'u10-l1',
          name: 'Deques: double-ended',
          icon: '↔️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a deque?',
              content: `<p>A <b>deque</b> (pronounced "deck") is a Double-Ended QUEue. You can push or pop from either end in O(1).</p>
<div class="code-block"><span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
d.<span class="fn">addFirst</span>(<span class="num">1</span>);
d.<span class="fn">addLast</span>(<span class="num">2</span>);
d.<span class="fn">pollFirst</span>();   <span class="com">// removes 1</span>
d.<span class="fn">pollLast</span>();    <span class="com">// removes 2</span></div>
<p>A deque can act as both a stack and a queue.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A deque allows insertion at:',
              options: [
                { text: 'Only the front', code: false },
                { text: 'Only the back', code: false },
                { text: 'Both ends', code: false },
                { text: 'Only the middle', code: false }
              ],
              correct: 2,
              explanation: 'Double-ended means both front and back.'
            },
            {
              type: 'true-false',
              statement: 'A deque can be used as a stack.',
              correct: true,
              explanation: 'Push and pop both at the same end — that\'s a stack.'
            },
            {
              type: 'output-predict',
              prompt: 'What is front of deque after these ops?',
              code: `d.<span class="fn">addLast</span>(<span class="num">1</span>);
d.<span class="fn">addFirst</span>(<span class="num">2</span>);
d.<span class="fn">addLast</span>(<span class="num">3</span>);
<span class="fn">println</span>(d.<span class="fn">peekFirst</span>());`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: 'After adding 1 last, 2 first, 3 last: [2, 1, 3] — front is 2.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match Java method to its action.',
              leftLabel: 'Method',
              rightLabel: 'Action',
              pairs: [
                { left: 'addFirst', right: 'Insert at front' },
                { left: 'addLast', right: 'Insert at back' },
                { left: 'pollFirst', right: 'Remove front' },
                { left: 'pollLast', right: 'Remove back' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Java deque type that\'s array-backed.',
              codeLines: [
                { html: '<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">_BLANK_</span>&lt;&gt;();' }
              ],
              tokens: ['ArrayDeque', 'LinkedList', 'Stack', 'PriorityQueue'],
              correctAnswer: 'ArrayDeque',
              explanation: 'ArrayDeque is the recommended array-backed deque in Java.'
            }
          ]
        },
        {
          id: 'u10-l2',
          name: 'Priority queues',
          icon: '👑',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Highest priority pops first',
              content: `<p>A <b>priority queue</b> is a queue where each element has a priority. <code>poll()</code> always removes the element with the highest priority (or lowest, in a min-heap).</p>
<div class="code-block"><span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
pq.<span class="fn">offer</span>(<span class="num">5</span>);
pq.<span class="fn">offer</span>(<span class="num">1</span>);
pq.<span class="fn">offer</span>(<span class="num">3</span>);
<span class="fn">println</span>(pq.<span class="fn">poll</span>());  <span class="com">// 1 (min-heap default)</span></div>
<p>Java's PriorityQueue is a min-heap by default. Both <code>offer</code> and <code>poll</code> are O(log n).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Java\'s PriorityQueue by default returns:',
              options: [
                { text: 'The largest element', code: true },
                { text: 'The smallest element', code: true },
                { text: 'The most recent', code: true },
                { text: 'A random element', code: true }
              ],
              correct: 1,
              explanation: 'It\'s a min-heap — smallest first.'
            },
            {
              type: 'true-false',
              statement: 'Priority queue offer and poll are O(log n).',
              correct: true,
              explanation: 'They use heap operations — heapify up/down — which are logarithmic.'
            },
            {
              type: 'output-predict',
              prompt: 'Min-heap: offer 4, 2, 7, 1. First poll?',
              code: `pq.<span class="fn">offer</span>(<span class="num">4</span>);
pq.<span class="fn">offer</span>(<span class="num">2</span>);
pq.<span class="fn">offer</span>(<span class="num">7</span>);
pq.<span class="fn">offer</span>(<span class="num">1</span>);
<span class="fn">println</span>(pq.<span class="fn">poll</span>());`,
              options: ['7', '4', '2', '1'],
              correct: 3,
              explanation: 'Min-heap: smallest comes first → 1.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match use case with priority queue.',
              leftLabel: 'Use case',
              rightLabel: 'PQ role',
              pairs: [
                { left: 'Dijkstra shortest path', right: 'Pop smallest distance' },
                { left: 'Top-K elements', right: 'Min-heap of size K' },
                { left: 'Task scheduling', right: 'Highest priority first' },
                { left: 'Huffman coding', right: 'Combine smallest two' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Make a max-heap with a reverse comparator.',
              codeLines: [
                { html: '<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.<span class="fn">_BLANK_</span>());' }
              ],
              tokens: ['reverseOrder', 'naturalOrder', 'comparing', 'sort'],
              correctAnswer: 'reverseOrder',
              explanation: 'Comparator.reverseOrder() flips it into a max-heap.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Java: peek at min in a PriorityQueue.',
              tokens: ['pq', '.', 'peek', '(', ')', ';', 'poll', 'top'],
              correctOrder: ['pq', '.', 'peek', '(', ')', ';'],
              explanation: 'PriorityQueue.peek() returns the head (min) without removing.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 11 — Hash Tables
    // ============================================================
    {
      id: 'u11-hash-tables',
      name: 'Unit 11 · Hash Tables',
      description: 'O(1) lookup magic with a clever indexing trick.',
      lessons: [
        {
          id: 'u11-l1',
          name: 'Hashing intuition',
          icon: '🔑',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'From key to bucket',
              content: `<p>A <b>hash table</b> maps a key to a position in an array using a <b>hash function</b>.</p>
<div class="code-block"><span class="com">// hash("apple") % 16 = 7  → bucket 7</span>
<span class="com">// hash("dog")   % 16 = 3  → bucket 3</span>

<span class="ty">HashMap</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; map = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
map.<span class="fn">put</span>(<span class="str">"apple"</span>, <span class="num">42</span>);
map.<span class="fn">get</span>(<span class="str">"apple"</span>);  <span class="com">// O(1) average</span></div>
<p>Properties:</p>
<ul>
<li><b>O(1) average</b> for put/get/contains.</li>
<li>Worst case is O(n) (everything collides).</li>
<li>Keys must be hashable.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A hash function converts a key into:',
              options: [
                { text: 'A floating-point average', code: false },
                { text: 'An array index (bucket)', code: false },
                { text: 'A string', code: false },
                { text: 'A graph node', code: false }
              ],
              correct: 1,
              explanation: 'It produces an integer index used to find the bucket.'
            },
            {
              type: 'true-false',
              statement: 'Hash table lookups are O(1) in the average case.',
              correct: true,
              explanation: 'Provided the hash function is good and the load factor is reasonable.'
            },
            {
              type: 'output-predict',
              prompt: 'What is map.get("a") after these ops?',
              code: `map.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
map.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);
map.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">3</span>);
<span class="fn">println</span>(map.<span class="fn">get</span>(<span class="str">"a"</span>));`,
              options: ['1', '2', '3', 'null'],
              correct: 2,
              explanation: 'The second put on "a" overwrote the first.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the hash-table term with its meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Hash function', right: 'Key → index' },
                { left: 'Bucket', right: 'An array slot' },
                { left: 'Collision', right: 'Two keys → same bucket' },
                { left: 'Load factor', right: 'Used / capacity' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Java: get the value mapped to key k.',
              codeLines: [
                { html: '<span class="ty">Integer</span> v = map.<span class="fn">_BLANK_</span>(k);' }
              ],
              tokens: ['get', 'fetch', 'find', 'lookup'],
              correctAnswer: 'get',
              explanation: 'HashMap.get(k) returns the value or null.'
            }
          ]
        },
        {
          id: 'u11-l2',
          name: 'Collisions',
          icon: '💥',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two keys, one bucket',
              content: `<p>A <b>collision</b> happens when two different keys hash to the same bucket. Two main strategies:</p>
<ul>
<li><b>Separate chaining</b> — each bucket holds a list of (key, value) pairs.</li>
<li><b>Open addressing</b> — on collision, probe nearby slots until an empty one is found.</li>
</ul>
<div class="code-block"><span class="com">// Chaining (Java HashMap)</span>
<span class="com">// bucket[7] = [(apple,1) → (orange,5)]</span>

<span class="com">// Open addressing (linear probing)</span>
<span class="com">// occupied? try i+1, i+2, ... until empty</span></div>
<p>When the table gets too full (high load factor), it <b>rehashes</b> into a bigger table.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Two keys hashing to the same bucket is called:',
              options: [
                { text: 'A miss', code: true },
                { text: 'A collision', code: true },
                { text: 'A rehash', code: true },
                { text: 'A probe', code: true }
              ],
              correct: 1,
              explanation: 'That\'s the definition of a hash collision.'
            },
            {
              type: 'true-false',
              statement: 'Open addressing stores multiple keys in the same slot using a linked list.',
              correct: false,
              explanation: 'That\'s chaining. Open addressing keeps one entry per slot and probes elsewhere on collision.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match strategy with description.',
              leftLabel: 'Strategy',
              rightLabel: 'Description',
              pairs: [
                { left: 'Chaining', right: 'List of entries per bucket' },
                { left: 'Linear probing', right: 'Try i+1, i+2, ...' },
                { left: 'Quadratic probing', right: 'Try i+1², i+2², ...' },
                { left: 'Double hashing', right: 'Use a second hash for stride' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Worst-case lookup in a hash table if everything collides?',
              code: `<span class="com">// All n keys land in one bucket</span>`,
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
              correct: 2,
              explanation: 'You walk the whole chain — O(n).'
            },
            {
              type: 'fill-blank',
              prompt: 'Load factor formula.',
              codeLines: [
                { html: '<span class="com">// load_factor = entries / _BLANK_</span>' }
              ],
              tokens: ['capacity', 'collisions', 'size', 'n'],
              correctAnswer: 'capacity',
              explanation: 'Load factor is entries divided by total bucket capacity.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Java: insert key "x" with value 7.',
              tokens: ['map', '.', 'put', '(', '"x"', ',', '7', ')', ';', 'get', 'add'],
              correctOrder: ['map', '.', 'put', '(', '"x"', ',', '7', ')', ';'],
              explanation: 'HashMap.put(key, value).'
            }
          ]
        },
        {
          id: 'u11-l3',
          name: 'When to use hash tables',
          icon: '💡',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Hash table superpowers',
              content: `<p>Reach for a hash table when you need <b>fast lookup by key</b>:</p>
<ul>
<li><b>Counting frequencies</b> — letter counts, word counts.</li>
<li><b>Deduplication</b> — seen set.</li>
<li><b>Caching</b> — memoization.</li>
<li><b>Lookup tables</b> — symbol tables in compilers.</li>
</ul>
<div class="code-block"><span class="com">// Count letters</span>
<span class="ty">Map</span>&lt;<span class="ty">Character</span>, <span class="ty">Integer</span>&gt; counts = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">char</span> c : s.<span class="fn">toCharArray</span>())
  counts.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You want to check if a number appeared in a list. Best DS?',
              options: [
                { text: 'Array — scan it', code: false },
                { text: 'HashSet — O(1) contains', code: false },
                { text: 'Tree — O(log n)', code: false },
                { text: 'Linked list', code: false }
              ],
              correct: 1,
              explanation: 'HashSet gives average O(1) contains — perfect for membership.'
            },
            {
              type: 'true-false',
              statement: 'A hash table preserves insertion order.',
              correct: false,
              explanation: 'A plain HashMap does not. Use LinkedHashMap if you need order.'
            },
            {
              type: 'output-predict',
              prompt: 'Frequency count of "abca":',
              code: `<span class="kw">for</span> (<span class="ty">char</span> c : <span class="str">"abca"</span>.<span class="fn">toCharArray</span>())
  counts.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);
<span class="fn">println</span>(counts.<span class="fn">get</span>(<span class="str">'a'</span>));`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: '"abca" has 2 a\'s.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem with hash-table use.',
              leftLabel: 'Problem',
              rightLabel: 'Hash table role',
              pairs: [
                { left: 'Two-Sum', right: 'Lookup complement' },
                { left: 'Word count', right: 'Frequency map' },
                { left: 'Caching', right: 'Memoize results' },
                { left: 'Anagram check', right: 'Letter histogram' }
              ]
            },
            {
              type: 'reorder-code',
              prompt: 'Order the Two-Sum lookup using a hash map.',
              lines: [
                '<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();',
                '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; nums.length; i++) {',
                '  <span class="ty">int</span> need = target - nums[i];',
                '  <span class="kw">if</span> (seen.<span class="fn">containsKey</span>(need)) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">int</span>[]{ seen.<span class="fn">get</span>(need), i };',
                '  seen.<span class="fn">put</span>(nums[i], i);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 12 — Sets
    // ============================================================
    {
      id: 'u12-sets',
      name: 'Unit 12 · Sets',
      description: 'Collections of unique elements.',
      lessons: [
        {
          id: 'u12-l1',
          name: 'What is a set?',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Unique elements only',
              content: `<p>A <b>set</b> stores unique elements. No duplicates allowed. Order is usually not guaranteed.</p>
<div class="code-block"><span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="num">1</span>);
s.<span class="fn">add</span>(<span class="num">2</span>);
s.<span class="fn">add</span>(<span class="num">1</span>);  <span class="com">// ignored: duplicate</span>
<span class="fn">println</span>(s.<span class="fn">size</span>());  <span class="com">// 2</span></div>
<p>Common ops (all O(1) avg for HashSet):</p>
<ul>
<li><b>add(x)</b>, <b>remove(x)</b>, <b>contains(x)</b>.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is s.size() after adding 1, 2, 2, 3 to a set?',
              options: [
                { text: '1', code: true },
                { text: '2', code: true },
                { text: '3', code: true },
                { text: '4', code: true }
              ],
              correct: 2,
              explanation: 'Sets store uniques only → {1, 2, 3} size = 3.'
            },
            {
              type: 'true-false',
              statement: 'HashSet contains(x) is O(1) on average.',
              correct: true,
              explanation: 'Same as HashMap.get — backed by a hash table.'
            },
            {
              type: 'output-predict',
              prompt: 'Final set?',
              code: `s.<span class="fn">add</span>(<span class="num">5</span>);
s.<span class="fn">add</span>(<span class="num">5</span>);
s.<span class="fn">remove</span>(<span class="num">5</span>);
<span class="fn">println</span>(s.<span class="fn">contains</span>(<span class="num">5</span>));`,
              options: ['true', 'false', '1', '0'],
              correct: 1,
              explanation: 'Added 5 twice (counts once), then removed it → set empty.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation with set semantics.',
              leftLabel: 'Op',
              rightLabel: 'Effect',
              pairs: [
                { left: 'add', right: 'Insert if not present' },
                { left: 'remove', right: 'Remove if present' },
                { left: 'contains', right: 'Membership check' },
                { left: 'size', right: 'Number of unique items' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Java: declare a HashSet of strings.',
              tokens: ['Set', '<', 'String', '>', 's', '=', 'new', 'HashSet', '<', '>', '(', ')', ';', 'List'],
              correctOrder: ['Set', '<', 'String', '>', 's', '=', 'new', 'HashSet', '<', '>', '(', ')', ';'],
              explanation: 'Set<String> s = new HashSet<>();'
            }
          ]
        },
        {
          id: 'u12-l2',
          name: 'Set operations & flavors',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Union, intersect, diff',
              content: `<p>Sets support mathematical operations:</p>
<ul>
<li><b>Union</b> — all elements in A or B.</li>
<li><b>Intersection</b> — elements in both A and B.</li>
<li><b>Difference</b> — elements in A but not in B.</li>
</ul>
<div class="code-block"><span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; u = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
u.<span class="fn">addAll</span>(b);                <span class="com">// union</span>

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; i = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
i.<span class="fn">retainAll</span>(b);              <span class="com">// intersection</span>

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
d.<span class="fn">removeAll</span>(b);              <span class="com">// difference</span></div>
<p>Two flavors in Java:</p>
<ul>
<li><b>HashSet</b> — O(1) avg, no ordering.</li>
<li><b>TreeSet</b> — O(log n), sorted order.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: '{1,2,3} ∩ {2,3,4} = ?',
              options: [
                { text: '{1,2,3,4}', code: true },
                { text: '{2,3}', code: true },
                { text: '{1,4}', code: true },
                { text: '{}', code: true }
              ],
              correct: 1,
              explanation: 'Intersection keeps only elements in both: {2, 3}.'
            },
            {
              type: 'true-false',
              statement: 'TreeSet keeps elements sorted.',
              correct: true,
              explanation: 'TreeSet is backed by a red-black tree and maintains sorted order.'
            },
            {
              type: 'output-predict',
              prompt: 'A = {1,2,3}, B = {2,3,4}. A.removeAll(B) leaves A = ?',
              code: `a.<span class="fn">removeAll</span>(b);`,
              options: ['{1}', '{2,3}', '{4}', '{}'],
              correct: 0,
              explanation: 'Remove everything that\'s in B → {1}.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match Java method to set operation.',
              leftLabel: 'Method',
              rightLabel: 'Operation',
              pairs: [
                { left: 'addAll', right: 'Union' },
                { left: 'retainAll', right: 'Intersection' },
                { left: 'removeAll', right: 'Difference' },
                { left: 'containsAll', right: 'Subset check' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Make a sorted set in Java.',
              codeLines: [
                { html: '<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">_BLANK_</span>&lt;&gt;();' }
              ],
              tokens: ['TreeSet', 'HashSet', 'LinkedHashSet', 'ArrayList'],
              correctAnswer: 'TreeSet',
              explanation: 'TreeSet maintains natural ordering.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 13 — Trees — Terminology
    // ============================================================
    {
      id: 'u13-tree-terms',
      name: 'Unit 13 · Trees — Terminology',
      description: 'Hierarchical data: parents, children, leaves.',
      lessons: [
        {
          id: 'u13-l1',
          name: 'Parts of a tree',
          icon: '🌳',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The tree vocabulary',
              content: `<p>A <b>tree</b> is a connected, acyclic structure of nodes.</p>
<ul>
<li><b>Root</b> — the top node (no parent).</li>
<li><b>Parent / Child</b> — a node and its direct descendants.</li>
<li><b>Leaf</b> — a node with no children.</li>
<li><b>Depth</b> — distance from root (root has depth 0).</li>
<li><b>Height</b> — longest path from a node to a leaf.</li>
</ul>
<div class="code-block"><span class="com">//        (root)</span>
<span class="com">//       /      \\</span>
<span class="com">//     A          B</span>
<span class="com">//    / \\        / \\</span>
<span class="com">//   C   D      E   F   ← leaves</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A node with no children is called:',
              options: [
                { text: 'A root', code: false },
                { text: 'A leaf', code: false },
                { text: 'An edge', code: false },
                { text: 'A sibling', code: false }
              ],
              correct: 1,
              explanation: 'Leaves are at the bottom — no children.'
            },
            {
              type: 'true-false',
              statement: 'A tree can have cycles.',
              correct: false,
              explanation: 'No — a tree is by definition acyclic. Cycles make it a graph, not a tree.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match tree term to meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Root', right: 'Top node' },
                { left: 'Leaf', right: 'No children' },
                { left: 'Depth', right: 'Distance from root' },
                { left: 'Height', right: 'Longest down-path' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Tree of 3 levels (root, 2, 4 children). Depth of leaf?',
              code: `<span class="com">//   root → child → leaf</span>`,
              options: ['0', '1', '2', '3'],
              correct: 2,
              explanation: 'Root depth = 0, child = 1, leaf = 2.'
            },
            {
              type: 'fill-blank',
              prompt: 'Define a tree node.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">TreeNode</span> {' },
                { html: '  <span class="ty">int</span> val;' },
                { html: '  <span class="ty">List</span>&lt;<span class="ty">TreeNode</span>&gt; <span class="num">_BLANK_</span>;' },
                { html: '}' }
              ],
              tokens: ['children', 'next', 'parent', 'siblings'],
              correctAnswer: 'children',
              explanation: 'A generic tree node holds a list of its children.'
            }
          ]
        },
        {
          id: 'u13-l2',
          name: 'Binary tree variants',
          icon: '🌲',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Binary, full, complete, perfect',
              content: `<p>A <b>binary tree</b> has at most 2 children per node — usually called <code>left</code> and <code>right</code>.</p>
<ul>
<li><b>Full</b> — every node has 0 or 2 children.</li>
<li><b>Complete</b> — all levels filled left-to-right, last level may be partial.</li>
<li><b>Perfect</b> — full AND all leaves at the same depth.</li>
<li><b>Degenerate</b> — each node has only one child (basically a list).</li>
</ul>
<div class="code-block"><span class="kw">class</span> <span class="ty">TreeNode</span> {
  <span class="ty">int</span> val;
  <span class="ty">TreeNode</span> left, right;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Every node has 0 or 2 children:',
              options: [
                { text: 'Perfect tree', code: true },
                { text: 'Complete tree', code: true },
                { text: 'Full tree', code: true },
                { text: 'Degenerate tree', code: true }
              ],
              correct: 2,
              explanation: 'That\'s the definition of a full binary tree.'
            },
            {
              type: 'true-false',
              statement: 'A perfect binary tree is always also complete.',
              correct: true,
              explanation: 'Perfect = all internal nodes have 2 children and all leaves at same level → also complete.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the shape with the name.',
              leftLabel: 'Shape',
              rightLabel: 'Name',
              pairs: [
                { left: 'Every node has 0 or 2 children', right: 'Full' },
                { left: 'Last level fills left-to-right', right: 'Complete' },
                { left: 'All leaves at same depth', right: 'Perfect' },
                { left: 'Looks like a list', right: 'Degenerate' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'A perfect binary tree of height h has how many leaves?',
              code: `<span class="com">// h = 0: 1 leaf</span>
<span class="com">// h = 1: 2 leaves</span>
<span class="com">// h = 2: 4 leaves</span>`,
              options: ['h', 'h+1', '2^h', '2^(h+1)'],
              correct: 2,
              explanation: 'A perfect tree doubles leaves each level → 2^h leaves at height h.'
            },
            {
              type: 'fill-blank',
              prompt: 'Define a binary node.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">TreeNode</span> {' },
                { html: '  <span class="ty">int</span> val;' },
                { html: '  <span class="ty">TreeNode</span> left, <span class="num">_BLANK_</span>;' },
                { html: '}' }
              ],
              tokens: ['right', 'next', 'parent', 'sibling'],
              correctAnswer: 'right',
              explanation: 'A binary node has left and right children.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Create a leaf node holding value 7.',
              tokens: ['new', 'TreeNode', '(', '7', ')', ';', '0', 'null'],
              correctOrder: ['new', 'TreeNode', '(', '7', ')', ';'],
              explanation: 'new TreeNode(7) — left and right default to null.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 14 — Tree Traversals
    // ============================================================
    {
      id: 'u14-traversals',
      name: 'Unit 14 · Tree Traversals',
      description: 'Different ways to visit every node.',
      lessons: [
        {
          id: 'u14-l1',
          name: 'Preorder, inorder, postorder',
          icon: '🚶',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Depth-first traversals',
              content: `<p>Three classic DFS orderings on a binary tree:</p>
<ul>
<li><b>Preorder</b> — Node, Left, Right.</li>
<li><b>Inorder</b> — Left, Node, Right. (Sorted for BST.)</li>
<li><b>Postorder</b> — Left, Right, Node.</li>
</ul>
<div class="code-block"><span class="kw">void</span> <span class="fn">inorder</span>(<span class="ty">TreeNode</span> n) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="fn">inorder</span>(n.left);
  <span class="fn">visit</span>(n);
  <span class="fn">inorder</span>(n.right);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Inorder traversal of a BST visits values in:',
              options: [
                { text: 'Random order', code: true },
                { text: 'Reverse order', code: true },
                { text: 'Sorted ascending order', code: true },
                { text: 'Insertion order', code: true }
              ],
              correct: 2,
              explanation: 'Inorder + BST = sorted ascending — a key property.'
            },
            {
              type: 'true-false',
              statement: 'Preorder traversal visits the root first.',
              correct: true,
              explanation: 'Preorder = Node, Left, Right — the node is first.'
            },
            {
              type: 'output-predict',
              prompt: 'Tree:    1 → (2, 3). Preorder?',
              code: `<span class="com">//     1</span>
<span class="com">//    / \\</span>
<span class="com">//   2   3</span>`,
              options: ['1 2 3', '2 1 3', '2 3 1', '3 2 1'],
              correct: 0,
              explanation: 'Preorder: Node(1), Left(2), Right(3) → 1 2 3.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order lines for inorder traversal.',
              lines: [
                '<span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;',
                '<span class="fn">inorder</span>(n.left);',
                '<span class="fn">visit</span>(n);',
                '<span class="fn">inorder</span>(n.right);'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match traversal to order.',
              leftLabel: 'Traversal',
              rightLabel: 'Order',
              pairs: [
                { left: 'Preorder', right: 'Node, L, R' },
                { left: 'Inorder', right: 'L, Node, R' },
                { left: 'Postorder', right: 'L, R, Node' },
                { left: 'Level-order', right: 'BFS by depth' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Postorder calls visit at which position?',
              codeLines: [
                { html: '<span class="fn">postorder</span>(n.left);' },
                { html: '<span class="fn">postorder</span>(n.right);' },
                { html: '<span class="fn">_BLANK_</span>(n);' }
              ],
              tokens: ['visit', 'inorder', 'preorder', 'postorder'],
              correctAnswer: 'visit',
              explanation: 'Postorder: process children first, then visit the node.'
            }
          ]
        },
        {
          id: 'u14-l2',
          name: 'Level-order (BFS)',
          icon: '🌊',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Visit level by level',
              content: `<p><b>Level-order traversal</b> visits nodes top-to-bottom, left-to-right. Use a queue:</p>
<div class="code-block"><span class="ty">Queue</span>&lt;<span class="ty">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
q.<span class="fn">offer</span>(root);
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
  <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();
  <span class="fn">visit</span>(n);
  <span class="kw">if</span> (n.left  != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);
  <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.right);
}</div>
<p>This is BFS on a tree. Time O(n), space O(width).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which data structure powers level-order traversal?',
              options: [
                { text: 'Stack', code: false },
                { text: 'Queue', code: false },
                { text: 'Hash set', code: false },
                { text: 'Priority queue', code: false }
              ],
              correct: 1,
              explanation: 'BFS uses a queue to process nodes in FIFO order.'
            },
            {
              type: 'true-false',
              statement: 'Level-order is the same as breadth-first search on a tree.',
              correct: true,
              explanation: 'BFS on a tree, starting at the root.'
            },
            {
              type: 'output-predict',
              prompt: 'Tree:       1 → (2, 3) → (4,5),(6,7). Level-order?',
              code: `<span class="com">//        1</span>
<span class="com">//      /   \\</span>
<span class="com">//     2     3</span>
<span class="com">//    / \\   / \\</span>
<span class="com">//   4   5 6   7</span>`,
              options: ['1 2 3 4 5 6 7', '4 5 2 6 7 3 1', '1 2 4 5 3 6 7', '1 4 5 2 6 7 3'],
              correct: 0,
              explanation: 'Level-by-level, left-to-right: 1, then 2 3, then 4 5 6 7.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the level-order loop.',
              lines: [
                'q.<span class="fn">offer</span>(root);',
                '<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {',
                '  <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();',
                '  <span class="fn">visit</span>(n);',
                '  <span class="kw">if</span> (n.left != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);',
                '  <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.right);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6]
            },
            {
              type: 'match-pairs',
              prompt: 'Match traversal type with helper structure.',
              leftLabel: 'Traversal',
              rightLabel: 'Helper',
              pairs: [
                { left: 'Preorder iterative', right: 'Stack' },
                { left: 'Inorder iterative', right: 'Stack' },
                { left: 'Postorder iterative', right: 'Stack(s)' },
                { left: 'Level-order', right: 'Queue' }
              ]
            }
          ]
        },
        {
          id: 'u14-l3',
          name: 'Recursive vs iterative',
          icon: '🔄',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two ways to write traversal',
              content: `<p>Every recursive DFS can be rewritten iteratively using an explicit stack.</p>
<div class="code-block"><span class="com">// Iterative preorder</span>
<span class="ty">Deque</span>&lt;<span class="ty">TreeNode</span>&gt; st = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
st.<span class="fn">push</span>(root);
<span class="kw">while</span> (!st.<span class="fn">isEmpty</span>()) {
  <span class="ty">TreeNode</span> n = st.<span class="fn">pop</span>();
  <span class="fn">visit</span>(n);
  <span class="kw">if</span> (n.right != <span class="kw">null</span>) st.<span class="fn">push</span>(n.right);
  <span class="kw">if</span> (n.left  != <span class="kw">null</span>) st.<span class="fn">push</span>(n.left);
}</div>
<p>Recursive is concise; iterative avoids stack overflow on very deep trees.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Recursive traversal might fail on very deep trees because of:',
              options: [
                { text: 'Heap overflow', code: false },
                { text: 'Stack overflow', code: false },
                { text: 'Out-of-memory queue', code: false },
                { text: 'Hash collision', code: false }
              ],
              correct: 1,
              explanation: 'Each recursive call consumes a frame on the call stack.'
            },
            {
              type: 'true-false',
              statement: 'You can convert any recursive traversal to iterative using a stack.',
              correct: true,
              explanation: 'Yes — by explicitly simulating the call stack.'
            },
            {
              type: 'output-predict',
              prompt: 'For iterative preorder, in what order do we push children?',
              code: `<span class="com">// We want left visited before right</span>`,
              options: ['left first, then right', 'right first, then left', 'doesn\'t matter', 'both at once'],
              correct: 1,
              explanation: 'Stack is LIFO — push right first so left pops next.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order iterative preorder using a stack.',
              lines: [
                'st.<span class="fn">push</span>(root);',
                '<span class="kw">while</span> (!st.<span class="fn">isEmpty</span>()) {',
                '  <span class="ty">TreeNode</span> n = st.<span class="fn">pop</span>();',
                '  <span class="fn">visit</span>(n);',
                '  <span class="kw">if</span> (n.right != <span class="kw">null</span>) st.<span class="fn">push</span>(n.right);',
                '  <span class="kw">if</span> (n.left  != <span class="kw">null</span>) st.<span class="fn">push</span>(n.left);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6]
            },
            {
              type: 'fill-blank',
              prompt: 'Recursive postorder: visit happens last.',
              codeLines: [
                { html: '<span class="fn">postorder</span>(n.left);' },
                { html: '<span class="fn">postorder</span>(n.right);' },
                { html: '<span class="fn">visit</span>(n);  <span class="com">// _BLANK_</span>' }
              ],
              tokens: ['last', 'first', 'middle', 'never'],
              correctAnswer: 'last',
              explanation: 'Postorder visits a node after its children.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match traversal flavor with strength.',
              leftLabel: 'Flavor',
              rightLabel: 'Strength',
              pairs: [
                { left: 'Recursive', right: 'Concise code' },
                { left: 'Iterative', right: 'Handles deep trees' },
                { left: 'Morris', right: 'O(1) space' },
                { left: 'BFS', right: 'Level-by-level' }
              ]
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 15 — Binary Search Trees
    // ============================================================
    {
      id: 'u15-bst',
      name: 'Unit 15 · Binary Search Trees',
      description: 'Ordered trees that support fast search, insert and delete.',
      lessons: [
        {
          id: 'u15-l1',
          name: 'The BST property',
          icon: '🔍',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Left smaller, right larger',
              content: `<p>A <b>binary search tree</b> obeys this rule at every node:</p>
<ul>
<li>All values in the <b>left subtree</b> are <b>smaller</b> than the node.</li>
<li>All values in the <b>right subtree</b> are <b>larger</b> than the node.</li>
</ul>
<div class="code-block"><span class="com">//       8</span>
<span class="com">//      / \\</span>
<span class="com">//     3   10</span>
<span class="com">//    / \\    \\</span>
<span class="com">//   1   6    14</span></div>
<p>This ordering lets us search in O(log n) when balanced.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In a BST, where do values smaller than the root go?',
              options: [
                { text: 'Right subtree', code: false },
                { text: 'Left subtree', code: false },
                { text: 'Anywhere', code: false },
                { text: 'Become new root', code: false }
              ],
              correct: 1,
              explanation: 'Smaller → left, larger → right. That\'s the BST property.'
            },
            {
              type: 'true-false',
              statement: 'An inorder traversal of a BST yields a sorted list.',
              correct: true,
              explanation: 'Left → Node → Right naturally produces ascending order.'
            },
            {
              type: 'output-predict',
              prompt: 'BST insert 5, 3, 8, 1. What is root.left.left?',
              code: `<span class="com">// 5 → 3 (left), 8 (right), 1 (left of 3)</span>`,
              options: ['null', '1', '3', '8'],
              correct: 1,
              explanation: 'root=5, root.left=3, root.left.left=1.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match BST op with average-case time.',
              leftLabel: 'Op',
              rightLabel: 'Avg time',
              pairs: [
                { left: 'Search', right: 'O(log n)' },
                { left: 'Insert', right: 'O(log n)' },
                { left: 'Delete', right: 'O(log n)' },
                { left: 'Inorder traversal', right: 'O(n)' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Recursive BST search.',
              codeLines: [
                { html: '<span class="kw">if</span> (n == <span class="kw">null</span> || n.val == key) <span class="kw">return</span> n;' },
                { html: '<span class="kw">if</span> (key &lt; n.val) <span class="kw">return</span> <span class="fn">search</span>(n.<span class="num">_BLANK_</span>, key);' },
                { html: '<span class="kw">return</span> <span class="fn">search</span>(n.right, key);' }
              ],
              tokens: ['left', 'right', 'parent', 'val'],
              correctAnswer: 'left',
              explanation: 'If the key is smaller, descend into the left subtree.'
            }
          ]
        },
        {
          id: 'u15-l2',
          name: 'Insert & delete',
          icon: '🛠️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Adding & removing nodes',
              content: `<p><b>Insert</b>: walk left/right until you hit null, then attach a new node.</p>
<p><b>Delete</b> is trickier — three cases:</p>
<ol>
<li><b>Leaf</b>: just remove.</li>
<li><b>One child</b>: replace node with its child.</li>
<li><b>Two children</b>: replace value with the <i>inorder successor</i> (smallest in the right subtree), then delete that successor.</li>
</ol>
<div class="code-block"><span class="ty">TreeNode</span> <span class="fn">insert</span>(<span class="ty">TreeNode</span> n, <span class="ty">int</span> key) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">TreeNode</span>(key);
  <span class="kw">if</span> (key &lt; n.val) n.left  = <span class="fn">insert</span>(n.left, key);
  <span class="kw">else if</span> (key &gt; n.val) n.right = <span class="fn">insert</span>(n.right, key);
  <span class="kw">return</span> n;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Deleting a node with two children — replace with:',
              options: [
                { text: 'Its parent', code: false },
                { text: 'Inorder successor or predecessor', code: false },
                { text: 'Its largest grandchild', code: false },
                { text: 'A random child', code: false }
              ],
              correct: 1,
              explanation: 'Use the inorder successor (smallest in right subtree) or predecessor (largest in left).'
            },
            {
              type: 'true-false',
              statement: 'A BST can become degenerate (basically a linked list) with bad insert order.',
              correct: true,
              explanation: 'Inserting sorted data into an unbalanced BST creates a slanted list with O(n) operations.'
            },
            {
              type: 'output-predict',
              prompt: 'Insert order: 10, 5, 15, 3. What is root.left.left.val?',
              code: `<span class="com">// build BST step by step</span>`,
              options: ['3', '5', '10', '15'],
              correct: 0,
              explanation: 'root=10, left=5, 5.left=3.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order recursive BST insert.',
              lines: [
                '<span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">TreeNode</span>(key);',
                '<span class="kw">if</span> (key &lt; n.val) n.left = <span class="fn">insert</span>(n.left, key);',
                '<span class="kw">else if</span> (key &gt; n.val) n.right = <span class="fn">insert</span>(n.right, key);',
                '<span class="kw">return</span> n;'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match delete case with strategy.',
              leftLabel: 'Case',
              rightLabel: 'Strategy',
              pairs: [
                { left: 'Leaf', right: 'Remove directly' },
                { left: 'One child', right: 'Splice in the child' },
                { left: 'Two children', right: 'Replace with successor' },
                { left: 'Not found', right: 'Do nothing' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Find the minimum in a BST.',
              codeLines: [
                { html: '<span class="kw">while</span> (n.<span class="num">_BLANK_</span> != <span class="kw">null</span>) n = n.left;' },
                { html: '<span class="kw">return</span> n;' }
              ],
              tokens: ['left', 'right', 'val', 'parent'],
              correctAnswer: 'left',
              explanation: 'Keep going left — that\'s where the smallest values live.'
            }
          ]
        },
        {
          id: 'u15-l3',
          name: 'Balanced vs degenerate',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Shape matters',
              content: `<p>A BST's performance depends on its <b>shape</b>:</p>
<ul>
<li><b>Balanced</b> — height O(log n) → all ops O(log n).</li>
<li><b>Degenerate</b> — height ≈ n → ops degrade to O(n).</li>
</ul>
<p>Inserting <code>1, 2, 3, 4, 5</code> in order creates a right-slanted degenerate tree.</p>
<div class="code-block"><span class="com">// degenerate</span>
<span class="com">// 1 → 2 → 3 → 4 → 5</span>

<span class="com">// balanced</span>
<span class="com">//       3</span>
<span class="com">//      / \\</span>
<span class="com">//     1   4</span>
<span class="com">//      \\   \\</span>
<span class="com">//       2   5</span></div>
<p>Self-balancing trees like AVL and red-black fix this automatically.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What\'s the worst-case BST search complexity?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n²)', code: true }
              ],
              correct: 2,
              explanation: 'For a degenerate BST it\'s O(n) — like searching a list.'
            },
            {
              type: 'true-false',
              statement: 'A self-balancing BST guarantees O(log n) operations.',
              correct: true,
              explanation: 'That\'s the whole point — keep height O(log n).'
            },
            {
              type: 'output-predict',
              prompt: 'Insert 1,2,3,4,5 into an empty BST. Resulting height?',
              code: `<span class="com">// strictly right children</span>`,
              options: ['1', '3', '5', '4'],
              correct: 3,
              explanation: '5 nodes in a degenerate chain → height = 4 (depth of last node).'
            },
            {
              type: 'fill-blank',
              prompt: 'Best-case BST search complexity.',
              codeLines: [
                { html: '<span class="com">// balanced tree, n nodes</span>' },
                { html: '<span class="com">// search ~ O(_BLANK_)</span>' }
              ],
              tokens: ['log n', 'n', '1', 'n²'],
              correctAnswer: 'log n',
              explanation: 'Balanced BST → height log n → search O(log n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match tree shape with op cost.',
              leftLabel: 'Shape',
              rightLabel: 'Search cost',
              pairs: [
                { left: 'Balanced', right: 'O(log n)' },
                { left: 'Degenerate', right: 'O(n)' },
                { left: 'Perfect', right: 'O(log n)' },
                { left: 'Single node', right: 'O(1)' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap tokens that describe a degenerate BST.',
              tokens: ['like', 'a', 'linked', 'list', 'random', 'balanced', 'fast', 'tall'],
              correctOrder: ['like', 'a', 'linked', 'list'],
              explanation: 'A degenerate BST is essentially a linked list.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 16 — Balanced Trees
    // ============================================================
    {
      id: 'u16-balanced-trees',
      name: 'Unit 16 · Balanced Trees',
      description: 'How AVL & red-black trees stay short and snappy.',
      lessons: [
        {
          id: 'u16-l1',
          name: 'Why balance matters',
          icon: '🧘',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The height fight',
              content: `<p>A BST with n nodes has best height log₂(n). If insertions skew the tree, height grows up to n, ruining performance.</p>
<p><b>Self-balancing trees</b> rebalance after each insertion or deletion to keep height O(log n).</p>
<p>Two famous variants:</p>
<ul>
<li><b>AVL tree</b> — strict balance, fast lookups, slightly slower writes.</li>
<li><b>Red-black tree</b> — looser balance, faster writes; used by Java's <code>TreeMap</code>.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A self-balancing BST guarantees height of:',
              options: [
                { text: 'O(n)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(1)', code: true },
                { text: 'O(√n)', code: true }
              ],
              correct: 1,
              explanation: 'Logarithmic height keeps ops O(log n).'
            },
            {
              type: 'true-false',
              statement: 'Java\'s TreeMap is backed by a red-black tree.',
              correct: true,
              explanation: 'TreeMap and TreeSet both use red-black trees internally.'
            },
            {
              type: 'output-predict',
              prompt: 'Self-balanced tree of 1024 nodes. Approximate height?',
              code: `<span class="com">// log2(1024) ≈ ?</span>`,
              options: ['1', '10', '100', '1024'],
              correct: 1,
              explanation: 'log₂(1024) = 10.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match tree to property.',
              leftLabel: 'Tree',
              rightLabel: 'Property',
              pairs: [
                { left: 'AVL', right: 'Strict balance, fast read' },
                { left: 'Red-black', right: 'Looser balance, fast write' },
                { left: 'BST (unbalanced)', right: 'Can degenerate' },
                { left: 'B-tree', right: 'Multi-way, disk-friendly' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'A self-balancing BST keeps op time at O(_).',
              codeLines: [
                { html: '<span class="com">// search/insert/delete = O(_BLANK_)</span>' }
              ],
              tokens: ['log n', 'n', '1', 'n log n'],
              correctAnswer: 'log n',
              explanation: 'That\'s the whole reason to use them.'
            }
          ]
        },
        {
          id: 'u16-l2',
          name: 'Rotations',
          icon: '🔄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Rotating the tree',
              content: `<p>Balanced trees use <b>rotations</b> to fix imbalances without breaking the BST property.</p>
<div class="code-block"><span class="com">//    Left Rotation around A:</span>
<span class="com">//        A                B</span>
<span class="com">//         \\              / \\</span>
<span class="com">//          B    ===&gt;   A   C</span>
<span class="com">//           \\</span>
<span class="com">//            C</span></div>
<p>Rotations take O(1) but you may do several after each insert/delete to restore balance.</p>
<p>AVL uses 4 rotation cases: LL, RR, LR, RL.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A single rotation runs in:',
              options: [
                { text: 'O(log n)', code: true },
                { text: 'O(1)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 1,
              explanation: 'Just a few pointer swaps — constant time.'
            },
            {
              type: 'true-false',
              statement: 'Rotations break the BST ordering property.',
              correct: false,
              explanation: 'Quite the opposite — they\'re carefully designed to preserve it.'
            },
            {
              type: 'output-predict',
              prompt: 'Insert 1,2,3 into an AVL tree (initially empty). Root after balance?',
              code: `<span class="com">// chain becomes balanced via rotation</span>`,
              options: ['1', '2', '3', 'null'],
              correct: 1,
              explanation: 'After inserting 1,2,3 the AVL tree rotates to make 2 the root.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match AVL imbalance case to fix.',
              leftLabel: 'Imbalance',
              rightLabel: 'Rotation',
              pairs: [
                { left: 'Left-Left', right: 'Right rotation' },
                { left: 'Right-Right', right: 'Left rotation' },
                { left: 'Left-Right', right: 'Left then Right' },
                { left: 'Right-Left', right: 'Right then Left' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'AVL balance factor for any node must be in...',
              codeLines: [
                { html: '<span class="com">// balanceFactor = height(left) - height(right)</span>' },
                { html: '<span class="com">// must be in {-1, 0, _BLANK_}</span>' }
              ],
              tokens: ['1', '2', '5', 'n'],
              correctAnswer: '1',
              explanation: 'AVL trees allow balance factor in {-1, 0, +1}.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap words that complete: "Rotations keep the tree ____ ____."',
              tokens: ['balanced', 'and', 'shallow', 'random', 'deep', 'taller'],
              correctOrder: ['balanced', 'and', 'shallow'],
              explanation: 'Rotations keep the tree balanced and shallow.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 17 — Heaps
    // ============================================================
    {
      id: 'u17-heaps',
      name: 'Unit 17 · Heaps',
      description: 'Complete binary trees with a tiny ordering rule.',
      lessons: [
        {
          id: 'u17-l1',
          name: 'Heap basics',
          icon: '⛰️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Min-heap and max-heap',
              content: `<p>A <b>heap</b> is a <b>complete binary tree</b> that obeys the heap property:</p>
<ul>
<li><b>Min-heap</b> — every parent ≤ its children.</li>
<li><b>Max-heap</b> — every parent ≥ its children.</li>
</ul>
<p>The smallest (or largest) is always at the root → O(1) peek.</p>
<div class="code-block"><span class="com">// Min-heap</span>
<span class="com">//        1</span>
<span class="com">//       / \\</span>
<span class="com">//      3   2</span>
<span class="com">//     / \\</span>
<span class="com">//    5   4</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In a min-heap, the root is:',
              options: [
                { text: 'The largest element', code: true },
                { text: 'The smallest element', code: true },
                { text: 'A random element', code: true },
                { text: 'The newest insert', code: true }
              ],
              correct: 1,
              explanation: 'Min-heap → smallest at root.'
            },
            {
              type: 'true-false',
              statement: 'A heap is a complete binary tree.',
              correct: true,
              explanation: 'All levels filled left-to-right — that\'s what makes array storage possible.'
            },
            {
              type: 'output-predict',
              prompt: 'Min-heap roots: peek returns?',
              code: `<span class="com">// heap contents: [3, 7, 4, 10, 9]</span>
<span class="fn">println</span>(heap.<span class="fn">peek</span>());`,
              options: ['3', '4', '7', '10'],
              correct: 0,
              explanation: 'Root is at index 0 in array representation, and root has the min.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match heap term with meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Min-heap', right: 'Smallest at root' },
                { left: 'Max-heap', right: 'Largest at root' },
                { left: 'Heapify up', right: 'Bubble inserted item up' },
                { left: 'Heapify down', right: 'Sink the root after pop' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Min-heap property at each node.',
              codeLines: [
                { html: '<span class="com">// parent.value &lt;= _BLANK_.value</span>' }
              ],
              tokens: ['child', 'sibling', 'parent', 'root'],
              correctAnswer: 'child',
              explanation: 'Parent must be ≤ child for a min-heap.'
            }
          ]
        },
        {
          id: 'u17-l2',
          name: 'Array representation',
          icon: '📐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'A tree in an array',
              content: `<p>Heaps are usually stored as an array, no pointers needed:</p>
<ul>
<li>Parent of i: <code>(i - 1) / 2</code></li>
<li>Left child of i: <code>2*i + 1</code></li>
<li>Right child of i: <code>2*i + 2</code></li>
</ul>
<div class="code-block"><span class="com">// heap: [1, 3, 2, 5, 4]</span>
<span class="com">// index: 0  1  2  3  4</span>

<span class="com">// node at i=1 (value 3)</span>
<span class="com">// parent: (1-1)/2 = 0 → value 1</span>
<span class="com">// left:   2*1+1 = 3 → value 5</span>
<span class="com">// right:  2*1+2 = 4 → value 4</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Parent index of node at array index 5?',
              options: [
                { text: '0', code: true },
                { text: '1', code: true },
                { text: '2', code: true },
                { text: '4', code: true }
              ],
              correct: 2,
              explanation: '(5-1)/2 = 2.'
            },
            {
              type: 'true-false',
              statement: 'Left child of index i is at 2*i + 1.',
              correct: true,
              explanation: 'Classic 0-indexed heap formula.'
            },
            {
              type: 'output-predict',
              prompt: 'For i = 3, what is the right-child index?',
              code: `<span class="ty">int</span> right = <span class="num">2</span>*i + <span class="num">2</span>;`,
              options: ['6', '7', '8', '9'],
              correct: 2,
              explanation: '2*3 + 2 = 8.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute parent index.',
              codeLines: [
                { html: '<span class="ty">int</span> parent = (i - <span class="num">_BLANK_</span>) / <span class="num">2</span>;' }
              ],
              tokens: ['1', '0', '2', 'i'],
              correctAnswer: '1',
              explanation: '(i - 1) / 2 for a 0-indexed heap.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match index relation.',
              leftLabel: 'Relation',
              rightLabel: 'Formula',
              pairs: [
                { left: 'Left child of i', right: '2i + 1' },
                { left: 'Right child of i', right: '2i + 2' },
                { left: 'Parent of i', right: '(i - 1) / 2' },
                { left: 'Root index', right: '0' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tokens for the left-child formula.',
              tokens: ['2', '*', 'i', '+', '1', '-', 'parent'],
              correctOrder: ['2', '*', 'i', '+', '1'],
              explanation: 'Left child = 2*i + 1.'
            }
          ]
        },
        {
          id: 'u17-l3',
          name: 'Insert & extract',
          icon: '🪜',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Heapify up & down',
              content: `<p><b>Insert</b>: append to end, then "heapify up" — swap with parent while it violates the heap property. O(log n).</p>
<p><b>Extract min/max</b>: take the root, move the last element to root, then "heapify down" — swap with smaller child while needed. O(log n).</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">heapifyUp</span>(<span class="ty">int</span> i) {
  <span class="kw">while</span> (i &gt; <span class="num">0</span> &amp;&amp; heap[i] &lt; heap[(i-<span class="num">1</span>)/<span class="num">2</span>]) {
    <span class="fn">swap</span>(i, (i-<span class="num">1</span>)/<span class="num">2</span>);
    i = (i-<span class="num">1</span>)/<span class="num">2</span>;
  }
}</div>
<p>Heap sort = build heap (O(n)) + extract n times (O(n log n)).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Insert into a heap is:',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 1,
              explanation: 'You walk at most the tree height = O(log n).'
            },
            {
              type: 'true-false',
              statement: 'Heap sort runs in O(n log n) time.',
              correct: true,
              explanation: 'Build heap O(n), then n extracts of O(log n) each.'
            },
            {
              type: 'output-predict',
              prompt: 'Min-heap [2, 5, 7]. Insert 1. New root?',
              code: `heap.<span class="fn">offer</span>(<span class="num">1</span>);`,
              options: ['1', '2', '5', '7'],
              correct: 0,
              explanation: '1 bubbles up past 5 and 2 to become root.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order heapifyDown for index i.',
              lines: [
                '<span class="ty">int</span> l = <span class="num">2</span>*i + <span class="num">1</span>, r = <span class="num">2</span>*i + <span class="num">2</span>, sm = i;',
                '<span class="kw">if</span> (l &lt; n &amp;&amp; heap[l] &lt; heap[sm]) sm = l;',
                '<span class="kw">if</span> (r &lt; n &amp;&amp; heap[r] &lt; heap[sm]) sm = r;',
                '<span class="kw">if</span> (sm != i) { <span class="fn">swap</span>(i, sm); <span class="fn">heapifyDown</span>(sm); }'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match heap operation with complexity.',
              leftLabel: 'Op',
              rightLabel: 'Big O',
              pairs: [
                { left: 'peek min', right: 'O(1)' },
                { left: 'insert', right: 'O(log n)' },
                { left: 'extract min', right: 'O(log n)' },
                { left: 'build heap', right: 'O(n)' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Insert appends, then bubbles ___.',
              codeLines: [
                { html: '<span class="com">// place new value at end, then heapify _BLANK_</span>' }
              ],
              tokens: ['up', 'down', 'sideways', 'left'],
              correctAnswer: 'up',
              explanation: 'Insert heapifies up; extract heapifies down.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 18 — Graphs — Basics
    // ============================================================
    {
      id: 'u18-graph-basics',
      name: 'Unit 18 · Graphs — Basics',
      description: 'Vertices, edges, and the relationships they describe.',
      lessons: [
        {
          id: 'u18-l1',
          name: 'Vertices and edges',
          icon: '🕸️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a graph?',
              content: `<p>A <b>graph</b> is a set of <b>vertices</b> (nodes) connected by <b>edges</b>.</p>
<div class="code-block"><span class="com">// V = { A, B, C, D }</span>
<span class="com">// E = { (A,B), (A,C), (B,D), (C,D) }</span>

<span class="com">//   A — B</span>
<span class="com">//   |   |</span>
<span class="com">//   C — D</span></div>
<p>Graphs model anything with relationships:</p>
<ul>
<li>Social networks (friend edges).</li>
<li>Roads (intersections, streets).</li>
<li>Web pages (hyperlinks).</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In graph theory, a "node" is also called:',
              options: [
                { text: 'Edge', code: false },
                { text: 'Vertex', code: false },
                { text: 'Path', code: false },
                { text: 'Cycle', code: false }
              ],
              correct: 1,
              explanation: 'Vertex (plural: vertices) is the formal term for a node.'
            },
            {
              type: 'true-false',
              statement: 'An edge connects two vertices.',
              correct: true,
              explanation: 'Edges are the lines/connections between vertices.'
            },
            {
              type: 'output-predict',
              prompt: 'A graph with V vertices fully connected has how many edges?',
              code: `<span class="com">// Each vertex links to every other — undirected</span>`,
              options: ['V', 'V-1', 'V*(V-1)/2', 'V²'],
              correct: 2,
              explanation: 'A complete undirected graph has C(V,2) = V(V-1)/2 edges.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match graph term with meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Vertex', right: 'A node' },
                { left: 'Edge', right: 'A connection' },
                { left: 'Degree', right: 'Number of edges at a vertex' },
                { left: 'Path', right: 'Sequence of edges' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap to complete: "A graph is a set of ____ connected by ____ ."',
              tokens: ['vertices', 'connected', 'by', 'edges', 'paths', 'cycles', 'roots'],
              correctOrder: ['vertices', 'connected', 'by', 'edges'],
              explanation: 'Graph = vertices + edges.'
            }
          ]
        },
        {
          id: 'u18-l2',
          name: 'Graph flavors',
          icon: '🎨',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Directed, weighted, cyclic',
              content: `<p>Graph variants describe what edges <i>mean</i>:</p>
<ul>
<li><b>Directed</b> — edges have a direction (A → B ≠ B → A).</li>
<li><b>Undirected</b> — edges go both ways.</li>
<li><b>Weighted</b> — edges carry numbers (distance, cost).</li>
<li><b>Cyclic</b> — contains at least one cycle.</li>
<li><b>Acyclic</b> — no cycles (DAG = Directed Acyclic Graph).</li>
</ul>
<div class="code-block"><span class="com">// Twitter follows = directed</span>
<span class="com">// Facebook friends = undirected</span>
<span class="com">// Google Maps route = weighted</span>
<span class="com">// Task dependencies = DAG</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Twitter follows are modeled as a:',
              options: [
                { text: 'Undirected graph', code: false },
                { text: 'Directed graph', code: false },
                { text: 'Tree', code: false },
                { text: 'Heap', code: false }
              ],
              correct: 1,
              explanation: 'You can follow without being followed back — direction matters.'
            },
            {
              type: 'true-false',
              statement: 'A DAG is a directed graph with no cycles.',
              correct: true,
              explanation: 'DAG = Directed Acyclic Graph.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match real-world example to graph type.',
              leftLabel: 'Example',
              rightLabel: 'Graph type',
              pairs: [
                { left: 'Facebook friends', right: 'Undirected' },
                { left: 'Twitter follows', right: 'Directed' },
                { left: 'Google Maps', right: 'Weighted' },
                { left: 'Build dependencies', right: 'DAG' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Total edges in an undirected graph where each of 5 nodes connects to every other?',
              code: `<span class="com">// V=5 complete graph</span>`,
              options: ['5', '10', '20', '25'],
              correct: 1,
              explanation: '5*(5-1)/2 = 10.'
            },
            {
              type: 'fill-blank',
              prompt: 'Property a tree always has.',
              codeLines: [
                { html: '<span class="com">// connected, _BLANK_, V-1 edges</span>' }
              ],
              tokens: ['acyclic', 'cyclic', 'weighted', 'directed'],
              correctAnswer: 'acyclic',
              explanation: 'Trees are connected and acyclic.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 19 — Graph Representations
    // ============================================================
    {
      id: 'u19-graph-reps',
      name: 'Unit 19 · Graph Representations',
      description: 'Adjacency matrix vs adjacency list.',
      lessons: [
        {
          id: 'u19-l1',
          name: 'Adjacency matrix',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Big V×V matrix',
              content: `<p>An <b>adjacency matrix</b> is a V×V boolean (or weight) matrix where <code>mat[i][j]</code> says whether there's an edge from i to j.</p>
<div class="code-block"><span class="com">// 4-vertex graph A,B,C,D with edges AB, AC, BD</span>
<span class="ty">int</span>[][] adj = {
  { <span class="num">0</span>, <span class="num">1</span>, <span class="num">1</span>, <span class="num">0</span> },  <span class="com">// A</span>
  { <span class="num">1</span>, <span class="num">0</span>, <span class="num">0</span>, <span class="num">1</span> },  <span class="com">// B</span>
  { <span class="num">1</span>, <span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span> },  <span class="com">// C</span>
  { <span class="num">0</span>, <span class="num">1</span>, <span class="num">0</span>, <span class="num">0</span> }   <span class="com">// D</span>
};</div>
<ul>
<li>Space: O(V²).</li>
<li>Check edge (u,v): O(1).</li>
<li>Iterate neighbors of u: O(V).</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Space cost of an adjacency matrix for V vertices?',
              options: [
                { text: 'O(V)', code: true },
                { text: 'O(V log V)', code: true },
                { text: 'O(V + E)', code: true },
                { text: 'O(V²)', code: true }
              ],
              correct: 3,
              explanation: 'A V×V matrix uses V² cells regardless of how many edges exist.'
            },
            {
              type: 'true-false',
              statement: 'Edge existence lookup in an adjacency matrix is O(1).',
              correct: true,
              explanation: 'Just read mat[u][v].'
            },
            {
              type: 'output-predict',
              prompt: 'Adjacency matrix is symmetric when graph is:',
              code: `<span class="com">// mat[i][j] == mat[j][i]</span>`,
              options: ['Directed', 'Weighted', 'Undirected', 'Cyclic'],
              correct: 2,
              explanation: 'Undirected → edges go both ways → matrix is symmetric.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation with matrix cost.',
              leftLabel: 'Op',
              rightLabel: 'Cost',
              pairs: [
                { left: 'Check edge (u,v)', right: 'O(1)' },
                { left: 'Iterate neighbors of u', right: 'O(V)' },
                { left: 'Add edge', right: 'O(1)' },
                { left: 'Total space', right: 'O(V²)' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Mark edge from u to v in an undirected adjacency matrix.',
              codeLines: [
                { html: 'mat[u][v] = <span class="num">1</span>;' },
                { html: 'mat[v][<span class="num">_BLANK_</span>] = <span class="num">1</span>;' }
              ],
              tokens: ['u', 'v', '0', '1'],
              correctAnswer: 'u',
              explanation: 'Undirected → mark both directions.'
            }
          ]
        },
        {
          id: 'u19-l2',
          name: 'Adjacency list',
          icon: '📜',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'List of lists',
              content: `<p>An <b>adjacency list</b> stores, for each vertex, a list of its neighbors.</p>
<div class="code-block"><span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="com">// adj[0] = [1, 2]   // A → B, C</span>
<span class="com">// adj[1] = [0, 3]   // B → A, D</span></div>
<ul>
<li>Space: O(V + E).</li>
<li>Check edge (u,v): O(deg(u)).</li>
<li>Iterate neighbors of u: O(deg(u)) — fast.</li>
</ul>
<p>Prefer for <b>sparse</b> graphs (few edges). Matrix wins on <b>dense</b> graphs.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Adjacency-list space is:',
              options: [
                { text: 'O(V²)', code: true },
                { text: 'O(V + E)', code: true },
                { text: 'O(E²)', code: true },
                { text: 'O(V log V)', code: true }
              ],
              correct: 1,
              explanation: 'Each vertex + each edge stored once (twice for undirected).'
            },
            {
              type: 'true-false',
              statement: 'For sparse graphs, adjacency lists use far less memory than matrices.',
              correct: true,
              explanation: 'O(V + E) ≪ O(V²) when E is small.'
            },
            {
              type: 'output-predict',
              prompt: 'V=10, E=20. Approximate memory: matrix vs list?',
              code: `<span class="com">// matrix: 10×10 = 100</span>
<span class="com">// list:   10 + 2*20 = 50</span>`,
              options: ['Matrix uses less', 'List uses less', 'Both equal', 'Depends on weights'],
              correct: 1,
              explanation: 'Sparse graph favors lists.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match graph type with best representation.',
              leftLabel: 'Graph',
              rightLabel: 'Representation',
              pairs: [
                { left: 'Sparse', right: 'Adjacency list' },
                { left: 'Dense', right: 'Adjacency matrix' },
                { left: 'Need O(1) edge check', right: 'Matrix' },
                { left: 'Need fast neighbor iteration', right: 'List' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Add edge u → v in an undirected adjacency list.',
              codeLines: [
                { html: 'adj.<span class="fn">get</span>(u).<span class="fn">add</span>(v);' },
                { html: 'adj.<span class="fn">get</span>(v).<span class="fn">add</span>(<span class="num">_BLANK_</span>);' }
              ],
              tokens: ['u', 'v', '0', '1'],
              correctAnswer: 'u',
              explanation: 'Undirected → record both directions.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tokens for iterating neighbors of vertex u.',
              tokens: ['for', '(', 'int', 'v', ':', 'adj', '.', 'get', '(', 'u', ')', ')', ';', 'while'],
              correctOrder: ['for', '(', 'int', 'v', ':', 'adj', '.', 'get', '(', 'u', ')', ')'],
              explanation: 'Enhanced for-loop over the neighbor list.'
            }
          ]
        }
      ]
    },

    // ============================================================
    // UNIT 20 — Tries
    // ============================================================
    {
      id: 'u20-tries',
      name: 'Unit 20 · Tries',
      description: 'Prefix trees — the secret behind autocomplete.',
      lessons: [
        {
          id: 'u20-l1',
          name: 'Prefix trees',
          icon: '🌿',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What is a trie?',
              content: `<p>A <b>trie</b> (pronounced "try" or "tree") stores strings character by character, sharing common prefixes.</p>
<div class="code-block"><span class="com">// Insert: "cat", "car", "cap"</span>
<span class="com">//        (root)</span>
<span class="com">//           |</span>
<span class="com">//           c</span>
<span class="com">//           |</span>
<span class="com">//           a</span>
<span class="com">//         / | \\</span>
<span class="com">//        t  r  p</span></div>
<p>Each node holds:</p>
<ul>
<li>A map (or array) of children, keyed by character.</li>
<li>A flag <code>isEnd</code> marking the end of a complete word.</li>
</ul>
<p>Search and insert are both O(L) where L = length of the word.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A trie is best for:',
              options: [
                { text: 'Storing numeric data', code: false },
                { text: 'Prefix-based string lookup', code: false },
                { text: 'Sorting integers', code: false },
                { text: 'Graph traversal', code: false }
              ],
              correct: 1,
              explanation: 'Tries excel at "starts with…" queries (autocomplete, spell-check).'
            },
            {
              type: 'true-false',
              statement: 'Searching a trie for a word of length L is O(L).',
              correct: true,
              explanation: 'Independent of how many words are stored — only L characters to walk.'
            },
            {
              type: 'output-predict',
              prompt: 'Trie contains "cat","car","cap". prefixSearch("ca") returns how many words?',
              code: `<span class="com">// All start with "ca"</span>`,
              options: ['1', '2', '3', '0'],
              correct: 2,
              explanation: 'All three words share the prefix "ca".'
            },
            {
              type: 'fill-blank',
              prompt: 'Trie node skeleton.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">TrieNode</span> {' },
                { html: '  <span class="ty">Map</span>&lt;<span class="ty">Character</span>, <span class="ty">TrieNode</span>&gt; <span class="num">_BLANK_</span> = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();' },
                { html: '  <span class="ty">boolean</span> isEnd;' },
                { html: '}' }
              ],
              tokens: ['children', 'parent', 'next', 'siblings'],
              correctAnswer: 'children',
              explanation: 'A trie node maps each character to its child node.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match trie operation with complexity.',
              leftLabel: 'Op',
              rightLabel: 'Cost',
              pairs: [
                { left: 'Insert word of length L', right: 'O(L)' },
                { left: 'Search word', right: 'O(L)' },
                { left: 'Find all words with prefix', right: 'O(L + matches)' },
                { left: 'Total memory for N words avg length L', right: 'O(N·L)' }
              ]
            }
          ]
        },
        {
          id: 'u20-l2',
          name: 'Insert & prefix search',
          icon: '🔡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Walk down the characters',
              content: `<p>To <b>insert</b> a word: walk one character at a time, creating missing children, then mark the last node <code>isEnd = true</code>.</p>
<p>To <b>search</b>: walk char-by-char; succeed only if you arrive at a node with <code>isEnd</code>.</p>
<p>To check a <b>prefix</b>: same walk, but you don't require isEnd at the end.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">insert</span>(<span class="ty">String</span> w) {
  <span class="ty">TrieNode</span> cur = root;
  <span class="kw">for</span> (<span class="ty">char</span> c : w.<span class="fn">toCharArray</span>()) {
    cur = cur.children.<span class="fn">computeIfAbsent</span>(c, k -&gt; <span class="kw">new</span> <span class="ty">TrieNode</span>());
  }
  cur.isEnd = <span class="kw">true</span>;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'startsWith vs search differ in what way?',
              options: [
                { text: 'startsWith requires isEnd', code: false },
                { text: 'search requires isEnd; startsWith does not', code: false },
                { text: 'They are identical', code: false },
                { text: 'startsWith uses a queue', code: false }
              ],
              correct: 1,
              explanation: 'A complete word match needs isEnd; a prefix match only needs the path to exist.'
            },
            {
              type: 'true-false',
              statement: 'Tries can use either a hashmap or a fixed-size array (e.g. 26) for children.',
              correct: true,
              explanation: 'Hashmap is flexible; an array of 26 is faster for English lowercase.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the trie search.',
              lines: [
                '<span class="ty">TrieNode</span> cur = root;',
                '<span class="kw">for</span> (<span class="ty">char</span> c : word.<span class="fn">toCharArray</span>()) {',
                '  cur = cur.children.<span class="fn">get</span>(c);',
                '  <span class="kw">if</span> (cur == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">false</span>;',
                '}',
                '<span class="kw">return</span> cur.isEnd;'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
              type: 'output-predict',
              prompt: 'Trie has "cat". search("ca") returns?',
              code: `<span class="com">// "ca" walked successfully but isEnd false at 'a'</span>`,
              options: ['true', 'false', 'error', 'undefined'],
              correct: 1,
              explanation: 'Search needs isEnd true at the last char; "ca" is only a prefix.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match feature with trie use.',
              leftLabel: 'Feature',
              rightLabel: 'Trie role',
              pairs: [
                { left: 'Autocomplete', right: 'Prefix search' },
                { left: 'Spell-check', right: 'Word search' },
                { left: 'IP routing', right: 'Bit-trie' },
                { left: 'Dictionary', right: 'Word + meaning storage' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Mark a word complete after walking its chars.',
              codeLines: [
                { html: 'cur.<span class="num">_BLANK_</span> = <span class="kw">true</span>;' }
              ],
              tokens: ['isEnd', 'children', 'value', 'parent'],
              correctAnswer: 'isEnd',
              explanation: 'isEnd marks "a complete word ends here".'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the insert call for word "hi".',
              tokens: ['trie', '.', 'insert', '(', '"hi"', ')', ';', 'search', 'pop'],
              correctOrder: ['trie', '.', 'insert', '(', '"hi"', ')', ';'],
              explanation: 'trie.insert("hi") adds the word to the trie.'
            }
          ]
        }
      ]
    }
  ]
});

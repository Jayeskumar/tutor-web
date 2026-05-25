LEARN('dsa', {
  intro: 'Data Structures and Algorithms (DSA) are the building blocks of every program. From the search bar you type into, to the route your GPS calculates, to the feed you scroll — there is a clever data structure or algorithm working behind the scenes. In this course, we will explore the most important data structures, understand why they exist, and learn to choose the right tool for the job. We will use Java throughout, but the ideas translate to any language.',
  chapters: [
    // ============================================================
    // CHAPTER 1: WHY DSA?
    // ============================================================
    {
      id: 'dsa-c1',
      title: 'Why DSA?',
      icon: '🧠',
      sections: [
        { type: 'heading', text: 'Why should you care about DSA?', level: 1 },
        { type: 'para', html: 'Every app you use is powered by data structures and algorithms. When Google returns search results in milliseconds, when Maps finds the fastest route across a city, when Instagram shows your feed — these are not magic. They are <strong>well-chosen data structures</strong> paired with <strong>clever algorithms</strong>.' },
        { type: 'para', html: 'A <em>data structure</em> is a way of organizing data so we can use it efficiently. An <em>algorithm</em> is a step-by-step recipe for solving a problem. The two go hand-in-hand: a great algorithm on the wrong data structure can be painfully slow.' },
        { type: 'heading', text: 'Real-world example: the search engine', level: 2 },
        { type: 'para', html: 'Imagine Google needs to search through <strong>billions</strong> of web pages to find ones that match your query. A naive approach — checking every page one by one — would take hours. Instead, Google builds an <code>inverted index</code>: a special data structure that maps words to the pages they appear on. Suddenly, lookups become near-instant.' },
        { type: 'callout', kind: 'info', html: 'An inverted index is essentially a giant <strong>hash table</strong> — one of the data structures you will learn in this course.' },
        { type: 'heading', text: 'GPS routing', level: 2 },
        { type: 'para', html: 'When you ask Maps for the fastest route from your home to a coffee shop, it models the road network as a <strong>graph</strong>: intersections are <em>nodes</em>, roads are <em>edges</em>, and travel time is the <em>edge weight</em>. Then it runs a famous algorithm called <code>Dijkstra\'s</code> to find the shortest path.' },
        { type: 'image', alt: 'Tiny graph showing nodes and weighted edges', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="110" r="28" fill="#7c4dff"/><text x="80" y="116" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">A</text>
          <circle cx="250" cy="50" r="28" fill="#1cb0f6"/><text x="250" y="56" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">B</text>
          <circle cx="250" cy="170" r="28" fill="#1cb0f6"/><text x="250" y="176" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">C</text>
          <circle cx="430" cy="110" r="28" fill="#58cc02"/><text x="430" y="116" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">D</text>
          <line x1="108" y1="100" x2="222" y2="60" stroke="#444" stroke-width="2"/>
          <line x1="108" y1="120" x2="222" y2="160" stroke="#444" stroke-width="2"/>
          <line x1="278" y1="60" x2="402" y2="100" stroke="#444" stroke-width="2"/>
          <line x1="278" y1="160" x2="402" y2="120" stroke="#444" stroke-width="2"/>
          <line x1="250" y1="78" x2="250" y2="142" stroke="#444" stroke-width="2"/>
          <text x="155" y="70" fill="#7c4dff" font-size="14" font-weight="700">4</text>
          <text x="155" y="155" fill="#7c4dff" font-size="14" font-weight="700">7</text>
          <text x="345" y="70" fill="#7c4dff" font-size="14" font-weight="700">3</text>
          <text x="345" y="155" fill="#7c4dff" font-size="14" font-weight="700">9</text>
          <text x="260" y="115" fill="#7c4dff" font-size="14" font-weight="700">2</text>
        </svg>` },
        { type: 'heading', text: 'Social networks', level: 2 },
        { type: 'para', html: 'Your friends, their friends, who liked what — all of this is naturally a <strong>graph</strong>. When LinkedIn says "you have 12 mutual connections," it ran a quick graph traversal. When Instagram suggests who to follow, it explored your social graph.' },
        { type: 'heading', text: 'A preview of Big-O', level: 2 },
        { type: 'para', html: 'The way we measure how fast an algorithm is, is called <code>Big-O notation</code>. It tells us how the running time <em>scales</em> with input size. A few common ones:' },
        { type: 'list', kind: 'bullet', items: [
          '<code>O(1)</code> — constant: same time regardless of input size',
          '<code>O(log n)</code> — logarithmic: doubles input, time grows by one step',
          '<code>O(n)</code> — linear: time grows proportionally with input',
          '<code>O(n log n)</code> — efficient sorting',
          '<code>O(n²)</code> — quadratic: a thousand items, a million operations',
        ]},
        { type: 'callout', kind: 'tip', html: 'You will master Big-O in the very next chapter. For now, just remember: <strong>smaller is better</strong>.' },
        { type: 'heading', text: 'What you will learn here', level: 2 },
        { type: 'list', kind: 'check', items: [
          'How to measure performance with Big-O',
          'Linear structures: arrays, linked lists, stacks, queues',
          'Hash-based structures: hash tables, sets',
          'Tree-based structures: BSTs, heaps, tries',
          'Graphs and how to represent them',
        ]},
        { type: 'divider' },
        { type: 'para', html: 'Ready? Let\'s start with the language of performance: <strong>Big-O notation</strong>.' },
      ],
    },

    // ============================================================
    // CHAPTER 2: BIG O NOTATION
    // ============================================================
    {
      id: 'dsa-c2',
      title: 'Big O Notation',
      icon: '📈',
      sections: [
        { type: 'heading', text: 'Measuring efficiency', level: 1 },
        { type: 'para', html: 'How do we say "this algorithm is faster than that one"? We could time them with a stopwatch, but that depends on the machine, the language, even the temperature of the CPU. Instead, computer scientists use <strong>Big-O notation</strong> to describe how an algorithm scales as the input grows.' },
        { type: 'callout', kind: 'info', html: 'Big-O describes the <strong>worst-case</strong> growth rate. It is a high-level shape, not a precise count of microseconds.' },
        { type: 'heading', text: 'A first example: linear search', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">int</span> <span class="fn">findValue</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> target) {
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; arr.length; i++) {
    <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
  }
  <span class="kw">return</span> -<span class="num">1</span>;
}` },
        { type: 'para', html: 'In the worst case (target not present), we scan every element once. With <code>n</code> elements, that is <code>n</code> comparisons. We say this algorithm is <code>O(n)</code>: <strong>linear time</strong>.' },
        { type: 'heading', text: 'Common growth rates, from best to worst', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>O(1)</code> — <strong>constant</strong>: hash table lookup, array index access',
          '<code>O(log n)</code> — <strong>logarithmic</strong>: binary search',
          '<code>O(n)</code> — <strong>linear</strong>: scanning a list',
          '<code>O(n log n)</code> — <strong>linearithmic</strong>: merge sort, quicksort average',
          '<code>O(n²)</code> — <strong>quadratic</strong>: nested loops over the same array',
          '<code>O(2ⁿ)</code> — <strong>exponential</strong>: naive recursive Fibonacci',
          '<code>O(n!)</code> — <strong>factorial</strong>: brute-force traveling salesman',
        ]},
        { type: 'image', alt: 'Big-O growth comparison chart', svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="320" fill="#fafafa"/>
          <line x1="60" y1="280" x2="560" y2="280" stroke="#333" stroke-width="2"/>
          <line x1="60" y1="40" x2="60" y2="280" stroke="#333" stroke-width="2"/>
          <text x="300" y="310" text-anchor="middle" font-size="13" fill="#333">Input size (n)</text>
          <text x="20" y="160" text-anchor="middle" font-size="13" fill="#333" transform="rotate(-90 20 160)">Operations</text>
          <path d="M60 270 L560 250" stroke="#58cc02" stroke-width="3" fill="none"/>
          <text x="565" y="252" font-size="12" fill="#58cc02" font-weight="700">O(log n)</text>
          <path d="M60 280 L560 60" stroke="#1cb0f6" stroke-width="3" fill="none"/>
          <text x="565" y="60" font-size="12" fill="#1cb0f6" font-weight="700">O(n)</text>
          <path d="M60 280 Q 300 220 560 60" stroke="#ffc800" stroke-width="3" fill="none"/>
          <text x="320" y="180" font-size="12" fill="#ffc800" font-weight="700">O(n log n)</text>
          <path d="M60 280 Q 300 280 560 50" stroke="#7c4dff" stroke-width="3" fill="none"/>
          <text x="430" y="160" font-size="12" fill="#7c4dff" font-weight="700">O(n²)</text>
          <path d="M60 280 Q 200 280 300 50" stroke="#ff4b4b" stroke-width="3" fill="none"/>
          <text x="270" y="80" font-size="12" fill="#ff4b4b" font-weight="700">O(2ⁿ)</text>
          <line x1="60" y1="270" x2="560" y2="270" stroke="#aaa" stroke-dasharray="3 3"/>
          <text x="565" y="273" font-size="12" fill="#666" font-weight="700">O(1)</text>
        </svg>` },
        { type: 'callout', kind: 'warn', html: 'A single nested loop over an array of <code>n</code> items takes <code>O(n²)</code>. With 10,000 items, that is <strong>100 million</strong> operations. Be careful!' },
        { type: 'heading', text: 'Dropping constants', level: 2 },
        { type: 'para', html: 'If your algorithm does <code>3n + 5</code> operations, we just say it is <code>O(n)</code>. Why? Because as <code>n</code> grows huge, the constants and lower-order terms become irrelevant.' },
        { type: 'code', lang: 'java', code: `<span class="com">// Both of these are O(n), even though one is "slower" by constant factor</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) sum += arr[i];

<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) {
  sum += arr[i];
  sum += arr[i] * <span class="num">2</span>;
  sum -= <span class="num">1</span>;
}` },
        { type: 'heading', text: 'Spotting Big-O quickly', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'A single loop over n items → <code>O(n)</code>',
          'A loop that halves the range each step → <code>O(log n)</code>',
          'Two nested loops, each n iterations → <code>O(n²)</code>',
          'Two consecutive (not nested) loops → still <code>O(n)</code> (n + n = 2n → O(n))',
          'A recursive call that branches in two → often <code>O(2ⁿ)</code>',
        ]},
        { type: 'heading', text: 'Space complexity', level: 2 },
        { type: 'para', html: 'Big-O also describes <strong>memory usage</strong>, not just time. An algorithm that allocates a new array of size <code>n</code> uses <code>O(n)</code> extra space. One that uses a few local variables regardless of input size uses <code>O(1)</code> space.' },
        { type: 'callout', kind: 'tip', html: 'There is often a <strong>time-space tradeoff</strong>: you can speed up an algorithm by using more memory (e.g., caching results).' },
        { type: 'heading', text: 'Key takeaways', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Big-O describes how runtime grows with input size',
          'It hides constants and focuses on the dominant term',
          'O(1) is best; O(n!) is catastrophic',
          'It applies to both time and space',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 3: ARRAYS - THE BASICS
    // ============================================================
    {
      id: 'dsa-c3',
      title: 'Arrays — The basics',
      icon: '📊',
      sections: [
        { type: 'heading', text: 'Arrays: the simplest data structure', level: 1 },
        { type: 'para', html: 'An <strong>array</strong> is a fixed-size, contiguous block of memory holding elements of the same type. You access elements by their <em>index</em>, starting from zero.' },
        { type: 'widget', name: 'array-vis', props: { values: [10, 20, 30, 40, 50] } },
        { type: 'heading', text: 'Declaring arrays in Java', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Declare and allocate</span>
<span class="ty">int</span>[] nums = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">5</span>];           <span class="com">// length 5, all zeros</span>

<span class="com">// Declare with values</span>
<span class="ty">int</span>[] primes = { <span class="num">2</span>, <span class="num">3</span>, <span class="num">5</span>, <span class="num">7</span>, <span class="num">11</span> };

<span class="com">// Access by index</span>
<span class="ty">int</span> first = primes[<span class="num">0</span>];       <span class="com">// 2</span>
<span class="ty">int</span> last  = primes[primes.length - <span class="num">1</span>]; <span class="com">// 11</span>` },
        { type: 'callout', kind: 'warn', html: 'Java arrays are <strong>zero-indexed</strong>. The first element is at index <code>0</code>, and the last is at index <code>length - 1</code>. Going out of bounds throws <code>ArrayIndexOutOfBoundsException</code>.' },
        { type: 'heading', text: 'Memory layout', level: 2 },
        { type: 'para', html: 'Array elements live <em>side-by-side</em> in memory. If <code>arr</code> starts at memory address <code>1000</code> and each int takes 4 bytes, then <code>arr[3]</code> lives at address <code>1012</code>. The CPU computes this with simple arithmetic — that is why <strong>access by index is O(1)</strong>.' },
        { type: 'image', alt: 'Array memory layout', svg: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#333">Array in memory (contiguous)</text>
          <g>
            <rect x="50" y="50" width="80" height="60" fill="#7c4dff" stroke="#5a35cc" stroke-width="2"/>
            <rect x="130" y="50" width="80" height="60" fill="#7c4dff" stroke="#5a35cc" stroke-width="2"/>
            <rect x="210" y="50" width="80" height="60" fill="#7c4dff" stroke="#5a35cc" stroke-width="2"/>
            <rect x="290" y="50" width="80" height="60" fill="#7c4dff" stroke="#5a35cc" stroke-width="2"/>
            <rect x="370" y="50" width="80" height="60" fill="#7c4dff" stroke="#5a35cc" stroke-width="2"/>
            <text x="90" y="85" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">10</text>
            <text x="170" y="85" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">20</text>
            <text x="250" y="85" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">30</text>
            <text x="330" y="85" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">40</text>
            <text x="410" y="85" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">50</text>
            <text x="90" y="135" text-anchor="middle" font-size="11" fill="#666">[0]</text>
            <text x="170" y="135" text-anchor="middle" font-size="11" fill="#666">[1]</text>
            <text x="250" y="135" text-anchor="middle" font-size="11" fill="#666">[2]</text>
            <text x="330" y="135" text-anchor="middle" font-size="11" fill="#666">[3]</text>
            <text x="410" y="135" text-anchor="middle" font-size="11" fill="#666">[4]</text>
            <text x="90" y="150" text-anchor="middle" font-size="10" fill="#999">1000</text>
            <text x="170" y="150" text-anchor="middle" font-size="10" fill="#999">1004</text>
            <text x="250" y="150" text-anchor="middle" font-size="10" fill="#999">1008</text>
            <text x="330" y="150" text-anchor="middle" font-size="10" fill="#999">1012</text>
            <text x="410" y="150" text-anchor="middle" font-size="10" fill="#999">1016</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Time complexities', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Access</strong> by index: <code>O(1)</code> — direct memory math',
          '<strong>Search</strong> for value: <code>O(n)</code> — must scan',
          '<strong>Insert</strong> at end: <code>O(1)</code> — if there is room',
          '<strong>Insert</strong> at beginning: <code>O(n)</code> — must shift everything right',
          '<strong>Delete</strong> at index: <code>O(n)</code> — must shift everything left',
        ]},
        { type: 'heading', text: 'Iterating over an array', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">int</span>[] nums = { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span> };

<span class="com">// Classic for-loop</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; nums.length; i++) {
  System.out.println(nums[i]);
}

<span class="com">// Enhanced for-loop (when index doesn't matter)</span>
<span class="kw">for</span> (<span class="ty">int</span> n : nums) {
  System.out.println(n);
}` },
        { type: 'heading', text: 'Finding the maximum', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">int</span> <span class="fn">findMax</span>(<span class="ty">int</span>[] arr) {
  <span class="ty">int</span> max = arr[<span class="num">0</span>];
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i &lt; arr.length; i++) {
    <span class="kw">if</span> (arr[i] &gt; max) max = arr[i];
  }
  <span class="kw">return</span> max;
}` },
        { type: 'callout', kind: 'tip', html: 'This pattern of "start with the first element, compare each remaining one" is everywhere in array algorithms.' },
        { type: 'heading', text: 'Reversing an array in place', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">reverse</span>(<span class="ty">int</span>[] arr) {
  <span class="ty">int</span> left = <span class="num">0</span>, right = arr.length - <span class="num">1</span>;
  <span class="kw">while</span> (left &lt; right) {
    <span class="ty">int</span> tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}` },
        { type: 'heading', text: 'Strengths and weaknesses', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Fast index access (O(1)) and cache-friendly memory',
          'Simple to reason about',
          'Fixed size — you must know it up front',
          'Inserting/removing in the middle is slow',
        ]},
        { type: 'callout', kind: 'success', html: 'Up next: <strong>Dynamic Arrays</strong> — arrays that can grow!' },
      ],
    },

    // ============================================================
    // CHAPTER 4: DYNAMIC ARRAYS
    // ============================================================
    {
      id: 'dsa-c4',
      title: 'Dynamic Arrays',
      icon: '🪄',
      sections: [
        { type: 'heading', text: 'When you do not know the size up front', level: 1 },
        { type: 'para', html: 'Regular arrays in Java have a <strong>fixed size</strong>. But what if we don\'t know how many items we will have? Enter the <strong>dynamic array</strong> — in Java, this is <code>ArrayList</code>.' },
        { type: 'code', lang: 'java', code: `<span class="ty">ArrayList</span>&lt;<span class="ty">Integer</span>&gt; list = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
list.add(<span class="num">10</span>);
list.add(<span class="num">20</span>);
list.add(<span class="num">30</span>);
System.out.println(list.size()); <span class="com">// 3</span>
System.out.println(list.get(<span class="num">1</span>)); <span class="com">// 20</span>` },
        { type: 'heading', text: 'How does it grow?', level: 2 },
        { type: 'para', html: 'Internally, an <code>ArrayList</code> wraps a regular array. When that array fills up, it allocates a <strong>bigger one</strong> (usually 1.5× or 2× the size), copies the old elements over, and discards the old one.' },
        { type: 'image', alt: 'Dynamic array growth', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#333">When full, allocate 2x and copy</text>
          <g transform="translate(20 50)">
            <rect width="40" height="40" fill="#7c4dff"/>
            <rect x="40" width="40" height="40" fill="#7c4dff"/>
            <rect x="80" width="40" height="40" fill="#7c4dff"/>
            <rect x="120" width="40" height="40" fill="#7c4dff"/>
            <text x="80" y="65" text-anchor="middle" font-size="11" fill="#666">capacity = 4 (full)</text>
          </g>
          <text x="240" y="75" font-size="22" fill="#7c4dff">→</text>
          <g transform="translate(280 50)">
            <rect width="40" height="40" fill="#7c4dff"/>
            <rect x="40" width="40" height="40" fill="#7c4dff"/>
            <rect x="80" width="40" height="40" fill="#7c4dff"/>
            <rect x="120" width="40" height="40" fill="#7c4dff"/>
            <rect x="160" width="40" height="40" fill="#58cc02"/>
            <rect x="200" width="40" height="40" fill="#eee" stroke="#aaa"/>
            <rect x="240" width="40" height="40" fill="#eee" stroke="#aaa"/>
            <rect x="280" width="40" height="40" fill="#eee" stroke="#aaa"/>
            <text x="160" y="65" text-anchor="middle" font-size="11" fill="#666">capacity = 8</text>
          </g>
          <text x="300" y="170" text-anchor="middle" font-size="12" fill="#666">The green cell is the new element; gray cells are unused capacity.</text>
        </svg>` },
        { type: 'heading', text: 'Amortized analysis', level: 2 },
        { type: 'para', html: 'Most <code>add()</code> calls are <code>O(1)</code>. But occasionally, when the array is full, we trigger a copy — which is <code>O(n)</code>. So... is <code>add</code> really O(1)?' },
        { type: 'callout', kind: 'info', html: 'Yes, on average! The expensive copies happen rarely enough that the <em>amortized</em> (averaged-out) cost of each <code>add</code> is <strong>O(1)</strong>.' },
        { type: 'heading', text: 'Pre-sizing for performance', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// If you know roughly how many items, set initial capacity</span>
<span class="ty">ArrayList</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="num">10_000</span>);
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10_000</span>; i++) {
  names.add(<span class="str">"user-"</span> + i);
}
<span class="com">// No resizes happen — faster!</span>` },
        { type: 'heading', text: 'When to use ArrayList vs int[]', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Use <code>int[]</code> when size is fixed and you need maximum speed',
          'Use <code>ArrayList</code> when you do not know the size or it changes',
          '<code>ArrayList</code> can only hold objects, not primitives directly',
          '<code>int[]</code> uses less memory (no autoboxing)',
        ]},
        { type: 'heading', text: 'Common operations', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">ArrayList</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
nums.add(<span class="num">5</span>);              <span class="com">// append</span>
nums.add(<span class="num">0</span>, <span class="num">3</span>);          <span class="com">// insert at index 0 — O(n)</span>
nums.set(<span class="num">0</span>, <span class="num">9</span>);          <span class="com">// replace at index — O(1)</span>
nums.remove(<span class="num">0</span>);           <span class="com">// remove at index — O(n)</span>
<span class="kw">boolean</span> has = nums.contains(<span class="num">5</span>); <span class="com">// O(n)</span>` },
        { type: 'callout', kind: 'tip', html: 'Adding at the end is fast. Adding in the middle or at the front is slow because everything after must shift.' },
        { type: 'heading', text: 'Key takeaways', level: 2 },
        { type: 'list', kind: 'check', items: [
          'ArrayList grows automatically by allocating a bigger backing array',
          'add at end is amortized O(1)',
          'Random access is still O(1)',
          'Pre-size when you can to avoid resizes',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 5: 2D ARRAYS / MATRICES
    // ============================================================
    {
      id: 'dsa-c5',
      title: '2D Arrays / Matrices',
      icon: '🔲',
      sections: [
        { type: 'heading', text: 'Arrays of arrays', level: 1 },
        { type: 'para', html: 'A <strong>2D array</strong> is just an array where each element is itself an array. We use them for grids, matrices, game boards, image pixels, and tables.' },
        { type: 'code', lang: 'java', code: `<span class="com">// 3 rows, 4 columns</span>
<span class="ty">int</span>[][] grid = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">3</span>][<span class="num">4</span>];

<span class="com">// Or with initial values</span>
<span class="ty">int</span>[][] mat = {
  { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> },
  { <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span> },
  { <span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span> }
};

<span class="ty">int</span> middle = mat[<span class="num">1</span>][<span class="num">1</span>]; <span class="com">// 5</span>` },
        { type: 'image', alt: '2D array grid', svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="#333">A 3x3 matrix</text>
          <g transform="translate(100 40)">
            <rect width="60" height="50" fill="#7c4dff"/><text x="30" y="32" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">1</text>
            <rect x="60" width="60" height="50" fill="#7c4dff"/><text x="90" y="32" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">2</text>
            <rect x="120" width="60" height="50" fill="#7c4dff"/><text x="150" y="32" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">3</text>
            <rect y="50" width="60" height="50" fill="#1cb0f6"/><text x="30" y="82" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">4</text>
            <rect x="60" y="50" width="60" height="50" fill="#1cb0f6"/><text x="90" y="82" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">5</text>
            <rect x="120" y="50" width="60" height="50" fill="#1cb0f6"/><text x="150" y="82" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">6</text>
            <rect y="100" width="60" height="50" fill="#58cc02"/><text x="30" y="132" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">7</text>
            <rect x="60" y="100" width="60" height="50" fill="#58cc02"/><text x="90" y="132" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">8</text>
            <rect x="120" y="100" width="60" height="50" fill="#58cc02"/><text x="150" y="132" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">9</text>
            <text x="-20" y="32" font-size="11" fill="#666">row 0</text>
            <text x="-20" y="82" font-size="11" fill="#666">row 1</text>
            <text x="-20" y="132" font-size="11" fill="#666">row 2</text>
            <text x="30" y="170" text-anchor="middle" font-size="11" fill="#666">col 0</text>
            <text x="90" y="170" text-anchor="middle" font-size="11" fill="#666">col 1</text>
            <text x="150" y="170" text-anchor="middle" font-size="11" fill="#666">col 2</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Row-major traversal', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; mat.length; r++) {
  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; mat[r].length; c++) {
    System.out.print(mat[r][c] + <span class="str">" "</span>);
  }
  System.out.println();
}` },
        { type: 'callout', kind: 'tip', html: 'Row-major order matches Java\'s memory layout, so it is usually <strong>faster</strong> than column-major due to cache friendliness.' },
        { type: 'heading', text: 'Transposing a matrix', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">int</span>[][] <span class="fn">transpose</span>(<span class="ty">int</span>[][] m) {
  <span class="ty">int</span> rows = m.length, cols = m[<span class="num">0</span>].length;
  <span class="ty">int</span>[][] t = <span class="kw">new</span> <span class="ty">int</span>[cols][rows];
  <span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; rows; r++)
    <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; cols; c++)
      t[c][r] = m[r][c];
  <span class="kw">return</span> t;
}` },
        { type: 'heading', text: 'Jagged arrays', level: 2 },
        { type: 'para', html: 'In Java, rows don\'t all need to be the same length. This is called a <strong>jagged array</strong>:' },
        { type: 'code', lang: 'java', code: `<span class="ty">int</span>[][] jagged = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">3</span>][];
jagged[<span class="num">0</span>] = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">2</span>];   <span class="com">// row 0 has 2 cols</span>
jagged[<span class="num">1</span>] = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">5</span>];   <span class="com">// row 1 has 5 cols</span>
jagged[<span class="num">2</span>] = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">1</span>];   <span class="com">// row 2 has 1 col</span>` },
        { type: 'heading', text: 'When to use 2D arrays', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Grid-based games (chess, tic-tac-toe, Minesweeper)',
          'Image processing (each pixel is an [r][g][b] entry)',
          'Math: matrices for linear algebra and transformations',
          'Dynamic programming tables',
        ]},
        { type: 'callout', kind: 'warn', html: 'Iterating column-by-column on a huge matrix can be much slower than row-by-row due to <strong>cache misses</strong>.' },
      ],
    },

    // ============================================================
    // CHAPTER 6: SINGLY LINKED LISTS
    // ============================================================
    {
      id: 'dsa-c6',
      title: 'Singly Linked Lists',
      icon: '🔗',
      sections: [
        { type: 'heading', text: 'A different way to store sequences', level: 1 },
        { type: 'para', html: 'Arrays store elements <em>side-by-side</em> in memory. A <strong>linked list</strong> does the opposite: each element lives anywhere in memory, and stores a pointer to the next.' },
        { type: 'widget', name: 'linked-list-vis', props: {} },
        { type: 'heading', text: 'The Node class', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Node</span> {
  <span class="ty">int</span> value;
  <span class="ty">Node</span> next;

  <span class="ty">Node</span>(<span class="ty">int</span> value) {
    <span class="kw">this</span>.value = value;
    <span class="kw">this</span>.next = <span class="kw">null</span>;
  }
}` },
        { type: 'para', html: 'Each <code>Node</code> holds a value plus a <code>next</code> reference. A linked list keeps track of just the <strong>head</strong> — the first node.' },
        { type: 'image', alt: 'Linked list diagram', svg: `<svg viewBox="0 0 600 130" xmlns="http://www.w3.org/2000/svg">
          <text x="30" y="65" font-size="13" fill="#666">head</text>
          <text x="30" y="80" font-size="20">→</text>
          <g transform="translate(70 35)">
            <rect width="90" height="50" fill="#7c4dff" rx="6"/>
            <text x="22" y="32" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">10</text>
            <line x1="44" y1="0" x2="44" y2="50" stroke="#fff"/>
            <text x="66" y="32" text-anchor="middle" fill="#fff" font-size="18">→</text>
          </g>
          <g transform="translate(200 35)">
            <rect width="90" height="50" fill="#7c4dff" rx="6"/>
            <text x="22" y="32" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">20</text>
            <line x1="44" y1="0" x2="44" y2="50" stroke="#fff"/>
            <text x="66" y="32" text-anchor="middle" fill="#fff" font-size="18">→</text>
          </g>
          <g transform="translate(330 35)">
            <rect width="90" height="50" fill="#7c4dff" rx="6"/>
            <text x="22" y="32" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">30</text>
            <line x1="44" y1="0" x2="44" y2="50" stroke="#fff"/>
            <text x="66" y="32" text-anchor="middle" fill="#fff" font-size="18">→</text>
          </g>
          <g transform="translate(460 35)">
            <rect width="90" height="50" fill="#7c4dff" rx="6"/>
            <text x="22" y="32" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">40</text>
            <line x1="44" y1="0" x2="44" y2="50" stroke="#fff"/>
            <text x="66" y="32" text-anchor="middle" fill="#fff" font-size="14">∅</text>
          </g>
        </svg>` },
        { type: 'heading', text: 'Traversing the list', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">printAll</span>(<span class="ty">Node</span> head) {
  <span class="ty">Node</span> cur = head;
  <span class="kw">while</span> (cur != <span class="kw">null</span>) {
    System.out.println(cur.value);
    cur = cur.next;
  }
}` },
        { type: 'callout', kind: 'tip', html: 'Always walk with a <code>cur</code> pointer, not the head — otherwise you lose track of where the list starts.' },
        { type: 'heading', text: 'Inserting at the head', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">Node</span> <span class="fn">prepend</span>(<span class="ty">Node</span> head, <span class="ty">int</span> value) {
  <span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(value);
  n.next = head;
  <span class="kw">return</span> n;  <span class="com">// new head</span>
}` },
        { type: 'para', html: 'This is <code>O(1)</code> — no shifting needed. Compare with an array: inserting at index 0 is O(n).' },
        { type: 'heading', text: 'Inserting at the tail', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">Node</span> <span class="fn">append</span>(<span class="ty">Node</span> head, <span class="ty">int</span> value) {
  <span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(value);
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span> n;
  <span class="ty">Node</span> cur = head;
  <span class="kw">while</span> (cur.next != <span class="kw">null</span>) cur = cur.next;
  cur.next = n;
  <span class="kw">return</span> head;
}` },
        { type: 'callout', kind: 'warn', html: 'Appending walks the whole list — that is <strong>O(n)</strong>. If you need fast appends, also track a <code>tail</code> pointer.' },
        { type: 'heading', text: 'Deleting a node by value', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">Node</span> <span class="fn">remove</span>(<span class="ty">Node</span> head, <span class="ty">int</span> value) {
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">null</span>;
  <span class="kw">if</span> (head.value == value) <span class="kw">return</span> head.next;
  <span class="ty">Node</span> cur = head;
  <span class="kw">while</span> (cur.next != <span class="kw">null</span> &amp;&amp; cur.next.value != value) {
    cur = cur.next;
  }
  <span class="kw">if</span> (cur.next != <span class="kw">null</span>) cur.next = cur.next.next;
  <span class="kw">return</span> head;
}` },
        { type: 'heading', text: 'Reversing a linked list', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">Node</span> <span class="fn">reverse</span>(<span class="ty">Node</span> head) {
  <span class="ty">Node</span> prev = <span class="kw">null</span>, cur = head;
  <span class="kw">while</span> (cur != <span class="kw">null</span>) {
    <span class="ty">Node</span> next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  <span class="kw">return</span> prev;
}` },
        { type: 'callout', kind: 'info', html: 'Reversing a linked list is a classic interview question. Master the three-pointer dance (<code>prev</code>, <code>cur</code>, <code>next</code>) and you can solve many variants.' },
        { type: 'heading', text: 'Key takeaways', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Each node points to the next; head is the entry point',
          'Insertion at head: O(1)',
          'Search and tail-insert: O(n)',
          'No wasted capacity, but uses more memory per element',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 7: DOUBLY & CIRCULAR LINKED LISTS
    // ============================================================
    {
      id: 'dsa-c7',
      title: 'Doubly & Circular Linked Lists',
      icon: '↔️',
      sections: [
        { type: 'heading', text: 'Linking backwards too', level: 1 },
        { type: 'para', html: 'A singly linked list only goes forward. A <strong>doubly linked list</strong> adds a <code>prev</code> pointer to each node — letting us traverse in both directions.' },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">DNode</span> {
  <span class="ty">int</span> value;
  <span class="ty">DNode</span> prev;
  <span class="ty">DNode</span> next;
}` },
        { type: 'image', alt: 'Doubly linked list', svg: `<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40 40)">
            <rect width="110" height="60" fill="#1cb0f6" rx="6"/>
            <text x="55" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">10</text>
          </g>
          <g transform="translate(200 40)">
            <rect width="110" height="60" fill="#1cb0f6" rx="6"/>
            <text x="55" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">20</text>
          </g>
          <g transform="translate(360 40)">
            <rect width="110" height="60" fill="#1cb0f6" rx="6"/>
            <text x="55" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">30</text>
          </g>
          <line x1="150" y1="60" x2="200" y2="60" stroke="#444" stroke-width="2" marker-end="url(#arr)"/>
          <line x1="200" y1="80" x2="150" y2="80" stroke="#444" stroke-width="2" marker-end="url(#arr)"/>
          <line x1="310" y1="60" x2="360" y2="60" stroke="#444" stroke-width="2" marker-end="url(#arr)"/>
          <line x1="360" y1="80" x2="310" y2="80" stroke="#444" stroke-width="2" marker-end="url(#arr)"/>
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="#444"/>
            </marker>
          </defs>
          <text x="300" y="125" text-anchor="middle" font-size="12" fill="#666">Each node knows both its previous and next neighbor</text>
        </svg>` },
        { type: 'heading', text: 'Why bother with prev?', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Traverse <strong>backwards</strong> from any node',
          'Delete a node in <code>O(1)</code> if you already have a reference to it',
          'Easy to implement deques and LRU caches',
        ]},
        { type: 'heading', text: 'Inserting after a node', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">insertAfter</span>(<span class="ty">DNode</span> node, <span class="ty">int</span> value) {
  <span class="ty">DNode</span> n = <span class="kw">new</span> <span class="ty">DNode</span>();
  n.value = value;
  n.prev = node;
  n.next = node.next;
  <span class="kw">if</span> (node.next != <span class="kw">null</span>) node.next.prev = n;
  node.next = n;
}` },
        { type: 'heading', text: 'Deleting a known node', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">delete</span>(<span class="ty">DNode</span> n) {
  <span class="kw">if</span> (n.prev != <span class="kw">null</span>) n.prev.next = n.next;
  <span class="kw">if</span> (n.next != <span class="kw">null</span>) n.next.prev = n.prev;
}` },
        { type: 'callout', kind: 'success', html: 'In a singly linked list, deleting a node requires finding its predecessor (O(n) walk). In a doubly linked list, it is <strong>O(1)</strong>!' },
        { type: 'heading', text: 'Circular linked lists', level: 2 },
        { type: 'para', html: 'In a <strong>circular</strong> linked list, the tail\'s <code>next</code> points back to the head, forming a loop. Useful for round-robin scheduling, music playlists set to repeat, and certain ring buffers.' },
        { type: 'image', alt: 'Circular linked list', svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="110" r="80" fill="none" stroke="#7c4dff" stroke-width="2" stroke-dasharray="4 4"/>
          <g><circle cx="200" cy="40" r="22" fill="#7c4dff"/><text x="200" y="46" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">A</text></g>
          <g><circle cx="270" cy="110" r="22" fill="#7c4dff"/><text x="270" y="116" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">B</text></g>
          <g><circle cx="200" cy="180" r="22" fill="#7c4dff"/><text x="200" y="186" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">C</text></g>
          <g><circle cx="130" cy="110" r="22" fill="#7c4dff"/><text x="130" y="116" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">D</text></g>
          <text x="200" y="208" text-anchor="middle" font-size="12" fill="#666">D loops back to A</text>
        </svg>` },
        { type: 'heading', text: 'When to use each', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Singly</strong>: lightweight, simple stacks/queues',
          '<strong>Doubly</strong>: bi-directional traversal, fast deletion, LRU caches',
          '<strong>Circular</strong>: cyclic scheduling, ring buffers',
        ]},
        { type: 'callout', kind: 'warn', html: 'Be careful with circular lists — a naive traversal will <strong>loop forever</strong>. Always have a stopping condition.' },
      ],
    },

    // ============================================================
    // CHAPTER 8: ARRAY VS LINKED LIST
    // ============================================================
    {
      id: 'dsa-c8',
      title: 'Array vs Linked List',
      icon: '⚖️',
      sections: [
        { type: 'heading', text: 'Picking the right tool', level: 1 },
        { type: 'para', html: 'Arrays and linked lists both store sequences, but they have wildly different performance trade-offs. The right choice depends on which operations you do most.' },
        { type: 'image', alt: 'Array vs linked list comparison', svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="280" fill="#fafafa"/>
          <text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">Operation comparison</text>
          <rect x="30" y="40" width="180" height="32" fill="#7c4dff"/>
          <text x="120" y="62" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Operation</text>
          <rect x="210" y="40" width="180" height="32" fill="#1cb0f6"/>
          <text x="300" y="62" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Array</text>
          <rect x="390" y="40" width="180" height="32" fill="#58cc02"/>
          <text x="480" y="62" text-anchor="middle" fill="#fff" font-size="13" font-weight="700">Linked List</text>
          <g font-size="13">
            <text x="40" y="95">Access by index</text><text x="300" y="95" text-anchor="middle" fill="#2c8b00" font-weight="700">O(1)</text><text x="480" y="95" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text>
            <text x="40" y="125">Insert at head</text><text x="300" y="125" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text><text x="480" y="125" text-anchor="middle" fill="#2c8b00" font-weight="700">O(1)</text>
            <text x="40" y="155">Insert at tail</text><text x="300" y="155" text-anchor="middle" fill="#2c8b00" font-weight="700">O(1)*</text><text x="480" y="155" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text>
            <text x="40" y="185">Delete at head</text><text x="300" y="185" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text><text x="480" y="185" text-anchor="middle" fill="#2c8b00" font-weight="700">O(1)</text>
            <text x="40" y="215">Search by value</text><text x="300" y="215" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text><text x="480" y="215" text-anchor="middle" fill="#b84141" font-weight="700">O(n)</text>
            <text x="40" y="245">Memory overhead</text><text x="300" y="245" text-anchor="middle" fill="#2c8b00" font-weight="700">Low</text><text x="480" y="245" text-anchor="middle" fill="#b84141" font-weight="700">High (pointers)</text>
          </g>
          <text x="300" y="270" text-anchor="middle" font-size="10" fill="#888">* amortized for dynamic arrays</text>
        </svg>` },
        { type: 'heading', text: 'Cache friendliness', level: 2 },
        { type: 'para', html: 'Modern CPUs prefetch memory in chunks. Arrays sit in <strong>contiguous</strong> memory, so iterating one is <em>very</em> cache-friendly. Linked list nodes scatter all over the heap, causing more cache misses.' },
        { type: 'callout', kind: 'tip', html: 'In practice, iterating a million-element array is often <strong>10x faster</strong> than iterating a linked list of the same size — even though both are O(n)!' },
        { type: 'heading', text: 'When to use an array', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You need fast random access (lookups by index)',
          'You iterate often',
          'Size is bounded or known up front',
          'Memory matters',
        ]},
        { type: 'heading', text: 'When to use a linked list', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You insert/remove at the front frequently',
          'You build queues or stacks where size is unknown',
          'You implement an LRU cache or undo history',
        ]},
        { type: 'callout', kind: 'info', html: 'In most modern code, <code>ArrayList</code> beats <code>LinkedList</code> in real benchmarks. Linked lists shine in <em>specialized</em> cases.' },
      ],
    },

    // ============================================================
    // CHAPTER 9: STACKS
    // ============================================================
    {
      id: 'dsa-c9',
      title: 'Stacks',
      icon: '📚',
      sections: [
        { type: 'heading', text: 'Last in, first out', level: 1 },
        { type: 'para', html: 'A <strong>stack</strong> is a data structure that follows <code>LIFO</code> — Last In, First Out. Imagine a stack of plates: you add and remove from the <em>top</em>.' },
        { type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } },
        { type: 'heading', text: 'The three operations', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>push(x)</code> — add x on top',
          '<code>pop()</code> — remove and return the top',
          '<code>peek()</code> — look at the top without removing',
        ]},
        { type: 'para', html: 'All three are <code>O(1)</code>.' },
        { type: 'heading', text: 'Using Java\'s built-in stack', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
stack.push(<span class="num">1</span>);
stack.push(<span class="num">2</span>);
stack.push(<span class="num">3</span>);
System.out.println(stack.peek()); <span class="com">// 3</span>
System.out.println(stack.pop());  <span class="com">// 3</span>
System.out.println(stack.pop());  <span class="com">// 2</span>` },
        { type: 'callout', kind: 'tip', html: 'Prefer <code>ArrayDeque</code> over the older <code>java.util.Stack</code> — it is faster and not thread-synchronized by default.' },
        { type: 'heading', text: 'Implementing a stack from scratch', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Stack</span> {
  <span class="kw">private</span> <span class="ty">int</span>[] data = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">16</span>];
  <span class="kw">private</span> <span class="ty">int</span> size = <span class="num">0</span>;

  <span class="kw">public</span> <span class="kw">void</span> <span class="fn">push</span>(<span class="ty">int</span> x) {
    <span class="kw">if</span> (size == data.length) {
      data = java.util.Arrays.copyOf(data, data.length * <span class="num">2</span>);
    }
    data[size++] = x;
  }
  <span class="kw">public</span> <span class="ty">int</span> <span class="fn">pop</span>() {
    <span class="kw">return</span> data[--size];
  }
  <span class="kw">public</span> <span class="ty">int</span> <span class="fn">peek</span>() {
    <span class="kw">return</span> data[size - <span class="num">1</span>];
  }
}` },
        { type: 'heading', text: 'Classic use case: balanced parentheses', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">boolean</span> <span class="fn">isBalanced</span>(<span class="ty">String</span> s) {
  <span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">char</span> c : s.toCharArray()) {
    <span class="kw">if</span> (c == <span class="str">'('</span>) stack.push(<span class="str">')'</span>);
    <span class="kw">else if</span> (c == <span class="str">'['</span>) stack.push(<span class="str">']'</span>);
    <span class="kw">else if</span> (c == <span class="str">'{'</span>) stack.push(<span class="str">'}'</span>);
    <span class="kw">else if</span> (stack.isEmpty() || stack.pop() != c) <span class="kw">return</span> <span class="kw">false</span>;
  }
  <span class="kw">return</span> stack.isEmpty();
}` },
        { type: 'heading', text: 'The call stack', level: 2 },
        { type: 'para', html: 'Every program already uses a stack: the <strong>call stack</strong>. Each function call pushes a stack frame; each return pops one. This is why deeply recursive functions can throw <code>StackOverflowError</code>.' },
        { type: 'callout', kind: 'info', html: 'The browser\'s <strong>back button</strong> is also a stack — every page you visit gets pushed, and "back" pops.' },
        { type: 'heading', text: 'More applications', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Undo/redo functionality',
          'Expression evaluation (postfix, infix-to-postfix)',
          'Depth-first search (DFS) in graphs',
          'Backtracking algorithms',
        ]},
        { type: 'callout', kind: 'success', html: 'Stacks are simple, but they unlock a huge family of algorithms. Get comfortable with them!' },
      ],
    },

    // ============================================================
    // CHAPTER 10: QUEUES
    // ============================================================
    {
      id: 'dsa-c10',
      title: 'Queues',
      icon: '🚶',
      sections: [
        { type: 'heading', text: 'First in, first out', level: 1 },
        { type: 'para', html: 'A <strong>queue</strong> is the opposite of a stack — <code>FIFO</code>, First In, First Out. Like a line at a coffee shop: the first person in line is served first.' },
        { type: 'widget', name: 'stack-queue-vis', props: { kind: 'queue' } },
        { type: 'heading', text: 'Core operations', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>enqueue(x)</code> — add x at the back',
          '<code>dequeue()</code> — remove from the front',
          '<code>peek()</code> — look at the front',
        ]},
        { type: 'heading', text: 'Java\'s queue', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
q.offer(<span class="num">1</span>);
q.offer(<span class="num">2</span>);
q.offer(<span class="num">3</span>);
System.out.println(q.poll()); <span class="com">// 1</span>
System.out.println(q.poll()); <span class="com">// 2</span>` },
        { type: 'callout', kind: 'tip', html: '<code>offer</code> and <code>poll</code> are the safe versions — they return false/null on failure instead of throwing.' },
        { type: 'heading', text: 'Where queues shine', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Breadth-first search (BFS)</strong> in graphs and trees',
          'Task scheduling (print queue, OS scheduler)',
          'Buffering data between producer and consumer',
          'Order processing systems',
        ]},
        { type: 'heading', text: 'Implementing a queue with linked list', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Queue</span> {
  <span class="kw">private</span> <span class="ty">Node</span> head, tail;

  <span class="kw">public</span> <span class="kw">void</span> <span class="fn">enqueue</span>(<span class="ty">int</span> x) {
    <span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(x);
    <span class="kw">if</span> (tail == <span class="kw">null</span>) head = tail = n;
    <span class="kw">else</span> { tail.next = n; tail = n; }
  }
  <span class="kw">public</span> <span class="ty">int</span> <span class="fn">dequeue</span>() {
    <span class="ty">int</span> x = head.value;
    head = head.next;
    <span class="kw">if</span> (head == <span class="kw">null</span>) tail = <span class="kw">null</span>;
    <span class="kw">return</span> x;
  }
}` },
        { type: 'heading', text: 'Circular array queue', level: 2 },
        { type: 'para', html: 'Array-backed queues use a <strong>circular buffer</strong>: when the back pointer reaches the end, it wraps around to the start. This avoids shifting elements.' },
        { type: 'image', alt: 'Circular buffer queue', svg: `<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">Circular buffer (head=2, tail=5)</text>
          <g>
            <rect x="50" y="50" width="60" height="60" fill="#eee" stroke="#aaa"/>
            <rect x="110" y="50" width="60" height="60" fill="#eee" stroke="#aaa"/>
            <rect x="170" y="50" width="60" height="60" fill="#7c4dff"/><text x="200" y="88" text-anchor="middle" fill="#fff" font-weight="700">A</text>
            <rect x="230" y="50" width="60" height="60" fill="#7c4dff"/><text x="260" y="88" text-anchor="middle" fill="#fff" font-weight="700">B</text>
            <rect x="290" y="50" width="60" height="60" fill="#7c4dff"/><text x="320" y="88" text-anchor="middle" fill="#fff" font-weight="700">C</text>
            <rect x="350" y="50" width="60" height="60" fill="#eee" stroke="#aaa"/>
            <rect x="410" y="50" width="60" height="60" fill="#eee" stroke="#aaa"/>
            <rect x="470" y="50" width="60" height="60" fill="#eee" stroke="#aaa"/>
            <text x="200" y="135" text-anchor="middle" font-size="11" fill="#58cc02" font-weight="700">head</text>
            <text x="380" y="135" text-anchor="middle" font-size="11" fill="#ff4b4b" font-weight="700">tail</text>
          </g>
        </svg>` },
        { type: 'callout', kind: 'info', html: 'BFS is the queue\'s most famous application. We will use it later in trees and graphs.' },
        { type: 'heading', text: 'Key takeaways', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Queue is FIFO',
          'enqueue and dequeue are both O(1)',
          'Essential for BFS and task scheduling',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 11: DEQUES & PRIORITY QUEUES
    // ============================================================
    {
      id: 'dsa-c11',
      title: 'Deques & Priority Queues',
      icon: '🎯',
      sections: [
        { type: 'heading', text: 'The deque: best of both worlds', level: 1 },
        { type: 'para', html: 'A <strong>deque</strong> (double-ended queue, pronounced "deck") supports adding and removing from <em>both</em> ends in O(1). Java\'s <code>ArrayDeque</code> is the go-to implementation.' },
        { type: 'code', lang: 'java', code: `<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; dq = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
dq.addFirst(<span class="num">1</span>);
dq.addLast(<span class="num">2</span>);
dq.addFirst(<span class="num">0</span>);
<span class="com">// dq is now [0, 1, 2]</span>
System.out.println(dq.pollFirst()); <span class="com">// 0</span>
System.out.println(dq.pollLast());  <span class="com">// 2</span>` },
        { type: 'callout', kind: 'tip', html: '<code>ArrayDeque</code> can act as a stack, queue, or deque. It is one of Java\'s most versatile collections.' },
        { type: 'heading', text: 'Use cases for deques', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Sliding-window algorithms',
          'Undo/redo where you can also limit history size from the front',
          'Steal-work schedulers in parallel computing',
        ]},
        { type: 'heading', text: 'Priority queue: serve the most important first', level: 2 },
        { type: 'para', html: 'A <strong>priority queue</strong> always returns the <em>highest-priority</em> item, not just the oldest. Think of an emergency room: critical patients go first, regardless of arrival order.' },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(); <span class="com">// min-heap</span>
pq.offer(<span class="num">5</span>);
pq.offer(<span class="num">1</span>);
pq.offer(<span class="num">3</span>);
System.out.println(pq.poll()); <span class="com">// 1 (smallest)</span>
System.out.println(pq.poll()); <span class="com">// 3</span>` },
        { type: 'heading', text: 'Max-heap version', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; maxPq =
  <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.reverseOrder());

maxPq.offer(<span class="num">5</span>);
maxPq.offer(<span class="num">1</span>);
maxPq.offer(<span class="num">3</span>);
System.out.println(maxPq.poll()); <span class="com">// 5 (largest)</span>` },
        { type: 'callout', kind: 'info', html: 'Internally, priority queues use a <strong>heap</strong> — a special tree structure we will cover in chapter 18.' },
        { type: 'heading', text: 'Operation complexities', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>offer</code>: O(log n)',
          '<code>poll</code>: O(log n)',
          '<code>peek</code>: O(1)',
        ]},
        { type: 'heading', text: 'Classic application: Top-K elements', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; <span class="fn">topK</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> k) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> n : arr) {
    pq.offer(n);
    <span class="kw">if</span> (pq.size() &gt; k) pq.poll(); <span class="com">// keep k largest</span>
  }
  <span class="kw">return</span> <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(pq);
}` },
        { type: 'callout', kind: 'success', html: 'Priority queues power Dijkstra\'s shortest path, A*, Huffman coding, and many scheduling algorithms.' },
      ],
    },

    // ============================================================
    // CHAPTER 12: HASH TABLES
    // ============================================================
    {
      id: 'dsa-c12',
      title: 'Hash Tables',
      icon: '🗝️',
      sections: [
        { type: 'heading', text: 'The magic of O(1) lookups', level: 1 },
        { type: 'para', html: 'A <strong>hash table</strong> (or <em>hash map</em>) is the workhorse of modern programming. It lets you store key-value pairs and retrieve them in <strong>O(1) average time</strong>.' },
        { type: 'code', lang: 'java', code: `<span class="ty">HashMap</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; map = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
map.put(<span class="str">"alice"</span>, <span class="num">30</span>);
map.put(<span class="str">"bob"</span>, <span class="num">25</span>);
System.out.println(map.get(<span class="str">"alice"</span>)); <span class="com">// 30</span>
System.out.println(map.containsKey(<span class="str">"bob"</span>)); <span class="com">// true</span>` },
        { type: 'heading', text: 'How does it work?', level: 2 },
        { type: 'para', html: 'At its heart, a hash table is an <strong>array</strong> of "buckets". To store key <code>k</code>:' },
        { type: 'list', kind: 'numbered', items: [
          'Compute <code>h = hash(k)</code> — a number derived from the key',
          'Compute <code>bucket = h % array.length</code>',
          'Store the entry at that bucket',
        ]},
        { type: 'image', alt: 'Hash table buckets', svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">Hash table with chaining</text>
          <g>
            <rect x="40" y="40" width="60" height="30" fill="#7c4dff"/><text x="70" y="60" text-anchor="middle" fill="#fff">0</text>
            <rect x="40" y="70" width="60" height="30" fill="#7c4dff"/><text x="70" y="90" text-anchor="middle" fill="#fff">1</text>
            <rect x="40" y="100" width="60" height="30" fill="#7c4dff"/><text x="70" y="120" text-anchor="middle" fill="#fff">2</text>
            <rect x="40" y="130" width="60" height="30" fill="#7c4dff"/><text x="70" y="150" text-anchor="middle" fill="#fff">3</text>
            <rect x="40" y="160" width="60" height="30" fill="#7c4dff"/><text x="70" y="180" text-anchor="middle" fill="#fff">4</text>
          </g>
          <g>
            <rect x="130" y="70" width="100" height="30" fill="#1cb0f6"/><text x="180" y="90" text-anchor="middle" fill="#fff" font-size="12">alice→30</text>
            <rect x="130" y="100" width="100" height="30" fill="#1cb0f6"/><text x="180" y="120" text-anchor="middle" fill="#fff" font-size="12">bob→25</text>
            <rect x="240" y="100" width="100" height="30" fill="#58cc02"/><text x="290" y="120" text-anchor="middle" fill="#fff" font-size="12">dave→40</text>
            <rect x="130" y="160" width="100" height="30" fill="#1cb0f6"/><text x="180" y="180" text-anchor="middle" fill="#fff" font-size="12">carol→17</text>
            <line x1="230" y1="115" x2="240" y2="115" stroke="#444" stroke-width="2"/>
          </g>
          <text x="400" y="120" font-size="12" fill="#666">Collision! Both bob and dave hash to bucket 2 — stored as a chain.</text>
        </svg>` },
        { type: 'heading', text: 'Collisions', level: 2 },
        { type: 'para', html: 'Sometimes two keys hash to the same bucket. This is a <strong>collision</strong>. There are two main ways to handle them:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Chaining</strong>: each bucket holds a linked list (or tree) of entries',
          '<strong>Open addressing</strong>: probe other buckets until an empty one is found',
        ]},
        { type: 'callout', kind: 'info', html: 'Java\'s <code>HashMap</code> uses chaining, and converts long chains to a balanced tree when they grow past 8 entries — to keep worst-case lookup at O(log n).' },
        { type: 'heading', text: 'The hash function', level: 2 },
        { type: 'para', html: 'A good hash function:' },
        { type: 'list', kind: 'check', items: [
          'Distributes keys uniformly across buckets',
          'Is fast to compute',
          'Is deterministic (same input → same output)',
        ]},
        { type: 'code', lang: 'java', code: `<span class="com">// Java's String.hashCode() (roughly)</span>
<span class="kw">public</span> <span class="ty">int</span> <span class="fn">hashCode</span>() {
  <span class="ty">int</span> h = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">char</span> c : value) {
    h = <span class="num">31</span> * h + c;
  }
  <span class="kw">return</span> h;
}` },
        { type: 'heading', text: 'Load factor and rehashing', level: 2 },
        { type: 'para', html: 'When too many entries pile up, lookups slow down. So hash tables track a <em>load factor</em> (entries / buckets). When it exceeds a threshold (Java uses 0.75), the table <strong>doubles</strong> in size and rehashes everything.' },
        { type: 'callout', kind: 'warn', html: 'Rehashing is O(n). Like dynamic arrays, this is amortized away — but a single put can occasionally be slow.' },
        { type: 'heading', text: 'When NOT to use a hash map', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'When you need <strong>sorted</strong> keys (use <code>TreeMap</code>)',
          'When you need to find ranges efficiently',
          'When memory is extremely tight (hash maps have overhead)',
        ]},
        { type: 'callout', kind: 'success', html: 'If you remember only one data structure from this course, make it the hash map. It is everywhere!' },
      ],
    },

    // ============================================================
    // CHAPTER 13: SETS
    // ============================================================
    {
      id: 'dsa-c13',
      title: 'Sets',
      icon: '🎯',
      sections: [
        { type: 'heading', text: 'Collections of unique values', level: 1 },
        { type: 'para', html: 'A <strong>set</strong> stores values where each element appears <em>at most once</em>. Adding a duplicate has no effect.' },
        { type: 'code', lang: 'java', code: `<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; tags = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
tags.add(<span class="str">"java"</span>);
tags.add(<span class="str">"dsa"</span>);
tags.add(<span class="str">"java"</span>); <span class="com">// no effect</span>
System.out.println(tags.size()); <span class="com">// 2</span>
System.out.println(tags.contains(<span class="str">"dsa"</span>)); <span class="com">// true</span>` },
        { type: 'heading', text: 'HashSet vs TreeSet', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>HashSet</code> — backed by a hash table, O(1) add/contains/remove, <strong>unordered</strong>',
          '<code>TreeSet</code> — backed by a red-black tree, O(log n) operations, but elements are kept <strong>sorted</strong>',
          '<code>LinkedHashSet</code> — preserves insertion order, O(1) operations',
        ]},
        { type: 'heading', text: 'Common set operations', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; a = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.of(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; b = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.of(<span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>));

<span class="com">// Union</span>
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; u = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
u.addAll(b); <span class="com">// {1,2,3,4}</span>

<span class="com">// Intersection</span>
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; i = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
i.retainAll(b); <span class="com">// {2,3}</span>

<span class="com">// Difference</span>
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
d.removeAll(b); <span class="com">// {1}</span>` },
        { type: 'callout', kind: 'tip', html: 'Sets are perfect for <strong>deduplication</strong>. Want unique words in a document? Throw them all into a HashSet.' },
        { type: 'heading', text: 'Classic problem: contains duplicate', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">boolean</span> <span class="fn">hasDuplicate</span>(<span class="ty">int</span>[] arr) {
  <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> n : arr) {
    <span class="kw">if</span> (!seen.add(n)) <span class="kw">return</span> <span class="kw">true</span>;
  }
  <span class="kw">return</span> <span class="kw">false</span>;
}` },
        { type: 'callout', kind: 'info', html: '<code>set.add(x)</code> returns false if x was already there. Handy!' },
        { type: 'heading', text: 'When to use what', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Need fast contains-check → HashSet',
          'Need sorted iteration → TreeSet',
          'Need insertion-order iteration → LinkedHashSet',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 14: TREES - TERMINOLOGY
    // ============================================================
    {
      id: 'dsa-c14',
      title: 'Trees — Terminology',
      icon: '🌳',
      sections: [
        { type: 'heading', text: 'What is a tree?', level: 1 },
        { type: 'para', html: 'A <strong>tree</strong> is a hierarchical data structure with one <em>root</em> at the top and branches leading down. Unlike linked lists, each node can have multiple children. Unlike graphs, trees have <strong>no cycles</strong>.' },
        { type: 'image', alt: 'Tree terminology diagram', svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="40" r="22" fill="#7c4dff"/><text x="300" y="46" text-anchor="middle" fill="#fff" font-weight="700">A</text>
          <circle cx="180" cy="120" r="22" fill="#1cb0f6"/><text x="180" y="126" text-anchor="middle" fill="#fff" font-weight="700">B</text>
          <circle cx="420" cy="120" r="22" fill="#1cb0f6"/><text x="420" y="126" text-anchor="middle" fill="#fff" font-weight="700">C</text>
          <circle cx="100" cy="200" r="22" fill="#58cc02"/><text x="100" y="206" text-anchor="middle" fill="#fff" font-weight="700">D</text>
          <circle cx="220" cy="200" r="22" fill="#58cc02"/><text x="220" y="206" text-anchor="middle" fill="#fff" font-weight="700">E</text>
          <circle cx="380" cy="200" r="22" fill="#58cc02"/><text x="380" y="206" text-anchor="middle" fill="#fff" font-weight="700">F</text>
          <circle cx="470" cy="200" r="22" fill="#58cc02"/><text x="470" y="206" text-anchor="middle" fill="#fff" font-weight="700">G</text>
          <line x1="285" y1="55" x2="195" y2="105" stroke="#444" stroke-width="2"/>
          <line x1="315" y1="55" x2="405" y2="105" stroke="#444" stroke-width="2"/>
          <line x1="167" y1="138" x2="113" y2="185" stroke="#444" stroke-width="2"/>
          <line x1="193" y1="138" x2="207" y2="185" stroke="#444" stroke-width="2"/>
          <line x1="408" y1="138" x2="393" y2="185" stroke="#444" stroke-width="2"/>
          <line x1="432" y1="138" x2="458" y2="185" stroke="#444" stroke-width="2"/>
          <text x="20" y="46" font-size="12" fill="#7c4dff" font-weight="700">root (level 0)</text>
          <text x="20" y="126" font-size="12" fill="#1cb0f6" font-weight="700">level 1</text>
          <text x="20" y="206" font-size="12" fill="#58cc02" font-weight="700">leaves</text>
          <text x="300" y="260" text-anchor="middle" font-size="12" fill="#666">A is the root. D, E, F, G are leaves. Height = 2, depth of D = 2.</text>
        </svg>` },
        { type: 'heading', text: 'Glossary', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Root</strong>: the topmost node, with no parent',
          '<strong>Parent</strong>: a node\'s direct ancestor',
          '<strong>Child</strong>: a node directly below another',
          '<strong>Leaf</strong>: a node with no children',
          '<strong>Subtree</strong>: a node plus all its descendants',
          '<strong>Depth</strong> of a node: distance from root',
          '<strong>Height</strong> of a tree: depth of the deepest leaf',
        ]},
        { type: 'heading', text: 'Binary trees', level: 2 },
        { type: 'para', html: 'A <strong>binary tree</strong> is a tree where every node has <em>at most 2 children</em> — typically called <code>left</code> and <code>right</code>.' },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">TreeNode</span> {
  <span class="ty">int</span> value;
  <span class="ty">TreeNode</span> left;
  <span class="ty">TreeNode</span> right;
}` },
        { type: 'heading', text: 'Special binary tree shapes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Full</strong>: every node has 0 or 2 children',
          '<strong>Complete</strong>: every level filled left-to-right (heaps use this)',
          '<strong>Perfect</strong>: all internal nodes have 2 children, all leaves at the same level',
          '<strong>Balanced</strong>: height of left and right subtrees differ by at most 1',
        ]},
        { type: 'callout', kind: 'info', html: 'A balanced binary tree with N nodes has height <code>O(log N)</code>. Unbalanced trees can degenerate to <code>O(N)</code> — just a list!' },
        { type: 'heading', text: 'Where trees show up', level: 2 },
        { type: 'list', kind: 'check', items: [
          'File systems (folders and files)',
          'HTML/XML DOM',
          'Database indexes (B-trees)',
          'Expression parsing',
          'Decision trees in machine learning',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 15: TREE TRAVERSALS
    // ============================================================
    {
      id: 'dsa-c15',
      title: 'Tree Traversals',
      icon: '🚶‍♂️',
      sections: [
        { type: 'heading', text: 'Visiting every node', level: 1 },
        { type: 'para', html: 'How do we visit every node in a tree? There are four common patterns: <em>preorder</em>, <em>inorder</em>, <em>postorder</em>, and <em>level-order</em>.' },
        { type: 'image', alt: 'Tree for traversal example', svg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="40" r="22" fill="#7c4dff"/><text x="200" y="46" text-anchor="middle" fill="#fff" font-weight="700">1</text>
          <circle cx="120" cy="120" r="22" fill="#7c4dff"/><text x="120" y="126" text-anchor="middle" fill="#fff" font-weight="700">2</text>
          <circle cx="280" cy="120" r="22" fill="#7c4dff"/><text x="280" y="126" text-anchor="middle" fill="#fff" font-weight="700">3</text>
          <circle cx="60" cy="200" r="22" fill="#7c4dff"/><text x="60" y="206" text-anchor="middle" fill="#fff" font-weight="700">4</text>
          <circle cx="180" cy="200" r="22" fill="#7c4dff"/><text x="180" y="206" text-anchor="middle" fill="#fff" font-weight="700">5</text>
          <line x1="185" y1="55" x2="135" y2="105" stroke="#444" stroke-width="2"/>
          <line x1="215" y1="55" x2="265" y2="105" stroke="#444" stroke-width="2"/>
          <line x1="107" y1="138" x2="73" y2="185" stroke="#444" stroke-width="2"/>
          <line x1="133" y1="138" x2="167" y2="185" stroke="#444" stroke-width="2"/>
        </svg>` },
        { type: 'heading', text: 'Preorder: root, left, right', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">preorder</span>(<span class="ty">TreeNode</span> node) {
  <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
  System.out.print(node.value + <span class="str">" "</span>); <span class="com">// visit</span>
  <span class="fn">preorder</span>(node.left);
  <span class="fn">preorder</span>(node.right);
}
<span class="com">// Output for tree above: 1 2 4 5 3</span>` },
        { type: 'heading', text: 'Inorder: left, root, right', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">inorder</span>(<span class="ty">TreeNode</span> node) {
  <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="fn">inorder</span>(node.left);
  System.out.print(node.value + <span class="str">" "</span>);
  <span class="fn">inorder</span>(node.right);
}
<span class="com">// Output: 4 2 5 1 3</span>` },
        { type: 'callout', kind: 'tip', html: 'Inorder traversal of a <strong>binary search tree</strong> produces values in <em>sorted</em> order. A very useful property!' },
        { type: 'heading', text: 'Postorder: left, right, root', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">postorder</span>(<span class="ty">TreeNode</span> node) {
  <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="fn">postorder</span>(node.left);
  <span class="fn">postorder</span>(node.right);
  System.out.print(node.value + <span class="str">" "</span>);
}
<span class="com">// Output: 4 5 2 3 1</span>` },
        { type: 'para', html: 'Postorder is useful when you need to process children <em>before</em> their parent — like computing folder sizes or deleting a tree safely.' },
        { type: 'heading', text: 'Level-order (BFS)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">levelOrder</span>(<span class="ty">TreeNode</span> root) {
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="ty">Queue</span>&lt;<span class="ty">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  q.offer(root);
  <span class="kw">while</span> (!q.isEmpty()) {
    <span class="ty">TreeNode</span> n = q.poll();
    System.out.print(n.value + <span class="str">" "</span>);
    <span class="kw">if</span> (n.left != <span class="kw">null</span>) q.offer(n.left);
    <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.offer(n.right);
  }
}
<span class="com">// Output: 1 2 3 4 5</span>` },
        { type: 'callout', kind: 'info', html: 'Level-order uses a <strong>queue</strong>. The other three use the call stack (implicit recursion) — or an explicit stack.' },
        { type: 'heading', text: 'Step-by-step visualization', level: 2 },
        { type: 'widget', name: 'code-stepper', props: { lines: [
          '<span class="kw">void</span> <span class="fn">preorder</span>(<span class="ty">TreeNode</span> n) {',
          '  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;',
          '  visit(n);',
          '  preorder(n.left);',
          '  preorder(n.right);',
          '}'
        ], steps: [
          { line: 0, vars: { 'call': 'preorder(1)' }, note: 'Start at root, node value 1' },
          { line: 1, vars: { 'n': '1' }, note: 'n is not null, continue' },
          { line: 2, vars: { 'visited': '1' }, note: 'Print 1' },
          { line: 3, vars: { 'call': 'preorder(2)' }, note: 'Recurse left into node 2' },
          { line: 2, vars: { 'visited': '1 2' }, note: 'Print 2' },
          { line: 3, vars: { 'call': 'preorder(4)' }, note: 'Recurse left into node 4' },
          { line: 2, vars: { 'visited': '1 2 4' }, note: 'Print 4 (leaf)' },
          { line: 4, vars: { 'call': 'preorder(5)' }, note: 'Back in node 2, recurse right' },
          { line: 2, vars: { 'visited': '1 2 4 5' }, note: 'Print 5' },
          { line: 4, vars: { 'call': 'preorder(3)' }, note: 'Back in node 1, recurse right' },
          { line: 2, vars: { 'visited': '1 2 4 5 3' }, note: 'Print 3 — done!' },
        ]}},
        { type: 'heading', text: 'Summary table', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Preorder</strong>: serialize a tree, copy a tree',
          '<strong>Inorder</strong>: sorted output from BST',
          '<strong>Postorder</strong>: compute sizes, delete a tree',
          '<strong>Level-order</strong>: find nearest node, print by levels',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 16: BINARY SEARCH TREES
    // ============================================================
    {
      id: 'dsa-c16',
      title: 'Binary Search Trees',
      icon: '🌲',
      sections: [
        { type: 'heading', text: 'A tree with order', level: 1 },
        { type: 'para', html: 'A <strong>binary search tree (BST)</strong> is a binary tree with one extra rule: for every node, <code>left subtree &lt; node &lt; right subtree</code>. This rule lets us search in <code>O(log n)</code>.' },
        { type: 'widget', name: 'bst-vis', props: {} },
        { type: 'heading', text: 'The BST property', level: 2 },
        { type: 'image', alt: 'BST example', svg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="40" r="22" fill="#7c4dff"/><text x="200" y="46" text-anchor="middle" fill="#fff" font-weight="700">8</text>
          <circle cx="120" cy="110" r="22" fill="#7c4dff"/><text x="120" y="116" text-anchor="middle" fill="#fff" font-weight="700">3</text>
          <circle cx="280" cy="110" r="22" fill="#7c4dff"/><text x="280" y="116" text-anchor="middle" fill="#fff" font-weight="700">10</text>
          <circle cx="70" cy="180" r="22" fill="#7c4dff"/><text x="70" y="186" text-anchor="middle" fill="#fff" font-weight="700">1</text>
          <circle cx="170" cy="180" r="22" fill="#7c4dff"/><text x="170" y="186" text-anchor="middle" fill="#fff" font-weight="700">6</text>
          <circle cx="330" cy="180" r="22" fill="#7c4dff"/><text x="330" y="186" text-anchor="middle" fill="#fff" font-weight="700">14</text>
          <line x1="185" y1="55" x2="135" y2="95" stroke="#444" stroke-width="2"/>
          <line x1="215" y1="55" x2="265" y2="95" stroke="#444" stroke-width="2"/>
          <line x1="105" y1="125" x2="85" y2="165" stroke="#444" stroke-width="2"/>
          <line x1="135" y1="125" x2="155" y2="165" stroke="#444" stroke-width="2"/>
          <line x1="295" y1="125" x2="315" y2="165" stroke="#444" stroke-width="2"/>
        </svg>` },
        { type: 'heading', text: 'Searching', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">TreeNode</span> <span class="fn">search</span>(<span class="ty">TreeNode</span> root, <span class="ty">int</span> target) {
  <span class="kw">if</span> (root == <span class="kw">null</span> || root.value == target) <span class="kw">return</span> root;
  <span class="kw">if</span> (target &lt; root.value) <span class="kw">return</span> <span class="fn">search</span>(root.left, target);
  <span class="kw">return</span> <span class="fn">search</span>(root.right, target);
}` },
        { type: 'para', html: 'At each step, we eliminate <em>half</em> the remaining tree — just like binary search on an array. That is why a balanced BST is so fast.' },
        { type: 'heading', text: 'Inserting', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">TreeNode</span> <span class="fn">insert</span>(<span class="ty">TreeNode</span> root, <span class="ty">int</span> value) {
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">new</span> <span class="ty">TreeNode</span>(value);
  <span class="kw">if</span> (value &lt; root.value) {
    root.left = <span class="fn">insert</span>(root.left, value);
  } <span class="kw">else</span> <span class="kw">if</span> (value &gt; root.value) {
    root.right = <span class="fn">insert</span>(root.right, value);
  }
  <span class="kw">return</span> root;
}` },
        { type: 'callout', kind: 'tip', html: 'New values always become <strong>leaves</strong>. We walk down until we hit null, then attach the new node.' },
        { type: 'heading', text: 'Deleting (the tricky one)', level: 2 },
        { type: 'para', html: 'Deletion has three cases:' },
        { type: 'list', kind: 'numbered', items: [
          'Leaf node → just remove it',
          'One child → replace node with its child',
          'Two children → find in-order successor (smallest in right subtree), copy its value, then delete it',
        ]},
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">TreeNode</span> <span class="fn">delete</span>(<span class="ty">TreeNode</span> root, <span class="ty">int</span> value) {
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">null</span>;
  <span class="kw">if</span> (value &lt; root.value) root.left = <span class="fn">delete</span>(root.left, value);
  <span class="kw">else if</span> (value &gt; root.value) root.right = <span class="fn">delete</span>(root.right, value);
  <span class="kw">else</span> {
    <span class="kw">if</span> (root.left == <span class="kw">null</span>) <span class="kw">return</span> root.right;
    <span class="kw">if</span> (root.right == <span class="kw">null</span>) <span class="kw">return</span> root.left;
    <span class="ty">TreeNode</span> succ = root.right;
    <span class="kw">while</span> (succ.left != <span class="kw">null</span>) succ = succ.left;
    root.value = succ.value;
    root.right = <span class="fn">delete</span>(root.right, succ.value);
  }
  <span class="kw">return</span> root;
}` },
        { type: 'heading', text: 'Balanced vs degenerate', level: 2 },
        { type: 'para', html: 'If you insert sorted data into a BST, it degenerates into a <strong>linked list</strong> — and operations become O(n).' },
        { type: 'callout', kind: 'warn', html: 'Inserting 1, 2, 3, 4, 5 in order creates an unbalanced right-leaning chain. Without rebalancing, your O(log n) becomes O(n)!' },
        { type: 'heading', text: 'Complexity summary', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Search: O(log n) balanced, O(n) worst case',
          'Insert: O(log n) balanced, O(n) worst case',
          'Delete: O(log n) balanced, O(n) worst case',
          'Inorder traversal yields sorted values',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 17: BALANCED TREES & ROTATIONS
    // ============================================================
    {
      id: 'dsa-c17',
      title: 'Balanced Trees & Rotations',
      icon: '🪢',
      sections: [
        { type: 'heading', text: 'Keeping trees short', level: 1 },
        { type: 'para', html: 'A tall, thin BST is slow. A short, bushy BST is fast. <strong>Self-balancing trees</strong> automatically restructure themselves after every insert or delete to maintain a small height.' },
        { type: 'callout', kind: 'info', html: 'A balanced BST with <code>n</code> nodes has height around <code>log₂(n)</code>. For 1 million nodes, that is just <strong>20 steps</strong> to find anything!' },
        { type: 'heading', text: 'Rotations', level: 2 },
        { type: 'para', html: 'The fundamental tool for rebalancing is a <strong>rotation</strong>. A rotation re-shapes a subtree while preserving the BST property.' },
        { type: 'image', alt: 'Right rotation diagram', svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
          <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="700">Before</text>
          <text x="450" y="22" text-anchor="middle" font-size="13" font-weight="700">After right rotation</text>
          <g>
            <circle cx="150" cy="50" r="20" fill="#7c4dff"/><text x="150" y="55" text-anchor="middle" fill="#fff" font-weight="700">y</text>
            <circle cx="100" cy="110" r="20" fill="#7c4dff"/><text x="100" y="115" text-anchor="middle" fill="#fff" font-weight="700">x</text>
            <circle cx="200" cy="110" r="20" fill="#7c4dff"/><text x="200" y="115" text-anchor="middle" fill="#fff" font-weight="700">C</text>
            <circle cx="60" cy="170" r="20" fill="#7c4dff"/><text x="60" y="175" text-anchor="middle" fill="#fff" font-weight="700">A</text>
            <circle cx="140" cy="170" r="20" fill="#7c4dff"/><text x="140" y="175" text-anchor="middle" fill="#fff" font-weight="700">B</text>
            <line x1="138" y1="62" x2="112" y2="98" stroke="#444"/>
            <line x1="162" y1="62" x2="188" y2="98" stroke="#444"/>
            <line x1="88" y1="122" x2="72" y2="158" stroke="#444"/>
            <line x1="112" y1="122" x2="128" y2="158" stroke="#444"/>
          </g>
          <text x="300" y="120" font-size="24" fill="#7c4dff">→</text>
          <g>
            <circle cx="450" cy="50" r="20" fill="#7c4dff"/><text x="450" y="55" text-anchor="middle" fill="#fff" font-weight="700">x</text>
            <circle cx="400" cy="110" r="20" fill="#7c4dff"/><text x="400" y="115" text-anchor="middle" fill="#fff" font-weight="700">A</text>
            <circle cx="500" cy="110" r="20" fill="#7c4dff"/><text x="500" y="115" text-anchor="middle" fill="#fff" font-weight="700">y</text>
            <circle cx="460" cy="170" r="20" fill="#7c4dff"/><text x="460" y="175" text-anchor="middle" fill="#fff" font-weight="700">B</text>
            <circle cx="540" cy="170" r="20" fill="#7c4dff"/><text x="540" y="175" text-anchor="middle" fill="#fff" font-weight="700">C</text>
            <line x1="438" y1="62" x2="412" y2="98" stroke="#444"/>
            <line x1="462" y1="62" x2="488" y2="98" stroke="#444"/>
            <line x1="488" y1="122" x2="472" y2="158" stroke="#444"/>
            <line x1="512" y1="122" x2="528" y2="158" stroke="#444"/>
          </g>
        </svg>` },
        { type: 'para', html: 'The BST ordering is still valid: <code>A &lt; x &lt; B &lt; y &lt; C</code>.' },
        { type: 'heading', text: 'AVL trees', level: 2 },
        { type: 'para', html: 'Named after inventors <em>Adelson-Velsky and Landis</em>, AVL trees track each node\'s <strong>balance factor</strong>: heightOf(left) - heightOf(right). If it exceeds ±1, rotations fix it.' },
        { type: 'list', kind: 'bullet', items: [
          'Strictly balanced — heights differ by at most 1',
          'Faster lookups due to tighter balance',
          'More rotations on insert/delete',
        ]},
        { type: 'heading', text: 'Red-black trees', level: 2 },
        { type: 'para', html: 'A more relaxed self-balancing scheme. Each node is colored red or black; properties of the coloring keep the tree approximately balanced.' },
        { type: 'list', kind: 'bullet', items: [
          'Looser balance — heights can vary by up to 2x',
          'Faster inserts/deletes than AVL (fewer rotations)',
          'Used in Java\'s <code>TreeMap</code> and <code>TreeSet</code>, C++ std::map, Linux kernel',
        ]},
        { type: 'callout', kind: 'tip', html: 'You usually do not implement these yourself — language libraries do it for you. But understanding the <em>why</em> helps you reason about performance.' },
        { type: 'heading', text: 'Key takeaways', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Balanced trees guarantee O(log n) operations',
          'Rotations restructure subtrees without breaking BST order',
          'AVL is stricter, Red-Black is more practical',
          'Built-in TreeMap/TreeSet use Red-Black trees',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 18: HEAPS
    // ============================================================
    {
      id: 'dsa-c18',
      title: 'Heaps',
      icon: '⛰️',
      sections: [
        { type: 'heading', text: 'A specialized tree for priorities', level: 1 },
        { type: 'para', html: 'A <strong>heap</strong> is a special binary tree that satisfies the <em>heap property</em>: in a <strong>min-heap</strong>, every parent is smaller than its children. In a <strong>max-heap</strong>, every parent is larger.' },
        { type: 'image', alt: 'Min-heap example and array representation', svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="700">Min-heap (tree view)</text>
          <circle cx="150" cy="50" r="22" fill="#58cc02"/><text x="150" y="56" text-anchor="middle" fill="#fff" font-weight="700">1</text>
          <circle cx="90" cy="115" r="22" fill="#58cc02"/><text x="90" y="121" text-anchor="middle" fill="#fff" font-weight="700">3</text>
          <circle cx="210" cy="115" r="22" fill="#58cc02"/><text x="210" y="121" text-anchor="middle" fill="#fff" font-weight="700">5</text>
          <circle cx="60" cy="180" r="22" fill="#58cc02"/><text x="60" y="186" text-anchor="middle" fill="#fff" font-weight="700">7</text>
          <circle cx="120" cy="180" r="22" fill="#58cc02"/><text x="120" y="186" text-anchor="middle" fill="#fff" font-weight="700">9</text>
          <circle cx="180" cy="180" r="22" fill="#58cc02"/><text x="180" y="186" text-anchor="middle" fill="#fff" font-weight="700">8</text>
          <line x1="138" y1="65" x2="102" y2="100" stroke="#444"/>
          <line x1="162" y1="65" x2="198" y2="100" stroke="#444"/>
          <line x1="80" y1="135" x2="68" y2="160" stroke="#444"/>
          <line x1="100" y1="135" x2="112" y2="160" stroke="#444"/>
          <line x1="200" y1="135" x2="188" y2="160" stroke="#444"/>
          <text x="450" y="22" text-anchor="middle" font-size="13" font-weight="700">Array representation</text>
          <g transform="translate(330 50)">
            <rect width="40" height="40" fill="#58cc02"/><text x="20" y="26" text-anchor="middle" fill="#fff" font-weight="700">1</text>
            <rect x="40" width="40" height="40" fill="#58cc02"/><text x="60" y="26" text-anchor="middle" fill="#fff" font-weight="700">3</text>
            <rect x="80" width="40" height="40" fill="#58cc02"/><text x="100" y="26" text-anchor="middle" fill="#fff" font-weight="700">5</text>
            <rect x="120" width="40" height="40" fill="#58cc02"/><text x="140" y="26" text-anchor="middle" fill="#fff" font-weight="700">7</text>
            <rect x="160" width="40" height="40" fill="#58cc02"/><text x="180" y="26" text-anchor="middle" fill="#fff" font-weight="700">9</text>
            <rect x="200" width="40" height="40" fill="#58cc02"/><text x="220" y="26" text-anchor="middle" fill="#fff" font-weight="700">8</text>
            <text x="20" y="56" text-anchor="middle" font-size="11" fill="#666">[0]</text>
            <text x="60" y="56" text-anchor="middle" font-size="11" fill="#666">[1]</text>
            <text x="100" y="56" text-anchor="middle" font-size="11" fill="#666">[2]</text>
            <text x="140" y="56" text-anchor="middle" font-size="11" fill="#666">[3]</text>
            <text x="180" y="56" text-anchor="middle" font-size="11" fill="#666">[4]</text>
            <text x="220" y="56" text-anchor="middle" font-size="11" fill="#666">[5]</text>
          </g>
          <text x="450" y="160" text-anchor="middle" font-size="11" fill="#666">parent(i) = (i-1)/2</text>
          <text x="450" y="180" text-anchor="middle" font-size="11" fill="#666">left(i)   = 2i+1</text>
          <text x="450" y="200" text-anchor="middle" font-size="11" fill="#666">right(i)  = 2i+2</text>
        </svg>` },
        { type: 'heading', text: 'Storing a heap in an array', level: 2 },
        { type: 'para', html: 'Heaps are <em>complete</em> binary trees (every level filled except possibly the last, which fills left-to-right). This shape lets us store the tree compactly in an array — no pointers needed!' },
        { type: 'code', lang: 'java', code: `<span class="com">// For an element at index i:</span>
<span class="ty">int</span> parent = (i - <span class="num">1</span>) / <span class="num">2</span>;
<span class="ty">int</span> left   = <span class="num">2</span> * i + <span class="num">1</span>;
<span class="ty">int</span> right  = <span class="num">2</span> * i + <span class="num">2</span>;` },
        { type: 'heading', text: 'Insert: bubble up', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">insert</span>(<span class="ty">int</span> x) {
  heap[size++] = x;
  <span class="ty">int</span> i = size - <span class="num">1</span>;
  <span class="kw">while</span> (i &gt; <span class="num">0</span> &amp;&amp; heap[(i-<span class="num">1</span>)/<span class="num">2</span>] &gt; heap[i]) {
    swap(i, (i-<span class="num">1</span>)/<span class="num">2</span>);
    i = (i-<span class="num">1</span>)/<span class="num">2</span>;
  }
}` },
        { type: 'para', html: 'We add at the end, then "bubble up" while smaller than parent. Height is <code>log n</code>, so insert is <code>O(log n)</code>.' },
        { type: 'heading', text: 'Extract-min: sink down', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="ty">int</span> <span class="fn">extractMin</span>() {
  <span class="ty">int</span> min = heap[<span class="num">0</span>];
  heap[<span class="num">0</span>] = heap[--size];
  <span class="ty">int</span> i = <span class="num">0</span>;
  <span class="kw">while</span> (<span class="kw">true</span>) {
    <span class="ty">int</span> l = <span class="num">2</span>*i+<span class="num">1</span>, r = <span class="num">2</span>*i+<span class="num">2</span>, smallest = i;
    <span class="kw">if</span> (l &lt; size &amp;&amp; heap[l] &lt; heap[smallest]) smallest = l;
    <span class="kw">if</span> (r &lt; size &amp;&amp; heap[r] &lt; heap[smallest]) smallest = r;
    <span class="kw">if</span> (smallest == i) <span class="kw">break</span>;
    swap(i, smallest);
    i = smallest;
  }
  <span class="kw">return</span> min;
}` },
        { type: 'callout', kind: 'info', html: 'The root is always the min (or max). That is why <code>peek</code> is O(1) while <code>extract</code> requires sift-down (O(log n)).' },
        { type: 'heading', text: 'Heapify: build a heap in O(n)', level: 2 },
        { type: 'para', html: 'Surprisingly, building a heap from an arbitrary array takes only <code>O(n)</code> — not <code>O(n log n)</code>! Start from the last non-leaf and sift down each node.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">heapify</span>(<span class="ty">int</span>[] arr) {
  <span class="kw">for</span> (<span class="ty">int</span> i = arr.length / <span class="num">2</span> - <span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) {
    siftDown(arr, i);
  }
}` },
        { type: 'heading', text: 'Heapsort', level: 2 },
        { type: 'para', html: 'Build a max-heap, then repeatedly extract the max and place it at the end of the array. The result is sorted in <code>O(n log n)</code> with <code>O(1)</code> extra space.' },
        { type: 'heading', text: 'Applications', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Priority queues (job scheduling, Dijkstra)',
          'Heapsort algorithm',
          'Finding top-K elements',
          'Median of a data stream',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 19: GRAPHS - BASICS
    // ============================================================
    {
      id: 'dsa-c19',
      title: 'Graphs — Basics',
      icon: '🕸️',
      sections: [
        { type: 'heading', text: 'Nodes connected by edges', level: 1 },
        { type: 'para', html: 'A <strong>graph</strong> is a collection of <em>vertices</em> (also called <em>nodes</em>) connected by <em>edges</em>. Graphs model anything with relationships: roads, social networks, web pages, dependencies.' },
        { type: 'image', alt: 'Undirected graph example', svg: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
          <text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">A simple undirected graph</text>
          <line x1="120" y1="80" x2="240" y2="60" stroke="#444" stroke-width="2"/>
          <line x1="120" y1="80" x2="220" y2="150" stroke="#444" stroke-width="2"/>
          <line x1="240" y1="60" x2="360" y2="80" stroke="#444" stroke-width="2"/>
          <line x1="240" y1="60" x2="220" y2="150" stroke="#444" stroke-width="2"/>
          <line x1="360" y1="80" x2="400" y2="160" stroke="#444" stroke-width="2"/>
          <line x1="220" y1="150" x2="400" y2="160" stroke="#444" stroke-width="2"/>
          <circle cx="120" cy="80" r="24" fill="#7c4dff"/><text x="120" y="86" text-anchor="middle" fill="#fff" font-weight="700">A</text>
          <circle cx="240" cy="60" r="24" fill="#7c4dff"/><text x="240" y="66" text-anchor="middle" fill="#fff" font-weight="700">B</text>
          <circle cx="360" cy="80" r="24" fill="#7c4dff"/><text x="360" y="86" text-anchor="middle" fill="#fff" font-weight="700">C</text>
          <circle cx="220" cy="150" r="24" fill="#7c4dff"/><text x="220" y="156" text-anchor="middle" fill="#fff" font-weight="700">D</text>
          <circle cx="400" cy="160" r="24" fill="#7c4dff"/><text x="400" y="166" text-anchor="middle" fill="#fff" font-weight="700">E</text>
        </svg>` },
        { type: 'heading', text: 'Key terms', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Vertex (node)</strong>: a point in the graph',
          '<strong>Edge</strong>: a connection between two vertices',
          '<strong>Adjacent</strong>: two vertices joined by an edge',
          '<strong>Path</strong>: a sequence of edges from one vertex to another',
          '<strong>Cycle</strong>: a path that starts and ends at the same vertex',
        ]},
        { type: 'heading', text: 'Directed vs undirected', level: 2 },
        { type: 'para', html: 'In an <strong>undirected</strong> graph, edges go both ways: Twitter follower-like relationships in Facebook (you and a friend are mutually connected). In a <strong>directed</strong> graph, edges have direction: Twitter (you follow them, but they may not follow you).' },
        { type: 'image', alt: 'Directed graph', svg: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L9,3 L0,6" fill="#444"/>
            </marker>
          </defs>
          <line x1="80" y1="80" x2="170" y2="40" stroke="#444" stroke-width="2" marker-end="url(#ah)"/>
          <line x1="200" y1="60" x2="290" y2="80" stroke="#444" stroke-width="2" marker-end="url(#ah)"/>
          <line x1="300" y1="100" x2="200" y2="140" stroke="#444" stroke-width="2" marker-end="url(#ah)"/>
          <line x1="170" y1="120" x2="100" y2="100" stroke="#444" stroke-width="2" marker-end="url(#ah)"/>
          <circle cx="60" cy="90" r="22" fill="#1cb0f6"/><text x="60" y="96" text-anchor="middle" fill="#fff" font-weight="700">A</text>
          <circle cx="190" cy="35" r="22" fill="#1cb0f6"/><text x="190" y="41" text-anchor="middle" fill="#fff" font-weight="700">B</text>
          <circle cx="320" cy="90" r="22" fill="#1cb0f6"/><text x="320" y="96" text-anchor="middle" fill="#fff" font-weight="700">C</text>
          <circle cx="190" cy="145" r="22" fill="#1cb0f6"/><text x="190" y="151" text-anchor="middle" fill="#fff" font-weight="700">D</text>
        </svg>` },
        { type: 'heading', text: 'Weighted graphs', level: 2 },
        { type: 'para', html: 'Edges can have <strong>weights</strong> — numerical labels representing distance, cost, or capacity. A road network might weight edges by travel time.' },
        { type: 'heading', text: 'Cyclic vs acyclic', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Cyclic</strong>: contains at least one cycle',
          '<strong>Acyclic</strong>: no cycles',
          '<strong>DAG</strong>: <em>Directed Acyclic Graph</em> — fundamental in dependency systems',
        ]},
        { type: 'callout', kind: 'info', html: 'Build systems, package managers, and task schedulers all rely on DAGs for <strong>topological sort</strong>.' },
        { type: 'heading', text: 'Real-world graphs', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Social networks',
          'Road maps and flight routes',
          'Web pages linked by hyperlinks',
          'Build dependency graphs',
          'Recommendation systems',
        ]},
      ],
    },

    // ============================================================
    // CHAPTER 20: GRAPH REPRESENTATIONS
    // ============================================================
    {
      id: 'dsa-c20',
      title: 'Graph Representations',
      icon: '🗺️',
      sections: [
        { type: 'heading', text: 'Storing a graph in code', level: 1 },
        { type: 'para', html: 'How do you represent a graph in memory? Two common ways: <strong>adjacency matrix</strong> and <strong>adjacency list</strong>. Each has trade-offs.' },
        { type: 'heading', text: 'Adjacency matrix', level: 2 },
        { type: 'para', html: 'A <code>V × V</code> 2D array where <code>matrix[i][j]</code> is 1 if there is an edge from i to j, else 0 (or the weight, in a weighted graph).' },
        { type: 'image', alt: 'Adjacency matrix and list comparison', svg: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          <text x="150" y="22" text-anchor="middle" font-size="13" font-weight="700">Adjacency matrix</text>
          <g font-size="12">
            <text x="55" y="55">A</text><text x="85" y="55">B</text><text x="115" y="55">C</text><text x="145" y="55">D</text>
            <text x="30" y="80">A</text>
            <text x="30" y="105">B</text>
            <text x="30" y="130">C</text>
            <text x="30" y="155">D</text>
            <rect x="50" y="65" width="120" height="100" fill="none" stroke="#444"/>
            <line x1="80" y1="65" x2="80" y2="165" stroke="#aaa"/>
            <line x1="110" y1="65" x2="110" y2="165" stroke="#aaa"/>
            <line x1="140" y1="65" x2="140" y2="165" stroke="#aaa"/>
            <line x1="50" y1="90" x2="170" y2="90" stroke="#aaa"/>
            <line x1="50" y1="115" x2="170" y2="115" stroke="#aaa"/>
            <line x1="50" y1="140" x2="170" y2="140" stroke="#aaa"/>
            <text x="60" y="82">0</text><text x="90" y="82">1</text><text x="120" y="82">1</text><text x="150" y="82">0</text>
            <text x="60" y="107">1</text><text x="90" y="107">0</text><text x="120" y="107">0</text><text x="150" y="107">1</text>
            <text x="60" y="132">1</text><text x="90" y="132">0</text><text x="120" y="132">0</text><text x="150" y="132">1</text>
            <text x="60" y="157">0</text><text x="90" y="157">1</text><text x="120" y="157">1</text><text x="150" y="157">0</text>
          </g>
          <text x="450" y="22" text-anchor="middle" font-size="13" font-weight="700">Adjacency list</text>
          <g font-size="12">
            <text x="350" y="80">A:</text><text x="380" y="80" fill="#7c4dff">B, C</text>
            <text x="350" y="105">B:</text><text x="380" y="105" fill="#7c4dff">A, D</text>
            <text x="350" y="130">C:</text><text x="380" y="130" fill="#7c4dff">A, D</text>
            <text x="350" y="155">D:</text><text x="380" y="155" fill="#7c4dff">B, C</text>
          </g>
          <text x="300" y="220" text-anchor="middle" font-size="11" fill="#666">For sparse graphs, the list uses much less memory.</text>
        </svg>` },
        { type: 'code', lang: 'java', code: `<span class="ty">int</span>[][] graph = <span class="kw">new</span> <span class="ty">int</span>[V][V];
graph[<span class="num">0</span>][<span class="num">1</span>] = <span class="num">1</span>; <span class="com">// edge A → B</span>
graph[<span class="num">0</span>][<span class="num">2</span>] = <span class="num">1</span>; <span class="com">// edge A → C</span>` },
        { type: 'heading', text: 'Adjacency list', level: 2 },
        { type: 'para', html: 'For each vertex, store a list of its neighbors. Saves space when the graph is <em>sparse</em> (few edges).' },
        { type: 'code', lang: 'java', code: `<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; graph = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; V; i++) {
  graph.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;());
}
graph.get(<span class="num">0</span>).add(<span class="num">1</span>); <span class="com">// A → B</span>
graph.get(<span class="num">0</span>).add(<span class="num">2</span>); <span class="com">// A → C</span>` },
        { type: 'heading', text: 'Trade-offs', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Matrix space</strong>: O(V²) — wasteful for sparse graphs',
          '<strong>List space</strong>: O(V + E) — much better for sparse graphs',
          '<strong>Check if edge (u,v) exists</strong>: matrix O(1), list O(degree)',
          '<strong>Iterate neighbors of u</strong>: matrix O(V), list O(degree)',
        ]},
        { type: 'callout', kind: 'tip', html: 'Most real-world graphs are <strong>sparse</strong> (degree much less than V). Adjacency list is usually the right choice.' },
        { type: 'heading', text: 'BFS using adjacency list', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">bfs</span>(<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; graph, <span class="ty">int</span> start) {
  <span class="ty">boolean</span>[] visited = <span class="kw">new</span> <span class="ty">boolean</span>[graph.size()];
  <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  q.offer(start);
  visited[start] = <span class="kw">true</span>;
  <span class="kw">while</span> (!q.isEmpty()) {
    <span class="ty">int</span> v = q.poll();
    System.out.println(v);
    <span class="kw">for</span> (<span class="ty">int</span> nbr : graph.get(v)) {
      <span class="kw">if</span> (!visited[nbr]) {
        visited[nbr] = <span class="kw">true</span>;
        q.offer(nbr);
      }
    }
  }
}` },
        { type: 'callout', kind: 'success', html: 'BFS finds the <strong>shortest path</strong> in an unweighted graph. DFS explores deeply — useful for cycle detection and connected components.' },
      ],
    },

    // ============================================================
    // CHAPTER 21: TRIES
    // ============================================================
    {
      id: 'dsa-c21',
      title: 'Tries',
      icon: '🔤',
      sections: [
        { type: 'heading', text: 'Trees for strings', level: 1 },
        { type: 'para', html: 'A <strong>trie</strong> (pronounced "try") is a tree designed for storing strings. Each edge represents a character, and a path from the root spells out a word. Tries power <strong>autocomplete</strong>, spell-check, and IP routing.' },
        { type: 'image', alt: 'Trie storing cat, car, cart, dog', svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="30" r="18" fill="#ffc800"/>
          <text x="300" y="36" text-anchor="middle" fill="#fff" font-weight="700">∅</text>
          <circle cx="200" cy="90" r="18" fill="#7c4dff"/><text x="200" y="96" text-anchor="middle" fill="#fff">c</text>
          <circle cx="400" cy="90" r="18" fill="#7c4dff"/><text x="400" y="96" text-anchor="middle" fill="#fff">d</text>
          <circle cx="200" cy="150" r="18" fill="#7c4dff"/><text x="200" y="156" text-anchor="middle" fill="#fff">a</text>
          <circle cx="400" cy="150" r="18" fill="#7c4dff"/><text x="400" y="156" text-anchor="middle" fill="#fff">o</text>
          <circle cx="140" cy="210" r="18" fill="#58cc02"/><text x="140" y="216" text-anchor="middle" fill="#fff">t</text>
          <circle cx="260" cy="210" r="18" fill="#58cc02"/><text x="260" y="216" text-anchor="middle" fill="#fff">r</text>
          <circle cx="400" cy="210" r="18" fill="#58cc02"/><text x="400" y="216" text-anchor="middle" fill="#fff">g</text>
          <circle cx="260" cy="265" r="14" fill="#58cc02"/><text x="260" y="270" text-anchor="middle" fill="#fff" font-size="10">t</text>
          <line x1="290" y1="45" x2="212" y2="78" stroke="#444"/>
          <line x1="310" y1="45" x2="388" y2="78" stroke="#444"/>
          <line x1="200" y1="108" x2="200" y2="135" stroke="#444"/>
          <line x1="400" y1="108" x2="400" y2="135" stroke="#444"/>
          <line x1="188" y1="165" x2="150" y2="195" stroke="#444"/>
          <line x1="212" y1="165" x2="250" y2="195" stroke="#444"/>
          <line x1="400" y1="168" x2="400" y2="195" stroke="#444"/>
          <line x1="260" y1="225" x2="260" y2="253" stroke="#444"/>
          <text x="100" y="218" font-size="11" fill="#666">cat</text>
          <text x="270" y="218" font-size="11" fill="#666">car</text>
          <text x="290" y="270" font-size="11" fill="#666">cart</text>
          <text x="420" y="218" font-size="11" fill="#666">dog</text>
        </svg>` },
        { type: 'heading', text: 'Trie node', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">TrieNode</span> {
  <span class="ty">TrieNode</span>[] children = <span class="kw">new</span> <span class="ty">TrieNode</span>[<span class="num">26</span>]; <span class="com">// a-z</span>
  <span class="kw">boolean</span> isWord;
}` },
        { type: 'heading', text: 'Insert', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">void</span> <span class="fn">insert</span>(<span class="ty">String</span> word) {
  <span class="ty">TrieNode</span> cur = root;
  <span class="kw">for</span> (<span class="ty">char</span> c : word.toCharArray()) {
    <span class="ty">int</span> idx = c - <span class="str">'a'</span>;
    <span class="kw">if</span> (cur.children[idx] == <span class="kw">null</span>) {
      cur.children[idx] = <span class="kw">new</span> <span class="ty">TrieNode</span>();
    }
    cur = cur.children[idx];
  }
  cur.isWord = <span class="kw">true</span>;
}` },
        { type: 'heading', text: 'Search', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">boolean</span> <span class="fn">search</span>(<span class="ty">String</span> word) {
  <span class="ty">TrieNode</span> cur = root;
  <span class="kw">for</span> (<span class="ty">char</span> c : word.toCharArray()) {
    cur = cur.children[c - <span class="str">'a'</span>];
    <span class="kw">if</span> (cur == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">false</span>;
  }
  <span class="kw">return</span> cur.isWord;
}` },
        { type: 'callout', kind: 'info', html: 'Insert and search are <strong>O(L)</strong> where L is the word length — independent of how many words the trie holds!' },
        { type: 'heading', text: 'Prefix search', level: 2 },
        { type: 'para', html: 'The killer feature: find all words with a given prefix. This is how autocomplete works.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public</span> <span class="kw">boolean</span> <span class="fn">startsWith</span>(<span class="ty">String</span> prefix) {
  <span class="ty">TrieNode</span> cur = root;
  <span class="kw">for</span> (<span class="ty">char</span> c : prefix.toCharArray()) {
    cur = cur.children[c - <span class="str">'a'</span>];
    <span class="kw">if</span> (cur == <span class="kw">null</span>) <span class="kw">return</span> <span class="kw">false</span>;
  }
  <span class="kw">return</span> <span class="kw">true</span>;
}` },
        { type: 'heading', text: 'Where tries shine', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Autocomplete and search suggestions',
          'Spell-checkers',
          'IP routing (longest-prefix match)',
          'Word games like Boggle and Scrabble',
          'Dictionary compression',
        ]},
        { type: 'callout', kind: 'warn', html: 'Tries can use a lot of memory — every node has 26 (or more) children pointers, mostly null. Compressed tries (radix trees) help.' },
        { type: 'heading', text: 'Congrats!', level: 2 },
        { type: 'para', html: 'You have made it through the foundations of DSA — arrays, linked lists, stacks, queues, hash tables, sets, trees, heaps, graphs, and tries. With these tools, you can model and solve a huge range of problems.' },
        { type: 'callout', kind: 'success', html: 'Next up: algorithms! Sorting, searching, recursion, dynamic programming, and graph traversals build on everything you just learned.' },
        { type: 'list', kind: 'check', items: [
          'You know when to use arrays vs lists',
          'You understand Big-O for every core operation',
          'You can implement a stack, queue, hash map, and BST from memory',
          'You can choose the right structure for a given problem',
        ]},
      ],
    },
  ],
});

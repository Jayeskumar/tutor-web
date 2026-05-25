LEARN('dsa-java', {
  intro: 'Master Data Structures and Algorithms in Java — from the Collections Framework to building your own lists, stacks, trees, and hash maps, with live visualizations.',
  chapters: [

    /* ============== CH 1: Collections Framework ============== */
    { id: 'dj-c1', title: 'The Collections Framework', icon: '🗂️', sections: [
      { type: 'heading', text: 'What is the Collections Framework?', level: 1 },
      { type: 'para', html: 'The <strong>Java Collections Framework (JCF)</strong> is a unified architecture of <em>interfaces</em>, <em>implementations</em>, and <em>algorithms</em> for storing and manipulating groups of objects. It lives in the <code>java.util</code> package and is one of the most important parts of the standard library.' },
      { type: 'callout', kind: 'info', html: 'Think of the JCF as a toolbox: <strong>interfaces</strong> describe what something does (a <code>List</code> is ordered), and <strong>classes</strong> describe how it does it (<code>ArrayList</code> uses a resizable array).' },

      { type: 'heading', text: 'The hierarchy at a glance', level: 2 },
      { type: 'image', alt: 'collections hierarchy', svg:
`<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;display:block;margin:0 auto;">
  <rect width="700" height="360" fill="#fafafa" rx="8"/>
  <text x="350" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">java.util Collections</text>
  <g font-family="Nunito" font-size="12">
    <rect x="280" y="40" width="140" height="36" rx="8" fill="#7c4dff"/>
    <text x="350" y="63" text-anchor="middle" fill="white" font-weight="bold">Iterable&lt;E&gt;</text>

    <line x1="350" y1="76" x2="350" y2="100" stroke="#666" stroke-width="2"/>
    <rect x="280" y="100" width="140" height="36" rx="8" fill="#5e35d5"/>
    <text x="350" y="123" text-anchor="middle" fill="white" font-weight="bold">Collection&lt;E&gt;</text>

    <line x1="350" y1="136" x2="150" y2="170" stroke="#666" stroke-width="2"/>
    <line x1="350" y1="136" x2="350" y2="170" stroke="#666" stroke-width="2"/>
    <line x1="350" y1="136" x2="560" y2="170" stroke="#666" stroke-width="2"/>

    <rect x="80" y="170" width="140" height="36" rx="8" fill="#1cb0f6"/>
    <text x="150" y="193" text-anchor="middle" fill="white" font-weight="bold">List&lt;E&gt;</text>
    <rect x="280" y="170" width="140" height="36" rx="8" fill="#58cc02"/>
    <text x="350" y="193" text-anchor="middle" fill="white" font-weight="bold">Set&lt;E&gt;</text>
    <rect x="490" y="170" width="140" height="36" rx="8" fill="#ff9600"/>
    <text x="560" y="193" text-anchor="middle" fill="white" font-weight="bold">Queue&lt;E&gt;</text>

    <line x1="150" y1="206" x2="80" y2="240" stroke="#666" stroke-width="1.5"/>
    <line x1="150" y1="206" x2="220" y2="240" stroke="#666" stroke-width="1.5"/>
    <rect x="20" y="240" width="120" height="30" rx="6" fill="#0e88c8"/>
    <text x="80" y="260" text-anchor="middle" fill="white" font-size="11">ArrayList</text>
    <rect x="160" y="240" width="120" height="30" rx="6" fill="#0e88c8"/>
    <text x="220" y="260" text-anchor="middle" fill="white" font-size="11">LinkedList</text>

    <line x1="350" y1="206" x2="290" y2="240" stroke="#666" stroke-width="1.5"/>
    <line x1="350" y1="206" x2="410" y2="240" stroke="#666" stroke-width="1.5"/>
    <rect x="240" y="240" width="100" height="30" rx="6" fill="#3aa802"/>
    <text x="290" y="260" text-anchor="middle" fill="white" font-size="11">HashSet</text>
    <rect x="360" y="240" width="100" height="30" rx="6" fill="#3aa802"/>
    <text x="410" y="260" text-anchor="middle" fill="white" font-size="11">TreeSet</text>

    <line x1="560" y1="206" x2="500" y2="240" stroke="#666" stroke-width="1.5"/>
    <line x1="560" y1="206" x2="620" y2="240" stroke="#666" stroke-width="1.5"/>
    <rect x="450" y="240" width="100" height="30" rx="6" fill="#cc7700"/>
    <text x="500" y="260" text-anchor="middle" fill="white" font-size="11">ArrayDeque</text>
    <rect x="570" y="240" width="120" height="30" rx="6" fill="#cc7700"/>
    <text x="630" y="260" text-anchor="middle" fill="white" font-size="11">PriorityQueue</text>

    <rect x="280" y="300" width="140" height="36" rx="8" fill="#e53935"/>
    <text x="350" y="323" text-anchor="middle" fill="white" font-weight="bold">Map&lt;K,V&gt;</text>
    <text x="350" y="350" text-anchor="middle" fill="#666" font-size="10">(separate hierarchy — not a Collection)</text>
  </g>
</svg>` },

      { type: 'heading', text: 'The big four interfaces', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<code>List</code> — <strong>ordered</strong>, allows duplicates, indexed access. e.g. <code>ArrayList</code>, <code>LinkedList</code>.',
        '<code>Set</code> — <strong>no duplicates</strong>. e.g. <code>HashSet</code>, <code>TreeSet</code>, <code>LinkedHashSet</code>.',
        '<code>Queue</code> — designed for <strong>FIFO</strong> or priority order. e.g. <code>ArrayDeque</code>, <code>PriorityQueue</code>.',
        '<code>Map</code> — key/value pairs. <strong>Not</strong> a <code>Collection</code>! e.g. <code>HashMap</code>, <code>TreeMap</code>.'
      ]},

      { type: 'heading', text: 'A tiny tour', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="ty">Tour</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="ty">List</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
    names.<span class="fn">add</span>(<span class="str">"Ada"</span>);
    names.<span class="fn">add</span>(<span class="str">"Linus"</span>);

    <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; primes = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
    primes.<span class="fn">add</span>(<span class="num">2</span>); primes.<span class="fn">add</span>(<span class="num">3</span>); primes.<span class="fn">add</span>(<span class="num">2</span>); <span class="com">// duplicate ignored</span>

    <span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
    ages.<span class="fn">put</span>(<span class="str">"Ada"</span>, <span class="num">36</span>);
  }
}` },

      { type: 'heading', text: 'Generics — the &lt;E&gt; part', level: 2 },
      { type: 'para', html: 'Almost everything in the JCF is <strong>generic</strong>. A <code>List&lt;String&gt;</code> is a list of <code>String</code>s — the compiler enforces type safety. Use the <em>diamond operator</em> <code>&lt;&gt;</code> on the right side to let Java infer the type.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();    <span class="com">// good</span>
nums.<span class="fn">add</span>(<span class="num">42</span>);
<span class="com">// nums.add("hello"); // compile error — type safety</span>` },

      { type: 'callout', kind: 'warn', html: 'You cannot use primitives like <code>int</code> directly as a generic type. Use the wrapper class — <code>Integer</code>, <code>Double</code>, <code>Boolean</code>. <em>Autoboxing</em> handles conversion behind the scenes.' },

      { type: 'heading', text: 'Why this framework matters', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Consistent API — once you know <code>add</code>, <code>remove</code>, <code>size</code>, <code>iterator</code>, you know it for every collection.',
        'Swap implementations easily — change <code>ArrayList</code> to <code>LinkedList</code> by changing one line.',
        'Battle-tested algorithms in <code>Collections</code> and <code>Arrays</code> utility classes.',
        'Plays well with streams, lambdas, and the rest of modern Java.'
      ]}
    ]},

    /* ============== CH 2: ArrayList ============== */
    { id: 'dj-c2', title: 'ArrayList Deep Dive', icon: '📋', sections: [
      { type: 'heading', text: 'ArrayList — the workhorse List', level: 1 },
      { type: 'para', html: '<code>ArrayList</code> is the most-used <code>List</code> in Java. Internally it stores elements in a <strong>resizable array</strong>. Random access is fast; inserting in the middle can be slow.' },

      { type: 'heading', text: 'Creating an ArrayList', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.ArrayList;
<span class="kw">import</span> java.util.List;

<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="num">100</span>); <span class="com">// initial capacity</span>
<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; copy = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(names);   <span class="com">// from another collection</span>` },
      { type: 'callout', kind: 'tip', html: 'Program to the interface: declare with <code>List</code>, instantiate with <code>ArrayList</code>. That way swapping implementations later is painless.' },

      { type: 'heading', text: 'add / get / set / remove', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; xs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
xs.<span class="fn">add</span>(<span class="str">"a"</span>);          <span class="com">// append</span>
xs.<span class="fn">add</span>(<span class="str">"b"</span>);
xs.<span class="fn">add</span>(<span class="num">1</span>, <span class="str">"x"</span>);       <span class="com">// insert "x" at index 1 → [a, x, b]</span>
<span class="ty">String</span> first = xs.<span class="fn">get</span>(<span class="num">0</span>);  <span class="com">// "a"</span>
xs.<span class="fn">set</span>(<span class="num">0</span>, <span class="str">"A"</span>);       <span class="com">// replace → [A, x, b]</span>
xs.<span class="fn">remove</span>(<span class="num">1</span>);            <span class="com">// by index → [A, b]</span>
xs.<span class="fn">remove</span>(<span class="str">"A"</span>);          <span class="com">// by value → [b]</span>` },

      { type: 'heading', text: 'See it grow', level: 2 },
      { type: 'widget', name: 'array-vis', props: { values: [10, 20, 30, 40, 50, 60, 70] } },

      { type: 'heading', text: 'Searching: indexOf & contains', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; fruits = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
fruits.<span class="fn">add</span>(<span class="str">"apple"</span>);
fruits.<span class="fn">add</span>(<span class="str">"banana"</span>);
fruits.<span class="fn">add</span>(<span class="str">"cherry"</span>);

<span class="kw">boolean</span> has = fruits.<span class="fn">contains</span>(<span class="str">"banana"</span>); <span class="com">// true</span>
<span class="ty">int</span> i = fruits.<span class="fn">indexOf</span>(<span class="str">"cherry"</span>);     <span class="com">// 2</span>
<span class="ty">int</span> j = fruits.<span class="fn">indexOf</span>(<span class="str">"grape"</span>);      <span class="com">// -1 (not found)</span>
<span class="ty">int</span> k = fruits.<span class="fn">lastIndexOf</span>(<span class="str">"apple"</span>);  <span class="com">// last occurrence</span>` },

      { type: 'heading', text: 'Iteration', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>);

<span class="com">// 1. classic for</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; xs.<span class="fn">size</span>(); i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(xs.<span class="fn">get</span>(i));
}

<span class="com">// 2. enhanced for (cleanest)</span>
<span class="kw">for</span> (<span class="ty">int</span> x : xs) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(x);
}

<span class="com">// 3. lambda forEach</span>
xs.<span class="fn">forEach</span>(<span class="ty">System</span>.out::println);` },

      { type: 'heading', text: 'Step through an ArrayList build', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();',
          'xs.<span class="fn">add</span>(<span class="num">10</span>);',
          'xs.<span class="fn">add</span>(<span class="num">20</span>);',
          'xs.<span class="fn">add</span>(<span class="num">0</span>, <span class="num">5</span>);  <span class="com">// insert at front</span>',
          'xs.<span class="fn">set</span>(<span class="num">2</span>, <span class="num">99</span>);',
          'xs.<span class="fn">remove</span>(<span class="num">0</span>);'
        ],
        steps: [
          { line: 0, vars: { xs: '[]' }, note: 'Empty list created.' },
          { line: 1, vars: { xs: '[10]' }, note: 'Append 10.' },
          { line: 2, vars: { xs: '[10, 20]' }, note: 'Append 20.' },
          { line: 3, vars: { xs: '[5, 10, 20]' }, note: 'Insert at front shifts everything right.' },
          { line: 4, vars: { xs: '[5, 10, 99]' }, note: 'set replaces index 2.' },
          { line: 5, vars: { xs: '[10, 99]' }, note: 'remove(0) shifts everything left.' }
        ]
      }},

      { type: 'heading', text: 'Time complexity', level: 2 },
      { type: 'image', alt: 'arraylist big-o', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">ArrayList — operations</text>
  <g font-family="JetBrains Mono" font-size="12">
    <rect x="20"  y="40" width="140" height="40" fill="#58cc02" rx="6"/><text x="90"  y="65" text-anchor="middle" fill="white" font-weight="bold">get(i)</text>
    <rect x="170" y="40" width="140" height="40" fill="#58cc02" rx="6"/><text x="240" y="65" text-anchor="middle" fill="white" font-weight="bold">set(i, x)</text>
    <rect x="320" y="40" width="140" height="40" fill="#58cc02" rx="6"/><text x="390" y="65" text-anchor="middle" fill="white" font-weight="bold">add(x)*</text>
    <rect x="470" y="40" width="110" height="40" fill="#ff9600" rx="6"/><text x="525" y="65" text-anchor="middle" fill="white" font-weight="bold">add(i, x)</text>

    <text x="90"  y="100" text-anchor="middle" font-family="Nunito">O(1)</text>
    <text x="240" y="100" text-anchor="middle" font-family="Nunito">O(1)</text>
    <text x="390" y="100" text-anchor="middle" font-family="Nunito">O(1) amortized</text>
    <text x="525" y="100" text-anchor="middle" font-family="Nunito">O(n)</text>

    <rect x="20"  y="120" width="140" height="40" fill="#ff9600" rx="6"/><text x="90"  y="145" text-anchor="middle" fill="white" font-weight="bold">remove(i)</text>
    <rect x="170" y="120" width="140" height="40" fill="#ff9600" rx="6"/><text x="240" y="145" text-anchor="middle" fill="white" font-weight="bold">contains</text>
    <rect x="320" y="120" width="140" height="40" fill="#ff9600" rx="6"/><text x="390" y="145" text-anchor="middle" fill="white" font-weight="bold">indexOf</text>
    <rect x="470" y="120" width="110" height="40" fill="#58cc02" rx="6"/><text x="525" y="145" text-anchor="middle" fill="white" font-weight="bold">size()</text>

    <text x="90"  y="180" text-anchor="middle" font-family="Nunito">O(n)</text>
    <text x="240" y="180" text-anchor="middle" font-family="Nunito">O(n)</text>
    <text x="390" y="180" text-anchor="middle" font-family="Nunito">O(n)</text>
    <text x="525" y="180" text-anchor="middle" font-family="Nunito">O(1)</text>
  </g>
</svg>` },
      { type: 'callout', kind: 'info', html: '<strong>Amortized O(1)</strong> — most appends are instant, but every so often the array doubles in size (O(n) copy). Averaged over many adds, it works out to O(1).' },

      { type: 'heading', text: 'Useful bulk methods', level: 2 },
      { type: 'code', lang: 'java', code:
`xs.<span class="fn">isEmpty</span>();              <span class="com">// true/false</span>
xs.<span class="fn">size</span>();                 <span class="com">// number of elements</span>
xs.<span class="fn">clear</span>();                <span class="com">// remove everything</span>
xs.<span class="fn">addAll</span>(otherList);     <span class="com">// append all</span>
xs.<span class="fn">subList</span>(<span class="num">1</span>, <span class="num">4</span>);          <span class="com">// view of indices 1..3</span>
xs.<span class="fn">toArray</span>(<span class="kw">new</span> <span class="ty">Integer</span>[<span class="num">0</span>]); <span class="com">// to a typed array</span>` }
    ]},

    /* ============== CH 3: LinkedList ============== */
    { id: 'dj-c3', title: 'LinkedList in Java', icon: '🔗', sections: [
      { type: 'heading', text: 'A doubly linked list', level: 1 },
      { type: 'para', html: 'Java\'s <code>LinkedList</code> is a <strong>doubly linked list</strong> — every node knows both its successor and predecessor. It implements <code>List</code>, <code>Deque</code>, and <code>Queue</code>, so it wears many hats.' },

      { type: 'heading', text: 'Visualize it', level: 2 },
      { type: 'widget', name: 'linked-list-vis', props: {} },

      { type: 'heading', text: 'Basic operations', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.LinkedList;

<span class="ty">LinkedList</span>&lt;<span class="ty">String</span>&gt; list = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
list.<span class="fn">add</span>(<span class="str">"b"</span>);
list.<span class="fn">addFirst</span>(<span class="str">"a"</span>);     <span class="com">// O(1) at head</span>
list.<span class="fn">addLast</span>(<span class="str">"c"</span>);      <span class="com">// O(1) at tail</span>
<span class="ty">String</span> head = list.<span class="fn">getFirst</span>();
<span class="ty">String</span> tail = list.<span class="fn">getLast</span>();
list.<span class="fn">removeFirst</span>();
list.<span class="fn">removeLast</span>();` },

      { type: 'heading', text: 'When to choose LinkedList', level: 2 },
      { type: 'list', kind: 'check', items: [
        'You insert/remove at the <strong>front</strong> a lot.',
        'You build a queue or deque and don\'t need indexed access.',
        'Memory locality and random access are not concerns.'
      ]},
      { type: 'callout', kind: 'warn', html: 'In practice, <code>ArrayDeque</code> beats <code>LinkedList</code> as a queue/deque almost every time. And for index access, <code>ArrayList</code> wins. <code>LinkedList</code> is rarely the best choice in modern Java.' },

      { type: 'heading', text: 'Use it as a Queue', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="num">1</span>);   <span class="com">// enqueue</span>
q.<span class="fn">offer</span>(<span class="num">2</span>);
<span class="ty">Integer</span> x = q.<span class="fn">poll</span>(); <span class="com">// dequeue → 1</span>
<span class="ty">Integer</span> y = q.<span class="fn">peek</span>(); <span class="com">// see head, don't remove → 2</span>` },

      { type: 'heading', text: 'Use it as a Deque', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Deque</span>&lt;<span class="ty">String</span>&gt; d = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
d.<span class="fn">push</span>(<span class="str">"a"</span>);     <span class="com">// to front (like a stack)</span>
d.<span class="fn">push</span>(<span class="str">"b"</span>);
d.<span class="fn">offerLast</span>(<span class="str">"z"</span>);
<span class="ty">String</span> top = d.<span class="fn">pop</span>();   <span class="com">// "b"</span>` },

      { type: 'heading', text: 'ArrayList vs LinkedList in numbers', level: 2 },
      { type: 'image', alt: 'arraylist vs linkedlist', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="13">
    <text x="300" y="22" text-anchor="middle" font-weight="bold">Big-O comparison</text>
    <text x="60" y="60" font-weight="bold">Operation</text>
    <text x="260" y="60" font-weight="bold" text-anchor="middle">ArrayList</text>
    <text x="460" y="60" font-weight="bold" text-anchor="middle">LinkedList</text>
    <line x1="20" y1="68" x2="580" y2="68" stroke="#999"/>

    <text x="60" y="90">get(i)</text>
    <text x="260" y="90" text-anchor="middle" fill="#3aa802">O(1)</text>
    <text x="460" y="90" text-anchor="middle" fill="#e53935">O(n)</text>

    <text x="60" y="115">addFirst</text>
    <text x="260" y="115" text-anchor="middle" fill="#e53935">O(n)</text>
    <text x="460" y="115" text-anchor="middle" fill="#3aa802">O(1)</text>

    <text x="60" y="140">addLast (avg)</text>
    <text x="260" y="140" text-anchor="middle" fill="#3aa802">O(1)*</text>
    <text x="460" y="140" text-anchor="middle" fill="#3aa802">O(1)</text>

    <text x="60" y="165">remove(i)</text>
    <text x="260" y="165" text-anchor="middle" fill="#e53935">O(n)</text>
    <text x="460" y="165" text-anchor="middle" fill="#e53935">O(n)</text>

    <text x="60" y="190">memory/element</text>
    <text x="260" y="190" text-anchor="middle" fill="#3aa802">low</text>
    <text x="460" y="190" text-anchor="middle" fill="#e53935">high (2 ptrs/node)</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'Rule of thumb: <strong>start with <code>ArrayList</code></strong>. Switch to <code>LinkedList</code> only with a benchmarked reason.' }
    ]},

    /* ============== CH 4: Choosing a List ============== */
    { id: 'dj-c4', title: 'Choosing a List', icon: '⚖️', sections: [
      { type: 'heading', text: 'Four flavors of List', level: 1 },
      { type: 'para', html: 'Java ships several <code>List</code> implementations. They share the API but differ in performance, thread-safety, and history.' },

      { type: 'image', alt: 'list comparison', svg:
`<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;display:block;margin:0 auto;">
  <rect width="700" height="260" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="350" y="22" text-anchor="middle" font-weight="bold" font-size="14">List implementations</text>

    <text x="100" y="60" font-weight="bold">Class</text>
    <text x="270" y="60" font-weight="bold" text-anchor="middle">Storage</text>
    <text x="430" y="60" font-weight="bold" text-anchor="middle">Thread-safe?</text>
    <text x="600" y="60" font-weight="bold" text-anchor="middle">Best for</text>
    <line x1="20" y1="68" x2="680" y2="68" stroke="#999"/>

    <text x="100" y="100" font-weight="bold" fill="#1cb0f6">ArrayList</text>
    <text x="270" y="100" text-anchor="middle">resizable array</text>
    <text x="430" y="100" text-anchor="middle" fill="#e53935">no</text>
    <text x="600" y="100" text-anchor="middle">general use</text>

    <text x="100" y="135" font-weight="bold" fill="#7c4dff">LinkedList</text>
    <text x="270" y="135" text-anchor="middle">doubly linked</text>
    <text x="430" y="135" text-anchor="middle" fill="#e53935">no</text>
    <text x="600" y="135" text-anchor="middle">queue/deque (rare)</text>

    <text x="100" y="170" font-weight="bold" fill="#ff9600">Vector</text>
    <text x="270" y="170" text-anchor="middle">resizable array</text>
    <text x="430" y="170" text-anchor="middle" fill="#3aa802">yes (sync)</text>
    <text x="600" y="170" text-anchor="middle">legacy</text>

    <text x="100" y="205" font-weight="bold" fill="#e53935">Stack</text>
    <text x="270" y="205" text-anchor="middle">extends Vector</text>
    <text x="430" y="205" text-anchor="middle" fill="#3aa802">yes (sync)</text>
    <text x="600" y="205" text-anchor="middle">legacy — use Deque</text>

    <text x="100" y="240" font-weight="bold" fill="#3aa802">CopyOnWriteArrayList</text>
    <text x="270" y="240" text-anchor="middle">array (copy on write)</text>
    <text x="430" y="240" text-anchor="middle" fill="#3aa802">yes (concurrent)</text>
    <text x="600" y="240" text-anchor="middle">many reads, few writes</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Vector and Stack — legacy', level: 2 },
      { type: 'para', html: '<code>Vector</code> and <code>Stack</code> predate the Collections Framework. Every method is <code>synchronized</code>, which is slower and rarely what you actually want. Modern code prefers <code>ArrayList</code> + an explicit lock or <code>Collections.synchronizedList</code>, and <code>ArrayDeque</code> for stacks.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Don't do this in new code:</span>
<span class="ty">Stack</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">Stack</span>&lt;&gt;();

<span class="com">// Prefer:</span>
<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
stack.<span class="fn">push</span>(<span class="num">1</span>);
stack.<span class="fn">pop</span>();` },

      { type: 'heading', text: 'Decision flow', level: 2 },
      { type: 'image', alt: 'list decision tree', svg:
`<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:700px;display:block;margin:0 auto;">
  <rect width="700" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="270" y="20" width="160" height="40" rx="20" fill="#7c4dff"/>
    <text x="350" y="45" text-anchor="middle" fill="white" font-weight="bold">Need a List?</text>

    <line x1="350" y1="60" x2="350" y2="90" stroke="#666" stroke-width="2"/>
    <rect x="240" y="90" width="220" height="40" rx="6" fill="#1cb0f6"/>
    <text x="350" y="115" text-anchor="middle" fill="white" font-weight="bold">Need thread safety?</text>

    <line x1="350" y1="130" x2="150" y2="160" stroke="#666"/>
    <line x1="350" y1="130" x2="550" y2="160" stroke="#666"/>
    <text x="220" y="155" fill="#666">no</text>
    <text x="450" y="155" fill="#666">yes</text>

    <rect x="50" y="160" width="200" height="40" rx="6" fill="#58cc02"/>
    <text x="150" y="185" text-anchor="middle" fill="white" font-weight="bold">ArrayList (default)</text>

    <rect x="450" y="160" width="200" height="40" rx="6" fill="#ff9600"/>
    <text x="550" y="185" text-anchor="middle" fill="white" font-weight="bold">read-heavy?</text>

    <line x1="550" y1="200" x2="430" y2="230" stroke="#666"/>
    <line x1="550" y1="200" x2="670" y2="230" stroke="#666"/>
    <text x="475" y="225" fill="#666">yes</text>
    <text x="615" y="225" fill="#666">no</text>

    <rect x="320" y="230" width="220" height="40" rx="6" fill="#3aa802"/>
    <text x="430" y="255" text-anchor="middle" fill="white" font-weight="bold" font-size="11">CopyOnWriteArrayList</text>

    <rect x="560" y="230" width="135" height="40" rx="6" fill="#e53935"/>
    <text x="627" y="255" text-anchor="middle" fill="white" font-weight="bold" font-size="11">synchronizedList</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Immutable lists', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Java 9+: small, fast, unmodifiable</span>
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>);
<span class="com">// xs.add(4); // throws UnsupportedOperationException</span>

<span class="com">// Make a defensive copy:</span>
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; copy = <span class="ty">List</span>.<span class="fn">copyOf</span>(other);` },

      { type: 'callout', kind: 'info', html: 'Immutable lists are great for <em>configuration</em>, <em>return values</em>, and <em>method arguments</em> — they document intent and prevent accidental mutation.' }
    ]},

    /* ============== CH 5: HashSet ============== */
    { id: 'dj-c5', title: 'HashSet', icon: '🎯', sections: [
      { type: 'heading', text: 'A Set keeps things unique', level: 1 },
      { type: 'para', html: 'A <code>Set</code> stores <strong>distinct</strong> elements — adding a duplicate is a no-op. <code>HashSet</code> is the workhorse: O(1) average for <code>add</code>, <code>contains</code>, and <code>remove</code>.' },

      { type: 'heading', text: 'Creating and using a HashSet', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.HashSet;
<span class="kw">import</span> java.util.Set;

<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; tags = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
tags.<span class="fn">add</span>(<span class="str">"java"</span>);
tags.<span class="fn">add</span>(<span class="str">"dsa"</span>);
tags.<span class="fn">add</span>(<span class="str">"java"</span>);  <span class="com">// already present → ignored</span>

<span class="ty">System</span>.out.<span class="fn">println</span>(tags.<span class="fn">size</span>());           <span class="com">// 2</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(tags.<span class="fn">contains</span>(<span class="str">"dsa"</span>)); <span class="com">// true</span>
tags.<span class="fn">remove</span>(<span class="str">"java"</span>);` },

      { type: 'heading', text: 'No order, no index', level: 2 },
      { type: 'callout', kind: 'warn', html: '<code>HashSet</code> does <strong>not</strong> preserve insertion order. Iteration may give elements in any order. If you need ordering, look at <code>LinkedHashSet</code> or <code>TreeSet</code>.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>));
<span class="kw">for</span> (<span class="ty">int</span> x : s) <span class="ty">System</span>.out.<span class="fn">println</span>(x);
<span class="com">// Could print 1 3 4 5 9 — but order is not guaranteed.</span>` },

      { type: 'heading', text: 'The hashCode / equals contract', level: 2 },
      { type: 'para', html: 'For a <code>HashSet</code> to work, your elements must implement both <code>hashCode()</code> and <code>equals()</code> consistently. If two objects are equal, they MUST have the same hash code.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Point</span> {
  <span class="ty">int</span> x, y;
  <span class="ty">Point</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) { <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y; }

  <span class="kw">@Override</span>
  <span class="kw">public boolean</span> <span class="fn">equals</span>(<span class="ty">Object</span> o) {
    <span class="kw">if</span> (!(o <span class="kw">instanceof</span> <span class="ty">Point</span> p)) <span class="kw">return false</span>;
    <span class="kw">return</span> x == p.x &amp;&amp; y == p.y;
  }

  <span class="kw">@Override</span>
  <span class="kw">public int</span> <span class="fn">hashCode</span>() {
    <span class="kw">return</span> <span class="ty">Objects</span>.<span class="fn">hash</span>(x, y);
  }
}` },
      { type: 'callout', kind: 'tip', html: 'Use your IDE\'s generator or <code>Objects.hash(...)</code> for hash codes — getting it right by hand is fiddly.' },

      { type: 'heading', text: 'Set operations', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; a = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; b = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>));

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; union = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
union.<span class="fn">addAll</span>(b);          <span class="com">// {1, 2, 3, 4}</span>

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; inter = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
inter.<span class="fn">retainAll</span>(b);       <span class="com">// {2, 3}</span>

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; diff = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a);
diff.<span class="fn">removeAll</span>(b);        <span class="com">// {1}</span>` },

      { type: 'heading', text: 'When to reach for a Set', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Deduplicating a stream of values.',
        'Membership tests (<code>contains</code>) where O(1) matters.',
        'Tracking "seen" items in graph or tree traversals.',
        'Computing unions/intersections/differences.'
      ]},

      { type: 'heading', text: 'Try it', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">String</span>[] words = {<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"a"</span>, <span class="str">"c"</span>, <span class="str">"b"</span>};
<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">String</span> w : words) seen.<span class="fn">add</span>(w);
<span class="ty">System</span>.out.<span class="fn">println</span>(seen.<span class="fn">size</span>()); <span class="com">// 3</span>` },

      { type: 'callout', kind: 'info', html: 'Internally, <code>HashSet</code> is backed by a <code>HashMap</code> where the keys are your elements and the values are a dummy object. So everything you know about <code>HashMap</code> applies.' }
    ]},

    /* ============== CH 6: TreeSet & LinkedHashSet ============== */
    { id: 'dj-c6', title: 'TreeSet & LinkedHashSet', icon: '🌳', sections: [
      { type: 'heading', text: 'Sets with order', level: 1 },
      { type: 'para', html: 'Sometimes you need order: <strong>insertion order</strong> (<code>LinkedHashSet</code>) or <strong>sorted order</strong> (<code>TreeSet</code>).' },

      { type: 'heading', text: 'LinkedHashSet — insertion order', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; s = <span class="kw">new</span> <span class="ty">LinkedHashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="str">"c"</span>);
s.<span class="fn">add</span>(<span class="str">"a"</span>);
s.<span class="fn">add</span>(<span class="str">"b"</span>);
s.<span class="fn">add</span>(<span class="str">"a"</span>);  <span class="com">// duplicate ignored, doesn't change order</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(s); <span class="com">// [c, a, b]</span>` },
      { type: 'callout', kind: 'info', html: '<code>LinkedHashSet</code> = <code>HashSet</code> performance + iteration order = insertion order. The cost: a tiny bit more memory per element.' },

      { type: 'heading', text: 'TreeSet — sorted', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeSet</span>&lt;<span class="ty">Integer</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;();
t.<span class="fn">add</span>(<span class="num">3</span>); t.<span class="fn">add</span>(<span class="num">1</span>); t.<span class="fn">add</span>(<span class="num">4</span>); t.<span class="fn">add</span>(<span class="num">1</span>); t.<span class="fn">add</span>(<span class="num">5</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(t); <span class="com">// [1, 3, 4, 5]</span>` },

      { type: 'heading', text: 'NavigableSet superpowers', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeSet</span>&lt;<span class="ty">Integer</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>, <span class="num">50</span>));

t.<span class="fn">first</span>();          <span class="com">// 10</span>
t.<span class="fn">last</span>();           <span class="com">// 50</span>
t.<span class="fn">floor</span>(<span class="num">25</span>);       <span class="com">// 20  (≤ 25)</span>
t.<span class="fn">ceiling</span>(<span class="num">25</span>);     <span class="com">// 30  (≥ 25)</span>
t.<span class="fn">lower</span>(<span class="num">30</span>);       <span class="com">// 20  (&lt; 30)</span>
t.<span class="fn">higher</span>(<span class="num">30</span>);      <span class="com">// 40  (&gt; 30)</span>
t.<span class="fn">headSet</span>(<span class="num">30</span>);     <span class="com">// [10, 20]</span>
t.<span class="fn">tailSet</span>(<span class="num">30</span>);     <span class="com">// [30, 40, 50]</span>
t.<span class="fn">subSet</span>(<span class="num">20</span>, <span class="num">40</span>);  <span class="com">// [20, 30]</span>
t.<span class="fn">descendingSet</span>(); <span class="com">// [50, 40, 30, 20, 10]</span>` },

      { type: 'heading', text: 'Custom ordering', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeSet</span>&lt;<span class="ty">String</span>&gt; byLen = <span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;(
  <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">String</span>::length)
    .<span class="fn">thenComparing</span>(<span class="ty">Comparator</span>.<span class="fn">naturalOrder</span>())
);
byLen.<span class="fn">add</span>(<span class="str">"hi"</span>);
byLen.<span class="fn">add</span>(<span class="str">"hello"</span>);
byLen.<span class="fn">add</span>(<span class="str">"hey"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(byLen); <span class="com">// [hi, hey, hello]</span>` },

      { type: 'heading', text: 'Performance trade-offs', level: 2 },
      { type: 'image', alt: 'set comparison', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="13">
    <text x="60" y="40" font-weight="bold">Set</text>
    <text x="240" y="40" font-weight="bold" text-anchor="middle">add/contains</text>
    <text x="400" y="40" font-weight="bold" text-anchor="middle">order</text>
    <text x="540" y="40" font-weight="bold" text-anchor="middle">extras</text>
    <line x1="20" y1="48" x2="580" y2="48" stroke="#999"/>

    <text x="60" y="80" fill="#1cb0f6" font-weight="bold">HashSet</text>
    <text x="240" y="80" text-anchor="middle" fill="#3aa802">O(1)</text>
    <text x="400" y="80" text-anchor="middle">none</text>
    <text x="540" y="80" text-anchor="middle">fastest</text>

    <text x="60" y="115" fill="#7c4dff" font-weight="bold">LinkedHashSet</text>
    <text x="240" y="115" text-anchor="middle" fill="#3aa802">O(1)</text>
    <text x="400" y="115" text-anchor="middle">insertion</text>
    <text x="540" y="115" text-anchor="middle">predictable iter</text>

    <text x="60" y="150" fill="#58cc02" font-weight="bold">TreeSet</text>
    <text x="240" y="150" text-anchor="middle" fill="#ff9600">O(log n)</text>
    <text x="400" y="150" text-anchor="middle">sorted</text>
    <text x="540" y="150" text-anchor="middle">range queries</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'Pick <strong>HashSet</strong> by default. Use <strong>LinkedHashSet</strong> when iteration order matters. Use <strong>TreeSet</strong> when you need sorting or range queries (floor/ceiling/subSet).' }
    ]},

    /* ============== CH 7: HashMap Essentials ============== */
    { id: 'dj-c7', title: 'HashMap Essentials', icon: '🗺️', sections: [
      { type: 'heading', text: 'Key/value storage', level: 1 },
      { type: 'para', html: 'A <code>Map</code> stores <strong>key → value</strong> pairs. Keys are unique; values can repeat. <code>HashMap</code> is the default — average O(1) for <code>put</code>, <code>get</code>, <code>containsKey</code>.' },

      { type: 'heading', text: 'Hello, HashMap', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.HashMap;
<span class="kw">import</span> java.util.Map;

<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
ages.<span class="fn">put</span>(<span class="str">"Ada"</span>, <span class="num">36</span>);
ages.<span class="fn">put</span>(<span class="str">"Linus"</span>, <span class="num">21</span>);
ages.<span class="fn">put</span>(<span class="str">"Ada"</span>, <span class="num">37</span>); <span class="com">// overwrites</span>

<span class="ty">Integer</span> a = ages.<span class="fn">get</span>(<span class="str">"Ada"</span>);          <span class="com">// 37</span>
<span class="ty">Integer</span> n = ages.<span class="fn">get</span>(<span class="str">"Nobody"</span>);       <span class="com">// null</span>
<span class="kw">boolean</span> has = ages.<span class="fn">containsKey</span>(<span class="str">"Ada"</span>); <span class="com">// true</span>` },

      { type: 'heading', text: 'How buckets and chaining work', level: 2 },
      { type: 'image', alt: 'hashmap buckets', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="300" y="22" text-anchor="middle" font-weight="bold" font-size="14">HashMap = bucket array + linked lists</text>
    <text x="60" y="60">hash(key) % size → bucket index</text>

    <g font-family="JetBrains Mono">
      <rect x="40" y="80" width="60" height="30" fill="#7c4dff"/><text x="70" y="100" text-anchor="middle" fill="white">0</text>
      <rect x="40" y="115" width="60" height="30" fill="#7c4dff"/><text x="70" y="135" text-anchor="middle" fill="white">1</text>
      <rect x="40" y="150" width="60" height="30" fill="#7c4dff"/><text x="70" y="170" text-anchor="middle" fill="white">2</text>
      <rect x="40" y="185" width="60" height="30" fill="#7c4dff"/><text x="70" y="205" text-anchor="middle" fill="white">3</text>
      <rect x="40" y="220" width="60" height="30" fill="#7c4dff"/><text x="70" y="240" text-anchor="middle" fill="white">4</text>
    </g>

    <line x1="100" y1="130" x2="140" y2="130" stroke="#666" stroke-width="2"/>
    <rect x="140" y="115" width="110" height="30" fill="#1cb0f6" rx="4"/>
    <text x="195" y="135" text-anchor="middle" fill="white" font-size="11">Ada → 37</text>

    <line x1="100" y1="165" x2="140" y2="165" stroke="#666" stroke-width="2"/>
    <rect x="140" y="150" width="110" height="30" fill="#1cb0f6" rx="4"/>
    <text x="195" y="170" text-anchor="middle" fill="white" font-size="11">Bob → 22</text>
    <line x1="250" y1="165" x2="280" y2="165" stroke="#666" stroke-width="2"/>
    <rect x="280" y="150" width="110" height="30" fill="#58cc02" rx="4"/>
    <text x="335" y="170" text-anchor="middle" fill="white" font-size="11">Eve → 19</text>

    <line x1="100" y1="235" x2="140" y2="235" stroke="#666" stroke-width="2"/>
    <rect x="140" y="220" width="110" height="30" fill="#1cb0f6" rx="4"/>
    <text x="195" y="240" text-anchor="middle" fill="white" font-size="11">Linus → 21</text>

    <text x="430" y="140" fill="#666" font-size="11">Bob and Eve</text>
    <text x="430" y="158" fill="#666" font-size="11">collide → chain</text>
  </g>
</svg>` },
      { type: 'para', html: 'When two keys hash to the same bucket, <code>HashMap</code> chains them in a list (or, since Java 8, a red-black tree when the chain gets long).' },

      { type: 'heading', text: 'Common methods', level: 2 },
      { type: 'code', lang: 'java', code:
`map.<span class="fn">put</span>(<span class="str">"k"</span>, <span class="num">1</span>);
map.<span class="fn">get</span>(<span class="str">"k"</span>);
map.<span class="fn">remove</span>(<span class="str">"k"</span>);
map.<span class="fn">size</span>();
map.<span class="fn">isEmpty</span>();
map.<span class="fn">containsKey</span>(<span class="str">"k"</span>);
map.<span class="fn">containsValue</span>(<span class="num">1</span>);
map.<span class="fn">clear</span>();` },

      { type: 'heading', text: 'Defaults and conditionals', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; counts = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();

<span class="com">// getOrDefault — never returns null</span>
<span class="ty">int</span> c = counts.<span class="fn">getOrDefault</span>(<span class="str">"x"</span>, <span class="num">0</span>);

<span class="com">// putIfAbsent — only sets if missing</span>
counts.<span class="fn">putIfAbsent</span>(<span class="str">"x"</span>, <span class="num">0</span>);

<span class="com">// merge — perfect for counters</span>
counts.<span class="fn">merge</span>(<span class="str">"x"</span>, <span class="num">1</span>, <span class="ty">Integer</span>::sum);

<span class="com">// computeIfAbsent — lazy default</span>
<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; groups = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
groups.<span class="fn">computeIfAbsent</span>(<span class="str">"evens"</span>, k -&gt; <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(<span class="num">2</span>);` },

      { type: 'heading', text: 'Iterating a Map', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// entrySet — keys + values together (preferred)</span>
<span class="kw">for</span> (<span class="ty">Map</span>.<span class="ty">Entry</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; e : counts.<span class="fn">entrySet</span>()) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(e.<span class="fn">getKey</span>() + <span class="str">" = "</span> + e.<span class="fn">getValue</span>());
}

<span class="com">// keys only</span>
<span class="kw">for</span> (<span class="ty">String</span> k : counts.<span class="fn">keySet</span>()) { ... }

<span class="com">// values only</span>
<span class="kw">for</span> (<span class="ty">Integer</span> v : counts.<span class="fn">values</span>()) { ... }

<span class="com">// lambda forEach</span>
counts.<span class="fn">forEach</span>((k, v) -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(k + <span class="str">":"</span> + v));` },

      { type: 'heading', text: 'A real example — word frequency', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">String</span>[] words = {<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"a"</span>, <span class="str">"c"</span>, <span class="str">"b"</span>, <span class="str">"a"</span>};
<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; freq = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">String</span> w : words) {
  freq.<span class="fn">merge</span>(w, <span class="num">1</span>, <span class="ty">Integer</span>::sum);
}
<span class="com">// {a=3, b=2, c=1}</span>` },

      { type: 'heading', text: 'Null keys and values', level: 2 },
      { type: 'callout', kind: 'info', html: '<code>HashMap</code> allows <strong>one null key</strong> and any number of null values. <code>TreeMap</code> does not allow null keys. <code>ConcurrentHashMap</code> disallows both.' },

      { type: 'heading', text: 'Step through a build', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();',
          'm.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);',
          'm.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);',
          'm.<span class="fn">merge</span>(<span class="str">"a"</span>, <span class="num">1</span>, <span class="ty">Integer</span>::sum);',
          'm.<span class="fn">remove</span>(<span class="str">"b"</span>);'
        ],
        steps: [
          { line: 0, vars: { m: '{}' }, note: 'Empty map.' },
          { line: 1, vars: { m: '{a=1}' }, note: 'Insert a → 1.' },
          { line: 2, vars: { m: '{a=1, b=2}' }, note: 'Insert b → 2.' },
          { line: 3, vars: { m: '{a=2, b=2}' }, note: 'Merge: 1 + 1 = 2.' },
          { line: 4, vars: { m: '{a=2}' }, note: 'Remove key b.' }
        ]
      }}
    ]},

    /* ============== CH 8: TreeMap & LinkedHashMap ============== */
    { id: 'dj-c8', title: 'TreeMap & LinkedHashMap', icon: '🗃️', sections: [
      { type: 'heading', text: 'Ordered Maps', level: 1 },
      { type: 'para', html: 'When you need ordered iteration over a map\'s keys, choose <code>LinkedHashMap</code> (insertion order) or <code>TreeMap</code> (sorted).' },

      { type: 'heading', text: 'LinkedHashMap', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">LinkedHashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"c"</span>, <span class="num">3</span>);
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
m.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m); <span class="com">// {c=3, a=1, b=2}</span>` },
      { type: 'callout', kind: 'tip', html: '<code>LinkedHashMap</code> also supports an <em>access-order</em> mode — perfect for building LRU caches. Override <code>removeEldestEntry</code> to cap size.' },

      { type: 'heading', text: 'A 5-line LRU cache', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">LRU</span>&lt;K, V&gt; <span class="kw">extends</span> <span class="ty">LinkedHashMap</span>&lt;K, V&gt; {
  <span class="kw">private final int</span> cap;
  <span class="ty">LRU</span>(<span class="ty">int</span> cap) { <span class="kw">super</span>(<span class="num">16</span>, <span class="num">0.75f</span>, <span class="kw">true</span>); <span class="kw">this</span>.cap = cap; }
  <span class="kw">@Override</span>
  <span class="kw">protected boolean</span> <span class="fn">removeEldestEntry</span>(<span class="ty">Map</span>.<span class="ty">Entry</span>&lt;K, V&gt; e) {
    <span class="kw">return</span> <span class="fn">size</span>() &gt; cap;
  }
}` },

      { type: 'heading', text: 'TreeMap', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; tm = <span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;();
tm.<span class="fn">put</span>(<span class="num">3</span>, <span class="str">"c"</span>);
tm.<span class="fn">put</span>(<span class="num">1</span>, <span class="str">"a"</span>);
tm.<span class="fn">put</span>(<span class="num">2</span>, <span class="str">"b"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(tm); <span class="com">// {1=a, 2=b, 3=c}</span>` },

      { type: 'heading', text: 'NavigableMap methods', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; tm = <span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;();
tm.<span class="fn">put</span>(<span class="num">10</span>, <span class="str">"ten"</span>);
tm.<span class="fn">put</span>(<span class="num">20</span>, <span class="str">"twenty"</span>);
tm.<span class="fn">put</span>(<span class="num">30</span>, <span class="str">"thirty"</span>);

tm.<span class="fn">firstKey</span>();          <span class="com">// 10</span>
tm.<span class="fn">lastKey</span>();           <span class="com">// 30</span>
tm.<span class="fn">floorKey</span>(<span class="num">25</span>);       <span class="com">// 20</span>
tm.<span class="fn">ceilingKey</span>(<span class="num">25</span>);     <span class="com">// 30</span>
tm.<span class="fn">headMap</span>(<span class="num">20</span>);        <span class="com">// {10=ten}</span>
tm.<span class="fn">tailMap</span>(<span class="num">20</span>);        <span class="com">// {20=..., 30=...}</span>
tm.<span class="fn">descendingMap</span>();    <span class="com">// reverse view</span>` },

      { type: 'heading', text: 'Pick by use case', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>HashMap</strong> — default, fastest, no ordering.',
        '<strong>LinkedHashMap</strong> — fast, predictable iteration, perfect for caches.',
        '<strong>TreeMap</strong> — sorted by key, range queries, slower (O(log n)).',
        '<strong>ConcurrentHashMap</strong> — multi-threaded code, no null keys/values.'
      ]},

      { type: 'callout', kind: 'warn', html: 'A <code>TreeMap</code>\'s keys must be <code>Comparable</code> (or you must supply a <code>Comparator</code>) — and the ordering must be consistent with <code>equals</code>, or you\'ll see surprising lookups.' }
    ]},

    /* ============== CH 9: Iteration Patterns ============== */
    { id: 'dj-c9', title: 'Iteration Patterns', icon: '🔁', sections: [
      { type: 'heading', text: 'Many ways to walk a collection', level: 1 },
      { type: 'para', html: 'Every <code>Collection</code> can be iterated. Java gives you several styles — pick the one that fits the job.' },

      { type: 'heading', text: '1. Enhanced for (a.k.a. for-each)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">for</span> (<span class="ty">String</span> name : names) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(name);
}` },
      { type: 'para', html: 'Cleanest and safest for read-only iteration. Works on any <code>Iterable</code>, arrays included.' },

      { type: 'heading', text: '2. Iterator', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Iterator</span>&lt;<span class="ty">String</span>&gt; it = names.<span class="fn">iterator</span>();
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) {
  <span class="ty">String</span> s = it.<span class="fn">next</span>();
  <span class="kw">if</span> (s.<span class="fn">isEmpty</span>()) it.<span class="fn">remove</span>();   <span class="com">// SAFE removal</span>
}` },
      { type: 'callout', kind: 'tip', html: 'Use <code>Iterator.remove()</code> when you need to remove elements <em>during</em> iteration. Modifying the collection by other means inside a for-each will throw <code>ConcurrentModificationException</code>.' },

      { type: 'heading', text: '3. Lambda forEach', level: 2 },
      { type: 'code', lang: 'java', code:
`names.<span class="fn">forEach</span>(s -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(s));
names.<span class="fn">forEach</span>(<span class="ty">System</span>.out::println);  <span class="com">// method reference</span>` },

      { type: 'heading', text: '4. Index-based for (Lists only)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; list.<span class="fn">size</span>(); i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(i + <span class="str">": "</span> + list.<span class="fn">get</span>(i));
}` },
      { type: 'callout', kind: 'warn', html: 'Avoid index-based iteration on <code>LinkedList</code> — each <code>get(i)</code> is O(n), so the loop is O(n²).' },

      { type: 'heading', text: 'ConcurrentModificationException', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; xs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>));

<span class="kw">for</span> (<span class="ty">String</span> s : xs) {
  <span class="kw">if</span> (s.<span class="fn">equals</span>(<span class="str">"b"</span>)) xs.<span class="fn">remove</span>(s); <span class="com">// throws!</span>
}` },
      { type: 'para', html: 'Java\'s collections are <em>fail-fast</em>: if the structure changes while you iterate, you get a <code>ConcurrentModificationException</code>. Use one of the safe patterns instead.' },

      { type: 'heading', text: 'Safe removal patterns', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// 1. Iterator.remove</span>
<span class="ty">Iterator</span>&lt;<span class="ty">String</span>&gt; it = xs.<span class="fn">iterator</span>();
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) {
  <span class="kw">if</span> (it.<span class="fn">next</span>().<span class="fn">equals</span>(<span class="str">"b"</span>)) it.<span class="fn">remove</span>();
}

<span class="com">// 2. removeIf — Java 8+, cleanest</span>
xs.<span class="fn">removeIf</span>(s -&gt; s.<span class="fn">equals</span>(<span class="str">"b"</span>));

<span class="com">// 3. Iterate backwards by index</span>
<span class="kw">for</span> (<span class="ty">int</span> i = xs.<span class="fn">size</span>() - <span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) {
  <span class="kw">if</span> (xs.<span class="fn">get</span>(i).<span class="fn">equals</span>(<span class="str">"b"</span>)) xs.<span class="fn">remove</span>(i);
}` },

      { type: 'heading', text: 'Iterating a Map', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>); m.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);

<span class="com">// preferred</span>
<span class="kw">for</span> (<span class="kw">var</span> e : m.<span class="fn">entrySet</span>()) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(e.<span class="fn">getKey</span>() + <span class="str">"->"</span> + e.<span class="fn">getValue</span>());
}

m.<span class="fn">forEach</span>((k, v) -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(k + <span class="str">"->"</span> + v));` }
    ]},

    /* ============== CH 10: Stacks in Java ============== */
    { id: 'dj-c10', title: 'Stacks in Java', icon: '📚', sections: [
      { type: 'heading', text: 'LIFO — last in, first out', level: 1 },
      { type: 'para', html: 'A <strong>stack</strong> is a collection where you can only access the most recently added item. Think of a stack of plates: you take from the top.' },

      { type: 'heading', text: 'Visualize it', level: 2 },
      { type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } },

      { type: 'heading', text: 'The legacy Stack class', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Stack</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">Stack</span>&lt;&gt;();
s.<span class="fn">push</span>(<span class="num">1</span>);
s.<span class="fn">push</span>(<span class="num">2</span>);
s.<span class="fn">push</span>(<span class="num">3</span>);
<span class="ty">Integer</span> top = s.<span class="fn">peek</span>();  <span class="com">// 3</span>
<span class="ty">Integer</span> out = s.<span class="fn">pop</span>();   <span class="com">// 3 (removes)</span>` },
      { type: 'callout', kind: 'warn', html: '<code>java.util.Stack</code> extends <code>Vector</code> and is synchronized on every method. The Java team itself recommends <code>Deque</code> for new code.' },

      { type: 'heading', text: 'The modern way — Deque as a stack', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
stack.<span class="fn">push</span>(<span class="num">1</span>);
stack.<span class="fn">push</span>(<span class="num">2</span>);
stack.<span class="fn">push</span>(<span class="num">3</span>);
<span class="ty">Integer</span> top = stack.<span class="fn">peek</span>();  <span class="com">// 3</span>
<span class="ty">Integer</span> out = stack.<span class="fn">pop</span>();   <span class="com">// 3</span>` },

      { type: 'heading', text: 'Why stacks matter', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Call stack</strong> — every function call pushes a frame.',
        '<strong>Undo</strong> systems in editors.',
        '<strong>Expression evaluation</strong> — infix → postfix.',
        '<strong>Balanced delimiters</strong> — parens, brackets, braces.',
        '<strong>DFS</strong> on graphs and trees.'
      ]},

      { type: 'heading', text: 'Classic problem — balanced parentheses', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">static boolean</span> <span class="fn">isBalanced</span>(<span class="ty">String</span> s) {
  <span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; st = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">char</span> c : s.<span class="fn">toCharArray</span>()) {
    <span class="kw">if</span> (c == <span class="str">'('</span> || c == <span class="str">'['</span> || c == <span class="str">'{'</span>) {
      st.<span class="fn">push</span>(c);
    } <span class="kw">else</span> {
      <span class="kw">if</span> (st.<span class="fn">isEmpty</span>()) <span class="kw">return false</span>;
      <span class="ty">char</span> top = st.<span class="fn">pop</span>();
      <span class="kw">if</span> (c == <span class="str">')'</span> &amp;&amp; top != <span class="str">'('</span>) <span class="kw">return false</span>;
      <span class="kw">if</span> (c == <span class="str">']'</span> &amp;&amp; top != <span class="str">'['</span>) <span class="kw">return false</span>;
      <span class="kw">if</span> (c == <span class="str">'}'</span> &amp;&amp; top != <span class="str">'{'</span>) <span class="kw">return false</span>;
    }
  }
  <span class="kw">return</span> st.<span class="fn">isEmpty</span>();
}` },

      { type: 'heading', text: 'Step through "([])"', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; st = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();',
          '<span class="com">// c = \'(\'</span> push',
          '<span class="com">// c = \'[\'</span> push',
          '<span class="com">// c = \']\'</span> pop → \'[\' ✓',
          '<span class="com">// c = \')\'</span> pop → \'(\' ✓',
          '<span class="kw">return</span> st.<span class="fn">isEmpty</span>();  <span class="com">// true</span>'
        ],
        steps: [
          { line: 0, vars: { st: '[]' }, note: 'Empty stack.' },
          { line: 1, vars: { st: '[(]' }, note: 'Push (.' },
          { line: 2, vars: { st: '[(, []' }, note: 'Push [.' },
          { line: 3, vars: { st: '[(]' }, note: 'Pop matches ].' },
          { line: 4, vars: { st: '[]' }, note: 'Pop matches ).' },
          { line: 5, vars: { st: '[]' }, note: 'Empty → balanced!' }
        ]
      }},

      { type: 'callout', kind: 'tip', html: 'Whenever you read a problem and think <em>"I need to undo / match / nest"</em>, a stack is probably the right tool.' }
    ]},

    /* ============== CH 11: Queues & Deques ============== */
    { id: 'dj-c11', title: 'Queues & Deques', icon: '🚶‍♂️', sections: [
      { type: 'heading', text: 'FIFO — first in, first out', level: 1 },
      { type: 'para', html: 'A <strong>queue</strong> models a line at a coffee shop: people join at the back, get served from the front. A <strong>deque</strong> (double-ended queue) lets you add and remove from <em>both</em> ends.' },

      { type: 'heading', text: 'Visualize a queue', level: 2 },
      { type: 'widget', name: 'stack-queue-vis', props: { kind: 'queue' } },

      { type: 'heading', text: 'Queue methods', level: 2 },
      { type: 'image', alt: 'queue methods', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="13">
    <text x="300" y="22" text-anchor="middle" font-weight="bold">Two flavors of each method</text>
    <text x="60" y="60" font-weight="bold">Operation</text>
    <text x="260" y="60" font-weight="bold" text-anchor="middle">Throws on fail</text>
    <text x="470" y="60" font-weight="bold" text-anchor="middle">Returns special</text>
    <line x1="20" y1="68" x2="580" y2="68" stroke="#999"/>

    <text x="60" y="95">Enqueue (back)</text>
    <text x="260" y="95" text-anchor="middle"><tspan font-family="JetBrains Mono">add(e)</tspan></text>
    <text x="470" y="95" text-anchor="middle"><tspan font-family="JetBrains Mono">offer(e)</tspan></text>

    <text x="60" y="125">Dequeue (front)</text>
    <text x="260" y="125" text-anchor="middle"><tspan font-family="JetBrains Mono">remove()</tspan></text>
    <text x="470" y="125" text-anchor="middle"><tspan font-family="JetBrains Mono">poll()</tspan></text>

    <text x="60" y="155">Peek (front)</text>
    <text x="260" y="155" text-anchor="middle"><tspan font-family="JetBrains Mono">element()</tspan></text>
    <text x="470" y="155" text-anchor="middle"><tspan font-family="JetBrains Mono">peek()</tspan></text>
  </g>
</svg>` },
      { type: 'callout', kind: 'tip', html: 'Prefer <code>offer</code>, <code>poll</code>, and <code>peek</code> — they return <code>null</code>/<code>false</code> instead of throwing. Easier to compose, fewer try/catch ceremonies.' },

      { type: 'heading', text: 'ArrayDeque — the recommended Queue', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Queue</span>&lt;<span class="ty">String</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="str">"a"</span>);
q.<span class="fn">offer</span>(<span class="str">"b"</span>);
q.<span class="fn">offer</span>(<span class="str">"c"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(q.<span class="fn">poll</span>()); <span class="com">// a</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(q.<span class="fn">peek</span>()); <span class="com">// b</span>` },

      { type: 'heading', text: 'Deque — both ends', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
d.<span class="fn">offerFirst</span>(<span class="num">1</span>);
d.<span class="fn">offerLast</span>(<span class="num">2</span>);
d.<span class="fn">offerFirst</span>(<span class="num">0</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(d);             <span class="com">// [0, 1, 2]</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(d.<span class="fn">pollFirst</span>()); <span class="com">// 0</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(d.<span class="fn">pollLast</span>());  <span class="com">// 2</span>` },

      { type: 'heading', text: 'BFS on a graph', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">static void</span> <span class="fn">bfs</span>(<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; g, <span class="ty">int</span> start) {
  <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  q.<span class="fn">offer</span>(start);
  seen.<span class="fn">add</span>(start);
  <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="ty">int</span> v = q.<span class="fn">poll</span>();
    <span class="ty">System</span>.out.<span class="fn">println</span>(v);
    <span class="kw">for</span> (<span class="ty">int</span> nbr : g.<span class="fn">getOrDefault</span>(v, <span class="ty">List</span>.<span class="fn">of</span>())) {
      <span class="kw">if</span> (seen.<span class="fn">add</span>(nbr)) q.<span class="fn">offer</span>(nbr);
    }
  }
}` },

      { type: 'heading', text: 'Blocking queues — multi-threading', level: 2 },
      { type: 'para', html: 'In concurrent code you often want a queue that <em>blocks</em> when empty/full. Look at <code>java.util.concurrent</code> for <code>ArrayBlockingQueue</code>, <code>LinkedBlockingQueue</code>, and <code>SynchronousQueue</code>.' },

      { type: 'heading', text: 'When to pick what', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>ArrayDeque</strong> — single-threaded, general purpose. Fast.',
        '<strong>LinkedList</strong> — works but is slower and uses more memory.',
        '<strong>PriorityQueue</strong> — not FIFO; pulls smallest/largest.',
        '<strong>BlockingQueue</strong> — producer/consumer patterns.'
      ]}
    ]},

    /* ============== CH 12: PriorityQueue ============== */
    { id: 'dj-c12', title: 'PriorityQueue', icon: '🏆', sections: [
      { type: 'heading', text: 'A heap in disguise', level: 1 },
      { type: 'para', html: '<code>PriorityQueue</code> is a <strong>binary heap</strong>. By default, it pulls the smallest element first (a <em>min-heap</em>). It does <em>not</em> store elements in sorted order — it stores them so the next <code>poll</code> is fast.' },

      { type: 'heading', text: 'Visualize the heap', level: 2 },
      { type: 'image', alt: 'binary heap', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="14">
    <text x="300" y="22" text-anchor="middle" font-weight="bold">Min-heap: parent ≤ children</text>
    <line x1="300" y1="60" x2="180" y2="120" stroke="#666" stroke-width="2"/>
    <line x1="300" y1="60" x2="420" y2="120" stroke="#666" stroke-width="2"/>
    <line x1="180" y1="120" x2="120" y2="180" stroke="#666" stroke-width="2"/>
    <line x1="180" y1="120" x2="240" y2="180" stroke="#666" stroke-width="2"/>
    <line x1="420" y1="120" x2="360" y2="180" stroke="#666" stroke-width="2"/>
    <line x1="420" y1="120" x2="480" y2="180" stroke="#666" stroke-width="2"/>

    <circle cx="300" cy="60" r="24" fill="#7c4dff"/><text x="300" y="65" text-anchor="middle" fill="white" font-weight="bold">1</text>
    <circle cx="180" cy="120" r="22" fill="#1cb0f6"/><text x="180" y="125" text-anchor="middle" fill="white" font-weight="bold">3</text>
    <circle cx="420" cy="120" r="22" fill="#1cb0f6"/><text x="420" y="125" text-anchor="middle" fill="white" font-weight="bold">5</text>
    <circle cx="120" cy="180" r="20" fill="#58cc02"/><text x="120" y="185" text-anchor="middle" fill="white" font-weight="bold">7</text>
    <circle cx="240" cy="180" r="20" fill="#58cc02"/><text x="240" y="185" text-anchor="middle" fill="white" font-weight="bold">4</text>
    <circle cx="360" cy="180" r="20" fill="#58cc02"/><text x="360" y="185" text-anchor="middle" fill="white" font-weight="bold">9</text>
    <circle cx="480" cy="180" r="20" fill="#58cc02"/><text x="480" y="185" text-anchor="middle" fill="white" font-weight="bold">6</text>

    <text x="50" y="215" font-size="11" fill="#666">array: [1, 3, 5, 7, 4, 9, 6]</text>
    <text x="50" y="232" font-size="11" fill="#666">indices: parent=(i-1)/2, left=2i+1, right=2i+2</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Min-heap (default)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
pq.<span class="fn">offer</span>(<span class="num">5</span>);
pq.<span class="fn">offer</span>(<span class="num">1</span>);
pq.<span class="fn">offer</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>()); <span class="com">// 1</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>()); <span class="com">// 3</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>()); <span class="com">// 5</span>` },

      { type: 'heading', text: 'Max-heap — supply a Comparator', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; max = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.<span class="fn">reverseOrder</span>());
max.<span class="fn">offer</span>(<span class="num">5</span>);
max.<span class="fn">offer</span>(<span class="num">1</span>);
max.<span class="fn">offer</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(max.<span class="fn">poll</span>()); <span class="com">// 5</span>` },

      { type: 'heading', text: 'Time complexity', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>offer</code> — O(log n)',
        '<code>poll</code> — O(log n)',
        '<code>peek</code> — O(1)',
        '<code>contains</code> — O(n) (linear scan)'
      ]},

      { type: 'heading', text: 'Top-K elements', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Top K largest using a min-heap of size K</span>
<span class="kw">static</span> <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; <span class="fn">topK</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> k) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> x : arr) {
    pq.<span class="fn">offer</span>(x);
    <span class="kw">if</span> (pq.<span class="fn">size</span>() &gt; k) pq.<span class="fn">poll</span>();
  }
  <span class="kw">return new</span> <span class="ty">ArrayList</span>&lt;&gt;(pq);
}` },

      { type: 'heading', text: 'Custom objects', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">record</span> <span class="ty">Task</span>(<span class="ty">String</span> name, <span class="ty">int</span> priority) {}

<span class="ty">PriorityQueue</span>&lt;<span class="ty">Task</span>&gt; q = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(
  <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Task</span>::priority)
);
q.<span class="fn">offer</span>(<span class="kw">new</span> <span class="ty">Task</span>(<span class="str">"email"</span>, <span class="num">5</span>));
q.<span class="fn">offer</span>(<span class="kw">new</span> <span class="ty">Task</span>(<span class="str">"fire!"</span>, <span class="num">1</span>));
q.<span class="fn">offer</span>(<span class="kw">new</span> <span class="ty">Task</span>(<span class="str">"snack"</span>, <span class="num">9</span>));
<span class="ty">System</span>.out.<span class="fn">println</span>(q.<span class="fn">poll</span>().<span class="fn">name</span>()); <span class="com">// fire!</span>` },

      { type: 'heading', text: 'Heapsort in one line', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; sorted = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">5</span>, <span class="num">2</span>, <span class="num">8</span>, <span class="num">1</span>));
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) sorted.<span class="fn">add</span>(pq.<span class="fn">poll</span>());
<span class="com">// [1, 2, 5, 8] — O(n log n)</span>` },

      { type: 'callout', kind: 'info', html: 'A heap is not a sorted list — iterating a <code>PriorityQueue</code> directly does <strong>not</strong> give elements in priority order. Only <code>poll</code> in a loop does.' }
    ]},

    /* ============== CH 13: Comparable & Comparator ============== */
    { id: 'dj-c13', title: 'Comparable & Comparator', icon: '⚖️', sections: [
      { type: 'heading', text: 'How Java sorts', level: 1 },
      { type: 'para', html: 'To sort or order objects, Java needs to know how to compare two of them. There are two ways: implement <code>Comparable</code> (the natural order, baked in) or supply a <code>Comparator</code> (an external ordering).' },

      { type: 'heading', text: 'Comparable — natural order', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Book</span> <span class="kw">implements</span> <span class="ty">Comparable</span>&lt;<span class="ty">Book</span>&gt; {
  <span class="ty">String</span> title;
  <span class="ty">int</span> year;
  <span class="ty">Book</span>(<span class="ty">String</span> t, <span class="ty">int</span> y) { title = t; year = y; }

  <span class="kw">@Override</span>
  <span class="kw">public int</span> <span class="fn">compareTo</span>(<span class="ty">Book</span> o) {
    <span class="kw">return</span> <span class="ty">Integer</span>.<span class="fn">compare</span>(<span class="kw">this</span>.year, o.year);
  }
}` },
      { type: 'callout', kind: 'info', html: '<code>compareTo</code> returns a <strong>negative</strong> int if <code>this</code> &lt; other, <strong>zero</strong> if equal, <strong>positive</strong> if greater. Don\'t roll your own subtraction — use <code>Integer.compare</code> to avoid overflow.' },

      { type: 'heading', text: 'Comparator — external orderings', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Book</span>&gt; books = ...;

<span class="com">// by title alphabetically</span>
books.<span class="fn">sort</span>(<span class="ty">Comparator</span>.<span class="fn">comparing</span>(b -&gt; b.title));

<span class="com">// by year descending</span>
books.<span class="fn">sort</span>(<span class="ty">Comparator</span>.<span class="fn">comparingInt</span>((<span class="ty">Book</span> b) -&gt; b.year).<span class="fn">reversed</span>());

<span class="com">// multi-field: by year, then title</span>
books.<span class="fn">sort</span>(
  <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>((<span class="ty">Book</span> b) -&gt; b.year)
    .<span class="fn">thenComparing</span>(b -&gt; b.title)
);` },

      { type: 'heading', text: 'Method references make this cleaner', level: 2 },
      { type: 'code', lang: 'java', code:
`books.<span class="fn">sort</span>(<span class="ty">Comparator</span>.<span class="fn">comparing</span>(<span class="ty">Book</span>::getTitle));
books.<span class="fn">sort</span>(<span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Book</span>::getYear).<span class="fn">reversed</span>());` },

      { type: 'heading', text: 'Static helpers on Comparator', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>Comparator.naturalOrder()</code> — uses <code>compareTo</code>',
        '<code>Comparator.reverseOrder()</code> — flips natural order',
        '<code>Comparator.nullsFirst(other)</code> — handles nulls',
        '<code>Comparator.nullsLast(other)</code> — handles nulls',
        '<code>thenComparing(...)</code> — tie-breaker'
      ]},

      { type: 'heading', text: 'Where they\'re used', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Collections</span>.<span class="fn">sort</span>(list, cmp);
list.<span class="fn">sort</span>(cmp);
<span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;(cmp);
<span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;(cmp);
<span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(cmp);
stream.<span class="fn">sorted</span>(cmp);
stream.<span class="fn">min</span>(cmp);
stream.<span class="fn">max</span>(cmp);` },

      { type: 'heading', text: 'Consistency with equals', level: 2 },
      { type: 'callout', kind: 'warn', html: 'If <code>compareTo</code> says two objects are "equal" (returns 0) but <code>equals</code> says they\'re not, sorted collections like <code>TreeSet</code> will misbehave. Make them consistent or document the discrepancy.' },

      { type: 'heading', text: 'Lambda or class — same thing', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// lambda</span>
<span class="ty">Comparator</span>&lt;<span class="ty">String</span>&gt; byLen = (a, b) -&gt; <span class="ty">Integer</span>.<span class="fn">compare</span>(a.<span class="fn">length</span>(), b.<span class="fn">length</span>());

<span class="com">// anonymous class — pre-Java 8 style</span>
<span class="ty">Comparator</span>&lt;<span class="ty">String</span>&gt; byLen2 = <span class="kw">new</span> <span class="ty">Comparator</span>&lt;&gt;() {
  <span class="kw">@Override</span>
  <span class="kw">public int</span> <span class="fn">compare</span>(<span class="ty">String</span> a, <span class="ty">String</span> b) {
    <span class="kw">return</span> <span class="ty">Integer</span>.<span class="fn">compare</span>(a.<span class="fn">length</span>(), b.<span class="fn">length</span>());
  }
};` }
    ]},

    /* ============== CH 14: Sorting Collections ============== */
    { id: 'dj-c14', title: 'Sorting Collections', icon: '🧹', sections: [
      { type: 'heading', text: 'Sort it your way', level: 1 },
      { type: 'para', html: 'Java\'s sorting is fast, stable, and battle-tested. Two utility classes do most of the heavy lifting: <code>Collections</code> for lists, <code>Arrays</code> for arrays.' },

      { type: 'heading', text: 'Watch a sort in action', level: 2 },
      { type: 'widget', name: 'sort-vis', props: { values: [42, 7, 19, 88, 3, 56, 21, 64, 12] } },

      { type: 'heading', text: 'Collections.sort', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>, <span class="num">2</span>));
<span class="ty">Collections</span>.<span class="fn">sort</span>(nums);
<span class="ty">System</span>.out.<span class="fn">println</span>(nums); <span class="com">// [1, 1, 2, 3, 4, 5, 9]</span>

<span class="com">// reverse</span>
<span class="ty">Collections</span>.<span class="fn">sort</span>(nums, <span class="ty">Comparator</span>.<span class="fn">reverseOrder</span>());

<span class="com">// or use the method on List directly (Java 8+)</span>
nums.<span class="fn">sort</span>(<span class="kw">null</span>); <span class="com">// natural order</span>` },

      { type: 'heading', text: 'Arrays.sort', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] xs = {<span class="num">5</span>, <span class="num">2</span>, <span class="num">8</span>, <span class="num">1</span>};
<span class="ty">Arrays</span>.<span class="fn">sort</span>(xs);                <span class="com">// in place</span>

<span class="ty">String</span>[] ss = {<span class="str">"b"</span>, <span class="str">"a"</span>, <span class="str">"c"</span>};
<span class="ty">Arrays</span>.<span class="fn">sort</span>(ss, <span class="ty">Comparator</span>.<span class="fn">reverseOrder</span>());

<span class="com">// sort a range</span>
<span class="ty">Arrays</span>.<span class="fn">sort</span>(xs, <span class="num">1</span>, <span class="num">3</span>);          <span class="com">// indices [1, 3)</span>` },

      { type: 'heading', text: 'Stable sort', level: 2 },
      { type: 'para', html: 'Java\'s sort is <strong>stable</strong>: equal elements retain their relative order. That matters for multi-key sorts. You can sort by a secondary key first, then by the primary — and the secondary order is preserved within equal primary keys.' },
      { type: 'callout', kind: 'info', html: 'For object arrays and Lists Java uses TimSort (an adaptive merge sort). For primitive arrays it uses Dual-Pivot Quicksort (which is faster but not stable — but stability doesn\'t matter for primitives anyway).' },

      { type: 'heading', text: 'Multi-field sort with chaining', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">record</span> <span class="ty">Person</span>(<span class="ty">String</span> name, <span class="ty">int</span> age, <span class="ty">String</span> city) {}

<span class="ty">List</span>&lt;<span class="ty">Person</span>&gt; ppl = ...;
ppl.<span class="fn">sort</span>(
  <span class="ty">Comparator</span>.<span class="fn">comparing</span>(<span class="ty">Person</span>::city)
    .<span class="fn">thenComparingInt</span>(<span class="ty">Person</span>::age)
    .<span class="fn">thenComparing</span>(<span class="ty">Person</span>::name)
);` },

      { type: 'heading', text: 'Sort with streams (non-mutating)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; sorted = nums.<span class="fn">stream</span>()
  .<span class="fn">sorted</span>()
  .<span class="fn">toList</span>();

<span class="ty">List</span>&lt;<span class="ty">Person</span>&gt; byAgeDesc = ppl.<span class="fn">stream</span>()
  .<span class="fn">sorted</span>(<span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Person</span>::age).<span class="fn">reversed</span>())
  .<span class="fn">toList</span>();` },

      { type: 'heading', text: 'Reverse, shuffle, min, max', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Collections</span>.<span class="fn">reverse</span>(list);
<span class="ty">Collections</span>.<span class="fn">shuffle</span>(list);
<span class="ty">Integer</span> small = <span class="ty">Collections</span>.<span class="fn">min</span>(list);
<span class="ty">Integer</span> big   = <span class="ty">Collections</span>.<span class="fn">max</span>(list);
<span class="ty">int</span> freq    = <span class="ty">Collections</span>.<span class="fn">frequency</span>(list, <span class="num">7</span>);` },

      { type: 'callout', kind: 'tip', html: 'Sort once, search many: combine <code>Collections.sort</code> with <code>Collections.binarySearch</code> when you\'ll lookup the same list repeatedly.' }
    ]},

    /* ============== CH 15: Implementing Linked List ============== */
    { id: 'dj-c15', title: 'Implementing Linked List', icon: '🛠️', sections: [
      { type: 'heading', text: 'Build it yourself', level: 1 },
      { type: 'para', html: 'Now we\'re going inside the box. A <strong>singly linked list</strong> is a chain of <em>nodes</em>; each node holds a value and a reference to the next node. The list itself holds a reference to the first node — the <em>head</em>.' },

      { type: 'heading', text: 'See it', level: 2 },
      { type: 'widget', name: 'linked-list-vis', props: {} },

      { type: 'heading', text: 'The Node class', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Node</span>&lt;T&gt; {
  T value;
  <span class="ty">Node</span>&lt;T&gt; next;
  <span class="ty">Node</span>(T value) { <span class="kw">this</span>.value = value; }
}` },

      { type: 'heading', text: 'The list shell', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">MyList</span>&lt;T&gt; {
  <span class="kw">private</span> <span class="ty">Node</span>&lt;T&gt; head;
  <span class="kw">private int</span> size;

  <span class="kw">public int</span> <span class="fn">size</span>() { <span class="kw">return</span> size; }
  <span class="kw">public boolean</span> <span class="fn">isEmpty</span>() { <span class="kw">return</span> size == <span class="num">0</span>; }
}` },

      { type: 'heading', text: 'addFirst — O(1)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public void</span> <span class="fn">addFirst</span>(T value) {
  <span class="ty">Node</span>&lt;T&gt; node = <span class="kw">new</span> <span class="ty">Node</span>&lt;&gt;(value);
  node.next = head;
  head = node;
  size++;
}` },

      { type: 'heading', text: 'addLast — O(n)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public void</span> <span class="fn">addLast</span>(T value) {
  <span class="ty">Node</span>&lt;T&gt; node = <span class="kw">new</span> <span class="ty">Node</span>&lt;&gt;(value);
  <span class="kw">if</span> (head == <span class="kw">null</span>) {
    head = node;
  } <span class="kw">else</span> {
    <span class="ty">Node</span>&lt;T&gt; cur = head;
    <span class="kw">while</span> (cur.next != <span class="kw">null</span>) cur = cur.next;
    cur.next = node;
  }
  size++;
}` },
      { type: 'callout', kind: 'tip', html: 'Keep an extra <code>tail</code> pointer to make <code>addLast</code> O(1). Real implementations almost always do this.' },

      { type: 'heading', text: 'find / contains', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public boolean</span> <span class="fn">contains</span>(T value) {
  <span class="kw">for</span> (<span class="ty">Node</span>&lt;T&gt; cur = head; cur != <span class="kw">null</span>; cur = cur.next) {
    <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(cur.value, value)) <span class="kw">return true</span>;
  }
  <span class="kw">return false</span>;
}` },

      { type: 'heading', text: 'removeFirst — O(1)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public</span> T <span class="fn">removeFirst</span>() {
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">throw new</span> <span class="ty">NoSuchElementException</span>();
  T v = head.value;
  head = head.next;
  size--;
  <span class="kw">return</span> v;
}` },

      { type: 'heading', text: 'remove(value) — O(n)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public boolean</span> <span class="fn">remove</span>(T value) {
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return false</span>;
  <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(head.value, value)) {
    <span class="fn">removeFirst</span>(); <span class="kw">return true</span>;
  }
  <span class="ty">Node</span>&lt;T&gt; prev = head;
  <span class="kw">while</span> (prev.next != <span class="kw">null</span>) {
    <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(prev.next.value, value)) {
      prev.next = prev.next.next;
      size--;
      <span class="kw">return true</span>;
    }
    prev = prev.next;
  }
  <span class="kw">return false</span>;
}` },

      { type: 'heading', text: 'Walk through removal', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="com">// list: 10 → 20 → 30 → 40, remove(30)</span>',
          '<span class="ty">Node</span>&lt;T&gt; prev = head;     <span class="com">// prev=10</span>',
          'prev.next.value == <span class="num">30</span>?  <span class="com">// 20 ≠ 30</span>',
          'prev = prev.next;          <span class="com">// prev=20</span>',
          'prev.next.value == <span class="num">30</span>?  <span class="com">// 30 ✓</span>',
          'prev.next = prev.next.next; <span class="com">// 20→40</span>'
        ],
        steps: [
          { line: 0, vars: { list: '10→20→30→40' }, note: 'Starting list.' },
          { line: 1, vars: { prev: '10', list: '10→20→30→40' }, note: 'prev starts at head.' },
          { line: 2, vars: { prev: '10' }, note: 'prev.next=20, not 30.' },
          { line: 3, vars: { prev: '20' }, note: 'advance.' },
          { line: 4, vars: { prev: '20' }, note: 'prev.next=30 — match!' },
          { line: 5, vars: { list: '10→20→40' }, note: 'Skip over 30. Done.' }
        ]
      }},

      { type: 'heading', text: 'Reverse the list', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public void</span> <span class="fn">reverse</span>() {
  <span class="ty">Node</span>&lt;T&gt; prev = <span class="kw">null</span>, cur = head;
  <span class="kw">while</span> (cur != <span class="kw">null</span>) {
    <span class="ty">Node</span>&lt;T&gt; nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  head = prev;
}` },

      { type: 'callout', kind: 'info', html: 'Reversing a linked list in place is a classic interview question. Three pointers — <code>prev</code>, <code>cur</code>, <code>next</code> — and you walk through, flipping each <code>cur.next</code>.' }
    ]},

    /* ============== CH 16: Implementing Stack & Queue ============== */
    { id: 'dj-c16', title: 'Implementing Stack & Queue', icon: '⚙️', sections: [
      { type: 'heading', text: 'Roll your own', level: 1 },
      { type: 'para', html: 'Stacks and queues are abstractions, not data structures. You can build each on top of an array, a linked list, or even two of the other.' },

      { type: 'heading', text: 'Array-backed stack', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">MyStack</span>&lt;T&gt; {
  <span class="kw">private</span> <span class="ty">Object</span>[] data = <span class="kw">new</span> <span class="ty">Object</span>[<span class="num">16</span>];
  <span class="kw">private int</span> top = <span class="num">0</span>;

  <span class="kw">public void</span> <span class="fn">push</span>(T x) {
    <span class="kw">if</span> (top == data.length) <span class="fn">grow</span>();
    data[top++] = x;
  }

  <span class="kw">@SuppressWarnings</span>(<span class="str">"unchecked"</span>)
  <span class="kw">public</span> T <span class="fn">pop</span>() {
    <span class="kw">if</span> (top == <span class="num">0</span>) <span class="kw">throw new</span> <span class="ty">NoSuchElementException</span>();
    T v = (T) data[--top];
    data[top] = <span class="kw">null</span>;  <span class="com">// help GC</span>
    <span class="kw">return</span> v;
  }

  <span class="kw">private void</span> <span class="fn">grow</span>() {
    data = <span class="ty">Arrays</span>.<span class="fn">copyOf</span>(data, data.length * <span class="num">2</span>);
  }
}` },

      { type: 'heading', text: 'Visualize push/pop', level: 2 },
      { type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } },

      { type: 'heading', text: 'Circular buffer queue', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">MyQueue</span>&lt;T&gt; {
  <span class="kw">private</span> <span class="ty">Object</span>[] data;
  <span class="kw">private int</span> head, tail, size;

  <span class="ty">MyQueue</span>(<span class="ty">int</span> cap) { data = <span class="kw">new</span> <span class="ty">Object</span>[cap]; }

  <span class="kw">public void</span> <span class="fn">offer</span>(T x) {
    <span class="kw">if</span> (size == data.length) <span class="kw">throw new</span> <span class="ty">IllegalStateException</span>();
    data[tail] = x;
    tail = (tail + <span class="num">1</span>) % data.length;
    size++;
  }

  <span class="kw">@SuppressWarnings</span>(<span class="str">"unchecked"</span>)
  <span class="kw">public</span> T <span class="fn">poll</span>() {
    <span class="kw">if</span> (size == <span class="num">0</span>) <span class="kw">return null</span>;
    T v = (T) data[head];
    data[head] = <span class="kw">null</span>;
    head = (head + <span class="num">1</span>) % data.length;
    size--;
    <span class="kw">return</span> v;
  }
}` },
      { type: 'callout', kind: 'tip', html: 'A <em>circular</em> buffer treats the array as a ring — when <code>tail</code> hits the end, it wraps to 0. That keeps both ends O(1) without shifting elements.' },

      { type: 'heading', text: 'Two-stack queue', level: 2 },
      { type: 'para', html: 'Classic interview problem: build a queue using only two stacks. Push goes onto stack A; pop pulls from stack B, refilling B by draining A when B is empty.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">QueueFromStacks</span>&lt;T&gt; {
  <span class="kw">private</span> <span class="ty">Deque</span>&lt;T&gt; in = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">private</span> <span class="ty">Deque</span>&lt;T&gt; out = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();

  <span class="kw">public void</span> <span class="fn">offer</span>(T x) { in.<span class="fn">push</span>(x); }

  <span class="kw">public</span> T <span class="fn">poll</span>() {
    <span class="kw">if</span> (out.<span class="fn">isEmpty</span>()) <span class="fn">drain</span>();
    <span class="kw">return</span> out.<span class="fn">isEmpty</span>() ? <span class="kw">null</span> : out.<span class="fn">pop</span>();
  }

  <span class="kw">private void</span> <span class="fn">drain</span>() {
    <span class="kw">while</span> (!in.<span class="fn">isEmpty</span>()) out.<span class="fn">push</span>(in.<span class="fn">pop</span>());
  }
}` },
      { type: 'callout', kind: 'info', html: 'Each element is pushed twice and popped twice, so amortized cost per operation is O(1).' },

      { type: 'heading', text: 'Linked-node stack', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">LinkedStack</span>&lt;T&gt; {
  <span class="kw">private</span> <span class="ty">Node</span>&lt;T&gt; top;

  <span class="kw">public void</span> <span class="fn">push</span>(T v) {
    <span class="ty">Node</span>&lt;T&gt; n = <span class="kw">new</span> <span class="ty">Node</span>&lt;&gt;(v);
    n.next = top;
    top = n;
  }

  <span class="kw">public</span> T <span class="fn">pop</span>() {
    <span class="kw">if</span> (top == <span class="kw">null</span>) <span class="kw">return null</span>;
    T v = top.value;
    top = top.next;
    <span class="kw">return</span> v;
  }
}` },

      { type: 'heading', text: 'Which to choose', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Array-backed — better cache behavior, faster in practice.',
        'Linked — never reallocates, naturally grows without copies.',
        'Two-stack queue — elegant exercise, occasional real use.',
        'Circular buffer queue — ideal for bounded queues (sensor data, audio).'
      ]}
    ]},

    /* ============== CH 17: Implementing BST ============== */
    { id: 'dj-c17', title: 'Implementing BST', icon: '🌲', sections: [
      { type: 'heading', text: 'A Binary Search Tree', level: 1 },
      { type: 'para', html: 'A <strong>BST</strong> is a binary tree where every left subtree contains <em>smaller</em> values and every right subtree contains <em>larger</em> values. Lookups, inserts, and deletes are O(h) where <em>h</em> is the height.' },

      { type: 'heading', text: 'Play with one', level: 2 },
      { type: 'widget', name: 'bst-vis', props: {} },

      { type: 'heading', text: 'TreeNode', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">TreeNode</span> {
  <span class="ty">int</span> value;
  <span class="ty">TreeNode</span> left, right;
  <span class="ty">TreeNode</span>(<span class="ty">int</span> v) { value = v; }
}` },

      { type: 'heading', text: 'Insert', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">BST</span> {
  <span class="kw">private</span> <span class="ty">TreeNode</span> root;

  <span class="kw">public void</span> <span class="fn">insert</span>(<span class="ty">int</span> v) {
    root = <span class="fn">insert</span>(root, v);
  }

  <span class="kw">private</span> <span class="ty">TreeNode</span> <span class="fn">insert</span>(<span class="ty">TreeNode</span> n, <span class="ty">int</span> v) {
    <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return new</span> <span class="ty">TreeNode</span>(v);
    <span class="kw">if</span> (v &lt; n.value)      n.left  = <span class="fn">insert</span>(n.left,  v);
    <span class="kw">else if</span> (v &gt; n.value) n.right = <span class="fn">insert</span>(n.right, v);
    <span class="com">// duplicate? ignore</span>
    <span class="kw">return</span> n;
  }
}` },

      { type: 'heading', text: 'Search', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public boolean</span> <span class="fn">contains</span>(<span class="ty">int</span> v) {
  <span class="ty">TreeNode</span> cur = root;
  <span class="kw">while</span> (cur != <span class="kw">null</span>) {
    <span class="kw">if</span> (v == cur.value) <span class="kw">return true</span>;
    cur = (v &lt; cur.value) ? cur.left : cur.right;
  }
  <span class="kw">return false</span>;
}` },

      { type: 'heading', text: 'In-order traversal (sorted!)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public</span> <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; <span class="fn">inorder</span>() {
  <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; out = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="fn">inorder</span>(root, out);
  <span class="kw">return</span> out;
}

<span class="kw">private void</span> <span class="fn">inorder</span>(<span class="ty">TreeNode</span> n, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; out) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="fn">inorder</span>(n.left,  out);
  out.<span class="fn">add</span>(n.value);
  <span class="fn">inorder</span>(n.right, out);
}` },
      { type: 'callout', kind: 'info', html: 'In-order traversal of a BST visits values in <strong>sorted order</strong>. This is one of the most elegant properties of a BST.' },

      { type: 'heading', text: 'Build & traverse', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">BST</span> bst = <span class="kw">new</span> <span class="ty">BST</span>();',
          'bst.<span class="fn">insert</span>(<span class="num">5</span>);',
          'bst.<span class="fn">insert</span>(<span class="num">3</span>);',
          'bst.<span class="fn">insert</span>(<span class="num">7</span>);',
          'bst.<span class="fn">insert</span>(<span class="num">1</span>);',
          '<span class="ty">System</span>.out.<span class="fn">println</span>(bst.<span class="fn">inorder</span>());'
        ],
        steps: [
          { line: 0, vars: { tree: '∅' }, note: 'Empty tree.' },
          { line: 1, vars: { tree: '5' }, note: '5 becomes the root.' },
          { line: 2, vars: { tree: '5{L:3}' }, note: '3 < 5 → left.' },
          { line: 3, vars: { tree: '5{L:3, R:7}' }, note: '7 > 5 → right.' },
          { line: 4, vars: { tree: '5{L:3{L:1}, R:7}' }, note: '1 < 5, then 1 < 3 → left-left.' },
          { line: 5, vars: { result: '[1, 3, 5, 7]' }, note: 'In-order yields sorted output.' }
        ]
      }},

      { type: 'heading', text: 'Worst case — unbalanced!', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Inserting <em>already sorted</em> values turns a BST into a linked list. Height becomes <em>n</em>, operations become O(n). Real-world systems use <strong>self-balancing</strong> trees (AVL, Red-Black) to keep height O(log n). Java\'s <code>TreeMap</code>/<code>TreeSet</code> use Red-Black trees.' },

      { type: 'heading', text: 'Min, max, size', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public int</span> <span class="fn">min</span>() {
  <span class="ty">TreeNode</span> cur = root;
  <span class="kw">while</span> (cur.left != <span class="kw">null</span>) cur = cur.left;
  <span class="kw">return</span> cur.value;
}

<span class="kw">public int</span> <span class="fn">size</span>(<span class="ty">TreeNode</span> n) {
  <span class="kw">return</span> n == <span class="kw">null</span> ? <span class="num">0</span> : <span class="num">1</span> + <span class="fn">size</span>(n.left) + <span class="fn">size</span>(n.right);
}` }
    ]},

    /* ============== CH 18: Implementing HashMap ============== */
    { id: 'dj-c18', title: 'Implementing HashMap', icon: '🔑', sections: [
      { type: 'heading', text: 'A tiny hash map', level: 1 },
      { type: 'para', html: 'Let\'s build a simple hash map. It will use <strong>separate chaining</strong>: an array of buckets, each bucket a linked list of entries. Just like real <code>HashMap</code>, minus the fancy resizing and treeification.' },

      { type: 'heading', text: 'Anatomy of a hash map', level: 2 },
      { type: 'image', alt: 'hash map anatomy', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="60" y="40">key</text>
    <rect x="100" y="20" width="80" height="32" fill="#1cb0f6" rx="6"/>
    <text x="140" y="40" text-anchor="middle" fill="white">"Ada"</text>
    <text x="200" y="40">— hash() →</text>
    <rect x="290" y="20" width="90" height="32" fill="#ff9600" rx="6"/>
    <text x="335" y="40" text-anchor="middle" fill="white">0x9F4E</text>
    <text x="395" y="40">% N →</text>
    <rect x="460" y="20" width="60" height="32" fill="#58cc02" rx="6"/>
    <text x="490" y="40" text-anchor="middle" fill="white">idx 3</text>

    <g font-family="JetBrains Mono">
      <rect x="40"  y="100" width="60" height="36" fill="#7c4dff"/><text x="70" y="123" text-anchor="middle" fill="white">0</text>
      <rect x="110" y="100" width="60" height="36" fill="#7c4dff"/><text x="140" y="123" text-anchor="middle" fill="white">1</text>
      <rect x="180" y="100" width="60" height="36" fill="#7c4dff"/><text x="210" y="123" text-anchor="middle" fill="white">2</text>
      <rect x="250" y="100" width="60" height="36" fill="#5e35d5"/><text x="280" y="123" text-anchor="middle" fill="white">3</text>
      <rect x="320" y="100" width="60" height="36" fill="#7c4dff"/><text x="350" y="123" text-anchor="middle" fill="white">4</text>
    </g>

    <line x1="310" y1="136" x2="310" y2="160" stroke="#666" stroke-width="2"/>
    <rect x="240" y="160" width="140" height="34" fill="#1cb0f6" rx="4"/>
    <text x="310" y="182" text-anchor="middle" fill="white" font-size="11">Ada → 37</text>
    <line x1="380" y1="177" x2="410" y2="177" stroke="#666" stroke-width="2"/>
    <rect x="410" y="160" width="140" height="34" fill="#1cb0f6" rx="4"/>
    <text x="480" y="182" text-anchor="middle" fill="white" font-size="11">Eve → 19 (chain)</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Entry node', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Entry</span>&lt;K, V&gt; {
  <span class="kw">final</span> K key;
  V value;
  <span class="ty">Entry</span>&lt;K, V&gt; next;
  <span class="ty">Entry</span>(K k, V v) { key = k; value = v; }
}` },

      { type: 'heading', text: 'Skeleton', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">MyMap</span>&lt;K, V&gt; {
  <span class="kw">private</span> <span class="ty">Entry</span>&lt;K, V&gt;[] buckets;
  <span class="kw">private int</span> size;

  <span class="kw">@SuppressWarnings</span>(<span class="str">"unchecked"</span>)
  <span class="ty">MyMap</span>() {
    buckets = (<span class="ty">Entry</span>&lt;K, V&gt;[]) <span class="kw">new</span> <span class="ty">Entry</span>[<span class="num">16</span>];
  }

  <span class="kw">private int</span> <span class="fn">bucket</span>(<span class="ty">Object</span> key) {
    <span class="kw">int</span> h = (key == <span class="kw">null</span>) ? <span class="num">0</span> : key.<span class="fn">hashCode</span>();
    <span class="kw">return</span> (h &amp; <span class="num">0x7FFFFFFF</span>) % buckets.length;
  }
}` },
      { type: 'callout', kind: 'info', html: 'We <code>&amp; 0x7FFFFFFF</code> to force a non-negative result before <code>%</code>, since hash codes can be negative.' },

      { type: 'heading', text: 'put', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public</span> V <span class="fn">put</span>(K key, V value) {
  <span class="kw">int</span> i = <span class="fn">bucket</span>(key);
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;K, V&gt; e = buckets[i]; e != <span class="kw">null</span>; e = e.next) {
    <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(e.key, key)) {
      V old = e.value;
      e.value = value;
      <span class="kw">return</span> old;
    }
  }
  <span class="ty">Entry</span>&lt;K, V&gt; head = <span class="kw">new</span> <span class="ty">Entry</span>&lt;&gt;(key, value);
  head.next = buckets[i];
  buckets[i] = head;
  size++;
  <span class="kw">return null</span>;
}` },

      { type: 'heading', text: 'get', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public</span> V <span class="fn">get</span>(<span class="ty">Object</span> key) {
  <span class="kw">int</span> i = <span class="fn">bucket</span>(key);
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;K, V&gt; e = buckets[i]; e != <span class="kw">null</span>; e = e.next) {
    <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(e.key, key)) <span class="kw">return</span> e.value;
  }
  <span class="kw">return null</span>;
}` },

      { type: 'heading', text: 'remove', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public</span> V <span class="fn">remove</span>(<span class="ty">Object</span> key) {
  <span class="kw">int</span> i = <span class="fn">bucket</span>(key);
  <span class="ty">Entry</span>&lt;K, V&gt; prev = <span class="kw">null</span>;
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;K, V&gt; e = buckets[i]; e != <span class="kw">null</span>; e = e.next) {
    <span class="kw">if</span> (<span class="ty">Objects</span>.<span class="fn">equals</span>(e.key, key)) {
      <span class="kw">if</span> (prev == <span class="kw">null</span>) buckets[i] = e.next;
      <span class="kw">else</span>             prev.next  = e.next;
      size--;
      <span class="kw">return</span> e.value;
    }
    prev = e;
  }
  <span class="kw">return null</span>;
}` },

      { type: 'heading', text: 'Why resize?', level: 2 },
      { type: 'para', html: 'As the map fills up, chains get long and operations slow down. Real hash maps measure the <em>load factor</em> (size / capacity) and double the bucket array when it crosses ~0.75, rehashing each entry into the new array.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">private void</span> <span class="fn">resize</span>() {
  <span class="ty">Entry</span>&lt;K, V&gt;[] old = buckets;
  buckets = (<span class="ty">Entry</span>&lt;K, V&gt;[]) <span class="kw">new</span> <span class="ty">Entry</span>[old.length * <span class="num">2</span>];
  size = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;K, V&gt; head : old) {
    <span class="kw">for</span> (<span class="ty">Entry</span>&lt;K, V&gt; e = head; e != <span class="kw">null</span>; e = e.next) {
      <span class="fn">put</span>(e.key, e.value);
    }
  }
}` },

      { type: 'callout', kind: 'tip', html: 'Building a <code>HashMap</code> from scratch is the best way to internalize what hash codes are for, what collisions look like, and why <code>equals</code>/<code>hashCode</code> consistency matters. You\'re ready to read the real source code now!' },

      { type: 'heading', text: 'You made it!', level: 2 },
      { type: 'para', html: 'You walked through Java\'s built-in collections, then built the most important ones from scratch. Next stop: graphs, tries, balanced trees, and algorithms. Onward!' }
    ]}

  ]
});

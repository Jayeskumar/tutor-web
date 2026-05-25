PUSH({
  id: 'dsa-java',
  name: 'DSA in Java',
  icon: '⚡',
  color: '#ff6b6b',
  description: 'Implement classic data structures and algorithms in Java.',
  units: [
    {
      id: 'dj-u1-collections',
      name: 'Unit 1 · The Collections Framework',
      description: 'Tour the Java Collections Framework and learn why it is the foundation of DSA in Java.',
      lessons: [
        {
          id: 'dj-u1-l1',
          name: 'Meet the Framework',
          icon: '🗺️',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'The Java Collections Framework',
              content: `<p>The <b>Java Collections Framework</b> (JCF) lives in <code>java.util</code> and unifies the way we work with groups of objects. Every list, set, map, and queue you will ever use in interview prep is implemented here.</p>
<p>The framework has four major interfaces:</p>
<ul>
<li><b>Collection</b> – the root interface for groups of elements</li>
<li><b>List</b> – ordered, allows duplicates (ArrayList, LinkedList)</li>
<li><b>Set</b> – no duplicates (HashSet, TreeSet, LinkedHashSet)</li>
<li><b>Map</b> – key/value pairs (HashMap, TreeMap, LinkedHashMap)</li>
<li><b>Queue / Deque</b> – FIFO/LIFO structures (ArrayDeque, PriorityQueue)</li>
</ul>
<div class="code-block"><span class="kw">import</span> java.util.*; <span class="com">// brings in everything below</span>
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which package contains the Collections Framework?',
              options: [
                { text: 'java.lang', code: true },
                { text: 'java.util', code: true },
                { text: 'java.collection', code: true },
                { text: 'java.io', code: true }
              ],
              correct: 1,
              explanation: 'All the core collection interfaces and classes live inside java.util.'
            },
            {
              type: 'true-false',
              statement: 'Set in Java allows duplicate elements.',
              correct: false,
              explanation: 'Set guarantees uniqueness. Adding a duplicate is a no-op.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each interface to a concrete implementation.',
              leftLabel: 'Interface',
              rightLabel: 'Implementation',
              pairs: [
                { left: 'List', right: 'ArrayList' },
                { left: 'Set', right: 'HashSet' },
                { left: 'Map', right: 'HashMap' },
                { left: 'Queue', right: 'ArrayDeque' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the import that brings in ArrayList, HashMap, etc.',
              codeLines: [
                { html: '<span class="kw">import</span> java.<span class="fn">_BLANK_</span>.*;' }
              ],
              tokens: ['util', 'lang', 'io', 'collection'],
              correctAnswer: 'util',
              explanation: 'java.util.* imports every public type in the util package, including all collections.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a generic ArrayList of Integers.',
              tokens: ['ArrayList', '<', 'Integer', '>', 'list', '=', 'new', 'ArrayList', '<>', '(', ')', ';', 'String', 'Double'],
              correctOrder: ['ArrayList', '<', 'Integer', '>', 'list', '=', 'new', 'ArrayList', '<>', '(', ')', ';'],
              explanation: 'The diamond operator <> infers the type parameter from the left-hand side.'
            }
          ]
        },
        {
          id: 'dj-u1-l2',
          name: 'Generics in Collections',
          icon: '💠',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Why Generics?',
              content: `<p>Before Java 5, collections stored raw <code>Object</code> references. You had to cast on every read and the compiler could not catch type errors.</p>
<p><b>Generics</b> add a type parameter so the compiler enforces what you put in and lets you read it without casting.</p>
<div class="code-block"><span class="com">// raw – avoid</span>
<span class="ty">List</span> raw = <span class="kw">new</span> <span class="ty">ArrayList</span>();
raw.<span class="fn">add</span>(<span class="str">"hi"</span>);
<span class="ty">String</span> s = (<span class="ty">String</span>) raw.<span class="fn">get</span>(<span class="num">0</span>); <span class="com">// cast required</span>

<span class="com">// generic – preferred</span>
<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; safe = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
safe.<span class="fn">add</span>(<span class="str">"hi"</span>);
<span class="ty">String</span> t = safe.<span class="fn">get</span>(<span class="num">0</span>); <span class="com">// no cast!</span></div>
<p>Primitives can't be generic types. Use the boxed types: <code>Integer</code>, <code>Double</code>, <code>Character</code>, <code>Boolean</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which declaration uses generics correctly?',
              options: [
                { text: 'List<int> nums = new ArrayList<>();', code: true },
                { text: 'List<Integer> nums = new ArrayList<>();', code: true },
                { text: 'List<Integer> nums = new ArrayList<int>();', code: true },
                { text: 'List nums = new ArrayList<Integer>;', code: true }
              ],
              correct: 1,
              explanation: 'Generics use reference types (Integer not int), and the diamond operator on the right.'
            },
            {
              type: 'true-false',
              statement: 'You can write List<int> in Java to make a list of primitive ints.',
              correct: false,
              explanation: 'Generics require reference types. Use Integer (the boxed wrapper) instead.'
            },
            {
              type: 'fill-blank',
              prompt: 'Create a map from String keys to Double values.',
              codeLines: [
                { html: '<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">_BLANK_</span>&gt; prices = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();' }
              ],
              tokens: ['Double', 'double', 'Float', 'Number'],
              correctAnswer: 'Double',
              explanation: 'Generics need reference types, so the boxed Double works while the primitive double does not.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a HashMap from String to Integer.',
              tokens: ['HashMap', '<', 'String', ',', 'Integer', '>', 'm', '=', 'new', 'HashMap', '<>', '(', ')', ';', 'ArrayList'],
              correctOrder: ['HashMap', '<', 'String', ',', 'Integer', '>', 'm', '=', 'new', 'HashMap', '<>', '(', ')', ';'],
              explanation: 'Type parameters are comma separated inside the angle brackets.'
            },
            {
              type: 'type-answer',
              prompt: 'What is the boxed (wrapper) class used in a generic collection for the primitive int?',
              code: '',
              accept: ['Integer'],
              explanation: 'Integer is the wrapper class for the primitive int.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u2-arraylist',
      name: 'Unit 2 · ArrayList Deep Dive',
      description: 'Master the most-used list in Java: ArrayList.',
      lessons: [
        {
          id: 'dj-u2-l1',
          name: 'Creating & Adding',
          icon: '➕',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'ArrayList Basics',
              content: `<p><code>ArrayList</code> is a dynamic array. It grows automatically when full and offers fast random access.</p>
<div class="code-block"><span class="ty">ArrayList</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
names.<span class="fn">add</span>(<span class="str">"Anna"</span>);       <span class="com">// append to end</span>
names.<span class="fn">add</span>(<span class="num">0</span>, <span class="str">"Bob"</span>);    <span class="com">// insert at index</span>
<span class="ty">int</span> n = names.<span class="fn">size</span>();   <span class="com">// 2</span></div>
<p>Time complexities:</p>
<ul>
<li><b>add(e)</b> at end – amortized O(1)</li>
<li><b>add(i, e)</b> at index – O(n) (shifts elements)</li>
<li><b>get(i)</b> / <b>set(i, e)</b> – O(1)</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does ArrayList.add(e) return?',
              options: [
                { text: 'void', code: true },
                { text: 'boolean (always true)', code: true },
                { text: 'the new size', code: true },
                { text: 'the added element', code: true }
              ],
              correct: 1,
              explanation: 'add(e) returns boolean. For ArrayList it always returns true, but the Collection interface contract allows refusal.'
            },
            {
              type: 'fill-blank',
              prompt: 'Append "Z" to the list.',
              codeLines: [
                { html: 'list.<span class="fn">_BLANK_</span>(<span class="str">"Z"</span>);' }
              ],
              tokens: ['add', 'push', 'insert', 'append'],
              correctAnswer: 'add',
              explanation: 'ArrayList uses add() to append. push/insert/append are not part of the API.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">ArrayList</span>&lt;<span class="ty">Integer</span>&gt; a = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
a.<span class="fn">add</span>(<span class="num">1</span>);
a.<span class="fn">add</span>(<span class="num">2</span>);
a.<span class="fn">add</span>(<span class="num">0</span>, <span class="num">9</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(a);`,
              options: ['[1, 2, 9]', '[9, 1, 2]', '[0, 9, 1, 2]', '[1, 9, 2]'],
              correct: 1,
              explanation: 'add(0, 9) inserts 9 at index 0, shifting 1 and 2 right.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Create an ArrayList of Strings.',
              tokens: ['ArrayList', '<', 'String', '>', 'a', '=', 'new', 'ArrayList', '<>', '(', ')', ';', 'Integer'],
              correctOrder: ['ArrayList', '<', 'String', '>', 'a', '=', 'new', 'ArrayList', '<>', '(', ')', ';'],
              explanation: 'Diamond operator on the right keeps the line concise.'
            },
            {
              type: 'true-false',
              statement: 'ArrayList grows automatically when it reaches capacity.',
              correct: true,
              explanation: 'It allocates a new internal array (typically 1.5x bigger) and copies elements.'
            }
          ]
        },
        {
          id: 'dj-u2-l2',
          name: 'Reading, Updating, Removing',
          icon: '🔎',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Access & Mutation',
              content: `<p>The four essential mutation methods:</p>
<div class="code-block"><span class="ty">int</span> v = list.<span class="fn">get</span>(<span class="num">2</span>);         <span class="com">// read by index</span>
list.<span class="fn">set</span>(<span class="num">2</span>, <span class="num">99</span>);         <span class="com">// replace at index</span>
list.<span class="fn">remove</span>(<span class="num">2</span>);            <span class="com">// remove by index</span>
list.<span class="fn">remove</span>(<span class="ty">Integer</span>.<span class="fn">valueOf</span>(<span class="num">99</span>)); <span class="com">// remove by value</span></div>
<p>Watch out: <code>remove(int)</code> uses the index but <code>remove(Object)</code> uses equality. For an <code>ArrayList&lt;Integer&gt;</code> wrap with <code>Integer.valueOf(...)</code> to remove by value.</p>
<p>Searching:</p>
<ul>
<li><code>indexOf(e)</code> – first index, or -1</li>
<li><code>contains(e)</code> – boolean, O(n)</li>
<li><code>isEmpty()</code> – true if size is 0</li>
<li><code>clear()</code> – empties the list</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the time complexity of get(i) on ArrayList?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 0,
              explanation: 'It is backed by an array, so random access is constant time.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Given ArrayList<Integer> list with [10, 20, 30], what does list.remove(1) do?',
              options: [
                { text: 'removes the value 1', code: true },
                { text: 'removes index 1 (the value 20)', code: true },
                { text: 'throws an exception', code: true },
                { text: 'removes the first 1 found', code: true }
              ],
              correct: 1,
              explanation: 'remove(int) matches the index overload. To remove the value 1 use remove(Integer.valueOf(1)).'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">ArrayList</span>&lt;<span class="ty">String</span>&gt; a = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
a.<span class="fn">add</span>(<span class="str">"a"</span>); a.<span class="fn">add</span>(<span class="str">"b"</span>); a.<span class="fn">add</span>(<span class="str">"c"</span>);
a.<span class="fn">set</span>(<span class="num">1</span>, <span class="str">"B"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(a);`,
              options: ['[a, b, c]', '[B, b, c]', '[a, B, c]', '[a, b, B]'],
              correct: 2,
              explanation: 'set replaces the element at the given index.'
            },
            {
              type: 'fill-blank',
              prompt: 'Check if list is empty.',
              codeLines: [
                { html: '<span class="kw">if</span> (list.<span class="fn">_BLANK_</span>()) { ... }' }
              ],
              tokens: ['isEmpty', 'empty', 'hasElements', 'size'],
              correctAnswer: 'isEmpty',
              explanation: 'isEmpty() returns a boolean. size() returns an int.'
            },
            {
              type: 'true-false',
              statement: 'list.contains(x) runs in O(1) on an ArrayList.',
              correct: false,
              explanation: 'contains scans the array, so it is O(n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the method to its purpose.',
              leftLabel: 'Method',
              rightLabel: 'Purpose',
              pairs: [
                { left: 'get(i)', right: 'read by index' },
                { left: 'set(i, v)', right: 'replace by index' },
                { left: 'indexOf(v)', right: 'find first index' },
                { left: 'clear()', right: 'remove all elements' }
              ]
            }
          ]
        },
        {
          id: 'dj-u2-l3',
          name: 'Iterating Over a List',
          icon: '🔁',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Three Ways to Iterate',
              content: `<p>Java gives you several idiomatic loops:</p>
<div class="code-block"><span class="com">// 1. classic for</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; list.<span class="fn">size</span>(); i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(list.<span class="fn">get</span>(i));
}

<span class="com">// 2. enhanced for-each</span>
<span class="kw">for</span> (<span class="ty">String</span> s : list) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(s);
}

<span class="com">// 3. iterator (lets you remove safely)</span>
<span class="ty">Iterator</span>&lt;<span class="ty">String</span>&gt; it = list.<span class="fn">iterator</span>();
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) {
  <span class="ty">String</span> s = it.<span class="fn">next</span>();
}</div>
<p>The enhanced for-each is the most readable, but you cannot call <code>list.remove(...)</code> inside it (you will get <code>ConcurrentModificationException</code>). Use an Iterator's own <code>remove()</code> instead.</p>`
            },
            {
              type: 'reorder-code',
              prompt: 'Order the lines to iterate with an Iterator.',
              lines: [
                'Iterator<String> it = list.iterator();',
                'while (it.hasNext()) {',
                '    String s = it.next();',
                '    System.out.println(s);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'multiple-choice',
              prompt: 'Which loop allows safe removal of the current element?',
              options: [
                { text: 'classic for', code: true },
                { text: 'for-each', code: true },
                { text: 'Iterator with it.remove()', code: true },
                { text: 'forEach with lambda', code: true }
              ],
              correct: 2,
              explanation: 'Iterator.remove() is the only safe way to delete during iteration.'
            },
            {
              type: 'true-false',
              statement: 'You can call list.remove(x) inside a for-each loop without issues.',
              correct: false,
              explanation: 'It throws ConcurrentModificationException. Use an Iterator instead.'
            },
            {
              type: 'fill-blank',
              prompt: 'Iterate with for-each.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">String</span> s <span class="fn">_BLANK_</span> list) { ... }' }
              ],
              tokens: [':', 'in', 'of', '->'],
              correctAnswer: ':',
              explanation: 'Java\'s for-each uses a colon, not in/of like Python or JS.'
            },
            {
              type: 'output-predict',
              prompt: 'How many lines print?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>);
<span class="kw">for</span> (<span class="ty">int</span> x : xs) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(x);
}`,
              options: ['3', '4', '5', 'compile error'],
              correct: 1,
              explanation: 'The list has four elements, so the body runs four times.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a for-each loop over List<String> names.',
              tokens: ['for', '(', 'String', 'name', ':', 'names', ')', '{', '}', 'int', 'in'],
              correctOrder: ['for', '(', 'String', 'name', ':', 'names', ')', '{', '}'],
              explanation: 'for-each uses Type var : iterable.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u3-linkedlist',
      name: 'Unit 3 · LinkedList in Java',
      description: 'Doubly-linked list with Deque powers built-in.',
      lessons: [
        {
          id: 'dj-u3-l1',
          name: 'LinkedList Basics',
          icon: '🔗',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'java.util.LinkedList',
              content: `<p>Java's <code>LinkedList</code> is a doubly-linked list that implements both <code>List</code> and <code>Deque</code>. That means you get list-style indexing and queue/stack methods in one class.</p>
<div class="code-block"><span class="ty">LinkedList</span>&lt;<span class="ty">Integer</span>&gt; list = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
list.<span class="fn">add</span>(<span class="num">1</span>);           <span class="com">// add to tail</span>
list.<span class="fn">addFirst</span>(<span class="num">0</span>);      <span class="com">// add to head</span>
list.<span class="fn">addLast</span>(<span class="num">2</span>);       <span class="com">// add to tail (same as add)</span>
<span class="ty">int</span> h = list.<span class="fn">getFirst</span>();
<span class="ty">int</span> t = list.<span class="fn">getLast</span>();
list.<span class="fn">removeFirst</span>();
list.<span class="fn">removeLast</span>();</div>
<p>Tradeoffs vs ArrayList:</p>
<ul>
<li>Insert/remove at head or tail – O(1)</li>
<li>get(i) by index – O(n) (must walk)</li>
<li>Higher memory per node (prev/next pointers)</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which interface does Java\'s LinkedList NOT implement?',
              options: [
                { text: 'List', code: true },
                { text: 'Deque', code: true },
                { text: 'Queue', code: true },
                { text: 'Set', code: true }
              ],
              correct: 3,
              explanation: 'LinkedList is a List/Deque/Queue but not a Set – it allows duplicates.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add an element to the front of a LinkedList.',
              codeLines: [
                { html: 'list.<span class="fn">_BLANK_</span>(<span class="num">42</span>);' }
              ],
              tokens: ['addFirst', 'add', 'prepend', 'pushFront'],
              correctAnswer: 'addFirst',
              explanation: 'addFirst inserts at index 0 in O(1). add() appends to the tail.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">LinkedList</span>&lt;<span class="ty">Integer</span>&gt; l = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
l.<span class="fn">add</span>(<span class="num">1</span>); l.<span class="fn">add</span>(<span class="num">2</span>);
l.<span class="fn">addFirst</span>(<span class="num">0</span>);
l.<span class="fn">addLast</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(l);`,
              options: ['[0, 1, 2, 3]', '[1, 2, 0, 3]', '[3, 0, 1, 2]', '[0, 3, 1, 2]'],
              correct: 0,
              explanation: 'addFirst goes to head, addLast (and add) go to tail.'
            },
            {
              type: 'true-false',
              statement: 'list.get(5) is O(1) on a LinkedList.',
              correct: false,
              explanation: 'LinkedList must walk from head (or tail) to the index, so it is O(n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the LinkedList method to its operation.',
              leftLabel: 'Method',
              rightLabel: 'Operation',
              pairs: [
                { left: 'addFirst(e)', right: 'insert at head' },
                { left: 'addLast(e)', right: 'insert at tail' },
                { left: 'removeFirst()', right: 'pop head' },
                { left: 'peekLast()', right: 'view tail without removing' }
              ]
            }
          ]
        },
        {
          id: 'dj-u3-l2',
          name: 'LinkedList as Queue/Deque',
          icon: '🚏',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A Two-In-One Structure',
              content: `<p>Because <code>LinkedList</code> implements <code>Deque</code>, you can use it as a queue or stack without a wrapper.</p>
<div class="code-block"><span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="num">1</span>);        <span class="com">// enqueue (tail)</span>
q.<span class="fn">offer</span>(<span class="num">2</span>);
<span class="ty">int</span> head = q.<span class="fn">poll</span>(); <span class="com">// dequeue (head) -&gt; 1</span>

<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
stack.<span class="fn">push</span>(<span class="num">10</span>);    <span class="com">// addFirst</span>
stack.<span class="fn">push</span>(<span class="num">20</span>);
<span class="ty">int</span> top = stack.<span class="fn">pop</span>(); <span class="com">// 20</span></div>
<p>In modern code, prefer <code>ArrayDeque</code> over <code>LinkedList</code> as a queue/stack – it has better cache performance.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which pair of methods give you FIFO behaviour?',
              options: [
                { text: 'push / pop', code: true },
                { text: 'offer / poll', code: true },
                { text: 'addFirst / removeFirst', code: true },
                { text: 'set / get', code: true }
              ],
              correct: 1,
              explanation: 'offer adds at the tail and poll removes from the head – classic queue.'
            },
            {
              type: 'true-false',
              statement: 'For a Deque, push(x) is equivalent to addFirst(x).',
              correct: true,
              explanation: 'Both insert at the front of the deque.'
            },
            {
              type: 'fill-blank',
              prompt: 'Dequeue from a Queue<Integer> q.',
              codeLines: [
                { html: '<span class="ty">int</span> n = q.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['poll', 'pop', 'shift', 'dequeue'],
              correctAnswer: 'poll',
              explanation: 'poll() returns and removes the head, or null if empty. (remove() also works but throws on empty.)'
            },
            {
              type: 'tap-tokens',
              prompt: 'Declare a Deque backed by ArrayDeque.',
              tokens: ['Deque', '<', 'Integer', '>', 'dq', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';', 'Stack'],
              correctOrder: ['Deque', '<', 'Integer', '>', 'dq', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';'],
              explanation: 'ArrayDeque is the preferred Deque implementation in modern Java.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
d.<span class="fn">push</span>(<span class="num">1</span>);
d.<span class="fn">push</span>(<span class="num">2</span>);
d.<span class="fn">push</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(d.<span class="fn">pop</span>());`,
              options: ['1', '2', '3', 'null'],
              correct: 2,
              explanation: 'push uses LIFO order, so the last pushed (3) pops first.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u4-choose-list',
      name: 'Unit 4 · Choosing a List',
      description: 'Pick the right list for the job.',
      lessons: [
        {
          id: 'dj-u4-l1',
          name: 'List Performance Cheat Sheet',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'When to Pick Which',
              content: `<p>Four List implementations, four tradeoffs.</p>
<ul>
<li><b>ArrayList</b> – dynamic array. Fast random access, fast tail insert, slow middle insert. <b>Default choice.</b></li>
<li><b>LinkedList</b> – doubly-linked. Fast head/tail insert. Slow get(i). Mostly used for its Deque API.</li>
<li><b>Vector</b> – synchronised ArrayList. Legacy – use <code>Collections.synchronizedList</code> or <code>CopyOnWriteArrayList</code> instead.</li>
<li><b>Stack</b> – legacy class extending Vector. Prefer <code>Deque</code> via <code>ArrayDeque</code> as a stack.</li>
</ul>
<div class="code-block"><span class="com">// modern idioms</span>
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; arr = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; queue = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You need O(1) get(i) and lots of random access. Pick:',
              options: [
                { text: 'LinkedList', code: true },
                { text: 'ArrayList', code: true },
                { text: 'Stack', code: true },
                { text: 'HashSet', code: true }
              ],
              correct: 1,
              explanation: 'Only ArrayList has true constant-time indexed access.'
            },
            {
              type: 'multiple-choice',
              prompt: 'You want a stack. The recommended modern class is:',
              options: [
                { text: 'java.util.Stack', code: true },
                { text: 'Vector', code: true },
                { text: 'ArrayDeque', code: true },
                { text: 'PriorityQueue', code: true }
              ],
              correct: 2,
              explanation: 'ArrayDeque has push/pop/peek and is faster than the legacy Stack class.'
            },
            {
              type: 'true-false',
              statement: 'Vector is thread-safe but generally discouraged in modern Java.',
              correct: true,
              explanation: 'Its methods are synchronized which is rarely what you want. Prefer ArrayList plus explicit concurrency tools.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match data structure to its best-fit use case.',
              leftLabel: 'Structure',
              rightLabel: 'Use case',
              pairs: [
                { left: 'ArrayList', right: 'random access by index' },
                { left: 'LinkedList', right: 'frequent head insertions' },
                { left: 'ArrayDeque', right: 'fast stack / queue' },
                { left: 'CopyOnWriteArrayList', right: 'many readers, few writers' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Prefer the interface type on the left side of a declaration.',
              codeLines: [
                { html: '<span class="ty">_BLANK_</span>&lt;<span class="ty">String</span>&gt; xs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();' }
              ],
              tokens: ['List', 'ArrayList', 'Collection', 'Iterable'],
              correctAnswer: 'List',
              explanation: 'Code to the interface. List is the most common, but Collection or Iterable also work.'
            },
            {
              type: 'output-predict',
              prompt: 'Which call is the fastest on a List of one million elements?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; a = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; l = <span class="kw">new</span> <span class="ty">LinkedList</span>&lt;&gt;();
<span class="com">// both filled with 1_000_000 ints</span>`,
              options: ['a.get(500000)', 'l.get(500000)', 'a.add(0, 1)', 'l.add(0, 1)'],
              correct: 0,
              explanation: 'ArrayList.get is O(1). LinkedList.get is O(n). ArrayList.add(0,..) is O(n). LinkedList.add(0,..) is O(1).'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u5-hashset',
      name: 'Unit 5 · HashSet',
      description: 'Uniqueness, O(1) lookups, hashCode/equals.',
      lessons: [
        {
          id: 'dj-u5-l1',
          name: 'Set Basics',
          icon: '🎯',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'HashSet',
              content: `<p><code>HashSet</code> stores unique elements with average O(1) add/remove/contains. There is no ordering guarantee.</p>
<div class="code-block"><span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="str">"java"</span>);
s.<span class="fn">add</span>(<span class="str">"java"</span>);        <span class="com">// no effect</span>
<span class="kw">boolean</span> has = s.<span class="fn">contains</span>(<span class="str">"java"</span>); <span class="com">// true</span>
<span class="ty">int</span> size = s.<span class="fn">size</span>();   <span class="com">// 1</span>
s.<span class="fn">remove</span>(<span class="str">"java"</span>);
s.<span class="fn">clear</span>();</div>
<p>HashSet rejects duplicates by calling <code>hashCode()</code> first to locate the bucket, then <code>equals()</code> to confirm.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does HashSet.add(e) return when e is already present?',
              options: [
                { text: 'true', code: true },
                { text: 'false', code: true },
                { text: 'null', code: true },
                { text: 'throws', code: true }
              ],
              correct: 1,
              explanation: 'It returns false to indicate the set was not modified.'
            },
            {
              type: 'true-false',
              statement: 'HashSet preserves insertion order.',
              correct: false,
              explanation: 'HashSet has NO ordering guarantee. Use LinkedHashSet for insertion order or TreeSet for sorted order.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the size?',
              code: `<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="num">1</span>); s.<span class="fn">add</span>(<span class="num">2</span>); s.<span class="fn">add</span>(<span class="num">2</span>);
s.<span class="fn">add</span>(<span class="num">3</span>); s.<span class="fn">add</span>(<span class="num">1</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">size</span>());`,
              options: ['2', '3', '4', '5'],
              correct: 1,
              explanation: 'Duplicates are ignored, so only 1, 2, 3 remain.'
            },
            {
              type: 'fill-blank',
              prompt: 'Check membership in a Set.',
              codeLines: [
                { html: '<span class="kw">if</span> (s.<span class="fn">_BLANK_</span>(<span class="str">"java"</span>)) { ... }' }
              ],
              tokens: ['contains', 'has', 'includes', 'find'],
              correctAnswer: 'contains',
              explanation: 'Java collections use contains(), not has/includes/find.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a HashSet<String>.',
              tokens: ['Set', '<', 'String', '>', 's', '=', 'new', 'HashSet', '<>', '(', ')', ';', 'TreeSet'],
              correctOrder: ['Set', '<', 'String', '>', 's', '=', 'new', 'HashSet', '<>', '(', ')', ';'],
              explanation: 'Declaring the variable as Set keeps the door open to swap implementations.'
            }
          ]
        },
        {
          id: 'dj-u5-l2',
          name: 'hashCode & equals',
          icon: '🆔',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The Contract',
              content: `<p>For a custom type to behave correctly in a HashSet (or as a HashMap key), it MUST override <code>equals</code> AND <code>hashCode</code>. The contract:</p>
<ul>
<li>If <code>a.equals(b)</code> is true, then <code>a.hashCode() == b.hashCode()</code> MUST be true.</li>
<li>Equal hashCodes do NOT imply equality (collisions are allowed).</li>
</ul>
<div class="code-block"><span class="kw">class</span> <span class="ty">Point</span> {
  <span class="ty">int</span> x, y;
  <span class="kw">public</span> <span class="ty">Point</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) { <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y; }

  <span class="kw">@Override</span>
  <span class="kw">public boolean</span> <span class="fn">equals</span>(<span class="ty">Object</span> o) {
    <span class="kw">if</span> (!(o <span class="kw">instanceof</span> <span class="ty">Point</span> p)) <span class="kw">return false</span>;
    <span class="kw">return</span> p.x == x &amp;&amp; p.y == y;
  }
  <span class="kw">@Override</span>
  <span class="kw">public int</span> <span class="fn">hashCode</span>() {
    <span class="kw">return</span> <span class="ty">Objects</span>.<span class="fn">hash</span>(x, y);
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You override equals() but not hashCode(). What happens with HashSet?',
              options: [
                { text: 'Compile error', code: true },
                { text: 'Works fine', code: true },
                { text: 'Equal objects may sit in different buckets, breaking contains/remove', code: true },
                { text: 'Throws at runtime', code: true }
              ],
              correct: 2,
              explanation: 'Two equal objects could have different default hash codes, causing the set to treat them as different.'
            },
            {
              type: 'true-false',
              statement: 'If two objects have the same hashCode they are equal.',
              correct: false,
              explanation: 'Collisions are allowed. Same hashCode is necessary but not sufficient for equality.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute a hash from two fields.',
              codeLines: [
                { html: '<span class="kw">return</span> <span class="ty">Objects</span>.<span class="fn">_BLANK_</span>(x, y);' }
              ],
              tokens: ['hash', 'hashCode', 'combine', 'compute'],
              correctAnswer: 'hash',
              explanation: 'Objects.hash(...) accepts varargs and combines them into a hashCode.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the steps to insert a custom object into a HashSet.',
              lines: [
                'compute hashCode() of the new element',
                'pick a bucket from the hash',
                'walk the bucket calling equals() on each entry',
                'if none equal, append; otherwise reject as duplicate'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'output-predict',
              prompt: 'Point overrides equals but NOT hashCode. What is the size?',
              code: `<span class="ty">Set</span>&lt;<span class="ty">Point</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">Point</span>(<span class="num">1</span>,<span class="num">1</span>));
s.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">Point</span>(<span class="num">1</span>,<span class="num">1</span>));
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">size</span>());`,
              options: ['1', '2', '0', 'throws'],
              correct: 1,
              explanation: 'Without hashCode override, the two "equal" Points hash to different buckets and both get stored.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u6-treeset',
      name: 'Unit 6 · TreeSet & LinkedHashSet',
      description: 'Sorted sets and insertion-ordered sets.',
      lessons: [
        {
          id: 'dj-u6-l1',
          name: 'TreeSet',
          icon: '🌲',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'TreeSet — Sorted, Navigable',
              content: `<p><code>TreeSet</code> is a red-black tree. Elements are kept in natural (or comparator) order with O(log n) operations.</p>
<div class="code-block"><span class="ty">TreeSet</span>&lt;<span class="ty">Integer</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;();
t.<span class="fn">add</span>(<span class="num">5</span>); t.<span class="fn">add</span>(<span class="num">1</span>); t.<span class="fn">add</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(t);              <span class="com">// [1, 3, 5]</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">first</span>());      <span class="com">// 1</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">last</span>());       <span class="com">// 5</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">higher</span>(<span class="num">3</span>));   <span class="com">// 5 – strictly greater</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">ceiling</span>(<span class="num">3</span>));  <span class="com">// 3 – ≥</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">lower</span>(<span class="num">3</span>));    <span class="com">// 1 – strictly less</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">floor</span>(<span class="num">3</span>));    <span class="com">// 3 – ≤</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the time complexity of TreeSet.add?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 1,
              explanation: 'TreeSet is a balanced BST. Insert/search/remove are all O(log n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match NavigableSet methods.',
              leftLabel: 'Method',
              rightLabel: 'Semantics',
              pairs: [
                { left: 'higher(x)', right: 'strictly greater than x' },
                { left: 'ceiling(x)', right: 'greater than or equal to x' },
                { left: 'lower(x)', right: 'strictly less than x' },
                { left: 'floor(x)', right: 'less than or equal to x' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">TreeSet</span>&lt;<span class="ty">Integer</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeSet</span>&lt;&gt;();
t.<span class="fn">add</span>(<span class="num">10</span>); t.<span class="fn">add</span>(<span class="num">20</span>); t.<span class="fn">add</span>(<span class="num">30</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">ceiling</span>(<span class="num">15</span>));`,
              options: ['10', '15', '20', 'null'],
              correct: 2,
              explanation: 'ceiling(15) returns the smallest element ≥ 15, which is 20.'
            },
            {
              type: 'true-false',
              statement: 'TreeSet allows null elements.',
              correct: false,
              explanation: 'Comparing null against other elements would throw NullPointerException, so it is rejected.'
            },
            {
              type: 'fill-blank',
              prompt: 'Get the smallest element in a TreeSet.',
              codeLines: [
                { html: '<span class="ty">int</span> min = t.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['first', 'min', 'smallest', 'head'],
              correctAnswer: 'first',
              explanation: 'TreeSet exposes first() and last() for the extremes.'
            }
          ]
        },
        {
          id: 'dj-u6-l2',
          name: 'LinkedHashSet',
          icon: '📜',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Order of Insertion',
              content: `<p><code>LinkedHashSet</code> is a HashSet with a linked list threaded through the entries that records insertion order. Iteration is predictable and still average O(1).</p>
<div class="code-block"><span class="ty">LinkedHashSet</span>&lt;<span class="ty">String</span>&gt; s = <span class="kw">new</span> <span class="ty">LinkedHashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="str">"b"</span>);
s.<span class="fn">add</span>(<span class="str">"a"</span>);
s.<span class="fn">add</span>(<span class="str">"c"</span>);
<span class="kw">for</span> (<span class="ty">String</span> x : s) <span class="ty">System</span>.out.<span class="fn">println</span>(x); <span class="com">// b, a, c</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which Set preserves insertion order with O(1) average operations?',
              options: [
                { text: 'HashSet', code: true },
                { text: 'TreeSet', code: true },
                { text: 'LinkedHashSet', code: true },
                { text: 'SortedSet', code: true }
              ],
              correct: 2,
              explanation: 'LinkedHashSet uses a doubly-linked list to remember insertion order without losing hash speed.'
            },
            {
              type: 'true-false',
              statement: 'LinkedHashSet iteration order equals insertion order.',
              correct: true,
              explanation: 'That is exactly what makes it different from HashSet.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">LinkedHashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="num">3</span>); s.<span class="fn">add</span>(<span class="num">1</span>); s.<span class="fn">add</span>(<span class="num">4</span>);
s.<span class="fn">add</span>(<span class="num">1</span>); s.<span class="fn">add</span>(<span class="num">5</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(s);`,
              options: ['[1, 3, 4, 5]', '[3, 1, 4, 5]', '[5, 4, 3, 1]', '[3, 1, 4, 1, 5]'],
              correct: 1,
              explanation: 'Insertion order: 3, 1, 4 (second 1 ignored), 5.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each Set flavour to its iteration order.',
              leftLabel: 'Class',
              rightLabel: 'Order',
              pairs: [
                { left: 'HashSet', right: 'no guarantee' },
                { left: 'LinkedHashSet', right: 'insertion order' },
                { left: 'TreeSet', right: 'sorted by natural order' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Create a set that remembers insertion order.',
              codeLines: [
                { html: '<span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; s = <span class="kw">new</span> <span class="ty">_BLANK_</span>&lt;&gt;();' }
              ],
              tokens: ['LinkedHashSet', 'HashSet', 'TreeSet', 'SortedSet'],
              correctAnswer: 'LinkedHashSet',
              explanation: 'LinkedHashSet preserves insertion order while keeping O(1) basic ops.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u7-hashmap',
      name: 'Unit 7 · HashMap Essentials',
      description: 'The workhorse of Java DSA problems.',
      lessons: [
        {
          id: 'dj-u7-l1',
          name: 'put, get, containsKey',
          icon: '🗝️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'HashMap Core',
              content: `<p><code>HashMap</code> stores key/value pairs with average O(1) put/get/remove. Keys are unique; values can repeat.</p>
<div class="code-block"><span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
ages.<span class="fn">put</span>(<span class="str">"alice"</span>, <span class="num">30</span>);
ages.<span class="fn">put</span>(<span class="str">"bob"</span>, <span class="num">25</span>);
<span class="ty">int</span> a = ages.<span class="fn">get</span>(<span class="str">"alice"</span>);          <span class="com">// 30</span>
<span class="ty">Integer</span> z = ages.<span class="fn">get</span>(<span class="str">"zelda"</span>);       <span class="com">// null</span>
<span class="kw">boolean</span> has = ages.<span class="fn">containsKey</span>(<span class="str">"bob"</span>); <span class="com">// true</span>
ages.<span class="fn">remove</span>(<span class="str">"bob"</span>);
<span class="ty">int</span> n = ages.<span class="fn">size</span>();</div>
<p>If a key is missing, <code>get</code> returns <code>null</code> (not zero!). Auto-unboxing that into an <code>int</code> throws NullPointerException, so prefer <code>getOrDefault</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does put return when the key was already present?',
              options: [
                { text: 'true', code: true },
                { text: 'false', code: true },
                { text: 'the OLD value', code: true },
                { text: 'the NEW value', code: true }
              ],
              correct: 2,
              explanation: 'put returns the value that was previously associated with the key, or null if none.'
            },
            {
              type: 'multiple-choice',
              prompt: 'map.get(key) when key is absent returns:',
              options: [
                { text: '0', code: true },
                { text: 'throws', code: true },
                { text: 'null', code: true },
                { text: 'a sentinel', code: true }
              ],
              correct: 2,
              explanation: 'Missing key gives null. Use getOrDefault for a safer default.'
            },
            {
              type: 'fill-blank',
              prompt: 'Read a count with a fallback of 0.',
              codeLines: [
                { html: '<span class="ty">int</span> c = m.<span class="fn">_BLANK_</span>(<span class="str">"k"</span>, <span class="num">0</span>);' }
              ],
              tokens: ['getOrDefault', 'getDefault', 'fetch', 'lookup'],
              correctAnswer: 'getOrDefault',
              explanation: 'getOrDefault(key, fallback) returns the fallback if the key is missing.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Increment a counter for the word w.',
              tokens: ['m', '.', 'put', '(', 'w', ',', 'm', '.', 'getOrDefault', '(', 'w', ',', '0', ')', '+', '1', ')', ';', 'add'],
              correctOrder: ['m', '.', 'put', '(', 'w', ',', 'm', '.', 'getOrDefault', '(', 'w', ',', '0', ')', '+', '1', ')', ';'],
              explanation: 'Classic counter idiom: put back (oldOrZero + 1).'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">2</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m.<span class="fn">size</span>() + <span class="str">" "</span> + m.<span class="fn">get</span>(<span class="str">"a"</span>));`,
              options: ['1 1', '1 2', '2 1', '2 2'],
              correct: 1,
              explanation: 'Same key replaces the value. Size stays 1, value is 2.'
            }
          ]
        },
        {
          id: 'dj-u7-l2',
          name: 'Views: keySet, values, entrySet',
          icon: '🪟',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Iterating a Map',
              content: `<p>A map gives you three iteration views:</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">String</span> k : m.<span class="fn">keySet</span>()) { ... }
<span class="kw">for</span> (<span class="ty">Integer</span> v : m.<span class="fn">values</span>()) { ... }
<span class="kw">for</span> (<span class="ty">Map</span>.<span class="ty">Entry</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; e : m.<span class="fn">entrySet</span>()) {
  <span class="ty">String</span> k = e.<span class="fn">getKey</span>();
  <span class="ty">Integer</span> v = e.<span class="fn">getValue</span>();
}</div>
<p>If you need both key and value, <code>entrySet</code> is fastest (one lookup, not two).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You need both keys and values in one pass. Use:',
              options: [
                { text: 'keySet then get(k)', code: true },
                { text: 'values then ???', code: true },
                { text: 'entrySet', code: true },
                { text: 'A second map', code: true }
              ],
              correct: 2,
              explanation: 'entrySet avoids the extra lookup for each get.'
            },
            {
              type: 'true-false',
              statement: 'keySet() returns a copy of the keys.',
              correct: false,
              explanation: 'It returns a live view. Modifying it changes the map.'
            },
            {
              type: 'fill-blank',
              prompt: 'Get all entries.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">Map</span>.<span class="ty">Entry</span>&lt;<span class="ty">String</span>,<span class="ty">Integer</span>&gt; e : m.<span class="fn">_BLANK_</span>()) { ... }' }
              ],
              tokens: ['entrySet', 'entries', 'pairs', 'items'],
              correctAnswer: 'entrySet',
              explanation: 'In Java the view is called entrySet() and contains Map.Entry objects.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order lines that print every (key,value).',
              lines: [
                'for (Map.Entry<String, Integer> e : m.entrySet()) {',
                '    String k = e.getKey();',
                '    Integer v = e.getValue();',
                '    System.out.println(k + " -> " + v);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'output-predict',
              prompt: 'What is m.size() after this snippet?',
              code: `<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
m.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);
m.<span class="fn">keySet</span>().<span class="fn">remove</span>(<span class="str">"a"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m.<span class="fn">size</span>());`,
              options: ['0', '1', '2', 'throws'],
              correct: 1,
              explanation: 'Removing through the keySet view removes the entry from the map.'
            }
          ]
        },
        {
          id: 'dj-u7-l3',
          name: 'Idioms: getOrDefault & putIfAbsent',
          icon: '🛡️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Defensive Helpers',
              content: `<p>Two indispensable helpers:</p>
<div class="code-block"><span class="com">// counters</span>
<span class="ty">int</span> c = m.<span class="fn">getOrDefault</span>(k, <span class="num">0</span>);
m.<span class="fn">put</span>(k, c + <span class="num">1</span>);

<span class="com">// grouping into lists</span>
m.<span class="fn">putIfAbsent</span>(k, <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;());
m.<span class="fn">get</span>(k).<span class="fn">add</span>(v);

<span class="com">// the modern combined form</span>
m.<span class="fn">computeIfAbsent</span>(k, key -&gt; <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(v);
m.<span class="fn">merge</span>(k, <span class="num">1</span>, <span class="ty">Integer</span>::<span class="fn">sum</span>);</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You\'re grouping values by key into Lists. The cleanest call is:',
              options: [
                { text: 'put + new ArrayList', code: true },
                { text: 'computeIfAbsent(k, x -> new ArrayList<>()).add(v)', code: true },
                { text: 'putIfPresent', code: true },
                { text: 'getOrDefault(k, new ArrayList<>()).add(v)', code: true }
              ],
              correct: 1,
              explanation: 'computeIfAbsent inserts the list only when missing and returns it for chaining.'
            },
            {
              type: 'true-false',
              statement: 'merge(k, 1, Integer::sum) increments a counter.',
              correct: true,
              explanation: 'If absent it inserts 1, else it replaces with old + 1.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add v to the list stored under key k, creating it on demand.',
              codeLines: [
                { html: 'm.<span class="fn">_BLANK_</span>(k, x -&gt; <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(v);' }
              ],
              tokens: ['computeIfAbsent', 'getOrDefault', 'putIfAbsent', 'merge'],
              correctAnswer: 'computeIfAbsent',
              explanation: 'computeIfAbsent returns the (possibly new) value so you can chain .add(v).'
            },
            {
              type: 'output-predict',
              prompt: 'What is m.get("a") at the end?',
              code: `<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
m.<span class="fn">merge</span>(<span class="str">"a"</span>, <span class="num">1</span>, <span class="ty">Integer</span>::<span class="fn">sum</span>);
m.<span class="fn">merge</span>(<span class="str">"a"</span>, <span class="num">1</span>, <span class="ty">Integer</span>::<span class="fn">sum</span>);
m.<span class="fn">merge</span>(<span class="str">"a"</span>, <span class="num">1</span>, <span class="ty">Integer</span>::<span class="fn">sum</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m.<span class="fn">get</span>(<span class="str">"a"</span>));`,
              options: ['null', '1', '3', '0'],
              correct: 2,
              explanation: 'First merge sets 1, then sum runs twice -> 3.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Write the canonical word-count line.',
              tokens: ['m', '.', 'merge', '(', 'w', ',', '1', ',', 'Integer', '::', 'sum', ')', ';', 'put'],
              correctOrder: ['m', '.', 'merge', '(', 'w', ',', '1', ',', 'Integer', '::', 'sum', ')', ';'],
              explanation: 'merge inserts 1 on first sight and sums after that.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the idiom to the use case.',
              leftLabel: 'Method',
              rightLabel: 'Use case',
              pairs: [
                { left: 'getOrDefault', right: 'safe read with fallback' },
                { left: 'putIfAbsent', right: 'set value only if missing' },
                { left: 'computeIfAbsent', right: 'lazy init of buckets' },
                { left: 'merge', right: 'combine old and new value' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u8-treemap',
      name: 'Unit 8 · TreeMap & LinkedHashMap',
      description: 'Sorted maps and insertion-ordered maps.',
      lessons: [
        {
          id: 'dj-u8-l1',
          name: 'TreeMap',
          icon: '🌳',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Sorted by Key',
              content: `<p><code>TreeMap</code> keeps keys sorted in O(log n). It implements <code>NavigableMap</code>, giving you ceiling/floor/higher/lower for keys.</p>
<div class="code-block"><span class="ty">TreeMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;();
t.<span class="fn">put</span>(<span class="num">10</span>, <span class="str">"ten"</span>);
t.<span class="fn">put</span>(<span class="num">5</span>, <span class="str">"five"</span>);
t.<span class="fn">put</span>(<span class="num">20</span>, <span class="str">"twenty"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">firstKey</span>());      <span class="com">// 5</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">lastKey</span>());       <span class="com">// 20</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">ceilingKey</span>(<span class="num">12</span>)); <span class="com">// 20</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(t.<span class="fn">floorKey</span>(<span class="num">12</span>));   <span class="com">// 10</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which Map sorts its keys?',
              options: [
                { text: 'HashMap', code: true },
                { text: 'LinkedHashMap', code: true },
                { text: 'TreeMap', code: true },
                { text: 'IdentityHashMap', code: true }
              ],
              correct: 2,
              explanation: 'TreeMap is the only sorted Map among these.'
            },
            {
              type: 'true-false',
              statement: 'TreeMap.put is O(log n).',
              correct: true,
              explanation: 'Backed by a red-black tree.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the output?',
              code: `<span class="ty">TreeMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; t = <span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;();
t.<span class="fn">put</span>(<span class="num">3</span>, <span class="str">"a"</span>);
t.<span class="fn">put</span>(<span class="num">1</span>, <span class="str">"b"</span>);
t.<span class="fn">put</span>(<span class="num">2</span>, <span class="str">"c"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(t);`,
              options: ['{3=a, 1=b, 2=c}', '{1=b, 2=c, 3=a}', '{1=a, 2=b, 3=c}', 'unsorted'],
              correct: 1,
              explanation: 'TreeMap iterates in ascending key order.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the NavigableMap method.',
              leftLabel: 'Method',
              rightLabel: 'Returns',
              pairs: [
                { left: 'firstKey()', right: 'smallest key' },
                { left: 'lastKey()', right: 'largest key' },
                { left: 'ceilingKey(k)', right: 'smallest key ≥ k' },
                { left: 'floorKey(k)', right: 'largest key ≤ k' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Smallest key strictly greater than 7?',
              codeLines: [
                { html: '<span class="ty">Integer</span> k = t.<span class="fn">_BLANK_</span>(<span class="num">7</span>);' }
              ],
              tokens: ['higherKey', 'ceilingKey', 'upperKey', 'nextKey'],
              correctAnswer: 'higherKey',
              explanation: 'higherKey is strict (>), ceilingKey is inclusive (>=).'
            }
          ]
        },
        {
          id: 'dj-u8-l2',
          name: 'LinkedHashMap',
          icon: '🪢',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Insertion Order Maps',
              content: `<p><code>LinkedHashMap</code> threads a linked list through its entries so iteration follows insertion order. With <code>accessOrder=true</code> it becomes an LRU-cache primitive.</p>
<div class="code-block"><span class="ty">LinkedHashMap</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">LinkedHashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"b"</span>, <span class="num">2</span>);
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
m.<span class="fn">put</span>(<span class="str">"c"</span>, <span class="num">3</span>);
<span class="kw">for</span> (<span class="ty">String</span> k : m.<span class="fn">keySet</span>()) <span class="ty">System</span>.out.<span class="fn">println</span>(k); <span class="com">// b, a, c</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You need a Map that preserves insertion order with O(1) lookups. Pick:',
              options: [
                { text: 'HashMap', code: true },
                { text: 'TreeMap', code: true },
                { text: 'LinkedHashMap', code: true },
                { text: 'WeakHashMap', code: true }
              ],
              correct: 2,
              explanation: 'LinkedHashMap = HashMap + insertion-order list.'
            },
            {
              type: 'true-false',
              statement: 'You can build a simple LRU cache by overriding LinkedHashMap.removeEldestEntry.',
              correct: true,
              explanation: 'Return true from removeEldestEntry to drop the oldest entry on each put.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">LinkedHashMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">LinkedHashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="num">2</span>,<span class="num">2</span>); m.<span class="fn">put</span>(<span class="num">1</span>,<span class="num">1</span>); m.<span class="fn">put</span>(<span class="num">3</span>,<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m.<span class="fn">keySet</span>());`,
              options: ['[1, 2, 3]', '[2, 1, 3]', '[3, 1, 2]', 'unsorted'],
              correct: 1,
              explanation: 'Insertion order is preserved.'
            },
            {
              type: 'fill-blank',
              prompt: 'Construct a LinkedHashMap.',
              codeLines: [
                { html: '<span class="ty">Map</span>&lt;<span class="ty">String</span>,<span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">_BLANK_</span>&lt;&gt;();' }
              ],
              tokens: ['LinkedHashMap', 'HashMap', 'TreeMap', 'LinkedList'],
              correctAnswer: 'LinkedHashMap',
              explanation: 'LinkedHashMap is the insertion-ordered Map.'
            },
            {
              type: 'match-pairs',
              prompt: 'Map flavours.',
              leftLabel: 'Class',
              rightLabel: 'Iteration order',
              pairs: [
                { left: 'HashMap', right: 'no guarantee' },
                { left: 'LinkedHashMap', right: 'insertion' },
                { left: 'TreeMap', right: 'sorted by key' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u9-iteration',
      name: 'Unit 9 · Iteration Patterns',
      description: 'All the safe (and unsafe) ways to walk a collection.',
      lessons: [
        {
          id: 'dj-u9-l1',
          name: 'Iterator & for-each',
          icon: '🚶',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The Iterator Interface',
              content: `<p>Every <code>Collection</code> exposes an <code>iterator()</code>. The interface has three methods:</p>
<div class="code-block"><span class="kw">interface</span> <span class="ty">Iterator</span>&lt;<span class="ty">E</span>&gt; {
  <span class="kw">boolean</span> <span class="fn">hasNext</span>();
  <span class="ty">E</span> <span class="fn">next</span>();
  <span class="kw">default void</span> <span class="fn">remove</span>();  <span class="com">// optional</span>
}</div>
<p>The enhanced for-each loop is compiler sugar around an Iterator – which is why you cannot use it to modify the collection structurally.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">String</span> s : list) { ... } <span class="com">// compiled as:</span>
<span class="ty">Iterator</span>&lt;<span class="ty">String</span>&gt; it = list.<span class="fn">iterator</span>();
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) {
  <span class="ty">String</span> s = it.<span class="fn">next</span>();
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which method advances the iterator and returns the next element?',
              options: [
                { text: 'hasNext()', code: true },
                { text: 'next()', code: true },
                { text: 'advance()', code: true },
                { text: 'peek()', code: true }
              ],
              correct: 1,
              explanation: 'next() does both: returns and advances.'
            },
            {
              type: 'true-false',
              statement: 'The Iterable interface declares iterator(), and that\'s what makes for-each work.',
              correct: true,
              explanation: 'Any class that implements Iterable<T> can be used in for-each.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order an idiomatic Iterator loop.',
              lines: [
                'Iterator<Integer> it = nums.iterator();',
                'while (it.hasNext()) {',
                '    int x = it.next();',
                '    if (x < 0) it.remove();',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'fill-blank',
              prompt: 'Walk the list with for-each.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">int</span> x <span class="fn">_BLANK_</span> nums) { ... }' }
              ],
              tokens: [':', 'in', '->', '='],
              correctAnswer: ':',
              explanation: 'Colon separates the variable from the iterable.'
            },
            {
              type: 'output-predict',
              prompt: 'How many iterations?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>);
<span class="ty">Iterator</span>&lt;<span class="ty">Integer</span>&gt; it = xs.<span class="fn">iterator</span>();
<span class="ty">int</span> count = <span class="num">0</span>;
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) { it.<span class="fn">next</span>(); count++; }
<span class="ty">System</span>.out.<span class="fn">println</span>(count);`,
              options: ['0', '2', '3', '4'],
              correct: 2,
              explanation: 'hasNext is true while elements remain. Three elements -> three iterations.'
            }
          ]
        },
        {
          id: 'dj-u9-l2',
          name: 'ConcurrentModification & forEach',
          icon: '⚠️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The CME Trap',
              content: `<p>If you change a collection's structure while iterating (other than via the iterator), most JDK collections throw <code>ConcurrentModificationException</code> – CME.</p>
<div class="code-block"><span class="com">// BAD – CME</span>
<span class="kw">for</span> (<span class="ty">Integer</span> x : list) {
  <span class="kw">if</span> (x &lt; <span class="num">0</span>) list.<span class="fn">remove</span>(x);
}

<span class="com">// GOOD – iterator's own remove</span>
<span class="ty">Iterator</span>&lt;<span class="ty">Integer</span>&gt; it = list.<span class="fn">iterator</span>();
<span class="kw">while</span> (it.<span class="fn">hasNext</span>()) {
  <span class="kw">if</span> (it.<span class="fn">next</span>() &lt; <span class="num">0</span>) it.<span class="fn">remove</span>();
}

<span class="com">// ALSO GOOD – removeIf</span>
list.<span class="fn">removeIf</span>(x -&gt; x &lt; <span class="num">0</span>);</div>
<p>The <code>forEach</code> method takes a <code>Consumer</code> lambda and is great for read-only iteration:</p>
<div class="code-block">list.<span class="fn">forEach</span>(x -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(x));
list.<span class="fn">forEach</span>(<span class="ty">System</span>.out::<span class="fn">println</span>);</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which line might throw ConcurrentModificationException?',
              options: [
                { text: 'list.forEach(System.out::println)', code: true },
                { text: 'list.removeIf(x -> x < 0)', code: true },
                { text: 'for (Integer x : list) list.remove(x)', code: true },
                { text: 'Iterator.next inside while loop with no removes', code: true }
              ],
              correct: 2,
              explanation: 'Removing via the list while iterating with for-each triggers CME on the next next().'
            },
            {
              type: 'true-false',
              statement: 'removeIf is the cleanest way to filter-in-place a Collection.',
              correct: true,
              explanation: 'It iterates internally and removes safely.'
            },
            {
              type: 'fill-blank',
              prompt: 'Delete every negative element.',
              codeLines: [
                { html: 'list.<span class="fn">_BLANK_</span>(x -&gt; x &lt; <span class="num">0</span>);' }
              ],
              tokens: ['removeIf', 'filter', 'reject', 'dropWhile'],
              correctAnswer: 'removeIf',
              explanation: 'removeIf takes a Predicate and removes every element that matches.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Print each element using forEach + method reference.',
              tokens: ['list', '.', 'forEach', '(', 'System', '.', 'out', '::', 'println', ')', ';', 'each'],
              correctOrder: ['list', '.', 'forEach', '(', 'System', '.', 'out', '::', 'println', ')', ';'],
              explanation: 'System.out::println is a method reference shorthand for x -> System.out.println(x).'
            },
            {
              type: 'reorder-code',
              prompt: 'Write a CME-safe removal of negatives.',
              lines: [
                'Iterator<Integer> it = list.iterator();',
                'while (it.hasNext()) {',
                '    int v = it.next();',
                '    if (v < 0) it.remove();',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'output-predict',
              prompt: 'What is printed?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; l = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>));
l.<span class="fn">removeIf</span>(x -&gt; x % <span class="num">2</span> == <span class="num">0</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(l);`,
              options: ['[1, 3]', '[2, 4]', '[1, 2, 3, 4]', '[]'],
              correct: 0,
              explanation: 'removeIf drops elements where the predicate is true (even numbers).'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u10-stacks',
      name: 'Unit 10 · Stacks in Java',
      description: 'LIFO done right – with Deque, not the legacy Stack class.',
      lessons: [
        {
          id: 'dj-u10-l1',
          name: 'Stack via Deque',
          icon: '🥞',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Why Not java.util.Stack?',
              content: `<p><code>java.util.Stack</code> extends <code>Vector</code> – a synchronised, legacy class. Modern Java uses <code>Deque</code> via <code>ArrayDeque</code> for stacks.</p>
<div class="code-block"><span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
stack.<span class="fn">push</span>(<span class="num">1</span>);   <span class="com">// add to top</span>
stack.<span class="fn">push</span>(<span class="num">2</span>);
<span class="ty">int</span> top = stack.<span class="fn">peek</span>();  <span class="com">// 2, no remove</span>
<span class="ty">int</span> out = stack.<span class="fn">pop</span>();   <span class="com">// 2, removed</span>
<span class="kw">boolean</span> empty = stack.<span class="fn">isEmpty</span>();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which class should you prefer for a stack today?',
              options: [
                { text: 'java.util.Stack', code: true },
                { text: 'ArrayDeque', code: true },
                { text: 'Vector', code: true },
                { text: 'PriorityQueue', code: true }
              ],
              correct: 1,
              explanation: 'ArrayDeque is faster and not synchronised. Stack is legacy.'
            },
            {
              type: 'true-false',
              statement: 'Deque.peek() throws when the stack is empty.',
              correct: false,
              explanation: 'peek returns null when empty. element() is the throwing variant.'
            },
            {
              type: 'fill-blank',
              prompt: 'Push x onto a stack.',
              codeLines: [
                { html: 'stack.<span class="fn">_BLANK_</span>(x);' }
              ],
              tokens: ['push', 'add', 'offer', 'put'],
              correctAnswer: 'push',
              explanation: 'For Deque, push(x) is the stack idiom (equivalent to addFirst).'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
s.<span class="fn">push</span>(<span class="num">1</span>); s.<span class="fn">push</span>(<span class="num">2</span>); s.<span class="fn">push</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">pop</span>() + s.<span class="fn">pop</span>());`,
              options: ['3', '5', '6', '2'],
              correct: 1,
              explanation: '3 then 2 are popped (LIFO). 3 + 2 = 5.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Declare a stack of Strings.',
              tokens: ['Deque', '<', 'String', '>', 'st', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';', 'Stack'],
              correctOrder: ['Deque', '<', 'String', '>', 'st', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';'],
              explanation: 'Use Deque as the declared type and ArrayDeque as the implementation.'
            }
          ]
        },
        {
          id: 'dj-u10-l2',
          name: 'Application: Balanced Parentheses',
          icon: '🧩',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Classic Stack Problem',
              content: `<p>Given a string of brackets, decide if they're balanced. Push opens, on close pop and check the match.</p>
<div class="code-block"><span class="kw">boolean</span> <span class="fn">isBalanced</span>(<span class="ty">String</span> s) {
  <span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; st = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">char</span> c : s.<span class="fn">toCharArray</span>()) {
    <span class="kw">if</span> (c == <span class="str">'('</span> || c == <span class="str">'['</span> || c == <span class="str">'{'</span>) st.<span class="fn">push</span>(c);
    <span class="kw">else</span> {
      <span class="kw">if</span> (st.<span class="fn">isEmpty</span>()) <span class="kw">return false</span>;
      <span class="ty">char</span> open = st.<span class="fn">pop</span>();
      <span class="kw">if</span> (open == <span class="str">'('</span> &amp;&amp; c != <span class="str">')'</span>) <span class="kw">return false</span>;
      <span class="kw">if</span> (open == <span class="str">'['</span> &amp;&amp; c != <span class="str">']'</span>) <span class="kw">return false</span>;
      <span class="kw">if</span> (open == <span class="str">'{'</span> &amp;&amp; c != <span class="str">'}'</span>) <span class="kw">return false</span>;
    }
  }
  <span class="kw">return</span> st.<span class="fn">isEmpty</span>();
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which input is BALANCED?',
              options: [
                { text: '"({[)]}"', code: true },
                { text: '"([{}])"', code: true },
                { text: '"((("', code: true },
                { text: '"))"', code: true }
              ],
              correct: 1,
              explanation: 'Each opener has a matching closer in the right order.'
            },
            {
              type: 'true-false',
              statement: 'After processing the whole string, an empty stack means balanced.',
              correct: true,
              explanation: 'Non-empty stack means there are unclosed openers.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the lines for the bracket matcher\'s closing branch.',
              lines: [
                'if (st.isEmpty()) return false;',
                'char open = st.pop();',
                'if (!matches(open, c)) return false;'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'fill-blank',
              prompt: 'On close-bracket we ____ from the stack.',
              codeLines: [
                { html: '<span class="ty">char</span> open = st.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['pop', 'peek', 'poll', 'next'],
              correctAnswer: 'pop',
              explanation: 'pop removes and returns the top.'
            },
            {
              type: 'output-predict',
              prompt: 'isBalanced("(())[]") returns:',
              code: `<span class="com">// see lesson concept for code</span>`,
              options: ['true', 'false', 'throws', 'null'],
              correct: 0,
              explanation: 'Every opener has its matching closer in order.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u11-queues',
      name: 'Unit 11 · Queues & Deques',
      description: 'FIFO and double-ended structures.',
      lessons: [
        {
          id: 'dj-u11-l1',
          name: 'Queue Interface',
          icon: '🚥',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'offer/poll/peek vs add/remove/element',
              content: `<p><code>Queue</code> has two API styles:</p>
<ul>
<li><b>Throwing</b> – <code>add</code>, <code>remove</code>, <code>element</code></li>
<li><b>Returning</b> – <code>offer</code>, <code>poll</code>, <code>peek</code></li>
</ul>
<div class="code-block"><span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="num">1</span>);
q.<span class="fn">offer</span>(<span class="num">2</span>);
<span class="ty">Integer</span> head = q.<span class="fn">peek</span>();  <span class="com">// 1 – no remove</span>
<span class="ty">Integer</span> out  = q.<span class="fn">poll</span>();  <span class="com">// 1 – removed</span>
<span class="ty">Integer</span> nope = q.<span class="fn">poll</span>();
<span class="ty">Integer</span> none = q.<span class="fn">poll</span>();  <span class="com">// null (empty)</span></div>
<p>Use the returning style in code that might run on an empty queue, and the throwing style when emptiness is a real bug.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'remove() on an empty Queue:',
              options: [
                { text: 'returns null', code: true },
                { text: 'throws NoSuchElementException', code: true },
                { text: 'blocks', code: true },
                { text: 'returns -1', code: true }
              ],
              correct: 1,
              explanation: 'remove/element are the throwing variants. offer/poll/peek are the returning variants.'
            },
            {
              type: 'multiple-choice',
              prompt: 'You want safe enqueue without exceptions. Use:',
              options: [
                { text: 'add(e)', code: true },
                { text: 'offer(e)', code: true },
                { text: 'push(e)', code: true },
                { text: 'put(e)', code: true }
              ],
              correct: 1,
              explanation: 'offer returns false instead of throwing on capacity-restricted queues.'
            },
            {
              type: 'true-false',
              statement: 'PriorityQueue is a FIFO queue.',
              correct: false,
              explanation: 'PriorityQueue is ordered by priority, not insertion. Smallest is at the head by default.'
            },
            {
              type: 'fill-blank',
              prompt: 'Peek at the head of a Queue.',
              codeLines: [
                { html: '<span class="ty">Integer</span> h = q.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['peek', 'top', 'head', 'front'],
              correctAnswer: 'peek',
              explanation: 'peek returns the head without removing, or null when empty.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match throwing and returning Queue methods.',
              leftLabel: 'Throwing',
              rightLabel: 'Returning',
              pairs: [
                { left: 'add', right: 'offer' },
                { left: 'remove', right: 'poll' },
                { left: 'element', right: 'peek' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Queue</span>&lt;<span class="ty">String</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
q.<span class="fn">offer</span>(<span class="str">"a"</span>);
q.<span class="fn">offer</span>(<span class="str">"b"</span>);
q.<span class="fn">offer</span>(<span class="str">"c"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(q.<span class="fn">poll</span>() + q.<span class="fn">poll</span>());`,
              options: ['ab', 'bc', 'ca', 'cc'],
              correct: 0,
              explanation: 'Polls in FIFO order: a then b.'
            }
          ]
        },
        {
          id: 'dj-u11-l2',
          name: 'ArrayDeque vs LinkedList',
          icon: '🛣️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The Modern Default',
              content: `<p><code>ArrayDeque</code> is a resizable circular array. It is faster than <code>LinkedList</code> as a queue or stack because of cache locality and no per-node allocations.</p>
<div class="code-block"><span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
d.<span class="fn">addFirst</span>(<span class="num">1</span>);
d.<span class="fn">addLast</span>(<span class="num">2</span>);
d.<span class="fn">peekFirst</span>();
d.<span class="fn">peekLast</span>();
d.<span class="fn">pollFirst</span>();
d.<span class="fn">pollLast</span>();</div>
<p>ArrayDeque does NOT allow null elements – useful, because poll returns null on emptiness.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which CANNOT be inserted into an ArrayDeque?',
              options: [
                { text: 'null', code: true },
                { text: '0', code: true },
                { text: 'a String', code: true },
                { text: 'a custom object', code: true }
              ],
              correct: 0,
              explanation: 'Null would collide with the empty-sentinel returned by poll/peek.'
            },
            {
              type: 'true-false',
              statement: 'ArrayDeque generally outperforms LinkedList as a queue.',
              correct: true,
              explanation: 'Contiguous memory beats node-by-node allocations.'
            },
            {
              type: 'fill-blank',
              prompt: 'Remove from the front of a deque.',
              codeLines: [
                { html: '<span class="ty">int</span> x = d.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['pollFirst', 'pollLast', 'pop', 'shift'],
              correctAnswer: 'pollFirst',
              explanation: 'pollFirst returns and removes the head, returning null if empty.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Declare a Deque<Integer> backed by ArrayDeque.',
              tokens: ['Deque', '<', 'Integer', '>', 'dq', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';', 'LinkedList'],
              correctOrder: ['Deque', '<', 'Integer', '>', 'dq', '=', 'new', 'ArrayDeque', '<>', '(', ')', ';'],
              explanation: 'Deque on the left, ArrayDeque on the right.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match Deque method to operation.',
              leftLabel: 'Method',
              rightLabel: 'Operation',
              pairs: [
                { left: 'addFirst', right: 'enqueue front' },
                { left: 'addLast', right: 'enqueue back' },
                { left: 'pollFirst', right: 'dequeue front' },
                { left: 'pollLast', right: 'dequeue back' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u12-pq',
      name: 'Unit 12 · PriorityQueue',
      description: 'A binary heap with a friendly API.',
      lessons: [
        {
          id: 'dj-u12-l1',
          name: 'Min-Heap Basics',
          icon: '⛏️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'PriorityQueue is a Min-Heap',
              content: `<p>By default, <code>PriorityQueue</code> is a min-heap: the smallest element is always at the head.</p>
<div class="code-block"><span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
pq.<span class="fn">offer</span>(<span class="num">5</span>);
pq.<span class="fn">offer</span>(<span class="num">1</span>);
pq.<span class="fn">offer</span>(<span class="num">3</span>);
pq.<span class="fn">peek</span>();  <span class="com">// 1</span>
pq.<span class="fn">poll</span>();  <span class="com">// 1</span>
pq.<span class="fn">poll</span>();  <span class="com">// 3</span></div>
<p>Time complexity:</p>
<ul>
<li>offer/poll – O(log n)</li>
<li>peek – O(1)</li>
<li>iteration order is NOT sorted (only poll order is)</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'PriorityQueue.poll returns:',
              options: [
                { text: 'the smallest element', code: true },
                { text: 'the largest element', code: true },
                { text: 'the first inserted', code: true },
                { text: 'the last inserted', code: true }
              ],
              correct: 0,
              explanation: 'Default is a min-heap.'
            },
            {
              type: 'true-false',
              statement: 'Iterating a PriorityQueue yields elements in sorted order.',
              correct: false,
              explanation: 'Iteration order is unspecified. Only repeated poll() gives sorted order.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
pq.<span class="fn">offer</span>(<span class="num">4</span>); pq.<span class="fn">offer</span>(<span class="num">2</span>); pq.<span class="fn">offer</span>(<span class="num">7</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>() + <span class="str">" "</span> + pq.<span class="fn">poll</span>());`,
              options: ['4 2', '2 4', '7 4', '2 7'],
              correct: 1,
              explanation: 'Min-heap returns 2 then 4.'
            },
            {
              type: 'fill-blank',
              prompt: 'Insert into a PriorityQueue.',
              codeLines: [
                { html: 'pq.<span class="fn">_BLANK_</span>(<span class="num">7</span>);' }
              ],
              tokens: ['offer', 'push', 'put', 'enqueue'],
              correctAnswer: 'offer',
              explanation: 'offer (or add) enqueues with heap-up. Cost is O(log n).'
            },
            {
              type: 'tap-tokens',
              prompt: 'Create a PriorityQueue of Integers.',
              tokens: ['PriorityQueue', '<', 'Integer', '>', 'pq', '=', 'new', 'PriorityQueue', '<>', '(', ')', ';', 'Stack'],
              correctOrder: ['PriorityQueue', '<', 'Integer', '>', 'pq', '=', 'new', 'PriorityQueue', '<>', '(', ')', ';'],
              explanation: 'Default ctor builds a min-heap by natural ordering.'
            }
          ]
        },
        {
          id: 'dj-u12-l2',
          name: 'Max-Heap & Custom Order',
          icon: '🏔️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Custom Comparators',
              content: `<p>For a max-heap, pass a reversed Comparator:</p>
<div class="code-block"><span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; max =
    <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.<span class="fn">reverseOrder</span>());
max.<span class="fn">offer</span>(<span class="num">3</span>); max.<span class="fn">offer</span>(<span class="num">1</span>); max.<span class="fn">offer</span>(<span class="num">5</span>);
max.<span class="fn">poll</span>(); <span class="com">// 5</span></div>
<p>For objects, give a Comparator over a key:</p>
<div class="code-block"><span class="ty">PriorityQueue</span>&lt;<span class="ty">Task</span>&gt; tasks = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(
    <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Task</span>::<span class="fn">priority</span>));</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How do you make a max-heap of Integer?',
              options: [
                { text: 'new PriorityQueue<>()', code: true },
                { text: 'new PriorityQueue<>(Comparator.naturalOrder())', code: true },
                { text: 'new PriorityQueue<>(Comparator.reverseOrder())', code: true },
                { text: 'new MaxPriorityQueue<>()', code: true }
              ],
              correct: 2,
              explanation: 'Comparator.reverseOrder() flips the natural ordering.'
            },
            {
              type: 'true-false',
              statement: 'PriorityQueue can take a Comparator in its constructor.',
              correct: true,
              explanation: 'One of the most useful constructor overloads.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.<span class="fn">reverseOrder</span>());
pq.<span class="fn">offer</span>(<span class="num">2</span>); pq.<span class="fn">offer</span>(<span class="num">8</span>); pq.<span class="fn">offer</span>(<span class="num">5</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(pq.<span class="fn">poll</span>());`,
              options: ['2', '5', '8', 'null'],
              correct: 2,
              explanation: 'Max-heap returns 8 first.'
            },
            {
              type: 'fill-blank',
              prompt: 'Build a heap that orders Task by priority ascending.',
              codeLines: [
                { html: '<span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.<span class="fn">_BLANK_</span>(<span class="ty">Task</span>::<span class="fn">priority</span>));' }
              ],
              tokens: ['comparingInt', 'sortBy', 'thenComparing', 'reverseOrder'],
              correctAnswer: 'comparingInt',
              explanation: 'comparingInt avoids boxing and orders by the extracted int.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order a comparator chain: by priority then by id.',
              tokens: ['Comparator', '.', 'comparingInt', '(', 'Task', '::', 'priority', ')', '.', 'thenComparingInt', '(', 'Task', '::', 'id', ')'],
              correctOrder: ['Comparator', '.', 'comparingInt', '(', 'Task', '::', 'priority', ')', '.', 'thenComparingInt', '(', 'Task', '::', 'id', ')'],
              explanation: 'thenComparingInt is the tiebreaker.'
            },
            {
              type: 'match-pairs',
              prompt: 'Comparator factories.',
              leftLabel: 'Factory',
              rightLabel: 'What it does',
              pairs: [
                { left: 'naturalOrder()', right: 'use compareTo ascending' },
                { left: 'reverseOrder()', right: 'use compareTo descending' },
                { left: 'comparing(fn)', right: 'sort by extracted key' },
                { left: 'thenComparing(fn)', right: 'add tiebreaker' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u13-compare',
      name: 'Unit 13 · Comparable & Comparator',
      description: 'Teach your classes how to be ordered.',
      lessons: [
        {
          id: 'dj-u13-l1',
          name: 'Comparable',
          icon: '📏',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Natural Ordering',
              content: `<p>A class implements <code>Comparable&lt;T&gt;</code> to define its natural order.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">Card</span> <span class="kw">implements</span> <span class="ty">Comparable</span>&lt;<span class="ty">Card</span>&gt; {
  <span class="ty">int</span> rank;
  <span class="kw">public int</span> <span class="fn">compareTo</span>(<span class="ty">Card</span> o) {
    <span class="kw">return</span> <span class="ty">Integer</span>.<span class="fn">compare</span>(rank, o.rank);
  }
}</div>
<p>The contract for <code>compareTo</code>:</p>
<ul>
<li>negative if <code>this &lt; other</code></li>
<li>zero if equal</li>
<li>positive if <code>this &gt; other</code></li>
</ul>
<p>Always use <code>Integer.compare(a, b)</code>, not <code>a - b</code>, to avoid overflow.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'compareTo returns a negative number when:',
              options: [
                { text: 'this > other', code: true },
                { text: 'this < other', code: true },
                { text: 'this == other', code: true },
                { text: 'other is null', code: true }
              ],
              correct: 1,
              explanation: 'Negative = this should appear before other in ascending order.'
            },
            {
              type: 'true-false',
              statement: 'Returning a - b from compareTo is always safe.',
              correct: false,
              explanation: 'Integer overflow can break the contract. Use Integer.compare.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compare two ints safely.',
              codeLines: [
                { html: '<span class="kw">return</span> <span class="ty">Integer</span>.<span class="fn">_BLANK_</span>(a, b);' }
              ],
              tokens: ['compare', 'compareTo', 'min', 'sub'],
              correctAnswer: 'compare',
              explanation: 'Integer.compare(a, b) is overflow-safe and returns -1/0/1-ish ints.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; l = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>));
<span class="ty">Collections</span>.<span class="fn">sort</span>(l);
<span class="ty">System</span>.out.<span class="fn">println</span>(l);`,
              options: ['[3, 1, 2]', '[1, 2, 3]', '[3, 2, 1]', '[2, 1, 3]'],
              correct: 1,
              explanation: 'Integer is Comparable and sorts ascending by natural order.'
            },
            {
              type: 'reorder-code',
              prompt: 'Write a compareTo that sorts by rank.',
              lines: [
                'public int compareTo(Card other) {',
                '    return Integer.compare(this.rank, other.rank);',
                '}'
              ],
              correctOrder: [0, 1, 2]
            }
          ]
        },
        {
          id: 'dj-u13-l2',
          name: 'Comparator & Lambdas',
          icon: '🪄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'External Orderings',
              content: `<p><code>Comparator</code> is for "external" orderings – different from natural order, or for classes you don\'t own.</p>
<div class="code-block"><span class="com">// lambda</span>
<span class="ty">Comparator</span>&lt;<span class="ty">String</span>&gt; byLen = (a, b) -&gt; <span class="ty">Integer</span>.<span class="fn">compare</span>(a.<span class="fn">length</span>(), b.<span class="fn">length</span>());

<span class="com">// factory</span>
<span class="ty">Comparator</span>&lt;<span class="ty">Person</span>&gt; byName = <span class="ty">Comparator</span>.<span class="fn">comparing</span>(<span class="ty">Person</span>::<span class="fn">name</span>);

<span class="com">// chained</span>
<span class="ty">Comparator</span>&lt;<span class="ty">Person</span>&gt; byAgeThenName = <span class="ty">Comparator</span>
    .<span class="fn">comparingInt</span>(<span class="ty">Person</span>::<span class="fn">age</span>)
    .<span class="fn">thenComparing</span>(<span class="ty">Person</span>::<span class="fn">name</span>);

<span class="com">// reverse</span>
<span class="ty">Comparator</span>&lt;<span class="ty">Person</span>&gt; byAgeDesc = byAgeThenName.<span class="fn">reversed</span>();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which builds a Comparator that orders Person by age then by name?',
              options: [
                { text: 'Comparator.comparing(Person::age).thenComparing(Person::name)', code: true },
                { text: 'Person::age + Person::name', code: true },
                { text: 'new Comparator(age, name)', code: true },
                { text: 'Comparator.both(Person::age, Person::name)', code: true }
              ],
              correct: 0,
              explanation: 'thenComparing chains an additional Comparator as a tiebreaker.'
            },
            {
              type: 'true-false',
              statement: 'You can pass a Comparator to Collections.sort and List.sort.',
              correct: true,
              explanation: 'Both accept a Comparator and fall back to natural order when null.'
            },
            {
              type: 'fill-blank',
              prompt: 'Reverse an existing comparator.',
              codeLines: [
                { html: '<span class="ty">Comparator</span>&lt;<span class="ty">Person</span>&gt; desc = byAge.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['reversed', 'reverse', 'desc', 'negate'],
              correctAnswer: 'reversed',
              explanation: 'reversed() returns a Comparator with the opposite sign.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Sort names by length ascending.',
              tokens: ['names', '.', 'sort', '(', 'Comparator', '.', 'comparingInt', '(', 'String', '::', 'length', ')', ')', ';'],
              correctOrder: ['names', '.', 'sort', '(', 'Comparator', '.', 'comparingInt', '(', 'String', '::', 'length', ')', ')', ';'],
              explanation: 'Method reference + comparingInt for a clean ascending sort.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the first element after sort?',
              code: `<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; xs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"banana"</span>,<span class="str">"fig"</span>,<span class="str">"apple"</span>));
xs.<span class="fn">sort</span>(<span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">String</span>::<span class="fn">length</span>));
<span class="ty">System</span>.out.<span class="fn">println</span>(xs.<span class="fn">get</span>(<span class="num">0</span>));`,
              options: ['banana', 'fig', 'apple', 'compile error'],
              correct: 1,
              explanation: '"fig" has length 3, shortest of the three.'
            },
            {
              type: 'match-pairs',
              prompt: 'Comparator factories.',
              leftLabel: 'Call',
              rightLabel: 'Effect',
              pairs: [
                { left: 'comparing(fn)', right: 'sort by extracted key' },
                { left: 'comparingInt(fn)', right: 'no boxing variant' },
                { left: 'reversed()', right: 'flip the order' },
                { left: 'thenComparing(fn)', right: 'tiebreaker' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u14-sorting',
      name: 'Unit 14 · Sorting Collections',
      description: 'Sort lists, arrays, and custom data.',
      lessons: [
        {
          id: 'dj-u14-l1',
          name: 'Sorting Lists & Arrays',
          icon: '🗂️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Three Sort Entry Points',
              content: `<p>Java gives you three ways to sort:</p>
<div class="code-block"><span class="ty">Collections</span>.<span class="fn">sort</span>(list);                  <span class="com">// in-place</span>
<span class="ty">Collections</span>.<span class="fn">sort</span>(list, cmp);             <span class="com">// in-place w/ comparator</span>
list.<span class="fn">sort</span>(cmp);                            <span class="com">// preferred since Java 8</span>
<span class="ty">Arrays</span>.<span class="fn">sort</span>(arr);                       <span class="com">// arrays</span>
<span class="ty">Arrays</span>.<span class="fn">sort</span>(arr, <span class="num">0</span>, <span class="num">10</span>);                <span class="com">// sub-range</span></div>
<p>Java's <code>Collections.sort</code> uses TimSort: stable, O(n log n), exploits existing runs.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Java\'s default sort is:',
              options: [
                { text: 'quicksort', code: true },
                { text: 'mergesort', code: true },
                { text: 'TimSort (a mergesort variant)', code: true },
                { text: 'heapsort', code: true }
              ],
              correct: 2,
              explanation: 'For Object arrays / Lists, Java uses TimSort.'
            },
            {
              type: 'true-false',
              statement: 'TimSort is stable.',
              correct: true,
              explanation: 'Equal elements keep their relative order.'
            },
            {
              type: 'fill-blank',
              prompt: 'Sort a List<Integer> with the modern API.',
              codeLines: [
                { html: 'list.<span class="fn">_BLANK_</span>(<span class="kw">null</span>);' }
              ],
              tokens: ['sort', 'order', 'arrange', 'rearrange'],
              correctAnswer: 'sort',
              explanation: 'list.sort(null) sorts by natural order.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Sort a List<Person> by age ascending.',
              tokens: ['list', '.', 'sort', '(', 'Comparator', '.', 'comparingInt', '(', 'Person', '::', 'age', ')', ')', ';', 'reversed'],
              correctOrder: ['list', '.', 'sort', '(', 'Comparator', '.', 'comparingInt', '(', 'Person', '::', 'age', ')', ')', ';'],
              explanation: 'comparingInt + method ref gives a tidy ascending sort.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">int</span>[] a = {<span class="num">3</span>,<span class="num">1</span>,<span class="num">2</span>};
<span class="ty">Arrays</span>.<span class="fn">sort</span>(a);
<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="ty">Arrays</span>.<span class="fn">toString</span>(a));`,
              options: ['[3, 1, 2]', '[1, 2, 3]', '[3, 2, 1]', '[1, 3, 2]'],
              correct: 1,
              explanation: 'Arrays.sort on int[] uses dual-pivot quicksort (Yaroslavskiy).'
            }
          ]
        },
        {
          id: 'dj-u14-l2',
          name: 'Sort by Multiple Fields',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Chained Comparators',
              content: `<p>Chain Comparators with <code>thenComparing</code>:</p>
<div class="code-block">people.<span class="fn">sort</span>(
  <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Person</span>::<span class="fn">age</span>)
      .<span class="fn">thenComparing</span>(<span class="ty">Person</span>::<span class="fn">lastName</span>)
      .<span class="fn">thenComparing</span>(<span class="ty">Person</span>::<span class="fn">firstName</span>)
);

<span class="com">// reverse a sub-key only</span>
people.<span class="fn">sort</span>(
  <span class="ty">Comparator</span>.<span class="fn">comparingInt</span>(<span class="ty">Person</span>::<span class="fn">age</span>).<span class="fn">reversed</span>()
      .<span class="fn">thenComparing</span>(<span class="ty">Person</span>::<span class="fn">lastName</span>)
);</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You want to sort by age desc, then by name asc. Which is correct?',
              options: [
                { text: 'Comparator.comparingInt(Person::age).reversed().thenComparing(Person::name)', code: true },
                { text: 'Comparator.comparingInt(Person::age).thenComparing(Person::name).reversed()', code: true },
                { text: 'Comparator.reverseOrder(Person::age).thenComparing(Person::name)', code: true },
                { text: 'Comparator.comparing(Person::name).reversed(Person::age)', code: true }
              ],
              correct: 0,
              explanation: 'Reverse the age comparator only, then chain the name comparator.'
            },
            {
              type: 'true-false',
              statement: 'thenComparing only matters when the previous comparator returns 0.',
              correct: true,
              explanation: 'The chained Comparator is the tiebreaker.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add a tiebreaker by name.',
              codeLines: [
                { html: 'cmp = cmp.<span class="fn">_BLANK_</span>(<span class="ty">Person</span>::<span class="fn">name</span>);' }
              ],
              tokens: ['thenComparing', 'andThen', 'orElse', 'compose'],
              correctAnswer: 'thenComparing',
              explanation: 'thenComparing chains a tiebreaker Comparator.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the lines to sort by age then name.',
              lines: [
                'Comparator<Person> cmp = Comparator',
                '    .comparingInt(Person::age)',
                '    .thenComparing(Person::name);',
                'people.sort(cmp);'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'output-predict',
              prompt: 'Sorted output of {(20,"B"),(20,"A"),(15,"Z")} by age asc then name asc?',
              code: `<span class="com">// using the comparator from the concept</span>`,
              options: ['(15,Z) (20,A) (20,B)', '(20,A) (20,B) (15,Z)', '(15,Z) (20,B) (20,A)', '(20,B) (20,A) (15,Z)'],
              correct: 0,
              explanation: 'Ages sort first; ties broken by name alphabetically.'
            },
            {
              type: 'match-pairs',
              prompt: 'Which comparator factory for the goal.',
              leftLabel: 'Goal',
              rightLabel: 'Factory',
              pairs: [
                { left: 'natural order', right: 'Comparator.naturalOrder()' },
                { left: 'reverse natural order', right: 'Comparator.reverseOrder()' },
                { left: 'by extracted key', right: 'Comparator.comparing(fn)' },
                { left: 'tiebreaker', right: 'thenComparing(fn)' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u15-sll',
      name: 'Unit 15 · Build Your Own — Singly Linked List',
      description: 'Roll your own linked list to nail the fundamentals.',
      lessons: [
        {
          id: 'dj-u15-l1',
          name: 'The Node',
          icon: '🟢',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Node Class',
              content: `<p>A singly linked list is a chain of <b>nodes</b>. Each node holds a value and a pointer to the next.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">Node</span> {
  <span class="ty">int</span> val;
  <span class="ty">Node</span> next;
  <span class="ty">Node</span>(<span class="ty">int</span> v) { val = v; }
}</div>
<p>The list itself just needs a reference to the <b>head</b>:</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">MyList</span> {
  <span class="ty">Node</span> head;
  <span class="ty">int</span> size;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In a singly linked list, each node stores:',
              options: [
                { text: 'value + prev pointer', code: true },
                { text: 'value + next pointer', code: true },
                { text: 'value + prev and next pointers', code: true },
                { text: 'value only', code: true }
              ],
              correct: 1,
              explanation: 'Singly = next only. Doubly = prev + next.'
            },
            {
              type: 'true-false',
              statement: 'The last node\'s next should point back to head.',
              correct: false,
              explanation: 'Only a circular linked list does that. Plain SLL ends with next = null.'
            },
            {
              type: 'fill-blank',
              prompt: 'Terminate the chain at the tail.',
              codeLines: [
                { html: 'tail.next = <span class="fn">_BLANK_</span>;' }
              ],
              tokens: ['null', '0', 'head', 'this'],
              correctAnswer: 'null',
              explanation: 'null marks the end of a non-circular singly linked list.'
            },
            {
              type: 'reorder-code',
              prompt: 'Define a Node class.',
              lines: [
                'class Node {',
                '    int val;',
                '    Node next;',
                '    Node(int v) { val = v; }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'output-predict',
              prompt: 'What is the default value of next?',
              code: `<span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(<span class="num">5</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(n.next);`,
              options: ['0', 'null', 'undefined', 'throws'],
              correct: 1,
              explanation: 'Object fields default to null when not initialised.'
            }
          ]
        },
        {
          id: 'dj-u15-l2',
          name: 'addFirst & addLast',
          icon: '✏️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Insertions',
              content: `<p>addFirst is O(1). addLast is O(n) unless you track a tail pointer.</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">addFirst</span>(<span class="ty">int</span> v) {
  <span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(v);
  n.next = head;
  head = n;
  size++;
}

<span class="kw">void</span> <span class="fn">addLast</span>(<span class="ty">int</span> v) {
  <span class="ty">Node</span> n = <span class="kw">new</span> <span class="ty">Node</span>(v);
  <span class="kw">if</span> (head == <span class="kw">null</span>) { head = n; }
  <span class="kw">else</span> {
    <span class="ty">Node</span> cur = head;
    <span class="kw">while</span> (cur.next != <span class="kw">null</span>) cur = cur.next;
    cur.next = n;
  }
  size++;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Time complexity of addLast in a singly linked list WITHOUT a tail pointer?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n²)', code: true }
              ],
              correct: 2,
              explanation: 'You must walk all the way to the end.'
            },
            {
              type: 'true-false',
              statement: 'Maintaining a tail pointer makes addLast O(1).',
              correct: true,
              explanation: 'You can append directly without walking.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the addFirst steps.',
              lines: [
                'Node n = new Node(v);',
                'n.next = head;',
                'head = n;',
                'size++;'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'fill-blank',
              prompt: 'Walk to the end of the chain.',
              codeLines: [
                { html: '<span class="kw">while</span> (cur.next != <span class="fn">_BLANK_</span>) cur = cur.next;' }
              ],
              tokens: ['null', '0', 'head', 'size'],
              correctAnswer: 'null',
              explanation: 'Loop until next is null – cur is then the tail.'
            },
            {
              type: 'output-predict',
              prompt: 'After addFirst(1), addFirst(2), addFirst(3), the list reads:',
              code: `<span class="com">// see addFirst above</span>`,
              options: ['1 2 3', '3 2 1', '2 1 3', '1 3 2'],
              correct: 1,
              explanation: 'Each new value becomes the new head -> 3 -> 2 -> 1.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Splice a node n at the head.',
              tokens: ['n', '.', 'next', '=', 'head', ';', 'head', '=', 'n', ';'],
              correctOrder: ['n', '.', 'next', '=', 'head', ';', 'head', '=', 'n', ';'],
              explanation: 'Link first, then reseat head – never lose the existing chain.'
            }
          ]
        },
        {
          id: 'dj-u15-l3',
          name: 'Search & Remove',
          icon: '🔧',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'find & removeFirst & removeValue',
              content: `<p>Search is just a linear walk:</p>
<div class="code-block"><span class="kw">boolean</span> <span class="fn">contains</span>(<span class="ty">int</span> v) {
  <span class="ty">Node</span> cur = head;
  <span class="kw">while</span> (cur != <span class="kw">null</span>) {
    <span class="kw">if</span> (cur.val == v) <span class="kw">return true</span>;
    cur = cur.next;
  }
  <span class="kw">return false</span>;
}</div>
<p>Remove from head – constant time:</p>
<div class="code-block"><span class="kw">int</span> <span class="fn">removeFirst</span>() {
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">throw new</span> <span class="ty">NoSuchElementException</span>();
  <span class="ty">int</span> v = head.val;
  head = head.next;
  size--;
  <span class="kw">return</span> v;
}</div>
<p>Remove by value – linear scan, splice with previous pointer:</p>
<div class="code-block"><span class="kw">boolean</span> <span class="fn">removeValue</span>(<span class="ty">int</span> v) {
  <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return false</span>;
  <span class="kw">if</span> (head.val == v) { head = head.next; size--; <span class="kw">return true</span>; }
  <span class="ty">Node</span> prev = head;
  <span class="kw">while</span> (prev.next != <span class="kw">null</span> &amp;&amp; prev.next.val != v) prev = prev.next;
  <span class="kw">if</span> (prev.next == <span class="kw">null</span>) <span class="kw">return false</span>;
  prev.next = prev.next.next;
  size--;
  <span class="kw">return true</span>;
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Removing the head of a singly linked list is:',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 0,
              explanation: 'Just reseat head = head.next.'
            },
            {
              type: 'true-false',
              statement: 'You can remove a node in O(1) if you only have a pointer to that node.',
              correct: false,
              explanation: 'For a true singly linked list you also need the previous node. (A clever trick using value copies works only if the node isn\'t the tail.)'
            },
            {
              type: 'reorder-code',
              prompt: 'Order removeFirst.',
              lines: [
                'if (head == null) throw new NoSuchElementException();',
                'int v = head.val;',
                'head = head.next;',
                'size--;',
                'return v;'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'fill-blank',
              prompt: 'Splice a node out.',
              codeLines: [
                { html: 'prev.next = prev.next.<span class="fn">_BLANK_</span>;' }
              ],
              tokens: ['next', 'prev', 'val', 'head'],
              correctAnswer: 'next',
              explanation: 'Skip the node we want to remove by linking prev to its successor.'
            },
            {
              type: 'output-predict',
              prompt: 'After addLast(1), addLast(2), addLast(3), removeValue(2), the chain reads:',
              code: `<span class="com">// see lesson code</span>`,
              options: ['1 3', '2 3', '1 2', '1 2 3'],
              correct: 0,
              explanation: 'The middle node is unlinked.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Walk until prev.next is the target.',
              tokens: ['while', '(', 'prev', '.', 'next', '!=', 'null', '&&', 'prev', '.', 'next', '.', 'val', '!=', 'v', ')', 'prev', '=', 'prev', '.', 'next', ';'],
              correctOrder: ['while', '(', 'prev', '.', 'next', '!=', 'null', '&&', 'prev', '.', 'next', '.', 'val', '!=', 'v', ')', 'prev', '=', 'prev', '.', 'next', ';'],
              explanation: 'Two-condition guard: not at the end AND not yet found.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u16-stack-queue',
      name: 'Unit 16 · Build Your Own — Stack & Queue',
      description: 'Array-backed stack and the classic two-stack queue trick.',
      lessons: [
        {
          id: 'dj-u16-l1',
          name: 'Array-Backed Stack',
          icon: '🧱',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Stack with Capacity',
              content: `<p>A fixed-capacity stack uses an array plus a top index:</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">MyStack</span> {
  <span class="kw">private</span> <span class="ty">int</span>[] data;
  <span class="kw">private</span> <span class="ty">int</span> top = -<span class="num">1</span>;
  <span class="ty">MyStack</span>(<span class="ty">int</span> cap) { data = <span class="kw">new</span> <span class="ty">int</span>[cap]; }

  <span class="kw">void</span> <span class="fn">push</span>(<span class="ty">int</span> v) {
    <span class="kw">if</span> (top == data.length - <span class="num">1</span>) <span class="kw">throw new</span> <span class="ty">RuntimeException</span>(<span class="str">"full"</span>);
    data[++top] = v;
  }
  <span class="ty">int</span> <span class="fn">pop</span>() {
    <span class="kw">if</span> (top == -<span class="num">1</span>) <span class="kw">throw new</span> <span class="ty">RuntimeException</span>(<span class="str">"empty"</span>);
    <span class="kw">return</span> data[top--];
  }
  <span class="ty">int</span> <span class="fn">peek</span>() { <span class="kw">return</span> data[top]; }
  <span class="kw">boolean</span> <span class="fn">isEmpty</span>() { <span class="kw">return</span> top == -<span class="num">1</span>; }
}</div>
<p>Push and pop are O(1). Resizing to a 2x array on overflow makes it amortised O(1).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In the array-backed stack, what does top represent?',
              options: [
                { text: 'always equals data.length', code: true },
                { text: 'index of the next free slot', code: true },
                { text: 'index of the topmost stored element', code: true },
                { text: 'a pointer to head', code: true }
              ],
              correct: 2,
              explanation: 'top is the index of the current top element. -1 means empty.'
            },
            {
              type: 'true-false',
              statement: 'Doubling the array on overflow keeps push amortised O(1).',
              correct: true,
              explanation: 'A geometric resize spreads the cost so the average remains O(1).'
            },
            {
              type: 'fill-blank',
              prompt: 'Pop in one expression.',
              codeLines: [
                { html: '<span class="kw">return</span> data[top<span class="fn">_BLANK_</span>];' }
              ],
              tokens: ['--', '++', '-=1', '+=1'],
              correctAnswer: '--',
              explanation: 'Post-decrement: read data[top], then decrement top.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order a safe push.',
              lines: [
                'if (top == data.length - 1) throw new RuntimeException("full");',
                'data[++top] = v;'
              ],
              correctOrder: [0, 1]
            },
            {
              type: 'output-predict',
              prompt: 'A new MyStack(3) – what does push,push,push,push do?',
              code: `<span class="ty">MyStack</span> s = <span class="kw">new</span> <span class="ty">MyStack</span>(<span class="num">3</span>);
s.<span class="fn">push</span>(<span class="num">1</span>); s.<span class="fn">push</span>(<span class="num">2</span>); s.<span class="fn">push</span>(<span class="num">3</span>); s.<span class="fn">push</span>(<span class="num">4</span>);`,
              options: ['stores all four', 'throws on the fourth push', 'overwrites the bottom', 'auto-resizes'],
              correct: 1,
              explanation: 'Capacity 3 means the fourth push trips the "full" check.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Construct the data array.',
              tokens: ['data', '=', 'new', 'int', '[', 'cap', ']', ';', 'int[]'],
              correctOrder: ['data', '=', 'new', 'int', '[', 'cap', ']', ';'],
              explanation: 'Java arrays use new T[size].'
            }
          ]
        },
        {
          id: 'dj-u16-l2',
          name: 'Queue with Two Stacks',
          icon: '🥢',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Classic Interview Trick',
              content: `<p>Two stacks <code>in</code> and <code>out</code> can simulate a queue.</p>
<ul>
<li><b>enqueue(v)</b>: push onto <code>in</code></li>
<li><b>dequeue()</b>: if <code>out</code> empty, move every element from <code>in</code> to <code>out</code> (reversing). Then pop <code>out</code>.</li>
</ul>
<div class="code-block"><span class="kw">class</span> <span class="ty">MyQueue</span> {
  <span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; in = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; out = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();

  <span class="kw">void</span> <span class="fn">enqueue</span>(<span class="ty">int</span> v) { in.<span class="fn">push</span>(v); }

  <span class="ty">int</span> <span class="fn">dequeue</span>() {
    <span class="kw">if</span> (out.<span class="fn">isEmpty</span>()) {
      <span class="kw">while</span> (!in.<span class="fn">isEmpty</span>()) out.<span class="fn">push</span>(in.<span class="fn">pop</span>());
    }
    <span class="kw">return</span> out.<span class="fn">pop</span>();
  }
}</div>
<p>Each element is pushed/popped at most twice -> <b>amortised O(1)</b> dequeue.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Amortised time complexity of dequeue in the two-stack queue?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n²)', code: true }
              ],
              correct: 0,
              explanation: 'Each element moves between stacks at most once.'
            },
            {
              type: 'true-false',
              statement: 'You should move all of in to out on every dequeue.',
              correct: false,
              explanation: 'Only when out is empty. Otherwise out already has elements in correct order.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the dequeue logic.',
              lines: [
                'if (out.isEmpty()) {',
                '    while (!in.isEmpty()) out.push(in.pop());',
                '}',
                'return out.pop();'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'fill-blank',
              prompt: 'Transfer one element from in to out.',
              codeLines: [
                { html: 'out.<span class="fn">push</span>(in.<span class="fn">_BLANK_</span>());' }
              ],
              tokens: ['pop', 'peek', 'poll', 'top'],
              correctAnswer: 'pop',
              explanation: 'pop returns and removes the in-stack top, then we push it onto out – reversing order.'
            },
            {
              type: 'output-predict',
              prompt: 'enqueue(1), enqueue(2), enqueue(3), dequeue() returns:',
              code: `<span class="com">// see concept code</span>`,
              options: ['3', '2', '1', 'throws'],
              correct: 2,
              explanation: 'FIFO – 1 was enqueued first.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the transfer loop.',
              tokens: ['while', '(', '!', 'in', '.', 'isEmpty', '(', ')', ')', 'out', '.', 'push', '(', 'in', '.', 'pop', '(', ')', ')', ';'],
              correctOrder: ['while', '(', '!', 'in', '.', 'isEmpty', '(', ')', ')', 'out', '.', 'push', '(', 'in', '.', 'pop', '(', ')', ')', ';'],
              explanation: 'Loop until in is empty, transferring tops.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u17-bst',
      name: 'Unit 17 · Build Your Own — Binary Search Tree',
      description: 'Recursive BST with insert, search, inorder.',
      lessons: [
        {
          id: 'dj-u17-l1',
          name: 'TreeNode & Insert',
          icon: '🌱',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Binary Search Tree Invariant',
              content: `<p>For every node:</p>
<ul>
<li>everything in the left subtree is <b>smaller</b></li>
<li>everything in the right subtree is <b>larger</b></li>
</ul>
<div class="code-block"><span class="kw">class</span> <span class="ty">TreeNode</span> {
  <span class="ty">int</span> val;
  <span class="ty">TreeNode</span> left, right;
  <span class="ty">TreeNode</span>(<span class="ty">int</span> v) { val = v; }
}

<span class="kw">class</span> <span class="ty">BST</span> {
  <span class="ty">TreeNode</span> root;

  <span class="kw">void</span> <span class="fn">insert</span>(<span class="ty">int</span> v) { root = <span class="fn">insertRec</span>(root, v); }

  <span class="kw">private</span> <span class="ty">TreeNode</span> <span class="fn">insertRec</span>(<span class="ty">TreeNode</span> n, <span class="ty">int</span> v) {
    <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return new</span> <span class="ty">TreeNode</span>(v);
    <span class="kw">if</span> (v &lt; n.val)     n.left  = <span class="fn">insertRec</span>(n.left,  v);
    <span class="kw">else if</span> (v &gt; n.val) n.right = <span class="fn">insertRec</span>(n.right, v);
    <span class="kw">return</span> n;
  }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Average insert complexity in a balanced BST?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 1,
              explanation: 'Balanced tree height is log n.'
            },
            {
              type: 'true-false',
              statement: 'Inserting sorted values into a plain BST gives a perfectly balanced tree.',
              correct: false,
              explanation: 'Sorted inserts produce a degenerate linked-list-shaped tree (O(n) operations).'
            },
            {
              type: 'fill-blank',
              prompt: 'Base case for the recursive insert.',
              codeLines: [
                { html: '<span class="kw">if</span> (n == <span class="fn">_BLANK_</span>) <span class="kw">return new</span> <span class="ty">TreeNode</span>(v);' }
              ],
              tokens: ['null', '0', 'this', 'leaf'],
              correctAnswer: 'null',
              explanation: 'A null spot is where we drop the new node.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order recursive insert.',
              lines: [
                'if (n == null) return new TreeNode(v);',
                'if (v < n.val)      n.left  = insertRec(n.left,  v);',
                'else if (v > n.val) n.right = insertRec(n.right, v);',
                'return n;'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'output-predict',
              prompt: 'Insert 5,3,7,2 then inorder traversal prints:',
              code: `<span class="com">// see concept code</span>`,
              options: ['5 3 7 2', '2 3 5 7', '7 5 3 2', '3 2 5 7'],
              correct: 1,
              explanation: 'Inorder traversal of a BST yields ascending order.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Recursive insert call for left child.',
              tokens: ['n', '.', 'left', '=', 'insertRec', '(', 'n', '.', 'left', ',', 'v', ')', ';'],
              correctOrder: ['n', '.', 'left', '=', 'insertRec', '(', 'n', '.', 'left', ',', 'v', ')', ';'],
              explanation: 'Reassign n.left because a new node may have been created.'
            }
          ]
        },
        {
          id: 'dj-u17-l2',
          name: 'Search & Inorder',
          icon: '🌿',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Searching a BST',
              content: `<p>Compare and recurse:</p>
<div class="code-block"><span class="kw">boolean</span> <span class="fn">contains</span>(<span class="ty">int</span> v) { <span class="kw">return</span> <span class="fn">find</span>(root, v) != <span class="kw">null</span>; }

<span class="kw">private</span> <span class="ty">TreeNode</span> <span class="fn">find</span>(<span class="ty">TreeNode</span> n, <span class="ty">int</span> v) {
  <span class="kw">if</span> (n == <span class="kw">null</span> || n.val == v) <span class="kw">return</span> n;
  <span class="kw">return</span> v &lt; n.val ? <span class="fn">find</span>(n.left, v) : <span class="fn">find</span>(n.right, v);
}

<span class="kw">void</span> <span class="fn">inorder</span>(<span class="ty">TreeNode</span> n, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; out) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;
  <span class="fn">inorder</span>(n.left, out);
  out.<span class="fn">add</span>(n.val);
  <span class="fn">inorder</span>(n.right, out);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Inorder traversal of a BST yields:',
              options: [
                { text: 'random order', code: true },
                { text: 'insertion order', code: true },
                { text: 'sorted ascending', code: true },
                { text: 'sorted descending', code: true }
              ],
              correct: 2,
              explanation: 'Visit left -> node -> right gives ascending order.'
            },
            {
              type: 'true-false',
              statement: 'BST search is O(log n) even on a fully skewed tree.',
              correct: false,
              explanation: 'A skewed tree behaves like a linked list – O(n).'
            },
            {
              type: 'fill-blank',
              prompt: 'Inorder pattern: left, current, right.',
              codeLines: [
                { html: '<span class="fn">inorder</span>(n.left, out); out.<span class="fn">add</span>(n.val); <span class="fn">inorder</span>(n.<span class="fn">_BLANK_</span>, out);' }
              ],
              tokens: ['right', 'left', 'parent', 'next'],
              correctAnswer: 'right',
              explanation: 'After visiting current we recurse right.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order inorder traversal.',
              lines: [
                'if (n == null) return;',
                'inorder(n.left, out);',
                'out.add(n.val);',
                'inorder(n.right, out);'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'output-predict',
              prompt: 'Tree built by inserting 4,2,6,1,3,5,7. Inorder produces:',
              code: `<span class="com">// see concept code</span>`,
              options: ['4 2 6 1 3 5 7', '1 2 3 4 5 6 7', '7 6 5 4 3 2 1', '2 1 3 4 6 5 7'],
              correct: 1,
              explanation: 'BST inorder = sorted ascending.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Recursive search step.',
              tokens: ['return', 'v', '<', 'n', '.', 'val', '?', 'find', '(', 'n', '.', 'left', ',', 'v', ')', ':', 'find', '(', 'n', '.', 'right', ',', 'v', ')', ';'],
              correctOrder: ['return', 'v', '<', 'n', '.', 'val', '?', 'find', '(', 'n', '.', 'left', ',', 'v', ')', ':', 'find', '(', 'n', '.', 'right', ',', 'v', ')', ';'],
              explanation: 'Ternary keeps the recursion concise.'
            }
          ]
        }
      ]
    },
    {
      id: 'dj-u18-hashmap',
      name: 'Unit 18 · Build Your Own — HashMap',
      description: 'Roll a simple chained HashMap from scratch.',
      lessons: [
        {
          id: 'dj-u18-l1',
          name: 'Buckets & Hashing',
          icon: '🪣',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Separate Chaining',
              content: `<p>A simple HashMap stores an array of <b>buckets</b>. Each bucket is a list of (key, value) entries. We use the key\'s hash to pick the bucket and walk the list to resolve collisions.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">MyMap</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; {
  <span class="kw">static class</span> <span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; {
    <span class="ty">K</span> k; <span class="ty">V</span> v; <span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; next;
    <span class="ty">Entry</span>(<span class="ty">K</span> k, <span class="ty">V</span> v) { <span class="kw">this</span>.k = k; <span class="kw">this</span>.v = v; }
  }

  <span class="kw">private</span> <span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt;[] table;
  <span class="kw">private</span> <span class="ty">int</span> size;

  <span class="kw">@SuppressWarnings</span>(<span class="str">"unchecked"</span>)
  <span class="ty">MyMap</span>(<span class="ty">int</span> cap) { table = (<span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt;[]) <span class="kw">new</span> <span class="ty">Entry</span>[cap]; }

  <span class="kw">private</span> <span class="ty">int</span> <span class="fn">bucket</span>(<span class="ty">Object</span> k) {
    <span class="kw">return</span> (k.<span class="fn">hashCode</span>() &amp; <span class="num">0x7fffffff</span>) % table.length;
  }
}</div>
<p>The <code>&amp; 0x7fffffff</code> masks off the sign bit so a negative hash maps to a positive bucket.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why mask with 0x7fffffff before modulo?',
              options: [
                { text: 'speeds up multiplication', code: true },
                { text: 'avoids negative bucket indexes from negative hashes', code: true },
                { text: 'compresses the hash', code: true },
                { text: 'required by the JLS', code: true }
              ],
              correct: 1,
              explanation: 'hashCode can be negative, and (-5 % 16) is -5 in Java – not a valid index.'
            },
            {
              type: 'true-false',
              statement: 'Separate chaining lets two keys with the same hash both live in the map.',
              correct: true,
              explanation: 'Collisions become a linked list of entries in one bucket.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute bucket index for key k.',
              codeLines: [
                { html: '<span class="kw">return</span> (k.<span class="fn">hashCode</span>() &amp; <span class="num">0x7fffffff</span>) <span class="fn">_BLANK_</span> table.length;' }
              ],
              tokens: ['%', '/', '*', '&'],
              correctAnswer: '%',
              explanation: 'Modulo by table length wraps the hash into a valid index.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the Entry inner-class fields.',
              lines: [
                'K k;',
                'V v;',
                'Entry<K, V> next;'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'output-predict',
              prompt: 'For table length 8 and hashCode() == 17, bucket index is:',
              code: `<span class="kw">return</span> (<span class="num">17</span> &amp; <span class="num">0x7fffffff</span>) % <span class="num">8</span>;`,
              options: ['0', '1', '2', '7'],
              correct: 1,
              explanation: '17 % 8 = 1.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Allocate the bucket array.',
              tokens: ['table', '=', '(', 'Entry', '<', 'K', ',', 'V', '>', '[', ']', ')', 'new', 'Entry', '[', 'cap', ']', ';'],
              correctOrder: ['table', '=', '(', 'Entry', '<', 'K', ',', 'V', '>', '[', ']', ')', 'new', 'Entry', '[', 'cap', ']', ';'],
              explanation: 'You must cast because Java doesn\'t let you create generic arrays directly.'
            }
          ]
        },
        {
          id: 'dj-u18-l2',
          name: 'put & get',
          icon: '🪛',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Chaining put & get',
              content: `<p>put inserts at the head of the bucket if absent, else updates the matching entry.</p>
<div class="code-block"><span class="kw">public void</span> <span class="fn">put</span>(<span class="ty">K</span> k, <span class="ty">V</span> v) {
  <span class="ty">int</span> b = <span class="fn">bucket</span>(k);
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; e = table[b]; e != <span class="kw">null</span>; e = e.next) {
    <span class="kw">if</span> (e.k.<span class="fn">equals</span>(k)) { e.v = v; <span class="kw">return</span>; }
  }
  <span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; head = <span class="kw">new</span> <span class="ty">Entry</span>&lt;&gt;(k, v);
  head.next = table[b];
  table[b] = head;
  size++;
}

<span class="kw">public</span> <span class="ty">V</span> <span class="fn">get</span>(<span class="ty">K</span> k) {
  <span class="kw">for</span> (<span class="ty">Entry</span>&lt;<span class="ty">K</span>, <span class="ty">V</span>&gt; e = table[<span class="fn">bucket</span>(k)]; e != <span class="kw">null</span>; e = e.next) {
    <span class="kw">if</span> (e.k.<span class="fn">equals</span>(k)) <span class="kw">return</span> e.v;
  }
  <span class="kw">return null</span>;
}</div>
<p>Average O(1). Worst case O(n) when all keys collide. The real <code>java.util.HashMap</code> mitigates this by converting long chains into red-black trees.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Worst-case time complexity of put in a chained HashMap?',
              options: [
                { text: 'O(1)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true }
              ],
              correct: 2,
              explanation: 'If all keys hash to the same bucket, the chain grows to size n.'
            },
            {
              type: 'true-false',
              statement: 'java.util.HashMap upgrades long chains to red-black trees in modern Java.',
              correct: true,
              explanation: 'Since Java 8, buckets that grow past a threshold become red-black trees, reducing worst-case to O(log n).'
            },
            {
              type: 'fill-blank',
              prompt: 'On collision, link new head to the previous chain.',
              codeLines: [
                { html: 'head.next = table[b]; table[b] = <span class="fn">_BLANK_</span>;' }
              ],
              tokens: ['head', 'null', 'next', 'b'],
              correctAnswer: 'head',
              explanation: 'New entry becomes the bucket head; the rest of the chain is reached via head.next.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order put logic.',
              lines: [
                'int b = bucket(k);',
                'for (Entry<K,V> e = table[b]; e != null; e = e.next) {',
                '    if (e.k.equals(k)) { e.v = v; return; }',
                '}',
                'Entry<K,V> head = new Entry<>(k, v);',
                'head.next = table[b];',
                'table[b] = head;',
                'size++;'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6, 7]
            },
            {
              type: 'output-predict',
              prompt: 'Two distinct keys hash to bucket 3. After both puts, table[3]:',
              code: `<span class="com">// see chained put</span>`,
              options: ['contains only the first', 'contains only the second', 'is a chain of 2 entries', 'is null'],
              correct: 2,
              explanation: 'Both keys live in the same bucket, linked via next.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Iterate a bucket chain.',
              tokens: ['for', '(', 'Entry', '<', 'K', ',', 'V', '>', 'e', '=', 'table', '[', 'b', ']', ';', 'e', '!=', 'null', ';', 'e', '=', 'e', '.', 'next', ')'],
              correctOrder: ['for', '(', 'Entry', '<', 'K', ',', 'V', '>', 'e', '=', 'table', '[', 'b', ']', ';', 'e', '!=', 'null', ';', 'e', '=', 'e', '.', 'next', ')'],
              explanation: 'Classic for loop walking a singly-linked chain.'
            },
            {
              type: 'match-pairs',
              prompt: 'Each scenario, what is the time complexity?',
              leftLabel: 'Scenario',
              rightLabel: 'Cost',
              pairs: [
                { left: 'good hash, low load', right: 'O(1) average' },
                { left: 'all keys collide (chain)', right: 'O(n)' },
                { left: 'all keys collide (tree, Java 8+)', right: 'O(log n)' },
                { left: 'resize on load factor', right: 'amortised O(1)' }
              ]
            }
          ]
        }
      ]
    }
  ]
});

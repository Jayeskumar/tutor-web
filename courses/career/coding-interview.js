PUSH({
  id: 'coding-interview',
  name: 'Coding Interview',
  icon: '💻',
  color: '#e53935',
  description: 'Crack the coding rounds — patterns, templates, and problem-solving frameworks.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'ci-u1', name: 'Unit 1 · The Coding Interview', description: 'What to expect, how to win',
      lessons: [
        {
          id: 'ci-u1-l1', name: 'What gets tested', icon: '🎯', xp: 15,
          challenges: [
            { type: 'concept', title: 'Beyond solving the problem', content: `<p>Interviewers evaluate four things:</p>
<div class="code-block"><span class="com">1. Problem solving:</span>    Can you break the problem down?
<span class="com">2. Communication:</span>      Do you explain your thinking?
<span class="com">3. Coding:</span>             Is your code clean, correct, efficient?
<span class="com">4. Verification:</span>       Do you test your code?</div>
<p>Even with the optimal solution, silence + buggy code → no offer. Even with a suboptimal solution, clear thinking + good code can get you hired.</p>` },
            { type: 'multiple-choice', prompt: 'Which is MOST important during a coding interview?',
              options: [{text:'Solving optimally on first try', code:false},{text:'Demonstrating clear problem-solving + communication', code:false},{text:'Typing speed', code:false},{text:'Memorizing all of LeetCode', code:false}],
              correct: 1, explanation: 'Interviewers want to see HOW you think, not just the final answer.' },
            { type: 'true-false', statement: 'Solving in silence is a red flag, even if your final code is correct.', correct: true, explanation: 'They can\'t evaluate your thinking. Always narrate.' },
            { type: 'match-pairs', prompt: 'Match the signal to what it indicates.', leftLabel: 'Behavior', rightLabel: 'Signal',
              pairs: [{left:'Asks clarifying questions', right:'Strong'},{left:'Codes immediately without planning', right:'Weak'},{left:'Tests with edge cases unprompted', right:'Strong'},{left:'Stays silent for 5 min', right:'Weak'}] }
          ]
        },
        {
          id: 'ci-u1-l2', name: 'Typical interview formats', icon: '📋', xp: 15,
          challenges: [
            { type: 'concept', title: 'Know the format', content: `<div class="code-block"><span class="com">Phone screen:</span>     30-45min, one problem, online editor (no execution)
<span class="com">Online assessment:</span> auto-graded, 2-4 problems, ~90min
<span class="com">Onsite — coding:</span>   45min each, 3-5 rounds, whiteboard or laptop
<span class="com">Onsite — system:</span>   45min, sketch a system at scale (senior+)
<span class="com">Take-home:</span>         build something over 3-7 days, then discuss</div>` },
            { type: 'multiple-choice', prompt: 'In a phone-screen with no code execution, the smartest move is:',
              options: [{text:'Hope your code works', code:false},{text:'Trace through your code by hand with an example before declaring done', code:false},{text:'Ask the interviewer to run it', code:false},{text:'Submit fast', code:false}],
              correct: 1, explanation: 'You\'re your own debugger. Trace through carefully on an example.' },
            { type: 'true-false', statement: 'Online assessments often allow any language and let you run code.', correct: true, explanation: 'OAs usually have a real editor with test cases.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Framework ============== */
    {
      id: 'ci-u2', name: 'Unit 2 · The Problem-Solving Framework', description: 'A repeatable approach for any problem',
      lessons: [
        {
          id: 'ci-u2-l1', name: 'UCPSV — your interview rhythm', icon: '🎼', xp: 20,
          challenges: [
            { type: 'concept', title: 'A 5-step recipe', content: `<div class="code-block"><span class="com">U — Understand</span>   restate the problem; ask clarifying Qs
<span class="com">C — Cases</span>        list inputs incl. edge cases (empty, dup, neg)
<span class="com">P — Plan</span>         brute force first, then optimize; share pseudocode
<span class="com">S — Solve</span>        translate plan to code, narrate decisions
<span class="com">V — Verify</span>       walk through with an example; check edge cases</div>
<p>Spend roughly: <strong>20% U+C+P</strong>, <strong>60% S</strong>, <strong>20% V</strong>. Don\'t rush to code.</p>` },
            { type: 'multiple-choice', prompt: 'Best FIRST step on any problem?',
              options: [{text:'Start typing', code:false},{text:'Restate the problem to confirm understanding', code:false},{text:'Pick a complexity', code:false},{text:'Pick a data structure', code:false}],
              correct: 1, explanation: 'Misunderstanding the problem is the most common failure.' },
            { type: 'reorder-code', prompt: 'Reorder the UCPSV framework.',
              lines: ['Understand', 'Cases / Examples', 'Plan / pseudocode', 'Solve / code', 'Verify with example'],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'true-false', statement: 'You should always START with a brute-force solution, then optimize.', correct: true, explanation: 'Brute force shows you can solve it. Then improve.' }
          ]
        },
        {
          id: 'ci-u2-l2', name: 'Clarifying questions', icon: '❓', xp: 15,
          challenges: [
            { type: 'concept', title: 'Always ask before coding', content: `<p>Common clarifying questions:</p>
<div class="code-block">- Input size? (10? 10^9?)
- Sorted? Unique? Negative? Empty? Null?
- Multiple valid answers? Any one? All?
- Memory constraints?
- Can I modify input?
- Are there time limits per operation?</div>
<p>Each answer changes your approach. Skipping this = solving the wrong problem.</p>` },
            { type: 'multiple-choice', prompt: '"Find a pair summing to K." Best first clarifying question?',
              options: [{text:'Are the numbers integers?', code:false},{text:'Is the array sorted?', code:false},{text:'Is there always exactly one answer?', code:false},{text:'All of these', code:false}],
              correct: 3, explanation: 'All change the optimal approach. Sorted → two pointers; unsorted → hash map.' },
            { type: 'true-false', statement: 'You should ask 1-3 quick clarifying questions, not 10.', correct: true, explanation: 'Quality over quantity. Ask only what affects your approach.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Big O ============== */
    {
      id: 'ci-u3', name: 'Unit 3 · Big O for Interviews', description: 'Just the practical stuff',
      lessons: [
        {
          id: 'ci-u3-l1', name: 'Common complexities', icon: '📈', xp: 20,
          challenges: [
            { type: 'concept', title: 'What interviewers expect', content: `<div class="code-block"><span class="num">O(1)</span>        hash lookup, array index
<span class="num">O(log n)</span>    binary search, balanced BST
<span class="num">O(n)</span>        single pass
<span class="num">O(n log n)</span>  sort, heap ops over array
<span class="num">O(n^2)</span>      nested loop / brute force pairs
<span class="num">O(2^n)</span>      subsets / brute backtracking
<span class="num">O(n!)</span>       permutations</div>
<p>Whenever you propose a solution, state its complexity unprompted. Then ask: "can we do better?"</p>` },
            { type: 'multiple-choice', prompt: 'You loop through n items, and for each, do binary search on a sorted list of m. Total time?',
              options: [{text:'O(n)', code:true},{text:'O(n + log m)', code:true},{text:'O(n log m)', code:true},{text:'O(n * m)', code:true}],
              correct: 2, explanation: 'n iterations × log m per binary search.' },
            { type: 'output-predict', prompt: 'Complexity of this code?',
              code: `<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(n):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(i):
        ...`,
              options: ['O(n)','O(n log n)','O(n²)','O(2ⁿ)'], correct: 2, explanation: 'Total work ≈ n(n-1)/2 = O(n²).' },
            { type: 'true-false', statement: 'O(2n) and O(n) are the same Big O.', correct: true, explanation: 'Constants don\'t matter in Big O.' },
            { type: 'multiple-choice', prompt: 'Space complexity of a recursive function with depth n?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 2, explanation: 'Each recursive call uses a stack frame → O(n) space.' }
          ]
        },
        {
          id: 'ci-u3-l2', name: 'Common mistakes', icon: '⚠️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Don\'t lose easy points', content: `<p>Frequent slip-ups:</p>
<div class="code-block">- Forgetting space for recursion stack
- Forgetting hash map storage
- Saying O(n+m) when it\'s really O(n*m)
- Forgetting input building cost (e.g., sorting)
- Mixing average vs worst case (hash collisions)</div>` },
            { type: 'multiple-choice', prompt: 'You use a HashMap of n entries to find duplicates in O(n) time. What\'s space?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 2, explanation: 'The map can hold up to n keys.' },
            { type: 'true-false', statement: 'HashMap operations are O(1) AVERAGE but O(n) worst case (all keys collide).', correct: true, explanation: 'Interviewers usually accept "O(1) average" but it\'s good to acknowledge worst case.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Two Pointers ============== */
    {
      id: 'ci-u4', name: 'Unit 4 · Two Pointers Pattern', description: 'A swiss-army knife',
      lessons: [
        {
          id: 'ci-u4-l1', name: 'When to reach for it', icon: '↔️', xp: 25,
          challenges: [
            { type: 'concept', title: 'The pattern', content: `<p>Two pointers usually applies when:</p>
<div class="code-block">- Array is sorted (or sortable)
- Looking for a pair / triplet
- Comparing front and back
- "In-place" array manipulation</div>
<p><strong>Three variants:</strong></p>
<ul>
<li><strong>Opposite-ends</strong>: lo=0, hi=n-1, converge</li>
<li><strong>Same-direction (fast/slow)</strong>: cycle detection, sliding</li>
<li><strong>Multiple arrays</strong>: merging</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Reverse an array in-place using two pointers. Time complexity?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 2, explanation: 'Swap pairs from outside in — O(n/2) = O(n).' },
            { type: 'fill-blank', prompt: 'Classic opposite-ends template:',
              codeLines: [{html:'<span class="ty">int</span> lo = <span class="num">0</span>, hi = arr.length - <span class="fn">_BLANK_</span>;'}],
              tokens: ['1','0','2','n'], correctAnswer: '1', explanation: 'Last valid index is length-1.' },
            { type: 'reorder-code', prompt: 'Two-sum on sorted array.',
              lines: [
                '<span class="kw">int</span> lo=<span class="num">0</span>, hi=arr.length-<span class="num">1</span>;',
                '<span class="kw">while</span> (lo &lt; hi) {',
                '  <span class="kw">int</span> sum = arr[lo] + arr[hi];',
                '  <span class="kw">if</span> (sum == target) <span class="kw">return new int</span>[]{lo, hi};',
                '  <span class="kw">if</span> (sum &lt; target) lo++;',
                '  <span class="kw">else</span> hi--;',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6] }
          ]
        },
        {
          id: 'ci-u4-l2', name: 'Fast & slow pointers', icon: '🐇', xp: 25,
          challenges: [
            { type: 'concept', title: 'Floyd\'s tortoise & hare', content: `<p>Two pointers, same direction, different speeds. Used for:</p>
<div class="code-block">- Linked list cycle detection
- Find middle of linked list
- Detect cycle start (Floyd\'s)
- Happy number, etc.</div>
<div class="code-block"><span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
  slow = slow.next;
  fast = fast.next.next;
  <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;   <span class="com">// cycle!</span>
}</div>` },
            { type: 'multiple-choice', prompt: 'In Floyd\'s algorithm, when fast reaches end, slow is at:',
              options: [{text:'End', code:false},{text:'Start', code:false},{text:'Middle', code:false},{text:'Quarter', code:false}],
              correct: 2, explanation: 'Slow moves at half-speed → ends at the middle when fast hits end.' },
            { type: 'true-false', statement: 'Floyd\'s cycle detection uses O(1) extra space.', correct: true, explanation: 'Just two pointers — no hash set needed.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Sliding Window ============== */
    {
      id: 'ci-u5', name: 'Unit 5 · Sliding Window', description: 'Subarray / substring problems',
      lessons: [
        {
          id: 'ci-u5-l1', name: 'Fixed-size window', icon: '🪟', xp: 20,
          challenges: [
            { type: 'concept', title: 'Slide one step at a time', content: `<p>If problem asks "find best subarray of length k", you slide a fixed window.</p>
<div class="code-block"><span class="ty">int</span> sum = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) sum += arr[i];
<span class="ty">int</span> best = sum;
<span class="kw">for</span> (<span class="ty">int</span> i = k; i &lt; n; i++) {
  sum += arr[i] - arr[i-k];   <span class="com">// slide: add new, remove old</span>
  best = Math.max(best, sum);
}</div>
<p>Time: O(n). Without the slide trick, naive is O(n·k).</p>` },
            { type: 'multiple-choice', prompt: 'Max sum of subarray of size k. Best time?',
              options: [{text:'O(n·k)', code:true},{text:'O(n)', code:true},{text:'O(n log n)', code:true},{text:'O(k log n)', code:true}],
              correct: 1, explanation: 'Sliding window achieves O(n) by reusing prior sum.' },
            { type: 'true-false', statement: 'Sliding window almost always reduces a quadratic naive solution to linear.', correct: true, explanation: 'Each element enters and leaves the window once.' }
          ]
        },
        {
          id: 'ci-u5-l2', name: 'Variable-size window', icon: '🪟', xp: 25,
          challenges: [
            { type: 'concept', title: 'When window size depends on a condition', content: `<p>For "longest substring with at most k distinct", "smallest subarray with sum >= S", etc:</p>
<div class="code-block"><span class="ty">int</span> left = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> right = <span class="num">0</span>; right &lt; n; right++) {
  add(arr[right]);          <span class="com">// expand right</span>
  <span class="kw">while</span> (!validWindow()) {
    remove(arr[left]);      <span class="com">// shrink left</span>
    left++;
  }
  best = ...;               <span class="com">// update answer</span>
}</div>` },
            { type: 'multiple-choice', prompt: 'Longest substring with no repeating characters — use:',
              options: [{text:'Two pointers, opposite ends', code:false},{text:'Sliding window + HashSet', code:false},{text:'Sort first', code:false},{text:'Recursion', code:false}],
              correct: 1, explanation: 'Expand right, shrink left until no duplicates. Track max length.' },
            { type: 'true-false', statement: 'In variable-window problems, each element is touched at most twice (once entering, once leaving).', correct: true, explanation: 'That\'s why it\'s O(n) even with the inner while loop.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Hashing ============== */
    {
      id: 'ci-u6', name: 'Unit 6 · Hash Maps & Sets', description: 'O(1) lookups change everything',
      lessons: [
        {
          id: 'ci-u6-l1', name: 'Two Sum and friends', icon: '🗝️', xp: 25,
          challenges: [
            { type: 'concept', title: 'The hashing toolkit', content: `<p>HashMap (key→value) and HashSet (just keys) give average O(1) operations.</p>
<div class="code-block"><span class="com">// Two Sum: find indices summing to target</span>
<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; nums.length; i++) {
  <span class="ty">int</span> need = target - nums[i];
  <span class="kw">if</span> (seen.<span class="fn">containsKey</span>(need)) <span class="kw">return new int</span>[]{seen.<span class="fn">get</span>(need), i};
  seen.<span class="fn">put</span>(nums[i], i);
}</div>` },
            { type: 'multiple-choice', prompt: 'You need to detect if an array has duplicates. Best approach?',
              options: [{text:'Nested loop O(n²)', code:false},{text:'Sort then scan O(n log n)', code:false},{text:'HashSet — add and check O(n)', code:false},{text:'Binary search', code:false}],
              correct: 2, explanation: 'HashSet wins on time. Sort wins if no extra space allowed.' },
            { type: 'fill-blank', prompt: 'Group anagrams: what\'s the hash key?',
              codeLines: [{html:'<span class="ty">String</span> key = <span class="kw">new</span> <span class="ty">String</span>(<span class="fn">_BLANK_</span>(s.toCharArray()));'}],
              tokens: ['sort','reverse','hash','copy'], correctAnswer: 'sort', explanation: 'Anagrams share the same sorted character string.' },
            { type: 'true-false', statement: 'HashMap\'s O(1) lookup assumes a good hash function with few collisions.', correct: true, explanation: 'Worst case (all collisions) is O(n). Modern Java HashMap converts colliding buckets to trees → O(log n) worst.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Linked Lists ============== */
    {
      id: 'ci-u7', name: 'Unit 7 · Linked Lists', description: 'Reverse, middle, cycles',
      lessons: [
        {
          id: 'ci-u7-l1', name: 'Reverse a linked list', icon: '🔗', xp: 25,
          challenges: [
            { type: 'concept', title: 'A classic interview opener', content: `<div class="code-block"><span class="ty">ListNode</span> <span class="fn">reverse</span>(<span class="ty">ListNode</span> head) {
  <span class="ty">ListNode</span> prev = <span class="kw">null</span>, curr = head;
  <span class="kw">while</span> (curr != <span class="kw">null</span>) {
    <span class="ty">ListNode</span> next = curr.next;   <span class="com">// save next</span>
    curr.next = prev;             <span class="com">// flip pointer</span>
    prev = curr;                  <span class="com">// advance prev</span>
    curr = next;                  <span class="com">// advance curr</span>
  }
  <span class="kw">return</span> prev;                   <span class="com">// new head</span>
}</div>` },
            { type: 'multiple-choice', prompt: 'Time complexity of iterative linked-list reversal?',
              options: [{text:'O(1)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true},{text:'O(log n)', code:true}],
              correct: 1, explanation: 'Each node touched exactly once.' },
            { type: 'reorder-code', prompt: 'Reorder the reverse-list inner loop.',
              lines: ['ListNode next = curr.next;','curr.next = prev;','prev = curr;','curr = next;'],
              correctOrder: [0, 1, 2, 3] },
            { type: 'true-false', statement: 'Recursive reversal uses O(n) space due to the call stack.', correct: true, explanation: 'Iterative is preferred when space matters.' }
          ]
        },
        {
          id: 'ci-u7-l2', name: 'Cycle detection', icon: '♻️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Floyd\'s tortoise & hare', content: `<div class="code-block"><span class="ty">boolean</span> <span class="fn">hasCycle</span>(<span class="ty">ListNode</span> head) {
  <span class="ty">ListNode</span> slow = head, fast = head;
  <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
    <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
  }
  <span class="kw">return false</span>;
}</div>
<p>If there\'s a cycle, fast will eventually lap slow. O(n) time, O(1) space.</p>` },
            { type: 'multiple-choice', prompt: 'Floyd\'s cycle detection space complexity?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 0, explanation: 'Just two pointers — constant extra space.' },
            { type: 'true-false', statement: 'HashSet-based cycle detection uses O(n) space.', correct: true, explanation: 'Stores visited nodes. Floyd\'s wins on space.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Stacks & Queues ============== */
    {
      id: 'ci-u8', name: 'Unit 8 · Stacks & Queues', description: 'Balanced parens, monotonic stacks',
      lessons: [
        {
          id: 'ci-u8-l1', name: 'Balanced parentheses', icon: '🔲', xp: 20,
          challenges: [
            { type: 'concept', title: 'A go-to stack problem', content: `<div class="code-block"><span class="ty">boolean</span> <span class="fn">isValid</span>(<span class="ty">String</span> s) {
  <span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">char</span> c : s.toCharArray()) {
    <span class="kw">if</span> (c == <span class="str">\'(\'</span>) stack.<span class="fn">push</span>(<span class="str">\')\'</span>);
    <span class="kw">else if</span> (c == <span class="str">\'[\'</span>) stack.<span class="fn">push</span>(<span class="str">\']\'</span>);
    <span class="kw">else if</span> (c == <span class="str">\'{\'</span>) stack.<span class="fn">push</span>(<span class="str">\'}\'</span>);
    <span class="kw">else if</span> (stack.<span class="fn">isEmpty</span>() || stack.<span class="fn">pop</span>() != c) <span class="kw">return false</span>;
  }
  <span class="kw">return</span> stack.<span class="fn">isEmpty</span>();
}</div>` },
            { type: 'multiple-choice', prompt: 'Best data structure for matching parens / brackets?',
              options: [{text:'Queue', code:true},{text:'Stack', code:true},{text:'Set', code:true},{text:'Map', code:true}],
              correct: 1, explanation: 'LIFO matches the nesting nature of brackets.' },
            { type: 'true-false', statement: '"()[{]}" is invalid bracket matching.', correct: true, explanation: 'Inner brackets must close in reverse open order.' }
          ]
        },
        {
          id: 'ci-u8-l2', name: 'Monotonic stack', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'For "next greater" problems', content: `<p>A monotonic stack maintains elements in increasing or decreasing order. Used for "next greater/smaller element" problems.</p>
<div class="code-block"><span class="com">// Next Greater Element</span>
<span class="ty">int</span>[] <span class="fn">nextGreater</span>(<span class="ty">int</span>[] nums) {
  <span class="ty">int</span>[] ans = <span class="kw">new int</span>[nums.length];
  <span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> i = nums.length - <span class="num">1</span>; i >= <span class="num">0</span>; i--) {
    <span class="kw">while</span> (!stack.<span class="fn">isEmpty</span>() && stack.<span class="fn">peek</span>() &lt;= nums[i])
      stack.<span class="fn">pop</span>();
    ans[i] = stack.<span class="fn">isEmpty</span>() ? -<span class="num">1</span> : stack.<span class="fn">peek</span>();
    stack.<span class="fn">push</span>(nums[i]);
  }
  <span class="kw">return</span> ans;
}</div>` },
            { type: 'multiple-choice', prompt: 'Monotonic stack achieves what time complexity for "next greater"?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 2, explanation: 'Each element pushed and popped at most once → O(n).' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Trees ============== */
    {
      id: 'ci-u9', name: 'Unit 9 · Trees & Recursion', description: 'DFS templates',
      lessons: [
        {
          id: 'ci-u9-l1', name: 'Tree traversal templates', icon: '🌲', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three classic DFS shapes', content: `<div class="code-block"><span class="com">// Preorder: process node, then children</span>
<span class="fn">visit</span>(node);
<span class="fn">dfs</span>(node.left);
<span class="fn">dfs</span>(node.right);

<span class="com">// Inorder: left, node, right (gives sorted on BST)</span>
<span class="fn">dfs</span>(node.left);
<span class="fn">visit</span>(node);
<span class="fn">dfs</span>(node.right);

<span class="com">// Postorder: children first, then node (good for bottom-up)</span>
<span class="fn">dfs</span>(node.left);
<span class="fn">dfs</span>(node.right);
<span class="fn">visit</span>(node);</div>` },
            { type: 'multiple-choice', prompt: 'In-order traversal of a BST yields:',
              options: [{text:'Random', code:false},{text:'Sorted ascending', code:false},{text:'Sorted descending', code:false},{text:'Level order', code:false}],
              correct: 1, explanation: 'BST property guarantees left < node < right; in-order respects that.' },
            { type: 'multiple-choice', prompt: 'For "max depth of tree", which traversal is most natural?',
              options: [{text:'Preorder', code:false},{text:'Postorder (compute children first)', code:false},{text:'BFS only', code:false},{text:'Inorder', code:false}],
              correct: 1, explanation: 'max(left, right) + 1 — needs children\'s depths first.' }
          ]
        },
        {
          id: 'ci-u9-l2', name: 'Common tree patterns', icon: '🌳', xp: 25,
          challenges: [
            { type: 'concept', title: 'Return useful info from each recursion', content: `<p>The "return something from each recursive call" pattern handles:</p>
<div class="code-block">- max depth (return depth)
- balanced check (return depth, or -1 if unbalanced)
- diameter (return depth, track max len in side variable)
- lowest common ancestor (return found node)</div>
<div class="code-block"><span class="ty">int</span> <span class="fn">depth</span>(<span class="ty">TreeNode</span> node) {
  <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="num">0</span>;
  <span class="kw">return</span> <span class="num">1</span> + <span class="ty">Math</span>.<span class="fn">max</span>(<span class="fn">depth</span>(node.left), <span class="fn">depth</span>(node.right));
}</div>` },
            { type: 'multiple-choice', prompt: 'Time complexity of computing max depth?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n log n)', code:true}],
              correct: 2, explanation: 'Visit each node once.' },
            { type: 'true-false', statement: 'A skewed tree (linked-list shape) has recursion depth O(n).', correct: true, explanation: 'Risk of stack overflow on huge inputs.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — BFS ============== */
    {
      id: 'ci-u10', name: 'Unit 10 · BFS Pattern', description: 'Level order, shortest path (unweighted)',
      lessons: [
        {
          id: 'ci-u10-l1', name: 'Level-order traversal', icon: '🌊', xp: 25,
          challenges: [
            { type: 'concept', title: 'The BFS template', content: `<div class="code-block"><span class="ty">Queue</span>&lt;<span class="ty">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
q.<span class="fn">offer</span>(root);
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
  <span class="ty">int</span> size = q.<span class="fn">size</span>();           <span class="com">// fix this level\'s size</span>
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; size; i++) {
    <span class="ty">TreeNode</span> node = q.<span class="fn">poll</span>();
    <span class="com">// process node</span>
    <span class="kw">if</span> (node.left  != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.left);
    <span class="kw">if</span> (node.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.right);
  }
}</div>
<p>The <code>size = q.size()</code> trick is key — it lets you process one level at a time.</p>` },
            { type: 'multiple-choice', prompt: 'For "minimum steps to reach target in a grid", BFS or DFS?',
              options: [{text:'BFS (gives shortest path)', code:false},{text:'DFS', code:false},{text:'Either works', code:false},{text:'Binary search', code:false}],
              correct: 0, explanation: 'BFS explores level by level → first reach = shortest.' },
            { type: 'true-false', statement: 'BFS uses a queue; DFS uses a stack (or recursion).', correct: true, explanation: 'FIFO vs LIFO — fundamental difference.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Heaps ============== */
    {
      id: 'ci-u11', name: 'Unit 11 · Heaps / Priority Queue', description: 'Top-K, merging, scheduling',
      lessons: [
        {
          id: 'ci-u11-l1', name: 'Top-K elements', icon: '🏆', xp: 25,
          challenges: [
            { type: 'concept', title: 'A min-heap of size K', content: `<div class="code-block"><span class="com">// Find k largest elements</span>
<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();   <span class="com">// min-heap</span>
<span class="kw">for</span> (<span class="ty">int</span> n : nums) {
  pq.<span class="fn">offer</span>(n);
  <span class="kw">if</span> (pq.<span class="fn">size</span>() &gt; k) pq.<span class="fn">poll</span>();   <span class="com">// remove smallest</span>
}
<span class="com">// pq now contains the K largest</span></div>
<p>Time: <code>O(n log k)</code>. For k &lt;&lt; n, this beats O(n log n) sorting.</p>` },
            { type: 'multiple-choice', prompt: 'Time complexity of finding K largest with a heap of size K?',
              options: [{text:'O(n)', code:true},{text:'O(n log k)', code:true},{text:'O(n log n)', code:true},{text:'O(k²)', code:true}],
              correct: 1, explanation: 'n inserts, each O(log k).' },
            { type: 'multiple-choice', prompt: 'Java\'s default PriorityQueue is:',
              options: [{text:'Max-heap', code:false},{text:'Min-heap', code:false},{text:'FIFO queue', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'Java defaults to min-heap. Use Comparator.reverseOrder() for max-heap.' },
            { type: 'true-false', statement: 'For "merge K sorted lists", a PriorityQueue is the standard approach.', correct: true, explanation: 'Push heads, poll min, push its next — O(N log K).' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Graphs ============== */
    {
      id: 'ci-u12', name: 'Unit 12 · Graph Problems', description: 'BFS, DFS, topological sort',
      lessons: [
        {
          id: 'ci-u12-l1', name: 'Connected components', icon: '🕸️', xp: 25,
          challenges: [
            { type: 'concept', title: 'DFS counts islands', content: `<p>"Number of islands" = count connected components in a grid.</p>
<div class="code-block"><span class="ty">int</span> <span class="fn">numIslands</span>(<span class="ty">char</span>[][] grid) {
  <span class="ty">int</span> count = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; grid.length; r++)
    <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; grid[<span class="num">0</span>].length; c++)
      <span class="kw">if</span> (grid[r][c] == <span class="str">\'1\'</span>) { <span class="fn">dfs</span>(grid, r, c); count++; }
  <span class="kw">return</span> count;
}

<span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">char</span>[][] grid, <span class="ty">int</span> r, <span class="ty">int</span> c) {
  <span class="kw">if</span> (r&lt;<span class="num">0</span>||c&lt;<span class="num">0</span>||r>=grid.length||c>=grid[<span class="num">0</span>].length||grid[r][c]!=<span class="str">\'1\'</span>) <span class="kw">return</span>;
  grid[r][c] = <span class="str">\'0\'</span>;   <span class="com">// mark visited</span>
  <span class="fn">dfs</span>(grid, r+<span class="num">1</span>, c); <span class="fn">dfs</span>(grid, r-<span class="num">1</span>, c);
  <span class="fn">dfs</span>(grid, r, c+<span class="num">1</span>); <span class="fn">dfs</span>(grid, r, c-<span class="num">1</span>);
}</div>` },
            { type: 'multiple-choice', prompt: 'Time complexity of "number of islands" on a m×n grid?',
              options: [{text:'O(m+n)', code:true},{text:'O(m·n)', code:true},{text:'O(m²·n²)', code:true},{text:'O(log(m·n))', code:true}],
              correct: 1, explanation: 'Visit each cell at most twice → O(m·n).' },
            { type: 'true-false', statement: 'Marking visited cells in-place saves O(m·n) space vs a visited set.', correct: true, explanation: 'A common space-saving trick — but ask if you can modify the grid.' }
          ]
        },
        {
          id: 'ci-u12-l2', name: 'Topological sort', icon: '📐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Course-schedule / dependency-order problems', content: `<p><strong>Kahn\'s algorithm</strong> (BFS-based):</p>
<div class="code-block"><span class="com">// Build in-degree array + adj list
// Start with all 0-indegree nodes in queue
// Pop, add to order, decrement neighbors\' in-degree
// Push any new 0-indegree nodes
// If order.size() != n → there\'s a cycle</span></div>` },
            { type: 'multiple-choice', prompt: 'Topological sort works on which graphs?',
              options: [{text:'Any graph', code:false},{text:'Only DAGs (Directed Acyclic Graphs)', code:false},{text:'Only undirected', code:false},{text:'Only weighted', code:false}],
              correct: 1, explanation: 'A topological order only exists for DAGs.' },
            { type: 'true-false', statement: 'Topo sort can detect cycles — if the result has fewer nodes than the graph, there\'s a cycle.', correct: true, explanation: 'Cycles trap nodes that never reach 0 in-degree.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Backtracking ============== */
    {
      id: 'ci-u13', name: 'Unit 13 · Backtracking', description: 'Subsets, permutations, n-queens',
      lessons: [
        {
          id: 'ci-u13-l1', name: 'The backtracking recipe', icon: '↩️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Choose → recurse → un-choose', content: `<div class="code-block"><span class="kw">void</span> <span class="fn">backtrack</span>(state, choices) {
  <span class="kw">if</span> (isComplete(state)) {
    result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span>(state));
    <span class="kw">return</span>;
  }
  <span class="kw">for</span> (choice : choices) {
    <span class="kw">if</span> (isValid(choice, state)) {
      <span class="fn">make</span>(state, choice);
      <span class="fn">backtrack</span>(state, nextChoices(choices, choice));
      <span class="fn">unmake</span>(state, choice);     <span class="com">// the "back" in backtracking</span>
    }
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'For generating all subsets of n elements, complexity?',
              options: [{text:'O(n)', code:true},{text:'O(n²)', code:true},{text:'O(2ⁿ × n)', code:true},{text:'O(n!)', code:true}],
              correct: 2, explanation: '2ⁿ subsets, each up to n elements to copy.' },
            { type: 'multiple-choice', prompt: 'For all permutations of n elements?',
              options: [{text:'O(n)', code:true},{text:'O(n²)', code:true},{text:'O(2ⁿ)', code:true},{text:'O(n! × n)', code:true}],
              correct: 3, explanation: 'n! permutations × n to construct each.' },
            { type: 'true-false', statement: 'Always unmake your changes before returning from a branch — that\'s what makes it "back" tracking.', correct: true, explanation: 'Otherwise you contaminate other branches.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — DP ============== */
    {
      id: 'ci-u14', name: 'Unit 14 · Dynamic Programming', description: 'Recognizing + solving',
      lessons: [
        {
          id: 'ci-u14-l1', name: 'Spotting DP', icon: '🧠', xp: 30,
          challenges: [
            { type: 'concept', title: 'Two telltale signs', content: `<p>DP applies when:</p>
<div class="code-block"><span class="com">1. Overlapping subproblems</span> — same calc repeats
<span class="com">2. Optimal substructure</span> — best of parts → best of whole</div>
<p>Common DP problems: climbing stairs, house robber, coin change, knapsack, edit distance, LCS, LIS.</p>
<p><strong>Top-down (memoization)</strong>: write recursion, cache results.<br/>
<strong>Bottom-up (tabulation)</strong>: fill an array iteratively.</p>` },
            { type: 'multiple-choice', prompt: 'Naive fib has complexity:',
              options: [{text:'O(n)', code:true},{text:'O(n log n)', code:true},{text:'O(2ⁿ)', code:true},{text:'O(n!)', code:true}],
              correct: 2, explanation: 'Each call branches into 2 → exponential.' },
            { type: 'multiple-choice', prompt: 'Memoized fib brings it to:',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 2, explanation: 'Each subproblem solved once.' },
            { type: 'reorder-code', prompt: 'Bottom-up fib.',
              lines: [
                '<span class="ty">int</span>[] dp = <span class="kw">new int</span>[n+<span class="num">1</span>];',
                'dp[<span class="num">0</span>] = <span class="num">0</span>; dp[<span class="num">1</span>] = <span class="num">1</span>;',
                '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i &lt;= n; i++)',
                '  dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];',
                '<span class="kw">return</span> dp[n];'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        },
        {
          id: 'ci-u14-l2', name: 'Classic DP problems', icon: '🏛️', xp: 30,
          challenges: [
            { type: 'concept', title: 'A pattern bank', content: `<div class="code-block"><span class="com">Climb stairs:</span>     dp[i] = dp[i-1] + dp[i-2]
<span class="com">House robber:</span>     dp[i] = max(dp[i-1], dp[i-2] + nums[i])
<span class="com">Coin change min:</span>  dp[v] = min(dp[v-c] + 1) for each coin c
<span class="com">0/1 knapsack:</span>     dp[i][w] = max(skip, take if fits)
<span class="com">LCS:</span>              dp[i][j] = 1 + dp[i-1][j-1] if match else max(dp[i-1][j], dp[i][j-1])
<span class="com">Edit distance:</span>    dp[i][j] = 1 + min(insert, delete, replace)</div>` },
            { type: 'multiple-choice', prompt: 'Time complexity of 0/1 knapsack with n items, capacity W?',
              options: [{text:'O(n + W)', code:true},{text:'O(n · W)', code:true},{text:'O(n²)', code:true},{text:'O(2ⁿ)', code:true}],
              correct: 1, explanation: 'Two nested loops: i over items, w over weights.' },
            { type: 'multiple-choice', prompt: 'For Longest Increasing Subsequence (LIS), best known time?',
              options: [{text:'O(n)', code:true},{text:'O(n log n)', code:true},{text:'O(n²)', code:true},{text:'O(2ⁿ)', code:true}],
              correct: 1, explanation: 'Patience sorting + binary search = O(n log n). Standard DP is O(n²).' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Greedy/Math/Bit ============== */
    {
      id: 'ci-u15', name: 'Unit 15 · Greedy · Math · Bits', description: 'Misc but important',
      lessons: [
        {
          id: 'ci-u15-l1', name: 'Greedy choice', icon: '🍰', xp: 20,
          challenges: [
            { type: 'concept', title: 'When greedy works', content: `<p>Greedy works when locally optimal choices lead to a globally optimal solution. Classic examples:</p>
<div class="code-block">- Interval scheduling (pick earliest finishing time)
- Jump game (track max reachable)
- Gas station (find start that never goes negative)
- Huffman coding</div>
<p>If you can\'t prove greedy works → switch to DP.</p>` },
            { type: 'multiple-choice', prompt: 'For "merge overlapping intervals", common first step is:',
              options: [{text:'Sort by start time', code:false},{text:'Sort by end time', code:false},{text:'Hash by id', code:false},{text:'Heap', code:false}],
              correct: 0, explanation: 'Sort by start, then merge in one pass.' },
            { type: 'true-false', statement: 'For US coin denominations (1, 5, 10, 25), greedy gives minimum coins.', correct: true, explanation: 'For canonical coin systems, greedy works. For arbitrary coins, use DP.' }
          ]
        },
        {
          id: 'ci-u15-l2', name: 'Bit manipulation tricks', icon: '⚙️', xp: 20,
          challenges: [
            { type: 'concept', title: 'XOR magic + power-of-2 checks', content: `<div class="code-block"><span class="com">// XOR tricks</span>
a ^ a = <span class="num">0</span>;        a ^ <span class="num">0</span> = a;

<span class="com">// Find the single number (rest appear twice)</span>
<span class="ty">int</span> single = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> n : nums) single ^= n;

<span class="com">// Check if x is power of 2</span>
<span class="kw">return</span> x &gt; <span class="num">0</span> && (x & (x - <span class="num">1</span>)) == <span class="num">0</span>;

<span class="com">// Count set bits</span>
<span class="ty">int</span> count = <span class="ty">Integer</span>.<span class="fn">bitCount</span>(x);</div>` },
            { type: 'multiple-choice', prompt: 'Why does (x & (x-1)) == 0 check power-of-2?',
              options: [{text:'Random formula', code:false},{text:'A power of 2 has exactly one bit set; subtracting 1 turns it into all lower bits set, so AND = 0', code:false},{text:'Faster than mod', code:false},{text:'It doesn\'t', code:false}],
              correct: 1, explanation: 'Classic bit trick.' },
            { type: 'output-predict', prompt: 'XOR of [1, 2, 1, 3, 2]?',
              code: `<span class="com">// pairs cancel out</span>`,
              options: ['0','1','2','3'], correct: 3, explanation: '1^1=0, 2^2=0, leaving 3.' }
          ]
        }
      ]
    },

    /* ============== UNIT 16 — Practice ============== */
    {
      id: 'ci-u16', name: 'Unit 16 · Practice Strategy', description: 'How to actually study',
      lessons: [
        {
          id: 'ci-u16-l1', name: 'A study plan that works', icon: '📅', xp: 20,
          challenges: [
            { type: 'concept', title: 'Quality > quantity', content: `<p>Doing 500 random problems is less effective than:</p>
<div class="code-block">1. Pick a pattern (e.g., sliding window)
2. Solve 5-10 problems in that pattern
3. After each: write a 1-line "what was the trick?"
4. Move to the next pattern
5. After all patterns: do mixed problems to test recognition</div>
<p>Resources: NeetCode 150, Blind 75, LeetCode patterns, AlgoExpert.</p>` },
            { type: 'multiple-choice', prompt: 'Better study strategy?',
              options: [{text:'500 random problems', code:false},{text:'150 well-chosen problems organized by pattern', code:false},{text:'Only "Hard" problems', code:false},{text:'Memorize all solutions', code:false}],
              correct: 1, explanation: 'Pattern recognition is what gets tested. Master patterns, not problems.' },
            { type: 'true-false', statement: 'After solving, briefly noting the trick / pattern helps you recognize it next time.', correct: true, explanation: 'Spaced retrieval beats brute repetition.' }
          ]
        },
        {
          id: 'ci-u16-l2', name: 'Mock interviews', icon: '🎤', xp: 20,
          challenges: [
            { type: 'concept', title: 'Practice the interview, not just the code', content: `<p>Solving alone ≠ solving under pressure with someone watching.</p>
<div class="code-block">- Mock with peers (Pramp, Interviewing.io)
- Record yourself solving — review for filler words
- Practice writing on a whiteboard / Google Doc (no autocomplete)
- Try problems from companies you\'re targeting
- After each mock: ask for direct feedback</div>` },
            { type: 'multiple-choice', prompt: 'Best way to simulate real conditions?',
              options: [{text:'Solve in your IDE', code:false},{text:'Use a plain editor with no autocomplete', code:false},{text:'Have a stopwatch', code:false},{text:'Both 2 and 3', code:false}],
              correct: 3, explanation: 'Match the real constraints — minimal tooling + time pressure.' },
            { type: 'true-false', statement: 'It\'s okay to take a real interview you don\'t care about, just for practice.', correct: true, explanation: 'Low-stakes practice. Just be respectful of the company\'s time.' },
            { type: 'match-pairs', prompt: 'Common interview mistake → fix.', leftLabel: 'Mistake', rightLabel: 'Fix',
              pairs: [{left:'Silent thinking', right:'Narrate out loud'},{left:'Jump straight to code', right:'Plan + pseudocode first'},{left:'No edge cases', right:'List them upfront'},{left:'Don\'t test', right:'Walk through with an example'}] }
          ]
        }
      ]
    }

  ]
});

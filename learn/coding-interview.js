LEARN('coding-interview', {
  intro: 'Crack coding interviews — pattern playbook, problem-solving framework, and code templates you can memorize.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'ci-c1', title: 'Anatomy of a Coding Interview', icon: '🎯', sections: [
      { type: 'heading', text: 'What you\'re actually being tested on', level: 1 },
      { type: 'para', html: 'Interviewers grade you on <strong>four signals</strong> — not just the final code:' },
      { type: 'image', alt: 'four signals', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">The four interview signals</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="130" height="120" rx="12" fill="#e53935"/>
    <text x="85" y="85" text-anchor="middle" fill="white" font-size="14">Problem-Solving</text>
    <text x="85" y="105" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Break down</text>
    <text x="85" y="120" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Identify patterns</text>
    <text x="85" y="135" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Plan first</text>

    <rect x="160" y="50" width="130" height="120" rx="12" fill="#7c4dff"/>
    <text x="225" y="85" text-anchor="middle" fill="white" font-size="14">Communication</text>
    <text x="225" y="105" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Narrate thinking</text>
    <text x="225" y="120" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Ask clarifying Qs</text>
    <text x="225" y="135" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Discuss tradeoffs</text>

    <rect x="300" y="50" width="130" height="120" rx="12" fill="#1cb0f6"/>
    <text x="365" y="85" text-anchor="middle" fill="white" font-size="14">Coding</text>
    <text x="365" y="105" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Clean &amp; correct</text>
    <text x="365" y="120" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Reasonable speed</text>
    <text x="365" y="135" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Good naming</text>

    <rect x="440" y="50" width="140" height="120" rx="12" fill="#58cc02"/>
    <text x="510" y="85" text-anchor="middle" fill="white" font-size="14">Verification</text>
    <text x="510" y="105" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Walk through</text>
    <text x="510" y="120" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Edge cases</text>
    <text x="510" y="135" text-anchor="middle" fill="white" font-size="10" font-weight="normal">State complexity</text>
  </g>
  <text x="300" y="200" text-anchor="middle" font-size="11" fill="#666" font-family="Nunito">Strong on all four → offer. Strong on only one → no offer.</text>
</svg>` },
      { type: 'callout', kind: 'info', html: 'You can get the optimal solution and still fail if you didn\'t talk through your thinking. You can deliver a suboptimal-but-clearly-reasoned solution and still get hired.' },

      { type: 'heading', text: 'Interview formats you\'ll see', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Phone screen</strong> (30-45 min) — one problem in a shared editor (often no code execution)',
        '<strong>Online assessment</strong> (60-90 min) — 2-4 auto-graded problems',
        '<strong>Onsite coding</strong> (45 min × several rounds) — whiteboard or laptop',
        '<strong>Take-home</strong> — build something over a few days, then walk through',
        '<strong>System design</strong> — sketch a scaled-up system (mid+ level)',
        '<strong>Behavioral</strong> — interleaved with technical'
      ]},

      { type: 'heading', text: 'What "good" looks like', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Re-state the problem before touching the editor',
        'Ask 1-3 quality clarifying questions',
        'Outline brute force, then optimize, then code',
        'Narrate continuously — silence is bad',
        'Test your code by hand with an example',
        'State time AND space complexity unprompted'
      ]}
    ]},

    /* ============== CH 2 — Framework ============== */
    { id: 'ci-c2', title: 'The Problem-Solving Framework', icon: '🎼', sections: [
      { type: 'heading', text: 'UCPSV — the 5-step rhythm', level: 1 },
      { type: 'para', html: 'You don\'t need ten different frameworks. Use one, every time, until it\'s muscle memory.' },
      { type: 'image', alt: 'ucpsv', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">UCPSV — your interview rhythm</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="60" width="100" height="60" rx="10" fill="#e53935"/><text x="70" y="85" text-anchor="middle" fill="white" font-size="14">U</text><text x="70" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Understand</text>
    <text x="135" y="95" font-size="20">→</text>
    <rect x="150" y="60" width="100" height="60" rx="10" fill="#ff9600"/><text x="200" y="85" text-anchor="middle" fill="white" font-size="14">C</text><text x="200" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Cases</text>
    <text x="265" y="95" font-size="20">→</text>
    <rect x="280" y="60" width="100" height="60" rx="10" fill="#ffc800"/><text x="330" y="85" text-anchor="middle" fill="#3c3c3c" font-size="14">P</text><text x="330" y="105" text-anchor="middle" fill="#3c3c3c" font-size="11" font-weight="normal">Plan</text>
    <text x="395" y="95" font-size="20">→</text>
    <rect x="410" y="60" width="100" height="60" rx="10" fill="#1cb0f6"/><text x="460" y="85" text-anchor="middle" fill="white" font-size="14">S</text><text x="460" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Solve</text>
    <text x="525" y="95" font-size="20">→</text>
    <rect x="540" y="60" width="60" height="60" rx="10" fill="#58cc02"/><text x="570" y="85" text-anchor="middle" fill="white" font-size="14">V</text><text x="570" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Verify</text>

    <text x="20" y="155" font-size="11" fill="#666">~5min</text>
    <text x="150" y="155" font-size="11" fill="#666">~3min</text>
    <text x="280" y="155" font-size="11" fill="#666">~5min</text>
    <text x="410" y="155" font-size="11" fill="#666">~20min</text>
    <text x="540" y="155" font-size="11" fill="#666">~5min</text>

    <text x="300" y="185" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">Don\'t skip U, C, P. The 60% of time on Solve is much smoother for it.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Step 1: Understand', level: 2 },
      { type: 'para', html: 'Restate the problem in your own words. Confirm with the interviewer.' },
      { type: 'code', lang: 'text', code:
`<span class="com"># What you say:</span>
"So I need to find indices i and j such that nums[i] + nums[j] = target.
 Each input has exactly one solution, and I can\'t use the same element twice.
 Let me confirm — is the array sorted?"` },

      { type: 'heading', text: 'Step 2: Cases', level: 2 },
      { type: 'para', html: 'Walk through 1-2 concrete examples. List edge cases: empty, single element, duplicates, negatives, very large input.' },

      { type: 'heading', text: 'Step 3: Plan', level: 2 },
      { type: 'para', html: '<strong>Brute force first</strong>, even if you spot the optimal. State its complexity, then propose the optimization.' },
      { type: 'code', lang: 'text', code:
`<span class="com"># What you say:</span>
"Brute force: try every pair. O(n²) time, O(1) space.
 Optimization: use a hash map. For each x, check if (target - x) was seen.
 That\'s O(n) time, O(n) space. Let me code it up."` },

      { type: 'heading', text: 'Step 4: Solve', level: 2 },
      { type: 'para', html: 'Code it cleanly. Keep narrating: "I\'m initializing the map here so we can lookup in O(1)..."' },

      { type: 'heading', text: 'Step 5: Verify', level: 2 },
      { type: 'para', html: 'Trace through your code with the example you discussed. Check edge cases. State final complexity.' },
      { type: 'callout', kind: 'tip', html: 'If your example reveals a bug → fix it on the spot and explain why. Interviewers love seeing you self-correct.' }
    ]},

    /* ============== CH 3 — Big O ============== */
    { id: 'ci-c3', title: 'Big O Cheat Sheet', icon: '📈', sections: [
      { type: 'heading', text: 'Just what you need for interviews', level: 1 },
      { type: 'image', alt: 'big o tiers', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Complexity tiers for n = 10⁵ (1 second budget)</text>
  <g font-family="JetBrains Mono">
    <rect x="40" y="50" width="500" height="22" fill="#58cc02"/><text x="50" y="66" fill="white" font-weight="bold">O(1)         instant — hash, index, math</text>
    <rect x="40" y="78" width="500" height="22" fill="#58cc02"/><text x="50" y="94" fill="white" font-weight="bold">O(log n)     ~17 ops — binary search, balanced tree</text>
    <rect x="40" y="106" width="500" height="22" fill="#1cb0f6"/><text x="50" y="122" fill="white" font-weight="bold">O(n)         single pass — usually optimal</text>
    <rect x="40" y="134" width="500" height="22" fill="#1cb0f6"/><text x="50" y="150" fill="white" font-weight="bold">O(n log n)   sort, heap of n, divide &amp; conquer</text>
    <rect x="40" y="162" width="500" height="22" fill="#ffc800"/><text x="50" y="178" fill="#3c3c3c" font-weight="bold">O(n²)        nested loops — OK up to ~10⁴</text>
    <rect x="40" y="190" width="500" height="22" fill="#ff9600"/><text x="50" y="206" fill="white" font-weight="bold">O(2ⁿ)        subsets — feasible only up to n ≈ 20</text>
    <rect x="40" y="218" width="500" height="22" fill="#ff4b4b"/><text x="50" y="234" fill="white" font-weight="bold">O(n!)        permutations — only n ≤ 10 or so</text>
  </g>
  <text x="300" y="265" text-anchor="middle" font-size="11" fill="#666" font-family="Nunito">When n is large, you need to climb up this chart.</text>
</svg>` },

      { type: 'heading', text: 'Common operations cheatsheet', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Array (Java ArrayList)</span>
get/set by index      O(1)
add at end            O(1) amortized
add at front/middle   O(n)
contains              O(n)

<span class="com">// HashMap / HashSet</span>
get / put / contains  O(1) average, O(n) worst

<span class="com">// TreeMap / TreeSet (balanced BST)</span>
get / put / contains  O(log n)
firstKey, ceilingKey  O(log n)

<span class="com">// PriorityQueue (binary heap)</span>
offer / poll          O(log n)
peek                  O(1)

<span class="com">// LinkedList</span>
add/remove at head    O(1)
random access         O(n)` },

      { type: 'heading', text: 'Common patterns → expected complexity', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Two pointers / sliding window → <strong>O(n)</strong>',
        'Binary search → <strong>O(log n)</strong> per query',
        'Sort + scan → <strong>O(n log n)</strong>',
        'Single DFS / BFS of tree or graph → <strong>O(V + E)</strong>',
        'DP with 1D state → <strong>O(n)</strong> or O(n·k)',
        'DP with 2D state → <strong>O(n²)</strong>',
        'Backtracking (all subsets/permutations) → <strong>O(2ⁿ)</strong> or <strong>O(n!)</strong>'
      ]},
      { type: 'callout', kind: 'warn', html: '<strong>Don\'t forget space.</strong> A recursive function has O(depth) stack space. A HashMap of n keys uses O(n) memory.' }
    ]},

    /* ============== CH 4 — Two Pointers ============== */
    { id: 'ci-c4', title: 'Two Pointers Pattern', icon: '↔️', sections: [
      { type: 'heading', text: 'A swiss-army knife', level: 1 },
      { type: 'para', html: 'Two pointers is one of the most common patterns. It often turns O(n²) into O(n).' },

      { type: 'heading', text: 'Three variants', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        '<strong>Opposite-ends</strong>: <code>lo</code> at 0, <code>hi</code> at n-1, converge inward',
        '<strong>Fast / slow</strong> (same direction, different speeds): cycle detection, finding the middle',
        '<strong>Multiple arrays</strong>: merging sorted arrays'
      ]},

      { type: 'heading', text: 'Template: Two-sum on sorted array', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] <span class="fn">twoSum</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> target) {
  <span class="ty">int</span> lo = <span class="num">0</span>, hi = arr.length - <span class="num">1</span>;
  <span class="kw">while</span> (lo &lt; hi) {
    <span class="ty">int</span> sum = arr[lo] + arr[hi];
    <span class="kw">if</span> (sum == target) <span class="kw">return new int</span>[]{lo, hi};
    <span class="kw">if</span> (sum &lt; target) lo++;    <span class="com">// need bigger → move lo right</span>
    <span class="kw">else</span> hi--;                  <span class="com">// need smaller → move hi left</span>
  }
  <span class="kw">return new int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}` },

      { type: 'heading', text: 'Template: Floyd\'s cycle detection', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">boolean</span> <span class="fn">hasCycle</span>(<span class="ty">ListNode</span> head) {
  <span class="ty">ListNode</span> slow = head, fast = head;
  <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
    <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
  }
  <span class="kw">return false</span>;
}
<span class="com">// Time: O(n)   Space: O(1)</span>` },

      { type: 'heading', text: 'Try it', level: 2 },
      { type: 'widget', name: 'array-vis', props: { values: [1, 3, 5, 8, 11, 14, 18, 22] } },
      { type: 'callout', kind: 'tip', html: '<strong>Recognize the pattern</strong>: "find pair", "in-place modification", "cycle detection", "compare from both ends". When you see these, reach for two pointers.' }
    ]},

    /* ============== CH 5 — Sliding Window ============== */
    { id: 'ci-c5', title: 'Sliding Window', icon: '🪟', sections: [
      { type: 'heading', text: 'For subarray / substring problems', level: 1 },
      { type: 'para', html: 'When a problem asks about <em>contiguous</em> subarrays or substrings, think sliding window. Two flavors:' },

      { type: 'heading', text: 'Fixed-size window', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Max sum of subarray of size k</span>
<span class="ty">int</span> <span class="fn">maxSum</span>(<span class="ty">int</span>[] arr, <span class="ty">int</span> k) {
  <span class="ty">int</span> sum = <span class="num">0</span>, best;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) sum += arr[i];
  best = sum;
  <span class="kw">for</span> (<span class="ty">int</span> i = k; i &lt; arr.length; i++) {
    sum += arr[i] - arr[i - k];   <span class="com">// slide: add new, remove old</span>
    best = <span class="ty">Math</span>.<span class="fn">max</span>(best, sum);
  }
  <span class="kw">return</span> best;
}` },

      { type: 'heading', text: 'Variable-size window', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Longest substring with no repeating characters</span>
<span class="ty">int</span> <span class="fn">lengthOfLongestSubstring</span>(<span class="ty">String</span> s) {
  <span class="ty">Set</span>&lt;<span class="ty">Character</span>&gt; window = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  <span class="ty">int</span> left = <span class="num">0</span>, best = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">int</span> right = <span class="num">0</span>; right &lt; s.length(); right++) {
    <span class="kw">while</span> (window.<span class="fn">contains</span>(s.<span class="fn">charAt</span>(right))) {
      window.<span class="fn">remove</span>(s.<span class="fn">charAt</span>(left++));
    }
    window.<span class="fn">add</span>(s.<span class="fn">charAt</span>(right));
    best = <span class="ty">Math</span>.<span class="fn">max</span>(best, right - left + <span class="num">1</span>);
  }
  <span class="kw">return</span> best;
}
<span class="com">// Time: O(n) — each char enters and leaves the window at most once</span>` },

      { type: 'heading', text: 'See the window slide', level: 2 },
      { type: 'widget', name: 'sliding-window-vis', props: { values: [2, 1, 5, 1, 3, 2], windowSize: 3 } },

      { type: 'callout', kind: 'tip', html: 'When the inner condition fails, <strong>shrink left until valid again</strong>. The classic structure is "expand right, shrink left when needed".' }
    ]},

    /* ============== CH 6 — Hash Maps ============== */
    { id: 'ci-c6', title: 'Hash Maps & Sets', icon: '🗝️', sections: [
      { type: 'heading', text: 'O(1) lookups change everything', level: 1 },
      { type: 'para', html: 'Many "naive O(n²)" problems become O(n) just by adding a hash map. Always ask yourself: <em>"if I had instant lookup for X, would this become easier?"</em>' },

      { type: 'heading', text: 'Template: Two Sum (unsorted)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] <span class="fn">twoSum</span>(<span class="ty">int</span>[] nums, <span class="ty">int</span> target) {
  <span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; nums.length; i++) {
    <span class="ty">int</span> need = target - nums[i];
    <span class="kw">if</span> (seen.<span class="fn">containsKey</span>(need)) <span class="kw">return new int</span>[]{seen.<span class="fn">get</span>(need), i};
    seen.<span class="fn">put</span>(nums[i], i);
  }
  <span class="kw">return new int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}` },

      { type: 'heading', text: 'Template: Group anagrams', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">String</span>&gt;&gt; <span class="fn">groupAnagrams</span>(<span class="ty">String</span>[] strs) {
  <span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">List</span>&lt;<span class="ty">String</span>&gt;&gt; groups = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">String</span> s : strs) {
    <span class="ty">char</span>[] chars = s.<span class="fn">toCharArray</span>();
    <span class="ty">Arrays</span>.<span class="fn">sort</span>(chars);
    <span class="ty">String</span> key = <span class="kw">new</span> <span class="ty">String</span>(chars);
    groups.<span class="fn">computeIfAbsent</span>(key, k -&gt; <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;()).<span class="fn">add</span>(s);
  }
  <span class="kw">return new</span> <span class="ty">ArrayList</span>&lt;&gt;(groups.<span class="fn">values</span>());
}` },

      { type: 'heading', text: 'Try the hash table', level: 2 },
      { type: 'widget', name: 'hash-table-vis', props: { buckets: 8 } },

      { type: 'callout', kind: 'warn', html: 'Hash collisions can degrade lookup to O(n). Modern Java HashMap auto-converts a colliding bucket to a tree at 8 entries → O(log n) worst case.' }
    ]},

    /* ============== CH 7 — Linked Lists ============== */
    { id: 'ci-c7', title: 'Linked Lists in Interviews', icon: '🔗', sections: [
      { type: 'heading', text: 'A small but rich domain', level: 1 },
      { type: 'para', html: 'Linked lists test pointer manipulation. Drawing on paper helps — sketch nodes and rewire arrows.' },

      { type: 'heading', text: 'Template: Reverse', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">ListNode</span> <span class="fn">reverse</span>(<span class="ty">ListNode</span> head) {
  <span class="ty">ListNode</span> prev = <span class="kw">null</span>, curr = head;
  <span class="kw">while</span> (curr != <span class="kw">null</span>) {
    <span class="ty">ListNode</span> next = curr.next;  <span class="com">// 1. save next</span>
    curr.next = prev;            <span class="com">// 2. flip pointer</span>
    prev = curr;                 <span class="com">// 3. advance prev</span>
    curr = next;                 <span class="com">// 4. advance curr</span>
  }
  <span class="kw">return</span> prev;
}
<span class="com">// Time: O(n)  Space: O(1)</span>` },

      { type: 'heading', text: 'Template: Find middle (Floyd\'s)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">ListNode</span> <span class="fn">findMiddle</span>(<span class="ty">ListNode</span> head) {
  <span class="ty">ListNode</span> slow = head, fast = head;
  <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
    slow = slow.next;
    fast = fast.next.next;
  }
  <span class="kw">return</span> slow;
}` },

      { type: 'heading', text: 'Template: Merge two sorted lists', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">ListNode</span> <span class="fn">merge</span>(<span class="ty">ListNode</span> a, <span class="ty">ListNode</span> b) {
  <span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>);   <span class="com">// dummy simplifies edge cases</span>
  <span class="ty">ListNode</span> tail = dummy;
  <span class="kw">while</span> (a != <span class="kw">null</span> && b != <span class="kw">null</span>) {
    <span class="kw">if</span> (a.val &lt; b.val) { tail.next = a; a = a.next; }
    <span class="kw">else</span>              { tail.next = b; b = b.next; }
    tail = tail.next;
  }
  tail.next = (a != <span class="kw">null</span>) ? a : b;
  <span class="kw">return</span> dummy.next;
}` },

      { type: 'heading', text: 'Play with a list', level: 2 },
      { type: 'widget', name: 'linked-list-vis', props: {} },

      { type: 'callout', kind: 'tip', html: '<strong>Dummy head node</strong> is your friend. Simplifies edge cases when the answer might modify the head.' }
    ]},

    /* ============== CH 8 — Stacks ============== */
    { id: 'ci-c8', title: 'Stacks: Balanced & Monotonic', icon: '📚', sections: [
      { type: 'heading', text: 'When to reach for a stack', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Matching brackets / nested structure</strong> — LIFO matches nesting',
        '<strong>Expression evaluation</strong> — postfix, infix → postfix',
        '<strong>"Next greater element" type</strong> — monotonic stack',
        '<strong>Undo / history</strong> — recent first',
        '<strong>Iterative DFS</strong> — replace recursion stack'
      ]},

      { type: 'heading', text: 'Template: Valid parentheses', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">boolean</span> <span class="fn">isValid</span>(<span class="ty">String</span> s) {
  <span class="ty">Deque</span>&lt;<span class="ty">Character</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">char</span> c : s.<span class="fn">toCharArray</span>()) {
    <span class="kw">if</span> (c == <span class="str">\'(\'</span>) stack.<span class="fn">push</span>(<span class="str">\')\'</span>);
    <span class="kw">else if</span> (c == <span class="str">\'[\'</span>) stack.<span class="fn">push</span>(<span class="str">\']\'</span>);
    <span class="kw">else if</span> (c == <span class="str">\'{\'</span>) stack.<span class="fn">push</span>(<span class="str">\'}\'</span>);
    <span class="kw">else if</span> (stack.<span class="fn">isEmpty</span>() || stack.<span class="fn">pop</span>() != c) <span class="kw">return false</span>;
  }
  <span class="kw">return</span> stack.<span class="fn">isEmpty</span>();
}` },

      { type: 'heading', text: 'Template: Monotonic stack ("next greater")', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] <span class="fn">nextGreater</span>(<span class="ty">int</span>[] nums) {
  <span class="ty">int</span>[] ans = <span class="kw">new int</span>[nums.length];
  <span class="ty">Deque</span>&lt;<span class="ty">Integer</span>&gt; stack = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> i = nums.length - <span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) {
    <span class="kw">while</span> (!stack.<span class="fn">isEmpty</span>() && stack.<span class="fn">peek</span>() &lt;= nums[i])
      stack.<span class="fn">pop</span>();
    ans[i] = stack.<span class="fn">isEmpty</span>() ? -<span class="num">1</span> : stack.<span class="fn">peek</span>();
    stack.<span class="fn">push</span>(nums[i]);
  }
  <span class="kw">return</span> ans;
}
<span class="com">// Time: O(n) — each element pushed and popped at most once</span>` },

      { type: 'widget', name: 'stack-queue-vis', props: { kind: 'stack' } }
    ]},

    /* ============== CH 9 — Trees / DFS ============== */
    { id: 'ci-c9', title: 'Trees & Recursion (DFS)', icon: '🌲', sections: [
      { type: 'heading', text: 'Recursion is your best friend on trees', level: 1 },
      { type: 'para', html: 'Most tree problems reduce to: "what do I want from each subtree? Combine left and right answers."' },

      { type: 'heading', text: 'Three DFS traversal patterns', level: 2 },
      { type: 'widget', name: 'tree-traversal-vis', props: {} },

      { type: 'heading', text: 'Template: Max depth (postorder)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> <span class="fn">maxDepth</span>(<span class="ty">TreeNode</span> root) {
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="num">0</span>;
  <span class="kw">return</span> <span class="num">1</span> + <span class="ty">Math</span>.<span class="fn">max</span>(<span class="fn">maxDepth</span>(root.left), <span class="fn">maxDepth</span>(root.right));
}` },

      { type: 'heading', text: 'Template: Validate BST', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">boolean</span> <span class="fn">isValidBST</span>(<span class="ty">TreeNode</span> root) {
  <span class="kw">return</span> <span class="fn">check</span>(root, <span class="ty">Long</span>.MIN_VALUE, <span class="ty">Long</span>.MAX_VALUE);
}

<span class="ty">boolean</span> <span class="fn">check</span>(<span class="ty">TreeNode</span> n, <span class="ty">long</span> lo, <span class="ty">long</span> hi) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return true</span>;
  <span class="kw">if</span> (n.val &lt;= lo || n.val &gt;= hi) <span class="kw">return false</span>;
  <span class="kw">return</span> <span class="fn">check</span>(n.left, lo, n.val) && <span class="fn">check</span>(n.right, n.val, hi);
}` },

      { type: 'heading', text: 'Template: Lowest Common Ancestor (BST)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">TreeNode</span> <span class="fn">lca</span>(<span class="ty">TreeNode</span> root, <span class="ty">TreeNode</span> p, <span class="ty">TreeNode</span> q) {
  <span class="kw">if</span> (p.val &lt; root.val && q.val &lt; root.val) <span class="kw">return</span> <span class="fn">lca</span>(root.left, p, q);
  <span class="kw">if</span> (p.val &gt; root.val && q.val &gt; root.val) <span class="kw">return</span> <span class="fn">lca</span>(root.right, p, q);
  <span class="kw">return</span> root;   <span class="com">// p and q on opposite sides — this is LCA</span>
}` },

      { type: 'widget', name: 'bst-vis', props: {} }
    ]},

    /* ============== CH 10 — BFS ============== */
    { id: 'ci-c10', title: 'BFS for Shortest Paths', icon: '🌊', sections: [
      { type: 'heading', text: 'BFS = shortest path in unweighted graphs', level: 1 },
      { type: 'para', html: 'Anytime the problem says "fewest steps", "minimum moves", "shortest path" on a tree or unweighted graph → think BFS.' },

      { type: 'heading', text: 'Template: Level-order traversal', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; <span class="fn">levelOrder</span>(<span class="ty">TreeNode</span> root) {
  <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> result;
  <span class="ty">Queue</span>&lt;<span class="ty">TreeNode</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  q.<span class="fn">offer</span>(root);
  <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="ty">int</span> size = q.<span class="fn">size</span>();             <span class="com">// fix level boundary</span>
    <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; level = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; size; i++) {
      <span class="ty">TreeNode</span> node = q.<span class="fn">poll</span>();
      level.<span class="fn">add</span>(node.val);
      <span class="kw">if</span> (node.left != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.left);
      <span class="kw">if</span> (node.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(node.right);
    }
    result.<span class="fn">add</span>(level);
  }
  <span class="kw">return</span> result;
}` },

      { type: 'heading', text: 'Template: Grid BFS', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[][] DIRS = {{-<span class="num">1</span>,<span class="num">0</span>}, {<span class="num">1</span>,<span class="num">0</span>}, {<span class="num">0</span>,-<span class="num">1</span>}, {<span class="num">0</span>,<span class="num">1</span>}};
<span class="ty">int</span> <span class="fn">shortestPath</span>(<span class="ty">int</span>[][] grid, <span class="ty">int</span>[] start, <span class="ty">int</span>[] end) {
  <span class="ty">int</span> m = grid.length, n = grid[<span class="num">0</span>].length;
  <span class="ty">boolean</span>[][] seen = <span class="kw">new boolean</span>[m][n];
  <span class="ty">Queue</span>&lt;<span class="ty">int</span>[]&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  q.<span class="fn">offer</span>(<span class="kw">new int</span>[]{start[<span class="num">0</span>], start[<span class="num">1</span>], <span class="num">0</span>});
  seen[start[<span class="num">0</span>]][start[<span class="num">1</span>]] = <span class="kw">true</span>;

  <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="ty">int</span>[] cur = q.<span class="fn">poll</span>();
    <span class="kw">int</span> r = cur[<span class="num">0</span>], c = cur[<span class="num">1</span>], d = cur[<span class="num">2</span>];
    <span class="kw">if</span> (r == end[<span class="num">0</span>] && c == end[<span class="num">1</span>]) <span class="kw">return</span> d;
    <span class="kw">for</span> (<span class="ty">int</span>[] dir : DIRS) {
      <span class="ty">int</span> nr = r + dir[<span class="num">0</span>], nc = c + dir[<span class="num">1</span>];
      <span class="kw">if</span> (nr&gt;=<span class="num">0</span> && nr&lt;m && nc&gt;=<span class="num">0</span> && nc&lt;n && !seen[nr][nc] && grid[nr][nc] != <span class="num">1</span>) {
        seen[nr][nc] = <span class="kw">true</span>;
        q.<span class="fn">offer</span>(<span class="kw">new int</span>[]{nr, nc, d + <span class="num">1</span>});
      }
    }
  }
  <span class="kw">return</span> -<span class="num">1</span>;
}` },

      { type: 'callout', kind: 'tip', html: 'The <code>size = q.size()</code> trick lets you process one level at a time — essential for "minimum steps" answers.' }
    ]},

    /* ============== CH 11 — Heap ============== */
    { id: 'ci-c11', title: 'Heaps / Priority Queue', icon: '🏆', sections: [
      { type: 'heading', text: 'For top-K and "best so far"', level: 1 },
      { type: 'para', html: 'A heap is a binary tree that always gives you the min (or max) in O(log n). PriorityQueue in Java implements one.' },

      { type: 'heading', text: 'Template: K largest elements', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] <span class="fn">topK</span>(<span class="ty">int</span>[] nums, <span class="ty">int</span> k) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> n : nums) {
    pq.<span class="fn">offer</span>(n);
    <span class="kw">if</span> (pq.<span class="fn">size</span>() &gt; k) pq.<span class="fn">poll</span>();   <span class="com">// drop the smallest</span>
  }
  <span class="ty">int</span>[] ans = <span class="kw">new int</span>[k];
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) ans[i] = pq.<span class="fn">poll</span>();
  <span class="kw">return</span> ans;
}
<span class="com">// Time: O(n log k) — much faster than full sort O(n log n) when k &lt;&lt; n</span>` },

      { type: 'heading', text: 'Template: Merge K sorted lists', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">ListNode</span> <span class="fn">mergeKLists</span>(<span class="ty">ListNode</span>[] lists) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">ListNode</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;((a, b) -&gt; a.val - b.val);
  <span class="kw">for</span> (<span class="ty">ListNode</span> head : lists) <span class="kw">if</span> (head != <span class="kw">null</span>) pq.<span class="fn">offer</span>(head);

  <span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>), tail = dummy;
  <span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) {
    <span class="ty">ListNode</span> min = pq.<span class="fn">poll</span>();
    tail.next = min; tail = min;
    <span class="kw">if</span> (min.next != <span class="kw">null</span>) pq.<span class="fn">offer</span>(min.next);
  }
  <span class="kw">return</span> dummy.next;
}
<span class="com">// Time: O(N log K) where N is total nodes, K is number of lists</span>` },

      { type: 'callout', kind: 'warn', html: 'Java\'s <code>PriorityQueue</code> is a MIN-heap by default. For a max-heap: <code>new PriorityQueue&lt;&gt;(Collections.reverseOrder())</code>.' }
    ]},

    /* ============== CH 12 — Graphs ============== */
    { id: 'ci-c12', title: 'Graph Problems', icon: '🕸️', sections: [
      { type: 'heading', text: 'Common graph patterns', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Number of islands</strong> → DFS / BFS / union-find',
        '<strong>Shortest path (unweighted)</strong> → BFS',
        '<strong>Shortest path (positive weights)</strong> → Dijkstra (priority queue)',
        '<strong>Course schedule / build order</strong> → topological sort',
        '<strong>Detect cycle</strong> → DFS with 3-color marking, or union-find',
        '<strong>Connected components</strong> → DFS / BFS / union-find'
      ]},

      { type: 'heading', text: 'Try BFS / DFS', level: 2 },
      { type: 'widget', name: 'graph-vis', props: {} },

      { type: 'heading', text: 'Template: Number of islands', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> <span class="fn">numIslands</span>(<span class="ty">char</span>[][] grid) {
  <span class="ty">int</span> count = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; grid.length; r++)
    <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; grid[<span class="num">0</span>].length; c++)
      <span class="kw">if</span> (grid[r][c] == <span class="str">\'1\'</span>) { <span class="fn">dfs</span>(grid, r, c); count++; }
  <span class="kw">return</span> count;
}

<span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">char</span>[][] g, <span class="ty">int</span> r, <span class="ty">int</span> c) {
  <span class="kw">if</span> (r&lt;<span class="num">0</span>||c&lt;<span class="num">0</span>||r&gt;=g.length||c&gt;=g[<span class="num">0</span>].length||g[r][c]!=<span class="str">\'1\'</span>) <span class="kw">return</span>;
  g[r][c] = <span class="str">\'0\'</span>;   <span class="com">// mark visited in-place</span>
  <span class="fn">dfs</span>(g, r+<span class="num">1</span>, c); <span class="fn">dfs</span>(g, r-<span class="num">1</span>, c);
  <span class="fn">dfs</span>(g, r, c+<span class="num">1</span>); <span class="fn">dfs</span>(g, r, c-<span class="num">1</span>);
}` },

      { type: 'heading', text: 'Template: Topological sort (Kahn\'s)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[] <span class="fn">topoSort</span>(<span class="ty">int</span> n, <span class="ty">int</span>[][] edges) {
  <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; adj = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) adj.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;());
  <span class="ty">int</span>[] inDeg = <span class="kw">new int</span>[n];
  <span class="kw">for</span> (<span class="ty">int</span>[] e : edges) { adj.<span class="fn">get</span>(e[<span class="num">0</span>]).<span class="fn">add</span>(e[<span class="num">1</span>]); inDeg[e[<span class="num">1</span>]]++; }

  <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; n; i++) <span class="kw">if</span> (inDeg[i] == <span class="num">0</span>) q.<span class="fn">offer</span>(i);

  <span class="ty">int</span>[] order = <span class="kw">new int</span>[n];
  <span class="ty">int</span> idx = <span class="num">0</span>;
  <span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="ty">int</span> u = q.<span class="fn">poll</span>();
    order[idx++] = u;
    <span class="kw">for</span> (<span class="ty">int</span> v : adj.<span class="fn">get</span>(u))
      <span class="kw">if</span> (--inDeg[v] == <span class="num">0</span>) q.<span class="fn">offer</span>(v);
  }
  <span class="kw">return</span> idx == n ? order : <span class="kw">new int</span>[<span class="num">0</span>];   <span class="com">// empty → cycle exists</span>
}` }
    ]},

    /* ============== CH 13 — Backtracking ============== */
    { id: 'ci-c13', title: 'Backtracking Recipe', icon: '↩️', sections: [
      { type: 'heading', text: 'Generate all possibilities — with pruning', level: 1 },
      { type: 'para', html: 'Backtracking = recursion that <em>tries</em> a choice, recurses, then <em>undoes</em> the choice. Used for: subsets, permutations, combinations, n-queens, sudoku.' },

      { type: 'heading', text: 'The universal template', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">backtrack</span>(state, choices, result) {
  <span class="kw">if</span> (<span class="fn">isComplete</span>(state)) {
    result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span>(state));
    <span class="kw">return</span>;
  }
  <span class="kw">for</span> (choice : choices) {
    <span class="kw">if</span> (<span class="fn">isValid</span>(choice, state)) {
      <span class="fn">make</span>(state, choice);
      <span class="fn">backtrack</span>(state, choices, result);
      <span class="fn">unmake</span>(state, choice);   <span class="com">// crucial — restore for next branch</span>
    }
  }
}` },

      { type: 'heading', text: 'Template: Subsets', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; <span class="fn">subsets</span>(<span class="ty">int</span>[] nums) {
  <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; result = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="fn">helper</span>(nums, <span class="num">0</span>, <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(), result);
  <span class="kw">return</span> result;
}

<span class="kw">void</span> <span class="fn">helper</span>(<span class="ty">int</span>[] nums, <span class="ty">int</span> start, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; res) {
  res.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur));
  <span class="kw">for</span> (<span class="ty">int</span> i = start; i &lt; nums.length; i++) {
    cur.<span class="fn">add</span>(nums[i]);
    <span class="fn">helper</span>(nums, i + <span class="num">1</span>, cur, res);
    cur.<span class="fn">remove</span>(cur.<span class="fn">size</span>() - <span class="num">1</span>);   <span class="com">// undo</span>
  }
}` },

      { type: 'heading', text: 'Template: Permutations', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; <span class="fn">permute</span>(<span class="ty">int</span>[] nums) {
  <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; res = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="fn">helper</span>(nums, <span class="kw">new boolean</span>[nums.length], <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(), res);
  <span class="kw">return</span> res;
}

<span class="kw">void</span> <span class="fn">helper</span>(<span class="ty">int</span>[] nums, <span class="ty">boolean</span>[] used, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; res) {
  <span class="kw">if</span> (cur.<span class="fn">size</span>() == nums.length) {
    res.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur));
    <span class="kw">return</span>;
  }
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; nums.length; i++) {
    <span class="kw">if</span> (used[i]) <span class="kw">continue</span>;
    used[i] = <span class="kw">true</span>; cur.<span class="fn">add</span>(nums[i]);
    <span class="fn">helper</span>(nums, used, cur, res);
    cur.<span class="fn">remove</span>(cur.<span class="fn">size</span>() - <span class="num">1</span>); used[i] = <span class="kw">false</span>;
  }
}` },
      { type: 'callout', kind: 'warn', html: '<strong>Watch your complexity</strong>: subsets are O(2ⁿ·n), permutations are O(n!·n). Only feasible for small n.' }
    ]},

    /* ============== CH 14 — DP ============== */
    { id: 'ci-c14', title: 'Dynamic Programming Patterns', icon: '🧠', sections: [
      { type: 'heading', text: 'Two signals = it\'s DP', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Overlapping subproblems</strong> — the same smaller problem appears multiple times',
        '<strong>Optimal substructure</strong> — the optimal answer is built from optimal smaller answers'
      ]},
      { type: 'callout', kind: 'tip', html: 'When you start writing a recursive solution and notice it would re-solve the same subproblem → you have DP.' },

      { type: 'heading', text: 'Top-down (memoization)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; memo = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();

<span class="ty">int</span> <span class="fn">fib</span>(<span class="ty">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
  <span class="kw">if</span> (memo.<span class="fn">containsKey</span>(n)) <span class="kw">return</span> memo.<span class="fn">get</span>(n);
  <span class="ty">int</span> result = <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>);
  memo.<span class="fn">put</span>(n, result);
  <span class="kw">return</span> result;
}` },

      { type: 'heading', text: 'Bottom-up (tabulation)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> <span class="fn">fib</span>(<span class="ty">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
  <span class="ty">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i &lt;= n; i++) {
    <span class="ty">int</span> c = a + b;
    a = b; b = c;
  }
  <span class="kw">return</span> b;
}` },

      { type: 'heading', text: 'Classic DP recurrences', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Climbing stairs (1 or 2 steps)</span>
ways(n) = ways(n-1) + ways(n-2)

<span class="com">// House robber (can\'t rob adjacent)</span>
dp[i] = max(dp[i-1], dp[i-2] + nums[i])

<span class="com">// Coin change (min coins to make amount)</span>
dp[v] = 1 + min(dp[v - c]) for each coin c

<span class="com">// Longest Common Subsequence</span>
dp[i][j] = dp[i-1][j-1] + 1            if s[i]==t[j]
        = max(dp[i-1][j], dp[i][j-1]) otherwise

<span class="com">// 0/1 Knapsack</span>
dp[i][w] = max(
   dp[i-1][w],                          <span class="com">// skip item i</span>
   dp[i-1][w - wt[i]] + val[i]          <span class="com">// take item i</span>
)` },

      { type: 'heading', text: 'How to derive the recurrence', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        'What is the state? (often: index, remaining capacity, current position)',
        'What are the choices at each state?',
        'What\'s the base case?',
        'How do choices combine into the answer?'
      ]},
      { type: 'callout', kind: 'tip', html: 'Hot tip: <strong>write the top-down version first</strong>. It\'s usually easier to think about. Convert to bottom-up if you need to save space.' }
    ]},

    /* ============== CH 15 — Greedy / Math / Bits ============== */
    { id: 'ci-c15', title: 'Greedy · Math · Bit Tricks', icon: '🎲', sections: [
      { type: 'heading', text: 'When greedy works', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Interval problems</strong>: sort by end time, pick earliest-finishing',
        '<strong>Activity selection / meeting rooms</strong>: same as above',
        '<strong>Gas station / circular tour</strong>: track running deficit',
        '<strong>Jump game</strong>: track max-reachable index'
      ]},

      { type: 'heading', text: 'Template: Merge intervals', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[][] <span class="fn">merge</span>(<span class="ty">int</span>[][] intervals) {
  <span class="ty">Arrays</span>.<span class="fn">sort</span>(intervals, (a, b) -&gt; a[<span class="num">0</span>] - b[<span class="num">0</span>]);
  <span class="ty">List</span>&lt;<span class="ty">int</span>[]&gt; out = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">int</span>[] iv : intervals) {
    <span class="kw">if</span> (!out.<span class="fn">isEmpty</span>() && iv[<span class="num">0</span>] &lt;= out.<span class="fn">get</span>(out.<span class="fn">size</span>()-<span class="num">1</span>)[<span class="num">1</span>]) {
      out.<span class="fn">get</span>(out.<span class="fn">size</span>()-<span class="num">1</span>)[<span class="num">1</span>] = <span class="ty">Math</span>.<span class="fn">max</span>(out.<span class="fn">get</span>(out.<span class="fn">size</span>()-<span class="num">1</span>)[<span class="num">1</span>], iv[<span class="num">1</span>]);
    } <span class="kw">else</span> {
      out.<span class="fn">add</span>(iv);
    }
  }
  <span class="kw">return</span> out.<span class="fn">toArray</span>(<span class="kw">new int</span>[<span class="num">0</span>][]);
}` },

      { type: 'heading', text: 'Bit manipulation interview tricks', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Common one-liners</span>
x & <span class="num">1</span>            <span class="com">// is x odd?</span>
x &gt;&gt; <span class="num">1</span>           <span class="com">// x / 2</span>
x &lt;&lt; <span class="num">1</span>           <span class="com">// x * 2</span>
x ^ y           <span class="com">// XOR — 0 if equal</span>
x & (x - <span class="num">1</span>)     <span class="com">// clears lowest set bit; == 0 iff power of 2</span>

<span class="com">// Find the lone number (everyone else appears twice)</span>
<span class="ty">int</span> single = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> n : nums) single ^= n;

<span class="com">// Count set bits</span>
<span class="ty">int</span> count = <span class="ty">Integer</span>.<span class="fn">bitCount</span>(x);` },

      { type: 'widget', name: 'binary-converter', props: { bits: 8 } }
    ]},

    /* ============== CH 16 — Practice ============== */
    { id: 'ci-c16', title: 'Talking + Studying', icon: '🎤', sections: [
      { type: 'heading', text: 'How to narrate while coding', level: 1 },
      { type: 'para', html: 'Imagine your interviewer is on a noisy plane and can\'t see the screen. Your words alone should let them follow.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Good narration:</span>
"I\'ll use a HashMap to remember each number I\'ve seen with its index.
 For each new number, I check if its complement (target - num) is in the map.
 If yes, I return those two indices. If no, I add the current number to the map.
 This is O(n) time and O(n) space."

<span class="com">// Weak narration:</span>
"Okay, hmm, let me think... uhh... yeah I\'ll do it like this..."` },

      { type: 'heading', text: 'A study plan that actually works', level: 2 },
      { type: 'image', alt: 'study plan', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Pattern-based study plan</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="100" height="50" rx="8" fill="#e53935"/>
    <text x="70" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">Pick pattern</text>
    <text x="70" y="90" text-anchor="middle" fill="white" font-size="10">(e.g., sliding window)</text>

    <text x="135" y="78" font-size="20">→</text>

    <rect x="155" y="50" width="100" height="50" rx="8" fill="#7c4dff"/>
    <text x="205" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">5-10 problems</text>
    <text x="205" y="90" text-anchor="middle" fill="white" font-size="10">in that pattern</text>

    <text x="270" y="78" font-size="20">→</text>

    <rect x="290" y="50" width="100" height="50" rx="8" fill="#1cb0f6"/>
    <text x="340" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">Write trick</text>
    <text x="340" y="90" text-anchor="middle" fill="white" font-size="10">in own words</text>

    <text x="405" y="78" font-size="20">→</text>

    <rect x="425" y="50" width="100" height="50" rx="8" fill="#58cc02"/>
    <text x="475" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">Next pattern</text>
    <text x="475" y="90" text-anchor="middle" fill="white" font-size="10">Loop until done</text>

    <text x="300" y="140" text-anchor="middle" font-size="13" fill="#666">Then: mixed practice to test pattern recognition</text>
    <text x="300" y="165" text-anchor="middle" font-size="13" fill="#666">Then: timed mock interviews</text>

    <text x="300" y="210" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">Quality &gt;&gt; quantity. 150 well-chosen problems beats 500 random ones.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Highly recommended resources', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>NeetCode 150</strong> (neetcode.io) — curated, organized by pattern, with video solutions',
        '<strong>Blind 75</strong> — classic 75-problem starter list',
        '<strong>LeetCode</strong> — for volume; filter by company and pattern',
        '<strong>Cracking the Coding Interview</strong> — old but still useful for fundamentals',
        '<strong>Pramp / Interviewing.io</strong> — peer mock interviews'
      ]},

      { type: 'callout', kind: 'success', html: '🎯 Pattern recognition + a clear framework + smooth communication = offers. Practice each piece deliberately and you\'ll get there.' }
    ]}
  ]
});

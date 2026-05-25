LEARN('leetcode-patterns', {
  intro: 'The 15 patterns that solve roughly 80% of coding-interview problems. Recognize the shape, apply the template, ship the solution.',
  chapters: [

    /* ============ Chapter 1 — Intro ============ */
    {
      id: 'lcp-c1',
      title: 'Why patterns?',
      icon: '🧩',
      sections: [
        { type: 'heading', text: 'Patterns beat problem-by-problem memorization', level: 1 },
        { type: 'para', html: 'There are tens of thousands of coding-interview questions. There are roughly <strong>fifteen patterns</strong> they all draw from. Recognize the pattern, apply the template, adapt to the variation — that\'s the whole game.' },
        { type: 'para', html: 'This course is organized one pattern per chapter. Each chapter follows the same shape: when to use it, the template, and 2 or 3 worked example problems with complexity analysis.' },

        { type: 'heading', text: 'How to recognize a pattern', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Sorted array</strong> + need a pair/triplet → Two Pointers',
          '<strong>Contiguous subarray</strong> + max/min/sum → Sliding Window',
          '<strong>Linked list + cycle / middle</strong> → Fast & Slow Pointers',
          '<strong>Overlapping ranges</strong> → Merge Intervals',
          '<strong>Values in [1..n]</strong> + missing/duplicate → Cyclic Sort',
          '<strong>"Top K" / "Kth"</strong> anything → Heap',
          '<strong>Level-order / BFS-style</strong> on tree → Tree BFS',
          '<strong>All paths / decisions tree</strong> → DFS or Backtracking',
          '<strong>"Order with prerequisites"</strong> → Topological Sort',
          '<strong>"Min/Max ways" / "Count of ways"</strong> → DP'
        ] },

        { type: 'heading', text: 'The 15 patterns at a glance', level: 2 },
        { type: 'image', alt: 'Patterns map',
          svg: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fff7ed;stroke:#ea580c;stroke-width:2}.t{fill:#7c2d12;font-family:Inter,sans-serif;font-size:13px;font-weight:600;text-anchor:middle}.h{fill:#1e293b;font-family:Inter,sans-serif;font-size:22px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="400" y="28" class="h">15 Leetcode Patterns</text>
<rect x="20"  y="55" width="150" height="55" rx="10" class="b"/><text x="95" y="88" class="t">Two Pointers</text>
<rect x="180" y="55" width="150" height="55" rx="10" class="b"/><text x="255" y="80" class="t">Sliding</text><text x="255" y="98" class="t">Window</text>
<rect x="340" y="55" width="150" height="55" rx="10" class="b"/><text x="415" y="80" class="t">Fast &amp; Slow</text><text x="415" y="98" class="t">Pointers</text>
<rect x="500" y="55" width="150" height="55" rx="10" class="b"/><text x="575" y="80" class="t">Merge</text><text x="575" y="98" class="t">Intervals</text>
<rect x="660" y="55" width="130" height="55" rx="10" class="b"/><text x="725" y="80" class="t">Cyclic</text><text x="725" y="98" class="t">Sort</text>

<rect x="20"  y="130" width="150" height="55" rx="10" class="b"/><text x="95" y="155" class="t">LL Reversal</text><text x="95" y="173" class="t">in-place</text>
<rect x="180" y="130" width="150" height="55" rx="10" class="b"/><text x="255" y="163" class="t">Tree BFS</text>
<rect x="340" y="130" width="150" height="55" rx="10" class="b"/><text x="415" y="163" class="t">Tree DFS</text>
<rect x="500" y="130" width="150" height="55" rx="10" class="b"/><text x="575" y="163" class="t">Two Heaps</text>
<rect x="660" y="130" width="130" height="55" rx="10" class="b"/><text x="725" y="155" class="t">Subsets /</text><text x="725" y="173" class="t">Backtrack</text>

<rect x="20"  y="205" width="150" height="55" rx="10" class="b"/><text x="95" y="230" class="t">Modified</text><text x="95" y="248" class="t">Binary Search</text>
<rect x="180" y="205" width="150" height="55" rx="10" class="b"/><text x="255" y="238" class="t">Top K (Heap)</text>
<rect x="340" y="205" width="150" height="55" rx="10" class="b"/><text x="415" y="238" class="t">K-way Merge</text>
<rect x="500" y="205" width="150" height="55" rx="10" class="b"/><text x="575" y="230" class="t">Topological</text><text x="575" y="248" class="t">Sort</text>
<rect x="660" y="205" width="130" height="55" rx="10" class="b"/><text x="725" y="238" class="t">DP</text>

<text x="400" y="305" class="t" style="font-size:14px">Recognize the shape → grab the template → adapt</text>
</svg>` },

        { type: 'callout', kind: 'tip', html: 'After this course, when you see a new problem, your first thought should be: <em>"Which pattern is this?"</em> The rest follows from muscle memory.' }
      ]
    },

    /* ============ Chapter 2 — Two Pointers ============ */
    {
      id: 'lcp-c2',
      title: 'Two Pointers',
      icon: '👉',
      sections: [
        { type: 'heading', text: 'Two Pointers', level: 1 },
        { type: 'para', html: 'Two pointers walk through an array (or string, or linked list) at the same time. Done right, they replace a nested loop — turning <strong>O(n²)</strong> into <strong>O(n)</strong>.' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Input is <strong>sorted</strong> (or can be sorted)',
          'You\'re looking for a <strong>pair, triplet, or subset</strong> satisfying a property',
          'You need to do something <strong>in place</strong> (no extra array)',
          'Strings: palindromes, reversing, two-pointer compare'
        ] },

        { type: 'heading', text: 'Visualizing the squeeze', level: 2 },
        { type: 'image', alt: 'Two-pointer squeeze on a sorted array',
          svg: `<svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg">
<defs><style>.c{fill:#e0e7ff;stroke:#3730a3;stroke-width:2}.cl{fill:#fde68a;stroke:#b45309;stroke-width:2}.cr{fill:#fecaca;stroke:#b91c1c;stroke-width:2}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}.l{fill:#0f172a;font-family:Inter,sans-serif;font-size:13px;text-anchor:middle}</style></defs>
<text x="360" y="25" class="t" style="font-size:18px">Two Pointers: target = 9</text>
<g><rect x="40"  y="50" width="60" height="60" class="cl"/><text x="70"  y="88" class="t">2</text></g>
<g><rect x="110" y="50" width="60" height="60" class="c"/> <text x="140" y="88" class="t">4</text></g>
<g><rect x="180" y="50" width="60" height="60" class="c"/> <text x="210" y="88" class="t">5</text></g>
<g><rect x="250" y="50" width="60" height="60" class="c"/> <text x="280" y="88" class="t">7</text></g>
<g><rect x="320" y="50" width="60" height="60" class="cr"/><text x="350" y="88" class="t">8</text></g>
<text x="70"  y="135" class="l">left</text>
<text x="350" y="135" class="l">right</text>
<text x="70"  y="155" class="l">↑ move →</text>
<text x="350" y="155" class="l">← move ↑</text>
<text x="210" y="160" class="l">sum = 2 + 8 = 10 > 9 → right--</text>
</svg>` },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> left = <span class="num">0</span>, right = arr.length - <span class="num">1</span>;
<span class="kw">while</span> (left < right) {
    <span class="kw">int</span> sum = arr[left] + arr[right];
    <span class="kw">if</span> (sum == target) <span class="kw">return new int</span>[]{ left, right };
    <span class="kw">if</span> (sum < target) left++;        <span class="com">// need bigger</span>
    <span class="kw">else</span>              right--;       <span class="com">// need smaller</span>
}` },

        { type: 'widget', name: 'array-vis', props: { values: [2, 4, 5, 7, 8, 11, 15] } },

        { type: 'heading', text: 'Example 1 — Two Sum II (sorted)', level: 2 },
        { type: 'para', html: '<strong>LC 167.</strong> Given a 1-indexed sorted array, return the 1-indexed pair that sums to target.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] <span class="fn">twoSum</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target) {
    <span class="kw">int</span> l = <span class="num">0</span>, r = nums.length - <span class="num">1</span>;
    <span class="kw">while</span> (l < r) {
        <span class="kw">int</span> s = nums[l] + nums[r];
        <span class="kw">if</span> (s == target) <span class="kw">return new int</span>[]{ l + <span class="num">1</span>, r + <span class="num">1</span> };
        <span class="kw">if</span> (s < target) l++;
        <span class="kw">else</span>            r--;
    }
    <span class="kw">return new int</span>[]{ -<span class="num">1</span>, -<span class="num">1</span> };
}` },
        { type: 'para', html: 'Time <strong>O(n)</strong>, space <strong>O(1)</strong>.' },

        { type: 'heading', text: 'Example 2 — 3Sum', level: 2 },
        { type: 'para', html: '<strong>LC 15.</strong> Find all unique triplets summing to 0. Sort first, fix an anchor, two-pointer the rest. Skip duplicates carefully.' },
        { type: 'code', lang: 'java', code: `Arrays.<span class="fn">sort</span>(nums);
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < nums.length - <span class="num">2</span>; i++) {
    <span class="kw">if</span> (i > <span class="num">0</span> && nums[i] == nums[i-<span class="num">1</span>]) <span class="kw">continue</span>;
    <span class="kw">int</span> l = i+<span class="num">1</span>, r = nums.length-<span class="num">1</span>;
    <span class="kw">while</span> (l < r) {
        <span class="kw">int</span> s = nums[i] + nums[l] + nums[r];
        <span class="kw">if</span> (s == <span class="num">0</span>) {
            result.<span class="fn">add</span>(List.<span class="fn">of</span>(nums[i], nums[l], nums[r]));
            <span class="kw">while</span> (l<r && nums[l]==nums[l+<span class="num">1</span>]) l++;
            <span class="kw">while</span> (l<r && nums[r]==nums[r-<span class="num">1</span>]) r--;
            l++; r--;
        } <span class="kw">else if</span> (s < <span class="num">0</span>) l++;
        <span class="kw">else</span> r--;
    }
}` },
        { type: 'para', html: 'Time <strong>O(n²)</strong>, space O(log n) for the sort.' },

        { type: 'heading', text: 'Example 3 — Remove Duplicates In-Place', level: 2 },
        { type: 'para', html: '<strong>LC 26.</strong> Use a <em>slow</em> write pointer and a <em>fast</em> read pointer. Fast scans; slow only advances on a new value.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> slow = <span class="num">1</span>;
<span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">1</span>; fast < n; fast++) {
    <span class="kw">if</span> (nums[fast] != nums[fast - <span class="num">1</span>]) nums[slow++] = nums[fast];
}
<span class="kw">return</span> slow;` },

        { type: 'callout', kind: 'tip', html: '<strong>Squeeze vs same-direction:</strong> "Two pointers" includes both styles — pointers converging from opposite ends, AND two pointers moving the same way at different speeds.' }
      ]
    },

    /* ============ Chapter 3 — Sliding Window ============ */
    {
      id: 'lcp-c3',
      title: 'Sliding Window',
      icon: '🪟',
      sections: [
        { type: 'heading', text: 'Sliding Window', level: 1 },
        { type: 'para', html: 'Slide a contiguous "window" over the array or string. Maintain a running aggregate (sum, count, frequency map) so each step is O(1) instead of O(k).' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You\'re looking at <strong>contiguous</strong> subarrays / substrings',
          'You need a max/min/sum/count over every window',
          'The window has a fixed size, OR a condition determines its size',
          'Brute force is O(n·k) or O(n²); you suspect O(n) is possible'
        ] },

        { type: 'heading', text: 'Fixed-size window', level: 2 },
        { type: 'image', alt: 'Fixed sliding window over an array',
          svg: `<svg viewBox="0 0 760 180" xmlns="http://www.w3.org/2000/svg">
<defs><style>.c{fill:#fef3c7;stroke:#92400e;stroke-width:1.5}.cw{fill:#bbf7d0;stroke:#15803d;stroke-width:2.5}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}.l{fill:#475569;font-family:Inter,sans-serif;font-size:12px;text-anchor:middle}</style></defs>
<text x="380" y="25" class="t">Window size k = 3 sliding right</text>
<g>
<rect x="40"  y="50" width="55" height="55" class="cw"/><text x="67"  y="85" class="t">2</text>
<rect x="100" y="50" width="55" height="55" class="cw"/><text x="127" y="85" class="t">1</text>
<rect x="160" y="50" width="55" height="55" class="cw"/><text x="187" y="85" class="t">5</text>
<rect x="220" y="50" width="55" height="55" class="c"/> <text x="247" y="85" class="t">1</text>
<rect x="280" y="50" width="55" height="55" class="c"/> <text x="307" y="85" class="t">3</text>
<rect x="340" y="50" width="55" height="55" class="c"/> <text x="367" y="85" class="t">2</text>
<text x="187" y="130" class="l">sum = 8</text>
</g>
<g>
<rect x="430" y="50" width="55" height="55" class="c"/> <text x="457" y="85" class="t">2</text>
<rect x="490" y="50" width="55" height="55" class="cw"/><text x="517" y="85" class="t">1</text>
<rect x="550" y="50" width="55" height="55" class="cw"/><text x="577" y="85" class="t">5</text>
<rect x="610" y="50" width="55" height="55" class="cw"/><text x="637" y="85" class="t">1</text>
<rect x="670" y="50" width="55" height="55" class="c"/> <text x="697" y="85" class="t">3</text>
<text x="577" y="130" class="l">sum = 7</text>
</g>
</svg>` },

        { type: 'widget', name: 'sliding-window-vis', props: { values: [2, 1, 5, 1, 3, 2, 8, 4, 6], windowSize: 3 } },

        { type: 'heading', text: 'Template — fixed size', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> windowSum = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < k; i++) windowSum += arr[i];
<span class="kw">int</span> best = windowSum;
<span class="kw">for</span> (<span class="kw">int</span> i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];      <span class="com">// in + out</span>
    best = Math.<span class="fn">max</span>(best, windowSum);
}
<span class="kw">return</span> best;` },

        { type: 'heading', text: 'Template — dynamic size', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> left = <span class="num">0</span>, best = <span class="num">0</span>;
Map<<span class="ty">Character</span>, <span class="ty">Integer</span>> count = <span class="kw">new</span> <span class="ty">HashMap</span><>();

<span class="kw">for</span> (<span class="kw">int</span> right = <span class="num">0</span>; right < s.length(); right++) {
    <span class="kw">char</span> c = s.<span class="fn">charAt</span>(right);
    count.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);

    <span class="kw">while</span> (<span class="com">/* window invalid */</span> count.<span class="fn">get</span>(c) > <span class="num">1</span>) {
        <span class="kw">char</span> lc = s.<span class="fn">charAt</span>(left++);
        count.<span class="fn">merge</span>(lc, -<span class="num">1</span>, <span class="ty">Integer</span>::sum);
    }
    best = Math.<span class="fn">max</span>(best, right - left + <span class="num">1</span>);
}` },

        { type: 'heading', text: 'Example — Longest Substring Without Repeating', level: 2 },
        { type: 'para', html: '<strong>LC 3.</strong> The template above IS the solution. Right pointer advances each step. Left pointer only moves to restore the "no duplicates" invariant. Both walk at most n times — amortized <strong>O(n)</strong>.' },

        { type: 'heading', text: 'Example — Smallest Subarray with Sum ≥ S', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> left = <span class="num">0</span>, sum = <span class="num">0</span>, best = <span class="ty">Integer</span>.MAX_VALUE;
<span class="kw">for</span> (<span class="kw">int</span> right = <span class="num">0</span>; right < n; right++) {
    sum += arr[right];
    <span class="kw">while</span> (sum >= S) {
        best = Math.<span class="fn">min</span>(best, right - left + <span class="num">1</span>);
        sum -= arr[left++];
    }
}
<span class="kw">return</span> best == <span class="ty">Integer</span>.MAX_VALUE ? <span class="num">0</span> : best;` },

        { type: 'callout', kind: 'info', html: 'In dynamic sliding windows, the inner <code>while</code> looks scary (nested loop!) but each element enters and leaves at most once — total work is still <strong>O(n)</strong>.' }
      ]
    },

    /* ============ Chapter 4 — Fast & Slow Pointers ============ */
    {
      id: 'lcp-c4',
      title: 'Fast & Slow Pointers',
      icon: '🐢',
      sections: [
        { type: 'heading', text: 'Fast & Slow Pointers (Tortoise and Hare)', level: 1 },
        { type: 'para', html: 'Two pointers traverse the same structure. One moves <strong>one step</strong>; the other moves <strong>two steps</strong>. In a cycle, they always eventually meet.' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Linked list <strong>cycle</strong> detection or cycle entry',
          '<strong>Middle</strong> of a linked list in one pass',
          'Sequence with a deterministic next-function (Happy Number)',
          'Palindrome linked list (find middle + reverse half)'
        ] },

        { type: 'heading', text: 'Why it works', level: 2 },
        { type: 'image', alt: 'Tortoise and hare meeting in a cycle',
          svg: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
<defs><style>.n{fill:#e0f2fe;stroke:#0369a1;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:14px;text-anchor:middle}.arr{fill:none;stroke:#0369a1;stroke-width:2;marker-end:url(#a)}.s{fill:#86efac;stroke:#15803d}.f{fill:#fca5a5;stroke:#b91c1c}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0369a1"/></marker></defs>
<circle cx="60"  cy="100" r="22" class="n"/><text x="60"  y="105" class="t">1</text>
<circle cx="140" cy="100" r="22" class="n"/><text x="140" y="105" class="t">2</text>
<circle cx="220" cy="100" r="22" class="n"/><text x="220" y="105" class="t">3</text>
<circle cx="320" cy="60"  r="22" class="n s"/><text x="320" y="65" class="t">4</text>
<circle cx="400" cy="100" r="22" class="n"/><text x="400" y="105" class="t">5</text>
<circle cx="320" cy="140" r="22" class="n f"/><text x="320" y="145" class="t">6</text>
<line x1="82"  y1="100" x2="118" y2="100" class="arr"/>
<line x1="162" y1="100" x2="198" y2="100" class="arr"/>
<line x1="240" y1="92"  x2="300" y2="70"  class="arr"/>
<line x1="338" y1="78"  x2="383" y2="92"  class="arr"/>
<line x1="395" y1="122" x2="340" y2="138" class="arr"/>
<line x1="298" y1="140" x2="245" y2="115" class="arr"/>
<text x="320" y="34"  class="t" style="fill:#15803d">slow ▸ here</text>
<text x="320" y="180" class="t" style="fill:#b91c1c">fast ▸ here</text>
<text x="300" y="200" class="t" style="font-size:12px;fill:#475569">fast gains 1 step per iter → eventually catches slow</text>
</svg>` },

        { type: 'heading', text: 'Templates', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Has cycle?</span>
<span class="kw">boolean</span> <span class="fn">hasCycle</span>(<span class="ty">ListNode</span> head) {
    <span class="ty">ListNode</span> slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
    }
    <span class="kw">return false</span>;
}

<span class="com">// Middle of linked list</span>
<span class="ty">ListNode</span> <span class="fn">middle</span>(<span class="ty">ListNode</span> head) {
    <span class="ty">ListNode</span> s = head, f = head;
    <span class="kw">while</span> (f != <span class="kw">null</span> && f.next != <span class="kw">null</span>) {
        s = s.next;
        f = f.next.next;
    }
    <span class="kw">return</span> s;
}` },

        { type: 'heading', text: 'Example — Happy Number', level: 2 },
        { type: 'para', html: '<strong>LC 202.</strong> Replace n with the sum of squares of its digits, repeat. n is "happy" iff this terminates at 1. Otherwise it cycles. Same trick:' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> <span class="fn">squareDigits</span>(<span class="kw">int</span> n) {
    <span class="kw">int</span> s = <span class="num">0</span>;
    <span class="kw">while</span> (n > <span class="num">0</span>) { <span class="kw">int</span> d = n % <span class="num">10</span>; s += d * d; n /= <span class="num">10</span>; }
    <span class="kw">return</span> s;
}

<span class="kw">boolean</span> <span class="fn">isHappy</span>(<span class="kw">int</span> n) {
    <span class="kw">int</span> slow = n, fast = <span class="fn">squareDigits</span>(n);
    <span class="kw">while</span> (fast != <span class="num">1</span> && slow != fast) {
        slow = <span class="fn">squareDigits</span>(slow);
        fast = <span class="fn">squareDigits</span>(<span class="fn">squareDigits</span>(fast));
    }
    <span class="kw">return</span> fast == <span class="num">1</span>;
}` },

        { type: 'callout', kind: 'tip', html: 'After detecting a cycle, you can also find its <strong>entry point</strong>: reset one pointer to head, advance both at the same speed; they meet at the cycle\'s start.' }
      ]
    },

    /* ============ Chapter 5 — Merge Intervals ============ */
    {
      id: 'lcp-c5',
      title: 'Merge Intervals',
      icon: '🔗',
      sections: [
        { type: 'heading', text: 'Merge Intervals', level: 1 },
        { type: 'para', html: 'Whenever a problem mentions <strong>ranges, schedules, meetings, or intervals</strong>, sort by start time and sweep. Most variants boil down to a single line: "does this one overlap the previous?"' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Input is a list of [start, end] pairs',
          'You need to merge, insert, count overlaps, or count free time',
          'You\'re asked about meeting rooms or schedule conflicts'
        ] },

        { type: 'heading', text: 'Overlap intuition', level: 2 },
        { type: 'image', alt: 'Interval overlap cases',
          svg: `<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.a{fill:#bfdbfe;stroke:#1d4ed8;stroke-width:2}.b{fill:#fde68a;stroke:#b45309;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:13px;font-weight:600;text-anchor:middle}</style></defs>
<text x="350" y="22" class="t" style="font-size:16px">Two intervals overlap iff a.start ≤ b.end AND b.start ≤ a.end</text>

<text x="60" y="50" class="t">No overlap</text>
<rect x="40"  y="60" width="100" height="22" class="a"/>
<rect x="160" y="60" width="100" height="22" class="b"/>

<text x="60" y="105" class="t">Touch</text>
<rect x="40"  y="115" width="120" height="22" class="a"/>
<rect x="160" y="115" width="100" height="22" class="b"/>

<text x="60" y="160" class="t">Overlap</text>
<rect x="40"  y="170" width="140" height="22" class="a"/>
<rect x="120" y="170" width="120" height="22" class="b" opacity="0.85"/>

<text x="500" y="50" class="t">Contained</text>
<rect x="400" y="60" width="220" height="22" class="a"/>
<rect x="450" y="60" width="80" height="22" class="b" opacity="0.85"/>

<text x="500" y="105" class="t">Same start</text>
<rect x="400" y="115" width="150" height="22" class="a"/>
<rect x="400" y="115" width="90" height="22" class="b" opacity="0.85"/>

<text x="500" y="160" class="t">After sort by start, only "previous end vs current start" matters</text>
<rect x="400" y="170" width="100" height="22" class="a"/>
<rect x="470" y="170" width="120" height="22" class="b" opacity="0.85"/>
</svg>` },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `Arrays.<span class="fn">sort</span>(intervals, (a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);
List<<span class="kw">int</span>[]> merged = <span class="kw">new</span> <span class="ty">ArrayList</span><>();

<span class="kw">for</span> (<span class="kw">int</span>[] cur : intervals) {
    <span class="kw">if</span> (merged.<span class="fn">isEmpty</span>() || merged.<span class="fn">get</span>(merged.size()-<span class="num">1</span>)[<span class="num">1</span>] < cur[<span class="num">0</span>]) {
        merged.<span class="fn">add</span>(cur);
    } <span class="kw">else</span> {
        merged.<span class="fn">get</span>(merged.size()-<span class="num">1</span>)[<span class="num">1</span>] =
            Math.<span class="fn">max</span>(merged.<span class="fn">get</span>(merged.size()-<span class="num">1</span>)[<span class="num">1</span>], cur[<span class="num">1</span>]);
    }
}` },

        { type: 'heading', text: 'Example — Meeting Rooms II', level: 2 },
        { type: 'para', html: '<strong>LC 253.</strong> Given meeting intervals, how many rooms do you need? Use a min-heap of end times.' },
        { type: 'code', lang: 'java', code: `Arrays.<span class="fn">sort</span>(meetings, (a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);
<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> ends = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();
<span class="kw">for</span> (<span class="kw">int</span>[] m : meetings) {
    <span class="kw">if</span> (!ends.<span class="fn">isEmpty</span>() && ends.<span class="fn">peek</span>() <= m[<span class="num">0</span>]) ends.<span class="fn">poll</span>();
    ends.<span class="fn">offer</span>(m[<span class="num">1</span>]);
}
<span class="kw">return</span> ends.<span class="fn">size</span>();` },

        { type: 'heading', text: 'Example — Insert Interval', level: 2 },
        { type: 'para', html: '<strong>LC 57.</strong> Given non-overlapping intervals sorted by start, insert a new one. Three phases: before, overlap (merge), after.' },
        { type: 'code', lang: 'java', code: `List<<span class="kw">int</span>[]> res = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
<span class="kw">int</span> i = <span class="num">0</span>, n = ints.length;

<span class="kw">while</span> (i < n && ints[i][<span class="num">1</span>] < newInt[<span class="num">0</span>]) res.<span class="fn">add</span>(ints[i++]);
<span class="kw">while</span> (i < n && ints[i][<span class="num">0</span>] <= newInt[<span class="num">1</span>]) {
    newInt[<span class="num">0</span>] = Math.<span class="fn">min</span>(newInt[<span class="num">0</span>], ints[i][<span class="num">0</span>]);
    newInt[<span class="num">1</span>] = Math.<span class="fn">max</span>(newInt[<span class="num">1</span>], ints[i][<span class="num">1</span>]);
    i++;
}
res.<span class="fn">add</span>(newInt);
<span class="kw">while</span> (i < n) res.<span class="fn">add</span>(ints[i++]);` },

        { type: 'callout', kind: 'info', html: 'Three classic interval sorts: <strong>by start</strong> (merge), <strong>by end</strong> (non-overlapping count / activity selection), <strong>by length</strong> (rare).' }
      ]
    },

    /* ============ Chapter 6 — Cyclic Sort ============ */
    {
      id: 'lcp-c6',
      title: 'Cyclic Sort',
      icon: '🔄',
      sections: [
        { type: 'heading', text: 'Cyclic Sort', level: 1 },
        { type: 'para', html: 'When values lie in a known compact range (typically <code>[1..n]</code> or <code>[0..n]</code>), you can sort them in <strong>O(n) time and O(1) space</strong> by repeatedly swapping each value into its correct index.' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Array of size n with values in <code>[1..n]</code> or <code>[0..n]</code>',
          'Asked to find <strong>missing</strong>, <strong>duplicate</strong>, or <strong>both</strong> elements',
          'Constraint says "O(n) time, O(1) space, do not modify the array" — well, cyclic sort modifies, but it\'s often acceptable',
          'First Missing Positive (LC 41) — classic'
        ] },

        { type: 'heading', text: 'Visualizing the swap', level: 2 },
        { type: 'image', alt: 'Cyclic sort moving each value to its index',
          svg: `<svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
<defs><style>.c{fill:#fef3c7;stroke:#92400e;stroke-width:1.5}.cg{fill:#bbf7d0;stroke:#15803d;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle}.l{fill:#475569;font-family:Inter,sans-serif;font-size:12px;text-anchor:middle}</style></defs>
<text x="360" y="22" class="t" style="font-size:16px">Before: [3, 1, 5, 4, 2] · After: each value at index value-1</text>
<g>
<rect x="40"  y="50" width="55" height="55" class="c"/><text x="67"  y="85" class="t">3</text><text x="67"  y="125" class="l">i=0</text>
<rect x="100" y="50" width="55" height="55" class="c"/><text x="127" y="85" class="t">1</text><text x="127" y="125" class="l">i=1</text>
<rect x="160" y="50" width="55" height="55" class="c"/><text x="187" y="85" class="t">5</text><text x="187" y="125" class="l">i=2</text>
<rect x="220" y="50" width="55" height="55" class="c"/><text x="247" y="85" class="t">4</text><text x="247" y="125" class="l">i=3</text>
<rect x="280" y="50" width="55" height="55" class="c"/><text x="307" y="85" class="t">2</text><text x="307" y="125" class="l">i=4</text>
</g>
<text x="380" y="85" class="t" style="font-size:22px">→</text>
<g>
<rect x="420" y="50" width="55" height="55" class="cg"/><text x="447" y="85" class="t">1</text><text x="447" y="125" class="l">i=0</text>
<rect x="480" y="50" width="55" height="55" class="cg"/><text x="507" y="85" class="t">2</text><text x="507" y="125" class="l">i=1</text>
<rect x="540" y="50" width="55" height="55" class="cg"/><text x="567" y="85" class="t">3</text><text x="567" y="125" class="l">i=2</text>
<rect x="600" y="50" width="55" height="55" class="cg"/><text x="627" y="85" class="t">4</text><text x="627" y="125" class="l">i=3</text>
<rect x="660" y="50" width="55" height="55" class="cg"/><text x="687" y="85" class="t">5</text><text x="687" y="125" class="l">i=4</text>
</g>
<text x="360" y="170" class="l">Each value v lands at index v-1 (for 1-based range).</text>
</svg>` },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">while</span> (i < nums.length) {
    <span class="kw">int</span> correct = nums[i] - <span class="num">1</span>;          <span class="com">// for [1..n] range</span>
    <span class="kw">if</span> (nums[i] >= <span class="num">1</span> && nums[i] <= n && nums[i] != nums[correct]) {
        <span class="kw">int</span> tmp = nums[i];
        nums[i] = nums[correct];
        nums[correct] = tmp;
    } <span class="kw">else</span> {
        i++;
    }
}` },
        { type: 'callout', kind: 'info', html: 'Each swap puts at least one element in its final position. Total swaps ≤ n → <strong>O(n)</strong> overall.' },

        { type: 'heading', text: 'Example — Missing Number', level: 2 },
        { type: 'para', html: '<strong>LC 268.</strong> Range [0..n], array length n. After cyclic sort, find the first index where <code>nums[i] != i</code>.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">while</span> (i < n) {
    <span class="kw">if</span> (nums[i] < n && nums[i] != nums[nums[i]]) {
        <span class="kw">int</span> tmp = nums[i]; nums[i] = nums[tmp]; nums[tmp] = tmp;
    } <span class="kw">else</span> i++;
}
<span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">0</span>; j < n; j++) <span class="kw">if</span> (nums[j] != j) <span class="kw">return</span> j;
<span class="kw">return</span> n;` },

        { type: 'heading', text: 'Example — Find All Duplicates', level: 2 },
        { type: 'para', html: '<strong>LC 442.</strong> Range [1..n], any value may appear twice. After cyclic sort, any index where <code>nums[i] != i+1</code> means <code>nums[i]</code> is a duplicate.' },

        { type: 'callout', kind: 'warn', html: 'Always guard against out-of-range values before computing the swap target: <code>nums[i] >= 1 && nums[i] <= n</code>. Otherwise an unexpected -1 or 0 will crash with ArrayIndexOutOfBounds.' }
      ]
    },

    /* ============ Chapter 7 — In-place LL Reversal ============ */
    {
      id: 'lcp-c7',
      title: 'In-place Linked List Reversal',
      icon: '↩️',
      sections: [
        { type: 'heading', text: 'In-place Linked List Reversal', level: 1 },
        { type: 'para', html: 'Three pointers, O(1) extra space, one pass. This template appears as a sub-routine in many harder problems (palindrome LL, reorder list, reverse-in-k-groups, swap nodes in pairs).' },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">ListNode</span> <span class="fn">reverse</span>(<span class="ty">ListNode</span> head) {
    <span class="ty">ListNode</span> prev = <span class="kw">null</span>, curr = head;
    <span class="kw">while</span> (curr != <span class="kw">null</span>) {
        <span class="ty">ListNode</span> next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    <span class="kw">return</span> prev;
}` },

        { type: 'heading', text: 'Step-through', level: 2 },
        { type: 'widget', name: 'code-stepper', props: {
          lines: [
            '<span class="ty">ListNode</span> prev = <span class="kw">null</span>, curr = head;',
            '<span class="kw">while</span> (curr != <span class="kw">null</span>) {',
            '  <span class="ty">ListNode</span> next = curr.next;',
            '  curr.next = prev;',
            '  prev = curr;',
            '  curr = next;',
            '}',
            '<span class="kw">return</span> prev;'
          ],
          steps: [
            { line: 0, vars: { prev: 'null', curr: '1' }, note: 'Setup pointers.' },
            { line: 2, vars: { prev: 'null', curr: '1', next: '2' }, note: 'Save next before we overwrite.' },
            { line: 3, vars: { 'curr.next': 'null' }, note: 'Flip pointer backward.' },
            { line: 4, vars: { prev: '1' }, note: 'prev catches up.' },
            { line: 5, vars: { curr: '2' }, note: 'curr advances.' },
            { line: 2, vars: { prev: '1', curr: '2', next: '3' }, note: 'Loop continues...' },
            { line: 7, vars: { return: '(new head)' }, note: 'When curr is null, prev is the new head.' }
          ]
        }},

        { type: 'heading', text: 'Reverse a sublist (LC 92)', level: 2 },
        { type: 'para', html: 'Reverse only positions [left..right]. Trick: use a dummy node so handling the head is uniform.' },
        { type: 'code', lang: 'java', code: `<span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>, head);
<span class="ty">ListNode</span> prev = dummy;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i < left; i++) prev = prev.next;

<span class="ty">ListNode</span> curr = prev.next;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < right - left; i++) {
    <span class="ty">ListNode</span> nxt = curr.next;
    curr.next = nxt.next;
    nxt.next = prev.next;
    prev.next = nxt;
}
<span class="kw">return</span> dummy.next;` },

        { type: 'heading', text: 'Reverse in K-groups (LC 25)', level: 2 },
        { type: 'para', html: 'Repeatedly reverse the next k nodes. If fewer than k remain, leave them as-is.' },
        { type: 'callout', kind: 'tip', html: 'A <strong>dummy node</strong> in front of the head eliminates the special case "what if we\'re reversing from index 0?" — it\'s the cheapest way to dodge null checks.' }
      ]
    },

    /* ============ Chapter 8 — Tree BFS ============ */
    {
      id: 'lcp-c8',
      title: 'Tree BFS',
      icon: '🌳',
      sections: [
        { type: 'heading', text: 'Tree BFS — level by level', level: 1 },
        { type: 'para', html: 'Walking a tree breadth-first uses a <strong>queue</strong>. The key idea is the level snapshot: <code>int size = q.size()</code> before the inner loop locks in how many nodes belong to the current level.' },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `Queue<<span class="ty">TreeNode</span>> q = <span class="kw">new</span> <span class="ty">LinkedList</span><>();
q.<span class="fn">offer</span>(root);
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="kw">int</span> size = q.<span class="fn">size</span>();
    List<<span class="ty">Integer</span>> level = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {
        <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();
        level.<span class="fn">add</span>(n.val);
        <span class="kw">if</span> (n.left  != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);
        <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.right);
    }
    result.<span class="fn">add</span>(level);
}` },

        { type: 'widget', name: 'tree-traversal-vis', props: {} },

        { type: 'heading', text: 'Variants', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Level Order (LC 102)</strong> — append the level list directly',
          '<strong>Zigzag (LC 103)</strong> — alternate adding to the front vs back of <code>level</code>',
          '<strong>Right Side View (LC 199)</strong> — keep only the last node of each level',
          '<strong>Level Averages (LC 637)</strong> — sum / level.size',
          '<strong>Connect Level Order Siblings (LC 116)</strong> — link previous to current within the level loop'
        ] },

        { type: 'heading', text: 'Example — Right Side View', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="kw">int</span> size = q.<span class="fn">size</span>();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {
        <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();
        <span class="kw">if</span> (i == size - <span class="num">1</span>) result.<span class="fn">add</span>(n.val);   <span class="com">// last node of level</span>
        <span class="kw">if</span> (n.left  != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);
        <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.right);
    }
}` },

        { type: 'heading', text: 'Complexity', level: 2 },
        { type: 'para', html: 'Every node enters and leaves the queue exactly once → <strong>O(n) time</strong>. The queue holds at most one level at a time → <strong>O(w) space</strong> where w is the max level width. For a complete binary tree, w ≈ n/2.' },

        { type: 'callout', kind: 'tip', html: '<strong>BFS vs DFS for trees:</strong> BFS gives you level info "for free" — perfect when the answer depends on depth or sibling relations. DFS is cleaner when the answer is recursive on subtrees.' }
      ]
    },

    /* ============ Chapter 9 — Tree DFS ============ */
    {
      id: 'lcp-c9',
      title: 'Tree DFS',
      icon: '🌲',
      sections: [
        { type: 'heading', text: 'Tree DFS — recursion and paths', level: 1 },
        { type: 'para', html: 'Tree DFS is recursion at its purest: decompose the answer for a node into answers for its children. Most variants are 5-line solutions.' },

        { type: 'heading', text: 'The three flavors', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Pure recursion</strong> — recurse into children, combine results (Max Depth, Same Tree)',
          '<strong>Recursion + accumulator</strong> — pass running info down (Path Sum, Sum of Root-to-Leaf)',
          '<strong>Recursion + backtracking</strong> — pass mutable path, add before, remove after (All Paths, Path Sum II)'
        ] },

        { type: 'heading', text: 'Example — Maximum Depth', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> <span class="fn">maxDepth</span>(<span class="ty">TreeNode</span> root) {
    <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> <span class="num">0</span>;
    <span class="kw">return</span> <span class="num">1</span> + Math.<span class="fn">max</span>(<span class="fn">maxDepth</span>(root.left),
                          <span class="fn">maxDepth</span>(root.right));
}` },

        { type: 'heading', text: 'Example — Path Sum', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">boolean</span> <span class="fn">hasPathSum</span>(<span class="ty">TreeNode</span> n, <span class="kw">int</span> target) {
    <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return false</span>;
    <span class="kw">if</span> (n.left == <span class="kw">null</span> && n.right == <span class="kw">null</span>)
        <span class="kw">return</span> target == n.val;
    <span class="kw">return</span> <span class="fn">hasPathSum</span>(n.left,  target - n.val)
        || <span class="fn">hasPathSum</span>(n.right, target - n.val);
}` },

        { type: 'heading', text: 'Example — All Root-to-Leaf Paths', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">dfs</span>(<span class="ty">TreeNode</span> n, List<<span class="ty">Integer</span>> path, List<List<<span class="ty">Integer</span>>> result) {
    <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span>;
    path.<span class="fn">add</span>(n.val);                                <span class="com">// CHOOSE</span>
    <span class="kw">if</span> (n.left == <span class="kw">null</span> && n.right == <span class="kw">null</span>)
        result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>(path));         <span class="com">// SNAPSHOT</span>
    <span class="fn">dfs</span>(n.left,  path, result);                  <span class="com">// EXPLORE</span>
    <span class="fn">dfs</span>(n.right, path, result);
    path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);              <span class="com">// UNCHOOSE</span>
}` },

        { type: 'heading', text: 'Example — Diameter (LC 543)', level: 2 },
        { type: 'para', html: 'Diameter is the longest path through ANY node. Trick: the recursive helper returns <em>depth</em>, but updates a shared <em>diameter</em> at every node.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> diameter = <span class="num">0</span>;

<span class="kw">int</span> <span class="fn">depth</span>(<span class="ty">TreeNode</span> n) {
    <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span> <span class="num">0</span>;
    <span class="kw">int</span> l = <span class="fn">depth</span>(n.left);
    <span class="kw">int</span> r = <span class="fn">depth</span>(n.right);
    diameter = Math.<span class="fn">max</span>(diameter, l + r);
    <span class="kw">return</span> <span class="num">1</span> + Math.<span class="fn">max</span>(l, r);
}` },

        { type: 'callout', kind: 'tip', html: 'Whenever the answer is "longest path through any node", or "max gain from any subtree", separate <em>what you return</em> (used by the caller) from <em>what you record</em> (the global best).' }
      ]
    },

    /* ============ Chapter 10 — Two Heaps ============ */
    {
      id: 'lcp-c10',
      title: 'Two Heaps',
      icon: '⚖️',
      sections: [
        { type: 'heading', text: 'Two Heaps', level: 1 },
        { type: 'para', html: 'Use two heaps when you need to <strong>track the middle</strong> of a stream — typically the median, or anything that depends on partitioning data into "smaller half" and "larger half".' },

        { type: 'heading', text: 'The setup', level: 2 },
        { type: 'image', alt: 'Two heaps split around the median',
          svg: `<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
<defs><style>.lo{fill:#fde68a;stroke:#b45309;stroke-width:2}.hi{fill:#bfdbfe;stroke:#1d4ed8;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:14px;text-anchor:middle}.h{fill:#0f172a;font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle}</style></defs>
<text x="180" y="30" class="h">Max-heap (lo) — smaller half</text>
<text x="540" y="30" class="h">Min-heap (hi) — larger half</text>

<polygon points="180,55 110,120 250,120" class="lo"/>
<text x="180" y="100" class="t" style="font-weight:700">7 (top)</text>
<text x="135" y="140" class="t">5</text>
<text x="180" y="140" class="t">6</text>
<text x="225" y="140" class="t">3</text>
<text x="180" y="170" class="t">1   2   4</text>

<polygon points="540,55 470,120 610,120" class="hi"/>
<text x="540" y="100" class="t" style="font-weight:700">8 (top)</text>
<text x="495" y="140" class="t">9</text>
<text x="540" y="140" class="t">10</text>
<text x="585" y="140" class="t">11</text>
<text x="540" y="170" class="t">12  15  20</text>

<text x="360" y="100" class="h">→  median ≈ (7 + 8) / 2 = 7.5</text>
</svg>` },

        { type: 'heading', text: 'Template — running median', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> lo = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(Comparator.<span class="fn">reverseOrder</span>());
<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> hi = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();

<span class="kw">void</span> <span class="fn">addNum</span>(<span class="kw">int</span> n) {
    lo.<span class="fn">offer</span>(n);
    hi.<span class="fn">offer</span>(lo.<span class="fn">poll</span>());
    <span class="kw">if</span> (hi.<span class="fn">size</span>() > lo.<span class="fn">size</span>())
        lo.<span class="fn">offer</span>(hi.<span class="fn">poll</span>());
}

<span class="kw">double</span> <span class="fn">findMedian</span>() {
    <span class="kw">return</span> lo.<span class="fn">size</span>() > hi.<span class="fn">size</span>()
        ? lo.<span class="fn">peek</span>()
        : (lo.<span class="fn">peek</span>() + hi.<span class="fn">peek</span>()) / <span class="num">2.0</span>;
}` },
        { type: 'para', html: 'Each <code>addNum</code> is O(log n). Each <code>findMedian</code> is O(1). Beats a sorted list (O(n) insert) and a single sort per query (O(n log n)).' },

        { type: 'heading', text: 'Variants', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Find Median from Data Stream (LC 295)</strong> — the template above',
          '<strong>Sliding Window Median (LC 480)</strong> — same heaps + lazy deletion / multiset',
          '<strong>IPO (LC 502)</strong> — two heaps, one for "currently affordable", one for "waiting"',
          '<strong>Maximize Capital</strong> — pick top-K most profitable affordable projects'
        ] },

        { type: 'callout', kind: 'info', html: 'When you also need to remove arbitrary values from a heap (sliding window median), Java\'s <code>PriorityQueue.remove(x)</code> is O(n). A <code>TreeMap&lt;Integer, Integer&gt;</code> as a multiset is often easier than implementing lazy deletion.' }
      ]
    },

    /* ============ Chapter 11 — Subsets / Backtracking ============ */
    {
      id: 'lcp-c11',
      title: 'Subsets & Backtracking',
      icon: '🎲',
      sections: [
        { type: 'heading', text: 'Subsets & Backtracking', level: 1 },
        { type: 'para', html: 'Backtracking is systematic, pruned brute force. Build a partial solution one choice at a time. If the partial state can\'t lead to a valid answer, abandon it. Otherwise recurse deeper.' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You need to enumerate <strong>all</strong> subsets / permutations / combinations',
          'You need <strong>any</strong> path that satisfies a constraint (N-Queens, Sudoku, Word Search)',
          'Decisions are sequential and reversible',
          'Brute force is exponential but you can prune large branches early'
        ] },

        { type: 'heading', text: 'The universal template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">backtrack</span>(state, choices) {
    <span class="kw">if</span> (isComplete(state)) {
        result.<span class="fn">add</span>(snapshot(state));
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (choice : choices) {
        <span class="kw">if</span> (!valid(choice, state)) <span class="kw">continue</span>;   <span class="com">// prune</span>
        apply(choice, state);                  <span class="com">// CHOOSE</span>
        <span class="fn">backtrack</span>(state, choices);             <span class="com">// EXPLORE</span>
        undo(choice, state);                   <span class="com">// UNCHOOSE</span>
    }
}` },

        { type: 'heading', text: 'Example — Subsets (LC 78)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">dfs</span>(<span class="kw">int</span> start, List<<span class="ty">Integer</span>> path, List<List<<span class="ty">Integer</span>>> result) {
    result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>(path));
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i < nums.length; i++) {
        path.<span class="fn">add</span>(nums[i]);
        <span class="fn">dfs</span>(i + <span class="num">1</span>, path, result);
        path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);
    }
}` },
        { type: 'para', html: 'Total subsets: <strong>2^n</strong>. Each subset is copied in O(n). Time <strong>O(n · 2^n)</strong>.' },

        { type: 'heading', text: 'Example — Permutations (LC 46)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">dfs</span>(<span class="kw">boolean</span>[] used, List<<span class="ty">Integer</span>> path) {
    <span class="kw">if</span> (path.<span class="fn">size</span>() == nums.length) {
        result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>(path));
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < nums.length; i++) {
        <span class="kw">if</span> (used[i]) <span class="kw">continue</span>;
        used[i] = <span class="kw">true</span>;
        path.<span class="fn">add</span>(nums[i]);
        <span class="fn">dfs</span>(used, path);
        path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);
        used[i] = <span class="kw">false</span>;
    }
}` },

        { type: 'heading', text: 'Example — N-Queens (LC 51)', level: 2 },
        { type: 'para', html: 'Place queens row by row. Track used columns, diagonals (row+col), and anti-diagonals (row-col) in three sets. O(N!) worst case but pruned aggressively.' },
        { type: 'code', lang: 'java', code: `<span class="kw">void</span> <span class="fn">solve</span>(<span class="kw">int</span> row) {
    <span class="kw">if</span> (row == n) { result.<span class="fn">add</span>(snapshot()); <span class="kw">return</span>; }
    <span class="kw">for</span> (<span class="kw">int</span> col = <span class="num">0</span>; col < n; col++) {
        <span class="kw">if</span> (cols.<span class="fn">contains</span>(col) ||
            diag.<span class="fn">contains</span>(row + col) ||
            adiag.<span class="fn">contains</span>(row - col)) <span class="kw">continue</span>;
        cols.<span class="fn">add</span>(col); diag.<span class="fn">add</span>(row+col); adiag.<span class="fn">add</span>(row-col);
        queens[row] = col;
        <span class="fn">solve</span>(row + <span class="num">1</span>);
        cols.<span class="fn">remove</span>(col); diag.<span class="fn">remove</span>(row+col); adiag.<span class="fn">remove</span>(row-col);
    }
}` },

        { type: 'callout', kind: 'tip', html: 'Backtracking shines when you <strong>prune early</strong>. Sorting choices, checking constraints on every step, or memoizing repeated states can turn an O(n!) brute force into something you can actually run.' }
      ]
    },

    /* ============ Chapter 12 — Modified Binary Search ============ */
    {
      id: 'lcp-c12',
      title: 'Modified Binary Search',
      icon: '🔍',
      sections: [
        { type: 'heading', text: 'Modified Binary Search', level: 1 },
        { type: 'para', html: 'Binary search isn\'t just "find this value". It\'s the most efficient way to find <strong>the boundary between two monotonic regions</strong>: yes/no, false/true, smaller/larger.' },

        { type: 'heading', text: 'When to recognize it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Input is sorted, or has a sorted structure (rotated, bitonic)',
          'You need an element, or the closest element, or a count',
          '<strong>Search the answer:</strong> the answer space is monotonic (smaller works → bigger works)',
          'Brute force is O(n); a log-n solution feels possible'
        ] },

        { type: 'widget', name: 'binary-search-vis', props: { sorted: [3, 7, 12, 18, 23, 30, 36, 42, 48, 55, 61, 70], target: 36 } },

        { type: 'heading', text: 'The bullet-proof template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>;
<span class="kw">while</span> (lo <= hi) {
    <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;   <span class="com">// overflow-safe</span>
    <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;
    <span class="kw">if</span> (nums[mid] < target) lo = mid + <span class="num">1</span>;
    <span class="kw">else</span>                    hi = mid - <span class="num">1</span>;
}
<span class="kw">return</span> -<span class="num">1</span>;` },

        { type: 'heading', text: 'Example — Search in Rotated Sorted Array', level: 2 },
        { type: 'para', html: '<strong>LC 33.</strong> Pivot somewhere unknown. At each step, one half is guaranteed sorted — figure out which, then decide whether target lies in it.' },
        { type: 'code', lang: 'java', code: `<span class="kw">while</span> (lo <= hi) {
    <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
    <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;
    <span class="kw">if</span> (nums[lo] <= nums[mid]) {        <span class="com">// left sorted</span>
        <span class="kw">if</span> (nums[lo] <= target && target < nums[mid]) hi = mid - <span class="num">1</span>;
        <span class="kw">else</span> lo = mid + <span class="num">1</span>;
    } <span class="kw">else</span> {                              <span class="com">// right sorted</span>
        <span class="kw">if</span> (nums[mid] < target && target <= nums[hi]) lo = mid + <span class="num">1</span>;
        <span class="kw">else</span> hi = mid - <span class="num">1</span>;
    }
}` },

        { type: 'heading', text: 'Example — Find Peak Element', level: 2 },
        { type: 'para', html: '<strong>LC 162.</strong> Any peak is fine. Compare mid with mid+1: a peak must lie on the higher side.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>;
<span class="kw">while</span> (lo < hi) {
    <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
    <span class="kw">if</span> (nums[mid] > nums[mid + <span class="num">1</span>]) hi = mid;
    <span class="kw">else</span>                          lo = mid + <span class="num">1</span>;
}
<span class="kw">return</span> lo;` },

        { type: 'heading', text: 'Search the answer — Koko Bananas (LC 875)', level: 2 },
        { type: 'para', html: 'Speed k works iff she finishes in ≤ h hours. <code>worksAtSpeed(k)</code> is monotonic: bigger k → faster. Binary search k in [1..max(piles)].' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span> lo = <span class="num">1</span>, hi = max(piles);
<span class="kw">while</span> (lo < hi) {
    <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
    <span class="kw">if</span> (canEat(piles, mid, h)) hi = mid;
    <span class="kw">else</span>                        lo = mid + <span class="num">1</span>;
}
<span class="kw">return</span> lo;` },

        { type: 'callout', kind: 'warn', html: 'Two common bug sources: <strong>(1)</strong> using <code>lo + hi</code> can overflow — always use <code>lo + (hi - lo) / 2</code>. <strong>(2)</strong> Choosing <code>lo &lt;= hi</code> vs <code>lo &lt; hi</code> changes whether the loop ends with <code>lo == hi</code> or <code>lo &gt; hi</code>. Pick one style and stick with it.' }
      ]
    },

    /* ============ Chapter 13 — Top K ============ */
    {
      id: 'lcp-c13',
      title: 'Top K Elements',
      icon: '🏆',
      sections: [
        { type: 'heading', text: 'Top K with a Heap', level: 1 },
        { type: 'para', html: 'For "Kth smallest / Kth largest / Top K something", a heap of size K beats a full sort. You only ever keep K elements in memory and do log K work per insert.' },

        { type: 'heading', text: 'Sizing the heap correctly', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Kth largest</strong> → <em>min-heap</em> of size K (root = smallest of top K = the answer)',
          '<strong>Kth smallest</strong> → <em>max-heap</em> of size K (root = largest of bottom K = the answer)',
          '<strong>Top K frequent</strong> → <em>min-heap</em> by frequency, size K',
          '<strong>K closest points</strong> → <em>max-heap</em> by distance, size K (root = farthest of the K closest)'
        ] },

        { type: 'heading', text: 'Template — Kth largest', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> heap = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();
<span class="kw">for</span> (<span class="kw">int</span> x : nums) {
    heap.<span class="fn">offer</span>(x);
    <span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">poll</span>();
}
<span class="kw">return</span> heap.<span class="fn">peek</span>();` },
        { type: 'para', html: 'Time <strong>O(n log k)</strong>, space <strong>O(k)</strong>.' },

        { type: 'heading', text: 'Example — Top K Frequent Elements (LC 347)', level: 2 },
        { type: 'code', lang: 'java', code: `Map<<span class="ty">Integer</span>, <span class="ty">Integer</span>> count = <span class="kw">new</span> <span class="ty">HashMap</span><>();
<span class="kw">for</span> (<span class="kw">int</span> x : nums) count.<span class="fn">merge</span>(x, <span class="num">1</span>, <span class="ty">Integer</span>::sum);

<span class="ty">PriorityQueue</span><<span class="kw">int</span>[]> heap = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(
    (a, b) -> a[<span class="num">1</span>] - b[<span class="num">1</span>]);            <span class="com">// min by frequency</span>

<span class="kw">for</span> (<span class="kw">var</span> e : count.<span class="fn">entrySet</span>()) {
    heap.<span class="fn">offer</span>(<span class="kw">new int</span>[]{ e.<span class="fn">getKey</span>(), e.<span class="fn">getValue</span>() });
    <span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">poll</span>();
}

<span class="kw">int</span>[] result = <span class="kw">new int</span>[k];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < k; i++) result[i] = heap.<span class="fn">poll</span>()[<span class="num">0</span>];
<span class="kw">return</span> result;` },

        { type: 'heading', text: 'Example — K Closest Points to Origin (LC 973)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span><<span class="kw">int</span>[]> heap = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(
    (a, b) -> distSq(b) - distSq(a));     <span class="com">// max-heap by dist</span>

<span class="kw">for</span> (<span class="kw">int</span>[] p : points) {
    heap.<span class="fn">offer</span>(p);
    <span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">poll</span>();   <span class="com">// drop the farthest</span>
}
<span class="kw">return</span> heap.<span class="fn">toArray</span>(<span class="kw">new int</span>[<span class="num">0</span>][]);` },

        { type: 'callout', kind: 'info', html: 'Quickselect (partition-based) gives expected O(n) for these problems — strictly better than heap O(n log k). But heap is easier to write correctly under interview pressure. Default to heap; mention quickselect.' }
      ]
    },

    /* ============ Chapter 14 — K-way Merge ============ */
    {
      id: 'lcp-c14',
      title: 'K-way Merge',
      icon: '🔀',
      sections: [
        { type: 'heading', text: 'K-way Merge', level: 1 },
        { type: 'para', html: 'When you have K sorted streams and need to produce one sorted output, the standard trick is a <strong>min-heap holding the current head of each stream</strong>.' },

        { type: 'heading', text: 'Template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span><<span class="ty">ListNode</span>> pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(
    (a, b) -> a.val - b.val);

<span class="kw">for</span> (<span class="ty">ListNode</span> head : lists)
    <span class="kw">if</span> (head != <span class="kw">null</span>) pq.<span class="fn">offer</span>(head);

<span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>), tail = dummy;
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) {
    <span class="ty">ListNode</span> n = pq.<span class="fn">poll</span>();
    tail.next = n;
    tail = n;
    <span class="kw">if</span> (n.next != <span class="kw">null</span>) pq.<span class="fn">offer</span>(n.next);
}
<span class="kw">return</span> dummy.next;` },
        { type: 'para', html: 'Time <strong>O(N log K)</strong> where N = total elements, K = number of streams.' },

        { type: 'heading', text: 'Why a heap?', level: 2 },
        { type: 'image', alt: 'K-way merge with heap of heads',
          svg: `<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.l{fill:#fef9c3;stroke:#a16207;stroke-width:2}.h{fill:#bfdbfe;stroke:#1d4ed8;stroke-width:2}.t{fill:#0f172a;font-family:Inter,sans-serif;font-size:14px;text-anchor:middle}.b{fill:#0f172a;font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle}</style></defs>
<text x="350" y="22" class="b">3 sorted lists → min-heap of heads → output</text>
<text x="60" y="60" class="t">List A:</text>
<rect x="100" y="48" width="40" height="28" class="l"/><text x="120" y="68" class="t">1</text>
<rect x="145" y="48" width="40" height="28" class="l"/><text x="165" y="68" class="t">4</text>
<rect x="190" y="48" width="40" height="28" class="l"/><text x="210" y="68" class="t">5</text>

<text x="60" y="105" class="t">List B:</text>
<rect x="100" y="93" width="40" height="28" class="l"/><text x="120" y="113" class="t">1</text>
<rect x="145" y="93" width="40" height="28" class="l"/><text x="165" y="113" class="t">3</text>
<rect x="190" y="93" width="40" height="28" class="l"/><text x="210" y="113" class="t">4</text>

<text x="60" y="150" class="t">List C:</text>
<rect x="100" y="138" width="40" height="28" class="l"/><text x="120" y="158" class="t">2</text>
<rect x="145" y="138" width="40" height="28" class="l"/><text x="165" y="158" class="t">6</text>

<rect x="300" y="65" width="120" height="80" class="h"/>
<text x="360" y="92" class="b">Heap (heads)</text>
<text x="360" y="115" class="t">1 (A), 1 (B), 2 (C)</text>
<text x="360" y="135" class="t">Pop smallest, push next</text>

<rect x="460" y="60" width="220" height="90" class="h"/>
<text x="570" y="85" class="b">Output</text>
<text x="570" y="115" class="t">1 → 1 → 2 → 3 → 4 → 4 → 5 → 6</text>
</svg>` },

        { type: 'heading', text: 'Variants', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Merge K Sorted Lists (LC 23)</strong> — the template above',
          '<strong>Kth Smallest in Sorted Matrix (LC 378)</strong> — heap of row heads',
          '<strong>Smallest Range Covering K Lists (LC 632)</strong> — heap + track current max',
          '<strong>External sort merge phase</strong> — heap of file iterators'
        ] },

        { type: 'heading', text: 'Example — Kth Smallest in Sorted Matrix', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">PriorityQueue</span><<span class="kw">int</span>[]> pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(
    (a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);
<span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r < n; r++)
    pq.<span class="fn">offer</span>(<span class="kw">new int</span>[]{ matrix[r][<span class="num">0</span>], r, <span class="num">0</span> });

<span class="kw">while</span> (--k > <span class="num">0</span>) {
    <span class="kw">int</span>[] top = pq.<span class="fn">poll</span>();
    <span class="kw">int</span> r = top[<span class="num">1</span>], c = top[<span class="num">2</span>];
    <span class="kw">if</span> (c + <span class="num">1</span> < n) pq.<span class="fn">offer</span>(<span class="kw">new int</span>[]{ matrix[r][c+<span class="num">1</span>], r, c+<span class="num">1</span> });
}
<span class="kw">return</span> pq.<span class="fn">peek</span>()[<span class="num">0</span>];` }
      ]
    },

    /* ============ Chapter 15 — Topological Sort ============ */
    {
      id: 'lcp-c15',
      title: 'Topological Sort',
      icon: '📊',
      sections: [
        { type: 'heading', text: 'Topological Sort', level: 1 },
        { type: 'para', html: 'A topological order of a DAG is a sequence of nodes such that every edge u → v has u before v. Use it whenever the problem reads like "<em>do tasks with prerequisites</em>" or "<em>build order</em>".' },

        { type: 'heading', text: 'Two algorithms', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Kahn\'s algorithm (BFS)</strong> — repeatedly remove nodes with in-degree 0. Detects cycles for free.',
          '<strong>DFS post-order</strong> — push nodes onto a stack after recursing on neighbors. Slightly trickier cycle detection.'
        ] },

        { type: 'widget', name: 'graph-vis', props: {} },

        { type: 'heading', text: 'Kahn\'s algorithm template', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] indeg = <span class="kw">new int</span>[n];
List<List<<span class="ty">Integer</span>>> adj = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < n; i++) adj.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>());
<span class="kw">for</span> (<span class="kw">int</span>[] e : edges) { adj.<span class="fn">get</span>(e[<span class="num">0</span>]).<span class="fn">add</span>(e[<span class="num">1</span>]); indeg[e[<span class="num">1</span>]]++; }

Queue<<span class="ty">Integer</span>> q = <span class="kw">new</span> <span class="ty">LinkedList</span><>();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < n; i++)
    <span class="kw">if</span> (indeg[i] == <span class="num">0</span>) q.<span class="fn">offer</span>(i);

<span class="kw">int</span>[] order = <span class="kw">new int</span>[n];
<span class="kw">int</span> idx = <span class="num">0</span>;
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
    <span class="kw">int</span> u = q.<span class="fn">poll</span>();
    order[idx++] = u;
    <span class="kw">for</span> (<span class="kw">int</span> v : adj.<span class="fn">get</span>(u))
        <span class="kw">if</span> (--indeg[v] == <span class="num">0</span>) q.<span class="fn">offer</span>(v);
}
<span class="kw">return</span> idx == n ? order : <span class="kw">new int</span>[<span class="num">0</span>];   <span class="com">// cycle if shorter</span>` },

        { type: 'heading', text: 'Example — Course Schedule II (LC 210)', level: 2 },
        { type: 'para', html: 'Given n courses and prerequisite pairs <code>[a, b]</code> (take b before a), return any valid completion order, or empty if impossible.' },
        { type: 'para', html: 'Build adjacency b → a, run Kahn\'s, return the order or empty array on cycle.' },

        { type: 'heading', text: 'Example — Alien Dictionary (LC 269)', level: 2 },
        { type: 'para', html: 'Given a list of words sorted in a foreign alphabet, deduce the letter order. Compare consecutive words; the first differing character gives an edge.' },
        { type: 'code', lang: 'java', code: `<span class="com">// For words[i] and words[i+1], find first mismatched char:</span>
<span class="kw">for</span> (<span class="kw">int</span> k = <span class="num">0</span>; k < Math.<span class="fn">min</span>(a.length(), b.length()); k++) {
    <span class="kw">char</span> x = a.<span class="fn">charAt</span>(k), y = b.<span class="fn">charAt</span>(k);
    <span class="kw">if</span> (x != y) { addEdge(x, y); <span class="kw">break</span>; }
}` },

        { type: 'callout', kind: 'warn', html: 'Edge case for Alien Dictionary: if word A is a strict prefix of word B but appears AFTER B in input, the order is invalid (e.g., ["abc", "ab"]) — return "". Watch for this.' }
      ]
    },

    /* ============ Chapter 16 — DP ============ */
    {
      id: 'lcp-c16',
      title: 'Dynamic Programming',
      icon: '🧠',
      sections: [
        { type: 'heading', text: 'Dynamic Programming', level: 1 },
        { type: 'para', html: 'DP applies when a problem has <strong>optimal substructure</strong> (the answer is built from sub-answers) AND <strong>overlapping subproblems</strong> (the same sub-question shows up many times). Cache the sub-answers and you turn exponential into polynomial.' },

        { type: 'heading', text: 'Two flavors', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Top-down (memoization)</strong> — recursion + cache. Closest to the math.',
          '<strong>Bottom-up (tabulation)</strong> — fill a table iteratively. Better constant factors, no stack overflow.'
        ] },

        { type: 'heading', text: 'Pattern 1 — Linear DP (Fibonacci-like)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// f(n) = f(n-1) + f(n-2). Climbing Stairs, House Robber, Decode Ways.</span>
<span class="kw">int</span> a = <span class="num">1</span>, b = <span class="num">2</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">3</span>; i <= n; i++) {
    <span class="kw">int</span> c = a + b;
    a = b; b = c;
}
<span class="kw">return</span> b;` },

        { type: 'heading', text: 'Pattern 2 — LIS (O(n²) version)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] dp = <span class="kw">new int</span>[n];
Arrays.<span class="fn">fill</span>(dp, <span class="num">1</span>);
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i < n; i++)
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">0</span>; j < i; j++)
        <span class="kw">if</span> (nums[j] < nums[i])
            dp[i] = Math.<span class="fn">max</span>(dp[i], dp[j] + <span class="num">1</span>);
<span class="kw">return</span> Arrays.<span class="fn">stream</span>(dp).max().<span class="fn">getAsInt</span>();` },

        { type: 'heading', text: 'Pattern 3 — LCS (2D DP)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[][] dp = <span class="kw">new int</span>[m+<span class="num">1</span>][n+<span class="num">1</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i <= m; i++) {
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">1</span>; j <= n; j++) {
        <span class="kw">if</span> (a.<span class="fn">charAt</span>(i-<span class="num">1</span>) == b.<span class="fn">charAt</span>(j-<span class="num">1</span>))
            dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="num">1</span>;
        <span class="kw">else</span>
            dp[i][j] = Math.<span class="fn">max</span>(dp[i-<span class="num">1</span>][j], dp[i][j-<span class="num">1</span>]);
    }
}
<span class="kw">return</span> dp[m][n];` },

        { type: 'heading', text: 'Pattern 4 — 0/1 Knapsack', level: 2 },
        { type: 'para', html: 'Each item used at most once. The 1D rolling-array trick: iterate items outer, capacity inner — but inner loop goes <strong>backward</strong>, so we never re-use an item.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] dp = <span class="kw">new int</span>[W + <span class="num">1</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < items.length; i++)
    <span class="kw">for</span> (<span class="kw">int</span> w = W; w >= weight[i]; w--)
        dp[w] = Math.<span class="fn">max</span>(dp[w], dp[w - weight[i]] + value[i]);
<span class="kw">return</span> dp[W];` },

        { type: 'heading', text: 'Pattern 5 — Unbounded Knapsack (Coin Change)', level: 2 },
        { type: 'para', html: 'Items have unlimited supply. Inner loop goes <strong>forward</strong>, so we CAN re-use.' },
        { type: 'code', lang: 'java', code: `<span class="kw">int</span>[] dp = <span class="kw">new int</span>[amount + <span class="num">1</span>];
Arrays.<span class="fn">fill</span>(dp, amount + <span class="num">1</span>);
dp[<span class="num">0</span>] = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> c : coins)
    <span class="kw">for</span> (<span class="kw">int</span> w = c; w <= amount; w++)
        dp[w] = Math.<span class="fn">min</span>(dp[w], dp[w - c] + <span class="num">1</span>);
<span class="kw">return</span> dp[amount] > amount ? -<span class="num">1</span> : dp[amount];` },

        { type: 'heading', text: 'How to find a DP', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Define <strong>what dp[i] (or dp[i][j]) represents</strong>. Be precise.',
          'Write the <strong>recurrence</strong>: dp[i] in terms of smaller indices.',
          'Identify <strong>base cases</strong> and the <strong>final answer location</strong> in the table.',
          'Decide direction: top-down (memo) or bottom-up (loops).',
          'Optimize space if only the last 1–2 rows / columns are needed.'
        ] },

        { type: 'callout', kind: 'tip', html: 'If you\'re stuck, write the brute-force recursion first. Memoize it. Then "unroll" into tabulation if you want extra constant-factor speed. Most interview DPs go: brute → memo → table → 1-D table.' }
      ]
    },

    /* ============ Chapter 17 — Putting it Together ============ */
    {
      id: 'lcp-c17',
      title: 'Putting it Together',
      icon: '🧭',
      sections: [
        { type: 'heading', text: 'A decision tree for new problems', level: 1 },
        { type: 'para', html: 'When you see a brand-new problem, ask these questions in order. The first "yes" usually picks your pattern.' },

        { type: 'list', kind: 'numbered', items: [
          'Is the input a <strong>sorted array</strong> + you need a pair/triplet? → <strong>Two Pointers</strong>',
          'Are you looking at <strong>contiguous subarrays/substrings</strong>? → <strong>Sliding Window</strong>',
          'Linked list with cycles, middle, or sequence-on-function? → <strong>Fast & Slow Pointers</strong>',
          'Reverse a linked list (whole, sub-range, in groups)? → <strong>In-place Reversal</strong>',
          'Overlapping ranges / meetings / schedules? → <strong>Merge Intervals</strong>',
          'Values in [1..n] with missing or duplicates? → <strong>Cyclic Sort</strong>',
          'Tree problem that needs <strong>levels</strong>? → <strong>BFS</strong>',
          'Tree problem that\'s recursive on subtrees? → <strong>DFS</strong>',
          'Stream median / dual-heap partition? → <strong>Two Heaps</strong>',
          'Enumerate all subsets / permutations / paths? → <strong>Subsets / Backtracking</strong>',
          'Sorted + searching → <strong>Binary Search</strong>. Monotonic predicate on answer → <strong>Search the Answer</strong>',
          'Kth / Top K anything? → <strong>Heap of size K</strong>',
          'K sorted streams → produce sorted output → <strong>K-way Merge</strong>',
          '"Order with prerequisites" / DAG → <strong>Topological Sort</strong>',
          'Optimal substructure + overlapping subproblems → <strong>DP</strong>'
        ] },

        { type: 'heading', text: 'Practice routine', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Pick a pattern. Solve 3–5 problems back to back in that pattern',
          'Look at the template until you can write it without looking',
          'Then attempt one problem WITHOUT looking at the template',
          'When you can write the template from scratch and recognize the pattern in a new problem, move on'
        ] },

        { type: 'callout', kind: 'success', html: 'Once you\'ve internalized all fifteen, most LC mediums fall in 10–20 minutes — not because you\'ve memorized solutions, but because <em>you\'ve memorized the shape of the solution before reading the problem</em>.' },

        { type: 'heading', text: 'Common interview tells', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '"Find all..." → backtracking or DP',
          '"Find ONE valid..." → backtracking with early return',
          '"Find the BEST..." → DP, or greedy',
          '"Find the Kth..." → heap or quickselect',
          '"In O(log n)..." → binary search of some form',
          '"In O(n) time, O(1) extra space..." → two pointers, cyclic sort, or in-place reversal',
          '"Stream of numbers..." → two heaps, or a deque'
        ] }
      ]
    }

  ]
});

PUSH({
  id: 'leetcode-patterns',
  name: 'Leetcode Patterns',
  icon: '🧩',
  color: '#ffa116',
  description: 'Master the 15 patterns that solve 80% of coding interview problems.',
  units: [

    /* ============== UNIT 1 — Two Pointers ============== */
    {
      id: 'lcp-u1', name: 'Unit 1 · Two Pointers', description: 'Shrink, expand, scan from both ends',
      lessons: [
        {
          id: 'lcp-u1-l1', name: 'Recognize the pattern', icon: '👉', xp: 15,
          challenges: [
            { type: 'concept', title: 'Two pointers: one array, two indices', content: `<p>You have a <strong>sorted array</strong> (or a structure with order). Brute force takes O(n²). Two pointers reduces it to <strong>O(n)</strong>.</p>
<p>The idea: walk two indices toward each other (or in the same direction). Each step <em>eliminates</em> at least one element from consideration.</p>
<div class="code-block"><span class="com">// Two Sum II — sorted array, find indices that sum to target</span>
<span class="kw">int</span> left = <span class="num">0</span>, right = arr.length - <span class="num">1</span>;
<span class="kw">while</span> (left < right) {
  <span class="kw">int</span> sum = arr[left] + arr[right];
  <span class="kw">if</span> (sum == target) <span class="kw">return new</span> <span class="ty">int</span>[]{left, right};
  <span class="kw">if</span> (sum < target) left++;       <span class="com">// need bigger → move left up</span>
  <span class="kw">else</span> right--;                    <span class="com">// need smaller → move right down</span>
}</div>
<p><strong>Signals to use it:</strong> sorted input · pair / triplet sum · palindrome · "remove duplicates in place" · partition by predicate.</p>` },
            { type: 'multiple-choice', prompt: 'Two pointers turns which brute-force complexity into O(n)?',
              options: [{text:'O(n)', code:false},{text:'O(n²) on sorted pair-finding', code:false},{text:'O(2^n)', code:false},{text:'O(n log n)', code:false}],
              correct: 1, explanation: 'Two nested loops over an array collapse to a single linear sweep.' },
            { type: 'true-false', statement: 'Two pointers usually requires the input to be sorted or have some monotonic property.', correct: true, explanation: 'Without order, moving a pointer one way doesn\'t monotonically change the value being tested.' },
            { type: 'match-pairs', prompt: 'Problem → which pointer move?', leftLabel: 'Situation', rightLabel: 'Action',
              pairs: [
                { left: 'sum too small', right: 'left++' },
                { left: 'sum too large', right: 'right--' },
                { left: 'sum equal', right: 'record + move both' },
                { left: 'duplicate at left', right: 'skip with while' }
              ] },
            { type: 'output-predict', prompt: 'What does this return for arr=[1,2,3,4,6], target=6?',
              code: `<span class="kw">int</span> l = <span class="num">0</span>, r = <span class="num">4</span>;
<span class="kw">while</span> (l < r) {
  <span class="kw">int</span> s = arr[l] + arr[r];
  <span class="kw">if</span> (s == <span class="num">6</span>) <span class="kw">return new int</span>[]{l, r};
  <span class="kw">if</span> (s < <span class="num">6</span>) l++; <span class="kw">else</span> r--;
}`,
              options: ['[0,4]', '[1,3]', '[2,3]', 'no match'],
              correct: 1, explanation: 'arr[1]+arr[3] = 2+4 = 6. Pointers land on indices 1 and 3.' },
            { type: 'tap-tokens', prompt: 'Build the loop header for two pointers from both ends:',
              tokens: ['while', '(', 'left', '<', 'right', ')', 'left', '>', 'right'],
              correctOrder: ['while', '(', 'left', '<', 'right', ')'],
              explanation: 'Standard two-pointer loop runs while the pointers haven\'t crossed.' }
          ]
        },
        {
          id: 'lcp-u1-l2', name: '3Sum and duplicates', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: '3Sum: fix one, two-pointer the rest', content: `<p>Pattern: <strong>sort, then for each anchor i, two-pointer on the rest</strong>. Total: O(n²) instead of O(n³).</p>
<div class="code-block">Arrays.<span class="fn">sort</span>(nums);
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < nums.length - <span class="num">2</span>; i++) {
  <span class="kw">if</span> (i > <span class="num">0</span> && nums[i] == nums[i-<span class="num">1</span>]) <span class="kw">continue</span>;   <span class="com">// skip dup anchor</span>
  <span class="kw">int</span> l = i + <span class="num">1</span>, r = nums.length - <span class="num">1</span>;
  <span class="kw">while</span> (l < r) {
    <span class="kw">int</span> sum = nums[i] + nums[l] + nums[r];
    <span class="kw">if</span> (sum == <span class="num">0</span>) {
      result.<span class="fn">add</span>(List.<span class="fn">of</span>(nums[i], nums[l], nums[r]));
      <span class="kw">while</span> (l < r && nums[l] == nums[l+<span class="num">1</span>]) l++;
      <span class="kw">while</span> (l < r && nums[r] == nums[r-<span class="num">1</span>]) r--;
      l++; r--;
    } <span class="kw">else if</span> (sum < <span class="num">0</span>) l++;
    <span class="kw">else</span> r--;
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'Time complexity of 3Sum with the two-pointer technique:',
              options: [{text:'O(n)', code:false},{text:'O(n log n)', code:false},{text:'O(n²)', code:false},{text:'O(n³)', code:false}],
              correct: 2, explanation: 'O(n log n) sort + O(n²) loop = O(n²) dominates.' },
            { type: 'true-false', statement: 'Sorting is required for 3Sum because we need to skip duplicates and move pointers monotonically.', correct: true, explanation: 'Both duplicate-skipping and pointer movement rely on sorted order.' },
            { type: 'reorder-code', prompt: 'Reorder the in-place "remove duplicates from sorted array" steps:',
              lines: [
                '<span class="kw">int</span> slow = <span class="num">1</span>;',
                '<span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">1</span>; fast < n; fast++) {',
                '  <span class="kw">if</span> (nums[fast] != nums[fast - <span class="num">1</span>]) nums[slow++] = nums[fast];',
                '}',
                '<span class="kw">return</span> slow;'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Slow pointer marks the next write slot; fast scans the array.' },
            { type: 'fill-blank', prompt: 'Complete the duplicate-skip when sum is zero:',
              codeLines: [{ html: '<span class="kw">while</span> (l < r && nums[l] == nums[l+<span class="num">1</span>]) <span class="fn">_BLANK_</span>;' }],
              tokens: ['l++', 'l--', 'r++', 'r--'],
              correctAnswer: 'l++',
              explanation: 'Move past the duplicate on the left side.' },
            { type: 'output-predict', prompt: 'For sorted=[0,0,1,1,2,2], length after remove-duplicates:',
              code: `<span class="kw">int</span> slow = <span class="num">1</span>;
<span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">1</span>; fast < <span class="num">6</span>; fast++) {
  <span class="kw">if</span> (nums[fast] != nums[fast-<span class="num">1</span>]) nums[slow++] = nums[fast];
}
<span class="kw">return</span> slow;`,
              options: ['2', '3', '4', '6'],
              correct: 1, explanation: 'Three unique values: 0, 1, 2 → slow ends at 3.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Sliding Window ============== */
    {
      id: 'lcp-u2', name: 'Unit 2 · Sliding Window', description: 'Expand and contract a window over a sequence',
      lessons: [
        {
          id: 'lcp-u2-l1', name: 'Fixed-size window', icon: '🪟', xp: 15,
          challenges: [
            { type: 'concept', title: 'Fixed window: slide one in, one out', content: `<p>You need a quantity (sum, max, count) over <strong>every contiguous subarray of size k</strong>. Brute force: O(n·k). Sliding window: <strong>O(n)</strong>.</p>
<div class="code-block"><span class="com">// Max sum of any subarray of size k</span>
<span class="kw">int</span> windowSum = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < k; i++) windowSum += arr[i];
<span class="kw">int</span> best = windowSum;
<span class="kw">for</span> (<span class="kw">int</span> i = k; i < arr.length; i++) {
  windowSum += arr[i] - arr[i - k];   <span class="com">// add new, drop old</span>
  best = Math.<span class="fn">max</span>(best, windowSum);
}
<span class="kw">return</span> best;</div>
<p>The trick: reuse the previous window's value instead of recomputing.</p>` },
            { type: 'multiple-choice', prompt: 'What makes the fixed-size window O(n) instead of O(n·k)?',
              options: [{text:'Sorting first', code:false},{text:'Reusing the previous sum: subtract leaving element, add entering element', code:false},{text:'Binary search', code:false},{text:'Recursion', code:false}],
              correct: 1, explanation: 'You don\'t recompute the whole window — just adjust by the two changing elements.' },
            { type: 'output-predict', prompt: 'For arr=[2,1,5,1,3,2], k=3 — max window sum?',
              code: `<span class="com">// Windows: [2,1,5]=8 [1,5,1]=7 [5,1,3]=9 [1,3,2]=6</span>`,
              options: ['7', '8', '9', '11'],
              correct: 2, explanation: 'Window [5,1,3] sums to 9.' },
            { type: 'tap-tokens', prompt: 'Build the slide-update step:',
              tokens: ['windowSum', '+=', 'arr[i]', '-', 'arr[i', '-', 'k]', ';', '++', '--'],
              correctOrder: ['windowSum', '+=', 'arr[i]', '-', 'arr[i', '-', 'k]', ';'],
              explanation: 'Add the entering element, subtract the leaving element.' },
            { type: 'true-false', statement: 'A sliding window can only work on numeric arrays.', correct: false, explanation: 'It also works for strings (chars), object streams, anything contiguous and indexable.' }
          ]
        },
        {
          id: 'lcp-u2-l2', name: 'Dynamic window', icon: '🌊', xp: 20,
          challenges: [
            { type: 'concept', title: 'Variable window: grow until invalid, then shrink', content: `<p>When the window size <strong>depends on a condition</strong> (e.g., "longest substring with no repeating chars"), use two pointers + a frequency map.</p>
<div class="code-block"><span class="com">// Longest substring without repeating characters</span>
Map<<span class="ty">Character</span>, <span class="ty">Integer</span>> count = <span class="kw">new</span> <span class="ty">HashMap</span><>();
<span class="kw">int</span> left = <span class="num">0</span>, best = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> right = <span class="num">0</span>; right < s.length(); right++) {
  <span class="kw">char</span> c = s.<span class="fn">charAt</span>(right);
  count.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);
  <span class="kw">while</span> (count.<span class="fn">get</span>(c) > <span class="num">1</span>) {     <span class="com">// invalid → shrink</span>
    <span class="kw">char</span> lc = s.<span class="fn">charAt</span>(left++);
    count.<span class="fn">merge</span>(lc, -<span class="num">1</span>, <span class="ty">Integer</span>::sum);
  }
  best = Math.<span class="fn">max</span>(best, right - left + <span class="num">1</span>);
}</div>
<p>Right pointer always advances. Left pointer only advances when the window becomes invalid. Each element enters and leaves at most once → <strong>O(n)</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'In a dynamic sliding window, the LEFT pointer:',
              options: [{text:'Moves on every iteration', code:false},{text:'Only moves when the window becomes invalid', code:false},{text:'Decreases over time', code:false},{text:'Stays put', code:false}],
              correct: 1, explanation: 'Right always advances. Left advances only to restore validity.' },
            { type: 'output-predict', prompt: 'Longest substring without repeats for "abcabcbb":',
              code: `<span class="com">// "abc" works, "abca" has dup → shrink, etc.</span>`,
              options: ['2', '3', '4', '8'],
              correct: 1, explanation: '"abc" is the longest, length 3.' },
            { type: 'reorder-code', prompt: 'Reorder the dynamic-window loop body:',
              lines: [
                '<span class="kw">char</span> c = s.<span class="fn">charAt</span>(right);',
                'count.<span class="fn">merge</span>(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);',
                '<span class="kw">while</span> (count.<span class="fn">get</span>(c) > <span class="num">1</span>) shrink(left++);',
                'best = Math.<span class="fn">max</span>(best, right - left + <span class="num">1</span>);'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'true-false', statement: 'Sliding window with grow/shrink is amortized O(n) even though there are nested loops.', correct: true, explanation: 'Each element enters once and leaves once across the whole run.' },
            { type: 'match-pairs', prompt: 'Problem → window variant.', leftLabel: 'Problem', rightLabel: 'Variant',
              pairs: [
                { left: 'Max sum of size k', right: 'Fixed window' },
                { left: 'Longest no-repeat substring', right: 'Dynamic window' },
                { left: 'Smallest subarray sum ≥ S', right: 'Dynamic window' },
                { left: 'Average of size k', right: 'Fixed window' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Fast & Slow Pointers ============== */
    {
      id: 'lcp-u3', name: 'Unit 3 · Fast & Slow Pointers', description: 'The tortoise and hare',
      lessons: [
        {
          id: 'lcp-u3-l1', name: 'Cycle detection', icon: '🐢', xp: 20,
          challenges: [
            { type: 'concept', title: 'Floyd\'s tortoise and hare', content: `<p>Two pointers on the same structure, one twice as fast. If there\'s a cycle, the fast one laps the slow one and they collide.</p>
<div class="code-block"><span class="com">// Linked list cycle detection</span>
<span class="ty">ListNode</span> slow = head, fast = head;
<span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
  slow = slow.next;
  fast = fast.next.next;
  <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
}
<span class="kw">return false</span>;</div>
<p><strong>Why it works:</strong> in a cycle, fast gains 1 on slow per step. Eventually the gap shrinks to 0.</p>
<p><strong>Uses:</strong> cycle detection, middle of linked list, happy number, palindrome linked list.</p>` },
            { type: 'multiple-choice', prompt: 'In Floyd\'s algorithm, the fast pointer moves:',
              options: [{text:'One step at a time', code:false},{text:'Two steps at a time', code:false},{text:'Backward', code:false},{text:'Random number of steps', code:false}],
              correct: 1, explanation: 'Two steps per iteration is the standard speed.' },
            { type: 'true-false', statement: 'If a linked list has no cycle, fast eventually reaches null.', correct: true, explanation: 'No cycle means fast falls off the end.' },
            { type: 'output-predict', prompt: 'For 1→2→3→4→5 (no cycle), what does cycle-detect return?',
              code: `<span class="ty">ListNode</span> s = head, f = head;
<span class="kw">while</span> (f != <span class="kw">null</span> && f.next != <span class="kw">null</span>) {
  s = s.next; f = f.next.next;
  <span class="kw">if</span> (s == f) <span class="kw">return true</span>;
}
<span class="kw">return false</span>;`,
              options: ['true', 'false', 'null', 'error'],
              correct: 1, explanation: 'No cycle → fast hits null → loop exits → return false.' },
            { type: 'tap-tokens', prompt: 'Build the slow-step:',
              tokens: ['slow', '=', 'slow', '.', 'next', '.', 'next', ';'],
              correctOrder: ['slow', '=', 'slow', '.', 'next', ';'],
              explanation: 'Slow moves one node at a time.' }
          ]
        },
        {
          id: 'lcp-u3-l2', name: 'Middle of list & happy number', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: 'Same trick, different domains', content: `<div class="code-block"><span class="com">// Middle of a linked list — when fast hits end, slow is at middle</span>
<span class="ty">ListNode</span> slow = head, fast = head;
<span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
  slow = slow.next;
  fast = fast.next.next;
}
<span class="kw">return</span> slow;

<span class="com">// Happy number — replace n with sum of squared digits; cycle? not happy.</span>
<span class="kw">int</span> slow = n, fast = n;
<span class="kw">do</span> {
  slow = sq(slow);
  fast = sq(sq(fast));
} <span class="kw">while</span> (slow != fast);
<span class="kw">return</span> slow == <span class="num">1</span>;</div>` },
            { type: 'multiple-choice', prompt: 'Finding the middle of a linked list with fast/slow is:',
              options: [{text:'O(n) time, O(1) space', code:false},{text:'O(n) time, O(n) space', code:false},{text:'O(log n) time', code:false},{text:'O(n²)', code:false}],
              correct: 0, explanation: 'One pass, constant extra memory — better than counting + re-traversing.' },
            { type: 'true-false', statement: 'A "happy number" terminates at 1; otherwise the digit-square sequence cycles.', correct: true, explanation: 'It\'s essentially cycle detection on a function applied repeatedly.' },
            { type: 'fill-blank', prompt: 'Standard fast-pointer update:',
              codeLines: [{ html: 'fast = fast.next.<span class="fn">_BLANK_</span>;' }],
              tokens: ['next', 'prev', 'val', 'head'],
              correctAnswer: 'next',
              explanation: 'Two next hops per iteration.' },
            { type: 'match-pairs', prompt: 'Problem → fast/slow application.', leftLabel: 'Problem', rightLabel: 'Use',
              pairs: [
                { left: 'Has cycle?', right: 'Detect collision' },
                { left: 'Middle node', right: 'Slow when fast ends' },
                { left: 'Happy number', right: 'Cycle on f(n)' },
                { left: 'Palindrome LL', right: 'Find middle + reverse half' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Merge Intervals ============== */
    {
      id: 'lcp-u4', name: 'Unit 4 · Merge Intervals', description: 'Sort by start, then sweep',
      lessons: [
        {
          id: 'lcp-u4-l1', name: 'Overlap and merge', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two intervals overlap when a.start ≤ b.end AND b.start ≤ a.end', content: `<p>Sort intervals by start. Walk through, merging when the current one overlaps the previous.</p>
<div class="code-block">Arrays.<span class="fn">sort</span>(ints, (a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);
List<<span class="ty">int</span>[]> result = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
<span class="kw">for</span> (<span class="kw">int</span>[] cur : ints) {
  <span class="kw">if</span> (result.<span class="fn">isEmpty</span>() || result.<span class="fn">get</span>(result.size() - <span class="num">1</span>)[<span class="num">1</span>] < cur[<span class="num">0</span>]) {
    result.<span class="fn">add</span>(cur);
  } <span class="kw">else</span> {
    result.<span class="fn">get</span>(result.size() - <span class="num">1</span>)[<span class="num">1</span>] =
        Math.<span class="fn">max</span>(result.<span class="fn">get</span>(result.size() - <span class="num">1</span>)[<span class="num">1</span>], cur[<span class="num">1</span>]);
  }
}</div>
<p>Time: O(n log n) for sort, O(n) for merge.</p>` },
            { type: 'multiple-choice', prompt: 'Two intervals [a,b] and [c,d] overlap when:',
              options: [{text:'a < c AND b < d', code:false},{text:'a ≤ d AND c ≤ b', code:false},{text:'a == c', code:false},{text:'They share exactly one element', code:false}],
              correct: 1, explanation: 'Each starts before the other ends.' },
            { type: 'output-predict', prompt: 'Merge [[1,3],[2,6],[8,10],[15,18]]:',
              code: `<span class="com">// Sort, then merge overlapping pairs.</span>`,
              options: ['[[1,6],[8,10],[15,18]]', '[[1,10],[15,18]]', '[[1,3],[2,6],[8,18]]', '[[1,18]]'],
              correct: 0, explanation: '[1,3] and [2,6] merge to [1,6]; the rest stand alone.' },
            { type: 'reorder-code', prompt: 'Reorder the merge-intervals algorithm:',
              lines: [
                'Arrays.<span class="fn">sort</span>(ints, (a, b) -> a[<span class="num">0</span>] - b[<span class="num">0</span>]);',
                '<span class="kw">for</span> (<span class="kw">int</span>[] cur : ints) {',
                '  <span class="kw">if</span> (overlapsLast(cur)) extendLast(cur);',
                '  <span class="kw">else</span> result.<span class="fn">add</span>(cur);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Sort first, then single-pass merge.' },
            { type: 'true-false', statement: 'Without sorting, merging intervals in one pass is impossible in general.', correct: true, explanation: 'Without order you might miss overlaps that aren\'t adjacent in input.' },
            { type: 'match-pairs', prompt: 'Problem → interval pattern.', leftLabel: 'Problem', rightLabel: 'Technique',
              pairs: [
                { left: 'Merge Intervals', right: 'Sort + sweep' },
                { left: 'Insert Interval', right: 'Three-phase walk' },
                { left: 'Meeting Rooms II', right: 'Min-heap of end times' },
                { left: 'Non-overlapping Count', right: 'Sort by end, greedy keep' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Cyclic Sort ============== */
    {
      id: 'lcp-u5', name: 'Unit 5 · Cyclic Sort', description: 'Put each number in its index',
      lessons: [
        {
          id: 'lcp-u5-l1', name: 'Index = value', icon: '🔄', xp: 20,
          challenges: [
            { type: 'concept', title: 'When values lie in a known range [0..n] or [1..n]', content: `<p>If you have <strong>n+1 numbers in range [0..n]</strong> (or n numbers in [1..n]), you can sort in O(n) and O(1) extra space.</p>
<div class="code-block"><span class="kw">int</span> i = <span class="num">0</span>;
<span class="kw">while</span> (i < nums.length) {
  <span class="kw">int</span> correct = nums[i] - <span class="num">1</span>;     <span class="com">// for [1..n] range</span>
  <span class="kw">if</span> (nums[i] != nums[correct]) {
    <span class="kw">int</span> tmp = nums[i];
    nums[i] = nums[correct];
    nums[correct] = tmp;
  } <span class="kw">else</span> {
    i++;
  }
}</div>
<p>After cyclic sort, the first index where <code>nums[i] != i+1</code> reveals the missing/duplicate number.</p>` },
            { type: 'multiple-choice', prompt: 'Cyclic sort\'s time and space are:',
              options: [{text:'O(n log n) / O(n)', code:false},{text:'O(n) / O(1)', code:false},{text:'O(n²) / O(1)', code:false},{text:'O(n) / O(n)', code:false}],
              correct: 1, explanation: 'Each swap places at least one element correctly. n elements → at most n swaps.' },
            { type: 'true-false', statement: 'Cyclic sort works on any integer array.', correct: false, explanation: 'It requires the values to lie in a known compact range like [0..n] or [1..n].' },
            { type: 'output-predict', prompt: 'After cyclic sort on [3,1,5,4,2]:',
              code: `<span class="com">// Values 1..5, length 5 — perfect for cyclic sort.</span>`,
              options: ['[1,2,3,4,5]', '[3,1,5,4,2]', '[5,4,3,2,1]', '[1,1,1,1,1]'],
              correct: 0, explanation: 'Each number lands at index value-1.' },
            { type: 'fill-blank', prompt: 'Find the missing number — first index where nums[i] != i+1:',
              codeLines: [{ html: '<span class="kw">if</span> (nums[i] != i + <span class="num">1</span>) <span class="kw">return</span> <span class="fn">_BLANK_</span>;' }],
              tokens: ['i + 1', 'i', 'nums[i]', '0'],
              correctAnswer: 'i + 1',
              explanation: 'The slot says "missing"; the missing value is i+1 (in 1-based form).' },
            { type: 'match-pairs', prompt: 'Problem → after cyclic sort, check:', leftLabel: 'Problem', rightLabel: 'Check',
              pairs: [
                { left: 'Missing Number', right: 'First index where nums[i] != i' },
                { left: 'Find Duplicate', right: 'nums[i] == nums[correct]' },
                { left: 'Find All Missing', right: 'All indices where nums[i] != i+1' },
                { left: 'First Missing Positive', right: 'First i where nums[i] != i+1' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — In-place LL Reversal ============== */
    {
      id: 'lcp-u6', name: 'Unit 6 · In-place Linked List Reversal', description: 'Flip pointers without extra memory',
      lessons: [
        {
          id: 'lcp-u6-l1', name: 'The three-pointer dance', icon: '↩️', xp: 25,
          challenges: [
            { type: 'concept', title: 'prev, curr, next', content: `<p>Reverse a singly-linked list by walking through and flipping each <code>next</code> pointer backward.</p>
<div class="code-block"><span class="ty">ListNode</span> prev = <span class="kw">null</span>, curr = head;
<span class="kw">while</span> (curr != <span class="kw">null</span>) {
  <span class="ty">ListNode</span> next = curr.next;   <span class="com">// save</span>
  curr.next = prev;              <span class="com">// flip</span>
  prev = curr;                   <span class="com">// advance prev</span>
  curr = next;                   <span class="com">// advance curr</span>
}
<span class="kw">return</span> prev;                   <span class="com">// new head</span></div>
<p>Time O(n), space O(1).</p>` },
            { type: 'multiple-choice', prompt: 'After reversing a singly-linked list, the new head is:',
              options: [{text:'The old head', code:false},{text:'The old tail', code:false},{text:'The middle node', code:false},{text:'null', code:false}],
              correct: 1, explanation: 'Reversal turns the last node into the first.' },
            { type: 'reorder-code', prompt: 'Order the four lines inside the reversal loop:',
              lines: [
                '<span class="ty">ListNode</span> next = curr.next;',
                'curr.next = prev;',
                'prev = curr;',
                'curr = next;'
              ],
              correctOrder: [0, 1, 2, 3],
              explanation: 'Save next, flip pointer, advance both pointers.' },
            { type: 'true-false', statement: 'The reversal trick uses extra O(n) memory because of recursion.', correct: false, explanation: 'The iterative version is O(1) extra. Recursion would add O(n) stack space.' },
            { type: 'output-predict', prompt: 'Reverse 1→2→3 — what\'s printed walking from the returned node?',
              code: `<span class="com">// reverse() returns new head; print val while walking next</span>`,
              options: ['1 2 3', '3 2 1', '2 1 3', '1 3 2'],
              correct: 1, explanation: 'Reversed list is 3→2→1.' },
            { type: 'tap-tokens', prompt: 'Build the pointer flip:',
              tokens: ['curr', '.', 'next', '=', 'prev', ';', 'next', 'curr'],
              correctOrder: ['curr', '.', 'next', '=', 'prev', ';'],
              explanation: 'Make curr point backward to prev.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Tree BFS ============== */
    {
      id: 'lcp-u7', name: 'Unit 7 · Tree BFS', description: 'Level-by-level with a queue',
      lessons: [
        {
          id: 'lcp-u7-l1', name: 'Level order traversal', icon: '🌳', xp: 20,
          challenges: [
            { type: 'concept', title: 'Queue + level loop', content: `<p>Use a queue. Each outer iteration peels off one whole level.</p>
<div class="code-block">Queue<<span class="ty">TreeNode</span>> q = <span class="kw">new</span> <span class="ty">LinkedList</span><>();
q.<span class="fn">offer</span>(root);
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
  <span class="kw">int</span> size = q.<span class="fn">size</span>();
  List<<span class="ty">Integer</span>> level = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {
    <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();
    level.<span class="fn">add</span>(n.val);
    <span class="kw">if</span> (n.left != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);
    <span class="kw">if</span> (n.right != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.right);
  }
  result.<span class="fn">add</span>(level);
}</div>
<p>The <code>int size = q.size()</code> snapshot is the key — it fixes how many nodes belong to the current level.</p>` },
            { type: 'multiple-choice', prompt: 'Why snapshot the queue size at the start of each level?',
              options: [{text:'For O(1) lookup', code:false},{text:'To know exactly how many nodes belong to the current level before we add the next', code:false},{text:'To avoid mutation bugs', code:false},{text:'For thread safety', code:false}],
              correct: 1, explanation: 'Without snapshot, the loop would consume the next level too.' },
            { type: 'true-false', statement: 'BFS with a queue can do level order, zigzag, right-side view, and average-of-levels.', correct: true, explanation: 'All variants reuse the same skeleton.' },
            { type: 'match-pairs', prompt: 'Problem → BFS tweak.', leftLabel: 'Problem', rightLabel: 'Tweak',
              pairs: [
                { left: 'Level Order', right: 'Append level list each round' },
                { left: 'Zigzag', right: 'Alternate insert at head/tail' },
                { left: 'Right Side View', right: 'Keep last node of each level' },
                { left: 'Level Averages', right: 'Sum / level size' }
              ] },
            { type: 'output-predict', prompt: 'Right-side view of   1\\n   / \\\\\\n  2   3\\n   \\\\   \\\\\\n    5   4',
              code: `<span class="com">// At each level, keep the last node visited.</span>`,
              options: ['[1,2,5]', '[1,3,4]', '[1,2,3,4,5]', '[5,4,3,2,1]'],
              correct: 1, explanation: 'Rightmost per level: 1, 3, 4.' },
            { type: 'reorder-code', prompt: 'Reorder a BFS iteration:',
              lines: [
                '<span class="kw">int</span> size = q.<span class="fn">size</span>();',
                '<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < size; i++) {',
                '  <span class="ty">TreeNode</span> n = q.<span class="fn">poll</span>();',
                '  <span class="kw">if</span> (n.left != <span class="kw">null</span>) q.<span class="fn">offer</span>(n.left);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Tree DFS ============== */
    {
      id: 'lcp-u8', name: 'Unit 8 · Tree DFS', description: 'Recursion and path tracking',
      lessons: [
        {
          id: 'lcp-u8-l1', name: 'Path Sum, Diameter, All Paths', icon: '🌲', xp: 25,
          challenges: [
            { type: 'concept', title: 'Recurse, accumulate, backtrack', content: `<p>Tree DFS is just <strong>recursion</strong>. The trick is what you carry down (path so far) and what you return up (sub-result).</p>
<div class="code-block"><span class="com">// Path sum — does any root-to-leaf path sum to target?</span>
<span class="kw">boolean</span> <span class="fn">hasPathSum</span>(<span class="ty">TreeNode</span> root, <span class="ty">int</span> target) {
  <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return false</span>;
  <span class="kw">if</span> (root.left == <span class="kw">null</span> && root.right == <span class="kw">null</span>)
    <span class="kw">return</span> target == root.val;
  <span class="kw">return</span> <span class="fn">hasPathSum</span>(root.left,  target - root.val)
      || <span class="fn">hasPathSum</span>(root.right, target - root.val);
}

<span class="com">// Diameter — longest path THROUGH any node</span>
<span class="kw">int</span> diameter = <span class="num">0</span>;
<span class="kw">int</span> <span class="fn">depth</span>(<span class="ty">TreeNode</span> n) {
  <span class="kw">if</span> (n == <span class="kw">null</span>) <span class="kw">return</span> <span class="num">0</span>;
  <span class="kw">int</span> l = <span class="fn">depth</span>(n.left), r = <span class="fn">depth</span>(n.right);
  diameter = Math.<span class="fn">max</span>(diameter, l + r);
  <span class="kw">return</span> <span class="num">1</span> + Math.<span class="fn">max</span>(l, r);
}</div>` },
            { type: 'multiple-choice', prompt: 'In tree DFS, "backtracking" usually means:',
              options: [{text:'Going back to the root', code:false},{text:'Undoing the change to the path before returning', code:false},{text:'Restarting the search', code:false},{text:'Pruning the tree', code:false}],
              correct: 1, explanation: 'After exploring a branch, remove the current node from the path so the next branch sees a clean state.' },
            { type: 'true-false', statement: 'For "all root-to-leaf paths", you typically pass a mutable list and add/remove around the recursive calls.', correct: true, explanation: 'Add → recurse left/right → remove. Classic backtracking.' },
            { type: 'output-predict', prompt: 'Diameter of   1\\n   / \\\\\\n  2   3\\n / \\\\\\n4   5',
              code: `<span class="com">// Longest path through any node, counted in edges.</span>`,
              options: ['2', '3', '4', '5'],
              correct: 1, explanation: 'Path 4 → 2 → 5 has 2 edges; 4 → 2 → 1 → 3 has 3 edges.' },
            { type: 'fill-blank', prompt: 'Base case for tree recursion:',
              codeLines: [{ html: '<span class="kw">if</span> (root == <span class="fn">_BLANK_</span>) <span class="kw">return</span> <span class="num">0</span>;' }],
              tokens: ['null', '0', 'root.left', 'leaf'],
              correctAnswer: 'null',
              explanation: 'Empty tree → return zero / nothing.' },
            { type: 'reorder-code', prompt: 'Reorder a backtracking helper:',
              lines: [
                'path.<span class="fn">add</span>(node.val);',
                '<span class="kw">if</span> (isLeaf(node)) result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>(path));',
                'helper(node.left, path, result);',
                'helper(node.right, path, result);',
                'path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Add → record-if-leaf → recurse children → remove on backtrack.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Two Heaps ============== */
    {
      id: 'lcp-u9', name: 'Unit 9 · Two Heaps', description: 'Track the median of a stream',
      lessons: [
        {
          id: 'lcp-u9-l1', name: 'Median in a stream', icon: '⚖️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Max-heap of low half · min-heap of high half', content: `<p>To know the median of a growing stream of numbers, keep two heaps balanced so the smaller half ends at the top of one heap and the larger half starts at the top of the other.</p>
<div class="code-block"><span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> lo = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(Comparator.<span class="fn">reverseOrder</span>());  <span class="com">// max-heap</span>
<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> hi = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();                              <span class="com">// min-heap</span>

<span class="kw">void</span> <span class="fn">add</span>(<span class="ty">int</span> n) {
  lo.<span class="fn">offer</span>(n);
  hi.<span class="fn">offer</span>(lo.<span class="fn">poll</span>());           <span class="com">// rebalance: largest of lo → hi</span>
  <span class="kw">if</span> (hi.<span class="fn">size</span>() > lo.<span class="fn">size</span>())
    lo.<span class="fn">offer</span>(hi.<span class="fn">poll</span>());         <span class="com">// keep lo same size or +1</span>
}

<span class="kw">double</span> <span class="fn">median</span>() {
  <span class="kw">return</span> lo.<span class="fn">size</span>() > hi.<span class="fn">size</span>()
    ? lo.<span class="fn">peek</span>()
    : (lo.<span class="fn">peek</span>() + hi.<span class="fn">peek</span>()) / <span class="num">2.0</span>;
}</div>
<p>Each add is O(log n). Median lookup is O(1).</p>` },
            { type: 'multiple-choice', prompt: 'Why two heaps instead of a sorted list for streaming median?',
              options: [{text:'Heaps use less memory', code:false},{text:'Inserts are O(log n); a sorted list insert is O(n)', code:false},{text:'They\'re thread-safe', code:false},{text:'They\'re sorted', code:false}],
              correct: 1, explanation: 'Heaps give log-n inserts; finding median is just a peek.' },
            { type: 'true-false', statement: 'The max-heap holds the smaller half of values seen so far.', correct: true, explanation: 'Its peek is the largest of the small half — half the median.' },
            { type: 'output-predict', prompt: 'After adding 1, 2, 3, 4 in order, median is:',
              code: `<span class="com">// lo holds {2,1}, hi holds {3,4} after rebalance.</span>`,
              options: ['1', '2', '2.5', '3'],
              correct: 2, explanation: '(2 + 3) / 2 = 2.5.' },
            { type: 'match-pairs', prompt: 'Heap → role.', leftLabel: 'Heap', rightLabel: 'Holds',
              pairs: [
                { left: 'Max-heap', right: 'Smaller half (top = largest small)' },
                { left: 'Min-heap', right: 'Larger half (top = smallest large)' },
                { left: 'Sizes equal', right: 'Median = avg of two tops' },
                { left: 'Max-heap one bigger', right: 'Median = max-heap top' }
              ] },
            { type: 'fill-blank', prompt: 'Rebalance step — move max of lo into hi:',
              codeLines: [{ html: 'hi.<span class="fn">offer</span>(lo.<span class="fn">_BLANK_</span>());' }],
              tokens: ['poll', 'peek', 'offer', 'size'],
              correctAnswer: 'poll',
              explanation: 'Pop the top of lo and push it into hi.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Subsets & Backtracking ============== */
    {
      id: 'lcp-u10', name: 'Unit 10 · Subsets & Backtracking', description: 'Explore, choose, unchoose',
      lessons: [
        {
          id: 'lcp-u10-l1', name: 'Subsets, permutations, combinations', icon: '🎲', xp: 25,
          challenges: [
            { type: 'concept', title: 'The choose-explore-unchoose template', content: `<div class="code-block"><span class="kw">void</span> <span class="fn">backtrack</span>(start, path) {
  result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">ArrayList</span><>(path));    <span class="com">// snapshot</span>
  <span class="kw">for</span> (<span class="kw">int</span> i = start; i < n; i++) {
    path.<span class="fn">add</span>(nums[i]);                  <span class="com">// choose</span>
    <span class="fn">backtrack</span>(i + <span class="num">1</span>, path);             <span class="com">// explore</span>
    path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);     <span class="com">// unchoose</span>
  }
}</div>
<p><strong>Variants:</strong></p>
<ul>
<li><strong>Subsets</strong> — add path at every node, start at i+1</li>
<li><strong>Permutations</strong> — used[] flags, start over each call</li>
<li><strong>Combinations C(n,k)</strong> — record only when path.size() == k</li>
<li><strong>N-Queens</strong> — column/diagonal sets, board state</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Total subsets of an n-element set:',
              options: [{text:'n', code:false},{text:'n²', code:false},{text:'2^n', code:false},{text:'n!', code:false}],
              correct: 2, explanation: 'Each element is independently in or out.' },
            { type: 'multiple-choice', prompt: 'Permutations of n distinct elements:',
              options: [{text:'n', code:false},{text:'2^n', code:false},{text:'n!', code:false},{text:'n²', code:false}],
              correct: 2, explanation: 'n choices for first, n-1 for next, ...' },
            { type: 'true-false', statement: 'Backtracking prunes early when partial state can\'t possibly lead to a valid full solution.', correct: true, explanation: 'Early termination is what makes backtracking faster than brute force.' },
            { type: 'reorder-code', prompt: 'Order the choose-explore-unchoose lines:',
              lines: [
                'path.<span class="fn">add</span>(nums[i]);',
                '<span class="fn">backtrack</span>(i + <span class="num">1</span>, path);',
                'path.<span class="fn">remove</span>(path.size() - <span class="num">1</span>);'
              ],
              correctOrder: [0, 1, 2],
              explanation: 'Choose, recurse, then undo before trying the next i.' },
            { type: 'output-predict', prompt: 'How many subsets of [1,2,3]?',
              code: `<span class="com">// Every element either in or out → 2 × 2 × 2.</span>`,
              options: ['3', '6', '8', '9'],
              correct: 2, explanation: '2^3 = 8 subsets, including the empty set.' },
            { type: 'tap-tokens', prompt: 'Build the "snapshot path into result" line:',
              tokens: ['result', '.', 'add', '(', 'new', 'ArrayList', '<', '>', '(', 'path', ')', ')', ';'],
              correctOrder: ['result', '.', 'add', '(', 'new', 'ArrayList', '<', '>', '(', 'path', ')', ')', ';'],
              explanation: 'Always copy the path — it gets mutated.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Modified Binary Search ============== */
    {
      id: 'lcp-u11', name: 'Unit 11 · Modified Binary Search', description: 'Search the answer, not just the value',
      lessons: [
        {
          id: 'lcp-u11-l1', name: 'Beyond the standard search', icon: '🔍', xp: 25,
          challenges: [
            { type: 'concept', title: 'Find a condition boundary in O(log n)', content: `<p>Binary search is more general than "find this value in a sorted array". It finds the <strong>boundary between "no" and "yes"</strong> on any monotonic predicate.</p>
<div class="code-block"><span class="com">// Search in rotated sorted array</span>
<span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>;
<span class="kw">while</span> (lo <= hi) {
  <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;
  <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;
  <span class="kw">if</span> (nums[lo] <= nums[mid]) {           <span class="com">// left half sorted</span>
    <span class="kw">if</span> (nums[lo] <= target && target < nums[mid]) hi = mid - <span class="num">1</span>;
    <span class="kw">else</span> lo = mid + <span class="num">1</span>;
  } <span class="kw">else</span> {                                <span class="com">// right half sorted</span>
    <span class="kw">if</span> (nums[mid] < target && target <= nums[hi]) lo = mid + <span class="num">1</span>;
    <span class="kw">else</span> hi = mid - <span class="num">1</span>;
  }
}
<span class="kw">return</span> -<span class="num">1</span>;</div>` },
            { type: 'multiple-choice', prompt: 'Why <code>mid = lo + (hi - lo) / 2</code> instead of <code>(lo + hi) / 2</code>?',
              options: [{text:'It\'s faster', code:false},{text:'It avoids integer overflow when lo + hi is huge', code:false},{text:'It\'s closer to lo', code:false},{text:'Just style', code:false}],
              correct: 1, explanation: 'For large lo/hi, lo+hi can overflow int. The difference version stays safe.' },
            { type: 'true-false', statement: 'Binary search works whenever there\'s a monotonic predicate, even if the array isn\'t fully sorted.', correct: true, explanation: 'Like "first bad version" — sorted = false...false...true...true.' },
            { type: 'output-predict', prompt: 'Search 0 in [4,5,6,7,0,1,2]:',
              code: `<span class="com">// Rotated sorted; binary search variant.</span>`,
              options: ['0', '4', '7', '-1'],
              correct: 1, explanation: 'Value 0 lives at index 4.' },
            { type: 'match-pairs', prompt: 'Problem → binary-search variant.', leftLabel: 'Problem', rightLabel: 'Trick',
              pairs: [
                { left: 'Search Rotated', right: 'Check which half is sorted' },
                { left: 'Find Peak', right: 'Compare mid with mid+1' },
                { left: 'Ceiling of x', right: 'Track smallest ≥ target' },
                { left: 'Sqrt(x)', right: 'Search answer in [1,x]' }
              ] },
            { type: 'reorder-code', prompt: 'Order a generic binary-search:',
              lines: [
                '<span class="kw">int</span> lo = <span class="num">0</span>, hi = nums.length - <span class="num">1</span>;',
                '<span class="kw">while</span> (lo <= hi) {',
                '  <span class="kw">int</span> mid = lo + (hi - lo) / <span class="num">2</span>;',
                '  <span class="kw">if</span> (nums[mid] == target) <span class="kw">return</span> mid;',
                '  <span class="kw">else if</span> (nums[mid] < target) lo = mid + <span class="num">1</span>;',
                '  <span class="kw">else</span> hi = mid - <span class="num">1</span>;',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6] }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Top K ============== */
    {
      id: 'lcp-u12', name: 'Unit 12 · Top K Elements', description: 'Heaps shine when you want extremes',
      lessons: [
        {
          id: 'lcp-u12-l1', name: 'Kth largest, top K frequent', icon: '🏆', xp: 20,
          challenges: [
            { type: 'concept', title: 'Min-heap of size K', content: `<p>To keep the <strong>K largest</strong> elements seen so far, use a <strong>min-heap of size K</strong>. The smallest of the top K sits at the root; anything smaller can be discarded.</p>
<div class="code-block"><span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> heap = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();   <span class="com">// min-heap</span>
<span class="kw">for</span> (<span class="kw">int</span> x : nums) {
  heap.<span class="fn">offer</span>(x);
  <span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">poll</span>();
}
<span class="kw">return</span> heap.<span class="fn">peek</span>();   <span class="com">// kth largest</span></div>
<p>Time: O(n log k). Beats full sort O(n log n) when k is small.</p>` },
            { type: 'multiple-choice', prompt: 'For "Kth largest", which heap do you use?',
              options: [{text:'Max-heap of size n', code:false},{text:'Min-heap of size k', code:false},{text:'Max-heap of size k', code:false},{text:'Two heaps', code:false}],
              correct: 1, explanation: 'A min-heap of size k keeps only the largest k; root is the answer.' },
            { type: 'true-false', statement: 'For Top K frequent elements, the heap stores (count, value) pairs ordered by count.', correct: true, explanation: 'After building a frequency map, push pairs into a heap keyed by count.' },
            { type: 'output-predict', prompt: 'For nums=[3,2,1,5,6,4], k=2 — kth largest:',
              code: `<span class="com">// Sorted desc: 6,5,4,3,2,1; 2nd largest = 5.</span>`,
              options: ['4', '5', '6', '2'],
              correct: 1, explanation: '5 is the second largest.' },
            { type: 'fill-blank', prompt: 'Keep heap at size K:',
              codeLines: [{ html: '<span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">_BLANK_</span>();' }],
              tokens: ['poll', 'peek', 'offer', 'remove'],
              correctAnswer: 'poll',
              explanation: 'Drop the smallest so only top K remain.' },
            { type: 'reorder-code', prompt: 'Order the Kth-largest scan:',
              lines: [
                '<span class="ty">PriorityQueue</span><<span class="ty">Integer</span>> heap = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>();',
                '<span class="kw">for</span> (<span class="kw">int</span> x : nums) {',
                '  heap.<span class="fn">offer</span>(x);',
                '  <span class="kw">if</span> (heap.<span class="fn">size</span>() > k) heap.<span class="fn">poll</span>();',
                '}',
                '<span class="kw">return</span> heap.<span class="fn">peek</span>();'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — K-way Merge ============== */
    {
      id: 'lcp-u13', name: 'Unit 13 · K-way Merge', description: 'Merge sorted streams with a heap',
      lessons: [
        {
          id: 'lcp-u13-l1', name: 'Merge K sorted lists', icon: '🔀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Min-heap over the K heads', content: `<p>Maintain a min-heap with the <strong>current head of each list</strong>. Pop the smallest, append to result, push its successor.</p>
<div class="code-block"><span class="ty">PriorityQueue</span><<span class="ty">ListNode</span>> pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span><>(
    (a, b) -> a.val - b.val);
<span class="kw">for</span> (<span class="ty">ListNode</span> head : lists)
  <span class="kw">if</span> (head != <span class="kw">null</span>) pq.<span class="fn">offer</span>(head);

<span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>), tail = dummy;
<span class="kw">while</span> (!pq.<span class="fn">isEmpty</span>()) {
  <span class="ty">ListNode</span> n = pq.<span class="fn">poll</span>();
  tail.next = n; tail = n;
  <span class="kw">if</span> (n.next != <span class="kw">null</span>) pq.<span class="fn">offer</span>(n.next);
}
<span class="kw">return</span> dummy.next;</div>
<p>Time: O(N log K), where N is total elements, K is number of lists.</p>` },
            { type: 'multiple-choice', prompt: 'Time to merge K sorted lists with N total elements via heap:',
              options: [{text:'O(NK)', code:false},{text:'O(N log K)', code:false},{text:'O(N log N)', code:false},{text:'O(N²)', code:false}],
              correct: 1, explanation: 'Each of N pops is log K work.' },
            { type: 'true-false', statement: 'K-way merge also works for arrays / iterators / streams, not just linked lists.', correct: true, explanation: 'Same template: heap of "current position per stream".' },
            { type: 'output-predict', prompt: 'Merge [[1,4,5],[1,3,4],[2,6]] — first three values output:',
              code: `<span class="com">// Heap-driven merge.</span>`,
              options: ['1, 1, 2', '1, 2, 3', '1, 1, 3', '1, 3, 4'],
              correct: 0, explanation: 'Two 1s come first, then 2.' },
            { type: 'tap-tokens', prompt: 'Build the comparator for min-heap by node.val:',
              tokens: ['(', 'a', ',', 'b', ')', '->', 'a', '.', 'val', '-', 'b', '.', 'val'],
              correctOrder: ['(', 'a', ',', 'b', ')', '->', 'a', '.', 'val', '-', 'b', '.', 'val'],
              explanation: 'Ascending: a.val - b.val.' },
            { type: 'match-pairs', prompt: 'Problem → K-way merge variant.', leftLabel: 'Problem', rightLabel: 'Use',
              pairs: [
                { left: 'Merge K sorted lists', right: 'Heap of node heads' },
                { left: 'Kth smallest across rows', right: 'Heap of row heads' },
                { left: 'Smallest range from K lists', right: 'Heap + max tracking' },
                { left: 'External sort merge', right: 'Heap of file iterators' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Topological Sort ============== */
    {
      id: 'lcp-u14', name: 'Unit 14 · Topological Sort', description: 'Order tasks with prerequisites',
      lessons: [
        {
          id: 'lcp-u14-l1', name: 'Kahn\'s algorithm', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'BFS over in-degree zero nodes', content: `<p>Topological sort produces a linear order such that for every edge u → v, u comes before v. Only possible on a <strong>DAG</strong> (directed acyclic graph).</p>
<div class="code-block"><span class="com">// Build in-degree counts</span>
<span class="ty">int</span>[] indeg = <span class="kw">new int</span>[n];
<span class="kw">for</span> (<span class="kw">int</span>[] e : edges) indeg[e[<span class="num">1</span>]]++;

Queue<<span class="ty">Integer</span>> q = <span class="kw">new</span> <span class="ty">LinkedList</span><>();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < n; i++)
  <span class="kw">if</span> (indeg[i] == <span class="num">0</span>) q.<span class="fn">offer</span>(i);

List<<span class="ty">Integer</span>> order = <span class="kw">new</span> <span class="ty">ArrayList</span><>();
<span class="kw">while</span> (!q.<span class="fn">isEmpty</span>()) {
  <span class="kw">int</span> u = q.<span class="fn">poll</span>();
  order.<span class="fn">add</span>(u);
  <span class="kw">for</span> (<span class="kw">int</span> v : adj.<span class="fn">get</span>(u))
    <span class="kw">if</span> (--indeg[v] == <span class="num">0</span>) q.<span class="fn">offer</span>(v);
}
<span class="kw">if</span> (order.<span class="fn">size</span>() < n) <span class="kw">return new int</span>[<span class="num">0</span>];   <span class="com">// cycle!</span></div>` },
            { type: 'multiple-choice', prompt: 'Topological sort is impossible when:',
              options: [{text:'Graph is empty', code:false},{text:'Graph contains a cycle', code:false},{text:'Graph is undirected', code:false},{text:'Both B and C — needs a DAG', code:false}],
              correct: 3, explanation: 'Topo order is defined only for directed acyclic graphs.' },
            { type: 'true-false', statement: 'Kahn\'s algorithm finishes with a partial order if there\'s a cycle — that\'s how you detect one.', correct: true, explanation: 'If the final order length < node count, some nodes never reached in-degree 0 = cycle.' },
            { type: 'output-predict', prompt: 'Topo order for n=4, edges=[[1,0],[2,0],[3,1],[3,2]]:',
              code: `<span class="com">// 3 must come before 1 and 2; 1 and 2 before 0.</span>`,
              options: ['[3,1,2,0]', '[0,1,2,3]', '[1,2,3,0]', '[3,0,1,2]'],
              correct: 0, explanation: '3 → 1, 2 → 0. Order [3,1,2,0] respects all edges.' },
            { type: 'match-pairs', prompt: 'Problem → topo-sort use.', leftLabel: 'Problem', rightLabel: 'Use',
              pairs: [
                { left: 'Course Schedule', right: 'Can finish? topo possible?' },
                { left: 'Course Schedule II', right: 'Return the order' },
                { left: 'Alien Dictionary', right: 'Derive letter order from words' },
                { left: 'Build Order', right: 'Order tasks with deps' }
              ] },
            { type: 'reorder-code', prompt: 'Order the steps of Kahn\'s algorithm:',
              lines: [
                'Compute in-degree for every node.',
                'Enqueue all nodes with in-degree 0.',
                'Pop u, append to order, decrement neighbors\' in-degree.',
                'If a neighbor\'s in-degree drops to 0, enqueue it.',
                'If order has fewer than n nodes, the graph has a cycle.'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Dynamic Programming ============== */
    {
      id: 'lcp-u15', name: 'Unit 15 · Dynamic Programming', description: 'Optimal substructure + overlapping subproblems',
      lessons: [
        {
          id: 'lcp-u15-l1', name: 'Fibonacci, LIS, LCS', icon: '🧠', xp: 25,
          challenges: [
            { type: 'concept', title: '1D DP: build the answer from smaller answers', content: `<p>DP applies when the answer to a problem of size n can be expressed in terms of answers to smaller sizes — and those subproblems are <em>shared</em>.</p>
<div class="code-block"><span class="com">// Fibonacci, bottom-up, O(n) time, O(1) space</span>
<span class="kw">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">2</span>; i <= n; i++) {
  <span class="kw">int</span> c = a + b;
  a = b; b = c;
}
<span class="kw">return</span> b;

<span class="com">// Climbing Stairs is the same recurrence: f(n) = f(n-1) + f(n-2)</span></div>
<div class="code-block"><span class="com">// Longest Increasing Subsequence — O(n²)</span>
<span class="kw">int</span>[] dp = <span class="kw">new int</span>[n];
Arrays.<span class="fn">fill</span>(dp, <span class="num">1</span>);
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i < n; i++)
  <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">0</span>; j < i; j++)
    <span class="kw">if</span> (nums[j] < nums[i]) dp[i] = Math.<span class="fn">max</span>(dp[i], dp[j] + <span class="num">1</span>);</div>` },
            { type: 'multiple-choice', prompt: 'DP requires:',
              options: [{text:'Recursion only', code:false},{text:'Optimal substructure AND overlapping subproblems', code:false},{text:'Sorted input', code:false},{text:'A graph', code:false}],
              correct: 1, explanation: 'Both properties together justify caching subresults.' },
            { type: 'true-false', statement: 'Top-down memoization and bottom-up tabulation give the same answer with the same complexity.', correct: true, explanation: 'They\'re two implementations of the same recurrence.' },
            { type: 'output-predict', prompt: 'LIS of [10,9,2,5,3,7,101,18]:',
              code: `<span class="com">// One of the longest: 2,3,7,101.</span>`,
              options: ['2', '3', '4', '5'],
              correct: 2, explanation: 'Length-4: [2,3,7,101] or [2,5,7,101].' },
            { type: 'reorder-code', prompt: 'Order space-optimized fib:',
              lines: [
                '<span class="kw">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>;',
                '<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">2</span>; i <= n; i++) {',
                '  <span class="kw">int</span> c = a + b;',
                '  a = b; b = c;',
                '}',
                '<span class="kw">return</span> b;'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'fill-blank', prompt: 'LCS recurrence — when chars match:',
              codeLines: [{ html: 'dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="fn">_BLANK_</span>;' }],
              tokens: ['1', '0', '2', 'i'],
              correctAnswer: '1',
              explanation: 'Matching character extends LCS by one.' }
          ]
        },
        {
          id: 'lcp-u15-l2', name: '0/1 vs unbounded knapsack', icon: '🎒', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick once vs pick many', content: `<div class="code-block"><span class="com">// 0/1 Knapsack — each item used at most ONCE</span>
<span class="kw">int</span>[] dp = <span class="kw">new int</span>[W + <span class="num">1</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < items.length; i++)
  <span class="kw">for</span> (<span class="kw">int</span> w = W; w >= weight[i]; w--)        <span class="com">// REVERSE</span>
    dp[w] = Math.<span class="fn">max</span>(dp[w], dp[w - weight[i]] + value[i]);

<span class="com">// Unbounded Knapsack — unlimited copies of each item (Coin Change)</span>
<span class="kw">int</span>[] dp2 = <span class="kw">new int</span>[W + <span class="num">1</span>];
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i < items.length; i++)
  <span class="kw">for</span> (<span class="kw">int</span> w = weight[i]; w <= W; w++)            <span class="com">// FORWARD</span>
    dp2[w] = Math.<span class="fn">max</span>(dp2[w], dp2[w - weight[i]] + value[i]);</div>
<p>The only difference is loop direction. Reverse → "can\'t re-use the item we just placed". Forward → "can re-use".</p>` },
            { type: 'multiple-choice', prompt: 'The difference between 0/1 and unbounded knapsack in 1D DP is:',
              options: [{text:'Different state', code:false},{text:'Loop direction (reverse vs forward)', code:false},{text:'Different recurrence', code:false},{text:'Different output', code:false}],
              correct: 1, explanation: 'Reverse inner loop = each item once; forward = unlimited copies.' },
            { type: 'true-false', statement: 'Coin Change ("min coins to make amount") is an unbounded-knapsack variant.', correct: true, explanation: 'Each denomination has unlimited supply.' },
            { type: 'output-predict', prompt: '0/1 knapsack with W=4, items {(w=1,v=1),(w=3,v=4),(w=4,v=5)}:',
              code: `<span class="com">// Best value within weight 4 — pick the (3,4) and (1,1) → total 5.</span>`,
              options: ['4', '5', '6', '9'],
              correct: 1, explanation: 'Items (1,1) + (3,4) fit exactly in weight 4 → value 5.' },
            { type: 'match-pairs', prompt: 'Problem → knapsack variant.', leftLabel: 'Problem', rightLabel: 'Variant',
              pairs: [
                { left: 'Partition Equal Subset Sum', right: '0/1 knapsack' },
                { left: 'Coin Change', right: 'Unbounded knapsack' },
                { left: 'Target Sum', right: '0/1 knapsack' },
                { left: 'Combination Sum IV', right: 'Unbounded (perm)' }
              ] },
            { type: 'fill-blank', prompt: '0/1 knapsack inner loop direction:',
              codeLines: [{ html: '<span class="kw">for</span> (<span class="kw">int</span> w = W; w <span class="fn">_BLANK_</span> weight[i]; w--)' }],
              tokens: ['>=', '<=', '==', '!='],
              correctAnswer: '>=',
              explanation: 'Walk from W down to weight[i].' },
            { type: 'tap-tokens', prompt: 'Build the 0/1 knapsack update:',
              tokens: ['dp[w]', '=', 'Math', '.', 'max', '(', 'dp[w]', ',', 'dp[w', '-', 'weight[i]]', '+', 'value[i]', ')', ';'],
              correctOrder: ['dp[w]', '=', 'Math', '.', 'max', '(', 'dp[w]', ',', 'dp[w', '-', 'weight[i]]', '+', 'value[i]', ')', ';'],
              explanation: 'Max of "skip item" vs "take item and add its value".' }
          ]
        }
      ]
    }

  ]
});

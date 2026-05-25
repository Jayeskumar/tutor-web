PUSH({
  id: 'gate-cs',
  name: 'GATE CS',
  icon: '🎓',
  color: '#3f51b5',
  description: 'Crack GATE Computer Science — all 10 subjects, exam-focused lessons.',
  units: [

    /* ============== UNIT 1 — Engineering Mathematics ============== */
    {
      id: 'gcs-u1',
      name: 'Unit 1 · Engineering Mathematics',
      description: 'Discrete math, linear algebra, calculus, probability',
      lessons: [
        {
          id: 'gcs-u1-l1',
          name: 'Set theory & relations',
          icon: '🔢',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Sets, relations, functions', content: `<p><strong>Set</strong>: unordered collection of distinct objects. Operations: ∪, ∩, −, complement.</p>
<p><strong>Relation</strong> on A×B: subset of A×B. A relation can be reflexive, symmetric, transitive, antisymmetric.</p>
<p><strong>Equivalence relation</strong>: reflexive + symmetric + transitive. Partitions the set into equivalence classes.</p>
<div class="code-block">|A ∪ B| = |A| + |B| − |A ∩ B|   <span class="com">// inclusion-exclusion</span>
|A × B| = |A| · |B|              <span class="com">// Cartesian product</span>
|P(A)| = 2^|A|                   <span class="com">// power set size</span></div>` },
            { type: 'multiple-choice', prompt: 'Which property makes a relation an equivalence relation?',
              options: [{text:'Reflexive + symmetric', code:false},{text:'Reflexive + symmetric + transitive', code:false},{text:'Symmetric + transitive', code:false},{text:'Antisymmetric + transitive', code:false}],
              correct: 1, explanation: 'All three together define equivalence.' },
            { type: 'output-predict', prompt: '|A| = 10, |B| = 15, |A ∩ B| = 5. Find |A ∪ B|.',
              code: `<span class="com">// Inclusion-exclusion</span>`,
              options: ['15','20','25','30'], correct: 1, explanation: '10 + 15 − 5 = 20.' },
            { type: 'type-answer', prompt: 'If |A| = 4, how many subsets does P(A) have?',
              accept: ['16','2^4'], explanation: '2^|A| = 2⁴ = 16.' },
            { type: 'true-false', statement: 'A partial order is reflexive, antisymmetric, and transitive.', correct: true, explanation: 'Yes — these three define a partial order (POSET).' }
          ]
        },
        {
          id: 'gcs-u1-l2',
          name: 'Combinatorics & graph theory',
          icon: '📊',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Counting and graphs', content: `<p><strong>Permutations</strong>: P(n,r) = n!/(n−r)!<br/>
<strong>Combinations</strong>: C(n,r) = n!/[r!(n−r)!]</p>
<p><strong>Graph</strong>: G(V,E). For undirected graph, sum of degrees = 2|E|.</p>
<p><strong>Tree</strong>: connected, no cycles. n vertices ⇒ exactly n−1 edges.</p>` },
            { type: 'multiple-choice', prompt: 'In a tree with 10 vertices, number of edges?',
              options: [{text:'9', code:false},{text:'10', code:false},{text:'11', code:false},{text:'20', code:false}],
              correct: 0, explanation: 'Tree property: |E| = |V| − 1.' },
            { type: 'output-predict', prompt: 'C(10, 3) = ?',
              code: `<span class="com">// 10! / (3! × 7!)</span>`,
              options: ['60','120','720','5040'], correct: 1, explanation: '(10·9·8)/(3·2·1) = 120.' },
            { type: 'multiple-choice', prompt: 'Sum of degrees in a graph with 5 edges?',
              options: [{text:'5', code:false},{text:'10', code:false},{text:'15', code:false},{text:'25', code:false}],
              correct: 1, explanation: 'Handshake lemma: Σdeg = 2|E| = 10.' },
            { type: 'true-false', statement: 'A graph with n vertices and (n−1) edges is always a tree.', correct: false, explanation: 'Only if it is connected — could be disconnected with a cycle.' }
          ]
        },
        {
          id: 'gcs-u1-l3',
          name: 'Linear algebra essentials',
          icon: '📐',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Matrices, determinants, eigenvalues', content: `<p><strong>Determinant</strong>: |A| ≠ 0 ⇔ A is invertible ⇔ rows linearly independent.</p>
<p><strong>Rank</strong>: number of independent rows (or columns). For Ax = b: consistent iff rank(A) = rank([A|b]).</p>
<p><strong>Eigenvalues</strong>: λ where Ax = λx. Found from det(A − λI) = 0.</p>
<div class="code-block">|A| = 0 ⇒ singular (no inverse)
trace(A) = sum of eigenvalues
det(A) = product of eigenvalues</div>` },
            { type: 'multiple-choice', prompt: 'When is matrix A invertible?',
              options: [{text:'det(A) = 0', code:false},{text:'det(A) ≠ 0', code:false},{text:'A is square', code:false},{text:'A is symmetric', code:false}],
              correct: 1, explanation: 'Non-zero determinant ⇒ invertible.' },
            { type: 'output-predict', prompt: 'Trace of a 3×3 matrix with diagonal [2, 5, 7]?',
              code: `<span class="com">// Sum of diagonal</span>`,
              options: ['14','12','35','70'], correct: 0, explanation: '2 + 5 + 7 = 14.' },
            { type: 'type-answer', prompt: 'For Ax = 0 to have non-trivial solutions, det(A) must be ___',
              accept: ['0','zero'], explanation: 'Non-trivial solutions exist iff A is singular.' },
            { type: 'true-false', statement: 'Sum of eigenvalues equals the trace of the matrix.', correct: true, explanation: 'A fundamental identity.' }
          ]
        },
        {
          id: 'gcs-u1-l4',
          name: 'Probability',
          icon: '🎲',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Probability fundamentals', content: `<p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
<p>Conditional: P(A|B) = P(A ∩ B)/P(B)</p>
<p>Bayes: P(A|B) = P(B|A)·P(A)/P(B)</p>
<p>Independence: P(A ∩ B) = P(A)·P(B)</p>
<div class="code-block">E[X]  = expected value = Σ x·P(X=x)
Var(X) = E[X²] − (E[X])²</div>` },
            { type: 'multiple-choice', prompt: 'Two fair dice rolled. P(sum = 7)?',
              options: [{text:'1/6', code:false},{text:'1/9', code:false},{text:'1/12', code:false},{text:'5/36', code:false}],
              correct: 0, explanation: '6 favorable out of 36 = 1/6.' },
            { type: 'multiple-choice', prompt: 'P(A) = 0.4, P(B) = 0.5, A and B independent. P(A ∩ B)?',
              options: [{text:'0.1', code:false},{text:'0.2', code:false},{text:'0.45', code:false},{text:'0.9', code:false}],
              correct: 1, explanation: 'Independent: P(A)·P(B) = 0.4·0.5 = 0.2.' },
            { type: 'output-predict', prompt: 'Expected value of one die roll?',
              code: `<span class="com">// (1+2+3+4+5+6)/6</span>`,
              options: ['3','3.5','4','4.5'], correct: 1, explanation: '21/6 = 3.5.' },
            { type: 'true-false', statement: 'For independent events, P(A|B) = P(A).', correct: true, explanation: 'Knowing B doesn\'t change probability of A.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Digital Logic ============== */
    {
      id: 'gcs-u2',
      name: 'Unit 2 · Digital Logic',
      description: 'Gates, circuits, number systems',
      lessons: [
        {
          id: 'gcs-u2-l1',
          name: 'Number systems & Boolean algebra',
          icon: '⚡',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Bases & binary', content: `<p>Convert between binary, octal, decimal, hex. Bases group: 2³=8, 2⁴=16.</p>
<p><strong>2\'s complement</strong>: for negative numbers in N bits. Range: −2^(N−1) to 2^(N−1) − 1.</p>
<div class="code-block">5 in 4-bit binary:     0101
-5 in 4-bit 2\'s comp:  1011 (invert + 1)</div>
<p><strong>Boolean laws:</strong> A + A\' = 1, A·A\' = 0, A + AB = A (absorption), De Morgan: (A+B)\' = A\'·B\'</p>` },
            { type: 'multiple-choice', prompt: 'Decimal 13 in binary?',
              options: [{text:'1011', code:true},{text:'1101', code:true},{text:'1110', code:true},{text:'1111', code:true}],
              correct: 1, explanation: '8+4+1 = 13 → 1101.' },
            { type: 'output-predict', prompt: 'What is (1010)₂ in decimal?',
              code: `<span class="com">// 1·8 + 0·4 + 1·2 + 0·1</span>`,
              options: ['8','10','11','12'], correct: 1, explanation: '8 + 2 = 10.' },
            { type: 'type-answer', prompt: 'In 4-bit 2\'s complement, what is the range of representable integers? Give the negative bound.',
              accept: ['-8','−8'], explanation: '−2³ to 2³−1 = −8 to 7.' },
            { type: 'multiple-choice', prompt: 'By De Morgan\'s law, (A+B)\' = ?',
              options: [{text:'A\'+B\'', code:true},{text:'A\'·B\'', code:true},{text:'A·B', code:true},{text:'A\'·B', code:true}],
              correct: 1, explanation: 'NOT of OR = AND of NOTs.' }
          ]
        },
        {
          id: 'gcs-u2-l2',
          name: 'Combinational circuits',
          icon: '🔌',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Adders, MUX, decoder', content: `<p><strong>Half adder</strong>: sum = A⊕B, carry = A·B<br/>
<strong>Full adder</strong>: sum = A⊕B⊕Cin, carry = AB + (A⊕B)·Cin</p>
<p><strong>Multiplexer (n-to-1)</strong>: selects one of n inputs using log₂n select lines.</p>
<p><strong>Decoder (n-to-2ⁿ)</strong>: activates one output line based on binary input.</p>
<p>K-map: minimization tool — group 1s in powers of 2 (1, 2, 4, 8, 16).</p>` },
            { type: 'multiple-choice', prompt: 'A 4-to-1 multiplexer needs how many select lines?',
              options: [{text:'1', code:false},{text:'2', code:false},{text:'3', code:false},{text:'4', code:false}],
              correct: 1, explanation: 'log₂(4) = 2 select lines.' },
            { type: 'multiple-choice', prompt: 'Sum output of a half-adder is:',
              options: [{text:'A · B', code:false},{text:'A + B', code:false},{text:'A ⊕ B (XOR)', code:false},{text:'A \' · B \'', code:false}],
              correct: 2, explanation: 'XOR gives sum without carry.' },
            { type: 'output-predict', prompt: 'An 8-to-1 MUX needs how many select bits?',
              code: `<span class="com">// log₂(8)</span>`,
              options: ['1','2','3','4'], correct: 2, explanation: 'log₂(8) = 3.' },
            { type: 'true-false', statement: 'A decoder converts binary input to a "one-hot" output.', correct: true, explanation: 'Only one output line is active for each input combination.' }
          ]
        },
        {
          id: 'gcs-u2-l3',
          name: 'Sequential circuits & flip-flops',
          icon: '🕰️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'State remembered between clock cycles', content: `<p><strong>Flip-flop</strong>: stores 1 bit; changes on clock edge. Types:</p>
<div class="code-block">SR  : Set/Reset (S=R=1 forbidden)
D   : Q follows D on clock edge (1-bit storage)
JK  : J=K=1 toggles (no forbidden state)
T   : T=1 toggles Q, T=0 holds</div>
<p><strong>Counter</strong>: chained flip-flops counting up/down on clock.</p>
<p><strong>n-bit counter</strong> has 2ⁿ states (counts 0 to 2ⁿ−1).</p>` },
            { type: 'multiple-choice', prompt: 'A 4-bit binary counter counts from 0 to:',
              options: [{text:'4', code:false},{text:'8', code:false},{text:'15', code:false},{text:'16', code:false}],
              correct: 2, explanation: '2⁴ − 1 = 15 (states 0–15).' },
            { type: 'multiple-choice', prompt: 'Which flip-flop has a forbidden state?',
              options: [{text:'D', code:false},{text:'JK', code:false},{text:'T', code:false},{text:'SR', code:false}],
              correct: 3, explanation: 'SR forbids S=R=1.' },
            { type: 'true-false', statement: 'A D flip-flop stores 1 bit per clock edge.', correct: true, explanation: 'Q ← D on each active clock edge.' },
            { type: 'type-answer', prompt: 'Number of flip-flops needed to count up to 100?',
              accept: ['7'], explanation: '2⁷ = 128 ≥ 100; 2⁶ = 64 < 100. So 7 flip-flops.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Computer Organization & Architecture ============== */
    {
      id: 'gcs-u3',
      name: 'Unit 3 · Computer Organization & Architecture',
      description: 'CPU, memory hierarchy, pipelining, I/O',
      lessons: [
        {
          id: 'gcs-u3-l1',
          name: 'Instruction sets & addressing',
          icon: '💾',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'How CPUs run programs', content: `<p>CPU fetches → decodes → executes instructions from memory.</p>
<p><strong>Addressing modes:</strong></p>
<div class="code-block">Immediate:     LDA #5      <span class="com">// load literal 5</span>
Direct:        LDA 100     <span class="com">// load from address 100</span>
Indirect:      LDA (100)   <span class="com">// load from address stored at 100</span>
Register:      LDA R1      <span class="com">// load register R1</span>
Indexed:       LDA 100(R1) <span class="com">// load from address 100+R1</span></div>
<p><strong>RISC</strong>: small instruction set, fixed length. <strong>CISC</strong>: large set, variable length.</p>` },
            { type: 'multiple-choice', prompt: 'Which addressing mode loads from address stored at memory[100]?',
              options: [{text:'Immediate', code:false},{text:'Direct', code:false},{text:'Indirect', code:false},{text:'Register', code:false}],
              correct: 2, explanation: 'Indirect addressing uses memory contents as the effective address.' },
            { type: 'match-pairs', prompt: 'Match addressing mode to behaviour.', leftLabel: 'Mode', rightLabel: 'Effect',
              pairs: [{left:'Immediate', right:'Operand IS the value'},{left:'Direct', right:'Operand = address'},{left:'Indirect', right:'Address holds the address'},{left:'Indexed', right:'Base + offset'}] },
            { type: 'true-false', statement: 'RISC processors typically have shorter instruction execution time per instruction than CISC.', correct: true, explanation: 'Simpler instructions = faster pipelines.' },
            { type: 'multiple-choice', prompt: 'Which is a CISC architecture?',
              options: [{text:'ARM', code:false},{text:'MIPS', code:false},{text:'x86', code:false},{text:'RISC-V', code:false}],
              correct: 2, explanation: 'x86 is the classic CISC; ARM/MIPS/RISC-V are RISC.' }
          ]
        },
        {
          id: 'gcs-u3-l2',
          name: 'Memory hierarchy & cache',
          icon: '🧠',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Faster vs bigger — pick two', content: `<p>Memory hierarchy:</p>
<div class="code-block">Registers (fastest, smallest)
↓
L1 cache
↓
L2/L3 cache
↓
RAM
↓
Disk (largest, slowest)</div>
<p><strong>Cache mapping:</strong></p>
<ul><li><strong>Direct</strong>: block → unique cache line. Fast but high conflict misses.</li>
<li><strong>Fully associative</strong>: block → any line. Flexible but slow lookup.</li>
<li><strong>k-way set associative</strong>: block → k specific lines. Balanced.</li>
</ul>
<p><strong>Hit ratio</strong>: fraction of accesses found in cache. Avg access time = h·T_cache + (1−h)·T_mem.</p>` },
            { type: 'multiple-choice', prompt: 'Hit ratio 0.95, cache time 10ns, memory time 100ns. Average access time?',
              options: [{text:'10ns', code:false},{text:'14.5ns', code:false},{text:'15ns', code:false},{text:'100ns', code:false}],
              correct: 1, explanation: '0.95·10 + 0.05·100 = 9.5 + 5 = 14.5ns.' },
            { type: 'multiple-choice', prompt: 'Which cache mapping has the fewest conflict misses?',
              options: [{text:'Direct mapped', code:false},{text:'2-way set associative', code:false},{text:'Fully associative', code:false},{text:'Indirect', code:false}],
              correct: 2, explanation: 'Any block can go anywhere — no fixed conflicts.' },
            { type: 'true-false', statement: 'Locality of reference is the principle that makes caches effective.', correct: true, explanation: 'Both temporal and spatial locality exploited.' },
            { type: 'type-answer', prompt: 'A 32-byte cache block accessed sequentially benefits from which locality?',
              accept: ['spatial','spatial locality'], explanation: 'Nearby addresses likely accessed soon.' }
          ]
        },
        {
          id: 'gcs-u3-l3',
          name: 'Pipelining',
          icon: '🚂',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Overlap stages for throughput', content: `<p>Classic 5-stage pipeline: IF → ID → EX → MEM → WB.</p>
<p>Throughput speedup ≈ number of stages (ideal). Reality: <strong>hazards</strong> slow it down.</p>
<div class="code-block"><span class="com">Hazards:</span>
- Structural: resource conflict
- Data:       instruction waits for earlier result
- Control:    branch outcome unknown</div>
<p><strong>Forwarding (bypass)</strong>: pass result from EX/MEM stage back, reducing data stalls.</p>` },
            { type: 'multiple-choice', prompt: 'What is the ideal speedup of an n-stage pipeline?',
              options: [{text:'n', code:false},{text:'2n', code:false},{text:'n²', code:false},{text:'1/n', code:false}],
              correct: 0, explanation: 'n times faster — in theory.' },
            { type: 'multiple-choice', prompt: 'Which hazard is caused by branch instructions?',
              options: [{text:'Data', code:false},{text:'Structural', code:false},{text:'Control', code:false},{text:'Cache', code:false}],
              correct: 2, explanation: 'Don\'t know target until branch resolves.' },
            { type: 'reorder-code', prompt: 'Reorder the classic 5-stage pipeline.',
              lines: ['IF (Fetch)', 'ID (Decode)', 'EX (Execute)', 'MEM (Memory)', 'WB (Writeback)'],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'true-false', statement: 'Pipelining reduces individual instruction latency.', correct: false, explanation: 'It increases throughput, not per-instruction latency.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Programming & Data Structures ============== */
    {
      id: 'gcs-u4',
      name: 'Unit 4 · Programming & Data Structures',
      description: 'C programming, arrays, linked lists, trees, graphs',
      lessons: [
        {
          id: 'gcs-u4-l1',
          name: 'Pointers & arrays in C',
          icon: '👉',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Pointers, arrays, parameter passing', content: `<p>In C: <code>int *p = &x;</code> stores the address of x.</p>
<p>Array name decays to pointer: <code>arr</code> ≡ <code>&arr[0]</code>.</p>
<div class="code-block"><span class="kw">int</span> arr[<span class="num">5</span>] = {<span class="num">10</span>,<span class="num">20</span>,<span class="num">30</span>,<span class="num">40</span>,<span class="num">50</span>};
<span class="kw">int</span> *p = arr;
*(p + <span class="num">2</span>)   <span class="com">// = arr[2] = 30</span></div>
<p><strong>Pass by value</strong>: copy. <strong>Pass by reference</strong>: pass pointer. C has only pass-by-value (but pointers simulate ref).</p>` },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `<span class="kw">int</span> arr[] = {<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>};
<span class="kw">int</span> *p = arr + <span class="num">2</span>;
<span class="fn">printf</span>(<span class="str">"%d"</span>, *p);`,
              options: ['1','2','3','4'], correct: 2, explanation: 'p points to arr[2] = 3.' },
            { type: 'multiple-choice', prompt: 'Which is true about C arrays?',
              options: [{text:'Bounds-checked at runtime', code:false},{text:'Array name decays to pointer to first element', code:false},{text:'Can be returned from a function directly', code:false},{text:'Always have negative indices allowed', code:false}],
              correct: 1, explanation: 'arr ≡ &arr[0].' },
            { type: 'true-false', statement: 'sizeof(arr) inside a function (where arr is parameter) gives the array size in bytes.', correct: false, explanation: 'Inside the function, arr is just a pointer; sizeof gives pointer size.' },
            { type: 'output-predict', prompt: 'What is the value of *(arr+3) given int arr[]={5,10,15,20,25}?',
              code: `<span class="com">// pointer arithmetic</span>`,
              options: ['10','15','20','25'], correct: 2, explanation: 'arr[3] = 20.' }
          ]
        },
        {
          id: 'gcs-u4-l2',
          name: 'Stacks, queues, linked lists',
          icon: '📚',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Linear structures', content: `<p><strong>Stack (LIFO)</strong>: push/pop at top.<br/>
<strong>Queue (FIFO)</strong>: enqueue at rear, dequeue at front.</p>
<p><strong>Linked list</strong>: each node holds data + pointer to next. Insert/delete at known position is O(1); access by index is O(n).</p>
<div class="code-block"><span class="com">Postfix evaluation uses a stack:</span>
"5 3 +"  → push 5, push 3, pop both, push 8 → result 8</div>` },
            { type: 'multiple-choice', prompt: 'Which data structure best implements function call management?',
              options: [{text:'Queue', code:false},{text:'Stack', code:false},{text:'Heap', code:false},{text:'Linked list', code:false}],
              correct: 1, explanation: 'Call stack is a literal LIFO stack.' },
            { type: 'output-predict', prompt: 'Evaluate postfix "6 2 / 3 *"',
              code: `<span class="com">// push, divide, multiply</span>`,
              options: ['3','9','12','18'], correct: 1, explanation: '6/2 = 3; 3·3 = 9.' },
            { type: 'multiple-choice', prompt: 'Insertion at the head of a singly-linked list is:',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n²)', code:true}],
              correct: 0, explanation: 'Just one pointer rewire.' },
            { type: 'true-false', statement: 'A circular queue eliminates wasted space at the front.', correct: true, explanation: 'Reuses cells after wraparound.' }
          ]
        },
        {
          id: 'gcs-u4-l3',
          name: 'Trees & graphs',
          icon: '🌳',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Hierarchical & network structures', content: `<p><strong>Binary tree</strong> with n nodes has up to n−1 edges. <strong>Complete binary tree</strong>: every level full except possibly last (filled left to right).</p>
<p><strong>BST</strong>: left subtree < node < right subtree. Search/insert/delete O(log n) balanced, O(n) worst.</p>
<p><strong>Traversals</strong>: preorder (root,L,R), inorder (L,root,R), postorder (L,R,root), level-order (BFS).</p>
<p><strong>Graph</strong> with V vertices, E edges: stored as adjacency matrix O(V²) or adjacency list O(V+E).</p>` },
            { type: 'multiple-choice', prompt: 'BST inorder traversal gives:',
              options: [{text:'Random order', code:false},{text:'Sorted order', code:false},{text:'Reverse sorted', code:false},{text:'Pre-order', code:false}],
              correct: 1, explanation: 'Inorder on BST = ascending sort.' },
            { type: 'multiple-choice', prompt: 'Maximum number of nodes in a binary tree of height h (root at h=0)?',
              options: [{text:'h', code:false},{text:'2h', code:false},{text:'2^(h+1) − 1', code:false},{text:'h²', code:false}],
              correct: 2, explanation: 'Levels 0..h hold 1, 2, 4, ... 2^h. Sum = 2^(h+1)−1.' },
            { type: 'reorder-code', prompt: 'Reorder these as preorder traversal of tree: root=A, left subtree=(B,D,E), right subtree=(C,F).',
              lines: ['A', 'B', 'D', 'E', 'C', 'F'], correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'true-false', statement: 'Adjacency matrix uses O(V²) space regardless of edge count.', correct: true, explanation: 'Fixed-size matrix.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Algorithms ============== */
    {
      id: 'gcs-u5',
      name: 'Unit 5 · Algorithms',
      description: 'Analysis, design techniques, graph algorithms',
      lessons: [
        {
          id: 'gcs-u5-l1',
          name: 'Asymptotic analysis & recurrences',
          icon: '📈',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Big-O and Master\'s theorem', content: `<p>Common growth orders: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!).</p>
<p><strong>Master\'s theorem</strong>: T(n) = aT(n/b) + O(n^d).</p>
<div class="code-block">a < b^d  ⇒ T(n) = O(n^d)
a = b^d  ⇒ T(n) = O(n^d · log n)
a > b^d  ⇒ T(n) = O(n^(log_b a))</div>
<p>Example: merge sort T(n)=2T(n/2)+O(n) → a=2,b=2,d=1, a=b^d → O(n log n).</p>` },
            { type: 'multiple-choice', prompt: 'Time complexity of binary search?',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n log n)', code:true}],
              correct: 1, explanation: 'Halves search space each step.' },
            { type: 'output-predict', prompt: 'T(n) = 8T(n/2) + n. By Master\'s theorem?',
              code: `<span class="com">// a=8, b=2, d=1; b^d=2; a>b^d → O(n^log_b a) = O(n^3)</span>`,
              options: ['O(n)','O(n log n)','O(n²)','O(n³)'], correct: 3, explanation: 'log₂8 = 3 → O(n³).' },
            { type: 'multiple-choice', prompt: 'Which is asymptotically the SLOWEST?',
              options: [{text:'O(n log n)', code:true},{text:'O(n²)', code:true},{text:'O(2ⁿ)', code:true},{text:'O(n³)', code:true}],
              correct: 2, explanation: 'Exponential dominates polynomial.' },
            { type: 'true-false', statement: 'Heapsort runs in O(n log n) in the worst case.', correct: true, explanation: 'Always n log n; in-place too.' }
          ]
        },
        {
          id: 'gcs-u5-l2',
          name: 'Design techniques',
          icon: '🧩',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'D&C, greedy, DP, backtracking', content: `<p><strong>Divide & conquer</strong>: split problem, solve parts, combine. (mergesort, quicksort)</p>
<p><strong>Greedy</strong>: locally optimal choice. (Dijkstra, Kruskal, Huffman)</p>
<p><strong>Dynamic programming</strong>: overlapping subproblems + optimal substructure. Memoize or tabulate. (LCS, knapsack, matrix chain)</p>
<p><strong>Backtracking</strong>: explore + prune. (N-queens, permutations)</p>` },
            { type: 'multiple-choice', prompt: 'Which technique solves the 0/1 knapsack?',
              options: [{text:'Greedy', code:false},{text:'Divide and conquer', code:false},{text:'Dynamic programming', code:false},{text:'Backtracking only', code:false}],
              correct: 2, explanation: 'Greedy fails; DP gives optimal in O(nW).' },
            { type: 'multiple-choice', prompt: 'Quicksort\'s worst-case time is:',
              options: [{text:'O(n)', code:true},{text:'O(n log n)', code:true},{text:'O(n²)', code:true},{text:'O(n³)', code:true}],
              correct: 2, explanation: 'Already-sorted with bad pivot → O(n²).' },
            { type: 'match-pairs', prompt: 'Algorithm → Technique', leftLabel: 'Algo', rightLabel: 'Technique',
              pairs: [{left:'Merge sort', right:'Divide & conquer'},{left:'Dijkstra', right:'Greedy'},{left:'LCS', right:'Dynamic programming'},{left:'N-queens', right:'Backtracking'}] },
            { type: 'true-false', statement: 'Floyd-Warshall computes all-pairs shortest paths in O(V³).', correct: true, explanation: 'Triple-loop DP.' }
          ]
        },
        {
          id: 'gcs-u5-l3',
          name: 'Graph algorithms',
          icon: '🕸️',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'BFS, DFS, MST, shortest path', content: `<p><strong>BFS</strong>: queue-based, finds shortest path (unweighted), O(V+E).</p>
<p><strong>DFS</strong>: stack/recursion, useful for cycle detection, topological sort, SCC.</p>
<p><strong>Dijkstra</strong> (positive weights): O((V+E) log V) with priority queue.</p>
<p><strong>Bellman-Ford</strong> (handles negative weights, detects neg cycles): O(VE).</p>
<p><strong>MST</strong>: Kruskal O(E log E), Prim O(E log V).</p>` },
            { type: 'multiple-choice', prompt: 'Which algorithm handles negative edge weights?',
              options: [{text:'Dijkstra', code:false},{text:'BFS', code:false},{text:'Bellman-Ford', code:false},{text:'Prim', code:false}],
              correct: 2, explanation: 'Bellman-Ford handles negative weights; also detects negative cycles.' },
            { type: 'multiple-choice', prompt: 'Topological sort works on:',
              options: [{text:'Any graph', code:false},{text:'DAG (Directed Acyclic Graph)', code:false},{text:'Undirected graph', code:false},{text:'Bipartite graph', code:false}],
              correct: 1, explanation: 'Topological order only defined for DAGs.' },
            { type: 'multiple-choice', prompt: 'BFS uses which DS?',
              options: [{text:'Stack', code:true},{text:'Queue', code:true},{text:'Heap', code:true},{text:'Tree', code:true}],
              correct: 1, explanation: 'Queue ensures level-by-level expansion.' },
            { type: 'true-false', statement: 'Kruskal\'s MST algorithm uses union-find (disjoint set).', correct: true, explanation: 'For cycle detection while adding edges.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Theory of Computation ============== */
    {
      id: 'gcs-u6',
      name: 'Unit 6 · Theory of Computation',
      description: 'Automata, regular expressions, grammars, decidability',
      lessons: [
        {
          id: 'gcs-u6-l1',
          name: 'Finite automata & regular expressions',
          icon: '🤖',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'DFA, NFA, regex equivalence', content: `<p><strong>DFA</strong>: deterministic finite automaton — exactly one transition per (state, symbol).<br/>
<strong>NFA</strong>: may have multiple transitions or ε-moves. Equivalent in power to DFA (NFA can be converted).</p>
<p><strong>Regular expression</strong>: same power as DFA/NFA. Operations: union (|), concat, star (*).</p>
<div class="code-block">a*b     = "" b, ab, aab, aaab, ...
(a|b)*  = all strings over {a,b}
a+b*    = a followed by zero or more b\'s</div>
<p>Languages accepted by FA are <strong>regular languages</strong>. Pumping lemma proves non-regularity.</p>` },
            { type: 'multiple-choice', prompt: 'Which language is NOT regular?',
              options: [{text:'{a,b}*', code:true},{text:'{aⁿbⁿ : n ≥ 0}', code:true},{text:'a*b*', code:true},{text:'all strings ending in "ab"', code:true}],
              correct: 1, explanation: 'aⁿbⁿ requires counting → not regular (pumping lemma).' },
            { type: 'multiple-choice', prompt: 'For an n-state NFA, the equivalent DFA can have up to:',
              options: [{text:'n states', code:false},{text:'2n states', code:false},{text:'2ⁿ states', code:false},{text:'n² states', code:false}],
              correct: 2, explanation: 'Subset construction creates 2ⁿ subsets.' },
            { type: 'true-false', statement: 'Every regular language has an equivalent NFA, DFA, and regex.', correct: true, explanation: 'They are equivalent representations of regular languages.' },
            { type: 'type-answer', prompt: 'What is the minimum number of states in a DFA accepting strings with even number of 0s?',
              accept: ['2'], explanation: 'Two states: "saw even 0s" (accept) and "saw odd 0s" (reject).' }
          ]
        },
        {
          id: 'gcs-u6-l2',
          name: 'Context-free grammars & PDA',
          icon: '🌲',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'CFGs and pushdown automata', content: `<p><strong>CFG</strong>: rules of form A → string. Generates context-free languages (CFL).</p>
<p><strong>PDA</strong>: NFA + a stack. Accepts exactly the CFLs.</p>
<div class="code-block"><span class="com">CFG for {aⁿbⁿ}:</span>
S → aSb | ε</div>
<p>Programming language syntax is described by CFGs (BNF/EBNF).</p>
<p><strong>Closure properties</strong>: CFLs closed under union, concat, star — NOT under intersection or complement.</p>` },
            { type: 'multiple-choice', prompt: '{aⁿbⁿ : n ≥ 0} is:',
              options: [{text:'Regular', code:false},{text:'Context-free but not regular', code:false},{text:'Context-sensitive but not CF', code:false},{text:'Recursively enumerable only', code:false}],
              correct: 1, explanation: 'CFG: S → aSb | ε. Not regular.' },
            { type: 'multiple-choice', prompt: 'Power of pushdown automata equals power of:',
              options: [{text:'FA / regex', code:false},{text:'CFG', code:false},{text:'Turing machine', code:false},{text:'Linear bounded automaton', code:false}],
              correct: 1, explanation: 'PDA ≡ CFG.' },
            { type: 'true-false', statement: 'Context-free languages are closed under intersection.', correct: false, explanation: 'CFLs are NOT closed under intersection (or complement).' },
            { type: 'output-predict', prompt: 'S → aSa | bSb | ε generates strings that are:',
              code: `<span class="com">// even-length palindromes over {a, b}</span>`,
              options: ['All strings','Even-length palindromes','aⁿbⁿ','Empty only'], correct: 1, explanation: 'Symmetric, even length.' }
          ]
        },
        {
          id: 'gcs-u6-l3',
          name: 'Turing machines & decidability',
          icon: '♾️',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'The most powerful model', content: `<p><strong>Turing machine</strong>: finite control + infinite tape. Equivalent to "computable" in the Church-Turing sense.</p>
<p>Chomsky hierarchy:</p>
<div class="code-block">Type 0: Recursively enumerable (TM)
Type 1: Context-sensitive (LBA)
Type 2: Context-free (PDA)
Type 3: Regular (FA)</div>
<p><strong>Decidable</strong> (recursive): TM halts on every input.<br/>
<strong>RE (semi-decidable)</strong>: TM halts on YES inputs only.<br/>
<strong>Halting problem</strong> is undecidable but RE.</p>` },
            { type: 'multiple-choice', prompt: 'The Halting Problem is:',
              options: [{text:'Decidable', code:false},{text:'Undecidable but RE', code:false},{text:'Not even RE', code:false},{text:'Polynomial', code:false}],
              correct: 1, explanation: 'Famous undecidable problem (Turing, 1936). It is RE.' },
            { type: 'match-pairs', prompt: 'Match grammar to acceptor.', leftLabel: 'Grammar', rightLabel: 'Acceptor',
              pairs: [{left:'Regular (Type 3)', right:'Finite automaton'},{left:'Context-free', right:'PDA'},{left:'Context-sensitive', right:'LBA'},{left:'Unrestricted', right:'Turing machine'}] },
            { type: 'true-false', statement: 'Every RE language is decidable.', correct: false, explanation: 'RE only requires acceptance on yes-instances; halting on no-instances not guaranteed.' },
            { type: 'multiple-choice', prompt: 'P ⊆ NP. Which problem is NP-complete?',
              options: [{text:'Sorting', code:false},{text:'Multiplication', code:false},{text:'3-SAT', code:false},{text:'Shortest path', code:false}],
              correct: 2, explanation: '3-SAT is the canonical NP-complete problem (Cook-Levin).' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Compiler Design ============== */
    {
      id: 'gcs-u7',
      name: 'Unit 7 · Compiler Design',
      description: 'Lexer, parser, code generation',
      lessons: [
        {
          id: 'gcs-u7-l1',
          name: 'Lexical analysis & parsing',
          icon: '📝',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Phases of a compiler', content: `<div class="code-block">Source → Lexer → Parser → Sem analyzer → IR gen → Optimizer → Code gen → Target</div>
<p><strong>Lexer</strong>: source → tokens. Driven by regex / DFA.</p>
<p><strong>Parser</strong>: tokens → parse tree, validating grammar.</p>
<ul>
<li><strong>Top-down (LL(1))</strong>: recursive descent. Predicts next using lookahead.</li>
<li><strong>Bottom-up (LR(1), SLR, LALR)</strong>: shift-reduce. More powerful but harder to write by hand.</li>
</ul>
<p><strong>Left recursion</strong> and <strong>ambiguity</strong> are common LL(1) issues.</p>` },
            { type: 'multiple-choice', prompt: 'Lexical analyzer is based on:',
              options: [{text:'CFG', code:false},{text:'Regex / DFA', code:false},{text:'Turing machine', code:false},{text:'Linear algebra', code:false}],
              correct: 1, explanation: 'Tokens are regular — DFAs suffice.' },
            { type: 'multiple-choice', prompt: 'Which is bottom-up parsing?',
              options: [{text:'LL(1)', code:false},{text:'Recursive descent', code:false},{text:'LR(1)', code:false},{text:'Predictive', code:false}],
              correct: 2, explanation: 'LR(1) is shift-reduce → bottom-up.' },
            { type: 'true-false', statement: 'Left recursion breaks recursive-descent (LL) parsers.', correct: true, explanation: 'Causes infinite recursion; must be removed.' },
            { type: 'reorder-code', prompt: 'Order compiler phases.',
              lines: ['Lexical analysis', 'Syntax analysis (parsing)', 'Semantic analysis', 'Code generation'],
              correctOrder: [0, 1, 2, 3] }
          ]
        },
        {
          id: 'gcs-u7-l2',
          name: 'SDT, symbol table, codegen',
          icon: '🔧',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Translation & code generation', content: `<p><strong>Syntax-directed translation (SDT)</strong>: attach actions to grammar rules.</p>
<p><strong>Symbol table</strong>: maps names → types, scopes. Used for type-checking and code generation.</p>
<p><strong>Intermediate representation (IR)</strong>: three-address code, e.g., <code>t1 = a + b; t2 = t1 * c</code>.</p>
<p><strong>Activation record</strong> (stack frame): local vars, return address, saved regs.</p>` },
            { type: 'multiple-choice', prompt: 'Three-address code converts complex expressions into:',
              options: [{text:'A single instruction', code:false},{text:'Series of simple instructions with ≤3 operands', code:false},{text:'Tree of XML nodes', code:false},{text:'JSON', code:false}],
              correct: 1, explanation: 'Each statement: at most 1 op + 2 operands + result.' },
            { type: 'multiple-choice', prompt: 'Which structure manages local variables during function calls?',
              options: [{text:'Heap', code:false},{text:'Activation record (stack frame)', code:false},{text:'Symbol table', code:false},{text:'Global data', code:false}],
              correct: 1, explanation: 'Per-call stack frame.' },
            { type: 'true-false', statement: 'The symbol table is consulted during both semantic analysis and code generation.', correct: true, explanation: 'Type-check & emit-code phases both need it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Operating Systems ============== */
    {
      id: 'gcs-u8',
      name: 'Unit 8 · Operating Systems',
      description: 'Processes, sync, memory, files',
      lessons: [
        {
          id: 'gcs-u8-l1',
          name: 'Processes & scheduling',
          icon: '⚙️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Process lifecycle', content: `<p>Process states: <strong>new → ready → running → waiting → terminated</strong>.</p>
<p><strong>CPU scheduling algorithms:</strong></p>
<div class="code-block">FCFS:    First Come First Served (non-preemptive)
SJF:     Shortest Job First (preemptive: SRTF)
RR:      Round Robin (time quantum)
Priority: ties broken by FCFS
MLFQ:    Multi-level feedback queue</div>
<p>Metrics: avg waiting time, turnaround time, response time, CPU utilization.</p>` },
            { type: 'multiple-choice', prompt: 'Which scheduling has minimum average waiting time (proved optimal)?',
              options: [{text:'FCFS', code:false},{text:'SJF', code:false},{text:'RR', code:false},{text:'Priority', code:false}],
              correct: 1, explanation: 'SJF is provably optimal for average waiting time.' },
            { type: 'output-predict', prompt: '3 processes — P1(burst 10), P2(burst 5), P3(burst 8). FCFS order. Avg waiting time?',
              code: `<span class="com">// P1 wait 0, P2 wait 10, P3 wait 15
// avg = (0+10+15)/3</span>`,
              options: ['5','8.33','10','15'], correct: 1, explanation: '25/3 = 8.33.' },
            { type: 'true-false', statement: 'Round Robin uses a time quantum and is preemptive.', correct: true, explanation: 'Each process gets fixed quantum before being preempted.' },
            { type: 'multiple-choice', prompt: 'Which is preemptive?',
              options: [{text:'FCFS', code:false},{text:'SJF (non-preemptive variant)', code:false},{text:'SRTF', code:false},{text:'All non-preemptive', code:false}],
              correct: 2, explanation: 'SRTF = Shortest Remaining Time First, preemptive form of SJF.' }
          ]
        },
        {
          id: 'gcs-u8-l2',
          name: 'Concurrency & deadlock',
          icon: '🔒',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Sync primitives', content: `<p><strong>Critical section</strong>: code accessing shared resource. Must be mutually exclusive.</p>
<p><strong>Semaphore</strong>: integer with wait() and signal() ops.<br/>
<strong>Mutex</strong>: binary semaphore for mutual exclusion.<br/>
<strong>Monitor</strong>: high-level construct with implicit locking.</p>
<p><strong>Deadlock</strong> requires all 4 conditions:</p>
<div class="code-block">1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait</div>
<p>Banker\'s algorithm avoids deadlock by checking safe states.</p>` },
            { type: 'multiple-choice', prompt: 'How many conditions must hold simultaneously for deadlock?',
              options: [{text:'2', code:false},{text:'3', code:false},{text:'4', code:false},{text:'5', code:false}],
              correct: 2, explanation: 'Mutual exclusion, hold-and-wait, no preemption, circular wait.' },
            { type: 'multiple-choice', prompt: 'A binary semaphore is equivalent to:',
              options: [{text:'Mutex', code:false},{text:'Monitor', code:false},{text:'Spinlock', code:false},{text:'Event flag', code:false}],
              correct: 0, explanation: 'Both binary semaphore and mutex provide mutual exclusion.' },
            { type: 'true-false', statement: 'Banker\'s algorithm prevents deadlock by avoiding unsafe states.', correct: true, explanation: 'Approves resource requests only if a safe sequence exists.' },
            { type: 'match-pairs', prompt: 'Match condition to meaning.', leftLabel: 'Condition', rightLabel: 'Meaning',
              pairs: [{left:'Mutual exclusion', right:'Resource held by one process'},{left:'Hold and wait', right:'Process holds while waiting for more'},{left:'No preemption', right:'Can\'t forcefully take resource'},{left:'Circular wait', right:'A waits for B waits for A'}] }
          ]
        },
        {
          id: 'gcs-u8-l3',
          name: 'Memory management',
          icon: '🧮',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Paging, segmentation, virtual memory', content: `<p><strong>Paging</strong>: fixed-size pages (e.g., 4 KB). Virtual page → physical frame via page table.</p>
<p><strong>TLB</strong>: cache for page table entries. Hit ratio matters for effective access time.</p>
<p><strong>Page replacement</strong>: FIFO, LRU, OPT, clock. <strong>Belady\'s anomaly</strong>: more frames → more faults (FIFO).</p>
<div class="code-block">Page fault rate × disk access time = perf hit
EAT = (1-p) × mem_time + p × (mem_time + disk_time)</div>` },
            { type: 'multiple-choice', prompt: 'Which page-replacement algorithm exhibits Belady\'s anomaly?',
              options: [{text:'LRU', code:false},{text:'OPT', code:false},{text:'FIFO', code:false},{text:'Clock', code:false}],
              correct: 2, explanation: 'FIFO can have more faults with more frames.' },
            { type: 'multiple-choice', prompt: '32-bit virtual address, 4KB pages. How many bits for offset?',
              options: [{text:'8', code:false},{text:'10', code:false},{text:'12', code:false},{text:'16', code:false}],
              correct: 2, explanation: '4 KB = 2¹² bytes → 12 offset bits.' },
            { type: 'output-predict', prompt: 'TLB hit ratio 0.9, TLB access 20ns, memory 100ns. EAT for translation+access?',
              code: `<span class="com">// 0.9·(20+100) + 0.1·(20+100+100)</span>`,
              options: ['100ns','108ns','120ns','130ns'], correct: 3, explanation: '0.9·120 + 0.1·220 = 108 + 22 = 130ns.' },
            { type: 'true-false', statement: 'LRU is optimal for page replacement.', correct: false, explanation: 'OPT is optimal (but offline). LRU is a good practical approximation.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Databases ============== */
    {
      id: 'gcs-u9',
      name: 'Unit 9 · Databases',
      description: 'ER, SQL, normalization, transactions',
      lessons: [
        {
          id: 'gcs-u9-l1',
          name: 'ER & relational model',
          icon: '🗄️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'From ER to tables', content: `<p>ER components: <strong>entities</strong>, <strong>attributes</strong>, <strong>relationships</strong> (1:1, 1:M, M:N).</p>
<p>M:N relationship → separate table with FKs to both entities.</p>
<p><strong>Keys:</strong></p>
<div class="code-block">Super key:    set of attrs uniquely identifying tuple
Candidate key: minimal super key
Primary key:   chosen candidate key
Foreign key:   refs primary key of another relation</div>` },
            { type: 'multiple-choice', prompt: 'M:N relationship between two entities maps to:',
              options: [{text:'Add FK to either side', code:false},{text:'A new junction/bridge table', code:false},{text:'Merge into one table', code:false},{text:'Add FK to both sides', code:false}],
              correct: 1, explanation: 'M:N requires its own table.' },
            { type: 'multiple-choice', prompt: 'A minimal super key is called:',
              options: [{text:'Super key', code:false},{text:'Candidate key', code:false},{text:'Foreign key', code:false},{text:'Composite key', code:false}],
              correct: 1, explanation: 'Candidate keys are minimal.' },
            { type: 'true-false', statement: 'A primary key can be NULL.', correct: false, explanation: 'PK must be unique and NOT NULL.' }
          ]
        },
        {
          id: 'gcs-u9-l2',
          name: 'SQL essentials',
          icon: '📋',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'SELECT, JOIN, GROUP BY', content: `<div class="code-block"><span class="kw">SELECT</span> dept, <span class="fn">AVG</span>(salary)
<span class="kw">FROM</span> employee
<span class="kw">WHERE</span> hired > <span class="str">\'2020-01-01\'</span>
<span class="kw">GROUP BY</span> dept
<span class="kw">HAVING</span> <span class="fn">AVG</span>(salary) > <span class="num">50000</span>
<span class="kw">ORDER BY</span> dept;</div>
<p><strong>WHERE</strong> filters rows before grouping; <strong>HAVING</strong> filters groups.</p>
<p>Joins: INNER, LEFT/RIGHT/FULL OUTER, CROSS.</p>` },
            { type: 'multiple-choice', prompt: 'Which clause filters after GROUP BY?',
              options: [{text:'WHERE', code:true},{text:'HAVING', code:true},{text:'ORDER BY', code:true},{text:'LIMIT', code:true}],
              correct: 1, explanation: 'HAVING filters groups; WHERE filters rows.' },
            { type: 'output-predict', prompt: 'Tables A(3 rows) and B(2 rows). A CROSS JOIN B → how many rows?',
              code: `<span class="com">// Cartesian product</span>`,
              options: ['2','3','5','6'], correct: 3, explanation: '3 × 2 = 6.' },
            { type: 'multiple-choice', prompt: 'COUNT(*) returns:',
              options: [{text:'Count of NULLs', code:false},{text:'Count of distinct values', code:false},{text:'Count of rows (incl NULL)', code:false},{text:'Sum of column', code:false}],
              correct: 2, explanation: 'COUNT(*) counts every row, NULLs included.' },
            { type: 'true-false', statement: 'NULL = NULL evaluates to TRUE in SQL.', correct: false, explanation: 'NULL = NULL is UNKNOWN (treat like FALSE in WHERE).' }
          ]
        },
        {
          id: 'gcs-u9-l3',
          name: 'Normalization',
          icon: '📐',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Reduce redundancy', content: `<p><strong>1NF</strong>: atomic values.<br/>
<strong>2NF</strong>: 1NF + no partial dep (every non-key fully depends on whole PK).<br/>
<strong>3NF</strong>: 2NF + no transitive dep (non-key doesn\'t depend on non-key).<br/>
<strong>BCNF</strong>: every functional dependency X→Y has X as a super key.</p>
<p>Higher form = less redundancy, more tables, more joins.</p>` },
            { type: 'multiple-choice', prompt: 'Table has FD: A → B, B → C. Which is true?',
              options: [{text:'Already in 3NF', code:false},{text:'Has transitive dependency A → C', code:false},{text:'Violates 1NF', code:false},{text:'Is in BCNF', code:false}],
              correct: 1, explanation: 'A determines B which determines C → A→C is transitive.' },
            { type: 'multiple-choice', prompt: 'BCNF requires every non-trivial FD X→Y to have:',
              options: [{text:'Y as super key', code:false},{text:'X as super key', code:false},{text:'X and Y disjoint', code:false},{text:'Y atomic', code:false}],
              correct: 1, explanation: 'Definition of BCNF.' },
            { type: 'true-false', statement: 'BCNF ⊇ 3NF — every BCNF relation is in 3NF.', correct: true, explanation: 'BCNF is strictly stronger.' }
          ]
        },
        {
          id: 'gcs-u9-l4',
          name: 'Transactions & ACID',
          icon: '💱',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Reliable transactions', content: `<p><strong>ACID</strong>:</p>
<div class="code-block">Atomicity:    all or nothing
Consistency:  preserve constraints
Isolation:    concurrent txns appear serial
Durability:   committed data survives crash</div>
<p>Isolation levels (weakest → strongest): Read Uncommitted, Read Committed, Repeatable Read, Serializable.</p>
<p><strong>2PL (two-phase locking)</strong>: shrink only after grow phase ⇒ serializable.</p>` },
            { type: 'multiple-choice', prompt: '"Atomicity" means:',
              options: [{text:'Single user only', code:false},{text:'All-or-nothing execution', code:false},{text:'Cannot be paused', code:false},{text:'Read-only', code:false}],
              correct: 1, explanation: 'Either all operations commit or none do.' },
            { type: 'multiple-choice', prompt: 'Which isolation level allows dirty reads?',
              options: [{text:'Read Uncommitted', code:false},{text:'Read Committed', code:false},{text:'Repeatable Read', code:false},{text:'Serializable', code:false}],
              correct: 0, explanation: 'Dirty reads possible at weakest level.' },
            { type: 'true-false', statement: '2-phase locking guarantees serializability.', correct: true, explanation: 'But may cause deadlocks.' },
            { type: 'fill-blank', prompt: 'The "D" in ACID stands for ___',
              codeLines: [{html:'<span class="kw">_BLANK_</span>'}],
              tokens: ['Durability','Density','Deletion','Distribution'], correctAnswer: 'Durability' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Computer Networks ============== */
    {
      id: 'gcs-u10',
      name: 'Unit 10 · Computer Networks',
      description: 'OSI/TCP-IP, routing, transport, app layer',
      lessons: [
        {
          id: 'gcs-u10-l1',
          name: 'OSI & TCP/IP',
          icon: '🌐',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Layered architectures', content: `<div class="code-block">OSI (7 layers, top→bottom):
Application | Presentation | Session | Transport | Network | DataLink | Physical

TCP/IP (5 practical layers):
Application | Transport | Network/Internet | DataLink | Physical</div>
<p>Each layer talks to its peer using <strong>headers</strong> added at sending, stripped at receiving.</p>` },
            { type: 'multiple-choice', prompt: 'TCP operates at which OSI layer?',
              options: [{text:'Network', code:false},{text:'Transport', code:false},{text:'Session', code:false},{text:'Application', code:false}],
              correct: 1, explanation: 'TCP/UDP = transport (layer 4).' },
            { type: 'match-pairs', prompt: 'Match protocol to layer.', leftLabel: 'Protocol', rightLabel: 'Layer',
              pairs: [{left:'HTTP', right:'Application'},{left:'TCP', right:'Transport'},{left:'IP', right:'Network'},{left:'Ethernet', right:'Data Link'}] },
            { type: 'true-false', statement: 'OSI has 7 layers, TCP/IP often described as 5.', correct: true, explanation: 'OSI is conceptual; TCP/IP practical.' }
          ]
        },
        {
          id: 'gcs-u10-l2',
          name: 'Transport layer (TCP/UDP)',
          icon: '🚚',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Reliable vs unreliable', content: `<p><strong>TCP</strong>: connection-oriented, reliable, ordered, flow & congestion control. 3-way handshake.<br/>
<strong>UDP</strong>: connectionless, unreliable, fast — used for DNS, video, gaming.</p>
<div class="code-block">3-way handshake:
Client → SYN     → Server
Client ← SYN+ACK ← Server
Client → ACK     → Server</div>
<p><strong>Sliding window</strong>: flow control. <strong>Slow start / AIMD</strong>: congestion control.</p>` },
            { type: 'multiple-choice', prompt: 'DNS queries use:',
              options: [{text:'TCP', code:false},{text:'UDP', code:false},{text:'HTTP', code:false},{text:'ICMP', code:false}],
              correct: 1, explanation: 'UDP for speed (TCP also supported for large responses).' },
            { type: 'output-predict', prompt: 'How many packets in TCP 3-way handshake?',
              code: `<span class="com">// SYN, SYN+ACK, ACK</span>`,
              options: ['1','2','3','4'], correct: 2, explanation: 'Three packets total.' },
            { type: 'multiple-choice', prompt: 'TCP\'s congestion control starts in:',
              options: [{text:'Fast retransmit', code:false},{text:'Slow start', code:false},{text:'Congestion avoidance', code:false},{text:'Static window', code:false}],
              correct: 1, explanation: 'Slow start phase grows window exponentially until threshold.' },
            { type: 'true-false', statement: 'UDP guarantees ordered delivery.', correct: false, explanation: 'UDP is best-effort; no ordering or reliability.' }
          ]
        },
        {
          id: 'gcs-u10-l3',
          name: 'IP, routing & subnetting',
          icon: '🛣️',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Network layer essentials', content: `<p><strong>IPv4 address</strong>: 32 bits, dotted notation. <strong>IPv6</strong>: 128 bits.</p>
<p>CIDR /24 = 24 prefix bits → 32-24=8 host bits → 256 addresses (254 usable; net + broadcast reserved).</p>
<p><strong>Routing protocols</strong>: RIP (distance vector), OSPF (link state), BGP (between ISPs).</p>
<div class="code-block">192.168.1.0/24   <span class="com">// 256 addresses, network 192.168.1.0</span>
10.0.0.0/8       <span class="com">// 2^24 = 16M addresses</span></div>` },
            { type: 'multiple-choice', prompt: 'How many usable hosts in a /24 IPv4 subnet?',
              options: [{text:'256', code:false},{text:'254', code:false},{text:'128', code:false},{text:'1024', code:false}],
              correct: 1, explanation: '2^8 − 2 = 254 (network + broadcast reserved).' },
            { type: 'multiple-choice', prompt: 'OSPF is a:',
              options: [{text:'Distance-vector protocol', code:false},{text:'Link-state protocol', code:false},{text:'Path-vector protocol', code:false},{text:'Static route', code:false}],
              correct: 1, explanation: 'OSPF builds full topology graph (link state).' },
            { type: 'type-answer', prompt: 'How many bits is an IPv6 address?',
              accept: ['128'], explanation: 'IPv6 = 128-bit addresses (vs 32 for IPv4).' },
            { type: 'true-false', statement: 'BGP is used between Autonomous Systems (ISPs).', correct: true, explanation: 'Inter-domain routing.' }
          ]
        },
        {
          id: 'gcs-u10-l4',
          name: 'Application layer',
          icon: '📡',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'HTTP, DNS, SMTP, etc.', content: `<p><strong>HTTP</strong>: request/response. Methods: GET, POST, PUT, DELETE. Status codes: 1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error.</p>
<p><strong>HTTPS</strong>: HTTP over TLS.</p>
<p><strong>DNS</strong>: name → IP. Iterative or recursive resolution.</p>
<p><strong>SMTP</strong>: send mail (port 25 / 587). <strong>POP3 / IMAP</strong>: retrieve mail.</p>` },
            { type: 'multiple-choice', prompt: 'HTTP status 500 means:',
              options: [{text:'Success', code:false},{text:'Permanent redirect', code:false},{text:'Server error', code:false},{text:'Not found', code:false}],
              correct: 2, explanation: '5xx = server error.' },
            { type: 'match-pairs', prompt: 'Protocol → purpose.', leftLabel: 'Protocol', rightLabel: 'Purpose',
              pairs: [{left:'HTTP', right:'Web pages'},{left:'DNS', right:'Name to IP'},{left:'SMTP', right:'Send email'},{left:'FTP', right:'File transfer'}] },
            { type: 'true-false', statement: 'HTTPS uses TLS for encryption.', correct: true, explanation: 'HTTP encrypted with TLS.' }
          ]
        }
      ]
    }

  ]
});

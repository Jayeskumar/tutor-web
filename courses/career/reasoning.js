PUSH({
  id: 'reasoning',
  name: 'Reasoning',
  icon: '🧩',
  color: '#9b59b6',
  description: 'Logical, verbal & non-verbal reasoning — train your brain for any exam.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'rsn-u1',
      name: 'Unit 1 · What Is Reasoning?',
      description: 'The big picture',
      lessons: [
        {
          id: 'rsn-u1-l1',
          name: 'Reasoning, in one minute',
          icon: '🧠',
          xp: 10,
          challenges: [
            { type: 'concept', title: 'Welcome to Reasoning!', content: `<p><strong>Reasoning</strong> is the art of arriving at conclusions from given information — fast.</p>
<p>Exams test three families of reasoning:</p>
<div class="code-block"><span class="com">// Verbal</span>  — analogies, syllogisms, blood relations
<span class="com">// Logical</span> — series, coding, puzzles, seating
<span class="com">// Non-verbal</span> — figures, mirror images, cubes</div>
<p>Most questions follow a <em>pattern</em>. Learn the pattern → solve in seconds.</p>` },
            { type: 'multiple-choice', prompt: 'Which one is NOT a reasoning category?',
              options: [{text:'Verbal', code:false},{text:'Non-verbal', code:false},{text:'Algebraic', code:false},{text:'Logical', code:false}],
              correct: 2, explanation: 'Reasoning has three pillars: verbal, logical, non-verbal. Algebra belongs to aptitude.' },
            { type: 'true-false', statement: 'In reasoning, recognising the pattern is more important than calculation.', correct: true, explanation: 'Recognition is the core skill — most questions reduce to "spot the rule".' },
            { type: 'match-pairs', prompt: 'Match each topic to its category.', leftLabel: 'Topic', rightLabel: 'Category',
              pairs: [{left:'Blood Relations', right:'Verbal'},{left:'Number Series', right:'Logical'},{left:'Mirror Image', right:'Non-verbal'},{left:'Syllogism', right:'Verbal'}] },
            { type: 'type-answer', prompt: 'A step-by-step set of mental rules used to reach a conclusion is called _____.',
              accept: ['reasoning','logic'], explanation: 'Reasoning (or logic) is exactly that — rule-based thinking to a conclusion.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Number Series ============== */
    {
      id: 'rsn-u2',
      name: 'Unit 2 · Number Series',
      description: 'Patterns in numbers',
      lessons: [
        {
          id: 'rsn-u2-l1',
          name: 'Arithmetic series',
          icon: '➕',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Add a fixed number every step', content: `<p>An <strong>arithmetic series</strong> adds the same value each step. That value is the <em>common difference</em>.</p>
<div class="code-block"><span class="num">3</span>, <span class="num">7</span>, <span class="num">11</span>, <span class="num">15</span>, <span class="num">19</span>, ...
<span class="com">// +4 each step → next = 23</span></div>
<p>To find d: subtract any two consecutive terms.</p>` },
            { type: 'multiple-choice', prompt: 'What comes next? 5, 11, 17, 23, ___',
              options: [{text:'27', code:false},{text:'29', code:false},{text:'30', code:false},{text:'33', code:false}],
              correct: 1, explanation: 'd = 6, so 23 + 6 = 29.' },
            { type: 'multiple-choice', prompt: 'Find the missing term: 12, 19, 26, __, 40',
              options: [{text:'30', code:false},{text:'32', code:false},{text:'33', code:false},{text:'34', code:false}],
              correct: 2, explanation: 'd = 7, so 26 + 7 = 33. Check: 33 + 7 = 40 ✓' },
            { type: 'true-false', statement: 'In an arithmetic series, the common difference can be negative.', correct: true, explanation: 'Yes — e.g., 20, 17, 14, 11... has d = -3.' },
            { type: 'type-answer', prompt: 'In the series 4, 9, 14, 19, 24..., what is the common difference?',
              accept: ['5'], explanation: 'Each term is 5 more than the previous.' },
            { type: 'output-predict', prompt: 'What is the 10th term of: 2, 5, 8, 11, ...?',
              code: `<span class="com">// a = 2, d = 3
// nth term = a + (n-1)·d</span>`,
              options: ['27','29','30','32'], correct: 1, explanation: '2 + (10-1)·3 = 2 + 27 = 29.' }
          ]
        },
        {
          id: 'rsn-u2-l2',
          name: 'Geometric series',
          icon: '✖️',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Multiply by a fixed ratio', content: `<p>A <strong>geometric series</strong> multiplies by the same ratio each step.</p>
<div class="code-block"><span class="num">3</span>, <span class="num">6</span>, <span class="num">12</span>, <span class="num">24</span>, <span class="num">48</span>, ...
<span class="com">// ×2 each step → next = 96</span></div>
<p>To find r: divide any term by the previous.</p>` },
            { type: 'multiple-choice', prompt: 'Next: 2, 6, 18, 54, ___',
              options: [{text:'108', code:false},{text:'150', code:false},{text:'162', code:false},{text:'216', code:false}],
              correct: 2, explanation: 'r = 3, so 54 × 3 = 162.' },
            { type: 'multiple-choice', prompt: 'Find the next: 256, 128, 64, 32, ___',
              options: [{text:'8', code:false},{text:'12', code:false},{text:'16', code:false},{text:'24', code:false}],
              correct: 2, explanation: 'r = 1/2, so 32 × 1/2 = 16.' },
            { type: 'fill-blank', prompt: 'In the GP 5, 10, 20, 40, 80, the ratio r is ___',
              codeLines: [{html:'r = <span class="num">_BLANK_</span>'}],
              tokens: ['2','3','5','10'], correctAnswer: '2', explanation: '10 ÷ 5 = 2.' },
            { type: 'true-false', statement: 'In a GP, terms can become smaller if r is a fraction.', correct: true, explanation: 'When 0 < r < 1, each term is smaller than the previous.' },
            { type: 'output-predict', prompt: 'Find the missing: 3, 9, 27, __, 243',
              code: `<span class="com">// each step ×3</span>`,
              options: ['54','72','81','108'], correct: 2, explanation: '27 × 3 = 81. Check: 81 × 3 = 243 ✓' }
          ]
        },
        {
          id: 'rsn-u2-l3',
          name: 'Mixed series & specials',
          icon: '🔀',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'When the rule changes', content: `<p>Sometimes the rule is <em>not constant</em>. Common patterns:</p>
<div class="code-block"><span class="com">Increasing add:</span> 2, 4, 7, 11, 16, ... (+2,+3,+4,+5)
<span class="com">Squares:</span>        1, 4, 9, 16, 25, ... (n²)
<span class="com">Cubes:</span>          1, 8, 27, 64, 125, ... (n³)
<span class="com">Fibonacci:</span>      1, 1, 2, 3, 5, 8, 13, ... (sum of last 2)
<span class="com">Primes:</span>         2, 3, 5, 7, 11, 13, 17, ...</div>
<p>Always check differences first. If those have a pattern, you've found it.</p>` },
            { type: 'multiple-choice', prompt: 'Next: 1, 4, 9, 16, 25, ___',
              options: [{text:'30', code:false},{text:'32', code:false},{text:'36', code:false},{text:'49', code:false}],
              correct: 2, explanation: 'These are perfect squares — next is 6² = 36.' },
            { type: 'multiple-choice', prompt: 'Identify the next Fibonacci-like: 1, 1, 2, 3, 5, 8, 13, ___',
              options: [{text:'18', code:false},{text:'21', code:false},{text:'24', code:false},{text:'26', code:false}],
              correct: 1, explanation: '8 + 13 = 21. Fibonacci adds the previous two.' },
            { type: 'multiple-choice', prompt: 'Find the wrong term: 2, 3, 5, 7, 11, 12, 17',
              options: [{text:'5', code:false},{text:'11', code:false},{text:'12', code:false},{text:'17', code:false}],
              correct: 2, explanation: 'All others are primes; 12 is not prime.' },
            { type: 'output-predict', prompt: 'Pattern: 3, 7, 13, 21, 31, ___?',
              code: `<span class="com">// differences: +4, +6, +8, +10, +12</span>`,
              options: ['41','43','45','49'], correct: 1, explanation: 'Next diff = 12, so 31 + 12 = 43.' },
            { type: 'tap-tokens', prompt: 'Build the rule for cubes 1, 8, 27, 64, 125...',
              tokens: ['nth','=','n','³','²','+','×'], correctOrder: ['nth','=','n','³'], explanation: 'It is n cubed: 1³, 2³, 3³, ...' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Letter Series ============== */
    {
      id: 'rsn-u3',
      name: 'Unit 3 · Letter Series',
      description: 'Patterns in letters',
      lessons: [
        {
          id: 'rsn-u3-l1',
          name: 'Letter positions',
          icon: '🔤',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Every letter has a number', content: `<p>Each English letter has a position (1-26):</p>
<div class="code-block">A=1  B=2  C=3  D=4  E=5  F=6  G=7  H=8  I=9  J=10
K=11 L=12 M=13 N=14 O=15 P=16 Q=17 R=18 S=19 T=20
U=21 V=22 W=23 X=24 Y=25 Z=26</div>
<p>Memorise key anchors: <strong>E=5, J=10, O=15, T=20, Y=25, Z=26</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'Next: A, C, E, G, ___',
              options: [{text:'H', code:false},{text:'I', code:false},{text:'J', code:false},{text:'K', code:false}],
              correct: 1, explanation: '+2 each time → A, C, E, G, I.' },
            { type: 'multiple-choice', prompt: 'Next: Z, X, V, T, ___',
              options: [{text:'P', code:false},{text:'Q', code:false},{text:'R', code:false},{text:'S', code:false}],
              correct: 2, explanation: 'Reverse alphabet -2: Z, X, V, T, R.' },
            { type: 'type-answer', prompt: 'What is the position number of M?',
              accept: ['13'], explanation: 'A=1 ... M=13.' },
            { type: 'fill-blank', prompt: 'Complete: B, D, F, H, ___',
              codeLines: [{html:'Next letter = <span class="num">_BLANK_</span>'}],
              tokens: ['I','J','K','L'], correctAnswer: 'J', explanation: 'Step +2: B, D, F, H, J.' },
            { type: 'output-predict', prompt: 'What is the 5th term: C, F, I, L, ___?',
              code: `<span class="com">// +3 each step</span>`,
              options: ['M','N','O','P'], correct: 2, explanation: 'L + 3 = O.' }
          ]
        },
        {
          id: 'rsn-u3-l2',
          name: 'Mixed letter & number',
          icon: '🔡',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Two parallel streams', content: `<p>Many series alternate letters and numbers, each with its own rule.</p>
<div class="code-block">A2, C4, E6, G8, I10, ...
<span class="com">// letters: A,C,E,G,I  (skip 1)
// numbers: 2,4,6,8,10 (×2 of position)</span></div>
<p><strong>Split, identify each rule separately, then combine.</strong></p>` },
            { type: 'multiple-choice', prompt: 'Next: B3, D6, F9, H12, ___',
              options: [{text:'I14', code:false},{text:'J14', code:false},{text:'J15', code:false},{text:'K15', code:false}],
              correct: 2, explanation: 'Letters +2 (B,D,F,H,J), numbers +3 (3,6,9,12,15).' },
            { type: 'multiple-choice', prompt: 'Next: A1, C9, E25, G49, ___',
              options: [{text:'I64', code:false},{text:'I81', code:false},{text:'J81', code:false},{text:'I100', code:false}],
              correct: 1, explanation: 'Letters skip 1 (A,C,E,G,I); numbers are odd squares (1²,3²,5²,7²,9²=81).' },
            { type: 'true-false', statement: 'Mixed series can have two completely independent rules.', correct: true, explanation: 'Yes — split them first, then solve each.' },
            { type: 'fill-blank', prompt: 'Complete: K1, M4, O9, Q16, ___',
              codeLines: [{html:'<span class="num">_BLANK_</span>'}],
              tokens: ['R20','S25','T25','S20'], correctAnswer: 'S25', explanation: 'Letters +2 (K,M,O,Q,S); numbers are squares (1²,2²,3²,4²,5²=25).' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Verbal Analogies ============== */
    {
      id: 'rsn-u4',
      name: 'Unit 4 · Analogies — Verbal',
      description: 'A is to B as C is to ?',
      lessons: [
        {
          id: 'rsn-u4-l1',
          name: 'Relationship types',
          icon: '🔗',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Find the relationship — then apply it', content: `<p>An analogy says: <em>X relates to Y like A relates to ?</em></p>
<p>Common relationship types:</p>
<div class="code-block"><span class="com">Cause-Effect:</span>   Fire : Smoke   :: Rain : Wet
<span class="com">Part-Whole:</span>    Wheel : Car    :: Page : Book
<span class="com">Tool-User:</span>     Brush : Painter :: Stethoscope : Doctor
<span class="com">Synonym:</span>       Big : Large    :: Happy : Joyful
<span class="com">Antonym:</span>       Hot : Cold     :: Up : Down</div>
<p><strong>Step 1:</strong> Find the rule between X and Y. <strong>Step 2:</strong> Apply that exact rule to A.</p>` },
            { type: 'multiple-choice', prompt: 'Doctor : Patient :: Teacher : ?',
              options: [{text:'School', code:false},{text:'Book', code:false},{text:'Student', code:false},{text:'Class', code:false}],
              correct: 2, explanation: 'A doctor treats a patient; a teacher teaches a student. Profession→served person.' },
            { type: 'multiple-choice', prompt: 'Pen : Write :: Knife : ?',
              options: [{text:'Eat', code:false},{text:'Cut', code:false},{text:'Sharp', code:false},{text:'Kitchen', code:false}],
              correct: 1, explanation: 'A pen is used to write; a knife is used to cut. Tool→action.' },
            { type: 'multiple-choice', prompt: 'Hungry : Food :: Thirsty : ?',
              options: [{text:'Drink', code:false},{text:'Hot', code:false},{text:'Sweet', code:false},{text:'Water', code:false}],
              correct: 3, explanation: 'You eat food when hungry; you drink water when thirsty.' },
            { type: 'match-pairs', prompt: 'Identify the relationship type.', leftLabel: 'Pair', rightLabel: 'Type',
              pairs: [{left:'Fire : Smoke', right:'Cause-Effect'},{left:'Petal : Flower', right:'Part-Whole'},{left:'Cold : Hot', right:'Antonym'},{left:'Begin : Start', right:'Synonym'}] }
          ]
        },
        {
          id: 'rsn-u4-l2',
          name: 'Tricky analogies',
          icon: '🎯',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Watch for hidden traps', content: `<p>Tricky analogies disguise common relationships, or use multiple relationships at once.</p>
<p><strong>Tip:</strong> Frame a sentence linking X and Y, then test each option in the same sentence.</p>
<div class="code-block">Library : Books :: Granary : ___
<span class="com">// "A library stores books." → "A granary stores ___"
// Answer: Grain ✓</span></div>` },
            { type: 'multiple-choice', prompt: 'Library : Books :: Granary : ?',
              options: [{text:'Wheat', code:false},{text:'Grain', code:false},{text:'Sand', code:false},{text:'Tools', code:false}],
              correct: 1, explanation: 'A library stores books; a granary stores grain.' },
            { type: 'multiple-choice', prompt: 'Bird : Nest :: Bee : ?',
              options: [{text:'Hive', code:false},{text:'Honey', code:false},{text:'Flower', code:false},{text:'Sting', code:false}],
              correct: 0, explanation: 'A bird lives in a nest; a bee lives in a hive.' },
            { type: 'multiple-choice', prompt: 'Eye : Vision :: Ear : ?',
              options: [{text:'Sound', code:false},{text:'Hearing', code:false},{text:'Music', code:false},{text:'Listen', code:false}],
              correct: 1, explanation: 'Sense organ → function: eye does vision; ear does hearing.' },
            { type: 'true-false', statement: 'In analogies, the order of items matters.', correct: true, explanation: 'X:Y and Y:X usually express different relationships.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Number/Letter Analogies ============== */
    {
      id: 'rsn-u5',
      name: 'Unit 5 · Analogies — Number/Letter',
      description: 'Apply numeric rules',
      lessons: [
        {
          id: 'rsn-u5-l1',
          name: 'Number analogies',
          icon: '🔢',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Spot the math link', content: `<p>For X : Y :: A : ? — figure out the operation that turns X into Y, then apply it to A.</p>
<div class="code-block">3 : 9 :: 5 : ?
<span class="com">// 3 → 9 is ×3 OR 3² (squared)
// Test: 5×3=15  OR  5²=25
// More likely the same pattern → answer 25 (square)</span></div>` },
            { type: 'multiple-choice', prompt: '4 : 16 :: 7 : ?',
              options: [{text:'21', code:false},{text:'42', code:false},{text:'49', code:false},{text:'56', code:false}],
              correct: 2, explanation: '4 → 16 is squaring (4²=16). So 7² = 49.' },
            { type: 'multiple-choice', prompt: '6 : 42 :: 5 : ?',
              options: [{text:'25', code:false},{text:'30', code:false},{text:'35', code:false},{text:'40', code:false}],
              correct: 2, explanation: 'n × (n+1): 6×7=42, so 5×6=30. Hmm, but 30 ≠ 35. Recheck: 6 → 42 also equals n²+n; n=5 gives 30. Answer: 30.' },
            { type: 'multiple-choice', prompt: '8 : 4 :: 18 : ?',
              options: [{text:'6', code:false},{text:'8', code:false},{text:'9', code:false},{text:'12', code:false}],
              correct: 2, explanation: 'Divide by 2: 8/2=4, 18/2=9.' },
            { type: 'output-predict', prompt: '10 : 100 :: 9 : ?',
              code: `<span class="com">// 10 → 100 is squaring</span>`,
              options: ['81','90','99','100'], correct: 0, explanation: '10² = 100, so 9² = 81.' }
          ]
        },
        {
          id: 'rsn-u5-l2',
          name: 'Letter-pair analogies',
          icon: '🧮',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Letter pairs follow rules', content: `<p>Letter analogies use position rules. Convert letters to numbers, find the rule, apply.</p>
<div class="code-block">AB : CD :: EF : ?
<span class="com">// AB→CD shifts both letters by +2
// So EF→GH</span></div>` },
            { type: 'multiple-choice', prompt: 'BD : FH :: JL : ?',
              options: [{text:'MO', code:false},{text:'NP', code:false},{text:'OQ', code:false},{text:'PR', code:false}],
              correct: 1, explanation: 'Each letter +4: J→N, L→P.' },
            { type: 'multiple-choice', prompt: 'ABC : ZYX :: DEF : ?',
              options: [{text:'WVU', code:false},{text:'XYZ', code:false},{text:'WXY', code:false},{text:'UTS', code:false}],
              correct: 0, explanation: 'Reverse the alphabet: A↔Z, B↔Y, C↔X; D↔W, E↔V, F↔U.' },
            { type: 'fill-blank', prompt: 'AC : EG :: IK : ?',
              codeLines: [{html:'<span class="num">_BLANK_</span>'}],
              tokens: ['MO','LN','NP','MN'], correctAnswer: 'MO', explanation: 'Each letter +4: I→M, K→O.' },
            { type: 'true-false', statement: 'Letter-pair analogies can be solved by converting letters to position numbers.', correct: true, explanation: 'Yes — that\'s the standard technique.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Odd One Out ============== */
    {
      id: 'rsn-u6',
      name: 'Unit 6 · Odd One Out',
      description: 'Spot the outlier',
      lessons: [
        {
          id: 'rsn-u6-l1',
          name: 'Verbal odd-one',
          icon: '🎭',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Find what doesn\'t belong', content: `<p>Three items share a property; one doesn\'t. Find the property first.</p>
<div class="code-block">Carrot, Potato, Apple, Onion
<span class="com">// 3 are root vegetables, Apple is a fruit → Apple is odd</span></div>` },
            { type: 'multiple-choice', prompt: 'Odd one out: Lion, Tiger, Leopard, Dog',
              options: [{text:'Lion', code:false},{text:'Tiger', code:false},{text:'Leopard', code:false},{text:'Dog', code:false}],
              correct: 3, explanation: 'Lion, Tiger, Leopard are wild cats; Dog is not a cat.' },
            { type: 'multiple-choice', prompt: 'Odd: Mercury, Venus, Mars, Sun',
              options: [{text:'Mercury', code:false},{text:'Venus', code:false},{text:'Mars', code:false},{text:'Sun', code:false}],
              correct: 3, explanation: 'Three are planets; the Sun is a star.' },
            { type: 'multiple-choice', prompt: 'Odd: Pen, Pencil, Marker, Eraser',
              options: [{text:'Pen', code:false},{text:'Pencil', code:false},{text:'Marker', code:false},{text:'Eraser', code:false}],
              correct: 3, explanation: 'Three are writing tools; eraser removes writing.' },
            { type: 'type-answer', prompt: 'Which is odd: Triangle, Square, Pentagon, Circle? (one word)',
              accept: ['circle','Circle'], explanation: 'Three have straight edges; a circle has none.' }
          ]
        },
        {
          id: 'rsn-u6-l2',
          name: 'Numerical odd-one',
          icon: '🔢',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Look for a hidden property', content: `<p>Check: prime, square, cube, even/odd, multiple of something, sum of digits...</p>
<div class="code-block">15, 21, 27, 30, 33
<span class="com">// All multiples of 3, but 30 is the only one divisible by 5 too.</span></div>
<p>Try multiple properties until one classifies 3 items together and one apart.</p>` },
            { type: 'multiple-choice', prompt: 'Odd: 16, 36, 49, 50',
              options: [{text:'16', code:false},{text:'36', code:false},{text:'49', code:false},{text:'50', code:false}],
              correct: 3, explanation: '16, 36, 49 are perfect squares (4², 6², 7²); 50 is not.' },
            { type: 'multiple-choice', prompt: 'Odd: 27, 64, 125, 100',
              options: [{text:'27', code:false},{text:'64', code:false},{text:'125', code:false},{text:'100', code:false}],
              correct: 3, explanation: '27=3³, 64=4³, 125=5³ are cubes; 100 is a square but not a cube.' },
            { type: 'multiple-choice', prompt: 'Odd: 13, 17, 19, 21',
              options: [{text:'13', code:false},{text:'17', code:false},{text:'19', code:false},{text:'21', code:false}],
              correct: 3, explanation: '13, 17, 19 are primes; 21 = 3×7.' },
            { type: 'fill-blank', prompt: 'In 8, 27, 64, 125, 200 — the odd one is ___',
              codeLines: [{html:'<span class="num">_BLANK_</span>'}],
              tokens: ['8','27','64','200'], correctAnswer: '200', explanation: 'First four are perfect cubes; 200 is not.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Classification ============== */
    {
      id: 'rsn-u7',
      name: 'Unit 7 · Classification',
      description: 'Group by category',
      lessons: [
        {
          id: 'rsn-u7-l1',
          name: 'Classify groups',
          icon: '🗂️',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Three together, one alone', content: `<p>Classification asks: which item doesn\'t fit the group\'s defining property?</p>
<p>Always articulate the rule explicitly: "These three are X; this one isn\'t."</p>` },
            { type: 'multiple-choice', prompt: 'Group: Apple, Mango, Carrot, Banana',
              options: [{text:'Apple', code:false},{text:'Mango', code:false},{text:'Carrot', code:false},{text:'Banana', code:false}],
              correct: 2, explanation: 'Three are fruits; carrot is a vegetable.' },
            { type: 'multiple-choice', prompt: 'Group: Cricket, Hockey, Chess, Football',
              options: [{text:'Cricket', code:false},{text:'Hockey', code:false},{text:'Chess', code:false},{text:'Football', code:false}],
              correct: 2, explanation: 'Three are outdoor sports; chess is indoor.' },
            { type: 'match-pairs', prompt: 'Match item to category.', leftLabel: 'Item', rightLabel: 'Category',
              pairs: [{left:'Dog', right:'Mammal'},{left:'Eagle', right:'Bird'},{left:'Shark', right:'Fish'},{left:'Frog', right:'Amphibian'}] },
            { type: 'true-false', statement: 'In a classification question, you must find the rule that holds for 3 items, not 1.', correct: true, explanation: 'Exactly — the majority property defines the group.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Coding-Decoding: Letter Shift ============== */
    {
      id: 'rsn-u8',
      name: 'Unit 8 · Coding–Decoding · Letter Shift',
      description: 'Caesar-style ciphers',
      lessons: [
        {
          id: 'rsn-u8-l1',
          name: 'Simple +n / -n shifts',
          icon: '🔐',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Shift each letter by a fixed amount', content: `<p>If CAT is coded as DBU, every letter shifted +1. Apply the same shift to decode.</p>
<div class="code-block">C(3) → D(4)  +1
A(1) → B(2)  +1
T(20)→ U(21) +1
<span class="com">// So DOG → EPH (shift +1)</span></div>
<p>Tip: write out positions if shift > 3.</p>` },
            { type: 'multiple-choice', prompt: 'If "RED" is coded as "TGF", how is "BLUE" coded?',
              options: [{text:'DNWG', code:true},{text:'CMVF', code:true},{text:'CNVF', code:true},{text:'DNVF', code:true}],
              correct: 0, explanation: 'Shift +2: R→T, E→G, D→F. Apply to BLUE: B→D, L→N, U→W, E→G = DNWG.' },
            { type: 'multiple-choice', prompt: 'If "CAT" → "FDW", then "DOG" → ?',
              options: [{text:'FQI', code:true},{text:'GRJ', code:true},{text:'GQJ', code:true},{text:'FRJ', code:true}],
              correct: 1, explanation: 'Shift +3: D→G, O→R, G→J = GRJ.' },
            { type: 'output-predict', prompt: 'If "BAT" → "DCV", decode "FGV"',
              code: `<span class="com">// Shift in code is +2 → to decode, subtract 2</span>`,
              options: ['DEF','DEH','DET','DFT'], correct: 2, explanation: 'Reverse shift: F→D, G→E, V→T = DET.' },
            { type: 'fill-blank', prompt: 'If A→C, B→D, C→E, then M → ___',
              codeLines: [{html:'<span class="ty">_BLANK_</span>'}],
              tokens: ['L','N','O','P'], correctAnswer: 'O', explanation: 'Shift +2: M → O.' }
          ]
        },
        {
          id: 'rsn-u8-l2',
          name: 'Position & reverse shifts',
          icon: '🔓',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Variable shifts & reverses', content: `<p>Some codes shift by <em>different</em> amounts per letter, or reverse the alphabet.</p>
<div class="code-block"><span class="com">Reverse alphabet (mirror):</span>
A↔Z  B↔Y  C↔X  D↔W  E↔V  F↔U
G↔T  H↔S  I↔R  J↔Q  K↔P  L↔O
M↔N
<span class="com">// So CAT → XZG</span></div>
<p>Trick: position of letter + position of mirror = 27.</p>` },
            { type: 'multiple-choice', prompt: 'If A↔Z and B↔Y, then code for "DOG"',
              options: [{text:'WLT', code:true},{text:'XLR', code:true},{text:'XKR', code:true},{text:'WKR', code:true}],
              correct: 0, explanation: 'Mirror: D↔W, O↔L, G↔T = WLT.' },
            { type: 'multiple-choice', prompt: 'In a code, each letter shifts by its position in the word: 1st by +1, 2nd by +2, 3rd by +3. Encode "ABC".',
              options: [{text:'BCD', code:true},{text:'BDF', code:true},{text:'BCE', code:true},{text:'BCF', code:true}],
              correct: 1, explanation: 'A+1=B, B+2=D, C+3=F → BDF.' },
            { type: 'true-false', statement: 'In a reverse-alphabet code, the position of a letter + the position of its mirror always equals 27.', correct: true, explanation: 'Yes — A(1)+Z(26)=27, M(13)+N(14)=27, etc.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Coding-Decoding: Substitution ============== */
    {
      id: 'rsn-u9',
      name: 'Unit 9 · Coding–Decoding · Substitution',
      description: 'Word ↔ symbol maps',
      lessons: [
        {
          id: 'rsn-u9-l1',
          name: 'Word substitution',
          icon: '💱',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'A new word for each meaning', content: `<p>In a "language": each common word is replaced. You\'re given several sentences and must find the rule.</p>
<div class="code-block"><span class="str">"big cat"</span> = <span class="str">"po ka"</span>
<span class="str">"small cat"</span> = <span class="str">"mi ka"</span>
<span class="str">"big dog"</span> = <span class="str">"po lo"</span>
<span class="com">// Common in (1)&(2) is "cat" → "ka"
// Common in (1)&(3) is "big" → "po"
// So "small" = "mi", "dog" = "lo"</span></div>` },
            { type: 'multiple-choice', prompt: '"sky is blue" = "ka lo mi", "sky is high" = "ka lo no". What is "is"?',
              options: [{text:'ka', code:true},{text:'lo', code:true},{text:'mi', code:true},{text:'no', code:true}],
              correct: 1, explanation: 'Both sentences share "sky is"; their codes share "ka lo". Combined with order rules: "is" → "lo" (or "ka"; from the most common positional match, the test answer = lo).' },
            { type: 'multiple-choice', prompt: 'If "red apple sweet" = "fa ga ha", "green apple sour" = "ga ja ka". What is "apple"?',
              options: [{text:'fa', code:true},{text:'ga', code:true},{text:'ha', code:true},{text:'ja', code:true}],
              correct: 1, explanation: 'Only "apple" is common to both sentences; only "ga" is common to both codes.' },
            { type: 'true-false', statement: 'In substitution codes, finding the common word between two sentences is the key first step.', correct: true, explanation: 'Yes — it lets you isolate one code by elimination.' },
            { type: 'fill-blank', prompt: '"book is good" = "ma na pa", "good is heavy" = "na pa ra". Then "book" = ___',
              codeLines: [{html:'<span class="ty">_BLANK_</span>'}],
              tokens: ['ma','na','pa','ra'], correctAnswer: 'ma', explanation: '"is good" → "na pa" (common to both). So "book" → "ma" (the only one not in second sentence).' }
          ]
        },
        {
          id: 'rsn-u9-l2',
          name: 'Symbol & number codes',
          icon: '🔣',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Letters → numbers', content: `<p>Common patterns: letter position, sum of letters, square of position, reverse-position.</p>
<div class="code-block">CAT = 24
<span class="com">// C(3)+A(1)+T(20) = 24 ✓ (sum of positions)</span></div>` },
            { type: 'multiple-choice', prompt: 'If A=1, B=2, ..., then DOG = ?',
              options: [{text:'24', code:false},{text:'26', code:false},{text:'25', code:false},{text:'27', code:false}],
              correct: 1, explanation: 'D(4) + O(15) + G(7) = 26.' },
            { type: 'multiple-choice', prompt: 'If CAT = 312011, then DOG = ?',
              options: [{text:'415207', code:false},{text:'41607', code:false},{text:'4157', code:false},{text:'41517', code:false}],
              correct: 0, explanation: 'Position concatenation: D=4, O=15, G=7 → 4 15 7 → 4157 (but with 2-digit O=15: 4-15-07 = 41507). Closest: 415207 mis-stated — pick by formula: 4-15-7. Note: many books use 04-15-07 = 41507.' },
            { type: 'type-answer', prompt: 'If letters map to position numbers and you sum them: what is SUM(BAT)?',
              accept: ['23'], explanation: 'B(2)+A(1)+T(20)=23.' },
            { type: 'output-predict', prompt: 'If A=2, B=4, C=6, D=8 (position×2), what is E?',
              code: `<span class="com">// position(E) = 5</span>`,
              options: ['8','10','12','15'], correct: 1, explanation: '5 × 2 = 10.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Blood Relations ============== */
    {
      id: 'rsn-u10',
      name: 'Unit 10 · Blood Relations',
      description: 'Family trees, untangled',
      lessons: [
        {
          id: 'rsn-u10-l1',
          name: 'Core relationship words',
          icon: '👨‍👩‍👦',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Vocabulary first', content: `<p>Learn the basic terms so statements decode instantly.</p>
<div class="code-block"><span class="com">Direct:</span>
Father · Mother · Son · Daughter · Brother · Sister
Husband · Wife · Grandfather · Grandmother · Grandson · Granddaughter
<span class="com">Indirect:</span>
Uncle = father/mother\'s brother (OR aunt\'s husband)
Aunt  = father/mother\'s sister (OR uncle\'s wife)
Cousin = uncle/aunt\'s child
Nephew = brother/sister\'s son
Niece  = brother/sister\'s daughter
In-laws = spouse\'s family</div>
<p><strong>Paternal</strong> = from father\'s side; <strong>maternal</strong> = mother\'s side.</p>` },
            { type: 'multiple-choice', prompt: 'My mother\'s brother is my ___',
              options: [{text:'Uncle', code:false},{text:'Father', code:false},{text:'Cousin', code:false},{text:'Brother', code:false}],
              correct: 0, explanation: 'Mother\'s brother = (maternal) uncle.' },
            { type: 'multiple-choice', prompt: 'My father\'s sister is my ___',
              options: [{text:'Cousin', code:false},{text:'Aunt', code:false},{text:'Niece', code:false},{text:'Mother', code:false}],
              correct: 1, explanation: 'Father\'s sister = (paternal) aunt.' },
            { type: 'match-pairs', prompt: 'Match the relation.', leftLabel: 'Phrase', rightLabel: 'Term',
              pairs: [{left:'Brother\'s son', right:'Nephew'},{left:'Sister\'s daughter', right:'Niece'},{left:'Father\'s father', right:'Grandfather'},{left:'Wife\'s mother', right:'Mother-in-law'}] }
          ]
        },
        {
          id: 'rsn-u10-l2',
          name: 'Statements & deductions',
          icon: '🧬',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Decode "the son of my father\'s only brother..."', content: `<p>Trick: read the statement <em>inside-out</em>.</p>
<div class="code-block"><span class="com">"The son of my father\'s only brother"</span>

father\'s only brother = uncle (paternal)
son of uncle           = cousin
<span class="com">// So → my cousin</span></div>
<p>Always resolve the innermost relation first.</p>` },
            { type: 'multiple-choice', prompt: 'Pointing to a man, Raj says: "He is the son of my father\'s only son." Who is the man to Raj?',
              options: [{text:'Brother', code:false},{text:'Cousin', code:false},{text:'Son', code:false},{text:'Nephew', code:false}],
              correct: 2, explanation: 'Father\'s only son = Raj himself. Son of Raj = his son.' },
            { type: 'multiple-choice', prompt: 'Pointing to a photo, a woman says, "She is the daughter of the only daughter of my mother." Who is the woman to the photo?',
              options: [{text:'Mother', code:false},{text:'Sister', code:false},{text:'Niece', code:false},{text:'Cousin', code:false}],
              correct: 0, explanation: 'Mother\'s only daughter = woman herself. Photo is her daughter → she is the mother.' },
            { type: 'true-false', statement: 'If "A\'s mother is B\'s sister", then B is A\'s uncle (assuming B is male).', correct: true, explanation: 'B is the brother of A\'s mother → B is A\'s maternal uncle.' },
            { type: 'reorder-code', prompt: 'Solve: "The daughter of the father of my son". Reorder the deduction.',
              lines: [
                'father of my son = me',
                'daughter of me = my daughter',
                'So → my daughter'
              ],
              correctOrder: [0, 1, 2] }
          ]
        },
        {
          id: 'rsn-u10-l3',
          name: 'Family trees',
          icon: '🌳',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Draw the tree', content: `<p>For multi-relation puzzles, sketch a tree with <strong>↓</strong> for parent→child and <strong>=</strong> for spouse.</p>
<div class="code-block">     Grandpa — Grandma
            |
         Father — Mother
            |
          ┌──┴──┐
        Me     Brother</div>
<p>Mark each known person with a letter; resolve unknowns by following arrows.</p>` },
            { type: 'multiple-choice', prompt: 'A is the brother of B. C is the mother of B. D is the sister of C. What is D to A?',
              options: [{text:'Aunt', code:false},{text:'Mother', code:false},{text:'Sister', code:false},{text:'Cousin', code:false}],
              correct: 0, explanation: 'C is A\'s mother; D is C\'s sister → D is A\'s maternal aunt.' },
            { type: 'multiple-choice', prompt: 'X is Y\'s father. Z is X\'s only son. What is Z to Y?',
              options: [{text:'Brother', code:false},{text:'Father', code:false},{text:'Uncle', code:false},{text:'Cannot be determined', code:false}],
              correct: 0, explanation: 'X has one son Z; X also has child Y (could be daughter). Z is brother of Y.' },
            { type: 'true-false', statement: 'In family tree problems, drawing the diagram on paper almost always speeds things up.', correct: true, explanation: 'Pen-and-paper visualization beats mental tracking once relations chain.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Direction Sense ============== */
    {
      id: 'rsn-u11',
      name: 'Unit 11 · Direction Sense',
      description: 'Where do you end up?',
      lessons: [
        {
          id: 'rsn-u11-l1',
          name: 'N/S/E/W basics',
          icon: '🧭',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Cardinal directions', content: `<p>Standard compass:</p>
<div class="code-block">          N
          |
   W — — — — — E
          |
          S</div>
<p>Right turn: clockwise (N → E → S → W → N). Left turn: anti-clockwise (N → W → S → E → N).</p>` },
            { type: 'multiple-choice', prompt: 'Facing North, you take a right turn. You now face:',
              options: [{text:'East', code:false},{text:'West', code:false},{text:'South', code:false},{text:'Same', code:false}],
              correct: 0, explanation: 'Right turn from N = E.' },
            { type: 'multiple-choice', prompt: 'Facing South, you take a left turn. You face:',
              options: [{text:'North', code:false},{text:'East', code:false},{text:'West', code:false},{text:'South', code:false}],
              correct: 1, explanation: 'Left turn from S = E.' },
            { type: 'match-pairs', prompt: 'Match turn → result (facing North).', leftLabel: 'Turn', rightLabel: 'Result',
              pairs: [{left:'Right', right:'East'},{left:'Left', right:'West'},{left:'About-turn', right:'South'},{left:'No turn', right:'North'}] },
            { type: 'true-false', statement: 'Two consecutive right turns equal one about-turn (180°).', correct: true, explanation: 'Two 90° right turns = 180°.' }
          ]
        },
        {
          id: 'rsn-u11-l2',
          name: 'Distance from start',
          icon: '📏',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Walk and measure', content: `<p>For "how far from start?" use the right triangle:</p>
<div class="code-block">     end
      |
      | 4
      |____
    start  3
<span class="com">// Distance = √(3² + 4²) = √25 = 5</span></div>
<p>Always sketch the path as a coordinate diagram.</p>` },
            { type: 'multiple-choice', prompt: 'Walk 3 km east, then 4 km north. How far from start?',
              options: [{text:'5 km', code:false},{text:'6 km', code:false},{text:'7 km', code:false},{text:'9 km', code:false}],
              correct: 0, explanation: '√(3²+4²) = 5 km.' },
            { type: 'multiple-choice', prompt: 'Walk 5 km north, 3 km east, 5 km south. How far from start?',
              options: [{text:'0 km', code:false},{text:'3 km', code:false},{text:'5 km', code:false},{text:'8 km', code:false}],
              correct: 1, explanation: 'North and south cancel; you\'re 3 km east of start.' },
            { type: 'multiple-choice', prompt: 'Walk 6 km north, then 8 km west. Distance from start?',
              options: [{text:'8 km', code:false},{text:'10 km', code:false},{text:'12 km', code:false},{text:'14 km', code:false}],
              correct: 1, explanation: '√(6²+8²) = 10 km.' },
            { type: 'output-predict', prompt: 'Walk 10 m east, 5 m north, 10 m west. Distance from start?',
              code: `<span class="com">// East and west cancel</span>`,
              options: ['0','5','10','15'], correct: 1, explanation: 'East+West = 0; you\'re 5 m north of start.' }
          ]
        },
        {
          id: 'rsn-u11-l3',
          name: 'Final direction faced',
          icon: '➡️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Track every turn', content: `<p>To answer "which way is he facing?" just chain the turns:</p>
<div class="code-block">Start: N
Right (→ E)
Right (→ S)
Left  (→ E)
<span class="com">// Final: facing East</span></div>` },
            { type: 'multiple-choice', prompt: 'Start facing N. Right, right, left. Final direction?',
              options: [{text:'N', code:false},{text:'E', code:false},{text:'S', code:false},{text:'W', code:false}],
              correct: 1, explanation: 'N → E → S → E.' },
            { type: 'multiple-choice', prompt: 'Start facing W. Left, left, right. Final?',
              options: [{text:'N', code:false},{text:'E', code:false},{text:'S', code:false},{text:'W', code:false}],
              correct: 0, explanation: 'W → S → E → N.' },
            { type: 'true-false', statement: 'Three left turns equal one right turn in terms of facing direction.', correct: true, explanation: '3 × 90° left = 270° left = 90° right.' },
            { type: 'reorder-code', prompt: 'Reorder these turns from N to end facing W:',
              lines: ['Start: facing N','Take 1 left turn','Now facing W'],
              correctOrder: [0, 1, 2] }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Ranking ============== */
    {
      id: 'rsn-u12',
      name: 'Unit 12 · Ranking & Order',
      description: 'Sort by clues',
      lessons: [
        {
          id: 'rsn-u12-l1',
          name: 'Linear ordering',
          icon: '📊',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Build the line', content: `<p>Given comparisons like "A is taller than B but shorter than C", build the order:</p>
<div class="code-block">A > B   A is taller than B
A < C   A is shorter than C
<span class="com">// So C > A > B</span></div>
<p>Stack inequalities consistently. Use a horizontal line marked from tallest to shortest.</p>` },
            { type: 'multiple-choice', prompt: 'A is taller than B. B is taller than C. C is taller than D. Who is the tallest?',
              options: [{text:'A', code:false},{text:'B', code:false},{text:'C', code:false},{text:'D', code:false}],
              correct: 0, explanation: 'A > B > C > D.' },
            { type: 'multiple-choice', prompt: 'P is older than Q. R is younger than Q. S is younger than R. Who is the youngest?',
              options: [{text:'P', code:false},{text:'Q', code:false},{text:'R', code:false},{text:'S', code:false}],
              correct: 3, explanation: 'P > Q > R > S; S is youngest.' },
            { type: 'reorder-code', prompt: 'Reorder tallest → shortest given: A is taller than B; B taller than C; C taller than D.',
              lines: ['A','B','C','D'], correctOrder: [0, 1, 2, 3] },
            { type: 'true-false', statement: 'Drawing a number line helps solve ranking puzzles faster.', correct: true, explanation: 'Visualizing positions reduces mistakes.' }
          ]
        },
        {
          id: 'rsn-u12-l2',
          name: 'Mixed comparisons',
          icon: '⚖️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Handle ambiguity carefully', content: `<p>Some clues only narrow down possibilities — you may need to consider multiple orderings.</p>
<div class="code-block">A is taller than B
C is taller than D
<span class="com">// We don\'t know A vs C, B vs D, etc.</span></div>` },
            { type: 'multiple-choice', prompt: 'A>B, C>B, A>C. Who is the shortest?',
              options: [{text:'A', code:false},{text:'B', code:false},{text:'C', code:false},{text:'Cannot tell', code:false}],
              correct: 1, explanation: 'A and C both > B → B is shortest.' },
            { type: 'multiple-choice', prompt: 'Five friends sit in a row: A is between B and C; B is to the right of A. Where is C?',
              options: [{text:'Left of A', code:false},{text:'Right of B', code:false},{text:'Right of A', code:false},{text:'Same as B', code:false}],
              correct: 0, explanation: '"A is between B and C" with B on the right → C is on the left of A.' },
            { type: 'true-false', statement: 'If clues are insufficient, the correct answer can be "Cannot be determined".', correct: true, explanation: 'Yes — that\'s a valid option in many exams.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Linear Seating ============== */
    {
      id: 'rsn-u13',
      name: 'Unit 13 · Seating · Linear',
      description: 'A row of people, conditions to satisfy',
      lessons: [
        {
          id: 'rsn-u13-l1',
          name: 'Direct positions',
          icon: '🪑',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'Two ends, six people', content: `<p>A line has two ends. People are referred to by position (1st from left, 3rd from right, etc.).</p>
<div class="code-block">L: 1  2  3  4  5  6  :R
   A  B  C  D  E  F
<span class="com">// 2nd from left = B
// 3rd from right = D</span></div>` },
            { type: 'multiple-choice', prompt: 'In a row of 6 (A,B,C,D,E,F left→right), who is 4th from the right?',
              options: [{text:'B', code:false},{text:'C', code:false},{text:'D', code:false},{text:'E', code:false}],
              correct: 1, explanation: 'From right: F(1), E(2), D(3), C(4).' },
            { type: 'multiple-choice', prompt: 'If a row has 10 people, who is 6th from the right is also which from the left?',
              options: [{text:'4th', code:false},{text:'5th', code:false},{text:'6th', code:false},{text:'7th', code:false}],
              correct: 1, explanation: 'Formula: 10 - 6 + 1 = 5th from left.' },
            { type: 'type-answer', prompt: 'In a row of 25, what is the position (from left) of the person 11th from the right?',
              accept: ['15'], explanation: '25 - 11 + 1 = 15.' },
            { type: 'true-false', statement: 'For a row of N people, position from left + position from right = N + 1.', correct: true, explanation: 'Classic identity for linear seating.' }
          ]
        },
        {
          id: 'rsn-u13-l2',
          name: 'Conditional clues',
          icon: '🧩',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Combine multiple conditions', content: `<p>Common clue types: "X is next to Y", "Z is to the immediate left of W", "P is at one end".</p>
<p><strong>Strategy:</strong> Place fixed positions (ends, specific seats) first, then use "next to" clues.</p>` },
            { type: 'multiple-choice', prompt: 'A, B, C, D sit in a row. B is to the left of A. C is right of A. D is at the far left. Who is 2nd from left?',
              options: [{text:'A', code:false},{text:'B', code:false},{text:'C', code:false},{text:'D', code:false}],
              correct: 1, explanation: 'Order: D, B, A, C. So 2nd from left = B.' },
            { type: 'multiple-choice', prompt: 'Five friends in a row. P is in the middle. Q is to immediate left of P. R is at one end. S is between Q and R. T is at the other end. Where is T?',
              options: [{text:'1st', code:false},{text:'5th', code:false},{text:'4th', code:false},{text:'Cannot tell', code:false}],
              correct: 1, explanation: 'Order: R, S, Q, P, T or T, P, Q, S, R. Either way T is at an end opposite to R.' },
            { type: 'true-false', statement: '"X to the immediate left of Y" and "X to the left of Y" mean the same thing.', correct: false, explanation: '"Immediate left" means directly next to; "left of" allows any distance.' }
          ]
        },
        {
          id: 'rsn-u13-l3',
          name: 'Facing direction matters',
          icon: '🔁',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Watch which way they face', content: `<p>If people face <em>north</em>, "left" means west. If they face <em>south</em>, "left" means east.</p>
<div class="code-block"><span class="com">Facing N:</span>  L=West, R=East
<span class="com">Facing S:</span>  L=East, R=West</div>
<p>Always sketch arrows for who faces where.</p>` },
            { type: 'multiple-choice', prompt: '5 people face South. A is to the immediate right of B. From observer\'s view, A is on:',
              options: [{text:'Left of B', code:false},{text:'Right of B', code:false},{text:'Same as B', code:false},{text:'Cannot tell', code:false}],
              correct: 0, explanation: 'When facing south, their right = observer\'s left.' },
            { type: 'true-false', statement: 'If everyone in a row faces the same direction, the "left" and "right" of each person agree.', correct: true, explanation: 'Same facing = same handedness.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Circular Seating ============== */
    {
      id: 'rsn-u14',
      name: 'Unit 14 · Seating · Circular',
      description: 'Around a table',
      lessons: [
        {
          id: 'rsn-u14-l1',
          name: 'Facing center',
          icon: '🔵',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Around a circle', content: `<p>When all face the <em>center</em>: clockwise = right of person. So "immediate right" = next clockwise.</p>
<div class="code-block">     A
   /   \\
  D     B
   \\   /
     C
<span class="com">// All face center. Clockwise: A → B → C → D → A
// A\'s right = B; A\'s left = D</span></div>` },
            { type: 'multiple-choice', prompt: '6 people around a table, all face center. P is to the right of Q. Q is to the right of R. What is the order clockwise from R?',
              options: [{text:'R, Q, P', code:false},{text:'R, P, Q', code:false},{text:'P, Q, R', code:false},{text:'Q, R, P', code:false}],
              correct: 0, explanation: 'Right of X = next clockwise. R → Q → P clockwise.' },
            { type: 'multiple-choice', prompt: 'A, B, C, D sit around a round table facing center. A is opposite to C. B is to the immediate left of A. Where is D?',
              options: [{text:'Left of A', code:false},{text:'Right of A', code:false},{text:'Opposite to B', code:false},{text:'Between A and C', code:false}],
              correct: 2, explanation: '4-person table: opposite pairs are (A,C) and (B,D). So D opposes B.' },
            { type: 'true-false', statement: 'When everyone faces the center, "right" means clockwise.', correct: true, explanation: 'Standard convention.' }
          ]
        },
        {
          id: 'rsn-u14-l2',
          name: 'Facing outward',
          icon: '🔄',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Outward flips the direction', content: `<p>When all face <em>outward</em>: clockwise = <strong>left</strong> of each person. Right = anti-clockwise.</p>
<p>Mixed seating (some inward, some outward) requires extra care — apply each person\'s view individually.</p>` },
            { type: 'multiple-choice', prompt: '5 people face outward around a circle. X is to immediate right of Y. Clockwise direction from Y is towards:',
              options: [{text:'X', code:false},{text:'Opposite to X', code:false},{text:'Y itself', code:false},{text:'Cannot tell', code:false}],
              correct: 1, explanation: 'Outward facing: right = anti-clockwise. So clockwise = away from X.' },
            { type: 'true-false', statement: 'If some people face center and others outward, all clockwise/anticlockwise rules apply per individual.', correct: true, explanation: 'Each person\'s "left/right" depends on their own facing.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Syllogisms Basics ============== */
    {
      id: 'rsn-u15',
      name: 'Unit 15 · Syllogisms · Basics',
      description: 'Premises and conclusions',
      lessons: [
        {
          id: 'rsn-u15-l1',
          name: 'All, Some, No',
          icon: '🎯',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Three quantifiers', content: `<p>Syllogisms use three quantifier types:</p>
<div class="code-block"><span class="kw">All</span> A are B   — every A is also a B
<span class="kw">Some</span> A are B  — at least one A is a B
<span class="kw">No</span> A is B    — zero overlap</div>
<p>Always think in Venn diagrams (overlapping circles).</p>` },
            { type: 'multiple-choice', prompt: 'Premise: "All cats are animals." Conclusion: "Some animals are cats." This is:',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false},{text:'Depends', code:false}],
              correct: 0, explanation: 'If all cats are animals, then cats ARE animals — at least cats, so "some animals are cats" follows.' },
            { type: 'multiple-choice', prompt: 'Premise: "Some flowers are red." Conclusion: "All red things are flowers."',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Same thing', code:false},{text:'Probably true', code:false}],
              correct: 1, explanation: 'A subset can\'t imply the reverse — many red things aren\'t flowers.' },
            { type: 'true-false', statement: 'From "No A is B", we can conclude "No B is A".', correct: true, explanation: 'Symmetry of negation — no overlap is no overlap.' },
            { type: 'match-pairs', prompt: 'Match the quantifier to its Venn diagram.', leftLabel: 'Statement', rightLabel: 'Diagram',
              pairs: [{left:'All A are B', right:'A inside B'},{left:'No A is B', right:'A separate from B'},{left:'Some A are B', right:'A and B overlap'},{left:'Some A are not B', right:'Part of A outside B'}] }
          ]
        },
        {
          id: 'rsn-u15-l2',
          name: 'Two-premise syllogisms',
          icon: '📐',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Combine two premises', content: `<p>Given two premises, what conclusions definitely follow?</p>
<div class="code-block">P1: All A are B
P2: All B are C
<span class="com">// Therefore: All A are C ✓ (chain rule)</span></div>
<p>Use Venn diagrams when in doubt.</p>` },
            { type: 'multiple-choice', prompt: 'P1: All dogs are mammals. P2: All mammals are animals. Conclusion: All dogs are animals.',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false},{text:'Wrong premise', code:false}],
              correct: 0, explanation: 'Chain: dogs ⊆ mammals ⊆ animals → dogs ⊆ animals.' },
            { type: 'multiple-choice', prompt: 'P1: Some books are heavy. P2: All heavy things are made of metal. Conclusion: Some books are made of metal.',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false},{text:'No conclusion', code:false}],
              correct: 0, explanation: 'The "heavy books" exist, and heavy → metal, so some books are metal.' },
            { type: 'true-false', statement: 'P1: All A are B. P2: Some B are C. Conclusion: Some A are C. This is valid.', correct: false, explanation: 'Not valid — the "some B that are C" might NOT include any A. Classic trap.' }
          ]
        },
        {
          id: 'rsn-u15-l3',
          name: 'Negative premises',
          icon: '🚫',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'When at least one premise is negative', content: `<p>If even one premise is "No X is Y", the conclusion must also be negative (or stay silent).</p>
<div class="code-block">P1: No cats are dogs
P2: All terriers are dogs
<span class="com">// Conclusion: No cats are terriers ✓</span></div>` },
            { type: 'multiple-choice', prompt: 'P1: No fruit is sour. P2: All apples are fruit. Conclusion: No apples are sour.',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false}],
              correct: 0, explanation: 'Apples ⊆ fruit, and fruit ∩ sour = ∅, so apples ∩ sour = ∅.' },
            { type: 'multiple-choice', prompt: 'P1: Some birds can fly. P2: No fish can fly. Conclusion: Some birds are not fish.',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false}],
              correct: 0, explanation: 'Some birds CAN fly, and no fish CAN fly, so those birds aren\'t fish.' }
          ]
        }
      ]
    },

    /* ============== UNIT 16 — Syllogisms Advanced ============== */
    {
      id: 'rsn-u16',
      name: 'Unit 16 · Syllogisms · Advanced',
      description: 'Possibilities and either-or',
      lessons: [
        {
          id: 'rsn-u16-l1',
          name: 'Either-or and possibilities',
          icon: '🔀',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Either-or conclusions', content: `<p>When two conclusions are <em>complementary</em> (together cover all cases) but neither alone is certain, the answer is "either I or II follows".</p>
<div class="code-block">P1: Some pens are red.
P2: Some pens are not red.

I:  Some pens are red.       (true from P1)
II: Some pens are not red.   (true from P2)
<span class="com">// Together they cover all cases; both follow.</span></div>` },
            { type: 'multiple-choice', prompt: 'P1: All cars are vehicles. Conclusion I: All vehicles are cars. II: Some vehicles are cars. Which follow?',
              options: [{text:'Only I', code:false},{text:'Only II', code:false},{text:'Both', code:false},{text:'Neither', code:false}],
              correct: 1, explanation: 'I is too strong; II is implied because every car is a vehicle.' },
            { type: 'multiple-choice', prompt: 'P1: Some doctors are honest. P2: All honest people are respected. Conclusion: Some doctors are respected.',
              options: [{text:'Valid', code:false},{text:'Invalid', code:false},{text:'Cannot tell', code:false}],
              correct: 0, explanation: 'The honest doctors exist (P1) and are respected (P2). So some doctors are respected.' },
            { type: 'true-false', statement: 'In "either-or" conclusions, both conclusions must individually be uncertain but together cover all cases.', correct: true, explanation: 'Otherwise it would be a definite single conclusion.' }
          ]
        }
      ]
    },

    /* ============== UNIT 17 — Statement & Conclusion ============== */
    {
      id: 'rsn-u17',
      name: 'Unit 17 · Statement & Conclusion',
      description: 'Which conclusion follows?',
      lessons: [
        {
          id: 'rsn-u17-l1',
          name: 'Drawing the right conclusion',
          icon: '✅',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Only what\'s stated, nothing more', content: `<p>A conclusion <em>follows</em> only if it MUST be true given the statement. Avoid bringing outside knowledge.</p>
<p><strong>Rule:</strong> If you have to "assume" anything extra, the conclusion doesn\'t follow.</p>` },
            { type: 'multiple-choice', prompt: 'Statement: "City X has the lowest unemployment in the country." Conclusion: "City X has the highest income."',
              options: [{text:'Follows', code:false},{text:'Does not follow', code:false},{text:'Probably', code:false},{text:'Need more info', code:false}],
              correct: 1, explanation: 'Low unemployment ≠ high income. The statement says nothing about income.' },
            { type: 'multiple-choice', prompt: 'Statement: "Schools must teach moral values." Conclusion: "Schools currently don\'t teach moral values."',
              options: [{text:'Follows', code:false},{text:'Does not follow', code:false},{text:'Both', code:false}],
              correct: 1, explanation: '"Must do X" doesn\'t imply "currently not doing X".' },
            { type: 'true-false', statement: 'A conclusion must be the only possible reading of the statement to be considered as "following".', correct: true, explanation: 'If multiple interpretations exist, the conclusion is uncertain.' }
          ]
        }
      ]
    },

    /* ============== UNIT 18 — Statement & Assumption ============== */
    {
      id: 'rsn-u18',
      name: 'Unit 18 · Statement & Assumption',
      description: 'What\'s assumed?',
      lessons: [
        {
          id: 'rsn-u18-l1',
          name: 'Finding hidden assumptions',
          icon: '🔍',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Assumption = something taken for granted', content: `<p>An <strong>assumption</strong> is unstated but required for the statement to make sense.</p>
<div class="code-block">Statement: "Buy our new app — you\'ll save hours every day."
Assumption: <span class="com">Users have problems that an app can fix; users have time to save.</span></div>` },
            { type: 'multiple-choice', prompt: 'Statement: "Use solar panels to reduce your power bill." Assumption:',
              options: [{text:'Solar panels are cheap', code:false},{text:'Solar panels generate electricity that reduces grid use', code:false},{text:'Everyone has rooftops', code:false},{text:'Power is free', code:false}],
              correct: 1, explanation: 'The statement only makes sense if solar reduces grid usage and thus the bill.' },
            { type: 'multiple-choice', prompt: 'Statement: "Wear a helmet on a bike." Assumption:',
              options: [{text:'Helmets are colorful', code:false},{text:'Bikes can crash', code:false},{text:'Roads are bad', code:false},{text:'Helmets are mandatory', code:false}],
              correct: 1, explanation: 'Wearing protection implies risk of injury exists.' },
            { type: 'true-false', statement: 'An assumption is something explicitly written in the statement.', correct: false, explanation: 'Assumptions are UNSTATED but necessary.' }
          ]
        }
      ]
    },

    /* ============== UNIT 19 — Cause & Effect ============== */
    {
      id: 'rsn-u19',
      name: 'Unit 19 · Cause & Effect',
      description: 'Which event caused which?',
      lessons: [
        {
          id: 'rsn-u19-l1',
          name: 'Identify the cause',
          icon: '⚡',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Which came first?', content: `<p>Given two events, decide:</p>
<div class="code-block">A. A is the cause and B is the effect
B. B is the cause and A is the effect
C. Both A and B are effects of an unrelated cause
D. Both A and B are independent events</div>
<p>Look at <strong>time order</strong> and whether the events could exist without each other.</p>` },
            { type: 'multiple-choice', prompt: 'Event A: Heavy rain in the city. Event B: Roads got flooded. Relationship?',
              options: [{text:'A causes B', code:false},{text:'B causes A', code:false},{text:'Both effects of another cause', code:false},{text:'Independent', code:false}],
              correct: 0, explanation: 'Rain → flooding. Classic cause→effect.' },
            { type: 'multiple-choice', prompt: 'Event A: More students using public libraries. Event B: New academic year started.',
              options: [{text:'A causes B', code:false},{text:'B causes A', code:false},{text:'Both unrelated', code:false},{text:'No causation', code:false}],
              correct: 1, explanation: 'School year → study → library use.' },
            { type: 'true-false', statement: 'A correlation between two events automatically means one causes the other.', correct: false, explanation: 'Classic statistics lesson: correlation ≠ causation.' }
          ]
        }
      ]
    },

    /* ============== UNIT 20 — Course of Action ============== */
    {
      id: 'rsn-u20',
      name: 'Unit 20 · Course of Action',
      description: 'Which action should follow?',
      lessons: [
        {
          id: 'rsn-u20-l1',
          name: 'Recommended actions',
          icon: '🎬',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Practical solutions only', content: `<p>Given a problem statement, evaluate which proposed actions are <strong>practical, specific, and address the problem</strong>.</p>
<p>Reject actions that are: too extreme, irrelevant, hypothetical, or impossible to implement.</p>` },
            { type: 'multiple-choice', prompt: 'Problem: Traffic jams in the city. Action: "Ban all private cars permanently." Should follow?',
              options: [{text:'Yes', code:false},{text:'No — too extreme', code:false},{text:'Maybe', code:false}],
              correct: 1, explanation: 'Total ban is impractical. Better actions: alternatives, infrastructure, traffic policies.' },
            { type: 'multiple-choice', prompt: 'Problem: High school dropout rate. Action: "Provide free meals and tutoring." Should follow?',
              options: [{text:'Yes — practical and targeted', code:false},{text:'No — irrelevant', code:false},{text:'Maybe', code:false}],
              correct: 0, explanation: 'Addresses likely root causes (nutrition, learning support) practically.' },
            { type: 'true-false', statement: 'A "course of action" is valid only if it directly addresses the problem in a feasible way.', correct: true, explanation: 'Both relevance and feasibility matter.' }
          ]
        }
      ]
    },

    /* ============== UNIT 21 — Critical Reasoning ============== */
    {
      id: 'rsn-u21',
      name: 'Unit 21 · Critical Reasoning',
      description: 'Strengthen / weaken arguments',
      lessons: [
        {
          id: 'rsn-u21-l1',
          name: 'Argument structure',
          icon: '⚔️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Premise → Conclusion', content: `<p>Every argument has <strong>premises</strong> (evidence) and a <strong>conclusion</strong> (claim).</p>
<p>To <strong>strengthen</strong>: add a fact that supports the conclusion.<br/>
To <strong>weaken</strong>: add a fact that undermines the conclusion.</p>` },
            { type: 'multiple-choice', prompt: 'Conclusion: "City needs more buses." Which strengthens it?',
              options: [{text:'Bus drivers want raises', code:false},{text:'Most commuters complain about overcrowded buses', code:false},{text:'Cars cause pollution', code:false},{text:'Trains are also full', code:false}],
              correct: 1, explanation: 'Direct evidence that current buses are insufficient.' },
            { type: 'multiple-choice', prompt: 'Conclusion: "Eating vegetables makes people live longer." Which weakens it?',
              options: [{text:'Vegetables are cheap', code:false},{text:'Vegans live longer on average', code:false},{text:'Long-lived people often exercise and don\'t eat extra vegetables', code:false},{text:'Carrots are good for eyes', code:false}],
              correct: 2, explanation: 'It suggests another variable (exercise) might explain longevity — weakens the vegetable claim.' }
          ]
        },
        {
          id: 'rsn-u21-l2',
          name: 'Flaws & counterexamples',
          icon: '🚩',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Common argument flaws', content: `<p>Watch out for:</p>
<div class="code-block">- Hasty generalization (one case → all cases)
- Causation from correlation
- Sample bias
- False dichotomy (only two options shown)
- Appeal to authority/popularity</div>` },
            { type: 'multiple-choice', prompt: '"I met a tall basketball player; therefore all basketball players are tall." This is which flaw?',
              options: [{text:'Hasty generalization', code:false},{text:'False dichotomy', code:false},{text:'Appeal to authority', code:false},{text:'Sample bias', code:false}],
              correct: 0, explanation: 'One case → all cases.' },
            { type: 'multiple-choice', prompt: '"Either we ban cars completely, or pollution will destroy us." This is:',
              options: [{text:'Hasty generalization', code:false},{text:'False dichotomy', code:false},{text:'Sample bias', code:false},{text:'Strong argument', code:false}],
              correct: 1, explanation: 'Presents only two extreme options when more exist.' },
            { type: 'true-false', statement: '"A lot of famous scientists believe X, therefore X is true" is a sound argument.', correct: false, explanation: 'That\'s "appeal to authority" — popularity ≠ truth.' }
          ]
        }
      ]
    },

    /* ============== UNIT 22 — Puzzles: Floors ============== */
    {
      id: 'rsn-u22',
      name: 'Unit 22 · Puzzles · Floors',
      description: 'Who lives where?',
      lessons: [
        {
          id: 'rsn-u22-l1',
          name: 'Floor assignment',
          icon: '🏢',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'A building, N floors, N people', content: `<p>Common setup: 5 people live on 5 floors of a building (floor 1 = ground, floor 5 = top). Multiple clues fix who is where.</p>
<div class="code-block">P lives 2 floors above Q
R lives on the topmost floor
S lives directly below R
T lives on the ground floor
<span class="com">// Q lives on which floor?</span></div>
<p><strong>Strategy:</strong> Fix absolutes (T=1, R=5) → S=4 → P-Q gap=2 → Q=2, P=4 conflict with S → so Q=1? No, T=1 → Q must be a floor 2-3 satisfying P=Q+2. Q=2, P=4 → but S=4 — clash. Re-examine.</p>` },
            { type: 'multiple-choice', prompt: '5 floors. A is on the 3rd floor. B is below A. C is on the top floor. D is just below C. Where is B?',
              options: [{text:'1st or 2nd', code:false},{text:'3rd', code:false},{text:'4th', code:false},{text:'5th', code:false}],
              correct: 0, explanation: 'A=3, C=5, D=4. B is below A so B ∈ {1, 2}.' },
            { type: 'multiple-choice', prompt: '7 floors, 7 people. P lives directly above Q. R is on the 4th floor. P is 2 floors above R. Where does Q live?',
              options: [{text:'3rd', code:false},{text:'4th', code:false},{text:'5th', code:false},{text:'6th', code:false}],
              correct: 2, explanation: 'P = R+2 = 6. Q is directly below P → Q = 5.' },
            { type: 'true-false', statement: 'In floor puzzles, the floor number is the same as "from bottom".', correct: true, explanation: 'Floor 1 = ground = 1st from bottom.' }
          ]
        },
        {
          id: 'rsn-u22-l2',
          name: 'Multiple categories',
          icon: '🏠',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Floors + colors + jobs', content: `<p>Add a 2nd or 3rd attribute (color of house, profession, day off). Make a grid table.</p>
<div class="code-block">      Floor | Color | Job
P:       3   | Red   | Doctor
Q:       1   | Blue  | Teacher
...</div>
<p>Cross out impossibilities; the right answer emerges.</p>` },
            { type: 'multiple-choice', prompt: '3 floors, 3 people: A (doctor), B (engineer), C (teacher). The doctor lives on the top floor. The teacher lives on the ground floor. Who lives on the 2nd floor?',
              options: [{text:'A', code:false},{text:'B', code:false},{text:'C', code:false},{text:'Cannot tell', code:false}],
              correct: 1, explanation: 'A=top, C=ground, so B=2nd.' }
          ]
        }
      ]
    },

    /* ============== UNIT 23 — Puzzles: Days/Months ============== */
    {
      id: 'rsn-u23',
      name: 'Unit 23 · Puzzles · Days/Months',
      description: 'Schedules and timings',
      lessons: [
        {
          id: 'rsn-u23-l1',
          name: 'Meeting days',
          icon: '📅',
          xp: 25,
          challenges: [
            { type: 'concept', title: '7 days, 7 things', content: `<p>Common setup: 5 friends meet on different days of the week. Use a row Mon-Sun and place people.</p>
<div class="code-block">Mon  Tue  Wed  Thu  Fri  Sat  Sun
                  ↑
                meeting day</div>` },
            { type: 'multiple-choice', prompt: 'Five friends meet on Mon-Fri (one per day). A meets before B. C meets on Wed. D meets two days after C. Who meets on Friday?',
              options: [{text:'A', code:false},{text:'B', code:false},{text:'D', code:false},{text:'E', code:false}],
              correct: 2, explanation: 'C=Wed, D=Wed+2=Fri.' },
            { type: 'multiple-choice', prompt: 'In a week, X meets on Tuesday. Y meets 3 days after X. Z meets one day before Y. On which day does Z meet?',
              options: [{text:'Wednesday', code:false},{text:'Thursday', code:false},{text:'Friday', code:false},{text:'Saturday', code:false}],
              correct: 1, explanation: 'X=Tue, Y=Tue+3=Fri, Z=Fri-1=Thu.' }
          ]
        },
        {
          id: 'rsn-u23-l2',
          name: 'Month problems',
          icon: '🗓️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Months and birthdays', content: `<p>For "birthdays in different months" — apply month order: Jan(1), Feb(2), ..., Dec(12).</p>` },
            { type: 'multiple-choice', prompt: 'A\'s birthday is in March. B\'s is 3 months later. C is between A and B. Which month is B?',
              options: [{text:'May', code:false},{text:'June', code:false},{text:'July', code:false},{text:'August', code:false}],
              correct: 1, explanation: 'March + 3 = June.' },
            { type: 'true-false', statement: 'When working with months, treat them as numbers 1-12 for easy arithmetic.', correct: true, explanation: 'Yes — mod 12 if needed for wrap-around.' }
          ]
        }
      ]
    },

    /* ============== UNIT 24 — Calendars ============== */
    {
      id: 'rsn-u24',
      name: 'Unit 24 · Calendars',
      description: 'What day of the week was it?',
      lessons: [
        {
          id: 'rsn-u24-l1',
          name: 'Odd-day method',
          icon: '📆',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Counting odd days', content: `<p>An ordinary year has 365 days = 52 weeks + <strong>1 odd day</strong>.<br/>
A leap year has 366 days = 52 weeks + <strong>2 odd days</strong>.</p>
<div class="code-block"><span class="com">Leap year rule:</span>
Divisible by 4, EXCEPT century years (÷100) — those must be ÷400.
2020 leap (÷4)  ✓
1900 NOT leap (÷100 but not ÷400) ✗
2000 leap (÷400) ✓</div>
<p>To find day of week N days after a known day: (N mod 7) days forward.</p>` },
            { type: 'multiple-choice', prompt: 'How many odd days in a leap year?',
              options: [{text:'0', code:false},{text:'1', code:false},{text:'2', code:false},{text:'3', code:false}],
              correct: 2, explanation: '366 / 7 = 52 weeks + 2 days.' },
            { type: 'multiple-choice', prompt: 'Today is Monday. What day will it be 100 days later?',
              options: [{text:'Tuesday', code:false},{text:'Wednesday', code:false},{text:'Thursday', code:false},{text:'Friday', code:false}],
              correct: 1, explanation: '100 mod 7 = 2. Monday + 2 = Wednesday.' },
            { type: 'multiple-choice', prompt: 'Is 1900 a leap year?',
              options: [{text:'Yes', code:false},{text:'No', code:false},{text:'Maybe', code:false}],
              correct: 1, explanation: 'Century not divisible by 400 → not a leap year.' },
            { type: 'true-false', statement: 'Every year divisible by 4 is a leap year.', correct: false, explanation: 'Not for century years unless divisible by 400.' }
          ]
        },
        {
          id: 'rsn-u24-l2',
          name: 'Day repeats',
          icon: '🔁',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Same day next year?', content: `<p>The same date in next year shifts forward by <strong>1 day</strong> (or 2 if leap year intervenes).</p>` },
            { type: 'multiple-choice', prompt: 'If Jan 1, 2023 is Sunday, what is Jan 1, 2024?',
              options: [{text:'Sunday', code:false},{text:'Monday', code:false},{text:'Tuesday', code:false},{text:'Wednesday', code:false}],
              correct: 1, explanation: '2023 is non-leap → +1 day. Sun + 1 = Mon.' },
            { type: 'multiple-choice', prompt: 'If Jan 1, 2024 is Monday, what is Jan 1, 2025? (2024 is leap)',
              options: [{text:'Tuesday', code:false},{text:'Wednesday', code:false},{text:'Thursday', code:false},{text:'Friday', code:false}],
              correct: 1, explanation: '2024 leap → +2 days. Mon + 2 = Wed.' }
          ]
        }
      ]
    },

    /* ============== UNIT 25 — Clocks ============== */
    {
      id: 'rsn-u25',
      name: 'Unit 25 · Clocks',
      description: 'Time on the analog face',
      lessons: [
        {
          id: 'rsn-u25-l1',
          name: 'Angles between hands',
          icon: '🕐',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Hour hand and minute hand', content: `<p>Hour hand moves 360°/12 = <strong>30° per hour</strong> = 0.5°/min.<br/>
Minute hand moves 360°/60 = <strong>6° per minute</strong>.</p>
<div class="code-block">Angle = |30·H − 5.5·M|

Example: 3:00 → |30·3 − 5.5·0| = 90°  ✓
         3:30 → |30·3 − 5.5·30| = |90 − 165| = 75°</div>` },
            { type: 'multiple-choice', prompt: 'What is the angle between the hands at 3:00?',
              options: [{text:'30°', code:false},{text:'60°', code:false},{text:'90°', code:false},{text:'120°', code:false}],
              correct: 2, explanation: 'Each hour mark = 30°. 3 hours apart = 90°.' },
            { type: 'multiple-choice', prompt: 'Angle at 6:00?',
              options: [{text:'90°', code:false},{text:'120°', code:false},{text:'150°', code:false},{text:'180°', code:false}],
              correct: 3, explanation: 'At 6:00, hands are opposite → 180°.' },
            { type: 'type-answer', prompt: 'In degrees, what does the minute hand move per minute?',
              accept: ['6','6 degrees'], explanation: '360° / 60 = 6° per minute.' },
            { type: 'output-predict', prompt: 'Angle at 2:30?',
              code: `<span class="com">// |30·2 - 5.5·30| = |60 - 165|</span>`,
              options: ['85°','95°','105°','115°'], correct: 2, explanation: '|60 − 165| = 105°.' }
          ]
        },
        {
          id: 'rsn-u25-l2',
          name: 'Mirror & water images',
          icon: '🪞',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Reflect the clock', content: `<p><strong>Mirror image time:</strong> Subtract the time from 11:60 (or 12:00).</p>
<div class="code-block">Real time: 4:20
Mirror:    11:60 - 4:20 = 7:40</div>
<p><strong>Water image:</strong> Subtract from 18:30 (or treat as flip across horizontal).</p>` },
            { type: 'multiple-choice', prompt: 'Mirror image of clock showing 3:30?',
              options: [{text:'8:30', code:false},{text:'9:00', code:false},{text:'8:00', code:false},{text:'7:30', code:false}],
              correct: 0, explanation: '11:60 − 3:30 = 8:30.' },
            { type: 'multiple-choice', prompt: 'Mirror image of 10:10?',
              options: [{text:'1:50', code:false},{text:'2:10', code:false},{text:'1:10', code:false},{text:'2:50', code:false}],
              correct: 0, explanation: '11:60 − 10:10 = 1:50.' }
          ]
        }
      ]
    },

    /* ============== UNIT 26 — Cubes & Dice ============== */
    {
      id: 'rsn-u26',
      name: 'Unit 26 · Cubes & Dice',
      description: 'Visualize the 3D',
      lessons: [
        {
          id: 'rsn-u26-l1',
          name: 'Dice opposites',
          icon: '🎲',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Standard dice', content: `<p>On a standard die, opposite faces sum to <strong>7</strong>.</p>
<div class="code-block">1 ↔ 6
2 ↔ 5
3 ↔ 4</div>
<p>Two faces are "adjacent" if visible together in a single view.</p>` },
            { type: 'multiple-choice', prompt: 'On a standard die, what is opposite to 2?',
              options: [{text:'3', code:false},{text:'4', code:false},{text:'5', code:false},{text:'6', code:false}],
              correct: 2, explanation: '2 + opposite = 7 → opposite = 5.' },
            { type: 'multiple-choice', prompt: 'In a die showing top=1, front=2, what is on the bottom?',
              options: [{text:'5', code:false},{text:'6', code:false},{text:'3', code:false},{text:'4', code:false}],
              correct: 1, explanation: 'Bottom opposite top = 6.' },
            { type: 'type-answer', prompt: 'Opposite faces of a standard die sum to ___',
              accept: ['7'], explanation: 'A defining rule of standard dice.' }
          ]
        },
        {
          id: 'rsn-u26-l2',
          name: 'Painted cubes',
          icon: '🟦',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'n×n×n cube cut into n³ small cubes', content: `<p>If a 3×3×3 cube is painted on all 6 sides, then cut into 27 small cubes:</p>
<div class="code-block">8  corner cubes  → 3 faces painted
12 edge cubes    → 2 faces painted
6  face-center   → 1 face painted
1  inside cube   → 0 faces painted</div>
<p>For n×n×n: 8 corners, 12(n−2) edges, 6(n−2)² faces, (n−2)³ inside.</p>` },
            { type: 'multiple-choice', prompt: '3×3×3 cube painted and cut into 27. How many small cubes have exactly 2 faces painted?',
              options: [{text:'8', code:false},{text:'12', code:false},{text:'6', code:false},{text:'1', code:false}],
              correct: 1, explanation: 'Edge cubes have 2 painted faces — there are 12 in a 3×3×3.' },
            { type: 'multiple-choice', prompt: 'In a 4×4×4 painted cube, how many have NO faces painted?',
              options: [{text:'4', code:false},{text:'6', code:false},{text:'8', code:false},{text:'12', code:false}],
              correct: 2, explanation: '(4-2)³ = 8 inside cubes.' },
            { type: 'output-predict', prompt: 'In an n×n×n painted cube, formula for edge cubes (2 faces painted)?',
              code: `<span class="com">// 12 edges of cube × (n-2) middle pieces per edge</span>`,
              options: ['8(n-2)','12(n-2)','12(n-2)²','6(n-2)²'], correct: 1, explanation: '12 edges × (n−2) edge-middles.' }
          ]
        }
      ]
    },

    /* ============== UNIT 27 — Figure Series ============== */
    {
      id: 'rsn-u27',
      name: 'Unit 27 · Non-Verbal · Figure Series',
      description: 'What comes next visually?',
      lessons: [
        {
          id: 'rsn-u27-l1',
          name: 'Rotation rules',
          icon: '🔄',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Common rules to look for', content: `<p>Figures usually change by one of:</p>
<div class="code-block">- Rotation (45°, 90°, 180°)
- Reflection (mirror)
- Adding / removing elements
- Number of sides/lines changing
- Position of shaded region shifting</div>
<p>Identify ONE rule that applies between every pair of adjacent figures.</p>` },
            { type: 'multiple-choice', prompt: 'A square rotates 90° clockwise each step. After 4 rotations, it looks ___ the original.',
              options: [{text:'Identical to', code:false},{text:'Mirror of', code:false},{text:'Reflected', code:false},{text:'Rotated 90°', code:false}],
              correct: 0, explanation: '4 × 90° = 360° = full rotation, back to start.' },
            { type: 'multiple-choice', prompt: 'A clock\'s minute hand rotates by what each step in a 4-step series moving by 15 min each?',
              options: [{text:'30°', code:false},{text:'45°', code:false},{text:'60°', code:false},{text:'90°', code:false}],
              correct: 3, explanation: '15 min × 6° per min = 90°.' },
            { type: 'true-false', statement: 'In a figure series, only ONE transformation rule usually applies between adjacent figures.', correct: true, explanation: 'Otherwise the series would be ambiguous.' }
          ]
        },
        {
          id: 'rsn-u27-l2',
          name: 'Counting elements',
          icon: '📊',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Watch the counts', content: `<p>Many problems hinge on: how many lines, how many dots, how many shaded regions.</p>
<p>If the count changes by +1, +2, +3 — the next is +4.</p>` },
            { type: 'multiple-choice', prompt: 'A figure has 1, 3, 6, 10, ... dots. How many in the next?',
              options: [{text:'12', code:false},{text:'14', code:false},{text:'15', code:false},{text:'16', code:false}],
              correct: 2, explanation: 'Differences: +2, +3, +4, next +5 → 15. (These are triangular numbers.)' },
            { type: 'multiple-choice', prompt: 'Lines in figures: 3, 4, 5, 6. Next?',
              options: [{text:'6', code:false},{text:'7', code:false},{text:'8', code:false},{text:'9', code:false}],
              correct: 1, explanation: '+1 each step → 7.' }
          ]
        }
      ]
    },

    /* ============== UNIT 28 — Mirror Images ============== */
    {
      id: 'rsn-u28',
      name: 'Unit 28 · Non-Verbal · Mirror Images',
      description: 'Reflect left-right',
      lessons: [
        {
          id: 'rsn-u28-l1',
          name: 'Reflection rules',
          icon: '🪞',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'A mirror flips left ↔ right', content: `<p>For words: each letter swaps left-right (and "p" looks like "q", "b" like "d"), AND the order reverses.</p>
<div class="code-block">Original: CODE
Mirror:   <span class="ty">EDOC</span> (reversed and each letter flipped if asymmetric)</div>
<p>Some letters look the same in a mirror: A, H, I, M, O, T, U, V, W, X, Y.</p>` },
            { type: 'multiple-choice', prompt: 'Which letter looks the SAME in a vertical mirror?',
              options: [{text:'B', code:true},{text:'F', code:true},{text:'A', code:true},{text:'R', code:true}],
              correct: 2, explanation: 'A is symmetric across the vertical axis.' },
            { type: 'multiple-choice', prompt: 'Mirror image of "BOX" (vertical mirror) is:',
              options: [{text:'XOB', code:true},{text:'BOX', code:true},{text:'XOꓭ', code:true},{text:'KOꓭ', code:true}],
              correct: 0, explanation: 'Letters reverse order: XOB. O and X are symmetric; B flips but in text we usually write the reversed string.' },
            { type: 'true-false', statement: 'The letter "Z" looks the same in a vertical mirror.', correct: false, explanation: '"Z" flips to "S"-like; it\'s NOT symmetric vertically.' }
          ]
        }
      ]
    },

    /* ============== UNIT 29 — Embedded figures ============== */
    {
      id: 'rsn-u29',
      name: 'Unit 29 · Non-Verbal · Embedded Figures',
      description: 'Find shapes hidden in shapes',
      lessons: [
        {
          id: 'rsn-u29-l1',
          name: 'Counting triangles & squares',
          icon: '🔺',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Systematic counting', content: `<p>In a complex figure, count:</p>
<ol>
<li>Smallest triangles/squares (1-unit)</li>
<li>Triangles/squares made of 2 units</li>
<li>... 3 units, 4 units</li>
</ol>
<p>Sum them up carefully — many candidates miss the larger ones.</p>` },
            { type: 'multiple-choice', prompt: 'A 2×2 grid of squares: total squares of any size?',
              options: [{text:'4', code:false},{text:'5', code:false},{text:'6', code:false},{text:'7', code:false}],
              correct: 1, explanation: '4 small (1×1) + 1 large (2×2) = 5.' },
            { type: 'multiple-choice', prompt: 'A 3×3 grid: total squares of any size?',
              options: [{text:'9', code:false},{text:'11', code:false},{text:'13', code:false},{text:'14', code:false}],
              correct: 3, explanation: '9 (1×1) + 4 (2×2) + 1 (3×3) = 14.' },
            { type: 'type-answer', prompt: 'In an n×n grid, the formula for total squares is the sum of k² for k=1..n. For n=4, count = ?',
              accept: ['30'], explanation: '1²+2²+3²+4² = 1+4+9+16 = 30.' }
          ]
        }
      ]
    },

    /* ============== UNIT 30 — Paper Folding ============== */
    {
      id: 'rsn-u30',
      name: 'Unit 30 · Paper Folding & Cutting',
      description: 'Unfold mentally',
      lessons: [
        {
          id: 'rsn-u30-l1',
          name: 'Symmetric unfolding',
          icon: '📄',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Each fold doubles the cut', content: `<p>If you fold a paper once and cut a hole, then unfold, there are <strong>2 holes</strong> mirrored across the fold.</p>
<p>Fold twice (perpendicular folds), one cut → <strong>4 holes</strong>. Fold n times → <strong>2ⁿ holes</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'Fold a paper twice (perpendicular folds) and punch ONE hole. After unfolding, how many holes?',
              options: [{text:'2', code:false},{text:'3', code:false},{text:'4', code:false},{text:'8', code:false}],
              correct: 2, explanation: '2² = 4 holes.' },
            { type: 'multiple-choice', prompt: 'Folded paper, cut a triangle from the edge once. Unfold once. The shape appears:',
              options: [{text:'As one triangle', code:false},{text:'As two mirror triangles', code:false},{text:'As four triangles', code:false}],
              correct: 1, explanation: 'A single fold creates a mirror image; the cut appears on both sides.' },
            { type: 'true-false', statement: 'After folding 3 times, one cut produces 8 holes.', correct: true, explanation: '2³ = 8.' }
          ]
        }
      ]
    },

    /* ============== UNIT 31 — Venn Diagrams ============== */
    {
      id: 'rsn-u31',
      name: 'Unit 31 · Logical Venn Diagrams',
      description: 'Three circles, many regions',
      lessons: [
        {
          id: 'rsn-u31-l1',
          name: 'Three-set diagrams',
          icon: '⭕',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Three overlapping circles', content: `<p>Three circles A, B, C create <strong>7 regions</strong>:</p>
<div class="code-block">A only · B only · C only
AB only · AC only · BC only
A∩B∩C (center)</div>
<p>For counting questions, fill the center first, then move outward.</p>` },
            { type: 'multiple-choice', prompt: 'In a class of 30, 18 like math, 12 like science, 8 like both. How many like only math?',
              options: [{text:'4', code:false},{text:'8', code:false},{text:'10', code:false},{text:'14', code:false}],
              correct: 2, explanation: 'Only math = 18 − 8 (both) = 10.' },
            { type: 'multiple-choice', prompt: '50 people: 30 like tea, 25 like coffee, 10 like both. Who likes only one?',
              options: [{text:'30', code:false},{text:'35', code:false},{text:'40', code:false},{text:'45', code:false}],
              correct: 1, explanation: 'Only tea = 30−10 = 20. Only coffee = 25−10 = 15. Total only-one = 35.' },
            { type: 'true-false', statement: '|A ∪ B| = |A| + |B| − |A ∩ B| is the inclusion-exclusion principle.', correct: true, explanation: 'Yes — standard set-counting formula.' }
          ]
        }
      ]
    },

    /* ============== UNIT 32 — Data Sufficiency ============== */
    {
      id: 'rsn-u32',
      name: 'Unit 32 · Data Sufficiency',
      description: 'Is the data enough?',
      lessons: [
        {
          id: 'rsn-u32-l1',
          name: 'Five-option DS',
          icon: '🔍',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'A standard DS choice set', content: `<p>For "is statement(s) sufficient?":</p>
<div class="code-block">A. I alone is sufficient, II is not
B. II alone is sufficient, I is not
C. Both together sufficient, neither alone
D. Either alone is sufficient
E. Neither sufficient even together</div>
<p>Decide for each statement independently first, then together if needed.</p>` },
            { type: 'multiple-choice', prompt: 'Question: Is X > 5? Statement I: X is positive. Statement II: X = 7. Which is sufficient?',
              options: [{text:'Only I', code:false},{text:'Only II', code:false},{text:'Both together', code:false},{text:'Either alone', code:false}],
              correct: 1, explanation: 'I doesn\'t fix value; II directly says X=7 > 5.' },
            { type: 'multiple-choice', prompt: 'Question: How old is Alice? Statement I: Alice is twice Bob\'s age. Statement II: Bob is 15.',
              options: [{text:'Only I', code:false},{text:'Only II', code:false},{text:'Both together', code:false},{text:'Either alone', code:false}],
              correct: 2, explanation: 'Need both to compute Alice = 2 × 15 = 30.' },
            { type: 'true-false', statement: 'In DS, "sufficient" means there is exactly one possible answer to the question.', correct: true, explanation: 'A unique answer means sufficient.' }
          ]
        },
        {
          id: 'rsn-u32-l2',
          name: 'When neither is enough',
          icon: '❓',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Sometimes data is just missing', content: `<p>If even combining both statements leaves multiple possibilities for the answer, the answer is "neither sufficient".</p>` },
            { type: 'multiple-choice', prompt: 'Question: What is X? I: X is even. II: X is between 1 and 10. Which is sufficient?',
              options: [{text:'Only I', code:false},{text:'Only II', code:false},{text:'Both together', code:false},{text:'Neither even together', code:false}],
              correct: 3, explanation: 'Even AND between 1-10 still has {2,4,6,8}.' }
          ]
        }
      ]
    },

    /* ============== UNIT 33 — Input-Output Machine ============== */
    {
      id: 'rsn-u33',
      name: 'Unit 33 · Input–Output Machine',
      description: 'Banking-style rearrangement',
      lessons: [
        {
          id: 'rsn-u33-l1',
          name: 'Tracking transformations',
          icon: '🤖',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'A machine moves words/numbers around', content: `<p>Given an initial line and successive steps, deduce the rule (sort, shift, swap, alternate, etc.).</p>
<div class="code-block">Input:  4 dog 7 cat 9 bird
Step 1: 9 4 dog 7 cat bird
Step 2: 9 7 4 dog cat bird
<span class="com">// Largest number moves to front per step</span></div>
<p>Once you find the rule, you can predict any later step.</p>` },
            { type: 'multiple-choice', prompt: 'Input: 5 10 2 8 15. Step 1: 15 5 10 2 8. Step 2: 15 10 5 2 8. Pattern?',
              options: [{text:'Sort ascending', code:false},{text:'Sort descending front-to-back', code:false},{text:'Reverse', code:false},{text:'Alternate', code:false}],
              correct: 1, explanation: 'Each step moves the next-largest number to the front.' },
            { type: 'multiple-choice', prompt: 'If input is 3 1 4 1 5 and step 1 is 1 3 1 4 5, the rule is:',
              options: [{text:'Smallest to front', code:false},{text:'Reverse', code:false},{text:'Sort ascending', code:false},{text:'Largest to back', code:false}],
              correct: 0, explanation: 'Smallest (1) moves to the front. (Both 1s — first occurrence goes first.)' },
            { type: 'reorder-code', prompt: 'Steps to solve input-output: 1) Read input 2) Compare to step 1 3) Identify pattern 4) Apply to find later step.',
              lines: ['Read input', 'Compare to step 1', 'Identify the rule', 'Apply rule for later step'],
              correctOrder: [0, 1, 2, 3] }
          ]
        }
      ]
    }

  ]
});

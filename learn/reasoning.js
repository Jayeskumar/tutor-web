LEARN('reasoning', {
  intro: 'Master logical reasoning for competitive exams — series, analogies, blood relations, seating, syllogisms, puzzles and more, with diagrams and worked examples.',
  chapters: [

    /* ============== CH 1: What is Reasoning? ============== */
    { id: 'rsn-c1', title: 'What is Reasoning?', icon: '🧠', sections: [
      { type: 'heading', text: 'Reasoning — the brain gym', level: 1 },
      { type: 'para', html: '<strong>Reasoning</strong> is the ability to think logically — to spot patterns, draw conclusions, and solve problems using rules. Almost every competitive exam (banking, SSC, CAT, GATE, placements) has a reasoning section.' },
      { type: 'callout', kind: 'info', html: 'Reasoning is <strong>not about memorising facts</strong>. It tests <em>how you think</em>. Practice and pattern-recognition are your best friends.' },

      { type: 'heading', text: 'Three broad categories', level: 2 },
      { type: 'image', alt: 'categories of reasoning', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="26" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="15">Types of Reasoning</text>
  <g font-family="Nunito">
    <rect x="30" y="50" width="170" height="200" rx="12" fill="#7c4dff"/>
    <text x="115" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="14">Verbal</text>
    <text x="115" y="110" text-anchor="middle" fill="white" font-size="11">Analogies</text>
    <text x="115" y="130" text-anchor="middle" fill="white" font-size="11">Blood relations</text>
    <text x="115" y="150" text-anchor="middle" fill="white" font-size="11">Syllogisms</text>
    <text x="115" y="170" text-anchor="middle" fill="white" font-size="11">Directions</text>
    <text x="115" y="190" text-anchor="middle" fill="white" font-size="11">Coding-decoding</text>
    <text x="115" y="210" text-anchor="middle" fill="white" font-size="11">Series</text>
    <text x="115" y="230" text-anchor="middle" fill="white" font-size="11">Puzzles</text>

    <rect x="215" y="50" width="170" height="200" rx="12" fill="#1cb0f6"/>
    <text x="300" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="14">Logical</text>
    <text x="300" y="110" text-anchor="middle" fill="white" font-size="11">Statement &amp; conclusion</text>
    <text x="300" y="130" text-anchor="middle" fill="white" font-size="11">Statement &amp; assumption</text>
    <text x="300" y="150" text-anchor="middle" fill="white" font-size="11">Cause &amp; effect</text>
    <text x="300" y="170" text-anchor="middle" fill="white" font-size="11">Strengthen / weaken</text>
    <text x="300" y="190" text-anchor="middle" fill="white" font-size="11">Inference</text>
    <text x="300" y="210" text-anchor="middle" fill="white" font-size="11">Course of action</text>
    <text x="300" y="230" text-anchor="middle" fill="white" font-size="11">Data sufficiency</text>

    <rect x="400" y="50" width="170" height="200" rx="12" fill="#58cc02"/>
    <text x="485" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="14">Non-verbal</text>
    <text x="485" y="110" text-anchor="middle" fill="white" font-size="11">Figure series</text>
    <text x="485" y="130" text-anchor="middle" fill="white" font-size="11">Mirror images</text>
    <text x="485" y="150" text-anchor="middle" fill="white" font-size="11">Water images</text>
    <text x="485" y="170" text-anchor="middle" fill="white" font-size="11">Paper folding</text>
    <text x="485" y="190" text-anchor="middle" fill="white" font-size="11">Cubes &amp; dice</text>
    <text x="485" y="210" text-anchor="middle" fill="white" font-size="11">Embedded figures</text>
    <text x="485" y="230" text-anchor="middle" fill="white" font-size="11">Counting figures</text>
  </g>
</svg>` },

      { type: 'heading', text: 'How to approach a reasoning question', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Read carefully.</strong> Many questions trip you up with a single word like "only" or "except".',
        '<strong>Identify the pattern.</strong> Is it arithmetic? Alphabetical? Positional?',
        '<strong>Visualise.</strong> A quick diagram (family tree, compass, table) often makes the answer obvious.',
        '<strong>Eliminate options.</strong> When stuck, rule out wrong answers and pick the best of what remains.',
        '<strong>Watch the clock.</strong> Move on if a question is taking too long — return to it later.'
      ]},

      { type: 'heading', text: 'A taste of each category', level: 2 },
      { type: 'para', html: '<strong>Verbal example:</strong> <em>Doctor : Patient :: Teacher : ?</em> — the relation is "professional : person they serve" → <strong>Student</strong>.' },
      { type: 'para', html: '<strong>Logical example:</strong> All cats are mammals. All mammals are animals. → Therefore <strong>all cats are animals</strong>.' },
      { type: 'para', html: '<strong>Non-verbal example:</strong> Which figure comes next in a pattern that rotates 90° clockwise? Visualise and pick.' },

      { type: 'callout', kind: 'tip', html: 'Build a <strong>30-minute daily habit</strong>. Reasoning is a muscle — small daily practice beats marathon weekend sessions.' },

      { type: 'heading', text: 'Why exams love reasoning', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'It can\'t be crammed — it measures genuine thinking skill.',
        'It predicts on-the-job problem-solving ability.',
        'It separates candidates fairly across diverse academic backgrounds.',
        'Questions can be auto-graded with no ambiguity.'
      ]},

      { type: 'divider' },
      { type: 'para', html: 'Ready? Let\'s start with the most classic reasoning question type — <strong>number series</strong>.' }
    ]},

    /* ============== CH 2: Number Series ============== */
    { id: 'rsn-c2', title: 'Number Series', icon: '🔢', sections: [
      { type: 'heading', text: 'Find the next number', level: 1 },
      { type: 'para', html: 'A <strong>number series</strong> is a sequence of numbers following a hidden rule. Your job: spot the rule and supply the missing term.' },

      { type: 'heading', text: '1. Arithmetic series (constant difference)', level: 2 },
      { type: 'para', html: 'Each term increases (or decreases) by a fixed amount.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 3, 7, 11, 15, ?, 23</span>
Difference = +<span class="num">4</span> each time
Next term = <span class="num">15</span> + <span class="num">4</span> = <span class="num">19</span> ✓` },

      { type: 'heading', text: '2. Geometric series (constant ratio)', level: 2 },
      { type: 'para', html: 'Each term is multiplied (or divided) by a fixed factor.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 2, 6, 18, 54, ?</span>
Ratio = ×<span class="num">3</span>
Next = <span class="num">54</span> × <span class="num">3</span> = <span class="num">162</span> ✓

<span class="com">Example: 256, 128, 64, 32, ?</span>
Ratio = ÷<span class="num">2</span>
Next = <span class="num">32</span> ÷ <span class="num">2</span> = <span class="num">16</span> ✓` },

      { type: 'heading', text: '3. Mixed series — differences of differences', level: 2 },
      { type: 'para', html: 'When the difference itself changes, look at the <em>second-level</em> difference.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 2, 5, 10, 17, 26, ?</span>
Differences: +<span class="num">3</span>, +<span class="num">5</span>, +<span class="num">7</span>, +<span class="num">9</span>, ...
Pattern: odd numbers
Next diff = +<span class="num">11</span>
Answer = <span class="num">26</span> + <span class="num">11</span> = <span class="num">37</span> ✓` },

      { type: 'image', alt: 'series visualisation', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">2, 5, 10, 17, 26, 37 — differences grow by 2</text>
  <g font-family="JetBrains Mono">
    <circle cx="60" cy="80" r="22" fill="#7c4dff"/><text x="60" y="86" text-anchor="middle" fill="white" font-weight="bold">2</text>
    <circle cx="150" cy="80" r="22" fill="#7c4dff"/><text x="150" y="86" text-anchor="middle" fill="white" font-weight="bold">5</text>
    <circle cx="240" cy="80" r="22" fill="#7c4dff"/><text x="240" y="86" text-anchor="middle" fill="white" font-weight="bold">10</text>
    <circle cx="330" cy="80" r="22" fill="#7c4dff"/><text x="330" y="86" text-anchor="middle" fill="white" font-weight="bold">17</text>
    <circle cx="420" cy="80" r="22" fill="#7c4dff"/><text x="420" y="86" text-anchor="middle" fill="white" font-weight="bold">26</text>
    <circle cx="510" cy="80" r="22" fill="#58cc02"/><text x="510" y="86" text-anchor="middle" fill="white" font-weight="bold">37</text>
    <text x="105" y="135" text-anchor="middle" fill="#ff5252" font-weight="bold">+3</text>
    <text x="195" y="135" text-anchor="middle" fill="#ff5252" font-weight="bold">+5</text>
    <text x="285" y="135" text-anchor="middle" fill="#ff5252" font-weight="bold">+7</text>
    <text x="375" y="135" text-anchor="middle" fill="#ff5252" font-weight="bold">+9</text>
    <text x="465" y="135" text-anchor="middle" fill="#ff5252" font-weight="bold">+11</text>
  </g>
</svg>` },

      { type: 'heading', text: '4. Fibonacci-style series', level: 2 },
      { type: 'para', html: 'Each term = sum of the previous two.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 1, 1, 2, 3, 5, 8, 13, ?</span>
Rule: a(n) = a(n-1) + a(n-2)
Next = <span class="num">8</span> + <span class="num">13</span> = <span class="num">21</span> ✓

<span class="com">Variant: 4, 7, 11, 18, 29, ?</span>
Next = <span class="num">18</span> + <span class="num">29</span> = <span class="num">47</span> ✓` },

      { type: 'heading', text: '5. Prime-number series', level: 2 },
      { type: 'para', html: 'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ...' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 2, 3, 5, 7, 11, ?, 17</span>
The next prime after 11 is <span class="num">13</span> ✓

<span class="com">Example (primes + 1): 3, 4, 6, 8, 12, ?</span>
Primes: 2,3,5,7,11 → +1 each → 3,4,6,8,12
Next prime 13 → answer <span class="num">14</span> ✓` },

      { type: 'heading', text: '6. Square series', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 1, 4, 9, 16, 25, ?</span>
These are 1², 2², 3², 4², 5²
Next = 6² = <span class="num">36</span> ✓

<span class="com">Tricky: 2, 5, 10, 17, 26, ?</span>
Pattern = n² + 1: 1+1, 4+1, 9+1, 16+1, 25+1
Next = 36 + 1 = <span class="num">37</span> ✓` },

      { type: 'heading', text: '7. Cube series', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 1, 8, 27, 64, ?</span>
1³, 2³, 3³, 4³ → next = 5³ = <span class="num">125</span> ✓

<span class="com">Variant: 0, 7, 26, 63, ?</span>
n³ − 1: 1−1, 8−1, 27−1, 64−1
Next = 125 − 1 = <span class="num">124</span> ✓` },

      { type: 'heading', text: '8. Alternating series (two interleaved patterns)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 2, 100, 4, 95, 6, 90, 8, ?, 10, 80</span>
Two series interleaved:
  odd positions: 2, 4, 6, 8, 10  (+2 each)
  even positions: 100, 95, 90, ?, 80  (−5 each)
Missing = 90 − 5 = <span class="num">85</span> ✓` },

      { type: 'heading', text: '9. Operator pattern series', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 5, 6, 14, 45, ?</span>
×1 + 1 = 6
×2 + 2 = 14
×3 + 3 = 45
×4 + 4 = <span class="num">184</span> ✓` },

      { type: 'heading', text: '10. Wrong-term spotting', level: 2 },
      { type: 'para', html: 'Some exams give you a series with one wrong number and ask which one breaks the pattern.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Find the odd one: 3, 8, 15, 24, 36, 48, 63</span>
n² − 1: 3, 8, 15, 24, 35, 48, 63
<span class="num">36</span> should be <span class="num">35</span> — the wrong term is 36 ✓` },

      { type: 'callout', kind: 'tip', html: '<strong>Always try the differences first.</strong> If constant → arithmetic. If they grow nicely → second-level. If ratio is constant → geometric. If nothing simple works → think squares/cubes/primes.' },

      { type: 'heading', text: 'Practice set', level: 2 },
      { type: 'list', kind: 'ordered', items: [
        '7, 14, 28, 56, ? &nbsp; <em>(geometric ×2 → 112)</em>',
        '1, 4, 13, 40, ? &nbsp; <em>(×3+1 → 121)</em>',
        '3, 10, 29, 66, 127, ? &nbsp; <em>(n³+2 → 218)</em>',
        '120, 99, 80, 63, ?, 35 &nbsp; <em>(diffs −21,−19,−17,−15,−13 → 48)</em>'
      ]}
    ]},

    /* ============== CH 3: Letter Series ============== */
    { id: 'rsn-c3', title: 'Letter Series', icon: '🔤', sections: [
      { type: 'heading', text: 'Letters are just numbers in disguise', level: 1 },
      { type: 'para', html: 'Convert each letter to its position (<strong>A=1, B=2, ..., Z=26</strong>) and the problem becomes a number-series problem.' },

      { type: 'image', alt: 'alphabet wheel', svg:
`<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="360" fill="#fafafa" rx="8"/>
  <circle cx="180" cy="180" r="140" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="180" cy="180" r="100" fill="none" stroke="#bbb" stroke-width="1" stroke-dasharray="4 3"/>
  <g font-family="Nunito" font-weight="bold" font-size="13">
    <text x="180" y="50" text-anchor="middle">A·1</text>
    <text x="216" y="56" text-anchor="middle">B·2</text>
    <text x="250" y="72" text-anchor="middle">C·3</text>
    <text x="280" y="95" text-anchor="middle">D·4</text>
    <text x="304" y="125" text-anchor="middle">E·5</text>
    <text x="318" y="160" text-anchor="middle">F·6</text>
    <text x="324" y="195" text-anchor="middle">G·7</text>
    <text x="318" y="230" text-anchor="middle">H·8</text>
    <text x="304" y="262" text-anchor="middle">I·9</text>
    <text x="280" y="290" text-anchor="middle">J·10</text>
    <text x="250" y="312" text-anchor="middle">K·11</text>
    <text x="216" y="328" text-anchor="middle">L·12</text>
    <text x="180" y="335" text-anchor="middle">M·13</text>
    <text x="144" y="328" text-anchor="middle">N·14</text>
    <text x="110" y="312" text-anchor="middle">O·15</text>
    <text x="80" y="290" text-anchor="middle">P·16</text>
    <text x="56" y="262" text-anchor="middle">Q·17</text>
    <text x="42" y="230" text-anchor="middle">R·18</text>
    <text x="36" y="195" text-anchor="middle">S·19</text>
    <text x="42" y="160" text-anchor="middle">T·20</text>
    <text x="56" y="125" text-anchor="middle">U·21</text>
    <text x="80" y="95" text-anchor="middle">V·22</text>
    <text x="110" y="72" text-anchor="middle">W·23</text>
    <text x="144" y="56" text-anchor="middle">X·24</text>
    <text x="180" y="180" text-anchor="middle" font-size="11" fill="#666">Y·25</text>
    <text x="180" y="200" text-anchor="middle" font-size="11" fill="#666">Z·26</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'Memorise the <strong>checkpoints</strong>: <code>E=5, J=10, O=15, T=20, Y=25</code>. From any checkpoint you can count forward/backward 1-2 letters fast.' },

      { type: 'heading', text: '1. Constant step (+n)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A, D, G, J, ?</span>
Positions: 1, 4, 7, 10 — step +3
Next = 10 + 3 = 13 → <span class="num">M</span> ✓` },

      { type: 'heading', text: '2. Decreasing step (−n)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Z, W, T, Q, ?</span>
Positions: 26, 23, 20, 17 — step −3
Next = 17 − 3 = 14 → <span class="num">N</span> ✓` },

      { type: 'heading', text: '3. Variable step (+1, +2, +3, ...)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A, B, D, G, K, ?</span>
Steps: +1, +2, +3, +4, +5
1 → 2 → 4 → 7 → 11 → 16 → <span class="num">P</span> ✓` },

      { type: 'heading', text: '4. Mirror / opposite letters', level: 2 },
      { type: 'para', html: 'The "opposite" of a letter = <code>27 − position</code>. A↔Z, B↔Y, C↔X ... M↔N.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: D&apos;s opposite letter?</span>
D = 4. Opposite = 27 − 4 = 23 → <span class="num">W</span> ✓

<span class="com">Example: Find opposite of P</span>
P = 16 → 27 − 16 = 11 → <span class="num">K</span> ✓` },

      { type: 'heading', text: '5. Two interleaved letter series', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A, Z, C, Y, E, X, G, ?</span>
Odd positions: A, C, E, G — step +2
Even positions: Z, Y, X, ? — step −1
Next = W → <span class="num">W</span> ✓` },

      { type: 'heading', text: '6. Letter + number combo', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A1, C3, E5, G7, ?</span>
Letter step +2 (A→C→E→G→I)
Number step +2 (1→3→5→7→9)
Next pair = <span class="num">I9</span> ✓

<span class="com">Example: B2, D4, F6, H?, J10</span>
Number always equals letter position
H = 8 → answer = <span class="num">8</span> ✓` },

      { type: 'heading', text: '7. Three-letter blocks', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: ABC, DEF, GHI, ?</span>
Each block = next 3 letters
Next block = <span class="num">JKL</span> ✓

<span class="com">Example: BAD, FEH, JIL, ?</span>
Look at first letter of each: B, F, J → +4
Second letter: A, E, I → +4
Third: D, H, L → +4
Next: N, M, P → <span class="num">NMP</span> ✓` },

      { type: 'heading', text: '8. Skip pattern', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A, C, F, J, O, ?</span>
Skip 0,1,2,3,4,5 letters
A → (skip 1) C → (skip 2) F → (skip 3) J → (skip 4) O → (skip 5) <span class="num">U</span> ✓` },

      { type: 'callout', kind: 'info', html: 'Letter series questions reward <strong>fluency with the alphabet</strong>. Practice writing it forwards and backwards in &lt;15 seconds.' }
    ]},

    /* ============== CH 4: Verbal Analogies ============== */
    { id: 'rsn-c4', title: 'Verbal Analogies', icon: '🔗', sections: [
      { type: 'heading', text: 'A : B :: C : ?', level: 1 },
      { type: 'para', html: 'Read as: "<em>A is to B as C is to ?</em>". Spot the relationship between A and B, then apply the same to C.' },

      { type: 'heading', text: 'Type 1 — Cause and effect', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Spark : Fire :: Seed : ?</span>
Spark causes Fire. What does a Seed cause?
Answer: <span class="num">Plant / Tree</span>

<span class="com">Example: Virus : Disease :: Cloud : ?</span>
Virus causes disease. Cloud causes <span class="num">Rain</span>.` },

      { type: 'heading', text: 'Type 2 — Part to whole', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Petal : Flower :: Page : ?</span>
Petal is part of a Flower. Page is part of a <span class="num">Book</span>.

<span class="com">Example: Wheel : Car :: Wing : ?</span>
Wheel is part of a Car. Wing is part of an <span class="num">Aeroplane / Bird</span>.` },

      { type: 'heading', text: 'Type 3 — Tool and user', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Pen : Writer :: Brush : ?</span>
A Writer uses a Pen. A <span class="num">Painter</span> uses a Brush.

<span class="com">Example: Stethoscope : Doctor :: Wrench : ?</span>
Doctor uses Stethoscope. <span class="num">Mechanic</span> uses Wrench.` },

      { type: 'heading', text: 'Type 4 — Synonyms', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Happy : Joyful :: Sad : ?</span>
Synonyms. Sad ≈ <span class="num">Sorrowful / Unhappy</span>

<span class="com">Example: Big : Large :: Tiny : ?</span>
Synonyms. Tiny ≈ <span class="num">Small</span>` },

      { type: 'heading', text: 'Type 5 — Antonyms', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Hot : Cold :: Light : ?</span>
Antonyms. Light ↔ <span class="num">Dark / Heavy</span> (context)

<span class="com">Example: Day : Night :: Birth : ?</span>
Opposites. Birth ↔ <span class="num">Death</span>` },

      { type: 'heading', text: 'Type 6 — Worker and product', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Author : Book :: Composer : ?</span>
Author produces Book. Composer produces <span class="num">Music / Song</span>.

<span class="com">Example: Baker : Bread :: Cobbler : ?</span>
Cobbler makes/repairs <span class="num">Shoes</span>.` },

      { type: 'heading', text: 'Type 7 — Container and contained', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Bottle : Water :: Wallet : ?</span>
Bottle holds Water. Wallet holds <span class="num">Money</span>.

<span class="com">Example: Library : Books :: Granary : ?</span>
Granary stores <span class="num">Grain</span>.` },

      { type: 'heading', text: 'Type 8 — Function / purpose', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Knife : Cut :: Pen : ?</span>
Knife is used to Cut. Pen is used to <span class="num">Write</span>.

<span class="com">Example: Eye : See :: Ear : ?</span>
Eye sees. Ear <span class="num">hears</span>.` },

      { type: 'callout', kind: 'warn', html: '<strong>Beware of multiple plausible answers!</strong> Pick the option whose relationship is <em>exactly</em> the same — not just similar.' },

      { type: 'callout', kind: 'tip', html: 'Always <strong>verbalise the relationship in a sentence</strong>: "A is the _____ of B". Then plug C into that same sentence and see which option fits.' }
    ]},

    /* ============== CH 5: Number/Letter Analogies ============== */
    { id: 'rsn-c5', title: 'Number & Letter Analogies', icon: '🔢', sections: [
      { type: 'heading', text: 'Same idea — different alphabet', level: 1 },
      { type: 'para', html: 'In number/letter analogies, the relation is mathematical or positional.' },

      { type: 'heading', text: 'Number analogies', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 4 : 16 :: 7 : ?</span>
Relation: square (n²). 4²=16, so 7²=<span class="num">49</span>.

<span class="com">Example: 12 : 144 :: 13 : ?</span>
Relation: n². 13² = <span class="num">169</span>.

<span class="com">Example: 6 : 42 :: 9 : ?</span>
Relation: n × (n+1). 6×7=42, 9×10 = <span class="num">90</span>.

<span class="com">Example: 64 : 8 :: 121 : ?</span>
Relation: √n. √64 = 8, √121 = <span class="num">11</span>.` },

      { type: 'heading', text: 'Pair-of-numbers analogies', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: (3, 9) : (5, 25) :: (7, ?)</span>
Pattern: (n, n²). Answer = <span class="num">49</span>.

<span class="com">Example: (8, 24) : (5, 15) :: (7, ?)</span>
Pattern: (n, 3n). 7 × 3 = <span class="num">21</span>.` },

      { type: 'heading', text: 'Letter pair analogies', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: AB : CD :: EF : ?</span>
Each pair +2 positions: AB→CD, EF→GH
Answer = <span class="num">GH</span>

<span class="com">Example: AC : BD :: EG : ?</span>
Within each pair: gap of 2. Each pair shifts +1.
EG → FH → answer = <span class="num">FH</span>` },

      { type: 'heading', text: 'Letter + number pairs', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: A1 : C9 :: E25 : ?</span>
A=1, 1²=1. C=3, 3²=9. E=5, 5²=25.
Pattern: (nth letter, n²)
Next: G=7, 7²=49 → answer = <span class="num">G49</span>

<span class="com">Example: B2 : D16 :: F? :</span>
B=2, 2³=... no. Try: 2¹=2, 4²=16, so 6³=<span class="num">216</span>.` },

      { type: 'heading', text: 'Mixed relations (Roman numerals, etc.)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: V : 5 :: X : ?</span>
Roman numerals. X = <span class="num">10</span>.

<span class="com">Example: 12 : December :: 3 : ?</span>
Month number → month name. 3 = <span class="num">March</span>.` },

      { type: 'heading', text: 'Practice analogies', level: 2 },
      { type: 'list', kind: 'ordered', items: [
        '5 : 30 :: 6 : ? &nbsp; <em>(n×(n+1) → 42)</em>',
        'BD : FH :: JL : ? &nbsp; <em>(each letter +4 → NP)</em>',
        '17 : 60 :: 23 : ? &nbsp; <em>(3n+9 → 78)</em>',
        '729 : 9 :: 64 : ? &nbsp; <em>(cube root → 4)</em>'
      ]},

      { type: 'callout', kind: 'tip', html: 'When stuck, try the four basic operations between the pair: +, −, ×, ÷, then powers/roots, then position relations.' }
    ]},

    /* ============== CH 6: Odd One Out ============== */
    { id: 'rsn-c6', title: 'Odd One Out', icon: '🚫', sections: [
      { type: 'heading', text: 'Spot the misfit', level: 1 },
      { type: 'para', html: '<strong>Odd one out</strong> questions give 4-5 options. Three (or four) share a hidden property; <em>one</em> doesn\'t. Find it.' },

      { type: 'heading', text: 'Verbal: animals, colours, professions', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: (a) Lion (b) Tiger (c) Elephant (d) Eagle</span>
Three are mammals; Eagle is a bird.
Answer: <span class="num">(d) Eagle</span>

<span class="com">Example: (a) Apple (b) Banana (c) Carrot (d) Mango</span>
Three are fruits; Carrot is a vegetable.
Answer: <span class="num">(c) Carrot</span>` },

      { type: 'heading', text: 'Numerical: pick the odd number', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 9, 16, 25, 30, 49</span>
4 are perfect squares; 30 is not.
Answer: <span class="num">30</span>

<span class="com">Example: 121, 144, 169, 180, 196</span>
4 are perfect squares; 180 is not.
Answer: <span class="num">180</span>

<span class="com">Example: 2, 3, 5, 7, 9, 11</span>
4 are primes; 9 is composite.
Answer: <span class="num">9</span>` },

      { type: 'heading', text: 'Letter groups', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: ACE, BDF, GIK, MOP</span>
First three: alternate letters (gap of 1)
MOP has M-O (gap 1) but O-P (gap 0)
Answer: <span class="num">MOP</span>

<span class="com">Example: AEIO, OUEI, IOUA, EXAM</span>
First three are vowels only; EXAM has consonants.
Answer: <span class="num">EXAM</span>` },

      { type: 'heading', text: 'Common traps', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Multiple categories overlap.</strong> e.g., Apple is fruit AND a tech company.',
        '<strong>Subset traps.</strong> e.g., "Dog, Cat, Lion, Wolf" — three are pets? No, Lion is wild. But also "Lion, Tiger, Leopard, Wolf" — three are big cats, Wolf is not.',
        '<strong>Spelling traps.</strong> e.g., words with same number of letters except one.',
        '<strong>Number traps.</strong> Even/odd, prime/composite, divisibility by 3, perfect squares — try each.'
      ]},

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'ordered', items: [
        'List a quick property of each item.',
        'Find what 3 share.',
        'The one that doesn\'t share = odd.'
      ]},

      { type: 'callout', kind: 'tip', html: 'If two seem "odd", look for a <em>stronger</em> common property among the rest. The "more elegant" rule usually wins.' }
    ]},

    /* ============== CH 7: Classification ============== */
    { id: 'rsn-c7', title: 'Classification', icon: '🗂️', sections: [
      { type: 'heading', text: 'Group items by a hidden rule', level: 1 },
      { type: 'para', html: 'Classification questions ask you to <strong>group similar items</strong> or identify which group an item belongs to.' },

      { type: 'heading', text: 'Single-rule classification', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Group these animals.</span>
Set: Cow, Eagle, Shark, Lion, Sparrow, Whale, Goat, Tuna

Mammals: Cow, Lion, Whale, Goat
Birds: Eagle, Sparrow
Fish: Shark, Tuna` },

      { type: 'heading', text: 'Two-rule classification', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: Sort numbers by parity AND primality.</span>
Set: 2, 4, 5, 6, 7, 9, 10, 11

Even & prime: 2
Even & composite: 4, 6, 10
Odd & prime: 5, 7, 11
Odd & composite: 9` },

      { type: 'heading', text: 'Word classification by letter property', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: BAD, FAN, JAR, MAN, RAT</span>
All have &quot;A&quot; as middle letter.

<span class="com">Example: CAT, DOG, FOX, PIG, ANT</span>
All 3-letter animal names.` },

      { type: 'heading', text: 'Find the rule', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Example: 8, 27, 64, 125 — what rule?</span>
All are perfect cubes (2³, 3³, 4³, 5³).
Rule: <span class="num">cubes of consecutive integers</span>.

<span class="com">Example: WED, FRI, SUN — what set?</span>
All days of week with single-vowel.
Rule: <span class="num">days of week (3-letter abbreviations)</span>.` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Scan for shared <strong>category</strong> first (fruits, animals, primes, squares).',
        'If no obvious category, try <strong>structural</strong> rules (letters, length, vowels).',
        'Try <strong>positional</strong> rules (starts with X, contains Y).'
      ]},

      { type: 'callout', kind: 'info', html: 'Classification and "odd one out" are close cousins. If you can classify, finding the odd one is easy.' }
    ]},

    /* ============== CH 8: Coding-Decoding: Letter Shift ============== */
    { id: 'rsn-c8', title: 'Coding-Decoding: Letter Shift', icon: '🔐', sections: [
      { type: 'heading', text: 'Caesar-style codes', level: 1 },
      { type: 'para', html: 'In a <strong>letter-shift code</strong>, every letter in the original (plain) word is shifted by the same amount in the alphabet.' },

      { type: 'image', alt: 'caesar shift +3', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Caesar +3 shift</text>
  <g font-family="JetBrains Mono" font-size="13">
    <text x="40" y="70" font-weight="bold" fill="#666">plain :</text>
    <text x="40" y="130" font-weight="bold" fill="#666">code  :</text>
  </g>
  <g font-family="JetBrains Mono" font-size="14" text-anchor="middle">
    <rect x="100" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="120" y="73" fill="white" font-weight="bold">A</text>
    <rect x="150" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="170" y="73" fill="white" font-weight="bold">B</text>
    <rect x="200" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="220" y="73" fill="white" font-weight="bold">C</text>
    <rect x="250" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="270" y="73" fill="white" font-weight="bold">D</text>
    <rect x="300" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="320" y="73" fill="white" font-weight="bold">E</text>
    <rect x="350" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="370" y="73" fill="white" font-weight="bold">F</text>
    <rect x="400" y="50" width="40" height="34" rx="6" fill="#7c4dff"/><text x="420" y="73" fill="white" font-weight="bold">G</text>

    <rect x="100" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="120" y="133" fill="white" font-weight="bold">D</text>
    <rect x="150" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="170" y="133" fill="white" font-weight="bold">E</text>
    <rect x="200" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="220" y="133" fill="white" font-weight="bold">F</text>
    <rect x="250" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="270" y="133" fill="white" font-weight="bold">G</text>
    <rect x="300" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="320" y="133" fill="white" font-weight="bold">H</text>
    <rect x="350" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="370" y="133" fill="white" font-weight="bold">I</text>
    <rect x="400" y="110" width="40" height="34" rx="6" fill="#58cc02"/><text x="420" y="133" fill="white" font-weight="bold">J</text>
  </g>
  <text x="300" y="180" text-anchor="middle" font-family="Nunito" font-size="12" fill="#666">Each plain letter shifts +3 to form the code</text>
</svg>` },

      { type: 'heading', text: '1. Simple +1 shift', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;CAT&quot; → &quot;DBU&quot;. What is &quot;DOG&quot;?</span>
C→D, A→B, T→U  (each +1)
Apply to DOG: D→E, O→P, G→H = <span class="num">EPH</span>` },

      { type: 'heading', text: '2. +2 shift', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;HELLO&quot; → &quot;JGNNQ&quot;. Decode &quot;YQTNF&quot;.</span>
Encode rule: +2. Decode rule: −2.
Y→W, Q→O, T→R, N→L, F→D = <span class="num">WORLD</span>` },

      { type: 'heading', text: '3. Negative shift (−n)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;MOON&quot; → &quot;LNNM&quot;. What is &quot;STAR&quot;?</span>
Each letter −1.
S→R, T→S, A→Z (wrap-around), R→Q = <span class="num">RSZQ</span>` },

      { type: 'heading', text: '4. Variable shift (1, 2, 3 ...)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;BAT&quot; → &quot;CCW&quot;. Encode &quot;CAT&quot;.</span>
B+1=C, A+2=C, T+3=W
Apply: C+1=D, A+2=C, T+3=W = <span class="num">DCW</span>` },

      { type: 'heading', text: '5. Reverse-order shift', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;DELHI&quot; → &quot;IHLED&quot;. What is &quot;MUMBAI&quot;?</span>
Rule: reverse the word.
Reverse MUMBAI = <span class="num">IABMUM</span>` },

      { type: 'heading', text: '6. Reverse + shift', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;CAB&quot; → &quot;DCB&quot;. Encode &quot;TAP&quot;.</span>
Reverse CAB → BAC. Each +1 → CBD. Doesn&apos;t match DCB.
Try: each +1, then reverse: DBC → reverse = CBD. Nope.
Actual: C+1=D, A+2=C, B+0=B → DCB
Apply to TAP: T+1=U, A+2=C, P+0=P → <span class="num">UCP</span>` },

      { type: 'heading', text: '7. Opposite-letter coding (A↔Z mirror)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;CAT&quot; → &quot;XZG&quot;. Decode &quot;OFT&quot;.</span>
Each letter replaced by its opposite (27 − n).
O(15)→L(12)? wait 27−15=12=L. F(6)→U(21). T(20)→G(7).
Decode: O→L, F→U, T→G = <span class="num">LUG</span>...
correction: 27−15=12 → L. Yes.` },

      { type: 'heading', text: '8. Position-based shift', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Code: &quot;CODE&quot; → &quot;DPFG&quot;.</span>
C(3)+1, O(15)+1, D(4)+2, E(5)+2 → no...
Try: each letter shift = its position in word.
C+1=D, O+1=P, D+2=F, E+2=G ✓
Pattern: shift = ceil(pos/2)` },

      { type: 'callout', kind: 'tip', html: 'When solving, write the letter positions below. Math is easier than alphabet juggling.' }
    ]},

    /* ============== CH 9: Coding-Decoding: Substitution ============== */
    { id: 'rsn-c9', title: 'Coding-Decoding: Substitution', icon: '🔁', sections: [
      { type: 'heading', text: 'Word ↔ Symbol mapping', level: 1 },
      { type: 'para', html: 'In substitution coding, the exam gives <strong>several coded sentences</strong>. By comparing them, you deduce what each symbol/word means.' },

      { type: 'heading', text: 'Worked example: two-sentence pair', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
1. &quot;mn rk pt&quot; means &quot;I love mangoes&quot;
2. &quot;pt fr gh&quot; means &quot;mangoes are tasty&quot;

<span class="com">Common word in both English sentences: &quot;mangoes&quot;</span>
<span class="com">Common code in both: &quot;pt&quot;</span>
∴ <span class="num">pt = mangoes</span>

In sentence 1, remaining English: I, love. Codes: mn, rk.
We can&apos;t yet split I vs love without sentence 3.` },

      { type: 'heading', text: 'Three-sentence puzzle (classic)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">1. &quot;qa pl mn&quot; = &quot;sky is blue&quot;</span>
<span class="com">2. &quot;pl tr xz&quot; = &quot;blue book new&quot;</span>
<span class="com">3. &quot;mn xz uv&quot; = &quot;new is good&quot;</span>

Sentence 1 ∩ 2: code &quot;pl&quot; ↔ word &quot;blue&quot; ✓
Sentence 2 ∩ 3: code &quot;xz&quot; ↔ word &quot;new&quot; ✓
Sentence 1 ∩ 3: code &quot;mn&quot; ↔ word &quot;is&quot; ✓
Remaining in 1: &quot;qa&quot; = &quot;sky&quot;
Remaining in 2: &quot;tr&quot; = &quot;book&quot;
Remaining in 3: &quot;uv&quot; = &quot;good&quot;</num>` },

      { type: 'heading', text: 'Symbol-word substitution', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If &quot;sun = moon&quot;, &quot;moon = star&quot;, &quot;star = sky&quot;, what shines at night?</span>
The thing that shines at night = moon (in reality).
In this puzzle, &quot;moon&quot; is called &quot;star&quot;.
Answer: <span class="num">star</span>` },

      { type: 'heading', text: 'Operator substitution', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If + means ×, − means ÷, × means +, ÷ means −:</span>
<span class="com">Solve: 12 + 4 ÷ 8 × 2 − 1</span>
Replace: 12 × 4 − 8 + 2 ÷ 1
Apply BODMAS: 12×4 = 48, 2÷1 = 2
48 − 8 + 2 = <span class="num">42</span>` },

      { type: 'heading', text: 'Number-to-letter coding', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If CAT = 24 and DOG = 26, what is BIRD?</span>
CAT: C(3)+A(1)+T(20) = 24 ✓
DOG: D(4)+O(15)+G(7) = 26 ✓
Rule: sum of letter positions.
BIRD: B(2)+I(9)+R(18)+D(4) = <span class="num">33</span>` },

      { type: 'heading', text: 'Reverse number coding', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If CAT = 312, what is BAD?</span>
C→3, A→1, T→20→2 (use single digit?)
Try: C=3, A=1, T=20 — but written as 3-1-20 → 3120 not 312.
Alternative rule: positions backwards (Z=1, A=26): C=24, A=26, T=7 → 2426 7
Standard: sum of digits? 3+1+20=24 ≠ 312
Most likely: numbers concatenated, but rule given in exam.
Apply same rule to BAD.` },

      { type: 'heading', text: 'Coded inequality', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If &apos;A @ B&apos; means &apos;A &gt; B&apos;</span>
<span class="com">&apos;A # B&apos; means &apos;A ≥ B&apos;</span>
<span class="com">&apos;A $ B&apos; means &apos;A &lt; B&apos;</span>
<span class="com">Statement: P @ Q # R</span>
Means: P &gt; Q ≥ R
Conclusion P &gt; R? Yes ✓` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Match common words</strong> across sentences to identify their codes.',
        '<strong>Pencil out</strong> each mapping you discover; the rest falls into place.',
        '<strong>Don\'t guess</strong> meanings — derive them only from comparisons.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Substitution puzzles reward patience. Tabulate sentence ↔ code and look for one-word differences.' }
    ]},

    /* ============== CH 10: Blood Relations ============== */
    { id: 'rsn-c10', title: 'Blood Relations', icon: '👨‍👩‍👧', sections: [
      { type: 'heading', text: 'The family-tree game', level: 1 },
      { type: 'para', html: 'Blood-relation problems describe family members in tangled sentences. Convert them to a <strong>family tree</strong> and the answer pops out.' },

      { type: 'heading', text: 'Key terminology', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Father / Mother / Son / Daughter</strong> — direct (1st generation gap).',
        '<strong>Brother / Sister</strong> — siblings (same parents).',
        '<strong>Uncle / Aunt</strong> — parent\'s sibling (or their spouse).',
        '<strong>Nephew / Niece</strong> — sibling\'s child.',
        '<strong>Cousin</strong> — uncle/aunt\'s child.',
        '<strong>Grandfather / Grandmother</strong> — parent\'s parent.',
        '<strong>Grandson / Granddaughter</strong> — child\'s child.',
        '<strong>In-laws</strong> — spouse\'s family (father-in-law, etc.).',
        '<strong>Maternal / Paternal</strong> — relating to mother\'s / father\'s side.'
      ]},

      { type: 'heading', text: 'Family tree notation', level: 2 },
      { type: 'image', alt: 'family tree symbols', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Symbols used in family-tree diagrams</text>
  <g font-family="Nunito" font-size="13">
    <rect x="30" y="50" width="60" height="40" fill="#1cb0f6" rx="6"/>
    <text x="60" y="75" text-anchor="middle" fill="white" font-weight="bold">M</text>
    <text x="120" y="75" fill="#222">Male = square</text>

    <circle cx="280" cy="70" r="22" fill="#ff5252"/>
    <text x="280" y="75" text-anchor="middle" fill="white" font-weight="bold">F</text>
    <text x="320" y="75" fill="#222">Female = circle</text>

    <line x1="30" y1="130" x2="90" y2="130" stroke="#222" stroke-width="2"/>
    <text x="120" y="135" fill="#222">— horizontal = couple (spouses)</text>

    <line x1="30" y1="170" x2="30" y2="210" stroke="#222" stroke-width="2"/>
    <text x="50" y="195" fill="#222">| vertical = parent → child</text>

    <line x1="320" y1="170" x2="380" y2="210" stroke="#222" stroke-width="2"/>
    <line x1="380" y1="170" x2="320" y2="210" stroke="#222" stroke-width="2"/>
    <text x="400" y="195" fill="#222">X = siblings</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Worked example 1', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A is B&apos;s father. B is C&apos;s mother. How is A related to C?</span>

Tree:
  A (M) — ? (wife)
        |
        B (F)
        |
        C

A is B&apos;s father → A is C&apos;s mother&apos;s father → <span class="num">A is C&apos;s grandfather</span>.` },

      { type: 'heading', text: 'Worked example 2 (pointing puzzle)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Pointing to a photo, Ravi said: &quot;She is the daughter of my grandfather&apos;s only son.&quot;</span>

Grandfather&apos;s only son = Ravi&apos;s father.
Her father = Ravi&apos;s father → she = Ravi&apos;s sister.

Answer: <span class="num">The girl is Ravi&apos;s sister</span>.` },

      { type: 'heading', text: 'Worked example 3 (in-laws)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">P is Q&apos;s brother. R is Q&apos;s mother. S is R&apos;s father.</span>
<span class="com">T is S&apos;s mother. How is T related to P?</span>

P&apos;s mother = R
R&apos;s father = S → S is P&apos;s grandfather (maternal)
S&apos;s mother = T → T is P&apos;s great-grandmother (maternal)

Answer: <span class="num">T is P&apos;s great-grandmother</span>.` },

      { type: 'heading', text: 'Family tree (3-generation) diagram', level: 2 },
      { type: 'image', alt: 'sample family tree', svg:
`<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="300" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="220" y="20" width="50" height="36" fill="#1cb0f6" rx="6"/>
    <text x="245" y="44" text-anchor="middle" fill="white" font-weight="bold">S</text>
    <line x1="270" y1="38" x2="310" y2="38" stroke="#222" stroke-width="2"/>
    <circle cx="335" cy="38" r="18" fill="#ff5252"/>
    <text x="335" y="42" text-anchor="middle" fill="white" font-weight="bold">T</text>

    <line x1="290" y1="56" x2="290" y2="100" stroke="#222" stroke-width="2"/>

    <circle cx="290" cy="120" r="18" fill="#ff5252"/>
    <text x="290" y="124" text-anchor="middle" fill="white" font-weight="bold">R</text>

    <line x1="290" y1="138" x2="290" y2="180" stroke="#222" stroke-width="2"/>

    <circle cx="240" cy="200" r="18" fill="#ff5252"/>
    <text x="240" y="204" text-anchor="middle" fill="white" font-weight="bold">Q</text>
    <line x1="258" y1="200" x2="322" y2="200" stroke="#222" stroke-width="2"/>
    <rect x="322" y="182" width="36" height="36" fill="#1cb0f6" rx="6"/>
    <text x="340" y="206" text-anchor="middle" fill="white" font-weight="bold">P</text>

    <text x="245" y="245" text-anchor="middle" fill="#666">daughter</text>
    <text x="340" y="245" text-anchor="middle" fill="#666">son</text>
    <text x="290" y="155" text-anchor="middle" fill="#666">mother R of Q,P</text>
    <text x="290" y="80" text-anchor="middle" fill="#666">S father of R; T = S&apos;s mother</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Common confusing phrases', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>"My brother\'s father"</strong> = my father.',
        '<strong>"My father\'s only son"</strong> = me (if I am male) or my only brother.',
        '<strong>"My mother\'s daughter-in-law"</strong> = my (brother\'s) wife OR my own wife.',
        '<strong>"My uncle\'s niece"</strong> = could be me, or my sister, or my cousin.',
        '<strong>"My father-in-law\'s daughter"</strong> = my wife (or her sister).'
      ]},

      { type: 'heading', text: 'Two-line clue puzzle', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A is B&apos;s sister. C is B&apos;s mother. D is C&apos;s father. E is D&apos;s mother.</span>
<span class="com">How is A related to D?</span>

A&apos;s mother = C (since B&apos;s mother is also A&apos;s mother — they&apos;re siblings)
C&apos;s father = D → D is A&apos;s grandfather (maternal)

Answer: <span class="num">A is D&apos;s granddaughter</span>` },

      { type: 'heading', text: 'Gender pitfalls', level: 2 },
      { type: 'para', html: 'Sometimes the puzzle doesn\'t tell you gender directly. Watch for cues: "she", "his", "wife of", "brother of" (assume male unless told). If unstated, the question usually doesn\'t require it.' },

      { type: 'callout', kind: 'tip', html: '<strong>Always draw the tree.</strong> Even simple problems get tangled in your head. A 30-second sketch saves you 2 minutes of confusion.' },

      { type: 'callout', kind: 'warn', html: 'Be careful with "cousin", "aunt", "uncle" — they can be paternal OR maternal. Read carefully.' }
    ]},

    /* ============== CH 11: Direction Sense ============== */
    { id: 'rsn-c11', title: 'Direction Sense', icon: '🧭', sections: [
      { type: 'heading', text: 'Walking the compass', level: 1 },
      { type: 'para', html: '<strong>Direction-sense</strong> problems describe a series of movements: "X walks 5 km north, turns right, walks 4 km, ..." Your job: find the final position or distance from start.' },

      { type: 'image', alt: 'compass directions', svg:
`<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="360" fill="#fafafa" rx="8"/>
  <circle cx="180" cy="180" r="130" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <line x1="180" y1="50" x2="180" y2="310" stroke="#ccc" stroke-width="1"/>
  <line x1="50" y1="180" x2="310" y2="180" stroke="#ccc" stroke-width="1"/>
  <line x1="88" y1="88" x2="272" y2="272" stroke="#ddd" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="272" y1="88" x2="88" y2="272" stroke="#ddd" stroke-width="1" stroke-dasharray="3 3"/>
  <polygon points="180,40 174,60 186,60" fill="#222"/>
  <polygon points="180,320 174,300 186,300" fill="#222"/>
  <polygon points="40,180 60,174 60,186" fill="#222"/>
  <polygon points="320,180 300,174 300,186" fill="#222"/>
  <g font-family="Nunito" font-weight="bold" font-size="18">
    <text x="180" y="32" text-anchor="middle">N</text>
    <text x="180" y="345" text-anchor="middle">S</text>
    <text x="28" y="186" text-anchor="middle">W</text>
    <text x="334" y="186" text-anchor="middle">E</text>
  </g>
  <g font-family="Nunito" font-size="12" fill="#666">
    <text x="80" y="76" text-anchor="middle">NW</text>
    <text x="280" y="76" text-anchor="middle">NE</text>
    <text x="80" y="294" text-anchor="middle">SW</text>
    <text x="280" y="294" text-anchor="middle">SE</text>
  </g>
  <circle cx="180" cy="180" r="6" fill="#ff5252"/>
</svg>` },

      { type: 'heading', text: 'Conventions', level: 2 },
      { type: 'list', kind: 'check', items: [
        'N is up, S is down, E is right, W is left on the page.',
        '<strong>Right turn</strong> = 90° clockwise. <strong>Left turn</strong> = 90° anti-clockwise.',
        'A <strong>U-turn</strong> reverses the direction (180°).',
        'You always face the direction you\'re moving in (unless told otherwise).'
      ]},

      { type: 'heading', text: 'Worked example 1: simple turns', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Vinay walks 4 km north, turns right, walks 3 km. How far is he from start?</span>

Start at origin (0,0). Walk north: (0, 4).
Turn right (now facing east). Walk 3 km east: (3, 4).

Distance from start = √(3² + 4²) = √25 = <span class="num">5 km</span>` },

      { type: 'image', alt: '3-4-5 triangle', svg:
`<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:0 auto;">
  <rect width="300" height="240" fill="#fafafa" rx="8"/>
  <line x1="60" y1="200" x2="60" y2="60" stroke="#7c4dff" stroke-width="3"/>
  <line x1="60" y1="60" x2="200" y2="60" stroke="#1cb0f6" stroke-width="3"/>
  <line x1="60" y1="200" x2="200" y2="60" stroke="#58cc02" stroke-width="3" stroke-dasharray="4 3"/>
  <circle cx="60" cy="200" r="5" fill="#ff5252"/>
  <circle cx="200" cy="60" r="5" fill="#58cc02"/>
  <g font-family="Nunito" font-size="12">
    <text x="40" y="135" font-weight="bold" fill="#7c4dff">4 km N</text>
    <text x="120" y="50" font-weight="bold" fill="#1cb0f6">3 km E</text>
    <text x="140" y="150" font-weight="bold" fill="#58cc02">5 km (resultant)</text>
    <text x="60" y="220" text-anchor="middle" fill="#666">Start</text>
    <text x="210" y="55" fill="#666">End</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Worked example 2: cancelling moves', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Walk 5 N, 3 E, 5 S, 3 W. How far from start?</span>

5 N then 5 S = back to original latitude.
3 E then 3 W = back to original longitude.

Answer: <span class="num">0 km — back at start</span>` },

      { type: 'heading', text: 'Worked example 3: Pythagoras with rectangular path', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Walk 6 N, 4 E, 2 N, 8 E. How far from start, and in which direction?</span>

Net north = 6 + 2 = 8.
Net east = 4 + 8 = 12.

Distance = √(8² + 12²) = √(64 + 144) = √208 ≈ <span class="num">14.42 km</span>
Direction from start: <span class="num">north-east</span>` },

      { type: 'heading', text: 'Worked example 4: turns from facing', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A is facing east. He turns 135° anti-clockwise. Which way now?</span>

E (anti-clockwise 90°) → N
N (additional 45° anti-clockwise) → NW

Answer: <span class="num">North-West</span>` },

      { type: 'heading', text: 'Worked example 5: shadow direction', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">At sunrise, X faces the sun. His shadow is to which side?</span>

Sun rises in East. Shadow falls opposite the sun = behind X = <span class="num">West</span>.

<span class="com">At sunset, X faces the sun. Which side is his shadow?</span>
Sun sets in West. Shadow opposite = <span class="num">East</span>.` },

      { type: 'heading', text: 'Worked example 6: relative direction', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">P is north of Q. R is east of Q. S is south of R. Where is S relative to Q?</span>

Q at origin. P = (0, +1). R = (+1, 0). S = R&apos;s south = (+1, -1).
S relative to Q: east and south → <span class="num">south-east</span>.` },

      { type: 'heading', text: 'Common turn shortcuts', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Two right turns = U-turn (180°).',
        'Right then left = no net rotation (straight ahead, after offset).',
        'Four right turns = back to original facing.',
        '90° clockwise: N→E→S→W→N.'
      ]},

      { type: 'heading', text: 'Distance shortcut for rectangular paths', level: 2 },
      { type: 'para', html: 'For any rectangular zig-zag, separate moves into <strong>net horizontal</strong> and <strong>net vertical</strong>. Distance from start = <code>√(h² + v²)</code>.' },

      { type: 'callout', kind: 'tip', html: 'Always draw a quick grid sketch. Eyeballing direction puzzles is the #1 way to get them wrong.' },

      { type: 'callout', kind: 'warn', html: 'Watch for <em>"first turns right then left"</em>. Right + left does NOT cancel — you still moved horizontally between the turns.' }
    ]},

    /* ============== CH 12: Ranking & Order ============== */
    { id: 'rsn-c12', title: 'Ranking & Order', icon: '📊', sections: [
      { type: 'heading', text: 'Who is taller / oldest / first?', level: 1 },
      { type: 'para', html: 'These problems give you comparison clues like "A is taller than B" and ask you to find the full order or a specific rank.' },

      { type: 'heading', text: 'Single-line ordering', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A is taller than B. C is shorter than B. D is taller than A.</span>
<span class="com">Order from tallest to shortest?</span>

A &gt; B, C &lt; B, D &gt; A.
Combine: D &gt; A &gt; B &gt; C.

Answer: <span class="num">D, A, B, C</span>` },

      { type: 'heading', text: 'Rank from both ends', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">In a row of students, R is 5th from left and 9th from right.</span>
<span class="com">Total students?</span>

Total = (5 + 9) − 1 = <span class="num">13</span>
(Subtract 1 because R is counted twice.)` },

      { type: 'heading', text: 'Position after change', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">In a class of 40, X is 12th from top. What is X&apos;s rank from bottom?</span>

Rank from bottom = Total − Top rank + 1 = 40 − 12 + 1 = <span class="num">29</span>` },

      { type: 'heading', text: 'Two switches', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A is 8th from left in a row. After A and B swap, A becomes 14th from left.</span>
<span class="com">What was B&apos;s original position?</span>

After swap, A took B&apos;s seat. So B was originally <span class="num">14th from left</span>.` },

      { type: 'heading', text: 'Pure inequality chains', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A &gt; B, B &gt; C, D &gt; A, E &lt; C.</span>
<span class="com">Who is the shortest?</span>

D &gt; A &gt; B &gt; C &gt; E.
Shortest = <span class="num">E</span>.` },

      { type: 'heading', text: 'Age/years ordering', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">P is older than Q. R is older than S but younger than Q.</span>
<span class="com">T is younger than S. Who is the oldest?</span>

P &gt; Q &gt; R &gt; S &gt; T.
Oldest = <span class="num">P</span>.` },

      { type: 'callout', kind: 'tip', html: 'Write inequalities as a <strong>linear chain</strong>. If a clue doesn\'t fit cleanly, the order may have branches — try a tree.' }
    ]},

    /* ============== CH 13: Linear Seating ============== */
    { id: 'rsn-c13', title: 'Linear Seating', icon: '💺', sections: [
      { type: 'heading', text: 'n people in a row', level: 1 },
      { type: 'para', html: '<strong>Linear seating</strong> problems place several people in a single row (or two parallel rows) with constraints like "A sits next to B", "C is at the left end".' },

      { type: 'heading', text: 'Single-row example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Five friends A, B, C, D, E sit in a row facing north.</span>
<span class="com">1. A is at one end.</span>
<span class="com">2. C is to the immediate right of A.</span>
<span class="com">3. B is at the other end.</span>
<span class="com">4. E is to the left of D.</span>

From 1+3: A and B are at the two ends.
From 2: A on the left (since C is to A&apos;s right).
Position 1: A, Position 2: C. Position 5: B.
Remaining seats: positions 3, 4 = E, D (since E is left of D).

Final: <span class="num">A | C | E | D | B</span>` },

      { type: 'image', alt: 'linear seating', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Final seating: A | C | E | D | B (facing north — out of page)</text>
  <g font-family="Nunito" font-size="20" font-weight="bold">
    <rect x="40" y="60" width="90" height="70" fill="#7c4dff" rx="8"/>
    <text x="85" y="105" text-anchor="middle" fill="white">A</text>
    <rect x="150" y="60" width="90" height="70" fill="#1cb0f6" rx="8"/>
    <text x="195" y="105" text-anchor="middle" fill="white">C</text>
    <rect x="260" y="60" width="90" height="70" fill="#58cc02" rx="8"/>
    <text x="305" y="105" text-anchor="middle" fill="white">E</text>
    <rect x="370" y="60" width="90" height="70" fill="#ff9600" rx="8"/>
    <text x="415" y="105" text-anchor="middle" fill="white">D</text>
    <rect x="480" y="60" width="90" height="70" fill="#ff5252" rx="8"/>
    <text x="525" y="105" text-anchor="middle" fill="white">B</text>
  </g>
  <text x="40" y="155" font-family="Nunito" font-size="12" fill="#666">← left</text>
  <text x="570" y="155" text-anchor="end" font-family="Nunito" font-size="12" fill="#666">right →</text>
</svg>` },

      { type: 'heading', text: 'Facing direction matters', level: 2 },
      { type: 'para', html: 'If people face <strong>north</strong>, your "left" = their right. If they face <strong>south</strong>, your "left" = their left. Always note the facing!' },

      { type: 'heading', text: 'Two parallel rows', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">5 students sit in row 1 facing south. 5 face them in row 2 facing north.</span>
<span class="com">Each row-1 person faces a row-2 person exactly opposite.</span>

Useful clue interpretations:
- &quot;A faces B&quot; → they are in opposite rows and aligned.
- &quot;C is to the immediate left of A in row 1&quot; → since row 1 faces south, your right.` },

      { type: 'heading', text: 'Conditional clues', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>"X sits between Y and Z"</strong> — X is in the middle of the two; order ambiguous.',
        '<strong>"X sits immediately next to Y"</strong> — adjacent seats, either side.',
        '<strong>"X is to the immediate left of Y"</strong> — exact side specified.',
        '<strong>"X is 3rd to the left of Y"</strong> — 3 seats gap, definite direction.',
        '<strong>"X and Y are at extreme ends"</strong> — both at row-ends, sides unspecified.'
      ]},

      { type: 'heading', text: 'Worked 6-person row', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">6 people P, Q, R, S, T, U sit in a row facing north.</span>
<span class="com">1. Q is at one end.</span>
<span class="com">2. S sits 3rd to the right of Q.</span>
<span class="com">3. T sits to the immediate right of S.</span>
<span class="com">4. U sits between P and R.</span>

Q at far left → seats 1..6: Q, _, _, S, T, _.
Remaining = P, R, U fill positions 2, 3, 6.
U between P and R → P,U,R or R,U,P (consecutive).
Only positions 2,3 are consecutive. Position 6 alone.
So P,U,R at 2,3,? — needs 3 consecutive seats. Not possible.
Try: U at 6, then P&amp;R are at 2,3 in either order.

Final possible: <span class="num">Q P R S T U</span> or <span class="num">Q R P S T U</span>
(Unique if more clues; exam usually adds another to fix it.)` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Draw 5/6/7 empty boxes — write names as you place them.',
        'Start with <strong>definite anchors</strong>: ends, fixed positions.',
        'Track unknowns; revisit clues until no contradiction.',
        'If multiple arrangements remain, eliminate using the question.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Don\'t over-commit to one layout. If a clue conflicts, branch and try the other interpretation.' }
    ]},

    /* ============== CH 14: Circular Seating ============== */
    { id: 'rsn-c14', title: 'Circular Seating', icon: '🍽️', sections: [
      { type: 'heading', text: 'n people around a table', level: 1 },
      { type: 'para', html: 'Circular seating puts people around a round table. Sub-cases: <strong>all facing center</strong> or <strong>all facing outward</strong>. The facing flips "left" and "right".' },

      { type: 'image', alt: 'circular seating facing center', svg:
`<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="360" fill="#fafafa" rx="8"/>
  <circle cx="180" cy="180" r="100" fill="#fafafa" stroke="#7c4dff" stroke-width="2" stroke-dasharray="5 3"/>
  <circle cx="180" cy="180" r="60" fill="#eee" stroke="#bbb" stroke-width="1"/>
  <text x="180" y="184" text-anchor="middle" font-family="Nunito" font-size="12" fill="#666">Table</text>
  <g font-family="Nunito" font-weight="bold" font-size="14">
    <circle cx="180" cy="70" r="22" fill="#7c4dff"/><text x="180" y="76" text-anchor="middle" fill="white">A</text>
    <circle cx="258" cy="102" r="22" fill="#1cb0f6"/><text x="258" y="108" text-anchor="middle" fill="white">B</text>
    <circle cx="290" cy="180" r="22" fill="#58cc02"/><text x="290" y="186" text-anchor="middle" fill="white">C</text>
    <circle cx="258" cy="258" r="22" fill="#ff9600"/><text x="258" y="264" text-anchor="middle" fill="white">D</text>
    <circle cx="180" cy="290" r="22" fill="#ff5252"/><text x="180" y="296" text-anchor="middle" fill="white">E</text>
    <circle cx="102" cy="258" r="22" fill="#9c27b0"/><text x="102" y="264" text-anchor="middle" fill="white">F</text>
    <circle cx="70" cy="180" r="22" fill="#00bcd4"/><text x="70" y="186" text-anchor="middle" fill="white">G</text>
    <circle cx="102" cy="102" r="22" fill="#795548"/><text x="102" y="108" text-anchor="middle" fill="white">H</text>
  </g>
  <text x="180" y="340" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">8 people seated facing the center</text>
</svg>` },

      { type: 'heading', text: 'Facing center vs facing outward', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Facing center:</strong> the person\'s left hand is to the table\'s right (clockwise next).',
        '<strong>Facing outward:</strong> the person\'s left hand is to the table\'s left (anti-clockwise next).',
        '<strong>Always check facing</strong> when interpreting "immediate left/right".'
      ]},

      { type: 'heading', text: 'Worked example: 6 around a table', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">6 friends P, Q, R, S, T, U sit around a circular table facing the center.</span>
<span class="com">1. P sits 2nd to the right of Q.</span>
<span class="com">2. R sits opposite P.</span>
<span class="com">3. S sits to the immediate left of R.</span>
<span class="com">4. T sits 2nd to the left of Q.</span>

Fix Q at 12 o&apos;clock. Facing center → right = clockwise.
Q at pos 1. P 2nd right = pos 3.
R opposite P → R at pos 6 (across).
S immediate left of R → left in facing-center = clockwise next → S at pos 5?
Actually facing center, left = anti-clockwise next.
S at pos 5 (left of R-at-6) means R&apos;s left = pos 5.
T 2nd to left of Q = pos 5? — clash. Re-check.

Use a fresh slot list with care of facing → drawing fixes errors.` },

      { type: 'heading', text: 'Quick facing rules', level: 2 },
      { type: 'image', alt: 'facing rules', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Facing center</text>
  <text x="450" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Facing outward</text>
  <circle cx="150" cy="120" r="60" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="150" cy="60" r="14" fill="#7c4dff"/>
  <text x="150" y="64" text-anchor="middle" fill="white" font-weight="bold" font-size="10">X</text>
  <text x="100" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">X&apos;s right</text>
  <text x="200" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">X&apos;s left</text>
  <path d="M 150,80 L 130,100 M 150,80 L 170,100" stroke="#7c4dff" stroke-width="2" fill="none"/>

  <circle cx="450" cy="120" r="60" fill="none" stroke="#58cc02" stroke-width="2"/>
  <circle cx="450" cy="60" r="14" fill="#58cc02"/>
  <text x="450" y="64" text-anchor="middle" fill="white" font-weight="bold" font-size="10">Y</text>
  <text x="400" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Y&apos;s left</text>
  <text x="500" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Y&apos;s right</text>
  <path d="M 450,40 L 430,20 M 450,40 L 470,20" stroke="#58cc02" stroke-width="2" fill="none"/>

  <text x="300" y="200" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Notice how left/right flip depending on facing direction.</text>
</svg>` },

      { type: 'heading', text: 'Mixed-facing (advanced)', level: 2 },
      { type: 'para', html: 'In modern exams, some people face the centre and others face outward. The clue "A is to B\'s left" then depends on B\'s facing.' },

      { type: 'heading', text: '"Opposite" in circular tables', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'For <strong>even n</strong>: opposite seats exist (e.g., for 8 people, pos 1 ↔ pos 5).',
        'For <strong>odd n</strong>: no true "opposite" — but exam may use "diametrically opposite".',
        'Formula: opposite of seat <em>k</em> with n seats = (k + n/2) mod n.'
      ]},

      { type: 'heading', text: 'Distance-around-the-table', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">In a table of 10, A is at position 3. B is 4th to the right of A.</span>
<span class="com">B is at position?</span>

3 + 4 = 7. B at position <span class="num">7</span> (clockwise).` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Always <strong>sketch a circle</strong> with numbered positions.',
        'Fix one person, then place the rest relative to them.',
        'Mark facing arrows on each person.',
        'Re-check by reading every clue against your final drawing.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Place the first person at "12 o\'clock". This anchors your mental compass and makes "right = clockwise" intuitive.' }
    ]},

    /* ============== CH 15: Syllogisms Basics ============== */
    { id: 'rsn-c15', title: 'Syllogisms Basics', icon: '⚪', sections: [
      { type: 'heading', text: 'ALL / SOME / NO statements', level: 1 },
      { type: 'para', html: '<strong>Syllogisms</strong> are formal logical deductions from premises. You\'re given 2-3 statements and asked which conclusions logically follow.' },

      { type: 'heading', text: 'The four basic statement types', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>A: All X are Y.</strong> — universal positive.',
        '<strong>E: No X are Y.</strong> — universal negative.',
        '<strong>I: Some X are Y.</strong> — particular positive.',
        '<strong>O: Some X are not Y.</strong> — particular negative.'
      ]},

      { type: 'image', alt: 'three venn shapes', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="100" y="24" text-anchor="middle" font-weight="bold" font-family="Nunito">All X are Y</text>
  <text x="300" y="24" text-anchor="middle" font-weight="bold" font-family="Nunito">No X are Y</text>
  <text x="500" y="24" text-anchor="middle" font-weight="bold" font-family="Nunito">Some X are Y</text>

  <circle cx="100" cy="140" r="65" fill="none" stroke="#1cb0f6" stroke-width="2"/>
  <circle cx="100" cy="155" r="38" fill="#7c4dff" fill-opacity="0.6" stroke="#7c4dff" stroke-width="2"/>
  <text x="100" y="100" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="#1cb0f6">Y</text>
  <text x="100" y="160" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="white">X</text>

  <circle cx="265" cy="140" r="50" fill="#7c4dff" fill-opacity="0.5" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="345" cy="140" r="50" fill="#1cb0f6" fill-opacity="0.5" stroke="#1cb0f6" stroke-width="2"/>
  <text x="245" y="145" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="white">X</text>
  <text x="365" y="145" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="white">Y</text>

  <circle cx="470" cy="140" r="50" fill="#7c4dff" fill-opacity="0.5" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="530" cy="140" r="50" fill="#1cb0f6" fill-opacity="0.5" stroke="#1cb0f6" stroke-width="2"/>
  <text x="450" y="145" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="white">X</text>
  <text x="550" y="145" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="white">Y</text>

  <text x="100" y="230" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">X is fully inside Y</text>
  <text x="300" y="230" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">No overlap</text>
  <text x="500" y="230" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Partial overlap</text>
</svg>` },

      { type: 'heading', text: 'Worked example 1', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. All cats are mammals.</span>
<span class="com">2. All mammals are animals.</span>

<span class="com">Conclusions:</span>
<span class="com">I. All cats are animals.</span>
<span class="com">II. Some animals are cats.</span>

Cats ⊂ Mammals ⊂ Animals. So Cats ⊂ Animals.
I follows ✓. II follows (a non-empty subset means some animals are cats) ✓.

Answer: <span class="num">Both I and II follow</span>.` },

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. Some pens are pencils.</span>
<span class="com">2. All pencils are erasers.</span>

<span class="com">Conclusions:</span>
<span class="com">I. Some pens are erasers.</span>
<span class="com">II. All pens are erasers.</span>

Some pens are pencils, and those pencils are erasers.
So some pens are erasers ✓.
But we don&apos;t know about ALL pens.

Answer: <span class="num">Only I follows</span>.` },

      { type: 'heading', text: 'Worked example 3 (No statement)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. No bird is a fish.</span>
<span class="com">2. All eagles are birds.</span>

<span class="com">Conclusions:</span>
<span class="com">I. No eagle is a fish.</span>
<span class="com">II. Some birds are eagles.</span>

Birds and Fish are disjoint. Eagles ⊂ Birds, so Eagles ∩ Fish = ∅. I ✓.
All eagles are birds → some birds are eagles (since eagles exist). II ✓.

Answer: <span class="num">Both follow</span>.` },

      { type: 'heading', text: 'Conversion rules', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>All X are Y</strong> → <em>Some Y are X</em> (legal).',
        '<strong>No X are Y</strong> → <em>No Y are X</em> (legal).',
        '<strong>Some X are Y</strong> → <em>Some Y are X</em> (legal).',
        '<strong>Some X are not Y</strong> → <em>nothing follows about Y reversed</em>.'
      ]},

      { type: 'heading', text: 'Three-statement syllogism preview', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">1. All apples are fruits.</span>
<span class="com">2. All fruits are tasty.</span>
<span class="com">3. Some tasty things are sweet.</span>

Conclusion: All apples are tasty ✓
Conclusion: All apples are sweet ✗ (no link)` },

      { type: 'heading', text: 'Possibility statements', level: 2 },
      { type: 'para', html: 'Modern exams add: "Some X are Y is a possibility" or "All X being Y is a possibility". A possibility holds if it doesn\'t contradict the premises.' },

      { type: 'heading', text: 'Tip: draw Venn diagrams', level: 2 },
      { type: 'callout', kind: 'tip', html: 'For every syllogism, sketch Venn circles for the categories involved. If the conclusion is FORCED by the diagram, it follows. If you can draw an alternate diagram where it fails, it does NOT follow.' },

      { type: 'callout', kind: 'warn', html: 'In syllogisms, <strong>only use the given premises</strong>. Don\'t bring outside knowledge ("but really, all cats are animals!").' }
    ]},

    /* ============== CH 16: Syllogisms Advanced ============== */
    { id: 'rsn-c16', title: 'Syllogisms Advanced', icon: '⚫', sections: [
      { type: 'heading', text: 'Three-statement chains', level: 1 },
      { type: 'para', html: 'Multi-statement syllogisms need careful step-by-step Venn construction. Find which categories link.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. Some teachers are doctors.</span>
<span class="com">2. All doctors are engineers.</span>
<span class="com">3. No engineer is a farmer.</span>

Conclusions:
I. Some teachers are engineers.
II. No teacher is a farmer.
III. Some doctors are not farmers.

From 1+2: some teachers → doctors → engineers. I ✓.
From 2+3: all doctors are engineers, no engineer is farmer. So no doctor is farmer.
III: Some doctors are not farmers ✓ (in fact, no doctor is).
II: We only know SOME teachers are doctors. Other teachers might be farmers. II ✗.

Answer: <span class="num">I and III follow</span>` },

      { type: 'heading', text: 'Either-or conclusions', level: 2 },
      { type: 'para', html: '"Either I or II follows" is a valid answer when <strong>both can\'t be false simultaneously</strong>, but neither individually is forced.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. Some students are athletes.</span>
<span class="com">2. Some athletes are not singers.</span>

Conclusions:
I. Some students are not singers.
II. All students are singers.

Neither is definitely forced — but they&apos;re mutually exhaustive (one of the two must hold).
Answer: <span class="num">Either I or II follows</span>` },

      { type: 'heading', text: 'Possibility conclusions', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statements:</span>
<span class="com">1. All A are B.</span>
<span class="com">2. Some B are C.</span>

<span class="com">Is &quot;Some A are C is a possibility&quot; valid?</span>

Without violating premises, we CAN draw a Venn where some A&apos;s overlap C.
So yes — <span class="num">possibility holds</span>.` },

      { type: 'heading', text: '"No conclusion follows"', level: 2 },
      { type: 'para', html: 'If you can construct any Venn diagram consistent with the premises where the conclusion is false, the conclusion does NOT follow.' },

      { type: 'heading', text: 'Practice', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">1. All metals are conductors.</span>
<span class="com">2. Some conductors are insulators.</span>

Does &quot;Some metals are insulators&quot; follow? NO — metals are inside conductors, but the overlap of conductors with insulators may not include metals.

Answer: <span class="num">Does not follow</span>` },

      { type: 'callout', kind: 'tip', html: 'In advanced syllogisms, always test the <em>weakest possible</em> Venn arrangement. If it breaks the conclusion, the conclusion is not forced.' }
    ]},

    /* ============== CH 17: Statement & Conclusion ============== */
    { id: 'rsn-c17', title: 'Statement & Conclusion', icon: '➡️', sections: [
      { type: 'heading', text: 'Which conclusion follows?', level: 1 },
      { type: 'para', html: 'You\'re given a <strong>real-world statement</strong> (often a news clip or quote) and 2-4 conclusions. Identify which definitely follow from the statement.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;Heavy rain has caused flooding in the city. Schools will be closed tomorrow.&quot;</span>

Conclusions:
I. The city is prone to floods.
II. Tomorrow is a holiday for students.

II directly follows from &quot;schools will be closed&quot; ✓.
I is an assumption beyond the statement (one flood ≠ pattern).

Answer: <span class="num">Only II follows</span>.` },

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;Smoking causes lung cancer in many cases.&quot;</span>

Conclusions:
I. People should not smoke.
II. All smokers get lung cancer.

I is a value judgement — not forced by the statement.
II contradicts &quot;in many cases&quot; (not all).

Answer: <span class="num">Neither follows directly</span>.` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'A conclusion <strong>follows</strong> if it is directly derivable from the statement.',
        'It does <strong>NOT follow</strong> if it requires extra information or makes a value judgement.',
        'Beware of extreme words: "always", "all", "never", "must" — likely too strong.',
        'Soft conclusions are usually safer: "may", "possibly".'
      ]},

      { type: 'heading', text: 'Common traps', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Restating the statement</strong> in new words — yes, this follows.',
        '<strong>Adding implicit assumptions</strong> — these are NOT conclusions.',
        '<strong>Confusing cause and effect</strong> — make sure the direction matches.',
        '<strong>Over-generalising</strong> — "many" ≠ "all".'
      ]},

      { type: 'heading', text: 'Worked example 3', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;The new bridge has reduced travel time between the two cities by 30%.&quot;</span>

Conclusions:
I. People are happy with the new bridge.
II. The travel time is now shorter than before.

II clearly follows ✓.
I is plausible but not stated.

Answer: <span class="num">Only II follows</span>.` },

      { type: 'callout', kind: 'tip', html: 'Be conservative. If a conclusion could fail in some plausible world consistent with the statement, it doesn\'t follow.' }
    ]},

    /* ============== CH 18: Statement & Assumption ============== */
    { id: 'rsn-c18', title: 'Statement & Assumption', icon: '💭', sections: [
      { type: 'heading', text: 'What is the speaker assuming?', level: 1 },
      { type: 'para', html: 'An <strong>assumption</strong> is something the speaker takes for granted without stating it. It is necessary for the statement to make sense.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;Use our soap for soft, glowing skin.&quot;</span>

Assumptions:
I. People want soft, glowing skin.
II. The soap is harmful for hair.

I is implicit — otherwise the ad makes no sense ✓.
II is unrelated to the statement.

Answer: <span class="num">Only I is implicit</span>.` },

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;Please switch off your mobile phone during the meeting.&quot;</span>

Assumptions:
I. Mobile phones can disturb meetings.
II. People can switch off their phones.

Both are implicit — otherwise the request is unreasonable ✓.

Answer: <span class="num">Both I and II are implicit</span>.` },

      { type: 'heading', text: 'Difference from conclusion', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Conclusion</strong> follows AFTER the statement (effect).',
        '<strong>Assumption</strong> exists BEFORE the statement (precondition).',
        'A conclusion is what we can deduce; an assumption is what the speaker pre-supposed.'
      ]},

      { type: 'heading', text: 'Negation test', level: 2 },
      { type: 'para', html: 'Useful trick: <strong>negate</strong> the candidate assumption. If the statement falls apart, it WAS an assumption.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;I&apos;ll meet you at 5 PM tomorrow.&quot;</span>

Candidate assumption: &quot;Tomorrow exists.&quot;
Negate: &quot;Tomorrow does not exist&quot; → statement is meaningless.
∴ &quot;Tomorrow exists&quot; IS an assumption ✓` },

      { type: 'heading', text: 'Worked example 3', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: &quot;Schools should teach moral values to students.&quot;</span>

Assumptions:
I. Schools currently don&apos;t teach moral values.
II. Moral values can be taught.

II is implicit — otherwise the suggestion is impossible ✓.
I is debatable (maybe they teach some, but speaker wants more).

Answer: <span class="num">Only II is implicit</span>.` },

      { type: 'callout', kind: 'tip', html: 'Ask: <em>Without this assumption, would the statement still make sense?</em> If no, it\'s a valid assumption.' }
    ]},

    /* ============== CH 19: Cause & Effect ============== */
    { id: 'rsn-c19', title: 'Cause & Effect', icon: '⚡', sections: [
      { type: 'heading', text: 'What caused what?', level: 1 },
      { type: 'para', html: 'You\'re given two events. Decide which is the cause and which is the effect — or if they\'re unrelated.' },

      { type: 'heading', text: 'Answer options (standard format)', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>(a)</strong> Statement I is the cause; II is the effect.',
        '<strong>(b)</strong> Statement II is the cause; I is the effect.',
        '<strong>(c)</strong> Both are effects of an independent cause.',
        '<strong>(d)</strong> Both are independent events.',
        '<strong>(e)</strong> Both are effects of independent causes.'
      ]},

      { type: 'heading', text: 'Worked example 1', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">I. The price of petrol has increased.</span>
<span class="com">II. Public bus fares have been raised.</span>

Petrol-price hike → bus fare hike. I is the cause ✓.
Answer: <span class="num">(a) I is cause, II is effect</span>` },

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">I. Sales of woollens have increased.</span>
<span class="com">II. Many people are suffering from cold.</span>

Both effects of an independent cause: <span class="num">winter / cold weather</span> ✓
Answer: <span class="num">(c)</span>` },

      { type: 'heading', text: 'Worked example 3', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">I. Government has launched a new vaccine drive.</span>
<span class="com">II. School students performed well in exams.</span>

These are clearly unrelated events.
Answer: <span class="num">(d) Independent events</span>` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Identify the logical/temporal order of events.',
        'Ask: <strong>does I cause II?</strong> Does II cause I?',
        'Could a third factor cause both?',
        'Or are they totally unrelated?'
      ]},

      { type: 'callout', kind: 'warn', html: 'Correlation ≠ causation! Just because two events happen together doesn\'t mean one caused the other.' }
    ]},

    /* ============== CH 20: Critical Reasoning ============== */
    { id: 'rsn-c20', title: 'Critical Reasoning', icon: '🎯', sections: [
      { type: 'heading', text: 'Strengthen & weaken arguments', level: 1 },
      { type: 'para', html: 'Critical-reasoning questions give you a short argument. You\'re asked which option <strong>strengthens, weakens, or has no effect</strong> on the conclusion.' },

      { type: 'heading', text: 'Anatomy of an argument', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Premise</strong> — fact(s) given.',
        '<strong>Conclusion</strong> — the writer\'s claim.',
        '<strong>Assumption</strong> — unstated bridge between premise and conclusion.',
        '<strong>Strengthener</strong> — additional fact that supports the conclusion.',
        '<strong>Weakener</strong> — additional fact that hurts the conclusion.'
      ]},

      { type: 'heading', text: 'Worked example: weaken', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Argument: People who eat breakfast are more productive at work. Therefore, employers should provide free breakfast.</span>

Which weakens this conclusion?
(a) Breakfast eaters tend to sleep earlier.   ← strengthens or neutral
(b) Studies show free meals at work increase absenteeism.   ← <span class="num">weakens ✓</span>
(c) Breakfast is the most important meal.   ← strengthens
(d) Productivity is measured by hours worked.   ← neutral` },

      { type: 'heading', text: 'Worked example: strengthen', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Argument: Reading novels improves vocabulary.</span>

Strengthens:
(a) Children who read 30 mins/day score 40% higher on vocab tests.   ← <span class="num">✓</span>
(b) Many novelists have small vocabularies.   ← weakens
(c) Reading takes time away from other activities.   ← weakens
(d) Vocabulary depends on education level.   ← neutral` },

      { type: 'heading', text: 'Worked example: assumption', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Argument: This medicine cures fever in 90% of cases. So most fever patients should take it.</span>

Hidden assumption: the medicine has minimal side effects.
If the medicine has severe side effects, the conclusion fails.` },

      { type: 'heading', text: 'Inference question', level: 2 },
      { type: 'para', html: 'An <strong>inference</strong> is what MUST be true given the passage — not what is stated, but what is logically implied.' },
      { type: 'code', lang: 'text', code:
`<span class="com">Passage: All employees who arrived late lost the bonus.</span>

Inference: Bonus is dependent on punctuality ✓.
Not inference: All employees are dishonest ✗ (irrelevant).` },

      { type: 'heading', text: 'Course-of-action question', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Statement: Pollution levels in the city are critical.</span>

Possible courses:
I. Restrict vehicles in the city centre. ✓ valid
II. Plant more trees. ✓ valid (long-term)
III. Ignore the problem. ✗ never valid

Answer: <span class="num">I and II</span>` },

      { type: 'heading', text: 'Quick decision framework', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Find the conclusion.',
        'Find the premises.',
        'Spot the assumption (negation test).',
        'For "strengthen" → boost the assumption.',
        'For "weaken" → break the assumption.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Read every option even if you think you found the answer in (a). Critical-reasoning answers are often subtle.' }
    ]},

    /* ============== CH 21: Floor Puzzles ============== */
    { id: 'rsn-c21', title: 'Floor Puzzles', icon: '🏢', sections: [
      { type: 'heading', text: 'n people, n floors', level: 1 },
      { type: 'para', html: 'A building has <em>n</em> floors (typically 5-8). One person lives on each floor. Clues describe relative positions.' },

      { type: 'image', alt: '5-floor building', svg:
`<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="360" fill="#fafafa" rx="8"/>
  <text x="180" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Floor 5 at top, Floor 1 at bottom</text>
  <g font-family="Nunito">
    <rect x="80" y="40" width="200" height="50" fill="#7c4dff" rx="6"/>
    <text x="180" y="72" text-anchor="middle" fill="white" font-weight="bold">Floor 5 — A</text>
    <rect x="80" y="100" width="200" height="50" fill="#1cb0f6" rx="6"/>
    <text x="180" y="132" text-anchor="middle" fill="white" font-weight="bold">Floor 4 — D</text>
    <rect x="80" y="160" width="200" height="50" fill="#58cc02" rx="6"/>
    <text x="180" y="192" text-anchor="middle" fill="white" font-weight="bold">Floor 3 — B</text>
    <rect x="80" y="220" width="200" height="50" fill="#ff9600" rx="6"/>
    <text x="180" y="252" text-anchor="middle" fill="white" font-weight="bold">Floor 2 — E</text>
    <rect x="80" y="280" width="200" height="50" fill="#ff5252" rx="6"/>
    <text x="180" y="312" text-anchor="middle" fill="white" font-weight="bold">Floor 1 — C</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">5 people A, B, C, D, E live on floors 1-5 (1 = ground).</span>
<span class="com">1. A lives at the top.</span>
<span class="com">2. C lives at the bottom.</span>
<span class="com">3. B lives just above E.</span>
<span class="com">4. D lives between A and B.</span>

From 1: A = 5. From 2: C = 1.
From 4: D between A(5) and B → D = 4, B ≤ 3.
From 3: B is just above E → B = 3, E = 2.

Final: <span class="num">A-5, D-4, B-3, E-2, C-1</span>` },

      { type: 'heading', text: 'Common clue templates', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '"X lives on an odd-numbered floor"',
        '"X lives <em>n</em> floors above Y"',
        '"As many people live between X and Y as between Y and Z"',
        '"X lives on a floor that is a multiple of 3"',
        '"X lives just below Y"'
      ]},

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">7 people P-V live on floors 1-7.</span>
<span class="com">1. Q lives on floor 5.</span>
<span class="com">2. R lives 3 floors below Q.</span>
<span class="com">3. As many people live between P and Q as between R and T.</span>
<span class="com">4. S lives on the topmost floor.</span>

From 1: Q=5. From 2: R=5−3=2. From 4: S=7.
Remaining floors: 1, 3, 4, 6 for P, T, U, V.
From 3: gap(P,Q) = gap(R,T).
If P=4 (gap 1 from Q=5), need T 1 floor from R=2 → T=1 or 3.
If P=6 (gap 1), T=1 or 3. Many possibilities.

(Exam adds more clues; this teaches the technique.)` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Draw a vertical column with <em>n</em> empty slots.',
        'Place definite-position clues first.',
        'Use "above/below" clues to chain.',
        'Use "just above/below" to fix adjacency.',
        'Eliminate impossible positions.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Floor puzzles map perfectly to a vertical row. They\'re really linear seating in disguise!' },

      { type: 'callout', kind: 'warn', html: 'In some questions, "1st floor" = ground floor + 1. Always clarify whether floor 1 = ground or not!' }
    ]},

    /* ============== CH 22: Day/Month Puzzles ============== */
    { id: 'rsn-c22', title: 'Day/Month Scheduling', icon: '🗓️', sections: [
      { type: 'heading', text: 'Schedule clues', level: 1 },
      { type: 'para', html: 'Schedule puzzles assign people to days of the week or months of the year, based on clues like "X meets the client on the day before Y\'s meeting".' },

      { type: 'heading', text: 'Worked example: day puzzle', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">5 people meet a client on different days, Mon-Fri.</span>
<span class="com">1. A meets on Wednesday.</span>
<span class="com">2. B meets the day before D.</span>
<span class="com">3. E meets on Friday.</span>
<span class="com">4. C meets on Monday.</span>

From 1: A=Wed. From 3: E=Fri. From 4: C=Mon.
Remaining: Tue, Thu for B, D.
From 2: B just before D.
Options: (B=Tue, D=Wed) — but Wed is A. So B=Wed-1? No, D must be just after B.
Try: B=Thu, D=Fri — but Fri is E. ✗
Try: B=Tue, D=Wed — but Wed is A. ✗
∴ Re-examine clue 2 interpretation. Maybe &quot;day before&quot; means earlier in the week (not adjacent).

Actually clue 2 says &quot;the day before D&quot; — could be one day before. So adjacent days only.
With A on Wed (a constraint), no Tue→Wed or Thu→Fri pairing works.
Possibly puzzle has different clue set; check carefully.` },

      { type: 'heading', text: 'Worked example: month puzzle', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">6 people are born in different months — Jan, Feb, Mar, Apr, May, Jun.</span>
<span class="com">1. P is born in a month with 31 days.</span>
<span class="com">2. Q is born in February.</span>
<span class="com">3. R is born immediately after Q.</span>
<span class="com">4. S is born in May.</span>

From 2: Q=Feb. From 4: S=May.
From 3: R=Mar.
From 1: P born in 31-day month — Jan, Mar, May. Mar and May taken → P=Jan.
Remaining: T, U for Apr, Jun.

Final: <span class="num">P-Jan, Q-Feb, R-Mar, S-May (T/U for Apr/Jun)</span>` },

      { type: 'heading', text: 'Days with 31 days', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>31-day months:</strong> Jan, Mar, May, Jul, Aug, Oct, Dec',
        '<strong>30-day months:</strong> Apr, Jun, Sep, Nov',
        '<strong>February:</strong> 28 (29 in leap year)'
      ]},

      { type: 'heading', text: 'Tricky relative clues', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '"<strong>X meets before Y</strong>" → X\'s day < Y\'s day (any gap).',
        '"<strong>X meets just before Y</strong>" → adjacent days.',
        '"<strong>X meets two days before Y</strong>" → exact gap of 2.',
        '"<strong>X meets sometime after Y</strong>" → X > Y in the schedule.'
      ]},

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'List the days/months in order at the top.',
        'Use definite clues first.',
        'Use chains for relative clues.',
        'Check no two people share a day.'
      ]},

      { type: 'callout', kind: 'tip', html: 'A 7-day week or 12-month year is just a longer linear puzzle. Use the same techniques as floor puzzles.' }
    ]},

    /* ============== CH 23: Calendars ============== */
    { id: 'rsn-c23', title: 'Calendars', icon: '📅', sections: [
      { type: 'heading', text: 'Day-of-week calculations', level: 1 },
      { type: 'para', html: 'Calendar reasoning asks: <em>what day was January 1, 1947?</em>, or <em>how many odd days between 1 Jan 2000 and 1 Jan 2024?</em>. The trick is <strong>odd days</strong>.' },

      { type: 'heading', text: 'Leap year rule', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'A year is a <strong>leap year</strong> if divisible by 4 — <em>except</em> century years.',
        'Century years (1900, 2000) are leap only if divisible by 400.',
        'Examples: 2000 ✓ leap, 1900 ✗ not leap, 2024 ✓ leap.'
      ]},

      { type: 'heading', text: 'Odd days', level: 2 },
      { type: 'para', html: '"Odd days" are the days left over after dividing by 7. Used to find the day-of-week shift.' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>1 ordinary year</strong> = 365 days = 52 weeks + 1 day → 1 odd day',
        '<strong>1 leap year</strong> = 366 days → 2 odd days',
        '<strong>100 years</strong> = 76 ordinary + 24 leap (1900 not leap) → 76 + 48 = 124 ≡ 5 odd days',
        '<strong>400 years</strong> = 4 × 100 + 1 extra leap = 0 odd days'
      ]},

      { type: 'heading', text: 'Days in each month (odd-day count)', level: 2 },
      { type: 'code', lang: 'text', code:
`Jan = 31 → 3 odd
Feb = 28 → 0 (or 1 in leap)
Mar = 31 → 3
Apr = 30 → 2
May = 31 → 3
Jun = 30 → 2
Jul = 31 → 3
Aug = 31 → 3
Sep = 30 → 2
Oct = 31 → 3
Nov = 30 → 2
Dec = 31 → 3` },

      { type: 'heading', text: 'Worked example: day of given date', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">What day was 15 August 1947?</span>

Total odd days from 1 Jan 0001 to 15 Aug 1947:
1600 years → 0 odd (400-year cycle)
300 years → 1 odd (300 mod 4 cycle = 1)
46 years (1901-1946) → 46 + (number of leap years 1901-1946) = 46 + 11 = 57 odd → 57 mod 7 = 1 odd
Jan-Jul 1947 = 31+28+31+30+31+30+31 = 212 + Aug15 = 227 days → 227 mod 7 = 3 odd

Total = 0 + 1 + 1 + 3 = 5 odd days.
Day = Friday (Sun=0, Mon=1, ..., Fri=5)

Answer: <span class="num">Friday</span> ✓ (historical fact)` },

      { type: 'heading', text: 'Worked example: same day next year', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If 1 January 2024 is Monday, what day is 1 January 2025?</span>

2024 is a leap year → 2 odd days.
Mon + 2 = Wed.

Answer: <span class="num">Wednesday</span>` },

      { type: 'heading', text: 'Worked example: same date past year', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">If 1 March 2024 is Friday, what was 1 March 2023?</span>

2023 → 2024: not a leap year? 2024 IS leap but Feb 29 is between 1-Mar-23 and 1-Mar-24.
So 366 days passed → 2 odd days.
2023 was Friday − 2 = Wednesday.

Answer: <span class="num">Wednesday</span>` },

      { type: 'heading', text: 'Quick day-of-week from current date', level: 2 },
      { type: 'para', html: 'Memorise: <strong>Jan 1, 2024 was Monday</strong>. Add/subtract odd days for nearby dates.' },

      { type: 'heading', text: 'Calendar repetition', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'A non-leap year\'s calendar repeats every <strong>6 or 11 years</strong>.',
        'A leap year\'s calendar repeats every <strong>28 years</strong>.',
        'Calendars repeat after 400 years exactly (same day-of-week for every date).'
      ]},

      { type: 'callout', kind: 'tip', html: 'For exam speed: <strong>memorise day codes</strong> for the current year, then add odd days for the target date.' }
    ]},

    /* ============== CH 24: Clocks Reasoning ============== */
    { id: 'rsn-c24', title: 'Clocks Reasoning', icon: '🕒', sections: [
      { type: 'heading', text: 'Angles, mirrors, water', level: 1 },
      { type: 'para', html: 'Clock-based reasoning problems involve <strong>angles</strong> between hands, <strong>mirror images</strong>, and <strong>water reflections</strong>.' },

      { type: 'image', alt: 'analog clock', svg:
`<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:240px;display:block;margin:0 auto;">
  <rect width="240" height="240" fill="#fafafa" rx="8"/>
  <circle cx="120" cy="120" r="100" fill="white" stroke="#7c4dff" stroke-width="3"/>
  <g font-family="Nunito" font-weight="bold" font-size="14">
    <text x="120" y="36" text-anchor="middle">12</text>
    <text x="172" y="58" text-anchor="middle">1</text>
    <text x="200" y="100" text-anchor="middle">2</text>
    <text x="210" y="128" text-anchor="middle">3</text>
    <text x="200" y="158" text-anchor="middle">4</text>
    <text x="172" y="190" text-anchor="middle">5</text>
    <text x="120" y="214" text-anchor="middle">6</text>
    <text x="68" y="190" text-anchor="middle">7</text>
    <text x="40" y="158" text-anchor="middle">8</text>
    <text x="30" y="128" text-anchor="middle">9</text>
    <text x="40" y="100" text-anchor="middle">10</text>
    <text x="68" y="58" text-anchor="middle">11</text>
  </g>
  <line x1="120" y1="120" x2="120" y2="60" stroke="#222" stroke-width="4" stroke-linecap="round"/>
  <line x1="120" y1="120" x2="170" y2="120" stroke="#222" stroke-width="3" stroke-linecap="round"/>
  <circle cx="120" cy="120" r="5" fill="#7c4dff"/>
</svg>` },

      { type: 'heading', text: 'Angle formula', level: 2 },
      { type: 'para', html: 'At time H:M, the angle between hour and minute hands is:' },
      { type: 'code', lang: 'text', code:
`<span class="num">θ</span> = |30·H − (11/2)·M|

If result &gt; 180, take 360 − θ to get the smaller angle.` },

      { type: 'heading', text: 'Worked example: angle at given time', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Angle at 3:15?</span>

θ = |30·3 − (11/2)·15|
  = |90 − 82.5|
  = <span class="num">7.5°</span>

(Hour hand has moved a bit past 3 toward 4, hence 7.5° not 0.)` },

      { type: 'heading', text: 'Worked example: hands at right angle', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">How many times in 12 hours are the hands at right angles?</span>

Hands cross at right angle 22 times in 12 hours
(twice per hour on average, but 2 hours have only one occurrence each).

Answer: <span class="num">22 times</span>` },

      { type: 'heading', text: 'Worked example: hands overlap', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">How many times do the hands overlap in 24 hours?</span>

In 12 hours, hands overlap 11 times (not 12 — once at 12:00 counts twice).
In 24 hours: <span class="num">22 times</span>` },

      { type: 'heading', text: 'Mirror image of clock', level: 2 },
      { type: 'para', html: 'The mirror image of a clock time is the time you\'d see if the clock were reflected in a vertical mirror. Formula:' },
      { type: 'code', lang: 'text', code:
`mirror time = <span class="num">11:60 − actual time</span> (if actual &gt; 0:00)
mirror time = <span class="num">12:00 − actual time</span> (special at 12:00)

Example: actual = 3:30
Mirror = 11:60 − 3:30 = 8:30
Confirm with visualisation: yes, 8:30 ✓` },

      { type: 'heading', text: 'Water image of clock', level: 2 },
      { type: 'para', html: 'Water (horizontal) reflection flips the clock vertically. Formula:' },
      { type: 'code', lang: 'text', code:
`water time = <span class="num">18:30 − actual time</span> (if applicable)

Or: mirror across the 9-3 axis.
For 2:15: water image looks like 4:45.` },

      { type: 'heading', text: 'Clock gain/loss', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A clock gains 5 min/hour. After 3 hours, how much ahead?</span>

3 hours × 5 min = <span class="num">15 minutes ahead</span>` },

      { type: 'callout', kind: 'tip', html: 'For angle problems, remember: minute hand moves 6°/min, hour hand 0.5°/min. Relative speed = 5.5°/min.' }
    ]},

    /* ============== CH 25: Cubes & Dice ============== */
    { id: 'rsn-c25', title: 'Cubes & Dice', icon: '🎲', sections: [
      { type: 'heading', text: '6 faces, hidden patterns', level: 1 },
      { type: 'para', html: 'Cube and dice questions test 3D visualisation: opposite faces, painted-cube counts, dice rolling.' },

      { type: 'image', alt: 'dice opposite faces', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Standard die — opposite faces sum to 7</text>
  <g font-family="Nunito" font-size="16" font-weight="bold">
    <rect x="40" y="60" width="100" height="100" fill="#7c4dff" rx="10"/>
    <text x="90" y="115" text-anchor="middle" fill="white">1</text>
    <text x="90" y="180" text-anchor="middle" fill="#222">↔</text>
    <rect x="180" y="60" width="100" height="100" fill="#7c4dff" rx="10"/>
    <text x="230" y="115" text-anchor="middle" fill="white">6</text>

    <rect x="320" y="60" width="100" height="100" fill="#1cb0f6" rx="10"/>
    <text x="370" y="115" text-anchor="middle" fill="white">2</text>
    <text x="370" y="180" text-anchor="middle" fill="#222">↔</text>
    <rect x="460" y="60" width="100" height="100" fill="#1cb0f6" rx="10"/>
    <text x="510" y="115" text-anchor="middle" fill="white">5</text>
  </g>
  <text x="300" y="210" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">3 ↔ 4 also (not shown)</text>
</svg>` },

      { type: 'heading', text: 'Rules of standard die', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Opposite faces always sum to <strong>7</strong>: (1,6), (2,5), (3,4).',
        'Total 6 faces, only 3 visible at a time max.',
        'Two views of the same die can identify opposite faces by elimination.'
      ]},

      { type: 'heading', text: 'Worked example: opposite face by elimination', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Two views of a die:</span>
View 1: top=1, front=2, right=3
View 2: top=1, front=3, right=5

In view 1, faces visible: 1, 2, 3 → opposites are 6, 5, 4.
In view 2, top=1 still. Front changes from 2 to 3.
This means the die rotated about the vertical axis (top stays 1).

So 2 and 5 are NOT opposites? Wait, view 2 right=5, view 1 right=3.
If 1 is on top, the four side faces are 2, 3, 4, 5 in some order around it.
∴ 6 is opposite 1 (since 6 not visible while 1 on top).
Pairs of opposites among 2,3,4,5: must sum to 7 → (2,5) and (3,4) ✓` },

      { type: 'heading', text: 'Painted cube — classic problem', level: 2 },
      { type: 'image', alt: 'painted cube 4x4x4', svg:
`<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px;display:block;margin:0 auto;">
  <rect width="300" height="240" fill="#fafafa" rx="8"/>
  <g stroke="#222" stroke-width="1" fill="none">
    <rect x="50" y="50" width="160" height="160" fill="#1cb0f6" fill-opacity="0.3"/>
    <line x1="90" y1="50" x2="90" y2="210"/>
    <line x1="130" y1="50" x2="130" y2="210"/>
    <line x1="170" y1="50" x2="170" y2="210"/>
    <line x1="50" y1="90" x2="210" y2="90"/>
    <line x1="50" y1="130" x2="210" y2="130"/>
    <line x1="50" y1="170" x2="210" y2="170"/>
    <polygon points="50,50 210,50 250,20 90,20" fill="#7c4dff" fill-opacity="0.4"/>
    <polygon points="210,50 210,210 250,180 250,20" fill="#58cc02" fill-opacity="0.4"/>
  </g>
  <text x="150" y="232" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">4×4×4 cube painted on outside, then cut into 64 small cubes</text>
</svg>` },

      { type: 'heading', text: 'Painted cube formulas', level: 2 },
      { type: 'para', html: 'A cube of side <em>n</em> painted on all 6 outer faces, then cut into <em>n³</em> small unit cubes. How many have:' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>3 painted faces</strong> (corners): always <em>8</em>.',
        '<strong>2 painted faces</strong> (edges): <em>12(n−2)</em>.',
        '<strong>1 painted face</strong> (centers of faces): <em>6(n−2)²</em>.',
        '<strong>0 painted faces</strong> (interior): <em>(n−2)³</em>.',
        '<strong>Sanity check:</strong> sum = n³.'
      ]},

      { type: 'heading', text: 'Worked example: 4×4×4 cube', level: 2 },
      { type: 'code', lang: 'text', code:
`n = 4
3-face corners: 8
2-face edges: 12·(4−2) = 24
1-face centers: 6·(4−2)² = 24
0-face interior: (4−2)³ = 8

Total: 8 + 24 + 24 + 8 = <span class="num">64</span> ✓` },

      { type: 'heading', text: 'Cut count', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">How many cuts to slice a cube into 27 smaller cubes (3×3×3)?</span>

Cuts per axis = n−1 = 2.
Total cuts = 3 × 2 = <span class="num">6 cuts</span>` },

      { type: 'heading', text: 'Dice rolling sequences', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A die has 1 on top, 2 facing you. After 1 right-roll, what&apos;s on top?</span>

Roll right: left face goes to bottom, top goes to right, bottom goes to right?
Actually: top → right, right → bottom, bottom → left, left → top.
Top was 1 → moves to right. New top = (old left).
If 2 was facing you (front), the four side faces in order (front, right, back, left) when top=1 follow a rule.
Specifically: if (top, front, right) = (1, 2, 3), then left=4, back=5, bottom=6 (sum-7 pairs).
After right-roll: new top = old left = 4.

Answer: <span class="num">4</span>` },

      { type: 'callout', kind: 'tip', html: 'For painted-cube problems, memorise the 4 formulas. Most exams use n = 3, 4, or 5.' }
    ]},

    /* ============== CH 26: Non-Verbal Series ============== */
    { id: 'rsn-c26', title: 'Non-Verbal Series', icon: '🔄', sections: [
      { type: 'heading', text: 'Figure-based patterns', level: 1 },
      { type: 'para', html: 'You\'re shown a series of 3-5 figures and asked which figure comes next, following the same transformation rule.' },

      { type: 'image', alt: 'rotation series', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Each figure rotates 90° clockwise</text>
  <g font-family="Nunito">
    <rect x="40" y="60" width="80" height="80" fill="white" stroke="#7c4dff" stroke-width="2"/>
    <line x1="50" y1="100" x2="110" y2="100" stroke="#222" stroke-width="3"/>
    <text x="80" y="170" text-anchor="middle">Figure 1</text>

    <rect x="160" y="60" width="80" height="80" fill="white" stroke="#7c4dff" stroke-width="2"/>
    <line x1="200" y1="70" x2="200" y2="130" stroke="#222" stroke-width="3"/>
    <text x="200" y="170" text-anchor="middle">Figure 2</text>

    <rect x="280" y="60" width="80" height="80" fill="white" stroke="#7c4dff" stroke-width="2"/>
    <line x1="290" y1="100" x2="350" y2="100" stroke="#222" stroke-width="3"/>
    <text x="320" y="170" text-anchor="middle">Figure 3</text>

    <rect x="400" y="60" width="80" height="80" fill="white" stroke="#7c4dff" stroke-width="2"/>
    <line x1="440" y1="70" x2="440" y2="130" stroke="#222" stroke-width="3"/>
    <text x="440" y="170" text-anchor="middle">Figure 4</text>

    <rect x="520" y="60" width="80" height="80" fill="white" stroke="#58cc02" stroke-width="2" stroke-dasharray="5 3"/>
    <line x1="530" y1="100" x2="590" y2="100" stroke="#58cc02" stroke-width="3"/>
    <text x="560" y="170" text-anchor="middle">Next?</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Common transformations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Rotation</strong> — 45°, 90°, 135°, 180° steps.',
        '<strong>Reflection</strong> — mirror across vertical/horizontal axis.',
        '<strong>Addition/removal</strong> — element added or removed each step.',
        '<strong>Size change</strong> — figure grows/shrinks.',
        '<strong>Color/shading change</strong> — pattern fills cycle.',
        '<strong>Position change</strong> — element moves around a grid.'
      ]},

      { type: 'heading', text: 'Element-addition example', level: 2 },
      { type: 'para', html: 'Figure 1: 1 dot. Figure 2: 2 dots. Figure 3: 3 dots. ... Pattern: +1 dot per figure.' },

      { type: 'heading', text: 'Rotation example', level: 2 },
      { type: 'para', html: 'Arrow points: up → right → down → left → up. Each step is 90° clockwise rotation.' },

      { type: 'heading', text: 'Multi-feature pattern', level: 2 },
      { type: 'para', html: 'Sometimes two transformations happen at once: a shape rotates AND changes color. Track each independently.' },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Identify the changing element(s).',
        'Note the transformation rule for each.',
        'Apply the rule to the last figure to get the next.',
        'Eliminate options that violate the rule.'
      ]},

      { type: 'callout', kind: 'tip', html: 'For rotation problems, sketch the angles on the figures. 90° at a time is easy; 45° trips people up.' }
    ]},

    /* ============== CH 27: Mirror & Water Images ============== */
    { id: 'rsn-c27', title: 'Mirror & Water Images', icon: '🪞', sections: [
      { type: 'heading', text: 'Reflections of letters', level: 1 },
      { type: 'para', html: '<strong>Mirror image</strong>: reflect across a <em>vertical</em> axis. <strong>Water image</strong>: reflect across a <em>horizontal</em> axis.' },

      { type: 'image', alt: 'letter reflections', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="100" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Original</text>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Mirror (vertical flip)</text>
  <text x="500" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Water (horizontal flip)</text>

  <text x="100" y="120" text-anchor="middle" font-family="Nunito" font-size="80" font-weight="bold" fill="#7c4dff">B</text>
  <g transform="translate(300,120) scale(-1,1)">
    <text x="0" y="0" text-anchor="middle" font-family="Nunito" font-size="80" font-weight="bold" fill="#1cb0f6">B</text>
  </g>
  <g transform="translate(500,75) scale(1,-1)">
    <text x="0" y="0" text-anchor="middle" font-family="Nunito" font-size="80" font-weight="bold" fill="#58cc02">B</text>
  </g>
  <line x1="200" y1="40" x2="200" y2="170" stroke="#ddd" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="380" y1="120" x2="600" y2="120" stroke="#ddd" stroke-width="1" stroke-dasharray="3 3"/>
</svg>` },

      { type: 'heading', text: 'Letters with vertical symmetry', level: 2 },
      { type: 'para', html: 'These letters look the same in a mirror: A, H, I, M, O, T, U, V, W, X, Y. So their mirror image equals themselves.' },

      { type: 'heading', text: 'Letters with horizontal symmetry', level: 2 },
      { type: 'para', html: 'These letters look the same upside down (water image): B, C, D, E, H, I, K, O, X.' },

      { type: 'heading', text: 'Numbers and symmetry', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Vertically symmetric digits:</strong> 0, 8.',
        '<strong>Horizontally symmetric digits:</strong> 0, 3, 8 (sort of).',
        '<strong>Both:</strong> 0, 8.'
      ]},

      { type: 'heading', text: 'Mirror image of words', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Mirror image of &quot;HELLO&quot;:</span>
Reverse the order AND flip each letter horizontally.
&quot;HELLO&quot; → mirror → &quot;OLLƎH&quot; (with flipped E)

In exams, watch out for letters that look similar but aren&apos;t (e.g., &quot;b&quot; mirror = &quot;d&quot;).` },

      { type: 'heading', text: 'Clock-time mirror images', level: 2 },
      { type: 'para', html: 'Already covered in Clocks chapter. Mirror time = <code>11:60 − actual time</code>.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Water image of &quot;BOOK&quot;:</span>

B → flipped horizontally (still looks like B kinda)
O → looks same
O → looks same
K → flipped (no longer K, looks weird)

In exam: most options show actual flipped graphic — pick the one matching.` },

      { type: 'callout', kind: 'tip', html: 'For digits and letters: <strong>remember symmetry groups</strong>. They tell you instantly which characters change under reflection.' }
    ]},

    /* ============== CH 28: Embedded Figures & Counting ============== */
    { id: 'rsn-c28', title: 'Embedded Figures & Counting', icon: '🔍', sections: [
      { type: 'heading', text: 'Find the hidden shape', level: 1 },
      { type: 'para', html: '<strong>Embedded-figure</strong> problems give a complex figure and a target shape. You must identify which of several options contains the target shape as a sub-figure.' },

      { type: 'image', alt: 'embedded triangle example', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="120" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Target</text>
  <polygon points="80,60 160,60 120,140" fill="none" stroke="#7c4dff" stroke-width="3"/>

  <text x="380" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Find target in this figure</text>
  <polygon points="280,60 450,60 400,180 240,150" fill="none" stroke="#1cb0f6" stroke-width="2"/>
  <line x1="280" y1="60" x2="400" y2="180" stroke="#1cb0f6" stroke-width="2"/>
  <line x1="450" y1="60" x2="240" y2="150" stroke="#1cb0f6" stroke-width="2"/>
  <polygon points="280,60 360,60 320,140" fill="#7c4dff" fill-opacity="0.3" stroke="#7c4dff" stroke-width="2"/>
</svg>` },

      { type: 'heading', text: 'Counting figures', level: 2 },
      { type: 'para', html: 'Given a complex figure, count how many triangles, rectangles, etc. are in it.' },

      { type: 'heading', text: 'Triangle counting in a triangle subdivided', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A triangle is subdivided by lines from each vertex to the opposite side&apos;s midpoint.</span>
<span class="com">Total triangles?</span>

Standard formula (cevians from each vertex):
1 (big triangle) + 6 (small inner) + ... varies by configuration.

For a triangle with 1 line from each vertex to opposite midpoint:
Total small + medium + large = <span class="num">16</span> in the classic case.` },

      { type: 'heading', text: 'Squares in a grid', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">How many squares in an n×n grid?</span>

Total = <span class="num">1² + 2² + 3² + ... + n² = n(n+1)(2n+1)/6</span>

Example: 3×3 grid
= 1 + 4 + 9 = <span class="num">14 squares</span>

Example: 5×5 grid
= 1+4+9+16+25 = <span class="num">55 squares</span>` },

      { type: 'heading', text: 'Rectangles in a grid', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">How many rectangles in an n×m grid?</span>

Total = <span class="num">C(n+1, 2) × C(m+1, 2)</span>
     = (n+1)·n/2 × (m+1)·m/2

Example: 3×3 grid
= C(4,2) × C(4,2) = 6 × 6 = <span class="num">36 rectangles</span> (includes squares)` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'For embedded figures: <strong>trace the target</strong> in your mind onto each option.',
        'For counting: <strong>enumerate by size</strong> — count all 1×1, then 2×2, etc.',
        'Don\'t forget rotated or skewed versions of the target shape.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Counting questions reward patience. Don\'t guess — methodically tally.' }
    ]},

    /* ============== CH 29: Paper Folding & Cutting ============== */
    { id: 'rsn-c29', title: 'Paper Folding & Cutting', icon: '📄', sections: [
      { type: 'heading', text: 'Visualise the unfolding', level: 1 },
      { type: 'para', html: 'You\'re shown a folded paper with a cut. The question: when unfolded, what does the paper look like?' },

      { type: 'image', alt: 'paper fold visualization', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="100" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Fold in half</text>
  <rect x="50" y="50" width="80" height="120" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="115" cy="100" r="10" fill="white" stroke="#ff5252" stroke-width="2"/>

  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Cut shown</text>
  <rect x="250" y="50" width="80" height="120" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="315" cy="100" r="10" fill="#ff5252"/>
  <line x1="330" y1="50" x2="330" y2="170" stroke="#222" stroke-width="2" stroke-dasharray="4 3"/>

  <text x="500" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Unfolded</text>
  <rect x="420" y="50" width="160" height="120" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="465" cy="100" r="10" fill="#ff5252"/>
  <circle cx="535" cy="100" r="10" fill="#ff5252"/>
  <line x1="500" y1="50" x2="500" y2="170" stroke="#222" stroke-width="2" stroke-dasharray="4 3"/>
</svg>` },

      { type: 'heading', text: 'Single fold', level: 2 },
      { type: 'para', html: 'Fold paper in half. Cut a hole. Unfold → 2 holes, mirror-symmetric about the fold line.' },

      { type: 'heading', text: 'Two folds', level: 2 },
      { type: 'para', html: 'Fold in half twice (perpendicular folds). Cut once. Unfold → 4 holes in a grid pattern.' },

      { type: 'heading', text: 'Diagonal fold', level: 2 },
      { type: 'para', html: 'Fold paper diagonally. Cut a notch. Unfold → 2 notches symmetric about the diagonal.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">A square paper is folded right-to-left, then bottom-to-top.</span>
<span class="com">A small triangle is cut from the corner where both folds meet.</span>
<span class="com">When unfolded, the paper has?</span>

The folded corner becomes the center after unfolding.
1 cut → 4 mirrored cuts radiating from center → diamond/star hole.

Answer: <span class="num">A diamond-shaped hole at the center</span>` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'For each cut, imagine it being mirrored across each fold line.',
        '<strong>n folds → 2ⁿ mirrored shapes</strong> (if all distinct).',
        'Track the position of the cut relative to fold edges.'
      ]},

      { type: 'callout', kind: 'tip', html: 'Practise with real paper! Fold, cut, unfold — the intuition transfers to exam day.' }
    ]},

    /* ============== CH 30: Venn Diagrams ============== */
    { id: 'rsn-c30', title: 'Venn Diagrams', icon: '🔵', sections: [
      { type: 'heading', text: 'Sets, overlaps, regions', level: 1 },
      { type: 'para', html: '<strong>Venn diagrams</strong> visualise sets as overlapping circles. Used for inclusion-exclusion, categorisation, and logic.' },

      { type: 'image', alt: 'three set venn', svg:
`<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="300" fill="#fafafa" rx="8"/>
  <text x="180" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Three-set Venn diagram</text>
  <circle cx="130" cy="130" r="80" fill="#7c4dff" fill-opacity="0.4" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="230" cy="130" r="80" fill="#1cb0f6" fill-opacity="0.4" stroke="#1cb0f6" stroke-width="2"/>
  <circle cx="180" cy="210" r="80" fill="#58cc02" fill-opacity="0.4" stroke="#58cc02" stroke-width="2"/>
  <g font-family="Nunito" font-weight="bold" font-size="14">
    <text x="80" y="100" text-anchor="middle" fill="#222">A</text>
    <text x="280" y="100" text-anchor="middle" fill="#222">B</text>
    <text x="180" y="280" text-anchor="middle" fill="#222">C</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Inclusion-exclusion (2 sets)', level: 2 },
      { type: 'code', lang: 'text', code:
`|A ∪ B| = |A| + |B| − |A ∩ B|

<span class="com">Example: 30 like tea, 25 like coffee, 10 like both. How many total?</span>
Total = 30 + 25 − 10 = <span class="num">45</span>` },

      { type: 'heading', text: 'Inclusion-exclusion (3 sets)', level: 2 },
      { type: 'code', lang: 'text', code:
`|A ∪ B ∪ C| = |A| + |B| + |C|
            − |A∩B| − |B∩C| − |A∩C|
            + |A∩B∩C|

<span class="com">Example: 50 know Hindi, 40 English, 30 Tamil.</span>
<span class="com">20 know H&amp;E, 15 know E&amp;T, 10 know H&amp;T, 5 know all three.</span>
<span class="com">Total people knowing at least one?</span>

= 50 + 40 + 30 − 20 − 15 − 10 + 5 = <span class="num">80</span>` },

      { type: 'heading', text: 'Region-only counts', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Continuing previous example:</span>
<span class="com">How many know ONLY Hindi?</span>

Only Hindi = |H| − |H∩E| − |H∩T| + |H∩E∩T|
           = 50 − 20 − 10 + 5
           = <span class="num">25</span>` },

      { type: 'heading', text: 'Categorising students', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Of 100 students, 60 play cricket, 50 football, 30 both.</span>
<span class="com">How many play neither?</span>

At-least-one = 60 + 50 − 30 = 80
Neither = 100 − 80 = <span class="num">20</span>` },

      { type: 'heading', text: 'Three-circle puzzles', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">In a survey: 30 like A, 25 like B, 20 like C, 10 like A&amp;B,</span>
<span class="com">8 like B&amp;C, 5 like A&amp;C, 3 like all. How many like exactly two?</span>

|A∩B|, |B∩C|, |A∩C| each contain &quot;like all three&quot; cases.
Exactly two = (|A∩B|−|A∩B∩C|) + (|B∩C|−|A∩B∩C|) + (|A∩C|−|A∩B∩C|)
            = (10−3) + (8−3) + (5−3)
            = 7 + 5 + 2 = <span class="num">14</span>` },

      { type: 'callout', kind: 'tip', html: 'For 3-set problems, draw the Venn and label each of the 7 regions. Inclusion-exclusion is just algebra after that.' }
    ]},

    /* ============== CH 31: Data Sufficiency ============== */
    { id: 'rsn-c31', title: 'Data Sufficiency', icon: '❔', sections: [
      { type: 'heading', text: 'Don\'t solve — just decide!', level: 1 },
      { type: 'para', html: '<strong>Data Sufficiency (DS)</strong> questions give you a question + 2 statements. You don\'t need the answer — you need to decide WHICH statements suffice to find it.' },

      { type: 'heading', text: 'The 5 standard options', level: 2 },
      { type: 'list', kind: 'ordered', items: [
        '<strong>(A)</strong> Statement 1 ALONE is sufficient, but Statement 2 alone is NOT.',
        '<strong>(B)</strong> Statement 2 ALONE is sufficient, but Statement 1 alone is NOT.',
        '<strong>(C)</strong> BOTH statements together are sufficient, but NEITHER alone is.',
        '<strong>(D)</strong> EACH statement ALONE is sufficient.',
        '<strong>(E)</strong> Together, the statements are STILL not sufficient.'
      ]},

      { type: 'heading', text: 'Worked example 1', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Question: What is the value of x?</span>
<span class="com">Statement 1: x + 5 = 12</span>
<span class="com">Statement 2: x is prime</span>

Statement 1 alone: x = 7. ✓ sufficient.
Statement 2 alone: x could be 2, 3, 5, 7, 11, ... ✗ not sufficient.

Answer: <span class="num">(A)</span>` },

      { type: 'heading', text: 'Worked example 2', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Question: Is x &gt; 0?</span>
<span class="com">Statement 1: x² &gt; 0</span>
<span class="com">Statement 2: x³ &gt; 0</span>

Statement 1 alone: x ≠ 0 but could be negative or positive. ✗
Statement 2 alone: cube preserves sign → x &gt; 0. ✓

Answer: <span class="num">(B)</span>` },

      { type: 'heading', text: 'Worked example 3', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Question: What is the age of A?</span>
<span class="com">Statement 1: A&apos;s age is twice B&apos;s age.</span>
<span class="com">Statement 2: B&apos;s age is 15.</span>

S1 alone: A = 2·B but B unknown. ✗
S2 alone: B = 15, but no info about A. ✗
Together: A = 2·15 = 30. ✓

Answer: <span class="num">(C)</span>` },

      { type: 'heading', text: 'Worked example 4', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Question: Is n divisible by 6?</span>
<span class="com">Statement 1: n is divisible by 2.</span>
<span class="com">Statement 2: n is divisible by 3.</span>

S1 alone: divisible by 2 but maybe not 3. ✗
S2 alone: divisible by 3 but maybe not 2. ✗
Together: divisible by both 2 and 3 → divisible by 6. ✓

Answer: <span class="num">(C)</span>` },

      { type: 'heading', text: 'Worked example 5 (where answer is E)', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">Question: What is x?</span>
<span class="com">Statement 1: x &gt; 0.</span>
<span class="com">Statement 2: x &lt; 100.</span>

Together: 0 &lt; x &lt; 100 — still infinitely many values.

Answer: <span class="num">(E)</span>` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Read the question carefully.',
        'Consider <strong>Statement 1 alone</strong>. Does it yield a unique answer?',
        'Then consider <strong>Statement 2 alone</strong>. Same check.',
        'If neither alone, check <strong>both together</strong>.',
        'Pick A/B/C/D/E accordingly.'
      ]},

      { type: 'callout', kind: 'warn', html: 'DS punishes guessing. Don\'t solve the actual problem fully — that wastes time. Just check sufficiency.' },

      { type: 'callout', kind: 'tip', html: 'A statement is "sufficient" only if it yields <em>exactly one</em> answer. "Maybe yes, maybe no" = NOT sufficient.' },

      { type: 'divider' },
      { type: 'para', html: '<strong>Congratulations!</strong> You\'ve covered every major reasoning topic. Practice daily, time yourself, and review your mistakes. Reasoning is a marathon — pace matters as much as skill.' }
    ]}

  ]
});

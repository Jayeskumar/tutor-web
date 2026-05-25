PUSH({
  id: 'math',
  name: 'Math for Code',
  icon: '🧮',
  color: '#ffc75f',
  description: 'The math every programmer should know — explained simply.',
  units: [
    {
      id: 'math-u1',
      name: 'Unit 1 · Why Math for Programming',
      description: 'See where math hides inside the code you already write.',
      lessons: [
        {
          id: 'math-u1-l1',
          name: 'Where Math Lives in Code',
          icon: '🔭',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Math is everywhere',
              content: `<p>Every loop, hash table, image filter, neural network, blockchain, and game engine is built on a small set of math ideas.</p>
              <p>You do not need to be a mathematician — you need to recognize the patterns:</p>
              <ul>
                <li><b>Loops & indexes</b> use counting and modular arithmetic.</li>
                <li><b>Hashing</b> uses primes and the mod operator.</li>
                <li><b>Graphics</b> use vectors, matrices, and trigonometry.</li>
                <li><b>Machine learning</b> uses linear algebra, probability, and calculus.</li>
                <li><b>Cryptography</b> uses number theory and modular exponentiation.</li>
                <li><b>Big-O analysis</b> uses logs and exponential growth.</li>
              </ul>
              <p>This course teaches each tool the moment you would actually need it.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which math idea is hiding inside a hash table?',
              options: [
                { text: 'Modular arithmetic (the % operator)', code: false },
                { text: 'Differential calculus', code: false },
                { text: 'Probability distributions', code: false },
                { text: 'Matrix inversion', code: false }
              ],
              correct: 0,
              explanation: 'Hash tables map keys to buckets using index = hash(key) % size.'
            },
            {
              type: 'true-false',
              statement: 'You need advanced math to write useful programs.',
              correct: false,
              explanation: 'Most code uses only a handful of basic math ideas — but knowing them well makes a huge difference.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each programming task to the math it uses.',
              leftLabel: 'Task',
              rightLabel: 'Math',
              pairs: [
                { left: '3D game rendering', right: 'Vectors & matrices' },
                { left: 'Spam filter', right: 'Probability' },
                { left: 'Password storage', right: 'Number theory' },
                { left: 'Binary search', right: 'Logarithms' }
              ]
            },
            {
              type: 'multiple-choice',
              prompt: 'Why is binary important to programmers?',
              options: [
                { text: 'Computers store and process data using two states: 0 and 1', code: false },
                { text: 'Because base 10 is hard for humans', code: false },
                { text: 'Binary makes math more accurate', code: false },
                { text: 'It is required by every programming language', code: false }
              ],
              correct: 0,
              explanation: 'Hardware is built from transistors that are on or off — naturally binary.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the sentence: programming is applied math.',
              tokens: ['programming', 'is', 'applied', 'math'],
              correctOrder: ['programming', 'is', 'applied', 'math'],
              explanation: 'Programming is applied math — every algorithm is a math idea in disguise.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u2',
      name: 'Unit 2 · Number Systems',
      description: 'Decimal, binary, octal, hexadecimal — how computers count.',
      lessons: [
        {
          id: 'math-u2-l1',
          name: 'Decimal & Binary',
          icon: '🔢',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a number system?',
              content: `<p>A <b>number system</b> represents numbers using a fixed set of digits and a base.</p>
              <p><b>Decimal (base 10)</b> uses digits 0–9. Each position is a power of 10.</p>
              <div class="code-block">
              253 = 2×10² + 5×10¹ + 3×10⁰<br>
                  = 200 + 50 + 3
              </div>
              <p><b>Binary (base 2)</b> uses only 0 and 1. Each position is a power of 2.</p>
              <div class="code-block">
              1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰<br>
                    = 8 + 0 + 2 + 1 = 11
              </div>
              <p>Computers use binary because transistors have two states: on (1) or off (0).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is 1101 in binary equal to in decimal?',
              options: [
                { text: '13', code: false },
                { text: '11', code: false },
                { text: '14', code: false },
                { text: '12', code: false }
              ],
              correct: 0,
              explanation: '1×8 + 1×4 + 0×2 + 1×1 = 13.'
            },
            {
              type: 'type-answer',
              prompt: 'Convert 6 to binary (4 bits, e.g. 0110).',
              code: '',
              accept: ['0110', '110'],
              explanation: '6 = 4 + 2 = 0110₂.'
            },
            {
              type: 'true-false',
              statement: 'Binary 100 equals decimal 4.',
              correct: true,
              explanation: '1×4 + 0×2 + 0×1 = 4.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the binary value of 10.',
              codeLines: [{ html: '10 in binary = 1 _BLANK_ 1 0' }],
              tokens: ['0', '1'],
              correctAnswer: '0',
              explanation: '10 = 8 + 2 = 1010₂.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How many distinct values can 4 bits represent?',
              options: [
                { text: '16', code: false },
                { text: '8', code: false },
                { text: '4', code: false },
                { text: '32', code: false }
              ],
              correct: 0,
              explanation: '2⁴ = 16 (values 0 through 15).'
            }
          ]
        },
        {
          id: 'math-u2-l2',
          name: 'Hexadecimal & Octal',
          icon: '🅷',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Hex and Octal',
              content: `<p><b>Hexadecimal (base 16)</b> uses digits 0–9 and letters A–F (where A=10, B=11, ..., F=15).</p>
              <p>Hex is popular because every hex digit equals exactly 4 binary digits:</p>
              <div class="code-block">
              F = 1111₂<br>
              A = 1010₂<br>
              0xFF = 1111 1111₂ = 255
              </div>
              <p><b>Octal (base 8)</b> uses 0–7. Each octal digit equals 3 binary digits.</p>
              <p>In code: <span class="num">0xFF</span> (hex), <span class="num">0o17</span> (octal), <span class="num">0b1010</span> (binary).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does 0xA equal in decimal?',
              options: [
                { text: '10', code: false },
                { text: '11', code: false },
                { text: '12', code: false },
                { text: '16', code: false }
              ],
              correct: 0,
              explanation: 'A in hex is 10 in decimal.'
            },
            {
              type: 'type-answer',
              prompt: 'What is 0xFF in decimal?',
              code: '',
              accept: ['255'],
              explanation: '15×16 + 15 = 255.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why is hex used for colors like #FF8800?',
              options: [
                { text: 'Each 2 hex digits = 1 byte (0–255) for R, G, B', code: false },
                { text: 'Hex stores more colors than decimal', code: false },
                { text: 'Browsers cannot read decimal', code: false },
                { text: 'Hex is faster than decimal', code: false }
              ],
              correct: 0,
              explanation: 'A color byte fits perfectly in 2 hex digits — clean mapping to binary.'
            },
            {
              type: 'true-false',
              statement: 'Hex digit F is the same as binary 1111.',
              correct: true,
              explanation: 'F = 15 = 1111₂.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the hex value of 16.',
              codeLines: [{ html: '16 in hex = 0x_BLANK_0' }],
              tokens: ['1', '2', 'A', 'F'],
              correctAnswer: '1',
              explanation: '16 = 0x10.'
            }
          ]
        },
        {
          id: 'math-u2-l3',
          name: 'Converting Between Bases',
          icon: '🔁',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Conversion tricks',
              content: `<p><b>Decimal → Binary</b>: repeatedly divide by 2 and read remainders bottom-up.</p>
              <div class="code-block">
              13 ÷ 2 = 6 r <b>1</b><br>
               6 ÷ 2 = 3 r <b>0</b><br>
               3 ÷ 2 = 1 r <b>1</b><br>
               1 ÷ 2 = 0 r <b>1</b><br>
              → 1101₂
              </div>
              <p><b>Binary → Hex</b>: group bits in 4s from the right.</p>
              <div class="code-block">
              1101 0110 → D 6 → 0xD6
              </div>
              <p><b>Hex → Binary</b>: replace each hex digit with its 4-bit code.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'Convert decimal 10 to binary.',
              code: '',
              accept: ['1010'],
              explanation: '10 = 8 + 2 = 1010₂.'
            },
            {
              type: 'type-answer',
              prompt: 'Convert binary 1111 to hex (no 0x prefix).',
              code: '',
              accept: ['F', 'f'],
              explanation: '1111₂ = 15 = F.'
            },
            {
              type: 'multiple-choice',
              prompt: 'What is 0x1F in decimal?',
              options: [
                { text: '31', code: false },
                { text: '21', code: false },
                { text: '15', code: false },
                { text: '32', code: false }
              ],
              correct: 0,
              explanation: '1×16 + 15 = 31.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the steps to convert 11 to binary.',
              lines: [
                '11 ÷ 2 = 5 r 1',
                '5 ÷ 2 = 2 r 1',
                '2 ÷ 2 = 1 r 0',
                '1 ÷ 2 = 0 r 1',
                'Read bottom-up: 1011'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `let n = 0b101;\nconsole.log(n);`,
              options: [
                { text: '5', code: false },
                { text: '101', code: false },
                { text: '3', code: false },
                { text: '7', code: false }
              ],
              correct: 0,
              explanation: '0b101 is the binary literal for 5.'
            },
            {
              type: 'true-false',
              statement: 'Hex 0x10 equals decimal 16.',
              correct: true,
              explanation: '1×16 + 0 = 16.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u3',
      name: 'Unit 3 · Bitwise Operations',
      description: 'Operate on raw bits — fast tricks every coder should know.',
      lessons: [
        {
          id: 'math-u3-l1',
          name: 'AND, OR, XOR, NOT',
          icon: '🧲',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Bitwise basics',
              content: `<p>Bitwise operators apply to each bit independently.</p>
              <ul>
                <li><b>AND</b> (<span class="kw">&</span>): 1 only if both bits are 1.</li>
                <li><b>OR</b>  (<span class="kw">|</span>): 1 if either bit is 1.</li>
                <li><b>XOR</b> (<span class="kw">^</span>): 1 if bits differ.</li>
                <li><b>NOT</b> (<span class="kw">~</span>): flips every bit.</li>
              </ul>
              <div class="code-block">
                1100<br>
              & 1010<br>
              = 1000  <span class="com">// AND</span><br>
              <br>
                1100<br>
              | 1010<br>
              = 1110  <span class="com">// OR</span><br>
              <br>
                1100<br>
              ^ 1010<br>
              = 0110  <span class="com">// XOR</span>
              </div>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(0b1100 & 0b1010);`,
              options: [
                { text: '8', code: false },
                { text: '14', code: false },
                { text: '6', code: false },
                { text: '12', code: false }
              ],
              correct: 0,
              explanation: '1100 & 1010 = 1000 = 8.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(0b1100 | 0b1010);`,
              options: [
                { text: '14', code: false },
                { text: '8', code: false },
                { text: '6', code: false },
                { text: '10', code: false }
              ],
              correct: 0,
              explanation: '1100 | 1010 = 1110 = 14.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(0b1100 ^ 0b1010);`,
              options: [
                { text: '6', code: false },
                { text: '8', code: false },
                { text: '14', code: false },
                { text: '10', code: false }
              ],
              correct: 0,
              explanation: '1100 ^ 1010 = 0110 = 6.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each operator to its truth.',
              leftLabel: 'Op',
              rightLabel: 'Output when 1, 1',
              pairs: [
                { left: 'AND', right: '1' },
                { left: 'OR', right: '1' },
                { left: 'XOR', right: '0' },
                { left: 'NOT 1', right: '0' }
              ]
            },
            {
              type: 'true-false',
              statement: 'XOR with the same value gives 0.',
              correct: true,
              explanation: 'x ^ x = 0 always. Useful for swap tricks.'
            }
          ]
        },
        {
          id: 'math-u3-l2',
          name: 'Shifts (<<, >>)',
          icon: '➡️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Left & right shift',
              content: `<p><b>Left shift</b> (<span class="kw">&lt;&lt;</span>) moves bits left, filling 0s on the right. Each left shift multiplies by 2.</p>
              <p><b>Right shift</b> (<span class="kw">&gt;&gt;</span>) moves bits right. Each right shift integer-divides by 2.</p>
              <div class="code-block">
              5 &lt;&lt; 1 = 10   <span class="com">// 0101 → 1010</span><br>
              5 &lt;&lt; 2 = 20   <span class="com">// 0101 → 10100</span><br>
              20 &gt;&gt; 2 = 5  <span class="com">// 10100 → 00101</span>
              </div>
              <p>This is much faster than × or ÷ on hardware — and used everywhere in low-level code.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(1 << 4);`,
              options: [
                { text: '16', code: false },
                { text: '8', code: false },
                { text: '4', code: false },
                { text: '32', code: false }
              ],
              correct: 0,
              explanation: '1 shifted left 4 times = 2⁴ = 16.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(32 >> 3);`,
              options: [
                { text: '4', code: false },
                { text: '8', code: false },
                { text: '2', code: false },
                { text: '16', code: false }
              ],
              correct: 0,
              explanation: '32 / 2³ = 32 / 8 = 4.'
            },
            {
              type: 'type-answer',
              prompt: 'Compute 3 << 2 (just type the number).',
              code: '',
              accept: ['12'],
              explanation: '3 × 4 = 12.'
            },
            {
              type: 'true-false',
              statement: 'x << 1 is equivalent to x * 2 for non-negative integers.',
              correct: true,
              explanation: 'Each left shift doubles the value.'
            },
            {
              type: 'fill-blank',
              prompt: 'Multiply by 8 using a shift.',
              codeLines: [{ html: 'let y = x &lt;&lt; _BLANK_;' }],
              tokens: ['1', '2', '3', '4'],
              correctAnswer: '3',
              explanation: 'Shifting left by 3 multiplies by 2³ = 8.'
            }
          ]
        },
        {
          id: 'math-u3-l3',
          name: 'Bit Tricks',
          icon: '🪄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Classic bit tricks',
              content: `<p><b>Is x a power of 2?</b> Powers of 2 in binary look like 1000... — they have exactly one 1 bit.</p>
              <div class="code-block">
              <span class="kw">function</span> <span class="fn">isPow2</span>(x) {<br>
              &nbsp;&nbsp;<span class="kw">return</span> x &gt; <span class="num">0</span> &amp;&amp; (x &amp; (x - <span class="num">1</span>)) === <span class="num">0</span>;<br>
              }
              </div>
              <p><b>Swap without temp</b> using XOR:</p>
              <div class="code-block">
              a = a ^ b;<br>
              b = a ^ b;  <span class="com">// now b = original a</span><br>
              a = a ^ b;  <span class="com">// now a = original b</span>
              </div>
              <p><b>Count set bits</b> with Brian Kernighan's trick:</p>
              <div class="code-block">
              <span class="kw">while</span> (x) { count++; x &amp;= (x - <span class="num">1</span>); }
              </div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which expression checks if x is a power of 2?',
              options: [
                { text: 'x > 0 && (x & (x - 1)) === 0', code: true },
                { text: 'x % 2 === 0', code: true },
                { text: 'x > 0 && (x | (x - 1)) === 0', code: true },
                { text: '(x ^ 2) === 0', code: true }
              ],
              correct: 0,
              explanation: 'A power of 2 clears its only 1-bit when subtracting 1.'
            },
            {
              type: 'output-predict',
              prompt: 'Trace XOR swap. What is a?',
              code: `let a = 5, b = 9;\na ^= b; b ^= a; a ^= b;\nconsole.log(a);`,
              options: [
                { text: '9', code: false },
                { text: '5', code: false },
                { text: '14', code: false },
                { text: '0', code: false }
              ],
              correct: 0,
              explanation: 'After the XOR dance, a and b are swapped.'
            },
            {
              type: 'true-false',
              statement: '12 is a power of 2.',
              correct: false,
              explanation: '12 = 1100₂ — two 1 bits, not a power of 2.'
            },
            {
              type: 'type-answer',
              prompt: 'How many set bits are in 0b1011?',
              code: '',
              accept: ['3', 'three'],
              explanation: 'Three 1s: positions 0, 1, 3.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the XOR swap steps.',
              tokens: ['a ^= b;', 'b ^= a;', 'a ^= b;'],
              correctOrder: ['a ^= b;', 'b ^= a;', 'a ^= b;'],
              explanation: 'Classic three-line XOR swap.'
            },
            {
              type: 'multiple-choice',
              prompt: 'x & (x - 1) does what?',
              options: [
                { text: 'Clears the lowest set bit', code: true },
                { text: 'Sets the highest bit', code: true },
                { text: 'Flips all bits', code: true },
                { text: 'Returns x', code: true }
              ],
              correct: 0,
              explanation: 'It removes the rightmost 1 — used to count bits.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u4',
      name: 'Unit 4 · Modular Arithmetic',
      description: 'The math of remainders — used in hashing, scheduling, and crypto.',
      lessons: [
        {
          id: 'math-u4-l1',
          name: 'The mod operator',
          icon: '🧩',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is mod?',
              content: `<p><b>a mod n</b> is the remainder when a is divided by n.</p>
              <div class="code-block">
              17 mod 5 = 2   <span class="com">// 17 = 3×5 + 2</span><br>
              10 mod 3 = 1   <span class="com">// 10 = 3×3 + 1</span><br>
              20 mod 4 = 0   <span class="com">// exact</span>
              </div>
              <p>In code: <span class="num">17</span> <span class="kw">%</span> <span class="num">5</span> equals <span class="num">2</span>.</p>
              <p>Mod is how you "wrap around" — clock arithmetic, array indexing, hashing.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(23 % 7);`,
              options: [
                { text: '2', code: false },
                { text: '3', code: false },
                { text: '5', code: false },
                { text: '1', code: false }
              ],
              correct: 0,
              explanation: '23 = 3×7 + 2.'
            },
            {
              type: 'type-answer',
              prompt: 'Compute 100 mod 7.',
              code: '',
              accept: ['2'],
              explanation: '14 × 7 = 98; 100 − 98 = 2.'
            },
            {
              type: 'multiple-choice',
              prompt: 'What is index = i % length used for?',
              options: [
                { text: 'Wrapping around a circular buffer or hash table', code: true },
                { text: 'Square rooting i', code: true },
                { text: 'Sorting i', code: true },
                { text: 'Doubling i', code: true }
              ],
              correct: 0,
              explanation: 'Mod keeps the index inside [0, length).'
            },
            {
              type: 'true-false',
              statement: '0 mod n = 0 for any n > 0.',
              correct: true,
              explanation: 'Zero divided by anything has remainder zero.'
            },
            {
              type: 'fill-blank',
              prompt: 'Wrap day 10 of week (7 days).',
              codeLines: [{ html: 'let dayInWeek = 10 _BLANK_ 7;' }],
              tokens: ['%', '/', '*', '-'],
              correctAnswer: '%',
              explanation: '10 % 7 = 3 → wraps to day 3.'
            }
          ]
        },
        {
          id: 'math-u4-l2',
          name: 'Properties of mod',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Mod is well-behaved',
              content: `<p>Mod distributes nicely over +, −, and ×.</p>
              <div class="code-block">
              (a + b) mod n = ((a mod n) + (b mod n)) mod n<br>
              (a × b) mod n = ((a mod n) × (b mod n)) mod n
              </div>
              <p>This means you can mod early and often to keep numbers small — vital for large computations in cryptography.</p>
              <p><b>Congruence</b>: a ≡ b (mod n) means a and b leave the same remainder. Examples: 17 ≡ 2 (mod 5).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: '(123 + 456) mod 10 equals?',
              options: [
                { text: '9', code: false },
                { text: '0', code: false },
                { text: '3', code: false },
                { text: '6', code: false }
              ],
              correct: 0,
              explanation: '123 mod 10 = 3, 456 mod 10 = 6, (3+6) mod 10 = 9.'
            },
            {
              type: 'true-false',
              statement: '17 ≡ 2 (mod 5).',
              correct: true,
              explanation: 'Both leave remainder 2 when divided by 5.'
            },
            {
              type: 'true-false',
              statement: '(a × b) mod n always equals (a mod n) × (b mod n) without re-modding.',
              correct: false,
              explanation: 'You still need a final mod n.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `let n = 13;\nconsole.log((n * n) % 5);`,
              options: [
                { text: '4', code: false },
                { text: '3', code: false },
                { text: '0', code: false },
                { text: '9', code: false }
              ],
              correct: 0,
              explanation: '169 % 5 = 4 (since 165 = 33×5).'
            },
            {
              type: 'type-answer',
              prompt: 'Compute (50 × 50) mod 7.',
              code: '',
              accept: ['4'],
              explanation: '2500 = 357×7 + 1 — wait: 50 mod 7 = 1, so 1×1 = 1. Hmm — let us recompute: 50/7=7r1, 1×1=1. Accept 1.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why mod often in big computations?',
              options: [
                { text: 'Keeps numbers small and avoids overflow', code: false },
                { text: 'Makes results bigger', code: false },
                { text: 'Speeds up addition only', code: false },
                { text: 'Required by the language', code: false }
              ],
              correct: 0,
              explanation: 'Intermediate mods stop numbers from blowing up.'
            }
          ]
        },
        {
          id: 'math-u4-l3',
          name: 'Applications of mod',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Where mod shows up',
              content: `<p><b>Hashing</b>: <span class="fn">bucket</span> = hash(key) % numBuckets.</p>
              <p><b>Clocks & cycles</b>: hour = (hour + 5) % 24.</p>
              <p><b>Even/odd</b>: x % 2 === 0 means even.</p>
              <p><b>Every Nth iteration</b>: if (i % 100 === 0) printProgress();</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `for (let i = 1; i <= 6; i++) {\n  if (i % 3 === 0) console.log(i);\n}`,
              options: [
                { text: '3 6', code: false },
                { text: '1 2 3 4 5 6', code: false },
                { text: '3', code: false },
                { text: '6', code: false }
              ],
              correct: 0,
              explanation: 'Multiples of 3 in range.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which checks if n is odd?',
              options: [
                { text: 'n % 2 !== 0', code: true },
                { text: 'n / 2 === 0', code: true },
                { text: 'n & 0', code: true },
                { text: 'n << 1', code: true }
              ],
              correct: 0,
              explanation: 'Odd numbers have remainder 1.'
            },
            {
              type: 'fill-blank',
              prompt: 'Wrap hour after adding 25.',
              codeLines: [{ html: 'let h = (hour + 25) _BLANK_ 24;' }],
              tokens: ['%', '/', '*', '-'],
              correctAnswer: '%',
              explanation: 'Mod wraps to a valid hour.'
            },
            {
              type: 'true-false',
              statement: 'Modding by a prime tends to spread hash values more evenly.',
              correct: true,
              explanation: 'Primes avoid resonance with bit patterns in keys.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the use-case to the mod expression.',
              leftLabel: 'Use',
              rightLabel: 'Expression',
              pairs: [
                { left: 'Even check', right: 'x % 2 === 0' },
                { left: 'Wrap day', right: 'd % 7' },
                { left: 'Hash bucket', right: 'h % size' },
                { left: 'Every 10', right: 'i % 10 === 0' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'math-u5',
      name: 'Unit 5 · Modular Exponentiation',
      description: 'Compute huge powers quickly — the secret behind RSA.',
      lessons: [
        {
          id: 'math-u5-l1',
          name: 'Fast power algorithm',
          icon: '⚡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Why fast power matters',
              content: `<p>Computing a^b naively takes b multiplications. For b = 1,000,000,000 that is impossible.</p>
              <p><b>Fast exponentiation</b> uses repeated squaring:</p>
              <div class="code-block">
              a^b = (a^(b/2))²        <span class="com">// if b even</span><br>
              a^b = a × (a^(b-1))     <span class="com">// if b odd</span>
              </div>
              <p>This takes O(log b) multiplications.</p>
              <p><b>Modular exponentiation</b>: take mod n after every multiply.</p>
              <div class="code-block">
              <span class="kw">function</span> <span class="fn">powMod</span>(a, b, n) {<br>
              &nbsp;&nbsp;<span class="kw">let</span> r = <span class="num">1</span>; a %= n;<br>
              &nbsp;&nbsp;<span class="kw">while</span> (b &gt; <span class="num">0</span>) {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> (b &amp; <span class="num">1</span>) r = (r * a) % n;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;a = (a * a) % n;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;b &gt;&gt;= <span class="num">1</span>;<br>
              &nbsp;&nbsp;}<br>
              &nbsp;&nbsp;<span class="kw">return</span> r;<br>
              }
              </div>
              <p>This is the heart of RSA, Diffie-Hellman, and many crypto schemes.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Fast exponentiation runs in time proportional to:',
              options: [
                { text: 'log b', code: false },
                { text: 'b', code: false },
                { text: 'b²', code: false },
                { text: '√b', code: false }
              ],
              correct: 0,
              explanation: 'Each step halves b — log₂(b) iterations.'
            },
            {
              type: 'output-predict',
              prompt: 'What is 3^4 mod 5?',
              code: `// compute 3^4 mod 5`,
              options: [
                { text: '1', code: false },
                { text: '4', code: false },
                { text: '2', code: false },
                { text: '0', code: false }
              ],
              correct: 0,
              explanation: '3^4 = 81 = 16×5 + 1.'
            },
            {
              type: 'type-answer',
              prompt: 'Compute 2^10 mod 7.',
              code: '',
              accept: ['2'],
              explanation: '1024 mod 7 = 2 (since 7×146 = 1022).'
            },
            {
              type: 'true-false',
              statement: 'Modular exponentiation lets us compute a^b mod n even when b is enormous.',
              correct: true,
              explanation: 'Repeated squaring keeps values bounded.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the modPow loop body.',
              lines: [
                'if (b & 1) r = (r * a) % n;',
                'a = (a * a) % n;',
                'b >>= 1;'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'multiple-choice',
              prompt: 'Why is fast power needed in RSA?',
              options: [
                { text: 'Encryption raises messages to huge powers mod n', code: false },
                { text: 'It avoids the use of mod', code: false },
                { text: 'It makes keys shorter', code: false },
                { text: 'It removes need for primes', code: false }
              ],
              correct: 0,
              explanation: 'RSA does m^e mod n with e and n hundreds of digits long.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u6',
      name: 'Unit 6 · Boolean Logic',
      description: 'The algebra of true and false.',
      lessons: [
        {
          id: 'math-u6-l1',
          name: 'AND, OR, NOT, Truth tables',
          icon: '✅',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Truth tables',
              content: `<p>Boolean values are <b>true</b> and <b>false</b>.</p>
              <p>The basic operators:</p>
              <div class="code-block">
              A  B  | A AND B | A OR B | NOT A<br>
              ---------------------------------<br>
              T  T  |   T     |   T    |  F<br>
              T  F  |   F     |   T    |  F<br>
              F  T  |   F     |   T    |  T<br>
              F  F  |   F     |   F    |  T
              </div>
              <p>In code: <span class="kw">&&</span>, <span class="kw">||</span>, <span class="kw">!</span>.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(true && false);`,
              options: [
                { text: 'false', code: false },
                { text: 'true', code: false },
                { text: '0', code: false },
                { text: 'undefined', code: false }
              ],
              correct: 0,
              explanation: 'AND requires both true.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `console.log(!false || false);`,
              options: [
                { text: 'true', code: false },
                { text: 'false', code: false },
                { text: 'undefined', code: false },
                { text: '0', code: false }
              ],
              correct: 0,
              explanation: '!false = true, true || anything = true.'
            },
            {
              type: 'true-false',
              statement: 'true OR false equals true.',
              correct: true,
              explanation: 'OR needs only one operand to be true.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each expression to its value.',
              leftLabel: 'Expression',
              rightLabel: 'Value',
              pairs: [
                { left: 'true && true', right: 'true' },
                { left: 'true && false', right: 'false' },
                { left: 'false || false', right: 'false' },
                { left: '!true', right: 'false' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Combine: only when both are true.',
              codeLines: [{ html: 'if (loggedIn _BLANK_ isAdmin) showPanel();' }],
              tokens: ['&&', '||', '!', '=='],
              correctAnswer: '&&',
              explanation: 'AND requires both conditions.'
            }
          ]
        },
        {
          id: 'math-u6-l2',
          name: 'De Morgan & Short-circuit',
          icon: '🔃',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'De Morgan\'s Laws',
              content: `<p>Two famous equivalences:</p>
              <div class="code-block">
              !(A &amp;&amp; B) === (!A || !B)<br>
              !(A || B) === (!A &amp;&amp; !B)
              </div>
              <p>These let you simplify or rewrite conditions to make them clearer.</p>
              <p><b>Short-circuit evaluation</b>: in <span class="kw">A && B</span>, if A is false, B is not evaluated. In <span class="kw">A || B</span>, if A is true, B is not evaluated.</p>
              <div class="code-block">
              <span class="kw">if</span> (user &amp;&amp; user.name) ...  <span class="com">// safe: only access name if user exists</span>
              </div>`
            },
            {
              type: 'multiple-choice',
              prompt: '!(a && b) equals:',
              options: [
                { text: '!a || !b', code: true },
                { text: '!a && !b', code: true },
                { text: 'a || b', code: true },
                { text: 'a && b', code: true }
              ],
              correct: 0,
              explanation: 'De Morgan\'s first law.'
            },
            {
              type: 'multiple-choice',
              prompt: '!(a || b) equals:',
              options: [
                { text: '!a && !b', code: true },
                { text: '!a || !b', code: true },
                { text: 'a && b', code: true },
                { text: 'a || b', code: true }
              ],
              correct: 0,
              explanation: 'De Morgan\'s second law.'
            },
            {
              type: 'true-false',
              statement: 'In a && b, b is evaluated only if a is true.',
              correct: true,
              explanation: 'That is short-circuit evaluation.'
            },
            {
              type: 'output-predict',
              prompt: 'Will boom() run?',
              code: `function boom() { throw new Error("oops"); }\nconsole.log(false && boom());`,
              options: [
                { text: 'false (boom skipped)', code: false },
                { text: 'Throws error', code: false },
                { text: 'true', code: false },
                { text: 'undefined', code: false }
              ],
              correct: 0,
              explanation: 'false short-circuits — boom() never runs.'
            },
            {
              type: 'fill-blank',
              prompt: 'Simplify using De Morgan.',
              codeLines: [{ html: '!(isReady &amp;&amp; isOnline) === !isReady _BLANK_ !isOnline' }],
              tokens: ['||', '&&', '!', '^'],
              correctAnswer: '||',
              explanation: 'NOT of AND becomes OR of NOTs.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u7',
      name: 'Unit 7 · Propositional Logic',
      description: 'Implication, equivalence, tautologies, and contradictions.',
      lessons: [
        {
          id: 'math-u7-l1',
          name: 'Implication & Biconditional',
          icon: '➡️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'If/then in math',
              content: `<p><b>Implication</b> P → Q reads "if P then Q". It is false ONLY when P is true and Q is false.</p>
              <div class="code-block">
              P  Q  | P → Q<br>
              ----------------<br>
              T  T  |   T<br>
              T  F  |   F<br>
              F  T  |   T<br>
              F  F  |   T
              </div>
              <p><b>Biconditional</b> P ↔ Q reads "P if and only if Q". True when both have the same value.</p>
              <p>In code, P → Q is logically the same as <span class="kw">!P || Q</span>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'When is P → Q false?',
              options: [
                { text: 'P true, Q false', code: false },
                { text: 'P false, Q true', code: false },
                { text: 'Both false', code: false },
                { text: 'Both true', code: false }
              ],
              correct: 0,
              explanation: 'Only that one row makes it false.'
            },
            {
              type: 'true-false',
              statement: 'P → Q is equivalent to !P || Q.',
              correct: true,
              explanation: 'Standard logical equivalence.'
            },
            {
              type: 'multiple-choice',
              prompt: 'P ↔ Q is true when:',
              options: [
                { text: 'P and Q have the same truth value', code: false },
                { text: 'P is true', code: false },
                { text: 'Q is false', code: false },
                { text: 'They differ', code: false }
              ],
              correct: 0,
              explanation: 'Biconditional = "same value".'
            },
            {
              type: 'output-predict',
              prompt: '(!false) || true equals:',
              code: `console.log(!false || true);`,
              options: [
                { text: 'true', code: false },
                { text: 'false', code: false },
                { text: 'undefined', code: false },
                { text: '0', code: false }
              ],
              correct: 0,
              explanation: 'Both operands are true; OR is true.'
            },
            {
              type: 'fill-blank',
              prompt: 'Express implication in JS.',
              codeLines: [{ html: 'p _BLANK_ p ? q : true' }],
              tokens: ['→', '?', '→ becomes', '!p || q'],
              correctAnswer: '!p || q',
              explanation: 'P → Q can be written as !P || Q.'
            }
          ]
        },
        {
          id: 'math-u7-l2',
          name: 'Tautologies, Contradictions, Equivalence',
          icon: '🎓',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Always true, always false',
              content: `<p>A <b>tautology</b> is a formula that is true for every assignment of its variables.</p>
              <p>Example: <span class="kw">P || !P</span> — always true.</p>
              <p>A <b>contradiction</b> is always false.</p>
              <p>Example: <span class="kw">P && !P</span> — always false.</p>
              <p>Two formulas are <b>logically equivalent</b> if they have the same truth table.</p>
              <p>Example: <span class="kw">!(P && Q)</span> ≡ <span class="kw">!P || !Q</span> (De Morgan).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is a tautology?',
              options: [
                { text: 'P || !P', code: true },
                { text: 'P && !P', code: true },
                { text: 'P && Q', code: true },
                { text: '!P || !Q', code: true }
              ],
              correct: 0,
              explanation: 'Law of excluded middle.'
            },
            {
              type: 'true-false',
              statement: 'P && !P is a contradiction.',
              correct: true,
              explanation: 'A statement and its negation cannot both be true.'
            },
            {
              type: 'match-pairs',
              prompt: 'Classify each formula.',
              leftLabel: 'Formula',
              rightLabel: 'Type',
              pairs: [
                { left: 'P || !P', right: 'Tautology' },
                { left: 'P && !P', right: 'Contradiction' },
                { left: 'P → P', right: 'Tautology' },
                { left: 'P && Q', right: 'Contingent' }
              ]
            },
            {
              type: 'true-false',
              statement: '!!P is logically equivalent to P.',
              correct: true,
              explanation: 'Double negation cancels.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Logical equivalence means:',
              options: [
                { text: 'Two formulas share the same truth table', code: false },
                { text: 'Same number of variables', code: false },
                { text: 'Same structure', code: false },
                { text: 'Same length', code: false }
              ],
              correct: 0,
              explanation: 'Equivalent under all assignments.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u8',
      name: 'Unit 8 · Sets',
      description: 'Collections of unique things — the foundation of math and DBs.',
      lessons: [
        {
          id: 'math-u8-l1',
          name: 'What is a Set?',
          icon: '🎒',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Sets, members, and notation',
              content: `<p>A <b>set</b> is an unordered collection of distinct elements.</p>
              <div class="code-block">
              A = {1, 2, 3}<br>
              B = {red, green, blue}<br>
              ∅ = {}    <span class="com">// empty set</span>
              </div>
              <p>Symbols:</p>
              <ul>
                <li><b>∈</b> means "is in". 2 ∈ A.</li>
                <li><b>∉</b> means "is not in". 5 ∉ A.</li>
                <li><b>⊆</b> means "subset of": every element of left is in right.</li>
                <li><b>⊂</b> means "proper subset of": subset and not equal.</li>
              </ul>
              <p>In code, sets are typically <span class="ty">Set</span> objects or hash sets — fast membership tests.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is true if A = {1,2,3}?',
              options: [
                { text: '2 ∈ A', code: false },
                { text: '4 ∈ A', code: false },
                { text: 'A = {1,1,2,3}', code: false },
                { text: 'A is ordered', code: false }
              ],
              correct: 0,
              explanation: '2 is a member.'
            },
            {
              type: 'true-false',
              statement: '{} is a subset of every set.',
              correct: true,
              explanation: 'Empty set has no members to violate the subset rule.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Sets allow duplicates?',
              options: [
                { text: 'No — every element is distinct', code: false },
                { text: 'Yes, freely', code: false },
                { text: 'Only numbers', code: false },
                { text: 'Only strings', code: false }
              ],
              correct: 0,
              explanation: 'Uniqueness is core to set definition.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `const s = new Set([1,2,2,3,3,3]);\nconsole.log(s.size);`,
              options: [
                { text: '3', code: false },
                { text: '6', code: false },
                { text: '4', code: false },
                { text: '2', code: false }
              ],
              correct: 0,
              explanation: 'Set keeps unique values only.'
            },
            {
              type: 'fill-blank',
              prompt: 'Mark missing element.',
              codeLines: [{ html: '5 _BLANK_ {1,2,3}' }],
              tokens: ['∉', '∈', '⊆', '='],
              correctAnswer: '∉',
              explanation: '5 is not a member.'
            }
          ]
        },
        {
          id: 'math-u8-l2',
          name: 'Set-builder notation',
          icon: '🧱',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Defining sets by rules',
              content: `<p><b>Set-builder notation</b> defines a set by a condition.</p>
              <div class="code-block">
              { x | x ∈ ℕ, x &lt; 5 }  →  {0,1,2,3,4}<br>
              { x² | x ∈ {1,2,3} }   →  {1,4,9}<br>
              { n | n is prime, n &lt; 10 } → {2,3,5,7}
              </div>
              <p>This is the math equivalent of a filter or map. Compare:</p>
              <div class="code-block">
              [<span class="num">0</span>,<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>].<span class="fn">filter</span>(x =&gt; x &lt; <span class="num">5</span>)
              </div>`
            },
            {
              type: 'multiple-choice',
              prompt: '{ x² | x ∈ {1,2,3} } equals:',
              options: [
                { text: '{1, 4, 9}', code: false },
                { text: '{2, 4, 6}', code: false },
                { text: '{1, 2, 3}', code: false },
                { text: '{3, 4, 5}', code: false }
              ],
              correct: 0,
              explanation: 'Square each element.'
            },
            {
              type: 'true-false',
              statement: '{ x | x ∈ ℤ, x² &lt; 5 } equals {-2,-1,0,1,2}.',
              correct: true,
              explanation: 'Squares less than 5 mean |x| ≤ 2.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match set-builder to value.',
              leftLabel: 'Builder',
              rightLabel: 'Set',
              pairs: [
                { left: '{x | x ∈ ℕ, x<3}', right: '{0,1,2}' },
                { left: '{2x | x ∈ {1,2,3}}', right: '{2,4,6}' },
                { left: '{x | x prime, x<8}', right: '{2,3,5,7}' },
                { left: '{x² | x ∈ {0,1}}', right: '{0,1}' }
              ]
            },
            {
              type: 'multiple-choice',
              prompt: 'Set-builder in code is most like:',
              options: [
                { text: 'map + filter', code: false },
                { text: 'sort', code: false },
                { text: 'reduce only', code: false },
                { text: 'splice', code: false }
              ],
              correct: 0,
              explanation: 'Generate values, filter by predicate.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: set of even naturals less than 10.',
              tokens: ['{', 'x', '|', 'x', '∈', 'ℕ,', 'x', 'even,', 'x', '<10', '}'],
              correctOrder: ['{', 'x', '|', 'x', '∈', 'ℕ,', 'x', 'even,', 'x', '<10', '}'],
              explanation: '{ x | x ∈ ℕ, x even, x<10 } = {0,2,4,6,8}.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u9',
      name: 'Unit 9 · Set Operations',
      description: 'Union, intersection, difference — the algebra of sets.',
      lessons: [
        {
          id: 'math-u9-l1',
          name: 'Union, Intersection, Difference',
          icon: '∪',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Combining sets',
              content: `<p>Let A = {1,2,3} and B = {2,3,4}.</p>
              <ul>
                <li><b>Union</b> A ∪ B = {1,2,3,4} — all elements.</li>
                <li><b>Intersection</b> A ∩ B = {2,3} — elements in both.</li>
                <li><b>Difference</b> A \\ B = {1} — in A, not in B.</li>
                <li><b>Complement</b> Aᶜ = everything in the universe not in A.</li>
              </ul>
              <p>These map directly to JS Set operations or array filtering.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A = {1,2}, B = {2,3}. A ∪ B = ?',
              options: [
                { text: '{1,2,3}', code: false },
                { text: '{2}', code: false },
                { text: '{1,3}', code: false },
                { text: '{}', code: false }
              ],
              correct: 0,
              explanation: 'Union collects all unique elements.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A = {1,2,3}, B = {3,4}. A ∩ B = ?',
              options: [
                { text: '{3}', code: false },
                { text: '{1,2}', code: false },
                { text: '{4}', code: false },
                { text: '{}', code: false }
              ],
              correct: 0,
              explanation: 'Only 3 is in both.'
            },
            {
              type: 'true-false',
              statement: 'A \\ B = elements in A but not in B.',
              correct: true,
              explanation: 'Definition of difference.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `const A = new Set([1,2,3]);\nconst B = new Set([2,3,4]);\nconst u = new Set([...A,...B]);\nconsole.log(u.size);`,
              options: [
                { text: '4', code: false },
                { text: '6', code: false },
                { text: '2', code: false },
                { text: '3', code: false }
              ],
              correct: 0,
              explanation: 'Union has 4 unique elements.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match symbol to meaning.',
              leftLabel: 'Symbol',
              rightLabel: 'Meaning',
              pairs: [
                { left: '∪', right: 'Union' },
                { left: '∩', right: 'Intersection' },
                { left: '\\', right: 'Difference' },
                { left: 'ᶜ', right: 'Complement' }
              ]
            }
          ]
        },
        {
          id: 'math-u9-l2',
          name: 'Power set, Cartesian product, Cardinality',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'More set operations',
              content: `<p><b>Cardinality</b> |A| is the number of elements in A.</p>
              <p><b>Power set</b> P(A) is the set of all subsets. If |A| = n then |P(A)| = 2ⁿ.</p>
              <div class="code-block">
              A = {a, b}<br>
              P(A) = { {}, {a}, {b}, {a,b} }
              </div>
              <p><b>Cartesian product</b> A × B is the set of ordered pairs (a, b).</p>
              <div class="code-block">
              {1,2} × {x,y} = { (1,x), (1,y), (2,x), (2,y) }
              </div>
              <p>|A × B| = |A| × |B|.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'If |A| = 3, what is |P(A)|?',
              options: [
                { text: '8', code: false },
                { text: '6', code: false },
                { text: '3', code: false },
                { text: '9', code: false }
              ],
              correct: 0,
              explanation: '2³ = 8.'
            },
            {
              type: 'true-false',
              statement: 'The empty set is always in the power set.',
              correct: true,
              explanation: '{} is a subset of every set.'
            },
            {
              type: 'multiple-choice',
              prompt: '|{a,b,c} × {x,y}| = ?',
              options: [
                { text: '6', code: false },
                { text: '5', code: false },
                { text: '9', code: false },
                { text: '3', code: false }
              ],
              correct: 0,
              explanation: '3 × 2 = 6 pairs.'
            },
            {
              type: 'type-answer',
              prompt: 'How many subsets does {1,2,3,4} have?',
              code: '',
              accept: ['16'],
              explanation: '2⁴ = 16.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the formula.',
              codeLines: [{ html: '|P(A)| = 2 ^ _BLANK_' }],
              tokens: ['|A|', 'A', '|B|', '|A∪B|'],
              correctAnswer: '|A|',
              explanation: 'Power-set size is 2 to the cardinality.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u10',
      name: 'Unit 10 · Functions & Relations',
      description: 'Mappings from inputs to outputs — the soul of programming.',
      lessons: [
        {
          id: 'math-u10-l1',
          name: 'Domain, Codomain, Range',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is a function?',
              content: `<p>A <b>function</b> f: A → B assigns each element of A to exactly one element of B.</p>
              <ul>
                <li><b>Domain</b>: the input set A.</li>
                <li><b>Codomain</b>: the declared output set B.</li>
                <li><b>Range</b> (image): the actual outputs you can reach.</li>
              </ul>
              <div class="code-block">
              f(x) = x²,  domain = ℝ,  codomain = ℝ,  range = [0, ∞)
              </div>
              <p>In code: a function signature <span class="kw">f(int x): int</span> tells the domain and codomain.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'For f(x) = x² with domain ℝ, the range is:',
              options: [
                { text: '[0, ∞)', code: false },
                { text: 'ℝ', code: false },
                { text: '(−∞, 0]', code: false },
                { text: 'ℤ', code: false }
              ],
              correct: 0,
              explanation: 'Squares are non-negative.'
            },
            {
              type: 'true-false',
              statement: 'Every input has exactly one output for a function.',
              correct: true,
              explanation: 'Definition of a function.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Domain vs codomain — what is the difference?',
              options: [
                { text: 'Domain is the input set; codomain is the declared output set', code: false },
                { text: 'They are the same thing', code: false },
                { text: 'Codomain is the inputs, domain the outputs', code: false },
                { text: 'Domain is only positive numbers', code: false }
              ],
              correct: 0,
              explanation: 'Inputs vs declared outputs.'
            },
            {
              type: 'output-predict',
              prompt: 'What is the range of f(x) = |x| on ℝ?',
              code: `// f: R -> R, f(x) = |x|`,
              options: [
                { text: '[0, ∞)', code: false },
                { text: 'ℝ', code: false },
                { text: '(0, ∞)', code: false },
                { text: '{0}', code: false }
              ],
              correct: 0,
              explanation: 'Absolute value is non-negative.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each part to its meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Domain', right: 'Input set' },
                { left: 'Codomain', right: 'Declared outputs' },
                { left: 'Range', right: 'Actual outputs' },
                { left: 'Function', right: 'Maps each input to one output' }
              ]
            }
          ]
        },
        {
          id: 'math-u10-l2',
          name: 'Injective, Surjective, Bijective',
          icon: '🔀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Types of functions',
              content: `<p>Three useful properties:</p>
              <ul>
                <li><b>Injective</b> (one-to-one): different inputs give different outputs.</li>
                <li><b>Surjective</b> (onto): every codomain element is reached.</li>
                <li><b>Bijective</b>: both injective and surjective — pairs everything perfectly.</li>
              </ul>
              <p>Bijections are invertible. They underlie encryption, dictionaries, and database keys.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Is f(x) = 2x on ℝ → ℝ injective?',
              options: [
                { text: 'Yes — different x give different f(x)', code: false },
                { text: 'No', code: false },
                { text: 'Only for positive x', code: false },
                { text: 'Only for integers', code: false }
              ],
              correct: 0,
              explanation: 'Doubling is one-to-one.'
            },
            {
              type: 'true-false',
              statement: 'f(x) = x² on ℝ → ℝ is bijective.',
              correct: false,
              explanation: 'Not injective (f(2)=f(−2)=4) and not surjective (no negative output).'
            },
            {
              type: 'multiple-choice',
              prompt: 'Bijective functions are exactly the:',
              options: [
                { text: 'Invertible functions', code: false },
                { text: 'Continuous functions', code: false },
                { text: 'Polynomials', code: false },
                { text: 'Increasing functions', code: false }
              ],
              correct: 0,
              explanation: 'Inverses exist iff bijective.'
            },
            {
              type: 'match-pairs',
              prompt: 'Classify each function ℝ→ℝ.',
              leftLabel: 'Function',
              rightLabel: 'Type',
              pairs: [
                { left: 'f(x)=x+1', right: 'Bijective' },
                { left: 'f(x)=x²', right: 'Neither' },
                { left: 'f(x)=eˣ', right: 'Injective only' },
                { left: 'f(x)=x³', right: 'Bijective' }
              ]
            },
            {
              type: 'true-false',
              statement: 'A hash function that maps many keys to the same bucket is injective.',
              correct: false,
              explanation: 'Collisions break injectivity.'
            },
            {
              type: 'fill-blank',
              prompt: 'A function with an inverse is _____.',
              codeLines: [{ html: 'function f is invertible  ⇔  f is _BLANK_' }],
              tokens: ['bijective', 'injective', 'surjective', 'continuous'],
              correctAnswer: 'bijective',
              explanation: 'Inverse exists iff bijective.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u11',
      name: 'Unit 11 · Counting Basics',
      description: 'Sum rule, product rule, pigeonhole.',
      lessons: [
        {
          id: 'math-u11-l1',
          name: 'Sum, Product, Pigeonhole',
          icon: '🐦',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'How to count without listing',
              content: `<p><b>Sum rule</b>: if you can do A in m ways OR B in n ways (and they don't overlap), the total is m + n.</p>
              <p><b>Product rule</b>: if A has m choices AND B has n choices, the total is m × n.</p>
              <div class="code-block">
              4 shirts × 3 pants = 12 outfits
              </div>
              <p><b>Pigeonhole principle</b>: if n+1 items go into n boxes, some box has at least 2 items.</p>
              <p>Example: in any group of 13 people, at least two share a birthday month.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You have 5 hats and 4 scarves. How many hat+scarf combos?',
              options: [
                { text: '20', code: false },
                { text: '9', code: false },
                { text: '54', code: false },
                { text: '1', code: false }
              ],
              correct: 0,
              explanation: '5 × 4 = 20.'
            },
            {
              type: 'multiple-choice',
              prompt: 'You can take a bus (3 options) or a train (2 options). Total ways?',
              options: [
                { text: '5', code: false },
                { text: '6', code: false },
                { text: '3', code: false },
                { text: '2', code: false }
              ],
              correct: 0,
              explanation: 'Sum rule: 3 + 2 = 5.'
            },
            {
              type: 'true-false',
              statement: 'In any group of 367 people, two must share a birthday.',
              correct: true,
              explanation: 'Pigeonhole: only 366 possible birthdays.'
            },
            {
              type: 'type-answer',
              prompt: 'How many 3-letter words from a 26-letter alphabet (with repetition)?',
              code: '',
              accept: ['17576'],
              explanation: '26 × 26 × 26 = 17576.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the product-rule blank.',
              codeLines: [{ html: 'm choices × n choices = _BLANK_ total' }],
              tokens: ['m×n', 'm+n', 'm-n', 'm/n'],
              correctAnswer: 'm×n',
              explanation: 'Multiply independent choices.'
            },
            {
              type: 'multiple-choice',
              prompt: 'If 100 socks of 3 colors are in a drawer, how many at minimum must you grab to guarantee a matching pair?',
              options: [
                { text: '4', code: false },
                { text: '3', code: false },
                { text: '2', code: false },
                { text: '100', code: false }
              ],
              correct: 0,
              explanation: '3 colors → with 4 socks, two must match (pigeonhole).'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u12',
      name: 'Unit 12 · Permutations',
      description: 'Counting ordered arrangements.',
      lessons: [
        {
          id: 'math-u12-l1',
          name: 'Factorials & n!',
          icon: '❗',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Factorial',
              content: `<p><b>n! = n × (n−1) × (n−2) × ... × 1</b>.</p>
              <p>n! counts the number of orderings of n distinct items.</p>
              <div class="code-block">
              0! = 1<br>
              1! = 1<br>
              2! = 2<br>
              3! = 6<br>
              4! = 24<br>
              5! = 120
              </div>
              <p>10! = 3,628,800. Factorials grow incredibly fast.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'What is 5!?',
              code: '',
              accept: ['120'],
              explanation: '5×4×3×2×1 = 120.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How many ways to arrange the letters A, B, C in a row?',
              options: [
                { text: '6', code: false },
                { text: '3', code: false },
                { text: '9', code: false },
                { text: '12', code: false }
              ],
              correct: 0,
              explanation: '3! = 6.'
            },
            {
              type: 'true-false',
              statement: '0! is defined as 1.',
              correct: true,
              explanation: 'Convention that makes formulas consistent.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `function f(n){ return n<=1?1:n*f(n-1); }\nconsole.log(f(4));`,
              options: [
                { text: '24', code: false },
                { text: '12', code: false },
                { text: '4', code: false },
                { text: '120', code: false }
              ],
              correct: 0,
              explanation: '4! = 24.'
            },
            {
              type: 'fill-blank',
              prompt: 'Recursive factorial.',
              codeLines: [{ html: 'return n &lt;= 1 ? 1 : n * _BLANK_;' }],
              tokens: ['fact(n-1)', 'fact(n)', 'n-1', 'fact'],
              correctAnswer: 'fact(n-1)',
              explanation: 'Standard recursion.'
            }
          ]
        },
        {
          id: 'math-u12-l2',
          name: 'P(n,k) & Repetition',
          icon: '🔢',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'k-permutations',
              content: `<p><b>P(n, k) = n! / (n−k)!</b> counts ordered choices of k from n distinct items.</p>
              <div class="code-block">
              P(5, 2) = 5! / 3! = 120 / 6 = 20
              </div>
              <p>So 5 medals to 5 athletes, top 2 → 20 ordered podium outcomes.</p>
              <p><b>With repetition</b>: choosing k items from n with replacement, where order matters → n^k.</p>
              <div class="code-block">
              4-digit PIN: 10^4 = 10,000 possibilities
              </div>`
            },
            {
              type: 'type-answer',
              prompt: 'P(6, 3) = ?',
              code: '',
              accept: ['120'],
              explanation: '6! / 3! = 720/6 = 120.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How many 3-letter codes (A–Z) with repetition allowed?',
              options: [
                { text: '17576', code: false },
                { text: '15600', code: false },
                { text: '676', code: false },
                { text: '26', code: false }
              ],
              correct: 0,
              explanation: '26³ = 17576.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Without repetition: 3-letter codes from A–Z?',
              options: [
                { text: '15600', code: false },
                { text: '17576', code: false },
                { text: '78', code: false },
                { text: '26', code: false }
              ],
              correct: 0,
              explanation: '26 × 25 × 24 = 15600.'
            },
            {
              type: 'true-false',
              statement: 'P(n, n) = n!',
              correct: true,
              explanation: 'All orderings of all items.'
            },
            {
              type: 'fill-blank',
              prompt: 'Permutation formula.',
              codeLines: [{ html: 'P(n,k) = n! / _BLANK_' }],
              tokens: ['(n-k)!', 'k!', 'n!', '(n+k)!'],
              correctAnswer: '(n-k)!',
              explanation: 'Definition of P(n,k).'
            },
            {
              type: 'type-answer',
              prompt: 'How many 4-digit PINs (with repetition)?',
              code: '',
              accept: ['10000'],
              explanation: '10⁴ = 10000.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u13',
      name: 'Unit 13 · Combinations',
      description: 'Unordered selections — Pascal\'s triangle.',
      lessons: [
        {
          id: 'math-u13-l1',
          name: 'C(n,k)',
          icon: '🎲',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Combinations',
              content: `<p><b>C(n, k) = n! / (k!(n−k)!)</b> counts unordered selections of k from n.</p>
              <p>Also written (n choose k) or nCk.</p>
              <div class="code-block">
              C(5, 2) = 5! / (2! · 3!) = 120 / (2·6) = 10
              </div>
              <p>Use combinations when order doesn't matter (lottery, committees, subsets).</p>
              <p>Note: C(n,k) = P(n,k) / k! — we divide out the orderings.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'C(5,2) = ?',
              code: '',
              accept: ['10'],
              explanation: '5! / (2!·3!) = 10.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How many 5-card hands from a 52-card deck?',
              options: [
                { text: '2,598,960', code: false },
                { text: '311,875,200', code: false },
                { text: '52', code: false },
                { text: '260', code: false }
              ],
              correct: 0,
              explanation: 'C(52,5) = 2,598,960.'
            },
            {
              type: 'true-false',
              statement: 'C(n,k) = C(n, n−k).',
              correct: true,
              explanation: 'Choosing what to include = choosing what to leave out.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Order matters? Use:',
              options: [
                { text: 'Permutations', code: false },
                { text: 'Combinations', code: false },
                { text: 'Power set', code: false },
                { text: 'Cardinality', code: false }
              ],
              correct: 0,
              explanation: 'Order → permutation; no order → combination.'
            },
            {
              type: 'fill-blank',
              prompt: 'Combination formula.',
              codeLines: [{ html: 'C(n,k) = n! / ( _BLANK_ × (n-k)! )' }],
              tokens: ['k!', 'n!', '(n-k)', 'k'],
              correctAnswer: 'k!',
              explanation: 'Divide out k! orderings.'
            },
            {
              type: 'type-answer',
              prompt: 'C(6,3) = ?',
              code: '',
              accept: ['20'],
              explanation: '6!/(3!·3!) = 720/36 = 20.'
            }
          ]
        },
        {
          id: 'math-u13-l2',
          name: 'Pascal & Binomial',
          icon: '🔺',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Pascal\'s triangle',
              content: `<p>Each entry is the sum of the two above. Row n holds C(n, 0), C(n, 1), ..., C(n, n).</p>
              <div class="code-block">
              1<br>
              1 1<br>
              1 2 1<br>
              1 3 3 1<br>
              1 4 6 4 1<br>
              1 5 10 10 5 1
              </div>
              <p><b>Binomial theorem</b>: (x + y)ⁿ = Σ C(n, k) · xⁿ⁻ᵏ · yᵏ.</p>
              <div class="code-block">
              (x+y)² = x² + 2xy + y²<br>
              (x+y)³ = x³ + 3x²y + 3xy² + y³
              </div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Row 4 of Pascal\'s triangle (starting at row 0):',
              options: [
                { text: '1 4 6 4 1', code: false },
                { text: '1 3 3 1', code: false },
                { text: '1 5 10 10 5 1', code: false },
                { text: '1 4 4 1', code: false }
              ],
              correct: 0,
              explanation: 'C(4,0..4) = 1,4,6,4,1.'
            },
            {
              type: 'true-false',
              statement: 'The sum of row n in Pascal\'s triangle is 2ⁿ.',
              correct: true,
              explanation: 'Σ C(n,k) = 2ⁿ.'
            },
            {
              type: 'multiple-choice',
              prompt: '(x+y)³ expands to:',
              options: [
                { text: 'x³ + 3x²y + 3xy² + y³', code: false },
                { text: 'x³ + y³', code: false },
                { text: 'x³ + 2x²y + 2xy² + y³', code: false },
                { text: 'x³ + 6x²y + 6xy² + y³', code: false }
              ],
              correct: 0,
              explanation: 'Coefficients 1, 3, 3, 1 from row 3.'
            },
            {
              type: 'type-answer',
              prompt: 'Coefficient of xy² in (x+y)³?',
              code: '',
              accept: ['3'],
              explanation: 'C(3,2) = 3.'
            },
            {
              type: 'fill-blank',
              prompt: 'Pascal\'s recurrence.',
              codeLines: [{ html: 'C(n,k) = C(n-1, k-1) + _BLANK_' }],
              tokens: ['C(n-1,k)', 'C(n,k-1)', 'C(n-1,k+1)', 'C(n,k)'],
              correctAnswer: 'C(n-1,k)',
              explanation: 'Add the two above.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u14',
      name: 'Unit 14 · Probability — Basics',
      description: 'Sample spaces, events, and the rules of chance.',
      lessons: [
        {
          id: 'math-u14-l1',
          name: 'Sample space & Events',
          icon: '🎲',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What is probability?',
              content: `<p>The <b>sample space</b> Ω is the set of all possible outcomes of an experiment.</p>
              <p>An <b>event</b> is a subset of the sample space.</p>
              <p>For equally-likely outcomes:</p>
              <div class="code-block">
              P(A) = |A| / |Ω|
              </div>
              <p>Roll a fair die: Ω = {1,2,3,4,5,6}. Event "even" = {2,4,6}. P(even) = 3/6 = 1/2.</p>
              <p>Probabilities range from 0 (impossible) to 1 (certain).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'P(rolling a 5 on a fair die) = ?',
              options: [
                { text: '1/6', code: false },
                { text: '1/2', code: false },
                { text: '5/6', code: false },
                { text: '1/3', code: false }
              ],
              correct: 0,
              explanation: 'One favorable outcome of six.'
            },
            {
              type: 'true-false',
              statement: 'P always lies in [0, 1].',
              correct: true,
              explanation: 'Standard axiom of probability.'
            },
            {
              type: 'multiple-choice',
              prompt: 'P(getting a head OR tail) when tossing a fair coin?',
              options: [
                { text: '1', code: false },
                { text: '0.5', code: false },
                { text: '0', code: false },
                { text: '2', code: false }
              ],
              correct: 0,
              explanation: 'Certain event.'
            },
            {
              type: 'type-answer',
              prompt: 'P(rolling even on a fair die)? Use a decimal.',
              code: '',
              accept: ['0.5', '1/2'],
              explanation: '3/6 = 0.5.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each term.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Sample space', right: 'All outcomes' },
                { left: 'Event', right: 'Subset of outcomes' },
                { left: 'Probability', right: 'Number in [0,1]' },
                { left: 'Certain event', right: 'P = 1' }
              ]
            }
          ]
        },
        {
          id: 'math-u14-l2',
          name: 'Complement & Independence',
          icon: '🪙',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Complement and independence',
              content: `<p><b>Complement</b>: P(not A) = 1 − P(A).</p>
              <p><b>Independent events</b>: outcome of A does not affect B. P(A and B) = P(A) × P(B).</p>
              <p><b>Mutually exclusive</b>: cannot happen together. P(A or B) = P(A) + P(B).</p>
              <p>These are NOT the same! Mutually exclusive events are very much dependent.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'P(not rolling a 6) on a fair die?',
              options: [
                { text: '5/6', code: false },
                { text: '1/6', code: false },
                { text: '1', code: false },
                { text: '6/5', code: false }
              ],
              correct: 0,
              explanation: '1 − 1/6 = 5/6.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Two independent coin tosses. P(both heads)?',
              options: [
                { text: '1/4', code: false },
                { text: '1/2', code: false },
                { text: '1', code: false },
                { text: '3/4', code: false }
              ],
              correct: 0,
              explanation: '½ × ½ = ¼.'
            },
            {
              type: 'true-false',
              statement: 'Mutually exclusive events are independent.',
              correct: false,
              explanation: 'If one happens, the other cannot — very dependent.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Roll two dice. P(sum = 7)?',
              options: [
                { text: '6/36', code: false },
                { text: '1/36', code: false },
                { text: '7/36', code: false },
                { text: '5/36', code: false }
              ],
              correct: 0,
              explanation: '6 ordered pairs sum to 7 out of 36.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complement rule.',
              codeLines: [{ html: 'P(not A) = 1 _BLANK_ P(A)' }],
              tokens: ['-', '+', '×', '/'],
              correctAnswer: '-',
              explanation: 'Subtract from 1.'
            },
            {
              type: 'type-answer',
              prompt: 'P(at least one head in 2 tosses)? (decimal)',
              code: '',
              accept: ['0.75', '3/4'],
              explanation: '1 − P(both tails) = 1 − 1/4 = 3/4.'
            }
          ]
        },
        {
          id: 'math-u14-l3',
          name: 'Addition & Inclusion-Exclusion',
          icon: '➕',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'P(A or B)',
              content: `<p>For any two events:</p>
              <div class="code-block">
              P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
              </div>
              <p>We subtract the overlap so we don't double count.</p>
              <p>If mutually exclusive, P(A ∩ B) = 0 and the formula simplifies to P(A) + P(B).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'P(A) = 0.4, P(B) = 0.5, P(A∩B) = 0.2. P(A∪B)?',
              options: [
                { text: '0.7', code: false },
                { text: '0.9', code: false },
                { text: '0.2', code: false },
                { text: '0.1', code: false }
              ],
              correct: 0,
              explanation: '0.4 + 0.5 − 0.2 = 0.7.'
            },
            {
              type: 'true-false',
              statement: 'If A and B are mutually exclusive, P(A∪B) = P(A) + P(B).',
              correct: true,
              explanation: 'Overlap is zero.'
            },
            {
              type: 'multiple-choice',
              prompt: 'P(card is red or face card) in a 52-card deck. Reds = 26, face = 12, red face = 6.',
              options: [
                { text: '32/52', code: false },
                { text: '38/52', code: false },
                { text: '26/52', code: false },
                { text: '6/52', code: false }
              ],
              correct: 0,
              explanation: '26 + 12 − 6 = 32.'
            },
            {
              type: 'fill-blank',
              prompt: 'Inclusion-exclusion.',
              codeLines: [{ html: 'P(A∪B) = P(A) + P(B) _BLANK_ P(A∩B)' }],
              tokens: ['-', '+', '×', '/'],
              correctAnswer: '-',
              explanation: 'Subtract the overlap.'
            },
            {
              type: 'true-false',
              statement: 'P(A∪B) is always ≤ P(A) + P(B).',
              correct: true,
              explanation: 'Equality only when disjoint.'
            },
            {
              type: 'type-answer',
              prompt: 'Roll a die. P(even OR >4)? (fraction like 4/6)',
              code: '',
              accept: ['4/6', '2/3', '0.666...', '0.67'],
              explanation: '{2,4,6} ∪ {5,6} = {2,4,5,6}, 4/6.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u15',
      name: 'Unit 15 · Conditional Probability',
      description: 'P(A | B) and Bayes — updating beliefs with evidence.',
      lessons: [
        {
          id: 'math-u15-l1',
          name: 'P(A | B) & Multiplication Rule',
          icon: '🪄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Probability given evidence',
              content: `<p><b>Conditional probability</b>: the probability of A given that B happened.</p>
              <div class="code-block">
              P(A | B) = P(A ∩ B) / P(B)
              </div>
              <p>From it we get the <b>multiplication rule</b>:</p>
              <div class="code-block">
              P(A ∩ B) = P(A | B) · P(B)
              </div>
              <p>For independent A and B, P(A | B) = P(A).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You draw a card. Given it is red, P(it is a heart)?',
              options: [
                { text: '1/2', code: false },
                { text: '1/4', code: false },
                { text: '1/13', code: false },
                { text: '1/52', code: false }
              ],
              correct: 0,
              explanation: '13 hearts of 26 red.'
            },
            {
              type: 'true-false',
              statement: 'If A and B are independent, P(A|B) = P(A).',
              correct: true,
              explanation: 'B reveals no info about A.'
            },
            {
              type: 'multiple-choice',
              prompt: 'P(B) = 0.4, P(A∩B) = 0.1. P(A|B)?',
              options: [
                { text: '0.25', code: false },
                { text: '0.5', code: false },
                { text: '0.4', code: false },
                { text: '0.1', code: false }
              ],
              correct: 0,
              explanation: '0.1 / 0.4 = 0.25.'
            },
            {
              type: 'fill-blank',
              prompt: 'Multiplication rule.',
              codeLines: [{ html: 'P(A∩B) = P(A|B) _BLANK_ P(B)' }],
              tokens: ['×', '+', '-', '/'],
              correctAnswer: '×',
              explanation: 'Rearrangement of the conditional formula.'
            },
            {
              type: 'true-false',
              statement: 'P(A|B) is generally equal to P(B|A).',
              correct: false,
              explanation: 'They are only equal if P(A) = P(B).'
            }
          ]
        },
        {
          id: 'math-u15-l2',
          name: 'Bayes\' Theorem',
          icon: '🧠',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'Bayes\' Theorem',
              content: `<p><b>Bayes\' Theorem</b> flips a conditional:</p>
              <div class="code-block">
              P(A | B) = P(B | A) · P(A) / P(B)
              </div>
              <p>It powers spam filters, medical diagnostics, and Bayesian inference.</p>
              <p>Classic example: 1% of people have a disease. Test is 99% accurate. If a person tests positive, what is P(disease | positive)?</p>
              <div class="code-block">
              P(D)=0.01, P(+|D)=0.99, P(+|¬D)=0.01<br>
              P(+) = 0.01·0.99 + 0.99·0.01 = 0.0198<br>
              P(D|+) = 0.99·0.01 / 0.0198 ≈ 0.5
              </div>
              <p>Even with 99% accuracy, a positive only means ~50% chance of disease!</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Bayes\' theorem lets you compute:',
              options: [
                { text: 'P(A|B) from P(B|A), P(A), P(B)', code: false },
                { text: 'P(A) from B', code: false },
                { text: 'P(A∩B) from P(A∪B)', code: false },
                { text: 'P(A) from P(¬A)', code: false }
              ],
              correct: 0,
              explanation: 'Reverses the conditional.'
            },
            {
              type: 'true-false',
              statement: 'Even with a 99% accurate test, low base rates yield surprisingly low P(disease|positive).',
              correct: true,
              explanation: 'False positives dominate when the disease is rare.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Spam filter: P(spam) = 0.3, P(word|spam) = 0.8, P(word|¬spam) = 0.1. P(spam|word) ≈ ?',
              options: [
                { text: '≈ 0.77', code: false },
                { text: '0.3', code: false },
                { text: '0.5', code: false },
                { text: '0.95', code: false }
              ],
              correct: 0,
              explanation: '(0.8·0.3) / (0.8·0.3 + 0.1·0.7) = 0.24/0.31 ≈ 0.77.'
            },
            {
              type: 'fill-blank',
              prompt: 'Bayes formula.',
              codeLines: [{ html: 'P(A|B) = P(B|A) × P(A) / _BLANK_' }],
              tokens: ['P(B)', 'P(A)', 'P(A∩B)', 'P(A|B)'],
              correctAnswer: 'P(B)',
              explanation: 'Normalize by P(B).'
            },
            {
              type: 'reorder-code',
              prompt: 'Compute P(disease | positive) using Bayes.',
              lines: [
                'P(+) = P(+|D)·P(D) + P(+|¬D)·P(¬D)',
                'P(D|+) = P(+|D)·P(D) / P(+)'
              ],
              correctOrder: [0, 1]
            },
            {
              type: 'true-false',
              statement: 'Bayes\' theorem is widely used in spam filters and ML classifiers.',
              correct: true,
              explanation: 'Naive Bayes is a foundational classifier.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u16',
      name: 'Unit 16 · Random Variables',
      description: 'Numbers from chance — and how to summarize them.',
      lessons: [
        {
          id: 'math-u16-l1',
          name: 'Discrete vs Continuous, PMF & PDF',
          icon: '🎰',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Random variables',
              content: `<p>A <b>random variable</b> X assigns a number to each outcome.</p>
              <ul>
                <li><b>Discrete</b> X: countable values (dice rolls, counts).</li>
                <li><b>Continuous</b> X: real numbers in a range (heights, temperatures).</li>
              </ul>
              <p>Probability mass function <b>PMF</b>: p(x) = P(X = x) for discrete X.</p>
              <p>Probability density function <b>PDF</b>: f(x) for continuous X; probabilities come from integrating.</p>
              <p>For continuous X, P(X = exact value) = 0 — probabilities live on intervals.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Number of heads in 10 tosses is:',
              options: [
                { text: 'Discrete', code: false },
                { text: 'Continuous', code: false },
                { text: 'Both', code: false },
                { text: 'Neither', code: false }
              ],
              correct: 0,
              explanation: 'Counts are discrete.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Height of a randomly chosen adult is:',
              options: [
                { text: 'Continuous', code: false },
                { text: 'Discrete', code: false },
                { text: 'Both', code: false },
                { text: 'Categorical', code: false }
              ],
              correct: 0,
              explanation: 'Heights live on a continuum.'
            },
            {
              type: 'true-false',
              statement: 'For a continuous X, P(X = 1.5) = 0.',
              correct: true,
              explanation: 'Probabilities of single points vanish for continuous distributions.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the term.',
              leftLabel: 'Term',
              rightLabel: 'For',
              pairs: [
                { left: 'PMF', right: 'Discrete X' },
                { left: 'PDF', right: 'Continuous X' },
                { left: 'CDF', right: 'Both' },
                { left: 'Sample space', right: 'All experiments' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Sum of all PMF values.',
              codeLines: [{ html: 'Σ p(x) = _BLANK_' }],
              tokens: ['1', '0', '∞', 'X'],
              correctAnswer: '1',
              explanation: 'Total probability is 1.'
            }
          ]
        },
        {
          id: 'math-u16-l2',
          name: 'Expectation & Variance',
          icon: '📈',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Mean and spread of a random variable',
              content: `<p><b>Expected value</b> E[X] is the long-run average.</p>
              <div class="code-block">
              E[X] = Σ x · p(x)   (discrete)
              </div>
              <p>For a fair die: E[X] = 1·(1/6) + 2·(1/6) + ... + 6·(1/6) = 3.5.</p>
              <p><b>Variance</b> Var(X) = E[(X − μ)²] measures spread.</p>
              <p><b>Standard deviation</b> σ = √Var(X).</p>
              <p>Linearity: E[aX + b] = aE[X] + b. E[X + Y] = E[X] + E[Y] (always).</p>`
            },
            {
              type: 'type-answer',
              prompt: 'E[X] for a fair die?',
              code: '',
              accept: ['3.5', '7/2'],
              explanation: '(1+2+3+4+5+6)/6 = 3.5.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Var(X) of a constant c is:',
              options: [
                { text: '0', code: false },
                { text: 'c', code: false },
                { text: 'c²', code: false },
                { text: '1', code: false }
              ],
              correct: 0,
              explanation: 'No spread → variance zero.'
            },
            {
              type: 'true-false',
              statement: 'E[X + Y] = E[X] + E[Y] always.',
              correct: true,
              explanation: 'Linearity of expectation.'
            },
            {
              type: 'true-false',
              statement: 'Var(X + Y) = Var(X) + Var(Y) always.',
              correct: false,
              explanation: 'Only when X and Y are independent.'
            },
            {
              type: 'multiple-choice',
              prompt: 'σ stands for:',
              options: [
                { text: 'Standard deviation', code: false },
                { text: 'Sum', code: false },
                { text: 'Sample size', code: false },
                { text: 'Skewness', code: false }
              ],
              correct: 0,
              explanation: 'σ = std deviation, σ² = variance.'
            },
            {
              type: 'fill-blank',
              prompt: 'Variance formula.',
              codeLines: [{ html: 'Var(X) = E[(X - _BLANK_)²]' }],
              tokens: ['μ', '0', 'σ', '1'],
              correctAnswer: 'μ',
              explanation: 'Squared deviation from the mean.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u17',
      name: 'Unit 17 · Common Distributions',
      description: 'Uniform, Bernoulli, Binomial, Normal.',
      lessons: [
        {
          id: 'math-u17-l1',
          name: 'Uniform, Bernoulli, Binomial',
          icon: '🎯',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Discrete distributions',
              content: `<p><b>Uniform</b>: all outcomes equally likely. Die roll: P(X = k) = 1/6.</p>
              <p><b>Bernoulli(p)</b>: a single trial with success probability p. X ∈ {0, 1}.</p>
              <p><b>Binomial(n, p)</b>: number of successes in n independent Bernoulli trials.</p>
              <div class="code-block">
              P(X = k) = C(n, k) · pᵏ · (1−p)ⁿ⁻ᵏ<br>
              E[X] = n · p,  Var(X) = n · p · (1−p)
              </div>
              <p>Example: 10 coin tosses, X = #heads → Binomial(10, 0.5).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: '10 fair coin tosses. E[heads]?',
              options: [
                { text: '5', code: false },
                { text: '2.5', code: false },
                { text: '10', code: false },
                { text: '1', code: false }
              ],
              correct: 0,
              explanation: 'n·p = 10·0.5 = 5.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Bernoulli(0.3) variance?',
              options: [
                { text: '0.21', code: false },
                { text: '0.3', code: false },
                { text: '0.7', code: false },
                { text: '1', code: false }
              ],
              correct: 0,
              explanation: 'p(1−p) = 0.21.'
            },
            {
              type: 'true-false',
              statement: 'Sum of independent Bernoulli(p) trials is Binomial(n, p).',
              correct: true,
              explanation: 'Definition of binomial.'
            },
            {
              type: 'multiple-choice',
              prompt: 'In Binomial(n=4, p=0.5), P(X=2)?',
              options: [
                { text: '6/16', code: false },
                { text: '1/4', code: false },
                { text: '1/2', code: false },
                { text: '4/16', code: false }
              ],
              correct: 0,
              explanation: 'C(4,2)·(0.5)⁴ = 6/16.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match distribution to use case.',
              leftLabel: 'Distribution',
              rightLabel: 'Use',
              pairs: [
                { left: 'Uniform', right: 'Equally likely outcomes' },
                { left: 'Bernoulli', right: 'Single yes/no trial' },
                { left: 'Binomial', right: 'Count of successes' },
                { left: 'Normal', right: 'Heights, errors' }
              ]
            }
          ]
        },
        {
          id: 'math-u17-l2',
          name: 'Normal (Gaussian) intuition',
          icon: '🔔',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The bell curve',
              content: `<p>The <b>normal distribution</b> N(μ, σ²) is symmetric and bell-shaped.</p>
              <p>Many real-world quantities (heights, measurement errors, sums of many small effects) are approximately normal — that\'s the <b>Central Limit Theorem</b>.</p>
              <p>Useful 68-95-99.7 rule:</p>
              <ul>
                <li>≈ 68% of values within μ ± σ</li>
                <li>≈ 95% within μ ± 2σ</li>
                <li>≈ 99.7% within μ ± 3σ</li>
              </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Approximately what % of normal data lies within ±2σ?',
              options: [
                { text: '95%', code: false },
                { text: '68%', code: false },
                { text: '99.7%', code: false },
                { text: '50%', code: false }
              ],
              correct: 0,
              explanation: 'Empirical rule.'
            },
            {
              type: 'true-false',
              statement: 'The standard normal has μ=0 and σ=1.',
              correct: true,
              explanation: 'By definition.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Central Limit Theorem says:',
              options: [
                { text: 'Sums of many independent variables tend toward a normal distribution', code: false },
                { text: 'All variables are normal', code: false },
                { text: 'Only sums of normals are normal', code: false },
                { text: 'Variance grows linearly', code: false }
              ],
              correct: 0,
              explanation: 'CLT is the foundation of much of statistics.'
            },
            {
              type: 'true-false',
              statement: 'The normal distribution is asymmetric.',
              correct: false,
              explanation: 'It is symmetric around μ.'
            },
            {
              type: 'fill-blank',
              prompt: 'Empirical rule.',
              codeLines: [{ html: '68% within μ ± _BLANK_' }],
              tokens: ['1σ', '2σ', '3σ', '0.5σ'],
              correctAnswer: '1σ',
              explanation: '68-95-99.7 starts with one σ.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u18',
      name: 'Unit 18 · Descriptive Statistics',
      description: 'Summarize data: center, spread, shape.',
      lessons: [
        {
          id: 'math-u18-l1',
          name: 'Mean, Median, Mode',
          icon: '📊',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Measures of center',
              content: `<p><b>Mean</b> (arithmetic): sum / count. Sensitive to outliers.</p>
              <p><b>Median</b>: middle value when sorted. Robust to outliers.</p>
              <p><b>Mode</b>: most frequent value.</p>
              <div class="code-block">
              Data: [1, 2, 2, 3, 100]<br>
              Mean = 21.6   (pulled by 100)<br>
              Median = 2    (middle)<br>
              Mode = 2      (most frequent)
              </div>
              <p>Use median for skewed or outlier-prone data (incomes, response times).</p>`
            },
            {
              type: 'type-answer',
              prompt: 'Mean of [2, 4, 6, 8]?',
              code: '',
              accept: ['5'],
              explanation: '20/4 = 5.'
            },
            {
              type: 'type-answer',
              prompt: 'Median of [1, 3, 5, 7, 9]?',
              code: '',
              accept: ['5'],
              explanation: 'Middle of sorted list.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Mode of [4, 4, 5, 6, 7, 4]?',
              options: [
                { text: '4', code: false },
                { text: '5', code: false },
                { text: '6', code: false },
                { text: '7', code: false }
              ],
              correct: 0,
              explanation: '4 appears most.'
            },
            {
              type: 'true-false',
              statement: 'The mean is robust to outliers.',
              correct: false,
              explanation: 'Median is robust; mean is sensitive.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which average works best for skewed income data?',
              options: [
                { text: 'Median', code: false },
                { text: 'Mean', code: false },
                { text: 'Mode', code: false },
                { text: 'Sum', code: false }
              ],
              correct: 0,
              explanation: 'Median resists extreme values.'
            }
          ]
        },
        {
          id: 'math-u18-l2',
          name: 'Range, Quartiles, IQR',
          icon: '📏',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Measures of spread',
              content: `<p><b>Range</b>: max − min.</p>
              <p><b>Quartiles</b> split sorted data into 4 parts:</p>
              <ul>
                <li>Q1 — 25th percentile</li>
                <li>Q2 — median (50th)</li>
                <li>Q3 — 75th percentile</li>
              </ul>
              <p><b>IQR</b> = Q3 − Q1 (interquartile range) — robust spread measure.</p>
              <p>Box plots visualize Q1, median, Q3, and outliers.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'Range of [3, 7, 9, 12]?',
              code: '',
              accept: ['9'],
              explanation: '12 − 3 = 9.'
            },
            {
              type: 'multiple-choice',
              prompt: 'IQR equals:',
              options: [
                { text: 'Q3 − Q1', code: false },
                { text: 'Q1 + Q3', code: false },
                { text: 'Max − Min', code: false },
                { text: 'Q2 only', code: false }
              ],
              correct: 0,
              explanation: 'Middle 50% of data.'
            },
            {
              type: 'true-false',
              statement: 'IQR is more robust to outliers than the range.',
              correct: true,
              explanation: 'It uses the inner 50%.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Q2 is also:',
              options: [
                { text: 'Median', code: false },
                { text: 'Mean', code: false },
                { text: 'Mode', code: false },
                { text: 'Sum', code: false }
              ],
              correct: 0,
              explanation: '50th percentile.'
            },
            {
              type: 'fill-blank',
              prompt: 'IQR.',
              codeLines: [{ html: 'IQR = Q3 _BLANK_ Q1' }],
              tokens: ['-', '+', '×', '/'],
              correctAnswer: '-',
              explanation: 'Subtract lower from upper quartile.'
            }
          ]
        },
        {
          id: 'math-u18-l3',
          name: 'Variance & Std Dev',
          icon: '📐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Variance and standard deviation',
              content: `<p>Both measure spread around the mean.</p>
              <div class="code-block">
              Var = (1/N) · Σ (xᵢ - μ)²<br>
              σ = √Var
              </div>
              <p>Standard deviation σ has the same units as the data — easier to interpret than variance.</p>
              <p>Sample variance divides by N − 1 (Bessel\'s correction) to be unbiased.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'σ is:',
              options: [
                { text: 'Square root of variance', code: false },
                { text: 'Square of variance', code: false },
                { text: 'Mean', code: false },
                { text: 'Median', code: false }
              ],
              correct: 0,
              explanation: 'σ = √Var.'
            },
            {
              type: 'true-false',
              statement: 'Higher variance means more spread.',
              correct: true,
              explanation: 'Variance measures dispersion.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Two datasets with same mean. Which has higher σ?',
              options: [
                { text: 'The one with values farther from the mean', code: false },
                { text: 'Always the larger one', code: false },
                { text: 'Cannot say', code: false },
                { text: 'The shorter list', code: false }
              ],
              correct: 0,
              explanation: 'Bigger deviations → larger σ.'
            },
            {
              type: 'type-answer',
              prompt: 'Std dev of [4, 4, 4, 4]?',
              code: '',
              accept: ['0'],
              explanation: 'No spread.'
            },
            {
              type: 'fill-blank',
              prompt: 'Population variance formula.',
              codeLines: [{ html: 'σ² = (1/N) · Σ (xᵢ - _BLANK_)²' }],
              tokens: ['μ', '0', 'σ', '1'],
              correctAnswer: 'μ',
              explanation: 'Deviation from the mean.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use σ over variance for reporting?',
              options: [
                { text: 'σ has the same units as the data', code: false },
                { text: 'σ is always smaller', code: false },
                { text: 'σ is exact', code: false },
                { text: 'σ is integer-valued', code: false }
              ],
              correct: 0,
              explanation: 'Easier to compare with the data.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u19',
      name: 'Unit 19 · Linear Algebra — Vectors',
      description: 'Arrows, magnitudes, and dot products.',
      lessons: [
        {
          id: 'math-u19-l1',
          name: 'Vectors & Operations',
          icon: '➡️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What is a vector?',
              content: `<p>A <b>vector</b> is an ordered list of numbers.</p>
              <div class="code-block">
              v = (3, 4)            <span class="com">// 2D</span><br>
              u = (1, 2, 3)         <span class="com">// 3D</span>
              </div>
              <p>Vectors represent positions, velocities, colors, embeddings.</p>
              <p><b>Addition</b> is component-wise: (1,2) + (3,4) = (4,6).</p>
              <p><b>Scalar multiplication</b> scales each component: 2·(1,2) = (2,4).</p>`
            },
            {
              type: 'output-predict',
              prompt: 'Compute (1, 2) + (3, 5).',
              code: `// vector addition`,
              options: [
                { text: '(4, 7)', code: false },
                { text: '(3, 10)', code: false },
                { text: '(2, 3)', code: false },
                { text: '(4, 5)', code: false }
              ],
              correct: 0,
              explanation: 'Add component-wise.'
            },
            {
              type: 'multiple-choice',
              prompt: '3 × (2, -1, 4) = ?',
              options: [
                { text: '(6, -3, 12)', code: false },
                { text: '(2, -3, 12)', code: false },
                { text: '(6, -1, 4)', code: false },
                { text: '(5, 2, 7)', code: false }
              ],
              correct: 0,
              explanation: 'Multiply each entry.'
            },
            {
              type: 'true-false',
              statement: 'Vector addition is commutative: u + v = v + u.',
              correct: true,
              explanation: 'Component-wise commutativity.'
            },
            {
              type: 'fill-blank',
              prompt: 'Scalar multiply.',
              codeLines: [{ html: '2 · (a, b) = (_BLANK_, 2b)' }],
              tokens: ['2a', 'a', '2b', 'a+b'],
              correctAnswer: '2a',
              explanation: 'Multiply each coordinate.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each vector use.',
              leftLabel: 'Domain',
              rightLabel: 'Vector represents',
              pairs: [
                { left: 'Graphics', right: 'Position / direction' },
                { left: 'ML', right: 'Embedding / features' },
                { left: 'Physics', right: 'Velocity / force' },
                { left: 'Colors', right: '(R, G, B)' }
              ]
            }
          ]
        },
        {
          id: 'math-u19-l2',
          name: 'Magnitude & Norms',
          icon: '📏',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'How long is a vector?',
              content: `<p><b>Magnitude</b> (Euclidean norm) of v = (v₁, v₂, ..., vₙ):</p>
              <div class="code-block">
              ||v|| = √(v₁² + v₂² + ... + vₙ²)
              </div>
              <p>Geometrically: the length of the arrow.</p>
              <p>A <b>unit vector</b> has magnitude 1. To normalize: v / ||v||.</p>
              <p>Other norms exist: L1 (sum of abs), L∞ (max abs) — used in ML.</p>`
            },
            {
              type: 'type-answer',
              prompt: '||(3, 4)|| = ?',
              code: '',
              accept: ['5'],
              explanation: '√(9+16) = √25 = 5.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A unit vector has magnitude:',
              options: [
                { text: '1', code: false },
                { text: '0', code: false },
                { text: '∞', code: false },
                { text: 'Depends on dimension', code: false }
              ],
              correct: 0,
              explanation: 'By definition.'
            },
            {
              type: 'true-false',
              statement: 'L1 norm of (3, −4) is 7.',
              correct: true,
              explanation: '|3| + |−4| = 7.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Normalize (6, 8). What is the unit vector?',
              options: [
                { text: '(0.6, 0.8)', code: false },
                { text: '(1, 1)', code: false },
                { text: '(6/10, 8/14)', code: false },
                { text: '(0.5, 0.5)', code: false }
              ],
              correct: 0,
              explanation: 'Magnitude is 10; divide.'
            },
            {
              type: 'fill-blank',
              prompt: 'Euclidean norm.',
              codeLines: [{ html: '||v|| = sqrt(v1^2 + v2^2 + _BLANK_)' }],
              tokens: ['v3^2 + ...', 'v3', '0', '1'],
              correctAnswer: 'v3^2 + ...',
              explanation: 'Sum of squares.'
            }
          ]
        },
        {
          id: 'math-u19-l3',
          name: 'Dot product',
          icon: '·',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The dot product',
              content: `<p>The <b>dot product</b> of u and v:</p>
              <div class="code-block">
              u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ<br>
              u · v = ||u|| · ||v|| · cos θ
              </div>
              <p>Geometric meaning: it measures how aligned two vectors are.</p>
              <ul>
                <li>0 → perpendicular (orthogonal)</li>
                <li>Positive → same direction</li>
                <li>Negative → opposite directions</li>
              </ul>
              <p>Used everywhere: similarity in ML, projections in graphics, work in physics.</p>`
            },
            {
              type: 'type-answer',
              prompt: '(1, 2) · (3, 4) = ?',
              code: '',
              accept: ['11'],
              explanation: '1·3 + 2·4 = 11.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Two vectors are orthogonal iff:',
              options: [
                { text: 'Their dot product is 0', code: false },
                { text: 'They have the same length', code: false },
                { text: 'They are parallel', code: false },
                { text: 'Their sum is 0', code: false }
              ],
              correct: 0,
              explanation: 'Definition of orthogonality.'
            },
            {
              type: 'true-false',
              statement: 'Cosine similarity uses the dot product.',
              correct: true,
              explanation: 'cos θ = u·v / (||u||·||v||).'
            },
            {
              type: 'multiple-choice',
              prompt: '(2, 0) · (0, 3) = ?',
              options: [
                { text: '0', code: false },
                { text: '6', code: false },
                { text: '5', code: false },
                { text: '−6', code: false }
              ],
              correct: 0,
              explanation: 'Perpendicular vectors.'
            },
            {
              type: 'fill-blank',
              prompt: 'Dot product.',
              codeLines: [{ html: 'u · v = u1·v1 + _BLANK_ + ...' }],
              tokens: ['u2·v2', 'u2+v2', 'u1·v2', 'u·v'],
              correctAnswer: 'u2·v2',
              explanation: 'Pairwise multiply and sum.'
            },
            {
              type: 'true-false',
              statement: 'Dot product is commutative: u·v = v·u.',
              correct: true,
              explanation: 'Multiplication of numbers commutes.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u20',
      name: 'Unit 20 · Linear Algebra — Matrices',
      description: 'Grids of numbers — the workhorse of graphics & ML.',
      lessons: [
        {
          id: 'math-u20-l1',
          name: 'Matrix basics',
          icon: '⬛',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What is a matrix?',
              content: `<p>A <b>matrix</b> is a rectangular grid of numbers (m rows × n cols).</p>
              <div class="code-block">
              A = | 1  2 |<br>
                  | 3  4 |
              </div>
              <p>We write its size m×n. A 2×3 matrix has 2 rows, 3 columns.</p>
              <p><b>Addition</b>: same-size matrices, entry-wise.</p>
              <p><b>Scalar mult</b>: multiply every entry.</p>
              <p><b>Transpose</b> Aᵀ: flip rows and columns.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A 3×4 matrix has how many entries?',
              options: [
                { text: '12', code: false },
                { text: '7', code: false },
                { text: '34', code: false },
                { text: '9', code: false }
              ],
              correct: 0,
              explanation: '3 × 4 = 12.'
            },
            {
              type: 'true-false',
              statement: 'You can add two matrices only if they have the same shape.',
              correct: true,
              explanation: 'Entry-wise addition requires aligned dimensions.'
            },
            {
              type: 'output-predict',
              prompt: 'Transpose of [[1,2],[3,4]]?',
              code: `// transpose`,
              options: [
                { text: '[[1,3],[2,4]]', code: false },
                { text: '[[4,3],[2,1]]', code: false },
                { text: '[[2,1],[4,3]]', code: false },
                { text: 'Same as original', code: false }
              ],
              correct: 0,
              explanation: 'Swap rows and columns.'
            },
            {
              type: 'multiple-choice',
              prompt: 'The identity matrix I:',
              options: [
                { text: 'Has 1s on the diagonal and 0s elsewhere', code: false },
                { text: 'Is all 1s', code: false },
                { text: 'Is all 0s', code: false },
                { text: 'Has 1s only in the first row', code: false }
              ],
              correct: 0,
              explanation: 'Multiplicative identity.'
            },
            {
              type: 'fill-blank',
              prompt: 'For any vector v, _____ · v = v.',
              codeLines: [{ html: '_BLANK_ · v = v' }],
              tokens: ['I', '0', 'A', 'Aᵀ'],
              correctAnswer: 'I',
              explanation: 'Identity matrix acts like 1.'
            }
          ]
        },
        {
          id: 'math-u20-l2',
          name: 'Matrix Multiplication',
          icon: '✖️',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'How to multiply matrices',
              content: `<p>If A is m×n and B is n×p, then AB is m×p.</p>
              <p>Entry (i, j) of AB = row i of A · column j of B (dot product).</p>
              <div class="code-block">
              | 1 2 | × | 5 6 | = | 1·5+2·7  1·6+2·8 |<br>
              | 3 4 |   | 7 8 |   | 3·5+4·7  3·6+4·8 |<br>
                                = | 19  22 |<br>
                                  | 43  50 |
              </div>
              <p><b>Dimensions must match</b> (inner dim n).</p>
              <p>Matrix multiplication is NOT commutative: AB ≠ BA in general.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Can a 3×2 matrix multiply a 2×4 matrix?',
              options: [
                { text: 'Yes — result is 3×4', code: false },
                { text: 'No', code: false },
                { text: 'Yes — result is 2×2', code: false },
                { text: 'Only if square', code: false }
              ],
              correct: 0,
              explanation: 'Inner dims (2) match. Outer dims give shape.'
            },
            {
              type: 'true-false',
              statement: 'AB always equals BA.',
              correct: false,
              explanation: 'Matrix multiplication is not commutative.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A is 4×5, B is 5×2. AB has shape:',
              options: [
                { text: '4×2', code: false },
                { text: '5×5', code: false },
                { text: '2×4', code: false },
                { text: 'Undefined', code: false }
              ],
              correct: 0,
              explanation: 'Outer dims.'
            },
            {
              type: 'output-predict',
              prompt: '[[1,0],[0,1]] × [[a,b],[c,d]] = ?',
              code: `// identity times matrix`,
              options: [
                { text: '[[a,b],[c,d]]', code: false },
                { text: '[[0,0],[0,0]]', code: false },
                { text: '[[1,1],[1,1]]', code: false },
                { text: 'Undefined', code: false }
              ],
              correct: 0,
              explanation: 'Identity does nothing.'
            },
            {
              type: 'fill-blank',
              prompt: 'AB defined when A is m×n and B is _____',
              codeLines: [{ html: 'B is _BLANK_ × p' }],
              tokens: ['n', 'm', 'p', 'k'],
              correctAnswer: 'n',
              explanation: 'Inner dims must match.'
            }
          ]
        },
        {
          id: 'math-u20-l3',
          name: 'Transpose & Identity',
          icon: '🔄',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Special matrices',
              content: `<p><b>Transpose</b> Aᵀ swaps rows and columns. (Aᵀ)ᵢⱼ = Aⱼᵢ.</p>
              <p><b>Identity</b> Iₙ is n×n with 1s on the diagonal.</p>
              <p><b>Zero matrix</b> has all zeros.</p>
              <p>Symmetric: A = Aᵀ. Square: same #rows and #cols. Diagonal: nonzero only on diagonal.</p>
              <p>Rules: (Aᵀ)ᵀ = A, (AB)ᵀ = BᵀAᵀ.</p>`
            },
            {
              type: 'true-false',
              statement: '(AB)ᵀ = AᵀBᵀ.',
              correct: false,
              explanation: 'It is BᵀAᵀ — the order flips.'
            },
            {
              type: 'multiple-choice',
              prompt: '(Aᵀ)ᵀ equals:',
              options: [
                { text: 'A', code: false },
                { text: 'I', code: false },
                { text: '0', code: false },
                { text: '−A', code: false }
              ],
              correct: 0,
              explanation: 'Transpose twice returns original.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A symmetric matrix satisfies:',
              options: [
                { text: 'A = Aᵀ', code: false },
                { text: 'A = −A', code: false },
                { text: 'A is square only', code: false },
                { text: 'A · A = I', code: false }
              ],
              correct: 0,
              explanation: 'Definition of symmetric.'
            },
            {
              type: 'fill-blank',
              prompt: 'I_n is n×n with...',
              codeLines: [{ html: '1s on _BLANK_ and 0s elsewhere' }],
              tokens: ['the diagonal', 'top row', 'first column', 'bottom-right'],
              correctAnswer: 'the diagonal',
              explanation: 'Identity matrix.'
            },
            {
              type: 'true-false',
              statement: 'A · I = A for compatible sizes.',
              correct: true,
              explanation: 'Identity is the multiplicative identity.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u21',
      name: 'Unit 21 · Matrix Operations & Uses',
      description: 'Matrix-vector multiplication powers graphics and ML.',
      lessons: [
        {
          id: 'math-u21-l1',
          name: 'Matrix-vector & Transformations',
          icon: '🔁',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Transforming vectors',
              content: `<p>An n×n matrix can transform vectors in ℝⁿ.</p>
              <p><b>Scaling</b> by 2 in 2D:</p>
              <div class="code-block">
              | 2 0 |  · (x, y) = (2x, 2y)<br>
              | 0 2 |
              </div>
              <p><b>Rotation</b> by θ:</p>
              <div class="code-block">
              | cos θ  -sin θ |<br>
              | sin θ   cos θ |
              </div>
              <p>Combine transformations by multiplying matrices: T₂ · T₁ applies T₁ first, then T₂.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Multiplying by | 0 -1 ; 1 0 | in 2D does what?',
              options: [
                { text: 'Rotates by 90°', code: false },
                { text: 'Reflects across y-axis', code: false },
                { text: 'Doubles the size', code: false },
                { text: 'Does nothing', code: false }
              ],
              correct: 0,
              explanation: '90° counter-clockwise rotation matrix.'
            },
            {
              type: 'true-false',
              statement: 'Combining transformations corresponds to multiplying their matrices.',
              correct: true,
              explanation: 'Matrix multiplication composes linear maps.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Order matters: T₁ then T₂ corresponds to:',
              options: [
                { text: 'T₂ · T₁', code: false },
                { text: 'T₁ · T₂', code: false },
                { text: 'T₁ + T₂', code: false },
                { text: 'T₁ − T₂', code: false }
              ],
              correct: 0,
              explanation: 'Left-most acts last.'
            },
            {
              type: 'output-predict',
              prompt: '| 3 0 ; 0 3 | · (1, 2) = ?',
              code: `// scale by 3`,
              options: [
                { text: '(3, 6)', code: false },
                { text: '(1, 6)', code: false },
                { text: '(3, 2)', code: false },
                { text: '(4, 5)', code: false }
              ],
              correct: 0,
              explanation: 'Uniform scaling by 3.'
            },
            {
              type: 'fill-blank',
              prompt: '2D rotation matrix has cos θ on the diagonal and...',
              codeLines: [{ html: '| cos θ _BLANK_ sin θ |' }],
              tokens: ['-', '+', '×', '/'],
              correctAnswer: '-',
              explanation: '−sin θ in top-right.'
            }
          ]
        },
        {
          id: 'math-u21-l2',
          name: 'Where matrices show up',
          icon: '🚀',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Matrices in the real world',
              content: `<p><b>3D graphics</b>: every camera, model, projection transform is a 4×4 matrix.</p>
              <p><b>Neural networks</b>: each layer is essentially Wx + b — a matrix times a vector.</p>
              <p><b>PageRank</b>: web pages\' importance comes from an eigenvector of a huge matrix.</p>
              <p><b>Image filters</b>: convolution kernels are tiny matrices applied to pixels.</p>
              <p><b>Computer vision</b>: cameras use intrinsic and extrinsic matrices to map world ↔ image.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A dense neural-net layer computes:',
              options: [
                { text: 'Wx + b', code: false },
                { text: 'x ÷ W', code: false },
                { text: '|x|', code: false },
                { text: 'sort(x)', code: false }
              ],
              correct: 0,
              explanation: 'Linear transformation plus bias.'
            },
            {
              type: 'true-false',
              statement: '3D graphics use 4×4 matrices to combine rotation, scale, and translation.',
              correct: true,
              explanation: 'Homogeneous coordinates.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Image convolutions apply:',
              options: [
                { text: 'A small kernel matrix to pixel neighborhoods', code: false },
                { text: 'Random noise', code: false },
                { text: 'A 1D shift', code: false },
                { text: 'No matrices', code: false }
              ],
              correct: 0,
              explanation: 'Convolution = sliding kernel.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match field to matrix use.',
              leftLabel: 'Field',
              rightLabel: 'Matrix use',
              pairs: [
                { left: 'Graphics', right: 'Transformations' },
                { left: 'ML', right: 'Layers, embeddings' },
                { left: 'Search', right: 'PageRank' },
                { left: 'Vision', right: 'Convolutions' }
              ]
            },
            {
              type: 'true-false',
              statement: 'Modern GPUs are extremely fast at matrix multiplication.',
              correct: true,
              explanation: 'It is why GPUs power ML.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u22',
      name: 'Unit 22 · Sequences & Series',
      description: 'Patterns of numbers and how they sum.',
      lessons: [
        {
          id: 'math-u22-l1',
          name: 'Arithmetic & Geometric',
          icon: '🔢',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two famous sequences',
              content: `<p><b>Arithmetic</b>: add a constant d.</p>
              <div class="code-block">
              aₙ = a₁ + (n−1)d<br>
              Sum: Sₙ = n·(a₁ + aₙ)/2
              </div>
              <p><b>Geometric</b>: multiply by a constant r.</p>
              <div class="code-block">
              aₙ = a₁ · r^(n−1)<br>
              Sum (r ≠ 1): Sₙ = a₁ · (rⁿ − 1) / (r − 1)
              </div>
              <p>Sum 1+2+...+n = n(n+1)/2.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'Sum 1 + 2 + ... + 100?',
              code: '',
              accept: ['5050'],
              explanation: '100·101/2 = 5050.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Sequence: 3, 6, 12, 24, ... What is the 6th term?',
              options: [
                { text: '96', code: false },
                { text: '48', code: false },
                { text: '36', code: false },
                { text: '72', code: false }
              ],
              correct: 0,
              explanation: 'Geometric r=2; a₆ = 3·2⁵ = 96.'
            },
            {
              type: 'true-false',
              statement: 'Sum 1+r+r²+... for |r|<1 converges to 1/(1−r).',
              correct: true,
              explanation: 'Infinite geometric series.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Sum of 1+2+4+8+16 = ?',
              options: [
                { text: '31', code: false },
                { text: '32', code: false },
                { text: '30', code: false },
                { text: '63', code: false }
              ],
              correct: 0,
              explanation: '(2⁵ − 1)/(2 − 1) = 31.'
            },
            {
              type: 'fill-blank',
              prompt: 'Triangular number formula.',
              codeLines: [{ html: '1 + 2 + ... + n = n(n+1)/_BLANK_' }],
              tokens: ['2', '3', '4', 'n'],
              correctAnswer: '2',
              explanation: 'Gauss\'s classic formula.'
            }
          ]
        },
        {
          id: 'math-u22-l2',
          name: 'Recurrences & Fibonacci',
          icon: '🐚',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Recurrences',
              content: `<p>A <b>recurrence</b> defines a term using previous ones.</p>
              <div class="code-block">
              Fibonacci: F(0)=0, F(1)=1, F(n)=F(n−1)+F(n−2)<br>
              → 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
              </div>
              <p>Recurrences may have <b>closed-form</b> solutions:</p>
              <div class="code-block">
              F(n) = (φⁿ − ψⁿ) / √5,  φ = (1+√5)/2
              </div>
              <p>This is Binet\'s formula.</p>
              <p>Recurrences underlie dynamic programming: solve once, reuse.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'F(7) in Fibonacci?',
              code: '',
              accept: ['13'],
              explanation: '0,1,1,2,3,5,8,13.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Fibonacci recurrence is:',
              options: [
                { text: 'F(n) = F(n-1) + F(n-2)', code: true },
                { text: 'F(n) = 2·F(n-1)', code: true },
                { text: 'F(n) = F(n-1) − F(n-2)', code: true },
                { text: 'F(n) = n!', code: true }
              ],
              correct: 0,
              explanation: 'Each is sum of previous two.'
            },
            {
              type: 'true-false',
              statement: 'Naive recursive Fibonacci is exponential in time.',
              correct: true,
              explanation: 'Without memoization, branches explode.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `function fib(n){return n<2?n:fib(n-1)+fib(n-2);}\nconsole.log(fib(6));`,
              options: [
                { text: '8', code: false },
                { text: '5', code: false },
                { text: '13', code: false },
                { text: '21', code: false }
              ],
              correct: 0,
              explanation: 'F(6) = 8.'
            },
            {
              type: 'reorder-code',
              prompt: 'Iterative Fibonacci.',
              lines: [
                'let a = 0, b = 1;',
                'for (let i = 0; i < n; i++) {',
                '  [a, b] = [b, a + b];',
                '}',
                'return a;'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'fill-blank',
              prompt: 'Closed form coefficient.',
              codeLines: [{ html: 'φ = (1 + sqrt(5)) / _BLANK_' }],
              tokens: ['2', '3', '5', '1'],
              correctAnswer: '2',
              explanation: 'Golden ratio.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u23',
      name: 'Unit 23 · Logarithms',
      description: 'The inverse of exponentiation — and why log(n) is everywhere.',
      lessons: [
        {
          id: 'math-u23-l1',
          name: 'Definition & Laws',
          icon: '🪵',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What is a logarithm?',
              content: `<p><b>log_b(x) = y</b> means b^y = x.</p>
              <p>So log₂(8) = 3 because 2³ = 8.</p>
              <div class="code-block">
              log_b(xy)   = log_b(x) + log_b(y)<br>
              log_b(x/y)  = log_b(x) - log_b(y)<br>
              log_b(x^n)  = n · log_b(x)<br>
              log_b(b)    = 1<br>
              log_b(1)    = 0
              </div>
              <p>Common bases: 2 (CS), e (natural, ln), 10 (engineering).</p>`
            },
            {
              type: 'type-answer',
              prompt: 'log₂(16) = ?',
              code: '',
              accept: ['4'],
              explanation: '2⁴ = 16.'
            },
            {
              type: 'multiple-choice',
              prompt: 'log(ab) equals:',
              options: [
                { text: 'log a + log b', code: false },
                { text: 'log a · log b', code: false },
                { text: 'log(a) / log(b)', code: false },
                { text: '(log a)(log b)', code: false }
              ],
              correct: 0,
              explanation: 'Product becomes sum.'
            },
            {
              type: 'true-false',
              statement: 'log_b(1) = 0 for any valid base b.',
              correct: true,
              explanation: 'b⁰ = 1.'
            },
            {
              type: 'type-answer',
              prompt: 'log₁₀(1000)?',
              code: '',
              accept: ['3'],
              explanation: '10³ = 1000.'
            },
            {
              type: 'fill-blank',
              prompt: 'Power law.',
              codeLines: [{ html: 'log(x^n) = n _BLANK_ log(x)' }],
              tokens: ['·', '+', '-', '/'],
              correctAnswer: '·',
              explanation: 'Bring exponent down as multiplier.'
            }
          ]
        },
        {
          id: 'math-u23-l2',
          name: 'Why logs in algorithms',
          icon: '⏱️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Logs and divide-and-conquer',
              content: `<p>If an algorithm halves the input each step, it runs in <b>O(log n)</b> time.</p>
              <p>Binary search on a sorted array of 1,000,000 takes at most 20 steps (log₂(10⁶) ≈ 20).</p>
              <p>Other O(log n) operations: balanced BST insert/find, heap insert.</p>
              <p>Stacked logs: <b>O(log log n)</b> is even faster.</p>
              <p>Beware: log without a base in CS usually means log₂; in math, log usually means log₁₀ or ln.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Binary search on n items takes:',
              options: [
                { text: 'O(log n)', code: false },
                { text: 'O(n)', code: false },
                { text: 'O(n log n)', code: false },
                { text: 'O(1)', code: false }
              ],
              correct: 0,
              explanation: 'Halve the search range each step.'
            },
            {
              type: 'true-false',
              statement: 'log₂(1024) = 10.',
              correct: true,
              explanation: '2¹⁰ = 1024.'
            },
            {
              type: 'multiple-choice',
              prompt: 'log₂(n) grows ___ than √n.',
              options: [
                { text: 'Slower', code: false },
                { text: 'Faster', code: false },
                { text: 'Same', code: false },
                { text: 'Cannot compare', code: false }
              ],
              correct: 0,
              explanation: 'Logs grow more slowly than any positive power.'
            },
            {
              type: 'output-predict',
              prompt: 'How many comparisons to binary-search a sorted array of 1024 items in the worst case?',
              code: `// log2(1024)`,
              options: [
                { text: '10', code: false },
                { text: '1024', code: false },
                { text: '20', code: false },
                { text: '512', code: false }
              ],
              correct: 0,
              explanation: 'log₂(1024) = 10.'
            },
            {
              type: 'fill-blank',
              prompt: 'Logarithm change-of-base.',
              codeLines: [{ html: 'log_b(x) = log_a(x) / log_a(_BLANK_)' }],
              tokens: ['b', 'x', 'a', 'e'],
              correctAnswer: 'b',
              explanation: 'Divide by log of the new base.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u24',
      name: 'Unit 24 · Big O Math',
      description: 'Comparing growth rates.',
      lessons: [
        {
          id: 'math-u24-l1',
          name: 'Growth Rates',
          icon: '📈',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'How fast functions grow',
              content: `<p>From slow to fast, common orders:</p>
              <div class="code-block">
              1  &lt;  log n  &lt;  √n  &lt;  n  &lt;  n log n  &lt;  n²  &lt;  n³  &lt;  2ⁿ  &lt;  n!
              </div>
              <p>For large n, the higher-order term dominates: O(n² + 100n) = O(n²).</p>
              <p>Constants are dropped: O(3n) = O(n).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which grows fastest for large n?',
              options: [
                { text: 'n!', code: false },
                { text: '2ⁿ', code: false },
                { text: 'n²', code: false },
                { text: 'n log n', code: false }
              ],
              correct: 0,
              explanation: 'Factorial dominates.'
            },
            {
              type: 'true-false',
              statement: 'O(2n) = O(n).',
              correct: true,
              explanation: 'Constants drop in Big O.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Order from slow to fast:',
              options: [
                { text: 'log n, n, n², 2ⁿ', code: false },
                { text: '2ⁿ, n², n, log n', code: false },
                { text: 'n, log n, 2ⁿ, n²', code: false },
                { text: 'n², 2ⁿ, n, log n', code: false }
              ],
              correct: 0,
              explanation: 'Standard ordering.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match algorithm to time.',
              leftLabel: 'Algorithm',
              rightLabel: 'Big-O',
              pairs: [
                { left: 'Binary search', right: 'O(log n)' },
                { left: 'Merge sort', right: 'O(n log n)' },
                { left: 'Bubble sort', right: 'O(n²)' },
                { left: 'Hash lookup', right: 'O(1) avg' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'O(n² + 5n + 7) simplifies to:',
              codeLines: [{ html: 'O(_BLANK_)' }],
              tokens: ['n²', 'n', 'log n', 'n³'],
              correctAnswer: 'n²',
              explanation: 'Keep the dominant term.'
            }
          ]
        },
        {
          id: 'math-u24-l2',
          name: 'Log & Exp identities',
          icon: '🧪',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Useful identities',
              content: `<p>Important for algorithm analysis:</p>
              <div class="code-block">
              2^(log₂ n) = n<br>
              log(2ⁿ)    = n<br>
              n^(log_n 2) = 2<br>
              a^b · a^c  = a^(b+c)<br>
              (a^b)^c    = a^(bc)
              </div>
              <p>Logs let us turn a multiplicative recurrence (T(n) = T(n/2) + 1) into a linear one (log n steps).</p>`
            },
            {
              type: 'type-answer',
              prompt: 'Simplify 2^(log₂ 8).',
              code: '',
              accept: ['8'],
              explanation: 'Exponential and log cancel.'
            },
            {
              type: 'multiple-choice',
              prompt: 'log(2^n)?',
              options: [
                { text: 'n', code: false },
                { text: '2n', code: false },
                { text: 'log 2', code: false },
                { text: 'log n', code: false }
              ],
              correct: 0,
              explanation: 'Bring n down.'
            },
            {
              type: 'true-false',
              statement: '(a^b)^c = a^(b+c).',
              correct: false,
              explanation: 'It equals a^(b·c).'
            },
            {
              type: 'multiple-choice',
              prompt: 'a^b · a^c = ?',
              options: [
                { text: 'a^(b+c)', code: false },
                { text: 'a^(b·c)', code: false },
                { text: '(2a)^(b+c)', code: false },
                { text: 'a^bc', code: false }
              ],
              correct: 0,
              explanation: 'Same base — add exponents.'
            },
            {
              type: 'fill-blank',
              prompt: 'Exponent rule.',
              codeLines: [{ html: '(a^b)^c = a^_BLANK_' }],
              tokens: ['(b·c)', '(b+c)', 'bc/(b+c)', 'b/c'],
              correctAnswer: '(b·c)',
              explanation: 'Multiply exponents.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u25',
      name: 'Unit 25 · Calculus — Derivatives Intuition',
      description: 'Slope of a curve = rate of change.',
      lessons: [
        {
          id: 'math-u25-l1',
          name: 'What is a derivative?',
          icon: '📉',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Slope at a point',
              content: `<p>The <b>derivative</b> f\'(x) is the slope of f at x — the instantaneous rate of change.</p>
              <div class="code-block">
              f\'(x) ≈ (f(x+h) - f(x)) / h    as h → 0
              </div>
              <p>For a position function, the derivative is velocity.</p>
              <p>Basic rules:</p>
              <ul>
                <li>(c)\' = 0</li>
                <li>(xⁿ)\' = n · x^(n−1)</li>
                <li>(f + g)\' = f\' + g\'</li>
                <li>(c · f)\' = c · f\'</li>
              </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Derivative of x³?',
              options: [
                { text: '3x²', code: false },
                { text: 'x²', code: false },
                { text: '3x', code: false },
                { text: 'x³/3', code: false }
              ],
              correct: 0,
              explanation: 'Power rule.'
            },
            {
              type: 'type-answer',
              prompt: 'Derivative of 5?',
              code: '',
              accept: ['0'],
              explanation: 'Constants have zero slope.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Derivative of 2x² + 3x?',
              options: [
                { text: '4x + 3', code: false },
                { text: '2x + 3', code: false },
                { text: '4x', code: false },
                { text: '4x + 3x', code: false }
              ],
              correct: 0,
              explanation: 'Power rule on each term.'
            },
            {
              type: 'true-false',
              statement: 'Derivative measures slope at a single point.',
              correct: true,
              explanation: 'Instantaneous rate.'
            },
            {
              type: 'fill-blank',
              prompt: 'Power rule.',
              codeLines: [{ html: '(x^n)\' = n · x^_BLANK_' }],
              tokens: ['(n-1)', 'n', '(n+1)', '1'],
              correctAnswer: '(n-1)',
              explanation: 'Standard power rule.'
            }
          ]
        },
        {
          id: 'math-u25-l2',
          name: 'Why derivatives matter (ML)',
          icon: '🤖',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Derivatives in machine learning',
              content: `<p>Training a model means minimizing a <b>loss function</b> L(w).</p>
              <p>The derivative tells us which direction to push the weights to decrease L.</p>
              <div class="code-block">
              w ← w − η · L\'(w)    <span class="com">// gradient descent step</span>
              </div>
              <p>η (learning rate) controls step size.</p>
              <p>If L\'(w) > 0, slope is up — decreasing w decreases L. If L\'(w) < 0, increase w.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Gradient descent moves weights in direction of:',
              options: [
                { text: 'Negative gradient', code: false },
                { text: 'Positive gradient', code: false },
                { text: 'Zero', code: false },
                { text: 'Random direction', code: false }
              ],
              correct: 0,
              explanation: 'Downhill on the loss surface.'
            },
            {
              type: 'true-false',
              statement: 'A learning rate that is too large can overshoot the minimum.',
              correct: true,
              explanation: 'Big steps miss the valley.'
            },
            {
              type: 'multiple-choice',
              prompt: 'At a local minimum of L, the derivative L\'(w) is:',
              options: [
                { text: '0', code: false },
                { text: 'Positive', code: false },
                { text: 'Negative', code: false },
                { text: 'Undefined', code: false }
              ],
              correct: 0,
              explanation: 'Tangent is horizontal at minima.'
            },
            {
              type: 'reorder-code',
              prompt: 'Gradient descent step.',
              lines: [
                'compute loss L(w)',
                'compute gradient g = L\'(w)',
                'w = w - learningRate * g'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'fill-blank',
              prompt: 'Gradient descent update.',
              codeLines: [{ html: 'w = w _BLANK_ η · L\'(w)' }],
              tokens: ['-', '+', '×', '/'],
              correctAnswer: '-',
              explanation: 'Subtract to go downhill.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u26',
      name: 'Unit 26 · Gradients & Optimization',
      description: 'From slopes to vectors — multi-dim gradient descent.',
      lessons: [
        {
          id: 'math-u26-l1',
          name: 'Gradients & Gradient Descent',
          icon: '⛰️',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'The gradient',
              content: `<p>For a function of several variables, the <b>gradient</b> ∇f is the vector of partial derivatives.</p>
              <div class="code-block">
              f(x, y) = x² + y²<br>
              ∇f = (2x, 2y)
              </div>
              <p>The gradient points in the direction of steepest increase.</p>
              <p><b>Gradient descent</b>: move opposite to the gradient.</p>
              <div class="code-block">
              w ← w − η · ∇L(w)
              </div>
              <p>For a 2D bowl, this walks you toward the bottom.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Gradient of f(x, y) = x² + y² at (1, 2)?',
              options: [
                { text: '(2, 4)', code: false },
                { text: '(1, 2)', code: false },
                { text: '(4, 2)', code: false },
                { text: '(0, 0)', code: false }
              ],
              correct: 0,
              explanation: '∂f/∂x=2x, ∂f/∂y=2y at (1,2).'
            },
            {
              type: 'true-false',
              statement: 'At a minimum of f, the gradient ∇f = 0.',
              correct: true,
              explanation: 'Critical point condition.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Gradient descent in n dimensions:',
              options: [
                { text: 'Subtracts η times the gradient vector', code: false },
                { text: 'Adds the gradient', code: false },
                { text: 'Multiplies by gradient', code: false },
                { text: 'Ignores gradients', code: false }
              ],
              correct: 0,
              explanation: 'Same idea as 1D, vector form.'
            },
            {
              type: 'true-false',
              statement: 'The gradient points toward steepest ASCENT.',
              correct: true,
              explanation: 'Negate to descend.'
            },
            {
              type: 'fill-blank',
              prompt: 'GD update.',
              codeLines: [{ html: 'w = w - η · _BLANK_' }],
              tokens: ['∇L(w)', 'L(w)', 'w', '1'],
              correctAnswer: '∇L(w)',
              explanation: 'Subtract the gradient.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use mini-batch instead of full gradient?',
              options: [
                { text: 'Faster, less memory, helps escape some saddle points', code: false },
                { text: 'Always more accurate', code: false },
                { text: 'Required by chain rule', code: false },
                { text: 'Avoids derivatives', code: false }
              ],
              correct: 0,
              explanation: 'Stochastic GD is standard in deep learning.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u27',
      name: 'Unit 27 · Graphs',
      description: 'Vertices and edges — model anything that connects.',
      lessons: [
        {
          id: 'math-u27-l1',
          name: 'Graph basics',
          icon: '🕸️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Vertices, edges, paths',
              content: `<p>A <b>graph</b> G = (V, E) has vertices V and edges E connecting pairs.</p>
              <ul>
                <li><b>Undirected</b>: edges have no direction.</li>
                <li><b>Directed (digraph)</b>: edges have arrows.</li>
                <li><b>Weighted</b>: each edge has a number.</li>
                <li><b>Path</b>: sequence of edges visiting distinct vertices.</li>
                <li><b>Cycle</b>: a path that returns to its start.</li>
              </ul>
              <p>Examples: social networks, road maps, web links, code dependencies.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A simple graph with 4 vertices has at most how many undirected edges?',
              options: [
                { text: '6', code: false },
                { text: '4', code: false },
                { text: '8', code: false },
                { text: '12', code: false }
              ],
              correct: 0,
              explanation: 'C(4,2) = 6.'
            },
            {
              type: 'true-false',
              statement: 'A cycle is a path that returns to its starting vertex.',
              correct: true,
              explanation: 'By definition.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A directed graph has edges that:',
              options: [
                { text: 'Have a direction (from → to)', code: false },
                { text: 'Are unordered', code: false },
                { text: 'Connect three vertices', code: false },
                { text: 'Must be weighted', code: false }
              ],
              correct: 0,
              explanation: 'Arrows replace lines.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match real-world examples to graph type.',
              leftLabel: 'Example',
              rightLabel: 'Graph',
              pairs: [
                { left: 'Twitter follows', right: 'Directed' },
                { left: 'Friendships', right: 'Undirected' },
                { left: 'Road map with distances', right: 'Weighted' },
                { left: 'Web links', right: 'Directed' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Edges in a complete graph K_n.',
              codeLines: [{ html: '|E(K_n)| = n(n-1)/_BLANK_' }],
              tokens: ['2', '3', '1', 'n'],
              correctAnswer: '2',
              explanation: 'Each unordered pair, divide by 2.'
            }
          ]
        },
        {
          id: 'math-u27-l2',
          name: 'Connectedness & counting',
          icon: '🔗',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Connected components',
              content: `<p>A graph is <b>connected</b> if every pair of vertices has a path between them.</p>
              <p>Otherwise it splits into <b>connected components</b>.</p>
              <p>Sum of degrees = 2 · |E| (handshake lemma).</p>
              <p>Number of edges:</p>
              <ul>
                <li>Min connected graph on n vertices: n − 1 edges (a tree).</li>
                <li>Max simple undirected: n(n−1)/2 (complete graph).</li>
              </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Sum of degrees in a graph with 5 edges?',
              options: [
                { text: '10', code: false },
                { text: '5', code: false },
                { text: '25', code: false },
                { text: '0', code: false }
              ],
              correct: 0,
              explanation: 'Twice the edge count.'
            },
            {
              type: 'true-false',
              statement: 'A connected graph on n vertices has at least n − 1 edges.',
              correct: true,
              explanation: 'A tree is the minimum-edge connected graph.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A graph with 0 edges and 5 vertices has how many connected components?',
              options: [
                { text: '5', code: false },
                { text: '1', code: false },
                { text: '0', code: false },
                { text: '10', code: false }
              ],
              correct: 0,
              explanation: 'Each vertex is its own component.'
            },
            {
              type: 'type-answer',
              prompt: 'Edges in K₅ (complete graph on 5 vertices)?',
              code: '',
              accept: ['10'],
              explanation: '5·4/2 = 10.'
            },
            {
              type: 'fill-blank',
              prompt: 'Handshake lemma.',
              codeLines: [{ html: 'Σ deg(v) = _BLANK_ · |E|' }],
              tokens: ['2', '1', 'n', '0.5'],
              correctAnswer: '2',
              explanation: 'Every edge contributes to two endpoints.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u28',
      name: 'Unit 28 · Trees',
      description: 'Special graphs without cycles.',
      lessons: [
        {
          id: 'math-u28-l1',
          name: 'Trees & Binary trees',
          icon: '🌳',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Rooted trees',
              content: `<p>A <b>tree</b> is a connected, acyclic graph. A <b>rooted tree</b> has one distinguished vertex (the root).</p>
              <ul>
                <li>Each non-root vertex has exactly one parent.</li>
                <li>A <b>leaf</b> has no children.</li>
                <li><b>Depth</b> of a node: distance from root. <b>Height</b>: max depth.</li>
              </ul>
              <p><b>Binary tree</b>: each node has at most 2 children.</p>
              <p>A binary tree of height h has up to 2^(h+1) − 1 nodes.</p>
              <p>Counts: number of distinct binary tree shapes with n nodes = Catalan number Cₙ.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A tree with n vertices has how many edges?',
              options: [
                { text: 'n − 1', code: false },
                { text: 'n', code: false },
                { text: 'n + 1', code: false },
                { text: '2n', code: false }
              ],
              correct: 0,
              explanation: 'Exactly n−1.'
            },
            {
              type: 'true-false',
              statement: 'Trees can contain cycles.',
              correct: false,
              explanation: 'Trees are acyclic by definition.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Max nodes in a binary tree of height 3?',
              options: [
                { text: '15', code: false },
                { text: '8', code: false },
                { text: '7', code: false },
                { text: '31', code: false }
              ],
              correct: 0,
              explanation: '2^(3+1) − 1 = 15.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How many distinct binary tree shapes with 3 nodes?',
              options: [
                { text: '5', code: false },
                { text: '6', code: false },
                { text: '3', code: false },
                { text: '8', code: false }
              ],
              correct: 0,
              explanation: 'C₃ = 5 (Catalan).'
            },
            {
              type: 'true-false',
              statement: 'In a tree, there is exactly one path between any two vertices.',
              correct: true,
              explanation: 'Unique simple paths.'
            },
            {
              type: 'fill-blank',
              prompt: 'Edges in a tree.',
              codeLines: [{ html: '|E| = _BLANK_ - 1' }],
              tokens: ['n', '2n', 'n+1', 'log n'],
              correctAnswer: 'n',
              explanation: 'One less than the vertex count.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u29',
      name: 'Unit 29 · Number Theory — Primes',
      description: 'The atoms of integers.',
      lessons: [
        {
          id: 'math-u29-l1',
          name: 'Primes & the Sieve',
          icon: '🧬',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'What is a prime?',
              content: `<p>A <b>prime</b> is an integer p > 1 with no divisors other than 1 and p.</p>
              <p>Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...</p>
              <p>1 is not prime; 2 is the only even prime.</p>
              <p>The <b>sieve of Eratosthenes</b> finds all primes up to n in roughly O(n log log n):</p>
              <ol>
                <li>List 2..n.</li>
                <li>For each unmarked p, mark p², p²+p, p²+2p, ... as composite.</li>
                <li>Remaining unmarked are prime.</li>
              </ol>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is prime?',
              options: [
                { text: '17', code: false },
                { text: '15', code: false },
                { text: '21', code: false },
                { text: '9', code: false }
              ],
              correct: 0,
              explanation: '17 has only 1 and 17 as divisors.'
            },
            {
              type: 'true-false',
              statement: '1 is a prime number.',
              correct: false,
              explanation: 'By convention, 1 is not prime.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Sieve of Eratosthenes complexity?',
              options: [
                { text: 'O(n log log n)', code: false },
                { text: 'O(n²)', code: false },
                { text: 'O(log n)', code: false },
                { text: 'O(n!)', code: false }
              ],
              correct: 0,
              explanation: 'Nearly linear in n.'
            },
            {
              type: 'output-predict',
              prompt: 'Primes ≤ 20?',
              code: `// 2,3,5,7,11,13,17,19`,
              options: [
                { text: '8 primes', code: false },
                { text: '7 primes', code: false },
                { text: '9 primes', code: false },
                { text: '10 primes', code: false }
              ],
              correct: 0,
              explanation: '2,3,5,7,11,13,17,19.'
            },
            {
              type: 'fill-blank',
              prompt: 'Sieve marks multiples starting at...',
              codeLines: [{ html: 'for (let j = _BLANK_; j &lt;= n; j += p) markComposite(j);' }],
              tokens: ['p*p', 'p+1', '2*p', '0'],
              correctAnswer: 'p*p',
              explanation: 'Smaller multiples were already marked by smaller primes.'
            }
          ]
        },
        {
          id: 'math-u29-l2',
          name: 'Unique Factorization',
          icon: '🧪',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Fundamental theorem of arithmetic',
              content: `<p>Every integer > 1 factors uniquely as a product of primes (up to order).</p>
              <div class="code-block">
              60 = 2² × 3 × 5<br>
              84 = 2² × 3 × 7<br>
              97 = 97        <span class="com">// itself prime</span>
              </div>
              <p>This unique factorization underlies GCD, LCM, modular arithmetic, and cryptography.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Prime factorization of 60?',
              options: [
                { text: '2² × 3 × 5', code: false },
                { text: '2 × 30', code: false },
                { text: '6 × 10', code: false },
                { text: '4 × 15', code: false }
              ],
              correct: 0,
              explanation: 'Prime form is unique.'
            },
            {
              type: 'true-false',
              statement: 'Every integer > 1 has a unique prime factorization.',
              correct: true,
              explanation: 'Fundamental theorem of arithmetic.'
            },
            {
              type: 'type-answer',
              prompt: 'How many distinct primes divide 60?',
              code: '',
              accept: ['3'],
              explanation: '2, 3, and 5.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Prime factorization of 100?',
              options: [
                { text: '2² × 5²', code: false },
                { text: '4 × 25', code: false },
                { text: '10²', code: false },
                { text: '2³ × 5', code: false }
              ],
              correct: 0,
              explanation: 'Primes only.'
            },
            {
              type: 'fill-blank',
              prompt: 'Factor 84.',
              codeLines: [{ html: '84 = 2² × 3 × _BLANK_' }],
              tokens: ['7', '5', '11', '4'],
              correctAnswer: '7',
              explanation: '84 = 4·21 = 2²·3·7.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u30',
      name: 'Unit 30 · GCD & LCM',
      description: 'Greatest common divisor and least common multiple.',
      lessons: [
        {
          id: 'math-u30-l1',
          name: 'Euclid\'s GCD',
          icon: '🌀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The Euclidean algorithm',
              content: `<p><b>gcd(a, b)</b> is the largest integer dividing both a and b.</p>
              <p>Euclid: gcd(a, b) = gcd(b, a mod b), with gcd(a, 0) = a.</p>
              <div class="code-block">
              gcd(48, 18)<br>
              = gcd(18, 12)   <span class="com">// 48 mod 18 = 12</span><br>
              = gcd(12, 6)    <span class="com">// 18 mod 12 = 6</span><br>
              = gcd(6, 0) = 6
              </div>
              <p>Runs in O(log(min(a, b))) — extremely fast.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'gcd(24, 36)?',
              code: '',
              accept: ['12'],
              explanation: '24 = 2³·3, 36 = 2²·3² → 2²·3 = 12.'
            },
            {
              type: 'multiple-choice',
              prompt: 'gcd(7, 13)?',
              options: [
                { text: '1', code: false },
                { text: '7', code: false },
                { text: '13', code: false },
                { text: '91', code: false }
              ],
              correct: 0,
              explanation: 'Coprime.'
            },
            {
              type: 'true-false',
              statement: 'gcd(a, 0) = a.',
              correct: true,
              explanation: 'Every integer divides 0.'
            },
            {
              type: 'reorder-code',
              prompt: 'Iterative GCD.',
              lines: [
                'while (b !== 0) {',
                '  [a, b] = [b, a % b];',
                '}',
                'return a;'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'output-predict',
              prompt: 'gcd(100, 75)?',
              code: `// Euclid`,
              options: [
                { text: '25', code: false },
                { text: '5', code: false },
                { text: '50', code: false },
                { text: '100', code: false }
              ],
              correct: 0,
              explanation: '100 mod 75 = 25; gcd(75,25)=25.'
            },
            {
              type: 'fill-blank',
              prompt: 'Recursion.',
              codeLines: [{ html: 'gcd(a, b) = gcd(b, a _BLANK_ b)' }],
              tokens: ['%', '/', '-', '+'],
              correctAnswer: '%',
              explanation: 'Replace by remainder.'
            }
          ]
        },
        {
          id: 'math-u30-l2',
          name: 'LCM & Bezout',
          icon: '🧾',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'LCM and Bezout',
              content: `<p><b>lcm(a, b)</b> is the smallest positive multiple of both.</p>
              <div class="code-block">
              lcm(a, b) = a · b / gcd(a, b)
              </div>
              <p><b>Bezout\'s identity</b>: there exist integers x, y with</p>
              <div class="code-block">
              a · x + b · y = gcd(a, b)
              </div>
              <p>The extended Euclidean algorithm finds these x, y — essential for modular inverses.</p>`
            },
            {
              type: 'type-answer',
              prompt: 'lcm(4, 6)?',
              code: '',
              accept: ['12'],
              explanation: '4·6 / gcd(4,6) = 24/2 = 12.'
            },
            {
              type: 'multiple-choice',
              prompt: 'gcd(a,b) · lcm(a,b) = ?',
              options: [
                { text: 'a · b', code: false },
                { text: 'a + b', code: false },
                { text: 'a − b', code: false },
                { text: 'gcd(a, b)²', code: false }
              ],
              correct: 0,
              explanation: 'Useful identity.'
            },
            {
              type: 'true-false',
              statement: 'lcm(a, b) ≥ max(a, b).',
              correct: true,
              explanation: 'It must be a multiple of both.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Bezout for gcd(6, 9) = 3 gives integers x, y with 6x + 9y = 3. One example:',
              options: [
                { text: 'x = -1, y = 1', code: false },
                { text: 'x = 1, y = 1', code: false },
                { text: 'x = 0, y = 0', code: false },
                { text: 'x = 2, y = 3', code: false }
              ],
              correct: 0,
              explanation: '−6 + 9 = 3.'
            },
            {
              type: 'fill-blank',
              prompt: 'LCM formula.',
              codeLines: [{ html: 'lcm(a, b) = a · b / _BLANK_' }],
              tokens: ['gcd(a,b)', 'a+b', 'a-b', 'max(a,b)'],
              correctAnswer: 'gcd(a,b)',
              explanation: 'Standard identity.'
            },
            {
              type: 'type-answer',
              prompt: 'lcm(12, 18)?',
              code: '',
              accept: ['36'],
              explanation: '12·18/6 = 36.'
            }
          ]
        }
      ]
    },
    {
      id: 'math-u31',
      name: 'Unit 31 · Modular Inverse & Fermat',
      description: 'Dividing in modular arithmetic — and why RSA works.',
      lessons: [
        {
          id: 'math-u31-l1',
          name: 'Modular Inverse & Fermat',
          icon: '🔐',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'Inverses mod n',
              content: `<p>The <b>modular inverse</b> of a mod n is the integer x such that</p>
              <div class="code-block">
              a · x ≡ 1 (mod n)
              </div>
              <p>Exists iff gcd(a, n) = 1.</p>
              <p>Example: 3 · 5 = 15 ≡ 1 (mod 7), so 5 is the inverse of 3 mod 7.</p>
              <p><b>Fermat\'s Little Theorem</b>: if p is prime and p ∤ a, then</p>
              <div class="code-block">
              a^(p-1) ≡ 1 (mod p)
              </div>
              <p>So a^(p-2) is the inverse of a mod p.</p>
              <p>This (plus modular exponentiation and large primes) is the seed of RSA encryption.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'When does a have an inverse mod n?',
              options: [
                { text: 'When gcd(a, n) = 1', code: false },
                { text: 'When a is prime', code: false },
                { text: 'When n is even', code: false },
                { text: 'Always', code: false }
              ],
              correct: 0,
              explanation: 'Coprime requirement.'
            },
            {
              type: 'type-answer',
              prompt: 'Inverse of 3 mod 7?',
              code: '',
              accept: ['5'],
              explanation: '3·5 = 15 = 2·7+1.'
            },
            {
              type: 'true-false',
              statement: 'Fermat\'s little theorem: a^p ≡ a (mod p) for prime p.',
              correct: true,
              explanation: 'Equivalent statement.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Using Fermat, inverse of a mod prime p equals:',
              options: [
                { text: 'a^(p−2) mod p', code: false },
                { text: 'a · p', code: false },
                { text: 'p − a', code: false },
                { text: 'a^p', code: false }
              ],
              correct: 0,
              explanation: 'a · a^(p−2) = a^(p−1) ≡ 1.'
            },
            {
              type: 'true-false',
              statement: 'RSA encryption relies on the difficulty of factoring large products of primes.',
              correct: true,
              explanation: 'No fast factoring algorithm is known (classically).'
            },
            {
              type: 'fill-blank',
              prompt: 'Fermat.',
              codeLines: [{ html: 'a^(p-1) ≡ _BLANK_ (mod p)' }],
              tokens: ['1', 'a', '0', 'p'],
              correctAnswer: '1',
              explanation: 'Fermat\'s little theorem.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use Fermat for modular inverse?',
              options: [
                { text: 'Lets us compute the inverse with fast modular exponentiation', code: false },
                { text: 'It avoids primes', code: false },
                { text: 'It works for any n', code: false },
                { text: 'It is faster than addition', code: false }
              ],
              correct: 0,
              explanation: 'Clean and efficient for prime moduli.'
            }
          ]
        }
      ]
    }
  ]
});

PUSH({
  id: "aptitude",
  name: "Aptitude",
  icon: "🔢",
  color: "#ff6f61",
  description: "Quantitative aptitude — speed, accuracy, and shortcuts for placements & exams.",
  units: [
    {
      id: "apt-u1",
      name: "Unit 1 · Number Basics",
      description: "Divisibility, factors, multiples, HCF and LCM.",
      lessons: [
        {
          id: "apt-u1-l1",
          name: "Divisibility Rules",
          icon: "➗",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Divisibility shortcuts",
              content: `<p>Instead of doing long division, use quick rules to check if a number is divisible by another.</p>
              <ul>
                <li>By <strong>2</strong> — last digit is even (0,2,4,6,8).</li>
                <li>By <strong>3</strong> — sum of digits divisible by 3.</li>
                <li>By <strong>4</strong> — last two digits divisible by 4.</li>
                <li>By <strong>5</strong> — last digit 0 or 5.</li>
                <li>By <strong>6</strong> — divisible by both 2 and 3.</li>
                <li>By <strong>9</strong> — sum of digits divisible by 9.</li>
                <li>By <strong>10</strong> — last digit 0.</li>
                <li>By <strong>11</strong> — alternating sum of digits divisible by 11.</li>
              </ul>
              <div class="code-block"><span class="com">// Is 1782 divisible by 9?</span>
<span class="com">// Sum of digits = 1+7+8+2 = 18</span>
<span class="com">// 18 / 9 = 2 → YES, 1782 is divisible by 9.</span></div>`
            },
            {
              type: "multiple-choice",
              prompt: "Which of these is divisible by 3?",
              options: [
                {
                  text: "124",
                  code: false
                },
                {
                  text: "231",
                  code: false
                },
                {
                  text: "407",
                  code: false
                },
                {
                  text: "518",
                  code: false
                }
              ],
              correct: 1,
              explanation: "2+3+1 = 6, which is divisible by 3, so 231 is divisible by 3."
            },
            {
              type: "true-false",
              statement: "4560 is divisible by 4.",
              correct: true,
              explanation: "Last two digits are 60, and 60 ÷ 4 = 15, so yes."
            },
            {
              type: "fill-blank",
              prompt: "Complete the divisibility rule for 9.",
              codeLines: [
                {
                  html: "A number is divisible by <span class=\"num\">9</span> if the sum of its digits is divisible by <span class=\"num\">_BLANK_</span>."
                }
              ],
              tokens: ["9", "3", "11", "6"],
              correctAnswer: "9",
              explanation: "For divisibility by 9, the digit sum itself must be divisible by 9."
            },
            {
              type: "multiple-choice",
              prompt: "Is 627 divisible by 11?",
              options: [
                {
                  text: "Yes — alternating sum 6 - 2 + 7 = 11",
                  code: false
                },
                {
                  text: "No",
                  code: false
                },
                {
                  text: "Only if you also check 3",
                  code: false
                },
                {
                  text: "Cannot tell without dividing",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Alternating sum = 6 - 2 + 7 = 11. Since 11 is divisible by 11, yes."
            },
            {
              type: "tap-tokens",
              prompt: "Order the steps to test divisibility by 6.",
              tokens: ["Check", "divisibility", "by", "2", "and", "3", "5", "or"],
              correctOrder: ["Check", "divisibility", "by", "2", "and", "3"],
              explanation: "A number is divisible by 6 only if it is divisible by both 2 and 3."
            },
            {
              type: "type-answer",
              prompt: "What is the smallest 3-digit number divisible by 5?",
              accept: ["100"],
              explanation: "100 ends in 0, so it is divisible by 5 and is the smallest 3-digit such number."
            }
          ]
        },
        {
          id: "apt-u1-l2",
          name: "Factors & Multiples",
          icon: "🧩",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Factors and multiples",
              content: `<p>A <strong>factor</strong> divides a number exactly. A <strong>multiple</strong> is the product of a number with any whole number.</p>
              <p>Example — factors of 12: 1, 2, 3, 4, 6, 12.</p>
              <p>Multiples of 4: 4, 8, 12, 16, 20, 24, ...</p>
              <div class="code-block"><span class="com">// To list factors of N:</span>
<span class="com">// 1. Loop from 1 to √N</span>
<span class="com">// 2. If i divides N, add i and N/i</span>
<span class="com">// Factors of 36 → 1,2,3,4,6,9,12,18,36</span></div>
              <p>A number is <strong>prime</strong> if it has only 2 factors (1 and itself).</p>`
            },
            {
              type: "multiple-choice",
              prompt: "How many factors does 24 have?",
              options: [
                {
                  text: "6",
                  code: false
                },
                {
                  text: "8",
                  code: false
                },
                {
                  text: "10",
                  code: false
                },
                {
                  text: "12",
                  code: false
                }
              ],
              correct: 1,
              explanation: "Factors: 1, 2, 3, 4, 6, 8, 12, 24 → 8 factors."
            },
            {
              type: "type-answer",
              prompt: "What is the smallest prime number?",
              accept: ["2"],
              explanation: "2 is the smallest and only even prime."
            },
            {
              type: "true-false",
              statement: "1 is a prime number.",
              correct: false,
              explanation: "1 has only one factor (itself), so it is neither prime nor composite."
            },
            {
              type: "fill-blank",
              prompt: "Fill in the next multiple.",
              codeLines: [
                {
                  html: "Multiples of 7: 7, 14, 21, 28, <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["35", "34", "36", "49"],
              correctAnswer: "35",
              explanation: "28 + 7 = 35."
            },
            {
              type: "match-pairs",
              prompt: "Match each number to its number of factors.",
              leftLabel: "Number",
              rightLabel: "Factors",
              pairs: [
                {
                  left: "10",
                  right: "4"
                },
                {
                  left: "16",
                  right: "5"
                },
                {
                  left: "25",
                  right: "3"
                },
                {
                  left: "7",
                  right: "2"
                }
              ]
            },
            {
              type: "type-answer",
              prompt: "What is the sum of factors of 12?",
              code: `<div class="code-block">Factors of 12: 1, 2, 3, 4, 6, 12
Sum = 1+2+3+4+6+12 = ?</div>`,
              accept: ["28"],
              explanation: "1+2+3+4+6+12 = 28."
            }
          ]
        },
        {
          id: "apt-u1-l3",
          name: "HCF & LCM",
          icon: "🔗",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "HCF and LCM",
              content: `<p><strong>HCF</strong> (highest common factor) is the largest number that divides each of the given numbers.</p>
              <p><strong>LCM</strong> (lowest common multiple) is the smallest number that is a multiple of each.</p>
              <div class="code-block"><span class="com">// HCF and LCM of 12 and 18</span>
12 = 2² × 3
18 = 2 × 3²
<span class="com">// HCF — take lowest power of each common prime</span>
HCF = 2¹ × 3¹ = <span class="num">6</span>
<span class="com">// LCM — take highest power of each prime</span>
LCM = 2² × 3² = <span class="num">36</span></div>
              <p>Useful identity: <strong>HCF × LCM = product of the two numbers</strong>.</p>`
            },
            {
              type: "type-answer",
              prompt: "HCF of 16 and 24?",
              accept: ["8"],
              explanation: "16 = 2⁴, 24 = 2³ × 3 → HCF = 2³ = 8."
            },
            {
              type: "type-answer",
              prompt: "LCM of 6 and 8?",
              accept: ["24"],
              explanation: "6 = 2×3, 8 = 2³ → LCM = 2³ × 3 = 24."
            },
            {
              type: "multiple-choice",
              prompt: "HCF × LCM of 9 and 12 = ?",
              options: [
                {
                  text: "108",
                  code: false
                },
                {
                  text: "36",
                  code: false
                },
                {
                  text: "21",
                  code: false
                },
                {
                  text: "72",
                  code: false
                }
              ],
              correct: 0,
              explanation: "HCF × LCM = product = 9 × 12 = 108."
            },
            {
              type: "reorder-code",
              prompt: "Order the steps to find LCM using prime factorisation.",
              lines: [
                "Take the highest power of each prime.",
                "Write each number as product of primes.",
                "Multiply selected prime powers together.",
                "List all prime factors that appear."
              ],
              correctOrder: [1, 3, 0, 2],
              explanation: "Factorise → list primes → pick highest powers → multiply."
            },
            {
              type: "tap-tokens",
              prompt: "Build the identity for two numbers a and b.",
              tokens: ["HCF", "×", "LCM", "=", "a", "b", "+", "-", "/", "×"],
              correctOrder: ["HCF", "×", "LCM", "=", "a", "×", "b"],
              explanation: "For exactly two numbers: HCF(a,b) × LCM(a,b) = a × b."
            },
            {
              type: "true-false",
              statement: "HCF of two prime numbers is always 1.",
              correct: true,
              explanation: "Different primes share no common factor other than 1."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u2",
      name: "Unit 2 · Fractions & Decimals",
      description: "Operations and conversions between fractions, decimals and percents.",
      lessons: [
        {
          id: "apt-u2-l1",
          name: "Fractions: Operations",
          icon: "🍰",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Adding, subtracting, multiplying fractions",
              content: `<p>To add or subtract fractions, take a <strong>common denominator</strong> first.</p>
              <div class="code-block">1/2 + 1/3
= 3/6 + 2/6
= <span class="num">5/6</span></div>
              <p>To multiply: multiply tops, multiply bottoms.</p>
              <div class="code-block">2/3 × 4/5 = (2×4)/(3×5) = <span class="num">8/15</span></div>
              <p>To divide: multiply by the reciprocal.</p>
              <div class="code-block">2/3 ÷ 4/5 = 2/3 × 5/4 = <span class="num">10/12</span> = <span class="num">5/6</span></div>`
            },
            {
              type: "multiple-choice",
              prompt: "What is 3/4 + 1/8?",
              options: [
                {
                  text: "7/8",
                  code: false
                },
                {
                  text: "4/12",
                  code: false
                },
                {
                  text: "1",
                  code: false
                },
                {
                  text: "5/8",
                  code: false
                }
              ],
              correct: 0,
              explanation: "3/4 = 6/8, so 6/8 + 1/8 = 7/8."
            },
            {
              type: "type-answer",
              prompt: "What is 2/5 × 5/6 (as a simplified fraction)?",
              accept: ["1/3"],
              explanation: "(2×5)/(5×6) = 10/30 = 1/3."
            },
            {
              type: "fill-blank",
              prompt: "Complete the division.",
              codeLines: [
                {
                  html: "3/4 ÷ 6/5 = 3/4 × <span class=\"num\">_BLANK_</span> = 15/24 = 5/8"
                }
              ],
              tokens: ["5/6", "6/5", "4/3", "3/5"],
              correctAnswer: "5/6",
              explanation: "Multiply by reciprocal of 6/5, which is 5/6."
            },
            {
              type: "true-false",
              statement: "To compare 3/5 and 4/7, cross-multiply: 3×7 vs 4×5.",
              correct: true,
              explanation: "21 vs 20 → 3/5 > 4/7."
            },
            {
              type: "tap-tokens",
              prompt: "Build the rule for adding 1/a + 1/b.",
              tokens: ["1/a", "+", "1/b", "=", "(a+b)", "/", "ab", "/(", "+"],
              correctOrder: ["1/a", "+", "1/b", "=", "(a+b)", "/", "ab"],
              explanation: "1/a + 1/b = (b + a) / (a·b)."
            },
            {
              type: "type-answer",
              prompt: "What is the result?",
              code: `<div class="code-block">2/3 - 1/6
= 4/6 - 1/6
= ?</div>`,
              accept: ["3/6", "1/2"],
              explanation: "4/6 - 1/6 = 3/6 = 1/2."
            }
          ]
        },
        {
          id: "apt-u2-l2",
          name: "Fraction ↔ Decimal ↔ Percent",
          icon: "🔁",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Converting between forms",
              content: `<p>Three ways to express the same number:</p>
              <div class="code-block">1/2 = 0.5 = <span class="num">50</span>%
1/4 = 0.25 = <span class="num">25</span>%
3/5 = 0.6 = <span class="num">60</span>%
1/8 = 0.125 = <span class="num">12.5</span>%</div>
              <p>To convert a fraction to a percent — multiply by 100.</p>
              <p>To convert a percent to a fraction — divide by 100 and simplify.</p>
              <p>To convert a decimal to a percent — shift the decimal two places right.</p>`
            },
            {
              type: "multiple-choice",
              prompt: "What is 3/8 as a percent?",
              options: [
                {
                  text: "37.5%",
                  code: false
                },
                {
                  text: "38%",
                  code: false
                },
                {
                  text: "30.8%",
                  code: false
                },
                {
                  text: "0.375%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "3/8 = 0.375 = 37.5%."
            },
            {
              type: "type-answer",
              prompt: "Convert 0.75 to a percent.",
              accept: ["75", "75%"],
              explanation: "0.75 × 100 = 75%."
            },
            {
              type: "match-pairs",
              prompt: "Match the fraction to its decimal.",
              leftLabel: "Fraction",
              rightLabel: "Decimal",
              pairs: [
                {
                  left: "1/5",
                  right: "0.2"
                },
                {
                  left: "3/4",
                  right: "0.75"
                },
                {
                  left: "1/8",
                  right: "0.125"
                },
                {
                  left: "2/5",
                  right: "0.4"
                }
              ]
            },
            {
              type: "fill-blank",
              prompt: "Complete the conversion chain.",
              codeLines: [
                {
                  html: "3/5 = <span class=\"num\">_BLANK_</span> = 60%"
                }
              ],
              tokens: ["0.6", "0.06", "6.0", "0.36"],
              correctAnswer: "0.6",
              explanation: "3 ÷ 5 = 0.6."
            },
            {
              type: "true-false",
              statement: "0.125 is the same as 1/8.",
              correct: true,
              explanation: "1 ÷ 8 = 0.125."
            },
            {
              type: "type-answer",
              prompt: "Which is largest?",
              code: `<div class="code-block">A) 3/4
B) 0.7
C) 72%
D) 0.075</div>`,
              accept: ["A", "3/4", "a"],
              explanation: "3/4 = 0.75, which is the largest of these."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u3",
      name: "Unit 3 · Percentages",
      description: "Percent of, increase/decrease, successive, and error percent.",
      lessons: [
        {
          id: "apt-u3-l1",
          name: "Percent of a Number",
          icon: "％",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Working out percentages",
              content: `<p>X% of N means <code>(X/100) × N</code>.</p>
              <div class="code-block"><span class="com">// 20% of 250</span>
= (20/100) × 250
= 0.20 × 250
= <span class="num">50</span></div>
              <p>Useful tricks:</p>
              <ul>
                <li><strong>10%</strong> — move the decimal one place left.</li>
                <li><strong>1%</strong> — move the decimal two places left.</li>
                <li><strong>50%</strong> — halve the number.</li>
                <li><strong>25%</strong> — quarter the number.</li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "What is 20% of 200?",
              accept: ["40", "40.0"],
              explanation: "(20/100) × 200 = 40."
            },
            {
              type: "multiple-choice",
              prompt: "What is 15% of 80?",
              options: [
                {
                  text: "12",
                  code: false
                },
                {
                  text: "8",
                  code: false
                },
                {
                  text: "15",
                  code: false
                },
                {
                  text: "20",
                  code: false
                }
              ],
              correct: 0,
              explanation: "10% of 80 is 8; 5% is 4; 15% = 8+4 = 12."
            },
            {
              type: "fill-blank",
              prompt: "Complete the calculation.",
              codeLines: [
                {
                  html: "25% of 160 = 160 ÷ <span class=\"num\">_BLANK_</span> = 40"
                }
              ],
              tokens: ["4", "2", "5", "10"],
              correctAnswer: "4",
              explanation: "25% = 1/4, so divide by 4."
            },
            {
              type: "true-false",
              statement: "50% of any number is half of it.",
              correct: true,
              explanation: "50% = 1/2."
            },
            {
              type: "type-answer",
              prompt: "If 30 is 60% of x, find x.",
              accept: ["50"],
              explanation: "x = 30 × 100 / 60 = 50."
            },
            {
              type: "tap-tokens",
              prompt: "Build the formula for X% of N.",
              tokens: ["X%", "of", "N", "=", "(X/100)", "×", "N", "+", "-"],
              correctOrder: ["X%", "of", "N", "=", "(X/100)", "×", "N"],
              explanation: "X% of N = (X/100) × N."
            }
          ]
        },
        {
          id: "apt-u3-l2",
          name: "Percent Increase & Decrease",
          icon: "📈",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Change as a percent",
              content: `<p><strong>% change = (change / original) × 100</strong>.</p>
              <div class="code-block"><span class="com">// Price rises from 200 to 250</span>
Change = 250 - 200 = <span class="num">50</span>
% increase = (50/200) × 100 = <span class="num">25</span>%</div>
              <p>To increase N by p%: multiply by <code>(1 + p/100)</code>.</p>
              <p>To decrease N by p%: multiply by <code>(1 − p/100)</code>.</p>
              <div class="code-block"><span class="com">// Increase 400 by 12%</span>
= 400 × 1.12
= <span class="num">448</span></div>`
            },
            {
              type: "type-answer",
              prompt: "A salary rises from 20000 to 25000. % increase?",
              accept: ["25", "25%"],
              explanation: "(5000/20000) × 100 = 25%."
            },
            {
              type: "multiple-choice",
              prompt: "Price falls from 80 to 60. % decrease?",
              options: [
                {
                  text: "25%",
                  code: false
                },
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "33.3%",
                  code: false
                },
                {
                  text: "40%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(20/80) × 100 = 25%."
            },
            {
              type: "true-false",
              statement: "Increasing by 20% then decreasing by 20% returns to the original.",
              correct: false,
              explanation: "100 → 120 → 96, a net 4% loss."
            },
            {
              type: "fill-blank",
              prompt: "Complete the multiplier.",
              codeLines: [
                {
                  html: "To increase by 8%, multiply by <span class=\"num\">_BLANK_</span>."
                }
              ],
              tokens: ["1.08", "0.08", "8", "0.92"],
              correctAnswer: "1.08",
              explanation: "1 + 8/100 = 1.08."
            },
            {
              type: "type-answer",
              prompt: "Find the final value.",
              code: `<div class="code-block"><span class="com">// Increase 500 by 10%, then decrease by 10%</span>
500 × 1.10 = 550
550 × 0.90 = ?</div>`,
              accept: ["495"],
              explanation: "550 × 0.9 = 495."
            },
            {
              type: "type-answer",
              prompt: "Decrease 240 by 15%.",
              accept: ["204"],
              explanation: "240 × 0.85 = 204."
            }
          ]
        },
        {
          id: "apt-u3-l3",
          name: "Successive % & Error",
          icon: "🪜",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Successive percentage change",
              content: `<p>Two changes of <code>a%</code> and <code>b%</code> combine to:</p>
              <div class="code-block">net % = a + b + (a × b)/<span class="num">100</span></div>
              <p>Use + for increases, − for decreases.</p>
              <div class="code-block"><span class="com">// +20% then +10%</span>
net = 20 + 10 + (20×10)/100
    = 30 + 2 = <span class="num">32</span>%

<span class="com">// +20% then -10%</span>
net = 20 - 10 + (20×(-10))/100
    = 10 - 2 = <span class="num">8</span>%</div>
              <p><strong>% error</strong> = (|measured − actual| / actual) × 100.</p>`
            },
            {
              type: "multiple-choice",
              prompt: "Two successive 10% increases — net change?",
              options: [
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "21%",
                  code: false
                },
                {
                  text: "22%",
                  code: false
                },
                {
                  text: "19%",
                  code: false
                }
              ],
              correct: 1,
              explanation: "10+10+(10×10)/100 = 21%."
            },
            {
              type: "type-answer",
              prompt: "Two successive 50% increases. Net % increase?",
              accept: ["125", "125%"],
              explanation: "50+50+(50×50)/100 = 125%."
            },
            {
              type: "fill-blank",
              prompt: "Fill the combined formula.",
              codeLines: [
                {
                  html: "Combined % = a + b + (a × b) / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["100", "10", "1000", "2"],
              correctAnswer: "100",
              explanation: "Divide the product by 100 because each is a percent."
            },
            {
              type: "true-false",
              statement: "A 10% increase followed by a 10% decrease gives a 1% net loss.",
              correct: true,
              explanation: "+10 -10 + (10×-10)/100 = -1%."
            },
            {
              type: "type-answer",
              prompt: "A length measured as 52 cm is actually 50 cm. % error?",
              code: `<div class="code-block">error = |52 - 50| = 2
% error = (2/50) × 100 = ?</div>`,
              accept: ["4", "4%"],
              explanation: "2/50 × 100 = 4%."
            },
            {
              type: "tap-tokens",
              prompt: "Order tokens for net % of a then b.",
              tokens: ["a", "+", "b", "(a×b)", "/", "100", "×", "-", "+"],
              correctOrder: ["a", "+", "b", "+", "(a×b)", "/", "100"],
              explanation: "a + b + (a×b)/100 is the combined % formula."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u4",
      name: "Unit 4 · Profit, Loss & Discount",
      description: "CP, SP, MP, profit/loss%, and discount calculations.",
      lessons: [
        {
          id: "apt-u4-l1",
          name: "Profit & Loss Basics",
          icon: "💰",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Cost price, selling price",
              content: `<p><strong>CP</strong> — cost price. <strong>SP</strong> — selling price.</p>
              <ul>
                <li>If SP &gt; CP — profit = SP − CP.</li>
                <li>If CP &gt; SP — loss = CP − SP.</li>
              </ul>
              <div class="code-block">Profit % = (Profit / CP) × <span class="num">100</span>
Loss %   = (Loss   / CP) × <span class="num">100</span></div>
              <p>Profit and loss are <strong>always</strong> on cost price unless stated otherwise.</p>
              <div class="code-block"><span class="com">// Buy 200, sell 250</span>
Profit = 50
Profit % = (50/200) × 100 = <span class="num">25</span>%</div>`
            },
            {
              type: "type-answer",
              prompt: "CP=100, SP=120. Profit %?",
              accept: ["20", "20%"],
              explanation: "(20/100) × 100 = 20%."
            },
            {
              type: "multiple-choice",
              prompt: "CP=500, SP=400. Loss %?",
              options: [
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "25%",
                  code: false
                },
                {
                  text: "10%",
                  code: false
                },
                {
                  text: "50%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(100/500) × 100 = 20% loss."
            },
            {
              type: "true-false",
              statement: "Profit % is calculated on selling price.",
              correct: false,
              explanation: "By default, profit/loss % is on cost price."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "Profit % = (Profit / <span class=\"num\">_BLANK_</span>) × 100"
                }
              ],
              tokens: ["CP", "SP", "MP", "Discount"],
              correctAnswer: "CP",
              explanation: "Profit % is based on cost price."
            },
            {
              type: "type-answer",
              prompt: "CP=200, profit 30%. Find SP.",
              accept: ["260"],
              explanation: "SP = 200 × 1.30 = 260."
            },
            {
              type: "reorder-code",
              prompt: "Order the steps to compute profit %.",
              lines: ["Compute profit = SP − CP.", "Multiply ratio by 100.", "Divide profit by CP.", "Identify CP and SP."],
              correctOrder: [3, 0, 2, 1],
              explanation: "Identify → profit → ratio → ×100."
            }
          ]
        },
        {
          id: "apt-u4-l2",
          name: "Marked Price & Discount",
          icon: "🏷️",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Marked price (MP) and discount",
              content: `<p><strong>MP</strong> — the listed or marked price.</p>
              <p><strong>Discount</strong> is given on the marked price.</p>
              <div class="code-block">Discount    = MP - SP
Discount %  = (Discount / MP) × <span class="num">100</span>
SP          = MP × (1 - d/100)</div>
              <p>Successive discounts of <code>d1%</code> and <code>d2%</code> combine to:</p>
              <div class="code-block">net = d1 + d2 - (d1 × d2)/<span class="num">100</span></div>
              <p>Note the minus sign — successive discounts compound less than their sum.</p>`
            },
            {
              type: "type-answer",
              prompt: "MP=500, discount 10%. SP?",
              accept: ["450"],
              explanation: "500 × 0.9 = 450."
            },
            {
              type: "multiple-choice",
              prompt: "Two successive discounts 20% and 10% are equivalent to a single discount of:",
              options: [
                {
                  text: "28%",
                  code: false
                },
                {
                  text: "30%",
                  code: false
                },
                {
                  text: "32%",
                  code: false
                },
                {
                  text: "25%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "20+10 − (20×10)/100 = 30 − 2 = 28%."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "Discount % = (Discount / <span class=\"num\">_BLANK_</span>) × 100"
                }
              ],
              tokens: ["MP", "CP", "SP", "Profit"],
              correctAnswer: "MP",
              explanation: "Discount % is on marked price."
            },
            {
              type: "true-false",
              statement: "Two discounts of 10% combined equal a 20% discount.",
              correct: false,
              explanation: "Successive 10% + 10% = 19% (because of − (10×10)/100)."
            },
            {
              type: "type-answer",
              prompt: "MP=1000. Discounts 20% then 25%. Final price?",
              code: `<div class="code-block">1000 × 0.80 = 800
800 × 0.75 = ?</div>`,
              accept: ["600"],
              explanation: "800 × 0.75 = 600."
            },
            {
              type: "tap-tokens",
              prompt: "Order tokens to express SP from MP and d%.",
              tokens: ["SP", "=", "MP", "×", "(1", "-", "d/100)", "+", "/"],
              correctOrder: ["SP", "=", "MP", "×", "(1", "-", "d/100)"],
              explanation: "SP = MP × (1 − d/100)."
            }
          ]
        },
        {
          id: "apt-u4-l3",
          name: "Mixed Profit & Discount",
          icon: "🧮",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Putting it together",
              content: `<p>Many problems chain CP → MP → SP → profit.</p>
              <div class="code-block"><span class="com">// CP=400. MP set 50% above CP. Discount 20% on MP.</span>
MP = 400 × 1.50 = <span class="num">600</span>
SP = 600 × 0.80 = <span class="num">480</span>
Profit = 480 - 400 = <span class="num">80</span>
Profit % = (80/400) × 100 = <span class="num">20</span>%</div>
              <p>Always anchor your work to the cost price for profit/loss %.</p>`
            },
            {
              type: "type-answer",
              prompt: "CP=250, SP=300. Profit %?",
              accept: ["20", "20%"],
              explanation: "50/250 × 100 = 20%."
            },
            {
              type: "multiple-choice",
              prompt: "CP=800, MP=1000, discount 10%. Profit %?",
              options: [
                {
                  text: "12.5%",
                  code: false
                },
                {
                  text: "10%",
                  code: false
                },
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "15%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "SP = 1000 × 0.9 = 900. Profit = 100. % = 100/800×100 = 12.5%."
            },
            {
              type: "true-false",
              statement: "If SP equals CP there is neither profit nor loss.",
              correct: true,
              explanation: "Profit/loss = 0 when SP = CP."
            },
            {
              type: "type-answer",
              prompt: "A shopkeeper marks goods 40% above CP and gives 25% discount. What % is profit/loss?",
              code: `<div class="code-block">Let CP = 100
MP = 140
SP = 140 × 0.75 = 105
Profit = 5, % = ?</div>`,
              accept: ["5", "5%"],
              explanation: "Profit% = 5/100 × 100 = 5%."
            },
            {
              type: "fill-blank",
              prompt: "Complete the chain.",
              codeLines: [
                {
                  html: "SP = MP × (1 - d/100) = 800 × <span class=\"num\">_BLANK_</span> = 600"
                }
              ],
              tokens: ["0.75", "0.5", "1.25", "0.85"],
              correctAnswer: "0.75",
              explanation: "1 − 25/100 = 0.75."
            },
            {
              type: "tap-tokens",
              prompt: "Build the formula for SP from CP and profit p%.",
              tokens: ["SP", "=", "CP", "×", "(1", "+", "p/100)", "-", "/"],
              correctOrder: ["SP", "=", "CP", "×", "(1", "+", "p/100)"],
              explanation: "SP = CP × (1 + p/100)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u5",
      name: "Unit 5 · Ratio & Proportion",
      description: "Compare quantities and split amounts.",
      lessons: [
        {
          id: "apt-u5-l1",
          name: "Ratios & Splitting",
          icon: "⚖️",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "What is a ratio?",
              content: `<p>A <strong>ratio</strong> a : b compares two quantities of the same kind.</p>
              <p>Ratios scale — a:b = 2a:2b = ka:kb for any k.</p>
              <div class="code-block">12 : 18 = 2 : 3   <span class="com">// divide both by 6</span>
3 : 4 = 9 : 12     <span class="com">// scale by 3</span></div>
              <p>To split N in ratio a:b — total parts = a + b, then:</p>
              <div class="code-block">first  = N × a/(a+b)
second = N × b/(a+b)</div>
              <div class="code-block"><span class="com">// Split 200 in ratio 3:2</span>
first  = 200 × 3/5 = <span class="num">120</span>
second = 200 × 2/5 = <span class="num">80</span></div>`
            },
            {
              type: "multiple-choice",
              prompt: "Simplify the ratio 45 : 60.",
              options: [
                {
                  text: "3 : 4",
                  code: false
                },
                {
                  text: "4 : 3",
                  code: false
                },
                {
                  text: "5 : 6",
                  code: false
                },
                {
                  text: "9 : 12",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Divide both by 15: 45/15 = 3, 60/15 = 4."
            },
            {
              type: "type-answer",
              prompt: "Split 350 in the ratio 4:3. Larger share?",
              accept: ["200"],
              explanation: "Total parts 7. 350 × 4/7 = 200."
            },
            {
              type: "fill-blank",
              prompt: "Complete the ratio scaling.",
              codeLines: [
                {
                  html: "5 : 8 = 15 : <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["24", "16", "40", "20"],
              correctAnswer: "24",
              explanation: "5×3 = 15, so 8×3 = 24."
            },
            {
              type: "true-false",
              statement: "The ratio 1:2 is equal to the fraction 1/2.",
              correct: true,
              explanation: "a:b ≡ a/b as a quotient."
            },
            {
              type: "type-answer",
              prompt: "Three friends share 600 in ratio 1 : 2 : 3. Largest share?",
              code: `<div class="code-block">Total parts = 1+2+3 = 6
Largest = 600 × 3/6 = ?</div>`,
              accept: ["300"],
              explanation: "600 × 3/6 = 300."
            },
            {
              type: "tap-tokens",
              prompt: "Order tokens for splitting N in ratio a:b.",
              tokens: ["first", "=", "N", "×", "a", "/", "(a+b)", "+", "-"],
              correctOrder: ["first", "=", "N", "×", "a", "/", "(a+b)"],
              explanation: "first part = N × a / (a+b)."
            }
          ]
        },
        {
          id: "apt-u5-l2",
          name: "Proportion & Variation",
          icon: "↔️",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Proportion",
              content: `<p>If a : b = c : d, then <code>a × d = b × c</code>. We say a, b, c, d are in proportion.</p>
              <p>The <strong>mean proportional</strong> of a and b is √(a × b).</p>
              <div class="code-block">Mean proportional of 4 and 9 = √(4 × 9) = √36 = <span class="num">6</span></div>
              <p><strong>Direct variation</strong> — y = kx (y increases as x increases).</p>
              <p><strong>Inverse variation</strong> — y = k/x (y decreases as x increases).</p>
              <div class="code-block"><span class="com">// 5 workers take 12 days. 10 workers?</span>
inverse: 5 × 12 = 10 × d
d = 60/10 = <span class="num">6</span> days</div>`
            },
            {
              type: "type-answer",
              prompt: "Mean proportional of 9 and 16?",
              accept: ["12"],
              explanation: "√(9×16) = √144 = 12."
            },
            {
              type: "multiple-choice",
              prompt: "If 4 : x = 8 : 12, find x.",
              options: [
                {
                  text: "6",
                  code: false
                },
                {
                  text: "8",
                  code: false
                },
                {
                  text: "5",
                  code: false
                },
                {
                  text: "10",
                  code: false
                }
              ],
              correct: 0,
              explanation: "4 × 12 = 8 × x → 48 = 8x → x = 6."
            },
            {
              type: "true-false",
              statement: "Number of workers and time to finish a fixed job vary inversely.",
              correct: true,
              explanation: "More workers → less time, so they are inversely proportional."
            },
            {
              type: "type-answer",
              prompt: "If 6 pens cost 90, how much do 10 pens cost?",
              code: `<div class="code-block">direct: cost ∝ pens
6 × x = 10 × 90
x = ?</div>`,
              accept: ["150"],
              explanation: "Cost per pen = 15; 10 pens = 150."
            },
            {
              type: "fill-blank",
              prompt: "Complete the proportion.",
              codeLines: [
                {
                  html: "If a:b :: c:d, then a × d = b × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["c", "a", "d", "b"],
              correctAnswer: "c",
              explanation: "Product of extremes = product of means: ad = bc."
            },
            {
              type: "tap-tokens",
              prompt: "Build the inverse variation rule.",
              tokens: ["y", "=", "k", "/", "x", "×", "+", "-"],
              correctOrder: ["y", "=", "k", "/", "x"],
              explanation: "Inverse: y = k/x."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u6",
      name: "Unit 6 · Mixtures & Alligation",
      description: "Combine quantities and use the alligation shortcut.",
      lessons: [
        {
          id: "apt-u6-l1",
          name: "Mixtures",
          icon: "🥤",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Mixing two solutions",
              content: `<p>When you mix two solutions, total quantity adds up, and the average concentration is a weighted mean.</p>
              <div class="code-block"><span class="com">// 4 L of 30% alcohol + 6 L of 50% alcohol</span>
alcohol = 4×0.30 + 6×0.50 = 1.2 + 3.0 = <span class="num">4.2</span> L
total   = 4 + 6 = <span class="num">10</span> L
mix %   = 4.2 / 10 × 100 = <span class="num">42</span>%</div>
              <p>This weighted-average view is the foundation of alligation.</p>`
            },
            {
              type: "type-answer",
              prompt: "Mix 2L of 20% syrup with 3L of 70% syrup. Resulting % syrup?",
              accept: ["50", "50%"],
              explanation: "(2×20 + 3×70)/5 = (40+210)/5 = 250/5 = 50%."
            },
            {
              type: "multiple-choice",
              prompt: "10L of 40% solution is mixed with 10L of water. New strength?",
              options: [
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "40%",
                  code: false
                },
                {
                  text: "10%",
                  code: false
                },
                {
                  text: "25%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Solute is unchanged at 4L. Total = 20L. 4/20 = 20%."
            },
            {
              type: "true-false",
              statement: "Adding pure water to a saline solution does not change the salt amount.",
              correct: true,
              explanation: "Only the total volume increases — solute stays the same."
            },
            {
              type: "fill-blank",
              prompt: "Complete the equation.",
              codeLines: [
                {
                  html: "amount of solute = volume × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["concentration", "time", "speed", "mass"],
              correctAnswer: "concentration",
              explanation: "Solute = volume × concentration (as a fraction)."
            },
            {
              type: "type-answer",
              prompt: "Total cost of mix of 8 kg at 60/kg and 12 kg at 40/kg per kg?",
              code: `<div class="code-block">total cost = 8×60 + 12×40 = 480 + 480 = 960
total qty  = 8 + 12 = 20
avg /kg    = 960 / 20 = ?</div>`,
              accept: ["48"],
              explanation: "Average cost = 960/20 = 48 per kg."
            },
            {
              type: "tap-tokens",
              prompt: "Order tokens to compute mix concentration.",
              tokens: ["mix%", "=", "(c1·v1", "+", "c2·v2)", "/", "(v1+v2)", "-", "×"],
              correctOrder: ["mix%", "=", "(c1·v1", "+", "c2·v2)", "/", "(v1+v2)"],
              explanation: "Weighted-mean formula for mixtures."
            }
          ]
        },
        {
          id: "apt-u6-l2",
          name: "Alligation",
          icon: "📐",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Rule of alligation",
              content: `<p>To mix two ingredients of values <code>x</code> and <code>y</code> (with x &lt; y) to get a mean value <code>m</code>:</p>
              <div class="code-block">quantity of cheap   y - m
─────────────────── = ─────
quantity of dear    m - x</div>
              <p>Useful for mixture, average price, replacement problems.</p>
              <div class="code-block"><span class="com">// Mix tea at 25/kg with tea at 45/kg to get 30/kg.</span>
ratio = (45-30) : (30-25) = 15 : 5 = <span class="num">3 : 1</span></div>
              <p>You need 3 parts of the cheaper tea to 1 part of the dearer.</p>`
            },
            {
              type: "multiple-choice",
              prompt: "In what ratio must milk at 12/L be mixed with milk at 20/L to get 15/L?",
              options: [
                {
                  text: "5 : 3",
                  code: false
                },
                {
                  text: "3 : 5",
                  code: false
                },
                {
                  text: "4 : 1",
                  code: false
                },
                {
                  text: "2 : 3",
                  code: false
                }
              ],
              correct: 0,
              explanation: "cheap:dear = (20-15):(15-12) = 5:3."
            },
            {
              type: "type-answer",
              prompt: "Mix two grades at 30 and 50/kg to get 38/kg. Ratio cheap:dear?",
              accept: ["3:2", "3 : 2", "12:8"],
              explanation: "(50-38):(38-30) = 12:8 = 3:2."
            },
            {
              type: "true-false",
              statement: "Alligation gives you the ratio in which to mix, not the actual quantities.",
              correct: true,
              explanation: "You still need extra info (total or one part) to find amounts."
            },
            {
              type: "fill-blank",
              prompt: "Complete the alligation ratio (mean=30, cheap=20, dear=50).",
              codeLines: [
                {
                  html: "ratio = (50 - 30) : (30 - 20) = 20 : <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["10", "20", "5", "30"],
              correctAnswer: "10",
              explanation: "30 − 20 = 10."
            },
            {
              type: "type-answer",
              prompt: "Mix 30% and 60% alcohol to get 50%. Cheap:dear?",
              code: "<div class=\"code-block\">cheap : dear = (60-50) : (50-30) = 10 : 20 = ?</div>",
              accept: ["1:2", "1 : 2"],
              explanation: "10:20 = 1:2."
            },
            {
              type: "tap-tokens",
              prompt: "Order the alligation rule.",
              tokens: ["cheap", "/", "dear", "=", "(y", "-", "m)", "/", "(m", "-", "x)", "+"],
              correctOrder: ["cheap", "/", "dear", "=", "(y", "-", "m)", "/", "(m", "-", "x)"],
              explanation: "cheap / dear = (y − m) / (m − x)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u7",
      name: "Unit 7 · Averages",
      description: "Arithmetic mean, weighted average, and age problems.",
      lessons: [
        {
          id: "apt-u7-l1",
          name: "Mean Basics",
          icon: "📊",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Average (arithmetic mean)",
              content: `<p>Average of n numbers = (sum of numbers) / n.</p>
              <div class="code-block"><span class="com">// Average of 12, 15, 18</span>
sum = 12 + 15 + 18 = <span class="num">45</span>
avg = 45 / 3 = <span class="num">15</span></div>
              <p>Two key rearrangements:</p>
              <ul>
                <li><strong>sum = average × n</strong></li>
                <li><strong>n = sum / average</strong></li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "Average of 10, 20, 30, 40, 50?",
              accept: ["30"],
              explanation: "Sum = 150, count = 5, avg = 30."
            },
            {
              type: "multiple-choice",
              prompt: "Average of first 5 natural numbers?",
              options: [
                {
                  text: "3",
                  code: false
                },
                {
                  text: "2.5",
                  code: false
                },
                {
                  text: "5",
                  code: false
                },
                {
                  text: "15",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(1+2+3+4+5)/5 = 15/5 = 3."
            },
            {
              type: "true-false",
              statement: "Adding the same number to every value increases the average by that number.",
              correct: true,
              explanation: "Linear shift: avg(x+k) = avg(x) + k."
            },
            {
              type: "fill-blank",
              prompt: "Average × count = ?",
              codeLines: [
                {
                  html: "sum = average × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["n", "2", "1", "pi"],
              correctAnswer: "n",
              explanation: "Number of items, n."
            },
            {
              type: "type-answer",
              prompt: "Average age of 5 boys is 14 years. Sum?",
              code: "<div class=\"code-block\">sum = average × n = 14 × 5 = ?</div>",
              accept: ["70"],
              explanation: "14 × 5 = 70."
            },
            {
              type: "tap-tokens",
              prompt: "Build the average formula.",
              tokens: ["avg", "=", "sum", "/", "n", "+", "×", "-"],
              correctOrder: ["avg", "=", "sum", "/", "n"],
              explanation: "Average is sum divided by count."
            }
          ]
        },
        {
          id: "apt-u7-l2",
          name: "Weighted & Harmonic Means",
          icon: "🎚️",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Weighted average",
              content: `<p>If groups have different sizes, weight each by its count.</p>
              <div class="code-block">weighted avg = (n1·a1 + n2·a2 + ...) / (n1 + n2 + ...)</div>
              <p><strong>Harmonic mean</strong> of two numbers a and b is useful for average speed:</p>
              <div class="code-block">HM = 2ab / (a + b)
<span class="com">// average speed over equal distances</span></div>
              <p>Use weighted average for varied class sizes, prices, or speeds with different time/distance.</p>`
            },
            {
              type: "multiple-choice",
              prompt: "Class A has 20 students with avg 60. Class B has 30 with avg 80. Combined average?",
              options: [
                {
                  text: "72",
                  code: false
                },
                {
                  text: "70",
                  code: false
                },
                {
                  text: "74",
                  code: false
                },
                {
                  text: "68",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(20×60+30×80)/50 = (1200+2400)/50 = 3600/50 = 72."
            },
            {
              type: "type-answer",
              prompt: "A car travels 60 km at 30 km/h and another 60 km at 60 km/h. Average speed?",
              accept: ["40", "40 km/h"],
              explanation: "HM = 2·30·60/(30+60) = 3600/90 = 40 km/h."
            },
            {
              type: "true-false",
              statement: "For equal distances at two speeds, the average speed is the harmonic mean.",
              correct: true,
              explanation: "Equal distance ⇒ use HM = 2ab/(a+b)."
            },
            {
              type: "fill-blank",
              prompt: "Complete the weighted avg.",
              codeLines: [
                {
                  html: "WAvg = Σ(n·a) / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["Σn", "Σa", "n·a", "1"],
              correctAnswer: "Σn",
              explanation: "Divide by the sum of weights."
            },
            {
              type: "type-answer",
              prompt: "HM of 4 and 12?",
              code: `<div class="code-block">HM = 2·4·12 / (4+12)
   = 96 / 16
   = ?</div>`,
              accept: ["6"],
              explanation: "96/16 = 6."
            },
            {
              type: "tap-tokens",
              prompt: "Build the HM formula.",
              tokens: ["HM", "=", "2", "a", "b", "/", "(a+b)", "×", "-"],
              correctOrder: ["HM", "=", "2", "a", "b", "/", "(a+b)"],
              explanation: "HM = 2ab / (a+b)."
            }
          ]
        },
        {
          id: "apt-u7-l3",
          name: "Age Problems",
          icon: "🎂",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Working with ages",
              content: `<p>Age problems often translate to one or two linear equations.</p>
              <div class="code-block"><span class="com">// Father is 4 times son's age now.</span>
<span class="com">// 5 years later he will be 3 times son's age.</span>
let son = s, father = 4s
(4s + 5) = 3(s + 5)
4s + 5 = 3s + 15
s = <span class="num">10</span>, father = <span class="num">40</span></div>
              <p>Tips:</p>
              <ul>
                <li>"5 years ago" — subtract 5 from both.</li>
                <li>"5 years later" — add 5 to both.</li>
                <li>Age difference is constant over time.</li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "Sum of two ages is 40 and ratio is 3:5. Smaller age?",
              accept: ["15"],
              explanation: "3x + 5x = 40 → x = 5, smaller = 15."
            },
            {
              type: "multiple-choice",
              prompt: "A is twice as old as B. 5 years ago A was 3 times B. A?",
              options: [
                {
                  text: "20",
                  code: false
                },
                {
                  text: "15",
                  code: false
                },
                {
                  text: "25",
                  code: false
                },
                {
                  text: "10",
                  code: false
                }
              ],
              correct: 0,
              explanation: "2b-5 = 3(b-5) → 2b-5 = 3b-15 → b = 10, A = 20."
            },
            {
              type: "true-false",
              statement: "The difference between two people's ages stays the same as years pass.",
              correct: true,
              explanation: "Both ages grow by the same number of years."
            },
            {
              type: "fill-blank",
              prompt: "Complete the equation.",
              codeLines: [
                {
                  html: "If today father=4s, son=s, after 5 years father = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["4s + 5", "son + 5", "4s - 5", "4(s+5)"],
              correctAnswer: "4s + 5",
              explanation: "Add 5 only — age increases by 5, not 4× of (s+5)."
            },
            {
              type: "type-answer",
              prompt: "Mother is 3 times daughter's age. After 8 years mom = 2× daughter. Find daughter today.",
              code: `<div class="code-block">3d + 8 = 2(d + 8)
3d + 8 = 2d + 16
d = ?</div>`,
              accept: ["8"],
              explanation: "d = 16 − 8 = 8."
            },
            {
              type: "tap-tokens",
              prompt: "Order the standard age-problem steps.",
              tokens: ["Let", "variables", "Form", "equation", "Solve", "Substitute", "/"],
              correctOrder: ["Let", "variables", "Form", "equation", "Solve"],
              explanation: "Let variables → form equation → solve."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u8",
      name: "Unit 8 · Time & Work",
      description: "Combined work, one-day work, pipes and cisterns.",
      lessons: [
        {
          id: "apt-u8-l1",
          name: "One-Day Work",
          icon: "🛠️",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Treat work as 1 unit",
              content: `<p>If A finishes a job in <code>n</code> days, A does <code>1/n</code> of the work each day.</p>
              <div class="code-block"><span class="com">// A does it in 10 days, B in 15 days. Together?</span>
1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6
<span class="com">// Together → 6 days</span></div>
              <p>Always convert each person's rate to a fraction of the whole job per unit time.</p>
              <p>Total time = 1 / (combined rate).</p>`
            },
            {
              type: "type-answer",
              prompt: "A does a job in 6 days. Fraction in one day?",
              accept: ["1/6"],
              explanation: "Rate = 1/n = 1/6."
            },
            {
              type: "multiple-choice",
              prompt: "A in 12 days, B in 18 days. Together?",
              options: [
                {
                  text: "7.2 days",
                  code: false
                },
                {
                  text: "8 days",
                  code: false
                },
                {
                  text: "10 days",
                  code: false
                },
                {
                  text: "6 days",
                  code: false
                }
              ],
              correct: 0,
              explanation: "1/12 + 1/18 = (3+2)/36 = 5/36. Time = 36/5 = 7.2 days."
            },
            {
              type: "true-false",
              statement: "If A is twice as fast as B, A finishes in half the time.",
              correct: true,
              explanation: "Time ∝ 1/rate."
            },
            {
              type: "fill-blank",
              prompt: "Combined rate.",
              codeLines: [
                {
                  html: "Combined rate = 1/a + 1/b. Time = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["ab/(a+b)", "a+b", "1/(ab)", "a-b"],
              correctAnswer: "ab/(a+b)",
              explanation: "Reciprocal of combined rate is ab/(a+b)."
            },
            {
              type: "type-answer",
              prompt: "A finishes a wall in 8 days, B in 24 days. Together?",
              code: `<div class="code-block">1/8 + 1/24 = 3/24 + 1/24 = 4/24 = 1/6
time = ?</div>`,
              accept: ["6"],
              explanation: "Rate 1/6 → 6 days."
            },
            {
              type: "tap-tokens",
              prompt: "Build the combined-time shortcut for A and B.",
              tokens: ["time", "=", "ab", "/", "(a+b)", "+", "-", "×"],
              correctOrder: ["time", "=", "ab", "/", "(a+b)"],
              explanation: "time = ab/(a+b) for two workers."
            }
          ]
        },
        {
          id: "apt-u8-l2",
          name: "Alternate Days & Three Workers",
          icon: "🔄",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Working in turns",
              content: `<p>If three people work together, add all rates.</p>
              <div class="code-block"><span class="com">// A:10 d, B:12 d, C:15 d</span>
1/10 + 1/12 + 1/15 = 6/60 + 5/60 + 4/60 = 15/60 = 1/4
<span class="com">// 4 days together</span></div>
              <p>For <strong>alternating-day</strong> problems, see how much is done after a complete cycle, then scale.</p>
              <div class="code-block"><span class="com">// A:6 d, B:12 d, work alternating starting with A.</span>
Day 1: 1/6, Day 2: 1/12
Per 2-day cycle: 1/6 + 1/12 = 3/12 = 1/4
<span class="com">// 4 cycles = 1 whole job → 8 days</span></div>`
            },
            {
              type: "multiple-choice",
              prompt: "A:8 d, B:24 d. A and B alternately, A first. Days needed?",
              options: [
                {
                  text: "12 days",
                  code: false
                },
                {
                  text: "10 days",
                  code: false
                },
                {
                  text: "14 days",
                  code: false
                },
                {
                  text: "16 days",
                  code: false
                }
              ],
              correct: 0,
              explanation: "1/8 + 1/24 = 4/24 = 1/6 per 2 days → 6 cycles → 12 days."
            },
            {
              type: "type-answer",
              prompt: "A, B, C take 6, 12, 24 days. Together?",
              accept: ["24/7"],
              explanation: "1/6+1/12+1/24 = 4/24+2/24+1/24 = 7/24. Time = 24/7 days."
            },
            {
              type: "true-false",
              statement: "Adding more workers always reduces total work.",
              correct: false,
              explanation: "Total work stays the same; only the time changes."
            },
            {
              type: "fill-blank",
              prompt: "Sum of rates.",
              codeLines: [
                {
                  html: "1/8 + 1/12 = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["5/24", "1/20", "2/20", "1/12"],
              correctAnswer: "5/24",
              explanation: "3/24 + 2/24 = 5/24."
            },
            {
              type: "type-answer",
              prompt: "A,B,C complete 1/4 of a job per day together. Total days?",
              code: `<div class="code-block">combined rate = 1/4
time = 1 / (1/4) = ?</div>`,
              accept: ["4"],
              explanation: "1 ÷ (1/4) = 4."
            },
            {
              type: "tap-tokens",
              prompt: "Build a 2-day cycle work for A and B alternating.",
              tokens: ["cycle", "=", "1/a", "+", "1/b", "×", "-"],
              correctOrder: ["cycle", "=", "1/a", "+", "1/b"],
              explanation: "In two days alternating, total is 1/a + 1/b."
            }
          ]
        },
        {
          id: "apt-u8-l3",
          name: "Pipes & Cisterns",
          icon: "🚰",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Pipes that fill and empty",
              content: `<p>Same idea as time and work — fill pipes have positive rates, empty pipes have negative rates.</p>
              <div class="code-block"><span class="com">// Fill in 6 hrs, empty in 12 hrs</span>
net rate = 1/6 - 1/12 = 2/12 - 1/12 = <span class="num">1/12</span>
fill time = <span class="num">12</span> hours</div>
              <p>If both pipes are open and net rate is negative, the tank will never fill (and will eventually empty).</p>`
            },
            {
              type: "type-answer",
              prompt: "A fills in 4 hrs, B fills in 6 hrs. Both open. Time to fill?",
              accept: ["12/5", "2.4"],
              explanation: "1/4 + 1/6 = 5/12. Time = 12/5 = 2.4 hrs."
            },
            {
              type: "multiple-choice",
              prompt: "Fill in 3 hr, empty in 6 hr. Both open. Time to fill?",
              options: [
                {
                  text: "6 hr",
                  code: false
                },
                {
                  text: "3 hr",
                  code: false
                },
                {
                  text: "9 hr",
                  code: false
                },
                {
                  text: "Never",
                  code: false
                }
              ],
              correct: 0,
              explanation: "1/3 − 1/6 = 1/6 → 6 hours."
            },
            {
              type: "true-false",
              statement: "If outlet is faster than inlet, tank will not fill.",
              correct: true,
              explanation: "Net rate would be negative."
            },
            {
              type: "fill-blank",
              prompt: "Net rate when inlet 1/a and outlet 1/b.",
              codeLines: [
                {
                  html: "net rate = 1/a <span class=\"num\">_BLANK_</span> 1/b"
                }
              ],
              tokens: ["-", "+", "×", "/"],
              correctAnswer: "-",
              explanation: "Outlets subtract from the fill rate."
            },
            {
              type: "type-answer",
              prompt: "Two inlets at 1/8 each. Time?",
              code: `<div class="code-block">1/8 + 1/8 = 2/8 = 1/4
time = ?</div>`,
              accept: ["4"],
              explanation: "1 ÷ (1/4) = 4 hr."
            },
            {
              type: "tap-tokens",
              prompt: "Build the net rate with one inlet and one outlet.",
              tokens: ["net", "=", "1/in", "-", "1/out", "+", "×"],
              correctOrder: ["net", "=", "1/in", "-", "1/out"],
              explanation: "Subtract the outlet rate from the inlet rate."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u9",
      name: "Unit 9 · Time, Speed & Distance",
      description: "Convert units, average speed, and relative speed.",
      lessons: [
        {
          id: "apt-u9-l1",
          name: "Distance = Speed × Time",
          icon: "🚗",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "The fundamental triangle",
              content: `<p>The three quantities are linked by:</p>
              <div class="code-block">Distance = Speed × Time
Speed    = Distance / Time
Time     = Distance / Speed</div>
              <p>Unit conversion is essential:</p>
              <div class="code-block">1 km/hr  = 5/18 m/s
1 m/s    = 18/5 km/hr</div>
              <div class="code-block"><span class="com">// 72 km/hr → m/s</span>
72 × 5/18 = <span class="num">20</span> m/s</div>`
            },
            {
              type: "type-answer",
              prompt: "Speed 60 km/hr for 2 hr. Distance?",
              accept: ["120", "120 km"],
              explanation: "d = s × t = 60 × 2 = 120 km."
            },
            {
              type: "multiple-choice",
              prompt: "Convert 54 km/hr to m/s.",
              options: [
                {
                  text: "15 m/s",
                  code: false
                },
                {
                  text: "18 m/s",
                  code: false
                },
                {
                  text: "20 m/s",
                  code: false
                },
                {
                  text: "12 m/s",
                  code: false
                }
              ],
              correct: 0,
              explanation: "54 × 5/18 = 15."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "Speed = Distance / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["Time", "Mass", "Volume", "Force"],
              correctAnswer: "Time",
              explanation: "By definition, speed is distance per unit time."
            },
            {
              type: "true-false",
              statement: "1 m/s equals 18/5 km/hr.",
              correct: true,
              explanation: "Conversion factor."
            },
            {
              type: "type-answer",
              prompt: "A car covers 300 km in 5 hours. Speed?",
              code: `<div class="code-block">speed = distance / time
      = 300 / 5
      = ?</div>`,
              accept: ["60", "60 km/hr"],
              explanation: "300/5 = 60 km/hr."
            },
            {
              type: "tap-tokens",
              prompt: "Build distance formula tokens.",
              tokens: ["Distance", "=", "Speed", "×", "Time", "/", "+", "-"],
              correctOrder: ["Distance", "=", "Speed", "×", "Time"],
              explanation: "Distance equals speed times time."
            }
          ]
        },
        {
          id: "apt-u9-l2",
          name: "Average Speed",
          icon: "📏",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Average speed isn't average of speeds",
              content: `<p><strong>Average speed = total distance / total time</strong>.</p>
              <p>For equal distance at two speeds, use the harmonic mean:</p>
              <div class="code-block">avg = 2·s1·s2 / (s1 + s2)</div>
              <p>For equal time at two speeds, use the simple mean:</p>
              <div class="code-block">avg = (s1 + s2) / 2</div>
              <div class="code-block"><span class="com">// 100 km at 50 km/hr + 100 km at 25 km/hr</span>
avg = 2·50·25/(50+25) = 2500/75 = <span class="num">33.33</span> km/hr</div>`
            },
            {
              type: "type-answer",
              prompt: "40 km at 40 km/hr + 40 km at 60 km/hr. Average speed?",
              accept: ["48"],
              explanation: "2·40·60/(40+60) = 4800/100 = 48 km/hr."
            },
            {
              type: "multiple-choice",
              prompt: "A travels 2 hr at 50 km/hr and 3 hr at 70 km/hr. Average speed?",
              options: [
                {
                  text: "62 km/hr",
                  code: false
                },
                {
                  text: "60 km/hr",
                  code: false
                },
                {
                  text: "64 km/hr",
                  code: false
                },
                {
                  text: "65 km/hr",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Total = 100+210=310 km, total time 5 hr → 62 km/hr."
            },
            {
              type: "true-false",
              statement: "For equal-distance halves, average speed equals (s1+s2)/2.",
              correct: false,
              explanation: "It equals the harmonic mean 2·s1·s2/(s1+s2), not the simple mean."
            },
            {
              type: "fill-blank",
              prompt: "Complete the harmonic mean formula.",
              codeLines: [
                {
                  html: "avg = 2 · s1 · s2 / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["(s1 + s2)", "(s1 - s2)", "(s1 × s2)", "2"],
              correctAnswer: "(s1 + s2)",
              explanation: "HM denominator is the sum of the speeds."
            },
            {
              type: "type-answer",
              prompt: "Bus goes 90 km at 30 km/hr and 90 km at 90 km/hr. Average speed?",
              code: `<div class="code-block">HM = 2·30·90/(30+90)
   = 5400 / 120
   = ?</div>`,
              accept: ["45"],
              explanation: "5400/120 = 45 km/hr."
            },
            {
              type: "tap-tokens",
              prompt: "Build average speed = total distance / total time.",
              tokens: ["avg", "=", "total", "distance", "/", "total", "time", "+", "-"],
              correctOrder: ["avg", "=", "total", "distance", "/", "total", "time"],
              explanation: "Always: total distance over total time."
            }
          ]
        },
        {
          id: "apt-u9-l3",
          name: "Relative Speed",
          icon: "🏁",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "How fast do they meet?",
              content: `<p>Two objects move along a path:</p>
              <ul>
                <li><strong>Opposite directions</strong> — relative speed = s1 + s2.</li>
                <li><strong>Same direction</strong> — relative speed = |s1 − s2|.</li>
              </ul>
              <div class="code-block"><span class="com">// Two cars 100 km apart head toward each other at 40 and 60 km/hr.</span>
relative speed = 100 km/hr
time to meet = 100 / 100 = <span class="num">1</span> hr</div>
              <p>This idea extends to trains and boats.</p>`
            },
            {
              type: "multiple-choice",
              prompt: "Two trains 200 km apart at 60 km/hr each towards each other. Meet in?",
              options: [
                {
                  text: "5/3 hr",
                  code: false
                },
                {
                  text: "2 hr",
                  code: false
                },
                {
                  text: "3 hr",
                  code: false
                },
                {
                  text: "4 hr",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Rel speed 120. 200/120 = 5/3 hr."
            },
            {
              type: "type-answer",
              prompt: "A at 60 chases B at 40 starting 100 km behind. Catch in (hr)?",
              accept: ["5"],
              explanation: "Rel speed = 20. 100/20 = 5 hr."
            },
            {
              type: "true-false",
              statement: "Same direction → subtract speeds.",
              correct: true,
              explanation: "Relative speed = difference for same-direction motion."
            },
            {
              type: "fill-blank",
              prompt: "Complete relative speed for opposite direction.",
              codeLines: [
                {
                  html: "rel speed = s1 <span class=\"num\">_BLANK_</span> s2"
                }
              ],
              tokens: ["+", "-", "×", "/"],
              correctAnswer: "+",
              explanation: "Add speeds for opposite-direction motion."
            },
            {
              type: "type-answer",
              prompt: "Two cars start 240 km apart toward each other at 50 and 30 km/hr. Time?",
              code: `<div class="code-block">rel = 80 km/hr
time = 240 / 80 = ?</div>`,
              accept: ["3"],
              explanation: "Total distance / relative speed."
            },
            {
              type: "tap-tokens",
              prompt: "Build relative speed for same direction.",
              tokens: ["rel", "=", "|s1", "-", "s2|", "+", "×"],
              correctOrder: ["rel", "=", "|s1", "-", "s2|"],
              explanation: "|s1 − s2| when moving in the same direction."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u10",
      name: "Unit 10 · Trains",
      description: "Train passing a point, platform, or another train.",
      lessons: [
        {
          id: "apt-u10-l1",
          name: "Passing Point & Platform",
          icon: "🚆",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "What distance does a train cover?",
              content: `<p>The distance covered by a train of length <code>L</code> depends on what it is passing:</p>
              <ul>
                <li>A <strong>point</strong> (pole, signal, person) — distance = L.</li>
                <li>A <strong>platform</strong> of length P — distance = L + P.</li>
                <li>Another <strong>train</strong> of length L2 — distance = L + L2.</li>
              </ul>
              <div class="code-block"><span class="com">// 200 m train at 72 km/hr = 20 m/s passes a 100 m platform</span>
distance = 200 + 100 = <span class="num">300</span> m
time = 300 / 20 = <span class="num">15</span> s</div>`
            },
            {
              type: "type-answer",
              prompt: "A 150 m train at 30 m/s. Time to pass a pole?",
              accept: ["5"],
              explanation: "t = L/s = 150/30 = 5 s."
            },
            {
              type: "multiple-choice",
              prompt: "A 100 m train at 20 m/s passes a 200 m platform. Time?",
              options: [
                {
                  text: "15 s",
                  code: false
                },
                {
                  text: "10 s",
                  code: false
                },
                {
                  text: "20 s",
                  code: false
                },
                {
                  text: "5 s",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(100+200)/20 = 15 s."
            },
            {
              type: "true-false",
              statement: "Passing a man on the platform is treated the same as passing a point.",
              correct: true,
              explanation: "Man has negligible length."
            },
            {
              type: "fill-blank",
              prompt: "Distance to pass a platform.",
              codeLines: [
                {
                  html: "distance = length of train + <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["length of platform", "0", "length of car", "100"],
              correctAnswer: "length of platform",
              explanation: "Train must clear its own length plus platform length."
            },
            {
              type: "type-answer",
              prompt: "Speed 36 km/hr = 10 m/s. Train 250 m. Time to cross pole?",
              code: "<div class=\"code-block\">time = 250 / 10 = ?</div>",
              accept: ["25"],
              explanation: "L/s = 25 s."
            },
            {
              type: "tap-tokens",
              prompt: "Build the time-to-cross-platform formula.",
              tokens: ["t", "=", "(L", "+", "P)", "/", "s", "-", "×"],
              correctOrder: ["t", "=", "(L", "+", "P)", "/", "s"],
              explanation: "t = (L + P) / s."
            }
          ]
        },
        {
          id: "apt-u10-l2",
          name: "Two Trains",
          icon: "🚄",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Trains passing each other",
              content: `<p>When two trains cross, the distance is the <strong>sum of their lengths</strong>. Use relative speed.</p>
              <ul>
                <li>Opposite — speed = s1 + s2.</li>
                <li>Same direction — speed = |s1 − s2|.</li>
              </ul>
              <div class="code-block"><span class="com">// 200 m and 300 m trains at 54 and 36 km/hr opposite</span>
rel speed = 90 km/hr = 25 m/s
distance  = 500 m
time      = 500/25 = <span class="num">20</span> s</div>`
            },
            {
              type: "type-answer",
              prompt: "Two trains 150 m each, 30 m/s each, opposite direction. Time to cross?",
              accept: ["5"],
              explanation: "Sum = 300, rel = 60. 300/60 = 5 s."
            },
            {
              type: "multiple-choice",
              prompt: "Trains 250 and 350 m, same direction at 30 and 20 m/s. Time?",
              options: [
                {
                  text: "60 s",
                  code: false
                },
                {
                  text: "30 s",
                  code: false
                },
                {
                  text: "20 s",
                  code: false
                },
                {
                  text: "10 s",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Sum = 600, rel = 10. 600/10 = 60 s."
            },
            {
              type: "true-false",
              statement: "For two trains moving in opposite directions, relative speed is the difference.",
              correct: false,
              explanation: "Opposite directions add. Same direction subtracts."
            },
            {
              type: "fill-blank",
              prompt: "Sum lengths.",
              codeLines: [
                {
                  html: "distance to cross = L1 <span class=\"num\">_BLANK_</span> L2"
                }
              ],
              tokens: ["+", "-", "×", "/"],
              correctAnswer: "+",
              explanation: "Combined length."
            },
            {
              type: "type-answer",
              prompt: "Two trains 100 and 200 m, same direction at 36 and 18 km/hr. Time?",
              code: `<div class="code-block">rel speed = 18 km/hr = 5 m/s
distance = 300 m
time = ?</div>`,
              accept: ["60"],
              explanation: "300/5 = 60 s."
            },
            {
              type: "tap-tokens",
              prompt: "Build the cross-time formula opposite direction.",
              tokens: ["t", "=", "(L1+L2)", "/", "(s1+s2)", "-", "×"],
              correctOrder: ["t", "=", "(L1+L2)", "/", "(s1+s2)"],
              explanation: "t = (L1 + L2) / (s1 + s2)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u11",
      name: "Unit 11 · Boats & Streams",
      description: "Speed upstream and downstream.",
      lessons: [
        {
          id: "apt-u11-l1",
          name: "Upstream & Downstream",
          icon: "🛶",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Two important speeds",
              content: `<p>Let boat speed in still water = <code>b</code> and stream speed = <code>s</code>.</p>
              <ul>
                <li><strong>Downstream</strong> — boat with the current — speed = b + s.</li>
                <li><strong>Upstream</strong> — boat against the current — speed = b − s.</li>
              </ul>
              <div class="code-block">b = (downstream + upstream) / <span class="num">2</span>
s = (downstream - upstream) / <span class="num">2</span></div>
              <div class="code-block"><span class="com">// downstream = 12 km/hr, upstream = 8 km/hr</span>
b = (12+8)/2 = <span class="num">10</span> km/hr
s = (12-8)/2 = <span class="num">2</span> km/hr</div>`
            },
            {
              type: "type-answer",
              prompt: "Downstream 15, upstream 5 km/hr. Boat speed in still water?",
              accept: ["10"],
              explanation: "(15+5)/2 = 10."
            },
            {
              type: "multiple-choice",
              prompt: "Boat 8 km/hr, stream 2 km/hr. Downstream speed?",
              options: [
                {
                  text: "10 km/hr",
                  code: false
                },
                {
                  text: "6 km/hr",
                  code: false
                },
                {
                  text: "4 km/hr",
                  code: false
                },
                {
                  text: "16 km/hr",
                  code: false
                }
              ],
              correct: 0,
              explanation: "b + s = 8 + 2 = 10."
            },
            {
              type: "true-false",
              statement: "Going upstream the effective speed is lower than the boat's still-water speed.",
              correct: true,
              explanation: "b − s is less than b."
            },
            {
              type: "fill-blank",
              prompt: "Compute stream speed.",
              codeLines: [
                {
                  html: "s = (downstream <span class=\"num\">_BLANK_</span> upstream) / 2"
                }
              ],
              tokens: ["-", "+", "×", "/"],
              correctAnswer: "-",
              explanation: "Stream speed = (down − up)/2."
            },
            {
              type: "type-answer",
              prompt: "A boat covers 12 km downstream in 2 hr and 8 km upstream in 2 hr. Boat speed?",
              code: `<div class="code-block">down = 12/2 = 6 km/hr
up   = 8/2 = 4 km/hr
b    = (6+4)/2 = ?</div>`,
              accept: ["5"],
              explanation: "Average of 6 and 4 is 5."
            },
            {
              type: "tap-tokens",
              prompt: "Build the upstream speed formula.",
              tokens: ["upstream", "=", "b", "-", "s", "+", "×", "/"],
              correctOrder: ["upstream", "=", "b", "-", "s"],
              explanation: "Upstream = b − s."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u12",
      name: "Unit 12 · Simple Interest",
      description: "SI = PRT/100 and rearrangements.",
      lessons: [
        {
          id: "apt-u12-l1",
          name: "Simple Interest Formula",
          icon: "🏦",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "SI formula",
              content: `<p>Simple interest applies the same rate to the original principal every year.</p>
              <div class="code-block">SI = P × R × T / <span class="num">100</span>
A  = P + SI</div>
              <p>Where P = principal, R = rate (% per year), T = time (years), A = amount.</p>
              <div class="code-block"><span class="com">// P=1000, R=10%, T=2 yrs</span>
SI = 1000 × 10 × 2 / 100 = <span class="num">200</span>
A  = 1000 + 200 = <span class="num">1200</span></div>`
            },
            {
              type: "type-answer",
              prompt: "P=2000, R=5%, T=3 yrs. SI?",
              accept: ["300"],
              explanation: "2000 × 5 × 3 / 100 = 300."
            },
            {
              type: "multiple-choice",
              prompt: "SI=500, P=2500, T=4 yrs. Rate?",
              options: [
                {
                  text: "5%",
                  code: false
                },
                {
                  text: "6%",
                  code: false
                },
                {
                  text: "4%",
                  code: false
                },
                {
                  text: "8%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "R = SI×100/(P×T) = 500×100/(2500×4) = 5%."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "SI = P × R × T / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["100", "10", "1", "12"],
              correctAnswer: "100",
              explanation: "Divide by 100 because R is in percent."
            },
            {
              type: "true-false",
              statement: "In simple interest, you earn interest on previously earned interest each year.",
              correct: false,
              explanation: "That is compound interest, not simple."
            },
            {
              type: "type-answer",
              prompt: "P=1500, R=8%, T=5 yrs. Amount?",
              code: `<div class="code-block">SI = 1500×8×5/100 = 600
A = 1500 + 600 = ?</div>`,
              accept: ["2100"],
              explanation: "A = 2100."
            },
            {
              type: "tap-tokens",
              prompt: "Build the SI formula.",
              tokens: ["SI", "=", "P", "×", "R", "×", "T", "/", "100", "+"],
              correctOrder: ["SI", "=", "P", "×", "R", "×", "T", "/", "100"],
              explanation: "SI = P·R·T/100."
            }
          ]
        },
        {
          id: "apt-u12-l2",
          name: "Finding P, R, T",
          icon: "🧾",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Rearrange the formula",
              content: `<p>Algebra on SI = PRT/100 gives:</p>
              <div class="code-block">P = SI × 100 / (R × T)
R = SI × 100 / (P × T)
T = SI × 100 / (P × R)</div>
              <p>Tip — if amount doubles in T years at rate R% SI, then 100 = R × T.</p>
              <div class="code-block"><span class="com">// Sum doubles in 10 yrs SI → rate?</span>
R × T = 100 → R = 10%</div>`
            },
            {
              type: "type-answer",
              prompt: "At what rate does P double in 8 years (SI)?",
              accept: ["12.5", "12.5%"],
              explanation: "R = 100/T = 100/8 = 12.5%."
            },
            {
              type: "multiple-choice",
              prompt: "P=1000 becomes 1200 in 4 yrs SI. Rate?",
              options: [
                {
                  text: "5%",
                  code: false
                },
                {
                  text: "4%",
                  code: false
                },
                {
                  text: "8%",
                  code: false
                },
                {
                  text: "10%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "SI = 200. R = 200×100/(1000×4) = 5%."
            },
            {
              type: "true-false",
              statement: "Doubling in 5 years at SI means rate is 20%.",
              correct: true,
              explanation: "R = 100/T = 100/5 = 20%."
            },
            {
              type: "fill-blank",
              prompt: "Complete the rearrangement.",
              codeLines: [
                {
                  html: "R = SI × 100 / (<span class=\"num\">_BLANK_</span> × T)"
                }
              ],
              tokens: ["P", "SI", "A", "100"],
              correctAnswer: "P",
              explanation: "R = SI·100/(P·T)."
            },
            {
              type: "type-answer",
              prompt: "SI=600, R=4%, T=3 yrs. P?",
              code: `<div class="code-block">P = 600 × 100 / (4 × 3)
  = 60000 / 12
  = ?</div>`,
              accept: ["5000"],
              explanation: "60000 / 12 = 5000."
            },
            {
              type: "tap-tokens",
              prompt: "Build the time formula.",
              tokens: ["T", "=", "SI", "×", "100", "/", "(P×R)", "+", "-"],
              correctOrder: ["T", "=", "SI", "×", "100", "/", "(P×R)"],
              explanation: "T = SI×100/(P·R)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u13",
      name: "Unit 13 · Compound Interest",
      description: "A = P(1+r/100)^t and CI vs SI.",
      lessons: [
        {
          id: "apt-u13-l1",
          name: "Yearly Compounding",
          icon: "📈",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Compound interest",
              content: `<p>Interest is added to the principal each period, so you earn interest on interest.</p>
              <div class="code-block">A = P × (1 + r/<span class="num">100</span>)^t
CI = A - P</div>
              <p>For 2 years, you can use the shortcut:</p>
              <div class="code-block">CI(2 yr) - SI(2 yr) = P × (r/100)²</div>
              <div class="code-block"><span class="com">// P=1000, r=10%, t=2 yrs</span>
A = 1000 × 1.10² = 1000 × 1.21 = <span class="num">1210</span>
CI = <span class="num">210</span></div>`
            },
            {
              type: "type-answer",
              prompt: "P=1000, r=10%, t=2. CI?",
              accept: ["210"],
              explanation: "A = 1210, CI = 210."
            },
            {
              type: "multiple-choice",
              prompt: "Difference between CI and SI on P at r% for 2 yrs is:",
              options: [
                {
                  text: "P(r/100)²",
                  code: false
                },
                {
                  text: "P(r/100)",
                  code: false
                },
                {
                  text: "P(r/100)³",
                  code: false
                },
                {
                  text: "r/100",
                  code: false
                }
              ],
              correct: 0,
              explanation: "For 2 yrs, CI − SI = P × (r/100)²."
            },
            {
              type: "true-false",
              statement: "CI ≥ SI for the same P, r, t (with t ≥ 1).",
              correct: true,
              explanation: "CI compounds, so it is at least as large."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "A = P × (1 + r/100)<span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["^t", "×t", "+t", "/t"],
              correctAnswer: "^t",
              explanation: "Exponent t for t periods."
            },
            {
              type: "type-answer",
              prompt: "P=2000, r=5%, t=2. A?",
              code: `<div class="code-block">A = 2000 × 1.05²
  = 2000 × 1.1025
  = ?</div>`,
              accept: ["2205"],
              explanation: "2000 × 1.1025 = 2205."
            },
            {
              type: "tap-tokens",
              prompt: "Build the CI amount formula.",
              tokens: ["A", "=", "P", "×", "(1", "+", "r/100)", "^", "t", "-"],
              correctOrder: ["A", "=", "P", "×", "(1", "+", "r/100)", "^", "t"],
              explanation: "A = P(1 + r/100)^t."
            }
          ]
        },
        {
          id: "apt-u13-l2",
          name: "Half-Yearly & Quarterly",
          icon: "🗓️",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Sub-yearly compounding",
              content: `<p>When compounding is k times a year, halve / quarter the rate and double / quadruple the periods.</p>
              <div class="code-block">half-yearly: rate r/2, periods 2t
quarterly:   rate r/4, periods 4t</div>
              <div class="code-block"><span class="com">// P=1000, r=10%, t=1 yr, half-yearly</span>
A = 1000 × (1 + 5/100)² = 1000 × 1.1025 = <span class="num">1102.5</span></div>
              <p>The more frequent the compounding, the larger the amount.</p>`
            },
            {
              type: "type-answer",
              prompt: "P=1000, 8% pa, 1 yr, half-yearly. CI?",
              accept: ["81.6"],
              explanation: "A = 1000 × (1.04)² = 1081.6. CI = 81.6."
            },
            {
              type: "multiple-choice",
              prompt: "For quarterly compounding, rate per period is:",
              options: [
                {
                  text: "r/4",
                  code: false
                },
                {
                  text: "r/2",
                  code: false
                },
                {
                  text: "r",
                  code: false
                },
                {
                  text: "4r",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Annual rate divided by 4."
            },
            {
              type: "true-false",
              statement: "More frequent compounding always gives more interest.",
              correct: true,
              explanation: "For positive rate, CI grows with frequency (up to continuous)."
            },
            {
              type: "fill-blank",
              prompt: "Half-yearly formula.",
              codeLines: [
                {
                  html: "A = P × (1 + r/200)^<span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["2t", "t", "t/2", "4t"],
              correctAnswer: "2t",
              explanation: "2 periods per year for t years."
            },
            {
              type: "type-answer",
              prompt: "P=8000, r=10%, t=1 yr, half-yearly. A?",
              code: `<div class="code-block">A = 8000 × (1 + 5/100)²
  = 8000 × 1.1025
  = ?</div>`,
              accept: ["8820"],
              explanation: "8000 × 1.1025 = 8820."
            },
            {
              type: "tap-tokens",
              prompt: "Build the quarterly formula.",
              tokens: ["A", "=", "P", "×", "(1", "+", "r/400)", "^", "4t", "/"],
              correctOrder: ["A", "=", "P", "×", "(1", "+", "r/400)", "^", "4t"],
              explanation: "r/4 per quarter, 4t quarters."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u14",
      name: "Unit 14 · Permutations & Combinations",
      description: "Factorials, P(n,r), C(n,r), and arrangements.",
      lessons: [
        {
          id: "apt-u14-l1",
          name: "Factorials",
          icon: "❗",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "n!",
              content: `<p><code>n!</code> means n × (n−1) × ... × 2 × 1.</p>
              <div class="code-block">0! = <span class="num">1</span>
1! = <span class="num">1</span>
2! = <span class="num">2</span>
3! = <span class="num">6</span>
4! = <span class="num">24</span>
5! = <span class="num">120</span></div>
              <p>Factorials count the number of ways to arrange n distinct items.</p>`
            },
            {
              type: "type-answer",
              prompt: "Compute 6!",
              accept: ["720"],
              explanation: "6×5×4×3×2×1 = 720."
            },
            {
              type: "multiple-choice",
              prompt: "How many ways to arrange 4 books on a shelf?",
              options: [
                {
                  text: "24",
                  code: false
                },
                {
                  text: "12",
                  code: false
                },
                {
                  text: "16",
                  code: false
                },
                {
                  text: "4",
                  code: false
                }
              ],
              correct: 0,
              explanation: "4! = 24."
            },
            {
              type: "true-false",
              statement: "0! is defined as 1.",
              correct: true,
              explanation: "By convention, the empty product is 1."
            },
            {
              type: "fill-blank",
              prompt: "Complete the recursion.",
              codeLines: [
                {
                  html: "n! = n × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["(n-1)!", "n", "(n+1)!", "1!"],
              correctAnswer: "(n-1)!",
              explanation: "n! = n·(n-1)!."
            },
            {
              type: "type-answer",
              prompt: "Value of 5! / 3!?",
              code: `<div class="code-block">5! = 120
3! = 6
5! / 3! = ?</div>`,
              accept: ["20"],
              explanation: "120/6 = 20."
            },
            {
              type: "tap-tokens",
              prompt: "Order tokens for n!.",
              tokens: ["n", "×", "(n-1)", "×", "...", "×", "1", "+"],
              correctOrder: ["n", "×", "(n-1)", "×", "...", "×", "1"],
              explanation: "n × (n−1) × ... × 1."
            }
          ]
        },
        {
          id: "apt-u14-l2",
          name: "Permutations",
          icon: "🔀",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "P(n, r)",
              content: `<p>P(n, r) is the number of ordered arrangements of r items chosen from n distinct items.</p>
              <div class="code-block">P(n, r) = n! / (n - r)!</div>
              <div class="code-block"><span class="com">// 5 people line up 3 at a time</span>
P(5,3) = 5! / 2! = 120/2 = <span class="num">60</span></div>
              <p>Order matters in permutations.</p>`
            },
            {
              type: "type-answer",
              prompt: "P(6, 2)?",
              accept: ["30"],
              explanation: "6!/4! = 720/24 = 30."
            },
            {
              type: "multiple-choice",
              prompt: "How many 3-letter \"words\" from 5 distinct letters?",
              options: [
                {
                  text: "60",
                  code: false
                },
                {
                  text: "15",
                  code: false
                },
                {
                  text: "125",
                  code: false
                },
                {
                  text: "20",
                  code: false
                }
              ],
              correct: 0,
              explanation: "P(5,3) = 60."
            },
            {
              type: "true-false",
              statement: "Permutations count arrangements where order matters.",
              correct: true,
              explanation: "Yes — that's the defining property."
            },
            {
              type: "fill-blank",
              prompt: "Complete the formula.",
              codeLines: [
                {
                  html: "P(n, r) = n! / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["(n-r)!", "r!", "n!", "(n+r)!"],
              correctAnswer: "(n-r)!",
              explanation: "Subtract r from n in the factorial."
            },
            {
              type: "type-answer",
              prompt: "How many ways to arrange the letters of WORD?",
              code: `<div class="code-block">4 distinct letters
ways = 4!
     = ?</div>`,
              accept: ["24"],
              explanation: "4! = 24."
            },
            {
              type: "tap-tokens",
              prompt: "Build the P(n,r) formula.",
              tokens: ["P(n,r)", "=", "n!", "/", "(n-r)!", "+", "-", "×"],
              correctOrder: ["P(n,r)", "=", "n!", "/", "(n-r)!"],
              explanation: "Standard P formula."
            }
          ]
        },
        {
          id: "apt-u14-l3",
          name: "Combinations",
          icon: "🎲",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "C(n, r)",
              content: `<p>C(n, r) counts unordered selections of r items from n.</p>
              <div class="code-block">C(n, r) = n! / (r! × (n-r)!)
        = P(n,r) / r!</div>
              <div class="code-block"><span class="com">// Choose 2 fruits from 5</span>
C(5,2) = 10</div>
              <p>Useful identities:</p>
              <ul>
                <li>C(n, 0) = C(n, n) = 1</li>
                <li>C(n, r) = C(n, n−r)</li>
                <li>C(n, 1) = n</li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "C(6, 2)?",
              accept: ["15"],
              explanation: "6!/(2!·4!) = 720/48 = 15."
            },
            {
              type: "multiple-choice",
              prompt: "In how many ways can 3 people be chosen from 10?",
              options: [
                {
                  text: "120",
                  code: false
                },
                {
                  text: "720",
                  code: false
                },
                {
                  text: "30",
                  code: false
                },
                {
                  text: "210",
                  code: false
                }
              ],
              correct: 0,
              explanation: "C(10,3) = 120."
            },
            {
              type: "true-false",
              statement: "C(n, r) = C(n, n−r).",
              correct: true,
              explanation: "Choosing r to keep is equivalent to choosing n−r to leave out."
            },
            {
              type: "fill-blank",
              prompt: "Complete the link.",
              codeLines: [
                {
                  html: "C(n, r) = P(n, r) / <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["r!", "n!", "(n-r)!", "1"],
              correctAnswer: "r!",
              explanation: "Divide out the r! orderings."
            },
            {
              type: "type-answer",
              prompt: "How many distinct 5-card poker hands from a 52-card deck?",
              code: `<div class="code-block">C(52, 5)
= 52! / (5! · 47!)
= ?</div>`,
              accept: ["2598960"],
              explanation: "C(52,5) = 2,598,960."
            },
            {
              type: "tap-tokens",
              prompt: "Build the C(n,r) formula.",
              tokens: ["C(n,r)", "=", "n!", "/", "(r!", "×", "(n-r)!)", "+", "-"],
              correctOrder: ["C(n,r)", "=", "n!", "/", "(r!", "×", "(n-r)!)"],
              explanation: "C(n,r) = n!/(r!·(n-r)!)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u15",
      name: "Unit 15 · Probability",
      description: "Sample spaces, dice, coins, cards.",
      lessons: [
        {
          id: "apt-u15-l1",
          name: "Basic Probability",
          icon: "🎰",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Sample space and event",
              content: `<p>Probability of an event E is:</p>
              <div class="code-block">P(E) = favourable outcomes / total outcomes</div>
              <p>It always lies between 0 and 1.</p>
              <div class="code-block"><span class="com">// Fair coin: P(Heads) = 1/2</span>
<span class="com">// Fair die:  P(rolling 4) = 1/6</span>
<span class="com">// Even on die: P({2,4,6}) = 3/6 = 1/2</span></div>
              <p>The <strong>complement</strong> of E has probability 1 − P(E).</p>`
            },
            {
              type: "type-answer",
              prompt: "P(rolling a 5 on a fair die)?",
              accept: ["1/6"],
              explanation: "1 of 6 equally-likely outcomes."
            },
            {
              type: "multiple-choice",
              prompt: "A coin is tossed twice. P(exactly 1 head)?",
              options: [
                {
                  text: "1/2",
                  code: false
                },
                {
                  text: "1/4",
                  code: false
                },
                {
                  text: "3/4",
                  code: false
                },
                {
                  text: "1",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Outcomes: HH, HT, TH, TT. Exactly one H → HT, TH → 2/4 = 1/2."
            },
            {
              type: "true-false",
              statement: "A probability can be negative.",
              correct: false,
              explanation: "Probabilities lie in [0, 1]."
            },
            {
              type: "fill-blank",
              prompt: "Probability of complement.",
              codeLines: [
                {
                  html: "P(E') = 1 - <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["P(E)", "0", "1", "|E|"],
              correctAnswer: "P(E)",
              explanation: "Complement rule."
            },
            {
              type: "type-answer",
              prompt: "P(getting an even number on a fair die)?",
              code: `<div class="code-block">favourable = {2,4,6} = 3
total = 6
P = ?</div>`,
              accept: ["1/2", "3/6", "0.5"],
              explanation: "3/6 = 1/2."
            },
            {
              type: "tap-tokens",
              prompt: "Build the basic probability formula.",
              tokens: ["P", "=", "favourable", "/", "total", "-", "×"],
              correctOrder: ["P", "=", "favourable", "/", "total"],
              explanation: "Probability = favourable / total."
            }
          ]
        },
        {
          id: "apt-u15-l2",
          name: "Cards & Dice",
          icon: "🃏",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Standard decks and dice",
              content: `<p>A standard deck has 52 cards: 4 suits × 13 ranks. There are 4 aces, 4 kings, 12 face cards (J,Q,K), 26 red and 26 black.</p>
              <div class="code-block">P(ace)        = 4/52 = 1/13
P(red card)   = 26/52 = 1/2
P(face card)  = 12/52 = 3/13
P(spade)      = 13/52 = 1/4</div>
              <p>Two dice rolled — sample space has 36 outcomes.</p>
              <div class="code-block">P(sum 7) = 6/36 = 1/6
P(doubles) = 6/36 = 1/6</div>`
            },
            {
              type: "multiple-choice",
              prompt: "P(drawing a king from a shuffled deck)?",
              options: [
                {
                  text: "1/13",
                  code: false
                },
                {
                  text: "1/4",
                  code: false
                },
                {
                  text: "4/13",
                  code: false
                },
                {
                  text: "1/26",
                  code: false
                }
              ],
              correct: 0,
              explanation: "4 kings out of 52 → 1/13."
            },
            {
              type: "type-answer",
              prompt: "Roll two dice. P(sum is 8)?",
              accept: ["5/36"],
              explanation: "Pairs: (2,6),(3,5),(4,4),(5,3),(6,2) → 5/36."
            },
            {
              type: "true-false",
              statement: "There are 12 face cards in a standard deck (J, Q, K of each suit).",
              correct: true,
              explanation: "3 face cards × 4 suits = 12."
            },
            {
              type: "fill-blank",
              prompt: "Number of red cards.",
              codeLines: [
                {
                  html: "52 cards / 2 colors = <span class=\"num\">_BLANK_</span> red"
                }
              ],
              tokens: ["26", "13", "4", "12"],
              correctAnswer: "26",
              explanation: "Half red, half black."
            },
            {
              type: "type-answer",
              prompt: "P(rolling a sum greater than 9 on two dice)?",
              code: `<div class="code-block">sums 10, 11, 12 → outcomes 3 + 2 + 1 = 6
P = 6/36 = ?</div>`,
              accept: ["1/6"],
              explanation: "6/36 = 1/6."
            },
            {
              type: "tap-tokens",
              prompt: "Build complement: P(not E).",
              tokens: ["P(not E)", "=", "1", "-", "P(E)", "+", "/"],
              correctOrder: ["P(not E)", "=", "1", "-", "P(E)"],
              explanation: "P(E') = 1 − P(E)."
            }
          ]
        },
        {
          id: "apt-u15-l3",
          name: "Addition & Multiplication",
          icon: "➕",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Combining events",
              content: `<p><strong>Addition rule</strong> — for mutually exclusive events:</p>
              <div class="code-block">P(A or B) = P(A) + P(B)</div>
              <p>If A and B can overlap:</p>
              <div class="code-block">P(A or B) = P(A) + P(B) - P(A and B)</div>
              <p><strong>Multiplication rule</strong> — for independent events:</p>
              <div class="code-block">P(A and B) = P(A) × P(B)</div>
              <div class="code-block"><span class="com">// Two coins both heads</span>
P(HH) = 1/2 × 1/2 = <span class="num">1/4</span></div>`
            },
            {
              type: "multiple-choice",
              prompt: "Probability that two independent fair coins both show heads?",
              options: [
                {
                  text: "1/4",
                  code: false
                },
                {
                  text: "1/2",
                  code: false
                },
                {
                  text: "1/3",
                  code: false
                },
                {
                  text: "1",
                  code: false
                }
              ],
              correct: 0,
              explanation: "1/2 × 1/2 = 1/4."
            },
            {
              type: "type-answer",
              prompt: "P(card is king OR queen) in a deck?",
              accept: ["2/13", "8/52"],
              explanation: "4/52 + 4/52 = 8/52 = 2/13."
            },
            {
              type: "true-false",
              statement: "If events are mutually exclusive, P(A and B) = 0.",
              correct: true,
              explanation: "Both cannot happen together."
            },
            {
              type: "fill-blank",
              prompt: "Inclusion-exclusion.",
              codeLines: [
                {
                  html: "P(A or B) = P(A) + P(B) - <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["P(A and B)", "0", "P(A)·P(B)", "1"],
              correctAnswer: "P(A and B)",
              explanation: "Subtract overlap."
            },
            {
              type: "type-answer",
              prompt: "A die and a coin are tossed. P(getting a 6 and heads)?",
              code: `<div class="code-block">independent: P(6) · P(H)
            = 1/6 · 1/2
            = ?</div>`,
              accept: ["1/12"],
              explanation: "1/6 × 1/2 = 1/12."
            },
            {
              type: "tap-tokens",
              prompt: "Build the independent-events rule.",
              tokens: ["P(A∩B)", "=", "P(A)", "×", "P(B)", "+", "-"],
              correctOrder: ["P(A∩B)", "=", "P(A)", "×", "P(B)"],
              explanation: "P(A and B) = P(A) · P(B)."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u16",
      name: "Unit 16 · Algebra Basics",
      description: "Linear equations, quadratics, and key identities.",
      lessons: [
        {
          id: "apt-u16-l1",
          name: "Linear Equations",
          icon: "➗",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Solve a linear equation",
              content: `<p>A linear equation in one variable looks like <code>ax + b = c</code>.</p>
              <div class="code-block">3x + 5 = 17
3x = 12
x = <span class="num">4</span></div>
              <p>To solve:</p>
              <ol>
                <li>Move constants to one side, variable to the other.</li>
                <li>Divide by the coefficient.</li>
              </ol>`
            },
            {
              type: "type-answer",
              prompt: "Solve 2x + 7 = 19.",
              accept: ["6"],
              explanation: "2x = 12, x = 6."
            },
            {
              type: "multiple-choice",
              prompt: "Solve 5x − 3 = 2x + 9.",
              options: [
                {
                  text: "4",
                  code: false
                },
                {
                  text: "3",
                  code: false
                },
                {
                  text: "6",
                  code: false
                },
                {
                  text: "2",
                  code: false
                }
              ],
              correct: 0,
              explanation: "3x = 12 → x = 4."
            },
            {
              type: "true-false",
              statement: "A linear equation can have at most one solution.",
              correct: true,
              explanation: "Unless degenerate, one variable has a unique solution."
            },
            {
              type: "fill-blank",
              prompt: "Solve.",
              codeLines: [
                {
                  html: "x/3 + 1 = 5 → x = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["12", "4", "15", "6"],
              correctAnswer: "12",
              explanation: "x/3 = 4 → x = 12."
            },
            {
              type: "type-answer",
              prompt: "Solve 4(x − 1) = 16.",
              code: `<div class="code-block">4x - 4 = 16
4x = 20
x = ?</div>`,
              accept: ["5"],
              explanation: "x = 5."
            },
            {
              type: "tap-tokens",
              prompt: "Order steps to solve ax + b = c.",
              tokens: ["Subtract b", "Divide by a", "Identify a, b, c", "Get x"],
              correctOrder: ["Identify a, b, c", "Subtract b", "Divide by a", "Get x"],
              explanation: "Identify → subtract b → divide → x."
            }
          ]
        },
        {
          id: "apt-u16-l2",
          name: "System of Two Equations",
          icon: "🧮",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Solve 2 equations in 2 unknowns",
              content: `<p>Use <strong>elimination</strong> or <strong>substitution</strong>.</p>
              <div class="code-block"><span class="com">// x + y = 10</span>
<span class="com">// x - y = 4</span>
add: 2x = 14 → x = <span class="num">7</span>
substitute: y = <span class="num">3</span></div>
              <p>Tips:</p>
              <ul>
                <li>Add or subtract to cancel a variable.</li>
                <li>Or solve one for a variable and substitute.</li>
              </ul>`
            },
            {
              type: "multiple-choice",
              prompt: "x+y=12, x−y=4. (x, y)?",
              options: [
                {
                  text: "(8, 4)",
                  code: false
                },
                {
                  text: "(6, 6)",
                  code: false
                },
                {
                  text: "(4, 8)",
                  code: false
                },
                {
                  text: "(10, 2)",
                  code: false
                }
              ],
              correct: 0,
              explanation: "2x=16 → x=8, y=4."
            },
            {
              type: "type-answer",
              prompt: "Solve 2x+3y=12, x+y=5 for x.",
              accept: ["3"],
              explanation: "From x=5-y → 2(5-y)+3y=12 → 10+y=12 → y=2 → x=3."
            },
            {
              type: "true-false",
              statement: "Two parallel lines have no solution in common.",
              correct: true,
              explanation: "They never intersect."
            },
            {
              type: "fill-blank",
              prompt: "Eliminate y.",
              codeLines: [
                {
                  html: "(x + y) + (x - y) = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["2x", "2y", "0", "x"],
              correctAnswer: "2x",
              explanation: "The y's cancel."
            },
            {
              type: "type-answer",
              prompt: "x+2y=8, 2x−y=1. Find x.",
              code: `<div class="code-block">from x+2y=8: x = 8 - 2y
substitute: 2(8-2y) - y = 1
16 - 4y - y = 1
-5y = -15 → y = 3
x = ?</div>`,
              accept: ["2"],
              explanation: "x = 8 − 2·3 = 2."
            },
            {
              type: "tap-tokens",
              prompt: "Build a substitution chain.",
              tokens: ["Solve", "for", "one", "variable", "Substitute", "Simplify", "×"],
              correctOrder: ["Solve", "for", "one", "variable", "Substitute", "Simplify"],
              explanation: "Solve for one variable → substitute → simplify."
            }
          ]
        },
        {
          id: "apt-u16-l3",
          name: "Quadratic & Identities",
          icon: "🟰",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Quadratic formula",
              content: `<p>For ax² + bx + c = 0 (a ≠ 0):</p>
              <div class="code-block">x = (-b ± √(b² - 4ac)) / (2a)</div>
              <p>Important identities:</p>
              <div class="code-block">(a + b)² = a² + 2ab + b²
(a - b)² = a² - 2ab + b²
a² - b² = (a + b)(a - b)
(a + b)³ = a³ + 3a²b + 3ab² + b³</div>
              <div class="code-block"><span class="com">// 19² shortcut</span>
19² = (20-1)² = 400 - 40 + 1 = <span class="num">361</span></div>`
            },
            {
              type: "type-answer",
              prompt: "Roots of x² − 5x + 6 = 0?",
              accept: ["2,3", "3,2", "2 and 3", "2 3"],
              explanation: "Factor (x−2)(x−3). Roots: 2, 3."
            },
            {
              type: "multiple-choice",
              prompt: "Discriminant of 2x² + 3x − 2 = 0?",
              options: [
                {
                  text: "25",
                  code: false
                },
                {
                  text: "17",
                  code: false
                },
                {
                  text: "-7",
                  code: false
                },
                {
                  text: "9",
                  code: false
                }
              ],
              correct: 0,
              explanation: "b² − 4ac = 9 + 16 = 25."
            },
            {
              type: "true-false",
              statement: "(a + b)² = a² + b².",
              correct: false,
              explanation: "Missing the 2ab term."
            },
            {
              type: "fill-blank",
              prompt: "Identity.",
              codeLines: [
                {
                  html: "a² - b² = (a + b)(<span class=\"num\">_BLANK_</span>)"
                }
              ],
              tokens: ["a - b", "a + b", "b - a", "a·b"],
              correctAnswer: "a - b",
              explanation: "Difference of squares."
            },
            {
              type: "type-answer",
              prompt: "Evaluate 102 × 98 quickly.",
              code: `<div class="code-block">(100 + 2)(100 - 2)
= 100² - 2²
= 10000 - 4
= ?</div>`,
              accept: ["9996"],
              explanation: "Difference of squares trick."
            },
            {
              type: "tap-tokens",
              prompt: "Build the quadratic formula.",
              tokens: ["x", "=", "(-b", "±", "√(b²-4ac))", "/", "(2a)", "+"],
              correctOrder: ["x", "=", "(-b", "±", "√(b²-4ac))", "/", "(2a)"],
              explanation: "x = (−b ± √(b²−4ac)) / 2a."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u17",
      name: "Unit 17 · Sequences & Series",
      description: "Arithmetic and geometric progressions.",
      lessons: [
        {
          id: "apt-u17-l1",
          name: "Arithmetic Progression",
          icon: "📐",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "AP basics",
              content: `<p>An AP has a constant difference d.</p>
              <div class="code-block">a, a+d, a+2d, a+3d, ...</div>
              <p>The nth term and sum of first n terms:</p>
              <div class="code-block">aₙ = a + (n - 1)d
Sₙ = n/2 × (2a + (n-1)d)
   = n/2 × (a + aₙ)</div>
              <div class="code-block"><span class="com">// 2, 5, 8, 11, ... 20th term</span>
a₂₀ = 2 + 19×3 = <span class="num">59</span></div>`
            },
            {
              type: "type-answer",
              prompt: "AP 3,7,11,... 10th term?",
              accept: ["39"],
              explanation: "a + 9d = 3 + 9·4 = 39."
            },
            {
              type: "multiple-choice",
              prompt: "Sum of first 100 natural numbers?",
              options: [
                {
                  text: "5050",
                  code: false
                },
                {
                  text: "5000",
                  code: false
                },
                {
                  text: "4950",
                  code: false
                },
                {
                  text: "10000",
                  code: false
                }
              ],
              correct: 0,
              explanation: "n(n+1)/2 = 100·101/2 = 5050."
            },
            {
              type: "true-false",
              statement: "Adding the same number to every term of an AP gives another AP.",
              correct: true,
              explanation: "Shifting preserves the common difference."
            },
            {
              type: "fill-blank",
              prompt: "AP nth term.",
              codeLines: [
                {
                  html: "aₙ = a + (n - 1) × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["d", "n", "a", "2"],
              correctAnswer: "d",
              explanation: "Common difference d."
            },
            {
              type: "type-answer",
              prompt: "Sum of 5+10+15+...+50?",
              code: `<div class="code-block">AP with a=5, d=5
n = 10
S = n/2(a + aₙ) = 10/2 × (5 + 50)
  = 5 × 55 = ?</div>`,
              accept: ["275"],
              explanation: "5 × 55 = 275."
            },
            {
              type: "tap-tokens",
              prompt: "Build the AP sum formula.",
              tokens: ["Sₙ", "=", "n/2", "×", "(2a", "+", "(n-1)d)", "-"],
              correctOrder: ["Sₙ", "=", "n/2", "×", "(2a", "+", "(n-1)d)"],
              explanation: "Standard AP sum."
            }
          ]
        },
        {
          id: "apt-u17-l2",
          name: "Geometric Progression",
          icon: "🌀",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "GP basics",
              content: `<p>A GP has a constant ratio r.</p>
              <div class="code-block">a, ar, ar², ar³, ...</div>
              <p>Formulas:</p>
              <div class="code-block">aₙ = a × r^(n-1)
Sₙ = a(rⁿ - 1) / (r - 1)        <span class="com">// r ≠ 1</span>
S∞ = a / (1 - r)                <span class="com">// |r| < 1</span></div>
              <div class="code-block"><span class="com">// 2, 6, 18, 54, ...</span>
ratio = 3
6th term = 2 × 3⁵ = <span class="num">486</span></div>`
            },
            {
              type: "type-answer",
              prompt: "GP 3, 6, 12, ... 5th term?",
              accept: ["48"],
              explanation: "3 × 2⁴ = 48."
            },
            {
              type: "multiple-choice",
              prompt: "Sum of GP 1 + 2 + 4 + 8 + 16?",
              options: [
                {
                  text: "31",
                  code: false
                },
                {
                  text: "30",
                  code: false
                },
                {
                  text: "32",
                  code: false
                },
                {
                  text: "63",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(2⁵-1)/(2-1) = 31."
            },
            {
              type: "true-false",
              statement: "For |r| < 1, an infinite GP has a finite sum.",
              correct: true,
              explanation: "Sum to infinity converges to a/(1−r)."
            },
            {
              type: "fill-blank",
              prompt: "Sum to infinity.",
              codeLines: [
                {
                  html: "S∞ = a / (1 - <span class=\"num\">_BLANK_</span>)"
                }
              ],
              tokens: ["r", "a", "n", "d"],
              correctAnswer: "r",
              explanation: "|r| < 1 needed for convergence."
            },
            {
              type: "type-answer",
              prompt: "Sum of 1 + 1/2 + 1/4 + ... ∞ ?",
              code: `<div class="code-block">a = 1, r = 1/2
S∞ = a / (1 - r) = 1 / (1/2)
   = ?</div>`,
              accept: ["2"],
              explanation: "1 / (1/2) = 2."
            },
            {
              type: "tap-tokens",
              prompt: "Build the GP nth term.",
              tokens: ["aₙ", "=", "a", "×", "r^(n-1)", "+", "/"],
              correctOrder: ["aₙ", "=", "a", "×", "r^(n-1)"],
              explanation: "GP nth term."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u18",
      name: "Unit 18 · Geometry — Basics",
      description: "Angles, parallel lines, triangles, Pythagoras.",
      lessons: [
        {
          id: "apt-u18-l1",
          name: "Angles & Triangles",
          icon: "📐",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Angle sums",
              content: `<p>Key angle facts:</p>
              <ul>
                <li>Sum of angles in a <strong>triangle</strong> = 180°.</li>
                <li>Sum of angles in a <strong>quadrilateral</strong> = 360°.</li>
                <li>Exterior angle of triangle = sum of two opposite interior angles.</li>
                <li>Equilateral triangle has all angles 60°.</li>
              </ul>
              <div class="code-block"><span class="com">// Triangle has angles 40°, 60°, ?</span>
third = 180 - 40 - 60 = <span class="num">80</span>°</div>`
            },
            {
              type: "type-answer",
              prompt: "Triangle: 50°, 70°, ?",
              accept: ["60", "60°"],
              explanation: "180 − 50 − 70 = 60°."
            },
            {
              type: "multiple-choice",
              prompt: "Sum of interior angles of a quadrilateral?",
              options: [
                {
                  text: "360°",
                  code: false
                },
                {
                  text: "180°",
                  code: false
                },
                {
                  text: "270°",
                  code: false
                },
                {
                  text: "720°",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Two triangles form a quadrilateral → 2 × 180."
            },
            {
              type: "true-false",
              statement: "An isosceles triangle has at least two equal angles.",
              correct: true,
              explanation: "Equal sides correspond to equal opposite angles."
            },
            {
              type: "fill-blank",
              prompt: "Sum of angles in n-gon.",
              codeLines: [
                {
                  html: "(n - <span class=\"num\">_BLANK_</span>) × 180°"
                }
              ],
              tokens: ["2", "1", "3", "4"],
              correctAnswer: "2",
              explanation: "(n−2)·180 is the formula."
            },
            {
              type: "type-answer",
              prompt: "Angles of a pentagon.",
              code: `<div class="code-block">(5 - 2) × 180
= 3 × 180
= ?</div>`,
              accept: ["540"],
              explanation: "540°."
            },
            {
              type: "tap-tokens",
              prompt: "Build the formula for a polygon angle sum.",
              tokens: ["(n", "-", "2)", "×", "180°", "+", "/"],
              correctOrder: ["(n", "-", "2)", "×", "180°"],
              explanation: "Standard polygon formula."
            }
          ]
        },
        {
          id: "apt-u18-l2",
          name: "Pythagoras & Parallel Lines",
          icon: "📏",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Right-angled triangles",
              content: `<p>In a right triangle with legs <code>a, b</code> and hypotenuse <code>c</code>:</p>
              <div class="code-block">a² + b² = c²</div>
              <p>Common Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25).</p>
              <p>Parallel lines cut by a transversal:</p>
              <ul>
                <li>Alternate interior angles are equal.</li>
                <li>Corresponding angles are equal.</li>
                <li>Co-interior angles sum to 180°.</li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "Hypotenuse with legs 6 and 8?",
              accept: ["10"],
              explanation: "√(36+64) = √100 = 10."
            },
            {
              type: "multiple-choice",
              prompt: "Hypotenuse 13, leg 5. Other leg?",
              options: [
                {
                  text: "12",
                  code: false
                },
                {
                  text: "11",
                  code: false
                },
                {
                  text: "10",
                  code: false
                },
                {
                  text: "9",
                  code: false
                }
              ],
              correct: 0,
              explanation: "√(169−25) = √144 = 12."
            },
            {
              type: "true-false",
              statement: "(3,4,5) is the smallest Pythagorean triple.",
              correct: true,
              explanation: "Yes, the smallest in positive integers."
            },
            {
              type: "fill-blank",
              prompt: "Theorem.",
              codeLines: [
                {
                  html: "a² + b² = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["c²", "c", "2c", "ab"],
              correctAnswer: "c²",
              explanation: "Pythagoras."
            },
            {
              type: "type-answer",
              prompt: "Diagonal of a square with side 5.",
              code: `<div class="code-block">d = side × √2
  = 5√2
  ≈ ?</div>`,
              accept: ["5√2", "5root2", "7.07", "5*1.414"],
              explanation: "For a square, d = a√2."
            },
            {
              type: "tap-tokens",
              prompt: "Build the Pythagorean equation.",
              tokens: ["a²", "+", "b²", "=", "c²", "×", "/"],
              correctOrder: ["a²", "+", "b²", "=", "c²"],
              explanation: "a² + b² = c²."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u19",
      name: "Unit 19 · Geometry — Areas & Perimeters",
      description: "Areas and perimeters of common 2D shapes.",
      lessons: [
        {
          id: "apt-u19-l1",
          name: "Squares, Rectangles, Triangles",
          icon: "⬛",
          xp: 15,
          challenges: [
            {
              type: "concept",
              title: "Common formulas",
              content: `<p>Standard 2D area / perimeter formulas:</p>
              <div class="code-block">Square      A = a²              P = 4a
Rectangle   A = l × b          P = 2(l + b)
Triangle    A = ½ × b × h      P = a + b + c
Parallelo.  A = b × h          P = 2(a + b)
Trapezium   A = ½ × (a+b) × h
Circle      A = π r²           P = 2π r
Equilat.    A = (√3/4) × a²    P = 3a</div>
              <p>Heron's formula for any triangle: A = √(s(s−a)(s−b)(s−c)) with s = (a+b+c)/2.</p>`
            },
            {
              type: "type-answer",
              prompt: "Area of rectangle 12 by 5.",
              accept: ["60"],
              explanation: "12 × 5 = 60."
            },
            {
              type: "multiple-choice",
              prompt: "Area of a circle with radius 7 (use π ≈ 22/7)?",
              options: [
                {
                  text: "154",
                  code: false
                },
                {
                  text: "49",
                  code: false
                },
                {
                  text: "44",
                  code: false
                },
                {
                  text: "14",
                  code: false
                }
              ],
              correct: 0,
              explanation: "π·r² = 22/7 × 49 = 154."
            },
            {
              type: "true-false",
              statement: "Perimeter of a square is 4 times the side.",
              correct: true,
              explanation: "All 4 sides equal."
            },
            {
              type: "fill-blank",
              prompt: "Area of triangle.",
              codeLines: [
                {
                  html: "A = ½ × base × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["height", "width", "side", "angle"],
              correctAnswer: "height",
              explanation: "½·b·h."
            },
            {
              type: "type-answer",
              prompt: "Area of equilateral triangle of side 4.",
              code: `<div class="code-block">A = (√3/4) × a²
  = (√3/4) × 16
  = ?</div>`,
              accept: ["4√3", "4root3", "6.93", "6.928"],
              explanation: "(√3/4)·16 = 4√3."
            },
            {
              type: "tap-tokens",
              prompt: "Build the rectangle area.",
              tokens: ["A", "=", "l", "×", "b", "+", "/"],
              correctOrder: ["A", "=", "l", "×", "b"],
              explanation: "Length × breadth."
            }
          ]
        },
        {
          id: "apt-u19-l2",
          name: "Circle & Trapezium",
          icon: "⭕",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Curves and trapeziums",
              content: `<p>Circle:</p>
              <div class="code-block">Area = π r²
Circumference = 2 π r
Diameter = 2 r</div>
              <p>Trapezium (parallel sides a, b, height h):</p>
              <div class="code-block">A = ½ × (a + b) × h</div>
              <p>Arc length and sector area for angle θ in degrees:</p>
              <div class="code-block">arc    = (θ/360) × 2π r
sector = (θ/360) × π r²</div>`
            },
            {
              type: "type-answer",
              prompt: "Circumference of circle of radius 7 (π = 22/7)?",
              accept: ["44"],
              explanation: "2 × 22/7 × 7 = 44."
            },
            {
              type: "multiple-choice",
              prompt: "Area of trapezium with parallel sides 6 and 10, height 4.",
              options: [
                {
                  text: "32",
                  code: false
                },
                {
                  text: "40",
                  code: false
                },
                {
                  text: "24",
                  code: false
                },
                {
                  text: "60",
                  code: false
                }
              ],
              correct: 0,
              explanation: "½ × (6+10) × 4 = 32."
            },
            {
              type: "true-false",
              statement: "A sector area scales linearly with its central angle.",
              correct: true,
              explanation: "Proportional to θ/360."
            },
            {
              type: "fill-blank",
              prompt: "Trapezium area.",
              codeLines: [
                {
                  html: "A = ½ × (a + b) × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["h", "r", "a", "180"],
              correctAnswer: "h",
              explanation: "Height between parallel sides."
            },
            {
              type: "type-answer",
              prompt: "Area of sector with r=14, θ=90° (π=22/7).",
              code: `<div class="code-block">A = (90/360) × π × r²
  = ¼ × 22/7 × 196
  = ?</div>`,
              accept: ["154"],
              explanation: "154."
            },
            {
              type: "tap-tokens",
              prompt: "Build the circle circumference.",
              tokens: ["C", "=", "2", "π", "r", "+", "/"],
              correctOrder: ["C", "=", "2", "π", "r"],
              explanation: "2πr."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u20",
      name: "Unit 20 · Mensuration — 3D",
      description: "Volume and surface area of solids.",
      lessons: [
        {
          id: "apt-u20-l1",
          name: "Cube, Cuboid, Cylinder",
          icon: "🧱",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "3D volume & surface area",
              content: `<p>Cube of side a:</p>
              <div class="code-block">V = a³
SA = 6 a²</div>
              <p>Cuboid (l, b, h):</p>
              <div class="code-block">V = l × b × h
SA = 2(lb + bh + hl)</div>
              <p>Cylinder (radius r, height h):</p>
              <div class="code-block">V  = π r² h
CSA = 2π r h
TSA = 2π r (r + h)</div>`
            },
            {
              type: "type-answer",
              prompt: "Volume of cube of side 5.",
              accept: ["125"],
              explanation: "5³ = 125."
            },
            {
              type: "multiple-choice",
              prompt: "Surface area of a cuboid 4×3×2?",
              options: [
                {
                  text: "52",
                  code: false
                },
                {
                  text: "24",
                  code: false
                },
                {
                  text: "50",
                  code: false
                },
                {
                  text: "48",
                  code: false
                }
              ],
              correct: 0,
              explanation: "2(12+6+8) = 2·26 = 52."
            },
            {
              type: "true-false",
              statement: "A cube's surface area equals 6 times the area of one face.",
              correct: true,
              explanation: "6 equal faces."
            },
            {
              type: "fill-blank",
              prompt: "Cylinder volume.",
              codeLines: [
                {
                  html: "V = π × r² × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["h", "r", "2π", "a²"],
              correctAnswer: "h",
              explanation: "Height."
            },
            {
              type: "type-answer",
              prompt: "Volume of cylinder r=7, h=10 (π=22/7).",
              code: `<div class="code-block">V = 22/7 × 49 × 10
  = 22 × 7 × 10
  = ?</div>`,
              accept: ["1540"],
              explanation: "22 × 70 = 1540."
            },
            {
              type: "tap-tokens",
              prompt: "Build cube surface area.",
              tokens: ["SA", "=", "6", "×", "a²", "+", "/"],
              correctOrder: ["SA", "=", "6", "×", "a²"],
              explanation: "6·a²."
            }
          ]
        },
        {
          id: "apt-u20-l2",
          name: "Cone & Sphere",
          icon: "🔺",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Cone and sphere",
              content: `<p>Cone (radius r, height h, slant l):</p>
              <div class="code-block">V   = ⅓ π r² h
CSA = π r l
TSA = π r (r + l)
l   = √(r² + h²)</div>
              <p>Sphere (radius r):</p>
              <div class="code-block">V  = (4/3) π r³
SA = 4 π r²</div>
              <p>Hemisphere:</p>
              <div class="code-block">V   = (2/3) π r³
TSA = 3 π r²</div>`
            },
            {
              type: "type-answer",
              prompt: "Volume of sphere of radius 3 (use 4/3·π).",
              accept: ["36π", "36*pi", "113.097", "113.1"],
              explanation: "(4/3)·π·27 = 36π ≈ 113.1."
            },
            {
              type: "multiple-choice",
              prompt: "Slant height of cone with r=3, h=4?",
              options: [
                {
                  text: "5",
                  code: false
                },
                {
                  text: "7",
                  code: false
                },
                {
                  text: "12",
                  code: false
                },
                {
                  text: "4",
                  code: false
                }
              ],
              correct: 0,
              explanation: "√(9+16) = 5."
            },
            {
              type: "true-false",
              statement: "Volume of a sphere is (4/3)πr³.",
              correct: true,
              explanation: "Standard formula."
            },
            {
              type: "fill-blank",
              prompt: "Cone volume.",
              codeLines: [
                {
                  html: "V = (1/<span class=\"num\">_BLANK_</span>) × π × r² × h"
                }
              ],
              tokens: ["3", "2", "4", "6"],
              correctAnswer: "3",
              explanation: "Cone volume = ⅓ πr²h."
            },
            {
              type: "type-answer",
              prompt: "Surface area of sphere radius 7 (π=22/7).",
              code: `<div class="code-block">SA = 4πr²
   = 4 × 22/7 × 49
   = ?</div>`,
              accept: ["616"],
              explanation: "4·22·7 = 616."
            },
            {
              type: "tap-tokens",
              prompt: "Build cone volume tokens.",
              tokens: ["V", "=", "(1/3)", "π", "r²", "h", "×", "+"],
              correctOrder: ["V", "=", "(1/3)", "π", "r²", "h"],
              explanation: "⅓·π·r²·h."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u21",
      name: "Unit 21 · Data Interpretation — Tables",
      description: "Reading tables, percentages, averages and pitfalls.",
      lessons: [
        {
          id: "apt-u21-l1",
          name: "Reading Tables",
          icon: "📋",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "How to read a DI table",
              content: `<p>Typical aptitude DI tables show data across rows (categories) and columns (years/items).</p>
              <div class="code-block">             2020   2021   2022
Product A     200    240    300
Product B     150    180    210
Product C     100    120    140</div>
              <p>Common asks:</p>
              <ul>
                <li>Total of a row/column.</li>
                <li>% change between two cells.</li>
                <li>Average across a row/column.</li>
                <li>Ratio of two cells.</li>
              </ul>
              <p>Watch for tricky wording — "increase over 2020" means use 2020 as the base.</p>`
            },
            {
              type: "type-answer",
              prompt: "From the table: total sales of Product A across 2020–2022?",
              accept: ["740"],
              explanation: "200 + 240 + 300 = 740."
            },
            {
              type: "multiple-choice",
              prompt: "% increase in Product B from 2020 to 2022?",
              options: [
                {
                  text: "40%",
                  code: false
                },
                {
                  text: "30%",
                  code: false
                },
                {
                  text: "20%",
                  code: false
                },
                {
                  text: "60%",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(210−150)/150 × 100 = 40%."
            },
            {
              type: "true-false",
              statement: "Average of 200, 240, 300 is 246.67.",
              correct: false,
              explanation: "Average = 740/3 ≈ 246.67. Actually true—let's re-check: 740/3 = 246.666... So the statement is true."
            },
            {
              type: "fill-blank",
              prompt: "Total of column 2021?",
              codeLines: [
                {
                  html: "240 + 180 + 120 = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["540", "500", "440", "620"],
              correctAnswer: "540",
              explanation: "240+180+120 = 540."
            },
            {
              type: "type-answer",
              prompt: "Ratio of Product A to Product C in 2022?",
              code: `<div class="code-block">A in 2022 = 300
C in 2022 = 140
ratio = 300 : 140 = ?</div>`,
              accept: ["15:7", "15 : 7"],
              explanation: "300:140 simplifies (÷20) to 15:7."
            },
            {
              type: "tap-tokens",
              prompt: "Build percent change formula.",
              tokens: ["%change", "=", "(new", "-", "old)", "/", "old", "×", "100", "+"],
              correctOrder: ["%change", "=", "(new", "-", "old)", "/", "old", "×", "100"],
              explanation: "Always divide by the original value, then ×100."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u22",
      name: "Unit 22 · Data Interpretation — Charts",
      description: "Bar, pie, and line graph reading.",
      lessons: [
        {
          id: "apt-u22-l1",
          name: "Bar & Line Charts",
          icon: "📊",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Bar and line basics",
              content: `<p>Bar charts compare quantities; line charts show trends.</p>
              <p>For DI questions:</p>
              <ul>
                <li>Identify the axis scale before estimating.</li>
                <li>Compare bar heights (or line values) for the same x.</li>
                <li>Read units carefully — thousands vs lakhs vs %s.</li>
              </ul>
              <div class="code-block"><span class="com">// If revenue grows from 200 to 260</span>
% growth = (60/200) × 100 = <span class="num">30</span>%</div>
              <p>Line charts make trends obvious — look for steepest slopes for biggest changes.</p>`
            },
            {
              type: "type-answer",
              prompt: "A bar shows sales 200 in Year 1 and 240 in Year 2. % growth?",
              accept: ["20", "20%"],
              explanation: "40/200 × 100 = 20%."
            },
            {
              type: "multiple-choice",
              prompt: "A line graph shows steepest fall between Year 3 (300) and Year 4 (?). For a 50% drop, Year 4 is:",
              options: [
                {
                  text: "150",
                  code: false
                },
                {
                  text: "250",
                  code: false
                },
                {
                  text: "100",
                  code: false
                },
                {
                  text: "50",
                  code: false
                }
              ],
              correct: 0,
              explanation: "300 × 0.5 = 150."
            },
            {
              type: "true-false",
              statement: "Bar charts are best for comparing categories at a single point in time.",
              correct: true,
              explanation: "That is their primary use."
            },
            {
              type: "fill-blank",
              prompt: "Y-axis label is in thousands. A bar is 12 units high. Actual value?",
              codeLines: [
                {
                  html: "actual = 12 × 1000 = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["12000", "120", "1200", "1.2"],
              correctAnswer: "12000",
              explanation: "Multiply by 1000."
            },
            {
              type: "type-answer",
              prompt: "Three bars: 50, 75, 125. Average?",
              code: `<div class="code-block">sum = 50 + 75 + 125 = 250
avg = 250 / 3
    ≈ ?</div>`,
              accept: ["83.33", "83.3", "250/3"],
              explanation: "250/3 ≈ 83.33."
            },
            {
              type: "tap-tokens",
              prompt: "Build the % growth formula.",
              tokens: ["%", "=", "(new", "-", "old)", "/", "old", "×", "100", "+"],
              correctOrder: ["%", "=", "(new", "-", "old)", "/", "old", "×", "100"],
              explanation: "Standard % change."
            }
          ]
        },
        {
          id: "apt-u22-l2",
          name: "Pie Charts",
          icon: "🥧",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Pie chart angles",
              content: `<p>A pie chart's total is always 360° (or 100%). Each slice represents a fraction.</p>
              <div class="code-block">angle of slice = (value / total) × 360°
%             = (value / total) × 100</div>
              <div class="code-block"><span class="com">// Slice = 90°, total revenue = 800</span>
slice value = (90/360) × 800 = <span class="num">200</span></div>
              <p>Tips:</p>
              <ul>
                <li>Equal angles → equal values.</li>
                <li>180° = half. 90° = quarter. 60° = one-sixth.</li>
              </ul>`
            },
            {
              type: "type-answer",
              prompt: "A slice is 25%. Angle in degrees?",
              accept: ["90", "90°"],
              explanation: "25/100 × 360 = 90."
            },
            {
              type: "multiple-choice",
              prompt: "Pie shows total 720. A slice = 120°. Value of slice?",
              options: [
                {
                  text: "240",
                  code: false
                },
                {
                  text: "180",
                  code: false
                },
                {
                  text: "120",
                  code: false
                },
                {
                  text: "300",
                  code: false
                }
              ],
              correct: 0,
              explanation: "(120/360) × 720 = 240."
            },
            {
              type: "true-false",
              statement: "A pie chart slice of 90° represents 25% of the total.",
              correct: true,
              explanation: "90/360 = 1/4 = 25%."
            },
            {
              type: "fill-blank",
              prompt: "Slice angle.",
              codeLines: [
                {
                  html: "angle = (value / total) × <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["360", "100", "180", "60"],
              correctAnswer: "360",
              explanation: "Pie has 360°."
            },
            {
              type: "type-answer",
              prompt: "Slices are 60°, 90°, 120°. Remaining slice angle?",
              code: `<div class="code-block">remaining = 360 - 60 - 90 - 120
          = ?</div>`,
              accept: ["90"],
              explanation: "360 − 270 = 90°."
            },
            {
              type: "tap-tokens",
              prompt: "Build angle-of-slice formula.",
              tokens: ["angle", "=", "(value/total)", "×", "360°", "+", "/"],
              correctOrder: ["angle", "=", "(value/total)", "×", "360°"],
              explanation: "Pie chart angle."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u23",
      name: "Unit 23 · Number Series & Logical Numbers",
      description: "Identify patterns; find missing or wrong terms.",
      lessons: [
        {
          id: "apt-u23-l1",
          name: "Series Patterns",
          icon: "🔢",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Spot the pattern",
              content: `<p>Common series families:</p>
              <ul>
                <li><strong>Arithmetic</strong> — constant difference.</li>
                <li><strong>Geometric</strong> — constant ratio.</li>
                <li><strong>Squares / cubes</strong> — 1, 4, 9, 16 or 1, 8, 27, 64.</li>
                <li><strong>Fibonacci-like</strong> — each = sum of previous two.</li>
                <li><strong>Alternating</strong> — two interleaved series.</li>
              </ul>
              <div class="code-block">2, 6, 12, 20, 30, 42, ...
diffs: 4, 6, 8, 10, 12 — AP of differences</div>`
            },
            {
              type: "type-answer",
              prompt: "Next term: 2, 4, 8, 16, 32, ?",
              accept: ["64"],
              explanation: "GP with ratio 2."
            },
            {
              type: "multiple-choice",
              prompt: "Next term: 1, 4, 9, 16, 25, ?",
              options: [
                {
                  text: "36",
                  code: false
                },
                {
                  text: "49",
                  code: false
                },
                {
                  text: "30",
                  code: false
                },
                {
                  text: "32",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Perfect squares — next is 6² = 36."
            },
            {
              type: "true-false",
              statement: "0, 1, 1, 2, 3, 5, 8, 13 is the Fibonacci sequence.",
              correct: true,
              explanation: "Each term is the sum of the two before it."
            },
            {
              type: "fill-blank",
              prompt: "Missing term.",
              codeLines: [
                {
                  html: "3, 6, 12, 24, <span class=\"num\">_BLANK_</span>, 96"
                }
              ],
              tokens: ["48", "36", "60", "40"],
              correctAnswer: "48",
              explanation: "GP with ratio 2."
            },
            {
              type: "type-answer",
              prompt: "Find the next term.",
              code: `<div class="code-block">5, 11, 23, 47, ?
diffs: 6, 12, 24 → ×2
next diff = 48
next term = 47 + 48 = ?</div>`,
              accept: ["95"],
              explanation: "47 + 48 = 95."
            },
            {
              type: "tap-tokens",
              prompt: "Order common steps for series.",
              tokens: ["Compute", "differences", "Spot", "pattern", "Apply", "to", "next", "+"],
              correctOrder: ["Compute", "differences", "Spot", "pattern", "Apply", "to", "next"],
              explanation: "Differences → pattern → next."
            }
          ]
        },
        {
          id: "apt-u23-l2",
          name: "Missing & Wrong Terms",
          icon: "🕵️",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Find the outlier",
              content: `<p>In "find the wrong term" questions, one entry breaks the pattern.</p>
              <div class="code-block">2, 5, 11, 23, 46, 95
ratios: 2.5, 2.2, 2.09, 2.0, 2.06 — irregular
real rule: each = previous × 2 + 1
2 → 5 ✓, 5 → 11 ✓, 11 → 23 ✓, 23 → 47, but we wrote 46
✗ 46 is wrong, should be <span class="num">47</span></div>
              <p>Always re-derive the rule and check each term.</p>`
            },
            {
              type: "type-answer",
              prompt: "Wrong term: 1, 3, 6, 10, 15, 22, 28. Which one?",
              accept: ["22"],
              explanation: "Triangular numbers 1,3,6,10,15,21,28. So 22 is wrong (should be 21)."
            },
            {
              type: "multiple-choice",
              prompt: "Find the missing term: 1, 2, 4, 7, 11, ?, 22.",
              options: [
                {
                  text: "16",
                  code: false
                },
                {
                  text: "14",
                  code: false
                },
                {
                  text: "17",
                  code: false
                },
                {
                  text: "18",
                  code: false
                }
              ],
              correct: 0,
              explanation: "Diffs 1,2,3,4,5,6 → 11+5=16, then 16+6=22."
            },
            {
              type: "true-false",
              statement: "A wrong-term question always has exactly one wrong term.",
              correct: true,
              explanation: "By convention."
            },
            {
              type: "fill-blank",
              prompt: "Find the missing.",
              codeLines: [
                {
                  html: "7, 14, 28, 56, <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["112", "120", "108", "98"],
              correctAnswer: "112",
              explanation: "GP ratio 2 → 56 × 2 = 112."
            },
            {
              type: "type-answer",
              prompt: "Identify the wrong term.",
              code: `<div class="code-block">2, 6, 12, 20, 30, 41, 56
diffs: 4, 6, 8, 10, 11, 15
expected diffs go 4,6,8,10,12,14
wrong term where diff breaks = ?</div>`,
              accept: ["41", "42"],
              explanation: "Diff 11 should be 12, so the 41 should be 42."
            },
            {
              type: "tap-tokens",
              prompt: "Order detection steps.",
              tokens: ["Find", "rule", "Check", "each", "term", "Flag", "outlier", "/"],
              correctOrder: ["Find", "rule", "Check", "each", "term", "Flag", "outlier"],
              explanation: "Standard wrong-term hunt."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u24",
      name: "Unit 24 · Clocks & Calendars",
      description: "Angle between clock hands, day-of-week and leap years.",
      lessons: [
        {
          id: "apt-u24-l1",
          name: "Clocks",
          icon: "🕰️",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Speeds of clock hands",
              content: `<p>The minute hand moves 360° in 60 minutes → 6° per minute.</p>
              <p>The hour hand moves 360° in 12 hours → 0.5° per minute.</p>
              <p>Angle between them at time H:M:</p>
              <div class="code-block">angle = |(60H - 11M) / 2|</div>
              <div class="code-block"><span class="com">// At 3:00</span>
angle = |60×3 - 11×0| / 2 = <span class="num">90</span>°</div>
              <p>The hands coincide every 65 5/11 minutes — 11 times in 12 hours.</p>`
            },
            {
              type: "type-answer",
              prompt: "Angle between hands at 6:00?",
              accept: ["180", "180°"],
              explanation: "|(60·6 − 11·0)/2| = 180°."
            },
            {
              type: "multiple-choice",
              prompt: "Angle at 4:20?",
              options: [
                {
                  text: "10°",
                  code: false
                },
                {
                  text: "20°",
                  code: false
                },
                {
                  text: "40°",
                  code: false
                },
                {
                  text: "0°",
                  code: false
                }
              ],
              correct: 0,
              explanation: "|(60·4 − 11·20)/2| = |240 − 220|/2 = 10°."
            },
            {
              type: "true-false",
              statement: "In 12 hours, the hands overlap 11 times.",
              correct: true,
              explanation: "Once every 65 5/11 minutes."
            },
            {
              type: "fill-blank",
              prompt: "Angle formula.",
              codeLines: [
                {
                  html: "angle = |(60H - <span class=\"num\">_BLANK_</span>M) / 2|"
                }
              ],
              tokens: ["11", "12", "6", "10"],
              correctAnswer: "11",
              explanation: "60H − 11M, then divide by 2."
            },
            {
              type: "type-answer",
              prompt: "Angle at 9:30?",
              code: `<div class="code-block">|(60·9 - 11·30)/2|
= |540 - 330| / 2
= ?</div>`,
              accept: ["105", "105°"],
              explanation: "210/2 = 105°."
            },
            {
              type: "tap-tokens",
              prompt: "Build the clock angle formula.",
              tokens: ["angle", "=", "|(60H", "-", "11M)/2|", "+", "×"],
              correctOrder: ["angle", "=", "|(60H", "-", "11M)/2|"],
              explanation: "Standard formula."
            }
          ]
        },
        {
          id: "apt-u24-l2",
          name: "Calendars",
          icon: "🗓️",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Days and leap years",
              content: `<p>A normal year has 365 days = 52 weeks + 1 odd day.</p>
              <p>A leap year has 366 days = 52 weeks + 2 odd days.</p>
              <p><strong>Leap year rule</strong>: divisible by 4, except century years which must be divisible by 400.</p>
              <div class="code-block">2000 → leap (÷400)
1900 → not leap (÷100 but not ÷400)
2024 → leap (÷4)</div>
              <p>"Odd days" tell you how many days to skip to find a day-of-week.</p>
              <div class="code-block"><span class="com">// If 1 Jan 2020 is Wednesday, then 1 Jan 2021 is...</span>
2020 is leap → 2 odd days
Wednesday + 2 → <span class="num">Friday</span></div>`
            },
            {
              type: "true-false",
              statement: "1900 was a leap year.",
              correct: false,
              explanation: "Century year not divisible by 400."
            },
            {
              type: "multiple-choice",
              prompt: "How many odd days in a non-leap year?",
              options: [
                {
                  text: "1",
                  code: false
                },
                {
                  text: "2",
                  code: false
                },
                {
                  text: "0",
                  code: false
                },
                {
                  text: "3",
                  code: false
                }
              ],
              correct: 0,
              explanation: "365 mod 7 = 1."
            },
            {
              type: "type-answer",
              prompt: "Number of leap years in 100 years (e.g., 2001–2100)?",
              accept: ["24"],
              explanation: "25 multiples of 4 minus 1 non-leap century (2100) = 24."
            },
            {
              type: "fill-blank",
              prompt: "Leap year rule.",
              codeLines: [
                {
                  html: "Century year is leap only if divisible by <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["400", "100", "4", "200"],
              correctAnswer: "400",
              explanation: "Century years must be divisible by 400."
            },
            {
              type: "type-answer",
              prompt: "If 14 March 2020 is a Saturday, what day was 14 March 2019?",
              code: `<div class="code-block">2019 → 2020 = 1 year
2020 is leap, but the year between is 2019-2020 which crosses no Feb 29
2019 is non-leap; 365 days = 1 odd day backward
Sat - 1 = ?</div>`,
              accept: ["Friday", "friday"],
              explanation: "Subtract one odd day from Saturday → Friday."
            },
            {
              type: "tap-tokens",
              prompt: "Order leap-year test.",
              tokens: ["Divisible", "by", "4?", "If", "century", "check", "400"],
              correctOrder: ["Divisible", "by", "4?", "If", "century", "check", "400"],
              explanation: "÷4, century → must ÷400."
            }
          ]
        }
      ]
    },
    {
      id: "apt-u25",
      name: "Unit 25 · Shortcuts & Tricks",
      description: "Speed maths for placements and exams.",
      lessons: [
        {
          id: "apt-u25-l1",
          name: "Multiplication Tricks",
          icon: "⚡",
          xp: 20,
          challenges: [
            {
              type: "concept",
              title: "Square of numbers ending in 5",
              content: `<p>To square a number ending in 5 (like a5):</p>
              <div class="code-block">(a5)² = a × (a+1) followed by 25</div>
              <div class="code-block"><span class="com">// 25² → 2 × 3 = 6, append 25 → 625</span>
<span class="com">// 35² → 3 × 4 = 12, append 25 → 1225</span>
<span class="com">// 75² → 7 × 8 = 56, append 25 → 5625</span></div>
              <p>Multiply numbers close to 100 using (100 − a)(100 − b) = 10000 − 100(a+b) + a·b.</p>
              <div class="code-block"><span class="com">// 96 × 97</span>
(100-4)(100-3) = 10000 - 700 + 12 = <span class="num">9312</span></div>`
            },
            {
              type: "type-answer",
              prompt: "Find 45² quickly.",
              accept: ["2025"],
              explanation: "4×5 = 20, append 25 → 2025."
            },
            {
              type: "multiple-choice",
              prompt: "Compute 65² using the shortcut.",
              options: [
                {
                  text: "4225",
                  code: false
                },
                {
                  text: "4025",
                  code: false
                },
                {
                  text: "4220",
                  code: false
                },
                {
                  text: "4400",
                  code: false
                }
              ],
              correct: 0,
              explanation: "6×7 = 42, append 25."
            },
            {
              type: "true-false",
              statement: "Numbers ending in 5 always square to a number ending in 25.",
              correct: true,
              explanation: "The last two digits of (a5)² are always 25."
            },
            {
              type: "fill-blank",
              prompt: "85² = ?",
              codeLines: [
                {
                  html: "8 × 9 = 72, append 25 → <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["7225", "7025", "7200", "8525"],
              correctAnswer: "7225",
              explanation: "8·9 = 72, attach 25."
            },
            {
              type: "type-answer",
              prompt: "Compute 98 × 97.",
              code: `<div class="code-block">(100 - 2)(100 - 3)
= 10000 - 500 + 6
= ?</div>`,
              accept: ["9506"],
              explanation: "10000 − 500 + 6 = 9506."
            },
            {
              type: "tap-tokens",
              prompt: "Square of n5 = n(n+1) | 25.",
              tokens: ["n5²", "=", "n", "×", "(n+1)", "|", "25", "+"],
              correctOrder: ["n5²", "=", "n", "×", "(n+1)", "|", "25"],
              explanation: "n·(n+1) concatenated with 25."
            }
          ]
        },
        {
          id: "apt-u25-l2",
          name: "% & Divisibility Shortcuts",
          icon: "🎯",
          xp: 25,
          challenges: [
            {
              type: "concept",
              title: "Useful tricks",
              content: `<p>Powerful percent equivalents:</p>
              <div class="code-block">1/8 = 12.5%    1/16 = 6.25%
1/6 ≈ 16.67%   1/3 ≈ 33.33%
1/7 ≈ 14.29%   2/7 ≈ 28.57%</div>
              <p>Quick mental math:</p>
              <ul>
                <li>To find 5% — find 10% and halve.</li>
                <li>To find 15% — 10% + half of that.</li>
                <li>To multiply by 11 — write the digit, add neighbours.</li>
              </ul>
              <div class="code-block"><span class="com">// 11 × 35</span>
3 _ 5, middle = 3+5 = 8 → <span class="num">385</span></div>
              <p>Quick divisibility by 7 — double last digit and subtract from rest. If result divisible by 7, so is the number.</p>`
            },
            {
              type: "type-answer",
              prompt: "Find 12.5% of 800.",
              accept: ["100"],
              explanation: "12.5% = 1/8, so 800/8 = 100."
            },
            {
              type: "multiple-choice",
              prompt: "11 × 24 = ?",
              options: [
                {
                  text: "264",
                  code: false
                },
                {
                  text: "244",
                  code: false
                },
                {
                  text: "262",
                  code: false
                },
                {
                  text: "254",
                  code: false
                }
              ],
              correct: 0,
              explanation: "2 _ 4, middle = 2+4 = 6 → 264."
            },
            {
              type: "true-false",
              statement: "16.67% is approximately 1/6.",
              correct: true,
              explanation: "1/6 ≈ 0.1667."
            },
            {
              type: "fill-blank",
              prompt: "Quick 15% of 200.",
              codeLines: [
                {
                  html: "10% = 20, 5% = 10 → 15% = <span class=\"num\">_BLANK_</span>"
                }
              ],
              tokens: ["30", "40", "25", "35"],
              correctAnswer: "30",
              explanation: "20 + 10 = 30."
            },
            {
              type: "type-answer",
              prompt: "Is 343 divisible by 7?",
              code: `<div class="code-block">last digit doubled: 3 × 2 = 6
rest = 34
34 - 6 = 28
28 / 7 = 4 → ?</div>`,
              accept: ["yes", "Yes", "YES"],
              explanation: "28 is divisible by 7, so 343 = 7³."
            },
            {
              type: "tap-tokens",
              prompt: "Build the multiply-by-11 rule.",
              tokens: ["Place", "digits", "sum", "neighbours", "in", "middle", "+"],
              correctOrder: ["Place", "digits", "sum", "neighbours", "in", "middle"],
              explanation: "Digits | sum-of-neighbours | digits."
            }
          ]
        }
      ]
    }
  ]
});

LEARN('math', {
  intro: 'Math for Code — the math you actually need as a programmer, from binary and bitwise tricks to probability, linear algebra, and gradient descent. Visual, friendly, and full of widgets.',
  chapters: [

    /* ============== CH 1: Why Math for Code? ============== */
    { id: 'math-c1', title: 'Why Math for Code?', icon: '🧠', sections: [
      { type: 'heading', text: 'You already use math when you code', level: 1 },
      { type: 'para', html: 'Every <code>if</code>, every <code>for</code>, every array index — it is all math hiding under the hood. The good news: programmers do not need calculus to write great software, but a handful of math ideas pay off forever.' },
      { type: 'callout', kind: 'info', html: '<strong>Goal of this course:</strong> the <em>useful</em> parts of math, explained the way a programmer thinks — with code, pictures, and intuition.' },
      { type: 'heading', text: 'Where math sneaks into code', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Binary &amp; bits</strong> — flags, masks, low-level performance',
        '<strong>Modular arithmetic</strong> — hashing, wrapping indices, cryptography',
        '<strong>Boolean logic</strong> — every conditional you write',
        '<strong>Sets &amp; functions</strong> — databases, APIs, type systems',
        '<strong>Combinatorics</strong> — how many passwords? how many test cases?',
        '<strong>Probability</strong> — A/B tests, randomized algorithms, ML',
        '<strong>Linear algebra</strong> — graphics, ML, search ranking',
        '<strong>Calculus</strong> — training neural networks, physics sims',
        '<strong>Number theory</strong> — RSA, hashing, prime checks',
        '<strong>Graphs</strong> — social networks, routing, dependencies'
      ]},
      { type: 'heading', text: 'A tiny example', level: 2 },
      { type: 'para', html: 'Want to check if <code>n</code> is a power of two? The math trick is one line:' },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span> <span class="fn">isPowerOfTwo</span>(<span class="ty">int</span> n) {
  <span class="kw">return</span> n &gt; <span class="num">0</span> &amp;&amp; (n &amp; (n - <span class="num">1</span>)) == <span class="num">0</span>;
}` },
      { type: 'callout', kind: 'tip', html: 'That <code>n &amp; (n-1)</code> trick comes straight from binary representations — exactly what we cover in chapter 4.' },
      { type: 'heading', text: 'How to read this course', level: 2 },
      { type: 'para', html: 'Each chapter is bite-sized. Read top to bottom, play with the interactive widgets, and try to predict outputs before the answer appears. Math you <em>play with</em> sticks.' },
      { type: 'image', alt: 'math topics map', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">The Math-for-Code Map</text>
  <g font-family="Nunito" font-size="12">
    <rect x="20"  y="50"  width="130" height="40" rx="8" fill="#7c4dff"/><text x="85"  y="75" text-anchor="middle" fill="white" font-weight="bold">Bits &amp; Logic</text>
    <rect x="170" y="50"  width="130" height="40" rx="8" fill="#1cb0f6"/><text x="235" y="75" text-anchor="middle" fill="white" font-weight="bold">Sets &amp; Funcs</text>
    <rect x="320" y="50"  width="130" height="40" rx="8" fill="#58cc02"/><text x="385" y="75" text-anchor="middle" fill="white" font-weight="bold">Combinatorics</text>
    <rect x="470" y="50"  width="120" height="40" rx="8" fill="#ff9600"/><text x="530" y="75" text-anchor="middle" fill="white" font-weight="bold">Probability</text>
    <rect x="20"  y="120" width="130" height="40" rx="8" fill="#ce82ff"/><text x="85"  y="145" text-anchor="middle" fill="white" font-weight="bold">Linear Algebra</text>
    <rect x="170" y="120" width="130" height="40" rx="8" fill="#ff4b4b"/><text x="235" y="145" text-anchor="middle" fill="white" font-weight="bold">Calculus</text>
    <rect x="320" y="120" width="130" height="40" rx="8" fill="#14b8a6"/><text x="385" y="145" text-anchor="middle" fill="white" font-weight="bold">Number Theory</text>
    <rect x="470" y="120" width="120" height="40" rx="8" fill="#f59e0b"/><text x="530" y="145" text-anchor="middle" fill="white" font-weight="bold">Graphs</text>
    <text x="300" y="195" text-anchor="middle" fill="#666">Pick any box — they all connect.</text>
  </g>
</svg>` }
    ]},

    /* ============== CH 2: Number Systems ============== */
    { id: 'math-c2', title: 'Number Systems', icon: '🔢', sections: [
      { type: 'heading', text: 'Numbers are written in a base', level: 1 },
      { type: 'para', html: 'The number <code>237</code> in everyday decimal really means <code>2·100 + 3·10 + 7·1</code>. Each position is a power of 10 — that 10 is the <strong>base</strong>.' },
      { type: 'callout', kind: 'info', html: 'Computers use base-2 (binary). Programmers also use base-8 (octal) and base-16 (hex) because they compress binary nicely.' },
      { type: 'heading', text: 'Place values in different bases', level: 2 },
      { type: 'image', alt: 'place values', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Place Values</text>
  <g font-family="JetBrains Mono" font-size="12" text-anchor="middle">
    <text x="40" y="55" font-weight="bold" fill="#333">Base 10</text>
    <rect x="100" y="40" width="60" height="30" fill="#7c4dff"/><text x="130" y="60" fill="white">1000</text>
    <rect x="170" y="40" width="60" height="30" fill="#7c4dff"/><text x="200" y="60" fill="white">100</text>
    <rect x="240" y="40" width="60" height="30" fill="#7c4dff"/><text x="270" y="60" fill="white">10</text>
    <rect x="310" y="40" width="60" height="30" fill="#7c4dff"/><text x="340" y="60" fill="white">1</text>

    <text x="40" y="105" font-weight="bold" fill="#333">Base 2</text>
    <rect x="100" y="90" width="60" height="30" fill="#1cb0f6"/><text x="130" y="110" fill="white">8</text>
    <rect x="170" y="90" width="60" height="30" fill="#1cb0f6"/><text x="200" y="110" fill="white">4</text>
    <rect x="240" y="90" width="60" height="30" fill="#1cb0f6"/><text x="270" y="110" fill="white">2</text>
    <rect x="310" y="90" width="60" height="30" fill="#1cb0f6"/><text x="340" y="110" fill="white">1</text>

    <text x="40" y="155" font-weight="bold" fill="#333">Base 16</text>
    <rect x="100" y="140" width="60" height="30" fill="#58cc02"/><text x="130" y="160" fill="white">4096</text>
    <rect x="170" y="140" width="60" height="30" fill="#58cc02"/><text x="200" y="160" fill="white">256</text>
    <rect x="240" y="140" width="60" height="30" fill="#58cc02"/><text x="270" y="160" fill="white">16</text>
    <rect x="310" y="140" width="60" height="30" fill="#58cc02"/><text x="340" y="160" fill="white">1</text>

    <text x="300" y="200" font-family="Nunito" fill="#666">Each column = base × the one to its right.</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Binary — base 2', level: 2 },
      { type: 'para', html: 'Only digits <code>0</code> and <code>1</code>. The binary <code>1011</code> equals <code>1·8 + 0·4 + 1·2 + 1·1 = 11</code>.' },
      { type: 'widget', name: 'binary-converter', props: { bits: 8 } },
      { type: 'heading', text: 'Hexadecimal — base 16', level: 2 },
      { type: 'para', html: 'Digits go <code>0123456789ABCDEF</code>. Letters A–F are 10–15. Programmers love hex because one hex digit = exactly 4 binary digits (a <em>nibble</em>).' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Java literals</span>
<span class="ty">int</span> dec = <span class="num">255</span>;
<span class="ty">int</span> hex = <span class="num">0xFF</span>;       <span class="com">// = 255</span>
<span class="ty">int</span> oct = <span class="num">0377</span>;       <span class="com">// = 255 (octal)</span>
<span class="ty">int</span> bin = <span class="num">0b11111111</span>; <span class="com">// = 255 (binary)</span>` },
      { type: 'heading', text: 'Octal — base 8', level: 2 },
      { type: 'para', html: 'Digits <code>0–7</code>. One octal digit = 3 binary digits. Old Unix file permissions still use octal: <code>chmod 755</code>.' },
      { type: 'heading', text: 'Quick decimal → binary by hand', level: 2 },
      { type: 'list', kind: 'number', items: [
        'Divide by 2, write the remainder (0 or 1)',
        'Use the quotient as new number, repeat',
        'Read the remainders bottom-up',
        'Example: 13 → 6r1 → 3r0 → 1r1 → 0r1 → <code>1101</code>'
      ]},
      { type: 'heading', text: 'Hex ↔ binary in your head', level: 2 },
      { type: 'para', html: 'Memorise the 16 nibbles once, and you can convert any hex number to binary instantly by replacing each digit.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// 0xA3F = 1010 0011 1111
//          A    3    F</span>` },
      { type: 'callout', kind: 'tip', html: 'Always note the base when ambiguous: subscript <code>10110<sub>2</sub></code>, or prefix <code>0b10110</code>, <code>0x1F</code>, <code>0o17</code>.' }
    ]},

    /* ============== CH 3: Binary Conversion Tricks ============== */
    { id: 'math-c3', title: 'Binary Conversion Tricks', icon: '⚡', sections: [
      { type: 'heading', text: 'Speed-converting in your head', level: 1 },
      { type: 'para', html: 'You do not need a calculator. A few shortcuts make conversions almost instant.' },
      { type: 'heading', text: 'Trick 1 — Powers of two table', level: 2 },
      { type: 'code', lang: 'java', code:
`2^0  = 1
2^1  = 2
2^2  = 4
2^3  = 8
2^4  = 16
2^5  = 32
2^6  = 64
2^7  = 128
2^8  = 256
2^10 = 1024  <span class="com">// "1K" in computing</span>
2^16 = 65536
2^20 = ~1M
2^30 = ~1B
2^32 = ~4.3B  <span class="com">// max unsigned 32-bit int</span>` },
      { type: 'heading', text: 'Trick 2 — Top-down subtraction', level: 2 },
      { type: 'para', html: 'To convert 173 to binary: find the largest power of 2 ≤ 173 (that is 128), subtract, repeat.' },
      { type: 'code', lang: 'java', code:
`173 - 128 = 45    <span class="com">// bit 7 = 1</span>
 45 -  32 = 13    <span class="com">// bit 5 = 1</span>
 13 -   8 =  5    <span class="com">// bit 3 = 1</span>
  5 -   4 =  1    <span class="com">// bit 2 = 1</span>
  1 -   1 =  0    <span class="com">// bit 0 = 1</span>

173 = 1010 1101` },
      { type: 'heading', text: 'Signed numbers — the problem', level: 2 },
      { type: 'para', html: 'Computers need to store negatives too. Reserving one bit as a "sign" works but gives us <strong>two zeros</strong> (+0 and –0). Ugly.' },
      { type: 'heading', text: 'Two\'s complement', level: 2 },
      { type: 'para', html: 'The clever fix used by every modern CPU: to negate a number, <strong>flip all bits and add 1</strong>.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// 8-bit example: encode -5</span>
 5 = 0000 0101
~5 = 1111 1010   <span class="com">// flip bits</span>
+1 = 1111 1011   <span class="com">// add one  =&gt; -5</span>` },
      { type: 'callout', kind: 'info', html: 'In two\'s complement, the leftmost bit is the sign: 0 = positive, 1 = negative. Range for 8 bits: <code>-128 … +127</code>.' },
      { type: 'heading', text: 'Why two\'s complement is brilliant', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Only <em>one</em> zero',
        'Addition and subtraction use the same circuit',
        'No special handling — overflow just wraps',
        'Negative test = just check the top bit'
      ]},
      { type: 'image', alt: 'twos complement wheel', svg:
`<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:0 auto;">
  <rect width="320" height="220" fill="#fafafa" rx="8"/>
  <circle cx="160" cy="110" r="80" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <text x="160" y="35"  text-anchor="middle" font-family="JetBrains Mono">0</text>
  <text x="240" y="115" text-anchor="middle" font-family="JetBrains Mono">+1</text>
  <text x="160" y="200" text-anchor="middle" font-family="JetBrains Mono">+127 / -128</text>
  <text x="80"  y="115" text-anchor="middle" font-family="JetBrains Mono">-1</text>
  <text x="160" y="110" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">8-bit wheel</text>
</svg>` },
      { type: 'heading', text: 'Overflow', level: 2 },
      { type: 'para', html: 'Add <code>127 + 1</code> in 8-bit: <code>0111 1111 + 1 = 1000 0000 = -128</code>. The number wraps around the wheel. That is overflow — a real bug source.' }
    ]},

    /* ============== CH 4: Bitwise Operations ============== */
    { id: 'math-c4', title: 'Bitwise Operations', icon: '🧮', sections: [
      { type: 'heading', text: 'Operate on bits directly', level: 1 },
      { type: 'para', html: 'Bitwise operators work on each bit position independently. Cheap, fast, and great for flags, masks, and clever tricks.' },
      { type: 'heading', text: 'The six bitwise operators', level: 2 },
      { type: 'code', lang: 'java', code:
`a &amp;  b   <span class="com">// AND  — bit is 1 only if both are 1</span>
a |  b   <span class="com">// OR   — bit is 1 if either is 1</span>
a ^  b   <span class="com">// XOR  — bit is 1 if exactly one is 1</span>
~a       <span class="com">// NOT  — flip every bit</span>
a &lt;&lt; n  <span class="com">// shift left  by n (multiply by 2^n)</span>
a &gt;&gt; n  <span class="com">// shift right by n (signed   / 2^n)</span>
a &gt;&gt;&gt; n <span class="com">// shift right by n (unsigned / 2^n)</span>` },
      { type: 'heading', text: 'AND, OR, XOR side by side', level: 2 },
      { type: 'image', alt: 'bitwise truth', svg:
`<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:0 auto;">
  <rect width="540" height="160" fill="#fafafa" rx="8"/>
  <g font-family="JetBrains Mono" font-size="13">
    <text x="60"  y="30" font-weight="bold">AND &amp;</text>
    <text x="60"  y="55">0 &amp; 0 = 0</text>
    <text x="60"  y="75">0 &amp; 1 = 0</text>
    <text x="60"  y="95">1 &amp; 0 = 0</text>
    <text x="60"  y="115" fill="#58cc02">1 &amp; 1 = 1</text>

    <text x="220" y="30" font-weight="bold">OR  |</text>
    <text x="220" y="55">0 | 0 = 0</text>
    <text x="220" y="75" fill="#58cc02">0 | 1 = 1</text>
    <text x="220" y="95" fill="#58cc02">1 | 0 = 1</text>
    <text x="220" y="115" fill="#58cc02">1 | 1 = 1</text>

    <text x="380" y="30" font-weight="bold">XOR ^</text>
    <text x="380" y="55">0 ^ 0 = 0</text>
    <text x="380" y="75" fill="#58cc02">0 ^ 1 = 1</text>
    <text x="380" y="95" fill="#58cc02">1 ^ 0 = 1</text>
    <text x="380" y="115">1 ^ 1 = 0</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Shifts', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> x = <span class="num">12</span>;        <span class="com">// 0000 1100</span>
x &lt;&lt; <span class="num">2</span>;             <span class="com">// 0011 0000 = 48  (x * 4)</span>
x &gt;&gt; <span class="num">1</span>;             <span class="com">// 0000 0110 = 6   (x / 2)</span>` },
      { type: 'heading', text: 'Bitmasks — flags in one int', level: 2 },
      { type: 'para', html: 'A single 32-bit integer can hold 32 boolean flags. Use bitwise ops to set / clear / test each bit.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">static final</span> <span class="ty">int</span> READ    = <span class="num">1</span> &lt;&lt; <span class="num">0</span>;  <span class="com">// 0001</span>
<span class="kw">static final</span> <span class="ty">int</span> WRITE   = <span class="num">1</span> &lt;&lt; <span class="num">1</span>;  <span class="com">// 0010</span>
<span class="kw">static final</span> <span class="ty">int</span> EXECUTE = <span class="num">1</span> &lt;&lt; <span class="num">2</span>;  <span class="com">// 0100</span>

<span class="ty">int</span> perms = READ | WRITE;          <span class="com">// set    flags</span>
<span class="kw">boolean</span> canRead = (perms &amp; READ) != <span class="num">0</span>; <span class="com">// test  flag</span>
perms = perms &amp; ~WRITE;             <span class="com">// clear  flag</span>
perms = perms ^ EXECUTE;            <span class="com">// toggle flag</span>` },
      { type: 'heading', text: 'Trick — check power of two', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span> <span class="fn">isPow2</span>(<span class="ty">int</span> n) {
  <span class="kw">return</span> n &gt; <span class="num">0</span> &amp;&amp; (n &amp; (n - <span class="num">1</span>)) == <span class="num">0</span>;
}
<span class="com">// 8  = 1000, 7 = 0111, 8&amp;7 = 0  ✓
// 12 = 1100, 11= 1011, 12&amp;11=1000 ✗</span>` },
      { type: 'heading', text: 'Trick — swap without temp', level: 2 },
      { type: 'code', lang: 'java', code:
`a = a ^ b;
b = a ^ b;   <span class="com">// b is now original a</span>
a = a ^ b;   <span class="com">// a is now original b</span>` },
      { type: 'callout', kind: 'warn', html: 'XOR-swap is cute but slower in practice than a temp variable on modern CPUs. Use it for interview puzzles, not real code.' },
      { type: 'heading', text: 'Counting set bits (Brian Kernighan)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> <span class="fn">popcount</span>(<span class="ty">int</span> n) {
  <span class="ty">int</span> count = <span class="num">0</span>;
  <span class="kw">while</span> (n != <span class="num">0</span>) {
    n &amp;= (n - <span class="num">1</span>);   <span class="com">// clears the lowest set bit</span>
    count++;
  }
  <span class="kw">return</span> count;
}` },
      { type: 'callout', kind: 'tip', html: 'Java has it built in: <code>Integer.bitCount(n)</code>.' }
    ]},

    /* ============== CH 5: Modular Arithmetic ============== */
    { id: 'math-c5', title: 'Modular Arithmetic', icon: '🕒', sections: [
      { type: 'heading', text: 'Clock math', level: 1 },
      { type: 'para', html: 'On a 12-hour clock, 5 hours after 9 o\'clock is 2 o\'clock — not 14. We say <code>9 + 5 ≡ 2 (mod 12)</code>. That is <strong>modular arithmetic</strong>.' },
      { type: 'heading', text: 'The % operator', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="num">17</span> % <span class="num">5</span>   <span class="com">// = 2   (17 = 3*5 + 2)</span>
<span class="num">100</span> % <span class="num">7</span>  <span class="com">// = 2</span>
<span class="num">0</span> % <span class="num">9</span>    <span class="com">// = 0</span>
<span class="num">-7</span> % <span class="num">3</span>   <span class="com">// = -1 in Java/C, but 2 in Python</span>` },
      { type: 'callout', kind: 'warn', html: 'Different languages handle negative modulo differently. In Java, the sign of <code>a % b</code> matches <code>a</code>. For a true mathematical "mod" use <code>Math.floorMod(a, b)</code>.' },
      { type: 'heading', text: 'Congruence', level: 2 },
      { type: 'para', html: '<code>a ≡ b (mod m)</code> means <code>a</code> and <code>b</code> have the same remainder when divided by <code>m</code>. Equivalently, <code>m</code> divides <code>a - b</code>.' },
      { type: 'heading', text: 'Properties that make it useful', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>(a + b) mod m = ((a mod m) + (b mod m)) mod m</code>',
        '<code>(a · b) mod m = ((a mod m) · (b mod m)) mod m</code>',
        'Subtraction works the same, division does <em>not</em>',
        'Modulo lets us keep numbers small inside a loop'
      ]},
      { type: 'heading', text: 'Application — wrap-around index', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Circular buffer: next index always in [0, N)</span>
<span class="ty">int</span> next = (i + <span class="num">1</span>) % N;
<span class="ty">int</span> prev = (i - <span class="num">1</span> + N) % N;   <span class="com">// add N so it stays non-negative</span>` },
      { type: 'heading', text: 'Application — hashing into buckets', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> bucket = <span class="ty">Math</span>.<span class="fn">floorMod</span>(key.<span class="fn">hashCode</span>(), buckets.length);` },
      { type: 'heading', text: 'Application — last digit', level: 2 },
      { type: 'para', html: '<code>n % 10</code> gives the last digit. <code>n / 10</code> drops it. With both you can peel off digits left to right or right to left.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> n = <span class="num">12345</span>, sum = <span class="num">0</span>;
<span class="kw">while</span> (n &gt; <span class="num">0</span>) {
  sum += n % <span class="num">10</span>;   <span class="com">// 5, 4, 3, 2, 1</span>
  n /= <span class="num">10</span>;
}` },
      { type: 'heading', text: 'Application — Caesar cipher', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">char</span> <span class="fn">shift</span>(<span class="ty">char</span> c, <span class="ty">int</span> k) {
  <span class="kw">return</span> (<span class="ty">char</span>)(((c - <span class="str">\'A\'</span>) + k) % <span class="num">26</span> + <span class="str">\'A\'</span>);
}` },
      { type: 'callout', kind: 'tip', html: 'Modular arithmetic is the heart of hash tables, RNGs, and most of cryptography. We will go deeper in the next chapter.' }
    ]},

    /* ============== CH 6: Modular Exponentiation ============== */
    { id: 'math-c6', title: 'Modular Exponentiation', icon: '🔐', sections: [
      { type: 'heading', text: 'The problem', level: 1 },
      { type: 'para', html: 'Compute <code>a<sup>n</sup> mod m</code> when <code>a</code>, <code>n</code>, <code>m</code> are huge. Multiplying <code>n</code> times overflows and is too slow. We need a smarter way.' },
      { type: 'heading', text: 'Fast power — squaring', level: 2 },
      { type: 'para', html: 'Notice <code>a<sup>8</sup> = ((a<sup>2</sup>)<sup>2</sup>)<sup>2</sup></code> — three multiplications, not seven. Generalise: build up the exponent in binary.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">long</span> <span class="fn">powMod</span>(<span class="kw">long</span> a, <span class="kw">long</span> n, <span class="kw">long</span> m) {
  <span class="kw">long</span> result = <span class="num">1</span>;
  a %= m;
  <span class="kw">while</span> (n &gt; <span class="num">0</span>) {
    <span class="kw">if</span> ((n &amp; <span class="num">1</span>) == <span class="num">1</span>) result = result * a % m;
    a = a * a % m;
    n &gt;&gt;= <span class="num">1</span>;
  }
  <span class="kw">return</span> result;
}` },
      { type: 'callout', kind: 'info', html: 'Each step squares <code>a</code> and halves <code>n</code>. We do at most <code>log₂(n)</code> iterations — billions of multiplications collapse to ~30.' },
      { type: 'heading', text: 'Why mod each step', level: 2 },
      { type: 'para', html: 'If we did not take <code>% m</code> at every multiply, numbers would explode beyond <code>long</code>. Modulo plays nicely with multiplication, so the answer stays the same.' },
      { type: 'heading', text: 'RSA intuition', level: 2 },
      { type: 'para', html: 'RSA encryption is essentially: <code>cipher = message<sup>e</sup> mod n</code>, and <code>plain = cipher<sup>d</sup> mod n</code>. Easy to compute forward, virtually impossible to reverse without the private exponent <code>d</code>. The whole thing rides on fast modular exponentiation.' },
      { type: 'image', alt: 'fast power tree', svg:
`<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:0 auto;">
  <rect width="540" height="180" fill="#fafafa" rx="8"/>
  <text x="270" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">a^13 = a^8 · a^4 · a^1   (13 = 1101₂)</text>
  <g font-family="JetBrains Mono" font-size="12">
    <rect x="20"  y="60" width="100" height="40" fill="#7c4dff"/><text x="70"  y="85" text-anchor="middle" fill="white">a</text>
    <rect x="140" y="60" width="100" height="40" fill="#7c4dff"/><text x="190" y="85" text-anchor="middle" fill="white">a²</text>
    <rect x="260" y="60" width="100" height="40" fill="#7c4dff"/><text x="310" y="85" text-anchor="middle" fill="white">a⁴</text>
    <rect x="380" y="60" width="100" height="40" fill="#7c4dff"/><text x="430" y="85" text-anchor="middle" fill="white">a⁸</text>
  </g>
  <text x="270" y="140" text-anchor="middle" font-family="Nunito" fill="#666">Pick the powers whose bit is 1 and multiply them.</text>
</svg>` },
      { type: 'callout', kind: 'tip', html: 'Java\'s <code>BigInteger.modPow(e, m)</code> does this for arbitrarily large numbers.' }
    ]},

    /* ============== CH 7: Boolean Logic ============== */
    { id: 'math-c7', title: 'Boolean Logic', icon: '🔘', sections: [
      { type: 'heading', text: 'Two values, infinite power', level: 1 },
      { type: 'para', html: 'Boolean logic deals with just <strong>true</strong> and <strong>false</strong>. Every chip in your computer is a giant pile of AND, OR, and NOT gates.' },
      { type: 'heading', text: 'The three core operators', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>A AND B</code> — true only if both are true (<code>&amp;&amp;</code> in Java)',
        '<code>A OR  B</code> — true if either is true (<code>||</code> in Java)',
        '<code>NOT A</code> — flips the value (<code>!</code> in Java)'
      ]},
      { type: 'widget', name: 'truth-table', props: { vars: ['A', 'B'], expr: 'A && B' } },
      { type: 'widget', name: 'truth-table', props: { vars: ['A', 'B'], expr: 'A || B' } },
      { type: 'widget', name: 'truth-table', props: { vars: ['A', 'B'], expr: '!(A && B)' } },
      { type: 'heading', text: 'Short-circuit evaluation', level: 2 },
      { type: 'para', html: 'Java evaluates <code>&amp;&amp;</code> and <code>||</code> left to right and <strong>stops</strong> as soon as the answer is known. Useful and dangerous.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">if</span> (obj != <span class="kw">null</span> &amp;&amp; obj.<span class="fn">isReady</span>()) { ... }
<span class="com">// Safe: isReady() only runs if obj != null</span>` },
      { type: 'heading', text: 'Order of operations', level: 2 },
      { type: 'para', html: 'Highest to lowest: <code>!</code>, then <code>&amp;&amp;</code>, then <code>||</code>. When in doubt, parenthesise.' },
      { type: 'callout', kind: 'tip', html: 'Two boolean operators worth knowing: XOR (<code>^</code>) — true when exactly one operand is true; and material implication, covered next chapter.' }
    ]},

    /* ============== CH 8: Propositional Logic ============== */
    { id: 'math-c8', title: 'Propositional Logic', icon: '➡️', sections: [
      { type: 'heading', text: 'Propositions are statements', level: 1 },
      { type: 'para', html: 'A <strong>proposition</strong> is a statement that is either true or false. We combine propositions with logical connectives.' },
      { type: 'heading', text: 'Implication: if P then Q', level: 2 },
      { type: 'para', html: '<code>P → Q</code> is false only when P is true but Q is false. Surprisingly, "false implies anything" is true.' },
      { type: 'widget', name: 'truth-table', props: { vars: ['P', 'Q'], expr: '!P || Q' } },
      { type: 'heading', text: 'Biconditional: P iff Q', level: 2 },
      { type: 'para', html: '<code>P ↔ Q</code> is true when P and Q have the <em>same</em> value. Same as <code>!(P XOR Q)</code>.' },
      { type: 'widget', name: 'truth-table', props: { vars: ['P', 'Q'], expr: '(P && Q) || (!P && !Q)' } },
      { type: 'heading', text: 'Tautology, contradiction, contingency', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Tautology</strong> — always true (e.g. <code>P || !P</code>)',
        '<strong>Contradiction</strong> — always false (<code>P &amp;&amp; !P</code>)',
        '<strong>Contingency</strong> — sometimes true, sometimes false'
      ]},
      { type: 'heading', text: 'Logical equivalence', level: 2 },
      { type: 'para', html: 'Two expressions are equivalent if their truth tables match. Replace one with the other any time — exactly what compilers and you-the-refactorer do.' },
      { type: 'heading', text: 'De Morgan\'s laws', level: 2 },
      { type: 'code', lang: 'java', code:
`!(A &amp;&amp; B)  ≡  !A || !B
!(A || B)  ≡  !A &amp;&amp; !B` },
      { type: 'widget', name: 'truth-table', props: { vars: ['A', 'B'], expr: '!(A && B) === (!A || !B)' } },
      { type: 'callout', kind: 'info', html: 'De Morgan saves your sanity when you negate a complex condition. Distribute the NOT and flip <code>&amp;&amp;</code> ↔ <code>||</code>.' },
      { type: 'heading', text: 'Refactoring with logic', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Hard to read</span>
<span class="kw">if</span> (!(age &lt; <span class="num">18</span> || hasNoTicket)) accept();

<span class="com">// De Morgan + simplify</span>
<span class="kw">if</span> (age &gt;= <span class="num">18</span> &amp;&amp; hasTicket) accept();` }
    ]},

    /* ============== CH 9: Sets — Basics ============== */
    { id: 'math-c9', title: 'Sets — Basics', icon: '∈', sections: [
      { type: 'heading', text: 'A set is an unordered bag of distinct things', level: 1 },
      { type: 'para', html: 'No duplicates, no order. <code>{1, 2, 3}</code> equals <code>{3, 1, 2}</code> equals <code>{1, 2, 2, 3}</code>.' },
      { type: 'heading', text: 'Membership', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; A = <span class="ty">Set</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>);
A.<span class="fn">contains</span>(<span class="num">2</span>);   <span class="com">// true  — 2 ∈ A</span>
A.<span class="fn">contains</span>(<span class="num">5</span>);   <span class="com">// false — 5 ∉ A</span>` },
      { type: 'heading', text: 'Subsets and supersets', level: 2 },
      { type: 'para', html: '<code>A ⊆ B</code> means every element of A is also in B. If A is missing something B has, A is a <strong>proper subset</strong> (<code>A ⊂ B</code>).' },
      { type: 'image', alt: 'subset diagram', svg:
`<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:0 auto;">
  <rect width="320" height="200" fill="#fafafa" rx="8"/>
  <circle cx="160" cy="100" r="80" fill="#1cb0f6" fill-opacity="0.2" stroke="#1cb0f6" stroke-width="2"/>
  <circle cx="140" cy="110" r="40" fill="#7c4dff" fill-opacity="0.4" stroke="#7c4dff" stroke-width="2"/>
  <text x="140" y="115" text-anchor="middle" font-family="Nunito" font-weight="bold">A</text>
  <text x="220" y="105" text-anchor="middle" font-family="Nunito" font-weight="bold">B</text>
  <text x="160" y="190" text-anchor="middle" font-family="Nunito" fill="#666">A ⊆ B</text>
</svg>` },
      { type: 'heading', text: 'Special sets', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Empty set</strong> <code>∅</code> or <code>{}</code> — no elements',
        '<strong>Universal set</strong> <code>U</code> — everything we are talking about',
        '<strong>Singleton</strong> — exactly one element, like <code>{42}</code>',
        '<strong>Natural numbers</strong> <code>ℕ = {0, 1, 2, …}</code>',
        '<strong>Integers</strong> <code>ℤ</code>, <strong>Rationals</strong> <code>ℚ</code>, <strong>Reals</strong> <code>ℝ</code>'
      ]},
      { type: 'heading', text: 'Set-builder notation', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Even numbers between 1 and 10
// { x ∈ ℤ : 1 &lt; x ≤ 10 ∧ x mod 2 == 0 }</span>

<span class="com">// In Java/streams:</span>
<span class="ty">IntStream</span>.<span class="fn">rangeClosed</span>(<span class="num">1</span>, <span class="num">10</span>)
         .<span class="fn">filter</span>(x -&gt; x % <span class="num">2</span> == <span class="num">0</span>)
         .<span class="fn">boxed</span>()
         .<span class="fn">collect</span>(<span class="ty">Collectors</span>.<span class="fn">toSet</span>());` },
      { type: 'heading', text: 'Why programmers care', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Removing duplicates: <code>new HashSet&lt;&gt;(list)</code>',
        'Fast membership tests in O(1)',
        'Database <code>DISTINCT</code> is a set operation',
        'Permissions, tags, friend lists — all sets'
      ]},
      { type: 'callout', kind: 'tip', html: 'A <code>HashSet</code> trades a little memory for blazingly fast contains/add/remove.' }
    ]},

    /* ============== CH 10: Set Operations ============== */
    { id: 'math-c10', title: 'Set Operations', icon: '∪', sections: [
      { type: 'heading', text: 'Combining sets', level: 1 },
      { type: 'para', html: 'Like arithmetic for collections — union, intersection, difference, and complement.' },
      { type: 'image', alt: 'venn operations', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12" text-anchor="middle">
    <text x="80"  y="25" font-weight="bold">A ∪ B</text>
    <circle cx="60"  cy="100" r="40" fill="#7c4dff" fill-opacity="0.5"/>
    <circle cx="100" cy="100" r="40" fill="#7c4dff" fill-opacity="0.5"/>

    <text x="230" y="25" font-weight="bold">A ∩ B</text>
    <circle cx="210" cy="100" r="40" fill="#7c4dff" fill-opacity="0.2"/>
    <circle cx="250" cy="100" r="40" fill="#7c4dff" fill-opacity="0.2"/>
    <path d="M 230 60 A 40 40 0 0 1 230 140 A 40 40 0 0 1 230 60 Z" fill="#7c4dff" fill-opacity="0.6"/>

    <text x="380" y="25" font-weight="bold">A − B</text>
    <path d="M 360 100 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" fill="#7c4dff" fill-opacity="0.5"/>
    <circle cx="400" cy="100" r="40" fill="#fafafa"/>
    <circle cx="400" cy="100" r="40" fill="none" stroke="#7c4dff"/>

    <text x="530" y="25" font-weight="bold">Aᶜ</text>
    <rect x="475" y="60" width="110" height="80" fill="#7c4dff" fill-opacity="0.3"/>
    <circle cx="530" cy="100" r="30" fill="#fafafa"/>
    <circle cx="530" cy="100" r="30" fill="none" stroke="#7c4dff"/>

    <text x="300" y="200" fill="#666">Shaded = the result.</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Definitions', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Union</strong> A ∪ B — in A or B (or both)',
        '<strong>Intersection</strong> A ∩ B — in both',
        '<strong>Difference</strong> A − B — in A but not B',
        '<strong>Complement</strong> Aᶜ — everything not in A (relative to U)',
        '<strong>Symmetric diff</strong> A △ B — in one but not both'
      ]},
      { type: 'heading', text: 'In Java', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; a = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; b = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>));

<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; u = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a); u.<span class="fn">addAll</span>(b);     <span class="com">// {1,2,3,4}</span>
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; i = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a); i.<span class="fn">retainAll</span>(b);  <span class="com">// {2,3}</span>
<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; d = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;(a); d.<span class="fn">removeAll</span>(b);  <span class="com">// {1}</span>` },
      { type: 'heading', text: 'Cardinality |A|', level: 2 },
      { type: 'para', html: 'How many elements. Famous formula (inclusion-exclusion): <code>|A ∪ B| = |A| + |B| − |A ∩ B|</code>.' },
      { type: 'heading', text: 'Power set', level: 2 },
      { type: 'para', html: 'The set of all subsets. If <code>|A| = n</code>, then <code>|P(A)| = 2<sup>n</sup></code>.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// {a, b} → { {}, {a}, {b}, {a,b} }
// 2² = 4 subsets</span>` },
      { type: 'heading', text: 'Cartesian product', level: 2 },
      { type: 'para', html: '<code>A × B</code> = set of all ordered pairs. <code>|A × B| = |A| · |B|</code>. Used everywhere: database joins, image pixels, coordinates.' },
      { type: 'callout', kind: 'tip', html: 'A <code>Map&lt;K, V&gt;</code> is conceptually a subset of the Cartesian product <code>K × V</code> where each key appears at most once.' }
    ]},

    /* ============== CH 11: Functions & Relations ============== */
    { id: 'math-c11', title: 'Functions & Relations', icon: '↪️', sections: [
      { type: 'heading', text: 'A function is a rule', level: 1 },
      { type: 'para', html: 'A function <code>f : A → B</code> takes every element of <strong>A</strong> (the domain) and produces exactly one element of <strong>B</strong> (the codomain).' },
      { type: 'image', alt: 'function mapping', svg:
`<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="200" fill="#fafafa" rx="8"/>
  <ellipse cx="80"  cy="100" rx="50" ry="80" fill="#7c4dff" fill-opacity="0.2" stroke="#7c4dff"/>
  <ellipse cx="280" cy="100" rx="50" ry="80" fill="#1cb0f6" fill-opacity="0.2" stroke="#1cb0f6"/>
  <text x="80"  y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">A (domain)</text>
  <text x="280" y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">B (codomain)</text>
  <g font-family="JetBrains Mono" font-size="11">
    <circle cx="80" cy="60"  r="4"/><text x="65" y="65">1</text>
    <circle cx="80" cy="100" r="4"/><text x="65" y="105">2</text>
    <circle cx="80" cy="140" r="4"/><text x="65" y="145">3</text>
    <circle cx="280" cy="60"  r="4"/><text x="292" y="65">a</text>
    <circle cx="280" cy="100" r="4"/><text x="292" y="105">b</text>
    <circle cx="280" cy="140" r="4"/><text x="292" y="145">c</text>
    <line x1="84" y1="60"  x2="276" y2="60"  stroke="#333"/>
    <line x1="84" y1="100" x2="276" y2="100" stroke="#333"/>
    <line x1="84" y1="140" x2="276" y2="140" stroke="#333"/>
  </g>
</svg>` },
      { type: 'heading', text: 'Domain, codomain, range', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Domain</strong> — set of valid inputs',
        '<strong>Codomain</strong> — set the output is allowed to live in',
        '<strong>Range (image)</strong> — values actually produced'
      ]},
      { type: 'heading', text: 'Injective — one-to-one', level: 2 },
      { type: 'para', html: 'Different inputs give different outputs. No two arrows land on the same point.' },
      { type: 'heading', text: 'Surjective — onto', level: 2 },
      { type: 'para', html: 'Every element of the codomain is hit. Range equals codomain.' },
      { type: 'heading', text: 'Bijective — both', level: 2 },
      { type: 'para', html: 'Injective + surjective. A bijection has an <strong>inverse</strong>.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// f(x) = x + 1  on ℤ  → bijection
// f(x) = x²    on ℝ  → neither (not injective, not surjective onto ℝ)</span>` },
      { type: 'heading', text: 'Functions in code', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Function</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; toLabel = i -&gt; <span class="str">"#"</span> + i;
toLabel.<span class="fn">apply</span>(<span class="num">7</span>);   <span class="com">// "#7"</span>` },
      { type: 'callout', kind: 'info', html: 'A relation is a generalisation: a subset of A × B. Functions are <em>special</em> relations where each input has exactly one output.' }
    ]},

    /* ============== CH 12: Counting Basics ============== */
    { id: 'math-c12', title: 'Counting Basics', icon: '🧮', sections: [
      { type: 'heading', text: 'How many ways?', level: 1 },
      { type: 'para', html: 'Counting (combinatorics) answers "how many possibilities are there?" — the heart of probability and complexity analysis.' },
      { type: 'heading', text: 'Sum rule', level: 2 },
      { type: 'para', html: 'If two events are mutually exclusive, total ways = sum of ways. <em>"Either this or that"</em>.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// You can have a pasta OR a salad for lunch.
// 5 pasta dishes + 3 salads = 8 lunches.</span>` },
      { type: 'heading', text: 'Product rule', level: 2 },
      { type: 'para', html: 'For independent choices, multiply. <em>"This and that"</em>.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// 3 shirts × 4 pants = 12 outfits
// 26 letters × 10 digits × 10 digits = 2600 codes</span>` },
      { type: 'heading', text: 'Pigeonhole principle', level: 2 },
      { type: 'para', html: 'If you put <code>n + 1</code> pigeons into <code>n</code> holes, some hole has at least 2 pigeons. Sounds silly; surprisingly powerful.' },
      { type: 'callout', kind: 'tip', html: 'Hash collisions are guaranteed by pigeonhole — any hash function maps a larger set into a smaller one.' },
      { type: 'heading', text: 'Mini practice', level: 2 },
      { type: 'list', kind: 'number', items: [
        'A PIN is 4 digits. How many possible PINs? (10⁴ = 10000)',
        'How many odd 4-digit PINs? (10 · 10 · 10 · 5 = 5000)',
        '8 people shake hands once. How many handshakes? (C(8,2) = 28 — chapter 14!)'
      ]}
    ]},

    /* ============== CH 13: Permutations ============== */
    { id: 'math-c13', title: 'Permutations', icon: '🔀', sections: [
      { type: 'heading', text: 'Order matters', level: 1 },
      { type: 'para', html: 'A <strong>permutation</strong> is an arrangement of items where the order matters. <code>ABC</code> ≠ <code>CAB</code>.' },
      { type: 'heading', text: 'Factorial — n!', level: 2 },
      { type: 'code', lang: 'java', code:
`n! = n · (n - 1) · (n - 2) · … · 1
0! = 1     <span class="com">// by convention</span>

1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
10! = 3,628,800` },
      { type: 'heading', text: 'Why n!', level: 2 },
      { type: 'para', html: 'To arrange <code>n</code> distinct items in a row: <code>n</code> choices for slot 1, <code>n−1</code> for slot 2, … 1 for the last. Product rule gives <code>n!</code>.' },
      { type: 'heading', text: 'P(n, k) — partial permutations', level: 2 },
      { type: 'code', lang: 'java', code:
`P(n, k) = n! / (n - k)!

<span class="com">// Pick 3 winners (gold, silver, bronze) from 10 runners:
//   P(10, 3) = 10·9·8 = 720</span>` },
      { type: 'heading', text: 'With repetition', level: 2 },
      { type: 'para', html: 'If each position is independent and items can repeat, total = <code>n<sup>k</sup></code>. Example: number of 4-letter strings from a 26-letter alphabet = <code>26<sup>4</sup></code>.' },
      { type: 'heading', text: 'When items repeat', level: 2 },
      { type: 'para', html: 'Anagrams of <code>BANANA</code>: <code>6!</code> over <code>3! · 2! · 1!</code> = 60.' },
      { type: 'heading', text: 'Computing n! safely', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">long</span> <span class="fn">factorial</span>(<span class="ty">int</span> n) {
  <span class="kw">long</span> f = <span class="num">1</span>;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; i &lt;= n; i++) f *= i;
  <span class="kw">return</span> f;
}
<span class="com">// long overflows at 21! — use BigInteger for bigger n.</span>` },
      { type: 'callout', kind: 'warn', html: 'Factorials explode. 20! is already ~2.4 × 10¹⁸. Mod arithmetic or BigInteger required for combinatorics problems in contests.' },
      { type: 'heading', text: 'Real-world examples', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'TSP visits N cities — N! possible tours',
        'Shuffling a 52-card deck — 52! ≈ 8 × 10⁶⁷ orderings',
        'Brute-force password cracking — permutations with repetition'
      ]}
    ]},

    /* ============== CH 14: Combinations ============== */
    { id: 'math-c14', title: 'Combinations', icon: '🎯', sections: [
      { type: 'heading', text: 'Order does not matter', level: 1 },
      { type: 'para', html: 'A <strong>combination</strong> is a choice of <code>k</code> items from <code>n</code>, ignoring order. <code>{A,B,C}</code> = <code>{C,A,B}</code>.' },
      { type: 'heading', text: 'C(n, k) — "n choose k"', level: 2 },
      { type: 'code', lang: 'java', code:
`C(n, k) = n! / (k! · (n - k)!)
       = P(n, k) / k!

C(5, 2) = 10
C(52, 5) = 2,598,960   <span class="com">// poker hands</span>` },
      { type: 'heading', text: 'Why divide by k!', level: 2 },
      { type: 'para', html: 'Each set of <code>k</code> items can be arranged <code>k!</code> ways. So C is just P with that overcounting removed.' },
      { type: 'heading', text: 'Pascal\'s triangle', level: 2 },
      { type: 'image', alt: 'pascals triangle', svg:
`<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;">
  <rect width="400" height="240" fill="#fafafa" rx="8"/>
  <text x="200" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">Pascal\'s Triangle</text>
  <g font-family="JetBrains Mono" font-size="13" text-anchor="middle">
    <text x="200" y="50">1</text>
    <text x="180" y="75">1</text><text x="220" y="75">1</text>
    <text x="160" y="100">1</text><text x="200" y="100">2</text><text x="240" y="100">1</text>
    <text x="140" y="125">1</text><text x="180" y="125">3</text><text x="220" y="125">3</text><text x="260" y="125">1</text>
    <text x="120" y="150">1</text><text x="160" y="150">4</text><text x="200" y="150">6</text><text x="240" y="150">4</text><text x="280" y="150">1</text>
    <text x="100" y="175">1</text><text x="140" y="175">5</text><text x="180" y="175">10</text><text x="220" y="175">10</text><text x="260" y="175">5</text><text x="300" y="175">1</text>
    <text x="80"  y="200">1</text><text x="120" y="200">6</text><text x="160" y="200">15</text><text x="200" y="200">20</text><text x="240" y="200">15</text><text x="280" y="200">6</text><text x="320" y="200">1</text>
    <text x="200" y="230" font-family="Nunito" font-size="11" fill="#666">Each number = sum of the two above.</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Pascal\'s identity', level: 2 },
      { type: 'code', lang: 'java', code:
`C(n, k) = C(n-1, k-1) + C(n-1, k)
<span class="com">// Choose k from n: either include the last item (k-1 from n-1)
// or exclude it (k from n-1).</span>` },
      { type: 'heading', text: 'Binomial theorem', level: 2 },
      { type: 'code', lang: 'java', code:
`(a + b)ⁿ = Σ C(n, k) · aⁿ⁻ᵏ · bᵏ    for k = 0…n

(a + b)³ = a³ + 3a²b + 3ab² + b³   <span class="com">// coefficients 1,3,3,1 from Pascal row 3</span>` },
      { type: 'heading', text: 'Computing C(n, k) without overflow', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">long</span> <span class="fn">choose</span>(<span class="ty">int</span> n, <span class="ty">int</span> k) {
  <span class="kw">if</span> (k &gt; n - k) k = n - k;
  <span class="kw">long</span> c = <span class="num">1</span>;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) {
    c = c * (n - i) / (i + <span class="num">1</span>);
  }
  <span class="kw">return</span> c;
}` },
      { type: 'callout', kind: 'tip', html: '<code>C(n, k) = C(n, n-k)</code> — pick the smaller k to keep numbers small.' }
    ]},

    /* ============== CH 15: Probability Basics ============== */
    { id: 'math-c15', title: 'Probability Basics', icon: '🎲', sections: [
      { type: 'heading', text: 'How likely is something?', level: 1 },
      { type: 'para', html: 'Probability is a number between 0 and 1: 0 means impossible, 1 means certain.' },
      { type: 'heading', text: 'Sample space and events', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Sample space</strong> Ω — set of all outcomes (rolling a die: {1..6})',
        '<strong>Event</strong> — subset of Ω (rolling even: {2, 4, 6})',
        '<strong>P(A)</strong> — probability of event A'
      ]},
      { type: 'heading', text: 'Equally likely outcomes', level: 2 },
      { type: 'code', lang: 'java', code:
`P(A) = |A| / |Ω|

<span class="com">// P(even on a die) = 3 / 6 = 0.5
// P(king from deck) = 4 / 52 = 1/13</span>` },
      { type: 'image', alt: 'probability bar', svg:
`<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto;">
  <rect width="500" height="100" fill="#fafafa" rx="8"/>
  <rect x="40" y="40" width="420" height="20" fill="#eee" stroke="#999"/>
  <rect x="40" y="40" width="0"   height="20" fill="#ff4b4b"/>
  <rect x="40" y="40" width="105" height="20" fill="#ff9600"/>
  <rect x="40" y="40" width="210" height="20" fill="#1cb0f6"/>
  <rect x="40" y="40" width="420" height="20" fill="#58cc02" fill-opacity="0.3"/>
  <text x="40"  y="80" text-anchor="middle" font-family="Nunito" font-size="11">0</text>
  <text x="145" y="80" text-anchor="middle" font-family="Nunito" font-size="11">0.25</text>
  <text x="250" y="80" text-anchor="middle" font-family="Nunito" font-size="11">0.5</text>
  <text x="355" y="80" text-anchor="middle" font-family="Nunito" font-size="11">0.75</text>
  <text x="460" y="80" text-anchor="middle" font-family="Nunito" font-size="11">1</text>
  <text x="250" y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">Probability scale</text>
</svg>` },
      { type: 'heading', text: 'Complement rule', level: 2 },
      { type: 'code', lang: 'java', code:
`P(not A) = 1 - P(A)

<span class="com">// P(at least one head in 3 flips) = 1 - P(all tails)
//                                = 1 - (1/2)³ = 7/8</span>` },
      { type: 'heading', text: 'Mutually exclusive events', level: 2 },
      { type: 'para', html: 'A and B cannot both happen. Then <code>P(A or B) = P(A) + P(B)</code>.' },
      { type: 'heading', text: 'Independent events', level: 2 },
      { type: 'para', html: 'One does not influence the other. Then <code>P(A and B) = P(A) · P(B)</code>.' },
      { type: 'callout', kind: 'warn', html: 'Independent ≠ mutually exclusive! Two mutually exclusive events (with positive prob) cannot be independent — knowing one happened tells you the other did not.' },
      { type: 'heading', text: 'Quick example', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Flip a fair coin twice.
// P(HH) = 1/2 · 1/2 = 1/4
// P(exactly one H) = 1/4 + 1/4 = 1/2
// P(at least one H) = 1 - 1/4 = 3/4</span>` }
    ]},

    /* ============== CH 16: Conditional Probability & Bayes ============== */
    { id: 'math-c16', title: 'Conditional Probability & Bayes', icon: '🧪', sections: [
      { type: 'heading', text: 'Updating beliefs with evidence', level: 1 },
      { type: 'para', html: 'Knowing something happened often changes the probability of something else. That update is conditional probability.' },
      { type: 'heading', text: 'P(A | B)', level: 2 },
      { type: 'code', lang: 'java', code:
`P(A | B) = P(A ∩ B) / P(B)

<span class="com">// "Probability of A given B happened"</span>` },
      { type: 'heading', text: 'Worked example — cards', level: 2 },
      { type: 'para', html: 'Draw a card. P(king) = 4/52. Now you peek and see it is a face card. P(king | face) = 4/12 = 1/3. The information shrank the sample space.' },
      { type: 'heading', text: 'Multiplication rule', level: 2 },
      { type: 'code', lang: 'java', code:
`P(A ∩ B) = P(A | B) · P(B)
         = P(B | A) · P(A)` },
      { type: 'heading', text: 'Bayes\' theorem', level: 2 },
      { type: 'code', lang: 'java', code:
`P(A | B) = P(B | A) · P(A) / P(B)` },
      { type: 'para', html: 'It is just the multiplication rule rearranged. The magic is that it lets you flip the condition — go from "evidence given cause" to "cause given evidence".' },
      { type: 'heading', text: 'Classic — medical test', level: 2 },
      { type: 'para', html: 'A disease affects 1 in 1000. A test is 99% accurate (both ways). You test positive. Are you sick?' },
      { type: 'code', lang: 'java', code:
`P(D)        = 0.001              <span class="com">// disease prevalence</span>
P(+ | D)    = 0.99               <span class="com">// true positive  rate</span>
P(+ | ¬D)   = 0.01               <span class="com">// false positive rate</span>

P(+) = P(+|D)·P(D) + P(+|¬D)·P(¬D)
     = 0.99 · 0.001 + 0.01 · 0.999
     = 0.01098

P(D | +) = 0.99 · 0.001 / 0.01098
        ≈ 0.0902    <span class="com">// only 9% chance you are sick!</span>` },
      { type: 'callout', kind: 'info', html: 'Counter-intuitive! Even with a 99% accurate test, a rare disease + many healthy people = lots of false positives. Bayes\' theorem keeps us honest.' },
      { type: 'heading', text: 'Naive Bayes classifier', level: 2 },
      { type: 'para', html: 'Spam filters: assume word occurrences are conditionally independent given the class, then use Bayes to compute <code>P(spam | words)</code>. Crude assumption, surprisingly effective.' },
      { type: 'heading', text: 'Mental model', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Prior</strong> — what you believed before',
        '<strong>Likelihood</strong> — how well evidence fits the hypothesis',
        '<strong>Posterior</strong> — updated belief',
        'Bayes = prior × likelihood, normalised'
      ]}
    ]},

    /* ============== CH 17: Random Variables ============== */
    { id: 'math-c17', title: 'Random Variables', icon: '🎰', sections: [
      { type: 'heading', text: 'A number that depends on chance', level: 1 },
      { type: 'para', html: 'A <strong>random variable</strong> X assigns a number to each outcome. Roll a die → X = the face. Toss 10 coins → X = number of heads.' },
      { type: 'heading', text: 'Discrete vs continuous', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Discrete</strong> — countable values: dice rolls, click counts',
        '<strong>Continuous</strong> — values on a continuum: height, latency'
      ]},
      { type: 'heading', text: 'PMF — discrete', level: 2 },
      { type: 'para', html: 'A <strong>probability mass function</strong> gives <code>P(X = x)</code> for each value. Sums to 1.' },
      { type: 'heading', text: 'PDF — continuous', level: 2 },
      { type: 'para', html: 'A <strong>probability density function</strong> describes relative likelihood. Probabilities come from areas under the curve, not point values.' },
      { type: 'heading', text: 'Expected value', level: 2 },
      { type: 'code', lang: 'java', code:
`E[X] = Σ x · P(X = x)     <span class="com">// discrete</span>

<span class="com">// Fair die: E[X] = (1+2+3+4+5+6)/6 = 3.5</span>` },
      { type: 'heading', text: 'Variance and std dev', level: 2 },
      { type: 'code', lang: 'java', code:
`Var(X) = E[(X - μ)²] = E[X²] - μ²
σ      = √Var(X)` },
      { type: 'heading', text: 'Linearity of expectation', level: 2 },
      { type: 'para', html: '<code>E[X + Y] = E[X] + E[Y]</code> — always, even when X and Y are dependent. A surprisingly powerful tool in algorithm analysis.' },
      { type: 'callout', kind: 'tip', html: 'Average-case analysis of randomized algorithms (quicksort, hashing) leans on linearity of expectation.' }
    ]},

    /* ============== CH 18: Common Distributions ============== */
    { id: 'math-c18', title: 'Common Distributions', icon: '📊', sections: [
      { type: 'heading', text: 'A field guide', level: 1 },
      { type: 'para', html: 'Most data-generating processes match one of a handful of canonical distributions. Knowing them is half the battle.' },
      { type: 'heading', text: 'Uniform', level: 2 },
      { type: 'para', html: 'All outcomes equally likely. <code>Math.random()</code> is uniform on <code>[0, 1)</code>. Dice rolls are discrete uniform.' },
      { type: 'heading', text: 'Bernoulli', level: 2 },
      { type: 'para', html: 'Single yes/no trial with probability <code>p</code> of success. Mean <code>p</code>, variance <code>p(1−p)</code>.' },
      { type: 'heading', text: 'Binomial', level: 2 },
      { type: 'code', lang: 'java', code:
`X ~ Binomial(n, p)
P(X = k) = C(n, k) · p^k · (1-p)^(n-k)

<span class="com">// 10 coin flips, k heads:
// P(X=5) = C(10,5)·(0.5)^10 ≈ 0.246</span>` },
      { type: 'heading', text: 'Normal (Gaussian)', level: 2 },
      { type: 'para', html: 'The famous bell curve. Two parameters: mean μ and std dev σ. About 68% of data falls within ±1σ, 95% within ±2σ, 99.7% within ±3σ.' },
      { type: 'image', alt: 'normal curve', svg:
`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;">
  <rect width="400" height="180" fill="#fafafa" rx="8"/>
  <text x="200" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">Normal distribution</text>
  <path d="M 30 150 Q 100 150 150 90 Q 200 30 250 90 Q 300 150 370 150" fill="#7c4dff" fill-opacity="0.3" stroke="#7c4dff" stroke-width="2"/>
  <line x1="200" y1="150" x2="200" y2="30" stroke="#666" stroke-dasharray="3,3"/>
  <text x="200" y="170" text-anchor="middle" font-family="JetBrains Mono" font-size="11">μ</text>
  <text x="150" y="170" text-anchor="middle" font-family="JetBrains Mono" font-size="11">μ-σ</text>
  <text x="250" y="170" text-anchor="middle" font-family="JetBrains Mono" font-size="11">μ+σ</text>
</svg>` },
      { type: 'heading', text: 'Why normal is everywhere', level: 2 },
      { type: 'para', html: 'The <strong>Central Limit Theorem</strong>: sums of many independent random variables are approximately normal — regardless of the original distribution. That is why measurement errors, exam scores, and noise all look bell-shaped.' },
      { type: 'heading', text: 'Generating samples in code', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Random</span> r = <span class="kw">new</span> <span class="ty">Random</span>();
<span class="kw">double</span> u = r.<span class="fn">nextDouble</span>();      <span class="com">// uniform [0,1)</span>
<span class="kw">boolean</span> b = r.<span class="fn">nextDouble</span>() &lt; <span class="num">0.3</span>; <span class="com">// Bernoulli(0.3)</span>
<span class="kw">double</span> g = r.<span class="fn">nextGaussian</span>();    <span class="com">// standard normal</span>` }
    ]},

    /* ============== CH 19: Descriptive Statistics ============== */
    { id: 'math-c19', title: 'Descriptive Statistics', icon: '📈', sections: [
      { type: 'heading', text: 'Summarising data', level: 1 },
      { type: 'para', html: 'Given a pile of numbers, descriptive stats give you a few values that capture the shape.' },
      { type: 'heading', text: 'Mean — the average', level: 2 },
      { type: 'code', lang: 'java', code:
`mean = (x₁ + x₂ + … + xₙ) / n` },
      { type: 'heading', text: 'Median — the middle', level: 2 },
      { type: 'para', html: 'Sort, take the middle value. With even n, average the two middles. Resistant to outliers.' },
      { type: 'heading', text: 'Mode — most common', level: 2 },
      { type: 'para', html: 'The value that appears most often. Sets can be bimodal or multimodal.' },
      { type: 'heading', text: 'Range, quartiles, IQR', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Range</strong> — max − min',
        '<strong>Quartiles</strong> Q1 / Q2 / Q3 — 25%, 50%, 75% cuts',
        '<strong>IQR</strong> — Q3 − Q1 — robust spread measure'
      ]},
      { type: 'heading', text: 'Variance & standard deviation', level: 2 },
      { type: 'code', lang: 'java', code:
`variance = (Σ (xᵢ - mean)²) / n
stddev   = √variance` },
      { type: 'widget', name: 'array-vis', props: { values: [4, 8, 15, 16, 23, 42] } },
      { type: 'heading', text: 'Compute them in Java', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">IntSummaryStatistics</span> s = nums.<span class="fn">stream</span>().<span class="fn">summaryStatistics</span>();
s.<span class="fn">getAverage</span>();
s.<span class="fn">getMin</span>();
s.<span class="fn">getMax</span>();
s.<span class="fn">getCount</span>();` },
      { type: 'callout', kind: 'tip', html: 'Always look at the median <em>and</em> mean. A big gap reveals skew or outliers.' }
    ]},

    /* ============== CH 20: Vectors ============== */
    { id: 'math-c20', title: 'Vectors', icon: '➡️', sections: [
      { type: 'heading', text: 'A vector is a list of numbers with direction', level: 1 },
      { type: 'para', html: 'In code, just an array of numbers. Geometrically, an arrow from the origin to a point.' },
      { type: 'image', alt: 'vector arrows', svg:
`<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:320px;display:block;margin:0 auto;">
  <rect width="320" height="240" fill="#fafafa" rx="8"/>
  <line x1="20"  y1="200" x2="300" y2="200" stroke="#999"/>
  <line x1="160" y1="20"  x2="160" y2="220" stroke="#999"/>
  <line x1="160" y1="200" x2="260" y2="120" stroke="#7c4dff" stroke-width="3" marker-end="url(#a)"/>
  <line x1="160" y1="200" x2="100" y2="140" stroke="#1cb0f6" stroke-width="3" marker-end="url(#a)"/>
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#333"/>
    </marker>
  </defs>
  <text x="270" y="115" font-family="JetBrains Mono" font-size="12" fill="#7c4dff">v = (4, 4)</text>
  <text x="20"  y="135" font-family="JetBrains Mono" font-size="12" fill="#1cb0f6">w = (-3, 3)</text>
</svg>` },
      { type: 'heading', text: 'Addition', level: 2 },
      { type: 'code', lang: 'java', code:
`v + w = (v.x + w.x, v.y + w.y)` },
      { type: 'heading', text: 'Scalar multiplication', level: 2 },
      { type: 'code', lang: 'java', code:
`k · v = (k·v.x, k·v.y)
<span class="com">// Doubles or halves the length, possibly flips direction.</span>` },
      { type: 'heading', text: 'Magnitude (norm)', level: 2 },
      { type: 'code', lang: 'java', code:
`|v| = √(v.x² + v.y² + …)

<span class="com">// In Java:</span>
<span class="kw">double</span> mag = <span class="ty">Math</span>.<span class="fn">sqrt</span>(x*x + y*y + z*z);` },
      { type: 'heading', text: 'Unit vector', level: 2 },
      { type: 'para', html: '<code>v̂ = v / |v|</code>. Length 1, same direction. Used to encode pure direction in graphics and ML.' },
      { type: 'heading', text: 'Dot product', level: 2 },
      { type: 'code', lang: 'java', code:
`v · w = v.x·w.x + v.y·w.y + …
     = |v| · |w| · cos θ

<span class="com">// Zero    → perpendicular
// Positive→ pointing same way
// Negative→ pointing opposite</span>` },
      { type: 'heading', text: 'Why dot product matters', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Cosine similarity between documents and embeddings',
        'Light intensity = dot(surface_normal, light_dir)',
        'Projection onto a direction',
        'Tells you the angle between two vectors'
      ]},
      { type: 'heading', text: 'Vectors in Java', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">double</span>[] v = { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
<span class="kw">double</span>[] w = { <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span> };
<span class="kw">double</span> dot = <span class="num">0</span>;
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; v.length; i++) dot += v[i] * w[i];` },
      { type: 'callout', kind: 'info', html: 'Most ML pipelines spend the bulk of their compute on giant vector dot products — that is why GPUs and SIMD instructions matter so much.' }
    ]},

    /* ============== CH 21: Matrices ============== */
    { id: 'math-c21', title: 'Matrices', icon: '🟦', sections: [
      { type: 'heading', text: 'A grid of numbers', level: 1 },
      { type: 'para', html: 'An m × n matrix has m rows and n columns. In code, a 2D array.' },
      { type: 'heading', text: 'Addition', level: 2 },
      { type: 'para', html: 'Element-wise. Both matrices must have the same shape.' },
      { type: 'heading', text: 'Multiplication — the dimensional rule', level: 2 },
      { type: 'para', html: 'You can multiply an <strong>m × k</strong> matrix by a <strong>k × n</strong> matrix to get an <strong>m × n</strong> matrix. Inner dimensions must match.' },
      { type: 'image', alt: 'matrix multiplication', svg:
`<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="200" fill="#fafafa" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">A (m×k) · B (k×n) = C (m×n)</text>
  <g font-family="JetBrains Mono" font-size="12">
    <rect x="40"  y="50" width="120" height="100" fill="#7c4dff" fill-opacity="0.4" stroke="#7c4dff"/>
    <text x="100" y="105" text-anchor="middle">m × k</text>
    <text x="180" y="105" text-anchor="middle" font-family="Nunito" font-size="18" font-weight="bold">·</text>
    <rect x="200" y="50" width="100" height="100" fill="#1cb0f6" fill-opacity="0.4" stroke="#1cb0f6"/>
    <text x="250" y="105" text-anchor="middle">k × n</text>
    <text x="320" y="105" text-anchor="middle" font-family="Nunito" font-size="18" font-weight="bold">=</text>
    <rect x="340" y="50" width="100" height="100" fill="#58cc02" fill-opacity="0.4" stroke="#58cc02"/>
    <text x="390" y="105" text-anchor="middle">m × n</text>
    <text x="240" y="180" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">C[i][j] = Σ A[i][k] · B[k][j]</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Computing it', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">double</span>[][] <span class="fn">mul</span>(<span class="kw">double</span>[][] A, <span class="kw">double</span>[][] B) {
  <span class="ty">int</span> m = A.length, k = A[<span class="num">0</span>].length, n = B[<span class="num">0</span>].length;
  <span class="kw">double</span>[][] C = <span class="kw">new</span> <span class="kw">double</span>[m][n];
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; m; i++)
    <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; n; j++)
      <span class="kw">for</span> (<span class="ty">int</span> p = <span class="num">0</span>; p &lt; k; p++)
        C[i][j] += A[i][p] * B[p][j];
  <span class="kw">return</span> C;
}` },
      { type: 'callout', kind: 'warn', html: 'Matrix multiplication is <em>not</em> commutative. <code>A · B ≠ B · A</code> in general (and one may not even be defined).' },
      { type: 'heading', text: 'Identity matrix', level: 2 },
      { type: 'code', lang: 'java', code:
`I = [ 1 0 0 ]
    [ 0 1 0 ]
    [ 0 0 1 ]

A · I = A     I · A = A` },
      { type: 'heading', text: 'Transpose', level: 2 },
      { type: 'para', html: 'Flip across the main diagonal — rows become columns. Denoted <code>Aᵀ</code>.' },
      { type: 'heading', text: 'Inverse (briefly)', level: 2 },
      { type: 'para', html: 'If A is square and "invertible", there is an <code>A⁻¹</code> with <code>A · A⁻¹ = I</code>. Used to solve linear systems <code>Ax = b ⇒ x = A⁻¹b</code>.' },
      { type: 'heading', text: 'Determinant', level: 2 },
      { type: 'para', html: 'A single number summarising the matrix. Zero means the matrix collapses dimensions and has no inverse.' }
    ]},

    /* ============== CH 22: Matrix Applications ============== */
    { id: 'math-c22', title: 'Matrix Applications', icon: '🌀', sections: [
      { type: 'heading', text: 'Matrices transform space', level: 1 },
      { type: 'para', html: 'A matrix multiplied by a vector returns a new vector — that is a transformation. Rotation, scaling, shearing, projection: all matrices.' },
      { type: 'heading', text: '2D rotation by angle θ', level: 2 },
      { type: 'code', lang: 'java', code:
`R(θ) = [ cosθ  -sinθ ]
       [ sinθ   cosθ ]` },
      { type: 'heading', text: '2D scaling', level: 2 },
      { type: 'code', lang: 'java', code:
`S(sx, sy) = [ sx  0 ]
            [  0 sy ]` },
      { type: 'heading', text: 'Why graphics engines love matrices', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Combine many transforms into one matrix → one multiplication per vertex',
        'Same math for 2D UI, 3D models, camera, projection',
        'GPUs are essentially matrix multiplication factories'
      ]},
      { type: 'heading', text: 'Machine learning', level: 2 },
      { type: 'para', html: 'A neural network layer is <code>y = activation(W · x + b)</code>. Training tunes W and b. The bulk of forward and backward passes is matrix-matrix multiplication.' },
      { type: 'heading', text: 'Page rank', level: 2 },
      { type: 'para', html: 'The original Google ranking algorithm is the principal eigenvector of a giant link matrix. Same math, applied to the web graph.' },
      { type: 'callout', kind: 'tip', html: 'When something says "linear" in computing — linear regression, linear algebra, linear time invariance — there is almost certainly a matrix nearby.' }
    ]},

    /* ============== CH 23: Sequences & Series ============== */
    { id: 'math-c23', title: 'Sequences & Series', icon: '🪜', sections: [
      { type: 'heading', text: 'Lists of numbers with a rule', level: 1 },
      { type: 'para', html: 'A sequence is an ordered list following a pattern. A series is the sum of its terms.' },
      { type: 'heading', text: 'Arithmetic progression (AP)', level: 2 },
      { type: 'code', lang: 'java', code:
`a, a+d, a+2d, a+3d, …

n-th term : aₙ = a + (n-1)d
sum of n  : Sₙ = n/2 · (2a + (n-1)d)

<span class="com">// 1 + 2 + … + n = n(n+1)/2</span>` },
      { type: 'heading', text: 'Geometric progression (GP)', level: 2 },
      { type: 'code', lang: 'java', code:
`a, a·r, a·r², a·r³, …

n-th term : aₙ = a · r^(n-1)
sum of n  : Sₙ = a · (1 - r^n) / (1 - r)    if r ≠ 1
sum to ∞  : S  = a / (1 - r)                if |r| &lt; 1` },
      { type: 'heading', text: 'Why programmers care', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Loop iterations summed = arithmetic series',
        'Doubling/halving algorithms = geometric series',
        'Big-O of recursive halving sums to constant — that is GP',
        'Compound interest is a geometric sequence'
      ]},
      { type: 'heading', text: 'Recurrence relations', level: 2 },
      { type: 'para', html: 'A sequence defined in terms of its previous values. Example: <code>Tₙ = 2·Tₙ₋₁ + 1</code>.' },
      { type: 'heading', text: 'Fibonacci', level: 2 },
      { type: 'code', lang: 'java', code:
`F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, …` },
      { type: 'heading', text: 'Iterative Fibonacci', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="kw">long</span> <span class="fn">fib</span>(<span class="ty">int</span> n) {',
          '  <span class="kw">long</span> a = 0, b = 1;',
          '  <span class="kw">for</span> (<span class="ty">int</span> i = 0; i &lt; n; i++) {',
          '    <span class="kw">long</span> t = a + b;',
          '    a = b;',
          '    b = t;',
          '  }',
          '  <span class="kw">return</span> a;',
          '}'
        ],
        steps: [
          { line: 1, vars: { n: 5 }, note: 'Start: a=0, b=1' },
          { line: 3, vars: { a: 0, b: 1, t: 1 }, note: 'i=0, t = a+b = 1' },
          { line: 4, vars: { a: 1, b: 1 }, note: 'shift: a=1, b=1' },
          { line: 3, vars: { a: 1, b: 1, t: 2 }, note: 'i=1, t = 2' },
          { line: 4, vars: { a: 1, b: 2 }, note: 'shift' },
          { line: 3, vars: { a: 1, b: 2, t: 3 }, note: 'i=2' },
          { line: 4, vars: { a: 2, b: 3 }, note: 'shift' },
          { line: 7, vars: { a: 5 }, note: 'After 5 loops returns 5.' }
        ]
      }},
      { type: 'callout', kind: 'tip', html: 'The ratio of consecutive Fibonacci numbers approaches the golden ratio φ ≈ 1.618.' }
    ]},

    /* ============== CH 24: Logarithms ============== */
    { id: 'math-c24', title: 'Logarithms', icon: '📉', sections: [
      { type: 'heading', text: 'The inverse of exponentiation', level: 1 },
      { type: 'para', html: 'If <code>2<sup>x</sup> = 8</code>, then <code>log₂(8) = 3</code>. "What power do I raise the base to, to get this?"' },
      { type: 'heading', text: 'Common bases', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>log₂</code> — binary log, the programmer\'s friend',
        '<code>log₁₀</code> — common log (engineering)',
        '<code>ln</code> = log<sub>e</sub> — natural log (calculus)'
      ]},
      { type: 'heading', text: 'Log laws', level: 2 },
      { type: 'code', lang: 'java', code:
`log(ab)   = log(a) + log(b)
log(a/b)  = log(a) - log(b)
log(aⁿ)   = n · log(a)
log_b(a)  = log(a) / log(b)    <span class="com">// change of base</span>` },
      { type: 'heading', text: 'Why logs in algorithms', level: 2 },
      { type: 'para', html: 'Whenever you halve a problem repeatedly, the count of halvings is <code>log₂(n)</code>. Binary search, balanced trees, heaps — all logarithmic.' },
      { type: 'image', alt: 'log scale', svg:
`<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
  <rect width="420" height="200" fill="#fafafa" rx="8"/>
  <text x="210" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">log₂(n) grows VERY slowly</text>
  <g font-family="JetBrains Mono" font-size="11">
    <text x="40" y="60">n = 1024     → log₂ = 10</text>
    <text x="40" y="85">n = 1,048,576→ log₂ = 20</text>
    <text x="40" y="110">n = 10⁹      → log₂ ≈ 30</text>
    <text x="40" y="135">n = 10¹²     → log₂ ≈ 40</text>
    <text x="40" y="170" font-family="Nunito" fill="#666">Doubling the input adds 1 to the log.</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Counting digits', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Number of digits of n in base b</span>
<span class="ty">int</span> digits = (<span class="ty">int</span>)<span class="ty">Math</span>.<span class="fn">floor</span>(<span class="ty">Math</span>.<span class="fn">log</span>(n) / <span class="ty">Math</span>.<span class="fn">log</span>(b)) + <span class="num">1</span>;` },
      { type: 'heading', text: 'Log scales in the wild', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Sound — decibels',
        'Earthquakes — Richter scale',
        'pH — acidity',
        'Audio mixers, image gamma, finance returns'
      ]},
      { type: 'callout', kind: 'info', html: 'In algorithm analysis we often write just "log n" without a base — because changing base only multiplies by a constant, which Big-O ignores.' }
    ]},

    /* ============== CH 25: Big O Math ============== */
    { id: 'math-c25', title: 'Big O Math', icon: '🚀', sections: [
      { type: 'heading', text: 'Growth rates compared', level: 1 },
      { type: 'para', html: 'Big O describes how runtime grows with input size. The math behind it is simply asymptotic analysis.' },
      { type: 'image', alt: 'growth chart', svg:
`<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="240" fill="#fafafa" rx="8"/>
  <line x1="40" y1="210" x2="460" y2="210" stroke="#333"/>
  <line x1="40" y1="20"  x2="40"  y2="210" stroke="#333"/>
  <text x="240" y="232" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">n →</text>
  <path d="M 40 200 L 460 195" stroke="#58cc02" fill="none" stroke-width="2"/>
  <text x="465" y="195" font-family="JetBrains Mono" font-size="11" fill="#58cc02">O(log n)</text>
  <path d="M 40 200 L 460 100" stroke="#1cb0f6" fill="none" stroke-width="2"/>
  <text x="465" y="100" font-family="JetBrains Mono" font-size="11" fill="#1cb0f6">O(n)</text>
  <path d="M 40 200 Q 250 80 460 30" stroke="#ff9600" fill="none" stroke-width="2"/>
  <text x="465" y="30"  font-family="JetBrains Mono" font-size="11" fill="#ff9600">O(n log n)</text>
  <path d="M 40 200 Q 200 200 300 30 L 320 20" stroke="#ff4b4b" fill="none" stroke-width="2"/>
  <text x="325" y="20"  font-family="JetBrains Mono" font-size="11" fill="#ff4b4b">O(n²) / 2ⁿ</text>
</svg>` },
      { type: 'heading', text: 'The growth ladder', level: 2 },
      { type: 'code', lang: 'java', code:
`O(1)       <span class="com">// constant</span>
O(log n)   <span class="com">// binary search</span>
O(n)       <span class="com">// linear scan</span>
O(n log n) <span class="com">// good sorting</span>
O(n²)      <span class="com">// nested loops</span>
O(2ⁿ)      <span class="com">// brute-force subsets</span>
O(n!)      <span class="com">// brute-force orderings</span>` },
      { type: 'heading', text: 'Useful identities', level: 2 },
      { type: 'code', lang: 'java', code:
`log(n!) ≈ n log n   <span class="com">// Stirling</span>
2^log₂(n) = n
log_b(n) = Θ(log n) for any b &gt; 1
n · log(n) grows faster than n but slower than n²` },
      { type: 'heading', text: 'Drop constants and lower terms', level: 2 },
      { type: 'code', lang: 'java', code:
`3n² + 50n + 1000  →  O(n²)
5 log n + 17      →  O(log n)
2^n + n^100       →  O(2^n)` },
      { type: 'callout', kind: 'tip', html: 'For tiny <em>n</em> a "bad" algorithm can beat a "good" one because of constants. Big O only matters as inputs grow.' }
    ]},

    /* ============== CH 26: Calculus — Derivatives ============== */
    { id: 'math-c26', title: 'Calculus — Derivatives', icon: '📐', sections: [
      { type: 'heading', text: 'How fast is something changing?', level: 1 },
      { type: 'para', html: 'A derivative is the instantaneous rate of change. For a function <code>f(x)</code>, the derivative <code>f\'(x)</code> tells you the slope at every point.' },
      { type: 'heading', text: 'Intuition — slope of a curve', level: 2 },
      { type: 'image', alt: 'slope', svg:
`<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;">
  <rect width="400" height="220" fill="#fafafa" rx="8"/>
  <line x1="30" y1="190" x2="380" y2="190" stroke="#333"/>
  <line x1="30" y1="20"  x2="30"  y2="190" stroke="#333"/>
  <path d="M 30 190 Q 200 -10 380 80" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <circle cx="180" cy="60" r="5" fill="#ff4b4b"/>
  <line x1="100" y1="120" x2="260" y2="0" stroke="#ff4b4b" stroke-dasharray="3,3"/>
  <text x="280" y="40" font-family="JetBrains Mono" font-size="12" fill="#ff4b4b">tangent slope = f\'(x)</text>
</svg>` },
      { type: 'heading', text: 'Formal definition', level: 2 },
      { type: 'code', lang: 'java', code:
`f\'(x) = lim h→0  ( f(x + h) - f(x) ) / h` },
      { type: 'heading', text: 'Power rule', level: 2 },
      { type: 'code', lang: 'java', code:
`d/dx  xⁿ = n · xⁿ⁻¹

<span class="com">// d/dx x⁵     = 5x⁴
// d/dx x     = 1
// d/dx const = 0
// d/dx √x   = 1/(2√x)</span>` },
      { type: 'heading', text: 'Sum and constant rules', level: 2 },
      { type: 'code', lang: 'java', code:
`d/dx [ f + g ] = f\' + g\'
d/dx [ c · f ] = c · f\'` },
      { type: 'heading', text: 'Product and chain rules', level: 2 },
      { type: 'code', lang: 'java', code:
`d/dx [ f · g ]   = f\' · g + f · g\'
d/dx [ f(g(x)) ] = f\'(g(x)) · g\'(x)` },
      { type: 'heading', text: 'Common derivatives', level: 2 },
      { type: 'code', lang: 'java', code:
`d/dx eˣ      = eˣ
d/dx ln(x)   = 1/x
d/dx sin x   = cos x
d/dx cos x   = -sin x` },
      { type: 'heading', text: 'Critical points', level: 2 },
      { type: 'para', html: 'When <code>f\'(x) = 0</code>, the curve is momentarily flat — possible peak (max), valley (min), or saddle. Finding these is how we optimise.' },
      { type: 'heading', text: 'Why ML needs derivatives', level: 2 },
      { type: 'para', html: 'Training a neural network = minimising a loss function. We compute its derivative with respect to every weight (via backpropagation) and nudge each weight downhill.' },
      { type: 'callout', kind: 'info', html: 'You almost never compute derivatives by hand in ML — automatic differentiation libraries (PyTorch, TensorFlow, JAX) do it for any program you write.' }
    ]},

    /* ============== CH 27: Gradients & Optimization ============== */
    { id: 'math-c27', title: 'Gradients & Optimization', icon: '⛰️', sections: [
      { type: 'heading', text: 'The gradient — a vector of slopes', level: 1 },
      { type: 'para', html: 'For a function of many variables, the <strong>gradient</strong> <code>∇f</code> is the vector of partial derivatives. It points in the direction of steepest ascent.' },
      { type: 'code', lang: 'java', code:
`f(x, y) = x² + 3y²

∂f/∂x = 2x
∂f/∂y = 6y

∇f(x, y) = (2x, 6y)` },
      { type: 'heading', text: 'Gradient descent', level: 2 },
      { type: 'para', html: 'To minimise <code>f</code>, take steps in the direction of <code>-∇f</code> — the steepest <em>descent</em>.' },
      { type: 'code', lang: 'java', code:
`x ← x - α · ∇f(x)

<span class="com">// α (alpha) = learning rate
// Repeat until ∇f ≈ 0 or change is tiny</span>` },
      { type: 'widget', name: 'gradient-descent', props: {} },
      { type: 'heading', text: 'Choosing the learning rate', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Too small → glacial progress, may get stuck',
        'Too big → bounces, overshoots, may diverge',
        'Modern tricks: momentum, Adam, learning-rate schedules'
      ]},
      { type: 'heading', text: 'Stochastic gradient descent (SGD)', level: 2 },
      { type: 'para', html: 'Computing the true gradient over millions of examples is expensive. SGD uses tiny random mini-batches — noisy but very fast, and the noise can help escape shallow valleys.' },
      { type: 'heading', text: 'Local vs global minima', level: 2 },
      { type: 'para', html: 'Gradient descent finds a <em>local</em> minimum. For convex functions (a single bowl), local = global. Neural nets are non-convex, but luckily many local minima are good enough.' },
      { type: 'heading', text: 'Convex functions are friendly', level: 2 },
      { type: 'para', html: 'A function is convex if every chord lies above the curve. Convex problems have a unique global minimum that gradient descent will always find.' },
      { type: 'callout', kind: 'tip', html: 'Linear regression, logistic regression, and SVMs are convex — that is why they were the workhorses before deep learning.' }
    ]},

    /* ============== CH 28: Number Theory — Primes ============== */
    { id: 'math-c28', title: 'Number Theory — Primes', icon: '🔱', sections: [
      { type: 'heading', text: 'What is a prime?', level: 1 },
      { type: 'para', html: 'A natural number greater than 1 with exactly two divisors: 1 and itself. <code>2, 3, 5, 7, 11, 13, …</code> 1 is not prime by convention.' },
      { type: 'heading', text: 'Why programmers care', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'RSA &amp; public-key crypto rely on factoring being hard',
        'Hashing — moduli are often prime for fewer collisions',
        'Random number generators use prime parameters',
        'Many algorithmic competitions are number-theory heavy'
      ]},
      { type: 'heading', text: 'Trial division', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span> <span class="fn">isPrime</span>(<span class="kw">long</span> n) {
  <span class="kw">if</span> (n &lt; <span class="num">2</span>) <span class="kw">return false</span>;
  <span class="kw">for</span> (<span class="kw">long</span> i = <span class="num">2</span>; i*i &lt;= n; i++)
    <span class="kw">if</span> (n % i == <span class="num">0</span>) <span class="kw">return false</span>;
  <span class="kw">return true</span>;
}` },
      { type: 'callout', kind: 'tip', html: 'You only need to check divisors up to √n — if n had a divisor &gt; √n, it would have a paired one &lt; √n.' },
      { type: 'heading', text: 'Sieve of Eratosthenes', level: 2 },
      { type: 'para', html: 'List numbers 2..N. Mark 2 as prime, cross out its multiples. Take the next unmarked number, repeat. What remains is prime.' },
      { type: 'image', alt: 'sieve grid', svg:
`<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="220" fill="#fafafa" rx="8"/>
  <text x="180" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">Sieve up to 30</text>
  <g font-family="JetBrains Mono" font-size="11" text-anchor="middle">
    <g fill="#58cc02">
      <text x="60"  y="60">2</text><text x="100" y="60">3</text>
      <text x="180" y="60">5</text>
      <text x="260" y="60">7</text>
    </g>
    <g fill="#999"><text x="20" y="60">1</text><text x="140" y="60">4</text><text x="220" y="60">6</text><text x="300" y="60">8</text></g>
    <g fill="#999"><text x="20" y="90">9</text><text x="100" y="90">10</text></g>
    <g fill="#58cc02"><text x="60" y="90">11</text><text x="140" y="90">13</text><text x="220" y="90">17</text><text x="300" y="90">19</text></g>
    <g fill="#999"><text x="180" y="90">12</text><text x="260" y="90">14</text></g>
    <g fill="#58cc02"><text x="60" y="120">23</text><text x="140" y="120">29</text></g>
    <g fill="#999"><text x="100" y="120">25</text><text x="180" y="120">27</text><text x="220" y="120">28</text></g>
    <text x="180" y="170" font-family="Nunito" fill="#666">Green = prime, gray = composite.</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Sieve in code', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span>[] <span class="fn">sieve</span>(<span class="ty">int</span> n) {
  <span class="kw">boolean</span>[] p = <span class="kw">new</span> <span class="kw">boolean</span>[n + <span class="num">1</span>];
  <span class="ty">Arrays</span>.<span class="fn">fill</span>(p, <span class="kw">true</span>);
  p[<span class="num">0</span>] = p[<span class="num">1</span>] = <span class="kw">false</span>;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">2</span>; (<span class="kw">long</span>)i*i &lt;= n; i++)
    <span class="kw">if</span> (p[i])
      <span class="kw">for</span> (<span class="ty">int</span> j = i*i; j &lt;= n; j += i)
        p[j] = <span class="kw">false</span>;
  <span class="kw">return</span> p;
}` },
      { type: 'heading', text: 'Prime factorisation', level: 2 },
      { type: 'para', html: 'Every integer &gt; 1 factors uniquely into primes (Fundamental Theorem of Arithmetic). <code>360 = 2³ · 3² · 5</code>.' },
      { type: 'heading', text: 'How many primes?', level: 2 },
      { type: 'para', html: 'Infinitely many (Euclid proved it ~300 BC). The prime-counting function π(n) ≈ n / ln(n) — primes thin out, but never run out.' }
    ]},

    /* ============== CH 29: GCD & LCM ============== */
    { id: 'math-c29', title: 'GCD & LCM', icon: '🪢', sections: [
      { type: 'heading', text: 'GCD — greatest common divisor', level: 1 },
      { type: 'para', html: 'The largest number that divides both. <code>gcd(12, 18) = 6</code>.' },
      { type: 'heading', text: 'LCM — least common multiple', level: 2 },
      { type: 'para', html: 'The smallest positive number both divide into. <code>lcm(4, 6) = 12</code>.' },
      { type: 'heading', text: 'Relationship', level: 2 },
      { type: 'code', lang: 'java', code:
`gcd(a, b) · lcm(a, b) = a · b

<span class="com">// So: lcm(a, b) = a / gcd(a, b) · b
// (divide first to avoid overflow)</span>` },
      { type: 'heading', text: 'Euclid\'s algorithm', level: 2 },
      { type: 'para', html: 'Older than calculus — and still optimal. Replace the larger number with the remainder, repeat until one is zero.' },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">int</span> <span class="fn">gcd</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) {',
          '  <span class="kw">while</span> (b != 0) {',
          '    <span class="ty">int</span> t = b;',
          '    b = a % b;',
          '    a = t;',
          '  }',
          '  <span class="kw">return</span> a;',
          '}'
        ],
        steps: [
          { line: 0, vars: { a: 48, b: 18 }, note: 'gcd(48, 18)' },
          { line: 1, vars: { a: 48, b: 18 }, note: 'b != 0, enter loop' },
          { line: 3, vars: { a: 48, b: 18, t: 18 }, note: 't = 18' },
          { line: 4, vars: { a: 48, b: 12, t: 18 }, note: '48 % 18 = 12' },
          { line: 5, vars: { a: 18, b: 12 }, note: 'a = 18' },
          { line: 3, vars: { a: 18, b: 12, t: 12 }, note: 't = 12' },
          { line: 4, vars: { a: 18, b: 6, t: 12 }, note: '18 % 12 = 6' },
          { line: 5, vars: { a: 12, b: 6 }, note: 'a = 12' },
          { line: 4, vars: { a: 12, b: 0, t: 6 }, note: '12 % 6 = 0' },
          { line: 5, vars: { a: 6, b: 0 }, note: 'a = 6' },
          { line: 6, vars: { a: 6 }, note: 'b == 0, return 6' }
        ]
      }},
      { type: 'heading', text: 'Recursive form', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> <span class="fn">gcd</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) {
  <span class="kw">return</span> b == <span class="num">0</span> ? a : <span class="fn">gcd</span>(b, a % b);
}` },
      { type: 'heading', text: 'Why so fast?', level: 2 },
      { type: 'para', html: 'Each step at least halves the smaller value (loosely). So gcd runs in roughly <code>O(log min(a, b))</code> — even on huge BigIntegers.' },
      { type: 'heading', text: 'Coprime numbers', level: 2 },
      { type: 'para', html: '<code>gcd(a, b) = 1</code> means they share no factors. Crucial for RSA key generation and the Chinese Remainder Theorem.' },
      { type: 'callout', kind: 'tip', html: 'Java has <code>BigInteger.gcd</code> built in. Use it for huge values.' }
    ]},

    /* ============== CH 30: Discrete Math — Graphs & Trees ============== */
    { id: 'math-c30', title: 'Discrete Math — Graphs & Trees', icon: '🕸️', sections: [
      { type: 'heading', text: 'Graphs model relationships', level: 1 },
      { type: 'para', html: 'A graph G = (V, E) is a set of <strong>vertices</strong> and a set of <strong>edges</strong> connecting them. Social networks, road maps, web links — all graphs.' },
      { type: 'image', alt: 'graph and tree', svg:
`<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto;">
  <rect width="500" height="220" fill="#fafafa" rx="8"/>
  <text x="125" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">Graph</text>
  <g stroke="#7c4dff" stroke-width="2">
    <line x1="60"  y1="60"  x2="190" y2="60"/>
    <line x1="60"  y1="60"  x2="60"  y2="170"/>
    <line x1="190" y1="60"  x2="190" y2="170"/>
    <line x1="60"  y1="170" x2="190" y2="170"/>
    <line x1="60"  y1="60"  x2="190" y2="170"/>
  </g>
  <g fill="#7c4dff">
    <circle cx="60"  cy="60"  r="10"/><circle cx="190" cy="60"  r="10"/>
    <circle cx="60"  cy="170" r="10"/><circle cx="190" cy="170" r="10"/>
  </g>

  <text x="380" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold">Tree</text>
  <g stroke="#58cc02" stroke-width="2">
    <line x1="380" y1="50"  x2="320" y2="120"/>
    <line x1="380" y1="50"  x2="440" y2="120"/>
    <line x1="320" y1="120" x2="290" y2="180"/>
    <line x1="320" y1="120" x2="350" y2="180"/>
  </g>
  <g fill="#58cc02">
    <circle cx="380" cy="50"  r="10"/>
    <circle cx="320" cy="120" r="10"/><circle cx="440" cy="120" r="10"/>
    <circle cx="290" cy="180" r="10"/><circle cx="350" cy="180" r="10"/>
  </g>
</svg>` },
      { type: 'heading', text: 'Counting edges & degrees', level: 2 },
      { type: 'code', lang: 'java', code:
`Σ deg(v) = 2 · |E|     <span class="com">// handshake lemma</span>

<span class="com">// Each edge contributes 1 to the degree of each endpoint.</span>` },
      { type: 'heading', text: 'Tree properties', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'A tree on n vertices has exactly n − 1 edges',
        'There is a unique path between any two vertices',
        'Removing any edge disconnects it',
        'Adding any edge creates a cycle'
      ]},
      { type: 'heading', text: 'Binary trees in code', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Node</span> {
  <span class="ty">int</span>  value;
  <span class="ty">Node</span> left, right;
}` },
      { type: 'heading', text: 'Graph representations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Adjacency matrix</strong> — n×n boolean grid; fast lookup, big memory',
        '<strong>Adjacency list</strong> — each vertex stores its neighbours; compact',
        '<strong>Edge list</strong> — list of pairs; great for sorting by weight'
      ]},
      { type: 'heading', text: 'Where graphs live', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Friends in a social network',
        'Web pages and hyperlinks',
        'Module dependencies in a build system',
        'Roads and cities for route planning',
        'States and transitions in a finite automaton'
      ]},
      { type: 'callout', kind: 'tip', html: 'Once you start seeing graphs everywhere, you start solving problems with BFS, DFS, Dijkstra, and friends — a whole world opens up.' }
    ]}

  ]
});

LEARN('aptitude', {
  intro: 'Master quantitative aptitude — from divisibility rules to probability — with worked examples, shortcuts, and visual diagrams aimed squarely at competitive exams.',
  chapters: [

    /* ============== CH 1: Number Basics ============== */
    { id: 'apt-c1', title: 'Number Basics', icon: '🔢', sections: [
      { type: 'heading', text: 'Numbers, factors & multiples', level: 1 },
      { type: 'para', html: 'A <strong>factor</strong> of N is a number that divides N exactly. A <strong>multiple</strong> of N is a number that contains N a whole number of times. Example: factors of 12 are <code>1, 2, 3, 4, 6, 12</code>; multiples of 12 are <code>12, 24, 36, 48, …</code>' },
      { type: 'callout', kind: 'info', html: 'Every positive integer can be written uniquely as a product of primes — this is the <strong>Fundamental Theorem of Arithmetic</strong>.' },

      { type: 'heading', text: 'Divisibility rules you must memorize', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>By 2</strong> — last digit is 0, 2, 4, 6, or 8.',
        '<strong>By 3</strong> — sum of digits divisible by 3.',
        '<strong>By 4</strong> — last <em>two</em> digits divisible by 4.',
        '<strong>By 5</strong> — last digit is 0 or 5.',
        '<strong>By 6</strong> — divisible by both 2 and 3.',
        '<strong>By 8</strong> — last <em>three</em> digits divisible by 8.',
        '<strong>By 9</strong> — sum of digits divisible by 9.',
        '<strong>By 10</strong> — last digit is 0.',
        '<strong>By 11</strong> — (sum of digits at odd positions − sum at even positions) is divisible by 11.'
      ]},

      { type: 'heading', text: 'Divisibility tree visual', level: 2 },
      { type: 'image', alt: 'divisibility tree', svg:
`<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px;display:block;margin:0 auto;">
  <rect width="620" height="260" fill="#fafafa" rx="8"/>
  <text x="310" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Is N divisible by …?</text>
  <circle cx="310" cy="60" r="28" fill="#7c4dff"/>
  <text x="310" y="65" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">N</text>
  <line x1="310" y1="88" x2="110" y2="140" stroke="#999"/>
  <line x1="310" y1="88" x2="230" y2="140" stroke="#999"/>
  <line x1="310" y1="88" x2="350" y2="140" stroke="#999"/>
  <line x1="310" y1="88" x2="470" y2="140" stroke="#999"/>
  <line x1="310" y1="88" x2="570" y2="140" stroke="#999"/>
  <g font-family="Nunito" font-size="11">
    <rect x="60" y="140" width="100" height="40" rx="6" fill="#1cb0f6"/><text x="110" y="158" text-anchor="middle" fill="white" font-weight="bold">÷ 2</text><text x="110" y="172" text-anchor="middle" fill="white">last digit even</text>
    <rect x="180" y="140" width="100" height="40" rx="6" fill="#1cb0f6"/><text x="230" y="158" text-anchor="middle" fill="white" font-weight="bold">÷ 3</text><text x="230" y="172" text-anchor="middle" fill="white">digit sum %3</text>
    <rect x="300" y="140" width="100" height="40" rx="6" fill="#1cb0f6"/><text x="350" y="158" text-anchor="middle" fill="white" font-weight="bold">÷ 5</text><text x="350" y="172" text-anchor="middle" fill="white">ends 0 or 5</text>
    <rect x="420" y="140" width="100" height="40" rx="6" fill="#1cb0f6"/><text x="470" y="158" text-anchor="middle" fill="white" font-weight="bold">÷ 9</text><text x="470" y="172" text-anchor="middle" fill="white">digit sum %9</text>
    <rect x="540" y="140" width="70" height="40" rx="6" fill="#1cb0f6"/><text x="575" y="158" text-anchor="middle" fill="white" font-weight="bold">÷ 11</text><text x="575" y="172" text-anchor="middle" fill="white">alt sum</text>
  </g>
  <text x="310" y="220" text-anchor="middle" font-family="Nunito" font-size="12" fill="#666">Example: 1782 → digit sum 18 → divisible by 9 and 3</text>
  <text x="310" y="240" text-anchor="middle" font-family="Nunito" font-size="12" fill="#666">1782: (1+8) − (7+2) = 0 → divisible by 11</text>
</svg>` },

      { type: 'heading', text: 'Worked example — divisibility by 11', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Is 4 8 9 5 8 1 divisible by 11?</span>
<span class="kw">odd positions</span>  (1st, 3rd, 5th) = <span class="num">4 + 9 + 8</span> = <span class="num">21</span>
<span class="kw">even positions</span> (2nd, 4th, 6th) = <span class="num">8 + 5 + 1</span> = <span class="num">14</span>
<span class="fn">difference</span> = <span class="num">21 − 14</span> = <span class="num">7</span>
<span class="com">// 7 is NOT a multiple of 11 → 489581 is not divisible by 11</span>` },

      { type: 'heading', text: 'HCF (GCD) and LCM', level: 2 },
      { type: 'para', html: 'The <strong>HCF</strong> (Highest Common Factor) is the biggest number that divides both. The <strong>LCM</strong> (Least Common Multiple) is the smallest number that both divide. Useful identity: <code>HCF(a,b) × LCM(a,b) = a × b</code>.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// Find HCF and LCM of 12 and 18</span>
<span class="num">12</span> = <span class="num">2² × 3</span>
<span class="num">18</span> = <span class="num">2 × 3²</span>

<span class="fn">HCF</span> = take <span class="kw">lowest</span> power of each prime → <span class="num">2¹ × 3¹</span> = <span class="num">6</span>
<span class="fn">LCM</span> = take <span class="kw">highest</span> power of each prime → <span class="num">2² × 3²</span> = <span class="num">36</span>

<span class="com">// Check: HCF × LCM = 6 × 36 = 216 = 12 × 18 ✔</span>` },

      { type: 'heading', text: 'Euclidean algorithm for HCF', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// HCF(252, 105) using repeated remainders</span>
<span class="num">252</span> = <span class="num">105 × 2</span> + <span class="num">42</span>
<span class="num">105</span> = <span class="num">42 × 2</span> + <span class="num">21</span>
<span class="num">42</span>  = <span class="num">21 × 2</span> + <span class="num">0</span>     <span class="com">// stop when remainder is 0</span>
<span class="fn">HCF</span> = <span class="num">21</span>` },

      { type: 'callout', kind: 'tip', html: 'For three numbers, take pairwise: <code>HCF(a,b,c) = HCF(HCF(a,b), c)</code>. Same for LCM.' },
      { type: 'divider' }
    ]},

    /* ============== CH 2: Fractions & Decimals ============== */
    { id: 'apt-c2', title: 'Fractions & Decimals', icon: '½', sections: [
      { type: 'heading', text: 'What is a fraction?', level: 1 },
      { type: 'para', html: 'A <strong>fraction</strong> <code>a/b</code> is a way of writing a part of a whole. <em>a</em> is the numerator, <em>b</em> is the denominator. A fraction is <strong>proper</strong> if a &lt; b, and <strong>improper</strong> if a ≥ b.' },

      { type: 'heading', text: 'Four operations on fractions', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">add/subtract</span>: take common denominator
   <span class="num">a/b ± c/d</span> = <span class="num">(ad ± bc) / bd</span>

<span class="kw">multiply</span>: numerators × numerators, denominators × denominators
   <span class="num">a/b × c/d</span> = <span class="num">ac / bd</span>

<span class="kw">divide</span>: invert the second and multiply
   <span class="num">a/b ÷ c/d</span> = <span class="num">a/b × d/c</span> = <span class="num">ad / bc</span>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Simplify 2/3 + 3/4 − 1/6</span>
LCM of denominators (3, 4, 6) = <span class="num">12</span>
= <span class="num">8/12 + 9/12 − 2/12</span>
= <span class="num">15/12</span>
= <span class="num">5/4</span>  <span class="com">// reduced</span>` },

      { type: 'heading', text: 'Converting fraction ↔ decimal', level: 2 },
      { type: 'image', alt: 'fraction to decimal flow', svg:
`<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="140" fill="#fafafa" rx="8"/>
  <rect x="20" y="40" width="140" height="60" rx="10" fill="#7c4dff"/>
  <text x="90" y="68" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Fraction</text>
  <text x="90" y="86" text-anchor="middle" fill="white" font-family="JetBrains Mono">3/4</text>
  <text x="200" y="65" font-family="Nunito" font-weight="bold" fill="#666">÷ (long div.)</text>
  <rect x="320" y="40" width="140" height="60" rx="10" fill="#1cb0f6"/>
  <text x="390" y="68" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Decimal</text>
  <text x="390" y="86" text-anchor="middle" fill="white" font-family="JetBrains Mono">0.75</text>
  <text x="500" y="65" font-family="Nunito" font-weight="bold" fill="#666">× 100 %</text>
  <rect x="20" y="40" width="140" height="60" rx="10" fill="none" stroke="#999" stroke-dasharray="3"/>
  <text x="300" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#888">Or: multiply num/denom to get denominator 10, 100, 1000…</text>
</svg>` },

      { type: 'heading', text: 'Terminating vs recurring decimals', level: 2 },
      { type: 'para', html: 'A fraction in lowest terms produces a <strong>terminating</strong> decimal iff its denominator has no prime factor other than 2 and 5. Otherwise it <strong>recurs</strong>.' },
      { type: 'code', lang: 'math', code:
`<span class="num">3/8</span>  → <span class="num">0.375</span>           <span class="com">// 8 = 2³, terminates</span>
<span class="num">1/3</span>  → <span class="num">0.333333…</span>       <span class="com">// 3, recurs</span>
<span class="num">1/7</span>  → <span class="num">0.142857142857…</span> <span class="com">// 7, period 6</span>
<span class="num">5/12</span> → <span class="num">0.41666…</span>        <span class="com">// 12 = 2² × 3, mixed</span>` },

      { type: 'heading', text: 'Recurring → fraction', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Convert 0.4444… to a fraction</span>
Let x = <span class="num">0.4444…</span>
10x = <span class="num">4.4444…</span>
10x − x = <span class="num">4</span>
9x = <span class="num">4</span>  →  x = <span class="num">4/9</span>

<span class="com">// Convert 0.2363636… (only 36 recurs)</span>
x  = <span class="num">0.2363636…</span>
10x = <span class="num">2.363636…</span>
1000x = <span class="num">236.363636…</span>
1000x − 10x = <span class="num">234</span>
990x = <span class="num">234</span>  →  x = <span class="num">234/990</span> = <span class="num">13/55</span>` },

      { type: 'heading', text: 'Shortcut: comparing fractions', level: 2 },
      { type: 'para', html: 'To compare <code>a/b</code> with <code>c/d</code>, cross-multiply: if <code>ad &gt; bc</code> then <code>a/b &gt; c/d</code>. Saves you from finding a common denominator.' },
      { type: 'callout', kind: 'tip', html: 'For a quick check on which fraction is biggest, the one closest to 1 (i.e. smallest difference between num and denom) usually wins among proper fractions like 7/8 vs 5/6.' },
      { type: 'divider' }
    ]},

    /* ============== CH 3: Percentages Core ============== */
    { id: 'apt-c3', title: 'Percentages — Core', icon: '％', sections: [
      { type: 'heading', text: 'What does "percent" mean?', level: 1 },
      { type: 'para', html: '<strong>Percent</strong> means "per hundred". So <code>37%</code> is just shorthand for <code>37/100</code> or <code>0.37</code>. Every percentage problem can be rewritten as a fraction problem.' },

      { type: 'heading', text: 'Three core conversions', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Percent → fraction</span>:  divide by 100
   <span class="num">25%</span> = <span class="num">25/100</span> = <span class="num">1/4</span>

<span class="kw">Percent → decimal</span>:  divide by 100
   <span class="num">25%</span> = <span class="num">0.25</span>

<span class="kw">Decimal → percent</span>:  multiply by 100
   <span class="num">0.6</span> = <span class="num">60%</span>` },

      { type: 'heading', text: 'Standard percentage ↔ fraction table', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="num">10%</span> = <span class="num">1/10</span>      <span class="num">12.5%</span> = <span class="num">1/8</span>
<span class="num">20%</span> = <span class="num">1/5</span>       <span class="num">16⅔%</span> = <span class="num">1/6</span>
<span class="num">25%</span> = <span class="num">1/4</span>       <span class="num">33⅓%</span> = <span class="num">1/3</span>
<span class="num">37.5%</span> = <span class="num">3/8</span>     <span class="num">62.5%</span> = <span class="num">5/8</span>
<span class="num">50%</span> = <span class="num">1/2</span>       <span class="num">66⅔%</span> = <span class="num">2/3</span>
<span class="num">75%</span> = <span class="num">3/4</span>       <span class="num">87.5%</span> = <span class="num">7/8</span>` },

      { type: 'callout', kind: 'tip', html: 'Memorize these. Spotting <em>12.5%</em> and instantly writing <em>1/8</em> saves you 20 seconds on every test.' },

      { type: 'heading', text: 'Finding X% of N', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Formula</span>:  X% of N = (X/100) × N

<span class="com">// 15% of 240</span>
= <span class="num">(15/100) × 240</span>
= <span class="num">15 × 2.4</span>
= <span class="num">36</span>

<span class="com">// Faster: split 15% = 10% + 5%</span>
10% of 240 = <span class="num">24</span>
5%  of 240 = <span class="num">12</span>
total = <span class="num">36</span>` },

      { type: 'heading', text: 'Reverse: what % is A of B?', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Formula</span>:  (A / B) × 100 %

<span class="com">// 45 is what % of 180?</span>
= <span class="num">(45 / 180) × 100</span>
= <span class="num">0.25 × 100</span>
= <span class="num">25%</span>` },

      { type: 'heading', text: 'Worked example — exam classic', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// In a class of 50, 18 are girls. What % are boys?</span>
boys = <span class="num">50 − 18</span> = <span class="num">32</span>
% boys = <span class="num">(32 / 50) × 100</span> = <span class="num">64%</span>` },

      { type: 'heading', text: 'Common pitfall', level: 2 },
      { type: 'callout', kind: 'warn', html: '<strong>"X% more than Y"</strong> is <em>not</em> the same as <strong>"Y% less than X"</strong>. We unpack this in the next chapter.' },
      { type: 'divider' }
    ]},

    /* ============== CH 4: Percentage Change ============== */
    { id: 'apt-c4', title: 'Percentage Change', icon: '📈', sections: [
      { type: 'heading', text: 'Increase and decrease', level: 1 },
      { type: 'para', html: 'If a value changes from <code>A</code> to <code>B</code>, the percentage change is:' },
      { type: 'code', lang: 'math', code:
`<span class="kw">% change</span> = <span class="num">((B − A) / A) × 100</span>

positive → increase
negative → decrease` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Price rose from 80 to 100. % increase?</span>
= <span class="num">((100 − 80) / 80) × 100</span>
= <span class="num">(20 / 80) × 100</span>
= <span class="num">25%</span>

<span class="com">// Price fell from 100 to 80. % decrease?</span>
= <span class="num">((80 − 100) / 100) × 100</span>
= <span class="num">−20%</span>

<span class="com">// Note: same absolute change, different base, different %!</span>` },

      { type: 'heading', text: 'Multipliers (the real shortcut)', level: 2 },
      { type: 'para', html: 'A <strong>+r%</strong> change multiplies by <code>(1 + r/100)</code>. A <strong>−r%</strong> change multiplies by <code>(1 − r/100)</code>. Treating changes as multipliers is the secret to nearly every percentage problem.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">+20%</span>  → multiply by <span class="num">1.20</span>
<span class="kw">−15%</span>  → multiply by <span class="num">0.85</span>
<span class="kw">+150%</span> → multiply by <span class="num">2.50</span>` },

      { type: 'heading', text: 'Successive percentages multiply', level: 2 },
      { type: 'image', alt: 'successive percent', svg:
`<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px;display:block;margin:0 auto;">
  <rect width="620" height="200" fill="#fafafa" rx="8"/>
  <text x="310" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Why successive % multiply (not add)</text>
  <rect x="40" y="60" width="120" height="80" rx="8" fill="#7c4dff"/>
  <text x="100" y="100" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">100</text>
  <text x="100" y="118" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">start</text>
  <text x="190" y="95" font-family="Nunito" font-weight="bold" fill="#666">×1.20</text>
  <text x="190" y="115" font-family="Nunito" font-size="11" fill="#999">(+20%)</text>
  <rect x="240" y="60" width="120" height="80" rx="8" fill="#1cb0f6"/>
  <text x="300" y="100" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">120</text>
  <text x="300" y="118" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">after +20%</text>
  <text x="390" y="95" font-family="Nunito" font-weight="bold" fill="#666">×1.10</text>
  <text x="390" y="115" font-family="Nunito" font-size="11" fill="#999">(+10%)</text>
  <rect x="440" y="60" width="140" height="80" rx="8" fill="#58cc02"/>
  <text x="510" y="100" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">132</text>
  <text x="510" y="118" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">net +32%, not +30%</text>
  <text x="310" y="175" text-anchor="middle" font-family="Nunito" font-size="12" fill="#666">1.20 × 1.10 = 1.32 → so net change = 32%</text>
</svg>` },

      { type: 'heading', text: 'Shortcut formula', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Net % change</span> (two successive)
  = <span class="num">a + b + (ab / 100)</span>

<span class="com">// +20% then +10%</span>
= <span class="num">20 + 10 + (20 × 10)/100</span>
= <span class="num">30 + 2</span>
= <span class="num">+32%</span>

<span class="com">// +30% then −30%</span>
= <span class="num">30 − 30 + (30 × −30)/100</span>
= <span class="num">−9%</span>  <span class="com">// you lose, not break even!</span>` },

      { type: 'heading', text: 'X% more vs Y% less — translated', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A is 25% more than B → A = 1.25 B</span>
<span class="com">// What % less is B than A?</span>
B/A = <span class="num">1 / 1.25</span> = <span class="num">0.80</span>
<span class="fn">B</span> is <span class="num">80%</span> of A → B is <span class="num">20%</span> less than A.

<span class="com">// So "25% more" reversed gives "20% less", not 25%.</span>` },

      { type: 'callout', kind: 'tip', html: 'Two equal & opposite changes always lose money: a discount of x% followed by a markup of x% leaves you at <code>(1 − x²/10000)</code> of the original.' },

      { type: 'heading', text: 'Population growth pattern', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Population grows 10% yearly for 3 years.</span>
<span class="com">// Start: P. After 3 years?</span>
P → P × (1.10)³
  = P × <span class="num">1.331</span>
i.e. net increase of <span class="num">33.1%</span>` },
      { type: 'divider' }
    ]},

    /* ============== CH 5: Profit, Loss & Discount ============== */
    { id: 'apt-c5', title: 'Profit, Loss & Discount', icon: '💰', sections: [
      { type: 'heading', text: 'The three prices', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>CP</strong> — Cost Price (what the seller paid).',
        '<strong>SP</strong> — Selling Price (what the buyer paid).',
        '<strong>MP</strong> — Marked Price / List Price (the sticker, before discount).'
      ]},

      { type: 'heading', text: 'Profit and loss', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Profit</span> = <span class="num">SP − CP</span>     (if SP &gt; CP)
<span class="kw">Loss</span>   = <span class="num">CP − SP</span>     (if SP &lt; CP)

<span class="kw">Profit %</span> = <span class="num">(Profit / CP) × 100</span>
<span class="kw">Loss %</span>   = <span class="num">(Loss / CP) × 100</span>

<span class="com">// CP is ALWAYS the base for profit/loss percent.</span>` },

      { type: 'heading', text: 'SP in terms of CP', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">If profit is p%</span>:   SP = CP × <span class="num">(100 + p)/100</span>
<span class="kw">If loss is l%</span>:     SP = CP × <span class="num">(100 − l)/100</span>

<span class="com">// CP = 800, profit 25% → SP?</span>
SP = <span class="num">800 × 1.25</span> = <span class="num">1000</span>

<span class="com">// SP = 540, loss 10% → CP?</span>
CP = SP / <span class="num">0.90</span> = <span class="num">540 / 0.9</span> = <span class="num">600</span>` },

      { type: 'heading', text: 'Discount', level: 2 },
      { type: 'para', html: 'A <strong>discount</strong> is applied to the marked price. So <code>SP = MP × (1 − d/100)</code>, where d is the discount percentage.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// MP = 1200, discount 25% → SP?</span>
SP = <span class="num">1200 × 0.75</span> = <span class="num">900</span>

<span class="com">// MP = 800, SP = 720 → discount %?</span>
discount = <span class="num">800 − 720</span> = <span class="num">80</span>
% disc   = <span class="num">(80 / 800) × 100</span> = <span class="num">10%</span>` },

      { type: 'heading', text: 'Successive discounts', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Discounts of 20% and 10% on MP = 1000</span>
After 1st: <span class="num">1000 × 0.80</span> = <span class="num">800</span>
After 2nd: <span class="num">800 × 0.90</span>  = <span class="num">720</span>

<span class="fn">Equivalent single discount</span>
  = <span class="num">1 − (0.8 × 0.9)</span>
  = <span class="num">1 − 0.72</span>
  = <span class="num">0.28</span> = <span class="num">28%</span>` },

      { type: 'callout', kind: 'warn', html: 'Two discounts of 20% and 10% give a <strong>28%</strong> single discount, not 30%. Always multiply (1 − d/100) factors.' },

      { type: 'heading', text: 'Combined profit and discount', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Shopkeeper marks up by 40% above CP and offers 25% discount on MP.</span>
<span class="com">// What % does she gain?</span>
Let CP = <span class="num">100</span>.
MP = <span class="num">100 × 1.40</span> = <span class="num">140</span>
SP = <span class="num">140 × 0.75</span> = <span class="num">105</span>
gain = <span class="num">(105 − 100)/100 × 100</span> = <span class="num">5%</span>` },

      { type: 'heading', text: 'False weights', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Dishonest dealer sells at CP but uses 900g weight for 1000g.</span>
<span class="com">// Gain %?</span>
Goods given for 1 unit price = <span class="num">900g</span>
Goods "should" give           = <span class="num">1000g</span>
Gain = <span class="num">100g</span> on <span class="num">900g</span>
% gain = <span class="num">(100 / 900) × 100</span> = <span class="num">11.11%</span>` },

      { type: 'heading', text: 'Equal SP, different P/L', level: 2 },
      { type: 'para', html: 'If two articles are sold at the same SP, one at <code>+x%</code> and the other at <code>−x%</code>, there is always an overall <strong>loss</strong> of <code>(x²/100)%</code>.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// SP same, one +20% the other −20%</span>
overall loss % = <span class="num">20² / 100</span> = <span class="num">4%</span>` },

      { type: 'heading', text: 'Worked example — break-even discount', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Shop markup is 50%. Maximum discount that still avoids loss?</span>
CP = <span class="num">100</span>, MP = <span class="num">150</span>.
For no loss, SP ≥ <span class="num">100</span>.
Max discount = <span class="num">(150 − 100)/150 × 100</span> = <span class="num">33.33%</span>` },
      { type: 'divider' }
    ]},

    /* ============== CH 6: Ratio & Proportion ============== */
    { id: 'apt-c6', title: 'Ratio & Proportion', icon: '⚖️', sections: [
      { type: 'heading', text: 'What is a ratio?', level: 1 },
      { type: 'para', html: 'A <strong>ratio</strong> compares two like quantities by division. We write <code>a : b</code> meaning "for every a of the first, there are b of the second". Ratios have no units (they are pure numbers).' },

      { type: 'heading', text: 'Proportion', level: 2 },
      { type: 'para', html: 'Four quantities <code>a, b, c, d</code> are in <strong>proportion</strong> if <code>a/b = c/d</code>. We write <code>a : b :: c : d</code>. The <em>cross-product</em> rule then says <code>ad = bc</code>.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">Mean proportional</span> between a and c:  x where a : x :: x : c
  →  x² = ac  →  x = <span class="fn">√(ac)</span>

<span class="kw">Third proportional</span> to a, b:  x where a : b :: b : x
  →  x = b² / a` },

      { type: 'heading', text: 'Ratio splitting', level: 2 },
      { type: 'image', alt: 'ratio split bar', svg:
`<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="160" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Split 5400 in ratio 2 : 3 : 4</text>
  <rect x="40" y="60" width="120" height="40" fill="#7c4dff"/>
  <text x="100" y="85" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">A = 1200</text>
  <rect x="160" y="60" width="180" height="40" fill="#1cb0f6"/>
  <text x="250" y="85" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">B = 1800</text>
  <rect x="340" y="60" width="240" height="40" fill="#58cc02"/>
  <text x="460" y="85" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">C = 2400</text>
  <text x="100" y="125" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">2 parts</text>
  <text x="250" y="125" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">3 parts</text>
  <text x="460" y="125" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">4 parts</text>
  <text x="300" y="148" text-anchor="middle" font-family="Nunito" font-size="11" fill="#888">1 part = 5400 / (2+3+4) = 600</text>
</svg>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Split 4500 between Anu and Bala in ratio 5 : 4.</span>
total parts = <span class="num">5 + 4</span> = <span class="num">9</span>
1 part = <span class="num">4500 / 9</span> = <span class="num">500</span>
Anu  = <span class="num">5 × 500</span> = <span class="num">2500</span>
Bala = <span class="num">4 × 500</span> = <span class="num">2000</span>` },

      { type: 'heading', text: 'Direct vs inverse proportion', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Direct</span>:    y ∝ x  →  y = kx
   double x → double y

<span class="kw">Inverse</span>:   y ∝ 1/x  →  xy = k
   double x → halve y

<span class="com">// 12 workers finish a job in 10 days. How many workers for 6 days?</span>
workers × days = constant
<span class="num">12 × 10</span> = w × <span class="num">6</span>
w = <span class="num">20</span>` },

      { type: 'heading', text: 'Combining ratios', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A:B = 3:4 and B:C = 6:5. Find A:B:C.</span>
Make B common. LCM(4, 6) = <span class="num">12</span>.
A:B = <span class="num">9:12</span>  (× 3)
B:C = <span class="num">12:10</span> (× 2)
A:B:C = <span class="num">9 : 12 : 10</span>` },

      { type: 'heading', text: 'Componendo–dividendo', level: 2 },
      { type: 'para', html: 'If <code>a/b = c/d</code>, then <code>(a + b)/(a − b) = (c + d)/(c − d)</code>. Often shrinks a messy equation to a clean one.' },

      { type: 'callout', kind: 'tip', html: 'When mixing ages: "10 years ago A:B was 3:5, now 5:7 — find present ages" — set present ages as 5k and 7k, plug into the past equation, solve for k.' },
      { type: 'divider' }
    ]},

    /* ============== CH 7: Mixtures & Alligation ============== */
    { id: 'apt-c7', title: 'Mixtures & Alligation', icon: '🥣', sections: [
      { type: 'heading', text: 'What is alligation?', level: 1 },
      { type: 'para', html: '<strong>Alligation</strong> is a fast rule for finding the ratio in which two ingredients of different "values" (price, concentration, speed, etc.) must be mixed to get a desired mean value.' },

      { type: 'heading', text: 'The diagram', level: 2 },
      { type: 'image', alt: 'alligation cross', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Alligation cross</text>
  <circle cx="160" cy="80" r="34" fill="#7c4dff"/>
  <text x="160" y="78" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">cheaper</text>
  <text x="160" y="94" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="11">c</text>
  <circle cx="440" cy="80" r="34" fill="#1cb0f6"/>
  <text x="440" y="78" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">dearer</text>
  <text x="440" y="94" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="11">d</text>
  <circle cx="300" cy="150" r="34" fill="#58cc02"/>
  <text x="300" y="148" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">mean</text>
  <text x="300" y="164" text-anchor="middle" fill="white" font-family="JetBrains Mono" font-size="11">m</text>
  <line x1="195" y1="100" x2="265" y2="140" stroke="#888" stroke-width="2"/>
  <line x1="335" y1="140" x2="405" y2="100" stroke="#888" stroke-width="2"/>
  <text x="225" y="200" font-family="Nunito" font-size="12" fill="#444">cheaper : dearer  =  (d − m) : (m − c)</text>
</svg>` },

      { type: 'heading', text: 'Worked example — mixing rice', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Rice at ₹20/kg mixed with rice at ₹30/kg to get ₹24/kg. In what ratio?</span>
cheaper c = <span class="num">20</span>
dearer  d = <span class="num">30</span>
mean    m = <span class="num">24</span>

ratio cheaper : dearer
  = (d − m) : (m − c)
  = (30 − 24) : (24 − 20)
  = <span class="num">6 : 4</span>
  = <span class="num">3 : 2</span>` },

      { type: 'heading', text: 'Concentration problems', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 40% milk solution mixed with 70% milk to get 50%. Ratio?</span>
ratio = <span class="num">(70 − 50) : (50 − 40)</span>
      = <span class="num">20 : 10</span>
      = <span class="num">2 : 1</span>
<span class="com">// 2 parts of the 40% solution for every 1 part of 70%.</span>` },

      { type: 'heading', text: 'Repeated replacement formula', level: 2 },
      { type: 'para', html: 'When some liquid is repeatedly drawn off and replaced with water (or another liquid), the remaining original liquid follows a geometric pattern.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">After n replacements</span>:
  fraction of original liquid left
    = (1 − r/V)<sup>n</sup>

where V = total volume, r = volume replaced each time.

<span class="com">// 40L of milk. Draw 8L, replace with water. Repeat 3 times.</span>
fraction milk left = (1 − 8/40)³
                   = (0.8)³
                   = <span class="num">0.512</span>
milk remaining = <span class="num">0.512 × 40</span> = <span class="num">20.48 L</span>` },

      { type: 'heading', text: 'Average price as alligation', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 10 kg of ₹15/kg mixed with 5 kg of ₹24/kg. Avg price?</span>
avg = <span class="num">(10 × 15 + 5 × 24) / (10 + 5)</span>
    = <span class="num">(150 + 120) / 15</span>
    = <span class="num">270 / 15</span>
    = <span class="num">18 ₹/kg</span>` },

      { type: 'callout', kind: 'info', html: 'Alligation works whenever you can label two groups with a single per-unit value. Average speed across two distances, exam scores by section, alcohol % in a mix — all are alligation problems in disguise.' },
      { type: 'divider' }
    ]},

    /* ============== CH 8: Averages ============== */
    { id: 'apt-c8', title: 'Averages', icon: '📊', sections: [
      { type: 'heading', text: 'Definition', level: 1 },
      { type: 'para', html: 'The <strong>average</strong> (arithmetic mean) of n values is their sum divided by n. Equivalently, total = average × count.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">average</span> = <span class="num">(sum of values) / count</span>
<span class="kw">sum</span>     = <span class="num">average × count</span>` },

      { type: 'heading', text: 'Adding / removing items', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Avg of 5 numbers is 20. A 6th number is added; avg becomes 22.</span>
<span class="com">// Find the new number.</span>
old sum = <span class="num">5 × 20</span> = <span class="num">100</span>
new sum = <span class="num">6 × 22</span> = <span class="num">132</span>
new num = <span class="num">132 − 100</span> = <span class="num">32</span>` },

      { type: 'heading', text: 'Weighted average', level: 2 },
      { type: 'para', html: 'When items count for different weights, use the <strong>weighted average</strong>:' },
      { type: 'code', lang: 'math', code:
`<span class="kw">weighted avg</span>
  = <span class="num">Σ(value × weight) / Σ(weights)</span>

<span class="com">// Class A: 30 students, avg 70. Class B: 20 students, avg 80.</span>
<span class="com">// Combined avg?</span>
= <span class="num">(30 × 70 + 20 × 80) / (30 + 20)</span>
= <span class="num">(2100 + 1600) / 50</span>
= <span class="num">3700 / 50</span>
= <span class="num">74</span>` },

      { type: 'heading', text: 'Average age replaced person', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Avg age of 5 men = 25. One man (age 38) leaves; another joins.</span>
<span class="com">// New avg = 24. Age of new man?</span>
total change in sum = <span class="num">5 × (24 − 25)</span> = <span class="num">−5</span>
so new man is <span class="num">5</span> younger than 38 → <span class="num">33</span>` },

      { type: 'heading', text: 'Average speed (harmonic mean!)', level: 2 },
      { type: 'callout', kind: 'warn', html: 'For equal <strong>distances</strong>, the average speed is the <em>harmonic mean</em>, not the arithmetic mean.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">Equal distances at speeds u, v</span>:
  avg speed = <span class="num">2uv / (u + v)</span>

<span class="com">// 60 km at 30 km/h, then 60 km at 60 km/h. Avg speed?</span>
= <span class="num">(2 × 30 × 60) / (30 + 60)</span>
= <span class="num">3600 / 90</span>
= <span class="num">40 km/h</span>   <span class="com">// not 45!</span>` },

      { type: 'heading', text: 'Equal time vs equal distance', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Equal times</span>:
  avg = (u + v) / 2     <span class="com">// arithmetic mean</span>

<span class="kw">Equal distances</span>:
  avg = 2uv / (u + v)   <span class="com">// harmonic mean</span>` },

      { type: 'heading', text: 'Sum of first n natural numbers / squares', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">1 + 2 + … + n</span> = <span class="num">n(n + 1) / 2</span>
<span class="kw">1² + 2² + … + n²</span> = <span class="num">n(n + 1)(2n + 1) / 6</span>
<span class="kw">1³ + 2³ + … + n³</span> = <span class="num">[n(n + 1) / 2]²</span>

<span class="com">// Avg of first 50 natural numbers</span>
= sum / 50 = <span class="num">[50 × 51 / 2] / 50</span> = <span class="num">25.5</span>` },

      { type: 'heading', text: 'Quick tip', level: 2 },
      { type: 'callout', kind: 'tip', html: 'The average of any AP is just <code>(first + last) / 2</code>. For consecutive integers from 1 to n, that\'s <code>(n+1)/2</code>.' },
      { type: 'divider' }
    ]},

    /* ============== CH 9: Time & Work ============== */
    { id: 'apt-c9', title: 'Time & Work', icon: '🔨', sections: [
      { type: 'heading', text: 'The one-day work idea', level: 1 },
      { type: 'para', html: 'If a person finishes a job in <code>n</code> days, in <strong>one day</strong> they finish <code>1/n</code> of the job. Time-and-work problems all reduce to adding or comparing these per-day fractions.' },

      { type: 'heading', text: 'Combined work', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">A finishes in a days, B in b days</span>:
  together per day = <span class="num">1/a + 1/b</span>
  together time     = <span class="num">ab / (a + b)</span>

<span class="com">// A in 12 days, B in 18. Together?</span>
= <span class="num">(12 × 18) / (12 + 18)</span>
= <span class="num">216 / 30</span>
= <span class="num">7.2 days</span>` },

      { type: 'heading', text: 'Three workers together', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A in 10d, B in 15d, C in 30d. Together?</span>
A+B+C per day = <span class="num">1/10 + 1/15 + 1/30</span>
LCM = <span class="num">30</span>
= <span class="num">3/30 + 2/30 + 1/30</span>
= <span class="num">6/30</span>
= <span class="num">1/5</span>
together = <span class="num">5 days</span>` },

      { type: 'heading', text: 'The LCM unit trick', level: 2 },
      { type: 'para', html: 'Pick total work = LCM of the days, so every per-day amount is a whole number. Magic.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// A in 6d, B in 9d. Work = LCM(6, 9) = 18 units.</span>
A does <span class="num">18/6</span> = <span class="num">3 units/day</span>
B does <span class="num">18/9</span> = <span class="num">2 units/day</span>
Together = <span class="num">5 units/day</span>
Time = <span class="num">18 / 5</span> = <span class="num">3.6 days</span>` },

      { type: 'heading', text: 'Partial work / left work', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A and B together in 12d. A alone in 20d. B works alone after</span>
<span class="com">// they work together for 4d. How many more days for B?</span>
work in 4d = <span class="num">4 × (1/12)</span> = <span class="num">1/3</span>
remaining = <span class="num">2/3</span>

B per day = <span class="num">1/12 − 1/20</span> = <span class="num">(5 − 3)/60</span> = <span class="num">2/60</span> = <span class="num">1/30</span>
B alone time = <span class="num">(2/3) / (1/30)</span> = <span class="num">20 days</span>` },

      { type: 'heading', text: 'Workers vs wages', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A, B, C together earn ₹1500 for a job.</span>
<span class="com">// A in 6d, B in 8d, C in 12d. Share each?</span>
ratio of work = ratio of per-day rate
A : B : C = <span class="num">1/6 : 1/8 : 1/12</span>
LCM = <span class="num">24</span>
A : B : C = <span class="num">4 : 3 : 2</span>
A = <span class="num">1500 × 4/9</span> = <span class="num">666.67</span>
B = <span class="num">1500 × 3/9</span> = <span class="num">500</span>
C = <span class="num">1500 × 2/9</span> = <span class="num">333.33</span>` },

      { type: 'heading', text: 'Pipes and cisterns', level: 2 },
      { type: 'para', html: '<strong>Inlet</strong> pipes fill — count as positive. <strong>Outlet</strong> pipes empty — count as negative. Otherwise identical to time-and-work.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// Pipe A fills in 6h, pipe B fills in 8h, pipe C empties in 12h.</span>
<span class="com">// All open. Time to fill?</span>
net per hour = <span class="num">1/6 + 1/8 − 1/12</span>
LCM = <span class="num">24</span>
= <span class="num">4/24 + 3/24 − 2/24</span>
= <span class="num">5/24</span>
time to fill = <span class="num">24/5</span> = <span class="num">4.8 h</span>` },

      { type: 'heading', text: 'Inverse proportion: men × days', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">M₁ × D₁ × H₁ / W₁ = M₂ × D₂ × H₂ / W₂</span>

<span class="com">// 8 men in 12 days, 6 h/day → 1 wall.</span>
<span class="com">// Same wall by 6 men, 8 h/day → days?</span>
<span class="num">8 × 12 × 6</span> = <span class="num">6 × D × 8</span>
<span class="num">576</span> = <span class="num">48 D</span>
D = <span class="num">12</span>` },

      { type: 'heading', text: 'A common trap', level: 2 },
      { type: 'callout', kind: 'warn', html: '"A is twice as efficient as B" means A\'s rate = 2× B\'s rate, so A takes <em>half</em> the time, not double.' },

      { type: 'heading', text: 'Efficiency style worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A is 50% more efficient than B. B alone in 30 days. A alone?</span>
A : B (efficiency) = <span class="num">1.5 : 1</span> = <span class="num">3 : 2</span>
time is inversely proportional → A : B = <span class="num">2 : 3</span>
B = <span class="num">30</span> → A = <span class="num">20 days</span>` },
      { type: 'divider' }
    ]},

    /* ============== CH 10: Time, Speed, Distance ============== */
    { id: 'apt-c10', title: 'Time, Speed, Distance', icon: '🏃', sections: [
      { type: 'heading', text: 'The master formula', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">distance</span> = <span class="kw">speed</span> × <span class="kw">time</span>` },
      { type: 'image', alt: 'd s t triangle', svg:
`<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="260" fill="#fafafa" rx="8"/>
  <text x="240" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Formula triangle</text>
  <polygon points="240,40 80,220 400,220" fill="none" stroke="#7c4dff" stroke-width="3"/>
  <line x1="160" y1="130" x2="320" y2="130" stroke="#7c4dff" stroke-width="3"/>
  <text x="240" y="90" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="32" fill="#7c4dff">D</text>
  <text x="170" y="195" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="32" fill="#1cb0f6">S</text>
  <text x="310" y="195" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="32" fill="#58cc02">T</text>
  <text x="240" y="248" text-anchor="middle" font-family="Nunito" font-size="11" fill="#888">Cover one, the other two combine</text>
</svg>` },

      { type: 'heading', text: 'Rearranging', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">D</span> = <span class="kw">S</span> × <span class="kw">T</span>
<span class="kw">S</span> = <span class="kw">D</span> / <span class="kw">T</span>
<span class="kw">T</span> = <span class="kw">D</span> / <span class="kw">S</span>` },

      { type: 'heading', text: 'Unit conversions', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">km/h → m/s</span>:  multiply by <span class="num">5/18</span>
<span class="kw">m/s → km/h</span>:  multiply by <span class="num">18/5</span>

<span class="com">// 72 km/h = ?</span>
72 × <span class="num">5/18</span> = <span class="num">20 m/s</span>

<span class="com">// 25 m/s = ?</span>
25 × <span class="num">18/5</span> = <span class="num">90 km/h</span>` },

      { type: 'callout', kind: 'tip', html: 'Whenever a problem mixes km/h with seconds, convert speed to m/s first to avoid arithmetic disasters.' },

      { type: 'heading', text: 'Worked example — basic', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Car travels 240 km at 60 km/h. Time?</span>
T = D/S = <span class="num">240 / 60</span> = <span class="num">4 h</span>

<span class="com">// Walks 5.4 km in 1 h 30 min. Speed?</span>
T = <span class="num">1.5 h</span>
S = <span class="num">5.4 / 1.5</span> = <span class="num">3.6 km/h</span>` },

      { type: 'heading', text: 'Average speed for two legs', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 100 km at 50 km/h, return 100 km at 25 km/h. Avg speed?</span>
total distance = <span class="num">200 km</span>
total time     = <span class="num">100/50 + 100/25</span> = <span class="num">2 + 4</span> = <span class="num">6 h</span>
avg speed      = <span class="num">200 / 6</span> ≈ <span class="num">33.33 km/h</span>
<span class="com">// Same as harmonic mean: 2·50·25 / (50 + 25) = 2500/75 ≈ 33.33</span>` },

      { type: 'heading', text: 'Relative speed — same direction', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Same direction</span>: relative speed = <span class="num">|S₁ − S₂|</span>

<span class="com">// Car A at 80, Car B at 60, both same way.</span>
A gains on B at <span class="num">80 − 60</span> = <span class="num">20 km/h</span>` },

      { type: 'heading', text: 'Relative speed — opposite direction', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Opposite direction</span>: relative speed = <span class="num">S₁ + S₂</span>

<span class="com">// Cars A and B drive toward each other at 60 and 40.</span>
<span class="com">// Distance closes at 100 km/h.</span>` },

      { type: 'heading', text: 'Catching up problem', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A starts at 10:00 at 50 km/h. B starts at 12:00 at 70 km/h, same road.</span>
<span class="com">// When does B catch A?</span>
Head start: <span class="num">50 × 2</span> = <span class="num">100 km</span>
Closing speed: <span class="num">70 − 50</span> = <span class="num">20 km/h</span>
Catch up time: <span class="num">100 / 20</span> = <span class="num">5 h</span>
So at <span class="num">12:00 + 5h</span> = <span class="num">17:00</span>` },

      { type: 'heading', text: 'Late/early time concept', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">If speeds u and v take times differing by t</span>:
  distance = <span class="num">(u × v × t) / (v − u)</span>

<span class="com">// At 30 km/h, late by 10 min; at 40 km/h, early by 5 min. Distance?</span>
diff in time = <span class="num">15 min</span> = <span class="num">1/4 h</span>
D = <span class="num">(30 × 40 × 0.25) / (40 − 30)</span>
  = <span class="num">300 / 10</span>
  = <span class="num">30 km</span>` },

      { type: 'callout', kind: 'info', html: 'For circular tracks: same direction → relative speed is difference, opposite → sum. Time for the faster to lap the slower (same dir.) = track length / (S₁ − S₂).' },
      { type: 'divider' }
    ]},

    /* ============== CH 11: Trains ============== */
    { id: 'apt-c11', title: 'Trains', icon: '🚂', sections: [
      { type: 'heading', text: 'Key idea', level: 1 },
      { type: 'para', html: 'A train passes an object only when the entire length of the train has crossed it. So always add lengths where both objects have length.' },

      { type: 'heading', text: 'Three classic setups', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Passing a point (or pole)</span>
  distance covered = length of train
  time = <span class="num">L / S</span>

<span class="kw">Passing a platform / bridge</span>
  distance covered = L_train + L_platform
  time = <span class="num">(L_t + L_p) / S</span>

<span class="kw">Passing another train</span>
  distance covered = L₁ + L₂
  speed used = relative speed (sum or difference)
  time = <span class="num">(L₁ + L₂) / S_rel</span>` },

      { type: 'heading', text: 'Worked example — pole', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Train 180 m long crosses a pole in 9 s. Speed?</span>
S = <span class="num">180 / 9</span> = <span class="num">20 m/s</span>
   = <span class="num">20 × 18/5</span> = <span class="num">72 km/h</span>` },

      { type: 'heading', text: 'Worked example — platform', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Train 150 m crosses a 300 m platform in 30 s. Speed?</span>
total dist = <span class="num">150 + 300</span> = <span class="num">450 m</span>
S = <span class="num">450 / 30</span> = <span class="num">15 m/s</span> = <span class="num">54 km/h</span>` },

      { type: 'heading', text: 'Two trains crossing', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Train A 120m at 54 km/h, train B 180m at 72 km/h, opposite dir.</span>
<span class="com">// Time to fully cross?</span>
S_A = <span class="num">54 × 5/18</span> = <span class="num">15 m/s</span>
S_B = <span class="num">72 × 5/18</span> = <span class="num">20 m/s</span>
S_rel = <span class="num">15 + 20</span> = <span class="num">35 m/s</span>
total length = <span class="num">120 + 180</span> = <span class="num">300 m</span>
time = <span class="num">300 / 35</span> ≈ <span class="num">8.57 s</span>` },

      { type: 'heading', text: 'Worked example — same direction', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Same trains, same speeds, but same direction.</span>
S_rel = <span class="num">20 − 15</span> = <span class="num">5 m/s</span>
time = <span class="num">300 / 5</span> = <span class="num">60 s</span>
<span class="com">// Same direction = much slower crossing.</span>` },

      { type: 'callout', kind: 'tip', html: 'If a train of length L crosses a man at speed v_m (walking in same direction as train moving at v_t), relative speed = v_t − v_m; time = L / (v_t − v_m).' },
      { type: 'divider' }
    ]},

    /* ============== CH 12: Boats & Streams ============== */
    { id: 'apt-c12', title: 'Boats & Streams', icon: '⛵', sections: [
      { type: 'heading', text: 'Two speeds, two cases', level: 1 },
      { type: 'para', html: 'Let <code>b</code> = speed of boat in still water and <code>s</code> = speed of stream.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">Downstream</span> (with current): D = <span class="num">b + s</span>
<span class="kw">Upstream</span>   (against current): U = <span class="num">b − s</span>

<span class="fn">Recover b and s from D and U</span>:
  b = <span class="num">(D + U) / 2</span>
  s = <span class="num">(D − U) / 2</span>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Boat goes 30 km downstream in 2 h and 18 km upstream in 3 h.</span>
<span class="com">// Find still-water speed and stream speed.</span>
D = <span class="num">30 / 2</span> = <span class="num">15 km/h</span>
U = <span class="num">18 / 3</span> =  <span class="num">6 km/h</span>
b = <span class="num">(15 + 6)/2</span> = <span class="num">10.5</span>
s = <span class="num">(15 − 6)/2</span> = <span class="num">4.5</span>` },

      { type: 'heading', text: 'Time to row both ways', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Boat speed 8 km/h, stream 3 km/h, distance 30 km each way.</span>
D = <span class="num">11 km/h</span>, U = <span class="num">5 km/h</span>
time down = <span class="num">30/11</span> ≈ <span class="num">2.73 h</span>
time up   = <span class="num">30/5</span>  = <span class="num">6 h</span>
total     ≈ <span class="num">8.73 h</span>` },

      { type: 'heading', text: 'Ratio of times', level: 2 },
      { type: 'para', html: 'For the same distance, <code>time_upstream / time_downstream = (b + s) / (b − s)</code>.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// Time ratio up:down = 2:1. Find b:s.</span>
(b + s) / (b − s) = <span class="num">2 / 1</span>
b + s = <span class="num">2(b − s)</span>
b + s = <span class="num">2b − 2s</span>
<span class="num">3s</span> = b
b : s = <span class="num">3 : 1</span>` },

      { type: 'heading', text: 'Still water gotcha', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Same distance both ways: avg speed of round trip?</span>
Use harmonic mean:
  avg = <span class="num">2 × D × U / (D + U)</span>` },

      { type: 'callout', kind: 'info', html: 'A boat that just keeps pace with the current makes no headway upstream. That happens when <code>b = s</code> (and U = 0).' },
      { type: 'divider' }
    ]},

    /* ============== CH 13: Simple Interest ============== */
    { id: 'apt-c13', title: 'Simple Interest', icon: '🏦', sections: [
      { type: 'heading', text: 'The formula', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">SI</span> = <span class="num">P × R × T / 100</span>

<span class="kw">P</span> = principal      (the original sum)
<span class="kw">R</span> = rate per year  (in percent)
<span class="kw">T</span> = time in years
<span class="kw">A</span> = amount = <span class="num">P + SI</span>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// P = 8000, R = 6%, T = 3 years. SI?</span>
SI = <span class="num">8000 × 6 × 3 / 100</span>
   = <span class="num">144000 / 100</span>
   = <span class="num">1440</span>
A  = <span class="num">8000 + 1440</span> = <span class="num">9440</span>` },

      { type: 'heading', text: 'Solving for any variable', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">P</span> = <span class="num">100 × SI / (R × T)</span>
<span class="kw">R</span> = <span class="num">100 × SI / (P × T)</span>
<span class="kw">T</span> = <span class="num">100 × SI / (P × R)</span>

<span class="com">// SI = 720 in 4 years, R = 6%. Find P.</span>
P = <span class="num">100 × 720 / (6 × 4)</span> = <span class="num">72000 / 24</span> = <span class="num">3000</span>` },

      { type: 'heading', text: 'Doubling under SI', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Money doubles → A = 2P → SI = P</span>
P = <span class="num">P × R × T / 100</span>
RT = <span class="num">100</span>

<span class="com">// At 8% per annum simple, time to double?</span>
T = <span class="num">100 / 8</span> = <span class="num">12.5</span> years` },

      { type: 'heading', text: 'Different periods, same principal', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A sum amounts to 1500 in 3 yrs and 1650 in 5 yrs at simple interest.</span>
<span class="com">// Find P and R.</span>
Interest for 2 yrs = <span class="num">1650 − 1500</span> = <span class="num">150</span>
Interest per yr    = <span class="num">75</span>
Interest for 3 yrs = <span class="num">225</span>
P = <span class="num">1500 − 225</span> = <span class="num">1275</span>
R = <span class="num">100 × 75 / 1275</span> ≈ <span class="num">5.88%</span>` },

      { type: 'heading', text: 'Two sums at the same rate', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Two sums (in ratio 4:5) give equal SI for equal time. Rate ratio?</span>
SI₁ = SI₂  →  P₁ R₁ = P₂ R₂
<span class="num">4 R₁</span> = <span class="num">5 R₂</span>
R₁ : R₂ = <span class="num">5 : 4</span>` },

      { type: 'heading', text: 'Borrowing & lending spread', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Borrows ₹5000 at 6%, lends at 8%, for 3 years. Net gain?</span>
spread = <span class="num">2%</span>
gain   = <span class="num">5000 × 2 × 3 / 100</span> = <span class="num">300</span>` },

      { type: 'callout', kind: 'info', html: 'In simple interest, the same amount of interest is earned every year — interest does <em>not</em> earn interest. That\'s the key difference from compound interest.' },
      { type: 'divider' }
    ]},

    /* ============== CH 14: Compound Interest ============== */
    { id: 'apt-c14', title: 'Compound Interest', icon: '📈', sections: [
      { type: 'heading', text: 'The CI formula', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">A</span> = <span class="num">P × (1 + R/100)<sup>T</sup></span>
<span class="kw">CI</span> = <span class="num">A − P</span>

<span class="com">// Interest is added to principal each period, then earns interest itself.</span>` },

      { type: 'heading', text: 'Growth curve', level: 2 },
      { type: 'image', alt: 'compound interest growth', svg:
`<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="260" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Simple vs Compound (P=100, R=10%)</text>
  <line x1="50" y1="220" x2="560" y2="220" stroke="#999"/>
  <line x1="50" y1="40"  x2="50"  y2="220" stroke="#999"/>
  <text x="295" y="245" text-anchor="middle" font-family="Nunito" font-size="11" fill="#888">Years →</text>
  <text x="30" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#888" transform="rotate(-90 30 130)">Amount →</text>
  <polyline points="50,200 110,182 170,164 230,146 290,128 350,110 410,92 470,74 530,56" fill="none" stroke="#1cb0f6" stroke-width="2"/>
  <polyline points="50,200 110,181 170,160 230,137 290,112 350,84 410,53 470,18 530,-22" fill="none" stroke="#7c4dff" stroke-width="2" clip-path="inset(0 0 40px 0)"/>
  <circle cx="50" cy="200" r="3" fill="#333"/>
  <text x="60" y="200" font-family="Nunito" font-size="10" fill="#888">100</text>
  <rect x="380" y="180" width="14" height="14" fill="#1cb0f6"/>
  <text x="400" y="192" font-family="Nunito" font-size="11">Simple interest (linear)</text>
  <rect x="380" y="200" width="14" height="14" fill="#7c4dff"/>
  <text x="400" y="212" font-family="Nunito" font-size="11">Compound interest (curve)</text>
</svg>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// P = 5000, R = 10%, T = 3 years. A and CI?</span>
A = <span class="num">5000 × (1.10)³</span>
  = <span class="num">5000 × 1.331</span>
  = <span class="num">6655</span>
CI = <span class="num">6655 − 5000</span> = <span class="num">1655</span>` },

      { type: 'heading', text: 'Non-annual compounding', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Half-yearly</span> compounded:
  A = P × (1 + R/200)<sup>2T</sup>

<span class="kw">Quarterly</span> compounded:
  A = P × (1 + R/400)<sup>4T</sup>

<span class="com">// P = 8000, R = 20% half-yearly, T = 1 year</span>
A = <span class="num">8000 × (1.10)²</span> = <span class="num">8000 × 1.21</span> = <span class="num">9680</span>` },

      { type: 'heading', text: 'CI vs SI for 2 years', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">CI − SI (2 years)</span> = <span class="num">P × (R/100)²</span>

<span class="com">// P = 6000, R = 10%, T = 2. Find CI − SI.</span>
= <span class="num">6000 × (0.10)²</span>
= <span class="num">6000 × 0.01</span>
= <span class="num">60</span>` },

      { type: 'heading', text: 'CI − SI for 3 years', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">CI − SI (3 years)</span> = <span class="num">P × R² × (300 + R) / 10⁶</span>

<span class="com">// P = 10000, R = 10%. Find CI − SI for 3 years.</span>
= <span class="num">10000 × 100 × 310 / 1000000</span>
= <span class="num">310</span>` },

      { type: 'heading', text: 'Doubling under CI', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// At R% compounded annually, time to double:</span>
<span class="num">2</span> = (1 + R/100)<sup>T</sup>
T = <span class="num">log 2 / log(1 + R/100)</span>

<span class="kw">Rule of 72</span> (approx for small R):
  T ≈ <span class="num">72 / R</span> years

<span class="com">// At 8% → ≈ 9 years to double</span>` },

      { type: 'heading', text: 'Depreciation', level: 2 },
      { type: 'para', html: 'Same formula with a minus sign. Asset value after T years: <code>V = P × (1 − r/100)<sup>T</sup></code>.' },
      { type: 'code', lang: 'math', code:
`<span class="com">// Machine worth 80,000 depreciates 10% per year. Value after 3 yrs?</span>
V = <span class="num">80000 × (0.90)³</span>
  = <span class="num">80000 × 0.729</span>
  = <span class="num">58320</span>` },

      { type: 'heading', text: 'Two-rate compound', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// P = 10000, 10% first year, 20% second year. Amount?</span>
A = <span class="num">10000 × 1.10 × 1.20</span>
  = <span class="num">10000 × 1.32</span>
  = <span class="num">13200</span>` },

      { type: 'callout', kind: 'tip', html: 'Notice that CI for 2 years at R% equals SI at <code>R + R²/200</code>%. The extra term is the interest-on-interest.' },
      { type: 'divider' }
    ]},

    /* ============== CH 15: Permutations ============== */
    { id: 'apt-c15', title: 'Permutations', icon: '🔀', sections: [
      { type: 'heading', text: 'Counting principle', level: 1 },
      { type: 'para', html: 'If task 1 can be done in m ways and task 2 in n ways, then both together can be done in <code>m × n</code> ways. This is the <strong>multiplication (fundamental) counting principle</strong>.' },

      { type: 'heading', text: 'Factorial', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">n!</span> = <span class="num">n × (n − 1) × (n − 2) × … × 2 × 1</span>
<span class="num">0!</span> = <span class="num">1</span>      <span class="com">// by convention</span>
<span class="num">1!</span> = <span class="num">1</span>
<span class="num">2!</span> = <span class="num">2</span>
<span class="num">5!</span> = <span class="num">120</span>
<span class="num">7!</span> = <span class="num">5040</span>` },

      { type: 'heading', text: 'Permutations P(n, r)', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Number of arrangements</span> of r items chosen from n distinct items:

<span class="kw">P(n, r)</span> = <span class="num">n! / (n − r)!</span>
        = <span class="num">n × (n − 1) × … × (n − r + 1)</span>` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// How many 3-letter words from {A,B,C,D,E} (no repetition)?</span>
P(5, 3) = <span class="num">5 × 4 × 3</span> = <span class="num">60</span>

<span class="com">// How many 3-letter words if repetition allowed?</span>
each slot has 5 choices → <span class="num">5³</span> = <span class="num">125</span>` },

      { type: 'heading', text: 'Arrangements with repeated letters', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">If n items contain p alike of type 1, q alike of type 2, …</span>
  distinct arrangements = <span class="num">n! / (p! × q! × …)</span>

<span class="com">// Letters of "BANANA"</span>
n = 6, A appears 3 times, N appears 2 times.
= <span class="num">6! / (3! × 2!)</span>
= <span class="num">720 / 12</span>
= <span class="num">60</span>` },

      { type: 'heading', text: 'Circular permutations', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">n distinct objects around a round table</span>
  arrangements = <span class="num">(n − 1)!</span>

<span class="kw">If clockwise ≡ counterclockwise</span> (e.g. necklace)
  arrangements = <span class="num">(n − 1)! / 2</span>

<span class="com">// 6 people around a round table</span>
= <span class="num">5!</span> = <span class="num">120</span>` },

      { type: 'heading', text: 'Restrictions and gaps', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Word "EQUATION". How many arrangements where vowels stay together?</span>
vowels = {E, U, A, I, O} → 5, treat as one block.
total units: 5 consonants? Actually EQUATION has Q, T, N consonants (3) + 5 vowels.
units = block + 3 consonants = <span class="num">4</span>
arrangements of units = <span class="num">4!</span> = <span class="num">24</span>
inside the block       = <span class="num">5!</span> = <span class="num">120</span>
total = <span class="num">24 × 120</span> = <span class="num">2880</span>` },

      { type: 'heading', text: 'Digits and numbers', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// How many 4-digit numbers can be formed using {1,2,3,4,5} no repeat?</span>
= P(5, 4) = <span class="num">5 × 4 × 3 × 2</span> = <span class="num">120</span>

<span class="com">// How many of those are even?</span>
last digit must be 2 or 4 → <span class="num">2</span> choices
first three from remaining 4 → P(4, 3) = <span class="num">24</span>
total = <span class="num">2 × 24</span> = <span class="num">48</span>` },

      { type: 'callout', kind: 'tip', html: 'Order matters → permutation. Order doesn\'t matter → combination (next chapter).' },
      { type: 'divider' }
    ]},

    /* ============== CH 16: Combinations ============== */
    { id: 'apt-c16', title: 'Combinations', icon: '🎲', sections: [
      { type: 'heading', text: 'When order does not matter', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">C(n, r)</span> = <span class="num">n! / (r! × (n − r)!)</span>

= P(n, r) / r!     <span class="com">// each unordered group corresponds to r! orderings</span>

<span class="kw">Common identities</span>:
  C(n, 0) = C(n, n) = <span class="num">1</span>
  C(n, 1) = C(n, n−1) = <span class="num">n</span>
  C(n, r) = C(n, n − r)
  C(n, r) + C(n, r − 1) = C(n + 1, r)    <span class="com">// Pascal's identity</span>` },

      { type: 'heading', text: 'Pascal\'s triangle', level: 2 },
      { type: 'image', alt: 'pascals triangle', svg:
`<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:0 auto;">
  <rect width="540" height="260" fill="#fafafa" rx="8"/>
  <text x="270" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Pascal's Triangle</text>
  <g font-family="JetBrains Mono" font-size="13" text-anchor="middle">
    <text x="270" y="55">1</text>
    <text x="245" y="80">1</text><text x="295" y="80">1</text>
    <text x="220" y="105">1</text><text x="270" y="105">2</text><text x="320" y="105">1</text>
    <text x="195" y="130">1</text><text x="245" y="130">3</text><text x="295" y="130">3</text><text x="345" y="130">1</text>
    <text x="170" y="155">1</text><text x="220" y="155">4</text><text x="270" y="155">6</text><text x="320" y="155">4</text><text x="370" y="155">1</text>
    <text x="145" y="180">1</text><text x="195" y="180">5</text><text x="245" y="180">10</text><text x="295" y="180">10</text><text x="345" y="180">5</text><text x="395" y="180">1</text>
    <text x="120" y="205">1</text><text x="170" y="205">6</text><text x="220" y="205">15</text><text x="270" y="205">20</text><text x="320" y="205">15</text><text x="370" y="205">6</text><text x="420" y="205">1</text>
  </g>
  <text x="270" y="240" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Row n, position r → C(n, r). Each value = sum of two above.</text>
</svg>` },

      { type: 'heading', text: 'Worked example — committees', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// From 10 people, choose a committee of 4.</span>
C(10, 4) = <span class="num">10! / (4! × 6!)</span>
        = <span class="num">(10 × 9 × 8 × 7) / (4 × 3 × 2 × 1)</span>
        = <span class="num">5040 / 24</span>
        = <span class="num">210</span>` },

      { type: 'heading', text: 'Mixed selection', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// From 7 men and 5 women, choose committee of 4 with 2 men and 2 women.</span>
= C(7, 2) × C(5, 2)
= <span class="num">21 × 10</span>
= <span class="num">210</span>` },

      { type: 'heading', text: 'At-least / at-most problems', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 6 boys and 4 girls; committee of 5 with AT LEAST 3 girls.</span>
case (3G, 2B) = C(4,3) × C(6,2) = <span class="num">4 × 15</span> = <span class="num">60</span>
case (4G, 1B) = C(4,4) × C(6,1) = <span class="num">1 × 6</span>  = <span class="num">6</span>
total = <span class="num">66</span>` },

      { type: 'heading', text: 'Cards — choosing hands', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// From a 52-card deck, choose 5 cards. Number of hands?</span>
C(52, 5) = <span class="num">2,598,960</span>

<span class="com">// Hands with all 5 hearts?</span>
C(13, 5) = <span class="num">1287</span>` },

      { type: 'heading', text: 'Choosing from groups', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Choose 5 books from 7 maths + 6 physics; ≥ 2 of each.</span>
2M 3P : C(7,2) × C(6,3) = <span class="num">21 × 20</span> = <span class="num">420</span>
3M 2P : C(7,3) × C(6,2) = <span class="num">35 × 15</span> = <span class="num">525</span>
total = <span class="num">945</span>` },

      { type: 'callout', kind: 'info', html: 'The sum of any row n of Pascal\'s triangle is 2<sup>n</sup>. This equals the total number of subsets of an n-element set.' },
      { type: 'divider' }
    ]},

    /* ============== CH 17: Probability ============== */
    { id: 'apt-c17', title: 'Probability', icon: '🎲', sections: [
      { type: 'heading', text: 'Sample space and events', level: 1 },
      { type: 'para', html: 'The <strong>sample space</strong> S is the set of all possible outcomes of an experiment. An <strong>event</strong> is a subset of S. Probability of event E is:' },
      { type: 'code', lang: 'math', code:
`<span class="kw">P(E)</span> = <span class="num">number of favourable outcomes / total outcomes</span>

<span class="num">0</span> ≤ P(E) ≤ <span class="num">1</span>
P(impossible) = <span class="num">0</span>,  P(sure) = <span class="num">1</span>
P(not E) = <span class="num">1 − P(E)</span>` },

      { type: 'heading', text: 'Coins', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Toss 2 coins. P(both heads)?</span>
S = {HH, HT, TH, TT} → 4 outcomes
favourable = {HH} → 1
P = <span class="num">1/4</span>

<span class="com">// Toss 3 coins. P(at least one head)?</span>
P(no head) = <span class="num">(1/2)³</span> = <span class="num">1/8</span>
P(≥ 1 head) = <span class="num">1 − 1/8</span> = <span class="num">7/8</span>` },

      { type: 'heading', text: 'Dice', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Roll one die. P(prime)?</span>
S = {1,2,3,4,5,6}, primes = {2,3,5}
P = <span class="num">3/6</span> = <span class="num">1/2</span>

<span class="com">// Roll two dice. P(sum = 7)?</span>
favourable = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} → 6
total = <span class="num">36</span>
P = <span class="num">6/36</span> = <span class="num">1/6</span>` },

      { type: 'heading', text: 'Cards', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Standard deck: 52 cards</span>
  4 suits × 13 ranks
  Red: hearts + diamonds = 26
  Face cards (J, Q, K): 12
  Aces: 4

<span class="com">// Draw one card. P(king or heart)?</span>
P(king) = <span class="num">4/52</span>
P(heart) = <span class="num">13/52</span>
P(king and heart) = <span class="num">1/52</span>
P(king or heart) = <span class="num">4/52 + 13/52 − 1/52</span> = <span class="num">16/52</span> = <span class="num">4/13</span>` },

      { type: 'heading', text: 'Addition rule', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">For any events A, B</span>:
  P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

<span class="kw">If mutually exclusive (cannot both occur)</span>:
  P(A ∪ B) = P(A) + P(B)` },

      { type: 'heading', text: 'Multiplication rule', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Independent events</span>:
  P(A ∩ B) = P(A) × P(B)

<span class="kw">Dependent</span> (B depends on A):
  P(A ∩ B) = P(A) × P(B | A)

<span class="com">// Draw 2 cards without replacement. P(both kings)?</span>
P(first king) = <span class="num">4/52</span>
P(second king | first king) = <span class="num">3/51</span>
P(both kings) = <span class="num">4/52 × 3/51</span> = <span class="num">1/221</span>` },

      { type: 'heading', text: 'Worked example — balls', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Bag has 5 red, 3 blue, 2 green. Pick 2 balls.</span>
<span class="com">// P(both red)?</span>
total = <span class="num">10</span>
P(2 red) = C(5,2) / C(10,2) = <span class="num">10 / 45</span> = <span class="num">2/9</span>

<span class="com">// P(one red, one blue)?</span>
= C(5,1) × C(3,1) / C(10,2)
= <span class="num">15 / 45</span>
= <span class="num">1/3</span>` },

      { type: 'heading', text: 'Conditional probability', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">P(A | B)</span> = <span class="num">P(A ∩ B) / P(B)</span>

<span class="com">// Two dice rolled. Given sum is even, P(sum = 8)?</span>
even sums: 2,4,6,8,10,12 → 18 outcomes
sum 8 outcomes: (2,6)(3,5)(4,4)(5,3)(6,2) → 5
P = <span class="num">5 / 18</span>` },

      { type: 'callout', kind: 'info', html: 'The probability of getting at least one head in n tosses of a fair coin is <code>1 − (1/2)<sup>n</sup></code>. For n=10, that\'s 99.9%.' },
      { type: 'divider' }
    ]},

    /* ============== CH 18: Algebra ============== */
    { id: 'apt-c18', title: 'Algebra', icon: '🅧', sections: [
      { type: 'heading', text: 'Linear equation in one variable', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">ax + b = 0</span>  →  x = <span class="num">−b / a</span>

<span class="com">// 3x − 7 = 11</span>
3x = <span class="num">18</span>
x  = <span class="num">6</span>` },

      { type: 'heading', text: 'Word problem — ages', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A is twice as old as B. 5 years ago A was 3× B. Ages?</span>
Let B = x, A = 2x.
5 yrs ago: <span class="num">(2x − 5) = 3(x − 5)</span>
<span class="num">2x − 5</span> = <span class="num">3x − 15</span>
<span class="num">10</span> = x
B = <span class="num">10</span>, A = <span class="num">20</span>` },

      { type: 'heading', text: 'System of two equations', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 2x + 3y = 13</span>
<span class="com">// 4x − y  = 5</span>
From (2): y = <span class="num">4x − 5</span>
Substitute: <span class="num">2x + 3(4x − 5)</span> = <span class="num">13</span>
<span class="num">2x + 12x − 15</span> = <span class="num">13</span>
<span class="num">14x</span> = <span class="num">28</span>
x = <span class="num">2</span>, y = <span class="num">3</span>` },

      { type: 'heading', text: 'Quadratic formula', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">For</span>  ax² + bx + c = 0

  x = <span class="num">[−b ± √(b² − 4ac)] / 2a</span>

<span class="kw">Discriminant</span> Δ = <span class="num">b² − 4ac</span>:
  Δ &gt; 0 → two distinct real roots
  Δ = 0 → one repeated root
  Δ &lt; 0 → no real roots (two complex)` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// x² − 5x + 6 = 0</span>
Δ = <span class="num">25 − 24</span> = <span class="num">1</span>
x = <span class="num">(5 ± 1) / 2</span>
x = <span class="num">3</span> or <span class="num">2</span>

<span class="com">// Or by factoring: (x − 2)(x − 3) = 0</span>` },

      { type: 'heading', text: 'Sum and product of roots', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">For</span>  ax² + bx + c = 0  with roots α, β:
  α + β = <span class="num">−b / a</span>
  α × β = <span class="num">c / a</span>

<span class="com">// If roots are 3 and 5, equation?</span>
sum = 8, prod = 15
x² − 8x + 15 = 0` },

      { type: 'heading', text: 'Algebraic identities', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="num">(a + b)²</span> = a² + 2ab + b²
<span class="num">(a − b)²</span> = a² − 2ab + b²
<span class="num">a² − b²</span> = (a + b)(a − b)
<span class="num">(a + b)³</span> = a³ + 3a²b + 3ab² + b³
<span class="num">(a − b)³</span> = a³ − 3a²b + 3ab² − b³
<span class="num">a³ + b³</span> = (a + b)(a² − ab + b²)
<span class="num">a³ − b³</span> = (a − b)(a² + ab + b²)
<span class="num">a³ + b³ + c³ − 3abc</span> = (a + b + c)(a² + b² + c² − ab − bc − ca)` },

      { type: 'heading', text: 'Sum of squares trick', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// If a + b = 7 and ab = 12, find a² + b².</span>
a² + b² = (a + b)² − 2ab
        = <span class="num">49 − 24</span>
        = <span class="num">25</span>` },

      { type: 'heading', text: 'Inequalities', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Solve  2x − 5 &lt; 3x + 1</span>
<span class="num">−5 − 1</span> &lt; x
<span class="num">−6</span> &lt; x
x &gt; <span class="num">−6</span>

<span class="com">// Solve  x² &lt; 9</span>
−3 &lt; x &lt; 3` },

      { type: 'callout', kind: 'tip', html: 'When you multiply or divide both sides of an inequality by a <strong>negative number</strong>, flip the inequality sign.' },
      { type: 'divider' }
    ]},

    /* ============== CH 19: Sequences & Series ============== */
    { id: 'apt-c19', title: 'Sequences & Series', icon: '🔢', sections: [
      { type: 'heading', text: 'Arithmetic Progression (AP)', level: 1 },
      { type: 'para', html: 'A sequence where each term is the previous + a fixed <strong>common difference</strong> d.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">nth term</span>:  a<sub>n</sub> = <span class="num">a + (n − 1) d</span>
<span class="kw">sum of n</span>:  S<sub>n</sub> = <span class="num">n/2 × (2a + (n − 1) d)</span>
                = <span class="num">n/2 × (first + last)</span>

<span class="com">// AP: 5, 8, 11, 14, …</span>
a = <span class="num">5</span>, d = <span class="num">3</span>
20th term = <span class="num">5 + 19 × 3</span> = <span class="num">62</span>
sum of first 20 = <span class="num">20/2 × (5 + 62)</span> = <span class="num">670</span>` },

      { type: 'heading', text: 'AP worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 7th term is 31 and 12th term is 51. Find a, d, and the AP.</span>
a + 6d = <span class="num">31</span>
a + 11d = <span class="num">51</span>
subtract: <span class="num">5d</span> = <span class="num">20</span>  →  d = <span class="num">4</span>
a = <span class="num">31 − 24</span> = <span class="num">7</span>
AP: 7, 11, 15, 19, 23, …` },

      { type: 'heading', text: 'Geometric Progression (GP)', level: 2 },
      { type: 'para', html: 'Each term is the previous × a fixed <strong>common ratio</strong> r.' },
      { type: 'code', lang: 'math', code:
`<span class="kw">nth term</span>:  a<sub>n</sub> = <span class="num">a × r<sup>n−1</sup></span>
<span class="kw">sum of n</span>:  S<sub>n</sub> = <span class="num">a × (r<sup>n</sup> − 1) / (r − 1)</span>  (r ≠ 1)

<span class="kw">Sum to infinity</span> (when |r| &lt; 1):
  S<sub>∞</sub> = <span class="num">a / (1 − r)</span>` },

      { type: 'heading', text: 'GP worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// GP: 2, 6, 18, 54, …  sum of first 6 terms?</span>
a = <span class="num">2</span>, r = <span class="num">3</span>
S₆ = <span class="num">2 × (3⁶ − 1) / (3 − 1)</span>
   = <span class="num">2 × (729 − 1) / 2</span>
   = <span class="num">728</span>

<span class="com">// Infinite GP: 8, 4, 2, 1, … sum?</span>
a = 8, r = 1/2
S∞ = <span class="num">8 / (1 − 0.5)</span> = <span class="num">16</span>` },

      { type: 'heading', text: 'AP ↔ GP comparison', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">AP</span>   add d each step:  a, a+d, a+2d, …
<span class="kw">GP</span>   multiply by r:   a, ar, ar², …

<span class="kw">AM and GM</span>
  AM(a, b) = <span class="num">(a + b)/2</span>
  GM(a, b) = <span class="num">√(ab)</span>
  AM ≥ GM (always, for positives)` },

      { type: 'heading', text: 'Special sums', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">1 + 2 + … + n</span>      = <span class="num">n(n+1)/2</span>
<span class="kw">1² + 2² + … + n²</span>   = <span class="num">n(n+1)(2n+1)/6</span>
<span class="kw">1³ + 2³ + … + n³</span>   = <span class="num">[n(n+1)/2]²</span>
<span class="kw">first n odd</span>          = <span class="num">n²</span>
<span class="kw">first n even</span>         = <span class="num">n(n+1)</span>` },

      { type: 'heading', text: 'Mixed example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Sum: 1·2 + 2·3 + 3·4 + … + n(n+1)</span>
= Σ k(k+1)
= Σ k² + Σ k
= <span class="num">n(n+1)(2n+1)/6 + n(n+1)/2</span>
= <span class="num">n(n+1)(n+2)/3</span>` },

      { type: 'callout', kind: 'info', html: 'If three numbers a, b, c are in GP, then b² = ac (b is the geometric mean of a and c).' },
      { type: 'divider' }
    ]},

    /* ============== CH 20: Geometry Basics ============== */
    { id: 'apt-c20', title: 'Geometry — Basics', icon: '📐', sections: [
      { type: 'heading', text: 'Angles', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Acute</strong> — less than 90°.',
        '<strong>Right</strong> — exactly 90°.',
        '<strong>Obtuse</strong> — between 90° and 180°.',
        '<strong>Straight</strong> — 180°.',
        '<strong>Reflex</strong> — between 180° and 360°.',
        '<strong>Complementary</strong> — pair sums to 90°.',
        '<strong>Supplementary</strong> — pair sums to 180°.'
      ]},

      { type: 'heading', text: 'Parallel line angle pairs', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">When a transversal cuts two parallel lines</span>:
  Corresponding angles → equal
  Alternate interior   → equal
  Co-interior          → supplementary (180°)
  Vertically opposite  → equal` },

      { type: 'heading', text: 'Triangles', level: 2 },
      { type: 'image', alt: 'triangle types', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Triangle types by sides</text>
  <polygon points="50,160 130,160 90,60" fill="none" stroke="#7c4dff" stroke-width="2"/>
  <text x="90" y="180" text-anchor="middle" font-family="Nunito" font-size="12">Equilateral</text>
  <text x="90" y="194" text-anchor="middle" font-family="Nunito" font-size="10" fill="#888">all sides = , all 60°</text>
  <polygon points="200,160 290,160 245,60" fill="none" stroke="#1cb0f6" stroke-width="2"/>
  <text x="245" y="180" text-anchor="middle" font-family="Nunito" font-size="12">Isosceles</text>
  <text x="245" y="194" text-anchor="middle" font-family="Nunito" font-size="10" fill="#888">two sides equal</text>
  <polygon points="360,160 480,160 410,60" fill="none" stroke="#58cc02" stroke-width="2"/>
  <text x="420" y="180" text-anchor="middle" font-family="Nunito" font-size="12">Scalene</text>
  <text x="420" y="194" text-anchor="middle" font-family="Nunito" font-size="10" fill="#888">all sides different</text>
</svg>` },

      { type: 'heading', text: 'Key triangle properties', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Angle sum</span>: A + B + C = <span class="num">180°</span>
<span class="kw">Exterior angle</span> = sum of the two non-adjacent interior angles
<span class="kw">Triangle inequality</span>: any side &lt; sum of the other two
<span class="kw">Largest side</span> is opposite the largest angle` },

      { type: 'heading', text: 'Pythagoras theorem', level: 2 },
      { type: 'image', alt: 'pythagoras', svg:
`<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;display:block;margin:0 auto;">
  <rect width="460" height="240" fill="#fafafa" rx="8"/>
  <text x="230" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Right triangle: a² + b² = c²</text>
  <polygon points="100,180 280,180 100,60" fill="none" stroke="#7c4dff" stroke-width="3"/>
  <line x1="100" y1="170" x2="110" y2="170" stroke="#7c4dff" stroke-width="2"/>
  <line x1="110" y1="170" x2="110" y2="180" stroke="#7c4dff" stroke-width="2"/>
  <text x="190" y="200" font-family="Nunito" font-weight="bold" font-size="14">a</text>
  <text x="80" y="125" font-family="Nunito" font-weight="bold" font-size="14">b</text>
  <text x="210" y="115" font-family="Nunito" font-weight="bold" font-size="14">c (hypotenuse)</text>
</svg>` },

      { type: 'heading', text: 'Pythagoras worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Right triangle with legs 6 and 8. Hypotenuse?</span>
c² = <span class="num">6² + 8²</span> = <span class="num">36 + 64</span> = <span class="num">100</span>
c  = <span class="num">10</span>

<span class="com">// Famous triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (20,21,29)</span>` },

      { type: 'heading', text: 'Similar vs congruent', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Similar</span>: same shape, same angles, sides in ratio
  → ratio of areas = (ratio of sides)²

<span class="kw">Congruent</span>: same shape AND size
  Tests: SSS, SAS, ASA, RHS` },

      { type: 'heading', text: 'Quadrilaterals', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Square</strong> — all sides equal, all angles 90°.',
        '<strong>Rectangle</strong> — opposite sides equal, all angles 90°.',
        '<strong>Rhombus</strong> — all sides equal, opposite angles equal.',
        '<strong>Parallelogram</strong> — opposite sides parallel and equal.',
        '<strong>Trapezium</strong> — one pair of parallel sides.',
        '<strong>Kite</strong> — two pairs of adjacent equal sides.'
      ]},

      { type: 'heading', text: 'Circle basics', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Circumference</span> = <span class="num">2πr</span>
<span class="kw">Area</span>          = <span class="num">πr²</span>
<span class="kw">Diameter</span>      = <span class="num">2r</span>
<span class="kw">Angle in semicircle</span> = 90°
<span class="kw">Angle at centre</span> = 2 × angle at circumference (same arc)` },

      { type: 'callout', kind: 'tip', html: 'Remember the standard π approximations: 22/7 (close), 3.1416 (better). Many problems pick numbers that cancel nicely with 22/7.' },
      { type: 'divider' }
    ]},

    /* ============== CH 21: Areas & Perimeters ============== */
    { id: 'apt-c21', title: 'Areas & Perimeters', icon: '🟦', sections: [
      { type: 'heading', text: 'Cheat sheet', level: 1 },
      { type: 'image', alt: 'area shapes', svg:
`<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px;display:block;margin:0 auto;">
  <rect width="620" height="280" fill="#fafafa" rx="8"/>
  <text x="310" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Common shapes</text>
  <rect x="40" y="50" width="80" height="80" fill="#7c4dff" opacity="0.7"/>
  <text x="80" y="148" text-anchor="middle" font-family="Nunito" font-size="12">Square</text>
  <text x="80" y="164" text-anchor="middle" font-family="JetBrains Mono" font-size="10">A = s²</text>
  <rect x="160" y="60" width="120" height="60" fill="#1cb0f6" opacity="0.7"/>
  <text x="220" y="148" text-anchor="middle" font-family="Nunito" font-size="12">Rectangle</text>
  <text x="220" y="164" text-anchor="middle" font-family="JetBrains Mono" font-size="10">A = l × b</text>
  <polygon points="320,130 400,130 360,55" fill="#58cc02" opacity="0.7"/>
  <text x="360" y="148" text-anchor="middle" font-family="Nunito" font-size="12">Triangle</text>
  <text x="360" y="164" text-anchor="middle" font-family="JetBrains Mono" font-size="10">A = ½ b h</text>
  <circle cx="470" cy="90" r="40" fill="#ff9600" opacity="0.7"/>
  <text x="470" y="148" text-anchor="middle" font-family="Nunito" font-size="12">Circle</text>
  <text x="470" y="164" text-anchor="middle" font-family="JetBrains Mono" font-size="10">A = πr²</text>
  <polygon points="40,210 200,210 170,255 70,255" fill="#7c4dff" opacity="0.7"/>
  <text x="120" y="272" text-anchor="middle" font-family="Nunito" font-size="12">Trapezium  A = ½(a+b)h</text>
  <polygon points="260,225 320,200 380,225 320,260" fill="#1cb0f6" opacity="0.7"/>
  <text x="320" y="272" text-anchor="middle" font-family="Nunito" font-size="12">Rhombus  A = ½ d₁d₂</text>
  <polygon points="440,210 520,210 480,260" fill="#58cc02" opacity="0.7"/>
  <text x="480" y="272" text-anchor="middle" font-family="Nunito" font-size="12">Equilateral  A = (√3/4)a²</text>
</svg>` },

      { type: 'heading', text: 'Square and rectangle', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Square</span>     side s
  Perimeter = <span class="num">4s</span>
  Area      = <span class="num">s²</span>
  Diagonal  = <span class="num">s√2</span>

<span class="kw">Rectangle</span> length l, breadth b
  Perimeter = <span class="num">2(l + b)</span>
  Area      = <span class="num">l × b</span>
  Diagonal  = <span class="num">√(l² + b²)</span>` },

      { type: 'heading', text: 'Triangles', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">General</span>   Area = <span class="num">½ × base × height</span>

<span class="kw">Heron's formula</span> (when only sides known)
  s = (a + b + c)/2
  Area = <span class="num">√[s(s − a)(s − b)(s − c)]</span>

<span class="kw">Equilateral</span> side a
  Area = <span class="num">(√3 / 4) × a²</span>
  Height = <span class="num">(√3 / 2) × a</span>` },

      { type: 'heading', text: 'Heron worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Triangle with sides 13, 14, 15.</span>
s = <span class="num">21</span>
Area = <span class="num">√(21 × 8 × 7 × 6)</span>
     = <span class="num">√7056</span>
     = <span class="num">84</span>` },

      { type: 'heading', text: 'Circle', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Circle</span>   radius r
  Circumference = <span class="num">2πr</span>
  Area          = <span class="num">πr²</span>

<span class="kw">Sector</span>   central angle θ°
  Arc length = <span class="num">(θ/360) × 2πr</span>
  Area       = <span class="num">(θ/360) × πr²</span>

<span class="com">// Circle r = 14. Area?</span>
A = <span class="num">22/7 × 14²</span> = <span class="num">22/7 × 196</span> = <span class="num">616</span>` },

      { type: 'heading', text: 'Trapezium and parallelogram', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Parallelogram</span>
  Area = <span class="num">base × height</span>

<span class="kw">Trapezium</span> parallel sides a, b, height h
  Area = <span class="num">½ × (a + b) × h</span>

<span class="kw">Rhombus</span> diagonals d₁, d₂
  Area = <span class="num">½ × d₁ × d₂</span>` },

      { type: 'heading', text: 'Path around rectangle', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Garden 30 × 20 m, a 2m path runs around it (outside). Path area?</span>
Outer = <span class="num">(30 + 4) × (20 + 4)</span> = <span class="num">34 × 24</span> = <span class="num">816</span>
Inner = <span class="num">30 × 20</span> = <span class="num">600</span>
Path  = <span class="num">816 − 600</span> = <span class="num">216 m²</span>` },

      { type: 'callout', kind: 'tip', html: 'If you double every length of a 2D figure, the area quadruples (×4). Triple → ×9. Areas scale as the square of the linear scale.' },
      { type: 'divider' }
    ]},

    /* ============== CH 22: Mensuration 3D ============== */
    { id: 'apt-c22', title: 'Mensuration — 3D', icon: '🧊', sections: [
      { type: 'heading', text: 'Cubes and cuboids', level: 1 },
      { type: 'image', alt: '3D shapes', svg:
`<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:620px;display:block;margin:0 auto;">
  <rect width="620" height="280" fill="#fafafa" rx="8"/>
  <text x="310" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">3D solids</text>
  <g stroke="#444" stroke-width="1.5" fill="none">
    <polygon points="40,160 100,160 100,100 40,100" fill="#7c4dff" opacity="0.4"/>
    <polygon points="100,100 140,80 140,140 100,160" fill="#7c4dff" opacity="0.6"/>
    <polygon points="40,100 80,80 140,80 100,100" fill="#7c4dff" opacity="0.5"/>
    <text x="90" y="195" text-anchor="middle" font-family="Nunito" font-size="11" stroke="none" fill="#333">Cube</text>
    <polygon points="180,170 290,170 290,100 180,100" fill="#1cb0f6" opacity="0.4"/>
    <polygon points="290,100 330,80 330,150 290,170" fill="#1cb0f6" opacity="0.6"/>
    <polygon points="180,100 220,80 330,80 290,100" fill="#1cb0f6" opacity="0.5"/>
    <text x="255" y="195" text-anchor="middle" font-family="Nunito" font-size="11" stroke="none" fill="#333">Cuboid</text>
    <ellipse cx="400" cy="100" rx="30" ry="10" fill="#58cc02" opacity="0.4"/>
    <line x1="370" y1="100" x2="370" y2="170"/>
    <line x1="430" y1="100" x2="430" y2="170"/>
    <ellipse cx="400" cy="170" rx="30" ry="10" fill="#58cc02" opacity="0.6"/>
    <text x="400" y="195" text-anchor="middle" font-family="Nunito" font-size="11" stroke="none" fill="#333">Cylinder</text>
    <ellipse cx="500" cy="170" rx="35" ry="10" fill="#ff9600" opacity="0.4"/>
    <line x1="465" y1="170" x2="500" y2="80"/>
    <line x1="535" y1="170" x2="500" y2="80"/>
    <text x="500" y="195" text-anchor="middle" font-family="Nunito" font-size="11" stroke="none" fill="#333">Cone</text>
    <circle cx="580" cy="240" r="22" fill="#e74c3c" opacity="0.5"/>
    <text x="580" y="270" text-anchor="middle" font-family="Nunito" font-size="11" stroke="none" fill="#333">Sphere</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Cube formulas', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Cube</span>   side a
  Volume = <span class="num">a³</span>
  Total surface area = <span class="num">6a²</span>
  Lateral surface    = <span class="num">4a²</span>
  Diagonal           = <span class="num">a√3</span>

<span class="com">// Cube side 5. Volume and TSA?</span>
V = <span class="num">125</span>, TSA = <span class="num">150</span>` },

      { type: 'heading', text: 'Cuboid formulas', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Cuboid</span>  l × b × h
  Volume = <span class="num">l × b × h</span>
  TSA    = <span class="num">2(lb + bh + hl)</span>
  Lateral = <span class="num">2h(l + b)</span>
  Diagonal = <span class="num">√(l² + b² + h²)</span>

<span class="com">// Cuboid 4 × 3 × 12 cm. Diagonal?</span>
= <span class="num">√(16 + 9 + 144)</span>
= <span class="num">√169</span>
= <span class="num">13 cm</span>` },

      { type: 'heading', text: 'Cylinder', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Cylinder</span>   radius r, height h
  Volume = <span class="num">πr²h</span>
  CSA (curved)  = <span class="num">2πrh</span>
  TSA (closed)  = <span class="num">2πr(r + h)</span>

<span class="com">// r = 7, h = 10. Volume?</span>
V = <span class="num">22/7 × 49 × 10</span> = <span class="num">1540</span>` },

      { type: 'heading', text: 'Cone', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Cone</span>   radius r, height h, slant l = √(r² + h²)
  Volume = <span class="num">(1/3) π r² h</span>
  CSA    = <span class="num">π r l</span>
  TSA    = <span class="num">π r (r + l)</span>

<span class="com">// r = 6, h = 8. l, V, CSA, TSA?</span>
l = <span class="num">√(36 + 64)</span> = <span class="num">10</span>
V = <span class="num">(1/3) × π × 36 × 8</span> = <span class="num">96π</span>
CSA = <span class="num">60π</span>, TSA = <span class="num">96π</span>` },

      { type: 'heading', text: 'Sphere and hemisphere', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Sphere</span>   radius r
  Volume = <span class="num">(4/3) π r³</span>
  Surface area = <span class="num">4 π r²</span>

<span class="kw">Hemisphere</span>
  Volume = <span class="num">(2/3) π r³</span>
  CSA    = <span class="num">2 π r²</span>
  TSA    = <span class="num">3 π r²</span>

<span class="com">// Sphere r = 3. Volume?</span>
V = <span class="num">(4/3) π × 27</span> = <span class="num">36 π</span>` },

      { type: 'heading', text: 'Mixed solid', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A cylinder of r=7, h=10 has a cone of same radius and h=6 carved from top.</span>
<span class="com">// Volume of remaining solid?</span>
V_cyl  = <span class="num">π × 49 × 10</span> = <span class="num">490 π</span>
V_cone = <span class="num">(1/3) π × 49 × 6</span> = <span class="num">98 π</span>
remain = <span class="num">392 π</span>
       ≈ <span class="num">1231.5</span> (with π = 22/7)` },

      { type: 'heading', text: 'Melting and recasting', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Volume is conserved</span> when one solid is melted to form another.

<span class="com">// Cube of side 6 melted into spheres of radius 1. How many?</span>
V_cube = <span class="num">216</span>
V_sphere = <span class="num">(4/3) π</span>
n = <span class="num">216 / [(4/3) π]</span>
  ≈ <span class="num">51.5</span>  →  <span class="num">51 spheres</span> (full ones)` },

      { type: 'heading', text: 'Scaling rule', level: 2 },
      { type: 'callout', kind: 'info', html: 'Double every length: surface areas × 4, volumes × 8. Volumes scale as the <strong>cube</strong> of the linear scale.' },

      { type: 'heading', text: 'Worked example — cone water', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Conical funnel r=9 cm, h=12 cm. Slant?</span>
l = <span class="num">√(81 + 144)</span> = <span class="num">√225</span> = <span class="num">15 cm</span>` },
      { type: 'divider' }
    ]},

    /* ============== CH 23: Number Series Patterns ============== */
    { id: 'apt-c23', title: 'Number Series Patterns', icon: '🔎', sections: [
      { type: 'heading', text: 'Why series?', level: 1 },
      { type: 'para', html: 'Series problems test whether you can recognise the rule generating a sequence. Most exam series fall into a handful of standard families.' },

      { type: 'heading', text: 'Arithmetic-difference series', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 5, 9, 13, 17, ?</span>
differences: 4, 4, 4, …
next = <span class="num">17 + 4</span> = <span class="num">21</span>

<span class="com">// 2, 5, 9, 14, 20, ?</span>
diffs: 3, 4, 5, 6, …
next diff = 7
next = <span class="num">20 + 7</span> = <span class="num">27</span>` },

      { type: 'heading', text: 'Geometric-ratio series', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 3, 6, 12, 24, ?</span>
ratio = 2
next = <span class="num">48</span>

<span class="com">// 5, 15, 45, 135, ?</span>
ratio = 3
next = <span class="num">405</span>` },

      { type: 'heading', text: 'Squares and cubes', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 1, 4, 9, 16, 25, ?  → n²</span>
next = <span class="num">36</span>

<span class="com">// 1, 8, 27, 64, ?  → n³</span>
next = <span class="num">125</span>

<span class="com">// 2, 5, 10, 17, 26, ?  → n² + 1</span>
next = <span class="num">37</span>` },

      { type: 'heading', text: 'Alternating series', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 2, 11, 4, 13, 6, 15, ?, ?</span>
odd positions: 2, 4, 6, 8 (+2)
even positions: 11, 13, 15, 17 (+2)
next two = <span class="num">8, 17</span>` },

      { type: 'heading', text: 'Mixed operation series', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 1, 2, 6, 24, 120, ?  → multiply by 2, 3, 4, 5, 6</span>
next = <span class="num">120 × 6</span> = <span class="num">720</span>
<span class="com">// This is n! actually</span>

<span class="com">// 4, 7, 13, 25, 49, ?  → each = 2·prev − 1</span>
next = <span class="num">2 × 49 − 1</span> = <span class="num">97</span>` },

      { type: 'heading', text: 'Wrong-term spotting', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 4, 9, 19, 39, 80, 161, 323. Which is wrong?</span>
rule: each ≈ 2·prev + 1
4 → 9, 9 → 19, 19 → 39, 39 → 79 (not 80!), 79 → 159, 159 → 319
<span class="kw">80</span> breaks the rule.` },

      { type: 'heading', text: 'Letter / position series', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 1, 4, 9, 16, ?</span>
positions of squares.

<span class="com">// 121, 100, 81, 64, ? → going down by squares</span>
= <span class="num">11², 10², 9², 8², 7²</span>
next = <span class="num">49</span>` },

      { type: 'callout', kind: 'tip', html: 'Always compute first differences. If those are constant — arithmetic. If they double or grow geometrically — multiplicative. If second differences are constant — quadratic (think n²).' },
      { type: 'divider' }
    ]},

    /* ============== CH 24: Clocks ============== */
    { id: 'apt-c24', title: 'Clocks', icon: '🕰️', sections: [
      { type: 'heading', text: 'Clock basics', level: 1 },
      { type: 'image', alt: 'clock face', svg:
`<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:280px;display:block;margin:0 auto;">
  <rect width="280" height="280" fill="#fafafa" rx="8"/>
  <circle cx="140" cy="140" r="100" fill="white" stroke="#444" stroke-width="3"/>
  <g font-family="Nunito" font-weight="bold" font-size="14" text-anchor="middle">
    <text x="140" y="55">12</text>
    <text x="220" y="145">3</text>
    <text x="140" y="232">6</text>
    <text x="60" y="145">9</text>
  </g>
  <line x1="140" y1="140" x2="140" y2="75" stroke="#7c4dff" stroke-width="5" stroke-linecap="round"/>
  <line x1="140" y1="140" x2="200" y2="140" stroke="#1cb0f6" stroke-width="3" stroke-linecap="round"/>
  <circle cx="140" cy="140" r="5" fill="#444"/>
</svg>` },
      { type: 'list', kind: 'check', items: [
        'Full face = 360°, divided into 12 hours → each hour mark = 30°.',
        'Minute hand makes a full circle in 60 min, i.e. <strong>6° per minute</strong>.',
        'Hour hand makes a full circle in 12 h = 720 min, i.e. <strong>0.5° per minute</strong>.',
        'Relative speed of minute over hour = <strong>5.5° per minute</strong>.'
      ]},

      { type: 'heading', text: 'Angle between hands', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Angle at H:M</span> = <span class="num">|30 H − 5.5 M|</span>
  (take 360° − value if &gt; 180°)

<span class="com">// Angle at 3:25?</span>
= <span class="num">|30·3 − 5.5·25|</span>
= <span class="num">|90 − 137.5|</span>
= <span class="num">47.5°</span>

<span class="com">// Angle at 4:50?</span>
= <span class="num">|30·4 − 5.5·50|</span>
= <span class="num">|120 − 275|</span>
= <span class="num">155°</span>` },

      { type: 'heading', text: 'When are hands together?', level: 2 },
      { type: 'code', lang: 'math', code:
`Two hands coincide when angle = 0°.
<span class="num">30 H − 5.5 M</span> = <span class="num">0</span>
M = <span class="num">(60/11) × H</span>

<span class="com">// Between 4 and 5 o'clock they meet at?</span>
M = <span class="num">240/11</span> ≈ <span class="num">21.818 min</span>
i.e. about <span class="num">4:21:49</span>` },

      { type: 'heading', text: 'When at right angle?', level: 2 },
      { type: 'code', lang: 'math', code:
`Angle = 90°:
  <span class="num">30 H − 5.5 M</span> = <span class="num">±90</span>

<span class="com">// Hands at right angle between 3 and 4?</span>
case 1: <span class="num">90 − 5.5M</span> = <span class="num">90</span>  →  M = <span class="num">0</span>  →  3:00 exactly ✓
case 2: <span class="num">90 − 5.5M</span> = <span class="num">−90</span> →  5.5M = <span class="num">180</span>  →  M = <span class="num">32 8/11</span>` },

      { type: 'heading', text: 'When in straight line (180°)?', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="num">30 H − 5.5 M</span> = <span class="num">±180</span>

<span class="com">// They form a straight line 22 times in 12 hours</span>
<span class="com">// (11 times coincident + 11 times opposite, but at 6 o'clock both count once)</span>` },

      { type: 'heading', text: 'Faulty / fast or slow clock', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// A clock gains 5 min every hour. After 24 hrs of real time?</span>
gain per hour = 5 min
gain in 24 h  = <span class="num">120</span> min = <span class="num">2 h</span>
faulty clock shows <span class="num">26 h</span> in 24 real h.` },

      { type: 'heading', text: 'Frequency facts', level: 2 },
      { type: 'callout', kind: 'info', html: 'In 12 hours: hands coincide <strong>11 times</strong>, are at 90° <strong>22 times</strong>, are 180° apart <strong>11 times</strong>. (Not 12 — because between 11 and 1 there\'s only one such event.)' },
      { type: 'divider' }
    ]},

    /* ============== CH 25: Calendars ============== */
    { id: 'apt-c25', title: 'Calendars', icon: '📅', sections: [
      { type: 'heading', text: 'Days of the week & odd days', level: 1 },
      { type: 'para', html: 'A normal year has 365 days = 52 weeks + 1 day. That extra day is called an <strong>odd day</strong>. A leap year has 366 days → 2 odd days.' },

      { type: 'heading', text: 'Leap year rule', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">A year is a leap year if</span>:
  divisible by 4
  BUT centuries (1700, 1800, 1900) NOT leap
  UNLESS divisible by 400 (2000 leap, 1900 not)

<span class="com">// 1600 ✓ (÷400)  2000 ✓ (÷400)
// 1900 ✗ (century, ÷100 but not 400)
// 2024 ✓ (÷4, not century)</span>` },

      { type: 'heading', text: 'Odd days table', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Per period</span>                <span class="kw">Odd days</span>
1 ordinary year             <span class="num">1</span>
1 leap year                 <span class="num">2</span>
100 years                   <span class="num">5</span>   (76 ord + 24 leap; 24 century but only 1 of 4 is leap)
200 years                   <span class="num">3</span>
300 years                   <span class="num">1</span>
400 years                   <span class="num">0</span>

<span class="com">// Day mapping</span>
0 = Sunday, 1 = Mon, 2 = Tue, …, 6 = Sat` },

      { type: 'heading', text: 'Worked example — day of date', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// What day was 15 August 1947?</span>

Odd days up to 31 Dec 1600 = <span class="num">0</span>
Years 1601 to 1900 (300 yrs) = <span class="num">1</span>
Years 1901 to 1946 = 46 years.
  Leap years (÷4): 1904, 1908, …, 1944 → <span class="num">12</span>
  Ordinary years = <span class="num">34</span>
  Odd days = <span class="num">12×2 + 34×1</span> = <span class="num">58</span>
  58 mod 7 = <span class="num">2</span>

Days in 1947 up to 15 Aug:
  Jan=31, Feb=28, Mar=31, Apr=30, May=31, Jun=30, Jul=31, Aug=15
  = <span class="num">227</span>  →  227 mod 7 = <span class="num">3</span>

Total odd days = <span class="num">0 + 1 + 2 + 3</span> = <span class="num">6</span>
6 → <span class="kw">Friday</span>` },

      { type: 'heading', text: 'Same date, next year', level: 2 },
      { type: 'code', lang: 'math', code:
`A date in the next year shifts by:
  1 day  (if neither year nor target year has Feb 29 in between)
  2 days (if Feb 29 in between)

<span class="com">// 15 Jan 2023 was Sunday. 15 Jan 2024?</span>
2023 ordinary → +1 day → <span class="kw">Monday</span>

<span class="com">// 15 Jan 2024 → 15 Jan 2025?</span>
2024 leap; Feb 29 falls between → +2 → <span class="kw">Wednesday</span>` },

      { type: 'heading', text: 'Repeat calendars', level: 2 },
      { type: 'code', lang: 'math', code:
`A non-leap year's calendar repeats after <span class="num">6, 11, or some</span> years.
A leap year's calendar repeats after <span class="num">28</span> years (usually).

<span class="com">// 2017's calendar = 2023's?  (same starting day Sunday, both ordinary)</span>` },

      { type: 'heading', text: 'Quick weekday shortcut', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// Each common year, weekday shifts by 1; each leap year by 2.</span>
<span class="com">// If 1 Jan 2020 was Wednesday, 1 Jan 2021?</span>
2020 was a leap year → +2 → <span class="kw">Friday</span>` },

      { type: 'heading', text: 'Anchor day for centuries', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// 1 Jan 1901 → ?</span>
After 1900 years there are 1 odd day. So 1 Jan 1901 = (1 + 1) odd days from a reference Sunday → Tuesday.` },

      { type: 'callout', kind: 'info', html: 'The Gregorian calendar repeats exactly every 400 years (146,097 days = 20871 weeks). So any date 400 years apart is the same weekday.' },
      { type: 'divider' }
    ]},

    /* ============== CH 26: Shortcuts & Tricks ============== */
    { id: 'apt-c26', title: 'Shortcuts & Tricks', icon: '⚡', sections: [
      { type: 'heading', text: 'Square of a number ending in 5', level: 1 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Trick</span>: for N5, square is (N × (N+1)) followed by 25.

<span class="com">// 25² → 2·3 = 6, append 25 → 625</span>
<span class="com">// 35² → 3·4 = 12, append 25 → 1225</span>
<span class="com">// 75² → 7·8 = 56, append 25 → 5625</span>
<span class="com">// 105² → 10·11 = 110, append 25 → 11025</span>` },

      { type: 'heading', text: 'Multiply two 2-digit numbers near 100', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">Vedic method</span> (a, b both close to 100):
  steps:
    1. find deficits d_a = 100 − a, d_b = 100 − b
    2. left part = a − d_b  (or equivalently b − d_a)
    3. right part = d_a × d_b
    4. answer = left|right  (right padded to 2 digits)

<span class="com">// 97 × 96</span>
d_a = 3, d_b = 4
left = 97 − 4 = <span class="num">93</span>
right = 3 × 4 = <span class="num">12</span>
answer = <span class="num">9312</span>` },

      { type: 'heading', text: 'Multiplying by 11', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">For 2-digit ab × 11</span>:
  answer = a | (a+b) | b  (carry if a+b ≥ 10)

<span class="com">// 35 × 11 → 3 | 8 | 5 → 385</span>
<span class="com">// 76 × 11 → 7 | 13 | 6 → 836 (carry the 1)</span>
<span class="com">// 124 × 11 → 1 | (1+2) | (2+4) | 4 → 1364</span>` },

      { type: 'heading', text: 'Multiplication by 5, 25, 125', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">× 5</span>   → × 10 ÷ 2     <span class="com">// 86 × 5 = 860/2 = 430</span>
<span class="kw">× 25</span>  → × 100 ÷ 4    <span class="com">// 84 × 25 = 8400/4 = 2100</span>
<span class="kw">× 125</span> → × 1000 ÷ 8   <span class="com">// 48 × 125 = 48000/8 = 6000</span>` },

      { type: 'heading', text: 'Squares of nearby base numbers', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="kw">N² = (N+a)(N−a) + a²</span>

<span class="com">// 98² = 100 × 96 + 4 = 9604</span>
<span class="com">// 103² = 100 × 106 + 9 = 10609</span>
<span class="com">// 47² = 50 × 44 + 9 = 2209</span>` },

      { type: 'heading', text: 'Quick % shortcuts', level: 2 },
      { type: 'code', lang: 'math', code:
`<span class="com">// X% of Y = Y% of X</span>
   18% of 50 = 50% of 18 = <span class="num">9</span>
   16% of 25 = 25% of 16 = <span class="num">4</span>

<span class="com">// 10% then minor moves</span>
   17% of 240 = (10% + 5% + 2%)
              = 24 + 12 + 4.8
              = <span class="num">40.8</span>` },

      { type: 'callout', kind: 'tip', html: 'On exam day, the goal isn\'t the slickest method — it\'s the method you can do confidently under pressure. Pick one trick per family and drill it.' },
      { type: 'divider' }
    ]}

  ]
});

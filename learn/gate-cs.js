LEARN('gate-cs', {
  intro: 'A complete GATE Computer Science companion — all 10 subjects, exam-focused formulas, worked examples, visualizations, and "GATE trick" callouts.',
  chapters: [

    /* ============================================================
       SUBJECT 1: ENGINEERING MATHEMATICS
       ============================================================ */

    /* ============== CH 1: Discrete Math — Sets & Relations ============== */
    { id: 'gcs-c1', title: 'Discrete Math — Sets & Relations', icon: '🔢', sections: [
      { type: 'heading', text: 'Sets — the foundation', level: 1 },
      { type: 'para', html: 'A <strong>set</strong> is an unordered collection of distinct elements. We write <code>A = {1, 2, 3}</code>. Sets are the bedrock of every CS topic — from databases (relational algebra) to compilers (FIRST/FOLLOW sets) to TOC (regular languages).' },
      { type: 'callout', kind: 'info', html: 'Cardinality <code>|A|</code> = number of elements. Power set <code>P(A)</code> has <code>2<sup>|A|</sup></code> elements.' },
      { type: 'heading', text: 'Common set operations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>A ∪ B</code> — union (elements in A or B)',
        '<code>A ∩ B</code> — intersection (in both)',
        '<code>A − B</code> — difference (in A, not in B)',
        '<code>A △ B</code> — symmetric difference (in exactly one)',
        '<code>A × B</code> — Cartesian product, <code>|A×B| = |A|·|B|</code>'
      ]},
      { type: 'heading', text: 'Inclusion–exclusion (key GATE formula)', level: 2 },
      { type: 'code', lang: 'math', code:
`|A ∪ B| = |A| + |B| − |A ∩ B|
|A ∪ B ∪ C| = |A| + |B| + |C|
              − |A∩B| − |B∩C| − |A∩C|
              + |A∩B∩C|` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> "Number of students who like at least one of …" → inclusion–exclusion. "Exactly two" = sum of pairwise minus 3× triple intersection.' },
      { type: 'heading', text: 'Relations', level: 1 },
      { type: 'para', html: 'A <strong>relation</strong> R from A to B is a subset of A × B. If A = B we call R a relation on A. With |A| = n there are <code>2<sup>n²</sup></code> possible relations on A.' },
      { type: 'list', kind: 'check', items: [
        '<strong>Reflexive</strong>: ∀a, (a,a) ∈ R',
        '<strong>Symmetric</strong>: (a,b) ∈ R ⇒ (b,a) ∈ R',
        '<strong>Antisymmetric</strong>: (a,b) and (b,a) ∈ R ⇒ a = b',
        '<strong>Transitive</strong>: (a,b), (b,c) ∈ R ⇒ (a,c) ∈ R'
      ]},
      { type: 'heading', text: 'Equivalence vs partial order', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Equivalence</strong> = reflexive + symmetric + transitive → partitions the set into equivalence classes.',
        '<strong>Partial order (POSET)</strong> = reflexive + antisymmetric + transitive.',
        '<strong>Total order</strong> = partial order where every pair is comparable.'
      ]},
      { type: 'heading', text: 'Functions', level: 1 },
      { type: 'para', html: 'A function f : A → B assigns each a ∈ A to exactly one b ∈ B. Counts (when |A|=m, |B|=n):' },
      { type: 'code', lang: 'math', code:
`Total functions A→B :  n^m
Injective (1-1)    :   n·(n−1)·…·(n−m+1)   [needs m ≤ n]
Surjective (onto)  :   Σ (−1)^k · C(n,k) · (n−k)^m   k=0..n
Bijective (m = n)  :   n!` },
      { type: 'heading', text: 'Lattices & Hasse diagrams', level: 1 },
      { type: 'para', html: 'A <strong>lattice</strong> is a POSET in which every pair has a unique LUB (join, ∨) and GLB (meet, ∧). The <strong>Hasse diagram</strong> draws the cover relation only — no self-loops, no transitive edges.' },
      { type: 'image', alt: 'Hasse diagram of divisors of 12', svg:
`<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="280" fill="#fafafa" rx="8"/>
  <text x="180" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Hasse: divisors of 12 under |</text>
  <g stroke="#666" stroke-width="2">
    <line x1="180" y1="60" x2="120" y2="120"/>
    <line x1="180" y1="60" x2="240" y2="120"/>
    <line x1="120" y1="120" x2="80"  y2="180"/>
    <line x1="120" y1="120" x2="180" y2="180"/>
    <line x1="240" y1="120" x2="180" y2="180"/>
    <line x1="80"  y1="180" x2="180" y2="240"/>
    <line x1="180" y1="180" x2="180" y2="240"/>
  </g>
  <g font-family="JetBrains Mono" font-size="12">
    <circle cx="180" cy="60"  r="18" fill="#7c4dff"/><text x="180" y="64" text-anchor="middle" fill="white">12</text>
    <circle cx="120" cy="120" r="16" fill="#1cb0f6"/><text x="120" y="124" text-anchor="middle" fill="white">4</text>
    <circle cx="240" cy="120" r="16" fill="#1cb0f6"/><text x="240" y="124" text-anchor="middle" fill="white">6</text>
    <circle cx="80"  cy="180" r="14" fill="#58cc02"/><text x="80"  y="184" text-anchor="middle" fill="white">2</text>
    <circle cx="180" cy="180" r="14" fill="#58cc02"/><text x="180" y="184" text-anchor="middle" fill="white">3</text>
    <circle cx="180" cy="240" r="14" fill="#ff9600"/><text x="180" y="244" text-anchor="middle" fill="white">1</text>
  </g>
</svg>` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Divisor lattice of n forms a Boolean lattice iff n is square-free (product of distinct primes).' },
      { type: 'heading', text: 'Groups (just enough)', level: 2 },
      { type: 'para', html: 'A group (G, *) satisfies closure, associativity, identity, and inverses. Order |G| = number of elements. Lagrange: the order of a subgroup divides the order of the group.' },
      { type: 'heading', text: 'Practice walkthrough', level: 2 },
      { type: 'para', html: 'Q: How many reflexive, symmetric relations are possible on a set of n elements?' },
      { type: 'code', lang: 'math', code:
`Reflexive ⇒ n diagonal pairs forced.
Symmetric ⇒ pairs (i,j) and (j,i) decided together.
Off-diagonal pairs: n(n−1)/2 independent choices.
Answer: 2^(n(n−1)/2)` }
    ]},

    /* ============== CH 2: Linear Algebra ============== */
    { id: 'gcs-c2', title: 'Linear Algebra', icon: '📐', sections: [
      { type: 'heading', text: 'Matrices — the language of computation', level: 1 },
      { type: 'para', html: 'A matrix is a rectangular array of numbers. A <code>m × n</code> matrix has m rows and n columns. Matrices represent linear transformations, systems of equations, graphs, images, neural-net layers — everything.' },
      { type: 'heading', text: 'Matrix multiplication rules', level: 2 },
      { type: 'list', kind: 'check', items: [
        'A is m×n, B is n×p ⇒ AB is m×p (inner dims must match)',
        '<code>(AB)C = A(BC)</code> — associative',
        '<code>AB ≠ BA</code> in general — NOT commutative',
        '<code>(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup></code> — reverse order on transpose',
        'Cost of multiplying m×n by n×p is O(mnp) scalar mults'
      ]},
      { type: 'heading', text: 'Determinant', level: 1 },
      { type: 'code', lang: 'math', code:
`det([a b]) = ad − bc
   ([c d])

3×3:  expand along any row/column
det(AB) = det(A)·det(B)
det(A^T) = det(A)
det(A^{-1}) = 1/det(A)
det(kA) = k^n · det(A)   for n×n A` },
      { type: 'callout', kind: 'warn', html: 'A is invertible <em>iff</em> <code>det(A) ≠ 0</code> <em>iff</em> rank(A) = n <em>iff</em> 0 is NOT an eigenvalue.' },
      { type: 'heading', text: 'Rank', level: 1 },
      { type: 'para', html: '<strong>Rank</strong> = number of linearly independent rows (= columns). Compute via row-reduction; rank = number of non-zero rows in echelon form.' },
      { type: 'list', kind: 'bullet', items: [
        '<code>rank(A) ≤ min(m, n)</code>',
        '<code>rank(AB) ≤ min(rank A, rank B)</code>',
        '<code>rank(A) + nullity(A) = n</code> (rank-nullity theorem)'
      ]},
      { type: 'heading', text: 'Systems Ax = b', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Unique solution: rank(A) = rank([A|b]) = n',
        'Infinite solutions: rank(A) = rank([A|b]) < n',
        'No solution: rank(A) < rank([A|b])'
      ]},
      { type: 'heading', text: 'Eigenvalues & eigenvectors', level: 1 },
      { type: 'code', lang: 'math', code:
`Av = λv  with v ≠ 0

Characteristic equation:  det(A − λI) = 0
Trace = sum of eigenvalues = Σ a_ii
det  = product of eigenvalues
Eigenvalues of A^k  : λ^k
Eigenvalues of A^{-1}: 1/λ
Eigenvalues of A + cI: λ + c` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Triangular matrix → eigenvalues are the diagonal entries. Idempotent A² = A → eigenvalues are 0 or 1. Nilpotent A^k = 0 → all eigenvalues 0.' },
      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`A = [[4, 1],
     [2, 3]]
det(A − λI) = (4−λ)(3−λ) − 2 = λ² − 7λ + 10 = 0
λ = 2, 5
For λ=5: (A−5I)v = 0 → v = (1, 1)
For λ=2: v = (1, −2)` },
      { type: 'heading', text: 'SVD intuition', level: 1 },
      { type: 'para', html: 'Every matrix A factors as <code>A = UΣV<sup>T</sup></code> where U, V are orthogonal and Σ is diagonal with non-negative <strong>singular values</strong> σ₁ ≥ σ₂ ≥ … ≥ 0. Rank = number of non-zero σᵢ. Largest σ measures the "stretch" of the transformation. Used in PCA, compression, pseudo-inverse.' },
      { type: 'heading', text: 'Special matrices', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Symmetric</strong> A = A<sup>T</sup> → real eigenvalues, orthogonal eigenvectors',
        '<strong>Orthogonal</strong> Q<sup>T</sup>Q = I → preserves length',
        '<strong>Positive definite</strong> x<sup>T</sup>Ax > 0 for x≠0 → all eigenvalues > 0',
        '<strong>Diagonalisable</strong> A = PDP<sup>−1</sup> ⇔ has n independent eigenvectors'
      ]}
    ]},

    /* ============== CH 3: Calculus ============== */
    { id: 'gcs-c3', title: 'Calculus', icon: '∫', sections: [
      { type: 'heading', text: 'Limits & continuity', level: 1 },
      { type: 'para', html: 'A function f is <strong>continuous</strong> at a if <code>lim<sub>x→a</sub> f(x) = f(a)</code>. Limits drive both derivatives (instantaneous rate) and integrals (accumulated total).' },
      { type: 'heading', text: 'L\'Hôpital\'s rule', level: 2 },
      { type: 'code', lang: 'math', code:
`If lim f(x)/g(x) is 0/0 or ∞/∞:
lim f(x)/g(x) = lim f'(x)/g'(x)

Example:  lim x→0  sin(x)/x  =  lim cos(x)/1 = 1` },
      { type: 'heading', text: 'Derivatives — cheat sheet', level: 1 },
      { type: 'code', lang: 'math', code:
`d/dx[x^n]   = n·x^{n−1}
d/dx[e^x]   = e^x
d/dx[ln x]  = 1/x
d/dx[sin x] = cos x
d/dx[cos x] = −sin x

Product:  (uv)' = u'v + uv'
Quotient: (u/v)' = (u'v − uv')/v²
Chain:    (f(g))' = f'(g)·g'` },
      { type: 'heading', text: 'Maxima & minima', level: 1 },
      { type: 'list', kind: 'check', items: [
        'Critical points: f\'(x) = 0 (or undefined)',
        'Second-derivative test: f"(x) > 0 → min, f"(x) < 0 → max',
        'For functions of two variables: gradient = 0; Hessian determinant tells the shape'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> On a closed interval, also check the endpoints — the absolute max/min can be there even if f\' ≠ 0.' },
      { type: 'heading', text: 'Try gradient descent', level: 2 },
      { type: 'para', html: 'Gradient descent walks downhill: <code>x ← x − η·f\'(x)</code>. It is the workhorse of ML and a recurring exam favourite when comparing optimisation strategies.' },
      { type: 'widget', name: 'gradient-descent', props: {} },
      { type: 'heading', text: 'Integrals', level: 1 },
      { type: 'code', lang: 'math', code:
`∫ x^n dx   = x^{n+1}/(n+1) + C   (n ≠ −1)
∫ 1/x dx   = ln|x| + C
∫ e^x dx   = e^x + C
∫ sin x dx = −cos x + C
∫ cos x dx = sin x + C

Definite:  ∫_a^b f(x) dx = F(b) − F(a)` },
      { type: 'heading', text: 'Series & convergence', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Geometric Σ ar^n converges iff |r| < 1, sum = a/(1−r)',
        'p-series Σ 1/n^p converges iff p > 1',
        'Taylor: f(x) ≈ Σ f<sup>(k)</sup>(a)(x−a)<sup>k</sup>/k!'
      ]},
      { type: 'heading', text: 'Multivariable basics', level: 2 },
      { type: 'para', html: 'For f(x,y), the gradient ∇f = (∂f/∂x, ∂f/∂y) points in the direction of steepest ascent. The directional derivative along unit vector u is <code>∇f · u</code>.' }
    ]},

    /* ============== CH 4: Probability & Statistics ============== */
    { id: 'gcs-c4', title: 'Probability & Statistics', icon: '🎲', sections: [
      { type: 'heading', text: 'Axioms of probability', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<code>0 ≤ P(A) ≤ 1</code>',
        '<code>P(Ω) = 1</code> (sample space sums to 1)',
        '<code>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</code>',
        '<code>P(Aᶜ) = 1 − P(A)</code>'
      ]},
      { type: 'heading', text: 'Conditional probability', level: 1 },
      { type: 'code', lang: 'math', code:
`P(A|B) = P(A ∩ B) / P(B)
Independent ⇔  P(A ∩ B) = P(A)·P(B)
              ⇔  P(A|B) = P(A)` },
      { type: 'heading', text: 'Bayes\' theorem', level: 1 },
      { type: 'code', lang: 'math', code:
`P(A|B) = P(B|A)·P(A) / P(B)

P(B) = Σ P(B|Aᵢ) P(Aᵢ)   (law of total prob)` },
      { type: 'callout', kind: 'info', html: '<strong>Classic GATE problem:</strong> 1% of population has disease, test is 99% accurate. P(disease | positive) ≈ 50%, not 99%. Always apply Bayes!' },
      { type: 'heading', text: 'Random variables', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Discrete</strong>: PMF P(X = x), Σ P = 1',
        '<strong>Continuous</strong>: PDF f(x), ∫ f = 1',
        '<strong>CDF</strong> F(x) = P(X ≤ x), non-decreasing'
      ]},
      { type: 'heading', text: 'Expectation & variance', level: 2 },
      { type: 'code', lang: 'math', code:
`E[X] = Σ x·P(X=x)   (or ∫ x f(x) dx)
Var(X) = E[X²] − E[X]²
SD(X) = √Var(X)

Linearity: E[aX + bY] = aE[X] + bE[Y]   (always)
Var(aX + b) = a²·Var(X)
Var(X + Y) = Var X + Var Y   (iff independent)` },
      { type: 'heading', text: 'Common distributions', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Bernoulli(p)</strong>: 1 trial, E = p, Var = p(1−p)',
        '<strong>Binomial(n,p)</strong>: n trials, E = np, Var = np(1−p)',
        '<strong>Geometric(p)</strong>: trials until first success, E = 1/p',
        '<strong>Poisson(λ)</strong>: rare events, E = Var = λ',
        '<strong>Uniform(a,b)</strong>: E = (a+b)/2, Var = (b−a)²/12',
        '<strong>Normal(μ,σ²)</strong>: bell curve, 68-95-99.7 rule',
        '<strong>Exponential(λ)</strong>: waiting time, E = 1/λ, memoryless'
      ]},
      { type: 'heading', text: 'Worked example — Bayes', level: 2 },
      { type: 'code', lang: 'math', code:
`Spam = 30% of mail, 80% contain "buy"
Ham  = 70% of mail, 5%  contain "buy"
Mail contains "buy". P(spam)?

P(spam|buy) = (0.80·0.30) / (0.80·0.30 + 0.05·0.70)
            = 0.24 / 0.275  ≈  0.873` },
      { type: 'heading', text: 'Chebyshev & CLT', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Chebyshev</strong>: P(|X − μ| ≥ kσ) ≤ 1/k²',
        '<strong>Markov</strong>: P(X ≥ a) ≤ E[X]/a  (for X ≥ 0)',
        '<strong>Central Limit Theorem</strong>: sum of n iid → Normal as n → ∞'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> "Memoryless" property holds only for geometric and exponential distributions: P(X > s+t | X > s) = P(X > t).' }
    ]},

    /* ============================================================
       SUBJECT 2: DIGITAL LOGIC
       ============================================================ */

    /* ============== CH 5: Number Systems & Boolean Algebra ============== */
    { id: 'gcs-c5', title: 'Number Systems & Boolean Algebra', icon: '01', sections: [
      { type: 'heading', text: 'Bases & conversions', level: 1 },
      { type: 'para', html: 'Computers work in binary (base 2). We humans use decimal (base 10). Hex (base 16) and octal (base 8) are compact shorthands for binary because 16 and 8 are powers of 2.' },
      { type: 'widget', name: 'binary-converter', props: {} },
      { type: 'heading', text: 'Conversion rules', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Decimal → Binary: repeated division by 2, read remainders bottom-up',
        'Binary → Decimal: sum of <code>bᵢ · 2<sup>i</sup></code>',
        'Binary → Hex: group 4 bits from the right',
        'Hex → Binary: replace each digit by 4 bits'
      ]},
      { type: 'heading', text: 'Signed representations', level: 1 },
      { type: 'code', lang: 'math', code:
`Sign-magnitude   : MSB = sign, rest = magnitude
1's complement   : flip all bits to negate
2's complement   : flip all bits and add 1   ← used everywhere

Range of n-bit 2's complement:  −2^{n−1}  to  2^{n−1} − 1` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Overflow in 2\'s complement → adding two positives gives a negative, or two negatives gives a positive. Detect by comparing sign of operands vs sign of result.' },
      { type: 'heading', text: 'IEEE 754 floating point', level: 2 },
      { type: 'code', lang: 'math', code:
`Single precision (32-bit):
[ sign : 1 ][ exponent : 8 (bias 127) ][ mantissa : 23 ]
Value = (−1)^s · 1.M · 2^{E−127}

Double precision: 1 + 11 + 52 bits, bias = 1023` },
      { type: 'heading', text: 'Boolean algebra basics', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        'AND <code>·</code>, OR <code>+</code>, NOT <code>\'</code>',
        '<strong>Commutative</strong>: A+B = B+A',
        '<strong>Distributive</strong>: A(B+C) = AB + AC',
        '<strong>Absorption</strong>: A + AB = A',
        '<strong>De Morgan</strong>: (AB)\' = A\' + B\',  (A+B)\' = A\'·B\''
      ]},
      { type: 'heading', text: 'Truth tables', level: 2 },
      { type: 'widget', name: 'truth-table', props: {} },
      { type: 'heading', text: 'Canonical forms', level: 1 },
      { type: 'para', html: '<strong>SOP</strong> (sum of products) — sum of minterms where f = 1. <strong>POS</strong> (product of sums) — product of maxterms where f = 0. Any boolean function has a unique canonical form.' },
      { type: 'heading', text: 'Karnaugh maps', level: 1 },
      { type: 'para', html: 'A K-map is a visual minimisation method. Cells differ from neighbours by exactly one variable. Group adjacent 1s in powers of 2 (1, 2, 4, 8 …) — bigger groups = fewer literals.' },
      { type: 'image', alt: '4-variable K-map layout', svg:
`<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;margin:0 auto;">
  <rect width="380" height="220" fill="#fafafa" rx="8"/>
  <text x="190" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">4-var K-map: AB \\ CD</text>
  <g font-family="JetBrains Mono" font-size="11" stroke="#333" fill="none">
    <rect x="80"  y="50" width="60" height="40"/>
    <rect x="140" y="50" width="60" height="40"/>
    <rect x="200" y="50" width="60" height="40"/>
    <rect x="260" y="50" width="60" height="40"/>
    <rect x="80"  y="90" width="60" height="40"/>
    <rect x="140" y="90" width="60" height="40"/>
    <rect x="200" y="90" width="60" height="40"/>
    <rect x="260" y="90" width="60" height="40"/>
    <rect x="80"  y="130" width="60" height="40"/>
    <rect x="140" y="130" width="60" height="40"/>
    <rect x="200" y="130" width="60" height="40"/>
    <rect x="260" y="130" width="60" height="40"/>
    <rect x="80"  y="170" width="60" height="40"/>
    <rect x="140" y="170" width="60" height="40"/>
    <rect x="200" y="170" width="60" height="40"/>
    <rect x="260" y="170" width="60" height="40"/>
  </g>
  <g font-family="JetBrains Mono" font-size="10" fill="#666">
    <text x="110" y="45" text-anchor="middle">00</text>
    <text x="170" y="45" text-anchor="middle">01</text>
    <text x="230" y="45" text-anchor="middle">11</text>
    <text x="290" y="45" text-anchor="middle">10</text>
    <text x="70" y="74" text-anchor="end">00</text>
    <text x="70" y="114" text-anchor="end">01</text>
    <text x="70" y="154" text-anchor="end">11</text>
    <text x="70" y="194" text-anchor="end">10</text>
  </g>
</svg>` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Always wrap around — the top edge connects to the bottom, and the left edge connects to the right. Don\'t miss the corner group of 4.' },
      { type: 'heading', text: 'Universal gates', level: 2 },
      { type: 'para', html: 'NAND and NOR are <strong>universal</strong> — any boolean function can be built from just NANDs (or just NORs). NOT(A) = NAND(A,A). AND(A,B) = NAND(NAND(A,B), NAND(A,B)).' },
      { type: 'heading', text: 'Don\'t-care terms', level: 2 },
      { type: 'para', html: 'Marked with <code>X</code> or <code>d</code> in a K-map. Treat as 1 or 0 — whichever gives the largest group — to maximise simplification.' }
    ]},

    /* ============== CH 6: Combinational Circuits ============== */
    { id: 'gcs-c6', title: 'Combinational Circuits', icon: '⚡', sections: [
      { type: 'heading', text: 'What is combinational?', level: 1 },
      { type: 'para', html: 'A <strong>combinational</strong> circuit has no memory — output is purely a function of current inputs. Contrast with <em>sequential</em> circuits that depend on past inputs (via flip-flops).' },
      { type: 'heading', text: 'Half adder', level: 1 },
      { type: 'code', lang: 'math', code:
`Inputs: A, B
Sum    = A ⊕ B
Carry  = A · B` },
      { type: 'image', alt: 'half adder', svg:
`<svg viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;">
  <rect width="360" height="160" fill="#fafafa" rx="8"/>
  <text x="180" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">Half adder</text>
  <line x1="20" y1="55" x2="120" y2="55" stroke="#333" stroke-width="2"/>
  <line x1="20" y1="105" x2="120" y2="105" stroke="#333" stroke-width="2"/>
  <text x="10" y="58" font-family="JetBrains Mono" font-size="12">A</text>
  <text x="10" y="108" font-family="JetBrains Mono" font-size="12">B</text>
  <rect x="120" y="40" width="80" height="35" fill="#7c4dff" rx="6"/>
  <text x="160" y="62" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">XOR</text>
  <rect x="120" y="90" width="80" height="35" fill="#1cb0f6" rx="6"/>
  <text x="160" y="112" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">AND</text>
  <line x1="200" y1="57" x2="330" y2="57" stroke="#333" stroke-width="2"/>
  <line x1="200" y1="107" x2="330" y2="107" stroke="#333" stroke-width="2"/>
  <text x="340" y="60" font-family="JetBrains Mono" font-size="12">Sum</text>
  <text x="340" y="110" font-family="JetBrains Mono" font-size="12">Carry</text>
</svg>` },
      { type: 'heading', text: 'Full adder', level: 1 },
      { type: 'code', lang: 'math', code:
`Inputs: A, B, Cin
Sum    = A ⊕ B ⊕ Cin
Cout   = AB + Cin(A ⊕ B)` },
      { type: 'callout', kind: 'info', html: 'A ripple-carry adder chains n full adders. Delay = n · t<sub>FA</sub>. Carry-lookahead reduces this to O(log n).' },
      { type: 'heading', text: 'Multiplexer (MUX)', level: 1 },
      { type: 'para', html: 'A <strong>2<sup>n</sup>-to-1 MUX</strong> selects one of 2<sup>n</sup> inputs using n select lines. Think "data switch". A 4×1 MUX has D₀–D₃, S₁S₀, output Y.' },
      { type: 'code', lang: 'math', code:
`Y = S₁'S₀'·D₀ + S₁'S₀·D₁ + S₁S₀'·D₂ + S₁S₀·D₃` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Any n-variable boolean function can be implemented with a 2<sup>n−1</sup>-to-1 MUX (one variable feeds the data inputs).' },
      { type: 'heading', text: 'Decoder', level: 1 },
      { type: 'para', html: 'An <strong>n-to-2<sup>n</sup> decoder</strong> activates exactly one of its 2<sup>n</sup> outputs based on the input combination. Used for memory address decoding.' },
      { type: 'heading', text: 'Encoder & priority encoder', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Encoder: opposite of decoder, 2<sup>n</sup> → n. Assumes one-hot input.',
        'Priority encoder: if multiple inputs are 1, the highest priority wins.'
      ]},
      { type: 'heading', text: 'Comparator', level: 2 },
      { type: 'code', lang: 'math', code:
`1-bit comparator
A=B : A'B' + AB        (XNOR)
A>B : A·B'
A<B : A'·B` },
      { type: 'heading', text: 'Implementing functions with MUX', level: 2 },
      { type: 'para', html: 'F(A,B,C) with 4×1 MUX using A,B as selects: each minterm where C appears gets data line = C; where C\' appears, data = C\'; constant minterms get 0 or 1.' },
      { type: 'heading', text: 'Hazards', level: 2 },
      { type: 'para', html: 'A <strong>static hazard</strong> is a momentary glitch when the output should remain constant but briefly changes due to gate delays. Fix by adding redundant prime implicants to "cover" the transition.' },
      { type: 'callout', kind: 'warn', html: 'PROM, PLA, PAL: PROM has fixed AND / programmable OR; PAL has programmable AND / fixed OR; PLA has both programmable. GATE asks this comparison often.' }
    ]},

    /* ============== CH 7: Sequential Circuits ============== */
    { id: 'gcs-c7', title: 'Sequential Circuits', icon: '🔁', sections: [
      { type: 'heading', text: 'Memory enters the picture', level: 1 },
      { type: 'para', html: 'Sequential circuits remember. The basic memory element is a <strong>flip-flop</strong> (edge-triggered) or a <strong>latch</strong> (level-triggered). The clock drives state transitions.' },
      { type: 'heading', text: 'SR latch', level: 1 },
      { type: 'code', lang: 'math', code:
`S  R  | Q(next)
0  0  | Q (hold)
0  1  | 0 (reset)
1  0  | 1 (set)
1  1  | invalid` },
      { type: 'heading', text: 'D flip-flop', level: 1 },
      { type: 'para', html: '<strong>D (data)</strong> flip-flop captures D on the clock edge: <code>Q<sub>next</sub> = D</code>. No invalid state. Used in registers, pipelines.' },
      { type: 'heading', text: 'JK flip-flop', level: 1 },
      { type: 'code', lang: 'math', code:
`J  K  | Q(next)
0  0  | Q
0  1  | 0
1  0  | 1
1  1  | Q'   (toggle)` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> J=K=1 toggles. Tying J and K together gives a T flip-flop.' },
      { type: 'heading', text: 'T flip-flop', level: 2 },
      { type: 'code', lang: 'math', code:
`T = 0 : hold
T = 1 : toggle
Q(next) = T ⊕ Q` },
      { type: 'heading', text: 'Excitation tables (key for GATE)', level: 1 },
      { type: 'code', lang: 'math', code:
`Q → Q+ |  SR  |  JK  |  D  |  T
0 → 0  | 0X   | 0X   | 0   | 0
0 → 1  | 10   | 1X   | 1   | 1
1 → 0  | 01   | X1   | 0   | 1
1 → 1  | X0   | X0   | 1   | 0` },
      { type: 'heading', text: 'Counters', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Asynchronous (ripple)</strong>: clocks chained. Simple but slow, glitches.',
        '<strong>Synchronous</strong>: all FFs share the same clock. Fast, clean.',
        '<strong>Mod-N counter</strong>: needs ⌈log₂N⌉ flip-flops.'
      ]},
      { type: 'heading', text: 'Ring & Johnson counters', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Ring counter: n FFs, n states (one-hot rotating)',
        'Johnson (twisted-ring): n FFs, 2n states'
      ]},
      { type: 'heading', text: 'Mealy vs Moore', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Mealy</strong>: output depends on state AND input. Usually fewer states. Outputs change immediately.',
        '<strong>Moore</strong>: output depends only on state. Synchronous outputs, often more states.'
      ]},
      { type: 'heading', text: 'FSM design steps', level: 2 },
      { type: 'list', kind: 'number', items: [
        'Identify states from the problem',
        'Draw state diagram / fill state table',
        'State minimisation (merge equivalent states)',
        'Pick state encoding (binary, gray, one-hot)',
        'Derive next-state and output equations',
        'Choose FF type, draw the circuit'
      ]},
      { type: 'callout', kind: 'warn', html: 'Setup time t<sub>su</sub>: input must be stable BEFORE clock edge. Hold time t<sub>h</sub>: input must remain stable AFTER edge. Violations cause metastability.' }
    ]},

    /* ============================================================
       SUBJECT 3: COMPUTER ORGANISATION & ARCHITECTURE
       ============================================================ */

    /* ============== CH 8: Instructions & Addressing ============== */
    { id: 'gcs-c8', title: 'Instructions & Addressing', icon: '🧠', sections: [
      { type: 'heading', text: 'The instruction cycle', level: 1 },
      { type: 'list', kind: 'number', items: [
        '<strong>Fetch</strong> — PC points to next instruction; load it into IR',
        '<strong>Decode</strong> — interpret opcode and operands',
        '<strong>Execute</strong> — perform the operation',
        '<strong>Memory access</strong> — load/store if needed',
        '<strong>Write-back</strong> — store result to register'
      ]},
      { type: 'heading', text: 'RISC vs CISC', level: 1 },
      { type: 'image', alt: 'risc vs cisc', svg:
`<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto;">
  <rect width="500" height="200" fill="#fafafa" rx="8"/>
  <text x="125" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">RISC</text>
  <text x="375" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">CISC</text>
  <rect x="20" y="40" width="210" height="140" fill="#58cc02" rx="8" opacity="0.85"/>
  <rect x="270" y="40" width="210" height="140" fill="#ff9600" rx="8" opacity="0.85"/>
  <g font-family="Nunito" font-size="11" fill="white">
    <text x="35" y="65">• Few, simple instructions</text>
    <text x="35" y="85">• Fixed instruction size</text>
    <text x="35" y="105">• Load–store architecture</text>
    <text x="35" y="125">• Many registers</text>
    <text x="35" y="145">• Single-cycle execution</text>
    <text x="35" y="165">• Pipelining-friendly</text>
    <text x="285" y="65">• Many, complex instructions</text>
    <text x="285" y="85">• Variable instruction size</text>
    <text x="285" y="105">• Memory-to-memory ops</text>
    <text x="285" y="125">• Fewer registers</text>
    <text x="285" y="145">• Multi-cycle execution</text>
    <text x="285" y="165">• Microcoded control</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Addressing modes', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Immediate</strong>: operand is in the instruction → MOV R1, #5',
        '<strong>Register</strong>: operand is in a register → MOV R1, R2',
        '<strong>Direct</strong>: address is in the instruction → LOAD R1, 1000',
        '<strong>Indirect</strong>: instruction holds address-of-address → LOAD R1, (1000)',
        '<strong>Register indirect</strong>: register holds address → LOAD R1, (R2)',
        '<strong>Indexed</strong>: effective addr = base + index → LOAD R1, 100(R2)',
        '<strong>Relative</strong>: address = PC + offset → BRANCH +20',
        '<strong>Auto-increment/decrement</strong>: useful for stacks / arrays'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Counting memory accesses — immediate=0 extra, direct=1, indirect=2. This is the most common COA exam pattern.' },
      { type: 'heading', text: 'Instruction format types', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '0-address (stack): operations pop and push',
        '1-address: ACC = ACC op operand',
        '2-address: dest = dest op src',
        '3-address: dest = src1 op src2'
      ]},
      { type: 'heading', text: 'Sample: evaluating X = (A+B)·(C+D)', level: 2 },
      { type: 'code', lang: 'asm', code:
`<span class="com">; 3-address</span>
ADD T1, A, B
ADD T2, C, D
MUL X, T1, T2

<span class="com">; 1-address (ACC machine)</span>
LOAD A
ADD  B
STORE T
LOAD  C
ADD   D
MUL   T
STORE X` },
      { type: 'heading', text: 'CPU performance equation', level: 1 },
      { type: 'code', lang: 'math', code:
`CPU time = IC · CPI · T

IC  = instruction count
CPI = average cycles per instruction
T   = clock cycle time = 1/frequency

MIPS = IC / (CPU time · 10⁶) = clock / (CPI · 10⁶)` },
      { type: 'heading', text: 'Amdahl\'s law', level: 1 },
      { type: 'code', lang: 'math', code:
`Speedup = 1 / ((1 − f) + f/s)

f = fraction enhanced,  s = speedup of that fraction
Maximum speedup as s → ∞ is  1/(1 − f)` },
      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`Program: 50% memory ops (CPI 4), 30% ALU (CPI 1), 20% branch (CPI 2)
Average CPI = 0.5·4 + 0.3·1 + 0.2·2 = 2.7
At 2 GHz clock, 10⁹ instructions:
CPU time = 10⁹ · 2.7 / 2·10⁹ = 1.35 s` }
    ]},

    /* ============== CH 9: Memory Hierarchy & Cache ============== */
    { id: 'gcs-c9', title: 'Memory Hierarchy & Cache', icon: '🗂️', sections: [
      { type: 'heading', text: 'The pyramid', level: 1 },
      { type: 'image', alt: 'memory hierarchy', svg:
`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto;">
  <rect width="500" height="300" fill="#fafafa" rx="8"/>
  <text x="250" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Memory hierarchy</text>
  <polygon points="230,40 270,40 280,80 220,80" fill="#ff4b4b"/>
  <text x="250" y="65" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="11">Regs</text>
  <polygon points="210,80 290,80 300,120 200,120" fill="#ff9600"/>
  <text x="250" y="105" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="11">L1 / L2 / L3 cache</text>
  <polygon points="190,120 310,120 330,170 170,170" fill="#1cb0f6"/>
  <text x="250" y="150" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="12">Main memory (RAM)</text>
  <polygon points="160,170 340,170 370,230 130,230" fill="#7c4dff"/>
  <text x="250" y="205" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="12">SSD / Flash</text>
  <polygon points="120,230 380,230 410,280 90,280" fill="#58cc02"/>
  <text x="250" y="260" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="12">Magnetic disk / Tape</text>
  <text x="420" y="60" font-family="Nunito" font-size="10" fill="#333">fast / small / $$$</text>
  <text x="420" y="275" font-family="Nunito" font-size="10" fill="#333">slow / huge / cheap</text>
</svg>` },
      { type: 'heading', text: 'Locality — why caching works', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Temporal</strong>: a recently accessed item is likely to be accessed again',
        '<strong>Spatial</strong>: nearby items are likely to be accessed soon'
      ]},
      { type: 'heading', text: 'Cache mapping', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Direct-mapped</strong>: block i goes to line (i mod N). Simple, high conflicts.',
        '<strong>Fully associative</strong>: any block in any line. Flexible, expensive (tag compare for all).',
        '<strong>Set-associative</strong>: blocks map to a set of k lines. Sweet spot.'
      ]},
      { type: 'heading', text: 'Address breakdown', level: 2 },
      { type: 'code', lang: 'math', code:
`| TAG | INDEX | OFFSET |

OFFSET bits = log₂(block size)
INDEX  bits = log₂(# sets)           [0 if fully assoc]
TAG    bits = remaining

# sets = cache size / (block size · associativity)` },
      { type: 'heading', text: 'Effective access time (EAT)', level: 1 },
      { type: 'code', lang: 'math', code:
`EAT = h · T_cache + (1 − h) · T_memory

h = hit ratio
With multi-level cache:
EAT = h₁·T₁ + (1−h₁)·(h₂·T₂ + (1−h₂)·T_mem)` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> EAT formulas vary by source. Look-aside (parallel) and look-through (serial) give slightly different equations — read the question carefully.' },
      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`Cache 32 KB, 4-way set assoc, 64-byte block, 32-bit address
Offset = 6 bits
# sets = 32K / (64 · 4) = 128  → INDEX = 7 bits
TAG = 32 − 6 − 7 = 19 bits` },
      { type: 'heading', text: 'Replacement policies', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>LRU</strong> — evict least recently used',
        '<strong>FIFO</strong> — evict oldest loaded',
        '<strong>Random</strong> — easy hardware, surprisingly competitive',
        '<strong>OPT</strong> — evict block used farthest in future (theoretical lower bound)'
      ]},
      { type: 'heading', text: 'Write policies', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Write-through</strong>: write to cache AND memory. Simple, slower.',
        '<strong>Write-back</strong>: write only to cache; flush to memory on eviction. Needs dirty bit.',
        '<strong>Write-allocate</strong> vs <strong>no-write-allocate</strong>: behaviour on a write miss.'
      ]},
      { type: 'heading', text: 'Cache misses (the 3 Cs)', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Compulsory</strong>: first ever reference to a block — unavoidable.',
        '<strong>Capacity</strong>: cache too small to hold the working set.',
        '<strong>Conflict</strong>: multiple blocks fight for the same set (not in fully associative).'
      ]}
    ]},

    /* ============== CH 10: Pipelining ============== */
    { id: 'gcs-c10', title: 'Pipelining', icon: '🏭', sections: [
      { type: 'heading', text: 'Why pipeline?', level: 1 },
      { type: 'para', html: 'Pipelining overlaps the execution of multiple instructions like an assembly line. Each clock cycle, every stage works on a different instruction. Ideal speedup with k stages = k (rarely achieved due to hazards).' },
      { type: 'heading', text: 'Classic 5-stage MIPS pipeline', level: 1 },
      { type: 'image', alt: '5 stage pipeline', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">5-stage pipeline</text>
  <g font-family="Nunito" font-weight="bold" font-size="12" fill="white">
    <rect x="20"  y="50" width="100" height="60" fill="#ff4b4b" rx="6"/>
    <text x="70"  y="80" text-anchor="middle">IF</text>
    <text x="70"  y="98" text-anchor="middle" font-size="10">Fetch</text>
    <rect x="130" y="50" width="100" height="60" fill="#ff9600" rx="6"/>
    <text x="180" y="80" text-anchor="middle">ID</text>
    <text x="180" y="98" text-anchor="middle" font-size="10">Decode</text>
    <rect x="240" y="50" width="100" height="60" fill="#ffd900" rx="6"/>
    <text x="290" y="80" text-anchor="middle" fill="#333">EX</text>
    <text x="290" y="98" text-anchor="middle" font-size="10" fill="#333">Execute</text>
    <rect x="350" y="50" width="100" height="60" fill="#58cc02" rx="6"/>
    <text x="400" y="80" text-anchor="middle">MEM</text>
    <text x="400" y="98" text-anchor="middle" font-size="10">Memory</text>
    <rect x="460" y="50" width="100" height="60" fill="#1cb0f6" rx="6"/>
    <text x="510" y="80" text-anchor="middle">WB</text>
    <text x="510" y="98" text-anchor="middle" font-size="10">Write</text>
  </g>
  <text x="300" y="150" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#666">5 instructions in flight at once → 5× theoretical speedup</text>
</svg>` },
      { type: 'heading', text: 'Speedup formula', level: 1 },
      { type: 'code', lang: 'math', code:
`Without pipeline: n · k · T   (n instr, k stages, T per stage)
With pipeline   : (k + n − 1) · T
Speedup         : n·k / (k + n − 1)
As n → ∞        : Speedup → k` },
      { type: 'heading', text: 'Hazards — three flavours', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Structural</strong>: two stages need the same resource (e.g. single memory)',
        '<strong>Data</strong>: instruction depends on a not-yet-finished prior result',
        '<strong>Control</strong>: branch direction unknown until EX/MEM'
      ]},
      { type: 'heading', text: 'Data hazard types (RAW/WAR/WAW)', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>RAW</strong> (read after write) — true dependence, real hazard',
        '<strong>WAR</strong> (write after read) — anti-dependence, not in in-order pipelines',
        '<strong>WAW</strong> (write after write) — output dependence, also avoided in-order'
      ]},
      { type: 'heading', text: 'Forwarding (data bypass)', level: 1 },
      { type: 'para', html: 'Route the ALU result of an instruction directly from the EX/MEM register back to the EX stage of the next instruction — without waiting for write-back. Eliminates many RAW stalls.' },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> The load-use hazard cannot be fully forwarded — a 1-cycle bubble is always required because the value isn\'t available until end of MEM.' },
      { type: 'heading', text: 'Branch handling', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Stall</strong>: simplest, costs cycles',
        '<strong>Predict not-taken</strong>: assume branch falls through',
        '<strong>Predict taken</strong>: assume branch happens',
        '<strong>Delayed branch</strong>: execute the slot after the branch unconditionally',
        '<strong>Dynamic prediction</strong>: 1-bit / 2-bit predictors, BTB'
      ]},
      { type: 'heading', text: 'Worked stall analysis', level: 2 },
      { type: 'code', lang: 'asm', code:
`LW   R1, 0(R2)
ADD  R3, R1, R4    <span class="com">; needs R1 — 1 bubble even with forwarding</span>
SUB  R5, R3, R6    <span class="com">; needs R3 — covered by EX→EX forward</span>` },
      { type: 'heading', text: 'CPI with stalls', level: 1 },
      { type: 'code', lang: 'math', code:
`CPI_actual = CPI_ideal + stall_cycles_per_instr
Pipeline speedup = (pipeline depth) / (1 + stall_cycles_per_instr)` },
      { type: 'callout', kind: 'warn', html: 'Deeper pipelines = higher clock but higher branch penalty. Pentium 4 went up to 31 stages; modern designs settled around 14–20.' }
    ]},

    /* ============================================================
       SUBJECT 4: PROGRAMMING & DATA STRUCTURES
       ============================================================ */

    /* ============== CH 11: C Pointers & Arrays ============== */
    { id: 'gcs-c11', title: 'C Pointers & Arrays', icon: '👉', sections: [
      { type: 'heading', text: 'What is a pointer?', level: 1 },
      { type: 'para', html: 'A pointer holds a memory address. <code>int *p</code> means p points to an int. <code>&x</code> takes the address of x; <code>*p</code> dereferences the pointer to read or write the value.' },
      { type: 'code', lang: 'c', code:
`<span class="ty">int</span> x = <span class="num">42</span>;
<span class="ty">int</span> *p = &x;        <span class="com">// p holds address of x</span>
<span class="fn">printf</span>(<span class="str">"%d\\n"</span>, *p);  <span class="com">// 42</span>
*p = <span class="num">100</span>;           <span class="com">// changes x to 100</span>` },
      { type: 'heading', text: 'Pointer arithmetic', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<code>p + 1</code> advances by <code>sizeof(*p)</code> bytes',
        '<code>p - q</code> gives the count between, not the byte distance',
        'You can\'t add two pointers — only subtract',
        'Comparison &lt; &gt; valid only within the same array (else UB)'
      ]},
      { type: 'heading', text: 'Arrays = pointer in disguise', level: 1 },
      { type: 'code', lang: 'c', code:
`<span class="ty">int</span> a[<span class="num">5</span>] = {<span class="num">10</span>,<span class="num">20</span>,<span class="num">30</span>,<span class="num">40</span>,<span class="num">50</span>};
a[<span class="num">2</span>]   <span class="com">// == *(a + 2) == 30</span>
&a[<span class="num">0</span>] == a             <span class="com">// true (decay)</span>` },
      { type: 'callout', kind: 'info', html: '<strong>Array decay:</strong> When passed to a function, an array decays to a pointer. <code>sizeof</code> inside that function reports pointer size, not array size.' },
      { type: 'heading', text: 'Pass by value vs pointer', level: 1 },
      { type: 'code', lang: 'c', code:
`<span class="kw">void</span> <span class="fn">swap</span>(<span class="ty">int</span> *a, <span class="ty">int</span> *b) {
  <span class="ty">int</span> t = *a; *a = *b; *b = t;
}
<span class="fn">swap</span>(&x, &y);   <span class="com">// must pass addresses</span>` },
      { type: 'heading', text: '2D arrays & pointer-to-pointer', level: 1 },
      { type: 'code', lang: 'c', code:
`<span class="ty">int</span> a[<span class="num">3</span>][<span class="num">4</span>];        <span class="com">// 3 rows × 4 cols, row-major</span>
<span class="com">// a[i][j] is at offset (i·4 + j) · sizeof(int)</span>

<span class="ty">int</span> **pp;             <span class="com">// pointer-to-pointer (e.g., dynamic 2D)</span>` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> int a[3][4]; address of a[i][j] = base + (i·4 + j)·sizeof(int). Watch row-major vs column-major in the question.' },
      { type: 'heading', text: 'Strings', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="ty">char</span> s[] = <span class="str">"hello"</span>;   <span class="com">// 6 bytes: 'h','e','l','l','o','\\0'</span>
<span class="ty">char</span> *p = <span class="str">"hello"</span>;   <span class="com">// pointer to string literal (read-only)</span>` },
      { type: 'heading', text: 'Common pitfalls', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Dangling pointer: pointing to freed/expired memory',
        'Wild pointer: uninitialised',
        'Memory leak: alloc without free',
        'Buffer overflow: writing past array bounds'
      ]},
      { type: 'heading', text: 'Dynamic memory', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="ty">int</span> *arr = <span class="fn">malloc</span>(n * <span class="kw">sizeof</span>(<span class="ty">int</span>));
<span class="kw">if</span> (!arr) <span class="fn">exit</span>(<span class="num">1</span>);
<span class="com">// use arr ...</span>
<span class="fn">free</span>(arr);
arr = <span class="kw">NULL</span>;  <span class="com">// good hygiene</span>` },
      { type: 'heading', text: 'Function pointers', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="ty">int</span> (*fp)(<span class="ty">int</span>, <span class="ty">int</span>) = &<span class="fn">add</span>;
<span class="ty">int</span> r = fp(<span class="num">3</span>, <span class="num">4</span>);  <span class="com">// 7</span>` }
    ]},

    /* ============== CH 12: Stacks, Queues, Linked Lists ============== */
    { id: 'gcs-c12', title: 'Stacks, Queues, Linked Lists', icon: '📚', sections: [
      { type: 'heading', text: 'Stack — LIFO', level: 1 },
      { type: 'para', html: 'A stack is Last-In-First-Out: push to the top, pop from the top. Used in function calls (the call stack), undo, expression parsing, DFS, balanced parentheses.' },
      { type: 'widget', name: 'stack-queue-vis', props: {} },
      { type: 'heading', text: 'Stack operations', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="kw">void</span> <span class="fn">push</span>(<span class="ty">int</span> x) { arr[++top] = x; }
<span class="ty">int</span>  <span class="fn">pop</span>()      { <span class="kw">return</span> arr[top--]; }
<span class="ty">int</span>  <span class="fn">peek</span>()     { <span class="kw">return</span> arr[top]; }
<span class="ty">bool</span> <span class="fn">empty</span>()    { <span class="kw">return</span> top == -<span class="num">1</span>; }` },
      { type: 'callout', kind: 'info', html: 'All four operations are O(1). For an array-based stack, only push can overflow; pop on empty must be guarded.' },
      { type: 'heading', text: 'Infix → postfix', level: 2 },
      { type: 'code', lang: 'math', code:
`A + B * C        →   A B C * +
(A + B) * C      →   A B + C *
A^B^C  (right)   →   A B C ^ ^` },
      { type: 'heading', text: 'Queue — FIFO', level: 1 },
      { type: 'para', html: 'First-In-First-Out: enqueue at the rear, dequeue from the front. Used in BFS, scheduling, buffers, pipelines.' },
      { type: 'heading', text: 'Circular queue formulas', level: 2 },
      { type: 'code', lang: 'math', code:
`enqueue: rear = (rear + 1) % N
dequeue: front = (front + 1) % N
full   : (rear + 1) % N == front
empty  : front == rear` },
      { type: 'heading', text: 'Deque & priority queue', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Deque</strong>: insert/remove at both ends',
        '<strong>Priority queue</strong>: highest-priority dequeues first (heap-backed)',
        'Heap operations: insert O(log n), extract-min O(log n)'
      ]},
      { type: 'heading', text: 'Linked list — pointers in motion', level: 1 },
      { type: 'widget', name: 'linked-list-vis', props: {} },
      { type: 'heading', text: 'Singly linked list node', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="kw">typedef struct</span> Node {
  <span class="ty">int</span> data;
  <span class="kw">struct</span> Node *next;
} Node;` },
      { type: 'heading', text: 'Insertion / deletion costs', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Insert at head: O(1)',
        'Insert at tail (with tail ptr): O(1)',
        'Insert in middle: O(n) to find, then O(1)',
        'Search: O(n)',
        'Doubly linked: prev pointer enables O(1) deletion given node'
      ]},
      { type: 'heading', text: 'Reverse a linked list', level: 2 },
      { type: 'code', lang: 'c', code:
`Node* <span class="fn">reverse</span>(Node *head) {
  Node *prev = <span class="kw">NULL</span>, *curr = head;
  <span class="kw">while</span> (curr) {
    Node *nxt = curr->next;
    curr->next = prev;
    prev = curr;
    curr = nxt;
  }
  <span class="kw">return</span> prev;
}` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Floyd\'s tortoise & hare detects cycles in O(n) time, O(1) space. Two pointers, one moves twice as fast — they meet inside the cycle.' }
    ]},

    /* ============== CH 13: Trees & Graphs ============== */
    { id: 'gcs-c13', title: 'Trees & Graphs', icon: '🌳', sections: [
      { type: 'heading', text: 'Tree terminology', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Root</strong>: node with no parent',
        '<strong>Leaf</strong>: node with no children',
        '<strong>Height</strong>: longest path from root to leaf',
        '<strong>Depth</strong>: from the node up to root',
        '<strong>Complete binary tree</strong>: all levels full except possibly last (filled left to right)',
        '<strong>Full / strict</strong>: every node has 0 or 2 children'
      ]},
      { type: 'heading', text: 'Key counts', level: 2 },
      { type: 'code', lang: 'math', code:
`n-node binary tree     :  n−1 edges
Max nodes at level h   :  2^h
Max nodes in tree h    :  2^{h+1} − 1
Min height of n-node   :  ⌈log₂(n+1)⌉ − 1
Number of distinct BSTs of n keys = Catalan(n)
  C(n) = C(2n, n)/(n+1)` },
      { type: 'heading', text: 'Binary search tree', level: 1 },
      { type: 'para', html: 'A BST keeps the invariant: <em>left subtree &lt; node &lt; right subtree</em>. Search, insert, delete are O(h). Best h = O(log n), worst (skewed) h = O(n).' },
      { type: 'widget', name: 'bst-vis', props: {} },
      { type: 'heading', text: 'Traversals', level: 1 },
      { type: 'code', lang: 'c', code:
`<span class="com">// inorder: L, root, R  → sorted for BST</span>
<span class="kw">void</span> <span class="fn">inorder</span>(Node *r) {
  <span class="kw">if</span> (!r) <span class="kw">return</span>;
  <span class="fn">inorder</span>(r->left);
  <span class="fn">visit</span>(r);
  <span class="fn">inorder</span>(r->right);
}
<span class="com">// preorder: root, L, R
// postorder: L, R, root</span>` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Given preorder + inorder (or postorder + inorder), the tree is uniquely determined. Preorder + postorder alone is NOT enough.' },
      { type: 'heading', text: 'Balanced trees', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>AVL</strong>: balance factor ∈ {−1, 0, 1}; rotations restore on insert/delete',
        '<strong>Red-Black</strong>: looser balance, still O(log n)',
        '<strong>B-trees</strong>: large fanout for disk-friendly indexes',
        '<strong>Heap</strong>: complete binary tree with parent-child order property'
      ]},
      { type: 'heading', text: 'Graphs — representation', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Adjacency matrix</strong>: V×V, O(V²) space. Edge check O(1). Good for dense graphs.',
        '<strong>Adjacency list</strong>: O(V + E) space. Iteration over neighbours efficient. Good for sparse graphs.',
        '<strong>Edge list</strong>: just (u,v[,w]) tuples. Easy to sort by weight for Kruskal.'
      ]},
      { type: 'heading', text: 'Edge counts', level: 2 },
      { type: 'code', lang: 'math', code:
`Max edges in undirected simple graph: V(V−1)/2
Max edges in directed simple graph  : V(V−1)
Tree on n vertices has exactly n−1 edges
A graph with V vertices and ≥ V edges has a cycle` },
      { type: 'heading', text: 'Graph properties', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Connected</strong>: path between any two vertices',
        '<strong>Strongly connected</strong> (directed): path both ways',
        '<strong>DAG</strong>: directed acyclic — has a topological order',
        '<strong>Bipartite</strong>: 2-colourable iff no odd cycle'
      ]},
      { type: 'heading', text: 'Special: spanning tree', level: 2 },
      { type: 'para', html: 'A spanning tree of G includes all vertices and is a tree (n−1 edges, no cycles). Minimum spanning tree (MST) minimises total edge weight.' }
    ]},

    /* ============================================================
       SUBJECT 5: ALGORITHMS
       ============================================================ */

    /* ============== CH 14: Big O & Master Theorem ============== */
    { id: 'gcs-c14', title: 'Big O & Master Theorem', icon: 'Ω', sections: [
      { type: 'heading', text: 'Asymptotic notation', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>O(g)</strong>: upper bound (worst-case ≤ c·g)',
        '<strong>Ω(g)</strong>: lower bound (≥ c·g eventually)',
        '<strong>Θ(g)</strong>: tight bound (both O and Ω)',
        '<strong>o(g)</strong>: strictly slower (loose upper)',
        '<strong>ω(g)</strong>: strictly faster (loose lower)'
      ]},
      { type: 'heading', text: 'Growth hierarchy', level: 1 },
      { type: 'code', lang: 'math', code:
`1 < log log n < log n < (log n)^k
  < n^ε  < n  < n log n  < n^2  < n^3
  < 2^n  < 3^n < n!  < n^n` },
      { type: 'callout', kind: 'info', html: 'log₂n grows MUCH slower than n. For n = 10⁹, log₂n ≈ 30. That\'s the magic behind binary search.' },
      { type: 'heading', text: 'Standard time complexities', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Binary search — O(log n)',
        'Merge sort, heap sort — O(n log n)',
        'Bubble, insertion, selection — O(n²)',
        'BFS / DFS — O(V + E)',
        'Dijkstra (with heap) — O((V + E) log V)',
        'Floyd–Warshall — O(V³)'
      ]},
      { type: 'heading', text: 'Recurrence relations', level: 1 },
      { type: 'code', lang: 'math', code:
`T(n) = 2 T(n/2) + n          → O(n log n)   (merge sort)
T(n) = T(n/2) + 1            → O(log n)     (binary search)
T(n) = T(n−1) + n            → O(n²)        (selection sort)
T(n) = 2 T(n−1) + 1          → O(2^n)       (Tower of Hanoi)
T(n) = T(n−1) + T(n−2) + 1   → O(φ^n)       (naive Fibonacci)` },
      { type: 'heading', text: 'Master theorem', level: 1 },
      { type: 'code', lang: 'math', code:
`T(n) = a T(n/b) + f(n)    with a ≥ 1, b > 1

Let n^c = n^(log_b a)

Case 1:  f(n) = O(n^{c−ε})        →  T(n) = Θ(n^c)
Case 2:  f(n) = Θ(n^c)            →  T(n) = Θ(n^c · log n)
Case 3:  f(n) = Ω(n^{c+ε}) AND
         regular (a·f(n/b) ≤ k·f(n))  →  T(n) = Θ(f(n))` },
      { type: 'heading', text: 'Worked examples', level: 2 },
      { type: 'code', lang: 'math', code:
`T(n) = 9 T(n/3) + n      a=9,b=3,c=2;  f=n=O(n^{2−1})  → Case 1 → Θ(n²)
T(n) = T(2n/3) + 1       a=1,b=3/2,c=0; f=1=Θ(1)        → Case 2 → Θ(log n)
T(n) = 3 T(n/4) + n log n  a=3,b=4,c≈0.79; f dominates  → Case 3 → Θ(n log n)
T(n) = 2 T(n/2) + n log n  ← Master fails (between Case 2 & 3)` },
      { type: 'callout', kind: 'warn', html: '<strong>GATE trick:</strong> Master theorem requires the form T(n) = a·T(n/b) + f(n). T(n) = T(n−1) + … is NOT covered — use substitution.' },
      { type: 'heading', text: 'Amortised analysis', level: 2 },
      { type: 'para', html: 'Dynamic-array doubling: a single push can be O(n) when resizing, but amortised cost per push is O(1). Total over n pushes is O(n).' }
    ]},

    /* ============== CH 15: Design Techniques ============== */
    { id: 'gcs-c15', title: 'Design Techniques', icon: '🛠️', sections: [
      { type: 'heading', text: 'Divide and conquer', level: 1 },
      { type: 'list', kind: 'number', items: [
        'Divide problem into smaller subproblems',
        'Conquer (recurse) on subproblems',
        'Combine subsolutions into the answer'
      ]},
      { type: 'heading', text: 'D&C examples', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Merge sort — T(n) = 2T(n/2) + n',
        'Quick sort — average O(n log n), worst O(n²)',
        'Binary search — T(n) = T(n/2) + 1',
        'Closest pair of points — O(n log n)',
        'Strassen\'s matrix multiplication — O(n^2.81)'
      ]},
      { type: 'heading', text: 'Greedy', level: 1 },
      { type: 'para', html: 'At each step, pick the locally optimal choice — without revisiting. Works when the problem has the <strong>greedy choice property</strong> and <strong>optimal substructure</strong>.' },
      { type: 'list', kind: 'check', items: [
        'Activity selection — sort by finish time',
        'Huffman coding — combine two smallest frequencies',
        'Fractional knapsack — sort by value/weight',
        'Kruskal\'s & Prim\'s MST',
        'Dijkstra (no negative edges!)'
      ]},
      { type: 'callout', kind: 'warn', html: 'Greedy fails on 0/1 knapsack and on graphs with negative edges. Don\'t apply Dijkstra to negative weights — use Bellman-Ford.' },
      { type: 'heading', text: 'Dynamic programming (DP)', level: 1 },
      { type: 'para', html: 'DP solves problems with <strong>overlapping subproblems</strong> and <strong>optimal substructure</strong>. Store subproblem answers (memoisation or tabulation) to avoid recomputation.' },
      { type: 'heading', text: 'Classic DP problems', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '0/1 Knapsack — O(nW)',
        'Longest Common Subsequence — O(mn)',
        'Edit Distance — O(mn)',
        'Matrix Chain Multiplication — O(n³)',
        'All-pairs shortest paths (Floyd-Warshall) — O(V³)',
        'Subset sum, partition, rod cutting, coin change'
      ]},
      { type: 'heading', text: '0/1 Knapsack DP', level: 2 },
      { type: 'code', lang: 'c', code:
`<span class="com">// dp[i][w] = max value using first i items, capacity w</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i &lt;= n; i++)
  <span class="kw">for</span> (<span class="ty">int</span> w = <span class="num">0</span>; w &lt;= W; w++)
    dp[i][w] = (wt[i] &lt;= w)
        ? <span class="fn">max</span>(dp[i-<span class="num">1</span>][w], val[i] + dp[i-<span class="num">1</span>][w-wt[i]])
        : dp[i-<span class="num">1</span>][w];` },
      { type: 'heading', text: 'Backtracking', level: 1 },
      { type: 'para', html: 'Systematic search via DFS over a decision tree. Prune branches that cannot lead to a solution. Examples: N-queens, Sudoku, Hamiltonian path, graph colouring, subset sum.' },
      { type: 'heading', text: 'Branch and bound', level: 2 },
      { type: 'para', html: 'Like backtracking but with a bound (upper/lower) used to prune. Best-first variant uses priority queue ordering by bound estimate. Classic for TSP, 0/1 knapsack.' },
      { type: 'heading', text: 'Decision tree height for sorting', level: 2 },
      { type: 'code', lang: 'math', code:
`Any comparison sort has Ω(n log n) lower bound:
n! leaves, height ≥ log(n!) = Θ(n log n)` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Non-comparison sorts (counting, radix, bucket) can beat n log n when input domain is bounded — counting sort is O(n + k).' }
    ]},

    /* ============== CH 16: Graph Algorithms ============== */
    { id: 'gcs-c16', title: 'Graph Algorithms', icon: '🕸️', sections: [
      { type: 'heading', text: 'BFS — breadth first', level: 1 },
      { type: 'para', html: 'BFS explores level by level using a queue. It gives the shortest path in <em>unweighted</em> graphs. Time O(V + E), space O(V).' },
      { type: 'code', lang: 'c', code:
`<span class="fn">bfs</span>(s):
  visited[s] = <span class="kw">true</span>;  queue.<span class="fn">push</span>(s)
  <span class="kw">while</span> queue not empty:
    u = queue.<span class="fn">pop</span>()
    <span class="kw">for</span> v in adj[u]:
      <span class="kw">if</span> !visited[v]: visited[v] = <span class="kw">true</span>;  queue.<span class="fn">push</span>(v)` },
      { type: 'heading', text: 'DFS — depth first', level: 1 },
      { type: 'para', html: 'DFS dives deep before backtracking. Uses recursion (call stack) or explicit stack. Generates a DFS tree with tree, back, forward, cross edges. Detects cycles. Drives topological sort and Tarjan/Kosaraju SCC.' },
      { type: 'heading', text: 'Edge classification', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Tree</strong>: discovers new vertex',
        '<strong>Back</strong>: to ancestor → indicates a cycle',
        '<strong>Forward</strong>: to descendant (directed only)',
        '<strong>Cross</strong>: to a different DFS subtree (directed only)'
      ]},
      { type: 'heading', text: 'Topological sort', level: 2 },
      { type: 'para', html: 'A linear ordering of vertices in a DAG such that every edge u→v has u before v. Methods: (1) DFS finish-time reverse, (2) Kahn\'s algorithm with in-degree queue.' },
      { type: 'heading', text: 'Dijkstra — single source SP', level: 1 },
      { type: 'code', lang: 'math', code:
`Init dist[s] = 0, all others = ∞
Min-priority queue of (dist, v)
Pop nearest u; relax all edges u→v:
   if dist[u] + w(u,v) < dist[v]:
       dist[v] = dist[u] + w(u,v)
       push (dist[v], v)

Time: O((V+E) log V) with binary heap
      O(V² ) with array (dense graph)` },
      { type: 'callout', kind: 'warn', html: 'Dijkstra fails with negative weights! Use Bellman-Ford in that case.' },
      { type: 'heading', text: 'Bellman-Ford', level: 1 },
      { type: 'code', lang: 'math', code:
`Repeat V−1 times:
  for each edge (u,v,w):
    if dist[u] + w < dist[v]: dist[v] = dist[u] + w

If a further relaxation succeeds → negative cycle present
Time: O(V·E)` },
      { type: 'heading', text: 'Floyd-Warshall — all pairs', level: 2 },
      { type: 'code', lang: 'math', code:
`for k = 1..V:
  for i = 1..V:
    for j = 1..V:
      d[i][j] = min(d[i][j], d[i][k] + d[k][j])

Time O(V³), space O(V²). Detects negative cycle if d[i][i] < 0.` },
      { type: 'heading', text: 'Minimum spanning tree', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Kruskal</strong>: sort edges ascending; add if it doesn\'t form a cycle (use union-find). O(E log E).',
        '<strong>Prim</strong>: start from any vertex; repeatedly add cheapest edge crossing the cut. O(E log V) with heap.'
      ]},
      { type: 'heading', text: 'MST properties', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Cut property — lightest edge crossing any cut is in some MST',
        'Cycle property — heaviest edge in any cycle is not in any MST',
        'If all edge weights distinct, MST is unique',
        'MST has exactly V − 1 edges'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> MST is NOT the same as shortest-path tree. MST minimises total edge weight; SPT minimises distance from a single source.' },
      { type: 'heading', text: 'Network flow (intro)', level: 2 },
      { type: 'para', html: 'Max-flow min-cut theorem: maximum flow from s to t equals the capacity of the minimum s-t cut. Ford-Fulkerson augments along paths; Edmonds-Karp uses BFS giving O(VE²).' }
    ]},

    /* ============================================================
       SUBJECT 6: THEORY OF COMPUTATION
       ============================================================ */

    /* ============== CH 17: Finite Automata & Regex ============== */
    { id: 'gcs-c17', title: 'Finite Automata & Regex', icon: '🤖', sections: [
      { type: 'heading', text: 'The 5-tuple', level: 1 },
      { type: 'code', lang: 'math', code:
`DFA = (Q, Σ, δ, q₀, F)
 Q  : finite set of states
 Σ  : input alphabet
 δ  : Q × Σ → Q     (transition function — total)
 q₀ : start state
 F  : set of accept states` },
      { type: 'heading', text: 'NFA differences', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'δ : Q × (Σ ∪ {ε}) → 2^Q (set of states, possibly empty)',
        'ε-moves allowed, non-determinism allowed',
        '<strong>NFA ≡ DFA</strong> in language power, but NFA can be exponentially smaller'
      ]},
      { type: 'heading', text: 'DFA example', level: 2 },
      { type: 'image', alt: 'DFA accepting strings ending in 01', svg:
`<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;display:block;margin:0 auto;">
  <rect width="460" height="180" fill="#fafafa" rx="8"/>
  <text x="230" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">DFA: strings ending in "01"</text>
  <circle cx="80"  cy="100" r="28" fill="#1cb0f6"/>
  <text  x="80"  y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono">q0</text>
  <circle cx="230" cy="100" r="28" fill="#1cb0f6"/>
  <text  x="230" y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono">q1</text>
  <circle cx="380" cy="100" r="28" fill="#58cc02"/>
  <circle cx="380" cy="100" r="34" fill="none" stroke="#58cc02"/>
  <text  x="380" y="105" text-anchor="middle" fill="white" font-family="JetBrains Mono">q2</text>
  <path d="M108 100 Q 155 70 202 100" fill="none" stroke="#333" stroke-width="2" marker-end="url(#a)"/>
  <text x="155" y="68" text-anchor="middle" font-family="JetBrains Mono" font-size="11">0</text>
  <path d="M258 100 Q 305 70 352 100" fill="none" stroke="#333" stroke-width="2" marker-end="url(#a)"/>
  <text x="305" y="68" text-anchor="middle" font-family="JetBrains Mono" font-size="11">1</text>
  <path d="M55 80 Q 35 50 55 30 Q 100 25 105 80" fill="none" stroke="#333" stroke-width="2" marker-end="url(#a)"/>
  <text x="60" y="28" font-family="JetBrains Mono" font-size="11">1</text>
  <defs><marker id="a" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#333"/></marker></defs>
</svg>` },
      { type: 'heading', text: 'Subset construction', level: 1 },
      { type: 'para', html: 'Convert NFA → DFA by treating each subset of NFA states as a single DFA state. Worst case |Q_DFA| = 2<sup>|Q_NFA|</sup>.' },
      { type: 'heading', text: 'Regular expressions', level: 1 },
      { type: 'code', lang: 'math', code:
`Operators (high precedence first):
  *   Kleene star (zero or more)
  ·   concatenation
  +   union

Identities:
  (a+b)* = (a*b*)*
  (ab)*a = a(ba)*
  ε + a a* = a*` },
      { type: 'heading', text: 'Kleene\'s theorem', level: 2 },
      { type: 'para', html: 'Regular expressions, DFAs, NFAs, and ε-NFAs all recognise exactly the class of <strong>regular languages</strong>. Each can be converted to the others.' },
      { type: 'heading', text: 'Pumping lemma for regular languages', level: 1 },
      { type: 'code', lang: 'math', code:
`If L is regular, ∃ p ≥ 1 such that ∀ w ∈ L with |w| ≥ p,
 w = xyz where |xy| ≤ p, |y| ≥ 1, and ∀ i ≥ 0:  xy^i z ∈ L.

Use the contrapositive to PROVE a language is NOT regular.` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> { a^n b^n } and { ww } are NOT regular. Anything that requires matching unbounded counts is not regular.' },
      { type: 'heading', text: 'Closure properties (regular)', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Union, intersection, complement, difference',
        'Concatenation, Kleene star',
        'Reversal, homomorphism, inverse homomorphism'
      ]},
      { type: 'heading', text: 'DFA minimisation', level: 2 },
      { type: 'para', html: 'Partition states into equivalence classes (Hopcroft / Myhill–Nerode). Minimal DFA for a regular language is unique up to renaming.' },
      { type: 'heading', text: 'Common decidable problems', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Emptiness, finiteness, membership — all decidable for DFA/NFA',
        'Equivalence of two DFAs — decidable via product automaton'
      ]}
    ]},

    /* ============== CH 18: CFG & PDA ============== */
    { id: 'gcs-c18', title: 'CFG & PDA', icon: '🔣', sections: [
      { type: 'heading', text: 'Context-free grammars', level: 1 },
      { type: 'code', lang: 'math', code:
`CFG G = (V, T, P, S)
 V : variables (non-terminals)
 T : terminals
 P : productions A → α  (A ∈ V, α ∈ (V ∪ T)*)
 S : start symbol` },
      { type: 'heading', text: 'Example grammar', level: 2 },
      { type: 'code', lang: 'math', code:
`E → E + T | T
T → T * F | F
F → ( E ) | id` },
      { type: 'heading', text: 'Derivations & parse trees', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Leftmost</strong>: always expand leftmost variable',
        '<strong>Rightmost</strong>: always expand rightmost',
        '<strong>Parse tree</strong>: visual; root = S, leaves = terminals (yield)',
        '<strong>Ambiguous</strong>: ≥ 2 distinct parse trees for some string'
      ]},
      { type: 'heading', text: 'Eliminating useless / ε / unit productions', level: 2 },
      { type: 'list', kind: 'number', items: [
        'Remove useless variables (not reachable or not productive)',
        'Eliminate ε-productions (except S → ε if needed)',
        'Eliminate unit productions A → B',
        'Result preserves L(G)'
      ]},
      { type: 'heading', text: 'Normal forms', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Chomsky (CNF)</strong>: A → BC or A → a',
        '<strong>Greibach (GNF)</strong>: A → a·α',
        'Both can express any context-free language (excluding ε)'
      ]},
      { type: 'heading', text: 'Push-down automata (PDA)', level: 1 },
      { type: 'code', lang: 'math', code:
`PDA = (Q, Σ, Γ, δ, q₀, Z₀, F)
 Γ  : stack alphabet
 Z₀ : initial stack symbol
 δ  : Q × (Σ ∪ {ε}) × Γ → 2^{Q × Γ*}` },
      { type: 'callout', kind: 'info', html: '<strong>PDA ≡ CFG</strong> in language power. Acceptance by final state ≡ acceptance by empty stack. But deterministic PDA &lt; non-deterministic PDA in power.' },
      { type: 'heading', text: 'Pumping lemma for CFLs', level: 1 },
      { type: 'code', lang: 'math', code:
`If L is CFL, ∃ p such that ∀ z ∈ L with |z| ≥ p:
 z = uvwxy   with  |vwx| ≤ p,  |vx| ≥ 1
 ∀ i ≥ 0,  uv^i w x^i y ∈ L

Use to show {a^n b^n c^n} is NOT context-free.` },
      { type: 'heading', text: 'Closure properties (CFL)', level: 2 },
      { type: 'list', kind: 'check', items: [
        'CFL is closed under union, concatenation, Kleene star, reversal, substitution',
        'CFL is <strong>NOT</strong> closed under intersection or complement',
        'CFL ∩ Regular is CFL'
      ]},
      { type: 'heading', text: 'Decision problems for CFL', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Membership w ∈ L(G) — decidable (CYK in O(n³))',
        'Emptiness — decidable',
        'Equivalence of two CFGs — UNDECIDABLE',
        'Ambiguity — undecidable'
      ]},
      { type: 'heading', text: 'CYK algorithm', level: 2 },
      { type: 'para', html: 'Given a CNF grammar and a string of length n, fill an n × n table bottom-up to decide membership in O(n³). Used in NLP and bio-sequence parsing.' }
    ]},

    /* ============== CH 19: Turing Machines & Decidability ============== */
    { id: 'gcs-c19', title: 'Turing Machines & Decidability', icon: '∞', sections: [
      { type: 'heading', text: 'Turing machine', level: 1 },
      { type: 'code', lang: 'math', code:
`TM = (Q, Σ, Γ, δ, q₀, B, F)
 Γ ⊇ Σ ∪ {B}  (tape alphabet, B = blank)
 δ : Q × Γ → Q × Γ × {L, R}

Variants: multi-tape, non-deterministic, 2-way infinite, etc.
All equivalent in power (recognise recursively enumerable).` },
      { type: 'heading', text: 'Chomsky hierarchy', level: 1 },
      { type: 'image', alt: 'chomsky hierarchy', svg:
`<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;display:block;margin:0 auto;">
  <rect width="460" height="240" fill="#fafafa" rx="8"/>
  <text x="230" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">Chomsky hierarchy</text>
  <rect x="40"  y="40"  width="380" height="180" fill="#7c4dff" rx="14" opacity="0.85"/>
  <rect x="70"  y="70"  width="320" height="140" fill="#1cb0f6" rx="12" opacity="0.85"/>
  <rect x="100" y="100" width="260" height="100" fill="#58cc02" rx="10" opacity="0.85"/>
  <rect x="140" y="130" width="180" height="60"  fill="#ff9600" rx="8"  opacity="0.95"/>
  <g font-family="Nunito" font-size="11" fill="white" font-weight="bold">
    <text x="230" y="58" text-anchor="middle">Type 0 — Recursively Enumerable (TM)</text>
    <text x="230" y="88" text-anchor="middle">Type 1 — Context-Sensitive (LBA)</text>
    <text x="230" y="120" text-anchor="middle">Type 2 — Context-Free (PDA)</text>
    <text x="230" y="165" text-anchor="middle" fill="#333">Type 3 — Regular (DFA)</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Recognise vs decide', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Recursive</strong> (decidable): TM halts on every input, accepts L correctly',
        '<strong>RE</strong> (recursively enumerable): TM halts and accepts when w ∈ L; may loop otherwise',
        '<strong>co-RE</strong>: complement is RE',
        'L is decidable iff L and complement of L are both RE'
      ]},
      { type: 'heading', text: 'The halting problem', level: 1 },
      { type: 'para', html: 'Given a TM M and input w, does M halt on w? <strong>Undecidable</strong> (proved by Turing via diagonalisation). Many other problems reduce to it.' },
      { type: 'heading', text: 'Rice\'s theorem', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Any non-trivial property of the LANGUAGE recognised by a TM is UNDECIDABLE. E.g. "does M accept ε?", "is L(M) regular?", "is L(M) empty?" — all undecidable.' },
      { type: 'heading', text: 'Reductions', level: 1 },
      { type: 'para', html: 'A reduction A ≤<sub>m</sub> B means we can transform instances of A into instances of B such that the answer matches. If A is undecidable and A ≤ B, then B is undecidable.' },
      { type: 'heading', text: 'P, NP, NP-complete', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>P</strong>: solvable in polynomial time on a deterministic TM',
        '<strong>NP</strong>: verifiable in polynomial time / solvable in polytime by non-deterministic TM',
        '<strong>NP-hard</strong>: every NP problem reduces to it (in polytime)',
        '<strong>NP-complete</strong>: NP-hard AND in NP',
        'P ⊆ NP; whether P = NP is the great open question'
      ]},
      { type: 'heading', text: 'Famous NP-complete problems', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'SAT, 3-SAT (Cook-Levin: SAT is NP-complete)',
        'Travelling Salesperson (decision version)',
        'Hamiltonian path/cycle',
        'Graph colouring, clique, vertex cover, independent set',
        'Subset sum, 0/1 knapsack, partition'
      ]},
      { type: 'heading', text: 'Counts you must memorise', level: 2 },
      { type: 'code', lang: 'math', code:
`Regular   ⊂ DCFL ⊂ CFL ⊂ CSL ⊂ Recursive ⊂ RE

Regular closed under everything you can imagine.
CFL NOT closed under intersection or complement.
CSL closed under intersection AND complement.
RE closed under union, intersection, NOT complement.` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> If you can\'t recognise the complement, it\'s not co-RE. The complement of HALT is not RE — so HALT is RE but not co-RE.' }
    ]},

    /* ============================================================
       SUBJECT 7: COMPILER DESIGN
       ============================================================ */

    /* ============== CH 20: Lexer & Parser ============== */
    { id: 'gcs-c20', title: 'Lexer & Parser', icon: '🔤', sections: [
      { type: 'heading', text: 'Phases of a compiler', level: 1 },
      { type: 'image', alt: 'compiler phases', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Compiler phases (front → back)</text>
  <g font-family="Nunito" font-weight="bold" font-size="11" fill="white">
    <rect x="20"  y="60" width="80" height="80" fill="#ff4b4b" rx="6"/>
    <text x="60"  y="95" text-anchor="middle">Lexer</text>
    <text x="60"  y="115" text-anchor="middle" font-size="10">tokens</text>
    <rect x="115" y="60" width="80" height="80" fill="#ff9600" rx="6"/>
    <text x="155" y="95" text-anchor="middle">Parser</text>
    <text x="155" y="115" text-anchor="middle" font-size="10">parse tree</text>
    <rect x="210" y="60" width="90" height="80" fill="#ffd900" rx="6"/>
    <text x="255" y="90" text-anchor="middle" fill="#333">Semantic</text>
    <text x="255" y="105" text-anchor="middle" fill="#333" font-size="10">analyser</text>
    <rect x="315" y="60" width="80" height="80" fill="#58cc02" rx="6"/>
    <text x="355" y="90" text-anchor="middle">IR gen</text>
    <text x="355" y="105" text-anchor="middle" font-size="10">TAC</text>
    <rect x="410" y="60" width="80" height="80" fill="#1cb0f6" rx="6"/>
    <text x="450" y="90" text-anchor="middle">Optimise</text>
    <text x="450" y="105" text-anchor="middle" font-size="10">IR → IR</text>
    <rect x="505" y="60" width="80" height="80" fill="#7c4dff" rx="6"/>
    <text x="545" y="90" text-anchor="middle">Codegen</text>
    <text x="545" y="105" text-anchor="middle" font-size="10">asm</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Lexical analysis', level: 1 },
      { type: 'para', html: 'The <strong>lexer</strong> reads characters and emits <strong>tokens</strong> (keyword, identifier, number, operator, …). It strips whitespace and comments. Implemented via DFA generated from regular expressions (lex/flex).' },
      { type: 'heading', text: 'Symbol table', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Stores identifier info: name, type, scope, address',
        'Hash table or balanced BST under the hood',
        'Scope handling via stack of tables'
      ]},
      { type: 'heading', text: 'Top-down parsing', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Recursive descent</strong>: one function per non-terminal',
        '<strong>LL(1)</strong>: predictive, table-driven, no backtracking, needs FIRST/FOLLOW',
        'Requires grammar with no left recursion and left factoring'
      ]},
      { type: 'heading', text: 'FIRST & FOLLOW', level: 2 },
      { type: 'code', lang: 'math', code:
`FIRST(α) = set of terminals that begin strings derived from α (ε included if α ⇒* ε)

FOLLOW(A) = set of terminals that can appear right after A
            ($ is in FOLLOW(S) for start symbol S)

LL(1) table cell M[A, a] uses production A → α whenever a ∈ FIRST(α);
if ε ∈ FIRST(α), also for every b ∈ FOLLOW(A).` },
      { type: 'callout', kind: 'warn', html: 'A grammar is LL(1) iff for every A → α | β: FIRST(α) ∩ FIRST(β) = ∅, and if ε ∈ FIRST(α) then FIRST(β) ∩ FOLLOW(A) = ∅.' },
      { type: 'heading', text: 'Removing left recursion', level: 2 },
      { type: 'code', lang: 'math', code:
`A → A α | β       (left recursive)
becomes:
A  → β A'
A' → α A' | ε` },
      { type: 'heading', text: 'Bottom-up parsing', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Shift-reduce</strong>: shift tokens onto stack, reduce by RHS of a production',
        '<strong>LR(0)</strong>: simplest, weakest',
        '<strong>SLR(1)</strong>: LR(0) + FOLLOW set look-ahead',
        '<strong>LALR(1)</strong>: merges look-ahead states; what yacc/bison uses',
        '<strong>LR(1)</strong>: most powerful canonical, biggest table'
      ]},
      { type: 'heading', text: 'Power hierarchy', level: 2 },
      { type: 'code', lang: 'math', code:
`LL(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ LR(1) ⊂ LR(k)
LL(1)  ⊂ LALR(1)
Every LL(1) grammar is LR(1); not vice versa.` },
      { type: 'heading', text: 'Conflicts', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Shift-reduce</strong>: ambiguous whether to shift or reduce (classic: dangling else)',
        '<strong>Reduce-reduce</strong>: two reductions both possible',
        'Resolved via precedence/associativity declarations or grammar refactoring'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> If a grammar is ambiguous, it cannot be LL(k) or LR(k) for any k. But ambiguous grammars can sometimes be handled by yacc with precedence rules.' }
    ]},

    /* ============== CH 21: SDT & Codegen ============== */
    { id: 'gcs-c21', title: 'SDT & Codegen', icon: '⚙️', sections: [
      { type: 'heading', text: 'Syntax-directed translation', level: 1 },
      { type: 'para', html: '<strong>SDT</strong> attaches semantic actions to grammar rules. Two flavours of attributes: <strong>synthesised</strong> (computed bottom-up) and <strong>inherited</strong> (passed top-down).' },
      { type: 'heading', text: 'S-attributed & L-attributed', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>S-attributed</strong>: only synthesised attributes. Always evaluable in bottom-up (LR) parsing.',
        '<strong>L-attributed</strong>: synthesised + inherited from left siblings or parent. Works in LL parsing.'
      ]},
      { type: 'heading', text: 'Example SDT', level: 2 },
      { type: 'code', lang: 'math', code:
`E → E1 + T   { E.val = E1.val + T.val }
E → T        { E.val = T.val }
T → T1 * F   { T.val = T1.val * F.val }
T → F        { T.val = F.val }
F → ( E )    { F.val = E.val }
F → num      { F.val = num.val }` },
      { type: 'heading', text: 'Three-address code (TAC)', level: 1 },
      { type: 'code', lang: 'math', code:
`x = y op z
x = op y
x = y
goto L
if x relop y goto L
param x
call p, n
return y
x = a[i]
a[i] = x` },
      { type: 'heading', text: 'TAC for a = (b+c)*(b−c)', level: 2 },
      { type: 'code', lang: 'math', code:
`t1 = b + c
t2 = b − c
t3 = t1 * t2
a  = t3` },
      { type: 'callout', kind: 'info', html: 'TAC representations: quadruples (op, arg1, arg2, result), triples (no explicit temp), indirect triples. Quadruples are easiest for optimisation since temp renaming is cheap.' },
      { type: 'heading', text: 'Activation records (stack frames)', level: 1 },
      { type: 'list', kind: 'check', items: [
        'Return value (sometimes in register)',
        'Actual parameters',
        'Control link (caller\'s frame pointer)',
        'Access link (for non-local references)',
        'Saved machine state',
        'Local variables',
        'Temporaries'
      ]},
      { type: 'heading', text: 'Parameter passing', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Call by value</strong>: copy in',
        '<strong>Call by reference</strong>: pass address',
        '<strong>Call by name</strong> (Algol): textual substitution / thunk',
        '<strong>Call by value-result</strong> (copy in / copy out)'
      ]},
      { type: 'heading', text: 'Basic blocks & flow graph', level: 1 },
      { type: 'para', html: 'A <strong>basic block</strong> is a maximal sequence of instructions with single entry (top) and single exit (bottom). The control-flow graph (CFG) has blocks as nodes and jumps as edges. Most optimisations work block-by-block.' },
      { type: 'heading', text: 'Common optimisations', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Constant folding & propagation',
        'Common sub-expression elimination',
        'Dead code elimination',
        'Loop-invariant code motion',
        'Strength reduction (x*2 → x+x)',
        'Inlining, tail-call optimisation, register allocation (graph colouring)'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Peephole optimisation works on a small sliding window of generated code. Common targets: redundant loads/stores, jump chains, algebraic identities.' }
    ]},

    /* ============================================================
       SUBJECT 8: OPERATING SYSTEMS
       ============================================================ */

    /* ============== CH 22: Processes & Scheduling ============== */
    { id: 'gcs-c22', title: 'Processes & Scheduling', icon: '⏱️', sections: [
      { type: 'heading', text: 'Process vs thread', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Process</strong>: own address space, own resources, expensive context switch',
        '<strong>Thread</strong>: shares process memory, cheap to create/switch',
        'PCB stores PID, state, PC, registers, memory map, open files'
      ]},
      { type: 'heading', text: 'Process states', level: 2 },
      { type: 'list', kind: 'check', items: [
        'New → Ready → Running → Waiting → Ready → Running → Terminated',
        'Preemption: Running → Ready (timer / higher-priority arrives)',
        'I/O wait: Running → Waiting'
      ]},
      { type: 'heading', text: 'Scheduling — key metrics', level: 1 },
      { type: 'code', lang: 'math', code:
`Turnaround time  TAT = completion − arrival
Waiting time     WT  = TAT − burst
Response time    RT  = first run − arrival
Throughput  : processes completed / time
CPU utilisation: % time CPU busy` },
      { type: 'heading', text: 'FCFS', level: 1 },
      { type: 'para', html: 'First Come, First Served. Non-preemptive. Simple but suffers from <strong>convoy effect</strong>: short processes wait behind long ones.' },
      { type: 'heading', text: 'SJF — Shortest Job First', level: 1 },
      { type: 'para', html: 'Pick the process with the smallest burst time. <strong>Optimal</strong> for minimising average waiting time. But requires knowing burst times (typically estimated by exponential averaging).' },
      { type: 'heading', text: 'SRTF — preemptive SJF', level: 2 },
      { type: 'para', html: 'On every new arrival, compare remaining time of running process with new\'s burst — switch if new is shorter. Lower average WT than SJF but more context switches.' },
      { type: 'heading', text: 'Round Robin (RR)', level: 1 },
      { type: 'para', html: 'Each process gets a time quantum q; preempted at quantum end and added to the rear of the ready queue. Fair, good response time. q too small → too many switches. q too large → behaves like FCFS.' },
      { type: 'heading', text: 'Priority scheduling', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Pick highest priority process',
        '<strong>Starvation risk</strong> — low priority may never run',
        'Solution: <strong>aging</strong> (gradually raise priority)'
      ]},
      { type: 'heading', text: 'Worked example: SRTF', level: 2 },
      { type: 'code', lang: 'math', code:
`Process  Arrival  Burst
P1       0        8
P2       1        4
P3       2        9
P4       3        5

Gantt (SRTF): P1 0-1 | P2 1-5 | P4 5-10 | P1 10-17 | P3 17-26
WT: P1 = 9, P2 = 0, P4 = 2, P3 = 15
Avg WT = (9+0+2+15)/4 = 6.5` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> SJF is optimal among non-preemptive schedules; SRTF is optimal among preemptive. Both for AVERAGE waiting time only.' },
      { type: 'heading', text: 'Multilevel queues', level: 2 },
      { type: 'para', html: 'Separate queues for foreground / background; each with own algorithm. <strong>MLFQ</strong> (multi-level feedback) lets processes migrate between queues based on observed behaviour.' },
      { type: 'heading', text: 'Context switch cost', level: 2 },
      { type: 'para', html: 'Save state of current process (registers, PC, PCB), load state of next. Pure overhead — no useful work. Threads switch faster than processes (no memory map change).' }
    ]},

    /* ============== CH 23: Concurrency & Deadlock ============== */
    { id: 'gcs-c23', title: 'Concurrency & Deadlock', icon: '🔒', sections: [
      { type: 'heading', text: 'Race conditions', level: 1 },
      { type: 'para', html: 'When the outcome depends on interleaving of concurrent threads accessing shared data. The fix: <strong>mutual exclusion</strong> over the <strong>critical section</strong>.' },
      { type: 'heading', text: 'Requirements for a correct CS solution', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Mutual exclusion</strong>: at most one in CS',
        '<strong>Progress</strong>: if no one is in CS, only contenders decide',
        '<strong>Bounded waiting</strong>: bounded number of times others can enter before me'
      ]},
      { type: 'heading', text: 'Semaphores', level: 1 },
      { type: 'code', lang: 'c', code:
`<span class="fn">wait</span>(S):  <span class="kw">while</span> (S &lt;= <span class="num">0</span>);  S--;
<span class="fn">signal</span>(S):  S++;

<span class="com">// Binary semaphore (mutex): S ∈ {0, 1}
// Counting semaphore: S ∈ ℤ⁺</span>` },
      { type: 'heading', text: 'Producer-consumer (bounded buffer)', level: 2 },
      { type: 'code', lang: 'c', code:
`semaphore empty = N, full = 0, mutex = 1;

producer:                consumer:
  wait(empty);             wait(full);
  wait(mutex);             wait(mutex);
  put_item();              take_item();
  signal(mutex);           signal(mutex);
  signal(full);            signal(empty);` },
      { type: 'callout', kind: 'warn', html: 'Order matters! <code>wait(mutex)</code> BEFORE <code>wait(empty)</code> can deadlock: consumer holding mutex waits for full, producer blocked at wait(mutex).' },
      { type: 'heading', text: 'Mutex vs spinlock vs monitor', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Mutex</strong>: ownership + blocking',
        '<strong>Spinlock</strong>: busy-wait, fine for very short CS in kernel',
        '<strong>Monitor</strong>: high-level construct (Java <code>synchronized</code>) with condition variables'
      ]},
      { type: 'heading', text: 'Deadlock — Coffman conditions', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Mutual exclusion</strong>: resources held exclusively',
        '<strong>Hold and wait</strong>: holding some, requesting more',
        '<strong>No preemption</strong>: can\'t forcibly take resources',
        '<strong>Circular wait</strong>: cycle in wait-for graph'
      ]},
      { type: 'callout', kind: 'info', html: 'All 4 must hold simultaneously for deadlock. Break any one → no deadlock. Most practical: impose a global ordering on resources (breaks circular wait).' },
      { type: 'heading', text: 'Strategies', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Prevention</strong>: design so condition can\'t hold',
        '<strong>Avoidance</strong>: dynamically refuse unsafe requests (Banker\'s)',
        '<strong>Detection + recovery</strong>: build resource graph, find cycle, kill/rollback',
        '<strong>Ignore</strong> (the "ostrich algorithm") — Unix\'s pragmatic choice'
      ]},
      { type: 'heading', text: 'Banker\'s algorithm', level: 1 },
      { type: 'code', lang: 'math', code:
`Given Need = Max − Allocation, and Available
A state is SAFE if a sequence (safe sequence) exists:
  Find process p with Need[p] ≤ Available
  Pretend p finishes: Available += Allocation[p]
  Repeat until all processes finish or stuck` },
      { type: 'heading', text: 'Banker\'s worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`Resources A B C   Available = 3 3 2
        Alloc      Max      Need
P0     0 1 0     7 5 3    7 4 3
P1     2 0 0     3 2 2    1 2 2
P2     3 0 2     9 0 2    6 0 0
P3     2 1 1     2 2 2    0 1 1
P4     0 0 2     4 3 3    4 3 1
Safe sequence: P1 → P3 → P4 → P0 → P2  ✓` },
      { type: 'heading', text: 'Classic problems', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Dining philosophers — circular wait potential',
        'Readers-writers — favour readers / writers / fair',
        'Sleeping barber — bounded waiting room',
        'Cigarette smokers'
      ]}
    ]},

    /* ============== CH 24: Memory Management ============== */
    { id: 'gcs-c24', title: 'Memory Management', icon: '💾', sections: [
      { type: 'heading', text: 'Address binding', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Compile time</strong>: absolute addresses baked in',
        '<strong>Load time</strong>: relocatable code',
        '<strong>Execution time</strong>: MMU translates virtual ↔ physical (modern systems)'
      ]},
      { type: 'heading', text: 'Paging', level: 1 },
      { type: 'image', alt: 'paging', svg:
`<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:540px;display:block;margin:0 auto;">
  <rect width="540" height="220" fill="#fafafa" rx="8"/>
  <text x="270" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">Paging — virtual → physical</text>
  <g font-family="JetBrains Mono" font-size="11">
    <rect x="20"  y="50" width="120" height="40" fill="#1cb0f6"/>
    <text x="80"  y="75" text-anchor="middle" fill="white" font-weight="bold">Page #</text>
    <rect x="140" y="50" width="80" height="40" fill="#58cc02"/>
    <text x="180" y="75" text-anchor="middle" fill="white" font-weight="bold">Offset</text>
    <text x="125" y="105" text-anchor="middle" fill="#666">virtual address</text>
    <rect x="270" y="50" width="100" height="100" fill="#7c4dff" rx="4" opacity="0.85"/>
    <text x="320" y="100" text-anchor="middle" fill="white" font-weight="bold" font-size="12">Page table</text>
    <line x1="220" y1="70" x2="270" y2="70" stroke="#333" stroke-width="2"/>
    <line x1="370" y1="100" x2="420" y2="100" stroke="#333" stroke-width="2"/>
    <rect x="420" y="50" width="100" height="40" fill="#1cb0f6"/>
    <text x="470" y="75" text-anchor="middle" fill="white" font-weight="bold">Frame #</text>
    <rect x="420" y="90" width="100" height="40" fill="#58cc02"/>
    <text x="470" y="115" text-anchor="middle" fill="white" font-weight="bold">Offset</text>
    <text x="470" y="145" text-anchor="middle" fill="#666">physical address</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Paging formulas', level: 2 },
      { type: 'code', lang: 'math', code:
`Page size = 2^k bytes ⇒ offset = k bits
Virtual address bits  = (#page bits) + (#offset bits)
Page table entries    = 2^(#page bits)
Internal fragmentation: average page/2 per process

EAT (single-level, no TLB) = 2 · access (table look-up + data fetch)
With TLB hit ratio h:
  EAT = h · (T_TLB + T_mem) + (1−h) · (T_TLB + 2·T_mem)` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Multi-level page tables save space because intermediate levels need only entries that are actually mapped (sparse).' },
      { type: 'heading', text: 'Segmentation', level: 1 },
      { type: 'para', html: 'Memory divided into logical <em>segments</em> (code, data, stack) of variable size. Each access = (segment, offset). Suffers from <strong>external fragmentation</strong>. Combined segmentation + paging gets the best of both.' },
      { type: 'heading', text: 'TLB', level: 2 },
      { type: 'para', html: 'Translation Lookaside Buffer — a small (32-256 entries) fully-associative cache of recent page table entries. With high hit ratio (often 95%+), paging overhead becomes negligible.' },
      { type: 'heading', text: 'Page faults & replacement', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>FIFO</strong> — replace oldest page (Belady\'s anomaly!)',
        '<strong>LRU</strong> — least recently used',
        '<strong>OPT</strong> — replace page that won\'t be used longest (theoretical best)',
        '<strong>Clock (second chance)</strong> — approximation of LRU, low overhead',
        '<strong>NFU / LFU</strong> — least frequently used'
      ]},
      { type: 'heading', text: 'Belady\'s anomaly', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Increasing the number of frames can <em>increase</em> page faults under FIFO! LRU and OPT are stack algorithms and never exhibit this anomaly.' },
      { type: 'heading', text: 'Worked: LRU vs FIFO', level: 2 },
      { type: 'code', lang: 'math', code:
`Reference: 7 0 1 2 0 3 0 4 2 3 0 3 2
3 frames:
FIFO faults: 7 0 1 2 0 3 0 4 2 3 0 3 2  →  9 faults
LRU  faults:                              →  10 faults
OPT  faults:                              →  7 faults` },
      { type: 'heading', text: 'Thrashing', level: 2 },
      { type: 'para', html: 'When a system spends more time paging than executing. Detect via high page-fault rate. Fix: reduce multiprogramming, working-set model (track pages in last Δ accesses).' },
      { type: 'heading', text: 'Demand paging', level: 2 },
      { type: 'para', html: 'Load pages only on first access (page fault). Reduces start-up cost, gives effective memory > physical.' }
    ]},

    /* ============== CH 25: File Systems ============== */
    { id: 'gcs-c25', title: 'File Systems', icon: '📁', sections: [
      { type: 'heading', text: 'Files & directories', level: 1 },
      { type: 'para', html: 'A <strong>file</strong> is a named, persistent collection of bytes. A <strong>directory</strong> maps names to file identifiers. Directory structures: single-level, two-level, tree, DAG (links), graph (with cycles).' },
      { type: 'heading', text: 'File operations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'create, delete, open, close, read, write, seek',
        'Append-only, sequential, random access',
        'Metadata: owner, permissions, timestamps, size'
      ]},
      { type: 'heading', text: 'Allocation methods', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Contiguous</strong>: simple, fast random access, external fragmentation, hard to grow',
        '<strong>Linked</strong>: blocks chained via pointers, no fragmentation, slow random access (FAT)',
        '<strong>Indexed</strong>: index block lists data blocks (inode), supports random access (Unix)'
      ]},
      { type: 'heading', text: 'Inode structure (UNIX)', level: 2 },
      { type: 'code', lang: 'math', code:
`Inode:
  metadata (perms, owner, size, times)
  12 direct block pointers
  1 single-indirect (block of pointers)
  1 double-indirect (block of blocks of pointers)
  1 triple-indirect (...)

For 4 KB blocks, 4-byte pointers:
  direct       12 ·   4K = 48 KB
  single ind.  1K ·   4K =  4 MB
  double       1K · 1K · 4K =  4 GB
  triple       1K · 1K · 1K · 4K =  4 TB` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Number of disk accesses to read a specific byte depends on whether the block address lies in direct (1 access), single-indirect (2), double-indirect (3), or triple (4).' },
      { type: 'heading', text: 'Free space management', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Bitmap</strong>: 1 bit per block; simple, fits in cache for typical sizes',
        '<strong>Free list</strong>: chained free blocks; slow to find contiguous space',
        '<strong>Grouping / counting</strong>: speeds up sequential allocation'
      ]},
      { type: 'heading', text: 'Disk scheduling', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>FCFS</strong>: fair, possibly high seek',
        '<strong>SSTF</strong> (shortest seek): low seek, possible starvation',
        '<strong>SCAN / LOOK</strong>: elevator algorithm',
        '<strong>C-SCAN / C-LOOK</strong>: circular, more uniform wait'
      ]},
      { type: 'heading', text: 'Worked example — disk seek', level: 2 },
      { type: 'code', lang: 'math', code:
`Head at 50; requests: 95, 180, 34, 119, 11, 123, 62, 64
SSTF order: 50→62→64→34→11→95→119→123→180
Total seek: 12+2+30+23+84+24+4+57 = 236 cyl` }
    ]},

    /* ============================================================
       SUBJECT 9: DATABASES
       ============================================================ */

    /* ============== CH 26: ER & Relational Model ============== */
    { id: 'gcs-c26', title: 'ER & Relational Model', icon: '🗃️', sections: [
      { type: 'heading', text: 'Entities, attributes, relationships', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Entity</strong>: real-world thing — Student, Book',
        '<strong>Attribute</strong>: property — name, age',
        '<strong>Relationship</strong>: association — Student <em>enrolls</em> Course',
        '<strong>Weak entity</strong>: needs a strong entity for identification — Dependent → Employee'
      ]},
      { type: 'heading', text: 'Attribute kinds', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Simple</strong> vs <strong>composite</strong> (name = first + last)',
        '<strong>Single-valued</strong> vs <strong>multi-valued</strong> (phone numbers)',
        '<strong>Derived</strong> (age from DOB)',
        '<strong>Key</strong> attribute (uniquely identifies)'
      ]},
      { type: 'heading', text: 'Sample ER diagram', level: 2 },
      { type: 'image', alt: 'ER diagram', svg:
`<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="220" fill="#fafafa" rx="8"/>
  <text x="260" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">Student—Enrolls—Course (M:N)</text>
  <rect x="40" y="80" width="120" height="60" fill="#1cb0f6"/>
  <text x="100" y="115" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Student</text>
  <polygon points="220,80 290,110 220,140 150,110" fill="#ff9600"/>
  <text x="220" y="115" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito" font-size="11">Enrolls</text>
  <rect x="320" y="80" width="120" height="60" fill="#1cb0f6"/>
  <text x="380" y="115" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Course</text>
  <line x1="160" y1="110" x2="220" y2="110" stroke="#333" stroke-width="2"/>
  <line x1="290" y1="110" x2="320" y2="110" stroke="#333" stroke-width="2"/>
  <text x="170" y="100" font-family="Nunito" font-size="11" fill="#333">M</text>
  <text x="305" y="100" font-family="Nunito" font-size="11" fill="#333">N</text>
</svg>` },
      { type: 'heading', text: 'Cardinality constraints', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>1:1</strong> — Person — has-passport — Passport',
        '<strong>1:M</strong> — Department — has — Employees',
        '<strong>M:1</strong> — Employees — belongs-to — Department',
        '<strong>M:N</strong> — Students — enrolled-in — Courses'
      ]},
      { type: 'heading', text: 'Participation', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Total</strong>: every entity must participate (double line)',
        '<strong>Partial</strong>: optional participation'
      ]},
      { type: 'heading', text: 'ER → Relational', level: 1 },
      { type: 'list', kind: 'number', items: [
        'Each strong entity → table with its attributes; PK = entity\'s key',
        'Weak entity → table with PK = owner\'s PK + discriminator',
        '1:1 relationship → embed FK in one side',
        '1:M relationship → FK in the M side',
        'M:N relationship → new table with both FKs',
        'Multi-valued attribute → separate table'
      ]},
      { type: 'heading', text: 'Keys', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Super key</strong>: any set of attributes that uniquely identifies tuples',
        '<strong>Candidate key</strong>: minimal super key',
        '<strong>Primary key</strong>: chosen candidate key (NOT NULL, unique)',
        '<strong>Alternate key</strong>: candidate key not chosen as PK',
        '<strong>Foreign key</strong>: references another table\'s PK'
      ]},
      { type: 'heading', text: 'Integrity constraints', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Entity integrity: PK ≠ NULL',
        'Referential integrity: FK matches PK or is NULL',
        'Domain: each attribute value lies in its declared domain',
        'User-defined: business rules (e.g., salary > 0)'
      ]},
      { type: 'heading', text: 'Relational algebra essentials', level: 1 },
      { type: 'code', lang: 'math', code:
`σ_c(R)         selection
π_L(R)         projection
R × S          Cartesian product
R ⋈_c S        join (theta)
R ⋈ S          natural join
R ∪ S , R ∩ S , R − S
ρ_X(R)         rename
γ_{g; agg}(R)  group / aggregation` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Division R ÷ S — "tuples in R that are related to ALL tuples in S". Implements universal quantifier: who has taken EVERY required course?' }
    ]},

    /* ============== CH 27: SQL ============== */
    { id: 'gcs-c27', title: 'SQL', icon: '📊', sections: [
      { type: 'heading', text: 'SELECT skeleton', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> col1, col2, agg
<span class="kw">FROM</span>   t1
<span class="kw">JOIN</span>   t2 <span class="kw">ON</span> t1.id = t2.fk
<span class="kw">WHERE</span>  row-level filter
<span class="kw">GROUP BY</span> grouping cols
<span class="kw">HAVING</span> group-level filter
<span class="kw">ORDER BY</span> sort cols
<span class="kw">LIMIT</span>  n` },
      { type: 'heading', text: 'Logical execution order', level: 2 },
      { type: 'list', kind: 'number', items: [
        'FROM + JOIN → produce raw row set',
        'WHERE → filter rows',
        'GROUP BY → bucket',
        'HAVING → filter buckets',
        'SELECT → pick / compute columns',
        'ORDER BY → sort',
        'LIMIT → slice'
      ]},
      { type: 'heading', text: 'JOIN flavours', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>INNER JOIN</strong>: only matching rows',
        '<strong>LEFT OUTER JOIN</strong>: all left rows; NULLs for unmatched right',
        '<strong>RIGHT OUTER JOIN</strong>: symmetric',
        '<strong>FULL OUTER JOIN</strong>: union of left and right',
        '<strong>CROSS JOIN</strong>: Cartesian product',
        '<strong>NATURAL JOIN</strong>: equi-join on same-name columns'
      ]},
      { type: 'heading', text: 'Aggregations', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> dept, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> emps, <span class="fn">AVG</span>(salary) <span class="kw">AS</span> avg_sal
<span class="kw">FROM</span>   employee
<span class="kw">GROUP BY</span> dept
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt; <span class="num">10</span>;` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> COUNT(*) counts all rows including NULLs. COUNT(col) skips NULLs. SUM/AVG ignore NULLs. NULL in arithmetic propagates (NULL + 1 = NULL).' },
      { type: 'heading', text: 'Subqueries', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Scalar</strong> in WHERE: <code>salary &gt; (SELECT AVG(salary) FROM employee)</code>',
        '<strong>IN / NOT IN</strong>: <code>id IN (SELECT eid FROM …)</code>',
        '<strong>EXISTS / NOT EXISTS</strong>: correlated; often faster',
        '<strong>Derived table</strong>: subquery in FROM with alias'
      ]},
      { type: 'heading', text: 'Set operations', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> name <span class="kw">FROM</span> a
<span class="kw">UNION</span>             <span class="com">-- distinct</span>
<span class="kw">SELECT</span> name <span class="kw">FROM</span> b;

<span class="kw">SELECT</span> ... <span class="kw">UNION ALL</span>  <span class="com">-- keeps duplicates</span>
<span class="kw">SELECT</span> ... <span class="kw">INTERSECT</span> ...
<span class="kw">SELECT</span> ... <span class="kw">EXCEPT</span>    ...   <span class="com">-- MINUS in Oracle</span>` },
      { type: 'heading', text: 'NULL semantics', level: 2 },
      { type: 'list', kind: 'check', items: [
        'NULL = NULL is UNKNOWN (not TRUE)',
        'Use <code>IS NULL</code> / <code>IS NOT NULL</code>',
        'Three-valued logic: TRUE, FALSE, UNKNOWN',
        '<code>NOT IN</code> with a NULL in the subquery returns nothing!'
      ]},
      { type: 'heading', text: 'Views & indexes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>View</strong>: stored query; security + abstraction',
        '<strong>Materialised view</strong>: stored result, refresh strategies',
        '<strong>Index</strong>: B+-tree usually, makes lookups O(log n); writes slower',
        '<strong>Composite index</strong>: order of columns matters'
      ]},
      { type: 'heading', text: 'DDL vs DML vs DCL', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'DDL: CREATE, ALTER, DROP, TRUNCATE',
        'DML: SELECT, INSERT, UPDATE, DELETE',
        'DCL: GRANT, REVOKE',
        'TCL: COMMIT, ROLLBACK, SAVEPOINT'
      ]},
      { type: 'callout', kind: 'warn', html: 'DELETE is row-by-row, logged, rollback-able. TRUNCATE is fast metadata operation, typically NOT rollback-able and resets auto-increment.' }
    ]},

    /* ============== CH 28: Normalization ============== */
    { id: 'gcs-c28', title: 'Normalization', icon: '🪜', sections: [
      { type: 'heading', text: 'Why normalise?', level: 1 },
      { type: 'para', html: 'Bad schemas suffer from <strong>insertion</strong>, <strong>deletion</strong>, and <strong>update anomalies</strong>. Normalisation systematically removes redundancy by decomposing tables based on functional dependencies (FDs).' },
      { type: 'heading', text: 'Functional dependencies (FD)', level: 1 },
      { type: 'code', lang: 'math', code:
`X → Y  means "X functionally determines Y":
  if two tuples agree on X, they agree on Y.

Armstrong axioms:
  Reflexivity   :  Y ⊆ X ⇒ X → Y
  Augmentation  :  X → Y ⇒ XZ → YZ
  Transitivity  :  X → Y, Y → Z ⇒ X → Z` },
      { type: 'heading', text: 'Closure & key derivation', level: 2 },
      { type: 'para', html: 'Compute X<sup>+</sup> (closure of X under F) by iteratively adding attributes determinable from X. K is a candidate key iff K<sup>+</sup> = all attributes and no proper subset has this property.' },
      { type: 'heading', text: '1NF', level: 1 },
      { type: 'para', html: 'Atomic values only — no multi-valued or composite attributes inside a cell.' },
      { type: 'heading', text: '2NF', level: 1 },
      { type: 'para', html: '1NF + no <strong>partial dependency</strong>: every non-prime attribute depends on the WHOLE candidate key (not just part).' },
      { type: 'heading', text: '3NF', level: 1 },
      { type: 'para', html: '2NF + no <strong>transitive dependency</strong> on a non-prime attribute. Formally: for every non-trivial FD X → A either X is a super key OR A is a prime attribute.' },
      { type: 'heading', text: 'BCNF', level: 1 },
      { type: 'para', html: 'For every non-trivial FD X → Y, X is a super key. Stricter than 3NF. Decomposition is lossless but may not be dependency-preserving.' },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> BCNF ⊆ 3NF ⊆ 2NF ⊆ 1NF. A relation in 3NF with only one candidate key is automatically in BCNF.' },
      { type: 'heading', text: 'Worked: identify highest NF', level: 2 },
      { type: 'code', lang: 'math', code:
`R(A, B, C, D), FD: A → B, B → C
Candidate key: AD  (closure {A,D}+ = ABCD)
Prime attributes: {A, D}.  Non-prime: {B, C}.
A → B  : A is not a super key, B is non-prime ⇒ NOT 3NF
       : also partial (A ⊂ AD) ⇒ NOT 2NF
Highest NF = 1NF.` },
      { type: 'heading', text: 'Lossless join & dependency preservation', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        'A decomposition R → R1, R2 is <strong>lossless</strong> iff R1 ∩ R2 is a super key of R1 or of R2',
        'Dependency preservation: the union of FDs of pieces implies the original FDs',
        'BCNF → always lossless, sometimes loses dependencies',
        '3NF → always lossless AND dependency-preserving (synthesis algorithm)'
      ]},
      { type: 'heading', text: '4NF & 5NF', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>4NF</strong>: handles multi-valued dependencies — no MVD X →→ Y unless X is super key',
        '<strong>5NF</strong> (PJNF): handles join dependencies; everything decomposes losslessly'
      ]},
      { type: 'heading', text: 'Quick test recipe', level: 2 },
      { type: 'list', kind: 'number', items: [
        'Find all candidate keys',
        'Mark prime / non-prime attributes',
        'For each FD: check if LHS is super key, RHS is prime, or both',
        'Lowest passing rule decides the NF'
      ]}
    ]},

    /* ============== CH 29: Transactions & ACID ============== */
    { id: 'gcs-c29', title: 'Transactions & ACID', icon: '🛡️', sections: [
      { type: 'heading', text: 'ACID', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Atomicity</strong>: all-or-nothing',
        '<strong>Consistency</strong>: preserves all integrity rules',
        '<strong>Isolation</strong>: concurrent txns appear serial',
        '<strong>Durability</strong>: committed changes survive crashes'
      ]},
      { type: 'heading', text: 'Transaction states', level: 2 },
      { type: 'para', html: 'Active → Partially committed → Committed (or Failed → Aborted). Schedule = sequence of operations from multiple transactions.' },
      { type: 'heading', text: 'Serial vs serializable schedules', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Serial</strong>: txns run one at a time. Always correct, but slow.',
        '<strong>Serializable</strong>: equivalent to SOME serial schedule. Goal of concurrency control.',
        '<strong>Conflict serializable</strong>: precedence graph has no cycles',
        '<strong>View serializable</strong>: weaker, harder to test (NP-hard)'
      ]},
      { type: 'heading', text: 'Conflict pairs', level: 2 },
      { type: 'code', lang: 'math', code:
`Two ops conflict if they:
  belong to different transactions,
  operate on the same data item,
  and at least one is a write.

R-R: no conflict     W-R: conflict
R-W: conflict        W-W: conflict` },
      { type: 'heading', text: 'Precedence graph', level: 2 },
      { type: 'para', html: 'Build directed graph: Ti → Tj if Ti has an op that conflicts with and precedes one from Tj. Schedule is conflict-serializable iff this graph is acyclic.' },
      { type: 'heading', text: 'Two-Phase Locking (2PL)', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Growing phase</strong>: acquire locks; cannot release',
        '<strong>Shrinking phase</strong>: release locks; cannot acquire',
        'Guarantees conflict-serializability',
        'Can deadlock'
      ]},
      { type: 'heading', text: 'Variants', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Strict 2PL</strong>: hold all X-locks until commit → no cascade',
        '<strong>Rigorous 2PL</strong>: hold ALL locks until commit',
        '<strong>Conservative 2PL</strong>: acquire all locks at start → deadlock-free, lower concurrency'
      ]},
      { type: 'heading', text: 'Deadlock detection / prevention', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Wait-die: older waits, younger dies on a request to old',
        'Wound-wait: older wounds younger',
        'Timeout-based detection',
        'Wait-for graph cycle detection'
      ]},
      { type: 'heading', text: 'Isolation levels (SQL)', level: 1 },
      { type: 'code', lang: 'math', code:
`Level             | dirty | non-rep | phantom
Read uncommitted  |  Y    |   Y    |   Y
Read committed    |  N    |   Y    |   Y
Repeatable read   |  N    |   N    |   Y
Serializable      |  N    |   N    |   N` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Phantom read = new rows matching your WHERE appear after a re-read; needs range / predicate locks to prevent.' },
      { type: 'heading', text: 'Recovery — log-based', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>WAL</strong> — write-ahead log: log first, then update',
        '<strong>Undo / Redo</strong> — depending on policy',
        'Checkpoints reduce recovery work',
        'ARIES algorithm: Analysis → Redo → Undo'
      ]},
      { type: 'heading', text: 'Optimistic concurrency control (OCC)', level: 2 },
      { type: 'para', html: 'No locks during read phase. Validate at commit; abort if conflicts found. Great when conflicts are rare (web workloads).' }
    ]},

    /* ============================================================
       SUBJECT 10: COMPUTER NETWORKS
       ============================================================ */

    /* ============== CH 30: OSI & TCP/IP ============== */
    { id: 'gcs-c30', title: 'OSI & TCP/IP', icon: '🌐', sections: [
      { type: 'heading', text: 'Two models, one idea', level: 1 },
      { type: 'image', alt: 'OSI vs TCP/IP', svg:
`<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="320" fill="#fafafa" rx="8"/>
  <text x="130" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">OSI (7 layers)</text>
  <text x="390" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">TCP/IP (4–5)</text>
  <g font-family="Nunito" font-size="12" fill="white" font-weight="bold">
    <rect x="20"  y="40"  width="220" height="32" fill="#ff4b4b"/><text x="130" y="62" text-anchor="middle">7 Application</text>
    <rect x="20"  y="74"  width="220" height="32" fill="#ff9600"/><text x="130" y="96" text-anchor="middle">6 Presentation</text>
    <rect x="20"  y="108" width="220" height="32" fill="#ffd900"/><text x="130" y="130" text-anchor="middle" fill="#333">5 Session</text>
    <rect x="20"  y="142" width="220" height="32" fill="#58cc02"/><text x="130" y="164" text-anchor="middle">4 Transport</text>
    <rect x="20"  y="176" width="220" height="32" fill="#1cb0f6"/><text x="130" y="198" text-anchor="middle">3 Network</text>
    <rect x="20"  y="210" width="220" height="32" fill="#7c4dff"/><text x="130" y="232" text-anchor="middle">2 Data Link</text>
    <rect x="20"  y="244" width="220" height="32" fill="#444"/><text x="130" y="266" text-anchor="middle">1 Physical</text>
    <rect x="280" y="40"  width="220" height="98" fill="#ff4b4b"/><text x="390" y="92" text-anchor="middle">Application</text>
    <rect x="280" y="142" width="220" height="32" fill="#58cc02"/><text x="390" y="164" text-anchor="middle">Transport</text>
    <rect x="280" y="176" width="220" height="32" fill="#1cb0f6"/><text x="390" y="198" text-anchor="middle">Internet (IP)</text>
    <rect x="280" y="210" width="220" height="66" fill="#7c4dff"/><text x="390" y="248" text-anchor="middle">Link / Physical</text>
  </g>
</svg>` },
      { type: 'heading', text: 'What each layer does', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Application</strong>: user-facing protocols (HTTP, SMTP, DNS, FTP)',
        '<strong>Presentation</strong>: encoding, encryption, compression',
        '<strong>Session</strong>: establish, manage, end conversations',
        '<strong>Transport</strong>: end-to-end delivery, ports, reliability (TCP/UDP)',
        '<strong>Network</strong>: routing across networks (IP)',
        '<strong>Data Link</strong>: framing, MAC addressing, error detection (Ethernet)',
        '<strong>Physical</strong>: bits → signals on the wire'
      ]},
      { type: 'heading', text: 'Encapsulation', level: 1 },
      { type: 'code', lang: 'math', code:
`Application data
    + Transport hdr  → Segment
    + Network hdr    → Packet (datagram)
    + Link hdr/trail → Frame
                     → Bits on the wire` },
      { type: 'heading', text: 'Switching paradigms', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Circuit switching</strong>: dedicated path (telephone). Predictable but wasteful.',
        '<strong>Packet switching</strong>: each packet independent (Internet). Efficient, variable delay.',
        '<strong>Virtual circuit</strong>: best of both — logical connection but packetised.'
      ]},
      { type: 'heading', text: 'Delays in a network', level: 1 },
      { type: 'code', lang: 'math', code:
`Total delay = Processing + Queueing + Transmission + Propagation
Transmission  = L / R       (L bits, R bps link)
Propagation   = d / s       (d metres, s m/s)
BDP (bandwidth-delay product) = R · RTT  bits in flight` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> Transmission delay depends on packet size; propagation does not. Doubling speed of light barely helps transmission; doubling bandwidth doesn\'t shrink propagation.' },
      { type: 'heading', text: 'Bandwidth & throughput', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Bandwidth = link capacity (bps)',
        'Throughput = end-to-end useful rate; ≤ min of all link bandwidths',
        'Goodput = application-visible throughput (excluding overhead)'
      ]},
      { type: 'heading', text: 'Layer mapping cheat sheet', level: 2 },
      { type: 'code', lang: 'math', code:
`Layer        | PDU      | Examples
Application  | Message  | HTTP, DNS, SMTP, FTP, SSH
Transport    | Segment  | TCP, UDP
Network      | Packet   | IPv4, IPv6, ICMP
Data Link    | Frame    | Ethernet, ARP, PPP, Wi-Fi
Physical     | Bit      | wires, fiber, radio` }
    ]},

    /* ============== CH 31: Transport Layer ============== */
    { id: 'gcs-c31', title: 'Transport Layer', icon: '📦', sections: [
      { type: 'heading', text: 'TCP vs UDP', level: 1 },
      { type: 'image', alt: 'tcp vs udp', svg:
`<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto;">
  <rect width="500" height="180" fill="#fafafa" rx="8"/>
  <text x="125" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">TCP</text>
  <text x="375" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">UDP</text>
  <rect x="20" y="40" width="210" height="120" fill="#58cc02" opacity="0.85" rx="8"/>
  <rect x="270" y="40" width="210" height="120" fill="#ff9600" opacity="0.85" rx="8"/>
  <g font-family="Nunito" font-size="11" fill="white">
    <text x="35" y="65">• Connection-oriented</text>
    <text x="35" y="85">• Reliable, ordered</text>
    <text x="35" y="105">• Flow + congestion ctl</text>
    <text x="35" y="125">• Larger header (20B)</text>
    <text x="35" y="145">• HTTP, SSH, SMTP</text>
    <text x="285" y="65">• Connectionless</text>
    <text x="285" y="85">• Best-effort delivery</text>
    <text x="285" y="105">• No flow / congestion</text>
    <text x="285" y="125">• Small header (8B)</text>
    <text x="285" y="145">• DNS, video, VoIP</text>
  </g>
</svg>` },
      { type: 'heading', text: 'TCP segment header (key fields)', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Source port, Dest port (16 bits each)',
        'Sequence number (32) — byte index of first data byte',
        'ACK number (32) — next expected byte from peer',
        'Header length, flags (SYN/ACK/FIN/RST/PSH/URG)',
        'Window size (16) — receiver\'s free buffer',
        'Checksum, urgent pointer, options'
      ]},
      { type: 'heading', text: 'Three-way handshake', level: 1 },
      { type: 'code', lang: 'math', code:
`Client                    Server
  ─SYN seq=x──────────►
                       ◄─SYN-ACK seq=y, ack=x+1─
  ─ACK ack=y+1───────►
  ▼ ESTABLISHED ▼` },
      { type: 'heading', text: 'Connection teardown', level: 2 },
      { type: 'para', html: '4-way: FIN, ACK, FIN, ACK. Either side can initiate. TIME_WAIT (2·MSL) holds the socket to handle delayed segments.' },
      { type: 'heading', text: 'Reliable transfer — ARQ', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Stop-and-wait</strong>: send 1, wait ACK. Window = 1, throughput = L / (L/R + 2·d/s).',
        '<strong>Go-Back-N</strong>: window N, cumulative ACKs, retransmit from lost segment',
        '<strong>Selective repeat</strong>: window N, individual ACKs, only retransmit lost ones'
      ]},
      { type: 'heading', text: 'Sliding window formulas', level: 2 },
      { type: 'code', lang: 'math', code:
`Sender window:
  GBN : N
  SR  : N    Receiver window: SR = N, GBN = 1

Sequence number space:
  GBN : ≥ N + 1
  SR  : ≥ 2 N

Utilisation (no errors):
  U = (W · L/R) / (L/R + 2·d/s)
    = W / (1 + 2a)        where a = (d/s)/(L/R)` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> If SR has m sequence-number bits, window size ≤ 2<sup>m−1</sup>. GBN allows up to 2<sup>m</sup> − 1.' },
      { type: 'heading', text: 'TCP congestion control', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>Slow start</strong>: cwnd doubles every RTT (exponential) until ssthresh',
        '<strong>Congestion avoidance</strong>: cwnd += 1 per RTT (linear / AIMD)',
        '<strong>Fast retransmit</strong>: 3 dup ACKs → resend immediately',
        '<strong>Fast recovery</strong>: cwnd = ssthresh + 3, then linear',
        'Timeout → ssthresh = cwnd/2, cwnd = 1 MSS'
      ]},
      { type: 'heading', text: 'Flow control', level: 2 },
      { type: 'para', html: 'TCP receiver advertises rwnd (free buffer). Sender never sends more than min(cwnd, rwnd). Prevents fast sender from drowning slow receiver.' },
      { type: 'heading', text: 'Worked: BDP & window', level: 2 },
      { type: 'code', lang: 'math', code:
`Link 1 Gbps, RTT 100 ms
BDP = 10⁹ · 0.1 = 10⁸ bits = 12.5 MB
TCP needs window ≥ 12.5 MB to saturate the link.
Standard 16-bit window field caps at 64 KB → need window scaling option.` }
    ]},

    /* ============== CH 32: Network Layer ============== */
    { id: 'gcs-c32', title: 'Network Layer', icon: '🗺️', sections: [
      { type: 'heading', text: 'IPv4 addressing', level: 1 },
      { type: 'code', lang: 'math', code:
`32 bits, dotted-decimal:  192.168.1.42
Address = network part + host part
Classes (legacy):
  A: 1.0.0.0   – 126.x.x.x   /8
  B: 128.0.0.0 – 191.x.x.x   /16
  C: 192.0.0.0 – 223.x.x.x   /24
  D: 224–239   multicast
  E: 240–255   reserved` },
      { type: 'heading', text: 'CIDR & subnetting', level: 1 },
      { type: 'code', lang: 'math', code:
`a.b.c.d / N    →   N network bits, 32-N host bits
Subnet mask    →   N ones then zeros
Hosts per subnet = 2^(32-N) − 2     (subtract network + broadcast)

Example: 192.168.10.0/26
  Mask = 255.255.255.192
  Block size = 64 ⇒ subnets at .0, .64, .128, .192
  Each has 62 usable hosts.` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> /30 has only 2 usable hosts — perfect for point-to-point links. /31 (RFC 3021) reuses both addresses on point-to-point.' },
      { type: 'heading', text: 'Worked: subnetting', level: 2 },
      { type: 'code', lang: 'math', code:
`Given 200.10.10.0/24, need 4 equal subnets.
4 subnets ⇒ 2 extra bits ⇒ /26, mask 255.255.255.192
Subnet IDs: .0, .64, .128, .192
Each has 62 usable hosts.` },
      { type: 'heading', text: 'IPv4 header (essentials)', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Version (4), IHL (header length), Type of Service, Total length',
        'Identification, flags, fragment offset (fragmentation)',
        'TTL (decrement at each router; 0 → discard + ICMP)',
        'Protocol (6 = TCP, 17 = UDP, 1 = ICMP)',
        'Header checksum (only header)',
        'Source IP, Dest IP'
      ]},
      { type: 'heading', text: 'Fragmentation', level: 2 },
      { type: 'code', lang: 'math', code:
`MTU smaller than packet → fragment
Each fragment: same ID, MF flag (More Fragments), offset in 8-byte units
Reassemble only at destination` },
      { type: 'heading', text: 'IPv6 — the upgrade', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '128-bit addresses → 3.4 × 10³⁸',
        'Fixed 40-byte header, extension headers chained',
        'No header checksum (relies on upper layer)',
        'No fragmentation at routers — source does Path MTU Discovery',
        'Built-in IPsec'
      ]},
      { type: 'heading', text: 'Routing — overview', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Static</strong>: manual',
        '<strong>Dynamic</strong>: protocols share reachability',
        '<strong>Intra-AS</strong>: RIP (distance vector), OSPF (link state)',
        '<strong>Inter-AS</strong>: BGP (path vector)'
      ]},
      { type: 'heading', text: 'Distance vector (RIP)', level: 2 },
      { type: 'code', lang: 'math', code:
`Each router knows distance to neighbours.
Periodically: send entire vector to neighbours.
Update: D(x→y) = min over neighbours n of (c(x,n) + D(n→y))
Max hop = 15 (16 = ∞) ⇒ small networks only.
Suffers count-to-infinity problem.` },
      { type: 'heading', text: 'Link state (OSPF)', level: 2 },
      { type: 'code', lang: 'math', code:
`Flood link-state advertisements (LSAs) to all routers.
Each router builds full topology.
Run Dijkstra → SPF tree.
Faster convergence, more CPU/memory.` },
      { type: 'heading', text: 'BGP — gluing the Internet', level: 2 },
      { type: 'para', html: 'Path-vector protocol between Autonomous Systems. eBGP across ASes, iBGP within. Policy-driven — chooses paths based on local preference, AS-path length, MED, IGP metric, ID.' }
    ]},

    /* ============== CH 33: Application Layer ============== */
    { id: 'gcs-c33', title: 'Application Layer', icon: '🌍', sections: [
      { type: 'heading', text: 'HTTP', level: 1 },
      { type: 'para', html: 'HyperText Transfer Protocol — stateless, request/response. Built on TCP (HTTP/1, 2) or QUIC/UDP (HTTP/3). Default ports 80 (HTTP), 443 (HTTPS).' },
      { type: 'heading', text: 'HTTP methods', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>GET</strong>: retrieve (idempotent, safe)',
        '<strong>POST</strong>: create / submit',
        '<strong>PUT</strong>: replace (idempotent)',
        '<strong>PATCH</strong>: partial update',
        '<strong>DELETE</strong>: remove (idempotent)',
        '<strong>HEAD</strong>: like GET, headers only',
        '<strong>OPTIONS</strong>: capability query'
      ]},
      { type: 'heading', text: 'Status code ranges', level: 1 },
      { type: 'code', lang: 'math', code:
`1xx informational
2xx success         200 OK, 201 Created, 204 No Content
3xx redirection     301 Moved, 304 Not Modified
4xx client error    400 Bad Req, 401 Unauthorized, 403 Forbidden,
                    404 Not Found, 429 Too Many Requests
5xx server error    500 Internal, 502 Bad Gateway, 503 Unavailable` },
      { type: 'callout', kind: 'tip', html: '<strong>GATE trick:</strong> 401 = "you didn\'t authenticate" (try again with credentials). 403 = "you authenticated but aren\'t allowed".' },
      { type: 'heading', text: 'DNS', level: 1 },
      { type: 'para', html: 'Domain Name System — hierarchical, distributed database mapping names to IPs (and more). Default port 53. UDP for most queries, TCP for zone transfers / large responses.' },
      { type: 'heading', text: 'DNS resolution flow', level: 2 },
      { type: 'list', kind: 'number', items: [
        'Local resolver checks cache',
        'If miss, query root server → returns TLD server',
        'TLD server → authoritative server for the domain',
        'Authoritative server returns the A / AAAA record',
        'Resolver caches and returns to client'
      ]},
      { type: 'heading', text: 'DNS record types', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>A</strong> — IPv4 address',
        '<strong>AAAA</strong> — IPv6 address',
        '<strong>CNAME</strong> — alias to another name',
        '<strong>MX</strong> — mail exchanger',
        '<strong>NS</strong> — name server',
        '<strong>TXT</strong> — text (SPF, DKIM, verification)'
      ]},
      { type: 'heading', text: 'Email — SMTP / POP / IMAP', level: 1 },
      { type: 'list', kind: 'check', items: [
        '<strong>SMTP</strong>: push email between servers (port 25 / 587)',
        '<strong>POP3</strong>: pull email, usually delete after download (110)',
        '<strong>IMAP</strong>: keep email on server, sync folders (143)',
        'TLS variants: SMTPS 465, IMAPS 993, POP3S 995'
      ]}
    ]}

  ]
});

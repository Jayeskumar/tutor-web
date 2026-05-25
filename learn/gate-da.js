LEARN('gate-da', {
  intro: 'Crack GATE Data Science & AI — probability, linear algebra, calculus, algorithms, databases, machine learning, AI, and deep learning, all with visualizations, worked examples, and exam-style formulas.',
  chapters: [

    /* ============== CH 1: Probability Fundamentals ============== */
    { id: 'gda-c1', title: 'Probability Fundamentals', icon: '🎲', sections: [
      { type: 'heading', text: 'What is probability?', level: 1 },
      { type: 'para', html: '<strong>Probability</strong> quantifies how likely an event is, on a scale from <code>0</code> (impossible) to <code>1</code> (certain). It is the language used by statistics, machine learning, and AI to reason under uncertainty.' },
      { type: 'callout', kind: 'info', html: 'In GATE DA, expect at least <strong>2-3 marks</strong> from elementary probability — conditional probability, Bayes, and independence are favourites.' },

      { type: 'heading', text: 'Sample space and events', level: 2 },
      { type: 'para', html: 'A <strong>sample space</strong> <code>Ω</code> is the set of all possible outcomes of a random experiment. An <strong>event</strong> is any subset of <code>Ω</code>.' },
      { type: 'list', kind: 'bullet', items: [
        'Toss a coin: <code>Ω = {H, T}</code>',
        'Roll a die: <code>Ω = {1, 2, 3, 4, 5, 6}</code>',
        'Two coins: <code>Ω = {HH, HT, TH, TT}</code>',
        'Event "even die roll": <code>E = {2, 4, 6}</code>'
      ]},
      { type: 'image', alt: 'sample space venn diagram', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <rect x="40" y="30" width="520" height="160" rx="8" fill="#fff" stroke="#444" stroke-width="2"/>
  <text x="55" y="50" font-family="Nunito" font-weight="bold" font-size="14">Ω  (sample space)</text>
  <circle cx="220" cy="120" r="60" fill="#7c4dff" fill-opacity="0.35" stroke="#5e35d5" stroke-width="2"/>
  <text x="220" y="125" text-anchor="middle" font-family="Nunito" font-weight="bold">A</text>
  <circle cx="360" cy="120" r="60" fill="#1cb0f6" fill-opacity="0.35" stroke="#0e88c8" stroke-width="2"/>
  <text x="360" y="125" text-anchor="middle" font-family="Nunito" font-weight="bold">B</text>
  <text x="290" y="125" text-anchor="middle" font-family="Nunito" font-size="11" fill="#222">A ∩ B</text>
</svg>` },

      { type: 'heading', text: 'Three axioms of probability', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Non-negativity:</strong> <code>P(A) ≥ 0</code> for every event A',
        '<strong>Normalisation:</strong> <code>P(Ω) = 1</code>',
        '<strong>Additivity:</strong> if A and B are disjoint, <code>P(A ∪ B) = P(A) + P(B)</code>'
      ]},

      { type: 'heading', text: 'Inclusion-Exclusion (any two events)', level: 2 },
      { type: 'code', lang: 'math', code:
`P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
P(A ∪ B ∪ C) = P(A)+P(B)+P(C) − P(AB) − P(BC) − P(CA) + P(ABC)` },
      { type: 'callout', kind: 'tip', html: 'For three or more sets, alternate signs: <em>singles +, pairs −, triples +, …</em>' },

      { type: 'heading', text: 'Worked example — die roll', level: 2 },
      { type: 'para', html: 'Roll a fair die. Let <code>A</code> = "even" and <code>B</code> = "≥ 4". Find <code>P(A ∪ B)</code>.' },
      { type: 'code', lang: 'math', code:
`A = {2,4,6},     P(A) = 3/6
B = {4,5,6},     P(B) = 3/6
A ∩ B = {4,6},   P(A∩B) = 2/6
P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6 = 2/3` },

      { type: 'heading', text: 'Conditional probability', level: 2 },
      { type: 'para', html: 'The probability of <code>A</code> given that <code>B</code> has occurred is' },
      { type: 'code', lang: 'math', code:
`P(A | B) = P(A ∩ B) / P(B),     provided P(B) > 0` },
      { type: 'callout', kind: 'info', html: 'Conditioning <em>shrinks</em> the sample space to <code>B</code>. You are asking: <em>"of the outcomes inside B, what fraction are also in A?"</em>' },

      { type: 'heading', text: 'Independence', level: 2 },
      { type: 'para', html: 'Events <code>A</code> and <code>B</code> are <strong>independent</strong> if knowing one tells you nothing about the other:' },
      { type: 'code', lang: 'math', code:
`P(A ∩ B) = P(A) · P(B)
equivalently  P(A | B) = P(A)` },
      { type: 'list', kind: 'bullet', items: [
        'Disjoint events with non-zero probability are <em>never</em> independent — they exclude each other.',
        'Independence is symmetric: A ⊥ B  ⇔  B ⊥ A.',
        'Pairwise independence does not imply mutual independence.'
      ]},

      { type: 'heading', text: 'Mutually exclusive vs independent', level: 2 },
      { type: 'code', lang: 'math', code:
`Mutually exclusive :  A ∩ B = ∅   ⇒  P(A∩B) = 0
Independent        :  P(A∩B) = P(A)·P(B)

Same? Only when at least one of them has probability 0.` },

      { type: 'heading', text: 'Law of total probability', level: 2 },
      { type: 'para', html: 'If <code>B₁, B₂, …, Bₙ</code> partition the sample space:' },
      { type: 'code', lang: 'math', code:
`P(A) = Σᵢ P(A | Bᵢ) · P(Bᵢ)` },
      { type: 'callout', kind: 'tip', html: 'Memorise this — it is the engine behind Bayes\' theorem in the next chapter.' },

      { type: 'heading', text: 'GATE-style problem', level: 2 },
      { type: 'para', html: 'Two fair dice are rolled. What is <code>P(sum = 7 | first die = 3)</code>?' },
      { type: 'code', lang: 'math', code:
`Condition: first die = 3  ⇒  second die uniform on {1..6}
Sum = 7 needs second die = 4
Answer = 1/6` }
    ]},

    /* ============== CH 2: Bayes' Theorem ============== */
    { id: 'gda-c2', title: 'Bayes\' Theorem', icon: '🧮', sections: [
      { type: 'heading', text: 'Why Bayes?', level: 1 },
      { type: 'para', html: 'Bayes\' theorem lets you <strong>flip a conditional probability</strong>: given <code>P(test|disease)</code>, you can compute <code>P(disease|test)</code>. This is foundational for Naive Bayes, Bayesian networks, and probabilistic ML.' },

      { type: 'heading', text: 'The formula', level: 2 },
      { type: 'code', lang: 'math', code:
`            P(B | A) · P(A)
P(A | B) = ─────────────────
                 P(B)

with   P(B) = P(B|A)·P(A) + P(B|¬A)·P(¬A)` },
      { type: 'callout', kind: 'info', html: '<code>P(A)</code> is the <em>prior</em>, <code>P(B|A)</code> the <em>likelihood</em>, <code>P(A|B)</code> the <em>posterior</em>, and <code>P(B)</code> the <em>evidence</em>.' },

      { type: 'heading', text: 'Derivation (one line)', level: 2 },
      { type: 'code', lang: 'math', code:
`P(A ∩ B) = P(A|B)·P(B) = P(B|A)·P(A)
   ⇒  P(A|B) = P(B|A)·P(A) / P(B)` },

      { type: 'heading', text: 'Classic medical test', level: 2 },
      { type: 'para', html: 'A disease affects <strong>1 in 1000</strong> people. The test is <strong>99% sensitive</strong> (true positive rate) and has a <strong>5% false positive rate</strong>. You test positive. What is the probability you actually have the disease?' },
      { type: 'code', lang: 'math', code:
`Let D = has disease, T = tests positive.
P(D)       = 0.001
P(T | D)   = 0.99       (sensitivity)
P(T | ¬D)  = 0.05       (false positive)
P(¬D)      = 0.999

P(T) = 0.99·0.001 + 0.05·0.999
     = 0.00099 + 0.04995  = 0.05094

P(D | T) = (0.99 · 0.001) / 0.05094
         ≈ 0.0194   ≈ 1.94%` },
      { type: 'callout', kind: 'warn', html: 'Even after a positive result, you have <strong>only ~2% chance</strong> of being sick. This is the famous <em>base-rate fallacy</em> — rare diseases stay rare even after a positive test.' },

      { type: 'heading', text: 'Tree diagram of the test', level: 2 },
      { type: 'image', alt: 'bayes tree', svg:
`<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="260" fill="#fafafa" rx="8"/>
  <circle cx="60" cy="130" r="22" fill="#7c4dff"/>
  <text x="60" y="135" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">Pop</text>
  <line x1="82" y1="120" x2="220" y2="60" stroke="#444" stroke-width="2"/>
  <line x1="82" y1="140" x2="220" y2="200" stroke="#444" stroke-width="2"/>
  <text x="150" y="80" font-family="Nunito" font-size="11">P(D)=0.001</text>
  <text x="150" y="190" font-family="Nunito" font-size="11">P(¬D)=0.999</text>
  <circle cx="240" cy="60" r="22" fill="#ff4b4b"/>
  <text x="240" y="65" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">D</text>
  <circle cx="240" cy="200" r="22" fill="#58cc02"/>
  <text x="240" y="205" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">¬D</text>
  <line x1="262" y1="50" x2="420" y2="20" stroke="#444"/>
  <line x1="262" y1="70" x2="420" y2="100" stroke="#444"/>
  <line x1="262" y1="190" x2="420" y2="160" stroke="#444"/>
  <line x1="262" y1="210" x2="420" y2="240" stroke="#444"/>
  <text x="320" y="32" font-family="Nunito" font-size="10">0.99 → T+</text>
  <text x="320" y="92" font-family="Nunito" font-size="10">0.01 → T−</text>
  <text x="320" y="170" font-family="Nunito" font-size="10">0.05 → T+</text>
  <text x="320" y="232" font-family="Nunito" font-size="10">0.95 → T−</text>
  <text x="440" y="24" font-family="Nunito" font-size="11" font-weight="bold">0.00099</text>
  <text x="440" y="104" font-family="Nunito" font-size="11">0.00001</text>
  <text x="440" y="164" font-family="Nunito" font-size="11" font-weight="bold">0.04995</text>
  <text x="440" y="244" font-family="Nunito" font-size="11">0.94905</text>
</svg>` },

      { type: 'heading', text: 'Odds form of Bayes', level: 2 },
      { type: 'code', lang: 'math', code:
`posterior odds  =  prior odds  ×  likelihood ratio
   P(D|T)/P(¬D|T)  =  P(D)/P(¬D)  ×  P(T|D)/P(T|¬D)
                  =  (1/999)      ×  (0.99/0.05)
                  ≈  0.0198
   ⇒  P(D|T) ≈ 0.0198 / 1.0198 ≈ 1.94%` },

      { type: 'heading', text: 'Naive Bayes classifier (preview)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">naive_bayes</span>(features, priors, likelihoods):
    <span class="com"># P(class | features) ∝ P(class) · Π P(featureᵢ | class)</span>
    scores = {}
    <span class="kw">for</span> c <span class="kw">in</span> priors:
        s = priors[c]
        <span class="kw">for</span> f <span class="kw">in</span> features:
            s *= likelihoods[c][f]
        scores[c] = s
    <span class="kw">return</span> <span class="fn">argmax</span>(scores)` },

      { type: 'heading', text: 'GATE-style problem', level: 2 },
      { type: 'para', html: 'A factory has two machines. Machine A produces 60% of bolts with 2% defect rate; Machine B produces 40% with 5% defect. A bolt picked at random is defective. What is the probability it came from B?' },
      { type: 'code', lang: 'math', code:
`P(B|def) = (0.05·0.4) / (0.02·0.6 + 0.05·0.4)
        = 0.020 / (0.012 + 0.020)
        = 0.020 / 0.032
        = 0.625   (62.5%)` },
      { type: 'callout', kind: 'tip', html: 'When you see <em>"given that an item is defective"</em>, the answer almost always wants Bayes. Identify prior + likelihood, then plug into the formula.' }
    ]},

    /* ============== CH 3: Distributions ============== */
    { id: 'gda-c3', title: 'Probability Distributions', icon: '📊', sections: [
      { type: 'heading', text: 'Random variables', level: 1 },
      { type: 'para', html: 'A <strong>random variable</strong> assigns a number to every outcome. It is <em>discrete</em> (countable values) or <em>continuous</em> (a range). Each distribution has a <em>PMF/PDF</em>, <em>mean</em>, and <em>variance</em>.' },
      { type: 'callout', kind: 'info', html: 'Discrete uses PMF (sum). Continuous uses PDF (integral). CDF = P(X ≤ x) is defined for both.' },

      { type: 'heading', text: 'Bernoulli — one coin flip', level: 2 },
      { type: 'code', lang: 'math', code:
`X ∈ {0, 1}
P(X=1) = p,   P(X=0) = 1−p
E[X] = p,     Var(X) = p(1−p)` },
      { type: 'para', html: 'The atom of probability — a single yes/no trial.' },

      { type: 'heading', text: 'Binomial — n independent flips', level: 2 },
      { type: 'code', lang: 'math', code:
`X = number of successes in n Bernoulli(p) trials
P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ
E[X] = np
Var(X) = np(1−p)` },
      { type: 'para', html: 'Example: probability of exactly 3 heads in 5 fair coin flips =' },
      { type: 'code', lang: 'math', code:
`C(5,3) · 0.5³ · 0.5² = 10 · (1/32) = 10/32 = 0.3125` },

      { type: 'heading', text: 'Poisson — rare event counts', level: 2 },
      { type: 'code', lang: 'math', code:
`X = count of events in fixed interval, rate λ
P(X=k) = (e⁻λ · λᵏ) / k!
E[X] = Var(X) = λ` },
      { type: 'callout', kind: 'tip', html: 'Binomial(n, p) → Poisson(λ = np) when <code>n</code> is large and <code>p</code> is small.' },

      { type: 'heading', text: 'Uniform — equally likely', level: 2 },
      { type: 'code', lang: 'math', code:
`Discrete  X ∈ {1..n}      P(X=k) = 1/n
Continuous X ∈ [a, b]      f(x) = 1/(b−a)
E[X] = (a+b)/2,   Var(X) = (b−a)²/12` },

      { type: 'heading', text: 'Normal (Gaussian) — the bell curve', level: 2 },
      { type: 'code', lang: 'math', code:
`X ~ N(μ, σ²)
f(x) = (1 / σ√(2π)) · exp( −(x−μ)² / 2σ² )
E[X] = μ,   Var(X) = σ²

68-95-99.7 rule:
   P(|X−μ| ≤ σ)  ≈ 0.68
   P(|X−μ| ≤ 2σ) ≈ 0.95
   P(|X−μ| ≤ 3σ) ≈ 0.997` },
      { type: 'image', alt: 'normal curve', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <line x1="40" y1="180" x2="560" y2="180" stroke="#444" stroke-width="2"/>
  <line x1="300" y1="40" x2="300" y2="180" stroke="#aaa" stroke-dasharray="4 4"/>
  <path d="M 40 178 Q 170 178 200 160 Q 250 100 300 50 Q 350 100 400 160 Q 430 178 560 178" fill="#7c4dff" fill-opacity="0.35" stroke="#5e35d5" stroke-width="2"/>
  <text x="300" y="200" text-anchor="middle" font-family="Nunito" font-size="12">μ</text>
  <text x="225" y="200" text-anchor="middle" font-family="Nunito" font-size="12">μ−σ</text>
  <text x="375" y="200" text-anchor="middle" font-family="Nunito" font-size="12">μ+σ</text>
  <text x="300" y="30" text-anchor="middle" font-family="Nunito" font-weight="bold">N(μ, σ²)</text>
</svg>` },

      { type: 'heading', text: 'Standard normal & Z-score', level: 2 },
      { type: 'code', lang: 'math', code:
`If X ~ N(μ, σ²)  then  Z = (X − μ) / σ  ~ N(0, 1)
Use Z-tables (or Φ) to compute probabilities.` },

      { type: 'heading', text: 'Exponential — time between events', level: 2 },
      { type: 'code', lang: 'math', code:
`X ≥ 0,   f(x) = λ e^(−λx)
E[X] = 1/λ,   Var(X) = 1/λ²
Memoryless:  P(X > s+t | X > s) = P(X > t)` },

      { type: 'heading', text: 'Central Limit Theorem', level: 2 },
      { type: 'para', html: 'For iid X₁,…,Xₙ with mean μ and variance σ², the sample mean satisfies' },
      { type: 'code', lang: 'math', code:
`(X̄ₙ − μ) / (σ/√n)  →  N(0, 1)   as n → ∞` },
      { type: 'callout', kind: 'info', html: 'CLT is why <em>everything</em> looks normal in practice — averages of many small random effects converge to a Gaussian.' },

      { type: 'heading', text: 'GATE-style distribution problem', level: 2 },
      { type: 'para', html: 'Calls arrive at a help desk at rate 3 per minute (Poisson). Probability of receiving exactly 2 calls in the next minute?' },
      { type: 'code', lang: 'math', code:
`λ = 3
P(X=2) = e⁻³ · 3² / 2!
       = 0.04979 · 9 / 2
       = 0.2240` }
    ]},

    /* ============== CH 4: Hypothesis Testing ============== */
    { id: 'gda-c4', title: 'Hypothesis Testing', icon: '🧪', sections: [
      { type: 'heading', text: 'Why test hypotheses?', level: 1 },
      { type: 'para', html: 'Statistical tests let us decide, from <em>noisy data</em>, whether an effect is real. We frame the question as a yes/no choice between two hypotheses, and bound the chance of being wrong.' },

      { type: 'heading', text: 'Null vs alternative', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>H₀ (null):</strong> the status-quo claim, e.g. "the new drug has no effect".',
        '<strong>H₁ (alternative):</strong> what we suspect, e.g. "the drug improves recovery".',
        'We assume H₀ until data give strong evidence against it.'
      ]},

      { type: 'heading', text: 'Test statistic, p-value', level: 2 },
      { type: 'code', lang: 'math', code:
`1. Compute a test statistic T from the sample.
2. Find p-value = P( as extreme as T  |  H₀ true ).
3. Reject H₀  if  p  ≤  α  (significance level, usually 0.05).` },
      { type: 'callout', kind: 'warn', html: 'p-value is <strong>not</strong> P(H₀ | data). It is P(data or more extreme | H₀).' },

      { type: 'heading', text: 'Type I and Type II errors', level: 2 },
      { type: 'image', alt: 'type I and II', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="24" text-anchor="middle" font-family="Nunito" font-weight="bold">Truth vs. Decision</text>
  <rect x="80" y="50" width="200" height="60" fill="#58cc02" fill-opacity="0.5"/>
  <text x="180" y="80" text-anchor="middle" font-family="Nunito" font-weight="bold">Correct</text>
  <text x="180" y="98" text-anchor="middle" font-family="Nunito" font-size="11">(H₀ true, do not reject)</text>
  <rect x="320" y="50" width="200" height="60" fill="#ff4b4b" fill-opacity="0.5"/>
  <text x="420" y="80" text-anchor="middle" font-family="Nunito" font-weight="bold">Type I (α)</text>
  <text x="420" y="98" text-anchor="middle" font-family="Nunito" font-size="11">(H₀ true, rejected)</text>
  <rect x="80" y="130" width="200" height="60" fill="#ff9600" fill-opacity="0.5"/>
  <text x="180" y="160" text-anchor="middle" font-family="Nunito" font-weight="bold">Type II (β)</text>
  <text x="180" y="178" text-anchor="middle" font-family="Nunito" font-size="11">(H₀ false, not rejected)</text>
  <rect x="320" y="130" width="200" height="60" fill="#58cc02" fill-opacity="0.5"/>
  <text x="420" y="160" text-anchor="middle" font-family="Nunito" font-weight="bold">Correct</text>
  <text x="420" y="178" text-anchor="middle" font-family="Nunito" font-size="11">(H₀ false, rejected)</text>
</svg>` },
      { type: 'list', kind: 'check', items: [
        '<strong>α</strong> = P(reject H₀ | H₀ true) — significance level',
        '<strong>β</strong> = P(fail to reject | H₀ false)',
        '<strong>Power</strong> = 1 − β — chance of catching a real effect'
      ]},

      { type: 'heading', text: 'One-sample Z-test', level: 2 },
      { type: 'code', lang: 'math', code:
`H₀:  μ = μ₀
Z =  (x̄ − μ₀) / (σ/√n)
Reject H₀ if  |Z|  >  z_{α/2}

Common critical values (two-sided):
   α = 0.10  →  z = 1.645
   α = 0.05  →  z = 1.960
   α = 0.01  →  z = 2.576` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'para', html: 'Population SD <code>σ = 10</code>. Sample of <code>n = 25</code> has mean <code>x̄ = 52</code>. Test H₀: μ = 50 at α = 0.05.' },
      { type: 'code', lang: 'math', code:
`Z = (52 − 50) / (10 / √25)
  = 2 / 2 = 1.0
|Z| = 1.0  <  1.96   ⇒  fail to reject H₀.` },

      { type: 'heading', text: 'Confidence intervals', level: 2 },
      { type: 'code', lang: 'math', code:
`(1−α) CI for μ  (σ known):
   x̄  ±  z_{α/2} · σ/√n

For α = 0.05:
   CI =  x̄  ±  1.96 · σ/√n` },
      { type: 'callout', kind: 'info', html: 'A 95% CI does <em>not</em> mean "μ is in the interval with 95% probability"; it means that 95% of such intervals over repeated samples would contain μ.' },

      { type: 'heading', text: 't-test (σ unknown)', level: 2 },
      { type: 'code', lang: 'math', code:
`T = (x̄ − μ₀) / (s/√n)   ~  t_{n−1}
Use t-table with degrees of freedom n−1.` },

      { type: 'heading', text: 'GATE-style multiple choice', level: 2 },
      { type: 'para', html: 'Increasing the sample size <code>n</code> while keeping α fixed will:' },
      { type: 'list', kind: 'bullet', items: [
        'Decrease β (Type II error rate)',
        'Increase power (1 − β)',
        'Narrow the confidence interval',
        'Leave α unchanged'
      ]}
    ]},

    /* ============== CH 5: Vectors ============== */
    { id: 'gda-c5', title: 'Vectors', icon: '➡️', sections: [
      { type: 'heading', text: 'What is a vector?', level: 1 },
      { type: 'para', html: 'A <strong>vector</strong> is an ordered tuple of numbers, viewed as an arrow from the origin to a point in <code>Rⁿ</code>. ML data points are vectors; weights are vectors; gradients are vectors.' },
      { type: 'code', lang: 'math', code:
`u = (3, 4)        2D vector
v = (1, 2, 5)     3D vector
w = (x₁, x₂, ..., xₙ)   n-dimensional` },

      { type: 'heading', text: 'Operations', level: 2 },
      { type: 'code', lang: 'math', code:
`Addition     u + v = (u₁+v₁, ..., uₙ+vₙ)
Scaling      c·u   = (c·u₁, ..., c·uₙ)
Zero vector  0     = (0, ..., 0)` },

      { type: 'heading', text: 'Dot (inner) product', level: 2 },
      { type: 'code', lang: 'math', code:
`u · v  =  Σᵢ uᵢ vᵢ  =  ‖u‖·‖v‖·cos θ

Examples:
  (1, 2) · (3, 4) = 3 + 8 = 11
  (1, 0, 0) · (0, 1, 0) = 0   ⇒  perpendicular` },
      { type: 'callout', kind: 'info', html: 'The dot product measures <em>alignment</em>: positive = same direction, zero = orthogonal, negative = opposite.' },

      { type: 'heading', text: 'Norm (length)', level: 2 },
      { type: 'code', lang: 'math', code:
`L2 (Euclidean):  ‖u‖₂ = √(u₁² + ... + uₙ²)
L1 (Manhattan):  ‖u‖₁ = |u₁| + ... + |uₙ|
L∞ (max):       ‖u‖_∞ = maxᵢ |uᵢ|` },

      { type: 'heading', text: 'Geometry of u and v', level: 2 },
      { type: 'image', alt: 'vectors arrows', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <line x1="40" y1="200" x2="560" y2="200" stroke="#888"/>
  <line x1="60" y1="220" x2="60" y2="20" stroke="#888"/>
  <defs>
    <marker id="ah1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 8 3 L 0 6 z" fill="#7c4dff"/>
    </marker>
    <marker id="ah2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 8 3 L 0 6 z" fill="#1cb0f6"/>
    </marker>
    <marker id="ah3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 8 3 L 0 6 z" fill="#58cc02"/>
    </marker>
  </defs>
  <line x1="60" y1="200" x2="260" y2="80" stroke="#7c4dff" stroke-width="3" marker-end="url(#ah1)"/>
  <text x="270" y="80" font-family="Nunito" font-weight="bold" fill="#7c4dff">u</text>
  <line x1="60" y1="200" x2="380" y2="160" stroke="#1cb0f6" stroke-width="3" marker-end="url(#ah2)"/>
  <text x="390" y="160" font-family="Nunito" font-weight="bold" fill="#1cb0f6">v</text>
  <line x1="60" y1="200" x2="440" y2="40" stroke="#58cc02" stroke-width="3" marker-end="url(#ah3)" stroke-dasharray="5 4"/>
  <text x="450" y="40" font-family="Nunito" font-weight="bold" fill="#58cc02">u+v</text>
</svg>` },

      { type: 'heading', text: 'Projection of u onto v', level: 2 },
      { type: 'code', lang: 'math', code:
`proj_v(u) = ( (u·v) / (v·v) ) · v
length    = (u · v) / ‖v‖` },
      { type: 'para', html: 'Projection is the "shadow" of u on the line spanned by v.' },

      { type: 'heading', text: 'Angle between vectors', level: 2 },
      { type: 'code', lang: 'math', code:
`cos θ = (u · v) / (‖u‖ · ‖v‖)
Cosine similarity used in NLP & info retrieval.` },

      { type: 'heading', text: 'Linear independence & basis', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Vectors are <strong>linearly independent</strong> if no one is a combination of the others.',
        'A <strong>basis</strong> of Rⁿ is a set of n linearly independent vectors spanning Rⁿ.',
        'Standard basis: <code>e₁=(1,0,…), e₂=(0,1,0,…), …</code>'
      ]},

      { type: 'heading', text: 'GATE drill — projection', level: 2 },
      { type: 'para', html: 'Project <code>u = (4, 2)</code> onto <code>v = (1, 0)</code>.' },
      { type: 'code', lang: 'math', code:
`u · v = 4·1 + 2·0 = 4
v · v = 1
proj_v(u) = (4/1)·(1,0) = (4, 0)` }
    ]},

    /* ============== CH 6: Matrices ============== */
    { id: 'gda-c6', title: 'Matrices', icon: '🔢', sections: [
      { type: 'heading', text: 'Matrices are linear maps', level: 1 },
      { type: 'para', html: 'A matrix <code>A ∈ R^{m×n}</code> maps vectors in <code>Rⁿ</code> to <code>Rᵐ</code>. ML feature transformations, neural network layers, and PCA are all matrix multiplications.' },

      { type: 'heading', text: 'Notation', level: 2 },
      { type: 'code', lang: 'math', code:
`A = ⎡ a₁₁  a₁₂  a₁₃ ⎤
    ⎣ a₂₁  a₂₂  a₂₃ ⎦   (2 × 3)

  Row i, column j  →  aᵢⱼ` },

      { type: 'heading', text: 'Multiplication', level: 2 },
      { type: 'code', lang: 'math', code:
`(AB)ᵢⱼ = Σₖ aᵢₖ · bₖⱼ
A: m×n,  B: n×p  ⇒  AB: m×p

In general  AB ≠ BA  (not commutative)` },
      { type: 'callout', kind: 'tip', html: 'Inner dimensions must match. <code>(3×2)·(2×4) = (3×4)</code>. Track shapes; most matrix bugs are shape errors.' },

      { type: 'heading', text: 'Worked product', level: 2 },
      { type: 'code', lang: 'math', code:
`A = ⎡ 1 2 ⎤   B = ⎡ 5 6 ⎤
    ⎣ 3 4 ⎦       ⎣ 7 8 ⎦

AB = ⎡ 1·5+2·7   1·6+2·8 ⎤   ⎡ 19  22 ⎤
     ⎣ 3·5+4·7   3·6+4·8 ⎦ = ⎣ 43  50 ⎦` },

      { type: 'heading', text: 'Transpose', level: 2 },
      { type: 'code', lang: 'math', code:
`(Aᵀ)ᵢⱼ = aⱼᵢ
(AB)ᵀ = Bᵀ Aᵀ
(Aᵀ)ᵀ = A` },

      { type: 'heading', text: 'Determinant (square only)', level: 2 },
      { type: 'code', lang: 'math', code:
`2×2:  det⎡a b⎤ = ad − bc
        ⎣c d⎦

3×3 (cofactor expansion along row 1):
det = a₁₁ M₁₁ − a₁₂ M₁₂ + a₁₃ M₁₃` },
      { type: 'list', kind: 'check', items: [
        '<code>det(AB) = det(A)·det(B)</code>',
        '<code>det(Aᵀ) = det(A)</code>',
        'Row swap flips sign of determinant',
        '<code>det(A) = 0  ⇔  A is singular  ⇔  no inverse</code>'
      ]},

      { type: 'heading', text: 'Inverse', level: 2 },
      { type: 'code', lang: 'math', code:
`A · A⁻¹ = A⁻¹ · A = I

2×2 inverse:
  A = ⎡ a b ⎤   ⇒  A⁻¹ = (1/(ad-bc))·⎡  d  -b ⎤
      ⎣ c d ⎦                          ⎣ -c   a ⎦` },

      { type: 'heading', text: 'Rank', level: 2 },
      { type: 'para', html: 'The <strong>rank</strong> of <code>A</code> is the dimension of its column (or row) space — the number of linearly independent columns.' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Full rank:</strong> rank = min(m, n)',
        '<strong>Rank-deficient:</strong> rank &lt; min(m, n) (singular for square A)',
        'Used to detect collinear features in data'
      ]},

      { type: 'heading', text: 'Special matrices', level: 2 },
      { type: 'code', lang: 'math', code:
`Identity I   :   Iᵢⱼ = 1 if i=j else 0
Diagonal D   :   nonzero only on diagonal
Symmetric    :   A = Aᵀ
Orthogonal Q :   QᵀQ = I  (rows/cols are orthonormal)` },

      { type: 'heading', text: 'Solving linear systems', level: 2 },
      { type: 'code', lang: 'math', code:
`A x = b
If A invertible:  x = A⁻¹ b
General: use Gaussian elimination / LU factorisation.` },

      { type: 'heading', text: 'GATE drill — invertibility', level: 2 },
      { type: 'para', html: 'For what value of <code>k</code> is the matrix singular?' },
      { type: 'code', lang: 'math', code:
`A = ⎡ k  2 ⎤
    ⎣ 3  6 ⎦

det = 6k − 6 = 0  ⇒  k = 1` }
    ]},

    /* ============== CH 7: Eigenvalues & SVD ============== */
    { id: 'gda-c7', title: 'Eigenvalues & SVD', icon: '🌀', sections: [
      { type: 'heading', text: 'Eigenvalues and eigenvectors', level: 1 },
      { type: 'para', html: 'An <strong>eigenvector</strong> of <code>A</code> is a non-zero vector that the matrix only stretches (does not rotate). The factor is the <strong>eigenvalue</strong> λ.' },
      { type: 'code', lang: 'math', code:
`A v = λ v,    v ≠ 0` },

      { type: 'heading', text: 'Characteristic equation', level: 2 },
      { type: 'code', lang: 'math', code:
`det(A − λ I) = 0
Solve this polynomial in λ to find the eigenvalues.` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`A = ⎡ 4  1 ⎤
    ⎣ 2  3 ⎦

det(A − λI) = (4−λ)(3−λ) − 2
            = λ² − 7λ + 10 = 0
λ = 5  or  λ = 2

For λ=5:   (A − 5I) v = 0   ⇒  v = (1, 1)
For λ=2:   (A − 2I) v = 0   ⇒  v = (1, −2)` },

      { type: 'heading', text: 'Key properties', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Sum of eigenvalues = trace(A)',
        'Product of eigenvalues = det(A)',
        'Symmetric real matrices have real eigenvalues and orthogonal eigenvectors',
        'A is invertible iff no eigenvalue is 0'
      ]},

      { type: 'heading', text: 'Diagonalisation', level: 2 },
      { type: 'code', lang: 'math', code:
`If A has n linearly independent eigenvectors,
   A = P · D · P⁻¹
where  D is diagonal of eigenvalues,
       P columns are the eigenvectors.` },

      { type: 'heading', text: 'Powers via diagonalisation', level: 2 },
      { type: 'code', lang: 'math', code:
`Aᵏ = P · Dᵏ · P⁻¹
   (Dᵏ just raises each diagonal entry to the kth power)` },

      { type: 'heading', text: 'Singular Value Decomposition (SVD)', level: 2 },
      { type: 'code', lang: 'math', code:
`Any  A ∈ R^{m×n}  factorises as
   A = U Σ Vᵀ

  U  : m × m  orthogonal
  Σ  : m × n  diagonal of singular values σ₁ ≥ σ₂ ≥ ...
  V  : n × n  orthogonal` },
      { type: 'callout', kind: 'info', html: 'SVD always exists, even for non-square matrices. It is the most numerically robust factorisation.' },

      { type: 'heading', text: 'PCA = eigendecomposition of covariance', level: 2 },
      { type: 'code', lang: 'math', code:
`Centre data:  X̃ = X − mean
Covariance :  C = (1/n) X̃ᵀ X̃
Eigendecompose C = V Λ Vᵀ
Top-k eigenvectors (largest λ) = principal components` },

      { type: 'heading', text: 'Low-rank approximation', level: 2 },
      { type: 'code', lang: 'math', code:
`Truncated SVD:   A_k = U_k Σ_k V_kᵀ
Keeps largest k singular values.
Best rank-k approx in Frobenius norm (Eckart–Young).` },

      { type: 'heading', text: 'Why this matters in ML', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'PCA for dimensionality reduction',
        'Latent semantic indexing in NLP (SVD on term-document matrix)',
        'Recommender systems (SVD of user-item matrix)',
        'Spectral clustering uses eigenvectors of graph Laplacian'
      ]},

      { type: 'heading', text: 'GATE-style numeric', level: 2 },
      { type: 'para', html: 'Find the eigenvalues of:' },
      { type: 'code', lang: 'math', code:
`A = ⎡ 2  0 ⎤      det(A − λI) = (2−λ)(3−λ) = 0
    ⎣ 1  3 ⎦      λ = 2, 3` }
    ]},

    /* ============== CH 8: Derivatives ============== */
    { id: 'gda-c8', title: 'Derivatives', icon: '📈', sections: [
      { type: 'heading', text: 'What is a derivative?', level: 1 },
      { type: 'para', html: 'The <strong>derivative</strong> <code>f\'(x)</code> measures how fast <code>f</code> changes at <code>x</code> — it is the slope of the tangent line.' },
      { type: 'code', lang: 'math', code:
`f'(x) = lim_{h → 0}  (f(x+h) − f(x)) / h` },

      { type: 'heading', text: 'Geometric picture', level: 2 },
      { type: 'image', alt: 'tangent line', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <line x1="40" y1="180" x2="560" y2="180" stroke="#888"/>
  <line x1="60" y1="200" x2="60" y2="20" stroke="#888"/>
  <path d="M 60 200 Q 200 200 300 100 T 540 30" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <line x1="180" y1="160" x2="380" y2="60" stroke="#ff4b4b" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="300" cy="100" r="5" fill="#ff4b4b"/>
  <text x="320" y="110" font-family="Nunito" font-weight="bold" fill="#ff4b4b">(x, f(x))</text>
  <text x="480" y="20" font-family="Nunito" font-weight="bold" fill="#7c4dff">f(x)</text>
</svg>` },

      { type: 'heading', text: 'Common rules', level: 2 },
      { type: 'code', lang: 'math', code:
`Constant   :  d/dx (c) = 0
Power      :  d/dx (xⁿ) = n xⁿ⁻¹
Exponential:  d/dx (eˣ) = eˣ
Log        :  d/dx (ln x) = 1/x
Sin / Cos  :  d/dx (sin x) = cos x
              d/dx (cos x) = -sin x` },

      { type: 'heading', text: 'Sum / product / quotient', level: 2 },
      { type: 'code', lang: 'math', code:
`Sum     :  (f + g)' = f' + g'
Product :  (f · g)' = f'·g + f·g'
Quotient:  (f / g)' = (f'·g − f·g') / g²` },

      { type: 'heading', text: 'Chain rule', level: 2 },
      { type: 'code', lang: 'math', code:
`If y = f(g(x))
   dy/dx = f'(g(x)) · g'(x)

Example:
   d/dx [ sin(x²) ] = cos(x²) · 2x` },
      { type: 'callout', kind: 'tip', html: 'Backpropagation in neural nets is just repeated chain rule. Master this step.' },

      { type: 'heading', text: 'Higher-order derivatives', level: 2 },
      { type: 'code', lang: 'math', code:
`f''(x) = derivative of f'(x)
f''(x) > 0  ⇒  concave up
f''(x) < 0  ⇒  concave down
f''(x) = 0  ⇒  possible inflection point` },

      { type: 'heading', text: 'Critical points', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Set <code>f\'(x) = 0</code> to find candidates',
        'Use <code>f\'\'</code> sign for max vs min',
        'Check boundary points for closed intervals'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Find local extrema of <code>f(x) = x³ − 3x</code>.' },
      { type: 'code', lang: 'math', code:
`f'(x) = 3x² − 3 = 0   ⇒  x = ±1
f''(x) = 6x
f''(1)  = 6  > 0  ⇒  local min at x = 1, f = −2
f''(−1) = −6 < 0  ⇒  local max at x = −1, f = 2` }
    ]},

    /* ============== CH 9: Gradients ============== */
    { id: 'gda-c9', title: 'Gradients', icon: '🧭', sections: [
      { type: 'heading', text: 'From single to multi-variable', level: 1 },
      { type: 'para', html: 'Real models depend on many parameters. We need calculus on functions <code>f(x₁, …, xₙ)</code> — partial derivatives and gradients.' },

      { type: 'heading', text: 'Partial derivatives', level: 2 },
      { type: 'code', lang: 'math', code:
`∂f/∂xᵢ  =  treat all xⱼ (j ≠ i) as constants, differentiate w.r.t. xᵢ

Example  f(x, y) = x² y + 3y
   ∂f/∂x = 2xy
   ∂f/∂y = x² + 3` },

      { type: 'heading', text: 'The gradient vector', level: 2 },
      { type: 'code', lang: 'math', code:
`∇f = ( ∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ )

Points in the direction of steepest ascent.
‖∇f‖ = rate of fastest increase at that point.` },
      { type: 'callout', kind: 'info', html: 'Going <strong>against</strong> the gradient gives the steepest <em>descent</em> — the heart of training neural networks.' },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'code', lang: 'math', code:
`f(x, y) = x² + 3xy + 2y²
∇f = (2x + 3y,   3x + 4y)
At (1, 1):  ∇f = (5, 7)` },

      { type: 'heading', text: 'Directional derivative', level: 2 },
      { type: 'code', lang: 'math', code:
`D_u f  =  ∇f · u    (with ‖u‖ = 1)
Rate of change of f along the direction u.` },

      { type: 'heading', text: 'Hessian (second derivatives)', level: 2 },
      { type: 'code', lang: 'math', code:
`H = ⎡ ∂²f/∂x₁²        ∂²f/∂x₁∂x₂ ⎤
    ⎣ ∂²f/∂x₂∂x₁      ∂²f/∂x₂²    ⎦

H positive definite at x*  ⇒  local minimum
H negative definite at x*  ⇒  local maximum
Indefinite                  ⇒  saddle point` },

      { type: 'heading', text: 'Convex vs non-convex', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Convex</strong>: any local minimum is the global minimum',
        'Linear and logistic regression have convex loss → gradient descent finds the optimum',
        'Deep nets are <em>non-convex</em>: many saddle points and local minima'
      ]},

      { type: 'heading', text: 'Lagrange multipliers (constrained optimisation)', level: 2 },
      { type: 'code', lang: 'math', code:
`Minimise  f(x)
subject to  g(x) = 0
⇒  ∇f(x) = λ ∇g(x)
   together with  g(x) = 0` },

      { type: 'heading', text: 'GATE-style gradient', level: 2 },
      { type: 'para', html: 'For <code>f(x, y) = e^{xy}</code>, find <code>∇f</code>.' },
      { type: 'code', lang: 'math', code:
`∂f/∂x = y · e^{xy}
∂f/∂y = x · e^{xy}
∇f    = e^{xy} · (y, x)` }
    ]},

    /* ============== CH 10: Gradient Descent ============== */
    { id: 'gda-c10', title: 'Gradient Descent', icon: '⛰️', sections: [
      { type: 'heading', text: 'The optimiser of ML', level: 1 },
      { type: 'para', html: 'Almost every ML model is trained by <strong>gradient descent</strong> — iteratively stepping the parameters in the direction that decreases the loss.' },

      { type: 'heading', text: 'The update rule', level: 2 },
      { type: 'code', lang: 'math', code:
`x_{t+1}  =  x_t  −  η · ∇f(x_t)

η  =  learning rate (step size, > 0)` },
      { type: 'callout', kind: 'tip', html: 'Small η: slow but stable. Large η: fast but may diverge. Tuning η is the most important knob.' },

      { type: 'heading', text: 'See it in action', level: 2 },
      { type: 'widget', name: 'gradient-descent', props: {} },

      { type: 'heading', text: 'Toy example — minimise x²', level: 2 },
      { type: 'code', lang: 'math', code:
`f(x) = x²,   f'(x) = 2x
Start x₀ = 4, η = 0.3
x₁ = 4 − 0.3·8  = 1.6
x₂ = 1.6 − 0.3·3.2 = 0.64
x₃ = 0.64 − 0.3·1.28 = 0.256
... →  0` },

      { type: 'heading', text: 'Pseudo-code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">gradient_descent</span>(grad_f, x0, lr=<span class="num">0.01</span>, steps=<span class="num">1000</span>, tol=<span class="num">1e-6</span>):
    x = x0
    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(steps):
        g = <span class="fn">grad_f</span>(x)
        x_new = x - lr * g
        <span class="kw">if</span> <span class="fn">norm</span>(x_new - x) &lt; tol:
            <span class="kw">break</span>
        x = x_new
    <span class="kw">return</span> x` },

      { type: 'heading', text: 'Variants', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Batch GD</strong> — uses all data; expensive but smooth',
        '<strong>Stochastic GD (SGD)</strong> — one sample per step; noisy but fast',
        '<strong>Mini-batch GD</strong> — small batches (32, 64, 256); best of both',
        '<strong>Momentum</strong>: vₜ = γvₜ₋₁ + η∇f; reduces zig-zag',
        '<strong>Adam</strong>: adaptive learning rates with moments — default in deep learning'
      ]},

      { type: 'heading', text: 'Learning rate behaviour', level: 2 },
      { type: 'image', alt: 'learning rates', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <path d="M 40 200 Q 200 200 300 60 T 560 200" stroke="#aaa" stroke-width="2" fill="none"/>
  <circle cx="80" cy="190" r="4" fill="#58cc02"/>
  <circle cx="120" cy="170" r="4" fill="#58cc02"/>
  <circle cx="180" cy="140" r="4" fill="#58cc02"/>
  <circle cx="240" cy="100" r="4" fill="#58cc02"/>
  <circle cx="300" cy="60" r="4" fill="#58cc02"/>
  <text x="40" y="25" font-family="Nunito" font-size="11" fill="#58cc02">good η</text>
  <circle cx="80" cy="190" r="4" fill="#ff4b4b"/>
  <circle cx="500" cy="195" r="4" fill="#ff4b4b"/>
  <text x="430" y="25" font-family="Nunito" font-size="11" fill="#ff4b4b">η too large (diverges)</text>
  <circle cx="80" cy="190" r="3" fill="#1cb0f6"/>
  <circle cx="100" cy="187" r="3" fill="#1cb0f6"/>
  <circle cx="120" cy="183" r="3" fill="#1cb0f6"/>
  <text x="40" y="215" font-family="Nunito" font-size="11" fill="#1cb0f6">η too small (slow)</text>
</svg>` },

      { type: 'heading', text: 'Convergence guarantees', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'For convex f with Lipschitz gradient L, choose η ≤ 1/L for guaranteed convergence',
        'Convex + strongly convex ⇒ linear rate (geometric)',
        'Non-convex ⇒ stationary point only; no global guarantee'
      ]},

      { type: 'heading', text: 'Practical tips', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Normalise features so each dimension has comparable scale',
        'Try a few learning rates (10⁻¹, 10⁻², 10⁻³)',
        'Plot loss vs iteration to diagnose problems',
        'Use early stopping to avoid overfitting'
      ]},

      { type: 'heading', text: 'Common pitfalls', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Forgetting to <em>subtract</em> the gradient (sign error)',
        'Updating parameters before computing all gradients (batched ops)',
        'Mixing learning rate with batch size',
        'Vanishing/exploding gradients in deep nets — see CH 27'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Given <code>f(x) = (x − 5)²</code>, η = 0.5. Starting at <code>x₀ = 9</code>, what is <code>x₁</code>?' },
      { type: 'code', lang: 'math', code:
`f'(x) = 2(x − 5),    f'(9) = 8
x₁ = 9 − 0.5·8 = 5    (one step to optimum!)` }
    ]},

    /* ============== CH 11: Arrays, Hash Tables, Trees ============== */
    { id: 'gda-c11', title: 'Arrays, Hash Tables, Trees', icon: '🌳', sections: [
      { type: 'heading', text: 'Data structures for data tasks', level: 1 },
      { type: 'para', html: 'Choosing the right DS turns a slow analytics job into a fast one. GATE tests asymptotic costs and properties of arrays, hash maps, and balanced trees.' },

      { type: 'heading', text: 'Array — contiguous memory', level: 2 },
      { type: 'code', lang: 'math', code:
`Access by index    : O(1)
Append at end      : O(1) amortised
Insert in middle   : O(n)
Delete in middle   : O(n)
Search (unsorted)  : O(n)
Search (sorted)    : O(log n) via binary search` },
      { type: 'widget', name: 'array-vis', props: { initial: [3, 1, 4, 1, 5, 9, 2, 6] } },

      { type: 'heading', text: 'Hash table', level: 2 },
      { type: 'para', html: 'Maps a <code>key</code> to a <code>value</code> using a hash function to choose a bucket.' },
      { type: 'code', lang: 'math', code:
`Insert / Lookup / Delete : O(1) average,  O(n) worst
Order of keys : not preserved (use TreeMap for ordering)` },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Collision handling</strong>: chaining (linked list per bucket) or open addressing',
        '<strong>Load factor</strong> α = n / capacity; resize when α > 0.75',
        'Hash function must be deterministic and uniform'
      ]},

      { type: 'heading', text: 'When to use each', level: 2 },
      { type: 'image', alt: 'ds chart', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <rect x="30" y="50" width="170" height="100" rx="10" fill="#7c4dff"/>
  <text x="115" y="80" text-anchor="middle" fill="#fff" font-weight="bold">Array</text>
  <text x="115" y="105" text-anchor="middle" fill="#fff" font-size="11">indexed</text>
  <text x="115" y="125" text-anchor="middle" fill="#fff" font-size="11">cache-friendly</text>
  <rect x="215" y="50" width="170" height="100" rx="10" fill="#1cb0f6"/>
  <text x="300" y="80" text-anchor="middle" fill="#fff" font-weight="bold">Hash Map</text>
  <text x="300" y="105" text-anchor="middle" fill="#fff" font-size="11">key → value</text>
  <text x="300" y="125" text-anchor="middle" fill="#fff" font-size="11">O(1) avg</text>
  <rect x="400" y="50" width="170" height="100" rx="10" fill="#58cc02"/>
  <text x="485" y="80" text-anchor="middle" fill="#fff" font-weight="bold">BST / Tree</text>
  <text x="485" y="105" text-anchor="middle" fill="#fff" font-size="11">ordered</text>
  <text x="485" y="125" text-anchor="middle" fill="#fff" font-size="11">O(log n)</text>
</svg>` },

      { type: 'heading', text: 'Binary search tree (BST)', level: 2 },
      { type: 'para', html: 'A binary tree where every left descendant ≤ node ≤ every right descendant.' },
      { type: 'widget', name: 'bst-vis', props: {} },

      { type: 'heading', text: 'Balanced BSTs', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>AVL</strong> — height balance factor ∈ {−1, 0, 1}',
        '<strong>Red-Black</strong> — used in Java TreeMap, C++ std::map',
        '<strong>B/B+ Tree</strong> — disk-friendly, used in databases',
        'All operations O(log n)'
      ]},

      { type: 'heading', text: 'Tree traversals', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">inorder</span>(node):
    <span class="kw">if</span> node:
        <span class="fn">inorder</span>(node.left)
        <span class="fn">visit</span>(node.value)
        <span class="fn">inorder</span>(node.right)

<span class="com"># preorder:  visit, left, right</span>
<span class="com"># postorder: left, right, visit</span>
<span class="com"># inorder on a BST yields sorted output</span>` },

      { type: 'heading', text: 'Heap (priority queue)', level: 2 },
      { type: 'code', lang: 'math', code:
`Complete binary tree, parent ≤ children (min-heap).
Insert : O(log n)
Pop min: O(log n)
Peek   : O(1)
Heapify all: O(n)` },

      { type: 'heading', text: 'Graphs', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Adjacency list</strong>: O(V + E) space; fast for sparse',
        '<strong>Adjacency matrix</strong>: O(V²) space; O(1) edge lookup',
        'BFS uses queue; DFS uses stack or recursion'
      ]},

      { type: 'heading', text: 'Big-O cheat sheet', level: 2 },
      { type: 'code', lang: 'math', code:
`Structure   Access   Search   Insert   Delete
Array        O(1)     O(n)     O(n)     O(n)
Sorted Arr   O(1)     O(log n) O(n)     O(n)
LinkedList   O(n)     O(n)     O(1)*    O(1)*
Hash Map     —        O(1)     O(1)     O(1)
Balanced BST O(log n) O(log n) O(log n) O(log n)
Heap         —        O(n)     O(log n) O(log n)` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Inserting <code>n</code> elements one by one into an initially empty AVL tree takes:' },
      { type: 'list', kind: 'bullet', items: [
        'O(n) — wrong',
        'O(n log n) — correct: each insert is O(log n)',
        'O(n²) — wrong',
        'O(log n) — wrong'
      ]}
    ]},

    /* ============== CH 12: Sorting & Searching ============== */
    { id: 'gda-c12', title: 'Sorting & Searching', icon: '🔍', sections: [
      { type: 'heading', text: 'Sorting matters', level: 1 },
      { type: 'para', html: 'Many ML preprocessing tasks — deduplication, percentiles, joins, top-k — need sorted data. GATE asks about complexity, stability, and in-place properties.' },

      { type: 'heading', text: 'See sorting algorithms', level: 2 },
      { type: 'widget', name: 'sort-vis', props: {} },

      { type: 'heading', text: 'Bubble / insertion / selection', level: 2 },
      { type: 'code', lang: 'math', code:
`All three: O(n²) worst, O(n²) average
Insertion: O(n) best (already sorted)
All are in-place, only insertion is online.` },

      { type: 'heading', text: 'Merge sort', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">merge_sort</span>(a):
    <span class="kw">if</span> <span class="fn">len</span>(a) &lt;= <span class="num">1</span>: <span class="kw">return</span> a
    m = <span class="fn">len</span>(a) // <span class="num">2</span>
    L = <span class="fn">merge_sort</span>(a[:m])
    R = <span class="fn">merge_sort</span>(a[m:])
    <span class="kw">return</span> <span class="fn">merge</span>(L, R)` },
      { type: 'list', kind: 'check', items: [
        'Time: O(n log n) always',
        'Stable; not in-place (O(n) extra)',
        'Great for linked lists and external sorts'
      ]},

      { type: 'heading', text: 'Quicksort', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">quicksort</span>(a, lo, hi):
    <span class="kw">if</span> lo &lt; hi:
        p = <span class="fn">partition</span>(a, lo, hi)   <span class="com"># pivot index</span>
        <span class="fn">quicksort</span>(a, lo, p-<span class="num">1</span>)
        <span class="fn">quicksort</span>(a, p+<span class="num">1</span>, hi)` },
      { type: 'list', kind: 'check', items: [
        'Average O(n log n), worst O(n²) (sorted input + bad pivot)',
        'In-place, not stable',
        'Randomised pivot makes worst case unlikely'
      ]},

      { type: 'heading', text: 'Heap sort', level: 2 },
      { type: 'code', lang: 'math', code:
`Build max-heap (O(n)), repeatedly extract max into back.
Time: O(n log n)  always
In-place, not stable.` },

      { type: 'heading', text: 'Counting / radix (non-comparison)', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Counting sort</strong>: O(n + k) — works when values are integers in small range k',
        '<strong>Radix sort</strong>: O(d·(n+k)) digit by digit',
        'Beats the O(n log n) comparison lower bound by exploiting structure'
      ]},

      { type: 'heading', text: 'Comparison lower bound', level: 2 },
      { type: 'code', lang: 'math', code:
`Any comparison-based sort needs Ω(n log n) comparisons in the worst case.
Proof: decision tree has n! leaves ⇒ height ≥ log₂(n!) = Θ(n log n).` },

      { type: 'heading', text: 'Linear search vs binary search', level: 2 },
      { type: 'code', lang: 'math', code:
`Linear : O(n)        — any array
Binary : O(log n)    — sorted array only` },
      { type: 'widget', name: 'binary-search-vis', props: {} },

      { type: 'heading', text: 'Binary search code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">binary_search</span>(a, x):
    lo, hi = <span class="num">0</span>, <span class="fn">len</span>(a) - <span class="num">1</span>
    <span class="kw">while</span> lo &lt;= hi:
        m = (lo + hi) // <span class="num">2</span>
        <span class="kw">if</span> a[m] == x: <span class="kw">return</span> m
        <span class="kw">elif</span> a[m] &lt; x: lo = m + <span class="num">1</span>
        <span class="kw">else</span>: hi = m - <span class="num">1</span>
    <span class="kw">return</span> -<span class="num">1</span>` },

      { type: 'heading', text: 'Properties summary', level: 2 },
      { type: 'code', lang: 'math', code:
`Algorithm     Best     Avg       Worst     Stable  InPlace
Bubble        n        n²        n²        ✓        ✓
Insertion     n        n²        n²        ✓        ✓
Selection     n²       n²        n²        ✗        ✓
Merge         n log n  n log n   n log n   ✓        ✗
Quick         n log n  n log n   n²        ✗        ✓
Heap          n log n  n log n   n log n   ✗        ✓
Counting      n+k      n+k       n+k       ✓        ✗` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Number of comparisons in worst case for binary search on n=15 sorted items?' },
      { type: 'code', lang: 'math', code:
`⌈log₂(16)⌉ = 4 comparisons` }
    ]},

    /* ============== CH 13: Dynamic Programming ============== */
    { id: 'gda-c13', title: 'Dynamic Programming', icon: '🧩', sections: [
      { type: 'heading', text: 'Why DP?', level: 1 },
      { type: 'para', html: 'DP solves problems that have <strong>overlapping subproblems</strong> and <strong>optimal substructure</strong> by remembering subresults instead of recomputing them.' },

      { type: 'heading', text: 'Memoisation vs tabulation', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Top-down (memoisation):</strong> recursive; cache on first call.',
        '<strong>Bottom-up (tabulation):</strong> iterative; fill a table from base cases.'
      ]},

      { type: 'heading', text: 'Fibonacci — the canonical example', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Naive: O(2^n)</span>
<span class="kw">def</span> <span class="fn">fib</span>(n):
    <span class="kw">if</span> n &lt; <span class="num">2</span>: <span class="kw">return</span> n
    <span class="kw">return</span> <span class="fn">fib</span>(n-<span class="num">1</span>) + <span class="fn">fib</span>(n-<span class="num">2</span>)

<span class="com"># DP: O(n)</span>
<span class="kw">def</span> <span class="fn">fib_dp</span>(n):
    f = [<span class="num">0</span>, <span class="num">1</span>] + [<span class="num">0</span>] * (n-<span class="num">1</span>)
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, n+<span class="num">1</span>):
        f[i] = f[i-<span class="num">1</span>] + f[i-<span class="num">2</span>]
    <span class="kw">return</span> f[n]` },

      { type: 'heading', text: '0/1 Knapsack', level: 2 },
      { type: 'code', lang: 'math', code:
`Given weights w[i], values v[i], capacity W:
dp[i][c] = max value using items 1..i, capacity c
  = max( dp[i-1][c],                    // skip i
         dp[i-1][c - w[i]] + v[i] )    // take i  (if w[i] ≤ c)
Answer: dp[n][W],   Time O(nW)` },

      { type: 'heading', text: 'Longest Common Subsequence', level: 2 },
      { type: 'code', lang: 'math', code:
`dp[i][j] = LCS(A[1..i], B[1..j])
   if A[i] == B[j]:
        dp[i][j] = dp[i-1][j-1] + 1
   else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
Time O(mn).` },

      { type: 'heading', text: 'Coin change', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">min_coins</span>(coins, amount):
    dp = [<span class="fn">float</span>(<span class="str">'inf'</span>)] * (amount + <span class="num">1</span>)
    dp[<span class="num">0</span>] = <span class="num">0</span>
    <span class="kw">for</span> a <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, amount + <span class="num">1</span>):
        <span class="kw">for</span> c <span class="kw">in</span> coins:
            <span class="kw">if</span> c &lt;= a:
                dp[a] = <span class="fn">min</span>(dp[a], dp[a-c] + <span class="num">1</span>)
    <span class="kw">return</span> dp[amount] <span class="kw">if</span> dp[amount] != <span class="fn">float</span>(<span class="str">'inf'</span>) <span class="kw">else</span> -<span class="num">1</span>` },

      { type: 'heading', text: 'Matrix chain multiplication', level: 2 },
      { type: 'code', lang: 'math', code:
`m[i][j] = min cost to multiply Aᵢ ... Aⱼ
       = min_{i ≤ k < j} ( m[i][k] + m[k+1][j] + pᵢ₋₁·pₖ·pⱼ )
Time O(n³).` },

      { type: 'heading', text: 'Identifying a DP problem', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Solution depends on solutions to smaller subproblems',
        'Same subproblems recur in the recursion tree',
        'Decision at each step: take / skip / split',
        'Asks for count, max, min, or feasibility'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'For 0/1 knapsack with <code>n</code> items and capacity <code>W</code>, the standard DP runtime is:' },
      { type: 'code', lang: 'math', code:
`O(n · W)    (pseudo-polynomial)` }
    ]},

    /* ============== CH 14: SQL for Analytics ============== */
    { id: 'gda-c14', title: 'SQL for Analytics', icon: '🗃️', sections: [
      { type: 'heading', text: 'Why SQL', level: 1 },
      { type: 'para', html: 'SQL is the lingua franca for working with structured data. Analytics SQL goes beyond <code>SELECT</code>: aggregations, window functions, CTEs, and joins.' },

      { type: 'heading', text: 'Query order vs writing order', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Written</span>
<span class="kw">SELECT</span>  ...
<span class="kw">FROM</span>    ...
<span class="kw">WHERE</span>   ...
<span class="kw">GROUP BY</span> ...
<span class="kw">HAVING</span>  ...
<span class="kw">ORDER BY</span> ...
<span class="kw">LIMIT</span>   ...

<span class="com">-- Logical execution order</span>
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT` },

      { type: 'heading', text: 'GROUP BY + aggregates', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> dept, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> n, <span class="fn">AVG</span>(salary) <span class="kw">AS</span> avg_sal
<span class="kw">FROM</span>   employees
<span class="kw">WHERE</span>  hire_year &gt;= <span class="num">2020</span>
<span class="kw">GROUP BY</span> dept
<span class="kw">HAVING</span> <span class="fn">AVG</span>(salary) &gt; <span class="num">50000</span>
<span class="kw">ORDER BY</span> avg_sal <span class="kw">DESC</span>;` },
      { type: 'callout', kind: 'tip', html: '<code>WHERE</code> filters rows before grouping; <code>HAVING</code> filters groups after aggregation.' },

      { type: 'heading', text: 'Joins', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">INNER JOIN</span>  : keep rows matching on both sides
<span class="kw">LEFT JOIN</span>   : keep all left rows, fill NULLs on right
<span class="kw">RIGHT JOIN</span>  : mirror of LEFT
<span class="kw">FULL JOIN</span>   : keep everything, NULLs where unmatched
<span class="kw">CROSS JOIN</span>  : cartesian product` },

      { type: 'heading', text: 'Window functions', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> emp_id, dept, salary,
       <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept <span class="kw">ORDER BY</span> salary <span class="kw">DESC</span>) <span class="kw">AS</span> rnk,
       <span class="fn">AVG</span>(salary) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept) <span class="kw">AS</span> dept_avg
<span class="kw">FROM</span> employees;` },
      { type: 'list', kind: 'bullet', items: [
        '<code>ROW_NUMBER()</code> — unique rank, ties broken arbitrarily',
        '<code>RANK()</code> — same rank for ties, gaps after',
        '<code>DENSE_RANK()</code> — same rank for ties, no gaps',
        '<code>LAG / LEAD</code> — peek previous / next row'
      ]},

      { type: 'heading', text: 'Common Table Expressions (CTE)', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">WITH</span> top_depts <span class="kw">AS</span> (
    <span class="kw">SELECT</span> dept, <span class="fn">SUM</span>(revenue) <span class="kw">AS</span> r
    <span class="kw">FROM</span> sales
    <span class="kw">GROUP BY</span> dept
    <span class="kw">ORDER BY</span> r <span class="kw">DESC</span>
    <span class="kw">LIMIT</span> <span class="num">5</span>
)
<span class="kw">SELECT</span> e.* <span class="kw">FROM</span> employees e
<span class="kw">JOIN</span> top_depts t <span class="kw">ON</span> e.dept = t.dept;` },

      { type: 'heading', text: 'Subqueries vs joins', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Scalar subqueries return a single value — fine in SELECT clause',
        'EXISTS often faster than IN for big sets',
        'Correlated subqueries run once per outer row — careful with cost'
      ]},

      { type: 'heading', text: 'Set operations', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">UNION</span>        — combine + dedupe
<span class="kw">UNION ALL</span>    — combine, keep duplicates
<span class="kw">INTERSECT</span>    — common rows
<span class="kw">EXCEPT</span>       — rows in A not in B` },

      { type: 'heading', text: 'Indexes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'B-tree index speeds equality and range filters',
        'Hash index speeds equality only',
        'Composite index <code>(a, b)</code> helps queries on <code>a</code> or <code>(a, b)</code>, not on <code>b</code> alone',
        'Indexes slow down writes — use sparingly on OLTP tables'
      ]},

      { type: 'heading', text: 'Worked example — top-2 per group', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
   <span class="kw">SELECT</span> *, <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span>
     (<span class="kw">PARTITION BY</span> dept <span class="kw">ORDER BY</span> salary <span class="kw">DESC</span>) rn
   <span class="kw">FROM</span> employees
)
<span class="kw">SELECT</span> * <span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= <span class="num">2</span>;` },

      { type: 'heading', text: 'GATE-style query reading', level: 2 },
      { type: 'para', html: 'A <code>LEFT JOIN</code> followed by <code>WHERE B.col IS NULL</code> selects rows in <strong>A only</strong> — anti-join.' }
    ]},

    /* ============== CH 15: OLAP vs OLTP ============== */
    { id: 'gda-c15', title: 'OLAP vs OLTP', icon: '🏬', sections: [
      { type: 'heading', text: 'Two worlds of databases', level: 1 },
      { type: 'para', html: '<strong>OLTP</strong> handles many small transactional reads/writes (e.g. banking). <strong>OLAP</strong> answers analytical questions over large historical data (e.g. dashboards).' },

      { type: 'heading', text: 'Side by side', level: 2 },
      { type: 'image', alt: 'oltp olap', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <rect x="30" y="40" width="250" height="150" rx="10" fill="#7c4dff" fill-opacity="0.15" stroke="#7c4dff" stroke-width="2"/>
  <text x="155" y="65" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="#5e35d5">OLTP</text>
  <text x="155" y="95" text-anchor="middle" font-family="Nunito" font-size="11">Many small txns</text>
  <text x="155" y="115" text-anchor="middle" font-family="Nunito" font-size="11">Row-store</text>
  <text x="155" y="135" text-anchor="middle" font-family="Nunito" font-size="11">Normalised (3NF)</text>
  <text x="155" y="155" text-anchor="middle" font-family="Nunito" font-size="11">Read + write</text>
  <text x="155" y="175" text-anchor="middle" font-family="Nunito" font-size="11">ms latency</text>
  <rect x="320" y="40" width="250" height="150" rx="10" fill="#1cb0f6" fill-opacity="0.15" stroke="#1cb0f6" stroke-width="2"/>
  <text x="445" y="65" text-anchor="middle" font-family="Nunito" font-weight="bold" fill="#0e88c8">OLAP</text>
  <text x="445" y="95" text-anchor="middle" font-family="Nunito" font-size="11">Large analytical scans</text>
  <text x="445" y="115" text-anchor="middle" font-family="Nunito" font-size="11">Column-store</text>
  <text x="445" y="135" text-anchor="middle" font-family="Nunito" font-size="11">Denormalised (star)</text>
  <text x="445" y="155" text-anchor="middle" font-family="Nunito" font-size="11">Read-heavy</text>
  <text x="445" y="175" text-anchor="middle" font-family="Nunito" font-size="11">Seconds to minutes</text>
</svg>` },

      { type: 'heading', text: 'Star schema', level: 2 },
      { type: 'para', html: 'A central <strong>fact</strong> table holds measurable events; it joins to <strong>dimension</strong> tables that describe context (product, time, customer).' },
      { type: 'image', alt: 'star schema', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <rect x="240" y="80" width="120" height="60" rx="10" fill="#7c4dff"/>
  <text x="300" y="115" text-anchor="middle" fill="#fff" font-weight="bold">FACT_SALES</text>
  <rect x="40" y="30" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="90" y="60" text-anchor="middle" fill="#fff">dim_date</text>
  <rect x="460" y="30" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="510" y="60" text-anchor="middle" fill="#fff">dim_product</text>
  <rect x="40" y="150" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="90" y="180" text-anchor="middle" fill="#fff">dim_customer</text>
  <rect x="460" y="150" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="510" y="180" text-anchor="middle" fill="#fff">dim_store</text>
  <line x1="140" y1="55" x2="240" y2="100" stroke="#666"/>
  <line x1="460" y1="55" x2="360" y2="100" stroke="#666"/>
  <line x1="140" y1="175" x2="240" y2="135" stroke="#666"/>
  <line x1="460" y1="175" x2="360" y2="135" stroke="#666"/>
</svg>` },

      { type: 'heading', text: 'Snowflake schema', level: 2 },
      { type: 'para', html: 'Star with dimensions further normalised — e.g. <code>dim_product → dim_category → dim_department</code>. Saves space, costs joins.' },

      { type: 'heading', text: 'ETL pipeline', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Extract</strong> from sources (OLTP, files, APIs)',
        '<strong>Transform</strong> — clean, conform, aggregate',
        '<strong>Load</strong> into warehouse (fact + dim tables)',
        'Modern variant: ELT (load raw, transform later in SQL)'
      ]},

      { type: 'heading', text: 'OLAP cube operations', level: 2 },
      { type: 'code', lang: 'math', code:
`Roll-up    : aggregate up a hierarchy  (day → month → year)
Drill-down : opposite of roll-up
Slice      : fix one dimension
Dice       : fix multiple dimensions
Pivot      : rotate the cube` },

      { type: 'heading', text: 'Columnar storage', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Compress better — neighbouring values are similar',
        'Read only required columns — less IO',
        'Slow for single-row lookups',
        'Examples: Parquet, ORC, Redshift, BigQuery'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'A 4NF-normalised schema is most appropriate for which workload?' },
      { type: 'code', lang: 'math', code:
`OLTP — minimises update anomalies; OLAP prefers denormalised star.` }
    ]},

    /* ============== CH 16: Data Modeling ============== */
    { id: 'gda-c16', title: 'Data Modeling', icon: '📐', sections: [
      { type: 'heading', text: 'Conceptual to physical', level: 1 },
      { type: 'para', html: 'Data modeling translates business needs into tables. Three levels: conceptual (entities + relationships), logical (attributes + keys), physical (DDL, indexes).' },

      { type: 'heading', text: 'ER diagram basics', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Entity</strong>: thing of interest (Customer, Product)',
        '<strong>Attribute</strong>: property (name, price)',
        '<strong>Relationship</strong>: link (Customer places Order)',
        'Cardinalities: 1:1, 1:N, M:N'
      ]},

      { type: 'heading', text: 'Keys', level: 2 },
      { type: 'code', lang: 'math', code:
`Super key  : any superset that uniquely identifies a row
Candidate  : minimal super key
Primary    : chosen candidate; non-null, unique
Foreign    : column referencing a primary key in another table` },

      { type: 'heading', text: 'Normal forms (quick recap)', level: 2 },
      { type: 'code', lang: 'math', code:
`1NF : atomic attributes, no repeating groups
2NF : 1NF + no partial dependency on composite PK
3NF : 2NF + no transitive dependency
BCNF: every determinant is a candidate key` },

      { type: 'heading', text: 'Fact vs dimension', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Fact</strong> rows are <em>numeric measurements</em> with FKs to dimensions',
        '<strong>Dimensions</strong> describe the who/what/where/when/how of facts',
        'Grain = one row of the fact table represents what?',
        'Slowly Changing Dimensions (SCD): Type 1 overwrite, Type 2 keep history'
      ]},

      { type: 'heading', text: 'Worked example — retail', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Fact table</span>
<span class="kw">CREATE TABLE</span> fact_sales (
   sale_id      <span class="ty">BIGINT</span> <span class="kw">PRIMARY KEY</span>,
   date_key     <span class="ty">INT</span> <span class="kw">REFERENCES</span> dim_date(date_key),
   product_key  <span class="ty">INT</span> <span class="kw">REFERENCES</span> dim_product(product_key),
   store_key    <span class="ty">INT</span> <span class="kw">REFERENCES</span> dim_store(store_key),
   units        <span class="ty">INT</span>,
   revenue      <span class="ty">NUMERIC</span>(<span class="num">12</span>,<span class="num">2</span>)
);` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'A relation in BCNF is always in:' },
      { type: 'list', kind: 'bullet', items: [
        '1NF, 2NF, and 3NF — correct (BCNF strictly stronger)',
        'Only 3NF — wrong',
        'Only 2NF — wrong',
        '4NF — not necessarily'
      ]}
    ]},

    /* ============== CH 17: Supervised Learning ============== */
    { id: 'gda-c17', title: 'Supervised Learning', icon: '🎯', sections: [
      { type: 'heading', text: 'Learn from labelled data', level: 1 },
      { type: 'para', html: 'In <strong>supervised learning</strong> we have training pairs <code>(xᵢ, yᵢ)</code> and seek a function <code>f(x) ≈ y</code> that generalises to new x.' },

      { type: 'heading', text: 'Regression vs classification', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Regression</strong>: y is continuous (house price, temperature)',
        '<strong>Classification</strong>: y is categorical (spam / not spam, digit 0–9)',
        '<strong>Binary</strong> classification: two classes; <strong>multi-class</strong>: > 2'
      ]},

      { type: 'heading', text: 'Training, validation, test', level: 2 },
      { type: 'image', alt: 'data split', svg:
`<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="120" fill="#fafafa" rx="8"/>
  <rect x="40" y="40" width="350" height="50" fill="#58cc02"/>
  <text x="215" y="72" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">Train 70%</text>
  <rect x="390" y="40" width="100" height="50" fill="#ff9600"/>
  <text x="440" y="72" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">Val 15%</text>
  <rect x="490" y="40" width="80" height="50" fill="#ff4b4b"/>
  <text x="530" y="72" text-anchor="middle" fill="#fff" font-weight="bold" font-family="Nunito">Test 15%</text>
</svg>` },

      { type: 'heading', text: 'Bias-variance tradeoff', level: 2 },
      { type: 'code', lang: 'math', code:
`Expected error = Bias²  +  Variance  +  Irreducible noise

High bias  ⇒  underfit (too simple)
High variance ⇒ overfit (memorises training data)` },
      { type: 'callout', kind: 'tip', html: 'Increase model capacity to lower bias; regularise or get more data to lower variance.' },

      { type: 'heading', text: 'Generalisation', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Training error → measured on train set',
        'Test error → on held-out unseen data',
        'Gap = test − train; large gap ⇒ overfit'
      ]},

      { type: 'heading', text: 'Common loss functions', level: 2 },
      { type: 'code', lang: 'math', code:
`Regression
  MSE      = (1/n) Σ (ŷᵢ − yᵢ)²
  MAE      = (1/n) Σ |ŷᵢ − yᵢ|

Classification
  0/1 loss = (1/n) Σ 1[ŷᵢ ≠ yᵢ]
  Cross-entropy = − Σ yᵢ · log ŷᵢ` },

      { type: 'heading', text: 'Feature engineering', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Scaling: standardise (z-score) or min-max',
        'Encoding categories: one-hot, ordinal, target encoding',
        'Polynomial / interaction features',
        'Handling missing values: impute or use a model that supports them'
      ]},

      { type: 'heading', text: 'Regularisation', level: 2 },
      { type: 'code', lang: 'math', code:
`L2 (Ridge):  Loss + λ · ‖w‖²
L1 (Lasso):  Loss + λ · ‖w‖₁   (encourages sparsity)
ElasticNet:  combination of L1 + L2` },

      { type: 'heading', text: 'Hyperparameters', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Learning rate, number of trees, depth, λ, dropout, batch size',
        'Tuned via grid / random / Bayesian search on a validation set',
        'Never tune on the test set — that leaks information'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'If training accuracy is 99% but test accuracy is 70%, the model has:' },
      { type: 'code', lang: 'math', code:
`High variance (overfit). Use more data, simpler model, or regularisation.` }
    ]},

    /* ============== CH 18: Linear & Logistic Regression ============== */
    { id: 'gda-c18', title: 'Linear & Logistic Regression', icon: '📉', sections: [
      { type: 'heading', text: 'Linear regression', level: 1 },
      { type: 'para', html: 'Fit a line (or hyperplane) <code>ŷ = w₀ + w₁ x₁ + … + wₙ xₙ</code> by minimising squared error.' },

      { type: 'heading', text: 'Least squares', level: 2 },
      { type: 'code', lang: 'math', code:
`Minimise  J(w) = (1/n) Σ (ŷᵢ − yᵢ)²
            = (1/n) ‖X w − y‖²

Closed form:    w* = (Xᵀ X)⁻¹ Xᵀ y
(X is design matrix with a column of 1s for bias.)` },

      { type: 'heading', text: 'Geometric view', level: 2 },
      { type: 'image', alt: 'linear regression fit', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <line x1="40" y1="180" x2="560" y2="180" stroke="#888"/>
  <line x1="60" y1="200" x2="60" y2="20" stroke="#888"/>
  <line x1="60" y1="180" x2="560" y2="40" stroke="#7c4dff" stroke-width="3"/>
  <circle cx="100" cy="170" r="4" fill="#1cb0f6"/>
  <circle cx="150" cy="160" r="4" fill="#1cb0f6"/>
  <circle cx="200" cy="140" r="4" fill="#1cb0f6"/>
  <circle cx="250" cy="120" r="4" fill="#1cb0f6"/>
  <circle cx="300" cy="100" r="4" fill="#1cb0f6"/>
  <circle cx="350" cy="95" r="4" fill="#1cb0f6"/>
  <circle cx="400" cy="80" r="4" fill="#1cb0f6"/>
  <circle cx="450" cy="60" r="4" fill="#1cb0f6"/>
  <text x="430" y="25" font-family="Nunito" font-weight="bold" fill="#7c4dff">ŷ = wx + b</text>
</svg>` },

      { type: 'heading', text: 'Assumptions', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Linear relationship between features and target',
        'Errors are independent',
        'Errors have constant variance (homoscedasticity)',
        'Errors are normally distributed (for inference, not for prediction)'
      ]},

      { type: 'heading', text: 'R² score', level: 2 },
      { type: 'code', lang: 'math', code:
`R² = 1 − SSres / SStot
SSres = Σ(yᵢ − ŷᵢ)²
SStot = Σ(yᵢ − ȳ)²
R² ∈ (−∞, 1]; closer to 1 is better.` },

      { type: 'heading', text: 'Logistic regression', level: 2 },
      { type: 'para', html: 'For binary classification — outputs a probability via the sigmoid.' },
      { type: 'code', lang: 'math', code:
`σ(z) = 1 / (1 + e⁻ᶻ)
P(y=1 | x) = σ(wᵀx + b)
Decision: predict 1 if P > 0.5` },
      { type: 'image', alt: 'sigmoid', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <line x1="40" y1="120" x2="560" y2="120" stroke="#888"/>
  <line x1="300" y1="20" x2="300" y2="200" stroke="#888"/>
  <path d="M 40 200 C 200 200 240 190 280 150 C 320 90 340 30 560 30" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <text x="40" y="40" font-family="Nunito" font-weight="bold" fill="#7c4dff">σ(z) = 1/(1+e⁻ᶻ)</text>
  <text x="555" y="135" font-family="Nunito" font-size="11">z</text>
  <text x="280" y="20" font-family="Nunito" font-size="11">1</text>
  <text x="280" y="200" font-family="Nunito" font-size="11">0</text>
</svg>` },

      { type: 'heading', text: 'Cross-entropy loss', level: 2 },
      { type: 'code', lang: 'math', code:
`L = −(1/n) Σ [ yᵢ log p̂ᵢ + (1−yᵢ) log(1−p̂ᵢ) ]
No closed form — solve with gradient descent.` },

      { type: 'heading', text: 'Gradient of logistic loss', level: 2 },
      { type: 'code', lang: 'math', code:
`∂L/∂w = (1/n) Xᵀ (p̂ − y)
A clean, vectorised update.` },

      { type: 'heading', text: 'Multi-class — softmax', level: 2 },
      { type: 'code', lang: 'math', code:
`softmax(z)ₖ = e^{zₖ} / Σⱼ e^{zⱼ}
Used as the final activation for K-class classifiers.` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'In logistic regression, the decision boundary in feature space is:' },
      { type: 'code', lang: 'math', code:
`Linear — given by  wᵀx + b = 0
(non-linear with kernel or feature engineering)` }
    ]},

    /* ============== CH 19: Decision Trees & Ensembles ============== */
    { id: 'gda-c19', title: 'Decision Trees & Ensembles', icon: '🌲', sections: [
      { type: 'heading', text: 'Decision tree', level: 1 },
      { type: 'para', html: 'A decision tree recursively splits the feature space along axis-aligned thresholds. Easy to interpret and powerful when combined into ensembles.' },

      { type: 'heading', text: 'Splitting criterion', level: 2 },
      { type: 'code', lang: 'math', code:
`Gini impurity   :   1 − Σ pₖ²
Entropy         :   − Σ pₖ log₂ pₖ
Information gain:   parent_impurity − Σ (nᵢ/n) child_impurity` },
      { type: 'callout', kind: 'info', html: 'Choose the split that maximises information gain (or equivalently, minimises weighted child impurity).' },

      { type: 'heading', text: 'Worked split example', level: 2 },
      { type: 'code', lang: 'math', code:
`Parent: 8 positives, 4 negatives  (n=12)
   p = 8/12,  Gini = 1 − (8/12)² − (4/12)² = 0.444

Split A: left {6+,1−}, right {2+,3−}
   Gini_L = 1 − (6/7)² − (1/7)² = 0.245
   Gini_R = 1 − (2/5)² − (3/5)² = 0.480
   Weighted = (7/12)·0.245 + (5/12)·0.480 = 0.343
   Gain    = 0.444 − 0.343 = 0.101  ✓` },

      { type: 'heading', text: 'Pruning', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Pre-pruning: stop early (max depth, min samples)',
        'Post-pruning: grow full tree then collapse weak subtrees',
        'Goal: avoid overfitting on noisy data'
      ]},

      { type: 'heading', text: 'Algorithms', level: 2 },
      { type: 'code', lang: 'math', code:
`ID3   — uses entropy, categorical features
C4.5  — handles continuous + missing values, post-prunes
CART  — Gini, binary splits, used by scikit-learn` },

      { type: 'heading', text: 'Bagging & Random Forest', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Train many trees on bootstrap samples',
        'At each split, choose from a random subset of features',
        'Predict by majority vote (classification) or average (regression)',
        'Reduces variance; works well out-of-the-box'
      ]},

      { type: 'heading', text: 'Boosting', level: 2 },
      { type: 'para', html: 'Train weak learners <em>sequentially</em>; each new learner focuses on the errors of the previous ones.' },
      { type: 'code', lang: 'math', code:
`AdaBoost  — reweights misclassified samples
Gradient Boosting — fits residuals using gradient descent
XGBoost / LightGBM / CatBoost — efficient implementations` },

      { type: 'heading', text: 'Ensemble bias-variance', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Bagging primarily reduces <strong>variance</strong>',
        'Boosting primarily reduces <strong>bias</strong>',
        'Stacking learns a meta-model over base predictions'
      ]},

      { type: 'heading', text: 'Pros & cons of trees', level: 2 },
      { type: 'code', lang: 'math', code:
`+ Easy to interpret
+ Handle mixed feature types
+ No need to scale features
− Prone to overfit a single deep tree
− Unstable: small data change can flip splits
⇒ Use Random Forest / GBM in practice` },

      { type: 'heading', text: 'Feature importance', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Mean Decrease in Impurity (MDI) — sum of gain across splits',
        'Permutation importance — drop in score when feature shuffled',
        'SHAP — game-theoretic, model-agnostic'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'For a perfectly pure node, Gini impurity equals:' },
      { type: 'code', lang: 'math', code:
`0 — only one class present.` }
    ]},

    /* ============== CH 20: Unsupervised — K-Means & PCA ============== */
    { id: 'gda-c20', title: 'Unsupervised — K-Means & PCA', icon: '🧬', sections: [
      { type: 'heading', text: 'Unsupervised learning', level: 1 },
      { type: 'para', html: 'No labels. Goal: discover structure — clusters, low-dimensional representations, or anomalies.' },

      { type: 'heading', text: 'K-Means algorithm', level: 2 },
      { type: 'code', lang: 'math', code:
`1. Initialise k cluster centroids (e.g. random or k-means++)
2. Assign each point to nearest centroid (by Euclidean distance)
3. Update each centroid to mean of its points
4. Repeat 2–3 until assignments stop changing` },

      { type: 'heading', text: 'Objective', level: 2 },
      { type: 'code', lang: 'math', code:
`Minimise WCSS = Σₖ Σ_{x ∈ Cₖ} ‖x − μₖ‖²
("Within-cluster sum of squares")` },

      { type: 'heading', text: 'Clusters visualised', level: 2 },
      { type: 'image', alt: 'kmeans clusters', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g fill="#7c4dff">
    <circle cx="110" cy="60" r="5"/><circle cx="140" cy="80" r="5"/><circle cx="100" cy="100" r="5"/>
    <circle cx="130" cy="55" r="5"/><circle cx="160" cy="90" r="5"/>
  </g>
  <g fill="#1cb0f6">
    <circle cx="320" cy="160" r="5"/><circle cx="340" cy="180" r="5"/><circle cx="300" cy="150" r="5"/>
    <circle cx="360" cy="170" r="5"/><circle cx="330" cy="190" r="5"/>
  </g>
  <g fill="#58cc02">
    <circle cx="460" cy="60" r="5"/><circle cx="490" cy="80" r="5"/><circle cx="470" cy="100" r="5"/>
    <circle cx="500" cy="55" r="5"/><circle cx="520" cy="90" r="5"/>
  </g>
  <text x="125" y="40" font-family="Nunito" font-weight="bold" fill="#7c4dff">C1</text>
  <text x="325" y="140" font-family="Nunito" font-weight="bold" fill="#1cb0f6">C2</text>
  <text x="475" y="40" font-family="Nunito" font-weight="bold" fill="#58cc02">C3</text>
</svg>` },

      { type: 'heading', text: 'Choosing k', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Elbow method: plot WCSS vs k; pick the elbow',
        'Silhouette score: average (b−a)/max(a,b)',
        'Domain knowledge — sometimes the cleanest signal'
      ]},

      { type: 'heading', text: 'Pitfalls', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Sensitive to initial centroids — use k-means++',
        'Assumes spherical, equal-size clusters',
        'Outliers pull centroids',
        'Scale features before running'
      ]},

      { type: 'heading', text: 'Other clustering', level: 2 },
      { type: 'code', lang: 'math', code:
`Hierarchical — agglomerative or divisive; dendrogram output
DBSCAN       — density-based; finds arbitrary shapes + noise
GMM          — soft assignments via mixture of Gaussians (EM algorithm)` },

      { type: 'heading', text: 'PCA — Principal Component Analysis', level: 2 },
      { type: 'para', html: 'Find orthogonal directions of maximum variance and project data onto the top <code>k</code>.' },
      { type: 'code', lang: 'math', code:
`1. Centre data:   X̃ = X − mean
2. Covariance :   C = (1/n) X̃ᵀ X̃
3. Eigendecompose C → eigenvectors v₁, v₂, ...
4. Project    :   Z = X̃ V_k    (top k eigenvectors)` },

      { type: 'heading', text: 'Variance explained', level: 2 },
      { type: 'code', lang: 'math', code:
`Variance explained by PC i = λᵢ / Σⱼ λⱼ
Choose k so cumulative ≥ 0.95.` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Given covariance eigenvalues <code>{6, 3, 1}</code>, fraction of variance captured by the top 2 PCs is:' },
      { type: 'code', lang: 'math', code:
`(6 + 3) / (6 + 3 + 1) = 9 / 10 = 0.9   (90%)` }
    ]},

    /* ============== CH 21: Model Evaluation ============== */
    { id: 'gda-c21', title: 'Model Evaluation', icon: '📏', sections: [
      { type: 'heading', text: 'Beyond accuracy', level: 1 },
      { type: 'para', html: 'A single accuracy number can hide huge problems. For imbalanced data, precision, recall, F1, and AUC matter more.' },

      { type: 'heading', text: 'Confusion matrix', level: 2 },
      { type: 'image', alt: 'confusion matrix', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="30" text-anchor="middle" font-family="Nunito" font-weight="bold">Confusion Matrix</text>
  <text x="220" y="60" text-anchor="middle" font-family="Nunito" font-size="12">Predicted +</text>
  <text x="380" y="60" text-anchor="middle" font-family="Nunito" font-size="12">Predicted −</text>
  <text x="100" y="120" text-anchor="middle" font-family="Nunito" font-size="12">Actual +</text>
  <text x="100" y="190" text-anchor="middle" font-family="Nunito" font-size="12">Actual −</text>
  <rect x="160" y="80" width="120" height="60" fill="#58cc02" fill-opacity="0.5"/>
  <text x="220" y="115" text-anchor="middle" font-family="Nunito" font-weight="bold">TP</text>
  <rect x="320" y="80" width="120" height="60" fill="#ff9600" fill-opacity="0.5"/>
  <text x="380" y="115" text-anchor="middle" font-family="Nunito" font-weight="bold">FN</text>
  <rect x="160" y="150" width="120" height="60" fill="#ff4b4b" fill-opacity="0.5"/>
  <text x="220" y="185" text-anchor="middle" font-family="Nunito" font-weight="bold">FP</text>
  <rect x="320" y="150" width="120" height="60" fill="#58cc02" fill-opacity="0.5"/>
  <text x="380" y="185" text-anchor="middle" font-family="Nunito" font-weight="bold">TN</text>
</svg>` },

      { type: 'heading', text: 'Definitions', level: 2 },
      { type: 'code', lang: 'math', code:
`Accuracy  = (TP + TN) / N
Precision = TP / (TP + FP)        ← of predicted +, how many right?
Recall    = TP / (TP + FN)        ← of actual +, how many caught?
F1        = 2·P·R / (P + R)       ← harmonic mean
Specificity = TN / (TN + FP)` },

      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'para', html: 'Out of 100 examples: TP = 40, FP = 10, FN = 5, TN = 45.' },
      { type: 'code', lang: 'math', code:
`Accuracy  = 85 / 100 = 0.85
Precision = 40 / 50  = 0.80
Recall    = 40 / 45  ≈ 0.889
F1        = 2·0.8·0.889 / (0.8 + 0.889) ≈ 0.842` },

      { type: 'heading', text: 'When precision vs recall?', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Precision</strong> matters when false positives hurt (spam filter, court trial)',
        '<strong>Recall</strong> matters when missing positives hurts (cancer screening, fraud)',
        'F1 if you need a balance and classes are imbalanced'
      ]},

      { type: 'heading', text: 'ROC and AUC', level: 2 },
      { type: 'code', lang: 'math', code:
`TPR (recall) = TP / (TP + FN)
FPR          = FP / (FP + TN)
Plot TPR vs FPR for all thresholds — ROC curve.
AUC = area under the curve ∈ [0, 1].
AUC = 0.5 → random; 1.0 → perfect.` },

      { type: 'heading', text: 'PR curve', level: 2 },
      { type: 'para', html: 'Plots precision vs recall as threshold varies. Better than ROC under heavy class imbalance.' },

      { type: 'heading', text: 'Cross-validation', level: 2 },
      { type: 'code', lang: 'math', code:
`K-fold CV: split data into k parts.
For i = 1..k:
  Train on k−1 parts, validate on the held-out part.
Score = average of k validation scores.
Stratified k-fold preserves class ratios.` },

      { type: 'heading', text: 'Regression metrics', level: 2 },
      { type: 'code', lang: 'math', code:
`MSE   = (1/n) Σ (ŷ − y)²
RMSE  = √MSE
MAE   = (1/n) Σ |ŷ − y|
R²    = 1 − SSres / SStot
MAPE  = (1/n) Σ |(y − ŷ)/y|` },

      { type: 'heading', text: 'Calibration', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'A well-calibrated classifier: of all points it predicts with p=0.8, ~80% are actually positive',
        'Use Platt scaling or isotonic regression to calibrate',
        'Logistic regression is well-calibrated; tree models often need calibration'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'A spam filter with 99% recall and 20% precision is bad because:' },
      { type: 'code', lang: 'math', code:
`Most "spam" predictions are false positives — legit emails labelled spam.
Tune threshold up or add features to lift precision.` }
    ]},

    /* ============== CH 22: Search Algorithms ============== */
    { id: 'gda-c22', title: 'Search Algorithms', icon: '🧭', sections: [
      { type: 'heading', text: 'Search as problem solving', level: 1 },
      { type: 'para', html: 'AI search frames a problem as a graph: states are nodes, actions are edges. A solution is a path from start to goal.' },

      { type: 'heading', text: 'Vocabulary', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>State space</strong>: all possible configurations',
        '<strong>Successor</strong> function: states reachable in one move',
        '<strong>Goal test</strong>: predicate on state',
        '<strong>Path cost</strong>: sum of action costs'
      ]},

      { type: 'heading', text: 'Search tree', level: 2 },
      { type: 'image', alt: 'search tree', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <circle cx="300" cy="40" r="18" fill="#7c4dff"/>
  <text x="300" y="46" text-anchor="middle" fill="#fff" font-weight="bold">S</text>
  <circle cx="180" cy="110" r="18" fill="#1cb0f6"/>
  <text x="180" y="116" text-anchor="middle" fill="#fff">A</text>
  <circle cx="300" cy="110" r="18" fill="#1cb0f6"/>
  <text x="300" y="116" text-anchor="middle" fill="#fff">B</text>
  <circle cx="420" cy="110" r="18" fill="#1cb0f6"/>
  <text x="420" y="116" text-anchor="middle" fill="#fff">C</text>
  <circle cx="120" cy="180" r="18" fill="#58cc02"/>
  <text x="120" y="186" text-anchor="middle" fill="#fff">G</text>
  <circle cx="240" cy="180" r="18" fill="#888"/>
  <text x="240" y="186" text-anchor="middle" fill="#fff">D</text>
  <circle cx="360" cy="180" r="18" fill="#888"/>
  <text x="360" y="186" text-anchor="middle" fill="#fff">E</text>
  <circle cx="480" cy="180" r="18" fill="#888"/>
  <text x="480" y="186" text-anchor="middle" fill="#fff">F</text>
  <line x1="300" y1="58" x2="180" y2="92" stroke="#666"/>
  <line x1="300" y1="58" x2="300" y2="92" stroke="#666"/>
  <line x1="300" y1="58" x2="420" y2="92" stroke="#666"/>
  <line x1="180" y1="128" x2="120" y2="162" stroke="#666"/>
  <line x1="180" y1="128" x2="240" y2="162" stroke="#666"/>
  <line x1="420" y1="128" x2="360" y2="162" stroke="#666"/>
  <line x1="420" y1="128" x2="480" y2="162" stroke="#666"/>
</svg>` },

      { type: 'heading', text: 'BFS — breadth-first search', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">bfs</span>(start, goal, neighbours):
    frontier = <span class="fn">deque</span>([start])
    visited  = {start}
    parent   = {start: <span class="kw">None</span>}
    <span class="kw">while</span> frontier:
        n = frontier.<span class="fn">popleft</span>()
        <span class="kw">if</span> n == goal: <span class="kw">return</span> <span class="fn">reconstruct</span>(parent, n)
        <span class="kw">for</span> m <span class="kw">in</span> <span class="fn">neighbours</span>(n):
            <span class="kw">if</span> m <span class="kw">not in</span> visited:
                visited.<span class="fn">add</span>(m)
                parent[m] = n
                frontier.<span class="fn">append</span>(m)` },
      { type: 'list', kind: 'check', items: [
        'Complete: yes (finite branching)',
        'Optimal: yes if all step costs equal',
        'Time: O(bᵈ),  Space: O(bᵈ)'
      ]},

      { type: 'heading', text: 'DFS — depth-first search', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Goes deep first; uses a stack or recursion',
        'Space O(bm) — much better than BFS',
        'Not complete on infinite trees; not optimal',
        'IDDFS = iterative deepening DFS combines BFS optimality + DFS memory'
      ]},

      { type: 'heading', text: 'Uniform-cost search (UCS)', level: 2 },
      { type: 'code', lang: 'math', code:
`Pop node with lowest g(n) (path cost so far).
= Dijkstra\'s algorithm restricted to a single goal.
Optimal when step costs ≥ 0.` },

      { type: 'heading', text: 'Greedy best-first', level: 2 },
      { type: 'para', html: 'Expands node with lowest heuristic <code>h(n)</code>. Fast but not optimal — can be misled by an inadmissible heuristic.' },

      { type: 'heading', text: 'A* search', level: 2 },
      { type: 'code', lang: 'math', code:
`f(n) = g(n) + h(n)
g(n) = cost so far
h(n) = heuristic estimate to goal
Optimal if h is admissible (never overestimates).
Optimal & efficient if h is consistent (monotone).` },
      { type: 'callout', kind: 'info', html: 'Examples of admissible heuristics: straight-line distance for road navigation, Manhattan distance for a grid.' },

      { type: 'heading', text: 'Worked example — 8-puzzle', level: 2 },
      { type: 'code', lang: 'math', code:
`h₁ = number of misplaced tiles (admissible)
h₂ = sum of Manhattan distances of tiles to goal (admissible, dominates h₁)
A* with h₂ expands fewer nodes than with h₁.` },

      { type: 'heading', text: 'Adversarial — minimax', level: 2 },
      { type: 'code', lang: 'math', code:
`MAX chooses the move with highest value;
MIN chooses the move with lowest value.
Alpha-beta pruning skips branches that cannot improve the result.` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'Which search is guaranteed optimal with arbitrary non-negative step costs?' },
      { type: 'code', lang: 'math', code:
`UCS (Dijkstra) and A* with admissible heuristic.
BFS only when all step costs equal.` }
    ]},

    /* ============== CH 23: Knowledge Representation ============== */
    { id: 'gda-c23', title: 'Knowledge Representation', icon: '📚', sections: [
      { type: 'heading', text: 'Encoding knowledge', level: 1 },
      { type: 'para', html: 'AI needs structured representations of facts and rules to reason. The classical foundation is logic — propositional first, then first-order.' },

      { type: 'heading', text: 'Propositional logic', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Atomic propositions</strong>: P, Q, R …',
        'Connectives: <code>¬, ∧, ∨, →, ↔</code>',
        'A sentence is <em>valid</em> if true in every model; <em>satisfiable</em> if true in some'
      ]},

      { type: 'heading', text: 'Truth tables', level: 2 },
      { type: 'widget', name: 'truth-table', props: { expr: 'P -> Q' } },

      { type: 'heading', text: 'Key equivalences', level: 2 },
      { type: 'code', lang: 'math', code:
`¬¬P            ≡ P
P → Q          ≡ ¬P ∨ Q
¬(P ∧ Q)       ≡ ¬P ∨ ¬Q     (De Morgan)
¬(P ∨ Q)       ≡ ¬P ∧ ¬Q
P ↔ Q          ≡ (P → Q) ∧ (Q → P)` },

      { type: 'heading', text: 'Inference rules', level: 2 },
      { type: 'code', lang: 'math', code:
`Modus Ponens   :  P, P → Q  ⊢  Q
Modus Tollens  :  ¬Q, P → Q  ⊢  ¬P
And-Elim       :  P ∧ Q     ⊢  P
Resolution     :  (A ∨ B), (¬B ∨ C)  ⊢  (A ∨ C)` },

      { type: 'heading', text: 'CNF / DNF', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>CNF</strong>: conjunction of disjunctions  <code>(A ∨ ¬B) ∧ (C ∨ D)</code>',
        '<strong>DNF</strong>: disjunction of conjunctions  <code>(A ∧ ¬B) ∨ (C ∧ D)</code>',
        'SAT solvers operate on CNF; resolution requires CNF too'
      ]},

      { type: 'heading', text: 'First-order logic (FOL)', level: 2 },
      { type: 'code', lang: 'math', code:
`Adds:
  Constants  : Alice, Bob
  Variables  : x, y
  Predicates : Loves(x, y), Parent(x, y)
  Functions  : motherOf(x)
  Quantifiers: ∀x, ∃x` },
      { type: 'para', html: 'Example sentences:' },
      { type: 'code', lang: 'math', code:
`∀x Person(x) → Mortal(x)
∃x Student(x) ∧ Likes(x, Algorithms)
∀x ∀y Parent(x, y) → Older(x, y)` },

      { type: 'heading', text: 'Unification & resolution in FOL', level: 2 },
      { type: 'code', lang: 'math', code:
`Unify Loves(x, Mary) with Loves(John, y)
   ⇒  substitution {x/John, y/Mary}
Resolution lifts propositional resolution using MGUs.` },

      { type: 'heading', text: 'Limits of logical KR', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Brittle to incomplete information',
        'No native handling of uncertainty (use probability — next chapter)',
        'NP-hard to decide propositional satisfiability',
        'Real systems combine logic + probabilistic / neural components'
      ]}
    ]},

    /* ============== CH 24: Probabilistic Reasoning ============== */
    { id: 'gda-c24', title: 'Probabilistic Reasoning', icon: '🕸️', sections: [
      { type: 'heading', text: 'Reasoning under uncertainty', level: 1 },
      { type: 'para', html: 'Logic is too strict for the real world. Probability theory lets us reason about hypotheses given partial evidence.' },

      { type: 'heading', text: 'Joint distributions', level: 2 },
      { type: 'code', lang: 'math', code:
`Full joint P(X₁, X₂, ..., Xₙ) answers every question via marginalisation
   P(A) = Σ_b,c,... P(A, B=b, C=c, ...)
but has 2ⁿ entries — infeasible.` },

      { type: 'heading', text: 'Bayesian network — idea', level: 2 },
      { type: 'para', html: 'A directed acyclic graph (DAG) where each node has a conditional probability table given its parents. Captures independencies compactly.' },
      { type: 'image', alt: 'bayes net', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <circle cx="180" cy="60" r="28" fill="#7c4dff"/>
  <text x="180" y="65" text-anchor="middle" fill="#fff" font-weight="bold">Burglary</text>
  <circle cx="420" cy="60" r="28" fill="#7c4dff"/>
  <text x="420" y="65" text-anchor="middle" fill="#fff" font-weight="bold">Quake</text>
  <circle cx="300" cy="130" r="28" fill="#1cb0f6"/>
  <text x="300" y="135" text-anchor="middle" fill="#fff" font-weight="bold">Alarm</text>
  <circle cx="180" cy="190" r="28" fill="#58cc02"/>
  <text x="180" y="195" text-anchor="middle" fill="#fff" font-weight="bold">John</text>
  <circle cx="420" cy="190" r="28" fill="#58cc02"/>
  <text x="420" y="195" text-anchor="middle" fill="#fff" font-weight="bold">Mary</text>
  <line x1="200" y1="80" x2="280" y2="115" stroke="#444"/>
  <line x1="400" y1="80" x2="320" y2="115" stroke="#444"/>
  <line x1="280" y1="150" x2="200" y2="175" stroke="#444"/>
  <line x1="320" y1="150" x2="400" y2="175" stroke="#444"/>
</svg>` },

      { type: 'heading', text: 'Chain rule on a BN', level: 2 },
      { type: 'code', lang: 'math', code:
`P(X₁..Xₙ) = Π P(Xᵢ | Parents(Xᵢ))

For the alarm network:
P(B, Q, A, J, M) = P(B) P(Q) P(A|B,Q) P(J|A) P(M|A)` },

      { type: 'heading', text: 'Inference example', level: 2 },
      { type: 'para', html: 'Compute <code>P(B=true | J=true)</code> using the alarm network and given CPTs by summing out the hidden variables (Q, A, M).' },
      { type: 'code', lang: 'math', code:
`P(B | J) ∝ Σ_{q,a,m} P(B) P(Q=q) P(A=a|B,Q=q) P(J=true|A=a) P(M=m|A=a)
Practical algorithms: variable elimination, belief propagation, MCMC.` },

      { type: 'heading', text: 'Conditional independence', level: 2 },
      { type: 'code', lang: 'math', code:
`X ⊥ Y | Z   iff   P(X | Y, Z) = P(X | Z)
A node is independent of non-descendants given its parents.
Pattern recognised via d-separation in the DAG.` },

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'For a Bayesian net with n binary variables and max in-degree k, the total number of CPT entries is at most:' },
      { type: 'code', lang: 'math', code:
`n · 2^k   (vs 2^n for the full joint)
This is the compactness benefit.` }
    ]},

    /* ============== CH 25: Neural Network Basics ============== */
    { id: 'gda-c25', title: 'Neural Network Basics', icon: '🧠', sections: [
      { type: 'heading', text: 'A neuron', level: 1 },
      { type: 'para', html: 'An artificial neuron computes a weighted sum of inputs and passes it through a non-linear activation.' },
      { type: 'code', lang: 'math', code:
`z = Σᵢ wᵢ xᵢ + b
a = σ(z)         (activation)` },

      { type: 'heading', text: 'Network of neurons', level: 2 },
      { type: 'image', alt: 'neural net', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <g fill="#7c4dff">
    <circle cx="80"  cy="60"  r="18"/>
    <circle cx="80"  cy="120" r="18"/>
    <circle cx="80"  cy="180" r="18"/>
  </g>
  <g fill="#1cb0f6">
    <circle cx="280" cy="40"  r="18"/>
    <circle cx="280" cy="100" r="18"/>
    <circle cx="280" cy="160" r="18"/>
    <circle cx="280" cy="220" r="18"/>
  </g>
  <g fill="#58cc02">
    <circle cx="480" cy="100" r="18"/>
    <circle cx="480" cy="160" r="18"/>
  </g>
  <g stroke="#999" stroke-width="0.6">
    <line x1="98" y1="60" x2="262" y2="40"/><line x1="98" y1="60" x2="262" y2="100"/>
    <line x1="98" y1="60" x2="262" y2="160"/><line x1="98" y1="60" x2="262" y2="220"/>
    <line x1="98" y1="120" x2="262" y2="40"/><line x1="98" y1="120" x2="262" y2="100"/>
    <line x1="98" y1="120" x2="262" y2="160"/><line x1="98" y1="120" x2="262" y2="220"/>
    <line x1="98" y1="180" x2="262" y2="40"/><line x1="98" y1="180" x2="262" y2="100"/>
    <line x1="98" y1="180" x2="262" y2="160"/><line x1="98" y1="180" x2="262" y2="220"/>
    <line x1="298" y1="40"  x2="462" y2="100"/><line x1="298" y1="40"  x2="462" y2="160"/>
    <line x1="298" y1="100" x2="462" y2="100"/><line x1="298" y1="100" x2="462" y2="160"/>
    <line x1="298" y1="160" x2="462" y2="100"/><line x1="298" y1="160" x2="462" y2="160"/>
    <line x1="298" y1="220" x2="462" y2="100"/><line x1="298" y1="220" x2="462" y2="160"/>
  </g>
  <text x="80" y="220" text-anchor="middle" font-family="Nunito" font-size="11">Input</text>
  <text x="280" y="20" text-anchor="middle" font-family="Nunito" font-size="11">Hidden</text>
  <text x="480" y="80" text-anchor="middle" font-family="Nunito" font-size="11">Output</text>
</svg>` },

      { type: 'heading', text: 'Activations', level: 2 },
      { type: 'code', lang: 'math', code:
`Sigmoid : σ(z) = 1 / (1 + e⁻ᶻ)        — squashes to (0,1)
Tanh    : tanh(z) ∈ (−1, 1)
ReLU    : max(0, z)                     — fast, default
LeakyReLU: max(αz, z) with small α
Softmax : for K-way classification` },

      { type: 'heading', text: 'Why nonlinearities?', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Without nonlinearities, stacking layers collapses to a single linear map. Nonlinearity is what lets networks approximate complex functions.' },

      { type: 'heading', text: 'Forward pass (single layer)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">forward</span>(x, W, b):
    z = W @ x + b
    a = <span class="fn">relu</span>(z)
    <span class="kw">return</span> a` },

      { type: 'heading', text: 'Loss', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Regression: Mean Squared Error',
        'Binary classification: Binary Cross-Entropy',
        'Multi-class: Categorical Cross-Entropy with softmax'
      ]},

      { type: 'heading', text: 'Universal approximation theorem', level: 2 },
      { type: 'para', html: 'A single hidden layer with enough neurons can approximate any continuous function arbitrarily well on a compact set. Practical reasons (training, generalisation) make us prefer <em>deep</em> networks over wide ones.' },

      { type: 'heading', text: 'Initialisation', level: 2 },
      { type: 'code', lang: 'math', code:
`Xavier (Glorot):  W ~ U[ −√(6/(n_in+n_out)) , +√(...) ]
He (for ReLU)  :  W ~ N(0, 2/n_in)
Avoids vanishing/exploding activations at start.` },

      { type: 'heading', text: 'Regularising NNs', level: 2 },
      { type: 'list', kind: 'check', items: [
        'L2 weight decay',
        'Dropout — randomly zero out activations during training',
        'Batch normalisation',
        'Early stopping based on validation loss'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'A 3-layer network with sizes <code>(4, 8, 3)</code> (input, hidden, output) has how many learnable parameters (with biases)?' },
      { type: 'code', lang: 'math', code:
`Layer 1 weights: 4·8 = 32,  biases: 8
Layer 2 weights: 8·3 = 24,  biases: 3
Total = 32 + 8 + 24 + 3 = 67` }
    ]},

    /* ============== CH 26: Training NNs — Backprop ============== */
    { id: 'gda-c26', title: 'Training NNs — Backprop', icon: '🔁', sections: [
      { type: 'heading', text: 'The training loop', level: 1 },
      { type: 'code', lang: 'python', code:
`<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(epochs):
    <span class="kw">for</span> x, y <span class="kw">in</span> <span class="fn">loader</span>:
        ŷ   = <span class="fn">forward</span>(x)              <span class="com"># forward</span>
        L   = <span class="fn">loss</span>(ŷ, y)              <span class="com"># compute loss</span>
        grads = <span class="fn">backward</span>(L)           <span class="com"># backprop</span>
        <span class="fn">update</span>(params, grads, lr)     <span class="com"># SGD step</span>` },

      { type: 'heading', text: 'Backprop = chain rule on a graph', level: 2 },
      { type: 'para', html: 'Every operation is a node in a computation graph. Gradients flow from the loss backward, multiplied by local Jacobians.' },

      { type: 'heading', text: 'Two-layer net derivation', level: 2 },
      { type: 'code', lang: 'math', code:
`z₁ = W₁ x + b₁
a₁ = σ(z₁)
z₂ = W₂ a₁ + b₂
ŷ  = softmax(z₂)
L  = − Σ yₖ log ŷₖ

∂L/∂z₂ = ŷ − y
∂L/∂W₂ = (ŷ − y) a₁ᵀ
∂L/∂a₁ = W₂ᵀ (ŷ − y)
∂L/∂z₁ = ∂L/∂a₁  ·  σ\'(z₁)
∂L/∂W₁ = ∂L/∂z₁ · xᵀ` },

      { type: 'heading', text: 'Computational graph', level: 2 },
      { type: 'image', alt: 'backprop graph', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <rect x="40" y="80" width="80" height="40" rx="8" fill="#7c4dff"/>
  <text x="80" y="105" text-anchor="middle" fill="#fff" font-weight="bold">x</text>
  <rect x="160" y="80" width="80" height="40" rx="8" fill="#1cb0f6"/>
  <text x="200" y="105" text-anchor="middle" fill="#fff" font-weight="bold">W·x</text>
  <rect x="280" y="80" width="80" height="40" rx="8" fill="#1cb0f6"/>
  <text x="320" y="105" text-anchor="middle" fill="#fff" font-weight="bold">σ</text>
  <rect x="400" y="80" width="80" height="40" rx="8" fill="#58cc02"/>
  <text x="440" y="105" text-anchor="middle" fill="#fff" font-weight="bold">loss</text>
  <line x1="120" y1="100" x2="158" y2="100" stroke="#444" marker-end="url(#ah1)"/>
  <line x1="240" y1="100" x2="278" y2="100" stroke="#444" marker-end="url(#ah1)"/>
  <line x1="360" y1="100" x2="398" y2="100" stroke="#444" marker-end="url(#ah1)"/>
  <text x="290" y="180" text-anchor="middle" font-family="Nunito" font-size="11" fill="#ff4b4b">← gradients flow back</text>
</svg>` },

      { type: 'heading', text: 'Vanishing & exploding gradients', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Sigmoid/tanh saturate — gradients ≈ 0 for large |z| ⇒ vanishing',
        'Deep nets multiply many small gradients ⇒ vanishing further',
        'Large weights ⇒ exploding gradients',
        'Mitigations: ReLU, residual connections, batch/layer norm, gradient clipping'
      ]},

      { type: 'heading', text: 'Optimisers (deep learning flavour)', level: 2 },
      { type: 'code', lang: 'math', code:
`SGD       : w ← w − η · ∇L
Momentum  : v ← γv + ∇L;  w ← w − η · v
RMSProp   : adapt η per-parameter via running square gradients
Adam      : combines momentum + RMSProp; default choice` },

      { type: 'heading', text: 'Learning rate schedules', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Step decay: drop η by factor every N epochs',
        'Cosine annealing: smooth cosine curve to ηmin',
        'Warm-up + decay: small η at start, then larger, then decay'
      ]},

      { type: 'heading', text: 'Mini-batches', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Smaller batches: noisier but escape sharp minima',
        'Larger batches: smoother gradients, more parallelism',
        'Typical: 32, 64, 128, 256'
      ]},

      { type: 'heading', text: 'Debugging training', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Loss not decreasing → check learning rate, initialisation, data labels',
        'Loss = NaN → exploding gradient or log(0); clip or use a smaller LR',
        'Train good, test bad → overfit; add regularisation',
        'Gradients ≈ 0 → vanishing; switch activation, add residuals'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'For a sigmoid activation, the derivative is:' },
      { type: 'code', lang: 'math', code:
`σ'(z) = σ(z) · (1 − σ(z))
maximum value 0.25 at z = 0  ⇒  contributes to vanishing in deep nets.` }
    ]},

    /* ============== CH 27: CNNs & RNNs ============== */
    { id: 'gda-c27', title: 'CNNs & RNNs', icon: '🖼️', sections: [
      { type: 'heading', text: 'Convolutional Neural Networks', level: 1 },
      { type: 'para', html: 'CNNs exploit spatial locality — each neuron looks at a small patch (receptive field) of the input via a shared filter (kernel).' },

      { type: 'heading', text: 'Convolution operation', level: 2 },
      { type: 'code', lang: 'math', code:
`y[i, j] = Σ_{u, v} x[i+u, j+v] · k[u, v]
Filter slides over the image, computes dot products.` },
      { type: 'image', alt: 'conv', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g stroke="#5e35d5" fill="#7c4dff" fill-opacity="0.2">
    <rect x="60"  y="40" width="180" height="140" stroke-width="2"/>
  </g>
  <g stroke="#0e88c8" fill="#1cb0f6" fill-opacity="0.4">
    <rect x="80" y="60" width="60" height="60" stroke-width="2"/>
  </g>
  <text x="150" y="200" text-anchor="middle" font-family="Nunito" font-size="11">input + kernel</text>
  <g stroke="#0e88c8" fill="#1cb0f6">
    <rect x="320" y="60" width="40" height="40"/>
  </g>
  <text x="340" y="115" text-anchor="middle" font-family="Nunito" font-size="11">kernel</text>
  <g stroke="#2e7d32" fill="#58cc02" fill-opacity="0.3">
    <rect x="430" y="60" width="120" height="100" stroke-width="2"/>
  </g>
  <text x="490" y="180" text-anchor="middle" font-family="Nunito" font-size="11">feature map</text>
</svg>` },

      { type: 'heading', text: 'Output size formula', level: 2 },
      { type: 'code', lang: 'math', code:
`Out  =  ((W − K + 2P) / S)  +  1
  W = input width
  K = kernel size
  P = padding
  S = stride` },

      { type: 'heading', text: 'Pooling', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Max pool</strong>: take maximum in each window',
        '<strong>Average pool</strong>: take mean',
        'Reduces resolution; gives local translation invariance'
      ]},

      { type: 'heading', text: 'Typical CNN architecture', level: 2 },
      { type: 'code', lang: 'math', code:
`Conv → ReLU → Conv → ReLU → MaxPool
 (repeat)
→ Flatten → Dense → Softmax` },

      { type: 'heading', text: 'Famous CNNs', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'LeNet (1998) — first digit recognition',
        'AlexNet (2012) — ignited deep learning',
        'VGG, GoogLeNet, ResNet (residual connections)',
        'EfficientNet — scaled depth, width, resolution'
      ]},

      { type: 'heading', text: 'Recurrent Neural Networks', level: 2 },
      { type: 'para', html: 'RNNs handle sequences by sharing parameters across time and carrying a hidden state.' },
      { type: 'code', lang: 'math', code:
`hₜ = σ(W_h · hₜ₋₁ + W_x · xₜ + b)
ŷₜ = W_y · hₜ + c` },

      { type: 'heading', text: 'Backprop through time (BPTT)', level: 2 },
      { type: 'para', html: 'Unroll the network across time steps and apply standard backprop. Gradients can vanish or explode over many steps.' },

      { type: 'heading', text: 'LSTM and GRU', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>LSTM</strong>: forget / input / output gates + cell state',
        '<strong>GRU</strong>: reset / update gates, fewer parameters',
        'Both alleviate vanishing gradient over long sequences'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'For a 32×32 input with a 5×5 filter, stride 1, padding 0, the output size is:' },
      { type: 'code', lang: 'math', code:
`(32 − 5 + 0)/1 + 1 = 28
⇒  28×28 feature map.` }
    ]},

    /* ============== CH 28: Transformers & LLMs ============== */
    { id: 'gda-c28', title: 'Transformers & LLMs', icon: '🤖', sections: [
      { type: 'heading', text: 'Why transformers', level: 1 },
      { type: 'para', html: 'Transformers handle long-range dependencies in parallel using <strong>attention</strong>, replacing recurrence. They power modern LLMs (GPT, BERT, etc.).' },

      { type: 'heading', text: 'Attention is a soft lookup', level: 2 },
      { type: 'code', lang: 'math', code:
`Inputs:  Query Q, Keys K, Values V

Attention(Q, K, V) = softmax( Q Kᵀ / √dₖ ) · V` },
      { type: 'callout', kind: 'info', html: 'For each query, attention computes a weighted average of values — weights come from how similar the query is to each key.' },

      { type: 'heading', text: 'QKV illustrated', level: 2 },
      { type: 'image', alt: 'attention', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <rect x="40"  y="60" width="80" height="40" rx="8" fill="#7c4dff"/>
  <text x="80"  y="85" text-anchor="middle" fill="#fff" font-weight="bold">Q</text>
  <rect x="40"  y="120" width="80" height="40" rx="8" fill="#1cb0f6"/>
  <text x="80"  y="145" text-anchor="middle" fill="#fff" font-weight="bold">K</text>
  <rect x="40"  y="180" width="80" height="40" rx="8" fill="#58cc02"/>
  <text x="80"  y="205" text-anchor="middle" fill="#fff" font-weight="bold">V</text>
  <rect x="180" y="80" width="120" height="40" rx="8" fill="#ff9600"/>
  <text x="240" y="105" text-anchor="middle" fill="#fff" font-weight="bold">Q · Kᵀ</text>
  <rect x="340" y="80" width="120" height="40" rx="8" fill="#ff9600"/>
  <text x="400" y="105" text-anchor="middle" fill="#fff" font-weight="bold">softmax</text>
  <rect x="490" y="80" width="80" height="40" rx="8" fill="#ff4b4b"/>
  <text x="530" y="105" text-anchor="middle" fill="#fff" font-weight="bold">·V</text>
  <line x1="120" y1="80"  x2="178" y2="100" stroke="#444"/>
  <line x1="120" y1="140" x2="178" y2="100" stroke="#444"/>
  <line x1="300" y1="100" x2="338" y2="100" stroke="#444"/>
  <line x1="460" y1="100" x2="488" y2="100" stroke="#444"/>
  <line x1="120" y1="200" x2="488" y2="115" stroke="#444" stroke-dasharray="4 4"/>
</svg>` },

      { type: 'heading', text: 'Multi-head attention', level: 2 },
      { type: 'code', lang: 'math', code:
`Project Q, K, V into h heads (smaller dim).
Run scaled-dot attention in each head independently.
Concatenate outputs, project back to model dim.
⇒ captures multiple kinds of relationships in parallel.` },

      { type: 'heading', text: 'Transformer block', level: 2 },
      { type: 'code', lang: 'math', code:
`x → MultiHeadAttention(x) → Add & LayerNorm
  → FeedForward (2-layer MLP) → Add & LayerNorm` },

      { type: 'heading', text: 'Positional encoding', level: 2 },
      { type: 'para', html: 'Attention is order-agnostic; positional encodings (sinusoidal or learned) inject sequence order into the inputs.' },

      { type: 'heading', text: 'Encoder-decoder vs decoder-only', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>BERT</strong>: encoder-only, bidirectional attention, good for understanding',
        '<strong>GPT</strong>: decoder-only, causal mask, good for generation',
        '<strong>T5</strong>: full encoder-decoder, sequence-to-sequence'
      ]},

      { type: 'heading', text: 'Pre-training & fine-tuning', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Pre-train on massive unlabelled text (next-token / masked-token prediction)',
        'Fine-tune on a specific task with much less data',
        'Modern: instruction tuning + RLHF for helpful assistants'
      ]},

      { type: 'heading', text: 'GATE-style', level: 2 },
      { type: 'para', html: 'In scaled dot-product attention, the division by <code>√dₖ</code> is used because:' },
      { type: 'code', lang: 'math', code:
`Without scaling, dot products grow with dim → softmax pushes into tiny gradients.
Dividing by √dₖ keeps the variance ≈ 1, stabilising training.` }
    ]}

  ]
});

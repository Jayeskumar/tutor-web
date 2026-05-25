PUSH({
  id: 'gate-da',
  name: 'GATE DA',
  icon: '📊',
  color: '#00897b',
  description: 'GATE Data Science & AI — math, stats, ML, AI, deep learning.',
  units: [

    /* ============== UNIT 1 — Probability & Statistics ============== */
    {
      id: 'gda-u1',
      name: 'Unit 1 · Probability & Statistics',
      description: 'Core for any DA exam',
      lessons: [
        {
          id: 'gda-u1-l1',
          name: 'Probability fundamentals',
          icon: '🎲',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Basic probability', content: `<p>P(A) = favorable / total.</p>
<div class="code-block">P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
P(A | B) = P(A ∩ B) / P(B)
Independent:  P(A ∩ B) = P(A) · P(B)
Bayes:        P(A|B) = P(B|A)·P(A) / P(B)</div>
<p>For independent events: P(A|B) = P(A) (B gives no info about A).</p>` },
            { type: 'multiple-choice', prompt: 'P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. P(A ∪ B)?',
              options: [{text:'0.6', code:false},{text:'0.8', code:false},{text:'0.9', code:false},{text:'1.0', code:false}],
              correct: 1, explanation: '0.6 + 0.5 − 0.3 = 0.8.' },
            { type: 'multiple-choice', prompt: 'P(disease) = 0.01. Test: P(+|disease)=0.99, P(+|no disease)=0.05. P(disease | +)?',
              options: [{text:'≈0.99', code:false},{text:'≈0.16', code:false},{text:'≈0.50', code:false},{text:'≈0.05', code:false}],
              correct: 1, explanation: 'Bayes: (0.99·0.01) / (0.99·0.01 + 0.05·0.99) ≈ 0.166. Most positives are false positives — base rate matters!' },
            { type: 'true-false', statement: 'If A and B are mutually exclusive, P(A ∩ B) = 0.', correct: true, explanation: 'They cannot occur together.' },
            { type: 'output-predict', prompt: 'Two fair coins flipped. P(at least one head)?',
              code: `<span class="com">// 1 - P(no head) = 1 - 0.25</span>`,
              options: ['0.25','0.5','0.75','1.0'], correct: 2, explanation: '1 − P(TT) = 1 − 0.25 = 0.75.' }
          ]
        },
        {
          id: 'gda-u1-l2',
          name: 'Distributions',
          icon: '📈',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Common distributions', content: `<div class="code-block">Bernoulli(p):    coin flip — mean p, var p(1-p)
Binomial(n,p):   n Bernoulli trials — mean np, var np(1-p)
Poisson(λ):      rare events — mean λ, var λ
Normal(μ, σ²):   bell curve — mean μ, var σ²
Uniform(a,b):    flat in [a,b] — mean (a+b)/2</div>
<p>Central Limit Theorem: sample means → normal as sample size grows.</p>` },
            { type: 'multiple-choice', prompt: 'Mean and variance of Binomial(n=10, p=0.4)?',
              options: [{text:'4, 1.6', code:false},{text:'4, 2.4', code:false},{text:'4, 4', code:false},{text:'10, 4', code:false}],
              correct: 1, explanation: 'np = 4; np(1-p) = 10·0.4·0.6 = 2.4.' },
            { type: 'multiple-choice', prompt: 'For a Poisson(λ), variance equals:',
              options: [{text:'λ', code:false},{text:'λ²', code:false},{text:'√λ', code:false},{text:'1/λ', code:false}],
              correct: 0, explanation: 'Both mean and variance = λ. Defining property of Poisson.' },
            { type: 'true-false', statement: 'Central Limit Theorem requires the original distribution to be normal.', correct: false, explanation: 'CLT works for any distribution with finite variance — sample mean approaches normal.' },
            { type: 'fill-blank', prompt: 'Mean of Uniform(0, 10) is:',
              codeLines: [{html:'<span class="num">_BLANK_</span>'}],
              tokens: ['5','10','0','2.5'], correctAnswer: '5', explanation: '(0+10)/2 = 5.' }
          ]
        },
        {
          id: 'gda-u1-l3',
          name: 'Hypothesis testing & statistics',
          icon: '🧪',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Sampling, p-values, errors', content: `<p><strong>H₀</strong>: null (default). <strong>H₁</strong>: alternative.<br/>
<strong>p-value</strong>: probability of observing data under H₀. Small p → reject H₀.</p>
<p><strong>Type I error</strong>: reject true H₀ (false positive, α).<br/>
<strong>Type II error</strong>: accept false H₀ (false negative, β).</p>
<p>Sample mean x̄ has standard error σ/√n. Confidence interval: x̄ ± z·SE.</p>` },
            { type: 'multiple-choice', prompt: 'A Type I error means:',
              options: [{text:'Reject H₀ when H₀ is true', code:false},{text:'Accept H₀ when H₀ is false', code:false},{text:'Reject H₁', code:false},{text:'Sample too small', code:false}],
              correct: 0, explanation: 'False positive — rejected a true null.' },
            { type: 'multiple-choice', prompt: 'Standard error of the mean for n=100, σ=10:',
              options: [{text:'0.1', code:false},{text:'1', code:false},{text:'10', code:false},{text:'100', code:false}],
              correct: 1, explanation: 'σ/√n = 10/10 = 1.' },
            { type: 'true-false', statement: 'A p-value of 0.04 means H₀ is true with 4% chance.', correct: false, explanation: 'p-value is P(data | H₀), NOT P(H₀ | data). Common misinterpretation!' },
            { type: 'type-answer', prompt: 'If α = 0.05 and we reject H₀, the probability of being wrong (Type I) is at most ___%',
              accept: ['5','5%'], explanation: 'α is the Type I error rate.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Linear Algebra ============== */
    {
      id: 'gda-u2',
      name: 'Unit 2 · Linear Algebra',
      description: 'Vectors, matrices, decompositions',
      lessons: [
        {
          id: 'gda-u2-l1',
          name: 'Vectors & matrices',
          icon: '➡️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Building blocks', content: `<p><strong>Vector</strong>: array of numbers. <strong>Dot product</strong>: u·v = Σuᵢvᵢ.</p>
<p><strong>Matrix multiplication</strong>: AB[i][j] = Σ_k A[i][k]·B[k][j]. Defined when cols(A) = rows(B).</p>
<div class="code-block">A: m × n
B: n × p
AB: m × p

Time complexity (naive): O(m·n·p)</div>
<p>Identity matrix I: AI = IA = A. Inverse: AA⁻¹ = I (only if det(A) ≠ 0).</p>` },
            { type: 'multiple-choice', prompt: 'A is 3×4, B is 4×2. Dimensions of AB?',
              options: [{text:'3×2', code:false},{text:'4×4', code:false},{text:'3×4', code:false},{text:'Cannot multiply', code:false}],
              correct: 0, explanation: 'Result is m × p = 3 × 2.' },
            { type: 'output-predict', prompt: 'Dot product of [1, 2, 3] and [4, 5, 6]?',
              code: `<span class="com">// 1·4 + 2·5 + 3·6</span>`,
              options: ['12','24','32','42'], correct: 2, explanation: '4 + 10 + 18 = 32.' },
            { type: 'multiple-choice', prompt: 'A 4×4 matrix has determinant 0. It is:',
              options: [{text:'Invertible', code:false},{text:'Singular (no inverse)', code:false},{text:'Identity', code:false},{text:'Orthogonal', code:false}],
              correct: 1, explanation: 'det = 0 ⇒ singular.' },
            { type: 'true-false', statement: 'Matrix multiplication is commutative: AB = BA.', correct: false, explanation: 'In general AB ≠ BA.' }
          ]
        },
        {
          id: 'gda-u2-l2',
          name: 'Eigenvalues & SVD',
          icon: '🎯',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Decompositions for ML', content: `<p><strong>Eigenvector</strong> v of A: Av = λv. <strong>Eigenvalue</strong> λ.</p>
<p>Det(A − λI) = 0 → characteristic equation.</p>
<p><strong>SVD</strong>: A = U Σ V^T. Used in PCA, image compression, recommender systems.</p>
<div class="code-block">Trace(A)    = Σ λᵢ
det(A)      = ∏ λᵢ
Rank(A)     = number of non-zero eigenvalues (for symmetric)</div>` },
            { type: 'multiple-choice', prompt: 'For A = [[3, 0], [0, 5]], eigenvalues are:',
              options: [{text:'3 and 5', code:false},{text:'0 and 15', code:false},{text:'8 and 0', code:false},{text:'Cannot determine', code:false}],
              correct: 0, explanation: 'Diagonal matrix → eigenvalues are diagonal entries.' },
            { type: 'multiple-choice', prompt: 'PCA finds:',
              options: [{text:'Random projections', code:false},{text:'Directions of maximum variance (top eigenvectors of cov matrix)', code:false},{text:'Cluster centroids', code:false},{text:'Decision boundaries', code:false}],
              correct: 1, explanation: 'Principal components = top eigenvectors of covariance matrix.' },
            { type: 'true-false', statement: 'Sum of eigenvalues equals trace of the matrix.', correct: true, explanation: 'Fundamental identity.' },
            { type: 'fill-blank', prompt: 'SVD decomposes any matrix A as U · ___ · V^T',
              codeLines: [{html:'<span class="ty">_BLANK_</span>'}],
              tokens: ['Σ','I','D','L'], correctAnswer: 'Σ', explanation: 'Σ holds singular values on diagonal.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Calculus & Optimization ============== */
    {
      id: 'gda-u3',
      name: 'Unit 3 · Calculus & Optimization',
      description: 'Derivatives, gradient descent',
      lessons: [
        {
          id: 'gda-u3-l1',
          name: 'Derivatives & gradients',
          icon: '📉',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Slopes and gradients', content: `<p><strong>Derivative</strong> f\'(x): slope at point x.</p>
<div class="code-block">d/dx[xⁿ] = n·x^(n-1)
d/dx[ln x] = 1/x
d/dx[eˣ] = eˣ
d/dx[sin x] = cos x</div>
<p><strong>Gradient</strong> ∇f: vector of partial derivatives. Points in direction of steepest ascent.</p>
<p>For f(x,y) = x² + y², ∇f = [2x, 2y].</p>` },
            { type: 'multiple-choice', prompt: 'd/dx of x³ at x = 2?',
              options: [{text:'6', code:false},{text:'8', code:false},{text:'12', code:false},{text:'27', code:false}],
              correct: 2, explanation: '3x² = 3·4 = 12.' },
            { type: 'output-predict', prompt: 'Gradient of f(x,y) = x² + 3y at (1,2)?',
              code: `<span class="com">// ∂f/∂x = 2x = 2; ∂f/∂y = 3</span>`,
              options: ['[2, 3]','[1, 3]','[2, 0]','[3, 2]'], correct: 0, explanation: '∇f(1,2) = [2(1), 3] = [2, 3].' },
            { type: 'multiple-choice', prompt: 'At a local minimum, gradient is:',
              options: [{text:'Maximum', code:false},{text:'Zero vector', code:false},{text:'Negative', code:false},{text:'Constant', code:false}],
              correct: 1, explanation: 'Necessary condition: ∇f = 0 (critical point).' },
            { type: 'true-false', statement: 'Gradient points in the direction of steepest DESCENT.', correct: false, explanation: 'Steepest ASCENT. Negative gradient = descent.' }
          ]
        },
        {
          id: 'gda-u3-l2',
          name: 'Gradient descent',
          icon: '⛷️',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Optimization workhorse', content: `<p>To minimize f: take steps against the gradient.</p>
<div class="code-block">w ← w − η · ∇f(w)
<span class="com">// η = learning rate</span></div>
<p><strong>SGD</strong>: stochastic — use random sample, not full dataset.<br/>
<strong>Mini-batch SGD</strong>: small random batch (typical compromise).</p>
<p><strong>Adam, RMSProp</strong>: adaptive learning rates per parameter.</p>` },
            { type: 'multiple-choice', prompt: 'Learning rate η too large:',
              options: [{text:'Converges fast', code:false},{text:'May overshoot / diverge', code:false},{text:'Always optimal', code:false},{text:'Returns zero', code:false}],
              correct: 1, explanation: 'Large η can cause oscillation or divergence.' },
            { type: 'multiple-choice', prompt: 'Vanilla gradient descent uses what data per step?',
              options: [{text:'One random example', code:false},{text:'Entire dataset', code:false},{text:'A small batch', code:false},{text:'No data', code:false}],
              correct: 1, explanation: 'Batch GD uses full dataset (slow but stable).' },
            { type: 'fill-blank', prompt: 'Gradient descent update rule: w ← w − η · ___',
              codeLines: [{html:'<span class="fn">_BLANK_</span>(w)'}],
              tokens: ['∇f','f','f²','log f'], correctAnswer: '∇f' },
            { type: 'true-false', statement: 'SGD uses one random sample per update.', correct: true, explanation: 'Stochastic = random single sample (or sometimes one mini-batch).' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Programming, DSA ============== */
    {
      id: 'gda-u4',
      name: 'Unit 4 · Programming, DS, Algorithms',
      description: 'Core CS for DA',
      lessons: [
        {
          id: 'gda-u4-l1',
          name: 'Arrays, hash tables, trees',
          icon: '🧮',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Common DS for data tasks', content: `<p><strong>Array</strong>: O(1) access, O(n) search/insert.<br/>
<strong>Hash table</strong>: O(1) avg lookup/insert/delete — critical for counts, indexes, joins.<br/>
<strong>Tree</strong>: hierarchical; BST gives O(log n) ops if balanced.</p>
<p>For large data: prefer hash maps over linear scans, sorted lists where needed for range queries.</p>` },
            { type: 'multiple-choice', prompt: 'You need to count frequencies of words in a 1M-word corpus. Best DS:',
              options: [{text:'Array', code:false},{text:'Sorted list', code:false},{text:'HashMap', code:false},{text:'Linked list', code:false}],
              correct: 2, explanation: 'O(1) lookup and update per word → O(n) total.' },
            { type: 'multiple-choice', prompt: 'Search in a balanced BST of n nodes:',
              options: [{text:'O(1)', code:true},{text:'O(log n)', code:true},{text:'O(n)', code:true},{text:'O(n log n)', code:true}],
              correct: 1, explanation: 'Tree height ≈ log n.' },
            { type: 'true-false', statement: 'Hash collisions degrade worst-case lookup to O(n).', correct: true, explanation: 'When everything hashes to the same bucket.' }
          ]
        },
        {
          id: 'gda-u4-l2',
          name: 'Sorting & searching',
          icon: '🔍',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Sort then binary-search', content: `<p>Mergesort, quicksort, heapsort all O(n log n).</p>
<p>Binary search on sorted array: O(log n).</p>
<p>For huge datasets: external sort (when data doesn\'t fit memory).</p>
<div class="code-block">int <span class="fn">bsearch</span>(int[] a, int t) {
  int lo=<span class="num">0</span>, hi=a.length-<span class="num">1</span>;
  <span class="kw">while</span> (lo <= hi) {
    int mid=(lo+hi)/<span class="num">2</span>;
    <span class="kw">if</span> (a[mid]==t) <span class="kw">return</span> mid;
    <span class="kw">if</span> (a[mid]<t) lo=mid+<span class="num">1</span>; <span class="kw">else</span> hi=mid-<span class="num">1</span>;
  }
  <span class="kw">return</span> -<span class="num">1</span>;
}</div>` },
            { type: 'multiple-choice', prompt: 'Worst-case time complexity of quicksort?',
              options: [{text:'O(n)', code:true},{text:'O(n log n)', code:true},{text:'O(n²)', code:true},{text:'O(n³)', code:true}],
              correct: 2, explanation: 'Bad pivot → O(n²). Avg O(n log n).' },
            { type: 'multiple-choice', prompt: 'How many comparisons does binary search on 1024 sorted items make?',
              options: [{text:'10', code:false},{text:'32', code:false},{text:'128', code:false},{text:'1024', code:false}],
              correct: 0, explanation: 'log₂1024 = 10.' },
            { type: 'true-false', statement: 'Mergesort is stable; quicksort generally is not.', correct: true, explanation: 'Mergesort preserves order of equal keys.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Database & Warehousing ============== */
    {
      id: 'gda-u5',
      name: 'Unit 5 · DBMS & Warehousing',
      description: 'SQL + warehouse concepts',
      lessons: [
        {
          id: 'gda-u5-l1',
          name: 'SQL for analytics',
          icon: '📋',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Aggregations and joins', content: `<p>For analytics: <code>GROUP BY</code>, window functions (<code>OVER</code>), CTEs (<code>WITH</code>).</p>
<div class="code-block"><span class="kw">SELECT</span> user_id,
       <span class="fn">SUM</span>(amount) <span class="kw">AS</span> total,
       <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> <span class="fn">SUM</span>(amount) <span class="kw">DESC</span>) <span class="kw">AS</span> rk
<span class="kw">FROM</span> purchases
<span class="kw">GROUP BY</span> user_id;</div>` },
            { type: 'multiple-choice', prompt: 'Which SQL element is best for "top 10 customers by total spend"?',
              options: [{text:'GROUP BY + ORDER BY + LIMIT', code:false},{text:'WHERE only', code:false},{text:'ALTER TABLE', code:false},{text:'CREATE INDEX', code:false}],
              correct: 0, explanation: 'Group, sort, limit — standard top-N pattern.' },
            { type: 'multiple-choice', prompt: 'Window function differs from GROUP BY in that it:',
              options: [{text:'Removes rows', code:false},{text:'Keeps all rows, adds computed column', code:false},{text:'Sorts data', code:false},{text:'Creates indexes', code:false}],
              correct: 1, explanation: 'Window functions don\'t collapse rows.' },
            { type: 'true-false', statement: 'A CTE (Common Table Expression) is a temporary named result you can reference later in the query.', correct: true, explanation: 'Improves readability of complex queries.' }
          ]
        },
        {
          id: 'gda-u5-l2',
          name: 'Warehousing — OLAP vs OLTP',
          icon: '🏬',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Two database styles', content: `<p><strong>OLTP</strong>: many small txns (banking, web). Normalized, row-store.<br/>
<strong>OLAP</strong>: analytical queries on large data. Denormalized (star schema), column-store.</p>
<p><strong>Star schema</strong>: central fact table + dimension tables (date, product, customer).<br/>
<strong>Snowflake schema</strong>: dimensions further normalized.</p>
<p><strong>ETL</strong>: Extract → Transform → Load.</p>` },
            { type: 'multiple-choice', prompt: 'Star schema central table is called:',
              options: [{text:'Dimension', code:false},{text:'Fact table', code:false},{text:'Lookup', code:false},{text:'Cube', code:false}],
              correct: 1, explanation: 'Fact table holds metrics; dimensions describe.' },
            { type: 'multiple-choice', prompt: 'OLTP optimized for:',
              options: [{text:'Many transactions, low latency writes', code:false},{text:'Big analytical scans', code:false},{text:'Long-running reports', code:false},{text:'Backup', code:false}],
              correct: 0, explanation: 'OLTP = transactional throughput.' },
            { type: 'true-false', statement: 'OLAP databases are usually column-oriented for fast aggregations.', correct: true, explanation: 'Scanning one column is fast in columnar stores.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Machine Learning ============== */
    {
      id: 'gda-u6',
      name: 'Unit 6 · Machine Learning',
      description: 'Supervised & unsupervised',
      lessons: [
        {
          id: 'gda-u6-l1',
          name: 'Supervised: regression & classification',
          icon: '📚',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Learning from labeled data', content: `<p><strong>Regression</strong>: predict continuous output (linear regression, regression trees).<br/>
<strong>Classification</strong>: predict category (logistic regression, decision trees, SVM, KNN).</p>
<p><strong>Linear regression</strong>: y = wᵀx + b. Loss = MSE.<br/>
<strong>Logistic regression</strong>: P(y=1) = σ(wᵀx + b), where σ(z) = 1/(1+e⁻ᶻ).</p>
<p>Train via gradient descent on loss.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a classification problem?',
              options: [{text:'Predict house price', code:false},{text:'Predict spam vs not spam', code:false},{text:'Cluster users', code:false},{text:'Reduce dimensions', code:false}],
              correct: 1, explanation: 'Spam/not spam = binary classification.' },
            { type: 'multiple-choice', prompt: 'Logistic regression uses which activation?',
              options: [{text:'ReLU', code:false},{text:'Sigmoid', code:false},{text:'Tanh', code:false},{text:'Linear', code:false}],
              correct: 1, explanation: 'Sigmoid squashes to (0,1) for probability.' },
            { type: 'true-false', statement: 'KNN training takes O(n²) time.', correct: false, explanation: 'KNN is "lazy" — no training. All cost at inference: O(n) per query.' },
            { type: 'output-predict', prompt: 'σ(0) = ?',
              code: `<span class="com">// 1 / (1 + e^0)</span>`,
              options: ['0','0.25','0.5','1'], correct: 2, explanation: '1/(1+1) = 0.5.' }
          ]
        },
        {
          id: 'gda-u6-l2',
          name: 'Unsupervised & PCA',
          icon: '🔬',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Find structure without labels', content: `<p><strong>K-means</strong>: partition n points into k clusters; assign by nearest centroid, recompute centroids, repeat.</p>
<p><strong>Hierarchical</strong>: agglomerative (merge closest pairs) or divisive (split).</p>
<p><strong>PCA</strong>: dimension reduction — project to top-k principal components.</p>
<div class="code-block">PCA steps:
1. Center data (subtract mean)
2. Compute covariance matrix
3. Get top-k eigenvectors
4. Project data onto them</div>` },
            { type: 'multiple-choice', prompt: 'K-means requires:',
              options: [{text:'Labels', code:false},{text:'Choice of k (number of clusters)', code:false},{text:'A test set', code:false},{text:'Sorted data', code:false}],
              correct: 1, explanation: 'Number of clusters k must be specified upfront.' },
            { type: 'multiple-choice', prompt: 'PCA selects components by:',
              options: [{text:'Random', code:false},{text:'Highest variance (top eigenvalues)', code:false},{text:'Smallest variance', code:false},{text:'Alphabetical', code:false}],
              correct: 1, explanation: 'Top eigenvectors of covariance matrix = highest variance directions.' },
            { type: 'true-false', statement: 'K-means always converges to the global optimum.', correct: false, explanation: 'It converges to a local optimum; depends on init.' }
          ]
        },
        {
          id: 'gda-u6-l3',
          name: 'Evaluation & overfitting',
          icon: '📏',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Measuring performance', content: `<p><strong>Confusion matrix</strong>: TP, TN, FP, FN.</p>
<div class="code-block">Accuracy  = (TP+TN) / total
Precision = TP / (TP+FP)
Recall    = TP / (TP+FN)
F1        = 2·P·R / (P+R)</div>
<p><strong>Overfitting</strong>: train acc ≫ test acc. Fix with regularization, more data, simpler model.</p>
<p><strong>k-fold cross-validation</strong>: split data into k parts, train on k-1, validate on 1, repeat.</p>` },
            { type: 'multiple-choice', prompt: 'Recall = ?',
              options: [{text:'TP / (TP+FP)', code:false},{text:'TP / (TP+FN)', code:false},{text:'(TP+TN) / total', code:false},{text:'TN / (TN+FP)', code:false}],
              correct: 1, explanation: 'Recall = fraction of actual positives correctly identified.' },
            { type: 'multiple-choice', prompt: 'Training acc 99%, test acc 70%. Likely cause:',
              options: [{text:'Underfitting', code:false},{text:'Overfitting', code:false},{text:'No labels', code:false},{text:'Wrong metric', code:false}],
              correct: 1, explanation: 'Model memorised training data.' },
            { type: 'true-false', statement: 'L2 regularization adds a penalty proportional to sum of squared weights.', correct: true, explanation: 'Discourages large weights, reducing variance.' },
            { type: 'output-predict', prompt: 'Precision=0.8, Recall=0.5. F1?',
              code: `<span class="com">// 2·0.8·0.5 / (0.8+0.5)</span>`,
              options: ['0.50','0.62','0.65','0.80'], correct: 1, explanation: '0.8/(1.3) = 0.615 ≈ 0.62.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — AI ============== */
    {
      id: 'gda-u7',
      name: 'Unit 7 · Artificial Intelligence',
      description: 'Search, KR, reasoning',
      lessons: [
        {
          id: 'gda-u7-l1',
          name: 'Search algorithms',
          icon: '🔎',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Uninformed & informed search', content: `<p><strong>Uninformed</strong>: BFS, DFS, UCS (Uniform Cost — like Dijkstra).<br/>
<strong>Informed</strong>: A* uses heuristic h(n). A* optimal if h is admissible (never overestimates).</p>
<p>f(n) = g(n) + h(n) where g = cost so far, h = estimate to goal.</p>` },
            { type: 'multiple-choice', prompt: 'A* is optimal when h is:',
              options: [{text:'Maximum possible', code:false},{text:'Admissible (never overestimates)', code:false},{text:'Random', code:false},{text:'Zero', code:false}],
              correct: 1, explanation: 'Admissible heuristic guarantees optimal solution.' },
            { type: 'multiple-choice', prompt: 'BFS uses which data structure?',
              options: [{text:'Stack', code:true},{text:'Queue', code:true},{text:'Heap', code:true},{text:'Set', code:true}],
              correct: 1, explanation: 'FIFO queue for level-order exploration.' },
            { type: 'true-false', statement: 'DFS finds the shortest path in unweighted graphs.', correct: false, explanation: 'BFS finds shortest path in unweighted graphs.' },
            { type: 'fill-blank', prompt: 'A* heuristic value: f(n) = g(n) + ___',
              codeLines: [{html:'<span class="fn">_BLANK_</span>(n)'}],
              tokens: ['h','g','f','c'], correctAnswer: 'h' }
          ]
        },
        {
          id: 'gda-u7-l2',
          name: 'Knowledge representation',
          icon: '🧠',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Symbolic AI basics', content: `<p><strong>Propositional logic</strong>: variables, AND/OR/NOT/→. Inference rules like modus ponens.</p>
<p><strong>First-order logic</strong>: adds quantifiers (∀, ∃) and predicates.</p>
<p><strong>Inference</strong>: forward chaining, backward chaining, resolution.</p>
<p><strong>Bayesian networks</strong>: graphical model of probabilistic dependencies.</p>` },
            { type: 'multiple-choice', prompt: 'In FOL, ∀x P(x) means:',
              options: [{text:'At least one x has P', code:false},{text:'All x have P', code:false},{text:'No x has P', code:false},{text:'Probability of x', code:false}],
              correct: 1, explanation: '∀ = universal quantifier ("for all").' },
            { type: 'multiple-choice', prompt: 'Modus ponens: From P and (P → Q), conclude:',
              options: [{text:'¬P', code:false},{text:'Q', code:false},{text:'P ∧ Q', code:false},{text:'P ∨ Q', code:false}],
              correct: 1, explanation: 'Classic inference rule.' },
            { type: 'true-false', statement: 'Bayesian networks model dependencies via a directed acyclic graph.', correct: true, explanation: 'Nodes = variables, edges = conditional dependencies.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Deep Learning ============== */
    {
      id: 'gda-u8',
      name: 'Unit 8 · Deep Learning',
      description: 'NN, CNN, RNN, Transformers',
      lessons: [
        {
          id: 'gda-u8-l1',
          name: 'Neural networks',
          icon: '🧬',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Layers, activations, backprop', content: `<p>A <strong>neuron</strong>: y = activation(Σ wᵢxᵢ + b).</p>
<p><strong>Activations</strong>: sigmoid, tanh, ReLU, softmax (output for classification).</p>
<p><strong>Backprop</strong>: chain rule to compute gradients of loss w.r.t. weights.</p>
<div class="code-block">Forward:  x → layer1 → layer2 → ... → ŷ → loss
Backward: ∂loss/∂w computed via chain rule</div>` },
            { type: 'multiple-choice', prompt: 'ReLU(x) = ?',
              options: [{text:'max(0, x)', code:true},{text:'1/(1+e⁻ˣ)', code:true},{text:'tanh(x)', code:true},{text:'x²', code:true}],
              correct: 0, explanation: 'Rectified Linear Unit: max(0, x).' },
            { type: 'multiple-choice', prompt: 'Softmax outputs:',
              options: [{text:'A single number', code:false},{text:'Probabilities summing to 1', code:false},{text:'Negative values', code:false},{text:'Logits', code:false}],
              correct: 1, explanation: 'For multiclass classification.' },
            { type: 'multiple-choice', prompt: 'Cross-entropy loss is best for:',
              options: [{text:'Regression', code:false},{text:'Classification', code:false},{text:'Clustering', code:false},{text:'PCA', code:false}],
              correct: 1, explanation: 'Cross-entropy fits softmax outputs.' },
            { type: 'true-false', statement: 'Backpropagation uses chain rule of calculus.', correct: true, explanation: 'Yes — composes derivatives layer by layer.' }
          ]
        },
        {
          id: 'gda-u8-l2',
          name: 'CNNs',
          icon: '👁️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Convolutional networks for images', content: `<p><strong>Convolution</strong>: slide filter over input, compute dot products.</p>
<p><strong>Pooling</strong>: downsample (max pool, avg pool). Reduces size, adds invariance.</p>
<p>Typical CNN: <em>conv → ReLU → pool → conv → ... → fully-connected → softmax</em>.</p>` },
            { type: 'multiple-choice', prompt: 'Pooling layer\'s primary effect:',
              options: [{text:'Increase parameters', code:false},{text:'Downsample feature maps', code:false},{text:'Compute gradients', code:false},{text:'Normalize input', code:false}],
              correct: 1, explanation: 'Reduces spatial dimensions, improves robustness.' },
            { type: 'multiple-choice', prompt: 'A 3×3 conv kernel on a 32×32 image (no padding, stride 1) produces output of size:',
              options: [{text:'32×32', code:false},{text:'30×30', code:false},{text:'29×29', code:false},{text:'34×34', code:false}],
              correct: 1, explanation: '32 − 3 + 1 = 30.' },
            { type: 'true-false', statement: 'CNNs exploit spatial locality via shared filter weights.', correct: true, explanation: 'Weight sharing = translation invariance.' }
          ]
        },
        {
          id: 'gda-u8-l3',
          name: 'RNN, LSTM, Transformer',
          icon: '🔁',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Sequence models', content: `<p><strong>RNN</strong>: shares weights across time steps; hidden state passed forward.<br/>
<strong>LSTM/GRU</strong>: gated cells fix vanishing gradient.<br/>
<strong>Transformer</strong>: uses <em>self-attention</em>, no recurrence; parallel and dominant for NLP.</p>
<div class="code-block">Attention(Q, K, V) = softmax(QKᵀ/√d) · V</div>
<p>BERT, GPT, T5 are transformer-based language models.</p>` },
            { type: 'multiple-choice', prompt: 'Which architecture is the basis for GPT and BERT?',
              options: [{text:'RNN', code:false},{text:'CNN', code:false},{text:'Transformer', code:false},{text:'LSTM', code:false}],
              correct: 2, explanation: 'Both built on the transformer architecture.' },
            { type: 'multiple-choice', prompt: 'Transformer\'s key advantage over RNN?',
              options: [{text:'Smaller model', code:false},{text:'Parallel training (no recurrence)', code:false},{text:'No matrix math', code:false},{text:'No gradients', code:false}],
              correct: 1, explanation: 'No sequential dependency in computation.' },
            { type: 'true-false', statement: 'LSTM has gates to control flow of information across time.', correct: true, explanation: 'Input, forget, output gates.' },
            { type: 'fill-blank', prompt: 'The "T" in BERT stands for ___',
              codeLines: [{html:'<span class="ty">_BLANK_</span>'}],
              tokens: ['Transformer','Tensor','Tree','Token'], correctAnswer: 'Transformer', explanation: 'Bidirectional Encoder Representations from Transformers.' }
          ]
        }
      ]
    }

  ]
});

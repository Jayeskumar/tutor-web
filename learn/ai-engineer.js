LEARN('ai-engineer', {
  intro: 'A complete career path for AI Engineers — from foundations to LLMs to production, with visualizations and code.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'aie-c1', title: 'The AI Engineer Role', icon: '🎯', sections: [
      { type: 'heading', text: 'What does an AI Engineer actually do?', level: 1 },
      { type: 'para', html: 'An <strong>AI Engineer</strong> sits at the intersection of software engineering and machine learning. Their goal: take AI capabilities (often LLMs or pretrained models) and turn them into <em>products users can use</em>.' },
      { type: 'callout', kind: 'info', html: 'The role exploded with the LLM boom. Almost every company is hiring AI Engineers to ship AI features.' },

      { type: 'heading', text: 'A day in the life', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Sketch an AI feature with the product team — "how could AI help here?"',
        'Prototype with the OpenAI/Anthropic API or a Hugging Face model',
        'Build a small evaluation harness — does it work well enough?',
        'Wrap the working pipeline in an API (FastAPI, serverless)',
        'Deploy with Docker, monitor latency, error rates',
        'Iterate on prompts / fine-tune / build a RAG pipeline'
      ]},

      { type: 'heading', text: 'How AI Engineer differs from related roles', level: 2 },
      { type: 'image', alt: 'role comparison', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Skill overlap across AI roles</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="40" y="50" width="120" height="80" rx="10" fill="#7c4dff"/>
    <text x="100" y="80" text-anchor="middle" fill="white">Data Scientist</text>
    <text x="100" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Stats + EDA</text>
    <text x="100" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Notebook → report</text>

    <rect x="170" y="50" width="120" height="80" rx="10" fill="#00bcd4"/>
    <text x="230" y="80" text-anchor="middle" fill="white">AI Engineer</text>
    <text x="230" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">SWE + ML + LLMs</text>
    <text x="230" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Ships products</text>

    <rect x="300" y="50" width="120" height="80" rx="10" fill="#58cc02"/>
    <text x="360" y="80" text-anchor="middle" fill="white">ML Engineer</text>
    <text x="360" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Productionize ML</text>
    <text x="360" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">MLOps + serving</text>

    <rect x="430" y="50" width="120" height="80" rx="10" fill="#ff9600"/>
    <text x="490" y="80" text-anchor="middle" fill="white">ML Researcher</text>
    <text x="490" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Novel methods</text>
    <text x="490" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Papers</text>

    <text x="300" y="160" text-anchor="middle" font-weight="bold" fill="#666">Skills used (heaviest)</text>
    <rect x="40"  y="180" width="120" height="20" rx="4" fill="#7c4dff" opacity="0.35"/><text x="100" y="195" text-anchor="middle" font-size="10">SQL · Stats</text>
    <rect x="170" y="180" width="120" height="20" rx="4" fill="#00bcd4" opacity="0.35"/><text x="230" y="195" text-anchor="middle" font-size="10">Python · APIs · LLMs</text>
    <rect x="300" y="180" width="120" height="20" rx="4" fill="#58cc02" opacity="0.35"/><text x="360" y="195" text-anchor="middle" font-size="10">Docker · K8s · CI/CD</text>
    <rect x="430" y="180" width="120" height="20" rx="4" fill="#ff9600" opacity="0.35"/><text x="490" y="195" text-anchor="middle" font-size="10">Math · Theory</text>

    <rect x="40"  y="205" width="120" height="20" rx="4" fill="#7c4dff" opacity="0.7"/><text x="100" y="220" text-anchor="middle" fill="white" font-size="10">Storytelling</text>
    <rect x="170" y="205" width="120" height="20" rx="4" fill="#00bcd4" opacity="0.7"/><text x="230" y="220" text-anchor="middle" fill="white" font-size="10">Product thinking</text>
    <rect x="300" y="205" width="120" height="20" rx="4" fill="#58cc02" opacity="0.7"/><text x="360" y="220" text-anchor="middle" fill="white" font-size="10">Scalability</text>
    <rect x="430" y="205" width="120" height="20" rx="4" fill="#ff9600" opacity="0.7"/><text x="490" y="220" text-anchor="middle" fill="white" font-size="10">PhD-leaning</text>

    <text x="300" y="255" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">In reality, real jobs blend these — title ≠ scope</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'Don\'t obsess over the title. Look at the actual job description: what would you be building day-to-day?' },

      { type: 'heading', text: 'Core competencies you\'ll build', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Python</strong> — fluent, especially numpy/pandas/PyTorch',
        '<strong>ML fundamentals</strong> — enough to debug models, not invent them',
        '<strong>LLM literacy</strong> — prompts, RAG, fine-tuning, evaluation',
        '<strong>Software engineering</strong> — APIs, testing, deployment',
        '<strong>Data engineering</strong> — pipelines, ETL, common formats',
        '<strong>Product sense</strong> — what problem are we solving, for whom?'
      ]}
    ]},

    /* ============== CH 2 ============== */
    { id: 'aie-c2', title: 'Python & Tooling', icon: '🐍', sections: [
      { type: 'heading', text: 'The AI Python toolkit', level: 1 },
      { type: 'para', html: 'Three libraries you\'ll use every day:' },
      { type: 'list', kind: 'numbered', items: [
        '<strong>NumPy</strong> — n-dimensional arrays, the foundation',
        '<strong>pandas</strong> — labeled tables, data wrangling',
        '<strong>matplotlib / seaborn / plotly</strong> — visualizations'
      ]},

      { type: 'heading', text: 'NumPy in 30 seconds', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> numpy <span class="kw">as</span> np

a = np.<span class="fn">array</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])
b = np.<span class="fn">array</span>([[<span class="num">1</span>, <span class="num">2</span>], [<span class="num">3</span>, <span class="num">4</span>]])
a.shape           <span class="com"># (3,)</span>
b.shape           <span class="com"># (2, 2)</span>
a.mean()          <span class="com"># 2.0</span>
b @ b             <span class="com"># matrix multiply</span>
a * <span class="num">2</span>             <span class="com"># element-wise</span>
np.<span class="fn">arange</span>(<span class="num">10</span>)      <span class="com"># [0,1,2,...,9]</span>
np.<span class="fn">random</span>.<span class="fn">randn</span>(<span class="num">3</span>, <span class="num">4</span>)  <span class="com"># 3x4 random normal</span>` },
      { type: 'callout', kind: 'tip', html: '<strong>Vectorize, don\'t loop.</strong> NumPy operations on arrays are 10–100x faster than Python loops.' },

      { type: 'heading', text: 'pandas in 30 seconds', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> pandas <span class="kw">as</span> pd

df = pd.<span class="fn">read_csv</span>(<span class="str">"data.csv"</span>)
df.<span class="fn">head</span>(); df.<span class="fn">describe</span>(); df.<span class="fn">info</span>()
df[<span class="str">"age"</span>].<span class="fn">mean</span>()
df[df[<span class="str">"age"</span>] > <span class="num">18</span>]
df.<span class="fn">groupby</span>(<span class="str">"city"</span>)[<span class="str">"sales"</span>].<span class="fn">sum</span>()
df.<span class="fn">merge</span>(df2, on=<span class="str">"id"</span>, how=<span class="str">"left"</span>)
df.<span class="fn">to_parquet</span>(<span class="str">"out.parquet"</span>)` },

      { type: 'heading', text: 'Environment hygiene', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Use <code>venv</code> or <code>conda</code> for isolated environments',
        '<code>requirements.txt</code> or <code>pyproject.toml</code> — pinned versions',
        'For GPU work: pin <code>torch</code> to a specific CUDA build',
        '<code>uv</code> is the new fast alternative to pip',
        'For notebooks: use <strong>JupyterLab</strong> or VS Code\'s notebook UI'
      ]},
      { type: 'callout', kind: 'warn', html: 'Don\'t install everything into your global Python. You will regret it within a week.' }
    ]},

    /* ============== CH 3 ============== */
    { id: 'aie-c3', title: 'Math Foundations', icon: '➗', sections: [
      { type: 'heading', text: 'How much math do you actually need?', level: 1 },
      { type: 'para', html: 'For AI Engineering, you don\'t need to derive every loss from scratch. You DO need intuition for:' },
      { type: 'list', kind: 'check', items: [
        '<strong>Linear algebra</strong> — vectors, matrices, dot products, matrix multiply',
        '<strong>Calculus</strong> — what a gradient is, why we minimize loss',
        '<strong>Probability</strong> — conditional, expected value, Bayes',
        '<strong>Information theory</strong> — entropy, cross-entropy (light)'
      ]},

      { type: 'heading', text: 'Linear algebra in pictures', level: 2 },
      { type: 'image', alt: 'matrix mult', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Matrix multiplication: (m × k) @ (k × n) = (m × n)</text>
  <g font-family="JetBrains Mono">
    <rect x="60" y="60" width="80" height="100" fill="#7c4dff" opacity="0.85"/>
    <text x="100" y="55" text-anchor="middle" font-weight="bold" font-family="Nunito">A: 3 × 4</text>
    <text x="100" y="115" text-anchor="middle" fill="white" font-size="14">m × k</text>

    <text x="170" y="115" text-anchor="middle" font-size="20" font-weight="bold">@</text>

    <rect x="200" y="60" width="100" height="80" fill="#1cb0f6" opacity="0.85"/>
    <text x="250" y="55" text-anchor="middle" font-weight="bold" font-family="Nunito">B: 4 × 2</text>
    <text x="250" y="105" text-anchor="middle" fill="white" font-size="14">k × n</text>

    <text x="330" y="115" text-anchor="middle" font-size="20" font-weight="bold">=</text>

    <rect x="360" y="60" width="50" height="100" fill="#58cc02" opacity="0.85"/>
    <text x="385" y="55" text-anchor="middle" font-weight="bold" font-family="Nunito">C: 3 × 2</text>
    <text x="385" y="115" text-anchor="middle" fill="white" font-size="14">m × n</text>

    <text x="500" y="80" font-family="Nunito" font-size="11" fill="#666">Inner dims must match (k = k)</text>
    <text x="500" y="100" font-family="Nunito" font-size="11" fill="#666">Outer dims become</text>
    <text x="500" y="115" font-family="Nunito" font-size="11" fill="#666">result shape (m × n)</text>
  </g>
  <text x="300" y="185" text-anchor="middle" font-size="11" fill="#666" font-family="Nunito">Most of ML reduces to chained matrix multiplications.</text>
</svg>` },

      { type: 'heading', text: 'Gradient = direction of steepest ascent', level: 2 },
      { type: 'para', html: 'A <strong>gradient</strong> is a vector of partial derivatives. It points in the direction the function increases fastest.' },
      { type: 'para', html: 'To MINIMIZE a loss function, we go in the <em>opposite</em> direction — that\'s gradient descent.' },
      { type: 'widget', name: 'gradient-descent', props: {} },
      { type: 'callout', kind: 'info', html: 'Backpropagation is just the chain rule applied through a neural network. Modern libraries do it for you automatically (autograd).' },

      { type: 'heading', text: 'Probability essentials', level: 2 },
      { type: 'code', lang: 'text', code:
`P(A | B) = P(A and B) / P(B)        <span class="com"># conditional probability</span>
Bayes:    P(A | B) = P(B | A) · P(A) / P(B)
E[X]    = Σ x · P(x)                <span class="com"># expected value</span>
H(p)    = - Σ p · log(p)            <span class="com"># entropy (info content)</span>
CE(p, q) = - Σ p · log(q)           <span class="com"># cross-entropy (classification loss)</span>` }
    ]},

    /* ============== CH 4 ============== */
    { id: 'aie-c4', title: 'Classical ML', icon: '📊', sections: [
      { type: 'heading', text: 'You\'ll still use classical ML — a lot', level: 1 },
      { type: 'para', html: 'Before reaching for a 70B-parameter LLM, ask: <em>does linear regression / logistic regression / a tree-based model solve this?</em> Often the answer is yes — and they\'re 1000× cheaper.' },

      { type: 'heading', text: 'The supervised learning recipe', level: 2 },
      { type: 'image', alt: 'sup learning flow', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="60" width="100" height="60" rx="8" fill="#7c4dff"/><text x="70" y="95" text-anchor="middle" fill="white">Data</text>
    <text x="135" y="95" font-size="20">→</text>
    <rect x="150" y="60" width="120" height="60" rx="8" fill="#1cb0f6"/><text x="210" y="90" text-anchor="middle" fill="white">Features (X)</text><text x="210" y="105" text-anchor="middle" fill="white" font-weight="normal" font-size="11">+ Labels (y)</text>
    <text x="285" y="95" font-size="20">→</text>
    <rect x="300" y="60" width="100" height="60" rx="8" fill="#ff9600"/><text x="350" y="95" text-anchor="middle" fill="white">Train</text>
    <text x="415" y="95" font-size="20">→</text>
    <rect x="430" y="60" width="100" height="60" rx="8" fill="#58cc02"/><text x="480" y="95" text-anchor="middle" fill="white">Predict</text>
  </g>
  <text x="300" y="155" text-anchor="middle" font-size="12" fill="#666" font-family="Nunito">"Show many (X, y) pairs to learn the f such that f(X) ≈ y"</text>
</svg>` },

      { type: 'heading', text: 'Linear regression in 5 lines', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LinearRegression
<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split

X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(X, y, test_size=<span class="num">0.2</span>, random_state=<span class="num">42</span>)
model = <span class="ty">LinearRegression</span>().<span class="fn">fit</span>(X_train, y_train)
<span class="fn">print</span>(model.<span class="fn">score</span>(X_test, y_test))   <span class="com"># R^2</span>` },

      { type: 'heading', text: 'Classification at a glance', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Logistic regression</strong> — linear + sigmoid → probability; fast, interpretable',
        '<strong>k-NN</strong> — no training; lookup nearest examples',
        '<strong>Decision trees / random forest</strong> — flexible, handles non-linearity',
        '<strong>Gradient boosting (XGBoost, LightGBM)</strong> — typically the WINNER on tabular data',
        '<strong>SVM</strong> — solid for small-medium data with clear margins'
      ]},

      { type: 'callout', kind: 'tip', html: 'On tabular data, <strong>XGBoost or LightGBM</strong> beats deep learning >90% of the time. Use deep learning when you have unstructured data (images, text, audio).' },

      { type: 'heading', text: 'Evaluation: confusion matrix', level: 2 },
      { type: 'image', alt: 'confusion matrix', svg:
`<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;">
  <rect width="400" height="240" fill="#fafafa" rx="8"/>
  <text x="200" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Predicted</text>
  <text x="120" y="42" text-anchor="middle" font-family="Nunito">Pos</text>
  <text x="280" y="42" text-anchor="middle" font-family="Nunito">Neg</text>
  <text x="20" y="120" text-anchor="middle" font-weight="bold" font-family="Nunito" transform="rotate(-90 20 120)">Actual</text>
  <text x="50" y="100" text-anchor="middle" font-family="Nunito">Pos</text>
  <text x="50" y="180" text-anchor="middle" font-family="Nunito">Neg</text>
  <rect x="80" y="60" width="160" height="70" fill="#58cc02" opacity="0.4"/>
  <text x="160" y="100" text-anchor="middle" font-weight="bold" font-family="Nunito">TP</text>
  <rect x="240" y="60" width="120" height="70" fill="#ff4b4b" opacity="0.4"/>
  <text x="300" y="100" text-anchor="middle" font-weight="bold" font-family="Nunito">FN</text>
  <rect x="80" y="130" width="160" height="70" fill="#ff4b4b" opacity="0.4"/>
  <text x="160" y="170" text-anchor="middle" font-weight="bold" font-family="Nunito">FP</text>
  <rect x="240" y="130" width="120" height="70" fill="#58cc02" opacity="0.4"/>
  <text x="300" y="170" text-anchor="middle" font-weight="bold" font-family="Nunito">TN</text>
</svg>` },
      { type: 'code', lang: 'text', code:
`Accuracy  = (TP + TN) / total
Precision = TP / (TP + FP)         <span class="com"># "of my positive predictions, how many were right?"</span>
Recall    = TP / (TP + FN)         <span class="com"># "of all actual positives, how many did I catch?"</span>
F1        = 2 · P · R / (P + R)    <span class="com"># harmonic mean</span>` },
      { type: 'callout', kind: 'warn', html: 'On highly imbalanced data, accuracy lies. A spam detector at 99% accuracy that always predicts "not spam" is useless — its recall on spam is 0.' }
    ]},

    /* ============== CH 5 ============== */
    { id: 'aie-c5', title: 'Deep Learning Foundations', icon: '🧠', sections: [
      { type: 'heading', text: 'The neuron', level: 1 },
      { type: 'para', html: 'A single neuron does: <code>y = activation(w·x + b)</code>. Stack many → a layer. Stack layers → a deep network.' },
      { type: 'image', alt: 'neural network', svg:
`<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="250" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold">
    <text x="80" y="22" text-anchor="middle" fill="#7c4dff">Input</text>
    <text x="220" y="22" text-anchor="middle" fill="#1cb0f6">Hidden 1</text>
    <text x="380" y="22" text-anchor="middle" fill="#1cb0f6">Hidden 2</text>
    <text x="540" y="22" text-anchor="middle" fill="#58cc02">Output</text>
  </g>
  <g font-family="JetBrains Mono">
    <!-- input layer 3 nodes -->
    <circle cx="80" cy="80" r="18" fill="#7c4dff"/><text x="80" y="84" text-anchor="middle" fill="white" font-size="12">x₁</text>
    <circle cx="80" cy="130" r="18" fill="#7c4dff"/><text x="80" y="134" text-anchor="middle" fill="white" font-size="12">x₂</text>
    <circle cx="80" cy="180" r="18" fill="#7c4dff"/><text x="80" y="184" text-anchor="middle" fill="white" font-size="12">x₃</text>
    <!-- hidden 1: 4 nodes -->
    <circle cx="220" cy="60" r="16" fill="#1cb0f6"/>
    <circle cx="220" cy="110" r="16" fill="#1cb0f6"/>
    <circle cx="220" cy="160" r="16" fill="#1cb0f6"/>
    <circle cx="220" cy="210" r="16" fill="#1cb0f6"/>
    <!-- hidden 2: 4 nodes -->
    <circle cx="380" cy="60" r="16" fill="#1cb0f6"/>
    <circle cx="380" cy="110" r="16" fill="#1cb0f6"/>
    <circle cx="380" cy="160" r="16" fill="#1cb0f6"/>
    <circle cx="380" cy="210" r="16" fill="#1cb0f6"/>
    <!-- output: 2 nodes -->
    <circle cx="540" cy="100" r="18" fill="#58cc02"/><text x="540" y="104" text-anchor="middle" fill="white" font-size="12">y₁</text>
    <circle cx="540" cy="160" r="18" fill="#58cc02"/><text x="540" y="164" text-anchor="middle" fill="white" font-size="12">y₂</text>
  </g>
  <!-- connections (simplified) -->
  <g stroke="#ccc" stroke-width="0.6" fill="none">
    <line x1="98" y1="80" x2="204" y2="60"/><line x1="98" y1="80" x2="204" y2="110"/><line x1="98" y1="80" x2="204" y2="160"/><line x1="98" y1="80" x2="204" y2="210"/>
    <line x1="98" y1="130" x2="204" y2="60"/><line x1="98" y1="130" x2="204" y2="110"/><line x1="98" y1="130" x2="204" y2="160"/><line x1="98" y1="130" x2="204" y2="210"/>
    <line x1="98" y1="180" x2="204" y2="60"/><line x1="98" y1="180" x2="204" y2="110"/><line x1="98" y1="180" x2="204" y2="160"/><line x1="98" y1="180" x2="204" y2="210"/>
    <line x1="236" y1="60" x2="364" y2="60"/><line x1="236" y1="60" x2="364" y2="110"/>
    <line x1="236" y1="110" x2="364" y2="60"/><line x1="236" y1="110" x2="364" y2="110"/>
    <line x1="236" y1="160" x2="364" y2="160"/><line x1="236" y1="160" x2="364" y2="210"/>
    <line x1="236" y1="210" x2="364" y2="160"/><line x1="236" y1="210" x2="364" y2="210"/>
    <line x1="396" y1="60" x2="522" y2="100"/><line x1="396" y1="110" x2="522" y2="100"/><line x1="396" y1="160" x2="522" y2="100"/><line x1="396" y1="210" x2="522" y2="100"/>
    <line x1="396" y1="60" x2="522" y2="160"/><line x1="396" y1="110" x2="522" y2="160"/><line x1="396" y1="160" x2="522" y2="160"/><line x1="396" y1="210" x2="522" y2="160"/>
  </g>
</svg>` },

      { type: 'heading', text: 'Activation functions', level: 2 },
      { type: 'code', lang: 'text', code:
`ReLU(x)    = max(0, x)            <span class="com"># default for hidden layers</span>
sigmoid(x) = 1 / (1 + e^(-x))     <span class="com"># binary classification output</span>
tanh(x)                            <span class="com"># RNNs, older nets</span>
softmax(z) = e^z_i / Σ e^z_j      <span class="com"># multi-class output</span>` },
      { type: 'callout', kind: 'tip', html: '<strong>Without non-linear activations</strong>, deep networks collapse into a single linear function. The non-linearity is what gives them their power.' },

      { type: 'heading', text: 'The training loop', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(num_epochs):
    <span class="kw">for</span> x_batch, y_batch <span class="kw">in</span> train_loader:
        <span class="com"># 1. forward</span>
        preds = <span class="fn">model</span>(x_batch)
        loss = <span class="fn">loss_fn</span>(preds, y_batch)
        <span class="com"># 2. backward</span>
        loss.<span class="fn">backward</span>()
        <span class="com"># 3. update</span>
        optimizer.<span class="fn">step</span>()
        optimizer.<span class="fn">zero_grad</span>()

    <span class="com"># 4. validate at end of each epoch</span>
    val_loss = <span class="fn">evaluate</span>(model, val_loader)
    <span class="ty">print</span>(<span class="str">f"epoch {epoch} val={val_loss:.4f}"</span>)` },

      { type: 'heading', text: 'Common gotchas', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Forgetting zero_grad()</strong> — gradients accumulate; loss explodes',
        '<strong>Learning rate too high</strong> — loss diverges; try 1e-3, 1e-4',
        '<strong>Forgetting model.eval()</strong> — dropout/BN still on during validation',
        '<strong>Batch size too small</strong> — noisy gradients; too large → out of memory',
        '<strong>Not shuffling</strong> — model memorizes order, doesn\'t generalize'
      ]}
    ]},

    /* ============== CH 6 ============== */
    { id: 'aie-c6', title: 'PyTorch Practical', icon: '🔥', sections: [
      { type: 'heading', text: 'Why PyTorch?', level: 1 },
      { type: 'para', html: 'PyTorch became the de-facto standard for both research and production. Easier to debug than TF, native Python feel, huge ecosystem.' },

      { type: 'heading', text: 'Tensors are NumPy arrays with superpowers', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> torch

x = torch.<span class="fn">tensor</span>([<span class="num">1.0</span>, <span class="num">2.0</span>, <span class="num">3.0</span>], requires_grad=<span class="kw">True</span>)
y = (x ** <span class="num">2</span>).<span class="fn">sum</span>()
y.<span class="fn">backward</span>()
<span class="fn">print</span>(x.grad)        <span class="com"># tensor([2., 4., 6.]) — dy/dx = 2x</span>

<span class="com"># Move to GPU</span>
device = <span class="str">"cuda"</span> <span class="kw">if</span> torch.cuda.<span class="fn">is_available</span>() <span class="kw">else</span> <span class="str">"cpu"</span>
x = x.<span class="fn">to</span>(device)` },

      { type: 'heading', text: 'Defining a model with nn.Module', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> torch.nn <span class="kw">as</span> nn

<span class="kw">class</span> <span class="ty">MLP</span>(nn.<span class="ty">Module</span>):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, in_dim, hidden, out_dim):
        <span class="kw">super</span>().<span class="fn">__init__</span>()
        self.net = nn.<span class="fn">Sequential</span>(
            nn.<span class="ty">Linear</span>(in_dim, hidden),
            nn.<span class="ty">ReLU</span>(),
            nn.<span class="ty">Linear</span>(hidden, out_dim),
        )
    <span class="kw">def</span> <span class="fn">forward</span>(self, x):
        <span class="kw">return</span> self.<span class="fn">net</span>(x)

model = <span class="ty">MLP</span>(<span class="num">784</span>, <span class="num">128</span>, <span class="num">10</span>)
out = <span class="fn">model</span>(<span class="ty">torch</span>.<span class="fn">randn</span>(<span class="num">32</span>, <span class="num">784</span>))   <span class="com"># shape: (32, 10)</span>` },

      { type: 'heading', text: 'A complete training loop', level: 2 },
      { type: 'code', lang: 'python', code:
`device = <span class="str">"cuda"</span> <span class="kw">if</span> torch.cuda.<span class="fn">is_available</span>() <span class="kw">else</span> <span class="str">"cpu"</span>
model = <span class="ty">MLP</span>(<span class="num">784</span>, <span class="num">128</span>, <span class="num">10</span>).<span class="fn">to</span>(device)
opt = torch.optim.<span class="ty">Adam</span>(model.<span class="fn">parameters</span>(), lr=<span class="num">1e-3</span>)
loss_fn = nn.<span class="ty">CrossEntropyLoss</span>()

<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    model.<span class="fn">train</span>()
    <span class="kw">for</span> x, y <span class="kw">in</span> train_loader:
        x, y = x.<span class="fn">to</span>(device), y.<span class="fn">to</span>(device)
        preds = <span class="fn">model</span>(x)
        loss = <span class="fn">loss_fn</span>(preds, y)
        opt.<span class="fn">zero_grad</span>()
        loss.<span class="fn">backward</span>()
        opt.<span class="fn">step</span>()

    model.<span class="fn">eval</span>()
    <span class="kw">with</span> torch.<span class="fn">no_grad</span>():
        correct = <span class="fn">sum</span>((<span class="fn">model</span>(x.<span class="fn">to</span>(device)).<span class="fn">argmax</span>(<span class="num">1</span>) == y.<span class="fn">to</span>(device)).<span class="fn">sum</span>()
                      <span class="kw">for</span> x, y <span class="kw">in</span> val_loader)
        <span class="fn">print</span>(<span class="str">f"epoch {epoch} acc={correct/total:.3f}"</span>)` },

      { type: 'callout', kind: 'tip', html: 'Use <code>torch.compile(model)</code> in PyTorch 2.x for free speedups (sometimes 2-3×).' },

      { type: 'heading', text: 'Useful patterns', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<code>torch.save(model.state_dict(), "ckpt.pt")</code> — save weights only',
        '<code>model.load_state_dict(torch.load("ckpt.pt"))</code> — load',
        '<code>torch.utils.data.Dataset</code> + <code>DataLoader</code> for batching',
        '<code>num_workers > 0</code> in DataLoader for parallel data loading',
        '<code>mixed precision</code>: <code>torch.cuda.amp</code> for 2× speedup on modern GPUs'
      ]}
    ]},

    /* ============== CH 7 ============== */
    { id: 'aie-c7', title: 'Transformers & LLMs', icon: '🤖', sections: [
      { type: 'heading', text: 'The architecture that took over AI', level: 1 },
      { type: 'para', html: 'In 2017, Vaswani et al. published "Attention Is All You Need." Today, Transformers power GPT-4, Claude, Gemini, BERT, T5, Whisper, ViT — basically all modern AI.' },

      { type: 'heading', text: 'Self-attention in one diagram', level: 2 },
      { type: 'image', alt: 'attention', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold">
    <text x="300" y="22" text-anchor="middle">For each token, compute Q, K, V:</text>
    <rect x="40" y="40" width="80" height="30" rx="6" fill="#7c4dff"/><text x="80" y="60" text-anchor="middle" fill="white">Token</text>
    <text x="135" y="60" font-size="20">→</text>
    <rect x="160" y="40" width="60" height="30" rx="6" fill="#1cb0f6"/><text x="190" y="60" text-anchor="middle" fill="white">Q</text>
    <rect x="230" y="40" width="60" height="30" rx="6" fill="#58cc02"/><text x="260" y="60" text-anchor="middle" fill="white">K</text>
    <rect x="300" y="40" width="60" height="30" rx="6" fill="#ff9600"/><text x="330" y="60" text-anchor="middle" fill="white">V</text>

    <text x="300" y="110" text-anchor="middle">attention = softmax(Q · Kᵀ / √d) · V</text>
    <text x="300" y="140" text-anchor="middle" font-weight="normal" font-size="11" fill="#666">
      Q = "what am I looking for?"
    </text>
    <text x="300" y="158" text-anchor="middle" font-weight="normal" font-size="11" fill="#666">
      K = "what info do I have?"
    </text>
    <text x="300" y="176" text-anchor="middle" font-weight="normal" font-size="11" fill="#666">
      V = "the actual info to pass along"
    </text>
    <text x="300" y="200" text-anchor="middle" font-weight="normal" font-size="11" fill="#7c4dff">
      Result: each token gets a context-aware representation
    </text>
  </g>
</svg>` },
      { type: 'callout', kind: 'info', html: 'The √d division keeps softmax in a numerically stable range. Without it, large d → softmax saturates and gradients vanish.' },

      { type: 'heading', text: 'Three Transformer families', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Encoder-only (BERT, RoBERTa)</strong> — understanding tasks (classification, embeddings)',
        '<strong>Decoder-only (GPT, Llama, Claude)</strong> — text generation',
        '<strong>Encoder-decoder (T5, BART, FLAN-T5)</strong> — translation, summarization'
      ]},

      { type: 'heading', text: 'Tokenization', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> transformers <span class="kw">import</span> AutoTokenizer

tok = <span class="ty">AutoTokenizer</span>.<span class="fn">from_pretrained</span>(<span class="str">"gpt2"</span>)
ids = tok.<span class="fn">encode</span>(<span class="str">"Hello, AI!"</span>)
<span class="fn">print</span>(ids)             <span class="com"># [15496, 11, 9552, 0]</span>
<span class="fn">print</span>(tok.<span class="fn">decode</span>(ids))  <span class="com"># "Hello, AI!"</span>` },
      { type: 'callout', kind: 'tip', html: 'Counting characters ≠ counting tokens. "tokenization" is one word but 2-3 tokens depending on the model. Always test with the actual tokenizer.' },

      { type: 'heading', text: 'Calling an LLM API', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> openai <span class="kw">import</span> OpenAI
client = <span class="ty">OpenAI</span>()

resp = client.chat.completions.<span class="fn">create</span>(
    model=<span class="str">"gpt-4o-mini"</span>,
    messages=[
        {<span class="str">"role"</span>: <span class="str">"system"</span>, <span class="str">"content"</span>: <span class="str">"You are a helpful assistant."</span>},
        {<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">"Explain RAG in 2 sentences."</span>}
    ],
    temperature=<span class="num">0.2</span>
)
<span class="fn">print</span>(resp.choices[<span class="num">0</span>].message.content)` }
    ]},

    /* ============== CH 8 ============== */
    { id: 'aie-c8', title: 'Prompt Engineering', icon: '✍️', sections: [
      { type: 'heading', text: 'Talking to LLMs effectively', level: 1 },
      { type: 'para', html: 'Prompt engineering is the art of getting an LLM to do what you want, reliably. It\'s less mystical than it sounds — a few patterns get you 80% of the way.' },

      { type: 'heading', text: 'The big patterns', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        '<strong>System message</strong> — set role/persona/output rules',
        '<strong>Few-shot examples</strong> — 2-5 input/output examples',
        '<strong>Chain-of-thought</strong> — "Think step by step"',
        '<strong>Structured output</strong> — ask for JSON or specific format',
        '<strong>Self-reflection</strong> — ask the model to check its answer'
      ]},

      { type: 'heading', text: 'Few-shot example', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># System</span>
You classify support tickets. Output one of: BUG, FEATURE, BILLING, OTHER.

<span class="com"># User</span>
Examples:
"My charge was wrong" → BILLING
"The app crashes on launch" → BUG
"Can I export to PDF?" → FEATURE

Now classify:
"I want a dark mode option" → ?` },

      { type: 'heading', text: 'Forcing structured output', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># OpenAI: response_format JSON</span>
resp = client.chat.completions.<span class="fn">create</span>(
    model=<span class="str">"gpt-4o-mini"</span>,
    messages=[...],
    response_format={<span class="str">"type"</span>: <span class="str">"json_object"</span>}
)

<span class="com"># Even better: tool calls / function calling</span>
tools = [{
    <span class="str">"type"</span>: <span class="str">"function"</span>,
    <span class="str">"function"</span>: {
        <span class="str">"name"</span>: <span class="str">"classify_ticket"</span>,
        <span class="str">"parameters"</span>: {
            <span class="str">"type"</span>: <span class="str">"object"</span>,
            <span class="str">"properties"</span>: {
                <span class="str">"category"</span>: {<span class="str">"type"</span>: <span class="str">"string"</span>, <span class="str">"enum"</span>: [<span class="str">"BUG"</span>,<span class="str">"FEATURE"</span>,<span class="str">"BILLING"</span>,<span class="str">"OTHER"</span>]}
            },
            <span class="str">"required"</span>: [<span class="str">"category"</span>]
        }
    }
}]` },

      { type: 'callout', kind: 'tip', html: '<strong>For production: use structured output / tool calls</strong> instead of asking the model to "respond in JSON". The structured mode is much more reliable.' },

      { type: 'heading', text: 'Temperature & top-p', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>temperature=0</code> → deterministic, always picks most likely token',
        '<code>temperature=0.7</code> → balanced creativity/coherence (default for chat)',
        '<code>temperature=1.5</code> → wild, often nonsensical',
        '<code>top_p=0.9</code> → nucleus sampling, only consider top 90% probability mass'
      ]},
      { type: 'callout', kind: 'warn', html: 'For classification / extraction tasks, use <strong>temperature=0</strong>. For creative writing, 0.7-1.0.' }
    ]},

    /* ============== CH 9 ============== */
    { id: 'aie-c9', title: 'RAG — Retrieval Augmented Generation', icon: '📚', sections: [
      { type: 'heading', text: 'Give the LLM the context it needs', level: 1 },
      { type: 'para', html: 'LLMs don\'t know your private docs or yesterday\'s news. <strong>RAG</strong> retrieves relevant chunks of YOUR data and stuffs them into the prompt.' },

      { type: 'heading', text: 'The RAG architecture', level: 2 },
      { type: 'image', alt: 'rag flow', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">RAG pipeline</text>
  <g font-family="Nunito" font-weight="bold">
    <text x="60" y="50" font-size="11" fill="#7c4dff">OFFLINE (indexing)</text>
    <rect x="20" y="60" width="100" height="40" rx="6" fill="#7c4dff"/><text x="70" y="84" text-anchor="middle" fill="white">Docs</text>
    <text x="135" y="84" font-size="18">→</text>
    <rect x="150" y="60" width="100" height="40" rx="6" fill="#7c4dff"/><text x="200" y="84" text-anchor="middle" fill="white">Chunk + Embed</text>
    <text x="265" y="84" font-size="18">→</text>
    <rect x="280" y="60" width="100" height="40" rx="6" fill="#7c4dff"/><text x="330" y="84" text-anchor="middle" fill="white">Vector DB</text>

    <text x="60" y="160" font-size="11" fill="#00bcd4">ONLINE (query)</text>
    <rect x="20" y="170" width="100" height="40" rx="6" fill="#00bcd4"/><text x="70" y="194" text-anchor="middle" fill="white">User query</text>
    <text x="135" y="194" font-size="18">→</text>
    <rect x="150" y="170" width="100" height="40" rx="6" fill="#00bcd4"/><text x="200" y="194" text-anchor="middle" fill="white">Embed</text>
    <text x="265" y="194" font-size="18">→</text>
    <rect x="280" y="170" width="100" height="40" rx="6" fill="#00bcd4"/><text x="330" y="194" text-anchor="middle" fill="white">Top-K search</text>
    <text x="395" y="194" font-size="18">→</text>
    <rect x="410" y="170" width="110" height="40" rx="6" fill="#58cc02"/><text x="465" y="194" text-anchor="middle" fill="white">LLM + context</text>
  </g>
  <line x1="330" y1="100" x2="330" y2="170" stroke="#7c4dff" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="320" y="245" font-size="11" fill="#666" font-family="Nunito">Vector DB stores chunk embeddings + lookup metadata.</text>
  <text x="320" y="262" font-size="11" fill="#666" font-family="Nunito">Top-K nearest chunks become "context" for the LLM.</text>
</svg>` },

      { type: 'heading', text: 'Minimal RAG in Python', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> openai <span class="kw">import</span> OpenAI
<span class="kw">import</span> numpy <span class="kw">as</span> np

client = <span class="ty">OpenAI</span>()

<span class="kw">def</span> <span class="fn">embed</span>(text):
    r = client.embeddings.<span class="fn">create</span>(model=<span class="str">"text-embedding-3-small"</span>, input=text)
    <span class="kw">return</span> np.<span class="fn">array</span>(r.data[<span class="num">0</span>].embedding)

<span class="com"># Offline: index docs</span>
docs = [<span class="str">"Refund policy: 30 days..."</span>, <span class="str">"Shipping takes 3-5 days..."</span>, ...]
vecs = np.<span class="fn">stack</span>([<span class="fn">embed</span>(d) <span class="kw">for</span> d <span class="kw">in</span> docs])

<span class="com"># Online: answer a question</span>
<span class="kw">def</span> <span class="fn">answer</span>(question, k=<span class="num">3</span>):
    q_vec = <span class="fn">embed</span>(question)
    sims = vecs @ q_vec
    top_k = sims.<span class="fn">argsort</span>()[-k:][::-<span class="num">1</span>]
    context = <span class="str">"\\n\\n"</span>.<span class="fn">join</span>(docs[i] <span class="kw">for</span> i <span class="kw">in</span> top_k)

    r = client.chat.completions.<span class="fn">create</span>(
        model=<span class="str">"gpt-4o-mini"</span>,
        messages=[
            {<span class="str">"role"</span>: <span class="str">"system"</span>, <span class="str">"content"</span>: <span class="str">"Answer using ONLY the context. Say \\"I don\\'t know\\" if unsure."</span>},
            {<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">f"Context:\\n{context}\\n\\nQuestion: {question}"</span>}
        ]
    )
    <span class="kw">return</span> r.choices[<span class="num">0</span>].message.content` },

      { type: 'callout', kind: 'tip', html: 'For real RAG, use a proper vector DB: <strong>Pinecone, Weaviate, Qdrant, pgvector (Postgres), or Chroma</strong>. They handle scale, metadata filtering, and hybrid search.' },

      { type: 'heading', text: 'RAG vs fine-tuning', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>RAG wins for</strong>: dynamic knowledge, citation needs, lower cost, faster iteration',
        '<strong>Fine-tuning wins for</strong>: changing the model\'s style/format/behavior, lower latency at inference',
        '<strong>Use both</strong> for the best results in many cases'
      ]}
    ]},

    /* ============== CH 10 ============== */
    { id: 'aie-c10', title: 'Agents & Tool Use', icon: '🦾', sections: [
      { type: 'heading', text: 'When LLMs need to act', level: 1 },
      { type: 'para', html: 'A pure LLM is a smart chatbot. An <strong>agent</strong> can call APIs, search the web, run code — taking real actions to solve multi-step problems.' },

      { type: 'heading', text: 'The agent loop', level: 2 },
      { type: 'image', alt: 'agent loop', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">The think → act → observe loop</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="80" y="50" width="120" height="50" rx="8" fill="#7c4dff"/><text x="140" y="80" text-anchor="middle" fill="white">User query</text>
    <text x="220" y="80" font-size="20">→</text>
    <rect x="250" y="50" width="120" height="50" rx="8" fill="#00bcd4"/><text x="310" y="80" text-anchor="middle" fill="white">LLM thinks</text>
    <text x="390" y="80" font-size="20">→</text>
    <rect x="420" y="50" width="120" height="50" rx="8" fill="#ff9600"/><text x="480" y="80" text-anchor="middle" fill="white">Tool call?</text>

    <path d="M 480 100 Q 480 150 310 150 Q 140 150 140 100" stroke="#ff9600" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
    <text x="310" y="172" text-anchor="middle" fill="#ff9600" font-size="11">if yes: run tool, append result, continue loop</text>

    <rect x="80" y="190" width="440" height="35" rx="8" fill="#58cc02"/><text x="300" y="212" text-anchor="middle" fill="white">When done: return final answer to user</text>
  </g>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#ff9600"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'A simple agent with function calling', level: 2 },
      { type: 'code', lang: 'python', code:
`tools = [
  {<span class="str">"type"</span>: <span class="str">"function"</span>, <span class="str">"function"</span>: {<span class="str">"name"</span>: <span class="str">"get_weather"</span>,
    <span class="str">"parameters"</span>: {<span class="str">"type"</span>:<span class="str">"object"</span>, <span class="str">"properties"</span>:{<span class="str">"city"</span>:{<span class="str">"type"</span>:<span class="str">"string"</span>}}}}},
  {<span class="str">"type"</span>: <span class="str">"function"</span>, <span class="str">"function"</span>: {<span class="str">"name"</span>: <span class="str">"send_email"</span>,
    <span class="str">"parameters"</span>: {<span class="str">"type"</span>:<span class="str">"object"</span>, <span class="str">"properties"</span>:{<span class="str">"to"</span>:{<span class="str">"type"</span>:<span class="str">"string"</span>}, <span class="str">"body"</span>:{<span class="str">"type"</span>:<span class="str">"string"</span>}}}}}
]

messages = [{<span class="str">"role"</span>: <span class="str">"user"</span>, <span class="str">"content"</span>: <span class="str">"Email Sam the weather in Paris"</span>}]

<span class="kw">while</span> <span class="kw">True</span>:
    r = client.chat.completions.<span class="fn">create</span>(
        model=<span class="str">"gpt-4o-mini"</span>, messages=messages, tools=tools
    )
    msg = r.choices[<span class="num">0</span>].message
    messages.<span class="fn">append</span>(msg)

    <span class="kw">if</span> <span class="kw">not</span> msg.tool_calls:
        <span class="kw">print</span>(<span class="str">"Final:"</span>, msg.content); <span class="kw">break</span>

    <span class="kw">for</span> call <span class="kw">in</span> msg.tool_calls:
        result = <span class="fn">dispatch</span>(call.function.name, json.<span class="fn">loads</span>(call.function.arguments))
        messages.<span class="fn">append</span>({<span class="str">"role"</span>:<span class="str">"tool"</span>, <span class="str">"tool_call_id"</span>: call.id, <span class="str">"content"</span>: <span class="ty">str</span>(result)})` },

      { type: 'callout', kind: 'warn', html: '<strong>Real agents are hard.</strong> Add: max iterations (avoid loops), input validation on tool args, retry/backoff, observability, and HUMAN-IN-THE-LOOP for destructive actions.' },

      { type: 'heading', text: 'Frameworks worth knowing', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>OpenAI function calling / Anthropic tool use</strong> — built into the APIs',
        '<strong>LangChain / LangGraph</strong> — popular, batteries-included',
        '<strong>LlamaIndex</strong> — strong on RAG + agents on private data',
        '<strong>Pydantic AI</strong> — type-safe, lightweight, modern',
        '<strong>DSPy</strong> — declarative LLM programming + auto-prompt-optimization'
      ]}
    ]},

    /* ============== CH 11 ============== */
    { id: 'aie-c11', title: 'Hugging Face & Open Models', icon: '🤗', sections: [
      { type: 'heading', text: 'The GitHub of AI', level: 1 },
      { type: 'para', html: '<strong>Hugging Face</strong> hosts hundreds of thousands of pretrained models, datasets, and demos. Their <code>transformers</code> library is the standard interface.' },

      { type: 'heading', text: 'Three lines to use any model', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> transformers <span class="kw">import</span> pipeline

clf = <span class="fn">pipeline</span>(<span class="str">"sentiment-analysis"</span>)
<span class="fn">print</span>(<span class="fn">clf</span>(<span class="str">"I love this course!"</span>))
<span class="com"># [{'label': 'POSITIVE', 'score': 0.9998}]</span>

<span class="com"># Other built-in tasks:</span>
<span class="com"># "summarization", "translation", "question-answering",
# "text-generation", "zero-shot-classification", "image-classification"</span>` },

      { type: 'heading', text: 'Loading any model manually', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> transformers <span class="kw">import</span> AutoTokenizer, AutoModelForCausalLM
<span class="kw">import</span> torch

name = <span class="str">"meta-llama/Llama-3.2-1B-Instruct"</span>
tok = <span class="ty">AutoTokenizer</span>.<span class="fn">from_pretrained</span>(name)
model = <span class="ty">AutoModelForCausalLM</span>.<span class="fn">from_pretrained</span>(name, torch_dtype=torch.float16, device_map=<span class="str">"auto"</span>)

ids = tok.<span class="fn">apply_chat_template</span>([{<span class="str">"role"</span>:<span class="str">"user"</span>, <span class="str">"content"</span>:<span class="str">"Hi"</span>}], return_tensors=<span class="str">"pt"</span>).<span class="fn">to</span>(model.device)
out = model.<span class="fn">generate</span>(ids, max_new_tokens=<span class="num">100</span>)
<span class="fn">print</span>(tok.<span class="fn">decode</span>(out[<span class="num">0</span>], skip_special_tokens=<span class="kw">True</span>))` },

      { type: 'heading', text: 'Quantization to fit big models on small GPUs', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> transformers <span class="kw">import</span> BitsAndBytesConfig

bnb = <span class="ty">BitsAndBytesConfig</span>(load_in_4bit=<span class="kw">True</span>, bnb_4bit_compute_dtype=torch.float16)
model = <span class="ty">AutoModelForCausalLM</span>.<span class="fn">from_pretrained</span>(
    <span class="str">"meta-llama/Llama-3.1-8B-Instruct"</span>,
    quantization_config=bnb,
    device_map=<span class="str">"auto"</span>
)
<span class="com"># 8B model now fits in ~6GB VRAM!</span>` },

      { type: 'heading', text: 'PEFT — fine-tune cheaply with LoRA', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> peft <span class="kw">import</span> LoraConfig, get_peft_model

config = <span class="ty">LoraConfig</span>(
    r=<span class="num">8</span>, lora_alpha=<span class="num">16</span>,
    target_modules=[<span class="str">"q_proj"</span>, <span class="str">"v_proj"</span>],
    lora_dropout=<span class="num">0.05</span>
)
model = <span class="fn">get_peft_model</span>(model, config)
model.<span class="fn">print_trainable_parameters</span>()
<span class="com"># trainable params: 4M / total: 8B (0.05%)</span>` },

      { type: 'callout', kind: 'tip', html: 'For most use cases, you DON\'T need to fine-tune. Try prompting + RAG first. Only fine-tune when you need behavior changes (style, format) that prompts can\'t achieve.' }
    ]},

    /* ============== CH 12 ============== */
    { id: 'aie-c12', title: 'MLOps Essentials', icon: '🚀', sections: [
      { type: 'heading', text: 'Notebooks → production', level: 1 },
      { type: 'para', html: 'A model that lives in a notebook doesn\'t help users. <strong>MLOps</strong> is the discipline of running ML in production reliably.' },

      { type: 'heading', text: 'Deployment patterns', level: 2 },
      { type: 'image', alt: 'deployment', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Common deployment patterns</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="130" height="80" rx="8" fill="#7c4dff"/>
    <text x="85" y="78" text-anchor="middle" fill="white" font-weight="bold">Batch</text>
    <text x="85" y="100" text-anchor="middle" fill="white" font-size="11">Run nightly</text>
    <text x="85" y="115" text-anchor="middle" fill="white" font-size="11">→ DB / file</text>

    <rect x="160" y="50" width="130" height="80" rx="8" fill="#1cb0f6"/>
    <text x="225" y="78" text-anchor="middle" fill="white" font-weight="bold">Real-time API</text>
    <text x="225" y="100" text-anchor="middle" fill="white" font-size="11">HTTP request</text>
    <text x="225" y="115" text-anchor="middle" fill="white" font-size="11">FastAPI / serverless</text>

    <rect x="300" y="50" width="130" height="80" rx="8" fill="#58cc02"/>
    <text x="365" y="78" text-anchor="middle" fill="white" font-weight="bold">Streaming</text>
    <text x="365" y="100" text-anchor="middle" fill="white" font-size="11">Kafka in/out</text>
    <text x="365" y="115" text-anchor="middle" fill="white" font-size="11">Low latency</text>

    <rect x="440" y="50" width="130" height="80" rx="8" fill="#ff9600"/>
    <text x="505" y="78" text-anchor="middle" fill="white" font-weight="bold">Edge</text>
    <text x="505" y="100" text-anchor="middle" fill="white" font-size="11">On-device</text>
    <text x="505" y="115" text-anchor="middle" fill="white" font-size="11">Mobile / IoT</text>

    <text x="300" y="170" text-anchor="middle" font-size="13" fill="#666">All wrap the model with: monitoring, logging, retry, scaling</text>
    <text x="300" y="200" text-anchor="middle" font-size="12" fill="#666">Containerize with Docker · Orchestrate with K8s or serverless</text>
  </g>
</svg>` },

      { type: 'heading', text: 'A minimal FastAPI model server', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># app.py</span>
<span class="kw">from</span> fastapi <span class="kw">import</span> FastAPI
<span class="kw">from</span> pydantic <span class="kw">import</span> BaseModel
<span class="kw">import</span> joblib

model = joblib.<span class="fn">load</span>(<span class="str">"model.pkl"</span>)
app = <span class="ty">FastAPI</span>()

<span class="kw">class</span> <span class="ty">PredictRequest</span>(<span class="ty">BaseModel</span>):
    features: <span class="ty">list</span>[<span class="ty">float</span>]

@app.<span class="fn">post</span>(<span class="str">"/predict"</span>)
<span class="kw">def</span> <span class="fn">predict</span>(req: <span class="ty">PredictRequest</span>):
    pred = model.<span class="fn">predict</span>([req.features])[<span class="num">0</span>]
    <span class="kw">return</span> {<span class="str">"prediction"</span>: <span class="ty">int</span>(pred)}

<span class="com"># Run: uvicorn app:app --host 0.0.0.0 --port 8000</span>` },

      { type: 'heading', text: 'Dockerfile', level: 2 },
      { type: 'code', lang: 'text', code:
`FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]` },

      { type: 'heading', text: 'Monitoring what matters', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Service health</strong> — latency p50/p95/p99, error rate, throughput',
        '<strong>Model behavior</strong> — prediction distribution, confidence scores',
        '<strong>Data drift</strong> — input feature distributions vs training data',
        '<strong>Performance</strong> — accuracy / F1 over time (when labels arrive)',
        '<strong>Cost</strong> — GPU time, API spend (especially for LLM calls!)'
      ]},
      { type: 'callout', kind: 'warn', html: 'For LLM apps, <strong>cost monitoring is critical</strong>. One runaway agent can rack up thousands of dollars overnight. Set spend caps.' },

      { type: 'heading', text: 'Versioning & reproducibility', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Code</strong> — Git, of course',
        '<strong>Data</strong> — DVC, lakeFS, or just snapshot to S3 with timestamps',
        '<strong>Models</strong> — MLflow, Weights & Biases, or simple registry',
        '<strong>Experiments</strong> — log hyperparams, metrics, artifacts'
      ]}
    ]},

    /* ============== CH 13 ============== */
    { id: 'aie-c13', title: 'Evaluation for LLM Apps', icon: '🎯', sections: [
      { type: 'heading', text: 'How do you know if your LLM app is good?', level: 1 },
      { type: 'para', html: 'Classical ML has clean metrics — accuracy, F1, RMSE. LLM apps are harder: outputs are open-ended text. You need a different toolkit.' },

      { type: 'heading', text: 'Evaluation strategies', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        '<strong>Manual eval set</strong> — handful of input/expected pairs you review by hand',
        '<strong>Reference-based metrics</strong> — BLEU, ROUGE, exact match (when you have ground truth)',
        '<strong>LLM-as-judge</strong> — use a strong LLM to grade your weaker LLM\'s outputs',
        '<strong>Specific functional checks</strong> — does the output parse as JSON? Contain required fields?',
        '<strong>Online metrics</strong> — user thumbs up/down, conversion, retention'
      ]},

      { type: 'heading', text: 'LLM-as-judge in code', level: 2 },
      { type: 'code', lang: 'python', code:
`JUDGE_PROMPT = <span class="str">"""You evaluate AI responses for accuracy and helpfulness.
Rate from 1-5 and give a brief reason.

Question: {question}
Expected: {expected}
Actual: {actual}

Score (1-5):"""</span>

<span class="kw">def</span> <span class="fn">judge</span>(question, expected, actual):
    r = client.chat.completions.<span class="fn">create</span>(
        model=<span class="str">"gpt-4o"</span>,   <span class="com"># use a STRONGER model as judge</span>
        messages=[{<span class="str">"role"</span>:<span class="str">"user"</span>, <span class="str">"content"</span>: JUDGE_PROMPT.<span class="fn">format</span>(...)}],
        temperature=<span class="num">0</span>
    )
    <span class="kw">return</span> r.choices[<span class="num">0</span>].message.content` },

      { type: 'callout', kind: 'tip', html: 'Tools: <strong>Promptfoo, Braintrust, Langfuse, Phoenix, DeepEval</strong> — they help run evals at scale and track regressions.' },

      { type: 'heading', text: 'A/B testing prompts', level: 2 },
      { type: 'para', html: 'Same as classical A/B: send 50% of traffic to prompt A, 50% to prompt B. Compare outcome metrics (user satisfaction, task success). Run for long enough to get statistical significance.' }
    ]},

    /* ============== CH 14 ============== */
    { id: 'aie-c14', title: 'AI Safety & Ethics', icon: '⚖️', sections: [
      { type: 'heading', text: 'AI can cause harm — by design or by accident', level: 1 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Bias</strong> — model reflects historical inequities in data',
        '<strong>Hallucination</strong> — LLMs confidently invent facts',
        '<strong>Misuse</strong> — generated content used for fraud, manipulation',
        '<strong>Privacy</strong> — training data leakage, PII exposure',
        '<strong>Safety</strong> — instructions that lead to harmful actions'
      ]},

      { type: 'heading', text: 'Defensive design checklist', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Don\'t trust LLM output blindly</strong> — validate before acting on it',
        '<strong>Slice metrics by demographic</strong> — overall accuracy hides subgroup failures',
        '<strong>Prompt injection defenses</strong> — sanitize inputs, separate trusted system messages',
        '<strong>Human-in-the-loop for high-stakes decisions</strong> — medical, legal, financial',
        '<strong>Refusal behavior</strong> — model should decline to help with clearly harmful requests',
        '<strong>Transparency</strong> — tell users when they\'re talking to an AI',
        '<strong>Cite sources</strong> in RAG/search applications'
      ]},
      { type: 'callout', kind: 'danger', html: '<strong>Prompt injection</strong> is the SQL injection of LLMs. Treat untrusted text (user input, retrieved docs, web pages) as adversarial. Don\'t blindly run code or call tools based on user-controlled strings.' },

      { type: 'heading', text: 'Practical mitigations', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        'Use content moderation APIs (OpenAI Moderation, Perspective API)',
        'Add a final "safety check" LLM call before serving responses',
        'Rate-limit and require auth for expensive/risky tools',
        'Log prompts + outputs for review (with PII handling)',
        'Have a clear escalation path for users to report bad outputs'
      ]}
    ]},

    /* ============== CH 15 ============== */
    { id: 'aie-c15', title: 'Your AI Engineer Career', icon: '💼', sections: [
      { type: 'heading', text: 'Building a portfolio that gets you hired', level: 1 },
      { type: 'para', html: 'Recruiters and hiring managers see hundreds of resumes. What stands out is <strong>real, deployed AI projects with a clear story</strong>.' },

      { type: 'heading', text: 'Portfolio project ideas', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Domain-specific RAG chatbot</strong> — for cooking, legal, code, etc. Deploy with citations.',
        '<strong>AI agent that automates a real task</strong> — book travel, summarize my email, scrape jobs.',
        '<strong>Fine-tuned model</strong> — take a small open LLM, fine-tune on a niche task, blog the results.',
        '<strong>End-to-end ML system</strong> — data pipeline → model → API → monitoring dashboard.',
        '<strong>Open-source contribution</strong> — submit a PR to LangChain, transformers, or similar.'
      ]},
      { type: 'callout', kind: 'tip', html: '<strong>Deploy your work.</strong> A live demo on HuggingFace Spaces / Vercel / Replicate is worth 10× more than a private repo.' },

      { type: 'heading', text: 'Writing a strong resume', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        'Quantify everything: "improved X by 40%", "served 50k QPS"',
        'List the AI stack: PyTorch, LangChain, OpenAI, vector DBs',
        'Link to your portfolio site / GitHub / blog at the top',
        '1 page if early career, 2 max if senior',
        'For each role: focus on impact, not job description'
      ]},

      { type: 'heading', text: 'The interview process', level: 2 },
      { type: 'image', alt: 'interview pipeline', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Typical AI Engineer interview pipeline</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="100" height="50" rx="6" fill="#7c4dff"/><text x="70" y="80" text-anchor="middle" fill="white">Recruiter</text>
    <text x="135" y="80" font-size="18">→</text>
    <rect x="155" y="50" width="100" height="50" rx="6" fill="#1cb0f6"/><text x="205" y="80" text-anchor="middle" fill="white">Coding round</text>
    <text x="270" y="80" font-size="18">→</text>
    <rect x="290" y="50" width="100" height="50" rx="6" fill="#1cb0f6"/><text x="340" y="80" text-anchor="middle" fill="white">ML/AI round</text>
    <text x="405" y="80" font-size="18">→</text>
    <rect x="425" y="50" width="100" height="50" rx="6" fill="#58cc02"/><text x="475" y="80" text-anchor="middle" fill="white">System design</text>

    <text x="155" y="130" font-size="18">→</text>
    <rect x="175" y="115" width="100" height="50" rx="6" fill="#ff9600"/><text x="225" y="145" text-anchor="middle" fill="white">Behavioral</text>
    <text x="290" y="145" font-size="18">→</text>
    <rect x="310" y="115" width="100" height="50" rx="6" fill="#ff9600"/><text x="360" y="145" text-anchor="middle" fill="white">Bar raiser</text>
    <text x="425" y="145" font-size="18">→</text>
    <rect x="445" y="115" width="100" height="50" rx="6" fill="#58cc02"/><text x="495" y="145" text-anchor="middle" fill="white">Offer 🎉</text>
  </g>
</svg>` },

      { type: 'heading', text: 'What gets tested in the ML/AI round', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Core concepts: bias-variance, overfitting, regularization, evaluation metrics',
        'When to use which model (linear vs trees vs neural nets)',
        'Explain a project you built — depth questions on YOUR choices',
        'Modern AI: how does attention work? What\'s RAG vs fine-tuning?',
        'Math intuition (not derivations) — what does the gradient mean?'
      ]},

      { type: 'heading', text: 'AI system design questions', level: 2 },
      { type: 'para', html: 'Examples: "design a search ranking system", "design an LLM-powered customer support bot", "design a recommendation engine for products".' },
      { type: 'list', kind: 'numbered', items: [
        'Clarify requirements: scale, latency, success metrics, data available',
        'Sketch the high-level architecture: data → features → model → serving',
        'Talk through tradeoffs: model choice, latency vs accuracy, batch vs real-time',
        'Discuss data and labels: where do they come from? quality? volume?',
        'Cover MLOps: training pipeline, deployment, monitoring, retraining',
        'Address failure modes: drift, abuse, fallback when model is down'
      ]},

      { type: 'callout', kind: 'success', html: '🎉 You\'ve covered the AI Engineer playbook end-to-end. Build, deploy, share — that\'s how you become an AI Engineer in practice.' }
    ]}
  ]
});

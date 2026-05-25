LEARN('ml', {
  intro: 'Learn Machine Learning from first principles — data, models, gradient descent, neural nets, transformers, and beyond. Visual, intuitive, and code-first.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'ml-c1', title: 'What is ML?', icon: '🤖', sections: [
      { type: 'heading', text: 'Machine Learning, in one sentence', level: 1 },
      { type: 'para', html: '<strong>Machine Learning</strong> is the art of teaching computers to learn patterns from <em>data</em> instead of being explicitly programmed with rules.' },
      { type: 'callout', kind: 'info', html: 'In traditional programming you write rules. In ML, you provide <strong>examples</strong> and the computer figures out the rules.' },
      { type: 'heading', text: 'Traditional programming vs ML', level: 2 },
      { type: 'image', alt: 'traditional vs ML flow', svg:
`<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="280" fill="#fafafa" rx="8"/>
  <text x="160" y="24" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Traditional Programming</text>
  <rect x="20" y="40" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="70" y="70" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Rules</text>
  <rect x="20" y="110" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="70" y="140" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Data</text>
  <text x="140" y="120" font-family="Nunito" font-weight="bold" fill="#666" font-size="16">→</text>
  <rect x="170" y="75" width="120" height="50" rx="8" fill="#7c4dff"/>
  <text x="230" y="105" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Program</text>
  <text x="300" y="105" font-family="Nunito" font-weight="bold" fill="#666" font-size="16">→</text>
  <rect x="320" y="75" width="100" height="50" rx="8" fill="#58cc02"/>
  <text x="370" y="105" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Answers</text>

  <text x="500" y="24" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Machine Learning</text>
  <rect x="430" y="40" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="480" y="70" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Data</text>
  <rect x="430" y="110" width="100" height="50" rx="8" fill="#1cb0f6"/>
  <text x="480" y="140" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Answers</text>
  <text x="545" y="120" font-family="Nunito" font-weight="bold" fill="#666" font-size="16">→</text>
  <rect x="555" y="85" width="70" height="50" rx="8" fill="#7c4dff"/>
  <text x="590" y="115" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Rules</text>

  <line x1="20" y1="200" x2="620" y2="200" stroke="#ddd" stroke-width="1"/>
  <text x="320" y="230" text-anchor="middle" font-family="Nunito" font-size="13" fill="#555">In ML the rules <tspan font-weight="bold">are the model</tspan> — discovered automatically.</text>
  <text x="320" y="252" text-anchor="middle" font-family="Nunito" font-size="13" fill="#555">The model can then predict on new, unseen data.</text>
</svg>` },
      { type: 'heading', text: 'Everyday examples', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Spam filter</strong> — learns from emails marked as spam vs not spam.',
        '<strong>Netflix recommendations</strong> — learns what you might like from what you watched.',
        '<strong>Face unlock</strong> — learns to recognize faces from pictures.',
        '<strong>Voice assistants</strong> — learn to map sounds to words.',
        '<strong>Self-driving cars</strong> — learn to identify cars, lanes, pedestrians.',
        '<strong>Chatbots & LLMs</strong> — learn the distribution of human language.'
      ]},
      { type: 'heading', text: 'When should you use ML?', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Reach for ML when (1) the rules are too complex to hand-code, (2) you have <strong>lots of data</strong>, and (3) you can tolerate some error.' },
      { type: 'para', html: 'If you can write the rule on paper in 5 minutes — just code it. ML shines on problems that are easy for humans but hard to describe formally (vision, language, taste).' },
      { type: 'heading', text: 'A tiny worked example', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Predict house price from size (sqft)</span>
<span class="com"># Data:</span>
sizes  = [<span class="num">500</span>, <span class="num">800</span>, <span class="num">1200</span>, <span class="num">1500</span>, <span class="num">2000</span>]
prices = [<span class="num">100</span>, <span class="num">160</span>, <span class="num">240</span>, <span class="num">300</span>, <span class="num">400</span>]

<span class="com"># An ML algorithm discovers: price ≈ 0.2 × size</span>
<span class="com"># Now we can predict a 1750 sqft house:</span>
predicted = <span class="num">0.2</span> * <span class="num">1750</span>   <span class="com"># 350 (in thousands)</span>` },
      { type: 'callout', kind: 'info', html: 'The number <code>0.2</code> wasn\'t given to us — the model <strong>learned</strong> it from the data. That\'s ML.' },
      { type: 'heading', text: 'AI vs ML vs Deep Learning', level: 2 },
      { type: 'image', alt: 'AI ML DL nesting', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <circle cx="240" cy="140" r="125" fill="#e3f2fd" stroke="#1cb0f6" stroke-width="2"/>
  <circle cx="240" cy="140" r="85" fill="#ede7f6" stroke="#7c4dff" stroke-width="2"/>
  <circle cx="240" cy="140" r="45" fill="#dcedc8" stroke="#58cc02" stroke-width="2"/>
  <text x="240" y="40" text-anchor="middle" font-weight="bold" font-family="Nunito" fill="#1cb0f6">AI</text>
  <text x="240" y="80" text-anchor="middle" font-weight="bold" font-family="Nunito" fill="#7c4dff">ML</text>
  <text x="240" y="144" text-anchor="middle" font-weight="bold" font-family="Nunito" fill="#58cc02">DL</text>
</svg>` },
      { type: 'para', html: '<strong>AI</strong> is the broad goal (machines that act intelligently). <strong>ML</strong> is the practical approach of learning from data. <strong>Deep Learning</strong> is a subset of ML that uses neural networks with many layers.' }
    ]},

    /* ============== CH 2 ============== */
    { id: 'ml-c2', title: 'The ML Pipeline', icon: '🔄', sections: [
      { type: 'heading', text: 'Every ML project follows the same recipe', level: 1 },
      { type: 'para', html: 'Whether you\'re building a spam filter or GPT, the workflow rhymes. Master this pipeline once and you\'ll see it everywhere.' },
      { type: 'image', alt: 'ML pipeline', svg:
`<svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="160" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold" fill="white">
    <rect x="10" y="50" width="100" height="55" rx="10" fill="#1cb0f6"/><text x="60" y="78" text-anchor="middle">Data</text><text x="60" y="95" text-anchor="middle" font-size="10">collect</text>
    <rect x="125" y="50" width="100" height="55" rx="10" fill="#1cb0f6"/><text x="175" y="78" text-anchor="middle">Features</text><text x="175" y="95" text-anchor="middle" font-size="10">engineer</text>
    <rect x="240" y="50" width="100" height="55" rx="10" fill="#7c4dff"/><text x="290" y="78" text-anchor="middle">Model</text><text x="290" y="95" text-anchor="middle" font-size="10">choose</text>
    <rect x="355" y="50" width="100" height="55" rx="10" fill="#7c4dff"/><text x="405" y="78" text-anchor="middle">Train</text><text x="405" y="95" text-anchor="middle" font-size="10">fit data</text>
    <rect x="470" y="50" width="100" height="55" rx="10" fill="#ff9600"/><text x="520" y="78" text-anchor="middle">Evaluate</text><text x="520" y="95" text-anchor="middle" font-size="10">on test set</text>
    <rect x="585" y="50" width="100" height="55" rx="10" fill="#58cc02"/><text x="635" y="78" text-anchor="middle">Predict</text><text x="635" y="95" text-anchor="middle" font-size="10">deploy</text>
  </g>
  <g stroke="#888" stroke-width="2" fill="none">
    <path d="M110 78 L125 78" marker-end="url(#a)"/>
    <path d="M225 78 L240 78" marker-end="url(#a)"/>
    <path d="M340 78 L355 78" marker-end="url(#a)"/>
    <path d="M455 78 L470 78" marker-end="url(#a)"/>
    <path d="M570 78 L585 78" marker-end="url(#a)"/>
  </g>
  <defs><marker id="a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#888"/></marker></defs>
  <text x="360" y="140" text-anchor="middle" font-family="Nunito" font-size="12" fill="#555">If evaluation is bad → loop back, fix data or model.</text>
</svg>` },
      { type: 'heading', text: '1. Collect data', level: 2 },
      { type: 'para', html: 'Data is the fuel. Garbage in → garbage out. You can have the fanciest model in the world; it won\'t save bad data.' },
      { type: 'callout', kind: 'warn', html: '<strong>Rule of thumb:</strong> spend 60–80% of your time on data, not on models.' },
      { type: 'heading', text: '2. Features & labels', level: 2 },
      { type: 'para', html: 'A <strong>feature</strong> is a measurable property (size, color, age). A <strong>label</strong> is what you want to predict (price, category). Together they form rows in a table.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># Tabular dataset</span>
<span class="com"># features ↓                    label ↓</span>
[<span class="num">800</span>, <span class="str">"downtown"</span>, <span class="num">2</span>] → <span class="num">160000</span>
[<span class="num">1500</span>, <span class="str">"suburb"</span>,   <span class="num">3</span>] → <span class="num">240000</span>
[<span class="num">2000</span>, <span class="str">"rural"</span>,    <span class="num">4</span>] → <span class="num">280000</span>` },
      { type: 'heading', text: '3. Train / test split', level: 2 },
      { type: 'para', html: 'You <em>never</em> evaluate on the data you trained on — the model has already seen it. Hold out 20% as a <strong>test set</strong> the model never touches during training.' },
      { type: 'image', alt: 'train test split', svg:
`<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="120" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="13">Full dataset (100%)</text>
  <rect x="20" y="40" width="440" height="40" rx="6" fill="#58cc02"/>
  <text x="240" y="65" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Train (80%)</text>
  <rect x="465" y="40" width="115" height="40" rx="6" fill="#ff4b4b"/>
  <text x="522" y="65" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Test (20%)</text>
  <text x="240" y="105" text-anchor="middle" font-family="Nunito" font-size="11" fill="#555">model learns here</text>
  <text x="522" y="105" text-anchor="middle" font-family="Nunito" font-size="11" fill="#555">model judged here</text>
</svg>` },
      { type: 'callout', kind: 'tip', html: '<strong>Why split?</strong> A student who memorises the answer key isn\'t smart — they\'re a parrot. The test set ensures the model truly <em>generalises</em>.' },
      { type: 'heading', text: '4. Train the model', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> <span class="ty">LinearRegression</span>
<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split

X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(X, y, test_size=<span class="num">0.2</span>)

model = <span class="ty">LinearRegression</span>()
model.<span class="fn">fit</span>(X_train, y_train)         <span class="com"># learn the pattern</span>
preds = model.<span class="fn">predict</span>(X_test)      <span class="com"># predict on unseen data</span>` },
      { type: 'heading', text: '5. Evaluate', level: 2 },
      { type: 'para', html: 'Compare predictions to true labels. Metrics depend on the task (accuracy for classification, MSE for regression). We\'ll go deep on metrics in Chapters 22 and 23.' },
      { type: 'heading', text: '6. Deploy & monitor', level: 2 },
      { type: 'para', html: 'A model in a notebook helps no one. Real ML ships behind an API, logs predictions, and re-trains as data drifts.' }
    ]},

    /* ============== CH 3 ============== */
    { id: 'ml-c3', title: 'Types of ML', icon: '🎯', sections: [
      { type: 'heading', text: 'Four flavours of learning', level: 1 },
      { type: 'image', alt: 'types of ML', svg:
`<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito">
    <rect x="20" y="20" width="290" height="115" rx="10" fill="#e3f2fd" stroke="#1cb0f6"/>
    <text x="165" y="45" text-anchor="middle" font-weight="bold" fill="#0e88c8">Supervised</text>
    <text x="165" y="70" text-anchor="middle" font-size="11">data has labels</text>
    <text x="165" y="90" text-anchor="middle" font-size="11">regression / classification</text>
    <text x="165" y="115" text-anchor="middle" font-size="11" fill="#555">spam, prices, image labels</text>

    <rect x="330" y="20" width="290" height="115" rx="10" fill="#ede7f6" stroke="#7c4dff"/>
    <text x="475" y="45" text-anchor="middle" font-weight="bold" fill="#5e35d5">Unsupervised</text>
    <text x="475" y="70" text-anchor="middle" font-size="11">no labels</text>
    <text x="475" y="90" text-anchor="middle" font-size="11">clustering / dim. reduction</text>
    <text x="475" y="115" text-anchor="middle" font-size="11" fill="#555">customer segments, PCA</text>

    <rect x="20" y="150" width="290" height="115" rx="10" fill="#fff3e0" stroke="#ff9600"/>
    <text x="165" y="175" text-anchor="middle" font-weight="bold" fill="#cc7a00">Reinforcement</text>
    <text x="165" y="200" text-anchor="middle" font-size="11">agent + reward</text>
    <text x="165" y="220" text-anchor="middle" font-size="11">trial-and-error learning</text>
    <text x="165" y="245" text-anchor="middle" font-size="11" fill="#555">games, robots, trading</text>

    <rect x="330" y="150" width="290" height="115" rx="10" fill="#dcedc8" stroke="#58cc02"/>
    <text x="475" y="175" text-anchor="middle" font-weight="bold" fill="#3d9100">Self-supervised</text>
    <text x="475" y="200" text-anchor="middle" font-size="11">labels created from data itself</text>
    <text x="475" y="220" text-anchor="middle" font-size="11">"predict the next token"</text>
    <text x="475" y="245" text-anchor="middle" font-size="11" fill="#555">LLMs, BERT, CLIP</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Supervised learning', level: 2 },
      { type: 'para', html: 'You give the model <strong>examples with answers</strong>. It learns the mapping input → output.' },
      { type: 'list', kind: 'check', items: [
        '<strong>Classification</strong> — output is a category (cat/dog, spam/not).',
        '<strong>Regression</strong> — output is a number (price, temperature).'
      ]},
      { type: 'heading', text: 'Unsupervised learning', level: 2 },
      { type: 'para', html: 'Only inputs, no answers. The model finds <strong>structure</strong> on its own — groups, projections, anomalies.' },
      { type: 'callout', kind: 'info', html: 'Think of unsupervised learning as exploring a new city without a guidebook. You notice clusters of restaurants, shopping districts, residential zones — without anyone labelling them.' },
      { type: 'heading', text: 'Reinforcement learning', level: 2 },
      { type: 'para', html: 'An <strong>agent</strong> takes actions in an <strong>environment</strong> and gets <strong>rewards</strong>. Over many tries, it learns a policy that maximises long-term reward. (Chess engines, robot locomotion, AlphaGo.)' },
      { type: 'heading', text: 'Self-supervised learning', level: 2 },
      { type: 'para', html: 'A clever trick: take <em>unlabelled</em> data and invent a label from it. Hide a word, ask the model to predict it. Hide a patch of an image, ask the model to fill it in.' },
      { type: 'callout', kind: 'tip', html: 'Self-supervised learning powers modern <strong>foundation models</strong> (GPT, BERT, CLIP) — it lets us train on the entire internet without humans labelling anything.' }
    ]},

    /* ============== CH 4 ============== */
    { id: 'ml-c4', title: 'Features & Labels', icon: '📊', sections: [
      { type: 'heading', text: 'The shape of ML data', level: 1 },
      { type: 'para', html: 'Most ML data lives in tables: rows are <strong>examples</strong>, columns are <strong>features</strong>, and one special column is the <strong>label</strong>.' },
      { type: 'image', alt: 'feature table', svg:
`<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="20" y="30" width="120" height="30" fill="#1cb0f6"/><text x="80" y="50" text-anchor="middle" fill="white" font-weight="bold">size_sqft</text>
    <rect x="140" y="30" width="120" height="30" fill="#1cb0f6"/><text x="200" y="50" text-anchor="middle" fill="white" font-weight="bold">bedrooms</text>
    <rect x="260" y="30" width="140" height="30" fill="#1cb0f6"/><text x="330" y="50" text-anchor="middle" fill="white" font-weight="bold">neighborhood</text>
    <rect x="400" y="30" width="100" height="30" fill="#1cb0f6"/><text x="450" y="50" text-anchor="middle" fill="white" font-weight="bold">age_years</text>
    <rect x="500" y="30" width="120" height="30" fill="#58cc02"/><text x="560" y="50" text-anchor="middle" fill="white" font-weight="bold">PRICE</text>

    <rect x="20" y="60" width="600" height="30" fill="white" stroke="#ddd"/>
    <text x="80" y="80" text-anchor="middle">800</text>
    <text x="200" y="80" text-anchor="middle">2</text>
    <text x="330" y="80" text-anchor="middle">downtown</text>
    <text x="450" y="80" text-anchor="middle">12</text>
    <text x="560" y="80" text-anchor="middle" font-weight="bold">$160k</text>

    <rect x="20" y="90" width="600" height="30" fill="#fafafa" stroke="#ddd"/>
    <text x="80" y="110" text-anchor="middle">1500</text>
    <text x="200" y="110" text-anchor="middle">3</text>
    <text x="330" y="110" text-anchor="middle">suburb</text>
    <text x="450" y="110" text-anchor="middle">5</text>
    <text x="560" y="110" text-anchor="middle" font-weight="bold">$240k</text>

    <rect x="20" y="120" width="600" height="30" fill="white" stroke="#ddd"/>
    <text x="80" y="140" text-anchor="middle">2000</text>
    <text x="200" y="140" text-anchor="middle">4</text>
    <text x="330" y="140" text-anchor="middle">rural</text>
    <text x="450" y="140" text-anchor="middle">20</text>
    <text x="560" y="140" text-anchor="middle" font-weight="bold">$280k</text>

    <text x="245" y="180" text-anchor="middle" font-weight="bold" fill="#0e88c8">← features (X) →</text>
    <text x="560" y="180" text-anchor="middle" font-weight="bold" fill="#3d9100">label (y)</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Numerical vs categorical', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Numerical</strong> — numbers with meaningful order (age, price, temperature).',
        '<strong>Categorical</strong> — discrete labels (red/green/blue, weekday names).',
        '<strong>Ordinal</strong> — categories with order (small/medium/large).',
        '<strong>Text</strong>, <strong>image</strong>, <strong>audio</strong> — need special encoding.'
      ]},
      { type: 'callout', kind: 'warn', html: 'Most ML algorithms expect <strong>numbers</strong>. Categorical features must be encoded before training.' },
      { type: 'heading', text: 'Label encoding', level: 2 },
      { type: 'para', html: 'Map each category to an integer. Simple, but introduces a false ordering.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># label encoding</span>
colors = [<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>, <span class="str">"red"</span>]
encoded = [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">0</span>]

<span class="com"># Problem: model thinks blue (2) > green (1) > red (0)</span>
<span class="com"># That's nonsense for nominal categories!</span>` },
      { type: 'heading', text: 'One-hot encoding', level: 2 },
      { type: 'para', html: 'Create one binary column per category. No false ordering — but adds dimensions.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># one-hot encoding</span>
<span class="com">#         red  green  blue</span>
red    → [ <span class="num">1</span>,    <span class="num">0</span>,    <span class="num">0</span>  ]
green  → [ <span class="num">0</span>,    <span class="num">1</span>,    <span class="num">0</span>  ]
blue   → [ <span class="num">0</span>,    <span class="num">0</span>,    <span class="num">1</span>  ]` },
      { type: 'callout', kind: 'tip', html: 'Use <strong>one-hot</strong> for nominal categories (no order), <strong>label encoding</strong> for ordinal ones, and <strong>embeddings</strong> for very high-cardinality features (millions of users).' },
      { type: 'heading', text: 'Feature engineering', level: 2 },
      { type: 'para', html: 'The art of crafting better features. Often beats picking a fancier model.' },
      { type: 'list', kind: 'check', items: [
        'Combine features: <code>price_per_sqft = price / size</code>',
        'Extract from dates: <code>month, day_of_week, is_weekend</code>',
        'Log-transform skewed values: <code>log(income)</code>',
        'Bin continuous values: <code>age_group = young/middle/old</code>'
      ]}
    ]},

    /* ============== CH 5 ============== */
    { id: 'ml-c5', title: 'Data Preprocessing', icon: '🧹', sections: [
      { type: 'heading', text: 'Real data is messy', level: 1 },
      { type: 'para', html: 'Before any model sees your data, you usually need to clean, fill, scale, and trim it. Skip this step and the best algorithm in the world will misbehave.' },
      { type: 'heading', text: 'Missing values', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Strategies for missing data</span>
<span class="num">1</span>. <span class="fn">drop</span> rows with any NaN          <span class="com"># simple, may lose lots</span>
<span class="num">2</span>. <span class="fn">fill</span> with mean / median / mode    <span class="com"># quick baseline</span>
<span class="num">3</span>. <span class="fn">predict</span> with a model            <span class="com"># fancier, slower</span>
<span class="num">4</span>. add an <span class="str">"is_missing"</span> flag column   <span class="com"># preserves signal</span>` },
      { type: 'callout', kind: 'info', html: 'Sometimes <em>missingness itself</em> is informative — e.g., income left blank might correlate with refusal to disclose.' },
      { type: 'heading', text: 'Outliers', level: 2 },
      { type: 'para', html: 'A single weird value can ruin a linear model. Detect outliers with z-scores, IQR, or domain knowledge — then cap, drop, or transform them.' },
      { type: 'image', alt: 'outlier example', svg:
`<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="180" fill="#fafafa" rx="8"/>
  <line x1="40" y1="120" x2="500" y2="120" stroke="#999" stroke-width="1"/>
  <g fill="#1cb0f6">
    <circle cx="80" cy="115" r="5"/><circle cx="120" cy="110" r="5"/><circle cx="160" cy="118" r="5"/><circle cx="200" cy="105" r="5"/>
    <circle cx="240" cy="115" r="5"/><circle cx="280" cy="110" r="5"/><circle cx="320" cy="112" r="5"/><circle cx="360" cy="108" r="5"/>
  </g>
  <circle cx="460" cy="50" r="8" fill="#ff4b4b"/>
  <text x="460" y="40" text-anchor="middle" font-family="Nunito" font-size="11" fill="#ff4b4b" font-weight="bold">outlier!</text>
  <text x="260" y="160" text-anchor="middle" font-family="Nunito" font-size="12" fill="#555">One point far from the rest can pull the mean and skew the model.</text>
</svg>` },
      { type: 'heading', text: 'Normalization (min-max)', level: 2 },
      { type: 'para', html: 'Squash every feature into <strong>[0, 1]</strong>. Good when bounds are known and meaningful.' },
      { type: 'code', lang: 'python', code:
`x_scaled = (x - x.<span class="fn">min</span>()) / (x.<span class="fn">max</span>() - x.<span class="fn">min</span>())
<span class="com"># 500 → 0.0   1500 → 0.5   2000 → 1.0</span>` },
      { type: 'heading', text: 'Standardization (z-score)', level: 2 },
      { type: 'para', html: 'Center on 0, scale to unit variance. Default choice for most algorithms.' },
      { type: 'code', lang: 'python', code:
`x_scaled = (x - mean) / std
<span class="com"># mean → 0,  std → 1</span>
<span class="com"># keeps outliers but rescales</span>` },
      { type: 'callout', kind: 'tip', html: 'Tree-based models (Random Forest, XGBoost) <strong>don\'t need scaling</strong>. Distance-based ones (KNN, K-Means, SVM, neural nets) <strong>do</strong>.' },
      { type: 'heading', text: 'Pipeline order matters', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># RIGHT — fit scaler on train, apply to both</span>
scaler.<span class="fn">fit</span>(X_train)
X_train_s = scaler.<span class="fn">transform</span>(X_train)
X_test_s  = scaler.<span class="fn">transform</span>(X_test)

<span class="com"># WRONG — fit on full data leaks test info into training!</span>
scaler.<span class="fn">fit</span>(X_full)` }
    ]},

    /* ============== CH 6 ============== */
    { id: 'ml-c6', title: 'Linear Regression Deep Dive', icon: '📈', sections: [
      { type: 'heading', text: 'The simplest model worth knowing', level: 1 },
      { type: 'para', html: 'Linear regression fits a <strong>straight line</strong> through your data. It\'s the "Hello, World" of ML — and surprisingly hard to beat on the right problem.' },
      { type: 'heading', text: 'The equation', level: 2 },
      { type: 'code', lang: 'python', code:
`y = m·x + b

<span class="com"># m → slope (how much y changes per unit x)</span>
<span class="com"># b → intercept (y when x = 0)</span>
<span class="com"># For many features:</span>
y = w₁x₁ + w₂x₂ + … + wₙxₙ + b` },
      { type: 'heading', text: 'Picture the line', level: 2 },
      { type: 'image', alt: 'linear regression line', svg:
`<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="280" fill="#fafafa" rx="8"/>
  <line x1="50" y1="240" x2="490" y2="240" stroke="#666" stroke-width="1"/>
  <line x1="50" y1="240" x2="50" y2="20" stroke="#666" stroke-width="1"/>
  <text x="270" y="265" text-anchor="middle" font-family="Nunito" font-size="12">size (sqft)</text>
  <text x="20" y="130" text-anchor="middle" font-family="Nunito" font-size="12" transform="rotate(-90,20,130)">price ($k)</text>

  <line x1="60" y1="220" x2="480" y2="40" stroke="#7c4dff" stroke-width="3"/>
  <text x="430" y="35" font-family="Nunito" font-size="12" fill="#7c4dff" font-weight="bold">y = 0.2x</text>

  <g fill="#1cb0f6">
    <circle cx="100" cy="215" r="5"/><circle cx="150" cy="195" r="5"/><circle cx="200" cy="170" r="5"/>
    <circle cx="260" cy="150" r="5"/><circle cx="310" cy="120" r="5"/><circle cx="360" cy="95" r="5"/>
    <circle cx="420" cy="70" r="5"/><circle cx="450" cy="55" r="5"/>
  </g>

  <g stroke="#ff4b4b" stroke-dasharray="3 3">
    <line x1="100" y1="215" x2="100" y2="225"/>
    <line x1="200" y1="170" x2="200" y2="178"/>
    <line x1="310" y1="120" x2="310" y2="130"/>
    <line x1="420" y1="70" x2="420" y2="82"/>
  </g>
  <text x="270" y="20" text-anchor="middle" font-family="Nunito" font-size="11" fill="#ff4b4b">red dashes = residuals (errors)</text>
</svg>` },
      { type: 'heading', text: 'Loss: how wrong are we?', level: 2 },
      { type: 'para', html: 'We need a number that says "the line fits well" or "the line is awful". For regression, the classic is <strong>Mean Squared Error</strong>.' },
      { type: 'code', lang: 'python', code:
`MSE = (<span class="num">1</span>/n) · Σ (yᵢ - ŷᵢ)²

<span class="com"># yᵢ  → true value</span>
<span class="com"># ŷᵢ  → model prediction</span>
<span class="com"># Square so positives & negatives don't cancel.</span>
<span class="com"># Big errors hurt more than small ones.</span>` },
      { type: 'heading', text: 'Worked example', level: 2 },
      { type: 'para', html: 'Suppose <code>m = 0.2, b = 0</code> and we have 3 points: (500, 100), (1000, 220), (2000, 380).' },
      { type: 'code', lang: 'python', code:
`predictions:    0.2·500 = <span class="num">100</span>    0.2·1000 = <span class="num">200</span>    0.2·2000 = <span class="num">400</span>
truth:                  <span class="num">100</span>                <span class="num">220</span>                <span class="num">380</span>
errors:                 <span class="num">0</span>                  -<span class="num">20</span>                 <span class="num">20</span>
squared:                <span class="num">0</span>                  <span class="num">400</span>                <span class="num">400</span>

MSE = (<span class="num">0</span> + <span class="num">400</span> + <span class="num">400</span>) / <span class="num">3</span> = <span class="num">266.67</span>` },
      { type: 'heading', text: 'Finding the best line', level: 2 },
      { type: 'para', html: 'Linear regression has a <strong>closed-form solution</strong> (the normal equation). But we usually use gradient descent, which scales to millions of features. (Next chapter.)' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> <span class="ty">LinearRegression</span>

model = <span class="ty">LinearRegression</span>()
model.<span class="fn">fit</span>(X_train, y_train)

<span class="fn">print</span>(<span class="str">"slope:"</span>, model.coef_)
<span class="fn">print</span>(<span class="str">"intercept:"</span>, model.intercept_)

preds = model.<span class="fn">predict</span>(X_test)` },
      { type: 'heading', text: 'When linear regression fails', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Relationship is <strong>non-linear</strong> (curves, thresholds).',
        'Features are <strong>highly correlated</strong> with each other.',
        '<strong>Outliers</strong> drag the line away from the bulk.',
        '<strong>Heteroscedasticity</strong> — error spread changes with x.'
      ]},
      { type: 'callout', kind: 'tip', html: 'Always plot residuals. If they look like a smiley face or a funnel, your linear assumption is wrong.' },
      { type: 'heading', text: 'Extensions', level: 2 },
      { type: 'para', html: 'Polynomial regression adds <code>x², x³</code> terms. Ridge & Lasso add regularization (Chapter 25). Generalized Linear Models extend the framework to Poisson, logistic, and more.' }
    ]},

    /* ============== CH 7 ============== */
    { id: 'ml-c7', title: 'Gradient Descent', icon: '⛰️', sections: [
      { type: 'heading', text: 'How models actually learn', level: 1 },
      { type: 'para', html: 'Almost every modern ML model is trained with <strong>gradient descent</strong> — a procedure for finding the bottom of a "loss valley" by walking downhill.' },
      { type: 'heading', text: 'The hiker analogy', level: 2 },
      { type: 'para', html: 'Imagine you\'re on a mountain in dense fog. You want to reach the valley but can\'t see far. Strategy: feel the slope under your feet, take a step downhill, repeat.' },
      { type: 'widget', name: 'gradient-descent', props: {} },
      { type: 'heading', text: 'The math (gentle)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># For each parameter w:</span>
w_new = w_old - η · (∂L / ∂w)

<span class="com"># η   → learning rate (step size)</span>
<span class="com"># ∂L/∂w → gradient — how loss changes if you nudge w</span>
<span class="com"># Subtract because we want to go DOWN the loss.</span>` },
      { type: 'heading', text: 'The learning rate (η)', level: 2 },
      { type: 'image', alt: 'learning rate sizes', svg:
`<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="200" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="100" y="20" text-anchor="middle" font-weight="bold">Too small</text>
    <path d="M30 150 Q100 30 170 150" stroke="#1cb0f6" stroke-width="2" fill="none"/>
    <g fill="#ff9600"><circle cx="40" cy="142" r="4"/><circle cx="50" cy="130" r="4"/><circle cx="60" cy="118" r="4"/><circle cx="70" cy="105" r="4"/></g>
    <text x="100" y="180" text-anchor="middle" fill="#555">slow, may never arrive</text>

    <text x="320" y="20" text-anchor="middle" font-weight="bold">Just right</text>
    <path d="M250 150 Q320 30 390 150" stroke="#1cb0f6" stroke-width="2" fill="none"/>
    <g fill="#58cc02"><circle cx="260" cy="135" r="4"/><circle cx="290" cy="80" r="4"/><circle cx="320" cy="50" r="4"/></g>
    <text x="320" y="180" text-anchor="middle" fill="#555">smooth descent</text>

    <text x="540" y="20" text-anchor="middle" font-weight="bold">Too big</text>
    <path d="M470 150 Q540 30 610 150" stroke="#1cb0f6" stroke-width="2" fill="none"/>
    <g fill="#ff4b4b"><circle cx="480" cy="130" r="4"/><circle cx="600" cy="135" r="4"/><circle cx="490" cy="120" r="4"/></g>
    <text x="540" y="180" text-anchor="middle" fill="#555">bounces / explodes</text>
  </g>
</svg>` },
      { type: 'callout', kind: 'tip', html: 'Typical learning rates: <code>0.1, 0.01, 0.001</code>. Start at <code>0.01</code>, halve if loss is jumpy, double if it\'s glacial.' },
      { type: 'heading', text: 'Pseudocode', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">gradient_descent</span>(X, y, lr=<span class="num">0.01</span>, epochs=<span class="num">1000</span>):
    w = <span class="num">0.0</span>
    b = <span class="num">0.0</span>
    n = <span class="fn">len</span>(X)

    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(epochs):
        preds = w * X + b
        error = preds - y

        dw = (<span class="num">2</span>/n) * (error * X).<span class="fn">sum</span>()
        db = (<span class="num">2</span>/n) * error.<span class="fn">sum</span>()

        w -= lr * dw
        b -= lr * db

    <span class="kw">return</span> w, b` },
      { type: 'heading', text: 'Variants', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Batch GD</strong> — uses all data each step. Stable but slow.',
        '<strong>Stochastic GD (SGD)</strong> — one sample per step. Fast, noisy.',
        '<strong>Mini-batch GD</strong> — 32/64/128 samples per step. The sweet spot.',
        '<strong>Momentum, Adam, RMSProp</strong> — smarter step rules used in deep learning.'
      ]},
      { type: 'heading', text: 'Local minima & saddle points', level: 2 },
      { type: 'para', html: 'In flat / curvy loss surfaces, gradient descent can get stuck in <strong>local minima</strong> or <strong>saddle points</strong>. In practice, high-dimensional loss surfaces have many "good enough" valleys.' },
      { type: 'callout', kind: 'warn', html: 'If your loss explodes (becomes NaN) — almost always: learning rate too high, or unnormalized features.' },
      { type: 'heading', text: 'Why it scales', level: 2 },
      { type: 'para', html: 'Closed-form solutions involve matrix inversion (O(n³)). Gradient descent is O(n·d) per step and parallelises beautifully on GPUs — which is why it powers every deep learning library.' }
    ]},

    /* ============== CH 8 ============== */
    { id: 'ml-c8', title: 'Logistic Regression', icon: '🎚️', sections: [
      { type: 'heading', text: 'Linear regression for yes/no', level: 1 },
      { type: 'para', html: 'Despite the name, logistic regression is a <strong>classification</strong> model. It outputs a probability that an example belongs to class 1.' },
      { type: 'heading', text: 'The sigmoid function', level: 2 },
      { type: 'code', lang: 'python', code:
`σ(z) = <span class="num">1</span> / (<span class="num">1</span> + e^(-z))

<span class="com"># Takes any real number, squashes it to (0, 1).</span>
<span class="com"># σ(0) = 0.5,  σ(+∞) → 1,  σ(-∞) → 0</span>` },
      { type: 'image', alt: 'sigmoid curve', svg:
`<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="240" fill="#fafafa" rx="8"/>
  <line x1="40" y1="200" x2="490" y2="200" stroke="#999"/>
  <line x1="265" y1="20" x2="265" y2="220" stroke="#999"/>
  <line x1="40" y1="40" x2="490" y2="40" stroke="#ddd" stroke-dasharray="3 3"/>
  <line x1="40" y1="120" x2="490" y2="120" stroke="#ddd" stroke-dasharray="3 3"/>

  <text x="495" y="205" font-family="Nunito" font-size="11" fill="#666">z</text>
  <text x="35" y="44" text-anchor="end" font-family="Nunito" font-size="11" fill="#666">1</text>
  <text x="35" y="124" text-anchor="end" font-family="Nunito" font-size="11" fill="#666">0.5</text>
  <text x="35" y="204" text-anchor="end" font-family="Nunito" font-size="11" fill="#666">0</text>

  <path d="M40 195 Q200 195 265 120 Q330 45 490 45" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <text x="380" y="80" font-family="Nunito" font-size="13" fill="#7c4dff" font-weight="bold">σ(z) = 1/(1+e^-z)</text>
  <circle cx="265" cy="120" r="4" fill="#ff9600"/>
  <text x="275" y="115" font-family="Nunito" font-size="11" fill="#cc7a00">(0, 0.5)</text>
</svg>` },
      { type: 'heading', text: 'The full model', level: 2 },
      { type: 'code', lang: 'python', code:
`z = w·x + b              <span class="com"># linear part</span>
p = σ(z)                 <span class="com"># probability of class 1</span>

prediction = <span class="num">1</span> <span class="kw">if</span> p ≥ <span class="num">0.5</span> <span class="kw">else</span> <span class="num">0</span>` },
      { type: 'heading', text: 'Decision boundary', level: 2 },
      { type: 'para', html: 'The boundary where <code>p = 0.5</code> is exactly where <code>w·x + b = 0</code> — a <strong>line</strong> (or plane) splitting the feature space.' },
      { type: 'image', alt: 'decision boundary', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <line x1="40" y1="240" x2="450" y2="240" stroke="#666"/>
  <line x1="40" y1="20" x2="40" y2="240" stroke="#666"/>
  <line x1="50" y1="50" x2="440" y2="230" stroke="#7c4dff" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="350" y="80" font-family="Nunito" font-size="12" fill="#7c4dff" font-weight="bold">decision boundary</text>

  <g fill="#1cb0f6">
    <circle cx="80" cy="180" r="6"/><circle cx="120" cy="160" r="6"/><circle cx="100" cy="210" r="6"/>
    <circle cx="160" cy="190" r="6"/><circle cx="140" cy="220" r="6"/>
  </g>
  <g fill="#ff4b4b">
    <circle cx="300" cy="60" r="6"/><circle cx="340" cy="90" r="6"/><circle cx="380" cy="70" r="6"/>
    <circle cx="370" cy="130" r="6"/><circle cx="410" cy="100" r="6"/>
  </g>
  <text x="100" y="260" font-family="Nunito" font-size="11" fill="#0e88c8">class 0</text>
  <text x="380" y="40" font-family="Nunito" font-size="11" fill="#cc1111">class 1</text>
</svg>` },
      { type: 'heading', text: 'Loss: cross-entropy', level: 2 },
      { type: 'para', html: 'MSE doesn\'t play well with probabilities. We use <strong>log loss</strong> (binary cross-entropy) instead.' },
      { type: 'code', lang: 'python', code:
`L = -[ y·log(p) + (<span class="num">1</span>-y)·log(<span class="num">1</span>-p) ]

<span class="com"># If true label is 1, loss is -log(p)   — wants p → 1</span>
<span class="com"># If true label is 0, loss is -log(1-p) — wants p → 0</span>` },
      { type: 'callout', kind: 'info', html: 'Despite being "simple", logistic regression is the workhorse of credit scoring, medical screening, and ad CTR prediction.' },
      { type: 'heading', text: 'Multiclass: softmax', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># For K classes, output one logit zₖ each, then:</span>
p(class=k) = e^zₖ / Σⱼ e^zⱼ

<span class="com"># Probabilities sum to 1.</span>
<span class="com"># Loss → categorical cross-entropy.</span>` },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> <span class="ty">LogisticRegression</span>

clf = <span class="ty">LogisticRegression</span>()
clf.<span class="fn">fit</span>(X_train, y_train)
probs = clf.<span class="fn">predict_proba</span>(X_test)
preds = clf.<span class="fn">predict</span>(X_test)` }
    ]},

    /* ============== CH 9 ============== */
    { id: 'ml-c9', title: 'KNN', icon: '🎯', sections: [
      { type: 'heading', text: 'You are who you sit with', level: 1 },
      { type: 'para', html: '<strong>K-Nearest Neighbors</strong> classifies a new point by looking at its K closest neighbors and taking a vote.' },
      { type: 'image', alt: 'KNN illustration', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <circle cx="240" cy="140" r="70" fill="none" stroke="#ff9600" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="320" y="85" font-family="Nunito" font-size="11" fill="#cc7a00" font-weight="bold">K=5 circle</text>

  <g fill="#1cb0f6">
    <circle cx="80" cy="80" r="6"/><circle cx="120" cy="50" r="6"/><circle cx="160" cy="100" r="6"/>
    <circle cx="200" cy="120" r="6"/><circle cx="220" cy="100" r="6"/><circle cx="250" cy="90" r="6"/>
  </g>
  <g fill="#ff4b4b">
    <circle cx="320" cy="180" r="6"/><circle cx="280" cy="170" r="6"/><circle cx="290" cy="200" r="6"/>
    <circle cx="350" cy="220" r="6"/><circle cx="220" cy="180" r="6"/>
  </g>
  <circle cx="240" cy="140" r="8" fill="#7c4dff" stroke="white" stroke-width="2"/>
  <text x="250" y="135" font-family="Nunito" font-size="11" fill="#7c4dff" font-weight="bold">new point ?</text>
  <text x="30" y="260" font-family="Nunito" font-size="11" fill="#555">3 blue + 2 red in the circle → vote = BLUE.</text>
</svg>` },
      { type: 'heading', text: 'The algorithm', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">knn_predict</span>(train_X, train_y, new_x, k=<span class="num">5</span>):
    distances = [<span class="fn">distance</span>(new_x, x) <span class="kw">for</span> x <span class="kw">in</span> train_X]
    nearest_idx = <span class="fn">argsort</span>(distances)[:k]
    neighbor_labels = [train_y[i] <span class="kw">for</span> i <span class="kw">in</span> nearest_idx]
    <span class="kw">return</span> <span class="fn">majority_vote</span>(neighbor_labels)` },
      { type: 'callout', kind: 'info', html: 'KNN is a <strong>lazy learner</strong> — it doesn\'t learn a model during training. All work happens at prediction time.' },
      { type: 'heading', text: 'Distance metrics', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Euclidean</strong> — √Σ(xᵢ - yᵢ)². Default for continuous features.',
        '<strong>Manhattan</strong> — Σ|xᵢ - yᵢ|. Grid-like, robust to outliers.',
        '<strong>Cosine</strong> — angle between vectors. Great for text & embeddings.',
        '<strong>Hamming</strong> — # of differing positions. Categorical / binary data.'
      ]},
      { type: 'heading', text: 'Choosing K', level: 2 },
      { type: 'image', alt: 'k choice tradeoff', svg:
`<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:0 auto;">
  <rect width="560" height="180" fill="#fafafa" rx="8"/>
  <text x="280" y="25" text-anchor="middle" font-weight="bold" font-family="Nunito">K too small ←→ K too large</text>
  <rect x="40" y="50" width="160" height="80" fill="#ffebee" stroke="#ff4b4b" rx="8"/>
  <text x="120" y="80" text-anchor="middle" font-family="Nunito" font-weight="bold">K = 1</text>
  <text x="120" y="105" text-anchor="middle" font-family="Nunito" font-size="11">noisy, overfits</text>
  <rect x="200" y="50" width="160" height="80" fill="#e8f5e9" stroke="#58cc02" rx="8"/>
  <text x="280" y="80" text-anchor="middle" font-family="Nunito" font-weight="bold">K ≈ 5–15</text>
  <text x="280" y="105" text-anchor="middle" font-family="Nunito" font-size="11">smooth & accurate</text>
  <rect x="360" y="50" width="160" height="80" fill="#fff3e0" stroke="#ff9600" rx="8"/>
  <text x="440" y="80" text-anchor="middle" font-family="Nunito" font-weight="bold">K = N</text>
  <text x="440" y="105" text-anchor="middle" font-family="Nunito" font-size="11">always predicts majority</text>
</svg>` },
      { type: 'callout', kind: 'tip', html: 'Choose <code>K</code> via cross-validation. Use <strong>odd K</strong> for binary classification to avoid ties.' },
      { type: 'heading', text: 'Pros & cons', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Zero training time, simple to implement.',
        'Works for any number of classes.',
        'No assumptions about data distribution.',
        '<strong>Slow at prediction</strong> — O(N·d) per query.',
        'Hurts in high dimensions (curse of dimensionality).',
        'Sensitive to feature scaling — <strong>always normalize</strong>.'
      ]},
      { type: 'heading', text: 'KNN for regression', level: 2 },
      { type: 'para', html: 'Same algorithm — but average the neighbors\' values instead of voting. Surprisingly useful for non-linear, small-data problems.' },
      { type: 'heading', text: 'Speed tricks', level: 2 },
      { type: 'para', html: 'For large datasets, use spatial indexes: <strong>KD-Tree</strong>, <strong>Ball Tree</strong>, or approximate methods like <strong>FAISS</strong> / <strong>Annoy</strong>.' }
    ]},

    /* ============== CH 10 ============== */
    { id: 'ml-c10', title: 'Decision Trees', icon: '🌳', sections: [
      { type: 'heading', text: 'Asking yes/no questions', level: 1 },
      { type: 'para', html: 'A <strong>decision tree</strong> classifies by asking a sequence of questions. Each internal node is a test, each leaf is a prediction.' },
      { type: 'image', alt: 'decision tree', svg:
`<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:0 auto;">
  <rect width="560" height="320" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="220" y="20" width="140" height="40" rx="8" fill="#7c4dff"/>
    <text x="290" y="45" text-anchor="middle" fill="white" font-weight="bold">size &gt; 1500?</text>

    <line x1="240" y1="60" x2="120" y2="100" stroke="#666" stroke-width="1.5"/>
    <text x="160" y="80" fill="#666" font-size="11">no</text>
    <line x1="340" y1="60" x2="440" y2="100" stroke="#666" stroke-width="1.5"/>
    <text x="400" y="80" fill="#666" font-size="11">yes</text>

    <rect x="50" y="100" width="140" height="40" rx="8" fill="#7c4dff"/>
    <text x="120" y="125" text-anchor="middle" fill="white" font-weight="bold">downtown?</text>
    <rect x="370" y="100" width="140" height="40" rx="8" fill="#7c4dff"/>
    <text x="440" y="125" text-anchor="middle" fill="white" font-weight="bold">age &lt; 10?</text>

    <line x1="80" y1="140" x2="40" y2="190" stroke="#666"/><text x="50" y="170" fill="#666" font-size="11">no</text>
    <line x1="150" y1="140" x2="200" y2="190" stroke="#666"/><text x="190" y="170" fill="#666" font-size="11">yes</text>
    <line x1="410" y1="140" x2="370" y2="190" stroke="#666"/><text x="380" y="170" fill="#666" font-size="11">no</text>
    <line x1="475" y1="140" x2="520" y2="190" stroke="#666"/><text x="510" y="170" fill="#666" font-size="11">yes</text>

    <rect x="0" y="190" width="80" height="35" rx="8" fill="#1cb0f6"/><text x="40" y="213" text-anchor="middle" fill="white" font-weight="bold">$140k</text>
    <rect x="160" y="190" width="80" height="35" rx="8" fill="#1cb0f6"/><text x="200" y="213" text-anchor="middle" fill="white" font-weight="bold">$200k</text>
    <rect x="330" y="190" width="80" height="35" rx="8" fill="#1cb0f6"/><text x="370" y="213" text-anchor="middle" fill="white" font-weight="bold">$260k</text>
    <rect x="480" y="190" width="80" height="35" rx="8" fill="#1cb0f6"/><text x="520" y="213" text-anchor="middle" fill="white" font-weight="bold">$340k</text>
  </g>
  <text x="280" y="270" text-anchor="middle" font-family="Nunito" font-size="12" fill="#555">Trace a path from root to leaf based on feature tests.</text>
</svg>` },
      { type: 'heading', text: 'How splits are chosen', level: 2 },
      { type: 'para', html: 'At each node, the algorithm picks the feature + threshold that produces the <strong>purest</strong> children. Purity is measured with Gini impurity or entropy.' },
      { type: 'heading', text: 'Gini impurity', level: 2 },
      { type: 'code', lang: 'python', code:
`Gini = <span class="num">1</span> - Σ pᵢ²

<span class="com"># pᵢ = fraction of class i in node</span>
<span class="com"># Gini = 0 → all one class (pure)</span>
<span class="com"># Gini = 0.5 → 50/50 split (maximally mixed, for 2 classes)</span>` },
      { type: 'heading', text: 'Entropy & information gain', level: 2 },
      { type: 'code', lang: 'python', code:
`Entropy(S) = -Σ pᵢ · log₂(pᵢ)

InfoGain = Entropy(parent) - Σ (nₖ/n) · Entropy(childₖ)

<span class="com"># Pick the split with the highest information gain.</span>` },
      { type: 'callout', kind: 'info', html: 'Gini and entropy give very similar trees in practice. Gini is slightly faster (no log).' },
      { type: 'heading', text: 'Worked split', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># 10 emails: 6 spam, 4 ham. Gini = 1 - 0.6² - 0.4² = 0.48</span>

<span class="com"># Split on "contains FREE":</span>
<span class="com">#   yes → 5 spam, 0 ham   Gini = 0.0</span>
<span class="com">#   no  → 1 spam, 4 ham   Gini = 0.32</span>

weighted = (<span class="num">5</span>/<span class="num">10</span>)*<span class="num">0.0</span> + (<span class="num">5</span>/<span class="num">10</span>)*<span class="num">0.32</span> = <span class="num">0.16</span>
gain = <span class="num">0.48</span> - <span class="num">0.16</span> = <span class="num">0.32</span>     <span class="com"># big improvement!</span>` },
      { type: 'heading', text: 'When to stop splitting', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Max depth reached.',
        'Min samples per leaf reached.',
        'Node is pure (one class).',
        'No split improves purity beyond a threshold.'
      ]},
      { type: 'heading', text: 'Overfitting risk', level: 2 },
      { type: 'para', html: 'Left unchecked, a tree will memorise every training point — perfect train accuracy, terrible test accuracy. Combat this by limiting depth or by pruning.' },
      { type: 'callout', kind: 'warn', html: 'A tree with depth 30 on 1000 samples almost always overfits. Start with <code>max_depth = 5</code>.' },
      { type: 'heading', text: 'Pros & cons', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Interpretable</strong> — you can draw and explain it.',
        'Handles numerical & categorical features.',
        'No feature scaling needed.',
        'Single trees are <strong>unstable</strong> — small data change → very different tree.',
        'Overfits easily — but ensembles (Random Forest, XGBoost) solve this.'
      ]},
      { type: 'heading', text: 'Regression trees', level: 2 },
      { type: 'para', html: 'Same tree structure, but each leaf predicts the <strong>mean</strong> of training targets in that leaf. Splits minimize variance instead of impurity.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.tree <span class="kw">import</span> <span class="ty">DecisionTreeClassifier</span>

clf = <span class="ty">DecisionTreeClassifier</span>(max_depth=<span class="num">5</span>, criterion=<span class="str">"gini"</span>)
clf.<span class="fn">fit</span>(X_train, y_train)

<span class="com"># Bonus: see which features matter most</span>
<span class="fn">print</span>(clf.feature_importances_)` }
    ]},

    /* ============== CH 11 ============== */
    { id: 'ml-c11', title: 'Naive Bayes', icon: '🎲', sections: [
      { type: 'heading', text: 'Probabilities, all the way down', level: 1 },
      { type: 'para', html: '<strong>Naive Bayes</strong> uses Bayes\' theorem to compute the probability of each class given the features — and picks the most likely.' },
      { type: 'heading', text: 'Bayes\' theorem refresher', level: 2 },
      { type: 'code', lang: 'python', code:
`P(A|B) = P(B|A) · P(A) / P(B)

<span class="com"># Read: "probability of A given B equals</span>
<span class="com">#       probability of B given A,</span>
<span class="com">#       times prior of A,</span>
<span class="com">#       divided by probability of B"</span>` },
      { type: 'heading', text: 'Applied to classification', level: 2 },
      { type: 'code', lang: 'python', code:
`P(class | features) ∝ P(features | class) · P(class)

<span class="com"># We don't need the denominator P(features)</span>
<span class="com"># since it's constant across classes.</span>` },
      { type: 'heading', text: 'The "naive" assumption', level: 2 },
      { type: 'para', html: 'Naive Bayes assumes features are <strong>conditionally independent</strong> given the class. That\'s usually false in real data — but the model often works anyway.' },
      { type: 'code', lang: 'python', code:
`P(x₁, x₂, …, xₙ | class) ≈ P(x₁|class) · P(x₂|class) · … · P(xₙ|class)` },
      { type: 'heading', text: 'Spam example', level: 2 },
      { type: 'para', html: 'Suppose our training shows: 40% of emails are spam. The word "FREE" appears in 60% of spam and 5% of ham. The word "MEETING" in 5% of spam and 50% of ham.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># New email contains: "FREE" + "MEETING"</span>

P(spam) · P(FREE|spam) · P(MEETING|spam)
= <span class="num">0.4</span> · <span class="num">0.6</span> · <span class="num">0.05</span> = <span class="num">0.012</span>

P(ham) · P(FREE|ham) · P(MEETING|ham)
= <span class="num">0.6</span> · <span class="num">0.05</span> · <span class="num">0.5</span> = <span class="num">0.015</span>

→ <span class="num">0.015</span> &gt; <span class="num">0.012</span>  → classify as HAM` },
      { type: 'callout', kind: 'info', html: 'Notice how just one common ham word ("MEETING") can outweigh a strong spam signal ("FREE"). That\'s the model balancing evidence.' },
      { type: 'heading', text: 'Variants', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Gaussian NB</strong> — continuous features, assumes normal distribution.',
        '<strong>Multinomial NB</strong> — count features (word frequencies). Classic for text.',
        '<strong>Bernoulli NB</strong> — binary features (word present / absent).'
      ]},
      { type: 'heading', text: 'Smoothing', level: 2 },
      { type: 'para', html: 'If a word never appears in spam, its probability is 0 — multiplying it zeros the whole product. <strong>Laplace smoothing</strong> adds a small constant to every count.' },
      { type: 'code', lang: 'python', code:
`P(word|class) = (count + <span class="num">1</span>) / (total + V)

<span class="com"># V = vocabulary size</span>
<span class="com"># Avoids zero probabilities.</span>` },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.naive_bayes <span class="kw">import</span> <span class="ty">MultinomialNB</span>
<span class="kw">from</span> sklearn.feature_extraction.text <span class="kw">import</span> <span class="ty">CountVectorizer</span>

vec = <span class="ty">CountVectorizer</span>()
X = vec.<span class="fn">fit_transform</span>(emails)

clf = <span class="ty">MultinomialNB</span>()
clf.<span class="fn">fit</span>(X, labels)` }
    ]},

    /* ============== CH 12 ============== */
    { id: 'ml-c12', title: 'Support Vector Machines', icon: '⚔️', sections: [
      { type: 'heading', text: 'The widest road wins', level: 1 },
      { type: 'para', html: '<strong>SVMs</strong> find the hyperplane that <em>maximally separates</em> two classes — i.e., leaves the widest possible margin between them.' },
      { type: 'image', alt: 'SVM margin', svg:
`<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="280" fill="#fafafa" rx="8"/>
  <line x1="40" y1="240" x2="490" y2="240" stroke="#999"/>
  <line x1="40" y1="20" x2="40" y2="240" stroke="#999"/>

  <line x1="60" y1="80" x2="470" y2="220" stroke="#7c4dff" stroke-width="3"/>
  <line x1="60" y1="40" x2="470" y2="180" stroke="#aaa" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="60" y1="120" x2="470" y2="260" stroke="#aaa" stroke-width="1" stroke-dasharray="4 4"/>

  <text x="300" y="60" font-family="Nunito" font-size="12" fill="#7c4dff" font-weight="bold">hyperplane</text>
  <text x="80" y="155" font-family="Nunito" font-size="11" fill="#666">margin</text>

  <g fill="#1cb0f6">
    <circle cx="100" cy="200" r="6"/><circle cx="140" cy="190" r="6"/><circle cx="160" cy="220" r="6"/>
    <circle cx="200" cy="190" r="6" stroke="#0e4d72" stroke-width="3"/>
  </g>
  <g fill="#ff4b4b">
    <circle cx="280" cy="80" r="6"/><circle cx="320" cy="50" r="6"/><circle cx="360" cy="90" r="6"/>
    <circle cx="250" cy="90" r="6" stroke="#7a0e0e" stroke-width="3"/>
  </g>
  <text x="120" y="265" font-family="Nunito" font-size="11" fill="#555">support vectors are outlined.</text>
</svg>` },
      { type: 'heading', text: 'Support vectors', level: 2 },
      { type: 'para', html: 'Only the closest training points to the boundary — the <strong>support vectors</strong> — define the hyperplane. Remove a non-support-vector and nothing changes.' },
      { type: 'heading', text: 'The math (intuition)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Maximise margin = 2 / ||w||</span>
<span class="com"># Subject to: yᵢ(w·xᵢ + b) ≥ 1  for every example.</span>

<span class="com"># Solved with quadratic programming.</span>` },
      { type: 'heading', text: 'Soft margin: dealing with noise', level: 2 },
      { type: 'para', html: 'Real data isn\'t perfectly separable. The <strong>soft margin</strong> lets some points sit inside the margin or on the wrong side, paying a penalty <code>C</code>.' },
      { type: 'list', kind: 'bullet', items: [
        'Large <code>C</code> → fewer violations, more overfitting.',
        'Small <code>C</code> → wider margin, more tolerant.'
      ]},
      { type: 'heading', text: 'The kernel trick', level: 2 },
      { type: 'para', html: 'Some data isn\'t linearly separable in original space. Kernels implicitly map points to higher dimensions where a hyperplane <em>does</em> exist.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># Common kernels:</span>
linear:  K(x, y) = x·y
poly:    K(x, y) = (x·y + <span class="num">1</span>)^d
rbf:     K(x, y) = e^(-γ||x-y||²)
sigmoid: K(x, y) = tanh(αx·y + c)` },
      { type: 'callout', kind: 'tip', html: 'Start with the <strong>RBF kernel</strong> — it handles most non-linear problems out of the box.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.svm <span class="kw">import</span> <span class="ty">SVC</span>

clf = <span class="ty">SVC</span>(kernel=<span class="str">"rbf"</span>, C=<span class="num">1.0</span>, gamma=<span class="str">"scale"</span>)
clf.<span class="fn">fit</span>(X_train, y_train)` },
      { type: 'heading', text: 'When to use SVM', level: 2 },
      { type: 'para', html: 'SVMs shine on <strong>small, high-dimensional</strong> datasets (text, gene expression). They scale poorly past ~100k samples; for big data prefer trees or neural networks.' }
    ]},

    /* ============== CH 13 ============== */
    { id: 'ml-c13', title: 'K-Means Clustering', icon: '🎈', sections: [
      { type: 'heading', text: 'Finding groups without labels', level: 1 },
      { type: 'para', html: '<strong>K-Means</strong> partitions data into K clusters by alternately assigning points to the nearest centroid and recomputing centroids.' },
      { type: 'image', alt: 'k-means clusters', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <g fill="#1cb0f6">
    <circle cx="100" cy="80" r="5"/><circle cx="120" cy="100" r="5"/><circle cx="80" cy="110" r="5"/>
    <circle cx="130" cy="70" r="5"/><circle cx="90" cy="60" r="5"/>
  </g>
  <g fill="#ff4b4b">
    <circle cx="280" cy="80" r="5"/><circle cx="320" cy="100" r="5"/><circle cx="260" cy="110" r="5"/>
    <circle cx="300" cy="60" r="5"/><circle cx="290" cy="120" r="5"/>
  </g>
  <g fill="#58cc02">
    <circle cx="200" cy="200" r="5"/><circle cx="240" cy="220" r="5"/><circle cx="180" cy="220" r="5"/>
    <circle cx="220" cy="190" r="5"/><circle cx="200" cy="240" r="5"/>
  </g>
  <g fill="#7c4dff" stroke="white" stroke-width="2">
    <rect x="95" y="80" width="14" height="14"/>
    <rect x="285" y="85" width="14" height="14"/>
    <rect x="205" y="210" width="14" height="14"/>
  </g>
  <text x="105" y="160" font-family="Nunito" font-size="11" fill="#0e88c8" font-weight="bold">cluster 1</text>
  <text x="285" y="160" font-family="Nunito" font-size="11" fill="#cc1111" font-weight="bold">cluster 2</text>
  <text x="200" y="270" text-anchor="middle" font-family="Nunito" font-size="11" fill="#3d9100" font-weight="bold">cluster 3</text>
  <text x="240" y="20" text-anchor="middle" font-family="Nunito" font-size="11" fill="#5e35d5">purple squares = centroids</text>
</svg>` },
      { type: 'heading', text: 'The algorithm', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="num">1</span>. Pick K random centroids.
<span class="num">2</span>. Assign each point to nearest centroid.
<span class="num">3</span>. Move each centroid to the mean of its points.
<span class="num">4</span>. Repeat steps 2-3 until centroids stop moving.` },
      { type: 'heading', text: 'Pseudocode', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">kmeans</span>(X, K, max_iter=<span class="num">100</span>):
    centroids = <span class="fn">random_sample</span>(X, K)

    <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(max_iter):
        labels = [<span class="fn">argmin</span>(<span class="fn">dist</span>(x, c) <span class="kw">for</span> c <span class="kw">in</span> centroids) <span class="kw">for</span> x <span class="kw">in</span> X]
        new_centroids = [<span class="fn">mean</span>([X[i] <span class="kw">for</span> i, l <span class="kw">in</span> <span class="fn">enumerate</span>(labels) <span class="kw">if</span> l == k])
                          <span class="kw">for</span> k <span class="kw">in</span> <span class="fn">range</span>(K)]

        <span class="kw">if</span> new_centroids == centroids: <span class="kw">break</span>
        centroids = new_centroids

    <span class="kw">return</span> labels, centroids` },
      { type: 'heading', text: 'Inertia', level: 2 },
      { type: 'para', html: 'K-Means minimises total squared distance from points to their cluster centroid (the <strong>inertia</strong> or WCSS).' },
      { type: 'heading', text: 'Choosing K — the elbow method', level: 2 },
      { type: 'image', alt: 'elbow plot', svg:
`<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="240" fill="#fafafa" rx="8"/>
  <line x1="40" y1="200" x2="450" y2="200" stroke="#666"/>
  <line x1="40" y1="20" x2="40" y2="200" stroke="#666"/>
  <text x="245" y="225" text-anchor="middle" font-family="Nunito" font-size="12">K</text>
  <text x="20" y="110" text-anchor="middle" font-family="Nunito" font-size="12" transform="rotate(-90,20,110)">inertia</text>
  <path d="M60 50 Q100 80 140 130 T 250 180 T 440 195" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <circle cx="160" cy="155" r="8" fill="#ff9600"/>
  <text x="200" y="145" font-family="Nunito" font-size="12" fill="#cc7a00" font-weight="bold">← the elbow (good K)</text>
</svg>` },
      { type: 'callout', kind: 'tip', html: 'No single "right" K. Use the elbow, silhouette score, or business judgment.' },
      { type: 'heading', text: 'K-Means++', level: 2 },
      { type: 'para', html: 'Random initialization can be bad. <strong>K-Means++</strong> places initial centroids far apart by sampling proportional to distance squared — almost always faster and better.' },
      { type: 'heading', text: 'Limitations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'You must pick K in advance.',
        'Sensitive to scaling — <strong>always normalize</strong>.',
        'Only finds <strong>spherical, equal-sized</strong> clusters.',
        'Outliers warp centroids.'
      ]},
      { type: 'heading', text: 'Other clustering algorithms', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>DBSCAN</strong> — density-based; finds arbitrary shapes, marks outliers.',
        '<strong>Hierarchical</strong> — builds a tree of merges (dendrogram).',
        '<strong>Gaussian Mixture Model</strong> — soft clusters; each point has a probability per cluster.'
      ]},
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.cluster <span class="kw">import</span> <span class="ty">KMeans</span>

km = <span class="ty">KMeans</span>(n_clusters=<span class="num">3</span>, init=<span class="str">"k-means++"</span>, random_state=<span class="num">42</span>)
labels = km.<span class="fn">fit_predict</span>(X)
<span class="fn">print</span>(km.cluster_centers_)` },
      { type: 'heading', text: 'Use cases', level: 2 },
      { type: 'para', html: 'Customer segmentation, image color quantization, document grouping, anomaly detection (points far from any centroid).' }
    ]},

    /* ============== CH 14 ============== */
    { id: 'ml-c14', title: 'Dimensionality Reduction (PCA)', icon: '🔍', sections: [
      { type: 'heading', text: 'When you have too many features', level: 1 },
      { type: 'para', html: '<strong>PCA (Principal Component Analysis)</strong> projects high-dimensional data into fewer dimensions while preserving as much variance as possible.' },
      { type: 'heading', text: 'Why reduce dimensions?', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Visualise data in 2D / 3D.',
        'Speed up downstream models.',
        'Reduce noise.',
        'Combat the curse of dimensionality.',
        'Compress (lossy) for storage.'
      ]},
      { type: 'heading', text: 'The intuition', level: 2 },
      { type: 'image', alt: 'PCA projection', svg:
`<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="280" fill="#fafafa" rx="8"/>
  <line x1="40" y1="240" x2="490" y2="240" stroke="#999"/>
  <line x1="40" y1="20" x2="40" y2="240" stroke="#999"/>
  <g fill="#1cb0f6">
    <circle cx="100" cy="200" r="5"/><circle cx="150" cy="180" r="5"/><circle cx="200" cy="160" r="5"/>
    <circle cx="250" cy="140" r="5"/><circle cx="300" cy="120" r="5"/><circle cx="350" cy="100" r="5"/>
    <circle cx="400" cy="80" r="5"/><circle cx="170" cy="170" r="5"/><circle cx="280" cy="135" r="5"/>
  </g>
  <line x1="80" y1="215" x2="420" y2="65" stroke="#7c4dff" stroke-width="3"/>
  <line x1="200" y1="100" x2="290" y2="220" stroke="#58cc02" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="420" y="60" font-family="Nunito" font-size="12" fill="#7c4dff" font-weight="bold">PC1 (most variance)</text>
  <text x="295" y="220" font-family="Nunito" font-size="12" fill="#3d9100" font-weight="bold">PC2 (orthogonal)</text>
</svg>` },
      { type: 'heading', text: 'Principal components', level: 2 },
      { type: 'para', html: 'A <strong>principal component</strong> is a direction in feature space. PC1 is the direction of greatest variance; PC2 is orthogonal to PC1 and captures the next most variance; and so on.' },
      { type: 'heading', text: 'How it works (math sketch)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="num">1</span>. Center the data (subtract mean).
<span class="num">2</span>. Compute covariance matrix.
<span class="num">3</span>. Find eigenvectors & eigenvalues of cov matrix.
<span class="num">4</span>. Sort by eigenvalue (variance) descending.
<span class="num">5</span>. Project data onto top-k eigenvectors.` },
      { type: 'heading', text: 'Variance explained', level: 2 },
      { type: 'para', html: 'Each component captures some fraction of the total variance. Plot the cumulative sum to pick how many to keep — usually 90–95%.' },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.decomposition <span class="kw">import</span> <span class="ty">PCA</span>

pca = <span class="ty">PCA</span>(n_components=<span class="num">2</span>)
X_2d = pca.<span class="fn">fit_transform</span>(X)

<span class="fn">print</span>(pca.explained_variance_ratio_)
<span class="com"># e.g. [0.62, 0.21] → PC1 captures 62% of variance</span>` },
      { type: 'callout', kind: 'info', html: 'PCA is <strong>linear</strong>. For non-linear structure, use t-SNE, UMAP, or autoencoders.' },
      { type: 'heading', text: 'Caveats', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Components are linear combinations — <strong>hard to interpret</strong>.',
        'Sensitive to feature scaling — <strong>standardize first</strong>.',
        'Lossy if you drop components with non-trivial variance.'
      ]},
      { type: 'heading', text: 'Beyond PCA', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>t-SNE</strong> — non-linear, beautiful 2D plots, but distorts global distance.',
        '<strong>UMAP</strong> — faster than t-SNE, preserves more global structure.',
        '<strong>Autoencoders</strong> — neural nets that compress and reconstruct.'
      ]}
    ]},

    /* ============== CH 15 ============== */
    { id: 'ml-c15', title: 'Neural Networks — Building Blocks', icon: '🧠', sections: [
      { type: 'heading', text: 'From neuron to network', level: 1 },
      { type: 'para', html: '<strong>Neural networks</strong> are stacks of simple compute units called <strong>neurons</strong> (or "units"). Each neuron does a tiny computation; together they approximate arbitrarily complex functions.' },
      { type: 'heading', text: 'A single neuron', level: 2 },
      { type: 'image', alt: 'single neuron', svg:
`<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <circle cx="60" cy="60" r="20" fill="#1cb0f6"/><text x="60" y="65" text-anchor="middle" fill="white" font-weight="bold">x₁</text>
    <circle cx="60" cy="110" r="20" fill="#1cb0f6"/><text x="60" y="115" text-anchor="middle" fill="white" font-weight="bold">x₂</text>
    <circle cx="60" cy="160" r="20" fill="#1cb0f6"/><text x="60" y="165" text-anchor="middle" fill="white" font-weight="bold">x₃</text>

    <line x1="80" y1="60" x2="240" y2="110" stroke="#666"/><text x="160" y="75" fill="#555">w₁</text>
    <line x1="80" y1="110" x2="240" y2="110" stroke="#666"/><text x="160" y="105" fill="#555">w₂</text>
    <line x1="80" y1="160" x2="240" y2="110" stroke="#666"/><text x="160" y="155" fill="#555">w₃</text>

    <circle cx="260" cy="110" r="30" fill="#7c4dff"/><text x="260" y="115" text-anchor="middle" fill="white" font-weight="bold">Σ + b</text>

    <line x1="290" y1="110" x2="340" y2="110" stroke="#666"/>

    <rect x="340" y="85" width="70" height="50" rx="8" fill="#58cc02"/>
    <text x="375" y="115" text-anchor="middle" fill="white" font-weight="bold">f(·)</text>

    <line x1="410" y1="110" x2="470" y2="110" stroke="#666"/>
    <text x="475" y="115" font-weight="bold" fill="#3d9100">y</text>
    <text x="375" y="80" text-anchor="middle" font-size="10" fill="#555">activation</text>
  </g>
</svg>` },
      { type: 'heading', text: 'The neuron equation', level: 2 },
      { type: 'code', lang: 'python', code:
`z = w₁x₁ + w₂x₂ + … + wₙxₙ + b
y = f(z)

<span class="com"># w → weights (learned)</span>
<span class="com"># b → bias (learned)</span>
<span class="com"># f → activation function (sigmoid, ReLU, ...)</span>` },
      { type: 'heading', text: 'Stacking neurons → layers', level: 2 },
      { type: 'image', alt: 'simple neural net', svg:
`<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <text x="80" y="25" text-anchor="middle" font-weight="bold">input</text>
    <text x="260" y="25" text-anchor="middle" font-weight="bold">hidden</text>
    <text x="440" y="25" text-anchor="middle" font-weight="bold">output</text>

    <g fill="#1cb0f6">
      <circle cx="80" cy="80" r="18"/><circle cx="80" cy="140" r="18"/><circle cx="80" cy="200" r="18"/>
    </g>
    <g fill="#7c4dff">
      <circle cx="260" cy="60" r="18"/><circle cx="260" cy="120" r="18"/><circle cx="260" cy="180" r="18"/><circle cx="260" cy="240" r="18"/>
    </g>
    <g fill="#58cc02">
      <circle cx="440" cy="110" r="18"/><circle cx="440" cy="170" r="18"/>
    </g>
    <g stroke="#ddd" stroke-width="1">
      <line x1="98" y1="80" x2="242" y2="60"/><line x1="98" y1="80" x2="242" y2="120"/><line x1="98" y1="80" x2="242" y2="180"/><line x1="98" y1="80" x2="242" y2="240"/>
      <line x1="98" y1="140" x2="242" y2="60"/><line x1="98" y1="140" x2="242" y2="120"/><line x1="98" y1="140" x2="242" y2="180"/><line x1="98" y1="140" x2="242" y2="240"/>
      <line x1="98" y1="200" x2="242" y2="60"/><line x1="98" y1="200" x2="242" y2="120"/><line x1="98" y1="200" x2="242" y2="180"/><line x1="98" y1="200" x2="242" y2="240"/>
      <line x1="278" y1="60" x2="422" y2="110"/><line x1="278" y1="60" x2="422" y2="170"/>
      <line x1="278" y1="120" x2="422" y2="110"/><line x1="278" y1="120" x2="422" y2="170"/>
      <line x1="278" y1="180" x2="422" y2="110"/><line x1="278" y1="180" x2="422" y2="170"/>
      <line x1="278" y1="240" x2="422" y2="110"/><line x1="278" y1="240" x2="422" y2="170"/>
    </g>
  </g>
</svg>` },
      { type: 'heading', text: 'Forward pass', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">def</span> <span class="fn">forward</span>(x, W1, b1, W2, b2):
    z1 = W1 @ x + b1
    a1 = <span class="fn">relu</span>(z1)
    z2 = W2 @ a1 + b2
    out = <span class="fn">softmax</span>(z2)
    <span class="kw">return</span> out` },
      { type: 'heading', text: 'Why depth matters', level: 2 },
      { type: 'para', html: 'A single hidden layer (theoretically) can approximate any function — but might need exponentially many neurons. <strong>Deep</strong> networks express complex functions compactly.' },
      { type: 'callout', kind: 'info', html: 'Each layer learns a more abstract representation: pixels → edges → shapes → objects.' },
      { type: 'heading', text: 'Parameters', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Layer with M inputs and N outputs:</span>
<span class="com">#   weights → M × N matrix</span>
<span class="com">#   bias    → N values</span>
<span class="com"># Total params per layer: M·N + N</span>

<span class="com"># A 784→128→10 network has:</span>
(<span class="num">784</span>·<span class="num">128</span> + <span class="num">128</span>) + (<span class="num">128</span>·<span class="num">10</span> + <span class="num">10</span>) = <span class="num">101770</span>` },
      { type: 'heading', text: 'Universal approximation', level: 2 },
      { type: 'para', html: 'Hornik (1989): a neural net with one hidden layer and a non-linear activation can approximate any continuous function to arbitrary precision, given enough neurons.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> torch.nn <span class="kw">as</span> nn

model = nn.<span class="ty">Sequential</span>(
    nn.<span class="ty">Linear</span>(<span class="num">784</span>, <span class="num">128</span>),
    nn.<span class="ty">ReLU</span>(),
    nn.<span class="ty">Linear</span>(<span class="num">128</span>, <span class="num">10</span>),
)` },
      { type: 'heading', text: 'Inference vs training', level: 2 },
      { type: 'para', html: '<strong>Inference</strong> is a single forward pass — fast. <strong>Training</strong> involves a forward pass + a backward pass + weight update — repeated millions of times.' }
    ]},

    /* ============== CH 16 ============== */
    { id: 'ml-c16', title: 'Activation Functions', icon: '⚡', sections: [
      { type: 'heading', text: 'Why non-linearity?', level: 1 },
      { type: 'para', html: 'Without activations, stacking linear layers is still <em>linear</em>. Activations bend the output curve so the network can model non-linear patterns.' },
      { type: 'image', alt: 'activation function curves', svg:
`<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <g transform="translate(30,40)">
      <text x="60" y="0" text-anchor="middle" font-weight="bold">Sigmoid</text>
      <line x1="0" y1="100" x2="120" y2="100" stroke="#999"/>
      <line x1="60" y1="20" x2="60" y2="180" stroke="#999"/>
      <path d="M0 175 Q40 175 60 100 Q80 25 120 25" stroke="#1cb0f6" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(180,40)">
      <text x="60" y="0" text-anchor="middle" font-weight="bold">Tanh</text>
      <line x1="0" y1="100" x2="120" y2="100" stroke="#999"/>
      <line x1="60" y1="20" x2="60" y2="180" stroke="#999"/>
      <path d="M0 175 Q40 175 60 100 Q80 25 120 25" stroke="#7c4dff" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(330,40)">
      <text x="60" y="0" text-anchor="middle" font-weight="bold">ReLU</text>
      <line x1="0" y1="100" x2="120" y2="100" stroke="#999"/>
      <line x1="60" y1="20" x2="60" y2="180" stroke="#999"/>
      <path d="M0 100 L60 100 L120 20" stroke="#58cc02" stroke-width="3" fill="none"/>
    </g>
    <g transform="translate(480,40)">
      <text x="60" y="0" text-anchor="middle" font-weight="bold">Leaky ReLU</text>
      <line x1="0" y1="100" x2="120" y2="100" stroke="#999"/>
      <line x1="60" y1="20" x2="60" y2="180" stroke="#999"/>
      <path d="M0 115 L60 100 L120 20" stroke="#ff9600" stroke-width="3" fill="none"/>
    </g>
  </g>
</svg>` },
      { type: 'heading', text: 'Sigmoid', level: 2 },
      { type: 'code', lang: 'python', code:
`σ(z) = <span class="num">1</span> / (<span class="num">1</span> + e^-z)
range: (<span class="num">0</span>, <span class="num">1</span>)
<span class="com"># Pros: smooth, probabilistic output</span>
<span class="com"># Cons: vanishing gradients at extremes, not zero-centered</span>` },
      { type: 'heading', text: 'Tanh', level: 2 },
      { type: 'code', lang: 'python', code:
`tanh(z) = (e^z - e^-z) / (e^z + e^-z)
range: (-<span class="num">1</span>, <span class="num">1</span>)
<span class="com"># Better than sigmoid (zero-centered)</span>
<span class="com"># Still suffers vanishing gradients</span>` },
      { type: 'heading', text: 'ReLU', level: 2 },
      { type: 'code', lang: 'python', code:
`ReLU(z) = <span class="fn">max</span>(<span class="num">0</span>, z)
range: [<span class="num">0</span>, +∞)
<span class="com"># Pros: fast, no vanishing for z > 0, sparse activations</span>
<span class="com"># Cons: "dying ReLU" — neurons stuck at 0</span>` },
      { type: 'callout', kind: 'tip', html: 'When in doubt, use <strong>ReLU</strong> in hidden layers — it\'s the modern default.' },
      { type: 'heading', text: 'Softmax (output layer)', level: 2 },
      { type: 'code', lang: 'python', code:
`softmax(zᵢ) = e^zᵢ / Σⱼ e^zⱼ

<span class="com"># Turns a vector of real numbers into a probability distribution.</span>
<span class="com"># Used at the output of multiclass classifiers.</span>` },
      { type: 'heading', text: 'Newer activations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Leaky ReLU</strong> — small slope for negative z, fixes dying ReLU.',
        '<strong>ELU</strong> — smooth, can produce negatives.',
        '<strong>GELU</strong> — used in Transformers, smoother than ReLU.',
        '<strong>Swish</strong> — z · σ(z), found by neural architecture search.'
      ]}
    ]},

    /* ============== CH 17 ============== */
    { id: 'ml-c17', title: 'Backpropagation', icon: '🔁', sections: [
      { type: 'heading', text: 'How networks learn', level: 1 },
      { type: 'para', html: 'A neural net has millions of parameters. <strong>Backpropagation</strong> efficiently computes how each one should change to reduce the loss — using the chain rule of calculus.' },
      { type: 'heading', text: 'The big picture', level: 2 },
      { type: 'image', alt: 'forward and backward pass', svg:
`<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="20" y="80" width="100" height="50" rx="8" fill="#1cb0f6"/><text x="70" y="110" text-anchor="middle" fill="white" font-weight="bold">input</text>
    <rect x="170" y="80" width="100" height="50" rx="8" fill="#7c4dff"/><text x="220" y="110" text-anchor="middle" fill="white" font-weight="bold">hidden</text>
    <rect x="320" y="80" width="100" height="50" rx="8" fill="#7c4dff"/><text x="370" y="110" text-anchor="middle" fill="white" font-weight="bold">hidden</text>
    <rect x="470" y="80" width="100" height="50" rx="8" fill="#58cc02"/><text x="520" y="110" text-anchor="middle" fill="white" font-weight="bold">loss</text>

    <line x1="120" y1="100" x2="170" y2="100" stroke="#0e88c8" stroke-width="3" marker-end="url(#a2)"/>
    <line x1="270" y1="100" x2="320" y2="100" stroke="#0e88c8" stroke-width="3" marker-end="url(#a2)"/>
    <line x1="420" y1="100" x2="470" y2="100" stroke="#0e88c8" stroke-width="3" marker-end="url(#a2)"/>

    <line x1="470" y1="120" x2="420" y2="120" stroke="#ff4b4b" stroke-width="3" marker-end="url(#a3)"/>
    <line x1="320" y1="120" x2="270" y2="120" stroke="#ff4b4b" stroke-width="3" marker-end="url(#a3)"/>
    <line x1="170" y1="120" x2="120" y2="120" stroke="#ff4b4b" stroke-width="3" marker-end="url(#a3)"/>

    <text x="320" y="60" text-anchor="middle" font-weight="bold" fill="#0e88c8">→ forward pass (activations)</text>
    <text x="320" y="170" text-anchor="middle" font-weight="bold" fill="#ff4b4b">← backward pass (gradients)</text>
  </g>
  <defs>
    <marker id="a2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#0e88c8"/></marker>
    <marker id="a3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#ff4b4b"/></marker>
  </defs>
</svg>` },
      { type: 'heading', text: 'Chain rule recap', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># If y = f(g(x)), then:</span>
dy/dx = (df/dg) · (dg/dx)

<span class="com"># Backprop applies this layer by layer, multiplying local gradients.</span>` },
      { type: 'heading', text: 'Toy example', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Suppose:</span>
z = w · x
a = σ(z)
L = (a - y)²

<span class="com"># dL/dw   =   dL/da   ·   da/dz   ·   dz/dw</span>
<span class="com">#         = 2(a-y)   · σ(z)(1-σ(z)) ·   x</span>` },
      { type: 'heading', text: 'Layer-by-layer pseudocode', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="com"># Forward</span>
z1 = W1 @ x + b1;    a1 = relu(z1)
z2 = W2 @ a1 + b2;   y_hat = softmax(z2)
loss = cross_entropy(y_hat, y)

<span class="com"># Backward</span>
dL_dz2 = y_hat - y
dL_dW2 = dL_dz2 @ a1.T
dL_db2 = dL_dz2

dL_da1 = W2.T @ dL_dz2
dL_dz1 = dL_da1 * relu_grad(z1)
dL_dW1 = dL_dz1 @ x.T
dL_db1 = dL_dz1` },
      { type: 'heading', text: 'Why it\'s efficient', level: 2 },
      { type: 'para', html: 'Backprop computes <em>all</em> partial derivatives in just <strong>one forward + one backward pass</strong>. Without it, training large networks would be infeasible.' },
      { type: 'heading', text: 'Vanishing & exploding gradients', level: 2 },
      { type: 'para', html: 'In deep nets, gradients are products of many small (or large) numbers. They can <strong>vanish</strong> (network stops learning) or <strong>explode</strong> (loss → NaN).' },
      { type: 'callout', kind: 'warn', html: 'Combat vanishing/exploding with: ReLU, batch norm, residual connections, careful init (He / Xavier), gradient clipping.' },
      { type: 'heading', text: 'Autograd magic', level: 2 },
      { type: 'para', html: 'Modern frameworks (PyTorch, TensorFlow, JAX) build a computational graph and compute gradients automatically. You only write the forward pass.' },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> torch

x = torch.<span class="fn">tensor</span>(<span class="num">3.0</span>, requires_grad=<span class="kw">True</span>)
y = x ** <span class="num">2</span> + <span class="num">2</span> * x
y.<span class="fn">backward</span>()
<span class="fn">print</span>(x.grad)   <span class="com"># dy/dx = 2x + 2 = 8</span>` },
      { type: 'heading', text: 'Mini-batch SGD step', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">for</span> batch <span class="kw">in</span> dataloader:
    pred = model(batch.x)
    loss = loss_fn(pred, batch.y)
    optim.<span class="fn">zero_grad</span>()
    loss.<span class="fn">backward</span>()       <span class="com"># backprop!</span>
    optim.<span class="fn">step</span>()           <span class="com"># update weights</span>` }
    ]},

    /* ============== CH 18 ============== */
    { id: 'ml-c18', title: 'CNNs — for Vision', icon: '🖼️', sections: [
      { type: 'heading', text: 'Why not just flatten?', level: 1 },
      { type: 'para', html: 'A 224×224 RGB image has 150,528 numbers. A dense layer would need millions of parameters per neuron. <strong>CNNs</strong> exploit the spatial structure of images instead.' },
      { type: 'heading', text: 'Convolution operation', level: 2 },
      { type: 'image', alt: 'convolution on a grid', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="JetBrains Mono" font-size="14">
    <text x="60" y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">Image</text>
    <g>
      <rect x="20" y="40" width="40" height="40" fill="white" stroke="#7c4dff" stroke-width="2"/><text x="40" y="68" text-anchor="middle">1</text>
      <rect x="60" y="40" width="40" height="40" fill="white" stroke="#7c4dff" stroke-width="2"/><text x="80" y="68" text-anchor="middle">0</text>
      <rect x="100" y="40" width="40" height="40" fill="white" stroke="#ddd"/><text x="120" y="68" text-anchor="middle">1</text>
      <rect x="20" y="80" width="40" height="40" fill="white" stroke="#7c4dff" stroke-width="2"/><text x="40" y="108" text-anchor="middle">1</text>
      <rect x="60" y="80" width="40" height="40" fill="white" stroke="#7c4dff" stroke-width="2"/><text x="80" y="108" text-anchor="middle">1</text>
      <rect x="100" y="80" width="40" height="40" fill="white" stroke="#ddd"/><text x="120" y="108" text-anchor="middle">0</text>
      <rect x="20" y="120" width="40" height="40" fill="white" stroke="#ddd"/><text x="40" y="148" text-anchor="middle">0</text>
      <rect x="60" y="120" width="40" height="40" fill="white" stroke="#ddd"/><text x="80" y="148" text-anchor="middle">1</text>
      <rect x="100" y="120" width="40" height="40" fill="white" stroke="#ddd"/><text x="120" y="148" text-anchor="middle">1</text>
    </g>

    <text x="250" y="100" font-family="Nunito" font-size="22">⊛</text>

    <text x="320" y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">Filter</text>
    <g>
      <rect x="280" y="40" width="40" height="40" fill="#ede7f6" stroke="#7c4dff"/><text x="300" y="68" text-anchor="middle">1</text>
      <rect x="320" y="40" width="40" height="40" fill="#ede7f6" stroke="#7c4dff"/><text x="340" y="68" text-anchor="middle">-1</text>
      <rect x="280" y="80" width="40" height="40" fill="#ede7f6" stroke="#7c4dff"/><text x="300" y="108" text-anchor="middle">0</text>
      <rect x="320" y="80" width="40" height="40" fill="#ede7f6" stroke="#7c4dff"/><text x="340" y="108" text-anchor="middle">1</text>
    </g>

    <text x="430" y="100" font-family="Nunito" font-size="22">=</text>

    <text x="510" y="25" text-anchor="middle" font-family="Nunito" font-weight="bold">Output</text>
    <g>
      <rect x="470" y="40" width="40" height="40" fill="#dcedc8" stroke="#58cc02" stroke-width="2"/><text x="490" y="68" text-anchor="middle">2</text>
      <rect x="510" y="40" width="40" height="40" fill="white" stroke="#ddd"/><text x="530" y="68" text-anchor="middle">0</text>
      <rect x="470" y="80" width="40" height="40" fill="white" stroke="#ddd"/><text x="490" y="108" text-anchor="middle">1</text>
      <rect x="510" y="80" width="40" height="40" fill="white" stroke="#ddd"/><text x="530" y="108" text-anchor="middle">1</text>
    </g>
  </g>
  <text x="300" y="200" text-anchor="middle" font-family="Nunito" font-size="11" fill="#555">Slide the filter; at each position multiply &amp; sum.</text>
</svg>` },
      { type: 'heading', text: 'Filters learn features', level: 2 },
      { type: 'para', html: 'Each filter detects a specific pattern (edge, blob, texture). Early layers spot edges; deeper layers compose them into shapes and objects.' },
      { type: 'heading', text: 'Key concepts', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Stride</strong> — step size when sliding the filter.',
        '<strong>Padding</strong> — extra zeros around the input to preserve size.',
        '<strong>Channels</strong> — depth (RGB = 3 channels). Filters span all channels.',
        '<strong>Feature map</strong> — the output of one filter applied across the image.'
      ]},
      { type: 'heading', text: 'Pooling', level: 2 },
      { type: 'para', html: '<strong>Max pooling</strong> downsamples by taking the max over a small window. Shrinks feature maps, adds translation invariance.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># 2×2 max pooling on a 4×4 input → 2×2 output</span>
[[<span class="num">1</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">4</span>],          [[<span class="num">5</span>, <span class="num">8</span>],
 [<span class="num">5</span>, <span class="num">6</span>, <span class="num">7</span>, <span class="num">8</span>],   →     [<span class="num">9</span>, <span class="num">4</span>]]
 [<span class="num">9</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],
 [<span class="num">4</span>, <span class="num">2</span>, <span class="num">1</span>, <span class="num">0</span>]]` },
      { type: 'heading', text: 'A classic CNN', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="ty">Conv2d</span>(<span class="num">3</span>→<span class="num">32</span>, <span class="num">3</span>×<span class="num">3</span>) → <span class="ty">ReLU</span> → <span class="ty">MaxPool</span>(<span class="num">2</span>×<span class="num">2</span>)
<span class="ty">Conv2d</span>(<span class="num">32</span>→<span class="num">64</span>, <span class="num">3</span>×<span class="num">3</span>) → <span class="ty">ReLU</span> → <span class="ty">MaxPool</span>(<span class="num">2</span>×<span class="num">2</span>)
<span class="ty">Conv2d</span>(<span class="num">64</span>→<span class="num">128</span>, <span class="num">3</span>×<span class="num">3</span>) → <span class="ty">ReLU</span> → <span class="ty">MaxPool</span>(<span class="num">2</span>×<span class="num">2</span>)
<span class="ty">Flatten</span>
<span class="ty">Linear</span>(… → <span class="num">10</span>)` },
      { type: 'heading', text: 'Why CNNs work', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Local connectivity</strong> — pixels close together matter most.',
        '<strong>Parameter sharing</strong> — the same filter applies everywhere.',
        '<strong>Translation invariance</strong> — a cat is a cat anywhere in the frame.'
      ]},
      { type: 'heading', text: 'Famous architectures', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>LeNet</strong> (1998) — digits.',
        '<strong>AlexNet</strong> (2012) — kicked off the deep learning era.',
        '<strong>VGG</strong> — simple, deep, lots of 3×3 convs.',
        '<strong>ResNet</strong> — skip connections, enabled 100+ layer nets.',
        '<strong>EfficientNet</strong> — scaled depth/width/resolution jointly.'
      ]},
      { type: 'heading', text: 'In code (PyTorch)', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">import</span> torch.nn <span class="kw">as</span> nn

model = nn.<span class="ty">Sequential</span>(
    nn.<span class="ty">Conv2d</span>(<span class="num">3</span>, <span class="num">32</span>, kernel_size=<span class="num">3</span>, padding=<span class="num">1</span>),
    nn.<span class="ty">ReLU</span>(),
    nn.<span class="ty">MaxPool2d</span>(<span class="num">2</span>),
    nn.<span class="ty">Conv2d</span>(<span class="num">32</span>, <span class="num">64</span>, kernel_size=<span class="num">3</span>, padding=<span class="num">1</span>),
    nn.<span class="ty">ReLU</span>(),
    nn.<span class="ty">MaxPool2d</span>(<span class="num">2</span>),
    nn.<span class="ty">Flatten</span>(),
    nn.<span class="ty">Linear</span>(<span class="num">64</span>*<span class="num">8</span>*<span class="num">8</span>, <span class="num">10</span>),
)` },
      { type: 'callout', kind: 'tip', html: 'For real projects, <strong>transfer learning</strong> from a pretrained ResNet is almost always better than training from scratch.' }
    ]},

    /* ============== CH 19 ============== */
    { id: 'ml-c19', title: 'RNNs & Sequences', icon: '🔗', sections: [
      { type: 'heading', text: 'When order matters', level: 1 },
      { type: 'para', html: '<strong>RNNs</strong> handle sequential data — text, audio, time series — by maintaining a <em>hidden state</em> that carries information from past steps.' },
      { type: 'image', alt: 'unrolled RNN', svg:
`<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="40" y="80" width="80" height="60" rx="8" fill="#7c4dff"/><text x="80" y="115" text-anchor="middle" fill="white" font-weight="bold">RNN</text>
    <rect x="180" y="80" width="80" height="60" rx="8" fill="#7c4dff"/><text x="220" y="115" text-anchor="middle" fill="white" font-weight="bold">RNN</text>
    <rect x="320" y="80" width="80" height="60" rx="8" fill="#7c4dff"/><text x="360" y="115" text-anchor="middle" fill="white" font-weight="bold">RNN</text>
    <rect x="460" y="80" width="80" height="60" rx="8" fill="#7c4dff"/><text x="500" y="115" text-anchor="middle" fill="white" font-weight="bold">RNN</text>

    <line x1="120" y1="110" x2="180" y2="110" stroke="#666" stroke-width="2" marker-end="url(#ah)"/>
    <line x1="260" y1="110" x2="320" y2="110" stroke="#666" stroke-width="2" marker-end="url(#ah)"/>
    <line x1="400" y1="110" x2="460" y2="110" stroke="#666" stroke-width="2" marker-end="url(#ah)"/>
    <text x="150" y="100" text-anchor="middle" font-size="11" fill="#555">h₁</text>
    <text x="290" y="100" text-anchor="middle" font-size="11" fill="#555">h₂</text>
    <text x="430" y="100" text-anchor="middle" font-size="11" fill="#555">h₃</text>

    <text x="80" y="180" text-anchor="middle" fill="#0e88c8" font-weight="bold">"The"</text>
    <text x="220" y="180" text-anchor="middle" fill="#0e88c8" font-weight="bold">"cat"</text>
    <text x="360" y="180" text-anchor="middle" fill="#0e88c8" font-weight="bold">"sat"</text>
    <text x="500" y="180" text-anchor="middle" fill="#0e88c8" font-weight="bold">"on"</text>

    <text x="80" y="40" text-anchor="middle" fill="#3d9100" font-weight="bold">y₀</text>
    <text x="220" y="40" text-anchor="middle" fill="#3d9100" font-weight="bold">y₁</text>
    <text x="360" y="40" text-anchor="middle" fill="#3d9100" font-weight="bold">y₂</text>
    <text x="500" y="40" text-anchor="middle" fill="#3d9100" font-weight="bold">y₃</text>
  </g>
  <defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#666"/></marker></defs>
</svg>` },
      { type: 'heading', text: 'The hidden state', level: 2 },
      { type: 'code', lang: 'python', code:
`hₜ = tanh(Wₕ · hₜ₋₁ + Wₓ · xₜ + b)
yₜ = Wᵧ · hₜ

<span class="com"># Same weights reused at every timestep.</span>
<span class="com"># h carries memory of past inputs.</span>` },
      { type: 'heading', text: 'Use cases', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Language modeling</strong> — predict next word.',
        '<strong>Translation</strong> — seq2seq with encoder + decoder RNNs.',
        '<strong>Speech recognition</strong> — audio frames → text.',
        '<strong>Time series</strong> — stock prices, sensor data.'
      ]},
      { type: 'heading', text: 'Vanishing gradients revisited', level: 2 },
      { type: 'para', html: 'Backpropagating through long sequences multiplies many small numbers — gradients vanish. Vanilla RNNs can\'t learn long-range dependencies.' },
      { type: 'heading', text: 'LSTM', level: 2 },
      { type: 'para', html: '<strong>Long Short-Term Memory</strong> adds a memory cell and three gates (forget, input, output) that decide what to remember, write, and read.' },
      { type: 'code', lang: 'python', code:
`f = σ(W_f · [hₜ₋₁, xₜ])   <span class="com"># forget gate</span>
i = σ(W_i · [hₜ₋₁, xₜ])   <span class="com"># input  gate</span>
o = σ(W_o · [hₜ₋₁, xₜ])   <span class="com"># output gate</span>
c̃ = tanh(W_c · [hₜ₋₁, xₜ])
cₜ = f * cₜ₋₁ + i * c̃    <span class="com"># memory cell</span>
hₜ = o * tanh(cₜ)` },
      { type: 'heading', text: 'GRU', level: 2 },
      { type: 'para', html: '<strong>Gated Recurrent Unit</strong> — a simpler LSTM with two gates (reset, update). Fewer parameters, comparable performance.' },
      { type: 'callout', kind: 'info', html: 'For modern NLP, <strong>Transformers</strong> (next chapter) have largely replaced RNNs. But RNNs still rule streaming inference and small models.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`lstm = nn.<span class="ty">LSTM</span>(input_size=<span class="num">100</span>, hidden_size=<span class="num">256</span>, num_layers=<span class="num">2</span>)
out, (h, c) = lstm(seq)` }
    ]},

    /* ============== CH 20 ============== */
    { id: 'ml-c20', title: 'Transformers & Attention', icon: '✨', sections: [
      { type: 'heading', text: 'Attention is all you need', level: 1 },
      { type: 'para', html: '<strong>Transformers</strong> replaced RNNs by processing all tokens in parallel and letting each one <em>attend</em> to every other one. They power GPT, BERT, Claude, and most modern AI.' },
      { type: 'heading', text: 'The self-attention idea', level: 2 },
      { type: 'para', html: 'For each token, ask: "which other tokens in the sequence are most relevant to me right now?" Then weight their representations accordingly.' },
      { type: 'image', alt: 'attention scores', svg:
`<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:0 auto;">
  <rect width="560" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="80" y="30" text-anchor="middle" font-weight="bold">"The"</text>
    <text x="180" y="30" text-anchor="middle" font-weight="bold">"cat"</text>
    <text x="280" y="30" text-anchor="middle" font-weight="bold">"sat"</text>
    <text x="380" y="30" text-anchor="middle" font-weight="bold">"on"</text>
    <text x="480" y="30" text-anchor="middle" font-weight="bold">"mat"</text>

    <text x="40" y="180" text-anchor="middle" font-weight="bold" fill="#0e88c8">"sat"</text>
    <text x="40" y="200" text-anchor="middle" font-size="11" fill="#555">attends to:</text>

    <line x1="60" y1="170" x2="80" y2="50" stroke="#ddd" stroke-width="1"/>
    <line x1="60" y1="170" x2="180" y2="50" stroke="#7c4dff" stroke-width="4"/>
    <line x1="60" y1="170" x2="280" y2="50" stroke="#7c4dff" stroke-width="2"/>
    <line x1="60" y1="170" x2="380" y2="50" stroke="#ddd" stroke-width="1"/>
    <line x1="60" y1="170" x2="480" y2="50" stroke="#7c4dff" stroke-width="3"/>
    <text x="80" y="100" font-size="11" fill="#555">.05</text>
    <text x="180" y="100" font-size="11" fill="#7c4dff" font-weight="bold">.55</text>
    <text x="280" y="100" font-size="11" fill="#7c4dff">.10</text>
    <text x="380" y="100" font-size="11" fill="#555">.05</text>
    <text x="480" y="100" font-size="11" fill="#7c4dff">.25</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Q, K, V', level: 2 },
      { type: 'para', html: 'Each token produces three vectors: <strong>Query</strong> (what I\'m looking for), <strong>Key</strong> (what I offer), <strong>Value</strong> (what I deliver).' },
      { type: 'code', lang: 'python', code:
`<span class="com"># Each created by a learned linear projection of the input</span>
Q = X · W_Q
K = X · W_K
V = X · W_V

<span class="com"># Attention output</span>
A = softmax(Q · Kᵀ / √dₖ) · V` },
      { type: 'heading', text: 'The √dₖ scaling', level: 2 },
      { type: 'para', html: 'Dividing by √dₖ keeps the dot products from growing too large in high dimensions, which would push softmax into saturation.' },
      { type: 'heading', text: 'Multi-head attention', level: 2 },
      { type: 'para', html: 'Run attention multiple times in parallel (heads), each with different learned projections. Concatenate and project. Lets the model attend to different relationships at once (syntax, coreference, etc.).' },
      { type: 'heading', text: 'A Transformer block', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">class</span> <span class="ty">TransformerBlock</span>:
    <span class="kw">def</span> <span class="fn">forward</span>(<span class="kw">self</span>, x):
        x = x + <span class="fn">multi_head_attention</span>(<span class="fn">norm</span>(x))
        x = x + <span class="fn">feed_forward</span>(<span class="fn">norm</span>(x))
        <span class="kw">return</span> x` },
      { type: 'heading', text: 'Positional encoding', level: 2 },
      { type: 'para', html: 'Self-attention is order-blind. We inject position information via <strong>positional encodings</strong> (sinusoids, or learned vectors) added to token embeddings.' },
      { type: 'heading', text: 'Why Transformers won', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Parallelism</strong> — all tokens processed at once (RNNs are sequential).',
        '<strong>Long-range memory</strong> — every token can attend to every other.',
        '<strong>Scaling laws</strong> — performance keeps improving with size & data.',
        '<strong>Same architecture</strong> works for text, images, audio, code, proteins.'
      ]},
      { type: 'callout', kind: 'tip', html: 'LLMs like GPT are decoder-only Transformers trained to predict the next token. That single objective produces everything from poetry to code.' }
    ]},

    /* ============== CH 21 ============== */
    { id: 'ml-c21', title: 'Loss Functions', icon: '📉', sections: [
      { type: 'heading', text: 'What are you optimizing?', level: 1 },
      { type: 'para', html: 'A <strong>loss function</strong> turns "how wrong are we?" into a single number the optimiser can minimise. Choose it carefully — the wrong loss leads to the wrong model.' },
      { type: 'heading', text: 'Mean Squared Error (MSE)', level: 2 },
      { type: 'code', lang: 'python', code:
`MSE = (<span class="num">1</span>/n) · Σ (y - ŷ)²

<span class="com"># Use for regression.</span>
<span class="com"># Penalises big errors quadratically.</span>
<span class="com"># Sensitive to outliers.</span>` },
      { type: 'heading', text: 'Mean Absolute Error (MAE)', level: 2 },
      { type: 'code', lang: 'python', code:
`MAE = (<span class="num">1</span>/n) · Σ |y - ŷ|

<span class="com"># Robust to outliers (linear penalty).</span>
<span class="com"># Less smooth — harder to optimize.</span>` },
      { type: 'heading', text: 'Huber loss', level: 2 },
      { type: 'para', html: 'A smooth blend of MSE and MAE — quadratic near zero, linear past a threshold. Robust <em>and</em> differentiable everywhere.' },
      { type: 'heading', text: 'Binary cross-entropy', level: 2 },
      { type: 'code', lang: 'python', code:
`BCE = -[ y·log(p) + (<span class="num">1</span>-y)·log(<span class="num">1</span>-p) ]

<span class="com"># Use for binary classification with sigmoid output.</span>` },
      { type: 'heading', text: 'Categorical cross-entropy', level: 2 },
      { type: 'code', lang: 'python', code:
`CE = -Σ yᵢ · log(pᵢ)

<span class="com"># For multiclass classifiers with softmax output.</span>
<span class="com"># y is one-hot, p is predicted distribution.</span>` },
      { type: 'callout', kind: 'tip', html: 'For imbalanced classification, try <strong>focal loss</strong> — it down-weights easy examples and focuses on the hard ones.' }
    ]},

    /* ============== CH 22 ============== */
    { id: 'ml-c22', title: 'Evaluation — Classification', icon: '🎯', sections: [
      { type: 'heading', text: 'Accuracy is not enough', level: 1 },
      { type: 'para', html: 'If 99% of your data is class A, a model that predicts "A" for everything gets 99% accuracy — and is useless. We need <strong>better metrics</strong>.' },
      { type: 'heading', text: 'Confusion matrix', level: 2 },
      { type: 'image', alt: 'confusion matrix', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="240" y="25" text-anchor="middle" font-weight="bold">Predicted</text>
    <text x="170" y="55" text-anchor="middle" font-weight="bold" fill="#0e88c8">Positive</text>
    <text x="330" y="55" text-anchor="middle" font-weight="bold" fill="#cc1111">Negative</text>

    <text x="60" y="130" text-anchor="middle" font-weight="bold" fill="#0e88c8">Actual+</text>
    <text x="60" y="200" text-anchor="middle" font-weight="bold" fill="#cc1111">Actual−</text>

    <rect x="100" y="70" width="140" height="80" fill="#dcedc8" stroke="#58cc02" stroke-width="2"/>
    <text x="170" y="105" text-anchor="middle" font-weight="bold">TP</text>
    <text x="170" y="130" text-anchor="middle" font-size="11">true positive</text>

    <rect x="240" y="70" width="140" height="80" fill="#ffebee" stroke="#ff4b4b" stroke-width="2"/>
    <text x="310" y="105" text-anchor="middle" font-weight="bold">FN</text>
    <text x="310" y="130" text-anchor="middle" font-size="11">false negative</text>

    <rect x="100" y="150" width="140" height="80" fill="#ffebee" stroke="#ff4b4b" stroke-width="2"/>
    <text x="170" y="185" text-anchor="middle" font-weight="bold">FP</text>
    <text x="170" y="210" text-anchor="middle" font-size="11">false positive</text>

    <rect x="240" y="150" width="140" height="80" fill="#dcedc8" stroke="#58cc02" stroke-width="2"/>
    <text x="310" y="185" text-anchor="middle" font-weight="bold">TN</text>
    <text x="310" y="210" text-anchor="middle" font-size="11">true negative</text>
  </g>
</svg>` },
      { type: 'heading', text: 'Precision & recall', level: 2 },
      { type: 'code', lang: 'python', code:
`Precision = TP / (TP + FP)
<span class="com"># "Of all the positives I predicted, how many were right?"</span>

Recall    = TP / (TP + FN)
<span class="com"># "Of all the actual positives, how many did I catch?"</span>` },
      { type: 'callout', kind: 'info', html: '<strong>Spam filter</strong> wants high precision (don\'t kill real mail). <strong>Cancer screening</strong> wants high recall (don\'t miss a tumor).' },
      { type: 'heading', text: 'F1 score', level: 2 },
      { type: 'code', lang: 'python', code:
`F1 = <span class="num">2</span> · (precision · recall) / (precision + recall)

<span class="com"># Harmonic mean — punishes imbalance.</span>
<span class="com"># Both must be high for F1 to be high.</span>` },
      { type: 'heading', text: 'ROC curve & AUC', level: 2 },
      { type: 'image', alt: 'ROC curve', svg:
`<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="280" fill="#fafafa" rx="8"/>
  <line x1="60" y1="240" x2="440" y2="240" stroke="#666"/>
  <line x1="60" y1="240" x2="60" y2="40" stroke="#666"/>
  <text x="250" y="265" text-anchor="middle" font-family="Nunito" font-size="12">False Positive Rate</text>
  <text x="25" y="140" text-anchor="middle" font-family="Nunito" font-size="12" transform="rotate(-90,25,140)">True Positive Rate</text>

  <line x1="60" y1="240" x2="440" y2="40" stroke="#aaa" stroke-dasharray="4 4"/>
  <text x="220" y="160" font-family="Nunito" font-size="11" fill="#999">random</text>

  <path d="M60 240 Q90 70 200 60 Q330 55 440 50" stroke="#7c4dff" stroke-width="3" fill="none"/>
  <text x="280" y="100" font-family="Nunito" font-size="12" fill="#7c4dff" font-weight="bold">good model (AUC ≈ 0.9)</text>
</svg>` },
      { type: 'para', html: 'The <strong>ROC curve</strong> plots TPR vs FPR as you sweep the decision threshold. <strong>AUC</strong> (area under curve) summarises it: 0.5 = random, 1.0 = perfect.' },
      { type: 'heading', text: 'Precision-Recall curve', level: 2 },
      { type: 'para', html: 'When classes are very imbalanced, the PR curve is more informative than ROC.' },
      { type: 'heading', text: 'Multiclass metrics', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Macro F1</strong> — average F1 across classes (treats all equally).',
        '<strong>Weighted F1</strong> — weighted by class size.',
        '<strong>Top-K accuracy</strong> — correct class is in top K predictions.'
      ]},
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> (
    confusion_matrix, classification_report,
    roc_auc_score, precision_recall_curve)

<span class="fn">print</span>(<span class="fn">classification_report</span>(y_test, preds))
<span class="fn">print</span>(<span class="str">"AUC:"</span>, <span class="fn">roc_auc_score</span>(y_test, probs))` },
      { type: 'heading', text: 'Calibration', level: 2 },
      { type: 'para', html: 'A model predicting "80%" should be right 80% of the time. Many models (especially trees) are uncalibrated — fix with <strong>Platt scaling</strong> or <strong>isotonic regression</strong>.' },
      { type: 'callout', kind: 'tip', html: 'Pick metrics <em>before</em> training. It prevents the all-too-common "I\'ll find a metric where my model looks good" trap.' }
    ]},

    /* ============== CH 23 ============== */
    { id: 'ml-c23', title: 'Evaluation — Regression', icon: '📏', sections: [
      { type: 'heading', text: 'Measuring numeric predictions', level: 1 },
      { type: 'para', html: 'For regression we need metrics that quantify how close predicted numbers are to real ones.' },
      { type: 'heading', text: 'MSE & RMSE', level: 2 },
      { type: 'code', lang: 'python', code:
`MSE  = (<span class="num">1</span>/n) Σ (y - ŷ)²
RMSE = √MSE

<span class="com"># RMSE is in original units (dollars, kg, …)</span>
<span class="com"># Big errors dominate.</span>` },
      { type: 'heading', text: 'MAE', level: 2 },
      { type: 'code', lang: 'python', code:
`MAE = (<span class="num">1</span>/n) Σ |y - ŷ|

<span class="com"># Linear penalty, robust to outliers.</span>` },
      { type: 'heading', text: 'R² (coefficient of determination)', level: 2 },
      { type: 'code', lang: 'python', code:
`R² = <span class="num">1</span> - SS_res / SS_tot

<span class="com">#   = 1.0 → perfect</span>
<span class="com">#   = 0.0 → no better than predicting the mean</span>
<span class="com">#   < 0   → worse than predicting the mean</span>` },
      { type: 'callout', kind: 'info', html: 'A model can have high R² but still be useless if errors are systematic (consistently over- or underestimating in certain regions).' },
      { type: 'heading', text: 'MAPE', level: 2 },
      { type: 'code', lang: 'python', code:
`MAPE = (<span class="num">100</span>/n) Σ |y - ŷ| / |y|

<span class="com"># Percentage error. Intuitive but blows up near y = 0.</span>` },
      { type: 'heading', text: 'Residual plots', level: 2 },
      { type: 'para', html: 'Plot residuals (y − ŷ) vs predictions. If they look random — good. If there\'s structure (curve, fanning) — your model is missing something.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> mean_squared_error, r2_score

mse = <span class="fn">mean_squared_error</span>(y_test, preds)
r2  = <span class="fn">r2_score</span>(y_test, preds)
<span class="fn">print</span>(<span class="str">f"RMSE = {mse**0.5:.2f}, R² = {r2:.3f}"</span>)` }
    ]},

    /* ============== CH 24 ============== */
    { id: 'ml-c24', title: 'Overfitting & Bias-Variance', icon: '⚖️', sections: [
      { type: 'heading', text: 'The fundamental tradeoff', level: 1 },
      { type: 'para', html: 'Every model walks a tightrope between <strong>bias</strong> (too simple, misses patterns) and <strong>variance</strong> (too complex, memorises noise).' },
      { type: 'image', alt: 'underfit just right overfit', svg:
`<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <g transform="translate(20,20)">
      <text x="100" y="0" text-anchor="middle" font-weight="bold">Underfit</text>
      <rect x="0" y="10" width="200" height="180" fill="white" stroke="#ddd"/>
      <line x1="10" y1="170" x2="190" y2="50" stroke="#7c4dff" stroke-width="2"/>
      <g fill="#1cb0f6">
        <circle cx="30" cy="140" r="4"/><circle cx="60" cy="100" r="4"/><circle cx="80" cy="150" r="4"/>
        <circle cx="100" cy="80" r="4"/><circle cx="130" cy="120" r="4"/><circle cx="160" cy="60" r="4"/><circle cx="180" cy="100" r="4"/>
      </g>
      <text x="100" y="210" text-anchor="middle" font-size="10" fill="#ff4b4b">high bias</text>
    </g>
    <g transform="translate(230,20)">
      <text x="100" y="0" text-anchor="middle" font-weight="bold">Just right</text>
      <rect x="0" y="10" width="200" height="180" fill="white" stroke="#ddd"/>
      <path d="M10 170 Q60 80 100 120 Q140 60 190 100" stroke="#58cc02" stroke-width="2" fill="none"/>
      <g fill="#1cb0f6">
        <circle cx="30" cy="150" r="4"/><circle cx="60" cy="100" r="4"/><circle cx="80" cy="130" r="4"/>
        <circle cx="100" cy="120" r="4"/><circle cx="130" cy="80" r="4"/><circle cx="160" cy="80" r="4"/><circle cx="180" cy="110" r="4"/>
      </g>
      <text x="100" y="210" text-anchor="middle" font-size="10" fill="#3d9100">good fit</text>
    </g>
    <g transform="translate(440,20)">
      <text x="100" y="0" text-anchor="middle" font-weight="bold">Overfit</text>
      <rect x="0" y="10" width="200" height="180" fill="white" stroke="#ddd"/>
      <path d="M10 170 Q30 140 50 150 Q80 80 100 130 Q140 55 160 80 Q170 130 190 100" stroke="#ff4b4b" stroke-width="2" fill="none"/>
      <g fill="#1cb0f6">
        <circle cx="30" cy="150" r="4"/><circle cx="60" cy="100" r="4"/><circle cx="80" cy="130" r="4"/>
        <circle cx="100" cy="120" r="4"/><circle cx="130" cy="80" r="4"/><circle cx="160" cy="80" r="4"/><circle cx="180" cy="110" r="4"/>
      </g>
      <text x="100" y="210" text-anchor="middle" font-size="10" fill="#ff4b4b">high variance</text>
    </g>
  </g>
</svg>` },
      { type: 'heading', text: 'Bias', level: 2 },
      { type: 'para', html: 'Bias is error from over-simplification. A linear model on curvy data has high bias — no matter how much data you throw at it, it can\'t bend.' },
      { type: 'heading', text: 'Variance', level: 2 },
      { type: 'para', html: 'Variance is error from sensitivity to training data. A deep tree memorises the exact training noise — train it on a different sample and it looks completely different.' },
      { type: 'heading', text: 'How to spot overfitting', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Training accuracy ≫ test accuracy.',
        'Loss curve: train keeps falling, validation flattens or rises.',
        'Tiny errors on train, big errors on new data.'
      ]},
      { type: 'heading', text: 'How to spot underfitting', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Both train and test accuracy are low.',
        'Loss plateaus quickly and stays high.',
        'Model doesn\'t even fit the training data.'
      ]},
      { type: 'heading', text: 'Fixing overfitting', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Get more data.',
        'Simplify the model (fewer parameters).',
        'Regularize (L1/L2, dropout).',
        'Early stopping.',
        'Data augmentation.',
        'Cross-validation to tune hyperparameters.'
      ]},
      { type: 'heading', text: 'Fixing underfitting', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Use a more flexible model.',
        'Add more features / better features.',
        'Reduce regularization.',
        'Train longer.'
      ]},
      { type: 'callout', kind: 'tip', html: 'The model that wins on the leaderboard is rarely the most complex one. It\'s the one with the best <em>bias-variance balance</em> for that data.' },
      { type: 'heading', text: 'The double descent surprise', level: 2 },
      { type: 'para', html: 'In very over-parameterised models (modern deep nets), test error can <em>decrease again</em> past the interpolation point. The classical U-shaped curve is incomplete.' }
    ]},

    /* ============== CH 25 ============== */
    { id: 'ml-c25', title: 'Regularization', icon: '🛡️', sections: [
      { type: 'heading', text: 'Keeping models humble', level: 1 },
      { type: 'para', html: '<strong>Regularization</strong> adds a penalty to the loss for being too complex — encouraging simpler, more generalisable models.' },
      { type: 'heading', text: 'L2 (Ridge)', level: 2 },
      { type: 'code', lang: 'python', code:
`L = MSE + λ · Σ wᵢ²

<span class="com"># Shrinks weights toward 0 (but rarely exactly 0)</span>
<span class="com"># Handles correlated features gracefully</span>` },
      { type: 'heading', text: 'L1 (Lasso)', level: 2 },
      { type: 'code', lang: 'python', code:
`L = MSE + λ · Σ |wᵢ|

<span class="com"># Drives some weights to EXACTLY 0 → automatic feature selection</span>` },
      { type: 'heading', text: 'Elastic Net', level: 2 },
      { type: 'para', html: 'Blend of L1 + L2. Combines feature selection (L1) with stability (L2).' },
      { type: 'heading', text: 'λ — the strength dial', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>λ = 0</code> → no regularization, same as plain regression.',
        '<code>λ → ∞</code> → all weights forced to 0.',
        'Tune with cross-validation.'
      ]},
      { type: 'heading', text: 'Dropout (for neural nets)', level: 2 },
      { type: 'para', html: 'At each training step, randomly zero out a fraction of activations. The network learns redundant, robust representations.' },
      { type: 'code', lang: 'python', code:
`nn.<span class="ty">Dropout</span>(p=<span class="num">0.5</span>)

<span class="com"># Active only during training.</span>
<span class="com"># At test time, dropout is OFF.</span>` },
      { type: 'heading', text: 'Early stopping', level: 2 },
      { type: 'para', html: 'Monitor validation loss. Stop training when it stops improving — before the model starts memorising.' },
      { type: 'callout', kind: 'tip', html: 'Use early stopping with patience: stop only after N epochs of no improvement, not at the first wiggle.' },
      { type: 'heading', text: 'Data augmentation', level: 2 },
      { type: 'para', html: 'For images: random crops, flips, rotations, color jitter. For text: synonym replacement, back-translation. The model effectively sees "more" data.' }
    ]},

    /* ============== CH 26 ============== */
    { id: 'ml-c26', title: 'Cross-Validation', icon: '🔂', sections: [
      { type: 'heading', text: 'Getting a reliable score', level: 1 },
      { type: 'para', html: 'A single train/test split is noisy. <strong>k-fold cross-validation</strong> reuses the data to get a more stable estimate of model performance.' },
      { type: 'image', alt: '5-fold cross validation', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <text x="300" y="22" text-anchor="middle" font-weight="bold">5-fold cross-validation</text>
    <g transform="translate(40,40)">
      <text x="-10" y="20" text-anchor="end">Round 1</text>
      <rect x="0" y="0" width="100" height="30" fill="#ff4b4b"/><text x="50" y="20" text-anchor="middle" fill="white">test</text>
      <rect x="100" y="0" width="400" height="30" fill="#58cc02"/><text x="300" y="20" text-anchor="middle" fill="white">train</text>
    </g>
    <g transform="translate(40,80)">
      <text x="-10" y="20" text-anchor="end">Round 2</text>
      <rect x="0" y="0" width="100" height="30" fill="#58cc02"/>
      <rect x="100" y="0" width="100" height="30" fill="#ff4b4b"/><text x="150" y="20" text-anchor="middle" fill="white">test</text>
      <rect x="200" y="0" width="300" height="30" fill="#58cc02"/>
    </g>
    <g transform="translate(40,120)">
      <text x="-10" y="20" text-anchor="end">Round 3</text>
      <rect x="0" y="0" width="200" height="30" fill="#58cc02"/>
      <rect x="200" y="0" width="100" height="30" fill="#ff4b4b"/><text x="250" y="20" text-anchor="middle" fill="white">test</text>
      <rect x="300" y="0" width="200" height="30" fill="#58cc02"/>
    </g>
    <g transform="translate(40,160)">
      <text x="-10" y="20" text-anchor="end">Round 4</text>
      <rect x="0" y="0" width="300" height="30" fill="#58cc02"/>
      <rect x="300" y="0" width="100" height="30" fill="#ff4b4b"/><text x="350" y="20" text-anchor="middle" fill="white">test</text>
      <rect x="400" y="0" width="100" height="30" fill="#58cc02"/>
    </g>
    <g transform="translate(40,200)">
      <text x="-10" y="20" text-anchor="end">Round 5</text>
      <rect x="0" y="0" width="400" height="30" fill="#58cc02"/>
      <rect x="400" y="0" width="100" height="30" fill="#ff4b4b"/><text x="450" y="20" text-anchor="middle" fill="white">test</text>
    </g>
  </g>
</svg>` },
      { type: 'heading', text: 'k-fold CV', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="num">1</span>. Split data into k equal folds.
<span class="num">2</span>. For i = 1…k:
     train on all but fold i, evaluate on fold i.
<span class="num">3</span>. Average the k scores → final estimate.` },
      { type: 'callout', kind: 'info', html: 'Common choices: <code>k = 5</code> or <code>k = 10</code>. Higher k → less bias but more compute.' },
      { type: 'heading', text: 'Stratified k-fold', level: 2 },
      { type: 'para', html: 'For classification, keep the class proportion the same in every fold. Crucial for imbalanced data.' },
      { type: 'heading', text: 'Leave-one-out CV', level: 2 },
      { type: 'para', html: 'Extreme case: k = N. Each fold is one sample. Useful for tiny datasets, brutally slow for big ones.' },
      { type: 'heading', text: 'Time series CV', level: 2 },
      { type: 'para', html: 'For time series, you must <strong>never</strong> train on the future. Use forward-chaining or expanding-window splits.' },
      { type: 'heading', text: 'In code', level: 2 },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> cross_val_score

scores = <span class="fn">cross_val_score</span>(model, X, y, cv=<span class="num">5</span>, scoring=<span class="str">"f1"</span>)
<span class="fn">print</span>(<span class="str">f"{scores.mean():.3f} ± {scores.std():.3f}"</span>)` }
    ]},

    /* ============== CH 27 ============== */
    { id: 'ml-c27', title: 'Ensemble Methods', icon: '🌲', sections: [
      { type: 'heading', text: 'Wisdom of the crowd', level: 1 },
      { type: 'para', html: '<strong>Ensembles</strong> combine many weak models into a single strong one. They consistently top Kaggle leaderboards.' },
      { type: 'image', alt: 'bagging vs boosting', svg:
`<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:640px;display:block;margin:0 auto;">
  <rect width="640" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <text x="160" y="25" text-anchor="middle" font-weight="bold">Bagging (parallel)</text>
    <g fill="#1cb0f6">
      <rect x="40" y="60" width="80" height="40" rx="6"/><text x="80" y="85" text-anchor="middle" fill="white">tree 1</text>
      <rect x="40" y="110" width="80" height="40" rx="6"/><text x="80" y="135" text-anchor="middle" fill="white">tree 2</text>
      <rect x="40" y="160" width="80" height="40" rx="6"/><text x="80" y="185" text-anchor="middle" fill="white">tree 3</text>
    </g>
    <rect x="180" y="100" width="100" height="50" rx="8" fill="#7c4dff"/>
    <text x="230" y="130" text-anchor="middle" fill="white" font-weight="bold">vote / avg</text>
    <line x1="120" y1="80" x2="180" y2="120" stroke="#666"/>
    <line x1="120" y1="130" x2="180" y2="125" stroke="#666"/>
    <line x1="120" y1="180" x2="180" y2="130" stroke="#666"/>

    <text x="480" y="25" text-anchor="middle" font-weight="bold">Boosting (sequential)</text>
    <g fill="#58cc02">
      <rect x="340" y="60" width="80" height="40" rx="6"/><text x="380" y="85" text-anchor="middle" fill="white">model 1</text>
      <rect x="460" y="60" width="80" height="40" rx="6"/><text x="500" y="85" text-anchor="middle" fill="white">model 2</text>
      <rect x="580" y="60" width="40" height="40" rx="6"/><text x="600" y="85" text-anchor="middle" fill="white" font-size="11">…</text>
    </g>
    <line x1="420" y1="80" x2="460" y2="80" stroke="#666" stroke-width="2" marker-end="url(#a4)"/>
    <line x1="540" y1="80" x2="580" y2="80" stroke="#666" stroke-width="2" marker-end="url(#a4)"/>
    <text x="380" y="140" text-anchor="middle" font-size="11" fill="#555">fit residuals</text>
    <text x="500" y="140" text-anchor="middle" font-size="11" fill="#555">fit residuals</text>
  </g>
  <defs><marker id="a4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#666"/></marker></defs>
</svg>` },
      { type: 'heading', text: 'Bagging', level: 2 },
      { type: 'para', html: 'Train many models in parallel on <em>bootstrap samples</em> (random subsets with replacement). Average their predictions. Reduces variance.' },
      { type: 'heading', text: 'Random Forest', level: 2 },
      { type: 'para', html: 'Bagging applied to decision trees, plus an extra trick: at each split, consider only a random subset of features. Decorrelates trees and crushes overfitting.' },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> <span class="ty">RandomForestClassifier</span>

clf = <span class="ty">RandomForestClassifier</span>(
    n_estimators=<span class="num">200</span>,
    max_depth=<span class="kw">None</span>,
    n_jobs=-<span class="num">1</span>,
)
clf.<span class="fn">fit</span>(X_train, y_train)` },
      { type: 'heading', text: 'Boosting', level: 2 },
      { type: 'para', html: 'Train models <em>sequentially</em>. Each new model focuses on the mistakes of the previous ones. Reduces bias.' },
      { type: 'heading', text: 'AdaBoost', level: 2 },
      { type: 'para', html: 'Each weak learner gets a weight proportional to its accuracy. Misclassified samples get higher weight in the next round.' },
      { type: 'heading', text: 'Gradient Boosting', level: 2 },
      { type: 'para', html: 'Each new tree fits the <strong>residuals</strong> (gradients of the loss) of the running ensemble. XGBoost, LightGBM, and CatBoost are highly optimised versions.' },
      { type: 'code', lang: 'python', code:
`<span class="kw">from</span> xgboost <span class="kw">import</span> <span class="ty">XGBClassifier</span>

clf = <span class="ty">XGBClassifier</span>(
    n_estimators=<span class="num">500</span>,
    learning_rate=<span class="num">0.05</span>,
    max_depth=<span class="num">6</span>,
)
clf.<span class="fn">fit</span>(X_train, y_train)` },
      { type: 'callout', kind: 'tip', html: 'On structured/tabular data, <strong>gradient boosting</strong> (XGBoost / LightGBM) usually beats neural nets. Always try it.' },
      { type: 'heading', text: 'Stacking', level: 2 },
      { type: 'para', html: 'Train several different models, then train a <strong>meta-model</strong> that learns to combine their predictions. Used in many Kaggle winners.' },
      { type: 'heading', text: 'Bagging vs boosting — when?', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Bagging</strong> — high-variance base learner (deep trees). Parallelisable, robust.',
        '<strong>Boosting</strong> — high-bias base learner (stumps). Sequential, more accurate but sensitive to noise.'
      ]}
    ]},

    /* ============== CH 28 ============== */
    { id: 'ml-c28', title: 'Reinforcement Learning', icon: '🎮', sections: [
      { type: 'heading', text: 'Learning by trial and error', level: 1 },
      { type: 'para', html: '<strong>Reinforcement learning</strong> is the third paradigm: an <em>agent</em> interacts with an <em>environment</em>, takes <em>actions</em>, and learns to maximise <em>rewards</em>.' },
      { type: 'image', alt: 'agent environment loop', svg:
`<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
  <rect width="520" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="13">
    <rect x="60" y="80" width="140" height="80" rx="10" fill="#7c4dff"/>
    <text x="130" y="120" text-anchor="middle" fill="white" font-weight="bold">Agent</text>

    <rect x="320" y="80" width="140" height="80" rx="10" fill="#1cb0f6"/>
    <text x="390" y="120" text-anchor="middle" fill="white" font-weight="bold">Environment</text>

    <path d="M200 100 C 250 100 270 80 320 90" stroke="#666" stroke-width="2" fill="none" marker-end="url(#a5)"/>
    <text x="260" y="75" text-anchor="middle" font-size="11" fill="#555">action</text>

    <path d="M320 150 C 270 160 250 175 200 150" stroke="#666" stroke-width="2" fill="none" marker-end="url(#a5)"/>
    <text x="260" y="190" text-anchor="middle" font-size="11" fill="#555">state, reward</text>
  </g>
  <defs><marker id="a5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#666"/></marker></defs>
</svg>` },
      { type: 'heading', text: 'Core vocabulary', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>State (s)</strong> — what the agent observes right now.',
        '<strong>Action (a)</strong> — what the agent can do.',
        '<strong>Reward (r)</strong> — scalar feedback after each action.',
        '<strong>Policy (π)</strong> — a mapping from states to actions.',
        '<strong>Return (G)</strong> — total (discounted) reward from now on.',
        '<strong>Value (V)</strong> — expected return from a state.'
      ]},
      { type: 'heading', text: 'The Bellman equation', level: 2 },
      { type: 'code', lang: 'python', code:
`V(s) = E[ r + γ · V(s\\') ]

<span class="com"># Expected reward now + discounted value of the next state.</span>
<span class="com"># γ ∈ [0, 1) — how much we care about the future.</span>` },
      { type: 'heading', text: 'Exploration vs exploitation', level: 2 },
      { type: 'para', html: 'Do you order the dish you know is great (exploit), or try the new one that might be even better (explore)? Every RL algorithm wrestles with this tradeoff.' },
      { type: 'code', lang: 'python', code:
`<span class="com"># ε-greedy strategy</span>
<span class="kw">if</span> <span class="fn">random</span>() &lt; ε:
    a = <span class="fn">random_action</span>()       <span class="com"># explore</span>
<span class="kw">else</span>:
    a = <span class="fn">argmax</span>(Q[s])         <span class="com"># exploit</span>` },
      { type: 'heading', text: 'Multi-armed bandit', level: 2 },
      { type: 'para', html: 'The simplest RL problem: K slot machines, each with unknown payout. Which do you pull? Algorithms: ε-greedy, UCB, Thompson sampling. (Powers A/B testing, ad serving, news ranking.)' },
      { type: 'heading', text: 'Q-learning', level: 2 },
      { type: 'code', lang: 'python', code:
`Q(s, a) ← Q(s, a) + α · [ r + γ · <span class="fn">max</span> Q(s\\', a\\') - Q(s, a) ]

<span class="com"># Learn the value of every (state, action) pair.</span>
<span class="com"># Greedy w.r.t. Q gives the optimal policy.</span>` },
      { type: 'heading', text: 'Deep RL', level: 2 },
      { type: 'para', html: 'For huge state spaces (Atari pixels, Go boards) we approximate Q or π with a neural network. DQN, PPO, A3C, AlphaGo, and ChatGPT\'s RLHF all live here.' },
      { type: 'callout', kind: 'tip', html: 'RL is powerful but data-hungry and unstable. For most business problems, supervised learning is a faster, safer first attempt.' }
    ]}

  ]
});

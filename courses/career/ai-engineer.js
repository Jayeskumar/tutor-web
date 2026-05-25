PUSH({
  id: 'ai-engineer',
  name: 'AI Engineer',
  icon: '🦾',
  color: '#00bcd4',
  description: 'Career path: become an AI Engineer — from ML foundations to LLMs to production.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'aie-u1',
      name: 'Unit 1 · The AI Engineer Role',
      description: 'What they do, daily work, comparing roles',
      lessons: [
        {
          id: 'aie-u1-l1', name: 'What is an AI Engineer?', icon: '🎯', xp: 15,
          challenges: [
            { type: 'concept', title: 'A new breed of engineer', content: `<p>An <strong>AI Engineer</strong> sits at the intersection of software engineering and machine learning. Their job is to <em>ship</em> AI-powered products — not just train models, but make them work in production.</p>
<div class="code-block"><span class="com">Skillset overlap:</span>
- Software engineering (APIs, systems)
- Machine learning (models, training)
- Data engineering (pipelines)
- Domain knowledge (NLP, CV, RecSys, etc.)
- Product thinking (what problem are we solving?)</div>
<p>The role exploded with LLMs — companies need engineers who can integrate AI capabilities into real software.</p>` },
            { type: 'multiple-choice', prompt: 'Which best describes an AI Engineer\'s primary focus?',
              options: [{text:'Inventing new model architectures', code:false},{text:'Shipping AI-powered products to production', code:false},{text:'Writing research papers', code:false},{text:'Pure data cleaning', code:false}],
              correct: 1, explanation: 'AI Engineers are builders — they take models and turn them into working products.' },
            { type: 'true-false', statement: 'AI Engineers usually train models from scratch on huge datasets.', correct: false, explanation: 'More often they fine-tune or call existing models via APIs. From-scratch training is mostly research/large labs.' },
            { type: 'match-pairs', prompt: 'Match the role to its primary output.', leftLabel: 'Role', rightLabel: 'Output',
              pairs: [{left:'Data Scientist', right:'Reports & insights'},{left:'ML Researcher', right:'Papers & novel models'},{left:'AI Engineer', right:'Production AI products'},{left:'Data Engineer', right:'Data pipelines'}] }
          ]
        },
        {
          id: 'aie-u1-l2', name: 'AI vs ML vs DS vs MLE', icon: '🧭', xp: 15,
          challenges: [
            { type: 'concept', title: 'Sorting out the alphabet soup', content: `<p>Job titles overlap a lot. Here\'s a rough map:</p>
<div class="code-block">Data Scientist (DS)    — analyze data, build models, often EDA-heavy
ML Engineer (MLE)      — productionize ML; serving, scaling, MLOps
AI Engineer (AIE)      — broader: builds AI features (often LLM-powered)
ML Researcher          — invents new methods (PhD-leaning)
Data Engineer (DE)     — pipelines, data quality, storage
AI Product Engineer    — AIE with strong product/UX focus</div>
<p>Reality: at most companies these overlap heavily, and you'll wear multiple hats.</p>` },
            { type: 'multiple-choice', prompt: 'Who is most likely to spend their day building data pipelines (no models)?',
              options: [{text:'AI Engineer', code:false},{text:'Data Engineer', code:false},{text:'ML Researcher', code:false},{text:'AI Product Engineer', code:false}],
              correct: 1, explanation: 'DE = data pipelines, storage, quality. Models are downstream.' },
            { type: 'multiple-choice', prompt: 'Who is most likely to "fine-tune an LLM for a custom support chatbot"?',
              options: [{text:'Pure researcher', code:false},{text:'AI Engineer', code:false},{text:'Data analyst', code:false},{text:'DBA', code:false}],
              correct: 1, explanation: 'Productionizing an LLM for a specific use case is core AI Engineer work.' },
            { type: 'true-false', statement: 'AI Engineer roles often require strong software engineering skills (APIs, testing, CI/CD).', correct: true, explanation: 'They ship code — not just notebooks.' },
            { type: 'type-answer', prompt: 'The role focused on serving/scaling existing models in production is called ML _____.',
              accept: ['engineer','engineering'], explanation: 'ML Engineer (MLE).' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 ============== */
    {
      id: 'aie-u2',
      name: 'Unit 2 · Python & Tooling',
      description: 'NumPy, pandas, notebooks',
      lessons: [
        {
          id: 'aie-u2-l1', name: 'NumPy essentials', icon: '🔢', xp: 20,
          challenges: [
            { type: 'concept', title: 'The foundation of AI Python', content: `<p><strong>NumPy</strong> gives you fast n-dimensional arrays. Almost every ML library (PyTorch, TensorFlow, scikit-learn) builds on it or mimics it.</p>
<div class="code-block"><span class="kw">import</span> numpy <span class="kw">as</span> np

x = np.<span class="fn">array</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])
y = np.<span class="fn">array</span>([[<span class="num">1</span>,<span class="num">2</span>], [<span class="num">3</span>,<span class="num">4</span>]])
x.shape         <span class="com"># (3,)</span>
y.shape         <span class="com"># (2, 2)</span>
x.mean()        <span class="com"># 2.0</span>
y @ y           <span class="com"># matrix multiply</span></div>` },
            { type: 'multiple-choice', prompt: 'What does <code>np.array([1,2,3]).shape</code> return?',
              options: [{text:'(3,)', code:true},{text:'(1,3)', code:true},{text:'3', code:true},{text:'(3,1)', code:true}],
              correct: 0, explanation: 'For a 1D array, shape is a 1-tuple (3,) — the trailing comma marks the tuple.' },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `<span class="kw">import</span> numpy <span class="kw">as</span> np
a = np.<span class="fn">arange</span>(<span class="num">6</span>).<span class="fn">reshape</span>(<span class="num">2</span>, <span class="num">3</span>)
<span class="fn">print</span>(a.sum(axis=<span class="num">1</span>))`,
              options: ['[3 12]','[3 5 7]','[1 5 9]','[0 6]'], correct: 0, explanation: 'arange(6) = [0,1,2,3,4,5], reshape(2,3) = [[0,1,2],[3,4,5]]. sum along axis 1 (rows): [0+1+2, 3+4+5] = [3, 12].' },
            { type: 'fill-blank', prompt: 'Element-wise multiplication of two NumPy arrays:',
              codeLines: [{html:'a <span class="fn">_BLANK_</span> b   <span class="com"># element-wise multiply</span>'}],
              tokens: ['*','@','dot','+'], correctAnswer: '*', explanation: '<code>*</code> is element-wise; <code>@</code> or <code>.dot()</code> is matrix multiplication.' },
            { type: 'true-false', statement: 'NumPy arrays are typed (all elements share the same dtype).', correct: true, explanation: 'This is why NumPy is fast — typed contiguous memory.' }
          ]
        },
        {
          id: 'aie-u2-l2', name: 'pandas for data', icon: '🐼', xp: 20,
          challenges: [
            { type: 'concept', title: 'The Excel of Python', content: `<p><strong>pandas</strong> gives you DataFrames — labeled, indexed, fast tables.</p>
<div class="code-block"><span class="kw">import</span> pandas <span class="kw">as</span> pd

df = pd.<span class="fn">read_csv</span>(<span class="str">"data.csv"</span>)
df.<span class="fn">head</span>()                 <span class="com"># first 5 rows</span>
df.<span class="fn">describe</span>()             <span class="com"># stats per column</span>
df[<span class="str">"age"</span>].<span class="fn">mean</span>()         <span class="com"># mean of column</span>
df[df[<span class="str">"age"</span>] > <span class="num">18</span>]      <span class="com"># filter rows</span>
df.<span class="fn">groupby</span>(<span class="str">"city"</span>).<span class="fn">size</span>()  <span class="com"># counts per city</span></div>` },
            { type: 'multiple-choice', prompt: 'Which method gives summary statistics for numeric columns?',
              options: [{text:'.summary()', code:true},{text:'.describe()', code:true},{text:'.stats()', code:true},{text:'.info()', code:true}],
              correct: 1, explanation: '.describe() shows mean, std, min, quartiles, max.' },
            { type: 'multiple-choice', prompt: 'How do you filter rows where column "age" > 18?',
              options: [{text:'df.age > 18', code:true},{text:'df[df.age > 18]', code:true},{text:'df.filter(age > 18)', code:true},{text:'df.where(age > 18)', code:true}],
              correct: 1, explanation: 'Boolean masking with bracket indexing: df[mask].' },
            { type: 'true-false', statement: 'pandas can read CSVs, Excel, JSON, parquet, SQL — many sources.', correct: true, explanation: 'It supports many formats via read_xxx functions.' },
            { type: 'fill-blank', prompt: 'Group by city and count rows:',
              codeLines: [{html:'df.<span class="fn">groupby</span>(<span class="str">"city"</span>).<span class="fn">_BLANK_</span>()'}],
              tokens: ['size','count','sum','agg'], correctAnswer: 'size', explanation: 'size() counts rows per group; count() counts non-null per column.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Math ============== */
    {
      id: 'aie-u3',
      name: 'Unit 3 · Math Refresher',
      description: 'Linear algebra, calc, probability — just enough',
      lessons: [
        {
          id: 'aie-u3-l1', name: 'Linear algebra you need', icon: '➗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Vectors & matrices', content: `<p>Vectors store features. Matrices store weights. Tensors store everything.</p>
<div class="code-block">Vector: 1D    [3, 1, 4]                    shape (3,)
Matrix: 2D    [[1,2], [3,4]]                shape (2, 2)
Tensor: nD    images = (batch, H, W, C)     shape (32, 224, 224, 3)</div>
<p>Most ML ops are <strong>matrix multiplications</strong> at scale.</p>` },
            { type: 'multiple-choice', prompt: 'A 2D NumPy array of shape (32, 224, 224, 3) typically represents:',
              options: [{text:'A single image', code:false},{text:'A batch of 32 images, 224×224, 3 color channels', code:false},{text:'Audio waveforms', code:false},{text:'A spreadsheet', code:false}],
              correct: 1, explanation: 'Common image batch tensor: (batch, height, width, channels).' },
            { type: 'multiple-choice', prompt: 'Matrix multiply: A is (3×4), B is (4×2). Result shape?',
              options: [{text:'(3, 4)', code:false},{text:'(3, 2)', code:false},{text:'(4, 2)', code:false},{text:'Cannot multiply', code:false}],
              correct: 1, explanation: '(m×k) @ (k×n) = (m×n).' },
            { type: 'true-false', statement: 'The dot product of two vectors is a scalar.', correct: true, explanation: 'Σ aᵢ·bᵢ — a single number.' },
            { type: 'output-predict', prompt: 'Dot product of [1,2,3] and [4,5,6]?',
              code: `<span class="com"># 1·4 + 2·5 + 3·6</span>`,
              options: ['12','24','32','42'], correct: 2, explanation: '4 + 10 + 18 = 32.' }
          ]
        },
        {
          id: 'aie-u3-l2', name: 'Probability essentials', icon: '🎲', xp: 20,
          challenges: [
            { type: 'concept', title: 'Bayes, expectations, distributions', content: `<p>Three concepts show up everywhere in ML:</p>
<div class="code-block">P(A | B) = P(A and B) / P(B)              <span class="com"># conditional</span>
Bayes:  P(A|B) = P(B|A)·P(A) / P(B)
E[X]   = sum of (x · P(x))                <span class="com"># expectation</span></div>
<p>Cross-entropy loss = -log(probability of correct class). Maximum likelihood = pick params that make the data most likely.</p>` },
            { type: 'multiple-choice', prompt: 'In Bayes\' theorem, P(A|B) is called:',
              options: [{text:'The prior', code:false},{text:'The posterior', code:false},{text:'The likelihood', code:false},{text:'The evidence', code:false}],
              correct: 1, explanation: 'P(A|B) is the posterior — updated belief about A after seeing B.' },
            { type: 'true-false', statement: 'Cross-entropy loss in classification is just the negative log of the predicted probability for the true class.', correct: true, explanation: 'For one example: -log(p_true).' },
            { type: 'multiple-choice', prompt: 'For a fair die, E[X] (expected value of one roll)?',
              options: [{text:'3.0', code:false},{text:'3.5', code:false},{text:'4.0', code:false},{text:'6.0', code:false}],
              correct: 1, explanation: '(1+2+3+4+5+6)/6 = 3.5.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Classical ML ============== */
    {
      id: 'aie-u4',
      name: 'Unit 4 · Classical ML',
      description: 'Regression, classification, evaluation',
      lessons: [
        {
          id: 'aie-u4-l1', name: 'Regression & classification', icon: '📈', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two flavors of supervised learning', content: `<p><strong>Regression</strong>: predict a continuous number (price, temperature).<br/>
<strong>Classification</strong>: predict a category (spam/not, dog/cat/bird).</p>
<div class="code-block"><span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LinearRegression, LogisticRegression
<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split

X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(X, y, test_size=<span class="num">0.2</span>)
model = <span class="ty">LinearRegression</span>().<span class="fn">fit</span>(X_train, y_train)
model.<span class="fn">score</span>(X_test, y_test)   <span class="com"># R^2</span></div>` },
            { type: 'multiple-choice', prompt: 'Which is a regression task?',
              options: [{text:'Spam vs not spam', code:false},{text:'Predict house price', code:false},{text:'Recognize handwritten digits', code:false},{text:'Group similar customers', code:false}],
              correct: 1, explanation: 'House price = continuous → regression.' },
            { type: 'multiple-choice', prompt: 'Which sklearn class implements logistic regression?',
              options: [{text:'LogReg', code:true},{text:'LogisticRegression', code:true},{text:'Classifier', code:true},{text:'Sigmoid', code:true}],
              correct: 1, explanation: 'sklearn.linear_model.LogisticRegression.' },
            { type: 'true-false', statement: 'Logistic regression outputs a probability via the sigmoid function.', correct: true, explanation: 'σ(z) = 1/(1+e⁻ᶻ) gives values in (0,1).' }
          ]
        },
        {
          id: 'aie-u4-l2', name: 'Train/val/test & metrics', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'How to actually evaluate', content: `<p>Split your data into <strong>three</strong> parts:</p>
<div class="code-block">Train (~70%)    — fit the model
Validation (~15%) — tune hyperparameters
Test (~15%)     — final unbiased evaluation</div>
<p>Common metrics:</p>
<div class="code-block">Regression:     MSE, RMSE, MAE, R^2
Classification: accuracy, precision, recall, F1, ROC-AUC</div>` },
            { type: 'multiple-choice', prompt: 'In binary classification, recall is:',
              options: [{text:'TP / (TP + FP)', code:true},{text:'TP / (TP + FN)', code:true},{text:'(TP + TN) / total', code:true},{text:'TP / total', code:true}],
              correct: 1, explanation: 'Recall = of all actual positives, how many did we catch.' },
            { type: 'multiple-choice', prompt: 'You have 99% accuracy on a binary task where 99% of inputs are class A. This means:',
              options: [{text:'The model is great', code:false},{text:'The model probably just predicts A always', code:false},{text:'Accuracy is the right metric', code:false},{text:'No information', code:false}],
              correct: 1, explanation: 'On highly imbalanced data, accuracy is misleading. Look at precision/recall/F1 for the minority class.' },
            { type: 'true-false', statement: 'You should look at test set performance after every hyperparameter tweak.', correct: false, explanation: 'NO! That leaks information. Use validation for tweaks; test only once, at the end.' },
            { type: 'match-pairs', prompt: 'Match metric to task type.', leftLabel: 'Metric', rightLabel: 'Best for',
              pairs: [{left:'RMSE', right:'Regression'},{left:'F1 Score', right:'Imbalanced classification'},{left:'R²', right:'Regression goodness-of-fit'},{left:'ROC-AUC', right:'Threshold-free classification quality'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Deep Learning ============== */
    {
      id: 'aie-u5',
      name: 'Unit 5 · Deep Learning Foundations',
      description: 'Neurons, layers, backprop',
      lessons: [
        {
          id: 'aie-u5-l1', name: 'Neural networks', icon: '🧠', xp: 25,
          challenges: [
            { type: 'concept', title: 'The neuron and stacked layers', content: `<p>A <strong>neuron</strong> computes: <code>y = activation(Σ wᵢ·xᵢ + b)</code>.</p>
<p>Stack many neurons in <strong>layers</strong>, stack many layers to make a <strong>neural network</strong>.</p>
<div class="code-block">input → hidden layer 1 → hidden layer 2 → ... → output

<span class="kw">import</span> torch.nn <span class="kw">as</span> nn
model = nn.<span class="fn">Sequential</span>(
    nn.<span class="ty">Linear</span>(<span class="num">784</span>, <span class="num">128</span>),
    nn.<span class="ty">ReLU</span>(),
    nn.<span class="ty">Linear</span>(<span class="num">128</span>, <span class="num">10</span>)
)</div>` },
            { type: 'multiple-choice', prompt: 'Why do we need a non-linear activation function (ReLU, sigmoid)?',
              options: [{text:'For speed', code:false},{text:'Without it, stacked layers collapse to a single linear function', code:false},{text:'For prettier loss curves', code:false},{text:'Required by GPUs', code:false}],
              correct: 1, explanation: 'Linear ∘ linear is still linear. Non-linearity lets NNs learn complex functions.' },
            { type: 'multiple-choice', prompt: 'ReLU(x) is:',
              options: [{text:'1/(1+e⁻ˣ)', code:true},{text:'max(0, x)', code:true},{text:'tanh(x)', code:true},{text:'x²', code:true}],
              correct: 1, explanation: 'Rectified Linear Unit. Simple, fast, mostly works.' },
            { type: 'true-false', statement: 'For multi-class classification with softmax output, you typically use cross-entropy loss.', correct: true, explanation: 'Standard combo: softmax + cross-entropy.' }
          ]
        },
        {
          id: 'aie-u5-l2', name: 'Backprop & training', icon: '🔄', xp: 25,
          challenges: [
            { type: 'concept', title: 'How models learn', content: `<p><strong>Forward pass</strong>: input → predictions.<br/>
<strong>Loss</strong>: measure of how wrong we are.<br/>
<strong>Backward pass (backprop)</strong>: chain rule to compute gradients.<br/>
<strong>Optimizer step</strong>: tweak weights against the gradient.</p>
<div class="code-block"><span class="kw">for</span> batch <span class="kw">in</span> loader:
    pred = <span class="fn">model</span>(batch.x)
    loss = <span class="fn">loss_fn</span>(pred, batch.y)
    loss.<span class="fn">backward</span>()         <span class="com"># compute gradients</span>
    optimizer.<span class="fn">step</span>()        <span class="com"># update weights</span>
    optimizer.<span class="fn">zero_grad</span>()   <span class="com"># reset grads for next step</span></div>` },
            { type: 'multiple-choice', prompt: 'Why call <code>optimizer.zero_grad()</code> each iteration?',
              options: [{text:'Frees memory', code:false},{text:'Gradients accumulate by default — must clear', code:false},{text:'Stops training', code:false},{text:'No reason — optional', code:false}],
              correct: 1, explanation: 'PyTorch accumulates gradients into <code>.grad</code> attrs. Always zero them at each batch.' },
            { type: 'multiple-choice', prompt: 'Adam optimizer is:',
              options: [{text:'A type of activation', code:false},{text:'An adaptive learning rate optimizer (per parameter)', code:false},{text:'A loss function', code:false},{text:'A regularizer', code:false}],
              correct: 1, explanation: 'Adam adapts learning rate per parameter using moving averages of gradients.' },
            { type: 'true-false', statement: 'Learning rate too high can cause the loss to diverge or oscillate.', correct: true, explanation: 'A core hyperparameter to tune.' },
            { type: 'reorder-code', prompt: 'Reorder the training step.',
              lines: ['pred = model(x)','loss = loss_fn(pred, y)','loss.backward()','optimizer.step()','optimizer.zero_grad()'],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — CNN / Vision ============== */
    {
      id: 'aie-u6',
      name: 'Unit 6 · Computer Vision',
      description: 'Convolutions, popular architectures',
      lessons: [
        {
          id: 'aie-u6-l1', name: 'Convolutional networks', icon: '👁️', xp: 25,
          challenges: [
            { type: 'concept', title: 'CNNs see images', content: `<p>A <strong>convolution</strong> slides a small filter over the image, computing dot products. Filters detect features (edges, textures, shapes).</p>
<div class="code-block">Image  → Conv → ReLU → Pool → Conv → ReLU → Pool → ... → FC → softmax

<span class="com">// Modern stacks (CNN → ResNet → ViT)</span>
nn.<span class="ty">Conv2d</span>(in_channels=<span class="num">3</span>, out_channels=<span class="num">32</span>, kernel_size=<span class="num">3</span>)</div>
<p><strong>Pooling</strong> downsamples (max-pool, avg-pool). Reduces size, adds translation invariance.</p>` },
            { type: 'multiple-choice', prompt: 'CNNs are designed to exploit which property of images?',
              options: [{text:'Rotation', code:false},{text:'Spatial locality (nearby pixels are related)', code:false},{text:'Brightness', code:false},{text:'Color', code:false}],
              correct: 1, explanation: 'Nearby pixels carry related info; conv filters share weights across the image.' },
            { type: 'multiple-choice', prompt: 'A 5×5 input convolved with a 3×3 filter (stride 1, no padding) produces:',
              options: [{text:'3×3', code:false},{text:'5×5', code:false},{text:'7×7', code:false},{text:'1×1', code:false}],
              correct: 0, explanation: '(5 - 3 + 1) = 3 → output 3×3.' },
            { type: 'true-false', statement: 'ResNet introduced skip (residual) connections that helped train very deep networks.', correct: true, explanation: 'He et al., 2015. Made 100+ layer networks trainable.' },
            { type: 'match-pairs', prompt: 'Match the vision task.', leftLabel: 'Task', rightLabel: 'Description',
              pairs: [{left:'Classification', right:'One label per image'},{left:'Detection', right:'Bounding boxes + labels'},{left:'Segmentation', right:'Per-pixel labels'},{left:'OCR', right:'Read text from image'}] }
          ]
        },
        {
          id: 'aie-u6-l2', name: 'Vision Transformers (ViT)', icon: '🖼️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Transformers for images', content: `<p>ViT (Dosovitskiy et al., 2020) splits the image into patches, treats each patch as a "token", and feeds them to a Transformer.</p>
<div class="code-block">Image (224×224) → 16x16 patches → 196 tokens → Transformer → classification

<span class="com">// On large data, ViT often beats CNNs. With less data, CNNs still win.</span></div>` },
            { type: 'multiple-choice', prompt: 'A ViT treats each image patch as:',
              options: [{text:'A pixel', code:false},{text:'A token (like a word)', code:false},{text:'A filter', code:false},{text:'A label', code:false}],
              correct: 1, explanation: 'Patches are flattened and treated as input tokens — analogous to words in NLP.' },
            { type: 'true-false', statement: 'ViT typically needs MORE training data than CNNs to perform well.', correct: true, explanation: 'It lacks the inductive bias of conv layers; large datasets compensate.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Sequence models & Transformers ============== */
    {
      id: 'aie-u7',
      name: 'Unit 7 · Sequences & Transformers',
      description: 'RNNs, attention, BERT/GPT',
      lessons: [
        {
          id: 'aie-u7-l1', name: 'From RNNs to Transformers', icon: '🔁', xp: 25,
          challenges: [
            { type: 'concept', title: 'A brief history', content: `<p>RNN/LSTM read tokens one at a time, carrying a hidden state. <strong>Problem:</strong> sequential = slow; long sequences = vanishing gradients.</p>
<p><strong>Transformer (2017, "Attention Is All You Need")</strong>: process all tokens in parallel using <em>self-attention</em>. Solves both problems → dominant architecture today.</p>` },
            { type: 'multiple-choice', prompt: 'Transformer\'s key advantage over RNNs?',
              options: [{text:'Smaller models', code:false},{text:'Parallel processing of all tokens', code:false},{text:'No matrix math', code:false},{text:'No gradients', code:false}],
              correct: 1, explanation: 'No sequential dependency at training time → highly parallelizable.' },
            { type: 'multiple-choice', prompt: 'Which architecture is the foundation of GPT and BERT?',
              options: [{text:'RNN', code:false},{text:'CNN', code:false},{text:'Transformer', code:false},{text:'LSTM', code:false}],
              correct: 2, explanation: 'Both built on the transformer (decoder-only for GPT, encoder-only for BERT).' },
            { type: 'true-false', statement: 'LSTM is a special kind of RNN designed to handle long-range dependencies.', correct: true, explanation: 'Has gates (input, forget, output) to control info flow.' }
          ]
        },
        {
          id: 'aie-u7-l2', name: 'Self-attention basics', icon: '👀', xp: 25,
          challenges: [
            { type: 'concept', title: 'The Q/K/V trick', content: `<p>Each token produces three vectors: <strong>Query (Q)</strong>, <strong>Key (K)</strong>, <strong>Value (V)</strong>.</p>
<div class="code-block">attention(Q, K, V) = softmax(Q @ K^T / sqrt(d)) @ V

<span class="com"># Intuition:
# Q asks "what am I looking for?"
# K answers "here's what I am"
# similarity(Q, K) decides how much of V to take</span></div>` },
            { type: 'multiple-choice', prompt: 'In <code>softmax(QK^T/√d) @ V</code>, why divide by √d?',
              options: [{text:'To make it smaller', code:false},{text:'To keep softmax inputs in a numerically stable range', code:false},{text:'Required by GPU', code:false},{text:'Optional speed boost', code:false}],
              correct: 1, explanation: 'Without it, dot products grow with dimensionality, pushing softmax into low-gradient regions.' },
            { type: 'multiple-choice', prompt: '"Multi-head attention" means:',
              options: [{text:'Multiple models in parallel', code:false},{text:'Multiple attention computations (heads) in parallel, then concatenated', code:false},{text:'Multiple losses', code:false},{text:'Multiple GPUs', code:false}],
              correct: 1, explanation: 'Each head learns different attention patterns; concat + linear projects back.' },
            { type: 'true-false', statement: 'BERT is encoder-only and trained with masked-language modeling.', correct: true, explanation: 'Trained to predict masked tokens — bidirectional context.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — LLMs ============== */
    {
      id: 'aie-u8',
      name: 'Unit 8 · LLMs & NLP',
      description: 'Tokenization, embeddings, modern LLMs',
      lessons: [
        {
          id: 'aie-u8-l1', name: 'Tokenization & embeddings', icon: '🔤', xp: 20,
          challenges: [
            { type: 'concept', title: 'Words → numbers', content: `<p>An LLM doesn\'t see characters — it sees <strong>tokens</strong> (subword units).</p>
<div class="code-block"><span class="str">"unhappiness"</span>  →  [<span class="str">"un"</span>, <span class="str">"happi"</span>, <span class="str">"ness"</span>]  →  [<span class="num">485</span>, <span class="num">3091</span>, <span class="num">22</span>]
<span class="com"># Common: Byte-Pair Encoding (BPE), SentencePiece, tiktoken</span></div>
<p>Each token id maps to an <strong>embedding</strong> — a vector. Similar words land in similar regions.</p>` },
            { type: 'multiple-choice', prompt: 'Why do modern LLMs use subword tokenization?',
              options: [{text:'Smaller vocab + handles unknown words', code:false},{text:'Faster GPUs', code:false},{text:'Easier code', code:false},{text:'For backwards compat', code:false}],
              correct: 0, explanation: 'Word-level → huge vocab + OOV problems. Char-level → very long sequences. Subwords balance both.' },
            { type: 'multiple-choice', prompt: 'Token embeddings are typically how many dimensions for modern LLMs?',
              options: [{text:'10-50', code:false},{text:'768 to 12,288+', code:false},{text:'1', code:false},{text:'1 million+', code:false}],
              correct: 1, explanation: 'BERT-base: 768. GPT-4: ~12,288+. The hidden size is a key hyperparameter.' },
            { type: 'true-false', statement: 'Embeddings capture semantic similarity — "king" and "queen" tend to be close.', correct: true, explanation: 'The famous king-man+woman≈queen result from word2vec.' }
          ]
        },
        {
          id: 'aie-u8-l2', name: 'GPT-style LLMs', icon: '💬', xp: 25,
          challenges: [
            { type: 'concept', title: 'Decoder-only causal LLM', content: `<p>GPT is a Transformer <strong>decoder</strong> trained to predict the next token.</p>
<div class="code-block">input:    "The cat sat on the"
output:   "mat" (most likely)

<span class="com"># Pretraining = trillion+ tokens, predict next token
# Fine-tuning = adapt to specific tasks
# RLHF = align with human preferences (ChatGPT-style)</span></div>` },
            { type: 'multiple-choice', prompt: 'GPT models are trained primarily with which objective?',
              options: [{text:'Masked language modeling', code:false},{text:'Next-token prediction', code:false},{text:'Image classification', code:false},{text:'Translation', code:false}],
              correct: 1, explanation: 'Causal/autoregressive: predict the next token given previous.' },
            { type: 'multiple-choice', prompt: '"RLHF" stands for:',
              options: [{text:'Reinforcement Learning from Human Feedback', code:false},{text:'Recurrent Loss with Hyperparameter Fitting', code:false},{text:'Reward Loop for Heuristic Fine-tuning', code:false},{text:'Random Late Hidden Features', code:false}],
              correct: 0, explanation: 'Used to align LLMs to be helpful, harmless, honest. Three-stage process.' },
            { type: 'true-false', statement: 'GPT models are causal — each token can only attend to previous tokens.', correct: true, explanation: 'Causal mask prevents looking ahead during training & inference.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — LLM Apps ============== */
    {
      id: 'aie-u9',
      name: 'Unit 9 · Building with LLMs',
      description: 'Prompts, RAG, agents, tool use',
      lessons: [
        {
          id: 'aie-u9-l1', name: 'Prompt engineering', icon: '✍️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Talking to LLMs effectively', content: `<p>Key techniques:</p>
<div class="code-block"><span class="com">1. Zero-shot:</span>     "Classify this email as spam or not: ..."
<span class="com">2. Few-shot:</span>      provide 2-3 examples in the prompt
<span class="com">3. Chain-of-thought:</span>  ask the model to "think step by step"
<span class="com">4. System prompt:</span>  set the role/persona of the model
<span class="com">5. Output format:</span>  ask for JSON, bullet list, etc.</div>` },
            { type: 'multiple-choice', prompt: 'For complex reasoning problems, which prompt strategy usually helps most?',
              options: [{text:'Make the prompt shorter', code:false},{text:'Chain-of-thought ("think step by step")', code:false},{text:'Use all caps', code:false},{text:'Add emojis', code:false}],
              correct: 1, explanation: 'CoT often dramatically improves multi-step reasoning.' },
            { type: 'multiple-choice', prompt: '"Few-shot" prompting means:',
              options: [{text:'Using a small model', code:false},{text:'Showing 2-5 examples in the prompt before the actual task', code:false},{text:'Running multiple times', code:false},{text:'Using a small batch', code:false}],
              correct: 1, explanation: 'Few = a few examples. Zero-shot = none, many-shot = many.' },
            { type: 'true-false', statement: 'Setting low temperature (e.g. 0) makes LLM output more deterministic.', correct: true, explanation: 'Temperature controls randomness; 0 = always pick most likely token.' }
          ]
        },
        {
          id: 'aie-u9-l2', name: 'RAG — Retrieval Augmented Generation', icon: '📚', xp: 25,
          challenges: [
            { type: 'concept', title: 'Give the LLM relevant context', content: `<p>LLMs don\'t know your private/recent data. <strong>RAG</strong> retrieves relevant chunks and stuffs them into the prompt.</p>
<div class="code-block">Pipeline:
1. Chunk your documents
2. Embed each chunk → vector
3. Store in a vector database (Pinecone, Weaviate, pgvector)
4. At query time: embed query → find top-K similar chunks
5. Stuff chunks + query into the LLM prompt
6. LLM generates answer using the retrieved context</div>` },
            { type: 'multiple-choice', prompt: 'A vector database stores:',
              options: [{text:'Raw text', code:false},{text:'Embedding vectors + IDs for similarity search', code:false},{text:'Relational tables', code:false},{text:'SQL queries', code:false}],
              correct: 1, explanation: 'Optimized for nearest-neighbor search in high dimensions.' },
            { type: 'multiple-choice', prompt: 'Why use RAG instead of fine-tuning the LLM on your data?',
              options: [{text:'Faster to set up', code:false},{text:'Cheaper, easier to update, no training', code:false},{text:'Both', code:false},{text:'RAG is always better than fine-tuning', code:false}],
              correct: 2, explanation: 'RAG is faster + cheaper + dynamic — but fine-tuning can be better when you need behavioral changes. Often combined.' },
            { type: 'true-false', statement: 'In RAG, embedding the query and chunks with the SAME embedding model is critical.', correct: true, explanation: 'Otherwise their vectors aren\'t comparable.' }
          ]
        },
        {
          id: 'aie-u9-l3', name: 'Agents & tool use', icon: '🦾', xp: 25,
          challenges: [
            { type: 'concept', title: 'LLMs that take actions', content: `<p>An <strong>agent</strong> is an LLM that can <em>act</em> via tools (call APIs, search the web, run code).</p>
<div class="code-block"><span class="com">// Simplified loop</span>
<span class="kw">while</span> not done:
    response = llm(<span class="str">"What\'s next? Tools: [search, calc, db_query]"</span>)
    <span class="kw">if</span> response.is_action:
        result = call_tool(response.tool, response.args)
        history.append((response, result))
    <span class="kw">else</span>:
        done = True
<span class="kw">return</span> response.final_answer</div>
<p>Popular frameworks: LangChain, LangGraph, LlamaIndex, OpenAI function calling.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a key risk of LLM agents?',
              options: [{text:'They\'re too slow', code:false},{text:'They can call wrong tools or hallucinate actions', code:false},{text:'They can\'t use APIs', code:false},{text:'They cost nothing', code:false}],
              correct: 1, explanation: 'Reliable tool use is hard. Guardrails, retry logic, and human-in-the-loop matter.' },
            { type: 'true-false', statement: 'OpenAI\'s function calling lets the model return a structured tool call with JSON arguments.', correct: true, explanation: 'Major reliability improvement vs free-text "I want to call X".' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — PyTorch ============== */
    {
      id: 'aie-u10',
      name: 'Unit 10 · PyTorch in Practice',
      description: 'Tensors, autograd, training loops',
      lessons: [
        {
          id: 'aie-u10-l1', name: 'Tensors & autograd', icon: '🔥', xp: 25,
          challenges: [
            { type: 'concept', title: 'PyTorch basics', content: `<p>PyTorch tensors are like NumPy arrays — but they support GPU and autograd.</p>
<div class="code-block"><span class="kw">import</span> torch

x = torch.<span class="fn">tensor</span>([[<span class="num">1.0</span>, <span class="num">2.0</span>]], requires_grad=<span class="kw">True</span>)
y = (x ** <span class="num">2</span>).<span class="fn">sum</span>()
y.<span class="fn">backward</span>()
<span class="fn">print</span>(x.grad)        <span class="com"># dy/dx = 2x → [[2.0, 4.0]]</span></div>` },
            { type: 'multiple-choice', prompt: 'Why <code>requires_grad=True</code>?',
              options: [{text:'Tensors only work with it', code:false},{text:'Track operations so backward() can compute gradients', code:false},{text:'Speed', code:false},{text:'Memory', code:false}],
              correct: 1, explanation: 'PyTorch builds a computation graph for tensors with requires_grad.' },
            { type: 'multiple-choice', prompt: 'To move a tensor to the GPU:',
              options: [{text:'tensor.cuda()', code:true},{text:'tensor.to("cuda")', code:true},{text:'Both', code:true},{text:'Neither', code:true}],
              correct: 2, explanation: 'Both work; .to() is the modern preferred way.' },
            { type: 'true-false', statement: 'Calling .backward() works only on a scalar (zero-dim) tensor by default.', correct: true, explanation: 'For non-scalar outputs, pass a grad tensor of the same shape.' }
          ]
        },
        {
          id: 'aie-u10-l2', name: 'A complete training loop', icon: '🏋️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Putting it all together', content: `<div class="code-block">model = <span class="ty">MyNet</span>().to(device)
opt = torch.optim.<span class="ty">Adam</span>(model.parameters(), lr=<span class="num">1e-3</span>)
loss_fn = nn.<span class="ty">CrossEntropyLoss</span>()

<span class="kw">for</span> epoch <span class="kw">in</span> <span class="fn">range</span>(epochs):
    model.<span class="fn">train</span>()
    <span class="kw">for</span> x, y <span class="kw">in</span> train_loader:
        x, y = x.<span class="fn">to</span>(device), y.<span class="fn">to</span>(device)
        pred = <span class="fn">model</span>(x)
        loss = <span class="fn">loss_fn</span>(pred, y)
        opt.<span class="fn">zero_grad</span>()
        loss.<span class="fn">backward</span>()
        opt.<span class="fn">step</span>()

    model.<span class="fn">eval</span>()
    <span class="kw">with</span> torch.<span class="fn">no_grad</span>():
        <span class="com"># validation</span>
        ...</div>` },
            { type: 'multiple-choice', prompt: 'Why <code>torch.no_grad()</code> during validation?',
              options: [{text:'Saves memory and is faster (no gradient tracking)', code:false},{text:'Required', code:false},{text:'Makes outputs deterministic', code:false},{text:'Activates dropout', code:false}],
              correct: 0, explanation: 'No gradients needed at eval → skip the autograd machinery.' },
            { type: 'multiple-choice', prompt: '<code>model.eval()</code> vs <code>model.train()</code> matters because:',
              options: [{text:'Naming convention only', code:false},{text:'Dropout and BatchNorm behave differently', code:false},{text:'Changes loss', code:false},{text:'Changes optimizer', code:false}],
              correct: 1, explanation: 'Dropout off at eval; BatchNorm uses running stats vs batch stats.' },
            { type: 'true-false', statement: 'DataLoader with num_workers > 0 loads batches in parallel using subprocesses.', correct: true, explanation: 'Speeds up I/O-bound training significantly.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Hugging Face ============== */
    {
      id: 'aie-u11',
      name: 'Unit 11 · Hugging Face & LangChain',
      description: 'Open models, ecosystem, LLM apps',
      lessons: [
        {
          id: 'aie-u11-l1', name: 'Hugging Face Transformers', icon: '🤗', xp: 25,
          challenges: [
            { type: 'concept', title: 'The model hub of the world', content: `<p><strong>Hugging Face</strong> hosts thousands of pretrained models, datasets, and tokenizers.</p>
<div class="code-block"><span class="kw">from</span> transformers <span class="kw">import</span> pipeline

clf = <span class="fn">pipeline</span>(<span class="str">"sentiment-analysis"</span>)
clf(<span class="str">"I love this course!"</span>)
<span class="com"># [{'label': 'POSITIVE', 'score': 0.9998}]</span></div>
<p>Beyond pipelines: AutoModel, AutoTokenizer, datasets, accelerate, PEFT for fine-tuning.</p>` },
            { type: 'multiple-choice', prompt: 'What\'s the easiest way to use a pretrained model for a task?',
              options: [{text:'Train from scratch', code:false},{text:'Use a pipeline()', code:false},{text:'Write your own loop', code:false},{text:'Hire an ML engineer', code:false}],
              correct: 1, explanation: 'pipeline() handles tokenization, model loading, and postprocessing.' },
            { type: 'multiple-choice', prompt: 'PEFT stands for:',
              options: [{text:'Pre-trained Encoder Fine-Tuning', code:false},{text:'Parameter-Efficient Fine-Tuning', code:false},{text:'Python Easy Fast Tools', code:false},{text:'Plain English Fast Training', code:false}],
              correct: 1, explanation: 'Techniques like LoRA train a small subset of parameters — cheap & effective.' },
            { type: 'true-false', statement: 'You can load a 7B-parameter model in 4-bit quantization to fit it on a 16GB GPU.', correct: true, explanation: 'Quantization (4-bit, 8-bit) lets you run big models on smaller hardware.' }
          ]
        },
        {
          id: 'aie-u11-l2', name: 'LangChain & frameworks', icon: '⛓️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Compose LLM applications', content: `<p>LangChain, LlamaIndex, Haystack — frameworks for building LLM apps. They provide:</p>
<ul>
<li>Standard LLM/embedding interfaces (works with OpenAI, Anthropic, local models)</li>
<li>Memory & conversation state</li>
<li>Document loaders, text splitters, vector stores</li>
<li>Agents and tool integrations</li>
<li>Observability hooks</li>
</ul>
<p><strong>Tradeoff:</strong> rapid prototyping vs added abstraction overhead. Sometimes a raw API + a few helpers is enough.</p>` },
            { type: 'multiple-choice', prompt: 'A "chain" in LangChain is:',
              options: [{text:'A pipeline of LLM calls and other steps', code:false},{text:'A blockchain', code:false},{text:'A neural net layer', code:false},{text:'A list of users', code:false}],
              correct: 0, explanation: 'You chain steps: prompt → LLM → parse → next prompt.' },
            { type: 'true-false', statement: 'For simple LLM apps, you don\'t need a framework — raw SDK calls work fine.', correct: true, explanation: 'Don\'t over-engineer. Frameworks shine for complex flows, memory, and agents.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — MLOps ============== */
    {
      id: 'aie-u12',
      name: 'Unit 12 · MLOps Essentials',
      description: 'Deploy, monitor, iterate',
      lessons: [
        {
          id: 'aie-u12-l1', name: 'From notebook to production', icon: '🚀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Notebooks ≠ products', content: `<p>Common deployment paths:</p>
<div class="code-block"><span class="com">Batch:</span>      run model periodically, write predictions to DB
<span class="com">Real-time API:</span> wrap model in FastAPI/Flask, serve via HTTP
<span class="com">Streaming:</span>  Kafka → model → Kafka, low-latency
<span class="com">Edge:</span>       model on device (mobile, IoT)</div>
<p>Containerize with Docker, orchestrate with Kubernetes or serverless (Lambda, Cloud Run).</p>` },
            { type: 'multiple-choice', prompt: 'Which Python web framework is popular for ML model APIs?',
              options: [{text:'Django', code:true},{text:'FastAPI', code:true},{text:'Pyramid', code:true},{text:'Tornado', code:true}],
              correct: 1, explanation: 'FastAPI is async, type-safe, and has great auto-docs — perfect for model serving.' },
            { type: 'multiple-choice', prompt: 'What\'s the typical containerization tool used in ML deployment?',
              options: [{text:'Git', code:true},{text:'Docker', code:true},{text:'pip', code:true},{text:'venv', code:true}],
              correct: 1, explanation: 'Docker bundles model + deps + runtime → portable, reproducible.' },
            { type: 'true-false', statement: 'You should pin your dependency versions (e.g., torch==2.1.0) for reproducibility.', correct: true, explanation: 'Otherwise the same code can give different results months later.' }
          ]
        },
        {
          id: 'aie-u12-l2', name: 'Monitoring & drift', icon: '📡', xp: 25,
          challenges: [
            { type: 'concept', title: 'Models degrade over time', content: `<p><strong>Data drift</strong>: input distribution changes (new user behavior, seasonality).<br/>
<strong>Concept drift</strong>: the relationship between input and output changes.</p>
<p>Monitor:</p>
<ul>
<li>Latency, error rate (standard service metrics)</li>
<li>Prediction distribution vs training distribution</li>
<li>Input feature distributions</li>
<li>Performance metrics (when labels become available)</li>
</ul>
<p>Tools: Prometheus + Grafana, Evidently, Arize, Fiddler, Whylogs.</p>` },
            { type: 'multiple-choice', prompt: 'A spam detector\'s accuracy drops 6 months after launch. Most likely cause:',
              options: [{text:'Bug in deploy', code:false},{text:'Spammers changed tactics (concept drift)', code:false},{text:'Server too slow', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'Adversarial drift — adversaries adapt. Common in fraud, spam, security.' },
            { type: 'true-false', statement: 'Some models need to be retrained periodically as data drifts.', correct: true, explanation: 'Automate the retraining pipeline.' },
            { type: 'multiple-choice', prompt: '"Shadow deployment" means:',
              options: [{text:'Deploy a hidden version', code:false},{text:'Run a new model on real traffic but don\'t serve its predictions to users', code:false},{text:'Deploy at night', code:false},{text:'A backup', code:false}],
              correct: 1, explanation: 'Validates the new model on live traffic safely before promoting it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Ethics & Safety ============== */
    {
      id: 'aie-u13',
      name: 'Unit 13 · AI Ethics & Safety',
      description: 'Bias, fairness, alignment',
      lessons: [
        {
          id: 'aie-u13-l1', name: 'Bias, fairness, safety', icon: '⚖️', xp: 20,
          challenges: [
            { type: 'concept', title: 'AI can amplify harm', content: `<p>Models learn from data — including biases in that data. Real cases:</p>
<ul>
<li>Resume screening favoring certain demographics</li>
<li>Facial recognition with higher error on darker skin</li>
<li>LLMs reflecting societal stereotypes</li>
</ul>
<p>Mitigations:</p>
<ul>
<li>Audit training data for representation</li>
<li>Evaluate metrics per demographic group</li>
<li>Add safety filters (e.g., refuse harmful outputs)</li>
<li>Human-in-the-loop for high-stakes decisions</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Best practice for a high-stakes AI system (e.g., medical, legal):',
              options: [{text:'Trust the model', code:false},{text:'Keep humans in the loop for decisions', code:false},{text:'Hide it from users', code:false},{text:'Skip evaluation', code:false}],
              correct: 1, explanation: 'AI should assist, not replace, for high-stakes outcomes.' },
            { type: 'true-false', statement: 'A model can perform well overall but very poorly on a minority subgroup.', correct: true, explanation: 'Average accuracy hides subgroup disparities. Always slice metrics.' },
            { type: 'multiple-choice', prompt: '"Alignment" in AI safety means:',
              options: [{text:'Code formatting', code:false},{text:'Making model behavior match human values & intentions', code:false},{text:'Aligning data', code:false},{text:'Right-aligning text', code:false}],
              correct: 1, explanation: 'A major research area: ensure powerful AI does what we actually want.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Career path ============== */
    {
      id: 'aie-u14',
      name: 'Unit 14 · AI Engineer Career',
      description: 'Portfolio, projects, interviews',
      lessons: [
        {
          id: 'aie-u14-l1', name: 'Build a portfolio', icon: '💼', xp: 20,
          challenges: [
            { type: 'concept', title: 'Show, don\'t tell', content: `<p>Strong AI Engineer portfolios usually have:</p>
<ul>
<li><strong>1-2 deeply built projects</strong> (deployed, with code + writeup)</li>
<li>A clear narrative ("I built X to solve Y, learned Z")</li>
<li>GitHub with reasonable code quality (README, tests, structure)</li>
<li>A blog post or two — explaining what you learned</li>
<li>Live demo if possible (HuggingFace Spaces, Replicate, Vercel)</li>
</ul>
<p>What NOT to do: 10 abandoned tutorial clones, no writeups, no deployments.</p>` },
            { type: 'multiple-choice', prompt: 'Strongest signal for an AI Engineer portfolio?',
              options: [{text:'10 tutorial clones', code:false},{text:'1-2 deeply-built, deployed projects with writeups', code:false},{text:'Many starred repos', code:false},{text:'Long resume', code:false}],
              correct: 1, explanation: 'Depth + production polish beats breadth of half-built repos.' },
            { type: 'true-false', statement: 'A blog post explaining what you learned from a project is a strong differentiator.', correct: true, explanation: 'Communication is a core skill — writeups show you understand, not just code.' }
          ]
        },
        {
          id: 'aie-u14-l2', name: 'AI Engineer interviews', icon: '🎤', xp: 25,
          challenges: [
            { type: 'concept', title: 'What gets tested', content: `<p>Typical AI Engineer interview rounds:</p>
<div class="code-block">1. Resume / behavioral
2. Coding (DSA — like SWE)
3. ML fundamentals (theory + tradeoffs)
4. AI system design (e.g., "design a recommendation engine")
5. Past project deep-dive
6. Sometimes: take-home ML project</div>
<p><strong>Tips:</strong> Be honest about what you know. Explain tradeoffs. Walk through tradeoffs out loud. Ask clarifying questions in design rounds.</p>` },
            { type: 'multiple-choice', prompt: 'For an "AI system design" round, what should you typically do FIRST?',
              options: [{text:'Code it', code:false},{text:'Clarify requirements: scale, latency, data, success metric', code:false},{text:'Pick the biggest model', code:false},{text:'Talk about MLOps', code:false}],
              correct: 1, explanation: 'Requirements drive every architectural decision. Don\'t skip this.' },
            { type: 'multiple-choice', prompt: 'In a project deep-dive, interviewers care most about:',
              options: [{text:'How long the project took', code:false},{text:'YOUR specific contribution + decisions made', code:false},{text:'Total LOC', code:false},{text:'Number of dependencies', code:false}],
              correct: 1, explanation: 'They probe for ownership and judgment. Frame in STAR format.' },
            { type: 'true-false', statement: 'It\'s OK to say "I don\'t know" in interviews.', correct: true, explanation: 'Honesty + curiosity > fake confidence. Just follow with "let me reason about it..."' },
            { type: 'match-pairs', prompt: 'Match interview question to round.', leftLabel: 'Question', rightLabel: 'Round',
              pairs: [{left:'"Reverse a linked list"', right:'Coding (DSA)'},{left:'"Explain bias/variance"', right:'ML fundamentals'},{left:'"Design YouTube\'s recommender"', right:'AI system design'},{left:'"Tell me about a hard project"', right:'Behavioral'}] }
          ]
        }
      ]
    }

  ]
});

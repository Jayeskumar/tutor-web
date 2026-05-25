PUSH({
  id: 'ml',
  name: 'Machine Learning',
  icon: '🤖',
  color: '#4d96ff',
  description: 'Teach computers to learn from data — from foundations to neural networks.',
  units: [
    {
      id: 'ml-u1',
      name: 'Unit 1 · What Is ML?',
      description: 'From hand-written rules to learning from examples.',
      lessons: [
        {
          id: 'ml-u1-l1',
          name: 'Programming vs Learning',
          icon: '🧠',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Two ways to solve a problem',
              content: `<p>In <b>traditional programming</b>, you write the rules. In <b>machine learning</b>, the computer learns the rules from <b>data</b>.</p>
                <div class="code-block"><span class="com"># Traditional: you write the rule</span><br>
                <span class="kw">def</span> <span class="fn">is_spam</span>(email):<br>
                &nbsp;&nbsp;<span class="kw">if</span> <span class="str">"free money"</span> <span class="kw">in</span> email: <span class="kw">return</span> <span class="kw">True</span><br>
                &nbsp;&nbsp;<span class="kw">return</span> <span class="kw">False</span></div>
                <p>ML flips this — give it thousands of labeled emails, and it figures out the pattern itself.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the key difference between traditional programming and machine learning?',
              options: [
                { text: 'In ML, the computer learns rules from data instead of being told them.', code: false },
                { text: 'ML uses faster computers.', code: false },
                { text: 'ML always uses Python.', code: false },
                { text: 'Traditional programs run on the cloud.', code: false }
              ],
              correct: 0,
              explanation: 'ML discovers patterns from data — you give it examples instead of explicit rules.'
            },
            {
              type: 'true-false',
              statement: 'A machine learning model is essentially a function that maps inputs to outputs, learned from examples.',
              correct: true,
              explanation: 'Yes — a model is a learned function f(x) → y, where the parameters were tuned from data.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the task to the approach that fits best.',
              leftLabel: 'Task',
              rightLabel: 'Approach',
              pairs: [
                { left: 'Detect spam in 1M emails', right: 'Machine learning' },
                { left: 'Convert Celsius to Fahrenheit', right: 'Traditional code' },
                { left: 'Recognize cats in photos', right: 'Machine learning' },
                { left: 'Sort a list of numbers', right: 'Traditional code' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the definition.',
              codeLines: [
                { html: '<span class="com"># ML learns a function from</span> <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['data', 'rules', 'CPUs', 'GPUs'],
              correctAnswer: 'data',
              explanation: 'Machine learning learns from data — labeled examples or observations.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Arrange the ML mindset shift in order.',
              tokens: ['Data', '+', 'Answers', '→', 'Rules'],
              correctOrder: ["Data", "+", "Answers", "→", "Rules"],
              explanation: 'Traditional: Data + Rules → Answers. ML: Data + Answers → Rules.'
            }
          ]
        },
        {
          id: 'ml-u1-l2',
          name: 'ML in the Real World',
          icon: '🌍',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Where you meet ML every day',
              content: `<p>ML quietly powers many products you use:</p>
                <ul>
                  <li><b>Spam filter</b> — classifies email as spam / not spam.</li>
                  <li><b>Recommendations</b> — Netflix, YouTube, Spotify.</li>
                  <li><b>Image recognition</b> — face unlock, photo tagging.</li>
                  <li><b>Translation</b> — Google Translate.</li>
                  <li><b>Voice assistants</b> — Siri, Alexa.</li>
                </ul>
                <p>Each of these used to be impossible to hand-code — too many edge cases. ML makes them tractable.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which of these is NOT a typical machine learning application?',
              options: [
                { text: 'Calculating compound interest with a fixed formula', code: false },
                { text: 'Filtering spam emails', code: false },
                { text: 'Recommending movies', code: false },
                { text: 'Recognizing faces in photos', code: false }
              ],
              correct: 0,
              explanation: 'Compound interest has a clean mathematical formula — no learning needed.'
            },
            {
              type: 'true-false',
              statement: 'Recommendation systems usually rely on patterns in past user behavior.',
              correct: true,
              explanation: 'They learn from your history and similar users to predict what you might like.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the product to the ML capability it relies on.',
              leftLabel: 'Product',
              rightLabel: 'Capability',
              pairs: [
                { left: 'Gmail spam folder', right: 'Text classification' },
                { left: 'Netflix homepage', right: 'Recommendation' },
                { left: 'Face Unlock', right: 'Image recognition' },
                { left: 'Google Translate', right: 'Sequence-to-sequence' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What does this pseudocode print?',
              code: `model = train(examples)
print(model.predict("WIN FREE MONEY NOW"))`,
              options: ['"spam"', '"not spam"', 'an error', 'the model itself'],
              correct: 0,
              explanation: 'A trained spam model would (very likely) classify that text as spam.'
            },
            {
              type: 'type-answer',
              prompt: 'A single labeled email is called a training ____ (one word).',
              code: '',
              accept: ['example', 'sample', 'instance'],
              explanation: 'Each labeled data point is a training example (also called sample or instance).'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u2',
      name: 'Unit 2 · The ML Pipeline',
      description: 'How a model actually gets built, from raw data to predictions.',
      lessons: [
        {
          id: 'ml-u2-l1',
          name: 'The 6-Step Pipeline',
          icon: '🔧',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'From raw data to predictions',
              content: `<p>Most ML projects follow the same recipe:</p>
                <ol>
                  <li><b>Data</b> — collect examples.</li>
                  <li><b>Features</b> — turn raw data into numbers.</li>
                  <li><b>Model</b> — choose an algorithm.</li>
                  <li><b>Train</b> — fit the model to data.</li>
                  <li><b>Evaluate</b> — measure performance.</li>
                  <li><b>Predict</b> — use it on new data.</li>
                </ol>
                <div class="code-block"><span class="kw">data</span> = load_csv(<span class="str">"emails.csv"</span>)<br>
                X, y = featurize(data)<br>
                model = <span class="fn">RandomForest</span>()<br>
                model.<span class="fn">fit</span>(X, y)<br>
                model.<span class="fn">score</span>(X_test, y_test)</div>`
            },
            {
              type: 'reorder-code',
              prompt: 'Put the ML pipeline steps in the right order.',
              lines: [
                'Collect data',
                'Extract features',
                'Choose a model',
                'Train the model',
                'Evaluate performance',
                'Predict on new data'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
              type: 'multiple-choice',
              prompt: 'What does "training" mean in ML?',
              options: [
                { text: 'Adjusting the model parameters so it fits the data.', code: false },
                { text: 'Running it on a GPU.', code: false },
                { text: 'Writing more code.', code: false },
                { text: 'Manually labeling data.', code: false }
              ],
              correct: 0,
              explanation: 'Training = tuning the internal numbers of the model to minimize error on training data.'
            },
            {
              type: 'true-false',
              statement: 'Feature engineering — turning raw data into useful numeric inputs — is often the most impactful step.',
              correct: true,
              explanation: 'Good features can make a simple model beat a fancy model with bad features.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the fit call.',
              codeLines: [
                { html: 'model.<span class="fn">_BLANK_</span>(X_train, y_train)' }
              ],
              tokens: ['fit', 'predict', 'score', 'compile'],
              correctAnswer: 'fit',
              explanation: 'fit(X, y) trains the model on inputs X with labels y.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the predict call.',
              tokens: ['model', '.', 'predict', '(', 'X_new', ')'],
              correctOrder: ["model", ".", "predict", "(", "X_new", ")"],
              explanation: 'After training, model.predict(X_new) returns predicted labels for new data.'
            }
          ]
        },
        {
          id: 'ml-u2-l2',
          name: 'Train / Validation / Test',
          icon: '📊',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Why we split data three ways',
              content: `<p>You never evaluate a model on the same data it learned from — it would just "memorize".</p>
                <ul>
                  <li><b>Training set</b> (~70%) — model learns from this.</li>
                  <li><b>Validation set</b> (~15%) — tune hyperparameters.</li>
                  <li><b>Test set</b> (~15%) — final unseen score.</li>
                </ul>
                <div class="code-block">X_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(X, y, test_size=<span class="num">0.2</span>)</div>
                <p>The test set is sacred — don't peek at it until the very end.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why do we split data into train and test?',
              options: [
                { text: 'To estimate how well the model generalizes to new data.', code: false },
                { text: 'To make training faster.', code: false },
                { text: 'Because libraries require it.', code: false },
                { text: 'To balance class labels.', code: false }
              ],
              correct: 0,
              explanation: 'The test set simulates "new" data the model has never seen.'
            },
            {
              type: 'true-false',
              statement: 'If a model gets 99% on training data but 60% on test data, it has likely overfit.',
              correct: true,
              explanation: 'A big gap between train and test accuracy is the classic overfitting signal.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the split to its purpose.',
              leftLabel: 'Split',
              rightLabel: 'Purpose',
              pairs: [
                { left: 'Training set', right: 'Fit the model' },
                { left: 'Validation set', right: 'Tune hyperparameters' },
                { left: 'Test set', right: 'Final unbiased score' },
                { left: 'Holdout', right: 'Reserved unseen data' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What does test_size=0.2 mean here?',
              code: `train_test_split(X, y, test_size=0.2)`,
              options: [
                '20% of data is reserved for testing',
                '20% accuracy is required',
                'Only 20 samples go to test',
                'Test size is irrelevant'
              ],
              correct: 0,
              explanation: 'test_size=0.2 reserves 20% for testing; the rest is for training.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the split call.',
              codeLines: [
                { html: 'X_train, X_test = <span class="fn">_BLANK_</span>(X, test_size=0.2)' }
              ],
              tokens: ['train_test_split', 'split', 'partition', 'shuffle'],
              correctAnswer: 'train_test_split',
              explanation: 'train_test_split is the standard scikit-learn function for splitting data.'
            },
            {
              type: 'type-answer',
              prompt: 'A model that does great on train but poorly on test is said to have ______.',
              code: '',
              accept: ['overfit', 'overfitted', 'overfitting'],
              explanation: 'Overfitting = memorizing training data without generalizing.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u3',
      name: 'Unit 3 · Types of ML',
      description: 'Supervised, unsupervised, reinforcement — and the in-betweens.',
      lessons: [
        {
          id: 'ml-u3-l1',
          name: 'Supervised vs Unsupervised',
          icon: '🏷️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'With labels vs without',
              content: `<p><b>Supervised learning</b> = you have input → output pairs (X, y). The model learns to predict y from X.</p>
                <p>Examples: spam detection, price prediction, image classification.</p>
                <p><b>Unsupervised learning</b> = only X, no labels. The model finds structure in the data.</p>
                <p>Examples: customer segmentation, anomaly detection, topic modeling.</p>
                <div class="code-block"><span class="com"># Supervised: (X, y) pairs</span><br>
                model.<span class="fn">fit</span>(X, y)<br>
                <br>
                <span class="com"># Unsupervised: only X</span><br>
                model.<span class="fn">fit</span>(X)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which task is unsupervised?',
              options: [
                { text: 'Grouping customers into similar segments without predefined labels', code: false },
                { text: 'Predicting house price from features', code: false },
                { text: 'Classifying handwritten digits 0-9', code: false },
                { text: 'Detecting tumor type from MRI', code: false }
              ],
              correct: 0,
              explanation: 'Customer segmentation has no target labels — it finds groups on its own.'
            },
            {
              type: 'true-false',
              statement: 'Supervised learning requires labeled training data.',
              correct: true,
              explanation: 'By definition — supervised = learning with a "supervisor" providing labels.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each task to its learning type.',
              leftLabel: 'Task',
              rightLabel: 'Type',
              pairs: [
                { left: 'Email → spam/not spam', right: 'Supervised' },
                { left: 'Group articles by topic', right: 'Unsupervised' },
                { left: 'Predict tomorrow\'s temperature', right: 'Supervised' },
                { left: 'Find weird credit card charges', right: 'Unsupervised' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap the words that describe SUPERVISED learning.',
              tokens: ['labels', 'X_and_y', 'no_labels', 'clusters', 'targets'],
              correctOrder: ["labels", "X_and_y", "targets"],
              explanation: 'Supervised needs labels (y), X & y pairs, and predicts targets.'
            },
            {
              type: 'type-answer',
              prompt: 'Learning patterns without labels is called ____________ learning.',
              code: '',
              accept: ['unsupervised'],
              explanation: 'Unsupervised learning finds structure in unlabeled data.'
            }
          ]
        },
        {
          id: 'ml-u3-l2',
          name: 'Reinforcement & Beyond',
          icon: '🎮',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Reward signals and modern hybrids',
              content: `<p><b>Reinforcement learning (RL)</b> — an agent acts in an environment and gets rewards. It learns a policy that maximizes total reward.</p>
                <p>Examples: AlphaGo, game-playing AIs, robot control.</p>
                <p><b>Semi-supervised</b> — a few labels plus lots of unlabeled data.</p>
                <p><b>Self-supervised</b> — the data labels itself (e.g., predict the next word). This is how modern LLMs train.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which paradigm best describes how a robot learns to walk by trial and error?',
              options: [
                { text: 'Reinforcement learning', code: false },
                { text: 'Supervised learning', code: false },
                { text: 'Unsupervised learning', code: false },
                { text: 'Self-supervised learning', code: false }
              ],
              correct: 0,
              explanation: 'Trial and error with reward signals is the hallmark of RL.'
            },
            {
              type: 'true-false',
              statement: 'Self-supervised learning generates labels from the data itself (e.g., predict the next token).',
              correct: true,
              explanation: 'LLMs are trained self-supervised — text becomes its own label.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the paradigm to a real-world system.',
              leftLabel: 'Paradigm',
              rightLabel: 'System',
              pairs: [
                { left: 'Reinforcement', right: 'AlphaGo' },
                { left: 'Supervised', right: 'Image classifier' },
                { left: 'Unsupervised', right: 'Customer clustering' },
                { left: 'Self-supervised', right: 'GPT-style LLM' }
              ]
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the main ingredient in reinforcement learning?',
              options: [
                { text: 'A reward signal from the environment.', code: false },
                { text: 'A large labeled dataset.', code: false },
                { text: 'Pretrained word embeddings.', code: false },
                { text: 'Manual rules.', code: false }
              ],
              correct: 0,
              explanation: 'Reward shapes behavior — that\'s what RL optimizes.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the sentence.',
              codeLines: [
                { html: '<span class="com"># RL: agent maximizes</span> <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['reward', 'loss', 'memory', 'features'],
              correctAnswer: 'reward',
              explanation: 'In RL the agent learns to maximize cumulative reward.'
            },
            {
              type: 'type-answer',
              prompt: 'A few labels + many unlabeled examples = ____-supervised learning.',
              code: '',
              accept: ['semi'],
              explanation: 'Semi-supervised mixes a small labeled set with a large unlabeled one.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u4',
      name: 'Unit 4 · Features & Labels',
      description: 'The raw materials of every ML model.',
      lessons: [
        {
          id: 'ml-u4-l1',
          name: 'Features and Targets',
          icon: '📐',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'X and y',
              content: `<p>In supervised ML:</p>
                <ul>
                  <li><b>Features (X)</b> — the inputs. Often a 2D matrix: rows = examples, columns = features.</li>
                  <li><b>Labels / Targets (y)</b> — the outputs the model tries to predict.</li>
                </ul>
                <div class="code-block"><span class="com"># House price prediction</span><br>
                X = [[<span class="num">3</span>, <span class="num">1200</span>, <span class="num">2</span>], <span class="com"># bedrooms, sqft, baths</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp; [<span class="num">4</span>, <span class="num">1800</span>, <span class="num">3</span>]]<br>
                y = [<span class="num">350000</span>, <span class="num">510000</span>]</div>
                <p>Each row is one example. Each column is one feature.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In supervised learning, what is X typically?',
              options: [
                { text: 'A matrix of input features, one row per example.', code: false },
                { text: 'The label of the output.', code: false },
                { text: 'A single number.', code: false },
                { text: 'The trained model.', code: false }
              ],
              correct: 0,
              explanation: 'X holds the inputs — usually a 2D array shaped (n_samples, n_features).'
            },
            {
              type: 'true-false',
              statement: 'Each row of X represents a single training example.',
              correct: true,
              explanation: 'Rows = examples (samples), columns = features.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the variable to what it usually holds.',
              leftLabel: 'Variable',
              rightLabel: 'Holds',
              pairs: [
                { left: 'X', right: 'Features (inputs)' },
                { left: 'y', right: 'Labels (outputs)' },
                { left: 'n_samples', right: 'Number of rows' },
                { left: 'n_features', right: 'Number of columns' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What is the shape of X?',
              code: `X = [[1, 2, 3],
     [4, 5, 6]]`,
              options: ['(2, 3)', '(3, 2)', '(6,)', '(1, 6)'],
              correct: 0,
              explanation: '2 rows, 3 columns — so shape is (2, 3).'
            },
            {
              type: 'fill-blank',
              prompt: 'Pick the variable that holds labels.',
              codeLines: [
                { html: 'model.<span class="fn">fit</span>(X, <span class="fn">_BLANK_</span>)' }
              ],
              tokens: ['y', 'X', 'z', 'lr'],
              correctAnswer: 'y',
              explanation: 'y is the conventional name for labels / targets.'
            }
          ]
        },
        {
          id: 'ml-u4-l2',
          name: 'Encoding Categories',
          icon: '🔤',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Numbers in, numbers out',
              content: `<p>Most ML models only accept numbers. Categorical features (like color or city) need encoding.</p>
                <ul>
                  <li><b>Label encoding</b> — assign each category a number (red=0, blue=1, green=2). Good for tree models.</li>
                  <li><b>One-hot encoding</b> — one binary column per category. Avoids fake ordering.</li>
                </ul>
                <div class="code-block"><span class="com"># color = red → [1, 0, 0]</span><br>
                <span class="com"># color = blue → [0, 1, 0]</span><br>
                <span class="com"># color = green → [0, 0, 1]</span></div>
                <p>One-hot is safer for linear models because numbers shouldn't imply ordering of unrelated categories.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why prefer one-hot over label encoding for linear models?',
              options: [
                { text: 'Label encoding implies a false numeric ordering between categories.', code: false },
                { text: 'One-hot uses less memory.', code: false },
                { text: 'Label encoding doesn\'t work with Python.', code: false },
                { text: 'One-hot is always more accurate.', code: false }
              ],
              correct: 0,
              explanation: 'red=0, blue=1, green=2 falsely tells the model green > blue > red.'
            },
            {
              type: 'true-false',
              statement: 'Numerical features can be continuous (e.g., height) or discrete (e.g., count of rooms).',
              correct: true,
              explanation: 'Both are numeric — height is real-valued, count is integer-valued.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the feature to its type.',
              leftLabel: 'Feature',
              rightLabel: 'Type',
              pairs: [
                { left: 'Height in cm', right: 'Numerical (continuous)' },
                { left: 'Number of pets', right: 'Numerical (discrete)' },
                { left: 'Eye color', right: 'Categorical' },
                { left: 'City name', right: 'Categorical' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'One-hot encoding of "blue" given [red, blue, green]?',
              code: `categories = ["red","blue","green"]
one_hot("blue")`,
              options: ['[0, 1, 0]', '[1, 0, 0]', '[0, 0, 1]', '[1, 1, 0]'],
              correct: 0,
              explanation: 'blue is the second category, so the second slot is 1.'
            },
            {
              type: 'fill-blank',
              prompt: 'Pick the right encoder.',
              codeLines: [
                { html: 'encoder = <span class="fn">_BLANK_</span>(sparse=False)' }
              ],
              tokens: ['OneHotEncoder', 'StandardScaler', 'PCA', 'KMeans'],
              correctAnswer: 'OneHotEncoder',
              explanation: 'OneHotEncoder converts categorical columns to binary indicator columns.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap the categorical features.',
              tokens: ['age', 'country', 'salary', 'gender', 'height'],
              correctOrder: ["country", "gender"],
              explanation: 'country and gender are categorical; age, salary, height are numeric.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u5',
      name: 'Unit 5 · Data Preprocessing',
      description: 'Real data is messy — clean and scale before training.',
      lessons: [
        {
          id: 'ml-u5-l1',
          name: 'Missing & Messy Data',
          icon: '🧹',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Handling holes and outliers',
              content: `<p>Real datasets have missing values (NaN), outliers, and typos.</p>
                <p><b>Missing values</b> options:</p>
                <ul>
                  <li>Drop rows (if few missing)</li>
                  <li>Fill with mean / median / mode (imputation)</li>
                  <li>Use a special "missing" indicator</li>
                </ul>
                <p><b>Outliers</b> are extreme points that can skew training. Detect with z-scores or IQR.</p>
                <div class="code-block">df[<span class="str">"age"</span>] = df[<span class="str">"age"</span>].<span class="fn">fillna</span>(df[<span class="str">"age"</span>].<span class="fn">median</span>())</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A column has 1% missing values. A common strategy is:',
              options: [
                { text: 'Impute with the median.', code: false },
                { text: 'Delete the whole column.', code: false },
                { text: 'Replace with random text.', code: false },
                { text: 'Ignore and pass NaN to the model.', code: false }
              ],
              correct: 0,
              explanation: 'Median imputation is a safe default — robust to outliers.'
            },
            {
              type: 'true-false',
              statement: 'Outliers can disproportionately move a linear regression line.',
              correct: true,
              explanation: 'Squared error gives extreme points outsized influence.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fill missing values with the median.',
              codeLines: [
                { html: 'df[<span class="str">"x"</span>].<span class="fn">_BLANK_</span>(df[<span class="str">"x"</span>].median(), inplace=True)' }
              ],
              tokens: ['fillna', 'dropna', 'isna', 'replace'],
              correctAnswer: 'fillna',
              explanation: 'fillna() replaces NaN with a chosen value.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the issue to a fix.',
              leftLabel: 'Issue',
              rightLabel: 'Fix',
              pairs: [
                { left: 'Missing numeric value', right: 'Impute median' },
                { left: 'Missing category', right: 'Impute mode' },
                { left: 'Extreme outlier', right: 'Clip or remove' },
                { left: 'Duplicate rows', right: 'drop_duplicates()' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `import pandas as pd
df = pd.DataFrame({"x":[1, None, 3]})
print(df["x"].fillna(0).tolist())`,
              options: ['[1.0, 0, 3.0]', '[1, NaN, 3]', '[1, 1, 3]', 'error'],
              correct: 0,
              explanation: 'fillna(0) replaces NaN with 0.'
            }
          ]
        },
        {
          id: 'ml-u5-l2',
          name: 'Scaling Features',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Normalize vs standardize',
              content: `<p>If one feature is in millions and another is 0-1, the big one dominates distance calculations and gradients.</p>
                <ul>
                  <li><b>Normalization (min-max)</b> — rescales to [0, 1].</li>
                  <li><b>Standardization (z-score)</b> — mean 0, std 1.</li>
                </ul>
                <div class="code-block"><span class="com"># Standardization</span><br>
                z = (x - x.<span class="fn">mean</span>()) / x.<span class="fn">std</span>()</div>
                <p>Always fit the scaler on training data, then transform both train and test with that same scaler.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which algorithms are most sensitive to feature scale?',
              options: [
                { text: 'KNN, SVM, neural networks, gradient descent–based linear/logistic regression', code: false },
                { text: 'Decision trees and random forests', code: false },
                { text: 'Naive Bayes', code: false },
                { text: 'Rule-based systems', code: false }
              ],
              correct: 0,
              explanation: 'Distance-based and gradient-based methods care about scale. Trees do not.'
            },
            {
              type: 'true-false',
              statement: 'You should fit the scaler on training data only, then transform the test set with it.',
              correct: true,
              explanation: 'Fitting on test data leaks information — a common subtle bug.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the scaler.',
              codeLines: [
                { html: 'scaler = <span class="fn">_BLANK_</span>()' },
                { html: 'X_train_s = scaler.<span class="fn">fit_transform</span>(X_train)' }
              ],
              tokens: ['StandardScaler', 'OneHotEncoder', 'PCA', 'KMeans'],
              correctAnswer: 'StandardScaler',
              explanation: 'StandardScaler subtracts mean and divides by std.'
            },
            {
              type: 'output-predict',
              prompt: 'Standardize [10, 20, 30] (mean=20, std≈8.16).',
              code: `x = [10, 20, 30]
z = (x - mean(x)) / std(x)`,
              options: ['Approx [-1.22, 0, 1.22]', '[0, 0.5, 1]', '[10, 20, 30]', '[-10, 0, 10]'],
              correct: 0,
              explanation: 'Subtract mean (20), divide by std (~8.16) → approx [-1.22, 0, 1.22].'
            },
            {
              type: 'match-pairs',
              prompt: 'Match scaling method to formula.',
              leftLabel: 'Method',
              rightLabel: 'Formula',
              pairs: [
                { left: 'Min-max', right: '(x - min) / (max - min)' },
                { left: 'Z-score', right: '(x - mean) / std' },
                { left: 'Robust', right: '(x - median) / IQR' },
                { left: 'Log', right: 'log(1 + x)' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'Rescaling to mean 0 and std 1 is called __________.',
              code: '',
              accept: ['standardization', 'z-score', 'standardisation'],
              explanation: 'Standardization (z-score) gives mean 0, std 1.'
            }
          ]
        }
      ]
    }
    ,
    {
      id: 'ml-u6',
      name: 'Unit 6 · Linear Regression',
      description: 'Fit a line to predict a number.',
      lessons: [
        {
          id: 'ml-u6-l1',
          name: 'y = mx + b',
          icon: '📈',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The simplest model',
              content: `<p>Linear regression assumes y is a linear function of x:</p>
                <div class="code-block">y = m · x + b</div>
                <p>m is the <b>slope</b> (how much y changes per unit of x). b is the <b>intercept</b>.</p>
                <p>For many features:</p>
                <div class="code-block">y = w₁x₁ + w₂x₂ + ... + wₙxₙ + b</div>
                <p>Training = finding the w's and b that minimize total error.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In y = mx + b, what does b represent?',
              options: [
                { text: 'The intercept — value of y when x = 0.', code: false },
                { text: 'The slope.', code: false },
                { text: 'The error.', code: false },
                { text: 'A bias toward higher values.', code: false }
              ],
              correct: 0,
              explanation: 'b is where the line crosses the y-axis.'
            },
            {
              type: 'true-false',
              statement: 'Linear regression predicts continuous numeric outputs.',
              correct: true,
              explanation: 'It outputs a real number — for categories use logistic regression.'
            },
            {
              type: 'output-predict',
              prompt: 'If m = 2, b = 1, what is y for x = 3?',
              code: `y = 2 * 3 + 1`,
              options: ['7', '6', '3', '8'],
              correct: 0,
              explanation: '2 * 3 = 6, + 1 = 7.'
            },
            {
              type: 'fill-blank',
              prompt: 'Train a linear model.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>()' },
                { html: 'model.<span class="fn">fit</span>(X, y)' }
              ],
              tokens: ['LinearRegression', 'KMeans', 'DecisionTree', 'SVM'],
              correctAnswer: 'LinearRegression',
              explanation: 'LinearRegression fits a line to data.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the symbol to its meaning.',
              leftLabel: 'Symbol',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'm', right: 'Slope' },
                { left: 'b', right: 'Intercept' },
                { left: 'x', right: 'Input' },
                { left: 'y', right: 'Predicted output' }
              ]
            }
          ]
        },
        {
          id: 'ml-u6-l2',
          name: 'Least Squares & MSE',
          icon: '📏',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'How "best fit" is measured',
              content: `<p>For each example we compute an <b>error (residual)</b>: predicted - actual.</p>
                <p>The <b>Mean Squared Error (MSE)</b> is:</p>
                <div class="code-block">MSE = (1/n) Σ (yᵢ - ŷᵢ)²</div>
                <p>We square so positive and negative errors don't cancel and larger errors are penalized more.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why square the errors?',
              options: [
                { text: 'So +/- errors don\'t cancel and big errors get bigger penalty.', code: false },
                { text: 'To make the math harder.', code: false },
                { text: 'Squaring is faster than abs.', code: false },
                { text: 'For unit conversion.', code: false }
              ],
              correct: 0,
              explanation: 'Squaring also gives a smooth, differentiable loss.'
            },
            {
              type: 'output-predict',
              prompt: 'Compute MSE.',
              code: `y_true = [3, 5, 7]
y_pred = [2, 5, 9]
mse = mean((y_true - y_pred)^2)`,
              options: ['Approx 1.67', '0', '5', '10'],
              correct: 0,
              explanation: 'Errors -1, 0, 2 → squares 1, 0, 4 → mean ≈ 1.67.'
            },
            {
              type: 'true-false',
              statement: 'MSE punishes large errors more than small ones.',
              correct: true,
              explanation: 'An error of 4 contributes 16x more than an error of 1.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute MSE.',
              codeLines: [
                { html: 'mse = ((y_true - y_pred) <span class="fn">_BLANK_</span> 2).mean()' }
              ],
              tokens: ['**', '*', '+', '-'],
              correctAnswer: '**',
              explanation: '** is the exponent operator.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the MSE formula.',
              tokens: ['(1/n)', 'Σ', '(yᵢ', '-', 'ŷᵢ)²'],
              correctOrder: ["(1/n)", "Σ", "(yᵢ", "-", "ŷᵢ)²"],
              explanation: 'MSE = mean of squared residuals.'
            }
          ]
        },
        {
          id: 'ml-u6-l3',
          name: 'Interpreting Coefficients',
          icon: '🔍',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'What do the weights mean?',
              content: `<p>In y = w₁·sqft + w₂·beds + b, w₁ says: "increasing sqft by 1 changes predicted price by w₁, holding others fixed".</p>
                <div class="code-block">model.coef_   <span class="com"># weights</span><br>
                model.intercept_</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'If w_sqft = 150 in a price model, it means:',
              options: [
                { text: 'Each extra sqft adds 150 to predicted price.', code: false },
                { text: 'Price is always 150.', code: false },
                { text: 'sqft is unimportant.', code: false },
                { text: 'Slope is negative.', code: false }
              ],
              correct: 0,
              explanation: 'Linear coefficient = per-unit effect.'
            },
            {
              type: 'true-false',
              statement: 'A negative coefficient means that feature decreases the prediction.',
              correct: true,
              explanation: 'Sign of coefficient = direction of effect.'
            },
            {
              type: 'output-predict',
              prompt: 'Predict price.',
              code: `w_sqft = 100; w_beds = 5000; b = 20000
price = 100*1500 + 5000*3 + 20000`,
              options: ['185000', '170000', '20000', '155000'],
              correct: 0,
              explanation: '150000 + 15000 + 20000 = 185000.'
            },
            {
              type: 'match-pairs',
              prompt: 'Attribute → contents.',
              leftLabel: 'Attribute',
              rightLabel: 'Holds',
              pairs: [
                { left: 'model.coef_', right: 'Feature weights' },
                { left: 'model.intercept_', right: 'Bias b' },
                { left: 'model.predict()', right: 'Predictions' },
                { left: 'model.score()', right: 'R²' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Get coefficients.',
              codeLines: [
                { html: '<span class="fn">print</span>(model.<span class="fn">_BLANK_</span>)' }
              ],
              tokens: ['coef_', 'predict_', 'fit_', 'score_'],
              correctAnswer: 'coef_',
              explanation: 'model.coef_ holds learned weights.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u7',
      name: 'Unit 7 · Gradient Descent',
      description: 'The optimizer behind most ML models.',
      lessons: [
        {
          id: 'ml-u7-l1',
          name: 'Rolling Down the Hill',
          icon: '⛰️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Finding the minimum',
              content: `<p>Imagine the loss function as a hilly landscape. <b>Gradient descent</b> says: at each step, find the steepest downhill direction, take a small step.</p>
                <div class="code-block"><span class="kw">for</span> step <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1000</span>):<br>
                &nbsp;&nbsp;grad = <span class="fn">compute_gradient</span>(loss, w)<br>
                &nbsp;&nbsp;w = w - lr * grad</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why subtract the gradient?',
              options: [
                { text: 'Gradient points uphill; we want downhill.', code: false },
                { text: 'To save memory.', code: false },
                { text: 'Convention, no meaning.', code: false },
                { text: 'To avoid negatives.', code: false }
              ],
              correct: 0,
              explanation: 'Gradient = steepest ascent. Subtract → descent.'
            },
            {
              type: 'true-false',
              statement: 'Gradient descent updates parameters iteratively to reduce loss.',
              correct: true,
              explanation: 'Each step nudges w to lower the loss.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the GD steps.',
              lines: [
                'Initialize w randomly',
                'Compute predictions',
                'Compute loss',
                'Compute gradient of loss',
                'Update w = w - lr * grad',
                'Repeat'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the update rule.',
              codeLines: [
                { html: 'w = w <span class="fn">_BLANK_</span> lr * grad' }
              ],
              tokens: ['-', '+', '*', '/'],
              correctAnswer: '-',
              explanation: 'We subtract to go downhill.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the update step.',
              tokens: ['w', '=', 'w', '-', 'lr', '*', 'grad'],
              correctOrder: ["w", "=", "w", "-", "lr", "*", "grad"],
              explanation: 'Classic GD update.'
            }
          ]
        },
        {
          id: 'ml-u7-l2',
          name: 'The Learning Rate',
          icon: '🎚️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'How big a step?',
              content: `<p>The learning rate (lr or α) controls step size.</p>
                <ul>
                  <li><b>Too small</b> — training crawls.</li>
                  <li><b>Too large</b> — overshoots, diverges.</li>
                  <li><b>Just right</b> — smooth descent.</li>
                </ul>
                <p>Typical values: 0.1, 0.01, 0.001.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Training loss is exploding upward. Likely cause?',
              options: [
                { text: 'Learning rate too high.', code: false },
                { text: 'Learning rate too low.', code: false },
                { text: 'Too much data.', code: false },
                { text: 'Wrong language.', code: false }
              ],
              correct: 0,
              explanation: 'Big steps overshoot the minimum.'
            },
            {
              type: 'true-false',
              statement: 'A learning rate that is too small can make training too slow.',
              correct: true,
              explanation: 'Tiny steps need many iterations.'
            },
            {
              type: 'match-pairs',
              prompt: 'Symptom → cause.',
              leftLabel: 'Symptom',
              rightLabel: 'Cause',
              pairs: [
                { left: 'Loss diverges', right: 'lr too high' },
                { left: 'Loss barely changes', right: 'lr too low' },
                { left: 'Loss oscillates', right: 'lr a bit high' },
                { left: 'Smooth steady drop', right: 'lr just right' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Compute next w. w=10, lr=0.1, grad=4.',
              code: `w = 10 - 0.1 * 4`,
              options: ['9.6', '10.4', '6', '14'],
              correct: 0,
              explanation: '10 - 0.4 = 9.6.'
            },
            {
              type: 'fill-blank',
              prompt: 'Safe default learning rate?',
              codeLines: [
                { html: 'lr = <span class="num">_BLANK_</span>' }
              ],
              tokens: ['0.01', '100', '1000', '-1'],
              correctAnswer: '0.01',
              explanation: '0.01 is a common default.'
            }
          ]
        },
        {
          id: 'ml-u7-l3',
          name: 'Partial Derivatives',
          icon: '∂',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'One direction at a time',
              content: `<p>For many parameters, the gradient is a vector of <b>partial derivatives</b>: one slope per parameter.</p>
                <div class="code-block">wᵢ = wᵢ - lr * ∂L/∂wᵢ</div>
                <p>Autodiff (e.g. PyTorch) computes these for you.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: '∂L/∂w₁ measures:',
              options: [
                { text: 'How loss changes if we tweak w₁ a tiny bit.', code: false },
                { text: 'Total loss.', code: false },
                { text: 'Number of parameters.', code: false },
                { text: 'Learning rate.', code: false }
              ],
              correct: 0,
              explanation: 'The slope of loss along w₁.'
            },
            {
              type: 'true-false',
              statement: 'Frameworks compute gradients automatically (autodiff).',
              correct: true,
              explanation: 'PyTorch and TF do this for you.'
            },
            {
              type: 'fill-blank',
              prompt: 'PyTorch backprop call.',
              codeLines: [
                { html: 'loss.<span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['backward', 'forward', 'fit', 'predict'],
              correctAnswer: 'backward',
              explanation: 'loss.backward() computes gradients.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the update.',
              tokens: ['wᵢ', '-=', 'lr', '*', '∂L/∂wᵢ'],
              correctOrder: ["wᵢ", "-=", "lr", "*", "∂L/∂wᵢ"],
              explanation: 'Each weight updated by its partial.'
            },
            {
              type: 'match-pairs',
              prompt: 'Term → symbol.',
              leftLabel: 'Term',
              rightLabel: 'Symbol',
              pairs: [
                { left: 'Learning rate', right: 'α or lr' },
                { left: 'Gradient', right: '∇L' },
                { left: 'Partial', right: '∂L/∂w' },
                { left: 'Loss', right: 'L' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'GD moves in the ________ direction of the gradient.',
              code: '',
              accept: ['opposite', 'negative', 'downhill'],
              explanation: 'We descend, so we move opposite the gradient.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u8',
      name: 'Unit 8 · Logistic Regression',
      description: 'From regression to classification.',
      lessons: [
        {
          id: 'ml-u8-l1',
          name: 'Sigmoid & Probabilities',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Squashing to [0, 1]',
              content: `<p>Logistic regression predicts probabilities. Compute z = w·x + b, then squash with the <b>sigmoid</b>:</p>
                <div class="code-block">σ(z) = 1 / (1 + e^(-z))</div>
                <p>If σ(z) ≥ 0.5 → class 1, else class 0. That threshold is the <b>decision boundary</b>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Sigmoid output range?',
              options: [
                { text: '(0, 1)', code: false },
                { text: '(-1, 1)', code: false },
                { text: '(-∞, ∞)', code: false },
                { text: '[0, 100]', code: false }
              ],
              correct: 0,
              explanation: 'σ is bounded between 0 and 1.'
            },
            {
              type: 'true-false',
              statement: 'Logistic regression outputs probabilities.',
              correct: true,
              explanation: 'Thanks to the sigmoid.'
            },
            {
              type: 'output-predict',
              prompt: 'sigmoid(0) = ?',
              code: `1 / (1 + e^(-0))`,
              options: ['0.5', '0', '1', '−1'],
              correct: 0,
              explanation: '1 / (1 + 1) = 0.5.'
            },
            {
              type: 'fill-blank',
              prompt: 'Define sigmoid.',
              codeLines: [
                { html: '<span class="kw">def</span> <span class="fn">sigmoid</span>(z):' },
                { html: '&nbsp;&nbsp;<span class="kw">return</span> <span class="num">1</span> / (<span class="num">1</span> + <span class="fn">_BLANK_</span>(-z))' }
              ],
              tokens: ['exp', 'log', 'sqrt', 'abs'],
              correctAnswer: 'exp',
              explanation: 'exp(-z) is e^(-z).'
            },
            {
              type: 'match-pairs',
              prompt: 'Sigmoid behavior.',
              leftLabel: 'Input z',
              rightLabel: 'σ(z)',
              pairs: [
                { left: 'Large positive', right: 'Near 1' },
                { left: 'Large negative', right: 'Near 0' },
                { left: 'Zero', right: '0.5' },
                { left: 'Small positive', right: 'Just over 0.5' }
              ]
            }
          ]
        },
        {
          id: 'ml-u8-l2',
          name: 'Log-Loss',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Penalizing wrong confidence',
              content: `<p>Log-loss (binary cross-entropy):</p>
                <div class="code-block">L = -[ y·log(p) + (1-y)·log(1-p) ]</div>
                <p>Confidently wrong predictions are punished hardest. The <b>decision boundary</b> is where w·x + b = 0.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why log-loss over MSE for classification?',
              options: [
                { text: 'Strongly penalizes confidently wrong probabilities.', code: false },
                { text: 'Faster to compute.', code: false },
                { text: 'Needs less data.', code: false },
                { text: 'Always 0-1.', code: false }
              ],
              correct: 0,
              explanation: 'Log-loss → ∞ for confidently wrong predictions.'
            },
            {
              type: 'true-false',
              statement: 'Decision boundary is where w·x + b = 0.',
              correct: true,
              explanation: 'At z=0, σ=0.5.'
            },
            {
              type: 'output-predict',
              prompt: 'Predict class with threshold 0.5.',
              code: `p = 0.73
label = 1 if p >= 0.5 else 0`,
              options: ['1', '0', '0.73', 'error'],
              correct: 0,
              explanation: '0.73 ≥ 0.5 → 1.'
            },
            {
              type: 'fill-blank',
              prompt: 'Train a classifier.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['LogisticRegression', 'LinearRegression', 'KMeans', 'PCA'],
              correctAnswer: 'LogisticRegression',
              explanation: 'LogisticRegression handles binary classification.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order log-loss.',
              tokens: ['-', '[', 'y·log(p)', '+', '(1-y)·log(1-p)', ']'],
              correctOrder: ["-", "[", "y·log(p)", "+", "(1-y)·log(1-p)", "]"],
              explanation: 'Binary cross-entropy.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u9',
      name: 'Unit 9 · K-Nearest Neighbors',
      description: 'Predict by looking at the closest examples.',
      lessons: [
        {
          id: 'ml-u9-l1',
          name: 'Lazy Learning',
          icon: '🧭',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'No training, just memory',
              content: `<p>KNN stores all training data. To predict for a new point:</p>
                <ol>
                  <li>Compute distance to every training point.</li>
                  <li>Pick the K closest.</li>
                  <li>Classification: majority vote. Regression: average.</li>
                </ol>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How does KNN classify?',
              options: [
                { text: 'Majority vote of K nearest training points.', code: false },
                { text: 'Linear boundary.', code: false },
                { text: 'Gradient descent.', code: false },
                { text: 'Tree splits.', code: false }
              ],
              correct: 0,
              explanation: 'Neighborhood voting.'
            },
            {
              type: 'true-false',
              statement: 'KNN has essentially no training time, but prediction can be slow.',
              correct: true,
              explanation: 'Distances to all points are computed at prediction time.'
            },
            {
              type: 'output-predict',
              prompt: 'K=3 neighbors [1, 1, 0]. Predicted class?',
              code: `majority_vote([1, 1, 0])`,
              options: ['1', '0', 'tie', 'error'],
              correct: 0,
              explanation: 'Two 1s win.'
            },
            {
              type: 'fill-blank',
              prompt: 'Build the model.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>(n_neighbors=<span class="num">5</span>)' }
              ],
              tokens: ['KNeighborsClassifier', 'KMeans', 'LinearRegression', 'DecisionTree'],
              correctAnswer: 'KNeighborsClassifier',
              explanation: 'scikit-learn KNN classifier.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order KNN prediction.',
              tokens: ['compute_distances', 'sort', 'pick_K', 'vote'],
              correctOrder: ["compute_distances", "sort", "pick_K", "vote"],
              explanation: 'Distance → sort → pick top-K → vote.'
            }
          ]
        },
        {
          id: 'ml-u9-l2',
          name: 'Distances & K',
          icon: '📐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Geometry matters',
              content: `<p><b>Euclidean</b>: √Σ(xᵢ-yᵢ)². <b>Manhattan</b>: Σ|xᵢ-yᵢ|.</p>
                <p>K small → overfits noise. K large → underfits. Odd K avoids ties.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'K=1 tends to:',
              options: [
                { text: 'Overfit — sensitive to single noisy neighbors.', code: false },
                { text: 'Underfit.', code: false },
                { text: 'Be faster.', code: false },
                { text: 'Always be perfect.', code: false }
              ],
              correct: 0,
              explanation: 'One neighbor = vulnerable to outliers.'
            },
            {
              type: 'true-false',
              statement: 'KNN is sensitive to feature scale.',
              correct: true,
              explanation: 'Distance depends on raw magnitudes.'
            },
            {
              type: 'output-predict',
              prompt: 'Euclidean (0,0) to (3,4)?',
              code: `sqrt((3-0)^2 + (4-0)^2)`,
              options: ['5', '7', '12', '25'],
              correct: 0,
              explanation: '√25 = 5.'
            },
            {
              type: 'match-pairs',
              prompt: 'Distance → formula.',
              leftLabel: 'Metric',
              rightLabel: 'Formula',
              pairs: [
                { left: 'Euclidean', right: '√Σ(xᵢ-yᵢ)²' },
                { left: 'Manhattan', right: 'Σ|xᵢ-yᵢ|' },
                { left: 'Chebyshev', right: 'max |xᵢ-yᵢ|' },
                { left: 'Cosine', right: '1 - cosθ' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Use Manhattan.',
              codeLines: [
                { html: 'model = <span class="fn">KNeighborsClassifier</span>(n_neighbors=<span class="num">5</span>, p=<span class="num">_BLANK_</span>)' }
              ],
              tokens: ['1', '2', '0', '3'],
              correctAnswer: '1',
              explanation: 'p=1 is Manhattan.'
            },
            {
              type: 'type-answer',
              prompt: 'KNN also does __________ by averaging neighbors.',
              code: '',
              accept: ['regression'],
              explanation: 'For regression, KNN averages neighbor y-values.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u10',
      name: 'Unit 10 · Decision Trees',
      description: 'If/else machines that learn their own questions.',
      lessons: [
        {
          id: 'ml-u10-l1',
          name: 'Splits and Branches',
          icon: '🌳',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Twenty questions, learned',
              content: `<p>A tree asks yes/no questions and splits data:</p>
                <div class="code-block"><span class="kw">if</span> age &lt; <span class="num">30</span>:<br>
                &nbsp;&nbsp;<span class="kw">if</span> income &gt; <span class="num">50</span>k: predict <span class="str">"buy"</span><br>
                <span class="kw">else</span>: predict <span class="str">"no"</span></div>
                <p>Internal nodes are tests, leaves are predictions.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is a leaf?',
              options: [
                { text: 'A terminal node that outputs a prediction.', code: false },
                { text: 'The root.', code: false },
                { text: 'A feature.', code: false },
                { text: 'A loss.', code: false }
              ],
              correct: 0,
              explanation: 'Leaves hold final predictions.'
            },
            {
              type: 'true-false',
              statement: 'Trees handle numeric and categorical features.',
              correct: true,
              explanation: 'Both via thresholds or category membership.'
            },
            {
              type: 'reorder-code',
              prompt: 'Tree prediction.',
              lines: [
                'Start at root',
                'Evaluate test on input',
                'Go to child',
                'Repeat until leaf',
                'Return leaf prediction'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'fill-blank',
              prompt: 'Create tree.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>(max_depth=<span class="num">5</span>)' }
              ],
              tokens: ['DecisionTreeClassifier', 'KMeans', 'PCA', 'SVC'],
              correctAnswer: 'DecisionTreeClassifier',
              explanation: 'Standard tree classifier.'
            },
            {
              type: 'match-pairs',
              prompt: 'Term → meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Root', right: 'Top node' },
                { left: 'Internal node', right: 'Test' },
                { left: 'Leaf', right: 'Prediction' },
                { left: 'Depth', right: 'Longest path' }
              ]
            }
          ]
        },
        {
          id: 'ml-u10-l2',
          name: 'Gini & Entropy',
          icon: '📊',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'How "good" is a split?',
              content: `<p><b>Gini</b>: 1 - Σ pᵢ². <b>Entropy</b>: -Σ pᵢ log pᵢ. Both are 0 for pure nodes.</p>
                <p><b>Information gain</b> = impurity(parent) - weighted impurity(children).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Gini for all class-1 samples?',
              options: [
                { text: '0', code: false },
                { text: '1', code: false },
                { text: '0.5', code: false },
                { text: 'Undefined', code: false }
              ],
              correct: 0,
              explanation: 'Pure node = 0 impurity.'
            },
            {
              type: 'true-false',
              statement: 'Information gain measures impurity reduction.',
              correct: true,
              explanation: 'Higher gain = better split.'
            },
            {
              type: 'output-predict',
              prompt: 'Gini for [Yes, Yes, No]?',
              code: `1 - ((2/3)^2 + (1/3)^2)`,
              options: ['Approx 0.444', '0', '0.5', '1'],
              correct: 0,
              explanation: '1 - 5/9 ≈ 0.444.'
            },
            {
              type: 'fill-blank',
              prompt: 'Use entropy.',
              codeLines: [
                { html: 'model = <span class="fn">DecisionTreeClassifier</span>(criterion=<span class="str">_BLANK_</span>)' }
              ],
              tokens: ['"entropy"', '"gini"', '"mse"', '"log"'],
              correctAnswer: '"entropy"',
              explanation: 'criterion="entropy" uses info gain.'
            },
            {
              type: 'match-pairs',
              prompt: 'Distribution → Gini.',
              leftLabel: 'Distribution',
              rightLabel: 'Gini',
              pairs: [
                { left: '[1, 0]', right: '0' },
                { left: '[0.5, 0.5]', right: '0.5' },
                { left: '[0.9, 0.1]', right: '0.18' },
                { left: '[0.7, 0.3]', right: '0.42' }
              ]
            }
          ]
        },
        {
          id: 'ml-u10-l3',
          name: 'Depth & Overfitting',
          icon: '🪓',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Unpruned trees memorize',
              content: `<p>A deep tree fits training noise. Controls:</p>
                <ul>
                  <li>max_depth</li>
                  <li>min_samples_leaf</li>
                  <li>min_samples_split</li>
                  <li>Pruning</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: '100% train, 60% test means:',
              options: [
                { text: 'Overfit', code: false },
                { text: 'Underfit', code: false },
                { text: 'Calibrated', code: false },
                { text: 'Regularized', code: false }
              ],
              correct: 0,
              explanation: 'Big gap = overfit.'
            },
            {
              type: 'true-false',
              statement: 'Limiting max_depth regularizes trees.',
              correct: true,
              explanation: 'Shallow trees memorize less.'
            },
            {
              type: 'fill-blank',
              prompt: 'Limit depth.',
              codeLines: [
                { html: 'model = <span class="fn">DecisionTreeClassifier</span>(<span class="fn">_BLANK_</span>=<span class="num">4</span>)' }
              ],
              tokens: ['max_depth', 'depth', 'levels', 'n_leaves'],
              correctAnswer: 'max_depth',
              explanation: 'max_depth caps growth.'
            },
            {
              type: 'output-predict',
              prompt: 'max_depth=1 produces:',
              code: `DecisionTreeClassifier(max_depth=1).fit(X, y)`,
              options: ['A decision stump (one split).', 'An error.', 'A deep tree.', 'A linear model.'],
              correct: 0,
              explanation: 'Depth-1 tree = decision stump.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap regularizers for trees.',
              tokens: ['max_depth', 'learning_rate', 'min_samples_leaf', 'fit_intercept', 'min_samples_split'],
              correctOrder: ["max_depth", "min_samples_leaf", "min_samples_split"],
              explanation: 'Three depth/leaf hyperparameters.'
            },
            {
              type: 'type-answer',
              prompt: 'Cutting back branches is called __________.',
              code: '',
              accept: ['pruning'],
              explanation: 'Pruning removes weak splits.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u11',
      name: 'Unit 11 · Naive Bayes',
      description: 'Bayes\' theorem plus conditional independence.',
      lessons: [
        {
          id: 'ml-u11-l1',
          name: 'Bayes\' Theorem',
          icon: '🔁',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Updating beliefs',
              content: `<p>Bayes\' theorem:</p>
                <div class="code-block">P(A|B) = P(B|A) · P(A) / P(B)</div>
                <p>For classification:</p>
                <div class="code-block">P(class | features) ∝ P(features | class) · P(class)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'P(A) is called:',
              options: [
                { text: 'Prior', code: false },
                { text: 'Likelihood', code: false },
                { text: 'Posterior', code: false },
                { text: 'Evidence', code: false }
              ],
              correct: 0,
              explanation: 'P(A) is the prior.'
            },
            {
              type: 'true-false',
              statement: 'Bayes flips P(B|A) and P(A|B) given the right ingredients.',
              correct: true,
              explanation: 'That\'s the whole point.'
            },
            {
              type: 'match-pairs',
              prompt: 'Term → symbol.',
              leftLabel: 'Term',
              rightLabel: 'Symbol',
              pairs: [
                { left: 'Prior', right: 'P(A)' },
                { left: 'Likelihood', right: 'P(B|A)' },
                { left: 'Posterior', right: 'P(A|B)' },
                { left: 'Evidence', right: 'P(B)' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'P(spam|"free")?',
              code: `# P(free|spam)=0.8, P(spam)=0.4, P(free)=0.5
posterior = 0.8 * 0.4 / 0.5`,
              options: ['0.64', '0.4', '0.8', '1.0'],
              correct: 0,
              explanation: '0.32 / 0.5 = 0.64.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build Bayes.',
              tokens: ['P(A|B)', '=', 'P(B|A)', '·', 'P(A)', '/', 'P(B)'],
              correctOrder: ["P(A|B)", "=", "P(B|A)", "·", "P(A)", "/", "P(B)"],
              explanation: 'Bayes rule.'
            }
          ]
        },
        {
          id: 'ml-u11-l2',
          name: 'Naive Independence',
          icon: '📧',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A useful lie',
              content: `<p>Assume features are conditionally independent given the class:</p>
                <div class="code-block">P(x₁,...,xₙ | class) = Π P(xᵢ | class)</div>
                <p>Variants: Gaussian (continuous), Multinomial (counts), Bernoulli (binary).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is naive about Naive Bayes?',
              options: [
                { text: 'Assuming features are independent given the class.', code: false },
                { text: 'Assuming classes equal.', code: false },
                { text: 'Assuming data is normal.', code: false },
                { text: 'Avoiding math.', code: false }
              ],
              correct: 0,
              explanation: 'Conditional-independence assumption.'
            },
            {
              type: 'true-false',
              statement: 'Naive Bayes performs well on text despite its assumption.',
              correct: true,
              explanation: 'Strong baseline for spam, sentiment.'
            },
            {
              type: 'match-pairs',
              prompt: 'Variant → data.',
              leftLabel: 'Variant',
              rightLabel: 'Data',
              pairs: [
                { left: 'Gaussian NB', right: 'Continuous' },
                { left: 'Multinomial NB', right: 'Counts' },
                { left: 'Bernoulli NB', right: 'Binary' },
                { left: 'Complement NB', right: 'Imbalanced text' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Use multinomial NB.',
              codeLines: [
                { html: 'from sklearn.naive_bayes import <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['MultinomialNB', 'KMeans', 'PCA', 'SVC'],
              correctAnswer: 'MultinomialNB',
              explanation: 'Go-to for bag-of-words.'
            },
            {
              type: 'output-predict',
              prompt: 'Picking class with NB:',
              code: `# argmax over classes`,
              options: [
                'Class with highest P(class) * Π P(feature|class).',
                'Smallest probability.',
                'Always spam.',
                'By feature alone.'
              ],
              correct: 0,
              explanation: 'Prior times product of likelihoods.'
            },
            {
              type: 'type-answer',
              prompt: 'The NB assumption is conditional ____________.',
              code: '',
              accept: ['independence'],
              explanation: 'Conditional independence given the class.'
            }
          ]
        }
      ]
    }
    ,
    {
      id: 'ml-u12',
      name: 'Unit 12 · Support Vector Machines',
      description: 'Find the widest margin between classes.',
      lessons: [
        {
          id: 'ml-u12-l1',
          name: 'Margins & Support Vectors',
          icon: '⚔️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Maximum margin classifier',
              content: `<p>SVM finds the hyperplane that separates two classes with the <b>widest possible margin</b>.</p>
                <p>The <b>support vectors</b> are the training points closest to the boundary — they\'re the only ones that matter.</p>
                <div class="code-block">model = <span class="fn">SVC</span>(kernel=<span class="str">"linear"</span>, C=<span class="num">1.0</span>)</div>
                <p>C controls how strict the margin is. Larger C = less tolerance for misclassification (smaller margin).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Support vectors are:',
              options: [
                { text: 'Training points closest to the decision boundary.', code: false },
                { text: 'The model\'s weights.', code: false },
                { text: 'All training points.', code: false },
                { text: 'Test set predictions.', code: false }
              ],
              correct: 0,
              explanation: 'They define the margin.'
            },
            {
              type: 'true-false',
              statement: 'SVM tries to maximize the margin between classes.',
              correct: true,
              explanation: 'Widest separating gap = better generalization.'
            },
            {
              type: 'fill-blank',
              prompt: 'Use linear SVM.',
              codeLines: [
                { html: 'model = <span class="fn">SVC</span>(kernel=<span class="str">_BLANK_</span>)' }
              ],
              tokens: ['"linear"', '"none"', '"flat"', '"l1"'],
              correctAnswer: '"linear"',
              explanation: 'kernel="linear" gives a linear SVM.'
            },
            {
              type: 'match-pairs',
              prompt: 'Concept → meaning.',
              leftLabel: 'Concept',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Margin', right: 'Gap around boundary' },
                { left: 'Support vector', right: 'Closest training point' },
                { left: 'Hyperplane', right: 'Decision boundary' },
                { left: 'C', right: 'Regularization strength' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Large C usually means:',
              code: `SVC(C=1000)`,
              options: ['Narrow margin, fewer mistakes on train.', 'Wider margin.', 'Linear only.', 'Uses entropy.'],
              correct: 0,
              explanation: 'High C penalizes mistakes more → narrower margin.'
            }
          ]
        },
        {
          id: 'ml-u12-l2',
          name: 'Kernels',
          icon: '🌀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Lifting to higher dimensions',
              content: `<p>If data isn\'t linearly separable, kernels project it into higher dimensions where a linear boundary works.</p>
                <ul>
                  <li><b>Linear</b> — no transformation.</li>
                  <li><b>Polynomial</b> — curves and bends.</li>
                  <li><b>RBF (Gaussian)</b> — bumps; very flexible.</li>
                </ul>
                <p>The "kernel trick" computes these without explicitly creating the new features.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use the kernel trick?',
              options: [
                { text: 'To get nonlinear boundaries without computing the new features explicitly.', code: false },
                { text: 'To save memory.', code: false },
                { text: 'To handle missing data.', code: false },
                { text: 'To pick K.', code: false }
              ],
              correct: 0,
              explanation: 'Math shortcut: compute dot products in the lifted space directly.'
            },
            {
              type: 'true-false',
              statement: 'RBF is a popular default kernel for nonlinear data.',
              correct: true,
              explanation: 'Flexible, often works well out of the box.'
            },
            {
              type: 'match-pairs',
              prompt: 'Kernel → behavior.',
              leftLabel: 'Kernel',
              rightLabel: 'Behavior',
              pairs: [
                { left: 'Linear', right: 'Straight boundary' },
                { left: 'Polynomial', right: 'Curves' },
                { left: 'RBF', right: 'Localized bumps' },
                { left: 'Sigmoid', right: 'Sigmoid-shaped' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Use RBF kernel.',
              codeLines: [
                { html: 'model = <span class="fn">SVC</span>(kernel=<span class="str">_BLANK_</span>, gamma=<span class="str">"scale"</span>)' }
              ],
              tokens: ['"rbf"', '"linear"', '"none"', '"euclid"'],
              correctAnswer: '"rbf"',
              explanation: '"rbf" is radial basis function.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap the SVM-relevant hyperparameters.',
              tokens: ['C', 'lr', 'kernel', 'gamma', 'max_depth'],
              correctOrder: ["C", "kernel", "gamma"],
              explanation: 'C, kernel, gamma are SVM hyperparameters.'
            },
            {
              type: 'type-answer',
              prompt: 'A kernel that creates localized bumps is called __________.',
              code: '',
              accept: ['rbf', 'gaussian', 'RBF'],
              explanation: 'RBF / Gaussian kernel.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u13',
      name: 'Unit 13 · K-Means Clustering',
      description: 'Find groups in unlabeled data.',
      lessons: [
        {
          id: 'ml-u13-l1',
          name: 'Centroids',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Group by closeness',
              content: `<p>K-means partitions data into K clusters. Each cluster has a <b>centroid</b> (mean position).</p>
                <p>Each point belongs to the cluster whose centroid is closest.</p>
                <div class="code-block">model = <span class="fn">KMeans</span>(n_clusters=<span class="num">3</span>)<br>
                model.<span class="fn">fit</span>(X)<br>
                labels = model.labels_</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A centroid is:',
              options: [
                { text: 'The mean position of all points in a cluster.', code: false },
                { text: 'The first point added.', code: false },
                { text: 'A label.', code: false },
                { text: 'A boundary.', code: false }
              ],
              correct: 0,
              explanation: 'Centroid = average of cluster members.'
            },
            {
              type: 'true-false',
              statement: 'K-means is unsupervised — there are no labels.',
              correct: true,
              explanation: 'Pure structure discovery.'
            },
            {
              type: 'fill-blank',
              prompt: 'Cluster into 3 groups.',
              codeLines: [
                { html: 'model = <span class="fn">KMeans</span>(<span class="fn">_BLANK_</span>=<span class="num">3</span>)' }
              ],
              tokens: ['n_clusters', 'n_neighbors', 'k', 'depth'],
              correctAnswer: 'n_clusters',
              explanation: 'n_clusters is the K.'
            },
            {
              type: 'match-pairs',
              prompt: 'Attribute → meaning.',
              leftLabel: 'Attribute',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'labels_', right: 'Cluster assignment per point' },
                { left: 'cluster_centers_', right: 'Centroid coordinates' },
                { left: 'inertia_', right: 'Sum of squared distances' },
                { left: 'n_iter_', right: 'Iterations until convergence' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Get cluster centers.',
              code: `model = KMeans(n_clusters=2).fit(X)
print(model.cluster_centers_.shape)`,
              options: ['(2, n_features)', '(n_features, 2)', '(n_samples,)', 'scalar'],
              correct: 0,
              explanation: 'One row per cluster, one column per feature.'
            }
          ]
        },
        {
          id: 'ml-u13-l2',
          name: 'The Algorithm',
          icon: '🔄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Assign → Update → Repeat',
              content: `<p>K-means iteration:</p>
                <ol>
                  <li>Init K centroids (e.g., randomly).</li>
                  <li>Assign each point to its nearest centroid.</li>
                  <li>Move each centroid to the mean of its points.</li>
                  <li>Repeat until centroids stop moving.</li>
                </ol>
                <p>Different random inits → different final clusters. Run multiple times (n_init) and pick the best.</p>`
            },
            {
              type: 'reorder-code',
              prompt: 'Order the K-means iteration.',
              lines: [
                'Initialize K centroids',
                'Assign each point to nearest centroid',
                'Recompute centroid as mean of assigned points',
                'Check for convergence',
                'Repeat if not converged'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'true-false',
              statement: 'K-means can converge to a local minimum depending on initialization.',
              correct: true,
              explanation: 'Why we run with multiple inits.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use k-means++ initialization?',
              options: [
                { text: 'It spreads initial centroids out, reducing bad-init risk.', code: false },
                { text: 'It runs faster.', code: false },
                { text: 'It is supervised.', code: false },
                { text: 'It picks K automatically.', code: false }
              ],
              correct: 0,
              explanation: 'k-means++ chooses far-apart starting centroids.'
            },
            {
              type: 'fill-blank',
              prompt: 'Run multiple inits.',
              codeLines: [
                { html: 'model = <span class="fn">KMeans</span>(n_clusters=<span class="num">3</span>, <span class="fn">_BLANK_</span>=<span class="num">10</span>)' }
              ],
              tokens: ['n_init', 'n_iter', 'random_state', 'tol'],
              correctAnswer: 'n_init',
              explanation: 'n_init = how many random restarts.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order one k-means step.',
              tokens: ['assign', 'points', 'update', 'centroids'],
              correctOrder: ["assign", "points", "update", "centroids"],
              explanation: 'Assign points, then update centroids.'
            }
          ]
        },
        {
          id: 'ml-u13-l3',
          name: 'Choosing K',
          icon: '📐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The elbow method',
              content: `<p>Plot inertia (sum of squared distances to centroids) vs K. The "elbow" — where the curve starts flattening — suggests a good K.</p>
                <div class="code-block"><span class="kw">for</span> k <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">11</span>):<br>
                &nbsp;&nbsp;m = <span class="fn">KMeans</span>(k).<span class="fn">fit</span>(X)<br>
                &nbsp;&nbsp;inertias.<span class="fn">append</span>(m.inertia_)</div>
                <p>Other tools: silhouette score, gap statistic.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'On an elbow plot, you pick K where:',
              options: [
                { text: 'Adding more clusters stops sharply decreasing inertia.', code: false },
                { text: 'Inertia is at its absolute minimum.', code: false },
                { text: 'K = number of features.', code: false },
                { text: 'K = number of samples.', code: false }
              ],
              correct: 0,
              explanation: 'The "bend" — diminishing returns.'
            },
            {
              type: 'true-false',
              statement: 'Silhouette score measures how well a point fits its own cluster vs neighbors.',
              correct: true,
              explanation: 'Higher = better separation.'
            },
            {
              type: 'output-predict',
              prompt: 'Inertia after fitting:',
              code: `model = KMeans(3).fit(X)
print(type(model.inertia_))`,
              options: ['float', 'list', 'matrix', 'string'],
              correct: 0,
              explanation: 'inertia_ is a scalar float.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute silhouette.',
              codeLines: [
                { html: 'score = <span class="fn">_BLANK_</span>(X, labels)' }
              ],
              tokens: ['silhouette_score', 'accuracy_score', 'mean_squared_error', 'log_loss'],
              correctAnswer: 'silhouette_score',
              explanation: 'sklearn.metrics.silhouette_score.'
            },
            {
              type: 'match-pairs',
              prompt: 'Method → use.',
              leftLabel: 'Method',
              rightLabel: 'Use',
              pairs: [
                { left: 'Elbow', right: 'Inertia vs K plot' },
                { left: 'Silhouette', right: 'Cluster cohesion score' },
                { left: 'Gap statistic', right: 'Compare to random' },
                { left: 'Domain knowledge', right: 'Business choice of K' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'The "bend" in the inertia plot is called the ________.',
              code: '',
              accept: ['elbow'],
              explanation: 'The elbow point.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u14',
      name: 'Unit 14 · Hierarchical & DBSCAN',
      description: 'Cluster without choosing K up front.',
      lessons: [
        {
          id: 'ml-u14-l1',
          name: 'Dendrograms & Density',
          icon: '🌲',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Beyond K-means',
              content: `<p><b>Hierarchical clustering</b>:</p>
                <ul>
                  <li><b>Agglomerative</b> (bottom-up): start with each point alone, merge nearest pairs.</li>
                  <li><b>Divisive</b> (top-down): start with all points together, split.</li>
                </ul>
                <p>Visualized as a <b>dendrogram</b>; cut at any height to choose K.</p>
                <p><b>DBSCAN</b>: density-based. Finds dense regions; points in low-density areas become noise. Doesn\'t need K.</p>
                <div class="code-block">model = <span class="fn">DBSCAN</span>(eps=<span class="num">0.5</span>, min_samples=<span class="num">5</span>)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which method labels low-density points as "noise"?',
              options: [
                { text: 'DBSCAN', code: false },
                { text: 'K-means', code: false },
                { text: 'Agglomerative', code: false },
                { text: 'PCA', code: false }
              ],
              correct: 0,
              explanation: 'DBSCAN explicitly tags outliers as label -1.'
            },
            {
              type: 'true-false',
              statement: 'A dendrogram lets you choose the number of clusters after fitting.',
              correct: true,
              explanation: 'Cut horizontally at any height.'
            },
            {
              type: 'match-pairs',
              prompt: 'Algorithm → key idea.',
              leftLabel: 'Algorithm',
              rightLabel: 'Idea',
              pairs: [
                { left: 'K-means', right: 'Centroids' },
                { left: 'Agglomerative', right: 'Merge bottom-up' },
                { left: 'Divisive', right: 'Split top-down' },
                { left: 'DBSCAN', right: 'Density regions' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'DBSCAN parameters.',
              codeLines: [
                { html: 'model = <span class="fn">DBSCAN</span>(<span class="fn">_BLANK_</span>=<span class="num">0.5</span>, min_samples=<span class="num">5</span>)' }
              ],
              tokens: ['eps', 'k', 'depth', 'gamma'],
              correctAnswer: 'eps',
              explanation: 'eps = neighborhood radius.'
            },
            {
              type: 'output-predict',
              prompt: 'A DBSCAN label of -1 means:',
              code: `labels = model.fit_predict(X)`,
              options: ['Noise / outlier point', 'First cluster', 'Last cluster', 'Error'],
              correct: 0,
              explanation: '-1 marks noise in DBSCAN.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap clustering algorithms that don\'t require choosing K up front.',
              tokens: ['KMeans', 'DBSCAN', 'Agglomerative', 'GaussianMixture'],
              correctOrder: ["DBSCAN", "Agglomerative"],
              explanation: 'DBSCAN finds K automatically; agglomerative gives a dendrogram you cut later.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u15',
      name: 'Unit 15 · PCA',
      description: 'Compress features while keeping the variance.',
      lessons: [
        {
          id: 'ml-u15-l1',
          name: 'Why Reduce Dimensions',
          icon: '📉',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The curse of dimensionality',
              content: `<p>High-dimensional data has problems:</p>
                <ul>
                  <li>Distances become meaningless ("everyone is far").</li>
                  <li>Models overfit.</li>
                  <li>Visualization is impossible.</li>
                </ul>
                <p><b>PCA</b> finds new axes (principal components) that capture the most variance. Project the data onto the top few → low-dim representation.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'PCA picks new axes that:',
              options: [
                { text: 'Maximize variance of the projected data.', code: false },
                { text: 'Maximize correlation between features.', code: false },
                { text: 'Equal the original features.', code: false },
                { text: 'Are categorical.', code: false }
              ],
              correct: 0,
              explanation: 'Principal components point in directions of highest variance.'
            },
            {
              type: 'true-false',
              statement: 'PCA is unsupervised — it ignores y.',
              correct: true,
              explanation: 'PCA only uses X.'
            },
            {
              type: 'fill-blank',
              prompt: 'Reduce to 2D.',
              codeLines: [
                { html: 'pca = <span class="fn">PCA</span>(n_components=<span class="num">_BLANK_</span>)' }
              ],
              tokens: ['2', '100', '0', '-1'],
              correctAnswer: '2',
              explanation: 'n_components=2 keeps 2 dims.'
            },
            {
              type: 'match-pairs',
              prompt: 'Term → meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Principal component', right: 'New axis from PCA' },
                { left: 'Explained variance', right: 'How much info each PC keeps' },
                { left: 'n_components', right: 'How many to keep' },
                { left: 'Loadings', right: 'How features combine into PCs' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Total variance explained for top 2 PCs:',
              code: `pca.explained_variance_ratio_[:2].sum()`,
              options: ['A float in [0, 1]', 'A list', 'An int', 'A matrix'],
              correct: 0,
              explanation: 'Fraction of total variance captured.'
            }
          ]
        },
        {
          id: 'ml-u15-l2',
          name: 'Variance Explained',
          icon: '📊',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'How many components?',
              content: `<p>Each principal component has an associated <b>explained variance</b>. PC1 captures most, PC2 next, etc.</p>
                <p>Choose K so that you capture e.g. 95% of total variance.</p>
                <div class="code-block">pca = <span class="fn">PCA</span>(n_components=<span class="num">0.95</span>)<br>
                pca.<span class="fn">fit</span>(X)</div>
                <p>That picks the smallest K that keeps ≥95% variance.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'PCA(n_components=0.95) means:',
              options: [
                { text: 'Keep enough components to retain 95% of variance.', code: false },
                { text: 'Keep 95 components.', code: false },
                { text: 'Discard 95%.', code: false },
                { text: 'Use 95 features.', code: false }
              ],
              correct: 0,
              explanation: 'Float < 1 = variance target.'
            },
            {
              type: 'true-false',
              statement: 'Before PCA you should usually standardize features.',
              correct: true,
              explanation: 'PCA is scale-sensitive.'
            },
            {
              type: 'output-predict',
              prompt: 'What does fit_transform return?',
              code: `Z = pca.fit_transform(X)`,
              options: ['Transformed data Z with reduced dimensions.', 'The model.', 'Original X.', 'A scalar.'],
              correct: 0,
              explanation: 'Returns the projected data.'
            },
            {
              type: 'fill-blank',
              prompt: 'Get explained variance.',
              codeLines: [
                { html: 'print(pca.<span class="fn">_BLANK_</span>)' }
              ],
              tokens: ['explained_variance_ratio_', 'components_', 'mean_', 'noise_'],
              correctAnswer: 'explained_variance_ratio_',
              explanation: 'Per-PC fraction of variance.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap the PCA pipeline order.',
              tokens: ['standardize', 'fit_pca', 'transform', 'visualize'],
              correctOrder: ["standardize", "fit_pca", "transform", "visualize"],
              explanation: 'Scale, then PCA, then transform, then plot.'
            },
            {
              type: 'type-answer',
              prompt: 'The first principal component captures the ________ amount of variance.',
              code: '',
              accept: ['most', 'maximum', 'largest', 'highest'],
              explanation: 'PC1 has the largest explained variance.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u16',
      name: 'Unit 16 · Neural Networks',
      description: 'From a single neuron to deep stacks.',
      lessons: [
        {
          id: 'ml-u16-l1',
          name: 'The Neuron',
          icon: '🧠',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Weighted sum + activation',
              content: `<p>A neuron computes:</p>
                <div class="code-block">z = w₁x₁ + w₂x₂ + ... + b<br>
                a = f(z)</div>
                <p>Inputs xᵢ multiplied by weights wᵢ, summed with bias b, passed through activation f.</p>
                <p>A logistic regression model is exactly one neuron with sigmoid activation.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A single neuron computes:',
              options: [
                { text: 'A weighted sum of inputs, plus bias, run through an activation.', code: false },
                { text: 'A matrix inversion.', code: false },
                { text: 'Tree splits.', code: false },
                { text: 'A distance metric.', code: false }
              ],
              correct: 0,
              explanation: 'Linear combination + nonlinearity.'
            },
            {
              type: 'true-false',
              statement: 'Logistic regression = one neuron with sigmoid activation.',
              correct: true,
              explanation: 'Yes — that\'s the simplest "network".'
            },
            {
              type: 'output-predict',
              prompt: 'Compute the neuron output (before activation).',
              code: `x=[1,2]; w=[3,4]; b=1
z = 1*3 + 2*4 + 1`,
              options: ['12', '11', '10', '24'],
              correct: 0,
              explanation: '3 + 8 + 1 = 12.'
            },
            {
              type: 'fill-blank',
              prompt: 'Apply activation.',
              codeLines: [
                { html: 'a = <span class="fn">_BLANK_</span>(z)' }
              ],
              tokens: ['sigmoid', 'sort', 'argmax', 'mean'],
              correctAnswer: 'sigmoid',
              explanation: 'Any nonlinear activation — sigmoid here.'
            },
            {
              type: 'match-pairs',
              prompt: 'Symbol → meaning.',
              leftLabel: 'Symbol',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'w', right: 'Weight' },
                { left: 'b', right: 'Bias' },
                { left: 'z', right: 'Pre-activation' },
                { left: 'a', right: 'Activation' }
              ]
            }
          ]
        },
        {
          id: 'ml-u16-l2',
          name: 'Layers',
          icon: '📚',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Input → Hidden → Output',
              content: `<p>Layers of neurons stacked together form a neural network.</p>
                <ul>
                  <li><b>Input layer</b>: one neuron per feature.</li>
                  <li><b>Hidden layers</b>: where the magic happens; learn nonlinear transformations.</li>
                  <li><b>Output layer</b>: 1 neuron for binary classification or regression; N neurons for N-way classification.</li>
                </ul>
                <p>Each layer is a matrix multiply + bias + activation: <code>a = f(Wx + b)</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Hidden layers exist because:',
              options: [
                { text: 'They let the network learn nonlinear feature combinations.', code: false },
                { text: 'They make code shorter.', code: false },
                { text: 'They reduce memory.', code: false },
                { text: 'They visualize data.', code: false }
              ],
              correct: 0,
              explanation: 'Hidden layers add representational power.'
            },
            {
              type: 'true-false',
              statement: 'A network with no hidden layers can only learn linear mappings.',
              correct: true,
              explanation: 'Without nonlinearity, stacking layers is still linear.'
            },
            {
              type: 'output-predict',
              prompt: 'A 10-class classifier output layer has how many neurons?',
              code: `output_layer_size = num_classes`,
              options: ['10', '1', '2', '100'],
              correct: 0,
              explanation: 'One neuron per class (with softmax).'
            },
            {
              type: 'fill-blank',
              prompt: 'Layer in a framework (PyTorch-ish).',
              codeLines: [
                { html: 'layer = <span class="fn">Linear</span>(in_features=<span class="num">_BLANK_</span>, out_features=<span class="num">16</span>)' }
              ],
              tokens: ['10', 'auto', 'all', '-1'],
              correctAnswer: '10',
              explanation: 'Concrete input size needed.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order a forward pass through 2 layers.',
              lines: [
                'a1 = relu(W1 x + b1)',
                'a2 = softmax(W2 a1 + b2)',
                'return a2'
              ],
              correctOrder: [0, 1, 2]
            }
          ]
        },
        {
          id: 'ml-u16-l3',
          name: 'Depth & Width',
          icon: '🏗️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Going deep',
              content: `<p><b>Depth</b> = number of layers. <b>Width</b> = neurons per layer.</p>
                <p>Deep networks can learn hierarchical features (edges → textures → objects). But they\'re harder to train and need more data.</p>
                <p>Modern "deep learning" usually means dozens to hundreds of layers, plus tricks like skip connections, normalization, and dropout.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A deeper network typically:',
              options: [
                { text: 'Can model more complex functions but needs more data and care to train.', code: false },
                { text: 'Always overfits.', code: false },
                { text: 'Trains faster.', code: false },
                { text: 'Removes the need for data.', code: false }
              ],
              correct: 0,
              explanation: 'More capacity, but more risk of overfitting and harder optimization.'
            },
            {
              type: 'true-false',
              statement: 'Deep networks learn hierarchical representations of data.',
              correct: true,
              explanation: 'Edges → parts → objects in vision; characters → words → phrases in text.'
            },
            {
              type: 'fill-blank',
              prompt: 'A 4-layer net total.',
              codeLines: [
                { html: '<span class="com"># input → h1 → h2 → out</span>' },
                { html: 'hidden_layers = <span class="num">_BLANK_</span>' }
              ],
              tokens: ['2', '4', '1', '0'],
              correctAnswer: '2',
              explanation: 'Two hidden layers between input and output.'
            },
            {
              type: 'output-predict',
              prompt: 'Width =',
              code: `# h: 64 neurons per layer`,
              options: ['64', '1', 'depth', '0'],
              correct: 0,
              explanation: '64 is the width here.'
            },
            {
              type: 'match-pairs',
              prompt: 'Architecture term → meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Depth', right: 'Number of layers' },
                { left: 'Width', right: 'Neurons per layer' },
                { left: 'Skip connection', right: 'Bypass for gradients' },
                { left: 'Dropout', right: 'Random neuron disable' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A network with many hidden layers is called __________.',
              code: '',
              accept: ['deep'],
              explanation: 'Deep network.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u17',
      name: 'Unit 17 · Activation Functions',
      description: 'Where neural networks get their nonlinearity.',
      lessons: [
        {
          id: 'ml-u17-l1',
          name: 'Sigmoid, Tanh, ReLU',
          icon: '⚡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Why nonlinearity matters',
              content: `<p>Without an activation, stacked linear layers collapse into one linear layer. We need <b>nonlinear</b> activations.</p>
                <ul>
                  <li><b>Sigmoid</b>: σ(z) = 1/(1+e^-z). Output ∈ (0,1). Old default.</li>
                  <li><b>Tanh</b>: ∈ (-1, 1). Zero-centered.</li>
                  <li><b>ReLU</b>: max(0, z). Cheap, popular default.</li>
                </ul>
                <p>Sigmoid and tanh saturate (gradient → 0), causing vanishing gradients in deep nets. ReLU avoids this for z > 0.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why is ReLU so popular?',
              options: [
                { text: 'Cheap to compute and avoids vanishing gradients for positive inputs.', code: false },
                { text: 'It outputs probabilities.', code: false },
                { text: 'It is symmetric around zero.', code: false },
                { text: 'It is bounded between -1 and 1.', code: false }
              ],
              correct: 0,
              explanation: 'Speed + good gradient flow.'
            },
            {
              type: 'true-false',
              statement: 'Without nonlinear activations, deep networks collapse to a single linear layer.',
              correct: true,
              explanation: 'Composition of linear maps is linear.'
            },
            {
              type: 'output-predict',
              prompt: 'ReLU(-3) = ?',
              code: `relu(-3) = max(0, -3)`,
              options: ['0', '-3', '3', '1'],
              correct: 0,
              explanation: 'ReLU clamps negatives to 0.'
            },
            {
              type: 'fill-blank',
              prompt: 'Define ReLU.',
              codeLines: [
                { html: '<span class="kw">def</span> <span class="fn">relu</span>(z): <span class="kw">return</span> <span class="fn">_BLANK_</span>(<span class="num">0</span>, z)' }
              ],
              tokens: ['max', 'min', 'abs', 'sign'],
              correctAnswer: 'max',
              explanation: 'ReLU = max(0, z).'
            },
            {
              type: 'match-pairs',
              prompt: 'Activation → range.',
              leftLabel: 'Activation',
              rightLabel: 'Range',
              pairs: [
                { left: 'Sigmoid', right: '(0, 1)' },
                { left: 'Tanh', right: '(-1, 1)' },
                { left: 'ReLU', right: '[0, ∞)' },
                { left: 'Leaky ReLU', right: '(-∞, ∞)' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A common ReLU variant that lets negatives leak through is called ______ ReLU.',
              code: '',
              accept: ['leaky', 'Leaky'],
              explanation: 'Leaky ReLU: f(z) = z if z>0 else 0.01·z.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u18',
      name: 'Unit 18 · Training NNs',
      description: 'Forward pass, loss, backprop, update.',
      lessons: [
        {
          id: 'ml-u18-l1',
          name: 'Forward Pass',
          icon: '➡️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Inputs flowing through',
              content: `<p>The <b>forward pass</b> computes predictions from inputs:</p>
                <ol>
                  <li>Input X enters first layer.</li>
                  <li>Each layer computes a = f(Wx + b).</li>
                  <li>Final layer outputs prediction ŷ.</li>
                  <li>Loss compares ŷ to true y.</li>
                </ol>
                <div class="code-block">a1 = <span class="fn">relu</span>(W1 @ x + b1)<br>
                a2 = <span class="fn">softmax</span>(W2 @ a1 + b2)<br>
                loss = <span class="fn">cross_entropy</span>(a2, y)</div>`
            },
            {
              type: 'reorder-code',
              prompt: 'Order the forward pass.',
              lines: [
                'Take input X',
                'Layer 1: a1 = relu(W1 X + b1)',
                'Layer 2: ŷ = softmax(W2 a1 + b2)',
                'Compute loss = CE(ŷ, y)'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'multiple-choice',
              prompt: 'During the forward pass we compute:',
              options: [
                { text: 'Predictions from current weights.', code: false },
                { text: 'Gradients.', code: false },
                { text: 'New weights.', code: false },
                { text: 'Random numbers.', code: false }
              ],
              correct: 0,
              explanation: 'Forward = inference; weights are not updated here.'
            },
            {
              type: 'true-false',
              statement: 'Loss is computed at the end of the forward pass.',
              correct: true,
              explanation: 'Once we have ŷ, we compare to y.'
            },
            {
              type: 'fill-blank',
              prompt: 'Matrix multiply notation.',
              codeLines: [
                { html: 'z = W <span class="fn">_BLANK_</span> x + b' }
              ],
              tokens: ['@', '*', '+', '/'],
              correctAnswer: '@',
              explanation: '@ is Python matrix multiply.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the layer computation.',
              tokens: ['z', '=', 'W', '@', 'x', '+', 'b'],
              correctOrder: ["z", "=", "W", "@", "x", "+", "b"],
              explanation: 'Standard affine transform.'
            }
          ]
        },
        {
          id: 'ml-u18-l2',
          name: 'Backpropagation',
          icon: '⬅️',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'Chain rule, layer by layer',
              content: `<p>Backprop computes gradients of the loss w.r.t. every weight.</p>
                <p>It uses the <b>chain rule</b> to propagate error from the output backwards through layers:</p>
                <div class="code-block">∂L/∂W2 = ∂L/∂ŷ · ∂ŷ/∂W2<br>
                ∂L/∂W1 = ∂L/∂ŷ · ∂ŷ/∂a1 · ∂a1/∂W1</div>
                <p>Each weight learns: "If I were a bit bigger, would the loss go up or down?"</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Backpropagation is essentially:',
              options: [
                { text: 'Applying the chain rule from output backwards through the network.', code: false },
                { text: 'Reversing the input data.', code: false },
                { text: 'Reading the loss aloud.', code: false },
                { text: 'Clustering hidden units.', code: false }
              ],
              correct: 0,
              explanation: 'Backprop = efficient gradient computation via chain rule.'
            },
            {
              type: 'true-false',
              statement: 'Backprop computes ∂L/∂W for every weight in the network.',
              correct: true,
              explanation: 'That\'s exactly what training needs.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order a training step.',
              lines: [
                'Forward pass: compute ŷ',
                'Compute loss',
                'Backprop: compute gradients',
                'Optimizer step: update weights'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'fill-blank',
              prompt: 'Zero out gradients first.',
              codeLines: [
                { html: 'optimizer.<span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['zero_grad', 'step', 'backward', 'forward'],
              correctAnswer: 'zero_grad',
              explanation: 'Reset accumulated gradients before each step.'
            },
            {
              type: 'output-predict',
              prompt: 'PyTorch training step:',
              code: `optimizer.zero_grad()
loss.backward()
optimizer.step()`,
              options: [
                'Zero grads, backprop, then apply update.',
                'Compute predictions.',
                'Load data.',
                'Predict on test set.'
              ],
              correct: 0,
              explanation: 'Standard PyTorch training step trio.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap the operations done during backprop.',
              tokens: ['chain_rule', 'matrix_multiply', 'cluster', 'gradient'],
              correctOrder: ["chain_rule", "matrix_multiply", "gradient"],
              explanation: 'Backprop applies chain rule and computes gradients via matrix multiplies.'
            }
          ]
        },
        {
          id: 'ml-u18-l3',
          name: 'Optimizer Step',
          icon: '🎓',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Updating weights',
              content: `<p>After backprop gives us gradients, the <b>optimizer</b> updates weights.</p>
                <ul>
                  <li><b>SGD</b>: w -= lr · grad</li>
                  <li><b>Momentum</b>: keeps "velocity" from past steps.</li>
                  <li><b>Adam</b>: adaptive learning rates per parameter — modern default.</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which optimizer adapts learning rates per parameter?',
              options: [
                { text: 'Adam', code: false },
                { text: 'Vanilla SGD', code: false },
                { text: 'KNN', code: false },
                { text: 'PCA', code: false }
              ],
              correct: 0,
              explanation: 'Adam adjusts lr per parameter using running stats of gradients.'
            },
            {
              type: 'true-false',
              statement: 'Mini-batch SGD updates weights after each small batch of examples.',
              correct: true,
              explanation: 'Batch size is a hyperparameter (e.g., 32, 64, 128).'
            },
            {
              type: 'fill-blank',
              prompt: 'Use Adam.',
              codeLines: [
                { html: 'opt = <span class="fn">_BLANK_</span>(model.parameters(), lr=<span class="num">1e-3</span>)' }
              ],
              tokens: ['Adam', 'KMeans', 'PCA', 'SVC'],
              correctAnswer: 'Adam',
              explanation: 'torch.optim.Adam.'
            },
            {
              type: 'output-predict',
              prompt: 'Mini-batch SGD with batch=32 on 1000 samples:',
              code: `batches_per_epoch = 1000 // 32`,
              options: ['About 31 batches per epoch.', '1000', '32', '0'],
              correct: 0,
              explanation: 'floor(1000/32) = 31.'
            },
            {
              type: 'match-pairs',
              prompt: 'Optimizer → key feature.',
              leftLabel: 'Optimizer',
              rightLabel: 'Feature',
              pairs: [
                { left: 'SGD', right: 'Plain gradient steps' },
                { left: 'Momentum', right: 'Velocity smoothing' },
                { left: 'Adam', right: 'Per-param adaptive lr' },
                { left: 'RMSprop', right: 'Divide by recent grad RMS' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'One full pass over the training data is called an ________.',
              code: '',
              accept: ['epoch'],
              explanation: 'One epoch = one pass through all training data.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u19',
      name: 'Unit 19 · CNNs for Vision',
      description: 'Convolutional networks understand images.',
      lessons: [
        {
          id: 'ml-u19-l1',
          name: 'Convolution & Filters',
          icon: '🖼️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Sliding filters',
              content: `<p>A <b>convolution</b> slides a small filter (kernel) over the image, computing dot products at each position.</p>
                <p>Different filters detect different patterns — edges, textures, shapes.</p>
                <p>Weights are shared across positions, so we have far fewer parameters than a fully-connected layer.</p>
                <div class="code-block">conv = <span class="fn">Conv2d</span>(in_ch=<span class="num">3</span>, out_ch=<span class="num">32</span>, kernel_size=<span class="num">3</span>)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why are CNNs efficient on images compared to dense nets?',
              options: [
                { text: 'They share weights across the image and exploit local structure.', code: false },
                { text: 'They use more parameters.', code: false },
                { text: 'They flatten the image first.', code: false },
                { text: 'They cluster pixels.', code: false }
              ],
              correct: 0,
              explanation: 'Weight sharing + local receptive fields = far fewer parameters.'
            },
            {
              type: 'true-false',
              statement: 'A convolution kernel of size 3 looks at a 3x3 neighborhood at each step.',
              correct: true,
              explanation: 'Kernel size = receptive field per step.'
            },
            {
              type: 'fill-blank',
              prompt: 'Define a 2D convolution.',
              codeLines: [
                { html: 'conv = <span class="fn">_BLANK_</span>(<span class="num">3</span>, <span class="num">32</span>, kernel_size=<span class="num">3</span>)' }
              ],
              tokens: ['Conv2d', 'Linear', 'LSTM', 'KMeans'],
              correctAnswer: 'Conv2d',
              explanation: 'torch.nn.Conv2d.'
            },
            {
              type: 'output-predict',
              prompt: '32x32 image, 3x3 kernel, no padding, stride 1. Output spatial size?',
              code: `out = 32 - 3 + 1`,
              options: ['30', '32', '29', '64'],
              correct: 0,
              explanation: '(N - K)/S + 1 = (32-3)+1 = 30.'
            },
            {
              type: 'match-pairs',
              prompt: 'Term → meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Kernel', right: 'Small weight matrix' },
                { left: 'Stride', right: 'Step size' },
                { left: 'Padding', right: 'Border zeros' },
                { left: 'Channel', right: 'Color/feature plane' }
              ]
            }
          ]
        },
        {
          id: 'ml-u19-l2',
          name: 'Pooling & Architecture',
          icon: '🏛️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Downsample and stack',
              content: `<p><b>Pooling</b> shrinks spatial dimensions — max-pool takes the max in each 2x2 block.</p>
                <p>Typical CNN pattern:</p>
                <div class="code-block">Conv → ReLU → Conv → ReLU → Pool → ...<br>
                ... → Flatten → Dense → Softmax</div>
                <p>Early layers learn edges, middle layers learn parts, late layers learn objects.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Max-pooling does what?',
              options: [
                { text: 'Takes the maximum value in each pooling window, reducing spatial size.', code: false },
                { text: 'Adds all pixels.', code: false },
                { text: 'Randomly drops pixels.', code: false },
                { text: 'Reorders channels.', code: false }
              ],
              correct: 0,
              explanation: 'Keeps the strongest activation; ignores the rest.'
            },
            {
              type: 'true-false',
              statement: 'Pooling reduces the number of parameters in later layers by shrinking feature maps.',
              correct: true,
              explanation: 'Smaller maps → smaller flattened vectors.'
            },
            {
              type: 'output-predict',
              prompt: '2x2 max-pool of [[1,2],[3,4]] =',
              code: `max([1,2,3,4])`,
              options: ['4', '10', '1', '2.5'],
              correct: 0,
              explanation: 'Max in the window is 4.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add max pooling.',
              codeLines: [
                { html: 'pool = <span class="fn">_BLANK_</span>(kernel_size=<span class="num">2</span>)' }
              ],
              tokens: ['MaxPool2d', 'AvgPool1d', 'Linear', 'BatchNorm'],
              correctAnswer: 'MaxPool2d',
              explanation: 'torch.nn.MaxPool2d.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order a typical CNN block.',
              lines: [
                'Conv2d',
                'ReLU',
                'MaxPool',
                'Flatten (eventually)',
                'Dense + softmax (final)'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'type-answer',
              prompt: 'CNN feature hierarchy: low-level edges → ____ → objects (3 levels).',
              code: '',
              accept: ['parts', 'textures'],
              explanation: 'Mid-level: textures / parts.'
            }
          ]
        }
      ]
    }
    ,
    {
      id: 'ml-u20',
      name: 'Unit 20 · RNNs & Sequences',
      description: 'Networks that remember.',
      lessons: [
        {
          id: 'ml-u20-l1',
          name: 'Hidden State',
          icon: '🔁',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Stepping through a sequence',
              content: `<p>An <b>RNN</b> processes a sequence one element at a time. At each step it combines the new input with a <b>hidden state</b> that summarizes the past.</p>
                <div class="code-block">h_t = tanh(W_x · x_t + W_h · h_{t-1} + b)</div>
                <p>Same weights reused at every step — this is recurrence.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'The hidden state in an RNN:',
              options: [
                { text: 'Summarizes everything the network has seen so far.', code: false },
                { text: 'Is the input image.', code: false },
                { text: 'Is the final prediction only.', code: false },
                { text: 'Is unused.', code: false }
              ],
              correct: 0,
              explanation: 'It is the running memory of the sequence.'
            },
            {
              type: 'true-false',
              statement: 'An RNN shares the same weights across all time steps.',
              correct: true,
              explanation: 'That\'s what makes it "recurrent".'
            },
            {
              type: 'fill-blank',
              prompt: 'Pick the layer for sequences.',
              codeLines: [
                { html: 'rnn = <span class="fn">_BLANK_</span>(input_size=<span class="num">10</span>, hidden_size=<span class="num">32</span>)' }
              ],
              tokens: ['LSTM', 'Conv2d', 'PCA', 'KMeans'],
              correctAnswer: 'LSTM',
              explanation: 'LSTM is a popular RNN cell.'
            },
            {
              type: 'output-predict',
              prompt: 'Common sequence task:',
              code: `# Input: "I love this movie"
# Output: sentiment`,
              options: ['Text → label classification.', 'Image classification.', 'Clustering.', 'Regression on tabular data.'],
              correct: 0,
              explanation: 'Sentiment classification.'
            },
            {
              type: 'match-pairs',
              prompt: 'Task → architecture fit.',
              leftLabel: 'Task',
              rightLabel: 'Architecture',
              pairs: [
                { left: 'Image classification', right: 'CNN' },
                { left: 'Sentence sentiment', right: 'RNN/Transformer' },
                { left: 'Tabular data', right: 'Trees / dense net' },
                { left: 'Clustering customers', right: 'K-means' }
              ]
            }
          ]
        },
        {
          id: 'ml-u20-l2',
          name: 'LSTM & GRU',
          icon: '🧮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Solving vanishing gradients',
              content: `<p>Plain RNNs struggle with long sequences — gradients vanish or explode.</p>
                <p><b>LSTM</b> introduces a cell state and gates (input, forget, output) that decide what to keep.</p>
                <p><b>GRU</b> is a simpler variant with fewer gates. Both handle long-range dependencies far better.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What problem do LSTM/GRU help with?',
              options: [
                { text: 'Vanishing gradients in long sequences.', code: false },
                { text: 'Image normalization.', code: false },
                { text: 'Categorical encoding.', code: false },
                { text: 'Cluster initialization.', code: false }
              ],
              correct: 0,
              explanation: 'Their gating preserves gradient flow over long sequences.'
            },
            {
              type: 'true-false',
              statement: 'The forget gate in an LSTM decides what to discard from the cell state.',
              correct: true,
              explanation: 'Exactly its name and role.'
            },
            {
              type: 'match-pairs',
              prompt: 'LSTM gate → role.',
              leftLabel: 'Gate',
              rightLabel: 'Role',
              pairs: [
                { left: 'Forget', right: 'Discard from cell state' },
                { left: 'Input', right: 'Write new info' },
                { left: 'Output', right: 'Read out for hidden state' },
                { left: 'Cell state', right: 'Long-term memory' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Use a GRU layer.',
              codeLines: [
                { html: 'rnn = <span class="fn">_BLANK_</span>(input_size=<span class="num">10</span>, hidden_size=<span class="num">32</span>)' }
              ],
              tokens: ['GRU', 'PCA', 'Linear', 'Conv2d'],
              correctAnswer: 'GRU',
              explanation: 'torch.nn.GRU.'
            },
            {
              type: 'output-predict',
              prompt: 'Why might you choose GRU over LSTM?',
              code: `# fewer parameters, simpler`,
              options: ['Faster training with similar quality on many tasks.', 'Always more accurate.', 'It is supervised.', 'It needs less data.'],
              correct: 0,
              explanation: 'GRU is lighter and often comparable.'
            },
            {
              type: 'type-answer',
              prompt: 'Long-range info storage in an LSTM lives in the ______ state.',
              code: '',
              accept: ['cell', 'Cell'],
              explanation: 'Cell state runs through the LSTM with light modifications.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u21',
      name: 'Unit 21 · Transformers & LLMs',
      description: 'Attention is all you need.',
      lessons: [
        {
          id: 'ml-u21-l1',
          name: 'Attention',
          icon: '👀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: '"What should I focus on?"',
              content: `<p><b>Attention</b> computes a weighted sum of all tokens, where weights depend on relevance.</p>
                <p>Each token asks a "query" and looks at all "keys" — high match means high weight on the matching "value".</p>
                <div class="code-block">attention(Q, K, V) = softmax(QK^T / √d) · V</div>
                <p>Self-attention does this within a single sequence, letting tokens see each other.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Attention is best described as:',
              options: [
                { text: 'A weighted sum where weights depend on input content.', code: false },
                { text: 'A convolution.', code: false },
                { text: 'A clustering step.', code: false },
                { text: 'A loss function.', code: false }
              ],
              correct: 0,
              explanation: 'Soft, content-based weighting.'
            },
            {
              type: 'true-false',
              statement: 'Self-attention lets each token in a sequence look at every other token.',
              correct: true,
              explanation: 'That\'s the global view advantage over RNNs.'
            },
            {
              type: 'match-pairs',
              prompt: 'Symbol → role.',
              leftLabel: 'Symbol',
              rightLabel: 'Role',
              pairs: [
                { left: 'Q', right: 'Query (what I want)' },
                { left: 'K', right: 'Key (what I offer)' },
                { left: 'V', right: 'Value (what I send)' },
                { left: 'softmax', right: 'Normalize weights' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Scaled dot-product attention scaling.',
              codeLines: [
                { html: 'scores = (Q @ K.T) / <span class="fn">_BLANK_</span>(d)' }
              ],
              tokens: ['sqrt', 'log', 'exp', 'abs'],
              correctAnswer: 'sqrt',
              explanation: 'Divide by √d to keep variance stable.'
            },
            {
              type: 'output-predict',
              prompt: 'Output shape of attention(Q, K, V) where V is (n, d):',
              code: `softmax(QK^T) @ V`,
              options: ['(n, d)', '(d, n)', '(n, n)', 'scalar'],
              correct: 0,
              explanation: 'Same shape as V.'
            }
          ]
        },
        {
          id: 'ml-u21-l2',
          name: 'Transformers & LLMs',
          icon: '🤖',
          xp: 30,
          challenges: [
            {
              type: 'concept',
              title: 'Stacks of attention',
              content: `<p>A <b>transformer block</b> = multi-head self-attention + feed-forward + layer norm + residual.</p>
                <p>Stack many blocks → a transformer. Train on next-token prediction over a huge corpus → an <b>LLM</b>.</p>
                <p>Why LLMs work:</p>
                <ul>
                  <li>Attention captures long-range structure.</li>
                  <li>Scale (params + data + compute) keeps improving capabilities.</li>
                  <li>Self-supervised learning needs no labels — just text.</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'LLMs are trained to:',
              options: [
                { text: 'Predict the next token given previous tokens.', code: false },
                { text: 'Cluster sentences.', code: false },
                { text: 'Compress images.', code: false },
                { text: 'Sort tokens.', code: false }
              ],
              correct: 0,
              explanation: 'Self-supervised next-token prediction.'
            },
            {
              type: 'true-false',
              statement: 'Transformers replaced RNNs as the dominant architecture for sequence tasks.',
              correct: true,
              explanation: 'Better parallelism and long-range modelling.'
            },
            {
              type: 'match-pairs',
              prompt: 'Component → purpose.',
              leftLabel: 'Component',
              rightLabel: 'Purpose',
              pairs: [
                { left: 'Self-attention', right: 'Token-to-token mixing' },
                { left: 'Feed-forward', right: 'Per-token transformation' },
                { left: 'Layer norm', right: 'Stabilize training' },
                { left: 'Residual', right: 'Gradient flow' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Multi-head attention.',
              codeLines: [
                { html: 'attn = <span class="fn">MultiheadAttention</span>(embed_dim=<span class="num">256</span>, num_heads=<span class="num">_BLANK_</span>)' }
              ],
              tokens: ['8', 'rgb', 'soft', 'auto'],
              correctAnswer: '8',
              explanation: '8 heads is a common choice.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order one transformer-block forward.',
              tokens: ['x', '+', 'attn(x)', '→', 'norm', '→', 'ff', '→', 'out'],
              correctOrder: ["x", "+", "attn(x)", "→", "norm", "→", "ff", "→", "out"],
              explanation: 'Residual + attention → norm → feed-forward.'
            },
            {
              type: 'type-answer',
              prompt: 'Training where labels come from the data itself (e.g. next token) is called ____-supervised learning.',
              code: '',
              accept: ['self'],
              explanation: 'Self-supervised — exactly how LLMs train.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u22',
      name: 'Unit 22 · Loss Functions',
      description: 'Pick the right loss for the right task.',
      lessons: [
        {
          id: 'ml-u22-l1',
          name: 'Regression Losses',
          icon: '📏',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'MSE vs MAE',
              content: `<p><b>MSE</b> (mean squared error): punishes big errors hard, smooth gradients. Sensitive to outliers.</p>
                <p><b>MAE</b> (mean absolute error): linear penalty, robust to outliers but non-smooth at 0.</p>
                <p><b>Huber</b>: a hybrid — quadratic near 0, linear far away.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Your data has extreme outliers. Which loss is most robust?',
              options: [
                { text: 'MAE or Huber', code: false },
                { text: 'MSE', code: false },
                { text: 'Cross-entropy', code: false },
                { text: 'Log-loss', code: false }
              ],
              correct: 0,
              explanation: 'Linear penalty doesn\'t blow up on outliers.'
            },
            {
              type: 'true-false',
              statement: 'MSE penalizes large errors much more than small ones.',
              correct: true,
              explanation: 'Squared term grows fast.'
            },
            {
              type: 'output-predict',
              prompt: 'MAE for true=[1,2], pred=[3,2]:',
              code: `mean(|1-3|, |2-2|)`,
              options: ['1.0', '2.0', '0.5', '0'],
              correct: 0,
              explanation: '(2 + 0)/2 = 1.0.'
            },
            {
              type: 'fill-blank',
              prompt: 'PyTorch MSE.',
              codeLines: [
                { html: 'loss = <span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['MSELoss', 'BCELoss', 'CrossEntropyLoss', 'L1Loss'],
              correctAnswer: 'MSELoss',
              explanation: 'torch.nn.MSELoss.'
            },
            {
              type: 'match-pairs',
              prompt: 'Loss → task.',
              leftLabel: 'Loss',
              rightLabel: 'Task',
              pairs: [
                { left: 'MSE', right: 'Regression' },
                { left: 'MAE', right: 'Robust regression' },
                { left: 'BCE', right: 'Binary classification' },
                { left: 'Cross-entropy', right: 'Multiclass classification' }
              ]
            }
          ]
        },
        {
          id: 'ml-u22-l2',
          name: 'Classification Losses',
          icon: '🎯',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Cross-entropy',
              content: `<p><b>Binary cross-entropy (BCE)</b>:</p>
                <div class="code-block">L = -[ y log(p) + (1-y) log(1-p) ]</div>
                <p><b>Categorical cross-entropy</b>:</p>
                <div class="code-block">L = -Σ y_c log(p_c)</div>
                <p>Use softmax + cross-entropy together for multiclass. Always use a stable "logits" version when training.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'For 10-class classification you typically use:',
              options: [
                { text: 'Softmax output + categorical cross-entropy loss.', code: false },
                { text: 'Sigmoid + MSE.', code: false },
                { text: 'Hinge loss + KNN.', code: false },
                { text: 'L2 regularization only.', code: false }
              ],
              correct: 0,
              explanation: 'Softmax turns logits into a class distribution; CE measures match.'
            },
            {
              type: 'true-false',
              statement: 'Categorical cross-entropy with one-hot labels equals -log(p_true_class).',
              correct: true,
              explanation: 'Only the true class contributes.'
            },
            {
              type: 'fill-blank',
              prompt: 'PyTorch CE loss.',
              codeLines: [
                { html: 'loss_fn = <span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['CrossEntropyLoss', 'MSELoss', 'L1Loss', 'KLDivLoss'],
              correctAnswer: 'CrossEntropyLoss',
              explanation: 'torch.nn.CrossEntropyLoss (expects logits).'
            },
            {
              type: 'output-predict',
              prompt: 'Sum of softmax outputs over classes:',
              code: `sum(softmax(logits))`,
              options: ['Exactly 1', 'Could be anything', '0', '∞'],
              correct: 0,
              explanation: 'Softmax outputs a probability distribution.'
            },
            {
              type: 'match-pairs',
              prompt: 'Output activation → loss.',
              leftLabel: 'Output',
              rightLabel: 'Loss',
              pairs: [
                { left: 'Sigmoid (1 neuron)', right: 'BCE' },
                { left: 'Softmax (N neurons)', right: 'Categorical CE' },
                { left: 'Linear', right: 'MSE/MAE' },
                { left: 'Sigmoid (multi-label)', right: 'BCE per label' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'BCE with multiple independent labels is sometimes called ____-label classification.',
              code: '',
              accept: ['multi', 'multi-'],
              explanation: 'Multi-label: each label is independently 0/1.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u23',
      name: 'Unit 23 · Evaluation — Classification',
      description: 'Accuracy isn\'t everything.',
      lessons: [
        {
          id: 'ml-u23-l1',
          name: 'Confusion Matrix',
          icon: '🧩',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'TP, FP, TN, FN',
              content: `<p>For binary classification:</p>
                <ul>
                  <li><b>TP</b>: predicted positive, actually positive.</li>
                  <li><b>FP</b>: predicted positive, actually negative.</li>
                  <li><b>TN</b>: predicted negative, actually negative.</li>
                  <li><b>FN</b>: predicted negative, actually positive.</li>
                </ul>
                <p>The confusion matrix puts these in a 2x2 table — your first sanity check.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A cancer detector misses a tumor (predicts "no cancer" when there is). This is:',
              options: [
                { text: 'False Negative', code: false },
                { text: 'False Positive', code: false },
                { text: 'True Positive', code: false },
                { text: 'True Negative', code: false }
              ],
              correct: 0,
              explanation: 'Real positive, predicted negative.'
            },
            {
              type: 'true-false',
              statement: 'FN and FP often have very different real-world costs.',
              correct: true,
              explanation: 'Missing a tumor (FN) is usually worse than a false alarm (FP).'
            },
            {
              type: 'match-pairs',
              prompt: 'Outcome → cell.',
              leftLabel: 'Reality / Prediction',
              rightLabel: 'Outcome',
              pairs: [
                { left: 'Pos / Pos', right: 'TP' },
                { left: 'Pos / Neg', right: 'FN' },
                { left: 'Neg / Pos', right: 'FP' },
                { left: 'Neg / Neg', right: 'TN' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Confusion matrix function?',
              code: `from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_true, y_pred)`,
              options: ['Returns a 2x2 (or NxN) array of counts.', 'Returns accuracy.', 'Returns a model.', 'Throws an error.'],
              correct: 0,
              explanation: 'sklearn returns the counts matrix.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute accuracy.',
              codeLines: [
                { html: 'acc = (tp + tn) / <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['(tp+tn+fp+fn)', '(tp+fn)', '(tn+fp)', 'tp'],
              correctAnswer: '(tp+tn+fp+fn)',
              explanation: 'Accuracy = correct / total.'
            }
          ]
        },
        {
          id: 'ml-u23-l2',
          name: 'Precision, Recall, F1',
          icon: '🎯',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two views of "positive"',
              content: `<p><b>Precision</b> = TP / (TP + FP). "Of those I called positive, how many really were?"</p>
                <p><b>Recall</b> = TP / (TP + FN). "Of all real positives, how many did I catch?"</p>
                <p><b>F1</b> = harmonic mean of precision and recall. Good single-number summary when classes are imbalanced.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'High recall, low precision means:',
              options: [
                { text: 'Catches most positives but many false alarms.', code: false },
                { text: 'Catches few positives.', code: false },
                { text: 'Always correct.', code: false },
                { text: 'Ignores positives.', code: false }
              ],
              correct: 0,
              explanation: 'Recall counts catches; precision counts purity.'
            },
            {
              type: 'true-false',
              statement: 'F1 is the harmonic mean of precision and recall.',
              correct: true,
              explanation: 'F1 = 2·P·R / (P+R).'
            },
            {
              type: 'output-predict',
              prompt: 'TP=80, FP=20, FN=10. Precision?',
              code: `precision = 80 / (80 + 20)`,
              options: ['0.8', '0.89', '0.9', '0.5'],
              correct: 0,
              explanation: '80/100 = 0.8.'
            },
            {
              type: 'fill-blank',
              prompt: 'F1 score.',
              codeLines: [
                { html: 'f1 = <span class="num">2</span> * (p * r) / (p <span class="fn">_BLANK_</span> r)' }
              ],
              tokens: ['+', '-', '*', '/'],
              correctAnswer: '+',
              explanation: 'Harmonic mean uses (p + r).'
            },
            {
              type: 'match-pairs',
              prompt: 'Metric → formula.',
              leftLabel: 'Metric',
              rightLabel: 'Formula',
              pairs: [
                { left: 'Precision', right: 'TP / (TP+FP)' },
                { left: 'Recall', right: 'TP / (TP+FN)' },
                { left: 'F1', right: '2PR / (P+R)' },
                { left: 'Accuracy', right: '(TP+TN) / total' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap metrics that depend only on the positive class.',
              tokens: ['precision', 'recall', 'accuracy', 'F1', 'specificity'],
              correctOrder: ["precision", "recall", "F1"],
              explanation: 'Precision, recall and F1 are positive-class focused.'
            }
          ]
        },
        {
          id: 'ml-u23-l3',
          name: 'When Accuracy Lies',
          icon: '⚠️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Imbalanced classes',
              content: `<p>If 99% of emails are not spam, predicting "not spam" always gives 99% accuracy — but the model is useless.</p>
                <p>For imbalanced problems prefer:</p>
                <ul>
                  <li>Precision/recall/F1.</li>
                  <li>ROC-AUC (threshold-independent).</li>
                  <li>PR-AUC (better for very imbalanced data).</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Accuracy is misleading when:',
              options: [
                { text: 'Class distribution is heavily imbalanced.', code: false },
                { text: 'Features are scaled.', code: false },
                { text: 'You use Adam optimizer.', code: false },
                { text: 'The model is small.', code: false }
              ],
              correct: 0,
              explanation: 'Predicting the majority class gives high accuracy with no signal.'
            },
            {
              type: 'true-false',
              statement: 'ROC-AUC is threshold-independent — it summarizes performance across all thresholds.',
              correct: true,
              explanation: 'Sweeps the threshold and averages.'
            },
            {
              type: 'output-predict',
              prompt: '99% negatives. Always predict 0. Accuracy?',
              code: `acc = 0.99
recall_positives = 0.0`,
              options: ['Accuracy 99%, recall 0% — useless model.', '99% useful.', '0% accuracy.', 'Error.'],
              correct: 0,
              explanation: 'Classic imbalanced-data trap.'
            },
            {
              type: 'fill-blank',
              prompt: 'ROC-AUC.',
              codeLines: [
                { html: 'score = <span class="fn">_BLANK_</span>(y_true, y_scores)' }
              ],
              tokens: ['roc_auc_score', 'accuracy_score', 'mean_squared_error', 'f1_score'],
              correctAnswer: 'roc_auc_score',
              explanation: 'sklearn.metrics.roc_auc_score.'
            },
            {
              type: 'match-pairs',
              prompt: 'Situation → preferred metric.',
              leftLabel: 'Situation',
              rightLabel: 'Metric',
              pairs: [
                { left: 'Balanced classes', right: 'Accuracy' },
                { left: 'Imbalanced classes', right: 'F1 / PR-AUC' },
                { left: 'Ranking quality', right: 'ROC-AUC' },
                { left: 'Cost-sensitive task', right: 'Custom weighted metric' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A model that always predicts the majority class is called the ________ baseline.',
              code: '',
              accept: ['majority', 'naive', 'dummy'],
              explanation: 'Majority-class baseline (a.k.a. dummy classifier).'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u24',
      name: 'Unit 24 · Evaluation — Regression',
      description: 'How off were we, on average?',
      lessons: [
        {
          id: 'ml-u24-l1',
          name: 'MSE, RMSE, MAE, R²',
          icon: '📐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Errors and explained variance',
              content: `<p>Regression metrics:</p>
                <ul>
                  <li><b>MSE</b> — mean of squared errors.</li>
                  <li><b>RMSE</b> — √MSE. Same units as y.</li>
                  <li><b>MAE</b> — mean absolute error.</li>
                  <li><b>R²</b> — 1 - SSres/SStot. 1 is perfect; 0 is "as good as predicting the mean".</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'R² = 0 means:',
              options: [
                { text: 'Model is as good as predicting the mean of y.', code: false },
                { text: 'Perfect predictions.', code: false },
                { text: 'Negative correlation.', code: false },
                { text: 'No data.', code: false }
              ],
              correct: 0,
              explanation: 'R² = 0 → no improvement over the constant mean predictor.'
            },
            {
              type: 'true-false',
              statement: 'RMSE has the same units as the target variable, which makes it interpretable.',
              correct: true,
              explanation: 'That\'s why it\'s often preferred for reporting.'
            },
            {
              type: 'output-predict',
              prompt: 'RMSE for true=[1,3], pred=[2,5]:',
              code: `sqrt(mean((1-2)^2, (3-5)^2))`,
              options: ['Approx 1.58', '2.5', '1.0', '5'],
              correct: 0,
              explanation: 'sqrt((1+4)/2) = sqrt(2.5) ≈ 1.58.'
            },
            {
              type: 'fill-blank',
              prompt: 'R² score.',
              codeLines: [
                { html: 'r2 = <span class="fn">_BLANK_</span>(y_true, y_pred)' }
              ],
              tokens: ['r2_score', 'accuracy_score', 'roc_auc_score', 'log_loss'],
              correctAnswer: 'r2_score',
              explanation: 'sklearn.metrics.r2_score.'
            },
            {
              type: 'match-pairs',
              prompt: 'Metric → property.',
              leftLabel: 'Metric',
              rightLabel: 'Property',
              pairs: [
                { left: 'MSE', right: 'Sensitive to outliers' },
                { left: 'MAE', right: 'Robust to outliers' },
                { left: 'RMSE', right: 'Same units as y' },
                { left: 'R²', right: 'Variance explained' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A perfect regression model has R² equal to ___.',
              code: '',
              accept: ['1', '1.0', 'one'],
              explanation: 'Perfect fit → R² = 1.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u25',
      name: 'Unit 25 · Overfit / Underfit',
      description: 'The bias-variance tradeoff.',
      lessons: [
        {
          id: 'ml-u25-l1',
          name: 'Bias & Variance',
          icon: '⚖️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two ways to be wrong',
              content: `<p><b>Bias</b>: systematic error from too simple a model. <i>Underfitting</i>: bad on train AND test.</p>
                <p><b>Variance</b>: error from being too sensitive to training data. <i>Overfitting</i>: great on train, bad on test.</p>
                <p>Goal: low bias and low variance — but there\'s usually a tradeoff. Tools: more data, simpler model, regularization, cross-validation.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A linear model on highly nonlinear data is likely to:',
              options: [
                { text: 'Underfit (high bias).', code: false },
                { text: 'Overfit.', code: false },
                { text: 'Be perfect.', code: false },
                { text: 'Cluster the data.', code: false }
              ],
              correct: 0,
              explanation: 'Too simple for the pattern.'
            },
            {
              type: 'true-false',
              statement: 'Adding more training data tends to help reduce variance.',
              correct: true,
              explanation: 'More data → harder to overfit noise.'
            },
            {
              type: 'match-pairs',
              prompt: 'Symptom → diagnosis.',
              leftLabel: 'Symptom',
              rightLabel: 'Diagnosis',
              pairs: [
                { left: 'Train bad, test bad', right: 'Underfit' },
                { left: 'Train great, test bad', right: 'Overfit' },
                { left: 'Train good, test good', right: 'Just right' },
                { left: 'Train OK, test much worse', right: 'High variance' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Train acc 60%, test acc 58%. Likely:',
              code: `# small gap, both low`,
              options: ['Underfitting.', 'Overfitting.', 'Perfect.', 'Data leakage.'],
              correct: 0,
              explanation: 'Both low and close → high bias / underfit.'
            },
            {
              type: 'fill-blank',
              prompt: 'A simple model usually has ____.',
              codeLines: [
                { html: '<span class="com"># lots of</span> <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['bias', 'variance', 'noise', 'features'],
              correctAnswer: 'bias',
              explanation: 'Simple → high bias, low variance.'
            }
          ]
        },
        {
          id: 'ml-u25-l2',
          name: 'Diagnosing & Fixing',
          icon: '🩺',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Reading the curves',
              content: `<p><b>Learning curves</b> plot train and validation error vs training size or epochs.</p>
                <p>Signals:</p>
                <ul>
                  <li>Both errors high & flat → underfitting → bigger model, more features.</li>
                  <li>Train low, val high → overfitting → more data, regularization, dropout.</li>
                  <li>Both converging low → great, you can stop.</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'To fix overfitting, you might:',
              options: [
                { text: 'Add regularization, get more data, simplify the model.', code: false },
                { text: 'Add more parameters.', code: false },
                { text: 'Train longer at higher lr.', code: false },
                { text: 'Drop the validation set.', code: false }
              ],
              correct: 0,
              explanation: 'Standard overfitting countermeasures.'
            },
            {
              type: 'true-false',
              statement: 'If a model underfits, a bigger / more flexible model can help.',
              correct: true,
              explanation: 'High bias → increase capacity.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order debugging an underfit model.',
              lines: [
                'Confirm: both train and val error are high',
                'Try a more flexible model (e.g., more layers/features)',
                'Train longer / lower regularization',
                'Re-check learning curves'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'fill-blank',
              prompt: 'A common fix for overfitting deep nets.',
              codeLines: [
                { html: 'layer = <span class="fn">_BLANK_</span>(p=<span class="num">0.5</span>)' }
              ],
              tokens: ['Dropout', 'BatchNorm', 'ReLU', 'Linear'],
              correctAnswer: 'Dropout',
              explanation: 'Dropout randomly zeros activations during training.'
            },
            {
              type: 'match-pairs',
              prompt: 'Action → fixes.',
              leftLabel: 'Action',
              rightLabel: 'Helps with',
              pairs: [
                { left: 'More data', right: 'Overfitting' },
                { left: 'Bigger model', right: 'Underfitting' },
                { left: 'Dropout', right: 'Overfitting' },
                { left: 'More features', right: 'Underfitting' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A plot of train/val error vs training size is called a __________ curve.',
              code: '',
              accept: ['learning'],
              explanation: 'Learning curve.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u26',
      name: 'Unit 26 · Regularization',
      description: 'Penalize complexity to generalize better.',
      lessons: [
        {
          id: 'ml-u26-l1',
          name: 'L1 & L2',
          icon: '🧷',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Shrinking the weights',
              content: `<p>Add a penalty to the loss to discourage large weights:</p>
                <ul>
                  <li><b>L2 (Ridge)</b>: λ Σ wᵢ². Shrinks all weights toward 0.</li>
                  <li><b>L1 (Lasso)</b>: λ Σ |wᵢ|. Drives some weights exactly to 0 → feature selection.</li>
                  <li><b>Elastic Net</b>: a mix of L1 and L2.</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which regularizer produces sparse weights (many exactly zero)?',
              options: [
                { text: 'L1 (Lasso)', code: false },
                { text: 'L2 (Ridge)', code: false },
                { text: 'Dropout', code: false },
                { text: 'Early stopping', code: false }
              ],
              correct: 0,
              explanation: 'L1 has a corner at 0 that lands weights exactly there.'
            },
            {
              type: 'true-false',
              statement: 'L2 regularization keeps all features but shrinks their weights.',
              correct: true,
              explanation: 'No exact zeros, just smaller values.'
            },
            {
              type: 'fill-blank',
              prompt: 'sklearn Lasso.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>(alpha=<span class="num">0.1</span>)' }
              ],
              tokens: ['Lasso', 'Ridge', 'LinearRegression', 'KMeans'],
              correctAnswer: 'Lasso',
              explanation: 'sklearn.linear_model.Lasso.'
            },
            {
              type: 'output-predict',
              prompt: 'High alpha in Ridge:',
              code: `Ridge(alpha=1e6).fit(X, y)`,
              options: ['Weights very close to zero — heavy regularization.', 'No regularization.', 'Unstable.', 'Always overfits.'],
              correct: 0,
              explanation: 'Strong penalty crushes weights.'
            },
            {
              type: 'match-pairs',
              prompt: 'Regularizer → effect.',
              leftLabel: 'Regularizer',
              rightLabel: 'Effect',
              pairs: [
                { left: 'L1', right: 'Sparse weights' },
                { left: 'L2', right: 'Small weights' },
                { left: 'Elastic Net', right: 'Mix of both' },
                { left: 'Dropout', right: 'Random unit disabling' }
              ]
            }
          ]
        },
        {
          id: 'ml-u26-l2',
          name: 'Dropout & Early Stopping',
          icon: '🛑',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'NN-specific tricks',
              content: `<p><b>Dropout</b>: during training, randomly zero out a fraction of activations. Forces redundancy and reduces co-adaptation.</p>
                <p><b>Early stopping</b>: monitor validation loss and stop when it stops improving. Best epoch isn\'t always the last one.</p>
                <p><b>BatchNorm</b>: normalizes activations per batch; mild regularization side effect.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Dropout is active during:',
              options: [
                { text: 'Training only (off at inference).', code: false },
                { text: 'Inference only.', code: false },
                { text: 'Both equally.', code: false },
                { text: 'Initialization only.', code: false }
              ],
              correct: 0,
              explanation: 'Frameworks toggle it off in eval mode.'
            },
            {
              type: 'true-false',
              statement: 'Early stopping uses the validation set to pick when to halt training.',
              correct: true,
              explanation: 'Best-val epoch is kept as the final model.'
            },
            {
              type: 'fill-blank',
              prompt: 'Toggle eval mode in PyTorch.',
              codeLines: [
                { html: 'model.<span class="fn">_BLANK_</span>()' }
              ],
              tokens: ['eval', 'train', 'reset', 'predict'],
              correctAnswer: 'eval',
              explanation: 'model.eval() disables dropout and switches BN to running stats.'
            },
            {
              type: 'output-predict',
              prompt: 'Dropout p=0.5 zeros roughly:',
              code: `# fraction zeroed`,
              options: ['Half the activations per forward pass.', 'All activations.', 'None.', 'A fixed unit.'],
              correct: 0,
              explanation: 'p is the probability each activation is dropped.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap regularization techniques for NNs.',
              tokens: ['dropout', 'weight_decay', 'early_stopping', 'KNN', 'PCA'],
              correctOrder: ["dropout", "weight_decay", "early_stopping"],
              explanation: 'Dropout, weight decay (L2), early stopping.'
            },
            {
              type: 'type-answer',
              prompt: 'L2 in optimizers is often called weight ________.',
              code: '',
              accept: ['decay'],
              explanation: 'Weight decay.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u27',
      name: 'Unit 27 · Cross-Validation',
      description: 'Trust your evaluation more.',
      lessons: [
        {
          id: 'ml-u27-l1',
          name: 'K-Fold CV',
          icon: '🔄',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Averaging across folds',
              content: `<p><b>k-fold CV</b> splits training data into k parts. Train on k-1 parts, validate on 1, repeat k times, average the scores.</p>
                <p>This reduces variance from a single random split. Common k: 5 or 10.</p>
                <p><b>Stratified CV</b> keeps class proportions in each fold (important for imbalanced data). <b>Leave-One-Out (LOO)</b> uses k = n.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use k-fold CV?',
              options: [
                { text: 'A single train/test split can be lucky or unlucky; averaging is more reliable.', code: false },
                { text: 'It trains faster.', code: false },
                { text: 'It needs less data.', code: false },
                { text: 'It avoids labels.', code: false }
              ],
              correct: 0,
              explanation: 'Averaging k scores stabilizes the estimate.'
            },
            {
              type: 'true-false',
              statement: 'Stratified k-fold preserves class proportions in each fold.',
              correct: true,
              explanation: 'Critical for imbalanced classification.'
            },
            {
              type: 'fill-blank',
              prompt: 'Compute CV score.',
              codeLines: [
                { html: 'scores = <span class="fn">_BLANK_</span>(model, X, y, cv=<span class="num">5</span>)' }
              ],
              tokens: ['cross_val_score', 'predict', 'train_test_split', 'fit'],
              correctAnswer: 'cross_val_score',
              explanation: 'sklearn.model_selection.cross_val_score.'
            },
            {
              type: 'output-predict',
              prompt: '5-fold on 100 samples: per fold val size?',
              code: `100 / 5`,
              options: ['20', '5', '100', '1'],
              correct: 0,
              explanation: 'Each fold validates on 20 samples.'
            },
            {
              type: 'match-pairs',
              prompt: 'CV variant → use.',
              leftLabel: 'Variant',
              rightLabel: 'Use',
              pairs: [
                { left: 'k-fold', right: 'General' },
                { left: 'Stratified', right: 'Imbalanced classes' },
                { left: 'LOO', right: 'Very small dataset' },
                { left: 'TimeSeriesSplit', right: 'Time series' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'LOO stands for Leave-One-_____.',
              code: '',
              accept: ['out', 'Out'],
              explanation: 'Leave-One-Out CV.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u28',
      name: 'Unit 28 · Ensembles',
      description: 'Many weak learners beat one strong one.',
      lessons: [
        {
          id: 'ml-u28-l1',
          name: 'Bagging & Random Forests',
          icon: '🌲',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Average many trees',
              content: `<p><b>Bagging</b> (Bootstrap Aggregating): train many models on random subsets of the data and average their predictions.</p>
                <p><b>Random Forest</b> = bagging of decision trees + random feature subsets at each split. Robust, low-tuning, hard to overfit.</p>
                <div class="code-block">model = <span class="fn">RandomForestClassifier</span>(n_estimators=<span class="num">100</span>)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Random Forest reduces variance because:',
              options: [
                { text: 'It averages predictions from many decorrelated trees.', code: false },
                { text: 'It uses one big tree.', code: false },
                { text: 'It uses logistic regression.', code: false },
                { text: 'It does no random sampling.', code: false }
              ],
              correct: 0,
              explanation: 'Average of many low-correlation predictors → low variance.'
            },
            {
              type: 'true-false',
              statement: 'Bagging trains models on bootstrap samples (with replacement) of the data.',
              correct: true,
              explanation: 'Bootstrap = sampling with replacement.'
            },
            {
              type: 'fill-blank',
              prompt: '500 trees.',
              codeLines: [
                { html: 'model = <span class="fn">RandomForestClassifier</span>(<span class="fn">_BLANK_</span>=<span class="num">500</span>)' }
              ],
              tokens: ['n_estimators', 'n_clusters', 'max_iter', 'lr'],
              correctAnswer: 'n_estimators',
              explanation: 'n_estimators = number of trees.'
            },
            {
              type: 'output-predict',
              prompt: 'Feature importance attribute:',
              code: `model.feature_importances_`,
              options: ['Per-feature importance scores', 'List of features', 'Tree depths', 'Predictions'],
              correct: 0,
              explanation: 'RF exposes per-feature importances.'
            },
            {
              type: 'match-pairs',
              prompt: 'Concept → meaning.',
              leftLabel: 'Concept',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Bagging', right: 'Average independent models' },
                { left: 'Bootstrap', right: 'Sample with replacement' },
                { left: 'Random Forest', right: 'Bagged trees + feature random' },
                { left: 'Out-of-bag', right: 'Estimate from unused samples' }
              ]
            }
          ]
        },
        {
          id: 'ml-u28-l2',
          name: 'Boosting',
          icon: '🚀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Models that correct each other',
              content: `<p><b>Boosting</b> trains models <i>sequentially</i>, each one focused on the mistakes of the previous.</p>
                <ul>
                  <li><b>AdaBoost</b> reweights misclassified examples.</li>
                  <li><b>Gradient Boosting</b> fits each new tree to the residuals.</li>
                  <li><b>XGBoost / LightGBM / CatBoost</b> are highly optimized GB libraries.</li>
                </ul>
                <p>Boosting reduces both bias and variance — and often wins Kaggle competitions on tabular data.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A core difference between bagging and boosting:',
              options: [
                { text: 'Bagging trains models in parallel; boosting trains sequentially.', code: false },
                { text: 'Bagging is supervised; boosting unsupervised.', code: false },
                { text: 'Boosting uses K-means.', code: false },
                { text: 'No difference.', code: false }
              ],
              correct: 0,
              explanation: 'Independent vs sequential model training.'
            },
            {
              type: 'true-false',
              statement: 'Gradient boosting fits each new model to the residuals (errors) of the current ensemble.',
              correct: true,
              explanation: 'Sequential error correction.'
            },
            {
              type: 'fill-blank',
              prompt: 'XGBoost classifier.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>(n_estimators=<span class="num">300</span>, learning_rate=<span class="num">0.05</span>)' }
              ],
              tokens: ['XGBClassifier', 'KMeans', 'PCA', 'GaussianNB'],
              correctAnswer: 'XGBClassifier',
              explanation: 'xgboost.XGBClassifier.'
            },
            {
              type: 'output-predict',
              prompt: 'A small learning rate in GBM:',
              code: `lr=0.01, n_estimators=2000`,
              options: ['Slower but often more accurate; needs more trees.', 'Always worse.', 'Faster training.', 'Useless.'],
              correct: 0,
              explanation: 'Small lr + many trees = standard recipe.'
            },
            {
              type: 'match-pairs',
              prompt: 'Library → strength.',
              leftLabel: 'Library',
              rightLabel: 'Strength',
              pairs: [
                { left: 'XGBoost', right: 'Battle-tested all-rounder' },
                { left: 'LightGBM', right: 'Very fast on big data' },
                { left: 'CatBoost', right: 'Handles categoricals well' },
                { left: 'sklearn GBM', right: 'Simple, no install fuss' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A boosting algorithm that reweights misclassified examples each round is ____Boost.',
              code: '',
              accept: ['Ada', 'ada', 'AdaBoost', 'adaboost'],
              explanation: 'AdaBoost (Adaptive Boosting).'
            }
          ]
        },
        {
          id: 'ml-u28-l3',
          name: 'Why Ensembles Win',
          icon: '🏆',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Wisdom of crowds',
              content: `<p>If errors of individual models are decorrelated, their averages cancel out. Diversity is the key.</p>
                <p>Stacking: train a meta-model on the predictions of base models. Often a small extra boost on top of bagging/boosting.</p>
                <p>Caveats: ensembles are slower at inference and harder to interpret.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Ensembles work best when:',
              options: [
                { text: 'Base models make different, decorrelated mistakes.', code: false },
                { text: 'All base models are identical.', code: false },
                { text: 'Base models are random guessers.', code: false },
                { text: 'There is no validation set.', code: false }
              ],
              correct: 0,
              explanation: 'Diversity → cancellation of errors.'
            },
            {
              type: 'true-false',
              statement: 'Stacking uses a meta-model that learns to combine base-model predictions.',
              correct: true,
              explanation: 'Layered ensembling.'
            },
            {
              type: 'output-predict',
              prompt: 'Inference cost of an ensemble:',
              code: `# vs single model`,
              options: ['Higher — must run all base models.', 'Lower.', 'Always equal.', 'Free.'],
              correct: 0,
              explanation: 'You sum up predictions from many models.'
            },
            {
              type: 'fill-blank',
              prompt: 'sklearn stacking.',
              codeLines: [
                { html: 'model = <span class="fn">_BLANK_</span>(estimators=base, final_estimator=meta)' }
              ],
              tokens: ['StackingClassifier', 'KMeans', 'GridSearchCV', 'PCA'],
              correctAnswer: 'StackingClassifier',
              explanation: 'sklearn.ensemble.StackingClassifier.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap ensembling techniques.',
              tokens: ['bagging', 'PCA', 'boosting', 'stacking', 'KMeans'],
              correctOrder: ["bagging", "boosting", "stacking"],
              explanation: 'Bagging, boosting, stacking are the big three.'
            },
            {
              type: 'type-answer',
              prompt: 'Bagging with random feature subsets per split is called a Random ________.',
              code: '',
              accept: ['Forest', 'forest'],
              explanation: 'Random Forest.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u29',
      name: 'Unit 29 · Reinforcement Learning',
      description: 'Learning by trial, error, and reward.',
      lessons: [
        {
          id: 'ml-u29-l1',
          name: 'Agent & Environment',
          icon: '🎮',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'The RL loop',
              content: `<p>An <b>agent</b> takes an <b>action</b> in an <b>environment</b>, which returns a <b>new state</b> and a <b>reward</b>. The agent learns a <b>policy</b> π(action | state) to maximize total reward.</p>
                <div class="code-block"><span class="kw">for</span> step <span class="kw">in</span> episode:<br>
                &nbsp;&nbsp;action = policy(state)<br>
                &nbsp;&nbsp;state, reward, done = env.step(action)</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In RL, the policy is:',
              options: [
                { text: 'A mapping from state to action (or action distribution).', code: false },
                { text: 'A loss function.', code: false },
                { text: 'A clustering.', code: false },
                { text: 'The environment.', code: false }
              ],
              correct: 0,
              explanation: 'π(a|s) defines the agent\'s behavior.'
            },
            {
              type: 'true-false',
              statement: 'Reward shapes what the agent learns to do.',
              correct: true,
              explanation: 'Reward design is critical (and tricky).'
            },
            {
              type: 'match-pairs',
              prompt: 'RL term → meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'Agent', right: 'Decision maker' },
                { left: 'Environment', right: 'World the agent acts in' },
                { left: 'State', right: 'Current situation' },
                { left: 'Reward', right: 'Scalar feedback' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Gym style step.',
              codeLines: [
                { html: 'obs, reward, done, info = env.<span class="fn">_BLANK_</span>(action)' }
              ],
              tokens: ['step', 'reset', 'render', 'sample'],
              correctAnswer: 'step',
              explanation: 'env.step(action) advances the environment.'
            },
            {
              type: 'output-predict',
              prompt: 'Episode ends when:',
              code: `done == True`,
              options: ['The terminal condition is reached.', 'Reward is 0.', 'State is 0.', 'Time = 1.'],
              correct: 0,
              explanation: 'done flag signals end of an episode.'
            }
          ]
        },
        {
          id: 'ml-u29-l2',
          name: 'Exploration vs Exploitation',
          icon: '🧭',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Try new things vs use what works',
              content: `<p><b>Exploit</b>: pick the action you currently believe is best.</p>
                <p><b>Explore</b>: try other actions to learn more.</p>
                <p>Too much exploit → stuck on suboptimal. Too much explore → never converge.</p>
                <p>Classic example: <b>multi-armed bandit</b>. Strategies: ε-greedy, UCB, Thompson sampling.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'ε-greedy means:',
              options: [
                { text: 'With probability ε, take a random action; otherwise act greedily.', code: false },
                { text: 'Always explore.', code: false },
                { text: 'Always exploit.', code: false },
                { text: 'Maximize ε.', code: false }
              ],
              correct: 0,
              explanation: 'A simple, effective explore/exploit balance.'
            },
            {
              type: 'true-false',
              statement: 'Pure exploitation can leave you stuck on a suboptimal action.',
              correct: true,
              explanation: 'You never learn that another arm is better.'
            },
            {
              type: 'output-predict',
              prompt: 'ε=0.1, action 0 with the highest estimated reward. What does the agent do most of the time?',
              code: `random.random() < 0.1`,
              options: ['Picks action 0 (greedy) 90% of the time.', 'Always random.', 'Always action 0.', 'Never acts.'],
              correct: 0,
              explanation: '10% explore, 90% exploit.'
            },
            {
              type: 'fill-blank',
              prompt: 'Decaying ε over time.',
              codeLines: [
                { html: 'epsilon = max(<span class="num">0.05</span>, epsilon * <span class="num">_BLANK_</span>)' }
              ],
              tokens: ['0.995', '1.5', '2.0', '0'],
              correctAnswer: '0.995',
              explanation: 'Decay factor slightly below 1 → ε shrinks over episodes.'
            },
            {
              type: 'match-pairs',
              prompt: 'Strategy → idea.',
              leftLabel: 'Strategy',
              rightLabel: 'Idea',
              pairs: [
                { left: 'ε-greedy', right: 'Random vs greedy with prob ε' },
                { left: 'UCB', right: 'Optimism under uncertainty' },
                { left: 'Thompson', right: 'Sample from posterior' },
                { left: 'Greedy', right: 'Always best estimate' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'A K-armed slot machine in RL terminology is a multi-_______ bandit.',
              code: '',
              accept: ['armed'],
              explanation: 'Multi-armed bandit.'
            }
          ]
        },
        {
          id: 'ml-u29-l3',
          name: 'Q-Values & Policies',
          icon: '💡',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Estimating future reward',
              content: `<p><b>Q(s, a)</b> = expected total future reward of taking action a in state s, then acting optimally.</p>
                <p><b>Q-learning</b> update:</p>
                <div class="code-block">Q(s,a) ← Q(s,a) + α [ r + γ max_a\' Q(s\',a\') - Q(s,a) ]</div>
                <p>γ (gamma) is the discount factor — how much we value future vs immediate reward.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'γ near 0 means the agent:',
              options: [
                { text: 'Cares mostly about immediate rewards.', code: false },
                { text: 'Cares only about distant rewards.', code: false },
                { text: 'Ignores rewards.', code: false },
                { text: 'Explores more.', code: false }
              ],
              correct: 0,
              explanation: 'Future rewards discounted heavily.'
            },
            {
              type: 'true-false',
              statement: 'Deep Q-Networks (DQN) approximate Q with a neural network.',
              correct: true,
              explanation: 'Famously used to play Atari from pixels.'
            },
            {
              type: 'output-predict',
              prompt: 'Greedy policy from Q-table:',
              code: `action = argmax_a Q(state, a)`,
              options: ['Pick the action with the highest Q-value for the current state.', 'Pick random.', 'Pick the smallest.', 'Pick action 0.'],
              correct: 0,
              explanation: 'Argmax over actions.'
            },
            {
              type: 'fill-blank',
              prompt: 'Discount factor.',
              codeLines: [
                { html: 'target = reward + <span class="fn">_BLANK_</span> * max(Q[next_state])' }
              ],
              tokens: ['gamma', 'lr', 'epsilon', 'alpha'],
              correctAnswer: 'gamma',
              explanation: 'γ discounts future Q.'
            },
            {
              type: 'match-pairs',
              prompt: 'RL method → idea.',
              leftLabel: 'Method',
              rightLabel: 'Idea',
              pairs: [
                { left: 'Q-learning', right: 'Learn Q(s, a) iteratively' },
                { left: 'Policy gradient', right: 'Directly optimize π' },
                { left: 'Actor-Critic', right: 'Policy + value baseline' },
                { left: 'DQN', right: 'NN approx of Q' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the Q-learning update.',
              tokens: ['Q', '←', 'Q', '+', 'α', '·', '[', 'TD_error', ']'],
              correctOrder: ["Q", "←", "Q", "+", "α", "·", "[", "TD_error", "]"],
              explanation: 'Q is updated by α times the temporal-difference error.'
            }
          ]
        }
      ]
    },
    {
      id: 'ml-u30',
      name: 'Unit 30 · Real-World Pitfalls',
      description: 'Things that go wrong outside the textbook.',
      lessons: [
        {
          id: 'ml-u30-l1',
          name: 'Leakage & Shift',
          icon: '🚨',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Hidden traps',
              content: `<p><b>Data leakage</b>: information from outside the training set sneaks in (e.g., fitting a scaler on the whole dataset, or using a future feature). Causes wildly optimistic offline scores.</p>
                <p><b>Distribution shift</b>: production data differs from training data (new users, seasonal changes). Models degrade silently.</p>
                <p>Always check: which features can I really have at prediction time?</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You fit StandardScaler on the full dataset before splitting. This is:',
              options: [
                { text: 'Data leakage — test stats influenced your scaler.', code: false },
                { text: 'Standard practice.', code: false },
                { text: 'A regularizer.', code: false },
                { text: 'A boosting trick.', code: false }
              ],
              correct: 0,
              explanation: 'Always fit preprocessing on train only.'
            },
            {
              type: 'true-false',
              statement: 'Including a "future" field (only known after the prediction time) is a form of leakage.',
              correct: true,
              explanation: 'Target leakage — you couldn\'t have it in production.'
            },
            {
              type: 'output-predict',
              prompt: 'Sign of distribution shift:',
              code: `# offline AUC=0.95, online AUC=0.65`,
              options: ['Production data differs from training data.', 'Model is perfect.', 'Always overfitting.', 'No issue.'],
              correct: 0,
              explanation: 'Big drop online suggests shift (or leakage in offline).'
            },
            {
              type: 'fill-blank',
              prompt: 'Always fit preprocessing on...',
              codeLines: [
                { html: 'scaler.<span class="fn">fit</span>(<span class="fn">_BLANK_</span>)' }
              ],
              tokens: ['X_train', 'X', 'X_test', 'full_data'],
              correctAnswer: 'X_train',
              explanation: 'Fit on train, transform train and test.'
            },
            {
              type: 'match-pairs',
              prompt: 'Pitfall → fix.',
              leftLabel: 'Pitfall',
              rightLabel: 'Fix',
              pairs: [
                { left: 'Target leakage', right: 'Remove future features' },
                { left: 'Scaler leakage', right: 'Fit on train only' },
                { left: 'Distribution shift', right: 'Monitor + retrain' },
                { left: 'Train-test overlap', right: 'Group split' }
              ]
            }
          ]
        },
        {
          id: 'ml-u30-l2',
          name: 'Bias, Fairness, Ethics',
          icon: '⚖️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Models reflect their data',
              content: `<p>If training data encodes historical bias, the model will too. Famous cases: biased hiring tools, unfair credit scoring, skewed face recognition.</p>
                <p>Mitigations:</p>
                <ul>
                  <li>Audit datasets for representativeness.</li>
                  <li>Use fairness metrics (demographic parity, equalized odds).</li>
                  <li>Allow human override on high-stakes decisions.</li>
                  <li>Be transparent about model limits.</li>
                </ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A model achieves equal accuracy across groups but very different false-positive rates. This is:',
              options: [
                { text: 'Possibly unfair — different error profiles by group.', code: false },
                { text: 'Always fine because accuracy is equal.', code: false },
                { text: 'A bug-free model.', code: false },
                { text: 'Impossible.', code: false }
              ],
              correct: 0,
              explanation: 'Fairness has multiple definitions; accuracy alone is not enough.'
            },
            {
              type: 'true-false',
              statement: 'You should consider where data came from before training a high-stakes model.',
              correct: true,
              explanation: 'Provenance matters more than performance for ethical use.'
            },
            {
              type: 'match-pairs',
              prompt: 'Issue → example.',
              leftLabel: 'Issue',
              rightLabel: 'Example',
              pairs: [
                { left: 'Historical bias', right: 'Past hiring patterns' },
                { left: 'Sampling bias', right: 'Survey only on phones' },
                { left: 'Label bias', right: 'Subjective annotators' },
                { left: 'Deployment harm', right: 'Misuse downstream' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'A model is 95% accurate overall but 60% for one demographic. Action:',
              code: `# audit performance per group`,
              options: ['Investigate, report, and likely retrain / change features.', 'Ship it — 95% is fine.', 'Ignore.', 'Use bigger model.'],
              correct: 0,
              explanation: 'Overall accuracy can hide group disparities.'
            },
            {
              type: 'fill-blank',
              prompt: 'A common fairness metric.',
              codeLines: [
                { html: '<span class="com"># equal opportunity / demographic</span> <span class="fn">_BLANK_</span>' }
              ],
              tokens: ['parity', 'descent', 'sampling', 'splitting'],
              correctAnswer: 'parity',
              explanation: 'Demographic parity is a baseline fairness criterion.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Tap responsible-ML practices.',
              tokens: ['data_audit', 'human_review', 'silent_deploy', 'fairness_metric', 'no_docs'],
              correctOrder: ["data_audit", "human_review", "fairness_metric"],
              explanation: 'Audit data, allow human review, track fairness metrics.'
            },
            {
              type: 'type-answer',
              prompt: 'A model giving systematically worse predictions for a group has a __________ problem.',
              code: '',
              accept: ['bias', 'fairness'],
              explanation: 'Bias / fairness problem.'
            }
          ]
        }
      ]
    }
  ]
});

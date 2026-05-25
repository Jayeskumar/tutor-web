PUSH({
  id: 'mern',
  name: 'MERN Stack',
  icon: '🥞',
  color: '#00c853',
  description: 'Full-stack with MongoDB + Express + React + Node — from JavaScript to deployment.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'mern-u1', name: 'Unit 1 · The MERN Stack', description: 'What it is and why it\'s popular',
      lessons: [
        {
          id: 'mern-u1-l1', name: 'The 4 letters', icon: '🥞', xp: 15,
          challenges: [
            { type: 'concept', title: 'JavaScript everywhere', content: `<p><strong>MERN</strong> = MongoDB · Express · React · Node.js. The killer feature: <strong>one language</strong> (JavaScript) from database queries to UI.</p>
<div class="code-block"><span class="com">M — MongoDB</span>    Document database (JSON-like)
<span class="com">E — Express</span>     Web framework on top of Node.js
<span class="com">R — React</span>       UI library (Facebook, 2013)
<span class="com">N — Node.js</span>     JavaScript runtime (V8 engine, outside browser)

<span class="com">Data flow:</span>
Browser (React) → HTTP → Express (Node) → Mongoose → MongoDB</div>` },
            { type: 'multiple-choice', prompt: 'What does the "M" in MERN stand for?',
              options: [{text:'MySQL', code:false},{text:'MongoDB', code:false},{text:'MariaDB', code:false},{text:'Mongoose', code:false}],
              correct: 1, explanation: 'MongoDB — a document database.' },
            { type: 'true-false', statement: 'MERN uses JavaScript on both the client AND the server.', correct: true, explanation: 'That\'s the main appeal — one language across the stack.' },
            { type: 'match-pairs', prompt: 'Match the layer.', leftLabel: 'Tech', rightLabel: 'Role',
              pairs: [{left:'MongoDB', right:'Database'},{left:'Express', right:'HTTP server / API'},{left:'React', right:'UI / frontend'},{left:'Node.js', right:'JS runtime'}] },
            { type: 'multiple-choice', prompt: 'Variants you\'ll hear of:',
              options: [{text:'MEAN (Angular instead of React)', code:false},{text:'MEVN (Vue instead of React)', code:false},{text:'PERN (PostgreSQL instead of MongoDB)', code:false},{text:'All of the above', code:false}],
              correct: 3, explanation: 'Same stack, different pieces. MERN is just the most popular combination.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Modern JS ============== */
    {
      id: 'mern-u2', name: 'Unit 2 · Modern JavaScript (ES6+)', description: 'The dialect you\'ll actually write',
      lessons: [
        {
          id: 'mern-u2-l1', name: 'Arrow funcs, destructuring, spread', icon: '🟨', xp: 20,
          challenges: [
            { type: 'concept', title: 'The 80% you\'ll use daily', content: `<div class="code-block"><span class="com">// Arrow functions</span>
<span class="kw">const</span> <span class="fn">add</span> = (a, b) => a + b;

<span class="com">// Destructuring</span>
<span class="kw">const</span> { name, age } = user;
<span class="kw">const</span> [first, ...rest] = arr;

<span class="com">// Spread / rest</span>
<span class="kw">const</span> bigger = [...arr, <span class="num">99</span>];
<span class="kw">const</span> merged = { ...a, ...b };

<span class="com">// Template literals</span>
<span class="kw">const</span> msg = <span class="str">\`Hello, \${name}!\`</span>;

<span class="com">// Optional chaining + nullish coalescing</span>
user?.address?.zip ?? <span class="str">"unknown"</span></div>` },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `<span class="kw">const</span> { a, b = <span class="num">10</span> } = { a: <span class="num">1</span> };
<span class="ty">console</span>.<span class="fn">log</span>(a, b);`,
              options: ['1 undefined','1 10','undefined 10','undefined undefined'], correct: 1, explanation: 'b uses default since not provided.' },
            { type: 'multiple-choice', prompt: 'Arrow functions differ from regular functions in:',
              options: [{text:'Slower', code:false},{text:'They don\'t bind their own "this"', code:false},{text:'No arguments allowed', code:false},{text:'They\'re hoisted', code:false}],
              correct: 1, explanation: 'Arrows inherit "this" from the enclosing scope — huge for React callbacks.' },
            { type: 'fill-blank', prompt: 'Spread into a new array:',
              codeLines: [{html:'<span class="kw">const</span> copy = [<span class="fn">_BLANK_</span> arr];'}],
              tokens: ['...','&&','*','#'], correctAnswer: '...', explanation: 'Spread operator copies elements.' }
          ]
        },
        {
          id: 'mern-u2-l2', name: 'Async / await + Promises', icon: '⏱️', xp: 25,
          challenges: [
            { type: 'concept', title: 'JS is async — embrace it', content: `<div class="code-block"><span class="com">// Old: callbacks (callback hell)</span>
<span class="fn">getUser</span>(id, (err, user) => {
  <span class="fn">getPosts</span>(user.id, (err, posts) => { ... });
});

<span class="com">// Better: Promises</span>
<span class="fn">getUser</span>(id)
  .<span class="fn">then</span>(user => <span class="fn">getPosts</span>(user.id))
  .<span class="fn">then</span>(posts => ...)
  .<span class="fn">catch</span>(err => ...);

<span class="com">// Best: async/await (syntactic sugar over Promises)</span>
<span class="kw">async function</span> <span class="fn">main</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn">getUser</span>(id);
    <span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn">getPosts</span>(user.id);
  } <span class="kw">catch</span> (err) { ... }
}</div>` },
            { type: 'multiple-choice', prompt: 'What does <code>await</code> do?',
              options: [{text:'Stops the entire program', code:false},{text:'Pauses the async function until the promise resolves', code:false},{text:'Speeds up async code', code:false},{text:'Throws an error', code:false}],
              correct: 1, explanation: 'It "unwraps" a Promise — without blocking the whole event loop.' },
            { type: 'true-false', statement: 'You can only use <code>await</code> inside an <code>async</code> function (or top-level in modules).', correct: true, explanation: 'Async marks the function as Promise-returning.' },
            { type: 'multiple-choice', prompt: 'Best way to run two independent async calls in parallel?',
              options: [{text:'await one then await the other', code:true},{text:'Promise.all([call1(), call2()])', code:true},{text:'A for loop with await', code:true},{text:'setTimeout', code:true}],
              correct: 1, explanation: 'Promise.all kicks both off then awaits both — much faster than serial awaits.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Node.js ============== */
    {
      id: 'mern-u3', name: 'Unit 3 · Node.js Essentials', description: 'JavaScript on the server',
      lessons: [
        {
          id: 'mern-u3-l1', name: 'Modules & npm', icon: '📦', xp: 20,
          challenges: [
            { type: 'concept', title: 'Packages, scripts, the basics', content: `<div class="code-block"><span class="com"># Initialize a project</span>
npm init -y

<span class="com"># Install a package</span>
npm install express mongoose dotenv
npm install -D nodemon         <span class="com"># dev-only</span>

<span class="com"># package.json</span>
{
  "name": "my-app",
  "scripts": {
    "start": "node server.js",
    "dev":   "nodemon server.js"
  },
  "dependencies": { "express": "^4.x" },
  "devDependencies": { "nodemon": "^3.x" }
}

<span class="com"># Run</span>
npm run dev</div>` },
            { type: 'multiple-choice', prompt: 'What is the difference between dependencies and devDependencies?',
              options: [{text:'devDependencies are only for dev environments (tests, linters)', code:false},{text:'No difference', code:false},{text:'devDependencies are paid', code:false},{text:'Just a naming convention', code:false}],
              correct: 0, explanation: 'devDeps don\'t ship to production. Saves install time + bundle size.' },
            { type: 'multiple-choice', prompt: 'CommonJS vs ES Modules — most modern Node.js code uses:',
              options: [{text:'require/module.exports (CJS)', code:false},{text:'import/export (ESM)', code:false},{text:'Either, depending on package.json "type"', code:false},{text:'XML', code:false}],
              correct: 2, explanation: 'Set <code>"type": "module"</code> for ESM. Both still common — many tutorials use CJS.' },
            { type: 'fill-blank', prompt: 'Install Express:',
              codeLines: [{html:'npm <span class="fn">_BLANK_</span> express'}],
              tokens: ['install','get','add','run'], correctAnswer: 'install', explanation: 'npm install (or "i" shortcut).' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Express ============== */
    {
      id: 'mern-u4', name: 'Unit 4 · Express.js — HTTP & APIs', description: 'Web framework on top of Node',
      lessons: [
        {
          id: 'mern-u4-l1', name: 'Routes & middleware', icon: '🛣️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A minimal Express app', content: `<div class="code-block"><span class="kw">import</span> express <span class="kw">from</span> <span class="str">"express"</span>;

<span class="kw">const</span> app = <span class="fn">express</span>();

<span class="com">// middleware — runs on every request</span>
app.<span class="fn">use</span>(express.<span class="fn">json</span>());
app.<span class="fn">use</span>((req, res, next) => {
  <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">\`\${req.method} \${req.url}\`</span>);
  <span class="fn">next</span>();   <span class="com">// pass to next handler</span>
});

<span class="com">// routes</span>
app.<span class="fn">get</span>(<span class="str">"/users"</span>, (req, res) => res.<span class="fn">json</span>(allUsers));
app.<span class="fn">get</span>(<span class="str">"/users/:id"</span>, (req, res) => {
  <span class="kw">const</span> u = <span class="fn">findUser</span>(req.params.id);
  <span class="kw">if</span> (!u) <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">json</span>({ error: <span class="str">"not found"</span> });
  res.<span class="fn">json</span>(u);
});
app.<span class="fn">post</span>(<span class="str">"/users"</span>, (req, res) => {
  <span class="kw">const</span> u = <span class="fn">createUser</span>(req.body);
  res.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(u);
});

app.<span class="fn">listen</span>(<span class="num">3000</span>, () => <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">"on :3000"</span>));</div>` },
            { type: 'multiple-choice', prompt: 'Middleware functions in Express signature is:',
              options: [{text:'(req, res)', code:true},{text:'(req, res, next)', code:true},{text:'(req)', code:true},{text:'() => Promise', code:true}],
              correct: 1, explanation: 'Three params — call next() to pass to the next middleware.' },
            { type: 'multiple-choice', prompt: 'What does <code>express.json()</code> do?',
              options: [{text:'Sends JSON responses', code:false},{text:'Parses incoming JSON request bodies into req.body', code:false},{text:'Validates JSON', code:false},{text:'Compresses responses', code:false}],
              correct: 1, explanation: 'Without it, req.body is undefined for JSON POST requests.' },
            { type: 'fill-blank', prompt: 'Status 201 means:',
              codeLines: [{html:'res.<span class="fn">_BLANK_</span>(<span class="num">201</span>).<span class="fn">json</span>(newResource);'}],
              tokens: ['status','code','send','set'], correctAnswer: 'status', explanation: 'res.status(N) sets the HTTP status.' },
            { type: 'true-false', statement: 'You can have route-specific middleware: <code>app.get("/admin", adminAuth, handler)</code>', correct: true, explanation: 'Pass any number of middleware functions before the handler.' }
          ]
        },
        {
          id: 'mern-u4-l2', name: 'Error handling & async routes', icon: '⚠️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Async errors need care', content: `<div class="code-block"><span class="com">// BAD: async errors silently swallowed</span>
app.<span class="fn">get</span>(<span class="str">"/users/:id"</span>, <span class="kw">async</span> (req, res) => {
  <span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">findById</span>(req.params.id);  <span class="com">// what if this throws?</span>
  res.<span class="fn">json</span>(u);
});

<span class="com">// GOOD: try/catch + next</span>
app.<span class="fn">get</span>(<span class="str">"/users/:id"</span>, <span class="kw">async</span> (req, res, next) => {
  <span class="kw">try</span> {
    <span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">findById</span>(req.params.id);
    res.<span class="fn">json</span>(u);
  } <span class="kw">catch</span> (err) {
    <span class="fn">next</span>(err);   <span class="com">// hand off to error middleware</span>
  }
});

<span class="com">// Error middleware (4 params)</span>
app.<span class="fn">use</span>((err, req, res, next) => {
  <span class="ty">console</span>.<span class="fn">error</span>(err);
  res.<span class="fn">status</span>(err.status || <span class="num">500</span>).<span class="fn">json</span>({ error: err.message });
});</div>` },
            { type: 'multiple-choice', prompt: 'Express recognizes error-handling middleware by:',
              options: [{text:'Naming it "errorHandler"', code:false},{text:'Having 4 parameters: (err, req, res, next)', code:false},{text:'A special decorator', code:false},{text:'Returning false', code:false}],
              correct: 1, explanation: '4-arg middleware = error handler. Position it LAST.' },
            { type: 'true-false', statement: 'Express 5 (latest) auto-handles promise rejections — no try/catch needed.', correct: true, explanation: 'Express 5+ catches async errors automatically. For Express 4, use try/catch or an async wrapper.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — MongoDB ============== */
    {
      id: 'mern-u5', name: 'Unit 5 · MongoDB', description: 'Document database basics',
      lessons: [
        {
          id: 'mern-u5-l1', name: 'Documents & collections', icon: '🍃', xp: 20,
          challenges: [
            { type: 'concept', title: 'JSON-shaped data', content: `<div class="code-block"><span class="com">// A document (one row, BSON internally)</span>
{
  _id: ObjectId("6510..."),
  name: "Ana",
  email: "ana@example.com",
  age: 28,
  tags: ["admin", "early-adopter"],
  address: { city: "Berlin", zip: "10115" }
}

<span class="com">// A collection = many documents</span>
db.users.find({ age: { $gte: 18 } })
db.users.insertOne({ name: "Bob" })
db.users.updateOne({ _id: ... }, { $set: { age: 30 } })
db.users.deleteOne({ _id: ... })</div>
<p>Unlike SQL, schemas are flexible — documents in the same collection can have different fields.</p>` },
            { type: 'multiple-choice', prompt: 'MongoDB is best described as:',
              options: [{text:'Relational SQL DB', code:false},{text:'Document NoSQL DB', code:false},{text:'Key-value store', code:false},{text:'Graph DB', code:false}],
              correct: 1, explanation: 'Documents (JSON-like) instead of rows + columns.' },
            { type: 'multiple-choice', prompt: 'Every document has a unique:',
              options: [{text:'_id (ObjectId by default)', code:true},{text:'name', code:true},{text:'index', code:true},{text:'__v', code:true}],
              correct: 0, explanation: 'Mongo auto-generates _id if you don\'t provide one.' },
            { type: 'true-false', statement: 'Two documents in the same MongoDB collection can have different fields.', correct: true, explanation: 'Schema-less by default. Mongoose adds schemas on the app side.' },
            { type: 'fill-blank', prompt: 'Find users older than 18:',
              codeLines: [{html:'db.users.<span class="fn">find</span>({ age: { <span class="fn">_BLANK_</span>: <span class="num">18</span> } })'}],
              tokens: ['$gt','$lt','>','GT'], correctAnswer: '$gt', explanation: '$gt = greater than. Mongo uses these operators.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Mongoose ============== */
    {
      id: 'mern-u6', name: 'Unit 6 · Mongoose — Schemas & Models', description: 'ODM for Node.js',
      lessons: [
        {
          id: 'mern-u6-l1', name: 'Define a schema', icon: '🦭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Type-safe MongoDB from Node', content: `<div class="code-block"><span class="kw">import</span> mongoose <span class="kw">from</span> <span class="str">"mongoose"</span>;

<span class="kw">const</span> userSchema = <span class="kw">new</span> mongoose.<span class="ty">Schema</span>({
  name:  { type: <span class="ty">String</span>, required: <span class="kw">true</span> },
  email: { type: <span class="ty">String</span>, required: <span class="kw">true</span>, unique: <span class="kw">true</span> },
  age:   { type: <span class="ty">Number</span>, min: <span class="num">0</span> },
  role:  { type: <span class="ty">String</span>, enum: [<span class="str">"user"</span>, <span class="str">"admin"</span>], default: <span class="str">"user"</span> },
  createdAt: { type: <span class="ty">Date</span>, default: <span class="ty">Date</span>.<span class="fn">now</span> }
});

<span class="kw">const</span> <span class="ty">User</span> = mongoose.<span class="fn">model</span>(<span class="str">"User"</span>, userSchema);

<span class="com">// Use it</span>
<span class="kw">await</span> mongoose.<span class="fn">connect</span>(<span class="str">"mongodb://localhost:27017/myapp"</span>);
<span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">create</span>({ name: <span class="str">"Ana"</span>, email: <span class="str">"a@x.com"</span> });
<span class="kw">const</span> list = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">find</span>({ role: <span class="str">"admin"</span> });</div>` },
            { type: 'multiple-choice', prompt: 'What is an ODM?',
              options: [{text:'Object-Document Mapper — like ORM but for document DBs', code:false},{text:'Original Database Mongo', code:false},{text:'A query language', code:false},{text:'A server', code:false}],
              correct: 0, explanation: 'Mongoose maps JS objects ↔ MongoDB documents with schemas, validation, hooks.' },
            { type: 'multiple-choice', prompt: 'Schema validation in Mongoose runs:',
              options: [{text:'Only on the client', code:false},{text:'Before save, in your Node app', code:false},{text:'In MongoDB itself', code:false},{text:'Never', code:false}],
              correct: 1, explanation: 'Validation runs in your app before sending to Mongo. (Mongo also has its own validation, separately.)' },
            { type: 'true-false', statement: 'Mongoose adds a virtual <code>id</code> getter that returns _id as a string.', correct: true, explanation: 'Handy for JSON responses.' },
            { type: 'fill-blank', prompt: 'Find ALL users:',
              codeLines: [{html:'<span class="kw">const</span> users = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">_BLANK_</span>();'}],
              tokens: ['find','findAll','all','getAll'], correctAnswer: 'find', explanation: 'find() with no args returns all docs.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — React ============== */
    {
      id: 'mern-u7', name: 'Unit 7 · React — Components & JSX', description: 'Building UIs',
      lessons: [
        {
          id: 'mern-u7-l1', name: 'Components, props, JSX', icon: '⚛️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A React component', content: `<div class="code-block"><span class="com">// Functional component (modern way)</span>
<span class="kw">function</span> <span class="fn">Greeting</span>({ name, age }) {
  <span class="kw">return</span> (
    &lt;div className=<span class="str">"greeting"</span>&gt;
      &lt;h1&gt;Hello, {name}!&lt;/h1&gt;
      &lt;p&gt;You are {age} years old.&lt;/p&gt;
    &lt;/div&gt;
  );
}

<span class="com">// Use it</span>
&lt;Greeting name=<span class="str">"Ana"</span> age={<span class="num">28</span>} /&gt;</div>
<p><strong>JSX</strong> looks like HTML but compiles to JavaScript. <code>className</code> instead of <code>class</code> (because <code>class</code> is a JS keyword).</p>` },
            { type: 'multiple-choice', prompt: 'In JSX, why use <code>className</code> instead of <code>class</code>?',
              options: [{text:'React forces it', code:false},{text:'Because "class" is a reserved keyword in JS', code:false},{text:'Faster', code:false},{text:'For accessibility', code:false}],
              correct: 1, explanation: 'JSX compiles to JS where "class" is reserved for ES6 classes.' },
            { type: 'multiple-choice', prompt: 'Props in React are:',
              options: [{text:'Mutable inside the child', code:false},{text:'Read-only — parent owns them', code:false},{text:'Always strings', code:false},{text:'Global state', code:false}],
              correct: 1, explanation: 'Children must NOT modify props. Use state for changing values inside a component.' },
            { type: 'true-false', statement: 'A React component must return a single root element (or a Fragment <code>&lt;&gt;...&lt;/&gt;</code>).', correct: true, explanation: 'JSX has to evaluate to one expression. Use <> </> when you don\'t want an extra div.' },
            { type: 'output-predict', prompt: 'What renders?',
              code: `&lt;Greeting name=<span class="str">"Bob"</span> /&gt;
<span class="com">// where Greeting only uses {name}, age defaults to undefined</span>`,
              options: ['Hello, Bob!','undefined Bob','Error','Empty'], correct: 0, explanation: 'undefined props simply render as empty.' }
          ]
        },
        {
          id: 'mern-u7-l2', name: 'Events & conditional rendering', icon: '🎨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Click, show, hide', content: `<div class="code-block"><span class="kw">function</span> <span class="fn">App</span>() {
  <span class="kw">const</span> <span class="fn">handleClick</span> = () => <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">"clicked!"</span>);

  <span class="kw">const</span> isLoggedIn = <span class="kw">true</span>;
  <span class="kw">const</span> items = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>];

  <span class="kw">return</span> (
    &lt;&gt;
      &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;

      {isLoggedIn && &lt;p&gt;Welcome back!&lt;/p&gt;}
      {isLoggedIn ? &lt;p&gt;Hi&lt;/p&gt; : &lt;p&gt;Please log in&lt;/p&gt;}

      &lt;ul&gt;
        {items.map(item => &lt;li key={item}&gt;{item}&lt;/li&gt;)}
      &lt;/ul&gt;
    &lt;/&gt;
  );
}</div>` },
            { type: 'multiple-choice', prompt: 'Why does each <code>&lt;li&gt;</code> need a <code>key</code> prop?',
              options: [{text:'For styling', code:false},{text:'So React can efficiently track which items changed', code:false},{text:'For SEO', code:false},{text:'Required by HTML', code:false}],
              correct: 1, explanation: 'Keys help React\'s reconciliation algorithm match items between renders.' },
            { type: 'multiple-choice', prompt: 'Best key for a list of items?',
              options: [{text:'The array index', code:false},{text:'A stable unique id from your data', code:false},{text:'Math.random()', code:false},{text:'The item\'s string content if names are unique', code:false}],
              correct: 1, explanation: 'Indexes break when items reorder; random keys defeat the optimization. Stable IDs are best.' },
            { type: 'true-false', statement: 'JSX event handlers use camelCase: <code>onClick</code>, not <code>onclick</code>.', correct: true, explanation: 'All React events are camelCase: onClick, onChange, onSubmit.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Hooks ============== */
    {
      id: 'mern-u8', name: 'Unit 8 · React Hooks', description: 'State and side effects',
      lessons: [
        {
          id: 'mern-u8-l1', name: 'useState', icon: '🪝', xp: 25,
          challenges: [
            { type: 'concept', title: 'Local component state', content: `<div class="code-block"><span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">function</span> <span class="fn">Counter</span>() {
  <span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>(<span class="num">0</span>);

  <span class="kw">return</span> (
    &lt;&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => <span class="fn">setCount</span>(count + <span class="num">1</span>)}&gt;+&lt;/button&gt;
      &lt;button onClick={() => <span class="fn">setCount</span>(c => c - <span class="num">1</span>)}&gt;-&lt;/button&gt;
      &lt;button onClick={() => <span class="fn">setCount</span>(<span class="num">0</span>)}&gt;reset&lt;/button&gt;
    &lt;/&gt;
  );
}</div>
<p>Calling <code>setCount</code> triggers a re-render. State updates are <strong>asynchronous</strong> and batched.</p>` },
            { type: 'multiple-choice', prompt: 'Setting state directly (<code>count = 5</code>) without setState:',
              options: [{text:'Works fine', code:false},{text:'Won\'t trigger a re-render', code:false},{text:'Faster', code:false},{text:'Required by React 19', code:false}],
              correct: 1, explanation: 'React only re-renders when you call the setter. Mutating directly = no update.' },
            { type: 'multiple-choice', prompt: '<code>setCount(c => c + 1)</code> (functional) is preferred over <code>setCount(count + 1)</code> when:',
              options: [{text:'Always', code:false},{text:'You depend on the previous state (avoids stale closures)', code:false},{text:'For performance', code:false},{text:'Never matters', code:false}],
              correct: 1, explanation: 'Functional updater always sees the latest state — critical inside batched / async code.' },
            { type: 'true-false', statement: 'Calling <code>setCount(5)</code> twice in a row sets count to 10.', correct: false, explanation: 'No — both set it to 5. Use the functional form to add: <code>setCount(c => c + 1)</code> twice.' }
          ]
        },
        {
          id: 'mern-u8-l2', name: 'useEffect for side effects', icon: '⚡', xp: 25,
          challenges: [
            { type: 'concept', title: 'When you need to reach outside the component', content: `<div class="code-block"><span class="kw">import</span> { useEffect, useState } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">function</span> <span class="fn">UserProfile</span>({ userId }) {
  <span class="kw">const</span> [user, setUser] = <span class="fn">useState</span>(<span class="kw">null</span>);

  <span class="fn">useEffect</span>(() => {
    <span class="fn">fetch</span>(<span class="str">\`/api/users/\${userId}\`</span>)
      .<span class="fn">then</span>(r => r.<span class="fn">json</span>())
      .<span class="fn">then</span>(<span class="fn">setUser</span>);
  }, [userId]);    <span class="com">// dependencies — re-run when userId changes</span>

  <span class="kw">if</span> (!user) <span class="kw">return</span> &lt;p&gt;Loading...&lt;/p&gt;;
  <span class="kw">return</span> &lt;p&gt;{user.name}&lt;/p&gt;;
}</div>
<p>The dependency array is critical: <code>[]</code> = only on mount, <code>[deps]</code> = when deps change, missing = every render (often a bug).</p>` },
            { type: 'multiple-choice', prompt: 'You want code to run ONCE when component mounts. Pass:',
              options: [{text:'No dependency array', code:false},{text:'Empty array []', code:false},{text:'A function', code:false},{text:'null', code:false}],
              correct: 1, explanation: '[] = no dependencies → effect runs once after mount.' },
            { type: 'multiple-choice', prompt: 'A "cleanup" function in useEffect is for:',
              options: [{text:'CSS cleanup', code:false},{text:'Unsubscribing timers, listeners, subscriptions before re-running or unmounting', code:false},{text:'Validation', code:false},{text:'No purpose', code:false}],
              correct: 1, explanation: 'Return a function from useEffect — React calls it on cleanup. Critical to avoid leaks.' },
            { type: 'true-false', statement: 'Missing dependencies in useEffect is the most common React bug — stale closures.', correct: true, explanation: 'ESLint plugin <code>react-hooks/exhaustive-deps</code> catches these.' }
          ]
        },
        {
          id: 'mern-u8-l3', name: 'Other hooks & custom hooks', icon: '🪢', xp: 25,
          challenges: [
            { type: 'concept', title: 'Beyond useState/useEffect', content: `<div class="code-block"><span class="com">useContext</span>     read from a Context provider
<span class="com">useReducer</span>     complex state — Redux-style local
<span class="com">useMemo</span>        memoize expensive computations
<span class="com">useCallback</span>    memoize functions for child component identity
<span class="com">useRef</span>         mutable values that don\'t cause re-renders; DOM refs

<span class="com">// Custom hook — reusable logic</span>
<span class="kw">function</span> <span class="fn">useFetch</span>(url) {
  <span class="kw">const</span> [data, setData] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="fn">useEffect</span>(() => {
    <span class="fn">fetch</span>(url).<span class="fn">then</span>(r => r.<span class="fn">json</span>()).<span class="fn">then</span>(<span class="fn">setData</span>).<span class="fn">catch</span>(<span class="fn">setError</span>);
  }, [url]);
  <span class="kw">return</span> { data, error };
}</div>` },
            { type: 'multiple-choice', prompt: 'Custom hook names MUST start with:',
              options: [{text:'"hook"', code:true},{text:'"use" (camelCase: useX)', code:true},{text:'"my"', code:true},{text:'Anything', code:true}],
              correct: 1, explanation: 'React uses the "use" prefix to enforce hooks rules.' },
            { type: 'multiple-choice', prompt: 'When should you use <code>useMemo</code>?',
              options: [{text:'For every variable', code:false},{text:'Only for expensive computations that re-run on every render', code:false},{text:'Always — it\'s free', code:false},{text:'For state', code:false}],
              correct: 1, explanation: 'Memoization has overhead; use it only when measured to help.' },
            { type: 'true-false', statement: 'Hooks must be called at the TOP LEVEL of a component — never inside conditionals or loops.', correct: true, explanation: 'React tracks hooks by call order. Conditionals break that.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — React Router ============== */
    {
      id: 'mern-u9', name: 'Unit 9 · React Router', description: 'Client-side routing',
      lessons: [
        {
          id: 'mern-u9-l1', name: 'Routes & links', icon: '🧭', xp: 20,
          challenges: [
            { type: 'concept', title: 'Multiple pages without reloading', content: `<div class="code-block"><span class="kw">import</span> { BrowserRouter, Routes, Route, Link, useParams } <span class="kw">from</span> <span class="str">"react-router-dom"</span>;

<span class="kw">function</span> <span class="fn">App</span>() {
  <span class="kw">return</span> (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to=<span class="str">"/"</span>&gt;Home&lt;/Link&gt;
        &lt;Link to=<span class="str">"/about"</span>&gt;About&lt;/Link&gt;
        &lt;Link to=<span class="str">"/users/42"</span>&gt;User 42&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Routes&gt;
        &lt;Route path=<span class="str">"/"</span> element={&lt;Home /&gt;} /&gt;
        &lt;Route path=<span class="str">"/about"</span> element={&lt;About /&gt;} /&gt;
        &lt;Route path=<span class="str">"/users/:id"</span> element={&lt;UserProfile /&gt;} /&gt;
        &lt;Route path=<span class="str">"*"</span> element={&lt;NotFound /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

<span class="kw">function</span> <span class="fn">UserProfile</span>() {
  <span class="kw">const</span> { id } = <span class="fn">useParams</span>();
  <span class="kw">return</span> &lt;h1&gt;User {id}&lt;/h1&gt;;
}</div>` },
            { type: 'multiple-choice', prompt: 'Why use <code>&lt;Link&gt;</code> instead of <code>&lt;a&gt;</code>?',
              options: [{text:'Looks better', code:false},{text:'<a> causes a full page reload; Link does client-side navigation', code:false},{text:'Required by React', code:false},{text:'No difference', code:false}],
              correct: 1, explanation: 'Link uses pushState — no network round-trip for the page itself.' },
            { type: 'multiple-choice', prompt: '<code>useParams()</code> returns:',
              options: [{text:'Query string params', code:false},{text:'Route parameters from the URL pattern (:id etc.)', code:false},{text:'Form data', code:false},{text:'Headers', code:false}],
              correct: 1, explanation: 'For query strings use useSearchParams.' },
            { type: 'true-false', statement: 'A <code>path="*"</code> route is a catch-all for unmatched URLs (404 page).', correct: true, explanation: 'Place it last in the Routes block.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — State management ============== */
    {
      id: 'mern-u10', name: 'Unit 10 · State Management', description: 'Beyond local state',
      lessons: [
        {
          id: 'mern-u10-l1', name: 'Context, Zustand, Redux', icon: '🗂️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Sharing state across components', content: `<div class="code-block"><span class="com">// 1. React Context (built-in, fine for small apps)</span>
<span class="kw">const</span> <span class="ty">AuthContext</span> = <span class="fn">createContext</span>(<span class="kw">null</span>);

<span class="kw">function</span> <span class="fn">App</span>() {
  <span class="kw">const</span> [user, setUser] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">return</span> (
    &lt;AuthContext.Provider value={{ user, setUser }}&gt;
      &lt;Routes /&gt;
    &lt;/AuthContext.Provider&gt;
  );
}
<span class="com">// Consume anywhere:</span>
<span class="kw">const</span> { user } = <span class="fn">useContext</span>(<span class="ty">AuthContext</span>);

<span class="com">// 2. Zustand (lightweight, popular)</span>
<span class="kw">const</span> <span class="fn">useStore</span> = <span class="fn">create</span>(set => ({
  count: <span class="num">0</span>,
  inc: () => <span class="fn">set</span>(s => ({ count: s.count + <span class="num">1</span> }))
}));

<span class="com">// 3. Redux Toolkit (heavyweight, enterprise)</span>
<span class="com">// Slices, reducers, dispatch — strict but predictable</span></div>` },
            { type: 'multiple-choice', prompt: 'For a small app needing to share user info — best first choice?',
              options: [{text:'Redux', code:false},{text:'React Context', code:false},{text:'localStorage only', code:false},{text:'A global variable', code:false}],
              correct: 1, explanation: 'Context is built-in and enough for small needs. Add a library only when needed.' },
            { type: 'multiple-choice', prompt: 'When does Context cause too many re-renders?',
              options: [{text:'When the provider\'s value changes — all consumers re-render', code:false},{text:'Never', code:false},{text:'Only on mount', code:false},{text:'Random', code:false}],
              correct: 0, explanation: 'Provider value change → every consumer re-renders. Zustand selectors are more granular.' },
            { type: 'true-false', statement: 'Redux Toolkit is the modern way to use Redux — much less boilerplate than classic Redux.', correct: true, explanation: 'Use Redux Toolkit, not vanilla Redux, in 2024+.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Connecting frontend/backend ============== */
    {
      id: 'mern-u11', name: 'Unit 11 · Connecting Frontend & Backend', description: 'fetch, axios, CORS',
      lessons: [
        {
          id: 'mern-u11-l1', name: 'Making HTTP calls', icon: '🔗', xp: 25,
          challenges: [
            { type: 'concept', title: 'From React to Express', content: `<div class="code-block"><span class="com">// fetch (built-in)</span>
<span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"/api/users"</span>, {
  method: <span class="str">"POST"</span>,
  headers: { <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span> },
  body: <span class="ty">JSON</span>.<span class="fn">stringify</span>({ name: <span class="str">"Ana"</span> })
});
<span class="kw">if</span> (!res.ok) <span class="kw">throw new Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
<span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();

<span class="com">// axios (more ergonomic)</span>
<span class="kw">import</span> axios <span class="kw">from</span> <span class="str">"axios"</span>;
<span class="kw">const</span> { data } = <span class="kw">await</span> axios.<span class="fn">post</span>(<span class="str">"/api/users"</span>, { name: <span class="str">"Ana"</span> });

<span class="com">// React Query / TanStack Query (recommended for data fetching)</span>
<span class="kw">const</span> { data, isLoading, error } = <span class="fn">useQuery</span>({
  queryKey: [<span class="str">"users"</span>],
  queryFn: () => <span class="fn">fetch</span>(<span class="str">"/api/users"</span>).<span class="fn">then</span>(r => r.<span class="fn">json</span>())
});</div>` },
            { type: 'multiple-choice', prompt: 'In dev, frontend at <code>:5173</code> calls backend at <code>:3000</code>. Browser blocks it. Why?',
              options: [{text:'Bug in React', code:false},{text:'CORS — different origins; server must allow it', code:false},{text:'TypeScript issue', code:false},{text:'DNS', code:false}],
              correct: 1, explanation: 'Use a CORS middleware on Express: <code>app.use(cors())</code> — configure origins explicitly in production.' },
            { type: 'multiple-choice', prompt: '<code>fetch()</code> does NOT throw on:',
              options: [{text:'500 server errors', code:false},{text:'Network failures', code:false},{text:'4xx/5xx — you have to check res.ok yourself', code:false},{text:'Bad JSON', code:false}],
              correct: 2, explanation: 'A common gotcha. Always check res.ok.' },
            { type: 'true-false', statement: 'TanStack Query gives you caching, retries, refetch on focus, and dedupes requests automatically.', correct: true, explanation: 'It\'s why teams adopt it — much less boilerplate than useState+useEffect for data.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Auth ============== */
    {
      id: 'mern-u12', name: 'Unit 12 · Authentication with JWT', description: 'Login flows in MERN',
      lessons: [
        {
          id: 'mern-u12-l1', name: 'Login + protected routes', icon: '🔐', xp: 30,
          challenges: [
            { type: 'concept', title: 'Stateless JWT auth', content: `<div class="code-block"><span class="com">// 1. Express — sign JWT on login</span>
<span class="kw">import</span> jwt <span class="kw">from</span> <span class="str">"jsonwebtoken"</span>;
<span class="kw">import</span> bcrypt <span class="kw">from</span> <span class="str">"bcrypt"</span>;

app.<span class="fn">post</span>(<span class="str">"/api/login"</span>, <span class="kw">async</span> (req, res) => {
  <span class="kw">const</span> { email, password } = req.body;
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">findOne</span>({ email });
  <span class="kw">if</span> (!user || !<span class="kw">await</span> bcrypt.<span class="fn">compare</span>(password, user.passwordHash))
    <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">401</span>).<span class="fn">json</span>({ error: <span class="str">"Invalid credentials"</span> });
  <span class="kw">const</span> token = jwt.<span class="fn">sign</span>({ uid: user._id, role: user.role }, process.env.<span class="ty">JWT_SECRET</span>, { expiresIn: <span class="str">"1h"</span> });
  res.<span class="fn">json</span>({ token });
});

<span class="com">// 2. Middleware — verify JWT on protected routes</span>
<span class="kw">function</span> <span class="fn">requireAuth</span>(req, res, next) {
  <span class="kw">const</span> token = req.headers.authorization?.<span class="fn">replace</span>(<span class="str">"Bearer "</span>, <span class="str">""</span>);
  <span class="kw">try</span> {
    req.user = jwt.<span class="fn">verify</span>(token, process.env.<span class="ty">JWT_SECRET</span>);
    <span class="fn">next</span>();
  } <span class="kw">catch</span> { res.<span class="fn">status</span>(<span class="num">401</span>).<span class="fn">json</span>({ error: <span class="str">"Invalid token"</span> }); }
}

app.<span class="fn">get</span>(<span class="str">"/api/me"</span>, requireAuth, (req, res) => res.<span class="fn">json</span>(req.user));</div>
<div class="code-block"><span class="com">// 3. React — send token with requests</span>
fetch(<span class="str">"/api/me"</span>, {
  headers: { Authorization: <span class="str">\`Bearer \${token}\`</span> }
})</div>` },
            { type: 'multiple-choice', prompt: 'Never store passwords:',
              options: [{text:'In plaintext', code:false},{text:'In MongoDB', code:false},{text:'On the server', code:false},{text:'In cookies', code:false}],
              correct: 0, explanation: 'Always hash + salt (bcrypt, argon2). Never store raw passwords.' },
            { type: 'multiple-choice', prompt: 'Where should you store JWT in the browser?',
              options: [{text:'localStorage (simple, XSS-vulnerable)', code:false},{text:'httpOnly secure cookie (XSS-safe but needs CSRF protection)', code:false},{text:'In a global variable only', code:false},{text:'Either — but cookies are usually safer', code:false}],
              correct: 3, explanation: 'There\'s no perfect option. Cookies + CSRF protection is the safer default; localStorage is simpler.' },
            { type: 'true-false', statement: 'JWT tokens are stateless — you don\'t need to track them server-side... but that also means revocation is harder.', correct: true, explanation: 'Either keep short expiry + refresh tokens, or maintain a denylist on logout.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Forms / Validation / Files ============== */
    {
      id: 'mern-u13', name: 'Unit 13 · Forms, Validation, Files', description: 'The user-input layer',
      lessons: [
        {
          id: 'mern-u13-l1', name: 'Controlled forms + validation', icon: '📝', xp: 25,
          challenges: [
            { type: 'concept', title: 'React Hook Form + Zod is the modern stack', content: `<div class="code-block"><span class="kw">import</span> { useForm } <span class="kw">from</span> <span class="str">"react-hook-form"</span>;
<span class="kw">import</span> { z } <span class="kw">from</span> <span class="str">"zod"</span>;
<span class="kw">import</span> { zodResolver } <span class="kw">from</span> <span class="str">"@hookform/resolvers/zod"</span>;

<span class="kw">const</span> schema = z.<span class="fn">object</span>({
  email: z.<span class="fn">string</span>().<span class="fn">email</span>(),
  age:   z.<span class="fn">number</span>().<span class="fn">int</span>().<span class="fn">min</span>(<span class="num">18</span>)
});

<span class="kw">function</span> <span class="fn">SignupForm</span>() {
  <span class="kw">const</span> { register, handleSubmit, formState: { errors } } = <span class="fn">useForm</span>({
    resolver: <span class="fn">zodResolver</span>(schema)
  });

  <span class="kw">return</span> (
    &lt;form onSubmit={<span class="fn">handleSubmit</span>(<span class="kw">async</span> (data) => {
      <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"/api/signup"</span>, { method: <span class="str">"POST"</span>, body: <span class="ty">JSON</span>.<span class="fn">stringify</span>(data) });
    })}&gt;
      &lt;input {...<span class="fn">register</span>(<span class="str">"email"</span>)} /&gt;
      {errors.email && &lt;p&gt;{errors.email.message}&lt;/p&gt;}
      ...
    &lt;/form&gt;
  );
}</div>` },
            { type: 'multiple-choice', prompt: 'Best validation strategy for a MERN app?',
              options: [{text:'Only client-side', code:false},{text:'Only server-side', code:false},{text:'Both — share schemas (e.g., Zod) on client and server', code:false},{text:'No validation', code:false}],
              correct: 2, explanation: 'Client = UX. Server = security. Sharing schemas keeps them in sync.' },
            { type: 'true-false', statement: 'Server-side validation is mandatory — client validation can be bypassed.', correct: true, explanation: 'Anyone can use curl/Postman to skip the UI.' },
            { type: 'multiple-choice', prompt: 'For file uploads to Express, use:',
              options: [{text:'express.json()', code:false},{text:'multer (multipart middleware)', code:false},{text:'JSON.stringify', code:false},{text:'No middleware needed', code:false}],
              correct: 1, explanation: 'Multipart bodies need multer or similar. Bigger files → stream directly to S3/Cloudflare R2.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Testing ============== */
    {
      id: 'mern-u14', name: 'Unit 14 · Testing', description: 'Confidence to ship',
      lessons: [
        {
          id: 'mern-u14-l1', name: 'Tools & strategy', icon: '🧪', xp: 20,
          challenges: [
            { type: 'concept', title: 'Three layers of tests', content: `<div class="code-block"><span class="com">Unit tests</span>            isolated functions / hooks
   Jest or Vitest — both work

<span class="com">Component tests</span>       React component in isolation
   React Testing Library — find by role, click, assert

<span class="com">API tests</span>             Express routes against test DB
   Supertest + Jest

<span class="com">E2E tests</span>             Full app, real browser
   Playwright (recommended) or Cypress</div>
<p>Aim for the pyramid: many unit, fewer component, very few E2E. E2E are slowest and flakiest.</p>` },
            { type: 'multiple-choice', prompt: 'Best for testing "user can fill the signup form and submit"?',
              options: [{text:'Unit test', code:false},{text:'Component test (React Testing Library)', code:false},{text:'E2E test (Playwright)', code:false},{text:'Both component and E2E, depending on coverage', code:false}],
              correct: 3, explanation: 'Component test for the form logic; E2E for the full happy-path flow.' },
            { type: 'true-false', statement: 'React Testing Library encourages testing what the USER sees (text, roles) — not implementation details.', correct: true, explanation: 'Querying by aria-roles, labels, text — tests stay valid through refactors.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Deployment ============== */
    {
      id: 'mern-u15', name: 'Unit 15 · Deployment & DevOps', description: 'From localhost to the world',
      lessons: [
        {
          id: 'mern-u15-l1', name: 'Deploy the stack', icon: '🚀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Modern hosting', content: `<div class="code-block"><span class="com">Frontend (React)</span>
   Vercel, Netlify, Cloudflare Pages — git push → live
   Build: vite build → static files → CDN

<span class="com">Backend (Express/Node)</span>
   Railway, Render, Fly.io, AWS App Runner — git push to deploy
   Or self-host: Docker + EC2/DigitalOcean

<span class="com">Database (MongoDB)</span>
   MongoDB Atlas — managed cloud Mongo (free tier exists)
   Self-hosted if you must

<span class="com">Environment variables</span>
   .env locally + secrets in your platform UI
   NEVER commit .env files</div>` },
            { type: 'multiple-choice', prompt: 'You git-pushed a .env with API keys. What\'s your first step?',
              options: [{text:'Pull it out of git', code:false},{text:'ROTATE THE LEAKED SECRETS immediately, THEN clean git history', code:false},{text:'Ignore — it\'s private', code:false},{text:'Email the team', code:false}],
              correct: 1, explanation: 'Treat any leaked secret as compromised. Rotate first; remove later. Use git-filter-repo or BFG for history.' },
            { type: 'multiple-choice', prompt: 'In production, you should serve your React app via:',
              options: [{text:'npm run dev', code:false},{text:'A static-file host or CDN (built once with vite build)', code:false},{text:'Express directly (slower)', code:false},{text:'localhost', code:false}],
              correct: 1, explanation: 'Static files via CDN = fast, scalable, cheap. Many setups serve API + static from the same domain via proxy/cdn rules.' },
            { type: 'true-false', statement: 'Use environment variables for config (DB URL, JWT secret, API keys) — never hardcode them.', correct: true, explanation: 'And different values per environment (dev/staging/prod).' }
          ]
        }
      ]
    },

    /* ============== UNIT 16 — Project ============== */
    {
      id: 'mern-u16', name: 'Unit 16 · Building a Real App', description: 'Putting it all together',
      lessons: [
        {
          id: 'mern-u16-l1', name: 'A complete app blueprint', icon: '🏗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Architecture of a typical MERN project', content: `<div class="code-block">my-app/
├── server/                      # Express + Node
│   ├── src/
│   │   ├── index.js             entry point
│   │   ├── config/db.js         Mongoose connection
│   │   ├── models/User.js       Mongoose schemas
│   │   ├── routes/users.js      route handlers
│   │   ├── middleware/auth.js   JWT verify, error handler
│   │   └── services/email.js    business logic
│   ├── package.json
│   └── .env
└── client/                      # React + Vite
    ├── src/
    │   ├── main.jsx             entry
    │   ├── App.jsx              top-level routing
    │   ├── pages/               route components
    │   ├── components/          shared UI
    │   ├── hooks/useAuth.js     custom hooks
    │   ├── lib/api.js           axios/fetch wrapper
    │   └── store/               global state
    ├── package.json
    └── vite.config.js</div>` },
            { type: 'multiple-choice', prompt: 'Why separate <code>server/</code> and <code>client/</code> folders?',
              options: [{text:'Different package.json, different deploy targets, different deps', code:false},{text:'Just convention', code:false},{text:'Required by Node', code:false},{text:'For naming', code:false}],
              correct: 0, explanation: 'Independent lifecycles, dependencies, build pipelines.' },
            { type: 'multiple-choice', prompt: 'When building a feature end-to-end, the typical order is:',
              options: [{text:'UI first, then backend', code:false},{text:'Define schema → API → frontend (sometimes parallel)', code:false},{text:'Tests first only', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'Data shape drives the API which drives the UI. Tight feedback loops with mocks help parallelization.' },
            { type: 'true-false', statement: 'A solid MERN portfolio project has: auth, CRUD, file upload, deployed live, with a README.', correct: true, explanation: 'These check the boxes interviewers and recruiters look for.' },
            { type: 'reorder-code', prompt: 'Reorder the typical MERN dev workflow.',
              lines: ['Design data models', 'Build API endpoints + tests', 'Build React UI + state', 'Wire frontend to API', 'Add auth + validation', 'Deploy + monitor'],
              correctOrder: [0, 1, 2, 3, 4, 5] }
          ]
        }
      ]
    }

  ]
});

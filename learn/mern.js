LEARN('mern', {
  intro: 'Full-stack with MongoDB + Express + React + Node — architecture, code patterns, and deployment.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'mern-c1', title: 'The MERN Stack', icon: '🥞', sections: [
      { type: 'heading', text: 'JavaScript end-to-end', level: 1 },
      { type: 'para', html: 'MERN = <strong>M</strong>ongoDB + <strong>E</strong>xpress + <strong>R</strong>eact + <strong>N</strong>ode.js. The killer feature: one language across the stack — frontend, backend, and even the DB queries (Mongo accepts JS-like syntax).' },

      { type: 'image', alt: 'mern flow', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Request flow in a MERN app</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="60" width="120" height="100" rx="10" fill="#61dafb"/>
    <text x="80" y="95" text-anchor="middle" fill="#3c3c3c">React</text>
    <text x="80" y="115" text-anchor="middle" fill="#3c3c3c" font-size="10" font-weight="normal">Browser UI</text>
    <text x="80" y="130" text-anchor="middle" fill="#3c3c3c" font-size="10" font-weight="normal">JSX · hooks</text>

    <line x1="140" y1="110" x2="180" y2="110" stroke="#666" stroke-width="2" marker-end="url(#m1)"/>
    <text x="160" y="100" text-anchor="middle" font-size="10" fill="#666" font-weight="normal">HTTP</text>

    <rect x="180" y="60" width="120" height="100" rx="10" fill="#5a5a5a"/>
    <text x="240" y="95" text-anchor="middle" fill="white">Express</text>
    <text x="240" y="115" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Routes</text>
    <text x="240" y="130" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Middleware</text>

    <line x1="300" y1="110" x2="340" y2="110" stroke="#666" stroke-width="2" marker-end="url(#m1)"/>

    <rect x="340" y="60" width="120" height="100" rx="10" fill="#8bc34a"/>
    <text x="400" y="95" text-anchor="middle" fill="white">Mongoose</text>
    <text x="400" y="115" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Schemas</text>
    <text x="400" y="130" text-anchor="middle" fill="white" font-size="10" font-weight="normal">ODM</text>

    <line x1="460" y1="110" x2="500" y2="110" stroke="#666" stroke-width="2" marker-end="url(#m1)"/>

    <rect x="500" y="60" width="80" height="100" rx="10" fill="#13aa52"/>
    <text x="540" y="95" text-anchor="middle" fill="white">MongoDB</text>
    <text x="540" y="115" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Documents</text>

    <text x="300" y="200" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">Node.js powers Express. JavaScript runs everywhere.</text>
  </g>
  <defs>
    <marker id="m1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'Why MERN?', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>One language</strong> — JavaScript everywhere, share code/types',
        '<strong>Huge ecosystem</strong> — npm has packages for everything',
        '<strong>Fast prototyping</strong> — get to a working app quickly',
        '<strong>JSON all the way</strong> — frontend ↔ API ↔ DB all speak JSON',
        '<strong>Highly hireable</strong> — most common stack in startups'
      ]},

      { type: 'callout', kind: 'info', html: 'Variants: <strong>MEAN</strong> (Angular), <strong>MEVN</strong> (Vue), <strong>PERN</strong> (PostgreSQL). Same idea, different pieces.' }
    ]},

    /* ============== CH 2 — Modern JS ============== */
    { id: 'mern-c2', title: 'Modern JavaScript', icon: '🟨', sections: [
      { type: 'heading', text: 'The ES6+ features you\'ll use daily', level: 1 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// Arrow functions</span>
<span class="kw">const</span> <span class="fn">double</span> = x =&gt; x * <span class="num">2</span>;
<span class="kw">const</span> <span class="fn">add</span> = (a, b) =&gt; a + b;

<span class="com">// Destructuring</span>
<span class="kw">const</span> { name, email } = user;
<span class="kw">const</span> [first, second, ...rest] = arr;

<span class="com">// Spread / rest</span>
<span class="kw">const</span> copy   = [...arr];
<span class="kw">const</span> merged = { ...base, ...overrides };

<span class="com">// Template literals</span>
<span class="kw">const</span> greet = <span class="str">\`Hello, \${name}! You owe \${amount}.\`</span>;

<span class="com">// Optional chaining + nullish coalescing</span>
<span class="kw">const</span> zip = user?.address?.zip ?? <span class="str">"unknown"</span>;

<span class="com">// Array methods you\'ll live in</span>
arr.<span class="fn">map</span>(x =&gt; x * <span class="num">2</span>);
arr.<span class="fn">filter</span>(x =&gt; x &gt; <span class="num">0</span>);
arr.<span class="fn">reduce</span>((acc, x) =&gt; acc + x, <span class="num">0</span>);
arr.<span class="fn">find</span>(x =&gt; x.id === <span class="num">42</span>);
arr.<span class="fn">some</span>(x =&gt; x.active);
arr.<span class="fn">every</span>(x =&gt; x.valid);` },

      { type: 'heading', text: 'Async / await — embrace it', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// Promises (under the hood)</span>
<span class="fn">fetch</span>(<span class="str">"/api/users"</span>)
  .<span class="fn">then</span>(r =&gt; r.<span class="fn">json</span>())
  .<span class="fn">then</span>(data =&gt; <span class="ty">console</span>.<span class="fn">log</span>(data))
  .<span class="fn">catch</span>(err =&gt; <span class="ty">console</span>.<span class="fn">error</span>(err));

<span class="com">// async/await — much nicer</span>
<span class="kw">async function</span> <span class="fn">loadUsers</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"/api/users"</span>);
    <span class="kw">if</span> (!res.ok) <span class="kw">throw new Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
    <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();
    <span class="kw">return</span> data;
  } <span class="kw">catch</span> (err) {
    <span class="ty">console</span>.<span class="fn">error</span>(<span class="str">"loadUsers failed:"</span>, err);
    <span class="kw">throw</span> err;
  }
}

<span class="com">// Run multiple in parallel</span>
<span class="kw">const</span> [users, posts] = <span class="kw">await</span> <span class="ty">Promise</span>.<span class="fn">all</span>([
  <span class="fn">fetch</span>(<span class="str">"/api/users"</span>).<span class="fn">then</span>(r =&gt; r.<span class="fn">json</span>()),
  <span class="fn">fetch</span>(<span class="str">"/api/posts"</span>).<span class="fn">then</span>(r =&gt; r.<span class="fn">json</span>())
]);` },
      { type: 'callout', kind: 'tip', html: 'Common bug: <code>await</code> in a loop runs serially. Use <code>Promise.all(arr.map(...))</code> for parallel.' }
    ]},

    /* ============== CH 3 — Node ============== */
    { id: 'mern-c3', title: 'Node.js Essentials', icon: '📦', sections: [
      { type: 'heading', text: 'JS outside the browser', level: 1 },
      { type: 'para', html: '<strong>Node.js</strong> is V8 (Chrome\'s JS engine) plus a standard library for filesystem, network, processes, crypto. Single-threaded but evented — perfect for I/O-heavy servers.' },

      { type: 'heading', text: 'Project setup', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># Create a project</span>
mkdir my-server && cd my-server
npm init -y                    <span class="com"># creates package.json</span>

<span class="com"># Install runtime deps</span>
npm install express mongoose dotenv jsonwebtoken bcrypt cors

<span class="com"># Install dev deps (only for development)</span>
npm install -D nodemon vitest

<span class="com"># package.json scripts</span>
{
  "type": "module",
  "scripts": {
    "dev":   "nodemon src/index.js",
    "start": "node src/index.js",
    "test":  "vitest"
  }
}

<span class="com"># Run</span>
npm run dev` },

      { type: 'heading', text: 'CommonJS vs ES Modules', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// CommonJS (older, still common)</span>
<span class="kw">const</span> express = <span class="fn">require</span>(<span class="str">"express"</span>);
module.exports = { foo };

<span class="com">// ES Modules (modern; set "type": "module" in package.json)</span>
<span class="kw">import</span> express <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">export</span> { foo };
<span class="kw">export default</span> myFunction;</div>` },

      { type: 'heading', text: 'Environment variables', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># .env (NEVER commit this file)</span>
PORT=3000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=long-random-secret-here

<span class="com"># Load them in your app</span>
<span class="kw">import</span> <span class="str">"dotenv/config"</span>;
<span class="kw">const</span> port = process.env.PORT || <span class="num">3000</span>;` },
      { type: 'callout', kind: 'warn', html: 'Add <code>.env</code> to <code>.gitignore</code> from day one. Leaked secrets are a real-world problem.' }
    ]},

    /* ============== CH 4 — Express ============== */
    { id: 'mern-c4', title: 'Express.js', icon: '🛣️', sections: [
      { type: 'heading', text: 'A complete Express server', level: 1 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// src/index.js</span>
<span class="kw">import</span> <span class="str">"dotenv/config"</span>;
<span class="kw">import</span> express <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> cors <span class="kw">from</span> <span class="str">"cors"</span>;
<span class="kw">import</span> mongoose <span class="kw">from</span> <span class="str">"mongoose"</span>;
<span class="kw">import</span> userRoutes <span class="kw">from</span> <span class="str">"./routes/users.js"</span>;

<span class="kw">const</span> app = <span class="fn">express</span>();

<span class="com">// global middleware</span>
app.<span class="fn">use</span>(<span class="fn">cors</span>());                    <span class="com">// allow frontend origin</span>
app.<span class="fn">use</span>(express.<span class="fn">json</span>());            <span class="com">// parse JSON bodies</span>
app.<span class="fn">use</span>((req, _res, next) =&gt; {
  <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">\`\${req.method} \${req.url}\`</span>);
  <span class="fn">next</span>();
});

<span class="com">// routes</span>
app.<span class="fn">use</span>(<span class="str">"/api/users"</span>, userRoutes);
app.<span class="fn">get</span>(<span class="str">"/healthz"</span>, (_req, res) =&gt; res.<span class="fn">json</span>({ ok: <span class="kw">true</span> }));

<span class="com">// 404 + error handler (always last)</span>
app.<span class="fn">use</span>((_req, res) =&gt; res.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">json</span>({ error: <span class="str">"Not found"</span> }));
app.<span class="fn">use</span>((err, _req, res, _next) =&gt; {
  <span class="ty">console</span>.<span class="fn">error</span>(err);
  res.<span class="fn">status</span>(err.status || <span class="num">500</span>).<span class="fn">json</span>({ error: err.message });
});

<span class="kw">await</span> mongoose.<span class="fn">connect</span>(process.env.MONGO_URI);
app.<span class="fn">listen</span>(process.env.PORT, () =&gt; <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">\`API on :\${process.env.PORT}\`</span>));` },

      { type: 'heading', text: 'A route file', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// src/routes/users.js</span>
<span class="kw">import</span> { <span class="ty">Router</span> } <span class="kw">from</span> <span class="str">"express"</span>;
<span class="kw">import</span> { <span class="ty">User</span> } <span class="kw">from</span> <span class="str">"../models/User.js"</span>;
<span class="kw">import</span> { requireAuth } <span class="kw">from</span> <span class="str">"../middleware/auth.js"</span>;

<span class="kw">const</span> router = <span class="ty">Router</span>();

router.<span class="fn">get</span>(<span class="str">"/"</span>, <span class="kw">async</span> (req, res, next) =&gt; {
  <span class="kw">try</span> {
    <span class="kw">const</span> users = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">find</span>().<span class="fn">limit</span>(<span class="num">100</span>);
    res.<span class="fn">json</span>(users);
  } <span class="kw">catch</span> (err) { <span class="fn">next</span>(err); }
});

router.<span class="fn">get</span>(<span class="str">"/:id"</span>, <span class="kw">async</span> (req, res, next) =&gt; {
  <span class="kw">try</span> {
    <span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">findById</span>(req.params.id);
    <span class="kw">if</span> (!u) <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">json</span>({ error: <span class="str">"Not found"</span> });
    res.<span class="fn">json</span>(u);
  } <span class="kw">catch</span> (err) { <span class="fn">next</span>(err); }
});

router.<span class="fn">post</span>(<span class="str">"/"</span>, requireAuth, <span class="kw">async</span> (req, res, next) =&gt; {
  <span class="kw">try</span> {
    <span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">create</span>(req.body);
    res.<span class="fn">status</span>(<span class="num">201</span>).<span class="fn">json</span>(u);
  } <span class="kw">catch</span> (err) { <span class="fn">next</span>(err); }
});

<span class="kw">export default</span> router;` }
    ]},

    /* ============== CH 5 — Mongo ============== */
    { id: 'mern-c5', title: 'MongoDB & Mongoose', icon: '🍃', sections: [
      { type: 'heading', text: 'Documents instead of rows', level: 1 },
      { type: 'image', alt: 'mongo vs sql', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">SQL vs MongoDB shape</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="270" height="180" rx="10" fill="#1cb0f6" opacity="0.1" stroke="#1cb0f6" stroke-width="2"/>
    <text x="155" y="75" text-anchor="middle" fill="#1cb0f6">SQL (tables)</text>
    <line x1="40" y1="95" x2="270" y2="95" stroke="#1cb0f6"/>
    <text x="155" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="11">users(id, name, email)</text>
    <text x="155" y="140" text-anchor="middle" font-family="JetBrains Mono" font-size="11">orders(id, user_id, total)</text>
    <text x="155" y="160" text-anchor="middle" font-family="JetBrains Mono" font-size="11">order_items(order_id, ...)</text>
    <text x="155" y="195" text-anchor="middle" font-size="10" font-weight="normal">Joins. Strict schema.</text>
    <text x="155" y="210" text-anchor="middle" font-size="10" font-weight="normal">Normalized.</text>

    <rect x="310" y="50" width="270" height="180" rx="10" fill="#00c853" opacity="0.1" stroke="#00c853" stroke-width="2"/>
    <text x="445" y="75" text-anchor="middle" fill="#00c853">MongoDB (documents)</text>
    <line x1="330" y1="95" x2="560" y2="95" stroke="#00c853"/>
    <text x="445" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="11">{ user, orders: [...] }</text>
    <text x="445" y="140" text-anchor="middle" font-family="JetBrains Mono" font-size="11">embedded subdocuments</text>
    <text x="445" y="160" text-anchor="middle" font-family="JetBrains Mono" font-size="11">flexible schema</text>
    <text x="445" y="195" text-anchor="middle" font-size="10" font-weight="normal">Denormalize for reads.</text>
    <text x="445" y="210" text-anchor="middle" font-size="10" font-weight="normal">Schema enforced in app.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'A real Mongoose schema', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// src/models/User.js</span>
<span class="kw">import</span> mongoose <span class="kw">from</span> <span class="str">"mongoose"</span>;
<span class="kw">import</span> bcrypt <span class="kw">from</span> <span class="str">"bcrypt"</span>;

<span class="kw">const</span> userSchema = <span class="kw">new</span> mongoose.<span class="ty">Schema</span>(
  {
    name:  { type: <span class="ty">String</span>, required: <span class="kw">true</span>, trim: <span class="kw">true</span> },
    email: { type: <span class="ty">String</span>, required: <span class="kw">true</span>, unique: <span class="kw">true</span>, lowercase: <span class="kw">true</span> },
    passwordHash: { type: <span class="ty">String</span>, required: <span class="kw">true</span> },
    role:  { type: <span class="ty">String</span>, enum: [<span class="str">"user"</span>, <span class="str">"admin"</span>], default: <span class="str">"user"</span> },
    posts: [{ type: mongoose.<span class="ty">Schema</span>.<span class="ty">Types</span>.<span class="ty">ObjectId</span>, ref: <span class="str">"Post"</span> }]
  },
  { timestamps: <span class="kw">true</span> }   <span class="com">// adds createdAt / updatedAt</span>
);

<span class="com">// virtual field — not stored</span>
userSchema.<span class="fn">virtual</span>(<span class="str">"isAdmin"</span>).<span class="fn">get</span>(<span class="kw">function</span>() { <span class="kw">return</span> <span class="kw">this</span>.role === <span class="str">"admin"</span>; });

<span class="com">// instance method</span>
userSchema.methods.<span class="fn">verifyPassword</span> = <span class="kw">function</span>(password) {
  <span class="kw">return</span> bcrypt.<span class="fn">compare</span>(password, <span class="kw">this</span>.passwordHash);
};

<span class="com">// pre-save hook (e.g., hash password)</span>
userSchema.<span class="fn">pre</span>(<span class="str">"save"</span>, <span class="kw">async function</span>(next) {
  <span class="kw">if</span> (<span class="kw">this</span>.<span class="fn">isModified</span>(<span class="str">"passwordHash"</span>)) {
    <span class="kw">this</span>.passwordHash = <span class="kw">await</span> bcrypt.<span class="fn">hash</span>(<span class="kw">this</span>.passwordHash, <span class="num">10</span>);
  }
  <span class="fn">next</span>();
});

<span class="kw">export const</span> <span class="ty">User</span> = mongoose.<span class="fn">model</span>(<span class="str">"User"</span>, userSchema);` },
      { type: 'callout', kind: 'tip', html: 'Always use <code>{ timestamps: true }</code> — auto-managed <code>createdAt</code> and <code>updatedAt</code> save you hours of debugging.' }
    ]},

    /* ============== CH 6 — React ============== */
    { id: 'mern-c6', title: 'React — Components & JSX', icon: '⚛️', sections: [
      { type: 'heading', text: 'Components are the building blocks', level: 1 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// A functional component (the modern way)</span>
<span class="kw">function</span> <span class="fn">UserCard</span>({ user, onDelete }) {
  <span class="kw">return</span> (
    &lt;div className=<span class="str">"user-card"</span>&gt;
      &lt;img src={user.avatar} alt={user.name} /&gt;
      &lt;h2&gt;{user.name}&lt;/h2&gt;
      &lt;p&gt;{user.email}&lt;/p&gt;
      &lt;button onClick={() =&gt; <span class="fn">onDelete</span>(user.id)}&gt;Delete&lt;/button&gt;
    &lt;/div&gt;
  );
}

<span class="com">// Use it</span>
&lt;UserCard user={ana} onDelete={handleDelete} /&gt;</div>` },

      { type: 'heading', text: 'Rules of JSX', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<code>className</code> not <code>class</code> (because <code>class</code> is reserved)',
        '<code>htmlFor</code> not <code>for</code>',
        'Camel-case events: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>',
        'Wrap multiple elements in a Fragment <code>&lt;&gt;...&lt;/&gt;</code>',
        '<code>{expression}</code> inside JSX for any JS value',
        '<code>key</code> prop on each list item — stable, unique'
      ]},

      { type: 'heading', text: 'Conditional rendering & lists', level: 2 },
      { type: 'code', lang: 'javascript', code:
`{isLoggedIn ? &lt;Dashboard /&gt; : &lt;LoginForm /&gt;}
{error && &lt;Banner kind=<span class="str">"error"</span>&gt;{error}&lt;/Banner&gt;}

{users.<span class="fn">map</span>(u =&gt; (
  &lt;UserCard key={u.id} user={u} /&gt;
))}` },
      { type: 'callout', kind: 'warn', html: '<strong>Don\'t use array index as <code>key</code></strong> when the list can reorder/insert/delete. React relies on keys to track items efficiently; bad keys = subtle bugs.' }
    ]},

    /* ============== CH 7 — Hooks ============== */
    { id: 'mern-c7', title: 'React Hooks', icon: '🪝', sections: [
      { type: 'heading', text: 'useState & useEffect — your daily bread', level: 1 },
      { type: 'code', lang: 'javascript', code:
`<span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">"react"</span>;

<span class="kw">function</span> <span class="fn">UserList</span>() {
  <span class="kw">const</span> [users, setUsers] = <span class="fn">useState</span>([]);
  <span class="kw">const</span> [loading, setLoading] = <span class="fn">useState</span>(<span class="kw">true</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="kw">null</span>);

  <span class="fn">useEffect</span>(() =&gt; {
    <span class="kw">const</span> ac = <span class="kw">new</span> <span class="ty">AbortController</span>();
    (<span class="kw">async</span> () =&gt; {
      <span class="kw">try</span> {
        <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"/api/users"</span>, { signal: ac.signal });
        <span class="kw">if</span> (!res.ok) <span class="kw">throw new Error</span>(<span class="str">\`HTTP \${res.status}\`</span>);
        <span class="fn">setUsers</span>(<span class="kw">await</span> res.<span class="fn">json</span>());
      } <span class="kw">catch</span> (err) {
        <span class="kw">if</span> (err.name !== <span class="str">"AbortError"</span>) <span class="fn">setError</span>(err);
      } <span class="kw">finally</span> { <span class="fn">setLoading</span>(<span class="kw">false</span>); }
    })();
    <span class="kw">return</span> () =&gt; ac.<span class="fn">abort</span>();   <span class="com">// cleanup on unmount</span>
  }, []);

  <span class="kw">if</span> (loading) <span class="kw">return</span> &lt;p&gt;Loading...&lt;/p&gt;;
  <span class="kw">if</span> (error) <span class="kw">return</span> &lt;p&gt;Error: {error.message}&lt;/p&gt;;
  <span class="kw">return</span> &lt;ul&gt;{users.<span class="fn">map</span>(u =&gt; &lt;li key={u._id}&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;
}` },

      { type: 'heading', text: 'Rules of hooks', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Only at the top level</strong> — never inside conditionals, loops, or after returns',
        '<strong>Only in React functions</strong> — components or other custom hooks',
        '<strong>Custom hook names start with <code>use</code></strong> — required by ESLint plugin'
      ]},

      { type: 'heading', text: 'Custom hooks — share logic', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// hooks/useFetch.js</span>
<span class="kw">export function</span> <span class="fn">useFetch</span>(url) {
  <span class="kw">const</span> [data, setData] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [loading, setLoading] = <span class="fn">useState</span>(<span class="kw">true</span>);

  <span class="fn">useEffect</span>(() =&gt; {
    <span class="fn">setLoading</span>(<span class="kw">true</span>);
    <span class="fn">fetch</span>(url)
      .<span class="fn">then</span>(r =&gt; r.<span class="fn">json</span>())
      .<span class="fn">then</span>(<span class="fn">setData</span>)
      .<span class="fn">catch</span>(<span class="fn">setError</span>)
      .<span class="fn">finally</span>(() =&gt; <span class="fn">setLoading</span>(<span class="kw">false</span>));
  }, [url]);

  <span class="kw">return</span> { data, error, loading };
}

<span class="com">// Use it</span>
<span class="kw">const</span> { data: users, loading, error } = <span class="fn">useFetch</span>(<span class="str">"/api/users"</span>);` },
      { type: 'callout', kind: 'tip', html: 'For real apps, use <strong>TanStack Query</strong> instead of hand-rolled useFetch — automatic caching, retries, refetch on focus, dedupe.' }
    ]},

    /* ============== CH 8 — Connecting ============== */
    { id: 'mern-c8', title: 'Connecting React to your API', icon: '🔗', sections: [
      { type: 'heading', text: 'Frontend and backend in two folders', level: 1 },

      { type: 'image', alt: 'mern dev setup', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Local development setup</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="170" height="140" rx="10" fill="#61dafb"/>
    <text x="105" y="80" text-anchor="middle" fill="#3c3c3c">client/</text>
    <text x="105" y="100" text-anchor="middle" fill="#3c3c3c" font-size="11" font-weight="normal">Vite dev server</text>
    <text x="105" y="120" text-anchor="middle" fill="#3c3c3c" font-size="11" font-weight="normal">:5173</text>
    <text x="105" y="145" text-anchor="middle" fill="#3c3c3c" font-size="10" font-weight="normal">React · hot reload</text>

    <line x1="190" y1="120" x2="240" y2="120" stroke="#666" stroke-width="2" marker-end="url(#m3)"/>
    <text x="215" y="110" text-anchor="middle" font-size="10" fill="#666" font-weight="normal">fetch</text>
    <text x="215" y="138" text-anchor="middle" font-size="9" fill="#666" font-weight="normal">via proxy</text>

    <rect x="240" y="50" width="170" height="140" rx="10" fill="#5a5a5a"/>
    <text x="325" y="80" text-anchor="middle" fill="white">server/</text>
    <text x="325" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Express + nodemon</text>
    <text x="325" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">:3000</text>
    <text x="325" y="145" text-anchor="middle" fill="white" font-size="10" font-weight="normal">API · auto-restart</text>

    <line x1="410" y1="120" x2="460" y2="120" stroke="#666" stroke-width="2" marker-end="url(#m3)"/>
    <text x="435" y="110" text-anchor="middle" font-size="10" fill="#666" font-weight="normal">Mongoose</text>

    <rect x="460" y="50" width="120" height="140" rx="10" fill="#13aa52"/>
    <text x="520" y="80" text-anchor="middle" fill="white">MongoDB</text>
    <text x="520" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">local or Atlas</text>
  </g>
  <defs>
    <marker id="m3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'CORS and the dev proxy', level: 2 },
      { type: 'para', html: 'In dev, frontend at <code>:5173</code> calls backend at <code>:3000</code> — browsers block this without CORS. Two solutions:' },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// 1. Enable CORS on Express (specific origins in prod!)</span>
<span class="kw">import</span> cors <span class="kw">from</span> <span class="str">"cors"</span>;
app.<span class="fn">use</span>(<span class="fn">cors</span>({ origin: <span class="str">"http://localhost:5173"</span>, credentials: <span class="kw">true</span> }));

<span class="com">// 2. Configure Vite dev proxy (cleaner — frontend just calls /api)</span>
<span class="com">// vite.config.js</span>
<span class="kw">export default</span> {
  server: {
    proxy: {
      <span class="str">"/api"</span>: <span class="str">"http://localhost:3000"</span>
    }
  }
};
<span class="com">// Now fetch("/api/users") just works — no CORS issues</span>` },

      { type: 'heading', text: 'An api wrapper module', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// client/src/lib/api.js</span>
<span class="kw">const</span> BASE = <span class="str">"/api"</span>;

<span class="kw">async function</span> <span class="fn">request</span>(path, options = {}) {
  <span class="kw">const</span> token = localStorage.<span class="fn">getItem</span>(<span class="str">"token"</span>);
  <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(BASE + path, {
    ...options,
    headers: {
      <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span>,
      ...(token ? { Authorization: <span class="str">\`Bearer \${token}\`</span> } : {}),
      ...options.headers
    }
  });
  <span class="kw">if</span> (!res.ok) {
    <span class="kw">const</span> err = <span class="kw">await</span> res.<span class="fn">json</span>().<span class="fn">catch</span>(() =&gt; ({}));
    <span class="kw">throw new Error</span>(err.error || <span class="str">\`HTTP \${res.status}\`</span>);
  }
  <span class="kw">return</span> res.<span class="fn">json</span>();
}

<span class="kw">export const</span> api = {
  get:  (p)    =&gt; <span class="fn">request</span>(p),
  post: (p, body) =&gt; <span class="fn">request</span>(p, { method: <span class="str">"POST"</span>, body: <span class="ty">JSON</span>.<span class="fn">stringify</span>(body) }),
  put:  (p, body) =&gt; <span class="fn">request</span>(p, { method: <span class="str">"PUT"</span>,  body: <span class="ty">JSON</span>.<span class="fn">stringify</span>(body) }),
  del:  (p)    =&gt; <span class="fn">request</span>(p, { method: <span class="str">"DELETE"</span> })
};` }
    ]},

    /* ============== CH 9 — Auth ============== */
    { id: 'mern-c9', title: 'Authentication with JWT', icon: '🔐', sections: [
      { type: 'heading', text: 'A complete auth flow', level: 1 },

      { type: 'image', alt: 'jwt flow', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">JWT login &amp; protected route</text>
  <g font-family="Nunito">
    <text x="80" y="55" text-anchor="middle" font-weight="bold" fill="#61dafb">React</text>
    <text x="320" y="55" text-anchor="middle" font-weight="bold" fill="#5a5a5a">Express</text>
    <text x="520" y="55" text-anchor="middle" font-weight="bold" fill="#13aa52">MongoDB</text>

    <text x="80" y="90" text-anchor="middle" font-size="11">User submits</text>
    <text x="80" y="105" text-anchor="middle" font-size="11">email + password</text>
    <line x1="120" y1="100" x2="280" y2="100" stroke="#666" stroke-width="2" marker-end="url(#m4)"/>
    <text x="200" y="92" text-anchor="middle" font-size="10" fill="#666">POST /api/login</text>

    <text x="320" y="125" text-anchor="middle" font-size="11">Find user, verify password</text>
    <line x1="370" y1="135" x2="490" y2="135" stroke="#666" stroke-width="2" marker-end="url(#m4)"/>
    <line x1="490" y1="148" x2="370" y2="148" stroke="#666" stroke-width="2" marker-end="url(#m4)"/>

    <text x="320" y="170" text-anchor="middle" font-size="11">Sign JWT</text>
    <line x1="280" y1="180" x2="120" y2="180" stroke="#666" stroke-width="2" marker-end="url(#m4)"/>
    <text x="200" y="172" text-anchor="middle" font-size="10" fill="#666">{ token: "eyJ..." }</text>

    <text x="80" y="210" text-anchor="middle" font-size="11">Store token (cookie or localStorage)</text>
    <text x="80" y="225" text-anchor="middle" font-size="11">Send in Authorization header</text>
  </g>
  <defs>
    <marker id="m4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'Server side — login + middleware', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// routes/auth.js</span>
<span class="kw">import</span> jwt <span class="kw">from</span> <span class="str">"jsonwebtoken"</span>;
<span class="kw">import</span> { <span class="ty">User</span> } <span class="kw">from</span> <span class="str">"../models/User.js"</span>;

router.<span class="fn">post</span>(<span class="str">"/login"</span>, <span class="kw">async</span> (req, res) =&gt; {
  <span class="kw">const</span> { email, password } = req.body;
  <span class="kw">const</span> u = <span class="kw">await</span> <span class="ty">User</span>.<span class="fn">findOne</span>({ email });
  <span class="kw">if</span> (!u || !(<span class="kw">await</span> u.<span class="fn">verifyPassword</span>(password)))
    <span class="kw">return</span> res.<span class="fn">status</span>(<span class="num">401</span>).<span class="fn">json</span>({ error: <span class="str">"Invalid credentials"</span> });

  <span class="kw">const</span> token = jwt.<span class="fn">sign</span>(
    { uid: u._id, role: u.role },
    process.env.JWT_SECRET,
    { expiresIn: <span class="str">"7d"</span> }
  );
  res.<span class="fn">json</span>({ token, user: { id: u._id, name: u.name, email: u.email } });
});

<span class="com">// middleware/auth.js</span>
<span class="kw">export function</span> <span class="fn">requireAuth</span>(req, res, next) {
  <span class="kw">const</span> header = req.headers.authorization || <span class="str">""</span>;
  <span class="kw">const</span> token = header.<span class="fn">replace</span>(<span class="str">"Bearer "</span>, <span class="str">""</span>);
  <span class="kw">try</span> {
    req.user = jwt.<span class="fn">verify</span>(token, process.env.JWT_SECRET);
    <span class="fn">next</span>();
  } <span class="kw">catch</span> {
    res.<span class="fn">status</span>(<span class="num">401</span>).<span class="fn">json</span>({ error: <span class="str">"Invalid or expired token"</span> });
  }
}</div>` },

      { type: 'heading', text: 'Client side — store + send the token', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="com">// On login success</span>
<span class="kw">const</span> { token, user } = <span class="kw">await</span> api.<span class="fn">post</span>(<span class="str">"/login"</span>, { email, password });
localStorage.<span class="fn">setItem</span>(<span class="str">"token"</span>, token);
<span class="fn">setUser</span>(user);

<span class="com">// On every request (already in our api.js)</span>
<span class="com">// → Authorization: Bearer &lt;token&gt;</span>

<span class="com">// Protect a route</span>
&lt;Route path=<span class="str">"/dashboard"</span> element={user ? &lt;Dashboard /&gt; : &lt;Navigate to=<span class="str">"/login"</span> /&gt;} /&gt;</div>` },
      { type: 'callout', kind: 'danger', html: '<strong>Never store passwords in plaintext.</strong> Always hash + salt with bcrypt or argon2. The bcrypt npm package is the standard.' }
    ]},

    /* ============== CH 10 — Deployment ============== */
    { id: 'mern-c10', title: 'Deployment', icon: '🚀', sections: [
      { type: 'heading', text: 'Production checklist', level: 1 },

      { type: 'image', alt: 'mern deploy', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Modern MERN deployment</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="55" width="170" height="120" rx="10" fill="#7c4dff"/>
    <text x="105" y="85" text-anchor="middle" fill="white">Frontend</text>
    <text x="105" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Vercel</text>
    <text x="105" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Netlify</text>
    <text x="105" y="135" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Cloudflare Pages</text>
    <text x="105" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">static + CDN</text>

    <rect x="215" y="55" width="170" height="120" rx="10" fill="#ec407a"/>
    <text x="300" y="85" text-anchor="middle" fill="white">Backend (Node)</text>
    <text x="300" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Railway</text>
    <text x="300" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Render</text>
    <text x="300" y="135" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Fly.io</text>
    <text x="300" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">git push deploy</text>

    <rect x="410" y="55" width="170" height="120" rx="10" fill="#13aa52"/>
    <text x="495" y="85" text-anchor="middle" fill="white">MongoDB</text>
    <text x="495" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">MongoDB Atlas</text>
    <text x="495" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">(free tier)</text>
    <text x="495" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">managed cluster</text>

    <text x="300" y="200" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">Each layer can be self-hosted on AWS/GCP/DO too.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Before going live', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>HTTPS everywhere</strong> — hosting platforms give free certs',
        '<strong>Env vars in platform dashboard</strong>, not in code',
        '<strong>Different MongoDB databases per env</strong> (dev, staging, prod)',
        '<strong>CORS locked to specific origins</strong> in production',
        '<strong>Rate limiting</strong> on auth endpoints (express-rate-limit)',
        '<strong>Helmet</strong> for security headers',
        '<strong>Compression</strong> for response gzip (<code>compression</code> middleware)',
        '<strong>Logging</strong> — at least structured logs with request IDs',
        '<strong>Health endpoint</strong> for platform health checks (<code>/healthz</code>)',
        '<strong>Monitoring</strong> — error tracking (Sentry), uptime (BetterStack)',
        '<strong>Backups</strong> — Atlas does daily snapshots; verify restore'
      ]},

      { type: 'heading', text: 'A simple Dockerfile for backend', level: 2 },
      { type: 'code', lang: 'text', code:
`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]` },
      { type: 'callout', kind: 'success', html: '🎉 With React, Express, MongoDB on the three layers above — and a working deployment — you have everything needed for a senior MERN portfolio project. Now go build something real!' }
    ]}
  ]
});

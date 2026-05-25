LEARN('api-design', {
  intro: 'Design great APIs — REST, HTTP, auth, versioning, GraphQL, gRPC, OpenAPI. Tables, diagrams, and real examples.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'api-c1', title: 'What is an API?', icon: '🌐', sections: [
      { type: 'heading', text: 'The contract between systems', level: 1 },
      { type: 'para', html: 'An <strong>API</strong> defines how two pieces of software talk to each other. It\'s a contract: "send me this request, you\'ll get that response." Internal details stay hidden.' },

      { type: 'image', alt: 'api roles', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">An API connects a consumer to a provider</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="40" y="60" width="120" height="80" rx="10" fill="#7c4dff"/>
    <text x="100" y="95" text-anchor="middle" fill="white">Client</text>
    <text x="100" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">(consumer)</text>

    <rect x="200" y="60" width="200" height="80" rx="10" fill="#ec407a"/>
    <text x="300" y="90" text-anchor="middle" fill="white">API contract</text>
    <text x="300" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="normal">endpoints · methods</text>
    <text x="300" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">request/response shape</text>

    <rect x="440" y="60" width="120" height="80" rx="10" fill="#1cb0f6"/>
    <text x="500" y="95" text-anchor="middle" fill="white">Server</text>
    <text x="500" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">(provider)</text>

    <line x1="160" y1="100" x2="200" y2="100" stroke="#666" stroke-width="2" marker-end="url(#ap)"/>
    <line x1="400" y1="100" x2="440" y2="100" stroke="#666" stroke-width="2" marker-end="url(#ap)"/>

    <text x="300" y="175" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">Consumer needs ONLY the contract — not the implementation</text>
  </g>
  <defs>
    <marker id="ap" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'API styles, side by side', level: 2 },
      { type: 'code', lang: 'text', code:
`STYLE       PROTOCOL          BEST FOR
─────────   ────────────      ─────────────────────────────────
REST        HTTP/JSON         Public web APIs, web/mobile clients
GraphQL     HTTP/JSON         Flexible clients, mobile, BFF layer
gRPC        HTTP/2 + protobuf  Internal microservices, high-perf
WebSocket   ws://            Chat, games, live dashboards
SSE         HTTP/event-stream  One-way server push
Webhooks    HTTP POST         Provider → you on events (Stripe, GitHub)
SOAP        HTTP/XML          Legacy / banking / enterprise` },

      { type: 'callout', kind: 'tip', html: 'For most jobs today, REST + OAuth is the default. Reach for GraphQL when flexibility wins, gRPC for service-to-service.' }
    ]},

    /* ============== CH 2 — REST ============== */
    { id: 'api-c2', title: 'REST Architecture', icon: '📜', sections: [
      { type: 'heading', text: '6 constraints make a REST API', level: 1 },
      { type: 'image', alt: 'rest constraints', svg:
`<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="260" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Roy Fielding\'s REST constraints</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="170" height="80" rx="10" fill="#ec407a"/>
    <text x="105" y="80" text-anchor="middle" fill="white">Client-Server</text>
    <text x="105" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Separation of concerns</text>

    <rect x="210" y="50" width="170" height="80" rx="10" fill="#ec407a"/>
    <text x="295" y="80" text-anchor="middle" fill="white">Stateless</text>
    <text x="295" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Each request self-contained</text>

    <rect x="400" y="50" width="170" height="80" rx="10" fill="#ec407a"/>
    <text x="485" y="80" text-anchor="middle" fill="white">Cacheable</text>
    <text x="485" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Responses say if cacheable</text>

    <rect x="20" y="140" width="170" height="80" rx="10" fill="#ec407a"/>
    <text x="105" y="170" text-anchor="middle" fill="white">Uniform Interface</text>
    <text x="105" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">URLs + standard verbs</text>

    <rect x="210" y="140" width="170" height="80" rx="10" fill="#ec407a"/>
    <text x="295" y="170" text-anchor="middle" fill="white">Layered</text>
    <text x="295" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Proxies, gateways, caches</text>

    <rect x="400" y="140" width="170" height="80" rx="10" fill="#ec407a" opacity="0.6"/>
    <text x="485" y="170" text-anchor="middle" fill="white">Code on Demand</text>
    <text x="485" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">(optional)</text>

    <text x="300" y="245" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">"Stateless" is the most important — server holds NO per-client session state.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'A resource-centric mental model', level: 2 },
      { type: 'para', html: 'In REST, the world is made of <strong>resources</strong> (nouns). URLs identify them. HTTP verbs describe what to do.' },
      { type: 'code', lang: 'text', code:
`GET    /users         → list users
POST   /users         → create a user
GET    /users/42      → fetch user 42
PATCH  /users/42      → partial update
PUT    /users/42      → full replace
DELETE /users/42      → remove
GET    /users/42/posts → posts belonging to user 42` },

      { type: 'callout', kind: 'tip', html: 'If a URL contains a verb like <code>/createUser</code> or <code>/getUsers</code>, you\'re fighting against REST. Use the HTTP method instead.' }
    ]},

    /* ============== CH 3 — HTTP methods ============== */
    { id: 'api-c3', title: 'HTTP Methods Reference', icon: '🔁', sections: [
      { type: 'heading', text: 'The verbs and their properties', level: 1 },

      { type: 'image', alt: 'http methods', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">HTTP method properties</text>
  <g font-family="Nunito" font-size="12">
    <rect x="20" y="40" width="560" height="22" fill="#37474f"/>
    <text x="80" y="56" fill="white" font-weight="bold">METHOD</text>
    <text x="220" y="56" fill="white" font-weight="bold">PURPOSE</text>
    <text x="390" y="56" fill="white" font-weight="bold">Safe</text>
    <text x="450" y="56" fill="white" font-weight="bold">Idempotent</text>
    <text x="540" y="56" fill="white" font-weight="bold">Cache</text>

    <rect x="20" y="65" width="560" height="22" fill="#fff"/>
    <text x="80" y="80" font-weight="bold">GET</text><text x="220" y="80">read</text><text x="395" y="80">✓</text><text x="465" y="80">✓</text><text x="548" y="80">✓</text>

    <rect x="20" y="90" width="560" height="22" fill="#fafafa"/>
    <text x="80" y="105" font-weight="bold">POST</text><text x="220" y="105">create / action</text><text x="395" y="105">✗</text><text x="465" y="105">✗</text><text x="548" y="105">✗</text>

    <rect x="20" y="115" width="560" height="22" fill="#fff"/>
    <text x="80" y="130" font-weight="bold">PUT</text><text x="220" y="130">full replace</text><text x="395" y="130">✗</text><text x="465" y="130">✓</text><text x="548" y="130">✗</text>

    <rect x="20" y="140" width="560" height="22" fill="#fafafa"/>
    <text x="80" y="155" font-weight="bold">PATCH</text><text x="220" y="155">partial update</text><text x="395" y="155">✗</text><text x="465" y="155">~</text><text x="548" y="155">✗</text>

    <rect x="20" y="165" width="560" height="22" fill="#fff"/>
    <text x="80" y="180" font-weight="bold">DELETE</text><text x="220" y="180">remove</text><text x="395" y="180">✗</text><text x="465" y="180">✓</text><text x="548" y="180">✗</text>

    <rect x="20" y="190" width="560" height="22" fill="#fafafa"/>
    <text x="80" y="205" font-weight="bold">HEAD</text><text x="220" y="205">like GET, no body</text><text x="395" y="205">✓</text><text x="465" y="205">✓</text><text x="548" y="205">✓</text>

    <rect x="20" y="215" width="560" height="22" fill="#fff"/>
    <text x="80" y="230" font-weight="bold">OPTIONS</text><text x="220" y="230">capabilities (CORS preflight)</text><text x="395" y="230">✓</text><text x="465" y="230">✓</text><text x="548" y="230">✗</text>

    <text x="300" y="265" text-anchor="middle" font-size="11" fill="#666">Safe = no server side-effects. Idempotent = same call N times = same state.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Concrete examples', level: 2 },
      { type: 'code', lang: 'text', code:
`GET    /users                 → 200 OK + array of users
GET    /users/42              → 200 OK or 404 Not Found
POST   /users                 → 201 Created + Location header
PUT    /users/42              → 200 OK or 204 No Content (full replace)
PATCH  /users/42              → 200 OK (partial update)
DELETE /users/42              → 204 No Content
HEAD   /users/42              → 200 OK headers only — does it exist?` },

      { type: 'callout', kind: 'warn', html: '<strong>POST is NOT idempotent</strong>. POSTing the same body twice usually creates two resources. For payments / financial APIs, ALWAYS use an idempotency key.' }
    ]},

    /* ============== CH 4 — Status codes ============== */
    { id: 'api-c4', title: 'Status Codes — Reference', icon: '🚦', sections: [
      { type: 'heading', text: 'The 5 families', level: 1 },

      { type: 'image', alt: 'status families', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Status code families</text>
  <g font-family="JetBrains Mono">
    <rect x="20" y="50" width="110" height="140" rx="10" fill="#90a4ae"/>
    <text x="75" y="85" text-anchor="middle" fill="white" font-size="20" font-weight="bold">1xx</text>
    <text x="75" y="110" text-anchor="middle" fill="white" font-family="Nunito" font-size="11">Informational</text>
    <text x="75" y="135" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">100 Continue</text>

    <rect x="135" y="50" width="110" height="140" rx="10" fill="#58cc02"/>
    <text x="190" y="85" text-anchor="middle" fill="white" font-size="20" font-weight="bold">2xx</text>
    <text x="190" y="110" text-anchor="middle" fill="white" font-family="Nunito" font-size="11">Success</text>
    <text x="190" y="135" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">200 OK</text>
    <text x="190" y="150" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">201 Created</text>
    <text x="190" y="165" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">204 No Content</text>

    <rect x="250" y="50" width="110" height="140" rx="10" fill="#ffc800"/>
    <text x="305" y="85" text-anchor="middle" fill="#3c3c3c" font-size="20" font-weight="bold">3xx</text>
    <text x="305" y="110" text-anchor="middle" fill="#3c3c3c" font-family="Nunito" font-size="11">Redirection</text>
    <text x="305" y="135" text-anchor="middle" fill="#3c3c3c" font-family="Nunito" font-size="10">301 Moved</text>
    <text x="305" y="150" text-anchor="middle" fill="#3c3c3c" font-family="Nunito" font-size="10">304 Not Modified</text>

    <rect x="365" y="50" width="110" height="140" rx="10" fill="#ff9600"/>
    <text x="420" y="85" text-anchor="middle" fill="white" font-size="20" font-weight="bold">4xx</text>
    <text x="420" y="110" text-anchor="middle" fill="white" font-family="Nunito" font-size="11">Client errors</text>
    <text x="420" y="135" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">400, 401, 403</text>
    <text x="420" y="150" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">404, 409, 422</text>
    <text x="420" y="165" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">429</text>

    <rect x="480" y="50" width="100" height="140" rx="10" fill="#ff4b4b"/>
    <text x="530" y="85" text-anchor="middle" fill="white" font-size="20" font-weight="bold">5xx</text>
    <text x="530" y="110" text-anchor="middle" fill="white" font-family="Nunito" font-size="11">Server errors</text>
    <text x="530" y="135" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">500, 502</text>
    <text x="530" y="150" text-anchor="middle" fill="white" font-family="Nunito" font-size="10">503, 504</text>
  </g>
</svg>` },

      { type: 'heading', text: 'The codes you actually use', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// 2xx — success</span>
<span class="num">200</span> OK                           default success with body
<span class="num">201</span> Created                      after POST; include <span class="kw">Location</span> header
<span class="num">202</span> Accepted                     async — "queued, will process"
<span class="num">204</span> No Content                   success with empty body (e.g., DELETE)

<span class="com">// 4xx — client errors</span>
<span class="num">400</span> Bad Request                  malformed syntax
<span class="num">401</span> Unauthorized                 not authenticated (or token bad)
<span class="num">403</span> Forbidden                    authenticated but not allowed
<span class="num">404</span> Not Found                    resource doesn\'t exist
<span class="num">409</span> Conflict                     state conflict (e.g., concurrent edit)
<span class="num">422</span> Unprocessable Entity         valid syntax, failed semantic validation
<span class="num">429</span> Too Many Requests            rate-limited; include <span class="kw">Retry-After</span>

<span class="com">// 5xx — server errors</span>
<span class="num">500</span> Internal Server Error        catch-all server failure
<span class="num">502</span> Bad Gateway                  upstream returned bad response
<span class="num">503</span> Service Unavailable          temporarily down or overloaded
<span class="num">504</span> Gateway Timeout              upstream took too long` },

      { type: 'callout', kind: 'danger', html: 'Anti-pattern: returning <code>200 OK</code> with <code>{"error": "..."}</code> in the body. Use the right status code so middleware, monitoring, and clients can handle it correctly.' }
    ]},

    /* ============== CH 5 — URI Design ============== */
    { id: 'api-c5', title: 'URI Design Best Practices', icon: '🔗', sections: [
      { type: 'heading', text: 'Names matter', level: 1 },

      { type: 'list', kind: 'check', items: [
        '<strong>Use nouns for resources</strong>, verbs in HTTP method',
        '<strong>Plural over singular</strong>: <code>/users</code> not <code>/user</code>',
        '<strong>Lowercase</strong> paths; <strong>kebab-case</strong> for multi-word: <code>/email-templates</code>',
        '<strong>Nest sub-resources</strong>: <code>/users/42/posts</code>',
        '<strong>Query params for filters</strong>: <code>/products?category=shoes&sort=-price</code>',
        '<strong>Stable IDs in URLs</strong>; expose UUIDs, not auto-increment for public APIs',
        '<strong>No trailing slash</strong> (or always — be consistent)',
        '<strong>Don\'t put internal IDs in URL</strong> if it could leak data'
      ]},

      { type: 'heading', text: 'Examples — what to do', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Good</span>
GET    /users
GET    /users/42
GET    /users/42/posts
POST   /users/42/avatar
GET    /products?category=shoes&sort=-price&limit=20
DELETE /sessions/current

<span class="com">// Bad</span>
POST   /createUser
GET    /getUserById?id=42
GET    /User                      (singular)
GET    /AllUsers                  (mixed case + adjective)
POST   /users/delete/42           (verb in URL)
GET    /users?id=42&id=43          (multiple ids — list endpoint should accept this differently)` },

      { type: 'heading', text: 'When NOT to be purist', level: 2 },
      { type: 'para', html: 'Sometimes an action doesn\'t fit CRUD. For "send invitation", "cancel order", "publish post" — pragmatic choice: <code>POST /orders/42/cancel</code> or <code>POST /orders/42/actions</code> with a body. Both fine if consistent.' },
      { type: 'callout', kind: 'tip', html: 'Consistency &gt; purity. Pick a convention for these edge cases and document it. Your consumers will thank you.' }
    ]},

    /* ============== CH 6 — Authentication ============== */
    { id: 'api-c6', title: 'Authentication & Authorization', icon: '🔑', sections: [
      { type: 'heading', text: 'Identify the caller, then check what they can do', level: 1 },
      { type: 'para', html: '<strong>Authentication</strong> = who you are. <strong>Authorization</strong> = what you\'re allowed to do.' },

      { type: 'heading', text: 'The common schemes', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">API key (header or query)</span>
   Authorization: ApiKey sk_live_abc123...
   Pros: simple. Cons: no expiry, hard to scope.

<span class="com">HTTP Basic (rare today)</span>
   Authorization: Basic base64(user:pass)
   Pros: built into HTTP. Cons: every request sends password.

<span class="com">Bearer token</span>
   Authorization: Bearer eyJhbGc...
   Token is typically JWT or opaque. Most modern web APIs.

<span class="com">JWT (a kind of Bearer token)</span>
   Self-contained, signed. header.payload.signature
   Pros: stateless. Cons: can\'t be revoked easily; rotate keys.

<span class="com">OAuth 2.0</span>
   Delegation: "let App X access my data on Service Y"
   Multiple flows for different scenarios.

<span class="com">OpenID Connect (OIDC)</span>
   Auth on top of OAuth. Powers "Sign in with Google/Apple/GitHub".

<span class="com">mTLS</span>
   Mutual TLS: both client + server present certificates.
   Strongest. Common in service mesh / internal traffic.` },

      { type: 'heading', text: 'OAuth 2.0 in one diagram', level: 2 },
      { type: 'image', alt: 'oauth flow', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">OAuth 2.0 Authorization Code flow (with PKCE)</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="100" height="40" rx="6" fill="#7c4dff"/><text x="70" y="74" text-anchor="middle" fill="white" font-weight="bold">User</text>
    <rect x="170" y="50" width="100" height="40" rx="6" fill="#ec407a"/><text x="220" y="74" text-anchor="middle" fill="white" font-weight="bold">Your App</text>
    <rect x="350" y="50" width="100" height="40" rx="6" fill="#1cb0f6"/><text x="400" y="74" text-anchor="middle" fill="white" font-weight="bold">Auth Server</text>
    <rect x="480" y="50" width="100" height="40" rx="6" fill="#58cc02"/><text x="530" y="74" text-anchor="middle" fill="white" font-weight="bold">API Server</text>

    <text x="80" y="120" font-size="11" fill="#666">1. Click login</text>
    <line x1="120" y1="115" x2="170" y2="115" stroke="#666" marker-end="url(#a2)"/>
    <text x="230" y="135" font-size="11" fill="#666">2. Redirect to Auth Server</text>
    <line x1="270" y1="130" x2="350" y2="130" stroke="#666" marker-end="url(#a2)"/>
    <text x="280" y="160" font-size="11" fill="#666">3. User logs in there</text>
    <text x="280" y="180" font-size="11" fill="#666">4. Auth Server redirects back with code</text>
    <text x="280" y="200" font-size="11" fill="#666">5. App exchanges code for access_token</text>
    <line x1="270" y1="215" x2="350" y2="215" stroke="#666" marker-end="url(#a2)"/>
    <text x="495" y="220" font-size="11" fill="#666">6. Use token</text>
  </g>
  <defs>
    <marker id="a2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 9 3, 0 6" fill="#666"/>
    </marker>
  </defs>
</svg>` },

      { type: 'heading', text: 'Authorization patterns', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>RBAC</strong> (Role-Based) — users belong to roles (Admin, Editor, Viewer); roles get permissions',
        '<strong>ABAC</strong> (Attribute-Based) — decisions on attributes (user.dept == doc.dept)',
        '<strong>Scopes</strong> (OAuth-style) — token has <code>read:users</code>, <code>write:posts</code> etc.',
        '<strong>Resource ownership</strong> — "user can edit their own posts"'
      ]},
      { type: 'callout', kind: 'warn', html: 'Always check authorization at the SERVER. Hiding a button in the UI does not protect the API.' }
    ]},

    /* ============== CH 7 — Security ============== */
    { id: 'api-c7', title: 'API Security', icon: '🛡️', sections: [
      { type: 'heading', text: 'Defense in depth', level: 1 },

      { type: 'image', alt: 'security layers', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Layered defenses for API security</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="40" y="50" width="520" height="32" fill="#7c4dff"/>
    <text x="300" y="71" text-anchor="middle" fill="white">HTTPS / TLS  (encrypted transport)</text>

    <rect x="60" y="86" width="480" height="32" fill="#1cb0f6"/>
    <text x="300" y="107" text-anchor="middle" fill="white">Authentication  (who is calling?)</text>

    <rect x="80" y="122" width="440" height="32" fill="#58cc02"/>
    <text x="300" y="143" text-anchor="middle" fill="white">Authorization  (are they allowed?)</text>

    <rect x="100" y="158" width="400" height="32" fill="#ff9600"/>
    <text x="300" y="179" text-anchor="middle" fill="white">Input validation + rate limiting</text>

    <rect x="120" y="194" width="360" height="32" fill="#e53935"/>
    <text x="300" y="215" text-anchor="middle" fill="white">Audit logs · monitoring · alerts</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Top threats and mitigations', level: 2 },
      { type: 'code', lang: 'text', code:
`Broken auth         →  short-lived tokens + refresh + revocation list
Broken object-level →  always check "is THIS user allowed to access X?"
authorization (BOLA)   ─── BOLA is the #1 OWASP API risk
Excessive data       →  return only fields the client needs
   exposure
Injection (SQLi etc.) →  parameterized queries + input validation
Rate limit / abuse   →  429 Too Many Requests + per-key quotas
Misconfig            →  no default creds; CORS locked down; security headers
SSRF                →  whitelist outbound destinations; no localhost calls
Logging gaps        →  log auth events; have alerting on anomalies` },

      { type: 'callout', kind: 'danger', html: 'BOLA — Broken Object Level Authorization — is the #1 OWASP API risk. A user requests <code>/orders/42</code>, and the API serves it without checking the order belongs to them. Always verify ownership.' },

      { type: 'heading', text: 'CORS in one minute', level: 2 },
      { type: 'para', html: 'Browsers block JavaScript from calling APIs on different origins, unless the API explicitly allows it via CORS headers.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Preflight: browser sends OPTIONS</span>
OPTIONS /api/users
Origin: https://app.example.com
Access-Control-Request-Method: POST

<span class="com">// Server responds with allowed origins/methods/headers</span>
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PATCH, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 86400` },
      { type: 'callout', kind: 'tip', html: 'CORS is a BROWSER policy, not a security feature in itself. Anyone using curl/Postman bypasses it. Your real security must live server-side.' }
    ]},

    /* ============== CH 8 — Versioning ============== */
    { id: 'api-c8', title: 'Versioning Strategies', icon: '🏷️', sections: [
      { type: 'heading', text: 'How to evolve without breaking everything', level: 1 },
      { type: 'para', html: 'APIs MUST evolve. Versioning lets you ship breaking changes without forcing all clients to update at once.' },

      { type: 'heading', text: 'Three strategies — and a date-based one', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// URL path (most popular)</span>
GET /v1/users
GET /v2/users

<span class="com">// Custom header (e.g., GitHub)</span>
GET /users
Accept: application/vnd.github.v3+json

<span class="com">// Query parameter (lazy, but works)</span>
GET /users?api_version=2

<span class="com">// Date-based (used by Stripe — very flexible)</span>
GET /users
Stripe-Version: 2024-04-01` },

      { type: 'heading', text: 'Breaking vs non-breaking changes', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Non-breaking (safe to release)</strong>: add a new optional field, add a new endpoint, add a new query param',
        '<strong>Breaking (needs new version)</strong>: remove a field, rename a field, change a field\'s type, change validation rules, change response status meaning',
        '<strong>Soft-breaking</strong>: adding a NEW required field on input — old clients break — needs versioning'
      ]},

      { type: 'heading', text: 'Deprecation done well', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Response from a deprecated endpoint</span>
HTTP/1.1 200 OK
Deprecation: true
Sunset: Tue, 31 Dec 2025 23:59:59 GMT
Link: &lt;https://api.example.com/v2/users/42&gt;; rel="successor-version"
Warning: 299 - "This endpoint will be removed on 2025-12-31."` },
      { type: 'callout', kind: 'tip', html: 'Give consumers at LEAST 6 months notice for deprecation. Email + docs + headers + dashboards showing usage of the old version.' }
    ]},

    /* ============== CH 9 — Pagination ============== */
    { id: 'api-c9', title: 'Pagination & Querying', icon: '📑', sections: [
      { type: 'heading', text: 'Big lists, sliced', level: 1 },

      { type: 'heading', text: 'Offset vs Cursor', level: 2 },
      { type: 'image', alt: 'pagination', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito">
    <text x="150" y="22" text-anchor="middle" font-weight="bold">Offset / Limit</text>
    <text x="450" y="22" text-anchor="middle" font-weight="bold">Cursor-based</text>

    <text x="150" y="50" text-anchor="middle" font-size="12" font-family="JetBrains Mono">?offset=200&amp;limit=50</text>
    <text x="450" y="50" text-anchor="middle" font-size="12" font-family="JetBrains Mono">?cursor=eyJpZCI6MTAwfQ</text>

    <rect x="30" y="70" width="240" height="100" rx="6" fill="#1cb0f6" opacity="0.2"/>
    <text x="150" y="95" text-anchor="middle" font-size="11" fill="#666">+ Simple</text>
    <text x="150" y="113" text-anchor="middle" font-size="11" fill="#666">+ Random access (jump to page 7)</text>
    <text x="150" y="131" text-anchor="middle" font-size="11" fill="#666">− Slow on big tables (DB scans offset rows)</text>
    <text x="150" y="149" text-anchor="middle" font-size="11" fill="#666">− Inconsistent if rows are added/removed</text>

    <rect x="330" y="70" width="240" height="100" rx="6" fill="#58cc02" opacity="0.2"/>
    <text x="450" y="95" text-anchor="middle" font-size="11" fill="#666">+ Stable under inserts/deletes</text>
    <text x="450" y="113" text-anchor="middle" font-size="11" fill="#666">+ Fast for any page (indexed lookup)</text>
    <text x="450" y="131" text-anchor="middle" font-size="11" fill="#666">− No random access — only next/prev</text>
    <text x="450" y="149" text-anchor="middle" font-size="11" fill="#666">− Cursor must be opaque to client</text>

    <text x="300" y="195" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">Rule of thumb: cursor for big feeds (Twitter, Facebook), offset for admin tables.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Response envelope', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Cursor-based response</span>
{
  "data": [ { /* item 1 */ }, { /* item 2 */ }, ... ],
  "page": {
    "next_cursor": "eyJpZCI6MTUwfQ",
    "has_more": true
  }
}

<span class="com">// Offset-based response</span>
{
  "data": [ ... ],
  "page": {
    "offset": 200,
    "limit": 50,
    "total": 1234
  }
}` },

      { type: 'heading', text: 'Filtering, sorting, sparse fieldsets', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Filter</span>
GET /products?category=shoes&min_price=20&max_price=100

<span class="com">// Sort (use - prefix for desc)</span>
GET /products?sort=-price,name

<span class="com">// Sparse fieldsets (only fetch what you need)</span>
GET /users?fields=id,name,email` }
    ]},

    /* ============== CH 10 — Errors ============== */
    { id: 'api-c10', title: 'Error Handling', icon: '⚠️', sections: [
      { type: 'heading', text: 'Tell clients exactly what went wrong', level: 1 },

      { type: 'heading', text: 'RFC 7807 Problem Details', level: 2 },
      { type: 'code', lang: 'text', code:
`HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "type":     "https://api.acme.com/errors/validation-failed",
  "title":    "Validation failed",
  "status":   422,
  "detail":   "One or more fields are invalid.",
  "instance": "/requests/req_abc123",
  "errors": [
    { "field": "email",     "code": "invalid_format" },
    { "field": "password",  "code": "too_short", "min": 8 }
  ]
}` },

      { type: 'heading', text: 'What to include', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Stable error code</strong> — clients can <code>switch</code> on it (e.g., <code>invalid_format</code>)',
        '<strong>Human-readable message</strong> — for logs and UI fallback',
        '<strong>Per-field details</strong> for validation errors',
        '<strong>Request ID / correlation ID</strong> — so users can give it to support',
        '<strong>NEVER</strong>: stack traces, SQL errors, internal paths, raw exception messages'
      ]},

      { type: 'heading', text: 'Pick the right status', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>400</strong> Malformed (bad JSON, missing required field)',
        '<strong>401</strong> Not authenticated (or token expired)',
        '<strong>403</strong> Authenticated but not authorized',
        '<strong>404</strong> Resource doesn\'t exist',
        '<strong>409</strong> Conflict (concurrent edit, duplicate)',
        '<strong>422</strong> Valid syntax, semantic validation failed',
        '<strong>429</strong> Rate limit hit',
        '<strong>5xx</strong> Server-side failure — never blame the client'
      ]},
      { type: 'callout', kind: 'warn', html: 'Treat error responses as part of your public API contract. Document them. Test them. Don\'t change them without versioning.' }
    ]},

    /* ============== CH 11 — Idempotency / Caching ============== */
    { id: 'api-c11', title: 'Idempotency & Caching', icon: '🔁', sections: [
      { type: 'heading', text: 'Make retries safe; make GETs fast', level: 1 },

      { type: 'heading', text: 'Idempotency keys', level: 2 },
      { type: 'para', html: 'Networks flake. Clients retry. Without protection, a retry of "charge $100" = double charge.' },
      { type: 'code', lang: 'text', code:
`POST /charges
Idempotency-Key: 9f8b6e2c-1a4d-44f3-...
{ "amount": 100, "currency": "USD" }

<span class="com">// Server saves key → response.
// Same key arrives again? Return saved response.
// Same key + DIFFERENT body? Return 409 Conflict.</span>` },

      { type: 'heading', text: 'Caching headers', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Server controls cacheability</span>
HTTP/1.1 200 OK
Cache-Control: public, max-age=300, must-revalidate
ETag: "abc123def456"
Last-Modified: Mon, 01 Apr 2024 12:00:00 GMT

<span class="com">// Client revalidation with ETag</span>
GET /users/42
If-None-Match: "abc123def456"

<span class="com">// Server response if not changed</span>
HTTP/1.1 304 Not Modified
&lt;empty body — saved bandwidth&gt;` },

      { type: 'heading', text: 'Where caching happens', level: 2 },
      { type: 'image', alt: 'caching layers', svg:
`<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="160" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Caching layers — fastest closest to client</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="100" height="60" rx="8" fill="#7c4dff"/><text x="70" y="78" text-anchor="middle" fill="white">Browser</text><text x="70" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="normal">cache</text>
    <text x="135" y="85" font-size="20">→</text>
    <rect x="155" y="50" width="100" height="60" rx="8" fill="#1cb0f6"/><text x="205" y="78" text-anchor="middle" fill="white">CDN</text><text x="205" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="normal">edge cache</text>
    <text x="270" y="85" font-size="20">→</text>
    <rect x="290" y="50" width="100" height="60" rx="8" fill="#58cc02"/><text x="340" y="78" text-anchor="middle" fill="white">Reverse</text><text x="340" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="normal">proxy (Varnish)</text>
    <text x="405" y="85" font-size="20">→</text>
    <rect x="425" y="50" width="100" height="60" rx="8" fill="#ff9600"/><text x="475" y="78" text-anchor="middle" fill="white">App</text><text x="475" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Redis cache</text>
    <text x="540" y="85" font-size="20">→</text>
    <rect x="560" y="50" width="30" height="60" rx="4" fill="#e53935"/><text x="575" y="85" text-anchor="middle" fill="white" font-size="10">DB</text>

    <text x="300" y="140" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">A 200ms request can become 5ms if a cache hits.</text>
  </g>
</svg>` }
    ]},

    /* ============== CH 12 — GraphQL ============== */
    { id: 'api-c12', title: 'GraphQL Primer', icon: '🔵', sections: [
      { type: 'heading', text: 'One endpoint, client-driven queries', level: 1 },
      { type: 'para', html: 'GraphQL was created at Facebook to solve mobile clients\' "over-fetching" problem. One endpoint, strongly-typed schema, clients ask for exactly what they need.' },

      { type: 'heading', text: 'Schema → query → response', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com"># 1. Schema (server-defined)</span>
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}
type Post {
  id: ID!
  title: String!
  body: String!
}
type Query {
  user(id: ID!): User
  users: [User!]!
}

<span class="com"># 2. Query (client-driven — only ask for what you need)</span>
{
  user(id: "42") {
    name
    posts { title }
  }
}

<span class="com"># 3. Response (exactly the shape requested)</span>
{
  "data": {
    "user": {
      "name": "Ana",
      "posts": [{ "title": "Hello" }, { "title": "World" }]
    }
  }
}` },

      { type: 'heading', text: 'REST vs GraphQL', level: 2 },
      { type: 'image', alt: 'rest vs graphql', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="270" height="140" rx="10" fill="#7c4dff"/>
    <text x="155" y="75" text-anchor="middle" fill="white">REST</text>
    <text x="155" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Many endpoints</text>
    <text x="155" y="118" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Each returns fixed shape</text>
    <text x="155" y="136" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Over-fetch and under-fetch</text>
    <text x="155" y="160" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Easy to cache (HTTP)</text>

    <rect x="310" y="50" width="270" height="140" rx="10" fill="#ec407a"/>
    <text x="445" y="75" text-anchor="middle" fill="white">GraphQL</text>
    <text x="445" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">One endpoint</text>
    <text x="445" y="118" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Client picks fields</text>
    <text x="445" y="136" text-anchor="middle" fill="white" font-size="11" font-weight="normal">No over/under fetching</text>
    <text x="445" y="160" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Caching is harder</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'GraphQL shines when many clients (mobile, web, partners) need different views of the same data. Less ideal when caching, file uploads, or strict rate limits matter.' }
    ]},

    /* ============== CH 13 — gRPC / Realtime ============== */
    { id: 'api-c13', title: 'gRPC, WebSockets, Webhooks', icon: '📡', sections: [
      { type: 'heading', text: 'When REST isn\'t enough', level: 1 },

      { type: 'heading', text: 'gRPC — fast internal RPC', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// users.proto</span>
syntax = "proto3";

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);    <span class="com">// server streaming</span>
  rpc ChatRoom (stream Msg) returns (stream Msg);            <span class="com">// bidirectional</span>
}

message User {
  string id   = 1;
  string name = 2;
  string email = 3;
}` },
      { type: 'list', kind: 'check', items: [
        'Binary (Protocol Buffers) → smaller and faster than JSON',
        'Strict schemas → strong typing across languages',
        'HTTP/2 multiplexing → many calls over one connection',
        'Streaming (server, client, bidi) built in',
        'Browsers can\'t call directly → need gRPC-Web or a JSON gateway'
      ]},

      { type: 'heading', text: 'WebSockets — full-duplex push', level: 2 },
      { type: 'code', lang: 'javascript', code:
`<span class="kw">const</span> ws = <span class="kw">new</span> <span class="ty">WebSocket</span>(<span class="str">"wss://api.example.com/chat"</span>);

ws.<span class="fn">addEventListener</span>(<span class="str">"open"</span>, () =&gt; {
  ws.<span class="fn">send</span>(<span class="ty">JSON</span>.<span class="fn">stringify</span>({ <span class="str">"action"</span>: <span class="str">"join"</span>, <span class="str">"room"</span>: <span class="str">"general"</span> }));
});

ws.<span class="fn">addEventListener</span>(<span class="str">"message"</span>, (e) =&gt; {
  <span class="ty">console</span>.<span class="fn">log</span>(<span class="str">"received:"</span>, e.data);
});` },

      { type: 'heading', text: 'Webhooks — they call YOU', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Your app registers a webhook URL with Stripe</span>
POST /webhooks/stripe
Stripe-Signature: t=1700000000,v1=abc123...
Content-Type: application/json

{
  "type": "payment_intent.succeeded",
  "data": { "object": { "id": "pi_xyz", "amount": 5000, ... } }
}` },
      { type: 'callout', kind: 'danger', html: '<strong>Always verify webhook signatures.</strong> Anyone who knows your URL can POST fake data. Stripe, GitHub, Slack all sign their webhooks — verify with the secret they gave you.' }
    ]},

    /* ============== CH 14 — OpenAPI ============== */
    { id: 'api-c14', title: 'OpenAPI / Documentation', icon: '📚', sections: [
      { type: 'heading', text: 'A single spec drives everything', level: 1 },
      { type: 'para', html: '<strong>OpenAPI</strong> (formerly Swagger) is a YAML/JSON document describing your HTTP API. From it you get docs, SDKs, mocks, and contract tests — for free.' },

      { type: 'heading', text: 'A minimal OpenAPI spec', level: 2 },
      { type: 'code', lang: 'text', code:
`openapi: 3.1.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: integer }
      responses:
        \'200\':
          description: OK
          content:
            application/json:
              schema: { $ref: \'#/components/schemas/User\' }
        \'404\':
          description: Not Found
components:
  schemas:
    User:
      type: object
      required: [id, name]
      properties:
        id:    { type: integer }
        name:  { type: string }
        email: { type: string, format: email }` },

      { type: 'heading', text: 'What you get from it', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Swagger UI / Redoc</strong> — interactive docs, try it in the browser',
        '<strong>openapi-generator</strong> — SDKs in 50+ languages',
        '<strong>Prism / Mockoon</strong> — mock servers for early integration',
        '<strong>Spectral</strong> — lint your spec for consistency',
        '<strong>Schemathesis</strong> — fuzz-test your API based on the spec',
        '<strong>Contract tests</strong> — verify implementation matches spec'
      ]},

      { type: 'callout', kind: 'tip', html: '<strong>Design-first:</strong> write the spec, review it with consumers, THEN code. Catches design issues before they cost engineering time. Especially valuable for public APIs.' }
    ]},

    /* ============== CH 15 — Process ============== */
    { id: 'api-c15', title: 'API Design Process', icon: '🎯', sections: [
      { type: 'heading', text: 'A pragmatic workflow', level: 1 },

      { type: 'image', alt: 'api process', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">From idea to shipped API</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="110" height="50" rx="8" fill="#7c4dff"/>
    <text x="75" y="72" text-anchor="middle" fill="white" font-size="11">1. Use cases</text>
    <text x="75" y="90" text-anchor="middle" fill="white" font-size="10" font-weight="normal">who calls? why?</text>

    <text x="145" y="78" font-size="20">→</text>

    <rect x="165" y="50" width="110" height="50" rx="8" fill="#1cb0f6"/>
    <text x="220" y="72" text-anchor="middle" fill="white" font-size="11">2. Resources</text>
    <text x="220" y="90" text-anchor="middle" fill="white" font-size="10" font-weight="normal">core nouns</text>

    <text x="290" y="78" font-size="20">→</text>

    <rect x="310" y="50" width="110" height="50" rx="8" fill="#58cc02"/>
    <text x="365" y="72" text-anchor="middle" fill="white" font-size="11">3. Endpoints</text>
    <text x="365" y="90" text-anchor="middle" fill="white" font-size="10" font-weight="normal">verb · URL · code</text>

    <text x="435" y="78" font-size="20">→</text>

    <rect x="455" y="50" width="120" height="50" rx="8" fill="#ff9600"/>
    <text x="515" y="72" text-anchor="middle" fill="white" font-size="11">4. Auth + versioning</text>
    <text x="515" y="90" text-anchor="middle" fill="white" font-size="10" font-weight="normal">decide UP-FRONT</text>

    <line x1="75" y1="100" x2="75" y2="135" stroke="#666" stroke-width="2"/>
    <polygon points="69,135 75,148 81,135" fill="#666"/>

    <rect x="20" y="150" width="110" height="50" rx="8" fill="#ec407a"/>
    <text x="75" y="172" text-anchor="middle" fill="white" font-size="11">5. Error shape</text>
    <text x="75" y="190" text-anchor="middle" fill="white" font-size="10" font-weight="normal">consistent</text>

    <text x="145" y="178" font-size="20">→</text>

    <rect x="165" y="150" width="110" height="50" rx="8" fill="#37474f"/>
    <text x="220" y="172" text-anchor="middle" fill="white" font-size="11">6. OpenAPI</text>
    <text x="220" y="190" text-anchor="middle" fill="white" font-size="10" font-weight="normal">+ consumer review</text>

    <text x="290" y="178" font-size="20">→</text>

    <rect x="310" y="150" width="110" height="50" rx="8" fill="#845ec2"/>
    <text x="365" y="172" text-anchor="middle" fill="white" font-size="11">7. Build</text>
    <text x="365" y="190" text-anchor="middle" fill="white" font-size="10" font-weight="normal">+ contract tests</text>

    <text x="435" y="178" font-size="20">→</text>

    <rect x="455" y="150" width="120" height="50" rx="8" fill="#26a69a"/>
    <text x="515" y="172" text-anchor="middle" fill="white" font-size="11">8. Ship + monitor</text>
    <text x="515" y="190" text-anchor="middle" fill="white" font-size="10" font-weight="normal">latency · errors · usage</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Checklist before going live', level: 2 },
      { type: 'list', kind: 'check', items: [
        'HTTPS only',
        'Auth scheme decided + documented',
        'Versioned URL (/v1) — even if it\'s the first version',
        'Consistent error response shape',
        'Status codes used correctly (no 200 OK with errors!)',
        'Pagination on every list endpoint',
        'Rate limiting in place',
        'OpenAPI spec published',
        'curl + code examples in the docs',
        'Monitoring: latency, error rate, usage per consumer',
        'Audit log of sensitive operations',
        'Deprecation policy documented'
      ]},

      { type: 'heading', text: 'Common pitfalls to avoid', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Verbs in URLs</strong> (<code>/createUser</code>) — use HTTP methods',
        '<strong>Inconsistent naming</strong> — pick a case (camelCase / snake_case) and stick with it',
        '<strong>200 OK for errors</strong> — use proper status codes',
        '<strong>No pagination</strong> on list endpoints — you\'ll regret it at scale',
        '<strong>Leaking internals</strong> — DB column names, stack traces, internal IDs',
        '<strong>No versioning</strong> — every breaking change becomes a crisis',
        '<strong>Skipping idempotency</strong> on POSTs that mutate billable state',
        '<strong>Auth as an afterthought</strong> — design it in from day one'
      ]},
      { type: 'callout', kind: 'success', html: '🎯 Great APIs are obvious to use, hard to misuse, and stable enough to build on. Spend time on the design — your future self and your consumers will thank you.' }
    ]}
  ]
});

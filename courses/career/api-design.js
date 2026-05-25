PUSH({
  id: 'api-design',
  name: 'API Design',
  icon: '🌐',
  color: '#ec407a',
  description: 'Build great APIs — REST, HTTP, auth, versioning, GraphQL, gRPC, and the design process.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'api-u1', name: 'Unit 1 · What is an API?', description: 'The contract between systems',
      lessons: [
        {
          id: 'api-u1-l1', name: 'APIs in one minute', icon: '🌐', xp: 15,
          challenges: [
            { type: 'concept', title: 'Apps talk to each other through APIs', content: `<p>An <strong>API (Application Programming Interface)</strong> is a contract: "if you send me this request, I\'ll send you that response." It lets software components communicate without exposing internals.</p>
<div class="code-block"><span class="com">Examples you use daily:</span>
- Stripe API     → process payments
- Twilio API     → send SMS
- Google Maps    → geocoding, directions
- OpenAI API     → call GPT
- Your own:      → frontend ↔ backend</div>
<p>An API doesn\'t have to be over the web — libraries also have APIs. But in this course, "API" means a network-callable service.</p>` },
            { type: 'multiple-choice', prompt: 'Which is NOT an API style for web services?',
              options: [{text:'REST', code:false},{text:'GraphQL', code:false},{text:'gRPC', code:false},{text:'CSS', code:false}],
              correct: 3, explanation: 'CSS is for styling, not API communication.' },
            { type: 'multiple-choice', prompt: 'Best definition of an API?',
              options: [{text:'A user interface', code:false},{text:'A contract describing how to interact with a service', code:false},{text:'A database', code:false},{text:'A language', code:false}],
              correct: 1, explanation: 'It defines requests, responses, semantics — without exposing implementation.' },
            { type: 'true-false', statement: 'APIs decouple producers from consumers — you can change your implementation without breaking clients (as long as the contract stays the same).', correct: true, explanation: 'That\'s their main value. Stable contract → free to evolve internally.' }
          ]
        },
        {
          id: 'api-u1-l2', name: 'API styles compared', icon: '🎨', xp: 20,
          challenges: [
            { type: 'concept', title: 'Pick the right style for the job', content: `<div class="code-block"><span class="com">REST</span>      — resources + HTTP verbs. Web standard. Easy to cache.
<span class="com">GraphQL</span>   — one endpoint, client picks fields. Avoids over-fetching.
<span class="com">gRPC</span>      — binary protocol over HTTP/2. Very fast. Strict schemas.
<span class="com">SOAP</span>      — older, XML-heavy. Still used in enterprise/banking.
<span class="com">WebSockets</span> — bidirectional, long-lived. For chat, live updates.
<span class="com">Webhooks</span>   — they call YOU when an event happens (reverse direction).</div>` },
            { type: 'multiple-choice', prompt: 'You\'re building a public API for partners. Most universal choice?',
              options: [{text:'REST (or GraphQL)', code:false},{text:'gRPC', code:false},{text:'WebSockets', code:false},{text:'SOAP', code:false}],
              correct: 0, explanation: 'REST is the lingua franca of public APIs. gRPC is great internally but harder for external clients.' },
            { type: 'multiple-choice', prompt: 'Chat app needing live message delivery — best protocol?',
              options: [{text:'REST polling', code:false},{text:'WebSockets', code:false},{text:'Webhooks only', code:false},{text:'gRPC unary calls', code:false}],
              correct: 1, explanation: 'WebSockets provide low-latency bidirectional comms.' },
            { type: 'match-pairs', prompt: 'Match style → use case.', leftLabel: 'Style', rightLabel: 'Use case',
              pairs: [{left:'REST', right:'Public web API'},{left:'gRPC', right:'High-perf service-to-service'},{left:'GraphQL', right:'Mobile app, flexible fields'},{left:'WebSockets', right:'Live chat / streaming'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — REST principles ============== */
    {
      id: 'api-u2', name: 'Unit 2 · REST Principles', description: 'The architectural style',
      lessons: [
        {
          id: 'api-u2-l1', name: 'The 6 REST constraints', icon: '📜', xp: 20,
          challenges: [
            { type: 'concept', title: 'Roy Fielding\'s rules', content: `<div class="code-block"><span class="com">1. Client-Server</span>   — separation of concerns
<span class="com">2. Stateless</span>       — each request contains all needed info
<span class="com">3. Cacheable</span>       — responses must indicate cacheability
<span class="com">4. Uniform Interface</span> — resources via URLs + standard verbs
<span class="com">5. Layered system</span>   — clients can\'t tell if directly connected
<span class="com">6. Code on demand</span>   — (optional) server can ship JS to client</div>
<p><strong>Stateless</strong> is the biggie — server doesn\'t store client session state. Each request stands alone.</p>` },
            { type: 'multiple-choice', prompt: 'Which REST constraint says "no server-side session state between requests"?',
              options: [{text:'Cacheable', code:false},{text:'Stateless', code:false},{text:'Layered', code:false},{text:'Uniform', code:false}],
              correct: 1, explanation: 'Stateless. Each request carries its own auth context.' },
            { type: 'true-false', statement: 'In REST, the URL identifies a resource (a thing), and the HTTP verb describes what to do with it.', correct: true, explanation: 'GET /users/42 — verb says read, URL identifies user 42.' },
            { type: 'multiple-choice', prompt: 'Which is NOT a benefit of statelessness?',
              options: [{text:'Easy horizontal scaling', code:false},{text:'Simpler load balancing (any server can handle any request)', code:false},{text:'Lower per-request bandwidth (no need to send auth)', code:false},{text:'Improved fault tolerance', code:false}],
              correct: 2, explanation: 'Stateless requires MORE per-request info — auth token, context. Worth the tradeoff.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — HTTP ============== */
    {
      id: 'api-u3', name: 'Unit 3 · HTTP for APIs', description: 'The protocol you\'ll work with daily',
      lessons: [
        {
          id: 'api-u3-l1', name: 'HTTP methods', icon: '🔁', xp: 20,
          challenges: [
            { type: 'concept', title: 'The verbs and their meaning', content: `<div class="code-block"><span class="com">GET</span>     — read. Safe. Idempotent. Cacheable.
<span class="com">POST</span>    — create or "do an action". NOT idempotent.
<span class="com">PUT</span>     — full replace. Idempotent (same call → same state).
<span class="com">PATCH</span>   — partial update. Often not idempotent in practice.
<span class="com">DELETE</span>  — remove. Idempotent.
<span class="com">HEAD</span>    — like GET but no body. For metadata / existence checks.
<span class="com">OPTIONS</span> — what\'s allowed? (CORS preflight uses this)</div>
<p><strong>Idempotent</strong>: calling it N times has the same effect as calling it once.</p>` },
            { type: 'multiple-choice', prompt: 'Which methods are idempotent (per spec)?',
              options: [{text:'GET, POST, DELETE', code:false},{text:'GET, PUT, DELETE (and HEAD/OPTIONS)', code:false},{text:'POST, PUT', code:false},{text:'Only GET', code:false}],
              correct: 1, explanation: 'POST is NOT idempotent — calling twice often creates two resources.' },
            { type: 'multiple-choice', prompt: 'You want to update one field of a user. Best method?',
              options: [{text:'GET', code:false},{text:'POST', code:false},{text:'PUT (full replace)', code:false},{text:'PATCH (partial update)', code:false}],
              correct: 3, explanation: 'PATCH is the right verb for partial updates.' },
            { type: 'true-false', statement: 'A POST to /orders that creates an order is idempotent — calling twice safely produces one order.', correct: false, explanation: 'Without an idempotency key, calling twice = two orders. Always check before relying on idempotency.' },
            { type: 'match-pairs', prompt: 'Match action → method.', leftLabel: 'Action', rightLabel: 'Method',
              pairs: [{left:'List all users', right:'GET'},{left:'Create a new user', right:'POST'},{left:'Replace user 42 entirely', right:'PUT'},{left:'Update one field on user 42', right:'PATCH'}] }
          ]
        },
        {
          id: 'api-u3-l2', name: 'Status codes', icon: '🚦', xp: 25,
          challenges: [
            { type: 'concept', title: 'The 5 families', content: `<div class="code-block"><span class="num">1xx</span>  informational (rare; <span class="num">100 Continue</span>)
<span class="num">2xx</span>  success
       <span class="num">200 OK</span>, <span class="num">201 Created</span>, <span class="num">204 No Content</span>, <span class="num">202 Accepted</span>
<span class="num">3xx</span>  redirection
       <span class="num">301 Moved Permanently</span>, <span class="num">302 Found</span>, <span class="num">304 Not Modified</span>
<span class="num">4xx</span>  client errors
       <span class="num">400 Bad Request</span>, <span class="num">401 Unauthorized</span>, <span class="num">403 Forbidden</span>
       <span class="num">404 Not Found</span>, <span class="num">409 Conflict</span>, <span class="num">422 Unprocessable</span>, <span class="num">429 Too Many Requests</span>
<span class="num">5xx</span>  server errors
       <span class="num">500 Internal Server Error</span>, <span class="num">502 Bad Gateway</span>, <span class="num">503 Service Unavailable</span>, <span class="num">504 Gateway Timeout</span></div>` },
            { type: 'multiple-choice', prompt: 'User\'s token is invalid. Which status?',
              options: [{text:'400 Bad Request', code:false},{text:'401 Unauthorized', code:false},{text:'403 Forbidden', code:false},{text:'404 Not Found', code:false}],
              correct: 1, explanation: '401 = no/invalid auth. 403 = authenticated but not allowed.' },
            { type: 'multiple-choice', prompt: 'You created a resource — best response?',
              options: [{text:'200 OK', code:false},{text:'201 Created (with Location header)', code:false},{text:'202 Accepted', code:false},{text:'204 No Content', code:false}],
              correct: 1, explanation: '201 + Location is the textbook answer for creation.' },
            { type: 'multiple-choice', prompt: 'Client sends valid JSON but business validation fails (e.g., negative price). Best status?',
              options: [{text:'400 Bad Request', code:false},{text:'422 Unprocessable Entity', code:false},{text:'500 Internal Server Error', code:false},{text:'409 Conflict', code:false}],
              correct: 1, explanation: '400 is for malformed requests; 422 for valid syntax but failed semantic validation.' },
            { type: 'multiple-choice', prompt: 'Too many requests from one client. Which?',
              options: [{text:'400', code:false},{text:'403', code:false},{text:'429 Too Many Requests', code:false},{text:'503', code:false}],
              correct: 2, explanation: '429 + Retry-After header is standard for rate limiting.' },
            { type: 'true-false', statement: 'Returning 200 OK with {"error": "..."} in the body is a REST anti-pattern.', correct: true, explanation: 'Use the right status code. The body should match the status.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — URI Design ============== */
    {
      id: 'api-u4', name: 'Unit 4 · URI Design', description: 'How to name your endpoints',
      lessons: [
        {
          id: 'api-u4-l1', name: 'Naming endpoints', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Resources, not actions', content: `<p>URIs should identify <strong>resources</strong> (things), and HTTP verbs say what to do.</p>
<div class="code-block"><span class="com">BAD — verbs in URL</span>
POST /createUser
GET  /getUsers/42
POST /deleteUser/42

<span class="com">GOOD — resource + verb</span>
POST   /users          create
GET    /users          list
GET    /users/42       get one
PATCH  /users/42       update partial
DELETE /users/42       delete</div>
<p>Rules of thumb:</p>
<ul>
<li>Plural nouns (<code>/users</code>, not <code>/user</code>)</li>
<li>Hierarchical resources nest: <code>/users/42/posts</code></li>
<li>Use kebab-case in paths (<code>/email-templates</code>), camelCase or snake_case in JSON</li>
<li>Lowercase only</li>
<li>No trailing slash (pick one and stick with it)</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Best URL to update a user\'s avatar?',
              options: [{text:'POST /updateUserAvatar/42', code:false},{text:'PATCH /users/42 (with avatar in body)', code:false},{text:'PUT /users/42/avatar (with image)', code:false},{text:'Both 2 and 3 are reasonable', code:false}],
              correct: 3, explanation: 'Both are valid RESTful options — PATCH for general user update, or a dedicated avatar sub-resource.' },
            { type: 'multiple-choice', prompt: 'You want all posts by user 42. Best URL?',
              options: [{text:'/getUserPosts?userId=42', code:false},{text:'/users/42/posts', code:false},{text:'/posts?owner=42', code:false},{text:'Either 2 or 3 — but 2 expresses ownership more clearly', code:false}],
              correct: 3, explanation: 'Nested URLs express belonging. Query-filter version is also valid.' },
            { type: 'true-false', statement: 'Endpoints should use plural nouns: /users, not /user.', correct: true, explanation: 'Standard convention.' },
            { type: 'fill-blank', prompt: 'Delete account 99. Best HTTP verb?',
              codeLines: [{html:'<span class="kw">_BLANK_</span> /accounts/<span class="num">99</span>'}],
              tokens: ['DELETE','POST','GET','REMOVE'], correctAnswer: 'DELETE' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Auth ============== */
    {
      id: 'api-u5', name: 'Unit 5 · Authentication', description: 'Who is calling?',
      lessons: [
        {
          id: 'api-u5-l1', name: 'Common auth schemes', icon: '🔑', xp: 25,
          challenges: [
            { type: 'concept', title: 'From API keys to OAuth', content: `<div class="code-block"><span class="com">API key</span>            — long random string in header. Simple, no expiry.
<span class="com">HTTP Basic</span>         — base64(user:pass). Only over HTTPS. Rare today.
<span class="com">Bearer token</span>       — <span class="str">Authorization: Bearer xxx</span>. Token = JWT or opaque.
<span class="com">JWT</span>                — self-contained signed token. Stateless.
<span class="com">OAuth 2.0</span>          — delegation: "Acme can access my Google data".
<span class="com">OpenID Connect (OIDC)</span> — auth on top of OAuth (used for "Sign in with X").
<span class="com">mTLS</span>               — both sides present certs. Strong, used internally.</div>` },
            { type: 'multiple-choice', prompt: '"Sign in with Google" uses which protocol?',
              options: [{text:'SAML', code:false},{text:'OpenID Connect (built on OAuth 2.0)', code:false},{text:'JWT alone', code:false},{text:'mTLS', code:false}],
              correct: 1, explanation: 'OIDC is the modern standard for federated identity.' },
            { type: 'multiple-choice', prompt: 'A JWT (JSON Web Token) consists of:',
              options: [{text:'header.payload.signature, base64-encoded', code:false},{text:'A random UUID', code:false},{text:'A username/password combo', code:false},{text:'An XML doc', code:false}],
              correct: 0, explanation: 'Three dot-separated base64 parts, signed (HMAC or RSA).' },
            { type: 'true-false', statement: 'You should send credentials only over HTTPS — never plain HTTP.', correct: true, explanation: 'HTTP is plaintext — anyone on the network can read tokens.' },
            { type: 'multiple-choice', prompt: '"Bearer" auth means:',
              options: [{text:'Whoever holds the token can use it', code:false},{text:'Must be physically present', code:false},{text:'Requires biometrics', code:false},{text:'Server stores session', code:false}],
              correct: 0, explanation: 'Anyone with the bearer token can authenticate as the owner — protect them like passwords.' }
          ]
        },
        {
          id: 'api-u5-l2', name: 'OAuth 2.0 flows', icon: '🪪', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick the right flow', content: `<div class="code-block"><span class="com">Authorization Code (+ PKCE)</span>
   Best for web apps + mobile/SPAs. User logs in on provider site,
   we get a code → exchange for token.

<span class="com">Client Credentials</span>
   Machine-to-machine. No user. Just service identifying itself.

<span class="com">Device Code</span>
   For input-constrained devices (TV, CLI). User goes to URL on phone.

<span class="com">Implicit (deprecated)</span>
   Old SPA flow. Don\'t use — use Auth Code + PKCE instead.

<span class="com">Resource Owner Password (deprecated)</span>
   App sends user\'s password to provider. Don\'t use.</div>` },
            { type: 'multiple-choice', prompt: 'Service A calls Service B with no user context. Best OAuth flow:',
              options: [{text:'Authorization Code', code:false},{text:'Client Credentials', code:false},{text:'Implicit', code:false},{text:'Device Code', code:false}],
              correct: 1, explanation: 'No user → Client Credentials.' },
            { type: 'multiple-choice', prompt: 'Modern recommendation for a mobile app login?',
              options: [{text:'Implicit flow', code:false},{text:'Authorization Code with PKCE', code:false},{text:'Resource Owner Password', code:false},{text:'Client Credentials', code:false}],
              correct: 1, explanation: 'Auth Code + PKCE protects the auth code from interception on mobile.' },
            { type: 'true-false', statement: 'A refresh token allows you to obtain new access tokens without re-prompting the user.', correct: true, explanation: 'Refresh tokens have longer lifetimes; access tokens are short-lived (e.g., 1 hour).' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Security ============== */
    {
      id: 'api-u6', name: 'Unit 6 · API Security', description: 'Beyond authentication',
      lessons: [
        {
          id: 'api-u6-l1', name: 'Common defenses', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Layered protections', content: `<div class="code-block"><span class="com">HTTPS only</span>          — enforce TLS for all endpoints
<span class="com">Input validation</span>    — every field, server-side (never trust client)
<span class="com">Rate limiting</span>       — per-IP, per-key, per-user
<span class="com">Authentication</span>      — verify identity (covered earlier)
<span class="com">Authorization</span>       — what is this user allowed to do?
<span class="com">CORS</span>               — restrict which browser origins can call
<span class="com">CSRF protection</span>    — for cookie-auth (not stateless tokens)
<span class="com">Output encoding</span>     — escape data before sending HTML
<span class="com">Avoid leaking errors</span> — don\'t expose stack traces in 5xx
<span class="com">Audit logs</span>          — who did what when</div>` },
            { type: 'multiple-choice', prompt: '401 vs 403 — which is "you\'re authenticated, but you can\'t do this"?',
              options: [{text:'401 Unauthorized', code:false},{text:'403 Forbidden', code:false},{text:'404 Not Found', code:false},{text:'400 Bad Request', code:false}],
              correct: 1, explanation: '401 = identify yourself first. 403 = identified, denied.' },
            { type: 'multiple-choice', prompt: 'Rate limiting commonly returns:',
              options: [{text:'400 Bad Request', code:false},{text:'429 Too Many Requests + Retry-After header', code:false},{text:'500 Server Error', code:false},{text:'403 Forbidden', code:false}],
              correct: 1, explanation: '429 + Retry-After lets clients back off intelligently.' },
            { type: 'true-false', statement: 'Validate input on the SERVER even if the client also validates — never trust client input.', correct: true, explanation: 'Clients can be modified, bypassed, or replaced. Server is the last line of defense.' },
            { type: 'multiple-choice', prompt: 'CORS errors typically come from:',
              options: [{text:'Server config blocking origin', code:false},{text:'A virus', code:false},{text:'Bad DNS', code:false},{text:'Wrong method', code:false}],
              correct: 0, explanation: 'Set Access-Control-Allow-Origin and friends on the server.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Versioning ============== */
    {
      id: 'api-u7', name: 'Unit 7 · Versioning', description: 'Evolve without breaking',
      lessons: [
        {
          id: 'api-u7-l1', name: 'Three common strategies', icon: '🏷️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Pick one and stick with it', content: `<div class="code-block"><span class="com">URL path</span>             <span class="str">/v1/users</span>, <span class="str">/v2/users</span>
                       Most visible. Easy to route. Most popular.

<span class="com">Header</span>               <span class="str">Accept: application/vnd.acme.v2+json</span>
                       Cleaner URLs. Harder to test in browser.

<span class="com">Query param</span>          <span class="str">/users?version=2</span>
                       Easy but messy with caching.

<span class="com">Date-based</span>           <span class="str">Stripe-Version: 2024-04-01</span>
                       Used by Stripe. Pin to a specific date.</div>
<p>When breaking changes are needed: <strong>release v2 in parallel</strong>, deprecate v1 with clear timeline, ship sunset headers.</p>` },
            { type: 'multiple-choice', prompt: 'Most common public-API versioning approach?',
              options: [{text:'URL path /v1/...', code:false},{text:'Custom header', code:false},{text:'Query param', code:false},{text:'No versioning', code:false}],
              correct: 0, explanation: 'URL path is most popular for its visibility and routing simplicity.' },
            { type: 'multiple-choice', prompt: 'Adding a new optional field to a response is:',
              options: [{text:'A breaking change — requires new version', code:false},{text:'A non-breaking (additive) change — usually safe', code:false},{text:'Always requires deprecation notice', code:false},{text:'Disallowed', code:false}],
              correct: 1, explanation: 'New optional fields are backward-compatible. Old clients ignore them.' },
            { type: 'true-false', statement: 'Deprecation should include: a sunset date, a Deprecation header, and clear documentation.', correct: true, explanation: 'Don\'t surprise consumers. Give them lead time.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Pagination / Query ============== */
    {
      id: 'api-u8', name: 'Unit 8 · Pagination & Querying', description: 'Big lists, sliced & filtered',
      lessons: [
        {
          id: 'api-u8-l1', name: 'Pagination strategies', icon: '📑', xp: 25,
          challenges: [
            { type: 'concept', title: 'Offset vs cursor', content: `<div class="code-block"><span class="com">Offset/Limit</span>     <span class="str">GET /users?offset=200&limit=50</span>
                Simple. Bad for big tables — DB scans first 200 rows.
                Inconsistent if new rows are inserted while paginating.

<span class="com">Page-based</span>       <span class="str">GET /users?page=5&per_page=50</span>
                Just offset with friendlier names.

<span class="com">Cursor-based</span>     <span class="str">GET /users?cursor=eyJpZCI6MTAwfQ</span>
                Each response gives next/prev cursor. Stable.
                Best for big infinite-scroll feeds (Twitter, Facebook).</div>` },
            { type: 'multiple-choice', prompt: 'Best pagination for an infinite-scroll feed?',
              options: [{text:'Offset/limit', code:false},{text:'Cursor-based', code:false},{text:'No pagination', code:false},{text:'Page-based', code:false}],
              correct: 1, explanation: 'Cursors are stable as data inserts/deletes; offsets cause skips/duplicates.' },
            { type: 'multiple-choice', prompt: 'Filtering and sorting in REST commonly uses:',
              options: [{text:'Query parameters: /products?category=shoes&sort=price', code:false},{text:'POST body', code:false},{text:'Path segments only', code:false},{text:'Headers', code:false}],
              correct: 0, explanation: 'Query params for filter, sort, limit — easy to bookmark and cache.' },
            { type: 'true-false', statement: 'Pagination responses should include metadata (next/prev/total or hasMore) — not just the items.', correct: true, explanation: 'Clients need to know how to fetch the next page or know they\'re done.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Errors ============== */
    {
      id: 'api-u9', name: 'Unit 9 · Error Handling', description: 'Tell clients what went wrong',
      lessons: [
        {
          id: 'api-u9-l1', name: 'Designing error responses', icon: '⚠️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Consistent + actionable', content: `<p>RFC 7807 "Problem Details" is the modern standard:</p>
<div class="code-block">HTTP/1.1 400 Bad Request
Content-Type: application/problem+json

{
  <span class="str">"type"</span>:   <span class="str">"https://api.acme.com/errors/invalid-input"</span>,
  <span class="str">"title"</span>:  <span class="str">"Invalid input"</span>,
  <span class="str">"status"</span>: <span class="num">400</span>,
  <span class="str">"detail"</span>: <span class="str">"Field \\"email\\" must be a valid email"</span>,
  <span class="str">"instance"</span>: <span class="str">"/requests/abc123"</span>,
  <span class="str">"errors"</span>: [
    {<span class="str">"field"</span>: <span class="str">"email"</span>, <span class="str">"code"</span>: <span class="str">"invalid_format"</span>}
  ]
}</div>
<p>Keys: a stable code clients can branch on, plus human-readable details.</p>` },
            { type: 'multiple-choice', prompt: 'Best error response structure?',
              options: [{text:'Just a plain text "error"', code:false},{text:'Consistent JSON with code, message, and details', code:false},{text:'HTML page', code:false},{text:'No body — only HTTP status', code:false}],
              correct: 1, explanation: 'Machine-readable + human-readable. RFC 7807 is the gold standard.' },
            { type: 'true-false', statement: 'Never leak internal stack traces or SQL errors to clients — they\'re a security risk.', correct: true, explanation: 'Log them server-side; return a generic message with a correlation ID for support.' },
            { type: 'multiple-choice', prompt: 'You hit your DB and it fails. What status should the API return?',
              options: [{text:'404', code:false},{text:'400', code:false},{text:'500 (Server Error) with a generic message', code:false},{text:'403', code:false}],
              correct: 2, explanation: '5xx for server-side failures. Log details internally with a request ID.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Idempotency / Caching ============== */
    {
      id: 'api-u10', name: 'Unit 10 · Idempotency & Caching', description: 'Correctness and speed',
      lessons: [
        {
          id: 'api-u10-l1', name: 'Idempotency keys', icon: '🔁', xp: 25,
          challenges: [
            { type: 'concept', title: 'Make POSTs safe to retry', content: `<p>Network glitches happen — clients retry. Without idempotency, double-charge!</p>
<div class="code-block">POST /charges
Idempotency-Key: <span class="str">abc-123-unique</span>
{ "amount": <span class="num">100</span> }

<span class="com">// Server stores the key + response.
// If same key arrives again → return the saved response.
// Stripe, payment APIs do this universally.</span></div>` },
            { type: 'multiple-choice', prompt: 'Stripe\'s "Idempotency-Key" header is for:',
              options: [{text:'Rate limiting', code:false},{text:'Preventing duplicate side-effects on retry', code:false},{text:'Authentication', code:false},{text:'Caching', code:false}],
              correct: 1, explanation: 'Same key + same body → same outcome (returned response), no duplicate side effect.' },
            { type: 'multiple-choice', prompt: 'Caching headers for GET responses include:',
              options: [{text:'Cache-Control, ETag, Last-Modified', code:false},{text:'Authorization', code:false},{text:'Content-Length only', code:false},{text:'CORS', code:false}],
              correct: 0, explanation: 'These tell clients & intermediates how/when to cache and revalidate.' },
            { type: 'true-false', statement: 'ETag allows conditional requests: client says "give me only if it changed since X".', correct: true, explanation: 'Sends If-None-Match; server returns 304 Not Modified if unchanged.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — GraphQL ============== */
    {
      id: 'api-u11', name: 'Unit 11 · GraphQL', description: 'One endpoint, client picks fields',
      lessons: [
        {
          id: 'api-u11-l1', name: 'GraphQL fundamentals', icon: '🔵', xp: 25,
          challenges: [
            { type: 'concept', title: 'A query language for APIs', content: `<div class="code-block"><span class="com"># Schema</span>
<span class="kw">type</span> <span class="ty">User</span> {
  id: <span class="ty">ID</span>!
  name: <span class="ty">String</span>!
  posts: [<span class="ty">Post</span>!]!
}

<span class="com"># Query (client chooses fields)</span>
{
  user(id: <span class="str">"42"</span>) {
    name
    posts { title }
  }
}

<span class="com"># Response — exactly the fields you asked for</span>
{ <span class="str">"data"</span>: { <span class="str">"user"</span>: { <span class="str">"name"</span>: <span class="str">"Ana"</span>, <span class="str">"posts"</span>: [...] }}</div>
<p><strong>Why GraphQL?</strong> Solves REST\'s "over-fetching" (you only get what you ask for) and "under-fetching" (no more N+1 round trips).</p>` },
            { type: 'multiple-choice', prompt: 'Main advantage of GraphQL over REST?',
              options: [{text:'Faster network', code:false},{text:'Client requests exactly the fields it needs', code:false},{text:'Doesn\'t need a server', code:false},{text:'No schema', code:false}],
              correct: 1, explanation: 'Fixes over-fetching. Especially valuable on mobile with limited bandwidth.' },
            { type: 'multiple-choice', prompt: 'GraphQL typically exposes:',
              options: [{text:'Many endpoints (/users, /posts, etc.)', code:false},{text:'One endpoint (/graphql) with all queries', code:false},{text:'No endpoint', code:false},{text:'WebSocket only', code:false}],
              correct: 1, explanation: 'Single endpoint; HTTP POST with query in body.' },
            { type: 'multiple-choice', prompt: 'A common GraphQL downside?',
              options: [{text:'No flexibility', code:false},{text:'Caching is harder than REST GET requests', code:false},{text:'Browser support', code:false},{text:'Speed', code:false}],
              correct: 1, explanation: 'POST + dynamic queries are harder to cache than REST GETs. Tools like Apollo solve client-side.' },
            { type: 'true-false', statement: 'GraphQL has a typed schema, so clients know what fields exist and their types.', correct: true, explanation: 'Strong typing + great tooling are big GraphQL wins.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — gRPC / Realtime ============== */
    {
      id: 'api-u12', name: 'Unit 12 · gRPC, WebSockets, Webhooks', description: 'Beyond REST',
      lessons: [
        {
          id: 'api-u12-l1', name: 'gRPC basics', icon: '⚡', xp: 25,
          challenges: [
            { type: 'concept', title: 'High-performance RPC', content: `<p><strong>gRPC</strong> is Google\'s RPC framework. Uses HTTP/2 + Protobuf (binary). Very fast.</p>
<div class="code-block"><span class="com">// users.proto</span>
<span class="kw">service</span> <span class="ty">UserService</span> {
  <span class="kw">rpc</span> <span class="fn">GetUser</span> (<span class="ty">GetUserRequest</span>) <span class="kw">returns</span> (<span class="ty">User</span>);
  <span class="kw">rpc</span> <span class="fn">ListUsers</span> (<span class="ty">ListUsersRequest</span>) <span class="kw">returns</span> (<span class="ty">stream User</span>);
}

<span class="kw">message</span> <span class="ty">User</span> {
  string id   = <span class="num">1</span>;
  string name = <span class="num">2</span>;
}</div>
<p>Best for: <strong>internal microservices</strong> where you control both sides and need speed.<br/>
Less ideal for: public APIs (browsers can\'t call gRPC directly, need gRPC-Web).</p>` },
            { type: 'multiple-choice', prompt: 'gRPC uses what wire format?',
              options: [{text:'JSON', code:false},{text:'XML', code:false},{text:'Protocol Buffers (binary)', code:false},{text:'YAML', code:false}],
              correct: 2, explanation: 'Protobuf — compact, schema-defined, fast to serialize.' },
            { type: 'multiple-choice', prompt: 'gRPC supports which call types?',
              options: [{text:'Unary only', code:false},{text:'Unary + server-streaming + client-streaming + bidirectional', code:false},{text:'Pub/sub only', code:false},{text:'No streaming', code:false}],
              correct: 1, explanation: 'Four call types — including bidirectional streaming over a single HTTP/2 connection.' },
            { type: 'true-false', statement: 'gRPC has lower latency and bandwidth than equivalent JSON-over-REST APIs.', correct: true, explanation: 'Binary protobuf + HTTP/2 multiplexing wins on both.' }
          ]
        },
        {
          id: 'api-u12-l2', name: 'WebSockets & Webhooks', icon: '📡', xp: 20,
          challenges: [
            { type: 'concept', title: 'Push, not just pull', content: `<p><strong>WebSocket</strong>: long-lived bidirectional connection. Server can push to client anytime. Used for chat, live trading, multiplayer games.</p>
<p><strong>Server-Sent Events (SSE)</strong>: one-way server push over HTTP. Simpler than WebSocket when you only need server → client. Auto-reconnect built in.</p>
<p><strong>Webhooks</strong>: YOU give the provider a URL. When an event happens, they POST to you. Used by Stripe, GitHub, Slack.</p>
<div class="code-block">Stripe → POST <span class="str">https://yourapp.com/webhooks/stripe</span>
Body: { <span class="str">"type"</span>: <span class="str">"payment_intent.succeeded"</span>, ... }
Signed with HMAC so you can verify it\'s really from Stripe</div>` },
            { type: 'multiple-choice', prompt: 'A multiplayer game needs:',
              options: [{text:'REST polling', code:false},{text:'WebSockets (low latency, bidirectional)', code:false},{text:'Webhooks', code:false},{text:'gRPC unary', code:false}],
              correct: 1, explanation: 'Need both directions, low latency, persistent connection — WebSocket.' },
            { type: 'multiple-choice', prompt: 'Receiving "your invoice was paid" from Stripe — best mechanism?',
              options: [{text:'Polling Stripe every 5 minutes', code:false},{text:'Webhook from Stripe to your endpoint', code:false},{text:'WebSocket', code:false},{text:'Email', code:false}],
              correct: 1, explanation: 'Webhooks let the provider push events to you. Always verify signatures.' },
            { type: 'true-false', statement: 'You should verify webhook signatures to ensure they\'re really from the provider.', correct: true, explanation: 'Otherwise anyone could POST fake events to your endpoint.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — OpenAPI ============== */
    {
      id: 'api-u13', name: 'Unit 13 · OpenAPI / Documentation', description: 'A spec is worth 1000 emails',
      lessons: [
        {
          id: 'api-u13-l1', name: 'OpenAPI / Swagger', icon: '📚', xp: 20,
          challenges: [
            { type: 'concept', title: 'The de-facto standard', content: `<p><strong>OpenAPI</strong> (formerly Swagger) is a YAML/JSON spec for HTTP APIs. From the spec you get:</p>
<ul>
<li>Auto-generated interactive docs (Swagger UI, Redoc)</li>
<li>SDK code generation in dozens of languages</li>
<li>Mock servers for early testing</li>
<li>Contract validation</li>
</ul>
<div class="code-block"><span class="com">paths:</span>
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema: { type: integer }
      responses:
        \'200\':
          description: OK
          content:
            application/json:
              schema: { $ref: \'#/components/schemas/User\' }</div>` },
            { type: 'multiple-choice', prompt: 'Main benefit of writing an OpenAPI spec?',
              options: [{text:'Required by Java', code:false},{text:'Auto-generated docs, SDKs, mocks — single source of truth', code:false},{text:'Faster API', code:false},{text:'No backend needed', code:false}],
              correct: 1, explanation: 'Spec-first development pays off.' },
            { type: 'multiple-choice', prompt: 'Tools that consume OpenAPI specs?',
              options: [{text:'Swagger UI', code:false},{text:'Postman', code:false},{text:'Code generators like openapi-generator', code:false},{text:'All of the above', code:false}],
              correct: 3, explanation: 'Huge ecosystem. One spec, many tools.' },
            { type: 'true-false', statement: '"Design-first" means: write the spec → review with consumers → THEN code.', correct: true, explanation: 'Catches design issues before implementation. Better for public APIs.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Design Process ============== */
    {
      id: 'api-u14', name: 'Unit 14 · API Design Process', description: 'How real teams ship APIs',
      lessons: [
        {
          id: 'api-u14-l1', name: 'A pragmatic workflow', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'From idea to launch', content: `<div class="code-block"><span class="com">1. Understand the use cases</span>      who calls? what for?
<span class="com">2. Identify resources</span>            what nouns?
<span class="com">3. Draft endpoints + status codes</span>
<span class="com">4. Pick auth + versioning</span>        upfront, not later
<span class="com">5. Define error response shape</span>   consistent across endpoints
<span class="com">6. Write OpenAPI spec</span>            review with consumers
<span class="com">7. Implement + tests</span>             contract tests catch drift
<span class="com">8. Document examples</span>            curl, code snippets
<span class="com">9. Deploy with monitoring</span>        latency, error %, usage</div>` },
            { type: 'multiple-choice', prompt: 'When should you decide on versioning and auth?',
              options: [{text:'Late, after the API is built', code:false},{text:'Upfront, before implementation', code:false},{text:'Never — only if needed', code:false},{text:'At deployment time', code:false}],
              correct: 1, explanation: 'Hard to change later without breaking clients. Decide early.' },
            { type: 'true-false', statement: 'Contract tests verify that the implementation matches the OpenAPI spec.', correct: true, explanation: 'Catches drift between spec and code.' },
            { type: 'multiple-choice', prompt: 'Your API\'s usability is best determined by:',
              options: [{text:'Lines of code', code:false},{text:'Real consumers — give them docs, watch them stumble', code:false},{text:'Marketing material', code:false},{text:'Number of endpoints', code:false}],
              correct: 1, explanation: 'Dogfood and observe. Pain points become obvious fast.' },
            { type: 'match-pairs', prompt: 'Match common pitfall → fix.', leftLabel: 'Pitfall', rightLabel: 'Fix',
              pairs: [{left:'verbs in URLs', right:'use HTTP methods'},{left:'200 OK with error inside', right:'use proper status code'},{left:'no versioning at all', right:'add /v1 from day one'},{left:'leaking stack traces', right:'log internally, return generic error'}] }
          ]
        }
      ]
    }

  ]
});

PUSH({
  id: 'microservices',
  name: 'Microservices',
  icon: '🔗',
  color: '#039be5',
  description: 'Designing systems as small, independently-deployable services — patterns, pitfalls, and tooling.',
  units: [

    /* ============== UNIT 1 — Monolith vs Microservices ============== */
    {
      id: 'ms-u1', name: 'Unit 1 · Monolith vs Microservices', description: 'When to choose what — and what it really costs',
      lessons: [
        {
          id: 'ms-u1-l1', name: 'Two ends of a spectrum', icon: '🧱', xp: 15,
          challenges: [
            { type: 'concept', title: 'One process vs many', content: `<p>A <strong>monolith</strong> ships as one deployable unit — one process, one codebase, one database. Calls between modules are in-memory function calls.</p>
<p><strong>Microservices</strong> split the system into many small services that own their data and talk over the network. Each service ships on its own cadence.</p>
<div class="code-block"><span class="com">MONOLITH                          MICROSERVICES</span>
+---------------------+           +-------+   +-------+   +-------+
| Orders   |  Catalog |           |Orders | --|Catalog| --|Payment|
| Payment  |  Users   |           +---+---+   +-------+   +-------+
| Shipping |  Search  |               |
+---------------------+           +---+---+
       one DB                     |Users  |  <-- each service owns its own DB
                                  +-------+</div>
<p>Microservices are not "better" — they trade <em>local complexity</em> (a big codebase) for <em>distributed complexity</em> (network, partial failure, eventual consistency).</p>` },
            { type: 'multiple-choice', prompt: 'Which is the MOST honest reason to choose microservices?',
              options: [
                { text: 'They are always faster', code: false },
                { text: 'Independent deploy and scaling per team / per service', code: false },
                { text: 'They eliminate bugs', code: false },
                { text: 'They are easier to debug', code: false }
              ],
              correct: 1, explanation: 'The real win is autonomy — separate teams shipping separately at their own pace and scaling each piece independently.' },
            { type: 'true-false', statement: 'A monolith is always the wrong choice for a serious product.', correct: false, explanation: 'False. Many world-class products run on well-modularized monoliths. Microservices add real cost — only adopt them when the benefits outweigh that cost.' },
            { type: 'match-pairs', prompt: 'Match the trait to the architecture it favors.', leftLabel: 'Trait', rightLabel: 'Architecture',
              pairs: [
                { left: 'In-process calls', right: 'Monolith' },
                { left: 'Independent deploys', right: 'Microservices' },
                { left: 'Single shared DB', right: 'Monolith' },
                { left: 'Polyglot stacks', right: 'Microservices' }
              ] },
            { type: 'multiple-choice', prompt: 'Which is NOT a real cost of microservices?',
              options: [
                { text: 'Network latency between calls', code: false },
                { text: 'Operational overhead (many pipelines, many dashboards)', code: false },
                { text: 'Distributed transactions are harder', code: false },
                { text: 'You can no longer write unit tests', code: false }
              ],
              correct: 3, explanation: 'Unit tests are fine. The real costs are network, ops, and consistency.' },
            { type: 'tap-tokens', prompt: 'Order the "do I need microservices?" decision steps.',
              tokens: ['Start', 'with', 'a', 'modular', 'monolith', ',', 'split', 'only', 'when', 'pain', 'appears'],
              correctOrder: ['Start', 'with', 'a', 'modular', 'monolith', ',', 'split', 'only', 'when', 'pain', 'appears'],
              explanation: 'Sam Newman\'s advice: monolith-first, extract when concrete pain shows up — not before.' }
          ]
        },
        {
          id: 'ms-u1-l2', name: 'When to split (and when not to)', icon: '⚖️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Signals that a split is justified', content: `<p>Microservices pay off when you have <strong>real, recurring</strong> problems that they solve:</p>
<div class="code-block"><span class="com">Signals to split:</span>
- Teams blocked on each other's deploys
- One module needs to scale 100x more than the rest
- One module has totally different reliability needs (payments vs search)
- Different parts want different tech stacks
- Codebase is too large for any team to fully reason about

<span class="com">Signals to wait:</span>
- "Big tech does it" — not a reason
- &lt; 5 engineers, &lt; 1M users
- You have no CI/CD, no monitoring, no on-call rotation yet
- You can\'t draw the bounded contexts on a whiteboard</div>` },
            { type: 'multiple-choice', prompt: 'A 4-engineer startup with one shared DB and zero monitoring should:',
              options: [
                { text: 'Split into 30 microservices immediately', code: false },
                { text: 'Keep a well-modularized monolith and invest in observability first', code: false },
                { text: 'Rewrite in a new language', code: false },
                { text: 'Buy a service mesh', code: false }
              ],
              correct: 1, explanation: 'Microservices without observability and CI/CD are an outage waiting to happen.' },
            { type: 'true-false', statement: 'If one piece of the system needs 100x the throughput of the rest, that is a strong signal to extract it.', correct: true, explanation: 'Independent scaling is one of the most concrete wins of microservices.' },
            { type: 'output-predict', prompt: 'Team A and team B share one monolithic deploy. A wants to ship hourly, B ships monthly. What happens?',
              code: `<span class="com">// Same artifact, same deploy schedule</span>
team_A.deploy_frequency = <span class="num">1</span> per hour
team_B.deploy_frequency = <span class="num">1</span> per month
shared_artifact = <span class="kw">true</span>`,
              options: ['Both ship freely', 'A is bottlenecked by B', 'Database becomes read-only', 'Nothing changes'],
              correct: 1, explanation: 'A is forced into B\'s slow cadence. This is exactly the "independent deploys" pain microservices solve.' },
            { type: 'fill-blank', prompt: 'Complete the rule of thumb:',
              codeLines: [{ html: 'Start with a <span class="fn">_BLANK_</span> monolith and split only when the pain is concrete.' }],
              tokens: ['modular', 'distributed', 'serverless', 'static'],
              correctAnswer: 'modular', explanation: 'A well-modularized monolith gives you most of the design benefits with much less operational pain.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Service Boundaries ============== */
    {
      id: 'ms-u2', name: 'Unit 2 · Service Boundaries', description: 'Bounded contexts and decomposition',
      lessons: [
        {
          id: 'ms-u2-l1', name: 'Bounded contexts', icon: '🧭', xp: 20,
          challenges: [
            { type: 'concept', title: 'Same word, different model', content: `<p>A <strong>bounded context</strong> (from Domain-Driven Design) is a region of the system where a term has one clear meaning.</p>
<p>The word "Customer" looks the same to everyone — but in the <em>billing</em> context it carries an address, payment method, tax ID. In the <em>shipping</em> context it carries a delivery preference and dock instructions. In <em>support</em>, it carries a tier and history of tickets.</p>
<div class="code-block"><span class="com">// Same "Customer" — different shapes per context</span>
Billing.Customer    → { id, billingAddress, paymentMethod, taxId }
Shipping.Customer   → { id, deliveryAddress, deliveryWindow }
Support.Customer    → { id, tier, openTickets, csat }</div>
<p>Each bounded context is a candidate microservice. Splitting along context boundaries keeps the model coherent inside each service.</p>` },
            { type: 'multiple-choice', prompt: 'A bounded context is best described as:',
              options: [
                { text: 'A folder in your codebase', code: false },
                { text: 'A region where domain terms have one consistent meaning', code: false },
                { text: 'A database transaction', code: false },
                { text: 'A network namespace', code: false }
              ],
              correct: 1, explanation: 'It\'s a semantic boundary — inside it, words mean one thing.' },
            { type: 'true-false', statement: 'A good microservice boundary often follows a bounded context boundary.', correct: true, explanation: 'Aligning service edges with context edges keeps coupling low and cohesion high.' },
            { type: 'match-pairs', prompt: 'Match context → what "Order" means there.', leftLabel: 'Context', rightLabel: 'Order means',
              pairs: [
                { left: 'Sales', right: 'A confirmed purchase intent' },
                { left: 'Warehouse', right: 'A pick list' },
                { left: 'Shipping', right: 'A package + tracking ID' },
                { left: 'Finance', right: 'A revenue record' }
              ] },
            { type: 'multiple-choice', prompt: 'Two services share a single "User" table by direct read/write. This is:',
              options: [
                { text: 'A shared kernel — usually a smell', code: false },
                { text: 'Best practice', code: false },
                { text: 'Required by DDD', code: false },
                { text: 'Always faster', code: false }
              ],
              correct: 0, explanation: 'Sharing a DB table couples services — schema changes ripple to every reader. Prefer one owner; others read via API or events.' }
          ]
        },
        {
          id: 'ms-u2-l2', name: 'Decomposing a monolith', icon: '🪓', xp: 25,
          challenges: [
            { type: 'concept', title: 'Strangler fig pattern', content: `<p>You don\'t rewrite a monolith on day one. You wrap it, route specific endpoints to new services, and let the new code "strangle" the old over time.</p>
<div class="code-block"><span class="com">Step 1 — Put a proxy/gateway in front of the monolith</span>
[Client] → [Gateway] → [Monolith]

<span class="com">Step 2 — Extract one bounded context to a new service</span>
[Client] → [Gateway] → [Monolith]          (everything else)
                    → [Payments service]   (POST /payments)

<span class="com">Step 3 — Repeat until the monolith is empty</span></div>
<p>Pick the <strong>edges</strong> first — modules with the cleanest interfaces. Save the gnarly stuff for last, after the team has learned the new ops practices.</p>` },
            { type: 'reorder-code', prompt: 'Order the strangler fig steps.',
              lines: [
                'Identify a bounded context with a clean interface',
                'Put a gateway/proxy in front of the monolith',
                'Build the new service and dual-write data during cutover',
                'Route that endpoint\'s traffic to the new service',
                'Delete the old code path from the monolith'
              ],
              correctOrder: [1, 0, 2, 3, 4],
              explanation: 'Gateway first, then pick a clean context, build alongside, switch traffic, then remove the legacy path.' },
            { type: 'multiple-choice', prompt: 'You decide to extract "Recommendations" first because:',
              options: [
                { text: 'It\'s the most central, most complex module', code: false },
                { text: 'It\'s a relatively isolated read-only feature with a clear contract', code: false },
                { text: 'Random choice', code: false },
                { text: 'It uses the most CPU', code: false }
              ],
              correct: 1, explanation: 'Edges first — modules with few inbound dependencies are the safest practice ground.' },
            { type: 'true-false', statement: 'Big-bang rewrites of a monolith into microservices have an excellent track record.', correct: false, explanation: 'They have an awful track record. Incremental extraction is the realistic path.' },
            { type: 'tap-tokens', prompt: 'Name the pattern.',
              tokens: ['strangler', 'fig', 'pattern', 'bulkhead', 'saga'],
              correctOrder: ['strangler', 'fig', 'pattern'],
              explanation: 'Named after the strangler fig vine — it grows around a host tree and slowly takes its place.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Inter-service Communication ============== */
    {
      id: 'ms-u3', name: 'Unit 3 · Inter-service Communication', description: 'Synchronous vs asynchronous',
      lessons: [
        {
          id: 'ms-u3-l1', name: 'Sync: REST and gRPC', icon: '📞', xp: 20,
          challenges: [
            { type: 'concept', title: 'Request/response over the wire', content: `<p>Synchronous calls wait for a response. The caller blocks until the callee replies (or times out).</p>
<div class="code-block"><span class="com">// REST — text-based, ubiquitous, easy to debug with curl</span>
GET /orders/42
200 OK
{ "id": 42, "total": 119.00, "status": "PAID" }

<span class="com">// gRPC — binary (Protobuf), HTTP/2, schema-first, streaming</span>
rpc GetOrder(GetOrderRequest) returns (Order);</div>
<p><strong>REST</strong>: human-readable, web-friendly, slower, looser contracts.<br>
<strong>gRPC</strong>: binary, fast, strict schema, harder to debug, great between internal services.</p>` },
            { type: 'multiple-choice', prompt: 'Why is gRPC often faster than REST/JSON for internal calls?',
              options: [
                { text: 'It uses TCP and JSON doesn\'t', code: false },
                { text: 'Protobuf binary encoding + HTTP/2 multiplexing', code: false },
                { text: 'It uses UDP', code: false },
                { text: 'It skips serialization', code: false }
              ],
              correct: 1, explanation: 'Tighter encoding + multiplexed streams over a single connection.' },
            { type: 'match-pairs', prompt: 'Match the property to the protocol.', leftLabel: 'Property', rightLabel: 'Protocol',
              pairs: [
                { left: 'Human-readable payload', right: 'REST/JSON' },
                { left: 'Schema-first IDL', right: 'gRPC' },
                { left: 'Streaming RPC built in', right: 'gRPC' },
                { left: 'Easiest in browsers', right: 'REST/JSON' }
              ] },
            { type: 'true-false', statement: 'A synchronous chain of 5 services where each has 99.9% uptime gives you 99.9% combined uptime.', correct: false, explanation: 'Independent failures multiply: 0.999^5 ≈ 99.5%. Chained sync calls compound failure.' },
            { type: 'output-predict', prompt: 'Service A calls B, B calls C synchronously. C times out. What does A see?',
              code: `A.call(B)
  ↓
B.call(C)  <span class="com">// times out after 30s</span>
  ↓
???`,
              options: ['Instant success', 'A blocks until B\'s timeout to C fires, then sees an error', 'A gets the response from B\'s cache', 'C retries silently'],
              correct: 1, explanation: 'Sync chains propagate latency and failure. A waits for B to give up on C.' }
          ]
        },
        {
          id: 'ms-u3-l2', name: 'Async: events and queues', icon: '📬', xp: 25,
          challenges: [
            { type: 'concept', title: 'Fire and forget (mostly)', content: `<p>Asynchronous communication decouples producer and consumer in <em>time</em> and in <em>knowledge</em>.</p>
<p>The producer publishes a message to a broker (Kafka, RabbitMQ, SNS/SQS). Consumers subscribe and process when they\'re ready.</p>
<div class="code-block"><span class="com">// Producer doesn\'t know who listens</span>
broker.<span class="fn">publish</span>(<span class="str">"order.placed"</span>, { orderId: <span class="num">42</span>, userId: <span class="num">7</span> });

<span class="com">// Many independent consumers can react</span>
EmailService     → send confirmation
InventoryService → reserve stock
AnalyticsService → record event
RewardsService   → grant points</div>
<p>Benefit: adding a new consumer requires zero change to the producer. Trade-off: eventual consistency, harder debugging, message ordering and duplicates to think about.</p>` },
            { type: 'multiple-choice', prompt: 'The biggest architectural win of async events is:',
              options: [
                { text: 'Lower latency for the user', code: false },
                { text: 'Producer and consumers can evolve independently', code: false },
                { text: 'Stronger consistency', code: false },
                { text: 'Easier debugging', code: false }
              ],
              correct: 1, explanation: 'Loose coupling. The producer doesn\'t care who reads — new subscribers cost it nothing.' },
            { type: 'true-false', statement: 'Async messaging usually gives you stronger consistency than sync RPC.', correct: false, explanation: 'Opposite — it usually means <em>eventual</em> consistency. You trade strong guarantees for decoupling.' },
            { type: 'match-pairs', prompt: 'Pick the right tool for the job.', leftLabel: 'Need', rightLabel: 'Often-used tool',
              pairs: [
                { left: 'High-throughput event log', right: 'Kafka' },
                { left: 'Task queue with retries', right: 'RabbitMQ / SQS' },
                { left: 'Fan-out pub/sub on AWS', right: 'SNS → SQS' },
                { left: 'Strict request/response', right: 'gRPC / REST' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the publish call.',
              tokens: ['broker', '.', 'publish', '(', '"order.placed"', ',', 'payload', ')'],
              correctOrder: ['broker', '.', 'publish', '(', '"order.placed"', ',', 'payload', ')'],
              explanation: 'Topic + payload — that\'s typically all the producer needs to know.' },
            { type: 'multiple-choice', prompt: 'You changed the OrderService to publish an "OrderPlaced" event. To add a new analytics consumer, you need to:',
              options: [
                { text: 'Redeploy OrderService', code: false },
                { text: 'Just subscribe a new consumer — OrderService is unaware', code: false },
                { text: 'Change the database schema', code: false },
                { text: 'Pause all traffic', code: false }
              ],
              correct: 1, explanation: 'That\'s the magic of pub/sub — new subscribers are invisible to the producer.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — API Gateway ============== */
    {
      id: 'ms-u4', name: 'Unit 4 · API Gateway', description: 'One door into many services',
      lessons: [
        {
          id: 'ms-u4-l1', name: 'The gateway pattern', icon: '🚪', xp: 20,
          challenges: [
            { type: 'concept', title: 'A single front door', content: `<p>An <strong>API gateway</strong> sits between clients and a fleet of services. It handles routing, cross-cutting concerns, and shields clients from internal topology.</p>
<div class="code-block">[Web]   ─┐
[Mobile]─┼─► [API Gateway] ─► /orders   → OrderService
[3rd-p] ─┘                  ─► /users    → UserService
                            ─► /catalog  → CatalogService

<span class="com">Gateway handles:</span>
- Auth (JWT validation, OAuth callback)
- Rate limiting and quotas
- Request logging + correlation IDs
- Routing + path rewriting
- Response aggregation (BFF pattern)
- Protocol translation (HTTP ↔ gRPC)</div>
<p>Clients only need one URL. Internal services can move, merge, or split — the gateway hides it.</p>` },
            { type: 'multiple-choice', prompt: 'Which concern is a CLASSIC gateway responsibility?',
              options: [
                { text: 'Business logic for orders', code: false },
                { text: 'Cross-cutting: auth, rate limit, routing, logging', code: false },
                { text: 'Storing user data', code: false },
                { text: 'Running ML training', code: false }
              ],
              correct: 1, explanation: 'Gateways do the boring-but-essential edge work so each service doesn\'t reimplement it.' },
            { type: 'true-false', statement: 'A gateway can become a bottleneck or single point of failure if not designed for HA.', correct: true, explanation: 'It carries all north-south traffic. Run multiple replicas behind a load balancer.' },
            { type: 'match-pairs', prompt: 'Match the gateway feature to its purpose.', leftLabel: 'Feature', rightLabel: 'Purpose',
              pairs: [
                { left: 'JWT validation', right: 'Auth offload' },
                { left: 'Token bucket', right: 'Rate limiting' },
                { left: 'Path rewrite', right: 'Routing' },
                { left: 'Response merge', right: 'BFF aggregation' }
              ] },
            { type: 'multiple-choice', prompt: 'BFF stands for:',
              options: [
                { text: 'Big Fast Frontend', code: false },
                { text: 'Backend For Frontend', code: false },
                { text: 'Buffer File Format', code: false },
                { text: 'Best Fit First', code: false }
              ],
              correct: 1, explanation: 'A gateway tailored per client (web, mobile, partner) — different aggregations, different fields.' }
          ]
        },
        {
          id: 'ms-u4-l2', name: 'Aggregation & BFF', icon: '🧩', xp: 20,
          challenges: [
            { type: 'concept', title: 'One request → many downstream calls', content: `<p>A mobile screen often needs data from <em>several</em> services. Without a gateway, the client makes 4 round trips. With aggregation, the gateway fans out and stitches the response.</p>
<div class="code-block"><span class="com">// Client request: GET /home-feed</span>
Gateway.<span class="fn">handle</span>(<span class="str">"/home-feed"</span>):
  user      = users.<span class="fn">get</span>(req.userId)         <span class="com">// parallel</span>
  orders    = orders.<span class="fn">recent</span>(req.userId)      <span class="com">// parallel</span>
  recs      = recs.<span class="fn">for</span>(req.userId)           <span class="com">// parallel</span>
  notifs    = notifs.<span class="fn">unread</span>(req.userId)      <span class="com">// parallel</span>
  <span class="kw">return</span> { user, orders, recs, notifs }</div>
<p>BFF goes further — a separate gateway per client. The mobile BFF returns a leaner shape than the web BFF.</p>` },
            { type: 'multiple-choice', prompt: 'Aggregation in the gateway helps clients on slow networks because:',
              options: [
                { text: 'It removes encryption', code: false },
                { text: 'It cuts client round trips and fans out inside the datacenter', code: false },
                { text: 'It compresses CPU', code: false },
                { text: 'It avoids the database', code: false }
              ],
              correct: 1, explanation: 'Datacenter calls are fast and cheap; mobile round trips are not.' },
            { type: 'true-false', statement: 'A gateway should ideally contain a lot of business logic.', correct: false, explanation: 'Keep business logic in services. The gateway should be thin — routing, auth, aggregation. Logic-heavy gateways become the new monolith.' },
            { type: 'fill-blank', prompt: 'A gateway tailored for one specific client type is called:',
              codeLines: [{ html: 'a <span class="fn">_BLANK_</span> — Backend For Frontend.' }],
              tokens: ['BFF', 'CDN', 'LB', 'API'],
              correctAnswer: 'BFF', explanation: 'Backend For Frontend — popularized at SoundCloud and Netflix.' },
            { type: 'output-predict', prompt: 'Gateway fans out 4 parallel downstream calls of 50ms each. Total latency?',
              code: `<span class="com">// parallel — bounded by the slowest, not the sum</span>
calls = [<span class="num">50</span>, <span class="num">50</span>, <span class="num">50</span>, <span class="num">50</span>] ms
mode = <span class="str">"parallel"</span>`,
              options: ['200ms', '50ms (plus a tiny overhead)', '12.5ms', '4ms'],
              correct: 1, explanation: 'Parallel fan-out is bounded by the slowest call — about 50ms plus a few ms of stitching.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Service Discovery ============== */
    {
      id: 'ms-u5', name: 'Unit 5 · Service Discovery', description: 'Finding the right instance at runtime',
      lessons: [
        {
          id: 'ms-u5-l1', name: 'Why discovery exists', icon: '📡', xp: 20,
          challenges: [
            { type: 'concept', title: 'IPs change. Hard-coding fails.', content: `<p>In a microservices system, instances are born and die constantly — auto-scaling, deploys, crashes, container reschedules. You can\'t hard-code <code>10.0.4.7:8080</code> in code.</p>
<p>A <strong>service registry</strong> is a live phone book: each instance registers on startup, sends heartbeats, and is removed when unhealthy. Callers ask the registry "where is OrderService?" and get a fresh list.</p>
<div class="code-block"><span class="com">// Each instance reports itself</span>
OrderService-1 → registry.<span class="fn">register</span>(<span class="str">"OrderService"</span>, <span class="str">"10.0.4.7:8080"</span>)
OrderService-2 → registry.<span class="fn">register</span>(<span class="str">"OrderService"</span>, <span class="str">"10.0.4.9:8080"</span>)

<span class="com">// Caller asks the registry</span>
instances = registry.<span class="fn">lookup</span>(<span class="str">"OrderService"</span>)
target    = loadBalancer.<span class="fn">pick</span>(instances)</div>
<p>Tools: <strong>Eureka</strong> (Netflix), <strong>Consul</strong> (HashiCorp), <strong>etcd</strong>, Kubernetes\' built-in DNS-based service discovery.</p>` },
            { type: 'multiple-choice', prompt: 'A service registry is essentially:',
              options: [
                { text: 'A persistent SQL database', code: false },
                { text: 'A live, self-updating phone book of healthy instances', code: false },
                { text: 'A static config file', code: false },
                { text: 'A monitoring dashboard', code: false }
              ],
              correct: 1, explanation: 'Live + self-updating + health-aware. That\'s the whole point.' },
            { type: 'true-false', statement: 'Kubernetes provides service discovery out of the box via cluster DNS.', correct: true, explanation: 'A Service object gets a stable DNS name; kube-proxy/CoreDNS handle resolution and load balancing.' },
            { type: 'match-pairs', prompt: 'Match tool to ecosystem.', leftLabel: 'Tool', rightLabel: 'Origin / use',
              pairs: [
                { left: 'Eureka', right: 'Netflix OSS' },
                { left: 'Consul', right: 'HashiCorp' },
                { left: 'etcd', right: 'CoreOS / Kubernetes' },
                { left: 'CoreDNS', right: 'Kubernetes built-in' }
              ] },
            { type: 'multiple-choice', prompt: 'Why not just hard-code a DNS name and let DNS handle it?',
              options: [
                { text: 'You can — but classic DNS caches and has no health/awareness of which instances are actually up right now', code: false },
                { text: 'DNS doesn\'t work in datacenters', code: false },
                { text: 'It\'s illegal', code: false },
                { text: 'DNS is slower than HTTP', code: false }
              ],
              correct: 0, explanation: 'DNS TTLs and lack of health checks make raw DNS a poor fit; modern systems (Consul, k8s) layer health-aware logic on top.' }
          ]
        },
        {
          id: 'ms-u5-l2', name: 'Client-side vs server-side discovery', icon: '🧭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Who picks the instance?', content: `<div class="code-block"><span class="com">CLIENT-SIDE discovery</span>
Caller → asks registry → picks instance → calls it directly
  pros: one less hop, fine-grained LB logic in client
  cons: every language needs a smart client library

<span class="com">SERVER-SIDE discovery</span>
Caller → calls a fixed LB/proxy → LB asks registry → forwards
  pros: dumb clients, language-agnostic
  cons: extra hop, LB is one more thing to operate

<span class="com">Sidecar / service-mesh discovery (e.g., Istio + Envoy)</span>
A tiny proxy runs next to each service; it handles discovery,
retries, mTLS — the app code stays simple.</div>` },
            { type: 'match-pairs', prompt: 'Match the model to its trait.', leftLabel: 'Model', rightLabel: 'Trait',
              pairs: [
                { left: 'Client-side', right: 'Smart clients, one fewer hop' },
                { left: 'Server-side', right: 'Dumb clients, extra hop through LB' },
                { left: 'Service mesh', right: 'Sidecar proxy per instance' },
                { left: 'DNS-only', right: 'Cached, no health info by itself' }
              ] },
            { type: 'true-false', statement: 'In server-side discovery the client typically does not know about the registry at all.', correct: true, explanation: 'It just calls the LB/proxy; the proxy talks to the registry.' },
            { type: 'output-predict', prompt: 'In client-side discovery, the caller knows about: ',
              code: `client.<span class="fn">call</span>(<span class="str">"OrderService"</span>)
<span class="com">// internal:</span>
instances = registry.<span class="fn">lookup</span>(<span class="str">"OrderService"</span>)
target    = roundRobin.<span class="fn">pick</span>(instances)
http.<span class="fn">get</span>(target)`,
              options: [
                'Only DNS',
                'The registry AND load-balancing logic',
                'Only the gateway',
                'Nothing — it\'s magic'
              ],
              correct: 1, explanation: 'Client-side = client is "smart": it knows about the registry and picks an instance itself.' },
            { type: 'multiple-choice', prompt: 'Service-mesh sidecars give you:',
              options: [
                { text: 'A second database', code: false },
                { text: 'Discovery, retries, mTLS, telemetry without touching app code', code: false },
                { text: 'Free CPU', code: false },
                { text: 'Stronger consistency', code: false }
              ],
              correct: 1, explanation: 'The sidecar handles network plumbing so each service stays focused on business logic.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Configuration Management ============== */
    {
      id: 'ms-u6', name: 'Unit 6 · Configuration Management', description: 'Externalized config, secrets, feature flags',
      lessons: [
        {
          id: 'ms-u6-l1', name: 'Externalized configuration', icon: '⚙️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Same artifact, many environments', content: `<p>One of the <strong>12-Factor App</strong> principles: keep config out of code. The same Docker image should run in dev, staging, and prod — only environment-specific variables differ.</p>
<div class="code-block"><span class="com">// BAD — config baked into code per env</span>
DB_URL = <span class="str">"prod-db.internal:5432"</span>;     <span class="com">// branch per env? no thanks</span>

<span class="com">// GOOD — config from env / config server</span>
DB_URL = <span class="fn">env</span>(<span class="str">"DB_URL"</span>);
TIMEOUT_MS = <span class="fn">env</span>(<span class="str">"TIMEOUT_MS"</span>, <span class="num">5000</span>);

<span class="com">Sources:</span>
- Env vars (.env files)
- Config server (Spring Cloud Config, Consul KV, etcd)
- Kubernetes ConfigMaps + Secrets
- Cloud secret managers (AWS SM, Vault, GCP Secret Manager)</div>` },
            { type: 'multiple-choice', prompt: 'Why should config live outside the artifact?',
              options: [
                { text: 'So secrets are easier to git-commit', code: false },
                { text: 'So the same artifact promotes through environments unchanged', code: false },
                { text: 'It\'s required by Java', code: false },
                { text: 'For performance', code: false }
              ],
              correct: 1, explanation: 'Build once, deploy many. The build is identical across envs; only config differs.' },
            { type: 'true-false', statement: 'Secrets like API keys belong in your Git repo so other engineers can find them.', correct: false, explanation: 'Absolutely not. Use a secret manager (Vault, AWS Secrets Manager, k8s Secrets) and inject at runtime.' },
            { type: 'match-pairs', prompt: 'Pick the right tool.', leftLabel: 'Need', rightLabel: 'Tool',
              pairs: [
                { left: 'Centralized config across services', right: 'Spring Cloud Config / Consul KV' },
                { left: 'Secrets storage with audit', right: 'Vault / AWS Secrets Manager' },
                { left: 'Per-pod config in k8s', right: 'ConfigMap' },
                { left: 'Per-pod secret in k8s', right: 'Secret' }
              ] },
            { type: 'fill-blank', prompt: 'The principle "store config in the environment" comes from:',
              codeLines: [{ html: 'the <span class="fn">_BLANK_</span> App methodology.' }],
              tokens: ['12-Factor', 'Agile', 'SOLID', 'KISS'],
              correctAnswer: '12-Factor', explanation: 'Heroku\'s 12-Factor App is the canonical reference for cloud-native config and deploy hygiene.' }
          ]
        },
        {
          id: 'ms-u6-l2', name: 'Feature flags', icon: '🚩', xp: 20,
          challenges: [
            { type: 'concept', title: 'Decouple deploy from release', content: `<p>A <strong>feature flag</strong> wraps new code behind a runtime toggle. You can deploy the code dark, enable it for 1% of users, watch metrics, then ramp up — without re-deploying.</p>
<div class="code-block"><span class="kw">if</span> (flags.<span class="fn">isEnabled</span>(<span class="str">"new-checkout"</span>, userId)) {
  newCheckout(<span class="kw">...</span>);
} <span class="kw">else</span> {
  legacyCheckout(<span class="kw">...</span>);
}

<span class="com">Common kinds of flags:</span>
- release flags    — gradual rollout
- ops flags         — kill-switches for misbehaving features
- experiment flags  — A/B testing
- permission flags  — entitlements per plan/tenant</div>
<p>Tools: LaunchDarkly, Unleash, FF4J, Flagsmith, or roll your own with a config store.</p>` },
            { type: 'multiple-choice', prompt: 'A "kill-switch" feature flag is best categorized as:',
              options: [
                { text: 'A release flag', code: false },
                { text: 'An ops flag', code: false },
                { text: 'An experiment flag', code: false },
                { text: 'An accounting flag', code: false }
              ],
              correct: 1, explanation: 'Ops flags exist to disable runaway features without a rollback deploy.' },
            { type: 'true-false', statement: 'Feature flags lets you separate "code is deployed" from "feature is on for users".', correct: true, explanation: 'That separation is the whole point — it cuts deploy risk and enables progressive delivery.' },
            { type: 'tap-tokens', prompt: 'Write the flag check.',
              tokens: ['if', '(', 'flags', '.', 'isEnabled', '(', '"new-checkout"', ',', 'userId', ')', ')'],
              correctOrder: ['if', '(', 'flags', '.', 'isEnabled', '(', '"new-checkout"', ',', 'userId', ')', ')'],
              explanation: 'Per-user evaluation is common — gradual rollout by user ID hash.' },
            { type: 'multiple-choice', prompt: 'A long-lived flag with no plan to remove is:',
              options: [
                { text: 'A best practice', code: false },
                { text: 'Tech debt — flags should be temporary unless they\'re permanent permission flags', code: false },
                { text: 'Required by law', code: false },
                { text: 'A new microservice', code: false }
              ],
              correct: 1, explanation: 'Dead flags = dead code paths. Remove them on a schedule or your codebase fills with rotting branches.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Resilience Patterns ============== */
    {
      id: 'ms-u7', name: 'Unit 7 · Resilience Patterns', description: 'Surviving the network',
      lessons: [
        {
          id: 'ms-u7-l1', name: 'Timeouts, retries, backoff', icon: '⏱️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Defaults will hurt you', content: `<p>Most HTTP libraries have <strong>no timeout</strong> by default. A slow downstream can cause threads to pile up until the caller dies.</p>
<div class="code-block"><span class="com">Always set:</span>
- connect timeout (e.g., 1s)
- read/response timeout (e.g., 2-5s)
- total timeout for the whole call chain

<span class="com">Retries — only for IDEMPOTENT operations</span>
- max attempts: 2-3
- exponential backoff: 100ms, 200ms, 400ms ...
- add jitter to avoid thundering herd
- retry budget so retries can\'t bring down the dependency</div>
<p>Retrying a POST that already succeeded but had a flaky network can double-charge a customer. Use idempotency keys (Unit 12).</p>` },
            { type: 'multiple-choice', prompt: 'You enable retries on every operation including POSTs without idempotency keys. Most likely outcome:',
              options: [
                { text: 'Faster checkout', code: false },
                { text: 'Duplicate side effects (double charges, duplicate orders)', code: false },
                { text: 'Stronger consistency', code: false },
                { text: 'Lower latency p99', code: false }
              ],
              correct: 1, explanation: 'POST without idempotency is dangerous to retry — the server can\'t tell a retry from a fresh request.' },
            { type: 'true-false', statement: 'Adding jitter to retry delays helps prevent thundering herd retries on recovery.', correct: true, explanation: 'Without jitter, every client retries at exactly the same instants, hammering the recovering service.' },
            { type: 'match-pairs', prompt: 'Match the technique to what it prevents.', leftLabel: 'Technique', rightLabel: 'Prevents',
              pairs: [
                { left: 'Timeout', right: 'Indefinite hangs' },
                { left: 'Exponential backoff', right: 'Tight retry loops' },
                { left: 'Jitter', right: 'Thundering herd' },
                { left: 'Retry budget', right: 'Cascading overload' }
              ] },
            { type: 'output-predict', prompt: 'No timeout configured. Downstream hangs forever. What happens to the caller\'s thread pool?',
              code: `<span class="com">httpClient.timeout = null</span>
downstream.responseTime = ∞
caller.requests = high
`,
              options: ['Nothing — Java handles it', 'Threads pile up until the pool is exhausted; caller falls over', 'Requests automatically time out at 30s', 'Garbage collector frees them'],
              correct: 1, explanation: 'No timeout = no upper bound on thread occupation. This is one of the most common production outages.' }
          ]
        },
        {
          id: 'ms-u7-l2', name: 'Circuit breaker & bulkhead', icon: '🔌', xp: 25,
          challenges: [
            { type: 'concept', title: 'Stop knocking on a closed door', content: `<p>A <strong>circuit breaker</strong> tracks failure rate. After too many failures it "opens" — for a cool-down period it short-circuits calls, returning an error immediately instead of trying the downstream.</p>
<div class="code-block"><span class="com">States:</span>
CLOSED   → calls go through, failures counted
OPEN     → short-circuit: fail fast, no actual call
HALF-OPEN → after cool-down, allow a trickle to test recovery
             → success: back to CLOSED
             → failure: back to OPEN

<span class="com">Why?</span>
- Stops cascading failure (one slow service taking the whole platform down)
- Frees the caller\'s threads instantly
- Gives the downstream time to recover</div>
<p>A <strong>bulkhead</strong> isolates resources — separate thread pools or connection pools per downstream, so one bad neighbor can\'t starve the others.</p>
<p>Libraries: Hystrix (legacy), <strong>Resilience4j</strong>, Polly (.NET), or in service-mesh sidecars (Istio/Envoy).</p>` },
            { type: 'reorder-code', prompt: 'Order the circuit-breaker state transitions for a recovering downstream.',
              lines: [
                'State: CLOSED — calls succeed normally',
                'Failure rate crosses threshold — state moves to OPEN',
                'During cool-down, calls fail fast without hitting downstream',
                'Cool-down expires — state moves to HALF-OPEN, one probe call allowed',
                'Probe succeeds — state moves back to CLOSED'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'CLOSED → OPEN (on failures) → HALF-OPEN (after cool-down) → CLOSED (on probe success).' },
            { type: 'multiple-choice', prompt: 'The bulkhead pattern is named after:',
              options: [
                { text: 'A type of cargo container', code: false },
                { text: 'Ship compartments that contain flooding to one section', code: false },
                { text: 'A circuit board feature', code: false },
                { text: 'A war strategy', code: false }
              ],
              correct: 1, explanation: 'Same idea — isolate failure so it can\'t flood the whole ship (or the whole app).' },
            { type: 'true-false', statement: 'When a circuit breaker is OPEN, the caller calls the downstream anyway to be safe.', correct: false, explanation: 'OPEN means short-circuit — fail fast WITHOUT calling. That\'s how you stop cascades.' },
            { type: 'tap-tokens', prompt: 'Name the three states in order.',
              tokens: ['CLOSED', 'OPEN', 'HALF-OPEN', 'BROKEN', 'IDLE'],
              correctOrder: ['CLOSED', 'OPEN', 'HALF-OPEN'],
              explanation: 'CLOSED (healthy), OPEN (short-circuit), HALF-OPEN (testing recovery).' },
            { type: 'fill-blank', prompt: 'A modern Java circuit-breaker library is:',
              codeLines: [{ html: '<span class="ty">Resilience4j</span> replaces the older <span class="fn">_BLANK_</span> library.' }],
              tokens: ['Hystrix', 'Lombok', 'Jackson', 'JUnit'],
              correctAnswer: 'Hystrix', explanation: 'Netflix\'s Hystrix is in maintenance mode; Resilience4j (lightweight, Java 8+, functional API) is the modern pick.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Observability ============== */
    {
      id: 'ms-u8', name: 'Unit 8 · Distributed Tracing & Observability', description: 'You cannot fix what you cannot see',
      lessons: [
        {
          id: 'ms-u8-l1', name: 'Logs, metrics, traces', icon: '🔭', xp: 20,
          challenges: [
            { type: 'concept', title: 'The three pillars', content: `<div class="code-block"><span class="com">LOGS</span>     — discrete events; what happened, when, with what details
            tools: ELK, Loki, Splunk, Datadog Logs

<span class="com">METRICS</span>  — numeric time series; counts, rates, percentiles
            tools: Prometheus, StatsD, Datadog, CloudWatch

<span class="com">TRACES</span>   — the path of one request across services
            tools: Jaeger, Zipkin, Tempo, OpenTelemetry</div>
<p>Each pillar answers different questions:</p>
<ul>
<li><strong>Metrics</strong>: is anything wrong right now?</li>
<li><strong>Traces</strong>: where in the request did it go wrong?</li>
<li><strong>Logs</strong>: what exactly happened inside that step?</li>
</ul>` },
            { type: 'match-pairs', prompt: 'Match the question to the pillar.', leftLabel: 'Question', rightLabel: 'Pillar',
              pairs: [
                { left: 'p99 latency right now', right: 'Metrics' },
                { left: 'Which span is slow for request X', right: 'Traces' },
                { left: 'Exact SQL that ran inside Y', right: 'Logs' },
                { left: 'Error rate per endpoint', right: 'Metrics' }
              ] },
            { type: 'multiple-choice', prompt: 'Logs alone are insufficient in microservices because:',
              options: [
                { text: 'They cost too much', code: false },
                { text: 'A single user request hits many services — you need a way to tie those logs together (trace ID)', code: false },
                { text: 'Logs are write-only', code: false },
                { text: 'JSON is too verbose', code: false }
              ],
              correct: 1, explanation: 'Without a shared correlation ID across services, you can\'t reconstruct the path of one request.' },
            { type: 'true-false', statement: 'Prometheus pulls metrics from your services on a scrape interval.', correct: true, explanation: 'Prometheus uses a pull model — it scrapes /metrics endpoints periodically.' },
            { type: 'fill-blank', prompt: 'A vendor-neutral standard for traces and metrics is:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> (the merger of OpenTracing + OpenCensus).' }],
              tokens: ['OpenTelemetry', 'OpenSSL', 'OpenAPI', 'OpenAuth'],
              correctAnswer: 'OpenTelemetry', explanation: 'OpenTelemetry (OTel) is the CNCF standard for SDKs, protocols, and collectors across observability vendors.' }
          ]
        },
        {
          id: 'ms-u8-l2', name: 'Correlation IDs & spans', icon: '🧵', xp: 25,
          challenges: [
            { type: 'concept', title: 'One request, many spans', content: `<p>A <strong>trace</strong> is the journey of one logical request. It\'s made up of <strong>spans</strong> — one per service hop. Each span has start/end timestamps and tags.</p>
<div class="code-block">trace_id: abc-123
└─ span: gateway   /home-feed      [0–120 ms]
   ├─ span: users    GET /users/7   [10–40 ms]
   ├─ span: orders   GET /recent    [10–80 ms]
   │  └─ span: db   SELECT ...     [20–60 ms]
   └─ span: recs     GET /for/7     [10–100 ms]</div>
<p>The trick: every service must propagate the trace ID forward. In HTTP, that\'s the <code>traceparent</code> header (W3C Trace Context). Add it to <em>every</em> log line and you can grep all logs for one request.</p>` },
            { type: 'multiple-choice', prompt: 'The standard HTTP header for W3C Trace Context propagation is:',
              options: [
                { text: 'x-request-id', code: false },
                { text: 'traceparent', code: false },
                { text: 'authorization', code: false },
                { text: 'x-correlation', code: false }
              ],
              correct: 1, explanation: 'W3C standardized on <code>traceparent</code> (and optional <code>tracestate</code>) to make trace propagation interoperable.' },
            { type: 'true-false', statement: 'Putting the trace ID in every log line lets you reconstruct one request\'s journey by grepping.', correct: true, explanation: 'A flat log search with trace_id=X is the fastest way to see what happened to one request.' },
            { type: 'output-predict', prompt: 'A span has start=20ms and end=60ms (relative to trace start). Its duration is:',
              code: `span.start = <span class="num">20</span>
span.end   = <span class="num">60</span>
duration   = ???`,
              options: ['20ms', '40ms', '60ms', '80ms'],
              correct: 1, explanation: 'Duration = end − start = 60 − 20 = 40ms.' },
            { type: 'match-pairs', prompt: 'Match each tracing tool to its niche.', leftLabel: 'Tool', rightLabel: 'Niche',
              pairs: [
                { left: 'Jaeger', right: 'CNCF tracing backend' },
                { left: 'Zipkin', right: 'Original distributed tracer (Twitter)' },
                { left: 'Tempo', right: 'Grafana\'s trace store' },
                { left: 'OpenTelemetry', right: 'Vendor-neutral SDK + protocol' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the trace propagation header.',
              tokens: ['traceparent', ':', '00', '-', 'abc123', '-', 'def456', '-', '01'],
              correctOrder: ['traceparent', ':', '00', '-', 'abc123', '-', 'def456', '-', '01'],
              explanation: 'Format: version-traceId-parentSpanId-flags.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Data Per Service ============== */
    {
      id: 'ms-u9', name: 'Unit 9 · Data Per Service', description: 'Database per service & polyglot persistence',
      lessons: [
        {
          id: 'ms-u9-l1', name: 'Each service owns its data', icon: '🗄️', xp: 25,
          challenges: [
            { type: 'concept', title: 'The single most important rule', content: `<p>The principle: <strong>every service owns its own database</strong>. No other service reads or writes those tables directly. If you want that data, ask the service — through its API or its published events.</p>
<div class="code-block"><span class="com">// BAD — "shared database" anti-pattern</span>
[OrderService] ─┐
[UserService]  ─┼──► [shared MySQL] ◄── [ReportingService]
[PaymentSvc]   ─┘
   any schema change ripples to ALL services

<span class="com">// GOOD — database per service</span>
[OrderService]   → [orders-db]
[UserService]    → [users-db]
[PaymentSvc]     → [payments-db]
   each service controls its own schema lifecycle</div>
<p>Without this, you don\'t have microservices — you have a distributed monolith. Schema changes become political negotiations across teams.</p>` },
            { type: 'multiple-choice', prompt: 'The MAIN reason for "database per service" is:',
              options: [
                { text: 'Performance', code: false },
                { text: 'To preserve the autonomy that microservices promise', code: false },
                { text: 'It costs less', code: false },
                { text: 'NoSQL requires it', code: false }
              ],
              correct: 1, explanation: 'If two services share a schema, they cannot evolve independently — and you lose the central benefit of microservices.' },
            { type: 'true-false', statement: 'Different services can pick different DB technologies (polyglot persistence).', correct: true, explanation: 'Pick what fits: relational for the ledger, document for the catalog, graph for relationships, time-series for metrics.' },
            { type: 'match-pairs', prompt: 'Match the workload to a fitting database.', leftLabel: 'Workload', rightLabel: 'Database',
              pairs: [
                { left: 'Bank ledger, transactions', right: 'PostgreSQL / MySQL' },
                { left: 'Variable-schema product catalog', right: 'MongoDB' },
                { left: 'Social graph traversal', right: 'Neo4j' },
                { left: 'Server metrics time-series', right: 'Prometheus / InfluxDB' }
              ] },
            { type: 'multiple-choice', prompt: 'A "reporting" team wants to JOIN orders + users + payments. The right approach is:',
              options: [
                { text: 'Give them direct read access to all three DBs', code: false },
                { text: 'Stream events into a separate analytics store / data warehouse', code: false },
                { text: 'Ship them the production binary', code: false },
                { text: 'Disable reporting', code: false }
              ],
              correct: 1, explanation: 'Replicate via events into a read-optimized store (Redshift, BigQuery, Snowflake). Don\'t couple analytics to OLTP schemas.' },
            { type: 'fill-blank', prompt: 'Choosing different databases for different services is called:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> persistence.' }],
              tokens: ['polyglot', 'monoglot', 'embedded', 'cached'],
              correctAnswer: 'polyglot', explanation: '"Polyglot" = many languages; "polyglot persistence" = many storage technologies, each suited to its workload.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Distributed Transactions ============== */
    {
      id: 'ms-u10', name: 'Unit 10 · Distributed Transactions', description: 'Sagas, choreography, and why 2PC is rare',
      lessons: [
        {
          id: 'ms-u10-l1', name: 'Why 2PC is rare', icon: '🛑', xp: 25,
          challenges: [
            { type: 'concept', title: 'No more BEGIN; ... COMMIT;', content: `<p>In a monolith with one DB you wrap a transaction around everything and rely on ACID. Across services with separate DBs, you can\'t.</p>
<p><strong>Two-Phase Commit (2PC)</strong> tries to give you ACID across services: a coordinator asks every participant to "prepare", then "commit" or "abort". It works but:</p>
<div class="code-block">- Every participant must lock during the prepare phase → slow, low throughput
- If the coordinator crashes mid-protocol → participants stay locked
- Doesn\'t scale across many services or geographies
- Doesn\'t mix with most modern async stacks</div>
<p>For these reasons, most microservices systems avoid 2PC and use the <strong>Saga</strong> pattern instead — a sequence of local transactions, each compensated if a later step fails.</p>` },
            { type: 'multiple-choice', prompt: 'Why don\'t most teams use 2PC across microservices?',
              options: [
                { text: 'It\'s illegal', code: false },
                { text: 'Locks held across services kill throughput; coordinator crashes leave participants stuck', code: false },
                { text: 'It\'s too easy', code: false },
                { text: 'It only works in MongoDB', code: false }
              ],
              correct: 1, explanation: 'Throughput + availability + operational complexity — 2PC just isn\'t practical in most setups.' },
            { type: 'true-false', statement: 'ACID across multiple service-owned databases is generally easy and free.', correct: false, explanation: 'It\'s the opposite — you usually trade strict ACID for eventual consistency via sagas.' },
            { type: 'match-pairs', prompt: 'Match the term to its meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [
                { left: '2PC', right: 'Two-Phase Commit, coordinator-based' },
                { left: 'Saga', right: 'Sequence of local txns + compensations' },
                { left: 'ACID', right: 'Strong, single-DB guarantees' },
                { left: 'BASE', right: 'Basically Available, eventually consistent' }
              ] }
          ]
        },
        {
          id: 'ms-u10-l2', name: 'Sagas: orchestration vs choreography', icon: '🎭', xp: 30,
          challenges: [
            { type: 'concept', title: 'Two flavors of saga', content: `<div class="code-block"><span class="com">ORCHESTRATION — a central conductor</span>
OrderSaga conductor:
  1. payment.<span class="fn">charge</span>()      → on fail: stop
  2. inventory.<span class="fn">reserve</span>()   → on fail: payment.<span class="fn">refund</span>()
  3. shipping.<span class="fn">book</span>()       → on fail: inventory.<span class="fn">release</span>(); payment.<span class="fn">refund</span>()
  4. order.<span class="fn">confirm</span>()

<span class="com">CHOREOGRAPHY — services react to each other\'s events</span>
order.<span class="fn">placed</span>      → PaymentService listens, charges, emits payment.<span class="fn">charged</span>
payment.<span class="fn">charged</span>   → InventoryService listens, reserves, emits inventory.<span class="fn">reserved</span>
inventory.<span class="fn">reserved</span> → ShippingService listens, books, emits shipping.<span class="fn">booked</span>
  failures emit compensation events</div>
<p><strong>Orchestration</strong>: easier to reason about the whole flow, central place to debug, but the conductor becomes a coupling point.<br>
<strong>Choreography</strong>: maximally decoupled, but the overall flow is "implicit" — you have to trace events to understand it.</p>` },
            { type: 'multiple-choice', prompt: 'You want clear visibility into a complex 8-step flow. The sensible choice is:',
              options: [
                { text: 'Choreography — pure events', code: false },
                { text: 'Orchestration — explicit conductor', code: false },
                { text: '2PC', code: false },
                { text: 'No saga', code: false }
              ],
              correct: 1, explanation: 'Orchestration centralizes the flow definition; you can read the conductor and see all branches.' },
            { type: 'true-false', statement: 'A compensating action is a local rollback for an already-committed step.', correct: true, explanation: 'Each saga step commits locally; on failure later, you run compensations to logically undo earlier steps.' },
            { type: 'reorder-code', prompt: 'Order this orchestrated saga: payment → inventory → shipping → confirm.',
              lines: [
                'OrderSaga: charge payment',
                'OrderSaga: reserve inventory',
                'OrderSaga: book shipping',
                'OrderSaga: confirm order',
                'On failure: run compensations in reverse'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Forward steps in order; compensations are triggered on failure, undoing in reverse.' },
            { type: 'match-pairs', prompt: 'Match flavor to its big trade-off.', leftLabel: 'Flavor', rightLabel: 'Trade-off',
              pairs: [
                { left: 'Orchestration', right: 'Conductor is a coupling point' },
                { left: 'Choreography', right: 'Flow is implicit, hard to trace' },
                { left: '2PC', right: 'Locks kill throughput' },
                { left: 'Single-DB ACID', right: 'Only works inside one service' }
              ] },
            { type: 'tap-tokens', prompt: 'Name the pattern.',
              tokens: ['saga', 'pattern', 'mutex', '2PC'],
              correctOrder: ['saga', 'pattern'],
              explanation: 'Saga = sequence of local transactions + compensations on failure.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Event-driven & CQRS ============== */
    {
      id: 'ms-u11', name: 'Unit 11 · Event-driven & Event Sourcing', description: 'Events as first-class facts',
      lessons: [
        {
          id: 'ms-u11-l1', name: 'Events as facts', icon: '📣', xp: 25,
          challenges: [
            { type: 'concept', title: 'Past tense, immutable', content: `<p>An <strong>event</strong> describes something that already happened. It\'s a fact about the past — immutable, past-tense, owned by the service that emitted it.</p>
<div class="code-block"><span class="com">// Events use past-tense names</span>
OrderPlaced       { orderId, userId, items, total }
PaymentCharged    { paymentId, orderId, amount }
ShipmentBooked    { shipmentId, orderId, carrier, trackingId }

<span class="com">// vs commands (intent, future)</span>
PlaceOrder        — a request that MAY succeed or fail
ChargePayment</div>
<p>Events let many consumers react independently. Adding a new consumer never touches the producer. The producer simply emits "this happened" and forgets.</p>` },
            { type: 'multiple-choice', prompt: 'A well-named event is:',
              options: [
                { text: 'PlaceOrder', code: false },
                { text: 'OrderPlaced', code: false },
                { text: 'OrderInProgress', code: false },
                { text: 'CreateOrderNow', code: false }
              ],
              correct: 1, explanation: 'Past tense — it describes something that happened, not a request.' },
            { type: 'true-false', statement: 'Once published, an event should be treated as immutable.', correct: true, explanation: 'Facts about the past don\'t change. Mistakes are corrected by emitting a NEW event ("OrderCancelled", "PaymentRefunded").' },
            { type: 'match-pairs', prompt: 'Event vs Command.', leftLabel: 'Item', rightLabel: 'Kind',
              pairs: [
                { left: 'OrderPlaced', right: 'Event' },
                { left: 'PlaceOrder', right: 'Command' },
                { left: 'PaymentCharged', right: 'Event' },
                { left: 'ChargePayment', right: 'Command' }
              ] },
            { type: 'output-predict', prompt: 'You add a third consumer to the OrderPlaced event. What changes are required in OrderService?',
              code: `OrderService.<span class="fn">publish</span>(<span class="str">"OrderPlaced"</span>, payload)
<span class="com">// existing consumers: Email, Inventory</span>
<span class="com">// new consumer: Analytics</span>`,
              options: ['Rewrite OrderService', 'Add a config flag in OrderService', 'No changes — OrderService is unaware of subscribers', 'Restart the database'],
              correct: 2, explanation: 'That\'s the elegance of pub/sub — producer is decoupled from consumers entirely.' }
          ]
        },
        {
          id: 'ms-u11-l2', name: 'Event sourcing & CQRS', icon: '🎬', xp: 30,
          challenges: [
            { type: 'concept', title: 'The log IS the source of truth', content: `<p><strong>Event sourcing</strong>: instead of storing the current state of an entity, store the sequence of events that produced it. Current state is derived by replaying events.</p>
<div class="code-block"><span class="com">// Traditional</span>
accounts table:
  id=7, balance=120.00

<span class="com">// Event-sourced</span>
events:
  Deposited{id=7, amount=100}     <span class="com">// state would be 100</span>
  Deposited{id=7, amount=50}      <span class="com">// state would be 150</span>
  Withdrew{id=7, amount=30}       <span class="com">// state would be 120</span>

current_balance = replay(events)  <span class="com">// 120</span></div>
<p><strong>CQRS</strong> (Command Query Responsibility Segregation) often pairs with event sourcing: the write side stores events; the read side is a separate, denormalized projection built by consuming those events.</p>
<p>Wins: perfect audit log; time-travel debugging; rebuild any view by replaying. Costs: more moving parts; eventual consistency between write and read sides.</p>` },
            { type: 'multiple-choice', prompt: 'In event sourcing, the source of truth is:',
              options: [
                { text: 'The current state row', code: false },
                { text: 'The append-only sequence of events', code: false },
                { text: 'A daily snapshot', code: false },
                { text: 'The application cache', code: false }
              ],
              correct: 1, explanation: 'Events are the truth; state is just a derived view of those events.' },
            { type: 'true-false', statement: 'CQRS means the read side and write side use the SAME data model.', correct: false, explanation: 'CQRS deliberately splits them — write model is normalized, read model is denormalized for fast queries.' },
            { type: 'fill-blank', prompt: 'In CQRS, the write side handles ___ and the read side handles ___:',
              codeLines: [{ html: 'Write side: <span class="fn">_BLANK_</span>. Read side: queries.' }],
              tokens: ['commands', 'events', 'queries', 'projections'],
              correctAnswer: 'commands', explanation: 'Write side accepts commands and emits events. Read side serves queries from projections built from those events.' },
            { type: 'output-predict', prompt: 'Account events: Deposited 100, Deposited 50, Withdrew 30. Replayed balance?',
              code: `events = [
  Deposited(<span class="num">100</span>),
  Deposited(<span class="num">50</span>),
  Withdrew(<span class="num">30</span>)
]
balance = <span class="fn">replay</span>(events)`,
              options: ['80', '120', '150', '180'],
              correct: 1, explanation: '100 + 50 − 30 = 120.' },
            { type: 'tap-tokens', prompt: 'Name the read/write separation acronym.',
              tokens: ['CQRS', 'ACID', 'BASE', 'CAP'],
              correctOrder: ['CQRS'],
              explanation: 'Command Query Responsibility Segregation — separate models for reads vs writes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Idempotency & Messaging ============== */
    {
      id: 'ms-u12', name: 'Unit 12 · Idempotency & Messaging Semantics', description: 'At-least-once is the rule',
      lessons: [
        {
          id: 'ms-u12-l1', name: 'Delivery semantics', icon: '✉️', xp: 25,
          challenges: [
            { type: 'concept', title: 'There are no exactly-once miracles', content: `<div class="code-block"><span class="com">AT-MOST-ONCE</span>   — fire and forget; may lose messages
<span class="com">AT-LEAST-ONCE</span>  — guaranteed delivery, but may duplicate
<span class="com">EXACTLY-ONCE</span>   — sounds great, almost never achievable end-to-end</div>
<p>In practice, your message broker (Kafka, RabbitMQ, SQS) guarantees <strong>at-least-once</strong>. That means consumers WILL see duplicates eventually — network blips, retries, rebalances, redeploys.</p>
<p>The cure: make consumers <strong>idempotent</strong>. Processing the same message twice must produce the same result as processing it once.</p>` },
            { type: 'multiple-choice', prompt: 'In real systems, the most common practical guarantee is:',
              options: [
                { text: 'Exactly-once', code: false },
                { text: 'At-least-once', code: false },
                { text: 'At-most-once', code: false },
                { text: 'Never-once', code: false }
              ],
              correct: 1, explanation: 'At-least-once with idempotent consumers is the standard recipe.' },
            { type: 'true-false', statement: 'A consumer that\'s idempotent can safely process the same message twice.', correct: true, explanation: 'That\'s the definition. f(f(x)) == f(x).' },
            { type: 'match-pairs', prompt: 'Match guarantee to risk.', leftLabel: 'Guarantee', rightLabel: 'Risk',
              pairs: [
                { left: 'At-most-once', right: 'Lost messages' },
                { left: 'At-least-once', right: 'Duplicates' },
                { left: 'Exactly-once', right: 'Hard to truly achieve end-to-end' },
                { left: 'Idempotent consumer', right: 'Safe under duplicates' }
              ] }
          ]
        },
        {
          id: 'ms-u12-l2', name: 'Idempotency keys & dedup', icon: '🔑', xp: 25,
          challenges: [
            { type: 'concept', title: 'A request-id you control', content: `<p>For HTTP, attach an <strong>idempotency key</strong> the client generates (Stripe popularized this). The server stores it and returns the original result if the same key arrives again.</p>
<div class="code-block">POST /payments
Idempotency-Key: 6f1c-9b4e-2024-04-04T10:00Z
{
  "amount": 119.00,
  "orderId": <span class="num">42</span>
}

<span class="com">// Server logic</span>
<span class="kw">if</span> (idempotency.<span class="fn">seen</span>(key)) <span class="kw">return</span> idempotency.<span class="fn">resultFor</span>(key);
result = chargeCard(<span class="kw">...</span>);
idempotency.<span class="fn">store</span>(key, result);
<span class="kw">return</span> result;</div>
<p>For events: include a unique <code>eventId</code>, and have consumers track "processed event IDs" in a small dedup store.</p>` },
            { type: 'reorder-code', prompt: 'Order the idempotent POST handler steps.',
              lines: [
                'Receive request with Idempotency-Key',
                'Check the idempotency store for that key',
                'If seen: return the stored prior result',
                'Otherwise: perform the side effect (charge card, create order)',
                'Store the result against the key and return it'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Check first, short-circuit on duplicate, otherwise do the work and remember the result.' },
            { type: 'multiple-choice', prompt: 'The right place to generate an idempotency key for a payment is:',
              options: [
                { text: 'The server, randomly each request', code: false },
                { text: 'The client, once per logical attempt — retries reuse the same key', code: false },
                { text: 'The database', code: false },
                { text: 'The load balancer', code: false }
              ],
              correct: 1, explanation: 'If the server generated it, retries would get different keys — defeating the purpose.' },
            { type: 'true-false', statement: 'Without idempotency, a flaky network can cause a customer to be double-charged on retry.', correct: true, explanation: 'Exactly the failure idempotency keys exist to prevent.' },
            { type: 'fill-blank', prompt: 'Stripe popularized this HTTP header for safe retries:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>-Key: <span class="str">"abc-123"</span>' }],
              tokens: ['Idempotency', 'Authorization', 'Cache-Control', 'Retry'],
              correctAnswer: 'Idempotency', explanation: 'The Idempotency-Key header lets clients retry POSTs safely.' },
            { type: 'output-predict', prompt: 'A POST with the same Idempotency-Key is sent twice (network blip). With proper handling, how many charges occur?',
              code: `POST /payments  Idempotency-Key: K1  → success
POST /payments  Idempotency-Key: K1  → retry`,
              options: ['0', '1', '2', '3'],
              correct: 1, explanation: 'The server recognizes the duplicate key, returns the original result, and does NOT charge again.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Containers & Orchestration ============== */
    {
      id: 'ms-u13', name: 'Unit 13 · Containers & Orchestration', description: 'Docker and Kubernetes — the microservices view',
      lessons: [
        {
          id: 'ms-u13-l1', name: 'Containers in 5 minutes', icon: '📦', xp: 20,
          challenges: [
            { type: 'concept', title: 'A repeatable, isolated unit', content: `<p>A <strong>container</strong> packages your service + its runtime + dependencies into one image. Same image, same behavior, anywhere it runs.</p>
<div class="code-block"><span class="com"># Dockerfile</span>
<span class="kw">FROM</span> eclipse-temurin:21-jre
<span class="kw">COPY</span> app.jar /app/app.jar
<span class="kw">EXPOSE</span> 8080
<span class="kw">CMD</span> [<span class="str">"java"</span>, <span class="str">"-jar"</span>, <span class="str">"/app/app.jar"</span>]

<span class="com"># Build &amp; run</span>
docker build -t order-service:1.4.0 .
docker run -p 8080:8080 order-service:1.4.0</div>
<p>Containers are NOT VMs. They share the host kernel (much lighter) but isolate filesystem, processes, and network via Linux namespaces and cgroups.</p>` },
            { type: 'multiple-choice', prompt: 'A container differs from a VM because:',
              options: [
                { text: 'It boots a full OS', code: false },
                { text: 'It shares the host kernel and isolates with namespaces/cgroups', code: false },
                { text: 'It runs only on Windows', code: false },
                { text: 'It has no filesystem', code: false }
              ],
              correct: 1, explanation: 'Containers are processes with extra isolation, not full virtual machines.' },
            { type: 'true-false', statement: 'The same container image should produce the same behavior on any host that runs it.', correct: true, explanation: 'That repeatability is exactly why containers became the unit of deploy for microservices.' },
            { type: 'fill-blank', prompt: 'The blueprint file for a container image is called a:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> — declares base image, copies, ports, entrypoint.' }],
              tokens: ['Dockerfile', 'Makefile', 'YAML', 'Manifest'],
              correctAnswer: 'Dockerfile', explanation: 'A Dockerfile is the recipe; the build produces an image.' },
            { type: 'output-predict', prompt: 'You run two instances of the same image on different machines. What is true?',
              code: `docker run image:1.0   <span class="com"># on host A</span>
docker run image:1.0   <span class="com"># on host B</span>`,
              options: ['They\'ll behave differently because the host differs', 'They should behave identically — that\'s the point', 'One will fail', 'They\'ll share memory'],
              correct: 1, explanation: 'Repeatable behavior is the central promise of container images.' }
          ]
        },
        {
          id: 'ms-u13-l2', name: 'Kubernetes essentials', icon: '☸️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Why an orchestrator?', content: `<p>With dozens of services and hundreds of replicas, you don\'t run <code>docker run</code> by hand. <strong>Kubernetes</strong> takes declarative manifests and continuously reconciles reality with desired state.</p>
<div class="code-block"><span class="com">Core objects:</span>
Pod          — one or more containers running together (smallest deploy unit)
Deployment   — declares "I want N replicas of this image"
Service      — stable DNS name + load balancer for a set of Pods
Ingress      — external HTTP routing into Services
ConfigMap    — non-secret config
Secret       — sensitive config
HPA          — Horizontal Pod Autoscaler (scale based on CPU/metrics)</div>
<p>You give k8s a Deployment manifest; if a Pod dies, it spins up a replacement. If the host dies, it reschedules. That self-healing is the magic of an orchestrator.</p>` },
            { type: 'match-pairs', prompt: 'Match the Kubernetes object to its role.', leftLabel: 'Object', rightLabel: 'Role',
              pairs: [
                { left: 'Pod', right: 'Smallest deploy unit (1+ containers)' },
                { left: 'Deployment', right: 'Desired-state replica controller' },
                { left: 'Service', right: 'Stable DNS + LB across Pods' },
                { left: 'Ingress', right: 'External HTTP entry' }
              ] },
            { type: 'multiple-choice', prompt: 'A Pod crashes. With a Deployment of replicas=3, what does k8s do?',
              options: [
                { text: 'Nothing — wait for an engineer', code: false },
                { text: 'Spin up a replacement Pod to restore the desired count', code: false },
                { text: 'Delete the Deployment', code: false },
                { text: 'Reboot the node', code: false }
              ],
              correct: 1, explanation: 'Reconciliation: desired=3, observed=2, action=create one.' },
            { type: 'true-false', statement: 'A Kubernetes Service gives your Pods a stable internal DNS name and load-balances across them.', correct: true, explanation: 'Pod IPs change; the Service name doesn\'t. That\'s also built-in service discovery.' },
            { type: 'tap-tokens', prompt: 'Order: smallest to largest k8s abstraction.',
              tokens: ['Container', 'Pod', 'Deployment', 'Cluster'],
              correctOrder: ['Container', 'Pod', 'Deployment', 'Cluster'],
              explanation: 'Container ⊂ Pod ⊂ Deployment (replicas of Pods) ⊂ Cluster.' },
            { type: 'fill-blank', prompt: 'The auto-scaler in Kubernetes that scales replicas based on metrics is called:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span> — Horizontal Pod Autoscaler' }],
              tokens: ['HPA', 'CPA', 'LB', 'CRD'],
              correctAnswer: 'HPA', explanation: 'HPA watches CPU / memory / custom metrics and adjusts the replica count.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — CI/CD ============== */
    {
      id: 'ms-u14', name: 'Unit 14 · CI/CD for Microservices', description: 'A pipeline per service + contract testing',
      lessons: [
        {
          id: 'ms-u14-l1', name: 'A pipeline per service', icon: '🚦', xp: 20,
          challenges: [
            { type: 'concept', title: 'Independent deploys need independent pipelines', content: `<p>If you ship one giant pipeline that builds and deploys everything together, you\'ve recreated the monolith you tried to escape. Each service should have its own pipeline.</p>
<div class="code-block"><span class="com">Typical per-service pipeline:</span>
1. Lint + unit tests
2. Build container image, tag with commit SHA
3. Run integration tests against ephemeral env
4. Push image to registry
5. Deploy to staging (auto)
6. Run smoke + contract tests
7. Promote to prod (manual approval or auto with safeguards)
8. Canary or blue/green rollout
9. Auto-rollback on health-check / error-rate alarms</div>
<p>Build artifacts immutably: tag with the git SHA. The same image bytes promote through environments — different config, same binary.</p>` },
            { type: 'multiple-choice', prompt: 'Tagging container images with the git commit SHA helps because:',
              options: [
                { text: 'It looks cool', code: false },
                { text: 'Every image traces back to exactly one commit; same artifact across envs', code: false },
                { text: 'It saves disk space', code: false },
                { text: 'It encrypts the image', code: false }
              ],
              correct: 1, explanation: 'Traceability + the build-once-deploy-many principle.' },
            { type: 'true-false', statement: 'Rebuilding the artifact when promoting from staging to prod is a best practice.', correct: false, explanation: 'No — rebuilding risks subtle differences (new dep, new compiler). Promote the SAME bytes; vary only config.' },
            { type: 'match-pairs', prompt: 'Match deploy strategy to behavior.', leftLabel: 'Strategy', rightLabel: 'Behavior',
              pairs: [
                { left: 'Blue/Green', right: 'Run new alongside old, flip traffic' },
                { left: 'Canary', right: 'Send a small % first, watch metrics' },
                { left: 'Rolling', right: 'Replace pods a few at a time' },
                { left: 'Recreate', right: 'Kill all, then start new (downtime)' }
              ] },
            { type: 'multiple-choice', prompt: 'A canary deploy that shows raised error rate should:',
              options: [
                { text: 'Be promoted immediately', code: false },
                { text: 'Auto-rollback (or stop the ramp)', code: false },
                { text: 'Be ignored', code: false },
                { text: 'Page the CEO', code: false }
              ],
              correct: 1, explanation: 'The whole reason to run a canary is to catch this signal and roll back BEFORE 100% impact.' }
          ]
        },
        {
          id: 'ms-u14-l2', name: 'Contract testing', icon: '📜', xp: 25,
          challenges: [
            { type: 'concept', title: 'Catch breaking changes in CI', content: `<p>End-to-end tests across many services are slow, flaky, and expensive. <strong>Contract tests</strong> let each pair of services verify the API contract independently in CI.</p>
<div class="code-block"><span class="com">// Consumer-Driven Contracts (CDC) — e.g., Pact</span>
1. Consumer writes a contract:
   "When I GET /users/7 I expect { id, name, email }"
2. Contract is published to a broker (Pact Broker)
3. Provider runs the contract in CI against itself
4. If the provider stops returning "email", its CI fails
   BEFORE the consumer breaks in prod</div>
<p>Each service\'s pipeline becomes safer: you can\'t accidentally break consumers without their tests turning red.</p>` },
            { type: 'multiple-choice', prompt: 'Contract testing primarily aims to:',
              options: [
                { text: 'Replace unit tests', code: false },
                { text: 'Verify producer–consumer API compatibility without full E2E tests', code: false },
                { text: 'Test database performance', code: false },
                { text: 'Authenticate users', code: false }
              ],
              correct: 1, explanation: 'CDC tests catch API drift at the boundary, cheaply, in CI.' },
            { type: 'true-false', statement: 'Pact is a popular consumer-driven contract testing framework.', correct: true, explanation: 'Pact + Pact Broker is the canonical CDC toolchain.' },
            { type: 'match-pairs', prompt: 'Match test kind to its scope.', leftLabel: 'Test', rightLabel: 'Scope',
              pairs: [
                { left: 'Unit test', right: 'One function/class' },
                { left: 'Integration test', right: 'One service + its real deps' },
                { left: 'Contract test', right: 'Producer/consumer interface' },
                { left: 'End-to-end test', right: 'Many services + UI' }
              ] },
            { type: 'tap-tokens', prompt: 'Name the testing approach.',
              tokens: ['consumer', '-', 'driven', 'contracts'],
              correctOrder: ['consumer', '-', 'driven', 'contracts'],
              explanation: 'Consumer-Driven Contracts — consumers state what they expect; providers verify they meet it.' },
            { type: 'output-predict', prompt: 'Provider removes a field "email" that a consumer\'s contract requires. In CDC-enabled CI:',
              code: `consumer_contract.requires(<span class="str">"email"</span>)
provider.response = { id, name }   <span class="com">// no email</span>`,
              options: ['Provider CI passes', 'Provider CI fails — preventing the break from reaching prod', 'Consumer is silently downgraded', 'Nothing happens'],
              correct: 1, explanation: 'That\'s the whole value — break it in CI, not in prod.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Anti-patterns ============== */
    {
      id: 'ms-u15', name: 'Unit 15 · Common Anti-patterns', description: 'What "doing microservices wrong" looks like',
      lessons: [
        {
          id: 'ms-u15-l1', name: 'The distributed monolith', icon: '⚠️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Many services, none independent', content: `<p>A <strong>distributed monolith</strong> is the worst of both worlds: you pay the distributed-systems tax (network, ops, observability) AND keep the monolith\'s coupling.</p>
<div class="code-block"><span class="com">Smells:</span>
- Services share a single database
- A release requires deploying 5 services in lockstep
- Adding a column needs a meeting with 3 teams
- Tests can only run against the full system
- A failure in one service breaks N others within seconds
- "It\'s microservices, but if X is down, Y is down" — that\'s coupling</div>
<p>Cure: revisit the service boundaries, give each service its own DB, communicate via stable contracts and async events, NOT shared tables and chained synchronous calls.</p>` },
            { type: 'multiple-choice', prompt: 'The strongest red flag for a distributed monolith is:',
              options: [
                { text: 'Each service has its own DB', code: false },
                { text: 'Several services must deploy in lockstep, sharing data via a single DB', code: false },
                { text: 'Async events between services', code: false },
                { text: 'A service mesh', code: false }
              ],
              correct: 1, explanation: 'Shared DB + lockstep deploys = you have all the cost of distribution with none of the autonomy.' },
            { type: 'true-false', statement: 'A chatty service that makes 20 synchronous downstream calls to render a single page is a healthy design.', correct: false, explanation: '"Chatty" services compound latency and failure. Aggregate at a gateway/BFF, batch the downstream, or rethink the boundary.' },
            { type: 'match-pairs', prompt: 'Match the anti-pattern to its smell.', leftLabel: 'Anti-pattern', rightLabel: 'Smell',
              pairs: [
                { left: 'Distributed monolith', right: 'Lockstep deploys + shared DB' },
                { left: 'Shared DB', right: 'Schema changes need cross-team meetings' },
                { left: 'Chatty services', right: '20 sync calls per page render' },
                { left: 'God service', right: 'One service knows everything' }
              ] },
            { type: 'multiple-choice', prompt: 'Two services both write to the same "users" table directly. What\'s wrong?',
              options: [
                { text: 'Nothing — efficient', code: false },
                { text: 'Coupling: schema changes ripple; neither service truly owns the data', code: false },
                { text: 'It\'s required by Kubernetes', code: false },
                { text: 'It saves disk', code: false }
              ],
              correct: 1, explanation: 'Ownership is fundamental — one writer, others read via API or events.' }
          ]
        },
        {
          id: 'ms-u15-l2', name: 'More traps to avoid', icon: '🪤', xp: 25,
          challenges: [
            { type: 'concept', title: 'Patterns that LOOK like microservices but aren\'t', content: `<div class="code-block"><span class="com">Nano-services</span>     — splitting too fine; overhead exceeds benefit
                  (a "service" with one endpoint and 50 lines)

<span class="com">God service</span>       — one service that everyone calls and that
                  knows about every other domain — the new monolith

<span class="com">Versioned URLs forever</span>
                  — /v1/, /v2/, /v3/ all alive because nothing
                  is ever decommissioned. Discipline matters.

<span class="com">No observability</span>  — running microservices blind. You can\'t
                  debug a request that crossed 7 hops without traces.

<span class="com">Cargo-cult adoption</span> — choosing microservices because BigCo did,
                  not because you have the team and problems for it.</div>` },
            { type: 'multiple-choice', prompt: 'A "service" with a single endpoint and 50 lines of business logic is most likely:',
              options: [
                { text: 'Beautifully decomposed', code: false },
                { text: 'A nano-service — overhead probably exceeds benefit', code: false },
                { text: 'A unit test', code: false },
                { text: 'A best practice', code: false }
              ],
              correct: 1, explanation: 'Right-size services around cohesive business capabilities, not arbitrary file size.' },
            { type: 'true-false', statement: 'Adopting microservices without investing in observability typically ends badly.', correct: true, explanation: 'Without traces, metrics, and centralized logs you cannot debug a request that crossed many services.' },
            { type: 'fill-blank', prompt: 'When several /v1/, /v2/, /v3/ APIs all stay alive because nothing is decommissioned, that\'s:',
              codeLines: [{ html: '<span class="fn">_BLANK</span> debt — eventually you have N copies of the same code path.' }],
              tokens: ['versioning', 'storage', 'auth', 'network'],
              correctAnswer: 'versioning', explanation: 'Versioning debt — keep a sunset policy and actually retire old versions.' },
            { type: 'type-answer', prompt: 'Two-word name for the pattern where one service knows about every other domain and becomes the new monolith:',
              code: '',
              accept: ['god service', 'God Service', 'GOD SERVICE'],
              explanation: '"God service" — same risk as a god class, just at the service level.' },
            { type: 'tap-tokens', prompt: 'Pick the right rule.',
              tokens: ['choose', 'microservices', 'for', 'autonomy', ',', 'not', 'fashion'],
              correctOrder: ['choose', 'microservices', 'for', 'autonomy', ',', 'not', 'fashion'],
              explanation: 'Autonomy of teams and scaling is the only honest reason. Fashion isn\'t.' }
          ]
        }
      ]
    }

  ]
});

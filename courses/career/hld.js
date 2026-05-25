PUSH({
  id: 'hld',
  name: 'High-Level Design',
  icon: '🏛️',
  color: '#1a237e',
  description: 'Design scalable systems — from URL shorteners to global chat platforms.',
  units: [

    /* ============== UNIT 1 — Fundamentals ============== */
    {
      id: 'hld-u1', name: 'Unit 1 · System Design 101', description: 'How to think about scale',
      lessons: [
        {
          id: 'hld-u1-l1', name: 'What is HLD?', icon: '🏛️', xp: 15,
          challenges: [
            { type: 'concept', title: 'The 30,000-foot view', content: `<p><strong>High-Level Design (HLD)</strong> is about the <em>architecture</em> of a system — the boxes-and-arrows view of how a product handles real traffic.</p>
<div class="code-block"><span class="com">An HLD question sounds like:</span>
- "Design Twitter for 500M users"
- "Design a URL shortener like bit.ly"
- "Design WhatsApp for 1B daily users"

<span class="com">An LLD question sounds like:</span>
- "Design a Parking Lot in code (classes, methods)"
- "Implement a thread-safe LRU cache"</div>
<p>HLD = scale, services, databases, caches, queues, load balancers, CDNs. <br/>LLD = classes, methods, patterns, SOLID.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a typical HLD interview question?',
              options: [{text:'Design a Singleton class', code:false},{text:'Design Instagram for 100M users', code:false},{text:'Write a binary search', code:false},{text:'Sort a million ints in-place', code:false}],
              correct: 1, explanation: 'HLD = system architecture at scale. The others are LLD or coding.' },
            { type: 'true-false', statement: 'HLD interviews focus on class diagrams and design patterns more than on databases and caching.', correct: false, explanation: 'That is LLD. HLD is about scale: services, databases, caches, queues, load balancers.' },
            { type: 'match-pairs', prompt: 'Match topic to design level.', leftLabel: 'Topic', rightLabel: 'Level',
              pairs: [{left:'Consistent hashing', right:'HLD'},{left:'Strategy pattern', right:'LLD'},{left:'CAP theorem', right:'HLD'},{left:'Open/Closed principle', right:'LLD'}] },
            { type: 'multiple-choice', prompt: 'The MAIN deliverable of an HLD interview is:',
              options: [{text:'Working code', code:false},{text:'A box-and-arrows architecture diagram with justified choices', code:false},{text:'A UML class diagram', code:false},{text:'A SQL schema', code:false}],
              correct: 1, explanation: 'Architecture + tradeoff reasoning. Code rarely shows up.' }
          ]
        },
        {
          id: 'hld-u1-l2', name: 'The interview rhythm', icon: '🎼', xp: 15,
          challenges: [
            { type: 'concept', title: 'A repeatable 6-step playbook', content: `<div class="code-block"><span class="com">1. Clarify requirements</span>     functional + non-functional
<span class="com">2. Estimate scale</span>          QPS, storage, bandwidth (back-of-envelope)
<span class="com">3. API design</span>             a few key endpoints
<span class="com">4. Data model</span>             tables / docs / keys
<span class="com">5. High-level diagram</span>      services, DBs, caches, queues, LB
<span class="com">6. Deep dives + tradeoffs</span>  one or two hot spots</div>
<p>Spend <strong>5 minutes on clarification</strong> before drawing a single box. Wrong scope = wrong design.</p>` },
            { type: 'multiple-choice', prompt: 'The first thing to do in an HLD interview is:',
              options: [{text:'Start drawing the architecture', code:false},{text:'Clarify functional + non-functional requirements', code:false},{text:'Pick SQL or NoSQL', code:false},{text:'Estimate QPS', code:false}],
              correct: 1, explanation: 'You cannot design what you have not scoped. Always clarify first.' },
            { type: 'match-pairs', prompt: 'Match requirement to category.', leftLabel: 'Requirement', rightLabel: 'Category',
              pairs: [{left:'Users can post tweets', right:'Functional'},{left:'99.99% availability', right:'Non-functional'},{left:'Latency < 200ms', right:'Non-functional'},{left:'Follow other users', right:'Functional'}] },
            { type: 'true-false', statement: 'A back-of-envelope QPS estimate (e.g., "500M DAU × 5 posts ÷ 86,400s ≈ 29K writes/s") is expected even before drawing.', correct: true, explanation: 'Scale shapes every decision (cache size, shard count, queue depth).' },
            { type: 'tap-tokens', prompt: 'Order the 6 steps of the HLD playbook.',
              tokens: ['Clarify', 'Estimate', 'API', 'Data model', 'Diagram', 'Deep dive', 'Code', 'Deploy'],
              correctOrder: ['Clarify', 'Estimate', 'API', 'Data model', 'Diagram', 'Deep dive'],
              explanation: 'Requirements → scale → API → data → architecture → deep dive.' },
            { type: 'type-answer', prompt: 'What word covers "latency, throughput, availability, consistency" collectively?',
              accept: ['non-functional', 'non functional', 'nonfunctional', 'non-functional requirements'],
              explanation: 'Non-functional requirements describe how the system behaves under load.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Scalability ============== */
    {
      id: 'hld-u2', name: 'Unit 2 · Scalability', description: 'Going from 100 to 100 million users',
      lessons: [
        {
          id: 'hld-u2-l1', name: 'Vertical vs horizontal scaling', icon: '📈', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two ways to handle more load', content: `<div class="code-block"><span class="com">Vertical (scale up)</span>      bigger box: more CPU, RAM, disk
                          easy, but hits a ceiling + single point of failure

<span class="com">Horizontal (scale out)</span>   more boxes: 10 small servers instead of 1 huge
                          near-unlimited, fault tolerant, but harder
                          (load balancer, stateless services, distributed state)</div>
<p>Real systems start vertical (cheap, fast) and move horizontal once one box no longer fits the load — or once "the box just died" becomes unacceptable.</p>` },
            { type: 'multiple-choice', prompt: 'You doubled your server\'s RAM. That is:',
              options: [{text:'Horizontal scaling', code:false},{text:'Vertical scaling', code:false},{text:'Sharding', code:false},{text:'Replication', code:false}],
              correct: 1, explanation: 'Same machine, more resources = vertical.' },
            { type: 'true-false', statement: 'Horizontal scaling tends to give better fault tolerance than vertical scaling.', correct: true, explanation: 'If one of 10 boxes dies, you lose 10%. If THE box dies, you are down.' },
            { type: 'match-pairs', prompt: 'Match property to scaling style.', leftLabel: 'Property', rightLabel: 'Style',
              pairs: [{left:'Hard upper limit', right:'Vertical'},{left:'Requires load balancer', right:'Horizontal'},{left:'Cheapest to start', right:'Vertical'},{left:'Best fault tolerance', right:'Horizontal'}] },
            { type: 'multiple-choice', prompt: 'To scale a stateful service horizontally, you usually need to:',
              options: [{text:'Make it stateless or push state to a shared store', code:false},{text:'Add more RAM to the box', code:false},{text:'Switch to NoSQL', code:false},{text:'Disable caching', code:false}],
              correct: 0, explanation: 'Horizontal scaling assumes any node can serve any request — local in-memory state breaks that.' },
            { type: 'output-predict', prompt: 'A service handles 1,000 QPS on one box. You add 4 identical boxes behind a load balancer. Best-case capacity:',
              code: `<span class="com">// 1 box  -> 1,000 QPS</span>
<span class="com">// 5 boxes behind LB -> ?</span>`,
              options: ['1,000 QPS', '2,000 QPS', '5,000 QPS', '10,000 QPS'],
              correct: 2, explanation: '5 identical boxes = 5x throughput (best case, assuming LB and downstream services keep up).' }
          ]
        },
        {
          id: 'hld-u2-l2', name: 'Stateless services', icon: '🧊', xp: 20,
          challenges: [
            { type: 'concept', title: 'Why "stateless" unlocks scale', content: `<p>A <strong>stateless</strong> service keeps NO per-user state in memory. Every request carries everything it needs (auth token, IDs). The shared state lives in a database, cache, or session store.</p>
<div class="code-block"><span class="com">Stateful (bad for scale):</span>
  Server A stores logged-in user in local memory
  -&gt; user must keep hitting Server A
  -&gt; LB needs sticky sessions, server death = session loss

<span class="com">Stateless (good for scale):</span>
  Auth token in cookie/header
  -&gt; any server can handle any request
  -&gt; LB does pure round-robin, restarts are painless</div>` },
            { type: 'multiple-choice', prompt: 'A stateless service stores what locally?',
              options: [{text:'User sessions', code:false},{text:'Nothing user-specific (state lives in a shared store)', code:false},{text:'A copy of the database', code:false},{text:'Logs only', code:false}],
              correct: 1, explanation: 'Local state breaks horizontal scaling. Push it out.' },
            { type: 'true-false', statement: 'Stateless servers are easier to autoscale because any new instance can immediately serve any request.', correct: true, explanation: 'No warm-up, no session migration. Just add a box.' },
            { type: 'fill-blank', prompt: 'Common shared session stores include:',
              codeLines: [{html:'<span class="com">// Session store: </span><span class="ty">_BLANK_</span><span class="com">, Memcached, or a DB</span>'}],
              tokens: ['Redis', 'NGINX', 'Kafka', 'Jenkins'],
              correctAnswer: 'Redis', explanation: 'Redis is the most common in-memory session store for stateless web tiers.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Load Balancers ============== */
    {
      id: 'hld-u3', name: 'Unit 3 · Load Balancers', description: 'Distributing requests across servers',
      lessons: [
        {
          id: 'hld-u3-l1', name: 'L4 vs L7 load balancers', icon: '⚖️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Layer 4 vs Layer 7', content: `<div class="code-block"><span class="com">L4 (Transport, TCP/UDP)</span>
  - routes by IP + port, blind to HTTP
  - very fast, very cheap
  - e.g., AWS NLB, HAProxy in TCP mode

<span class="com">L7 (Application, HTTP)</span>
  - reads HTTP — can route by URL path, header, cookie
  - SSL termination, sticky sessions, rewrites
  - slower (parses HTTP) but far smarter
  - e.g., NGINX, Envoy, AWS ALB</div>
<p>Most modern web stacks have BOTH: L4 in front for raw throughput, L7 inside for smart routing.</p>` },
            { type: 'multiple-choice', prompt: 'You need to route <code>/api/users/*</code> to one service and <code>/api/orders/*</code> to another. You need:',
              options: [{text:'L4 load balancer', code:false},{text:'L7 load balancer', code:false},{text:'DNS load balancer', code:false},{text:'NAT', code:false}],
              correct: 1, explanation: 'Path-based routing requires reading the HTTP request — L7.' },
            { type: 'match-pairs', prompt: 'Match LB to layer.', leftLabel: 'LB', rightLabel: 'Layer',
              pairs: [{left:'NGINX (HTTP)', right:'L7'},{left:'AWS NLB', right:'L4'},{left:'AWS ALB', right:'L7'},{left:'HAProxy TCP', right:'L4'}] },
            { type: 'true-false', statement: 'L4 load balancers can terminate TLS and route based on the request path.', correct: false, explanation: 'L4 cannot read HTTP. TLS termination + path routing are L7 features.' }
          ]
        },
        {
          id: 'hld-u3-l2', name: 'Routing algorithms', icon: '🔀', xp: 20,
          challenges: [
            { type: 'concept', title: 'How a request picks a backend', content: `<div class="code-block"><span class="com">Round Robin</span>          server 1, 2, 3, 1, 2, 3, ...   (simple, ignores load)
<span class="com">Least Connections</span>    pick the server with fewest active conns
<span class="com">Least Response Time</span>   pick fastest-responding server
<span class="com">IP Hash</span>              hash(client IP) -&gt; server  (consistent per client)
<span class="com">Sticky Sessions</span>      first request picks a server; cookie pins you there
<span class="com">Weighted RR</span>          give beefy boxes more traffic share</div>
<p><strong>Sticky sessions</strong> let you keep stateful servers but ruin pure horizontal scaling — prefer stateless + shared session store.</p>` },
            { type: 'multiple-choice', prompt: 'Which algorithm best handles backends with VERY different request durations (e.g., file uploads)?',
              options: [{text:'Round Robin', code:false},{text:'Least Connections', code:false},{text:'IP Hash', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'A slow-but-RR-favored box piles up. Least Connections adapts to actual load.' },
            { type: 'true-false', statement: 'Sticky sessions are required for stateless services.', correct: false, explanation: 'Stateless services do NOT need stickiness — that is the whole point.' },
            { type: 'reorder-code', prompt: 'Trace what happens when a request hits an L7 LB.',
              lines: [
                'Client opens TCP connection to LB virtual IP',
                'LB terminates TLS, reads HTTP headers',
                'LB applies routing rule (path/header) + algorithm',
                'LB opens connection to chosen backend',
                'LB forwards request, streams response back'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Classic L7 LB request flow.' },
            { type: 'match-pairs', prompt: 'Match algorithm to behavior.', leftLabel: 'Algorithm', rightLabel: 'Behavior',
              pairs: [
                {left:'Round Robin', right:'Cycle through backends'},
                {left:'Least Conn', right:'Pick least-busy backend'},
                {left:'IP Hash', right:'Same client → same backend'},
                {left:'Weighted RR', right:'Bigger boxes get more share'}
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Caching ============== */
    {
      id: 'hld-u4', name: 'Unit 4 · Caching', description: 'The single biggest performance lever',
      lessons: [
        {
          id: 'hld-u4-l1', name: 'Where caches live', icon: '⚡', xp: 20,
          challenges: [
            { type: 'concept', title: 'Caches everywhere', content: `<div class="code-block"><span class="com">Browser cache</span>       per-user, kills repeat requests entirely
<span class="com">CDN</span>                 geo-distributed edge cache (static + sometimes dynamic)
<span class="com">Reverse proxy cache</span> NGINX/Varnish in front of your servers
<span class="com">App-level cache</span>     in-process (Caffeine) or remote (Redis/Memcached)
<span class="com">DB query cache</span>      caches recent query results
<span class="com">DB buffer pool</span>      pages in memory, not on disk</div>
<p>The further from the user a cache lives, the cheaper a miss is — but the bigger the latency on a hit.</p>` },
            { type: 'multiple-choice', prompt: 'Which cache layer SAVES THE MOST round trips when it hits?',
              options: [{text:'DB buffer pool', code:false},{text:'Browser cache', code:false},{text:'Redis', code:false},{text:'Reverse proxy', code:false}],
              correct: 1, explanation: 'A browser-cached response never leaves the user\'s machine — zero network.' },
            { type: 'true-false', statement: 'Redis and Memcached are typically used as remote, in-memory key-value caches shared across app servers.', correct: true, explanation: 'They are the canonical "distributed cache" tier between app and DB.' },
            { type: 'match-pairs', prompt: 'Match cache to its location.', leftLabel: 'Cache', rightLabel: 'Where',
              pairs: [{left:'CDN', right:'Edge POPs near users'},{left:'Redis', right:'Inside your data center'},{left:'Browser cache', right:'User\'s device'},{left:'Buffer pool', right:'Inside the DB'}] }
          ]
        },
        {
          id: 'hld-u4-l2', name: 'Cache strategies & eviction', icon: '♻️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Read & write patterns', content: `<div class="code-block"><span class="com">Cache-aside (lazy load)</span>
  read:  cache miss -&gt; load from DB -&gt; populate cache
  write: write to DB -&gt; invalidate cache key
  (most common; tolerant of cache loss)

<span class="com">Write-through</span>
  write: app -&gt; cache -&gt; DB (sync). Strong consistency, higher write latency.

<span class="com">Write-back (write-behind)</span>
  write: app -&gt; cache; cache flushes to DB later (async). Fast, but data loss on crash.</div>
<div class="code-block"><span class="com">Eviction policies</span>
  LRU  - drop Least Recently Used     (great default)
  LFU  - drop Least Frequently Used   (good when access is skewed)
  FIFO - drop oldest inserted         (simple, rarely best)
  TTL  - expire after N seconds</div>` },
            { type: 'multiple-choice', prompt: 'In <strong>cache-aside</strong>, the cache is populated:',
              options: [{text:'On every DB write', code:false},{text:'Only after a read miss', code:false},{text:'Synchronously with the DB write', code:false},{text:'On a fixed schedule', code:false}],
              correct: 1, explanation: 'Lazy load — only fetch into cache when someone actually asks.' },
            { type: 'multiple-choice', prompt: 'Which strategy gives the BEST write performance but risks data loss on cache crash?',
              options: [{text:'Cache-aside', code:false},{text:'Write-through', code:false},{text:'Write-back (write-behind)', code:false},{text:'Read-through', code:false}],
              correct: 2, explanation: 'Write-back acks before the DB write, so a crash between the two = lost write.' },
            { type: 'match-pairs', prompt: 'Match strategy to property.', leftLabel: 'Strategy', rightLabel: 'Property',
              pairs: [
                {left:'Cache-aside', right:'Lazy populate on read miss'},
                {left:'Write-through', right:'Cache + DB written together'},
                {left:'Write-back', right:'Fast writes, durability risk'},
                {left:'Read-through', right:'Cache fetches from DB itself'}
              ] },
            { type: 'true-false', statement: 'LRU evicts the item that has been accessed least RECENTLY, not least often.', correct: true, explanation: 'LRU = Least Recently Used. LFU = Least Frequently Used.' },
            { type: 'output-predict', prompt: 'LRU cache size 3. Access sequence: A, B, C, A, D, B. Which key was just evicted on the final access?',
              code: `<span class="com">cache=[]
A -&gt; [A]
B -&gt; [A,B]
C -&gt; [A,B,C]
A -&gt; [B,C,A]
D -&gt; [C,A,D]   (B was LRU)
B -&gt; [A,D,B]   (C was LRU)</span>`,
              options: ['A', 'B', 'C', 'D'],
              correct: 2, explanation: 'After D, C was the least-recently-used. The next access (B) evicts C.' },
            { type: 'fill-blank', prompt: 'In Redis you set a 60-second TTL with:',
              codeLines: [{html:'<span class="kw">SET</span> user:42 <span class="str">"alice"</span> <span class="fn">_BLANK_</span> <span class="num">60</span>'}],
              tokens: ['EX', 'TTL', 'EXPIRE_IN', 'TIME'],
              correctAnswer: 'EX', explanation: '<code>SET key val EX 60</code> sets the value with a 60-second expiry.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — CDN ============== */
    {
      id: 'hld-u5', name: 'Unit 5 · CDN & Geo Distribution', description: 'Cache at the edge, close to users',
      lessons: [
        {
          id: 'hld-u5-l1', name: 'How CDNs work', icon: '🌍', xp: 20,
          challenges: [
            { type: 'concept', title: 'Push the data to where users live', content: `<p>A <strong>CDN</strong> (Content Delivery Network) is a global mesh of <em>edge servers</em> (POPs — Points of Presence). When a user requests <code>image.jpg</code>, they hit the <em>nearest</em> POP instead of your origin.</p>
<div class="code-block"><span class="com">Without CDN:</span> User in Sydney -&gt; origin in Virginia    ~230ms RTT
<span class="com">With CDN:</span>    User in Sydney -&gt; Sydney POP            ~10ms RTT</div>
<p>CDNs win on three axes: <strong>latency</strong> (close to users), <strong>bandwidth offload</strong> (origin sees a fraction of traffic), and <strong>resilience</strong> (regional failures don\'t take you down).</p>` },
            { type: 'multiple-choice', prompt: 'A CDN primarily reduces:',
              options: [{text:'CPU on the origin', code:false},{text:'Latency by serving from a server geographically close to the user', code:false},{text:'SQL query time', code:false},{text:'Memory usage of the browser', code:false}],
              correct: 1, explanation: 'Speed of light is the bottleneck — closer POPs = lower latency.' },
            { type: 'true-false', statement: 'CDNs are only useful for static assets (images, JS, CSS).', correct: false, explanation: 'Modern CDNs (Cloudflare, Fastly) cache dynamic responses, run edge functions, and proxy APIs too.' },
            { type: 'match-pairs', prompt: 'Match CDN concept.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [
                {left:'POP', right:'Edge data center'},
                {left:'Origin', right:'Your backend (source of truth)'},
                {left:'Cache miss', right:'Edge fetches from origin'},
                {left:'TTL', right:'How long the edge holds the file'}
              ] },
            { type: 'multiple-choice', prompt: 'You push a new <code>app.js</code>. Users still see the old version. Most likely culprit:',
              options: [{text:'Your DB is down', code:false},{text:'CDN edge is serving the cached old version (TTL not yet expired)', code:false},{text:'Wrong load balancer algorithm', code:false},{text:'A bad shard', code:false}],
              correct: 1, explanation: 'Classic CDN gotcha. Solve via cache-busting filenames (<code>app.abc123.js</code>) or explicit purge.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Databases ============== */
    {
      id: 'hld-u6', name: 'Unit 6 · Databases — SQL vs NoSQL', description: 'Picking the right store',
      lessons: [
        {
          id: 'hld-u6-l1', name: 'SQL vs NoSQL', icon: '🗄️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two big families', content: `<div class="code-block"><span class="com">SQL (relational)</span>          NoSQL
  Postgres, MySQL              MongoDB (doc), Cassandra (wide), Redis (KV)
  Strict schema                Flexible / schemaless
  Powerful joins               Joins limited or absent
  ACID transactions            BASE (eventual consistency, usually)
  Vertical-first scaling       Horizontal-first scaling
  Great for relational data    Great for huge scale or flexible shape</div>
<p><strong>Default to SQL</strong>. Reach for NoSQL when you have one of: massive scale, flexible/evolving schema, or write-heavy denormalized access patterns.</p>` },
            { type: 'multiple-choice', prompt: 'Which is MOST likely a Postgres-friendly use case?',
              options: [{text:'Storing 10TB of denormalized timeseries metrics', code:false},{text:'A financial ledger needing strict transactions and joins', code:false},{text:'Globally-replicated session store', code:false},{text:'Caching HTML fragments', code:false}],
              correct: 1, explanation: 'ACID + joins + integrity = a job for relational SQL.' },
            { type: 'true-false', statement: 'NoSQL databases never support transactions.', correct: false, explanation: 'Many do — MongoDB, DynamoDB, Cosmos all offer transactions (often with weaker guarantees than full SQL ACID).' },
            { type: 'match-pairs', prompt: 'Match DB to family.', leftLabel: 'Database', rightLabel: 'Family',
              pairs: [
                {left:'PostgreSQL', right:'Relational SQL'},
                {left:'MongoDB', right:'Document'},
                {left:'Cassandra', right:'Wide-column'},
                {left:'Redis', right:'Key-value'}
              ] },
            { type: 'multiple-choice', prompt: 'Your data shape changes weekly during early development. Which is most forgiving?',
              options: [{text:'Strict-schema SQL', code:false},{text:'Schemaless document DB (e.g., MongoDB)', code:false},{text:'A graph DB only', code:false},{text:'CSV files on disk', code:false}],
              correct: 1, explanation: 'Documents tolerate shape drift — no migration per change.' }
          ]
        },
        {
          id: 'hld-u6-l2', name: 'ACID vs BASE', icon: '⚗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two consistency philosophies', content: `<div class="code-block"><span class="com">ACID</span> — strong, transactional
  Atomicity     all-or-nothing
  Consistency   invariants hold
  Isolation     concurrent txns don\'t interfere
  Durability    once committed, survives crashes

<span class="com">BASE</span> — eventually correct
  Basically Available    always responds, even if stale
  Soft state             may change without input (replicas converge)
  Eventual consistency   reads might lag writes briefly</div>
<p>ACID = banking, inventory. BASE = social feeds, analytics, anything that can briefly look stale.</p>` },
            { type: 'multiple-choice', prompt: 'A money transfer that debits one account and credits another MUST be:',
              options: [{text:'Eventually consistent only', code:false},{text:'Atomic (either both or neither)', code:false},{text:'Cached aggressively', code:false},{text:'Async', code:false}],
              correct: 1, explanation: 'Anything else risks money appearing or disappearing.' },
            { type: 'true-false', statement: '"Eventual consistency" means reads might briefly see stale data after a write.', correct: true, explanation: 'Replicas converge over time, not instantly.' },
            { type: 'tap-tokens', prompt: 'Spell out the ACID acronym.',
              tokens: ['Atomicity', 'Consistency', 'Isolation', 'Durability', 'Availability', 'Throughput'],
              correctOrder: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
              explanation: 'A-C-I-D.' },
            { type: 'match-pairs', prompt: 'Match guarantee.', leftLabel: 'Guarantee', rightLabel: 'Meaning',
              pairs: [
                {left:'Atomicity', right:'All-or-nothing'},
                {left:'Isolation', right:'Concurrent txns don\'t interfere'},
                {left:'Durability', right:'Survives crashes'},
                {left:'Consistency', right:'Invariants preserved'}
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Sharding ============== */
    {
      id: 'hld-u7', name: 'Unit 7 · Sharding & Partitioning', description: 'Splitting data across many machines',
      lessons: [
        {
          id: 'hld-u7-l1', name: 'Why and how to shard', icon: '🔪', xp: 25,
          challenges: [
            { type: 'concept', title: 'When one DB box isn\'t enough', content: `<p><strong>Sharding</strong> = horizontally partitioning data across multiple DB instances. Each <em>shard</em> holds a subset of the rows.</p>
<div class="code-block"><span class="com">Range sharding</span>
  shard A: users 1..1,000,000
  shard B: users 1,000,001..2,000,000   (simple; hotspot risk)

<span class="com">Hash sharding</span>
  shard = hash(user_id) % N
  (even distribution; resharding is painful)

<span class="com">Consistent hashing</span>
  hash users AND nodes onto a ring; user goes to next node clockwise
  (adding/removing a node only moves 1/N of keys, not all of them)

<span class="com">Directory / lookup</span>
  a metadata service stores key -&gt; shard mapping (flexible, extra hop)</div>` },
            { type: 'multiple-choice', prompt: 'Which sharding scheme handles adding/removing nodes with the LEAST data movement?',
              options: [{text:'Range', code:false},{text:'Hash modulo N', code:false},{text:'Consistent hashing', code:false},{text:'Round-robin row insertion', code:false}],
              correct: 2, explanation: 'Modulo reshards everything. Consistent hashing moves only ~1/N of keys.' },
            { type: 'multiple-choice', prompt: 'Range sharding on timestamp can create:',
              options: [{text:'Better cache locality', code:false},{text:'Hot shards (all writes to the "today" shard)', code:false},{text:'Better consistency', code:false},{text:'Lower latency', code:false}],
              correct: 1, explanation: 'Time-range = hot shard problem. All recent writes hammer one node.' },
            { type: 'true-false', statement: 'Sharding eliminates the need for replication.', correct: false, explanation: 'Shards still need replicas — otherwise one shard outage = data loss.' },
            { type: 'match-pairs', prompt: 'Match strategy to its main downside.', leftLabel: 'Strategy', rightLabel: 'Downside',
              pairs: [
                {left:'Range', right:'Hot shards'},
                {left:'Hash mod N', right:'Painful resharding'},
                {left:'Consistent hash', right:'More complex'},
                {left:'Directory', right:'Extra metadata lookup'}
              ] },
            { type: 'output-predict', prompt: 'You have 4 shards using hash mod N. You add a 5th shard. Approximately what fraction of keys must move?',
              code: `<span class="com">// hash(key) % 4 -&gt; hash(key) % 5</span>`,
              options: ['About 1/5', 'About 1/2', 'About 4/5', 'About 0% (no movement)'],
              correct: 2, explanation: 'Modulo with different N typically remaps ~(N-1)/N keys. That is why consistent hashing exists.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Replication ============== */
    {
      id: 'hld-u8', name: 'Unit 8 · Replication', description: 'Multiple copies for HA and throughput',
      lessons: [
        {
          id: 'hld-u8-l1', name: 'Leader-follower & beyond', icon: '👯', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three replication models', content: `<div class="code-block"><span class="com">Leader / Follower (Primary / Replica)</span>
  one node accepts writes; followers replicate async (or sync)
  read-scaling: read from followers
  failover: promote a follower if leader dies

<span class="com">Multi-Leader</span>
  multiple accept writes (often per region)
  conflict resolution required (last-write-wins, CRDTs)
  used in multi-region deployments

<span class="com">Leaderless (Dynamo-style)</span>
  any node accepts writes
  quorum reads/writes: W + R &gt; N for consistency
  Cassandra, DynamoDB</div>` },
            { type: 'multiple-choice', prompt: 'In leader-follower with async replication, the BIGGEST risk on leader failure is:',
              options: [{text:'Network split', code:false},{text:'Recently-written data not yet replicated is lost', code:false},{text:'Followers refuse new leader', code:false},{text:'Schema migration', code:false}],
              correct: 1, explanation: 'Async = some writes only on leader. Failover loses them unless you switch to sync.' },
            { type: 'true-false', statement: 'Reading from a follower can return slightly stale data (replication lag).', correct: true, explanation: 'Even sync replication has lag; async amplifies it.' },
            { type: 'match-pairs', prompt: 'Match model to typical use.', leftLabel: 'Model', rightLabel: 'Use',
              pairs: [
                {left:'Leader-follower', right:'Most RDBMS read scaling'},
                {left:'Multi-leader', right:'Multi-region writes'},
                {left:'Leaderless', right:'Cassandra / Dynamo'},
                {left:'No replication', right:'Single-node dev DB'}
              ] },
            { type: 'fill-blank', prompt: 'A common quorum rule for leaderless systems:',
              codeLines: [{html:'W + R &gt; <span class="fn">_BLANK_</span>     <span class="com">// guarantees overlap between writers and readers</span>'}],
              tokens: ['N', 'M', 'K', '1'],
              correctAnswer: 'N', explanation: 'N is the replication factor. W + R > N forces at least one overlapping node.' },
            { type: 'reorder-code', prompt: 'Order the steps of a leader-follower failover.',
              lines: [
                'Leader stops responding (crashed or unreachable)',
                'Cluster manager detects failure via heartbeat',
                'Pick a follower with the most up-to-date log',
                'Promote that follower to new leader',
                'Update clients / DNS / proxy to point to new leader'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Detection -> election -> promotion -> traffic switch.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — CAP ============== */
    {
      id: 'hld-u9', name: 'Unit 9 · CAP Theorem', description: 'The fundamental tradeoff',
      lessons: [
        {
          id: 'hld-u9-l1', name: 'CAP & consistency models', icon: '🔺', xp: 25,
          challenges: [
            { type: 'concept', title: 'You can\'t have all three', content: `<div class="code-block"><span class="com">C - Consistency</span>     every read sees the most recent write
<span class="com">A - Availability</span>    every request gets a response (success or fail-fast)
<span class="com">P - Partition tolerance</span>   system keeps working despite network splits

In a distributed system, a network partition WILL happen.
So you really choose between C and A during a partition:

  CP system  -&gt; refuse some writes to stay consistent  (e.g., HBase, MongoDB w/ majority)
  AP system  -&gt; accept writes, reconcile later        (e.g., Cassandra, DynamoDB)</div>
<div class="code-block"><span class="com">Consistency models, strong -&gt; weak:</span>
  Linearizable / Strong   appears atomic, instant order
  Sequential              same order everywhere, not real-time
  Causal                  if A caused B, all see A before B
  Eventual                replicas eventually converge</div>` },
            { type: 'multiple-choice', prompt: 'CAP forces you to give up one of {C, A, P} during a:',
              options: [{text:'Cache miss', code:false},{text:'Network partition', code:false},{text:'Hot shard', code:false},{text:'Schema migration', code:false}],
              correct: 1, explanation: 'CAP is specifically about partition behavior.' },
            { type: 'multiple-choice', prompt: 'A banking core ledger is almost always:',
              options: [{text:'AP', code:false},{text:'CP', code:false},{text:'CA', code:false},{text:'PA', code:false}],
              correct: 1, explanation: 'You\'d rather refuse a transfer than allow inconsistent balances.' },
            { type: 'true-false', statement: 'In CAP, "CA" (no partition tolerance) is realistic for distributed systems.', correct: false, explanation: 'Partitions are inevitable in distributed systems — P is non-optional, so the real choice is C vs A.' },
            { type: 'match-pairs', prompt: 'Match system to typical CAP choice.', leftLabel: 'System', rightLabel: 'CAP',
              pairs: [
                {left:'Cassandra', right:'AP'},
                {left:'HBase', right:'CP'},
                {left:'DynamoDB (default)', right:'AP'},
                {left:'etcd / ZooKeeper', right:'CP'}
              ] },
            { type: 'output-predict', prompt: 'You write x=5 to a leader; a follower has not seen it yet. A client reads from that follower.',
              code: `<span class="com">// Eventual consistency model</span>
write x = <span class="num">5</span>   <span class="com">// to leader at t=0</span>
read x        <span class="com">// from lagging follower at t=0.001</span>`,
              options: ['Always returns 5', 'May return old value, will converge to 5', 'Throws an error', 'Returns null'],
              correct: 1, explanation: 'Eventual consistency: read might be stale, but replicas converge.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Message Queues ============== */
    {
      id: 'hld-u10', name: 'Unit 10 · Message Queues & Streams', description: 'Async, decoupled, durable',
      lessons: [
        {
          id: 'hld-u10-l1', name: 'Queues & pub-sub', icon: '📬', xp: 25,
          challenges: [
            { type: 'concept', title: 'Decoupling with messages', content: `<p>A <strong>message queue</strong> sits between producers and consumers so they don\'t have to be online at the same time, or even know about each other.</p>
<div class="code-block"><span class="com">Queue (point-to-point)</span>
  Producer -&gt; [ msg, msg, msg ] -&gt; Consumer
  one consumer takes each message; competing consumers scale work
  e.g., RabbitMQ, SQS, classic task queues

<span class="com">Pub-Sub (topic / log)</span>
  Producer -&gt; topic -&gt; [Consumer A, Consumer B, ...]
  EVERY subscriber sees EVERY message
  e.g., Kafka, Google Pub/Sub, Redis Streams</div>
<p>Kafka is special: it\'s a <em>distributed append-only log</em> — consumers track their own offset, can replay history, and parallelize via partitions.</p>` },
            { type: 'multiple-choice', prompt: 'You need 3 different services to each receive every "user-signed-up" event. You want:',
              options: [{text:'A point-to-point queue', code:false},{text:'A pub-sub topic', code:false},{text:'A relational table', code:false},{text:'A cron job', code:false}],
              correct: 1, explanation: 'Pub-sub fans messages out to many subscribers. A queue would send each message to only one of them.' },
            { type: 'true-false', statement: 'Kafka consumers can re-read old messages by seeking to an earlier offset.', correct: true, explanation: 'Kafka is a durable log. Offsets give you time travel — within retention.' },
            { type: 'match-pairs', prompt: 'Match tool to its main pattern.', leftLabel: 'Tool', rightLabel: 'Pattern',
              pairs: [
                {left:'RabbitMQ', right:'Classic broker / queue'},
                {left:'Kafka', right:'Distributed log / pub-sub'},
                {left:'AWS SQS', right:'Point-to-point queue'},
                {left:'AWS SNS', right:'Pub-sub fan-out'}
              ] },
            { type: 'multiple-choice', prompt: 'Producers send 10K events/s. The consumer can handle 2K/s. Without a queue you\'d:',
              options: [{text:'Drop 80% of events at the consumer', code:false},{text:'Use a queue to buffer the burst', code:false},{text:'Reject all producer requests', code:false},{text:'Increase database size', code:false}],
              correct: 1, explanation: 'Queues smooth burst traffic and decouple producer/consumer speed.' },
            { type: 'tap-tokens', prompt: 'Build the basic Kafka model: ____.',
              tokens: ['producer', 'topic', 'partition', 'consumer', 'database', 'cache'],
              correctOrder: ['producer', 'topic', 'partition', 'consumer'],
              explanation: 'Producers write to a topic (split into partitions); consumers read from partitions.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Microservices ============== */
    {
      id: 'hld-u11', name: 'Unit 11 · Microservices vs Monolith', description: 'Splitting (or not) along service lines',
      lessons: [
        {
          id: 'hld-u11-l1', name: 'When to split', icon: '🧩', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two ends of a spectrum', content: `<div class="code-block"><span class="com">Monolith</span>
  single deployable unit
  + simple to build, deploy, debug, refactor
  + ACID across modules trivially
  - one team\'s bug brings down everyone
  - hard to scale a single hot module independently

<span class="com">Microservices</span>
  many small services, each independently deployable
  + independent scaling, per-team ownership
  + tech diversity (Go for one, Python for another)
  - network calls, distributed transactions, observability cost
  - org overhead</div>
<p><strong>Default to a well-modularized monolith.</strong> Split into services when you feel real organizational or scaling pain.</p>` },
            { type: 'multiple-choice', prompt: 'Strongest sign you should split a monolith into services?',
              options: [{text:'You have 5 engineers', code:false},{text:'One module gets 100x the load of others and needs different scaling', code:false},{text:'Your code is messy', code:false},{text:'You want to use Kubernetes', code:false}],
              correct: 1, explanation: 'Independent scaling is one of the clearest legitimate reasons. Messy code is fixed by refactoring, not chopping.' },
            { type: 'true-false', statement: 'Microservices simplify ACID transactions that span multiple modules.', correct: false, explanation: 'They make it MUCH harder — you need sagas, eventual consistency, or 2-phase commits.' },
            { type: 'match-pairs', prompt: 'Match cost/benefit to architecture.', leftLabel: 'Property', rightLabel: 'Style',
              pairs: [
                {left:'Easier debugging', right:'Monolith'},
                {left:'Independent scaling', right:'Microservices'},
                {left:'One CI pipeline', right:'Monolith'},
                {left:'Polyglot stacks possible', right:'Microservices'}
              ] },
            { type: 'multiple-choice', prompt: 'Inter-service communication in a microservice setup is usually:',
              options: [{text:'Shared in-memory references', code:false},{text:'HTTP/gRPC calls or async messages over a queue', code:false},{text:'Shared SQL JOINs across services', code:false},{text:'Direct DB connections to each other', code:false}],
              correct: 1, explanation: 'Services own their data and communicate over the network — sync (HTTP/gRPC) or async (queue).' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — API design at scale ============== */
    {
      id: 'hld-u12', name: 'Unit 12 · APIs at Scale', description: 'REST, gRPC, GraphQL, gateways, rate limits',
      lessons: [
        {
          id: 'hld-u12-l1', name: 'API styles & gateways', icon: '🚪', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick the right protocol', content: `<div class="code-block"><span class="com">REST (HTTP + JSON)</span>      easy, ubiquitous, caches well; over-fetching is common
<span class="com">gRPC (HTTP/2 + protobuf)</span>  tiny payloads, streaming, strong typing; not browser-friendly
<span class="com">GraphQL</span>                client picks fields; great for mobile; N+1 + caching pain</div>
<div class="code-block"><span class="com">API Gateway responsibilities:</span>
  auth + rate limiting
  request routing to internal services
  response shaping / aggregation
  observability (logs, metrics)
  TLS termination</div>` },
            { type: 'multiple-choice', prompt: 'You\'re building an internal service-to-service RPC where bandwidth matters. Best pick:',
              options: [{text:'REST JSON', code:false},{text:'gRPC', code:false},{text:'GraphQL', code:false},{text:'SOAP', code:false}],
              correct: 1, explanation: 'gRPC over HTTP/2 with protobuf is compact and fast. REST is fine externally; gRPC shines internally.' },
            { type: 'multiple-choice', prompt: 'A mobile client needs ONLY the user\'s name and avatar, not the full user object. Which style helps most?',
              options: [{text:'REST', code:false},{text:'GraphQL (request just the fields you need)', code:false},{text:'SOAP', code:false},{text:'FTP', code:false}],
              correct: 1, explanation: 'GraphQL field-level selection eliminates over-fetching.' },
            { type: 'true-false', statement: 'An API gateway is a single point of failure unless it is itself replicated and load-balanced.', correct: true, explanation: 'It is — always run multiple gateway instances behind an L4 LB.' },
            { type: 'match-pairs', prompt: 'Match feature to API style.', leftLabel: 'Feature', rightLabel: 'Best fit',
              pairs: [
                {left:'Caches at any HTTP proxy', right:'REST'},
                {left:'Strongly-typed RPC', right:'gRPC'},
                {left:'Client picks fields', right:'GraphQL'},
                {left:'Streaming bi-directional', right:'gRPC'}
              ] }
          ]
        },
        {
          id: 'hld-u12-l2', name: 'Rate limiting', icon: '🪣', xp: 25,
          challenges: [
            { type: 'concept', title: 'Token bucket & friends', content: `<div class="code-block"><span class="com">Fixed window</span>    100 req/min  (boundary spikes possible)
<span class="com">Sliding window</span>  100 req in any 60s  (smoother)
<span class="com">Leaky bucket</span>    requests drip out at fixed rate; excess overflow
<span class="com">Token bucket</span>    bucket of N tokens, refilled at R/s; request needs 1 token
                  -&gt; allows short bursts up to bucket size</div>
<p>Token bucket is the most common in practice — bursty workloads handled naturally, smooth average rate enforced.</p>` },
            { type: 'multiple-choice', prompt: 'You want to allow short bursts but enforce a long-term average rate. Best algorithm:',
              options: [{text:'Fixed window', code:false},{text:'Token bucket', code:false},{text:'Drop all over N', code:false},{text:'Random sampling', code:false}],
              correct: 1, explanation: 'Token bucket fills the bucket while idle, letting bursts spend saved tokens.' },
            { type: 'true-false', statement: 'Rate limits are usually enforced at the API gateway, not inside every service.', correct: true, explanation: 'Centralizing rate limiting at the gateway keeps services focused on business logic.' },
            { type: 'output-predict', prompt: 'Token bucket: capacity=5 tokens, refill=1 token/sec. The client makes 7 requests in 1 second when bucket starts full. How many succeed?',
              code: `<span class="com">// bucket=5, +1 refill during the second -&gt; ~6 tokens available across the second</span>`,
              options: ['1', '5', '6', '7'],
              correct: 2, explanation: '5 initial tokens + 1 refill = ~6 requests served, the rest 429.' },
            { type: 'fill-blank', prompt: 'The HTTP status code for "you\'re being rate limited" is:',
              codeLines: [{html:'<span class="ty">HTTP</span> <span class="fn">_BLANK_</span> <span class="str">"Too Many Requests"</span>'}],
              tokens: ['429', '403', '503', '418'],
              correctAnswer: '429', explanation: 'Standard "Too Many Requests" status.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Classic design problems ============== */
    {
      id: 'hld-u13', name: 'Unit 13 · Classic Design Problems', description: 'URL shortener, news feed, chat, more',
      lessons: [
        {
          id: 'hld-u13-l1', name: 'Design a URL Shortener', icon: '🔗', xp: 25,
          challenges: [
            { type: 'concept', title: 'TinyURL / bit.ly', content: `<div class="code-block"><span class="com">Functional:</span> POST /shorten {long_url} -&gt; short_url
              GET /{code} -&gt; 301 redirect

<span class="com">Scale guess:</span> 100M URLs/day -&gt; ~1.2K writes/s, ~12K reads/s (10:1)

<span class="com">Key trick — generating short codes:</span>
  Option A: base62 of an auto-increment counter   (predictable order)
  Option B: random 7-char base62  (62^7 &asymp; 3.5T URLs)
  Option C: hash(long_url)[:7]    (collision check needed)

<span class="com">Storage:</span> KV store (code -&gt; long_url) is enough
<span class="com">Cache:</span> Redis in front; reads dominate, perfect for caching
<span class="com">Redirect:</span> 301 permanent (CDN-cacheable) vs 302 (lets you A/B test)</div>` },
            { type: 'multiple-choice', prompt: 'For a URL shortener handling 12K reads/s, the SINGLE biggest performance lever is:',
              options: [{text:'A bigger DB CPU', code:false},{text:'A Redis cache in front of the DB (reads are skewed)', code:false},{text:'gRPC instead of REST', code:false},{text:'A graph database', code:false}],
              correct: 1, explanation: 'Reads >> writes and the working set is small. Caching saves the day.' },
            { type: 'true-false', statement: 'Using base62 encoding of a counter, 7 characters can address ~3.5 trillion URLs.', correct: true, explanation: '62^7 &asymp; 3.5e12. Plenty of room.' },
            { type: 'match-pairs', prompt: 'Match concern to solution.', leftLabel: 'Concern', rightLabel: 'Solution',
              pairs: [
                {left:'12K reads/s', right:'Redis cache'},
                {left:'Globally unique codes', right:'Counter shard ranges or hash + check'},
                {left:'Custom aliases', right:'Reserve in DB, fail on collision'},
                {left:'Analytics on clicks', right:'Async write to Kafka -&gt; warehouse'}
              ] },
            { type: 'reorder-code', prompt: 'Order the read path for GET /{code}.',
              lines: [
                'Edge LB receives GET /{code}',
                'App service looks up code in Redis cache',
                'On miss, look up in the KV / SQL store',
                'Populate cache, return 301 with Location: long_url',
                'Client follows redirect to long_url'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Standard cache-aside read path with HTTP redirect.' }
          ]
        },
        {
          id: 'hld-u13-l2', name: 'Design a Chat App (WhatsApp)', icon: '💬', xp: 30,
          challenges: [
            { type: 'concept', title: 'Real-time messaging at scale', content: `<div class="code-block"><span class="com">Core needs:</span>
  - real-time delivery (WebSocket / long-poll)
  - offline message storage
  - read receipts, typing, presence
  - 1:1 and group chats
  - end-to-end encryption (Signal protocol)

<span class="com">Architecture sketch:</span>
  Client &lt;-- WebSocket --&gt; Gateway service (stateful conn)
                                  |
                                  v
                            Message router
                              |        |
                              v        v
                     Kafka topic   Notification svc (push)
                              |
                              v
                       Persist (Cassandra: chat_id, ts, msg)

<span class="com">Tricky parts:</span>
  - "user X is online" -&gt; presence service + heartbeats
  - delivering to user on a DIFFERENT gateway -&gt; pub-sub between gateways
  - groups of 256+ -&gt; fan-out via worker pool, not inline</div>` },
            { type: 'multiple-choice', prompt: 'The right transport for real-time, two-way chat is:',
              options: [{text:'Plain HTTP polling every second', code:false},{text:'WebSocket', code:false},{text:'FTP', code:false},{text:'gRPC unary RPC', code:false}],
              correct: 1, explanation: 'WebSocket gives full-duplex push without poll overhead.' },
            { type: 'multiple-choice', prompt: 'For storing billions of chat messages with mostly time-ordered access, a strong choice is:',
              options: [{text:'A single Postgres instance', code:false},{text:'Wide-column store like Cassandra, partitioned by chat_id', code:false},{text:'A graph database', code:false},{text:'Plain file system', code:false}],
              correct: 1, explanation: 'Cassandra suits high-write, time-ordered, partitioned access patterns.' },
            { type: 'true-false', statement: 'Sender and recipient are usually connected to the same gateway server.', correct: false, explanation: 'They rarely are. Gateways forward messages via a shared bus (Kafka, Redis pub-sub) to wherever the recipient lives.' },
            { type: 'match-pairs', prompt: 'Match feature to component.', leftLabel: 'Feature', rightLabel: 'Component',
              pairs: [
                {left:'Real-time push', right:'WebSocket gateway'},
                {left:'Persist messages', right:'Cassandra'},
                {left:'Offline push', right:'APNs / FCM'},
                {left:'Cross-gateway routing', right:'Kafka or Redis pub-sub'}
              ] },
            { type: 'multiple-choice', prompt: 'In a 1000-member group, naively iterating recipients in the request thread is BAD because:',
              options: [{text:'It uses too much disk', code:false},{text:'It blocks the sender for the duration of fan-out', code:false},{text:'WebSockets don\'t support it', code:false},{text:'CDN caches reject it', code:false}],
              correct: 1, explanation: 'Push fan-out to async workers via a queue. The sender gets an ack instantly.' }
          ]
        },
        {
          id: 'hld-u13-l3', name: 'Design a News Feed', icon: '📰', xp: 30,
          challenges: [
            { type: 'concept', title: 'Push vs pull vs hybrid', content: `<div class="code-block"><span class="com">Pull (fan-out on read)</span>
  on feed view: query posts from all followees, merge, sort
  + cheap writes
  - expensive reads, slow for users following thousands

<span class="com">Push (fan-out on write)</span>
  on post: write into every follower\'s precomputed feed
  + instant feed reads
  - storm when a celebrity (10M followers) posts

<span class="com">Hybrid</span>
  push for normal users, pull for celebrities
  merge at read time</div>` },
            { type: 'multiple-choice', prompt: 'Instagram-scale feed for a celebrity with 100M followers should use:',
              options: [{text:'Pure push fan-out', code:false},{text:'Pure pull fan-out', code:false},{text:'Hybrid: pull for top-N celebs, push for normal accounts', code:false},{text:'Email broadcasts', code:false}],
              correct: 2, explanation: 'Pushing to 100M inboxes per post is a write storm. Pull at read time for celebs.' },
            { type: 'true-false', statement: 'Push (fan-out on write) trades write cost for read speed.', correct: true, explanation: 'Reads become a single key lookup; writes get amplified by follower count.' },
            { type: 'match-pairs', prompt: 'Match component to job.', leftLabel: 'Component', rightLabel: 'Job',
              pairs: [
                {left:'Post service', right:'Accept new posts'},
                {left:'Fanout worker', right:'Insert into follower feeds'},
                {left:'Feed service', right:'Read precomputed feed'},
                {left:'Ranking service', right:'Reorder by ML score'}
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Reliability ============== */
    {
      id: 'hld-u14', name: 'Unit 14 · Reliability & Observability', description: 'Designing for failure',
      lessons: [
        {
          id: 'hld-u14-l1', name: 'Circuit breakers, retries, idempotency', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Failure is a feature you design for', content: `<div class="code-block"><span class="com">Retries</span>          retry transient failures (network blips)
                  use EXPONENTIAL BACKOFF + jitter (else thundering herd)

<span class="com">Idempotency</span>      same request twice = same effect
                  required to make retries safe (Idempotency-Key header)

<span class="com">Circuit breaker</span>  if downstream is failing, STOP calling it for a while
                  states: closed -&gt; open (after N fails) -&gt; half-open (probe)

<span class="com">Timeouts</span>         every network call needs one. No timeout = hanging threads
<span class="com">Bulkheads</span>        isolate failures so one bad dependency doesn\'t exhaust all threads
<span class="com">Graceful degrade</span> serve a stripped-down response when a dep is down</div>` },
            { type: 'multiple-choice', prompt: 'Why must payment APIs be idempotent?',
              options: [{text:'For SEO', code:false},{text:'So that retries after timeouts don\'t double-charge', code:false},{text:'Because gRPC requires it', code:false},{text:'To enable caching', code:false}],
              correct: 1, explanation: 'A timed-out request might have succeeded. The retry must not charge twice.' },
            { type: 'true-false', statement: 'Adding random "jitter" to backoff helps avoid thousands of clients retrying in lockstep.', correct: true, explanation: 'Jitter prevents the thundering-herd effect after an outage.' },
            { type: 'match-pairs', prompt: 'Match pattern to purpose.', leftLabel: 'Pattern', rightLabel: 'Purpose',
              pairs: [
                {left:'Circuit breaker', right:'Stop calling a failing dependency'},
                {left:'Bulkhead', right:'Isolate failure to one pool'},
                {left:'Timeout', right:'Bound how long to wait'},
                {left:'Idempotency key', right:'Make retries safe'}
              ] },
            { type: 'reorder-code', prompt: 'Order circuit breaker state transitions on failure.',
              lines: [
                'Breaker starts CLOSED — calls flow through',
                'Failures exceed threshold — breaker OPENS',
                'While OPEN, calls fail fast (no downstream call)',
                'After cooldown, breaker goes HALF-OPEN',
                'A probe succeeds — breaker CLOSES again'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'Closed -> Open -> Half-Open -> Closed.' },
            { type: 'output-predict', prompt: 'Exponential backoff with base 1s, factor 2. What is the 4th retry delay?',
              code: `<span class="com">// retry 1: 1s
// retry 2: 2s
// retry 3: 4s
// retry 4: ?</span>`,
              options: ['4s', '6s', '8s', '16s'],
              correct: 2, explanation: 'Each retry doubles: 1, 2, 4, 8 seconds.' }
          ]
        },
        {
          id: 'hld-u14-l2', name: 'Monitoring & observability', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'The three pillars', content: `<div class="code-block"><span class="com">Metrics</span>   numeric time series (QPS, p99 latency, error %)
          Prometheus + Grafana

<span class="com">Logs</span>      structured events with timestamps + context
          ELK (Elastic + Logstash + Kibana), Loki, Datadog

<span class="com">Traces</span>    follow ONE request across many services
          OpenTelemetry, Jaeger, Zipkin

<span class="com">Golden signals</span> (Google SRE):  latency, traffic, errors, saturation</div>` },
            { type: 'multiple-choice', prompt: 'You need to find why one specific user\'s checkout was slow. Best tool:',
              options: [{text:'Aggregated metrics', code:false},{text:'Distributed traces with request ID', code:false},{text:'Disk SMART logs', code:false},{text:'Pinging DNS', code:false}],
              correct: 1, explanation: 'Tracing follows one request across services and reveals where time went.' },
            { type: 'multiple-choice', prompt: 'Which metric is MOST useful to alert on for user experience?',
              options: [{text:'Average latency', code:false},{text:'p99 (or p99.9) latency', code:false},{text:'Total bytes', code:false},{text:'Number of pods', code:false}],
              correct: 1, explanation: 'Averages hide tail pain. p99 tells you the worst common experience.' },
            { type: 'match-pairs', prompt: 'Match signal to typical tool.', leftLabel: 'Signal', rightLabel: 'Tool',
              pairs: [
                {left:'Metrics', right:'Prometheus / Grafana'},
                {left:'Logs', right:'ELK / Loki'},
                {left:'Traces', right:'Jaeger / Zipkin'},
                {left:'Alerts', right:'Alertmanager / PagerDuty'}
              ] },
            { type: 'tap-tokens', prompt: 'List the 4 "golden signals" (Google SRE) in any order.',
              tokens: ['latency', 'traffic', 'errors', 'saturation', 'disk', 'cost'],
              correctOrder: ['latency', 'traffic', 'errors', 'saturation'],
              explanation: 'Latency, traffic, errors, saturation.' },
            { type: 'type-answer', prompt: 'What does SLO stand for in reliability terms?',
              accept: ['service level objective', 'service-level objective'],
              explanation: 'SLO = Service Level Objective — the internal target (e.g., 99.95% success over 30d).' }
          ]
        }
      ]
    }

  ]
});

LEARN('hld', {
  intro: 'Design systems that survive real traffic — caches, queues, replicas, shards, and the tradeoffs behind every box-and-arrow diagram.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'hld-c1',
      title: 'What is High-Level Design?',
      icon: '🏛️',
      sections: [
        { type: 'heading', text: 'High-Level Design in one paragraph', level: 1 },
        { type: 'para', html: 'High-Level Design (HLD) is the practice of sketching the <em>architecture</em> of a system before any code is written. It is about boxes and arrows — services, databases, caches, queues, load balancers, CDNs — and the tradeoffs between them. If Low-Level Design asks "what classes and methods will you write?", HLD asks "what does the production-scale shape of this product look like?"' },
        { type: 'para', html: 'In interviews, HLD is the most senior-feeling round. You will not be graded on syntax or even on whether your design is perfect — you will be graded on how you reason about scale, failure, and tradeoffs.' },

        { type: 'heading', text: 'A typical prompt', level: 2 },
        { type: 'callout', kind: 'info', html: '"Design a URL shortener like bit.ly. It should support 100M new short URLs per day, redirect in under 50ms globally, and never lose a URL." That is HLD — every word in that sentence is a constraint that shapes the design.' },

        { type: 'heading', text: 'HLD vs LLD at a glance', level: 2 },
        { type: 'image', alt: 'HLD vs LLD comparison',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.h{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.l{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:20px;font-weight:700;text-anchor:middle;fill:#0f172a}.bd{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b}.tt{font-family:Inter,sans-serif;font-size:24px;font-weight:700;text-anchor:middle;fill:#0f172a}</style>
</defs>
<text x="400" y="30" class="tt">HLD vs LLD</text>
<rect x="40" y="60" width="340" height="200" rx="14" class="h"/>
<text x="210" y="92" class="t">High-Level Design</text>
<text x="60" y="125" class="bd">- Services, DBs, caches, queues</text>
<text x="60" y="150" class="bd">- Load balancers + CDN</text>
<text x="60" y="175" class="bd">- Sharding, replication, consistency</text>
<text x="60" y="200" class="bd">- Scale: QPS, storage, bandwidth</text>
<text x="60" y="225" class="bd">- Tradeoffs: CAP, ACID vs BASE</text>
<text x="60" y="250" class="bd">- e.g., "Design WhatsApp for 1B users"</text>
<rect x="420" y="60" width="340" height="200" rx="14" class="l"/>
<text x="590" y="92" class="t">Low-Level Design</text>
<text x="440" y="125" class="bd">- Classes, fields, methods</text>
<text x="440" y="150" class="bd">- SOLID principles</text>
<text x="440" y="175" class="bd">- Design patterns</text>
<text x="440" y="200" class="bd">- Class &amp; sequence diagrams</text>
<text x="440" y="225" class="bd">- Thread safety, concurrency</text>
<text x="440" y="250" class="bd">- e.g., "Design a Parking Lot in code"</text>
</svg>` },

        { type: 'heading', text: 'A repeatable interview rhythm', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Clarify requirements</strong> — functional (what does it do?) and non-functional (how fast? how reliable? how big?)',
          '<strong>Estimate scale</strong> — QPS, storage, bandwidth. Back-of-envelope, no calculator needed',
          '<strong>API design</strong> — a few key endpoints with method, path, body shape',
          '<strong>Data model</strong> — tables, documents, or key-value entries',
          '<strong>High-level diagram</strong> — services, databases, caches, queues, load balancer',
          '<strong>Deep dives + tradeoffs</strong> — pick a hot spot (the data store, the read path, the queue topology) and go deep'
        ] },

        { type: 'callout', kind: 'tip', html: 'Spend the first 5 minutes asking questions. The candidate who designs Instagram for 100M users when the interviewer wanted "internal company photo sharing for 5K employees" loses immediately.' },

        { type: 'heading', text: 'Back-of-envelope math', level: 2 },
        { type: 'para', html: 'Numbers ground your design. Memorize a few base figures and you can estimate almost anything:' },
        { type: 'code', lang: 'text', code: `1 day = 86,400 s   (~10^5)
1 year &approx; 3.15 &times; 10^7 s
1 KB &approx; 10^3 bytes,  1 MB &approx; 10^6,  1 GB &approx; 10^9,  1 TB &approx; 10^12

Latency (orders of magnitude):
  L1 cache         ~0.5 ns
  RAM read         ~100 ns
  SSD read         ~150 &micro;s
  Disk seek        ~10 ms
  Network DC->DC   ~150 ms (cross-continent)` },
        { type: 'callout', kind: 'info', html: 'Example: 500M DAU &times; 5 posts each = 2.5B posts/day. Divide by 86,400 &approx; 29K writes/sec. That is your sustained write QPS. Now you can size the queue, the DB, the cache.' }
      ]
    },

    /* ============ Chapter 2 ============ */
    {
      id: 'hld-c2',
      title: 'Scalability — Vertical vs Horizontal',
      icon: '📈',
      sections: [
        { type: 'heading', text: 'Two paths up the curve', level: 1 },
        { type: 'para', html: '<strong>Vertical scaling</strong> (scale up) means making one server bigger — more CPU, more RAM, faster disks. It is the easiest first move because nothing about your code or architecture has to change.' },
        { type: 'para', html: '<strong>Horizontal scaling</strong> (scale out) means adding more servers and distributing the load across them. This is the only way to reach hyperscale, but it forces you to confront distributed-systems problems: load balancing, shared state, failure modes.' },

        { type: 'image', alt: 'Vertical vs Horizontal scaling',
          svg: `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.v{fill:#fde68a;stroke:#854d0e;stroke-width:2}.h{fill:#bfdbfe;stroke:#1e3a8a;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle;fill:#0f172a}.bd{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#1e293b}.arr{fill:none;stroke:#dc2626;stroke-width:2;marker-end:url(#ar)}</style>
  <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
</defs>
<text x="200" y="28" class="t">Vertical (scale up)</text>
<rect x="140" y="60" width="120" height="50" rx="6" class="v"/>
<text x="200" y="90" class="bd">small box</text>
<line x1="200" y1="120" x2="200" y2="145" class="arr"/>
<rect x="125" y="155" width="150" height="80" rx="6" class="v"/>
<text x="200" y="200" class="bd">bigger box</text>
<text x="200" y="220" class="bd">(more CPU/RAM)</text>

<text x="600" y="28" class="t">Horizontal (scale out)</text>
<rect x="500" y="60" width="80" height="50" rx="6" class="h"/>
<text x="540" y="90" class="bd">server</text>
<line x1="600" y1="85" x2="625" y2="85" class="arr"/>
<rect x="430" y="155" width="80" height="50" rx="6" class="h"/>
<rect x="520" y="155" width="80" height="50" rx="6" class="h"/>
<rect x="610" y="155" width="80" height="50" rx="6" class="h"/>
<rect x="700" y="155" width="80" height="50" rx="6" class="h"/>
<text x="470" y="185" class="bd">server</text>
<text x="560" y="185" class="bd">server</text>
<text x="650" y="185" class="bd">server</text>
<text x="740" y="185" class="bd">server</text>
<text x="605" y="240" class="bd">+ load balancer</text>
</svg>` },

        { type: 'heading', text: 'The tradeoff table', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Vertical</strong> — cheap to start, no architectural changes, but hits a hardware ceiling and is a single point of failure.',
          '<strong>Horizontal</strong> — near-unlimited capacity, fault tolerant, but requires load balancing, statelessness, and distributed-system thinking.',
          '<strong>Cost curve</strong> — vertical costs grow exponentially (a 64-core box costs a LOT more than 8x 8-core boxes); horizontal costs grow linearly.',
          '<strong>Real systems</strong> — start vertical, move horizontal at the seam between "this works on one box" and "we cannot afford an outage."'
        ] },

        { type: 'heading', text: 'Why statelessness matters', level: 2 },
        { type: 'para', html: 'You cannot horizontally scale a service that stores per-user data in its own memory. If user Alice\'s session lives only on Server A, then a load balancer that sends her next request to Server B cannot help her. The fix: make services <em>stateless</em> by pushing all session/user state to a shared store (Redis, the database) and authenticating each request from scratch via a token.' },
        { type: 'code', lang: 'text', code: `// STATEFUL — breaks horizontal scaling
Server A memory:  { alice -> { cart: [book, lamp] } }
  -> Alice MUST keep hitting Server A
  -> Server A dies = Alice's cart vanishes
  -> Load balancer needs "sticky sessions"

// STATELESS — scales freely
Auth token in cookie/header carries user identity
Cart lives in Redis keyed by user_id
  -> Any server handles any request
  -> Server dies = no user impact` },

        { type: 'callout', kind: 'warn', html: 'Sticky sessions feel like a quick fix but they re-introduce single-server fragility. Prefer stateless services + shared session store for any system you expect to scale.' },

        { type: 'heading', text: 'Auto-scaling', level: 2 },
        { type: 'para', html: 'Once your service is stateless, you can run it under an autoscaler (Kubernetes HPA, AWS ASG, etc.) that watches CPU or QPS and adds/removes instances automatically. Two knobs matter: the <strong>scale-up trigger</strong> (e.g., CPU &gt; 70% for 2 min) and the <strong>cool-down</strong> (don\'t flap up and down).' }
      ]
    },

    /* ============ Chapter 3 ============ */
    {
      id: 'hld-c3',
      title: 'Load Balancers',
      icon: '⚖️',
      sections: [
        { type: 'heading', text: 'Distributing the work', level: 1 },
        { type: 'para', html: 'A <strong>load balancer (LB)</strong> sits in front of a fleet of identical servers and decides which one handles each incoming request. It is the foundation of horizontal scaling: without it, clients would have to know about every backend, and you could never add or remove a server without breaking them.' },

        { type: 'heading', text: 'Layer 4 vs Layer 7', level: 2 },
        { type: 'para', html: 'Load balancers come in two flavors named after OSI layers. The choice changes what they can do.' },
        { type: 'list', kind: 'check', items: [
          '<strong>L4 (transport):</strong> sees only TCP/UDP packets — source IP, dest IP, ports. Very fast, very dumb. Cannot read HTTP. Examples: AWS NLB, HAProxy in TCP mode.',
          '<strong>L7 (application):</strong> reads the HTTP request. Can route by URL path, header, cookie. Can terminate TLS, rewrite paths, add headers. Slower than L4 but far more powerful. Examples: NGINX, Envoy, AWS ALB, Cloudflare.'
        ] },

        { type: 'image', alt: 'Load balancer topology',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.c{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.lb{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.s{fill:#dcfce7;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#a)}</style>
  <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="400" y="24" class="tb">Load balancer in front of stateless fleet</text>
<rect x="40" y="60" width="120" height="50" rx="6" class="c"/>
<text x="100" y="90" class="t">Client A</text>
<rect x="40" y="130" width="120" height="50" rx="6" class="c"/>
<text x="100" y="160" class="t">Client B</text>
<rect x="40" y="200" width="120" height="50" rx="6" class="c"/>
<text x="100" y="230" class="t">Client C</text>

<rect x="330" y="120" width="140" height="60" rx="10" class="lb"/>
<text x="400" y="148" class="tb">Load Balancer</text>
<text x="400" y="167" class="t">(round-robin)</text>

<rect x="620" y="40" width="140" height="50" rx="6" class="s"/>
<text x="690" y="70" class="t">Server 1</text>
<rect x="620" y="110" width="140" height="50" rx="6" class="s"/>
<text x="690" y="140" class="t">Server 2</text>
<rect x="620" y="180" width="140" height="50" rx="6" class="s"/>
<text x="690" y="210" class="t">Server 3</text>

<line x1="160" y1="85"  x2="330" y2="135" class="l"/>
<line x1="160" y1="155" x2="330" y2="150" class="l"/>
<line x1="160" y1="225" x2="330" y2="165" class="l"/>
<line x1="470" y1="135" x2="620" y2="65"  class="l"/>
<line x1="470" y1="150" x2="620" y2="135" class="l"/>
<line x1="470" y1="165" x2="620" y2="205" class="l"/>
</svg>` },

        { type: 'heading', text: 'Routing algorithms', level: 2 },
        { type: 'code', lang: 'text', code: `Round Robin         server 1, 2, 3, 1, 2, 3, ...  (simple, ignores load)
Least Connections   pick server with fewest active connections
Least Response Time pick the fastest-responding server right now
IP Hash             hash(clientIP) -> server  (consistent per client)
Weighted RR         bigger boxes get a proportionally bigger share
Sticky Session      cookie pins a client to one server (avoid if possible)` },

        { type: 'callout', kind: 'tip', html: 'When backends serve very different request durations (e.g., some endpoints upload large files), Round Robin queues work onto already-busy servers. <strong>Least Connections</strong> adapts to reality.' },

        { type: 'heading', text: 'What can fail?', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>The LB itself</strong> — single point of failure. Run multiple LBs behind a virtual IP (VIP) or DNS-level redundancy.',
          '<strong>Health checks</strong> — every LB pings backends regularly. A misconfigured health check can take all traffic to one box, or to none.',
          '<strong>Connection draining</strong> — when removing a backend, stop sending new requests but let in-flight ones finish, otherwise users see errors.',
          '<strong>Hot LBs</strong> — under enough scale even a beefy LB melts. Use DNS-based global LB to route to regional LBs.'
        ] }
      ]
    },

    /* ============ Chapter 4 ============ */
    {
      id: 'hld-c4',
      title: 'Caching',
      icon: '⚡',
      sections: [
        { type: 'heading', text: 'The single biggest performance lever', level: 1 },
        { type: 'para', html: 'A cache is a small, fast store that holds recently or frequently used data so you do not have to recompute it or refetch it from a slow source. In a real system there are caches at every layer — the browser, a CDN, a reverse proxy, an application cache, the database\'s buffer pool. Each one collapses a round trip somewhere.' },

        { type: 'image', alt: 'Layers of caching from client to DB',
          svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.bc{fill:#dcfce7;stroke:#166534;stroke-width:2}.bd{fill:#fde68a;stroke:#854d0e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:11px;text-anchor:middle;fill:#475569}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none}</style>
</defs>
<text x="400" y="24" class="tt">Caches along the request path</text>
<rect x="20" y="60" width="120" height="70" rx="8" class="b"/>
<text x="80" y="90" class="t">Browser</text>
<text x="80" y="110" class="tb">cache, HTTP TTL</text>
<rect x="170" y="60" width="120" height="70" rx="8" class="b"/>
<text x="230" y="90" class="t">CDN edge</text>
<text x="230" y="110" class="tb">geo-distributed</text>
<rect x="320" y="60" width="120" height="70" rx="8" class="bc"/>
<text x="380" y="90" class="t">Reverse proxy</text>
<text x="380" y="110" class="tb">NGINX/Varnish</text>
<rect x="470" y="60" width="120" height="70" rx="8" class="bc"/>
<text x="530" y="90" class="t">App / Redis</text>
<text x="530" y="110" class="tb">distributed KV</text>
<rect x="620" y="60" width="160" height="70" rx="8" class="bd"/>
<text x="700" y="90" class="t">Database</text>
<text x="700" y="110" class="tb">buffer pool, query cache</text>
<line x1="140" y1="95" x2="170" y2="95" class="l"/>
<line x1="290" y1="95" x2="320" y2="95" class="l"/>
<line x1="440" y1="95" x2="470" y2="95" class="l"/>
<line x1="590" y1="95" x2="620" y2="95" class="l"/>
<text x="400" y="180" class="t">Each layer reduces load on the layer to its right.</text>
<text x="400" y="205" class="tb">A hit at the browser saves the most. A hit in the DB buffer pool still beats disk by 100,000&times;.</text>
</svg>` },

        { type: 'heading', text: 'Write strategies', level: 2 },
        { type: 'code', lang: 'text', code: `Cache-aside (lazy load)            -- most common
  read:  cache miss -> load from DB -> populate cache
  write: write to DB -> invalidate cache key

Write-through                       -- strong consistency, slower writes
  write: app -> cache -> DB (sync)

Write-back / write-behind           -- fast writes, durability risk
  write: app -> cache; cache flushes to DB asynchronously` },

        { type: 'callout', kind: 'info', html: 'Cache-aside (lazy load) is the default. It tolerates cache loss gracefully — a cold cache just means a few slow reads while it warms up.' },

        { type: 'heading', text: 'Eviction policies', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>LRU</strong> (Least Recently Used) — drop the item nobody has touched in a while. Great default.',
          '<strong>LFU</strong> (Least Frequently Used) — drop the least-often-accessed. Good for skewed workloads with hot keys.',
          '<strong>FIFO</strong> — drop the oldest inserted. Simple, rarely the best.',
          '<strong>TTL</strong> — expire each key after N seconds. Time-based, ignores access pattern.'
        ] },

        { type: 'heading', text: 'A subtle hazard: stampedes', level: 2 },
        { type: 'para', html: 'When a hot key expires from the cache and 1,000 clients hit the miss simultaneously, all of them go to the database. That is a <strong>cache stampede</strong> (or "thundering herd"). Fixes:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Locking / single-flight</strong> — only one process per node refills the key; others wait',
          '<strong>Early refresh</strong> — refresh a key when it is 80% of its TTL, before it actually expires',
          '<strong>Jittered TTLs</strong> — randomize expiration so 1,000 keys do not all expire at once'
        ] },

        { type: 'heading', text: 'When NOT to cache', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Data that changes faster than your invalidation can keep up',
          'Per-user data with very low hit rate (you pay storage for nothing)',
          'Anything where stale reads are unsafe (e.g., authorization decisions)'
        ] },

        { type: 'callout', kind: 'warn', html: 'Phil Karlton: "There are only two hard things in Computer Science: cache invalidation and naming things." Getting invalidation wrong is the most common source of "why am I seeing old data?" bugs.' }
      ]
    },

    /* ============ Chapter 5 ============ */
    {
      id: 'hld-c5',
      title: 'CDN & Geo Distribution',
      icon: '🌍',
      sections: [
        { type: 'heading', text: 'Bringing data closer to users', level: 1 },
        { type: 'para', html: 'A <strong>Content Delivery Network</strong> (CDN) is a global mesh of edge servers called <strong>POPs</strong> (Points of Presence). When a user requests a file, the CDN routes them to the nearest POP. If the POP has the file cached, it serves it directly — no round trip to your origin server.' },
        { type: 'para', html: 'The fundamental physics is simple: the speed of light is a constant. A user in Sydney requesting from a US-East origin will see ~230ms round-trip latency, no matter how fast your code is. The same user hitting a Sydney POP sees ~10ms.' },

        { type: 'image', alt: 'CDN geo distribution',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.o{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.p{fill:#dcfce7;stroke:#166534;stroke-width:2}.u{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none;stroke-dasharray:4,3}.lf{stroke:#16a34a;stroke-width:2;fill:none}</style>
</defs>
<text x="400" y="24" class="tt">CDN: edge POPs near users</text>
<rect x="340" y="50" width="140" height="50" rx="8" class="o"/>
<text x="410" y="80" class="tb">Origin (US-East)</text>
<rect x="60" y="170" width="110" height="40" rx="6" class="p"/>
<text x="115" y="195" class="t">POP - SFO</text>
<rect x="220" y="170" width="110" height="40" rx="6" class="p"/>
<text x="275" y="195" class="t">POP - LHR</text>
<rect x="380" y="170" width="110" height="40" rx="6" class="p"/>
<text x="435" y="195" class="t">POP - FRA</text>
<rect x="540" y="170" width="110" height="40" rx="6" class="p"/>
<text x="595" y="195" class="t">POP - SIN</text>
<rect x="690" y="170" width="100" height="40" rx="6" class="p"/>
<text x="740" y="195" class="t">POP - SYD</text>
<line x1="410" y1="100" x2="115" y2="170" class="l"/>
<line x1="410" y1="100" x2="275" y2="170" class="l"/>
<line x1="410" y1="100" x2="435" y2="170" class="l"/>
<line x1="410" y1="100" x2="595" y2="170" class="l"/>
<line x1="410" y1="100" x2="740" y2="170" class="l"/>
<rect x="80" y="235" width="70" height="30" rx="4" class="u"/>
<text x="115" y="255" class="t">user SF</text>
<rect x="240" y="235" width="70" height="30" rx="4" class="u"/>
<text x="275" y="255" class="t">user UK</text>
<rect x="400" y="235" width="70" height="30" rx="4" class="u"/>
<text x="435" y="255" class="t">user DE</text>
<rect x="560" y="235" width="70" height="30" rx="4" class="u"/>
<text x="595" y="255" class="t">user SG</text>
<rect x="705" y="235" width="70" height="30" rx="4" class="u"/>
<text x="740" y="255" class="t">user AU</text>
<line x1="115" y1="235" x2="115" y2="210" class="lf"/>
<line x1="275" y1="235" x2="275" y2="210" class="lf"/>
<line x1="435" y1="235" x2="435" y2="210" class="lf"/>
<line x1="595" y1="235" x2="595" y2="210" class="lf"/>
<line x1="740" y1="235" x2="740" y2="210" class="lf"/>
</svg>` },

        { type: 'heading', text: 'What CDNs accelerate', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Static assets</strong> — images, JS, CSS, fonts, videos. Classic CDN job.',
          '<strong>Dynamic API responses</strong> — modern CDNs (Cloudflare, Fastly) cache short-TTL JSON.',
          '<strong>Edge compute</strong> — run small functions at the POP (auth, A/B tests, redirects).',
          '<strong>DDoS protection</strong> — absorb attacks at the edge before they reach your origin.'
        ] },

        { type: 'heading', text: 'Cache invalidation at the edge', level: 2 },
        { type: 'para', html: 'When you push a new version of <code>app.js</code>, edge POPs around the world are still serving the cached old version until its TTL expires. The standard fix is <strong>content-hashed filenames</strong>: ship <code>app.abc123.js</code> instead of <code>app.js</code>. A new build = new filename = no stale cache.' },
        { type: 'code', lang: 'html', code: `&lt;!-- old: every change risks stale cache --&gt;
&lt;script src="/static/app.js"&gt;&lt;/script&gt;

&lt;!-- new: hashed filename, can cache forever --&gt;
&lt;script src="/static/app.abc123.js"&gt;&lt;/script&gt;` },

        { type: 'callout', kind: 'warn', html: 'For files you cannot hash (e.g., the index.html itself), set short TTLs or use explicit purge APIs after each deploy.' },

        { type: 'heading', text: 'Geo-distribution beyond static content', level: 2 },
        { type: 'para', html: 'Truly global services replicate the <em>data</em> too, not just the assets. The most common pattern is <strong>per-region read replicas</strong> with a global primary for writes. For write-heavy globals (e.g., chat), you may use multi-region active-active with conflict resolution.' }
      ]
    },

    /* ============ Chapter 6 ============ */
    {
      id: 'hld-c6',
      title: 'Databases — SQL vs NoSQL',
      icon: '🗄️',
      sections: [
        { type: 'heading', text: 'Pick the right store', level: 1 },
        { type: 'para', html: 'Database choice is one of the most consequential calls in any HLD. The shorthand "SQL vs NoSQL" hides a richer landscape, but it is a useful first cut.' },

        { type: 'heading', text: 'SQL (relational)', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Examples: PostgreSQL, MySQL, Oracle, SQL Server',
          'Strict schema, enforced at the DB level',
          'Powerful <code>JOIN</code> for relational queries',
          '<strong>ACID</strong> transactions across multiple rows/tables',
          'Vertical-scaling-first; horizontal scaling possible but harder',
          'Sweet spot: financial systems, anything with strong invariants'
        ] },

        { type: 'heading', text: 'NoSQL families', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Document</strong> (MongoDB, Couchbase) — JSON-like docs, flexible schema, nested data',
          '<strong>Key-Value</strong> (Redis, DynamoDB, Memcached) — fastest reads/writes, simplest model',
          '<strong>Wide-column</strong> (Cassandra, HBase, ScyllaDB) — huge tables, time-series, write-heavy',
          '<strong>Graph</strong> (Neo4j, ArangoDB) — relationships are first-class (friend-of-friend, fraud rings)',
          '<strong>Search</strong> (Elasticsearch, OpenSearch) — full-text indexing + analytics'
        ] },

        { type: 'image', alt: 'DB family quadrant',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.q{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.qq{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.qqq{fill:#dcfce7;stroke:#166534;stroke-width:2}.qqqq{fill:#fce7f3;stroke:#9d174d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.s{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#1e293b}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}</style>
</defs>
<text x="400" y="24" class="tt">Common database families</text>
<rect x="40" y="50" width="180" height="200" rx="10" class="q"/>
<text x="130" y="80" class="t">Relational (SQL)</text>
<text x="130" y="115" class="s">Postgres, MySQL</text>
<text x="130" y="140" class="s">strict schema</text>
<text x="130" y="165" class="s">ACID, JOINs</text>
<text x="130" y="195" class="s">ledgers, billing,</text>
<text x="130" y="215" class="s">core records</text>
<rect x="235" y="50" width="180" height="200" rx="10" class="qq"/>
<text x="325" y="80" class="t">Document</text>
<text x="325" y="115" class="s">MongoDB</text>
<text x="325" y="140" class="s">flexible JSON</text>
<text x="325" y="165" class="s">nested data</text>
<text x="325" y="195" class="s">catalogs, content,</text>
<text x="325" y="215" class="s">user profiles</text>
<rect x="430" y="50" width="180" height="200" rx="10" class="qqq"/>
<text x="520" y="80" class="t">Wide-column</text>
<text x="520" y="115" class="s">Cassandra, HBase</text>
<text x="520" y="140" class="s">huge tables</text>
<text x="520" y="165" class="s">write-heavy</text>
<text x="520" y="195" class="s">timeseries,</text>
<text x="520" y="215" class="s">events, chat msgs</text>
<rect x="625" y="50" width="150" height="200" rx="10" class="qqqq"/>
<text x="700" y="80" class="t">Key-Value</text>
<text x="700" y="115" class="s">Redis, Dynamo</text>
<text x="700" y="140" class="s">simplest model</text>
<text x="700" y="165" class="s">fastest</text>
<text x="700" y="195" class="s">sessions,</text>
<text x="700" y="215" class="s">leaderboards</text>
</svg>` },

        { type: 'heading', text: 'ACID vs BASE', level: 2 },
        { type: 'para', html: 'These two acronyms summarize the consistency philosophies of the two families.' },
        { type: 'code', lang: 'text', code: `ACID  (typical SQL)
  Atomicity     all-or-nothing transactions
  Consistency   invariants always hold
  Isolation     concurrent transactions don't see each other's incomplete work
  Durability    once committed, survives a crash

BASE  (typical NoSQL)
  Basically Available     always responds, even if data is stale
  Soft state              state can change without input (replicas converge)
  Eventually consistent   reads MIGHT briefly lag writes, but converge` },

        { type: 'callout', kind: 'tip', html: 'A common pattern at scale: a SQL system of record (the truth) plus NoSQL caches/secondaries optimized for specific query patterns. You do not have to pick one.' },

        { type: 'heading', text: 'How to decide', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Default to a relational SQL DB. It is the most flexible, has the most tooling, and "boring" choices are good engineering.',
          'Reach for a document DB when your data has nested/flexible shape and you do not need cross-doc joins.',
          'Reach for wide-column (Cassandra) when writes are huge, queries are predictable, and access is by partition key.',
          'Reach for KV when latency must be sub-millisecond and the query pattern is "get/put by key."',
          'Reach for graph when traversals (friends-of-friends, recommendations) are the core workload.',
          'Reach for search (Elasticsearch) for full-text search and ad-hoc analytics.'
        ] }
      ]
    },

    /* ============ Chapter 7 ============ */
    {
      id: 'hld-c7',
      title: 'Sharding & Partitioning',
      icon: '🔪',
      sections: [
        { type: 'heading', text: 'When one DB box is not enough', level: 1 },
        { type: 'para', html: 'Once a single database server can no longer hold your data — or absorb your write traffic — you must split the data across multiple machines. The umbrella term is <strong>partitioning</strong>; when each partition lives on a separate node, we usually call it <strong>sharding</strong>.' },

        { type: 'heading', text: 'Sharding strategies', level: 2 },
        { type: 'code', lang: 'text', code: `Range sharding
  shard A: user_id  1..1,000,000
  shard B: user_id  1,000,001..2,000,000
  + simple, range scans work
  - hot shards (e.g., "today's writes" all go to one shard)

Hash sharding (modulo N)
  shard = hash(user_id) % N
  + even distribution
  - resharding is painful: changing N remaps almost everything

Consistent hashing
  hash users AND nodes onto a ring; user goes to next node clockwise
  + adding/removing a node moves only ~1/N of keys
  + the default choice for KV stores

Directory / lookup
  metadata service stores key -> shard mapping
  + flexible (any rule)
  - extra hop, the directory itself must be HA` },

        { type: 'image', alt: 'Consistent hashing ring',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.ring{fill:none;stroke:#475569;stroke-width:2}.n{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.k{fill:#fde68a;stroke:#854d0e;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.s{font-family:Inter,sans-serif;font-size:11px;text-anchor:middle;fill:#475569}</style>
</defs>
<text x="400" y="24" class="tt">Consistent hashing — keys and nodes on a ring</text>
<circle cx="400" cy="155" r="105" class="ring"/>
<circle cx="400" cy="50"  r="22" class="n"/>
<text x="400" y="55" class="t">Node A</text>
<circle cx="503" cy="180" r="22" class="n"/>
<text x="503" y="185" class="t">Node B</text>
<circle cx="350" cy="252" r="22" class="n"/>
<text x="350" y="257" class="t">Node C</text>
<circle cx="295" cy="120" r="22" class="n"/>
<text x="295" y="125" class="t">Node D</text>
<circle cx="453" cy="92" r="10" class="k"/>
<text x="453" y="75" class="s">key1</text>
<circle cx="513" cy="140" r="10" class="k"/>
<text x="535" y="135" class="s">key2</text>
<circle cx="320" cy="225" r="10" class="k"/>
<text x="320" y="245" class="s">key3</text>
<text x="400" y="275" class="s">A key goes to the FIRST node found by walking clockwise.</text>
</svg>` },

        { type: 'heading', text: 'Hot shards and resharding', level: 2 },
        { type: 'para', html: 'The most common sharding failure mode is the <strong>hot shard</strong> — one partition that absorbs disproportionate traffic. Causes:' },
        { type: 'list', kind: 'bullet', items: [
          'Range sharding on a monotonically growing key (timestamp, auto-increment ID)',
          'A celebrity user whose data dominates one shard',
          'A poorly chosen hash function that clusters real-world keys'
        ] },
        { type: 'para', html: 'Fixes: pick a better partition key, add a random prefix to time-based keys, or shard the celebrity to multiple shards explicitly.' },

        { type: 'callout', kind: 'tip', html: 'A great partition key is one where the access pattern is "by this key" and the load is roughly even across values. <code>user_id</code> for a social app: yes. <code>created_at</code> for a write-heavy app: almost always no.' },

        { type: 'heading', text: 'Cross-shard queries', level: 2 },
        { type: 'para', html: 'Once data is sharded, queries that need data from multiple shards become "scatter-gather": broadcast to all shards, collect results, merge. This is expensive and fragile. Two strategies to avoid it:' },
        { type: 'list', kind: 'check', items: [
          '<strong>Denormalize</strong> so the common query needs only one shard',
          '<strong>Secondary indexes</strong> that store data sharded by the alternate access pattern (read-optimized copies)'
        ] }
      ]
    },

    /* ============ Chapter 8 ============ */
    {
      id: 'hld-c8',
      title: 'Replication',
      icon: '👯',
      sections: [
        { type: 'heading', text: 'Multiple copies for HA and read throughput', level: 1 },
        { type: 'para', html: '<strong>Replication</strong> means keeping the same data on multiple nodes. Two motivations: <em>availability</em> (if one node dies, another can serve), and <em>read scaling</em> (route reads to replicas while writes go to the primary).' },

        { type: 'image', alt: 'Leader-follower replication',
          svg: `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.lead{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.foll{fill:#dcfce7;stroke:#166534;stroke-width:2}.app{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.w{stroke:#b91c1c;stroke-width:2;fill:none;marker-end:url(#aw)}.r{stroke:#166534;stroke-width:1.5;fill:none;marker-end:url(#ar)}.rep{stroke:#475569;stroke-width:1.5;stroke-dasharray:4,3;fill:none;marker-end:url(#arep)}</style>
  <marker id="aw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#b91c1c"/></marker>
  <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#166534"/></marker>
  <marker id="arep" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="400" y="24" class="tt">Leader-follower replication</text>
<rect x="40" y="100" width="140" height="60" rx="8" class="app"/>
<text x="110" y="125" class="tb">App tier</text>
<text x="110" y="148" class="t">reads + writes</text>
<rect x="280" y="50" width="160" height="60" rx="8" class="lead"/>
<text x="360" y="75" class="tb">Leader</text>
<text x="360" y="95" class="t">accepts all writes</text>
<rect x="550" y="20" width="180" height="50" rx="8" class="foll"/>
<text x="640" y="50" class="t">Follower 1 (read replica)</text>
<rect x="550" y="90" width="180" height="50" rx="8" class="foll"/>
<text x="640" y="120" class="t">Follower 2 (read replica)</text>
<rect x="550" y="160" width="180" height="50" rx="8" class="foll"/>
<text x="640" y="190" class="t">Follower 3 (read replica)</text>
<line x1="180" y1="115" x2="280" y2="80" class="w"/>
<text x="220" y="100" class="t">writes</text>
<line x1="180" y1="145" x2="550" y2="180" class="r"/>
<text x="320" y="180" class="t">reads (to followers)</text>
<line x1="440" y1="80" x2="550" y2="45" class="rep"/>
<line x1="440" y1="80" x2="550" y2="115" class="rep"/>
<line x1="440" y1="80" x2="550" y2="185" class="rep"/>
<text x="500" y="135" class="t">replication log</text>
</svg>` },

        { type: 'heading', text: 'Three replication models', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Leader-follower</strong> (primary-replica) — one node accepts writes, others replicate. Failover promotes a follower. Most RDBMS use this.',
          '<strong>Multi-leader</strong> — multiple nodes accept writes (often one per region). Conflicts must be resolved (last-write-wins, CRDTs, app-level merge).',
          '<strong>Leaderless</strong> (Dynamo-style) — any node accepts any write. Quorum reads/writes ensure consistency: W + R &gt; N. Cassandra and DynamoDB use this.'
        ] },

        { type: 'heading', text: 'Sync vs async replication', level: 2 },
        { type: 'code', lang: 'text', code: `Async (default for performance)
  Client write -> leader acks immediately -> replicate later
  + fast writes
  - if leader dies before replication, the write is lost

Sync (or quorum)
  Client write -> leader writes -> waits for K followers to ack -> reply
  + durable, no data loss on failover
  - higher write latency; if a follower is slow, everyone waits

Semi-sync (common compromise)
  Wait for AT LEAST ONE follower to ack before replying
  Bound the lag without paying the full sync cost` },

        { type: 'callout', kind: 'warn', html: 'Reads from followers can show <strong>replication lag</strong> — slightly stale data. Watch for "read your own writes" bugs: a user who posts a comment may not see it on the next page load if their next request hits a lagged follower. Fix: read your own writes from the leader for a short window.' },

        { type: 'heading', text: 'Failover', level: 2 },
        { type: 'para', html: 'When the leader dies, the cluster must elect a new one. Stages:' },
        { type: 'list', kind: 'numbered', items: [
          'A heartbeat / health-check detects the leader is gone',
          'The cluster manager picks the follower with the most up-to-date replication log',
          'That follower is promoted to leader',
          'Clients (or proxy/DNS) are reconfigured to point to the new leader',
          'Old leader, if it comes back, becomes a follower'
        ] },
        { type: 'para', html: 'This sounds simple. In reality, "split-brain" (two nodes both think they are the leader) is a constant hazard. Production systems lean on consensus algorithms (Raft, Paxos) to make this safe.' }
      ]
    },

    /* ============ Chapter 9 ============ */
    {
      id: 'hld-c9',
      title: 'CAP Theorem & Consistency',
      icon: '🔺',
      sections: [
        { type: 'heading', text: 'The fundamental tradeoff', level: 1 },
        { type: 'para', html: 'The CAP theorem (Brewer, 2000) states that in a distributed system you can pick only two of three properties at any given moment: <strong>Consistency</strong>, <strong>Availability</strong>, and <strong>Partition tolerance</strong>.' },
        { type: 'list', kind: 'check', items: [
          '<strong>C — Consistency</strong>: every read sees the most recent write (linearizable)',
          '<strong>A — Availability</strong>: every request gets a non-error response',
          '<strong>P — Partition tolerance</strong>: the system keeps working even when the network between nodes splits'
        ] },

        { type: 'image', alt: 'CAP triangle',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.tri{fill:none;stroke:#1e293b;stroke-width:2}.v{fill:#1e293b}.t{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.s{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#475569}.tt{font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle;fill:#0f172a}</style>
</defs>
<text x="400" y="24" class="tt">CAP — pick two during a partition</text>
<polygon points="400,60 250,240 550,240" class="tri"/>
<circle cx="400" cy="60" r="6" class="v"/>
<text x="400" y="50" class="t">C - Consistency</text>
<circle cx="250" cy="240" r="6" class="v"/>
<text x="220" y="265" class="t">A - Availability</text>
<circle cx="550" cy="240" r="6" class="v"/>
<text x="585" y="265" class="t">P - Partition tolerance</text>
<text x="325" y="155" class="s">CP (HBase, MongoDB majority)</text>
<text x="475" y="155" class="s">AP (Cassandra, Dynamo)</text>
<text x="400" y="195" class="s">CA: single-node only (no real distributed system)</text>
</svg>` },

        { type: 'para', html: 'In practice, network partitions are a fact of life — cables fail, switches reboot, regions become unreachable. So P is non-negotiable for any real distributed system. The real choice is <strong>C vs A during a partition</strong>:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>CP system</strong> — when partitioned, refuse some writes/reads to preserve consistency. Banking, coordination services (ZooKeeper, etcd).',
          '<strong>AP system</strong> — when partitioned, keep accepting writes; reconcile later. Social feeds, shopping carts, anything where "eventually right" is fine.'
        ] },

        { type: 'heading', text: 'Consistency models, strong to weak', level: 2 },
        { type: 'code', lang: 'text', code: `Linearizable / Strong   appears atomic, in real-time order
                        most expensive, hardest to scale
                        e.g., Spanner, ZooKeeper

Sequential              all nodes see writes in the same order, but
                        not necessarily real-time

Causal                  if A happened-before B, all nodes see A before B
                        does NOT order independent operations

Read-your-writes        a user sees their own writes on next read

Monotonic reads         once you read a value, you won't see an older one

Eventual                replicas converge eventually; no order guarantee` },

        { type: 'callout', kind: 'info', html: 'PACELC extends CAP: even when there is NO partition, you trade <strong>L</strong>atency for <strong>C</strong>onsistency. A system that synchronously replicates to 3 regions is consistent but slow; one that replicates async is fast but eventually consistent.' },

        { type: 'heading', text: 'Quorums in leaderless systems', level: 2 },
        { type: 'para', html: 'Leaderless databases use the formula <strong>W + R &gt; N</strong> for strong consistency. With N=3 replicas:' },
        { type: 'list', kind: 'check', items: [
          '<strong>W=3, R=1</strong> — writes wait for all, reads are fast (but any node down = no writes)',
          '<strong>W=1, R=3</strong> — writes are fast, reads must contact all (fragile if any read replica is slow)',
          '<strong>W=2, R=2</strong> — balanced quorum, most common default'
        ] }
      ]
    },

    /* ============ Chapter 10 ============ */
    {
      id: 'hld-c10',
      title: 'Message Queues & Event-Driven',
      icon: '📬',
      sections: [
        { type: 'heading', text: 'Decoupling with messages', level: 1 },
        { type: 'para', html: 'A <strong>message queue</strong> is a durable buffer between producers and consumers. Once it sits in the middle, neither side needs to know the other exists, or even be online at the same time. This is the single most useful pattern for decoupling services in a large system.' },

        { type: 'image', alt: 'Producer queue consumer topology',
          svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.p{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.q{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.c{fill:#dcfce7;stroke:#166534;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#a)}.msg{fill:#fde68a;stroke:#854d0e;stroke-width:1}</style>
  <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="400" y="24" class="tt">Producer -&gt; Queue -&gt; Consumer(s)</text>
<rect x="40" y="80" width="130" height="50" rx="8" class="p"/>
<text x="105" y="110" class="tb">Producer</text>
<rect x="270" y="60" width="260" height="100" rx="10" class="q"/>
<text x="400" y="85" class="tb">Queue / Topic</text>
<rect x="300" y="100" width="35" height="35" rx="4" class="msg"/>
<rect x="345" y="100" width="35" height="35" rx="4" class="msg"/>
<rect x="390" y="100" width="35" height="35" rx="4" class="msg"/>
<rect x="435" y="100" width="35" height="35" rx="4" class="msg"/>
<rect x="480" y="100" width="35" height="35" rx="4" class="msg"/>
<rect x="630" y="40" width="130" height="50" rx="8" class="c"/>
<text x="695" y="70" class="t">Consumer A</text>
<rect x="630" y="105" width="130" height="50" rx="8" class="c"/>
<text x="695" y="135" class="t">Consumer B</text>
<rect x="630" y="170" width="130" height="50" rx="8" class="c"/>
<text x="695" y="200" class="t">Consumer C</text>
<line x1="170" y1="105" x2="270" y2="105" class="l"/>
<line x1="530" y1="105" x2="630" y2="65" class="l"/>
<line x1="530" y1="105" x2="630" y2="130" class="l"/>
<line x1="530" y1="105" x2="630" y2="195" class="l"/>
</svg>` },

        { type: 'heading', text: 'Queue vs pub-sub', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Queue (point-to-point):</strong> each message is delivered to exactly ONE consumer. Multiple consumers = work distribution. Examples: RabbitMQ, AWS SQS.',
          '<strong>Pub-Sub (topic):</strong> each subscriber receives EVERY message. Used for fan-out. Examples: Kafka topics, AWS SNS, Google Pub/Sub.'
        ] },

        { type: 'heading', text: 'Kafka — the distributed log', level: 2 },
        { type: 'para', html: 'Kafka deserves its own paragraph. It is not really a queue — it is an <em>append-only, partitioned log</em>. Each topic is split into partitions; producers append, and each consumer tracks its own <strong>offset</strong> per partition. This unlocks:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Replay</strong> — consumers can seek backwards and reprocess history',
          '<strong>Parallelism</strong> — partitions are the unit of parallelism (one consumer per partition in a group)',
          '<strong>Durability</strong> — messages persist for the retention period regardless of who has read them',
          '<strong>Decoupled speed</strong> — slow consumers do not block fast producers'
        ] },
        { type: 'code', lang: 'text', code: `Topic: user-events  (partitioned by user_id)
  partition 0: [ev1, ev2, ev3, ev4, ev5, ev6, ...]
  partition 1: [ev7, ev8, ev9, ev10, ev11, ...]
  partition 2: [ev12, ev13, ev14, ev15, ...]

Consumer group A  (3 consumers):
  consumer A0 -> partition 0
  consumer A1 -> partition 1
  consumer A2 -> partition 2
  Scaling beyond N consumers in a group is wasted: idle consumers.` },

        { type: 'callout', kind: 'tip', html: 'Number of partitions is your max parallelism per consumer group. Pick a number you might double later — re-partitioning is doable but disruptive.' },

        { type: 'heading', text: 'When to introduce a queue', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Burst smoothing — producers spike well above consumer capacity',
          'Async work — "the email has been queued, we will send shortly"',
          'Decoupling — service A no longer needs to know B, C, D exist',
          'Reliable retries — failed processing returns the message to the queue',
          'Event sourcing / audit — Kafka topics become the immutable history of the system'
        ] },

        { type: 'callout', kind: 'warn', html: 'Queues introduce eventual consistency. Once you put "send email" on a queue, it is no longer synchronous with the user\'s request. Design your UI around that ("email is on its way") instead of pretending it is sync.' }
      ]
    },

    /* ============ Chapter 11 ============ */
    {
      id: 'hld-c11',
      title: 'Microservices vs Monolith',
      icon: '🧩',
      sections: [
        { type: 'heading', text: 'A spectrum, not a binary', level: 1 },
        { type: 'para', html: 'You can build a system as one big deployable (a <strong>monolith</strong>) or as many small services (<strong>microservices</strong>). Most successful systems are somewhere in the middle: a well-modularized core plus a handful of specialized services around it.' },

        { type: 'image', alt: 'Monolith vs microservices',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.m{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.s{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.db{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none}</style>
</defs>
<text x="200" y="24" class="tt">Monolith</text>
<rect x="60" y="50" width="280" height="180" rx="10" class="m"/>
<text x="200" y="80" class="tb">App (single process)</text>
<rect x="90" y="100" width="100" height="30" rx="4" class="s"/>
<text x="140" y="120" class="t">Users</text>
<rect x="200" y="100" width="100" height="30" rx="4" class="s"/>
<text x="250" y="120" class="t">Orders</text>
<rect x="90" y="140" width="100" height="30" rx="4" class="s"/>
<text x="140" y="160" class="t">Payments</text>
<rect x="200" y="140" width="100" height="30" rx="4" class="s"/>
<text x="250" y="160" class="t">Inventory</text>
<rect x="140" y="190" width="120" height="30" rx="4" class="db"/>
<text x="200" y="210" class="t">One database</text>

<text x="600" y="24" class="tt">Microservices</text>
<rect x="445" y="55" width="105" height="40" rx="6" class="s"/>
<text x="497" y="80" class="t">Users svc</text>
<rect x="565" y="55" width="105" height="40" rx="6" class="s"/>
<text x="617" y="80" class="t">Orders svc</text>
<rect x="685" y="55" width="105" height="40" rx="6" class="s"/>
<text x="737" y="80" class="t">Payments svc</text>
<rect x="445" y="115" width="105" height="40" rx="6" class="s"/>
<text x="497" y="140" class="t">Inventory svc</text>
<rect x="565" y="115" width="105" height="40" rx="6" class="s"/>
<text x="617" y="140" class="t">Search svc</text>
<rect x="685" y="115" width="105" height="40" rx="6" class="s"/>
<text x="737" y="140" class="t">Notification</text>
<rect x="445" y="180" width="105" height="30" rx="4" class="db"/>
<text x="497" y="200" class="t">users DB</text>
<rect x="565" y="180" width="105" height="30" rx="4" class="db"/>
<text x="617" y="200" class="t">orders DB</text>
<rect x="685" y="180" width="105" height="30" rx="4" class="db"/>
<text x="737" y="200" class="t">payments DB</text>
<text x="617" y="245" class="t">Each service owns its data; comms via HTTP/gRPC/queues.</text>
</svg>` },

        { type: 'heading', text: 'When monoliths are right', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Small team (under ~30 engineers)',
          'Product still finding its shape — boundaries will change',
          'Need ACID transactions across many domains',
          'Operational simplicity matters more than independent scaling'
        ] },

        { type: 'heading', text: 'When microservices are right', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Multiple teams that need to deploy independently',
          'Some component has wildly different scaling needs (video transcoding, search)',
          'Tech diversity is a real benefit (Go for one part, Python for ML)',
          'You can afford the observability + ops investment'
        ] },

        { type: 'heading', text: 'The hidden costs of microservices', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Network in place of method calls</strong> — every cross-service interaction is now subject to latency, timeouts, retries',
          '<strong>Distributed transactions</strong> — you cannot wrap things in a SQL transaction across services; sagas, eventual consistency, idempotency keys take over',
          '<strong>Observability cost</strong> — you need distributed tracing, centralized logs, and per-service metrics from day one',
          '<strong>Versioning</strong> — service A and service B deploy independently; API contracts must be backwards-compatible',
          '<strong>Org overhead</strong> — teams, on-call, ownership boundaries'
        ] },

        { type: 'callout', kind: 'warn', html: 'Splitting a monolith too early creates a "distributed monolith" — services that must deploy together. Worst of both worlds. Wait for real seams to emerge from real pain.' },

        { type: 'heading', text: 'Common patterns when you go microservices', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>API Gateway</strong> — single entry point, auth, rate-limit, routing',
          '<strong>Service discovery</strong> — Consul, Eureka, Kubernetes DNS',
          '<strong>Circuit breakers</strong> — stop calling failing dependencies',
          '<strong>Saga pattern</strong> — long-running multi-service workflows with compensating actions',
          '<strong>BFF (Backend-for-Frontend)</strong> — a thin gateway tailored to each client (web, mobile)'
        ] }
      ]
    },

    /* ============ Chapter 12 ============ */
    {
      id: 'hld-c12',
      title: 'Designing a URL Shortener',
      icon: '🔗',
      sections: [
        { type: 'heading', text: 'TinyURL / bit.ly — the canonical HLD warm-up', level: 1 },
        { type: 'para', html: 'A URL shortener is the first HLD problem you should be able to do in your sleep. It exercises almost every concept — APIs, data model, scale estimation, caching, sharding, redirects — without too much business complexity.' },

        { type: 'heading', text: 'Requirements', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Functional: <code>POST /shorten {long_url}</code> returns a short URL; <code>GET /{code}</code> redirects to the long URL',
          'Functional: optional custom alias, expiry, click analytics',
          'Non-functional: 100M new URLs/day, ~10:1 read:write ratio (~12K reads/s), p99 latency &lt; 50ms globally',
          'Non-functional: URLs never lost; codes never reused'
        ] },

        { type: 'heading', text: 'Scale math', level: 2 },
        { type: 'code', lang: 'text', code: `Writes  100M / day  ~ 1.2K writes/sec
Reads   10x = 12K reads/sec
Storage  100M * (long URL ~ 500 B + code 7 B + meta) ~ 50-60 GB/day
         ~ 22 TB / year   (single beefy DB can hold that, but...)
Read working set    far less - reads concentrate on recent URLs (cacheable)` },

        { type: 'heading', text: 'API', level: 2 },
        { type: 'code', lang: 'text', code: `POST /api/v1/shorten
  body: { long_url: "https://...", custom_alias?: "abc", expiry?: "..." }
  -> 201 { short_url: "https://tn.url/abc123" }

GET /{code}
  -> 301 Location: https://...long-url...` },

        { type: 'heading', text: 'Generating short codes', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Counter + base62</strong> — auto-increment ID encoded in [0-9a-zA-Z]. Predictable, low collision. Issue: the counter is a single point of contention.',
          '<strong>Pre-allocated ranges</strong> — each app server grabs a range of 10,000 IDs at a time from a central counter, eliminating contention.',
          '<strong>Random 7-char base62</strong> — 62^7 &approx; 3.5 trillion codes. Collisions handled by DB unique constraint + retry.',
          '<strong>Hash of long URL</strong> — saves storage if same URL is shortened twice. Collision handling needed.'
        ] },

        { type: 'heading', text: 'Architecture', level: 2 },
        { type: 'image', alt: 'URL shortener architecture',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#dbeafe;stroke:#1e3a8a;stroke-width:2}.c{fill:#dcfce7;stroke:#166534;stroke-width:2}.d{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.q{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:13px;font-weight:700;text-anchor:middle;fill:#0f172a}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.l{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#a2)}</style>
  <marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="400" y="24" class="tt">URL shortener — request path</text>
<rect x="20" y="100" width="100" height="50" rx="8" class="b"/>
<text x="70" y="130" class="t">Client</text>
<rect x="160" y="100" width="100" height="50" rx="8" class="b"/>
<text x="210" y="125" class="tb">L7 LB / CDN</text>
<text x="210" y="142" class="t">+ rate limit</text>
<rect x="300" y="100" width="120" height="50" rx="8" class="b"/>
<text x="360" y="125" class="tb">App service</text>
<text x="360" y="142" class="t">(stateless)</text>
<rect x="460" y="40" width="120" height="50" rx="8" class="c"/>
<text x="520" y="65" class="tb">Redis cache</text>
<text x="520" y="80" class="t">code -&gt; URL</text>
<rect x="460" y="170" width="120" height="50" rx="8" class="d"/>
<text x="520" y="195" class="tb">KV / SQL store</text>
<text x="520" y="210" class="t">sharded by code</text>
<rect x="620" y="100" width="150" height="50" rx="8" class="q"/>
<text x="695" y="125" class="tb">Kafka -&gt; analytics</text>
<text x="695" y="142" class="t">async click events</text>
<line x1="120" y1="125" x2="160" y2="125" class="l"/>
<line x1="260" y1="125" x2="300" y2="125" class="l"/>
<line x1="420" y1="115" x2="460" y2="75" class="l"/>
<line x1="420" y1="135" x2="460" y2="180" class="l"/>
<line x1="420" y1="125" x2="620" y2="125" class="l"/>
</svg>` },

        { type: 'heading', text: 'Data model', level: 2 },
        { type: 'code', lang: 'sql', code: `<span class="kw">CREATE TABLE</span> urls (
  code         <span class="ty">VARCHAR</span>(<span class="num">10</span>) <span class="kw">PRIMARY KEY</span>,
  long_url     <span class="ty">TEXT</span> <span class="kw">NOT NULL</span>,
  user_id      <span class="ty">BIGINT</span>,
  created_at   <span class="ty">TIMESTAMPTZ</span> <span class="kw">NOT NULL</span> <span class="kw">DEFAULT</span> <span class="fn">now</span>(),
  expires_at   <span class="ty">TIMESTAMPTZ</span>
);
<span class="com">-- shard by hash(code)</span>` },

        { type: 'heading', text: 'Why this scales', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Stateless app tier</strong> behind an L7 LB — horizontal autoscaling',
          '<strong>Redis cache</strong> hits ~99% of reads — DB sees a tiny fraction',
          '<strong>Hash-sharded KV store</strong> spreads writes evenly; consistent hashing makes resharding tolerable',
          '<strong>CDN</strong> with cache-control on 301s can serve hot codes entirely at the edge',
          '<strong>Async analytics</strong> via Kafka — click counting never blocks the redirect'
        ] },

        { type: 'callout', kind: 'tip', html: 'Hot path optimization: serve <code>GET /{code}</code> from the CDN with a short TTL. A popular short URL never even hits your origin.' }
      ]
    },

    /* ============ Chapter 13 ============ */
    {
      id: 'hld-c13',
      title: 'Reliability & Observability',
      icon: '🛡️',
      sections: [
        { type: 'heading', text: 'Design for failure, not for the happy path', level: 1 },
        { type: 'para', html: 'Every component in a real system will fail. Drives die, networks partition, deploys go bad. A reliable system is not one that does not fail — it is one that <em>contains</em> failure so that one bad component does not take down the rest.' },

        { type: 'heading', text: 'Retries done right', level: 2 },
        { type: 'para', html: 'Retrying a failed network call is correct — but only with care. Naive retries can amplify outages into self-DDoS.' },
        { type: 'list', kind: 'check', items: [
          '<strong>Exponential backoff</strong> — wait 1s, 2s, 4s, 8s between attempts (don\'t hammer at constant rate)',
          '<strong>Jitter</strong> — add randomness to the delay so 1,000 clients don\'t retry in lockstep',
          '<strong>Cap retries</strong> — at some point, fail loudly instead of forever',
          '<strong>Retry only idempotent operations</strong> (or pass an idempotency key)'
        ] },

        { type: 'heading', text: 'Idempotency keys', level: 2 },
        { type: 'para', html: 'A network blip during a payment can leave you in a horrible state: did the charge go through or not? Solve it with <strong>idempotency keys</strong>:' },
        { type: 'code', lang: 'text', code: `Client generates a UUID, sends:
  POST /payments
  Idempotency-Key: 1f2c-3a-9b-...
  body: { amount: 50.00, ... }

Server:
  1. Look up the key. If found, return the previous result.
  2. Otherwise, do the work, store result keyed by the idempotency key, return it.

Now retries are safe. A duplicate request just returns the same result.` },

        { type: 'heading', text: 'Circuit breakers', level: 2 },
        { type: 'para', html: 'When a downstream dependency is unhealthy, retrying makes things worse. A <strong>circuit breaker</strong> wraps the call and tracks failure rate. It has three states:' },
        { type: 'image', alt: 'Circuit breaker states',
          svg: `<svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.cl{fill:#dcfce7;stroke:#166534;stroke-width:2}.op{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.ho{fill:#fef3c7;stroke:#854d0e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle;fill:#0f172a}.s{font-family:Inter,sans-serif;font-size:11px;text-anchor:middle;fill:#475569}.tt{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle;fill:#0f172a}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#a3)}</style>
  <marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="400" y="24" class="tt">Circuit breaker states</text>
<rect x="40" y="80" width="180" height="80" rx="10" class="cl"/>
<text x="130" y="115" class="tb">CLOSED</text>
<text x="130" y="138" class="t">calls flow through</text>
<rect x="300" y="80" width="180" height="80" rx="10" class="op"/>
<text x="390" y="115" class="tb">OPEN</text>
<text x="390" y="138" class="t">fail fast</text>
<rect x="560" y="80" width="200" height="80" rx="10" class="ho"/>
<text x="660" y="115" class="tb">HALF-OPEN</text>
<text x="660" y="138" class="t">trial probe allowed</text>
<line x1="220" y1="120" x2="300" y2="120" class="arr"/>
<text x="260" y="105" class="s">failures &gt; threshold</text>
<line x1="480" y1="120" x2="560" y2="120" class="arr"/>
<text x="520" y="105" class="s">cooldown</text>
<line x1="660" y1="160" x2="130" y2="160" class="arr"/>
<text x="400" y="180" class="s">probe succeeds -&gt; CLOSED</text>
</svg>` },

        { type: 'heading', text: 'Timeouts and bulkheads', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Every</strong> network call needs a timeout. No timeout = the slow dependency exhausts your threads.',
          '<strong>Bulkheads</strong> isolate failure: separate thread pools / connection pools per downstream service so one bad dep doesn\'t starve the rest.',
          '<strong>Graceful degradation</strong> — when a non-critical dependency is down, return a partial response instead of an error.'
        ] },

        { type: 'heading', text: 'The three pillars of observability', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Metrics</strong> — numeric time-series (QPS, p99 latency, error rate). Prometheus + Grafana.',
          '<strong>Logs</strong> — structured, queryable event streams. ELK, Loki, Datadog.',
          '<strong>Traces</strong> — follow ONE request across many services. OpenTelemetry, Jaeger.'
        ] },

        { type: 'callout', kind: 'info', html: 'Google\'s "four golden signals" to alert on: <strong>latency, traffic, errors, saturation</strong>. If you watch these four per service, you catch almost every real-user-impacting issue.' },

        { type: 'heading', text: 'SLI, SLO, SLA', level: 2 },
        { type: 'code', lang: 'text', code: `SLI  Service Level Indicator    measured: e.g., % of requests under 200ms
SLO  Service Level Objective    your INTERNAL target: e.g., 99.9% under 200ms over 30d
SLA  Service Level Agreement    your contractual promise to customers (always weaker than SLO)

The gap between SLO and SLA is your error budget for surprises.` },

        { type: 'callout', kind: 'tip', html: 'Aim higher internally than what you promise externally. An SLO of 99.95% with an SLA of 99.9% gives engineering room to ship without burning the customer.' },

        { type: 'heading', text: 'Closing thought', level: 2 },
        { type: 'para', html: 'Every HLD topic in this course — caching, replication, sharding, queues, gateways — earns its place by making the system either <em>faster</em>, <em>bigger</em>, or <em>more reliable</em> than a single-box version. Internalize the tradeoffs and you can compose them to design almost anything.' }
      ]
    }

  ]
});

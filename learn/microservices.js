LEARN('microservices', {
  intro: 'A focused tour of microservices architecture — why, when, and how to build systems as small, independently-deployable services without recreating a monolith over the wire.',
  chapters: [

    /* ============ Chapter 1 — Monolith vs Microservices ============ */
    {
      id: 'ms-c1',
      title: 'Monolith vs Microservices',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'Two ends of a spectrum', level: 1 },
        { type: 'para', html: 'Every backend system sits somewhere on a spectrum. On one end: a <strong>monolith</strong> — a single deployable that owns one process and (usually) one database. On the other: <strong>microservices</strong> — many small, independently-deployed services that talk over a network.' },
        { type: 'para', html: 'Neither is inherently "better". Choosing well means understanding what each architecture costs you and what it buys.' },

        { type: 'image', alt: 'Monolith vs microservices side by side',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;font-size:20px;font-weight:700;fill:#0f172a;text-anchor:middle}.bx{fill:#fef3c7;stroke:#92400e;stroke-width:2}.mod{fill:#fde68a;stroke:#92400e;stroke-width:1}.svc{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.db{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.lbl{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.line{fill:none;stroke:#64748b;stroke-width:1.5}</style>
</defs>
<text x="200" y="28" class="t">Monolith</text>
<rect x="40" y="50" width="320" height="170" rx="10" class="bx"/>
<rect x="55" y="65" width="135" height="40" rx="6" class="mod"/><text x="122" y="90" class="lbl">Orders</text>
<rect x="210" y="65" width="135" height="40" rx="6" class="mod"/><text x="277" y="90" class="lbl">Catalog</text>
<rect x="55" y="115" width="135" height="40" rx="6" class="mod"/><text x="122" y="140" class="lbl">Users</text>
<rect x="210" y="115" width="135" height="40" rx="6" class="mod"/><text x="277" y="140" class="lbl">Payments</text>
<rect x="55" y="165" width="290" height="40" rx="6" class="mod"/><text x="200" y="190" class="lbl">Shared in-process calls — one deploy</text>
<rect x="130" y="230" width="140" height="35" rx="8" class="db"/><text x="200" y="253" class="lbl">single shared DB</text>

<text x="620" y="28" class="t">Microservices</text>
<rect x="450" y="55" width="100" height="45" rx="8" class="svc"/><text x="500" y="82" class="lbl">Orders</text>
<rect x="565" y="55" width="100" height="45" rx="8" class="svc"/><text x="615" y="82" class="lbl">Catalog</text>
<rect x="680" y="55" width="100" height="45" rx="8" class="svc"/><text x="730" y="82" class="lbl">Payments</text>
<rect x="450" y="125" width="100" height="45" rx="8" class="svc"/><text x="500" y="152" class="lbl">Users</text>
<rect x="565" y="125" width="100" height="45" rx="8" class="svc"/><text x="615" y="152" class="lbl">Shipping</text>
<rect x="680" y="125" width="100" height="45" rx="8" class="svc"/><text x="730" y="152" class="lbl">Inventory</text>
<rect x="445" y="195" width="110" height="30" rx="6" class="db"/><text x="500" y="215" class="lbl">orders-db</text>
<rect x="560" y="195" width="110" height="30" rx="6" class="db"/><text x="615" y="215" class="lbl">catalog-db</text>
<rect x="675" y="195" width="110" height="30" rx="6" class="db"/><text x="730" y="215" class="lbl">payments-db</text>
<line x1="500" y1="100" x2="500" y2="195" class="line"/>
<line x1="615" y1="100" x2="615" y2="195" class="line"/>
<line x1="730" y1="100" x2="730" y2="195" class="line"/>
<line x1="550" y1="78" x2="565" y2="78" class="line"/>
<line x1="665" y1="78" x2="680" y2="78" class="line"/>
<line x1="550" y1="148" x2="565" y2="148" class="line"/>
<line x1="665" y1="148" x2="680" y2="148" class="line"/>
<text x="615" y="260" class="lbl">each service owns its data</text>
</svg>` },

        { type: 'heading', text: 'What you trade', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Monolith strengths</strong> — one repo, one deploy, in-process calls (fast and reliable), simple ACID transactions, easy to step through with a debugger',
          '<strong>Monolith pains at scale</strong> — teams blocked on each other\'s releases, the whole app scales as one unit, one bad commit can take everything down',
          '<strong>Microservices strengths</strong> — teams deploy independently, services scale independently, polyglot stacks are possible, fault isolation is achievable',
          '<strong>Microservices costs</strong> — network latency between every call, partial failure to handle, distributed transactions are hard, you need real observability and CI/CD before you start'
        ] },

        { type: 'heading', text: 'A common misread', level: 2 },
        { type: 'callout', kind: 'warn', html: '"Microservices are faster" is usually false. A monolith calling its own modules in-process is roughly free; a microservice calling another service costs network, serialization, and one more failure mode. Microservices are about <em>organizational</em> speed (independent teams, independent deploys), not raw request speed.' },

        { type: 'heading', text: 'When microservices pay off', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You have multiple teams that are blocked on each other\'s deploy cadence',
          'One module needs to scale dramatically more (or less) than the rest',
          'Different modules have different reliability and compliance needs (payments vs search)',
          'Different parts genuinely benefit from different tech (e.g., a Python ML service alongside a JVM payments service)',
          'The codebase has grown beyond what any single team can hold in their head'
        ] },

        { type: 'heading', text: 'When to stay with the monolith', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Small team (under ~5 engineers) and a young product',
          'You don\'t yet have CI/CD, centralized logs, metrics, or tracing',
          'Your bounded contexts aren\'t clear — splitting blindly creates the wrong seams',
          'You can\'t cite a concrete pain microservices would solve'
        ] },

        { type: 'callout', kind: 'tip', html: 'A great default: build a <strong>well-modularized monolith</strong> first. Strong internal module boundaries make it cheap to extract microservices later — and many products never need to.' }
      ]
    },

    /* ============ Chapter 2 — Service Boundaries ============ */
    {
      id: 'ms-c2',
      title: 'Service Boundaries (DDD)',
      icon: '🧭',
      sections: [
        { type: 'heading', text: 'Drawing the lines well', level: 1 },
        { type: 'para', html: 'The single biggest predictor of a successful microservices system is whether the boundaries were drawn well. Bad boundaries mean services constantly need to call each other to do anything useful — you end up with a chatty, fragile mesh.' },

        { type: 'heading', text: 'Bounded contexts', level: 2 },
        { type: 'para', html: 'A <strong>bounded context</strong> (from Domain-Driven Design) is a region of the model where a term has one consistent meaning. Outside that region, the same word may mean something subtly different.' },
        { type: 'code', lang: 'js', code: `<span class="com">// Same word "Customer" — different shapes per context</span>
Billing.Customer  = { id, billingAddress, paymentMethod, taxId };
Shipping.Customer = { id, deliveryAddress, deliveryWindow };
Support.Customer  = { id, tier, openTickets, csat };

<span class="com">// Trying to unify into ONE giant Customer object is the bug.</span>
<span class="com">// Each context only needs its own slice.</span>` },

        { type: 'heading', text: 'How to find boundaries', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Event storming</strong> — gather domain experts, write every business event on a sticky note, group by causality. Clusters become candidate services.',
          '<strong>Follow the data ownership</strong> — who is the source of truth for this entity? That team is the natural owner of that service.',
          '<strong>Watch for verbs vs nouns</strong> — services usually own a <em>capability</em>, not just a noun. "Shipping" beats "Address".',
          '<strong>Check the team topology</strong> — if two teams constantly disagree on a service\'s direction, the boundary is in the wrong place.'
        ] },

        { type: 'heading', text: 'Strangler fig: decomposing a monolith', level: 2 },
        { type: 'para', html: 'Big-bang rewrites of monoliths into microservices have a terrible track record. The <strong>strangler fig pattern</strong> (named by Martin Fowler after a vine that slowly takes over its host tree) is the realistic path:' },

        { type: 'image', alt: 'Strangler fig migration diagram',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;text-anchor:middle}.b{fill:#fef3c7;stroke:#92400e;stroke-width:2}.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.gw{fill:#dcfce7;stroke:#15803d;stroke-width:2}.cli{fill:#fce7f3;stroke:#be185d;stroke-width:2}.h{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.l{fill:none;stroke:#475569;stroke-width:1.5}</style></defs>
<text x="130" y="25" class="h">Step 1 — gateway in front</text>
<rect x="40" y="50" width="80" height="50" rx="8" class="cli"/><text x="80" y="80" class="t">Client</text>
<rect x="140" y="50" width="80" height="50" rx="8" class="gw"/><text x="180" y="80" class="t">Gateway</text>
<rect x="100" y="130" width="140" height="60" rx="8" class="b"/><text x="170" y="165" class="t">Monolith</text>
<line x1="120" y1="75" x2="140" y2="75" class="l"/>
<line x1="180" y1="100" x2="180" y2="130" class="l"/>

<text x="400" y="25" class="h">Step 2 — extract one context</text>
<rect x="310" y="50" width="60" height="40" rx="6" class="cli"/><text x="340" y="75" class="t">Client</text>
<rect x="385" y="50" width="60" height="40" rx="6" class="gw"/><text x="415" y="75" class="t">GW</text>
<rect x="350" y="115" width="120" height="45" rx="6" class="b"/><text x="410" y="142" class="t">Monolith</text>
<rect x="350" y="180" width="120" height="45" rx="6" class="s"/><text x="410" y="207" class="t">Payments svc</text>
<line x1="370" y1="70" x2="385" y2="70" class="l"/>
<line x1="415" y1="90" x2="415" y2="115" class="l"/>
<line x1="430" y1="115" x2="430" y2="180" class="l"/>

<text x="660" y="25" class="h">Step 3 — repeat</text>
<rect x="570" y="50" width="60" height="40" rx="6" class="cli"/><text x="600" y="75" class="t">Client</text>
<rect x="645" y="50" width="60" height="40" rx="6" class="gw"/><text x="675" y="75" class="t">GW</text>
<rect x="600" y="115" width="60" height="35" rx="6" class="s"/><text x="630" y="138" class="t">Orders</text>
<rect x="670" y="115" width="60" height="35" rx="6" class="s"/><text x="700" y="138" class="t">Users</text>
<rect x="600" y="160" width="60" height="35" rx="6" class="s"/><text x="630" y="183" class="t">Pay</text>
<rect x="670" y="160" width="60" height="35" rx="6" class="s"/><text x="700" y="183" class="t">Ship</text>
<rect x="600" y="205" width="130" height="35" rx="6" class="b" opacity="0.5"/><text x="665" y="228" class="t">(monolith shrinking)</text>
<line x1="630" y1="70" x2="645" y2="70" class="l"/>
<line x1="675" y1="90" x2="675" y2="105" class="l"/>
</svg>` },

        { type: 'list', kind: 'numbered', items: [
          'Put a thin gateway/proxy in front of the monolith. All traffic goes through it.',
          'Pick a bounded context with a clean interface (ideally edge functionality, few inbound deps).',
          'Build the new service alongside; dual-write or shadow-read for safety.',
          'Switch traffic for that endpoint at the gateway.',
          'Delete the old path from the monolith.',
          'Repeat. The monolith slowly shrinks until it\'s gone — or until what remains is small enough to keep.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Don\'t extract the trickiest, most central thing first. Pick an edge — recommendations, notifications, search — to build operational muscle before tackling payments or orders.' }
      ]
    },

    /* ============ Chapter 3 — Inter-service Communication ============ */
    {
      id: 'ms-c3',
      title: 'Inter-service Communication',
      icon: '📡',
      sections: [
        { type: 'heading', text: 'Sync vs async — pick deliberately', level: 1 },
        { type: 'para', html: 'Every cross-service interaction is either <strong>synchronous</strong> (caller waits for a response) or <strong>asynchronous</strong> (caller publishes a message and moves on). Each has a place — confusing the two is one of the most common architectural mistakes.' },

        { type: 'heading', text: 'Synchronous: REST and gRPC', level: 2 },
        { type: 'code', lang: 'http', code: `<span class="com"># REST — text-based, ubiquitous, easy to debug</span>
GET /orders/42 HTTP/1.1
Host: orders.internal

200 OK
Content-Type: application/json
{ "id": 42, "total": 119.00, "status": "PAID" }` },
        { type: 'code', lang: 'proto', code: `<span class="com">// gRPC — binary (Protobuf), HTTP/2, schema-first, streaming</span>
<span class="kw">service</span> <span class="ty">OrderService</span> {
  <span class="kw">rpc</span> <span class="fn">GetOrder</span>(GetOrderRequest) <span class="kw">returns</span> (Order);
  <span class="kw">rpc</span> <span class="fn">StreamUpdates</span>(StreamReq) <span class="kw">returns</span> (<span class="kw">stream</span> Update);
}` },
        { type: 'list', kind: 'check', items: [
          '<strong>REST/JSON</strong> — perfect for external APIs and easy local debugging with curl. Looser contracts, larger payloads.',
          '<strong>gRPC</strong> — great for internal service-to-service traffic: tighter contracts, smaller payloads, multiplexed streams over HTTP/2. Harder to debug by eye.',
          '<strong>GraphQL</strong> — handy at the edge when many clients each need different slices of data.'
        ] },

        { type: 'callout', kind: 'warn', html: 'Synchronous chains compound failures and latency. Five services at 99.9% uptime chained together give you about 99.5% combined uptime. Don\'t build a deep sync call graph if you can avoid it.' },

        { type: 'heading', text: 'Asynchronous: events and queues', level: 2 },
        { type: 'para', html: 'Asynchronous communication decouples producer and consumer in time and in knowledge. The producer publishes; the broker buffers; consumers process at their own pace.' },

        { type: 'image', alt: 'Pub/sub with one producer and many consumers',
          svg: `<svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.svc{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.bkr{fill:#fef3c7;stroke:#92400e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.ar{fill:none;stroke:#1d4ed8;stroke-width:1.8;marker-end:url(#a)}.evt{font-family:Inter,sans-serif;font-size:11px;fill:#92400e;text-anchor:middle}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker></defs>
<text x="390" y="25" class="h">Pub/Sub — one event, many independent reactions</text>
<rect x="30" y="100" width="140" height="60" rx="10" class="svc"/><text x="100" y="135" class="t">OrderService</text>
<rect x="300" y="100" width="180" height="60" rx="10" class="bkr"/><text x="390" y="125" class="t">Broker (Kafka)</text><text x="390" y="148" class="evt">topic: order.placed</text>
<rect x="600" y="40" width="160" height="40" rx="8" class="svc"/><text x="680" y="65" class="t">EmailService</text>
<rect x="600" y="100" width="160" height="40" rx="8" class="svc"/><text x="680" y="125" class="t">InventoryService</text>
<rect x="600" y="160" width="160" height="40" rx="8" class="svc"/><text x="680" y="185" class="t">AnalyticsService</text>
<rect x="600" y="220" width="160" height="40" rx="8" class="svc"/><text x="680" y="245" class="t">RewardsService</text>
<path d="M170 130 L300 130" class="ar"/>
<path d="M480 130 L600 60" class="ar"/>
<path d="M480 130 L600 120" class="ar"/>
<path d="M480 130 L600 180" class="ar"/>
<path d="M480 130 L600 240" class="ar"/>
</svg>` },

        { type: 'code', lang: 'js', code: `<span class="com">// Producer doesn't know its consumers</span>
broker.<span class="fn">publish</span>(<span class="str">"order.placed"</span>, {
  orderId: <span class="num">42</span>, userId: <span class="num">7</span>, total: <span class="num">119.00</span>
});

<span class="com">// New consumer? Just subscribe — OrderService unchanged.</span>
broker.<span class="fn">subscribe</span>(<span class="str">"order.placed"</span>, <span class="fn">handleOrderPlaced</span>);` },

        { type: 'heading', text: 'When to pick which', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Sync</strong> when the caller genuinely needs the result <em>now</em> (read a user profile, validate a token, look up a price)',
          '<strong>Async</strong> when the call is a side effect or a fan-out (send email, update analytics, kick off a downstream workflow)',
          '<strong>Async</strong> when consumers may be temporarily slow or down — buffering saves you',
          '<strong>Async</strong> when you don\'t know yet who all the consumers will be'
        ] },

        { type: 'callout', kind: 'tip', html: 'A useful heuristic: if the calling user is staring at a spinner waiting for it, sync. If it can happen 200ms later, async.' }
      ]
    },

    /* ============ Chapter 4 — API Gateway ============ */
    {
      id: 'ms-c4',
      title: 'API Gateway',
      icon: '🚪',
      sections: [
        { type: 'heading', text: 'One front door', level: 1 },
        { type: 'para', html: 'An <strong>API gateway</strong> is a single entry point that sits between external clients and your internal services. It handles routing, cross-cutting concerns, and shields clients from internal topology.' },

        { type: 'image', alt: 'API gateway topology',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.c{fill:#fce7f3;stroke:#be185d;stroke-width:2}.g{fill:#dcfce7;stroke:#15803d;stroke-width:2}.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lb{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.l{fill:none;stroke:#15803d;stroke-width:1.8;marker-end:url(#g)}.l2{fill:none;stroke:#1d4ed8;stroke-width:1.8;marker-end:url(#b)}</style>
<marker id="g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#15803d"/></marker>
<marker id="b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker></defs>
<text x="410" y="25" class="h">API Gateway</text>
<rect x="30" y="60" width="120" height="40" rx="8" class="c"/><text x="90" y="85" class="t">Web client</text>
<rect x="30" y="135" width="120" height="40" rx="8" class="c"/><text x="90" y="160" class="t">Mobile app</text>
<rect x="30" y="210" width="120" height="40" rx="8" class="c"/><text x="90" y="235" class="t">3rd-party</text>
<rect x="285" y="115" width="240" height="100" rx="14" class="g"/>
<text x="405" y="148" class="h">API Gateway</text>
<text x="405" y="172" class="lb">auth · rate limit · routing</text>
<text x="405" y="190" class="lb">aggregation · logging · TLS</text>
<rect x="650" y="50" width="140" height="40" rx="8" class="s"/><text x="720" y="75" class="t">OrderService</text>
<rect x="650" y="105" width="140" height="40" rx="8" class="s"/><text x="720" y="130" class="t">UserService</text>
<rect x="650" y="160" width="140" height="40" rx="8" class="s"/><text x="720" y="185" class="t">CatalogService</text>
<rect x="650" y="215" width="140" height="40" rx="8" class="s"/><text x="720" y="240" class="t">PaymentService</text>
<path d="M150 80  L285 150" class="l"/>
<path d="M150 155 L285 165" class="l"/>
<path d="M150 230 L285 180" class="l"/>
<path d="M525 145 L650 70"  class="l2"/>
<path d="M525 155 L650 125" class="l2"/>
<path d="M525 175 L650 180" class="l2"/>
<path d="M525 190 L650 235" class="l2"/>
</svg>` },

        { type: 'heading', text: 'What the gateway does', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Routing</strong> — translate /orders/* to OrderService, /users/* to UserService',
          '<strong>Auth offload</strong> — validate JWTs, handle OAuth callbacks; downstream services trust the gateway-injected user identity',
          '<strong>Rate limiting</strong> — token bucket / leaky bucket per API key or per user',
          '<strong>Logging + correlation</strong> — attach a trace ID to every incoming request',
          '<strong>Aggregation</strong> — fan out to several services and stitch the response (BFF pattern)',
          '<strong>Protocol translation</strong> — accept HTTP from clients, speak gRPC internally',
          '<strong>TLS termination</strong> — internal traffic can use cheaper mTLS or a service mesh'
        ] },

        { type: 'heading', text: 'BFF: Backend For Frontend', level: 2 },
        { type: 'para', html: 'A single gateway that serves both web and mobile usually compromises both. The <strong>Backend For Frontend</strong> pattern runs a separate gateway per client type — each tailored to that client\'s needs.' },
        { type: 'code', lang: 'js', code: `<span class="com">// Mobile BFF — lean payload, only what the screen needs</span>
mobileBFF.<span class="fn">get</span>(<span class="str">"/home-feed"</span>, <span class="kw">async</span> req =&gt; {
  <span class="kw">const</span> [user, recent, recs] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
    users.<span class="fn">getMinimal</span>(req.userId),
    orders.<span class="fn">recent</span>(req.userId, <span class="num">3</span>),
    recs.<span class="fn">topN</span>(req.userId, <span class="num">10</span>)
  ]);
  <span class="kw">return</span> { user, recent, recs };
});

<span class="com">// Web BFF — richer payload, different shape</span>
webBFF.<span class="fn">get</span>(<span class="str">"/home-feed"</span>, <span class="kw">async</span> req =&gt; {
  <span class="com">// ... different aggregation, more fields</span>
});` },

        { type: 'heading', text: 'Common gateway choices', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Kong</strong>, <strong>Tyk</strong>, <strong>KrakenD</strong>, <strong>Apigee</strong> — managed/OSS API gateways',
          '<strong>NGINX</strong> / <strong>HAProxy</strong> — battle-tested reverse proxies, can serve as a thin gateway',
          '<strong>AWS API Gateway</strong>, <strong>Google Cloud API Gateway</strong>, <strong>Azure API Management</strong> — cloud-native',
          '<strong>Envoy</strong> — high-performance proxy used by many service meshes (Istio, Consul Connect)'
        ] },

        { type: 'callout', kind: 'warn', html: 'A gateway can absolutely become a single point of failure and a noisy neighbor. Run multiple replicas, keep the gateway thin (no business logic), and budget for its operational care.' }
      ]
    },

    /* ============ Chapter 5 — Service Discovery ============ */
    {
      id: 'ms-c5',
      title: 'Service Discovery & Registry',
      icon: '🔍',
      sections: [
        { type: 'heading', text: 'Finding the right instance at runtime', level: 1 },
        { type: 'para', html: 'In a microservices environment instances come and go constantly — autoscaling, deploys, crashes, rescheduling. You can\'t hard-code an IP like <code>10.0.4.7:8080</code> in code or even in config files. You need a live, health-aware directory.' },

        { type: 'image', alt: 'Service registry registration and lookup flow',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.r{fill:#fef3c7;stroke:#92400e;stroke-width:2}.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.c{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.l{font-family:Inter,sans-serif;font-size:11px;fill:#475569}.ar{fill:none;stroke:#92400e;stroke-width:1.8;marker-end:url(#a)}.ar2{fill:none;stroke:#15803d;stroke-width:1.8;marker-end:url(#b)}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#92400e"/></marker>
<marker id="b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#15803d"/></marker></defs>
<text x="410" y="25" class="h">Service Registry — live phone book</text>
<rect x="320" y="50" width="200" height="80" rx="12" class="r"/>
<text x="420" y="78" class="h">Registry</text>
<text x="420" y="100" class="l" text-anchor="middle">OrderService → 10.0.4.7:8080</text>
<text x="420" y="116" class="l" text-anchor="middle">OrderService → 10.0.4.9:8080</text>
<rect x="30" y="160" width="160" height="50" rx="8" class="s"/><text x="110" y="190" class="t">OrderService-1</text>
<rect x="30" y="230" width="160" height="50" rx="8" class="s"/><text x="110" y="260" class="t">OrderService-2</text>
<rect x="640" y="195" width="160" height="50" rx="8" class="c"/><text x="720" y="225" class="t">UserService (caller)</text>
<path d="M190 175 L320 100" class="ar"/>
<path d="M190 250 L320 120" class="ar"/>
<text x="220" y="135" class="l">register + heartbeat</text>
<path d="M640 215 L520 110" class="ar2"/>
<text x="555" y="160" class="l">"where is OrderService?"</text>
<path d="M520 115 L640 220" class="ar2"/>
<text x="555" y="245" class="l">healthy instance list</text>
</svg>` },

        { type: 'heading', text: 'The pattern', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<strong>On startup</strong>, each instance registers itself: "I\'m OrderService at 10.0.4.7:8080, here\'s my health endpoint."',
          '<strong>Heartbeats</strong> keep the registration alive. If they stop, the registry evicts the entry.',
          '<strong>Health checks</strong> (HTTP /healthz, TCP, custom) decide if an instance is healthy enough to serve.',
          '<strong>Callers query</strong> the registry: "give me a healthy OrderService instance". They get a fresh list; a client-side load balancer picks one.'
        ] },

        { type: 'heading', text: 'Client-side vs server-side discovery', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">CLIENT-SIDE</span>
Caller --asks-->[ Registry ]
Caller --calls-->[ Picked Instance ]
+ smart client picks the instance (one fewer hop)
- every language needs a smart client library

<span class="com">SERVER-SIDE</span>
Caller --calls-->[ Load Balancer ] --asks--> [ Registry ]
                  [ Load Balancer ] --forwards--> [ Instance ]
+ dumb clients; language-agnostic
- one more hop; LB is another moving part

<span class="com">SERVICE MESH (sidecar)</span>
A small proxy (Envoy) sits next to each service.
The app talks plain HTTP to localhost; the sidecar handles discovery,
retries, mTLS, telemetry — no client library required.` },

        { type: 'heading', text: 'Common tools', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Eureka</strong> (Netflix OSS) — Java-centric, popular in Spring Cloud',
          '<strong>Consul</strong> (HashiCorp) — discovery + KV + health checks; multi-language',
          '<strong>etcd</strong> / <strong>ZooKeeper</strong> — consistent KV stores often used for coordination',
          '<strong>Kubernetes Services + CoreDNS</strong> — discovery built into k8s; Pods get a stable DNS name and a virtual IP',
          '<strong>Istio / Linkerd / Consul Connect</strong> — service meshes layer discovery + traffic policy on top'
        ] },

        { type: 'callout', kind: 'tip', html: 'If you\'re on Kubernetes, you almost certainly already have service discovery — every Service object gets a cluster-internal DNS name like <code>orders.default.svc.cluster.local</code> that load-balances across healthy Pods.' },

        { type: 'callout', kind: 'warn', html: 'Beware "plain DNS only" discovery: DNS caches at multiple layers (resolver, OS, JVM), and it doesn\'t encode liveness. A dead instance may keep getting traffic for a long time. Always pair DNS-based discovery with health-aware load balancing.' }
      ]
    },

    /* ============ Chapter 6 — Configuration ============ */
    {
      id: 'ms-c6',
      title: 'Configuration & Secrets',
      icon: '⚙️',
      sections: [
        { type: 'heading', text: 'Same artifact, many environments', level: 1 },
        { type: 'para', html: 'A core 12-Factor App principle: <strong>store config in the environment</strong>, not in the code. The same built artifact should promote from dev to staging to prod unchanged — only environment variables differ.' },

        { type: 'code', lang: 'js', code: `<span class="com">// BAD — env-specific code paths or hard-coded values</span>
<span class="kw">const</span> DB_URL = process.env.NODE_ENV === <span class="str">"prod"</span>
  ? <span class="str">"prod-db.internal:5432"</span>
  : <span class="str">"localhost:5432"</span>;

<span class="com">// GOOD — config read from the environment, no branches</span>
<span class="kw">const</span> DB_URL = process.env.DB_URL;
<span class="kw">const</span> TIMEOUT_MS = Number(process.env.TIMEOUT_MS) || <span class="num">5000</span>;
<span class="kw">const</span> FEATURE_X = process.env.FEATURE_X === <span class="str">"true"</span>;` },

        { type: 'heading', text: 'Where config actually lives', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Environment variables</strong> set by the orchestrator (k8s, ECS, Nomad)',
          '<strong>Config maps</strong> — non-sensitive structured config (k8s <code>ConfigMap</code>)',
          '<strong>Secret stores</strong> — sensitive values, encrypted at rest, with audit (HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, k8s <code>Secret</code>)',
          '<strong>Config servers</strong> — Spring Cloud Config, Consul KV (centralized, versioned, sometimes hot-reload)',
          '<strong>Feature-flag services</strong> — LaunchDarkly, Unleash, Flagsmith (runtime, per-user)'
        ] },

        { type: 'heading', text: 'Secrets — the rules', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Never commit secrets to source control — not even in encrypted form unless you use a tool designed for it (SOPS, Sealed Secrets)',
          'Inject at runtime — env var, mounted file, or fetched from a secret store via short-lived credentials',
          'Rotate regularly; have a documented rotation procedure for each secret type',
          'Use least-privilege IAM/roles so each service can only access its own secrets',
          'Audit access — secret managers log who fetched what and when'
        ] },

        { type: 'heading', text: 'Feature flags — decouple deploy from release', level: 2 },
        { type: 'para', html: 'A <strong>feature flag</strong> wraps new code behind a runtime toggle. You can deploy code dark, enable it for 1% of users, watch metrics, then ramp — all without redeploying.' },
        { type: 'code', lang: 'js', code: `<span class="kw">if</span> (flags.<span class="fn">isEnabled</span>(<span class="str">"new-checkout"</span>, { userId })) {
  <span class="kw">return</span> <span class="fn">newCheckout</span>(req);
} <span class="kw">else</span> {
  <span class="kw">return</span> <span class="fn">legacyCheckout</span>(req);
}` },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Release flags</strong> — gradual rollout of a new feature',
          '<strong>Ops flags</strong> — kill-switches; turn things off quickly without a deploy',
          '<strong>Experiment flags</strong> — A/B tests',
          '<strong>Permission flags</strong> — entitlements per tenant or plan'
        ] },

        { type: 'callout', kind: 'warn', html: 'Flags are tech debt unless they\'re permanent permission flags. Track them, schedule their removal, and clean up dead branches — otherwise every code path eventually has 4 alive variants and nobody knows which one runs.' }
      ]
    },

    /* ============ Chapter 7 — Resilience ============ */
    {
      id: 'ms-c7',
      title: 'Resilience Patterns',
      icon: '🛡️',
      sections: [
        { type: 'heading', text: 'The network will fail', level: 1 },
        { type: 'para', html: 'Distributed systems fail in ways monoliths never could: packets get lost, one downstream slows to a crawl, dependencies have intermittent outages. Your job is not to prevent failure — it\'s to <em>contain</em> it.' },

        { type: 'heading', text: 'Timeouts — the absolute minimum', level: 2 },
        { type: 'para', html: 'Most HTTP libraries have <strong>no timeout</strong> by default. A slow downstream can cause threads in the caller to pile up indefinitely until the whole service falls over. Every outbound call needs a connect timeout AND a read timeout.' },
        { type: 'code', lang: 'java', code: `<span class="ty">HttpClient</span> client = <span class="ty">HttpClient</span>.<span class="fn">newBuilder</span>()
    .<span class="fn">connectTimeout</span>(<span class="ty">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">1</span>))
    .<span class="fn">build</span>();

<span class="ty">HttpRequest</span> req = <span class="ty">HttpRequest</span>.<span class="fn">newBuilder</span>(uri)
    .<span class="fn">timeout</span>(<span class="ty">Duration</span>.<span class="fn">ofSeconds</span>(<span class="num">2</span>))      <span class="com">// total request timeout</span>
    .<span class="fn">GET</span>()
    .<span class="fn">build</span>();` },

        { type: 'heading', text: 'Retries — but only when safe', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Retry <strong>only idempotent</strong> operations (or operations with idempotency keys)',
          'Cap attempts (typically 2–3)',
          'Use exponential backoff (100ms, 200ms, 400ms…)',
          'Add <strong>jitter</strong> — random ±25% — to prevent thundering herds on recovery',
          'Keep a retry <em>budget</em> so retries can\'t themselves cause a cascade',
          'Don\'t retry on 4xx (client errors won\'t magically fix themselves)'
        ] },
        { type: 'code', lang: 'js', code: `<span class="kw">async function</span> <span class="fn">withRetry</span>(fn, max = <span class="num">3</span>) {
  <span class="kw">let</span> delay = <span class="num">100</span>;
  <span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i &lt; max; i++) {
    <span class="kw">try</span> { <span class="kw">return await</span> <span class="fn">fn</span>(); }
    <span class="kw">catch</span> (e) {
      <span class="kw">if</span> (i === max - <span class="num">1</span> || !<span class="fn">isRetryable</span>(e)) <span class="kw">throw</span> e;
      <span class="kw">const</span> jitter = delay * (<span class="num">0.75</span> + Math.<span class="fn">random</span>() * <span class="num">0.5</span>);
      <span class="kw">await</span> <span class="fn">sleep</span>(jitter);
      delay *= <span class="num">2</span>;
    }
  }
}` },

        { type: 'heading', text: 'Circuit breaker', level: 2 },
        { type: 'para', html: 'When a downstream is struggling, hammering it with retries makes it worse. A <strong>circuit breaker</strong> tracks failure rate; after a threshold it "opens" and short-circuits calls for a cool-down period — giving the downstream time to recover and freeing the caller\'s threads.' },

        { type: 'image', alt: 'Circuit breaker states',
          svg: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.cl{fill:#dcfce7;stroke:#15803d;stroke-width:2}.op{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.ho{fill:#fef3c7;stroke:#b45309;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.l{font-family:Inter,sans-serif;font-size:12px;fill:#475569;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}.ar{fill:none;stroke:#475569;stroke-width:1.8;marker-end:url(#a)}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<text x="380" y="28" class="h">Circuit Breaker State Machine</text>
<circle cx="130" cy="140" r="70" class="cl"/>
<text x="130" y="138" class="t">CLOSED</text>
<text x="130" y="160" class="l">calls go through</text>
<circle cx="630" cy="140" r="70" class="op"/>
<text x="630" y="138" class="t">OPEN</text>
<text x="630" y="160" class="l">fail fast</text>
<circle cx="380" cy="140" r="70" class="ho"/>
<text x="380" y="135" class="t">HALF-OPEN</text>
<text x="380" y="155" class="l">probe call</text>
<path d="M200 130 L560 130" class="ar"/>
<text x="380" y="118" class="l">failure threshold crossed</text>
<path d="M560 165 L450 165" class="ar"/>
<text x="500" y="195" class="l">cool-down expires</text>
<path d="M310 145 L200 165" class="ar"/>
<text x="265" y="200" class="l">probe ok</text>
<path d="M450 115 L560 115" class="ar"/>
<text x="500" y="100" class="l">probe fails</text>
</svg>` },

        { type: 'list', kind: 'check', items: [
          '<strong>CLOSED</strong> — calls pass through normally; failures are counted',
          '<strong>OPEN</strong> — fail fast without contacting downstream; cool-down timer running',
          '<strong>HALF-OPEN</strong> — after cool-down, allow a probe call to test recovery',
          'Probe succeeds → back to CLOSED. Probe fails → back to OPEN.'
        ] },

        { type: 'heading', text: 'Bulkhead', level: 2 },
        { type: 'para', html: 'Named after the watertight compartments in ships, the <strong>bulkhead pattern</strong> isolates resources — separate thread pools or connection pools per downstream. A bad neighbor saturating its pool can\'t starve the others.' },
        { type: 'code', lang: 'java', code: `<span class="com">// Resilience4j — bulkhead per downstream</span>
<span class="ty">Bulkhead</span> paymentsBulkhead =
    <span class="ty">Bulkhead</span>.<span class="fn">of</span>(<span class="str">"payments"</span>,
        <span class="ty">BulkheadConfig</span>.<span class="fn">custom</span>()
            .<span class="fn">maxConcurrentCalls</span>(<span class="num">20</span>)
            .<span class="fn">maxWaitDuration</span>(<span class="ty">Duration</span>.<span class="fn">ofMillis</span>(<span class="num">100</span>))
            .<span class="fn">build</span>());

<span class="com">// Independent bulkhead for a different downstream</span>
<span class="ty">Bulkhead</span> catalogBulkhead =
    <span class="ty">Bulkhead</span>.<span class="fn">of</span>(<span class="str">"catalog"</span>, <span class="com">/* ... */</span>);` },

        { type: 'callout', kind: 'info', html: 'Tools: <strong>Resilience4j</strong> (modern Java), <strong>Polly</strong> (.NET), <strong>Hystrix</strong> (legacy, in maintenance), or built into service meshes like Istio/Envoy and Linkerd.' }
      ]
    },

    /* ============ Chapter 8 — Observability ============ */
    {
      id: 'ms-c8',
      title: 'Distributed Tracing & Observability',
      icon: '🔭',
      sections: [
        { type: 'heading', text: 'You can\'t fix what you can\'t see', level: 1 },
        { type: 'para', html: 'Running microservices without observability is operating blind. A single user request might cross 7 services — a stack trace in one of them tells you almost nothing without context.' },

        { type: 'heading', text: 'The three pillars', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Logs</strong> — discrete events with context. "What exactly happened in step X?"',
          '<strong>Metrics</strong> — numeric time series. "Is anything wrong right now?" (p99 latency, error rate, RPS)',
          '<strong>Traces</strong> — the path of one request across services. "Where did THIS request go wrong?"'
        ] },

        { type: 'heading', text: 'Correlation IDs and trace propagation', level: 2 },
        { type: 'para', html: 'For traces to work, every service must propagate a <strong>trace ID</strong> forward in outgoing requests. The W3C standard header is <code>traceparent</code>:' },
        { type: 'code', lang: 'http', code: `<span class="com"># Format: version-traceId-parentSpanId-flags</span>
traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01` },
        { type: 'para', html: 'Each service:' },
        { type: 'list', kind: 'numbered', items: [
          'Reads the incoming <code>traceparent</code> (or creates a new trace if none)',
          'Creates a span for its work, with start/end timestamps',
          'Includes the trace ID in every log line ("trace_id=abc-123")',
          'Forwards <code>traceparent</code> on outbound calls — possibly with itself as the new parent'
        ] },

        { type: 'image', alt: 'Distributed trace timeline',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.g{fill:#dcfce7;stroke:#15803d;stroke-width:1.5}.b{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.y{fill:#fef3c7;stroke:#b45309;stroke-width:1.5}.p{fill:#fce7f3;stroke:#be185d;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a}.h{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a}.ax{stroke:#94a3b8;stroke-width:1}</style></defs>
<text x="20" y="25" class="h">Trace: GET /home-feed   trace_id=abc-123</text>
<line x1="160" y1="50" x2="800" y2="50" class="ax"/>
<text x="160" y="42" class="t">0ms</text>
<text x="400" y="42" class="t">60ms</text>
<text x="800" y="42" class="t">120ms</text>
<text x="10" y="80" class="t">gateway</text>
<rect x="160" y="65" width="640" height="22" rx="4" class="g"/>
<text x="170" y="81" class="t">gateway: route + aggregate</text>
<text x="10" y="115" class="t">users</text>
<rect x="220" y="100" width="160" height="22" rx="4" class="b"/>
<text x="230" y="116" class="t">users GET /users/7</text>
<text x="10" y="150" class="t">orders</text>
<rect x="220" y="135" width="370" height="22" rx="4" class="y"/>
<text x="230" y="151" class="t">orders /recent</text>
<text x="10" y="185" class="t">db</text>
<rect x="280" y="170" width="270" height="22" rx="4" class="p"/>
<text x="290" y="186" class="t">db SELECT ...</text>
<text x="10" y="220" class="t">recs</text>
<rect x="220" y="205" width="540" height="22" rx="4" class="b"/>
<text x="230" y="221" class="t">recs /for/7</text>
<text x="20" y="260" class="t">Each bar = a span. Slowest child of the gateway = the critical path.</text>
</svg>` },

        { type: 'heading', text: 'OpenTelemetry — the standard', level: 2 },
        { type: 'para', html: '<strong>OpenTelemetry (OTel)</strong> is the CNCF project that merged OpenTracing and OpenCensus. It gives you vendor-neutral SDKs for traces and metrics, a wire protocol (OTLP), and a Collector that exports to any backend.' },
        { type: 'code', lang: 'js', code: `<span class="com">// Node.js OTel setup (simplified)</span>
<span class="kw">const</span> { NodeSDK } = <span class="fn">require</span>(<span class="str">"@opentelemetry/sdk-node"</span>);
<span class="kw">const</span> { OTLPTraceExporter } = <span class="fn">require</span>(<span class="str">"@opentelemetry/exporter-trace-otlp-http"</span>);

<span class="kw">const</span> sdk = <span class="kw">new</span> <span class="fn">NodeSDK</span>({
  traceExporter: <span class="kw">new</span> <span class="fn">OTLPTraceExporter</span>({ url: <span class="str">"http://otel-collector:4318/v1/traces"</span> }),
  serviceName: <span class="str">"order-service"</span>
});
sdk.<span class="fn">start</span>();` },

        { type: 'heading', text: 'Common tooling', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Traces</strong>: Jaeger, Zipkin, Grafana Tempo, AWS X-Ray, Datadog APM, Honeycomb',
          '<strong>Metrics</strong>: Prometheus + Grafana, Datadog, CloudWatch, New Relic',
          '<strong>Logs</strong>: ELK (Elasticsearch + Logstash + Kibana), Loki, Splunk, Datadog Logs',
          '<strong>SLOs</strong> on top of metrics: error budgets, burn-rate alerts — see Google\'s SRE book'
        ] },

        { type: 'callout', kind: 'tip', html: 'Structured logs (JSON) with the trace_id field unlock grepping for "everything that happened to this one user request". Free-form text logs are very hard to correlate at scale.' }
      ]
    },

    /* ============ Chapter 9 — Data per Service ============ */
    {
      id: 'ms-c9',
      title: 'Data Per Service',
      icon: '🗄️',
      sections: [
        { type: 'heading', text: 'Each service owns its data', level: 1 },
        { type: 'para', html: 'The most important rule in microservices: <strong>every service owns its own database</strong>. No other service reads or writes those tables directly. If you want that data, ask the owning service through its API or consume the events it publishes.' },

        { type: 'image', alt: 'Database per service vs shared DB',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.db{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.h{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.l{fill:none;stroke:#475569;stroke-width:1.8}.x{fill:#b91c1c;font-family:Inter,sans-serif;font-size:24px;font-weight:700;text-anchor:middle}</style></defs>

<text x="200" y="25" class="h">Shared DB (anti-pattern)</text>
<rect x="40" y="55" width="100" height="38" rx="6" class="s"/><text x="90" y="78" class="t">Orders</text>
<rect x="150" y="55" width="100" height="38" rx="6" class="s"/><text x="200" y="78" class="t">Users</text>
<rect x="260" y="55" width="100" height="38" rx="6" class="s"/><text x="310" y="78" class="t">Reporting</text>
<rect x="100" y="160" width="200" height="50" rx="8" class="db"/><text x="200" y="190" class="t">shared MySQL</text>
<line x1="90" y1="93" x2="190" y2="160" class="l"/>
<line x1="200" y1="93" x2="200" y2="160" class="l"/>
<line x1="310" y1="93" x2="210" y2="160" class="l"/>
<text x="200" y="250" class="t">schema change ripples to every service</text>

<text x="610" y="25" class="h">Database per service (good)</text>
<rect x="460" y="55" width="100" height="38" rx="6" class="s"/><text x="510" y="78" class="t">Orders</text>
<rect x="570" y="55" width="100" height="38" rx="6" class="s"/><text x="620" y="78" class="t">Users</text>
<rect x="680" y="55" width="100" height="38" rx="6" class="s"/><text x="730" y="78" class="t">Payments</text>
<rect x="460" y="160" width="100" height="40" rx="6" class="db"/><text x="510" y="185" class="t">orders-db</text>
<rect x="570" y="160" width="100" height="40" rx="6" class="db"/><text x="620" y="185" class="t">users-db</text>
<rect x="680" y="160" width="100" height="40" rx="6" class="db"/><text x="730" y="185" class="t">payments-db</text>
<line x1="510" y1="93" x2="510" y2="160" class="l"/>
<line x1="620" y1="93" x2="620" y2="160" class="l"/>
<line x1="730" y1="93" x2="730" y2="160" class="l"/>
<text x="620" y="250" class="t">each service controls its own schema</text>
</svg>` },

        { type: 'heading', text: 'Why this rule is non-negotiable', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Schema autonomy</strong> — owning team can evolve the schema without breaking anyone',
          '<strong>Right tool for the job</strong> — relational for the ledger, document for the catalog, search index for product search',
          '<strong>Isolation of failures</strong> — a slow query in one DB can\'t starve another service',
          '<strong>Clear ownership</strong> — when something is wrong with users data, you know who to call'
        ] },

        { type: 'heading', text: 'Polyglot persistence', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>PostgreSQL / MySQL</strong> — transactional, relational; great for ledgers, billing, orders',
          '<strong>MongoDB / DynamoDB</strong> — flexible documents; great for catalogs, sessions',
          '<strong>Redis</strong> — in-memory; caches, rate-limit counters, ephemeral session state',
          '<strong>Elasticsearch / OpenSearch</strong> — text search and analytics',
          '<strong>Neo4j</strong> — relationship-heavy graphs (social, fraud)',
          '<strong>InfluxDB / Prometheus</strong> — time-series metrics',
          '<strong>Kafka</strong> — itself a durable event log (some teams use it as a system of record)'
        ] },

        { type: 'heading', text: 'But what about JOINs across services?', level: 2 },
        { type: 'para', html: 'You can no longer write a single SQL JOIN across services. Three common approaches:' },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Composition at the edge</strong> — the gateway/BFF calls each service and merges results (good for small fan-outs)',
          '<strong>Materialized views via events</strong> — one service consumes events from others and maintains a denormalized read model (eventual consistency)',
          '<strong>Data warehouse / analytics store</strong> — stream all events into Redshift / BigQuery / Snowflake for cross-service reporting'
        ] },

        { type: 'callout', kind: 'warn', html: 'The "shared database" approach is so tempting and so destructive that it has a name: the <strong>distributed monolith</strong>. The instant a second service writes to your tables, you no longer own your schema.' }
      ]
    },

    /* ============ Chapter 10 — Distributed Transactions / Saga ============ */
    {
      id: 'ms-c10',
      title: 'Distributed Transactions & Sagas',
      icon: '🎭',
      sections: [
        { type: 'heading', text: 'No more BEGIN; ... COMMIT;', level: 1 },
        { type: 'para', html: 'In a monolith, you wrap one DB transaction around the work and trust ACID. Across services with separate databases, you can\'t. You need a different mental model.' },

        { type: 'heading', text: 'Why 2PC is rare in practice', level: 2 },
        { type: 'para', html: '<strong>Two-Phase Commit (2PC)</strong> does provide ACID across services: a coordinator asks every participant to "prepare", then "commit" (if all are ready) or "abort". It\'s a real protocol — but it has serious practical issues:' },
        { type: 'list', kind: 'check', items: [
          'Participants hold locks during the prepare phase → throughput collapses under load',
          'If the coordinator crashes between prepare and commit, participants are <em>stuck</em> holding locks until manual intervention',
          'Doesn\'t mix well with async messaging stacks, NoSQL stores, or external SaaS APIs',
          'Heavyweight protocol — most teams find the operational cost not worth it'
        ] },

        { type: 'heading', text: 'The Saga pattern', level: 2 },
        { type: 'para', html: 'A <strong>saga</strong> models a distributed transaction as a sequence of <em>local</em> transactions, each with a defined <em>compensating action</em> that logically undoes it. If any step fails, you run compensations in reverse for the steps already done.' },

        { type: 'image', alt: 'Saga orchestration with compensations',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.o{fill:#fef3c7;stroke:#b45309;stroke-width:2}.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.g{fill:none;stroke:#15803d;stroke-width:1.8;marker-end:url(#ag)}.r{fill:none;stroke:#b91c1c;stroke-width:1.8;stroke-dasharray:5,4;marker-end:url(#ar)}.lb{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style>
<marker id="ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#15803d"/></marker>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#b91c1c"/></marker></defs>
<text x="410" y="25" class="h">Order Saga (orchestration)</text>
<rect x="320" y="50" width="180" height="50" rx="10" class="o"/>
<text x="410" y="80" class="t">OrderSaga (conductor)</text>
<rect x="40" y="170" width="140" height="50" rx="8" class="s"/><text x="110" y="200" class="t">PaymentService</text>
<rect x="220" y="170" width="160" height="50" rx="8" class="s"/><text x="300" y="200" class="t">InventoryService</text>
<rect x="420" y="170" width="160" height="50" rx="8" class="s"/><text x="500" y="200" class="t">ShippingService</text>
<rect x="620" y="170" width="160" height="50" rx="8" class="s"/><text x="700" y="200" class="t">OrderService</text>
<path d="M380 100 L120 170" class="g"/>
<path d="M390 100 L300 170" class="g"/>
<path d="M430 100 L500 170" class="g"/>
<path d="M450 100 L700 170" class="g"/>
<text x="240" y="135" class="lb">1. charge</text>
<text x="335" y="135" class="lb">2. reserve</text>
<text x="475" y="135" class="lb">3. ship</text>
<text x="600" y="135" class="lb">4. confirm</text>
<text x="410" y="265" class="lb">On failure: compensate in reverse</text>
<path d="M700 230 L500 240" class="r"/>
<path d="M500 240 L300 240" class="r"/>
<path d="M300 240 L110 230" class="r"/>
<text x="600" y="285" class="lb">release-shipment → release-stock → refund-payment</text>
</svg>` },

        { type: 'heading', text: 'Orchestration vs choreography', level: 2 },
        { type: 'code', lang: 'js', code: `<span class="com">// ORCHESTRATION — explicit conductor</span>
<span class="kw">async function</span> <span class="fn">runOrderSaga</span>(order) {
  <span class="kw">const</span> payment = <span class="kw">await</span> payments.<span class="fn">charge</span>(order);
  <span class="kw">try</span> {
    <span class="kw">const</span> reservation = <span class="kw">await</span> inventory.<span class="fn">reserve</span>(order);
    <span class="kw">try</span> {
      <span class="kw">const</span> shipment = <span class="kw">await</span> shipping.<span class="fn">book</span>(order);
      <span class="kw">await</span> orders.<span class="fn">confirm</span>(order, { payment, reservation, shipment });
    } <span class="kw">catch</span> (e) {
      <span class="kw">await</span> inventory.<span class="fn">release</span>(reservation);  <span class="com">// compensate</span>
      <span class="kw">throw</span> e;
    }
  } <span class="kw">catch</span> (e) {
    <span class="kw">await</span> payments.<span class="fn">refund</span>(payment);          <span class="com">// compensate</span>
    <span class="kw">throw</span> e;
  }
}` },
        { type: 'code', lang: 'js', code: `<span class="com">// CHOREOGRAPHY — services react to each other's events</span>
order.<span class="fn">placed</span>      → PaymentService: charge, emit payment.charged
payment.<span class="fn">charged</span>   → InventoryService: reserve, emit inventory.reserved
inventory.<span class="fn">reserved</span> → ShippingService: book, emit shipping.booked
shipping.<span class="fn">booked</span>   → OrderService: confirm

<span class="com">// Failures emit compensating events:</span>
payment.<span class="fn">failed</span>    → no further action
inventory.<span class="fn">failed</span>  → emit refund.requested → PaymentService refunds
shipping.<span class="fn">failed</span>   → emit inventory.release.requested, refund.requested` },

        { type: 'list', kind: 'check', items: [
          '<strong>Orchestration</strong> — explicit, central conductor. Easier to reason about and debug; conductor is a coupling point.',
          '<strong>Choreography</strong> — pure events; maximally decoupled but flow is "implicit" and harder to trace.',
          '<strong>Compensations must be idempotent</strong> — they may be retried under failure.',
          '<strong>Not a rollback</strong> — compensations are <em>new</em> business actions ("refund" not "un-charge"). They\'re visible in history.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Tools: Temporal, AWS Step Functions, Camunda Zeebe, Netflix Conductor — these orchestration engines handle retries, state, timers, and recovery so you don\'t hand-roll the conductor.' }
      ]
    },

    /* ============ Chapter 11 — Event-driven & CQRS ============ */
    {
      id: 'ms-c11',
      title: 'Event-driven & Event Sourcing',
      icon: '📣',
      sections: [
        { type: 'heading', text: 'Events as first-class facts', level: 1 },
        { type: 'para', html: 'An <strong>event</strong> describes something that has already happened. It\'s a fact about the past — immutable, past-tense, owned by the service that emitted it. Modeling around events is a quiet but profound shift.' },

        { type: 'code', lang: 'json', code: `<span class="com">// Events — past tense, owned by the producer</span>
{
  "type": "OrderPlaced",
  "id": "evt-9a1f...",
  "occurredAt": "2026-05-26T10:14:02Z",
  "data": {
    "orderId": 42,
    "userId": 7,
    "items": [{ "sku": "BK-001", "qty": 2 }],
    "total": 119.00
  }
}` },

        { type: 'heading', text: 'Events vs commands', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Command</strong> — a request that <em>may</em> succeed: "PlaceOrder"; future tense, has one logical recipient',
          '<strong>Event</strong> — a fact that already happened: "OrderPlaced"; past tense, can have many independent reactors',
          'A command typically <em>produces</em> one or more events on success'
        ] },

        { type: 'heading', text: 'Event sourcing — the log IS the truth', level: 2 },
        { type: 'para', html: 'In <strong>event sourcing</strong>, you don\'t store current state. You store the sequence of events that <em>produced</em> the state. Current state is derived by replaying events.' },
        { type: 'image', alt: 'Event-sourced account vs traditional row',
          svg: `<svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.r{fill:#fef3c7;stroke:#b45309;stroke-width:2}.e{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.h{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}</style></defs>
<text x="200" y="25" class="h">Traditional (state)</text>
<rect x="60" y="50" width="280" height="120" rx="10" class="r"/>
<text x="80" y="80" class="t">accounts:</text>
<text x="80" y="110" class="t">id = 7</text>
<text x="80" y="135" class="t">balance = 120.00</text>
<text x="80" y="160" class="t">updatedAt = 2026-05-26</text>

<text x="610" y="25" class="h">Event-sourced</text>
<rect x="470" y="50" width="320" height="170" rx="10" class="e"/>
<text x="490" y="80" class="t">events for account=7 (append-only):</text>
<text x="490" y="105" class="t">1. Deposited 100  → balance would be 100</text>
<text x="490" y="125" class="t">2. Deposited  50  → balance would be 150</text>
<text x="490" y="145" class="t">3. Withdrew   30  → balance would be 120</text>
<text x="490" y="175" class="t">current_balance = replay(events) = 120</text>
<text x="490" y="200" class="t">complete audit log built in</text>
</svg>` },

        { type: 'heading', text: 'CQRS — separate reads and writes', level: 2 },
        { type: 'para', html: '<strong>Command Query Responsibility Segregation</strong>: the write side accepts commands and produces events; the read side is a separate, denormalized projection optimized for queries. The two sides are eventually consistent.' },
        { type: 'code', lang: 'text', code: `<span class="com">Write side</span>                       <span class="com">Read side</span>
[Command]                         [Query]
   ↓                                ↑
[Aggregate]                       [Projection]
   ↓ emits                          ↑ built from
[Event Store] ──── events ────► [Read Model]
(append-only)                    (denormalized)` },

        { type: 'heading', text: 'When event sourcing pays off', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You need a perfect, queryable audit log (finance, healthcare, legal)',
          'You expect to introduce new read models later by replaying history',
          'Time-travel debugging — "what was the state on March 5?" — is valuable',
          'Your domain naturally thinks in events (banking, supply chain, IoT)'
        ] },

        { type: 'callout', kind: 'warn', html: 'Event sourcing is powerful but adds real complexity: versioning event schemas, snapshotting for performance, rebuilding projections after a bug. Don\'t reach for it unless you have one of the use cases above.' }
      ]
    },

    /* ============ Chapter 12 — Idempotency & Messaging Semantics ============ */
    {
      id: 'ms-c12',
      title: 'Idempotency & Messaging Semantics',
      icon: '🔑',
      sections: [
        { type: 'heading', text: 'Duplicates are not a question of "if"', level: 1 },
        { type: 'para', html: 'In any distributed system, messages get retried — by clients, by networks, by brokers. Plan for at-least-once delivery, and make your consumers idempotent so duplicates are harmless.' },

        { type: 'heading', text: 'The three delivery semantics', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>At-most-once</strong> — fire and forget; the broker may drop messages. Acceptable for some telemetry, never for billing.',
          '<strong>At-least-once</strong> — the default in Kafka, RabbitMQ, SQS. Guaranteed delivery, but duplicates can occur.',
          '<strong>Exactly-once</strong> — sounds ideal, almost impossible to truly achieve end-to-end. Some brokers offer it within their own boundaries (Kafka exactly-once semantics), but the moment you write to an external system, you\'re back to at-least-once + idempotent writes.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Don\'t fight for "exactly-once". Embrace <strong>at-least-once</strong> + idempotent consumers. It\'s simpler, more honest, and works across every broker.' },

        { type: 'heading', text: 'Idempotency keys for HTTP', level: 2 },
        { type: 'para', html: 'Stripe popularized this pattern. The client generates a unique key per logical attempt; the server stores it; retries with the same key are deduplicated.' },
        { type: 'code', lang: 'http', code: `POST /payments HTTP/1.1
Idempotency-Key: 6f1c-9b4e-2024-04-04T10:00Z
Content-Type: application/json

{ "amount": 119.00, "orderId": 42, "card": "tok_visa" }` },
        { type: 'code', lang: 'js', code: `<span class="com">// Server-side idempotency handling</span>
<span class="kw">async function</span> <span class="fn">handleCharge</span>(req) {
  <span class="kw">const</span> key = req.headers[<span class="str">"idempotency-key"</span>];
  <span class="kw">if</span> (!key) <span class="kw">throw</span> <span class="kw">new</span> <span class="ty">BadRequest</span>(<span class="str">"missing key"</span>);

  <span class="kw">const</span> prior = <span class="kw">await</span> store.<span class="fn">get</span>(key);
  <span class="kw">if</span> (prior) <span class="kw">return</span> prior.result;       <span class="com">// short-circuit duplicate</span>

  <span class="kw">const</span> result = <span class="kw">await</span> <span class="fn">chargeCard</span>(req.body);
  <span class="kw">await</span> store.<span class="fn">put</span>(key, result, { ttl: <span class="str">"24h"</span> });
  <span class="kw">return</span> result;
}` },

        { type: 'heading', text: 'Dedup for events', level: 2 },
        { type: 'para', html: 'For event consumers, include a unique <code>eventId</code> on every event. Each consumer maintains a small dedup store ("seen event IDs in the last N hours") and skips events it has already processed.' },
        { type: 'code', lang: 'js', code: `<span class="kw">async function</span> <span class="fn">onOrderPlaced</span>(event) {
  <span class="kw">if</span> (<span class="kw">await</span> seenEvents.<span class="fn">has</span>(event.id)) <span class="kw">return</span>;   <span class="com">// duplicate</span>
  <span class="kw">await</span> <span class="fn">processOrder</span>(event.data);
  <span class="kw">await</span> seenEvents.<span class="fn">add</span>(event.id, { ttl: <span class="str">"48h"</span> });
}` },

        { type: 'heading', text: 'Designing for idempotency', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Use <strong>upserts</strong> ("INSERT ... ON CONFLICT DO NOTHING") instead of plain INSERTs',
          'Use <strong>conditional updates</strong> ("UPDATE ... WHERE status = \'PENDING\'") so a retry is a no-op',
          'Carry an idempotency key end-to-end where possible',
          'Make compensating actions in sagas idempotent too — they get retried'
        ] },

        { type: 'callout', kind: 'warn', html: 'A POST with no idempotency guarantee plus an aggressive retry policy is one of the most common ways to double-charge customers. Always pair retries with idempotency.' }
      ]
    },

    /* ============ Chapter 13 — Containers & K8s ============ */
    {
      id: 'ms-c13',
      title: 'Containers & Orchestration',
      icon: '☸️',
      sections: [
        { type: 'heading', text: 'Why containers? Why Kubernetes?', level: 1 },
        { type: 'para', html: 'Microservices and containers grew up together. Containers package each service into an immutable artifact that runs the same way anywhere; an orchestrator like <strong>Kubernetes</strong> reconciles "what we want running" with "what actually is".' },

        { type: 'heading', text: 'Containers in one breath', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="com"># Dockerfile</span>
<span class="kw">FROM</span> eclipse-temurin:21-jre
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> target/order-service.jar app.jar
<span class="kw">EXPOSE</span> 8080
<span class="kw">CMD</span> [<span class="str">"java"</span>, <span class="str">"-jar"</span>, <span class="str">"app.jar"</span>]` },
        { type: 'code', lang: 'bash', code: `<span class="com"># Build, tag with git SHA, push, run</span>
docker build -t registry.example.com/order:\${GIT_SHA} .
docker push registry.example.com/order:\${GIT_SHA}
docker run -p 8080:8080 registry.example.com/order:\${GIT_SHA}` },
        { type: 'list', kind: 'check', items: [
          'Containers share the host kernel — much lighter than VMs',
          'Isolation comes from Linux <em>namespaces</em> (PID, net, mount, user) and <em>cgroups</em> (CPU, memory limits)',
          'The image is immutable; the same bytes run identically on any host',
          'Always tag with the git SHA, not just <code>:latest</code>'
        ] },

        { type: 'heading', text: 'Kubernetes core objects', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Pod</strong> — smallest deploy unit; one or more containers sharing network + storage',
          '<strong>Deployment</strong> — "I want N replicas of this image"; the controller reconciles toward that state',
          '<strong>Service</strong> — stable internal DNS + virtual IP that load-balances across matching Pods',
          '<strong>Ingress</strong> — external HTTP routing (often a layer above multiple Services)',
          '<strong>ConfigMap / Secret</strong> — config and secrets, mounted as env or files',
          '<strong>HPA</strong> — Horizontal Pod Autoscaler; scales replicas on CPU / memory / custom metrics',
          '<strong>Job / CronJob</strong> — one-off and scheduled tasks'
        ] },

        { type: 'code', lang: 'yaml', code: `<span class="com"># A minimal Deployment + Service</span>
<span class="kw">apiVersion</span>: apps/v1
<span class="kw">kind</span>: Deployment
<span class="kw">metadata</span>: { name: order-service }
<span class="kw">spec</span>:
  <span class="kw">replicas</span>: 3
  <span class="kw">selector</span>: { matchLabels: { app: order } }
  <span class="kw">template</span>:
    <span class="kw">metadata</span>: { labels: { app: order } }
    <span class="kw">spec</span>:
      <span class="kw">containers</span>:
      - <span class="kw">name</span>: order
        <span class="kw">image</span>: registry.example.com/order:abc123
        <span class="kw">ports</span>: [{ containerPort: 8080 }]
        <span class="kw">resources</span>:
          <span class="kw">requests</span>: { cpu: 100m, memory: 256Mi }
          <span class="kw">limits</span>:   { cpu: 500m, memory: 512Mi }
        <span class="kw">livenessProbe</span>:  { httpGet: { path: /healthz, port: 8080 } }
        <span class="kw">readinessProbe</span>: { httpGet: { path: /readyz,  port: 8080 } }
---
<span class="kw">apiVersion</span>: v1
<span class="kw">kind</span>: Service
<span class="kw">metadata</span>: { name: order-service }
<span class="kw">spec</span>:
  <span class="kw">selector</span>: { app: order }
  <span class="kw">ports</span>: [{ port: 80, targetPort: 8080 }]` },

        { type: 'heading', text: 'Self-healing in action', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'A Pod crashes (OOMKilled, panic, host failure)',
          'Controller observes: desired=3, observed=2',
          'Scheduler picks a healthy node, starts a replacement Pod',
          'Readiness probe must pass before the Service routes traffic to it',
          'Liveness probe failing later → kubelet restarts the container'
        ] },

        { type: 'callout', kind: 'tip', html: 'Kubernetes makes microservices much easier — but Kubernetes itself is a substantial platform to operate. Many teams start with a managed offering (EKS, GKE, AKS, DigitalOcean Kubernetes) so they don\'t own the control plane.' }
      ]
    },

    /* ============ Chapter 14 — CI/CD ============ */
    {
      id: 'ms-c14',
      title: 'CI/CD for Microservices',
      icon: '🚦',
      sections: [
        { type: 'heading', text: 'A pipeline per service', level: 1 },
        { type: 'para', html: 'If everything ships through one giant pipeline, you\'ve rebuilt the monolith. Each service should have <strong>its own</strong> pipeline that can build, test, and deploy that service independently.' },

        { type: 'heading', text: 'A typical pipeline', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Lint</strong> + static analysis',
          '<strong>Unit tests</strong> — fast feedback',
          '<strong>Build container image</strong>, tagged with the git SHA',
          '<strong>Integration tests</strong> against an ephemeral env (testcontainers, kind, k3d)',
          '<strong>Push image</strong> to the registry',
          '<strong>Deploy to staging</strong> automatically',
          '<strong>Smoke + contract tests</strong> in staging',
          '<strong>Promote to prod</strong> (often manual approval, or auto with safeguards)',
          '<strong>Canary or blue/green rollout</strong>',
          '<strong>Auto-rollback</strong> on health-check or error-rate alarms'
        ] },

        { type: 'callout', kind: 'info', html: 'Build artifacts <strong>once</strong>. The same image bytes promote through environments — different config, same binary. Rebuilding for prod is a recipe for "works in staging, breaks in prod" surprises.' },

        { type: 'heading', text: 'Progressive delivery', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Rolling</strong> — replace Pods a few at a time (k8s default)',
          '<strong>Blue/Green</strong> — run new version alongside old, flip traffic at the LB; easy rollback',
          '<strong>Canary</strong> — send a small fraction of traffic (1% → 5% → 25% → 100%) and watch metrics; pause or rollback if SLO drops',
          '<strong>Feature flags</strong> — release in code, enable per user / per tenant (separate from deploy)'
        ] },

        { type: 'heading', text: 'Contract testing — catch breaks in CI', level: 2 },
        { type: 'para', html: 'End-to-end tests across many services are slow, flaky, and expensive. <strong>Consumer-Driven Contracts (CDC)</strong> let each pair of services verify their API agreement independently in CI.' },
        { type: 'code', lang: 'js', code: `<span class="com">// Pact-style consumer contract (excerpt)</span>
provider(<span class="str">"users-service"</span>)
  .<span class="fn">uponReceiving</span>(<span class="str">"a request for user 7"</span>)
  .<span class="fn">withRequest</span>({ method: <span class="str">"GET"</span>, path: <span class="str">"/users/7"</span> })
  .<span class="fn">willRespondWith</span>({
    status: <span class="num">200</span>,
    body: { id: <span class="num">7</span>, name: like(<span class="str">"Ada"</span>), email: like(<span class="str">"ada@example.com"</span>) }
  });

<span class="com">// 1. Consumer test generates a contract file</span>
<span class="com">// 2. Contract is uploaded to a Pact Broker</span>
<span class="com">// 3. Provider CI verifies the contract against itself</span>
<span class="com">//    If the provider stops returning "email", its CI fails BEFORE prod.</span>` },

        { type: 'heading', text: 'Pipeline guardrails', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Required code review + green CI before merge',
          'SBOM + vulnerability scan on every image',
          'Automatic rollback on SLO burn — humans aren\'t fast enough at 3am',
          'Database migrations gated; backward-compatible schema changes preferred (expand → migrate → contract)',
          'Observability dashboards linked from the pipeline so the deployer can watch metrics in real time'
        ] },

        { type: 'callout', kind: 'warn', html: 'Without rollback automation you\'re relying on a tired on-call engineer at 3am. Investments here pay back many times during your first real outage.' }
      ]
    },

    /* ============ Chapter 15 — Anti-patterns ============ */
    {
      id: 'ms-c15',
      title: 'Common Anti-patterns',
      icon: '⚠️',
      sections: [
        { type: 'heading', text: 'What "microservices done badly" looks like', level: 1 },
        { type: 'para', html: 'Microservices come with real costs. When teams pay those costs without harvesting the benefits, the result is one of the patterns below — recognizable from a long way off.' },

        { type: 'heading', text: '1. The distributed monolith', level: 2 },
        { type: 'para', html: 'Many services, but they can\'t be deployed independently. Schema changes require cross-team meetings. One service down takes others with it.' },
        { type: 'list', kind: 'check', items: [
          'Several services share a single database',
          'A release requires deploying multiple services together',
          'Adding a column needs sign-off from 3 teams',
          'Tests only run against the full system',
          'A failure in one service breaks N others within seconds'
        ] },
        { type: 'callout', kind: 'danger', html: 'This is the absolute worst combination — you pay the distributed-systems tax AND keep the monolith\'s coupling. Cure: revisit boundaries, give each service its own DB, communicate via stable contracts and async events.' },

        { type: 'heading', text: '2. Chatty services', level: 2 },
        { type: 'para', html: 'A single user request triggers a chain of 15+ sync downstream calls. Latency compounds, failure compounds, debugging is a nightmare.' },
        { type: 'list', kind: 'check', items: [
          'Aggregate at a gateway/BFF instead of letting the browser fan out',
          'Batch downstream calls where possible',
          'Cache hot reads close to the caller',
          'If two services constantly chat, the boundary may be wrong — reconsider the split'
        ] },

        { type: 'heading', text: '3. Shared database', level: 2 },
        { type: 'para', html: 'Two or more services read/write the same tables directly. Schema changes ripple to every reader. The DB becomes a coupling point pretending to be storage.' },
        { type: 'callout', kind: 'warn', html: 'Cure: one owner per dataset. Others read via API or events. A read-only analytics replica is fine — direct write access from "outside" services is not.' },

        { type: 'heading', text: '4. Nano-services', level: 2 },
        { type: 'para', html: 'Splitting so finely that each "service" has one endpoint and 50 lines of logic. The overhead — separate repo, pipeline, alerting, deploy, network hop — dwarfs the value. Right-size services around <em>capabilities</em>, not file size.' },

        { type: 'heading', text: '5. God service', level: 2 },
        { type: 'para', html: 'One central service that knows about every other domain — orders, users, payments, catalog, shipping. Everyone calls it; if it\'s down, everything\'s down. It\'s a monolith wearing a microservice costume.' },

        { type: 'heading', text: '6. Versioning debt', level: 2 },
        { type: 'para', html: '/v1/, /v2/, /v3/ all alive in production because no one ever decommissions anything. Eventually every code path has 4 alive variants and nobody knows which one runs. Have a sunset policy. Actually retire old versions.' },

        { type: 'heading', text: '7. Cargo-cult adoption', level: 2 },
        { type: 'para', html: 'Choosing microservices because Netflix did, not because you have the team and problems for it. Three engineers running 25 services is operationally untenable — they\'ll spend more time on infrastructure than product.' },

        { type: 'heading', text: '8. No observability', level: 2 },
        { type: 'para', html: 'Running microservices without traces, metrics, and centralized logs is operating blind. You will spend hours grepping individual hosts trying to reconstruct a request that crossed 7 services. Invest in observability <em>before</em> you split.' },

        { type: 'heading', text: 'A healthy mental model', level: 2 },
        { type: 'callout', kind: 'tip', html: '<strong>Choose microservices for autonomy.</strong> Independent teams, independent deploys, independent scaling. If you can\'t name a concrete autonomy benefit you\'re getting, you\'re paying the cost for nothing.' },
        { type: 'list', kind: 'check', items: [
          'Start with a well-modularized monolith — extract only when concrete pain shows up',
          'Draw boundaries around bounded contexts, not arbitrary nouns',
          'Each service owns its data; communicate via contracts and events',
          'Invest in observability + CI/CD before you split — not after',
          'Plan for failure: timeouts, retries with idempotency, circuit breakers, bulkheads',
          'Remove dead code paths and old API versions on a schedule — discipline matters as much as architecture'
        ] }
      ]
    }

  ]
});

LEARN('kafka', {
  intro: 'Apache Kafka from first principles — a distributed commit log that became the data plane of modern systems. Producers, brokers, partitions, consumers, replication, and the patterns that wire it all together.',
  chapters: [

    /* ============ Chapter 1 — What is Kafka ============ */
    {
      id: 'kfk-c1',
      title: 'What is Kafka?',
      icon: '📨',
      sections: [
        { type: 'heading', text: 'Kafka is just a log', level: 1 },
        { type: 'para', html: 'Strip Kafka down to its essence and what you find is a <strong>distributed, append-only log</strong>. Producers append records to the end of a log; consumers read forward at their own pace, tracking where they are with an offset. That\'s the entire mental model. Everything else — partitions, brokers, replication, consumer groups — is mechanics in service of scaling and protecting that one idea.' },
        { type: 'para', html: 'Kafka is <em>not</em> a queue in the traditional sense (where a message gets consumed and disappears). It\'s a durable log. Records stay on disk until time-based, size-based, or compaction rules remove them. Many consumers can independently read the same record, and they can rewind to read it again if they want.' },

        { type: 'heading', text: 'The log, visualized', level: 2 },
        { type: 'image', alt: 'Kafka log with offsets and two consumer positions',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.r{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.rh{fill:#fff;stroke:#5e35b1;stroke-width:2;stroke-dasharray:4 3}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:13px;text-anchor:middle}.tt{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}.o{fill:#475569;font-family:Inter,sans-serif;font-size:11px;text-anchor:middle}.lab{fill:#7e57c2;font-family:Inter,sans-serif;font-size:13px;font-weight:700;text-anchor:middle}</style></defs>
<text x="380" y="28" class="tt">Topic-partition (append-only log)</text>
<g>
  <rect x="40"  y="80" width="70" height="50" class="r"/><text x="75"  y="110" class="t">A</text><text x="75"  y="150" class="o">offset 0</text>
  <rect x="115" y="80" width="70" height="50" class="r"/><text x="150" y="110" class="t">B</text><text x="150" y="150" class="o">1</text>
  <rect x="190" y="80" width="70" height="50" class="r"/><text x="225" y="110" class="t">C</text><text x="225" y="150" class="o">2</text>
  <rect x="265" y="80" width="70" height="50" class="r"/><text x="300" y="110" class="t">D</text><text x="300" y="150" class="o">3</text>
  <rect x="340" y="80" width="70" height="50" class="r"/><text x="375" y="110" class="t">E</text><text x="375" y="150" class="o">4</text>
  <rect x="415" y="80" width="70" height="50" class="r"/><text x="450" y="110" class="t">F</text><text x="450" y="150" class="o">5</text>
  <rect x="490" y="80" width="70" height="50" class="r"/><text x="525" y="110" class="t">G</text><text x="525" y="150" class="o">6</text>
  <rect x="565" y="80" width="70" height="50" class="rh"/><text x="600" y="110" class="t">↻ append</text><text x="600" y="150" class="o">7</text>
</g>
<polygon points="225,178 215,193 235,193" fill="#16a34a"/>
<text x="225" y="215" class="lab">consumer A · offset 2</text>
<polygon points="450,178 440,193 460,193" fill="#dc2626"/>
<text x="450" y="215" class="lab">consumer B · offset 5</text>
</svg>` },

        { type: 'callout', kind: 'info', html: '<strong>The "Kafka is a log" mantra</strong> isn\'t a metaphor. The actual on-disk format is a sequence of length-prefixed records in segment files. There is no random write, no in-place update — only append. That\'s why Kafka can absorb millions of records per second on commodity hardware.' },

        { type: 'heading', text: 'What Kafka is good for', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Decoupling services</strong> — producers don\'t know who their consumers are; consumers process at their own pace',
          '<strong>Event sourcing</strong> — the log IS the source of truth; state is derived by replay',
          '<strong>Stream processing</strong> — feed continuous data into transformation pipelines (Kafka Streams, Flink, Spark)',
          '<strong>Log aggregation</strong> — funnel logs/metrics from many services to durable, searchable storage',
          '<strong>Change data capture</strong> — turn database changes into events (Debezium reading the WAL/binlog)',
          '<strong>Replayable history</strong> — rebuild any read model from scratch by reprocessing the topic'
        ] },

        { type: 'heading', text: 'What Kafka is NOT', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'A relational database. No queries, no joins, no transactions across keys.',
          'A traditional message queue with per-message acks and deletes (RabbitMQ, SQS).',
          'A low-latency RPC system. Sub-millisecond round-trip is not its sweet spot.',
          'A cache. Records on disk, not in memory.'
        ] },

        { type: 'callout', kind: 'tip', html: 'If you find yourself reaching for "I want to ask Kafka: give me all records where x &gt; 5" — you want a database. Kafka is the firehose, not the search engine. Pair it with whatever read-side suits the query.' }
      ]
    },

    /* ============ Chapter 2 — Topics & partitions ============ */
    {
      id: 'kfk-c2',
      title: 'Topics & Partitions',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'The unit of parallelism', level: 1 },
        { type: 'para', html: 'A <strong>topic</strong> is just a name — like a table name in a database. The real storage lives in its <strong>partitions</strong>. Each partition is its own independent, ordered, append-only log. A topic with 6 partitions is really 6 separate logs that happen to share a name.' },
        { type: 'para', html: 'Partitions exist for three reasons: <strong>parallelism</strong> (different brokers can host different partitions; different consumers can read different partitions concurrently), <strong>scalability</strong> (a topic isn\'t bound to a single disk or machine), and <strong>ordering</strong> (within one partition, order is strictly preserved — which is the only ordering Kafka promises).' },

        { type: 'heading', text: 'Topic structure', level: 2 },
        { type: 'image', alt: 'A topic with three partitions across brokers',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.br{fill:#f3e5f5;stroke:#7e57c2;stroke-width:2}.p{fill:#ede7f6;stroke:#5e35b1;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b}.tt{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#1e293b;text-anchor:middle}.o{font-family:Inter,sans-serif;font-size:11px;fill:#475569}</style></defs>
<text x="380" y="28" class="tt">Topic "orders" — 3 partitions across 3 brokers</text>
<rect x="40" y="60" width="220" height="240" rx="10" class="br"/>
<text x="55" y="85" class="tb">broker-1</text>
<rect x="55" y="100" width="190" height="40" class="p"/><text x="65" y="125" class="t">P0 leader · [r0][r1][r2][r3]</text>
<rect x="55" y="150" width="190" height="40" class="p"/><text x="65" y="175" class="t">P1 follower · [r0][r1][r2]</text>

<rect x="280" y="60" width="220" height="240" rx="10" class="br"/>
<text x="295" y="85" class="tb">broker-2</text>
<rect x="295" y="100" width="190" height="40" class="p"/><text x="305" y="125" class="t">P1 leader · [r0][r1][r2]</text>
<rect x="295" y="150" width="190" height="40" class="p"/><text x="305" y="175" class="t">P2 follower · [r0]..[r4]</text>

<rect x="520" y="60" width="220" height="240" rx="10" class="br"/>
<text x="535" y="85" class="tb">broker-3</text>
<rect x="535" y="100" width="190" height="40" class="p"/><text x="545" y="125" class="t">P2 leader · [r0]..[r4]</text>
<rect x="535" y="150" width="190" height="40" class="p"/><text x="545" y="175" class="t">P0 follower · [r0]..[r3]</text>
</svg>` },

        { type: 'heading', text: 'Choosing partition count', level: 2 },
        { type: 'para', html: 'Partition count is one of the harder up-front decisions because <strong>increasing partitions later breaks key→partition stability</strong> (and you can\'t decrease at all). Some rules of thumb:' },
        { type: 'list', kind: 'check', items: [
          'Plan for peak <strong>throughput</strong>: target ~10 MB/s per partition as a starting baseline',
          'Plan for <strong>consumer parallelism</strong>: partition count = max consumers per group',
          'Don\'t go wild: 50–100 partitions per topic is plenty for most workloads',
          'Per-broker, &lt;4,000 partitions stays well within sane controller load (older brokers)',
          'If keys matter (per-user ordering), pick a count you won\'t need to grow soon'
        ] },

        { type: 'callout', kind: 'warn', html: '<strong>You cannot decrease partition count.</strong> You can add, but adding changes <code>hash(key) % N</code>, so existing keys may move and ordering for those keys breaks. Plan up front.' },

        { type: 'heading', text: 'Records, offsets, segments', level: 2 },
        { type: 'para', html: 'Each record in a partition gets a monotonically increasing 64-bit <strong>offset</strong>. Records are stored on disk in <strong>segment files</strong> (typically 1 GB chunks). Old segments get deleted when retention triggers; new ones roll over when the active one fills.' },
        { type: 'code', lang: 'bash', code: `<span class="com"># A partition on disk</span>
/kafka-logs/orders-2/
  00000000000000000000.log     <span class="com"># first segment</span>
  00000000000000000000.index
  00000000000003500000.log     <span class="com"># next segment, starts at offset 3,500,000</span>
  00000000000003500000.index
  ...
  00000000000027100000.log     <span class="com"># active segment (being appended to)</span>` },

        { type: 'callout', kind: 'info', html: 'A record is small: <code>(timestamp, key, value, headers, offset)</code>. Most overhead is in the value payload. Keys are optional but enable the partitioning + compaction story.' }
      ]
    },

    /* ============ Chapter 3 — Brokers & cluster ============ */
    {
      id: 'kfk-c3',
      title: 'Brokers, Clusters & the Controller',
      icon: '🖥️',
      sections: [
        { type: 'heading', text: 'A cluster of brokers', level: 1 },
        { type: 'para', html: 'A Kafka deployment is a <strong>cluster</strong> of <strong>brokers</strong> — servers that store partition data and serve client requests. Brokers don\'t shard a single dataset; they each store some partitions in full (with replicas spread across other brokers). Clients connect to any broker and discover the rest of the cluster through metadata.' },

        { type: 'image', alt: 'A Kafka cluster with 3 brokers, one acting as controller',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.br{fill:#f3e5f5;stroke:#7e57c2;stroke-width:2}.ctrl{fill:#fff3e0;stroke:#ef6c00;stroke-width:3}.cli{fill:#e0f2fe;stroke:#0284c7;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{fill:none;stroke:#475569;stroke-width:1.5}.dash{fill:none;stroke:#ef6c00;stroke-width:1.5;stroke-dasharray:5 4}</style></defs>
<text x="380" y="28" class="tt">Kafka cluster — 3 brokers, 1 controller</text>
<rect x="60"  y="120" width="180" height="120" rx="10" class="ctrl"/>
<text x="150" y="145" class="tb">broker-1 (controller)</text>
<text x="80" y="175" class="t">P0 leader · P3 leader</text>
<text x="80" y="195" class="t">P1 follower · P4 follower</text>
<text x="80" y="220" class="t" font-style="italic">+ metadata + elections</text>

<rect x="290" y="120" width="180" height="120" rx="10" class="br"/>
<text x="380" y="145" class="tb">broker-2</text>
<text x="310" y="175" class="t">P1 leader · P4 leader</text>
<text x="310" y="195" class="t">P2 follower · P5 follower</text>

<rect x="520" y="120" width="180" height="120" rx="10" class="br"/>
<text x="610" y="145" class="tb">broker-3</text>
<text x="540" y="175" class="t">P2 leader · P5 leader</text>
<text x="540" y="195" class="t">P0 follower · P3 follower</text>

<rect x="280" y="270" width="200" height="40" rx="8" class="cli"/>
<text x="380" y="295" class="tb">producer / consumer</text>
<line x1="330" y1="270" x2="150" y2="240" class="arr"/>
<line x1="380" y1="270" x2="380" y2="240" class="arr"/>
<line x1="430" y1="270" x2="610" y2="240" class="arr"/>

<line x1="240" y1="155" x2="290" y2="155" class="dash"/>
<line x1="470" y1="155" x2="520" y2="155" class="dash"/>
<text x="380" y="80" class="t" text-anchor="middle" font-style="italic">replication + metadata gossip</text>
</svg>` },

        { type: 'heading', text: 'What each broker does', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Stores assigned partitions (as leader of some, follower of others) on local disk',
          'Serves produce + fetch requests from clients for partitions it leads',
          'Replicates from leaders to followers for partitions it follows',
          'Reports liveness + ISR membership to the controller',
          'Optionally runs the controller role (one elected per cluster)'
        ] },

        { type: 'heading', text: 'The controller', level: 2 },
        { type: 'para', html: 'Exactly one broker at a time acts as the <strong>controller</strong>. It owns the cluster\'s metadata: which broker leads which partition, which brokers are alive, who\'s in each partition\'s ISR. When a broker dies, the controller picks new leaders for that broker\'s partitions from their ISRs and tells everyone.' },
        { type: 'callout', kind: 'info', html: '<strong>KRaft vs ZooKeeper.</strong> Before Kafka 2.8, metadata lived in a separate ZooKeeper ensemble. KRaft (KIP-500) replaced it with an internal Raft-managed metadata log running on a quorum of controller-capable brokers. Same role; no external dependency.' },

        { type: 'heading', text: 'Client connection lifecycle', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// 1. Client connects to ANY broker in bootstrap.servers</span>
props.<span class="fn">put</span>(<span class="str">"bootstrap.servers"</span>, <span class="str">"b1:9092,b2:9092,b3:9092"</span>);

<span class="com">// 2. Broker replies with cluster metadata: every broker, every</span>
<span class="com">//    partition, who leads what, who's in each ISR.</span>

<span class="com">// 3. Client connects directly to the leader of each partition</span>
<span class="com">//    it wants to read/write. Bootstrap is only the entry point.</span>

<span class="com">// 4. Metadata is refreshed periodically + on errors</span>
<span class="com">//    (e.g., leader changed → reconnect to new leader).</span>` }
      ]
    },

    /* ============ Chapter 4 — Producers ============ */
    {
      id: 'kfk-c4',
      title: 'Producers',
      icon: '📤',
      sections: [
        { type: 'heading', text: 'Producing records', level: 1 },
        { type: 'para', html: 'A <strong>producer</strong> sends records (key + value + headers + timestamp) to a topic. The Kafka client doesn\'t fire one request per record — it batches records per partition, ships full batches when they\'re large enough or old enough, and pipelines requests. That\'s how you get hundreds of thousands of records per second per producer.' },

        { type: 'heading', text: 'Hello, producer', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Properties</span> props = <span class="kw">new</span> <span class="ty">Properties</span>();
props.<span class="fn">put</span>(<span class="str">"bootstrap.servers"</span>,  <span class="str">"broker1:9092,broker2:9092"</span>);
props.<span class="fn">put</span>(<span class="str">"key.serializer"</span>,    <span class="str">"org.apache.kafka.common.serialization.StringSerializer"</span>);
props.<span class="fn">put</span>(<span class="str">"value.serializer"</span>,  <span class="str">"org.apache.kafka.common.serialization.StringSerializer"</span>);
props.<span class="fn">put</span>(<span class="str">"acks"</span>,              <span class="str">"all"</span>);
props.<span class="fn">put</span>(<span class="str">"enable.idempotence"</span>, <span class="str">"true"</span>);

<span class="kw">try</span> (<span class="ty">KafkaProducer</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; producer = <span class="kw">new</span> <span class="ty">KafkaProducer</span>&lt;&gt;(props)) {
    <span class="ty">ProducerRecord</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; r = <span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(
        <span class="str">"orders"</span>, <span class="str">"user-42"</span>, <span class="str">"{\\"amount\\":99}"</span>);

    producer.<span class="fn">send</span>(r, (md, ex) -&gt; {
        <span class="kw">if</span> (ex != <span class="kw">null</span>) log.<span class="fn">error</span>(<span class="str">"send failed"</span>, ex);
        <span class="kw">else</span> log.<span class="fn">info</span>(<span class="str">"sent to "</span> + md.<span class="fn">topic</span>() + <span class="str">"-"</span> + md.<span class="fn">partition</span>() + <span class="str">"@"</span> + md.<span class="fn">offset</span>());
    });
}` },

        { type: 'heading', text: 'Producer → broker flow', level: 2 },
        { type: 'image', alt: 'Producer send pipeline',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.s{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.b{fill:#f3e5f5;stroke:#7e57c2;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{fill:none;stroke:#5e35b1;stroke-width:2;marker-end:url(#ah)}</style>
<marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#5e35b1"/></marker>
</defs>
<text x="380" y="28" class="tt">Producer pipeline (in-client)</text>
<rect x="20"  y="100" width="120" height="70" rx="8" class="s"/><text x="80"  y="135" class="tb">send()</text><text x="80" y="155" class="t">user thread</text>
<rect x="170" y="100" width="120" height="70" rx="8" class="s"/><text x="230" y="130" class="tb">Partitioner</text><text x="230" y="150" class="t">hash(key) % N</text>
<rect x="320" y="100" width="120" height="70" rx="8" class="s"/><text x="380" y="130" class="tb">Record</text><text x="380" y="150" class="t">Accumulator (batches)</text>
<rect x="470" y="100" width="120" height="70" rx="8" class="s"/><text x="530" y="130" class="tb">Sender</text><text x="530" y="150" class="t">thread (network)</text>
<rect x="620" y="100" width="120" height="70" rx="8" class="b"/><text x="680" y="130" class="tb">Broker</text><text x="680" y="150" class="t">leader of P</text>
<line x1="140" y1="135" x2="170" y2="135" class="arr"/>
<line x1="290" y1="135" x2="320" y2="135" class="arr"/>
<line x1="440" y1="135" x2="470" y2="135" class="arr"/>
<line x1="590" y1="135" x2="620" y2="135" class="arr"/>
<text x="380" y="220" class="t" font-style="italic">batch.size + linger.ms decide when the Sender ships a batch</text>
<text x="380" y="245" class="t" font-style="italic">acks decides when send() promises return</text>
</svg>` },

        { type: 'heading', text: 'The knobs that matter', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>acks</code> — durability: <code>0</code> fire-and-forget · <code>1</code> leader-only · <code>all</code> ISR-wide. Use <code>all</code> in production.',
          '<code>enable.idempotence=true</code> — dedupes producer-side retries; safe to leave on. Implies acks=all.',
          '<code>batch.size</code> — max bytes per per-partition batch; larger = better throughput, more memory',
          '<code>linger.ms</code> — how long the Sender waits to fill a batch; 5–20 ms is a common sweet spot',
          '<code>compression.type</code> — <code>snappy</code>, <code>lz4</code>, <code>zstd</code>, or <code>gzip</code>. Compress per batch; usually a big win.',
          '<code>max.in.flight.requests.per.connection</code> — leave at default with idempotence on',
          '<code>retries</code> — high (default is Integer.MAX_VALUE) is fine with idempotence; combined with delivery.timeout.ms'
        ] },

        { type: 'callout', kind: 'warn', html: '<strong>send() is asynchronous</strong>. It returns immediately with a <code>Future</code>; the record is just in the in-memory accumulator. If your process crashes before the Sender flushes (and acks come back), those records vanish. <code>producer.flush()</code> or <code>send().get()</code> if you need synchronous semantics.' }
      ]
    },

    /* ============ Chapter 5 — Replication & ISR ============ */
    {
      id: 'kfk-c5',
      title: 'Replication & ISR',
      icon: '🛡️',
      sections: [
        { type: 'heading', text: 'How Kafka stays durable', level: 1 },
        { type: 'para', html: 'Every partition has a <strong>replication factor</strong> (RF) — the number of copies stored on different brokers. RF=3 is the production standard. One replica is the leader; the rest are followers. Followers continuously fetch from the leader and replicate the log byte-for-byte.' },
        { type: 'para', html: 'A follower that is fully caught up (within <code>replica.lag.time.max.ms</code>, default 30 s) is part of the <strong>ISR</strong> — In-Sync Replicas. Stale or dead followers fall out of the ISR. When the leader dies, the controller picks the new leader from the surviving ISR members.' },

        { type: 'heading', text: 'ISR over time', level: 2 },
        { type: 'image', alt: 'ISR shrinking and expanding as a follower falls behind and catches up',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.l{fill:#dcfce7;stroke:#15803d;stroke-width:2}.f{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.fo{fill:#fee2e2;stroke:#dc2626;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:12px;fill:#475569;text-anchor:middle}</style></defs>
<text x="380" y="28" class="tt">ISR over time — RF=3</text>

<text x="125" y="65" class="tb">t=0   healthy</text>
<rect x="60" y="80" width="130" height="50" rx="8" class="l"/><text x="125" y="100" class="tb">leader B1</text><text x="125" y="118" class="t">offset 100</text>
<rect x="60" y="140" width="130" height="40" rx="8" class="f"/><text x="125" y="165" class="t">B2 · offset 100</text>
<rect x="60" y="185" width="130" height="40" rx="8" class="f"/><text x="125" y="210" class="t">B3 · offset 100</text>
<text x="125" y="245" class="lab">ISR = {B1, B2, B3}</text>

<text x="380" y="65" class="tb">t=1   B3 slowing</text>
<rect x="315" y="80" width="130" height="50" rx="8" class="l"/><text x="380" y="100" class="tb">leader B1</text><text x="380" y="118" class="t">offset 250</text>
<rect x="315" y="140" width="130" height="40" rx="8" class="f"/><text x="380" y="165" class="t">B2 · offset 250</text>
<rect x="315" y="185" width="130" height="40" rx="8" class="fo"/><text x="380" y="210" class="t">B3 · offset 90 ⚠️</text>
<text x="380" y="245" class="lab">ISR = {B1, B2}  (B3 dropped)</text>

<text x="635" y="65" class="tb">t=2   B3 catches up</text>
<rect x="570" y="80" width="130" height="50" rx="8" class="l"/><text x="635" y="100" class="tb">leader B1</text><text x="635" y="118" class="t">offset 400</text>
<rect x="570" y="140" width="130" height="40" rx="8" class="f"/><text x="635" y="165" class="t">B2 · offset 400</text>
<rect x="570" y="185" width="130" height="40" rx="8" class="f"/><text x="635" y="210" class="t">B3 · offset 400</text>
<text x="635" y="245" class="lab">ISR = {B1, B2, B3}</text>
</svg>` },

        { type: 'heading', text: 'acks=all + min.insync.replicas', level: 2 },
        { type: 'para', html: 'These two settings together give you the "no data loss" promise. <code>acks=all</code> tells the leader to wait until every ISR member has the record before acking. <code>min.insync.replicas</code> tells the broker the minimum ISR size required to accept writes at all.' },
        { type: 'code', lang: 'properties', code: `<span class="com"># Producer side</span>
acks=all
enable.idempotence=true

<span class="com"># Broker / topic side</span>
min.insync.replicas=2
<span class="com"># RF=3 + min.insync=2 = survives one broker loss with no data loss,
# and reject writes if only one replica is in sync (avoids data loss
# from unclean elections).</span>` },

        { type: 'callout', kind: 'warn', html: '<strong>unclean.leader.election.enable</strong> — leave this <code>false</code>. If <code>true</code>, a non-ISR replica can be promoted to leader during a failure, silently discarding already-acked records. Trading availability for safety; usually the wrong trade.' },

        { type: 'heading', text: 'High watermark', level: 2 },
        { type: 'para', html: 'Consumers can only read records up to the <strong>high watermark</strong> — the highest offset replicated to all ISR members. Beyond that, the record exists on the leader but isn\'t "committed" yet and might disappear in a leader change. Kafka hides anything past the high watermark from consumers.' },
        { type: 'callout', kind: 'info', html: 'High watermark = the cluster\'s "this record is durable" line. The leader\'s log end offset can be ahead — those records are still in flight. This is why durability and visibility are linked.' }
      ]
    },

    /* ============ Chapter 6 — Consumers & groups ============ */
    {
      id: 'kfk-c6',
      title: 'Consumers & Consumer Groups',
      icon: '👥',
      sections: [
        { type: 'heading', text: 'How consumption scales', level: 1 },
        { type: 'para', html: 'Consumers identify themselves with a <code>group.id</code>. All consumers sharing the same group form a <strong>consumer group</strong>. Kafka divides the topic\'s partitions among them — each partition assigned to <em>exactly one</em> consumer in the group at any moment.' },
        { type: 'para', html: 'Different groups are completely independent: each gets its own copy of every record. So one topic can serve many applications, each with their own group, each at their own pace.' },

        { type: 'image', alt: 'Two consumer groups on the same topic',
          svg: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.top{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.p{fill:#fff;stroke:#5e35b1;stroke-width:1.5}.gA{fill:#dcfce7;stroke:#15803d;stroke-width:2}.gB{fill:#fef3c7;stroke:#a16207;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.arrA{fill:none;stroke:#15803d;stroke-width:1.5;stroke-dasharray:4 3}.arrB{fill:none;stroke:#a16207;stroke-width:1.5;stroke-dasharray:4 3}</style></defs>
<text x="400" y="28" class="tt">One topic · 6 partitions · 2 groups</text>
<rect x="270" y="60" width="260" height="180" rx="10" class="top"/>
<text x="400" y="85" class="tb">topic "orders"</text>
<rect x="285" y="100" width="60" height="40" class="p"/><text x="315" y="125" class="t">P0</text>
<rect x="355" y="100" width="60" height="40" class="p"/><text x="385" y="125" class="t">P1</text>
<rect x="425" y="100" width="60" height="40" class="p"/><text x="455" y="125" class="t">P2</text>
<rect x="285" y="150" width="60" height="40" class="p"/><text x="315" y="175" class="t">P3</text>
<rect x="355" y="150" width="60" height="40" class="p"/><text x="385" y="175" class="t">P4</text>
<rect x="425" y="150" width="60" height="40" class="p"/><text x="455" y="175" class="t">P5</text>

<rect x="20" y="270" width="220" height="70" rx="10" class="gA"/>
<text x="130" y="290" class="tb">group "billing"</text>
<text x="130" y="312" class="t">A (P0,P1) · B (P2,P3) · C (P4,P5)</text>

<rect x="560" y="270" width="220" height="70" rx="10" class="gB"/>
<text x="670" y="290" class="tb">group "analytics"</text>
<text x="670" y="312" class="t">X (P0,P1,P2) · Y (P3,P4,P5)</text>

<line x1="315" y1="190" x2="100" y2="270" class="arrA"/>
<line x1="385" y1="190" x2="130" y2="270" class="arrA"/>
<line x1="455" y1="190" x2="160" y2="270" class="arrA"/>
<line x1="315" y1="190" x2="650" y2="270" class="arrB"/>
<line x1="385" y1="190" x2="670" y2="270" class="arrB"/>
<line x1="455" y1="190" x2="700" y2="270" class="arrB"/>
</svg>` },

        { type: 'heading', text: 'A poll-loop in code', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Properties</span> p = <span class="kw">new</span> <span class="ty">Properties</span>();
p.<span class="fn">put</span>(<span class="str">"bootstrap.servers"</span>, <span class="str">"b1:9092"</span>);
p.<span class="fn">put</span>(<span class="str">"group.id"</span>,          <span class="str">"billing"</span>);
p.<span class="fn">put</span>(<span class="str">"key.deserializer"</span>,   <span class="str">"...StringDeserializer"</span>);
p.<span class="fn">put</span>(<span class="str">"value.deserializer"</span>, <span class="str">"...StringDeserializer"</span>);
p.<span class="fn">put</span>(<span class="str">"enable.auto.commit"</span>, <span class="str">"false"</span>);   <span class="com">// manual</span>
p.<span class="fn">put</span>(<span class="str">"auto.offset.reset"</span>,  <span class="str">"earliest"</span>);

<span class="kw">try</span> (<span class="ty">KafkaConsumer</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; c = <span class="kw">new</span> <span class="ty">KafkaConsumer</span>&lt;&gt;(p)) {
    c.<span class="fn">subscribe</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"orders"</span>));
    <span class="kw">while</span> (running) {
        <span class="ty">ConsumerRecords</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; recs = c.<span class="fn">poll</span>(<span class="ty">Duration</span>.<span class="fn">ofMillis</span>(<span class="num">200</span>));
        <span class="kw">for</span> (<span class="kw">var</span> r : recs) <span class="fn">process</span>(r);
        c.<span class="fn">commitSync</span>();   <span class="com">// at-least-once</span>
    }
}` },

        { type: 'heading', text: 'Partition assignment strategies', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Range</strong> (legacy default for some configs) — contiguous partitions to each consumer, per-topic',
          '<strong>RoundRobin</strong> — interleaves partitions across consumers',
          '<strong>Sticky</strong> — minimizes movement on rebalance; tries to keep partitions on the same consumer',
          '<strong>CooperativeSticky</strong> — incremental rebalance: only the moving partitions are revoked, no global stop-the-world. Recommended for newer apps.'
        ] },

        { type: 'callout', kind: 'tip', html: 'For long-running, low-latency consumer apps, <strong>CooperativeStickyAssignor</strong> + manual commit + an explicit DLQ is the modern default stack.' }
      ]
    },

    /* ============ Chapter 7 — Offsets & delivery semantics ============ */
    {
      id: 'kfk-c7',
      title: 'Offsets & Delivery Semantics',
      icon: '🔖',
      sections: [
        { type: 'heading', text: 'Where you are in the log', level: 1 },
        { type: 'para', html: 'An <strong>offset</strong> is just an integer — the position of a record in a partition. Consumers track their own offsets and periodically commit them so they can resume after a crash. Committed offsets live in the internal <code>__consumer_offsets</code> topic (a compacted topic keyed by <code>(group, topic, partition)</code>).' },

        { type: 'heading', text: 'Auto vs manual commit', level: 2 },
        { type: 'code', lang: 'properties', code: `<span class="com"># Auto-commit: background thread, every auto.commit.interval.ms</span>
enable.auto.commit=true
auto.commit.interval.ms=5000

<span class="com"># Manual: you call commitSync() / commitAsync() yourself</span>
enable.auto.commit=false` },

        { type: 'callout', kind: 'warn', html: '<strong>Auto-commit is dangerous for correctness.</strong> It commits offsets the consumer has <em>received</em>, not records you have actually <em>processed</em>. If a record was received and then a crash happens before processing, the offset may already be committed — silent data loss. Most production apps disable auto-commit and commit after processing.' },

        { type: 'heading', text: 'Three delivery guarantees', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>At-most-once</strong> — commit BEFORE processing. Crash mid-process? The record is lost but never duplicated.',
          '<strong>At-least-once</strong> — commit AFTER processing. Default & safest default. Crash mid-process? The record may be reprocessed; your code must be idempotent.',
          '<strong>Exactly-once</strong> — atomic produce + offset commit using transactions. Strictly within Kafka boundaries; if you also write to a DB you still need an idempotent DB layer (or transactional outbox).'
        ] },

        { type: 'heading', text: 'The transactional producer (EOS)', level: 2 },
        { type: 'code', lang: 'java', code: `props.<span class="fn">put</span>(<span class="str">"transactional.id"</span>,   <span class="str">"orders-processor-1"</span>);
props.<span class="fn">put</span>(<span class="str">"enable.idempotence"</span>, <span class="str">"true"</span>);

producer.<span class="fn">initTransactions</span>();

<span class="kw">while</span> (running) {
    <span class="ty">ConsumerRecords</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; recs = consumer.<span class="fn">poll</span>(<span class="num">200</span>);
    producer.<span class="fn">beginTransaction</span>();
    <span class="kw">try</span> {
        <span class="kw">for</span> (<span class="kw">var</span> r : recs) {
            producer.<span class="fn">send</span>(<span class="fn">transform</span>(r));
        }
        <span class="ty">Map</span>&lt;<span class="ty">TopicPartition</span>,<span class="ty">OffsetAndMetadata</span>&gt; offsets = <span class="fn">offsetsForBatch</span>(recs);
        producer.<span class="fn">sendOffsetsToTransaction</span>(offsets, consumer.<span class="fn">groupMetadata</span>());
        producer.<span class="fn">commitTransaction</span>();
    } <span class="kw">catch</span> (<span class="ty">Exception</span> e) {
        producer.<span class="fn">abortTransaction</span>();
    }
}` },
        { type: 'image', alt: 'Exactly-once with transactions',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.s{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{fill:none;stroke:#5e35b1;stroke-width:2;marker-end:url(#h2)}.box{fill:none;stroke:#7e57c2;stroke-width:2;stroke-dasharray:6 4}</style>
<marker id="h2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#5e35b1"/></marker></defs>
<text x="380" y="28" class="tt">Exactly-once: read-process-write</text>
<rect x="30"  y="100" width="130" height="60" rx="10" class="s"/><text x="95"  y="135" class="tb">input topic</text>
<rect x="200" y="100" width="130" height="60" rx="10" class="s"/><text x="265" y="135" class="tb">consumer.poll</text>
<rect x="370" y="100" width="130" height="60" rx="10" class="s"/><text x="435" y="135" class="tb">producer.send</text>
<rect x="540" y="100" width="180" height="60" rx="10" class="s"/><text x="630" y="125" class="tb">output topic</text><text x="630" y="148" class="t">+ __consumer_offsets</text>
<line x1="160" y1="130" x2="200" y2="130" class="arr"/>
<line x1="330" y1="130" x2="370" y2="130" class="arr"/>
<line x1="500" y1="130" x2="540" y2="130" class="arr"/>
<rect x="190" y="80" width="540" height="100" rx="14" class="box"/>
<text x="460" y="200" class="t" font-style="italic">beginTransaction → send → sendOffsetsToTransaction → commitTransaction</text>
</svg>` }
      ]
    },

    /* ============ Chapter 8 — Keys & ordering ============ */
    {
      id: 'kfk-c8',
      title: 'Keys & Ordering Guarantees',
      icon: '🔑',
      sections: [
        { type: 'heading', text: 'Same key → same partition', level: 1 },
        { type: 'para', html: 'When you produce a record with a key, the partitioner runs <code>hash(key) % numPartitions</code> and picks a partition. The hash is deterministic, so records with the same key always land in the same partition — and therefore are stored in the order they were produced.' },
        { type: 'para', html: 'Without a key (null), the modern partitioner sticky-batches records into a partition until the batch ships, then rotates. Throughput is fine; ordering across the topic is not preserved.' },

        { type: 'heading', text: 'Why this matters', level: 2 },
        { type: 'list', kind: 'check', items: [
          'For per-user event ordering, use <code>userId</code> as the key',
          'For per-order workflows (created → paid → shipped), use <code>orderId</code> as the key',
          'For "this many events per second, who cares which one comes first" use null keys for round-robin balance',
          'Hot keys cause one partition to be hotter than others — diagnose with partition lag distribution'
        ] },

        { type: 'callout', kind: 'warn', html: '<strong>Repartitioning breaks key→partition stability.</strong> If you go from 6 to 9 partitions, <code>hash(k) % 6</code> and <code>hash(k) % 9</code> map most keys to different partitions. Existing key streams effectively splinter. If ordering matters, plan partition count up front and avoid changes.' },

        { type: 'heading', text: 'Ordering: what is guaranteed', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Within a partition</strong> — strict insertion order',
          '<strong>Across partitions of the same topic</strong> — no order',
          '<strong>Same key, single producer, with idempotence on</strong> — strict order, no duplicates from retries',
          '<strong>Same key, multiple producers</strong> — order is by arrival at the leader (a network race)'
        ] },

        { type: 'callout', kind: 'tip', html: 'If you really need a global total ordering of every event in a topic, you need <strong>one partition</strong> — and you cap your throughput at one consumer\'s speed. Almost always, "per-key ordering" is what you actually want.' }
      ]
    },

    /* ============ Chapter 9 — Retention & compaction ============ */
    {
      id: 'kfk-c9',
      title: 'Retention & Log Compaction',
      icon: '🗜️',
      sections: [
        { type: 'heading', text: 'How records eventually go away', level: 1 },
        { type: 'para', html: 'Kafka doesn\'t keep records forever. Each topic has a <strong>cleanup policy</strong>:' },
        { type: 'list', kind: 'bullet', items: [
          '<code>cleanup.policy=delete</code> — time-based and/or size-based deletion (the classic policy)',
          '<code>cleanup.policy=compact</code> — log compaction: keep only the latest record per key',
          '<code>cleanup.policy=compact,delete</code> — both: compact AND eventually drop oldest'
        ] },

        { type: 'heading', text: 'Time / size based retention', level: 2 },
        { type: 'code', lang: 'properties', code: `<span class="com"># keep records for 7 days</span>
retention.ms=604800000

<span class="com"># OR keep up to 50 GB per partition (whichever triggers first)</span>
retention.bytes=53687091200

<span class="com"># segment files roll every 1 GB or 7 days, whichever first</span>
segment.bytes=1073741824
segment.ms=604800000` },

        { type: 'heading', text: 'Log compaction', level: 2 },
        { type: 'para', html: '<strong>Compaction</strong> keeps the most recent record per key, dropping older versions over time. Compacted topics are perfect for <em>current-state</em> streams — "the latest user profile per userId," "the current price per productId." A new consumer reading from the start sees one record per key.' },

        { type: 'image', alt: 'Log before and after compaction',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b{fill:#ede7f6;stroke:#5e35b1;stroke-width:1.5}.b2{fill:#fff;stroke:#5e35b1;stroke-width:1.5}.x{fill:#fee2e2;stroke:#dc2626;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}</style></defs>
<text x="380" y="28" class="tt">Log compaction</text>
<text x="40" y="80" class="tb">Before:</text>
<g>
  <rect x="40" y="90" width="80" height="40" class="b"/><text x="80" y="115" class="t">k1=A</text>
  <rect x="125" y="90" width="80" height="40" class="b"/><text x="165" y="115" class="t">k2=X</text>
  <rect x="210" y="90" width="80" height="40" class="x"/><text x="250" y="115" class="t">k1=B (old)</text>
  <rect x="295" y="90" width="80" height="40" class="x"/><text x="335" y="115" class="t">k1=C (old)</text>
  <rect x="380" y="90" width="80" height="40" class="x"/><text x="420" y="115" class="t">k2=Y (old)</text>
  <rect x="465" y="90" width="80" height="40" class="b"/><text x="505" y="115" class="t">k3=P</text>
  <rect x="550" y="90" width="80" height="40" class="b"/><text x="590" y="115" class="t">k1=D</text>
  <rect x="635" y="90" width="80" height="40" class="b"/><text x="675" y="115" class="t">k2=Z</text>
</g>
<text x="40" y="195" class="tb">After:</text>
<g>
  <rect x="40" y="205" width="80" height="40" class="b2"/><text x="80" y="230" class="t">k3=P</text>
  <rect x="125" y="205" width="80" height="40" class="b2"/><text x="165" y="230" class="t">k1=D</text>
  <rect x="210" y="205" width="80" height="40" class="b2"/><text x="250" y="230" class="t">k2=Z</text>
</g>
<text x="380" y="265" class="t" font-style="italic">Only the latest value per key remains</text>
</svg>` },

        { type: 'heading', text: 'Tombstones', level: 2 },
        { type: 'para', html: 'To delete a key from a compacted topic, produce a record with that key and <code>value=null</code>. That\'s a <strong>tombstone</strong>. After the configured tombstone retention period, the tombstone itself is removed, and the key disappears from the topic entirely.' },
        { type: 'callout', kind: 'info', html: 'Compaction is a background process running on the broker. It runs over the "tail" of the log (segments before the active one). The active segment is never compacted while it\'s being written to.' }
      ]
    },

    /* ============ Chapter 10 — Kafka Connect ============ */
    {
      id: 'kfk-c10',
      title: 'Kafka Connect',
      icon: '🔌',
      sections: [
        { type: 'heading', text: 'Moving data without writing producers', level: 1 },
        { type: 'para', html: '<strong>Kafka Connect</strong> is a framework for getting data in and out of Kafka declaratively, via reusable plugins called <strong>connectors</strong>. Instead of writing a custom producer for every database or sink, you deploy a pre-built connector and configure it with JSON.' },

        { type: 'image', alt: 'Source and sink connector pipelines',
          svg: `<svg viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.db{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.con{fill:#fef3c7;stroke:#a16207;stroke-width:2}.kt{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.sink{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{fill:none;stroke:#5e35b1;stroke-width:2;marker-end:url(#h3)}</style>
<marker id="h3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#5e35b1"/></marker></defs>
<text x="390" y="28" class="tt">Kafka Connect — source &amp; sink</text>
<rect x="20"  y="70"  width="130" height="60" rx="10" class="db"/><text x="85"  y="105" class="tb">PostgreSQL</text>
<rect x="170" y="70"  width="130" height="60" rx="10" class="con"/><text x="235" y="100" class="tb">Debezium</text><text x="235" y="120" class="t">source connector</text>
<rect x="320" y="70"  width="170" height="60" rx="10" class="kt"/><text x="405" y="105" class="tb">Kafka topic</text>
<rect x="510" y="40"  width="130" height="60" rx="10" class="con"/><text x="575" y="70" class="tb">S3 sink</text>
<rect x="660" y="40"  width="100" height="60" rx="10" class="sink"/><text x="710" y="75" class="tb">S3</text>
<rect x="510" y="110" width="130" height="60" rx="10" class="con"/><text x="575" y="140" class="tb">ES sink</text>
<rect x="660" y="110" width="100" height="60" rx="10" class="sink"/><text x="710" y="145" class="tb">Elasticsearch</text>
<line x1="150" y1="100" x2="170" y2="100" class="arr"/>
<line x1="300" y1="100" x2="320" y2="100" class="arr"/>
<line x1="490" y1="100" x2="510" y2="70" class="arr"/>
<line x1="490" y1="100" x2="510" y2="140" class="arr"/>
<line x1="640" y1="70" x2="660" y2="70" class="arr"/>
<line x1="640" y1="140" x2="660" y2="140" class="arr"/>
<text x="405" y="230" class="t" font-style="italic">Source: external → Kafka  ·  Sink: Kafka → external</text>
</svg>` },

        { type: 'heading', text: 'A source connector config', level: 2 },
        { type: 'code', lang: 'json', code: `{
  <span class="str">"name"</span>: <span class="str">"orders-debezium"</span>,
  <span class="str">"config"</span>: {
    <span class="str">"connector.class"</span>: <span class="str">"io.debezium.connector.postgresql.PostgresConnector"</span>,
    <span class="str">"database.hostname"</span>: <span class="str">"db-primary"</span>,
    <span class="str">"database.port"</span>:     <span class="str">"5432"</span>,
    <span class="str">"database.user"</span>:     <span class="str">"replicator"</span>,
    <span class="str">"database.dbname"</span>:   <span class="str">"shop"</span>,
    <span class="str">"plugin.name"</span>:       <span class="str">"pgoutput"</span>,
    <span class="str">"topic.prefix"</span>:      <span class="str">"shop"</span>,
    <span class="str">"table.include.list"</span>: <span class="str">"public.orders,public.line_items"</span>
  }
}` },

        { type: 'heading', text: 'Debezium and CDC', level: 2 },
        { type: 'para', html: '<strong>Debezium</strong> is the most popular source connector — it streams database <strong>change events</strong> (CDC) into Kafka by tailing the database\'s replication log: PostgreSQL WAL, MySQL binlog, MongoDB oplog. Every INSERT/UPDATE/DELETE becomes a record on a topic. Downstream consumers can build read models, caches, search indexes, or other systems that stay in sync with the source DB.' },
        { type: 'callout', kind: 'info', html: 'The <strong>outbox pattern</strong> is "Debezium + a regular DB table." Your service writes a regular row plus an <code>outbox</code> row in one transaction. Debezium tails the outbox and turns rows into Kafka events. Atomic, durable, no two-phase commit.' },

        { type: 'heading', text: 'Connect deployment', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Connect runs in <strong>workers</strong> (separate JVMs). Connectors are deployed into a worker cluster.',
          'Distributed mode = HA + scaling: workers share work across <strong>tasks</strong>',
          'A connector splits into N tasks; each task processes some partitions / shards',
          'Configuration is REST: <code>POST /connectors</code> to create, <code>GET /connectors/X/status</code> to inspect'
        ] }
      ]
    },

    /* ============ Chapter 11 — Kafka Streams ============ */
    {
      id: 'kfk-c11',
      title: 'Kafka Streams',
      icon: '🌊',
      sections: [
        { type: 'heading', text: 'Stream processing in your app', level: 1 },
        { type: 'para', html: '<strong>Kafka Streams</strong> is a Java library — not a separate cluster. You import it, build a topology, and your application <em>is</em> the stream processor. Behind the scenes, partitions assigned to your app instance are processed in parallel; if you start more instances, work is rebalanced.' },

        { type: 'heading', text: 'KStream and KTable', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>KStream&lt;K,V&gt;</code> — a record stream. Each record is an independent event. Like an INSERT-only log.',
          '<code>KTable&lt;K,V&gt;</code> — a changelog interpreted as a table. The latest value per key. Like a materialized view.',
          'You can convert between them: <code>.toStream()</code> / <code>.toTable()</code>',
          'Operations: stateless (<code>filter</code>, <code>map</code>) vs stateful (<code>count</code>, <code>aggregate</code>, <code>join</code>)'
        ] },

        { type: 'heading', text: 'A simple topology', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">StreamsBuilder</span> builder = <span class="kw">new</span> <span class="ty">StreamsBuilder</span>();

<span class="ty">KStream</span>&lt;<span class="ty">String</span>,<span class="ty">Order</span>&gt; orders = builder.<span class="fn">stream</span>(<span class="str">"orders"</span>);

<span class="ty">KTable</span>&lt;<span class="ty">String</span>,<span class="ty">Long</span>&gt; perUserCount = orders
    .<span class="fn">filter</span>((k,v) -&gt; v.<span class="fn">amount</span>() &gt; <span class="num">0</span>)
    .<span class="fn">groupByKey</span>()
    .<span class="fn">count</span>();

perUserCount.<span class="fn">toStream</span>().<span class="fn">to</span>(<span class="str">"orders-per-user"</span>);

<span class="kw">new</span> <span class="ty">KafkaStreams</span>(builder.<span class="fn">build</span>(), props).<span class="fn">start</span>();` },

        { type: 'heading', text: 'Stateful operations & state stores', level: 2 },
        { type: 'para', html: 'When you call <code>count()</code>, <code>aggregate()</code>, or <code>join()</code>, Kafka Streams keeps state in a local <strong>RocksDB</strong> store per stream task. To survive instance failure, every state store is backed by a Kafka <em>changelog topic</em> (compacted). If your app crashes and starts on another machine, the new instance restores its state by replaying the changelog.' },
        { type: 'callout', kind: 'info', html: 'Joins between two KStreams require <strong>windowed semantics</strong> (records within X minutes of each other) because two streams are continuous and unbounded. KStream-KTable joins are stream-side triggered: each stream record looks up the table\'s current value for that key.' },

        { type: 'heading', text: 'When to use Streams vs Flink vs plain consumer', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Plain consumer</strong> — simple, stateless processing or your own state in an external DB',
          '<strong>Kafka Streams</strong> — Java app, want local state + fault tolerance, processing fits one team\'s codebase',
          '<strong>Flink / Spark Streaming</strong> — bigger SQL-ish workloads, complex windowing, multi-language, cluster-owned'
        ] }
      ]
    },

    /* ============ Chapter 12 — Schema Registry ============ */
    {
      id: 'kfk-c12',
      title: 'Schema Registry & Evolution',
      icon: '📐',
      sections: [
        { type: 'heading', text: 'Bytes need structure', level: 1 },
        { type: 'para', html: 'Records on Kafka are byte arrays. Producers and consumers must agree on the structure. Without a contract, a tiny producer change can silently break every downstream consumer. The <strong>Schema Registry</strong> stores schemas centrally and enforces compatibility rules.' },

        { type: 'heading', text: 'How a record looks on the wire', level: 2 },
        { type: 'code', lang: 'text', code: `[ magic byte (0x00) | 4-byte schema ID | binary payload ]
                                ↑
                                lookup in Schema Registry → schema → decode` },

        { type: 'heading', text: 'Formats', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Avro</strong> — compact binary, schemas are JSON definitions. Most popular in the Kafka world.',
          '<strong>Protobuf</strong> — schema-required, polyglot, used widely outside Kafka too.',
          '<strong>JSON Schema</strong> — text-based payload + JSON Schema for validation. Bigger on the wire but human-readable.'
        ] },

        { type: 'heading', text: 'Compatibility modes', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>BACKWARD</strong> — new schema can read data produced with the old schema. New consumer + old data. <em>Default.</em>',
          '<strong>FORWARD</strong> — old schema can read data produced with the new schema. Old consumer + new data.',
          '<strong>FULL</strong> — both directions. Strict.',
          '<strong>NONE</strong> — no checks. Only do this for throwaway dev.'
        ] },

        { type: 'heading', text: 'Safe evolution moves', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Add a <strong>new field with a default value</strong> → backward-compatible',
          'Remove a field that <strong>has a default</strong> → forward-compatible',
          'Widen a numeric type (int → long) → usually backward-compatible',
          'Rename a field <em>without an alias</em> → breaks both directions'
        ] },

        { type: 'heading', text: 'A producer + Avro snippet', level: 2 },
        { type: 'code', lang: 'java', code: `props.<span class="fn">put</span>(<span class="str">"schema.registry.url"</span>, <span class="str">"http://registry:8081"</span>);
props.<span class="fn">put</span>(<span class="str">"key.serializer"</span>,   <span class="ty">StringSerializer</span>.<span class="kw">class</span>.<span class="fn">getName</span>());
props.<span class="fn">put</span>(<span class="str">"value.serializer"</span>, <span class="ty">KafkaAvroSerializer</span>.<span class="kw">class</span>.<span class="fn">getName</span>());

<span class="ty">Order</span> order = <span class="ty">Order</span>.<span class="fn">newBuilder</span>().<span class="fn">setId</span>(<span class="str">"o-42"</span>).<span class="fn">setAmount</span>(<span class="num">99.0</span>).<span class="fn">build</span>();
producer.<span class="fn">send</span>(<span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(<span class="str">"orders"</span>, order.<span class="fn">getId</span>(), order));
<span class="com">// Avro serializer auto-registers the schema, embeds its ID, and pushes bytes.</span>` },

        { type: 'callout', kind: 'tip', html: 'Schema Registry is technically optional, but <em>any team with more than a couple of services on Kafka winds up needing it</em>. Picking a format and a compatibility policy on day one saves you from a Schemaless Soup outage later.' }
      ]
    },

    /* ============ Chapter 13 — Patterns ============ */
    {
      id: 'kfk-c13',
      title: 'Patterns in the Wild',
      icon: '🎨',
      sections: [
        { type: 'heading', text: 'Event sourcing', level: 1 },
        { type: 'para', html: 'In <strong>event sourcing</strong>, the Kafka topic IS the source of truth. State is not stored as rows; it\'s <em>derived</em> by reading and folding over the event log. To rebuild any view, you replay the topic.' },
        { type: 'list', kind: 'check', items: [
          'Every state change is an event: <code>OrderPlaced</code>, <code>PaymentReceived</code>, <code>OrderShipped</code>',
          'Read models are disposable — drop and rebuild from scratch',
          'Audit log is built-in (the log is the audit)',
          'Bugs are fixable retroactively by replaying with new logic'
        ] },

        { type: 'heading', text: 'CQRS', level: 2 },
        { type: 'para', html: '<strong>Command Query Responsibility Segregation</strong>: the write side and the read side are different models, connected by events on Kafka. Commands change state → emit events. One or more read sides (PostgreSQL view, Elasticsearch index, Redis cache) subscribe and update their own optimized representation.' },
        { type: 'image', alt: 'CQRS with Kafka as the bridge',
          svg: `<svg viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.w{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.r{fill:#dcfce7;stroke:#15803d;stroke-width:2}.k{fill:#ede7f6;stroke:#5e35b1;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#1e293b;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{fill:none;stroke:#5e35b1;stroke-width:2;marker-end:url(#h4)}</style>
<marker id="h4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#5e35b1"/></marker></defs>
<text x="390" y="28" class="tt">CQRS with Kafka</text>
<rect x="20"  y="60" width="160" height="60" rx="10" class="w"/><text x="100" y="85" class="tb">Write side</text><text x="100" y="105" class="t">command handlers</text>
<rect x="220" y="60" width="160" height="60" rx="10" class="k"/><text x="300" y="95" class="tb">events topic</text>
<rect x="420" y="20"  width="160" height="50" rx="10" class="r"/><text x="500" y="50" class="tb">read view (SQL)</text>
<rect x="420" y="90"  width="160" height="50" rx="10" class="r"/><text x="500" y="120" class="tb">search index (ES)</text>
<rect x="420" y="160" width="160" height="50" rx="10" class="r"/><text x="500" y="190" class="tb">cache (Redis)</text>
<line x1="180" y1="90"  x2="220" y2="90"  class="arr"/>
<line x1="380" y1="80"  x2="420" y2="45"  class="arr"/>
<line x1="380" y1="90"  x2="420" y2="115" class="arr"/>
<line x1="380" y1="100" x2="420" y2="185" class="arr"/>
</svg>` },

        { type: 'heading', text: 'Dead-letter topics', level: 2 },
        { type: 'para', html: 'When a consumer hits a record it cannot process (malformed JSON, business invariant violation), the worst thing it can do is block the partition. Instead, ship the record to a <strong>dead-letter topic</strong> with metadata and commit the offset. Operators can inspect, fix, and replay.' },
        { type: 'code', lang: 'java', code: `<span class="kw">for</span> (<span class="kw">var</span> r : records) {
    <span class="kw">try</span> {
        <span class="fn">process</span>(r);
    } <span class="kw">catch</span> (<span class="ty">PoisonPillException</span> e) {
        dlqProducer.<span class="fn">send</span>(<span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(
            r.<span class="fn">topic</span>() + <span class="str">".DLQ"</span>,
            r.<span class="fn">key</span>(),
            r.<span class="fn">value</span>()
        ));
    }
}
consumer.<span class="fn">commitSync</span>();   <span class="com">// keep moving</span>` },

        { type: 'heading', text: 'Transactional outbox', level: 2 },
        { type: 'para', html: 'Reliably emitting an event after a DB write without two-phase commit. Your service writes the DB row AND an outbox row in one local transaction. Debezium tails the outbox table and emits each row as a Kafka event. No dual-writes, no inconsistencies if the producer crashes between the DB write and the Kafka send.' },
        { type: 'callout', kind: 'tip', html: 'The outbox pattern is the single biggest reliability win for services that need to update a DB and emit a Kafka event together. Skip the "what if the Kafka send fails after the DB commit?" debugging story entirely.' }
      ]
    },

    /* ============ Chapter 14 — Operations & tuning ============ */
    {
      id: 'kfk-c14',
      title: 'Operations & Tuning',
      icon: '⚙️',
      sections: [
        { type: 'heading', text: 'What to watch', level: 1 },
        { type: 'para', html: 'Day-to-day Kafka ops boil down to a small set of signals. If these are healthy, you mostly forget Kafka is there.' },
        { type: 'list', kind: 'check', items: [
          '<strong>Consumer lag</strong> per group — how far behind the latest offset each consumer is',
          '<strong>Under-replicated partitions</strong> — partitions whose ISR is smaller than the replication factor',
          '<strong>ISR shrinks</strong> — frequency of replicas falling out of ISR',
          '<strong>Request latency</strong> — produce/fetch P99',
          '<strong>Disk usage</strong> per broker — log retention + state-store changelogs',
          '<strong>Controller events</strong> — rebalances, leader elections, ZK/KRaft latency'
        ] },

        { type: 'heading', text: 'Inspecting consumer lag', level: 2 },
        { type: 'code', lang: 'bash', code: `bin/kafka-consumer-groups.sh --bootstrap-server b1:9092 \\
    --describe --group billing

GROUP    TOPIC   PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
billing  orders  0          12345           12350           5
billing  orders  1          12000           14000           2000   <span class="com"># ⚠️</span>
billing  orders  2          15000           15005           5
billing  orders  3          15100           15105           5
billing  orders  4          15200           15205           5
billing  orders  5          14998           15005           7

<span class="com"># partition 1 is hot, or that consumer is slow</span>` },

        { type: 'heading', text: 'Common pitfalls and their fixes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Hot keys</strong> — one key dominates traffic, partitioning is uneven → compound the key with a shard suffix, or repartition with a smarter strategy',
          '<strong>Too few partitions</strong> → adding later breaks key→partition stability, so start with realistic peak capacity in mind',
          '<strong>Auto-commit + long processing</strong> → disable auto-commit, commit after work',
          '<strong>Long blocking work in poll loop</strong> → if processing exceeds <code>max.poll.interval.ms</code>, the consumer is kicked. Either tune the interval up, reduce <code>max.poll.records</code>, or offload work to a thread pool.',
          '<strong>acks=1 with RF=3</strong> → false durability sense. Use <code>acks=all</code>.',
          '<strong>No DLQ</strong> → one poison record stalls a whole partition for everyone',
          '<strong>Unclean leader election enabled</strong> → silent data loss on failover. Disable.',
          '<strong>Forgetting <code>min.insync.replicas</code></strong> → without it, the cluster will accept writes with ISR=1 and you can lose data on the next failure'
        ] },

        { type: 'heading', text: 'A baseline production config', level: 2 },
        { type: 'code', lang: 'properties', code: `<span class="com"># Broker / topic defaults</span>
default.replication.factor=3
min.insync.replicas=2
unclean.leader.election.enable=false
auto.create.topics.enable=false

<span class="com"># Producer</span>
acks=all
enable.idempotence=true
compression.type=lz4
linger.ms=10
batch.size=131072

<span class="com"># Consumer</span>
enable.auto.commit=false
isolation.level=read_committed
auto.offset.reset=earliest
max.poll.interval.ms=300000
session.timeout.ms=10000` },

        { type: 'callout', kind: 'success', html: '<strong>The mental checklist:</strong> RF=3, min.insync=2, acks=all, idempotent producer, manual commit, DLQ for poison records, and a schema registry. With those in place, Kafka is one of the most reliable pieces of infrastructure you\'ll run.' },

        { type: 'divider' },
        { type: 'para', html: 'Kafka rewards a small handful of strong commitments: append-only, partitioned, replicated, decoupled by topics, consumed by groups. Once those are second nature, everything else — Connect, Streams, Schema Registry, EOS — is mechanics on top of the same log.' }
      ]
    }

  ]
});

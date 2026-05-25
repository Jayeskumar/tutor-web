PUSH({
  id: 'kafka',
  name: 'Apache Kafka',
  icon: '📨',
  color: '#7e57c2',
  description: 'Distributed event streaming — topics, partitions, consumers, and the data plane of modern systems.',
  units: [

    /* ============== UNIT 1 — What is Kafka? ============== */
    {
      id: 'kfk-u1', name: 'Unit 1 · What is Kafka?', description: 'A distributed commit log, not a queue',
      lessons: [
        {
          id: 'kfk-u1-l1', name: 'The log insight', icon: '📜', xp: 15,
          challenges: [
            { type: 'concept', title: 'Kafka is just a log', content: `<p>Strip Kafka down and what\'s left is a <strong>distributed, append-only log</strong>. Producers append records to the end; consumers read forward at their own pace.</p>
<div class="code-block"><span class="com">// A topic-partition, conceptually</span>
offset:   0    1    2    3    4    5    6    7
record: [ A ][ B ][ C ][ D ][ E ][ F ][ G ][ H ]  <span class="com">← append here</span>
          ^         ^              ^
        old      consumer A      consumer B
                 (offset 2)      (offset 5)</div>
<p>That\'s the whole trick. Multiple consumers, each tracking their own position, replaying history when they want.</p>
<p>It is <em>not</em> a traditional message queue. Messages aren\'t deleted when read — they stay until retention kicks in.</p>` },
            { type: 'multiple-choice', prompt: 'The fundamental abstraction Kafka exposes is best described as:',
              options: [{text:'A SQL database', code:false},{text:'A distributed, append-only log of records', code:false},{text:'An in-memory cache', code:false},{text:'A REST API gateway', code:false}],
              correct: 1, explanation: 'Append-only log = the entire mental model. Everything else is mechanics.' },
            { type: 'true-false', statement: 'In Kafka, a message is deleted as soon as a consumer reads it.', correct: false, explanation: 'Messages stay on disk until retention (time/size) or compaction removes them. Many consumers can read the same record.' },
            { type: 'match-pairs', prompt: 'Match the concept to its role.', leftLabel: 'Concept', rightLabel: 'Role',
              pairs: [{left:'Producer', right:'Appends records to a topic'},{left:'Consumer', right:'Reads records at its own offset'},{left:'Broker', right:'Server that stores partition data'},{left:'Topic', right:'Named stream of records'}] },
            { type: 'multiple-choice', prompt: 'Why is "append-only" such a big deal?',
              options: [{text:'It saves disk space', code:false},{text:'Sequential disk writes are extremely fast and easy to replicate', code:false},{text:'It prevents duplicates', code:false},{text:'It makes JSON parsing faster', code:false}],
              correct: 1, explanation: 'No random writes, no in-place updates — just append. Disks love this, and so do replicas.' },
            { type: 'true-false', statement: 'Two independent consumer applications can read the exact same record from a topic.', correct: true, explanation: 'Consumers are decoupled by offset. Read history is not shared across applications.' }
          ]
        },
        {
          id: 'kfk-u1-l2', name: 'Why use Kafka', icon: '🎯', xp: 15,
          challenges: [
            { type: 'concept', title: 'Decouple services with a durable log', content: `<p>Without Kafka, service A calls service B calls service C — tight coupling, cascading failures, blocked retries.</p>
<p>With Kafka, A publishes an event to a topic. Anyone interested subscribes. A doesn\'t know or care who reads.</p>
<div class="code-block"><span class="com">// Before: tight coupling</span>
OrderService → InventoryService → EmailService → AnalyticsService
       (one fails, all fail)

<span class="com">// After: events on a topic</span>
OrderService → [orders topic] → InventoryService
                              → EmailService
                              → AnalyticsService
       (each consumer at its own pace)</div>
<p>Kafka shines as the <strong>data plane</strong> — the central nervous system for events between services.</p>` },
            { type: 'multiple-choice', prompt: 'Which is NOT a typical Kafka use case?',
              options: [{text:'Event sourcing', code:false},{text:'Log aggregation', code:false},{text:'Transactional SQL workload', code:false},{text:'Stream processing pipelines', code:false}],
              correct: 2, explanation: 'Kafka is not a transactional DB. It is a durable event log.' },
            { type: 'tap-tokens', prompt: 'Build a one-liner about Kafka\'s role.',
              tokens: ['Kafka', 'decouples', 'producers', 'and', 'consumers', 'via', 'a', 'durable', 'log', 'cache', 'queue'],
              correctOrder: ['Kafka', 'decouples', 'producers', 'and', 'consumers', 'via', 'a', 'durable', 'log'],
              explanation: 'Decoupling via a durable log — the one-line pitch.' },
            { type: 'true-false', statement: 'Kafka is a good replacement for an OLTP relational database.', correct: false, explanation: 'Kafka stores events, not queryable rows. Use it alongside a DB, not instead of one.' },
            { type: 'match-pairs', prompt: 'Pick the right tool for the job.', leftLabel: 'Need', rightLabel: 'Tool',
              pairs: [{left:'Durable event stream', right:'Kafka'},{left:'Strong ACID transactions', right:'PostgreSQL'},{left:'Sub-ms key lookup', right:'Redis'},{left:'Full-text search', right:'Elasticsearch'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Producers ============== */
    {
      id: 'kfk-u2', name: 'Unit 2 · Producers', description: 'Sending records, acks, batching, compression',
      lessons: [
        {
          id: 'kfk-u2-l1', name: 'Producing records', icon: '📤', xp: 20,
          challenges: [
            { type: 'concept', title: 'Producer basics', content: `<p>A <strong>producer</strong> sends records (key + value + headers) to a topic. The client batches records per-partition and ships them to the broker that leads that partition.</p>
<div class="code-block"><span class="ty">Properties</span> props = <span class="kw">new</span> <span class="ty">Properties</span>();
props.<span class="fn">put</span>(<span class="str">"bootstrap.servers"</span>, <span class="str">"broker1:9092"</span>);
props.<span class="fn">put</span>(<span class="str">"key.serializer"</span>,   <span class="str">"...StringSerializer"</span>);
props.<span class="fn">put</span>(<span class="str">"value.serializer"</span>, <span class="str">"...StringSerializer"</span>);

<span class="kw">try</span> (<span class="ty">KafkaProducer</span>&lt;<span class="ty">String</span>,<span class="ty">String</span>&gt; p = <span class="kw">new</span> <span class="ty">KafkaProducer</span>&lt;&gt;(props)) {
    p.<span class="fn">send</span>(<span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(<span class="str">"orders"</span>, <span class="str">"user-42"</span>, <span class="str">"{...}"</span>));
}</div>
<p><code>send()</code> is <strong>asynchronous</strong>. It returns a <code>Future</code>; the record sits in a buffer until it ships.</p>` },
            { type: 'multiple-choice', prompt: 'What does the producer do with records before sending?',
              options: [{text:'Sorts them alphabetically', code:false},{text:'Batches them per-partition for throughput', code:false},{text:'Compresses each one individually', code:false},{text:'Sends them one at a time synchronously', code:false}],
              correct: 1, explanation: 'Batching per-partition is the throughput trick. Fewer larger requests.' },
            { type: 'true-false', statement: 'KafkaProducer.send() returns immediately even before the broker confirms the write.', correct: true, explanation: 'It returns a Future. The record may still be in the in-memory buffer.' },
            { type: 'fill-blank', prompt: 'Complete the send call.',
              codeLines: [{html: 'producer.<span class="fn">_BLANK_</span>(<span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(<span class="str">"orders"</span>, key, value));'}],
              tokens: ['send','push','publish','write'], correctAnswer: 'send', explanation: 'The Kafka client API is producer.send().' },
            { type: 'match-pairs', prompt: 'Match producer config to its purpose.', leftLabel: 'Config', rightLabel: 'Purpose',
              pairs: [{left:'bootstrap.servers', right:'Initial broker list to discover cluster'},{left:'key.serializer', right:'Converts key to bytes'},{left:'linger.ms', right:'How long to wait to fill a batch'},{left:'compression.type', right:'snappy / lz4 / zstd / gzip'}] }
          ]
        },
        {
          id: 'kfk-u2-l2', name: 'Acks, durability, batching', icon: '🤝', xp: 25,
          challenges: [
            { type: 'concept', title: 'acks = 0, 1, or all', content: `<p>The producer\'s <code>acks</code> setting decides how durably a write is acknowledged:</p>
<div class="code-block">acks=0    fire-and-forget  → fastest, can lose data on broker crash
acks=1    leader ack       → safe vs producer crash, NOT vs leader loss
acks=all  ISR ack          → safest. Leader + all in-sync replicas confirmed</div>
<p>Pair <code>acks=all</code> with <code>min.insync.replicas=2</code> for production. Then a single broker loss doesn\'t cause data loss <em>or</em> block writes.</p>` },
            { type: 'multiple-choice', prompt: 'Which acks setting gives the strongest durability guarantee?',
              options: [{text:'acks=0', code:true},{text:'acks=1', code:true},{text:'acks=all', code:true},{text:'acks=quorum', code:true}],
              correct: 2, explanation: 'acks=all waits for all in-sync replicas — survives leader loss.' },
            { type: 'true-false', statement: 'With acks=1, data can still be lost if the leader broker crashes immediately after acking.', correct: true, explanation: 'The ack is from the leader only. Followers may not have replicated yet.' },
            { type: 'output-predict', prompt: 'What happens with acks=0 and a producer that crashes after a successful send call?',
              code: `producer.<span class="fn">send</span>(record);  <span class="com">// fire and forget</span>
<span class="com">// process crashes immediately</span>`,
              options: ['Record is always saved', 'Record may be lost — never confirmed', 'Broker auto-retries', 'A NullPointerException is thrown'],
              correct: 1, explanation: 'acks=0 means no confirmation at all. In-flight records can vanish.' },
            { type: 'match-pairs', prompt: 'Match the producer knob to what it controls.', leftLabel: 'Knob', rightLabel: 'Controls',
              pairs: [{left:'acks', right:'Durability level'},{left:'batch.size', right:'Max batch bytes per partition'},{left:'linger.ms', right:'Wait time to fill a batch'},{left:'compression.type', right:'On-the-wire compression'}] },
            { type: 'true-false', statement: 'Increasing linger.ms always reduces throughput.', correct: false, explanation: 'It often INCREASES throughput by letting batches fill, at the cost of a little latency.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Topics & partitions ============== */
    {
      id: 'kfk-u3', name: 'Unit 3 · Topics & Partitions', description: 'The unit of parallelism',
      lessons: [
        {
          id: 'kfk-u3-l1', name: 'Partitions = parallelism', icon: '🧱', xp: 20,
          challenges: [
            { type: 'concept', title: 'A topic is a set of partitions', content: `<p>A <strong>topic</strong> is a name. The real storage lives in its <strong>partitions</strong> — each an independent, ordered log.</p>
<div class="code-block">Topic "orders"
├── partition 0:  [ r0 ][ r1 ][ r2 ][ r3 ] ...
├── partition 1:  [ r0 ][ r1 ][ r2 ] ...
└── partition 2:  [ r0 ][ r1 ][ r2 ][ r3 ][ r4 ] ...</div>
<p>Each partition is hosted on exactly one broker (the leader), with optional replicas on others. Partitions are the units of <strong>parallelism</strong>, <strong>scalability</strong>, and <strong>ordering</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'Why partition a topic at all?',
              options: [{text:'To save disk space', code:false},{text:'To enable parallel reads and writes across brokers', code:false},{text:'To enforce schema validation', code:false},{text:'To compress data better', code:false}],
              correct: 1, explanation: 'Partitions = horizontal scale + parallel consumption.' },
            { type: 'true-false', statement: 'Records are ordered across all partitions of a topic.', correct: false, explanation: 'Order is guaranteed only WITHIN a partition. Across partitions, none.' },
            { type: 'reorder-code', prompt: 'Order the lifecycle of a produced record.',
              lines: [
                'Producer computes the partition (key hash or round-robin)',
                'Record added to the partition\'s in-memory batch',
                'Batch sent to the partition leader broker',
                'Leader appends the record to the log and replicates to ISR',
                'Broker returns an ack to the producer'
              ],
              correctOrder: [0,1,2,3,4] },
            { type: 'multiple-choice', prompt: 'You have 6 partitions and 10 consumers in one group. What happens?',
              options: [{text:'All 10 consumers get records', code:false},{text:'6 consumers get one partition each; 4 sit idle', code:false},{text:'Each partition is split among multiple consumers', code:false},{text:'Kafka throws an error', code:false}],
              correct: 1, explanation: 'A partition is assigned to at most one consumer per group. Extra consumers idle.' },
            { type: 'true-false', statement: 'You can easily decrease the number of partitions in a topic at any time.', correct: false, explanation: 'You can ADD partitions but not remove them. Pick partition count carefully — and high enough.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Brokers, clusters, controller ============== */
    {
      id: 'kfk-u4', name: 'Unit 4 · Brokers & Clusters', description: 'What each broker does',
      lessons: [
        {
          id: 'kfk-u4-l1', name: 'The cluster shape', icon: '🖥️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Brokers, controller, metadata', content: `<p>A Kafka <strong>cluster</strong> is a set of <strong>brokers</strong> (servers). Each broker:</p>
<ul>
<li>Stores some partitions (leaders + replicas)</li>
<li>Serves produce/fetch requests from clients</li>
<li>Replicates data with other brokers</li>
</ul>
<p>One broker is elected the <strong>controller</strong>. It owns cluster-wide metadata: who leads which partition, who\'s alive, who\'s in the ISR. In modern Kafka (KRaft) the controller quorum runs in-process; older versions used ZooKeeper for this.</p>
<div class="code-block">Cluster
├── broker-1   [leader: P0, P3]    [follower: P1, P4]
├── broker-2   [leader: P1, P4]    [follower: P2, P5]
└── broker-3   [leader: P2, P5]    [follower: P0, P3]
        ↑
   one is controller</div>` },
            { type: 'multiple-choice', prompt: 'What does the controller broker do?',
              options: [{text:'Stores all data for the cluster', code:false},{text:'Manages cluster metadata and leader elections', code:false},{text:'Runs consumer groups', code:false},{text:'Compresses messages', code:false}],
              correct: 1, explanation: 'Controller = metadata + leader election authority for the cluster.' },
            { type: 'true-false', statement: 'Modern Kafka (KRaft mode) still requires ZooKeeper.', correct: false, explanation: 'KRaft removed ZooKeeper. Metadata is now stored in an internal Kafka topic managed by the controller quorum.' },
            { type: 'fill-blank', prompt: 'Each partition has exactly one ____ broker handling reads & writes.',
              codeLines: [{html:'Each partition has exactly one <span class="fn">_BLANK_</span> broker handling reads &amp; writes.'}],
              tokens: ['leader','follower','controller','master'], correctAnswer: 'leader', explanation: 'Leader handles client I/O. Followers replicate silently.' },
            { type: 'match-pairs', prompt: 'Match the role.', leftLabel: 'Role', rightLabel: 'Job',
              pairs: [{left:'Leader', right:'Handles client read/write for a partition'},{left:'Follower', right:'Replicates from the leader'},{left:'Controller', right:'Cluster metadata + leader election'},{left:'Bootstrap server', right:'Initial broker contact for clients'}] },
            { type: 'true-false', statement: 'Clients only ever talk to the bootstrap servers — never directly to other brokers.', correct: false, explanation: 'Bootstrap is just the entry point. Clients discover the full cluster and talk to whichever broker leads each partition.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Replication & ISR ============== */
    {
      id: 'kfk-u5', name: 'Unit 5 · Replication & ISR', description: 'How Kafka stays durable',
      lessons: [
        {
          id: 'kfk-u5-l1', name: 'Leaders, followers, ISR', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Replication factor + ISR', content: `<p>Each partition has a <strong>replication factor</strong> (typically 3). One replica is the leader; the others are followers that pull from the leader.</p>
<p>A follower that\'s caught up "recently enough" is <strong>in-sync</strong> — part of the <strong>ISR</strong> (in-sync replica set). Slow or dead followers fall out of the ISR.</p>
<div class="code-block">Partition 0 — RF=3
├── leader     broker-1   offset 100  ✅ in ISR
├── follower   broker-2   offset 100  ✅ in ISR
└── follower   broker-3   offset  85  ⚠️ falling behind → may drop out</div>
<p>If the leader dies, a new leader is picked from the ISR. If the ISR is empty and you set <code>unclean.leader.election=true</code>, you might pick a stale replica — which means data loss.</p>` },
            { type: 'multiple-choice', prompt: 'What is the ISR?',
              options: [{text:'The set of all replicas', code:false},{text:'Replicas that are caught up to the leader within a tolerance', code:false},{text:'The slowest replicas', code:false},{text:'A single backup broker', code:false}],
              correct: 1, explanation: 'In-Sync Replica set = followers fully caught up (within replica.lag.time.max.ms).' },
            { type: 'true-false', statement: 'With acks=all and min.insync.replicas=2, a write is acknowledged only after at least 2 replicas have it.', correct: true, explanation: 'min.insync.replicas applies to acks=all. If fewer than 2 are in sync, writes are rejected.' },
            { type: 'output-predict', prompt: 'RF=3, min.insync.replicas=2. Two followers are dead. What happens to a producer with acks=all?',
              code: `<span class="com">// only the leader is in the ISR</span>
producer.<span class="fn">send</span>(record);   acks=all</span>`,
              options: ['Write succeeds normally', 'Write blocks / fails with NotEnoughReplicasException', 'Cluster shuts down', 'Followers are auto-restarted'],
              correct: 1, explanation: 'ISR size (1) is below min.insync.replicas (2), so writes are rejected. Reads can continue.' },
            { type: 'match-pairs', prompt: 'Match replication concept.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [{left:'Replication factor', right:'Number of copies of each partition'},{left:'ISR', right:'In-sync replicas set'},{left:'HW (high watermark)', right:'Highest offset replicated to all ISR members'},{left:'Unclean leader election', right:'Allow out-of-sync replica to become leader'}] },
            { type: 'true-false', statement: 'Consumers can read past the high watermark.', correct: false, explanation: 'Only records up to the high watermark (replicated to all ISR) are visible to consumers.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Consumers & groups ============== */
    {
      id: 'kfk-u6', name: 'Unit 6 · Consumers & Groups', description: 'Group coordination & assignment',
      lessons: [
        {
          id: 'kfk-u6-l1', name: 'Consumer groups', icon: '👥', xp: 25,
          challenges: [
            { type: 'concept', title: 'One group = one logical consumer', content: `<p>Consumers identify themselves with a <code>group.id</code>. All consumers sharing a group form one <strong>consumer group</strong> — Kafka distributes the topic\'s partitions among them.</p>
<div class="code-block">Topic "orders" (6 partitions)
Group "billing":
  consumer-A → P0, P1
  consumer-B → P2, P3
  consumer-C → P4, P5

Group "analytics" (independent — gets its own copy of every record)
  consumer-X → P0, P1, P2
  consumer-Y → P3, P4, P5</div>
<p>Two different groups = two independent reads of the same topic. Within a group, each partition is assigned to <em>exactly one</em> consumer.</p>` },
            { type: 'multiple-choice', prompt: '6 partitions, group with 4 consumers. Typical assignment?',
              options: [{text:'Each consumer gets all 6', code:false},{text:'Two consumers get 2 partitions, two get 1', code:false},{text:'Round-robin: 6 / 4 ≈ uneven, some get 2, some get 1', code:false},{text:'Both B and C are correct — Kafka distributes 6 partitions over 4 consumers as evenly as possible', code:false}],
              correct: 3, explanation: 'Two consumers get 2 partitions and two get 1 — that\'s how 6 distributes over 4. Exact split depends on the assignor.' },
            { type: 'true-false', statement: 'Two consumers in the SAME group can both read the same partition simultaneously.', correct: false, explanation: 'A partition is owned by exactly one consumer per group. Different groups, yes; same group, no.' },
            { type: 'fill-blank', prompt: 'A topic delivered to multiple independent applications needs each to use a different ____.',
              codeLines: [{html:'Each application uses a different <span class="fn">_BLANK_</span> to get its own copy of the stream.'}],
              tokens: ['group.id','partition','offset','client.id'], correctAnswer: 'group.id', explanation: 'Independent groups = independent reads.' },
            { type: 'reorder-code', prompt: 'Order a consumer poll loop.',
              lines: [
                'consumer.subscribe(List.of("orders"));',
                'while (running) {',
                '    ConsumerRecords&lt;K,V&gt; records = consumer.poll(Duration.ofMillis(200));',
                '    for (var r : records) process(r);',
                '    consumer.commitSync();',
                '}'
              ],
              correctOrder: [0,1,2,3,4,5] },
            { type: 'match-pairs', prompt: 'Match assignor.', leftLabel: 'Assignor', rightLabel: 'Behavior',
              pairs: [{left:'Range', right:'Adjacent partitions per consumer (default-ish)'},{left:'RoundRobin', right:'Spread across all topics evenly'},{left:'Sticky', right:'Minimize reassignment on rebalance'},{left:'CooperativeSticky', right:'Incremental rebalance, no stop-the-world'}] }
          ]
        },
        {
          id: 'kfk-u6-l2', name: 'Rebalancing', icon: '⚖️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Rebalance: when group membership changes', content: `<p>When a consumer joins or leaves the group (or the topic gets new partitions), Kafka <strong>rebalances</strong> — reassigning partitions across consumers.</p>
<p>Classic rebalance = "stop-the-world": every consumer revokes everything, then is reassigned. With <code>CooperativeStickyAssignor</code>, only the moving partitions are revoked. Much smoother.</p>
<div class="code-block">consumer-A leaves
   ↓
group coordinator   triggers rebalance
   ↓
all members revoke partitions   (classic)
   ↓
new assignment broadcast
   ↓
consumers re-fetch + resume</div>` },
            { type: 'multiple-choice', prompt: 'Which event does NOT trigger a rebalance?',
              options: [{text:'A consumer joins the group', code:false},{text:'A consumer crashes / session timeout', code:false},{text:'A new partition is added to the topic', code:false},{text:'A producer increases batch.size', code:false}],
              correct: 3, explanation: 'Producer settings don\'t affect consumer group membership.' },
            { type: 'true-false', statement: 'During a classic stop-the-world rebalance, the entire group stops processing briefly.', correct: true, explanation: 'Yes — all consumers revoke before reassignment. Cooperative rebalances avoid this.' },
            { type: 'output-predict', prompt: 'consumer-B in a 3-consumer group blocks for too long (no poll). What happens?',
              code: `<span class="com">// consumer-B is stuck in slow processing</span>
<span class="com">// max.poll.interval.ms exceeded</span>`,
              options: ['Nothing — Kafka waits forever', 'consumer-B is removed from the group, triggering a rebalance', 'Broker crashes', 'Producer slows down automatically'],
              correct: 1, explanation: 'Missing poll for too long = considered dead. Kicked out, rebalance kicks in.' },
            { type: 'tap-tokens', prompt: 'Build the goal of the Sticky assignor.',
              tokens: ['Minimize','partition','reassignment','during','rebalance','maximize','random','shuffles'],
              correctOrder: ['Minimize','partition','reassignment','during','rebalance'],
              explanation: 'Sticky tries to keep partitions on the same consumer when membership changes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Offsets & delivery semantics ============== */
    {
      id: 'kfk-u7', name: 'Unit 7 · Offsets & Delivery', description: 'Commit strategies and guarantees',
      lessons: [
        {
          id: 'kfk-u7-l1', name: 'Committing offsets', icon: '🔖', xp: 25,
          challenges: [
            { type: 'concept', title: 'Offsets: your place in the log', content: `<p>An <strong>offset</strong> is just a position in a partition\'s log. The consumer commits its offset to Kafka (stored in the internal <code>__consumer_offsets</code> topic) so it can pick up after a restart.</p>
<div class="code-block"><span class="com">// auto commit (default)</span>
enable.auto.commit = true
auto.commit.interval.ms = 5000   <span class="com">// every 5s, in background</span>

<span class="com">// manual commit (recommended for correctness)</span>
enable.auto.commit = false
consumer.<span class="fn">commitSync</span>();      <span class="com">// after processing each batch</span>
consumer.<span class="fn">commitAsync</span>();     <span class="com">// fire and forget</span></div>
<p>The commit point determines what gets reprocessed after a crash.</p>` },
            { type: 'multiple-choice', prompt: 'Where are committed offsets stored?',
              options: [{text:'In ZooKeeper', code:false},{text:'On the consumer\'s local disk', code:false},{text:'In the internal __consumer_offsets topic', code:false},{text:'In the producer client', code:false}],
              correct: 2, explanation: 'Offsets live as compacted records in __consumer_offsets — a Kafka topic itself.' },
            { type: 'true-false', statement: 'With auto-commit enabled, a crash can cause reprocessing of already-processed records.', correct: true, explanation: 'Auto-commit happens periodically. A crash between commits replays uncommitted offsets — at-least-once.' },
            { type: 'match-pairs', prompt: 'Match delivery guarantee.', leftLabel: 'Guarantee', rightLabel: 'Pattern',
              pairs: [{left:'At-most-once', right:'Commit BEFORE processing'},{left:'At-least-once', right:'Commit AFTER processing'},{left:'Exactly-once', right:'Transactional producer + read-process-write'},{left:'No guarantee', right:'acks=0, no commit'}] },
            { type: 'output-predict', prompt: 'Consumer processes record at offset 42, then crashes BEFORE committing. After restart, what does it read first?',
              code: `<span class="com">// last committed offset = 40</span>
<span class="com">// offsets 41 and 42 processed but uncommitted</span>`,
              options: ['Offset 43', 'Offset 41 (replay)', 'Offset 0', 'Throws error'],
              correct: 1, explanation: 'Resumes from the committed offset → 41 is reprocessed. Hence "at-least-once".' },
            { type: 'true-false', statement: 'For exactly-once semantics in a read-process-write pipeline, Kafka supports a transactional producer and isolation level read_committed.', correct: true, explanation: 'EOS uses transactions to atomically commit produced records + consumer offsets.' }
          ]
        },
        {
          id: 'kfk-u7-l2', name: 'Delivery semantics', icon: '📬', xp: 25,
          challenges: [
            { type: 'concept', title: 'At-most-once vs at-least-once vs exactly-once', content: `<p>Three classic guarantees, in increasing strictness (and cost):</p>
<div class="code-block">at-most-once     records MAY be lost, never duplicated
                 → commit before processing

at-least-once    records NEVER lost, may be duplicated
                 → commit after processing (most common default)

exactly-once     no loss, no duplicates — within Kafka
                 → idempotent producer + transactions</div>
<p>The "exactly-once" guarantee applies to the Kafka boundary. If your processing also writes to an external DB, you usually need idempotent downstream logic too.</p>` },
            { type: 'multiple-choice', prompt: 'Idempotent producer (enable.idempotence=true) guarantees:',
              options: [{text:'No duplicates from retries within a single producer session', code:false},{text:'Strict global ordering across topics', code:false},{text:'Exactly-once across consumer groups', code:false},{text:'Zero-latency sends', code:false}],
              correct: 0, explanation: 'Producer ID + sequence numbers dedupe retries server-side.' },
            { type: 'true-false', statement: 'Exactly-once-semantics in Kafka removes the need for idempotent business logic when writing to a DB.', correct: false, explanation: 'EOS covers Kafka-to-Kafka. External side-effects still need idempotency.' },
            { type: 'tap-tokens', prompt: 'Order the configuration recommendation.',
              tokens: ['Set','enable.idempotence=true','then','acks=all','for','safer','producers','disable','commits'],
              correctOrder: ['Set','enable.idempotence=true','then','acks=all','for','safer','producers'],
              explanation: 'Idempotent + acks=all is the durable producer combo.' },
            { type: 'fill-blank', prompt: 'Read-process-write EOS pipelines wrap the producer in a ____.',
              codeLines: [{html:'producer.<span class="fn">_BLANK_</span>();  <span class="com">// then sendOffsetsToTransaction + commit</span>'}],
              tokens: ['beginTransaction','beginCommit','startBatch','open'], correctAnswer: 'beginTransaction', explanation: 'beginTransaction → send + sendOffsetsToTransaction → commitTransaction.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Keys & ordering ============== */
    {
      id: 'kfk-u8', name: 'Unit 8 · Keys & Ordering', description: 'Where order is preserved (and where it isn\'t)',
      lessons: [
        {
          id: 'kfk-u8-l1', name: 'Partitioning by key', icon: '🔑', xp: 20,
          challenges: [
            { type: 'concept', title: 'Same key → same partition', content: `<p>The producer picks a partition by hashing the <strong>key</strong>:</p>
<div class="code-block">partition = hash(key) % numPartitions</div>
<p>So <em>same key always goes to the same partition</em>. That\'s the only way Kafka can guarantee ordering for related events — orders for the same <code>userId</code>, for instance.</p>
<p>If the key is null, the producer round-robins (or sticky-batches) across partitions. Ordering is NOT preserved.</p>` },
            { type: 'multiple-choice', prompt: 'Why use a key when producing?',
              options: [{text:'To compress records', code:false},{text:'To guarantee same-key records land in the same partition (and hence are ordered)', code:false},{text:'To deduplicate records', code:false},{text:'Required by the API', code:false}],
              correct: 1, explanation: 'Key → partition mapping is what enables per-entity ordering.' },
            { type: 'true-false', statement: 'Order is guaranteed across all partitions of a topic.', correct: false, explanation: 'Only WITHIN a partition. Cross-partition order is not preserved.' },
            { type: 'output-predict', prompt: 'You add a new partition to a topic. What happens to keys that previously hashed to partition 2?',
              code: `<span class="com">// before: 4 partitions, key "user-42" → P2</span>
<span class="com">// admin increases partitions: 4 → 6</span>`,
              options: ['Stay on partition 2 forever', 'May now hash to a different partition — ordering breaks', 'Move automatically to the new partition', 'Trigger an automatic rebalance of old records'],
              correct: 1, explanation: 'hash(k) % N changes with N. Repartitioning breaks key→partition stability — usually avoided in production.' },
            { type: 'fill-blank', prompt: 'Records with a null key are distributed how?',
              codeLines: [{html:'Null-key records are distributed in a <span class="fn">_BLANK_</span> fashion across partitions.'}],
              tokens: ['round-robin','strict','reverse','sorted'], correctAnswer: 'round-robin', explanation: 'Sticky-rotating round-robin in modern clients.' },
            { type: 'match-pairs', prompt: 'Match ordering expectation.', leftLabel: 'Setup', rightLabel: 'Order',
              pairs: [{left:'Same key, single partition', right:'Strictly ordered'},{left:'Different keys, same topic', right:'No cross-key order guarantee'},{left:'Same key, repartition later', right:'Order can break'},{left:'Null key', right:'Round-robin, no order'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Retention & compaction ============== */
    {
      id: 'kfk-u9', name: 'Unit 9 · Retention & Compaction', description: 'When data lives, when it dies',
      lessons: [
        {
          id: 'kfk-u9-l1', name: 'Retention vs compaction', icon: '🗜️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two cleanup policies', content: `<p>Records don\'t live forever. Each topic has a <strong>cleanup policy</strong>:</p>
<div class="code-block">cleanup.policy=delete        <span class="com">// classic — based on time or size</span>
  retention.ms          = 604800000   <span class="com">// 7 days</span>
  retention.bytes       = -1          <span class="com">// no size cap</span>

cleanup.policy=compact       <span class="com">// keep latest value per key</span>
  → "log compaction": for each key, only the most recent value survives</div>
<p>Compacted topics are like a key-value snapshot — perfect for materialized state, like a "current user profile" table.</p>` },
            { type: 'multiple-choice', prompt: 'Which scenario fits log compaction best?',
              options: [{text:'Order events you want to replay for 7 days', code:false},{text:'A "current state per key" stream — like latest user profile', code:false},{text:'Pure audit logs', code:false},{text:'Metrics with no key', code:false}],
              correct: 1, explanation: 'Compaction keeps the latest value per key — current-state semantics.' },
            { type: 'true-false', statement: 'A compacted topic still keeps records in their original order within a partition.', correct: true, explanation: 'Compaction is per-key, but the surviving records keep their relative order in the partition.' },
            { type: 'output-predict', prompt: 'Compact topic. Sequence: (k1,a), (k2,x), (k1,b), (k1,c), (k2,y). After compaction, what remains?',
              code: `cleanup.policy = compact
records: (k1,a) (k2,x) (k1,b) (k1,c) (k2,y)`,
              options: ['(k1,c) (k2,y)', '(k1,a) (k1,b) (k1,c) (k2,x) (k2,y)', '(k1,a) (k2,x)', 'all five'],
              correct: 0, explanation: 'Only the latest value per key survives — (k1,c) and (k2,y).' },
            { type: 'match-pairs', prompt: 'Match.', leftLabel: 'Setting', rightLabel: 'Effect',
              pairs: [{left:'retention.ms', right:'Time-based delete threshold'},{left:'retention.bytes', right:'Size-based delete threshold per partition'},{left:'cleanup.policy=compact', right:'Keep latest value per key'},{left:'tombstone (null value)', right:'Marks a key for deletion in compacted topic'}] },
            { type: 'true-false', statement: 'A null-value record in a compacted topic is a "tombstone" that eventually removes that key.', correct: true, explanation: 'Yes — producing key=K, value=null deletes K after the tombstone retention period.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Kafka Connect ============== */
    {
      id: 'kfk-u10', name: 'Unit 10 · Kafka Connect', description: 'Source & sink connectors, no code',
      lessons: [
        {
          id: 'kfk-u10-l1', name: 'Sources, sinks, Debezium', icon: '🔌', xp: 25,
          challenges: [
            { type: 'concept', title: 'Connect: data in/out without writing producers', content: `<p><strong>Kafka Connect</strong> is a framework for moving data between Kafka and external systems via pre-built <strong>connectors</strong>:</p>
<ul>
<li><strong>Source connectors</strong> — external system → Kafka topic (e.g., JDBC, Debezium for CDC)</li>
<li><strong>Sink connectors</strong> — Kafka topic → external system (e.g., S3, Elasticsearch, BigQuery)</li>
</ul>
<div class="code-block">[ PostgreSQL ] → Debezium source → [ Kafka topic ] → Elasticsearch sink → [ ES ]
                                                  → S3 sink             → [ S3 ]</div>
<p>Connect is declarative JSON config. No producer/consumer code. It runs in its own JVM workers, in distributed mode for HA.</p>` },
            { type: 'multiple-choice', prompt: 'What does Debezium do?',
              options: [{text:'Compresses Kafka records', code:false},{text:'Streams DB change events (CDC) into Kafka by reading the DB transaction log', code:false},{text:'Replaces Kafka with a SQL DB', code:false},{text:'Schedules ETL jobs', code:false}],
              correct: 1, explanation: 'Debezium = CDC. It tails the DB log (WAL, binlog) and emits change events to Kafka topics.' },
            { type: 'true-false', statement: 'A Sink connector pulls from a Kafka topic and writes records to an external system.', correct: true, explanation: 'Direction: Kafka → external = sink.' },
            { type: 'match-pairs', prompt: 'Source or sink?', leftLabel: 'Connector', rightLabel: 'Type',
              pairs: [{left:'Debezium MySQL', right:'Source (DB → Kafka)'},{left:'S3 sink', right:'Sink (Kafka → S3)'},{left:'Elasticsearch sink', right:'Sink (Kafka → ES)'},{left:'JDBC source', right:'Source (DB → Kafka)'}] },
            { type: 'fill-blank', prompt: 'Connect is configured declaratively as ____.',
              codeLines: [{html:'Connectors are deployed via REST APIs taking <span class="fn">_BLANK_</span> config payloads.'}],
              tokens: ['JSON','XML','YAML','TOML'], correctAnswer: 'JSON', explanation: 'Connect uses JSON via its REST API.' },
            { type: 'true-false', statement: 'Kafka Connect avoids you needing to write a custom KafkaProducer for common DB → Kafka use cases.', correct: true, explanation: 'That\'s exactly its value — config over code for ingest/egress.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Kafka Streams ============== */
    {
      id: 'kfk-u11', name: 'Unit 11 · Kafka Streams', description: 'Stream processing on the JVM',
      lessons: [
        {
          id: 'kfk-u11-l1', name: 'KStream vs KTable', icon: '🌊', xp: 25,
          challenges: [
            { type: 'concept', title: 'A stream of events vs a table of state', content: `<p><strong>Kafka Streams</strong> is a Java library for stream processing — runs inside your app, no separate cluster. Two core abstractions:</p>
<div class="code-block"><span class="ty">KStream</span>&lt;K,V&gt;   stream of records (events)        — each record is independent
<span class="ty">KTable</span>&lt;K,V&gt;    table view of latest value per key — like a materialized view</div>
<div class="code-block"><span class="ty">KStream</span>&lt;<span class="ty">String</span>,<span class="ty">Order</span>&gt; orders = builder.<span class="fn">stream</span>(<span class="str">"orders"</span>);
<span class="ty">KTable</span>&lt;<span class="ty">String</span>,<span class="ty">Long</span>&gt; perUser = orders
    .<span class="fn">groupByKey</span>()
    .<span class="fn">count</span>();
perUser.<span class="fn">toStream</span>().<span class="fn">to</span>(<span class="str">"orders-per-user"</span>);</div>
<p>Stateless ops (<code>map</code>, <code>filter</code>) need no local store. Stateful ops (<code>aggregate</code>, <code>join</code>, windowed counts) keep a local RocksDB state store, backed by a Kafka changelog topic.</p>` },
            { type: 'multiple-choice', prompt: 'KTable is best described as:',
              options: [{text:'A relational table inside Kafka', code:false},{text:'A view of the latest value per key derived from a topic', code:false},{text:'An external database', code:false},{text:'A consumer group', code:false}],
              correct: 1, explanation: 'KTable = "current value per key", a changelog stream interpreted as a table.' },
            { type: 'true-false', statement: 'Kafka Streams runs as a separate cluster, not inside your application.', correct: false, explanation: 'It\'s just a library. Your JVM = your stream processor. No extra infrastructure.' },
            { type: 'match-pairs', prompt: 'Stateful or stateless?', leftLabel: 'Op', rightLabel: 'Type',
              pairs: [{left:'filter', right:'Stateless'},{left:'map', right:'Stateless'},{left:'count', right:'Stateful (aggregation)'},{left:'join', right:'Stateful'}] },
            { type: 'reorder-code', prompt: 'Order a simple Streams pipeline.',
              lines: [
                'StreamsBuilder builder = new StreamsBuilder();',
                'KStream&lt;String,String&gt; src = builder.stream("input");',
                'src.mapValues(v -&gt; v.toUpperCase()).to("output");',
                'new KafkaStreams(builder.build(), props).start();'
              ],
              correctOrder: [0,1,2,3] },
            { type: 'true-false', statement: 'A KTable\'s state is backed by a compacted changelog topic for fault tolerance.', correct: true, explanation: 'Local RocksDB store + Kafka changelog topic = restorable on any instance.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Schema Registry ============== */
    {
      id: 'kfk-u12', name: 'Unit 12 · Schema Registry', description: 'Avro, Protobuf, JSON-Schema, evolution',
      lessons: [
        {
          id: 'kfk-u12-l1', name: 'Schemas & evolution', icon: '📐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Why a schema registry?', content: `<p>Records on Kafka are just bytes. Producers and consumers must agree on the shape. A <strong>Schema Registry</strong> stores schemas centrally and serializers fetch them by ID.</p>
<div class="code-block">Producer ──serialize──▶ [ magic byte | schema ID | payload ] ──▶ Kafka
                          ▲
                          └── schema lookup in Registry

Consumer ──deserialize──▶ schema ID → fetch schema → decode payload</div>
<p>Supported formats: <strong>Avro</strong> (most common), <strong>Protobuf</strong>, <strong>JSON Schema</strong>.</p>
<p>It enforces <strong>compatibility rules</strong> when a producer registers a new schema version — you can\'t accidentally ship a breaking change.</p>` },
            { type: 'multiple-choice', prompt: 'Which compatibility mode lets new consumers read old records AND old consumers read new records?',
              options: [{text:'BACKWARD', code:true},{text:'FORWARD', code:true},{text:'FULL', code:true},{text:'NONE', code:true}],
              correct: 2, explanation: 'FULL = both directions. BACKWARD = new readers read old. FORWARD = old readers read new.' },
            { type: 'true-false', statement: 'Renaming a required field in Avro is generally a backward-compatible change.', correct: false, explanation: 'Renaming required fields breaks both directions — typically a no-go without aliases.' },
            { type: 'match-pairs', prompt: 'Match format.', leftLabel: 'Format', rightLabel: 'Notes',
              pairs: [{left:'Avro', right:'Compact binary, schema-required, common'},{left:'Protobuf', right:'Schema-required, polyglot, widely used'},{left:'JSON Schema', right:'Human-readable, larger payload'},{left:'Plain JSON', right:'No schema enforcement at all'}] },
            { type: 'fill-blank', prompt: 'Avro records on Kafka are prefixed with a magic byte + ____ ID before the payload.',
              codeLines: [{html: '[ magic | <span class="fn">_BLANK_</span> ID | payload ]'}],
              tokens: ['schema','topic','offset','partition'], correctAnswer: 'schema', explanation: 'Schema ID lets the consumer fetch the exact schema used.' },
            { type: 'true-false', statement: 'Adding a new field with a default value is a backward-compatible change in Avro.', correct: true, explanation: 'Old readers ignore unknown fields; defaults cover missing-field reads.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Patterns ============== */
    {
      id: 'kfk-u13', name: 'Unit 13 · Common Patterns', description: 'Event sourcing, CQRS, DLQ',
      lessons: [
        {
          id: 'kfk-u13-l1', name: 'Patterns in the wild', icon: '🎨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three patterns you\'ll see everywhere', content: `<p><strong>Event sourcing</strong> — the topic IS the source of truth. State is derived by replaying events. Need to fix a bug? Replay.</p>
<p><strong>CQRS read models</strong> — write side emits events to Kafka; one or more read sides (Elasticsearch, materialized SQL views) subscribe and stay in sync.</p>
<p><strong>Dead-letter topic (DLQ)</strong> — when processing a record fails repeatedly, instead of blocking the partition, ship the record to a DLQ topic for later inspection.</p>
<div class="code-block">try { process(record); }
catch (PoisonPillException e) {
    dlqProducer.<span class="fn">send</span>(<span class="kw">new</span> <span class="ty">ProducerRecord</span>&lt;&gt;(<span class="str">"orders.DLQ"</span>, record.key(), record.value()));
}
consumer.<span class="fn">commitSync</span>();</div>` },
            { type: 'multiple-choice', prompt: 'What\'s the main appeal of event sourcing on Kafka?',
              options: [{text:'Lower disk usage', code:false},{text:'Replayable history — you can rebuild any read model from scratch', code:false},{text:'Faster random writes', code:false},{text:'Built-in SQL queries', code:false}],
              correct: 1, explanation: 'Replay is the superpower. Events stay; views are disposable.' },
            { type: 'true-false', statement: 'A DLQ avoids one bad record blocking an entire partition\'s processing.', correct: true, explanation: 'Ship the poison record aside; commit; keep moving.' },
            { type: 'match-pairs', prompt: 'Match the pattern.', leftLabel: 'Pattern', rightLabel: 'Use',
              pairs: [{left:'Event sourcing', right:'Topic = source of truth'},{left:'CQRS', right:'Separate write and read models'},{left:'DLQ', right:'Quarantine for poison records'},{left:'Outbox', right:'Reliable DB-to-Kafka via local txn + Debezium'}] },
            { type: 'tap-tokens', prompt: 'Build the outbox pattern in one line.',
              tokens: ['Write','to','DB','and','outbox','table','in','one','transaction','then','CDC','to','Kafka','queue'],
              correctOrder: ['Write','to','DB','and','outbox','table','in','one','transaction','then','CDC','to','Kafka'],
              explanation: 'Outbox: atomic DB write + outbox row, then Debezium ships the outbox row to Kafka.' },
            { type: 'true-false', statement: 'You can replay a compacted topic to rebuild a "current state per key" view.', correct: true, explanation: 'Yes — that\'s exactly what compacted topics enable for read models.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Ops & tuning ============== */
    {
      id: 'kfk-u14', name: 'Unit 14 · Operations & Tuning', description: 'Monitoring lag, ISR, pitfalls',
      lessons: [
        {
          id: 'kfk-u14-l1', name: 'Monitoring & lag', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'What to watch', content: `<p>Day-to-day Kafka operations boil down to a few signals:</p>
<ul>
<li><strong>Consumer lag</strong> — how far behind the latest offset each consumer group is</li>
<li><strong>ISR size</strong> — if it shrinks, replication is unhealthy</li>
<li><strong>Under-replicated partitions</strong> — partitions with ISR &lt; RF</li>
<li><strong>Broker disk usage</strong> — log retention + compacted topics + state stores</li>
<li><strong>Request latency / queue time</strong> — slow producers/consumers, overloaded brokers</li>
</ul>
<div class="code-block">bin/kafka-consumer-groups.sh --bootstrap-server b:9092 \\
    --describe --group billing

GROUP    TOPIC   PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
billing  orders  0          12345           12350           5
billing  orders  1          12000           14000           2000  ⚠️</div>` },
            { type: 'multiple-choice', prompt: 'A partition is "under-replicated" when:',
              options: [{text:'Its ISR is smaller than its replication factor', code:false},{text:'It has no leader', code:false},{text:'It has too many followers', code:false},{text:'Consumers are slow', code:false}],
              correct: 0, explanation: 'ISR &lt; RF = some replicas have fallen behind or died.' },
            { type: 'true-false', statement: 'Steady consumer lag rising over time is a sign the consumer group can\'t keep up with the producer.', correct: true, explanation: 'Yes — either the consumer is too slow or there aren\'t enough partitions to parallelize.' },
            { type: 'match-pairs', prompt: 'Match metric to alarm.', leftLabel: 'Symptom', rightLabel: 'Likely cause',
              pairs: [{left:'Lag rising on one group only', right:'That consumer is slow / undersized'},{left:'ISR shrinking cluster-wide', right:'Network or disk issues'},{left:'Frequent rebalances', right:'Long GC, max.poll.interval, flaky members'},{left:'Disk filling fast', right:'Retention too high or sudden burst'}] },
            { type: 'output-predict', prompt: 'A consumer takes 10 min to process a batch, max.poll.interval.ms = 300000 (5 min). What happens?',
              code: `consumer.<span class="fn">poll</span>(...);  <span class="com">// returns 500 records</span>
processBatch(records);     <span class="com">// takes 10 minutes</span>
consumer.<span class="fn">commitSync</span>();    <span class="com">// will it succeed?</span>`,
              options: ['Commit succeeds, no issue', 'Consumer was kicked from group at 5 min; commit fails; rebalance happened', 'Broker auto-extends the timeout', 'Records lost'],
              correct: 1, explanation: 'Exceeding max.poll.interval.ms removes the consumer from the group. Rebalance triggered; commit may fail with CommitFailedException.' },
            { type: 'true-false', statement: 'Increasing the number of partitions is the simplest way to give a consumer group more parallel capacity.', correct: true, explanation: 'More partitions = more parallel consumers possible (up to one consumer per partition).' }
          ]
        },
        {
          id: 'kfk-u14-l2', name: 'Common pitfalls', icon: '⚠️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Mistakes that bite production', content: `<p>A short list of recurring real-world problems:</p>
<ul>
<li><strong>Too few partitions</strong> — locks parallelism forever; only grows future risk because reshuffling is painful</li>
<li><strong>Too many partitions</strong> — controller load, slower failover, more file handles</li>
<li><strong>acks=1 + RF=3</strong> — false sense of durability. Leader can die before replication.</li>
<li><strong>Auto-commit + long processing</strong> — silent data loss or duplicates depending on crash timing</li>
<li><strong>Hot keys</strong> — one key gets 90% of traffic → one partition is hot, others idle</li>
<li><strong>No DLQ for poison records</strong> — one bad record stalls the whole partition</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'A topic is taking 10x more writes on one partition than others. Likely cause?',
              options: [{text:'Broker misconfiguration', code:false},{text:'A hot key — one specific key dominates traffic', code:false},{text:'Bug in Kafka', code:false},{text:'Network split', code:false}],
              correct: 1, explanation: 'Skew almost always traces back to a hot key (e.g., a single tenant ID).' },
            { type: 'true-false', statement: 'You should always pick the absolute maximum number of partitions to be safe.', correct: false, explanation: 'Too many partitions = controller pressure, slower failover, file handle limits. Right-size, don\'t over-size.' },
            { type: 'type-answer', prompt: 'What\'s the term for the in-sync replicas set abbreviation? (3 letters)',
              accept: ['ISR','isr'], explanation: 'In-Sync Replicas — ISR.' },
            { type: 'output-predict', prompt: 'enable.auto.commit=true, processing takes 1 minute, commit interval 5 sec, consumer crashes 3 sec into processing.',
              code: `<span class="com">// auto-commit ran at offset N seconds before the poll</span>
<span class="com">// processing started at offset N+1, crashed mid-way</span>`,
              options: ['No reprocessing — clean restart at N+2', 'Reprocessing of N+1 — at least once', 'Data loss at N+1', 'Both B and C are possible — auto-commit timing makes this unreliable'],
              correct: 3, explanation: 'Auto-commit is non-deterministic relative to processing. You can get either duplicates or loss.' },
            { type: 'match-pairs', prompt: 'Pitfall → fix.', leftLabel: 'Pitfall', rightLabel: 'Fix',
              pairs: [{left:'Hot key', right:'Compound key / shard suffix'},{left:'Acks=1 risk', right:'acks=all + min.insync.replicas≥2'},{left:'Auto-commit drift', right:'Manual commit after processing'},{left:'Poison record stalls', right:'DLQ + retry topic'}] }
          ]
        }
      ]
    }

  ]
});

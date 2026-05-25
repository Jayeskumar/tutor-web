PUSH({
  id: 'facts',
  name: 'Interesting Facts',
  icon: '💡',
  color: '#fdd835',
  description: 'The clever ideas behind systems you use every day — Bloom filters, Luhn, consistent hashing, and more.',
  units: [

    /* ============== UNIT 1 — Luhn ============== */
    {
      id: 'facts-u1', name: 'Unit 1 · The Luhn algorithm', description: 'How your credit card validates itself',
      lessons: [
        {
          id: 'facts-u1-l1', name: 'Why credit cards never typo silently', icon: '💳', xp: 15,
          challenges: [
            { type: 'concept', title: 'Your card has a built-in spell-checker', content: `<p>Type one digit wrong on a credit-card number and the payment screen rejects it <em>instantly</em> — no network call needed. How?</p>
<p>The last digit of every card is a <strong>check digit</strong> chosen so the whole number satisfies a tiny formula invented by IBM engineer Hans Peter Luhn in 1954.</p>
<div class="code-block"><span class="com">// Starting from the rightmost digit, double every SECOND digit.</span>
<span class="com">// If doubling gives 10 or more, add the two digits together.</span>
<span class="com">// Sum everything. If the sum is divisible by 10 → valid.</span>

<span class="com">// Example: 4539 1488 0343 6467</span>
<span class="com">// Doubled digits (every 2nd from right):  8, 6, 16→7, 2, 8, 2, 18→9, 8</span>
<span class="com">// Sum of all digits = 80 → 80 % 10 == 0  → ✓</span></div>
<p>It catches every single-digit typo and most pair-swap typos — for free, offline, in microseconds.</p>` },
            { type: 'multiple-choice', prompt: 'What does the Luhn check digit primarily protect against?',
              options: [
                { text: 'Fraudulent card cloning', code: false },
                { text: 'Accidental typos when entering a card number', code: false },
                { text: 'Network sniffing', code: false },
                { text: 'Database corruption', code: false }
              ],
              correct: 1, explanation: 'Luhn is a checksum — it catches typos, not fraud. It catches every single-digit error.' },
            { type: 'true-false', statement: 'A valid Luhn number means the card has funds available.', correct: false, explanation: 'No — Luhn only verifies that the digits form a syntactically valid card number. It says nothing about the account itself.' },
            { type: 'multiple-choice', prompt: 'In Luhn, the sum of all (possibly-doubled) digits must be divisible by:',
              options: [{text:'2', code:false},{text:'7', code:false},{text:'10', code:false},{text:'13', code:false}],
              correct: 2, explanation: 'Divisible by 10 — that\'s why Luhn is sometimes called the "mod 10" algorithm.' },
            { type: 'fill-blank', prompt: 'Complete the Luhn check.',
              codeLines: [{html: '<span class="kw">if</span> (totalSum % <span class="fn">_BLANK_</span> == <span class="num">0</span>) valid = <span class="kw">true</span>;'}],
              tokens: ['10', '9', '7', '2'], correctAnswer: '10', explanation: 'Mod 10 — the defining check.' },
            { type: 'match-pairs', prompt: 'Where else are Luhn-style check digits used?', leftLabel: 'Identifier', rightLabel: 'What it identifies',
              pairs: [
                { left: 'IMEI', right: 'Mobile phone hardware' },
                { left: 'SIN', right: 'Canadian Social Insurance' },
                { left: 'IIN/BIN', right: 'Card issuer prefix' },
                { left: 'NPI', right: 'US healthcare provider' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Bloom filters ============== */
    {
      id: 'facts-u2', name: 'Unit 2 · Bloom filters', description: '"Definitely no" or "maybe yes"',
      lessons: [
        {
          id: 'facts-u2-l1', name: 'The probabilistic set', icon: '🌸', xp: 20,
          challenges: [
            { type: 'concept', title: 'A set that lies — but only one way', content: `<p>Imagine Chrome wants to check if a URL is on a list of <strong>millions</strong> of malicious sites — instantly, before every page load. Storing the whole list locally would be huge.</p>
<p>Enter the <strong>Bloom filter</strong>: a bit-array with a magic property.</p>
<div class="code-block"><span class="com">// To ADD an item, run it through k hash functions.</span>
<span class="com">// Each hash picks a bit. Set those k bits to 1.</span>

<span class="com">// To CHECK an item, hash it the same k ways.</span>
<span class="com">// If ANY of those k bits is 0  →  definitely NOT in the set.</span>
<span class="com">// If ALL k bits are 1          →  PROBABLY in the set.</span></div>
<p>Bloom filters never miss a real member, but they sometimes say "maybe" for non-members (a <em>false positive</em>). That\'s the trade you make to compress a set into a tiny bit-array.</p>
<p>Used by: Chrome safe-browsing, Cassandra, Bitcoin SPV wallets, Medium\'s "have you read this?" feature.</p>` },
            { type: 'multiple-choice', prompt: 'A Bloom filter says "yes" for a key. What does that mean?',
              options: [
                { text: 'The key is definitely in the set', code: false },
                { text: 'The key is probably in the set, but may be a false positive', code: false },
                { text: 'The key was added recently', code: false },
                { text: 'The key is definitely not in the set', code: false }
              ],
              correct: 1, explanation: '"Yes" = probably. "No" = definitely no. The asymmetry is the whole trick.' },
            { type: 'true-false', statement: 'A standard Bloom filter supports deleting items.', correct: false, explanation: 'No — flipping a bit back to 0 could break the membership of other items that share that bit. Counting Bloom filters solve this with counters instead of bits.' },
            { type: 'multiple-choice', prompt: 'How does a Bloom filter reduce false positives?',
              options: [
                { text: 'By using more hash functions and a larger bit-array', code: false },
                { text: 'By rejecting hash collisions', code: false },
                { text: 'By storing the keys directly', code: false },
                { text: 'By rehashing on every query', code: false }
              ],
              correct: 0, explanation: 'More bits + more hash functions = fewer collisions = fewer false positives. Storing keys directly defeats the whole purpose.' },
            { type: 'tap-tokens', prompt: 'Build the Bloom add operation.',
              tokens: ['for', 'each', 'hash', 'h', ':', 'bits', '[', 'h', '(', 'key', ')', ']', '=', '1', 'true'],
              correctOrder: ['for', 'each', 'hash', 'h', ':', 'bits', '[', 'h', '(', 'key', ')', ']', '=', '1'],
              explanation: 'Each of the k hash functions picks a bit; flip them all to 1.' },
            { type: 'match-pairs', prompt: 'Bloom filter use cases.', leftLabel: 'System', rightLabel: 'Use',
              pairs: [
                { left: 'Chrome', right: 'Pre-check malicious URLs' },
                { left: 'Cassandra', right: 'Skip SSTable reads' },
                { left: 'Bitcoin SPV', right: 'Filter relevant transactions' },
                { left: 'Akamai', right: 'Avoid one-hit-wonder caching' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Consistent hashing ============== */
    {
      id: 'facts-u3', name: 'Unit 3 · Consistent hashing', description: 'Add a node without reshuffling everything',
      lessons: [
        {
          id: 'facts-u3-l1', name: 'The hash ring', icon: '⭕', xp: 20,
          challenges: [
            { type: 'concept', title: 'The "modulo problem"', content: `<p>You shard your data across 4 servers with <code>hash(key) % 4</code>. Easy. Until you add a 5th server: now <em>almost every key</em> maps to a new server, and you have to move billions of rows. Disaster.</p>
<p><strong>Consistent hashing</strong> fixes this with a clever twist: map both keys AND servers onto a giant ring (e.g., 0 → 2³²). A key belongs to the next server you hit walking clockwise.</p>
<div class="code-block"><span class="com">// Add a new server S5.</span>
<span class="com">// It lands somewhere on the ring.</span>
<span class="com">// Only keys between S5 and the previous neighbor move.</span>
<span class="com">// Everyone else stays put.</span>

<span class="com">// Average key movement when scaling from N to N+1 servers:</span>
<span class="com">//   Naive mod-N hashing:  ≈ N/(N+1) of all keys move 😱</span>
<span class="com">//   Consistent hashing:   ≈ 1/(N+1) of all keys move 🎉</span></div>
<p>Used by: Amazon DynamoDB, Apache Cassandra, Memcached clients, Akamai, Discord.</p>` },
            { type: 'multiple-choice', prompt: 'Why is <code>hash(key) % N</code> bad when N changes?',
              options: [
                { text: 'It\'s too slow', code: false },
                { text: 'Almost every key remaps when N changes by 1', code: false },
                { text: 'It produces collisions', code: false },
                { text: 'It only works for integers', code: false }
              ],
              correct: 1, explanation: 'Changing the modulus shifts almost every key. Consistent hashing limits the damage to roughly 1/N keys.' },
            { type: 'true-false', statement: 'In consistent hashing, adding a node only forces the node\'s clockwise predecessor to give up a slice of its keys.', correct: true, explanation: 'Other nodes are unaffected. That\'s the whole point.' },
            { type: 'multiple-choice', prompt: 'What are <em>virtual nodes</em> (vnodes) for?',
              options: [
                { text: 'Faster lookups', code: false },
                { text: 'Smoothing out uneven key distribution', code: false },
                { text: 'Replication', code: false },
                { text: 'Compression', code: false }
              ],
              correct: 1, explanation: 'Each physical server claims many points on the ring (e.g., 100–200 vnodes), so load is more evenly spread.' },
            { type: 'output-predict', prompt: 'With 4 servers and naive mod hashing, you add a 5th. Approximately what fraction of keys must move?',
              code: '',
              options: ['~10%', '~25%', '~50%', '~80%'],
              correct: 3, explanation: 'With mod-N hashing, ~(N/(N+1)) keys move when you go N → N+1. For 4 → 5 that\'s ~80%. Consistent hashing would move ~20% (1/5).' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — HyperLogLog ============== */
    {
      id: 'facts-u4', name: 'Unit 4 · HyperLogLog', description: 'Counting billions in kilobytes',
      lessons: [
        {
          id: 'facts-u4-l1', name: 'Estimate cardinality from leading zeros', icon: '🔢', xp: 25,
          challenges: [
            { type: 'concept', title: 'Counting without remembering', content: `<p>Reddit wants the unique-visitor count for every post. With a billion users, a HashSet would burn gigabytes of RAM. There\'s a clever shortcut.</p>
<p>Hash each visitor ID. Look at the binary output. Track the <strong>longest run of leading zeros</strong> you\'ve ever seen.</p>
<div class="code-block"><span class="com">// Intuition: in a uniform random hash,</span>
<span class="com">// the chance of seeing k leading zeros is 1 / 2^k.</span>
<span class="com">// So if you\'ve seen a hash with 20 leading zeros,</span>
<span class="com">// you\'ve probably seen ≈ 2^20 ≈ 1 million unique items.</span>

<span class="com">// HyperLogLog splits the hash into m "buckets"</span>
<span class="com">// and averages — bringing error down to ≈ 1.04 / √m.</span>
<span class="com">// With 12 KB of RAM you can estimate billions ±2%.</span></div>
<p>Used by: Redis <code>PFCOUNT</code>, Google BigQuery <code>APPROX_COUNT_DISTINCT</code>, Reddit, Snowflake.</p>` },
            { type: 'multiple-choice', prompt: 'HyperLogLog\'s error scales as 1/√m where m is:',
              options: [
                { text: 'The number of unique items', code: false },
                { text: 'The number of buckets/registers it uses', code: false },
                { text: 'The hash length in bits', code: false },
                { text: 'The number of CPU cores', code: false }
              ],
              correct: 1, explanation: 'More buckets → lower standard error. 16K registers gets you ≈ 0.81% error with ≈ 12 KB.' },
            { type: 'true-false', statement: 'HyperLogLog can give an exact unique count.', correct: false, explanation: 'It\'s probabilistic — typical error is ~1–2%. The trade is constant memory regardless of cardinality.' },
            { type: 'type-answer', prompt: 'What Redis command computes the approximate cardinality of a HyperLogLog?',
              code: '', accept: ['PFCOUNT', 'pfcount'], explanation: 'PF for "Philippe Flajolet", the inventor of HLL.' },
            { type: 'multiple-choice', prompt: 'You merge two HyperLogLog sketches. What do you get?',
              options: [
                { text: 'A sketch of their union', code: false },
                { text: 'A sketch of their intersection', code: false },
                { text: 'A sum of the cardinalities', code: false },
                { text: 'Nothing — they can\'t be merged', code: false }
              ],
              correct: 0, explanation: 'Merging = elementwise max across the registers. Union for free.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Merkle trees ============== */
    {
      id: 'facts-u5', name: 'Unit 5 · Merkle trees', description: 'One hash to verify everything',
      lessons: [
        {
          id: 'facts-u5-l1', name: 'Hashes of hashes', icon: '🌳', xp: 20,
          challenges: [
            { type: 'concept', title: 'Tamper-proof in O(log n)', content: `<p>Git, Bitcoin, IPFS, ZFS, BitTorrent — they all use the same trick. To know if any byte of a huge dataset has changed, you don\'t need to recompute one giant hash. You build a tree.</p>
<div class="code-block"><span class="com">// Leaves: hash of each data block.</span>
<span class="com">// Internal node = hash(child_left + child_right).</span>
<span class="com">// Root = a single hash that depends on every byte.</span>

<span class="com">// To prove "block 7 is unchanged":</span>
<span class="com">//   send the root + log2(n) sibling hashes.</span>
<span class="com">//   The verifier hashes their way up to the root.</span>
<span class="com">//   If it matches, block 7 is authentic.</span></div>
<p>That\'s a <strong>Merkle proof</strong> — and it\'s why Bitcoin\'s "light wallets" can verify a transaction without downloading the whole blockchain.</p>` },
            { type: 'multiple-choice', prompt: 'A Merkle proof for one leaf takes how many sibling hashes?',
              options: [{text:'1', code:false},{text:'log n', code:false},{text:'n / 2', code:false},{text:'n', code:false}],
              correct: 1, explanation: 'One hash per level of the tree — log₂ n total.' },
            { type: 'true-false', statement: 'If a single byte in a Merkle tree\'s data changes, the root hash also changes.', correct: true, explanation: 'A hash-of-hashes propagates any difference all the way up. That\'s why Git commit hashes are fingerprints of the entire state.' },
            { type: 'reorder-code', prompt: 'Order the steps of building a Merkle tree.',
              lines: [
                'Hash each data block → leaf hashes',
                'Pair adjacent hashes and hash their concatenation',
                'Repeat until one hash remains',
                'That final hash is the Merkle root'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'match-pairs', prompt: 'Where are Merkle trees used?', leftLabel: 'System', rightLabel: 'Role',
              pairs: [
                { left: 'Git', right: 'Commit & tree object hashing' },
                { left: 'Bitcoin', right: 'Block transaction root' },
                { left: 'ZFS', right: 'On-disk integrity checks' },
                { left: 'BitTorrent v2', right: 'Per-piece verification' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Snowflake IDs ============== */
    {
      id: 'facts-u6', name: 'Unit 6 · Snowflake IDs', description: 'Unique IDs without coordination',
      lessons: [
        {
          id: 'facts-u6-l1', name: '64 bits, three fields, no DB', icon: '❄️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Pack time, machine, and counter into one long', content: `<p>You run 100 servers minting IDs for tweets, messages, orders. They all need unique IDs — and asking a central DB on every insert would be a bottleneck. How do they avoid collisions?</p>
<p>Twitter\'s <strong>Snowflake</strong> design (now used by Discord, Instagram, and others) packs everything into one 64-bit integer:</p>
<div class="code-block"><span class="com">// Bit layout of a Snowflake ID:</span>
<span class="com">//   1 bit  — unused sign bit (keep positive)</span>
<span class="com">//  41 bits — milliseconds since custom epoch (≈ 69 years)</span>
<span class="com">//  10 bits — machine ID (1024 workers)</span>
<span class="com">//  12 bits — per-millisecond sequence (4096 IDs/ms/worker)</span>

<span class="com">// Total: 4096 * 1024 = 4 million IDs per millisecond globally,</span>
<span class="com">// each unique, each roughly sortable by time. No coordinator.</span></div>` },
            { type: 'multiple-choice', prompt: 'Why is the time portion placed in the MSBs (highest bits)?',
              options: [
                { text: 'For compression', code: false },
                { text: 'So IDs sort chronologically as plain integers', code: false },
                { text: 'For randomness', code: false },
                { text: 'For security', code: false }
              ],
              correct: 1, explanation: 'Time-first means lexicographic / numeric ordering ≈ chronological. Great for B-tree indexes that prefer sequential inserts.' },
            { type: 'true-false', statement: 'A Snowflake worker can mint up to 4096 IDs in the same millisecond without coordination.', correct: true, explanation: '12 bits of sequence per worker per ms. If you exceed that, you wait until the next millisecond.' },
            { type: 'fill-blank', prompt: 'How many bits identify the machine?',
              codeLines: [{html: '<span class="ty">int</span> machineBits = <span class="fn">_BLANK_</span>;'}],
              tokens: ['10', '12', '41', '64'], correctAnswer: '10', explanation: '10 bits = 1024 workers. 12 bits is for the sequence counter.' },
            { type: 'multiple-choice', prompt: 'What is the BIG risk of a Snowflake generator?',
              options: [
                { text: 'Hash collisions', code: false },
                { text: 'Clock going backwards (NTP correction)', code: false },
                { text: 'Memory pressure', code: false },
                { text: 'Garbage collection', code: false }
              ],
              correct: 1, explanation: 'If the system clock rewinds, you could re-mint old IDs. Real implementations refuse to issue IDs while their clock is behind the last-seen timestamp.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Rate limiting ============== */
    {
      id: 'facts-u7', name: 'Unit 7 · Rate limiting', description: 'Token bucket vs leaky bucket',
      lessons: [
        {
          id: 'facts-u7-l1', name: 'Buckets that smooth traffic', icon: '🪣', xp: 20,
          challenges: [
            { type: 'concept', title: 'Bursts are fine — until they\'re not', content: `<p>APIs say "100 requests per minute" — but how exactly do they enforce it? Two classic algorithms.</p>
<p><strong>Token bucket:</strong> a bucket of size B refills at rate R tokens/sec. Each request takes 1 token. Empty bucket = reject (or wait). Allows small <em>bursts</em>.</p>
<p><strong>Leaky bucket:</strong> requests fill a queue. The queue drains at a fixed rate. Steady output, smooths bursts away.</p>
<div class="code-block"><span class="com">// Token bucket — the more popular choice</span>
<span class="kw">if</span> (tokens >= <span class="num">1</span>) {
  tokens -= <span class="num">1</span>;
  allow();
} <span class="kw">else</span> {
  reject(<span class="num">429</span>);   <span class="com">// Too Many Requests</span>
}</div>
<p>Stripe, GitHub, Cloudflare, AWS all use variants of these. The "X-RateLimit-Remaining" header you see in API responses? That\'s your bucket\'s token count.</p>` },
            { type: 'multiple-choice', prompt: 'Token bucket allows bursts because:',
              options: [
                { text: 'It refills tokens faster when busy', code: false },
                { text: 'Unused capacity accumulates as tokens up to bucket size', code: false },
                { text: 'It uses multiple buckets', code: false },
                { text: 'It ignores the first request', code: false }
              ],
              correct: 1, explanation: 'Idle time fills the bucket; a sudden burst can spend all those saved tokens at once, up to the bucket\'s max.' },
            { type: 'true-false', statement: 'A leaky bucket processes requests at a constant rate, regardless of how fast they arrive.', correct: true, explanation: 'That\'s the "leak" — fixed outflow. Bursts queue or overflow.' },
            { type: 'multiple-choice', prompt: 'What HTTP status code do APIs return when you\'re rate-limited?',
              options: [{text:'401 Unauthorized', code:false},{text:'403 Forbidden', code:false},{text:'404 Not Found', code:false},{text:'429 Too Many Requests', code:false}],
              correct: 3, explanation: '429 was added specifically for rate limiting in RFC 6585.' },
            { type: 'match-pairs', prompt: 'Bucket → behavior.', leftLabel: 'Algorithm', rightLabel: 'Property',
              pairs: [
                { left: 'Token bucket', right: 'Allows bursts up to capacity' },
                { left: 'Leaky bucket', right: 'Smooths to steady output rate' },
                { left: 'Fixed window', right: 'Edge bursts at window boundary' },
                { left: 'Sliding window log', right: 'Most accurate, more memory' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Public-key crypto ============== */
    {
      id: 'facts-u8', name: 'Unit 8 · Public-key crypto', description: 'Locks anyone can close, only one key opens',
      lessons: [
        {
          id: 'facts-u8-l1', name: 'How HTTPS works without sharing a secret', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Math that works one way', content: `<p>Two strangers on the internet need to share a secret. They can\'t meet. Anyone could be listening. How?</p>
<p>The breakthrough: a <strong>mathematical operation that\'s easy forward, brutally hard backward.</strong> Multiply two huge primes? Trivial. Factor the product back into those primes? Centuries.</p>
<p>Each party has a <strong>key pair</strong>:</p>
<div class="code-block"><span class="com">PUBLIC key  — shared with the world.  "Anyone can lock with this."</span>
<span class="com">PRIVATE key — kept secret.            "Only I can unlock."</span>

<span class="com">// To send Alice a message:</span>
<span class="com">//   1. Encrypt with Alice\'s PUBLIC key.</span>
<span class="com">//   2. Only Alice\'s PRIVATE key can decrypt.</span>

<span class="com">// To sign a message AS Alice:</span>
<span class="com">//   1. Encrypt a hash with Alice\'s PRIVATE key.</span>
<span class="com">//   2. Anyone with Alice\'s PUBLIC key can verify it.</span></div>
<p>This is the backbone of HTTPS, SSH, PGP, signed software updates, and crypto wallets.</p>` },
            { type: 'multiple-choice', prompt: 'Which key do you publish to the world?',
              options: [{text:'Public', code:false},{text:'Private', code:false},{text:'Both', code:false},{text:'Neither', code:false}],
              correct: 0, explanation: 'Public is public; private stays secret. The names are literal.' },
            { type: 'true-false', statement: 'Encrypting with your PRIVATE key proves you wrote the message (a digital signature).', correct: true, explanation: 'Anyone can verify with your public key. Only you could have produced it.' },
            { type: 'multiple-choice', prompt: 'In an HTTPS handshake, public-key crypto is mainly used to:',
              options: [
                { text: 'Encrypt the whole session', code: false },
                { text: 'Exchange a short-lived symmetric session key', code: false },
                { text: 'Compress the data', code: false },
                { text: 'Authenticate the client', code: false }
              ],
              correct: 1, explanation: 'PK crypto is slow, so HTTPS only uses it briefly to agree on a fast symmetric key (AES) for the actual data.' },
            { type: 'reorder-code', prompt: 'Reorder the steps of a simplified TLS handshake.',
              lines: [
                'Client connects, sends supported ciphers',
                'Server sends certificate (its public key, signed by a CA)',
                'Client verifies certificate, generates a session key',
                'Client encrypts session key with server\'s public key and sends it',
                'Both sides now use the session key with fast symmetric crypto'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — JWT ============== */
    {
      id: 'facts-u9', name: 'Unit 9 · JWT', description: 'Stateless tokens, signed but readable',
      lessons: [
        {
          id: 'facts-u9-l1', name: 'Three base64 chunks separated by dots', icon: '🪪', xp: 20,
          challenges: [
            { type: 'concept', title: 'Trust the signature, not a database', content: `<p>A user logs in. The server gives them a string. Now every request they make carries that string, and the server can verify <em>without looking up a session</em> who they are. That\'s a JWT.</p>
<div class="code-block"><span class="com">// JWT format: header.payload.signature</span>

eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.X8hBfQk1...

<span class="com">// Header   (base64url JSON):  {"alg":"HS256","typ":"JWT"}</span>
<span class="com">// Payload  (base64url JSON):  {"user":"alice","exp":1735689600}</span>
<span class="com">// Signature: HMAC_SHA256(header + "." + payload, secret)</span></div>
<p><strong>The payload is NOT encrypted</strong> — anyone with the token can decode it. The signature only proves the server issued it. Never put passwords or PII in a JWT.</p>
<p>Used by: Auth0, Firebase Auth, Google OAuth, GitHub API tokens, Slack bot tokens.</p>` },
            { type: 'multiple-choice', prompt: 'A JWT payload is:',
              options: [
                { text: 'Encrypted with the server\'s secret', code: false },
                { text: 'Base64-encoded JSON — readable by anyone with the token', code: false },
                { text: 'Hashed with SHA-256', code: false },
                { text: 'Binary protobuf', code: false }
              ],
              correct: 1, explanation: 'Just base64url. Anyone can paste a JWT into jwt.io and read it. The signature, not encryption, is what matters.' },
            { type: 'true-false', statement: 'Once issued, a JWT cannot be revoked early without extra machinery (a revocation list, short TTLs, etc.).', correct: true, explanation: 'That\'s the trade for being stateless. Production systems pair short-lived JWTs with refresh tokens or maintain a small revocation set.' },
            { type: 'multiple-choice', prompt: 'How many dot-separated parts does a JWT have?',
              options: [{text:'2', code:false},{text:'3', code:false},{text:'4', code:false},{text:'5', code:false}],
              correct: 1, explanation: 'header.payload.signature — three parts.' },
            { type: 'output-predict', prompt: 'A JWT signed with <code>alg: none</code> is given to an unpatched server. What happens?',
              code: '',
              options: ['It is rejected', 'The server may accept it as valid', 'It is auto-encrypted', 'It triggers a 500 error'],
              correct: 1, explanation: 'The classic "alg=none" attack — early JWT libraries trusted the header\'s algorithm declaration. Modern libraries reject it explicitly.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — DNS ============== */
    {
      id: 'facts-u10', name: 'Unit 10 · DNS', description: 'How google.com becomes an IP',
      lessons: [
        {
          id: 'facts-u10-l1', name: 'The internet\'s phone book', icon: '📞', xp: 20,
          challenges: [
            { type: 'concept', title: 'A hierarchical, cached lookup', content: `<p>You type <code>google.com</code>. Your computer needs an IP address. How does it find it in milliseconds, across a globally distributed system with no single source of truth?</p>
<div class="code-block"><span class="com">// Walk the hierarchy from the right:</span>
<span class="com">//   google.com.   (note the implicit trailing dot — the ROOT)</span>

<span class="com">// 1. Ask root servers:    "Who knows .com?"      → TLD servers</span>
<span class="com">// 2. Ask .com servers:    "Who knows google.com?" → Google\'s NS</span>
<span class="com">// 3. Ask Google\'s NS:     "What IP for google.com?" → 142.250.x.x</span>

<span class="com">// Each answer is CACHED for its TTL.</span>
<span class="com">// Your ISP\'s resolver does the legwork; your laptop just asks once.</span></div>
<p>Recursive resolvers (8.8.8.8, 1.1.1.1) do the multi-hop walk for you. Authoritative servers are the source of truth for their zone. Caching at every layer is why DNS feels instant.</p>` },
            { type: 'multiple-choice', prompt: 'What does TTL on a DNS record control?',
              options: [
                { text: 'How long resolvers cache the answer', code: false },
                { text: 'Total bandwidth used', code: false },
                { text: 'Encryption strength', code: false },
                { text: 'Hop count', code: false }
              ],
              correct: 0, explanation: 'Lower TTL = faster propagation when you change records, but more queries. Higher TTL = less load, slower changes.' },
            { type: 'true-false', statement: 'Recursive and authoritative DNS servers do different jobs.', correct: true, explanation: 'Authoritative servers HAVE the answers for their zone. Recursive resolvers ASK around on behalf of clients and cache results.' },
            { type: 'match-pairs', prompt: 'Record type → use.', leftLabel: 'Record', rightLabel: 'Purpose',
              pairs: [
                { left: 'A', right: 'IPv4 address' },
                { left: 'AAAA', right: 'IPv6 address' },
                { left: 'CNAME', right: 'Alias to another name' },
                { left: 'MX', right: 'Mail server' }
              ] },
            { type: 'type-answer', prompt: 'What CLI tool queries DNS directly? (one word)',
              code: '', accept: ['dig', 'nslookup'], explanation: 'Both work. <code>dig</code> is preferred on Linux/Mac.' },
            { type: 'multiple-choice', prompt: 'Why is DNS often described as the internet\'s biggest distributed database?',
              options: [
                { text: 'It holds the most data', code: false },
                { text: 'Every domain owner runs their own authoritative slice', code: false },
                { text: 'It uses NoSQL internally', code: false },
                { text: 'It runs on a blockchain', code: false }
              ],
              correct: 1, explanation: 'Hierarchical delegation: each zone\'s data is hosted and controlled by its owner, federated across the world.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Trie autocomplete ============== */
    {
      id: 'facts-u11', name: 'Unit 11 · Trie autocomplete', description: 'Why search suggestions are instant',
      lessons: [
        {
          id: 'facts-u11-l1', name: 'Prefix trees', icon: '🌲', xp: 20,
          challenges: [
            { type: 'concept', title: 'Walk down letters, find all words below', content: `<p>You type <code>"appl"</code> into Google and four suggestions appear before your finger leaves the key. How is that <em>not slow</em> over hundreds of millions of queries?</p>
<p>The answer is the <strong>trie</strong> (a.k.a. prefix tree). Each node represents a letter. Walking the tree spells out a word; sub-trees from any node are all the words that share that prefix.</p>
<div class="code-block"><span class="com">// "cat", "cap", "car", "care", "dog"</span>
<span class="com">//</span>
<span class="com">//        (root)</span>
<span class="com">//        /     \\</span>
<span class="com">//       c       d</span>
<span class="com">//       |       |</span>
<span class="com">//       a       o</span>
<span class="com">//      /|\\      |</span>
<span class="com">//     t p r     g  (★)</span>
<span class="com">//     ★ ★ ★</span>
<span class="com">//         |</span>
<span class="com">//         e  (★)</span>
<span class="com">// ★ = end-of-word marker</span></div>
<p>Typing "cap" lands at the "p" node. Autocomplete = list every word reachable below. Done.</p>` },
            { type: 'multiple-choice', prompt: 'A trie lookup for a string of length L takes how long, independent of dictionary size?',
              options: [{text:'O(1)', code:false},{text:'O(L)', code:false},{text:'O(log n)', code:false},{text:'O(n)', code:false}],
              correct: 1, explanation: 'You walk one node per character. Adding more words doesn\'t slow each lookup.' },
            { type: 'true-false', statement: 'Tries share storage between words that share prefixes.', correct: true, explanation: 'That\'s the memory advantage. "car", "care", "cart" all share the "car" path.' },
            { type: 'fill-blank', prompt: 'Lookup walks one node per…',
              codeLines: [{html: '<span class="kw">for</span> (<span class="ty">char</span> c : word.<span class="fn">toCharArray</span>()) node = node.children.<span class="fn">get</span>(<span class="fn">_BLANK_</span>);'}],
              tokens: ['c', 'word', 'node', 'children'], correctAnswer: 'c', explanation: 'One character at a time — that\'s the O(L) walk.' },
            { type: 'multiple-choice', prompt: 'Which is NOT a typical use of tries?',
              options: [
                { text: 'Autocomplete', code: false },
                { text: 'Spell-checkers', code: false },
                { text: 'IP routing tables', code: false },
                { text: 'Image compression', code: false }
              ],
              correct: 3, explanation: 'Image compression uses different data structures. Tries shine for string-prefix problems and longest-prefix-match (used in IP routers).' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — PageRank ============== */
    {
      id: 'facts-u12', name: 'Unit 12 · PageRank', description: 'Importance from incoming links',
      lessons: [
        {
          id: 'facts-u12-l1', name: 'The link is the vote', icon: '🔗', xp: 25,
          challenges: [
            { type: 'concept', title: 'A page is important if important pages link to it', content: `<p>1998. Two Stanford PhD students argue: search results should rank pages by <em>how the web itself</em> regards them. A link is a vote.</p>
<p>But not all votes are equal: a link from the New York Times counts more than one from a random blog. And the NYT\'s weight in turn depends on who links to it. Circular? Not quite — it\'s a fixed point of an iterative computation.</p>
<div class="code-block"><span class="com">// Simplified PageRank update rule:</span>
<span class="com">// PR(p) = (1 - d) + d * Σ over inbound q: PR(q) / outDegree(q)</span>
<span class="com">// d = damping factor, usually 0.85</span>

<span class="com">// Initialize all PR = 1.</span>
<span class="com">// Repeat update for ~30 iterations.</span>
<span class="com">// Values converge — that\'s the ranking.</span></div>
<p>Equivalent intuition: a random surfer clicks random links forever. With probability (1−d) they teleport to a random page. The long-run fraction of time spent on each page = PageRank.</p>` },
            { type: 'multiple-choice', prompt: 'In PageRank, a link from a page with many outgoing links:',
              options: [
                { text: 'Counts the same regardless of degree', code: false },
                { text: 'Counts less — its vote is diluted', code: false },
                { text: 'Counts more', code: false },
                { text: 'Is ignored', code: false }
              ],
              correct: 1, explanation: 'PR(q) is divided across q\'s outbound links. A page that links to everything passes little weight per link.' },
            { type: 'true-false', statement: 'PageRank can be interpreted as the stationary distribution of a random walk on the web graph.', correct: true, explanation: 'Mathematically equivalent. The damping factor models the "teleport to a random page" probability.' },
            { type: 'multiple-choice', prompt: 'What does the damping factor (d ≈ 0.85) do?',
              options: [
                { text: 'Speeds up convergence', code: false },
                { text: 'Models the surfer occasionally jumping to a random page', code: false },
                { text: 'Penalizes spam', code: false },
                { text: 'Compresses the index', code: false }
              ],
              correct: 1, explanation: 'It also guarantees the random walk has a unique stationary distribution (the Markov chain is ergodic).' },
            { type: 'output-predict', prompt: 'You add a new link from a high-PR page to a small page. What happens to the small page\'s PageRank?',
              code: '',
              options: ['Decreases', 'Stays the same', 'Increases', 'Goes to zero'],
              correct: 2, explanation: 'Inbound link from an important page → its rank flows into yours.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — CDN edge ============== */
    {
      id: 'facts-u13', name: 'Unit 13 · CDN edge', description: 'Why video plays from down the street',
      lessons: [
        {
          id: 'facts-u13-l1', name: 'Bring the bytes closer', icon: '🌐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Speed of light is the enemy', content: `<p>Your origin server is in Virginia. A user in Tokyo opens your homepage. Even at the speed of light, a round-trip is ~150ms — and a typical page needs 30+ round-trips. A CDN flips the script.</p>
<p>A <strong>CDN</strong> (Content Delivery Network) is a fleet of caching servers — "PoPs" (Points of Presence) — scattered worldwide. The user\'s request hits the nearest one. If it has the file, it serves immediately. If not, it fetches from origin, caches, and serves the next viewer in microseconds.</p>
<div class="code-block"><span class="com">// Cache-Control: public, max-age=86400, s-maxage=31536000</span>
<span class="com">//   max-age   = browser cache lifetime</span>
<span class="com">//   s-maxage  = CDN shared-cache lifetime (often much longer)</span>
<span class="com">//   public    = allow shared caches to store it</span></div>
<p>Akamai (1998) invented the modern CDN. Cloudflare, Fastly, CloudFront, Bunny followed. Netflix runs its own CDN ("Open Connect") — boxes physically installed inside ISPs.</p>` },
            { type: 'multiple-choice', prompt: 'What does "edge" mean in "edge server"?',
              options: [
                { text: 'On the outside of a building', code: false },
                { text: 'Geographically close to end users, at the edge of the network', code: false },
                { text: 'A backup server', code: false },
                { text: 'The latest model', code: false }
              ],
              correct: 1, explanation: 'Edge = near the user. Minimizes round-trip latency.' },
            { type: 'true-false', statement: 'CDNs are useful only for static content like images and videos.', correct: false, explanation: 'Modern CDNs also accelerate dynamic content via TCP optimization, edge functions (Workers, Lambda@Edge), and connection reuse to origin.' },
            { type: 'match-pairs', prompt: 'CDN concept → meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [
                { left: 'PoP', right: 'A regional edge location' },
                { left: 'TTL', right: 'How long the edge caches an asset' },
                { left: 'Origin', right: 'The source server behind the CDN' },
                { left: 'Purge', right: 'Force-invalidate cached content' }
              ] },
            { type: 'multiple-choice', prompt: 'A cache HIT means:',
              options: [
                { text: 'The edge served the asset without contacting origin', code: false },
                { text: 'The asset is corrupted', code: false },
                { text: 'A request went all the way to origin', code: false },
                { text: 'The cache was full', code: false }
              ],
              correct: 0, explanation: 'HIT = fast, MISS = went to origin, REVALIDATE = checked origin with ETag/Last-Modified.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — TCP ============== */
    {
      id: 'facts-u14', name: 'Unit 14 · TCP', description: 'Reliable bytes over an unreliable network',
      lessons: [
        {
          id: 'facts-u14-l1', name: 'Handshake & sliding window', icon: '🤝', xp: 25,
          challenges: [
            { type: 'concept', title: 'Packets are lost. TCP pretends they aren\'t.', content: `<p>The internet drops packets, reorders them, duplicates them. Yet your video call audio arrives intact, byte-for-byte. TCP\'s magic is two tricks.</p>
<p><strong>1. Three-way handshake</strong> opens a connection with synchronized sequence numbers:</p>
<div class="code-block"><span class="com">client → server:  SYN (seq=x)</span>
<span class="com">server → client:  SYN-ACK (seq=y, ack=x+1)</span>
<span class="com">client → server:  ACK (ack=y+1)</span>
<span class="com">// Connection is established.</span></div>
<p><strong>2. Sliding window</strong> lets the sender ship many packets before any ACK arrives. The receiver advertises how much buffer it has. The sender tracks what\'s been ACKed and shifts a window forward.</p>
<div class="code-block"><span class="com">// Sent + ACKed | Sent, unACKed (in-flight) | Window | Future</span>
<span class="com">//   1 2 3 4 5 6 |     7 8 9 10               | 11..14 |  ...</span>
<span class="com">// As ACKs arrive, the window slides right.</span>
<span class="com">// Lost packet? Retransmit. Out of order? Reassemble.</span></div>` },
            { type: 'multiple-choice', prompt: 'The three-way handshake establishes:',
              options: [
                { text: 'A shared encryption key', code: false },
                { text: 'Synchronized initial sequence numbers in both directions', code: false },
                { text: 'A DNS mapping', code: false },
                { text: 'A NAT translation', code: false }
              ],
              correct: 1, explanation: 'SYN/SYN-ACK/ACK exchanges and ACKs the initial sequence numbers each side will use.' },
            { type: 'true-false', statement: 'TCP guarantees in-order, duplicate-free delivery of every byte that was sent.', correct: true, explanation: 'Sequence numbers + ACKs + retransmission make it so. If the network drops or reorders, TCP repairs it.' },
            { type: 'reorder-code', prompt: 'Order the three-way handshake.',
              lines: [
                'Client sends SYN to server',
                'Server replies SYN-ACK',
                'Client sends ACK',
                'Data starts flowing'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'multiple-choice', prompt: 'Why does TCP have a "sliding window" instead of waiting for each ACK?',
              options: [
                { text: 'For encryption', code: false },
                { text: 'To allow many packets in flight, hiding round-trip latency', code: false },
                { text: 'To save memory', code: false },
                { text: 'For routing', code: false }
              ],
              correct: 1, explanation: 'Stop-and-wait wastes most of the bandwidth-delay product. The window keeps the pipe full.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — CAP theorem ============== */
    {
      id: 'facts-u15', name: 'Unit 15 · CAP theorem', description: 'Pick two of three',
      lessons: [
        {
          id: 'facts-u15-l1', name: 'Consistency, Availability, Partition tolerance', icon: '🔺', xp: 20,
          challenges: [
            { type: 'concept', title: 'A distributed-systems fact of life', content: `<p>Eric Brewer\'s 2000 conjecture (proven 2002 by Gilbert & Lynch): when a network partition splits your cluster, you can have <strong>at most two</strong> of:</p>
<div class="code-block"><span class="com">C — Consistency:  every read sees the latest write</span>
<span class="com">A — Availability: every request gets a non-error response</span>
<span class="com">P — Partition tolerance: the system keeps working despite</span>
<span class="com">                    lost messages between nodes</span></div>
<p>Partitions are not optional — networks fail. So the real choice during a partition is <strong>CP</strong> (stay consistent, refuse writes) or <strong>AP</strong> (stay available, accept that reads may be stale).</p>
<p>MongoDB, HBase, Redis Cluster lean CP. Cassandra, DynamoDB, CouchDB lean AP. Newer systems offer tunable consistency per request.</p>` },
            { type: 'multiple-choice', prompt: 'During a network partition, what does an AP system do?',
              options: [
                { text: 'Returns errors until partition heals', code: false },
                { text: 'Keeps accepting writes; reads may be stale', code: false },
                { text: 'Shuts down completely', code: false },
                { text: 'Switches to a backup network', code: false }
              ],
              correct: 1, explanation: 'A = Availability wins. Eventual consistency catches up after the partition resolves.' },
            { type: 'true-false', statement: 'CAP says you can\'t have a single-machine database that is both consistent and available.', correct: false, explanation: 'CAP applies during partitions. On a single machine there\'s nothing to partition. The trade-off is real only in distributed systems.' },
            { type: 'match-pairs', prompt: 'Database → preferred CAP stance.', leftLabel: 'Database', rightLabel: 'Tilt',
              pairs: [
                { left: 'Cassandra', right: 'AP — always answer, eventual consistency' },
                { left: 'MongoDB', right: 'CP — refuse writes if quorum lost' },
                { left: 'DynamoDB', right: 'AP with tunable consistency' },
                { left: 'Spanner', right: 'CP — using GPS+atomic clocks' }
              ] },
            { type: 'multiple-choice', prompt: 'CAP\'s little-known cousin PACELC adds what consideration?',
              options: [
                { text: 'Cost of hardware', code: false },
                { text: 'Latency vs consistency trade-off when there\'s NO partition', code: false },
                { text: 'Encryption choices', code: false },
                { text: 'Caching layer behavior', code: false }
              ],
              correct: 1, explanation: 'PACELC: "if Partition, then A or C; Else, latency or Consistency". A more honest model of real systems.' }
          ]
        }
      ]
    },

    /* ============== UNIT 16 — Reed–Solomon ============== */
    {
      id: 'facts-u16', name: 'Unit 16 · Erasure coding', description: 'Survive scratches, survive disk failures',
      lessons: [
        {
          id: 'facts-u16-l1', name: 'Reed–Solomon: data that heals', icon: '💿', xp: 25,
          challenges: [
            { type: 'concept', title: 'A scratched CD still plays. Why?', content: `<p>You scuff your audio CD. Visible scratch — yet it plays perfectly. Or: a hyperscaler stores your photo across many disks, one fails, your photo is fine. Same trick.</p>
<p><strong>Reed–Solomon erasure coding</strong> splits data into k blocks and computes m extra <em>parity</em> blocks. Lose up to m blocks of the k+m total? You can rebuild the originals exactly.</p>
<div class="code-block"><span class="com">// Treat data blocks as coefficients of a polynomial.</span>
<span class="com">// Evaluate the polynomial at n &gt; k points → n blocks.</span>
<span class="com">// Any k of those n points uniquely reconstruct the polynomial.</span>
<span class="com">// So losing up to (n - k) blocks is recoverable.</span>

<span class="com">// CD audio uses ≈ 25% parity for resilience to scratches.</span>
<span class="com">// AWS S3 uses (10, 4) — 14 fragments, any 10 reconstruct.</span></div>
<p>Versus 3-way replication, RS is much cheaper: 1.4x storage instead of 3x for equivalent durability.</p>` },
            { type: 'multiple-choice', prompt: 'A (10, 4) Reed–Solomon scheme can survive losing how many fragments?',
              options: [{text:'1', code:false},{text:'4', code:false},{text:'10', code:false},{text:'14', code:false}],
              correct: 1, explanation: 'You can lose up to 4 of the 14 fragments and still reconstruct from the remaining 10.' },
            { type: 'true-false', statement: 'Erasure coding gives the same durability as 3-way replication with much less storage overhead.', correct: true, explanation: 'For equivalent durability, RS typically needs 1.4–1.7x storage vs 3x for replication. Cloud storage at scale runs on this.' },
            { type: 'multiple-choice', prompt: 'Compared to plain replication, erasure coding has higher cost in:',
              options: [
                { text: 'Storage', code: false },
                { text: 'CPU during read/repair', code: false },
                { text: 'Network bandwidth at rest', code: false },
                { text: 'Programming language choice', code: false }
              ],
              correct: 1, explanation: 'You pay in CPU to compute parities and to reconstruct on read. Trade-off: cheaper storage, more compute.' },
            { type: 'match-pairs', prompt: 'Erasure coding in the wild.', leftLabel: 'System', rightLabel: 'Where it shows up',
              pairs: [
                { left: 'Audio CD', right: 'Cross-Interleaved RS code' },
                { left: 'AWS S3', right: 'Distributed across many disks' },
                { left: 'QR codes', right: 'Survive printing damage' },
                { left: 'Deep space DSN', right: 'Voyager photos despite noise' }
              ] }
          ]
        }
      ]
    }

  ]
});

LEARN('facts', {
  intro: 'Did-you-know mini-essays on the clever ideas powering the systems you use every day — from credit cards to CDNs to consensus.',
  chapters: [

    /* ============ Chapter 1 — Luhn ============ */
    {
      id: 'facts-c1',
      title: 'Luhn — the credit-card spell-checker',
      icon: '💳',
      sections: [
        { type: 'heading', text: 'Why a typo on your credit card is caught instantly', level: 1 },
        { type: 'para', html: 'Type one digit wrong on a payment form and the screen reddens <em>before</em> the request even hits the network. There\'s no database lookup. So how does the browser know? The card itself tells it.' },
        { type: 'para', html: 'In 1954, IBM\'s Hans Peter Luhn patented a tiny formula — a checksum — for catching accidental mistakes in identification numbers. Every major credit-card issuer adopted it. The last digit of every card you own is chosen so the whole number satisfies the Luhn rule.' },

        { type: 'heading', text: 'The algorithm', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Starting from the rightmost digit (the check digit), double every <em>second</em> digit moving left.',
          'If doubling gives 10 or more, sum the two resulting digits (e.g., 8 → 16 → 1+6 = 7).',
          'Add up all the digits — original and adjusted.',
          'If the total is divisible by 10, the number passes.'
        ] },

        { type: 'image', alt: 'Luhn algorithm walkthrough',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.lbl{font-size:13px;fill:#475569}.dg{font-size:24px;font-family:'JetBrains Mono',monospace;text-anchor:middle}.dbl{fill:#dc2626;font-weight:700}.norm{fill:#1e293b}.box{fill:#fef3c7;stroke:#92400e;stroke-width:2}.tt{font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}</style></defs>
<text x="380" y="28" class="t tt">4539 1488 0343 6467 — is this a valid card number?</text>
<g class="t dg" transform="translate(40, 80)">
  <text x="0">4</text><text x="40" class="dbl">5</text><text x="80">3</text><text x="120" class="dbl">9</text>
  <text x="170">1</text><text x="210" class="dbl">4</text><text x="250">8</text><text x="290" class="dbl">8</text>
  <text x="340">0</text><text x="380" class="dbl">3</text><text x="420">4</text><text x="460" class="dbl">3</text>
  <text x="510">6</text><text x="550" class="dbl">4</text><text x="590">6</text><text x="630">7</text>
</g>
<text x="40" y="105" class="t lbl" text-anchor="middle">×1</text>
<text x="80" y="105" class="t lbl" text-anchor="middle">×2</text>
<text x="120" y="105" class="t lbl" text-anchor="middle">×1</text>
<text x="160" y="105" class="t lbl" text-anchor="middle">×2</text>
<text x="380" y="135" class="t lbl" text-anchor="middle" style="font-size:14px">red digits were doubled: 10→1, 18→9, 8, 16→7, 0, 6, 8, 8</text>
<rect x="160" y="160" width="440" height="50" rx="10" class="box"/>
<text x="380" y="180" class="t tt">Sum = 4+1+3+9+1+8+8+7+0+6+4+6+6+8+6+7 = 80</text>
<text x="380" y="200" class="t" style="font-size:14px;text-anchor:middle;fill:#059669">80 mod 10 = 0  ✓  valid card</text>
</svg>` },

        { type: 'callout', kind: 'info', html: 'Luhn catches <strong>every</strong> single-digit error and <strong>most</strong> adjacent-digit transpositions. It does <em>not</em> catch the transposition <code>09 ↔ 90</code>. That\'s a known blind spot.' },

        { type: 'heading', text: 'Reading a card number', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>First 6 digits</strong> — the BIN/IIN identifies the issuer (Visa starts with 4, Mastercard 51–55).',
          '<strong>Middle digits</strong> — your account number with that issuer.',
          '<strong>Last digit</strong> — the Luhn check digit. Computed to make the whole number pass mod-10.'
        ] },

        { type: 'code', lang: 'js', code: `<span class="kw">function</span> <span class="fn">luhnValid</span>(num) {
  <span class="kw">let</span> sum = <span class="num">0</span>, alt = <span class="kw">false</span>;
  <span class="kw">for</span> (<span class="kw">let</span> i = num.length - <span class="num">1</span>; i &gt;= <span class="num">0</span>; i--) {
    <span class="kw">let</span> d = <span class="fn">parseInt</span>(num[i], <span class="num">10</span>);
    <span class="kw">if</span> (alt) { d *= <span class="num">2</span>; <span class="kw">if</span> (d &gt; <span class="num">9</span>) d -= <span class="num">9</span>; }
    sum += d;
    alt = !alt;
  }
  <span class="kw">return</span> sum % <span class="num">10</span> === <span class="num">0</span>;
}` },

        { type: 'callout', kind: 'tip', html: 'Luhn isn\'t a security feature — it\'s a typo-catcher. It says nothing about whether the card is real, active, or has funds. That\'s what the payment processor verifies.' },

        { type: 'heading', text: 'Where else you\'ll see it', level: 2 },
        { type: 'list', kind: 'check', items: [
          'IMEI numbers on every phone',
          'Canadian Social Insurance Numbers',
          'US National Provider Identifiers (healthcare)',
          'Survey Monkey\'s response IDs and many others'
        ] }
      ]
    },

    /* ============ Chapter 2 — Bloom filter ============ */
    {
      id: 'facts-c2',
      title: 'Bloom filters — the set that lies one-way',
      icon: '🌸',
      sections: [
        { type: 'heading', text: 'Have I seen this URL before?', level: 1 },
        { type: 'para', html: 'Every time you open a page in Chrome, the browser silently asks: is this URL on Google\'s list of <em>known-malicious</em> sites? The list has millions of entries. Shipping it as a literal set to every Chrome installation would be insane.' },
        { type: 'para', html: 'So Chrome ships a <strong>Bloom filter</strong> — a tiny bit-array that answers membership questions with a one-sided error. It\'ll never miss a real malicious URL, but it might sometimes say "maybe" for an innocent one (a false positive). When that happens, Chrome falls back to a real lookup. The rest of the time: instant, offline, free.' },

        { type: 'heading', text: 'How it works', level: 2 },
        { type: 'image', alt: 'Bloom filter bit array',
          svg: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.lbl{font-size:13px;fill:#334155}.tt{font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}.cell{fill:#f1f5f9;stroke:#475569}.cellon{fill:#fde68a;stroke:#b45309;stroke-width:2}.dg{font-family:'JetBrains Mono',monospace;font-size:16px;text-anchor:middle;fill:#1e293b}.ar{fill:none;stroke:#0ea5e9;stroke-width:2;marker-end:url(#a)}.ar2{fill:none;stroke:#dc2626;stroke-width:2;stroke-dasharray:4,3;marker-end:url(#a2)}.k{fill:#0ea5e9;font-weight:700;font-size:13px}</style>
<marker id="a" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/></marker>
<marker id="a2" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
</defs>
<text x="380" y="30" class="t tt">A 16-bit Bloom filter</text>
<text x="60" y="68" class="t lbl">"cat"</text>
<text x="60" y="88" class="t k">k=3 hashes</text>
<g transform="translate(140, 110)">
  <rect x="0"   y="0" width="36" height="36" class="cell"/>
  <rect x="38"  y="0" width="36" height="36" class="cellon"/>
  <rect x="76"  y="0" width="36" height="36" class="cell"/>
  <rect x="114" y="0" width="36" height="36" class="cellon"/>
  <rect x="152" y="0" width="36" height="36" class="cell"/>
  <rect x="190" y="0" width="36" height="36" class="cell"/>
  <rect x="228" y="0" width="36" height="36" class="cell"/>
  <rect x="266" y="0" width="36" height="36" class="cellon"/>
  <rect x="304" y="0" width="36" height="36" class="cell"/>
  <rect x="342" y="0" width="36" height="36" class="cell"/>
  <rect x="380" y="0" width="36" height="36" class="cellon"/>
  <rect x="418" y="0" width="36" height="36" class="cell"/>
  <rect x="456" y="0" width="36" height="36" class="cell"/>
  <rect x="494" y="0" width="36" height="36" class="cellon"/>
  <rect x="532" y="0" width="36" height="36" class="cell"/>
  <rect x="570" y="0" width="36" height="36" class="cell"/>
  <text x="18"  y="24" class="t dg">0</text>
  <text x="56"  y="24" class="t dg">1</text>
  <text x="94"  y="24" class="t dg">0</text>
  <text x="132" y="24" class="t dg">1</text>
  <text x="170" y="24" class="t dg">0</text>
  <text x="208" y="24" class="t dg">0</text>
  <text x="246" y="24" class="t dg">0</text>
  <text x="284" y="24" class="t dg">1</text>
  <text x="322" y="24" class="t dg">0</text>
  <text x="360" y="24" class="t dg">0</text>
  <text x="398" y="24" class="t dg">1</text>
  <text x="436" y="24" class="t dg">0</text>
  <text x="474" y="24" class="t dg">0</text>
  <text x="512" y="24" class="t dg">1</text>
  <text x="550" y="24" class="t dg">0</text>
  <text x="588" y="24" class="t dg">0</text>
</g>
<path d="M85,72 C130,80 150,100 160,108" class="ar"/>
<path d="M85,72 C200,80 280,100 290,108" class="ar"/>
<path d="M85,72 C300,90 500,100 510,108" class="ar"/>
<text x="220" y="180" class="t lbl">"add(cat)" sets bits at h1(cat), h2(cat), h3(cat) → 1, 3, 13</text>
<text x="220" y="205" class="t lbl">"contains(cat)"? all 3 bits = 1 → "maybe yes"</text>
<text x="220" y="225" class="t lbl">"contains(dog)"? hashes to 2, 7, 10 → bit 2 = 0 → "definitely no"</text>
</svg>` },

        { type: 'heading', text: 'The math behind the trade', level: 2 },
        { type: 'para', html: 'With <em>n</em> items, <em>m</em> bits, and <em>k</em> hash functions, the false-positive rate is approximately <code>(1 − e^(−kn/m))^k</code>. The optimal <em>k</em> for a given <em>m/n</em> ratio is <code>k ≈ (m/n) · ln 2</code>. Doubling your bit-array roughly squares your false-positive rate — a fantastic deal.' },

        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">BloomFilter</span> {
  <span class="kw">private</span> <span class="ty">BitSet</span> bits;
  <span class="kw">private int</span> m, k;

  <span class="kw">public void</span> <span class="fn">add</span>(<span class="ty">String</span> key) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) {
      bits.<span class="fn">set</span>(<span class="fn">hash</span>(key, i) % m);
    }
  }

  <span class="kw">public boolean</span> <span class="fn">mightContain</span>(<span class="ty">String</span> key) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; k; i++) {
      <span class="kw">if</span> (!bits.<span class="fn">get</span>(<span class="fn">hash</span>(key, i) % m)) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;   <span class="com">// probably</span>
  }
}` },

        { type: 'callout', kind: 'warn', html: 'You <strong>cannot</strong> safely delete from a basic Bloom filter — clearing a bit might unwind another key\'s membership. <em>Counting Bloom filters</em> use counters instead, at the cost of more memory.' },

        { type: 'heading', text: 'In the wild', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Chrome safe-browsing</strong> — pre-filter for the malicious-URL list',
          '<strong>Cassandra & HBase</strong> — skip reading SSTables that can\'t hold a key',
          '<strong>Bitcoin SPV wallets</strong> — ask peers for transactions involving "my addresses" without revealing which',
          '<strong>Medium</strong> — "you\'ve already read this article" — avoid showing duplicates',
          '<strong>Akamai</strong> — defeat one-hit wonders that would otherwise pollute the cache'
        ] }
      ]
    },

    /* ============ Chapter 3 — Consistent hashing ============ */
    {
      id: 'facts-c3',
      title: 'Consistent hashing — the ring that scales',
      icon: '⭕',
      sections: [
        { type: 'heading', text: 'Have you ever wondered how Cassandra adds a node without re-sharding?', level: 1 },
        { type: 'para', html: 'Imagine a cache cluster with 4 servers and the obvious sharding scheme: <code>server = hash(key) % 4</code>. Add a 5th server, change to <code>% 5</code>, and suddenly almost every key lives on a new machine. You\'ve invalidated essentially the entire cache in one operation. Disaster.' },
        { type: 'para', html: 'Consistent hashing — first published by Karger et al. in 1997 — fixes this with one beautiful twist.' },

        { type: 'heading', text: 'The trick: hash both keys AND servers onto a ring', level: 2 },
        { type: 'image', alt: 'Consistent hashing ring',
          svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}.ring{fill:none;stroke:#94a3b8;stroke-width:3}.srv{fill:#1d4ed8}.srvt{font-family:Inter,sans-serif;font-weight:700;font-size:14px;fill:white;text-anchor:middle}.key{fill:#16a34a}.keyt{font-family:Inter,sans-serif;font-size:11px;fill:#0f172a;text-anchor:middle}.arr{stroke:#dc2626;stroke-width:1.5;fill:none;stroke-dasharray:3,3}.lab{font-family:Inter,sans-serif;font-size:13px;fill:#475569}</style></defs>
<text x="350" y="28" class="t tt">Servers (blue) and keys (green) on a 0..2³² ring</text>
<circle cx="350" cy="200" r="130" class="ring"/>
<text x="350" y="50" class="lab" text-anchor="middle">0 / 2³²</text>
<g><circle cx="350" cy="70" r="14" class="srv"/><text x="350" y="74" class="srvt">S1</text></g>
<g><circle cx="465" cy="155" r="14" class="srv"/><text x="465" y="159" class="srvt">S2</text></g>
<g><circle cx="427" cy="298" r="14" class="srv"/><text x="427" y="302" class="srvt">S3</text></g>
<g><circle cx="235" cy="298" r="14" class="srv"/><text x="235" y="302" class="srvt">S4</text></g>
<g><circle cx="412" cy="92" r="6" class="key"/><text x="412" y="80" class="keyt">k:alice</text></g>
<g><circle cx="475" cy="220" r="6" class="key"/><text x="510" y="222" class="keyt">k:order42</text></g>
<g><circle cx="350" cy="335" r="6" class="key"/><text x="350" y="354" class="keyt">k:cart7</text></g>
<g><circle cx="225" cy="148" r="6" class="key"/><text x="180" y="138" class="keyt">k:photo</text></g>
<path d="M412,92 Q450,110 463,142" class="arr"/>
<path d="M475,220 Q470,260 432,290" class="arr"/>
<path d="M350,335 Q300,330 247,308" class="arr"/>
<path d="M225,148 Q300,80 343,80" class="arr"/>
<text x="180" y="370" class="lab">Each key belongs to the next clockwise server.</text>
</svg>` },

        { type: 'para', html: 'Hash a key — you land at a point on the ring. Walk clockwise until you hit a server. That server owns the key. Now <strong>add a 5th server</strong>: it claims a single arc on the ring. The only keys that move are those that fall in that arc. Everyone else stays put.' },

        { type: 'image', alt: 'Adding a node',
          svg: `<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155}.k{fill:none;stroke:#94a3b8;stroke-width:3}.arc{fill:none;stroke:#dc2626;stroke-width:6}.s{fill:#1d4ed8}.st{font-weight:700;font-size:12px;fill:white;text-anchor:middle}.snew{fill:#f59e0b}</style></defs>
<text x="160" y="24" class="t tt">Before</text>
<text x="560" y="24" class="t tt">After: add S5</text>
<circle cx="160" cy="130" r="80" class="k"/>
<circle cx="160" cy="50"  r="11" class="s"/><text x="160" y="53" class="st">S1</text>
<circle cx="237" cy="115" r="11" class="s"/><text x="237" y="118" class="st">S2</text>
<circle cx="210" cy="200" r="11" class="s"/><text x="210" y="203" class="st">S3</text>
<circle cx="103" cy="200" r="11" class="s"/><text x="103" y="203" class="st">S4</text>
<text x="160" y="232" class="t lbl" text-anchor="middle">4 servers, ¼ each</text>

<circle cx="560" cy="130" r="80" class="k"/>
<path d="M560,50 A80,80 0 0 1 627,93" class="arc"/>
<circle cx="560" cy="50"  r="11" class="s"/><text x="560" y="53" class="st">S1</text>
<circle cx="637" cy="115" r="11" class="s"/><text x="637" y="118" class="st">S2</text>
<circle cx="610" cy="200" r="11" class="s"/><text x="610" y="203" class="st">S3</text>
<circle cx="503" cy="200" r="11" class="s"/><text x="503" y="203" class="st">S4</text>
<circle cx="627" cy="93" r="11" class="snew"/><text x="627" y="96" class="st">S5</text>
<text x="560" y="232" class="t lbl" text-anchor="middle">Only the red arc moves to S5</text>
</svg>` },

        { type: 'heading', text: 'Virtual nodes smooth the load', level: 2 },
        { type: 'para', html: 'A naive ring places each server at one point. If S3 happens to sit near S4, it gets a tiny slice of keys — uneven load. Solution: each physical server is hashed at many "virtual" positions (often 100–256), giving it many arcs of the ring. The variance shrinks dramatically.' },

        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Ring</span> {
  <span class="kw">private</span> <span class="ty">TreeMap</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; ring = <span class="kw">new</span> <span class="ty">TreeMap</span>&lt;&gt;();
  <span class="kw">private int</span> vnodesPerServer = <span class="num">128</span>;

  <span class="kw">public void</span> <span class="fn">addServer</span>(<span class="ty">String</span> name) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; vnodesPerServer; i++) {
      ring.<span class="fn">put</span>(<span class="fn">hash</span>(name + <span class="str">"#"</span> + i), name);
    }
  }

  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">serverFor</span>(<span class="ty">String</span> key) {
    <span class="ty">Map.Entry</span>&lt;<span class="ty">Integer</span>, <span class="ty">String</span>&gt; e =
        ring.<span class="fn">ceilingEntry</span>(<span class="fn">hash</span>(key));
    <span class="kw">return</span> (e != <span class="kw">null</span> ? e : ring.<span class="fn">firstEntry</span>()).<span class="fn">getValue</span>();
  }
}` },

        { type: 'callout', kind: 'tip', html: 'Cassandra, DynamoDB, Riak, and Memcached client libraries all use consistent hashing (or its descendant, <em>rendezvous hashing</em>). Akamai\'s edge mapping is one of the oldest production examples.' },

        { type: 'heading', text: 'Cost comparison: ~1/N vs ~N/(N+1)', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Mod-N hashing: adding 1 server moves roughly <em>all</em> keys',
          'Consistent hashing: adding 1 server moves roughly 1/(N+1) of keys',
          'For a 100-node cluster: 99% vs 1% — three orders of magnitude'
        ] }
      ]
    },

    /* ============ Chapter 4 — HyperLogLog ============ */
    {
      id: 'facts-c4',
      title: 'HyperLogLog — counting billions in 12 KB',
      icon: '🔢',
      sections: [
        { type: 'heading', text: 'How does Reddit count unique visitors without a HashSet?', level: 1 },
        { type: 'para', html: 'A naive unique-visitor counter stores every user ID it has seen — that\'s a <code>HashSet</code> growing to billions of entries. Tens of gigabytes of RAM. For every post.' },
        { type: 'para', html: 'There\'s a wonderful shortcut, invented by Philippe Flajolet in 2007: <strong>HyperLogLog</strong>. It\'ll tell you "this post had ~3.41 million unique viewers, ±1%" — using about <em>twelve kilobytes</em> of memory. Forever. Regardless of cardinality.' },

        { type: 'heading', text: 'The intuition: count leading zeros', level: 2 },
        { type: 'para', html: 'Hash each item to a uniformly-random bit string. In a random string of bits, the chance of seeing <em>k</em> leading zeros in a row is <code>1/2^k</code>. So if you\'ve hashed enough items to see a 20-leading-zero hash, you\'ve probably hashed about <code>2^20 ≈ 1 million</code> items.' },

        { type: 'image', alt: 'Leading zeros estimate',
          svg: `<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155}.h{font-family:'JetBrains Mono',monospace;font-size:14px;fill:#1e293b}.lead{fill:#dc2626;font-weight:700}</style></defs>
<text x="380" y="28" class="t tt">Track the longest run of leading zeros seen across all hashes</text>
<text x="60"  y="70"  class="t h"><tspan class="lead">0</tspan>10101100…    1 zero  → small set</text>
<text x="60"  y="100" class="t h"><tspan class="lead">000</tspan>11010101…  3 zeros → ≈ 8 items</text>
<text x="60"  y="130" class="t h"><tspan class="lead">00000000</tspan>1010…  8 zeros → ≈ 256 items</text>
<text x="60"  y="160" class="t h"><tspan class="lead">0000000000000000000</tspan>1…  19 zeros → ≈ 524 288 items</text>
<text x="60"  y="195" class="t lbl">Estimate = 2^(longest run of leading zeros)</text>
</svg>` },

        { type: 'para', html: 'A single counter is wildly noisy. The fix: split the hash into <em>m</em> buckets (e.g., 16,384) by using the first few bits as a bucket index. Each bucket keeps its own "max leading zeros" count. Take the harmonic mean across buckets and multiply by a correction constant. The standard error drops to <code>1.04 / √m</code> — about 0.8% with 16K registers.' },

        { type: 'code', lang: 'js', code: `<span class="com">// Redis: count uniques across a stream of events</span>
PFADD post:42:viewers user_abc
PFADD post:42:viewers user_xyz
PFADD post:42:viewers user_xyz   <span class="com">// already there, no-op</span>
PFCOUNT post:42:viewers          <span class="com">// → 2</span>

<span class="com">// And the magic: merge two HyperLogLogs</span>
PFMERGE post:total post:42:viewers post:43:viewers
PFCOUNT post:total               <span class="com">// uniques across both posts</span>` },

        { type: 'callout', kind: 'info', html: 'HLL sketches are <em>mergeable</em>. Element-wise max across the registers gives you the sketch of the union — for free, with no recomputation. That property is gold for distributed counting.' },

        { type: 'heading', text: 'Where it runs', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Redis</strong> — <code>PFADD</code> / <code>PFCOUNT</code> / <code>PFMERGE</code>',
          '<strong>Google BigQuery</strong> — <code>APPROX_COUNT_DISTINCT</code>',
          '<strong>Snowflake</strong> — <code>HLL</code> functions',
          '<strong>Reddit</strong> — unique pageview counts per post',
          '<strong>AdTech ad platforms</strong> — unique audience reach in near-real time'
        ] },

        { type: 'callout', kind: 'tip', html: 'Use HLL when "approximately how many uniques?" is enough. Use a real set when you need to enumerate, intersect precisely, or check exact membership.' }
      ]
    },

    /* ============ Chapter 5 — Merkle trees ============ */
    {
      id: 'facts-c5',
      title: 'Merkle trees — one hash to rule them all',
      icon: '🌳',
      sections: [
        { type: 'heading', text: 'How does Git know if a single byte of your repo changed?', level: 1 },
        { type: 'para', html: 'Git commit hashes are 40-character SHA-1 strings (now optionally SHA-256). A single commit hash uniquely identifies the entire snapshot — every file, every directory, every byte. Change any byte anywhere and the commit hash changes. How?' },
        { type: 'para', html: 'The answer is a <strong>Merkle tree</strong>, invented by Ralph Merkle in 1979. It\'s also the heart of Bitcoin, IPFS, BitTorrent, ZFS, and Cassandra\'s anti-entropy repair.' },

        { type: 'heading', text: 'The structure', level: 2 },
        { type: 'image', alt: 'Merkle tree',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:12px;fill:#475569}.leaf{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.node{fill:#dcfce7;stroke:#16a34a;stroke-width:2}.root{fill:#fef3c7;stroke:#b45309;stroke-width:3}.h{font-family:'JetBrains Mono',monospace;font-size:11px;text-anchor:middle;fill:#0f172a}.lf{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;font-weight:700}.edge{stroke:#64748b;stroke-width:1.5;fill:none}</style></defs>
<text x="380" y="26" class="t tt">Merkle tree of 4 data blocks</text>
<rect x="320" y="50" width="120" height="50" rx="8" class="root"/>
<text x="380" y="72" class="t lf">ROOT</text>
<text x="380" y="92" class="t h">h(H12 + H34)</text>
<rect x="180" y="140" width="120" height="50" rx="8" class="node"/>
<text x="240" y="162" class="t lf">H12</text>
<text x="240" y="182" class="t h">h(h1 + h2)</text>
<rect x="460" y="140" width="120" height="50" rx="8" class="node"/>
<text x="520" y="162" class="t lf">H34</text>
<text x="520" y="182" class="t h">h(h3 + h4)</text>
<rect x="100" y="230" width="100" height="60" rx="8" class="leaf"/>
<text x="150" y="250" class="t lf">h1</text>
<text x="150" y="268" class="t h">h(block 1)</text>
<text x="150" y="282" class="t h">"Hello"</text>
<rect x="230" y="230" width="100" height="60" rx="8" class="leaf"/>
<text x="280" y="250" class="t lf">h2</text>
<text x="280" y="268" class="t h">h(block 2)</text>
<text x="280" y="282" class="t h">"World"</text>
<rect x="430" y="230" width="100" height="60" rx="8" class="leaf"/>
<text x="480" y="250" class="t lf">h3</text>
<text x="480" y="268" class="t h">h(block 3)</text>
<text x="480" y="282" class="t h">"foo"</text>
<rect x="560" y="230" width="100" height="60" rx="8" class="leaf"/>
<text x="610" y="250" class="t lf">h4</text>
<text x="610" y="268" class="t h">h(block 4)</text>
<text x="610" y="282" class="t h">"bar"</text>
<path d="M380,100 L240,140" class="edge"/>
<path d="M380,100 L520,140" class="edge"/>
<path d="M240,190 L150,230" class="edge"/>
<path d="M240,190 L280,230" class="edge"/>
<path d="M520,190 L480,230" class="edge"/>
<path d="M520,190 L610,230" class="edge"/>
</svg>` },

        { type: 'list', kind: 'numbered', items: [
          'Hash each data block — those are the <strong>leaves</strong>.',
          'Pair them up. The internal node is <code>hash(leftChild + rightChild)</code>.',
          'Repeat: pair, hash, climb. Until one hash remains: the <strong>Merkle root</strong>.'
        ] },

        { type: 'heading', text: 'Merkle proofs', level: 2 },
        { type: 'para', html: 'Here\'s where it gets really cool. Suppose you want to prove "block 3 is part of the official dataset." You don\'t need to send the whole tree. You send block 3 plus its <strong>siblings</strong> at each level: just <code>h4</code> and <code>H12</code>. The verifier:' },

        { type: 'list', kind: 'numbered', items: [
          'Hashes block 3 → h3',
          'Hashes h3 + h4 → H34',
          'Hashes H12 + H34 → candidate root',
          'Compares against the known root. Match → block 3 is genuine.'
        ] },

        { type: 'callout', kind: 'success', html: 'For <em>n</em> blocks, a proof contains <strong>log₂(n)</strong> sibling hashes. A million-leaf tree needs only ~20 hashes (~640 bytes) to prove any block. This is why Bitcoin "light wallets" can verify a transaction without downloading 500 GB of blockchain.' },

        { type: 'code', lang: 'js', code: `<span class="kw">function</span> <span class="fn">verify</span>(block, index, proof, root) {
  <span class="kw">let</span> hash = <span class="fn">sha256</span>(block);
  <span class="kw">for</span> (<span class="kw">const</span> sibling <span class="kw">of</span> proof) {
    hash = (index % <span class="num">2</span> === <span class="num">0</span>)
      ? <span class="fn">sha256</span>(hash + sibling)
      : <span class="fn">sha256</span>(sibling + hash);
    index = <span class="fn">Math</span>.<span class="fn">floor</span>(index / <span class="num">2</span>);
  }
  <span class="kw">return</span> hash === root;
}` },

        { type: 'heading', text: 'In the wild', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Git</strong> — every tree object and commit is a Merkle node',
          '<strong>Bitcoin / Ethereum</strong> — block transactions, state',
          '<strong>BitTorrent v2</strong> — per-piece verification',
          '<strong>Certificate Transparency</strong> — proves a TLS cert was logged',
          '<strong>ZFS / Btrfs</strong> — silent-corruption detection',
          '<strong>Cassandra</strong> — anti-entropy repair across replicas'
        ] }
      ]
    },

    /* ============ Chapter 6 — Snowflake IDs ============ */
    {
      id: 'facts-c6',
      title: 'Snowflake IDs — unique without a coordinator',
      icon: '❄️',
      sections: [
        { type: 'heading', text: 'How does Twitter mint billions of unique IDs per day?', level: 1 },
        { type: 'para', html: 'When Twitter went from "fail whale" to "world-scale," they needed every tweet to have a unique ID. Asking a single database to issue IDs would crush it. UUIDs work, but they\'re 128 bits and not sortable. So in 2010 they built <strong>Snowflake</strong>: a 64-bit ID generator that\'s roughly time-sortable, requires zero coordination, and runs entirely locally on each service.' },

        { type: 'heading', text: 'The 64-bit layout', level: 2 },
        { type: 'image', alt: 'Snowflake ID layout',
          svg: `<svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#0f172a;text-anchor:middle;font-weight:700}.sub{font-size:11px;fill:#475569;text-anchor:middle}.b1{fill:#fee2e2;stroke:#dc2626;stroke-width:2}.b2{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.b3{fill:#dcfce7;stroke:#16a34a;stroke-width:2}.b4{fill:#fef3c7;stroke:#b45309;stroke-width:2}</style></defs>
<text x="380" y="28" class="t tt">A Snowflake ID — 64 bits packed</text>
<rect x="30"  y="60" width="40"  height="60" class="b1"/>
<rect x="70"  y="60" width="300" height="60" class="b2"/>
<rect x="370" y="60" width="160" height="60" class="b3"/>
<rect x="530" y="60" width="200" height="60" class="b4"/>
<text x="50"  y="95" class="t lbl">0</text>
<text x="220" y="88" class="t lbl">Timestamp</text>
<text x="220" y="105" class="t sub">milliseconds since custom epoch</text>
<text x="450" y="88" class="t lbl">Worker ID</text>
<text x="450" y="105" class="t sub">datacenter+machine</text>
<text x="630" y="88" class="t lbl">Sequence</text>
<text x="630" y="105" class="t sub">counter per ms</text>
<text x="50"  y="145" class="t sub">1 bit</text>
<text x="220" y="145" class="t sub">41 bits  (~69 years)</text>
<text x="450" y="145" class="t sub">10 bits  (1024 workers)</text>
<text x="630" y="145" class="t sub">12 bits  (4096 IDs/ms)</text>
<text x="380" y="180" class="t sub">Total: 64 bits  →  4 096 × 1 024  =  ≈4M unique IDs per millisecond, cluster-wide</text>
</svg>` },

        { type: 'heading', text: 'Why this layout?', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Time in the high bits</strong> → sorting IDs numerically ≈ sorts by creation time. Great for B-tree indexes.',
          '<strong>Worker ID in the middle</strong> → no two machines collide, even if their clocks agree to the millisecond.',
          '<strong>Sequence at the bottom</strong> → each worker can mint 4096 IDs per millisecond without coordination.',
          '<strong>One unused sign bit</strong> → keeps the result a positive signed long for JVM friendliness.'
        ] },

        { type: 'code', lang: 'js', code: `<span class="kw">class</span> <span class="ty">Snowflake</span> {
  <span class="kw">constructor</span>(workerId, epoch = <span class="num">1288834974657</span>) {
    <span class="kw">this</span>.workerId = workerId;       <span class="com">// 0..1023</span>
    <span class="kw">this</span>.epoch    = epoch;
    <span class="kw">this</span>.seq      = <span class="num">0</span>;
    <span class="kw">this</span>.lastMs   = <span class="num">-1</span>;
  }

  <span class="fn">next</span>() {
    <span class="kw">let</span> now = <span class="fn">Date</span>.<span class="fn">now</span>();
    <span class="kw">if</span> (now &lt; <span class="kw">this</span>.lastMs) <span class="kw">throw new</span> <span class="ty">Error</span>(<span class="str">"clock went backwards"</span>);
    <span class="kw">if</span> (now === <span class="kw">this</span>.lastMs) {
      <span class="kw">this</span>.seq = (<span class="kw">this</span>.seq + <span class="num">1</span>) & <span class="num">0xFFF</span>;
      <span class="kw">if</span> (<span class="kw">this</span>.seq === <span class="num">0</span>) <span class="kw">while</span> (<span class="fn">Date</span>.<span class="fn">now</span>() === now); <span class="com">// wait next ms</span>
    } <span class="kw">else</span> { <span class="kw">this</span>.seq = <span class="num">0</span>; }
    <span class="kw">this</span>.lastMs = now;
    <span class="kw">return</span> ((<span class="ty">BigInt</span>(now - <span class="kw">this</span>.epoch)) &lt;&lt; <span class="num">22n</span>)
         | (<span class="ty">BigInt</span>(<span class="kw">this</span>.workerId) &lt;&lt; <span class="num">12n</span>)
         | <span class="ty">BigInt</span>(<span class="kw">this</span>.seq);
  }
}` },

        { type: 'callout', kind: 'warn', html: 'The dragon in this design: <strong>NTP adjustments that pull the clock backward</strong>. Production implementations refuse to mint new IDs until the clock catches up to the last-seen timestamp. Discord\'s post-mortem on this is famous reading.' },

        { type: 'heading', text: 'Who uses Snowflake-style IDs?', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Twitter</strong> (the original)',
          '<strong>Discord</strong> — message IDs encode timestamps you can decode in-browser',
          '<strong>Instagram</strong> — shard ID baked in instead of worker ID',
          '<strong>Shopify, MongoDB ObjectId, ULID</strong> — all variations on the theme'
        ] }
      ]
    },

    /* ============ Chapter 7 — Rate limiting ============ */
    {
      id: 'facts-c7',
      title: 'Rate limiting — buckets that shape traffic',
      icon: '🪣',
      sections: [
        { type: 'heading', text: 'Why does the GitHub API return X-RateLimit-Remaining?', level: 1 },
        { type: 'para', html: 'Every API you call returns headers like <code>X-RateLimit-Limit: 5000</code> and <code>X-RateLimit-Remaining: 4983</code>. There\'s a <em>bucket</em> behind those numbers — and you can usually pick which of two classic shapes it is.' },

        { type: 'heading', text: 'Token bucket', level: 2 },
        { type: 'para', html: 'Picture a bucket with capacity <em>B</em> tokens. Tokens drip in at rate <em>R</em> per second. Each incoming request consumes one token. Empty bucket → reject (or wait). Because tokens accumulate up to <em>B</em>, idle time becomes burst capacity. A user who hasn\'t made any calls for an hour can fire <em>B</em> requests rapid-fire.' },

        { type: 'image', alt: 'Token bucket diagram',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155}.tank{fill:#e0f2fe;stroke:#0284c7;stroke-width:3}.tok{fill:#facc15;stroke:#a16207}.drop{fill:none;stroke:#0284c7;stroke-width:2}.flow{fill:none;stroke:#16a34a;stroke-width:2;marker-end:url(#ar)}</style>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#16a34a"/></marker>
</defs>
<text x="380" y="28" class="t tt">Token bucket: drip in, spend per request</text>
<path d="M170,90 Q170,100 175,100" class="drop"/>
<path d="M170,120 Q170,130 175,130" class="drop"/>
<text x="200" y="80" class="t lbl">refill: R tokens/sec</text>
<rect x="240" y="80" width="160" height="170" rx="10" class="tank"/>
<circle cx="270" cy="220" r="10" class="tok"/>
<circle cx="295" cy="220" r="10" class="tok"/>
<circle cx="320" cy="220" r="10" class="tok"/>
<circle cx="345" cy="220" r="10" class="tok"/>
<circle cx="370" cy="220" r="10" class="tok"/>
<circle cx="282" cy="195" r="10" class="tok"/>
<circle cx="307" cy="195" r="10" class="tok"/>
<circle cx="332" cy="195" r="10" class="tok"/>
<text x="320" y="270" class="t lbl" text-anchor="middle">capacity B</text>
<path d="M400,165 L520,165" class="flow"/>
<text x="460" y="158" class="t lbl" text-anchor="middle">1 token / request</text>
<rect x="525" y="135" width="130" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
<text x="590" y="172" class="t lbl" text-anchor="middle">request OK</text>
<text x="320" y="60" class="t lbl" text-anchor="middle">empty → 429 Too Many Requests</text>
</svg>` },

        { type: 'heading', text: 'Leaky bucket', level: 2 },
        { type: 'para', html: 'Now picture a bucket with a hole in the bottom. Requests drip <em>in</em>; the bucket leaks at fixed rate <em>R</em>. If the bucket overflows, the request is dropped. Output is dead-steady — never bursts past R. It\'s great for smoothing rather than rate-capping.' },

        { type: 'code', lang: 'js', code: `<span class="com">// Token bucket — the most common rate-limiter</span>
<span class="kw">class</span> <span class="ty">TokenBucket</span> {
  <span class="kw">constructor</span>(capacity, refillPerSec) {
    <span class="kw">this</span>.capacity = capacity;
    <span class="kw">this</span>.tokens   = capacity;
    <span class="kw">this</span>.rate     = refillPerSec;
    <span class="kw">this</span>.lastRefill = <span class="fn">Date</span>.<span class="fn">now</span>();
  }
  <span class="fn">allow</span>() {
    <span class="kw">const</span> now = <span class="fn">Date</span>.<span class="fn">now</span>();
    <span class="kw">this</span>.tokens = <span class="fn">Math</span>.<span class="fn">min</span>(
      <span class="kw">this</span>.capacity,
      <span class="kw">this</span>.tokens + (now - <span class="kw">this</span>.lastRefill) / <span class="num">1000</span> * <span class="kw">this</span>.rate
    );
    <span class="kw">this</span>.lastRefill = now;
    <span class="kw">if</span> (<span class="kw">this</span>.tokens &gt;= <span class="num">1</span>) { <span class="kw">this</span>.tokens -= <span class="num">1</span>; <span class="kw">return true</span>; }
    <span class="kw">return false</span>;
  }
}` },

        { type: 'callout', kind: 'info', html: 'The HTTP status code for rate limiting is <strong>429 Too Many Requests</strong> (RFC 6585). Often accompanied by <code>Retry-After</code> telling you when to try again.' },

        { type: 'heading', text: 'Algorithm comparison', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Token bucket</strong> — bursts up to capacity, steady refill. Most APIs (Stripe, GitHub).',
          '<strong>Leaky bucket</strong> — constant output. Network shapers, ISPs.',
          '<strong>Fixed window counter</strong> — count per minute. Simple, but can double-burst at window edges.',
          '<strong>Sliding window log</strong> — store timestamps. Most accurate, most memory.',
          '<strong>Sliding window counter</strong> — weighted blend of two adjacent windows. The Cloudflare favorite.'
        ] }
      ]
    },

    /* ============ Chapter 8 — Public-key crypto ============ */
    {
      id: 'facts-c8',
      title: 'Public-key crypto — locks anyone can close',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'How can two strangers share a secret in the open?', level: 1 },
        { type: 'para', html: 'You\'ve never met your bank\'s server. Yet seconds after you load <code>chase.com</code>, you have an encrypted channel only the two of you can read — over a network of routers any one of which could be eavesdropping. This was, for centuries, considered impossible.' },
        { type: 'para', html: 'The 1976 breakthrough by Diffie, Hellman, and Merkle was an idea so elegant it deserves a moment of awe: an operation that\'s <em>easy</em> to compute one way, <em>brutally hard</em> to reverse.' },

        { type: 'heading', text: 'The lock-and-key analogy', level: 2 },
        { type: 'image', alt: 'Public/private key analogy',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155;text-anchor:middle}.k{fill:#fef3c7;stroke:#92400e;stroke-width:2}.kk{font-family:Inter,sans-serif;font-weight:700;text-anchor:middle}</style></defs>
<text x="380" y="28" class="t tt">Two keys. One you give away. One you guard.</text>
<rect x="60"  y="60" width="280" height="130" rx="14" class="k"/>
<text x="200" y="90" class="t kk" style="font-size:18px">🔓 PUBLIC key</text>
<text x="200" y="120" class="t lbl">"Anyone may use this to LOCK</text>
<text x="200" y="140" class="t lbl">a message addressed to me."</text>
<text x="200" y="170" class="t lbl">Published. Listed in directories. Stapled to certificates.</text>
<rect x="420" y="60" width="280" height="130" rx="14" class="k"/>
<text x="560" y="90" class="t kk" style="font-size:18px">🔑 PRIVATE key</text>
<text x="560" y="120" class="t lbl">"Only I can UNLOCK messages</text>
<text x="560" y="140" class="t lbl">addressed to me with my public key."</text>
<text x="560" y="170" class="t lbl">Never shared. Guarded like a password.</text>
</svg>` },

        { type: 'heading', text: 'Two ways to use the pair', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<strong>Encryption</strong> — encrypt with the receiver\'s PUBLIC key. Only their PRIVATE key decrypts.',
          '<strong>Signing</strong> — encrypt a hash with your PRIVATE key. Anyone with your PUBLIC key can verify it. Proof of authorship.'
        ] },

        { type: 'heading', text: 'The HTTPS handshake (simplified)', level: 2 },
        { type: 'image', alt: 'TLS handshake',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155}.arr{fill:none;stroke:#0ea5e9;stroke-width:2;marker-end:url(#h)}.box{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}</style>
<marker id="h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/></marker></defs>
<rect x="80"  y="50" width="120" height="40" rx="6" class="box"/>
<text x="140" y="76" class="t lbl" text-anchor="middle">Browser</text>
<rect x="560" y="50" width="120" height="40" rx="6" class="box"/>
<text x="620" y="76" class="t lbl" text-anchor="middle">chase.com</text>
<path d="M200,110 L560,110" class="arr"/>
<text x="380" y="105" class="t lbl" text-anchor="middle">1. Hello + supported ciphers</text>
<path d="M560,145 L200,145" class="arr"/>
<text x="380" y="140" class="t lbl" text-anchor="middle">2. Certificate (server\'s public key, signed by CA)</text>
<path d="M200,180 L560,180" class="arr"/>
<text x="380" y="175" class="t lbl" text-anchor="middle">3. Pre-master secret, encrypted with server\'s public key</text>
<path d="M200,215 L560,215" class="arr" style="stroke-dasharray:5,5"/>
<path d="M560,215 L200,215" class="arr" style="stroke-dasharray:5,5"/>
<text x="380" y="210" class="t lbl" text-anchor="middle">4. Both derive same session key. Data flows via AES.</text>
</svg>` },

        { type: 'callout', kind: 'tip', html: 'Public-key crypto is too slow for bulk data, so HTTPS uses it only to establish a shared <em>symmetric</em> key. AES then encrypts the actual page bytes — fast.' },

        { type: 'heading', text: 'What makes it "hard backward"?', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>RSA</strong> — factoring the product of two huge primes is exponentially hard with classical algorithms.',
          '<strong>Diffie–Hellman</strong> — computing discrete logarithms in finite fields.',
          '<strong>ECDSA / Ed25519</strong> — discrete logarithms on elliptic curves; much smaller keys for the same security.'
        ] },

        { type: 'callout', kind: 'warn', html: 'Quantum computers, once powerful enough, will break RSA and ECDSA. NIST is standardizing <em>post-quantum</em> alternatives now. The internet is already starting to migrate.' }
      ]
    },

    /* ============ Chapter 9 — JWT ============ */
    {
      id: 'facts-c9',
      title: 'JWT — signed, not encrypted',
      icon: '🪪',
      sections: [
        { type: 'heading', text: 'How can a server know who you are without a session lookup?', level: 1 },
        { type: 'para', html: 'Traditional web auth: log in, server creates a row in a <code>sessions</code> table, hands you a session ID cookie. Every request, server looks you up. Stateful. Doesn\'t scale gracefully across services.' },
        { type: 'para', html: 'JSON Web Tokens flip this. The server hands you a self-contained string. You hand it back on every request. The server verifies the signature — no database needed. Stateless. Microservice-friendly.' },

        { type: 'heading', text: 'Anatomy: three dot-separated chunks', level: 2 },
        { type: 'image', alt: 'JWT structure',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155;text-anchor:middle}.mono{font-family:'JetBrains Mono',monospace;font-size:13px;fill:#0f172a}.h{fill:#fee2e2;stroke:#dc2626;stroke-width:2}.p{fill:#dcfce7;stroke:#16a34a;stroke-width:2}.s{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}</style></defs>
<text x="380" y="28" class="t tt">A JWT  =  base64url(header) . base64url(payload) . signature</text>
<rect x="40"  y="60" width="200" height="70" rx="8" class="h"/>
<text x="140" y="85" class="t lbl">HEADER</text>
<text x="140" y="105" class="t mono" text-anchor="middle">{ "alg":"HS256",</text>
<text x="140" y="120" class="t mono" text-anchor="middle">  "typ":"JWT" }</text>
<rect x="280" y="60" width="200" height="70" rx="8" class="p"/>
<text x="380" y="85" class="t lbl">PAYLOAD (claims)</text>
<text x="380" y="105" class="t mono" text-anchor="middle">{ "sub":"alice",</text>
<text x="380" y="120" class="t mono" text-anchor="middle">  "exp":1735689600 }</text>
<rect x="520" y="60" width="200" height="70" rx="8" class="s"/>
<text x="620" y="85" class="t lbl">SIGNATURE</text>
<text x="620" y="105" class="t mono" text-anchor="middle">HMAC_SHA256(</text>
<text x="620" y="120" class="t mono" text-anchor="middle">header+"."+payload, secret)</text>
<text x="380" y="170" class="t lbl">eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZSJ9.X8h…</text>
<text x="380" y="200" class="t lbl">Header + payload are base64-encoded JSON — anyone can decode them.</text>
<text x="380" y="218" class="t lbl">The signature is what proves the server issued it.</text>
</svg>` },

        { type: 'code', lang: 'js', code: `<span class="com">// Decode a JWT in any language:</span>
<span class="kw">const</span> [hdr, payload, sig] = token.<span class="fn">split</span>(<span class="str">"."</span>);
<span class="kw">const</span> claims = <span class="ty">JSON</span>.<span class="fn">parse</span>(<span class="fn">atob</span>(payload));
<span class="com">// claims.sub, claims.exp, claims.iat ... — readable plaintext JSON</span>` },

        { type: 'callout', kind: 'danger', html: 'JWT payloads are <strong>signed, not encrypted</strong>. Anyone with the token can read every claim. <em>Never</em> put passwords, secrets, or sensitive PII in a JWT.' },

        { type: 'heading', text: 'Standard claims', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>sub</code> — subject (often the user ID)',
          '<code>iss</code> — issuer (your auth server)',
          '<code>aud</code> — audience (who the token is for)',
          '<code>exp</code> — expiration (unix timestamp)',
          '<code>iat</code> — issued at',
          '<code>nbf</code> — not before',
          '<code>jti</code> — JWT ID (for revocation lists)'
        ] },

        { type: 'heading', text: 'The classic "alg: none" attack', level: 2 },
        { type: 'para', html: 'Early JWT libraries trusted the header\'s <code>alg</code> field. An attacker would change it to <code>"none"</code>, strip the signature, and the library would happily accept it. Modern implementations require the caller to specify the expected algorithm. Lesson: never let attacker-controlled data tell your verifier <em>how</em> to verify.' },

        { type: 'heading', text: 'JWT vs server-side sessions', level: 2 },
        { type: 'list', kind: 'check', items: [
          'JWT pros: stateless, easy to share across services, works with mobile/SPA easily',
          'JWT cons: can\'t revoke before expiry without extra machinery; payload bloats every request; secret rotation is harder',
          'Use short TTLs (15 min) with refresh tokens for the best of both worlds'
        ] }
      ]
    },

    /* ============ Chapter 10 — DNS ============ */
    {
      id: 'facts-c10',
      title: 'DNS — the internet\'s phone book',
      icon: '📞',
      sections: [
        { type: 'heading', text: 'How does "google.com" turn into 142.250.x.x in milliseconds?', level: 1 },
        { type: 'para', html: 'Every URL you type, every email you send, every API call — each one starts with a question: "what\'s the IP address?" The answer comes from DNS, the world\'s largest, most-cached distributed database. And it works by walking <em>down</em> a tree of delegated authority.' },

        { type: 'heading', text: 'The lookup walk', level: 2 },
        { type: 'image', alt: 'DNS resolution',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155;text-anchor:middle}.box{stroke-width:2}.you{fill:#dbeafe;stroke:#1d4ed8}.res{fill:#fef3c7;stroke:#b45309}.root{fill:#fee2e2;stroke:#dc2626}.tld{fill:#fce7f3;stroke:#be185d}.auth{fill:#dcfce7;stroke:#16a34a}.arr{fill:none;stroke:#475569;stroke-width:1.5;marker-end:url(#d)}.lab{font-size:11px;fill:#334155}</style>
<marker id="d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<text x="380" y="28" class="t tt">Resolving google.com (cold cache)</text>
<rect x="40"  y="50" width="130" height="50" rx="8" class="box you"/>
<text x="105" y="80" class="t lbl">Your laptop</text>
<rect x="220" y="50" width="160" height="50" rx="8" class="box res"/>
<text x="300" y="80" class="t lbl">Resolver (ISP / 1.1.1.1)</text>
<rect x="500" y="160" width="160" height="50" rx="8" class="box root"/>
<text x="580" y="190" class="t lbl">Root servers (.)</text>
<rect x="500" y="220" width="160" height="50" rx="8" class="box tld"/>
<text x="580" y="250" class="t lbl">.com TLD servers</text>
<rect x="500" y="280" width="160" height="50" rx="8" class="box auth"/>
<text x="580" y="310" class="t lbl">Google\'s authoritative NS</text>
<path d="M170,75  L220,75"  class="arr"/>
<text x="195" y="68" class="lab t" text-anchor="middle">A?</text>
<path d="M380,75  L500,170" class="arr"/>
<text x="420" y="120" class="lab t" text-anchor="middle">1. Who has .com?</text>
<path d="M500,200 L420,200 L380,100" class="arr"/>
<text x="440" y="155" class="lab t" text-anchor="middle">→ TLD list</text>
<path d="M380,80  L500,230" class="arr"/>
<text x="430" y="200" class="lab t" text-anchor="middle">2. Who has google.com?</text>
<path d="M500,260 L460,260 L380,100" class="arr"/>
<text x="440" y="275" class="lab t" text-anchor="middle">→ Google NS</text>
<path d="M380,90  L500,295" class="arr"/>
<text x="500" y="255" class="lab t" text-anchor="middle">3. A record?</text>
<path d="M220,90  L170,90"  class="arr"/>
<text x="195" y="105" class="lab t" text-anchor="middle">142.250.x.x</text>
</svg>` },

        { type: 'para', html: 'Once any of those answers reach your resolver, they\'re <strong>cached</strong> for the record\'s TTL. The next lookup for "google.com" skips most of the walk.' },

        { type: 'heading', text: 'Record types worth knowing', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>A</strong> — IPv4 address',
          '<strong>AAAA</strong> — IPv6 address',
          '<strong>CNAME</strong> — alias to another name',
          '<strong>MX</strong> — mail server',
          '<strong>TXT</strong> — arbitrary text (SPF, DKIM, domain verification)',
          '<strong>NS</strong> — name servers authoritative for this zone',
          '<strong>SOA</strong> — start of authority — zone metadata',
          '<strong>CAA</strong> — which CAs are allowed to issue certs for this domain'
        ] },

        { type: 'code', lang: 'bash', code: `<span class="com"># See the walk in action</span>
dig +trace google.com

<span class="com"># Just the A record</span>
dig google.com A +short

<span class="com"># Inspect MX records</span>
dig gmail.com MX

<span class="com"># Reverse — IP to name</span>
dig -x 142.250.190.46` },

        { type: 'callout', kind: 'info', html: 'The trailing dot — yes, <code>google.com.</code> with a dot — is the literal "root" of the DNS tree. Browsers add it for you. Authoritative zone files write it explicitly.' },

        { type: 'heading', text: 'Why DNS feels instant', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Heavy caching at every layer — browser, OS, resolver, ISP',
          'Hierarchical delegation — each zone owner manages their slice',
          'Anycast routing — many servers share an IP; you reach the nearest',
          'Tiny UDP packets that fit in one round trip'
        ] },

        { type: 'callout', kind: 'warn', html: '"It\'s always DNS." Operations folklore is right — a huge fraction of outages trace back to DNS misconfiguration, expired records, or propagation delays.' }
      ]
    },

    /* ============ Chapter 11 — Trie autocomplete ============ */
    {
      id: 'facts-c11',
      title: 'Tries — why search suggestions are instant',
      icon: '🌲',
      sections: [
        { type: 'heading', text: 'How does Google suggest before you finish typing?', level: 1 },
        { type: 'para', html: 'Type "appl" and four suggestions appear before your finger leaves the key. The web has billions of phrases. How does a server find matching prefixes <em>that</em> fast?' },
        { type: 'para', html: 'The classic answer is the <strong>trie</strong> (rhymes with "try"), also called a prefix tree. Each node is a letter. Walking from the root spells out a word. Every word that shares a prefix shares the same path through the tree up to the branch point.' },

        { type: 'heading', text: 'Visualize it', level: 2 },
        { type: 'image', alt: 'Trie example',
          svg: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:12px;fill:#334155;text-anchor:middle}.n{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.nend{fill:#fde68a;stroke:#b45309;stroke-width:2}.e{stroke:#64748b;stroke-width:1.5;fill:none}.let{font-family:Inter,sans-serif;font-weight:700;font-size:16px;text-anchor:middle;fill:#0f172a}</style></defs>
<text x="380" y="28" class="t tt">Trie holding: cat, car, care, cart, dog</text>
<circle cx="380" cy="65" r="20" class="n"/>
<text x="380" y="70" class="let">·</text>
<text x="380" y="50" class="t lbl">root</text>
<circle cx="280" cy="135" r="20" class="n"/>
<text x="280" y="140" class="let">c</text>
<circle cx="480" cy="135" r="20" class="n"/>
<text x="480" y="140" class="let">d</text>
<path d="M370,80 L290,120" class="e"/>
<path d="M390,80 L470,120" class="e"/>
<circle cx="280" cy="205" r="20" class="n"/>
<text x="280" y="210" class="let">a</text>
<circle cx="480" cy="205" r="20" class="n"/>
<text x="480" y="210" class="let">o</text>
<path d="M280,155 L280,185" class="e"/>
<path d="M480,155 L480,185" class="e"/>
<circle cx="200" cy="275" r="20" class="nend"/>
<text x="200" y="280" class="let">t</text>
<circle cx="280" cy="275" r="20" class="nend"/>
<text x="280" y="280" class="let">r</text>
<circle cx="360" cy="275" r="20" class="n"/>
<text x="360" y="280" class="let">e</text>
<circle cx="480" cy="275" r="20" class="nend"/>
<text x="480" y="280" class="let">g</text>
<path d="M270,225 L210,255" class="e"/>
<path d="M280,225 L280,255" class="e"/>
<path d="M290,225 L350,255" class="e"/>
<path d="M480,225 L480,255" class="e"/>
<circle cx="320" cy="340" r="20" class="nend"/>
<text x="320" y="345" class="let">t</text>
<path d="M350,295 L330,320" class="e"/>
<text x="200" y="320" class="t lbl">cat★</text>
<text x="280" y="320" class="t lbl">car★</text>
<text x="365" y="320" class="t lbl">care?</text>
<text x="480" y="320" class="t lbl">dog★</text>
<text x="320" y="358" class="t lbl">cart…</text>
<text x="380" y="358" class="t lbl">★ = end of word</text>
</svg>` },

        { type: 'heading', text: 'What makes it fast', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Lookup is O(L) where L is the length of the query — <em>independent of dictionary size</em>',
          'Prefix matches are a single walk; descendants of that node are all completions',
          'Shared prefixes share storage — millions of words don\'t blow up the structure',
          'No expensive comparisons against every dictionary entry'
        ] },

        { type: 'code', lang: 'js', code: `<span class="kw">class</span> <span class="ty">Trie</span> {
  <span class="kw">constructor</span>() { <span class="kw">this</span>.root = {}; }

  <span class="fn">insert</span>(word) {
    <span class="kw">let</span> node = <span class="kw">this</span>.root;
    <span class="kw">for</span> (<span class="kw">const</span> c <span class="kw">of</span> word) node = node[c] ??= {};
    node.$ = <span class="kw">true</span>;       <span class="com">// end-of-word marker</span>
  }

  <span class="fn">complete</span>(prefix) {
    <span class="kw">let</span> node = <span class="kw">this</span>.root;
    <span class="kw">for</span> (<span class="kw">const</span> c <span class="kw">of</span> prefix) {
      <span class="kw">if</span> (!node[c]) <span class="kw">return</span> [];
      node = node[c];
    }
    <span class="kw">const</span> out = [];
    (<span class="kw">function</span> dfs(n, path) {
      <span class="kw">if</span> (n.$) out.<span class="fn">push</span>(path);
      <span class="kw">for</span> (<span class="kw">const</span> c <span class="kw">in</span> n) <span class="kw">if</span> (c !== <span class="str">"$"</span>) dfs(n[c], path + c);
    })(node, prefix);
    <span class="kw">return</span> out;
  }
}` },

        { type: 'heading', text: 'Where tries live', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Autocomplete</strong> in search engines, IDEs, smartphone keyboards',
          '<strong>Spell-checkers</strong> — fast "did you mean" using nearby trie paths',
          '<strong>IP routing tables</strong> — longest-prefix-match via radix tries',
          '<strong>Regex engines</strong> — alternation often compiles to trie-like NFAs',
          '<strong>Genomics</strong> — suffix tries (and the related suffix array)'
        ] },

        { type: 'callout', kind: 'tip', html: 'Real production tries add weight: each node knows the top-K most popular completions, so the UI can show "appl<em>e</em>", "appl<em>e store</em>", "appl<em>e tv</em>" by popularity, not just alphabetically.' }
      ]
    },

    /* ============ Chapter 12 — PageRank ============ */
    {
      id: 'facts-c12',
      title: 'PageRank — importance from votes',
      icon: '🔗',
      sections: [
        { type: 'heading', text: 'How did two grad students rank the entire web?', level: 1 },
        { type: 'para', html: 'In 1998, Larry Page and Sergey Brin published an idea so simple it sounds almost obvious in retrospect: rank a web page by who links to it. But not naively — weight each link by the importance of the page giving it. Of course, that creates a chicken-and-egg loop. The fix is a fixed-point computation.' },

        { type: 'heading', text: 'The intuition: a random surfer', level: 2 },
        { type: 'para', html: 'Imagine someone clicking links at random forever. With probability 0.85 they follow a link on the current page; with probability 0.15 they teleport to a uniformly random page (this is the "damping factor"). PageRank is just the long-run fraction of time the surfer spends on each page.' },

        { type: 'image', alt: 'PageRank graph',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.n{stroke:#0f172a;stroke-width:2}.nb{fill:#fcd34d}.ns{fill:#bfdbfe}.nm{fill:#bbf7d0}.lbl{font-family:Inter,sans-serif;font-weight:700;font-size:14px;text-anchor:middle;fill:#0f172a}.pr{font-size:12px;fill:#334155;text-anchor:middle}.arr{fill:none;stroke:#64748b;stroke-width:1.5;marker-end:url(#p)}</style>
<marker id="p" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#64748b"/></marker></defs>
<text x="380" y="28" class="t tt">PR flows along edges; sinks get less weight</text>
<circle cx="200" cy="100" r="36" class="n ns"/>
<text x="200" y="104" class="lbl">A</text>
<text x="200" y="146" class="pr">PR ≈ 0.16</text>
<circle cx="380" cy="100" r="46" class="n nb"/>
<text x="380" y="104" class="lbl">B (hub)</text>
<text x="380" y="156" class="pr">PR ≈ 0.42</text>
<circle cx="560" cy="100" r="36" class="n ns"/>
<text x="560" y="104" class="lbl">C</text>
<text x="560" y="146" class="pr">PR ≈ 0.18</text>
<circle cx="290" cy="220" r="30" class="n nm"/>
<text x="290" y="224" class="lbl">D</text>
<text x="290" y="262" class="pr">PR ≈ 0.10</text>
<circle cx="470" cy="220" r="30" class="n nm"/>
<text x="470" y="224" class="lbl">E</text>
<text x="470" y="262" class="pr">PR ≈ 0.14</text>
<path d="M236,100 L334,100" class="arr"/>
<path d="M560,100 L426,100" class="arr"/>
<path d="M290,190 L370,140" class="arr"/>
<path d="M470,190 L390,140" class="arr"/>
<path d="M380,146 L290,190" class="arr"/>
<path d="M380,146 L460,190" class="arr"/>
</svg>` },

        { type: 'heading', text: 'The update formula', level: 2 },
        { type: 'code', lang: 'js', code: `<span class="com">// PageRank iteration. d = damping (typically 0.85).</span>
<span class="kw">function</span> <span class="fn">pageRank</span>(graph, d = <span class="num">0.85</span>, iters = <span class="num">30</span>) {
  <span class="kw">const</span> N    = graph.size;
  <span class="kw">let</span>   PR   = <span class="kw">new</span> <span class="ty">Map</span>([...graph.keys()].<span class="fn">map</span>(k =&gt; [k, <span class="num">1</span> / N]));

  <span class="kw">for</span> (<span class="kw">let</span> it = <span class="num">0</span>; it &lt; iters; it++) {
    <span class="kw">const</span> next = <span class="kw">new</span> <span class="ty">Map</span>();
    <span class="kw">for</span> (<span class="kw">const</span> p <span class="kw">of</span> graph.<span class="fn">keys</span>()) {
      <span class="kw">let</span> s = (<span class="num">1</span> - d) / N;
      <span class="kw">for</span> (<span class="kw">const</span> [q, outs] <span class="kw">of</span> graph) {
        <span class="kw">if</span> (outs.<span class="fn">has</span>(p)) s += d * PR.<span class="fn">get</span>(q) / outs.size;
      }
      next.<span class="fn">set</span>(p, s);
    }
    PR = next;
  }
  <span class="kw">return</span> PR;
}` },

        { type: 'callout', kind: 'info', html: 'PageRank converges in about 30 iterations even for a graph of billions of nodes. The matrix is sparse (each page links to a handful), so each iteration is linear in the number of edges.' },

        { type: 'heading', text: 'Beyond search engines', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Twitter / X</strong> uses a PageRank variant to rank "Who to follow"',
          '<strong>Biology</strong> — ranking protein networks (GeneRank)',
          '<strong>Citations</strong> — modern academic ranking (eigenfactor)',
          '<strong>Roads</strong> — ranking street importance for navigation maps',
          '<strong>Bibliometrics</strong> — pre-Google, the idea existed in citation analysis'
        ] },

        { type: 'callout', kind: 'tip', html: 'Modern Google search uses hundreds of signals — PageRank is only one, and not the most important anymore. But the idea — "importance flows along edges of a directed graph" — is everywhere now.' }
      ]
    },

    /* ============ Chapter 13 — CDN edge ============ */
    {
      id: 'facts-c13',
      title: 'CDN edge — bytes from down the street',
      icon: '🌐',
      sections: [
        { type: 'heading', text: 'Why does Netflix play instantly in Tokyo?', level: 1 },
        { type: 'para', html: 'A request from Tokyo to a server in Virginia round-trips in roughly 150 milliseconds — and that\'s just the physics of light. A modern web page makes 30+ such trips. If every byte came from origin, the web would feel like 1995.' },
        { type: 'para', html: 'A <strong>CDN</strong> (Content Delivery Network) sidesteps the round-trip by putting copies of your assets in datacenters scattered across the planet. The user hits the nearest one — milliseconds, not hundreds.' },

        { type: 'heading', text: 'How a request gets routed to the nearest edge', level: 2 },
        { type: 'image', alt: 'CDN topology',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:12px;fill:#334155;text-anchor:middle}.glb{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.pop{fill:#fde68a;stroke:#b45309;stroke-width:2}.orig{fill:#fee2e2;stroke:#dc2626;stroke-width:3}.usr{fill:#dcfce7;stroke:#16a34a;stroke-width:2}.arr{fill:none;stroke:#0ea5e9;stroke-width:2;marker-end:url(#c)}.ar2{fill:none;stroke:#94a3b8;stroke-width:1;stroke-dasharray:3,3}</style>
<marker id="c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/></marker></defs>
<text x="380" y="28" class="t tt">Origin in Virginia · PoPs worldwide · users nearest hit</text>
<ellipse cx="380" cy="170" rx="320" ry="100" class="glb"/>
<rect x="350" y="155" width="60" height="30" rx="4" class="orig"/>
<text x="380" y="174" class="lbl">Origin</text>
<text x="380" y="200" class="lbl">us-east-1</text>
<circle cx="100" cy="120" r="20" class="pop"/>
<text x="100" y="125" class="lbl">SFO</text>
<circle cx="220" cy="90"  r="20" class="pop"/>
<text x="220" y="95"  class="lbl">LHR</text>
<circle cx="540" cy="100" r="20" class="pop"/>
<text x="540" y="105" class="lbl">FRA</text>
<circle cx="640" cy="170" r="20" class="pop"/>
<text x="640" y="175" class="lbl">NRT</text>
<circle cx="600" cy="245" r="20" class="pop"/>
<text x="600" y="250" class="lbl">SYD</text>
<circle cx="170" cy="245" r="20" class="pop"/>
<text x="170" y="250" class="lbl">GRU</text>
<rect x="640" y="195" width="80" height="30" rx="4" class="usr"/>
<text x="680" y="214" class="lbl">user</text>
<path d="M675,200 L660,190" class="arr"/>
<path d="M620,170 L410,170" class="ar2"/>
<text x="510" y="160" class="lbl">cache miss → fetch from origin once</text>
</svg>` },

        { type: 'para', html: 'The user types <code>example.com</code>. DNS returns an IP that\'s actually <em>anycast</em>: the same IP is announced from many edge locations, and BGP routes the user to the closest one. That edge server checks its cache. Cache hit → serve in microseconds. Cache miss → fetch from origin, cache it, and serve all future users from cache.' },

        { type: 'heading', text: 'Cache-Control headers tell the edge what to do', level: 2 },
        { type: 'code', lang: 'http', code: `<span class="com"># Long-cached static asset (1 year on the edge, 1 day in browser)</span>
Cache-Control: public, max-age=86400, s-maxage=31536000, immutable

<span class="com"># Never cache (sensitive user data)</span>
Cache-Control: no-store

<span class="com"># Revalidate every time, but allow conditional GET</span>
Cache-Control: no-cache, must-revalidate

<span class="com"># Stale-while-revalidate: serve stale, refresh async</span>
Cache-Control: max-age=60, stale-while-revalidate=600` },

        { type: 'callout', kind: 'tip', html: '<code>immutable</code> + fingerprinted filenames (<code>app.a3f7c2.js</code>) is the modern best practice. Cache forever; deploy a new filename to "invalidate."' },

        { type: 'heading', text: 'Beyond static files', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Edge functions</strong> — Cloudflare Workers, Lambda@Edge — run code at the edge near users',
          '<strong>TLS termination</strong> — handshake completes at the edge, saving an RTT to origin',
          '<strong>DDoS scrubbing</strong> — bad traffic is dropped at the edge before reaching your servers',
          '<strong>Image optimization</strong> — auto-resize / re-encode on the fly per device',
          '<strong>Tiered caching</strong> — regional caches sit between the edge and origin, reducing origin load further'
        ] },

        { type: 'heading', text: 'Notable CDNs', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Akamai</strong> (1998) — the original',
          '<strong>Cloudflare</strong> — DNS + CDN + edge compute',
          '<strong>Fastly</strong> — programmable VCL/WASM at the edge',
          '<strong>AWS CloudFront</strong>',
          '<strong>Netflix Open Connect</strong> — boxes physically deployed inside ISPs'
        ] }
      ]
    },

    /* ============ Chapter 14 — TCP ============ */
    {
      id: 'facts-c14',
      title: 'TCP — reliable bytes over a broken network',
      icon: '🤝',
      sections: [
        { type: 'heading', text: 'How does TCP pretend the internet is reliable?', level: 1 },
        { type: 'para', html: 'The internet drops packets. Reorders them. Duplicates them. Yet a file you download arrives byte-for-byte, in order, complete. Two ideas built on top of unreliable IP give TCP this magic: the <strong>three-way handshake</strong> and the <strong>sliding window</strong>.' },

        { type: 'heading', text: 'The three-way handshake', level: 2 },
        { type: 'image', alt: 'TCP three-way handshake',
          svg: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:13px;fill:#334155}.cli{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.srv{fill:#fee2e2;stroke:#dc2626;stroke-width:2}.arr{fill:none;stroke:#0ea5e9;stroke-width:2;marker-end:url(#tc)}.pkt{font-family:'JetBrains Mono',monospace;font-size:12px;fill:#0f172a;text-anchor:middle}</style>
<marker id="tc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/></marker></defs>
<text x="380" y="28" class="t tt">3-way handshake — both sides exchange ISNs (initial sequence numbers)</text>
<rect x="80" y="50" width="100" height="40" rx="6" class="cli"/>
<text x="130" y="76" class="t lbl" text-anchor="middle">Client</text>
<rect x="580" y="50" width="100" height="40" rx="6" class="srv"/>
<text x="630" y="76" class="t lbl" text-anchor="middle">Server</text>
<line x1="130" y1="90" x2="130" y2="240" stroke="#94a3b8" stroke-dasharray="3,3"/>
<line x1="630" y1="90" x2="630" y2="240" stroke="#94a3b8" stroke-dasharray="3,3"/>
<path d="M130,115 L630,115" class="arr"/>
<text x="380" y="108" class="t pkt">SYN, seq=x</text>
<path d="M630,155 L130,155" class="arr"/>
<text x="380" y="148" class="t pkt">SYN-ACK, seq=y, ack=x+1</text>
<path d="M130,195 L630,195" class="arr"/>
<text x="380" y="188" class="t pkt">ACK, ack=y+1</text>
<text x="380" y="225" class="t lbl" text-anchor="middle">Connection established. Both sides know each other\'s starting sequence number.</text>
</svg>` },

        { type: 'para', html: 'The three packets agree on <em>initial sequence numbers</em> in both directions. Every byte from then on has a sequence number; every ACK references one. That\'s how lost packets get retransmitted and out-of-order packets get reassembled.' },

        { type: 'heading', text: 'The sliding window', level: 2 },
        { type: 'para', html: 'TCP doesn\'t send one packet, wait for ACK, send the next. That would waste 99% of your bandwidth on every long-haul connection. Instead the sender keeps a <strong>window</strong> of bytes "in flight" — sent but not yet ACKed. The receiver advertises how much buffer it has so the sender knows when to slow down.' },

        { type: 'image', alt: 'TCP sliding window',
          svg: `<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:12px;fill:#334155;text-anchor:middle}.acked{fill:#dcfce7;stroke:#16a34a}.flight{fill:#fde68a;stroke:#b45309}.win{fill:#dbeafe;stroke:#1d4ed8}.fut{fill:#f1f5f9;stroke:#64748b}.byte{font-family:'JetBrains Mono',monospace;font-size:13px;text-anchor:middle;fill:#0f172a}</style></defs>
<text x="380" y="28" class="t tt">Sender\'s view of the byte stream</text>
<rect x="40"   y="80" width="180" height="50" class="acked"/>
<rect x="220"  y="80" width="160" height="50" class="flight"/>
<rect x="380"  y="80" width="160" height="50" class="win"/>
<rect x="540"  y="80" width="180" height="50" class="fut"/>
<text x="130"  y="110" class="t byte">ACKed</text>
<text x="300"  y="110" class="t byte">in-flight</text>
<text x="460"  y="110" class="t byte">window</text>
<text x="630"  y="110" class="t byte">future</text>
<text x="130"  y="155" class="t lbl">bytes 1..6 confirmed</text>
<text x="300"  y="155" class="t lbl">7..10 sent, awaiting ACK</text>
<text x="460"  y="155" class="t lbl">11..14 available to send</text>
<text x="630"  y="155" class="t lbl">not yet allowed</text>
<text x="380"  y="200" class="t lbl">As ACKs arrive, the window slides right.</text>
</svg>` },

        { type: 'heading', text: 'Loss recovery & congestion control', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Retransmission timer</strong> — if no ACK in time, resend',
          '<strong>Fast retransmit</strong> — 3 duplicate ACKs = packet lost, resend immediately',
          '<strong>Slow start</strong> — start cautious, double window per RTT until loss',
          '<strong>Congestion avoidance</strong> — additive increase, multiplicative decrease ("AIMD")',
          '<strong>Modern algorithms</strong> — Cubic (Linux default), BBR (Google\'s newer model-based approach)'
        ] },

        { type: 'callout', kind: 'info', html: 'TCP is genuinely 50 years old and still carries most of the internet. QUIC (the basis of HTTP/3) replaces it for the latency-sensitive case — running on UDP, with a faster handshake and built-in encryption.' },

        { type: 'code', lang: 'bash', code: `<span class="com"># Watch a handshake live</span>
sudo tcpdump -i any -nn 'tcp port 443 and (tcp[tcpflags] & tcp-syn != 0)'

<span class="com"># Inspect current TCP connections and their windows</span>
ss -tin

<span class="com"># Linux congestion control algorithm</span>
sysctl net.ipv4.tcp_congestion_control` }
      ]
    },

    /* ============ Chapter 15 — CAP ============ */
    {
      id: 'facts-c15',
      title: 'CAP theorem — pick two',
      icon: '🔺',
      sections: [
        { type: 'heading', text: 'Why can\'t a distributed database have everything?', level: 1 },
        { type: 'para', html: 'You want a database that\'s strongly consistent, always available, and survives network partitions. Eric Brewer (2000) conjectured — and Gilbert & Lynch (2002) proved — that you can\'t have all three at once. You must pick two.' },

        { type: 'heading', text: 'The triangle', level: 2 },
        { type: 'image', alt: 'CAP triangle',
          svg: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.tri{fill:#fef3c7;stroke:#b45309;stroke-width:2}.v{font-family:Inter,sans-serif;font-weight:700;font-size:20px;text-anchor:middle;fill:#0f172a}.d{font-family:Inter,sans-serif;font-size:12px;text-anchor:middle;fill:#334155}.lbl{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle;font-style:italic}</style></defs>
<text x="350" y="28" class="t tt">During a partition, you can guarantee at most two of:</text>
<polygon points="350,60 90,310 610,310" class="tri"/>
<text x="350" y="55" class="v">C</text>
<text x="350" y="78" class="d">Consistency</text>
<text x="80"  y="335" class="v">A</text>
<text x="80"  y="352" class="d">Availability</text>
<text x="620" y="335" class="v">P</text>
<text x="620" y="352" class="d">Partition tolerance</text>
<text x="220" y="200" class="lbl">CA — single-node</text>
<text x="220" y="218" class="lbl">(no partition possible)</text>
<text x="350" y="270" class="lbl">CP — Spanner, HBase, MongoDB</text>
<text x="480" y="200" class="lbl">AP — Cassandra, DynamoDB</text>
</svg>` },

        { type: 'list', kind: 'bullet', items: [
          '<strong>C</strong> — every read returns the latest write (or an error)',
          '<strong>A</strong> — every request receives a non-error response',
          '<strong>P</strong> — the system keeps working despite arbitrary message loss'
        ] },

        { type: 'callout', kind: 'warn', html: 'Partitions are not optional in distributed systems — networks fail, switches reboot, links flap. So in practice the trade-off is binary during a partition: <strong>CP</strong> (refuse writes, stay consistent) or <strong>AP</strong> (accept writes, allow stale reads).' },

        { type: 'heading', text: 'How real databases choose', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Cassandra, DynamoDB, Riak</strong> — AP. Available even when partitioned; eventual consistency.',
          '<strong>MongoDB, HBase, Redis Cluster</strong> — CP. Refuse writes when the primary loses quorum.',
          '<strong>Google Spanner</strong> — CP, but rare loss of availability thanks to GPS+atomic-clock-coordinated commits.',
          '<strong>ZooKeeper, etcd, Consul</strong> — CP. Used as coordination services <em>because</em> consistency is non-negotiable.'
        ] },

        { type: 'heading', text: 'The deeper truth: PACELC', level: 2 },
        { type: 'para', html: 'Daniel Abadi proposed an extension: <strong>PACELC</strong>. "If there is a Partition, choose between A and C. <em>Else</em>, choose between Latency and Consistency."' },

        { type: 'code', lang: 'txt', code: `<span class="com"># PACELC classifications of common databases</span>
Cassandra   →  PA / EL   (Available during partitions; low Latency otherwise)
DynamoDB    →  PA / EL
MongoDB     →  PC / EC   (Consistent everywhere)
Spanner     →  PC / EC
HBase       →  PC / EC
Riak        →  PA / EL` },

        { type: 'callout', kind: 'tip', html: 'PACELC is more honest than CAP — even with no partition, most distributed databases trade consistency for latency. CAP gets headlines; PACELC gets the engineering right.' },

        { type: 'heading', text: 'Practical advice', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Most user-facing apps tolerate eventual consistency surprisingly well (cart, profile pic)',
          'Money, locks, leader election → use a CP system',
          'Read-heavy global apps → AP with replication often wins',
          'Modern systems offer per-request consistency knobs — use them'
        ] }
      ]
    },

    /* ============ Chapter 16 — Reed–Solomon ============ */
    {
      id: 'facts-c16',
      title: 'Erasure coding — data that heals itself',
      icon: '💿',
      sections: [
        { type: 'heading', text: 'How does a scratched CD still play?', level: 1 },
        { type: 'para', html: 'A coin-sized scratch on a CD obscures thousands of bits. Yet the music plays without a glitch. The same trick lets cloud storage survive multiple disk failures without losing a byte. Meet <strong>Reed–Solomon erasure coding</strong>, invented in 1960 by Irving Reed and Gustave Solomon.' },

        { type: 'heading', text: 'The idea: extra blocks that mean "anything"', level: 2 },
        { type: 'para', html: 'Take your data and split it into <em>k</em> blocks. Now compute <em>m</em> additional <em>parity</em> blocks — clever combinations of the original ones. Store all <em>k + m</em> blocks. Lose up to <em>m</em> of them? You can reconstruct the originals exactly.' },

        { type: 'image', alt: 'Erasure coding',
          svg: `<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif}.tt{font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-size:12px;text-anchor:middle;fill:#334155}.d{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.p{fill:#fef3c7;stroke:#b45309;stroke-width:2}.x{fill:#fee2e2;stroke:#dc2626;stroke-width:2}.bt{font-family:Inter,sans-serif;font-weight:700;font-size:14px;text-anchor:middle;fill:#0f172a}</style></defs>
<text x="380" y="26" class="t tt">(10, 4) scheme: 10 data + 4 parity. Survive any 4 losses.</text>
<g transform="translate(60, 80)">
  <rect x="0"   y="0" width="50" height="60" class="d"/><text x="25"  y="36" class="bt">D1</text>
  <rect x="55"  y="0" width="50" height="60" class="d"/><text x="80"  y="36" class="bt">D2</text>
  <rect x="110" y="0" width="50" height="60" class="d"/><text x="135" y="36" class="bt">D3</text>
  <rect x="165" y="0" width="50" height="60" class="x"/><text x="190" y="36" class="bt">D4</text>
  <rect x="220" y="0" width="50" height="60" class="d"/><text x="245" y="36" class="bt">D5</text>
  <rect x="275" y="0" width="50" height="60" class="x"/><text x="300" y="36" class="bt">D6</text>
  <rect x="330" y="0" width="50" height="60" class="d"/><text x="355" y="36" class="bt">D7</text>
  <rect x="385" y="0" width="50" height="60" class="d"/><text x="410" y="36" class="bt">D8</text>
  <rect x="440" y="0" width="50" height="60" class="d"/><text x="465" y="36" class="bt">D9</text>
  <rect x="495" y="0" width="50" height="60" class="d"/><text x="520" y="36" class="bt">D10</text>
  <rect x="555" y="0" width="50" height="60" class="p"/><text x="580" y="36" class="bt">P1</text>
  <rect x="610" y="0" width="50" height="60" class="x"/><text x="635" y="36" class="bt">P2</text>
</g>
<text x="380" y="170" class="t lbl">Red = lost (disk failed). Up to 4 losses are recoverable.</text>
<text x="380" y="190" class="t lbl">Surviving 10 blocks (data + parity) uniquely reconstruct everything.</text>
<text x="380" y="215" class="t lbl">Cost: 1.4× storage instead of 3× for triple-replication. Same durability.</text>
</svg>` },

        { type: 'heading', text: 'Where the polynomial magic comes in', level: 2 },
        { type: 'para', html: 'Reed and Solomon\'s insight: treat the <em>k</em> data blocks as the coefficients of a polynomial of degree k−1. <em>Any k points</em> on that polynomial uniquely determine it (you remember from algebra: two points determine a line, three a parabola, etc.). So you evaluate the polynomial at <em>n &gt; k</em> distinct x-values and store those values. Any <em>k</em> of them can rebuild the original polynomial. The rest are pure insurance.' },

        { type: 'code', lang: 'txt', code: `<span class="com"># A common configuration: Reed–Solomon (10, 4)</span>
data blocks   : 10
parity blocks : 4
total stored  : 14
can lose      : up to 4
storage cost  : 14/10 = 1.4× the raw size
durability    : equivalent to ≈ 3-way replication

<span class="com"># Compare: 3-way replication</span>
total stored  : 3
can lose      : up to 2
storage cost  : 3×` },

        { type: 'heading', text: 'Where you\'ve already used it', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Audio CDs and DVDs</strong> — Cross-Interleaved Reed–Solomon Code (CIRC)',
          '<strong>QR codes</strong> — that\'s why you can scan a torn or printed-over QR code',
          '<strong>Voyager probes</strong> — photos from 15+ billion km away, through cosmic noise',
          '<strong>AWS S3</strong> — distributes erasure-coded fragments across many disks per object',
          '<strong>Azure Storage</strong> — Local Reconstruction Codes (LRC), an RS variant',
          '<strong>Facebook cold storage</strong> — uses RS to keep your photos durable on cheap hardware',
          '<strong>Backblaze, Ceph, MinIO</strong> — common open-source erasure-coded object stores'
        ] },

        { type: 'callout', kind: 'tip', html: 'Erasure coding is cheaper to store but more expensive to read: reconstructing a missing block requires reading <em>k</em> others and decoding. Hot objects often still use replication; cold archives almost always use RS.' },

        { type: 'callout', kind: 'info', html: 'The next time your phone scans a creased QR code under bad lighting, give a small nod to two mathematicians who in 1960 didn\'t know they were rescuing your weekend grocery checkout.' }
      ]
    }

  ]
});

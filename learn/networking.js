LEARN('networking', {
  intro: 'A layer-by-layer tour of how the Internet actually works — from electrical signals on copper to HTTP/3 over QUIC. Every concept grounded in a concrete example.',
  chapters: [

    /* ============ Chapter 1 — What is a network ============ */
    {
      id: 'net-c1',
      title: 'What is a network?',
      icon: '🌐',
      sections: [
        { type: 'heading', text: 'Networks are devices that talk to each other', level: 1 },
        { type: 'para', html: 'A <strong>computer network</strong> is two or more devices (we call them <em>hosts</em> or <em>nodes</em>) connected so they can exchange data. That data can be a web page, a video stream, a chat message — anything we encode as bits.' },
        { type: 'para', html: 'Networks come in every size, from a Bluetooth headset paired with your phone to the global Internet linking billions of devices. We mostly classify them by <strong>geographic scale</strong>.' },

        { type: 'heading', text: 'Scale: PAN, LAN, MAN, WAN', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>PAN</strong> — Personal Area Network. ~10 metres. Bluetooth, USB tethering.',
          '<strong>LAN</strong> — Local Area Network. A building or campus. Your home WiFi.',
          '<strong>MAN</strong> — Metropolitan Area Network. A city. Often used by universities and large enterprises.',
          '<strong>WAN</strong> — Wide Area Network. Multi-city, multi-country. The Internet is the canonical WAN.'
        ] },
        { type: 'callout', kind: 'info', html: 'The Internet is best thought of as a "network of networks" — a global mesh of independently-run WANs that have agreed on a common set of protocols (TCP/IP). No one owns it; everyone owns a piece.' },

        { type: 'heading', text: 'Topologies — the shape of the wiring', level: 2 },
        { type: 'image', alt: 'Network topologies',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.n{fill:#bae6fd;stroke:#0277bd;stroke-width:2}.c{fill:#fde68a;stroke:#b45309;stroke-width:2}.l{stroke:#475569;stroke-width:1.5;fill:none}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.s{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style>
</defs>
<text x="100" y="25" class="t">Bus</text>
<line x1="20" y1="80" x2="180" y2="80" class="l" stroke-width="3"/>
<circle cx="40" cy="80" r="10" class="n"/>
<circle cx="80" cy="80" r="10" class="n"/>
<circle cx="120" cy="80" r="10" class="n"/>
<circle cx="160" cy="80" r="10" class="n"/>
<text x="100" y="120" class="s">one shared cable</text>

<text x="300" y="25" class="t">Star</text>
<circle cx="300" cy="90" r="14" class="c"/>
<circle cx="240" cy="50" r="10" class="n"/>
<circle cx="360" cy="50" r="10" class="n"/>
<circle cx="240" cy="130" r="10" class="n"/>
<circle cx="360" cy="130" r="10" class="n"/>
<line x1="300" y1="90" x2="240" y2="50" class="l"/>
<line x1="300" y1="90" x2="360" y2="50" class="l"/>
<line x1="300" y1="90" x2="240" y2="130" class="l"/>
<line x1="300" y1="90" x2="360" y2="130" class="l"/>
<text x="300" y="170" class="s">hub / switch in center</text>

<text x="500" y="25" class="t">Ring</text>
<circle cx="500" cy="90" r="10" class="n"/>
<circle cx="560" cy="60" r="10" class="n"/>
<circle cx="560" cy="120" r="10" class="n"/>
<circle cx="440" cy="60" r="10" class="n"/>
<circle cx="440" cy="120" r="10" class="n"/>
<line x1="500" y1="90" x2="560" y2="60" class="l"/>
<line x1="560" y1="60" x2="560" y2="120" class="l"/>
<line x1="560" y1="120" x2="500" y2="90" class="l" stroke-dasharray="3,3"/>
<line x1="500" y1="90" x2="440" y2="60" class="l"/>
<line x1="440" y1="60" x2="440" y2="120" class="l"/>
<line x1="440" y1="120" x2="500" y2="90" class="l" stroke-dasharray="3,3"/>
<text x="500" y="170" class="s">closed loop</text>

<text x="700" y="25" class="t">Mesh</text>
<circle cx="650" cy="60" r="10" class="n"/>
<circle cx="750" cy="60" r="10" class="n"/>
<circle cx="650" cy="130" r="10" class="n"/>
<circle cx="750" cy="130" r="10" class="n"/>
<line x1="650" y1="60" x2="750" y2="60" class="l"/>
<line x1="650" y1="130" x2="750" y2="130" class="l"/>
<line x1="650" y1="60" x2="650" y2="130" class="l"/>
<line x1="750" y1="60" x2="750" y2="130" class="l"/>
<line x1="650" y1="60" x2="750" y2="130" class="l"/>
<line x1="750" y1="60" x2="650" y2="130" class="l"/>
<text x="700" y="170" class="s">many redundant paths</text>

<text x="400" y="240" class="s">Modern home / office LANs are almost always star — central switch, each device wired separately.</text>
</svg>` },
        { type: 'list', kind: 'check', items: [
          '<strong>Bus</strong> — one shared cable. Cheap, but a single break kills the segment.',
          '<strong>Star</strong> — every device wired to a central hub/switch. Dominant for modern LANs.',
          '<strong>Ring</strong> — each node connects to the next; a token passes around. Largely legacy (token ring, FDDI).',
          '<strong>Mesh</strong> — every node connects to many others. Best fault tolerance; wasteful at small scales.',
          '<strong>Tree</strong> — a hierarchy of switches. Common in campus networks.'
        ] },
        { type: 'callout', kind: 'tip', html: 'Real networks blend topologies. A datacenter spine-and-leaf is a tree at the wiring level and a partial mesh at the routing level.' }
      ]
    },

    /* ============ Chapter 2 — OSI model ============ */
    {
      id: 'net-c2',
      title: 'The OSI 7-layer model',
      icon: '🥞',
      sections: [
        { type: 'heading', text: 'A teaching model for the stack', level: 1 },
        { type: 'para', html: 'The <strong>OSI</strong> (Open Systems Interconnection) model breaks networking into <strong>seven layers</strong>. Each layer talks only to the layer above and the layer below, with a clean contract between them. Lower layers are about getting bits across a wire; higher layers are about meaning.' },

        { type: 'image', alt: 'OSI seven-layer stack',
          svg: `<svg viewBox="0 0 720 470" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.lay{stroke:#0f172a;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a}.s{font-family:Inter,sans-serif;font-size:12px;fill:#1e293b}.n{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#fff;text-anchor:middle}</style>
</defs>
<rect x="40" y="20"  width="640" height="50" rx="6" class="lay" fill="#dc2626"/>
<text x="80" y="50" class="n">L7 · Application</text>
<text x="380" y="50" class="s" fill="#fff">HTTP · DNS · SMTP · SSH · FTP</text>

<rect x="40" y="80" width="640" height="50" rx="6" class="lay" fill="#ea580c"/>
<text x="80" y="110" class="n">L6 · Presentation</text>
<text x="380" y="110" class="s" fill="#fff">Encoding · Encryption (TLS) · Compression</text>

<rect x="40" y="140" width="640" height="50" rx="6" class="lay" fill="#ca8a04"/>
<text x="80" y="170" class="n">L5 · Session</text>
<text x="380" y="170" class="s" fill="#fff">Sessions / dialogs · NetBIOS · RPC</text>

<rect x="40" y="200" width="640" height="50" rx="6" class="lay" fill="#16a34a"/>
<text x="80" y="230" class="n">L4 · Transport</text>
<text x="380" y="230" class="s" fill="#fff">TCP · UDP · ports · segments</text>

<rect x="40" y="260" width="640" height="50" rx="6" class="lay" fill="#0ea5e9"/>
<text x="80" y="290" class="n">L3 · Network</text>
<text x="380" y="290" class="s" fill="#fff">IP · ICMP · routing · packets</text>

<rect x="40" y="320" width="640" height="50" rx="6" class="lay" fill="#6366f1"/>
<text x="80" y="350" class="n">L2 · Data Link</text>
<text x="380" y="350" class="s" fill="#fff">Ethernet · MAC · switches · frames</text>

<rect x="40" y="380" width="640" height="50" rx="6" class="lay" fill="#7e22ce"/>
<text x="80" y="410" class="n">L1 · Physical</text>
<text x="380" y="410" class="s" fill="#fff">Cables · radio · voltages · bits</text>

<text x="360" y="455" class="t" text-anchor="middle">Data flows DOWN the sender, ACROSS the wire, UP the receiver</text>
</svg>` },

        { type: 'heading', text: 'What each layer does, in one line', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>L1 Physical</strong> — turn bits into voltage / light / radio.',
          '<strong>L2 Data Link</strong> — frame bits between adjacent devices on a link. MAC addresses live here.',
          '<strong>L3 Network</strong> — route packets across networks. IP addresses, routers.',
          '<strong>L4 Transport</strong> — end-to-end reliability + ports. TCP and UDP.',
          '<strong>L5 Session</strong> — manage long-lived dialogs (auth, checkpoints).',
          '<strong>L6 Presentation</strong> — translate data formats / encrypt (TLS).',
          '<strong>L7 Application</strong> — protocols users interact with: HTTP, DNS, SMTP.'
        ] },
        { type: 'callout', kind: 'tip', html: 'Mnemonic, bottom to top: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.' },

        { type: 'heading', text: 'Encapsulation: each layer adds a header', level: 2 },
        { type: 'code', lang: 'text', code: `App data: "GET /home HTTP/1.1\\r\\nHost: x.com\\r\\n\\r\\n"

  ↓ adds TCP header (ports, seq, ack)
  [TCP hdr | App data]                       = TCP segment

  ↓ adds IP header (src/dst IP)
  [IP hdr | TCP hdr | App data]              = IP packet

  ↓ adds Ethernet header (src/dst MAC)
  [Eth hdr | IP hdr | TCP hdr | App data | CRC] = Ethernet frame

  ↓ bits on the wire` },
        { type: 'para', html: 'On the receiving side this is reversed: each layer strips its header and hands the inner data up to the next layer.' }
      ]
    },

    /* ============ Chapter 3 — TCP/IP model ============ */
    {
      id: 'net-c3',
      title: 'The TCP/IP model',
      icon: '🔁',
      sections: [
        { type: 'heading', text: 'The 4-layer model the Internet actually runs', level: 1 },
        { type: 'para', html: 'OSI is a tidy teaching map. <strong>TCP/IP</strong> is what real computers implement — a simpler 4-layer model that grew up alongside the Internet itself.' },

        { type: 'image', alt: 'OSI vs TCP/IP mapping',
          svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.s{font-family:Inter,sans-serif;font-size:12px;fill:#475569;text-anchor:middle}</style></defs>

<text x="180" y="25" class="t">OSI (7)</text>
<text x="540" y="25" class="t">TCP/IP (4)</text>

<rect x="80" y="40"  width="200" height="40" fill="#fecaca" stroke="#dc2626"/>
<text x="180" y="65" class="t">7 Application</text>
<rect x="80" y="85"  width="200" height="40" fill="#fed7aa" stroke="#ea580c"/>
<text x="180" y="110" class="t">6 Presentation</text>
<rect x="80" y="130" width="200" height="40" fill="#fde68a" stroke="#ca8a04"/>
<text x="180" y="155" class="t">5 Session</text>

<rect x="440" y="40" width="200" height="130" fill="#fef3c7" stroke="#92400e"/>
<text x="540" y="105" class="t">Application</text>
<text x="540" y="125" class="s">HTTP · DNS · SMTP</text>

<line x1="280" y1="60"  x2="440" y2="80"  stroke="#94a3b8" stroke-dasharray="3,3"/>
<line x1="280" y1="105" x2="440" y2="105" stroke="#94a3b8" stroke-dasharray="3,3"/>
<line x1="280" y1="150" x2="440" y2="130" stroke="#94a3b8" stroke-dasharray="3,3"/>

<rect x="80" y="175" width="200" height="40" fill="#bbf7d0" stroke="#16a34a"/>
<text x="180" y="200" class="t">4 Transport</text>
<rect x="440" y="175" width="200" height="40" fill="#bbf7d0" stroke="#16a34a"/>
<text x="540" y="200" class="t">Transport (TCP/UDP)</text>
<line x1="280" y1="195" x2="440" y2="195" stroke="#94a3b8" stroke-dasharray="3,3"/>

<rect x="80" y="220" width="200" height="40" fill="#bae6fd" stroke="#0ea5e9"/>
<text x="180" y="245" class="t">3 Network</text>
<rect x="440" y="220" width="200" height="40" fill="#bae6fd" stroke="#0ea5e9"/>
<text x="540" y="245" class="t">Internet (IP)</text>
<line x1="280" y1="240" x2="440" y2="240" stroke="#94a3b8" stroke-dasharray="3,3"/>

<rect x="80" y="265" width="200" height="40" fill="#c7d2fe" stroke="#6366f1"/>
<text x="180" y="290" class="t">2 Data Link</text>
<rect x="80" y="310" width="200" height="40" fill="#e9d5ff" stroke="#7e22ce"/>
<text x="180" y="335" class="t">1 Physical</text>

<rect x="440" y="265" width="200" height="85" fill="#e9d5ff" stroke="#7e22ce"/>
<text x="540" y="305" class="t">Network access</text>
<text x="540" y="325" class="s">Ethernet · WiFi · cables</text>
<line x1="280" y1="285" x2="440" y2="290" stroke="#94a3b8" stroke-dasharray="3,3"/>
<line x1="280" y1="330" x2="440" y2="320" stroke="#94a3b8" stroke-dasharray="3,3"/>
</svg>` },

        { type: 'heading', text: 'When in doubt, think TCP/IP', level: 2 },
        { type: 'para', html: 'Most engineering conversations use OSI layer numbers as a kind of slang ("a Layer 4 load balancer", "this is an L2 issue"), but the actual implementation is TCP/IP. The numbers line up neatly for the lower four layers, so the slang works.' },
        { type: 'callout', kind: 'info', html: '"Layer 4 vs Layer 7 load balancer" — Layer 4 means routing by TCP/UDP port (transport); Layer 7 means routing by HTTP path or headers (application).' }
      ]
    },

    /* ============ Chapter 4 — Physical & Data Link ============ */
    {
      id: 'net-c4',
      title: 'Physical & data-link layers',
      icon: '🔌',
      sections: [
        { type: 'heading', text: 'From voltage to frames', level: 1 },
        { type: 'para', html: 'The lowest two layers are where networking meets physics. <strong>Layer 1 (Physical)</strong> defines how bits become electrical, optical, or radio signals — Cat 6 copper, fiber, WiFi, cellular. <strong>Layer 2 (Data Link)</strong> bundles those bits into <strong>frames</strong> and uses <strong>MAC addresses</strong> to deliver frames on a single LAN segment.' },

        { type: 'heading', text: 'Ethernet frame anatomy', level: 2 },
        { type: 'code', lang: 'text', code: `+----------+-----------+----------+------+-------------------+------+
| Preamble | Dest MAC  | Src MAC  | Type | Payload (46-1500) | CRC  |
|   7 B    |    6 B    |   6 B    |  2 B |       bytes       | 4 B  |
+----------+-----------+----------+------+-------------------+------+
                                          (an IP packet usually)` },

        { type: 'heading', text: 'MAC addresses', level: 2 },
        { type: 'para', html: 'A <strong>MAC</strong> (Media Access Control) address is a 48-bit identifier burned into each network interface card at the factory. It is written as six hex bytes, separated by colons or hyphens:' },
        { type: 'code', lang: 'text', code: `00:1A:2B:3C:4D:5E
└──── OUI ────┘└── NIC unique ──┘
  vendor ID       per-device part` },
        { type: 'callout', kind: 'info', html: 'The first three bytes are the <strong>OUI</strong> (Organizationally Unique Identifier) assigned by IEEE — Apple is 00:1B:63, Dell 00:14:22, etc. Tools like <code>arp -a</code> or <a href="https://maclookup.app">maclookup</a> can identify the vendor from the OUI.' },

        { type: 'heading', text: 'Hubs vs switches', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Hub</strong> (legacy) — repeats every frame to every port. Wasteful; one talker blocks all.',
          '<strong>Switch</strong> — learns which MAC is on which port; forwards only where needed. Modern LANs use switches.'
        ] },
        { type: 'code', lang: 'text', code: `Switch MAC table (after observing traffic):
  Port 1  → 00:1A:2B:3C:4D:5E   (Alice's laptop)
  Port 2  → AA:BB:CC:DD:EE:FF   (Bob's printer)
  Port 3  → 5C:E8:EB:11:22:33   (gateway router)

When a frame arrives for AA:BB:..., the switch sends it ONLY to port 2.` }
      ]
    },

    /* ============ Chapter 5 — IPv4 ============ */
    {
      id: 'net-c5',
      title: 'IPv4 addressing & subnetting',
      icon: '🔢',
      sections: [
        { type: 'heading', text: '32-bit addresses for ~4 billion hosts', level: 1 },
        { type: 'para', html: 'An <strong>IPv4 address</strong> is 32 bits, written as four decimal octets separated by dots — <code>192.168.1.42</code>. Each octet ranges 0–255 (the values an 8-bit number can hold).' },
        { type: 'code', lang: 'text', code: `192 . 168 . 1 . 42
↓     ↓     ↓    ↓
11000000.10101000.00000001.00101010   (32 bits total)

Total possible addresses: 2^32  ≈  4.29 billion` },

        { type: 'heading', text: 'IPv4 header (simplified)', level: 2 },
        { type: 'image', alt: 'IPv4 header layout',
          svg: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.f{stroke:#0f172a;stroke-width:1}.lab{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.title{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#0f172a;text-anchor:middle}.bit{font-family:monospace;font-size:10px;fill:#475569;text-anchor:middle}</style></defs>

<text x="380" y="20" class="title">IPv4 header — 20 bytes (160 bits) minimum</text>
<text x="100" y="40" class="bit">0</text>
<text x="220" y="40" class="bit">8</text>
<text x="380" y="40" class="bit">16</text>
<text x="540" y="40" class="bit">24</text>
<text x="660" y="40" class="bit">31</text>

<rect x="40" y="50" width="80"  height="40" fill="#fee2e2" class="f"/><text x="80" y="75" class="lab">Ver (4b)</text>
<rect x="120" y="50" width="80" height="40" fill="#fed7aa" class="f"/><text x="160" y="75" class="lab">IHL (4b)</text>
<rect x="200" y="50" width="160" height="40" fill="#fde68a" class="f"/><text x="280" y="75" class="lab">ToS (8b)</text>
<rect x="360" y="50" width="320" height="40" fill="#bbf7d0" class="f"/><text x="520" y="75" class="lab">Total Length (16b)</text>

<rect x="40"  y="90" width="320" height="40" fill="#bae6fd" class="f"/><text x="200" y="115" class="lab">Identification (16b)</text>
<rect x="360" y="90" width="60"  height="40" fill="#c7d2fe" class="f"/><text x="390" y="115" class="lab">Flags</text>
<rect x="420" y="90" width="260" height="40" fill="#e9d5ff" class="f"/><text x="550" y="115" class="lab">Fragment Offset (13b)</text>

<rect x="40" y="130" width="160" height="40" fill="#fecaca" class="f"/><text x="120" y="155" class="lab">TTL (8b)</text>
<rect x="200" y="130" width="160" height="40" fill="#fed7aa" class="f"/><text x="280" y="155" class="lab">Protocol (8b)</text>
<rect x="360" y="130" width="320" height="40" fill="#fde68a" class="f"/><text x="520" y="155" class="lab">Header Checksum (16b)</text>

<rect x="40" y="170" width="640" height="40" fill="#bbf7d0" class="f"/>
<text x="360" y="195" class="lab">Source IP Address (32b)</text>

<rect x="40" y="210" width="640" height="40" fill="#bae6fd" class="f"/>
<text x="360" y="235" class="lab">Destination IP Address (32b)</text>

<rect x="40" y="250" width="640" height="40" fill="#e9d5ff" class="f" stroke-dasharray="3,3"/>
<text x="360" y="275" class="lab">Options (optional, variable)</text>

<text x="380" y="320" class="bit">Key fields: Version, TTL (hop limit), Protocol (6=TCP, 17=UDP, 1=ICMP),</text>
<text x="380" y="338" class="bit">Source &amp; Destination IPs.</text>
</svg>` },

        { type: 'heading', text: 'CIDR notation: prefix length', level: 2 },
        { type: 'para', html: '<strong>CIDR</strong> (Classless Inter-Domain Routing) writes a network as <code>address/prefix</code>. The <strong>prefix</strong> says how many leading bits identify the <em>network</em>; the remaining bits identify <em>hosts</em>.' },
        { type: 'code', lang: 'text', code: `192.168.1.0/24      (prefix = 24, host bits = 32 - 24 = 8)
                    256 total addresses, 254 usable
                    network: 192.168.1.0   broadcast: 192.168.1.255

10.0.0.0/8          (huge — 16,777,216 addresses)
172.16.0.0/12       (1,048,576 addresses)
192.168.0.0/16      (65,536 addresses)
203.0.113.0/26      (64 total, 62 usable hosts)` },

        { type: 'image', alt: 'Subnet bit mask',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b1{fill:#22c55e}.b0{fill:#cbd5e1}.lbl{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.title{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.t{font-family:monospace;font-size:11px;fill:#0f172a}</style></defs>
<text x="380" y="22" class="title">/24 subnet mask = 255.255.255.0</text>

<g transform="translate(40,40)">
<text x="0" y="60" class="t">255 =</text>
<g transform="translate(60,40)">
<rect x="0"  y="0" width="20" height="20" class="b1"/>
<rect x="22" y="0" width="20" height="20" class="b1"/>
<rect x="44" y="0" width="20" height="20" class="b1"/>
<rect x="66" y="0" width="20" height="20" class="b1"/>
<rect x="88" y="0" width="20" height="20" class="b1"/>
<rect x="110" y="0" width="20" height="20" class="b1"/>
<rect x="132" y="0" width="20" height="20" class="b1"/>
<rect x="154" y="0" width="20" height="20" class="b1"/>
</g>
</g>
<g transform="translate(220,40)">
<text x="0" y="60" class="t">255 =</text>
<g transform="translate(60,40)">
<rect x="0"  y="0" width="20" height="20" class="b1"/>
<rect x="22" y="0" width="20" height="20" class="b1"/>
<rect x="44" y="0" width="20" height="20" class="b1"/>
<rect x="66" y="0" width="20" height="20" class="b1"/>
<rect x="88" y="0" width="20" height="20" class="b1"/>
<rect x="110" y="0" width="20" height="20" class="b1"/>
<rect x="132" y="0" width="20" height="20" class="b1"/>
<rect x="154" y="0" width="20" height="20" class="b1"/>
</g>
</g>
<g transform="translate(400,40)">
<text x="0" y="60" class="t">255 =</text>
<g transform="translate(60,40)">
<rect x="0"  y="0" width="20" height="20" class="b1"/>
<rect x="22" y="0" width="20" height="20" class="b1"/>
<rect x="44" y="0" width="20" height="20" class="b1"/>
<rect x="66" y="0" width="20" height="20" class="b1"/>
<rect x="88" y="0" width="20" height="20" class="b1"/>
<rect x="110" y="0" width="20" height="20" class="b1"/>
<rect x="132" y="0" width="20" height="20" class="b1"/>
<rect x="154" y="0" width="20" height="20" class="b1"/>
</g>
</g>
<g transform="translate(580,40)">
<text x="0" y="60" class="t">  0 =</text>
<g transform="translate(60,40)">
<rect x="0"  y="0" width="20" height="20" class="b0"/>
<rect x="22" y="0" width="20" height="20" class="b0"/>
<rect x="44" y="0" width="20" height="20" class="b0"/>
<rect x="66" y="0" width="20" height="20" class="b0"/>
<rect x="88" y="0" width="20" height="20" class="b0"/>
<rect x="110" y="0" width="20" height="20" class="b0"/>
<rect x="132" y="0" width="20" height="20" class="b0"/>
<rect x="154" y="0" width="20" height="20" class="b0"/>
</g>
</g>
<text x="380" y="130" class="lbl">24 green bits (network) + 8 grey bits (host)</text>
<text x="380" y="155" class="lbl">2^8 = 256 host addresses → minus network + broadcast → 254 usable.</text>
<text x="380" y="190" class="lbl">A /26 would mean 26 green bits + 6 grey bits → 2^6 - 2 = 62 hosts.</text>
</svg>` },

        { type: 'heading', text: 'Subnetting quick math', level: 2 },
        { type: 'code', lang: 'text', code: `prefix  total addrs  usable hosts
/24       256          254
/25       128          126
/26        64           62
/27        32           30
/28        16           14
/29         8            6
/30         4            2   (point-to-point link)
/31         2            2   (RFC 3021, special)
/32         1            1   (single host)` },

        { type: 'heading', text: 'Private IPv4 ranges', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>10.0.0.0/8</code> — 16.7M addresses. Most enterprise LANs.',
          '<code>172.16.0.0/12</code> — 1M addresses. Less common.',
          '<code>192.168.0.0/16</code> — 65K addresses. Default for almost every home router.',
          '<code>127.0.0.0/8</code> — loopback (your own machine).',
          '<code>169.254.0.0/16</code> — link-local (when DHCP fails).'
        ] },
        { type: 'callout', kind: 'tip', html: 'Private IPs never appear on the public Internet — they get NAT-translated to a public IP at your router. Two homes can both use <code>192.168.1.0/24</code> with no conflict.' }
      ]
    },

    /* ============ Chapter 6 — IPv6 ============ */
    {
      id: 'net-c6',
      title: 'IPv6 — bigger addresses',
      icon: '6️⃣',
      sections: [
        { type: 'heading', text: 'Why IPv6?', level: 1 },
        { type: 'para', html: 'IPv4 has ~4.3 billion addresses. By 2011 IANA had handed out the last unallocated /8. <strong>IPv6</strong> solves the shortage with <strong>128-bit</strong> addresses — about 3.4 × 10<sup>38</sup>, or 7.9 × 10<sup>28</sup> for every person on Earth.' },

        { type: 'heading', text: 'Address format', level: 2 },
        { type: 'code', lang: 'text', code: `Full form:      2001:0db8:85a3:0000:0000:8a2e:0370:7334
                ↑   eight groups of 4 hex digits, colon-separated

Drop leading zeros within a group:
                2001:db8:85a3:0:0:8a2e:370:7334

Compress one run of zeros with ::
                2001:db8:85a3::8a2e:370:7334

Loopback:       ::1            (like 127.0.0.1)
Default route:  ::/0
Link-local:     fe80::/10      (auto-configured per link)
Unique local:   fc00::/7       (like 10.0.0.0/8 in v4)` },
        { type: 'callout', kind: 'warn', html: 'You can use <code>::</code> only ONCE per address — otherwise the expansion would be ambiguous (the parser would not know how many zero groups go in each gap).' },

        { type: 'heading', text: 'What changed vs IPv4', level: 2 },
        { type: 'list', kind: 'check', items: [
          'No more <strong>NAT</strong> needed — every device can have a globally unique address.',
          'No <strong>broadcast</strong> — IPv6 uses multicast everywhere broadcast was used.',
          '<strong>ARP</strong> is replaced by <strong>NDP</strong> (Neighbor Discovery Protocol) running over ICMPv6.',
          '<strong>SLAAC</strong> (Stateless Address AutoConfiguration) lets hosts pick their own address from a router-advertised prefix.',
          'Simpler header — no fragmentation in routers, no checksum (the lower layers handle it).'
        ] },

        { type: 'heading', text: 'Transition: dual-stack, tunneling, NAT64', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Dual-stack</strong> — host runs IPv4 + IPv6 simultaneously and picks whichever the peer offers.',
          '<strong>Tunneling</strong> (6in4, Teredo) — wrap v6 packets inside v4 packets to cross v4-only networks.',
          '<strong>NAT64 / DNS64</strong> — let v6-only clients reach v4-only servers via a translation gateway.'
        ] }
      ]
    },

    /* ============ Chapter 7 — ARP ============ */
    {
      id: 'net-c7',
      title: 'ARP — IP to MAC resolution',
      icon: '📮',
      sections: [
        { type: 'heading', text: 'The bridge between L3 and L2', level: 1 },
        { type: 'para', html: 'When your host wants to send a packet to <code>192.168.1.42</code>, the IP layer hands it down with that destination IP. But to put a frame on the wire, the Ethernet layer needs the <strong>MAC address</strong> of <code>192.168.1.42</code>. <strong>ARP</strong> (Address Resolution Protocol) is how it asks.' },

        { type: 'heading', text: 'ARP request/reply', level: 2 },
        { type: 'code', lang: 'text', code: `Step 1. Host A broadcasts an ARP request
   Src MAC:  AA:AA:AA:AA:AA:AA  (Host A)
   Dst MAC:  FF:FF:FF:FF:FF:FF  (broadcast — every host hears it)
   "Who has 192.168.1.42? Tell 192.168.1.10."

Step 2. Host B (owner of .42) replies — UNICAST
   Src MAC:  BB:BB:BB:BB:BB:BB  (Host B)
   Dst MAC:  AA:AA:AA:AA:AA:AA  (back to Host A)
   "192.168.1.42 is at BB:BB:BB:BB:BB:BB"

Step 3. Host A caches the mapping for ~2 minutes (default).
Step 4. All subsequent frames go straight to BB:BB... without re-asking.` },

        { type: 'heading', text: 'Inspecting your ARP cache', level: 2 },
        { type: 'code', lang: 'bash', code: `$ arp -a
? (192.168.1.1) at 5c:e8:eb:11:22:33 on en0 ifscope [ethernet]
? (192.168.1.42) at 00:1a:2b:3c:4d:5e on en0 ifscope [ethernet]

# Force a refresh:
$ arp -d 192.168.1.42        # delete entry
$ ping -c 1 192.168.1.42     # triggers a fresh ARP` },

        { type: 'callout', kind: 'warn', html: '<strong>ARP spoofing</strong> is a classic man-in-the-middle attack: an attacker sends fake ARP replies claiming THEIR MAC owns the gateway IP. Victims send traffic to the attacker, who forwards (and reads) it. Mitigations: dynamic ARP inspection on switches, static ARP entries for critical hosts.' },

        { type: 'heading', text: 'ARP is LAN-only', level: 2 },
        { type: 'para', html: 'ARP requests are broadcasts — they never cross a router. To reach an IP off your LAN, your OS ARPs for your <strong>default gateway\'s</strong> MAC, sends the frame there, and lets the router handle the next hop.' }
      ]
    },

    /* ============ Chapter 8 — ICMP ============ */
    {
      id: 'net-c8',
      title: 'ICMP — ping & traceroute',
      icon: '📡',
      sections: [
        { type: 'heading', text: 'The network\'s diagnostic channel', level: 1 },
        { type: 'para', html: '<strong>ICMP</strong> (Internet Control Message Protocol) is a Layer-3 sibling of IP. It carries <em>control and error messages</em> — never application data. ICMPv4 lives in IP protocol number 1; ICMPv6 in protocol 58.' },

        { type: 'heading', text: 'Common message types', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Echo Request / Echo Reply</strong> — what <code>ping</code> uses.',
          '<strong>Time Exceeded</strong> — sent when TTL hits 0. Powers <code>traceroute</code>.',
          '<strong>Destination Unreachable</strong> — no route to host, port closed, fragmentation needed.',
          '<strong>Redirect</strong> — "you should use a different gateway for this destination".'
        ] },

        { type: 'heading', text: 'Ping in action', level: 2 },
        { type: 'code', lang: 'bash', code: `$ ping -c 4 google.com
PING google.com (142.250.190.78): 56 data bytes
64 bytes from 142.250.190.78: icmp_seq=0 ttl=117 time=12.3 ms
64 bytes from 142.250.190.78: icmp_seq=1 ttl=117 time=11.8 ms
64 bytes from 142.250.190.78: icmp_seq=2 ttl=117 time=13.1 ms
64 bytes from 142.250.190.78: icmp_seq=3 ttl=117 time=12.5 ms

--- google.com ping statistics ---
4 packets transmitted, 4 received, 0.0% packet loss
round-trip min/avg/max/stddev = 11.8/12.4/13.1/0.5 ms` },

        { type: 'heading', text: 'How traceroute works', level: 2 },
        { type: 'image', alt: 'Traceroute hop discovery',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.h{fill:#bae6fd;stroke:#0277bd;stroke-width:2}.you{fill:#bbf7d0;stroke:#16a34a;stroke-width:2}.target{fill:#fed7aa;stroke:#ea580c;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:11px;fill:#0f172a;text-anchor:middle}.tt{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle;font-weight:700}.lbl{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#a)}</style>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="20" y="100" width="80" height="50" rx="6" class="you"/>
<text x="60" y="125" class="tt">You</text>
<text x="60" y="143" class="t">TTL=?</text>

<rect x="160" y="100" width="80" height="50" rx="6" class="h"/>
<text x="200" y="125" class="tt">R1</text>
<rect x="300" y="100" width="80" height="50" rx="6" class="h"/>
<text x="340" y="125" class="tt">R2</text>
<rect x="440" y="100" width="80" height="50" rx="6" class="h"/>
<text x="480" y="125" class="tt">R3</text>
<rect x="580" y="100" width="80" height="50" rx="6" class="h"/>
<text x="620" y="125" class="tt">R4</text>
<rect x="700" y="100" width="80" height="50" rx="6" class="target"/>
<text x="740" y="125" class="tt">target</text>

<line x1="100" y1="125" x2="160" y2="125" class="arr"/>
<line x1="240" y1="125" x2="300" y2="125" class="arr"/>
<line x1="380" y1="125" x2="440" y2="125" class="arr"/>
<line x1="520" y1="125" x2="580" y2="125" class="arr"/>
<line x1="660" y1="125" x2="700" y2="125" class="arr"/>

<text x="200" y="180" class="lbl">TTL=1 → drops → ICMP from R1</text>
<text x="340" y="200" class="lbl">TTL=2 → drops → ICMP from R2</text>
<text x="480" y="220" class="lbl">TTL=3 → drops → ICMP from R3</text>
<text x="620" y="240" class="lbl">TTL=4 → drops → ICMP from R4</text>
<text x="740" y="260" class="lbl">TTL=5 → arrives → target answers</text>

<text x="400" y="40" class="tt">Traceroute: send packets with increasing TTL</text>
<text x="400" y="60" class="lbl">Each router that drops a TTL=0 packet sends back ICMP Time Exceeded, revealing itself.</text>
</svg>` },

        { type: 'code', lang: 'bash', code: `$ traceroute google.com
 1  router.lan (192.168.1.1)         1.2 ms
 2  100.64.0.1                      8.4 ms
 3  10.42.7.5                       9.1 ms
 4  isp-core.example.net           14.0 ms
 5  72.14.219.5                    18.7 ms
 6  google.com (142.250.190.78)    19.2 ms` },
        { type: 'callout', kind: 'info', html: 'A <code>* * *</code> line means a router did not reply — many routers rate-limit or silently drop the ICMP responses. That does not mean traffic is broken, just that the hop is invisible to you.' }
      ]
    },

    /* ============ Chapter 9 — TCP ============ */
    {
      id: 'net-c9',
      title: 'TCP — reliable byte stream',
      icon: '🤝',
      sections: [
        { type: 'heading', text: 'Connection-oriented, ordered, reliable', level: 1 },
        { type: 'para', html: '<strong>TCP</strong> (Transmission Control Protocol) gives applications a reliable, in-order, full-duplex byte stream between two endpoints. Under the hood it handles connection setup, lost packet retransmission, reordering, and flow/congestion control — your application just calls <code>write()</code> and <code>read()</code>.' },

        { type: 'heading', text: 'The 3-way handshake', level: 2 },
        { type: 'image', alt: 'TCP three-way handshake',
          svg: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
<defs><style>.box{fill:#bae6fd;stroke:#0277bd;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.lbl{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a}.arr{stroke:#0f172a;stroke-width:1.5;fill:none;marker-end:url(#aa)}.dim{stroke:#94a3b8;stroke-width:1;stroke-dasharray:3,3}</style>
<marker id="aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f172a"/></marker></defs>

<rect x="50" y="20" width="150" height="50" rx="8" class="box"/>
<text x="125" y="50" class="t">Client</text>
<rect x="500" y="20" width="150" height="50" rx="8" class="box"/>
<text x="575" y="50" class="t">Server</text>

<line x1="125" y1="70" x2="125" y2="300" class="dim"/>
<line x1="575" y1="70" x2="575" y2="300" class="dim"/>

<line x1="125" y1="110" x2="575" y2="130" class="arr"/>
<text x="350" y="108" class="lbl" text-anchor="middle">1. SYN  seq=x</text>

<line x1="575" y1="170" x2="125" y2="190" class="arr"/>
<text x="350" y="168" class="lbl" text-anchor="middle">2. SYN-ACK  seq=y, ack=x+1</text>

<line x1="125" y1="230" x2="575" y2="250" class="arr"/>
<text x="350" y="228" class="lbl" text-anchor="middle">3. ACK  ack=y+1</text>

<text x="350" y="295" class="t">Connection established — data can now flow</text>
</svg>` },
        { type: 'code', lang: 'text', code: `Client                         Server
  | --- SYN (seq=x) ----------→  |
  | ←-- SYN-ACK (seq=y, ack=x+1) |
  | --- ACK (ack=y+1) --------→  |
  | === connection established === |
  | --- data segments --------→  |
  | ←-- data segments + ACKs --- |` },

        { type: 'heading', text: 'Sequence numbers & ACKs', level: 2 },
        { type: 'para', html: 'TCP numbers every <strong>byte</strong> it sends (not every packet). Each ACK names the next byte the receiver expects. Anything not ACKed within a retransmission timeout (RTO) is sent again.' },
        { type: 'code', lang: 'text', code: `Send "Hello" (5 bytes), starting at seq=1000:
  seq=1000  payload="Hello"  → server
  ← ack=1005  (server: "send me byte 1005 next")

Next send "World":
  seq=1005  payload="World"  → server
  ← ack=1010` },

        { type: 'heading', text: 'Flow control: sliding window', level: 2 },
        { type: 'para', html: 'Every ACK carries a <strong>window size</strong> — how many more bytes the receiver is willing to buffer. The sender keeps at most that many bytes unACKed in flight. If the window shrinks to 0, the sender pauses; when the receiver drains its buffer, it advertises a bigger window again.' },

        { type: 'heading', text: 'Congestion control: cwnd', level: 2 },
        { type: 'para', html: 'In addition to the receiver\'s window, the sender keeps a <strong>congestion window</strong> (cwnd) that estimates how much the network can carry without dropping packets. The minimum of rwnd and cwnd governs the actual send rate.' },
        { type: 'list', kind: 'check', items: [
          '<strong>Slow start</strong> — cwnd doubles each RTT (1 → 2 → 4 → 8 …). Despite the name, this is exponential growth.',
          '<strong>Congestion avoidance</strong> — once a threshold is reached, cwnd grows linearly.',
          '<strong>Loss reaction</strong> — Reno halves cwnd; Cubic (Linux default) uses a smoother cubic function.',
          '<strong>BBR</strong> (Google, 2016) — measures bottleneck bandwidth + RTT instead of treating loss as the only congestion signal.'
        ] },

        { type: 'heading', text: 'Connection teardown', level: 2 },
        { type: 'code', lang: 'text', code: `Either side can close their direction independently (full-duplex).

A → B:  FIN              "I'm done sending"
B → A:  ACK
B → A:  FIN              "I'm done too"
A → B:  ACK              connection fully closed

TIME_WAIT — after the final ACK, the closer waits 2×MSL (often 60s)
            before reusing the port, to swallow any stragglers.` }
      ]
    },

    /* ============ Chapter 10 — UDP ============ */
    {
      id: 'net-c10',
      title: 'UDP — fire and forget',
      icon: '💨',
      sections: [
        { type: 'heading', text: 'When you don\'t want TCP\'s ceremony', level: 1 },
        { type: 'para', html: '<strong>UDP</strong> (User Datagram Protocol) is TCP\'s minimalist cousin. No handshake, no retransmits, no ordering. You send a datagram, the network might deliver it, and that\'s it.' },

        { type: 'heading', text: 'UDP header — just 8 bytes', level: 2 },
        { type: 'code', lang: 'text', code: `+-------------+-------------+-------------+-------------+
| Source Port | Dest Port   | Length      | Checksum    |
|    16 b     |   16 b      |   16 b      |   16 b      |
+-------------+-------------+-------------+-------------+
|                       Payload                          |
+--------------------------------------------------------+

Compare to TCP's 20+ byte header with seq/ack/window/flags.` },

        { type: 'heading', text: 'When to use UDP', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>DNS</strong> — one small query, one small reply. Retry in the app if needed.',
          '<strong>DHCP</strong> — you do not yet have an IP, so you cannot do a TCP handshake.',
          '<strong>NTP</strong> — sub-millisecond time sync; TCP\'s buffering would hurt accuracy.',
          '<strong>Streaming video / VoIP / gaming</strong> — a 300 ms-late frame is useless; better to drop than retransmit.',
          '<strong>QUIC / HTTP/3</strong> — builds reliability in user space on top of UDP so it can iterate without OS kernel changes.'
        ] },

        { type: 'heading', text: 'TCP vs UDP at a glance', level: 2 },
        { type: 'code', lang: 'text', code: `                  TCP                   UDP
Connection?       Yes (3-way handshake)  No
Reliability?      Retransmit lost data   None
Ordering?         Yes                    No
Header size       20+ B                  8 B
Congestion ctrl   Yes                    No (app's problem)
Use cases         HTTP, SSH, email       DNS, DHCP, video, games` },
        { type: 'callout', kind: 'info', html: 'UDP "unreliable" does not mean "broken" — it just means delivery is the application\'s problem to solve (or to not solve, if loss is acceptable). For most modern internet apps, the right answer is "TCP, or QUIC on UDP".' }
      ]
    },

    /* ============ Chapter 11 — Ports & sockets ============ */
    {
      id: 'net-c11',
      title: 'Ports & sockets',
      icon: '🔌',
      sections: [
        { type: 'heading', text: 'Many services, one IP', level: 1 },
        { type: 'para', html: 'An IP address identifies a machine, but that machine may run dozens of services. A <strong>port</strong> (a 16-bit number, 0–65535) picks which service. Together, IP + port + protocol uniquely identify an endpoint — what we call a <strong>socket</strong>.' },

        { type: 'heading', text: 'Port ranges', level: 2 },
        { type: 'code', lang: 'text', code: `0 – 1023        Well-known / system    (HTTP 80, SSH 22, DNS 53)
1024 – 49151    Registered             (MySQL 3306, Redis 6379)
49152 – 65535   Ephemeral / dynamic    (client side, OS-assigned)` },

        { type: 'heading', text: 'Common well-known ports', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>20 / 21</strong> — FTP (data / control)',
          '<strong>22</strong> — SSH',
          '<strong>25</strong> — SMTP (mail)',
          '<strong>53</strong> — DNS',
          '<strong>67 / 68</strong> — DHCP (server / client)',
          '<strong>80</strong> — HTTP',
          '<strong>123</strong> — NTP',
          '<strong>443</strong> — HTTPS',
          '<strong>3306</strong> — MySQL',
          '<strong>5432</strong> — PostgreSQL',
          '<strong>6379</strong> — Redis',
          '<strong>27017</strong> — MongoDB'
        ] },

        { type: 'heading', text: 'The 4-tuple that identifies a connection', level: 2 },
        { type: 'code', lang: 'text', code: `(src IP, src port, dst IP, dst port)

Browser tab 1:  (192.168.1.5, 49210, 142.250.190.78, 443)
Browser tab 2:  (192.168.1.5, 49211, 142.250.190.78, 443)
                                ↑
                  different ephemeral source ports
                  keep the two flows separate` },

        { type: 'heading', text: 'Sockets API in code', level: 2 },
        { type: 'code', lang: 'python', code: `<span class="com"># Minimal TCP server (Python)</span>
<span class="kw">import</span> socket

s = socket.<span class="fn">socket</span>(socket.AF_INET, socket.SOCK_STREAM)
s.<span class="fn">bind</span>((<span class="str">"0.0.0.0"</span>, <span class="num">8080</span>))
s.<span class="fn">listen</span>(<span class="num">5</span>)

<span class="kw">while True</span>:
    conn, addr = s.<span class="fn">accept</span>()
    data = conn.<span class="fn">recv</span>(<span class="num">1024</span>)
    conn.<span class="fn">sendall</span>(<span class="str">b"Hello, "</span> + data)
    conn.<span class="fn">close</span>()` },
        { type: 'callout', kind: 'tip', html: 'Run <code>netstat -an</code> or <code>ss -tnp</code> on your machine to see every open socket with its 4-tuple.' }
      ]
    },

    /* ============ Chapter 12 — DNS ============ */
    {
      id: 'net-c12',
      title: 'DNS — the Internet phone book',
      icon: '📘',
      sections: [
        { type: 'heading', text: 'Names → numbers', level: 1 },
        { type: 'para', html: 'Humans use names like <code>www.example.com</code>. The Internet needs IP addresses. <strong>DNS</strong> (Domain Name System) is the giant, distributed, cached database that maps one to the other.' },

        { type: 'heading', text: 'Recursive resolution', level: 2 },
        { type: 'image', alt: 'DNS recursive lookup flow',
          svg: `<svg viewBox="0 0 820 380" xmlns="http://www.w3.org/2000/svg">
<defs><style>.box{stroke:#0f172a;stroke-width:2;rx:8;ry:8}.you{fill:#bbf7d0}.rec{fill:#bae6fd}.root{fill:#fed7aa}.tld{fill:#fde68a}.auth{fill:#e9d5ff}.t{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#0f172a;text-anchor:middle}.s{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#dn)}.lbl{font-family:Inter,sans-serif;font-size:10px;fill:#0f172a}</style>
<marker id="dn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>

<rect x="40" y="160" width="120" height="60" class="box you"/>
<text x="100" y="190" class="t">Browser</text>
<text x="100" y="208" class="s">stub resolver</text>

<rect x="250" y="160" width="160" height="60" class="box rec"/>
<text x="330" y="188" class="t">Recursive resolver</text>
<text x="330" y="208" class="s">e.g., 1.1.1.1 / ISP</text>

<rect x="500" y="40" width="160" height="60" class="box root"/>
<text x="580" y="68" class="t">Root servers</text>
<text x="580" y="88" class="s">"a.root-servers.net" etc.</text>

<rect x="500" y="160" width="160" height="60" class="box tld"/>
<text x="580" y="188" class="t">.com TLD servers</text>
<text x="580" y="208" class="s">VeriSign et al.</text>

<rect x="500" y="280" width="160" height="60" class="box auth"/>
<text x="580" y="308" class="t">example.com auth</text>
<text x="580" y="328" class="s">site's nameserver</text>

<line x1="160" y1="190" x2="250" y2="190" class="arr"/>
<text x="205" y="180" class="lbl" text-anchor="middle">1. www.example.com?</text>

<line x1="410" y1="180" x2="500" y2="80"  class="arr"/>
<text x="465" y="120" class="lbl">2. ?</text>
<line x1="500" y1="100" x2="410" y2="200" class="arr"/>
<text x="450" y="155" class="lbl">3. "ask .com"</text>

<line x1="410" y1="190" x2="500" y2="190" class="arr"/>
<text x="455" y="180" class="lbl" text-anchor="middle">4. ?</text>
<line x1="500" y1="210" x2="410" y2="210" class="arr"/>
<text x="455" y="225" class="lbl" text-anchor="middle">5. "ask example.com NS"</text>

<line x1="410" y1="210" x2="500" y2="300" class="arr"/>
<text x="450" y="275" class="lbl">6. ?</text>
<line x1="500" y1="320" x2="410" y2="220" class="arr"/>
<text x="455" y="305" class="lbl">7. 93.184.216.34, TTL=300</text>

<line x1="250" y1="210" x2="160" y2="210" class="arr"/>
<text x="205" y="225" class="lbl" text-anchor="middle">8. answer (cached)</text>
</svg>` },

        { type: 'heading', text: 'The actors in a lookup', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Stub resolver</strong> — the tiny library in your OS that says "go ask my recursive resolver."',
          '<strong>Recursive resolver</strong> — usually your ISP\'s, or a public one like <code>1.1.1.1</code> (Cloudflare), <code>8.8.8.8</code> (Google). Does the heavy lifting and caches the result.',
          '<strong>Root servers</strong> — 13 logical servers (anycast IPs). Don\'t know the answer, but know which TLD server to ask.',
          '<strong>TLD servers</strong> — one set per top-level domain (.com, .org, .uk). Point to the zone\'s authoritative server.',
          '<strong>Authoritative server</strong> — owns the zone\'s real records. The only place a hand-edited DNS record actually lives.'
        ] },

        { type: 'heading', text: 'Record types you will see', level: 2 },
        { type: 'code', lang: 'text', code: `A      IPv4 address                example.com → 93.184.216.34
AAAA   IPv6 address                example.com → 2606:2800:220:...
CNAME  Alias to another name       www.example.com → example.com
MX     Mail exchange + priority    example.com → 10 mail.example.com
NS     Authoritative nameserver    example.com → ns1.example.com
TXT    Arbitrary text              SPF, DKIM, domain verification
SRV    Service location (host+port)
PTR    Reverse: IP → name (reverse DNS)
CAA    Which CAs may issue TLS certs for this domain` },

        { type: 'heading', text: 'TTL and caching', level: 2 },
        { type: 'para', html: 'Every DNS answer comes with a <strong>TTL</strong> (Time To Live) in seconds. Caches (the recursive resolver, your OS, your browser) keep the answer for that long. Set a short TTL (60s) when you expect to change records; set a long one (24h) for stable records.' },
        { type: 'code', lang: 'bash', code: `$ dig example.com

;; ANSWER SECTION:
example.com.    86400   IN    A    93.184.216.34
                  ↑
              TTL in seconds (here: 24h)` }
      ]
    },

    /* ============ Chapter 13 — HTTP / HTTPS ============ */
    {
      id: 'net-c13',
      title: 'HTTP & HTTPS',
      icon: '📨',
      sections: [
        { type: 'heading', text: 'Request, response, repeat', level: 1 },
        { type: 'para', html: '<strong>HTTP</strong> is the application protocol of the web. The model is dead simple: a client sends a <em>request</em>, the server sends back a <em>response</em>. It is <em>stateless</em> — each request stands alone (cookies are how state is bolted on).' },

        { type: 'heading', text: 'Anatomy of a request', level: 2 },
        { type: 'code', lang: 'http', code: `GET /users/42 HTTP/1.1
Host: api.example.com
Accept: application/json
User-Agent: Mozilla/5.0 ...
Cookie: session=abc123
                            ← blank line marks end of headers
                            ← body would follow here (POST/PUT)
` },

        { type: 'heading', text: 'Anatomy of a response', level: 2 },
        { type: 'code', lang: 'http', code: `HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 27
Cache-Control: max-age=60
Date: Mon, 25 May 2026 12:00:00 GMT

{"id":42,"name":"Ada"}` },

        { type: 'heading', text: 'Methods and status codes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>GET</strong> — fetch a resource. Safe and idempotent.',
          '<strong>POST</strong> — create / submit. NOT idempotent.',
          '<strong>PUT</strong> — replace a resource. Idempotent.',
          '<strong>PATCH</strong> — partial update.',
          '<strong>DELETE</strong> — remove. Idempotent.',
          '<strong>HEAD</strong> — like GET but no body. Useful for "does it exist?" / "what is the size?".',
          '<strong>OPTIONS</strong> — CORS preflight; what methods are allowed.'
        ] },
        { type: 'code', lang: 'text', code: `Status-code categories:
1xx  Informational   (100 Continue, 101 Switching Protocols)
2xx  Success         (200 OK, 201 Created, 204 No Content)
3xx  Redirection     (301 Permanent, 302 Found, 304 Not Modified)
4xx  Client error    (400 Bad Request, 401 Unauthorized,
                      403 Forbidden, 404 Not Found, 429 Too Many)
5xx  Server error    (500 Internal, 502 Bad Gateway,
                      503 Unavailable, 504 Gateway Timeout)` },

        { type: 'heading', text: 'HTTPS = HTTP over TLS', level: 2 },
        { type: 'para', html: '<strong>HTTPS</strong> runs the exact same HTTP protocol, but wrapped inside a <strong>TLS</strong>-encrypted connection. TLS adds three guarantees:' },
        { type: 'list', kind: 'check', items: [
          '<strong>Encryption</strong> — nobody on the wire can read the payload.',
          '<strong>Integrity</strong> — nobody can modify the traffic without detection.',
          '<strong>Authentication</strong> — the server proves it owns its domain via a certificate signed by a CA you trust.'
        ] },
        { type: 'callout', kind: 'info', html: 'TLS adds one extra round trip (or zero in TLS 1.3 0-RTT) at connection setup. Once established, the per-message overhead is tiny — encryption is essentially free with hardware AES.' },

        { type: 'heading', text: 'HTTP versions', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>HTTP/1.1 (1997)</strong> — text-based, one request at a time per connection (browsers worked around it with 6 parallel connections).',
          '<strong>HTTP/2 (2015)</strong> — binary framing, multiplexed streams over one TCP connection, header compression (HPACK).',
          '<strong>HTTP/3 (2022)</strong> — uses <strong>QUIC</strong> (a new transport on UDP). No head-of-line blocking, faster handshake, better on mobile / lossy links.'
        ] }
      ]
    },

    /* ============ Chapter 14 — Routing ============ */
    {
      id: 'net-c14',
      title: 'Routing — how packets find their way',
      icon: '🧭',
      sections: [
        { type: 'heading', text: 'Routers, routing tables, and next-hops', level: 1 },
        { type: 'para', html: 'A <strong>router</strong> joins two or more networks and forwards packets between them. Each router holds a <strong>routing table</strong>: "for destination X, send to next-hop Y". Routing is fundamentally about choosing that next-hop fast.' },

        { type: 'code', lang: 'bash', code: `$ ip route          # Linux routing table
default via 192.168.1.1 dev wlan0
10.0.0.0/8 via 10.42.0.1 dev tun0
192.168.1.0/24 dev wlan0 proto kernel scope link src 192.168.1.5

# The "default" route is the catch-all when nothing more specific matches.` },

        { type: 'heading', text: 'Static vs dynamic routing', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Static</strong> — humans configure each route. Simple but cannot adapt to topology changes.',
          '<strong>Dynamic</strong> — routers gossip about reachability; tables update automatically when links go up or down.'
        ] },

        { type: 'heading', text: 'Interior gateway protocols (IGPs)', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>RIP</strong> (Routing Information Protocol) — distance-vector, hop count, max 15 hops. Simple. Largely legacy.',
          '<strong>OSPF</strong> (Open Shortest Path First) — link-state. Each router floods its links to all others, builds a topology map, runs Dijkstra to find shortest paths. Scales well.',
          '<strong>IS-IS</strong> — link-state, similar to OSPF, popular with ISPs.',
          '<strong>EIGRP</strong> — Cisco-proprietary hybrid.'
        ] },

        { type: 'heading', text: 'BGP — the protocol that runs the Internet', level: 2 },
        { type: 'image', alt: 'BGP between Autonomous Systems',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.as{fill:#fde68a;stroke:#b45309;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.s{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.l{stroke:#0277bd;stroke-width:2;fill:none}.lbl{font-family:Inter,sans-serif;font-size:11px;fill:#0277bd;text-anchor:middle}</style></defs>

<text x="380" y="25" class="t">Border Gateway Protocol — neighbors exchange "I can reach prefix X via path P"</text>

<circle cx="120" cy="120" r="55" class="as"/>
<text x="120" y="115" class="t">AS 7018</text>
<text x="120" y="135" class="s">AT&amp;T</text>

<circle cx="320" cy="120" r="55" class="as"/>
<text x="320" y="115" class="t">AS 15169</text>
<text x="320" y="135" class="s">Google</text>

<circle cx="540" cy="120" r="55" class="as"/>
<text x="540" y="115" class="t">AS 13335</text>
<text x="540" y="135" class="s">Cloudflare</text>

<circle cx="680" cy="220" r="50" class="as"/>
<text x="680" y="215" class="t">AS 32934</text>
<text x="680" y="235" class="s">Meta</text>

<line x1="175" y1="120" x2="265" y2="120" class="l"/>
<text x="220" y="110" class="lbl">BGP peer</text>

<line x1="375" y1="120" x2="485" y2="120" class="l"/>
<text x="430" y="110" class="lbl">BGP peer</text>

<line x1="560" y1="170" x2="660" y2="200" class="l"/>
<text x="620" y="180" class="lbl">BGP peer</text>

<line x1="170" y1="160" x2="640" y2="210" class="l" stroke-dasharray="4,4"/>
<text x="380" y="200" class="lbl">"To reach 31.13.0.0/16, go via AS 32934"</text>
</svg>` },
        { type: 'para', html: 'An <strong>Autonomous System (AS)</strong> is one administrative routing domain — typically one ISP, large enterprise, or cloud provider. Each AS has a globally unique <strong>ASN</strong> (Autonomous System Number) handed out by IANA / RIRs.' },
        { type: 'list', kind: 'bullet', items: [
          'Google = <strong>AS 15169</strong>',
          'Cloudflare = <strong>AS 13335</strong>',
          'AWS = <strong>AS 16509</strong>',
          'Meta / Facebook = <strong>AS 32934</strong>'
        ] },
        { type: 'para', html: '<strong>BGP</strong> (Border Gateway Protocol) is the <em>only</em> inter-AS routing protocol on the Internet. It is a <strong>path-vector</strong> protocol: each route advertisement carries the full sequence of ASes it has crossed. BGP picks routes by policy (business relationships), not just shortest path.' },
        { type: 'callout', kind: 'warn', html: 'BGP famously runs the Internet on a foundation of trust. A misconfigured BGP announcement at a small ISP can hijack traffic for entire regions — see the 2008 YouTube/Pakistan incident or the 2021 Facebook outage where BGP withdrawal made facebook.com globally unreachable for hours.' }
      ]
    },

    /* ============ Chapter 15 — NAT, DHCP, VLANs ============ */
    {
      id: 'net-c15',
      title: 'NAT, DHCP & VLANs',
      icon: '🏠',
      sections: [
        { type: 'heading', text: 'The building blocks of every real network', level: 1 },
        { type: 'para', html: 'Three mechanisms you will find in essentially every office, datacenter, and home router. None are about <em>moving</em> packets — they are about making real-world networks practical to operate.' },

        { type: 'heading', text: 'NAT — many private IPs, one public', level: 2 },
        { type: 'para', html: '<strong>NAT</strong> (Network Address Translation) lets many devices behind one router share a single public IPv4 address. The router rewrites source IP+port on outgoing packets and remembers the mapping to rewrite replies on the way back.' },
        { type: 'code', lang: 'text', code: `Inside (private)             NAT router          Outside (public)

  Laptop  192.168.1.5:54321   →  73.10.4.7:60123  →  example.com:443
  Phone   192.168.1.6:54321   →  73.10.4.7:60124  →  example.com:443

NAT table on the router:
  60123 ↔ 192.168.1.5:54321
  60124 ↔ 192.168.1.6:54321

Reply for :60123 → look up → forward to 192.168.1.5:54321
Reply for :60124 → look up → forward to 192.168.1.6:54321` },
        { type: 'callout', kind: 'info', html: 'NAT was invented as a stopgap for IPv4 address exhaustion. It also incidentally provides a "firewall by default" — unsolicited inbound packets have no mapping and get dropped. IPv6 mostly does away with NAT because addresses are no longer scarce.' },

        { type: 'heading', text: 'DHCP — auto IP configuration', level: 2 },
        { type: 'para', html: '<strong>DHCP</strong> (Dynamic Host Configuration Protocol) lets a new device on a network get an IP address, subnet mask, default gateway, and DNS server without any manual setup. The exchange is four messages remembered as <strong>DORA</strong>.' },
        { type: 'code', lang: 'text', code: `D — Discover    Client broadcasts: "any DHCP server out there?"
O — Offer       Server proposes:   "use 192.168.1.42 for 24 hours,
                                    gateway=192.168.1.1, DNS=1.1.1.1"
R — Request     Client accepts:    "I'll take 192.168.1.42"
A — Ack         Server confirms:   "leased to you until tomorrow"` },
        { type: 'list', kind: 'check', items: [
          'DHCP runs over <strong>UDP ports 67 (server) and 68 (client)</strong>.',
          'Leases <strong>expire</strong>; clients renew at ~50% of lease lifetime.',
          'If no DHCP server replies, the host may auto-assign a <strong>link-local</strong> address (<code>169.254.x.x</code> in IPv4, <code>fe80::/10</code> in IPv6).'
        ] },

        { type: 'heading', text: 'VLANs — many logical LANs in one switch', level: 2 },
        { type: 'para', html: 'A <strong>VLAN</strong> (Virtual LAN) lets a single physical switch behave like several independent switches. Each port is assigned a VLAN ID; traffic on VLAN 10 cannot reach VLAN 20 without going through a router (or Layer-3 switch). Each VLAN is its own broadcast domain.' },
        { type: 'code', lang: 'text', code: `Office switch (24 ports):

  Ports  1 – 8    →  VLAN 10  Engineering
  Ports  9 – 16   →  VLAN 20  Finance
  Ports 17 – 24   →  VLAN 30  Guest WiFi

Each VLAN sees its own broadcasts, its own ARP, its own DHCP pool.
Trunk port to the router carries ALL VLANs, each frame tagged with its VLAN ID.` },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Access port</strong> — carries traffic for exactly one VLAN, untagged.',
          '<strong>Trunk port</strong> — carries many VLANs, each frame tagged with 802.1Q.',
          '<strong>Native VLAN</strong> — the untagged VLAN on a trunk (default: VLAN 1).',
          '<strong>VLAN ID</strong> — 12-bit number, 1–4094 (0 and 4095 reserved).'
        ] },
        { type: 'callout', kind: 'tip', html: 'VLANs are essential for security and tidy organization. Putting the guest WiFi on its own VLAN means a compromised guest device cannot scan your internal hosts — and VoIP phones on their own VLAN can get prioritized QoS without affecting other traffic.' },

        { type: 'divider' },
        { type: 'heading', text: 'Where to go next', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Build a small home lab: a router + two PCs + Wireshark. Sniff your own DHCP, ARP, DNS traffic.',
          'Read RFC 791 (IP), RFC 793 (TCP), RFC 1034/1035 (DNS), RFC 7540 (HTTP/2), RFC 9000 (QUIC).',
          'Try a CCNA-style subnetting drill — give yourself random CIDRs and compute host counts in seconds.',
          'When debugging real-world issues, work bottom-up: cable → link → IP → TCP → app. The problem is almost always lower than you first think.'
        ] }
      ]
    }

  ]
});

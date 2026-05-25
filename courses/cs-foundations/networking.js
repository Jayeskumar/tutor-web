PUSH({
  id: 'networking',
  name: 'Networking',
  icon: '🌐',
  color: '#0277bd',
  description: 'How the internet really works — OSI to TCP/IP, routing, DNS, and protocols.',
  units: [

    /* ============== UNIT 1 — Network Basics ============== */
    {
      id: 'net-u1', name: 'Unit 1 · What is a network?', description: 'LANs, WANs, topologies, and the basic idea',
      lessons: [
        {
          id: 'net-u1-l1', name: 'Networks & scale', icon: '🌐', xp: 15,
          challenges: [
            { type: 'concept', title: 'A network is a bunch of devices talking to each other', content: `<p>A <strong>computer network</strong> is two or more devices (hosts) connected so they can exchange data. Networks are everywhere — your phone to a WiFi router, an office full of laptops, the entire planet via the Internet.</p>
<p>We classify networks mainly by <strong>geographic scale</strong>:</p>
<div class="code-block"><span class="com">PAN</span> — Personal Area Network    (Bluetooth, ~10 m)
<span class="com">LAN</span> — Local   Area Network    (home/office, building scale)
<span class="com">MAN</span> — Metropolitan Area Network (city scale)
<span class="com">WAN</span> — Wide   Area Network    (country / planet)

The <span class="kw">Internet</span> = a global WAN of WANs.</div>
<p>A LAN is fast and cheap (you own the cables). A WAN is slow and expensive (you rent links from telcos). That tension drives a lot of network design.</p>` },
            { type: 'multiple-choice', prompt: 'Your home WiFi connecting a laptop, phone, and printer is a:',
              options: [{text:'PAN', code:false},{text:'LAN', code:false},{text:'MAN', code:false},{text:'WAN', code:false}],
              correct: 1, explanation: 'A home network is a Local Area Network — bounded by a building.' },
            { type: 'true-false', statement: 'The Internet is best described as a single giant LAN.', correct: false, explanation: 'The Internet is a WAN — a network of networks spanning the globe.' },
            { type: 'match-pairs', prompt: 'Match scale → typical reach.', leftLabel: 'Type', rightLabel: 'Reach',
              pairs: [{left:'PAN', right:'~10 meters (Bluetooth)'},{left:'LAN', right:'A building or campus'},{left:'MAN', right:'A city'},{left:'WAN', right:'A country or planet'}] },
            { type: 'multiple-choice', prompt: 'Which is the BEST one-line definition of a network?',
              options: [{text:'A device with WiFi', code:false},{text:'Two or more devices connected to exchange data', code:false},{text:'A computer with internet access', code:false},{text:'A website that responds to requests', code:false}],
              correct: 1, explanation: 'Two endpoints + a link + a protocol = a network.' },
            { type: 'fill-blank', prompt: 'Pick the right scale word:',
              codeLines: [{html:'A city-wide network covering downtown is called a <span class="fn">_BLANK_</span>.'}],
              tokens: ['MAN','LAN','PAN','WAN'], correctAnswer: 'MAN', explanation: 'Metropolitan Area Network — city scale.' }
          ]
        },
        {
          id: 'net-u1-l2', name: 'Topologies', icon: '🕸️', xp: 15,
          challenges: [
            { type: 'concept', title: 'How devices are wired together', content: `<p>A <strong>topology</strong> is the shape of how devices are connected. The choice affects cost, fault tolerance, and performance.</p>
<div class="code-block"><span class="com">Bus</span>    — one shared cable; cheap, but a single break kills it.
<span class="com">Star</span>   — every device wires to a central hub/switch (modern LANs).
<span class="com">Ring</span>   — each node connects to the next; a token circulates.
<span class="com">Mesh</span>   — every node connects to many others; very resilient.
<span class="com">Tree</span>   — hierarchical (root switch → branch switches → hosts).</div>
<p>Modern Ethernet LANs are almost always <strong>star</strong> (central switch). The Internet backbone is more like <strong>mesh</strong> for reliability.</p>` },
            { type: 'multiple-choice', prompt: 'Which topology dominates modern home/office LANs?',
              options: [{text:'Bus', code:false},{text:'Star', code:false},{text:'Ring', code:false},{text:'Full mesh', code:false}],
              correct: 1, explanation: 'A central switch with each device wired separately — that is a star.' },
            { type: 'true-false', statement: 'A mesh topology offers the best fault tolerance because there are multiple paths between nodes.', correct: true, explanation: 'Multiple redundant links mean a single failure rarely disconnects anything.' },
            { type: 'match-pairs', prompt: 'Match topology → feature.', leftLabel: 'Topology', rightLabel: 'Feature',
              pairs: [{left:'Bus', right:'Single shared cable'},{left:'Star', right:'Central hub/switch'},{left:'Ring', right:'Token passed around'},{left:'Mesh', right:'Many redundant paths'}] },
            { type: 'multiple-choice', prompt: 'In a pure bus topology, if the main cable is cut:',
              options: [{text:'Only one device is affected', code:false},{text:'Half the devices keep working', code:false},{text:'The whole segment goes down', code:false},{text:'Traffic automatically reroutes', code:false}],
              correct: 2, explanation: 'A bus has no redundancy — one cable break breaks everything.' },
            { type: 'tap-tokens', prompt: 'Build the sentence about star topology.',
              tokens: ['In','a','star','topology','every','device','connects','to','a','central','switch','mesh','ring','hub'],
              correctOrder: ['In','a','star','topology','every','device','connects','to','a','central','switch'],
              explanation: 'Every device wires back to a central switch — that is a star.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — OSI Model ============== */
    {
      id: 'net-u2', name: 'Unit 2 · The OSI 7-layer model', description: 'A mental map of the network stack',
      lessons: [
        {
          id: 'net-u2-l1', name: 'The seven layers', icon: '🥞', xp: 25,
          challenges: [
            { type: 'concept', title: 'OSI = a teaching model with 7 stacked layers', content: `<p>The <strong>OSI</strong> (Open Systems Interconnection) model splits networking into seven layers. Each layer talks only to the one above and below it, and each adds (or strips) its own header.</p>
<div class="code-block"><span class="com">Layer 7</span>  Application   — HTTP, DNS, SMTP, SSH (what users see)
<span class="com">Layer 6</span>  Presentation  — encoding, encryption (TLS)
<span class="com">Layer 5</span>  Session       — establish / tear down sessions
<span class="com">Layer 4</span>  Transport     — TCP / UDP (end-to-end, ports)
<span class="com">Layer 3</span>  Network       — IP (routing, IP addresses)
<span class="com">Layer 2</span>  Data link     — Ethernet, MAC, switches
<span class="com">Layer 1</span>  Physical      — cables, radio, voltages</div>
<p>Mnemonic: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way (bottom → top).</p>` },
            { type: 'multiple-choice', prompt: 'IP addresses live at which OSI layer?',
              options: [{text:'Layer 2 (Data link)', code:false},{text:'Layer 3 (Network)', code:false},{text:'Layer 4 (Transport)', code:false},{text:'Layer 7 (Application)', code:false}],
              correct: 1, explanation: 'IP is the Layer 3 / Network layer protocol — it handles addressing and routing.' },
            { type: 'multiple-choice', prompt: 'TCP and UDP are at which layer?',
              options: [{text:'Layer 2', code:false},{text:'Layer 3', code:false},{text:'Layer 4', code:false},{text:'Layer 5', code:false}],
              correct: 2, explanation: 'Transport layer (4). Ports are a Layer 4 concept.' },
            { type: 'match-pairs', prompt: 'Layer number → protocol/example.', leftLabel: 'Layer', rightLabel: 'Example',
              pairs: [{left:'7', right:'HTTP'},{left:'4', right:'TCP'},{left:'3', right:'IP'},{left:'2', right:'Ethernet'}] },
            { type: 'reorder-code', prompt: 'Put the OSI layers in order, bottom (1) → top (7).',
              lines: [
                'Physical',
                'Data Link',
                'Network',
                'Transport',
                'Session',
                'Presentation',
                'Application'
              ],
              correctOrder: [0,1,2,3,4,5,6],
              explanation: 'Bottom to top: Physical · Data Link · Network · Transport · Session · Presentation · Application.' },
            { type: 'true-false', statement: 'In OSI, each layer adds its own header as data moves down the stack on the sender.', correct: true, explanation: 'This is called encapsulation — each layer wraps the layer above it.' },
            { type: 'type-answer', prompt: 'What single word names the OSI process of wrapping data with a header at each descending layer?',
              accept: ['encapsulation','Encapsulation'],
              explanation: 'Encapsulation: app data → +TCP hdr → +IP hdr → +Ethernet hdr → bits on the wire.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — TCP/IP Model ============== */
    {
      id: 'net-u3', name: 'Unit 3 · The TCP/IP model', description: '4 layers — what the Internet actually uses',
      lessons: [
        {
          id: 'net-u3-l1', name: 'TCP/IP vs OSI', icon: '🔁', xp: 20,
          challenges: [
            { type: 'concept', title: 'The real-world stack only has 4 layers', content: `<p>The Internet does NOT actually run the 7-layer OSI model — that is a teaching abstraction. Real implementations use the <strong>TCP/IP model</strong>, which has 4 (sometimes 5) layers:</p>
<div class="code-block"><span class="com">TCP/IP</span>                     <span class="com">maps to OSI</span>
4. Application       <-->   5, 6, 7  (Session + Presentation + Application)
3. Transport         <-->   4        (TCP, UDP)
2. Internet          <-->   3        (IP, ICMP)
1. Network access    <-->   1, 2     (Ethernet, WiFi, cabling)</div>
<p>OSI is the textbook map. TCP/IP is what your laptop is actually running. When people say "Layer 4" they almost always mean transport — the meaning lines up across both models for layers 1–4.</p>` },
            { type: 'multiple-choice', prompt: 'How many layers in the standard TCP/IP model?',
              options: [{text:'3', code:false},{text:'4', code:false},{text:'5', code:false},{text:'7', code:false}],
              correct: 1, explanation: 'Four: Application, Transport, Internet, Network access.' },
            { type: 'multiple-choice', prompt: 'Which TCP/IP layer maps to OSI layers 5, 6 AND 7?',
              options: [{text:'Network access', code:false},{text:'Internet', code:false},{text:'Transport', code:false},{text:'Application', code:false}],
              correct: 3, explanation: 'TCP/IP rolls session, presentation, and application into one Application layer.' },
            { type: 'true-false', statement: 'TCP/IP is what is actually implemented on the Internet; OSI is mainly a conceptual reference.', correct: true, explanation: 'OSI exists for pedagogy. The stack on every machine is TCP/IP.' },
            { type: 'match-pairs', prompt: 'TCP/IP layer → protocol.', leftLabel: 'Layer', rightLabel: 'Protocol',
              pairs: [{left:'Application', right:'HTTP'},{left:'Transport', right:'TCP'},{left:'Internet', right:'IP'},{left:'Network access', right:'Ethernet'}] },
            { type: 'reorder-code', prompt: 'Order TCP/IP layers from bottom (1) to top (4).',
              lines: ['Network access','Internet','Transport','Application'],
              correctOrder: [0,1,2,3],
              explanation: 'Bottom up: Network access → Internet → Transport → Application.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Physical & Data Link ============== */
    {
      id: 'net-u4', name: 'Unit 4 · Physical & Data Link', description: 'Bits, frames, MACs, and switches',
      lessons: [
        {
          id: 'net-u4-l1', name: 'Ethernet & MAC addresses', icon: '🔌', xp: 20,
          challenges: [
            { type: 'concept', title: 'Frames carry bits between adjacent devices', content: `<p>At Layer 1 (physical), data is just voltage, light pulses, or radio waves. Layer 2 (data link) gives those bits structure as <strong>frames</strong>.</p>
<p>Every network interface has a 48-bit <strong>MAC address</strong> (Media Access Control) burned in at the factory, written as six hex bytes:</p>
<div class="code-block"><span class="com">Example MAC:</span>  00:1A:2B:3C:4D:5E
            └─ first 3 bytes = vendor (OUI)
                              └─ last 3 bytes = unique per NIC</div>
<p>An <strong>Ethernet frame</strong> looks like:</p>
<div class="code-block">| Preamble | Dest MAC | Src MAC | Type | Payload (IP packet) | CRC |
|   7 B    |   6 B    |   6 B   |  2 B |    46–1500 B        | 4 B |</div>
<p>A <strong>switch</strong> learns which MAC lives on which port and forwards frames only where they need to go — far smarter than the old hubs that broadcast to everyone.</p>` },
            { type: 'multiple-choice', prompt: 'How many bits in a MAC address?',
              options: [{text:'32', code:false},{text:'48', code:false},{text:'64', code:false},{text:'128', code:false}],
              correct: 1, explanation: '48 bits, usually shown as 6 hex bytes (e.g., 00:1A:2B:3C:4D:5E).' },
            { type: 'multiple-choice', prompt: 'A switch operates primarily at:',
              options: [{text:'Layer 1', code:false},{text:'Layer 2', code:false},{text:'Layer 3', code:false},{text:'Layer 4', code:false}],
              correct: 1, explanation: 'Switches forward by MAC address — that is Layer 2.' },
            { type: 'true-false', statement: 'A hub forwards a frame to every port; a switch forwards only to the port where the destination MAC lives.', correct: true, explanation: 'Switches keep a MAC-address table; hubs are dumb broadcasters.' },
            { type: 'fill-blank', prompt: 'The unit of data at Layer 2 is a:',
              codeLines: [{html:'At the data-link layer, data travels in a <span class="fn">_BLANK_</span>.'}],
              tokens: ['frame','packet','segment','datagram'], correctAnswer: 'frame',
              explanation: 'Frame (L2), packet (L3), segment/datagram (L4 TCP/UDP).' },
            { type: 'match-pairs', prompt: 'Layer → data unit.', leftLabel: 'Layer', rightLabel: 'Unit',
              pairs: [{left:'Application', right:'Message'},{left:'Transport (TCP)', right:'Segment'},{left:'Network', right:'Packet'},{left:'Data link', right:'Frame'}] },
            { type: 'output-predict', prompt: 'How many bytes is the destination MAC field in an Ethernet frame?',
              code: '<span class="com">| Preamble | Dest MAC | Src MAC | Type | Payload | CRC |</span>',
              options: ['2','4','6','8'], correct: 2,
              explanation: 'A MAC address is 48 bits = 6 bytes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — IPv4 ============== */
    {
      id: 'net-u5', name: 'Unit 5 · IPv4 addressing', description: 'Classes, CIDR, subnetting',
      lessons: [
        {
          id: 'net-u5-l1', name: 'IPv4 basics & classes', icon: '🔢', xp: 20,
          challenges: [
            { type: 'concept', title: '32-bit addresses written as four octets', content: `<p>An <strong>IPv4 address</strong> is 32 bits — four 8-bit octets separated by dots:</p>
<div class="code-block"><span class="num">192</span>.<span class="num">168</span>.<span class="num">1</span>.<span class="num">42</span>
= 11000000.10101000.00000001.00101010
= 2^32 = ~4.3 billion possible addresses total</div>
<p>Originally, IPs were carved into <strong>classes</strong> by first octet:</p>
<div class="code-block"><span class="com">Class A</span>  1.0.0.0   – 126.255.255.255   (huge nets, /8)
<span class="com">Class B</span>  128.0.0.0 – 191.255.255.255   (medium,   /16)
<span class="com">Class C</span>  192.0.0.0 – 223.255.255.255   (small,    /24)
<span class="com">Class D</span>  224.0.0.0 – 239.255.255.255   (multicast)
<span class="com">Class E</span>  240.0.0.0 – 255.255.255.255   (reserved)</div>
<p>Classes are mostly historical — today we use <strong>CIDR</strong> (next lesson), which lets prefixes be any length, not just /8, /16, /24.</p>` },
            { type: 'multiple-choice', prompt: 'IPv4 addresses are how many bits?',
              options: [{text:'16', code:false},{text:'32', code:false},{text:'64', code:false},{text:'128', code:false}],
              correct: 1, explanation: '32 bits → four 8-bit octets → ~4.3 billion addresses.' },
            { type: 'multiple-choice', prompt: '<code>10.0.5.42</code> falls in which class?',
              options: [{text:'Class A', code:false},{text:'Class B', code:false},{text:'Class C', code:false},{text:'Class D', code:false}],
              correct: 0, explanation: 'First octet 1–126 = Class A.' },
            { type: 'true-false', statement: 'There are about 4.3 billion possible IPv4 addresses.', correct: true, explanation: '2^32 ≈ 4.29 × 10^9.' },
            { type: 'type-answer', prompt: 'What is the decimal value of the IPv4 octet 11111111?',
              accept: ['255'], explanation: '2^8 − 1 = 255 — the largest value an 8-bit octet can hold.' },
            { type: 'output-predict', prompt: 'How many bits in an IPv4 address?',
              code: '<span class="num">192</span>.<span class="num">168</span>.<span class="num">1</span>.<span class="num">1</span>',
              options: ['8','16','32','64'], correct: 2,
              explanation: 'Four octets × 8 bits = 32 bits.' },
            { type: 'match-pairs', prompt: 'First octet → class.', leftLabel: 'Range', rightLabel: 'Class',
              pairs: [{left:'1–126', right:'A'},{left:'128–191', right:'B'},{left:'192–223', right:'C'},{left:'224–239', right:'D (multicast)'}] }
          ]
        },
        {
          id: 'net-u5-l2', name: 'CIDR & subnetting', icon: '✂️', xp: 30,
          challenges: [
            { type: 'concept', title: 'CIDR notation: address + prefix length', content: `<p><strong>CIDR</strong> (Classless Inter-Domain Routing) writes a network as <code>address/prefix</code>. The <strong>prefix</strong> is how many leading bits identify the network; the rest identify hosts.</p>
<div class="code-block"><span class="num">192.168.1.0</span>/<span class="num">24</span>
                ↑
        first 24 bits = network
        last 8 bits  = host (256 addresses)

<span class="com">Hosts available</span> = 2^(32 − prefix) − 2
                  (subtract 2: network + broadcast)

/24 → 256 − 2 = 254 hosts
/26 → 64  − 2 = 62 hosts
/30 → 4   − 2 = 2 hosts (point-to-point links)</div>
<p>Private ranges (not routed on the Internet — used inside your home/office):</p>
<div class="code-block"><span class="num">10.0.0.0</span>/8           — class A private
<span class="num">172.16.0.0</span>/12        — class B private
<span class="num">192.168.0.0</span>/16       — class C private (most home routers)</div>` },
            { type: 'multiple-choice', prompt: 'How many usable host addresses in <code>192.168.1.0/24</code>?',
              options: [{text:'256', code:false},{text:'254', code:false},{text:'128', code:false},{text:'62', code:false}],
              correct: 1, explanation: '2^8 = 256, minus network (.0) and broadcast (.255) = 254.' },
            { type: 'multiple-choice', prompt: 'How many usable hosts in a <code>/26</code>?',
              options: [{text:'30', code:false},{text:'62', code:false},{text:'126', code:false},{text:'254', code:false}],
              correct: 1, explanation: '32 − 26 = 6 host bits; 2^6 = 64; minus 2 = 62.' },
            { type: 'type-answer', prompt: 'How many usable hosts in a /30 subnet? (Just the number.)',
              accept: ['2'], explanation: '2^2 − 2 = 2. /30 is the classic point-to-point link.' },
            { type: 'multiple-choice', prompt: 'Which range is NOT a private IPv4 range?',
              options: [{text:'10.0.0.0/8', code:false},{text:'172.16.0.0/12', code:false},{text:'192.168.0.0/16', code:false},{text:'8.8.8.0/24', code:false}],
              correct: 3, explanation: '8.8.8.x is Google\'s public DNS — definitely not private.' },
            { type: 'true-false', statement: 'In <code>10.5.0.0/16</code>, the prefix is 16 bits, leaving 16 host bits.', correct: true, explanation: 'Prefix + host = 32 always. 16+16 here.' },
            { type: 'output-predict', prompt: 'What is the broadcast address of <code>192.168.1.0/24</code>?',
              code: 'Network:    192.168.1.0\nPrefix:     /24 (so host portion = last octet)',
              options: ['192.168.1.1','192.168.1.254','192.168.1.255','192.168.1.0'], correct: 2,
              explanation: 'Last address in the subnet = broadcast. For /24, that is .255.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — IPv6 ============== */
    {
      id: 'net-u6', name: 'Unit 6 · IPv6', description: 'Why we needed it and how it differs',
      lessons: [
        {
          id: 'net-u6-l1', name: 'IPv6 addressing', icon: '🔢', xp: 20,
          challenges: [
            { type: 'concept', title: '128-bit addresses, written in hex', content: `<p>IPv4 ran out of addresses. <strong>IPv6</strong> uses <strong>128 bits</strong> — that is 3.4 × 10^38 addresses, enough for every grain of sand on Earth (and then some).</p>
<div class="code-block">IPv4: 32 bits   → 4.3 × 10^9 addresses
IPv6: 128 bits  → 3.4 × 10^38 addresses

<span class="com">Format</span>: eight groups of 4 hex digits separated by colons
2001:0db8:85a3:0000:0000:8a2e:0370:7334

<span class="com">Shorthand</span>: drop leading zeros, collapse one run of zeros with "::"
2001:db8:85a3::8a2e:370:7334
::1                  (loopback, like 127.0.0.1)
fe80::/10            (link-local, like 169.254.x.x)</div>
<p>IPv4 and IPv6 are NOT directly interoperable. Transition uses <strong>dual-stack</strong> (run both), <strong>tunneling</strong> (wrap v6 inside v4), or <strong>NAT64</strong> (translate at a gateway).</p>` },
            { type: 'multiple-choice', prompt: 'How many bits in an IPv6 address?',
              options: [{text:'32', code:false},{text:'64', code:false},{text:'128', code:false},{text:'256', code:false}],
              correct: 2, explanation: '128 bits — 4× the size of IPv4.' },
            { type: 'multiple-choice', prompt: 'The IPv6 shorthand <code>::1</code> represents:',
              options: [{text:'A broadcast address', code:false},{text:'Loopback (localhost)', code:false},{text:'A link-local address', code:false},{text:'The default route', code:false}],
              correct: 1, explanation: 'IPv6 loopback = ::1, equivalent to IPv4 127.0.0.1.' },
            { type: 'true-false', statement: 'You can use <code>::</code> more than once in a single IPv6 address.', correct: false, explanation: 'Only ONE <code>::</code> per address — otherwise it would be ambiguous.' },
            { type: 'type-answer', prompt: 'What 2-character IPv6 shorthand collapses a single run of consecutive zero groups?',
              accept: ['::','double colon'], explanation: 'The double colon (::) replaces one run of all-zero groups, once.' },
            { type: 'match-pairs', prompt: 'Match IPv4 concept → IPv6 equivalent.', leftLabel: 'IPv4', rightLabel: 'IPv6',
              pairs: [{left:'127.0.0.1', right:'::1'},{left:'169.254.x.x', right:'fe80::/10'},{left:'Broadcast', right:'(no broadcast — multicast)'},{left:'ARP', right:'NDP (Neighbor Discovery)'}] },
            { type: 'multiple-choice', prompt: 'A "dual-stack" host:',
              options: [{text:'Runs only IPv6', code:false},{text:'Tunnels IPv4 inside IPv6', code:false},{text:'Has both IPv4 and IPv6 stacks active simultaneously', code:false},{text:'Translates between versions at the kernel', code:false}],
              correct: 2, explanation: 'Dual-stack means: I speak both v4 and v6, and pick whichever the peer supports.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — ARP ============== */
    {
      id: 'net-u7', name: 'Unit 7 · ARP', description: 'Resolving IPs to MAC addresses on a LAN',
      lessons: [
        {
          id: 'net-u7-l1', name: 'ARP & the ARP cache', icon: '📮', xp: 20,
          challenges: [
            { type: 'concept', title: 'Layer 3 talks IP, but Layer 2 talks MAC', content: `<p>To send a packet on a LAN, you need the destination\'s <strong>MAC address</strong>, but you only know its <strong>IP address</strong>. <strong>ARP</strong> (Address Resolution Protocol) bridges that gap.</p>
<div class="code-block"><span class="com">Step 1:</span> Host A: "Who has 192.168.1.42? Tell 192.168.1.10."
        (broadcast to FF:FF:FF:FF:FF:FF)
<span class="com">Step 2:</span> Host B (the owner of .42): "192.168.1.42 is at 00:1A:2B:3C:4D:5E"
        (unicast back to A)
<span class="com">Step 3:</span> Host A caches the mapping in its ARP table for ~2 min.</div>
<p>Check your own ARP table:</p>
<div class="code-block"><span class="com">$</span> arp -a
? (192.168.1.1) at 5c:e8:eb:11:22:33 on en0 ifscope [ethernet]
? (192.168.1.42) at 00:1a:2b:3c:4d:5e on en0 ifscope [ethernet]</div>
<p>ARP is only used on the local LAN. To reach an IP off-network, your machine ARPs for the <strong>gateway\'s</strong> MAC, not the final destination.</p>` },
            { type: 'multiple-choice', prompt: 'ARP resolves:',
              options: [{text:'Domain name to IP', code:false},{text:'IP address to MAC address', code:false},{text:'MAC address to IP address', code:false},{text:'Port number to service', code:false}],
              correct: 1, explanation: 'You know the IP, you need the MAC to actually put it on the wire.' },
            { type: 'true-false', statement: 'An ARP request is sent as a broadcast on the LAN.', correct: true, explanation: 'Destination MAC = FF:FF:FF:FF:FF:FF — every host on the segment hears it.' },
            { type: 'multiple-choice', prompt: 'To send a packet to a host on the OTHER side of the Internet, your machine ARPs for:',
              options: [{text:'The destination\'s MAC', code:false},{text:'Google\'s MAC', code:false},{text:'The default gateway\'s MAC', code:false},{text:'The DNS server\'s MAC', code:false}],
              correct: 2, explanation: 'You can only ARP on-LAN — so you ARP for the next hop (your router).' },
            { type: 'type-answer', prompt: 'What command (one word) shows the ARP table on Linux/macOS?',
              accept: ['arp'], explanation: '<code>arp -a</code> prints the current cached IP→MAC mappings.' },
            { type: 'fill-blank', prompt: 'Fill in the broadcast MAC ARP uses:',
              codeLines: [{html:'Destination MAC of an ARP request = <span class="fn">_BLANK_</span>'}],
              tokens: ['FF:FF:FF:FF:FF:FF','00:00:00:00:00:00','01:80:C2:00:00:00','FE:80:00:00:00:00'],
              correctAnswer: 'FF:FF:FF:FF:FF:FF',
              explanation: 'All-ones MAC = Ethernet broadcast — heard by every host on the segment.' },
            { type: 'reorder-code', prompt: 'Reorder the ARP request sequence.',
              lines: [
                'Host A needs to send to IP 192.168.1.42',
                'Host A broadcasts ARP: "Who has 192.168.1.42?"',
                'Host B replies unicast: "It\'s me, here is my MAC"',
                'Host A caches the IP→MAC mapping',
                'Host A sends the actual packet using that MAC'
              ],
              correctOrder: [0,1,2,3,4],
              explanation: 'Need → ask → answer → cache → send.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — ICMP ============== */
    {
      id: 'net-u8', name: 'Unit 8 · ICMP', description: 'Ping, traceroute, and error messages',
      lessons: [
        {
          id: 'net-u8-l1', name: 'ICMP, ping, traceroute', icon: '📡', xp: 20,
          challenges: [
            { type: 'concept', title: 'ICMP carries control and error info', content: `<p><strong>ICMP</strong> (Internet Control Message Protocol) lives at Layer 3 alongside IP. It is not for application data — it is the network\'s diagnostic and error-reporting channel.</p>
<div class="code-block">Common ICMP message types:
<span class="com">Echo Request / Reply</span>           → ping
<span class="com">Time Exceeded</span>                  → TTL hit 0 (traceroute uses this!)
<span class="com">Destination Unreachable</span>        → no route / port closed
<span class="com">Redirect</span>                       → use a different gateway</div>
<p><strong>Ping</strong> sends an Echo Request and waits for an Echo Reply, measuring round-trip time:</p>
<div class="code-block"><span class="com">$</span> ping -c 3 google.com
PING google.com (142.250.190.78): 56 data bytes
64 bytes from 142.250.190.78: icmp_seq=0 ttl=117 time=12.3 ms
64 bytes from 142.250.190.78: icmp_seq=1 ttl=117 time=11.8 ms</div>
<p><strong>Traceroute</strong> is a clever hack: send packets with TTL=1, 2, 3, … Each router that decrements TTL to 0 sends back a "Time Exceeded" — revealing the path hop by hop.</p>` },
            { type: 'multiple-choice', prompt: 'Ping works by sending which ICMP message?',
              options: [{text:'Time Exceeded', code:false},{text:'Echo Request', code:false},{text:'Destination Unreachable', code:false},{text:'Redirect', code:false}],
              correct: 1, explanation: 'Echo Request → Echo Reply, with timing in between.' },
            { type: 'multiple-choice', prompt: 'Traceroute primarily relies on which ICMP message coming back?',
              options: [{text:'Echo Reply', code:false},{text:'Destination Unreachable', code:false},{text:'Time Exceeded', code:false},{text:'Source Quench', code:false}],
              correct: 2, explanation: 'Each hop decrements TTL; when it hits 0 the router returns "Time Exceeded", revealing its identity.' },
            { type: 'true-false', statement: 'ICMP runs on top of TCP.', correct: false, explanation: 'ICMP runs directly on IP (Layer 3) — no TCP or UDP underneath.' },
            { type: 'match-pairs', prompt: 'Tool → underlying ICMP type.', leftLabel: 'Tool', rightLabel: 'ICMP',
              pairs: [{left:'ping', right:'Echo Request/Reply'},{left:'traceroute', right:'Time Exceeded (TTL=0)'},{left:'firewall drop', right:'Destination Unreachable'},{left:'router hint', right:'Redirect'}] },
            { type: 'type-answer', prompt: 'Which IP header field does traceroute manipulate to reveal each hop?',
              accept: ['TTL','ttl','Time To Live','time to live'],
              explanation: 'Traceroute starts with TTL=1 and increments — each router that drops a TTL-zero packet sends back an error.' },
            { type: 'output-predict', prompt: 'A traceroute starts with what TTL value?',
              code: 'traceroute google.com',
              options: ['0','1','64','255'], correct: 1,
              explanation: 'Starts at 1, then 2, then 3 … each TTL exposes the next hop.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — TCP ============== */
    {
      id: 'net-u9', name: 'Unit 9 · TCP', description: 'Reliable, ordered, connection-oriented',
      lessons: [
        {
          id: 'net-u9-l1', name: 'The 3-way handshake', icon: '🤝', xp: 25,
          challenges: [
            { type: 'concept', title: 'TCP sets up a connection before sending data', content: `<p><strong>TCP</strong> (Transmission Control Protocol) is connection-oriented. Before any data flows, the two sides agree to talk via a <strong>three-way handshake</strong>:</p>
<div class="code-block">Client                              Server
  |  ── SYN (seq=x)              ─→   |
  |  ←─ SYN-ACK (seq=y, ack=x+1) ──   |
  |  ── ACK (ack=y+1)            ─→   |
  |                                   |
  | === connection established ===    |</div>
<p>Each side picks a random starting <strong>sequence number</strong>. From here, every byte of data is numbered, and the receiver ACKs the next byte it expects. Lost packets get retransmitted.</p>
<p>Tear-down uses a 4-way close (FIN, ACK, FIN, ACK) — both sides can close their direction independently.</p>` },
            { type: 'multiple-choice', prompt: 'How many messages in a TCP handshake?',
              options: [{text:'1', code:false},{text:'2', code:false},{text:'3', code:false},{text:'4', code:false}],
              correct: 2, explanation: 'SYN, SYN-ACK, ACK — three messages.' },
            { type: 'reorder-code', prompt: 'Order the 3-way handshake (client perspective).',
              lines: [
                'Client → SYN (seq=x)',
                'Server → SYN-ACK (seq=y, ack=x+1)',
                'Client → ACK (ack=y+1)',
                'Data starts flowing'
              ],
              correctOrder: [0,1,2,3],
              explanation: 'SYN → SYN-ACK → ACK, then data.' },
            { type: 'true-false', statement: 'TCP guarantees both reliability AND in-order delivery.', correct: true, explanation: 'Sequence numbers + ACKs + retransmits = ordered, reliable byte stream.' },
            { type: 'multiple-choice', prompt: 'If a TCP segment is lost in transit:',
              options: [{text:'It is silently dropped — application sees the gap', code:false},{text:'The sender retransmits after a timeout', code:false},{text:'The receiver requests a fresh connection', code:false},{text:'TCP falls back to UDP', code:false}],
              correct: 1, explanation: 'Missing ACK → retransmission. The app never sees the loss.' },
            { type: 'match-pairs', prompt: 'TCP feature → purpose.', leftLabel: 'Feature', rightLabel: 'Why',
              pairs: [{left:'Sequence numbers', right:'Order + dedup'},{left:'ACKs', right:'Confirm delivery'},{left:'Sliding window', right:'Flow control'},{left:'Congestion window', right:'Avoid overload'}] },
            { type: 'type-answer', prompt: 'What flag does the client set on the FIRST handshake packet?',
              accept: ['SYN','syn'], explanation: 'SYN = "synchronize sequence numbers" — opens a connection.' }
          ]
        },
        {
          id: 'net-u9-l2', name: 'Flow & congestion control', icon: '🚦', xp: 25,
          challenges: [
            { type: 'concept', title: 'Sliding window + congestion control', content: `<p>TCP balances two pressures: do not overwhelm the <strong>receiver</strong>, and do not overwhelm the <strong>network</strong>.</p>
<div class="code-block"><span class="com">Flow control</span>  — receiver advertises a "window size" in every ACK.
                 Sender keeps unACK\'d bytes ≤ window.

<span class="com">Congestion control</span> — sender tracks a congestion window (cwnd).
                  • Slow start: cwnd doubles each RTT (1, 2, 4, 8…)
                  • On loss: cut cwnd (Reno halves it; Cubic is gentler)
                  • Then linear growth ("congestion avoidance")</div>
<p>Real-world TCP variants: <strong>Reno</strong>, <strong>Cubic</strong> (Linux default), <strong>BBR</strong> (Google). They differ in HOW they react to loss / delay signals.</p>` },
            { type: 'multiple-choice', prompt: 'TCP "flow control" prevents:',
              options: [{text:'Network congestion', code:false},{text:'Overwhelming the receiver', code:false},{text:'Out-of-order delivery', code:false},{text:'Packet duplication', code:false}],
              correct: 1, explanation: 'Receiver advertises window size; sender respects it.' },
            { type: 'multiple-choice', prompt: 'During TCP "slow start", the congestion window:',
              options: [{text:'Grows linearly', code:false},{text:'Grows exponentially (doubles each RTT)', code:false},{text:'Stays constant', code:false},{text:'Shrinks until loss is detected', code:false}],
              correct: 1, explanation: '"Slow" is a misnomer — cwnd doubles every RTT until first loss.' },
            { type: 'true-false', statement: 'Sliding window allows multiple unACKed segments to be in flight.', correct: true, explanation: 'Window size = how many bytes can be unacknowledged at once.' },
            { type: 'match-pairs', prompt: 'TCP control type → mechanism.', leftLabel: 'Type', rightLabel: 'Mechanism',
              pairs: [{left:'Flow control', right:'Receiver window (rwnd)'},{left:'Congestion control', right:'Congestion window (cwnd)'},{left:'Slow start', right:'cwnd doubles per RTT'},{left:'Loss reaction', right:'Cut cwnd'}] },
            { type: 'output-predict', prompt: 'Starting cwnd=1, after 4 RTTs of slow start (no loss), cwnd =',
              code: 'RTT 0: cwnd=1\nRTT 1: cwnd=2\nRTT 2: cwnd=?\nRTT 3: cwnd=?\nRTT 4: cwnd=?',
              options: ['4','8','16','32'], correct: 2,
              explanation: 'Doubles each RTT: 1, 2, 4, 8, 16.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — UDP ============== */
    {
      id: 'net-u10', name: 'Unit 10 · UDP', description: 'Fire-and-forget datagrams',
      lessons: [
        {
          id: 'net-u10-l1', name: 'UDP & when to use it', icon: '💨', xp: 20,
          challenges: [
            { type: 'concept', title: 'Unreliable, unordered, lightweight', content: `<p><strong>UDP</strong> (User Datagram Protocol) is the opposite of TCP — no handshake, no retransmits, no ordering. Just "send this datagram and hope for the best".</p>
<div class="code-block">UDP header (only 8 bytes total!):
| Src Port (2 B) | Dst Port (2 B) | Length (2 B) | Checksum (2 B) | Payload |

vs TCP header: 20+ bytes with seq, ack, window, flags…</div>
<p>Why would you ever use it?</p>
<ul>
<li><strong>DNS</strong> — one tiny query, one tiny answer; retransmit at the app level if needed.</li>
<li><strong>DHCP</strong> — you do not even HAVE an IP yet; cannot do a TCP handshake.</li>
<li><strong>Video / VoIP / games</strong> — better to drop a late packet than to wait for a retransmit.</li>
<li><strong>QUIC / HTTP/3</strong> — uses UDP and rebuilds reliability in user space.</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Which is NOT true of UDP?',
              options: [{text:'It is connectionless', code:false},{text:'It does not guarantee delivery', code:false},{text:'It uses sequence numbers and ACKs', code:false},{text:'Its header is much smaller than TCP\'s', code:false}],
              correct: 2, explanation: 'No seq numbers, no ACKs — that is TCP. UDP just sends datagrams.' },
            { type: 'multiple-choice', prompt: 'A live video call would typically use:',
              options: [{text:'TCP — reliability matters', code:false},{text:'UDP — low latency matters more than perfect delivery', code:false},{text:'ICMP', code:false},{text:'ARP', code:false}],
              correct: 1, explanation: 'For live media, retransmitting a 300 ms-late frame is useless — better to drop it.' },
            { type: 'true-false', statement: 'DNS queries traditionally use UDP on port 53.', correct: true, explanation: 'Small query, small reply, retry at the app level — UDP fits perfectly.' },
            { type: 'match-pairs', prompt: 'Protocol → typical transport.', leftLabel: 'Protocol', rightLabel: 'Transport',
              pairs: [{left:'HTTP', right:'TCP'},{left:'DNS', right:'UDP (usually)'},{left:'DHCP', right:'UDP'},{left:'SSH', right:'TCP'}] },
            { type: 'type-answer', prompt: 'How many bytes is the UDP header (total)?',
              accept: ['8','8 bytes'], explanation: '4 fields × 2 bytes each = 8 bytes total. Tiny!' },
            { type: 'output-predict', prompt: 'Compared to TCP, UDP has ___ overhead per packet.',
              code: 'UDP header = 8 B\nTCP header = 20+ B',
              options: ['more','same','less','depends'], correct: 2,
              explanation: 'UDP\'s 8-byte header is much smaller than TCP\'s 20+ bytes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Ports & Sockets ============== */
    {
      id: 'net-u11', name: 'Unit 11 · Ports & sockets', description: 'How a host multiplexes many connections',
      lessons: [
        {
          id: 'net-u11-l1', name: 'Ports, well-known & ephemeral', icon: '🔢', xp: 20,
          challenges: [
            { type: 'concept', title: 'IP gets you to a host; port gets you to a process', content: `<p>An IP address points to a <strong>machine</strong>. But that machine might run 50 services. A <strong>port</strong> (16-bit number, 0–65535) picks the specific process.</p>
<div class="code-block"><span class="com">Well-known</span>   0–1023      assigned (HTTP 80, SSH 22, DNS 53…)
<span class="com">Registered</span>   1024–49151  vendor-claimed (MySQL 3306, Redis 6379…)
<span class="com">Dynamic / Ephemeral</span> 49152–65535  client-side, per-connection

<span class="com">A socket</span> = (IP, port, protocol) — uniquely identifies an endpoint.
<span class="com">A connection</span> = (src IP, src port, dst IP, dst port) 4-tuple.</div>
<p>When your browser opens 6 connections to <code>example.com:443</code>, your OS allocates 6 DIFFERENT ephemeral source ports — that is what keeps the streams separate.</p>` },
            { type: 'multiple-choice', prompt: 'How many possible ports are there?',
              options: [{text:'256', code:false},{text:'1024', code:false},{text:'65536', code:false},{text:'4 billion', code:false}],
              correct: 2, explanation: '16-bit field → 2^16 = 65,536 ports (0–65535).' },
            { type: 'match-pairs', prompt: 'Match service → well-known port.', leftLabel: 'Service', rightLabel: 'Port',
              pairs: [{left:'HTTP', right:'80'},{left:'HTTPS', right:'443'},{left:'SSH', right:'22'},{left:'DNS', right:'53'}] },
            { type: 'type-answer', prompt: 'What is the well-known port for HTTPS?',
              accept: ['443'], explanation: 'HTTP = 80, HTTPS = 443.' },
            { type: 'true-false', statement: 'A TCP connection is uniquely identified by the 4-tuple (src IP, src port, dst IP, dst port).', correct: true, explanation: 'Two browsers on the same host can both talk to :443 of the same server — they differ only by source port.' },
            { type: 'multiple-choice', prompt: 'Ephemeral ports are typically:',
              options: [{text:'0–1023', code:false},{text:'1024–49151', code:false},{text:'49152–65535', code:false},{text:'80 and 443 only', code:false}],
              correct: 2, explanation: 'High range, dynamically allocated for the client side of a connection.' },
            { type: 'output-predict', prompt: 'How many ports are in the well-known range?',
              code: 'Well-known range: 0–1023',
              options: ['1023','1024','2048','65536'], correct: 1,
              explanation: '0 through 1023 inclusive = 1024 ports.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — DNS ============== */
    {
      id: 'net-u12', name: 'Unit 12 · DNS', description: 'Names to numbers',
      lessons: [
        {
          id: 'net-u12-l1', name: 'How DNS resolves a name', icon: '📘', xp: 25,
          challenges: [
            { type: 'concept', title: 'The Internet\'s phone book', content: `<p><strong>DNS</strong> (Domain Name System) translates human names like <code>www.example.com</code> into IP addresses like <code>93.184.216.34</code>.</p>
<p>A typical lookup involves a chain of servers:</p>
<div class="code-block"><span class="com">1.</span> Browser asks the OS stub resolver.
<span class="com">2.</span> Stub asks the <strong>recursive resolver</strong> (often your ISP or 1.1.1.1).
<span class="com">3.</span> Recursive asks the <strong>root</strong> servers      ("who knows .com?")
<span class="com">4.</span> Then the <strong>.com TLD</strong> servers   ("who knows example.com?")
<span class="com">5.</span> Then the <strong>authoritative</strong> server for example.com.
<span class="com">6.</span> Authoritative answers "93.184.216.34", TTL = 300 seconds.
<span class="com">7.</span> Recursive caches the answer and returns it to you.</div>
<p>Without caching, every Google search would hammer the root servers. With caching, most lookups stop at step 2.</p>` },
            { type: 'multiple-choice', prompt: 'DNS primarily translates:',
              options: [{text:'IP addresses to MACs', code:false},{text:'Domain names to IP addresses', code:false},{text:'Port numbers to services', code:false},{text:'IPv4 to IPv6', code:false}],
              correct: 1, explanation: 'Names → numbers. The Internet\'s phone book.' },
            { type: 'multiple-choice', prompt: 'Which server type does the actual final answer for a zone come from?',
              options: [{text:'Recursive resolver', code:false},{text:'Root server', code:false},{text:'TLD server', code:false},{text:'Authoritative server', code:false}],
              correct: 3, explanation: 'Only the zone\'s authoritative servers hold the real records.' },
            { type: 'match-pairs', prompt: 'DNS record → purpose.', leftLabel: 'Record', rightLabel: 'Holds',
              pairs: [{left:'A', right:'IPv4 address'},{left:'AAAA', right:'IPv6 address'},{left:'MX', right:'Mail server'},{left:'CNAME', right:'Alias to another name'}] },
            { type: 'true-false', statement: 'DNS responses include a TTL telling caches how long to keep the answer.', correct: true, explanation: 'TTL (in seconds) bounds how stale a cached answer can be.' },
            { type: 'type-answer', prompt: 'Which DNS record type maps a name to an IPv6 address?',
              accept: ['AAAA','aaaa','quad A','quad-a'],
              explanation: 'AAAA ("quad-A") — the IPv6 cousin of A.' },
            { type: 'reorder-code', prompt: 'Order the DNS resolution chain (typical first lookup).',
              lines: [
                'Browser asks OS stub resolver',
                'Stub asks recursive resolver',
                'Recursive asks root servers',
                'Recursive asks .com TLD servers',
                'Recursive asks example.com authoritative server',
                'Recursive caches and returns answer'
              ],
              correctOrder: [0,1,2,3,4,5],
              explanation: 'Browser → stub → recursive → root → TLD → authoritative → back down.' },
            { type: 'multiple-choice', prompt: 'A TXT record is commonly used for:',
              options: [{text:'IPv4 mapping', code:false},{text:'Mail server priority', code:false},{text:'Arbitrary text (SPF, domain verification)', code:false},{text:'CDN aliasing', code:false}],
              correct: 2, explanation: 'TXT holds free-form text — SPF, DKIM, and "prove you own this domain" tokens use it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — HTTP/HTTPS ============== */
    {
      id: 'net-u13', name: 'Unit 13 · HTTP & HTTPS', description: 'The protocol of the web',
      lessons: [
        {
          id: 'net-u13-l1', name: 'HTTP request/response', icon: '📨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Text-based, request/response, stateless', content: `<p><strong>HTTP</strong> is the application-layer protocol of the web. A client sends a <em>request</em>, the server sends a <em>response</em>, then (in HTTP/1.0) the connection closes.</p>
<div class="code-block"><span class="com">Request</span>
GET /users/42 HTTP/1.1
Host: api.example.com
Accept: application/json

<span class="com">Response</span>
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 27

{"id":42,"name":"Ada"}</div>
<p>Key parts of a request: <strong>method</strong> (GET, POST, PUT, DELETE, PATCH), <strong>path</strong>, <strong>headers</strong>, optional <strong>body</strong>. Response carries a <strong>status code</strong> + headers + body.</p>
<div class="code-block">1xx — Informational    (rare)
2xx — Success         (200 OK, 201 Created, 204 No Content)
3xx — Redirection     (301 Moved, 304 Not Modified)
4xx — Client error    (400 Bad Request, 401, 403, 404)
5xx — Server error    (500, 502, 503, 504)</div>` },
            { type: 'multiple-choice', prompt: '<code>404 Not Found</code> means:',
              options: [{text:'Server crashed', code:false},{text:'The requested resource does not exist', code:false},{text:'You are not authenticated', code:false},{text:'The upstream server timed out', code:false}],
              correct: 1, explanation: '404 = client asked for something that does not exist.' },
            { type: 'match-pairs', prompt: 'Status code → category.', leftLabel: 'Code', rightLabel: 'Means',
              pairs: [{left:'200', right:'Success'},{left:'301', right:'Permanent redirect'},{left:'401', right:'Unauthorized'},{left:'502', right:'Bad gateway'}] },
            { type: 'multiple-choice', prompt: 'Which HTTP method is the conventional choice for CREATING a resource?',
              options: [{text:'GET', code:false},{text:'POST', code:false},{text:'DELETE', code:false},{text:'HEAD', code:false}],
              correct: 1, explanation: 'POST conventionally creates; PUT replaces; PATCH partially updates.' },
            { type: 'true-false', statement: 'HTTPS is just HTTP wrapped inside a TLS-encrypted connection.', correct: true, explanation: 'Same HTTP — but the TCP stream beneath is encrypted by TLS.' },
            { type: 'type-answer', prompt: 'What HTTP status code means "I have no current representation; nothing to send back"?',
              accept: ['204','204 No Content'], explanation: '204 = success but empty body — common after a PUT/DELETE.' },
            { type: 'tap-tokens', prompt: 'Build a minimal HTTP request line.',
              tokens: ['GET','POST','/index.html','HTTP/1.1','HTTP/2','Host:','example.com'],
              correctOrder: ['GET','/index.html','HTTP/1.1'],
              explanation: 'method · path · version — separated by spaces.' }
          ]
        },
        {
          id: 'net-u13-l2', name: 'HTTP/1.1 → HTTP/2 → HTTP/3', icon: '🚀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Each version solved the previous version\'s pain', content: `<div class="code-block"><span class="com">HTTP/1.1 (1997)</span>
  Text-based.  One request at a time per TCP connection.
  Workaround: open many parallel connections (browsers cap at 6).

<span class="com">HTTP/2 (2015)</span>
  Binary framing.  Multiplexing — many streams over one TCP conn.
  Header compression (HPACK).  Still over TCP — head-of-line blocking.

<span class="com">HTTP/3 (2022) — uses QUIC over UDP</span>
  Streams independent, so one lost packet does not block others.
  Faster handshake (TLS folded into the transport handshake).
  Better on mobile / lossy networks.</div>` },
            { type: 'multiple-choice', prompt: 'HTTP/3 runs on top of:',
              options: [{text:'TCP', code:false},{text:'UDP (via QUIC)', code:false},{text:'ICMP', code:false},{text:'Raw IP', code:false}],
              correct: 1, explanation: 'QUIC is a new transport that rides on UDP; HTTP/3 is QUIC + HTTP semantics.' },
            { type: 'multiple-choice', prompt: 'Which feature was NEW in HTTP/2?',
              options: [{text:'Cookies', code:false},{text:'Multiplexing many streams over one connection', code:false},{text:'JSON support', code:false},{text:'URL encoding', code:false}],
              correct: 1, explanation: 'HTTP/2\'s headline feature: many concurrent streams sharing one TCP connection.' },
            { type: 'true-false', statement: 'HTTP/2 is binary, while HTTP/1.1 is text.', correct: true, explanation: 'HTTP/2 introduced a binary framing layer — easier to parse, less ambiguous.' },
            { type: 'match-pairs', prompt: 'Version → key feature.', leftLabel: 'Version', rightLabel: 'Feature',
              pairs: [{left:'HTTP/1.1', right:'Text, one req at a time'},{left:'HTTP/2', right:'Multiplexed binary streams'},{left:'HTTP/3', right:'QUIC over UDP'},{left:'HTTPS', right:'TLS encryption'}] },
            { type: 'type-answer', prompt: 'What transport protocol does QUIC build on?',
              accept: ['UDP','udp'], explanation: 'QUIC uses UDP so it can innovate without kernel TCP changes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Routing ============== */
    {
      id: 'net-u14', name: 'Unit 14 · Routing', description: 'How packets find their way',
      lessons: [
        {
          id: 'net-u14-l1', name: 'Static vs dynamic routing', icon: '🧭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Routers pick the next hop using a routing table', content: `<p>A <strong>router</strong> sits at the boundary of networks and forwards packets toward their destination. Each router consults a <strong>routing table</strong>: for each destination network, which neighbor (next hop) should I send to?</p>
<div class="code-block"><span class="com">Static routes</span>   — hand-configured. Simple, but does not adapt.
<span class="com">Dynamic routing</span> — routers gossip; tables update automatically.</div>
<p>Dynamic protocols come in two flavors:</p>
<div class="code-block"><span class="com">Interior</span> (within one organization / AS):
  <span class="kw">RIP</span>   — distance-vector, hop count, simple/old
  <span class="kw">OSPF</span>  — link-state, builds full topology map
  <span class="kw">EIGRP</span> — Cisco hybrid

<span class="com">Exterior</span> (between Autonomous Systems):
  <span class="kw">BGP</span>   — path-vector, the protocol that runs the Internet</div>
<p>An <strong>Autonomous System (AS)</strong> is one administrative network — Google is AS15169, Cloudflare is AS13335. BGP is how ASes tell each other "I can reach prefix X via this path of ASes."</p>` },
            { type: 'multiple-choice', prompt: 'Which protocol runs between organizations on the Internet backbone?',
              options: [{text:'RIP', code:false},{text:'OSPF', code:false},{text:'BGP', code:false},{text:'ARP', code:false}],
              correct: 2, explanation: 'BGP is THE inter-AS routing protocol — it stitches the Internet together.' },
            { type: 'multiple-choice', prompt: 'OSPF is a:',
              options: [{text:'Distance-vector protocol (hop count)', code:false},{text:'Link-state protocol (full topology)', code:false},{text:'Path-vector protocol (AS path)', code:false},{text:'Static configuration protocol', code:false}],
              correct: 1, explanation: 'OSPF floods link-state advertisements and each router computes shortest paths.' },
            { type: 'true-false', statement: 'An Autonomous System Number (ASN) uniquely identifies one administrative network on the Internet.', correct: true, explanation: 'IANA hands them out; e.g., Google = AS15169.' },
            { type: 'match-pairs', prompt: 'Protocol → scope.', leftLabel: 'Protocol', rightLabel: 'Scope',
              pairs: [{left:'RIP', right:'Interior (small)'},{left:'OSPF', right:'Interior (large)'},{left:'BGP', right:'Between ASes'},{left:'Static route', right:'Hand-configured'}] },
            { type: 'multiple-choice', prompt: 'A "static route" is best for:',
              options: [{text:'Large Internet backbones', code:false},{text:'Small fixed networks where paths rarely change', code:false},{text:'Multicast streaming', code:false},{text:'Dynamic VPN failover', code:false}],
              correct: 1, explanation: 'Static = simple but rigid. Fine for small, stable setups.' },
            { type: 'type-answer', prompt: 'What is the maximum hop count in RIP?',
              accept: ['15'], explanation: 'RIP caps at 15 hops; 16 means "unreachable". That is why it does not scale.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — NAT, DHCP, VLANs ============== */
    {
      id: 'net-u15', name: 'Unit 15 · NAT, DHCP, VLANs', description: 'Practical network admin building blocks',
      lessons: [
        {
          id: 'net-u15-l1', name: 'NAT & DHCP', icon: '🏠', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two essentials your home router runs', content: `<p><strong>NAT</strong> (Network Address Translation) lets many devices behind one public IP share that single IP. Your router rewrites source IP+port on the way out, and remembers the mapping to rewrite replies on the way back.</p>
<div class="code-block">Inside (private)             Router (NAT)           Outside (public)
192.168.1.5:54321  ─→  rewrites to 73.10.4.7:60123  ─→  example.com:443
                       (keeps a mapping table)

Reply comes back → router looks up 60123 → forwards to 192.168.1.5:54321</div>
<p><strong>DHCP</strong> (Dynamic Host Configuration Protocol) assigns IP addresses to new devices automatically. The handshake is <strong>DORA</strong>:</p>
<div class="code-block"><span class="com">D</span>iscover  — client broadcasts "any DHCP server out there?"
<span class="com">O</span>ffer     — server proposes an IP + subnet + gateway + DNS
<span class="com">R</span>equest   — client accepts that offer
<span class="com">A</span>ck       — server confirms and leases the IP for some time</div>` },
            { type: 'multiple-choice', prompt: 'NAT lets:',
              options: [{text:'One private device use multiple public IPs', code:false},{text:'Many private devices share one public IP', code:false},{text:'Routers act like switches', code:false},{text:'IPv4 and IPv6 hosts talk natively', code:false}],
              correct: 1, explanation: 'NAT was created to extend the IPv4 address pool by sharing one public IP across many devices.' },
            { type: 'multiple-choice', prompt: 'The DHCP handshake is commonly remembered as:',
              options: [{text:'SYN, SYN-ACK, ACK', code:false},{text:'Discover, Offer, Request, Ack (DORA)', code:false},{text:'Hello, Update, Bye', code:false},{text:'GET, POST, PUT, DELETE', code:false}],
              correct: 1, explanation: 'DORA: Discover → Offer → Request → Ack.' },
            { type: 'true-false', statement: 'A DHCP-leased IP is yours forever; it never expires.', correct: false, explanation: 'Leases expire (often hours/days) — the client renews; otherwise the IP returns to the pool.' },
            { type: 'reorder-code', prompt: 'Order the DHCP DORA handshake.',
              lines: [
                'Client broadcasts DHCP Discover',
                'Server replies with DHCP Offer',
                'Client sends DHCP Request',
                'Server confirms with DHCP Ack'
              ],
              correctOrder: [0,1,2,3],
              explanation: 'Discover, Offer, Request, Ack.' },
            { type: 'match-pairs', prompt: 'Mechanism → purpose.', leftLabel: 'Mechanism', rightLabel: 'Why',
              pairs: [{left:'NAT', right:'Share one public IP'},{left:'DHCP', right:'Auto-assign IPs'},{left:'VLAN', right:'Split a switch into virtual LANs'},{left:'DNS', right:'Names → IPs'}] },
            { type: 'type-answer', prompt: 'What does NAT stand for? (Three words)',
              accept: ['Network Address Translation','network address translation','NAT'],
              explanation: 'Network Address Translation — the router translates private↔public addresses (and often ports).' }
          ]
        },
        {
          id: 'net-u15-l2', name: 'VLANs', icon: '🪪', xp: 20,
          challenges: [
            { type: 'concept', title: 'One physical switch, many logical LANs', content: `<p>A <strong>VLAN</strong> (Virtual LAN) lets a single switch behave like several independent switches. Ports are tagged with a VLAN ID; traffic on VLAN 10 cannot reach VLAN 20 without going through a router.</p>
<div class="code-block">Physical switch (24 ports)
 ├─ Ports  1–8   → VLAN 10 (Engineering)
 ├─ Ports  9–16  → VLAN 20 (Finance)
 └─ Ports 17–24  → VLAN 30 (Guest WiFi)

Each VLAN is its own broadcast domain — like 3 separate LANs in one box.</div>
<p>VLAN tags use IEEE 802.1Q — a 4-byte tag inserted into the Ethernet frame, carrying a 12-bit VLAN ID (so up to 4094 usable VLANs).</p>
<p>Common uses: segment guest WiFi from corporate, isolate VoIP traffic for QoS, or split a multi-tenant office without buying separate switches.</p>` },
            { type: 'multiple-choice', prompt: 'A VLAN primarily provides:',
              options: [{text:'Higher physical bandwidth', code:false},{text:'Logical segmentation of one switch into separate broadcast domains', code:false},{text:'Encryption between devices', code:false},{text:'IP-to-MAC resolution', code:false}],
              correct: 1, explanation: 'VLANs split one switch into many isolated logical LANs.' },
            { type: 'multiple-choice', prompt: 'Which standard defines VLAN tagging in Ethernet frames?',
              options: [{text:'802.3', code:false},{text:'802.11', code:false},{text:'802.1Q', code:false},{text:'802.1X', code:false}],
              correct: 2, explanation: '802.1Q inserts a 4-byte VLAN tag into the Ethernet frame.' },
            { type: 'true-false', statement: 'Devices in different VLANs can talk to each other without going through a router.', correct: false, explanation: 'Different VLANs = different broadcast domains = need Layer-3 routing between them.' },
            { type: 'type-answer', prompt: 'How many bits is a VLAN ID in 802.1Q?',
              accept: ['12','12 bits'], explanation: '12 bits → up to 4096 VLAN IDs (0 and 4095 reserved → 4094 usable).' },
            { type: 'output-predict', prompt: 'How many bytes does the 802.1Q VLAN tag add to an Ethernet frame?',
              code: '| Dest MAC | Src MAC | [802.1Q tag] | Type | Payload | CRC |',
              options: ['2','4','6','8'], correct: 1,
              explanation: 'The full 802.1Q tag (including TPID) is 4 bytes.' },
            { type: 'match-pairs', prompt: 'Term → meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [{left:'Access port', right:'Carries one VLAN, untagged'},{left:'Trunk port', right:'Carries many VLANs, tagged'},{left:'Native VLAN', right:'Untagged VLAN on a trunk'},{left:'VLAN ID', right:'12-bit number 1–4094'}] }
          ]
        }
      ]
    }

  ]
});

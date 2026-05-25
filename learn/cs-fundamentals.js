LEARN('cs-fundamentals', {
  intro: 'Core computer science theory — the parts that don\'t change with the framework du jour. Number systems, digital logic, architecture, automata, complexity, compilers, and software engineering.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'csf-c1',
      title: 'Number systems & representation',
      icon: '🔢',
      sections: [
        { type: 'heading', text: 'Why computers count in 2s', level: 1 },
        { type: 'para', html: 'Everything in a computer is, at the bottom, a pattern of <strong>bits</strong> — tiny voltages that are either "high" (1) or "low" (0). Integers, text, images, audio, your selfies: all bit patterns interpreted in some agreed-upon way.' },
        { type: 'para', html: 'Two-state electronics are easy to build, easy to keep reliable, and easy to copy without distortion. So computers do all their arithmetic in <strong>base 2</strong> — binary.' },

        { type: 'heading', text: 'Bases — base 10, base 2, base 16', level: 2 },
        { type: 'para', html: 'A number\'s value is positional: each position is a power of the base. In base 10, "234" means <code>2·100 + 3·10 + 4·1</code>. In base 2, "1011" means <code>1·8 + 0·4 + 1·2 + 1·1 = 11</code>.' },
        { type: 'code', lang: 'text', code: `Position weights:
  binary:   ... 32  16   8   4   2   1
  hex:      ... 256 16   1
  decimal:  ... 100 10   1

13 in different bases:
  decimal = 13
  binary  = 1101    (8 + 4 + 0 + 1)
  hex     = D       (one hex digit covers 0..15)
  octal   = 15      (1*8 + 5)` },

        { type: 'callout', kind: 'tip', html: '<strong>Hex shortcut:</strong> one hex digit = exactly 4 bits. So a byte (8 bits) is exactly 2 hex digits — that\'s why memory addresses are usually printed in hex (<code>0xCAFEBABE</code>).' },

        { type: 'heading', text: 'Signed integers — two\'s complement', level: 2 },
        { type: 'para', html: 'For unsigned numbers, an N-bit integer holds values from <code>0</code> to <code>2^N - 1</code>. For signed, computers almost universally use <strong>two\'s complement</strong>, in which the high bit acts as a sign and negatives are encoded so addition "just works" using the same circuitry.' },
        { type: 'code', lang: 'text', code: `8-bit two's complement:
   0000 0000   →   0
   0000 0001   →  +1
   0111 1111   → +127
   1000 0000   → -128   ← MSB = sign bit
   1111 1111   →  -1

To negate x: invert all bits, then add 1.

Example for -5:
  +5  = 0000 0101
  ~+5 = 1111 1010
  +1  = 1111 1011  ← -5

Range for N bits: -2^(N-1) to +2^(N-1) - 1` },
        { type: 'callout', kind: 'info', html: 'Two\'s complement has only one zero (no separate <code>+0</code> and <code>-0</code>), and ordinary binary addition works for signed numbers without any special case. That\'s why we use it.' },

        { type: 'heading', text: 'Floating point — IEEE 754', level: 2 },
        { type: 'para', html: 'Real numbers are stored in scientific notation, but in binary. A 32-bit IEEE 754 <strong>float</strong> uses:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>1 sign bit</strong> — 0 for positive, 1 for negative',
          '<strong>8 exponent bits</strong> — scale (with a bias of 127 so it can be positive or negative)',
          '<strong>23 mantissa bits</strong> — the significant digits'
        ] },
        { type: 'code', lang: 'text', code: `value = (-1)^sign × 1.mantissa × 2^(exponent - 127)

Special encodings:
  ±0    — exponent = 0,   mantissa = 0
  ±∞    — exponent = 255, mantissa = 0
  NaN   — exponent = 255, mantissa ≠ 0
  subnormal — exponent = 0, mantissa ≠ 0 (fills the gap near 0)` },

        { type: 'callout', kind: 'warn', html: '<strong>0.1 + 0.2 ≠ 0.3</strong> in almost every language. Why? 0.1 has no exact binary representation (just like 1/3 has no exact decimal one). The stored values round, the sum rounds again — and you get 0.30000000000000004.' },

        { type: 'heading', text: 'Characters — ASCII, Unicode, UTF-8', level: 2 },
        { type: 'para', html: 'Text is also bits. <strong>ASCII</strong> assigns codes 0–127 to English characters. <strong>Unicode</strong> assigns a number ("code point") to every character in every script. <strong>UTF-8</strong> is the variable-length encoding that stores Unicode code points as 1–4 bytes (with ASCII as a clean subset).' },

        { type: 'callout', kind: 'tip', html: 'Strings have lengths in bytes, in code units, and in code points — and they can all differ! "Naïve" is 6 code points but 7 bytes in UTF-8.' }
      ]
    },

    /* ============ Chapter 2 ============ */
    {
      id: 'csf-c2',
      title: 'Boolean algebra & logic gates',
      icon: '🔌',
      sections: [
        { type: 'heading', text: 'Logic, built from gates', level: 1 },
        { type: 'para', html: 'Every digital circuit — from the simplest adder to a full CPU — is built from a tiny set of <strong>logic gates</strong>. Each gate takes 1-bit inputs and returns 1 bit. Their behavior is fully captured by a <strong>truth table</strong>.' },

        { type: 'heading', text: 'The basic gates', level: 2 },
        { type: 'code', lang: 'text', code: `A B │ AND   OR   XOR   NAND   NOR   XNOR
0 0 │  0    0    0     1     1     1
0 1 │  0    1    1     1     0     0
1 0 │  0    1    1     1     0     0
1 1 │  1    1    0     0     0     1

NOT A: flips a single bit (0 → 1, 1 → 0)` },
        { type: 'list', kind: 'check', items: [
          '<strong>AND</strong> — output 1 only if BOTH inputs are 1',
          '<strong>OR</strong> — output 1 if AT LEAST ONE input is 1',
          '<strong>XOR</strong> — output 1 if inputs DIFFER (exactly one is 1)',
          '<strong>NAND / NOR</strong> — the negations of AND and OR. Either is <em>universal</em>: you can build every other gate from just NANDs, or just NORs.'
        ] },

        { type: 'heading', text: 'Boolean algebra laws', level: 2 },
        { type: 'code', lang: 'text', code: `Identity:      A + 0 = A           A · 1 = A
Annihilator:   A + 1 = 1           A · 0 = 0
Idempotent:    A + A = A           A · A = A
Complement:    A + A' = 1          A · A' = 0
Double neg.:   (A')' = A
Commutative:   A + B = B + A       A · B = B · A
Associative:   (A+B)+C = A+(B+C)
Distributive:  A·(B+C) = A·B + A·C
Absorption:    A + A·B = A
De Morgan:     (A · B)' = A' + B'
               (A + B)' = A' · B'` },
        { type: 'callout', kind: 'tip', html: '<strong>De Morgan</strong> is the swiss-army knife: it lets you push a NOT through and-or expressions. "Not (raining AND cold)" = "not raining OR not cold."' },

        { type: 'heading', text: 'Karnaugh maps (K-maps)', level: 2 },
        { type: 'para', html: 'A K-map is a clever rearrangement of a truth table so that adjacent cells differ in exactly one input variable. Group adjacent 1s in rectangles of size 1, 2, 4, 8, ... and read the simplified expression off the grid.' },
        { type: 'image', alt: 'K-map example for F = AB + A\'B',
          svg: `<svg viewBox="0 0 540 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.bg{fill:#f8fafc}.lbl{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;font-weight:700}.cell{fill:#fff;stroke:#475569;stroke-width:1.5}.cell1{fill:#fef3c7;stroke:#92400e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:16px;fill:#0f172a;text-anchor:middle}.title{font-family:Inter,sans-serif;font-size:18px;fill:#0f172a;font-weight:700;text-anchor:middle}.grp{fill:none;stroke:#dc2626;stroke-width:3;rx:8}</style>
</defs>
<rect width="540" height="260" class="bg"/>
<text x="270" y="28" class="title">2-variable K-map · F = A'B + AB = B</text>
<text x="100" y="80" class="lbl">A \\ B</text>
<text x="200" y="80" class="lbl" text-anchor="middle">0</text>
<text x="290" y="80" class="lbl" text-anchor="middle">1</text>
<text x="120" y="120" class="lbl">0</text>
<text x="120" y="180" class="lbl">1</text>
<rect x="160" y="90" width="80" height="50" class="cell"/>
<text x="200" y="121" class="t">0</text>
<rect x="250" y="90" width="80" height="50" class="cell1"/>
<text x="290" y="121" class="t">1</text>
<rect x="160" y="150" width="80" height="50" class="cell"/>
<text x="200" y="181" class="t">0</text>
<rect x="250" y="150" width="80" height="50" class="cell1"/>
<text x="290" y="181" class="t">1</text>
<rect x="245" y="85" width="90" height="120" class="grp" rx="10"/>
<text x="380" y="135" class="lbl">Group of two 1s</text>
<text x="380" y="155" class="lbl">in column B = 1</text>
<text x="380" y="180" class="lbl" fill="#dc2626">⇒ F = B</text>
</svg>` },

        { type: 'para', html: 'Larger K-maps (3 and 4 variables) use Gray-code labeling so adjacency wraps around the edges. The same rule applies: bigger groups → simpler terms.' },

        { type: 'heading', text: 'From algebra to circuit', level: 2 },
        { type: 'para', html: 'Every truth table can be expressed as a sum of products (write a product term for each row that outputs 1, OR them together). Simplification reduces the gate count — and historically, that\'s what makes chips small and fast.' }
      ]
    },

    /* ============ Chapter 3 ============ */
    {
      id: 'csf-c3',
      title: 'Combinational & sequential circuits',
      icon: '⚙️',
      sections: [
        { type: 'heading', text: 'Two kinds of circuits', level: 1 },
        { type: 'para', html: 'A circuit is <strong>combinational</strong> if its outputs depend only on its current inputs — no memory. Add memory and you get a <strong>sequential</strong> circuit, which can react to its own history.' },

        { type: 'heading', text: 'Combinational building blocks', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Half adder</strong> — adds two bits. Sum = A XOR B, Carry = A AND B.',
          '<strong>Full adder</strong> — adds three bits (A, B, Cin) and produces a sum + carry-out. Chain N of them → an N-bit ripple-carry adder.',
          '<strong>Multiplexer (MUX)</strong> — <code>2^n</code> data inputs + <code>n</code> select lines → 1 output. "Pick one."',
          '<strong>Decoder</strong> — <code>n</code> inputs → <code>2^n</code> outputs, exactly one active. "Light one wire."',
          '<strong>Comparator</strong> — outputs whether A=B, A&lt;B, A&gt;B.'
        ] },
        { type: 'code', lang: 'text', code: `1-bit full adder

   A  B  Cin │ Sum  Cout
   0  0   0  │  0    0
   0  0   1  │  1    0
   0  1   0  │  1    0
   0  1   1  │  0    1
   1  0   0  │  1    0
   1  0   1  │  0    1
   1  1   0  │  0    1
   1  1   1  │  1    1

Sum  = A XOR B XOR Cin
Cout = (A AND B) OR (Cin AND (A XOR B))` },

        { type: 'heading', text: 'Memory: the flip-flop', level: 2 },
        { type: 'para', html: 'A <strong>flip-flop</strong> is one bit of storage. The most common is the <strong>D flip-flop</strong>: on each clock edge, it copies its <code>D</code> input to its output. Wire N of them to a shared clock and you have an N-bit <strong>register</strong>.' },
        { type: 'list', kind: 'check', items: [
          '<strong>SR latch</strong> — Set, Reset, Hold (the granddaddy)',
          '<strong>D flip-flop</strong> — stores data; most common',
          '<strong>JK flip-flop</strong> — toggles when both inputs are 1',
          '<strong>T flip-flop</strong> — toggles every pulse; used for counters'
        ] },
        { type: 'callout', kind: 'tip', html: 'A CPU is just registers (state) + combinational logic (the "next state" function), all wrapped around a clock. The clock keeps everyone moving in lockstep.' },

        { type: 'heading', text: 'Finite-state machines in hardware', level: 2 },
        { type: 'para', html: 'A sequential circuit IS a finite-state machine. The current values of its flip-flops are the state; the combinational logic computes "given this state and these inputs, what state next, and what outputs?". Two flavors: <strong>Moore</strong> (output depends only on state) and <strong>Mealy</strong> (output also depends on inputs).' }
      ]
    },

    /* ============ Chapter 4 ============ */
    {
      id: 'csf-c4',
      title: 'Computer architecture',
      icon: '🖥️',
      sections: [
        { type: 'heading', text: 'Inside the CPU', level: 1 },
        { type: 'para', html: 'A <strong>CPU</strong> is a tightly choreographed dance of registers, an ALU, a control unit, and the buses connecting them all to memory. Two classical organizations:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Von Neumann</strong> — one memory holds BOTH instructions and data, served on one bus. Simple, but creates the "von Neumann bottleneck" (CPU stalls waiting on memory).',
          '<strong>Harvard</strong> — separate memories and buses for code vs. data. Lets fetch and load/store happen in parallel. Used in DSPs and microcontrollers.',
          '<strong>Modified Harvard</strong> — split L1 caches (one for code, one for data), unified beyond that. What most modern CPUs actually do.'
        ] },

        { type: 'heading', text: 'The CPU\'s core components', level: 2 },
        { type: 'code', lang: 'text', code: `┌─────────────── CPU ────────────────┐
│  ┌──────────┐    ┌──────────────┐   │
│  │   ALU    │    │   Registers  │   │
│  │ add, sub │◄──►│  R0..R31, PC │   │
│  │ AND, OR  │    │       IR     │   │
│  └────┬─────┘    └───────┬──────┘   │
│       │                  │          │
│  ┌────▼──────────────────▼──────┐   │
│  │      Control unit (CU)       │   │
│  │ decodes opcodes → signals    │   │
│  └────┬─────────────────────────┘   │
└───────┼─────────────────────────────┘
        │ address / data / control buses
        ▼
       Memory` },
        { type: 'list', kind: 'check', items: [
          '<strong>ALU</strong> — the math/logic unit',
          '<strong>Registers</strong> — fastest storage in the machine. Includes general-purpose, PC (next instruction address), and IR (current instruction)',
          '<strong>Control unit</strong> — reads the instruction and generates the signals that tell each block what to do',
          '<strong>Buses</strong> — wires: address, data, control'
        ] },

        { type: 'heading', text: 'Fetch · Decode · Execute · Writeback', level: 2 },
        { type: 'para', html: 'No matter the ISA, the basic cycle is the same:' },
        { type: 'code', lang: 'text', code: `loop forever:
  1. FETCH      load memory[PC] into IR; PC ← PC + 4
  2. DECODE     determine opcode, operands, destination
  3. EXECUTE    perform ALU op, address calc, branch decision
  4. MEMORY     if a load or store, access data memory
  5. WRITEBACK  put result into the destination register` },

        { type: 'callout', kind: 'info', html: '"Microarchitecture" is HOW the CPU implements its ISA — pipelines, caches, branch predictors, etc. The ISA is the visible contract; the microarchitecture is the optimization underneath.' },

        { type: 'heading', text: 'I/O and interrupts', level: 2 },
        { type: 'para', html: 'CPUs interact with the outside world through <strong>memory-mapped I/O</strong> (a device\'s registers appear at certain memory addresses) and <strong>interrupts</strong> (a hardware signal that pauses the current code and jumps to a handler). Without interrupts, every input would need polling — burning cycles checking "is anything there yet?"' }
      ]
    },

    /* ============ Chapter 5 ============ */
    {
      id: 'csf-c5',
      title: 'Memory hierarchy',
      icon: '🧠',
      sections: [
        { type: 'heading', text: 'Why a pyramid?', level: 1 },
        { type: 'para', html: 'Designers want memory that is huge, cheap, AND fast — physics says you can pick about two. The compromise is a <strong>hierarchy</strong>: a small amount of very fast memory close to the CPU, backed by progressively larger and slower layers.' },

        { type: 'image', alt: 'Memory hierarchy pyramid',
          svg: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;font-weight:700}.ti{font-family:Inter,sans-serif;font-size:12px;fill:#475569}.title{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}</style>
</defs>
<text x="350" y="26" class="title">Memory hierarchy — closer is faster, smaller, costlier</text>
<polygon points="330,50 370,50 380,80 320,80" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="350" y="73" class="tb" text-anchor="middle">Registers</text>
<text x="500" y="73" class="ti">~1 KB · ~0.3 ns</text>
<polygon points="310,85 390,85 405,120 295,120" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="350" y="108" class="tb" text-anchor="middle">L1 cache</text>
<text x="500" y="108" class="ti">~64 KB · ~1 ns</text>
<polygon points="290,125 410,125 425,160 275,160" fill="#fef3c7" stroke="#92400e" stroke-width="2"/>
<text x="350" y="148" class="tb" text-anchor="middle">L2 cache</text>
<text x="500" y="148" class="ti">~512 KB · ~3 ns</text>
<polygon points="270,165 430,165 450,200 250,200" fill="#dcfce7" stroke="#166534" stroke-width="2"/>
<text x="350" y="188" class="tb" text-anchor="middle">L3 cache</text>
<text x="500" y="188" class="ti">~8 MB · ~12 ns</text>
<polygon points="240,205 460,205 480,250 220,250" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
<text x="350" y="232" class="tb" text-anchor="middle">Main memory (DRAM)</text>
<text x="500" y="232" class="ti">~16 GB · ~100 ns</text>
<polygon points="210,255 490,255 520,305 180,305" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/>
<text x="350" y="285" class="tb" text-anchor="middle">SSD</text>
<text x="540" y="285" class="ti">~1 TB · ~100 µs</text>
<polygon points="170,310 530,310 560,355 140,355" fill="#fce7f3" stroke="#9d174d" stroke-width="2"/>
<text x="350" y="338" class="tb" text-anchor="middle">HDD / network storage</text>
<text x="560" y="338" class="ti">~4 TB · ~10 ms</text>
</svg>` },

        { type: 'heading', text: 'Locality — why caches work', level: 2 },
        { type: 'para', html: 'Caches are bets that the past predicts the future. Two patterns make those bets pay off:' },
        { type: 'list', kind: 'check', items: [
          '<strong>Temporal locality</strong> — if you accessed an address recently, you\'ll probably access it again soon (think: a loop counter, the top of the stack).',
          '<strong>Spatial locality</strong> — if you accessed address X, you\'ll probably access X+1 soon (think: walking an array, reading a struct).'
        ] },
        { type: 'callout', kind: 'tip', html: 'Cache lines are typically 64 bytes — so reading one int pulls in the next 15 with it. That\'s why iterating an array beats iterating a linked list, even at the same N.' },

        { type: 'heading', text: 'Cache organization', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Direct-mapped</strong> — each address maps to exactly one slot. Fast, but prone to conflict misses.',
          '<strong>Fully associative</strong> — any address can live anywhere. Best hit rate, expensive to search.',
          '<strong>Set-associative</strong> (e.g. 4-way) — each address can live in any of N slots. The pragmatic middle ground.'
        ] },
        { type: 'para', html: 'Replacement policies: LRU (least recently used) is the gold standard; approximations like NRU or random are common in hardware where LRU\'s bookkeeping is too costly.' },

        { type: 'heading', text: 'Virtual memory', level: 2 },
        { type: 'para', html: 'The OS gives each process the illusion of its own large, contiguous address space. The MMU translates virtual addresses to physical addresses through a <strong>page table</strong>. Pages not in RAM live on disk; touching them triggers a <em>page fault</em> that the OS resolves by loading the page. Hot pages get cached in the <strong>TLB</strong> (Translation Lookaside Buffer) for fast lookup.' },
        { type: 'callout', kind: 'warn', html: '<strong>Thrashing</strong> — when working sets exceed RAM and the system spends more time paging than computing. Adding RAM is usually the only real cure.' }
      ]
    },

    /* ============ Chapter 6 ============ */
    {
      id: 'csf-c6',
      title: 'Pipelining & hazards',
      icon: '🚇',
      sections: [
        { type: 'heading', text: 'Why one instruction per cycle is the goal', level: 1 },
        { type: 'para', html: 'A non-pipelined CPU completes one instruction then starts the next — most of its hardware sits idle most of the time. A <strong>pipelined</strong> CPU overlaps stages so different instructions are in different stages simultaneously, like an assembly line.' },

        { type: 'image', alt: 'Five-stage instruction pipeline diagram',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.h{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}.l{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.lb{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;font-weight:700}.if{fill:#fde68a;stroke:#b45309;stroke-width:1.5}.id{fill:#bfdbfe;stroke:#1d4ed8;stroke-width:1.5}.ex{fill:#bbf7d0;stroke:#166534;stroke-width:1.5}.mem{fill:#fbcfe8;stroke:#9d174d;stroke-width:1.5}.wb{fill:#ddd6fe;stroke:#6d28d9;stroke-width:1.5}</style>
</defs>
<text x="380" y="28" class="h">Classic 5-stage RISC pipeline</text>
<text x="50" y="80" class="lb">Cycle:</text>
<text x="160" y="80" class="lb" text-anchor="middle">1</text>
<text x="240" y="80" class="lb" text-anchor="middle">2</text>
<text x="320" y="80" class="lb" text-anchor="middle">3</text>
<text x="400" y="80" class="lb" text-anchor="middle">4</text>
<text x="480" y="80" class="lb" text-anchor="middle">5</text>
<text x="560" y="80" class="lb" text-anchor="middle">6</text>
<text x="640" y="80" class="lb" text-anchor="middle">7</text>
<text x="50" y="120" class="l">Instr 1</text>
<rect x="120" y="100" width="80" height="30" class="if"/><text x="160" y="120" class="l" text-anchor="middle">IF</text>
<rect x="200" y="100" width="80" height="30" class="id"/><text x="240" y="120" class="l" text-anchor="middle">ID</text>
<rect x="280" y="100" width="80" height="30" class="ex"/><text x="320" y="120" class="l" text-anchor="middle">EX</text>
<rect x="360" y="100" width="80" height="30" class="mem"/><text x="400" y="120" class="l" text-anchor="middle">MEM</text>
<rect x="440" y="100" width="80" height="30" class="wb"/><text x="480" y="120" class="l" text-anchor="middle">WB</text>
<text x="50" y="160" class="l">Instr 2</text>
<rect x="200" y="140" width="80" height="30" class="if"/><text x="240" y="160" class="l" text-anchor="middle">IF</text>
<rect x="280" y="140" width="80" height="30" class="id"/><text x="320" y="160" class="l" text-anchor="middle">ID</text>
<rect x="360" y="140" width="80" height="30" class="ex"/><text x="400" y="160" class="l" text-anchor="middle">EX</text>
<rect x="440" y="140" width="80" height="30" class="mem"/><text x="480" y="160" class="l" text-anchor="middle">MEM</text>
<rect x="520" y="140" width="80" height="30" class="wb"/><text x="560" y="160" class="l" text-anchor="middle">WB</text>
<text x="50" y="200" class="l">Instr 3</text>
<rect x="280" y="180" width="80" height="30" class="if"/><text x="320" y="200" class="l" text-anchor="middle">IF</text>
<rect x="360" y="180" width="80" height="30" class="id"/><text x="400" y="200" class="l" text-anchor="middle">ID</text>
<rect x="440" y="180" width="80" height="30" class="ex"/><text x="480" y="200" class="l" text-anchor="middle">EX</text>
<rect x="520" y="180" width="80" height="30" class="mem"/><text x="560" y="200" class="l" text-anchor="middle">MEM</text>
<rect x="600" y="180" width="80" height="30" class="wb"/><text x="640" y="200" class="l" text-anchor="middle">WB</text>
<text x="380" y="260" class="l" text-anchor="middle">After fill-up, one instruction completes every cycle.</text>
</svg>` },

        { type: 'heading', text: 'The stages', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>IF</strong> · Instruction Fetch — read instruction from I-cache',
          '<strong>ID</strong> · Decode — figure out opcode + read source registers',
          '<strong>EX</strong> · Execute — ALU op, address calc, branch decision',
          '<strong>MEM</strong> · Memory access — for load/store only',
          '<strong>WB</strong> · Writeback — put the result into the destination register'
        ] },

        { type: 'heading', text: 'Hazards — what kills the throughput', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Structural hazard</strong> — two stages compete for the same resource (e.g. shared memory port).',
          '<strong>Data hazard (RAW)</strong> — instruction needs a value that hasn\'t been written back yet. Mitigated by <em>forwarding</em>: tap the result out of EX/MEM and feed it directly back as an input.',
          '<strong>Control hazard</strong> — a branch is in flight; we don\'t know which instructions to fetch next. Mitigated by <em>branch prediction</em> and speculative execution.'
        ] },
        { type: 'callout', kind: 'info', html: 'A modern out-of-order superscalar core has many more stages (15+), issues multiple instructions per cycle, renames registers to dodge false dependencies, and predicts branches with elaborate ML-style schemes. Same idea, much bigger pipe.' }
      ]
    },

    /* ============ Chapter 7 ============ */
    {
      id: 'csf-c7',
      title: 'ISA & assembly intuition',
      icon: '🧾',
      sections: [
        { type: 'heading', text: 'The contract between hardware and software', level: 1 },
        { type: 'para', html: 'An <strong>ISA (Instruction Set Architecture)</strong> defines what a programmer (or compiler) can ask the CPU to do. It specifies the instructions, the registers visible to software, addressing modes, calling conventions, and how interrupts behave. Everything below the ISA is hardware\'s problem; everything above it is software\'s.' },

        { type: 'heading', text: 'RISC vs CISC', level: 2 },
        { type: 'code', lang: 'text', code: `RISC (ARM, RISC-V, MIPS, modern PowerPC)
  - Few simple instructions, mostly 1 cycle each
  - Fixed-length encoding (e.g. all 32-bit)
  - Load/store: only LW/SW touch memory; ALU works on registers
  - Many general registers (typically 32)

CISC (x86, VAX, Motorola 68k)
  - Many complex, variable-length instructions
  - Memory operands allowed in most ops
  - Fewer architectural registers (modern x86 = 16 GPRs)
  - Modern x86 cores decode CISC into RISC-like micro-ops internally` },

        { type: 'heading', text: 'A tiny RISC routine', level: 2 },
        { type: 'code', lang: 'asm', code: `<span class="com"># Compute c = a + b * 2, then return c</span>
<span class="fn">LW</span>   R1, 0(R5)        <span class="com"># R1 = mem[R5+0]   (a)</span>
<span class="fn">LW</span>   R2, 4(R5)        <span class="com"># R2 = mem[R5+4]   (b)</span>
<span class="fn">SLL</span>  R2, R2, 1        <span class="com"># R2 = R2 << 1     (b*2)</span>
<span class="fn">ADD</span>  R3, R1, R2       <span class="com"># R3 = R1 + R2     (c)</span>
<span class="fn">SW</span>   R3, 8(R5)        <span class="com"># mem[R5+8] = R3   (store c)</span>
<span class="fn">JR</span>   R31              <span class="com"># return</span>` },

        { type: 'heading', text: 'Addressing modes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Immediate</strong> — operand is in the instruction itself (<code>ADDI R1, R2, 7</code>).',
          '<strong>Register</strong> — operand is in a register (<code>ADD R1, R2, R3</code>).',
          '<strong>Direct</strong> — operand is at a fixed memory address.',
          '<strong>Indirect</strong> — register holds the address (<code>LW R1, 0(R2)</code>).',
          '<strong>Indexed / scaled</strong> — base + index*scale + offset (common in x86).'
        ] },

        { type: 'heading', text: 'Calling conventions', level: 2 },
        { type: 'para', html: 'A calling convention defines which registers hold arguments, which hold return values, who saves what across a call, and how the stack frame is laid out. Code from different compilers can interoperate because they obey the same convention — usually the one set by the OS (e.g. System V AMD64 ABI on Linux).' },
        { type: 'callout', kind: 'tip', html: 'You don\'t need to memorize an ISA to be a good programmer — but reading a few pages of assembly disassembly will permanently change how you read code. You\'ll know what loops cost.' }
      ]
    },

    /* ============ Chapter 8 ============ */
    {
      id: 'csf-c8',
      title: 'DFAs, NFAs & finite automata',
      icon: '🔁',
      sections: [
        { type: 'heading', text: 'A machine with finitely many states', level: 1 },
        { type: 'para', html: 'A <strong>finite automaton</strong> is the simplest computational model. It has a finite set of states, a start state, some accept states, and a transition function that says "from state X, on reading symbol c, go to state Y."' },

        { type: 'image', alt: 'DFA accepting binary strings ending in 01',
          svg: `<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.title{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}.st{fill:#fff;stroke:#1d4ed8;stroke-width:2}.acc{fill:#dcfce7;stroke:#166534;stroke-width:2}.label{font-family:Inter,sans-serif;font-size:16px;fill:#0f172a;text-anchor:middle;font-weight:700}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.arr{stroke:#475569;stroke-width:1.8;fill:none;marker-end:url(#arr)}</style>
  <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="360" y="28" class="title">DFA accepting binary strings ending in "01"</text>
<text x="60" y="140" class="t">start</text>
<path d="M88,135 L130,135" class="arr"/>
<circle cx="160" cy="135" r="34" class="st"/>
<text x="160" y="142" class="label">q0</text>
<circle cx="360" cy="135" r="34" class="st"/>
<text x="360" y="142" class="label">q1</text>
<circle cx="560" cy="135" r="34" class="acc"/>
<circle cx="560" cy="135" r="40" fill="none" stroke="#166534" stroke-width="2"/>
<text x="560" y="142" class="label">q2</text>
<path d="M194,135 L326,135" class="arr"/>
<text x="260" y="125" class="t" text-anchor="middle">0</text>
<path d="M394,135 L526,135" class="arr"/>
<text x="460" y="125" class="t" text-anchor="middle">1</text>
<path d="M160,170 C 130,210 50,210 130,170" class="arr"/>
<text x="100" y="220" class="t">1</text>
<path d="M340,168 C 320,215 240,215 200,165" class="arr"/>
<text x="270" y="220" class="t">1</text>
<path d="M555,170 C 510,225 380,225 340,170" class="arr"/>
<text x="445" y="225" class="t">0</text>
<path d="M580,165 C 620,210 660,180 580,165" class="arr"/>
<text x="620" y="200" class="t">1</text>
</svg>` },

        { type: 'heading', text: 'Formal definition', level: 2 },
        { type: 'code', lang: 'text', code: `A DFA is a 5-tuple (Q, Σ, δ, q₀, F):
  Q  — finite set of states
  Σ  — input alphabet
  δ  — transition function Q × Σ → Q
  q₀ — start state ∈ Q
  F  — accept states ⊆ Q

Run: start at q₀, consume one symbol at a time
applying δ. After the last symbol, accept iff
current state is in F.` },

        { type: 'heading', text: 'NFAs — nondeterminism', level: 2 },
        { type: 'para', html: 'In an <strong>NFA</strong>, δ may go to 0, 1, or many next states for a given (state, symbol), and may even include <strong>ε-transitions</strong> that move without consuming input. The NFA accepts a string if ANY path through it ends in an accept state.' },
        { type: 'callout', kind: 'info', html: 'NFAs and DFAs have <strong>exactly the same power</strong>: they accept the same class (regular languages). Subset construction converts any NFA to a DFA — possibly with 2^n states.' },

        { type: 'heading', text: 'Closure properties', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Regular languages are closed under <strong>union</strong>, <strong>concatenation</strong>, <strong>Kleene star</strong>, <strong>intersection</strong>, and <strong>complement</strong>',
          'That\'s why regex operators always produce regex-able results',
          'The <strong>pumping lemma</strong> is the standard tool to PROVE a language is NOT regular — used to show <code>aⁿbⁿ</code> is beyond the reach of finite automata'
        ] }
      ]
    },

    /* ============ Chapter 9 ============ */
    {
      id: 'csf-c9',
      title: 'Regex & the Chomsky hierarchy',
      icon: '🪜',
      sections: [
        { type: 'heading', text: 'Languages, ranked by power', level: 1 },
        { type: 'para', html: 'Noam Chomsky\'s hierarchy organizes formal languages into four nested classes, each strictly more expressive than the last — and each matched to a specific kind of machine.' },

        { type: 'image', alt: 'Chomsky hierarchy concentric circles',
          svg: `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;text-anchor:middle;font-weight:700}.ts{font-family:Inter,sans-serif;font-size:12px;fill:#334155;text-anchor:middle}.title{font-family:Inter,sans-serif;font-size:18px;font-weight:700;fill:#0f172a;text-anchor:middle}</style>
</defs>
<text x="300" y="28" class="title">Chomsky hierarchy</text>
<circle cx="300" cy="220" r="180" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
<text x="300" y="70" class="t">Type 0 — Recursively enumerable</text>
<text x="300" y="86" class="ts">(Turing machine)</text>
<circle cx="300" cy="240" r="140" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
<text x="300" y="115" class="t">Type 1 — Context-sensitive</text>
<text x="300" y="131" class="ts">(Linear-bounded automaton)</text>
<circle cx="300" cy="260" r="100" fill="#bbf7d0" stroke="#166534" stroke-width="2"/>
<text x="300" y="170" class="t">Type 2 — Context-free</text>
<text x="300" y="186" class="ts">(Pushdown automaton)</text>
<circle cx="300" cy="280" r="55" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
<text x="300" y="278" class="t">Type 3</text>
<text x="300" y="294" class="ts">Regular · DFA / NFA</text>
</svg>` },

        { type: 'heading', text: 'Regex — concrete syntax for regular languages', level: 2 },
        { type: 'code', lang: 'text', code: `Operator   Meaning                  NFA construction
   a       single symbol            single transition on a
   AB      concatenation            NFA(A) → NFA(B)
   A|B     union                    two NFAs in parallel
   A*      Kleene star (≥0)         loop NFA(A) back, allow zero
   A+      one or more              A · A*
   A?      optional                 A | ε
   .       any single character     transitions on every symbol
   [abc]   character class          equivalent to a|b|c
   ^ $     anchors                  match start/end of input

Every regex compiles to an NFA (Thompson construction),
which can be converted to a DFA for fast matching.` },

        { type: 'heading', text: 'What regex CAN\'T do', level: 2 },
        { type: 'callout', kind: 'warn', html: 'Famous limitation: <strong>regex cannot match arbitrarily nested parentheses</strong>. That requires unbounded counting → a stack → a pushdown automaton → a CFG. Many "real-world" regex libraries (PCRE, .NET) add backreferences and recursion that go beyond regular languages — but pure regex is exactly regular.' },

        { type: 'heading', text: 'Each layer\'s typical task', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Regular</strong> — tokenizing source code, validating email patterns, log scraping',
          '<strong>Context-free</strong> — parsing programming languages, matching tags, arithmetic expressions',
          '<strong>Context-sensitive</strong> — natural-language phenomena like agreement and reduplication',
          '<strong>Recursively enumerable</strong> — anything algorithmically computable at all'
        ] }
      ]
    },

    /* ============ Chapter 10 ============ */
    {
      id: 'csf-c10',
      title: 'Context-free grammars & PDAs',
      icon: '📚',
      sections: [
        { type: 'heading', text: 'Grammars with one nonterminal on the left', level: 1 },
        { type: 'para', html: 'A <strong>context-free grammar (CFG)</strong> is a set of <strong>production rules</strong> where the left side is exactly one nonterminal. The grammar generates strings by repeatedly substituting productions until only terminals remain.' },

        { type: 'code', lang: 'text', code: `Classic CFG examples:

  S → aSb | ε              generates  {aⁿbⁿ | n ≥ 0}

  S → ( S ) S | ε          generates  all matched-paren strings

  E → E + T | T
  T → T * F | F
  F → ( E ) | id           generates  arithmetic expressions
                            with the correct precedence

  Symbols:
    Uppercase  = nonterminal (placeholder)
    lowercase  = terminal    (actual symbol in the language)
    →          = "rewrites as"
    |          = alternatives` },

        { type: 'heading', text: 'Derivations and parse trees', level: 2 },
        { type: 'para', html: 'A <strong>derivation</strong> is a sequence of rule applications from the start symbol to a string of terminals. A <strong>parse tree</strong> visualizes that derivation — each internal node is a nonterminal, each leaf is a terminal.' },
        { type: 'code', lang: 'text', code: `Grammar:  S → aSb | ε

Derivation of "aabb":
  S ⇒ aSb ⇒ aaSbb ⇒ aaεbb = aabb

Parse tree:
        S
       /|\\
      a S b
       /|\\
      a S b
        |
        ε` },

        { type: 'callout', kind: 'warn', html: 'A grammar is <strong>ambiguous</strong> if some string has more than one parse tree. The dangling-else problem in C/Java is the classic case. Ambiguity matters because compilers need ONE definitive interpretation of every program.' },

        { type: 'heading', text: 'Pushdown automata — the machine for CFGs', level: 2 },
        { type: 'para', html: 'A <strong>pushdown automaton</strong> is a finite automaton plus an unbounded LIFO stack. Each transition can push, pop, or leave the stack unchanged. That single stack is exactly enough power to recognize all context-free languages.' },
        { type: 'list', kind: 'check', items: [
          '<strong>Push</strong> — read a symbol, place something on the stack',
          '<strong>Pop</strong> — read a symbol, remove the top of the stack (often matching it)',
          '<strong>The stack is what lets you remember "how deep you are"</strong> — essential for matched parens, balanced brackets, nested function calls'
        ] },

        { type: 'heading', text: 'Why this matters in practice', level: 2 },
        { type: 'para', html: 'Almost every programming language\'s <em>syntax</em> is specified by a CFG. Parser generators like <strong>yacc, bison, ANTLR</strong> turn a grammar file into a parser. The parser produces an AST that the rest of the compiler works with.' }
      ]
    },

    /* ============ Chapter 11 ============ */
    {
      id: 'csf-c11',
      title: 'Turing machines & decidability',
      icon: '♾️',
      sections: [
        { type: 'heading', text: 'The most powerful model we know', level: 1 },
        { type: 'para', html: 'A <strong>Turing machine</strong> has a finite control plus an infinite tape it can read, write, and move left/right on. Despite its absurd simplicity, it can compute anything any other machine model can — that\'s the content of the <strong>Church-Turing thesis</strong>.' },

        { type: 'code', lang: 'text', code: `Tape:  ... _ _ 1 0 1 1 0 _ _ ...
                       ^
                      head

Transition rule: δ(state, tape_symbol) → (new_state, write_symbol, L|R)

A TM halts when it enters a designated halt state.
A TM accepts a string if it halts in an accept state.

Equivalent models (anything you can do in one, you can do in the others):
  Turing machines (1-tape, multi-tape, multi-head, ...)
  Lambda calculus
  Random-access machines
  Modern programming languages (with infinite memory)` },

        { type: 'heading', text: 'Decidable vs recognizable vs undecidable', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Decidable</strong> — some Turing machine halts on every input, accepting exactly the members of the language.',
          '<strong>Recognizable</strong> (recursively enumerable) — some TM halts and accepts on members, but may loop forever on non-members.',
          '<strong>Undecidable</strong> — no Turing machine can decide it. Often co-recognizable but not decidable.'
        ] },

        { type: 'heading', text: 'The halting problem', level: 2 },
        { type: 'para', html: '<strong>HALT</strong> = { (P, x) : program P halts on input x }. Turing\'s 1936 result: HALT is undecidable. The proof is a beautiful diagonal:' },
        { type: 'code', lang: 'text', code: `Assume H(P, x) decides whether P halts on x.

Define D(P):
  if H(P, P) says "halts":
    loop forever
  else:
    halt

Now ask: does D(D) halt?
  If H(D, D) says "halts":  D loops → D does NOT halt. Contradiction.
  If H(D, D) says "loops":  D halts → D DOES halt. Contradiction.

Either way, H gives the wrong answer.  ⇒  No such H exists.` },

        { type: 'callout', kind: 'danger', html: 'Consequence: <strong>no algorithm can perfectly answer "does this program have an infinite loop?"</strong> or "is this code correct?" in full generality. Static analyzers are necessarily approximate — they err on one side or the other.' },

        { type: 'heading', text: 'Rice\'s theorem', level: 2 },
        { type: 'para', html: 'Rice generalizes the halting result: <strong>any non-trivial semantic property of programs is undecidable</strong>. "Does this program ever output 7?", "Is this function equivalent to that one?", "Does this code throw an exception?" — all undecidable in general. The hardness isn\'t accidental; it\'s built into computation itself.' }
      ]
    },

    /* ============ Chapter 12 ============ */
    {
      id: 'csf-c12',
      title: 'Computational complexity',
      icon: '⚖️',
      sections: [
        { type: 'heading', text: 'Beyond "can it be done?" — "how fast?"', level: 1 },
        { type: 'para', html: 'Decidability asks <em>whether</em> a problem can be solved. <strong>Complexity</strong> asks how cheaply — typically in time, but also in memory and other resources. Problems are grouped into <strong>complexity classes</strong> based on the resources their solutions need.' },

        { type: 'heading', text: 'The main classes', level: 2 },
        { type: 'code', lang: 'text', code: `P    — decidable in polynomial time on a deterministic TM
       (the "tractable" problems)

NP   — decidable in polynomial time on a non-deterministic TM
       equivalently: solutions can be VERIFIED in polynomial time
       given a short certificate

co-NP — complements of NP problems

NP-hard      — every NP problem reduces (in poly time) to it
NP-complete  — in NP AND NP-hard
              (the hardest problems "inside" NP)

PSPACE — solvable in polynomial space (any time)
EXPTIME — solvable in exponential time` },

        { type: 'heading', text: 'P vs NP — the million-dollar question', level: 2 },
        { type: 'para', html: 'We know P ⊆ NP (anything solvable quickly is verifiable quickly). The huge open question is whether the reverse holds — whether every problem whose solution is easy to <em>check</em> is also easy to <em>find</em>. Most researchers expect P ≠ NP, but no one has proved it.' },

        { type: 'callout', kind: 'tip', html: 'If P = NP, public-key cryptography collapses, optimal scheduling becomes easy, drug design speeds up — but also chess and Go become "solved" in a way that wrings out their interest. Don\'t hold your breath.' },

        { type: 'heading', text: 'NP-complete classics', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>SAT</strong> — given a Boolean formula, is there an assignment making it true? (Cook-Levin: the original NP-complete problem)',
          '<strong>3-SAT</strong> — SAT restricted to clauses of 3 literals',
          '<strong>Vertex cover</strong> — given a graph and k, is there a set of k vertices touching every edge?',
          '<strong>TSP (decision form)</strong> — is there a tour of length ≤ k?',
          '<strong>Subset sum</strong> — does any subset sum to exactly k?',
          '<strong>Graph coloring</strong> — can the graph be colored with k colors so adjacent vertices differ?'
        ] },

        { type: 'heading', text: 'Reductions', level: 2 },
        { type: 'para', html: 'A <strong>polynomial-time reduction</strong> from problem A to problem B is a polynomial-time function that converts instances of A into instances of B preserving the yes/no answer. If A reduces to B and B is "easy", then A is easy too. Reductions are how we prove problems are NP-hard — show that an already-known-hard problem reduces to yours.' },

        { type: 'heading', text: 'Dealing with NP-hard problems in practice', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Approximation</strong> — accept a solution within some factor of optimal',
          '<strong>Heuristics</strong> — fast methods that work well on typical inputs (greedy, local search)',
          '<strong>Parameterized algorithms</strong> — exponential in a parameter that\'s usually small in practice',
          '<strong>Special cases</strong> — many NP-hard problems are in P on restricted classes (e.g. interval graphs)',
          '<strong>SAT solvers / ILP</strong> — modern engines routinely crack "impossible" instances of millions of variables'
        ] }
      ]
    },

    /* ============ Chapter 13 ============ */
    {
      id: 'csf-c13',
      title: 'Compiler basics',
      icon: '🛠️',
      sections: [
        { type: 'heading', text: 'From text to machine code', level: 1 },
        { type: 'para', html: 'A compiler is a pipeline of transformations. Each phase takes one representation of the program and turns it into a slightly more machine-friendly one.' },

        { type: 'code', lang: 'text', code: `source code
   │
   ▼  LEXER (scanner)
token stream
   │
   ▼  PARSER
parse tree / AST
   │
   ▼  SEMANTIC ANALYSIS
typed, scope-resolved AST
   │
   ▼  IR generation
intermediate representation (e.g. three-address code, SSA)
   │
   ▼  OPTIMIZER
optimized IR
   │
   ▼  CODE GENERATOR
target code (machine code or bytecode)` },

        { type: 'heading', text: 'Lexing — characters to tokens', level: 2 },
        { type: 'para', html: 'The lexer groups raw characters into <strong>tokens</strong> — keywords, identifiers, literals, operators, punctuation. Whitespace and comments are usually dropped. The lexer is typically implemented as a giant DFA derived from a set of regular expressions (one per token kind). This is why <strong>regular languages</strong> are exactly the right abstraction here.' },
        { type: 'code', lang: 'text', code: `Source:   if (n > 0) return n*2;

Tokens:   IF  LPAREN  ID(n)  GT  INT(0)  RPAREN  RETURN  ID(n)  STAR  INT(2)  SEMI` },

        { type: 'heading', text: 'Parsing — tokens to AST', level: 2 },
        { type: 'para', html: 'The parser uses a <strong>context-free grammar</strong> to assemble tokens into a structured tree. The output is the <strong>abstract syntax tree (AST)</strong> — like a parse tree, but stripped of purely-syntactic clutter (parens, semicolons) and shaped for downstream phases.' },

        { type: 'image', alt: 'AST for n * 2 + 1',
          svg: `<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.n{fill:#fef3c7;stroke:#92400e;stroke-width:2}.l{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:16px;fill:#0f172a;text-anchor:middle;font-weight:700}.edge{stroke:#475569;stroke-width:2;fill:none}.title{font-family:Inter,sans-serif;font-size:17px;font-weight:700;fill:#0f172a;text-anchor:middle}</style>
</defs>
<text x="290" y="28" class="title">AST for  n * 2 + 1</text>
<line x1="290" y1="80" x2="200" y2="140" class="edge"/>
<line x1="290" y1="80" x2="380" y2="140" class="edge"/>
<line x1="200" y1="160" x2="140" y2="220" class="edge"/>
<line x1="200" y1="160" x2="260" y2="220" class="edge"/>
<circle cx="290" cy="80" r="32" class="n"/>
<text x="290" y="86" class="t">+</text>
<circle cx="200" cy="160" r="32" class="n"/>
<text x="200" y="166" class="t">*</text>
<circle cx="380" cy="160" r="32" class="l"/>
<text x="380" y="166" class="t">1</text>
<circle cx="140" cy="240" r="32" class="l"/>
<text x="140" y="246" class="t">n</text>
<circle cx="260" cy="240" r="32" class="l"/>
<text x="260" y="246" class="t">2</text>
</svg>` },

        { type: 'heading', text: 'Semantic analysis', level: 2 },
        { type: 'para', html: 'The semantic phase enforces rules that can\'t be captured by a CFG: variable scoping (is <code>n</code> declared?), type checking (is <code>n * 2</code> a valid operation?), array-bounds info, and so on. Output is an annotated AST.' },

        { type: 'heading', text: 'Optimization', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Constant folding</strong> — evaluate constant expressions at compile time (<code>3 + 4 → 7</code>)',
          '<strong>Dead-code elimination</strong> — remove code that can\'t affect outputs',
          '<strong>Common subexpression elimination</strong> — compute repeated subexpressions once',
          '<strong>Inlining</strong> — replace a function call with the function body',
          '<strong>Loop-invariant code motion</strong> — pull unchanging expressions out of loops',
          '<strong>Register allocation</strong> — assign physical registers to virtual ones (graph coloring!)'
        ] },

        { type: 'heading', text: 'Code generation', level: 2 },
        { type: 'para', html: 'The final phase emits real instructions for the target ISA (or bytecode for a virtual machine, like the JVM). Modern compilers use intermediate representations like <strong>SSA</strong> (static single assignment) where each variable is assigned exactly once — this dramatically simplifies many optimizations.' },
        { type: 'callout', kind: 'info', html: 'Interpreters skip code generation and walk the AST directly. JIT compilers blur the line — they generate machine code lazily, at runtime, often using profile data the static compiler couldn\'t have.' }
      ]
    },

    /* ============ Chapter 14 ============ */
    {
      id: 'csf-c14',
      title: 'Paradigms & type systems',
      icon: '🎨',
      sections: [
        { type: 'heading', text: 'How code is organized', level: 1 },
        { type: 'para', html: 'A <strong>programming paradigm</strong> is a style of thinking about programs. No paradigm is "best"; each shines for some problems and is awkward for others.' },

        { type: 'heading', text: 'The major paradigms', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Imperative</strong> — sequences of commands that change state. (Assembly, C, Pascal)',
          '<strong>Procedural</strong> — imperative + named procedures. (C)',
          '<strong>Object-oriented</strong> — bundles of data + behavior (objects) sending messages. (Smalltalk, Java, C#)',
          '<strong>Functional</strong> — computation as expression evaluation; immutable values, first-class functions, no side effects (in the pure form). (Haskell, OCaml, Erlang)',
          '<strong>Declarative</strong> — describe what you want, not how to compute it. (SQL, regex, HTML)',
          '<strong>Logic</strong> — programs as facts + rules; the runtime searches for derivations. (Prolog, Datalog)',
          '<strong>Dataflow / reactive</strong> — express programs as data dependencies. (spreadsheets, RxJS)'
        ] },

        { type: 'callout', kind: 'info', html: 'Most "real" languages today are <strong>multi-paradigm</strong>: Python and JavaScript are imperative with strong OO and functional features; Rust is imperative with strong functional flavor; Scala is OO + functional in equal measure.' },

        { type: 'heading', text: 'Type systems — when is "type" checked?', level: 2 },
        { type: 'code', lang: 'text', code: `Two independent axes:

STATIC vs DYNAMIC      — when types are checked
  static  → at compile time (Java, Rust, Haskell, C, TS)
  dynamic → at run time     (Python, JS, Ruby, Lua)

STRONG vs WEAK         — how strict the rules are
  strong → "1 + '2'" is an error                (Python, Java, Haskell)
  weak   → "1 + '2'" silently coerces           (classic JS, C)` },
        { type: 'para', html: 'The strong/weak axis is fuzzy and people argue endlessly about which language is on which side. The static/dynamic axis is crisp.' },

        { type: 'heading', text: 'Polymorphism', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Parametric (generics)</strong> — the same code works for many types (<code>List&lt;T&gt;</code>)',
          '<strong>Subtype</strong> — an object of subtype works wherever its supertype is expected (OOP inheritance)',
          '<strong>Ad-hoc (overloading)</strong> — same name, different implementations selected by signature',
          '<strong>Duck</strong> — dynamic counterpart: if it has the right methods, it\'s the right type'
        ] },

        { type: 'heading', text: 'Type inference', level: 2 },
        { type: 'para', html: 'Languages like Haskell, OCaml, Rust, and Kotlin let you skip most annotations because the compiler can <em>infer</em> the type from usage. You get static-strong safety without writing types everywhere. The Hindley-Milner algorithm is the classical foundation.' },
        { type: 'code', lang: 'rust', code: `<span class="kw">let</span> x = <span class="num">42</span>;          <span class="com">// inferred as i32</span>
<span class="kw">let</span> v = vec![<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]; <span class="com">// inferred as Vec&lt;i32&gt;</span>
<span class="kw">let</span> doubled: <span class="ty">Vec</span>&lt;_&gt; = v.<span class="fn">iter</span>().<span class="fn">map</span>(|n| n * <span class="num">2</span>).<span class="fn">collect</span>();` },

        { type: 'callout', kind: 'tip', html: 'You can have everything good: gradual type systems (TypeScript, Python type hints, mypy) bolt static checking onto fundamentally dynamic languages. The trend is toward "static when you want it; dynamic when you don\'t."' }
      ]
    },

    /* ============ Chapter 15 ============ */
    {
      id: 'csf-c15',
      title: 'Software engineering basics',
      icon: '📐',
      sections: [
        { type: 'heading', text: 'Beyond writing code', level: 1 },
        { type: 'para', html: 'Software engineering is the discipline of building software that\'s correct, maintainable, and delivered. It\'s everything around the lines of code — process, tooling, collaboration, quality.' },

        { type: 'heading', text: 'The SDLC', level: 2 },
        { type: 'para', html: 'The <strong>software development life cycle</strong> is the rough sequence projects move through. There are dozens of named flavors; the bones are:' },
        { type: 'code', lang: 'text', code: `Requirements   — what should it do?
Design         — how should it be structured?
Implementation — write the code
Testing        — does it actually work?
Deployment     — get it in users' hands
Maintenance    — fix, improve, retire` },

        { type: 'heading', text: 'Waterfall vs Agile', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Waterfall</strong> — finish each phase before the next. Predictable and well-suited to projects with stable, fully-known requirements (think aerospace firmware). Fragile when requirements change.',
          '<strong>Agile</strong> — short iterations (sprints), continuous customer feedback, working software each cycle. Scrum and Kanban are the popular concrete frameworks. Trades predictability for adaptability.',
          '<strong>DevOps</strong> — Agile extended into operations: continuous integration, continuous delivery, "you build it, you run it."'
        ] },

        { type: 'heading', text: 'Version control', level: 2 },
        { type: 'para', html: 'Every change is tracked, attributed, and reversible. Multiple developers work in parallel via <strong>branches</strong> and combine work via <strong>merges</strong>. <strong>Git</strong> dominates today — distributed, fast, branching almost free.' },
        { type: 'code', lang: 'bash', code: `git checkout -b feat/login   <span class="com"># new feature branch</span>
git add .
git commit -m <span class="str">"add login endpoint"</span>
git push origin feat/login
<span class="com"># open a Pull Request; review, then merge</span>` },

        { type: 'heading', text: 'The testing pyramid', level: 2 },
        { type: 'code', lang: 'text', code: `        /\\           E2E / UI tests
       /  \\          (slow, brittle, few)
      /____\\
     /      \\        Integration tests
    /        \\       (some, medium-cost)
   /__________\\
  /            \\     Unit tests
 /              \\    (many, fast, focused)
/________________\\` },
        { type: 'list', kind: 'check', items: [
          '<strong>Unit tests</strong> — exercise one function or class in isolation; should be milliseconds each',
          '<strong>Integration tests</strong> — verify several pieces work together (e.g. service + DB)',
          '<strong>End-to-end tests</strong> — drive the system through its real interface (browser, API)',
          '<strong>Property-based / fuzz tests</strong> — generate inputs and check invariants',
          '<strong>Smoke tests</strong> — fast "is anything obviously broken?" runs'
        ] },

        { type: 'callout', kind: 'warn', html: 'Inverting the pyramid (lots of E2E, few units) is a known anti-pattern: the suite becomes slow, flaky, and gives bad failure messages. Build the base first.' },

        { type: 'heading', text: 'Code quality practices', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Code review</strong> — another set of eyes on every change; catches bugs, spreads knowledge',
          '<strong>Continuous Integration (CI)</strong> — run tests/lint/build on every commit',
          '<strong>Continuous Delivery (CD)</strong> — every passing build is deployable',
          '<strong>Static analysis / linting</strong> — automatic checks for bugs and style',
          '<strong>Documentation</strong> — READMEs, API docs, architecture decision records'
        ] },

        { type: 'heading', text: 'Design principles', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>DRY</strong> — Don\'t Repeat Yourself; one source of truth per piece of knowledge',
          '<strong>KISS</strong> — Keep It Simple, Stupid; prefer the smallest thing that works',
          '<strong>YAGNI</strong> — You Aren\'t Gonna Need It; don\'t build for imagined futures',
          '<strong>SOLID</strong> — five OO design principles (single-responsibility, open-closed, Liskov, interface-segregation, dependency-inversion)',
          '<strong>Separation of concerns</strong> — each module has one clear reason to exist'
        ] },

        { type: 'callout', kind: 'success', html: 'Software engineering rewards humility. The best engineers know they\'ll be wrong, instrument so they can find out, and structure code so it\'s cheap to fix when they are.' }
      ]
    }

  ]
});

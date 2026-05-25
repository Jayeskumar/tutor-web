PUSH({
  id: 'cs-fundamentals',
  name: 'CS Fundamentals',
  icon: '🎓',
  color: '#00838f',
  description: 'Core CS theory — architecture, automata, complexity, compilers, and digital logic.',
  units: [

    /* ============== UNIT 1 — Number Systems ============== */
    {
      id: 'csf-u1', name: 'Unit 1 · Number systems & representation', description: 'Binary, hex, 2\'s complement, IEEE 754',
      lessons: [
        {
          id: 'csf-u1-l1', name: 'Bases & conversions', icon: '🔢', xp: 15,
          challenges: [
            { type: 'concept', title: 'Computers count in 2s', content: `<p>Humans use <strong>base 10</strong> (digits 0–9). Computers use <strong>base 2</strong> (just 0 and 1 — a bit). <strong>Hex</strong> (base 16) is shorthand: one hex digit = 4 bits.</p>
<div class="code-block"><span class="com">// Decimal 13 in different bases</span>
binary:  1101    <span class="com">// 8 + 4 + 0 + 1</span>
hex:     D       <span class="com">// one nibble</span>
octal:   15      <span class="com">// 1*8 + 5</span></div>
<p>Each binary position is a power of 2: <code>...16 8 4 2 1</code>. Add the positions where you see a 1.</p>` },
            { type: 'multiple-choice', prompt: 'What decimal value is binary <code>1011</code>?',
              options: [{text:'7', code:false},{text:'11', code:false},{text:'13', code:false},{text:'15', code:false}],
              correct: 1, explanation: '8 + 0 + 2 + 1 = 11.' },
            { type: 'type-answer', prompt: 'How many bits are in one hex digit?', accept: ['4','four'], explanation: 'One hex digit covers 16 values = 2^4 = 4 bits (a nibble).' },
            { type: 'multiple-choice', prompt: 'Decimal 255 in hex is:',
              options: [{text:'0xFF', code:true},{text:'0x100', code:true},{text:'0xF0', code:true},{text:'0xAA', code:true}],
              correct: 0, explanation: '255 = 16*15 + 15 = FF.' },
            { type: 'true-false', statement: 'Binary <code>10000</code> equals decimal 16.', correct: true, explanation: '2^4 = 16.' },
            { type: 'match-pairs', prompt: 'Match decimal to its hex.', leftLabel: 'Decimal', rightLabel: 'Hex',
              pairs: [{left:'10', right:'A'},{left:'15', right:'F'},{left:'16', right:'10'},{left:'32', right:'20'}] }
          ]
        },
        {
          id: 'csf-u1-l2', name: '2\'s complement & floating point', icon: '➖', xp: 25,
          challenges: [
            { type: 'concept', title: 'How negatives and reals are stored', content: `<p><strong>2\'s complement</strong> is the standard way to store signed integers. To negate a number: flip every bit, then add 1.</p>
<div class="code-block"><span class="com">// 8-bit signed</span>
+5 = 0000 0101
-5 = 1111 1011   <span class="com">// flip + add 1</span>

Range for 8 bits: -128 to +127</div>
<p><strong>IEEE 754</strong> floats split the bits into <em>sign</em>, <em>exponent</em>, and <em>mantissa</em>. A 32-bit float = 1 sign + 8 exp + 23 mantissa bits.</p>
<p>This is why <code>0.1 + 0.2 != 0.3</code> in most languages — 0.1 has no exact binary representation.</p>` },
            { type: 'multiple-choice', prompt: 'In 8-bit 2\'s complement, what is the range?',
              options: [{text:'0 to 255', code:false},{text:'-127 to +127', code:false},{text:'-128 to +127', code:false},{text:'-256 to +255', code:false}],
              correct: 2, explanation: 'The negative range goes one further because 0 occupies the "+0" slot only.' },
            { type: 'true-false', statement: 'In 2\'s complement, the leading bit (MSB) being 1 means the number is negative.', correct: true, explanation: 'MSB is the sign bit.' },
            { type: 'output-predict', prompt: 'What is printed?',
              code: `<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="num">0.1</span> + <span class="num">0.2</span> == <span class="num">0.3</span>);`,
              options: ['true', 'false', '0.3', 'error'], correct: 1, explanation: 'IEEE 754 rounding: 0.1 + 0.2 actually computes to 0.30000000000000004.' },
            { type: 'match-pairs', prompt: 'Match IEEE 754 field to purpose.', leftLabel: 'Field', rightLabel: 'Purpose',
              pairs: [{left:'Sign', right:'+ or -'},{left:'Exponent', right:'Scale (×2^k)'},{left:'Mantissa', right:'Significant digits'},{left:'Bias', right:'Shifts exponent range'}] },
            { type: 'fill-blank', prompt: 'Negate 5 in 2\'s complement: flip bits, then ___.',
              codeLines: [{html:'+5 = 0000 0101 → flip = 1111 1010 → add <span class="fn">_BLANK_</span> → 1111 1011 = -5'}],
              tokens: ['1','2','0','-1'], correctAnswer: '1', explanation: 'Two\'s complement: invert bits, add 1.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Boolean algebra ============== */
    {
      id: 'csf-u2', name: 'Unit 2 · Boolean algebra & logic gates', description: 'Truth tables, gates, K-map simplification',
      lessons: [
        {
          id: 'csf-u2-l1', name: 'Gates & truth tables', icon: '🔌', xp: 15,
          challenges: [
            { type: 'concept', title: 'AND, OR, NOT, XOR', content: `<p>A <strong>logic gate</strong> takes 1-bit inputs and returns 1 bit. The full behavior is captured by its <strong>truth table</strong>.</p>
<div class="code-block">A B | AND  OR  XOR  NAND  NOR
0 0 |  0    0   0    1    1
0 1 |  0    1   1    1    0
1 0 |  0    1   1    1    0
1 1 |  1    1   0    0    0</div>
<p>NOT flips a single bit. NAND and NOR are <em>universal</em> — you can build every other gate from just one of them.</p>` },
            { type: 'multiple-choice', prompt: 'What is <code>1 XOR 1</code>?',
              options: [{text:'0', code:false},{text:'1', code:false},{text:'undefined', code:false},{text:'11', code:false}],
              correct: 0, explanation: 'XOR = "exactly one" — both 1s cancel.' },
            { type: 'true-false', statement: 'NAND is a universal gate — every other gate can be built from NANDs alone.', correct: true, explanation: 'NOR is similarly universal.' },
            { type: 'match-pairs', prompt: 'Gate → behavior.', leftLabel: 'Gate', rightLabel: 'Output is 1 when',
              pairs: [{left:'AND', right:'both inputs are 1'},{left:'OR', right:'at least one input is 1'},{left:'XOR', right:'inputs differ'},{left:'NOT', right:'input is 0'}] },
            { type: 'output-predict', prompt: 'A = 1, B = 0. What is <code>(A AND B) OR (NOT B)</code>?',
              code: `A = <span class="num">1</span>, B = <span class="num">0</span>
(A <span class="kw">AND</span> B) <span class="kw">OR</span> (<span class="kw">NOT</span> B)`,
              options: ['0', '1', 'undefined', 'A'], correct: 1, explanation: 'A AND B = 0; NOT B = 1; 0 OR 1 = 1.' }
          ]
        },
        {
          id: 'csf-u2-l2', name: 'Boolean laws & K-maps', icon: '🗺️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Simplify with laws or a K-map', content: `<p><strong>Boolean algebra</strong> gives identities that let you shrink expressions:</p>
<div class="code-block">Identity:      A + 0 = A          A · 1 = A
Annihilator:   A + 1 = 1          A · 0 = 0
Idempotent:    A + A = A          A · A = A
Complement:    A + A\' = 1         A · A\' = 0
De Morgan:     (A · B)\' = A\' + B\'
               (A + B)\' = A\' · B\'</div>
<p>A <strong>Karnaugh map</strong> arranges truth-table outputs in a grid where adjacent cells differ in exactly one variable. Group 1s in powers-of-2 rectangles to read off the simplified expression visually.</p>` },
            { type: 'multiple-choice', prompt: 'By De Morgan\'s law, <code>(A · B)\'</code> equals:',
              options: [{text:'A · B', code:false},{text:'A\' + B\'', code:false},{text:'A\' · B\'', code:false},{text:'A + B', code:false}],
              correct: 1, explanation: 'Break the bar, flip the operator.' },
            { type: 'true-false', statement: 'A + A·B simplifies to A.', correct: true, explanation: 'Absorption law: A(1+B) = A.' },
            { type: 'tap-tokens', prompt: 'Simplify A·1 using identity laws (build the result).',
              tokens: ['A', '1', '0', '+', '·', "A'"],
              correctOrder: ['A'], explanation: 'A · 1 = A (identity for AND).' },
            { type: 'multiple-choice', prompt: 'A K-map is most useful for:',
              options: [{text:'Drawing circuits', code:false},{text:'Visually simplifying boolean expressions', code:false},{text:'Counting gates', code:false},{text:'Decoding instructions', code:false}],
              correct: 1, explanation: 'Group adjacent 1s to read off the minimal expression.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Combinational & sequential circuits ============== */
    {
      id: 'csf-u3', name: 'Unit 3 · Combinational & sequential circuits', description: 'Multiplexers, flip-flops, registers',
      lessons: [
        {
          id: 'csf-u3-l1', name: 'Combinational logic', icon: '⚙️', xp: 20,
          challenges: [
            { type: 'concept', title: 'No memory — output depends only on inputs', content: `<p>A <strong>combinational circuit</strong> has no memory: its output is a pure function of its current inputs. Classic examples:</p>
<div class="code-block">Half adder:    A, B → Sum (XOR), Carry (AND)
Full adder:    A, B, Cin → Sum, Cout       (chains to make N-bit adders)
Multiplexer:   2^n data inputs + n select lines → 1 output
Decoder:       n select lines → 2^n outputs (one hot)
Encoder:       2^n inputs → n outputs (reverse of decoder)</div>
<p>You can chain N full adders to build an N-bit adder — that\'s how your CPU adds integers.</p>` },
            { type: 'multiple-choice', prompt: 'A 4-to-1 multiplexer needs how many select lines?',
              options: [{text:'1', code:false},{text:'2', code:false},{text:'4', code:false},{text:'8', code:false}],
              correct: 1, explanation: '2 bits choose among 4 inputs (2^2 = 4).' },
            { type: 'true-false', statement: 'A combinational circuit can store state.', correct: false, explanation: 'No memory — outputs depend only on current inputs. That\'s sequential.' },
            { type: 'match-pairs', prompt: 'Circuit → role.', leftLabel: 'Circuit', rightLabel: 'Role',
              pairs: [{left:'Half adder', right:'Sum + carry of 2 bits'},{left:'MUX', right:'Selects one of many inputs'},{left:'Decoder', right:'Selects one of many outputs'},{left:'Comparator', right:'Tests equality / less / greater'}] },
            { type: 'output-predict', prompt: 'Half-adder: A=1, B=1. What are (Sum, Carry)?',
              code: `<span class="kw">Sum</span>   = A XOR B
<span class="kw">Carry</span> = A AND B`,
              options: ['(0, 0)', '(1, 0)', '(0, 1)', '(1, 1)'], correct: 2, explanation: '1 XOR 1 = 0 (sum), 1 AND 1 = 1 (carry).' }
          ]
        },
        {
          id: 'csf-u3-l2', name: 'Sequential logic & flip-flops', icon: '🔁', xp: 25,
          challenges: [
            { type: 'concept', title: 'Memory through feedback', content: `<p><strong>Sequential</strong> circuits add memory. Their output depends on both current inputs AND past state. The building block is the <strong>flip-flop</strong>.</p>
<div class="code-block">SR latch:   Set/Reset inputs
D flip-flop: stores the value of D on a clock edge
JK flip-flop: toggles on J=K=1
T flip-flop: toggles every clock pulse

N D flip-flops in parallel → an N-bit register
A counter is a register that increments each clock</div>
<p>A CPU is built from registers (state) and combinational logic (the next-state function) wrapped around a clock.</p>` },
            { type: 'multiple-choice', prompt: 'Which flip-flop is most common for general data storage?',
              options: [{text:'SR', code:false},{text:'D', code:false},{text:'JK', code:false},{text:'T', code:false}],
              correct: 1, explanation: 'D = "Data" — copies its input to its output on a clock edge.' },
            { type: 'true-false', statement: 'A register is just several flip-flops sharing a clock.', correct: true, explanation: 'N flip-flops → N-bit register.' },
            { type: 'fill-blank', prompt: 'Sequential circuits add the dimension that combinational ones lack:',
              codeLines: [{html:'A sequential circuit has <span class="fn">_BLANK_</span>, so its output depends on past as well as present inputs.'}],
              tokens: ['memory','gates','clocks','registers'], correctAnswer: 'memory', explanation: 'Memory (state) is what distinguishes sequential from combinational.' },
            { type: 'match-pairs', prompt: 'Flip-flop → behavior.', leftLabel: 'FF', rightLabel: 'Behavior',
              pairs: [{left:'D', right:'Copies input on clock edge'},{left:'T', right:'Toggles every pulse'},{left:'JK', right:'Toggles when J=K=1'},{left:'SR', right:'Set / Reset / Hold'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Architecture ============== */
    {
      id: 'csf-u4', name: 'Unit 4 · Computer architecture', description: 'Von Neumann, Harvard, CPU components',
      lessons: [
        {
          id: 'csf-u4-l1', name: 'Inside the CPU', icon: '🖥️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Fetch · Decode · Execute', content: `<p>Every CPU runs the same basic loop:</p>
<div class="code-block"><span class="com">1.</span> Fetch    — load next instruction from memory (PC → IR)
<span class="com">2.</span> Decode   — figure out what it means (control signals)
<span class="com">3.</span> Execute  — do the work (ALU op, memory access, jump)
<span class="com">4.</span> Writeback — store the result; advance the PC</div>
<p>Key components:</p>
<ul>
<li><strong>ALU</strong> — arithmetic & logic unit (adds, compares, ANDs, etc.)</li>
<li><strong>Control Unit</strong> — generates control signals from the decoded opcode</li>
<li><strong>Registers</strong> — the fastest storage; the PC (program counter) is one</li>
<li><strong>Buses</strong> — address, data, and control wires connecting it all</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Which architecture has a SHARED bus for instructions and data?',
              options: [{text:'Von Neumann', code:false},{text:'Harvard', code:false},{text:'Modified Harvard', code:false},{text:'Dataflow', code:false}],
              correct: 0, explanation: 'Von Neumann: one memory, one bus — simpler but creates the "von Neumann bottleneck".' },
            { type: 'multiple-choice', prompt: 'The component that performs additions and comparisons is the:',
              options: [{text:'PC', code:false},{text:'ALU', code:false},{text:'CU', code:false},{text:'MMU', code:false}],
              correct: 1, explanation: 'Arithmetic Logic Unit.' },
            { type: 'true-false', statement: 'The Harvard architecture uses separate memories (and buses) for code and data.', correct: true, explanation: 'That separation lets fetch and load/store happen in parallel.' },
            { type: 'reorder-code', prompt: 'Reorder the CPU instruction cycle.',
              lines: [
                'Fetch instruction at address PC',
                'Decode the opcode',
                'Execute (ALU op or memory access)',
                'Writeback result and advance PC'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'match-pairs', prompt: 'Component → role.', leftLabel: 'Component', rightLabel: 'Role',
              pairs: [{left:'PC', right:'Address of next instruction'},{left:'IR', right:'Holds current instruction'},{left:'ALU', right:'Does arithmetic & logic'},{left:'CU', right:'Generates control signals'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Memory hierarchy ============== */
    {
      id: 'csf-u5', name: 'Unit 5 · Memory hierarchy', description: 'Registers, caches, RAM, locality',
      lessons: [
        {
          id: 'csf-u5-l1', name: 'The hierarchy & locality', icon: '🧠', xp: 20,
          challenges: [
            { type: 'concept', title: 'Smaller + faster + closer = better', content: `<p>Memory forms a pyramid — each level is bigger but slower than the one above:</p>
<div class="code-block">Registers   ~1 KB     ~0.3 ns
L1 cache    ~64 KB    ~1 ns
L2 cache    ~256 KB   ~3 ns
L3 cache    ~8 MB     ~12 ns
RAM         ~16 GB    ~100 ns
SSD         ~1 TB     ~100 µs    (~1000x slower than RAM)
HDD         ~4 TB     ~10 ms     (~100,000x slower than RAM)</div>
<p>The hierarchy works because of <strong>locality</strong>:</p>
<ul>
<li><strong>Temporal locality</strong> — if you used a byte, you\'ll probably use it again soon.</li>
<li><strong>Spatial locality</strong> — if you used byte X, you\'ll probably use byte X+1 soon.</li>
</ul>
<p>Caches exploit both: keep recently-used data + the bytes near it.</p>` },
            { type: 'multiple-choice', prompt: 'Reading sequential array elements is fast mostly because of:',
              options: [{text:'Temporal locality', code:false},{text:'Spatial locality', code:false},{text:'Cache misses', code:false},{text:'Page faults', code:false}],
              correct: 1, explanation: 'Sequential access touches nearby addresses — spatial locality.' },
            { type: 'true-false', statement: 'L1 cache is closer to the CPU and faster than L2.', correct: true, explanation: 'Higher in the hierarchy = closer + faster + smaller.' },
            { type: 'match-pairs', prompt: 'Level → typical latency.', leftLabel: 'Level', rightLabel: 'Latency (rough)',
              pairs: [{left:'Register', right:'~0.3 ns'},{left:'L1 cache', right:'~1 ns'},{left:'RAM', right:'~100 ns'},{left:'SSD', right:'~100 µs'}] },
            { type: 'reorder-code', prompt: 'Order memory levels from fastest to slowest.',
              lines: [
                'Registers',
                'L1 cache',
                'L3 cache',
                'Main RAM',
                'SSD / disk'
              ],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'output-predict', prompt: 'A program reads <code>arr[0]</code>, then <code>arr[1]</code>, ..., <code>arr[N]</code>. Which access pattern is this?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; N; i++)
  sum += arr[i];`,
              options: ['Random', 'Sequential (spatial locality)', 'Temporal only', 'No locality'], correct: 1, explanation: 'Sequential = great spatial locality, caches love this.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Pipelining ============== */
    {
      id: 'csf-u6', name: 'Unit 6 · Pipelining & hazards', description: 'Instruction overlap and what breaks it',
      lessons: [
        {
          id: 'csf-u6-l1', name: 'Pipelining basics', icon: '🚇', xp: 25,
          challenges: [
            { type: 'concept', title: 'Overlap stages like an assembly line', content: `<p>A non-pipelined CPU finishes one instruction before starting the next. A <strong>pipelined</strong> CPU overlaps stages so multiple instructions are in flight at once:</p>
<div class="code-block">Classic 5-stage RISC pipeline:

  IF → ID → EX → MEM → WB

  Cycle:     1    2    3    4    5    6    7
  Instr 1:  IF   ID   EX   MEM  WB
  Instr 2:       IF   ID   EX   MEM  WB
  Instr 3:            IF   ID   EX   MEM  WB</div>
<p>Each stage takes one clock cycle. After the pipeline fills, you complete <em>one instruction per cycle</em> (ideal CPI = 1) — even though each instruction still takes 5 cycles end-to-end.</p>
<p>Hazards stall the pipeline:</p>
<ul>
<li><strong>Structural hazard</strong> — two stages need the same hardware</li>
<li><strong>Data hazard</strong> — instruction needs a result not yet written</li>
<li><strong>Control hazard</strong> — branch outcome unknown, wrong instructions fetched</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'In the classic 5-stage pipeline, which stage comes AFTER EX?',
              options: [{text:'IF', code:false},{text:'ID', code:false},{text:'MEM', code:false},{text:'WB', code:false}],
              correct: 2, explanation: 'IF → ID → EX → MEM → WB.' },
            { type: 'multiple-choice', prompt: 'A branch is taken but the next 2 instructions were already fetched. This is a:',
              options: [{text:'Structural hazard', code:false},{text:'Data hazard', code:false},{text:'Control hazard', code:false},{text:'Cache miss', code:false}],
              correct: 2, explanation: 'Branches cause control hazards — we don\'t know where to fetch from until we resolve them.' },
            { type: 'true-false', statement: 'A perfectly running 5-stage pipeline can complete one instruction per cycle.', correct: true, explanation: 'Ideal CPI = 1; latency per instruction is still 5 cycles.' },
            { type: 'match-pairs', prompt: 'Hazard → cause.', leftLabel: 'Hazard', rightLabel: 'Cause',
              pairs: [{left:'Structural', right:'Same hardware needed twice'},{left:'Data', right:'Operand not yet ready'},{left:'Control', right:'Branch direction unknown'},{left:'RAW', right:'Read after write'}] },
            { type: 'tap-tokens', prompt: 'List the 5 pipeline stages in order.',
              tokens: ['IF', 'ID', 'EX', 'MEM', 'WB', 'PC', 'ALU'],
              correctOrder: ['IF', 'ID', 'EX', 'MEM', 'WB'], explanation: 'Instruction Fetch · Decode · Execute · Memory · Writeback.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — ISA & Assembly ============== */
    {
      id: 'csf-u7', name: 'Unit 7 · ISA & assembly intuition', description: 'RISC vs CISC, registers, mnemonics',
      lessons: [
        {
          id: 'csf-u7-l1', name: 'How code becomes ops', icon: '🧾', xp: 20,
          challenges: [
            { type: 'concept', title: 'The instruction set is the contract', content: `<p>The <strong>ISA</strong> (Instruction Set Architecture) is the contract between hardware and software. It defines:</p>
<ul>
<li>The available instructions (opcodes) and what they do</li>
<li>The visible registers (e.g. R0–R31)</li>
<li>Memory addressing modes</li>
<li>How procedure calls and interrupts work</li>
</ul>
<div class="code-block"><span class="com">// A typical RISC routine</span>
ADD  R1, R2, R3     <span class="com">// R1 = R2 + R3</span>
LW   R4, 0(R5)      <span class="com">// load word from address in R5</span>
BEQ  R1, R0, label  <span class="com">// branch if R1 == 0</span>
JR   R31            <span class="com">// return</span></div>
<p><strong>RISC</strong> (ARM, RISC-V, MIPS): few simple instructions, fixed length, load/store architecture.<br>
<strong>CISC</strong> (x86): many complex instructions, variable length, ops can read directly from memory.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a typical RISC trait?',
              options: [{text:'Variable instruction length', code:false},{text:'Memory operands on most instructions', code:false},{text:'Fixed-length, load/store only', code:false},{text:'Hundreds of addressing modes', code:false}],
              correct: 2, explanation: 'RISC = uniform encoding + load/store discipline.' },
            { type: 'multiple-choice', prompt: 'x86 is best described as:',
              options: [{text:'RISC', code:false},{text:'CISC', code:false},{text:'Stack machine', code:false},{text:'VLIW', code:false}],
              correct: 1, explanation: 'x86 is the canonical CISC ISA, though modern x86 cores decode into RISC-like micro-ops internally.' },
            { type: 'match-pairs', prompt: 'Mnemonic → meaning.', leftLabel: 'Mnemonic', rightLabel: 'Meaning',
              pairs: [{left:'LW', right:'Load word from memory'},{left:'SW', right:'Store word to memory'},{left:'ADD', right:'Register add'},{left:'BEQ', right:'Branch if equal'}] },
            { type: 'true-false', statement: 'RISC ISAs typically use a load/store model — only LW/SW touch memory.', correct: true, explanation: 'Arithmetic ops work on registers only.' },
            { type: 'output-predict', prompt: 'R2 = 5, R3 = 7. After <code>ADD R1, R2, R3</code>, what is R1?',
              code: `R2 = <span class="num">5</span>
R3 = <span class="num">7</span>
<span class="fn">ADD</span> R1, R2, R3`,
              options: ['2', '5', '7', '12'], correct: 3, explanation: 'ADD destination, src1, src2 → R1 = 5 + 7 = 12.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — DFA / NFA ============== */
    {
      id: 'csf-u8', name: 'Unit 8 · Finite automata', description: 'DFAs and NFAs accept regular languages',
      lessons: [
        {
          id: 'csf-u8-l1', name: 'DFAs & NFAs', icon: '🔁', xp: 20,
          challenges: [
            { type: 'concept', title: 'States, transitions, accept', content: `<p>A <strong>finite automaton</strong> is a machine with a finite set of states. It reads an input string symbol-by-symbol; after the last symbol, if it lands on an <em>accept state</em>, the string is accepted.</p>
<div class="code-block">DFA = (Q, Σ, δ, q₀, F)
  Q  = states          F  = accept states ⊆ Q
  Σ  = input alphabet  q₀ = start state
  δ  : Q × Σ → Q       <span class="com">// one transition per (state, symbol)</span></div>
<p>A <strong>DFA</strong> has exactly one transition per (state, symbol). An <strong>NFA</strong> may have zero, one, or many — and may include ε-transitions (move without reading input).</p>
<p>Surprisingly, DFAs and NFAs accept exactly the same set of languages: the <strong>regular languages</strong>. Every NFA can be converted to an equivalent DFA (subset construction) — possibly with exponentially more states.</p>` },
            { type: 'multiple-choice', prompt: 'Which is TRUE about DFAs and NFAs?',
              options: [{text:'NFAs are strictly more powerful', code:false},{text:'DFAs are strictly more powerful', code:false},{text:'They accept the same class of languages', code:false},{text:'Only DFAs accept regular languages', code:false}],
              correct: 2, explanation: 'Same expressive power; NFAs are often smaller to write.' },
            { type: 'true-false', statement: 'An NFA may have ε-transitions; a DFA may not.', correct: true, explanation: 'ε-transitions are an NFA-only feature.' },
            { type: 'match-pairs', prompt: 'DFA tuple → meaning.', leftLabel: 'Symbol', rightLabel: 'Meaning',
              pairs: [{left:'Q', right:'Finite set of states'},{left:'Σ', right:'Input alphabet'},{left:'δ', right:'Transition function'},{left:'F', right:'Accept states'}] },
            { type: 'multiple-choice', prompt: 'Converting an NFA to a DFA may cause:',
              options: [{text:'Loss of expressive power', code:false},{text:'Exponential blow-up in states', code:false},{text:'Logarithmic shrinkage', code:false},{text:'Loss of determinism', code:false}],
              correct: 1, explanation: 'Subset construction: up to 2^n states.' },
            { type: 'fill-blank', prompt: 'DFAs and NFAs both recognize the class of ___ languages.',
              codeLines: [{html:'DFAs and NFAs both recognize the class of <span class="fn">_BLANK_</span> languages.'}],
              tokens: ['regular','context-free','recursive','recursive-enumerable'], correctAnswer: 'regular', explanation: 'Finite automata ↔ regular languages.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Regular expressions & Chomsky hierarchy ============== */
    {
      id: 'csf-u9', name: 'Unit 9 · Regex & the Chomsky hierarchy', description: 'Where regular languages fit',
      lessons: [
        {
          id: 'csf-u9-l1', name: 'Regex & language classes', icon: '🪜', xp: 20,
          challenges: [
            { type: 'concept', title: 'Four layers of language power', content: `<p>The <strong>Chomsky hierarchy</strong> ranks formal languages by expressive power:</p>
<div class="code-block">Type 3 · Regular            — DFA / NFA / regex
Type 2 · Context-free       — pushdown automaton (one stack)
Type 1 · Context-sensitive  — linear-bounded automaton
Type 0 · Recursively enum.  — Turing machine</div>
<p>Each layer strictly contains the ones below it. Things regex can\'t do but CFGs can: matching balanced parentheses. Things even CFGs can\'t do: <code>aⁿbⁿcⁿ</code>.</p>
<p>Regex operators map directly to NFA building blocks:</p>
<ul>
<li><code>|</code> — union (two NFAs in parallel)</li>
<li><code>·</code> (concatenation) — chained NFAs</li>
<li><code>*</code> — Kleene star (loop back)</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Which class of language can <code>(ab)*</code> describe?',
              options: [{text:'Regular', code:false},{text:'Context-free only', code:false},{text:'Recursively enumerable only', code:false},{text:'None of these', code:false}],
              correct: 0, explanation: 'A regex describes a regular language by definition.' },
            { type: 'true-false', statement: 'The language { aⁿbⁿ | n ≥ 0 } is regular.', correct: false, explanation: 'It needs to "count" — that requires a stack. It\'s context-free, not regular.' },
            { type: 'match-pairs', prompt: 'Layer → machine.', leftLabel: 'Layer', rightLabel: 'Machine',
              pairs: [{left:'Regular', right:'Finite automaton'},{left:'Context-free', right:'Pushdown automaton'},{left:'Context-sensitive', right:'Linear-bounded automaton'},{left:'Recursively enum.', right:'Turing machine'}] },
            { type: 'multiple-choice', prompt: 'In regex, what does <code>a*</code> mean?',
              options: [{text:'Exactly one a', code:false},{text:'Zero or more a\'s', code:false},{text:'One or more a\'s', code:false},{text:'Optional a', code:false}],
              correct: 1, explanation: 'Kleene star: zero or more occurrences.' },
            { type: 'reorder-code', prompt: 'Order the Chomsky hierarchy from MOST restrictive (smallest language class) to least.',
              lines: [
                'Type 3 — Regular',
                'Type 2 — Context-free',
                'Type 1 — Context-sensitive',
                'Type 0 — Recursively enumerable'
              ],
              correctOrder: [0, 1, 2, 3] }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — CFG & PDA ============== */
    {
      id: 'csf-u10', name: 'Unit 10 · CFGs & pushdown automata', description: 'Grammars with a stack',
      lessons: [
        {
          id: 'csf-u10-l1', name: 'Grammars that "count"', icon: '📚', xp: 25,
          challenges: [
            { type: 'concept', title: 'Productions + a single stack', content: `<p>A <strong>context-free grammar</strong> (CFG) is a set of production rules where the left side is a single nonterminal:</p>
<div class="code-block">S → aSb | ε        <span class="com">// generates {aⁿbⁿ | n ≥ 0}</span>

S → ( S ) S | ε    <span class="com">// matched parens</span>

E → E + T | T
T → T * F | F
F → ( E ) | num    <span class="com">// arithmetic expressions</span></div>
<p>The machine that recognizes context-free languages is the <strong>pushdown automaton</strong> (PDA): a finite automaton with a single, unbounded stack.</p>
<p>That extra stack is exactly what lets it count and match nested structures — which is why almost every programming language\'s syntax is described by a CFG.</p>` },
            { type: 'multiple-choice', prompt: 'Which language is context-free but NOT regular?',
              options: [{text:'a*b*', code:false},{text:'(a|b)*', code:false},{text:'aⁿbⁿ for n ≥ 0', code:false},{text:'all strings of even length', code:false}],
              correct: 2, explanation: 'Matching equal counts requires a stack — beyond a finite automaton.' },
            { type: 'true-false', statement: 'A pushdown automaton has unlimited memory but in a strict last-in-first-out form.', correct: true, explanation: 'The stack is the only auxiliary memory.' },
            { type: 'match-pairs', prompt: 'Match grammar concept to its role.', leftLabel: 'Concept', rightLabel: 'Role',
              pairs: [{left:'Terminal', right:'Symbol in the final string'},{left:'Nonterminal', right:'Placeholder, gets expanded'},{left:'Production', right:'Rewrite rule'},{left:'Start symbol', right:'Root of every derivation'}] },
            { type: 'fill-blank', prompt: 'A PDA is a finite automaton plus a ___.',
              codeLines: [{html:'A pushdown automaton extends a finite automaton with a <span class="fn">_BLANK_</span>.'}],
              tokens: ['stack','queue','tape','heap'], correctAnswer: 'stack', explanation: 'LIFO stack — that\'s the defining feature.' },
            { type: 'output-predict', prompt: 'Using <code>S → aSb | ε</code>, which string is derivable?',
              code: `S → aSb | ε`,
              options: ['aab', 'aabb', 'abab', 'ba'], correct: 1, explanation: 'S ⇒ aSb ⇒ aaSbb ⇒ aabb.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Turing machines & decidability ============== */
    {
      id: 'csf-u11', name: 'Unit 11 · Turing machines & decidability', description: 'The limits of computation',
      lessons: [
        {
          id: 'csf-u11-l1', name: 'Turing machines & the halting problem', icon: '♾️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A model of "anything computable"', content: `<p>A <strong>Turing machine</strong> has a finite control + an infinite tape it can read, write, and move left/right on. It\'s laughably impractical as hardware but powerful as a model: the <strong>Church-Turing thesis</strong> says everything algorithmically computable can be done by some Turing machine.</p>
<div class="code-block">A language L is:
  Decidable    — some TM halts on every input and accepts iff x ∈ L
  Recognizable — some TM halts and accepts when x ∈ L
                 (may loop forever when x ∉ L)
  Undecidable  — no TM can decide L</div>
<p>The <strong>halting problem</strong> — "given program P and input x, does P halt on x?" — is undecidable. Alan Turing\'s 1936 diagonalization proof showed no algorithm can solve it for all inputs.</p>
<p>Consequences: many program-analysis questions (does this code have a bug? is this loop infinite?) are <em>provably</em> impossible to solve in full generality.</p>` },
            { type: 'multiple-choice', prompt: 'The halting problem is:',
              options: [{text:'Decidable in polynomial time', code:false},{text:'Decidable but slow', code:false},{text:'Undecidable', code:false},{text:'NP-complete', code:false}],
              correct: 2, explanation: 'Turing proved it has no general algorithm.' },
            { type: 'true-false', statement: 'Every recognizable language is decidable.', correct: false, explanation: 'Recognizable allows looping forever on non-members; decidable does not.' },
            { type: 'match-pairs', prompt: 'Concept → meaning.', leftLabel: 'Concept', rightLabel: 'Meaning',
              pairs: [{left:'Decidable', right:'Always halts with yes/no'},{left:'Recognizable', right:'Halts on yes, may loop on no'},{left:'Undecidable', right:'No algorithm exists'},{left:'Co-recognizable', right:'Complement is recognizable'}] },
            { type: 'multiple-choice', prompt: 'The Church-Turing thesis says:',
              options: [{text:'Every problem has a polynomial algorithm', code:false},{text:'Anything algorithmically computable is computable by a Turing machine', code:false},{text:'NP = P', code:false},{text:'No machine halts on every input', code:false}],
              correct: 1, explanation: 'It identifies "computable" with "Turing-computable".' },
            { type: 'tap-tokens', prompt: 'Build the components of a Turing machine.',
              tokens: ['tape', 'head', 'control', 'stack', 'queue', 'register'],
              correctOrder: ['tape', 'head', 'control'], explanation: 'Infinite tape + read/write head + finite control.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Complexity ============== */
    {
      id: 'csf-u12', name: 'Unit 12 · Computational complexity', description: 'P, NP, NP-complete, reductions',
      lessons: [
        {
          id: 'csf-u12-l1', name: 'P vs NP', icon: '⚖️', xp: 30,
          challenges: [
            { type: 'concept', title: 'How hard is "hard"?', content: `<p>Complexity classes group problems by the resources (time/space) needed to solve them.</p>
<div class="code-block">P     — decidable in polynomial time on a DTM
NP    — verifiable in polynomial time given a "certificate"
NP-hard      — every NP problem reduces to it (≥ NP in hardness)
NP-complete  — in NP AND NP-hard</div>
<p>P ⊆ NP is obvious; P = NP is the famous open question. Most computer scientists believe P ≠ NP, but nobody has proved it.</p>
<p>Classic NP-complete problems: SAT, 3-SAT, vertex cover, traveling salesman (decision form), subset sum, graph coloring. A polynomial algorithm for any one of them would solve all of NP.</p>
<p>A <strong>reduction</strong> from A to B is a polynomial-time translator: solve B → you\'ve solved A.</p>` },
            { type: 'multiple-choice', prompt: 'Which is TRUE by definition?',
              options: [{text:'P = NP', code:false},{text:'P ⊆ NP', code:false},{text:'NP ⊆ P', code:false},{text:'NP-hard ⊆ NP', code:false}],
              correct: 1, explanation: 'Anything solvable in polynomial time is trivially verifiable in polynomial time.' },
            { type: 'multiple-choice', prompt: 'A problem is NP-complete if it is:',
              options: [{text:'In P', code:false},{text:'In NP and NP-hard', code:false},{text:'Undecidable', code:false},{text:'Solvable by Turing machine', code:false}],
              correct: 1, explanation: 'Both at once: in NP AND every NP problem reduces to it.' },
            { type: 'true-false', statement: 'If SAT had a polynomial-time algorithm, every NP problem would.', correct: true, explanation: 'SAT is NP-complete — solving it solves all of NP via reductions.' },
            { type: 'match-pairs', prompt: 'Problem → class (commonly believed).', leftLabel: 'Problem', rightLabel: 'Class',
              pairs: [{left:'Sorting', right:'P'},{left:'3-SAT', right:'NP-complete'},{left:'Halting problem', right:'Undecidable'},{left:'Shortest path', right:'P'}] },
            { type: 'multiple-choice', prompt: 'A polynomial-time reduction from A to B shows:',
              options: [{text:'A is easier than B', code:false},{text:'B is at least as hard as A', code:false},{text:'A and B are unrelated', code:false},{text:'B is undecidable', code:false}],
              correct: 1, explanation: 'If we can transform A→B quickly, then B being easy implies A is easy.' },
            { type: 'output-predict', prompt: 'Suppose someone proves SAT ∈ P. What follows?',
              code: `<span class="kw">if</span> SAT ∈ P
<span class="kw">then</span> ?`,
              options: ['Only SAT is in P', 'P = NP', 'NP = undecidable', 'Nothing'], correct: 1, explanation: 'SAT is NP-complete; collapsing it into P collapses all of NP into P.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Compilers ============== */
    {
      id: 'csf-u13', name: 'Unit 13 · Compiler basics', description: 'Lexer · parser · AST · codegen',
      lessons: [
        {
          id: 'csf-u13-l1', name: 'How source becomes machine code', icon: '🛠️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A pipeline of transformations', content: `<p>A compiler turns source text into something a machine can run. The classic phases:</p>
<div class="code-block">Source                       <span class="com">// "x = a + 2;"</span>
  │
  ▼ Lexer (a.k.a. scanner)
Tokens                       <span class="com">// ID(x) ASSIGN ID(a) PLUS NUM(2) SEMI</span>
  │
  ▼ Parser
AST (abstract syntax tree)
  │
  ▼ Semantic analysis        <span class="com">// type checking, scope resolution</span>
Annotated AST / IR
  │
  ▼ Optimizer                <span class="com">// constant folding, dead-code elim</span>
Optimized IR
  │
  ▼ Code generator
Target code                  <span class="com">// machine code or bytecode</span></div>
<p>The <strong>lexer</strong> uses regular expressions (regular languages!). The <strong>parser</strong> uses a CFG. The <strong>AST</strong> is the structured form your optimizer and codegen actually work on.</p>` },
            { type: 'multiple-choice', prompt: 'Which phase turns a string of characters into a stream of tokens?',
              options: [{text:'Parser', code:false},{text:'Lexer', code:false},{text:'Optimizer', code:false},{text:'Code generator', code:false}],
              correct: 1, explanation: 'The lexer (scanner) groups characters into tokens.' },
            { type: 'true-false', statement: 'Parsers typically use a context-free grammar.', correct: true, explanation: 'Lexers → regular; parsers → CFG.' },
            { type: 'reorder-code', prompt: 'Order the standard compiler phases.',
              lines: [
                'Lexical analysis (tokens)',
                'Parsing (AST)',
                'Semantic analysis (typed AST)',
                'Optimization (IR)',
                'Code generation'
              ],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'match-pairs', prompt: 'Phase → output.', leftLabel: 'Phase', rightLabel: 'Output',
              pairs: [{left:'Lexer', right:'Tokens'},{left:'Parser', right:'AST'},{left:'Semantic', right:'Annotated tree'},{left:'Codegen', right:'Target code'}] },
            { type: 'output-predict', prompt: 'What optimization is this?',
              code: `<span class="com">// before</span>
<span class="ty">int</span> x = <span class="num">3</span> + <span class="num">4</span>;
<span class="com">// after</span>
<span class="ty">int</span> x = <span class="num">7</span>;`,
              options: ['Inlining', 'Constant folding', 'Loop unrolling', 'Register allocation'], correct: 1, explanation: 'Evaluating constant expressions at compile time = constant folding.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Paradigms & Type Systems ============== */
    {
      id: 'csf-u14', name: 'Unit 14 · Paradigms & type systems', description: 'Imperative · functional · OO · static/dynamic',
      lessons: [
        {
          id: 'csf-u14-l1', name: 'Programming paradigms', icon: '🎨', xp: 20,
          challenges: [
            { type: 'concept', title: 'How we organize computation', content: `<p>A <strong>paradigm</strong> is a style of structuring programs.</p>
<ul>
<li><strong>Imperative</strong> — "do this, then this." (C, Pascal)</li>
<li><strong>Procedural</strong> — imperative with named procedures (a subset).</li>
<li><strong>Object-oriented</strong> — bundles of state + behavior. (Java, C#)</li>
<li><strong>Functional</strong> — computation as expression evaluation; values are immutable, functions are first-class. (Haskell, OCaml, much of JS)</li>
<li><strong>Declarative</strong> — say what you want, not how. (SQL, Prolog, regex)</li>
<li><strong>Logic</strong> — programs as sets of facts and inference rules. (Prolog)</li>
</ul>
<p>Most modern languages are <em>multi-paradigm</em>. Python, JS, Scala, Rust all blend OO and functional features.</p>` },
            { type: 'multiple-choice', prompt: 'SQL is most accurately described as:',
              options: [{text:'Imperative', code:false},{text:'Declarative', code:false},{text:'Functional', code:false},{text:'Object-oriented', code:false}],
              correct: 1, explanation: 'You declare WHAT you want; the engine figures out HOW.' },
            { type: 'true-false', statement: 'Pure functional code avoids mutable state.', correct: true, explanation: 'Values are immutable; functions are referentially transparent.' },
            { type: 'match-pairs', prompt: 'Paradigm → exemplar language.', leftLabel: 'Paradigm', rightLabel: 'Language',
              pairs: [{left:'Object-oriented', right:'Java'},{left:'Functional', right:'Haskell'},{left:'Logic', right:'Prolog'},{left:'Declarative', right:'SQL'}] },
            { type: 'multiple-choice', prompt: 'First-class functions means:',
              options: [{text:'Functions run first', code:false},{text:'Functions are values you can pass and return', code:false},{text:'Functions are pure', code:false},{text:'Functions can only be top-level', code:false}],
              correct: 1, explanation: 'You can store them in variables, pass them as arguments, return them — like any other value.' }
          ]
        },
        {
          id: 'csf-u14-l2', name: 'Type systems', icon: '🧮', xp: 25,
          challenges: [
            { type: 'concept', title: 'Static · dynamic · strong · weak', content: `<p>Two independent axes:</p>
<div class="code-block">Static  vs  Dynamic   — when are types checked?
  static  → at compile time   (Java, Rust, Haskell)
  dynamic → at run time       (Python, JS, Ruby)

Strong  vs  Weak      — how strict is the checker about coercions?
  strong → "1 + \'2\'" is an error                (Python, Java)
  weak   → "1 + \'2\'" silently coerces           (classic JS, C)</div>
<p>"Strong/weak" is a fuzzy spectrum, not a binary. Type inference (Haskell, Rust, Kotlin) gives you static-strong safety without verbose annotations.</p>
<p><strong>Type checking</strong> catches whole categories of bugs at compile time but constrains what you can express. <strong>Duck typing</strong> ("if it quacks like a duck") is the dynamic counterpart: care about shape, not name.</p>` },
            { type: 'multiple-choice', prompt: 'Python is best described as:',
              options: [{text:'Static, strong', code:false},{text:'Static, weak', code:false},{text:'Dynamic, strong', code:false},{text:'Dynamic, weak', code:false}],
              correct: 2, explanation: 'Types checked at run time, but coercions are limited — <code>"a" + 1</code> raises.' },
            { type: 'multiple-choice', prompt: 'A benefit of static typing is:',
              options: [{text:'Faster runtime', code:false},{text:'Catches type errors before running', code:false},{text:'Smaller code', code:false},{text:'Looser coercions', code:false}],
              correct: 1, explanation: 'Whole bug classes prevented at compile time.' },
            { type: 'match-pairs', prompt: 'Language → typing.', leftLabel: 'Language', rightLabel: 'Typing',
              pairs: [{left:'Haskell', right:'Static, strong, inferred'},{left:'Python', right:'Dynamic, strong'},{left:'C', right:'Static, weak'},{left:'JavaScript', right:'Dynamic, weak'}] },
            { type: 'true-false', statement: 'Dynamic typing means there are no types — only values.', correct: false, explanation: 'Dynamic just means the check happens at run time, not compile time. Values still have types.' },
            { type: 'output-predict', prompt: 'In strict Python, what does this do?',
              code: `<span class="ty">print</span>(<span class="num">1</span> + <span class="str">"2"</span>)`,
              options: ['3', '"12"', '12', 'TypeError'], correct: 3, explanation: 'Python is strongly typed — no silent int↔string coercion.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Software engineering ============== */
    {
      id: 'csf-u15', name: 'Unit 15 · Software engineering basics', description: 'SDLC, agile, testing, version control',
      lessons: [
        {
          id: 'csf-u15-l1', name: 'SDLC & the testing pyramid', icon: '📐', xp: 20,
          challenges: [
            { type: 'concept', title: 'How real-world projects are built', content: `<p>The <strong>software development life cycle (SDLC)</strong> is the sequence of stages a project moves through:</p>
<div class="code-block">Requirements → Design → Implementation → Testing → Deployment → Maintenance</div>
<p>Two dominant project styles:</p>
<ul>
<li><strong>Waterfall</strong> — finish each phase fully before the next. Predictable, but slow to react to change.</li>
<li><strong>Agile</strong> (Scrum, Kanban) — short iterations (sprints), continuous feedback, working software each cycle.</li>
</ul>
<p>The <strong>testing pyramid</strong> prescribes the ratio of test types you should write:</p>
<div class="code-block">       /\\           E2E   (few, slow, brittle)
      /  \\
     /----\\         Integration (some)
    /      \\
   /________\\       Unit (many, fast, focused)</div>
<p><strong>Version control</strong> (Git, Mercurial) tracks every change. Branches let multiple people work in parallel; merges combine the work.</p>` },
            { type: 'multiple-choice', prompt: 'In the testing pyramid, which tests should you have the MOST of?',
              options: [{text:'End-to-end', code:false},{text:'Integration', code:false},{text:'Unit', code:false},{text:'Manual smoke', code:false}],
              correct: 2, explanation: 'Unit tests are cheap, fast, and focused — write them generously.' },
            { type: 'multiple-choice', prompt: 'Waterfall vs Agile — which describes Agile?',
              options: [{text:'Strict phase order, fixed up-front spec', code:false},{text:'Short iterations, working software each cycle', code:false},{text:'No documentation, no planning', code:false},{text:'Same as DevOps', code:false}],
              correct: 1, explanation: 'Iterative + adaptive — that\'s Agile\'s core.' },
            { type: 'true-false', statement: 'A "merge conflict" in Git happens when two branches changed the same lines and Git can\'t auto-combine them.', correct: true, explanation: 'You resolve manually, then commit.' },
            { type: 'match-pairs', prompt: 'Test type → scope.', leftLabel: 'Test', rightLabel: 'Scope',
              pairs: [{left:'Unit', right:'One function/class'},{left:'Integration', right:'Several modules together'},{left:'E2E', right:'Whole system, user view'},{left:'Smoke', right:'Quick "does it still boot?"'}] },
            { type: 'reorder-code', prompt: 'Order the classic SDLC phases.',
              lines: [
                'Requirements gathering',
                'Design',
                'Implementation',
                'Testing',
                'Deployment',
                'Maintenance'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'fill-blank', prompt: 'Working software in short iterations is the heart of:',
              codeLines: [{html:'A project organized around short, iterative cycles is using <span class="fn">_BLANK_</span>.'}],
              tokens: ['waterfall','agile','spiral','prototype'], correctAnswer: 'agile', explanation: 'Short iterations + continuous feedback = Agile.' }
          ]
        }
      ]
    }

  ]
});

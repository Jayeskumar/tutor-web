LEARN('java', {
  intro: 'Master Java from "Hello World" to advanced OOP, generics, and streams — with live code steppers and visualizations.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'java-c1', title: 'Hello, Java!', icon: '👋', sections: [
      { type: 'heading', text: 'What is Java?', level: 1 },
      { type: 'para', html: '<strong>Java</strong> is a general-purpose, object-oriented programming language created in 1995. It runs on the <em>Java Virtual Machine (JVM)</em>, which means the same code runs on Windows, macOS, Linux, and Android.' },
      { type: 'callout', kind: 'info', html: '<strong>"Write Once, Run Anywhere"</strong> — Java compiles to platform-independent <em>bytecode</em>, and any JVM can execute it.' },
      { type: 'heading', text: 'How Java code runs', level: 2 },
      { type: 'image', alt: 'java compile run flow', svg:
`<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="140" fill="#fafafa" rx="8"/>
  <rect x="20" y="40" width="120" height="60" rx="10" fill="#7c4dff"/>
  <text x="80" y="68" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Hello.java</text>
  <text x="80" y="86" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">(source)</text>
  <text x="180" y="65" font-family="Nunito" font-weight="bold" fill="#666">→ javac →</text>
  <rect x="240" y="40" width="120" height="60" rx="10" fill="#1cb0f6"/>
  <text x="300" y="68" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Hello.class</text>
  <text x="300" y="86" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">(bytecode)</text>
  <text x="400" y="65" font-family="Nunito" font-weight="bold" fill="#666">→ JVM →</text>
  <rect x="460" y="40" width="120" height="60" rx="10" fill="#58cc02"/>
  <text x="520" y="68" text-anchor="middle" fill="white" font-weight="bold" font-family="Nunito">Output</text>
  <text x="520" y="86" text-anchor="middle" fill="white" font-size="11" font-family="Nunito">(runs anywhere)</text>
</svg>` },
      { type: 'heading', text: 'Your first program', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public class</span> <span class="ty">Hello</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hello, World!"</span>);
  }
}` },
      { type: 'list', kind: 'check', items: [
        '<code>public class Hello</code> — declares a class named Hello',
        '<code>main</code> method is where execution starts',
        '<code>System.out.println</code> prints a line to the console',
        'Every statement ends with a semicolon <code>;</code>'
      ]},
      { type: 'heading', text: 'Step through it', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="kw">public class</span> <span class="ty">Hello</span> {',
          '  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {',
          '    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hello!"</span>);',
          '    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Java rocks."</span>);',
          '  }',
          '}'
        ],
        steps: [
          { line: 0, vars: {}, note: 'JVM loads the Hello class.' },
          { line: 1, vars: { args: '[]' }, note: 'Enters main. args holds command-line arguments.' },
          { line: 2, vars: { args: '[]' }, note: 'Prints "Hello!" to the console.' },
          { line: 3, vars: { args: '[]' }, note: 'Prints "Java rocks." on the next line.' },
          { line: 4, vars: {}, note: 'main returns; program ends.' }
        ]
      }},
      { type: 'callout', kind: 'tip', html: '<strong>Java is case-sensitive.</strong> <code>System</code> works; <code>system</code> errors out.' },
      { type: 'heading', text: 'Comments', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// single-line comment</span>
<span class="com">/* multi-line
   comment */</span>
<span class="com">/** Javadoc — documentation comment */</span>` }
    ]},

    /* ============== CH 2 ============== */
    { id: 'java-c2', title: 'Variables & Data Types', icon: '📦', sections: [
      { type: 'heading', text: 'Variables = labeled boxes', level: 1 },
      { type: 'para', html: 'A <strong>variable</strong> stores a value. In Java, you declare it with a <em>type</em> + <em>name</em>, then optionally an initial value.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> age = <span class="num">25</span>;
<span class="ty">double</span> price = <span class="num">19.99</span>;
<span class="ty">char</span> grade = <span class="str">\'A\'</span>;
<span class="ty">boolean</span> isReady = <span class="kw">true</span>;
<span class="ty">String</span> name = <span class="str">"Alice"</span>;` },
      { type: 'heading', text: 'The 8 primitive types', level: 2 },
      { type: 'image', alt: 'primitive types', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14">Primitives by size</text>
  <g font-family="JetBrains Mono" font-size="11">
    <rect x="30" y="50" width="50" height="40" fill="#7c4dff"/><text x="55" y="75" text-anchor="middle" fill="white" font-weight="bold">byte</text><text x="55" y="105" text-anchor="middle" fill="#666">8 bit</text>
    <rect x="100" y="50" width="80" height="40" fill="#7c4dff"/><text x="140" y="75" text-anchor="middle" fill="white" font-weight="bold">short</text><text x="140" y="105" text-anchor="middle" fill="#666">16 bit</text>
    <rect x="200" y="50" width="140" height="40" fill="#5e35d5"/><text x="270" y="75" text-anchor="middle" fill="white" font-weight="bold">int</text><text x="270" y="105" text-anchor="middle" fill="#666">32 bit (default integer)</text>
    <rect x="360" y="50" width="220" height="40" fill="#4527a0"/><text x="470" y="75" text-anchor="middle" fill="white" font-weight="bold">long</text><text x="470" y="105" text-anchor="middle" fill="#666">64 bit</text>

    <rect x="30" y="130" width="140" height="40" fill="#1cb0f6"/><text x="100" y="155" text-anchor="middle" fill="white" font-weight="bold">float</text><text x="100" y="185" text-anchor="middle" fill="#666">32 bit decimal</text>
    <rect x="190" y="130" width="220" height="40" fill="#0e88c8"/><text x="300" y="155" text-anchor="middle" fill="white" font-weight="bold">double</text><text x="300" y="185" text-anchor="middle" fill="#666">64 bit decimal (default)</text>
    <rect x="430" y="130" width="70" height="40" fill="#58cc02"/><text x="465" y="155" text-anchor="middle" fill="white" font-weight="bold">char</text><text x="465" y="185" text-anchor="middle" fill="#666">16 bit</text>
    <rect x="510" y="130" width="80" height="40" fill="#ff9600"/><text x="550" y="155" text-anchor="middle" fill="white" font-weight="bold">boolean</text><text x="550" y="185" text-anchor="middle" fill="#666">true / false</text>
  </g>
</svg>` },
      { type: 'callout', kind: 'info', html: '<code>String</code> is NOT a primitive — it\'s a class. But Java gives it special syntax (string literals).' },
      { type: 'heading', text: 'Type casting', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Implicit (widening) — automatic, no data loss</span>
<span class="ty">int</span> i = <span class="num">42</span>;
<span class="ty">double</span> d = i;        <span class="com">// d = 42.0</span>

<span class="com">// Explicit (narrowing) — you ask, may lose info</span>
<span class="ty">double</span> pi = <span class="num">3.99</span>;
<span class="ty">int</span> n = (<span class="ty">int</span>) pi;   <span class="com">// n = 3 (truncated)</span>` },
      { type: 'callout', kind: 'warn', html: '<strong>Narrowing casts truncate</strong> — <code>(int) 3.99</code> = 3, not 4.' },
      { type: 'heading', text: 'Constants with `final`', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">final</span> <span class="ty">double</span> PI = <span class="num">3.14159</span>;
PI = <span class="num">3</span>;  <span class="com">// ❌ compile error</span>` }
    ]},

    /* ============== CH 3 ============== */
    { id: 'java-c3', title: 'Operators', icon: '➕', sections: [
      { type: 'heading', text: 'The toolbox', level: 1 },
      { type: 'para', html: 'Operators combine values to produce new values.' },
      { type: 'heading', text: 'Arithmetic', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> a = <span class="num">7</span>, b = <span class="num">3</span>;
a + b   <span class="com">// 10</span>
a - b   <span class="com">// 4</span>
a * b   <span class="com">// 21</span>
a / b   <span class="com">// 2  (integer division — truncates)</span>
a % b   <span class="com">// 1  (modulo / remainder)</span>` },
      { type: 'callout', kind: 'warn', html: '<strong>Integer division truncates.</strong> <code>7 / 3</code> is 2 in Java. Use doubles for true division: <code>7.0 / 3 = 2.333...</code>' },
      { type: 'heading', text: 'Comparison & logical', level: 2 },
      { type: 'code', lang: 'java', code:
`a == b   <span class="com">// equal</span>
a != b   <span class="com">// not equal</span>
a > b    a < b    a >= b    a <= b

<span class="com">// logical</span>
(a > <span class="num">0</span>) && (a < <span class="num">10</span>)   <span class="com">// AND (both true)</span>
(a < <span class="num">0</span>) || (b > <span class="num">0</span>)   <span class="com">// OR (at least one true)</span>
!ready                <span class="com">// NOT (flips boolean)</span>` },
      { type: 'callout', kind: 'tip', html: 'Java\'s <code>&&</code> and <code>||</code> <strong>short-circuit</strong>: if the left side decides the result, the right side isn\'t even evaluated.' },
      { type: 'heading', text: 'Increment & assignment shortcuts', level: 2 },
      { type: 'code', lang: 'java', code:
`x++   <span class="com">// x = x + 1 (post-increment)</span>
++x   <span class="com">// pre-increment</span>
x--   x = x - 1
x += <span class="num">5</span>   x -= <span class="num">5</span>   x *= <span class="num">2</span>   x /= <span class="num">2</span>   x %= <span class="num">3</span>` },
      { type: 'heading', text: 'Ternary operator', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span> max = (a > b) ? a : b;
<span class="com">// Same as if/else but inline</span>` },
      { type: 'heading', text: 'Precedence cheat sheet (high → low)', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        '<code>()</code> — parentheses (always wins)',
        '<code>++</code> <code>--</code> <code>!</code> — unary',
        '<code>*</code> <code>/</code> <code>%</code>',
        '<code>+</code> <code>-</code>',
        '<code><</code> <code><=</code> <code>></code> <code>>=</code>',
        '<code>==</code> <code>!=</code>',
        '<code>&&</code>',
        '<code>||</code>',
        '<code>?:</code> — ternary',
        '<code>=</code> <code>+=</code> ... — assignment'
      ]}
    ]},

    /* ============== CH 4 ============== */
    { id: 'java-c4', title: 'Strings', icon: '🔤', sections: [
      { type: 'heading', text: 'Working with text', level: 1 },
      { type: 'para', html: '<code>String</code> is the most-used class in Java. Strings are <strong>immutable</strong> — every operation creates a new String.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">String</span> s = <span class="str">"Hello, Java!"</span>;
s.<span class="fn">length</span>();          <span class="com">// 12</span>
s.<span class="fn">charAt</span>(<span class="num">0</span>);        <span class="com">// \'H\'</span>
s.<span class="fn">substring</span>(<span class="num">7</span>);    <span class="com">// "Java!"</span>
s.<span class="fn">substring</span>(<span class="num">7</span>, <span class="num">11</span>); <span class="com">// "Java"</span>
s.<span class="fn">indexOf</span>(<span class="str">"Java"</span>); <span class="com">// 7</span>
s.<span class="fn">toUpperCase</span>();     <span class="com">// "HELLO, JAVA!"</span>
s.<span class="fn">replace</span>(<span class="str">"Java"</span>, <span class="str">"World"</span>);  <span class="com">// "Hello, World!"</span>
s.<span class="fn">contains</span>(<span class="str">"Java"</span>);  <span class="com">// true</span>
s.<span class="fn">split</span>(<span class="str">", "</span>);     <span class="com">// ["Hello", "Java!"]</span>` },
      { type: 'heading', text: '== vs .equals()', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">String</span> a = <span class="str">"hello"</span>;
<span class="ty">String</span> b = <span class="kw">new</span> <span class="ty">String</span>(<span class="str">"hello"</span>);
a == b              <span class="com">// false — different objects in memory!</span>
a.<span class="fn">equals</span>(b)         <span class="com">// true  — same content</span>` },
      { type: 'callout', kind: 'danger', html: '<strong>Always use <code>.equals()</code> to compare String contents.</strong> <code>==</code> checks object identity, not content.' },
      { type: 'heading', text: 'StringBuilder for performance', level: 2 },
      { type: 'para', html: 'Concatenating strings in a loop is slow (each <code>+</code> creates a new String). Use <code>StringBuilder</code> for fast assembly:' },
      { type: 'code', lang: 'java', code:
`<span class="ty">StringBuilder</span> sb = <span class="kw">new</span> <span class="ty">StringBuilder</span>();
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < <span class="num">1000</span>; i++) {
  sb.<span class="fn">append</span>(i).<span class="fn">append</span>(<span class="str">","</span>);
}
<span class="ty">String</span> result = sb.<span class="fn">toString</span>();` }
    ]},

    /* ============== CH 5 ============== */
    { id: 'java-c5', title: 'Control Flow', icon: '🚦', sections: [
      { type: 'heading', text: 'Making decisions', level: 1 },
      { type: 'code', lang: 'java', code:
`<span class="kw">if</span> (score >= <span class="num">90</span>) {
  grade = <span class="str">"A"</span>;
} <span class="kw">else if</span> (score >= <span class="num">75</span>) {
  grade = <span class="str">"B"</span>;
} <span class="kw">else</span> {
  grade = <span class="str">"C"</span>;
}` },
      { type: 'heading', text: 'switch statement', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">switch</span> (day) {
  <span class="kw">case</span> <span class="str">"Mon"</span>:
  <span class="kw">case</span> <span class="str">"Tue"</span>: workday = <span class="kw">true</span>; <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"Sat"</span>:
  <span class="kw">case</span> <span class="str">"Sun"</span>: weekend = <span class="kw">true</span>; <span class="kw">break</span>;
  <span class="kw">default</span>: handle();
}

<span class="com">// Modern arrow switch (Java 14+)</span>
<span class="ty">String</span> kind = <span class="kw">switch</span> (day) {
  <span class="kw">case</span> <span class="str">"Sat"</span>, <span class="str">"Sun"</span> -> <span class="str">"weekend"</span>;
  <span class="kw">default</span> -> <span class="str">"weekday"</span>;
};` },
      { type: 'callout', kind: 'warn', html: '<strong>Don\'t forget <code>break</code>!</strong> In classic switch, missing break causes "fall-through" — execution continues into the next case. Arrow switch (->) handles this automatically.' }
    ]},

    /* ============== CH 6 ============== */
    { id: 'java-c6', title: 'Loops', icon: '🔁', sections: [
      { type: 'heading', text: 'Three flavors', level: 1 },
      { type: 'code', lang: 'java', code:
`<span class="com">// for — known count</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < <span class="num">5</span>; i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);
}

<span class="com">// while — condition-driven</span>
<span class="kw">while</span> (running) {
  step();
}

<span class="com">// do-while — runs at least once</span>
<span class="kw">do</span> {
  prompt();
} <span class="kw">while</span> (!valid);

<span class="com">// enhanced for (for-each) — iterate collection</span>
<span class="kw">for</span> (<span class="ty">String</span> name : names) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(name);
}` },
      { type: 'heading', text: 'Watch a loop run', level: 2 },
      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">int</span> sum = <span class="num">0</span>;',
          '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">1</span>; i <= <span class="num">4</span>; i++) {',
          '  sum = sum + i;',
          '}',
          '<span class="ty">System</span>.out.<span class="fn">println</span>(sum);'
        ],
        steps: [
          { line: 0, vars: { sum: 0 }, note: 'sum starts at 0.' },
          { line: 1, vars: { sum: 0, i: 1 }, note: 'Loop starts: i = 1, condition 1<=4 true.' },
          { line: 2, vars: { sum: 1, i: 1 }, note: 'sum becomes 0 + 1 = 1.' },
          { line: 1, vars: { sum: 1, i: 2 }, note: 'Next iteration: i = 2.' },
          { line: 2, vars: { sum: 3, i: 2 }, note: 'sum = 1 + 2 = 3.' },
          { line: 1, vars: { sum: 3, i: 3 }, note: 'i = 3.' },
          { line: 2, vars: { sum: 6, i: 3 }, note: 'sum = 3 + 3 = 6.' },
          { line: 1, vars: { sum: 6, i: 4 }, note: 'i = 4.' },
          { line: 2, vars: { sum: 10, i: 4 }, note: 'sum = 6 + 4 = 10.' },
          { line: 1, vars: { sum: 10, i: 5 }, note: 'i = 5, condition 5<=4 false. Exit.' },
          { line: 4, vars: { sum: 10 }, note: 'Print 10.' }
        ]
      }},
      { type: 'heading', text: 'break and continue', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < <span class="num">10</span>; i++) {
  <span class="kw">if</span> (i == <span class="num">5</span>) <span class="kw">break</span>;     <span class="com">// exit loop entirely</span>
  <span class="kw">if</span> (i % <span class="num">2</span> == <span class="num">0</span>) <span class="kw">continue</span>; <span class="com">// skip to next iteration</span>
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);  <span class="com">// prints 1, 3</span>
}` },
      { type: 'callout', kind: 'danger', html: '<strong>Infinite loop trap:</strong> if the condition never becomes false, your program hangs. Make sure something inside the loop progresses toward the exit.' }
    ]},

    /* ============== CH 7 ============== */
    { id: 'java-c7', title: 'Arrays', icon: '📊', sections: [
      { type: 'heading', text: 'Fixed-size sequences', level: 1 },
      { type: 'para', html: 'A Java array stores a fixed number of values of the same type in contiguous memory.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// declare + initialize</span>
<span class="ty">int</span>[] nums = {<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">40</span>};
<span class="ty">int</span>[] grid = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">5</span>];  <span class="com">// {0,0,0,0,0}</span>

nums[<span class="num">2</span>];      <span class="com">// 30 — O(1) access by index</span>
nums.length;  <span class="com">// 4 — note: length is a field, not a method</span>
nums[<span class="num">0</span>] = <span class="num">99</span>; <span class="com">// modify in place</span>` },
      { type: 'heading', text: 'Play with one', level: 2 },
      { type: 'widget', name: 'array-vis', props: { values: [10, 20, 30, 40, 50] } },
      { type: 'heading', text: 'Iterating', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// classic for</span>
<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < nums.length; i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(nums[i]);
}

<span class="com">// enhanced for — when you only need values</span>
<span class="kw">for</span> (<span class="ty">int</span> n : nums) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(n);
}` },
      { type: 'heading', text: '2D arrays (matrix)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">int</span>[][] grid = {
  {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>},
  {<span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}
};
grid[<span class="num">1</span>][<span class="num">2</span>];  <span class="com">// 6 — row 1, col 2</span>

<span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r < grid.length; r++) {
  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c < grid[r].length; c++) {
    <span class="ty">System</span>.out.<span class="fn">print</span>(grid[r][c] + <span class="str">" "</span>);
  }
  <span class="ty">System</span>.out.<span class="fn">println</span>();
}` },
      { type: 'callout', kind: 'warn', html: 'Accessing <code>nums[-1]</code> or <code>nums[nums.length]</code> throws <code>ArrayIndexOutOfBoundsException</code>. Java has no negative indexing.' }
    ]},

    /* ============== CH 8 ============== */
    { id: 'java-c8', title: 'Methods', icon: '🧰', sections: [
      { type: 'heading', text: 'Reusable code blocks', level: 1 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public static</span> <span class="ty">int</span> <span class="fn">max</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) {
  <span class="kw">return</span> (a > b) ? a : b;
}

<span class="com">// Call it:</span>
<span class="ty">int</span> bigger = <span class="fn">max</span>(<span class="num">5</span>, <span class="num">10</span>);  <span class="com">// 10</span>` },
      { type: 'list', kind: 'check', items: [
        '<strong>Return type</strong> (<code>int</code>) — what the method returns, or <code>void</code> for no return',
        '<strong>Method name</strong> — verb-style (<code>calculateTax</code>, <code>findMax</code>)',
        '<strong>Parameters</strong> — inputs with type + name',
        '<strong>Body</strong> — code inside braces',
        '<strong>return</strong> — sends a value back to the caller'
      ]},
      { type: 'heading', text: 'Method overloading', level: 2 },
      { type: 'para', html: 'Same name, different parameters — Java picks the right one based on what you pass.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">public static</span> <span class="ty">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) { <span class="kw">return</span> a + b; }
<span class="kw">public static</span> <span class="ty">double</span> <span class="fn">add</span>(<span class="ty">double</span> a, <span class="ty">double</span> b) { <span class="kw">return</span> a + b; }
<span class="kw">public static</span> <span class="ty">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b, <span class="ty">int</span> c) { <span class="kw">return</span> a + b + c; }` },
      { type: 'heading', text: 'Pass by value (always!)', level: 2 },
      { type: 'callout', kind: 'info', html: 'Java is <strong>pass by value</strong>. Primitives are copied. Object references are also copied (but the copy still points to the SAME object — so mutations to the object are visible).' }
    ]},

    /* ============== CH 9 ============== */
    { id: 'java-c9', title: 'Classes & Objects', icon: '🧱', sections: [
      { type: 'heading', text: 'OOP fundamentals', level: 1 },
      { type: 'para', html: 'A <strong>class</strong> is a blueprint. An <strong>object</strong> (instance) is a real thing built from that blueprint.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">public class</span> <span class="ty">Dog</span> {
  <span class="kw">private</span> <span class="ty">String</span> name;
  <span class="kw">private</span> <span class="ty">int</span> age;

  <span class="com">// Constructor — runs when "new Dog(...)" called</span>
  <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {
    <span class="kw">this</span>.name = name;
    <span class="kw">this</span>.age = age;
  }

  <span class="com">// Getter</span>
  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">getName</span>() { <span class="kw">return</span> name; }

  <span class="com">// Method</span>
  <span class="kw">public void</span> <span class="fn">bark</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" says Woof!"</span>);
  }
}

<span class="com">// Use it</span>
<span class="ty">Dog</span> rex = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>, <span class="num">3</span>);
rex.<span class="fn">bark</span>();             <span class="com">// "Rex says Woof!"</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(rex.<span class="fn">getName</span>());  <span class="com">// "Rex"</span>` },
      { type: 'list', kind: 'check', items: [
        '<strong>Fields</strong> — data each object holds (name, age)',
        '<strong>Constructor</strong> — special method to create instances',
        '<strong>Methods</strong> — what the object can do',
        '<code>this</code> — refers to the current object inside the class',
        '<code>private</code> — only visible inside this class'
      ]},
      { type: 'heading', text: 'The 4 OOP pillars', level: 2 },
      { type: 'image', alt: 'OOP pillars', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <g font-family="Nunito">
    <rect x="20" y="40" width="130" height="120" rx="12" fill="#7c4dff"/>
    <text x="85" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">Encapsulation</text>
    <text x="85" y="110" text-anchor="middle" fill="white" font-size="11">Hide internals</text>
    <text x="85" y="130" text-anchor="middle" fill="white" font-size="11">with private</text>

    <rect x="170" y="40" width="130" height="120" rx="12" fill="#1cb0f6"/>
    <text x="235" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">Inheritance</text>
    <text x="235" y="110" text-anchor="middle" fill="white" font-size="11">Reuse via</text>
    <text x="235" y="130" text-anchor="middle" fill="white" font-size="11">extends</text>

    <rect x="320" y="40" width="130" height="120" rx="12" fill="#58cc02"/>
    <text x="385" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">Polymorphism</text>
    <text x="385" y="110" text-anchor="middle" fill="white" font-size="11">Same name,</text>
    <text x="385" y="130" text-anchor="middle" fill="white" font-size="11">many forms</text>

    <rect x="470" y="40" width="115" height="120" rx="12" fill="#ff9600"/>
    <text x="528" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">Abstraction</text>
    <text x="528" y="110" text-anchor="middle" fill="white" font-size="11">Hide how,</text>
    <text x="528" y="130" text-anchor="middle" fill="white" font-size="11">show what</text>
  </g>
</svg>` }
    ]},

    /* ============== CH 10 ============== */
    { id: 'java-c10', title: 'Inheritance & Polymorphism', icon: '🧬', sections: [
      { type: 'heading', text: 'Building on existing classes', level: 1 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public class</span> <span class="ty">Animal</span> {
  <span class="kw">protected</span> <span class="ty">String</span> name;
  <span class="kw">public void</span> <span class="fn">makeSound</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Some sound"</span>);
  }
}

<span class="kw">public class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">makeSound</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" says Woof!"</span>);
  }
}

<span class="kw">public class</span> <span class="ty">Cat</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">makeSound</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" says Meow!"</span>);
  }
}` },
      { type: 'heading', text: 'Polymorphism in action', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Animal</span>[] pets = { <span class="kw">new</span> <span class="ty">Dog</span>(), <span class="kw">new</span> <span class="ty">Cat</span>() };
<span class="kw">for</span> (<span class="ty">Animal</span> a : pets) {
  a.<span class="fn">makeSound</span>();  <span class="com">// Each animal makes its own sound</span>
}
<span class="com">// Output:
// Rex says Woof!
// Whiskers says Meow!</span>` },
      { type: 'callout', kind: 'success', html: 'This is the power of polymorphism — write code against the parent type, get the child\'s behavior automatically.' },
      { type: 'heading', text: 'super', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public class</span> <span class="ty">Puppy</span> <span class="kw">extends</span> <span class="ty">Dog</span> {
  <span class="kw">public</span> <span class="fn">Puppy</span>(<span class="ty">String</span> name) {
    <span class="kw">super</span>(name);   <span class="com">// call parent constructor</span>
  }
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">makeSound</span>() {
    <span class="kw">super</span>.<span class="fn">makeSound</span>(); <span class="com">// call parent\'s method</span>
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Yip!"</span>);
  }
}` }
    ]},

    /* ============== CH 11 ============== */
    { id: 'java-c11', title: 'Interfaces & Abstract Classes', icon: '🎭', sections: [
      { type: 'heading', text: 'Contracts vs blueprints', level: 1 },
      { type: 'para', html: 'An <strong>interface</strong> defines WHAT methods exist, not HOW. Multiple classes can <code>implement</code> the same interface.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">public interface</span> <span class="ty">Drawable</span> {
  <span class="kw">void</span> <span class="fn">draw</span>();   <span class="com">// implicitly public abstract</span>
}

<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">implements</span> <span class="ty">Drawable</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">draw</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Drawing circle"</span>);
  }
}

<span class="kw">public class</span> <span class="ty">Square</span> <span class="kw">implements</span> <span class="ty">Drawable</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">draw</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Drawing square"</span>);
  }
}` },
      { type: 'heading', text: 'Abstract class', level: 2 },
      { type: 'para', html: '<strong>Abstract class</strong>: like an interface but can have fields and method bodies. You can\'t instantiate it directly.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">public abstract class</span> <span class="ty">Shape</span> {
  <span class="kw">protected</span> <span class="ty">String</span> color;
  <span class="kw">public abstract</span> <span class="ty">double</span> <span class="fn">area</span>();  <span class="com">// no body</span>
  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">getColor</span>() { <span class="kw">return</span> color; }
}` },
      { type: 'heading', text: 'When to use which?', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Interface</strong> — "X can do Y" (Drawable, Comparable, Runnable). Multiple implementation OK.',
        '<strong>Abstract class</strong> — "X is a kind of Y, with shared code" (Shape → Circle, Square). Single inheritance only.',
        '<strong>Java 8+</strong> interfaces can have <code>default</code> method bodies, blurring the line a bit.'
      ]}
    ]},

    /* ============== CH 12 ============== */
    { id: 'java-c12', title: 'Exceptions', icon: '⚠️', sections: [
      { type: 'heading', text: 'When things go wrong', level: 1 },
      { type: 'para', html: 'An <strong>exception</strong> represents an error condition. You can <em>catch</em> it instead of crashing.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">try</span> {
  <span class="ty">int</span> result = <span class="num">10</span> / divisor;
} <span class="kw">catch</span> (<span class="ty">ArithmeticException</span> e) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Cannot divide by zero!"</span>);
} <span class="kw">finally</span> {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Always runs (cleanup)"</span>);
}` },
      { type: 'heading', text: 'Checked vs unchecked', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Checked</strong> (IOException, SQLException) — compiler forces you to handle or declare them',
        '<strong>Unchecked</strong> (RuntimeException, NullPointerException) — compiler doesn\'t require handling'
      ]},
      { type: 'heading', text: 'Throw your own', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">if</span> (age < <span class="num">0</span>) {
  <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"Age cannot be negative"</span>);
}

<span class="com">// Custom exception</span>
<span class="kw">public class</span> <span class="ty">InsufficientFundsException</span> <span class="kw">extends</span> <span class="ty">Exception</span> {
  <span class="kw">public</span> <span class="fn">InsufficientFundsException</span>(<span class="ty">String</span> msg) {
    <span class="kw">super</span>(msg);
  }
}` },
      { type: 'callout', kind: 'tip', html: 'Catch <strong>specific</strong> exceptions, not generic <code>Exception</code>. And avoid empty catch blocks — at minimum, log the error.' }
    ]},

    /* ============== CH 13 ============== */
    { id: 'java-c13', title: 'Collections Framework', icon: '📚', sections: [
      { type: 'heading', text: 'Pre-built data structures', level: 1 },
      { type: 'para', html: 'Java\'s <code>java.util</code> package has powerful collections built in. The big four:' },
      { type: 'image', alt: 'collections', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <g font-family="Nunito">
    <rect x="30" y="60" width="120" height="100" rx="10" fill="#7c4dff"/>
    <text x="90" y="95" text-anchor="middle" fill="white" font-weight="bold">List</text>
    <text x="90" y="120" text-anchor="middle" fill="white" font-size="11">ordered</text>
    <text x="90" y="138" text-anchor="middle" fill="white" font-size="11">duplicates OK</text>

    <rect x="170" y="60" width="120" height="100" rx="10" fill="#58cc02"/>
    <text x="230" y="95" text-anchor="middle" fill="white" font-weight="bold">Set</text>
    <text x="230" y="120" text-anchor="middle" fill="white" font-size="11">unique only</text>
    <text x="230" y="138" text-anchor="middle" fill="white" font-size="11">no order (Hash)</text>

    <rect x="310" y="60" width="120" height="100" rx="10" fill="#1cb0f6"/>
    <text x="370" y="95" text-anchor="middle" fill="white" font-weight="bold">Map</text>
    <text x="370" y="120" text-anchor="middle" fill="white" font-size="11">key → value</text>
    <text x="370" y="138" text-anchor="middle" fill="white" font-size="11">O(1) lookup</text>

    <rect x="450" y="60" width="120" height="100" rx="10" fill="#ff9600"/>
    <text x="510" y="95" text-anchor="middle" fill="white" font-weight="bold">Queue</text>
    <text x="510" y="120" text-anchor="middle" fill="white" font-size="11">FIFO</text>
    <text x="510" y="138" text-anchor="middle" fill="white" font-size="11">(or PriorityQueue)</text>
  </g>
</svg>` },
      { type: 'heading', text: 'ArrayList', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.util.ArrayList;

<span class="ty">ArrayList</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
names.<span class="fn">add</span>(<span class="str">"Alice"</span>);
names.<span class="fn">add</span>(<span class="str">"Bob"</span>);
names.<span class="fn">get</span>(<span class="num">0</span>);          <span class="com">// "Alice"</span>
names.<span class="fn">size</span>();           <span class="com">// 2</span>
names.<span class="fn">remove</span>(<span class="num">0</span>);       <span class="com">// removes "Alice"</span>
names.<span class="fn">contains</span>(<span class="str">"Bob"</span>); <span class="com">// true</span>` },
      { type: 'heading', text: 'HashMap', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">HashMap</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
ages.<span class="fn">put</span>(<span class="str">"Alice"</span>, <span class="num">30</span>);
ages.<span class="fn">put</span>(<span class="str">"Bob"</span>, <span class="num">25</span>);
ages.<span class="fn">get</span>(<span class="str">"Alice"</span>);          <span class="com">// 30 — O(1) average</span>
ages.<span class="fn">containsKey</span>(<span class="str">"Bob"</span>);   <span class="com">// true</span>
ages.<span class="fn">getOrDefault</span>(<span class="str">"X"</span>, <span class="num">0</span>); <span class="com">// 0</span>` },
      { type: 'callout', kind: 'tip', html: 'For most code, default to <code>ArrayList</code> for sequences and <code>HashMap</code> for lookups. They cover 80% of use cases.' }
    ]},

    /* ============== CH 14 ============== */
    { id: 'java-c14', title: 'Generics', icon: '🧪', sections: [
      { type: 'heading', text: 'Type-safe containers', level: 1 },
      { type: 'para', html: 'Generics let you write code that works with ANY type, without losing type safety.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Without generics — error-prone</span>
<span class="ty">ArrayList</span> list = <span class="kw">new</span> <span class="ty">ArrayList</span>();
list.<span class="fn">add</span>(<span class="str">"hello"</span>);
list.<span class="fn">add</span>(<span class="num">42</span>);
<span class="ty">String</span> s = (<span class="ty">String</span>) list.<span class="fn">get</span>(<span class="num">1</span>);  <span class="com">// runtime error!</span>

<span class="com">// With generics — compile-time safety</span>
<span class="ty">ArrayList</span>&lt;<span class="ty">String</span>&gt; list = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
list.<span class="fn">add</span>(<span class="str">"hello"</span>);
list.<span class="fn">add</span>(<span class="num">42</span>);  <span class="com">// ❌ compile error</span>` },
      { type: 'heading', text: 'Generic methods & classes', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Generic method</span>
<span class="kw">public static</span> &lt;<span class="ty">T</span>&gt; <span class="ty">T</span> <span class="fn">firstOf</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; list) {
  <span class="kw">return</span> list.<span class="fn">get</span>(<span class="num">0</span>);
}

<span class="com">// Generic class</span>
<span class="kw">public class</span> <span class="ty">Box</span>&lt;<span class="ty">T</span>&gt; {
  <span class="kw">private</span> <span class="ty">T</span> value;
  <span class="kw">public</span> <span class="ty">T</span> <span class="fn">get</span>() { <span class="kw">return</span> value; }
  <span class="kw">public void</span> <span class="fn">set</span>(<span class="ty">T</span> v) { value = v; }
}

<span class="ty">Box</span>&lt;<span class="ty">String</span>&gt; sb = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
<span class="ty">Box</span>&lt;<span class="ty">Integer</span>&gt; ib = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();` },
      { type: 'heading', text: 'Bounded types', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// T must be a Number (or subclass)</span>
<span class="kw">public static</span> &lt;<span class="ty">T</span> <span class="kw">extends</span> <span class="ty">Number</span>&gt; <span class="ty">double</span> <span class="fn">sum</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; nums) {
  <span class="ty">double</span> total = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">T</span> n : nums) total += n.<span class="fn">doubleValue</span>();
  <span class="kw">return</span> total;
}` }
    ]},

    /* ============== CH 15 ============== */
    { id: 'java-c15', title: 'Lambdas & Streams', icon: '⚡', sections: [
      { type: 'heading', text: 'Functional Java (Java 8+)', level: 1 },
      { type: 'para', html: '<strong>Lambdas</strong> are anonymous functions. <strong>Streams</strong> are pipelines for processing collections.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Lambda syntax: (params) -> expression</span>
<span class="ty">Runnable</span> r = () -> <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hi"</span>);
<span class="ty">Function</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; square = x -> x * x;
square.<span class="fn">apply</span>(<span class="num">5</span>);  <span class="com">// 25</span>` },
      { type: 'heading', text: 'Stream pipeline', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>);

<span class="ty">int</span> result = nums.<span class="fn">stream</span>()
  .<span class="fn">filter</span>(n -> n % <span class="num">2</span> == <span class="num">0</span>)   <span class="com">// 2, 4, 6</span>
  .<span class="fn">map</span>(n -> n * n)              <span class="com">// 4, 16, 36</span>
  .<span class="fn">reduce</span>(<span class="num">0</span>, <span class="ty">Integer</span>::sum);   <span class="com">// 56</span>` },
      { type: 'heading', text: 'Common stream operations', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<code>.filter(p)</code> — keep elements where p is true',
        '<code>.map(f)</code> — transform each element',
        '<code>.sorted()</code> — sort the stream',
        '<code>.distinct()</code> — remove duplicates',
        '<code>.limit(n)</code> — keep first n',
        '<code>.collect(Collectors.toList())</code> — back to a List',
        '<code>.count()</code> — number of elements',
        '<code>.forEach(action)</code> — terminal, side-effect for each'
      ]},
      { type: 'callout', kind: 'tip', html: 'Streams are <strong>lazy</strong> — nothing happens until a <em>terminal</em> operation (like collect, count, forEach) is called.' }
    ]},

    /* ============== CH 16 ============== */
    { id: 'java-c16', title: 'File I/O', icon: '💾', sections: [
      { type: 'heading', text: 'Read & write files', level: 1 },
      { type: 'code', lang: 'java', code:
`<span class="kw">import</span> java.nio.file.*;
<span class="kw">import</span> java.io.*;

<span class="com">// Read entire file (small files)</span>
<span class="ty">String</span> content = <span class="ty">Files</span>.<span class="fn">readString</span>(<span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"data.txt"</span>));

<span class="com">// Read lines</span>
<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; lines = <span class="ty">Files</span>.<span class="fn">readAllLines</span>(<span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"data.txt"</span>));

<span class="com">// Write</span>
<span class="ty">Files</span>.<span class="fn">writeString</span>(<span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"out.txt"</span>), <span class="str">"Hello!"</span>);

<span class="com">// Stream large files (won\'t load all at once)</span>
<span class="kw">try</span> (<span class="ty">BufferedReader</span> br = <span class="ty">Files</span>.<span class="fn">newBufferedReader</span>(<span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"huge.txt"</span>))) {
  <span class="ty">String</span> line;
  <span class="kw">while</span> ((line = br.<span class="fn">readLine</span>()) != <span class="kw">null</span>) {
    <span class="fn">process</span>(line);
  }
}` },
      { type: 'callout', kind: 'tip', html: '<code>try-with-resources</code> (the <code>try (...)</code> form) auto-closes the file even on exceptions. Always use it.' },
      { type: 'callout', kind: 'success', html: '🎉 You\'ve covered the core of Java! Head over to <strong>Practice</strong> to test what you\'ve learned with interactive quizzes.' }
    ]}
  ]
});

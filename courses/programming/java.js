PUSH({
  id: 'java',
  name: 'Java',
  icon: '☕',
  color: '#f89820',
  description: 'Master Java from scratch — variables, classes, and beyond.',
  units: [
    // =====================================================================
    // UNIT 1 — Hello, Java
    // =====================================================================
    {
      id: 'java-unit-1',
      name: 'Unit 1 · Hello, Java',
      description: 'Your first program, structure, and how Java runs.',
      lessons: [
        {
          id: 'java-1-1',
          name: 'Your First Program',
          icon: '👋',
          xp: 10,
          challenges: [
            {
              type: 'concept',
              title: 'Welcome to Java',
              content: `<p>Java is a <strong>strongly-typed</strong>, <strong>object-oriented</strong> language that runs on the <strong>JVM</strong> (Java Virtual Machine). Every Java program lives inside a <code>class</code>, and execution starts in a special method called <code>main</code>.</p>
<p>The classic first program looks like this:</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Hello</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hello, Java!"</span>);
  }
}</div>
<p>Why so much ceremony? Java is built around classes — even a one-line program needs a home. <code>main</code> is the door the JVM walks through.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which method does the JVM call first when your program starts?',
              options: [
                { text: 'start()', code: true },
                { text: 'main(String[] args)', code: true },
                { text: 'run()', code: true },
                { text: 'init()', code: true }
              ],
              correct: 1,
              explanation: 'Java looks specifically for public static void main(String[] args).'
            },
            {
              type: 'true-false',
              statement: 'Every Java program must be inside a <code>class</code>.',
              correct: true,
              explanation: 'Java is class-based — top-level code must live in a class.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the line that prints "Hi" to the console.',
              codeLines: [
                { html: '<span class="ty">System</span>.out.<span class="fn">_BLANK_</span>(<span class="str">"Hi"</span>);' }
              ],
              tokens: ['println', 'print', 'echo', 'log', 'write'],
              correctAnswer: 'println',
              explanation: 'println prints text followed by a newline.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a line that prints "Hi".',
              tokens: ['System', '.', 'out', '.', 'println', '(', '"Hi"', ')', ';', 'console', 'log', 'print'],
              correctOrder: ['System', '.', 'out', '.', 'println', '(', '"Hi"', ')', ';'],
              explanation: 'System.out is the standard output stream, and println prints a line.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Java"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Rocks"</span>);`,
              options: ['Java Rocks', 'JavaRocks', 'Java\\nRocks (two lines)', 'error'],
              correct: 2,
              explanation: 'Each println outputs its text and then a newline, producing two lines.'
            }
          ]
        },
        {
          id: 'java-1-2',
          name: 'Class & Main Structure',
          icon: '🏗️',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'The Shape of a Java File',
              content: `<p>A Java <strong>source file</strong> ends in <code>.java</code>. The file name must match the <strong>public class</strong> name inside it. So <code>Hello.java</code> contains <code>public class Hello</code>.</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Hello</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="com">// statements go here</span>
  }
}</div>
<p>Key pieces:</p>
<ul>
<li><code>public</code> — accessible from anywhere</li>
<li><code>class Hello</code> — declares a class named Hello</li>
<li><code>static</code> — belongs to the class, not an instance</li>
<li><code>void</code> — returns nothing</li>
<li><code>String[] args</code> — command-line arguments</li>
</ul>`
            },
            {
              type: 'match-pairs',
              prompt: 'Match each part of the main signature to its meaning.',
              leftLabel: 'Keyword',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'public', right: 'accessible from anywhere' },
                { left: 'static', right: 'belongs to the class itself' },
                { left: 'void', right: 'returns nothing' },
                { left: 'String[]', right: 'array of text values' }
              ]
            },
            {
              type: 'multiple-choice',
              prompt: 'If your public class is called <code>Game</code>, what must the file be named?',
              options: [
                { text: 'game.java', code: true },
                { text: 'Game.java', code: true },
                { text: 'Game.class', code: true },
                { text: 'Main.java', code: true }
              ],
              correct: 1,
              explanation: 'The file name must match the public class exactly, including case.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder these lines into a working program.',
              lines: [
                '<span class="kw">public class</span> <span class="ty">App</span> {',
                '  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {',
                '    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Run"</span>);',
                '  }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'true-false',
              statement: 'A Java file may contain only one <code>public</code> class.',
              correct: true,
              explanation: 'You can have many non-public classes, but only one public class per file.'
            },
            {
              type: 'type-answer',
              prompt: 'What keyword declares that a method belongs to the class itself (not an instance)?',
              code: '',
              accept: ['static'],
              explanation: 'static members are shared by the class, no instance required.'
            }
          ]
        },
        {
          id: 'java-1-3',
          name: 'Comments & Running',
          icon: '💬',
          xp: 10,
          challenges: [
            {
              type: 'concept',
              title: 'Comments and the Compile/Run Cycle',
              content: `<p>Comments are notes for humans — the compiler ignores them. Java has two kinds:</p>
<div class="code-block"><span class="com">// single-line comment</span>
<span class="com">/* multi-line
   comment */</span></div>
<p>To run Java, you go through two steps:</p>
<ol>
<li><strong>Compile</strong> with <code>javac Hello.java</code> — produces <code>Hello.class</code> bytecode.</li>
<li><strong>Run</strong> with <code>java Hello</code> — JVM executes the bytecode.</li>
</ol>
<p>The JVM is what makes Java <strong>"write once, run anywhere"</strong> — the same bytecode runs on any platform with a JVM.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which command compiles a Java file?',
              options: [
                { text: 'java Hello.java', code: true },
                { text: 'javac Hello.java', code: true },
                { text: 'compile Hello', code: true },
                { text: 'jvm Hello', code: true }
              ],
              correct: 1,
              explanation: 'javac is the Java compiler; java runs the compiled bytecode.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the comment.',
              codeLines: [
                { html: '<span class="com">_BLANK_ TODO: improve later</span>' }
              ],
              tokens: ['//', '#', '--', '/*', '<!--'],
              correctAnswer: '//',
              explanation: 'Java uses // for single-line comments.'
            },
            {
              type: 'true-false',
              statement: 'Comments inside <code>/* */</code> can span multiple lines.',
              correct: true,
              explanation: 'Block comments can wrap across as many lines as you need.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="com">// System.out.println("A");</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"B"</span>);`,
              options: ['A', 'B', 'A then B', 'nothing'],
              correct: 1,
              explanation: 'The first line is commented out and ignored, so only B prints.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each tool to its role.',
              leftLabel: 'Tool',
              rightLabel: 'Role',
              pairs: [
                { left: 'javac', right: 'compiles .java to .class' },
                { left: 'java', right: 'runs the compiled class' },
                { left: 'JVM', right: 'executes bytecode' },
                { left: 'JDK', right: 'full development kit' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 2 — Variables & Data Types
    // =====================================================================
    {
      id: 'java-unit-2',
      name: 'Unit 2 · Variables & Data Types',
      description: 'Primitives, references, casting, and constants.',
      lessons: [
        {
          id: 'java-2-1',
          name: 'Primitives',
          icon: '🔢',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'The 8 Primitive Types',
              content: `<p>Java has eight built-in <strong>primitive</strong> types — fixed-size values stored directly (not as objects):</p>
<div class="code-block"><span class="ty">byte</span>    b = <span class="num">100</span>;       <span class="com">// 8-bit integer</span>
<span class="ty">short</span>   s = <span class="num">30000</span>;     <span class="com">// 16-bit integer</span>
<span class="ty">int</span>     i = <span class="num">2000000</span>;   <span class="com">// 32-bit integer (default)</span>
<span class="ty">long</span>    l = <span class="num">9999999999L</span>; <span class="com">// 64-bit integer (note the L)</span>
<span class="ty">float</span>   f = <span class="num">3.14f</span>;     <span class="com">// 32-bit float (note the f)</span>
<span class="ty">double</span>  d = <span class="num">3.14159</span>;   <span class="com">// 64-bit float (default)</span>
<span class="ty">char</span>    c = <span class="str">'A'</span>;       <span class="com">// 16-bit Unicode character</span>
<span class="ty">boolean</span> ok = <span class="kw">true</span>;     <span class="com">// true or false</span></div>
<p>Use <code>int</code> for whole numbers and <code>double</code> for decimals unless you have a reason not to.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which type stores <code>true</code> or <code>false</code>?',
              options: [
                { text: 'bool', code: true },
                { text: 'boolean', code: true },
                { text: 'Boolean only', code: false },
                { text: 'bit', code: true }
              ],
              correct: 1,
              explanation: 'Java spells it out — boolean (lowercase b).'
            },
            {
              type: 'true-false',
              statement: 'An <code>int</code> in Java is 32 bits wide.',
              correct: true,
              explanation: 'int is always 32 bits on every JVM.'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare a 64-bit integer holding 100.',
              codeLines: [
                { html: '<span class="ty">_BLANK_</span> n = <span class="num">100L</span>;' }
              ],
              tokens: ['long', 'int', 'big', 'Long', 'Integer'],
              correctAnswer: 'long',
              explanation: 'long is the 64-bit integer primitive.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each primitive to a typical use.',
              leftLabel: 'Type',
              rightLabel: 'Use',
              pairs: [
                { left: 'int', right: 'counter or whole-number value' },
                { left: 'double', right: 'price or decimal number' },
                { left: 'char', right: 'a single letter' },
                { left: 'boolean', right: 'yes/no flag' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'What does this print?',
              code: `<span class="ty">int</span> x = <span class="num">7</span>;
<span class="ty">double</span> y = <span class="num">2.5</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(x + y);`,
              options: ['9', '9.5', '7.2.5', 'error'],
              correct: 1,
              explanation: 'int is widened to double, so 7 + 2.5 = 9.5.'
            }
          ]
        },
        {
          id: 'java-2-2',
          name: 'Strings & Declaration',
          icon: '📝',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Declaring vs Initializing',
              content: `<p><strong>Declaring</strong> a variable reserves a name and a type. <strong>Initializing</strong> gives it a first value.</p>
<div class="code-block"><span class="ty">int</span> age;          <span class="com">// declaration</span>
age = <span class="num">21</span>;          <span class="com">// initialization</span>

<span class="ty">int</span> score = <span class="num">100</span>; <span class="com">// both at once</span></div>
<p>Strings are objects, not primitives, but you create them like literals:</p>
<div class="code-block"><span class="ty">String</span> name = <span class="str">"Ada"</span>;
<span class="ty">String</span> greet = <span class="str">"Hello, "</span> + name;</div>
<p><strong>Local variables</strong> must be initialized before use — the compiler will refuse to read an uninitialized local.</p>`
            },
            {
              type: 'fill-blank',
              prompt: 'Declare a String holding "Ada".',
              codeLines: [
                { html: '<span class="ty">_BLANK_</span> name = <span class="str">"Ada"</span>;' }
              ],
              tokens: ['String', 'string', 'str', 'Text', 'char'],
              correctAnswer: 'String',
              explanation: 'String is capitalized — it is a class.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which declares an integer named <code>n</code> with value 5?',
              options: [
                { text: 'int n = 5;', code: true },
                { text: 'n = 5;', code: true },
                { text: 'integer n = 5;', code: true },
                { text: 'let n = 5;', code: true }
              ],
              correct: 0,
              explanation: 'Type first, then name, then optional initializer.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a line that declares an int x with value 10.',
              tokens: ['int', 'x', '=', '10', ';', 'let', 'var', 'integer'],
              correctOrder: ['int', 'x', '=', '10', ';'],
              explanation: 'Java requires a type at declaration.'
            },
            {
              type: 'true-false',
              statement: 'You can use a local variable before assigning it a value.',
              correct: false,
              explanation: 'Java requires definite assignment — read of an unassigned local is a compile error.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">String</span> a = <span class="str">"Hi "</span>;
<span class="ty">String</span> b = <span class="str">"there"</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(a + b);`,
              options: ['Hi there', 'Hi+there', 'Hithere', 'a + b'],
              correct: 0,
              explanation: 'The + operator concatenates strings.'
            }
          ]
        },
        {
          id: 'java-2-3',
          name: 'Casting, var, and final',
          icon: '🔄',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Casting, var, and Constants',
              content: `<p><strong>Implicit casting</strong> happens when widening (small → big). <strong>Explicit casting</strong> is required when narrowing (big → small) because data may be lost.</p>
<div class="code-block"><span class="ty">int</span> i = <span class="num">10</span>;
<span class="ty">double</span> d = i;          <span class="com">// implicit widening</span>
<span class="ty">int</span> back = (<span class="ty">int</span>) d;   <span class="com">// explicit narrowing</span></div>
<p>Since Java 10, <code>var</code> lets the compiler infer the type from the initializer (locals only):</p>
<div class="code-block"><span class="kw">var</span> name = <span class="str">"Ada"</span>;        <span class="com">// inferred as String</span>
<span class="kw">var</span> count = <span class="num">42</span>;          <span class="com">// inferred as int</span></div>
<p><code>final</code> means "cannot be reassigned" — this is how Java declares constants.</p>
<div class="code-block"><span class="kw">final</span> <span class="ty">double</span> PI = <span class="num">3.14159</span>;</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which line will FAIL to compile?',
              options: [
                { text: 'int x = (int) 3.7;', code: true },
                { text: 'double d = 5;', code: true },
                { text: 'int y = 3.7;', code: true },
                { text: 'long L = 100;', code: true }
              ],
              correct: 2,
              explanation: 'Assigning a double to int without casting loses precision and is rejected.'
            },
            {
              type: 'true-false',
              statement: 'A <code>final</code> variable can be reassigned later.',
              correct: false,
              explanation: 'final means assigned once. Any further assignment is a compile error.'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare a constant for the speed of light.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span> <span class="ty">int</span> SPEED = <span class="num">299792458</span>;' }
              ],
              tokens: ['final', 'const', 'let', 'static', 'readonly'],
              correctAnswer: 'final',
              explanation: 'Java uses final, not const, for constants.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">double</span> d = <span class="num">9.7</span>;
<span class="ty">int</span> i = (<span class="ty">int</span>) d;
<span class="ty">System</span>.out.<span class="fn">println</span>(i);`,
              options: ['9.7', '10', '9', 'error'],
              correct: 2,
              explanation: 'Casting a double to int truncates toward zero (drops the decimal).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the casting direction.',
              leftLabel: 'Cast',
              rightLabel: 'Type',
              pairs: [
                { left: 'int → double', right: 'implicit widening' },
                { left: 'double → int', right: 'explicit narrowing' },
                { left: 'byte → int', right: 'implicit widening' },
                { left: 'long → int', right: 'explicit narrowing' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'What keyword lets the compiler infer a local variable’s type?',
              code: '',
              accept: ['var'],
              explanation: 'var (Java 10+) infers the type from the initializer.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 3 — Operators
    // =====================================================================
    {
      id: 'java-unit-3',
      name: 'Unit 3 · Operators',
      description: 'Arithmetic, logic, assignment, and precedence.',
      lessons: [
        {
          id: 'java-3-1',
          name: 'Arithmetic & Assignment',
          icon: '➕',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Math in Java',
              content: `<p>Arithmetic operators work like school math, with one twist: <strong>integer division truncates</strong>.</p>
<div class="code-block"><span class="ty">int</span>    a = <span class="num">7</span> / <span class="num">2</span>;   <span class="com">// 3 (truncated!)</span>
<span class="ty">double</span> b = <span class="num">7.0</span> / <span class="num">2</span>; <span class="com">// 3.5</span>
<span class="ty">int</span>    r = <span class="num">7</span> % <span class="num">2</span>;   <span class="com">// 1  (modulo / remainder)</span></div>
<p><strong>Compound assignment</strong> shortcuts combine an operator with assignment:</p>
<div class="code-block"><span class="ty">int</span> n = <span class="num">10</span>;
n += <span class="num">5</span>;   <span class="com">// n = n + 5  → 15</span>
n -= <span class="num">2</span>;   <span class="com">// n = n - 2  → 13</span>
n *= <span class="num">2</span>;   <span class="com">// n = n * 2  → 26</span>
n /= <span class="num">3</span>;   <span class="com">// n = n / 3  → 8</span></div>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="num">7</span> / <span class="num">2</span>);`,
              options: ['3.5', '3', '4', '3.0'],
              correct: 1,
              explanation: 'Both operands are int, so the result truncates to 3.'
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>17 % 5</code> evaluate to?',
              options: [
                { text: '3', code: true },
                { text: '2', code: true },
                { text: '3.4', code: true },
                { text: '0', code: true }
              ],
              correct: 1,
              explanation: '17 / 5 = 3 remainder 2, so 17 % 5 is 2.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add 5 to <code>n</code> using a compound assignment.',
              codeLines: [
                { html: 'n _BLANK_ <span class="num">5</span>;' }
              ],
              tokens: ['+=', '=+', '++', '+', '+:'],
              correctAnswer: '+=',
              explanation: 'n += 5 is shorthand for n = n + 5.'
            },
            {
              type: 'true-false',
              statement: 'In Java, <code>7.0 / 2</code> equals <code>3.5</code>.',
              correct: true,
              explanation: 'If either operand is double, the division is performed in double.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a line that doubles n in place.',
              tokens: ['n', '*=', '2', ';', '=*', '++', '*', '+='],
              correctOrder: ['n', '*=', '2', ';'],
              explanation: 'n *= 2 multiplies n by 2 and stores the result back into n.'
            }
          ]
        },
        {
          id: 'java-3-2',
          name: 'Comparison & Logical',
          icon: '🤔',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Booleans, Comparisons, and Short-Circuiting',
              content: `<p>Comparison operators produce a <code>boolean</code>:</p>
<div class="code-block">==  equal             !=  not equal
&lt;   less than         &lt;=  less than or equal
&gt;   greater than      &gt;=  greater than or equal</div>
<p>Logical operators combine booleans:</p>
<div class="code-block">&amp;&amp;  AND (both true)
||  OR  (either true)
!   NOT (flip)</div>
<p><code>&amp;&amp;</code> and <code>||</code> <strong>short-circuit</strong> — they stop evaluating as soon as the answer is known. That makes guards like this safe:</p>
<div class="code-block"><span class="kw">if</span> (s != <span class="kw">null</span> &amp;&amp; s.<span class="fn">length</span>() &gt; <span class="num">0</span>) { ... }</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which operator means "logical AND"?',
              options: [
                { text: '&', code: true },
                { text: '&&', code: true },
                { text: 'and', code: true },
                { text: '+', code: true }
              ],
              correct: 1,
              explanation: '&& is short-circuit AND; & is the bitwise AND.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span> a = <span class="num">5</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(a &gt; <span class="num">3</span> &amp;&amp; a &lt; <span class="num">10</span>);`,
              options: ['true', 'false', '5', 'error'],
              correct: 0,
              explanation: '5 > 3 is true and 5 < 10 is true, so the AND is true.'
            },
            {
              type: 'true-false',
              statement: 'If <code>a</code> is false, the expression <code>a &amp;&amp; b()</code> never calls <code>b()</code>.',
              correct: true,
              explanation: 'Short-circuit AND skips the right side once the left is false.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operator to meaning.',
              leftLabel: 'Operator',
              rightLabel: 'Meaning',
              pairs: [
                { left: '==', right: 'equal to' },
                { left: '!=', right: 'not equal to' },
                { left: '&&', right: 'logical AND' },
                { left: '||', right: 'logical OR' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Check that n is strictly between 0 and 100.',
              codeLines: [
                { html: '<span class="kw">if</span> (n &gt; <span class="num">0</span> _BLANK_ n &lt; <span class="num">100</span>) { ... }' }
              ],
              tokens: ['&&', '||', 'and', '&', 'or'],
              correctAnswer: '&&',
              explanation: 'Both conditions must hold, so we use logical AND (&&).'
            }
          ]
        },
        {
          id: 'java-3-3',
          name: 'Increment, Ternary & Precedence',
          icon: '⚡',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: '++, --, ?:, and Order of Operations',
              content: `<p><strong>Increment / decrement</strong> add or subtract one. They have two forms:</p>
<div class="code-block"><span class="ty">int</span> n = <span class="num">5</span>;
<span class="ty">int</span> a = n++;  <span class="com">// post: a=5, n=6</span>
<span class="ty">int</span> b = ++n;  <span class="com">// pre:  n=7, b=7</span></div>
<p>The <strong>ternary</strong> operator picks between two values based on a condition:</p>
<div class="code-block"><span class="ty">int</span> max = (a &gt; b) ? a : b;</div>
<p><strong>Precedence</strong> determines which operators bind tighter. Roughly: unary, then * / %, then + -, then comparisons, then &amp;&amp;, then ||. When in doubt, add parentheses.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span> n = <span class="num">5</span>;
<span class="ty">int</span> a = n++;
<span class="ty">System</span>.out.<span class="fn">println</span>(a + <span class="str">" "</span> + n);`,
              options: ['5 5', '5 6', '6 5', '6 6'],
              correct: 1,
              explanation: 'Post-increment returns the old value (5) and then increments n to 6.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which line picks the larger of x and y?',
              options: [
                { text: 'int m = x > y ? x : y;', code: true },
                { text: 'int m = (x, y).max();', code: true },
                { text: 'int m = max(x, y);', code: true },
                { text: 'int m = if x > y then x else y;', code: true }
              ],
              correct: 0,
              explanation: 'That is the ternary expression syntax in Java.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: assign x or y (whichever is larger) to <code>m</code>.',
              tokens: ['int', 'm', '=', 'x', '>', 'y', '?', 'x', ':', 'y', ';', 'else'],
              correctOrder: ['int', 'm', '=', 'x', '>', 'y', '?', 'x', ':', 'y', ';'],
              explanation: 'condition ? value-if-true : value-if-false.'
            },
            {
              type: 'true-false',
              statement: '<code>2 + 3 * 4</code> equals <code>20</code> in Java.',
              correct: false,
              explanation: 'Multiplication binds tighter: 3*4=12, plus 2 = 14.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span> n = <span class="num">5</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(--n);`,
              options: ['5', '4', '6', 'error'],
              correct: 1,
              explanation: 'Pre-decrement subtracts first, so n becomes 4 and prints 4.'
            },
            {
              type: 'type-answer',
              prompt: 'What is the result of <code>10 - 2 * 3</code>?',
              code: '',
              accept: ['4'],
              explanation: '2*3=6, then 10-6=4.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 4 — Strings
    // =====================================================================
    {
      id: 'java-unit-4',
      name: 'Unit 4 · Strings',
      description: 'Working with text — length, slicing, comparison.',
      lessons: [
        {
          id: 'java-4-1',
          name: 'String Basics',
          icon: '🔤',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Strings Are Objects',
              content: `<p>A <code>String</code> is a sequence of characters. Strings are <strong>immutable</strong> — operations like <code>toUpperCase()</code> return a NEW string.</p>
<div class="code-block"><span class="ty">String</span> name = <span class="str">"Java"</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(name.<span class="fn">length</span>());     <span class="com">// 4</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(name.<span class="fn">charAt</span>(<span class="num">0</span>));    <span class="com">// J</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(name.<span class="fn">toUpperCase</span>()); <span class="com">// JAVA</span></div>
<p>Use <code>+</code> (or <code>+=</code>) to concatenate:</p>
<div class="code-block"><span class="ty">String</span> hi = <span class="str">"Hello, "</span> + name + <span class="str">"!"</span>;</div>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">String</span> s = <span class="str">"Java"</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">length</span>());`,
              options: ['3', '4', '5', '"Java".length'],
              correct: 1,
              explanation: '"Java" has 4 characters.'
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>"Hello".charAt(1)</code> return?',
              options: [
                { text: "'H'", code: true },
                { text: "'e'", code: true },
                { text: "'l'", code: true },
                { text: '1', code: true }
              ],
              correct: 1,
              explanation: 'Indexes are 0-based, so index 1 is the second char, e.'
            },
            {
              type: 'fill-blank',
              prompt: 'Make name uppercase.',
              codeLines: [
                { html: '<span class="ty">String</span> upper = name.<span class="fn">_BLANK_</span>();' }
              ],
              tokens: ['toUpperCase', 'upper', 'UPPER', 'toUpper', 'capitalize'],
              correctAnswer: 'toUpperCase',
              explanation: 'toUpperCase() returns the uppercase form of the string.'
            },
            {
              type: 'true-false',
              statement: 'Strings in Java are immutable.',
              correct: true,
              explanation: 'Every method that "modifies" a String actually returns a new String.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: print the length of word.',
              tokens: ['System', '.', 'out', '.', 'println', '(', 'word', 'length', '(', ')', ')', ';', '.', 'size'],
              correctOrder: ['System', '.', 'out', '.', 'println', '(', 'word', '.', 'length', '(', ')', ')', ';'],
              explanation: 'String uses length() (a method), not size or a property.'
            }
          ]
        },
        {
          id: 'java-4-2',
          name: 'Slicing & Searching',
          icon: '🔎',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'substring, indexOf, contains',
              content: `<p>Cut and search inside strings:</p>
<div class="code-block"><span class="ty">String</span> s = <span class="str">"Hello, World"</span>;
s.<span class="fn">substring</span>(<span class="num">7</span>);          <span class="com">// "World"</span>
s.<span class="fn">substring</span>(<span class="num">0</span>, <span class="num">5</span>);       <span class="com">// "Hello"</span>
s.<span class="fn">indexOf</span>(<span class="str">"World"</span>);     <span class="com">// 7</span>
s.<span class="fn">indexOf</span>(<span class="str">"xyz"</span>);       <span class="com">// -1 (not found)</span>
s.<span class="fn">contains</span>(<span class="str">"World"</span>);    <span class="com">// true</span></div>
<p><code>substring(begin, end)</code> is inclusive of <code>begin</code> and exclusive of <code>end</code>.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hello"</span>.<span class="fn">substring</span>(<span class="num">1</span>, <span class="num">4</span>));`,
              options: ['Hel', 'ell', 'ello', 'llo'],
              correct: 1,
              explanation: 'Indexes 1 to 3 → "ell" (4 is exclusive).'
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>indexOf</code> return when the substring is not found?',
              options: [
                { text: '0', code: true },
                { text: '-1', code: true },
                { text: 'null', code: true },
                { text: 'throws an exception', code: false }
              ],
              correct: 1,
              explanation: 'Java consistently returns -1 for "not found" in indexOf.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the method to what it does.',
              leftLabel: 'Method',
              rightLabel: 'Does',
              pairs: [
                { left: 'substring(a,b)', right: 'slice between two indexes' },
                { left: 'indexOf(x)', right: 'first index of x, or -1' },
                { left: 'contains(x)', right: 'true if x is inside' },
                { left: 'length()', right: 'number of characters' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Get the position of <code>"@"</code> in <code>email</code>.',
              codeLines: [
                { html: '<span class="ty">int</span> at = email.<span class="fn">_BLANK_</span>(<span class="str">"@"</span>);' }
              ],
              tokens: ['indexOf', 'find', 'search', 'positionOf', 'contains'],
              correctAnswer: 'indexOf',
              explanation: 'indexOf returns the first index of the argument, or -1.'
            },
            {
              type: 'true-false',
              statement: '<code>s.substring(2)</code> returns everything from index 2 to the end.',
              correct: true,
              explanation: 'The single-arg form starts at the given index and goes to the end.'
            }
          ]
        },
        {
          id: 'java-4-3',
          name: 'Equality & StringBuilder',
          icon: '⚖️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'equals() vs == and StringBuilder',
              content: `<p><strong>This trips up everyone.</strong> <code>==</code> compares <em>references</em>; <code>equals()</code> compares <em>contents</em>.</p>
<div class="code-block"><span class="ty">String</span> a = <span class="kw">new</span> <span class="ty">String</span>(<span class="str">"hi"</span>);
<span class="ty">String</span> b = <span class="kw">new</span> <span class="ty">String</span>(<span class="str">"hi"</span>);
a == b           <span class="com">// false — different objects</span>
a.<span class="fn">equals</span>(b)     <span class="com">// true  — same contents</span></div>
<p>Because Strings are immutable, building one a piece at a time with <code>+</code> in a loop is slow. Use <code>StringBuilder</code> instead:</p>
<div class="code-block"><span class="ty">StringBuilder</span> sb = <span class="kw">new</span> <span class="ty">StringBuilder</span>();
sb.<span class="fn">append</span>(<span class="str">"Hi "</span>).<span class="fn">append</span>(name);
<span class="ty">String</span> result = sb.<span class="fn">toString</span>();</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is the correct way to compare two String values?',
              options: [
                { text: 'a == b', code: true },
                { text: 'a.equals(b)', code: true },
                { text: 'a.compare(b)', code: true },
                { text: 'a.eq(b)', code: true }
              ],
              correct: 1,
              explanation: 'equals() compares the actual characters of the two strings.'
            },
            {
              type: 'true-false',
              statement: 'Using <code>+</code> inside a tight loop to build a long string is efficient.',
              correct: false,
              explanation: 'Each + creates a new String. Use StringBuilder for that.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add "world" to a StringBuilder.',
              codeLines: [
                { html: 'sb.<span class="fn">_BLANK_</span>(<span class="str">"world"</span>);' }
              ],
              tokens: ['append', 'add', 'push', 'concat', 'put'],
              correctAnswer: 'append',
              explanation: 'StringBuilder uses append() to add to the buffer.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">String</span> a = <span class="str">"hi"</span>;
<span class="ty">String</span> b = <span class="str">"hi"</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(a.<span class="fn">equals</span>(b));`,
              options: ['true', 'false', 'null', 'error'],
              correct: 0,
              explanation: 'Two strings with the same characters are equal by equals().'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder these lines into a working StringBuilder example.',
              lines: [
                '<span class="ty">StringBuilder</span> sb = <span class="kw">new</span> <span class="ty">StringBuilder</span>();',
                'sb.<span class="fn">append</span>(<span class="str">"Hello"</span>);',
                'sb.<span class="fn">append</span>(<span class="str">", World"</span>);',
                '<span class="ty">System</span>.out.<span class="fn">println</span>(sb.<span class="fn">toString</span>());'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'type-answer',
              prompt: 'Which method converts a StringBuilder back into a String?',
              code: '',
              accept: ['toString', 'toString()'],
              explanation: 'toString() produces the finished String.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 5 — Control Flow
    // =====================================================================
    {
      id: 'java-unit-5',
      name: 'Unit 5 · Control Flow',
      description: 'Branching with if and switch.',
      lessons: [
        {
          id: 'java-5-1',
          name: 'if / else',
          icon: '🔀',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Making Decisions',
              content: `<p>An <code>if</code> runs a block only when a boolean condition is true. Add <code>else</code> for the other case, or chain with <code>else if</code>.</p>
<div class="code-block"><span class="kw">if</span> (score &gt;= <span class="num">90</span>) {
  grade = <span class="str">"A"</span>;
} <span class="kw">else if</span> (score &gt;= <span class="num">80</span>) {
  grade = <span class="str">"B"</span>;
} <span class="kw">else</span> {
  grade = <span class="str">"C or lower"</span>;
}</div>
<p>The condition <strong>must</strong> be a boolean. Java will not let you write <code>if (n)</code> when <code>n</code> is an int — write <code>if (n != 0)</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which expression is a valid Java <code>if</code> condition?',
              options: [
                { text: 'if (x)', code: true },
                { text: 'if (x > 0)', code: true },
                { text: 'if (x = 0)', code: true },
                { text: 'if x > 0', code: true }
              ],
              correct: 1,
              explanation: 'The condition must produce a boolean and be wrapped in parentheses.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span> n = <span class="num">10</span>;
<span class="kw">if</span> (n &gt; <span class="num">5</span>) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"big"</span>);
} <span class="kw">else</span> {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"small"</span>);
}`,
              options: ['big', 'small', 'big small', 'nothing'],
              correct: 0,
              explanation: '10 > 5 is true, so the if branch runs.'
            },
            {
              type: 'true-false',
              statement: 'You can chain conditions with <code>else if</code>.',
              correct: true,
              explanation: 'else if creates a multi-way branch; only one block runs.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a working if/else chain.',
              lines: [
                '<span class="kw">if</span> (x &gt; <span class="num">0</span>) {',
                '  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"positive"</span>);',
                '} <span class="kw">else</span> {',
                '  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"non-positive"</span>);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4]
            },
            {
              type: 'fill-blank',
              prompt: 'Branch when n is exactly zero.',
              codeLines: [
                { html: '<span class="kw">if</span> (n _BLANK_ <span class="num">0</span>) { ... }' }
              ],
              tokens: ['==', '=', '!=', '===', '<>'],
              correctAnswer: '==',
              explanation: '== checks equality; = would be assignment and fails to compile.'
            }
          ]
        },
        {
          id: 'java-5-2',
          name: 'switch Statement',
          icon: '🎛️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'switch (classic & arrow)',
              content: `<p><code>switch</code> branches on a single value (int, String, enum, etc.). Classic form falls through cases unless you use <code>break</code>:</p>
<div class="code-block"><span class="kw">switch</span> (day) {
  <span class="kw">case</span> <span class="num">1</span>: name = <span class="str">"Mon"</span>; <span class="kw">break</span>;
  <span class="kw">case</span> <span class="num">2</span>: name = <span class="str">"Tue"</span>; <span class="kw">break</span>;
  <span class="kw">default</span>: name = <span class="str">"?"</span>;
}</div>
<p>The newer <strong>arrow form</strong> (Java 14+) is cleaner — no fall-through, can return a value:</p>
<div class="code-block"><span class="ty">String</span> name = <span class="kw">switch</span> (day) {
  <span class="kw">case</span> <span class="num">1</span> -&gt; <span class="str">"Mon"</span>;
  <span class="kw">case</span> <span class="num">2</span> -&gt; <span class="str">"Tue"</span>;
  <span class="kw">default</span> -&gt; <span class="str">"?"</span>;
};</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'In a classic switch, what happens if you omit <code>break</code>?',
              options: [
                { text: 'Nothing — each case is independent.', code: false },
                { text: 'Execution falls through to the next case.', code: false },
                { text: 'It throws an exception.', code: false },
                { text: 'It loops back to the top.', code: false }
              ],
              correct: 1,
              explanation: 'Without break, execution falls into the next case — a common bug source.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span> d = <span class="num">2</span>;
<span class="kw">switch</span> (d) {
  <span class="kw">case</span> <span class="num">1</span>: <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"A"</span>);
  <span class="kw">case</span> <span class="num">2</span>: <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"B"</span>);
  <span class="kw">case</span> <span class="num">3</span>: <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"C"</span>);
}`,
              options: ['B', 'B then C', 'A then B then C', 'C'],
              correct: 1,
              explanation: 'Case 2 matches, then falls through to case 3 (no breaks).'
            },
            {
              type: 'true-false',
              statement: 'The arrow form <code>case x -&gt; ...</code> does not fall through.',
              correct: true,
              explanation: 'Arrow cases execute exactly one branch — no break needed.'
            },
            {
              type: 'fill-blank',
              prompt: 'Default branch in a switch.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span>: name = <span class="str">"?"</span>;' }
              ],
              tokens: ['default', 'else', 'case _', 'otherwise', 'fallback'],
              correctAnswer: 'default',
              explanation: 'default catches anything not matched by an explicit case.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the keyword to its role.',
              leftLabel: 'Keyword',
              rightLabel: 'Role',
              pairs: [
                { left: 'switch', right: 'pick a branch by value' },
                { left: 'case', right: 'specific value to match' },
                { left: 'break', right: 'exit the switch' },
                { left: 'default', right: 'fallback when nothing matches' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 6 — Loops
    // =====================================================================
    {
      id: 'java-unit-6',
      name: 'Unit 6 · Loops',
      description: 'Repeat work with for, while, and friends.',
      lessons: [
        {
          id: 'java-6-1',
          name: 'for & while',
          icon: '🔁',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Counted vs Conditional Loops',
              content: `<p>A <code>for</code> loop is ideal when you know how many times to iterate:</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);
}</div>
<p>A <code>while</code> loop keeps going as long as a condition holds:</p>
<div class="code-block"><span class="ty">int</span> n = <span class="num">10</span>;
<span class="kw">while</span> (n &gt; <span class="num">0</span>) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(n);
  n--;
}</div>
<p>Make sure SOMETHING changes inside the loop — otherwise it never ends.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'How many lines does this print?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">5</span>; i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);
}`,
              options: ['4', '5', '6', 'forever'],
              correct: 1,
              explanation: 'It runs for i = 0,1,2,3,4 — that is 5 iterations.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Which part of a for loop runs only once, at the start?',
              options: [
                { text: 'The condition', code: false },
                { text: 'The update', code: false },
                { text: 'The initialization', code: false },
                { text: 'The body', code: false }
              ],
              correct: 2,
              explanation: 'The initializer (e.g., int i = 0) runs once before the first check.'
            },
            {
              type: 'fill-blank',
              prompt: 'Loop while n is positive.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span> (n &gt; <span class="num">0</span>) { n--; }' }
              ],
              tokens: ['while', 'for', 'until', 'loop', 'repeat'],
              correctAnswer: 'while',
              explanation: 'while runs as long as the condition is true.'
            },
            {
              type: 'true-false',
              statement: 'If the while condition is false on the first check, the body never runs.',
              correct: true,
              explanation: 'A while loop tests before each iteration — including the first.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a for loop that prints 0..4.',
              tokens: ['for', '(', 'int', 'i', '=', '0', ';', 'i', '<', '5', ';', 'i', '++', ')', 'foreach', 'while'],
              correctOrder: ['for', '(', 'int', 'i', '=', '0', ';', 'i', '<', '5', ';', 'i', '++', ')'],
              explanation: 'Three parts: init; condition; update.'
            }
          ]
        },
        {
          id: 'java-6-2',
          name: 'do-while, break & continue',
          icon: '⛔',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Always Run Once, and Loop Controls',
              content: `<p>A <code>do-while</code> loop checks the condition AFTER the body — so the body runs at least once:</p>
<div class="code-block"><span class="kw">do</span> {
  prompt();
} <span class="kw">while</span> (!valid);</div>
<p><code>break</code> exits the nearest loop immediately. <code>continue</code> skips to the next iteration.</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) {
  <span class="kw">if</span> (i == <span class="num">5</span>) <span class="kw">break</span>;       <span class="com">// stop entirely at 5</span>
  <span class="kw">if</span> (i % <span class="num">2</span> == <span class="num">0</span>) <span class="kw">continue</span>;  <span class="com">// skip even values</span>
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'A do-while loop guarantees the body runs…',
              options: [
                { text: 'at most once', code: false },
                { text: 'at least once', code: false },
                { text: 'exactly once', code: false },
                { text: 'never', code: false }
              ],
              correct: 1,
              explanation: 'The condition is checked after the first iteration.'
            },
            {
              type: 'output-predict',
              prompt: 'How many numbers does this print?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) {
  <span class="kw">if</span> (i == <span class="num">3</span>) <span class="kw">break</span>;
  <span class="ty">System</span>.out.<span class="fn">println</span>(i);
}`,
              options: ['2', '3', '4', '10'],
              correct: 1,
              explanation: 'Prints 0, 1, 2 then breaks at 3 — that is 3 numbers.'
            },
            {
              type: 'true-false',
              statement: '<code>continue</code> exits the loop entirely.',
              correct: false,
              explanation: 'continue jumps to the next iteration; break exits.'
            },
            {
              type: 'fill-blank',
              prompt: 'Skip even numbers in the loop.',
              codeLines: [
                { html: '<span class="kw">if</span> (n % <span class="num">2</span> == <span class="num">0</span>) <span class="kw">_BLANK_</span>;' }
              ],
              tokens: ['continue', 'break', 'skip', 'next', 'return'],
              correctAnswer: 'continue',
              explanation: 'continue skips the rest of the current iteration.'
            },
            {
              type: 'reorder-code',
              prompt: 'Build a do-while that prints n while it is positive.',
              lines: [
                '<span class="kw">do</span> {',
                '  <span class="ty">System</span>.out.<span class="fn">println</span>(n);',
                '  n--;',
                '} <span class="kw">while</span> (n &gt; <span class="num">0</span>);'
              ],
              correctOrder: [0, 1, 2, 3]
            }
          ]
        },
        {
          id: 'java-6-3',
          name: 'For-each & Nested Loops',
          icon: '🪺',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Enhanced for, and Looping Inside Loops',
              content: `<p>The <strong>enhanced for</strong> (a.k.a. for-each) iterates an array or collection without an index:</p>
<div class="code-block"><span class="ty">int</span>[] nums = { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
<span class="kw">for</span> (<span class="ty">int</span> n : nums) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(n);
}</div>
<p>Nested loops let you walk grids, like a 2-D pattern:</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> r = <span class="num">0</span>; r &lt; <span class="num">3</span>; r++) {
  <span class="kw">for</span> (<span class="ty">int</span> c = <span class="num">0</span>; c &lt; <span class="num">3</span>; c++) {
    <span class="ty">System</span>.out.<span class="fn">print</span>(r + <span class="str">","</span> + c + <span class="str">" "</span>);
  }
  <span class="ty">System</span>.out.<span class="fn">println</span>();
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is the for-each form?',
              options: [
                { text: 'for (int n : nums)', code: true },
                { text: 'foreach (int n in nums)', code: true },
                { text: 'for n in nums:', code: true },
                { text: 'for (n = 0; n < nums.length; n++)', code: true }
              ],
              correct: 0,
              explanation: 'Java uses a colon between the variable and the collection.'
            },
            {
              type: 'output-predict',
              prompt: 'How many total iterations?',
              code: `<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">3</span>; i++) {
  <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j &lt; <span class="num">4</span>; j++) {
    <span class="ty">System</span>.out.<span class="fn">print</span>(<span class="str">"*"</span>);
  }
}`,
              options: ['7', '12', '3', '4'],
              correct: 1,
              explanation: '3 outer × 4 inner = 12 stars.'
            },
            {
              type: 'true-false',
              statement: 'A for-each loop gives you the index of each element.',
              correct: false,
              explanation: 'For-each gives you the element, not the index — use a classic for if you need it.'
            },
            {
              type: 'fill-blank',
              prompt: 'Loop each name in a list.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">String</span> name _BLANK_ names) { ... }' }
              ],
              tokens: [':', 'in', 'of', '=', '->'],
              correctAnswer: ':',
              explanation: 'Java for-each uses a colon between variable and iterable.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a for-each that prints each <code>String s</code> in <code>words</code>.',
              tokens: ['for', '(', 'String', 's', ':', 'words', ')', '{', '}', 'in', 'of'],
              correctOrder: ['for', '(', 'String', 's', ':', 'words', ')', '{', '}'],
              explanation: 'Pattern: for (Type var : iterable) { body }.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 7 — Arrays
    // =====================================================================
    {
      id: 'java-unit-7',
      name: 'Unit 7 · Arrays',
      description: 'Fixed-size sequences of values.',
      lessons: [
        {
          id: 'java-7-1',
          name: 'Array Basics',
          icon: '📦',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Creating Arrays',
              content: `<p>An <strong>array</strong> holds a fixed-size sequence of values of the same type. There are two ways to create one:</p>
<div class="code-block"><span class="com">// 1. with new + size (defaults: 0 / false / null)</span>
<span class="ty">int</span>[] nums = <span class="kw">new</span> <span class="ty">int</span>[<span class="num">5</span>];

<span class="com">// 2. initializer syntax</span>
<span class="ty">int</span>[] vals = { <span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span> };</div>
<p>Length is a field (no parentheses): <code>nums.length</code>. Indexes go from 0 to <code>length - 1</code>.</p>
<div class="code-block">vals[<span class="num">0</span>] = <span class="num">99</span>;       <span class="com">// write</span>
<span class="ty">int</span> first = vals[<span class="num">0</span>]; <span class="com">// read</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which line declares an array of 3 ints initialized to 1, 2, 3?',
              options: [
                { text: 'int[] a = (1, 2, 3);', code: true },
                { text: 'int[] a = { 1, 2, 3 };', code: true },
                { text: 'int a[3] = 1,2,3;', code: true },
                { text: 'array<int> a = [1,2,3];', code: true }
              ],
              correct: 1,
              explanation: 'Java uses curly braces for array initializers.'
            },
            {
              type: 'true-false',
              statement: 'You get the length of an array with <code>a.length()</code>.',
              correct: false,
              explanation: 'Array length is a FIELD: a.length (no parentheses).'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span>[] a = { <span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span> };
<span class="ty">System</span>.out.<span class="fn">println</span>(a[<span class="num">1</span>]);`,
              options: ['10', '20', '30', 'error'],
              correct: 1,
              explanation: 'Index 1 is the second element, which is 20.'
            },
            {
              type: 'fill-blank',
              prompt: 'Create an int array of size 10.',
              codeLines: [
                { html: '<span class="ty">int</span>[] a = <span class="kw">_BLANK_</span> <span class="ty">int</span>[<span class="num">10</span>];' }
              ],
              tokens: ['new', 'create', 'make', 'array', 'alloc'],
              correctAnswer: 'new',
              explanation: 'Use the new keyword to allocate an array with a given length.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: declare an int array containing 1, 2, 3.',
              tokens: ['int', '[', ']', 'a', '=', '{', '1', ',', '2', ',', '3', '}', ';', 'new'],
              correctOrder: ['int', '[', ']', 'a', '=', '{', '1', ',', '2', ',', '3', '}', ';'],
              explanation: 'Initializer syntax: { v1, v2, v3 }.'
            }
          ]
        },
        {
          id: 'java-7-2',
          name: 'Iteration & Pitfalls',
          icon: '🚧',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Looping and Out-of-Bounds',
              content: `<p>You can iterate with either a classic for (gives you the index) or a for-each (gives you the element):</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(i + <span class="str">": "</span> + a[i]);
}
<span class="kw">for</span> (<span class="ty">int</span> v : a) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(v);
}</div>
<p>Reading <code>a[a.length]</code> throws an <code>ArrayIndexOutOfBoundsException</code>. That is one of the classic Java runtime bugs.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'For an array of length 5, valid indexes are…',
              options: [
                { text: '1 to 5', code: false },
                { text: '0 to 4', code: false },
                { text: '0 to 5', code: false },
                { text: '-1 to 4', code: false }
              ],
              correct: 1,
              explanation: 'Arrays are 0-indexed, so indexes run 0..length-1.'
            },
            {
              type: 'output-predict',
              prompt: 'What happens?',
              code: `<span class="ty">int</span>[] a = { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> };
<span class="ty">System</span>.out.<span class="fn">println</span>(a[<span class="num">3</span>]);`,
              options: ['0', '3', 'null', 'ArrayIndexOutOfBoundsException'],
              correct: 3,
              explanation: 'Valid indexes are 0..2; reading [3] throws at runtime.'
            },
            {
              type: 'true-false',
              statement: 'You can change the length of a Java array after it is created.',
              correct: false,
              explanation: 'Arrays are fixed-size. Use ArrayList if you need to resize.'
            },
            {
              type: 'fill-blank',
              prompt: 'Sum the array values using a for-each.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">int</span> v : a) { total _BLANK_ v; }' }
              ],
              tokens: ['+=', '=', '==', '++', '+'],
              correctAnswer: '+=',
              explanation: 'total += v accumulates the running sum.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder these lines to print each value of a.',
              lines: [
                '<span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {',
                '  <span class="ty">System</span>.out.<span class="fn">println</span>(a[i]);',
                '}'
              ],
              correctOrder: [0, 1, 2]
            }
          ]
        },
        {
          id: 'java-7-3',
          name: '2D Arrays',
          icon: '🧮',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Arrays of Arrays',
              content: `<p>A 2-D array is really an array of arrays. Each row can have its own length (but usually they are uniform).</p>
<div class="code-block"><span class="ty">int</span>[][] grid = {
  { <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span> },
  { <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span> }
};
<span class="ty">System</span>.out.<span class="fn">println</span>(grid[<span class="num">1</span>][<span class="num">2</span>]); <span class="com">// 6</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(grid.length);    <span class="com">// 2 (rows)</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(grid[<span class="num">0</span>].length); <span class="com">// 3 (cols of row 0)</span></div>
<p>Walk with nested loops: outer for rows, inner for columns.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">int</span>[][] g = { { <span class="num">1</span>, <span class="num">2</span> }, { <span class="num">3</span>, <span class="num">4</span> } };
<span class="ty">System</span>.out.<span class="fn">println</span>(g[<span class="num">1</span>][<span class="num">0</span>]);`,
              options: ['1', '2', '3', '4'],
              correct: 2,
              explanation: 'Row 1 is { 3, 4 }; column 0 is 3.'
            },
            {
              type: 'multiple-choice',
              prompt: 'How do you declare a 2-D int array variable?',
              options: [
                { text: 'int[] a = ...;', code: true },
                { text: 'int[][] a = ...;', code: true },
                { text: 'int<2> a = ...;', code: true },
                { text: 'array2d<int> a = ...;', code: true }
              ],
              correct: 1,
              explanation: 'Two pairs of brackets indicate an array of arrays.'
            },
            {
              type: 'true-false',
              statement: 'Every row of a 2D Java array must have the same length.',
              correct: false,
              explanation: 'Java supports "jagged" arrays — each row can be a different length.'
            },
            {
              type: 'fill-blank',
              prompt: 'Get the number of rows.',
              codeLines: [
                { html: '<span class="ty">int</span> rows = grid._BLANK_;' }
              ],
              tokens: ['length', 'size', 'length()', 'count', 'rows'],
              correctAnswer: 'length',
              explanation: 'For a 2D array, .length is the number of rows.'
            },
            {
              type: 'type-answer',
              prompt: 'What exception is thrown if you index past the end of an array?',
              code: '',
              accept: ['ArrayIndexOutOfBoundsException', 'arrayindexoutofboundsexception', 'ArrayIndexOutOfBounds'],
              explanation: 'ArrayIndexOutOfBoundsException is thrown at runtime.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 8 — Methods
    // =====================================================================
    {
      id: 'java-unit-8',
      name: 'Unit 8 · Methods',
      description: 'Reusable blocks of code with inputs and outputs.',
      lessons: [
        {
          id: 'java-8-1',
          name: 'Defining Methods',
          icon: '🧩',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Anatomy of a Method',
              content: `<p>A method has a <strong>return type</strong>, <strong>name</strong>, <strong>parameter list</strong>, and <strong>body</strong>:</p>
<div class="code-block"><span class="kw">public static</span> <span class="ty">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) {
  <span class="kw">return</span> a + b;
}</div>
<p>If a method does not return anything, the return type is <code>void</code>:</p>
<div class="code-block"><span class="kw">public static void</span> <span class="fn">greet</span>(<span class="ty">String</span> name) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Hi "</span> + name);
}</div>
<p>You call a method by name with arguments in parentheses: <code>add(2, 3)</code>.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which keyword means "this method returns nothing"?',
              options: [
                { text: 'null', code: true },
                { text: 'void', code: true },
                { text: 'empty', code: true },
                { text: 'none', code: true }
              ],
              correct: 1,
              explanation: 'void is the return type for methods that produce no value.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder these lines into a working method.',
              lines: [
                '<span class="kw">public static</span> <span class="ty">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) {',
                '  <span class="kw">return</span> a + b;',
                '}'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">public static</span> <span class="ty">int</span> <span class="fn">sq</span>(<span class="ty">int</span> x) { <span class="kw">return</span> x * x; }
<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="fn">sq</span>(<span class="num">4</span>));`,
              options: ['8', '16', '4', 'error'],
              correct: 1,
              explanation: 'sq(4) returns 4 * 4 = 16.'
            },
            {
              type: 'true-false',
              statement: 'A method with return type <code>int</code> may end without a <code>return</code> statement.',
              correct: false,
              explanation: 'Every path must return an int; the compiler will reject otherwise.'
            },
            {
              type: 'fill-blank',
              prompt: 'Return the larger of a and b.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span> (a &gt; b) ? a : b;' }
              ],
              tokens: ['return', 'yield', 'give', 'output', 'pass'],
              correctAnswer: 'return',
              explanation: 'return exits the method with a value.'
            }
          ]
        },
        {
          id: 'java-8-2',
          name: 'Overloading & Scope',
          icon: '🎯',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Same Name, Different Signatures',
              content: `<p>Java lets you define multiple methods with the same name as long as their <strong>parameter lists</strong> differ. This is called <strong>overloading</strong>:</p>
<div class="code-block"><span class="kw">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) { ... }
<span class="kw">double</span> <span class="fn">add</span>(<span class="ty">double</span> a, <span class="ty">double</span> b) { ... }
<span class="kw">int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b, <span class="ty">int</span> c) { ... }</div>
<p><strong>Scope</strong>: a local variable lives only within the block it is declared in. Parameters are locals visible inside the method body.</p>
<p>Return types alone are <strong>not</strong> enough to distinguish overloads — the parameter list must differ.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which pair of methods is a valid overload?',
              options: [
                { text: 'int f(int x) / int f(int y)', code: true },
                { text: 'int f(int x) / double f(int x)', code: true },
                { text: 'int f(int x) / int f(int x, int y)', code: true },
                { text: 'void f() / void f()', code: true }
              ],
              correct: 2,
              explanation: 'Different number of parameters → valid overload.'
            },
            {
              type: 'true-false',
              statement: 'You can overload methods by return type alone.',
              correct: false,
              explanation: 'Java distinguishes overloads by parameter types/count, not return type.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">static</span> <span class="ty">int</span> <span class="fn">f</span>(<span class="ty">int</span> x) { <span class="kw">return</span> x; }
<span class="kw">static</span> <span class="ty">int</span> <span class="fn">f</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) { <span class="kw">return</span> x + y; }
<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="fn">f</span>(<span class="num">2</span>, <span class="num">3</span>));`,
              options: ['2', '3', '5', 'error'],
              correct: 2,
              explanation: 'The two-arg overload is picked, returning 2 + 3 = 5.'
            },
            {
              type: 'fill-blank',
              prompt: 'Inside a method, you cannot access this variable.',
              codeLines: [
                { html: '<span class="kw">int</span> x = <span class="num">10</span>; <span class="com">// declared in another method&apos;s _BLANK_</span>' }
              ],
              tokens: ['scope', 'memory', 'class', 'file', 'world'],
              correctAnswer: 'scope',
              explanation: 'A variable declared inside another method is out of scope here.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the term to its meaning.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'overload', right: 'same name, different params' },
                { left: 'parameter', right: 'variable in the signature' },
                { left: 'argument', right: 'value passed at the call site' },
                { left: 'scope', right: 'where a variable is visible' }
              ]
            }
          ]
        },
        {
          id: 'java-8-3',
          name: 'Pass-by-Value',
          icon: '📤',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Java is Always Pass-by-Value',
              content: `<p>Java <strong>always</strong> passes arguments by value. For primitives, that means a COPY of the number is passed. For objects, the <em>reference</em> (the arrow to the object) is copied — but it still points at the same object.</p>
<div class="code-block"><span class="kw">static void</span> <span class="fn">bump</span>(<span class="ty">int</span> x) { x++; }       <span class="com">// no effect outside</span>
<span class="kw">static void</span> <span class="fn">add</span>(<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; xs) {
  xs.<span class="fn">add</span>(<span class="num">42</span>);   <span class="com">// caller sees this!</span>
}</div>
<p>Reassigning the parameter (<code>xs = new ArrayList&lt;&gt;()</code>) does <strong>not</strong> change the caller&apos;s variable — only mutations through the reference do.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How does Java pass arguments?',
              options: [
                { text: 'pass-by-reference', code: false },
                { text: 'pass-by-value (always)', code: false },
                { text: 'pass-by-name', code: false },
                { text: 'pass-by-pointer', code: false }
              ],
              correct: 1,
              explanation: 'Java is always pass-by-value — but the value passed for objects is the reference.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">static void</span> <span class="fn">bump</span>(<span class="ty">int</span> x) { x++; }
<span class="ty">int</span> n = <span class="num">5</span>;
<span class="fn">bump</span>(n);
<span class="ty">System</span>.out.<span class="fn">println</span>(n);`,
              options: ['5', '6', '0', 'error'],
              correct: 0,
              explanation: 'The local copy is incremented; the caller&apos;s n is untouched.'
            },
            {
              type: 'true-false',
              statement: 'Calling <code>list.add(x)</code> from a helper method affects the caller&apos;s list.',
              correct: true,
              explanation: 'Both references point at the same underlying list object.'
            },
            {
              type: 'fill-blank',
              prompt: 'Reassign the parameter — does it affect the caller?',
              codeLines: [
                { html: 'param = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(); <span class="com">// affects caller: _BLANK_</span>' }
              ],
              tokens: ['no', 'yes', 'sometimes', 'maybe', 'depends'],
              correctAnswer: 'no',
              explanation: 'Reassigning the local parameter does not affect the caller&apos;s variable.'
            },
            {
              type: 'type-answer',
              prompt: 'What argument-passing mechanism does Java use?',
              code: '',
              accept: ['pass-by-value', 'pass by value', 'value', 'by value'],
              explanation: 'Always pass-by-value, even for objects (the reference is the value).'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 9 — Classes & Objects (OOP I)
    // =====================================================================
    {
      id: 'java-unit-9',
      name: 'Unit 9 · Classes & Objects',
      description: 'Define your own types — instance fields and behavior.',
      lessons: [
        {
          id: 'java-9-1',
          name: 'Defining a Class',
          icon: '🏛️',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Classes as Blueprints',
              content: `<p>A <strong>class</strong> is a blueprint for objects. An <strong>object</strong> is an instance — a concrete realization with its own state.</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Dog</span> {
  <span class="ty">String</span> name;
  <span class="ty">int</span> age;

  <span class="kw">public void</span> <span class="fn">bark</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">": woof!"</span>);
  }
}</div>
<p>Create an object with <code>new</code>:</p>
<div class="code-block"><span class="ty">Dog</span> d = <span class="kw">new</span> <span class="ty">Dog</span>();
d.name = <span class="str">"Rex"</span>;
d.<span class="fn">bark</span>();      <span class="com">// "Rex: woof!"</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which keyword creates a new object?',
              options: [
                { text: 'create', code: true },
                { text: 'new', code: true },
                { text: 'object', code: true },
                { text: 'make', code: true }
              ],
              correct: 1,
              explanation: 'new Dog() allocates a new Dog instance.'
            },
            {
              type: 'true-false',
              statement: 'Each object has its own copy of the instance fields.',
              correct: true,
              explanation: 'Two Dog objects have independent name and age fields.'
            },
            {
              type: 'fill-blank',
              prompt: 'Create a Dog instance.',
              codeLines: [
                { html: '<span class="ty">Dog</span> d = <span class="kw">_BLANK_</span> <span class="ty">Dog</span>();' }
              ],
              tokens: ['new', 'create', 'Dog', 'class', 'init'],
              correctAnswer: 'new',
              explanation: 'new is the keyword used to allocate an object.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Dog</span> d = <span class="kw">new</span> <span class="ty">Dog</span>();
d.name = <span class="str">"Rex"</span>;
d.<span class="fn">bark</span>();`,
              options: ['Rex: woof!', 'Dog: woof!', 'null: woof!', 'error'],
              correct: 0,
              explanation: 'Name was set before bark(), so it prints "Rex: woof!".'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each term.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'class', right: 'blueprint' },
                { left: 'object', right: 'instance of a class' },
                { left: 'field', right: 'data inside an object' },
                { left: 'method', right: 'behavior of an object' }
              ]
            }
          ]
        },
        {
          id: 'java-9-2',
          name: 'Constructors & this',
          icon: '🛠️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Initializing State',
              content: `<p>A <strong>constructor</strong> is a special method that runs when an object is created. It has the same name as the class and no return type:</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Dog</span> {
  <span class="ty">String</span> name;
  <span class="ty">int</span> age;

  <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {
    <span class="kw">this</span>.name = name;
    <span class="kw">this</span>.age = age;
  }
}</div>
<p><code>this</code> refers to the current object. Use it to disambiguate a field from a parameter with the same name.</p>
<p>If you don&apos;t define a constructor, Java gives you a free <strong>no-arg default</strong>. As soon as you add one, the default disappears.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is true about a constructor?',
              options: [
                { text: 'It returns void.', code: false },
                { text: 'It has the same name as the class.', code: false },
                { text: 'It is called once per class.', code: false },
                { text: 'It must be private.', code: false }
              ],
              correct: 1,
              explanation: 'A constructor must be named after the class and has no return type.'
            },
            {
              type: 'true-false',
              statement: 'If you define any constructor, Java still provides the no-arg default.',
              correct: false,
              explanation: 'Once you write one constructor, the implicit no-arg default is gone.'
            },
            {
              type: 'fill-blank',
              prompt: 'Inside a constructor, refer to the current object.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span>.name = name;' }
              ],
              tokens: ['this', 'self', 'me', 'super', 'instance'],
              correctAnswer: 'this',
              explanation: 'this is the reference to the current object in Java.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a working class with a constructor.',
              lines: [
                '<span class="kw">public class</span> <span class="ty">Point</span> {',
                '  <span class="ty">int</span> x, y;',
                '  <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) {',
                '    <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y;',
                '  }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Dog</span> d = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>, <span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(d.name);`,
              options: ['null', 'Rex', '3', 'error'],
              correct: 1,
              explanation: 'The constructor stored "Rex" into the name field.'
            }
          ]
        },
        {
          id: 'java-9-3',
          name: 'Encapsulation',
          icon: '🔒',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Private Fields + Getters/Setters',
              content: `<p><strong>Encapsulation</strong> hides internal state behind methods. Mark fields <code>private</code> and expose them with <strong>getters</strong> and <strong>setters</strong>:</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Person</span> {
  <span class="kw">private</span> <span class="ty">String</span> name;
  <span class="kw">private</span> <span class="ty">int</span> age;

  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">getName</span>() { <span class="kw">return</span> name; }
  <span class="kw">public void</span> <span class="fn">setName</span>(<span class="ty">String</span> n) { <span class="kw">this</span>.name = n; }
  <span class="kw">public void</span> <span class="fn">setAge</span>(<span class="ty">int</span> a) {
    <span class="kw">if</span> (a &lt; <span class="num">0</span>) <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>();
    <span class="kw">this</span>.age = a;
  }
}</div>
<p>This lets you validate values, change internal storage, and protect invariants.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use private fields?',
              options: [
                { text: 'to make code shorter', code: false },
                { text: 'to hide implementation and protect invariants', code: false },
                { text: 'to make fields immutable', code: false },
                { text: 'to make them static', code: false }
              ],
              correct: 1,
              explanation: 'Privacy lets you control access and validation through methods.'
            },
            {
              type: 'true-false',
              statement: 'A getter for a field <code>age</code> is conventionally named <code>getAge()</code>.',
              correct: true,
              explanation: 'Java&apos;s JavaBean convention uses getX/setX names.'
            },
            {
              type: 'fill-blank',
              prompt: 'Mark a field as encapsulated.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span> <span class="ty">int</span> age;' }
              ],
              tokens: ['private', 'public', 'final', 'static', 'hidden'],
              correctAnswer: 'private',
              explanation: 'private limits access to this class only.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a getter for <code>age</code>.',
              tokens: ['public', 'int', 'getAge', '(', ')', '{', 'return', 'age', ';', '}', 'void', 'get'],
              correctOrder: ['public', 'int', 'getAge', '(', ')', '{', 'return', 'age', ';', '}'],
              explanation: 'Standard JavaBean getter: public, returns the field type.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each access modifier.',
              leftLabel: 'Modifier',
              rightLabel: 'Visibility',
              pairs: [
                { left: 'public', right: 'visible everywhere' },
                { left: 'private', right: 'only in this class' },
                { left: 'protected', right: 'package + subclasses' },
                { left: '(default)', right: 'same package only' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'What modifier limits a field to its own class?',
              code: '',
              accept: ['private'],
              explanation: 'private restricts access to the declaring class.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 10 — Inheritance (OOP II)
    // =====================================================================
    {
      id: 'java-unit-10',
      name: 'Unit 10 · Inheritance',
      description: 'Reuse behavior with extends and super.',
      lessons: [
        {
          id: 'java-10-1',
          name: 'extends & super',
          icon: '🌳',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A Class That Extends Another',
              content: `<p>Use <code>extends</code> to make one class a <strong>subclass</strong> of another. The subclass inherits fields and methods.</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Animal</span> {
  <span class="ty">String</span> name;
  <span class="kw">public void</span> <span class="fn">speak</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"..."</span>);
  }
}

<span class="kw">public class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name) {
    <span class="kw">super</span>();
    <span class="kw">this</span>.name = name;
  }
}</div>
<p><code>super(...)</code> calls the parent constructor. <code>super.method()</code> calls the parent&apos;s version of a method.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which keyword declares a subclass?',
              options: [
                { text: 'inherits', code: true },
                { text: 'extends', code: true },
                { text: 'implements', code: true },
                { text: 'subclass', code: true }
              ],
              correct: 1,
              explanation: 'class A extends B makes A a subclass of B.'
            },
            {
              type: 'true-false',
              statement: 'A Java class can extend more than one class at once.',
              correct: false,
              explanation: 'Java has single inheritance for classes. Use interfaces for multiple inheritance of type.'
            },
            {
              type: 'fill-blank',
              prompt: 'Call the parent constructor.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span>(name);' }
              ],
              tokens: ['super', 'parent', 'base', 'this', 'extends'],
              correctAnswer: 'super',
              explanation: 'super(...) invokes a constructor of the parent class.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">class</span> <span class="ty">A</span> { <span class="kw">void</span> <span class="fn">hi</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"A"</span>); } }
<span class="kw">class</span> <span class="ty">B</span> <span class="kw">extends</span> <span class="ty">A</span> { }
<span class="kw">new</span> <span class="ty">B</span>().<span class="fn">hi</span>();`,
              options: ['A', 'B', 'AB', 'error'],
              correct: 0,
              explanation: 'B inherits hi() from A; nothing overrides it.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a subclass.',
              lines: [
                '<span class="kw">class</span> <span class="ty">Cat</span> <span class="kw">extends</span> <span class="ty">Animal</span> {',
                '  <span class="kw">public</span> <span class="fn">Cat</span>(<span class="ty">String</span> n) {',
                '    <span class="kw">super</span>();',
                '    <span class="kw">this</span>.name = n;',
                '  }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            }
          ]
        },
        {
          id: 'java-10-2',
          name: 'Overriding & @Override',
          icon: '🎭',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Replacing Parent Behavior',
              content: `<p>A subclass can <strong>override</strong> a parent method by giving it the same signature. Annotate with <code>@Override</code> so the compiler checks you actually overrode something.</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">Animal</span> {
  <span class="kw">public void</span> <span class="fn">speak</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"..."</span>); }
}

<span class="kw">class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">speak</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Woof"</span>); }
}</div>
<p>Every class implicitly extends <code>Object</code> — that&apos;s where methods like <code>toString()</code> and <code>equals()</code> come from.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Why use @Override?',
              options: [
                { text: 'To make a method run faster', code: false },
                { text: 'To force the compiler to check the override is valid', code: false },
                { text: 'To make a method final', code: false },
                { text: 'To make a method abstract', code: false }
              ],
              correct: 1,
              explanation: 'The compiler errors if @Override doesn&apos;t actually override anything.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">class</span> <span class="ty">A</span> { <span class="kw">void</span> <span class="fn">say</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"A"</span>); } }
<span class="kw">class</span> <span class="ty">B</span> <span class="kw">extends</span> <span class="ty">A</span> { @<span class="ty">Override</span> <span class="kw">void</span> <span class="fn">say</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"B"</span>); } }
<span class="ty">A</span> a = <span class="kw">new</span> <span class="ty">B</span>();
a.<span class="fn">say</span>();`,
              options: ['A', 'B', 'AB', 'error'],
              correct: 1,
              explanation: 'Method dispatch is based on the runtime type (B), not the static type (A).'
            },
            {
              type: 'true-false',
              statement: 'Every Java class extends <code>Object</code> directly or indirectly.',
              correct: true,
              explanation: 'Object sits at the top of the class hierarchy.'
            },
            {
              type: 'fill-blank',
              prompt: 'Annotate an overriding method.',
              codeLines: [
                { html: '_BLANK_' },
                { html: '<span class="kw">public void</span> <span class="fn">speak</span>() { ... }' }
              ],
              tokens: ['@Override', '@Overload', '@Inherit', '@Super', '@New'],
              correctAnswer: '@Override',
              explanation: '@Override marks an intentional override and lets the compiler verify it.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match terms.',
              leftLabel: 'Term',
              rightLabel: 'Meaning',
              pairs: [
                { left: 'override', right: 'replace parent behavior' },
                { left: 'overload', right: 'same name, different params' },
                { left: 'super', right: 'parent reference' },
                { left: 'Object', right: 'root of class hierarchy' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 11 — Polymorphism & Abstraction (OOP III)
    // =====================================================================
    {
      id: 'java-unit-11',
      name: 'Unit 11 · Polymorphism & Abstraction',
      description: 'One reference, many shapes — and abstract templates.',
      lessons: [
        {
          id: 'java-11-1',
          name: 'Polymorphism & instanceof',
          icon: '🦋',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A Parent Reference Holds Any Child',
              content: `<p><strong>Polymorphism</strong> means one reference type can refer to many actual types:</p>
<div class="code-block"><span class="ty">Animal</span>[] zoo = { <span class="kw">new</span> <span class="ty">Dog</span>(), <span class="kw">new</span> <span class="ty">Cat</span>() };
<span class="kw">for</span> (<span class="ty">Animal</span> a : zoo) {
  a.<span class="fn">speak</span>();   <span class="com">// dispatches to the actual subclass</span>
}</div>
<p>Use <code>instanceof</code> to check the real runtime type. Java 16+ adds <strong>pattern matching</strong>:</p>
<div class="code-block"><span class="kw">if</span> (a <span class="kw">instanceof</span> <span class="ty">Dog</span> d) {
  d.<span class="fn">fetch</span>();
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>instanceof</code> do?',
              options: [
                { text: 'Creates a new instance.', code: false },
                { text: 'Checks if an object is of a certain type.', code: false },
                { text: 'Returns the class name.', code: false },
                { text: 'Casts an object.', code: false }
              ],
              correct: 1,
              explanation: 'instanceof returns true if the object is of (or extends) the named type.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Dog</span>();
<span class="ty">System</span>.out.<span class="fn">println</span>(a <span class="kw">instanceof</span> <span class="ty">Animal</span>);`,
              options: ['true', 'false', 'null', 'error'],
              correct: 0,
              explanation: 'A Dog is an Animal, so instanceof Animal is true.'
            },
            {
              type: 'true-false',
              statement: 'A parent reference can call methods only declared in the parent.',
              correct: true,
              explanation: 'Through a parent reference, only methods known to the parent are callable (but dispatch picks the subclass version).'
            },
            {
              type: 'fill-blank',
              prompt: 'Test the runtime type.',
              codeLines: [
                { html: '<span class="kw">if</span> (x _BLANK_ <span class="ty">Dog</span>) { ... }' }
              ],
              tokens: ['instanceof', 'is', 'typeof', 'isA', 'class'],
              correctAnswer: 'instanceof',
              explanation: 'instanceof is the runtime type-check operator.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: cast a to Dog and call fetch.',
              tokens: ['(', '(', 'Dog', ')', 'a', ')', '.', 'fetch', '(', ')', ';', 'as'],
              correctOrder: ['(', '(', 'Dog', ')', 'a', ')', '.', 'fetch', '(', ')', ';'],
              explanation: 'Wrap the cast in parens, then call the method.'
            }
          ]
        },
        {
          id: 'java-11-2',
          name: 'abstract Classes',
          icon: '📐',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Templates That Can&apos;t Be Instantiated',
              content: `<p>An <code>abstract</code> class can&apos;t be instantiated directly. It can contain <code>abstract</code> methods — declarations with no body — that subclasses MUST implement.</p>
<div class="code-block"><span class="kw">public abstract class</span> <span class="ty">Shape</span> {
  <span class="kw">public abstract</span> <span class="ty">double</span> <span class="fn">area</span>();

  <span class="kw">public void</span> <span class="fn">describe</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Area = "</span> + <span class="fn">area</span>());
  }
}

<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">extends</span> <span class="ty">Shape</span> {
  <span class="ty">double</span> r;
  @<span class="ty">Override</span>
  <span class="kw">public</span> <span class="ty">double</span> <span class="fn">area</span>() { <span class="kw">return</span> <span class="ty">Math</span>.PI * r * r; }
}</div>
<p>Abstract classes mix concrete code (shared) with abstract slots (subclass-specific).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Can you write <code>new Shape()</code> if Shape is abstract?',
              options: [
                { text: 'Yes — abstract just means no constructor.', code: false },
                { text: 'No — abstract classes cannot be instantiated.', code: false },
                { text: 'Yes — but only inside the class.', code: false },
                { text: 'Only with reflection.', code: false }
              ],
              correct: 1,
              explanation: 'You must instantiate a concrete subclass.'
            },
            {
              type: 'true-false',
              statement: 'An abstract class can contain methods with bodies.',
              correct: true,
              explanation: 'Abstract classes can mix concrete and abstract methods.'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare an abstract method.',
              codeLines: [
                { html: '<span class="kw">public _BLANK_</span> <span class="ty">double</span> <span class="fn">area</span>();' }
              ],
              tokens: ['abstract', 'virtual', 'pure', 'open', 'final'],
              correctAnswer: 'abstract',
              explanation: 'abstract methods have no body and must be implemented by subclasses.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Shape</span> s = <span class="kw">new</span> <span class="ty">Circle</span>(); s.r = <span class="num">1</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>((<span class="ty">int</span>) (s.<span class="fn">area</span>() * <span class="num">100</span>));`,
              options: ['100', '314', '628', '0'],
              correct: 1,
              explanation: 'π * 1 * 1 ≈ 3.14159 — times 100 truncated → 314.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each scenario.',
              leftLabel: 'Goal',
              rightLabel: 'Best fit',
              pairs: [
                { left: 'Shared code + required hooks', right: 'abstract class' },
                { left: 'Pure contract, no fields', right: 'interface' },
                { left: 'Cannot inherit further', right: 'final class' },
                { left: 'Root of all classes', right: 'Object' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 12 — Interfaces
    // =====================================================================
    {
      id: 'java-unit-12',
      name: 'Unit 12 · Interfaces',
      description: 'Contracts that classes promise to fulfil.',
      lessons: [
        {
          id: 'java-12-1',
          name: 'interface & implements',
          icon: '📜',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A Pure Contract',
              content: `<p>An <code>interface</code> declares method signatures with no bodies (by default). A class promises to provide those methods using <code>implements</code>:</p>
<div class="code-block"><span class="kw">public interface</span> <span class="ty">Greeter</span> {
  <span class="ty">String</span> <span class="fn">greet</span>(<span class="ty">String</span> name);
}

<span class="kw">public class</span> <span class="ty">English</span> <span class="kw">implements</span> <span class="ty">Greeter</span> {
  @<span class="ty">Override</span>
  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">greet</span>(<span class="ty">String</span> name) {
    <span class="kw">return</span> <span class="str">"Hello, "</span> + name;
  }
}</div>
<p>A class can implement <strong>many</strong> interfaces — comma-separated.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How does a class commit to an interface?',
              options: [
                { text: 'extends', code: true },
                { text: 'implements', code: true },
                { text: 'inherits', code: true },
                { text: 'uses', code: true }
              ],
              correct: 1,
              explanation: 'extends is for classes; implements is for interfaces.'
            },
            {
              type: 'true-false',
              statement: 'A class can implement multiple interfaces.',
              correct: true,
              explanation: 'Multiple interfaces are comma-separated after implements.'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare that <code>Cat</code> follows two contracts.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">Cat</span> _BLANK_ <span class="ty">Animal</span>, <span class="ty">Cute</span> { ... }' }
              ],
              tokens: ['implements', 'extends', 'uses', 'with', 'follows'],
              correctAnswer: 'implements',
              explanation: 'implements lets a class commit to one or more interfaces.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a valid interface declaration.',
              lines: [
                '<span class="kw">public interface</span> <span class="ty">Drawable</span> {',
                '  <span class="kw">void</span> <span class="fn">draw</span>();',
                '}'
              ],
              correctOrder: [0, 1, 2]
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">interface</span> <span class="ty">G</span> { <span class="ty">String</span> <span class="fn">greet</span>(); }
<span class="kw">class</span> <span class="ty">E</span> <span class="kw">implements</span> <span class="ty">G</span> { <span class="kw">public</span> <span class="ty">String</span> <span class="fn">greet</span>() { <span class="kw">return</span> <span class="str">"Hi"</span>; } }
<span class="ty">G</span> g = <span class="kw">new</span> <span class="ty">E</span>();
<span class="ty">System</span>.out.<span class="fn">println</span>(g.<span class="fn">greet</span>());`,
              options: ['Hi', 'null', 'G', 'error'],
              correct: 0,
              explanation: 'The interface reference dispatches to E&apos;s implementation.'
            }
          ]
        },
        {
          id: 'java-12-2',
          name: 'default & static Methods',
          icon: '⚙️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Interfaces Got Powerful',
              content: `<p>Since Java 8, interfaces can have <code>default</code> methods (with bodies — implementers may override) and <code>static</code> methods:</p>
<div class="code-block"><span class="kw">public interface</span> <span class="ty">Greeter</span> {
  <span class="ty">String</span> <span class="fn">greet</span>(<span class="ty">String</span> name);

  <span class="kw">default</span> <span class="ty">String</span> <span class="fn">shout</span>(<span class="ty">String</span> name) {
    <span class="kw">return</span> <span class="fn">greet</span>(name).<span class="fn">toUpperCase</span>();
  }

  <span class="kw">static</span> <span class="ty">Greeter</span> <span class="fn">english</span>() {
    <span class="kw">return</span> n -&gt; <span class="str">"Hello, "</span> + n;
  }
}</div>
<p>A <strong>marker interface</strong> (like <code>Serializable</code>) has no methods at all — it just tags a class with extra meaning.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is a <code>default</code> method?',
              options: [
                { text: 'A method that returns null.', code: false },
                { text: 'An interface method with a body that implementers may override.', code: false },
                { text: 'A constructor for interfaces.', code: false },
                { text: 'A method named "default".', code: false }
              ],
              correct: 1,
              explanation: 'default methods provide a fallback body in interfaces.'
            },
            {
              type: 'true-false',
              statement: 'Interfaces can declare <code>static</code> methods.',
              correct: true,
              explanation: 'Since Java 8, static methods on interfaces are allowed.'
            },
            {
              type: 'fill-blank',
              prompt: 'Provide a fallback method body inside an interface.',
              codeLines: [
                { html: '_BLANK_ <span class="ty">String</span> <span class="fn">shout</span>(<span class="ty">String</span> n) { ... }' }
              ],
              tokens: ['default', 'public', 'override', 'static', 'final'],
              correctAnswer: 'default',
              explanation: 'default lets you add a body to an interface method.'
            },
            {
              type: 'true-false',
              statement: 'A "marker interface" defines no methods.',
              correct: true,
              explanation: 'Like Serializable — it tags classes without requiring methods.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">interface</span> <span class="ty">G</span> {
  <span class="ty">String</span> <span class="fn">greet</span>(<span class="ty">String</span> n);
  <span class="kw">default</span> <span class="ty">String</span> <span class="fn">shout</span>(<span class="ty">String</span> n) { <span class="kw">return</span> <span class="fn">greet</span>(n).<span class="fn">toUpperCase</span>(); }
}
<span class="ty">G</span> g = n -&gt; <span class="str">"hi "</span> + n;
<span class="ty">System</span>.out.<span class="fn">println</span>(g.<span class="fn">shout</span>(<span class="str">"a"</span>));`,
              options: ['hi a', 'HI A', 'a hi', 'error'],
              correct: 1,
              explanation: 'greet returns "hi a", and shout uppercases it.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match interface feature to release.',
              leftLabel: 'Feature',
              rightLabel: 'Added in',
              pairs: [
                { left: 'default methods', right: 'Java 8' },
                { left: 'static methods', right: 'Java 8' },
                { left: 'private methods', right: 'Java 9' },
                { left: 'marker interface', right: 'always' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 13 — Exceptions
    // =====================================================================
    {
      id: 'java-unit-13',
      name: 'Unit 13 · Exceptions',
      description: 'Handling and signaling unexpected situations.',
      lessons: [
        {
          id: 'java-13-1',
          name: 'try / catch / finally',
          icon: '🚨',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'When Things Go Wrong',
              content: `<p>An <strong>exception</strong> is an object that signals an error. You guard risky code with <code>try</code> and recover in <code>catch</code>. <code>finally</code> always runs (cleanup).</p>
<div class="code-block"><span class="kw">try</span> {
  <span class="ty">int</span> n = <span class="ty">Integer</span>.<span class="fn">parseInt</span>(s);
} <span class="kw">catch</span> (<span class="ty">NumberFormatException</span> e) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Not a number"</span>);
} <span class="kw">finally</span> {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Cleanup"</span>);
}</div>
<p>An uncaught exception propagates up the call stack until something catches it (or the JVM prints a stack trace).</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which block always runs?',
              options: [
                { text: 'try', code: true },
                { text: 'catch', code: true },
                { text: 'finally', code: true },
                { text: 'else', code: true }
              ],
              correct: 2,
              explanation: 'finally runs whether or not an exception occurred.'
            },
            {
              type: 'true-false',
              statement: 'If no exception is thrown, the catch block still runs.',
              correct: false,
              explanation: 'catch only runs when a matching exception is thrown.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">try</span> {
  <span class="ty">Integer</span>.<span class="fn">parseInt</span>(<span class="str">"x"</span>);
} <span class="kw">catch</span> (<span class="ty">Exception</span> e) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"caught"</span>);
} <span class="kw">finally</span> {
  <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"done"</span>);
}`,
              options: ['caught', 'done', 'caught then done', 'nothing'],
              correct: 2,
              explanation: 'parse fails → caught runs; finally always runs after.'
            },
            {
              type: 'fill-blank',
              prompt: 'Catch a parsing error.',
              codeLines: [
                { html: '<span class="kw">catch</span> (<span class="ty">_BLANK_</span> e) { ... }' }
              ],
              tokens: ['NumberFormatException', 'IOException', 'NullPointerException', 'RuntimeError', 'ParseError'],
              correctAnswer: 'NumberFormatException',
              explanation: 'Integer.parseInt throws NumberFormatException on bad input.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a try/catch/finally.',
              lines: [
                '<span class="kw">try</span> {',
                '  risky();',
                '} <span class="kw">catch</span> (<span class="ty">Exception</span> e) {',
                '  recover();',
                '} <span class="kw">finally</span> {',
                '  cleanup();',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6]
            }
          ]
        },
        {
          id: 'java-13-2',
          name: 'throw, throws, multi-catch',
          icon: '⚠️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Signaling and Declaring',
              content: `<p><code>throw</code> raises an exception. <code>throws</code> declares which checked exceptions a method might raise.</p>
<div class="code-block"><span class="kw">public void</span> <span class="fn">load</span>(<span class="ty">String</span> path) <span class="kw">throws</span> <span class="ty">IOException</span> {
  <span class="kw">if</span> (path == <span class="kw">null</span>) <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"null path"</span>);
  ...
}</div>
<p>You can combine related catches:</p>
<div class="code-block"><span class="kw">catch</span> (<span class="ty">IOException</span> | <span class="ty">SQLException</span> e) {
  log(e);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which keyword raises an exception?',
              options: [
                { text: 'throws', code: true },
                { text: 'throw', code: true },
                { text: 'raise', code: true },
                { text: 'panic', code: true }
              ],
              correct: 1,
              explanation: 'throw raises; throws appears in a method signature.'
            },
            {
              type: 'true-false',
              statement: 'A multi-catch handles several exception types in one block.',
              correct: true,
              explanation: 'Use | between types: catch (IOException | SQLException e).'
            },
            {
              type: 'fill-blank',
              prompt: 'Declare that loadFile may throw IOException.',
              codeLines: [
                { html: '<span class="kw">public void</span> <span class="fn">loadFile</span>() _BLANK_ <span class="ty">IOException</span> { ... }' }
              ],
              tokens: ['throws', 'throw', 'raises', 'declares', 'catches'],
              correctAnswer: 'throws',
              explanation: 'throws in a signature lists checked exceptions the method may raise.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="kw">try</span> {
  <span class="kw">throw new</span> <span class="ty">RuntimeException</span>(<span class="str">"oops"</span>);
} <span class="kw">catch</span> (<span class="ty">RuntimeException</span> e) {
  <span class="ty">System</span>.out.<span class="fn">println</span>(e.<span class="fn">getMessage</span>());
}`,
              options: ['oops', 'RuntimeException', 'null', 'error'],
              correct: 0,
              explanation: 'The exception&apos;s message is "oops".'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a throw statement.',
              tokens: ['throw', 'new', 'RuntimeException', '(', '"bad"', ')', ';', 'raise', 'throws'],
              correctOrder: ['throw', 'new', 'RuntimeException', '(', '"bad"', ')', ';'],
              explanation: 'throw + new + ExceptionType(message) — capped with a semicolon.'
            }
          ]
        },
        {
          id: 'java-13-3',
          name: 'Checked vs Unchecked & Custom',
          icon: '🧪',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Two Worlds of Exceptions',
              content: `<p>Java has two flavors of exception:</p>
<ul>
<li><strong>Checked</strong> — extends <code>Exception</code> (but not <code>RuntimeException</code>). The compiler forces you to declare or catch them. Examples: <code>IOException</code>, <code>SQLException</code>.</li>
<li><strong>Unchecked</strong> — extends <code>RuntimeException</code>. No compile-time enforcement. Examples: <code>NullPointerException</code>, <code>IllegalArgumentException</code>.</li>
</ul>
<p>You can define your own:</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">OutOfStockException</span> <span class="kw">extends</span> <span class="ty">RuntimeException</span> {
  <span class="kw">public</span> <span class="fn">OutOfStockException</span>(<span class="ty">String</span> msg) { <span class="kw">super</span>(msg); }
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which is a CHECKED exception?',
              options: [
                { text: 'NullPointerException', code: true },
                { text: 'IllegalArgumentException', code: true },
                { text: 'IOException', code: true },
                { text: 'ArithmeticException', code: true }
              ],
              correct: 2,
              explanation: 'IOException is checked — the compiler forces you to handle it.'
            },
            {
              type: 'true-false',
              statement: 'A custom unchecked exception extends <code>RuntimeException</code>.',
              correct: true,
              explanation: 'To make it unchecked, extend RuntimeException; otherwise extend Exception.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each exception.',
              leftLabel: 'Exception',
              rightLabel: 'Kind',
              pairs: [
                { left: 'IOException', right: 'checked' },
                { left: 'SQLException', right: 'checked' },
                { left: 'NullPointerException', right: 'unchecked' },
                { left: 'IllegalArgumentException', right: 'unchecked' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Make a custom checked exception.',
              codeLines: [
                { html: '<span class="kw">class</span> <span class="ty">MyEx</span> <span class="kw">extends</span> <span class="ty">_BLANK_</span> { ... }' }
              ],
              tokens: ['Exception', 'RuntimeException', 'Error', 'Throwable', 'String'],
              correctAnswer: 'Exception',
              explanation: 'Extend Exception (not RuntimeException) to make it checked.'
            },
            {
              type: 'output-predict',
              prompt: 'What kind of error?',
              code: `<span class="ty">String</span> s = <span class="kw">null</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">length</span>());`,
              options: ['compile error', 'NullPointerException', 'IOException', 'no error'],
              correct: 1,
              explanation: 'Calling a method on null throws NullPointerException at runtime.'
            },
            {
              type: 'type-answer',
              prompt: 'Which class do all exceptions ultimately extend?',
              code: '',
              accept: ['Throwable', 'java.lang.Throwable'],
              explanation: 'Both Exception and Error extend Throwable.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 14 — Collections Framework
    // =====================================================================
    {
      id: 'java-unit-14',
      name: 'Unit 14 · Collections Framework',
      description: 'Lists, sets, and maps — your everyday containers.',
      lessons: [
        {
          id: 'java-14-1',
          name: 'ArrayList',
          icon: '📋',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'A Resizable List',
              content: `<p><code>ArrayList</code> is a dynamic, ordered list. Add, get, set, remove — all by index.</p>
<div class="code-block"><span class="kw">import</span> java.util.<span class="ty">ArrayList</span>;
<span class="kw">import</span> java.util.<span class="ty">List</span>;

<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; names = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
names.<span class="fn">add</span>(<span class="str">"Ada"</span>);
names.<span class="fn">add</span>(<span class="str">"Linus"</span>);
names.<span class="fn">get</span>(<span class="num">0</span>);          <span class="com">// "Ada"</span>
names.<span class="fn">size</span>();           <span class="com">// 2</span>
names.<span class="fn">remove</span>(<span class="num">0</span>);       <span class="com">// removes "Ada"</span></div>
<p>The angle brackets are the <strong>generic type</strong> — they say "a List of Strings".</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which method adds to an ArrayList?',
              options: [
                { text: 'push', code: true },
                { text: 'add', code: true },
                { text: 'insert', code: true },
                { text: 'append', code: true }
              ],
              correct: 1,
              explanation: 'list.add(x) appends to the end.'
            },
            {
              type: 'true-false',
              statement: 'An ArrayList can grow as you add elements.',
              correct: true,
              explanation: 'It resizes automatically — unlike a plain array.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
nums.<span class="fn">add</span>(<span class="num">1</span>); nums.<span class="fn">add</span>(<span class="num">2</span>); nums.<span class="fn">add</span>(<span class="num">3</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(nums.<span class="fn">size</span>());`,
              options: ['1', '2', '3', '6'],
              correct: 2,
              explanation: 'Three elements added, so size() is 3.'
            },
            {
              type: 'fill-blank',
              prompt: 'Get the first element.',
              codeLines: [
                { html: '<span class="ty">String</span> first = names.<span class="fn">_BLANK_</span>(<span class="num">0</span>);' }
              ],
              tokens: ['get', 'index', 'at', 'item', 'find'],
              correctAnswer: 'get',
              explanation: 'list.get(i) reads by index.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build: create a List of Strings.',
              tokens: ['List', '<', 'String', '>', 'list', '=', 'new', 'ArrayList', '<', '>', '(', ')', ';', 'Array'],
              correctOrder: ['List', '<', 'String', '>', 'list', '=', 'new', 'ArrayList', '<', '>', '(', ')', ';'],
              explanation: 'Declare the interface List, construct the concrete ArrayList.'
            }
          ]
        },
        {
          id: 'java-14-2',
          name: 'HashMap',
          icon: '🗺️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Key-Value Lookups',
              content: `<p>A <code>HashMap</code> stores key → value pairs with fast lookup.</p>
<div class="code-block"><span class="kw">import</span> java.util.<span class="ty">HashMap</span>;
<span class="kw">import</span> java.util.<span class="ty">Map</span>;

<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; ages = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
ages.<span class="fn">put</span>(<span class="str">"Ada"</span>, <span class="num">36</span>);
ages.<span class="fn">put</span>(<span class="str">"Linus"</span>, <span class="num">54</span>);
ages.<span class="fn">get</span>(<span class="str">"Ada"</span>);              <span class="com">// 36</span>
ages.<span class="fn">containsKey</span>(<span class="str">"Bob"</span>);      <span class="com">// false</span>
ages.<span class="fn">remove</span>(<span class="str">"Linus"</span>);</div>
<p>Keys are unique — putting a new value with an existing key replaces the old one.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>map.get(k)</code> return when the key is missing?',
              options: [
                { text: '0', code: true },
                { text: 'null', code: true },
                { text: 'throws an exception', code: false },
                { text: '-1', code: true }
              ],
              correct: 1,
              explanation: 'A HashMap returns null for absent keys.'
            },
            {
              type: 'true-false',
              statement: 'HashMap keys may be duplicated.',
              correct: false,
              explanation: 'Keys are unique — a second put with the same key replaces the value.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; m = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">1</span>);
m.<span class="fn">put</span>(<span class="str">"a"</span>, <span class="num">9</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(m.<span class="fn">get</span>(<span class="str">"a"</span>));`,
              options: ['1', '9', '10', 'null'],
              correct: 1,
              explanation: 'The second put overwrites the value for key "a".'
            },
            {
              type: 'fill-blank',
              prompt: 'Add an entry.',
              codeLines: [
                { html: 'm.<span class="fn">_BLANK_</span>(<span class="str">"k"</span>, <span class="num">1</span>);' }
              ],
              tokens: ['put', 'add', 'set', 'insert', 'push'],
              correctAnswer: 'put',
              explanation: 'put(key, value) stores or updates an entry.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each map method.',
              leftLabel: 'Method',
              rightLabel: 'Does',
              pairs: [
                { left: 'put(k,v)', right: 'store/update entry' },
                { left: 'get(k)', right: 'fetch value or null' },
                { left: 'containsKey(k)', right: 'true if key exists' },
                { left: 'remove(k)', right: 'delete entry' }
              ]
            }
          ]
        },
        {
          id: 'java-14-3',
          name: 'HashSet & Iteration',
          icon: '🔢',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Sets and Walking Collections',
              content: `<p>A <code>HashSet</code> stores unique elements with fast contains-checks.</p>
<div class="code-block"><span class="ty">Set</span>&lt;<span class="ty">String</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
seen.<span class="fn">add</span>(<span class="str">"a"</span>);
seen.<span class="fn">add</span>(<span class="str">"a"</span>);        <span class="com">// no effect — set already has it</span>
seen.<span class="fn">contains</span>(<span class="str">"a"</span>);  <span class="com">// true</span>
seen.<span class="fn">size</span>();           <span class="com">// 1</span></div>
<p>Iterate any Collection with for-each:</p>
<div class="code-block"><span class="kw">for</span> (<span class="ty">String</span> s : seen) { <span class="ty">System</span>.out.<span class="fn">println</span>(s); }</div>
<p>Iterate a Map via <code>entrySet()</code>: each entry gives you a key and a value.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does a Set guarantee about its elements?',
              options: [
                { text: 'They are sorted.', code: false },
                { text: 'They are unique.', code: false },
                { text: 'They are indexed.', code: false },
                { text: 'They are immutable.', code: false }
              ],
              correct: 1,
              explanation: 'A set holds at most one copy of each element.'
            },
            {
              type: 'true-false',
              statement: 'A HashSet preserves insertion order.',
              correct: false,
              explanation: 'HashSet&apos;s order is unspecified. Use LinkedHashSet for insertion order.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; s = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
s.<span class="fn">add</span>(<span class="num">1</span>); s.<span class="fn">add</span>(<span class="num">1</span>); s.<span class="fn">add</span>(<span class="num">2</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(s.<span class="fn">size</span>());`,
              options: ['1', '2', '3', '4'],
              correct: 1,
              explanation: 'Two unique values (1 and 2), so size is 2.'
            },
            {
              type: 'fill-blank',
              prompt: 'Iterate keys and values of a map.',
              codeLines: [
                { html: '<span class="kw">for</span> (<span class="ty">Map</span>.<span class="ty">Entry</span>&lt;<span class="ty">String</span>, <span class="ty">Integer</span>&gt; e : map.<span class="fn">_BLANK_</span>()) { ... }' }
              ],
              tokens: ['entrySet', 'entries', 'pairs', 'items', 'keys'],
              correctAnswer: 'entrySet',
              explanation: 'entrySet() returns a Set&lt;Map.Entry&gt; you can iterate.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the collection to its property.',
              leftLabel: 'Type',
              rightLabel: 'Property',
              pairs: [
                { left: 'List', right: 'ordered, allows duplicates' },
                { left: 'Set', right: 'unique elements' },
                { left: 'Map', right: 'key → value lookup' },
                { left: 'Queue', right: 'first-in, first-out' }
              ]
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 15 — Generics
    // =====================================================================
    {
      id: 'java-unit-15',
      name: 'Unit 15 · Generics',
      description: 'Type-safe containers and methods.',
      lessons: [
        {
          id: 'java-15-1',
          name: 'Generic Classes & Methods',
          icon: '🧬',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Type Parameters',
              content: `<p><strong>Generics</strong> let you write code that works for many types while remaining type-safe.</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Box</span>&lt;<span class="ty">T</span>&gt; {
  <span class="kw">private</span> <span class="ty">T</span> value;
  <span class="kw">public void</span> <span class="fn">set</span>(<span class="ty">T</span> v) { <span class="kw">this</span>.value = v; }
  <span class="kw">public</span> <span class="ty">T</span> <span class="fn">get</span>() { <span class="kw">return</span> value; }
}

<span class="ty">Box</span>&lt;<span class="ty">String</span>&gt; b = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
b.<span class="fn">set</span>(<span class="str">"hi"</span>);
<span class="ty">String</span> s = b.<span class="fn">get</span>();   <span class="com">// no cast needed!</span></div>
<p>You can also write a generic <strong>method</strong>:</p>
<div class="code-block"><span class="kw">public static</span> &lt;<span class="ty">T</span>&gt; <span class="ty">T</span> <span class="fn">first</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; xs) { <span class="kw">return</span> xs.<span class="fn">get</span>(<span class="num">0</span>); }</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does <code>&lt;T&gt;</code> mean?',
              options: [
                { text: 'The literal type T.', code: false },
                { text: 'A type parameter — a placeholder.', code: false },
                { text: 'A keyword.', code: false },
                { text: 'A primitive type.', code: false }
              ],
              correct: 1,
              explanation: 'T is a placeholder filled in when the class/method is used.'
            },
            {
              type: 'true-false',
              statement: 'Generics give you compile-time type safety.',
              correct: true,
              explanation: 'The compiler checks generic uses; no runtime casts are needed.'
            },
            {
              type: 'fill-blank',
              prompt: 'Make Box hold an Integer.',
              codeLines: [
                { html: '<span class="ty">Box</span>_BLANK_ b = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();' }
              ],
              tokens: ['<Integer>', '(Integer)', '[Integer]', '{Integer}', '<Int>'],
              correctAnswer: '<Integer>',
              explanation: 'Use angle brackets with the concrete type argument.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Box</span>&lt;<span class="ty">String</span>&gt; b = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
b.<span class="fn">set</span>(<span class="str">"hi"</span>);
<span class="ty">System</span>.out.<span class="fn">println</span>(b.<span class="fn">get</span>());`,
              options: ['null', 'hi', 'String', 'error'],
              correct: 1,
              explanation: 'The Box stores then returns "hi".'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a generic method.',
              lines: [
                '<span class="kw">public static</span> &lt;<span class="ty">T</span>&gt; <span class="ty">T</span> <span class="fn">first</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; xs) {',
                '  <span class="kw">return</span> xs.<span class="fn">get</span>(<span class="num">0</span>);',
                '}'
              ],
              correctOrder: [0, 1, 2]
            }
          ]
        },
        {
          id: 'java-15-2',
          name: 'Bounds & Wildcards',
          icon: '🚪',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Restricting Type Parameters',
              content: `<p>You can restrict what a type parameter must be with <strong>bounded types</strong>:</p>
<div class="code-block"><span class="kw">public static</span> &lt;<span class="ty">T</span> <span class="kw">extends</span> <span class="ty">Number</span>&gt; <span class="ty">double</span> <span class="fn">sum</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; xs) {
  <span class="ty">double</span> t = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">T</span> x : xs) t += x.<span class="fn">doubleValue</span>();
  <span class="kw">return</span> t;
}</div>
<p><strong>Wildcards</strong>:</p>
<ul>
<li><code>List&lt;? extends Number&gt;</code> — a list of Number or some subtype (read-only kind of).</li>
<li><code>List&lt;? super Integer&gt;</code> — a list of Integer or some supertype (write-friendly).</li>
</ul>
<p>Mnemonic: <strong>PECS</strong> — Producer Extends, Consumer Super.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which wildcard would you use to ACCEPT a list to read numbers from?',
              options: [
                { text: 'List&lt;? extends Number&gt;', code: true },
                { text: 'List&lt;? super Number&gt;', code: true },
                { text: 'List&lt;Object&gt;', code: true },
                { text: 'List&lt;Number[]&gt;', code: true }
              ],
              correct: 0,
              explanation: 'Producer Extends — for reading, use ? extends Number.'
            },
            {
              type: 'true-false',
              statement: 'PECS stands for Producer Extends, Consumer Super.',
              correct: true,
              explanation: 'Producers (you read from them) use extends; consumers (you write to them) use super.'
            },
            {
              type: 'fill-blank',
              prompt: 'Restrict T to be a Number or subclass.',
              codeLines: [
                { html: '&lt;<span class="ty">T</span> _BLANK_ <span class="ty">Number</span>&gt;' }
              ],
              tokens: ['extends', 'super', 'implements', '?', 'is'],
              correctAnswer: 'extends',
              explanation: 'In bounds, "extends" means "must be (or extend) this type".'
            },
            {
              type: 'match-pairs',
              prompt: 'Match wildcard to purpose.',
              leftLabel: 'Wildcard',
              rightLabel: 'Use',
              pairs: [
                { left: '? extends Number', right: 'read numbers from a list' },
                { left: '? super Integer', right: 'write Integers into a list' },
                { left: '?', right: 'unknown type (read Object only)' },
                { left: 'T extends Comparable<T>', right: 'compare elements of T' }
              ]
            },
            {
              type: 'output-predict',
              prompt: 'Will this compile?',
              code: `<span class="ty">List</span>&lt;? <span class="kw">extends</span> <span class="ty">Number</span>&gt; xs = ...;
xs.<span class="fn">add</span>(<span class="num">1</span>);`,
              options: ['yes', 'compile error', 'runtime error', 'works only for Integer'],
              correct: 1,
              explanation: 'You can&apos;t add to a ? extends list (except null) — the type is unknown.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 16 — Lambdas & Streams
    // =====================================================================
    {
      id: 'java-unit-16',
      name: 'Unit 16 · Lambdas & Streams',
      description: 'Functional programming, modern style.',
      lessons: [
        {
          id: 'java-16-1',
          name: 'Lambdas & Functional Interfaces',
          icon: 'λ',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Code as Data',
              content: `<p>A <strong>lambda</strong> is a tiny anonymous function:</p>
<div class="code-block"><span class="ty">Runnable</span> r = () -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"hi"</span>);
<span class="ty">Function</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; sq = x -&gt; x * x;
<span class="ty">BiFunction</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; add = (a, b) -&gt; a + b;</div>
<p>A <strong>functional interface</strong> is any interface with exactly one abstract method — lambdas implement these. Common ones:</p>
<ul>
<li><code>Predicate&lt;T&gt;</code> — <code>boolean test(T)</code></li>
<li><code>Function&lt;T,R&gt;</code> — <code>R apply(T)</code></li>
<li><code>Consumer&lt;T&gt;</code> — <code>void accept(T)</code></li>
<li><code>Supplier&lt;T&gt;</code> — <code>T get()</code></li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which interface takes a T and returns a boolean?',
              options: [
                { text: 'Function&lt;T,Boolean&gt;', code: true },
                { text: 'Predicate&lt;T&gt;', code: true },
                { text: 'Supplier&lt;Boolean&gt;', code: true },
                { text: 'Consumer&lt;T&gt;', code: true }
              ],
              correct: 1,
              explanation: 'Predicate&lt;T&gt; has boolean test(T).'
            },
            {
              type: 'true-false',
              statement: 'A functional interface has exactly one abstract method.',
              correct: true,
              explanation: 'That single-method shape is what lambdas implement.'
            },
            {
              type: 'fill-blank',
              prompt: 'A lambda that squares its input.',
              codeLines: [
                { html: '<span class="ty">Function</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; sq = x _BLANK_ x * x;' }
              ],
              tokens: ['->', '=>', ':', '=', '~>'],
              correctAnswer: '->',
              explanation: 'Java lambdas use the -&gt; arrow.'
            },
            {
              type: 'output-predict',
              prompt: 'What prints?',
              code: `<span class="ty">Function</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; f = x -&gt; x + <span class="num">1</span>;
<span class="ty">System</span>.out.<span class="fn">println</span>(f.<span class="fn">apply</span>(<span class="num">4</span>));`,
              options: ['4', '5', '41', 'error'],
              correct: 1,
              explanation: 'f(4) = 4 + 1 = 5.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each functional interface.',
              leftLabel: 'Interface',
              rightLabel: 'Shape',
              pairs: [
                { left: 'Predicate<T>', right: 'T → boolean' },
                { left: 'Function<T,R>', right: 'T → R' },
                { left: 'Consumer<T>', right: 'T → void' },
                { left: 'Supplier<T>', right: '() → T' }
              ]
            }
          ]
        },
        {
          id: 'java-16-2',
          name: 'Streams Pipeline',
          icon: '🌊',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Filter, Map, Collect',
              content: `<p>A <strong>stream</strong> is a pipeline of operations over a sequence of elements.</p>
<div class="code-block"><span class="kw">import</span> java.util.stream.<span class="ty">Collectors</span>;

<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; nums = <span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>);
<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; squaresOfEvens = nums.<span class="fn">stream</span>()
  .<span class="fn">filter</span>(n -&gt; n % <span class="num">2</span> == <span class="num">0</span>)
  .<span class="fn">map</span>(n -&gt; n * n)
  .<span class="fn">collect</span>(<span class="ty">Collectors</span>.<span class="fn">toList</span>());     <span class="com">// [4, 16]</span></div>
<p>Common stages:</p>
<ul>
<li><code>filter</code> — keep matching elements</li>
<li><code>map</code> — transform each element</li>
<li><code>reduce</code> — combine into a single value</li>
<li><code>count</code>, <code>collect</code>, <code>forEach</code> — terminal operations</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which stream stage transforms each element?',
              options: [
                { text: 'filter', code: true },
                { text: 'map', code: true },
                { text: 'reduce', code: true },
                { text: 'count', code: true }
              ],
              correct: 1,
              explanation: 'map applies a function to each element.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this produce?',
              code: `<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>).<span class="fn">stream</span>()
  .<span class="fn">filter</span>(n -&gt; n % <span class="num">2</span> == <span class="num">0</span>)
  .<span class="fn">count</span>();`,
              options: ['0', '2', '4', '6'],
              correct: 1,
              explanation: 'Two even numbers (2 and 4), so count is 2.'
            },
            {
              type: 'true-false',
              statement: 'A stream consumes its source — you can&apos;t reuse a stream after a terminal op.',
              correct: true,
              explanation: 'Once you call a terminal op, the stream is closed.'
            },
            {
              type: 'fill-blank',
              prompt: 'Keep only positive numbers.',
              codeLines: [
                { html: 'list.<span class="fn">stream</span>().<span class="fn">_BLANK_</span>(n -&gt; n &gt; <span class="num">0</span>)' }
              ],
              tokens: ['filter', 'map', 'reduce', 'select', 'where'],
              correctAnswer: 'filter',
              explanation: 'filter keeps elements that satisfy a predicate.'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a working stream that sums squares of evens.',
              lines: [
                'nums.<span class="fn">stream</span>()',
                '  .<span class="fn">filter</span>(n -&gt; n % <span class="num">2</span> == <span class="num">0</span>)',
                '  .<span class="fn">mapToInt</span>(n -&gt; n * n)',
                '  .<span class="fn">sum</span>();'
              ],
              correctOrder: [0, 1, 2, 3]
            },
            {
              type: 'type-answer',
              prompt: 'What does <code>map</code> on a stream do?',
              code: '',
              accept: ['transform', 'transforms', 'transform each element', 'apply function', 'maps'],
              explanation: 'map applies a function to each element to produce a new element.'
            }
          ]
        }
      ]
    },
    // =====================================================================
    // UNIT 17 — File I/O
    // =====================================================================
    {
      id: 'java-unit-17',
      name: 'Unit 17 · File I/O',
      description: 'Read and write files safely.',
      lessons: [
        {
          id: 'java-17-1',
          name: 'Files & Paths',
          icon: '📁',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Reading and Writing the Easy Way',
              content: `<p>The <code>java.nio.file.Files</code> class provides high-level helpers.</p>
<div class="code-block"><span class="kw">import</span> java.nio.file.<span class="ty">Files</span>;
<span class="kw">import</span> java.nio.file.<span class="ty">Path</span>;

<span class="ty">Path</span> p = <span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"hello.txt"</span>);
<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; lines = <span class="ty">Files</span>.<span class="fn">readAllLines</span>(p);
<span class="ty">Files</span>.<span class="fn">write</span>(p, <span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"line 1"</span>, <span class="str">"line 2"</span>));</div>
<p>Both methods throw <code>IOException</code> (checked!), so you must declare or catch.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which method reads every line of a file into a list?',
              options: [
                { text: 'Files.readAll(p)', code: true },
                { text: 'Files.readAllLines(p)', code: true },
                { text: 'Files.lines(p).list()', code: true },
                { text: 'Files.load(p)', code: true }
              ],
              correct: 1,
              explanation: 'Files.readAllLines(Path) returns a List<String>.'
            },
            {
              type: 'true-false',
              statement: '<code>Files.readAllLines</code> can throw <code>IOException</code>.',
              correct: true,
              explanation: 'It is a checked exception — you must handle or declare it.'
            },
            {
              type: 'fill-blank',
              prompt: 'Build a Path object.',
              codeLines: [
                { html: '<span class="ty">Path</span> p = <span class="ty">Path</span>.<span class="fn">_BLANK_</span>(<span class="str">"data.txt"</span>);' }
              ],
              tokens: ['of', 'from', 'new', 'create', 'open'],
              correctAnswer: 'of',
              explanation: 'Path.of("...") creates a Path from a string.'
            },
            {
              type: 'output-predict',
              prompt: 'What does this print, given hello.txt contains "Hi\\nBye"?',
              code: `<span class="ty">List</span>&lt;<span class="ty">String</span>&gt; lines = <span class="ty">Files</span>.<span class="fn">readAllLines</span>(<span class="ty">Path</span>.<span class="fn">of</span>(<span class="str">"hello.txt"</span>));
<span class="ty">System</span>.out.<span class="fn">println</span>(lines.<span class="fn">size</span>());`,
              options: ['1', '2', '3', 'error'],
              correct: 1,
              explanation: 'Two lines, so the list size is 2.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each utility.',
              leftLabel: 'Call',
              rightLabel: 'Does',
              pairs: [
                { left: 'Files.readAllLines', right: 'read entire file into list' },
                { left: 'Files.write', right: 'write lines to file' },
                { left: 'Path.of', right: 'build a Path from string' },
                { left: 'Files.exists', right: 'check if path exists' }
              ]
            }
          ]
        },
        {
          id: 'java-17-2',
          name: 'try-with-resources',
          icon: '🧹',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Streams that Close Themselves',
              content: `<p>Buffered I/O streams must be CLOSED. Use <strong>try-with-resources</strong> — Java closes them automatically:</p>
<div class="code-block"><span class="kw">try</span> (<span class="ty">BufferedReader</span> br = <span class="ty">Files</span>.<span class="fn">newBufferedReader</span>(p)) {
  <span class="ty">String</span> line;
  <span class="kw">while</span> ((line = br.<span class="fn">readLine</span>()) != <span class="kw">null</span>) {
    <span class="ty">System</span>.out.<span class="fn">println</span>(line);
  }
}</div>
<p>Any resource that implements <code>AutoCloseable</code> works. You can declare multiple, separated by semicolons.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the benefit of try-with-resources?',
              options: [
                { text: 'It silences exceptions.', code: false },
                { text: 'It automatically closes resources.', code: false },
                { text: 'It runs faster.', code: false },
                { text: 'It catches all errors.', code: false }
              ],
              correct: 1,
              explanation: 'Java calls close() automatically — no manual cleanup needed.'
            },
            {
              type: 'true-false',
              statement: 'A resource used in try-with-resources must implement <code>AutoCloseable</code>.',
              correct: true,
              explanation: 'That interface declares close(); Java calls it for you.'
            },
            {
              type: 'fill-blank',
              prompt: 'Open a BufferedReader the safe way.',
              codeLines: [
                { html: '<span class="kw">_BLANK_</span> (<span class="ty">BufferedReader</span> br = <span class="ty">Files</span>.<span class="fn">newBufferedReader</span>(p)) { ... }' }
              ],
              tokens: ['try', 'with', 'using', 'do', 'open'],
              correctAnswer: 'try',
              explanation: 'try-with-resources begins with try ( ... ).'
            },
            {
              type: 'reorder-code',
              prompt: 'Reorder into a try-with-resources that prints each line.',
              lines: [
                '<span class="kw">try</span> (<span class="ty">BufferedReader</span> br = <span class="ty">Files</span>.<span class="fn">newBufferedReader</span>(p)) {',
                '  <span class="ty">String</span> line;',
                '  <span class="kw">while</span> ((line = br.<span class="fn">readLine</span>()) != <span class="kw">null</span>) {',
                '    <span class="ty">System</span>.out.<span class="fn">println</span>(line);',
                '  }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5]
            },
            {
              type: 'output-predict',
              prompt: 'When does <code>br.close()</code> get called here?',
              code: `<span class="kw">try</span> (<span class="ty">BufferedReader</span> br = <span class="ty">Files</span>.<span class="fn">newBufferedReader</span>(p)) {
  read();
}`,
              options: ['Never', 'Only on success', 'Only on exception', 'Always (success or exception)'],
              correct: 3,
              explanation: 'try-with-resources closes the resource whether or not an exception is thrown.'
            },
            {
              type: 'type-answer',
              prompt: 'Which interface must a resource implement to use try-with-resources?',
              code: '',
              accept: ['AutoCloseable', 'autocloseable', 'Closeable'],
              explanation: 'AutoCloseable (Closeable is a subtype for I/O).'
            }
          ]
        }
      ]
    }
  ]
});

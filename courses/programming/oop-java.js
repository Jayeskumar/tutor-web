PUSH({
  id: 'oop-java',
  name: 'OOP in Java',
  icon: '🧬',
  color: '#795548',
  description: 'Object-Oriented Programming in Java — classes, inheritance, polymorphism, interfaces, SOLID.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'oop-u1', name: 'Unit 1 · What is OOP?', description: 'Why we model with objects',
      lessons: [
        {
          id: 'oop-u1-l1', name: 'OOP vs procedural', icon: '🧬', xp: 15,
          challenges: [
            { type: 'concept', title: 'Objects = state + behavior', content: `<p>In <strong>procedural</strong> programming, you have <em>data</em> and <em>functions that act on data</em> — they\'re separate.</p>
<p>In <strong>OOP</strong>, you bundle them together: an <strong>object</strong> has data (fields) AND the operations on that data (methods).</p>
<div class="code-block"><span class="com">// Procedural</span>
<span class="ty">double</span>[] balance = {<span class="num">100</span>, <span class="num">250</span>};
<span class="kw">void</span> <span class="fn">deposit</span>(<span class="ty">double</span>[] arr, <span class="ty">int</span> i, <span class="ty">double</span> amt) {
  arr[i] += amt;
}

<span class="com">// OOP — same idea, but the data carries its own behavior</span>
<span class="kw">class</span> <span class="ty">Account</span> {
  <span class="ty">double</span> balance;
  <span class="kw">void</span> <span class="fn">deposit</span>(<span class="ty">double</span> amt) { balance += amt; }
}</div>` },
            { type: 'multiple-choice', prompt: 'Which is the BEST description of an object?',
              options: [{text:'A function that returns data', code:false},{text:'A bundle of data (fields) + behavior (methods)', code:false},{text:'A primitive type', code:false},{text:'A loop construct', code:false}],
              correct: 1, explanation: 'State + behavior bundled together.' },
            { type: 'true-false', statement: 'OOP\'s core idea is making data and the operations on that data live together.', correct: true, explanation: 'Encapsulation in action.' },
            { type: 'match-pairs', prompt: 'Match concept → meaning.', leftLabel: 'Concept', rightLabel: 'Meaning',
              pairs: [{left:'Class', right:'A blueprint'},{left:'Object', right:'An instance of a class'},{left:'Field', right:'Data the object holds'},{left:'Method', right:'Behavior of the object'}] }
          ]
        },
        {
          id: 'oop-u1-l2', name: 'The 4 pillars', icon: '🏛️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Encapsulation · Inheritance · Polymorphism · Abstraction', content: `<div class="code-block"><span class="com">Encapsulation</span> — hide internal state; expose behavior
                  private fields + public methods

<span class="com">Inheritance</span>   — reuse code through "is-a" relationships
                  class B extends A { ... }

<span class="com">Polymorphism</span> — same method name behaves differently
                  per object type (overriding) or per signature (overloading)

<span class="com">Abstraction</span>  — show WHAT, hide HOW
                  interfaces, abstract classes</div>` },
            { type: 'multiple-choice', prompt: 'Which pillar lets a <code>Dog</code> reuse code from <code>Animal</code>?',
              options: [{text:'Encapsulation', code:false},{text:'Inheritance', code:false},{text:'Polymorphism', code:false},{text:'Abstraction', code:false}],
              correct: 1, explanation: 'Inheritance = "is-a" reuse.' },
            { type: 'multiple-choice', prompt: 'A class hiding its internal balance behind <code>deposit()</code> / <code>withdraw()</code> methods is:',
              options: [{text:'Inheritance', code:false},{text:'Encapsulation', code:false},{text:'Polymorphism', code:false},{text:'Composition', code:false}],
              correct: 1, explanation: 'Private state + public behavior — encapsulation.' },
            { type: 'match-pairs', prompt: 'Pillar → keyword you\'d see in code.', leftLabel: 'Pillar', rightLabel: 'Keyword',
              pairs: [{left:'Encapsulation', right:'private'},{left:'Inheritance', right:'extends'},{left:'Abstraction', right:'abstract'},{left:'Polymorphism', right:'@Override'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Classes & Objects ============== */
    {
      id: 'oop-u2', name: 'Unit 2 · Classes & Objects', description: 'Blueprints and instances',
      lessons: [
        {
          id: 'oop-u2-l1', name: 'Defining a class', icon: '🧱', xp: 20,
          challenges: [
            { type: 'concept', title: 'A class is a blueprint', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Dog</span> {
  <span class="com">// fields (instance variables)</span>
  <span class="kw">private</span> <span class="ty">String</span> name;
  <span class="kw">private</span> <span class="ty">int</span> age;

  <span class="com">// constructor</span>
  <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {
    <span class="kw">this</span>.name = name;
    <span class="kw">this</span>.age = age;
  }

  <span class="com">// method</span>
  <span class="kw">public void</span> <span class="fn">bark</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" says Woof!"</span>);
  }
}

<span class="com">// Use it</span>
<span class="ty">Dog</span> rex = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>, <span class="num">3</span>);
rex.<span class="fn">bark</span>();   <span class="com">// "Rex says Woof!"</span></div>` },
            { type: 'multiple-choice', prompt: 'What does <code>new Dog(...)</code> do?',
              options: [{text:'Calls a method', code:false},{text:'Allocates memory + runs the constructor + returns a reference', code:false},{text:'Defines a class', code:false},{text:'Loads the class', code:false}],
              correct: 1, explanation: '<code>new</code> = allocate → init → return reference.' },
            { type: 'multiple-choice', prompt: 'A class can have:',
              options: [{text:'Fields only', code:false},{text:'Methods only', code:false},{text:'Fields, methods, constructors, nested classes, static members', code:false},{text:'Just a name', code:false}],
              correct: 2, explanation: 'Classes hold many member types.' },
            { type: 'true-false', statement: 'Each <code>new Dog(...)</code> creates a separate object with its own field values.', correct: true, explanation: 'Instances are independent.' },
            { type: 'fill-blank', prompt: 'Create a new Dog named "Rex" age 3:',
              codeLines: [{html:'<span class="ty">Dog</span> rex = <span class="fn">_BLANK_</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>, <span class="num">3</span>);'}],
              tokens: ['new','create','make','build'], correctAnswer: 'new', explanation: 'Java instantiates with the <code>new</code> keyword.' }
          ]
        },
        {
          id: 'oop-u2-l2', name: 'Instance vs static', icon: '⚖️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Per-object vs per-class', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Counter</span> {
  <span class="kw">private static int</span> total = <span class="num">0</span>;    <span class="com">// shared across all objects</span>
  <span class="kw">private int</span> id;                       <span class="com">// per-object</span>

  <span class="kw">public</span> <span class="fn">Counter</span>() {
    total++;
    id = total;
  }

  <span class="kw">public static int</span> <span class="fn">getTotal</span>() { <span class="kw">return</span> total; }
  <span class="kw">public int</span> <span class="fn">getId</span>() { <span class="kw">return</span> id; }
}

<span class="kw">new</span> <span class="ty">Counter</span>();
<span class="kw">new</span> <span class="ty">Counter</span>();
<span class="ty">Counter</span>.<span class="fn">getTotal</span>();   <span class="com">// 2 — called on the class itself</span></div>` },
            { type: 'multiple-choice', prompt: 'A <code>static</code> field belongs to:',
              options: [{text:'Each object instance', code:false},{text:'The class itself — shared across all instances', code:false},{text:'A specific method', code:false},{text:'The JVM startup', code:false}],
              correct: 1, explanation: 'Static = class-level. One copy, shared.' },
            { type: 'multiple-choice', prompt: 'You call <code>Math.sqrt(9.0)</code> without creating a Math object. Because:',
              options: [{text:'Math is a primitive', code:false},{text:'sqrt is a static method', code:false},{text:'JVM magic', code:false},{text:'All methods are static', code:false}],
              correct: 1, explanation: 'Static methods are called on the CLASS, not on an instance.' },
            { type: 'true-false', statement: 'A static method cannot access instance fields directly (because there\'s no <code>this</code>).', correct: true, explanation: 'No instance context = no this = can\'t reach instance state.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Fields, Methods, this ============== */
    {
      id: 'oop-u3', name: 'Unit 3 · Fields, Methods, this', description: 'Anatomy of a class',
      lessons: [
        {
          id: 'oop-u3-l1', name: 'this keyword', icon: '👉', xp: 20,
          challenges: [
            { type: 'concept', title: 'this = "the current object"', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Box</span> {
  <span class="kw">private double</span> width, height;

  <span class="kw">public</span> <span class="fn">Box</span>(<span class="ty">double</span> width, <span class="ty">double</span> height) {
    <span class="kw">this</span>.width = width;       <span class="com">// disambiguate field vs parameter</span>
    <span class="kw">this</span>.height = height;
  }

  <span class="kw">public</span> <span class="ty">Box</span> <span class="fn">scale</span>(<span class="ty">double</span> factor) {
    width *= factor;
    height *= factor;
    <span class="kw">return this</span>;               <span class="com">// for method chaining</span>
  }
}

<span class="com">// Chained calls</span>
<span class="kw">new</span> <span class="ty">Box</span>(<span class="num">10</span>, <span class="num">5</span>).<span class="fn">scale</span>(<span class="num">2</span>).<span class="fn">scale</span>(<span class="num">3</span>);</div>` },
            { type: 'multiple-choice', prompt: '<code>this.x = x;</code> means:',
              options: [{text:'Set parameter x to field x', code:false},{text:'Set the field x of the current object to the value of parameter x', code:false},{text:'Compare x to x', code:false},{text:'Make x static', code:false}],
              correct: 1, explanation: '<code>this.x</code> is the field; <code>x</code> alone refers to the closest parameter.' },
            { type: 'multiple-choice', prompt: 'Returning <code>this</code> from a method enables:',
              options: [{text:'Static methods', code:false},{text:'Method chaining: obj.a().b().c()', code:false},{text:'Inheritance', code:false},{text:'Faster code', code:false}],
              correct: 1, explanation: 'StringBuilder uses this pattern: <code>sb.append("a").append("b").toString()</code>.' },
            { type: 'true-false', statement: 'Inside a static method, <code>this</code> is available.', correct: false, explanation: 'No — static methods have no current instance.' }
          ]
        },
        {
          id: 'oop-u3-l2', name: 'Method overloading', icon: '🔀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Same name, different signature', content: `<p>You can have multiple methods with the same name as long as their <strong>parameter lists</strong> differ. The compiler picks the right one based on the call.</p>
<div class="code-block"><span class="kw">public class</span> <span class="ty">Calculator</span> {
  <span class="kw">public int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b) { <span class="kw">return</span> a + b; }
  <span class="kw">public double</span> <span class="fn">add</span>(<span class="ty">double</span> a, <span class="ty">double</span> b) { <span class="kw">return</span> a + b; }
  <span class="kw">public int</span> <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b, <span class="ty">int</span> c) { <span class="kw">return</span> a + b + c; }
  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">add</span>(<span class="ty">String</span> a, <span class="ty">String</span> b) { <span class="kw">return</span> a + b; }
}

calc.<span class="fn">add</span>(<span class="num">1</span>, <span class="num">2</span>);          <span class="com">// int version</span>
calc.<span class="fn">add</span>(<span class="num">1.5</span>, <span class="num">2.5</span>);      <span class="com">// double version</span>
calc.<span class="fn">add</span>(<span class="str">"Hi"</span>, <span class="str">"!"</span>);    <span class="com">// String version</span></div>
<p>This is also called <strong>compile-time polymorphism</strong> — the choice happens at compile time.</p>` },
            { type: 'multiple-choice', prompt: 'Overloading requires methods to differ in:',
              options: [{text:'Return type', code:false},{text:'Number, types, or order of PARAMETERS', code:false},{text:'Just naming', code:false},{text:'Access modifier', code:false}],
              correct: 1, explanation: 'Differ in parameter list. Return type alone is NOT enough — won\'t compile.' },
            { type: 'multiple-choice', prompt: 'Constructor overloading?',
              options: [{text:'Not allowed', code:false},{text:'Same rules — multiple constructors with different params', code:false},{text:'Only one constructor per class', code:false},{text:'Requires inheritance', code:false}],
              correct: 1, explanation: 'Multiple constructors with different signatures is common. Use <code>this(...)</code> to chain.' },
            { type: 'true-false', statement: 'Overloading is resolved at compile time; overriding is resolved at runtime.', correct: true, explanation: 'Overloading → compile-time. Overriding → runtime (dynamic dispatch).' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Constructors ============== */
    {
      id: 'oop-u4', name: 'Unit 4 · Constructors', description: 'How objects come to life',
      lessons: [
        {
          id: 'oop-u4-l1', name: 'Constructors deep dive', icon: '🔨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Default, parameterized, chained', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Point</span> {
  <span class="kw">private double</span> x, y;

  <span class="com">// 1. No-arg (default)</span>
  <span class="kw">public</span> <span class="fn">Point</span>() {
    <span class="kw">this</span>(<span class="num">0</span>, <span class="num">0</span>);              <span class="com">// chain to the other constructor</span>
  }

  <span class="com">// 2. Parameterized</span>
  <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">double</span> x, <span class="ty">double</span> y) {
    <span class="kw">this</span>.x = x;
    <span class="kw">this</span>.y = y;
  }

  <span class="com">// 3. Copy constructor</span>
  <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">Point</span> other) {
    <span class="kw">this</span>(other.x, other.y);
  }
}</div>
<p>If you don\'t write ANY constructor, Java provides an implicit no-arg one. If you write any constructor at all, the default goes away.</p>` },
            { type: 'multiple-choice', prompt: 'You write only <code>public Foo(int x) {...}</code>. Can you call <code>new Foo()</code>?',
              options: [{text:'Yes — Java still provides a default', code:false},{text:'No — once you define ANY constructor, the default no-arg is gone', code:false},{text:'Only if you mark it @Default', code:false},{text:'Only at runtime', code:false}],
              correct: 1, explanation: 'Default constructor is added only if you write zero constructors.' },
            { type: 'multiple-choice', prompt: '<code>this(...)</code> as the first line of a constructor:',
              options: [{text:'References the current object', code:false},{text:'Calls another constructor of the SAME class — for constructor chaining', code:false},{text:'Calls a method', code:false},{text:'Illegal', code:false}],
              correct: 1, explanation: 'Must be the FIRST statement. Used to reduce duplication.' },
            { type: 'true-false', statement: 'Constructors can be <code>private</code> — useful for singletons or factory methods.', correct: true, explanation: 'Private constructor forces controlled instantiation.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Encapsulation ============== */
    {
      id: 'oop-u5', name: 'Unit 5 · Encapsulation', description: 'Hide what, expose how',
      lessons: [
        {
          id: 'oop-u5-l1', name: 'Access modifiers', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'public · protected · package · private', content: `<div class="code-block">                <span class="com">SAME      SAME       SAME-PKG    DIFFERENT</span>
                <span class="com">CLASS     PACKAGE    SUBCLASS    PACKAGE</span>
<span class="kw">private</span>           ✓
(no modifier)     ✓         ✓
<span class="kw">protected</span>         ✓         ✓         ✓
<span class="kw">public</span>            ✓         ✓         ✓           ✓</div>
<p><strong>Default</strong> (no modifier) = "package-private". <strong>Protected</strong> = package + subclasses outside the package.</p>` },
            { type: 'multiple-choice', prompt: 'Most restrictive Java access modifier?',
              options: [{text:'public', code:false},{text:'protected', code:false},{text:'private', code:false},{text:'package (default)', code:false}],
              correct: 2, explanation: 'private = same class only.' },
            { type: 'multiple-choice', prompt: 'Best access modifier for a field that subclasses need to read but external code shouldn\'t?',
              options: [{text:'public', code:false},{text:'protected', code:false},{text:'private', code:false},{text:'package', code:false}],
              correct: 1, explanation: 'protected exposes to subclasses while hiding from unrelated code.' },
            { type: 'true-false', statement: 'For 90% of fields, the right choice is private — with getters/setters if external access is truly needed.', correct: true, explanation: 'Encapsulation by default.' }
          ]
        },
        {
          id: 'oop-u5-l2', name: 'Getters, setters, immutability', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Controlled access — and sometimes no access', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">BankAccount</span> {
  <span class="kw">private double</span> balance;

  <span class="kw">public double</span> <span class="fn">getBalance</span>() { <span class="kw">return</span> balance; }

  <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="ty">double</span> amt) {
    <span class="kw">if</span> (amt &lt;= <span class="num">0</span>) <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"positive only"</span>);
    balance += amt;       <span class="com">// invariant maintained</span>
  }
}</div>
<p><strong>Immutable class</strong>: no setters, fields final, no methods that mutate state.</p>
<div class="code-block"><span class="kw">public final class</span> <span class="ty">Point</span> {
  <span class="kw">private final double</span> x, y;
  <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">double</span> x, <span class="ty">double</span> y) { <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y; }
  <span class="kw">public double</span> <span class="fn">x</span>() { <span class="kw">return</span> x; }
  <span class="kw">public double</span> <span class="fn">y</span>() { <span class="kw">return</span> y; }
  <span class="kw">public</span> <span class="ty">Point</span> <span class="fn">translated</span>(<span class="ty">double</span> dx, <span class="ty">double</span> dy) {
    <span class="kw">return new</span> <span class="ty">Point</span>(x + dx, y + dy);   <span class="com">// returns a NEW instance</span>
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'Best reason to make a class immutable?',
              options: [{text:'Smaller binary', code:false},{text:'Thread-safe by default + simpler reasoning + safe to share/cache', code:false},{text:'Faster', code:false},{text:'Required for OOP', code:false}],
              correct: 1, explanation: 'No state changes = no race conditions, no surprises.' },
            { type: 'multiple-choice', prompt: 'A getter that returns a <code>List</code> reference:',
              options: [{text:'Is fine always', code:false},{text:'Breaks encapsulation — callers can mutate the internal list', code:false},{text:'Required for getters', code:false},{text:'Doesn\'t compile', code:false}],
              correct: 1, explanation: 'Return defensive copies or <code>Collections.unmodifiableList(list)</code>.' },
            { type: 'true-false', statement: 'Java records (Java 14+) give you immutable, encapsulated data classes in one line.', correct: true, explanation: '<code>public record Point(double x, double y) {}</code> — auto-generates constructor, accessors, equals, hashCode, toString.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Inheritance ============== */
    {
      id: 'oop-u6', name: 'Unit 6 · Inheritance', description: 'Extending classes',
      lessons: [
        {
          id: 'oop-u6-l1', name: 'extends and super', icon: '🧬', xp: 25,
          challenges: [
            { type: 'concept', title: 'Reusing behavior via parent classes', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Animal</span> {
  <span class="kw">protected</span> <span class="ty">String</span> name;
  <span class="kw">public</span> <span class="fn">Animal</span>(<span class="ty">String</span> name) { <span class="kw">this</span>.name = name; }
  <span class="kw">public void</span> <span class="fn">eat</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" is eating"</span>); }
}

<span class="kw">public class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name) {
    <span class="kw">super</span>(name);                  <span class="com">// must be first line</span>
  }
  <span class="kw">public void</span> <span class="fn">bark</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" barks!"</span>); }
}

<span class="ty">Dog</span> rex = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>);
rex.<span class="fn">eat</span>();    <span class="com">// inherited from Animal</span>
rex.<span class="fn">bark</span>();   <span class="com">// defined on Dog</span></div>
<p>Java has <strong>single inheritance</strong> for classes (only one parent). Multiple inheritance comes via <strong>interfaces</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'What does <code>super(...)</code> do?',
              options: [{text:'Calls a static method', code:false},{text:'Calls the PARENT class constructor (must be first statement)', code:false},{text:'Skips constructor logic', code:false},{text:'Calls the current constructor', code:false}],
              correct: 1, explanation: '<code>super(args)</code> calls the parent constructor. If you omit it, Java inserts <code>super()</code> automatically.' },
            { type: 'multiple-choice', prompt: 'Can a class extend multiple classes in Java?',
              options: [{text:'Yes', code:false},{text:'No — only one direct parent (single inheritance)', code:false},{text:'Up to 3', code:false},{text:'Only via reflection', code:false}],
              correct: 1, explanation: 'Java forbids multiple class inheritance — but allows multiple interface implementation.' },
            { type: 'multiple-choice', prompt: 'A class marked <code>final</code>:',
              options: [{text:'Cannot have methods', code:false},{text:'Cannot be extended (no subclasses allowed)', code:false},{text:'Cannot be instantiated', code:false},{text:'Auto-implements Serializable', code:false}],
              correct: 1, explanation: '<code>final</code> on a class = no subclass. <code>String</code>, <code>Integer</code>, etc. are final.' },
            { type: 'true-false', statement: 'Every class in Java implicitly extends <code>Object</code>.', correct: true, explanation: 'If you don\'t specify, you extend Object — root of all classes.' }
          ]
        },
        {
          id: 'oop-u6-l2', name: 'Composition vs Inheritance', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Prefer composition', content: `<p>"<strong>Composition over inheritance</strong>" is a common piece of advice. Inheritance creates strong coupling; composition lets you swap parts.</p>
<div class="code-block"><span class="com">// BAD: rigid hierarchy</span>
<span class="kw">class</span> <span class="ty">FlyingDuck</span> <span class="kw">extends</span> <span class="ty">Duck</span> { ... }
<span class="kw">class</span> <span class="ty">RubberDuck</span> <span class="kw">extends</span> <span class="ty">Duck</span> {
  <span class="com">// can\'t fly — but parent has fly() — must override to no-op</span>
}

<span class="com">// GOOD: composition</span>
<span class="kw">class</span> <span class="ty">Duck</span> {
  <span class="kw">private</span> <span class="ty">FlyBehavior</span> fly;     <span class="com">// pluggable strategy</span>
  <span class="kw">public</span> <span class="fn">Duck</span>(<span class="ty">FlyBehavior</span> fly) { <span class="kw">this</span>.fly = fly; }
  <span class="kw">public void</span> <span class="fn">performFly</span>() { fly.<span class="fn">fly</span>(); }
}</div>
<p><strong>Rule of thumb</strong>: use inheritance when the child IS-A real specialization. Use composition for "has-a" capabilities.</p>` },
            { type: 'multiple-choice', prompt: '"Square extends Rectangle" is a classic example of:',
              options: [{text:'Good design', code:false},{text:'A Liskov Substitution violation — changing width of a square also changes height', code:false},{text:'Just abstraction', code:false},{text:'A polymorphism win', code:false}],
              correct: 1, explanation: 'Classic LSP violation; use composition or model differently.' },
            { type: 'true-false', statement: 'If a child class overrides every parent method to "do nothing" or "throw" — inheritance was probably wrong.', correct: true, explanation: 'A red flag. Compose instead.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Overriding ============== */
    {
      id: 'oop-u7', name: 'Unit 7 · Overriding & Dynamic Dispatch', description: 'Where polymorphism shines',
      lessons: [
        {
          id: 'oop-u7-l1', name: '@Override and dispatch', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'Same method name, different implementation', content: `<div class="code-block"><span class="kw">class</span> <span class="ty">Animal</span> {
  <span class="kw">public void</span> <span class="fn">speak</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"some sound"</span>); }
}

<span class="kw">class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">speak</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Woof!"</span>); }
}

<span class="kw">class</span> <span class="ty">Cat</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">speak</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Meow!"</span>); }
}

<span class="com">// Polymorphic call</span>
<span class="ty">Animal</span>[] zoo = { <span class="kw">new</span> <span class="ty">Dog</span>(), <span class="kw">new</span> <span class="ty">Cat</span>() };
<span class="kw">for</span> (<span class="ty">Animal</span> a : zoo) a.<span class="fn">speak</span>();
<span class="com">// "Woof!"
// "Meow!"
// JVM picks the right method based on the actual object, not the reference type.</span></div>` },
            { type: 'multiple-choice', prompt: 'What does the <code>@Override</code> annotation do?',
              options: [{text:'Makes a method faster', code:false},{text:'Compiler-enforced check that the method actually overrides a parent method (catches typos)', code:false},{text:'Marks as static', code:false},{text:'Marks as final', code:false}],
              correct: 1, explanation: 'Always use it — catches typos like <code>tostring()</code> instead of <code>toString()</code>.' },
            { type: 'output-predict', prompt: 'Given Animal/Dog above. What prints?',
              code: `<span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Dog</span>();
a.<span class="fn">speak</span>();`,
              options: ['some sound','Woof!','Compile error','Runtime error'], correct: 1, explanation: 'Reference type = Animal, but actual object = Dog → calls Dog.speak(). This is dynamic dispatch.' },
            { type: 'multiple-choice', prompt: 'Overriding rules — the child method must:',
              options: [{text:'Have the same name + same/compatible signature + same or more accessible visibility', code:false},{text:'Have different parameters', code:false},{text:'Be private', code:false},{text:'Be static', code:false}],
              correct: 0, explanation: 'Same signature; cannot reduce visibility (e.g., public → protected).' },
            { type: 'true-false', statement: 'You can override a method to be MORE accessible (e.g., protected → public) but not less.', correct: true, explanation: 'Liskov in action — caller expecting protected gets it; relaxing to public is safe.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Polymorphism ============== */
    {
      id: 'oop-u8', name: 'Unit 8 · Polymorphism Big Picture', description: 'Same call, many behaviors',
      lessons: [
        {
          id: 'oop-u8-l1', name: 'Two kinds of polymorphism', icon: '🎭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Compile-time vs runtime', content: `<div class="code-block"><span class="com">1. COMPILE-TIME POLYMORPHISM — method overloading</span>
   Compiler picks based on argument TYPES.
   calc.add(1, 2)          → add(int, int)
   calc.add(1.5, 2.5)      → add(double, double)

<span class="com">2. RUNTIME POLYMORPHISM — method overriding (dynamic dispatch)</span>
   JVM picks based on the actual OBJECT type at runtime.
   Animal a = new Dog();
   a.speak();              → Dog.speak()</div>
<p>Runtime polymorphism is what enables writing code AGAINST the abstract type (<code>Animal</code>) that works with any concrete subtype.</p>` },
            { type: 'multiple-choice', prompt: 'Method overloading is decided:',
              options: [{text:'At runtime', code:false},{text:'At compile time (static binding)', code:false},{text:'Never', code:false},{text:'Both', code:false}],
              correct: 1, explanation: 'Compiler picks the overload based on argument types it can see.' },
            { type: 'multiple-choice', prompt: 'A method declared <code>final</code>:',
              options: [{text:'Cannot be called', code:false},{text:'Cannot be overridden by subclasses', code:false},{text:'Is automatically static', code:false},{text:'Returns void', code:false}],
              correct: 1, explanation: '<code>final</code> on a method = subclasses can\'t override.' },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `<span class="kw">class</span> <span class="ty">A</span> { <span class="kw">void</span> <span class="fn">m</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"A"</span>); } }
<span class="kw">class</span> <span class="ty">B</span> <span class="kw">extends</span> <span class="ty">A</span> { <span class="kw">void</span> <span class="fn">m</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"B"</span>); } }

<span class="ty">A</span> x = <span class="kw">new</span> <span class="ty">B</span>();
x.<span class="fn">m</span>();`,
              options: ['A','B','Both','Compile error'], correct: 1, explanation: 'Reference type A, actual B → Dynamic dispatch picks B.m().' },
            { type: 'true-false', statement: 'Static methods are NOT polymorphic — they\'re bound at compile time (method hiding, not overriding).', correct: true, explanation: 'A subclass static method "hides" the parent\'s, but the call site uses the reference type.' }
          ]
        },
        {
          id: 'oop-u8-l2', name: 'instanceof and downcasting', icon: '⬇️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Knowing the actual type', content: `<div class="code-block"><span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>);

<span class="kw">if</span> (a <span class="kw">instanceof</span> <span class="ty">Dog</span>) {
  <span class="ty">Dog</span> d = (<span class="ty">Dog</span>) a;       <span class="com">// explicit downcast</span>
  d.<span class="fn">bark</span>();
}

<span class="com">// Java 16+ pattern matching (cleaner)</span>
<span class="kw">if</span> (a <span class="kw">instanceof</span> <span class="ty">Dog</span> d) {     <span class="com">// "d" is auto-typed as Dog</span>
  d.<span class="fn">bark</span>();
}</div>
<p>Heavy use of <code>instanceof</code> often signals you should use polymorphism instead — add a method to the base class and let dispatch handle it.</p>` },
            { type: 'multiple-choice', prompt: 'Forgetting the <code>instanceof</code> check and downcasting blindly causes:',
              options: [{text:'Compile error', code:false},{text:'ClassCastException at runtime', code:false},{text:'No issue', code:false},{text:'NullPointerException', code:false}],
              correct: 1, explanation: '<code>ClassCastException</code> if the object isn\'t actually that type.' },
            { type: 'true-false', statement: 'Lots of <code>instanceof</code> checks usually signal a missing polymorphic method.', correct: true, explanation: 'Replace with virtual method dispatch — cleaner design.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Abstract classes ============== */
    {
      id: 'oop-u9', name: 'Unit 9 · Abstract Classes', description: 'Partially-implemented blueprints',
      lessons: [
        {
          id: 'oop-u9-l1', name: 'abstract keyword', icon: '🏗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Forcing subclasses to fill in the blanks', content: `<div class="code-block"><span class="kw">public abstract class</span> <span class="ty">Shape</span> {
  <span class="kw">protected</span> <span class="ty">String</span> color;
  <span class="kw">public</span> <span class="fn">Shape</span>(<span class="ty">String</span> color) { <span class="kw">this</span>.color = color; }

  <span class="kw">public abstract double</span> <span class="fn">area</span>();           <span class="com">// no body — children MUST implement</span>

  <span class="kw">public void</span> <span class="fn">describe</span>() {                     <span class="com">// concrete method — inherited</span>
    <span class="ty">System</span>.out.<span class="fn">println</span>(color + <span class="str">" shape with area "</span> + <span class="fn">area</span>());
  }
}

<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">extends</span> <span class="ty">Shape</span> {
  <span class="kw">private double</span> radius;
  <span class="kw">public</span> <span class="fn">Circle</span>(<span class="ty">String</span> c, <span class="ty">double</span> r) { <span class="kw">super</span>(c); radius = r; }
  @<span class="ty">Override</span>
  <span class="kw">public double</span> <span class="fn">area</span>() { <span class="kw">return</span> <span class="ty">Math</span>.PI * radius * radius; }
}

<span class="kw">new</span> <span class="ty">Shape</span>(<span class="str">"red"</span>);   <span class="com">// ❌ compile error — abstract classes can\'t be instantiated</span></div>` },
            { type: 'multiple-choice', prompt: 'Abstract class vs interface — which CAN have:',
              options: [{text:'Instance fields, constructors, mixed abstract + concrete methods', code:false},{text:'Only abstract methods', code:false},{text:'Multiple inheritance', code:false},{text:'No methods', code:false}],
              correct: 0, explanation: 'Abstract classes can have state and concrete methods. Interfaces (pre-Java-8) couldn\'t.' },
            { type: 'multiple-choice', prompt: 'Can you instantiate an abstract class directly?',
              options: [{text:'Yes', code:false},{text:'No — only via concrete subclasses (or anonymous subclasses)', code:false},{text:'Only if all methods are concrete', code:false},{text:'Only at runtime', code:false}],
              correct: 1, explanation: 'You can however create anonymous subclasses inline: <code>new Shape("red") { @Override double area() { return 0; } };</code>' },
            { type: 'true-false', statement: 'A class with even one abstract method must itself be marked abstract.', correct: true, explanation: 'Otherwise the compiler complains. Subclasses either implement all abstract methods or stay abstract themselves.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Interfaces ============== */
    {
      id: 'oop-u10', name: 'Unit 10 · Interfaces', description: 'Contracts, not classes',
      lessons: [
        {
          id: 'oop-u10-l1', name: 'interface fundamentals', icon: '🤝', xp: 25,
          challenges: [
            { type: 'concept', title: 'A type without implementation', content: `<div class="code-block"><span class="kw">public interface</span> <span class="ty">Drawable</span> {
  <span class="kw">void</span> <span class="fn">draw</span>();                       <span class="com">// implicitly public abstract</span>
}

<span class="kw">public interface</span> <span class="ty">Resizable</span> {
  <span class="kw">void</span> <span class="fn">resize</span>(<span class="ty">double</span> factor);
}

<span class="com">// A class can implement MULTIPLE interfaces (unlike extending classes)</span>
<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">implements</span> <span class="ty">Drawable</span>, <span class="ty">Resizable</span> {
  <span class="kw">private double</span> radius;
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">draw</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Drawing circle"</span>); }
  @<span class="ty">Override</span>
  <span class="kw">public void</span> <span class="fn">resize</span>(<span class="ty">double</span> f) { radius *= f; }
}</div>
<p>Interfaces describe a <strong>capability</strong>. Multiple interfaces = multiple capabilities.</p>` },
            { type: 'multiple-choice', prompt: 'Difference between extends and implements?',
              options: [{text:'No difference', code:false},{text:'extends → inheriting from a class. implements → committing to an interface', code:false},{text:'extends is for fields', code:false},{text:'implements is faster', code:false}],
              correct: 1, explanation: 'A class extends ONE class but implements MANY interfaces.' },
            { type: 'multiple-choice', prompt: 'All methods in a (pre-Java-8) interface are implicitly:',
              options: [{text:'private', code:false},{text:'public abstract', code:false},{text:'static', code:false},{text:'final', code:false}],
              correct: 1, explanation: 'No need to write <code>public abstract</code> — implied.' },
            { type: 'true-false', statement: 'A class can implement multiple interfaces — Java\'s answer to multiple inheritance.', correct: true, explanation: 'Cleaner than multiple class inheritance (avoids the "diamond problem").' }
          ]
        },
        {
          id: 'oop-u10-l2', name: 'default & static methods (Java 8+)', icon: '🆕', xp: 25,
          challenges: [
            { type: 'concept', title: 'Interfaces can have bodies', content: `<div class="code-block"><span class="kw">public interface</span> <span class="ty">Vehicle</span> {
  <span class="com">// abstract — every implementer must provide</span>
  <span class="kw">void</span> <span class="fn">start</span>();

  <span class="com">// default — implementer can override, otherwise inherits this</span>
  <span class="kw">default void</span> <span class="fn">honk</span>() {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"BEEP!"</span>);
  }

  <span class="com">// static — utility method on the interface itself</span>
  <span class="kw">static</span> <span class="ty">Vehicle</span> <span class="fn">stopped</span>() {
    <span class="kw">return new</span> <span class="ty">Vehicle</span>() {
      @<span class="ty">Override</span> <span class="kw">public void</span> <span class="fn">start</span>() {}
    };
  }

  <span class="com">// private (Java 9+) — helper for default methods</span>
  <span class="kw">private void</span> <span class="fn">log</span>(<span class="ty">String</span> msg) {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"[LOG] "</span> + msg);
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'Why did Java 8 add <code>default</code> methods to interfaces?',
              options: [{text:'To replace abstract classes', code:false},{text:'To evolve interfaces without breaking implementers (e.g., adding stream(), forEach() to Collection)', code:false},{text:'Random feature', code:false},{text:'For speed', code:false}],
              correct: 1, explanation: 'Backwards compatibility — old code didn\'t need to be rewritten when new methods were added.' },
            { type: 'multiple-choice', prompt: 'A class implements two interfaces with the SAME default method:',
              options: [{text:'Compile error — you must override and specify', code:false},{text:'Picks first one', code:false},{text:'Random', code:false},{text:'Both run', code:false}],
              correct: 0, explanation: 'Diamond problem at the interface level. Resolve via explicit override: <code>InterfaceA.super.method()</code>.' },
            { type: 'true-false', statement: 'Functional interfaces (single abstract method) can be implemented with lambdas.', correct: true, explanation: 'e.g., <code>Runnable r = () -> System.out.println("hi");</code>' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Inner classes ============== */
    {
      id: 'oop-u11', name: 'Unit 11 · Inner Classes & Lambdas', description: 'Nested types',
      lessons: [
        {
          id: 'oop-u11-l1', name: 'Four kinds of nested class', icon: '📦', xp: 25,
          challenges: [
            { type: 'concept', title: 'Static, inner, local, anonymous', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Outer</span> {
  <span class="kw">private int</span> x = <span class="num">10</span>;

  <span class="com">// 1. Static nested — doesn\'t need an Outer instance</span>
  <span class="kw">public static class</span> <span class="ty">StaticNested</span> {
    <span class="kw">void</span> <span class="fn">go</span>() { <span class="com">/* no access to x */</span> }
  }

  <span class="com">// 2. Inner class — bound to an Outer instance</span>
  <span class="kw">public class</span> <span class="ty">Inner</span> {
    <span class="kw">void</span> <span class="fn">go</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(x); }    <span class="com">// can access outer\'s x</span>
  }

  <span class="kw">void</span> <span class="fn">doStuff</span>() {
    <span class="com">// 3. Local class — defined inside a method</span>
    <span class="kw">class</span> <span class="ty">Local</span> { <span class="kw">void</span> <span class="fn">go</span>() { ... } }

    <span class="com">// 4. Anonymous — instantiate-and-override in one shot</span>
    <span class="ty">Runnable</span> r = <span class="kw">new</span> <span class="ty">Runnable</span>() {
      @<span class="ty">Override</span> <span class="kw">public void</span> <span class="fn">run</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"hi"</span>); }
    };

    <span class="com">// 5. (Bonus) Lambda — when the target is a functional interface</span>
    <span class="ty">Runnable</span> r2 = () -&gt; <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"hi"</span>);
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'Static nested class vs inner class — main difference?',
              options: [{text:'Static nested can exist without an outer instance', code:false},{text:'Inner is faster', code:false},{text:'Static nested can\'t have fields', code:false},{text:'Inner is private', code:false}],
              correct: 0, explanation: 'Static nested = doesn\'t need outer instance. Inner = has implicit reference to outer.' },
            { type: 'multiple-choice', prompt: 'Lambdas can ONLY target:',
              options: [{text:'Any interface', code:false},{text:'Functional interfaces (one abstract method)', code:false},{text:'Abstract classes', code:false},{text:'Concrete classes', code:false}],
              correct: 1, explanation: 'Functional interface = exactly one abstract method. The lambda IS that method\'s implementation.' },
            { type: 'true-false', statement: 'A lambda <code>(x) -> x * 2</code> can be assigned to any <code>Function&lt;Integer, Integer&gt;</code>.', correct: true, explanation: 'Function is a built-in functional interface with one method: <code>apply</code>.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Object class ============== */
    {
      id: 'oop-u12', name: 'Unit 12 · The Object class', description: 'equals · hashCode · toString',
      lessons: [
        {
          id: 'oop-u12-l1', name: 'Object\'s key methods', icon: '🔑', xp: 30,
          challenges: [
            { type: 'concept', title: 'Override these or pay the price', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Point</span> {
  <span class="kw">private final int</span> x, y;
  <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) { <span class="kw">this</span>.x = x; <span class="kw">this</span>.y = y; }

  @<span class="ty">Override</span>
  <span class="kw">public boolean</span> <span class="fn">equals</span>(<span class="ty">Object</span> o) {
    <span class="kw">if</span> (<span class="kw">this</span> == o) <span class="kw">return true</span>;
    <span class="kw">if</span> (!(o <span class="kw">instanceof</span> <span class="ty">Point</span> p)) <span class="kw">return false</span>;
    <span class="kw">return</span> p.x == x && p.y == y;
  }

  @<span class="ty">Override</span>
  <span class="kw">public int</span> <span class="fn">hashCode</span>() {
    <span class="kw">return</span> <span class="ty">Objects</span>.<span class="fn">hash</span>(x, y);
  }

  @<span class="ty">Override</span>
  <span class="kw">public</span> <span class="ty">String</span> <span class="fn">toString</span>() {
    <span class="kw">return</span> <span class="str">"Point("</span> + x + <span class="str">", "</span> + y + <span class="str">")"</span>;
  }
}</div>
<p><strong>Contract:</strong> if <code>a.equals(b)</code> is true, then <code>a.hashCode() == b.hashCode()</code> MUST be true.</p>` },
            { type: 'multiple-choice', prompt: 'You override <code>equals()</code> but NOT <code>hashCode()</code>. What breaks?',
              options: [{text:'Nothing', code:false},{text:'HashMap / HashSet — equal objects map to different buckets', code:false},{text:'Garbage collection', code:false},{text:'Inheritance', code:false}],
              correct: 1, explanation: 'Hash-based collections become broken. Always override BOTH together.' },
            { type: 'multiple-choice', prompt: 'In <code>equals(Object o)</code>, why check <code>if (this == o) return true</code> first?',
              options: [{text:'Required', code:false},{text:'Performance shortcut — same reference = obviously equal', code:false},{text:'For null safety', code:false},{text:'Marks the override', code:false}],
              correct: 1, explanation: 'Standard equals idiom: identity check, then null/type check, then field compare.' },
            { type: 'true-false', statement: 'Default <code>Object.equals()</code> compares object references (same as <code>==</code>), not contents.', correct: true, explanation: 'Unless you override it. Common gotcha — that\'s why String overrides equals.' },
            { type: 'multiple-choice', prompt: 'Java <code>record</code>s (Java 14+) auto-generate:',
              options: [{text:'Only the constructor', code:false},{text:'Constructor + accessors + equals + hashCode + toString', code:false},{text:'Nothing', code:false},{text:'Just toString', code:false}],
              correct: 1, explanation: 'Records remove most boilerplate for immutable data classes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Generics ============== */
    {
      id: 'oop-u13', name: 'Unit 13 · Generics & OOP', description: 'Type-safe reusable code',
      lessons: [
        {
          id: 'oop-u13-l1', name: 'Generic classes and methods', icon: '🧪', xp: 25,
          challenges: [
            { type: 'concept', title: 'One class, many element types', content: `<div class="code-block"><span class="com">// Generic class</span>
<span class="kw">public class</span> <span class="ty">Box</span>&lt;<span class="ty">T</span>&gt; {
  <span class="kw">private</span> <span class="ty">T</span> value;
  <span class="kw">public</span> <span class="ty">T</span> <span class="fn">get</span>() { <span class="kw">return</span> value; }
  <span class="kw">public void</span> <span class="fn">set</span>(<span class="ty">T</span> v) { value = v; }
}

<span class="ty">Box</span>&lt;<span class="ty">String</span>&gt; sb = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
sb.<span class="fn">set</span>(<span class="str">"hi"</span>);
<span class="ty">Box</span>&lt;<span class="ty">Integer</span>&gt; ib = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
ib.<span class="fn">set</span>(<span class="num">42</span>);

<span class="com">// Generic method</span>
<span class="kw">public static</span> &lt;<span class="ty">T</span>&gt; <span class="ty">T</span> <span class="fn">firstOf</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; list) {
  <span class="kw">return</span> list.<span class="fn">get</span>(<span class="num">0</span>);
}

<span class="com">// Bounded — T must extend Number</span>
<span class="kw">public static</span> &lt;<span class="ty">T</span> <span class="kw">extends</span> <span class="ty">Number</span>&gt; <span class="ty">double</span> <span class="fn">sum</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; nums) {
  <span class="ty">double</span> total = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">T</span> n : nums) total += n.<span class="fn">doubleValue</span>();
  <span class="kw">return</span> total;
}</div>` },
            { type: 'multiple-choice', prompt: 'Generics are a tool for:',
              options: [{text:'Speed', code:false},{text:'Compile-time type safety + code reuse without casting', code:false},{text:'Runtime polymorphism', code:false},{text:'Memory', code:false}],
              correct: 1, explanation: 'Catch type errors at compile time; no more casting <code>(String)</code>.' },
            { type: 'multiple-choice', prompt: '"Type erasure" means:',
              options: [{text:'Generics are deleted at runtime — JVM doesn\'t see them', code:false},{text:'A bug in Java', code:false},{text:'No method overloading', code:false},{text:'GC clears generics', code:false}],
              correct: 0, explanation: 'Java erases generic types at compile time. Affects reflection, instanceof, arrays.' },
            { type: 'multiple-choice', prompt: '<code>&lt;T extends Number&gt;</code> means:',
              options: [{text:'T is exactly Number', code:false},{text:'T is Number or any subclass (Integer, Double, etc.)', code:false},{text:'T must extend the class', code:false},{text:'T can be anything', code:false}],
              correct: 1, explanation: 'Upper bound. <code>T super</code> would be lower bound (less common).' }
          ]
        },
        {
          id: 'oop-u13-l2', name: 'Wildcards: ? extends, ? super', icon: '❓', xp: 25,
          challenges: [
            { type: 'concept', title: 'PECS — Producer Extends, Consumer Super', content: `<div class="code-block"><span class="com">// ? extends T — "producer" — you READ from it</span>
<span class="kw">double</span> <span class="fn">sumOfList</span>(<span class="ty">List</span>&lt;? <span class="kw">extends</span> <span class="ty">Number</span>&gt; list) {
  <span class="ty">double</span> total = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="ty">Number</span> n : list) total += n.<span class="fn">doubleValue</span>();
  <span class="kw">return</span> total;
}
<span class="com">// Accepts List&lt;Integer&gt;, List&lt;Double&gt;, etc.</span>

<span class="com">// ? super T — "consumer" — you WRITE into it</span>
<span class="kw">void</span> <span class="fn">addIntegers</span>(<span class="ty">List</span>&lt;? <span class="kw">super</span> <span class="ty">Integer</span>&gt; list) {
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) list.<span class="fn">add</span>(i);
}
<span class="com">// Accepts List&lt;Integer&gt;, List&lt;Number&gt;, List&lt;Object&gt;</span></div>
<p><strong>PECS rule</strong>: Producer Extends, Consumer Super.</p>` },
            { type: 'multiple-choice', prompt: '"Producer Extends, Consumer Super" rule recommends:',
              options: [{text:'Use ? extends when reading; ? super when writing', code:false},{text:'Always use extends', code:false},{text:'Never use wildcards', code:false},{text:'Reverse it', code:false}],
              correct: 0, explanation: 'PECS. Effective Java item.' },
            { type: 'true-false', statement: '<code>List&lt;Object&gt;</code> is NOT a supertype of <code>List&lt;String&gt;</code> — generics are invariant.', correct: true, explanation: 'A common surprise. Use wildcards (? extends/super) to relax this.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — SOLID & best practices ============== */
    {
      id: 'oop-u14', name: 'Unit 14 · SOLID & Best Practices', description: 'Design that lasts',
      lessons: [
        {
          id: 'oop-u14-l1', name: 'SOLID quick reference', icon: '🧱', xp: 25,
          challenges: [
            { type: 'concept', title: 'Five rules for great OO design', content: `<div class="code-block"><span class="com">S — Single Responsibility</span>
  Each class has ONE reason to change.

<span class="com">O — Open / Closed</span>
  Open to extension, closed to modification.

<span class="com">L — Liskov Substitution</span>
  Subtypes substitutable for their base — no surprises.

<span class="com">I — Interface Segregation</span>
  Many small focused interfaces beat one fat interface.

<span class="com">D — Dependency Inversion</span>
  Depend on abstractions, not concretions.</div>
<p>These are guidelines for catching common smells. Don\'t apply blindly — context matters.</p>` },
            { type: 'multiple-choice', prompt: 'A <code>UserService</code> doing parsing + DB + email violates which principle?',
              options: [{text:'Single Responsibility', code:false},{text:'Open/Closed', code:false},{text:'Liskov', code:false},{text:'Dependency Inversion', code:false}],
              correct: 0, explanation: 'Multiple reasons to change.' },
            { type: 'multiple-choice', prompt: 'Square extends Rectangle with overridden setWidth that also sets height violates:',
              options: [{text:'S', code:false},{text:'L (Liskov)', code:false},{text:'I', code:false},{text:'O', code:false}],
              correct: 1, explanation: 'Substituting Square for Rectangle breaks code that expects Rectangle\'s independent dimensions.' },
            { type: 'multiple-choice', prompt: 'Constructor-injection of dependencies enables:',
              options: [{text:'S', code:false},{text:'O', code:false},{text:'L', code:false},{text:'D (Dependency Inversion)', code:false}],
              correct: 3, explanation: 'Classes receive dependencies from outside (abstractions) instead of creating them.' }
          ]
        },
        {
          id: 'oop-u14-l2', name: 'Common pitfalls', icon: '🪤', xp: 20,
          challenges: [
            { type: 'concept', title: 'Anti-patterns to avoid', content: `<div class="code-block">- God classes — 1000 LOC, many concerns
- Anemic domain — data classes with no behavior, all logic elsewhere
- Inheritance for code reuse — when composition fits better
- Public fields — break encapsulation
- Returning mutable collections from getters
- Forgetting equals/hashCode together
- Using inheritance just to override one tiny piece — prefer Strategy
- Deep inheritance hierarchies (&gt;3 levels gets painful)</div>` },
            { type: 'multiple-choice', prompt: 'A class with 50 methods and 800 lines of code is likely:',
              options: [{text:'Well-designed', code:false},{text:'A God Class — too many responsibilities; split it', code:false},{text:'Just complete', code:false},{text:'Performant', code:false}],
              correct: 1, explanation: 'Hard to test, hard to change, hard to understand.' },
            { type: 'true-false', statement: 'Returning <code>Collections.unmodifiableList(myList)</code> protects the internal list from caller mutation.', correct: true, explanation: 'Cheap defensive measure. The caller gets a read-only view.' },
            { type: 'reorder-code', prompt: 'Reorder the equals/hashCode override checklist.',
              lines: ['Override equals(Object o)','If same reference → true','If wrong type → false','Cast and compare fields','Override hashCode (must agree with equals)'],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    }

  ]
});

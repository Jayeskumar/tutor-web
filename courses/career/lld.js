PUSH({
  id: 'lld',
  name: 'Low-Level Design',
  icon: '🏛️',
  color: '#37474f',
  description: 'OOP design, SOLID, design patterns, and classic LLD interview problems.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'lld-u1', name: 'Unit 1 · What is LLD?', description: 'Class-level architecture and design',
      lessons: [
        {
          id: 'lld-u1-l1', name: 'LLD vs HLD', icon: '📐', xp: 15,
          challenges: [
            { type: 'concept', title: 'Two design altitudes', content: `<p>System design has two distinct flavors that interviewers test separately:</p>
<div class="code-block"><span class="com">High-Level Design (HLD):</span>
- Scale, distributed systems, services
- Databases, caches, queues, load balancers
- e.g., "Design Twitter"

<span class="com">Low-Level Design (LLD):</span>
- Class diagrams, object collaboration
- Design patterns, SOLID principles
- e.g., "Design a Parking Lot in code"</div>
<p>LLD is about <em>code-level</em> design — what classes, what methods, what relationships. It tests your OOP and patterns chops.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a typical LLD interview question?',
              options: [{text:'Design a URL shortener for 1B users', code:false},{text:'Design a chess game in code (classes, methods)', code:false},{text:'Pick between SQL and NoSQL', code:false},{text:'Sketch CDN architecture', code:false}],
              correct: 1, explanation: 'LLD = class-level. The others are HLD.' },
            { type: 'true-false', statement: 'LLD interviews care MORE about clean OOP than horizontal scaling.', correct: true, explanation: 'Save scale talk for HLD. LLD wants well-designed classes.' },
            { type: 'match-pairs', prompt: 'Match topic to design level.', leftLabel: 'Topic', rightLabel: 'Level',
              pairs: [{left:'Sharding strategy', right:'HLD'},{left:'Singleton vs Factory', right:'LLD'},{left:'CAP theorem', right:'HLD'},{left:'Strategy pattern', right:'LLD'}] }
          ]
        },
        {
          id: 'lld-u1-l2', name: 'What gets graded in LLD', icon: '✅', xp: 15,
          challenges: [
            { type: 'concept', title: 'The LLD scorecard', content: `<div class="code-block"><span class="com">1. Clarifying questions</span>     — ask before designing
<span class="com">2. Identifying entities</span>     — what are the classes/objects?
<span class="com">3. Class diagram</span>           — fields, methods, relationships
<span class="com">4. Behavior modeling</span>       — methods that interact
<span class="com">5. Patterns applied</span>        — relevant patterns + WHY
<span class="com">6. SOLID adherence</span>         — single resp, open/closed, etc.
<span class="com">7. Extensibility</span>           — "what if we add X feature?"
<span class="com">8. Concurrency (sometimes)</span>  — thread-safety</div>
<p>Drawing while talking + writing skeleton code = high marks.</p>` },
            { type: 'multiple-choice', prompt: 'In an LLD interview, the most important early step is:',
              options: [{text:'Start typing classes', code:false},{text:'Clarify requirements + identify entities', code:false},{text:'Pick a design pattern', code:false},{text:'Talk about scaling', code:false}],
              correct: 1, explanation: 'Like HLD, requirements first — but at code level (which entities matter?).' },
            { type: 'true-false', statement: 'Interviewers love hearing "I\'d use X pattern because Y" — citing the reason matters.', correct: true, explanation: 'Naming a pattern is shallow; explaining why earns real points.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — OOP ============== */
    {
      id: 'lld-u2', name: 'Unit 2 · OOP for Design', description: 'The four pillars, applied',
      lessons: [
        {
          id: 'lld-u2-l1', name: 'Encapsulation & abstraction', icon: '🔐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Hide what, expose how', content: `<p><strong>Encapsulation</strong>: keep data private, expose behavior via methods.<br/>
<strong>Abstraction</strong>: expose the WHAT, hide the HOW (interfaces, abstract classes).</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">BankAccount</span> {
  <span class="kw">private</span> <span class="ty">double</span> balance;   <span class="com">// hidden state</span>

  <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="ty">double</span> amt) {
    <span class="kw">if</span> (amt &lt;= <span class="num">0</span>) <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>();
    balance += amt;
  }
  <span class="kw">public</span> <span class="ty">double</span> <span class="fn">getBalance</span>() { <span class="kw">return</span> balance; }
}</div>` },
            { type: 'multiple-choice', prompt: 'Best reason to make a field private?',
              options: [{text:'Smaller binary', code:false},{text:'Maintain invariants — prevent direct mutation', code:false},{text:'Faster code', code:false},{text:'JVM requirement', code:false}],
              correct: 1, explanation: 'Encapsulation protects invariants. Public mutators bypass your validation.' },
            { type: 'true-false', statement: 'A getter that returns a mutable List reference breaks encapsulation.', correct: true, explanation: 'Caller can modify your internal state. Return defensive copies or unmodifiable views.' }
          ]
        },
        {
          id: 'lld-u2-l2', name: 'Inheritance vs Composition', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: '"Has-a" usually beats "is-a"', content: `<p>Inheritance creates tight coupling. Prefer <strong>composition</strong> when possible.</p>
<div class="code-block"><span class="com">// BAD: Square extends Rectangle violates Liskov</span>
<span class="kw">class</span> <span class="ty">Square</span> <span class="kw">extends</span> <span class="ty">Rectangle</span> {
  <span class="kw">void</span> <span class="fn">setWidth</span>(<span class="ty">double</span> w) { width = height = w; } <span class="com">// surprise!</span>
}

<span class="com">// BETTER: composition</span>
<span class="kw">class</span> <span class="ty">Square</span> {
  <span class="kw">private</span> <span class="ty">Shape</span> shape;   <span class="com">// has-a</span>
}</div>
<p><strong>Rule of thumb:</strong> use inheritance for substitutability, composition for reuse.</p>` },
            { type: 'multiple-choice', prompt: 'Which signals you should prefer composition over inheritance?',
              options: [{text:'You want to reuse some methods', code:false},{text:'A child class needs to disable parent behavior', code:false},{text:'The child IS-A specialized parent', code:false},{text:'You need polymorphism', code:false}],
              correct: 1, explanation: 'Overriding to "do nothing" is a sign inheritance was wrong.' },
            { type: 'true-false', statement: 'A Stack should extend Vector. (Java does this — it\'s a known design mistake!)', correct: false, explanation: 'Stack inherited add/insert from Vector, breaking LIFO encapsulation. Modern Java prefers Deque.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — SOLID ============== */
    {
      id: 'lld-u3', name: 'Unit 3 · SOLID Principles', description: 'The 5 design commandments',
      lessons: [
        {
          id: 'lld-u3-l1', name: 'S — Single Responsibility', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: 'One reason to change', content: `<p>A class should have <strong>one and only one</strong> reason to change.</p>
<div class="code-block"><span class="com">// BAD: 3 responsibilities</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">void</span> <span class="fn">create</span>(<span class="ty">User</span> u) { ... }     <span class="com">// business logic</span>
  <span class="kw">void</span> <span class="fn">saveToDb</span>(<span class="ty">User</span> u) { ... }    <span class="com">// persistence</span>
  <span class="kw">void</span> <span class="fn">sendEmail</span>(<span class="ty">User</span> u) { ... }   <span class="com">// notification</span>
}

<span class="com">// GOOD: separated</span>
<span class="kw">class</span> <span class="ty">UserService</span> { ... <span class="com">// only business logic</span> }
<span class="kw">class</span> <span class="ty">UserRepository</span> { ... }
<span class="kw">class</span> <span class="ty">EmailService</span> { ... }</div>` },
            { type: 'multiple-choice', prompt: 'Why is SRP useful?',
              options: [{text:'Smaller files', code:false},{text:'Changes to one concern don\'t risk breaking others', code:false},{text:'Faster compilation', code:false},{text:'It\'s required by Java', code:false}],
              correct: 1, explanation: 'Isolation = lower risk + easier testing.' },
            { type: 'true-false', statement: 'A class doing parsing + emailing + logging violates SRP.', correct: true, explanation: 'Three reasons to change → split it.' }
          ]
        },
        {
          id: 'lld-u3-l2', name: 'O — Open / Closed', icon: '🚪', xp: 20,
          challenges: [
            { type: 'concept', title: 'Open to extension, closed to modification', content: `<p>You should be able to add new behavior <strong>without modifying existing code</strong>. Achieved via polymorphism / strategy / inheritance.</p>
<div class="code-block"><span class="com">// BAD: switch statement grows every new shape</span>
<span class="kw">double</span> <span class="fn">area</span>(<span class="ty">Shape</span> s) {
  <span class="kw">if</span> (s <span class="kw">instanceof</span> <span class="ty">Circle</span>) ...
  <span class="kw">else if</span> (s <span class="kw">instanceof</span> <span class="ty">Square</span>) ...
}

<span class="com">// GOOD: polymorphism</span>
<span class="kw">abstract class</span> <span class="ty">Shape</span> {
  <span class="kw">abstract</span> <span class="ty">double</span> <span class="fn">area</span>();
}
<span class="com">// Adding new shape = new class, no edits to existing</span></div>` },
            { type: 'multiple-choice', prompt: 'Adding a new payment method shouldn\'t force you to edit the order-checkout class. This is:',
              options: [{text:'Single Responsibility', code:false},{text:'Open/Closed Principle', code:false},{text:'Liskov Substitution', code:false},{text:'Interface Segregation', code:false}],
              correct: 1, explanation: 'New behavior via extension, not modification.' },
            { type: 'true-false', statement: 'A long if/else chain checking instanceof is often a sign you should refactor toward OCP.', correct: true, explanation: 'Replace with polymorphism — each branch becomes a class.' }
          ]
        },
        {
          id: 'lld-u3-l3', name: 'L · I · D', icon: '🧱', xp: 25,
          challenges: [
            { type: 'concept', title: 'The last three principles', content: `<p><strong>L — Liskov Substitution</strong>: subtypes must be substitutable for their base type without breaking behavior. Square-extends-Rectangle is the classic counterexample.</p>
<p><strong>I — Interface Segregation</strong>: many small focused interfaces &gt; one fat interface. Don\'t force classes to implement methods they don\'t need.</p>
<p><strong>D — Dependency Inversion</strong>: depend on abstractions, not concretions. High-level modules shouldn\'t depend on low-level ones — both depend on interfaces.</p>
<div class="code-block"><span class="com">// BAD: direct dependency on MySQLDB</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">private</span> <span class="ty">MySQLDB</span> db = <span class="kw">new</span> <span class="ty">MySQLDB</span>();
}
<span class="com">// GOOD: depend on interface</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">private</span> <span class="ty">Database</span> db;   <span class="com">// interface, injected</span>
  <span class="kw">public</span> <span class="fn">UserService</span>(<span class="ty">Database</span> db) { <span class="kw">this</span>.db = db; }
}</div>` },
            { type: 'multiple-choice', prompt: 'A Penguin extending Bird and throwing UnsupportedOperationException on fly() violates:',
              options: [{text:'SRP', code:false},{text:'OCP', code:false},{text:'LSP', code:false},{text:'ISP', code:false}],
              correct: 2, explanation: 'A Penguin should be substitutable for Bird — but it isn\'t (calling fly() crashes).' },
            { type: 'multiple-choice', prompt: 'A "Printer" interface with print(), scan(), fax(), email() — but most clients only need print() — violates:',
              options: [{text:'SRP', code:false},{text:'OCP', code:false},{text:'LSP', code:false},{text:'ISP', code:false}],
              correct: 3, explanation: 'Interface Segregation — split into Printable, Scannable, Faxable.' },
            { type: 'multiple-choice', prompt: 'Constructor injection of dependencies is the canonical way to apply:',
              options: [{text:'SRP', code:false},{text:'OCP', code:false},{text:'LSP', code:false},{text:'DIP', code:false}],
              correct: 3, explanation: 'Dependency Inversion — receive your dependencies from outside, not create them inside.' },
            { type: 'fill-blank', prompt: 'The "D" in SOLID stands for:',
              codeLines: [{html:'<span class="ty">_BLANK_</span> Inversion'}],
              tokens: ['Dependency','Delegation','Decoupling','Design'], correctAnswer: 'Dependency' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — UML ============== */
    {
      id: 'lld-u4', name: 'Unit 4 · UML Diagrams', description: 'The language of design',
      lessons: [
        {
          id: 'lld-u4-l1', name: 'Class diagram basics', icon: '📊', xp: 20,
          challenges: [
            { type: 'concept', title: 'Boxes, lines, and arrows', content: `<div class="code-block"><span class="com">Class box (3 parts):</span>
+---------------+
| ClassName     |
+---------------+
| - field: int  |       <span class="com">// -- private  // +-- public  // # protected</span>
| + name: String|
+---------------+
| + method()    |
+---------------+

<span class="com">Relationships:</span>
- Association:     ───────
- Inheritance:    ────|&gt;   (hollow triangle to parent)
- Composition:    ◆────    (filled diamond)
- Aggregation:    ◇────    (hollow diamond)
- Realization:    ─ ─ ─|&gt;  (dashed)</div>` },
            { type: 'multiple-choice', prompt: 'A Car HAS-A Engine where Engine cannot exist without Car. This is:',
              options: [{text:'Association', code:false},{text:'Aggregation', code:false},{text:'Composition', code:false},{text:'Inheritance', code:false}],
              correct: 2, explanation: 'Composition = strong "has-a" with lifecycle dependency.' },
            { type: 'multiple-choice', prompt: 'A Team HAS-A list of Players, but players can outlive the team. This is:',
              options: [{text:'Association', code:false},{text:'Aggregation', code:false},{text:'Composition', code:false},{text:'Inheritance', code:false}],
              correct: 1, explanation: 'Aggregation = weak "has-a" without lifecycle dependency.' },
            { type: 'true-false', statement: 'Inheritance arrow points from child to parent.', correct: true, explanation: 'Hollow triangle on the parent side.' },
            { type: 'match-pairs', prompt: 'UML notation match.', leftLabel: 'Symbol', rightLabel: 'Meaning',
              pairs: [{left:'+', right:'public'},{left:'-', right:'private'},{left:'#', right:'protected'},{left:'~', right:'package'}] }
          ]
        },
        {
          id: 'lld-u4-l2', name: 'Sequence & state diagrams', icon: '⏱️', xp: 20,
          challenges: [
            { type: 'concept', title: 'How objects interact over time', content: `<p><strong>Sequence diagram</strong>: actors and objects on top, time flows downward. Arrows show messages.</p>
<div class="code-block">User → OrderService.placeOrder()
       OrderService → InventoryService.reserve()
       InventoryService → DB.update()
       InventoryService → OrderService (ok)
       OrderService → PaymentService.charge()
       PaymentService → OrderService (paid)
       OrderService → User (orderId)</div>
<p><strong>State diagram</strong>: states of an object + transitions triggered by events.</p>
<div class="code-block">Order: Created → Paid → Shipped → Delivered
                  ↓
                Cancelled (from any state before Delivered)</div>` },
            { type: 'multiple-choice', prompt: 'When would you draw a sequence diagram?',
              options: [{text:'To show class relationships', code:false},{text:'To show how objects collaborate over time on a use case', code:false},{text:'For database schema', code:false},{text:'For deployment', code:false}],
              correct: 1, explanation: 'Sequence = time-ordered interaction.' },
            { type: 'true-false', statement: 'A state diagram is most useful for entities with distinct lifecycle stages (e.g., Order, Document).', correct: true, explanation: 'States + transitions communicate the lifecycle clearly.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Creational ============== */
    {
      id: 'lld-u5', name: 'Unit 5 · Creational Patterns', description: 'How objects come into existence',
      lessons: [
        {
          id: 'lld-u5-l1', name: 'Singleton', icon: '1️⃣', xp: 20,
          challenges: [
            { type: 'concept', title: 'One instance, globally accessible', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">Logger</span> {
  <span class="kw">private static</span> <span class="ty">Logger</span> instance;
  <span class="kw">private</span> <span class="fn">Logger</span>() {}

  <span class="kw">public static synchronized</span> <span class="ty">Logger</span> <span class="fn">getInstance</span>() {
    <span class="kw">if</span> (instance == <span class="kw">null</span>) instance = <span class="kw">new</span> <span class="ty">Logger</span>();
    <span class="kw">return</span> instance;
  }
}</div>
<p><strong>When to use:</strong> truly global state (logger, config, connection pool). <strong>Don\'t over-use</strong> — it hides dependencies and complicates testing.</p>
<p><strong>Best impl in Java:</strong> use an enum singleton — thread-safe, serialization-safe, reflection-safe.</p>` },
            { type: 'multiple-choice', prompt: 'Best Singleton implementation in Java?',
              options: [{text:'Eager init via static field', code:false},{text:'Lazy init with synchronized', code:false},{text:'Enum singleton', code:false},{text:'Double-checked locking', code:false}],
              correct: 2, explanation: 'Enum: thread-safe, serialization-safe, reflection-safe. Recommended by Effective Java.' },
            { type: 'true-false', statement: 'Singletons make unit testing harder because they introduce global state.', correct: true, explanation: 'Tests share state across cases. Prefer dependency injection.' },
            { type: 'multiple-choice', prompt: 'Naive lazy Singleton without synchronization is:',
              options: [{text:'Thread-safe', code:false},{text:'Not thread-safe (two threads may both create instances)', code:false},{text:'Faster', code:false},{text:'A bad idea but works on single CPU', code:false}],
              correct: 1, explanation: 'Race condition between check and create.' }
          ]
        },
        {
          id: 'lld-u5-l2', name: 'Factory & Builder', icon: '🏭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Two ways to construct', content: `<p><strong>Factory Method</strong>: a method that decides which subclass to instantiate.</p>
<div class="code-block"><span class="kw">abstract class</span> <span class="ty">ShapeFactory</span> {
  <span class="kw">public static</span> <span class="ty">Shape</span> <span class="fn">create</span>(<span class="ty">String</span> type) {
    <span class="kw">switch</span> (type) {
      <span class="kw">case</span> <span class="str">"circle"</span>: <span class="kw">return new</span> <span class="ty">Circle</span>();
      <span class="kw">case</span> <span class="str">"square"</span>: <span class="kw">return new</span> <span class="ty">Square</span>();
      <span class="kw">default</span>: <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>();
    }
  }
}</div>
<p><strong>Builder</strong>: fluent construction of complex objects with many optional fields.</p>
<div class="code-block"><span class="ty">Pizza</span> p = <span class="kw">new</span> <span class="ty">Pizza</span>.<span class="ty">Builder</span>()
    .<span class="fn">size</span>(<span class="num">12</span>).<span class="fn">cheese</span>(<span class="kw">true</span>).<span class="fn">topping</span>(<span class="str">"olives"</span>)
    .<span class="fn">build</span>();</div>` },
            { type: 'multiple-choice', prompt: 'A class with 8 optional constructor parameters should use:',
              options: [{text:'Telescoping constructors', code:false},{text:'Builder pattern', code:false},{text:'Singleton', code:false},{text:'Abstract factory', code:false}],
              correct: 1, explanation: 'Builder avoids "constructor explosion" and makes code readable.' },
            { type: 'multiple-choice', prompt: '"Abstract Factory" produces:',
              options: [{text:'One object', code:false},{text:'A family of related objects (e.g., Mac vs Windows widget set)', code:false},{text:'A singleton', code:false},{text:'A builder', code:false}],
              correct: 1, explanation: 'Abstract Factory = factory of factories for product families.' },
            { type: 'true-false', statement: 'Java\'s StringBuilder is an example of the Builder pattern.', correct: true, explanation: 'Fluent API for building strings step by step.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Structural ============== */
    {
      id: 'lld-u6', name: 'Unit 6 · Structural Patterns', description: 'Composing classes & objects',
      lessons: [
        {
          id: 'lld-u6-l1', name: 'Adapter, Facade, Proxy', icon: '🔌', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three plumbing patterns', content: `<p><strong>Adapter</strong>: make an incompatible interface work with your code (a "plug converter").</p>
<p><strong>Facade</strong>: simplify a complex subsystem with one easy entry point.</p>
<p><strong>Proxy</strong>: stand in front of the real object — for lazy loading, caching, access control, or remote access.</p>
<div class="code-block"><span class="com">// Adapter</span>
<span class="kw">class</span> <span class="ty">LegacyPrinterAdapter</span> <span class="kw">implements</span> <span class="ty">ModernPrinter</span> {
  <span class="kw">private</span> <span class="ty">LegacyPrinter</span> legacy;
  <span class="kw">public void</span> <span class="fn">print</span>(<span class="ty">String</span> doc) {
    legacy.<span class="fn">oldPrint</span>(doc.<span class="fn">getBytes</span>());
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'You have a 3rd-party library with a clunky API. You want your code to call it through a clean, project-specific API. Use:',
              options: [{text:'Singleton', code:false},{text:'Adapter (or Facade)', code:false},{text:'Builder', code:false},{text:'Observer', code:false}],
              correct: 1, explanation: 'Adapter wraps the foreign API behind your own.' },
            { type: 'multiple-choice', prompt: 'You want to log every method call on an object without changing the object. Use:',
              options: [{text:'Singleton', code:false},{text:'Proxy', code:false},{text:'Builder', code:false},{text:'Adapter', code:false}],
              correct: 1, explanation: 'A logging proxy intercepts calls. (See Java\'s java.lang.reflect.Proxy.)' },
            { type: 'true-false', statement: 'Spring AOP is built on the Proxy pattern.', correct: true, explanation: 'Cross-cutting concerns (logging, transactions, security) are added via proxies.' }
          ]
        },
        {
          id: 'lld-u6-l2', name: 'Decorator & Composite', icon: '🎨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Wrap & nest', content: `<p><strong>Decorator</strong>: add behavior to objects dynamically by wrapping them — alternative to subclassing.</p>
<div class="code-block"><span class="ty">Coffee</span> c = <span class="kw">new</span> <span class="ty">Espresso</span>();
c = <span class="kw">new</span> <span class="ty">MilkDecorator</span>(c);
c = <span class="kw">new</span> <span class="ty">SugarDecorator</span>(c);
c.<span class="fn">cost</span>();         <span class="com">// espresso + milk + sugar</span></div>
<p><strong>Composite</strong>: treat individual objects and groups of objects uniformly (tree structures).</p>
<div class="code-block">FileSystemItem
  ├── File (leaf)
  └── Folder (composite, contains many FileSystemItem)</div>` },
            { type: 'multiple-choice', prompt: 'Java\'s BufferedReader wrapping a FileReader is an example of:',
              options: [{text:'Adapter', code:false},{text:'Decorator', code:false},{text:'Composite', code:false},{text:'Facade', code:false}],
              correct: 1, explanation: 'Java I/O streams are textbook Decorator — wrap to add buffering, encoding, compression.' },
            { type: 'true-false', statement: 'Composite is useful when you have a tree-like hierarchy where leaves and branches share the same interface.', correct: true, explanation: 'File systems, GUI widget trees, AST nodes — all use Composite.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Behavioral ============== */
    {
      id: 'lld-u7', name: 'Unit 7 · Behavioral Patterns', description: 'How objects communicate',
      lessons: [
        {
          id: 'lld-u7-l1', name: 'Strategy & Observer', icon: '👀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pluggable algorithms & subscribers', content: `<p><strong>Strategy</strong>: encapsulate interchangeable algorithms behind an interface.</p>
<div class="code-block"><span class="kw">interface</span> <span class="ty">PaymentStrategy</span> { <span class="kw">void</span> <span class="fn">pay</span>(<span class="ty">int</span> amount); }
<span class="kw">class</span> <span class="ty">CreditCard</span> <span class="kw">implements</span> <span class="ty">PaymentStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">PayPal</span> <span class="kw">implements</span> <span class="ty">PaymentStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">Cart</span> {
  <span class="kw">private</span> <span class="ty">PaymentStrategy</span> strategy;
  <span class="kw">void</span> <span class="fn">checkout</span>() { strategy.<span class="fn">pay</span>(total); }
}</div>
<p><strong>Observer</strong>: publishers notify subscribers when state changes.</p>
<div class="code-block"><span class="kw">interface</span> <span class="ty">Observer</span> { <span class="kw">void</span> <span class="fn">update</span>(<span class="ty">Event</span> e); }
<span class="kw">class</span> <span class="ty">EventBus</span> {
  <span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">Observer</span>&gt; subs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">void</span> <span class="fn">publish</span>(<span class="ty">Event</span> e) { subs.<span class="fn">forEach</span>(o -&gt; o.<span class="fn">update</span>(e)); }
}</div>` },
            { type: 'multiple-choice', prompt: 'A sort function that accepts a Comparator argument is an example of:',
              options: [{text:'Strategy', code:false},{text:'Observer', code:false},{text:'Singleton', code:false},{text:'Decorator', code:false}],
              correct: 0, explanation: 'You pass in the comparison strategy.' },
            { type: 'multiple-choice', prompt: 'Pub/sub event systems are an instance of:',
              options: [{text:'Strategy', code:false},{text:'Observer', code:false},{text:'Adapter', code:false},{text:'Command', code:false}],
              correct: 1, explanation: 'Publishers don\'t know subscribers — Observer pattern.' },
            { type: 'true-false', statement: 'Java\'s lambda + functional interface often replaces what used to require a Strategy class.', correct: true, explanation: 'Strategy can be a 1-line lambda now.' }
          ]
        },
        {
          id: 'lld-u7-l2', name: 'Command, State, Template', icon: '🎬', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three more workhorses', content: `<p><strong>Command</strong>: encapsulate a request as an object. Enables undo/redo, queueing.</p>
<div class="code-block"><span class="kw">interface</span> <span class="ty">Command</span> { <span class="kw">void</span> <span class="fn">execute</span>(); <span class="kw">void</span> <span class="fn">undo</span>(); }</div>
<p><strong>State</strong>: object behavior changes when its internal state changes (each state is a class).</p>
<div class="code-block">Order: NewOrder → Paid → Shipped → Delivered
       Each state knows how to handle events differently</div>
<p><strong>Template Method</strong>: parent defines algorithm skeleton; subclasses override steps.</p>
<div class="code-block"><span class="kw">abstract class</span> <span class="ty">DataProcessor</span> {
  <span class="kw">public final void</span> <span class="fn">process</span>() {        <span class="com">// the template</span>
    <span class="fn">load</span>(); <span class="fn">validate</span>(); <span class="fn">transform</span>(); <span class="fn">save</span>();
  }
  <span class="kw">protected abstract void</span> <span class="fn">transform</span>();  <span class="com">// subclass-specific</span>
}</div>` },
            { type: 'multiple-choice', prompt: 'A text editor that supports undo/redo likely uses:',
              options: [{text:'Strategy', code:false},{text:'Observer', code:false},{text:'Command', code:false},{text:'Template Method', code:false}],
              correct: 2, explanation: 'Each action is a Command with execute() and undo() — stored in a history stack.' },
            { type: 'multiple-choice', prompt: 'A vending machine with states (idle, awaiting-money, dispensing) likely uses:',
              options: [{text:'Strategy', code:false},{text:'State', code:false},{text:'Singleton', code:false},{text:'Decorator', code:false}],
              correct: 1, explanation: 'Each state is a class; the machine delegates to the current state.' },
            { type: 'true-false', statement: 'Template Method uses inheritance; Strategy uses composition. They achieve similar goals.', correct: true, explanation: 'Both make some steps pluggable. Strategy is more flexible (compose at runtime).' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Designing Parking Lot ============== */
    {
      id: 'lld-u8', name: 'Unit 8 · Design: Parking Lot', description: 'The most asked LLD problem',
      lessons: [
        {
          id: 'lld-u8-l1', name: 'Identify entities', icon: '🅿️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Walk through the design', content: `<p>Common entities for a parking lot:</p>
<div class="code-block"><span class="ty">ParkingLot</span>      — top-level
<span class="ty">ParkingFloor</span>    — multiple floors per lot
<span class="ty">ParkingSpot</span>     — abstract; types: Compact, Large, Handicapped, EV
<span class="ty">Vehicle</span>         — abstract; types: Car, Bike, Truck
<span class="ty">Ticket</span>          — issued on entry
<span class="ty">Payment</span>         — handles checkout
<span class="ty">EntryGate</span>, <span class="ty">ExitGate</span></div>
<p><strong>Relationships:</strong> ParkingLot HAS-A many ParkingFloors. Each Floor HAS-A many ParkingSpots. A Spot might be occupied by a Vehicle.</p>` },
            { type: 'multiple-choice', prompt: 'Best base for Vehicle types (Car, Bike, Truck)?',
              options: [{text:'Enum', code:false},{text:'Abstract class or interface', code:false},{text:'Three unrelated classes', code:false},{text:'String', code:false}],
              correct: 1, explanation: 'You\'ll want polymorphic methods (size, type-specific logic) → abstract class.' },
            { type: 'multiple-choice', prompt: 'For "find an available spot for vehicle type X", which pattern fits the rate calculation?',
              options: [{text:'Singleton', code:false},{text:'Strategy (different rate strategies)', code:false},{text:'Observer', code:false},{text:'Decorator', code:false}],
              correct: 1, explanation: 'PricingStrategy interface, swappable hourly/flat-rate impls.' },
            { type: 'true-false', statement: 'Parking lot is a great example to discuss both Strategy (pricing) and State (gate status).', correct: true, explanation: 'These come up naturally — a strong design weaves several patterns together cleanly.' }
          ]
        },
        {
          id: 'lld-u8-l2', name: 'Methods & flow', icon: '🚗', xp: 25,
          challenges: [
            { type: 'concept', title: 'Behavior modeling', content: `<div class="code-block"><span class="com">// Sequence: vehicle arrives</span>
EntryGate.<span class="fn">issueTicket</span>(vehicle)
  → ParkingLot.<span class="fn">findSpot</span>(vehicle.type)
  → Spot.<span class="fn">assign</span>(vehicle)
  → Ticket(vehicleId, spotId, entryTime)

<span class="com">// Sequence: vehicle leaves</span>
ExitGate.<span class="fn">processExit</span>(ticket)
  → calculate elapsed time
  → PricingStrategy.<span class="fn">price</span>(duration)
  → PaymentProcessor.<span class="fn">charge</span>(amount)
  → Spot.<span class="fn">release</span>()</div>
<p>For real production: consider <em>concurrent</em> arrivals — two cars asking for the last spot simultaneously. Need locking or a thread-safe queue.</p>` },
            { type: 'multiple-choice', prompt: 'Two cars approach at the same time, only one spot left. Solution:',
              options: [{text:'First-come-first-served, locked operation on assignment', code:false},{text:'Ignore the race', code:false},{text:'Reject both', code:false},{text:'Sleep', code:false}],
              correct: 0, explanation: 'Atomic assign (synchronized or CAS).' },
            { type: 'true-false', statement: 'Always asking "are there concurrency concerns?" earns interview points in LLD.', correct: true, explanation: 'Shows production thinking.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — More designs ============== */
    {
      id: 'lld-u9', name: 'Unit 9 · More Classic Designs', description: 'Elevator, ATM, Vending Machine',
      lessons: [
        {
          id: 'lld-u9-l1', name: 'Elevator system', icon: '🛗', xp: 25,
          challenges: [
            { type: 'concept', title: 'Multiple elevators, smart scheduling', content: `<div class="code-block">Entities:
- <span class="ty">Elevator</span>: id, currentFloor, direction, state, requestsQueue
- <span class="ty">ElevatorController</span>: dispatches requests across elevators
- <span class="ty">Request</span>: source floor, destination, direction
- <span class="ty">ElevatorState</span>: Idle, MovingUp, MovingDown, Doors-Open

Scheduling strategies (Strategy pattern!):
- FCFS (First Come First Served) — simple, suboptimal
- SCAN / "Elevator algorithm" — like disk scheduling
- LOOK — like SCAN but reverses direction when no more requests</div>` },
            { type: 'multiple-choice', prompt: 'Best pattern for swappable scheduling algorithms?',
              options: [{text:'Singleton', code:false},{text:'Strategy', code:false},{text:'Observer', code:false},{text:'Builder', code:false}],
              correct: 1, explanation: 'Each algorithm is a strategy; the controller composes one.' },
            { type: 'multiple-choice', prompt: 'How should the elevator know its current behavior (open doors? move?)?',
              options: [{text:'A big if/else chain', code:false},{text:'State pattern — each state is a class with handle() methods', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'State pattern keeps behavior cohesive per state.' },
            { type: 'true-false', statement: 'For real-world elevators, energy efficiency + wait times must be balanced.', correct: true, explanation: 'Most elevator scheduling is multi-objective optimization — interesting interview discussion point.' }
          ]
        },
        {
          id: 'lld-u9-l2', name: 'Vending machine (with State)', icon: '🥤', xp: 25,
          challenges: [
            { type: 'concept', title: 'Textbook state-pattern example', content: `<div class="code-block">States:
- IdleState         (waiting for coin)
- HasMoneyState     (coin inserted, awaiting product selection)
- SoldState         (dispensing)
- SoldOutState

Each state class handles events (insertCoin, selectProduct, dispense, refund)
The machine just delegates to the current state — no big switch statements!</div>
<div class="code-block"><span class="kw">class</span> <span class="ty">VendingMachine</span> {
  <span class="kw">private</span> <span class="ty">VendingState</span> state;
  <span class="kw">void</span> <span class="fn">insertCoin</span>(<span class="ty">Coin</span> c) { state.<span class="fn">insertCoin</span>(c); }
  <span class="kw">void</span> <span class="fn">setState</span>(<span class="ty">VendingState</span> s) { state = s; }
}</div>` },
            { type: 'multiple-choice', prompt: 'In State pattern, when does the state change?',
              options: [{text:'Externally — by anyone who has a reference', code:false},{text:'Internally — each state decides which state to transition to', code:false},{text:'Never', code:false},{text:'Randomly', code:false}],
              correct: 1, explanation: 'States control their own transitions, keeping logic local.' },
            { type: 'true-false', statement: 'The Vending Machine\'s machine class itself ends up very small — just delegation.', correct: true, explanation: 'That\'s the point. Behavior lives in the state classes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Designs 2 ============== */
    {
      id: 'lld-u10', name: 'Unit 10 · Splitwise & More', description: 'Expense sharing, BookMyShow, Chess',
      lessons: [
        {
          id: 'lld-u10-l1', name: 'Splitwise — expense sharing', icon: '💸', xp: 30,
          challenges: [
            { type: 'concept', title: 'Modeling shared expenses', content: `<div class="code-block">Entities:
- <span class="ty">User</span>: id, name, balance map (per other user)
- <span class="ty">Group</span>: list of users
- <span class="ty">Expense</span>: amount, paidBy, splitAmong[], type
- <span class="ty">Split</span>: abstract — types: EqualSplit, ExactSplit, PercentageSplit
- <span class="ty">BalanceSheet</span>: tracks who owes whom

Pattern: Strategy for split types (Strategy pattern).
Key operation: settle balances — compute minimum transactions.</div>
<p><strong>Tricky bit:</strong> after many expenses, simplify "Alice owes Bob $10, Bob owes Carol $10" → "Alice owes Carol $10".</p>` },
            { type: 'multiple-choice', prompt: 'Equal / Exact / Percent splits are best modeled as:',
              options: [{text:'Three subclasses of a Split abstract class', code:false},{text:'Three enums', code:false},{text:'String types with if/else', code:false},{text:'JSON', code:false}],
              correct: 0, explanation: 'Each has its own validate/compute logic — Strategy pattern.' },
            { type: 'multiple-choice', prompt: 'For "minimize transactions to settle", a useful data structure:',
              options: [{text:'Stack', code:false},{text:'Two heaps (max-heap of creditors, max-heap of debtors)', code:false},{text:'Linked list', code:false},{text:'Hash set', code:false}],
              correct: 1, explanation: 'Match largest creditor with largest debtor, repeat — greedy with heaps.' },
            { type: 'true-false', statement: 'Splitwise lends itself well to discussing Strategy pattern AND a non-trivial algorithm.', correct: true, explanation: 'A favorite interview problem for that reason.' }
          ]
        },
        {
          id: 'lld-u10-l2', name: 'BookMyShow — ticket booking', icon: '🎟️', xp: 30,
          challenges: [
            { type: 'concept', title: 'Seat booking with concurrency', content: `<div class="code-block">Entities:
- <span class="ty">Movie</span>, <span class="ty">Theater</span>, <span class="ty">Show</span>, <span class="ty">Screen</span>
- <span class="ty">Seat</span>: row, col, type (gold/silver), state (Available/Reserved/Booked)
- <span class="ty">Booking</span>: user, show, seats[], payment, state
- <span class="ty">Payment</span> (Strategy: card, wallet, UPI)

Critical concurrency issue:
- Two users select the same seat — first to PAY wins
- Solution: timed RESERVATION (e.g., 5 min) when user picks seat
- If unpaid in 5 min → release back to AVAILABLE</div>` },
            { type: 'multiple-choice', prompt: 'Two users selected the same seat. The right design holds:',
              options: [{text:'A time-bounded reservation while user pays', code:false},{text:'First to click wins, ignore the other', code:false},{text:'Allow overbooking', code:false},{text:'Random pick', code:false}],
              correct: 0, explanation: 'Industry standard — reserve for N minutes, release on timeout.' },
            { type: 'true-false', statement: 'BookMyShow is a great example to discuss state diagrams (seat lifecycle) and concurrency.', correct: true, explanation: 'Both come up naturally — bring them up unprompted!' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Concurrency ============== */
    {
      id: 'lld-u11', name: 'Unit 11 · Concurrency in LLD', description: 'Thread-safety in your designs',
      lessons: [
        {
          id: 'lld-u11-l1', name: 'Concurrency patterns', icon: '🧵', xp: 25,
          challenges: [
            { type: 'concept', title: 'Race conditions & mitigations', content: `<div class="code-block"><span class="com">Mutation by multiple threads = trouble.</span>

Strategies (least → most isolation):
1. <span class="kw">synchronized</span> blocks / methods       (Java)
2. <span class="ty">ReentrantLock</span> / <span class="ty">ReadWriteLock</span>
3. Concurrent collections (<span class="ty">ConcurrentHashMap</span>)
4. Atomic types (<span class="ty">AtomicInteger</span>, <span class="ty">AtomicReference</span>)
5. Immutable objects (no shared mutation)
6. Message passing / actors (avoid shared state)</div>` },
            { type: 'multiple-choice', prompt: 'Cheapest way to make a counter thread-safe?',
              options: [{text:'Use AtomicInteger', code:false},{text:'Sync the whole class', code:false},{text:'Use volatile', code:false},{text:'Pretend it\'s safe', code:false}],
              correct: 0, explanation: 'AtomicInteger uses CAS — no locking, very fast.' },
            { type: 'multiple-choice', prompt: 'Two threads both call increment() on a counter. Without sync, result might be:',
              options: [{text:'Exactly 2', code:false},{text:'Could be 1 — both read 0, write 1', code:false},{text:'Always exactly 1', code:false},{text:'Random infinite', code:false}],
              correct: 1, explanation: 'Classic read-modify-write race.' },
            { type: 'true-false', statement: 'Immutability eliminates almost all concurrency bugs — at the cost of GC pressure.', correct: true, explanation: 'No shared mutation = no races. Functional style leverages this.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Interview Strategy ============== */
    {
      id: 'lld-u12', name: 'Unit 12 · LLD Interview Strategy', description: 'How to actually do well',
      lessons: [
        {
          id: 'lld-u12-l1', name: 'Step-by-step playbook', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'A repeatable LLD interview script', content: `<div class="code-block"><span class="com">1. Clarify (3-5 min)</span>
   Scope, users, MVP features, scale (rough), constraints

<span class="com">2. Identify entities (5 min)</span>
   List nouns from requirements; pick core ones

<span class="com">3. Draw class diagram (10 min)</span>
   Fields, methods, key relationships (inheritance, has-a)

<span class="com">4. Walk through key flows (10 min)</span>
   Sequence-diagram style: "user does X, this method calls that..."

<span class="com">5. Mention patterns (5 min)</span>
   "I\'d use Strategy here because pricing varies..."

<span class="com">6. Code skeleton (10 min)</span>
   Interfaces + key class signatures + 1-2 method bodies

<span class="com">7. Extensions / concurrency (5 min)</span>
   "How would I add feature Y?" / thread-safety</div>` },
            { type: 'reorder-code', prompt: 'Reorder the LLD interview steps.',
              lines: ['Clarify requirements', 'Identify entities', 'Draw class diagram', 'Walk through flows', 'Apply patterns', 'Code skeleton', 'Extensions / concurrency'],
              correctOrder: [0, 1, 2, 3, 4, 5, 6] },
            { type: 'multiple-choice', prompt: 'You\'re asked to "design a chess game". Best first move:',
              options: [{text:'Code Board class right away', code:false},{text:'Ask: 2-player only? Network? Time control? Variants?', code:false},{text:'Talk about chess theory', code:false}],
              correct: 1, explanation: 'Clarifying questions scope your design and impress.' },
            { type: 'true-false', statement: 'Spending 20% of time on clarifying questions + entities = HUGE return on the rest of the interview.', correct: true, explanation: 'Saves you from over-designing or missing key features.' },
            { type: 'multiple-choice', prompt: 'Common LLD mistake?',
              options: [{text:'Talking too much', code:false},{text:'Cramming patterns where they don\'t fit', code:false},{text:'Drawing diagrams', code:false},{text:'Asking questions', code:false}],
              correct: 1, explanation: 'Pattern-spam without justification is worse than no patterns. Use what fits, justify why.' }
          ]
        }
      ]
    }

  ]
});

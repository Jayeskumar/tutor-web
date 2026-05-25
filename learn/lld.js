LEARN('lld', {
  intro: 'Low-Level Design: classes, patterns, UML, and full walkthroughs of the most-asked LLD interview problems.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'lld-c1', title: 'What is LLD?', icon: '📐', sections: [
      { type: 'heading', text: 'Design, at the code level', level: 1 },
      { type: 'para', html: 'Software design interviews come in two flavors that test very different skills.' },

      { type: 'image', alt: 'lld vs hld', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Two altitudes of system design</text>
  <g font-family="Nunito">
    <rect x="30" y="50" width="260" height="140" rx="12" fill="#1cb0f6"/>
    <text x="160" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">High-Level Design (HLD)</text>
    <text x="160" y="105" text-anchor="middle" fill="white" font-size="11">Services · DBs · queues · caches</text>
    <text x="160" y="123" text-anchor="middle" fill="white" font-size="11">Scaling · throughput · latency</text>
    <text x="160" y="141" text-anchor="middle" fill="white" font-size="11">"Design Twitter at 1B users"</text>
    <text x="160" y="170" text-anchor="middle" fill="white" font-style="italic" font-size="11">Focus: architecture &amp; scale</text>

    <rect x="310" y="50" width="260" height="140" rx="12" fill="#37474f"/>
    <text x="440" y="80" text-anchor="middle" fill="white" font-weight="bold" font-size="16">Low-Level Design (LLD)</text>
    <text x="440" y="105" text-anchor="middle" fill="white" font-size="11">Classes · methods · relationships</text>
    <text x="440" y="123" text-anchor="middle" fill="white" font-size="11">SOLID · design patterns</text>
    <text x="440" y="141" text-anchor="middle" fill="white" font-size="11">"Design a Parking Lot in code"</text>
    <text x="440" y="170" text-anchor="middle" fill="white" font-style="italic" font-size="11">Focus: OOP &amp; code structure</text>
  </g>
</svg>` },

      { type: 'heading', text: 'What LLD interviewers grade', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Clarifying questions</strong> — scope before designing',
        '<strong>Entity identification</strong> — turn requirements into classes',
        '<strong>Class diagrams</strong> — fields, methods, relationships',
        '<strong>Pattern usage</strong> — picking and justifying patterns',
        '<strong>SOLID adherence</strong> — clean responsibilities',
        '<strong>Extensibility</strong> — "what if we add X?"',
        '<strong>Concurrency thinking</strong> — race conditions where relevant'
      ]},

      { type: 'callout', kind: 'tip', html: 'A great LLD interview produces: a clear class diagram, working skeleton code, named patterns with justifications, and one extension discussion. Aim for all four.' }
    ]},

    /* ============== CH 2 — OOP for design ============== */
    { id: 'lld-c2', title: 'OOP Pillars (Design lens)', icon: '🧱', sections: [
      { type: 'heading', text: 'The four classics — applied', level: 1 },
      { type: 'para', html: 'You probably know the pillars. Here\'s how each shows up in design decisions:' },

      { type: 'image', alt: 'oop pillars', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="40" width="130" height="130" rx="12" fill="#37474f"/>
    <text x="85" y="75" text-anchor="middle" fill="white">Encapsulation</text>
    <text x="85" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Private fields,</text>
    <text x="85" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">public methods.</text>
    <text x="85" y="140" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Protect invariants.</text>

    <rect x="170" y="40" width="130" height="130" rx="12" fill="#37474f"/>
    <text x="235" y="75" text-anchor="middle" fill="white">Inheritance</text>
    <text x="235" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Is-a relationships.</text>
    <text x="235" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Use sparingly —</text>
    <text x="235" y="140" text-anchor="middle" fill="white" font-size="11" font-weight="normal">prefer composition.</text>

    <rect x="320" y="40" width="130" height="130" rx="12" fill="#37474f"/>
    <text x="385" y="75" text-anchor="middle" fill="white">Polymorphism</text>
    <text x="385" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Same call,</text>
    <text x="385" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">different behavior.</text>
    <text x="385" y="140" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Heart of design.</text>

    <rect x="470" y="40" width="130" height="130" rx="12" fill="#37474f"/>
    <text x="535" y="75" text-anchor="middle" fill="white">Abstraction</text>
    <text x="535" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Expose WHAT,</text>
    <text x="535" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">hide HOW.</text>
    <text x="535" y="140" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Interfaces.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Composition over inheritance', level: 2 },
      { type: 'para', html: 'Inheritance creates tight coupling. Composition lets you swap parts and combine behaviors at runtime.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// BAD: rigid hierarchy</span>
<span class="kw">class</span> <span class="ty">FlyingDuck</span> <span class="kw">extends</span> <span class="ty">Duck</span> { ... }
<span class="kw">class</span> <span class="ty">RubberDuck</span> <span class="kw">extends</span> <span class="ty">Duck</span> { ... }   <span class="com">// can\'t fly — what to do?</span>

<span class="com">// GOOD: composition</span>
<span class="kw">class</span> <span class="ty">Duck</span> {
  <span class="kw">private</span> <span class="ty">FlyBehavior</span> fly;          <span class="com">// composed — can be null/changed</span>
  <span class="kw">private</span> <span class="ty">QuackBehavior</span> quack;
  <span class="kw">public void</span> <span class="fn">performFly</span>() { <span class="kw">if</span> (fly != <span class="kw">null</span>) fly.<span class="fn">fly</span>(); }
}</div>` },

      { type: 'callout', kind: 'tip', html: 'Real-world rule of thumb: <strong>use inheritance only if the child can stand in for the parent without surprise</strong> (Liskov). Otherwise, compose.' }
    ]},

    /* ============== CH 3 — SOLID ============== */
    { id: 'lld-c3', title: 'SOLID Principles', icon: '🧪', sections: [
      { type: 'heading', text: 'Five rules that shape good design', level: 1 },

      { type: 'image', alt: 'solid', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">SOLID</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="110" height="140" rx="10" fill="#7c4dff"/>
    <text x="75" y="80" text-anchor="middle" fill="white" font-size="24" font-weight="bold">S</text>
    <text x="75" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Single</text>
    <text x="75" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Responsibility</text>
    <text x="75" y="150" text-anchor="middle" fill="white" font-size="10">One reason</text>
    <text x="75" y="163" text-anchor="middle" fill="white" font-size="10">to change</text>

    <rect x="135" y="50" width="110" height="140" rx="10" fill="#1cb0f6"/>
    <text x="190" y="80" text-anchor="middle" fill="white" font-size="24" font-weight="bold">O</text>
    <text x="190" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Open / Closed</text>
    <text x="190" y="135" text-anchor="middle" fill="white" font-size="10">Open to ext.</text>
    <text x="190" y="148" text-anchor="middle" fill="white" font-size="10">Closed to mod.</text>

    <rect x="250" y="50" width="110" height="140" rx="10" fill="#58cc02"/>
    <text x="305" y="80" text-anchor="middle" fill="white" font-size="24" font-weight="bold">L</text>
    <text x="305" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Liskov</text>
    <text x="305" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Substitution</text>
    <text x="305" y="150" text-anchor="middle" fill="white" font-size="10">Subtype = base</text>

    <rect x="365" y="50" width="110" height="140" rx="10" fill="#ff9600"/>
    <text x="420" y="80" text-anchor="middle" fill="white" font-size="24" font-weight="bold">I</text>
    <text x="420" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Interface</text>
    <text x="420" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Segregation</text>
    <text x="420" y="150" text-anchor="middle" fill="white" font-size="10">Small focused</text>
    <text x="420" y="163" text-anchor="middle" fill="white" font-size="10">interfaces</text>

    <rect x="480" y="50" width="110" height="140" rx="10" fill="#e53935"/>
    <text x="535" y="80" text-anchor="middle" fill="white" font-size="24" font-weight="bold">D</text>
    <text x="535" y="110" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Dependency</text>
    <text x="535" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="bold">Inversion</text>
    <text x="535" y="150" text-anchor="middle" fill="white" font-size="10">Depend on</text>
    <text x="535" y="163" text-anchor="middle" fill="white" font-size="10">abstractions</text>
  </g>
</svg>` },

      { type: 'heading', text: 'S — Single Responsibility', level: 2 },
      { type: 'para', html: 'A class should have <strong>one reason to change</strong>. If two team members might edit a class for unrelated reasons, split it.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// BAD: business logic + DB + email mixed</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">void</span> <span class="fn">create</span>(<span class="ty">User</span> u) { ... }
  <span class="kw">void</span> <span class="fn">saveToDb</span>(<span class="ty">User</span> u) { ... }
  <span class="kw">void</span> <span class="fn">sendWelcomeEmail</span>(<span class="ty">User</span> u) { ... }
}

<span class="com">// GOOD: separated by concern</span>
<span class="kw">class</span> <span class="ty">UserService</span> { ... }
<span class="kw">class</span> <span class="ty">UserRepository</span> { ... }
<span class="kw">class</span> <span class="ty">EmailService</span> { ... }` },

      { type: 'heading', text: 'O — Open / Closed', level: 2 },
      { type: 'para', html: 'Open for extension, closed for modification. Adding a new shape, payment method, or strategy shouldn\'t require editing existing code.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// BAD: instanceof chain grows with every new type</span>
<span class="kw">double</span> <span class="fn">area</span>(<span class="ty">Shape</span> s) {
  <span class="kw">if</span> (s <span class="kw">instanceof</span> <span class="ty">Circle</span>) ...
  <span class="kw">else if</span> (s <span class="kw">instanceof</span> <span class="ty">Square</span>) ...
}

<span class="com">// GOOD: polymorphism</span>
<span class="kw">abstract class</span> <span class="ty">Shape</span> { <span class="kw">abstract</span> <span class="ty">double</span> <span class="fn">area</span>(); }
<span class="com">// Adding a new shape = new class, no edits to existing code</span>` },

      { type: 'heading', text: 'L — Liskov Substitution', level: 2 },
      { type: 'para', html: 'A child class must work everywhere its parent works <em>without surprise</em>. The classic counterexample: Square extends Rectangle.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Violates Liskov!</span>
<span class="kw">class</span> <span class="ty">Square</span> <span class="kw">extends</span> <span class="ty">Rectangle</span> {
  <span class="kw">void</span> <span class="fn">setWidth</span>(<span class="ty">double</span> w) { width = height = w; }   <span class="com">// surprise!</span>
}
<span class="com">// Code expecting Rectangle.setWidth() to only change width is now broken.</span>` },

      { type: 'heading', text: 'I — Interface Segregation', level: 2 },
      { type: 'para', html: 'Many small focused interfaces beat one fat interface. Clients shouldn\'t be forced to implement methods they don\'t use.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// BAD: one fat interface</span>
<span class="kw">interface</span> <span class="ty">Worker</span> {
  <span class="kw">void</span> <span class="fn">work</span>();
  <span class="kw">void</span> <span class="fn">eat</span>();    <span class="com">// robots can\'t eat — forced to noop or throw</span>
  <span class="kw">void</span> <span class="fn">sleep</span>();  <span class="com">// same</span>
}

<span class="com">// GOOD: separate interfaces</span>
<span class="kw">interface</span> <span class="ty">Workable</span> { <span class="kw">void</span> <span class="fn">work</span>(); }
<span class="kw">interface</span> <span class="ty">Eater</span>    { <span class="kw">void</span> <span class="fn">eat</span>(); }
<span class="kw">class</span> <span class="ty">Human</span>  <span class="kw">implements</span> <span class="ty">Workable</span>, <span class="ty">Eater</span> { ... }
<span class="kw">class</span> <span class="ty">Robot</span>  <span class="kw">implements</span> <span class="ty">Workable</span> { ... }` },

      { type: 'heading', text: 'D — Dependency Inversion', level: 2 },
      { type: 'para', html: 'Depend on abstractions, not concretions. Inject dependencies from outside instead of constructing them inside.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// BAD: hard-coded dep</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">private</span> <span class="ty">MySQLDB</span> db = <span class="kw">new</span> <span class="ty">MySQLDB</span>();   <span class="com">// can\'t test, can\'t swap</span>
}

<span class="com">// GOOD: inject via interface</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
  <span class="kw">private final</span> <span class="ty">Database</span> db;   <span class="com">// interface</span>
  <span class="kw">public</span> <span class="fn">UserService</span>(<span class="ty">Database</span> db) { <span class="kw">this</span>.db = db; }
}` },
      { type: 'callout', kind: 'success', html: 'SOLID code is testable, extensible, and a joy to refactor. Pattern-matching these principles in interviews wins points.' }
    ]},

    /* ============== CH 4 — UML ============== */
    { id: 'lld-c4', title: 'UML Quick Guide', icon: '📊', sections: [
      { type: 'heading', text: 'The visual language of design', level: 1 },
      { type: 'para', html: 'You don\'t need every UML detail — but knowing class, sequence, and state diagrams covers 95% of interview situations.' },

      { type: 'heading', text: 'Class diagram', level: 2 },
      { type: 'image', alt: 'class diagram', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Class diagram anatomy</text>
  <g font-family="JetBrains Mono">
    <!-- Class box -->
    <rect x="80" y="50" width="180" height="100" fill="white" stroke="#37474f" stroke-width="2"/>
    <line x1="80" y1="78" x2="260" y2="78" stroke="#37474f"/>
    <line x1="80" y1="118" x2="260" y2="118" stroke="#37474f"/>
    <text x="170" y="70" text-anchor="middle" font-weight="bold" font-family="Nunito">Account</text>
    <text x="90" y="93" font-size="11">- balance: double</text>
    <text x="90" y="108" font-size="11">+ owner: String</text>
    <text x="90" y="133" font-size="11">+ deposit(amt): void</text>
    <text x="90" y="146" font-size="11">+ withdraw(amt): void</text>

    <text x="280" y="70" font-family="Nunito" font-size="11" fill="#666">Top: name</text>
    <text x="280" y="100" font-family="Nunito" font-size="11" fill="#666">Middle: fields</text>
    <text x="280" y="135" font-family="Nunito" font-size="11" fill="#666">Bottom: methods</text>
    <text x="280" y="160" font-family="Nunito" font-size="11" fill="#666">- private  + public  # protected</text>

    <!-- Relationships -->
    <text x="80" y="195" font-family="Nunito" font-weight="bold" font-size="13">Relationships:</text>
    <line x1="80" y1="215" x2="170" y2="215" stroke="#37474f" stroke-width="2"/>
    <text x="180" y="219" font-family="Nunito" font-size="11">Association (uses)</text>

    <line x1="80" y1="240" x2="160" y2="240" stroke="#37474f" stroke-width="2"/>
    <polygon points="160,234 175,240 160,246" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="180" y="244" font-family="Nunito" font-size="11">Inheritance (is-a)</text>

    <line x1="80" y1="265" x2="160" y2="265" stroke="#37474f" stroke-width="2"/>
    <polygon points="80,265 90,260 100,265 90,270" fill="#37474f"/>
    <text x="180" y="269" font-family="Nunito" font-size="11">Composition (strong has-a)</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Composition vs Aggregation', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Composition</strong> ◆ — strong "has-a"; child cannot exist without parent (House → Room)',
        '<strong>Aggregation</strong> ◇ — weak "has-a"; child can outlive parent (Team → Players)',
        '<strong>Association</strong> — generic relationship between classes',
        '<strong>Inheritance</strong> △ — "is-a"; child specializes parent'
      ]},

      { type: 'heading', text: 'Sequence diagram', level: 2 },
      { type: 'para', html: 'Shows how objects talk over time. Useful for explaining a key use case.' },
      { type: 'code', lang: 'text', code:
`User → OrderService.placeOrder()
       OrderService → InventoryService.reserve()
       InventoryService → DB.update()
       InventoryService → OrderService (ok)
       OrderService → PaymentService.charge()
       PaymentService → OrderService (paid)
       OrderService → User (orderId)` },

      { type: 'heading', text: 'State diagram', level: 2 },
      { type: 'para', html: 'For entities with distinct lifecycle stages — orders, documents, sessions.' },
      { type: 'code', lang: 'text', code:
`Order:  Created → Paid → Shipped → Delivered
              ↓
         Cancelled (from any state before Delivered)` },
      { type: 'callout', kind: 'tip', html: 'You don\'t need precise UML — clean boxes-and-arrows that communicate the intent are enough. Draw on a whiteboard or shared doc, narrate as you go.' }
    ]},

    /* ============== CH 5 — Creational ============== */
    { id: 'lld-c5', title: 'Creational Patterns', icon: '🏭', sections: [
      { type: 'heading', text: 'How objects come into existence', level: 1 },

      { type: 'heading', text: 'Singleton', level: 2 },
      { type: 'para', html: 'One instance, globally accessible. Use sparingly — singletons hide dependencies and complicate tests.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Best Java implementation: enum singleton</span>
<span class="kw">public enum</span> <span class="ty">Logger</span> {
  INSTANCE;
  <span class="kw">public void</span> <span class="fn">log</span>(<span class="ty">String</span> msg) { ... }
}
<span class="ty">Logger</span>.INSTANCE.<span class="fn">log</span>(<span class="str">"hi"</span>);

<span class="com">// Thread-safe, serialization-safe, reflection-safe by design</span>` },

      { type: 'heading', text: 'Factory Method', level: 2 },
      { type: 'para', html: 'A method that decides which subclass to instantiate based on input.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">ShapeFactory</span> {
  <span class="kw">public static</span> <span class="ty">Shape</span> <span class="fn">create</span>(<span class="ty">String</span> type) {
    <span class="kw">return switch</span> (type) {
      <span class="kw">case</span> <span class="str">"circle"</span> -&gt; <span class="kw">new</span> <span class="ty">Circle</span>();
      <span class="kw">case</span> <span class="str">"square"</span> -&gt; <span class="kw">new</span> <span class="ty">Square</span>();
      <span class="kw">default</span> -&gt; <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(type);
    };
  }
}` },

      { type: 'heading', text: 'Abstract Factory', level: 2 },
      { type: 'para', html: 'Factory of factories — produces FAMILIES of related objects (e.g., Mac UI vs Windows UI components).' },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">UIFactory</span> {
  <span class="ty">Button</span> <span class="fn">createButton</span>();
  <span class="ty">Checkbox</span> <span class="fn">createCheckbox</span>();
}
<span class="kw">class</span> <span class="ty">MacFactory</span> <span class="kw">implements</span> <span class="ty">UIFactory</span> { ... }
<span class="kw">class</span> <span class="ty">WinFactory</span> <span class="kw">implements</span> <span class="ty">UIFactory</span> { ... }` },

      { type: 'heading', text: 'Builder', level: 2 },
      { type: 'para', html: 'For complex objects with many optional fields. Avoids "telescoping constructor hell".' },
      { type: 'code', lang: 'java', code:
`<span class="ty">Pizza</span> p = <span class="kw">new</span> <span class="ty">Pizza</span>.<span class="ty">Builder</span>()
    .<span class="fn">size</span>(<span class="num">12</span>)
    .<span class="fn">cheese</span>(<span class="kw">true</span>)
    .<span class="fn">topping</span>(<span class="str">"olives"</span>)
    .<span class="fn">topping</span>(<span class="str">"mushrooms"</span>)
    .<span class="fn">crust</span>(<span class="str">"thin"</span>)
    .<span class="fn">build</span>();</div>` },
      { type: 'callout', kind: 'tip', html: 'Java\'s <code>StringBuilder</code>, <code>Stream.Builder</code>, and Lombok\'s <code>@Builder</code> all use the Builder pattern.' },

      { type: 'heading', text: 'Prototype', level: 2 },
      { type: 'para', html: 'Clone existing objects instead of creating from scratch. Useful when construction is expensive.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">Document</span> <span class="kw">implements</span> <span class="ty">Cloneable</span> {
  @<span class="ty">Override</span>
  <span class="kw">public</span> <span class="ty">Document</span> <span class="fn">clone</span>() {
    <span class="kw">return new</span> <span class="ty">Document</span>(<span class="kw">this</span>);
  }
}</div>` }
    ]},

    /* ============== CH 6 — Structural ============== */
    { id: 'lld-c6', title: 'Structural Patterns', icon: '🔗', sections: [
      { type: 'heading', text: 'Composing classes & objects', level: 1 },

      { type: 'heading', text: 'Adapter — fit a square peg into a round hole', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Legacy 3rd-party class with awkward API</span>
<span class="kw">class</span> <span class="ty">LegacyPrinter</span> {
  <span class="kw">public void</span> <span class="fn">oldPrint</span>(<span class="ty">byte</span>[] data) { ... }
}

<span class="com">// Our clean interface</span>
<span class="kw">interface</span> <span class="ty">Printer</span> { <span class="kw">void</span> <span class="fn">print</span>(<span class="ty">String</span> text); }

<span class="com">// Adapter</span>
<span class="kw">class</span> <span class="ty">LegacyPrinterAdapter</span> <span class="kw">implements</span> <span class="ty">Printer</span> {
  <span class="kw">private final</span> <span class="ty">LegacyPrinter</span> legacy = <span class="kw">new</span> <span class="ty">LegacyPrinter</span>();
  <span class="kw">public void</span> <span class="fn">print</span>(<span class="ty">String</span> text) {
    legacy.<span class="fn">oldPrint</span>(text.<span class="fn">getBytes</span>());
  }
}` },

      { type: 'heading', text: 'Decorator — wrap to add behavior', level: 2 },
      { type: 'para', html: 'Alternative to subclassing. Combine behaviors at runtime by wrapping.' },
      { type: 'code', lang: 'java', code:
`<span class="ty">Coffee</span> coffee = <span class="kw">new</span> <span class="ty">Espresso</span>();
coffee = <span class="kw">new</span> <span class="ty">MilkDecorator</span>(coffee);
coffee = <span class="kw">new</span> <span class="ty">SugarDecorator</span>(coffee);
coffee.<span class="fn">cost</span>();   <span class="com">// espresso + milk + sugar</span>` },
      { type: 'callout', kind: 'info', html: 'Java\'s I/O streams use Decorator extensively: <code>new BufferedReader(new InputStreamReader(new FileInputStream(...)))</code> stacks behaviors.' },

      { type: 'heading', text: 'Facade — one door to a complex room', level: 2 },
      { type: 'para', html: 'Provide a simple interface that hides a complex subsystem.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// Simplifies access to a complex movie system</span>
<span class="kw">class</span> <span class="ty">HomeTheaterFacade</span> {
  <span class="kw">public void</span> <span class="fn">watchMovie</span>(<span class="ty">String</span> title) {
    projector.<span class="fn">on</span>();
    screen.<span class="fn">down</span>();
    lights.<span class="fn">dim</span>(<span class="num">10</span>);
    soundSystem.<span class="fn">on</span>();
    streamingBox.<span class="fn">play</span>(title);
  }
}</div>` },

      { type: 'heading', text: 'Proxy — stand in for the real thing', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Virtual proxy</strong>: lazy initialization of expensive objects',
        '<strong>Protection proxy</strong>: access control',
        '<strong>Caching proxy</strong>: store recent results',
        '<strong>Remote proxy</strong>: stub for an object on another machine'
      ]},
      { type: 'callout', kind: 'info', html: 'Spring AOP, Hibernate lazy loading, and RPC stubs all use Proxy under the hood.' },

      { type: 'heading', text: 'Composite — tree structures', level: 2 },
      { type: 'para', html: 'Treat individual objects and groups of objects uniformly.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">FileSystemItem</span> {
  <span class="kw">long</span> <span class="fn">size</span>();
}
<span class="kw">class</span> <span class="ty">File</span> <span class="kw">implements</span> <span class="ty">FileSystemItem</span> {     <span class="com">// leaf</span>
  <span class="kw">public long</span> <span class="fn">size</span>() { <span class="kw">return</span> bytes; }
}
<span class="kw">class</span> <span class="ty">Folder</span> <span class="kw">implements</span> <span class="ty">FileSystemItem</span> {   <span class="com">// composite</span>
  <span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">FileSystemItem</span>&gt; children;
  <span class="kw">public long</span> <span class="fn">size</span>() {
    <span class="kw">return</span> children.<span class="fn">stream</span>().<span class="fn">mapToLong</span>(<span class="ty">FileSystemItem</span>::size).<span class="fn">sum</span>();
  }
}` }
    ]},

    /* ============== CH 7 — Behavioral ============== */
    { id: 'lld-c7', title: 'Behavioral Patterns', icon: '🎬', sections: [
      { type: 'heading', text: 'How objects communicate', level: 1 },

      { type: 'heading', text: 'Strategy — pluggable algorithms', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">PaymentStrategy</span> { <span class="kw">void</span> <span class="fn">pay</span>(<span class="ty">int</span> amount); }
<span class="kw">class</span> <span class="ty">CreditCardPay</span> <span class="kw">implements</span> <span class="ty">PaymentStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">PayPalPay</span>     <span class="kw">implements</span> <span class="ty">PaymentStrategy</span> { ... }

<span class="kw">class</span> <span class="ty">Cart</span> {
  <span class="kw">private</span> <span class="ty">PaymentStrategy</span> strategy;   <span class="com">// composed</span>
  <span class="kw">public void</span> <span class="fn">setStrategy</span>(<span class="ty">PaymentStrategy</span> s) { strategy = s; }
  <span class="kw">public void</span> <span class="fn">checkout</span>() { strategy.<span class="fn">pay</span>(total); }
}` },

      { type: 'heading', text: 'Observer — pub/sub', level: 2 },
      { type: 'para', html: 'Publishers notify many subscribers when state changes. Used for events, UI updates, message buses.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">Observer</span> { <span class="kw">void</span> <span class="fn">update</span>(<span class="ty">Event</span> e); }

<span class="kw">class</span> <span class="ty">EventBus</span> {
  <span class="kw">private final</span> <span class="ty">List</span>&lt;<span class="ty">Observer</span>&gt; subs = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">public void</span> <span class="fn">subscribe</span>(<span class="ty">Observer</span> o) { subs.<span class="fn">add</span>(o); }
  <span class="kw">public void</span> <span class="fn">publish</span>(<span class="ty">Event</span> e) {
    subs.<span class="fn">forEach</span>(o -&gt; o.<span class="fn">update</span>(e));
  }
}` },

      { type: 'heading', text: 'Command — actions as objects', level: 2 },
      { type: 'para', html: 'Encapsulate a request as an object. Enables undo/redo, queueing, logging actions.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">Command</span> { <span class="kw">void</span> <span class="fn">execute</span>(); <span class="kw">void</span> <span class="fn">undo</span>(); }

<span class="kw">class</span> <span class="ty">TypeCommand</span> <span class="kw">implements</span> <span class="ty">Command</span> {
  <span class="kw">private final</span> <span class="ty">Editor</span> editor;
  <span class="kw">private final</span> <span class="ty">String</span> text;
  <span class="kw">public void</span> <span class="fn">execute</span>() { editor.<span class="fn">insert</span>(text); }
  <span class="kw">public void</span> <span class="fn">undo</span>()    { editor.<span class="fn">deleteLast</span>(text.length()); }
}

<span class="kw">class</span> <span class="ty">EditorWithHistory</span> {
  <span class="kw">private final</span> <span class="ty">Deque</span>&lt;<span class="ty">Command</span>&gt; history = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="kw">public void</span> <span class="fn">execute</span>(<span class="ty">Command</span> c) { c.<span class="fn">execute</span>(); history.<span class="fn">push</span>(c); }
  <span class="kw">public void</span> <span class="fn">undo</span>() { <span class="kw">if</span> (!history.<span class="fn">isEmpty</span>()) history.<span class="fn">pop</span>().<span class="fn">undo</span>(); }
}` },

      { type: 'heading', text: 'State — behavior per state', level: 2 },
      { type: 'para', html: 'When an object\'s behavior changes based on internal state — instead of huge if/switch chains, give each state its own class.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">VendingState</span> {
  <span class="kw">void</span> <span class="fn">insertCoin</span>(<span class="ty">VendingMachine</span> m, <span class="ty">Coin</span> c);
  <span class="kw">void</span> <span class="fn">selectProduct</span>(<span class="ty">VendingMachine</span> m, <span class="ty">String</span> code);
}

<span class="kw">class</span> <span class="ty">IdleState</span> <span class="kw">implements</span> <span class="ty">VendingState</span> {
  <span class="kw">public void</span> <span class="fn">insertCoin</span>(<span class="ty">VendingMachine</span> m, <span class="ty">Coin</span> c) {
    m.<span class="fn">addBalance</span>(c.<span class="fn">value</span>());
    m.<span class="fn">setState</span>(<span class="kw">new</span> <span class="ty">HasMoneyState</span>());
  }
  <span class="kw">public void</span> <span class="fn">selectProduct</span>(<span class="ty">VendingMachine</span> m, <span class="ty">String</span> code) {
    <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Insert money first!"</span>);
  }
}</div>` },

      { type: 'heading', text: 'Template Method — algorithm skeleton', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">abstract class</span> <span class="ty">DataProcessor</span> {
  <span class="kw">public final void</span> <span class="fn">process</span>() {       <span class="com">// the template</span>
    <span class="fn">load</span>();
    <span class="fn">validate</span>();
    <span class="fn">transform</span>();    <span class="com">// abstract — subclass fills in</span>
    <span class="fn">save</span>();
  }
  <span class="kw">protected abstract void</span> <span class="fn">transform</span>();
  <span class="kw">protected</span> <span class="kw">void</span> <span class="fn">validate</span>() { ... }  <span class="com">// default impl</span>
}</div>` },

      { type: 'heading', text: 'Iterator — uniform traversal', level: 2 },
      { type: 'para', html: 'Provide a way to access elements of a collection without exposing its internals. Java\'s for-each loop uses Iterator.' }
    ]},

    /* ============== CH 8 — Parking Lot ============== */
    { id: 'lld-c8', title: 'Design: Parking Lot', icon: '🅿️', sections: [
      { type: 'heading', text: 'The most-asked LLD problem', level: 1 },
      { type: 'para', html: 'A parking lot has many entities and natural pattern opportunities — a complete tour of LLD thinking in one problem.' },

      { type: 'heading', text: '1. Clarifying questions', level: 2 },
      { type: 'list', kind: 'check', items: [
        'How many floors / spots?',
        'Different vehicle types (car, bike, truck, EV)?',
        'Different spot types matching them?',
        'How is parking priced (hourly, flat)?',
        'Payment methods (cash, card, app)?',
        'Multiple entry / exit gates?'
      ]},

      { type: 'heading', text: '2. Core entities', level: 2 },
      { type: 'image', alt: 'parking lot classes', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Parking Lot class diagram (simplified)</text>
  <g font-family="JetBrains Mono" font-size="11">
    <rect x="220" y="40" width="140" height="40" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="290" y="60" text-anchor="middle" font-weight="bold" font-family="Nunito">ParkingLot</text>
    <text x="290" y="75" text-anchor="middle">- floors</text>

    <line x1="290" y1="80" x2="290" y2="110" stroke="#37474f"/>
    <polygon points="284,110 290,98 296,110" fill="#37474f"/>

    <rect x="220" y="110" width="140" height="40" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="290" y="130" text-anchor="middle" font-weight="bold" font-family="Nunito">ParkingFloor</text>
    <text x="290" y="145" text-anchor="middle">- spots</text>

    <line x1="290" y1="150" x2="290" y2="180" stroke="#37474f"/>
    <polygon points="284,180 290,168 296,180" fill="#37474f"/>

    <rect x="220" y="180" width="140" height="40" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="290" y="200" text-anchor="middle" font-weight="bold" font-family="Nunito">ParkingSpot</text>
    <text x="290" y="215" text-anchor="middle">+ type · occupied</text>

    <rect x="50" y="180" width="140" height="40" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="120" y="200" text-anchor="middle" font-weight="bold" font-family="Nunito">Vehicle</text>
    <text x="120" y="215" text-anchor="middle">+ type · plate</text>
    <line x1="190" y1="200" x2="220" y2="200" stroke="#37474f" stroke-width="2"/>

    <rect x="400" y="180" width="160" height="40" fill="white" stroke="#37474f" stroke-width="2"/>
    <text x="480" y="200" text-anchor="middle" font-weight="bold" font-family="Nunito">Ticket</text>
    <text x="480" y="215" text-anchor="middle">+ vehicle · spot · entry</text>
  </g>
  <text x="300" y="265" text-anchor="middle" font-size="11" fill="#666" font-family="Nunito">Vehicle and Spot have type hierarchies (Car, Bike; Compact, Large, EV...)</text>
</svg>` },

      { type: 'heading', text: '3. Skeleton code', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">abstract class</span> <span class="ty">Vehicle</span> {
  <span class="kw">protected final</span> <span class="ty">String</span> licensePlate;
  <span class="kw">public abstract</span> <span class="ty">VehicleType</span> <span class="fn">getType</span>();
}
<span class="kw">class</span> <span class="ty">Car</span>   <span class="kw">extends</span> <span class="ty">Vehicle</span> { ... }
<span class="kw">class</span> <span class="ty">Bike</span>  <span class="kw">extends</span> <span class="ty">Vehicle</span> { ... }
<span class="kw">class</span> <span class="ty">Truck</span> <span class="kw">extends</span> <span class="ty">Vehicle</span> { ... }

<span class="kw">class</span> <span class="ty">ParkingSpot</span> {
  <span class="kw">private final</span> <span class="ty">SpotType</span> type;
  <span class="kw">private</span> <span class="ty">Vehicle</span> vehicle;   <span class="com">// null if empty</span>
  <span class="kw">public boolean</span> <span class="fn">canFit</span>(<span class="ty">Vehicle</span> v) { ... }
  <span class="kw">public synchronized boolean</span> <span class="fn">assign</span>(<span class="ty">Vehicle</span> v) {
    <span class="kw">if</span> (vehicle != <span class="kw">null</span>) <span class="kw">return false</span>;
    vehicle = v;
    <span class="kw">return true</span>;
  }
  <span class="kw">public void</span> <span class="fn">release</span>() { vehicle = <span class="kw">null</span>; }
}

<span class="kw">interface</span> <span class="ty">PricingStrategy</span> {     <span class="com">// Strategy pattern!</span>
  <span class="kw">double</span> <span class="fn">price</span>(<span class="ty">Ticket</span> t);
}` },

      { type: 'heading', text: '4. Patterns to mention', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Strategy</strong> for PricingStrategy (hourly vs flat-rate)',
        '<strong>Factory</strong> for creating Vehicle / Spot types',
        '<strong>Singleton</strong> for the ParkingLot itself (with caveats)',
        '<strong>Observer</strong> if you want display boards that update on changes',
        '<strong>State</strong> for gate status'
      ]},

      { type: 'heading', text: '5. Concurrency consideration', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Two cars approaching the last spot simultaneously — without synchronization, both could think they got it. Lock the spot assignment, or use atomic compare-and-set.' }
    ]},

    /* ============== CH 9 — Elevator ============== */
    { id: 'lld-c9', title: 'Design: Elevator System', icon: '🛗', sections: [
      { type: 'heading', text: 'Multiple elevators, smart scheduling', level: 1 },

      { type: 'heading', text: 'Entities', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="ty">Building</span>          — has many ElevatorCars + ElevatorController
<span class="ty">ElevatorCar</span>       — id, currentFloor, direction, state, requests
<span class="ty">ElevatorController</span> — receives external requests, dispatches to cars
<span class="ty">Request</span>           — source floor, destination floor (or just direction)
<span class="ty">Floor</span>             — has up/down call buttons
<span class="ty">ElevatorState</span>     — Idle, MovingUp, MovingDown, DoorsOpen, Maintenance` },

      { type: 'heading', text: 'Where the patterns fit', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Strategy</strong> for scheduling: FCFS, SCAN/elevator algorithm, LOOK',
        '<strong>State</strong> for ElevatorCar (each state knows how to handle events)',
        '<strong>Observer</strong> for floor displays (subscribe to elevator position)',
        '<strong>Command</strong> for queued requests'
      ]},

      { type: 'heading', text: 'Skeleton', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">SchedulingStrategy</span> {
  <span class="ty">ElevatorCar</span> <span class="fn">pickElevator</span>(<span class="ty">List</span>&lt;<span class="ty">ElevatorCar</span>&gt; cars, <span class="ty">Request</span> r);
}

<span class="kw">class</span> <span class="ty">ElevatorController</span> {
  <span class="kw">private final</span> <span class="ty">List</span>&lt;<span class="ty">ElevatorCar</span>&gt; cars;
  <span class="kw">private</span> <span class="ty">SchedulingStrategy</span> strategy;

  <span class="kw">public void</span> <span class="fn">handleRequest</span>(<span class="ty">Request</span> r) {
    <span class="ty">ElevatorCar</span> car = strategy.<span class="fn">pickElevator</span>(cars, r);
    car.<span class="fn">addStop</span>(r);
  }
}` },
      { type: 'callout', kind: 'tip', html: 'Mention that real-world elevators balance multiple objectives: wait time, energy, fairness. Bringing this up shows depth.' }
    ]},

    /* ============== CH 10 — Vending Machine ============== */
    { id: 'lld-c10', title: 'Design: Vending Machine', icon: '🥤', sections: [
      { type: 'heading', text: 'The classic State-pattern problem', level: 1 },
      { type: 'para', html: 'A vending machine\'s behavior depends on its internal state. Each state handles events differently. This is the textbook use case for the State pattern.' },

      { type: 'heading', text: 'State diagram', level: 2 },
      { type: 'image', alt: 'vending states', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Vending Machine — state machine</text>
  <g font-family="Nunito">
    <ellipse cx="100" cy="120" rx="60" ry="36" fill="#37474f"/>
    <text x="100" y="118" text-anchor="middle" fill="white" font-weight="bold">Idle</text>
    <text x="100" y="135" text-anchor="middle" fill="white" font-size="9">no money</text>

    <ellipse cx="290" cy="120" rx="70" ry="36" fill="#1cb0f6"/>
    <text x="290" y="118" text-anchor="middle" fill="white" font-weight="bold">HasMoney</text>
    <text x="290" y="135" text-anchor="middle" fill="white" font-size="9">accepting selection</text>

    <ellipse cx="490" cy="120" rx="60" ry="36" fill="#58cc02"/>
    <text x="490" y="118" text-anchor="middle" fill="white" font-weight="bold">Dispensing</text>
    <text x="490" y="135" text-anchor="middle" fill="white" font-size="9">giving product</text>

    <line x1="160" y1="120" x2="220" y2="120" stroke="#666" stroke-width="2" marker-end="url(#a1)"/>
    <text x="190" y="112" text-anchor="middle" font-size="10" fill="#666">insertCoin</text>

    <line x1="360" y1="120" x2="430" y2="120" stroke="#666" stroke-width="2" marker-end="url(#a1)"/>
    <text x="395" y="112" text-anchor="middle" font-size="10" fill="#666">select &amp; valid</text>

    <path d="M 490 156 Q 450 195 290 195 Q 130 195 100 156" stroke="#666" stroke-width="2" fill="none" marker-end="url(#a1)"/>
    <text x="290" y="208" text-anchor="middle" font-size="10" fill="#666">dispense done</text>

    <defs>
      <marker id="a1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 9 3, 0 6" fill="#666"/>
      </marker>
    </defs>
  </g>
</svg>` },

      { type: 'heading', text: 'Skeleton', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">VendingState</span> {
  <span class="kw">void</span> <span class="fn">insertCoin</span>(<span class="ty">VendingMachine</span> m, <span class="ty">Coin</span> c);
  <span class="kw">void</span> <span class="fn">selectProduct</span>(<span class="ty">VendingMachine</span> m, <span class="ty">String</span> code);
  <span class="kw">void</span> <span class="fn">dispense</span>(<span class="ty">VendingMachine</span> m);
  <span class="kw">void</span> <span class="fn">refund</span>(<span class="ty">VendingMachine</span> m);
}

<span class="kw">class</span> <span class="ty">VendingMachine</span> {
  <span class="kw">private</span> <span class="ty">VendingState</span> state = <span class="kw">new</span> <span class="ty">IdleState</span>();
  <span class="kw">private double</span> balance;
  <span class="kw">private final</span> <span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">Product</span>&gt; inventory;

  <span class="com">// Just delegates — no big switch</span>
  <span class="kw">public void</span> <span class="fn">insertCoin</span>(<span class="ty">Coin</span> c)        { state.<span class="fn">insertCoin</span>(<span class="kw">this</span>, c); }
  <span class="kw">public void</span> <span class="fn">selectProduct</span>(<span class="ty">String</span> code) { state.<span class="fn">selectProduct</span>(<span class="kw">this</span>, code); }
  <span class="kw">public void</span> <span class="fn">setState</span>(<span class="ty">VendingState</span> s)   { state = s; }
}</div>` },
      { type: 'callout', kind: 'success', html: 'The VendingMachine class stays tiny — all behavior lives in state classes. New state? Just a new class. New event? Add to the interface. Clean.' }
    ]},

    /* ============== CH 11 — Splitwise ============== */
    { id: 'lld-c11', title: 'Design: Splitwise', icon: '💸', sections: [
      { type: 'heading', text: 'Modeling shared expenses', level: 1 },
      { type: 'para', html: 'Users add expenses paid by one person, split among many. The app tracks who owes whom — and ideally minimizes the number of payments needed to settle.' },

      { type: 'heading', text: 'Entities', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">User</span>      { id; name; email; <span class="ty">Map</span>&lt;<span class="ty">User</span>, <span class="ty">Double</span>&gt; balances; }
<span class="kw">class</span> <span class="ty">Group</span>     { id; name; <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; users; <span class="ty">List</span>&lt;<span class="ty">Expense</span>&gt; expenses; }
<span class="kw">class</span> <span class="ty">Expense</span>   { amount; paidBy; <span class="ty">SplitStrategy</span> split; description; }
<span class="kw">interface</span> <span class="ty">SplitStrategy</span> {
  <span class="ty">Map</span>&lt;<span class="ty">User</span>, <span class="ty">Double</span>&gt; <span class="fn">calculate</span>(<span class="ty">double</span> amount, <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; users, ...);
}
<span class="kw">class</span> <span class="ty">EqualSplit</span>      <span class="kw">implements</span> <span class="ty">SplitStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">ExactSplit</span>      <span class="kw">implements</span> <span class="ty">SplitStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">PercentageSplit</span> <span class="kw">implements</span> <span class="ty">SplitStrategy</span> { ... }` },

      { type: 'heading', text: 'Adding an expense', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public void</span> <span class="fn">addExpense</span>(<span class="ty">Expense</span> exp) {
  <span class="ty">Map</span>&lt;<span class="ty">User</span>, <span class="ty">Double</span>&gt; shares = exp.split.<span class="fn">calculate</span>(exp.amount, group.users);
  <span class="kw">for</span> (<span class="ty">Map.Entry</span>&lt;<span class="ty">User</span>, <span class="ty">Double</span>&gt; e : shares.<span class="fn">entrySet</span>()) {
    <span class="kw">if</span> (e.<span class="fn">getKey</span>().equals(exp.paidBy)) <span class="kw">continue</span>;
    <span class="com">// e.getKey() owes exp.paidBy e.getValue()</span>
    e.<span class="fn">getKey</span>().balances.<span class="fn">merge</span>(exp.paidBy, e.<span class="fn">getValue</span>(), <span class="ty">Double</span>::sum);
    exp.paidBy.balances.<span class="fn">merge</span>(e.<span class="fn">getKey</span>(), -e.<span class="fn">getValue</span>(), <span class="ty">Double</span>::sum);
  }
}` },

      { type: 'heading', text: 'Simplifying debts (the fun part)', level: 2 },
      { type: 'para', html: 'After many expenses, we want to minimize transactions. Classic greedy: pair largest creditor with largest debtor, settle, repeat.' },
      { type: 'code', lang: 'java', code:
`<span class="com">// net balance of each user (positive = creditor, negative = debtor)</span>
<span class="kw">double</span>[] net = ...;

<span class="ty">PriorityQueue</span>&lt;<span class="ty">int</span>[]&gt; cred = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;((a,b) -&gt; b[<span class="num">1</span>] - a[<span class="num">1</span>]);   <span class="com">// max-heap</span>
<span class="ty">PriorityQueue</span>&lt;<span class="ty">int</span>[]&gt; debt = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;((a,b) -&gt; b[<span class="num">1</span>] - a[<span class="num">1</span>]);   <span class="com">// max-heap of |debt|</span>

<span class="kw">while</span> (!cred.<span class="fn">isEmpty</span>() && !debt.<span class="fn">isEmpty</span>()) {
  <span class="ty">int</span>[] c = cred.<span class="fn">poll</span>(), d = debt.<span class="fn">poll</span>();
  <span class="kw">int</span> pay = <span class="ty">Math</span>.<span class="fn">min</span>(c[<span class="num">1</span>], d[<span class="num">1</span>]);
  result.<span class="fn">add</span>(<span class="kw">new</span> <span class="ty">Transaction</span>(d[<span class="num">0</span>], c[<span class="num">0</span>], pay));
  <span class="kw">if</span> (c[<span class="num">1</span>] &gt; pay) cred.<span class="fn">offer</span>(<span class="kw">new int</span>[]{c[<span class="num">0</span>], c[<span class="num">1</span>] - pay});
  <span class="kw">if</span> (d[<span class="num">1</span>] &gt; pay) debt.<span class="fn">offer</span>(<span class="kw">new int</span>[]{d[<span class="num">0</span>], d[<span class="num">1</span>] - pay});
}` }
    ]},

    /* ============== CH 12 — Concurrency ============== */
    { id: 'lld-c12', title: 'Concurrency in LLD', icon: '🧵', sections: [
      { type: 'heading', text: 'When designs meet multiple threads', level: 1 },
      { type: 'para', html: 'Any shared mutable state is dangerous. In interviews, raising concurrency concerns earns points — and proposing safe solutions earns more.' },

      { type: 'heading', text: 'The toolkit (least → most overhead)', level: 2 },
      { type: 'list', kind: 'numbered', items: [
        '<strong>Immutability</strong> — no shared mutation, no problem',
        '<strong>Atomics</strong> (AtomicInteger, AtomicReference) — lock-free, fast',
        '<strong>Concurrent collections</strong> (ConcurrentHashMap, BlockingQueue) — thread-safe by design',
        '<strong>ReentrantLock / ReadWriteLock</strong> — explicit locking',
        '<strong>synchronized</strong> blocks — simple but blunt',
        '<strong>Single-threaded with message passing</strong> — concurrency via isolation (actors)'
      ]},

      { type: 'heading', text: 'Common pitfalls', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Race conditions</strong>: two threads doing read-modify-write at once',
        '<strong>Deadlock</strong>: two threads each hold a lock the other wants',
        '<strong>Live-lock</strong>: threads keep retrying and starving each other',
        '<strong>Lost updates</strong>: counters that "skip"',
        '<strong>Visibility issues</strong>: one thread\'s write not seen by another (missing <code>volatile</code>)'
      ]},

      { type: 'heading', text: 'Example: thread-safe parking lot spot', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">class</span> <span class="ty">ParkingSpot</span> {
  <span class="kw">private final</span> <span class="ty">AtomicReference</span>&lt;<span class="ty">Vehicle</span>&gt; vehicle = <span class="kw">new</span> <span class="ty">AtomicReference</span>&lt;&gt;();

  <span class="kw">public boolean</span> <span class="fn">tryAssign</span>(<span class="ty">Vehicle</span> v) {
    <span class="kw">return</span> vehicle.<span class="fn">compareAndSet</span>(<span class="kw">null</span>, v);   <span class="com">// atomic — wins if empty</span>
  }
  <span class="kw">public void</span> <span class="fn">release</span>() {
    vehicle.<span class="fn">set</span>(<span class="kw">null</span>);
  }
}</div>` },
      { type: 'callout', kind: 'tip', html: 'CAS (compare-and-set) avoids locks entirely. Perfect for "claim this resource if free" patterns.' }
    ]},

    /* ============== CH 13 — Interview Strategy ============== */
    { id: 'lld-c13', title: 'LLD Interview Playbook', icon: '🎯', sections: [
      { type: 'heading', text: 'A repeatable 45-minute script', level: 1 },

      { type: 'image', alt: 'lld playbook', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">LLD interview — 45 min playbook</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="120" height="50" rx="8" fill="#7c4dff"/>
    <text x="80" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">1. Clarify</text>
    <text x="80" y="90" text-anchor="middle" fill="white" font-size="10">3-5 min</text>

    <text x="150" y="78" font-size="20">→</text>

    <rect x="170" y="50" width="120" height="50" rx="8" fill="#1cb0f6"/>
    <text x="230" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">2. Entities</text>
    <text x="230" y="90" text-anchor="middle" fill="white" font-size="10">5 min</text>

    <text x="300" y="78" font-size="20">→</text>

    <rect x="320" y="50" width="120" height="50" rx="8" fill="#58cc02"/>
    <text x="380" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">3. Diagram</text>
    <text x="380" y="90" text-anchor="middle" fill="white" font-size="10">10 min</text>

    <text x="450" y="78" font-size="20">→</text>

    <rect x="470" y="50" width="120" height="50" rx="8" fill="#ff9600"/>
    <text x="530" y="73" text-anchor="middle" fill="white" font-weight="bold" font-size="12">4. Flows</text>
    <text x="530" y="90" text-anchor="middle" fill="white" font-size="10">10 min</text>

    <line x1="80" y1="100" x2="80" y2="135" stroke="#666" stroke-width="2"/>
    <polygon points="74,135 80,148 86,135" fill="#666"/>
    <text x="90" y="125" font-size="11" fill="#666">continue ↓</text>

    <rect x="20" y="150" width="120" height="50" rx="8" fill="#e53935"/>
    <text x="80" y="173" text-anchor="middle" fill="white" font-weight="bold" font-size="12">5. Patterns</text>
    <text x="80" y="190" text-anchor="middle" fill="white" font-size="10">5 min</text>

    <text x="150" y="178" font-size="20">→</text>

    <rect x="170" y="150" width="120" height="50" rx="8" fill="#37474f"/>
    <text x="230" y="173" text-anchor="middle" fill="white" font-weight="bold" font-size="12">6. Skeleton</text>
    <text x="230" y="190" text-anchor="middle" fill="white" font-size="10">7 min</text>

    <text x="300" y="178" font-size="20">→</text>

    <rect x="320" y="150" width="270" height="50" rx="8" fill="#845ec2"/>
    <text x="455" y="173" text-anchor="middle" fill="white" font-weight="bold" font-size="12">7. Extensions / concurrency</text>
    <text x="455" y="190" text-anchor="middle" fill="white" font-size="10">5 min</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Universal tips', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Narrate everything</strong> — the diagram alone is not enough',
        '<strong>Name your classes</strong> like nouns (Order, ShippingService, BookingManager)',
        '<strong>Name methods</strong> like verbs (placeOrder, calculatePrice)',
        '<strong>Justify every pattern</strong> — "I\'d use Strategy here because pricing varies and we want to add tiers later"',
        '<strong>Mention SOLID</strong> naturally — "this respects Open/Closed because adding a new vehicle type is just a new class"',
        '<strong>Bring up concurrency unprompted</strong> when relevant — even if just to say "we\'d need to lock this assignment"',
        '<strong>Code SKELETONS, not implementations</strong> — interfaces, key fields, method signatures'
      ]},

      { type: 'heading', text: 'Common pitfalls', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Pattern-bombing</strong>: cramming patterns where they don\'t fit',
        '<strong>Over-engineering</strong>: 15 classes for "design a calculator"',
        '<strong>Under-thinking extensions</strong>: a brittle design that breaks at the first new feature',
        '<strong>Silence</strong>: working without narrating',
        '<strong>Skipping clarification</strong>: solving the wrong problem',
        '<strong>No diagrams</strong>: relying only on prose — diagrams compress so much info'
      ]},
      { type: 'callout', kind: 'success', html: '🎯 LLD rewards structured thinking + clean OOP + pattern fluency. Practice the playbook on 5-10 classic problems and you\'ll be ready for any LLD round.' }
    ]}
  ]
});

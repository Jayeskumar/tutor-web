LEARN('oop-java', {
  intro: 'A focused, end-to-end tour of Object-Oriented Programming in Java — from the four pillars to SOLID design.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'oop-c1',
      title: 'What is OOP?',
      icon: '🧬',
      sections: [
        { type: 'heading', text: 'What is Object-Oriented Programming?', level: 1 },
        { type: 'para', html: 'Object-Oriented Programming is a way of organizing code around <strong>objects</strong> — bundles of <em>data</em> and the <em>behavior</em> that operates on that data. Instead of having data in one place and functions in another, OOP keeps them together, treating both as part of the same "thing."' },
        { type: 'para', html: 'Java was designed from the ground up to be object-oriented. Almost everything you do in Java — even <code>"hello"</code> — is an object.' },

        { type: 'heading', text: 'Procedural vs OO mindset', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// PROCEDURAL — data separate from operations</span>
<span class="ty">double</span>[] balances = {<span class="num">100.0</span>, <span class="num">250.0</span>, <span class="num">75.0</span>};

<span class="kw">void</span> <span class="fn">deposit</span>(<span class="ty">double</span>[] arr, <span class="ty">int</span> idx, <span class="ty">double</span> amount) {
    arr[idx] += amount;
}

deposit(balances, <span class="num">0</span>, <span class="num">50</span>);` },
        { type: 'code', lang: 'java', code: `<span class="com">// OBJECT-ORIENTED — data + behavior together</span>
<span class="kw">class</span> <span class="ty">Account</span> {
    <span class="kw">private double</span> balance;

    <span class="kw">public</span> <span class="fn">Account</span>(<span class="ty">double</span> initial) { balance = initial; }

    <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="ty">double</span> amount) {
        <span class="kw">if</span> (amount &gt; <span class="num">0</span>) balance += amount;
    }

    <span class="kw">public double</span> <span class="fn">getBalance</span>() { <span class="kw">return</span> balance; }
}

<span class="ty">Account</span> a = <span class="kw">new</span> <span class="ty">Account</span>(<span class="num">100</span>);
a.<span class="fn">deposit</span>(<span class="num">50</span>);` },

        { type: 'heading', text: 'The 4 pillars of OOP', level: 2 },
        { type: 'image', alt: 'Four pillars diagram',
          svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fef3c7;stroke:#92400e;stroke-width:2}.bt{fill:#92400e;font-family:Inter,sans-serif;font-weight:700;font-size:18px;text-anchor:middle}.bd{fill:#451a03;font-family:Inter,sans-serif;font-size:13px;text-anchor:middle}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:22px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="400" y="30" class="t">The Four Pillars of OOP</text>
<rect x="40" y="60" width="170" height="150" rx="12" class="b"/>
<text x="125" y="100" class="bt">Encapsulation</text>
<text x="125" y="135" class="bd">Hide internal state</text>
<text x="125" y="155" class="bd">Expose behavior</text>
<text x="125" y="180" class="bd">via methods</text>
<rect x="225" y="60" width="170" height="150" rx="12" class="b"/>
<text x="310" y="100" class="bt">Inheritance</text>
<text x="310" y="135" class="bd">Child reuses parent</text>
<text x="310" y="155" class="bd">"is-a" relationship</text>
<text x="310" y="180" class="bd">extends keyword</text>
<rect x="410" y="60" width="170" height="150" rx="12" class="b"/>
<text x="495" y="100" class="bt">Polymorphism</text>
<text x="495" y="135" class="bd">Same name,</text>
<text x="495" y="155" class="bd">different behavior</text>
<text x="495" y="180" class="bd">per object type</text>
<rect x="595" y="60" width="170" height="150" rx="12" class="b"/>
<text x="680" y="100" class="bt">Abstraction</text>
<text x="680" y="135" class="bd">Show WHAT</text>
<text x="680" y="155" class="bd">Hide HOW</text>
<text x="680" y="180" class="bd">interface / abstract</text>
</svg>` },

        { type: 'list', kind: 'check', items: [
          '<strong>Encapsulation</strong> — your <code>Account</code> hides <code>balance</code> behind <code>deposit()</code> / <code>withdraw()</code>',
          '<strong>Inheritance</strong> — a <code>SavingsAccount</code> reuses everything an <code>Account</code> already has',
          '<strong>Polymorphism</strong> — both <code>Dog.speak()</code> and <code>Cat.speak()</code> are called the same way, but do different things',
          '<strong>Abstraction</strong> — your code depends on <code>List</code>, not on whether it\'s an <code>ArrayList</code> or <code>LinkedList</code>'
        ] },

        { type: 'callout', kind: 'tip', html: 'OOP isn\'t about following rituals — it\'s about modeling problems in terms of "things" with state and behavior. Done well, it\'s the difference between code that grows manageably and code that turns into a maze.' }
      ]
    },

    /* ============ Chapter 2 ============ */
    {
      id: 'oop-c2',
      title: 'Classes & Objects',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'Class = blueprint. Object = instance.', level: 1 },
        { type: 'para', html: 'A <strong>class</strong> describes a kind of thing. An <strong>object</strong> is one specific thing of that kind. A class is the cookie cutter; objects are the cookies.' },

        { type: 'image', alt: 'Class blueprint and instances',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.bp{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.in{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;font-weight:700}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569}.arr{fill:none;stroke:#475569;stroke-width:1.5;stroke-dasharray:3,3}</style>
</defs>
<rect x="30" y="40" width="220" height="200" rx="10" class="bp"/>
<text x="140" y="68" class="tb" text-anchor="middle">class Dog (blueprint)</text>
<line x1="30" y1="80" x2="250" y2="80" stroke="#1d4ed8" stroke-width="1"/>
<text x="50" y="110" class="t">- String name</text>
<text x="50" y="135" class="t">- int age</text>
<line x1="30" y1="150" x2="250" y2="150" stroke="#1d4ed8" stroke-width="1"/>
<text x="50" y="175" class="t">+ Dog(name, age)</text>
<text x="50" y="200" class="t">+ bark()</text>
<text x="50" y="225" class="t">+ getName()</text>

<rect x="320" y="40" width="180" height="100" rx="10" class="in"/>
<text x="410" y="68" class="tb" text-anchor="middle">Dog rex</text>
<line x1="320" y1="78" x2="500" y2="78" stroke="#15803d" stroke-width="1"/>
<text x="335" y="100" class="t">name = "Rex"</text>
<text x="335" y="125" class="t">age  = 3</text>

<rect x="320" y="160" width="180" height="100" rx="10" class="in"/>
<text x="410" y="188" class="tb" text-anchor="middle">Dog luna</text>
<line x1="320" y1="198" x2="500" y2="198" stroke="#15803d" stroke-width="1"/>
<text x="335" y="220" class="t">name = "Luna"</text>
<text x="335" y="245" class="t">age  = 5</text>

<rect x="560" y="40" width="200" height="220" rx="10" class="in"/>
<text x="660" y="65" class="tb" text-anchor="middle">Dog bobby</text>
<line x1="560" y1="75" x2="760" y2="75" stroke="#15803d" stroke-width="1"/>
<text x="575" y="98" class="t">name = "Bobby"</text>
<text x="575" y="123" class="t">age  = 1</text>
<text x="660" y="170" class="ti" text-anchor="middle">Each object</text>
<text x="660" y="186" class="ti" text-anchor="middle">has its own</text>
<text x="660" y="202" class="ti" text-anchor="middle">copy of the</text>
<text x="660" y="218" class="ti" text-anchor="middle">fields.</text>

<line x1="250" y1="90" x2="320" y2="90" class="arr"/>
<line x1="250" y1="210" x2="320" y2="210" class="arr"/>
<line x1="250" y1="140" x2="560" y2="150" class="arr"/>
</svg>` },

        { type: 'heading', text: 'Anatomy of a class', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Dog</span> {
    <span class="com">// FIELDS (instance variables) — each object gets its own copy</span>
    <span class="kw">private</span> <span class="ty">String</span> name;
    <span class="kw">private int</span> age;

    <span class="com">// CONSTRUCTOR — called when you do "new Dog(...)"</span>
    <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name, <span class="ty">int</span> age) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.age = age;
    }

    <span class="com">// METHODS — behavior</span>
    <span class="kw">public void</span> <span class="fn">bark</span>() {
        <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" says Woof!"</span>);
    }

    <span class="kw">public</span> <span class="ty">String</span> <span class="fn">getName</span>() { <span class="kw">return</span> name; }
    <span class="kw">public int</span> <span class="fn">getAge</span>()      { <span class="kw">return</span> age; }
}` },

        { type: 'heading', text: 'Creating and using objects', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Dog</span> rex  = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>, <span class="num">3</span>);
<span class="ty">Dog</span> luna = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Luna"</span>, <span class="num">5</span>);

rex.<span class="fn">bark</span>();          <span class="com">// "Rex says Woof!"</span>
luna.<span class="fn">bark</span>();         <span class="com">// "Luna says Woof!"</span>

<span class="ty">System</span>.out.<span class="fn">println</span>(rex.<span class="fn">getAge</span>());   <span class="com">// 3</span>
<span class="ty">System</span>.out.<span class="fn">println</span>(luna.<span class="fn">getAge</span>());  <span class="com">// 5</span>` },

        { type: 'callout', kind: 'info', html: '<code>new</code> does three things in order: <strong>(1)</strong> allocates memory on the heap, <strong>(2)</strong> runs the constructor to initialize fields, <strong>(3)</strong> returns a reference (essentially a pointer) to the new object.' },

        { type: 'heading', text: 'Instance vs static', level: 2 },
        { type: 'para', html: 'Sometimes you want a piece of data or behavior that <em>belongs to the class itself</em>, not to any one instance. That\'s what <code>static</code> is for.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Counter</span> {
    <span class="kw">private static int</span> total = <span class="num">0</span>;     <span class="com">// shared across ALL instances</span>
    <span class="kw">private int</span> id;                        <span class="com">// per-instance</span>

    <span class="kw">public</span> <span class="fn">Counter</span>() {
        total++;
        id = total;
    }

    <span class="kw">public static int</span> <span class="fn">getTotal</span>() { <span class="kw">return</span> total; }
    <span class="kw">public int</span> <span class="fn">getId</span>() { <span class="kw">return</span> id; }
}

<span class="kw">new</span> <span class="ty">Counter</span>();   <span class="com">// total = 1</span>
<span class="kw">new</span> <span class="ty">Counter</span>();   <span class="com">// total = 2</span>
<span class="ty">Counter</span>.<span class="fn">getTotal</span>();    <span class="com">// 2  (called on the CLASS, not on any instance)</span>` },

        { type: 'list', kind: 'check', items: [
          '<strong>Instance field</strong> → one copy per object. Each object has its own value.',
          '<strong>Static field</strong> → one copy shared by all objects.',
          '<strong>Static method</strong> → called on the class (<code>Math.sqrt(9)</code>). No <code>this</code> available.',
          '<strong>Instance method</strong> → called on an object (<code>list.size()</code>). <code>this</code> refers to that object.'
        ] }
      ]
    },

    /* ============ Chapter 3 ============ */
    {
      id: 'oop-c3',
      title: 'Constructors & this',
      icon: '🔨',
      sections: [
        { type: 'heading', text: 'How objects come to life', level: 1 },
        { type: 'para', html: 'A <strong>constructor</strong> is the special method that runs when you do <code>new SomeClass(...)</code>. Its job is to put the new object into a valid initial state.' },

        { type: 'heading', text: 'Default vs explicit', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// If you write NO constructor, Java gives you a free no-arg one.</span>
<span class="kw">class</span> <span class="ty">Bare</span> { }
<span class="kw">new</span> <span class="ty">Bare</span>();    <span class="com">// works — uses Java\'s implicit Bare() {} </span>

<span class="com">// If you write ANY constructor, the implicit one disappears.</span>
<span class="kw">class</span> <span class="ty">User</span> {
    <span class="ty">String</span> name;
    <span class="kw">public</span> <span class="fn">User</span>(<span class="ty">String</span> name) { <span class="kw">this</span>.name = name; }
}

<span class="kw">new</span> <span class="ty">User</span>(<span class="str">"Alice"</span>);   <span class="com">// ✅</span>
<span class="kw">new</span> <span class="ty">User</span>();             <span class="com">// ❌ compile error — no zero-arg constructor</span>` },

        { type: 'heading', text: 'Constructor overloading + chaining', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Point</span> {
    <span class="kw">private double</span> x, y;

    <span class="com">// 1. No-args — delegate to (2) with defaults</span>
    <span class="kw">public</span> <span class="fn">Point</span>() {
        <span class="kw">this</span>(<span class="num">0</span>, <span class="num">0</span>);    <span class="com">// must be FIRST statement</span>
    }

    <span class="com">// 2. Parameterized — the "primary" constructor</span>
    <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">double</span> x, <span class="ty">double</span> y) {
        <span class="kw">this</span>.x = x;
        <span class="kw">this</span>.y = y;
    }

    <span class="com">// 3. Copy constructor</span>
    <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">Point</span> other) {
        <span class="kw">this</span>(other.x, other.y);
    }
}

<span class="kw">new</span> <span class="ty">Point</span>();
<span class="kw">new</span> <span class="ty">Point</span>(<span class="num">3</span>, <span class="num">4</span>);
<span class="kw">new</span> <span class="ty">Point</span>(<span class="kw">new</span> <span class="ty">Point</span>(<span class="num">1</span>, <span class="num">2</span>));` },

        { type: 'callout', kind: 'warn', html: '<code>this(...)</code> for chaining MUST be the first statement of the constructor body. Same rule applies to <code>super(...)</code> when calling a parent constructor.' },

        { type: 'heading', text: 'The this keyword', level: 2 },
        { type: 'para', html: '<code>this</code> is a reference to "the current object" — the one whose method/constructor is running. You use it for three common things:' },

        { type: 'list', kind: 'numbered', items: [
          '<strong>Disambiguating field from parameter</strong> — <code>this.x = x;</code>',
          '<strong>Chaining to another constructor</strong> — <code>this(0, 0);</code>',
          '<strong>Returning yourself for method chaining</strong> — <code>return this;</code> (StringBuilder pattern)'
        ] },

        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Box</span> {
    <span class="kw">private double</span> width, height;

    <span class="kw">public</span> <span class="fn">Box</span>(<span class="ty">double</span> width, <span class="ty">double</span> height) {
        <span class="kw">this</span>.width = width;    <span class="com">// "this.width" = field. "width" = parameter.</span>
        <span class="kw">this</span>.height = height;
    }

    <span class="kw">public</span> <span class="ty">Box</span> <span class="fn">scale</span>(<span class="ty">double</span> f) {
        width *= f;
        height *= f;
        <span class="kw">return this</span>;             <span class="com">// enables: box.scale(2).scale(3)</span>
    }
}

<span class="kw">new</span> <span class="ty">Box</span>(<span class="num">10</span>, <span class="num">5</span>).<span class="fn">scale</span>(<span class="num">2</span>).<span class="fn">scale</span>(<span class="num">3</span>);   <span class="com">// width=60, height=30</span>` },

        { type: 'callout', kind: 'info', html: 'Static methods <strong>cannot use <code>this</code></strong> — there\'s no current object. They\'re called on the class itself.' }
      ]
    },

    /* ============ Chapter 4 — Encapsulation ============ */
    {
      id: 'oop-c4',
      title: 'Encapsulation',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Hide what — expose how', level: 1 },
        { type: 'para', html: '<strong>Encapsulation</strong> is the practice of hiding an object\'s internal state behind a controlled interface. Fields are <code>private</code> by default; methods enforce invariants when the state changes.' },

        { type: 'heading', text: 'Access modifiers', level: 2 },
        { type: 'image', alt: 'Access modifier scope diagram',
          svg: `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.lbl{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;font-weight:700}.col{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.ok{fill:#16a34a;font-weight:700;font-size:18px;text-anchor:middle}.no{fill:#dc2626;font-weight:700;font-size:18px;text-anchor:middle}.h{font-family:Inter,sans-serif;font-size:12px;fill:#475569;text-anchor:middle;font-weight:700}</style></defs>
<text x="380" y="22" class="lbl" text-anchor="middle">Access modifiers — visibility scope</text>
<line x1="200" y1="30" x2="200" y2="220" stroke="#e2e8f0" stroke-width="1"/>
<line x1="350" y1="30" x2="350" y2="220" stroke="#e2e8f0" stroke-width="1"/>
<line x1="500" y1="30" x2="500" y2="220" stroke="#e2e8f0" stroke-width="1"/>
<line x1="650" y1="30" x2="650" y2="220" stroke="#e2e8f0" stroke-width="1"/>
<text x="125" y="55" class="h">Same class</text>
<text x="275" y="55" class="h">Same package</text>
<text x="425" y="55" class="h">Subclass (other pkg)</text>
<text x="575" y="55" class="h">Different package</text>
<text x="715" y="55" class="h">modifier</text>
<text x="125" y="100" class="ok">✓</text>
<text x="275" y="100" class="no">✗</text>
<text x="425" y="100" class="no">✗</text>
<text x="575" y="100" class="no">✗</text>
<text x="715" y="100" class="col" text-anchor="middle">private</text>
<text x="125" y="135" class="ok">✓</text>
<text x="275" y="135" class="ok">✓</text>
<text x="425" y="135" class="no">✗</text>
<text x="575" y="135" class="no">✗</text>
<text x="715" y="135" class="col" text-anchor="middle">(default)</text>
<text x="125" y="170" class="ok">✓</text>
<text x="275" y="170" class="ok">✓</text>
<text x="425" y="170" class="ok">✓</text>
<text x="575" y="170" class="no">✗</text>
<text x="715" y="170" class="col" text-anchor="middle">protected</text>
<text x="125" y="205" class="ok">✓</text>
<text x="275" y="205" class="ok">✓</text>
<text x="425" y="205" class="ok">✓</text>
<text x="575" y="205" class="ok">✓</text>
<text x="715" y="205" class="col" text-anchor="middle">public</text>
</svg>` },

        { type: 'heading', text: 'Why "private + getters/setters" matters', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// BAD: anyone can put balance in an invalid state</span>
<span class="kw">public class</span> <span class="ty">Account</span> {
    <span class="kw">public double</span> balance;
}

<span class="ty">Account</span> a = <span class="kw">new</span> <span class="ty">Account</span>();
a.balance = -<span class="num">1000000</span>;   <span class="com">// 😱 nothing stops this</span>` },

        { type: 'code', lang: 'java', code: `<span class="com">// GOOD: state is private; behavior enforces rules</span>
<span class="kw">public class</span> <span class="ty">Account</span> {
    <span class="kw">private double</span> balance;

    <span class="kw">public double</span> <span class="fn">getBalance</span>() { <span class="kw">return</span> balance; }

    <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="ty">double</span> amount) {
        <span class="kw">if</span> (amount &lt;= <span class="num">0</span>)
            <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"amount must be positive"</span>);
        balance += amount;     <span class="com">// invariant maintained</span>
    }

    <span class="kw">public void</span> <span class="fn">withdraw</span>(<span class="ty">double</span> amount) {
        <span class="kw">if</span> (amount &lt;= <span class="num">0</span> || amount &gt; balance)
            <span class="kw">throw new</span> <span class="ty">IllegalStateException</span>(<span class="str">"invalid withdrawal"</span>);
        balance -= amount;
    }
}` },

        { type: 'heading', text: 'Going further: immutability', level: 2 },
        { type: 'para', html: 'The strongest form of encapsulation: <em>no setters at all</em>. Once constructed, the object never changes. Mutations return new instances.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public final class</span> <span class="ty">Point</span> {           <span class="com">// final: cannot be subclassed</span>
    <span class="kw">private final double</span> x, y;        <span class="com">// final: never reassigned</span>

    <span class="kw">public</span> <span class="fn">Point</span>(<span class="ty">double</span> x, <span class="ty">double</span> y) {
        <span class="kw">this</span>.x = x;
        <span class="kw">this</span>.y = y;
    }

    <span class="kw">public double</span> <span class="fn">x</span>() { <span class="kw">return</span> x; }
    <span class="kw">public double</span> <span class="fn">y</span>() { <span class="kw">return</span> y; }

    <span class="kw">public</span> <span class="ty">Point</span> <span class="fn">translated</span>(<span class="ty">double</span> dx, <span class="ty">double</span> dy) {
        <span class="kw">return new</span> <span class="ty">Point</span>(x + dx, y + dy);     <span class="com">// new instance, not mutation</span>
    }
}` },

        { type: 'callout', kind: 'success', html: '<strong>Immutable classes are thread-safe automatically.</strong> No setters → no race conditions → no synchronization needed. Java\'s <code>String</code>, <code>Integer</code>, <code>LocalDate</code>, etc. are all immutable for this reason.' },

        { type: 'heading', text: 'Java records — encapsulation in one line', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Java 14+ — records: immutable data classes</span>
<span class="kw">public record</span> <span class="ty">Point</span>(<span class="ty">double</span> x, <span class="ty">double</span> y) {}

<span class="com">// Auto-generates:</span>
<span class="com">//   - Constructor: Point(double x, double y)</span>
<span class="com">//   - Accessors:   x(), y()</span>
<span class="com">//   - equals(), hashCode(), toString()</span>

<span class="ty">Point</span> p = <span class="kw">new</span> <span class="ty">Point</span>(<span class="num">3</span>, <span class="num">4</span>);
p.<span class="fn">x</span>();        <span class="com">// 3.0</span>
p.<span class="fn">toString</span>();  <span class="com">// "Point[x=3.0, y=4.0]"</span>` },

        { type: 'list', kind: 'check', items: [
          'Fields → <code>private</code> by default',
          'Expose only what callers need (often: no setters at all)',
          'Validate inputs in mutators — fail fast on invalid state',
          'Use <code>final</code> fields wherever possible',
          'Return defensive copies (or unmodifiable views) of collections'
        ] }
      ]
    },

    /* ============ Chapter 5 — Inheritance ============ */
    {
      id: 'oop-c5',
      title: 'Inheritance',
      icon: '🧬',
      sections: [
        { type: 'heading', text: 'Reusing behavior through "is-a"', level: 1 },
        { type: 'para', html: '<strong>Inheritance</strong> lets one class take on the fields and methods of another. The child class can add its own, override the inherited ones, or both.' },

        { type: 'image', alt: 'Animal inheritance tree',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.cls{fill:#fef3c7;stroke:#92400e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;fill:#451a03;font-weight:700;text-anchor:middle}.tn{font-family:Inter,sans-serif;font-size:11px;fill:#451a03;text-anchor:middle}.arr{fill:none;stroke:#475569;stroke-width:2;marker-end:url(#m)}</style>
  <marker id="m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker></defs>
<rect x="310" y="20" width="180" height="80" rx="10" class="cls"/>
<text x="400" y="50" class="t">Animal</text>
<text x="400" y="70" class="tn">+ name</text>
<text x="400" y="85" class="tn">+ eat() · sleep()</text>

<rect x="60" y="180" width="180" height="80" rx="10" class="cls"/>
<text x="150" y="210" class="t">Dog</text>
<text x="150" y="230" class="tn">+ bark()</text>
<text x="150" y="245" class="tn">+ fetch()</text>

<rect x="310" y="180" width="180" height="80" rx="10" class="cls"/>
<text x="400" y="210" class="t">Cat</text>
<text x="400" y="230" class="tn">+ meow()</text>
<text x="400" y="245" class="tn">+ scratch()</text>

<rect x="560" y="180" width="180" height="80" rx="10" class="cls"/>
<text x="650" y="210" class="t">Bird</text>
<text x="650" y="230" class="tn">+ chirp()</text>
<text x="650" y="245" class="tn">+ fly()</text>

<line x1="150" y1="180" x2="370" y2="105" class="arr"/>
<line x1="400" y1="180" x2="400" y2="105" class="arr"/>
<line x1="650" y1="180" x2="430" y2="105" class="arr"/>
</svg>` },

        { type: 'heading', text: 'extends and super', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Animal</span> {
    <span class="kw">protected</span> <span class="ty">String</span> name;

    <span class="kw">public</span> <span class="fn">Animal</span>(<span class="ty">String</span> name) { <span class="kw">this</span>.name = name; }

    <span class="kw">public void</span> <span class="fn">eat</span>()   { <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" is eating"</span>); }
    <span class="kw">public void</span> <span class="fn">sleep</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" is sleeping"</span>); }
}

<span class="kw">public class</span> <span class="ty">Dog</span> <span class="kw">extends</span> <span class="ty">Animal</span> {
    <span class="kw">public</span> <span class="fn">Dog</span>(<span class="ty">String</span> name) {
        <span class="kw">super</span>(name);                  <span class="com">// call Animal\'s constructor</span>
    }

    <span class="kw">public void</span> <span class="fn">bark</span>() {
        <span class="ty">System</span>.out.<span class="fn">println</span>(name + <span class="str">" barks!"</span>);
    }
}

<span class="ty">Dog</span> rex = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>);
rex.<span class="fn">eat</span>();   <span class="com">// inherited from Animal</span>
rex.<span class="fn">bark</span>();  <span class="com">// defined in Dog</span>` },

        { type: 'callout', kind: 'info', html: 'In Java, every class implicitly extends <code>Object</code>. That\'s why every object has <code>toString()</code>, <code>equals()</code>, and <code>hashCode()</code> — they\'re inherited from <code>Object</code>.' },

        { type: 'heading', text: 'Single inheritance for classes', level: 2 },
        { type: 'para', html: 'Java forbids a class from having more than one direct parent. This avoids the <strong>diamond problem</strong> (which version of the method do I inherit?). Multiple inheritance comes via <em>interfaces</em>, covered in Chapter 8.' },

        { type: 'heading', text: 'final — locking down inheritance', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public final class</span> <span class="ty">Money</span> { ... }
<span class="com">// ❌ Cannot extend — final blocks subclassing</span>

<span class="kw">public class</span> <span class="ty">Animal</span> {
    <span class="kw">public final void</span> <span class="fn">heartbeat</span>() { ... }
    <span class="com">// Subclasses CAN inherit it, but CANNOT override it.</span>
}` },

        { type: 'heading', text: 'Composition over inheritance', level: 2 },
        { type: 'para', html: 'A famous piece of design advice. Inheritance creates tight coupling — a child class is welded to its parent\'s API. <strong>Composition</strong> — putting one object inside another — is more flexible.' },

        { type: 'code', lang: 'java', code: `<span class="com">// BAD: rigid hierarchy</span>
<span class="kw">class</span> <span class="ty">Duck</span> {
    <span class="kw">void</span> <span class="fn">fly</span>() { <span class="com">/* default flying */</span> }
}
<span class="kw">class</span> <span class="ty">RubberDuck</span> <span class="kw">extends</span> <span class="ty">Duck</span> {
    @<span class="ty">Override</span>
    <span class="kw">void</span> <span class="fn">fly</span>() { <span class="com">/* nothing — but the method shouldn\'t exist at all */</span> }
}

<span class="com">// BETTER: composition (Strategy pattern)</span>
<span class="kw">interface</span> <span class="ty">FlyBehavior</span> { <span class="kw">void</span> <span class="fn">fly</span>(); }

<span class="kw">class</span> <span class="ty">Flap</span>   <span class="kw">implements</span> <span class="ty">FlyBehavior</span> { <span class="kw">public void</span> <span class="fn">fly</span>() { ... } }
<span class="kw">class</span> <span class="ty">NoFly</span>  <span class="kw">implements</span> <span class="ty">FlyBehavior</span> { <span class="kw">public void</span> <span class="fn">fly</span>() { } }

<span class="kw">class</span> <span class="ty">Duck</span> {
    <span class="kw">private</span> <span class="ty">FlyBehavior</span> fly;
    <span class="kw">public</span> <span class="fn">Duck</span>(<span class="ty">FlyBehavior</span> fly) { <span class="kw">this</span>.fly = fly; }
    <span class="kw">public void</span> <span class="fn">performFly</span>() { fly.<span class="fn">fly</span>(); }
}

<span class="kw">new</span> <span class="ty">Duck</span>(<span class="kw">new</span> <span class="ty">Flap</span>());     <span class="com">// flies normally</span>
<span class="kw">new</span> <span class="ty">Duck</span>(<span class="kw">new</span> <span class="ty">NoFly</span>());    <span class="com">// rubber duck</span>` },

        { type: 'callout', kind: 'tip', html: '<strong>Rule of thumb:</strong> use inheritance only when the child class is genuinely a <em>specialization</em> (<code>Dog</code> IS-A <code>Animal</code>). For "has a capability" relationships, use composition.' }
      ]
    },

    /* ============ Chapter 6 — Overriding ============ */
    {
      id: 'oop-c6',
      title: 'Overriding & Dynamic Dispatch',
      icon: '🎯',
      sections: [
        { type: 'heading', text: 'Same method name, different behavior', level: 1 },
        { type: 'para', html: 'A child class can <strong>override</strong> a parent\'s method to change what it does. At runtime, the JVM picks the right version based on the <em>actual</em> object — not the reference type. This is called <strong>dynamic dispatch</strong> (or runtime polymorphism), and it\'s where OOP gets its real power.' },

        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Animal</span> {
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

<span class="ty">Animal</span>[] zoo = { <span class="kw">new</span> <span class="ty">Dog</span>(), <span class="kw">new</span> <span class="ty">Cat</span>(), <span class="kw">new</span> <span class="ty">Animal</span>() };
<span class="kw">for</span> (<span class="ty">Animal</span> a : zoo) a.<span class="fn">speak</span>();

<span class="com">// Output:
// Woof!
// Meow!
// some sound</span>` },

        { type: 'callout', kind: 'tip', html: '<strong>Always use the <code>@Override</code> annotation.</strong> It tells the compiler "I intend to override a parent method" — and if you misspell the method name or get the signature wrong, you get a compile error instead of a silent bug.' },

        { type: 'heading', text: 'Overloading vs overriding', level: 2 },
        { type: 'image', alt: 'Overloading vs overriding',
          svg: `<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b1{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.b2{fill:#dcfce7;stroke:#15803d;stroke-width:2}.tb{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle}.t{font-family:Inter,sans-serif;font-size:13px;text-anchor:middle;fill:#0f172a}</style></defs>
<rect x="40" y="20" width="340" height="180" rx="10" class="b1"/>
<text x="210" y="50" class="tb" fill="#1d4ed8">Overloading</text>
<text x="210" y="80" class="t">Same name, DIFFERENT parameter list</text>
<text x="210" y="105" class="t">In the SAME class</text>
<text x="210" y="130" class="t">Resolved at COMPILE TIME</text>
<text x="210" y="155" class="t">"Compile-time polymorphism"</text>
<text x="210" y="180" class="t">add(int,int) vs add(double,double)</text>

<rect x="400" y="20" width="340" height="180" rx="10" class="b2"/>
<text x="570" y="50" class="tb" fill="#15803d">Overriding</text>
<text x="570" y="80" class="t">Same name, SAME signature</text>
<text x="570" y="105" class="t">In a SUBCLASS</text>
<text x="570" y="130" class="t">Resolved at RUNTIME</text>
<text x="570" y="155" class="t">"Runtime polymorphism" — dynamic dispatch</text>
<text x="570" y="180" class="t">Dog.speak() vs Animal.speak()</text>
</svg>` },

        { type: 'heading', text: 'Rules for overriding', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Same method name AND same parameter list',
          'Return type must be the same (or a <em>covariant</em> subtype)',
          'Cannot REDUCE visibility (public can\'t become protected)',
          'Cannot throw broader checked exceptions than the parent',
          '<code>final</code>, <code>static</code>, and <code>private</code> methods cannot be overridden'
        ] },

        { type: 'heading', text: 'Calling the parent version', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">LoudDog</span> <span class="kw">extends</span> <span class="ty">Dog</span> {
    @<span class="ty">Override</span>
    <span class="kw">public void</span> <span class="fn">speak</span>() {
        <span class="kw">super</span>.<span class="fn">speak</span>();              <span class="com">// "Woof!"</span>
        <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"WOOF WOOF!"</span>);  <span class="com">// extend, don\'t replace</span>
    }
}` },

        { type: 'heading', text: 'instanceof and pattern matching', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Animal</span> a = <span class="kw">new</span> <span class="ty">Dog</span>(<span class="str">"Rex"</span>);

<span class="com">// Old way</span>
<span class="kw">if</span> (a <span class="kw">instanceof</span> <span class="ty">Dog</span>) {
    <span class="ty">Dog</span> d = (<span class="ty">Dog</span>) a;
    d.<span class="fn">bark</span>();
}

<span class="com">// Java 16+ pattern matching (cleaner)</span>
<span class="kw">if</span> (a <span class="kw">instanceof</span> <span class="ty">Dog</span> d) {     <span class="com">// "d" is auto-typed as Dog</span>
    d.<span class="fn">bark</span>();
}` },

        { type: 'callout', kind: 'warn', html: 'A blind cast like <code>(Dog) someAnimal</code> throws <code>ClassCastException</code> if the object isn\'t really a <code>Dog</code>. Always guard with <code>instanceof</code> first.' },

        { type: 'callout', kind: 'tip', html: '<strong>Heavy use of <code>instanceof</code> usually means missing polymorphism.</strong> If you find yourself writing many <code>if (x instanceof A) ... else if (x instanceof B) ...</code> branches, add a virtual method to the parent and let dynamic dispatch route the call.' }
      ]
    },

    /* ============ Chapter 7 — Abstract classes ============ */
    {
      id: 'oop-c7',
      title: 'Abstract Classes',
      icon: '🏗️',
      sections: [
        { type: 'heading', text: 'Partially-implemented blueprints', level: 1 },
        { type: 'para', html: 'An <strong>abstract class</strong> is one you can\'t directly instantiate. It can have a mix of concrete (implemented) and abstract (unimplemented) methods. Subclasses MUST implement the abstract ones to become concrete themselves.' },

        { type: 'code', lang: 'java', code: `<span class="kw">public abstract class</span> <span class="ty">Shape</span> {
    <span class="kw">protected</span> <span class="ty">String</span> color;

    <span class="kw">public</span> <span class="fn">Shape</span>(<span class="ty">String</span> color) { <span class="kw">this</span>.color = color; }

    <span class="com">// Abstract: no body — children MUST implement</span>
    <span class="kw">public abstract double</span> <span class="fn">area</span>();
    <span class="kw">public abstract double</span> <span class="fn">perimeter</span>();

    <span class="com">// Concrete: shared logic</span>
    <span class="kw">public void</span> <span class="fn">describe</span>() {
        <span class="ty">System</span>.out.<span class="fn">println</span>(
            color + <span class="str">" shape — area "</span> + <span class="fn">area</span>() +
            <span class="str">", perimeter "</span> + <span class="fn">perimeter</span>()
        );
    }
}

<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">extends</span> <span class="ty">Shape</span> {
    <span class="kw">private double</span> radius;

    <span class="kw">public</span> <span class="fn">Circle</span>(<span class="ty">String</span> color, <span class="ty">double</span> radius) {
        <span class="kw">super</span>(color);
        <span class="kw">this</span>.radius = radius;
    }

    @<span class="ty">Override</span>
    <span class="kw">public double</span> <span class="fn">area</span>()      { <span class="kw">return</span> <span class="ty">Math</span>.PI * radius * radius; }
    @<span class="ty">Override</span>
    <span class="kw">public double</span> <span class="fn">perimeter</span>() { <span class="kw">return</span> <span class="num">2</span> * <span class="ty">Math</span>.PI * radius; }
}

<span class="kw">new</span> <span class="ty">Shape</span>(<span class="str">"red"</span>);          <span class="com">// ❌ compile error — abstract, can\'t instantiate</span>
<span class="kw">new</span> <span class="ty">Circle</span>(<span class="str">"red"</span>, <span class="num">5</span>);     <span class="com">// ✅</span>` },

        { type: 'heading', text: 'When to use abstract classes', level: 2 },
        { type: 'list', kind: 'check', items: [
          'You have shared <strong>state</strong> (fields) AND shared <strong>behavior</strong> across subclasses',
          'You want to enforce that certain methods MUST be implemented',
          'You want to provide a "skeletal" implementation (Template Method pattern)',
          'You\'re modeling a clear is-a relationship with common attributes'
        ] },

        { type: 'heading', text: 'Template Method pattern', level: 2 },
        { type: 'para', html: 'A classic use of abstract classes: define the <em>skeleton</em> of an algorithm in the base class, but defer the variable parts to subclasses.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public abstract class</span> <span class="ty">DataProcessor</span> {
    <span class="com">// Template method — defines the algorithm flow</span>
    <span class="kw">public final void</span> <span class="fn">process</span>() {
        <span class="ty">String</span> data = <span class="fn">read</span>();
        <span class="ty">String</span> result = <span class="fn">transform</span>(data);
        <span class="fn">write</span>(result);
    }

    <span class="com">// Subclasses fill in the blanks</span>
    <span class="kw">protected abstract</span> <span class="ty">String</span> <span class="fn">read</span>();
    <span class="kw">protected abstract</span> <span class="ty">String</span> <span class="fn">transform</span>(<span class="ty">String</span> data);
    <span class="kw">protected abstract void</span> <span class="fn">write</span>(<span class="ty">String</span> result);
}

<span class="kw">public class</span> <span class="ty">JsonProcessor</span> <span class="kw">extends</span> <span class="ty">DataProcessor</span> {
    @<span class="ty">Override</span>
    <span class="kw">protected</span> <span class="ty">String</span> <span class="fn">read</span>() { ... }
    @<span class="ty">Override</span>
    <span class="kw">protected</span> <span class="ty">String</span> <span class="fn">transform</span>(<span class="ty">String</span> d) { ... }
    @<span class="ty">Override</span>
    <span class="kw">protected void</span> <span class="fn">write</span>(<span class="ty">String</span> r) { ... }
}` },

        { type: 'callout', kind: 'info', html: 'You can still create an <em>anonymous subclass</em> of an abstract class on the fly:<br><code>Shape s = new Shape("red") { @Override public double area() { return 0; } ... };</code>' }
      ]
    },

    /* ============ Chapter 8 — Interfaces ============ */
    {
      id: 'oop-c8',
      title: 'Interfaces',
      icon: '🤝',
      sections: [
        { type: 'heading', text: 'Contracts, not classes', level: 1 },
        { type: 'para', html: 'An <strong>interface</strong> is a contract: "any class that implements me promises to provide these methods." Interfaces describe a <em>capability</em>, not a kind of thing.' },
        { type: 'para', html: 'Unlike with classes (single inheritance), a class can <code>implement</code> as many interfaces as it wants. This is Java\'s answer to multiple inheritance.' },

        { type: 'code', lang: 'java', code: `<span class="kw">public interface</span> <span class="ty">Drawable</span> {
    <span class="kw">void</span> <span class="fn">draw</span>();      <span class="com">// implicitly public abstract</span>
}

<span class="kw">public interface</span> <span class="ty">Resizable</span> {
    <span class="kw">void</span> <span class="fn">resize</span>(<span class="ty">double</span> factor);
}

<span class="com">// A class implementing MULTIPLE interfaces</span>
<span class="kw">public class</span> <span class="ty">Circle</span> <span class="kw">implements</span> <span class="ty">Drawable</span>, <span class="ty">Resizable</span> {
    <span class="kw">private double</span> radius;

    @<span class="ty">Override</span>
    <span class="kw">public void</span> <span class="fn">draw</span>()              { <span class="com">/* draw on screen */</span> }
    @<span class="ty">Override</span>
    <span class="kw">public void</span> <span class="fn">resize</span>(<span class="ty">double</span> f)  { radius *= f; }
}` },

        { type: 'image', alt: 'Class implementing multiple interfaces',
          svg: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
<defs><style>.if{fill:#e0e7ff;stroke:#4338ca;stroke-width:2}.cl{fill:#fef3c7;stroke:#92400e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;text-anchor:middle}.tn{font-family:Inter,sans-serif;font-size:11px;text-anchor:middle;fill:#1e293b}.arr{fill:none;stroke:#475569;stroke-width:2;stroke-dasharray:5,4;marker-end:url(#m2)}</style>
  <marker id="m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="none" stroke="#475569" stroke-width="1.5"/></marker></defs>

<rect x="60" y="20" width="160" height="80" rx="10" class="if"/>
<text x="140" y="50" class="t" fill="#4338ca">«interface»</text>
<text x="140" y="70" class="t" fill="#4338ca">Drawable</text>
<text x="140" y="90" class="tn">+ draw()</text>

<rect x="270" y="20" width="160" height="80" rx="10" class="if"/>
<text x="350" y="50" class="t" fill="#4338ca">«interface»</text>
<text x="350" y="70" class="t" fill="#4338ca">Resizable</text>
<text x="350" y="90" class="tn">+ resize()</text>

<rect x="480" y="20" width="160" height="80" rx="10" class="if"/>
<text x="560" y="50" class="t" fill="#4338ca">«interface»</text>
<text x="560" y="70" class="t" fill="#4338ca">Comparable</text>
<text x="560" y="90" class="tn">+ compareTo()</text>

<rect x="270" y="160" width="160" height="80" rx="10" class="cl"/>
<text x="350" y="190" class="t" fill="#92400e">Circle</text>
<text x="350" y="210" class="tn">implements all three</text>

<line x1="350" y1="160" x2="140" y2="105" class="arr"/>
<line x1="350" y1="160" x2="350" y2="105" class="arr"/>
<line x1="350" y1="160" x2="560" y2="105" class="arr"/>
</svg>` },

        { type: 'heading', text: 'Default methods (Java 8+)', level: 2 },
        { type: 'para', html: 'Before Java 8, all interface methods were abstract. Adding a method to a popular interface (like <code>Collection</code>) would break every implementer. Default methods fix that: they have a body, and implementers can either use it or override it.' },
        { type: 'code', lang: 'java', code: `<span class="kw">public interface</span> <span class="ty">Vehicle</span> {
    <span class="kw">void</span> <span class="fn">start</span>();                            <span class="com">// abstract — must implement</span>

    <span class="kw">default void</span> <span class="fn">honk</span>() {                    <span class="com">// default — can override</span>
        <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"BEEP!"</span>);
    }

    <span class="kw">static</span> <span class="ty">Vehicle</span> <span class="fn">stopped</span>() {             <span class="com">// static — utility</span>
        <span class="kw">return</span> () -&gt; {};      <span class="com">// lambda for the one abstract method</span>
    }

    <span class="kw">private void</span> <span class="fn">log</span>(<span class="ty">String</span> msg) {            <span class="com">// private (Java 9+) — helper</span>
        <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"[Vehicle] "</span> + msg);
    }
}` },

        { type: 'callout', kind: 'info', html: 'A <strong>functional interface</strong> is one with exactly one abstract method. They\'re special: you can implement them with a lambda. Examples: <code>Runnable</code>, <code>Comparator</code>, <code>Function</code>, <code>Predicate</code>.' },

        { type: 'heading', text: 'Interface vs abstract class', level: 2 },
        { type: 'image', alt: 'Interface vs abstract class comparison',
          svg: `<svg viewBox="0 0 760 280" xmlns="http://www.w3.org/2000/svg">
<defs><style>.h{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.b{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.s1{fill:#fef3c7;stroke:#92400e;stroke-width:2}.s2{fill:#e0e7ff;stroke:#4338ca;stroke-width:2}</style></defs>
<text x="190" y="32" class="h">Abstract class</text>
<rect x="40" y="50" width="300" height="210" rx="10" class="s1"/>
<text x="190" y="78" class="b">"is-a" relationship</text>
<text x="190" y="102" class="b">Has state (instance fields)</text>
<text x="190" y="126" class="b">Has constructors</text>
<text x="190" y="150" class="b">Single inheritance ONLY</text>
<text x="190" y="174" class="b">Can have any access modifier</text>
<text x="190" y="198" class="b">Mix abstract + concrete methods</text>
<text x="190" y="230" class="b" fill="#92400e">→ "What an object IS"</text>

<text x="560" y="32" class="h">Interface</text>
<rect x="410" y="50" width="300" height="210" rx="10" class="s2"/>
<text x="560" y="78" class="b">"can-do" capability</text>
<text x="560" y="102" class="b">No instance state (only constants)</text>
<text x="560" y="126" class="b">No constructors</text>
<text x="560" y="150" class="b">Multiple inheritance OK</text>
<text x="560" y="174" class="b">All methods implicitly public</text>
<text x="560" y="198" class="b">Default + static + abstract methods</text>
<text x="560" y="230" class="b" fill="#4338ca">→ "What an object CAN DO"</text>
</svg>` },

        { type: 'callout', kind: 'tip', html: '<strong>Default tendency:</strong> reach for an interface first. Use an abstract class only when you genuinely need shared state or a Template Method skeleton.' }
      ]
    },

    /* ============ Chapter 9 — Polymorphism big picture ============ */
    {
      id: 'oop-c9',
      title: 'Polymorphism Big Picture',
      icon: '🎭',
      sections: [
        { type: 'heading', text: 'Same call — many behaviors', level: 1 },
        { type: 'para', html: 'Polymorphism (Greek: "many forms") is what lets one piece of code work with many different types — as long as they share an interface or parent class.' },
        { type: 'para', html: 'Java has <strong>two kinds</strong> of polymorphism:' },

        { type: 'image', alt: 'Two types of polymorphism',
          svg: `<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b1{fill:#fef3c7;stroke:#92400e;stroke-width:2}.b2{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:16px;font-weight:700;text-anchor:middle}.s{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}</style></defs>
<rect x="40" y="20" width="340" height="180" rx="10" class="b1"/>
<text x="210" y="50" class="t" fill="#92400e">Compile-time</text>
<text x="210" y="75" class="s">aka method overloading</text>
<text x="210" y="105" class="s">add(int, int) vs add(double, double)</text>
<text x="210" y="130" class="s">Picked by COMPILER based on arg types</text>
<text x="210" y="155" class="s">Also: "static dispatch"</text>
<text x="210" y="180" class="s">All decided before program runs</text>

<rect x="400" y="20" width="340" height="180" rx="10" class="b2"/>
<text x="570" y="50" class="t" fill="#15803d">Runtime</text>
<text x="570" y="75" class="s">aka method overriding</text>
<text x="570" y="105" class="s">Animal a = new Dog(); a.speak();</text>
<text x="570" y="130" class="s">Picked by JVM based on actual object</text>
<text x="570" y="155" class="s">Also: "dynamic dispatch"</text>
<text x="570" y="180" class="s">The "real" OOP polymorphism</text>
</svg>` },

        { type: 'heading', text: 'Compile-time: method overloading', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Calculator</span> {
    <span class="kw">public int</span>    <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b)               { <span class="kw">return</span> a + b; }
    <span class="kw">public double</span> <span class="fn">add</span>(<span class="ty">double</span> a, <span class="ty">double</span> b)         { <span class="kw">return</span> a + b; }
    <span class="kw">public int</span>    <span class="fn">add</span>(<span class="ty">int</span> a, <span class="ty">int</span> b, <span class="ty">int</span> c)       { <span class="kw">return</span> a + b + c; }
    <span class="kw">public</span> <span class="ty">String</span> <span class="fn">add</span>(<span class="ty">String</span> a, <span class="ty">String</span> b)         { <span class="kw">return</span> a + b; }
}

<span class="ty">Calculator</span> c = <span class="kw">new</span> <span class="ty">Calculator</span>();
c.<span class="fn">add</span>(<span class="num">1</span>, <span class="num">2</span>);            <span class="com">// → add(int, int)</span>
c.<span class="fn">add</span>(<span class="num">1.5</span>, <span class="num">2.5</span>);        <span class="com">// → add(double, double)</span>
c.<span class="fn">add</span>(<span class="str">"hi "</span>, <span class="str">"there"</span>);   <span class="com">// → add(String, String)</span>` },

        { type: 'callout', kind: 'warn', html: 'You can\'t overload by return type alone. <code>int add(int, int)</code> and <code>double add(int, int)</code> are a compile error — the compiler can\'t tell them apart at the call site.' },

        { type: 'heading', text: 'Runtime: dynamic dispatch', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">interface</span> <span class="ty">Shape</span> { <span class="kw">double</span> <span class="fn">area</span>(); }

<span class="kw">class</span> <span class="ty">Circle</span>    <span class="kw">implements</span> <span class="ty">Shape</span> { <span class="kw">public double</span> <span class="fn">area</span>() { <span class="kw">return</span> <span class="ty">Math</span>.PI * r * r; } ... }
<span class="kw">class</span> <span class="ty">Square</span>    <span class="kw">implements</span> <span class="ty">Shape</span> { <span class="kw">public double</span> <span class="fn">area</span>() { <span class="kw">return</span> side * side; } ... }
<span class="kw">class</span> <span class="ty">Triangle</span>  <span class="kw">implements</span> <span class="ty">Shape</span> { <span class="kw">public double</span> <span class="fn">area</span>() { <span class="kw">return</span> <span class="num">0.5</span> * b * h; } ... }

<span class="com">// One piece of code that works with ALL shapes:</span>
<span class="kw">double</span> <span class="fn">totalArea</span>(<span class="ty">List</span>&lt;<span class="ty">Shape</span>&gt; shapes) {
    <span class="ty">double</span> total = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">Shape</span> s : shapes) total += s.<span class="fn">area</span>();   <span class="com">// JVM picks the right area()</span>
    <span class="kw">return</span> total;
}` },

        { type: 'callout', kind: 'tip', html: 'This is the magic of OOP: <code>totalArea</code> doesn\'t need to know what shapes exist. Add a new <code>Pentagon</code> tomorrow — it just works. Code stays open for extension without modification.' },

        { type: 'heading', text: 'Method hiding (the static gotcha)', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">class</span> <span class="ty">Parent</span> {
    <span class="kw">public static void</span> <span class="fn">hello</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Parent"</span>); }
}
<span class="kw">class</span> <span class="ty">Child</span> <span class="kw">extends</span> <span class="ty">Parent</span> {
    <span class="kw">public static void</span> <span class="fn">hello</span>() { <span class="ty">System</span>.out.<span class="fn">println</span>(<span class="str">"Child"</span>); }
}

<span class="ty">Parent</span> p = <span class="kw">new</span> <span class="ty">Child</span>();
p.<span class="fn">hello</span>();        <span class="com">// Prints "Parent"!  Not dynamic dispatch — static is bound by reference type.</span>` },

        { type: 'callout', kind: 'warn', html: '<strong>Static methods are not polymorphic.</strong> A subclass static method "hides" the parent\'s with the same name — but the call site uses the reference type, not the object type. This is why you should never call static methods through an instance reference.' }
      ]
    },

    /* ============ Chapter 10 — Object class ============ */
    {
      id: 'oop-c10',
      title: 'The Object class',
      icon: '🔑',
      sections: [
        { type: 'heading', text: 'Every Java class has these methods', level: 1 },
        { type: 'para', html: 'Every class implicitly extends <code>Object</code>. That means every object has <code>equals()</code>, <code>hashCode()</code>, <code>toString()</code>, and a few others — and you should override them for any data-bearing class.' },

        { type: 'heading', text: 'toString — for readable output', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Point</span> {
    <span class="kw">private int</span> x, y;
    <span class="com">// ... constructor ...</span>

    @<span class="ty">Override</span>
    <span class="kw">public</span> <span class="ty">String</span> <span class="fn">toString</span>() {
        <span class="kw">return</span> <span class="str">"Point("</span> + x + <span class="str">", "</span> + y + <span class="str">")"</span>;
    }
}

<span class="ty">System</span>.out.<span class="fn">println</span>(<span class="kw">new</span> <span class="ty">Point</span>(<span class="num">3</span>, <span class="num">4</span>));
<span class="com">// Without override: Point@1540e19d  (useless)
// With override:    Point(3, 4)</span>` },

        { type: 'heading', text: 'equals — value comparison', level: 2 },
        { type: 'code', lang: 'java', code: `@<span class="ty">Override</span>
<span class="kw">public boolean</span> <span class="fn">equals</span>(<span class="ty">Object</span> o) {
    <span class="kw">if</span> (<span class="kw">this</span> == o) <span class="kw">return true</span>;              <span class="com">// 1. identity shortcut</span>
    <span class="kw">if</span> (!(o <span class="kw">instanceof</span> <span class="ty">Point</span> p)) <span class="kw">return false</span>;  <span class="com">// 2. null + type check</span>
    <span class="kw">return</span> p.x == x && p.y == y;                <span class="com">// 3. field compare</span>
}` },

        { type: 'callout', kind: 'warn', html: 'Default <code>Object.equals()</code> only checks reference identity (same as <code>==</code>). For data classes, always override it. <strong>Java\'s <code>String</code> overrides equals</strong> — that\'s why <code>"hello".equals("hello")</code> returns <code>true</code>.' },

        { type: 'heading', text: 'hashCode — pair with equals', level: 2 },
        { type: 'code', lang: 'java', code: `@<span class="ty">Override</span>
<span class="kw">public int</span> <span class="fn">hashCode</span>() {
    <span class="kw">return</span> <span class="ty">Objects</span>.<span class="fn">hash</span>(x, y);    <span class="com">// java.util.Objects.hash()</span>
}` },
        { type: 'callout', kind: 'danger', html: '<strong>The contract:</strong> if <code>a.equals(b)</code> is true, <code>a.hashCode() == b.hashCode()</code> MUST be true. Violate this and <code>HashMap</code>, <code>HashSet</code>, etc. silently break — equal keys land in different buckets.' },

        { type: 'heading', text: 'Concrete example', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="ty">Point</span> a = <span class="kw">new</span> <span class="ty">Point</span>(<span class="num">3</span>, <span class="num">4</span>);
<span class="ty">Point</span> b = <span class="kw">new</span> <span class="ty">Point</span>(<span class="num">3</span>, <span class="num">4</span>);

a == b           <span class="com">// false — different objects</span>
a.<span class="fn">equals</span>(b)     <span class="com">// true  — same field values</span>

<span class="ty">Set</span>&lt;<span class="ty">Point</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
seen.<span class="fn">add</span>(a);
seen.<span class="fn">contains</span>(b);   <span class="com">// true — because we overrode BOTH equals and hashCode</span>` },

        { type: 'heading', text: 'Records do it for you', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// Java 14+ records: auto-generate constructor, accessors, equals, hashCode, toString</span>
<span class="kw">public record</span> <span class="ty">Point</span>(<span class="ty">int</span> x, <span class="ty">int</span> y) {}

<span class="ty">Point</span> p1 = <span class="kw">new</span> <span class="ty">Point</span>(<span class="num">1</span>, <span class="num">2</span>);
<span class="ty">Point</span> p2 = <span class="kw">new</span> <span class="ty">Point</span>(<span class="num">1</span>, <span class="num">2</span>);
p1.<span class="fn">equals</span>(p2);          <span class="com">// true</span>
p1.<span class="fn">hashCode</span>() == p2.<span class="fn">hashCode</span>();   <span class="com">// true</span>
p1.<span class="fn">toString</span>();         <span class="com">// "Point[x=1, y=2]"</span>` },

        { type: 'callout', kind: 'success', html: 'For new immutable data classes, prefer records. For mutable classes or those that need custom behavior, write equals/hashCode/toString by hand (or let your IDE generate them).' }
      ]
    },

    /* ============ Chapter 11 — Generics & OOP ============ */
    {
      id: 'oop-c11',
      title: 'Generics meet OOP',
      icon: '🧪',
      sections: [
        { type: 'heading', text: 'Type-safe reusable code', level: 1 },
        { type: 'para', html: '<strong>Generics</strong> let you write classes and methods that work with many types while keeping <em>compile-time type safety</em>. Without them, you\'d cast everything to and from <code>Object</code> — losing safety and clarity.' },

        { type: 'heading', text: 'Generic class', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">Box</span>&lt;<span class="ty">T</span>&gt; {        <span class="com">// T is a type parameter</span>
    <span class="kw">private</span> <span class="ty">T</span> value;
    <span class="kw">public void</span> <span class="fn">set</span>(<span class="ty">T</span> v) { value = v; }
    <span class="kw">public</span> <span class="ty">T</span> <span class="fn">get</span>()      { <span class="kw">return</span> value; }
}

<span class="ty">Box</span>&lt;<span class="ty">String</span>&gt;  sBox = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();
<span class="ty">Box</span>&lt;<span class="ty">Integer</span>&gt; iBox = <span class="kw">new</span> <span class="ty">Box</span>&lt;&gt;();

sBox.<span class="fn">set</span>(<span class="str">"hello"</span>);     <span class="com">// ✅</span>
sBox.<span class="fn">set</span>(<span class="num">42</span>);          <span class="com">// ❌ compile error — wrong type</span>

<span class="ty">String</span> s = sBox.<span class="fn">get</span>();   <span class="com">// no cast needed!</span>` },

        { type: 'heading', text: 'Generic method', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public static</span> &lt;<span class="ty">T</span>&gt; <span class="ty">T</span> <span class="fn">firstOf</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; list) {
    <span class="kw">return</span> list.<span class="fn">get</span>(<span class="num">0</span>);
}

<span class="ty">String</span>  s = <span class="fn">firstOf</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"a"</span>, <span class="str">"b"</span>));    <span class="com">// T = String</span>
<span class="ty">Integer</span> n = <span class="fn">firstOf</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));    <span class="com">// T = Integer</span>` },

        { type: 'heading', text: 'Bounded type parameters', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// T must extend (or implement) Number</span>
<span class="kw">public static</span> &lt;<span class="ty">T</span> <span class="kw">extends</span> <span class="ty">Number</span>&gt; <span class="ty">double</span> <span class="fn">sum</span>(<span class="ty">List</span>&lt;<span class="ty">T</span>&gt; nums) {
    <span class="ty">double</span> total = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">T</span> n : nums) total += n.<span class="fn">doubleValue</span>();
    <span class="kw">return</span> total;
}

<span class="fn">sum</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>));        <span class="com">// ✅ Integer extends Number</span>
<span class="fn">sum</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="num">1.0</span>, <span class="num">2.5</span>));        <span class="com">// ✅ Double extends Number</span>
<span class="fn">sum</span>(<span class="ty">List</span>.<span class="fn">of</span>(<span class="str">"a"</span>, <span class="str">"b"</span>));        <span class="com">// ❌ String doesn\'t extend Number</span>` },

        { type: 'heading', text: 'Wildcards — PECS', level: 2 },
        { type: 'para', html: 'When you need flexible types in method parameters, use wildcards. The mnemonic is <strong>PECS — Producer Extends, Consumer Super</strong>.' },
        { type: 'code', lang: 'java', code: `<span class="com">// PRODUCER (you read from it): ? extends T</span>
<span class="ty">double</span> <span class="fn">sumOfList</span>(<span class="ty">List</span>&lt;? <span class="kw">extends</span> <span class="ty">Number</span>&gt; list) {
    <span class="ty">double</span> total = <span class="num">0</span>;
    <span class="kw">for</span> (<span class="ty">Number</span> n : list) total += n.<span class="fn">doubleValue</span>();
    <span class="kw">return</span> total;
}
<span class="com">// Accepts List&lt;Integer&gt;, List&lt;Double&gt;, List&lt;Long&gt;, ...</span>

<span class="com">// CONSUMER (you write into it): ? super T</span>
<span class="kw">void</span> <span class="fn">fillWithIntegers</span>(<span class="ty">List</span>&lt;? <span class="kw">super</span> <span class="ty">Integer</span>&gt; list) {
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i &lt; <span class="num">10</span>; i++) list.<span class="fn">add</span>(i);
}
<span class="com">// Accepts List&lt;Integer&gt;, List&lt;Number&gt;, List&lt;Object&gt;</span>` },

        { type: 'callout', kind: 'info', html: 'Generics are <strong>invariant</strong>: <code>List&lt;Object&gt;</code> is NOT a supertype of <code>List&lt;String&gt;</code>. This is a common surprise — wildcards exist to relax this when needed.' },

        { type: 'heading', text: 'Type erasure', level: 2 },
        { type: 'para', html: 'Java erases generic type information at compile time. At runtime, <code>List&lt;String&gt;</code> and <code>List&lt;Integer&gt;</code> are both just <code>List</code>. This has consequences:' },
        { type: 'list', kind: 'bullet', items: [
          'You can\'t do <code>new T()</code> — T doesn\'t exist at runtime',
          'You can\'t do <code>obj instanceof List&lt;String&gt;</code> — runtime doesn\'t know the parameter',
          'You can\'t create generic arrays — <code>new T[10]</code> is forbidden',
          'Reflection sees <code>List</code>, not <code>List&lt;String&gt;</code>'
        ] }
      ]
    },

    /* ============ Chapter 12 — SOLID ============ */
    {
      id: 'oop-c12',
      title: 'SOLID & Best Practices',
      icon: '🧱',
      sections: [
        { type: 'heading', text: 'Five principles that age well', level: 1 },
        { type: 'para', html: '<strong>SOLID</strong> is an acronym for five OO design principles popularized by Robert C. Martin. They\'re guidelines, not laws — but consistently applying them produces code that\'s easier to test, change, and read.' },

        { type: 'image', alt: 'SOLID principles overview',
          svg: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs><style>.b{fill:#fef3c7;stroke:#92400e;stroke-width:2}.l{font-family:Inter,sans-serif;font-size:38px;font-weight:700;fill:#92400e;text-anchor:middle}.t{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.d{font-family:Inter,sans-serif;font-size:12px;fill:#1e293b;text-anchor:middle}</style></defs>
<rect x="40" y="20" width="680" height="60" rx="10" class="b"/>
<text x="80" y="62" class="l">S</text>
<text x="380" y="46" class="t">Single Responsibility</text>
<text x="380" y="66" class="d">A class should have one reason to change</text>

<rect x="40" y="90" width="680" height="60" rx="10" class="b"/>
<text x="80" y="132" class="l">O</text>
<text x="380" y="116" class="t">Open / Closed</text>
<text x="380" y="136" class="d">Open for extension, closed for modification</text>

<rect x="40" y="160" width="680" height="60" rx="10" class="b"/>
<text x="80" y="202" class="l">L</text>
<text x="380" y="186" class="t">Liskov Substitution</text>
<text x="380" y="206" class="d">Subtypes substitutable for base types without surprises</text>

<rect x="40" y="230" width="680" height="60" rx="10" class="b"/>
<text x="80" y="272" class="l">I</text>
<text x="380" y="256" class="t">Interface Segregation</text>
<text x="380" y="276" class="d">Many small focused interfaces beat one fat one</text>

<rect x="40" y="300" width="680" height="60" rx="10" class="b"/>
<text x="80" y="342" class="l">D</text>
<text x="380" y="326" class="t">Dependency Inversion</text>
<text x="380" y="346" class="d">Depend on abstractions, not concretions</text>
</svg>` },

        { type: 'heading', text: 'S — Single Responsibility', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// BAD: UserService doing FOUR jobs</span>
<span class="kw">class</span> <span class="ty">UserService</span> {
    <span class="kw">void</span> <span class="fn">register</span>(<span class="ty">String</span> json) {
        <span class="ty">User</span> u = <span class="fn">parseJson</span>(json);            <span class="com">// 1. parsing</span>
        <span class="kw">if</span> (u.email == <span class="kw">null</span>) <span class="kw">throw</span> ...;        <span class="com">// 2. validation</span>
        db.<span class="fn">save</span>(u);                              <span class="com">// 3. persistence</span>
        mailer.<span class="fn">send</span>(u.email, <span class="str">"Welcome"</span>);        <span class="com">// 4. messaging</span>
    }
}

<span class="com">// GOOD: each class has ONE reason to change</span>
<span class="kw">class</span> <span class="ty">UserParser</span>      { <span class="ty">User</span> <span class="fn">parse</span>(<span class="ty">String</span> json) { ... } }
<span class="kw">class</span> <span class="ty">UserValidator</span>   { <span class="kw">void</span> <span class="fn">validate</span>(<span class="ty">User</span> u) { ... } }
<span class="kw">class</span> <span class="ty">UserRepository</span>  { <span class="kw">void</span> <span class="fn">save</span>(<span class="ty">User</span> u) { ... } }
<span class="kw">class</span> <span class="ty">WelcomeMailer</span>   { <span class="kw">void</span> <span class="fn">send</span>(<span class="ty">String</span> email) { ... } }` },

        { type: 'heading', text: 'O — Open / Closed', level: 2 },
        { type: 'para', html: 'You should be able to <em>extend</em> behavior without <em>modifying</em> existing code. Achieved through polymorphism: add a new subclass / interface implementation instead of editing an if/else chain.' },

        { type: 'heading', text: 'L — Liskov Substitution', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// BAD: Square overriding Rectangle\'s setWidth violates LSP</span>
<span class="kw">class</span> <span class="ty">Rectangle</span> {
    <span class="kw">protected int</span> w, h;
    <span class="kw">public void</span> <span class="fn">setWidth</span>(<span class="ty">int</span> w)  { <span class="kw">this</span>.w = w; }
    <span class="kw">public void</span> <span class="fn">setHeight</span>(<span class="ty">int</span> h) { <span class="kw">this</span>.h = h; }
    <span class="kw">public int</span> <span class="fn">area</span>() { <span class="kw">return</span> w * h; }
}
<span class="kw">class</span> <span class="ty">Square</span> <span class="kw">extends</span> <span class="ty">Rectangle</span> {
    @<span class="ty">Override</span>
    <span class="kw">public void</span> <span class="fn">setWidth</span>(<span class="ty">int</span> w)  { <span class="kw">this</span>.w = w; <span class="kw">this</span>.h = w; }   <span class="com">// 🤔</span>
}

<span class="kw">void</span> <span class="fn">grow</span>(<span class="ty">Rectangle</span> r) {
    r.<span class="fn">setWidth</span>(<span class="num">5</span>);
    r.<span class="fn">setHeight</span>(<span class="num">10</span>);
    <span class="kw">assert</span> r.<span class="fn">area</span>() == <span class="num">50</span>;     <span class="com">// fails when r is a Square!</span>
}` },

        { type: 'heading', text: 'I — Interface Segregation', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// BAD: one fat interface; an OldPrinter must implement scan() and fax()</span>
<span class="kw">interface</span> <span class="ty">MultiFunctionDevice</span> {
    <span class="kw">void</span> <span class="fn">print</span>(); <span class="kw">void</span> <span class="fn">scan</span>(); <span class="kw">void</span> <span class="fn">fax</span>();
}

<span class="com">// GOOD: split into small focused interfaces</span>
<span class="kw">interface</span> <span class="ty">Printer</span> { <span class="kw">void</span> <span class="fn">print</span>(); }
<span class="kw">interface</span> <span class="ty">Scanner</span> { <span class="kw">void</span> <span class="fn">scan</span>(); }
<span class="kw">interface</span> <span class="ty">Fax</span>     { <span class="kw">void</span> <span class="fn">fax</span>(); }

<span class="kw">class</span> <span class="ty">OldPrinter</span> <span class="kw">implements</span> <span class="ty">Printer</span> { ... }                <span class="com">// just prints</span>
<span class="kw">class</span> <span class="ty">ModernAllInOne</span> <span class="kw">implements</span> <span class="ty">Printer</span>, <span class="ty">Scanner</span>, <span class="ty">Fax</span> { ... }</code>` },

        { type: 'heading', text: 'D — Dependency Inversion', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// BAD: high-level depends on low-level concrete</span>
<span class="kw">class</span> <span class="ty">OrderService</span> {
    <span class="kw">private</span> <span class="ty">MySqlOrderRepo</span> repo = <span class="kw">new</span> <span class="ty">MySqlOrderRepo</span>();
    <span class="com">// Now impossible to test without a MySQL connection</span>
}

<span class="com">// GOOD: depend on abstraction, inject implementation</span>
<span class="kw">interface</span> <span class="ty">OrderRepo</span> { <span class="kw">void</span> <span class="fn">save</span>(<span class="ty">Order</span> o); }

<span class="kw">class</span> <span class="ty">OrderService</span> {
    <span class="kw">private final</span> <span class="ty">OrderRepo</span> repo;
    <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">OrderRepo</span> repo) { <span class="kw">this</span>.repo = repo; }
}

<span class="kw">new</span> <span class="ty">OrderService</span>(<span class="kw">new</span> <span class="ty">MySqlOrderRepo</span>());      <span class="com">// production</span>
<span class="kw">new</span> <span class="ty">OrderService</span>(<span class="kw">new</span> <span class="ty">FakeOrderRepo</span>());      <span class="com">// tests</span>` },

        { type: 'heading', text: 'Common anti-patterns', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>God class</strong> — 1000+ LOC, many concerns. Split it.',
          '<strong>Anemic domain</strong> — data classes with no behavior; all logic lives elsewhere',
          '<strong>Inheritance for code reuse</strong> when composition would fit better',
          '<strong>Deep inheritance hierarchies</strong> (&gt;3 levels) — fragile and hard to follow',
          '<strong>Returning mutable internals</strong> — caller can wreck your invariants',
          '<strong>Forgetting <code>hashCode</code></strong> when overriding <code>equals</code>',
          '<strong>Empty catch blocks</strong> hiding bugs'
        ] },

        { type: 'callout', kind: 'success', html: '<strong>Final rule of thumb:</strong> aim for code that\'s easy to <em>delete</em> when requirements change. Loosely coupled, focused classes pass that test. Tightly bound god classes don\'t.' }
      ]
    }

  ]
});

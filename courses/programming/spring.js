PUSH({
  id: 'spring',
  name: 'Spring Boot',
  icon: '🍃',
  color: '#6db33f',
  description: 'Java\'s favorite framework — build production-grade APIs the Spring Boot way.',
  units: [

    /* ============== UNIT 1 — What is Spring & Spring Boot ============== */
    {
      id: 'spr-u1', name: 'Unit 1 · What is Spring & Spring Boot', description: 'IoC, DI, and why auto-config matters',
      lessons: [
        {
          id: 'spr-u1-l1', name: 'Spring vs Spring Boot', icon: '🍃', xp: 15,
          challenges: [
            { type: 'concept', title: 'Spring = framework. Spring Boot = opinionated Spring.', content: `<p><strong>Spring</strong> is a huge Java framework for building enterprise apps — but it historically required mountains of XML and boilerplate.</p>
<p><strong>Spring Boot</strong> sits on top of Spring and says: "here are sensible defaults, an embedded Tomcat, and starter dependencies. Just write your code."</p>
<div class="code-block"><span class="com">// Classic Spring — XML hell, no embedded server, manual everything</span>
<span class="com">// vs.</span>
<span class="com">// Spring Boot — one main class, you\'re running in 30 seconds</span>

<span class="kw">@SpringBootApplication</span>
<span class="kw">public class</span> <span class="ty">App</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="ty">SpringApplication</span>.<span class="fn">run</span>(<span class="ty">App</span>.<span class="kw">class</span>, args);
  }
}</div>
<p>Boot embeds Tomcat (or Jetty/Undertow) inside your jar. <code>java -jar app.jar</code> and you have a web server.</p>` },
            { type: 'multiple-choice', prompt: 'What does Spring Boot add on top of Spring?',
              options: [
                { text: 'A new language', code: false },
                { text: 'Auto-configuration, starters, and an embedded server', code: false },
                { text: 'A database', code: false },
                { text: 'Nothing — they\'re identical', code: false }
              ],
              correct: 1, explanation: 'Boot is "Spring with batteries included" — sane defaults so you can focus on business logic.' },
            { type: 'true-false', statement: 'Spring Boot apps require an external Tomcat installation to run.', correct: false, explanation: 'False. Spring Boot ships an embedded server inside the jar — just <code>java -jar</code>.' },
            { type: 'match-pairs', prompt: 'Match the thing to what it is.', leftLabel: 'Thing', rightLabel: 'Meaning',
              pairs: [
                { left: 'Spring', right: 'The underlying framework' },
                { left: 'Spring Boot', right: 'Opinionated Spring + starters' },
                { left: 'Starter', right: 'A curated set of dependencies' },
                { left: 'Auto-config', right: 'Beans configured for you' }
              ] },
            { type: 'multiple-choice', prompt: 'The main entry annotation for a Spring Boot app is:',
              options: [
                { text: '@SpringApp', code: true },
                { text: '@SpringBootApplication', code: true },
                { text: '@EnableBoot', code: true },
                { text: '@Main', code: true }
              ],
              correct: 1, explanation: '<code>@SpringBootApplication</code> bundles <code>@Configuration</code>, <code>@ComponentScan</code>, and <code>@EnableAutoConfiguration</code>.' }
          ]
        },
        {
          id: 'spr-u1-l2', name: 'IoC and Dependency Injection', icon: '🔄', xp: 20,
          challenges: [
            { type: 'concept', title: 'Inversion of Control = Spring builds your objects', content: `<p>Without Spring, your code <em>constructs its own collaborators</em>:</p>
<div class="code-block"><span class="kw">class</span> <span class="ty">OrderService</span> {
  <span class="ty">EmailClient</span> mail = <span class="kw">new</span> <span class="ty">EmailClient</span>();   <span class="com">// tightly coupled!</span>
}</div>
<p>With Spring, you <strong>declare what you need</strong>; Spring constructs and wires it for you. The flow of control is "inverted" — the framework calls you.</p>
<div class="code-block"><span class="kw">@Service</span>
<span class="kw">class</span> <span class="ty">OrderService</span> {
  <span class="kw">private final</span> <span class="ty">EmailClient</span> mail;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">EmailClient</span> mail) {  <span class="com">// Spring injects this</span>
    <span class="kw">this</span>.mail = mail;
  }
}</div>
<p>Spring holds a registry of <strong>beans</strong> (managed objects) in its <strong>ApplicationContext</strong>. Ask for one — you get one.</p>` },
            { type: 'multiple-choice', prompt: '"Inversion of Control" means:',
              options: [
                { text: 'Your code creates the framework', code: false },
                { text: 'The framework creates and manages your objects', code: false },
                { text: 'Code runs backward', code: false },
                { text: 'You write everything in XML', code: false }
              ],
              correct: 1, explanation: 'You declare dependencies; the container builds them and hands them to you.' },
            { type: 'true-false', statement: 'Beans are just objects whose lifecycle is managed by the Spring container.', correct: true, explanation: 'A bean = a Spring-managed object.' },
            { type: 'fill-blank', prompt: 'Name the container that holds Spring beans:',
              codeLines: [{ html: '<span class="ty">_BLANK_</span> ctx = <span class="ty">SpringApplication</span>.<span class="fn">run</span>(<span class="ty">App</span>.<span class="kw">class</span>, args);' }],
              tokens: ['ApplicationContext', 'BeanContainer', 'SpringRegistry', 'IoCContext'],
              correctAnswer: 'ApplicationContext', explanation: 'The <code>ApplicationContext</code> is the central Spring container.' },
            { type: 'multiple-choice', prompt: 'Why is constructor injection preferred?',
              options: [
                { text: 'It\'s the only one that works', code: false },
                { text: 'Dependencies become final/immutable and the object is never in a half-built state', code: false },
                { text: 'It\'s faster at runtime', code: false },
                { text: 'It\'s required by JVM', code: false }
              ],
              correct: 1, explanation: 'Constructor injection makes dependencies explicit and the object immutable — easier to test, harder to misuse.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Project setup ============== */
    {
      id: 'spr-u2', name: 'Unit 2 · Project Setup', description: 'Initializr, starters, properties',
      lessons: [
        {
          id: 'spr-u2-l1', name: 'Spring Initializr & starters', icon: '🚀', xp: 15,
          challenges: [
            { type: 'concept', title: 'start.spring.io is the launchpad', content: `<p><a>start.spring.io</a> generates a ready-to-build project. You pick:</p>
<ul>
<li><strong>Build tool</strong> — Maven or Gradle</li>
<li><strong>Language</strong> — Java / Kotlin / Groovy</li>
<li><strong>Spring Boot version</strong></li>
<li><strong>Starters</strong> — curated dependency bundles</li>
</ul>
<div class="code-block"><span class="com">// pom.xml — common starters</span>
&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
&lt;/dependency&gt;</div>
<p>A <strong>starter</strong> is a pom that pulls in a curated set of transitive dependencies. <code>spring-boot-starter-web</code> = Spring MVC + Jackson + embedded Tomcat + validation.</p>` },
            { type: 'multiple-choice', prompt: 'A Spring Boot "starter" is:',
              options: [
                { text: 'A run script', code: false },
                { text: 'A POM with a curated set of dependencies for a use case', code: false },
                { text: 'The main class', code: false },
                { text: 'The first request to hit the app', code: false }
              ],
              correct: 1, explanation: 'Starters bundle the dependencies you typically need together.' },
            { type: 'match-pairs', prompt: 'Match starter → purpose.', leftLabel: 'Starter', rightLabel: 'Purpose',
              pairs: [
                { left: 'spring-boot-starter-web', right: 'REST + MVC + Tomcat' },
                { left: 'spring-boot-starter-data-jpa', right: 'Hibernate + JPA' },
                { left: 'spring-boot-starter-security', right: 'Authentication & authorization' },
                { left: 'spring-boot-starter-test', right: 'JUnit, Mockito, MockMvc' }
              ] },
            { type: 'true-false', statement: 'Spring Boot apps must be built with Maven; Gradle is not supported.', correct: false, explanation: 'Both Maven and Gradle are first-class.' },
            { type: 'output-predict', prompt: 'What does this print on startup?',
              code: `<span class="ty">SpringApplication</span>.<span class="fn">run</span>(<span class="ty">App</span>.<span class="kw">class</span>, args);
<span class="com">// banner shows...</span>`,
              options: ['A blank line', 'The Spring ASCII banner', 'Hello World', 'An error'],
              correct: 1, explanation: 'By default Spring Boot prints an ASCII art "Spring" banner — disable with <code>spring.main.banner-mode=off</code>.' }
          ]
        },
        {
          id: 'spr-u2-l2', name: 'application.properties', icon: '⚙️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Config lives in src/main/resources', content: `<p>Spring Boot reads <strong>application.properties</strong> (or <strong>application.yml</strong>) automatically.</p>
<div class="code-block"><span class="com"># application.properties</span>
server.port=8081
spring.application.name=order-service

spring.datasource.url=jdbc:postgresql://localhost:5432/orders
spring.datasource.username=admin
spring.datasource.password=secret

logging.level.org.springframework=INFO</div>
<p>Or YAML:</p>
<div class="code-block"><span class="com"># application.yml</span>
server:
  port: 8081
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/orders</div>
<p>Spring exposes hundreds of properties — the IDE will autocomplete them.</p>` },
            { type: 'multiple-choice', prompt: 'Which file does Spring Boot read on startup for config?',
              options: [
                { text: 'config.xml', code: true },
                { text: 'application.properties or application.yml', code: true },
                { text: 'web.config', code: true },
                { text: 'pom.xml', code: true }
              ],
              correct: 1, explanation: 'Both formats work; YAML is more popular for nested config.' },
            { type: 'true-false', statement: 'The default HTTP port for a Spring Boot web app is 8080.', correct: true, explanation: 'Override with <code>server.port</code>.' },
            { type: 'tap-tokens', prompt: 'Build the line that changes the server port to 9090:',
              tokens: ['server', '.', 'port', '=', '9090', 'localhost', '8080'],
              correctOrder: ['server', '.', 'port', '=', '9090'],
              explanation: 'Properties files use dot-separated keys.' },
            { type: 'fill-blank', prompt: 'Set application name to "billing":',
              codeLines: [{ html: 'spring.application.<span class="fn">_BLANK_</span>=billing' }],
              tokens: ['name', 'id', 'title', 'label'],
              correctAnswer: 'name', explanation: '<code>spring.application.name</code> identifies the app (used by service discovery).' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Dependency Injection ============== */
    {
      id: 'spr-u3', name: 'Unit 3 · Dependency Injection', description: 'Components, services, wiring',
      lessons: [
        {
          id: 'spr-u3-l1', name: 'Stereotype annotations', icon: '🏷️', xp: 20,
          challenges: [
            { type: 'concept', title: '@Component and friends', content: `<p>Spring scans your code for classes annotated with stereotypes and registers them as beans:</p>
<div class="code-block"><span class="kw">@Component</span>   <span class="com">// generic Spring-managed bean</span>
<span class="kw">@Service</span>     <span class="com">// business logic layer</span>
<span class="kw">@Repository</span>  <span class="com">// data access layer (extras: exception translation)</span>
<span class="kw">@Controller</span>  <span class="com">// web MVC controller</span>
<span class="kw">@RestController</span>  <span class="com">// @Controller + @ResponseBody</span></div>
<p>They\'re all <code>@Component</code> under the hood — but using the right one documents intent and unlocks layer-specific behavior.</p>
<div class="code-block"><span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">PaymentService</span> {
  <span class="kw">public</span> <span class="ty">Receipt</span> <span class="fn">charge</span>(<span class="ty">Order</span> o) { ... }
}</div>` },
            { type: 'match-pairs', prompt: 'Match stereotype → layer.', leftLabel: 'Annotation', rightLabel: 'Layer',
              pairs: [
                { left: '@Service', right: 'Business logic' },
                { left: '@Repository', right: 'Data access' },
                { left: '@RestController', right: 'REST endpoints' },
                { left: '@Component', right: 'Generic bean' }
              ] },
            { type: 'multiple-choice', prompt: 'Which annotation adds exception translation for persistence errors?',
              options: [
                { text: '@Service', code: true },
                { text: '@Controller', code: true },
                { text: '@Repository', code: true },
                { text: '@Bean', code: true }
              ],
              correct: 2, explanation: '<code>@Repository</code> wraps DB-specific exceptions into Spring\'s <code>DataAccessException</code> hierarchy.' },
            { type: 'true-false', statement: 'A class without any stereotype annotation can still be a Spring bean — if you declare it as @Bean in a @Configuration class.', correct: true, explanation: 'That\'s the manual route — useful for 3rd-party classes you can\'t annotate.' },
            { type: 'fill-blank', prompt: 'Mark this as a REST controller:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>\n<span class="kw">public class</span> <span class="ty">UserController</span> { }' }],
              tokens: ['@RestController', '@Component', '@Service', '@Repository'],
              correctAnswer: '@RestController', explanation: 'Use <code>@RestController</code> for JSON-returning HTTP endpoints.' }
          ]
        },
        {
          id: 'spr-u3-l2', name: 'Constructor injection', icon: '💉', xp: 25,
          challenges: [
            { type: 'concept', title: 'Inject via the constructor — best practice', content: `<p>Three injection styles exist; constructor injection is preferred:</p>
<div class="code-block"><span class="com">// 1. Constructor (BEST) — immutable, testable, no half-built object</span>
<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {
  <span class="kw">private final</span> <span class="ty">OrderRepository</span> repo;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">OrderRepository</span> repo) {  <span class="com">// Spring auto-wires</span>
    <span class="kw">this</span>.repo = repo;
  }
}

<span class="com">// 2. Field injection — concise but hard to test</span>
<span class="kw">@Autowired</span>
<span class="kw">private</span> <span class="ty">OrderRepository</span> repo;

<span class="com">// 3. Setter injection — needed for optional deps</span>
<span class="kw">@Autowired</span>
<span class="kw">public void</span> <span class="fn">setRepo</span>(<span class="ty">OrderRepository</span> r) { <span class="kw">this</span>.repo = r; }</div>
<p>Since Spring 4.3, the <code>@Autowired</code> on a single constructor is <strong>optional</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'Why is field injection (<code>@Autowired</code> on a field) discouraged?',
              options: [
                { text: 'It doesn\'t work', code: false },
                { text: 'Hides dependencies, harder to test, fields can\'t be final', code: false },
                { text: 'It\'s deprecated', code: false },
                { text: 'It causes runtime errors', code: false }
              ],
              correct: 1, explanation: 'Constructor injection makes deps explicit, supports <code>final</code>, and lets you instantiate without Spring in tests.' },
            { type: 'reorder-code', prompt: 'Order the lines to define a service with constructor injection.',
              lines: [
                '<span class="kw">@Service</span>',
                '<span class="kw">public class</span> <span class="ty">OrderService</span> {',
                '  <span class="kw">private final</span> <span class="ty">OrderRepository</span> repo;',
                '  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">OrderRepository</span> repo) { <span class="kw">this</span>.repo = repo; }',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'true-false', statement: 'If a class has only one constructor, you don\'t need to write @Autowired on it.', correct: true, explanation: 'Single-constructor classes are auto-wired by default since Spring 4.3.' },
            { type: 'type-answer', prompt: 'What annotation explicitly marks a dependency for auto-wiring? (just the annotation, including @)',
              code: '',
              accept: ['@Autowired', '@autowired'],
              explanation: '<code>@Autowired</code> tells Spring to find a matching bean and inject it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Annotations cheatsheet ============== */
    {
      id: 'spr-u4', name: 'Unit 4 · Annotations Cheatsheet', description: 'The big ones, decoded',
      lessons: [
        {
          id: 'spr-u4-l1', name: '@SpringBootApplication and @Bean', icon: '✨', xp: 20,
          challenges: [
            { type: 'concept', title: 'The meta-annotation and manual beans', content: `<p><code>@SpringBootApplication</code> = three annotations rolled into one:</p>
<div class="code-block"><span class="kw">@SpringBootApplication</span>   <span class="com">// =</span>
<span class="com">//   @Configuration         (this class declares beans)</span>
<span class="com">//   @ComponentScan         (scan this package + subpackages)</span>
<span class="com">//   @EnableAutoConfiguration (configure beans based on classpath)</span></div>
<p>To declare a bean manually (3rd-party class you can\'t annotate):</p>
<div class="code-block"><span class="kw">@Configuration</span>
<span class="kw">public class</span> <span class="ty">AppConfig</span> {
  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">RestTemplate</span> <span class="fn">restTemplate</span>() {
    <span class="kw">return new</span> <span class="ty">RestTemplate</span>();
  }
}</div>
<p>Now you can <code>@Autowired RestTemplate</code> anywhere.</p>` },
            { type: 'multiple-choice', prompt: 'What does @SpringBootApplication NOT include?',
              options: [
                { text: '@Configuration', code: true },
                { text: '@ComponentScan', code: true },
                { text: '@EnableAutoConfiguration', code: true },
                { text: '@Transactional', code: true }
              ],
              correct: 3, explanation: '<code>@Transactional</code> is separate — used on service methods to wrap them in a DB transaction.' },
            { type: 'tap-tokens', prompt: 'Build a @Bean method that returns a RestTemplate.',
              tokens: ['@Bean', 'public', 'RestTemplate', 'RestTemplate', 'restTemplate', '(', '(', ')', ')', '{', 'return', 'new', ';', '}'],
              correctOrder: ['@Bean', 'public', 'RestTemplate', 'restTemplate', '(', ')', '{', 'return', 'new', 'RestTemplate', '(', ')', ';', '}'],
              explanation: 'Method-level <code>@Bean</code> registers the return value as a bean named after the method.' },
            { type: 'true-false', statement: 'A method annotated with @Bean must live inside a @Configuration (or @Component) class.', correct: true, explanation: 'Spring only processes <code>@Bean</code> methods on configuration/stereotyped classes.' },
            { type: 'match-pairs', prompt: 'Match annotation → its role.', leftLabel: 'Annotation', rightLabel: 'Role',
              pairs: [
                { left: '@Configuration', right: 'Class declares beans' },
                { left: '@Bean', right: 'Method returns a bean' },
                { left: '@ComponentScan', right: 'Discover stereotyped classes' },
                { left: '@EnableAutoConfiguration', right: 'Auto-wire common things' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Spring MVC ============== */
    {
      id: 'spr-u5', name: 'Unit 5 · Spring MVC & REST', description: 'Controllers, mappings, request/response',
      lessons: [
        {
          id: 'spr-u5-l1', name: '@RestController & @RequestMapping', icon: '🌐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Your first REST endpoint', content: `<div class="code-block"><span class="kw">@RestController</span>
<span class="kw">@RequestMapping</span>(<span class="str">"/api/users"</span>)
<span class="kw">public class</span> <span class="ty">UserController</span> {

  <span class="kw">@GetMapping</span>
  <span class="kw">public</span> <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">all</span>() { <span class="kw">return</span> service.<span class="fn">findAll</span>(); }

  <span class="kw">@GetMapping</span>(<span class="str">"/{id}"</span>)
  <span class="kw">public</span> <span class="ty">User</span> <span class="fn">one</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id) {
    <span class="kw">return</span> service.<span class="fn">findById</span>(id);
  }

  <span class="kw">@PostMapping</span>
  <span class="kw">public</span> <span class="ty">User</span> <span class="fn">create</span>(<span class="kw">@RequestBody</span> <span class="ty">User</span> u) {
    <span class="kw">return</span> service.<span class="fn">save</span>(u);
  }
}</div>
<p><code>@RestController</code> = <code>@Controller</code> + <code>@ResponseBody</code>. Returned objects are automatically serialized to JSON by Jackson.</p>` },
            { type: 'match-pairs', prompt: 'Match annotation → HTTP method.', leftLabel: 'Annotation', rightLabel: 'HTTP method',
              pairs: [
                { left: '@GetMapping', right: 'GET' },
                { left: '@PostMapping', right: 'POST' },
                { left: '@PutMapping', right: 'PUT' },
                { left: '@DeleteMapping', right: 'DELETE' }
              ] },
            { type: 'multiple-choice', prompt: 'What does <code>@PathVariable</code> capture?',
              options: [
                { text: 'The request body', code: false },
                { text: 'A query string parameter', code: false },
                { text: 'A value from the URL path (e.g., /users/{id})', code: false },
                { text: 'A header', code: false }
              ],
              correct: 2, explanation: 'It binds a URI template variable to a method parameter.' },
            { type: 'multiple-choice', prompt: '<code>@RequestBody</code> deserializes:',
              options: [
                { text: 'The URL', code: false },
                { text: 'The JSON request body into a Java object (via Jackson)', code: false },
                { text: 'Query parameters', code: false },
                { text: 'Form fields only', code: false }
              ],
              correct: 1, explanation: 'Jackson turns the incoming JSON into your DTO/entity.' },
            { type: 'fill-blank', prompt: 'Pick the right annotation for a GET endpoint at /ping.',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>(<span class="str">"/ping"</span>)\n<span class="kw">public</span> <span class="ty">String</span> <span class="fn">ping</span>() { <span class="kw">return</span> <span class="str">"pong"</span>; }' }],
              tokens: ['@GetMapping', '@PostMapping', '@PutMapping', '@DeleteMapping'],
              correctAnswer: '@GetMapping', explanation: 'GETs are reads — idempotent and safe.' }
          ]
        },
        {
          id: 'spr-u5-l2', name: 'Query params & ResponseEntity', icon: '📥', xp: 25,
          challenges: [
            { type: 'concept', title: '@RequestParam and HTTP status control', content: `<div class="code-block"><span class="kw">@GetMapping</span>(<span class="str">"/search"</span>)
<span class="kw">public</span> <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">search</span>(
    <span class="kw">@RequestParam</span> <span class="ty">String</span> q,
    <span class="kw">@RequestParam</span>(defaultValue = <span class="str">"10"</span>) <span class="ty">int</span> limit) {
  <span class="kw">return</span> service.<span class="fn">search</span>(q, limit);
}</div>
<p>To control status code or headers, return <code>ResponseEntity</code>:</p>
<div class="code-block"><span class="kw">@PostMapping</span>
<span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">User</span>&gt; <span class="fn">create</span>(<span class="kw">@RequestBody</span> <span class="ty">User</span> u) {
  <span class="ty">User</span> saved = service.<span class="fn">save</span>(u);
  <span class="kw">return</span> <span class="ty">ResponseEntity</span>
      .<span class="fn">status</span>(<span class="ty">HttpStatus</span>.CREATED)
      .<span class="fn">body</span>(saved);
}</div>` },
            { type: 'multiple-choice', prompt: 'What URL would trigger <code>search(q="java", limit=5)</code>?',
              options: [
                { text: '/search/java/5', code: true },
                { text: '/search?q=java&limit=5', code: true },
                { text: '/search?java=q&5=limit', code: true },
                { text: '/search/java?limit=5', code: true }
              ],
              correct: 1, explanation: 'Query params are <code>?key=value&key2=value2</code> in the URL.' },
            { type: 'output-predict', prompt: 'Request: GET /search?q=foo (no limit). What is limit?',
              code: `<span class="kw">@RequestParam</span>(defaultValue = <span class="str">"10"</span>) <span class="ty">int</span> limit`,
              options: ['null', '0', '10', 'error: missing param'],
              correct: 2, explanation: 'When the param is missing, <code>defaultValue</code> applies.' },
            { type: 'true-false', statement: 'Returning <code>ResponseEntity</code> lets you set HTTP status, headers, and body.', correct: true, explanation: 'It\'s the flexible wrapper for full HTTP control.' },
            { type: 'reorder-code', prompt: 'Order this controller method that returns 201 Created.',
              lines: [
                '<span class="kw">@PostMapping</span>',
                '<span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">User</span>&gt; <span class="fn">create</span>(<span class="kw">@RequestBody</span> <span class="ty">User</span> u) {',
                '  <span class="ty">User</span> saved = service.<span class="fn">save</span>(u);',
                '  <span class="kw">return</span> <span class="ty">ResponseEntity</span>.<span class="fn">status</span>(<span class="ty">HttpStatus</span>.CREATED).<span class="fn">body</span>(saved);',
                '}'
              ],
              correctOrder: [0, 1, 2, 3, 4] }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Validation & error handling ============== */
    {
      id: 'spr-u6', name: 'Unit 6 · Validation & Error Handling', description: '@Valid and global error handlers',
      lessons: [
        {
          id: 'spr-u6-l1', name: '@Valid with Bean Validation', icon: '✅', xp: 20,
          challenges: [
            { type: 'concept', title: 'Validate request bodies declaratively', content: `<div class="code-block"><span class="kw">public class</span> <span class="ty">UserRequest</span> {
  <span class="kw">@NotBlank</span>
  <span class="kw">private</span> <span class="ty">String</span> name;

  <span class="kw">@Email</span>
  <span class="kw">private</span> <span class="ty">String</span> email;

  <span class="kw">@Min</span>(<span class="num">18</span>)
  <span class="kw">private int</span> age;
}

<span class="kw">@PostMapping</span>
<span class="kw">public</span> <span class="ty">User</span> <span class="fn">create</span>(<span class="kw">@Valid</span> <span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req) {
  <span class="kw">return</span> service.<span class="fn">save</span>(req);
}</div>
<p>If validation fails, Spring throws <code>MethodArgumentNotValidException</code> and returns a 400.</p>
<p>Common constraints (from <code>jakarta.validation.constraints</code>): <code>@NotNull</code>, <code>@NotBlank</code>, <code>@Size</code>, <code>@Min</code>, <code>@Max</code>, <code>@Email</code>, <code>@Pattern</code>.</p>` },
            { type: 'match-pairs', prompt: 'Match constraint → check.', leftLabel: 'Annotation', rightLabel: 'Checks',
              pairs: [
                { left: '@NotBlank', right: 'String not null & not whitespace' },
                { left: '@Min(18)', right: 'Number is at least 18' },
                { left: '@Email', right: 'Looks like an email' },
                { left: '@Size(max=50)', right: 'Length ≤ 50' }
              ] },
            { type: 'multiple-choice', prompt: 'What triggers validation on the request body?',
              options: [
                { text: '@RequestBody alone', code: true },
                { text: '@Validated only on the class', code: true },
                { text: '@Valid placed before @RequestBody on the parameter', code: true },
                { text: 'Nothing — it\'s automatic', code: true }
              ],
              correct: 2, explanation: 'You must mark the parameter with <code>@Valid</code> (or <code>@Validated</code>) for the constraints to fire.' },
            { type: 'true-false', statement: 'When validation fails on @Valid @RequestBody, the default response is HTTP 400.', correct: true, explanation: 'Spring maps <code>MethodArgumentNotValidException</code> to 400 Bad Request.' },
            { type: 'fill-blank', prompt: 'Make the name field non-null and non-empty:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>\n<span class="kw">private</span> <span class="ty">String</span> name;' }],
              tokens: ['@NotBlank', '@Empty', '@Required', '@NotNullSafe'],
              correctAnswer: '@NotBlank', explanation: '<code>@NotBlank</code> = not null AND not whitespace. <code>@NotNull</code> wouldn\'t reject "".' }
          ]
        },
        {
          id: 'spr-u6-l2', name: 'Global error handling', icon: '🛑', xp: 25,
          challenges: [
            { type: 'concept', title: '@ControllerAdvice catches everywhere', content: `<p>Instead of try/catch in every controller, declare a single advisor:</p>
<div class="code-block"><span class="kw">@RestControllerAdvice</span>
<span class="kw">public class</span> <span class="ty">GlobalExceptionHandler</span> {

  <span class="kw">@ExceptionHandler</span>(<span class="ty">NotFoundException</span>.<span class="kw">class</span>)
  <span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">String</span>&gt; <span class="fn">notFound</span>(<span class="ty">NotFoundException</span> e) {
    <span class="kw">return</span> <span class="ty">ResponseEntity</span>.<span class="fn">status</span>(<span class="num">404</span>).<span class="fn">body</span>(e.<span class="fn">getMessage</span>());
  }

  <span class="kw">@ExceptionHandler</span>(<span class="ty">Exception</span>.<span class="kw">class</span>)
  <span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">String</span>&gt; <span class="fn">generic</span>(<span class="ty">Exception</span> e) {
    <span class="kw">return</span> <span class="ty">ResponseEntity</span>.<span class="fn">status</span>(<span class="num">500</span>).<span class="fn">body</span>(<span class="str">"Internal error"</span>);
  }
}</div>
<p>Any controller throwing those exception types funnels through the advisor.</p>` },
            { type: 'multiple-choice', prompt: '<code>@RestControllerAdvice</code> differs from <code>@ControllerAdvice</code> in that it:',
              options: [
                { text: 'Doesn\'t exist', code: false },
                { text: 'Auto-applies @ResponseBody so handler returns become JSON', code: false },
                { text: 'Is for SOAP', code: false },
                { text: 'Replaces controllers', code: false }
              ],
              correct: 1, explanation: 'It\'s <code>@ControllerAdvice</code> + <code>@ResponseBody</code> on every handler.' },
            { type: 'true-false', statement: 'You can have multiple @ExceptionHandler methods in one @ControllerAdvice, each handling a different exception type.', correct: true, explanation: 'Spring picks the most specific match.' },
            { type: 'tap-tokens', prompt: 'Annotate a method to handle NotFoundException.',
              tokens: ['@ExceptionHandler', '(', 'NotFoundException', '.', 'class', ')', '@Component', '@Service'],
              correctOrder: ['@ExceptionHandler', '(', 'NotFoundException', '.', 'class', ')'],
              explanation: 'Pass the exception class as the value of <code>@ExceptionHandler</code>.' },
            { type: 'output-predict', prompt: 'A controller throws NotFoundException. The advisor returns 404. What status reaches the client?',
              code: `<span class="kw">throw new</span> <span class="ty">NotFoundException</span>(<span class="str">"User missing"</span>);`,
              options: ['200', '400', '404', '500'],
              correct: 2, explanation: 'The advisor maps it to 404.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Spring Data JPA ============== */
    {
      id: 'spr-u7', name: 'Unit 7 · Spring Data JPA', description: 'Entities and repositories',
      lessons: [
        {
          id: 'spr-u7-l1', name: '@Entity basics', icon: '🗃️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Map a class to a table', content: `<div class="code-block"><span class="kw">@Entity</span>
<span class="kw">@Table</span>(name = <span class="str">"users"</span>)
<span class="kw">public class</span> <span class="ty">User</span> {

  <span class="kw">@Id</span>
  <span class="kw">@GeneratedValue</span>(strategy = <span class="ty">GenerationType</span>.IDENTITY)
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@Column</span>(nullable = <span class="kw">false</span>, length = <span class="num">100</span>)
  <span class="kw">private</span> <span class="ty">String</span> name;

  <span class="kw">@Column</span>(unique = <span class="kw">true</span>)
  <span class="kw">private</span> <span class="ty">String</span> email;

  <span class="com">// getters, setters, no-arg constructor — required by JPA</span>
}</div>
<p>Each instance ↔ one row. The id field is the primary key. JPA needs a no-arg constructor and fields that aren\'t <code>final</code>.</p>` },
            { type: 'match-pairs', prompt: 'Match annotation → meaning.', leftLabel: 'Annotation', rightLabel: 'Meaning',
              pairs: [
                { left: '@Entity', right: 'Maps class to a table' },
                { left: '@Id', right: 'Primary key field' },
                { left: '@GeneratedValue', right: 'Auto-generate PK' },
                { left: '@Column', right: 'Per-column settings' }
              ] },
            { type: 'true-false', statement: 'A JPA entity class must have a public no-arg constructor.', correct: true, explanation: 'JPA instantiates via reflection — it needs a no-arg ctor.' },
            { type: 'multiple-choice', prompt: 'Which strategy uses the database\'s auto-increment column?',
              options: [
                { text: 'GenerationType.AUTO', code: true },
                { text: 'GenerationType.IDENTITY', code: true },
                { text: 'GenerationType.SEQUENCE', code: true },
                { text: 'GenerationType.TABLE', code: true }
              ],
              correct: 1, explanation: 'IDENTITY = let the DB column auto-increment. SEQUENCE uses a DB sequence object.' },
            { type: 'fill-blank', prompt: 'Mark the primary key field:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>\n<span class="kw">private</span> <span class="ty">Long</span> id;' }],
              tokens: ['@Id', '@PrimaryKey', '@Key', '@PK'],
              correctAnswer: '@Id', explanation: '<code>@Id</code> from <code>jakarta.persistence</code>.' }
          ]
        },
        {
          id: 'spr-u7-l2', name: 'JpaRepository & derived queries', icon: '🔎', xp: 25,
          challenges: [
            { type: 'concept', title: 'Repositories you don\'t implement', content: `<div class="code-block"><span class="kw">public interface</span> <span class="ty">UserRepository</span> <span class="kw">extends</span> <span class="ty">JpaRepository</span>&lt;<span class="ty">User</span>, <span class="ty">Long</span>&gt; {

  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findByEmail</span>(<span class="ty">String</span> email);

  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findByAgeGreaterThan</span>(<span class="ty">int</span> age);

  <span class="ty">Optional</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findFirstByNameOrderByCreatedAtDesc</span>(<span class="ty">String</span> name);
}</div>
<p>You write an <em>interface</em>; Spring Data generates the implementation at runtime by parsing the method names. <code>JpaRepository</code> gives you <code>save</code>, <code>findById</code>, <code>findAll</code>, <code>deleteById</code>, etc., for free.</p>
<p>For complex queries, use <code>@Query</code> with JPQL or native SQL.</p>` },
            { type: 'multiple-choice', prompt: 'Spring Data JPA generates repository implementations by:',
              options: [
                { text: 'Asking you to write them', code: false },
                { text: 'Parsing method names like findByEmail into queries at startup', code: false },
                { text: 'Generating code into your source folder', code: false },
                { text: 'Random magic', code: false }
              ],
              correct: 1, explanation: 'Method names are the query DSL.' },
            { type: 'match-pairs', prompt: 'Match method name → query.', leftLabel: 'Method', rightLabel: 'Query (rough)',
              pairs: [
                { left: 'findByEmail', right: 'WHERE email = ?' },
                { left: 'findByAgeGreaterThan', right: 'WHERE age > ?' },
                { left: 'findByNameContaining', right: 'WHERE name LIKE %?%' },
                { left: 'countByActiveTrue', right: 'SELECT COUNT(*) WHERE active = true' }
              ] },
            { type: 'true-false', statement: 'JpaRepository extends CrudRepository and PagingAndSortingRepository.', correct: true, explanation: 'It bundles CRUD + paging + sorting.' },
            { type: 'fill-blank', prompt: 'Write a method to find a user by email:',
              codeLines: [{ html: '<span class="ty">Optional</span>&lt;<span class="ty">User</span>&gt; <span class="fn">_BLANK_</span>(<span class="ty">String</span> email);' }],
              tokens: ['findByEmail', 'getByEmail', 'getEmail', 'lookup'],
              correctAnswer: 'findByEmail', explanation: 'Method name must start with <code>findBy</code> followed by the field name.' },
            { type: 'output-predict', prompt: 'You call <code>userRepository.findById(99L)</code> for a user that doesn\'t exist. The return value is:',
              code: `<span class="ty">Optional</span>&lt;<span class="ty">User</span>&gt; u = userRepository.<span class="fn">findById</span>(<span class="num">99L</span>);`,
              options: ['null', 'A new empty User', 'Optional.empty()', 'An exception'],
              correct: 2, explanation: '<code>findById</code> returns <code>Optional</code> — empty when not found.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — JPA relationships ============== */
    {
      id: 'spr-u8', name: 'Unit 8 · JPA Relationships', description: 'One-to-many, many-to-one, cascades',
      lessons: [
        {
          id: 'spr-u8-l1', name: '@OneToMany and @ManyToOne', icon: '🔗', xp: 25,
          challenges: [
            { type: 'concept', title: 'A post has many comments', content: `<div class="code-block"><span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">Post</span> {
  <span class="kw">@Id @GeneratedValue</span>
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@OneToMany</span>(mappedBy = <span class="str">"post"</span>, cascade = <span class="ty">CascadeType</span>.ALL)
  <span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">Comment</span>&gt; comments = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
}

<span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">Comment</span> {
  <span class="kw">@Id @GeneratedValue</span>
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@ManyToOne</span>(fetch = <span class="ty">FetchType</span>.LAZY)
  <span class="kw">@JoinColumn</span>(name = <span class="str">"post_id"</span>)
  <span class="kw">private</span> <span class="ty">Post</span> post;
}</div>
<p>The "many" side (<code>Comment</code>) owns the FK column (<code>post_id</code>). <code>mappedBy</code> on the "one" side tells JPA "the other side owns the mapping."</p>` },
            { type: 'multiple-choice', prompt: 'In a Post / Comment relationship, which side typically owns the FK column?',
              options: [
                { text: 'The "one" side (Post)', code: false },
                { text: 'The "many" side (Comment) — that\'s where post_id lives', code: false },
                { text: 'Neither', code: false },
                { text: 'Both', code: false }
              ],
              correct: 1, explanation: 'In SQL the FK column always sits on the "many" side; same in JPA.' },
            { type: 'match-pairs', prompt: 'Match relationship → SQL pattern.', leftLabel: 'JPA', rightLabel: 'Effect',
              pairs: [
                { left: '@OneToMany(mappedBy)', right: 'No extra column; other side has FK' },
                { left: '@ManyToOne', right: 'FK column on this side' },
                { left: '@ManyToMany', right: 'Separate join table' },
                { left: '@OneToOne', right: 'FK with UNIQUE constraint' }
              ] },
            { type: 'true-false', statement: '@ManyToOne defaults to EAGER fetch; @OneToMany defaults to LAZY.', correct: true, explanation: 'A classic gotcha — many EAGER joins blow up your queries. Set to LAZY explicitly.' },
            { type: 'multiple-choice', prompt: '<code>CascadeType.ALL</code> on Post.comments means:',
              options: [
                { text: 'Only reads cascade', code: false },
                { text: 'Persist, merge, remove, refresh, detach on Post also apply to its Comments', code: false },
                { text: 'All FKs are NULL', code: false },
                { text: 'Comments load eagerly', code: false }
              ],
              correct: 1, explanation: 'CASCADE.ALL = save Post → comments saved; delete Post → comments deleted.' },
            { type: 'fill-blank', prompt: 'On the @OneToMany side, point to the owning field on the other entity:',
              codeLines: [{ html: '<span class="kw">@OneToMany</span>(<span class="fn">_BLANK_</span> = <span class="str">"post"</span>)\n<span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">Comment</span>&gt; comments;' }],
              tokens: ['mappedBy', 'joinedBy', 'fetch', 'cascade'],
              correctAnswer: 'mappedBy', explanation: '<code>mappedBy = "post"</code> means "the Comment.post field owns this association."' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Properties & profiles ============== */
    {
      id: 'spr-u9', name: 'Unit 9 · Properties & Profiles', description: 'Environment-specific config',
      lessons: [
        {
          id: 'spr-u9-l1', name: '@Value and @ConfigurationProperties', icon: '🎛️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Read config into beans', content: `<p>Inject a single property:</p>
<div class="code-block"><span class="kw">@Component</span>
<span class="kw">public class</span> <span class="ty">Mailer</span> {
  <span class="kw">@Value</span>(<span class="str">"\${mail.from}"</span>)
  <span class="kw">private</span> <span class="ty">String</span> fromAddress;
}</div>
<p>Or group related props into a typed object:</p>
<div class="code-block"><span class="kw">@ConfigurationProperties</span>(prefix = <span class="str">"mail"</span>)
<span class="kw">public class</span> <span class="ty">MailProps</span> {
  <span class="kw">private</span> <span class="ty">String</span> from;
  <span class="kw">private int</span> retries;
  <span class="com">// getters / setters</span>
}</div>
<div class="code-block"><span class="com"># application.properties</span>
mail.from=alerts@example.com
mail.retries=3</div>
<p>The <code>\${...}</code> syntax is a <strong>property placeholder</strong> — handled by Spring (not Java template strings).</p>` },
            { type: 'multiple-choice', prompt: '<code>@Value("\${db.url}")</code> injects:',
              options: [
                { text: 'A bean named db.url', code: false },
                { text: 'The value of property db.url from the environment / properties file', code: false },
                { text: 'A literal string "db.url"', code: false },
                { text: 'Nothing — it\'s invalid', code: false }
              ],
              correct: 1, explanation: 'Property placeholder resolution.' },
            { type: 'true-false', statement: '@ConfigurationProperties is better than @Value when you have many related properties.', correct: true, explanation: 'It binds them as a typed object with IDE autocompletion and validation.' },
            { type: 'tap-tokens', prompt: 'Build a @Value annotation that reads server.host.',
              tokens: ['@Value', '(', '"', '$', '{', 'server', '.', 'host', '}', '"', ')'],
              correctOrder: ['@Value', '(', '"', '$', '{', 'server', '.', 'host', '}', '"', ')'],
              explanation: 'Note the literal <code>\${...}</code> syntax — that\'s Spring\'s placeholder, not Java string interpolation.' },
            { type: 'match-pairs', prompt: 'Match feature → strength.', leftLabel: 'Feature', rightLabel: 'Best for',
              pairs: [
                { left: '@Value', right: 'One-off scalar values' },
                { left: '@ConfigurationProperties', right: 'Grouped, typed config' },
                { left: 'application.yml', right: 'Nested structured config' },
                { left: 'Environment.getProperty', right: 'Programmatic lookups' }
              ] }
          ]
        },
        {
          id: 'spr-u9-l2', name: 'Profiles', icon: '🌗', xp: 20,
          challenges: [
            { type: 'concept', title: 'application-{profile}.properties', content: `<p>Have different config per environment by creating profile-specific files:</p>
<div class="code-block">application.properties              <span class="com"># base</span>
application-dev.properties          <span class="com"># development</span>
application-prod.properties         <span class="com"># production</span>
application-test.properties         <span class="com"># tests</span></div>
<p>Activate with <code>spring.profiles.active=dev</code> in <code>application.properties</code>, env var, or command line:</p>
<div class="code-block">java -jar app.jar --spring.profiles.active=prod</div>
<p>Mark beans as profile-specific:</p>
<div class="code-block"><span class="kw">@Service</span>
<span class="kw">@Profile</span>(<span class="str">"prod"</span>)
<span class="kw">public class</span> <span class="ty">RealEmailService</span> <span class="kw">implements</span> <span class="ty">EmailService</span> { ... }

<span class="kw">@Service</span>
<span class="kw">@Profile</span>(<span class="str">"!prod"</span>)
<span class="kw">public class</span> <span class="ty">StubEmailService</span> <span class="kw">implements</span> <span class="ty">EmailService</span> { ... }</div>` },
            { type: 'multiple-choice', prompt: 'Which file is loaded when spring.profiles.active=dev?',
              options: [
                { text: 'Only application-dev.properties', code: false },
                { text: 'application.properties AND application-dev.properties (latter overrides)', code: false },
                { text: 'application.dev.yml', code: false },
                { text: 'None — profile is just a tag', code: false }
              ],
              correct: 1, explanation: 'Base is always loaded; profile-specific layers on top.' },
            { type: 'true-false', statement: 'You can activate multiple profiles at once: spring.profiles.active=dev,debug', correct: true, explanation: 'Comma-separated; each layer overrides.' },
            { type: 'output-predict', prompt: 'Active profile = "dev". Which bean is registered?',
              code: `<span class="kw">@Profile</span>(<span class="str">"prod"</span>) <span class="kw">class</span> <span class="ty">RealSvc</span> { }
<span class="kw">@Profile</span>(<span class="str">"!prod"</span>) <span class="kw">class</span> <span class="ty">StubSvc</span> { }`,
              options: ['RealSvc', 'StubSvc', 'Both', 'Neither'],
              correct: 1, explanation: '!prod is true when prod is not active, so StubSvc registers.' },
            { type: 'fill-blank', prompt: 'Activate the "prod" profile via property file:',
              codeLines: [{ html: 'spring.profiles.<span class="fn">_BLANK_</span>=prod' }],
              tokens: ['active', 'enable', 'use', 'select'],
              correctAnswer: 'active', explanation: '<code>spring.profiles.active</code> picks which profiles are on.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Security ============== */
    {
      id: 'spr-u10', name: 'Unit 10 · Spring Security Basics', description: 'Locking down your endpoints',
      lessons: [
        {
          id: 'spr-u10-l1', name: 'SecurityFilterChain & BCrypt', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Configure who can hit what', content: `<p>Add <code>spring-boot-starter-security</code> and EVERY endpoint becomes protected by default (HTTP Basic with a random password printed at startup).</p>
<p>Configure access rules with a <code>SecurityFilterChain</code> bean:</p>
<div class="code-block"><span class="kw">@Configuration</span>
<span class="kw">@EnableWebSecurity</span>
<span class="kw">public class</span> <span class="ty">SecurityConfig</span> {

  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">SecurityFilterChain</span> <span class="fn">chain</span>(<span class="ty">HttpSecurity</span> http) <span class="kw">throws</span> <span class="ty">Exception</span> {
    http
      .<span class="fn">authorizeHttpRequests</span>(a -&gt; a
          .<span class="fn">requestMatchers</span>(<span class="str">"/public/**"</span>).<span class="fn">permitAll</span>()
          .<span class="fn">requestMatchers</span>(<span class="str">"/admin/**"</span>).<span class="fn">hasRole</span>(<span class="str">"ADMIN"</span>)
          .<span class="fn">anyRequest</span>().<span class="fn">authenticated</span>())
      .<span class="fn">httpBasic</span>(<span class="ty">Customizer</span>.<span class="fn">withDefaults</span>());
    <span class="kw">return</span> http.<span class="fn">build</span>();
  }

  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">PasswordEncoder</span> <span class="fn">encoder</span>() {
    <span class="kw">return new</span> <span class="ty">BCryptPasswordEncoder</span>();
  }
}</div>` },
            { type: 'multiple-choice', prompt: 'When you add spring-boot-starter-security with no config, what happens?',
              options: [
                { text: 'Nothing changes', code: false },
                { text: 'All endpoints require auth; a random password is generated and logged at startup', code: false },
                { text: 'Everything becomes public', code: false },
                { text: 'The app refuses to start', code: false }
              ],
              correct: 1, explanation: 'Secure-by-default — look for "Using generated security password" in the logs.' },
            { type: 'true-false', statement: 'You should store user passwords as plain text in the database.', correct: false, explanation: 'NEVER. Use BCrypt (or Argon2) to hash + salt them.' },
            { type: 'match-pairs', prompt: 'Match HttpSecurity DSL call → effect.', leftLabel: 'Call', rightLabel: 'Effect',
              pairs: [
                { left: 'permitAll()', right: 'Open to everyone' },
                { left: 'authenticated()', right: 'Must be logged in' },
                { left: 'hasRole("ADMIN")', right: 'Requires ADMIN role' },
                { left: 'denyAll()', right: 'Always deny' }
              ] },
            { type: 'fill-blank', prompt: 'Create a BCrypt password encoder bean:',
              codeLines: [{ html: '<span class="kw">return new</span> <span class="ty">_BLANK_</span>();' }],
              tokens: ['BCryptPasswordEncoder', 'PlainPasswordEncoder', 'MD5PasswordEncoder', 'NoOpPasswordEncoder'],
              correctAnswer: 'BCryptPasswordEncoder', explanation: 'BCrypt is the standard for hashing passwords in Spring Security.' }
          ]
        },
        {
          id: 'spr-u10-l2', name: 'JWT & stateless APIs', icon: '🎫', xp: 25,
          challenges: [
            { type: 'concept', title: 'JWT auth at a high level', content: `<p>For stateless REST APIs, sessions don\'t fit. The typical flow:</p>
<ol>
<li>Client POSTs credentials to <code>/login</code>.</li>
<li>Server validates, signs a <strong>JWT</strong>, returns it.</li>
<li>Client sends <code>Authorization: Bearer &lt;token&gt;</code> on every request.</li>
<li>A custom filter validates the JWT and sets the authenticated user in the security context.</li>
</ol>
<div class="code-block"><span class="com">// Typical filter chain config for JWT</span>
http
  .<span class="fn">csrf</span>(c -&gt; c.<span class="fn">disable</span>())                  <span class="com">// stateless = no CSRF</span>
  .<span class="fn">sessionManagement</span>(s -&gt; s.<span class="fn">sessionCreationPolicy</span>(STATELESS))
  .<span class="fn">authorizeHttpRequests</span>(...)
  .<span class="fn">addFilterBefore</span>(jwtFilter, <span class="ty">UsernamePasswordAuthenticationFilter</span>.<span class="kw">class</span>);</div>
<p>The JWT itself is a base64-encoded <code>header.payload.signature</code>. The signature proves it wasn\'t tampered with.</p>` },
            { type: 'multiple-choice', prompt: 'A JWT consists of three base64-encoded sections:',
              options: [
                { text: 'header.payload.signature', code: true },
                { text: 'username.password.role', code: true },
                { text: 'host.path.query', code: true },
                { text: 'created.expires.id', code: true }
              ],
              correct: 0, explanation: 'Three parts joined with dots: header, payload (claims), signature.' },
            { type: 'true-false', statement: 'JWT-based APIs are typically stateless — the server stores no session for the client.', correct: true, explanation: 'All client identity travels in the token; the server just validates the signature.' },
            { type: 'multiple-choice', prompt: 'Why disable CSRF for a JWT API?',
              options: [
                { text: 'CSRF doesn\'t exist for JWT', code: false },
                { text: 'CSRF protections target session-cookie auth — irrelevant when auth lives in an Authorization header', code: false },
                { text: 'JWT is slower than CSRF', code: false },
                { text: 'Spring requires it', code: false }
              ],
              correct: 1, explanation: 'CSRF assumes cookies are sent automatically. JWT in a header isn\'t sent by the browser unless your code adds it.' },
            { type: 'type-answer', prompt: 'What header carries the JWT on each request? (just the header NAME, e.g. X-Something)',
              code: '',
              accept: ['Authorization', 'authorization'],
              explanation: 'Format: <code>Authorization: Bearer &lt;token&gt;</code>.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Testing ============== */
    {
      id: 'spr-u11', name: 'Unit 11 · Testing', description: 'Slices, MockMvc, DataJpaTest',
      lessons: [
        {
          id: 'spr-u11-l1', name: 'Test slices', icon: '🧪', xp: 25,
          challenges: [
            { type: 'concept', title: '@SpringBootTest vs @WebMvcTest vs @DataJpaTest', content: `<p>Boot offers <strong>test slices</strong> — load only the beans relevant to what you\'re testing:</p>
<div class="code-block"><span class="kw">@SpringBootTest</span>           <span class="com">// full context (integration test)</span>
<span class="kw">@WebMvcTest</span>(<span class="ty">UserController</span>.<span class="kw">class</span>)  <span class="com">// just controllers + MVC infra</span>
<span class="kw">@DataJpaTest</span>             <span class="com">// JPA repos + in-memory DB</span>
<span class="kw">@JsonTest</span>                <span class="com">// just JSON serialization</span></div>
<div class="code-block"><span class="kw">@WebMvcTest</span>(<span class="ty">UserController</span>.<span class="kw">class</span>)
<span class="kw">class</span> <span class="ty">UserControllerTest</span> {
  <span class="kw">@Autowired</span> <span class="ty">MockMvc</span> mvc;
  <span class="kw">@MockBean</span> <span class="ty">UserService</span> service;

  <span class="kw">@Test</span>
  <span class="kw">void</span> <span class="fn">getsUser</span>() <span class="kw">throws</span> <span class="ty">Exception</span> {
    <span class="fn">when</span>(service.<span class="fn">findById</span>(<span class="num">1L</span>)).<span class="fn">thenReturn</span>(<span class="kw">new</span> <span class="ty">User</span>(<span class="num">1L</span>, <span class="str">"A"</span>));

    mvc.<span class="fn">perform</span>(<span class="fn">get</span>(<span class="str">"/users/1"</span>))
       .<span class="fn">andExpect</span>(<span class="fn">status</span>().<span class="fn">isOk</span>())
       .<span class="fn">andExpect</span>(<span class="fn">jsonPath</span>(<span class="str">"$.name"</span>).<span class="fn">value</span>(<span class="str">"A"</span>));
  }
}</div>` },
            { type: 'match-pairs', prompt: 'Match slice → loads.', leftLabel: 'Annotation', rightLabel: 'Loads',
              pairs: [
                { left: '@SpringBootTest', right: 'Full app context' },
                { left: '@WebMvcTest', right: 'Controllers + MVC only' },
                { left: '@DataJpaTest', right: 'Repositories + H2' },
                { left: '@JsonTest', right: 'Jackson only' }
              ] },
            { type: 'multiple-choice', prompt: 'MockMvc lets you:',
              options: [
                { text: 'Start a real HTTP server', code: false },
                { text: 'Drive the controller layer without a network stack — fast HTTP-like tests', code: false },
                { text: 'Mock the database', code: false },
                { text: 'Skip Spring entirely', code: false }
              ],
              correct: 1, explanation: 'MockMvc invokes controllers through the Spring MVC machinery, but without binding a port.' },
            { type: 'true-false', statement: '@MockBean replaces a real bean in the application context with a Mockito mock.', correct: true, explanation: 'Great for isolating the layer under test.' },
            { type: 'fill-blank', prompt: 'Slice annotation that loads only repositories:',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>\n<span class="kw">class</span> <span class="ty">UserRepoTest</span> { }' }],
              tokens: ['@DataJpaTest', '@WebMvcTest', '@JsonTest', '@SpringBootTest'],
              correctAnswer: '@DataJpaTest', explanation: 'It also runs against an in-memory DB (H2) by default.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Actuator & observability ============== */
    {
      id: 'spr-u12', name: 'Unit 12 · Actuator & Observability', description: 'Health, metrics, info',
      lessons: [
        {
          id: 'spr-u12-l1', name: 'Actuator endpoints', icon: '📊', xp: 15,
          challenges: [
            { type: 'concept', title: 'Production-ready monitoring out of the box', content: `<p>Add <code>spring-boot-starter-actuator</code> and you get a suite of management endpoints under <code>/actuator</code>:</p>
<div class="code-block">/actuator/health    <span class="com"># UP / DOWN status</span>
/actuator/info      <span class="com"># build / app info</span>
/actuator/metrics   <span class="com"># JVM, HTTP, DB metrics</span>
/actuator/env       <span class="com"># env properties</span>
/actuator/loggers   <span class="com"># view + change log levels at runtime</span></div>
<p>Most are disabled over HTTP by default — expose them explicitly:</p>
<div class="code-block"><span class="com"># application.properties</span>
management.endpoints.web.exposure.include=health,info,metrics</div>
<p>Pair with Prometheus + Grafana via <code>micrometer-registry-prometheus</code> for production-grade dashboards.</p>` },
            { type: 'multiple-choice', prompt: 'Which actuator endpoint reports app liveness?',
              options: [
                { text: '/actuator/info', code: true },
                { text: '/actuator/health', code: true },
                { text: '/actuator/env', code: true },
                { text: '/actuator/metrics', code: true }
              ],
              correct: 1, explanation: '<code>/actuator/health</code> returns <code>{"status":"UP"}</code> when healthy.' },
            { type: 'true-false', statement: 'By default all actuator endpoints are exposed over HTTP.', correct: false, explanation: 'Only <code>health</code> is exposed by default; explicitly include others.' },
            { type: 'match-pairs', prompt: 'Match endpoint → use.', leftLabel: 'Endpoint', rightLabel: 'Use',
              pairs: [
                { left: '/actuator/health', right: 'Liveness probe' },
                { left: '/actuator/metrics', right: 'Performance counters' },
                { left: '/actuator/loggers', right: 'Change log levels at runtime' },
                { left: '/actuator/env', right: 'Inspect configuration' }
              ] },
            { type: 'fill-blank', prompt: 'Expose health and metrics endpoints:',
              codeLines: [{ html: 'management.endpoints.web.exposure.<span class="fn">_BLANK_</span>=health,metrics' }],
              tokens: ['include', 'expose', 'enable', 'show'],
              correctAnswer: 'include', explanation: '<code>...exposure.include</code> is the property key.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Build & packaging ============== */
    {
      id: 'spr-u13', name: 'Unit 13 · Build & Packaging', description: 'Maven, Gradle, fat jars',
      lessons: [
        {
          id: 'spr-u13-l1', name: 'Fat jars & java -jar', icon: '📦', xp: 15,
          challenges: [
            { type: 'concept', title: 'One jar to rule them all', content: `<p>Spring Boot\'s build plugin produces a <strong>fat jar</strong> (a.k.a. uber-jar) containing your code plus every dependency, runnable with:</p>
<div class="code-block">mvn clean package         <span class="com"># or: gradle build</span>
java -jar target/app-1.0.0.jar</div>
<p>No app server install — Tomcat is inside the jar.</p>
<div class="code-block"><span class="com">&lt;!-- pom.xml --&gt;</span>
&lt;build&gt;
  &lt;plugins&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;</div>
<p>Override properties at runtime:</p>
<div class="code-block">java -jar app.jar --server.port=9090 --spring.profiles.active=prod</div>` },
            { type: 'multiple-choice', prompt: 'A Spring Boot "fat jar" contains:',
              options: [
                { text: 'Only your compiled classes', code: false },
                { text: 'Your classes + every dependency + an embedded server, runnable with java -jar', code: false },
                { text: 'Just a WAR file', code: false },
                { text: 'Source code only', code: false }
              ],
              correct: 1, explanation: 'Everything needed to run, in one archive.' },
            { type: 'true-false', statement: 'You can override Spring Boot properties from the command line: java -jar app.jar --server.port=9090', correct: true, explanation: 'Args, env vars, JVM system props, profile files, application.properties — in that priority order.' },
            { type: 'reorder-code', prompt: 'Order the steps to build and run.',
              lines: [
                '<span class="com"># 1. write code + pom.xml</span>',
                '<span class="com"># 2. mvn clean package</span>',
                '<span class="com"># 3. java -jar target/app.jar</span>',
                '<span class="com"># 4. open http://localhost:8080</span>'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'tap-tokens', prompt: 'Build the command to run the fat jar with the prod profile.',
              tokens: ['java', '-jar', 'app.jar', '--spring.profiles.active=prod', '--config', '--use=prod'],
              correctOrder: ['java', '-jar', 'app.jar', '--spring.profiles.active=prod'],
              explanation: 'Spring picks up <code>--key=value</code> as a property.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Microservices with Spring Cloud ============== */
    {
      id: 'spr-u14', name: 'Unit 14 · Microservices with Spring Cloud', description: 'Eureka, config server, OpenFeign',
      lessons: [
        {
          id: 'spr-u14-l1', name: 'Service discovery & inter-service calls', icon: '☁️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A high-level tour of Spring Cloud', content: `<p>Spring Cloud is a family of projects for distributed systems. The headline pieces:</p>
<ul>
<li><strong>Eureka</strong> — service registry. Services register on startup; others look up by name.</li>
<li><strong>Spring Cloud Config</strong> — central config server (often backed by Git).</li>
<li><strong>OpenFeign</strong> — declarative HTTP client; you write an interface, Feign implements it.</li>
<li><strong>Resilience4j</strong> — circuit breakers, retries, rate limiting.</li>
<li><strong>API Gateway</strong> (Spring Cloud Gateway) — single entry point + routing.</li>
</ul>
<div class="code-block"><span class="kw">@FeignClient</span>(name = <span class="str">"billing-service"</span>)
<span class="kw">public interface</span> <span class="ty">BillingClient</span> {
  <span class="kw">@GetMapping</span>(<span class="str">"/invoices/{id}"</span>)
  <span class="ty">Invoice</span> <span class="fn">find</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id);
}</div>
<p>Just inject <code>BillingClient</code> — Feign generates the HTTP code and (with Eureka) resolves "billing-service" to an actual host.</p>` },
            { type: 'match-pairs', prompt: 'Match Spring Cloud project → role.', leftLabel: 'Project', rightLabel: 'Role',
              pairs: [
                { left: 'Eureka', right: 'Service registry' },
                { left: 'Config Server', right: 'Centralized config' },
                { left: 'OpenFeign', right: 'Declarative HTTP client' },
                { left: 'Gateway', right: 'API gateway / routing' }
              ] },
            { type: 'multiple-choice', prompt: 'What does OpenFeign let you do?',
              options: [
                { text: 'Write raw socket code', code: false },
                { text: 'Define an interface annotated like a controller; Feign generates the HTTP client', code: false },
                { text: 'Replace JPA', code: false },
                { text: 'Run multiple JVMs in one process', code: false }
              ],
              correct: 1, explanation: 'You write the shape; Feign handles the wire.' },
            { type: 'true-false', statement: 'A Eureka server is itself a Spring Boot app annotated with @EnableEurekaServer.', correct: true, explanation: 'Run it on its own port; other services point at it.' },
            { type: 'output-predict', prompt: 'A Feign client is injected as @FeignClient(name="users"). What does "users" mean?',
              code: `<span class="kw">@FeignClient</span>(name = <span class="str">"users"</span>)
<span class="kw">interface</span> <span class="ty">UsersClient</span> { ... }`,
              options: ['The HTTP path', 'The service ID looked up in the registry', 'A bean name only', 'The hostname'],
              correct: 1, explanation: 'With discovery enabled, "users" is resolved via Eureka (or other registry) to a host.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Best practices ============== */
    {
      id: 'spr-u15', name: 'Unit 15 · Best Practices & Pitfalls', description: 'DTOs, layering, transactions',
      lessons: [
        {
          id: 'spr-u15-l1', name: 'DTOs vs entities & layered architecture', icon: '🏗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Don\'t expose your DB to the world', content: `<p>An <strong>entity</strong> is your DB shape — it changes when the schema changes. A <strong>DTO</strong> is your API shape — it changes when the contract changes. Keep them separate.</p>
<div class="code-block"><span class="com">// Entity (private)</span>
<span class="kw">@Entity</span>
<span class="kw">class</span> <span class="ty">User</span> {
  <span class="kw">@Id</span> <span class="kw">private</span> <span class="ty">Long</span> id;
  <span class="kw">private</span> <span class="ty">String</span> passwordHash;   <span class="com">// must never leak</span>
}

<span class="com">// DTO (public)</span>
<span class="kw">public record</span> <span class="ty">UserResponse</span>(<span class="ty">Long</span> id, <span class="ty">String</span> name, <span class="ty">String</span> email) { }</div>
<p>Layers that pay rent:</p>
<ul>
<li><strong>Controller</strong> — HTTP only. Validate, call a service, return a DTO.</li>
<li><strong>Service</strong> — business logic + transactions.</li>
<li><strong>Repository</strong> — DB access. Returns entities.</li>
</ul>
<p>Keep them thin and one-way: controller → service → repository.</p>` },
            { type: 'multiple-choice', prompt: 'Why use DTOs instead of returning entities directly?',
              options: [
                { text: 'DTOs are faster', code: false },
                { text: 'Decouples API contract from DB schema; prevents leaking sensitive fields; avoids lazy-loading exceptions', code: false },
                { text: 'JPA requires it', code: false },
                { text: 'No reason — entities are fine', code: false }
              ],
              correct: 1, explanation: 'Three solid reasons — and your future self will thank you.' },
            { type: 'true-false', statement: 'A service method that updates multiple rows should be annotated @Transactional.', correct: true, explanation: 'It ensures atomicity — either all changes commit, or all roll back.' },
            { type: 'match-pairs', prompt: 'Match layer → responsibility.', leftLabel: 'Layer', rightLabel: 'Responsibility',
              pairs: [
                { left: 'Controller', right: 'HTTP / serialization' },
                { left: 'Service', right: 'Business logic + transactions' },
                { left: 'Repository', right: 'Data access' },
                { left: 'DTO', right: 'API contract object' }
              ] },
            { type: 'multiple-choice', prompt: 'A common @Transactional gotcha: calling a @Transactional method from another method in the SAME class:',
              options: [
                { text: 'Works as expected', code: false },
                { text: 'Bypasses the proxy — no transaction is started', code: false },
                { text: 'Starts two transactions', code: false },
                { text: 'Throws an error', code: false }
              ],
              correct: 1, explanation: 'Spring AOP proxies wrap external calls. Self-invocations skip the proxy. Move the method to another bean.' },
            { type: 'output-predict', prompt: 'Inside a service: <code>@Transactional</code> method A calls self.B(), B is also @Transactional. How many transactions started?',
              code: `<span class="com">// Inside the same bean</span>
methodA() {   <span class="com">// @Transactional</span>
  <span class="kw">this</span>.<span class="fn">methodB</span>();   <span class="com">// also @Transactional</span>
}`,
              options: ['0', '1', '2', 'depends on the database'],
              correct: 1, explanation: 'Only the outer call goes through the proxy. The inner self-call bypasses it — so just 1 transaction.' }
          ]
        }
      ]
    }

  ]
});

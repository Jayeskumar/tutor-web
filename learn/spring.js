LEARN('spring', {
  intro: 'A guided tour of Spring Boot — from auto-config and dependency injection to JPA, security, testing, and production essentials.',
  chapters: [

    /* ============ Chapter 1 ============ */
    {
      id: 'spr-c1',
      title: 'What is Spring & Spring Boot?',
      icon: '🍃',
      sections: [
        { type: 'heading', text: 'Spring vs Spring Boot', level: 1 },
        { type: 'para', html: 'The <strong>Spring Framework</strong> is the Java ecosystem\'s most successful application framework. It gives you dependency injection, web MVC, transactions, security, and much more. The problem? It also gave you mountains of XML, boilerplate configuration, and external app server setup.' },
        { type: 'para', html: '<strong>Spring Boot</strong> sits on top of Spring and brings three game-changers: <em>auto-configuration</em>, <em>opinionated starters</em>, and an <em>embedded server</em>. The result: a production-grade web app in five lines of code.' },

        { type: 'heading', text: 'The Hello World', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@SpringBootApplication</span>
<span class="kw">public class</span> <span class="ty">App</span> {
  <span class="kw">public static void</span> <span class="fn">main</span>(<span class="ty">String</span>[] args) {
    <span class="ty">SpringApplication</span>.<span class="fn">run</span>(<span class="ty">App</span>.<span class="kw">class</span>, args);
  }
}

<span class="kw">@RestController</span>
<span class="kw">class</span> <span class="ty">HelloController</span> {
  <span class="kw">@GetMapping</span>(<span class="str">"/"</span>)
  <span class="ty">String</span> <span class="fn">hi</span>() { <span class="kw">return</span> <span class="str">"Hello, Spring Boot!"</span>; }
}` },
        { type: 'para', html: 'Run it. An embedded Tomcat starts on port 8080. Open <code>http://localhost:8080</code> and there\'s your response. Zero XML, zero servlet config, zero deployment dance.' },

        { type: 'heading', text: 'The three superpowers', level: 2 },
        { type: 'image', alt: 'Spring Boot pillars',
          svg: `<svg viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#dcfce7;stroke:#15803d;stroke-width:2}.bt{fill:#14532d;font-family:Inter,sans-serif;font-weight:700;font-size:18px;text-anchor:middle}.bd{fill:#1e293b;font-family:Inter,sans-serif;font-size:13px;text-anchor:middle}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:22px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="400" y="32" class="t">What Spring Boot gives you</text>
<rect x="60" y="60" width="200" height="150" rx="14" class="b"/>
<text x="160" y="100" class="bt">Auto-configuration</text>
<text x="160" y="135" class="bd">Sees what\'s on classpath</text>
<text x="160" y="155" class="bd">→ wires sensible beans</text>
<text x="160" y="180" class="bd">You override only as needed</text>
<rect x="300" y="60" width="200" height="150" rx="14" class="b"/>
<text x="400" y="100" class="bt">Starter POMs</text>
<text x="400" y="135" class="bd">spring-boot-starter-web</text>
<text x="400" y="155" class="bd">spring-boot-starter-data-jpa</text>
<text x="400" y="180" class="bd">…curated dependency sets</text>
<rect x="540" y="60" width="200" height="150" rx="14" class="b"/>
<text x="640" y="100" class="bt">Embedded server</text>
<text x="640" y="135" class="bd">Tomcat/Jetty/Undertow</text>
<text x="640" y="155" class="bd">inside the jar</text>
<text x="640" y="180" class="bd">java -jar app.jar</text>
</svg>` },

        { type: 'heading', text: 'IoC and dependency injection', level: 2 },
        { type: 'para', html: '<strong>Inversion of Control</strong> means the framework, not your code, decides when objects are created and how they are wired together. You <em>declare</em> what your class needs; Spring provides it.' },
        { type: 'code', lang: 'java', code: `<span class="com">// You write this:</span>
<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {
  <span class="kw">private final</span> <span class="ty">OrderRepository</span> repo;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">OrderRepository</span> repo) {
    <span class="kw">this</span>.repo = repo;     <span class="com">// Spring passes a managed instance</span>
  }
}` },
        { type: 'callout', kind: 'tip', html: 'The container holding all your beans is the <strong>ApplicationContext</strong>. Spring scans your packages, finds annotated classes, and registers them. Then it satisfies dependencies between them — like a librarian who knows where every book belongs.' },

        { type: 'list', kind: 'check', items: [
          '<strong>Bean</strong> — any object whose lifecycle is managed by Spring',
          '<strong>ApplicationContext</strong> — the registry of all beans',
          '<strong>Component scan</strong> — automatic discovery of stereotyped classes',
          '<strong>Auto-config</strong> — defaults based on what\'s on the classpath'
        ] },
        { type: 'callout', kind: 'info', html: '<code>@SpringBootApplication</code> is shorthand for <code>@Configuration</code> + <code>@ComponentScan</code> + <code>@EnableAutoConfiguration</code>. One annotation, three jobs.' }
      ]
    },

    /* ============ Chapter 2 ============ */
    {
      id: 'spr-c2',
      title: 'Project Setup & Starters',
      icon: '🚀',
      sections: [
        { type: 'heading', text: 'The Initializr generates your project', level: 1 },
        { type: 'para', html: 'Visit <a>start.spring.io</a> (or use its IntelliJ / VS Code plugin) and pick a build tool, language, Spring Boot version, group/artifact, and your starter dependencies. Hit "Generate" — you\'re downloading a ready-to-build project.' },

        { type: 'heading', text: 'The starter pattern', level: 2 },
        { type: 'para', html: 'A <strong>starter</strong> is a single dependency that pulls in a curated bundle of libraries for a use case. You don\'t need to know which 12 jars implement REST — you just add <code>spring-boot-starter-web</code>.' },
        { type: 'code', lang: 'xml', code: `&lt;!-- pom.xml --&gt;
&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.postgresql&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;` },

        { type: 'heading', text: 'Common starters', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>spring-boot-starter-web</code> — Spring MVC, Jackson, embedded Tomcat, validation',
          '<code>spring-boot-starter-data-jpa</code> — Hibernate, Spring Data JPA, JDBC',
          '<code>spring-boot-starter-security</code> — Spring Security',
          '<code>spring-boot-starter-test</code> — JUnit 5, Mockito, AssertJ, MockMvc',
          '<code>spring-boot-starter-actuator</code> — health, metrics, info endpoints',
          '<code>spring-boot-starter-validation</code> — Bean Validation (Hibernate Validator)'
        ] },

        { type: 'heading', text: 'Standard project layout', level: 2 },
        { type: 'code', lang: 'text', code: `my-app/
├── pom.xml                            <span class="com"># or build.gradle</span>
└── src/
    ├── main/
    │   ├── java/com/example/app/
    │   │   ├── App.java               <span class="com"># @SpringBootApplication</span>
    │   │   ├── controller/
    │   │   ├── service/
    │   │   ├── repository/
    │   │   └── model/
    │   └── resources/
    │       ├── application.properties
    │       ├── static/                <span class="com"># served as-is</span>
    │       └── templates/             <span class="com"># Thymeleaf templates</span>
    └── test/
        └── java/com/example/app/
            └── AppTests.java` },
        { type: 'callout', kind: 'warn', html: 'Put your <code>@SpringBootApplication</code> class at the <strong>top of your package tree</strong>. Component scanning starts from that package and walks downward — anything in a parallel branch won\'t be discovered.' },

        { type: 'heading', text: 'application.properties', level: 2 },
        { type: 'code', lang: 'properties', code: `<span class="com"># server</span>
server.port=8081
spring.application.name=order-service

<span class="com"># database</span>
spring.datasource.url=jdbc:postgresql://localhost:5432/orders
spring.datasource.username=admin
spring.datasource.password=secret

<span class="com"># jpa</span>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

<span class="com"># logging</span>
logging.level.org.springframework.web=DEBUG` },
        { type: 'para', html: 'YAML works too — same keys, nested structure:' },
        { type: 'code', lang: 'yaml', code: `server:
  port: 8081
spring:
  application:
    name: order-service
  datasource:
    url: jdbc:postgresql://localhost:5432/orders
    username: admin
    password: secret` }
      ]
    },

    /* ============ Chapter 3 ============ */
    {
      id: 'spr-c3',
      title: 'Dependency Injection in Practice',
      icon: '💉',
      sections: [
        { type: 'heading', text: 'How Spring wires your beans', level: 1 },
        { type: 'para', html: 'When the app starts, Spring scans your packages, finds classes annotated with <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, or <code>@Controller</code>, and registers each as a bean. Then it satisfies their dependencies by injection.' },

        { type: 'image', alt: 'ApplicationContext and bean wiring',
          svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.box{fill:#fef9c3;stroke:#a16207;stroke-width:2}.bn{fill:#92400e;font-family:Inter,sans-serif;font-weight:700;font-size:14px;text-anchor:middle}.bd{fill:#451a03;font-family:Inter,sans-serif;font-size:11px;text-anchor:middle}.ctx{fill:#e0f2fe;stroke:#0369a1;stroke-width:2;stroke-dasharray:6,4}.ct{fill:#0c4a6e;font-family:Inter,sans-serif;font-weight:700;font-size:16px;text-anchor:middle}.arr{fill:none;stroke:#1e293b;stroke-width:1.5;marker-end:url(#a)}</style>
  <marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
</defs>
<rect x="30" y="30" width="740" height="260" rx="14" class="ctx"/>
<text x="400" y="58" class="ct">ApplicationContext  (bean registry)</text>
<rect x="80" y="100" width="160" height="80" rx="10" class="box"/>
<text x="160" y="130" class="bn">UserController</text>
<text x="160" y="152" class="bd">@RestController</text>
<text x="160" y="168" class="bd">needs: UserService</text>
<rect x="320" y="100" width="160" height="80" rx="10" class="box"/>
<text x="400" y="130" class="bn">UserService</text>
<text x="400" y="152" class="bd">@Service</text>
<text x="400" y="168" class="bd">needs: UserRepository</text>
<rect x="560" y="100" width="160" height="80" rx="10" class="box"/>
<text x="640" y="130" class="bn">UserRepository</text>
<text x="640" y="152" class="bd">@Repository</text>
<text x="640" y="168" class="bd">JpaRepository</text>
<rect x="320" y="210" width="160" height="60" rx="10" class="box"/>
<text x="400" y="238" class="bn">DataSource</text>
<text x="400" y="258" class="bd">auto-configured</text>
<line x1="240" y1="140" x2="320" y2="140" class="arr"/>
<line x1="480" y1="140" x2="560" y2="140" class="arr"/>
<line x1="400" y1="180" x2="400" y2="210" class="arr"/>
</svg>` },

        { type: 'heading', text: 'Stereotype annotations', level: 2 },
        { type: 'para', html: 'These are all just specializations of <code>@Component</code>, but using the right one documents intent and unlocks layer-specific behavior (like exception translation on <code>@Repository</code>).' },
        { type: 'code', lang: 'java', code: `<span class="kw">@Component</span>      <span class="com">// generic Spring-managed bean</span>
<span class="kw">@Service</span>        <span class="com">// business logic layer</span>
<span class="kw">@Repository</span>     <span class="com">// data access layer (DAO)</span>
<span class="kw">@Controller</span>     <span class="com">// MVC controller returning views</span>
<span class="kw">@RestController</span> <span class="com">// @Controller + @ResponseBody</span>` },

        { type: 'heading', text: 'Three ways to inject — pick one', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// 1. CONSTRUCTOR injection — preferred</span>
<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {
  <span class="kw">private final</span> <span class="ty">OrderRepository</span> repo;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">OrderRepository</span> repo) {  <span class="com">// @Autowired implicit since 4.3</span>
    <span class="kw">this</span>.repo = repo;
  }
}

<span class="com">// 2. SETTER injection — for optional or reconfigurable deps</span>
<span class="kw">@Autowired</span>
<span class="kw">public void</span> <span class="fn">setRepo</span>(<span class="ty">OrderRepository</span> repo) { <span class="kw">this</span>.repo = repo; }

<span class="com">// 3. FIELD injection — concise but discouraged</span>
<span class="kw">@Autowired</span>
<span class="kw">private</span> <span class="ty">OrderRepository</span> repo;` },
        { type: 'callout', kind: 'tip', html: '<strong>Why constructor injection wins:</strong> deps can be <code>final</code> (immutable), the object is never in a half-built state, you can construct it in tests without Spring, and circular dependencies fail loudly at startup instead of silently breaking at runtime.' },

        { type: 'heading', text: 'Manual beans with @Bean', level: 2 },
        { type: 'para', html: 'For third-party classes you can\'t annotate, declare them inside a <code>@Configuration</code> class:' },
        { type: 'code', lang: 'java', code: `<span class="kw">@Configuration</span>
<span class="kw">public class</span> <span class="ty">AppConfig</span> {

  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">RestTemplate</span> <span class="fn">restTemplate</span>() {
    <span class="kw">return new</span> <span class="ty">RestTemplate</span>();
  }

  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">ObjectMapper</span> <span class="fn">objectMapper</span>() {
    <span class="kw">return new</span> <span class="ty">ObjectMapper</span>()
        .<span class="fn">registerModule</span>(<span class="kw">new</span> <span class="ty">JavaTimeModule</span>())
        .<span class="fn">disable</span>(<span class="ty">SerializationFeature</span>.WRITE_DATES_AS_TIMESTAMPS);
  }
}` },

        { type: 'heading', text: 'Bean scopes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>singleton</strong> (default) — one shared instance per ApplicationContext',
          '<strong>prototype</strong> — new instance every time you ask for it',
          '<strong>request</strong> / <strong>session</strong> — web-only; one per HTTP request / session',
          'Set with <code>@Scope("prototype")</code> on the class or @Bean method'
        ] },
        { type: 'callout', kind: 'warn', html: 'Singleton is the default, and 95% of the time it\'s what you want. But it also means your beans must be <strong>thread-safe</strong> — many concurrent requests share the same instance.' }
      ]
    },

    /* ============ Chapter 4 ============ */
    {
      id: 'spr-c4',
      title: 'Annotations Cheatsheet',
      icon: '✨',
      sections: [
        { type: 'heading', text: 'The annotations you\'ll see daily', level: 1 },
        { type: 'para', html: 'Spring leans heavily on annotations. Knowing what each one does — and what it expands to — makes Spring feel less magical.' },

        { type: 'heading', text: 'App-level', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@SpringBootApplication</span>   <span class="com">// =</span>
<span class="com">//   @Configuration          (this class declares beans)</span>
<span class="com">//   @ComponentScan          (scan this package + subpackages)</span>
<span class="com">//   @EnableAutoConfiguration (configure based on classpath)</span>

<span class="kw">@Configuration</span>            <span class="com">// class contains @Bean methods</span>
<span class="kw">@ComponentScan</span>(<span class="str">"com.foo"</span>)  <span class="com">// scan a custom base package</span>
<span class="kw">@Import</span>(<span class="ty">OtherConfig</span>.<span class="kw">class</span>) <span class="com">// pull in another config class</span>` },

        { type: 'heading', text: 'Bean creation', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Component</span> <span class="kw">@Service</span> <span class="kw">@Repository</span> <span class="kw">@Controller</span> <span class="kw">@RestController</span>
<span class="kw">@Bean</span>            <span class="com">// method-level: this method returns a bean</span>
<span class="kw">@Scope</span>(<span class="str">"prototype"</span>) <span class="com">// override default singleton</span>
<span class="kw">@Primary</span>         <span class="com">// pick me when multiple candidates exist</span>
<span class="kw">@Qualifier</span>(<span class="str">"name"</span>) <span class="com">// disambiguate at injection point</span>
<span class="kw">@Lazy</span>            <span class="com">// don\'t create until first asked for</span>` },

        { type: 'heading', text: 'Wiring & config', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Autowired</span>       <span class="com">// inject a matching bean</span>
<span class="kw">@Value</span>(<span class="str">"\${prop}"</span>)   <span class="com">// inject a property value</span>
<span class="kw">@ConfigurationProperties</span>(prefix=<span class="str">"app"</span>)  <span class="com">// bind grouped props</span>
<span class="kw">@Profile</span>(<span class="str">"dev"</span>)    <span class="com">// only when "dev" profile is active</span>
<span class="kw">@Conditional</span>...   <span class="com">// many: @ConditionalOnProperty, @ConditionalOnClass, etc.</span>` },

        { type: 'heading', text: 'Web MVC', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@RequestMapping</span> <span class="kw">@GetMapping</span> <span class="kw">@PostMapping</span>
<span class="kw">@PutMapping</span> <span class="kw">@DeleteMapping</span> <span class="kw">@PatchMapping</span>
<span class="kw">@PathVariable</span>     <span class="com">// /users/{id} → method param</span>
<span class="kw">@RequestParam</span>     <span class="com">// ?key=val   → method param</span>
<span class="kw">@RequestBody</span>      <span class="com">// JSON body → DTO</span>
<span class="kw">@RequestHeader</span>    <span class="com">// header → method param</span>
<span class="kw">@ResponseStatus</span>(<span class="ty">HttpStatus</span>.CREATED)
<span class="kw">@RestControllerAdvice</span>  <span class="com">// global exception handling</span>
<span class="kw">@ExceptionHandler</span>(<span class="ty">X</span>.<span class="kw">class</span>)` },

        { type: 'heading', text: 'JPA / persistence', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Entity</span> <span class="kw">@Table</span>(name=<span class="str">"users"</span>)
<span class="kw">@Id</span> <span class="kw">@GeneratedValue</span>
<span class="kw">@Column</span>(nullable=<span class="kw">false</span>, length=<span class="num">100</span>)
<span class="kw">@OneToMany</span>(mappedBy=<span class="str">"user"</span>)
<span class="kw">@ManyToOne</span>(fetch=<span class="ty">FetchType</span>.LAZY)
<span class="kw">@JoinColumn</span>(name=<span class="str">"user_id"</span>)
<span class="kw">@Transactional</span>   <span class="com">// wrap method/class in a transaction</span>
<span class="kw">@Query</span>(<span class="str">"SELECT u FROM User u WHERE ..."</span>)` },

        { type: 'callout', kind: 'info', html: 'Most annotations are <strong>compose-able</strong> — <code>@RestController</code> is itself <code>@Controller</code> + <code>@ResponseBody</code>. You can build your own meta-annotations the same way.' },

        { type: 'heading', text: 'Mini reference: what each does', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<code>@Primary</code> — when you have multiple beans of the same type and need a default',
          '<code>@Qualifier("foo")</code> — at the injection point, pick the bean named "foo"',
          '<code>@Lazy</code> — defer creation until first use (helps break circular deps)',
          '<code>@DependsOn("x")</code> — initialize bean x before this one'
        ] }
      ]
    },

    /* ============ Chapter 5 ============ */
    {
      id: 'spr-c5',
      title: 'Spring MVC & Building REST APIs',
      icon: '🌐',
      sections: [
        { type: 'heading', text: 'The HTTP request lifecycle', level: 1 },
        { type: 'para', html: 'When a request hits a Spring Boot app, it travels through Spring MVC\'s machinery. The center of it all is the <strong>DispatcherServlet</strong> — a single front controller that delegates to your handler methods.' },

        { type: 'image', alt: 'Request lifecycle through DispatcherServlet',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fef3c7;stroke:#92400e;stroke-width:2}.dsp{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2.5}.bt{fill:#1e293b;font-family:Inter,sans-serif;font-weight:700;font-size:13px;text-anchor:middle}.bd{fill:#475569;font-family:Inter,sans-serif;font-size:11px;text-anchor:middle}.arr{fill:none;stroke:#1e293b;stroke-width:1.8;marker-end:url(#aa)}</style>
  <marker id="aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
</defs>
<rect x="20" y="110" width="110" height="60" rx="10" class="b"/>
<text x="75" y="135" class="bt">HTTP request</text>
<text x="75" y="155" class="bd">browser / curl</text>
<rect x="170" y="80" width="160" height="120" rx="14" class="dsp"/>
<text x="250" y="115" class="bt">DispatcherServlet</text>
<text x="250" y="140" class="bd">finds handler</text>
<text x="250" y="158" class="bd">runs filters</text>
<text x="250" y="176" class="bd">picks converter</text>
<rect x="370" y="110" width="140" height="60" rx="10" class="b"/>
<text x="440" y="135" class="bt">@Controller</text>
<text x="440" y="155" class="bd">your method</text>
<rect x="550" y="110" width="140" height="60" rx="10" class="b"/>
<text x="620" y="135" class="bt">Service / Repo</text>
<text x="620" y="155" class="bd">business logic</text>
<rect x="710" y="110" width="90" height="60" rx="10" class="b"/>
<text x="755" y="135" class="bt">Response</text>
<text x="755" y="155" class="bd">JSON</text>
<line x1="130" y1="140" x2="170" y2="140" class="arr"/>
<line x1="330" y1="140" x2="370" y2="140" class="arr"/>
<line x1="510" y1="140" x2="550" y2="140" class="arr"/>
<line x1="690" y1="140" x2="710" y2="140" class="arr"/>
<text x="410" y="240" class="bd">Jackson serializes return values; @ExceptionHandler catches errors</text>
</svg>` },

        { type: 'heading', text: 'A complete REST controller', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@RestController</span>
<span class="kw">@RequestMapping</span>(<span class="str">"/api/users"</span>)
<span class="kw">public class</span> <span class="ty">UserController</span> {

  <span class="kw">private final</span> <span class="ty">UserService</span> service;
  <span class="kw">public</span> <span class="fn">UserController</span>(<span class="ty">UserService</span> service) { <span class="kw">this</span>.service = service; }

  <span class="kw">@GetMapping</span>
  <span class="kw">public</span> <span class="ty">List</span>&lt;<span class="ty">UserResponse</span>&gt; <span class="fn">all</span>() {
    <span class="kw">return</span> service.<span class="fn">findAll</span>();
  }

  <span class="kw">@GetMapping</span>(<span class="str">"/{id}"</span>)
  <span class="kw">public</span> <span class="ty">UserResponse</span> <span class="fn">one</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id) {
    <span class="kw">return</span> service.<span class="fn">findById</span>(id);
  }

  <span class="kw">@PostMapping</span>
  <span class="kw">@ResponseStatus</span>(<span class="ty">HttpStatus</span>.CREATED)
  <span class="kw">public</span> <span class="ty">UserResponse</span> <span class="fn">create</span>(<span class="kw">@Valid</span> <span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req) {
    <span class="kw">return</span> service.<span class="fn">create</span>(req);
  }

  <span class="kw">@PutMapping</span>(<span class="str">"/{id}"</span>)
  <span class="kw">public</span> <span class="ty">UserResponse</span> <span class="fn">update</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id,
                              <span class="kw">@Valid</span> <span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req) {
    <span class="kw">return</span> service.<span class="fn">update</span>(id, req);
  }

  <span class="kw">@DeleteMapping</span>(<span class="str">"/{id}"</span>)
  <span class="kw">@ResponseStatus</span>(<span class="ty">HttpStatus</span>.NO_CONTENT)
  <span class="kw">public void</span> <span class="fn">delete</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id) {
    service.<span class="fn">delete</span>(id);
  }
}` },

        { type: 'heading', text: 'Parameter binding', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// /users/42</span>
<span class="kw">@PathVariable</span> <span class="ty">Long</span> id

<span class="com">// /users?active=true&limit=10</span>
<span class="kw">@RequestParam</span> <span class="ty">boolean</span> active
<span class="kw">@RequestParam</span>(defaultValue=<span class="str">"20"</span>) <span class="ty">int</span> limit

<span class="com">// POST body JSON → DTO</span>
<span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req

<span class="com">// header: X-Tenant-Id: 7</span>
<span class="kw">@RequestHeader</span>(<span class="str">"X-Tenant-Id"</span>) <span class="ty">Long</span> tenant

<span class="com">// multiple parts of an upload</span>
<span class="kw">@RequestPart</span>(<span class="str">"file"</span>) <span class="ty">MultipartFile</span> file` },

        { type: 'heading', text: 'ResponseEntity for full control', level: 2 },
        { type: 'para', html: 'When you need to set headers or status dynamically, return <code>ResponseEntity</code>:' },
        { type: 'code', lang: 'java', code: `<span class="kw">@PostMapping</span>
<span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">UserResponse</span>&gt; <span class="fn">create</span>(<span class="kw">@Valid</span> <span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req) {
  <span class="ty">UserResponse</span> created = service.<span class="fn">create</span>(req);
  <span class="ty">URI</span> location = <span class="ty">URI</span>.<span class="fn">create</span>(<span class="str">"/api/users/"</span> + created.<span class="fn">id</span>());
  <span class="kw">return</span> <span class="ty">ResponseEntity</span>.<span class="fn">created</span>(location).<span class="fn">body</span>(created);
}` },
        { type: 'callout', kind: 'tip', html: 'For created resources, return <strong>201 Created</strong> with a <strong>Location</strong> header pointing at the new resource. It\'s the proper REST contract and helps clients follow up.' },

        { type: 'heading', text: 'JSON serialization with Jackson', level: 2 },
        { type: 'para', html: 'Spring Boot auto-configures Jackson. Customize via properties or beans:' },
        { type: 'code', lang: 'java', code: `<span class="kw">public class</span> <span class="ty">UserResponse</span> {
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@JsonProperty</span>(<span class="str">"full_name"</span>)
  <span class="kw">private</span> <span class="ty">String</span> name;

  <span class="kw">@JsonIgnore</span>
  <span class="kw">private</span> <span class="ty">String</span> internalNote;

  <span class="kw">@JsonFormat</span>(pattern = <span class="str">"yyyy-MM-dd"</span>)
  <span class="kw">private</span> <span class="ty">LocalDate</span> createdAt;
}` }
      ]
    },

    /* ============ Chapter 6 ============ */
    {
      id: 'spr-c6',
      title: 'Validation & Error Handling',
      icon: '✅',
      sections: [
        { type: 'heading', text: 'Validate early, fail clearly', level: 1 },
        { type: 'para', html: 'Bad input is a fact of life. Two pieces of Spring make handling it elegant: <strong>Bean Validation</strong> (declarative constraints) and <strong>@ControllerAdvice</strong> (global error responses).' },

        { type: 'heading', text: 'Annotate your DTOs', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">import</span> jakarta.validation.constraints.*;

<span class="kw">public class</span> <span class="ty">UserRequest</span> {

  <span class="kw">@NotBlank</span>(message = <span class="str">"name is required"</span>)
  <span class="kw">@Size</span>(max = <span class="num">100</span>)
  <span class="kw">private</span> <span class="ty">String</span> name;

  <span class="kw">@Email</span>
  <span class="kw">@NotBlank</span>
  <span class="kw">private</span> <span class="ty">String</span> email;

  <span class="kw">@Min</span>(<span class="num">18</span>) <span class="kw">@Max</span>(<span class="num">120</span>)
  <span class="kw">private int</span> age;

  <span class="kw">@Pattern</span>(regexp = <span class="str">"\\\\+?[0-9]{7,15}"</span>)
  <span class="kw">private</span> <span class="ty">String</span> phone;
}` },

        { type: 'heading', text: 'Trigger validation with @Valid', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@PostMapping</span>
<span class="kw">public</span> <span class="ty">User</span> <span class="fn">create</span>(<span class="kw">@Valid</span> <span class="kw">@RequestBody</span> <span class="ty">UserRequest</span> req) {
  <span class="kw">return</span> service.<span class="fn">save</span>(req);
}` },
        { type: 'callout', kind: 'warn', html: 'Without <code>@Valid</code> on the parameter, the constraints are ignored. Adding the annotations to the DTO alone does nothing!' },

        { type: 'heading', text: 'Common constraints', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>@NotNull</code> — disallow null',
          '<code>@NotBlank</code> — String not null and not whitespace',
          '<code>@NotEmpty</code> — Collection/String length > 0',
          '<code>@Size(min, max)</code> — length range',
          '<code>@Min</code> / <code>@Max</code> — numeric range',
          '<code>@Email</code> — valid email format',
          '<code>@Pattern(regexp=...)</code> — match regex',
          '<code>@Positive</code> / <code>@PositiveOrZero</code> — sign check'
        ] },

        { type: 'heading', text: 'Global error handler', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@RestControllerAdvice</span>
<span class="kw">public class</span> <span class="ty">GlobalExceptionHandler</span> {

  <span class="com">// validation errors → 400 with field map</span>
  <span class="kw">@ExceptionHandler</span>(<span class="ty">MethodArgumentNotValidException</span>.<span class="kw">class</span>)
  <span class="kw">public</span> <span class="ty">ResponseEntity</span>&lt;<span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">String</span>&gt;&gt; <span class="fn">handleValidation</span>(
      <span class="ty">MethodArgumentNotValidException</span> ex) {
    <span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">String</span>&gt; errors = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
    ex.<span class="fn">getBindingResult</span>().<span class="fn">getFieldErrors</span>()
       .<span class="fn">forEach</span>(e -&gt; errors.<span class="fn">put</span>(e.<span class="fn">getField</span>(), e.<span class="fn">getDefaultMessage</span>()));
    <span class="kw">return</span> <span class="ty">ResponseEntity</span>.<span class="fn">badRequest</span>().<span class="fn">body</span>(errors);
  }

  <span class="com">// domain-specific 404</span>
  <span class="kw">@ExceptionHandler</span>(<span class="ty">NotFoundException</span>.<span class="kw">class</span>)
  <span class="kw">@ResponseStatus</span>(<span class="ty">HttpStatus</span>.NOT_FOUND)
  <span class="kw">public</span> <span class="ty">ErrorResponse</span> <span class="fn">handleNotFound</span>(<span class="ty">NotFoundException</span> ex) {
    <span class="kw">return new</span> <span class="ty">ErrorResponse</span>(<span class="str">"NOT_FOUND"</span>, ex.<span class="fn">getMessage</span>());
  }

  <span class="com">// catch-all</span>
  <span class="kw">@ExceptionHandler</span>(<span class="ty">Exception</span>.<span class="kw">class</span>)
  <span class="kw">@ResponseStatus</span>(<span class="ty">HttpStatus</span>.INTERNAL_SERVER_ERROR)
  <span class="kw">public</span> <span class="ty">ErrorResponse</span> <span class="fn">handleGeneric</span>(<span class="ty">Exception</span> ex) {
    <span class="kw">return new</span> <span class="ty">ErrorResponse</span>(<span class="str">"INTERNAL"</span>, <span class="str">"Unexpected error"</span>);
  }
}` },
        { type: 'callout', kind: 'tip', html: 'Return a consistent <strong>error envelope</strong> — e.g. <code>{ "code": "NOT_FOUND", "message": "..." }</code>. Clients can program against it; humans can read it.' },

        { type: 'heading', text: 'Problem-detail (RFC 7807)', level: 2 },
        { type: 'para', html: 'Spring Boot 3+ includes built-in support for <code>ProblemDetail</code>, the standard error format defined by RFC 7807. Enable it once; all errors come out as <code>application/problem+json</code>.' },
        { type: 'code', lang: 'properties', code: `spring.mvc.problemdetails.enabled=true` }
      ]
    },

    /* ============ Chapter 7 ============ */
    {
      id: 'spr-c7',
      title: 'Spring Data JPA: Entities & Repositories',
      icon: '🗃️',
      sections: [
        { type: 'heading', text: 'Persistence without boilerplate', level: 1 },
        { type: 'para', html: '<strong>JPA</strong> (Jakarta Persistence API) is a Java standard for object-relational mapping. <strong>Spring Data JPA</strong> sits on top of it (with Hibernate as the default implementation) and gives you repositories you don\'t implement.' },

        { type: 'image', alt: 'JPA entity to table mapping',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.cls{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.tbl{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a}.tb{font-family:Inter,sans-serif;font-size:14px;fill:#0f172a;font-weight:700}.arr{fill:none;stroke:#475569;stroke-width:1.5;marker-end:url(#m1);stroke-dasharray:4,3}</style>
  <marker id="m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<rect x="40" y="30" width="280" height="220" rx="12" class="cls"/>
<text x="180" y="58" class="tb" text-anchor="middle">Java class</text>
<line x1="40" y1="70" x2="320" y2="70" stroke="#1d4ed8"/>
<text x="60" y="100" class="t">@Entity</text>
<text x="60" y="120" class="t">@Table(name="users")</text>
<text x="60" y="148" class="t">class User {</text>
<text x="70" y="170" class="t">@Id Long id;</text>
<text x="70" y="190" class="t">@Column String name;</text>
<text x="70" y="210" class="t">@Column String email;</text>
<text x="60" y="232" class="t">}</text>
<line x1="320" y1="140" x2="480" y2="140" class="arr"/>
<text x="400" y="130" class="t" text-anchor="middle">maps to</text>
<rect x="480" y="30" width="280" height="220" rx="12" class="tbl"/>
<text x="620" y="58" class="tb" text-anchor="middle">SQL table</text>
<line x1="480" y1="70" x2="760" y2="70" stroke="#15803d"/>
<text x="500" y="100" class="t">CREATE TABLE users (</text>
<text x="510" y="125" class="t">id     BIGINT PRIMARY KEY,</text>
<text x="510" y="150" class="t">name   VARCHAR(255),</text>
<text x="510" y="175" class="t">email  VARCHAR(255)</text>
<text x="500" y="200" class="t">);</text>
</svg>` },

        { type: 'heading', text: 'Defining an entity', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Entity</span>
<span class="kw">@Table</span>(name = <span class="str">"users"</span>)
<span class="kw">public class</span> <span class="ty">User</span> {

  <span class="kw">@Id</span>
  <span class="kw">@GeneratedValue</span>(strategy = <span class="ty">GenerationType</span>.IDENTITY)
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@Column</span>(nullable = <span class="kw">false</span>, length = <span class="num">100</span>)
  <span class="kw">private</span> <span class="ty">String</span> name;

  <span class="kw">@Column</span>(unique = <span class="kw">true</span>, nullable = <span class="kw">false</span>)
  <span class="kw">private</span> <span class="ty">String</span> email;

  <span class="kw">@Enumerated</span>(<span class="ty">EnumType</span>.STRING)
  <span class="kw">private</span> <span class="ty">Role</span> role;

  <span class="kw">@CreationTimestamp</span>
  <span class="kw">private</span> <span class="ty">Instant</span> createdAt;

  <span class="kw">protected</span> <span class="fn">User</span>() {}    <span class="com">// JPA needs no-arg ctor</span>

  <span class="com">// getters / setters / business ctor...</span>
}` },

        { type: 'heading', text: 'Repositories you don\'t implement', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">public interface</span> <span class="ty">UserRepository</span> <span class="kw">extends</span> <span class="ty">JpaRepository</span>&lt;<span class="ty">User</span>, <span class="ty">Long</span>&gt; {

  <span class="com">// derived queries — generated from the method name</span>
  <span class="ty">Optional</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findByEmail</span>(<span class="ty">String</span> email);

  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findByRoleAndCreatedAtAfter</span>(<span class="ty">Role</span> r, <span class="ty">Instant</span> after);

  <span class="ty">long</span> <span class="fn">countByActiveTrue</span>();

  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">findTop10ByOrderByCreatedAtDesc</span>();

  <span class="com">// custom JPQL when names get ugly</span>
  <span class="kw">@Query</span>(<span class="str">"SELECT u FROM User u WHERE LOWER(u.name) LIKE LOWER(CONCAT('%', :q, '%'))"</span>)
  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">searchByName</span>(<span class="kw">@Param</span>(<span class="str">"q"</span>) <span class="ty">String</span> q);

  <span class="com">// native SQL if you need it</span>
  <span class="kw">@Query</span>(value = <span class="str">"SELECT * FROM users WHERE email ILIKE ?1"</span>, nativeQuery = <span class="kw">true</span>)
  <span class="ty">List</span>&lt;<span class="ty">User</span>&gt; <span class="fn">searchEmailRaw</span>(<span class="ty">String</span> pattern);
}` },

        { type: 'heading', text: 'Free CRUD from JpaRepository', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<code>save(entity)</code> — insert or update',
          '<code>findById(id)</code> — returns <code>Optional&lt;T&gt;</code>',
          '<code>findAll()</code>, <code>findAll(Pageable)</code> — list / page',
          '<code>existsById(id)</code> — boolean check',
          '<code>count()</code> — total rows',
          '<code>deleteById(id)</code> / <code>delete(entity)</code>',
          '<code>saveAll(iterable)</code> — bulk save'
        ] },

        { type: 'heading', text: 'Derived query name grammar', level: 2 },
        { type: 'code', lang: 'text', code: `findBy<Field>                  WHERE field = ?
findBy<Field>And<Other>        WHERE field = ? AND other = ?
findBy<Field>Or<Other>         WHERE field = ? OR other = ?
findBy<Field>GreaterThan       WHERE field > ?
findBy<Field>Like              WHERE field LIKE ?
findBy<Field>In                WHERE field IN (?)
findBy<Field>IsNull / IsNotNull
countBy<Field> / existsBy<Field>
deleteBy<Field>
findTopN... / findFirstBy... / OrderBy<Field>Asc|Desc` },
        { type: 'callout', kind: 'info', html: 'IntelliJ and the Spring plugin will autocomplete these — and warn you when a field name doesn\'t match the entity.' }
      ]
    },

    /* ============ Chapter 8 ============ */
    {
      id: 'spr-c8',
      title: 'JPA Relationships',
      icon: '🔗',
      sections: [
        { type: 'heading', text: 'Modeling associations', level: 1 },
        { type: 'para', html: 'Real apps have entities that point at each other: a <code>Post</code> has many <code>Comment</code>s, an <code>Order</code> has many <code>OrderItem</code>s, a <code>Student</code> belongs to many <code>Course</code>s. JPA maps these with four relationship annotations.' },

        { type: 'heading', text: '@ManyToOne and @OneToMany', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">Post</span> {
  <span class="kw">@Id</span> <span class="kw">@GeneratedValue</span>
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@OneToMany</span>(mappedBy = <span class="str">"post"</span>,
             cascade = <span class="ty">CascadeType</span>.ALL,
             orphanRemoval = <span class="kw">true</span>)
  <span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">Comment</span>&gt; comments = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
}

<span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">Comment</span> {
  <span class="kw">@Id</span> <span class="kw">@GeneratedValue</span>
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@ManyToOne</span>(fetch = <span class="ty">FetchType</span>.LAZY, optional = <span class="kw">false</span>)
  <span class="kw">@JoinColumn</span>(name = <span class="str">"post_id"</span>)
  <span class="kw">private</span> <span class="ty">Post</span> post;

  <span class="kw">private</span> <span class="ty">String</span> text;
}` },
        { type: 'para', html: 'The <strong>"many"</strong> side (<code>Comment</code>) owns the foreign-key column (<code>post_id</code>). The <code>mappedBy</code> attribute on <code>Post.comments</code> tells JPA "the other side already maps this — I\'m the inverse."' },

        { type: 'heading', text: 'Fetch types: LAZY vs EAGER', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<code>@ManyToOne</code> defaults to <strong>EAGER</strong> — danger for performance',
          '<code>@OneToMany</code> defaults to <strong>LAZY</strong> — fetched on demand',
          'Almost always set everything to <code>FetchType.LAZY</code> and fetch eagerly per-query',
          'Triggering a lazy load outside a transaction → <code>LazyInitializationException</code>'
        ] },
        { type: 'callout', kind: 'warn', html: 'The <strong>N+1 query problem</strong>: loading 100 posts, then 100 separate queries to load each post\'s comments. Solutions: <code>JOIN FETCH</code> in JPQL, <code>@EntityGraph</code>, or projection DTOs.' },

        { type: 'heading', text: 'Cascade types', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>PERSIST</code> — save child when parent is saved',
          '<code>MERGE</code> — apply same to merge',
          '<code>REMOVE</code> — delete children when parent is deleted',
          '<code>REFRESH</code> — re-read children from DB',
          '<code>DETACH</code> — detach children from persistence context',
          '<code>ALL</code> — all of the above'
        ] },

        { type: 'heading', text: '@ManyToMany with a join table', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">Student</span> {
  <span class="kw">@Id</span> <span class="kw">@GeneratedValue</span>
  <span class="kw">private</span> <span class="ty">Long</span> id;

  <span class="kw">@ManyToMany</span>
  <span class="kw">@JoinTable</span>(
      name = <span class="str">"student_course"</span>,
      joinColumns = <span class="kw">@JoinColumn</span>(name = <span class="str">"student_id"</span>),
      inverseJoinColumns = <span class="kw">@JoinColumn</span>(name = <span class="str">"course_id"</span>))
  <span class="kw">private</span> <span class="ty">Set</span>&lt;<span class="ty">Course</span>&gt; courses = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
}` },
        { type: 'callout', kind: 'tip', html: 'For <code>@ManyToMany</code> with extra fields on the relationship (e.g., enrollment date, grade), use a dedicated join entity with two <code>@ManyToOne</code>s instead.' },

        { type: 'heading', text: '@OneToOne', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Entity</span>
<span class="kw">public class</span> <span class="ty">User</span> {
  <span class="kw">@OneToOne</span>(cascade = <span class="ty">CascadeType</span>.ALL)
  <span class="kw">@JoinColumn</span>(name = <span class="str">"profile_id"</span>)
  <span class="kw">private</span> <span class="ty">Profile</span> profile;
}` },
        { type: 'para', html: 'Often <code>@OneToOne</code> is just a way to split a wide row across two tables (e.g., hot fields and rare fields). Sometimes plain composition (an <code>@Embeddable</code>) is simpler.' }
      ]
    },

    /* ============ Chapter 9 ============ */
    {
      id: 'spr-c9',
      title: 'Configuration & Profiles',
      icon: '🎛️',
      sections: [
        { type: 'heading', text: 'Externalize everything', level: 1 },
        { type: 'para', html: 'The 12-Factor principle "Store config in the environment" applies. Spring Boot makes it easy with <code>application.properties</code>, profile-specific overrides, environment variables, and command-line args — all merged into the same Environment.' },

        { type: 'heading', text: 'Property resolution order', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Command-line arguments (<code>--key=value</code>)',
          'JVM system properties (<code>-Dkey=value</code>)',
          'OS environment variables (<code>KEY_NAME</code> → <code>key.name</code>)',
          '<code>application-{profile}.properties</code> (active profile only)',
          '<code>application.properties</code>',
          'Defaults set in code'
        ] },
        { type: 'callout', kind: 'info', html: 'Earlier sources <strong>override</strong> later ones. So a command-line arg always wins. This lets you ship a default file and override per environment without recompiling.' },

        { type: 'heading', text: '@Value for single properties', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Component</span>
<span class="kw">public class</span> <span class="ty">Mailer</span> {
  <span class="kw">@Value</span>(<span class="str">"\${mail.from}"</span>)
  <span class="kw">private</span> <span class="ty">String</span> from;

  <span class="kw">@Value</span>(<span class="str">"\${mail.retries:3}"</span>)   <span class="com">// default if absent</span>
  <span class="kw">private int</span> retries;
}` },
        { type: 'callout', kind: 'warn', html: 'Inside Spring property placeholders, <code>\${...}</code> is <strong>Spring\'s</strong> syntax, not Java\'s. Don\'t confuse with template literal interpolation in JS or with Java text blocks.' },

        { type: 'heading', text: '@ConfigurationProperties for groups', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@ConfigurationProperties</span>(prefix = <span class="str">"mail"</span>)
<span class="kw">public class</span> <span class="ty">MailProperties</span> {
  <span class="kw">private</span> <span class="ty">String</span> from;
  <span class="kw">private int</span> retries = <span class="num">3</span>;
  <span class="kw">private</span> <span class="ty">Smtp</span> smtp = <span class="kw">new</span> <span class="ty">Smtp</span>();

  <span class="com">// getters / setters</span>

  <span class="kw">public static class</span> <span class="ty">Smtp</span> {
    <span class="kw">private</span> <span class="ty">String</span> host;
    <span class="kw">private int</span> port = <span class="num">587</span>;
    <span class="com">// getters / setters</span>
  }
}

<span class="com">// Enable it:</span>
<span class="kw">@SpringBootApplication</span>
<span class="kw">@EnableConfigurationProperties</span>(<span class="ty">MailProperties</span>.<span class="kw">class</span>)
<span class="kw">public class</span> <span class="ty">App</span> { }` },
        { type: 'code', lang: 'yaml', code: `mail:
  from: alerts@example.com
  retries: 5
  smtp:
    host: smtp.gmail.com
    port: 587` },

        { type: 'heading', text: 'Profiles for environment-specific config', level: 2 },
        { type: 'para', html: 'Different settings for dev, test, staging, prod — without touching code. Create per-profile files:' },
        { type: 'code', lang: 'text', code: `src/main/resources/
  application.properties               <span class="com"># base / shared</span>
  application-dev.properties           <span class="com"># development</span>
  application-staging.properties
  application-prod.properties` },
        { type: 'para', html: 'Activate one (or several):' },
        { type: 'code', lang: 'properties', code: `<span class="com"># activate in application.properties</span>
spring.profiles.active=dev

<span class="com"># or via env var</span>
SPRING_PROFILES_ACTIVE=prod

<span class="com"># or on the command line</span>
java -jar app.jar --spring.profiles.active=prod,debug` },

        { type: 'heading', text: '@Profile on beans', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Service</span>
<span class="kw">@Profile</span>(<span class="str">"prod"</span>)
<span class="kw">public class</span> <span class="ty">RealPaymentClient</span> <span class="kw">implements</span> <span class="ty">PaymentClient</span> { ... }

<span class="kw">@Service</span>
<span class="kw">@Profile</span>(<span class="str">"!prod"</span>)
<span class="kw">public class</span> <span class="ty">StubPaymentClient</span> <span class="kw">implements</span> <span class="ty">PaymentClient</span> { ... }` },
        { type: 'callout', kind: 'tip', html: 'Use <code>@Profile("!prod")</code> for stubs that should run everywhere except production. It\'s a clean way to swap real for fake without sprinkling <code>if</code> statements.' }
      ]
    },

    /* ============ Chapter 10 ============ */
    {
      id: 'spr-c10',
      title: 'Spring Security Basics',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Secure by default', level: 1 },
        { type: 'para', html: 'Add <code>spring-boot-starter-security</code> and instantly every endpoint requires authentication — HTTP Basic with a randomly generated password printed at startup. From there, you customize.' },

        { type: 'image', alt: 'Security filter chain',
          svg: `<svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.f{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.app{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle;font-weight:600}.td{font-family:Inter,sans-serif;font-size:10px;fill:#475569;text-anchor:middle}.arr{fill:none;stroke:#1e293b;stroke-width:1.5;marker-end:url(#m2)}</style>
  <marker id="m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
</defs>
<text x="410" y="28" style="font-family:Inter;font-size:18px;font-weight:700;text-anchor:middle;fill:#1e293b">SecurityFilterChain</text>
<rect x="20" y="70" width="80" height="80" rx="10" class="f"/>
<text x="60" y="100" class="t">CSRF</text>
<text x="60" y="120" class="td">filter</text>
<rect x="120" y="70" width="100" height="80" rx="10" class="f"/>
<text x="170" y="100" class="t">Authentication</text>
<text x="170" y="120" class="td">filter</text>
<rect x="240" y="70" width="100" height="80" rx="10" class="f"/>
<text x="290" y="100" class="t">Authorization</text>
<text x="290" y="120" class="td">filter</text>
<rect x="360" y="70" width="80" height="80" rx="10" class="f"/>
<text x="400" y="100" class="t">Headers</text>
<text x="400" y="120" class="td">filter</text>
<rect x="460" y="70" width="100" height="80" rx="10" class="f"/>
<text x="510" y="100" class="t">Exception</text>
<text x="510" y="120" class="td">handler</text>
<rect x="600" y="70" width="200" height="80" rx="10" class="app"/>
<text x="700" y="100" class="t">Your @Controller</text>
<text x="700" y="125" class="td">if authenticated &amp;</text>
<text x="700" y="140" class="td">authorized</text>
<line x1="100" y1="110" x2="120" y2="110" class="arr"/>
<line x1="220" y1="110" x2="240" y2="110" class="arr"/>
<line x1="340" y1="110" x2="360" y2="110" class="arr"/>
<line x1="440" y1="110" x2="460" y2="110" class="arr"/>
<line x1="560" y1="110" x2="600" y2="110" class="arr"/>
<text x="410" y="180" class="td">Each request passes through filters in order. Any filter can short-circuit.</text>
</svg>` },

        { type: 'heading', text: 'Configure access rules', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Configuration</span>
<span class="kw">@EnableWebSecurity</span>
<span class="kw">public class</span> <span class="ty">SecurityConfig</span> {

  <span class="kw">@Bean</span>
  <span class="kw">public</span> <span class="ty">SecurityFilterChain</span> <span class="fn">chain</span>(<span class="ty">HttpSecurity</span> http) <span class="kw">throws</span> <span class="ty">Exception</span> {
    http
      .<span class="fn">authorizeHttpRequests</span>(auth -&gt; auth
          .<span class="fn">requestMatchers</span>(<span class="str">"/", "/public/**", "/login"</span>).<span class="fn">permitAll</span>()
          .<span class="fn">requestMatchers</span>(<span class="str">"/admin/**"</span>).<span class="fn">hasRole</span>(<span class="str">"ADMIN"</span>)
          .<span class="fn">requestMatchers</span>(<span class="ty">HttpMethod</span>.POST, <span class="str">"/api/**"</span>).<span class="fn">authenticated</span>()
          .<span class="fn">anyRequest</span>().<span class="fn">authenticated</span>())
      .<span class="fn">formLogin</span>(<span class="ty">Customizer</span>.<span class="fn">withDefaults</span>())
      .<span class="fn">httpBasic</span>(<span class="ty">Customizer</span>.<span class="fn">withDefaults</span>());
    <span class="kw">return</span> http.<span class="fn">build</span>();
  }
}` },

        { type: 'heading', text: 'Password storage with BCrypt', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Bean</span>
<span class="kw">public</span> <span class="ty">PasswordEncoder</span> <span class="fn">passwordEncoder</span>() {
  <span class="kw">return new</span> <span class="ty">BCryptPasswordEncoder</span>();
}

<span class="com">// Hashing a password before saving</span>
<span class="ty">String</span> hash = passwordEncoder.<span class="fn">encode</span>(rawPassword);

<span class="com">// Checking a password</span>
<span class="kw">boolean</span> ok = passwordEncoder.<span class="fn">matches</span>(rawInput, storedHash);` },
        { type: 'callout', kind: 'danger', html: 'NEVER store passwords in plain text. NEVER use MD5 or SHA-1 for passwords. BCrypt, Argon2, or PBKDF2 — anything else and you\'re one breach from headlines.' },

        { type: 'heading', text: 'A UserDetailsService', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">DbUserDetailsService</span> <span class="kw">implements</span> <span class="ty">UserDetailsService</span> {

  <span class="kw">private final</span> <span class="ty">UserRepository</span> users;

  <span class="kw">public</span> <span class="ty">UserDetails</span> <span class="fn">loadUserByUsername</span>(<span class="ty">String</span> email) {
    <span class="kw">return</span> users.<span class="fn">findByEmail</span>(email)
        .<span class="fn">map</span>(u -&gt; <span class="ty">User</span>.<span class="fn">withUsername</span>(u.<span class="fn">getEmail</span>())
            .<span class="fn">password</span>(u.<span class="fn">getPasswordHash</span>())
            .<span class="fn">roles</span>(u.<span class="fn">getRole</span>().<span class="fn">name</span>())
            .<span class="fn">build</span>())
        .<span class="fn">orElseThrow</span>(() -&gt; <span class="kw">new</span> <span class="ty">UsernameNotFoundException</span>(email));
  }
}` },

        { type: 'heading', text: 'JWT auth at a glance', level: 2 },
        { type: 'para', html: 'For stateless REST APIs, sessions don\'t fit. Use signed JWTs instead.' },
        { type: 'list', kind: 'numbered', items: [
          'Client POSTs credentials to <code>/auth/login</code>',
          'Server validates, signs a JWT with a secret key, returns it as JSON',
          'Client stores it and sends <code>Authorization: Bearer &lt;token&gt;</code> on each subsequent request',
          'A custom filter parses the JWT, validates the signature, sets the Authentication in <code>SecurityContextHolder</code>',
          'Downstream controllers see an authenticated user'
        ] },
        { type: 'code', lang: 'java', code: `<span class="com">// Typical JWT setup — disable CSRF + sessions</span>
http
  .<span class="fn">csrf</span>(c -&gt; c.<span class="fn">disable</span>())
  .<span class="fn">sessionManagement</span>(s -&gt; s.<span class="fn">sessionCreationPolicy</span>(
      <span class="ty">SessionCreationPolicy</span>.STATELESS))
  .<span class="fn">authorizeHttpRequests</span>(a -&gt; a
      .<span class="fn">requestMatchers</span>(<span class="str">"/auth/**"</span>).<span class="fn">permitAll</span>()
      .<span class="fn">anyRequest</span>().<span class="fn">authenticated</span>())
  .<span class="fn">addFilterBefore</span>(jwtFilter,
      <span class="ty">UsernamePasswordAuthenticationFilter</span>.<span class="kw">class</span>);` },
        { type: 'callout', kind: 'tip', html: 'Spring Security 6 has first-class OAuth2 / OIDC support — for serious auth, integrate with a provider (Keycloak, Auth0, Cognito) rather than rolling your own JWT.' }
      ]
    },

    /* ============ Chapter 11 ============ */
    {
      id: 'spr-c11',
      title: 'Testing Spring Boot Apps',
      icon: '🧪',
      sections: [
        { type: 'heading', text: 'Test the right slice', level: 1 },
        { type: 'para', html: 'Spring Boot offers <strong>test slices</strong> — annotations that load only the beans relevant to what you\'re testing. They\'re fast, focused, and far better than booting the entire app for every test.' },

        { type: 'heading', text: 'The big three', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<code>@SpringBootTest</code> — full application context, integration tests',
          '<code>@WebMvcTest</code> — controllers + MVC infra only',
          '<code>@DataJpaTest</code> — repositories + in-memory DB (H2 by default)'
        ] },

        { type: 'heading', text: 'Controller tests with MockMvc', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@WebMvcTest</span>(<span class="ty">UserController</span>.<span class="kw">class</span>)
<span class="kw">class</span> <span class="ty">UserControllerTest</span> {

  <span class="kw">@Autowired</span> <span class="ty">MockMvc</span> mvc;
  <span class="kw">@MockBean</span>  <span class="ty">UserService</span> service;

  <span class="kw">@Test</span>
  <span class="kw">void</span> <span class="fn">returnsUser</span>() <span class="kw">throws</span> <span class="ty">Exception</span> {
    <span class="fn">when</span>(service.<span class="fn">findById</span>(<span class="num">1L</span>))
        .<span class="fn">thenReturn</span>(<span class="kw">new</span> <span class="ty">UserResponse</span>(<span class="num">1L</span>, <span class="str">"Alice"</span>, <span class="str">"a@x.com"</span>));

    mvc.<span class="fn">perform</span>(<span class="fn">get</span>(<span class="str">"/api/users/1"</span>))
       .<span class="fn">andExpect</span>(<span class="fn">status</span>().<span class="fn">isOk</span>())
       .<span class="fn">andExpect</span>(<span class="fn">jsonPath</span>(<span class="str">"$.name"</span>).<span class="fn">value</span>(<span class="str">"Alice"</span>));
  }

  <span class="kw">@Test</span>
  <span class="kw">void</span> <span class="fn">validatesBody</span>() <span class="kw">throws</span> <span class="ty">Exception</span> {
    mvc.<span class="fn">perform</span>(<span class="fn">post</span>(<span class="str">"/api/users"</span>)
            .<span class="fn">contentType</span>(<span class="ty">MediaType</span>.APPLICATION_JSON)
            .<span class="fn">content</span>(<span class="str">"{\\"name\\":\\"\\"}"</span>))
       .<span class="fn">andExpect</span>(<span class="fn">status</span>().<span class="fn">isBadRequest</span>());
  }
}` },

        { type: 'heading', text: 'Repository tests with @DataJpaTest', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@DataJpaTest</span>
<span class="kw">class</span> <span class="ty">UserRepositoryTest</span> {

  <span class="kw">@Autowired</span> <span class="ty">UserRepository</span> repo;
  <span class="kw">@Autowired</span> <span class="ty">TestEntityManager</span> em;

  <span class="kw">@Test</span>
  <span class="kw">void</span> <span class="fn">findsByEmail</span>() {
    em.<span class="fn">persist</span>(<span class="kw">new</span> <span class="ty">User</span>(<span class="str">"Alice"</span>, <span class="str">"a@x.com"</span>));
    em.<span class="fn">flush</span>();

    <span class="ty">Optional</span>&lt;<span class="ty">User</span>&gt; found = repo.<span class="fn">findByEmail</span>(<span class="str">"a@x.com"</span>);

    <span class="fn">assertThat</span>(found).<span class="fn">isPresent</span>()
        .<span class="fn">get</span>().<span class="fn">extracting</span>(<span class="ty">User</span>::<span class="fn">getName</span>).<span class="fn">isEqualTo</span>(<span class="str">"Alice"</span>);
  }
}` },
        { type: 'para', html: '<code>@DataJpaTest</code> by default uses an embedded H2 in-memory database and rolls back each test. Add <code>@AutoConfigureTestDatabase(replace = NONE)</code> to test against the real DB.' },

        { type: 'heading', text: 'Full integration with @SpringBootTest', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@SpringBootTest</span>(webEnvironment = <span class="ty">WebEnvironment</span>.RANDOM_PORT)
<span class="kw">class</span> <span class="ty">UserIntegrationTest</span> {

  <span class="kw">@Autowired</span> <span class="ty">TestRestTemplate</span> http;
  <span class="kw">@LocalServerPort</span> <span class="ty">int</span> port;

  <span class="kw">@Test</span>
  <span class="kw">void</span> <span class="fn">createAndFetch</span>() {
    <span class="ty">UserRequest</span> req = <span class="kw">new</span> <span class="ty">UserRequest</span>(<span class="str">"Alice"</span>, <span class="str">"a@x.com"</span>, <span class="num">30</span>);
    <span class="ty">ResponseEntity</span>&lt;<span class="ty">UserResponse</span>&gt; created =
        http.<span class="fn">postForEntity</span>(<span class="str">"/api/users"</span>, req, <span class="ty">UserResponse</span>.<span class="kw">class</span>);

    <span class="fn">assertThat</span>(created.<span class="fn">getStatusCode</span>()).<span class="fn">isEqualTo</span>(<span class="ty">HttpStatus</span>.CREATED);
    <span class="fn">assertThat</span>(created.<span class="fn">getBody</span>().<span class="fn">name</span>()).<span class="fn">isEqualTo</span>(<span class="str">"Alice"</span>);
  }
}` },
        { type: 'callout', kind: 'tip', html: 'Use <strong>Testcontainers</strong> for integration tests against a real Postgres/Redis/RabbitMQ in a Docker container. You get production parity without polluting a shared DB.' },

        { type: 'heading', text: 'Mocking with @MockBean and @SpyBean', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>@MockBean</code> — replaces a bean in the context with a Mockito mock',
          '<code>@SpyBean</code> — wraps the real bean; you can stub specific methods and verify calls',
          'Both are reset between tests automatically'
        ] }
      ]
    },

    /* ============ Chapter 12 ============ */
    {
      id: 'spr-c12',
      title: 'Actuator & Observability',
      icon: '📊',
      sections: [
        { type: 'heading', text: 'Production-ready out of the box', level: 1 },
        { type: 'para', html: '<strong>Spring Boot Actuator</strong> ships management endpoints for monitoring, metrics, and operational tasks. Add <code>spring-boot-starter-actuator</code> and you get a suite under <code>/actuator</code>.' },

        { type: 'heading', text: 'The core endpoints', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>/actuator/health</code> — liveness/readiness probes',
          '<code>/actuator/info</code> — app build info, version',
          '<code>/actuator/metrics</code> — JVM, HTTP, DB, custom metrics',
          '<code>/actuator/env</code> — current property values',
          '<code>/actuator/loggers</code> — view / change log levels at runtime',
          '<code>/actuator/threaddump</code> — JVM thread dump',
          '<code>/actuator/heapdump</code> — JVM heap dump',
          '<code>/actuator/mappings</code> — all HTTP mappings'
        ] },

        { type: 'heading', text: 'Exposing what you want', level: 2 },
        { type: 'para', html: 'For security, most endpoints are <strong>disabled over HTTP</strong> by default. You opt in:' },
        { type: 'code', lang: 'properties', code: `<span class="com"># expose only what we need</span>
management.endpoints.web.exposure.include=health,info,metrics,prometheus

<span class="com"># detailed health (component-by-component)</span>
management.endpoint.health.show-details=when-authorized

<span class="com"># custom info</span>
info.app.name=order-service
info.app.version=1.4.2
info.build.timestamp=@timestamp@` },

        { type: 'heading', text: 'Health indicators', level: 2 },
        { type: 'para', html: 'Spring Boot auto-discovers health indicators for things on your classpath — DB, Redis, RabbitMQ, disk space, etc. Write your own:' },
        { type: 'code', lang: 'java', code: `<span class="kw">@Component</span>
<span class="kw">public class</span> <span class="ty">PaymentGatewayHealth</span> <span class="kw">implements</span> <span class="ty">HealthIndicator</span> {

  <span class="kw">private final</span> <span class="ty">PaymentGatewayClient</span> client;

  <span class="kw">public</span> <span class="ty">Health</span> <span class="fn">health</span>() {
    <span class="kw">try</span> {
      <span class="kw">if</span> (client.<span class="fn">ping</span>()) {
        <span class="kw">return</span> <span class="ty">Health</span>.<span class="fn">up</span>().<span class="fn">withDetail</span>(<span class="str">"region"</span>, <span class="str">"us-east"</span>).<span class="fn">build</span>();
      }
      <span class="kw">return</span> <span class="ty">Health</span>.<span class="fn">down</span>().<span class="fn">withDetail</span>(<span class="str">"reason"</span>, <span class="str">"ping failed"</span>).<span class="fn">build</span>();
    } <span class="kw">catch</span> (<span class="ty">Exception</span> e) {
      <span class="kw">return</span> <span class="ty">Health</span>.<span class="fn">down</span>(e).<span class="fn">build</span>();
    }
  }
}` },

        { type: 'heading', text: 'Metrics with Micrometer', level: 2 },
        { type: 'para', html: 'Actuator exposes <strong>Micrometer</strong> metrics — a vendor-neutral API. Add a registry (Prometheus, Datadog, CloudWatch, etc.) and metrics ship automatically.' },
        { type: 'code', lang: 'xml', code: `&lt;dependency&gt;
  &lt;groupId&gt;io.micrometer&lt;/groupId&gt;
  &lt;artifactId&gt;micrometer-registry-prometheus&lt;/artifactId&gt;
&lt;/dependency&gt;` },
        { type: 'code', lang: 'java', code: `<span class="com">// Custom metrics</span>
<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {

  <span class="kw">private final</span> <span class="ty">Counter</span> ordersCreated;
  <span class="kw">private final</span> <span class="ty">Timer</span> processingTime;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">MeterRegistry</span> registry) {
    <span class="kw">this</span>.ordersCreated = registry.<span class="fn">counter</span>(<span class="str">"orders.created"</span>);
    <span class="kw">this</span>.processingTime = registry.<span class="fn">timer</span>(<span class="str">"orders.processing"</span>);
  }

  <span class="kw">public</span> <span class="ty">Order</span> <span class="fn">create</span>(<span class="ty">OrderRequest</span> req) {
    <span class="kw">return</span> processingTime.<span class="fn">record</span>(() -&gt; {
      ordersCreated.<span class="fn">increment</span>();
      <span class="kw">return</span> doCreate(req);
    });
  }
}` },
        { type: 'callout', kind: 'tip', html: 'Pair Actuator + Micrometer with <strong>Prometheus + Grafana</strong> for dashboards, and you have production-grade observability for the cost of one starter dependency.' }
      ]
    },

    /* ============ Chapter 13 ============ */
    {
      id: 'spr-c13',
      title: 'Building, Packaging & Running',
      icon: '📦',
      sections: [
        { type: 'heading', text: 'From source to running jar', level: 1 },
        { type: 'para', html: 'Spring Boot\'s build plugins (Maven or Gradle) produce a <strong>fat jar</strong> — an "uber jar" containing your code, every dependency, and an embedded server. One artifact, one command to run it.' },

        { type: 'heading', text: 'Maven', level: 2 },
        { type: 'code', lang: 'xml', code: `&lt;parent&gt;
  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
  &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
  &lt;version&gt;3.3.0&lt;/version&gt;
&lt;/parent&gt;

&lt;build&gt;
  &lt;plugins&gt;
    &lt;plugin&gt;
      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
      &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
    &lt;/plugin&gt;
  &lt;/plugins&gt;
&lt;/build&gt;` },
        { type: 'code', lang: 'bash', code: `<span class="com"># build the jar</span>
mvn clean package

<span class="com"># run it</span>
java -jar target/order-service-1.0.0.jar

<span class="com"># run with dev profile</span>
java -jar target/order-service-1.0.0.jar --spring.profiles.active=dev

<span class="com"># dev-mode hot reload (devtools on classpath)</span>
mvn spring-boot:run` },

        { type: 'heading', text: 'Gradle', level: 2 },
        { type: 'code', lang: 'groovy', code: `plugins {
  id <span class="str">'org.springframework.boot'</span> version <span class="str">'3.3.0'</span>
  id <span class="str">'io.spring.dependency-management'</span> version <span class="str">'1.1.5'</span>
  id <span class="str">'java'</span>
}

dependencies {
  implementation <span class="str">'org.springframework.boot:spring-boot-starter-web'</span>
  testImplementation <span class="str">'org.springframework.boot:spring-boot-starter-test'</span>
}` },
        { type: 'code', lang: 'bash', code: `gradle build           <span class="com"># build/libs/app.jar</span>
gradle bootRun         <span class="com"># run in dev mode</span>
java -jar build/libs/order-service-1.0.0.jar` },

        { type: 'heading', text: 'Property source priority (recap)', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Command-line <code>--key=value</code>',
          'JVM system properties <code>-Dkey=value</code>',
          'OS environment variables',
          '<code>application-{profile}.properties</code> (active profile)',
          '<code>application.properties</code>',
          '<code>@PropertySource</code> annotated configs',
          'Defaults in code'
        ] },

        { type: 'heading', text: 'Dockerizing', level: 2 },
        { type: 'code', lang: 'dockerfile', code: `<span class="kw">FROM</span> eclipse-temurin:21-jre-alpine
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> target/order-service-1.0.0.jar app.jar
<span class="kw">EXPOSE</span> 8080
<span class="kw">ENTRYPOINT</span> [<span class="str">"java"</span>, <span class="str">"-jar"</span>, <span class="str">"app.jar"</span>]` },
        { type: 'para', html: 'Or skip writing a Dockerfile and use Spring\'s built-in image builder:' },
        { type: 'code', lang: 'bash', code: `mvn spring-boot:build-image
<span class="com"># produces docker.io/library/order-service:1.0.0</span>` },
        { type: 'callout', kind: 'tip', html: '<strong>Layered jars</strong>: Boot 2.3+ packs the jar in layers (deps, snapshot deps, resources, classes) — Docker can cache the unchanged layers, giving you much smaller image rebuilds.' },

        { type: 'heading', text: 'Native image with GraalVM', level: 2 },
        { type: 'para', html: 'Spring Boot 3 supports <strong>ahead-of-time compilation</strong> via GraalVM — produce a single native binary that starts in tens of milliseconds and uses a fraction of the memory of a JVM. Great for serverless and CLIs:' },
        { type: 'code', lang: 'bash', code: `mvn -Pnative native:compile
./target/order-service</span>` }
      ]
    },

    /* ============ Chapter 14 ============ */
    {
      id: 'spr-c14',
      title: 'Microservices with Spring Cloud',
      icon: '☁️',
      sections: [
        { type: 'heading', text: 'When one service isn\'t enough', level: 1 },
        { type: 'para', html: '<strong>Spring Cloud</strong> is a family of projects that solve distributed-system problems: service discovery, centralized config, declarative HTTP clients, circuit breakers, API gateways, and distributed tracing.' },

        { type: 'heading', text: 'Service discovery with Eureka', level: 2 },
        { type: 'para', html: 'In a microservices system, hardcoding hostnames is brittle. <strong>Eureka</strong> is a registry: services register on startup, others look up by name.' },
        { type: 'code', lang: 'java', code: `<span class="com">// The Eureka server itself — its own Boot app</span>
<span class="kw">@SpringBootApplication</span>
<span class="kw">@EnableEurekaServer</span>
<span class="kw">public class</span> <span class="ty">DiscoveryApp</span> { ... }

<span class="com">// Each microservice registers</span>
<span class="kw">@SpringBootApplication</span>
<span class="kw">public class</span> <span class="ty">OrderApp</span> { ... }

<span class="com"># application.yml</span>
spring.application.name: order-service
eureka.client.service-url.defaultZone: http://localhost:8761/eureka/` },

        { type: 'heading', text: 'OpenFeign — declarative HTTP', level: 2 },
        { type: 'para', html: 'Write an interface; Feign generates the HTTP client. With discovery enabled, you call services by name, not by URL.' },
        { type: 'code', lang: 'java', code: `<span class="kw">@FeignClient</span>(name = <span class="str">"billing-service"</span>)
<span class="kw">public interface</span> <span class="ty">BillingClient</span> {

  <span class="kw">@GetMapping</span>(<span class="str">"/invoices/{id}"</span>)
  <span class="ty">Invoice</span> <span class="fn">findInvoice</span>(<span class="kw">@PathVariable</span> <span class="ty">Long</span> id);

  <span class="kw">@PostMapping</span>(<span class="str">"/invoices"</span>)
  <span class="ty">Invoice</span> <span class="fn">create</span>(<span class="kw">@RequestBody</span> <span class="ty">InvoiceRequest</span> req);
}

<span class="com">// Use it like any other Spring bean</span>
<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {
  <span class="kw">private final</span> <span class="ty">BillingClient</span> billing;

  <span class="kw">public</span> <span class="fn">OrderService</span>(<span class="ty">BillingClient</span> billing) { <span class="kw">this</span>.billing = billing; }

  <span class="kw">public</span> <span class="ty">Order</span> <span class="fn">place</span>(<span class="ty">OrderRequest</span> req) {
    <span class="ty">Invoice</span> inv = billing.<span class="fn">create</span>(<span class="kw">new</span> <span class="ty">InvoiceRequest</span>(req.<span class="fn">total</span>()));
    <span class="kw">return</span> save(req, inv.<span class="fn">id</span>());
  }
}` },

        { type: 'heading', text: 'Spring Cloud Config Server', level: 2 },
        { type: 'para', html: 'Instead of bundling <code>application.properties</code> into every microservice, host them in a Git repo. A <strong>Config Server</strong> serves the right file based on app name + profile.' },
        { type: 'code', lang: 'yaml', code: `<span class="com"># config-server application.yml</span>
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          searchPaths: <span class="str">'{application}'</span>

<span class="com"># a client</span>
spring:
  application:
    name: order-service
  config:
    import: <span class="str">'configserver:http://localhost:8888'</span>` },

        { type: 'heading', text: 'Resilience with Resilience4j', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">BillingService</span> {

  <span class="kw">@CircuitBreaker</span>(name = <span class="str">"billing"</span>, fallbackMethod = <span class="str">"fallback"</span>)
  <span class="kw">@Retry</span>(name = <span class="str">"billing"</span>)
  <span class="kw">public</span> <span class="ty">Invoice</span> <span class="fn">create</span>(<span class="ty">InvoiceRequest</span> req) {
    <span class="kw">return</span> client.<span class="fn">create</span>(req);
  }

  <span class="kw">private</span> <span class="ty">Invoice</span> <span class="fn">fallback</span>(<span class="ty">InvoiceRequest</span> req, <span class="ty">Throwable</span> t) {
    <span class="kw">return new</span> <span class="ty">Invoice</span>(null, req.<span class="fn">total</span>(), <span class="str">"PENDING"</span>);
  }
}` },
        { type: 'callout', kind: 'info', html: 'Circuit breaker pattern: when downstream calls keep failing, "open the circuit" — fail fast and return a fallback. After a timeout, allow a trial request. Prevents cascading failures.' },

        { type: 'heading', text: 'API Gateway', level: 2 },
        { type: 'para', html: '<strong>Spring Cloud Gateway</strong> is a reactive gateway that sits in front of your services: a single entry point that routes, transforms, authenticates, and rate-limits requests.' },
        { type: 'code', lang: 'yaml', code: `spring:
  cloud:
    gateway:
      routes:
        - id: users-route
          uri: lb://user-service       <span class="com"># load-balanced via discovery</span>
          predicates:
            - Path=/api/users/**
        - id: orders-route
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
          filters:
            - AddRequestHeader=X-Source, gateway` },
        { type: 'callout', kind: 'warn', html: 'Microservices add operational complexity: more deploys, more wire-level failures, distributed tracing, distributed transactions. Reach for them when your problem actually needs them — not because they\'re trendy.' }
      ]
    },

    /* ============ Chapter 15 ============ */
    {
      id: 'spr-c15',
      title: 'Best Practices & Common Pitfalls',
      icon: '🏗️',
      sections: [
        { type: 'heading', text: 'Lessons from production', level: 1 },
        { type: 'para', html: 'Spring Boot makes the easy stuff trivial. The remaining hard parts are about <em>structure</em>, <em>data discipline</em>, and avoiding well-known traps.' },

        { type: 'heading', text: 'Layered architecture', level: 2 },
        { type: 'image', alt: 'Layered architecture diagram',
          svg: `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.l{stroke:#475569;stroke-width:2}.ctrl{fill:#fef3c7}.svc{fill:#dcfce7}.repo{fill:#dbeafe}.db{fill:#fee2e2}.t{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#1e293b;text-anchor:middle}.td{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.arr{fill:none;stroke:#1e293b;stroke-width:1.5;marker-end:url(#m3)}</style>
  <marker id="m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
</defs>
<rect x="60" y="40" width="160" height="60" rx="10" class="ctrl l"/>
<text x="140" y="68" class="t">Controller</text>
<text x="140" y="86" class="td">HTTP / DTOs</text>
<rect x="260" y="40" width="160" height="60" rx="10" class="svc l"/>
<text x="340" y="68" class="t">Service</text>
<text x="340" y="86" class="td">Business logic + @Transactional</text>
<rect x="460" y="40" width="160" height="60" rx="10" class="repo l"/>
<text x="540" y="68" class="t">Repository</text>
<text x="540" y="86" class="td">JpaRepository</text>
<rect x="660" y="40" width="100" height="60" rx="10" class="db l"/>
<text x="710" y="68" class="t">Database</text>
<text x="710" y="86" class="td">SQL</text>
<line x1="220" y1="70" x2="260" y2="70" class="arr"/>
<line x1="420" y1="70" x2="460" y2="70" class="arr"/>
<line x1="620" y1="70" x2="660" y2="70" class="arr"/>
<text x="400" y="140" class="td">Dependencies flow downward only. The Controller never touches Repository directly.</text>
<rect x="60" y="170" width="160" height="60" rx="10" class="ctrl l" opacity="0.5"/>
<text x="140" y="195" class="t">DTO in</text>
<text x="140" y="215" class="td">UserRequest</text>
<rect x="260" y="170" width="160" height="60" rx="10" class="svc l" opacity="0.5"/>
<text x="340" y="195" class="t">DTO out</text>
<text x="340" y="215" class="td">UserResponse</text>
<rect x="460" y="170" width="160" height="60" rx="10" class="repo l" opacity="0.5"/>
<text x="540" y="195" class="t">Entity</text>
<text x="540" y="215" class="td">@Entity User</text>
</svg>` },
        { type: 'list', kind: 'check', items: [
          '<strong>Controller</strong>: HTTP only — bind request, validate, call service, return DTO',
          '<strong>Service</strong>: business logic, transactions, orchestration. No HTTP concepts',
          '<strong>Repository</strong>: data access. Returns entities',
          'Dependencies only flow downward. The Controller never injects a Repository directly'
        ] },

        { type: 'heading', text: 'DTOs vs entities', level: 2 },
        { type: 'para', html: 'Two near-identical classes feel wasteful. Use them anyway. Entities are your DB shape; DTOs are your API contract. Coupling them means a schema change breaks every client.' },
        { type: 'code', lang: 'java', code: `<span class="com">// Entity — internal</span>
<span class="kw">@Entity</span>
<span class="kw">class</span> <span class="ty">User</span> {
  <span class="kw">@Id</span> <span class="kw">private</span> <span class="ty">Long</span> id;
  <span class="kw">private</span> <span class="ty">String</span> name;
  <span class="kw">private</span> <span class="ty">String</span> email;
  <span class="kw">private</span> <span class="ty">String</span> passwordHash;     <span class="com">// must never leak</span>
  <span class="kw">private</span> <span class="ty">Instant</span> createdAt;
}

<span class="com">// DTOs — what the API exposes / accepts</span>
<span class="kw">public record</span> <span class="ty">UserRequest</span>(
    <span class="kw">@NotBlank</span> <span class="ty">String</span> name,
    <span class="kw">@Email</span> <span class="ty">String</span> email,
    <span class="kw">@NotBlank</span> <span class="ty">String</span> password) { }

<span class="kw">public record</span> <span class="ty">UserResponse</span>(<span class="ty">Long</span> id, <span class="ty">String</span> name, <span class="ty">String</span> email) { }` },

        { type: 'heading', text: 'Transactions — the @Transactional gotcha', level: 2 },
        { type: 'para', html: '<code>@Transactional</code> works via a proxy. Method <code>A</code> calling method <code>B</code> on <code>this</code> bypasses the proxy — so <code>B</code>\'s transaction settings are ignored.' },
        { type: 'code', lang: 'java', code: `<span class="kw">@Service</span>
<span class="kw">public class</span> <span class="ty">OrderService</span> {

  <span class="kw">public void</span> <span class="fn">place</span>(<span class="ty">OrderRequest</span> req) {
    <span class="kw">this</span>.<span class="fn">persistOrder</span>(req);   <span class="com">// ⚠️ self-call — no transaction!</span>
  }

  <span class="kw">@Transactional</span>
  <span class="kw">public void</span> <span class="fn">persistOrder</span>(<span class="ty">OrderRequest</span> req) { ... }
}` },
        { type: 'callout', kind: 'warn', html: 'Fix: move the transactional method to a different bean, or inject <code>this</code>\'s proxy via <code>ApplicationContext</code>. Better: put <code>@Transactional</code> on the entry-point method only.' },

        { type: 'heading', text: 'Performance pitfalls', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>N+1 queries</strong> — use <code>JOIN FETCH</code> or <code>@EntityGraph</code> or projection DTOs',
          '<strong>EAGER fetch on @ManyToOne</strong> — pulls extra data on every find. Make it LAZY',
          '<strong>Returning entities to the controller</strong> — Jackson may trigger lazy loads outside a transaction → <code>LazyInitializationException</code>',
          '<strong>Open Session In View</strong> defaults ON — disable in production: <code>spring.jpa.open-in-view=false</code>',
          '<strong>Repository call in a loop</strong> — batch with <code>findAllById</code> instead'
        ] },

        { type: 'heading', text: 'Naming, structure, hygiene', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Put <code>@SpringBootApplication</code> at the top of your package; nested packages are scanned automatically',
          'One package per concern: <code>controller/</code>, <code>service/</code>, <code>repository/</code>, <code>model/</code>, <code>config/</code>',
          'Constructor injection only — never <code>@Autowired</code> on fields',
          'Use Java <code>record</code>s for DTOs — immutable, concise, perfect for the wire',
          'Throw domain exceptions, map them in <code>@RestControllerAdvice</code>',
          'Externalize every secret — never hardcode passwords, keys, hosts'
        ] },
        { type: 'callout', kind: 'success', html: 'Spring Boot rewards taste. The framework lets you do almost anything; <em>convention</em> is what keeps codebases readable. Pick a layered structure, stick to it, and your future self will fly through changes.' },

        { type: 'heading', text: 'Where to go next', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'Read the <strong>Spring Boot reference docs</strong> — exceptionally good',
          'Study a sample app like <code>spring-petclinic</code>',
          'Explore <strong>Spring WebFlux</strong> for reactive, non-blocking apps',
          'Learn <strong>Testcontainers</strong> for real-DB integration tests',
          'Try <strong>GraalVM native-image</strong> for fast-start, low-memory deployments'
        ] }
      ]
    }

  ]
});

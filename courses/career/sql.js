PUSH({
  id: 'sql',
  name: 'SQL & Databases',
  icon: '🗄️',
  color: '#1976d2',
  description: 'Master SQL — SELECT, joins, indexes, normalization, transactions, and beyond.',
  units: [

    /* ============== UNIT 1 ============== */
    {
      id: 'sql-u1', name: 'Unit 1 · Databases & SQL Intro', description: 'What and why',
      lessons: [
        {
          id: 'sql-u1-l1', name: 'Why databases?', icon: '🗄️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Persistent, queryable storage', content: `<p>A <strong>database</strong> is software that stores data in a structured, queryable way. <strong>SQL</strong> (Structured Query Language) is how you talk to most of them.</p>
<div class="code-block"><span class="com">Relational DBs (SQL):</span>
- PostgreSQL    open-source, feature-rich
- MySQL         open-source, ubiquitous
- SQLite        single-file, embedded
- SQL Server    Microsoft
- Oracle        enterprise

<span class="com">NoSQL DBs:</span>
- MongoDB       documents
- Redis         in-memory key-value
- Cassandra     wide-column, big scale
- DynamoDB      managed key-value (AWS)
- Elasticsearch search engine</div>
<p>SQL is over 50 years old and still dominant — because relational tables fit so many problems.</p>` },
            { type: 'multiple-choice', prompt: 'Which is a relational (SQL) database?',
              options: [{text:'MongoDB', code:false},{text:'Redis', code:false},{text:'PostgreSQL', code:false},{text:'Cassandra', code:false}],
              correct: 2, explanation: 'PostgreSQL is one of the most powerful open-source SQL DBs.' },
            { type: 'true-false', statement: 'SQL stands for "Structured Query Language".', correct: true, explanation: 'Originally "SEQUEL" (Structured English Query Language), renamed to SQL.' },
            { type: 'match-pairs', prompt: 'DB → category.', leftLabel: 'DB', rightLabel: 'Type',
              pairs: [{left:'PostgreSQL', right:'Relational'},{left:'MongoDB', right:'Document'},{left:'Redis', right:'Key-value'},{left:'Elasticsearch', right:'Search engine'}] },
            { type: 'multiple-choice', prompt: 'A "schema" is:',
              options: [{text:'A query', code:false},{text:'The structure of your database (tables, columns, types, constraints)', code:false},{text:'A backup', code:false},{text:'An index', code:false}],
              correct: 1, explanation: 'The blueprint of your data.' }
          ]
        },
        {
          id: 'sql-u1-l2', name: 'Tables, rows, columns', icon: '📊', xp: 15,
          challenges: [
            { type: 'concept', title: 'The relational model', content: `<div class="code-block">users table:
+----+----------+----------------+-----+
| id | name     | email          | age |
+----+----------+----------------+-----+
| 1  | Ana      | ana@x.com      | 28  |   ← row (tuple)
| 2  | Bob      | bob@x.com      | 33  |
| 3  | Carlos   | carlos@x.com   | 25  |
+----+----------+----------------+-----+
  ↑   ↑                                   columns (attributes)
  └─primary key (unique identifier)</div>
<p>Each table has <strong>columns</strong> (typed) and <strong>rows</strong> (the actual data). One column is usually the <strong>primary key</strong> — unique per row.</p>` },
            { type: 'multiple-choice', prompt: 'A "primary key" must be:',
              options: [{text:'Integer only', code:false},{text:'Unique and not NULL', code:false},{text:'Multiple per row', code:false},{text:'Optional', code:false}],
              correct: 1, explanation: 'Unique identifier — never NULL, never repeated.' },
            { type: 'true-false', statement: 'A column can hold values of any type — no enforcement.', correct: false, explanation: 'Columns are TYPED. INTEGER won\'t accept strings.' },
            { type: 'fill-blank', prompt: 'A row is also sometimes called a:',
              codeLines: [{html:'<span class="kw">_BLANK_</span>'}],
              tokens: ['tuple','record','entity','any of these'], correctAnswer: 'tuple', explanation: 'In relational theory: tuple. Practically: row or record.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — SELECT ============== */
    {
      id: 'sql-u2', name: 'Unit 2 · SELECT — Reading Data', description: 'The most common SQL command',
      lessons: [
        {
          id: 'sql-u2-l1', name: 'Basic SELECT', icon: '🔍', xp: 20,
          challenges: [
            { type: 'concept', title: 'Pick columns from a table', content: `<div class="code-block"><span class="kw">SELECT</span> name, email <span class="kw">FROM</span> users;        <span class="com">-- specific cols</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users;                   <span class="com">-- all columns</span>
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> country <span class="kw">FROM</span> users;     <span class="com">-- unique values only</span>

<span class="kw">SELECT</span>
  name <span class="kw">AS</span> full_name,                       <span class="com">-- alias</span>
  age * <span class="num">365</span> <span class="kw">AS</span> approx_days_lived
<span class="kw">FROM</span> users;</div>` },
            { type: 'multiple-choice', prompt: 'Which is best practice in production?',
              options: [{text:'SELECT *', code:true},{text:'SELECT specific columns you need', code:true},{text:'No difference', code:true},{text:'Always *', code:true}],
              correct: 1, explanation: 'SELECT * grabs every column = wasted bandwidth + breaks if schema changes. Be explicit.' },
            { type: 'fill-blank', prompt: 'Get only unique countries from users:',
              codeLines: [{html:'<span class="kw">SELECT</span> <span class="kw">_BLANK_</span> country <span class="kw">FROM</span> users;'}],
              tokens: ['DISTINCT','UNIQUE','ONLY','SINGLE'], correctAnswer: 'DISTINCT', explanation: 'DISTINCT removes duplicates.' },
            { type: 'multiple-choice', prompt: 'What does <code>AS</code> do?',
              options: [{text:'Casts type', code:false},{text:'Renames a column or table in the result (alias)', code:false},{text:'Compares values', code:false},{text:'No effect', code:false}],
              correct: 1, explanation: 'Aliases — handy for readability and required for some patterns.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — WHERE ============== */
    {
      id: 'sql-u3', name: 'Unit 3 · WHERE — Filtering', description: 'Get only the rows you want',
      lessons: [
        {
          id: 'sql-u3-l1', name: 'Filter conditions', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: 'Comparisons, AND/OR, IN, LIKE, NULL', content: `<div class="code-block"><span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> age &gt;= <span class="num">18</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> orders <span class="kw">WHERE</span> total &lt; <span class="num">100</span> <span class="kw">AND</span> status = <span class="str">\'paid\'</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> country <span class="kw">IN</span> (<span class="str">\'US\'</span>, <span class="str">\'CA\'</span>, <span class="str">\'MX\'</span>);
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> age <span class="kw">BETWEEN</span> <span class="num">18</span> <span class="kw">AND</span> <span class="num">30</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> name <span class="kw">LIKE</span> <span class="str">\'A%\'</span>;      <span class="com">-- starts with A</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> email <span class="kw">IS NULL</span>;     <span class="com">-- NULL!</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> email <span class="kw">IS NOT NULL</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> <span class="kw">NOT</span> (age &lt; <span class="num">18</span>);</div>` },
            { type: 'multiple-choice', prompt: 'Why <code>WHERE email = NULL</code> doesn\'t work?',
              options: [{text:'NULL is not a value — use IS NULL', code:false},{text:'Wrong syntax', code:false},{text:'It works fine', code:false},{text:'NULL ≠ empty string', code:false}],
              correct: 0, explanation: 'NULL means "unknown" — comparisons return UNKNOWN, never TRUE. Always use IS NULL / IS NOT NULL.' },
            { type: 'multiple-choice', prompt: '<code>LIKE \'%foo%\'</code> matches:',
              options: [{text:'Exactly "foo"', code:true},{text:'Strings containing "foo" anywhere', code:true},{text:'Starts with foo', code:true},{text:'Ends with foo', code:true}],
              correct: 1, explanation: '% = any sequence. _ = exactly one char.' },
            { type: 'fill-blank', prompt: 'Filter age between 18 and 30 inclusive:',
              codeLines: [{html:'<span class="kw">WHERE</span> age <span class="kw">_BLANK_</span> <span class="num">18</span> <span class="kw">AND</span> <span class="num">30</span>'}],
              tokens: ['BETWEEN','RANGE','IN','LIKE'], correctAnswer: 'BETWEEN', explanation: 'BETWEEN is inclusive on both ends.' },
            { type: 'output-predict', prompt: 'Result of: <code>SELECT NULL = NULL;</code>',
              code: `<span class="com">-- NULL comparisons return UNKNOWN</span>`,
              options: ['TRUE','FALSE','NULL / UNKNOWN','Error'], correct: 2, explanation: 'NULL=NULL is UNKNOWN. The famous SQL three-valued logic.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — ORDER BY ============== */
    {
      id: 'sql-u4', name: 'Unit 4 · ORDER BY & LIMIT', description: 'Sort and slice results',
      lessons: [
        {
          id: 'sql-u4-l1', name: 'Sorting & pagination', icon: '📑', xp: 15,
          challenges: [
            { type: 'concept', title: 'ORDER BY, LIMIT, OFFSET', content: `<div class="code-block"><span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> price;            <span class="com">-- asc by default</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> price <span class="kw">DESC</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products
<span class="kw">ORDER BY</span> category, price <span class="kw">DESC</span>;                  <span class="com">-- multi-column</span>

<span class="kw">SELECT</span> * <span class="kw">FROM</span> products
<span class="kw">ORDER BY</span> price <span class="kw">DESC</span> <span class="kw">LIMIT</span> <span class="num">10</span>;                  <span class="com">-- top 10 by price</span>

<span class="com">-- Pagination (page 3, 20 per page = skip 40)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products
<span class="kw">ORDER BY</span> id
<span class="kw">LIMIT</span> <span class="num">20</span> <span class="kw">OFFSET</span> <span class="num">40</span>;</div>` },
            { type: 'multiple-choice', prompt: 'Default ORDER BY direction?',
              options: [{text:'ASC (ascending)', code:false},{text:'DESC (descending)', code:false},{text:'Random', code:false},{text:'No default — must specify', code:false}],
              correct: 0, explanation: 'ASC by default. Add DESC for descending.' },
            { type: 'multiple-choice', prompt: 'Top 5 most expensive products:',
              options: [{text:'SELECT * FROM products WHERE price = max', code:true},{text:'SELECT * FROM products ORDER BY price DESC LIMIT 5', code:true},{text:'GET 5 FROM products', code:true},{text:'SELECT TOP 5 ...', code:true}],
              correct: 1, explanation: 'Standard SQL: ORDER BY price DESC LIMIT 5. (SQL Server uses TOP 5).' },
            { type: 'true-false', statement: 'For pagination on big tables, OFFSET gets slower the deeper you page (DB still scans rows to skip).', correct: true, explanation: 'OFFSET 1,000,000 = DB reads and discards 1M rows. Use cursor-based pagination for big tables.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Aggregations ============== */
    {
      id: 'sql-u5', name: 'Unit 5 · Aggregations & GROUP BY', description: 'Summarize many rows into one',
      lessons: [
        {
          id: 'sql-u5-l1', name: 'COUNT, SUM, AVG, GROUP BY', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'Aggregate functions', content: `<div class="code-block"><span class="com">-- Simple aggregates</span>
<span class="kw">SELECT</span> <span class="fn">COUNT</span>(*) <span class="kw">FROM</span> users;             <span class="com">-- row count</span>
<span class="kw">SELECT</span> <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> country) <span class="kw">FROM</span> users;
<span class="kw">SELECT</span> <span class="fn">AVG</span>(price), <span class="fn">MIN</span>(price), <span class="fn">MAX</span>(price), <span class="fn">SUM</span>(price)
<span class="kw">FROM</span> products;

<span class="com">-- GROUP BY = "split into groups, aggregate each"</span>
<span class="kw">SELECT</span> category, <span class="fn">COUNT</span>(*), <span class="fn">AVG</span>(price)
<span class="kw">FROM</span> products
<span class="kw">GROUP BY</span> category;

<span class="com">-- HAVING = WHERE for groups (after aggregation)</span>
<span class="kw">SELECT</span> category, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> n
<span class="kw">FROM</span> products
<span class="kw">GROUP BY</span> category
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt; <span class="num">5</span>;                <span class="com">-- categories with &gt; 5 items</span></div>` },
            { type: 'multiple-choice', prompt: 'WHERE vs HAVING — what\'s the difference?',
              options: [{text:'Same thing', code:false},{text:'WHERE filters rows BEFORE grouping; HAVING filters groups AFTER aggregation', code:false},{text:'HAVING is faster', code:false},{text:'WHERE only for numbers', code:false}],
              correct: 1, explanation: 'WHERE → rows. GROUP BY → groups. HAVING → filter groups.' },
            { type: 'multiple-choice', prompt: 'Count products per category, only categories with avg price > $50:',
              options: [{text:'WHERE AVG(price) > 50', code:true},{text:'HAVING AVG(price) > 50', code:true},{text:'GROUP BY price > 50', code:true},{text:'ORDER BY AVG > 50', code:true}],
              correct: 1, explanation: 'Aggregates only work after grouping → HAVING.' },
            { type: 'output-predict', prompt: 'Given orders with totals [100, 200, 300, 200, 400], what does <code>COUNT(DISTINCT total)</code> return?',
              code: `<span class="com">-- distinct values: 100, 200, 300, 400</span>`,
              options: ['3','4','5','1200'], correct: 1, explanation: 'Four unique totals.' },
            { type: 'fill-blank', prompt: 'Average salary per department:',
              codeLines: [{html:'<span class="kw">SELECT</span> dept, <span class="fn">AVG</span>(salary) <span class="kw">FROM</span> employees <span class="kw">_BLANK_</span> dept;'}],
              tokens: ['GROUP BY','ORDER BY','PARTITION','HAVING'], correctAnswer: 'GROUP BY' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — JOINs ============== */
    {
      id: 'sql-u6', name: 'Unit 6 · JOINs — Combining Tables', description: 'Where relations get relational',
      lessons: [
        {
          id: 'sql-u6-l1', name: 'INNER, LEFT, RIGHT, FULL', icon: '🔗', xp: 30,
          challenges: [
            { type: 'concept', title: 'Four flavors of JOIN', content: `<div class="code-block"><span class="com">-- INNER JOIN — rows matching BOTH sides</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">INNER JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;

<span class="com">-- LEFT JOIN — all from LEFT, matched (or NULL) from right</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;
<span class="com">-- users with NO orders still appear, with NULL total</span>

<span class="com">-- RIGHT JOIN — all from RIGHT (less common)</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">RIGHT JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;

<span class="com">-- FULL OUTER JOIN — all rows from both</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">FULL OUTER JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;</div>` },
            { type: 'multiple-choice', prompt: 'Show all users + their orders (including users with no orders):',
              options: [{text:'INNER JOIN', code:true},{text:'LEFT JOIN', code:true},{text:'RIGHT JOIN', code:true},{text:'CROSS JOIN', code:true}],
              correct: 1, explanation: 'LEFT JOIN preserves all from the left (users); orderless users get NULL.' },
            { type: 'multiple-choice', prompt: 'INNER JOIN result has rows where:',
              options: [{text:'Either side matches', code:false},{text:'BOTH sides have matching join key', code:false},{text:'Only the left', code:false},{text:'Random', code:false}],
              correct: 1, explanation: 'Inner = intersection.' },
            { type: 'multiple-choice', prompt: 'CROSS JOIN does:',
              options: [{text:'Match by key', code:false},{text:'Cartesian product — every row × every row (rare)', code:false},{text:'Full outer', code:false},{text:'Hash join', code:false}],
              correct: 1, explanation: 'CROSS JOIN of A(m) and B(n) = m×n rows. Use only when you really want all combinations.' },
            { type: 'true-false', statement: 'You can JOIN more than two tables — chain them with additional JOINs.', correct: true, explanation: 'Most real queries join 3-5 tables.' }
          ]
        },
        {
          id: 'sql-u6-l2', name: 'Real JOIN patterns', icon: '🧩', xp: 25,
          challenges: [
            { type: 'concept', title: 'Multi-table queries', content: `<div class="code-block"><span class="com">-- 3-table join with filtering and aggregation</span>
<span class="kw">SELECT</span>
  u.name,
  c.name <span class="kw">AS</span> country,
  <span class="fn">COUNT</span>(o.id) <span class="kw">AS</span> total_orders,
  <span class="fn">SUM</span>(o.total) <span class="kw">AS</span> spent
<span class="kw">FROM</span> users u
<span class="kw">JOIN</span> countries c <span class="kw">ON</span> c.id = u.country_id
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id
<span class="kw">WHERE</span> u.status = <span class="str">\'active\'</span>
<span class="kw">GROUP BY</span> u.id, u.name, c.name
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(o.id) &gt; <span class="num">0</span>
<span class="kw">ORDER BY</span> spent <span class="kw">DESC</span>
<span class="kw">LIMIT</span> <span class="num">10</span>;</div>` },
            { type: 'multiple-choice', prompt: 'In SQL, the order of clause execution is:',
              options: [{text:'SELECT → FROM → WHERE', code:false},{text:'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT', code:false},{text:'WHERE → SELECT → FROM', code:false},{text:'Same as written', code:false}],
              correct: 1, explanation: 'You WRITE SELECT first, but it RUNS later. Crucial for understanding aliases & errors.' },
            { type: 'true-false', statement: 'Table aliases (e.g., <code>users u</code>) make multi-table queries readable and required for self-joins.', correct: true, explanation: 'Without aliases, ambiguous column names cause errors.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Subqueries / CTEs ============== */
    {
      id: 'sql-u7', name: 'Unit 7 · Subqueries & CTEs', description: 'Query within a query',
      lessons: [
        {
          id: 'sql-u7-l1', name: 'Subqueries', icon: '🔎', xp: 25,
          challenges: [
            { type: 'concept', title: 'A SELECT inside another SELECT', content: `<div class="code-block"><span class="com">-- Subquery in WHERE</span>
<span class="kw">SELECT</span> name <span class="kw">FROM</span> users
<span class="kw">WHERE</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> user_id <span class="kw">FROM</span> orders <span class="kw">WHERE</span> total &gt; <span class="num">1000</span>);

<span class="com">-- Subquery in FROM (derived table)</span>
<span class="kw">SELECT</span> dept, avg_salary
<span class="kw">FROM</span> (
  <span class="kw">SELECT</span> dept, <span class="fn">AVG</span>(salary) <span class="kw">AS</span> avg_salary
  <span class="kw">FROM</span> employees
  <span class="kw">GROUP BY</span> dept
) t
<span class="kw">WHERE</span> avg_salary &gt; <span class="num">50000</span>;

<span class="com">-- Correlated subquery (refers to outer query)</span>
<span class="kw">SELECT</span> name, salary <span class="kw">FROM</span> employees e
<span class="kw">WHERE</span> salary &gt; (
  <span class="kw">SELECT</span> <span class="fn">AVG</span>(salary) <span class="kw">FROM</span> employees
  <span class="kw">WHERE</span> dept = e.dept                  <span class="com">-- references outer</span>
);</div>` },
            { type: 'multiple-choice', prompt: 'A correlated subquery:',
              options: [{text:'Runs once', code:false},{text:'Runs per row of the outer query (refers to outer columns)', code:false},{text:'Faster than joins always', code:false},{text:'Can\'t join', code:false}],
              correct: 1, explanation: 'Correlated subqueries can be slow — often rewritable as a join.' },
            { type: 'multiple-choice', prompt: 'When IS a subquery preferable over a JOIN?',
              options: [{text:'Always', code:false},{text:'Never', code:false},{text:'When you only need EXISTS check, or for clearer intent', code:false},{text:'For aggregations', code:false}],
              correct: 2, explanation: '<code>WHERE EXISTS (...)</code> is often clearer than a join + DISTINCT.' }
          ]
        },
        {
          id: 'sql-u7-l2', name: 'CTEs (WITH)', icon: '🪜', xp: 25,
          challenges: [
            { type: 'concept', title: 'Named temporary results', content: `<div class="code-block"><span class="com">-- CTE — Common Table Expression. Like a named subquery.</span>
<span class="kw">WITH</span> high_spenders <span class="kw">AS</span> (
  <span class="kw">SELECT</span> user_id, <span class="fn">SUM</span>(total) <span class="kw">AS</span> total
  <span class="kw">FROM</span> orders
  <span class="kw">GROUP BY</span> user_id
  <span class="kw">HAVING</span> <span class="fn">SUM</span>(total) &gt; <span class="num">1000</span>
)
<span class="kw">SELECT</span> u.name, hs.total
<span class="kw">FROM</span> users u
<span class="kw">JOIN</span> high_spenders hs <span class="kw">ON</span> hs.user_id = u.id;

<span class="com">-- Multiple CTEs separated by commas</span>
<span class="kw">WITH</span>
  active_users <span class="kw">AS</span> (<span class="kw">SELECT</span> ...),
  recent_orders <span class="kw">AS</span> (<span class="kw">SELECT</span> ...)
<span class="kw">SELECT</span> ...
<span class="kw">FROM</span> active_users
<span class="kw">JOIN</span> recent_orders ...;</div>` },
            { type: 'multiple-choice', prompt: 'Why use a CTE instead of a deeply-nested subquery?',
              options: [{text:'Faster always', code:false},{text:'Much more readable; can be referenced multiple times', code:false},{text:'Required by SQL', code:false},{text:'Less typing', code:false}],
              correct: 1, explanation: 'CTEs flatten complex queries into readable stages.' },
            { type: 'true-false', statement: 'CTEs support recursion — great for hierarchies (org charts, threaded comments).', correct: true, explanation: 'Recursive CTEs traverse trees/graphs in pure SQL.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — DML ============== */
    {
      id: 'sql-u8', name: 'Unit 8 · INSERT, UPDATE, DELETE', description: 'Changing data',
      lessons: [
        {
          id: 'sql-u8-l1', name: 'Mutations', icon: '✏️', xp: 25,
          challenges: [
            { type: 'concept', title: 'The DML statements', content: `<div class="code-block"><span class="com">-- INSERT</span>
<span class="kw">INSERT INTO</span> users (name, email, age)
<span class="kw">VALUES</span> (<span class="str">\'Ana\'</span>, <span class="str">\'ana@x.com\'</span>, <span class="num">28</span>);

<span class="com">-- Multi-row insert</span>
<span class="kw">INSERT INTO</span> users (name, email) <span class="kw">VALUES</span>
  (<span class="str">\'Bob\'</span>, <span class="str">\'b@x.com\'</span>),
  (<span class="str">\'Cara\'</span>, <span class="str">\'c@x.com\'</span>);

<span class="com">-- INSERT from SELECT</span>
<span class="kw">INSERT INTO</span> archive_users
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> last_seen &lt; <span class="str">\'2020-01-01\'</span>;

<span class="com">-- UPDATE</span>
<span class="kw">UPDATE</span> users
<span class="kw">SET</span> age = age + <span class="num">1</span>
<span class="kw">WHERE</span> id = <span class="num">42</span>;

<span class="com">-- DELETE</span>
<span class="kw">DELETE FROM</span> users <span class="kw">WHERE</span> last_seen &lt; <span class="str">\'2020-01-01\'</span>;

<span class="com">-- Upsert (Postgres syntax)</span>
<span class="kw">INSERT INTO</span> users (email, name) <span class="kw">VALUES</span> (<span class="str">\'a@x\'</span>, <span class="str">\'Ana\'</span>)
<span class="kw">ON CONFLICT</span> (email) <span class="kw">DO UPDATE SET</span> name = EXCLUDED.name;</div>` },
            { type: 'multiple-choice', prompt: 'Most dangerous mistake?',
              options: [{text:'UPDATE without WHERE — updates EVERY row', code:false},{text:'SELECT *', code:false},{text:'Missing JOIN', code:false},{text:'No index', code:false}],
              correct: 0, explanation: '<code>UPDATE users SET active = 1;</code> — without WHERE, updates ALL users. Same for DELETE.' },
            { type: 'true-false', statement: 'DELETE without WHERE removes every row in the table (effectively a TRUNCATE).', correct: true, explanation: 'Always wrap big DELETEs in a transaction and check the WHERE.' },
            { type: 'multiple-choice', prompt: 'Best way to delete millions of rows from a live table?',
              options: [{text:'One big DELETE', code:false},{text:'Batches (e.g., 10k at a time, in a loop)', code:false},{text:'Drop and recreate', code:false},{text:'It\'s impossible', code:false}],
              correct: 1, explanation: 'Batches avoid huge locks and replication lag. Often combined with a sleep.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Tables / DDL ============== */
    {
      id: 'sql-u9', name: 'Unit 9 · Tables & Constraints', description: 'Defining the schema',
      lessons: [
        {
          id: 'sql-u9-l1', name: 'CREATE TABLE & types', icon: '🏗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Schema definition', content: `<div class="code-block"><span class="kw">CREATE TABLE</span> users (
  id          <span class="ty">SERIAL</span> <span class="kw">PRIMARY KEY</span>,     <span class="com">-- auto-increment in Postgres</span>
  email       <span class="ty">VARCHAR</span>(<span class="num">255</span>) <span class="kw">UNIQUE NOT NULL</span>,
  name        <span class="ty">VARCHAR</span>(<span class="num">100</span>) <span class="kw">NOT NULL</span>,
  age         <span class="ty">INTEGER</span> <span class="kw">CHECK</span> (age &gt;= <span class="num">0</span>),
  role        <span class="ty">VARCHAR</span>(<span class="num">20</span>) <span class="kw">DEFAULT</span> <span class="str">\'user\'</span>,
  country_id  <span class="ty">INTEGER</span> <span class="kw">REFERENCES</span> countries(id),
  created_at  <span class="ty">TIMESTAMPTZ</span> <span class="kw">DEFAULT</span> <span class="fn">NOW</span>()
);

<span class="com">-- Add / remove columns</span>
<span class="kw">ALTER TABLE</span> users <span class="kw">ADD COLUMN</span> phone <span class="ty">VARCHAR</span>(<span class="num">20</span>);
<span class="kw">ALTER TABLE</span> users <span class="kw">DROP COLUMN</span> phone;

<span class="com">-- Drop the whole table (be VERY sure)</span>
<span class="kw">DROP TABLE</span> users;</div>` },
            { type: 'multiple-choice', prompt: 'Which constraint enforces "this column can\'t be NULL"?',
              options: [{text:'UNIQUE', code:true},{text:'NOT NULL', code:true},{text:'CHECK', code:true},{text:'DEFAULT', code:true}],
              correct: 1, explanation: 'NOT NULL on the column definition.' },
            { type: 'multiple-choice', prompt: 'A FOREIGN KEY ensures:',
              options: [{text:'Uniqueness', code:false},{text:'The value must exist in the referenced table', code:false},{text:'Faster joins', code:false},{text:'No NULLs', code:false}],
              correct: 1, explanation: 'Referential integrity — the linked row must exist.' },
            { type: 'true-false', statement: '<code>VARCHAR(255)</code> means "string of up to 255 characters."', correct: true, explanation: 'Max length. In Postgres, prefer plain <code>TEXT</code> if you don\'t need the limit.' },
            { type: 'match-pairs', prompt: 'Match constraint → purpose.', leftLabel: 'Constraint', rightLabel: 'Purpose',
              pairs: [{left:'PRIMARY KEY', right:'Unique + not null + identifier'},{left:'UNIQUE', right:'No duplicates'},{left:'NOT NULL', right:'Always have a value'},{left:'CHECK', right:'Custom condition (e.g., age &gt;= 0)'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Indexes ============== */
    {
      id: 'sql-u10', name: 'Unit 10 · Indexes & Performance', description: 'Make queries fast',
      lessons: [
        {
          id: 'sql-u10-l1', name: 'How indexes work', icon: '🚀', xp: 30,
          challenges: [
            { type: 'concept', title: 'B-trees behind the scenes', content: `<p>An <strong>index</strong> is a sorted data structure (usually a B-tree) that lets the DB find rows by a column value WITHOUT scanning the whole table.</p>
<div class="code-block"><span class="com">-- Create an index</span>
<span class="kw">CREATE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="com">-- Composite index — order matters!</span>
<span class="kw">CREATE INDEX</span> idx_users_country_age <span class="kw">ON</span> users(country, age);

<span class="com">-- Unique index — also enforces uniqueness</span>
<span class="kw">CREATE UNIQUE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="com">-- Inspect query plan</span>
<span class="kw">EXPLAIN ANALYZE</span> <span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> email = <span class="str">\'a@x\'</span>;
<span class="com">-- Look for "Index Scan" vs "Seq Scan"</span></div>
<p>Indexes speed up reads but slow down writes (each INSERT/UPDATE/DELETE must update the index too).</p>` },
            { type: 'multiple-choice', prompt: 'Which query benefits from an index on <code>email</code>?',
              options: [{text:'SELECT * FROM users WHERE email = "..."', code:true},{text:'SELECT * FROM users WHERE LOWER(email) = "..."', code:true},{text:'SELECT * FROM users (full scan)', code:true},{text:'Only the first', code:true}],
              correct: 3, explanation: 'Functions on the column defeat the index — unless you create a function-based index.' },
            { type: 'multiple-choice', prompt: 'A composite index <code>(a, b, c)</code> helps queries filtering on:',
              options: [{text:'Only a', code:false},{text:'a, OR (a,b), OR (a,b,c) — left-prefix rule', code:false},{text:'Only c', code:false},{text:'Any column', code:false}],
              correct: 1, explanation: 'Leftmost-prefix matching. <code>WHERE b = ?</code> alone won\'t use this index.' },
            { type: 'true-false', statement: 'Adding indexes is always good.', correct: false, explanation: 'Indexes cost storage + slow writes. Add only when needed; profile before and after.' },
            { type: 'multiple-choice', prompt: 'Inspect why a query is slow?',
              options: [{text:'SHOW QUERY', code:true},{text:'EXPLAIN ANALYZE', code:true},{text:'DEBUG SELECT', code:true},{text:'SQL_TRACE', code:true}],
              correct: 1, explanation: 'EXPLAIN gives the planner\'s plan; ANALYZE actually runs it and measures.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Normalization ============== */
    {
      id: 'sql-u11', name: 'Unit 11 · Normalization', description: 'Schema design done right',
      lessons: [
        {
          id: 'sql-u11-l1', name: '1NF, 2NF, 3NF, BCNF', icon: '📐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Reduce redundancy and anomalies', content: `<p>Normalization = breaking tables apart to avoid duplication and update anomalies.</p>
<div class="code-block"><span class="com">1NF</span>  Atomic values (no lists in a cell)
<span class="com">2NF</span>  1NF + every non-key column depends on the WHOLE primary key
       (avoid partial dependencies on composite PKs)
<span class="com">3NF</span>  2NF + no transitive dependencies (non-key cols depend only on the key)
<span class="com">BCNF</span> A stricter 3NF — every functional dependency X→Y has X as a super key</div>
<p>Higher forms = less redundancy, more tables, more joins. <strong>3NF is usually the sweet spot.</strong></p>` },
            { type: 'multiple-choice', prompt: 'A user table with column <code>phone_numbers TEXT</code> storing "1234567, 7654321" violates:',
              options: [{text:'1NF (non-atomic value)', code:false},{text:'2NF', code:false},{text:'3NF', code:false},{text:'No violation', code:false}],
              correct: 0, explanation: 'Lists inside cells break 1NF. Split into a related table.' },
            { type: 'multiple-choice', prompt: '<code>orders(order_id, customer_id, customer_email)</code> where customer_email is determined by customer_id violates:',
              options: [{text:'1NF', code:false},{text:'2NF', code:false},{text:'3NF (transitive dependency)', code:false},{text:'BCNF only', code:false}],
              correct: 2, explanation: 'customer_email depends on customer_id (a non-key) → transitive dep.' },
            { type: 'true-false', statement: 'Sometimes you intentionally denormalize for read performance (data warehouses, hot read paths).', correct: true, explanation: 'OLTP → normalized. OLAP / read-heavy → often denormalized.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Transactions ============== */
    {
      id: 'sql-u12', name: 'Unit 12 · Transactions & ACID', description: 'All-or-nothing operations',
      lessons: [
        {
          id: 'sql-u12-l1', name: 'BEGIN, COMMIT, ROLLBACK', icon: '🔄', xp: 25,
          challenges: [
            { type: 'concept', title: 'Atomic, Consistent, Isolated, Durable', content: `<div class="code-block"><span class="kw">BEGIN</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance - <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">1</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance + <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">2</span>;
<span class="kw">COMMIT</span>;        <span class="com">-- both apply together</span>

<span class="com">-- If something fails:</span>
<span class="kw">ROLLBACK</span>;      <span class="com">-- undo every change since BEGIN</span></div>
<p><strong>ACID</strong>: <strong>A</strong>tomic (all or nothing), <strong>C</strong>onsistent (constraints preserved), <strong>I</strong>solated (concurrent txns don\'t interfere), <strong>D</strong>urable (committed = survives crash).</p>
<p><strong>Isolation levels</strong> (weakest → strongest):<br/>Read Uncommitted → Read Committed → Repeatable Read → Serializable</p>` },
            { type: 'multiple-choice', prompt: 'What does ROLLBACK do?',
              options: [{text:'Saves changes', code:false},{text:'Reverts all changes since the BEGIN', code:false},{text:'Closes the connection', code:false},{text:'Deletes the row', code:false}],
              correct: 1, explanation: 'Discards the transaction\'s work.' },
            { type: 'multiple-choice', prompt: 'Default isolation level in most SQL DBs?',
              options: [{text:'Read Uncommitted', code:false},{text:'Read Committed', code:false},{text:'Repeatable Read', code:false},{text:'Serializable', code:false}],
              correct: 1, explanation: 'Postgres, Oracle, SQL Server default to Read Committed. MySQL InnoDB defaults to Repeatable Read.' },
            { type: 'true-false', statement: 'Serializable isolation prevents all anomalies but can hurt concurrency.', correct: true, explanation: 'Strictest = least parallelism. Pick the level that fits your correctness needs.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Window functions ============== */
    {
      id: 'sql-u13', name: 'Unit 13 · Window Functions', description: 'Analytics without collapsing rows',
      lessons: [
        {
          id: 'sql-u13-l1', name: 'OVER, PARTITION BY, RANK', icon: '🪟', xp: 30,
          challenges: [
            { type: 'concept', title: 'Aggregates that keep all rows', content: `<div class="code-block"><span class="com">-- Add a per-row aggregate without GROUP BY</span>
<span class="kw">SELECT</span> name, salary,
  <span class="fn">AVG</span>(salary) <span class="kw">OVER</span> ()         <span class="kw">AS</span> overall_avg,
  <span class="fn">AVG</span>(salary) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept) <span class="kw">AS</span> dept_avg
<span class="kw">FROM</span> employees;

<span class="com">-- Rank within a partition</span>
<span class="kw">SELECT</span> name, dept, salary,
  <span class="fn">RANK</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept <span class="kw">ORDER BY</span> salary <span class="kw">DESC</span>) <span class="kw">AS</span> rk
<span class="kw">FROM</span> employees;

<span class="com">-- Running total</span>
<span class="kw">SELECT</span> date, amount,
  <span class="fn">SUM</span>(amount) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> running_total
<span class="kw">FROM</span> transactions;

<span class="com">-- Previous / next row values</span>
<span class="kw">SELECT</span> date, price,
  <span class="fn">LAG</span>(price) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> prev_price,
  price - <span class="fn">LAG</span>(price) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> change
<span class="kw">FROM</span> daily_prices;</div>` },
            { type: 'multiple-choice', prompt: 'How is a window function different from GROUP BY?',
              options: [{text:'Same thing', code:false},{text:'Window functions keep all rows AND add an aggregated/ranked column', code:false},{text:'Window is faster', code:false},{text:'GROUP BY needs OVER', code:false}],
              correct: 1, explanation: 'GROUP BY collapses rows; OVER computes per-row.' },
            { type: 'multiple-choice', prompt: 'RANK() vs DENSE_RANK() vs ROW_NUMBER():',
              options: [{text:'All same', code:false},{text:'RANK has gaps on ties; DENSE_RANK doesn\'t; ROW_NUMBER unique sequential', code:false},{text:'Only ROW_NUMBER exists', code:false},{text:'Faster vs slower', code:false}],
              correct: 1, explanation: 'For ties: RANK skips, DENSE_RANK doesn\'t skip, ROW_NUMBER assigns arbitrary.' },
            { type: 'true-false', statement: 'Window functions are essential for "top N per group" queries.', correct: true, explanation: 'Standard pattern: <code>ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric)</code>, filter rn ≤ N.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — NoSQL ============== */
    {
      id: 'sql-u14', name: 'Unit 14 · NoSQL Introduction', description: 'When SQL isn\'t the right tool',
      lessons: [
        {
          id: 'sql-u14-l1', name: 'Types of NoSQL', icon: '🧩', xp: 20,
          challenges: [
            { type: 'concept', title: 'Four big families', content: `<div class="code-block"><span class="com">1. Document</span>     MongoDB, CouchDB
   - JSON-like documents in collections
   - Flexible schema
   - Best for: content, profiles, catalogs

<span class="com">2. Key-Value</span>    Redis, DynamoDB
   - Simple GET/SET by key, very fast
   - Best for: cache, sessions, leaderboards

<span class="com">3. Wide-column</span>  Cassandra, HBase
   - Rows + dynamic columns at huge scale
   - Best for: time series, logs, IoT

<span class="com">4. Graph</span>        Neo4j, ArangoDB
   - Nodes + edges + properties
   - Best for: social, recommendations, fraud</div>` },
            { type: 'multiple-choice', prompt: 'Best DB for: "store the user\'s shopping cart, retrieve by user_id, expire after 1 hour"?',
              options: [{text:'PostgreSQL', code:false},{text:'Redis (key-value with TTL)', code:false},{text:'Cassandra', code:false},{text:'Neo4j', code:false}],
              correct: 1, explanation: 'Key-value + TTL = textbook Redis use case.' },
            { type: 'multiple-choice', prompt: 'Best for "find friends of friends of friends"?',
              options: [{text:'SQL with deep joins', code:false},{text:'Graph database (Neo4j)', code:false},{text:'Key-value', code:false},{text:'Wide-column', code:false}],
              correct: 1, explanation: 'Traversal queries are graph DBs\' bread and butter.' },
            { type: 'true-false', statement: 'NoSQL means "no SQL ever". SQL is dead.', correct: false, explanation: 'NoSQL = "not only SQL". Both coexist; pick the right tool. Many "NoSQL" DBs added SQL-ish languages.' },
            { type: 'multiple-choice', prompt: 'CAP theorem says you can have at most two of:',
              options: [{text:'Consistency · Availability · Partition tolerance', code:false},{text:'Caching · ACID · Performance', code:false},{text:'Speed · Scale · Cost', code:false}],
              correct: 0, explanation: 'Under partition: pick C or A. Real-world tradeoffs.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — DB Design ============== */
    {
      id: 'sql-u15', name: 'Unit 15 · Database Design Process', description: 'From idea to schema',
      lessons: [
        {
          id: 'sql-u15-l1', name: 'A pragmatic workflow', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'Step by step', content: `<div class="code-block"><span class="com">1. List entities</span>            nouns from requirements
<span class="com">2. Identify attributes</span>       what does each need?
<span class="com">3. Determine relationships</span>   1:1, 1:N, N:M
<span class="com">4. Pick primary keys</span>        UUID vs auto-increment
<span class="com">5. Normalize to 3NF</span>         remove redundancy
<span class="com">6. Add indexes</span>              based on expected query patterns
<span class="com">7. Constraints</span>              NOT NULL, FK, CHECK, UNIQUE
<span class="com">8. Plan for scale</span>           partitioning? read replicas?
<span class="com">9. Migrations strategy</span>      who can change schema in prod?
<span class="com">10. Backups + restore drill</span> test recovery before you need it</div>` },
            { type: 'multiple-choice', prompt: 'Which is the BEST primary key strategy for public-facing IDs?',
              options: [{text:'Auto-increment INT (exposes growth/sequence)', code:false},{text:'UUID (no info leak, can be generated client-side)', code:false},{text:'Email', code:false},{text:'Name', code:false}],
              correct: 1, explanation: 'Auto-increment leaks "how big we are". UUIDs are opaque. Use both — UUIDs for external, internal serial for joins.' },
            { type: 'multiple-choice', prompt: 'You expect heavy read traffic on /orders/by-user. Helpful index?',
              options: [{text:'CREATE INDEX ON orders(user_id)', code:true},{text:'CREATE INDEX ON orders(total)', code:true},{text:'CREATE INDEX ON orders(id)', code:true},{text:'No index needed', code:true}],
              correct: 0, explanation: 'Index the column you filter on.' },
            { type: 'true-false', statement: 'Database design rewards thinking about query patterns up-front, not just the data.', correct: true, explanation: 'Indexes, partitioning, and even table shape follow from how you\'ll query the data.' },
            { type: 'reorder-code', prompt: 'Reorder the typical schema design steps.',
              lines: ['List entities','Identify attributes','Determine relationships','Pick primary keys','Normalize','Add indexes for query patterns'],
              correctOrder: [0, 1, 2, 3, 4, 5] }
          ]
        }
      ]
    }

  ]
});

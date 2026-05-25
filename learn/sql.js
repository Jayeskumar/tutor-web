LEARN('sql', {
  intro: 'Master SQL — queries, joins, indexes, normalization, transactions, and database design.',
  chapters: [

    /* ============== CH 1 ============== */
    { id: 'sql-c1', title: 'Databases & SQL', icon: '🗄️', sections: [
      { type: 'heading', text: 'Why databases?', level: 1 },
      { type: 'para', html: 'A <strong>database</strong> is software for structured, persistent, queryable storage. <strong>SQL</strong> (Structured Query Language) is the language we use to talk to most of them.' },

      { type: 'image', alt: 'db landscape', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">The database landscape</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="270" height="80" rx="10" fill="#1976d2"/>
    <text x="155" y="80" text-anchor="middle" fill="white">Relational (SQL)</text>
    <text x="155" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">PostgreSQL · MySQL</text>
    <text x="155" y="115" text-anchor="middle" fill="white" font-size="11" font-weight="normal">SQLite · SQL Server · Oracle</text>

    <rect x="20" y="140" width="120" height="80" rx="10" fill="#00897b"/>
    <text x="80" y="170" text-anchor="middle" fill="white">Document</text>
    <text x="80" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">MongoDB</text>

    <rect x="150" y="140" width="140" height="80" rx="10" fill="#ec407a"/>
    <text x="220" y="170" text-anchor="middle" fill="white">Key-Value</text>
    <text x="220" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Redis · DynamoDB</text>

    <rect x="300" y="50" width="140" height="80" rx="10" fill="#7c4dff"/>
    <text x="370" y="80" text-anchor="middle" fill="white">Wide-column</text>
    <text x="370" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Cassandra · HBase</text>

    <rect x="300" y="140" width="140" height="80" rx="10" fill="#ff9600"/>
    <text x="370" y="170" text-anchor="middle" fill="white">Search</text>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Elasticsearch</text>

    <rect x="450" y="50" width="130" height="170" rx="10" fill="#58cc02"/>
    <text x="515" y="80" text-anchor="middle" fill="white">Graph</text>
    <text x="515" y="100" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Neo4j</text>
    <text x="515" y="130" text-anchor="middle" fill="white" font-size="10" font-weight="normal">nodes + edges</text>
    <text x="515" y="160" text-anchor="middle" fill="white" font-size="10" font-weight="normal">relationships</text>
  </g>
</svg>` },

      { type: 'heading', text: 'The relational model', level: 2 },
      { type: 'code', lang: 'text', code:
`users table:
+----+----------+----------------+-----+
| id | name     | email          | age |
+----+----------+----------------+-----+
| 1  | Ana      | ana@x.com      | 28  |   ← a row (also "tuple" or "record")
| 2  | Bob      | bob@x.com      | 33  |
| 3  | Carlos   | carlos@x.com   | 25  |
+----+----------+----------------+-----+
  ↑   ↑                                   columns (typed attributes)
  └─ primary key (unique row identifier)` },

      { type: 'callout', kind: 'info', html: 'SQL is 50+ years old and still dominant. The "tables + relationships" model fits most data — and the language is incredibly powerful once you grasp it.' },

      { type: 'heading', text: 'Picking the right database', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Structured, transactional data (orders, accounts)</strong> → Postgres / MySQL',
        '<strong>Flexible documents, fast iteration</strong> → MongoDB',
        '<strong>Cache or session store</strong> → Redis',
        '<strong>Huge logs / time series</strong> → Cassandra or specialized TSDB',
        '<strong>Search / text</strong> → Elasticsearch',
        '<strong>Highly-connected data (social, recs)</strong> → Neo4j',
        '<strong>Analytics / OLAP</strong> → BigQuery, Snowflake, ClickHouse'
      ]}
    ]},

    /* ============== CH 2 — SELECT ============== */
    { id: 'sql-c2', title: 'SELECT — Reading Data', icon: '🔍', sections: [
      { type: 'heading', text: 'The most-used SQL statement', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Specific columns (preferred)</span>
<span class="kw">SELECT</span> name, email <span class="kw">FROM</span> users;

<span class="com">-- All columns (lazy / risky — avoid in app code)</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users;

<span class="com">-- Distinct values only</span>
<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> country <span class="kw">FROM</span> users;

<span class="com">-- Aliases (AS is optional)</span>
<span class="kw">SELECT</span>
  name <span class="kw">AS</span> full_name,
  price * <span class="num">1.1</span> <span class="kw">AS</span> price_with_tax,
  <span class="fn">UPPER</span>(name) <span class="kw">AS</span> name_upper
<span class="kw">FROM</span> products;` },

      { type: 'heading', text: 'The full SELECT shape', level: 2 },
      { type: 'image', alt: 'select clauses', svg:
`<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="280" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">SELECT clause order vs execution order</text>
  <g font-family="JetBrains Mono" font-size="13">
    <text x="60" y="55" fill="#666">WRITTEN AS:</text>
    <text x="60" y="80" fill="#7c4dff" font-weight="bold">SELECT  </text><text x="180" y="80">cols</text>
    <text x="60" y="100" fill="#7c4dff" font-weight="bold">FROM    </text><text x="180" y="100">table</text>
    <text x="60" y="120" fill="#7c4dff" font-weight="bold">JOIN    </text><text x="180" y="120">other</text>
    <text x="60" y="140" fill="#7c4dff" font-weight="bold">WHERE   </text><text x="180" y="140">row filter</text>
    <text x="60" y="160" fill="#7c4dff" font-weight="bold">GROUP BY</text><text x="180" y="160">cols</text>
    <text x="60" y="180" fill="#7c4dff" font-weight="bold">HAVING  </text><text x="180" y="180">group filter</text>
    <text x="60" y="200" fill="#7c4dff" font-weight="bold">ORDER BY</text><text x="180" y="200">cols</text>
    <text x="60" y="220" fill="#7c4dff" font-weight="bold">LIMIT   </text><text x="180" y="220">n</text>

    <text x="340" y="55" fill="#666">RUNS AS:</text>
    <text x="340" y="80" fill="#58cc02" font-weight="bold">1. FROM + JOINs</text>
    <text x="340" y="100" fill="#58cc02" font-weight="bold">2. WHERE</text>
    <text x="340" y="120" fill="#58cc02" font-weight="bold">3. GROUP BY</text>
    <text x="340" y="140" fill="#58cc02" font-weight="bold">4. HAVING</text>
    <text x="340" y="160" fill="#58cc02" font-weight="bold">5. SELECT (cols)</text>
    <text x="340" y="180" fill="#58cc02" font-weight="bold">6. DISTINCT</text>
    <text x="340" y="200" fill="#58cc02" font-weight="bold">7. ORDER BY</text>
    <text x="340" y="220" fill="#58cc02" font-weight="bold">8. LIMIT / OFFSET</text>

    <text x="300" y="260" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Knowing this explains: why SELECT aliases can\'t be used in WHERE but can in ORDER BY.</text>
  </g>
</svg>` },

      { type: 'callout', kind: 'tip', html: 'In application code, <strong>always list explicit columns</strong>. Wildcards break when someone adds a new column.' }
    ]},

    /* ============== CH 3 — WHERE ============== */
    { id: 'sql-c3', title: 'WHERE — Filtering', icon: '🎯', sections: [
      { type: 'heading', text: 'The toolkit for picking rows', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Comparison</span>
<span class="kw">WHERE</span> age &gt;= <span class="num">18</span>
<span class="kw">WHERE</span> status = <span class="str">\'active\'</span>
<span class="kw">WHERE</span> name &lt;&gt; <span class="str">\'admin\'</span>            <span class="com">-- not equal</span>

<span class="com">-- Combine</span>
<span class="kw">WHERE</span> age &gt;= <span class="num">18</span> <span class="kw">AND</span> status = <span class="str">\'active\'</span>
<span class="kw">WHERE</span> country = <span class="str">\'US\'</span> <span class="kw">OR</span> country = <span class="str">\'CA\'</span>
<span class="kw">WHERE</span> <span class="kw">NOT</span> (age &lt; <span class="num">18</span>)

<span class="com">-- IN / BETWEEN / LIKE</span>
<span class="kw">WHERE</span> country <span class="kw">IN</span> (<span class="str">\'US\'</span>, <span class="str">\'CA\'</span>, <span class="str">\'MX\'</span>)
<span class="kw">WHERE</span> age <span class="kw">BETWEEN</span> <span class="num">18</span> <span class="kw">AND</span> <span class="num">65</span>      <span class="com">-- inclusive</span>
<span class="kw">WHERE</span> name <span class="kw">LIKE</span> <span class="str">\'A%\'</span>            <span class="com">-- starts with A</span>
<span class="kw">WHERE</span> email <span class="kw">LIKE</span> <span class="str">\'%@gmail.com\'</span>  <span class="com">-- ends with</span>
<span class="kw">WHERE</span> name <span class="kw">ILIKE</span> <span class="str">\'%bob%\'</span>          <span class="com">-- case-insensitive (Postgres)</span>

<span class="com">-- NULL handling — NOT a value!</span>
<span class="kw">WHERE</span> deleted_at <span class="kw">IS NULL</span>
<span class="kw">WHERE</span> deleted_at <span class="kw">IS NOT NULL</span>` },

      { type: 'callout', kind: 'danger', html: '<strong>NULL ≠ NULL.</strong> <code>WHERE x = NULL</code> always returns no rows. Use <code>IS NULL</code> / <code>IS NOT NULL</code>.' },

      { type: 'heading', text: 'LIKE patterns', level: 2 },
      { type: 'code', lang: 'text', code:
`%       any sequence of chars (including empty)
_       exactly one char

LIKE \'A%\'       → starts with A
LIKE \'%@gmail.com\' → ends with @gmail.com
LIKE \'%bug%\'    → contains "bug"
LIKE \'_at\'      → "cat", "bat", "rat" (3-letter ending in "at")` },
      { type: 'callout', kind: 'tip', html: 'For complex matching, modern Postgres has <code>regexp_like</code> and <code>~</code> (POSIX regex). Also: full-text search with <code>tsvector</code>.' }
    ]},

    /* ============== CH 4 — Ordering ============== */
    { id: 'sql-c4', title: 'ORDER BY & LIMIT', icon: '📑', sections: [
      { type: 'heading', text: 'Sort and slice the result', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> price;          <span class="com">-- ASC default</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> price <span class="kw">DESC</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> category, price <span class="kw">DESC</span>;
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> created_at <span class="kw">DESC</span> <span class="kw">NULLS LAST</span>;

<span class="com">-- Top 10</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products <span class="kw">ORDER BY</span> sales <span class="kw">DESC</span> <span class="kw">LIMIT</span> <span class="num">10</span>;

<span class="com">-- Pagination — page 5, 20 per page</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> products
<span class="kw">ORDER BY</span> id
<span class="kw">LIMIT</span> <span class="num">20</span> <span class="kw">OFFSET</span> <span class="num">80</span>;     <span class="com">-- skip 80, take 20</span>` },

      { type: 'callout', kind: 'warn', html: '<strong>OFFSET gets slow on big tables.</strong> The DB still has to scan & discard rows up to the offset. For large pagination, use cursor-based (e.g., <code>WHERE id > last_seen_id ORDER BY id LIMIT 20</code>).' }
    ]},

    /* ============== CH 5 — Aggregations ============== */
    { id: 'sql-c5', title: 'Aggregations & GROUP BY', icon: '📊', sections: [
      { type: 'heading', text: 'Summarize many rows into one', level: 1 },

      { type: 'heading', text: 'Aggregate functions', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">SELECT</span> <span class="fn">COUNT</span>(*) <span class="kw">FROM</span> users;                <span class="com">-- row count</span>
<span class="kw">SELECT</span> <span class="fn">COUNT</span>(<span class="kw">DISTINCT</span> country) <span class="kw">FROM</span> users;
<span class="kw">SELECT</span> <span class="fn">AVG</span>(price), <span class="fn">MIN</span>(price), <span class="fn">MAX</span>(price), <span class="fn">SUM</span>(quantity)
<span class="kw">FROM</span> orders;
<span class="kw">SELECT</span> <span class="fn">STDDEV</span>(score), <span class="fn">PERCENTILE_CONT</span>(<span class="num">0.5</span>) <span class="kw">WITHIN GROUP</span> (<span class="kw">ORDER BY</span> score)
<span class="kw">FROM</span> exams;        <span class="com">-- stddev, median</span>` },

      { type: 'heading', text: 'GROUP BY — split into buckets', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Products per category</span>
<span class="kw">SELECT</span> category, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> n
<span class="kw">FROM</span> products
<span class="kw">GROUP BY</span> category;

<span class="com">-- Average order value per country</span>
<span class="kw">SELECT</span> u.country, <span class="fn">AVG</span>(o.total) <span class="kw">AS</span> avg_order
<span class="kw">FROM</span> orders o
<span class="kw">JOIN</span> users u <span class="kw">ON</span> u.id = o.user_id
<span class="kw">GROUP BY</span> u.country
<span class="kw">ORDER BY</span> avg_order <span class="kw">DESC</span>;

<span class="com">-- HAVING = filter on the GROUP, not the rows</span>
<span class="kw">SELECT</span> category, <span class="fn">COUNT</span>(*) <span class="kw">AS</span> n
<span class="kw">FROM</span> products
<span class="kw">GROUP BY</span> category
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(*) &gt; <span class="num">10</span>;            <span class="com">-- only crowded categories</span>` },

      { type: 'image', alt: 'where vs having', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">WHERE vs HAVING</text>
  <g font-family="Nunito">
    <rect x="20" y="50" width="80" height="40" rx="8" fill="#7c4dff"/><text x="60" y="74" text-anchor="middle" fill="white" font-weight="bold">rows</text>
    <text x="115" y="74" font-size="18">→</text>
    <rect x="140" y="50" width="80" height="40" rx="8" fill="#1cb0f6"/><text x="180" y="74" text-anchor="middle" fill="white" font-weight="bold">WHERE</text>
    <text x="235" y="74" font-size="18">→</text>
    <rect x="260" y="50" width="100" height="40" rx="8" fill="#58cc02"/><text x="310" y="74" text-anchor="middle" fill="white" font-weight="bold">GROUP BY</text>
    <text x="375" y="74" font-size="18">→</text>
    <rect x="400" y="50" width="80" height="40" rx="8" fill="#ff9600"/><text x="440" y="74" text-anchor="middle" fill="white" font-weight="bold">HAVING</text>
    <text x="495" y="74" font-size="18">→</text>
    <rect x="520" y="50" width="60" height="40" rx="8" fill="#58cc02"/><text x="550" y="74" text-anchor="middle" fill="white" font-weight="bold">out</text>

    <text x="180" y="115" text-anchor="middle" font-size="11" fill="#666">filter individual rows</text>
    <text x="440" y="115" text-anchor="middle" font-size="11" fill="#666">filter groups (uses aggregates)</text>

    <text x="300" y="170" text-anchor="middle" font-size="13" fill="#666" font-weight="bold">"WHERE before grouping, HAVING after."</text>
  </g>
</svg>` }
    ]},

    /* ============== CH 6 — JOINs ============== */
    { id: 'sql-c6', title: 'JOINs — Combining Tables', icon: '🔗', sections: [
      { type: 'heading', text: 'Where SQL gets relational', level: 1 },

      { type: 'image', alt: 'joins venn', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">JOIN types — Venn view</text>
  <g font-family="Nunito">
    <text x="80" y="55" text-anchor="middle" font-weight="bold" fill="#1976d2">INNER</text>
    <circle cx="65" cy="100" r="30" fill="none" stroke="#7c4dff" stroke-width="2"/>
    <circle cx="95" cy="100" r="30" fill="none" stroke="#1cb0f6" stroke-width="2"/>
    <ellipse cx="80" cy="100" rx="15" ry="22" fill="#58cc02" opacity="0.5"/>
    <text x="80" y="155" text-anchor="middle" font-size="10" fill="#666">match in BOTH</text>

    <text x="230" y="55" text-anchor="middle" font-weight="bold" fill="#1976d2">LEFT</text>
    <circle cx="215" cy="100" r="30" fill="#58cc02" opacity="0.5" stroke="#7c4dff" stroke-width="2"/>
    <circle cx="245" cy="100" r="30" fill="none" stroke="#1cb0f6" stroke-width="2"/>
    <text x="230" y="155" text-anchor="middle" font-size="10" fill="#666">ALL of left, match right</text>

    <text x="380" y="55" text-anchor="middle" font-weight="bold" fill="#1976d2">RIGHT</text>
    <circle cx="365" cy="100" r="30" fill="none" stroke="#7c4dff" stroke-width="2"/>
    <circle cx="395" cy="100" r="30" fill="#58cc02" opacity="0.5" stroke="#1cb0f6" stroke-width="2"/>
    <text x="380" y="155" text-anchor="middle" font-size="10" fill="#666">ALL of right, match left</text>

    <text x="525" y="55" text-anchor="middle" font-weight="bold" fill="#1976d2">FULL OUTER</text>
    <circle cx="510" cy="100" r="30" fill="#58cc02" opacity="0.5" stroke="#7c4dff" stroke-width="2"/>
    <circle cx="540" cy="100" r="30" fill="#58cc02" opacity="0.5" stroke="#1cb0f6" stroke-width="2"/>
    <text x="525" y="155" text-anchor="middle" font-size="10" fill="#666">EVERYTHING</text>

    <text x="300" y="200" text-anchor="middle" font-size="12" fill="#666" font-weight="bold">Match key (ON ...) decides which rows pair up.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Examples', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- INNER (default) — only users with at least one order</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;

<span class="com">-- LEFT — every user, with their orders (or NULL)</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id;

<span class="com">-- Users with NO orders</span>
<span class="kw">SELECT</span> u.name
<span class="kw">FROM</span> users u
<span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> o.user_id = u.id
<span class="kw">WHERE</span> o.id <span class="kw">IS NULL</span>;

<span class="com">-- Self-join — find employees and their managers</span>
<span class="kw">SELECT</span> e.name <span class="kw">AS</span> employee, m.name <span class="kw">AS</span> manager
<span class="kw">FROM</span> employees e
<span class="kw">LEFT JOIN</span> employees m <span class="kw">ON</span> m.id = e.manager_id;` },

      { type: 'callout', kind: 'warn', html: '<strong>CROSS JOIN</strong> = cartesian product. <code>A(m)</code> × <code>B(n)</code> = <code>m·n</code> rows. Rarely useful; mostly a footgun if you forget the <code>ON</code> clause.' }
    ]},

    /* ============== CH 7 — Subqueries / CTEs ============== */
    { id: 'sql-c7', title: 'Subqueries & CTEs', icon: '🪜', sections: [
      { type: 'heading', text: 'Composing queries', level: 1 },

      { type: 'heading', text: 'Subqueries — query inside a query', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- In WHERE — "users who have any order"</span>
<span class="kw">SELECT</span> name <span class="kw">FROM</span> users
<span class="kw">WHERE</span> id <span class="kw">IN</span> (<span class="kw">SELECT</span> <span class="kw">DISTINCT</span> user_id <span class="kw">FROM</span> orders);

<span class="com">-- Or with EXISTS (often clearer + faster)</span>
<span class="kw">SELECT</span> name <span class="kw">FROM</span> users u
<span class="kw">WHERE EXISTS</span> (<span class="kw">SELECT</span> <span class="num">1</span> <span class="kw">FROM</span> orders <span class="kw">WHERE</span> user_id = u.id);

<span class="com">-- Derived table in FROM</span>
<span class="kw">SELECT</span> dept, avg_salary
<span class="kw">FROM</span> (
  <span class="kw">SELECT</span> dept, <span class="fn">AVG</span>(salary) <span class="kw">AS</span> avg_salary
  <span class="kw">FROM</span> employees
  <span class="kw">GROUP BY</span> dept
) d
<span class="kw">WHERE</span> avg_salary &gt; <span class="num">50000</span>;

<span class="com">-- Correlated subquery (references outer row)</span>
<span class="kw">SELECT</span> name, salary
<span class="kw">FROM</span> employees e
<span class="kw">WHERE</span> salary &gt; (
  <span class="kw">SELECT</span> <span class="fn">AVG</span>(salary) <span class="kw">FROM</span> employees
  <span class="kw">WHERE</span> dept = e.dept           <span class="com">-- per-row reference</span>
);</div>` },

      { type: 'heading', text: 'CTEs (WITH clauses) — much more readable', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">WITH</span> high_spenders <span class="kw">AS</span> (
  <span class="kw">SELECT</span> user_id, <span class="fn">SUM</span>(total) <span class="kw">AS</span> total_spent
  <span class="kw">FROM</span> orders
  <span class="kw">GROUP BY</span> user_id
  <span class="kw">HAVING</span> <span class="fn">SUM</span>(total) &gt; <span class="num">1000</span>
)
<span class="kw">SELECT</span> u.name, hs.total_spent
<span class="kw">FROM</span> users u
<span class="kw">JOIN</span> high_spenders hs <span class="kw">ON</span> hs.user_id = u.id
<span class="kw">ORDER BY</span> hs.total_spent <span class="kw">DESC</span>;

<span class="com">-- Multiple CTEs, building on each other</span>
<span class="kw">WITH</span>
  active_users <span class="kw">AS</span> (<span class="kw">SELECT</span> id, name <span class="kw">FROM</span> users <span class="kw">WHERE</span> status = <span class="str">\'active\'</span>),
  recent_orders <span class="kw">AS</span> (<span class="kw">SELECT</span> user_id, total <span class="kw">FROM</span> orders <span class="kw">WHERE</span> created_at &gt; <span class="str">\'2024-01-01\'</span>)
<span class="kw">SELECT</span> au.name, <span class="fn">SUM</span>(ro.total) <span class="kw">AS</span> revenue
<span class="kw">FROM</span> active_users au
<span class="kw">JOIN</span> recent_orders ro <span class="kw">ON</span> ro.user_id = au.id
<span class="kw">GROUP BY</span> au.id, au.name;` },

      { type: 'heading', text: 'Recursive CTEs', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Find every manager up the chain for employee 42</span>
<span class="kw">WITH RECURSIVE</span> chain <span class="kw">AS</span> (
  <span class="kw">SELECT</span> id, name, manager_id, <span class="num">0</span> <span class="kw">AS</span> level
  <span class="kw">FROM</span> employees
  <span class="kw">WHERE</span> id = <span class="num">42</span>                  <span class="com">-- base case</span>
  <span class="kw">UNION ALL</span>
  <span class="kw">SELECT</span> e.id, e.name, e.manager_id, c.level + <span class="num">1</span>
  <span class="kw">FROM</span> employees e
  <span class="kw">JOIN</span> chain c <span class="kw">ON</span> c.manager_id = e.id   <span class="com">-- recurse up</span>
)
<span class="kw">SELECT</span> * <span class="kw">FROM</span> chain;` },
      { type: 'callout', kind: 'tip', html: 'For trees/graphs (org charts, threaded comments, file trees) — <strong>recursive CTEs</strong> are the SQL way.' }
    ]},

    /* ============== CH 8 — DML ============== */
    { id: 'sql-c8', title: 'INSERT · UPDATE · DELETE', icon: '✏️', sections: [
      { type: 'heading', text: 'Changing the data', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Single row</span>
<span class="kw">INSERT INTO</span> users (name, email, age)
<span class="kw">VALUES</span> (<span class="str">\'Ana\'</span>, <span class="str">\'ana@x.com\'</span>, <span class="num">28</span>)
<span class="kw">RETURNING</span> id;                  <span class="com">-- Postgres: get the new ID</span>

<span class="com">-- Multiple rows</span>
<span class="kw">INSERT INTO</span> users (name, email) <span class="kw">VALUES</span>
  (<span class="str">\'Bob\'</span>, <span class="str">\'b@x.com\'</span>),
  (<span class="str">\'Cara\'</span>, <span class="str">\'c@x.com\'</span>);

<span class="com">-- INSERT from SELECT — copy/transform rows</span>
<span class="kw">INSERT INTO</span> archive_users
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> last_seen &lt; <span class="str">\'2020-01-01\'</span>;

<span class="com">-- UPSERT (Postgres)</span>
<span class="kw">INSERT INTO</span> users (email, name)
<span class="kw">VALUES</span> (<span class="str">\'a@x.com\'</span>, <span class="str">\'Ana\'</span>)
<span class="kw">ON CONFLICT</span> (email) <span class="kw">DO UPDATE</span>
  <span class="kw">SET</span> name = <span class="ty">EXCLUDED</span>.name;       <span class="com">-- update if email exists</span></div>` },

      { type: 'code', lang: 'sql', code:
`<span class="com">-- UPDATE — always with WHERE!</span>
<span class="kw">UPDATE</span> users
<span class="kw">SET</span> last_login = <span class="fn">NOW</span>(),
    login_count = login_count + <span class="num">1</span>
<span class="kw">WHERE</span> id = <span class="num">42</span>;

<span class="com">-- UPDATE with JOIN (Postgres)</span>
<span class="kw">UPDATE</span> orders o
<span class="kw">SET</span> tier = <span class="str">\'gold\'</span>
<span class="kw">FROM</span> users u
<span class="kw">WHERE</span> o.user_id = u.id <span class="kw">AND</span> u.lifetime_spend &gt; <span class="num">5000</span>;

<span class="com">-- DELETE — always with WHERE!</span>
<span class="kw">DELETE FROM</span> sessions
<span class="kw">WHERE</span> expires_at &lt; <span class="fn">NOW</span>();

<span class="com">-- Soft delete pattern (preferred for audit trails)</span>
<span class="kw">UPDATE</span> users <span class="kw">SET</span> deleted_at = <span class="fn">NOW</span>() <span class="kw">WHERE</span> id = <span class="num">42</span>;
<span class="com">-- Then add &quot;WHERE deleted_at IS NULL&quot; to your reads</span>` },

      { type: 'callout', kind: 'danger', html: '<strong>An UPDATE or DELETE without WHERE affects EVERY row.</strong> Always run inside a transaction so you can ROLLBACK, or write the SELECT version first to verify the rows.' }
    ]},

    /* ============== CH 9 — Indexes ============== */
    { id: 'sql-c9', title: 'Indexes & Performance', icon: '🚀', sections: [
      { type: 'heading', text: 'Make queries fast', level: 1 },

      { type: 'image', alt: 'index lookup', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">With vs Without an index</text>
  <g font-family="Nunito" font-weight="bold">
    <text x="150" y="55" text-anchor="middle" fill="#ff4b4b">Without index</text>
    <rect x="50" y="65" width="200" height="100" rx="8" fill="#ff4b4b" opacity="0.2" stroke="#ff4b4b" stroke-width="2"/>
    <text x="150" y="100" text-anchor="middle" font-family="JetBrains Mono" font-size="11">SELECT * FROM users</text>
    <text x="150" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="11">WHERE email = ?</text>
    <text x="150" y="145" text-anchor="middle" font-size="11" font-weight="normal">→ FULL TABLE SCAN</text>
    <text x="150" y="160" text-anchor="middle" font-size="11" font-weight="normal">10M rows = slow</text>

    <text x="450" y="55" text-anchor="middle" fill="#58cc02">With index</text>
    <rect x="350" y="65" width="200" height="100" rx="8" fill="#58cc02" opacity="0.2" stroke="#58cc02" stroke-width="2"/>
    <text x="450" y="100" text-anchor="middle" font-family="JetBrains Mono" font-size="11">CREATE INDEX</text>
    <text x="450" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="11">ON users(email)</text>
    <text x="450" y="145" text-anchor="middle" font-size="11" font-weight="normal">→ INDEX SCAN (B-tree)</text>
    <text x="450" y="160" text-anchor="middle" font-size="11" font-weight="normal">O(log n) — milliseconds</text>

    <text x="300" y="200" text-anchor="middle" font-size="11" fill="#666" font-weight="normal">Indexes trade write speed and disk for read speed.</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Creating and using indexes', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Single-column index</span>
<span class="kw">CREATE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="com">-- Unique index (enforces uniqueness too)</span>
<span class="kw">CREATE UNIQUE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="com">-- Composite index — column order matters</span>
<span class="kw">CREATE INDEX</span> idx_orders_user_date <span class="kw">ON</span> orders(user_id, created_at);
<span class="com">-- This index helps:</span>
<span class="com">--   WHERE user_id = ?</span>
<span class="com">--   WHERE user_id = ? AND created_at &gt; ?</span>
<span class="com">-- But NOT:  WHERE created_at &gt; ?   (no leading column)</span>

<span class="com">-- Partial index — index only some rows</span>
<span class="kw">CREATE INDEX</span> idx_active_users <span class="kw">ON</span> users(last_seen)
<span class="kw">WHERE</span> status = <span class="str">\'active\'</span>;

<span class="com">-- Function/expression index</span>
<span class="kw">CREATE INDEX</span> idx_users_email_lower <span class="kw">ON</span> users(<span class="fn">LOWER</span>(email));

<span class="com">-- Drop one</span>
<span class="kw">DROP INDEX</span> idx_users_email;` },

      { type: 'heading', text: 'EXPLAIN — see what the planner is doing', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">EXPLAIN ANALYZE</span>
<span class="kw">SELECT</span> * <span class="kw">FROM</span> users <span class="kw">WHERE</span> email = <span class="str">\'ana@x.com\'</span>;

<span class="com">-- Look for:</span>
<span class="com">--   "Index Scan using idx_users_email"  ← good</span>
<span class="com">--   "Seq Scan on users"                ← full scan — usually bad on big tables</span>
<span class="com">--   "Bitmap Heap Scan"                 ← combined indexes</span>
<span class="com">--   "Sort"                              ← consider an ORDER BY index</span>` },

      { type: 'callout', kind: 'warn', html: '<strong>Indexes aren\'t free.</strong> Each one uses disk and slows INSERT/UPDATE/DELETE. Measure before adding 10 indexes "just in case".' }
    ]},

    /* ============== CH 10 — Normalization ============== */
    { id: 'sql-c10', title: 'Normalization', icon: '📐', sections: [
      { type: 'heading', text: 'Schema design — reduce redundancy', level: 1 },
      { type: 'para', html: 'Normal forms are rules for organizing tables. Going from "messy" to "clean" reduces duplication and update anomalies.' },

      { type: 'image', alt: 'normal forms', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Normal forms — each builds on the previous</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="120" height="160" rx="10" fill="#7c4dff"/>
    <text x="80" y="80" text-anchor="middle" fill="white">1NF</text>
    <text x="80" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Atomic values</text>
    <text x="80" y="120" text-anchor="middle" fill="white" font-size="11" font-weight="normal">No lists</text>
    <text x="80" y="140" text-anchor="middle" fill="white" font-size="10" font-weight="normal">No "1,2,3"</text>
    <text x="80" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">in one cell</text>

    <rect x="150" y="50" width="120" height="160" rx="10" fill="#1cb0f6"/>
    <text x="210" y="80" text-anchor="middle" fill="white">2NF</text>
    <text x="210" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">1NF +</text>
    <text x="210" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">no partial deps</text>
    <text x="210" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">full PK matters</text>

    <rect x="280" y="50" width="120" height="160" rx="10" fill="#58cc02"/>
    <text x="340" y="80" text-anchor="middle" fill="white">3NF</text>
    <text x="340" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">2NF +</text>
    <text x="340" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">no transitive deps</text>
    <text x="340" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">most apps stop here</text>

    <rect x="410" y="50" width="120" height="160" rx="10" fill="#ff9600"/>
    <text x="470" y="80" text-anchor="middle" fill="white">BCNF</text>
    <text x="470" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Stricter 3NF</text>
    <text x="470" y="130" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Every FD has</text>
    <text x="470" y="145" text-anchor="middle" fill="white" font-size="11" font-weight="normal">super key on left</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Violations & fixes', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- VIOLATION OF 1NF (list in a cell)</span>
users(id, name, phone_numbers)
   1   "Ana"  "555-1, 555-2"     ← bad
<span class="com">-- FIX: split into another table</span>
users(id, name)
user_phones(user_id, phone)

<span class="com">-- VIOLATION OF 3NF (transitive dependency)</span>
orders(order_id, user_id, user_email)
   user_email depends on user_id, not on order_id directly
<span class="com">-- FIX: drop the redundant column</span>
orders(order_id, user_id)
users(user_id, user_email)</div>` },

      { type: 'callout', kind: 'tip', html: 'Aim for <strong>3NF</strong> in transactional systems. <strong>Denormalize</strong> for analytics / read-heavy workloads (data warehouses, fact tables).' }
    ]},

    /* ============== CH 11 — Transactions ============== */
    { id: 'sql-c11', title: 'Transactions & ACID', icon: '🔄', sections: [
      { type: 'heading', text: 'All or nothing', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">BEGIN</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance - <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">1</span>;
<span class="kw">UPDATE</span> accounts <span class="kw">SET</span> balance = balance + <span class="num">100</span> <span class="kw">WHERE</span> id = <span class="num">2</span>;
<span class="kw">COMMIT</span>;

<span class="com">-- If something goes wrong:</span>
<span class="kw">ROLLBACK</span>;</div>` },

      { type: 'image', alt: 'acid', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">ACID — what transactions guarantee</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="130" height="120" rx="10" fill="#7c4dff"/>
    <text x="85" y="80" text-anchor="middle" fill="white">A — Atomic</text>
    <text x="85" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">All or none</text>

    <rect x="160" y="50" width="130" height="120" rx="10" fill="#1cb0f6"/>
    <text x="225" y="80" text-anchor="middle" fill="white">C — Consistent</text>
    <text x="225" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Constraints hold</text>

    <rect x="300" y="50" width="130" height="120" rx="10" fill="#58cc02"/>
    <text x="365" y="80" text-anchor="middle" fill="white">I — Isolated</text>
    <text x="365" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Concurrent ≈ serial</text>

    <rect x="440" y="50" width="130" height="120" rx="10" fill="#ff9600"/>
    <text x="505" y="80" text-anchor="middle" fill="white">D — Durable</text>
    <text x="505" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">Committed = survives</text>
    <text x="505" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">crash</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Isolation levels', level: 2 },
      { type: 'code', lang: 'text', code:
`           Dirty   Non-repeatable   Phantom
Level      reads   reads            reads
─────────────────────────────────────────────────
READ UNCOMMITTED     possible    possible    possible
READ COMMITTED       NO          possible    possible       ← default in Postgres
REPEATABLE READ      NO          NO          possible       ← default in MySQL
SERIALIZABLE         NO          NO          NO             ← strictest, slower

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;` },
      { type: 'callout', kind: 'tip', html: 'For "money moves" use cases — bank transfers, inventory — wrap in a transaction AND use Repeatable Read or Serializable depending on contention.' }
    ]},

    /* ============== CH 12 — Window functions ============== */
    { id: 'sql-c12', title: 'Window Functions', icon: '🪟', sections: [
      { type: 'heading', text: 'Aggregations that keep all rows', level: 1 },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Add average WITHOUT collapsing rows</span>
<span class="kw">SELECT</span> name, dept, salary,
  <span class="fn">AVG</span>(salary) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept) <span class="kw">AS</span> dept_avg,
  salary - <span class="fn">AVG</span>(salary) <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept) <span class="kw">AS</span> diff
<span class="kw">FROM</span> employees;

<span class="com">-- Top 3 per group — the classic interview question</span>
<span class="kw">WITH</span> ranked <span class="kw">AS</span> (
  <span class="kw">SELECT</span> name, dept, salary,
    <span class="fn">ROW_NUMBER</span>() <span class="kw">OVER</span> (<span class="kw">PARTITION BY</span> dept <span class="kw">ORDER BY</span> salary <span class="kw">DESC</span>) <span class="kw">AS</span> rn
  <span class="kw">FROM</span> employees
)
<span class="kw">SELECT</span> * <span class="kw">FROM</span> ranked <span class="kw">WHERE</span> rn &lt;= <span class="num">3</span>;

<span class="com">-- Running total over time</span>
<span class="kw">SELECT</span> date, amount,
  <span class="fn">SUM</span>(amount) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> running_total
<span class="kw">FROM</span> transactions;

<span class="com">-- Previous + next values</span>
<span class="kw">SELECT</span> date, price,
  <span class="fn">LAG</span>(price)  <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> prev_price,
  <span class="fn">LEAD</span>(price) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> next_price,
  price - <span class="fn">LAG</span>(price) <span class="kw">OVER</span> (<span class="kw">ORDER BY</span> date) <span class="kw">AS</span> day_change
<span class="kw">FROM</span> daily_prices;` },

      { type: 'heading', text: 'Three "rank" functions — know the differences', level: 2 },
      { type: 'code', lang: 'text', code:
`Scores:        90  90  85  80  80
ROW_NUMBER():   1   2   3   4   5     (arbitrary tiebreak)
RANK():         1   1   3   4   4     (skips after tie)
DENSE_RANK():   1   1   2   3   3     (no gaps)` },
      { type: 'callout', kind: 'tip', html: 'Window functions ABSOLUTELY come up in SQL interviews — especially for "top N per group" and "running totals". Worth practicing 3-5 examples.' }
    ]},

    /* ============== CH 13 — NoSQL ============== */
    { id: 'sql-c13', title: 'NoSQL Primer', icon: '🧩', sections: [
      { type: 'heading', text: 'When SQL isn\'t the right tool', level: 1 },

      { type: 'image', alt: 'nosql families', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">NoSQL families</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="135" height="140" rx="10" fill="#00897b"/>
    <text x="87" y="80" text-anchor="middle" fill="white">Document</text>
    <text x="87" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">JSON-like docs</text>
    <text x="87" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">flexible schema</text>
    <text x="87" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">MongoDB, CouchDB</text>

    <rect x="165" y="50" width="135" height="140" rx="10" fill="#ec407a"/>
    <text x="232" y="80" text-anchor="middle" fill="white">Key-Value</text>
    <text x="232" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">GET / SET by key</text>
    <text x="232" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">very fast</text>
    <text x="232" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Redis, DynamoDB</text>

    <rect x="310" y="50" width="135" height="140" rx="10" fill="#7c4dff"/>
    <text x="377" y="80" text-anchor="middle" fill="white">Wide-column</text>
    <text x="377" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">huge tables</text>
    <text x="377" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">dynamic columns</text>
    <text x="377" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Cassandra, HBase</text>

    <rect x="455" y="50" width="125" height="140" rx="10" fill="#ff9600"/>
    <text x="517" y="80" text-anchor="middle" fill="white">Graph</text>
    <text x="517" y="105" text-anchor="middle" fill="white" font-size="11" font-weight="normal">nodes + edges</text>
    <text x="517" y="125" text-anchor="middle" fill="white" font-size="11" font-weight="normal">traversal</text>
    <text x="517" y="155" text-anchor="middle" fill="white" font-size="10" font-weight="normal">Neo4j</text>
  </g>
  <text x="300" y="220" text-anchor="middle" font-size="11" fill="#666" font-family="Nunito">"NoSQL" = "not only SQL" — different tradeoffs, not a replacement</text>
</svg>` },

      { type: 'heading', text: 'Picking the right one', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>User profiles with varying fields</strong> → Document (MongoDB)',
        '<strong>Cache, sessions, rate-limit counters</strong> → Key-value (Redis)',
        '<strong>Time-series, IoT, logs at huge scale</strong> → Wide-column (Cassandra)',
        '<strong>Friends-of-friends, fraud detection, recommendations</strong> → Graph (Neo4j)',
        '<strong>Structured business data with strong consistency needs</strong> → SQL (Postgres)'
      ]},

      { type: 'callout', kind: 'info', html: '<strong>CAP theorem:</strong> in a distributed system facing a network partition, you can have <em>Consistency</em> or <em>Availability</em>, not both. SQL DBs lean CA on single nodes; many NoSQL DBs lean AP.' }
    ]},

    /* ============== CH 14 — DB Design ============== */
    { id: 'sql-c14', title: 'Database Design Process', icon: '🎯', sections: [
      { type: 'heading', text: 'From idea to schema', level: 1 },

      { type: 'image', alt: 'db design process', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-weight="bold" font-family="Nunito">Designing a schema</text>
  <g font-family="Nunito" font-weight="bold">
    <rect x="20" y="50" width="100" height="50" rx="8" fill="#7c4dff"/>
    <text x="70" y="72" text-anchor="middle" fill="white" font-size="11">1. Entities</text>
    <text x="70" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="normal">core nouns</text>

    <text x="135" y="78" font-size="20">→</text>

    <rect x="155" y="50" width="100" height="50" rx="8" fill="#1cb0f6"/>
    <text x="205" y="72" text-anchor="middle" fill="white" font-size="11">2. Attributes</text>
    <text x="205" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="normal">columns + types</text>

    <text x="270" y="78" font-size="20">→</text>

    <rect x="290" y="50" width="100" height="50" rx="8" fill="#58cc02"/>
    <text x="340" y="72" text-anchor="middle" fill="white" font-size="11">3. Relations</text>
    <text x="340" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="normal">1:1, 1:N, N:M</text>

    <text x="405" y="78" font-size="20">→</text>

    <rect x="425" y="50" width="100" height="50" rx="8" fill="#ff9600"/>
    <text x="475" y="72" text-anchor="middle" fill="white" font-size="11">4. Keys</text>
    <text x="475" y="88" text-anchor="middle" fill="white" font-size="10" font-weight="normal">PK + FK</text>

    <line x1="70" y1="100" x2="70" y2="135" stroke="#666" stroke-width="2"/>
    <polygon points="64,135 70,148 76,135" fill="#666"/>

    <rect x="20" y="150" width="100" height="40" rx="8" fill="#e53935"/>
    <text x="70" y="172" text-anchor="middle" fill="white" font-size="11">5. Normalize</text>

    <text x="135" y="172" font-size="20">→</text>

    <rect x="155" y="150" width="100" height="40" rx="8" fill="#ec407a"/>
    <text x="205" y="172" text-anchor="middle" fill="white" font-size="11">6. Indexes</text>

    <text x="270" y="172" font-size="20">→</text>

    <rect x="290" y="150" width="100" height="40" rx="8" fill="#37474f"/>
    <text x="340" y="172" text-anchor="middle" fill="white" font-size="11">7. Constraints</text>

    <text x="405" y="172" font-size="20">→</text>

    <rect x="425" y="150" width="135" height="40" rx="8" fill="#26a69a"/>
    <text x="492" y="172" text-anchor="middle" fill="white" font-size="11">8. Scale + ops plan</text>
  </g>
</svg>` },

      { type: 'heading', text: 'A worked example — a tiny e-commerce schema', level: 2 },
      { type: 'code', lang: 'sql', code:
`<span class="kw">CREATE TABLE</span> users (
  id          <span class="ty">UUID</span> <span class="kw">PRIMARY KEY DEFAULT</span> <span class="fn">gen_random_uuid</span>(),
  email       <span class="ty">CITEXT</span> <span class="kw">UNIQUE NOT NULL</span>,
  name        <span class="ty">TEXT</span> <span class="kw">NOT NULL</span>,
  created_at  <span class="ty">TIMESTAMPTZ</span> <span class="kw">NOT NULL DEFAULT</span> <span class="fn">NOW</span>(),
  deleted_at  <span class="ty">TIMESTAMPTZ</span>
);

<span class="kw">CREATE TABLE</span> products (
  id          <span class="ty">UUID</span> <span class="kw">PRIMARY KEY DEFAULT</span> <span class="fn">gen_random_uuid</span>(),
  sku         <span class="ty">TEXT</span> <span class="kw">UNIQUE NOT NULL</span>,
  name        <span class="ty">TEXT</span> <span class="kw">NOT NULL</span>,
  price_cents <span class="ty">INTEGER</span> <span class="kw">NOT NULL CHECK</span> (price_cents &gt;= <span class="num">0</span>),
  inventory   <span class="ty">INTEGER</span> <span class="kw">NOT NULL DEFAULT</span> <span class="num">0</span>
);

<span class="kw">CREATE TABLE</span> orders (
  id          <span class="ty">UUID</span> <span class="kw">PRIMARY KEY DEFAULT</span> <span class="fn">gen_random_uuid</span>(),
  user_id     <span class="ty">UUID</span> <span class="kw">NOT NULL REFERENCES</span> users(id),
  status      <span class="ty">TEXT</span> <span class="kw">NOT NULL CHECK</span> (status <span class="kw">IN</span> (<span class="str">\'pending\'</span>,<span class="str">\'paid\'</span>,<span class="str">\'shipped\'</span>,<span class="str">\'cancelled\'</span>)),
  total_cents <span class="ty">INTEGER</span> <span class="kw">NOT NULL</span>,
  created_at  <span class="ty">TIMESTAMPTZ</span> <span class="kw">NOT NULL DEFAULT</span> <span class="fn">NOW</span>()
);

<span class="kw">CREATE TABLE</span> order_items (
  order_id    <span class="ty">UUID</span> <span class="kw">REFERENCES</span> orders(id) <span class="kw">ON DELETE CASCADE</span>,
  product_id  <span class="ty">UUID</span> <span class="kw">REFERENCES</span> products(id),
  quantity    <span class="ty">INTEGER</span> <span class="kw">NOT NULL CHECK</span> (quantity &gt; <span class="num">0</span>),
  price_cents <span class="ty">INTEGER</span> <span class="kw">NOT NULL</span>,             <span class="com">-- snapshot price</span>
  <span class="kw">PRIMARY KEY</span> (order_id, product_id)
);

<span class="com">-- Indexes for expected query patterns</span>
<span class="kw">CREATE INDEX</span> idx_orders_user_date <span class="kw">ON</span> orders(user_id, created_at <span class="kw">DESC</span>);
<span class="kw">CREATE INDEX</span> idx_orders_status <span class="kw">ON</span> orders(status) <span class="kw">WHERE</span> status <span class="kw">IN</span> (<span class="str">\'pending\'</span>,<span class="str">\'paid\'</span>);</div>` },

      { type: 'callout', kind: 'success', html: '🎉 You\'re equipped with SQL fundamentals plus the design judgment to model real systems. Practice with real datasets — every JSON file is a CSV waiting to become a database!' }
    ]}
  ]
});

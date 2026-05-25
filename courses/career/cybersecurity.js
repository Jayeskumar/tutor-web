PUSH({
  id: 'cybersecurity',
  name: 'CyberSecurity',
  icon: '🛡️',
  color: '#b71c1c',
  description: 'Defensive security fundamentals — threats, crypto, web security, and how attacks work.',
  units: [

    /* ============== UNIT 1 — CIA triad & security mindset ============== */
    {
      id: 'sec-u1', name: 'Unit 1 · CIA Triad & Mindset', description: 'Confidentiality, Integrity, Availability — and threat modeling',
      lessons: [
        {
          id: 'sec-u1-l1', name: 'The CIA triad', icon: '🛡️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Security rests on three pillars', content: `<p>Every security decision can be traced back to one of three goals:</p>
<div class="code-block"><span class="com">C — Confidentiality</span>  only the right people can read it
<span class="com">I — Integrity</span>        data is not tampered with
<span class="com">A — Availability</span>     the system stays reachable when needed</div>
<p>A leaked password breaks <strong>confidentiality</strong>. A modified invoice breaks <strong>integrity</strong>. A DDoS attack breaks <strong>availability</strong>.</p>
<p>Every control — from encryption to backups to MFA — exists to defend one of these three.</p>` },
            { type: 'multiple-choice', prompt: 'An attacker silently changes the bank-transfer amount in transit. Which pillar is breached?',
              options: [{text:'Confidentiality', code:false},{text:'Integrity', code:false},{text:'Availability', code:false},{text:'Anonymity', code:false}],
              correct: 1, explanation: 'Data was altered — integrity is the property of remaining unmodified.' },
            { type: 'multiple-choice', prompt: 'A DDoS attack primarily targets:',
              options: [{text:'Confidentiality', code:false},{text:'Integrity', code:false},{text:'Availability', code:false},{text:'Encryption keys', code:false}],
              correct: 2, explanation: 'DDoS makes services unreachable — availability is harmed.' },
            { type: 'match-pairs', prompt: 'Match the breach to the pillar it violates.', leftLabel: 'Incident', rightLabel: 'Pillar',
              pairs: [{left:'Leaked customer database', right:'Confidentiality'},{left:'Ransomware encrypts servers', right:'Availability'},{left:'Forged audit log entry', right:'Integrity'},{left:'Stolen session cookie', right:'Confidentiality'}] },
            { type: 'true-false', statement: 'Strong encryption alone is enough to satisfy all three CIA goals.', correct: false, explanation: 'Encryption helps confidentiality, but availability needs redundancy and integrity needs hashes/signatures.' },
            { type: 'type-answer', prompt: 'What does the C in CIA stand for?', accept: ['confidentiality','Confidentiality'], explanation: 'C = Confidentiality.' }
          ]
        },
        {
          id: 'sec-u1-l2', name: 'Threat modeling basics', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: 'Think like an attacker — defensively', content: `<p><strong>Threat modeling</strong> is asking four questions <em>before</em> something breaks:</p>
<div class="code-block"><span class="com">1.</span> What are we building?
<span class="com">2.</span> What can go wrong?
<span class="com">3.</span> What are we going to do about it?
<span class="com">4.</span> Did we do a good job?</div>
<p>A popular framework is <strong>STRIDE</strong>:</p>
<div class="code-block"><span class="com">S</span>poofing          — pretending to be someone else
<span class="com">T</span>ampering         — modifying data
<span class="com">R</span>epudiation       — denying you did something
<span class="com">I</span>nfo disclosure   — leaking secrets
<span class="com">D</span>enial of service — making things unavailable
<span class="com">E</span>levation of privilege — gaining unauthorized access</div>` },
            { type: 'multiple-choice', prompt: 'Which STRIDE category covers "an attacker logs in as someone else"?',
              options: [{text:'Tampering', code:false},{text:'Spoofing', code:false},{text:'Repudiation', code:false},{text:'Elevation of privilege', code:false}],
              correct: 1, explanation: 'Spoofing = pretending to be a different identity.' },
            { type: 'match-pairs', prompt: 'Map STRIDE letter to the CIA pillar it most directly harms.', leftLabel: 'STRIDE', rightLabel: 'Pillar',
              pairs: [{left:'Tampering', right:'Integrity'},{left:'Information disclosure', right:'Confidentiality'},{left:'Denial of service', right:'Availability'},{left:'Spoofing', right:'Authentication'}] },
            { type: 'true-false', statement: 'Threat modeling is most valuable when done EARLY in design, not after launch.', correct: true, explanation: 'Cheaper to fix on a whiteboard than in production.' },
            { type: 'tap-tokens', prompt: 'Order the four threat-modeling questions.',
              tokens: ['What','are','we','building','?','can','go','wrong','going','to','do','about','it','Did','did','a','good','job'],
              correctOrder: ['What','are','we','building','?'],
              explanation: 'Step 1 is always "What are we building?" — you cannot defend what you have not described.' },
            { type: 'multiple-choice', prompt: 'A trust boundary is best described as:',
              options: [{text:'A firewall rule', code:false},{text:'A line in your system where data crosses from a less-trusted zone to a more-trusted one', code:false},{text:'A user role', code:false},{text:'An encryption key', code:false}],
              correct: 1, explanation: 'Trust boundaries are where you must validate, authenticate, or otherwise check incoming data.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Cryptography basics ============== */
    {
      id: 'sec-u2', name: 'Unit 2 · Cryptography Basics', description: 'Symmetric, asymmetric, and hashing',
      lessons: [
        {
          id: 'sec-u2-l1', name: 'Symmetric & asymmetric', icon: '🔐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two families of encryption', content: `<p><strong>Symmetric</strong> encryption uses one shared key for encrypt and decrypt. Fast — good for bulk data.</p>
<div class="code-block"><span class="com">AES-256-GCM</span> — the modern default
- single key, e.g. a 256-bit secret
- problem: how do both parties get the key safely?</div>
<p><strong>Asymmetric</strong> encryption uses a key <em>pair</em>: a <strong>public</strong> key (share freely) and a <strong>private</strong> key (guard with your life).</p>
<div class="code-block"><span class="com">RSA</span> / <span class="com">ECC</span> — modern public-key crypto
- encrypt with public key   → only private holder can read
- sign with private key     → anyone can verify with public</div>
<p>Real systems combine both: use RSA/ECC to <em>exchange</em> an AES key, then AES for the heavy lifting.</p>` },
            { type: 'multiple-choice', prompt: 'You want to send 10 GB of encrypted backups to a server. Which algorithm family is the practical choice for the bulk data?',
              options: [{text:'RSA-4096', code:false},{text:'AES-256', code:false},{text:'SHA-256', code:false},{text:'ECDSA', code:false}],
              correct: 1, explanation: 'Symmetric (AES) is orders of magnitude faster than asymmetric for large data.' },
            { type: 'true-false', statement: 'A public key can decrypt anything its matching private key has encrypted.', correct: true, explanation: 'That is how digital signatures work — encrypt-with-private / verify-with-public.' },
            { type: 'match-pairs', prompt: 'Pair algorithm with category.', leftLabel: 'Algorithm', rightLabel: 'Type',
              pairs: [{left:'AES', right:'Symmetric'},{left:'RSA', right:'Asymmetric'},{left:'ECC', right:'Asymmetric'},{left:'ChaCha20', right:'Symmetric'}] },
            { type: 'multiple-choice', prompt: 'Why do real systems use hybrid (asymmetric + symmetric) crypto?',
              options: [{text:'It is required by law', code:false},{text:'Asymmetric is slow but solves key exchange; symmetric is fast but cannot solve key exchange alone', code:false},{text:'Symmetric is no longer considered safe', code:false},{text:'To avoid using prime numbers', code:false}],
              correct: 1, explanation: 'Asymmetric handles the introduction; symmetric handles the conversation.' },
            { type: 'type-answer', prompt: 'What is the modern symmetric cipher named after Rijndael and standardized by NIST? (acronym)', accept: ['AES','aes'], explanation: 'AES = Advanced Encryption Standard.' }
          ]
        },
        {
          id: 'sec-u2-l2', name: 'Hash functions', icon: '#️⃣', xp: 20,
          challenges: [
            { type: 'concept', title: 'One-way fingerprints', content: `<p>A <strong>cryptographic hash</strong> takes input of any size and produces a fixed-size, seemingly random output. Three properties matter:</p>
<div class="code-block"><span class="com">Deterministic</span>      same input → same hash
<span class="com">One-way</span>            you cannot reverse it
<span class="com">Collision-resistant</span> two inputs producing the same hash is infeasible</div>
<p>Hashes do NOT provide confidentiality. They provide <strong>integrity</strong> — "this file is what I sent you."</p>
<div class="code-block"><span class="com">SHA-256("hello") =</span>
2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824</div>` },
            { type: 'multiple-choice', prompt: 'Which property makes a hash useful for verifying a downloaded file matches the original?',
              options: [{text:'It is encrypted', code:false},{text:'It is deterministic — same input always hashes to the same value', code:false},{text:'It is random', code:false},{text:'It compresses the file', code:false}],
              correct: 1, explanation: 'Determinism means any change in the file changes the hash.' },
            { type: 'true-false', statement: 'You can use a hash to securely store sensitive data because hashes are one-way.', correct: false, explanation: 'Hashes leak nothing about reversal, but they are NOT encryption — you cannot retrieve the original. They are for verification, not storage of recoverable data.' },
            { type: 'multiple-choice', prompt: 'Which of these is a CURRENT, recommended hashing algorithm for general integrity use?',
              options: [{text:'MD5', code:true},{text:'SHA-1', code:true},{text:'SHA-256', code:true},{text:'CRC32', code:true}],
              correct: 2, explanation: 'MD5 and SHA-1 are broken; CRC32 is not cryptographic; SHA-256 (and SHA-3) are current.' },
            { type: 'match-pairs', prompt: 'Match the hash family to its status.', leftLabel: 'Algorithm', rightLabel: 'Status',
              pairs: [{left:'MD5', right:'Broken — do not use'},{left:'SHA-1', right:'Broken — do not use'},{left:'SHA-256', right:'Recommended'},{left:'SHA-3', right:'Recommended'}] },
            { type: 'output-predict', prompt: 'Two different files produce the same SHA-256 output. What has happened?',
              code: `<span class="com">file_a.bin → 2cf24dba5fb0a30e26e83b2ac5...</span>
<span class="com">file_b.bin → 2cf24dba5fb0a30e26e83b2ac5...</span>`,
              options: ['Nothing — hashes can repeat freely', 'A collision — for SHA-256, this would be a major break of the algorithm', 'The hash was encrypted twice', 'The files are identical'],
              correct: 1, explanation: 'No SHA-256 collision has ever been found; producing one would be world-news cryptographic news.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Password security ============== */
    {
      id: 'sec-u3', name: 'Unit 3 · Password Security', description: 'Salting, peppering, bcrypt, argon2',
      lessons: [
        {
          id: 'sec-u3-l1', name: 'Never store plain passwords', icon: '🔑', xp: 20,
          challenges: [
            { type: 'concept', title: 'The minimum bar: salted, slow hashes', content: `<p>If your database leaks tomorrow, what your users have to fear depends entirely on how you stored their passwords.</p>
<div class="code-block"><span class="com">Worst → Best</span>

plaintext              "hunter2"                       catastrophic
MD5/SHA-1 unsalted     5f4dcc3b...                     cracked in seconds
SHA-256 unsalted       ef92b778...                     rainbow tables work
SHA-256 + salt         ef92b778... + per-user salt     better, still too fast
bcrypt / argon2 / scrypt   slow on purpose              the right answer</div>
<p>A <strong>salt</strong> is a random per-user value mixed into the hash so that two users with the same password get different stored values. This kills precomputed rainbow tables.</p>
<p>A <strong>password hashing function</strong> like bcrypt or Argon2 is intentionally slow and tunable. Even with a leaked database and modern GPUs, billions of guesses per second drops to thousands per second.</p>` },
            { type: 'multiple-choice', prompt: 'Why is salting a password hash important?',
              options: [{text:'It makes the password longer', code:false},{text:'It ensures two identical passwords produce different stored hashes, defeating rainbow tables', code:false},{text:'It encrypts the password', code:false},{text:'It compresses the hash', code:false}],
              correct: 1, explanation: 'Per-user salts mean attackers cannot precompute hashes.' },
            { type: 'multiple-choice', prompt: 'Which is the BEST current choice for hashing passwords on a new system?',
              options: [{text:'SHA-1', code:true},{text:'MD5', code:true},{text:'Argon2id', code:true},{text:'CRC32', code:true}],
              correct: 2, explanation: 'Argon2id is the current Password Hashing Competition winner; bcrypt and scrypt are also acceptable.' },
            { type: 'true-false', statement: 'A fast hash like SHA-256 is appropriate for password storage as long as you salt it.', correct: false, explanation: 'Even salted, fast hashes can be brute-forced at billions per second on GPUs. Use a slow PHF: bcrypt, scrypt, Argon2.' },
            { type: 'fill-blank', prompt: 'Complete the safe password verification call.',
              codeLines: [{html:'<span class="kw">if</span> (<span class="ty">BCrypt</span>.<span class="fn">_BLANK_</span>(submittedPassword, storedHash)) { ... }'}],
              tokens: ['checkpw','compare','equals','match'],
              correctAnswer: 'checkpw', explanation: 'jBCrypt uses BCrypt.checkpw — it compares with the same algorithm and salt embedded in the stored hash.' },
            { type: 'match-pairs', prompt: 'Match concept to definition.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [{left:'Salt', right:'Random value per user'},{left:'Pepper', right:'Secret value held outside the DB'},{left:'Work factor', right:'How slow the hash is — tune up over time'},{left:'Rainbow table', right:'Precomputed hash lookup'}] },
            { type: 'output-predict', prompt: 'A leaked DB has SHA-256 hashes of common passwords with no salt. What is the realistic time-to-crack for "password123" on a modern GPU rig?',
              code: `hash = SHA-256("password123")
attacker has hash; attacker has dictionary`,
              options: ['Years', 'Minutes', 'Under a second', 'Centuries'],
              correct: 2, explanation: 'A single GPU does billions of SHA-256 per second; common passwords fall instantly. Slow hashes + salt is the only defense.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Authentication & authorization ============== */
    {
      id: 'sec-u4', name: 'Unit 4 · Authentication & Authorization', description: 'MFA, OAuth, OIDC, JWT, sessions',
      lessons: [
        {
          id: 'sec-u4-l1', name: 'AuthN vs AuthZ + MFA', icon: '🪪', xp: 20,
          challenges: [
            { type: 'concept', title: 'Two different questions', content: `<p><strong>Authentication (AuthN)</strong> — who are you?</p>
<p><strong>Authorization (AuthZ)</strong> — what are you allowed to do?</p>
<p>You can be perfectly authenticated and still not authorized for a particular action. Confusing the two is a common source of bugs and breaches.</p>
<div class="code-block"><span class="com">Three authentication factors</span>
something you KNOW   — password, PIN
something you HAVE   — phone, hardware key, smart card
something you ARE    — fingerprint, face, iris</div>
<p><strong>MFA</strong> = combining factors from different categories. Two passwords is NOT MFA — it is two of the same factor.</p>` },
            { type: 'multiple-choice', prompt: 'A user logs in with a password and confirms via an authenticator app. This is MFA because:',
              options: [{text:'There are two steps', code:false},{text:'It combines "something you know" with "something you have"', code:false},{text:'The password is hashed twice', code:false},{text:'A captcha was used', code:false}],
              correct: 1, explanation: 'MFA requires factors from different categories.' },
            { type: 'true-false', statement: 'SMS-based one-time codes are the strongest available MFA method.', correct: false, explanation: 'SMS is vulnerable to SIM-swap attacks. Authenticator apps (TOTP) and hardware keys (FIDO2/WebAuthn) are stronger.' },
            { type: 'match-pairs', prompt: 'Categorize each factor.', leftLabel: 'Item', rightLabel: 'Factor type',
              pairs: [{left:'Password', right:'Something you know'},{left:'YubiKey', right:'Something you have'},{left:'Fingerprint', right:'Something you are'},{left:'PIN', right:'Something you know'}] },
            { type: 'multiple-choice', prompt: 'Which of these is an AUTHORIZATION failure, not an authentication failure?',
              options: [{text:'Wrong password rejected', code:false},{text:'Logged-in user can read another user\'s private messages (IDOR)', code:false},{text:'Locked account after 5 bad logins', code:false},{text:'MFA code rejected', code:false}],
              correct: 1, explanation: 'IDOR (Insecure Direct Object Reference) is an authorization bug — identity was fine; permission check failed.' },
            { type: 'type-answer', prompt: 'Acronym for "Multi-Factor Authentication"?', accept: ['MFA','mfa'], explanation: 'MFA.' }
          ]
        },
        {
          id: 'sec-u4-l2', name: 'OAuth, OIDC & JWTs', icon: '🎫', xp: 25,
          challenges: [
            { type: 'concept', title: 'Delegation, identity, and tokens', content: `<p><strong>OAuth 2.0</strong> is a delegation protocol — "let this app act on my behalf, with these scopes, without giving it my password."</p>
<p><strong>OIDC (OpenID Connect)</strong> is an identity layer on top of OAuth 2.0 — adds an <code>id_token</code> so the relying party knows WHO the user is, not just what they can do.</p>
<p><strong>JWT (JSON Web Token)</strong> is a token <em>format</em>: base64url(header).base64url(payload).signature. Carries claims, signed (and optionally encrypted).</p>
<div class="code-block">eyJhbGciOiJIUzI1NiJ9.<span class="com">// header</span>
eyJzdWIiOiJhbGljZSIsImV4cCI6MTcyMDB9.<span class="com">// claims</span>
9aLB...sig<span class="com">                                  // signature</span></div>
<p>Common JWT pitfalls:</p>
<div class="code-block"><span class="com">- "alg":"none"</span>           accepted by naive validators
<span class="com">- weak HS256 secret</span>     brute-forced offline
<span class="com">- skipping signature</span>    just trusting the payload
<span class="com">- long lifetimes</span>        no way to revoke a leaked token</div>` },
            { type: 'multiple-choice', prompt: 'OAuth 2.0 by itself answers which question?',
              options: [{text:'Who is the user?', code:false},{text:'What is this app allowed to do on the user\'s behalf?', code:false},{text:'Is the password correct?', code:false},{text:'Is the network encrypted?', code:false}],
              correct: 1, explanation: 'OAuth is delegation/authorization. OIDC adds identity ("who").' },
            { type: 'true-false', statement: 'A signed JWT is automatically encrypted — its contents are private.', correct: false, explanation: 'Signed ≠ encrypted. JWT payloads are base64url and trivially readable. Use JWE if you need encryption.' },
            { type: 'match-pairs', prompt: 'Match acronym to role.', leftLabel: 'Term', rightLabel: 'Role',
              pairs: [{left:'OAuth 2.0', right:'Authorization / delegation'},{left:'OIDC', right:'Identity layer on top of OAuth'},{left:'JWT', right:'Token format'},{left:'SAML', right:'XML-based federation (older)'}] },
            { type: 'multiple-choice', prompt: 'A server happily accepts JWTs where <code>alg</code> in the header is set to <code>"none"</code>. What is the impact?',
              options: [{text:'No impact — the signature is just optional', code:false},{text:'Anyone can forge tokens for any user; this is a critical vulnerability', code:false},{text:'The token is encrypted instead of signed', code:false},{text:'Tokens expire faster', code:false}],
              correct: 1, explanation: 'The "alg: none" trick has caused real-world breaches. Always pin to the expected algorithm and reject "none".' },
            { type: 'match-pairs', prompt: 'Session vs token storage.', leftLabel: 'Property', rightLabel: 'Best fit',
              pairs: [{left:'Easy to revoke immediately', right:'Server session'},{left:'Stateless, scales horizontally', right:'JWT'},{left:'CSRF risk by default (cookie)', right:'Server session'},{left:'Bearer-token theft = full account', right:'JWT'}] },
            { type: 'reorder-code', prompt: 'Order an OAuth 2.0 Authorization Code flow.',
              lines: [
                'User clicks "Log in with Provider" on the app',
                'App redirects user to Provider\'s authorization endpoint',
                'User authenticates with Provider and approves scopes',
                'Provider redirects back to app with a short-lived code',
                'App exchanges the code (+ client secret) for an access token at the token endpoint',
                'App calls the API with the access token'
              ],
              correctOrder: [0,1,2,3,4,5] }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — TLS / HTTPS ============== */
    {
      id: 'sec-u5', name: 'Unit 5 · TLS / HTTPS', description: 'Handshake, certificates, PKI',
      lessons: [
        {
          id: 'sec-u5-l1', name: 'How HTTPS works', icon: '🔒', xp: 25,
          challenges: [
            { type: 'concept', title: 'TLS in one slide', content: `<p>HTTPS = HTTP carried inside a <strong>TLS</strong> tunnel. TLS gives you three things: confidentiality, integrity, and authenticity of the server (and optionally the client).</p>
<div class="code-block"><span class="com">Simplified TLS 1.3 handshake</span>
Client → Server   ClientHello (cipher suites, key share)
Server → Client   ServerHello + certificate + key share
                  → both sides derive the same session key
both              Encrypted application data flows</div>
<p>The server\'s certificate, issued by a <strong>Certificate Authority (CA)</strong>, binds the domain name to its public key. Your browser trusts a list of root CAs; root CAs sign intermediates; intermediates sign your cert. This chain is the <strong>PKI</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'What does a TLS certificate prove?',
              options: [{text:'The site is virus-free', code:false},{text:'The server controlling this connection holds the private key matching the certified public key for this domain', code:false},{text:'The site is fast', code:false},{text:'The user is logged in', code:false}],
              correct: 1, explanation: 'TLS authenticates the server identity bound to the domain — nothing else.' },
            { type: 'true-false', statement: 'Loading a page over HTTPS but pulling a script over HTTP is safe because the page itself is encrypted.', correct: false, explanation: 'Mixed content lets an attacker tamper with the script; browsers block it for that reason.' },
            { type: 'match-pairs', prompt: 'Match acronym to meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [{left:'CA', right:'Certificate Authority'},{left:'PKI', right:'Public Key Infrastructure'},{left:'HSTS', right:'HTTP Strict Transport Security'},{left:'SNI', right:'Server Name Indication'}] },
            { type: 'multiple-choice', prompt: 'HSTS protects against:',
              options: [{text:'SQL injection', code:false},{text:'Downgrade and stripping attacks that try to force HTTP', code:false},{text:'Password guessing', code:false},{text:'Brute-force login', code:false}],
              correct: 1, explanation: 'HSTS tells browsers "always use HTTPS for this domain" for a given duration, blocking sslstrip-style attacks.' },
            { type: 'reorder-code', prompt: 'Order the cert chain from your site\'s leaf up to the trust root.',
              lines: [
                'Leaf certificate for www.example.com',
                'Intermediate CA certificate',
                'Root CA certificate (in browser trust store)'
              ],
              correctOrder: [0,1,2] },
            { type: 'output-predict', prompt: 'A browser shows "NET::ERR_CERT_DATE_INVALID". Most likely cause?',
              code: `<span class="com">certificate notAfter = 2024-01-15</span>
<span class="com">today                = 2026-05-20</span>`,
              options: ['Wrong cipher suite', 'The certificate has expired', 'DNS misconfiguration', 'Password too weak'],
              correct: 1, explanation: 'Certs have validity windows; once notAfter passes, browsers refuse the connection.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — OWASP Top 10 ============== */
    {
      id: 'sec-u6', name: 'Unit 6 · OWASP Top 10', description: 'The ten most common web app risks',
      lessons: [
        {
          id: 'sec-u6-l1', name: 'The Top 10 at a glance', icon: '🔟', xp: 25,
          challenges: [
            { type: 'concept', title: 'OWASP Top 10 (2021)', content: `<div class="code-block"><span class="com">A01</span> Broken Access Control
<span class="com">A02</span> Cryptographic Failures
<span class="com">A03</span> Injection (SQLi, NoSQLi, OS, LDAP)
<span class="com">A04</span> Insecure Design
<span class="com">A05</span> Security Misconfiguration
<span class="com">A06</span> Vulnerable & Outdated Components
<span class="com">A07</span> Identification & Authentication Failures
<span class="com">A08</span> Software & Data Integrity Failures
<span class="com">A09</span> Security Logging & Monitoring Failures
<span class="com">A10</span> Server-Side Request Forgery (SSRF)</div>
<p>The Top 10 is not a complete list — it is the most common categories observed across thousands of real applications. Memorize the rough idea of each; you will meet them all.</p>` },
            { type: 'match-pairs', prompt: 'Match the risk to its short description.', leftLabel: 'Category', rightLabel: 'Description',
              pairs: [{left:'Broken Access Control', right:'Users acting outside their permissions'},{left:'Injection', right:'Untrusted input executed as code/query'},{left:'SSRF', right:'Server tricked into requesting attacker-chosen URLs'},{left:'Security Misconfiguration', right:'Defaults, open buckets, debug pages live'}] },
            { type: 'multiple-choice', prompt: 'Which Top 10 category covers using a 3-year-old library with a known CVE?',
              options: [{text:'A01 Broken Access Control', code:false},{text:'A06 Vulnerable & Outdated Components', code:false},{text:'A03 Injection', code:false},{text:'A10 SSRF', code:false}],
              correct: 1, explanation: 'A06 is specifically about dependency hygiene.' },
            { type: 'true-false', statement: 'OWASP Top 10 is in priority order — A01 is always more important than A10 for your app.', correct: false, explanation: 'It is by observed prevalence/impact across surveyed apps. Your own risk ranking depends on your context.' },
            { type: 'multiple-choice', prompt: 'A debug endpoint exposing stack traces in production falls under:',
              options: [{text:'A02 Cryptographic Failures', code:false},{text:'A05 Security Misconfiguration', code:false},{text:'A07 Auth Failures', code:false},{text:'A09 Logging Failures', code:false}],
              correct: 1, explanation: 'Leaving developer features on in production is the textbook misconfiguration.' },
            { type: 'type-answer', prompt: 'What does the acronym OWASP stand for? (first word)', accept: ['open','Open'], explanation: 'Open Web Application Security Project.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — SQL injection ============== */
    {
      id: 'sec-u7', name: 'Unit 7 · SQL Injection', description: 'Parameterized queries, ORMs',
      lessons: [
        {
          id: 'sec-u7-l1', name: 'SQLi and how to stop it', icon: '💉', xp: 25,
          challenges: [
            { type: 'concept', title: 'String concatenation = danger', content: `<p>SQL injection happens when attacker-controlled input is glued into a SQL query as text. The database cannot tell data from code.</p>
<div class="code-block"><span class="com">// SAFE — parameterized query (do this)</span>
<span class="kw">String</span> sql = <span class="str">"SELECT id FROM users WHERE email = ? AND active = ?"</span>;
<span class="ty">PreparedStatement</span> ps = conn.<span class="fn">prepareStatement</span>(sql);
ps.<span class="fn">setString</span>(<span class="num">1</span>, email);
ps.<span class="fn">setBoolean</span>(<span class="num">2</span>, <span class="kw">true</span>);

<span class="com">// UNSAFE — string concatenation (never do this)</span>
<span class="kw">String</span> sql = <span class="str">"SELECT id FROM users WHERE email = '"</span> + email + <span class="str">"'"</span>;</div>
<p>With parameterized queries, <code>email</code> is bound as <strong>data</strong> — the DB never parses it as SQL. With concatenation, the DB sees whatever the attacker types as part of the query.</p>` },
            { type: 'multiple-choice', prompt: 'The MAIN defense against SQL injection is:',
              options: [{text:'Escaping single quotes manually', code:false},{text:'Using parameterized (prepared) queries', code:false},{text:'Hashing the input', code:false},{text:'A WAF', code:false}],
              correct: 1, explanation: 'Parameterized queries separate code from data at the protocol level — the bulletproof fix. WAFs and escaping help but are not the primary defense.' },
            { type: 'true-false', statement: 'Using a well-known ORM (e.g., Hibernate, ActiveRecord) with bound parameters effectively eliminates classic SQLi.', correct: true, explanation: 'Provided you avoid raw-SQL APIs that interpolate strings, ORMs use prepared statements under the hood.' },
            { type: 'multiple-choice', prompt: 'Which is SAFER?',
              options: [{text:'<code>"... WHERE name = \'" + name + "\'"</code>', code:false},{text:'<code>"... WHERE name = ?"</code> with <code>setString(1, name)</code>', code:false},{text:'Both are equally safe', code:false},{text:'Concatenation if you escape quotes', code:false}],
              correct: 1, explanation: 'Parameterized queries are the standard. SAFE: prepared statements. UNSAFE: concatenation, even with quote escaping.' },
            { type: 'fill-blank', prompt: 'Complete the SAFE query pattern.',
              codeLines: [{html:'<span class="ty">PreparedStatement</span> ps = conn.<span class="fn">_BLANK_</span>(<span class="str">"SELECT * FROM t WHERE id = ?"</span>);'}],
              tokens: ['prepareStatement','executeQuery','createStatement','query'],
              correctAnswer: 'prepareStatement', explanation: 'prepareStatement compiles the SQL with placeholders; parameters are bound separately and never reinterpreted as SQL.' },
            { type: 'match-pairs', prompt: 'Defense in depth for SQLi.', leftLabel: 'Layer', rightLabel: 'Role',
              pairs: [{left:'Parameterized queries', right:'Primary fix'},{left:'Least-privilege DB user', right:'Limit blast radius'},{left:'Input validation', right:'Reject obviously bad inputs'},{left:'Logging & alerting', right:'Detect attempts'}] },
            { type: 'output-predict', prompt: 'A login form uses <code>"... WHERE user=\'"+u+"\' AND pw=\'"+p+"\'"</code>. Attacker enters <code>u = anything</code>, <code>p = anything</code> and the comments-out trick. What is the takeaway?',
              code: `<span class="com">// UNSAFE concatenation example — do not use this pattern</span>
<span class="com">// Resulting query becomes auth-bypassing nonsense</span>`,
              options: ['Concatenation is fine if the password column is hashed', 'Concatenation lets an attacker change the query\'s logic; the only real fix is parameterized queries', 'The fix is to use a longer column name', 'Use SELECT instead of WHERE'],
              correct: 1, explanation: 'No amount of clever quoting saves you — switch to prepared statements.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — XSS ============== */
    {
      id: 'sec-u8', name: 'Unit 8 · Cross-Site Scripting', description: 'Stored, Reflected, DOM-based XSS',
      lessons: [
        {
          id: 'sec-u8-l1', name: 'XSS basics & defenses', icon: '🧪', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three flavors of XSS', content: `<p>XSS happens when an attacker can run JavaScript in another user\'s browser, in your site\'s origin.</p>
<div class="code-block"><span class="com">Stored</span>     payload lives in your DB (forum post, profile, etc.)
<span class="com">Reflected</span>  payload bounces off your server (search query in URL)
<span class="com">DOM-based</span>  payload never touches the server; client-side JS writes
            attacker-controlled data into the page unsafely</div>
<p>The fix is <strong>contextual output encoding</strong>: when you render data into HTML, encode for HTML; into JS, encode for JS; into URLs, encode for URLs.</p>
<div class="code-block"><span class="com">// SAFE — framework auto-escapes</span>
&lt;div&gt;{{ userName }}&lt;/div&gt;       <span class="com">// React/Vue/Angular treat as text</span>

<span class="com">// UNSAFE — innerHTML / dangerouslySetInnerHTML / v-html on untrusted input</span></div>` },
            { type: 'multiple-choice', prompt: 'Stored XSS differs from Reflected XSS because:',
              options: [{text:'It uses a different programming language', code:false},{text:'The malicious payload is persistently saved on the server (e.g., in a database)', code:false},{text:'It targets only admins', code:false},{text:'It uses HTTPS', code:false}],
              correct: 1, explanation: 'Stored XSS payloads sit in the app\'s storage and execute every time the affected page is viewed.' },
            { type: 'true-false', statement: 'Setting <code>HttpOnly</code> on session cookies completely prevents XSS.', correct: false, explanation: 'HttpOnly stops JS reading the cookie — useful! — but the XSS bug itself remains; attackers can still phish, deface, or perform actions on behalf of the user.' },
            { type: 'multiple-choice', prompt: 'Which header restricts what scripts a page can load and execute?',
              options: [{text:'X-Frame-Options', code:true},{text:'Content-Security-Policy', code:true},{text:'Referrer-Policy', code:true},{text:'Strict-Transport-Security', code:true}],
              correct: 1, explanation: 'CSP is a strong defense-in-depth control against XSS.' },
            { type: 'match-pairs', prompt: 'XSS defense → role.', leftLabel: 'Defense', rightLabel: 'Role',
              pairs: [{left:'Output encoding', right:'Primary fix — render data as data'},{left:'CSP', right:'Defense in depth'},{left:'HttpOnly cookie', right:'Limit token theft impact'},{left:'Trusted Types', right:'Block unsafe sinks'}] },
            { type: 'fill-blank', prompt: 'Pick the SAFE rendering helper in this template.',
              codeLines: [{html:'app.<span class="fn">_BLANK_</span>(<span class="str">"&lt;p&gt;{{ userBio }}&lt;/p&gt;"</span>);  <span class="com">// auto-escapes by default</span>'}],
              tokens: ['renderEscaped','innerHTML','document.write','eval'],
              correctAnswer: 'renderEscaped', explanation: 'The whole point: never assign untrusted text to innerHTML/document.write/eval. A render helper that auto-escapes is the SAFE choice.' },
            { type: 'output-predict', prompt: 'A search page echoes the query into the page via <code>innerHTML</code> with no escaping. The query in the URL is then crafted to include a script tag. What happened?',
              code: `<span class="com">// UNSAFE rendering example — do not do this</span>
container.innerHTML = <span class="str">"You searched for: "</span> + query;`,
              options: ['Nothing — innerHTML is safe', 'Reflected XSS — attacker-controlled markup executes in victim\'s browser', 'It is CSRF', 'The browser blocks it automatically'],
              correct: 1, explanation: 'innerHTML with untrusted input is the classic reflected XSS sink. SAFE alternative: textContent or an auto-escaping template.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — CSRF ============== */
    {
      id: 'sec-u9', name: 'Unit 9 · CSRF', description: 'Cross-Site Request Forgery',
      lessons: [
        {
          id: 'sec-u9-l1', name: 'CSRF and how to block it', icon: '🌀', xp: 20,
          challenges: [
            { type: 'concept', title: 'Tricking a logged-in browser', content: `<p>In a CSRF attack, the victim is already logged in to <code>bank.com</code>. They visit <code>evil.com</code>, which causes their browser to send a state-changing request to <code>bank.com</code> — automatically including session cookies.</p>
<p>Three modern defenses, used together:</p>
<div class="code-block"><span class="com">1. SameSite cookies</span>      Set-Cookie: ...; SameSite=Lax (or Strict)
<span class="com">2. CSRF token</span>            unique per-session token included on every
                                state-changing request, validated server-side
<span class="com">3. Re-auth on critical ops</span> step-up auth for high-value actions</div>` },
            { type: 'multiple-choice', prompt: 'CSRF is most directly enabled by:',
              options: [{text:'Weak passwords', code:false},{text:'Browsers automatically attaching cookies to cross-site requests', code:false},{text:'Insecure DB queries', code:false},{text:'Open ports', code:false}],
              correct: 1, explanation: 'Ambient credentials on cross-site requests are what makes CSRF possible.' },
            { type: 'true-false', statement: 'Setting <code>SameSite=Lax</code> on session cookies meaningfully reduces CSRF risk for most actions.', correct: true, explanation: 'Lax blocks cookies on cross-site POSTs and most subrequests. Strict is stronger but breaks some legitimate flows.' },
            { type: 'match-pairs', prompt: 'Match defense to mechanism.', leftLabel: 'Defense', rightLabel: 'How it works',
              pairs: [{left:'CSRF token', right:'Server checks a per-session unguessable value'},{left:'Double-submit cookie', right:'Cookie value must match a request value'},{left:'SameSite cookie', right:'Browser suppresses cookie on cross-site request'},{left:'Origin / Referer check', right:'Verify request came from your origin'}] },
            { type: 'multiple-choice', prompt: 'A bearer-token API (Authorization header, no cookies). What is the CSRF risk?',
              options: [{text:'Identical to cookie-based apps', code:false},{text:'Much lower — browsers do not auto-attach Authorization headers cross-origin', code:false},{text:'Worse, always', code:false},{text:'CSRF cannot exist for APIs', code:false}],
              correct: 1, explanation: 'CSRF needs ambient credentials. Headers added explicitly by JS are subject to CORS and not silently forwarded.' },
            { type: 'output-predict', prompt: 'A GET request that transfers money. Is this safe even with CSRF tokens checked on POST?',
              code: `GET /transfer?to=mallory&amount=1000`,
              options: ['Safe — GETs are read-only by convention', 'Unsafe — GETs should never have side effects; an &lt;img&gt; tag could trigger this from any page', 'Safe — browsers block this', 'Depends on the password length'],
              correct: 1, explanation: 'State-changing requests must use POST/PUT/PATCH/DELETE AND be CSRF-protected. GETs with side effects are a classic mistake.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Network attacks ============== */
    {
      id: 'sec-u10', name: 'Unit 10 · Network Attacks', description: 'MITM, ARP spoofing, DNS poisoning',
      lessons: [
        {
          id: 'sec-u10-l1', name: 'Threats on the wire', icon: '📡', xp: 20,
          challenges: [
            { type: 'concept', title: 'Why the network is not your friend', content: `<p>The internet route from A to B traverses many hops you do not control. Three classic concerns:</p>
<div class="code-block"><span class="com">Man-in-the-middle (MITM)</span>
  attacker sits between client and server, reads/modifies traffic
  defense: TLS with certificate validation, HSTS, certificate pinning where appropriate

<span class="com">ARP spoofing</span>  (local LAN attack)
  attacker poisons ARP tables to redirect traffic to themselves
  defense: switch port security, dynamic ARP inspection, encrypted protocols

<span class="com">DNS poisoning / spoofing</span>
  attacker corrupts DNS responses so a name resolves to attacker IP
  defense: DNSSEC, DNS over HTTPS/TLS, validate via TLS regardless</div>
<p>Notice the pattern: <strong>end-to-end encryption with authentication makes the network mostly irrelevant.</strong> If TLS is intact, MITM still cannot read or rewrite your traffic.</p>` },
            { type: 'multiple-choice', prompt: 'A user is on hotel Wi-Fi. The hotel is hostile. Which of these makes the network mostly safe to use anyway?',
              options: [{text:'Strong password on the laptop', code:false},{text:'HTTPS everywhere with proper certificate validation', code:false},{text:'Antivirus', code:false},{text:'A clear-text password manager', code:false}],
              correct: 1, explanation: 'Properly validated TLS protects content and integrity over an untrusted network.' },
            { type: 'true-false', statement: 'DNSSEC ensures the DNS record you received is the one the authoritative server signed.', correct: true, explanation: 'DNSSEC adds cryptographic signatures to DNS records — though it does not encrypt the queries themselves.' },
            { type: 'match-pairs', prompt: 'Pair attack to layer/protocol it abuses.', leftLabel: 'Attack', rightLabel: 'Layer / target',
              pairs: [{left:'ARP spoofing', right:'Local LAN'},{left:'DNS poisoning', right:'Name resolution'},{left:'MITM', right:'Any unauthenticated channel'},{left:'BGP hijacking', right:'Internet routing'}] },
            { type: 'multiple-choice', prompt: 'Certificate pinning means:',
              options: [{text:'Disabling HTTPS', code:false},{text:'Hard-coding the expected server cert / public key so a rogue CA cannot issue a working substitute', code:false},{text:'Caching certificates forever', code:false},{text:'Using shorter certs', code:false}],
              correct: 1, explanation: 'Pinning narrows trust from "any CA in the trust store" to "this specific cert/key" — used carefully, e.g. in mobile apps.' },
            { type: 'tap-tokens', prompt: 'Build the safest mantra.',
              tokens: ['encrypt','authenticate','everywhere','plaintext','only','sometimes'],
              correctOrder: ['encrypt','authenticate','everywhere'],
              explanation: 'Modern defense: end-to-end encryption + authentication on every channel.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Malware taxonomy ============== */
    {
      id: 'sec-u11', name: 'Unit 11 · Malware Taxonomy', description: 'Virus, worm, trojan, ransomware, rootkit',
      lessons: [
        {
          id: 'sec-u11-l1', name: 'Knowing the zoo', icon: '🦠', xp: 20,
          challenges: [
            { type: 'concept', title: 'A short field guide', content: `<div class="code-block"><span class="com">Virus</span>       attaches to host files; spreads when host runs
<span class="com">Worm</span>        self-propagates across networks without a host
<span class="com">Trojan</span>      disguised as benign; user runs it themselves
<span class="com">Ransomware</span>  encrypts files; demands payment for keys
<span class="com">Rootkit</span>     hides itself & other malware deep in the OS
<span class="com">Spyware</span>     covert data exfiltration
<span class="com">Adware</span>      forced ads (often a vector for worse)
<span class="com">Botnet</span>      compromised hosts controlled remotely (C2)</div>
<p>These categories overlap. Modern malware is usually a multi-stage package: a dropper (trojan) installs a rootkit that pulls down ransomware that exfiltrates via a botnet C2.</p>
<p><strong>Defenses</strong>: patching, least privilege, EDR/AV, network segmentation, immutable + offline backups, user training.</p>` },
            { type: 'match-pairs', prompt: 'Match malware to definition.', leftLabel: 'Type', rightLabel: 'Definition',
              pairs: [{left:'Worm', right:'Self-propagating across networks'},{left:'Trojan', right:'Disguised as benign'},{left:'Ransomware', right:'Encrypts files for payment'},{left:'Rootkit', right:'Hides itself in the OS'}] },
            { type: 'multiple-choice', prompt: 'A user downloads a "free game installer" that secretly installs a backdoor. This is best described as a:',
              options: [{text:'Worm', code:false},{text:'Trojan', code:false},{text:'Rootkit', code:false},{text:'Virus', code:false}],
              correct: 1, explanation: 'The user willingly ran a disguised binary — classic trojan.' },
            { type: 'true-false', statement: 'The single most effective defense against ransomware is having tested, offline backups.', correct: true, explanation: 'Backups (immutable, offline) make ransomware a cleanup problem rather than an extortion event. Combine with patching and least privilege.' },
            { type: 'multiple-choice', prompt: 'Which malware family is defined by SELF-propagation across networks without needing a host file?',
              options: [{text:'Virus', code:false},{text:'Worm', code:false},{text:'Trojan', code:false},{text:'Ransomware', code:false}],
              correct: 1, explanation: 'Morris worm (1988) is the canonical example.' },
            { type: 'match-pairs', prompt: 'Pair defense to threat.', leftLabel: 'Defense', rightLabel: 'Best against',
              pairs: [{left:'Offline backups', right:'Ransomware'},{left:'Patching', right:'Worms exploiting known CVEs'},{left:'Least privilege', right:'Lateral movement'},{left:'EDR / AV', right:'Known malicious binaries'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Social engineering & phishing ============== */
    {
      id: 'sec-u12', name: 'Unit 12 · Social Engineering', description: 'Phishing, recognition, DMARC',
      lessons: [
        {
          id: 'sec-u12-l1', name: 'Phishing & defenses', icon: '🎣', xp: 20,
          challenges: [
            { type: 'concept', title: 'The user is part of the attack surface', content: `<p>Most breaches still start with a person clicking, replying, or approving. Social engineering exploits trust, urgency, fear, and authority.</p>
<div class="code-block"><span class="com">Common red flags</span>
- urgency ("your account will be closed in 1 hour")
- mismatched sender vs display name
- look-alike domain (rn vs m, paypa1.com)
- unexpected attachment / link
- requests for credentials, MFA codes, or money
- "do not call HR, contact me only on this thread"</div>
<p><strong>Technical email controls:</strong></p>
<div class="code-block"><span class="com">SPF</span>     which servers may send mail "From: your.domain"
<span class="com">DKIM</span>    each outgoing message cryptographically signed
<span class="com">DMARC</span>   policy: how receivers should treat SPF/DKIM failures</div>
<p>SPF, DKIM, and DMARC together make spoofing your domain dramatically harder — but they do not stop look-alike domain attacks. Training plus phishing-resistant MFA (FIDO2/WebAuthn) closes most of the rest.</p>` },
            { type: 'multiple-choice', prompt: 'A phishing email arrives "from your CEO" asking for gift cards urgently. The strongest single defense your organization can deploy is:',
              options: [{text:'Better spam filtering', code:false},{text:'A culture of verifying unusual financial requests via a known second channel', code:false},{text:'Stronger antivirus', code:false},{text:'Disable email entirely', code:false}],
              correct: 1, explanation: 'Out-of-band verification (call the person on a known number) defeats most business-email-compromise attempts.' },
            { type: 'match-pairs', prompt: 'Match the email-auth acronym.', leftLabel: 'Term', rightLabel: 'Role',
              pairs: [{left:'SPF', right:'Lists allowed sending IPs for a domain'},{left:'DKIM', right:'Cryptographic signature on each message'},{left:'DMARC', right:'Policy + reporting for SPF/DKIM failures'},{left:'BIMI', right:'Brand logo display (post-DMARC)'}] },
            { type: 'true-false', statement: 'Phishing-resistant MFA (FIDO2/WebAuthn) cannot be defeated by a typical fake login page because the credential is bound to the real origin.', correct: true, explanation: 'WebAuthn signs an assertion that includes the actual origin — a phishing site\'s origin will not match.' },
            { type: 'multiple-choice', prompt: 'Which is MOST likely a phishing indicator?',
              options: [{text:'Email from a known colleague about a meeting', code:false},{text:'"Verify your account" link to a look-alike domain with strong urgency', code:false},{text:'A newsletter you subscribed to', code:false},{text:'A calendar invite from your manager', code:false}],
              correct: 1, explanation: 'Urgency + odd domain + credential request = phishing playbook.' },
            { type: 'tap-tokens', prompt: 'Build the DMARC trio.',
              tokens: ['SPF','DKIM','DMARC','TLS','SMTP','PGP'],
              correctOrder: ['SPF','DKIM','DMARC'],
              explanation: 'SPF + DKIM + DMARC = standard layered defenses against email spoofing.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Secure coding ============== */
    {
      id: 'sec-u13', name: 'Unit 13 · Secure Coding', description: 'Validation, least privilege, secrets',
      lessons: [
        {
          id: 'sec-u13-l1', name: 'Principles & practices', icon: '🧰', xp: 25,
          challenges: [
            { type: 'concept', title: 'Engineering security in, not bolting it on', content: `<div class="code-block"><span class="com">Input validation</span>
  whitelist (allow-list) of expected formats; reject everything else
  validate at the trust boundary, not throughout the call chain

<span class="com">Output encoding</span>
  encode for the SINK: HTML / JS / URL / SQL / shell

<span class="com">Least privilege</span>
  every process, account, key has the MINIMUM rights it needs

<span class="com">Secrets management</span>
  no secrets in source / repo / images / logs
  use a vault: AWS Secrets Manager, Vault, etc.
  rotate; audit access

<span class="com">Dependency hygiene</span>
  lock versions; subscribe to advisories; auto-patch
  run SCA (Software Composition Analysis) in CI

<span class="com">Defense in depth</span>
  assume any single layer can fail; stack independent controls</div>` },
            { type: 'multiple-choice', prompt: 'A developer hardcodes an API key into a JavaScript bundle shipped to users. The problem is:',
              options: [{text:'Bundles cannot have keys', code:false},{text:'The key is now public to anyone who opens DevTools — secret in a client = no secret', code:false},{text:'Performance', code:false},{text:'The key is too short', code:false}],
              correct: 1, explanation: 'Anything shipped to the client is fully readable. Use a backend that proxies the call and keeps the key server-side.' },
            { type: 'true-false', statement: 'Least privilege means giving every process and account the minimum rights it needs to do its job.', correct: true, explanation: 'Cleanest single sentence definition; underlies role separation, IAM, scoped tokens, and DB grants.' },
            { type: 'match-pairs', prompt: 'Match practice to category.', leftLabel: 'Practice', rightLabel: 'Category',
              pairs: [{left:'Allow-list validation', right:'Input handling'},{left:'Parameterized queries', right:'Output to SQL'},{left:'Vault-stored secrets', right:'Secrets management'},{left:'SCA in CI', right:'Dependency hygiene'}] },
            { type: 'multiple-choice', prompt: 'A new dependency adds 200 transitive packages. Best response?',
              options: [{text:'Merge and move on', code:false},{text:'Review the actual need; if accepted, lock versions, run SCA, monitor advisories', code:false},{text:'Disable HTTPS', code:false},{text:'Delete tests', code:false}],
              correct: 1, explanation: 'Modern supply chain attacks make dependency hygiene a core security practice.' },
            { type: 'fill-blank', prompt: 'A safe shell call from your code uses argv arrays, NOT a single concatenated string. Complete the safer form.',
              codeLines: [{html:'<span class="ty">Runtime</span>.getRuntime().<span class="fn">_BLANK_</span>(<span class="kw">new</span> <span class="ty">String</span>[]{<span class="str">"ls"</span>, <span class="str">"-la"</span>, userDir});'}],
              tokens: ['exec','eval','system','run'],
              correctAnswer: 'exec', explanation: 'Java\'s Runtime.exec(String[]) avoids shell interpretation. SAFE: argv form. UNSAFE: single-String form that goes through a shell.' },
            { type: 'reorder-code', prompt: 'Order the secret-handling lifecycle.',
              lines: [
                'Generate strong secret in a vault',
                'Application reads secret at runtime via IAM/identity',
                'Secret is rotated on a schedule or on suspected compromise',
                'Old secret is revoked once rotation is complete'
              ],
              correctOrder: [0,1,2,3] }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Incident response ============== */
    {
      id: 'sec-u14', name: 'Unit 14 · Incident Response', description: 'PICERL phases, forensics, logging',
      lessons: [
        {
          id: 'sec-u14-l1', name: 'PICERL & evidence', icon: '🚨', xp: 25,
          challenges: [
            { type: 'concept', title: 'A repeatable response process', content: `<div class="code-block"><span class="com">PICERL — six phases of IR</span>
P — Preparation        playbooks, on-call, comms, backups, training
I — Identification     "is this real? what is the scope?"
C — Containment        stop the bleeding; isolate
E — Eradication        remove attacker access; close root cause
R — Recovery           bring systems back, monitor closely
L — Lessons learned    blameless retrospective; update playbooks</div>
<p><strong>Chain of custody</strong> matters whenever the incident may end up in court or with regulators. Every piece of evidence has a documented trail: who handled it, when, how it was preserved.</p>
<p><strong>Logging</strong> is the foundation. Without enough logs (centralized, tamper-resistant, time-synchronized), you cannot identify, contain, or learn.</p>` },
            { type: 'reorder-code', prompt: 'Order the PICERL phases.',
              lines: [
                'Preparation',
                'Identification',
                'Containment',
                'Eradication',
                'Recovery',
                'Lessons learned'
              ],
              correctOrder: [0,1,2,3,4,5] },
            { type: 'multiple-choice', prompt: 'You discover an attacker active in a production database. The IMMEDIATE next step is usually:',
              options: [{text:'Powering off all servers', code:false},{text:'Containment — isolate the affected system to stop further damage while preserving evidence', code:false},{text:'Public disclosure', code:false},{text:'Restoring from backup', code:false}],
              correct: 1, explanation: 'After identification, contain first; restoration comes later, after eradication.' },
            { type: 'true-false', statement: 'A blameless post-incident review encourages people to share what really happened, leading to systemic fixes.', correct: true, explanation: 'Punitive cultures get cover-ups; blameless ones get learning.' },
            { type: 'match-pairs', prompt: 'Map PICERL phase to action.', leftLabel: 'Phase', rightLabel: 'Action',
              pairs: [{left:'Preparation', right:'Build playbooks before something breaks'},{left:'Containment', right:'Network-isolate the affected host'},{left:'Eradication', right:'Remove implants, rotate credentials'},{left:'Lessons learned', right:'Update playbooks & controls'}] },
            { type: 'type-answer', prompt: 'What does the C in PICERL stand for?', accept: ['containment','Containment'], explanation: 'Containment.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Compliance & frameworks ============== */
    {
      id: 'sec-u15', name: 'Unit 15 · Compliance & Frameworks', description: 'NIST CSF, ISO 27001, GDPR, PCI, HIPAA',
      lessons: [
        {
          id: 'sec-u15-l1', name: 'Names you will meet', icon: '📜', xp: 20,
          challenges: [
            { type: 'concept', title: 'The compliance map', content: `<div class="code-block"><span class="com">NIST CSF</span>      US framework — Identify, Protect, Detect, Respond, Recover
<span class="com">ISO 27001</span>     international ISMS standard with auditable controls (Annex A)
<span class="com">SOC 2</span>         AICPA report on Trust Services Criteria (security, availability, etc.)
<span class="com">GDPR</span>          EU data-protection law; personal data of EU residents
<span class="com">PCI-DSS</span>       payment-card data; mandatory for anyone handling card data
<span class="com">HIPAA</span>         US healthcare patient data
<span class="com">CCPA / CPRA</span>   California consumer privacy
<span class="com">FedRAMP</span>       US federal cloud authorization</div>
<p>These are not contradictory — they overlap heavily. A solid ISO 27001 ISMS gives you most of what NIST CSF asks for, which gives you most of what SOC 2 wants. Pick the one your customers require and align the rest.</p>` },
            { type: 'match-pairs', prompt: 'Match framework to scope.', leftLabel: 'Framework', rightLabel: 'Scope',
              pairs: [{left:'GDPR', right:'EU personal data'},{left:'HIPAA', right:'US healthcare data'},{left:'PCI-DSS', right:'Payment card data'},{left:'NIST CSF', right:'General US framework'}] },
            { type: 'multiple-choice', prompt: 'You are launching a SaaS that will store EU residents\' personal data. Which is FIRST on your compliance list?',
              options: [{text:'HIPAA', code:false},{text:'GDPR', code:false},{text:'PCI-DSS', code:false},{text:'FedRAMP', code:false}],
              correct: 1, explanation: 'GDPR governs personal data of people in the EU regardless of where the company is.' },
            { type: 'true-false', statement: 'NIST CSF\'s five functions are Identify, Protect, Detect, Respond, Recover.', correct: true, explanation: 'Memorize them — they map cleanly to the practical security lifecycle.' },
            { type: 'multiple-choice', prompt: 'You process credit-card numbers. Which standard is mandatory?',
              options: [{text:'HIPAA', code:false},{text:'PCI-DSS', code:false},{text:'COPPA', code:false},{text:'FERPA', code:false}],
              correct: 1, explanation: 'PCI-DSS is the card-brand standard for anyone storing, processing, or transmitting card data.' },
            { type: 'tap-tokens', prompt: 'List the five NIST CSF functions in order.',
              tokens: ['Identify','Protect','Detect','Respond','Recover','Encrypt','Audit'],
              correctOrder: ['Identify','Protect','Detect','Respond','Recover'],
              explanation: 'IPDRR — the five core functions of the NIST Cybersecurity Framework.' }
          ]
        }
      ]
    }

  ]
});

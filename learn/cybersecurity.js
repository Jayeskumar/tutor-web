LEARN('cybersecurity', {
  intro: 'A defensive tour of the security landscape — how attacks work, and how to recognize and stop them.',
  chapters: [

    /* ============ Chapter 1 — CIA & mindset ============ */
    {
      id: 'sec-c1',
      title: 'CIA Triad & Security Mindset',
      icon: '🛡️',
      sections: [
        { type: 'heading', text: 'Security in three letters', level: 1 },
        { type: 'para', html: 'Every security control you will ever deploy exists to defend one of three properties of information: <strong>Confidentiality</strong>, <strong>Integrity</strong>, or <strong>Availability</strong>. Together they are called the <em>CIA triad</em>, and they form the mental map for the rest of this course.' },

        { type: 'image', alt: 'CIA Triad diagram',
          svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.tri{fill:#fee2e2;stroke:#b91c1c;stroke-width:2}.lbl{fill:#7f1d1d;font-family:Inter,sans-serif;font-weight:700;font-size:18px;text-anchor:middle}.sub{fill:#450a0a;font-family:Inter,sans-serif;font-size:12px;text-anchor:middle}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:20px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="300" y="28" class="t">The CIA Triad</text>
<polygon points="300,60 540,320 60,320" class="tri"/>
<text x="300" y="100" class="lbl">Confidentiality</text>
<text x="300" y="120" class="sub">Only authorized eyes</text>
<text x="120" y="305" class="lbl">Integrity</text>
<text x="120" y="325" class="sub">No tampering</text>
<text x="480" y="305" class="lbl">Availability</text>
<text x="480" y="325" class="sub">Reachable when needed</text>
<text x="300" y="230" class="sub">Every control defends</text>
<text x="300" y="248" class="sub">one of these three</text>
</svg>` },

        { type: 'heading', text: 'What each pillar means', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Confidentiality</strong> — information is disclosed only to those authorized to see it. Defenses: encryption, access control, MFA.',
          '<strong>Integrity</strong> — information is not altered (by accident or attack) without authorization. Defenses: hashing, signatures, checksums, immutable logs.',
          '<strong>Availability</strong> — information and services are reachable to authorized users when they need them. Defenses: redundancy, backups, DDoS mitigation, capacity planning.'
        ] },

        { type: 'callout', kind: 'tip', html: 'When you encounter a new control or attack, ask: "Which of CIA does this defend or violate?" It clarifies almost every security question.' },

        { type: 'heading', text: 'The defender mindset', level: 2 },
        { type: 'para', html: 'A productive defender does not chase magic bullets. Instead, they:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Assume breach</strong> — design as if one layer will fail. Stack independent controls.',
          '<strong>Reduce attack surface</strong> — close ports, prune dependencies, remove unused features.',
          '<strong>Apply least privilege</strong> — every account/process/token has the minimum it needs.',
          '<strong>Make it observable</strong> — without logs you cannot detect, contain, or learn.',
          '<strong>Plan for the bad day</strong> — backups you have actually restored, runbooks you have practiced.'
        ] },

        { type: 'heading', text: 'Threat modeling — STRIDE in one slide', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">S</span>poofing                  — pretending to be someone else
<span class="com">T</span>ampering                 — modifying data
<span class="com">R</span>epudiation               — denying you did something
<span class="com">I</span>nformation disclosure    — leaking secrets
<span class="com">D</span>enial of service         — making things unavailable
<span class="com">E</span>levation of privilege    — gaining unauthorized access` },
        { type: 'para', html: 'Run STRIDE during design. For each component and trust boundary, ask: how could each of these six go wrong here?' },

        { type: 'callout', kind: 'info', html: 'Threat modeling pays off most when done <em>early</em> — fixing a flaw on a whiteboard costs a meeting; fixing it after launch can cost a quarter.' }
      ]
    },

    /* ============ Chapter 2 — Crypto basics ============ */
    {
      id: 'sec-c2',
      title: 'Cryptography Basics',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Three primitives that power everything', level: 1 },
        { type: 'para', html: 'Almost all modern security builds on three crypto primitives: <strong>symmetric encryption</strong> (AES), <strong>asymmetric encryption</strong> (RSA / ECC), and <strong>hashing</strong> (SHA-2 / SHA-3). Knowing what each one does — and does <em>not</em> do — saves you from many design mistakes.' },

        { type: 'heading', text: 'Symmetric: one shared key', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">AES-256-GCM</span>     modern default symmetric cipher
- one secret key, used for encrypt AND decrypt
- very fast (often hardware-accelerated)
- problem: how do both sides get the same key safely?` },
        { type: 'para', html: 'Symmetric ciphers are the workhorse for bulk data — disk encryption, TLS application data, encrypted backups. The hard part is <strong>key distribution</strong>.' },

        { type: 'heading', text: 'Asymmetric: a pair of keys', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">RSA / ECC / Ed25519</span>      public-key cryptography

public key   →  share freely; used to ENCRYPT to you or VERIFY your signatures
private key  →  guard absolutely; used to DECRYPT and SIGN` },
        { type: 'para', html: 'Asymmetric is slow compared to symmetric, but it solves a problem symmetric cannot: you can authenticate or send a secret to someone you have never met without a pre-shared key.' },

        { type: 'callout', kind: 'info', html: 'Real systems combine them — a <strong>hybrid</strong>: use asymmetric to exchange a fresh symmetric key, then use symmetric for the heavy data. This is what TLS does.' },

        { type: 'heading', text: 'Hashing: one-way fingerprints', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">SHA-256("Cybersecurity 101") =</span>
b9c7...e3a1   (256 bits, hex-encoded)

properties:
  deterministic       — same input → same hash
  one-way             — no efficient way to invert
  collision-resistant — finding two inputs with the same hash is infeasible` },
        { type: 'list', kind: 'check', items: [
          'Use hashes to verify <strong>integrity</strong> — "this file is what I sent you."',
          'Do <em>not</em> use hashes for confidentiality — they are not encryption.',
          'Do <em>not</em> roll your own crypto — use vetted libraries and standard primitives.'
        ] },

        { type: 'callout', kind: 'danger', html: '<strong>MD5 and SHA-1 are broken.</strong> They have practical collision attacks and must not be used for any new security purpose. Migrate any legacy use to SHA-256 or SHA-3.' },

        { type: 'heading', text: 'Authenticated encryption is the default', level: 2 },
        { type: 'para', html: 'Plain encryption can be modified in transit without the recipient knowing. <strong>Authenticated Encryption with Associated Data (AEAD)</strong> modes like AES-GCM and ChaCha20-Poly1305 combine encryption with integrity — they detect tampering as a built-in feature.' },

        { type: 'divider' },
        { type: 'callout', kind: 'tip', html: 'Defaults to remember: <strong>AES-256-GCM</strong> for bulk encryption, <strong>Ed25519</strong> or <strong>ECDSA-P256</strong> for signatures, <strong>SHA-256</strong> (or SHA-3) for hashing, and <strong>HKDF</strong> for key derivation. Anything else needs justification.' }
      ]
    },

    /* ============ Chapter 3 — Password security ============ */
    {
      id: 'sec-c3',
      title: 'Password Security',
      icon: '🔑',
      sections: [
        { type: 'heading', text: 'How NOT to store passwords', level: 1 },
        { type: 'para', html: 'Every few weeks another breach makes news because a company stored passwords poorly. The strange thing: doing it right has been a solved problem for over a decade.' },

        { type: 'image', alt: 'Password cracking timeline',
          svg: `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.row{fill:#fff7ed;stroke:#9a3412;stroke-width:1.5}.lbl{fill:#7c2d12;font-family:Inter,sans-serif;font-weight:700;font-size:13px}.val{fill:#1f2937;font-family:Inter,sans-serif;font-size:12px}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}.bar{fill:#dc2626}</style>
</defs>
<text x="400" y="24" class="t">Time to crack a common 8-char password (single GPU rig)</text>
<rect x="40" y="50" width="720" height="30" class="row"/>
<text x="50" y="70" class="lbl">plaintext stored</text>
<text x="500" y="70" class="val">instant — read directly</text>
<rect x="40" y="90" width="720" height="30" class="row"/>
<text x="50" y="110" class="lbl">MD5 unsalted</text>
<text x="500" y="110" class="val">under a second (rainbow tables / dictionary)</text>
<rect x="40" y="130" width="720" height="30" class="row"/>
<text x="50" y="150" class="lbl">SHA-256 unsalted</text>
<text x="500" y="150" class="val">under a second (no salt = batchable)</text>
<rect x="40" y="170" width="720" height="30" class="row"/>
<text x="50" y="190" class="lbl">SHA-256 + per-user salt</text>
<text x="500" y="190" class="val">minutes to hours (no precompute, still fast hash)</text>
<rect x="40" y="210" width="720" height="30" class="row"/>
<text x="50" y="230" class="lbl">bcrypt / scrypt / Argon2 (tuned)</text>
<text x="500" y="230" class="val">years (the right answer)</text>
<text x="400" y="265" class="val" text-anchor="middle">illustrative orders of magnitude — exact times depend on hardware &amp; password choice</text>
</svg>` },

        { type: 'heading', text: 'Salting', level: 2 },
        { type: 'para', html: 'A <strong>salt</strong> is a random per-user value mixed into the hash. Two users with the same password get different stored hashes — which kills precomputed rainbow tables.' },
        { type: 'code', lang: 'text', code: `salt = random_bytes(16)              <span class="com">// unique per user, stored alongside the hash</span>
stored = salt + hash(salt + password) <span class="com">// (conceptual; real PHFs encode this for you)</span>` },

        { type: 'heading', text: 'Slow on purpose', level: 2 },
        { type: 'para', html: 'Even salted, a fast hash like SHA-256 is the wrong tool — modern GPUs do billions of hashes per second. A purpose-built <strong>password hashing function (PHF)</strong> is intentionally slow and tunable.' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Argon2id</strong> — winner of the Password Hashing Competition; current default.',
          '<strong>scrypt</strong> — memory-hard, designed to resist GPU/ASIC attacks.',
          '<strong>bcrypt</strong> — older, well-understood, still acceptable.',
          'PBKDF2 — older, acceptable when nothing else is available (e.g., FIPS-only environments), but a weaker last resort.'
        ] },

        { type: 'heading', text: 'Peppering (optional extra)', level: 2 },
        { type: 'para', html: 'A <strong>pepper</strong> is a secret value held <em>outside</em> the database — for example, in an HSM or secrets manager. Even with a full DB dump, an attacker still needs the pepper to brute-force. Use it as defense-in-depth, never as a replacement for a real PHF.' },

        { type: 'heading', text: 'A safe verification call', level: 2 },
        { type: 'code', lang: 'java', code: `<span class="com">// SAFE — verify with the same PHF; the salt/parameters are encoded in storedHash</span>
<span class="kw">if</span> (<span class="ty">BCrypt</span>.<span class="fn">checkpw</span>(submittedPassword, storedHash)) {
    <span class="com">// success</span>
} <span class="kw">else</span> {
    <span class="com">// generic failure — do not reveal which part was wrong</span>
}` },

        { type: 'callout', kind: 'warn', html: 'Never compare hashes with <code>==</code> if you do roll any custom check — use a constant-time compare. Timing leaks are real.' },

        { type: 'callout', kind: 'danger', html: '<strong>Do not migrate by re-hashing on next login only.</strong> Combine: wrap your old weak hashes inside a strong PHF immediately ("upgrade hash"), and re-hash from plaintext on next successful login.' }
      ]
    },

    /* ============ Chapter 4 — AuthN/AuthZ, MFA, OAuth, JWT ============ */
    {
      id: 'sec-c4',
      title: 'Authentication & Authorization',
      icon: '🪪',
      sections: [
        { type: 'heading', text: 'Two questions that get confused', level: 1 },
        { type: 'para', html: 'Authentication answers <strong>"Who are you?"</strong>. Authorization answers <strong>"What are you allowed to do?"</strong>. Conflating them produces some of the most common — and worst — security bugs (think IDOR: logged-in users reading other users\' data).' },

        { type: 'heading', text: 'Three authentication factors', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Something you know</strong> — password, PIN, secret answer.',
          '<strong>Something you have</strong> — phone with TOTP, hardware key (FIDO2), smart card.',
          '<strong>Something you are</strong> — fingerprint, face, iris.'
        ] },
        { type: 'para', html: '<strong>MFA</strong> requires factors from <em>different</em> categories. Two passwords is not MFA; a password plus an authenticator app is.' },

        { type: 'callout', kind: 'warn', html: 'SMS-based one-time codes are better than nothing, but vulnerable to SIM-swap attacks. Prefer authenticator apps (TOTP) and ideally hardware keys / WebAuthn for high-value accounts.' },

        { type: 'heading', text: 'OAuth 2.0 — delegation', level: 2 },
        { type: 'para', html: 'OAuth 2.0 lets a user grant a third-party app limited access to their account at another service, without sharing their password. The authorization-code flow is the modern default for web apps.' },
        { type: 'code', lang: 'text', code: `<span class="com">OAuth 2.0 Authorization Code (simplified)</span>

User → App         click "Sign in with Provider"
App  → Provider    redirect to /authorize?client_id=...&scope=...
User ↔ Provider    login + consent
Provider → App     redirect back with ?code=abc
App  → Provider    POST /token  (code + client_secret) → access_token
App  → API         Authorization: Bearer access_token` },

        { type: 'heading', text: 'OIDC — identity on top of OAuth', level: 2 },
        { type: 'para', html: 'OAuth alone tells you what an app may do; it does <em>not</em> tell you who the user is. <strong>OpenID Connect (OIDC)</strong> layers identity onto OAuth by issuing an <code>id_token</code> (a JWT) with verified user claims (subject, email, etc.).' },

        { type: 'heading', text: 'JWT — a token format', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">A JWT is three base64url segments joined by dots</span>

header  . payload . signature
{alg,typ}  {claims}   HMAC or signature over header.payload

example:
  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTcyMDB9.9aLBs...` },

        { type: 'callout', kind: 'danger', html: '<strong>JWT pitfalls to know cold:</strong><br>• <code>"alg":"none"</code> — naive validators accept unsigned tokens. Always pin to the expected algorithm.<br>• Weak HS256 secrets — brute-forced offline. Use a long random secret or RS256/ES256.<br>• Long-lived tokens with no revocation strategy — a stolen JWT works until it expires.<br>• Confusing signed with encrypted — JWT payloads are readable. Use JWE if you need encryption.' },

        { type: 'heading', text: 'Sessions vs tokens', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Server sessions (cookie)</strong> — easy to revoke, stateful, CSRF surface to manage.',
          '<strong>Bearer tokens (JWT)</strong> — stateless, scales horizontally, harder to revoke before expiry, less CSRF surface but more theft surface.',
          'For most web apps, an <code>HttpOnly; Secure; SameSite</code> session cookie is the simplest correct choice.'
        ] }
      ]
    },

    /* ============ Chapter 5 — TLS / HTTPS ============ */
    {
      id: 'sec-c5',
      title: 'TLS & HTTPS',
      icon: '🔒',
      sections: [
        { type: 'heading', text: 'What TLS actually guarantees', level: 1 },
        { type: 'para', html: '<strong>TLS</strong> (Transport Layer Security) is the protocol that turns HTTP into HTTPS. It gives you three guarantees on the channel:' },
        { type: 'list', kind: 'check', items: [
          '<strong>Confidentiality</strong> — eavesdroppers see only encrypted bytes.',
          '<strong>Integrity</strong> — any tampering breaks the connection.',
          '<strong>Server authenticity</strong> — the server controlling the connection holds the private key for the certified domain.'
        ] },

        { type: 'image', alt: 'TLS 1.3 handshake',
          svg: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.party{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.pl{fill:#1e3a8a;font-family:Inter,sans-serif;font-weight:700;font-size:14px;text-anchor:middle}.arr{stroke:#1d4ed8;stroke-width:1.5;fill:none}.lbl{fill:#1e293b;font-family:Inter,sans-serif;font-size:12px}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}.ok{fill:#16a34a;font-family:Inter,sans-serif;font-size:12px;font-weight:700}</style>
</defs>
<text x="380" y="24" class="t">TLS 1.3 handshake (simplified)</text>
<rect x="40" y="50" width="120" height="40" rx="6" class="party"/>
<text x="100" y="76" class="pl">Client</text>
<rect x="600" y="50" width="120" height="40" rx="6" class="party"/>
<text x="660" y="76" class="pl">Server</text>

<line x1="100" y1="110" x2="660" y2="110" class="arr" marker-end="url(#a)"/>
<text x="380" y="105" class="lbl" text-anchor="middle">ClientHello — cipher suites, key share, SNI</text>

<line x1="660" y1="150" x2="100" y2="150" class="arr" marker-end="url(#a)"/>
<text x="380" y="145" class="lbl" text-anchor="middle">ServerHello + certificate + key share</text>

<text x="380" y="180" class="lbl" text-anchor="middle">→ both derive the same session key</text>

<line x1="100" y1="220" x2="660" y2="220" class="arr" marker-end="url(#a)"/>
<text x="380" y="215" class="lbl" text-anchor="middle">Finished (encrypted)</text>

<line x1="660" y1="260" x2="100" y2="260" class="arr" marker-end="url(#a)"/>
<text x="380" y="255" class="lbl" text-anchor="middle">Application data (encrypted, authenticated)</text>
<text x="380" y="295" class="ok" text-anchor="middle">✓ Confidential · ✓ Integrity-protected · ✓ Server authenticated</text>
<defs><marker id="a" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1d4ed8"/></marker></defs>
</svg>` },

        { type: 'heading', text: 'PKI in one paragraph', level: 2 },
        { type: 'para', html: 'A certificate binds a domain name to a public key, and is signed by a <strong>Certificate Authority (CA)</strong>. Your browser ships with a list of trusted root CAs; roots sign intermediates; intermediates sign site (<em>leaf</em>) certs. This chain is <strong>Public Key Infrastructure (PKI)</strong>.' },

        { type: 'code', lang: 'text', code: `<span class="com">Trust chain</span>

[ Root CA ]    in browser/OS trust store
     |
     v signs
[ Intermediate CA ]
     |
     v signs
[ Leaf cert for www.example.com ]   ← presented during the TLS handshake` },

        { type: 'heading', text: 'Common HTTPS hazards', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Mixed content</strong> — HTTPS page that loads HTTP scripts/iframes. Browsers block "active" mixed content; fix all references to use HTTPS.',
          '<strong>Expired certificates</strong> — automate renewal (e.g., ACME / Let\'s Encrypt) and alert on impending expiry.',
          '<strong>Insecure downgrades</strong> — use <strong>HSTS</strong> to tell browsers "always HTTPS for this domain."',
          '<strong>Old cipher suites</strong> — disable TLS 1.0/1.1; prefer TLS 1.2+ with modern AEAD ciphers.',
          '<strong>Misissued certs</strong> — monitor Certificate Transparency logs for your domain.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Free, automated TLS is the default now. Use Let\'s Encrypt (or your cloud\'s managed certs) and rotate frequently. There is no good reason to operate without HTTPS in 2025+.' }
      ]
    },

    /* ============ Chapter 6 — OWASP Top 10 ============ */
    {
      id: 'sec-c6',
      title: 'OWASP Top 10',
      icon: '🔟',
      sections: [
        { type: 'heading', text: 'The web\'s greatest hits', level: 1 },
        { type: 'para', html: 'The <strong>OWASP Top 10</strong> is a periodically updated list of the most common categories of web-app risk. It is not exhaustive — but if your app is solid against all ten, you have removed a massive portion of typical attack surface.' },

        { type: 'image', alt: 'OWASP Top 10 grid',
          svg: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fee2e2;stroke:#b91c1c;stroke-width:1.5}.n{fill:#7f1d1d;font-family:Inter,sans-serif;font-weight:700;font-size:14px}.l{fill:#1f2937;font-family:Inter,sans-serif;font-size:12px}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="400" y="24" class="t">OWASP Top 10 (2021)</text>
<g>
<rect x="20" y="50" width="240" height="55" rx="6" class="b"/><text x="32" y="72" class="n">A01</text><text x="70" y="72" class="l">Broken Access Control</text><text x="70" y="92" class="l">users acting beyond their rights</text>
<rect x="280" y="50" width="240" height="55" rx="6" class="b"/><text x="292" y="72" class="n">A02</text><text x="330" y="72" class="l">Cryptographic Failures</text><text x="330" y="92" class="l">weak / missing crypto for data</text>
<rect x="540" y="50" width="240" height="55" rx="6" class="b"/><text x="552" y="72" class="n">A03</text><text x="590" y="72" class="l">Injection</text><text x="590" y="92" class="l">SQLi, NoSQLi, OS, LDAP</text>

<rect x="20" y="115" width="240" height="55" rx="6" class="b"/><text x="32" y="137" class="n">A04</text><text x="70" y="137" class="l">Insecure Design</text><text x="70" y="157" class="l">missing controls by design</text>
<rect x="280" y="115" width="240" height="55" rx="6" class="b"/><text x="292" y="137" class="n">A05</text><text x="330" y="137" class="l">Security Misconfiguration</text><text x="330" y="157" class="l">defaults, debug, open buckets</text>
<rect x="540" y="115" width="240" height="55" rx="6" class="b"/><text x="552" y="137" class="n">A06</text><text x="590" y="137" class="l">Vulnerable Components</text><text x="590" y="157" class="l">outdated deps with known CVEs</text>

<rect x="20" y="180" width="240" height="55" rx="6" class="b"/><text x="32" y="202" class="n">A07</text><text x="70" y="202" class="l">Auth Failures</text><text x="70" y="222" class="l">weak login, session, recovery</text>
<rect x="280" y="180" width="240" height="55" rx="6" class="b"/><text x="292" y="202" class="n">A08</text><text x="330" y="202" class="l">Integrity Failures</text><text x="330" y="222" class="l">untrusted CI/CD, plugins, updates</text>
<rect x="540" y="180" width="240" height="55" rx="6" class="b"/><text x="552" y="202" class="n">A09</text><text x="590" y="202" class="l">Logging &amp; Monitoring</text><text x="590" y="222" class="l">cannot detect what you cannot see</text>

<rect x="280" y="245" width="240" height="55" rx="6" class="b"/><text x="292" y="267" class="n">A10</text><text x="330" y="267" class="l">SSRF</text><text x="330" y="287" class="l">server tricked to fetch attacker URL</text>
</g>
<text x="400" y="335" class="l" text-anchor="middle">Not priority order — your risk depends on your context</text>
</svg>` },

        { type: 'heading', text: 'How to use the list', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Treat it as a <strong>checklist for design and review</strong>, not a recipe.',
          'For each category, ask: "Could this happen here? What would stop it?"',
          'Most categories are <strong>preventable with framework defaults</strong> — your job is not to disable them.',
          'Map findings to categories during code review so coverage becomes visible.'
        ] },

        { type: 'callout', kind: 'info', html: 'The Top 10 categories are <em>not</em> mutually exclusive. A single bug can sit at the intersection of A01 (access control) and A03 (injection), for example.' },

        { type: 'heading', text: 'Quick mitigation hints', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">A01 Broken Access Control</span>     server-side authorization on every action; deny by default
<span class="com">A02 Cryptographic Failures</span>    use AEAD, current algorithms, key management
<span class="com">A03 Injection</span>                 parameterized queries; safe APIs; context encoding
<span class="com">A04 Insecure Design</span>           threat-model up front; security stories in backlog
<span class="com">A05 Misconfiguration</span>          harden by default; turn off debug; secure baselines
<span class="com">A06 Vulnerable Components</span>     SCA in CI; lockfiles; automated update PRs
<span class="com">A07 Auth Failures</span>             MFA; rate limiting; account-lockout backoff; session hygiene
<span class="com">A08 Integrity Failures</span>        signed releases; CI provenance; verified plugins
<span class="com">A09 Logging Failures</span>          structured central logs; alert on auth anomalies
<span class="com">A10 SSRF</span>                      allow-list outbound URLs; block link-local; metadata endpoint controls` }
      ]
    },

    /* ============ Chapter 7 — SQL injection ============ */
    {
      id: 'sec-c7',
      title: 'SQL Injection',
      icon: '💉',
      sections: [
        { type: 'heading', text: 'The classic that still wins', level: 1 },
        { type: 'para', html: 'SQL injection has been on every "top web risks" list for over twenty years and is still routinely exploited. The good news: the fix is mechanical and complete.' },

        { type: 'heading', text: 'Root cause: data interpreted as code', level: 2 },
        { type: 'para', html: 'SQL injection is what happens when attacker-controlled input is treated as part of the SQL query string. The database cannot tell where the developer\'s SQL ends and the user\'s input begins.' },

        { type: 'code', lang: 'java', code: `<span class="com">// SAFE — parameterized query (do this)</span>
<span class="kw">String</span> sql = <span class="str">"SELECT id, name FROM users WHERE email = ? AND active = ?"</span>;
<span class="ty">PreparedStatement</span> ps = conn.<span class="fn">prepareStatement</span>(sql);
ps.<span class="fn">setString</span>(<span class="num">1</span>, email);
ps.<span class="fn">setBoolean</span>(<span class="num">2</span>, <span class="kw">true</span>);
<span class="ty">ResultSet</span> rs = ps.<span class="fn">executeQuery</span>();
<span class="com">// the DB compiles the query template ONCE; parameters travel separately and are never re-parsed as SQL</span>` },

        { type: 'code', lang: 'java', code: `<span class="com">// UNSAFE — string concatenation (do NOT do this — shown only to illustrate the anti-pattern)</span>
<span class="kw">String</span> sql = <span class="str">"SELECT id, name FROM users WHERE email = '"</span> + email + <span class="str">"'"</span>;
<span class="ty">Statement</span> st = conn.<span class="fn">createStatement</span>();
<span class="ty">ResultSet</span> rs = st.<span class="fn">executeQuery</span>(sql);
<span class="com">// whatever the user typed becomes part of the SQL the DB executes</span>` },

        { type: 'callout', kind: 'danger', html: 'No amount of "escaping single quotes" reliably matches the DB\'s parser. Switch to parameterized queries. Period.' },

        { type: 'heading', text: 'ORMs help — if you use them correctly', level: 2 },
        { type: 'para', html: 'Modern ORMs (Hibernate, ActiveRecord, Django ORM, SQLAlchemy, Prisma) build prepared statements under the hood. The trap is reaching into the raw-SQL escape hatch:' },
        { type: 'code', lang: 'java', code: `<span class="com">// SAFE — ORM binds named parameters</span>
em.<span class="fn">createQuery</span>(<span class="str">"SELECT u FROM User u WHERE u.email = :email"</span>)
  .<span class="fn">setParameter</span>(<span class="str">"email"</span>, email)
  .<span class="fn">getResultList</span>();

<span class="com">// UNSAFE — concatenating into raw SQL inside the ORM is identical to raw JDBC concat</span>
em.<span class="fn">createNativeQuery</span>(<span class="str">"SELECT * FROM users WHERE email = '"</span> + email + <span class="str">"'"</span>);` },

        { type: 'heading', text: 'Defense in depth', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Parameterized queries</strong> — the primary fix; everything else is a backup.',
          '<strong>Least-privilege DB users</strong> — the web app account does not need DROP TABLE.',
          '<strong>Input validation</strong> — reject obviously bad inputs at the edge (length, charset, format).',
          '<strong>Web Application Firewall (WAF)</strong> — useful as a tripwire, never the only line of defense.',
          '<strong>Monitoring</strong> — alert on suspicious patterns (sudden bursts of failures, errors in DB logs).'
        ] },

        { type: 'callout', kind: 'tip', html: 'In code review, search for any SQL string built with <code>+</code> or template interpolation. Treat each match as a bug to fix.' }
      ]
    },

    /* ============ Chapter 8 — XSS ============ */
    {
      id: 'sec-c8',
      title: 'Cross-Site Scripting (XSS)',
      icon: '🧪',
      sections: [
        { type: 'heading', text: 'When your site runs the attacker\'s JavaScript', level: 1 },
        { type: 'para', html: 'XSS is the same root cause as SQLi but in a different sink: attacker-controlled data ends up parsed and executed in another user\'s browser, in <em>your</em> origin. Because it runs in your origin, it has the same access to cookies and APIs as your own front end.' },

        { type: 'heading', text: 'Three flavors', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">Stored XSS</span>     payload lives on the server (post, profile, comment)
              every viewer of that page executes it
<span class="com">Reflected XSS</span>  payload bounces off a parameter (search query, error message)
              attacker tricks victim into clicking a crafted link
<span class="com">DOM-based XSS</span>  payload never touches the server
              client-side JS writes attacker-controlled data unsafely into the DOM` },

        { type: 'heading', text: 'Output encoding is the primary fix', level: 2 },
        { type: 'para', html: 'For every place you render data into the page, you need <em>context-appropriate</em> encoding:' },
        { type: 'list', kind: 'check', items: [
          'Rendering into <strong>HTML body</strong> — HTML-encode (<code>&amp;lt;</code> for <code>&lt;</code>, etc.).',
          'Rendering into <strong>HTML attribute</strong> — attribute-encode.',
          'Rendering into <strong>JavaScript</strong> — JS-encode (and avoid this whenever possible).',
          'Rendering into <strong>URL</strong> — URL-encode each component.'
        ] },

        { type: 'code', lang: 'text', code: `<span class="com">// SAFE — modern frameworks auto-escape by default</span>
React JSX:        &lt;div&gt;{userName}&lt;/div&gt;
Vue:              &lt;div&gt;{{ userName }}&lt;/div&gt;
Angular:          &lt;div&gt;{{ userName }}&lt;/div&gt;

<span class="com">// UNSAFE sinks — avoid with untrusted input</span>
element.innerHTML = userInput;
React:            dangerouslySetInnerHTML
Vue:              v-html
document.write(userInput);
eval(userInput);` },

        { type: 'heading', text: 'Content Security Policy (CSP)', level: 2 },
        { type: 'para', html: 'CSP is a server-sent header that tells the browser which sources are allowed for scripts, styles, frames, etc. A strict CSP turns many XSS bugs into non-events.' },
        { type: 'code', lang: 'text', code: `<span class="com">// example response header</span>
Content-Security-Policy: default-src 'self';
  script-src 'self' https://cdn.example.com;
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';` },

        { type: 'callout', kind: 'warn', html: 'CSP is defense-in-depth, not a substitute for fixing XSS. Avoid <code>\'unsafe-inline\'</code> and <code>\'unsafe-eval\'</code> in <code>script-src</code> — they re-open the door CSP is supposed to close.' },

        { type: 'heading', text: 'Cookie hygiene', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<code>HttpOnly</code> — JS cannot read the cookie (stops session theft via XSS).',
          '<code>Secure</code> — cookie only sent over HTTPS.',
          '<code>SameSite=Lax</code> or <code>Strict</code> — limits cross-site sending; helps CSRF too.',
          'Short, sliding lifetimes; rotate on privilege change.'
        ] },

        { type: 'callout', kind: 'danger', html: '<strong>HttpOnly does not fix XSS.</strong> It just stops the attacker reading the cookie. An XSS bug still lets the attacker post requests, scrape the page, replace the UI, log keystrokes, etc.' }
      ]
    },

    /* ============ Chapter 9 — CSRF ============ */
    {
      id: 'sec-c9',
      title: 'Cross-Site Request Forgery (CSRF)',
      icon: '🌀',
      sections: [
        { type: 'heading', text: 'Riding the user\'s session', level: 1 },
        { type: 'para', html: 'In a CSRF attack, the victim is already logged in to <code>bank.com</code>. They visit a malicious page that causes their browser to submit a request to <code>bank.com</code> — and the browser, helpfully, sends along their session cookie.' },

        { type: 'code', lang: 'text', code: `<span class="com">Conceptual flow</span>

  victim    ───►  bank.com   (logs in; gets session cookie)
  victim    ───►  evil.com   (sees a page that triggers a request)
  browser   ───►  bank.com /transfer?to=mallory&amount=1000
                            (cookie attached automatically)
  bank.com  ✗     does the transfer because the cookie was valid` },

        { type: 'heading', text: 'Three modern defenses (use together)', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>SameSite cookies</strong> — set <code>SameSite=Lax</code> (default in modern browsers) or <code>Strict</code> on session cookies. Blocks cookie attachment on cross-site POSTs.',
          '<strong>CSRF token</strong> — server issues a per-session unguessable token; every state-changing request must include it (header or hidden field); server validates.',
          '<strong>Origin / Referer checks</strong> — reject state-changing requests whose <code>Origin</code> header is not your domain.'
        ] },

        { type: 'heading', text: 'Double-submit cookie pattern', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">Server sets</span>     Set-Cookie: csrf=RANDOM_VALUE; SameSite=Lax
<span class="com">Client reads</span>     the cookie via JS and copies it into a header
<span class="com">Client sends</span>     X-CSRF-Token: RANDOM_VALUE
<span class="com">Server checks</span>    header value matches cookie value` },
        { type: 'para', html: 'Useful when you cannot easily keep server-side CSRF state. Works because evil.com cannot read your cookies (same-origin policy) and therefore cannot reproduce the header value.' },

        { type: 'heading', text: 'When is CSRF NOT a concern?', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Pure bearer-token APIs</strong> — Authorization header is not auto-attached cross-origin; CORS gates explicit JS requests.',
          '<strong>Read-only endpoints</strong> with no side effects — though a GET that changes state is itself a bug (see below).',
          '<strong>SameSite=Strict cookies</strong> on every state-changing request — strong, with some UX trade-offs (e.g., follow-link login state).'
        ] },

        { type: 'callout', kind: 'danger', html: 'State-changing requests must <strong>never</strong> be GETs. An <code>&lt;img src="..."&gt;</code> from any page across the web can trigger a GET to your domain. Use POST / PUT / PATCH / DELETE, and protect them.' }
      ]
    },

    /* ============ Chapter 10 — Network attacks ============ */
    {
      id: 'sec-c10',
      title: 'Network Attacks at a Glance',
      icon: '📡',
      sections: [
        { type: 'heading', text: 'The wire is a hostile place', level: 1 },
        { type: 'para', html: 'Between your client and your server are routers, switches, ISPs, peering points — many of which you do not control. Defenders assume the network is untrustworthy and rely on <strong>end-to-end authenticated encryption</strong> to keep that untrust from mattering.' },

        { type: 'heading', text: 'Man-in-the-middle (MITM)', level: 2 },
        { type: 'para', html: 'A MITM attacker sits between two parties, often by getting them to talk to the attacker instead of each other. Without end-to-end authentication, the MITM can read and modify traffic. With validated TLS, the MITM sees only opaque encrypted bytes and cannot impersonate the server (no matching private key).' },

        { type: 'heading', text: 'ARP spoofing (local LAN)', level: 2 },
        { type: 'para', html: 'On a switched Ethernet network, hosts learn each other\'s MAC addresses via ARP. An attacker on the same LAN can announce themselves as the gateway and redirect everyone\'s traffic through their machine. Defenses are infrastructure-level: switch port security, dynamic ARP inspection, 802.1X — and end-to-end TLS at the app layer regardless.' },

        { type: 'heading', text: 'DNS poisoning / spoofing', level: 2 },
        { type: 'para', html: 'If DNS responses can be forged or cached at a resolver, an attacker can make <code>bank.com</code> resolve to their own IP. Defenses include DNSSEC (cryptographic signatures on records), DNS over HTTPS / TLS (encrypted queries), and — once again — TLS at the application layer, since the bogus IP cannot present a valid cert for the real domain.' },

        { type: 'heading', text: 'BGP hijacking', level: 2 },
        { type: 'para', html: 'At the very top of the stack, the global routing protocol (BGP) can be abused so that traffic to an IP block is routed through an attacker network. This is rare but spectacular; defenses live with network operators and Route Origin Validation (RPKI). For app builders the takeaway is the same: <strong>encrypt + authenticate end to end</strong>.' },

        { type: 'image', alt: 'Defense in depth onion',
          svg: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.r{fill:none;stroke-width:2}.t{fill:#1e293b;font-family:Inter,sans-serif;font-size:13px;text-anchor:middle}.tt{fill:#1e293b;font-family:Inter,sans-serif;font-size:18px;font-weight:700;text-anchor:middle}</style>
</defs>
<text x="300" y="26" class="tt">Defense in depth</text>
<circle cx="300" cy="200" r="155" class="r" stroke="#b91c1c" fill="#fee2e2"/>
<circle cx="300" cy="200" r="125" class="r" stroke="#c2410c" fill="#ffedd5"/>
<circle cx="300" cy="200" r="95"  class="r" stroke="#a16207" fill="#fef9c3"/>
<circle cx="300" cy="200" r="65"  class="r" stroke="#15803d" fill="#dcfce7"/>
<circle cx="300" cy="200" r="35"  class="r" stroke="#1d4ed8" fill="#dbeafe"/>
<text x="300" y="70"  class="t">Policy &amp; people (training, IR, vendors)</text>
<text x="300" y="100" class="t">Perimeter / network (segmentation, WAF, EDR)</text>
<text x="300" y="130" class="t">Host (patching, least privilege)</text>
<text x="300" y="160" class="t">App (input/output, authZ, secrets)</text>
<text x="300" y="205" class="t" font-weight="700" font-size="14">Data</text>
<text x="300" y="223" class="t">encrypt &amp; sign</text>
</svg>` },

        { type: 'callout', kind: 'tip', html: 'For app developers, the recurring takeaway is simple: <strong>HTTPS everywhere, validated certificates, no mixed content, modern cipher suites.</strong> Almost all "network attacks" against your app stop being interesting once that is true.' }
      ]
    },

    /* ============ Chapter 11 — Malware ============ */
    {
      id: 'sec-c11',
      title: 'Malware Taxonomy',
      icon: '🦠',
      sections: [
        { type: 'heading', text: 'A field guide to the zoo', level: 1 },
        { type: 'para', html: 'Malware categories overlap and modern attacks combine several at once, but the vocabulary still matters when you read reports, choose defenses, and talk to your security team.' },

        { type: 'code', lang: 'text', code: `<span class="com">Virus</span>        attaches to host files; spreads when host runs
<span class="com">Worm</span>         self-propagates across networks without a host
<span class="com">Trojan</span>       disguised as benign; user runs it themselves
<span class="com">Ransomware</span>   encrypts files; demands payment for keys
<span class="com">Rootkit</span>      hides itself &amp; other malware deep in the OS
<span class="com">Spyware</span>      covert data exfiltration
<span class="com">Adware</span>       forced ads; often a vector for worse
<span class="com">Botnet</span>       compromised hosts controlled remotely (C2)
<span class="com">Cryptominer</span>  silently mines cryptocurrency on victim hardware
<span class="com">Wiper</span>        destroys data; sometimes disguised as ransomware</code></span>` },

        { type: 'heading', text: 'A little history', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Morris worm (1988)</strong> — first widespread internet worm; pushed the industry to take security seriously.',
          '<strong>ILOVEYOU (2000)</strong> — email-attached VBS script; mass-spread via address books.',
          '<strong>Stuxnet (2010)</strong> — sophisticated worm targeting industrial controllers; the modern era of state-grade malware.',
          '<strong>WannaCry (2017)</strong> — ransomware worm exploiting unpatched SMB; the cost of skipping patches.',
          '<strong>NotPetya (2017)</strong> — wiper disguised as ransomware; billions in damage.',
          '<strong>SolarWinds (2020)</strong> — supply-chain compromise of a widely-used IT product.'
        ] },

        { type: 'heading', text: 'Defenses that actually work', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Patch promptly</strong> — most mass malware exploits known, patched bugs.',
          '<strong>Least privilege</strong> — limits what malware can do once it lands.',
          '<strong>EDR / modern AV</strong> — catches known bad and behavior anomalies.',
          '<strong>Network segmentation</strong> — confines lateral movement.',
          '<strong>Immutable + offline backups</strong> — turns ransomware into a cleanup task.',
          '<strong>User training</strong> — phishing is still the #1 entry point.',
          '<strong>Software allow-listing</strong> — high-security environments only allow signed approved binaries to run.'
        ] },

        { type: 'callout', kind: 'danger', html: 'If you take one thing from this chapter: <strong>tested, isolated backups are the difference between a bad week and an existential event.</strong> "We have backups" without "we have restored from them recently" is not a backup.' }
      ]
    },

    /* ============ Chapter 12 — Social engineering / phishing ============ */
    {
      id: 'sec-c12',
      title: 'Social Engineering & Phishing',
      icon: '🎣',
      sections: [
        { type: 'heading', text: 'The human attack surface', level: 1 },
        { type: 'para', html: 'You can buy great firewalls, fancy EDR, and a slick MFA rollout — and still get breached because someone clicked a link, replied to an email, or approved a fraudulent invoice. Most modern breaches still start with a human.' },

        { type: 'image', alt: 'Phishing red-flag checklist',
          svg: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.b{fill:#fff7ed;stroke:#9a3412;stroke-width:1.5}.h{fill:#7c2d12;font-family:Inter,sans-serif;font-weight:700;font-size:18px;text-anchor:middle}.l{fill:#1f2937;font-family:Inter,sans-serif;font-size:13px}.x{fill:#b91c1c;font-family:Inter,sans-serif;font-weight:700;font-size:16px}</style>
</defs>
<text x="400" y="28" class="h">Phishing red flags</text>
<rect x="40" y="50" width="720" height="240" rx="10" class="b"/>
<text x="60" y="85" class="x">!</text><text x="85" y="85" class="l">Urgency or fear ("your account will be closed in 1 hour")</text>
<text x="60" y="115" class="x">!</text><text x="85" y="115" class="l">Mismatched sender — display name vs actual address</text>
<text x="60" y="145" class="x">!</text><text x="85" y="145" class="l">Look-alike domain (paypa1.com, micros0ft.com)</text>
<text x="60" y="175" class="x">!</text><text x="85" y="175" class="l">Unexpected attachment or unusual file type</text>
<text x="60" y="205" class="x">!</text><text x="85" y="205" class="l">Requests for credentials, MFA codes, or money transfers</text>
<text x="60" y="235" class="x">!</text><text x="85" y="235" class="l">"Do not discuss this with anyone else / only reply here"</text>
<text x="60" y="265" class="x">!</text><text x="85" y="265" class="l">Sender impersonating an authority (CEO, IT, gov agency)</text>
</svg>` },

        { type: 'heading', text: 'Common variations', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Phishing</strong> — broad email lure to many people.',
          '<strong>Spear-phishing</strong> — targeted; tailored to the victim.',
          '<strong>Whaling</strong> — targets executives.',
          '<strong>Vishing</strong> — voice/phone-based pretexting.',
          '<strong>Smishing</strong> — SMS-based.',
          '<strong>Business Email Compromise (BEC)</strong> — impersonation of an internal trusted person to redirect payments.',
          '<strong>MFA fatigue</strong> — flooding a user with push prompts until they tap "approve."'
        ] },

        { type: 'heading', text: 'Technical email controls', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">SPF</span>     TXT record listing IPs allowed to send mail as your domain
<span class="com">DKIM</span>    each outgoing message is cryptographically signed by your servers
<span class="com">DMARC</span>   policy + reporting on how receivers should handle SPF/DKIM failures
<span class="com">BIMI</span>    optional — display verified brand logo to recipients who support it` },
        { type: 'para', html: 'SPF + DKIM + DMARC together make it dramatically harder for attackers to spoof <em>your</em> domain. They do not stop attackers from registering a look-alike domain — that is what people and tools must handle.' },

        { type: 'heading', text: 'Human + technical controls', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Phishing-resistant MFA</strong> (FIDO2 / WebAuthn) — the credential is bound to the real origin; a fake login page cannot collect a usable assertion.',
          '<strong>Training with real practice</strong> — simulated phishing exercises that teach reporting, not punishment.',
          '<strong>Out-of-band verification</strong> for sensitive requests (calls, code words, ticket systems).',
          '<strong>External-email banners</strong> — visible flag on every mail from outside the organization.',
          '<strong>Easy "report" button</strong> in the mail client — friction stops reporting; speed catches campaigns.'
        ] },

        { type: 'callout', kind: 'tip', html: 'When in doubt, slow down. Almost every successful phish exploits urgency. A 60-second pause to verify costs nothing; a forwarded gift-card scam costs five figures.' }
      ]
    },

    /* ============ Chapter 13 — Secure coding ============ */
    {
      id: 'sec-c13',
      title: 'Secure Coding Practices',
      icon: '🧰',
      sections: [
        { type: 'heading', text: 'Build security in', level: 1 },
        { type: 'para', html: 'Most security bugs are not exotic — they are ordinary engineering mistakes. A small set of habits removes the majority of them before they ship.' },

        { type: 'heading', text: 'Input validation: allow-list, not block-list', level: 2 },
        { type: 'para', html: 'Block-lists ("reject these bad patterns") lose. Attackers always find a new one. Allow-lists ("accept only this exact shape") win.' },
        { type: 'code', lang: 'java', code: `<span class="com">// SAFE — validate shape before use</span>
<span class="kw">if</span> (!username.<span class="fn">matches</span>(<span class="str">"^[a-zA-Z0-9_]{3,32}$"</span>)) {
    <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>(<span class="str">"bad username"</span>);
}` },

        { type: 'heading', text: 'Output encoding by sink', level: 2 },
        { type: 'list', kind: 'check', items: [
          'HTML body → HTML-encode',
          'HTML attribute → attribute-encode',
          'JavaScript → JS-encode (and avoid this path)',
          'URL → URL-encode each component',
          'SQL → parameterized query (not "encoding")',
          'Shell → argv array, not a single string'
        ] },

        { type: 'code', lang: 'java', code: `<span class="com">// SAFE — argv form skips shell interpretation</span>
<span class="ty">Runtime</span>.getRuntime().<span class="fn">exec</span>(<span class="kw">new</span> <span class="ty">String</span>[]{<span class="str">"ls"</span>, <span class="str">"-la"</span>, userDir});

<span class="com">// UNSAFE — single-string form goes through a shell, which interprets characters in userDir</span>
<span class="ty">Runtime</span>.getRuntime().<span class="fn">exec</span>(<span class="str">"ls -la "</span> + userDir);` },

        { type: 'heading', text: 'Least privilege everywhere', level: 2 },
        { type: 'list', kind: 'check', items: [
          'DB user has only the GRANTs it needs (no DROP, no admin).',
          'Service accounts have scoped IAM policies; no wildcards on production buckets.',
          'Tokens issued with the smallest scope and shortest lifetime that works.',
          'Containers run as non-root with a read-only filesystem where possible.'
        ] },

        { type: 'heading', text: 'Secrets management', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>No secrets in source control</strong>, ever — even private repos.',
          'Use a secrets manager / vault (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault, etc.).',
          'Inject at runtime via identity (e.g., IAM role), not by baking into images.',
          'Rotate on a schedule and on suspected exposure.',
          'Pre-commit scanners + push protection catch leaks before they ship.'
        ] },

        { type: 'callout', kind: 'danger', html: '<strong>A secret in a client-side bundle is a public secret.</strong> Anyone with DevTools can read it. Always keep API keys, signing keys, and integration tokens server-side.' },

        { type: 'heading', text: 'Dependency hygiene', level: 2 },
        { type: 'list', kind: 'check', items: [
          'Lock versions (<code>package-lock.json</code>, <code>poetry.lock</code>, <code>Cargo.lock</code>, etc.).',
          'Run Software Composition Analysis in CI (npm audit, Snyk, Dependabot, OSV-Scanner).',
          'Automated update PRs, with humans reviewing before merge.',
          'Limit transitive dependencies; prefer fewer, well-maintained packages.',
          'Verify package signatures / provenance where supported (Sigstore, npm provenance).'
        ] },

        { type: 'heading', text: 'Defense in depth', level: 2 },
        { type: 'para', html: 'Assume any single control will fail. Layer independent ones: WAF + input validation + parameterized queries + least-privilege DB + monitoring. A real attacker has to defeat all of them, in sequence, without tripping an alert.' }
      ]
    },

    /* ============ Chapter 14 — IR ============ */
    {
      id: 'sec-c14',
      title: 'Incident Response & Forensics',
      icon: '🚨',
      sections: [
        { type: 'heading', text: 'A bad day, run on a script', level: 1 },
        { type: 'para', html: 'When something goes wrong, you do not want to invent a process — you want to follow one you have rehearsed. The industry-standard outline is <strong>PICERL</strong>.' },

        { type: 'code', lang: 'text', code: `<span class="com">PICERL — the six phases of incident response</span>

P  Preparation        playbooks, on-call rotation, tabletop exercises, backups, training
I  Identification     "is this real? what is the scope? severity?"
C  Containment        stop the bleeding; isolate hosts; pause user accounts
E  Eradication        remove implants, rotate creds, close root cause
R  Recovery           bring systems back; verify clean; monitor closely
L  Lessons learned    blameless retrospective; update playbooks &amp; controls` },

        { type: 'heading', text: 'Containment: short-term vs long-term', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Short-term containment</strong> — immediate action: isolate the affected host from the network, disable a compromised account, block a malicious IP.',
          '<strong>Long-term containment</strong> — keep operations running while a clean rebuild is prepared: temporary patches, additional monitoring, segmented re-entry.'
        ] },

        { type: 'callout', kind: 'warn', html: 'Do not power off the host first — you lose RAM-resident evidence and any chance of clean forensics. Network-isolate, capture, then decide.' },

        { type: 'heading', text: 'Evidence & chain of custody', level: 2 },
        { type: 'para', html: 'If an incident may end up in regulators\' hands or in court, you need a documented <strong>chain of custody</strong> for every piece of evidence: who collected it, when, how it was preserved, who handled it next, and where it lives now.' },
        { type: 'list', kind: 'check', items: [
          'Memory and disk images taken with documented tools and hashes.',
          'Logs exported with timestamps in UTC and source identifiers.',
          'Access to evidence restricted to a named handful of responders.',
          'Original media write-protected; analysis happens on copies.'
        ] },

        { type: 'heading', text: 'Logging is the foundation', level: 2 },
        { type: 'para', html: 'You cannot investigate what you did not log. A good baseline:' },
        { type: 'list', kind: 'check', items: [
          'Centralized, append-only log store with a long enough retention window.',
          'Time synchronization across all hosts (NTP) — drifting clocks make correlation impossible.',
          'Authentication events, admin actions, privilege changes, and data exports all logged.',
          'Structured logs (JSON) so they can be queried, not just grepped.',
          'Alerts tuned to high-signal events; review and prune noise regularly.'
        ] },

        { type: 'heading', text: 'Blameless culture beats punishment', level: 2 },
        { type: 'para', html: 'Post-incident reviews exist to find systemic improvements, not someone to fire. Punitive cultures get cover-ups; blameless cultures get the truth — which is the only thing that lets you actually fix the system.' }
      ]
    },

    /* ============ Chapter 15 — Compliance ============ */
    {
      id: 'sec-c15',
      title: 'Compliance & Frameworks',
      icon: '📜',
      sections: [
        { type: 'heading', text: 'The alphabet soup, demystified', level: 1 },
        { type: 'para', html: 'You will hear these acronyms in meetings, sales calls, audits, and contracts. Most are not actually contradictory — they overlap heavily. Pick the one your business requires and align the rest.' },

        { type: 'heading', text: 'The big names', level: 2 },
        { type: 'code', lang: 'text', code: `<span class="com">NIST CSF</span>     US Cybersecurity Framework — five functions:
              Identify, Protect, Detect, Respond, Recover

<span class="com">ISO 27001</span>    International standard for an Information Security
              Management System (ISMS), with auditable Annex A controls

<span class="com">SOC 2</span>        AICPA attestation report on the Trust Services Criteria:
              Security, Availability, Processing Integrity,
              Confidentiality, Privacy

<span class="com">GDPR</span>         EU regulation on personal data of EU residents

<span class="com">CCPA / CPRA</span>  California consumer-privacy laws

<span class="com">PCI-DSS</span>      Payment Card Industry Data Security Standard
              mandatory for anyone touching cardholder data

<span class="com">HIPAA</span>        US patient data protection in healthcare

<span class="com">FedRAMP</span>      US federal cloud authorization

<span class="com">DORA</span>         EU operational resilience for financial entities</code></span>` },

        { type: 'heading', text: 'How to read NIST CSF', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>Identify</strong> — know your assets, data flows, and risks.',
          '<strong>Protect</strong> — implement safeguards (access control, encryption, training).',
          '<strong>Detect</strong> — monitoring, anomaly detection.',
          '<strong>Respond</strong> — IR plans, communications, mitigation.',
          '<strong>Recover</strong> — restore services, learn, improve.'
        ] },

        { type: 'heading', text: 'How to read ISO 27001', level: 2 },
        { type: 'para', html: 'ISO 27001 is about <strong>process</strong>: you set up an ISMS, you measure it, you continuously improve it. Annex A is a long list of <em>controls</em> you select from, justifying which apply and which do not. Auditors look for evidence that you have actually done the things your ISMS says you do.' },

        { type: 'heading', text: 'Privacy regulations in one paragraph', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>GDPR</strong> — lawful basis for processing, data subject rights (access, deletion, portability), breach notification within 72 hours, DPO if required.',
          '<strong>CCPA/CPRA</strong> — California residents; right to know, delete, correct, opt out of sale/share, limit sensitive data use.',
          '<strong>HIPAA</strong> — covered entities and business associates must protect PHI; Privacy Rule and Security Rule.',
          '<strong>PCI-DSS</strong> — twelve high-level requirements; the unspoken eleventh-and-a-half is "do not store card data if you can avoid it."'
        ] },

        { type: 'callout', kind: 'info', html: 'Compliance is the floor, not the ceiling. A SOC 2 report or ISO 27001 cert is evidence of process — not proof of perfect security. Pair compliance with real engineering hygiene.' },

        { type: 'divider' },
        { type: 'callout', kind: 'tip', html: 'You\'ve reached the end of the defensive tour. The recurring theme: <strong>understand how an attack works, then layer defenses so no single failure becomes a breach.</strong> Security is a posture, not a product.' }
      ]
    }

  ]
});

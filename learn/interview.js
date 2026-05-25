LEARN('interview', {
  intro: 'Crack tech interviews end-to-end — mindset, resume, DSA patterns, system design, behavioral stories, and salary negotiation. Practical, friendly, actionable.',
  chapters: [

    /* ============== CH 1: Interview Mindset ============== */
    { id: 'iv-c1', title: 'Interview Mindset', icon: '🧠', sections: [
      { type: 'heading', text: 'Interviews are a skill, not a verdict', level: 1 },
      { type: 'para', html: 'A tech interview is <strong>not</strong> a measure of your worth as an engineer. It\'s a <em>sample</em> of how you think, communicate, and collaborate under a 45-minute timer. Like any skill, it improves with practice.' },
      { type: 'callout', kind: 'info', html: '<strong>The interviewer is rooting for you.</strong> They want to hire — empty seats cost teams more than a slow hire. Treat them like a future teammate, not a judge.' },

      { type: 'heading', text: 'What interviewers actually look for', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Problem-solving</strong> — can you break a vague problem into pieces?',
        '<strong>Communication</strong> — can you think out loud without rambling?',
        '<strong>Coding fluency</strong> — can you translate thoughts into clean code?',
        '<strong>Self-awareness</strong> — do you know when your approach is shaky?',
        '<strong>Collaboration</strong> — do you take hints gracefully or get defensive?',
        '<strong>Culture add</strong> — would you make the team better?'
      ]},
      { type: 'callout', kind: 'tip', html: 'A perfect solution with silent typing often loses to a near-miss with strong narration. <strong>Talking is half the interview.</strong>' },

      { type: 'heading', text: 'Growth mindset vs fixed mindset', level: 2 },
      { type: 'image', alt: 'growth vs fixed mindset', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="150" y="28" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14" fill="#d33">Fixed</text>
  <text x="450" y="28" text-anchor="middle" font-weight="bold" font-family="Nunito" font-size="14" fill="#2a8">Growth</text>
  <g font-family="Nunito" font-size="12">
    <rect x="20" y="44" width="260" height="32" fill="#fde" rx="6"/><text x="150" y="64" text-anchor="middle">"I failed — I\'m not cut out for this."</text>
    <rect x="320" y="44" width="260" height="32" fill="#dfe" rx="6"/><text x="450" y="64" text-anchor="middle">"I failed — what can I learn?"</text>
    <rect x="20" y="88" width="260" height="32" fill="#fde" rx="6"/><text x="150" y="108" text-anchor="middle">Avoids hard problems</text>
    <rect x="320" y="88" width="260" height="32" fill="#dfe" rx="6"/><text x="450" y="108" text-anchor="middle">Seeks harder problems</text>
    <rect x="20" y="132" width="260" height="32" fill="#fde" rx="6"/><text x="150" y="152" text-anchor="middle">Sees feedback as attack</text>
    <rect x="320" y="132" width="260" height="32" fill="#dfe" rx="6"/><text x="450" y="152" text-anchor="middle">Sees feedback as gift</text>
    <rect x="20" y="176" width="260" height="32" fill="#fde" rx="6"/><text x="150" y="196" text-anchor="middle">Talent is fixed</text>
    <rect x="320" y="176" width="260" height="32" fill="#dfe" rx="6"/><text x="450" y="196" text-anchor="middle">Talent compounds with effort</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Dealing with rejection', level: 2 },
      { type: 'para', html: 'Even strong candidates fail interviews. Hiring is noisy — interviewer mood, question luck, headcount freezes, and pure randomness all play roles. <strong>One "no" predicts almost nothing.</strong>' },
      { type: 'list', kind: 'bullet', items: [
        'Cool off for 24 hours — don\'t reply emotionally.',
        'Write a "post-mortem": what went well, what didn\'t, one thing to fix.',
        'Ask for feedback politely; many recruiters share it.',
        'Re-apply after 6–12 months if it was a dream company.',
        'Talk to a friend — rejection feels lighter spoken aloud.'
      ]},
      { type: 'callout', kind: 'warn', html: '<strong>Don\'t spiral.</strong> One rejection is data. Five rejections in a row is a pattern — slow down and re-evaluate prep, not yourself.' },

      { type: 'heading', text: 'Imposter syndrome is normal', level: 2 },
      { type: 'para', html: 'Almost every engineer — junior, senior, staff — feels like a fraud sometimes. The cure is not "feeling confident" but <strong>acting</strong> while uncertain. Confidence follows action, not the other way around.' },
      { type: 'callout', kind: 'tip', html: 'Keep a "wins file" — a doc of bugs you fixed, features you shipped, compliments you got. Read it before interviews.' },

      { type: 'heading', text: 'The 10-minute pre-interview ritual', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Glass of water nearby',
        'Bathroom break done',
        'Resume + JD open in a tab',
        'Notepad + pen ready',
        '2 minutes of slow breathing (box-breath: 4-4-4-4)',
        'Read your wins file',
        'Smile — even on phone, it changes your voice'
      ]},
      { type: 'divider' }
    ]},

    /* ============== CH 2: Stages of a Tech Interview ============== */
    { id: 'iv-c2', title: 'Stages of a Tech Interview', icon: '🪜', sections: [
      { type: 'heading', text: 'The full interview funnel', level: 1 },
      { type: 'para', html: 'Most tech companies use a 4–6 stage funnel. Knowing the shape helps you allocate prep time and avoid surprises.' },

      { type: 'image', alt: 'interview funnel', svg:
`<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="220" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="12">
    <rect x="20" y="60" width="100" height="60" rx="10" fill="#7c4dff"/><text x="70" y="88" text-anchor="middle" fill="white" font-weight="bold">Recruiter</text><text x="70" y="105" text-anchor="middle" fill="white" font-size="10">phone screen</text>
    <text x="135" y="92" fill="#666">→</text>
    <rect x="150" y="60" width="100" height="60" rx="10" fill="#5e35d5"/><text x="200" y="88" text-anchor="middle" fill="white" font-weight="bold">OA</text><text x="200" y="105" text-anchor="middle" fill="white" font-size="10">online assess.</text>
    <text x="265" y="92" fill="#666">→</text>
    <rect x="280" y="60" width="110" height="60" rx="10" fill="#1cb0f6"/><text x="335" y="88" text-anchor="middle" fill="white" font-weight="bold">Technical</text><text x="335" y="105" text-anchor="middle" fill="white" font-size="10">1–2 rounds</text>
    <text x="405" y="92" fill="#666">→</text>
    <rect x="420" y="60" width="110" height="60" rx="10" fill="#0e88c8"/><text x="475" y="88" text-anchor="middle" fill="white" font-weight="bold">Onsite</text><text x="475" y="105" text-anchor="middle" fill="white" font-size="10">DSA+SD+behav.</text>
    <text x="545" y="92" fill="#666">→</text>
    <rect x="560" y="60" width="110" height="60" rx="10" fill="#58cc02"/><text x="615" y="88" text-anchor="middle" fill="white" font-weight="bold">Offer</text><text x="615" y="105" text-anchor="middle" fill="white" font-size="10">negotiate</text>
  </g>
  <text x="360" y="170" text-anchor="middle" font-family="Nunito" font-size="11" fill="#666">Pass rate at each stage: ~30–50%. Total ~5–10% of applicants reach offer.</text>
</svg>` },

      { type: 'heading', text: '1. Recruiter phone screen', level: 2 },
      { type: 'para', html: 'A 20–30 min chat with a non-technical recruiter. They check basics: are you real, are you interested, do salary expectations align?' },
      { type: 'list', kind: 'bullet', items: [
        'Prepare a 60-second "tell me about yourself"',
        'Know your reason for leaving / wanting this role',
        'Have a salary range ready (more on this in CH 28)',
        'Ask about: team, tech stack, timeline, interview format'
      ]},
      { type: 'callout', kind: 'tip', html: 'Recruiters are your <strong>advocates inside the company</strong>. Be warm and responsive — they push your resume forward.' },

      { type: 'heading', text: '2. Online assessment (OA)', level: 2 },
      { type: 'para', html: 'A timed coding test on HackerRank, CodeSignal, or a custom platform. Typically 60–90 min, 2–4 problems, easy-to-medium DSA.' },
      { type: 'list', kind: 'check', items: [
        'Read all problems first; do easiest first',
        'Brute force fast, optimize only if time allows',
        'Watch out for edge cases — empty input, single element, negatives',
        'Test locally before submitting — the platform may have hidden tests'
      ]},

      { type: 'heading', text: '3. Technical phone interview', level: 2 },
      { type: 'para', html: 'A 45–60 min video call with an engineer. One coding problem on a shared editor (CoderPad, CodeSignal). The interviewer evaluates your <em>process</em> as much as your solution.' },
      { type: 'callout', kind: 'info', html: 'Most candidates fail not because they can\'t code, but because they jump in too fast. <strong>Spend 5 minutes clarifying before typing.</strong>' },

      { type: 'heading', text: '4. Onsite / virtual onsite', level: 2 },
      { type: 'para', html: 'The final round — usually 4–6 back-to-back interviews over 4–5 hours. Mix of DSA, system design, behavioral, and sometimes domain-specific.' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>DSA rounds (2–3):</strong> medium-hard LeetCode problems',
        '<strong>System design (1–2):</strong> design a chat app, URL shortener, etc. (senior+)',
        '<strong>Behavioral (1):</strong> STAR stories with a manager or bar-raiser',
        '<strong>Domain (0–1):</strong> ML, frontend, infra, depending on role'
      ]},

      { type: 'heading', text: '5. Hiring committee / debrief', level: 2 },
      { type: 'para', html: 'After your onsite, interviewers submit written feedback. A hiring committee (or manager) reads it all and votes. This is where ambiguity hurts — strong signals from multiple interviewers matter more than one rave review.' },
      { type: 'callout', kind: 'warn', html: 'A single "no hire" from a senior interviewer can sink your packet. Aim for <strong>consistency across rounds</strong>, not heroics in one.' },

      { type: 'heading', text: '6. Offer & negotiation', level: 2 },
      { type: 'para', html: 'You get a verbal offer first, then a written one. <strong>Do not accept on the spot.</strong> Ask for 3–5 business days. Negotiate. We cover this fully in chapter 28.' }
    ]},

    /* ============== CH 3: Resume That Gets Calls ============== */
    { id: 'iv-c3', title: 'Resume That Gets Calls', icon: '📄', sections: [
      { type: 'heading', text: 'Your resume has 7 seconds', level: 1 },
      { type: 'para', html: 'Recruiters skim ~200 resumes a day. Studies show the average first pass is <strong>6–8 seconds</strong>. Your resume is not a biography — it\'s a marketing flyer designed to earn that first phone call.' },
      { type: 'callout', kind: 'warn', html: 'Your resume\'s only job is to <strong>get the interview</strong>. It does not need to tell your full story — that\'s what the interview is for.' },

      { type: 'heading', text: 'The one-page rule', level: 2 },
      { type: 'para', html: 'Under 10 years of experience? Use one page. Period. Two pages signal "doesn\'t know what\'s important." Cut older internships, irrelevant coursework, and the objective statement (it\'s 2026, drop it).' },

      { type: 'heading', text: 'Ideal structure', level: 2 },
      { type: 'image', alt: 'resume layout', svg:
`<svg viewBox="0 0 480 580" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <rect width="480" height="580" fill="white" stroke="#ddd" stroke-width="2" rx="6"/>
  <rect x="20" y="20" width="440" height="60" fill="#7c4dff" rx="4"/>
  <text x="240" y="46" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold" font-size="16">Your Name</text>
  <text x="240" y="66" text-anchor="middle" fill="white" font-family="Nunito" font-size="11">email · phone · github · linkedin · portfolio</text>

  <text x="30" y="110" font-family="Nunito" font-weight="bold" font-size="12" fill="#333">EXPERIENCE</text>
  <line x1="30" y1="115" x2="450" y2="115" stroke="#7c4dff" stroke-width="1.5"/>
  <rect x="30" y="125" width="420" height="60" fill="#f5f0ff" rx="4"/>
  <text x="40" y="145" font-family="Nunito" font-size="11" fill="#333">Company · Role · Dates</text>
  <text x="40" y="162" font-family="Nunito" font-size="10" fill="#666">• Bullet w/ metric (e.g., "cut latency 40%")</text>
  <text x="40" y="178" font-family="Nunito" font-size="10" fill="#666">• Bullet w/ metric</text>

  <rect x="30" y="195" width="420" height="60" fill="#f5f0ff" rx="4"/>
  <text x="40" y="215" font-family="Nunito" font-size="11" fill="#333">Prev Company · Role · Dates</text>
  <text x="40" y="232" font-family="Nunito" font-size="10" fill="#666">• Bullet w/ metric</text>
  <text x="40" y="248" font-family="Nunito" font-size="10" fill="#666">• Bullet w/ metric</text>

  <text x="30" y="285" font-family="Nunito" font-weight="bold" font-size="12" fill="#333">PROJECTS</text>
  <line x1="30" y1="290" x2="450" y2="290" stroke="#7c4dff" stroke-width="1.5"/>
  <rect x="30" y="300" width="420" height="50" fill="#f0f8ff" rx="4"/>
  <text x="40" y="320" font-family="Nunito" font-size="11" fill="#333">Project Name · github.com/x · stack</text>
  <text x="40" y="338" font-family="Nunito" font-size="10" fill="#666">• What it does + impact + tech</text>

  <text x="30" y="380" font-family="Nunito" font-weight="bold" font-size="12" fill="#333">SKILLS</text>
  <line x1="30" y1="385" x2="450" y2="385" stroke="#7c4dff" stroke-width="1.5"/>
  <text x="40" y="405" font-family="Nunito" font-size="10" fill="#666">Languages: Java, Python, Go</text>
  <text x="40" y="422" font-family="Nunito" font-size="10" fill="#666">Frameworks: React, Spring, Django</text>
  <text x="40" y="439" font-family="Nunito" font-size="10" fill="#666">Tools: Docker, AWS, Kafka</text>

  <text x="30" y="475" font-family="Nunito" font-weight="bold" font-size="12" fill="#333">EDUCATION</text>
  <line x1="30" y1="480" x2="450" y2="480" stroke="#7c4dff" stroke-width="1.5"/>
  <text x="40" y="500" font-family="Nunito" font-size="11" fill="#333">University · Degree · GPA · Year</text>

  <text x="30" y="540" font-family="Nunito" font-weight="bold" font-size="12" fill="#333">AWARDS / OPEN SOURCE (optional)</text>
  <line x1="30" y1="545" x2="450" y2="545" stroke="#7c4dff" stroke-width="1.5"/>
  <text x="40" y="565" font-family="Nunito" font-size="10" fill="#666">• 1–2 highlights</text>
</svg>` },

      { type: 'heading', text: 'Action verbs that ATS loves', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Built / Designed / Architected</strong> — for systems',
        '<strong>Reduced / Cut / Eliminated</strong> — for cost, latency, bugs',
        '<strong>Increased / Grew / Accelerated</strong> — for revenue, throughput, users',
        '<strong>Led / Mentored / Owned</strong> — for leadership',
        '<strong>Launched / Shipped / Deployed</strong> — for outcomes',
        '<strong>Automated / Streamlined</strong> — for process improvements'
      ]},
      { type: 'callout', kind: 'warn', html: 'Banned: <em>"Responsible for", "Worked on", "Helped with", "Assisted in"</em>. They\'re passive and impactless.' },

      { type: 'heading', text: 'Quantify everything', level: 2 },
      { type: 'para', html: 'A bullet without a number is a wasted bullet. Even rough estimates beat nothing.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// WEAK</span>
- Improved the checkout page performance.

<span class="com">// STRONG</span>
- Cut checkout page LCP from 4.2s to 1.8s (-57%), lifting conversion 12%
  by lazy-loading images and inlining critical CSS.` },

      { type: 'heading', text: 'The XYZ bullet formula', level: 2 },
      { type: 'callout', kind: 'info', html: '<strong>Accomplished [X] as measured by [Y] by doing [Z]</strong> — Google\'s own resume tip.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Pattern</span>
[Verb] [what] [metric] by [how]

<span class="com">// Examples</span>
- Reduced API p99 latency 60% (320ms → 130ms) by adding Redis caching
- Shipped onboarding flow that boosted activation 22%, A/B tested on 50k users
- Cut deploy time from 18min to 4min by parallelizing CI stages` },

      { type: 'heading', text: 'Projects section', level: 2 },
      { type: 'para', html: 'For new grads and switchers, projects matter as much as experience. Pick <strong>2–3</strong> projects max. Each should have a one-line "what + impact" and a GitHub link.' },
      { type: 'list', kind: 'check', items: [
        'Real-world utility beats toy projects (a Pomodoro app for your team beats yet another Tic-Tac-Toe)',
        'Show breadth — pick projects with different stacks',
        'Each project repo should have a clean README (more in CH 4)',
        'Deploy at least one — a live demo URL is gold'
      ]},

      { type: 'heading', text: 'Skills section', level: 2 },
      { type: 'para', html: 'Group by category, list strongest first. <strong>Don\'t list everything</strong> — if you put it on the resume, expect to be quizzed.' },
      { type: 'code', lang: 'text', code:
`<span class="kw">Languages:</span>   Python, Java, TypeScript, Go
<span class="kw">Frameworks:</span>  React, Next.js, Spring Boot, FastAPI
<span class="kw">Databases:</span>   PostgreSQL, Redis, MongoDB
<span class="kw">Cloud/DevOps:</span> AWS (EC2, S3, Lambda), Docker, Kubernetes, GitHub Actions` },
      { type: 'callout', kind: 'warn', html: 'Avoid "skill bars" / 5-star ratings. They\'re subjective fluff. ATS can\'t parse them either.' },

      { type: 'heading', text: 'Common mistakes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Photo / DOB / marital status</strong> — never in US/EU resumes',
        '<strong>Fancy templates with sidebars</strong> — ATS parsers break',
        '<strong>Walls of text</strong> — use bullets, max 2 lines each',
        '<strong>Typos</strong> — instant rejection signal',
        '<strong>Outdated tech (jQuery, AngularJS)</strong> unless target role uses it',
        '<strong>Listing every course</strong> from college',
        '<strong>"References available upon request"</strong> — assumed; cut it'
      ]},

      { type: 'heading', text: 'ATS-friendly formatting', level: 2 },
      { type: 'para', html: 'Applicant Tracking Systems scan your resume into plain text. If the parser fails, a human never sees your file. Optimize for the robot first.' },
      { type: 'list', kind: 'check', items: [
        'Single-column layout (no sidebars)',
        'Standard fonts: Calibri, Arial, Helvetica, Inter',
        'PDF unless they ask for .docx',
        'Use the exact job-posting keywords (e.g., "Kubernetes" not "k8s")',
        'Avoid headers/footers — many parsers skip them',
        'Avoid icons that aren\'t accompanied by text'
      ]},

      { type: 'heading', text: 'Tailor for every role', level: 2 },
      { type: 'para', html: 'Read the JD twice. Mirror its language. If they say "distributed systems" 3 times, your bullets better say "distributed". Keep a master resume; cut to fit each application.' },
      { type: 'callout', kind: 'tip', html: 'Paste the JD and your resume into <code>jobscan.co</code> or similar — it scores your keyword match. Aim for 70%+.' }
    ]}
,

    /* ============== CH 4: LinkedIn & Portfolio ============== */
    { id: 'iv-c4', title: 'LinkedIn & Portfolio', icon: '🔗', sections: [
      { type: 'heading', text: 'LinkedIn = your second resume', level: 1 },
      { type: 'para', html: 'Recruiters source candidates on LinkedIn before they read resumes. Your profile is a searchable funnel — optimize the right fields and inbound DMs go up <strong>3–5×</strong>.' },
      { type: 'callout', kind: 'info', html: 'LinkedIn\'s search prioritizes <strong>headline, current title, and skills</strong>. These are your high-leverage fields.' },

      { type: 'heading', text: 'The headline formula', level: 2 },
      { type: 'para', html: 'Default headline = "Software Engineer at X". Boring. Use the space (220 chars) to load keywords + value.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Weak</span>
Software Engineer at Acme

<span class="com">// Strong</span>
Backend Engineer @ Acme · Java, Spring, Kafka, AWS · Building scalable
distributed systems · Open to senior roles` },

      { type: 'heading', text: 'About section', level: 2 },
      { type: 'list', kind: 'check', items: [
        '3–5 short paragraphs, first person',
        'Open with a hook — what problem do you love solving?',
        'Mention 2–3 wins with numbers',
        'List a tech stack line for ATS',
        'End with a CTA: "DM me about backend roles in Bangalore"'
      ]},

      { type: 'heading', text: 'Featured & posts', level: 2 },
      { type: 'para', html: 'Pin your best work to the Featured section: a launched project, a popular article, a conference talk. Even <strong>one</strong> well-written tech post can become a recruiter magnet.' },
      { type: 'callout', kind: 'tip', html: 'You don\'t need to be an "influencer". Post 1 thoughtful comment a week on industry posts — your name starts showing in recruiter feeds.' },

      { type: 'heading', text: 'Portfolio site', level: 2 },
      { type: 'para', html: 'Required for frontend, design, ML; <em>nice-to-have</em> for backend. Buy a domain (firstnamelastname.dev) — it costs $12/year and signals seriousness.' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Hero:</strong> name + one-line pitch + photo (optional)',
        '<strong>Projects:</strong> 3–6 with screenshots, live link, GitHub link',
        '<strong>About:</strong> story-form bio (not resume copy)',
        '<strong>Contact:</strong> email, LinkedIn, GitHub'
      ]},

      { type: 'heading', text: 'GitHub README tips', level: 2 },
      { type: 'para', html: 'A great README on your top repo is worth 10 resume bullets. It shows you can <em>communicate</em> code, not just write it.' },
      { type: 'code', lang: 'text', code:
`<span class="com"># Project Name — 1-line tagline</span>

[demo gif or screenshot]

<span class="com">## What it does</span>
1 paragraph. Plain English. No jargon.

<span class="com">## Why I built it</span>
1 paragraph. Real problem, real motivation.

<span class="com">## Tech</span>
- React 18, TypeScript, Vite
- Postgres, Redis
- Deployed on Fly.io

<span class="com">## Run locally</span>
\`\`\`
git clone ...
npm install
npm run dev
\`\`\`

<span class="com">## Architecture</span>
[simple diagram]

<span class="com">## Roadmap</span>
- [x] Done thing
- [ ] Next thing` }
    ]},

    /* ============== CH 5: UMPIRE Method ============== */
    { id: 'iv-c5', title: 'The UMPIRE Method', icon: '🧭', sections: [
      { type: 'heading', text: 'A framework that keeps you calm', level: 1 },
      { type: 'para', html: 'UMPIRE is a 6-step process for tackling any coding question. Following it makes you look <strong>structured</strong> and <strong>thoughtful</strong> — two top hiring signals.' },

      { type: 'image', alt: 'UMPIRE flow', svg:
`<svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="160" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <circle cx="60" cy="80" r="38" fill="#7c4dff"/><text x="60" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">U</text><text x="60" y="98" text-anchor="middle" fill="white" font-size="10">nderstand</text>
    <text x="115" y="84" fill="#666">→</text>
    <circle cx="170" cy="80" r="38" fill="#5e35d5"/><text x="170" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">M</text><text x="170" y="98" text-anchor="middle" fill="white" font-size="10">atch</text>
    <text x="225" y="84" fill="#666">→</text>
    <circle cx="280" cy="80" r="38" fill="#1cb0f6"/><text x="280" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">P</text><text x="280" y="98" text-anchor="middle" fill="white" font-size="10">lan</text>
    <text x="335" y="84" fill="#666">→</text>
    <circle cx="390" cy="80" r="38" fill="#0e88c8"/><text x="390" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">I</text><text x="390" y="98" text-anchor="middle" fill="white" font-size="10">mplement</text>
    <text x="445" y="84" fill="#666">→</text>
    <circle cx="500" cy="80" r="38" fill="#58cc02"/><text x="500" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">R</text><text x="500" y="98" text-anchor="middle" fill="white" font-size="10">eview</text>
    <text x="555" y="84" fill="#666">→</text>
    <circle cx="610" cy="80" r="38" fill="#ff9600"/><text x="610" y="78" text-anchor="middle" fill="white" font-weight="bold" font-size="20">E</text><text x="610" y="98" text-anchor="middle" fill="white" font-size="10">valuate</text>
  </g>
</svg>` },

      { type: 'heading', text: 'U — Understand', level: 2 },
      { type: 'para', html: 'Restate the problem in your own words. Ask <strong>clarifying questions</strong>. This is where most candidates skip — and where most interviews are lost.' },
      { type: 'list', kind: 'check', items: [
        'Can the input be empty? Negative? Huge?',
        'Are there duplicates?',
        'Is the array sorted?',
        'Should I return the value or the index?',
        'Optimize for time or memory?',
        'What\'s the expected input size? (10? 10^6? 10^9?)'
      ]},

      { type: 'heading', text: 'M — Match to a pattern', level: 2 },
      { type: 'para', html: 'Pattern-match before you panic. "Find pair that sums to K → hashing or two-pointers. Find longest substring → sliding window. Find shortest path → BFS." Knowing 10 patterns covers 80% of problems.' },
      { type: 'callout', kind: 'tip', html: 'If nothing matches, say so out loud: <em>"This doesn\'t fit a standard pattern. Let me brute force first."</em>' },

      { type: 'heading', text: 'P — Plan', level: 2 },
      { type: 'para', html: 'Sketch the algorithm in plain English or pseudo-code <strong>before</strong> writing real code. Walk through a small example by hand.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Plan for Two Sum</span>
1. Create empty hashmap: value → index
2. For each (i, num) in array:
   a. complement = target - num
   b. if complement in map: return [map[complement], i]
   c. else: map[num] = i
3. return [-1, -1] if not found

Time: O(n)  Space: O(n)` },

      { type: 'heading', text: 'I — Implement', level: 2 },
      { type: 'para', html: 'Now type. Keep narrating: <em>"I\'m initializing the map. Looping through. Checking complement..."</em>. Use clear names: <code>seen</code> not <code>m</code>, <code>maxLen</code> not <code>x</code>.' },
      { type: 'callout', kind: 'warn', html: 'Don\'t go silent for 5 minutes while typing. <strong>That\'s the #1 reason "competent" candidates fail.</strong>' },

      { type: 'heading', text: 'R — Review', level: 2 },
      { type: 'para', html: 'After typing the last line, <em>read your own code</em> like a code reviewer. Trace through with the example. Check off-by-one, null checks, empty input.' },
      { type: 'list', kind: 'bullet', items: [
        'Does it compile mentally?',
        'Are there any unused variables?',
        'What if input is empty? size 1?',
        'Any integer overflow risk?',
        'Did I handle the edge case the interviewer hinted at?'
      ]},

      { type: 'heading', text: 'E — Evaluate', level: 2 },
      { type: 'para', html: 'State <strong>time and space complexity</strong> clearly. Then ask: <em>"Can we do better?"</em>. Even if you can\'t, saying so shows awareness.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Always end with:</span>
Time:  O(n)
Space: O(n)
Trade-off: hashmap uses extra memory to avoid the nested loop.
If memory were tight, we could sort + two-pointer in O(n log n) time, O(1) space.` },

      { type: 'heading', text: 'Timing breakdown (45-min round)', level: 2 },
      { type: 'image', alt: 'time budget', svg:
`<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="120" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <rect x="20" y="40" width="80" height="40" fill="#7c4dff"/><text x="60" y="64" text-anchor="middle" fill="white" font-weight="bold">U+M+P</text>
    <text x="60" y="100" text-anchor="middle" fill="#666">5–10 min</text>
    <rect x="100" y="40" width="280" height="40" fill="#1cb0f6"/><text x="240" y="64" text-anchor="middle" fill="white" font-weight="bold">Implement</text>
    <text x="240" y="100" text-anchor="middle" fill="#666">20–25 min</text>
    <rect x="380" y="40" width="120" height="40" fill="#58cc02"/><text x="440" y="64" text-anchor="middle" fill="white" font-weight="bold">Review</text>
    <text x="440" y="100" text-anchor="middle" fill="#666">5–10 min</text>
    <rect x="500" y="40" width="80" height="40" fill="#ff9600"/><text x="540" y="64" text-anchor="middle" fill="white" font-weight="bold">Q&amp;A</text>
    <text x="540" y="100" text-anchor="middle" fill="#666">5 min</text>
  </g>
</svg>` },

      { type: 'heading', text: 'When you get stuck', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Re-read the problem',
        'Try a smaller example',
        'Brute force out loud — even O(n^3) is progress',
        'Identify the bottleneck — what makes brute force slow?',
        'Ask: "Can I trade space for time?" (often yes)',
        'Ask the interviewer for a hint — it\'s OK!'
      ]},

      { type: 'heading', text: 'Practice UMPIRE in daily LeetCode', level: 2 },
      { type: 'para', html: 'For each problem you solve, write out U, M, P, R, E in a notebook. After 30 problems, the framework becomes muscle memory.' }
    ]},

    /* ============== CH 6: Talking Through Problems ============== */
    { id: 'iv-c6', title: 'Talking Through Problems', icon: '🗣️', sections: [
      { type: 'heading', text: 'Silence is your enemy', level: 1 },
      { type: 'para', html: 'In interviews, your <strong>thought process</strong> is the product. If the interviewer can\'t hear it, you might as well be solving in a different room.' },
      { type: 'callout', kind: 'info', html: 'A candidate who solves 80% with great narration usually beats one who solves 100% in silence. Communication is part of the score.' },

      { type: 'heading', text: 'What to say out loud', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Restating</strong>: "So the problem is X — find Y given Z"',
        '<strong>Questioning</strong>: "What about empty input?"',
        '<strong>Brainstorming</strong>: "Two approaches come to mind — brute force and hashing"',
        '<strong>Trade-offs</strong>: "Brute is O(n^2) but uses no extra memory"',
        '<strong>Decisions</strong>: "I\'ll go with hashing — let me know if you\'d prefer the other"',
        '<strong>Tracing</strong>: "On [2,7,11,15] with target 9, after i=0 map={2:0}..."'
      ]},

      { type: 'heading', text: 'Clarifying questions menu', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Input shape</span>
- Size range? Empty allowed? Sorted?
- Data type? Negative? Floats? Unicode?
- Duplicates allowed?

<span class="com">// Output</span>
- Return value or index?
- Multiple answers — return all, any, first?
- Modify input in place or new array?

<span class="com">// Behavior</span>
- What if no answer exists?
- Case sensitivity for strings?
- Stable vs unstable for sorting?

<span class="com">// Constraints</span>
- Time vs space priority?
- Can I use built-in libraries?` },

      { type: 'heading', text: 'Tradeoffs framing', level: 2 },
      { type: 'para', html: 'Almost every problem has a time/space trade-off. Frame both, let the interviewer pick.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Sample script</span>
"I see two approaches:
 1) Sort + two-pointer: O(n log n) time, O(1) space.
 2) Hashmap: O(n) time, O(n) space.

 If memory is tight or we can\'t modify input, I\'d go with #1.
 Otherwise #2 is faster. Which do you prefer?"` },

      { type: 'heading', text: 'Handling hints', level: 2 },
      { type: 'para', html: 'When the interviewer drops a hint — <strong>take it</strong>. Don\'t be proud. They\'re narrowing the search space to help you succeed.' },
      { type: 'callout', kind: 'tip', html: 'Repeat the hint back: <em>"Sorted array, got it — that unlocks binary search."</em> Shows you heard it.' },

      { type: 'heading', text: 'When you don\'t know something', level: 2 },
      { type: 'para', html: 'Honesty beats bluffing every time. Senior interviewers smell BS from a mile away.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Bad</span>
[silent panic, makes up answer]

<span class="com">// Good</span>
"I haven\'t used Bloom filters in production. I know they\'re probabilistic
 set-membership — possible false positives, zero false negatives. Would you
 like me to reason from first principles, or pick a different structure?"` },

      { type: 'heading', text: 'Volume, pace, energy', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Speak slightly slower than normal — nerves speed you up',
        'Pause after key sentences — let the interviewer absorb',
        'Vary tone — monotone reads as low confidence',
        'Smile occasionally — it\'s heard in your voice',
        'Use "we" not "you" — collaborative framing'
      ]}
    ]},

    /* ============== CH 7: Complexity in Interviews ============== */
    { id: 'iv-c7', title: 'Complexity in Interviews', icon: '📈', sections: [
      { type: 'heading', text: 'Big O is your shared vocabulary', level: 1 },
      { type: 'para', html: 'Interviewers expect you to state time and space complexity for every solution. Get this fluent — fumbling it costs more points than a slow algorithm.' },

      { type: 'heading', text: 'The complexity cheat sheet', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="kw">O(1)</span>        constant       — hashmap get/put
<span class="kw">O(log n)</span>    logarithmic    — binary search, balanced BST
<span class="kw">O(n)</span>        linear         — single loop, linear scan
<span class="kw">O(n log n)</span>  linearithmic   — efficient sorts (merge, quick avg)
<span class="kw">O(n^2)</span>      quadratic      — nested loops, bubble sort
<span class="kw">O(2^n)</span>      exponential    — naive recursion (fib, subsets)
<span class="kw">O(n!)</span>       factorial      — permutations, brute TSP` },

      { type: 'heading', text: 'How input size dictates your target', level: 2 },
      { type: 'image', alt: 'input size to complexity', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="13">If n is... aim for...</text>
  <g font-family="JetBrains Mono" font-size="11">
    <rect x="40" y="40" width="100" height="28" fill="#ff9600"/><text x="90" y="58" text-anchor="middle" fill="white" font-weight="bold">n ≤ 12</text>
    <text x="160" y="58" fill="#333">O(n!) brute force OK (permutations)</text>

    <rect x="40" y="74" width="100" height="28" fill="#ff7043"/><text x="90" y="92" text-anchor="middle" fill="white" font-weight="bold">n ≤ 20</text>
    <text x="160" y="92" fill="#333">O(2^n) bitmask DP / subsets</text>

    <rect x="40" y="108" width="100" height="28" fill="#1cb0f6"/><text x="90" y="126" text-anchor="middle" fill="white" font-weight="bold">n ≤ 10^4</text>
    <text x="160" y="126" fill="#333">O(n^2) nested loop OK</text>

    <rect x="40" y="142" width="100" height="28" fill="#58cc02"/><text x="90" y="160" text-anchor="middle" fill="white" font-weight="bold">n ≤ 10^6</text>
    <text x="160" y="160" fill="#333">O(n log n) or O(n) only</text>

    <rect x="40" y="176" width="100" height="20" fill="#2e7d32"/><text x="90" y="190" text-anchor="middle" fill="white" font-weight="bold" font-size="10">n ≥ 10^9</text>
    <text x="160" y="190" fill="#333">O(log n) or O(1) only</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Restate complexity precisely', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Say <em>"time O(n), space O(1)"</em> — not just "linear"',
        'Define what n is: <em>"n = number of elements"</em>',
        'If two inputs: use n and m, not "n"',
        'Distinguish best / average / worst when relevant'
      ]},

      { type: 'heading', text: 'Common mistakes', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Mistake 1: ignoring inner string operations</span>
for (string s : list)            // n
  if (s.contains(target)) ...    // m  ← combined O(n*m), not O(n)

<span class="com">// Mistake 2: recursion space</span>
fibonacci(n) — time O(2^n) but space is O(n) (call stack), not O(1)

<span class="com">// Mistake 3: hashmap is "O(1)"</span>
Average O(1), worst O(n) on collisions. Mention if pressed.

<span class="com">// Mistake 4: ArrayList.contains() is O(1)</span>
It\'s O(n) — linear scan. Use HashSet for O(1).` },

      { type: 'heading', text: 'Amortized vs worst-case', level: 2 },
      { type: 'para', html: 'ArrayList.add() is <strong>amortized O(1)</strong> — most adds are O(1), occasional resize is O(n), averaged over n adds it\'s O(1). Use the word <em>amortized</em> when accurate; interviewers love it.' },

      { type: 'heading', text: 'Space includes the call stack', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Recursive sum — time O(n), space O(n) for call stack</span>
<span class="kw">int</span> <span class="fn">sum</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> i) {
  <span class="kw">if</span> (i == a.length) <span class="kw">return</span> <span class="num">0</span>;
  <span class="kw">return</span> a[i] + <span class="fn">sum</span>(a, i + <span class="num">1</span>);
}

<span class="com">// Iterative — time O(n), space O(1)</span>
<span class="kw">int</span> <span class="fn">sum</span>(<span class="kw">int</span>[] a) {
  <span class="kw">int</span> s = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> x : a) s += x;
  <span class="kw">return</span> s;
}` },

      { type: 'heading', text: 'Trade-off conversations', level: 2 },
      { type: 'para', html: 'When you finish, explicitly compare alternatives. The script: <em>"My solution is O(n) time, O(n) space. An in-place alternative would be O(n log n) time, O(1) space — preferable if memory is tight."</em>' },
      { type: 'callout', kind: 'tip', html: 'Knowing <strong>when not to optimize</strong> shows seniority. Sometimes O(n^2) on n=100 is perfect.' }
    ]},

    /* ============== CH 8: Two Pointers ============== */
    { id: 'iv-c8', title: 'Pattern: Two Pointers', icon: '👉', sections: [
      { type: 'heading', text: 'Two indices, one array', level: 1 },
      { type: 'para', html: 'Two-pointers turns many O(n^2) brute force solutions into O(n). Use it when the input is <strong>sorted</strong>, when you need to compare from both ends, or when you\'re scanning with two synchronized indices.' },

      { type: 'heading', text: 'When to reach for two pointers', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Sorted array + find pair with property (sum=K, diff=K)',
        'Reverse / palindrome check',
        'Merge two sorted arrays',
        'Remove duplicates in place',
        'Partitioning (Dutch national flag)'
      ]},

      { type: 'heading', text: 'Reverse a string in place', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">reverse</span>(<span class="kw">char</span>[] s) {
  <span class="kw">int</span> l = <span class="num">0</span>, r = s.length - <span class="num">1</span>;
  <span class="kw">while</span> (l &lt; r) {
    <span class="kw">char</span> tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++; r--;
  }
}
<span class="com">// Time O(n), Space O(1)</span>` },

      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="kw">void</span> <span class="fn">reverse</span>(<span class="kw">char</span>[] s) {',
          '  <span class="kw">int</span> l = <span class="num">0</span>, r = s.length - <span class="num">1</span>;',
          '  <span class="kw">while</span> (l &lt; r) {',
          '    swap(s[l], s[r]);',
          '    l++; r--;',
          '  }',
          '}'
        ],
        steps: [
          { line: 1, vars: { s: '[H,E,L,L,O]', l: '0', r: '4' }, note: 'Init pointers at both ends.' },
          { line: 3, vars: { s: '[O,E,L,L,H]', l: '0→1', r: '4→3' }, note: 'Swap H ↔ O, move inward.' },
          { line: 3, vars: { s: '[O,L,L,E,H]', l: '1→2', r: '3→2' }, note: 'Swap E ↔ L.' },
          { line: 2, vars: { s: '[O,L,L,E,H]', l: '2', r: '2' }, note: 'l == r, loop exits.' }
        ]
      }},

      { type: 'heading', text: 'Two Sum (sorted)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span>[] <span class="fn">twoSum</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> target) {
  <span class="kw">int</span> l = <span class="num">0</span>, r = a.length - <span class="num">1</span>;
  <span class="kw">while</span> (l &lt; r) {
    <span class="kw">int</span> sum = a[l] + a[r];
    <span class="kw">if</span> (sum == target) <span class="kw">return</span> <span class="kw">new int</span>[]{l, r};
    <span class="kw">if</span> (sum &lt; target) l++;
    <span class="kw">else</span> r--;
  }
  <span class="kw">return</span> <span class="kw">new int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}` },
      { type: 'callout', kind: 'info', html: '<strong>Why it works:</strong> sorted order means moving <code>l</code> right increases sum, moving <code>r</code> left decreases it. We never need to revisit.' },

      { type: 'heading', text: 'Remove duplicates from sorted array', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">removeDuplicates</span>(<span class="kw">int</span>[] a) {
  <span class="kw">if</span> (a.length == <span class="num">0</span>) <span class="kw">return</span> <span class="num">0</span>;
  <span class="kw">int</span> slow = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">1</span>; fast &lt; a.length; fast++) {
    <span class="kw">if</span> (a[fast] != a[slow]) {
      slow++;
      a[slow] = a[fast];
    }
  }
  <span class="kw">return</span> slow + <span class="num">1</span>;
}` },

      { type: 'heading', text: 'Three sum trick', level: 2 },
      { type: 'para', html: 'Fix one element, two-pointer on the rest. Sort → outer loop i → inner l=i+1, r=n-1. O(n^2) total. Skip duplicates to avoid duplicate triplets.' },

      { type: 'heading', text: 'Visualize', level: 2 },
      { type: 'widget', name: 'array-vis', props: { values: [1, 3, 5, 7, 9, 11], highlights: { 0: 'l', 5: 'r' } } },

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Reverse String (LC 344)',
        'Two Sum II Sorted (LC 167)',
        'Valid Palindrome (LC 125)',
        '3Sum (LC 15)',
        'Container With Most Water (LC 11)',
        'Trapping Rain Water (LC 42)',
        'Sort Colors / Dutch Flag (LC 75)'
      ]}
    ]},

    /* ============== CH 9: Sliding Window ============== */
    { id: 'iv-c9', title: 'Pattern: Sliding Window', icon: '🪟', sections: [
      { type: 'heading', text: 'A window that moves', level: 1 },
      { type: 'para', html: 'Sliding window maintains a sub-range <code>[l, r]</code> and expands or contracts it. Perfect for "longest / shortest / max sum of contiguous subarray" problems. Turns O(n*k) brute force into O(n).' },

      { type: 'image', alt: 'sliding window visual', svg:
`<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="160" fill="#fafafa" rx="8"/>
  <g font-family="JetBrains Mono" font-size="13">
    <rect x="20" y="50" width="50" height="50" fill="#ddd" stroke="#999"/><text x="45" y="80" text-anchor="middle">2</text>
    <rect x="70" y="50" width="50" height="50" fill="#7c4dff" stroke="#444"/><text x="95" y="80" text-anchor="middle" fill="white">7</text>
    <rect x="120" y="50" width="50" height="50" fill="#7c4dff" stroke="#444"/><text x="145" y="80" text-anchor="middle" fill="white">1</text>
    <rect x="170" y="50" width="50" height="50" fill="#7c4dff" stroke="#444"/><text x="195" y="80" text-anchor="middle" fill="white">5</text>
    <rect x="220" y="50" width="50" height="50" fill="#ddd" stroke="#999"/><text x="245" y="80" text-anchor="middle">3</text>
    <rect x="270" y="50" width="50" height="50" fill="#ddd" stroke="#999"/><text x="295" y="80" text-anchor="middle">8</text>
    <rect x="320" y="50" width="50" height="50" fill="#ddd" stroke="#999"/><text x="345" y="80" text-anchor="middle">4</text>
  </g>
  <text x="95" y="38" text-anchor="middle" font-family="Nunito" font-size="11" fill="#7c4dff" font-weight="bold">l</text>
  <text x="195" y="38" text-anchor="middle" font-family="Nunito" font-size="11" fill="#7c4dff" font-weight="bold">r</text>
  <text x="195" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#333">window sum = 13</text>
</svg>` },

      { type: 'heading', text: 'Fixed vs variable window', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Fixed</strong>: window size k is given (max sum of k consecutive)',
        '<strong>Variable</strong>: window grows/shrinks based on condition (longest with no repeating chars)'
      ]},

      { type: 'heading', text: 'Fixed window: max sum of k', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">maxSumK</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> k) {
  <span class="kw">int</span> sum = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; k; i++) sum += a[i];
  <span class="kw">int</span> best = sum;
  <span class="kw">for</span> (<span class="kw">int</span> i = k; i &lt; a.length; i++) {
    sum += a[i] - a[i - k];      <span class="com">// add right, drop left</span>
    best = Math.max(best, sum);
  }
  <span class="kw">return</span> best;
}` },

      { type: 'heading', text: 'Variable window: longest unique', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">longestUnique</span>(<span class="ty">String</span> s) {
  <span class="ty">Set</span>&lt;<span class="ty">Character</span>&gt; window = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  <span class="kw">int</span> l = <span class="num">0</span>, best = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r &lt; s.length(); r++) {
    <span class="kw">while</span> (window.contains(s.charAt(r))) {
      window.remove(s.charAt(l++));  <span class="com">// shrink from left</span>
    }
    window.add(s.charAt(r));
    best = Math.max(best, r - l + <span class="num">1</span>);
  }
  <span class="kw">return</span> best;
}` },

      { type: 'widget', name: 'code-stepper', props: {
        lines: [
          '<span class="ty">String</span> s = "abcabcbb"',
          '<span class="kw">int</span> l = <span class="num">0</span>, best = <span class="num">0</span>;',
          'expand r → add s[r] to window',
          'if duplicate → shrink l until unique',
          'best = max(best, r - l + 1)'
        ],
        steps: [
          { line: 0, vars: { s: 'abcabcbb', l: '-', r: '-' }, note: 'Goal: longest substring with all unique chars.' },
          { line: 2, vars: { window: '{a}', l: '0', r: '0', best: '1' }, note: 'r=0, add a.' },
          { line: 2, vars: { window: '{a,b,c}', l: '0', r: '2', best: '3' }, note: 'r=2, window full unique, best=3.' },
          { line: 3, vars: { window: '{b,c,a}', l: '1', r: '3', best: '3' }, note: 'r=3 is "a" again — shrink l until no dup.' },
          { line: 4, vars: { best: '3' }, note: 'Final best length = 3 ("abc").' }
        ]
      }},

      { type: 'heading', text: 'Common sliding-window problems', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Longest Substring Without Repeating (LC 3)',
        'Max Sum of K Consecutive (classic)',
        'Min Window Substring (LC 76)',
        'Permutation in String (LC 567)',
        'Fruits Into Baskets (LC 904)',
        'Longest Repeating Character Replacement (LC 424)'
      ]},

      { type: 'heading', text: 'Pitfalls', level: 2 },
      { type: 'callout', kind: 'warn', html: 'When shrinking the window, decide carefully: do you shrink <em>while</em> the condition holds, or <em>until</em> it holds? Off-by-one bugs live here.' },

      { type: 'heading', text: 'Template you can memorize', level: 2 },
      { type: 'code', lang: 'text', code:
`l = 0
for r in 0..n:
    expand window with element[r]
    while window violates constraint:
        shrink: remove element[l], l++
    update answer using current window` }
    ]},

    /* ============== CH 10: Hashing ============== */
    { id: 'iv-c10', title: 'Pattern: Hashing', icon: '🗂️', sections: [
      { type: 'heading', text: 'O(1) lookups change the game', level: 1 },
      { type: 'para', html: 'Hashmaps and hashsets give average O(1) insert / lookup / delete. They\'re the most-used data structure in interviews after arrays — and they trade memory for speed.' },

      { type: 'heading', text: 'When to use a hash', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Look up by key in O(1)',
        'Count frequencies',
        'Detect duplicates',
        'Map between two domains (char→count, val→index)',
        'Cache previously computed answers (memoization)'
      ]},

      { type: 'heading', text: 'Two Sum — the canonical example', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span>[] <span class="fn">twoSum</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> target) {
  <span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {
    <span class="kw">int</span> need = target - a[i];
    <span class="kw">if</span> (seen.containsKey(need)) {
      <span class="kw">return</span> <span class="kw">new int</span>[]{seen.get(need), i};
    }
    seen.put(a[i], i);
  }
  <span class="kw">return</span> <span class="kw">new int</span>[]{-<span class="num">1</span>, -<span class="num">1</span>};
}
<span class="com">// Time O(n), Space O(n)</span>` },

      { type: 'heading', text: 'Contains duplicate', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span> <span class="fn">hasDup</span>(<span class="kw">int</span>[] a) {
  <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="kw">int</span> x : a) {
    <span class="kw">if</span> (!seen.add(x)) <span class="kw">return</span> <span class="kw">true</span>;
  }
  <span class="kw">return</span> <span class="kw">false</span>;
}` },

      { type: 'heading', text: 'Group anagrams', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">String</span>&gt;&gt; <span class="fn">groupAnagrams</span>(<span class="ty">String</span>[] strs) {
  <span class="ty">Map</span>&lt;<span class="ty">String</span>, <span class="ty">List</span>&lt;<span class="ty">String</span>&gt;&gt; groups = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
  <span class="kw">for</span> (<span class="ty">String</span> s : strs) {
    <span class="kw">char</span>[] c = s.toCharArray();
    <span class="ty">Arrays</span>.sort(c);
    <span class="ty">String</span> key = <span class="kw">new</span> <span class="ty">String</span>(c);
    groups.computeIfAbsent(key, k -&gt; <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;()).add(s);
  }
  <span class="kw">return</span> <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(groups.values());
}` },
      { type: 'callout', kind: 'tip', html: 'Alternate key: a 26-int char-count array converted to a string. O(n) per word instead of O(n log n).' },

      { type: 'heading', text: 'Frequency map pattern', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">Map</span>&lt;<span class="ty">Character</span>, <span class="ty">Integer</span>&gt; freq = <span class="kw">new</span> <span class="ty">HashMap</span>&lt;&gt;();
<span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
  freq.merge(c, <span class="num">1</span>, <span class="ty">Integer</span>::sum);
}` },

      { type: 'heading', text: 'Hash collisions in interviews', level: 2 },
      { type: 'para', html: 'Java\'s HashMap is O(1) average. <strong>Worst case</strong> is O(n) if many keys hash to the same bucket. In Java 8+, long collision chains turn into a balanced tree, giving O(log n) worst case.' },
      { type: 'callout', kind: 'info', html: 'For custom keys, always override <code>equals</code> AND <code>hashCode</code>. Otherwise lookups silently break.' },

      { type: 'heading', text: 'Hashing pitfalls', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Mutable keys → if the key changes after insert, the map loses it',
        'Iterating order is not guaranteed (use LinkedHashMap if needed)',
        'Hash storage is not free — large maps eat memory',
        '<code>map.get(k)</code> returns null if absent; <code>getOrDefault</code> is safer'
      ]},

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Two Sum (LC 1)',
        'Contains Duplicate (LC 217)',
        'Valid Anagram (LC 242)',
        'Group Anagrams (LC 49)',
        'Longest Consecutive Sequence (LC 128)',
        'Subarray Sum Equals K (LC 560)',
        'LRU Cache (LC 146)'
      ]}
    ]},

    /* ============== CH 11: Recursion & Backtracking ============== */
    { id: 'iv-c11', title: 'Pattern: Recursion & Backtracking', icon: '🔁', sections: [
      { type: 'heading', text: 'Recursion = solving by self-similarity', level: 1 },
      { type: 'para', html: 'A recursive function solves a problem by reducing it to a smaller version of itself, plus a base case. Backtracking is recursion that <em>undoes</em> its choices on the way back.' },

      { type: 'heading', text: 'The recursion checklist', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Base case</strong> — when do we stop?',
        '<strong>Recursive case</strong> — how do we shrink the problem?',
        '<strong>Combination</strong> — how do we combine sub-answers?',
        '<strong>Return type</strong> — what does each call hand back?'
      ]},

      { type: 'heading', text: 'Classic: factorial', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">fact</span>(<span class="kw">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;     <span class="com">// base</span>
  <span class="kw">return</span> n * <span class="fn">fact</span>(n - <span class="num">1</span>);     <span class="com">// recurse</span>
}` },

      { type: 'heading', text: 'Backtracking template', level: 2 },
      { type: 'code', lang: 'text', code:
`backtrack(state):
    if state is a complete solution:
        record it
        return

    for each choice in possible choices:
        make the choice (mutate state)
        backtrack(new state)
        undo the choice (restore state)` },

      { type: 'heading', text: 'Subsets (power set)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; <span class="fn">subsets</span>(<span class="kw">int</span>[] nums) {
  <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; out = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="fn">bt</span>(nums, <span class="num">0</span>, <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(), out);
  <span class="kw">return</span> out;
}
<span class="kw">void</span> <span class="fn">bt</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> i, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; out) {
  <span class="kw">if</span> (i == a.length) { out.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur)); <span class="kw">return</span>; }
  <span class="com">// include a[i]</span>
  cur.add(a[i]);
  <span class="fn">bt</span>(a, i + <span class="num">1</span>, cur, out);
  cur.remove(cur.size() - <span class="num">1</span>);  <span class="com">// undo</span>
  <span class="com">// exclude a[i]</span>
  <span class="fn">bt</span>(a, i + <span class="num">1</span>, cur, out);
}` },

      { type: 'heading', text: 'Permutations', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">permute</span>(<span class="kw">int</span>[] a, <span class="kw">boolean</span>[] used, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt; cur, <span class="ty">List</span>&lt;<span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; out) {
  <span class="kw">if</span> (cur.size() == a.length) {
    out.add(<span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;(cur));
    <span class="kw">return</span>;
  }
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {
    <span class="kw">if</span> (used[i]) <span class="kw">continue</span>;
    used[i] = <span class="kw">true</span>;
    cur.add(a[i]);
    <span class="fn">permute</span>(a, used, cur, out);
    cur.remove(cur.size() - <span class="num">1</span>);
    used[i] = <span class="kw">false</span>;
  }
}` },

      { type: 'heading', text: 'N-Queens', level: 2 },
      { type: 'para', html: 'Place N queens on an N×N board so no two attack each other. Backtrack column by column, prune using row, diagonal, anti-diagonal sets.' },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">solve</span>(<span class="kw">int</span> n, <span class="kw">int</span> row,
           <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; cols, <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; diag, <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; anti,
           <span class="kw">int</span>[] placement, <span class="ty">List</span>&lt;<span class="kw">int</span>[]&gt; out) {
  <span class="kw">if</span> (row == n) { out.add(placement.clone()); <span class="kw">return</span>; }
  <span class="kw">for</span> (<span class="kw">int</span> c = <span class="num">0</span>; c &lt; n; c++) {
    <span class="kw">if</span> (cols.contains(c) || diag.contains(row - c) || anti.contains(row + c)) <span class="kw">continue</span>;
    cols.add(c); diag.add(row - c); anti.add(row + c); placement[row] = c;
    <span class="fn">solve</span>(n, row + <span class="num">1</span>, cols, diag, anti, placement, out);
    cols.remove(c); diag.remove(row - c); anti.remove(row + c);
  }
}` },

      { type: 'heading', text: 'Recursion tree intuition', level: 2 },
      { type: 'image', alt: 'subsets recursion tree', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <g font-family="JetBrains Mono" font-size="11">
    <circle cx="300" cy="30" r="20" fill="#7c4dff"/><text x="300" y="34" text-anchor="middle" fill="white">[]</text>
    <line x1="300" y1="50" x2="180" y2="80" stroke="#888"/>
    <line x1="300" y1="50" x2="420" y2="80" stroke="#888"/>
    <circle cx="180" cy="95" r="20" fill="#5e35d5"/><text x="180" y="99" text-anchor="middle" fill="white">[1]</text>
    <circle cx="420" cy="95" r="20" fill="#5e35d5"/><text x="420" y="99" text-anchor="middle" fill="white">[ ]</text>
    <line x1="180" y1="115" x2="110" y2="150" stroke="#888"/>
    <line x1="180" y1="115" x2="250" y2="150" stroke="#888"/>
    <line x1="420" y1="115" x2="350" y2="150" stroke="#888"/>
    <line x1="420" y1="115" x2="490" y2="150" stroke="#888"/>
    <circle cx="110" cy="165" r="22" fill="#1cb0f6"/><text x="110" y="169" text-anchor="middle" fill="white" font-size="10">[1,2]</text>
    <circle cx="250" cy="165" r="20" fill="#1cb0f6"/><text x="250" y="169" text-anchor="middle" fill="white">[1]</text>
    <circle cx="350" cy="165" r="20" fill="#1cb0f6"/><text x="350" y="169" text-anchor="middle" fill="white">[2]</text>
    <circle cx="490" cy="165" r="20" fill="#1cb0f6"/><text x="490" y="169" text-anchor="middle" fill="white">[ ]</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Complexity of recursion', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Subsets: O(2^n) — every element in/out',
        'Permutations: O(n! · n)',
        'N-Queens: O(n!) worst case, much faster with pruning',
        'Recursion uses O(depth) stack memory'
      ]},

      { type: 'heading', text: 'Stack overflow danger', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Java\'s default stack is ~512KB — about 10–20k frames. For deep recursion (DFS on 1M nodes), convert to iterative with an explicit stack.' },

      { type: 'heading', text: 'Common mistakes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Forgetting to undo the choice — state leaks across branches',
        'Adding <code>cur</code> directly to out instead of a copy — mutated later',
        'Off-by-one in base case',
        'Not pruning early — TLE on hard problems'
      ]},

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Subsets (LC 78)',
        'Permutations (LC 46)',
        'Combination Sum (LC 39)',
        'Word Search (LC 79)',
        'N-Queens (LC 51)',
        'Sudoku Solver (LC 37)',
        'Generate Parentheses (LC 22)',
        'Letter Combinations of Phone Number (LC 17)'
      ]}
    ]},

    /* ============== CH 12: BFS/DFS ============== */
    { id: 'iv-c12', title: 'Pattern: BFS / DFS', icon: '🕸️', sections: [
      { type: 'heading', text: 'Two ways to explore a graph', level: 1 },
      { type: 'para', html: 'Almost every graph / tree problem is solved with either Breadth-First Search (queue, level-by-level) or Depth-First Search (stack/recursion, go deep first).' },

      { type: 'heading', text: 'BFS vs DFS at a glance', level: 2 },
      { type: 'image', alt: 'bfs vs dfs', svg:
`<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="220" fill="#fafafa" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">BFS (queue, level)</text>
  <text x="450" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">DFS (stack, deep)</text>
  <g font-family="Nunito" font-size="11">
    <circle cx="150" cy="50" r="14" fill="#7c4dff"/><text x="150" y="54" text-anchor="middle" fill="white">1</text>
    <line x1="150" y1="64" x2="110" y2="90" stroke="#888"/>
    <line x1="150" y1="64" x2="190" y2="90" stroke="#888"/>
    <circle cx="110" cy="100" r="14" fill="#5e35d5"/><text x="110" y="104" text-anchor="middle" fill="white">2</text>
    <circle cx="190" cy="100" r="14" fill="#5e35d5"/><text x="190" y="104" text-anchor="middle" fill="white">3</text>
    <line x1="110" y1="114" x2="80" y2="145" stroke="#888"/>
    <line x1="110" y1="114" x2="140" y2="145" stroke="#888"/>
    <circle cx="80" cy="155" r="14" fill="#1cb0f6"/><text x="80" y="159" text-anchor="middle" fill="white">4</text>
    <circle cx="140" cy="155" r="14" fill="#1cb0f6"/><text x="140" y="159" text-anchor="middle" fill="white">5</text>
    <text x="150" y="200" text-anchor="middle" font-family="JetBrains Mono" font-size="11">1 → 2,3 → 4,5</text>

    <circle cx="450" cy="50" r="14" fill="#7c4dff"/><text x="450" y="54" text-anchor="middle" fill="white">1</text>
    <line x1="450" y1="64" x2="410" y2="90" stroke="#888"/>
    <line x1="450" y1="64" x2="490" y2="90" stroke="#888"/>
    <circle cx="410" cy="100" r="14" fill="#5e35d5"/><text x="410" y="104" text-anchor="middle" fill="white">2</text>
    <circle cx="490" cy="100" r="14" fill="#5e35d5"/><text x="490" y="104" text-anchor="middle" fill="white">5</text>
    <line x1="410" y1="114" x2="380" y2="145" stroke="#888"/>
    <line x1="410" y1="114" x2="440" y2="145" stroke="#888"/>
    <circle cx="380" cy="155" r="14" fill="#1cb0f6"/><text x="380" y="159" text-anchor="middle" fill="white">3</text>
    <circle cx="440" cy="155" r="14" fill="#1cb0f6"/><text x="440" y="159" text-anchor="middle" fill="white">4</text>
    <text x="450" y="200" text-anchor="middle" font-family="JetBrains Mono" font-size="11">1 → 2 → 3 → 4 → 5</text>
  </g>
</svg>` },

      { type: 'heading', text: 'When to use BFS', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Shortest path in unweighted graph',
        'Level-order traversal of a tree',
        'Minimum steps to a target state',
        'You need the answer level-by-level (e.g., zigzag)'
      ]},

      { type: 'heading', text: 'When to use DFS', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Detect cycles',
        'Topological sort',
        'Count connected components',
        'Path-existence questions ("is there any path?")',
        'Tree problems where recursion is natural'
      ]},

      { type: 'heading', text: 'BFS template (graph)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">bfs</span>(<span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; g, <span class="kw">int</span> start) {
  <span class="ty">Queue</span>&lt;<span class="ty">Integer</span>&gt; q = <span class="kw">new</span> <span class="ty">ArrayDeque</span>&lt;&gt;();
  <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; seen = <span class="kw">new</span> <span class="ty">HashSet</span>&lt;&gt;();
  q.offer(start); seen.add(start);
  <span class="kw">while</span> (!q.isEmpty()) {
    <span class="kw">int</span> node = q.poll();
    <span class="kw">for</span> (<span class="kw">int</span> nbr : g.getOrDefault(node, <span class="ty">List</span>.of())) {
      <span class="kw">if</span> (seen.add(nbr)) q.offer(nbr);
    }
  }
}` },

      { type: 'heading', text: 'DFS template (recursive)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">void</span> <span class="fn">dfs</span>(<span class="kw">int</span> node, <span class="ty">Map</span>&lt;<span class="ty">Integer</span>, <span class="ty">List</span>&lt;<span class="ty">Integer</span>&gt;&gt; g, <span class="ty">Set</span>&lt;<span class="ty">Integer</span>&gt; seen) {
  <span class="kw">if</span> (!seen.add(node)) <span class="kw">return</span>;
  <span class="kw">for</span> (<span class="kw">int</span> nbr : g.getOrDefault(node, <span class="ty">List</span>.of())) {
    <span class="fn">dfs</span>(nbr, g, seen);
  }
}` },

      { type: 'heading', text: 'Count islands (grid DFS)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">numIslands</span>(<span class="kw">char</span>[][] grid) {
  <span class="kw">int</span> count = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r &lt; grid.length; r++)
    <span class="kw">for</span> (<span class="kw">int</span> c = <span class="num">0</span>; c &lt; grid[<span class="num">0</span>].length; c++)
      <span class="kw">if</span> (grid[r][c] == <span class="str">\'1\'</span>) {
        <span class="fn">sink</span>(grid, r, c);
        count++;
      }
  <span class="kw">return</span> count;
}
<span class="kw">void</span> <span class="fn">sink</span>(<span class="kw">char</span>[][] g, <span class="kw">int</span> r, <span class="kw">int</span> c) {
  <span class="kw">if</span> (r &lt; <span class="num">0</span> || c &lt; <span class="num">0</span> || r &gt;= g.length || c &gt;= g[<span class="num">0</span>].length || g[r][c] != <span class="str">\'1\'</span>) <span class="kw">return</span>;
  g[r][c] = <span class="str">\'0\'</span>;
  <span class="fn">sink</span>(g, r+<span class="num">1</span>, c); <span class="fn">sink</span>(g, r-<span class="num">1</span>, c);
  <span class="fn">sink</span>(g, r, c+<span class="num">1</span>); <span class="fn">sink</span>(g, r, c-<span class="num">1</span>);
}` },

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Binary Tree Level Order Traversal (LC 102)',
        'Number of Islands (LC 200)',
        'Clone Graph (LC 133)',
        'Word Ladder (LC 127)',
        'Course Schedule (LC 207)',
        'Pacific Atlantic Water Flow (LC 417)',
        'Rotting Oranges (LC 994)'
      ]}
    ]},

    /* ============== CH 13: Dynamic Programming ============== */
    { id: 'iv-c13', title: 'Pattern: Dynamic Programming', icon: '🧮', sections: [
      { type: 'heading', text: 'DP = recursion + memoization', level: 1 },
      { type: 'para', html: 'DP solves problems with <strong>overlapping subproblems</strong> and <strong>optimal substructure</strong>. You store sub-answers in a table so you never compute the same thing twice.' },

      { type: 'heading', text: 'How to recognize DP', level: 2 },
      { type: 'list', kind: 'check', items: [
        '"Find the max / min / count of..."',
        '"Number of ways to..."',
        'You see <strong>recurrence</strong> when brainstorming',
        'Brute recursion has <em>repeating</em> subproblems',
        'Choice at each step (take it / skip it)'
      ]},

      { type: 'heading', text: 'Top-down vs bottom-up', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Top-down (memoization)</strong>: recurse + cache. Easier to write, uses stack.',
        '<strong>Bottom-up (tabulation)</strong>: iterative, fill a table from base up. More memory-efficient, no stack risk.'
      ]},

      { type: 'heading', text: 'Fibonacci — the entry drug', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// Naive — O(2^n)</span>
<span class="kw">int</span> <span class="fn">fib</span>(<span class="kw">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
  <span class="kw">return</span> <span class="fn">fib</span>(n - <span class="num">1</span>) + <span class="fn">fib</span>(n - <span class="num">2</span>);
}

<span class="com">// Memoized — O(n)</span>
<span class="kw">int</span> <span class="fn">fibMemo</span>(<span class="kw">int</span> n, <span class="ty">Integer</span>[] memo) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
  <span class="kw">if</span> (memo[n] != <span class="kw">null</span>) <span class="kw">return</span> memo[n];
  <span class="kw">return</span> memo[n] = <span class="fn">fibMemo</span>(n-<span class="num">1</span>, memo) + <span class="fn">fibMemo</span>(n-<span class="num">2</span>, memo);
}

<span class="com">// Tabulated — O(n) time, O(1) space</span>
<span class="kw">int</span> <span class="fn">fibIter</span>(<span class="kw">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> n;
  <span class="kw">int</span> a = <span class="num">0</span>, b = <span class="num">1</span>;
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">2</span>; i &lt;= n; i++) {
    <span class="kw">int</span> c = a + b;
    a = b; b = c;
  }
  <span class="kw">return</span> b;
}` },

      { type: 'heading', text: 'The DP recipe', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Define state</strong>: what does <code>dp[i]</code> or <code>dp[i][j]</code> mean?',
        '<strong>Recurrence</strong>: how is dp[i] built from earlier states?',
        '<strong>Base case(s)</strong>: dp[0] = ?, dp[1] = ?',
        '<strong>Order of computation</strong>: which dimension fills first?',
        '<strong>Answer location</strong>: dp[n]? dp[n][k]? max of dp?'
      ]},

      { type: 'heading', text: 'Climbing Stairs', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">climb</span>(<span class="kw">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">2</span>) <span class="kw">return</span> n;
  <span class="kw">int</span>[] dp = <span class="kw">new int</span>[n + <span class="num">1</span>];
  dp[<span class="num">1</span>] = <span class="num">1</span>; dp[<span class="num">2</span>] = <span class="num">2</span>;
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">3</span>; i &lt;= n; i++) dp[i] = dp[i-<span class="num">1</span>] + dp[i-<span class="num">2</span>];
  <span class="kw">return</span> dp[n];
}
<span class="com">// dp[i] = ways to reach step i = ways to (i-1) + ways to (i-2)</span>` },

      { type: 'heading', text: 'House Robber', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">rob</span>(<span class="kw">int</span>[] a) {
  <span class="kw">int</span> prev2 = <span class="num">0</span>, prev1 = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> x : a) {
    <span class="kw">int</span> cur = Math.max(prev1, prev2 + x);
    prev2 = prev1;
    prev1 = cur;
  }
  <span class="kw">return</span> prev1;
}
<span class="com">// At each house: rob it (prev2 + x) OR skip (prev1)</span>` },

      { type: 'heading', text: 'Longest Increasing Subsequence', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="com">// O(n^2) DP</span>
<span class="kw">int</span> <span class="fn">lengthOfLIS</span>(<span class="kw">int</span>[] a) {
  <span class="kw">int</span>[] dp = <span class="kw">new int</span>[a.length];
  <span class="ty">Arrays</span>.fill(dp, <span class="num">1</span>);
  <span class="kw">int</span> best = <span class="num">1</span>;
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i &lt; a.length; i++) {
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="num">0</span>; j &lt; i; j++) {
      <span class="kw">if</span> (a[j] &lt; a[i]) dp[i] = Math.max(dp[i], dp[j] + <span class="num">1</span>);
    }
    best = Math.max(best, dp[i]);
  }
  <span class="kw">return</span> best;
}` },

      { type: 'heading', text: '0/1 Knapsack', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">knapsack</span>(<span class="kw">int</span>[] w, <span class="kw">int</span>[] v, <span class="kw">int</span> W) {
  <span class="kw">int</span> n = w.length;
  <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[n + <span class="num">1</span>][W + <span class="num">1</span>];
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">1</span>; i &lt;= n; i++) {
    <span class="kw">for</span> (<span class="kw">int</span> c = <span class="num">0</span>; c &lt;= W; c++) {
      dp[i][c] = dp[i-<span class="num">1</span>][c];   <span class="com">// skip</span>
      <span class="kw">if</span> (c &gt;= w[i-<span class="num">1</span>]) {
        dp[i][c] = Math.max(dp[i][c], dp[i-<span class="num">1</span>][c - w[i-<span class="num">1</span>]] + v[i-<span class="num">1</span>]);
      }
    }
  }
  <span class="kw">return</span> dp[n][W];
}` },

      { type: 'heading', text: 'Coin Change (min coins)', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">coinChange</span>(<span class="kw">int</span>[] coins, <span class="kw">int</span> amt) {
  <span class="kw">int</span>[] dp = <span class="kw">new int</span>[amt + <span class="num">1</span>];
  <span class="ty">Arrays</span>.fill(dp, amt + <span class="num">1</span>);
  dp[<span class="num">0</span>] = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> a = <span class="num">1</span>; a &lt;= amt; a++) {
    <span class="kw">for</span> (<span class="kw">int</span> c : coins) {
      <span class="kw">if</span> (a &gt;= c) dp[a] = Math.min(dp[a], dp[a - c] + <span class="num">1</span>);
    }
  }
  <span class="kw">return</span> dp[amt] &gt; amt ? -<span class="num">1</span> : dp[amt];
}` },

      { type: 'heading', text: 'The top 5 DP problems to know', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Fibonacci / Climbing Stairs (1D)',
        'House Robber (1D with choice)',
        'Longest Common Subsequence (2D string)',
        'Knapsack (2D weight/items)',
        'Edit Distance (2D string transform)'
      ]},

      { type: 'heading', text: 'DP debugging', level: 2 },
      { type: 'callout', kind: 'tip', html: 'When DP feels off, <strong>print the table</strong>. Walking through a 5×5 grid for an example reveals base-case and recurrence bugs faster than any debugger.' }
    ]},

    /* ============== CH 14: Greedy ============== */
    { id: 'iv-c14', title: 'Pattern: Greedy', icon: '🤑', sections: [
      { type: 'heading', text: 'Take the locally best choice', level: 1 },
      { type: 'para', html: 'A greedy algorithm makes the best choice at each step, hoping it leads to a global optimum. Greedy works when the problem has a <strong>greedy-choice property</strong>: local optima compose into a global optimum.' },
      { type: 'callout', kind: 'warn', html: 'Greedy is dangerous — when it fails, you may not notice until edge cases break. Always justify <em>why</em> greedy works.' },

      { type: 'heading', text: 'Classic: Jump Game', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">boolean</span> <span class="fn">canJump</span>(<span class="kw">int</span>[] a) {
  <span class="kw">int</span> reach = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {
    <span class="kw">if</span> (i &gt; reach) <span class="kw">return</span> <span class="kw">false</span>;
    reach = Math.max(reach, i + a[i]);
  }
  <span class="kw">return</span> <span class="kw">true</span>;
}
<span class="com">// At each step, track the farthest we can reach. O(n) time, O(1) space.</span>` },

      { type: 'heading', text: 'When greedy succeeds', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Activity selection by earliest finish time',
        'Huffman coding',
        'Dijkstra\'s shortest path (non-negative weights)',
        'Interval scheduling / merging',
        'Fractional knapsack (not 0/1)'
      ]},

      { type: 'heading', text: 'When greedy fails', level: 2 },
      { type: 'para', html: 'Greedy fails when local choices lock out better global options. 0/1 knapsack: picking the highest value-per-weight first can leave better combinations on the table. The fix is DP.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Coin change with [1, 3, 4], target 6</span>
Greedy: 4 + 1 + 1 = 3 coins
Optimal: 3 + 3   = 2 coins   ← greedy missed this` },

      { type: 'heading', text: 'Interval scheduling', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span> <span class="fn">eraseOverlapIntervals</span>(<span class="kw">int</span>[][] intervals) {
  <span class="ty">Arrays</span>.sort(intervals, (a, b) -&gt; a[<span class="num">1</span>] - b[<span class="num">1</span>]);  <span class="com">// sort by end</span>
  <span class="kw">int</span> end = Integer.MIN_VALUE, removed = <span class="num">0</span>;
  <span class="kw">for</span> (<span class="kw">int</span>[] iv : intervals) {
    <span class="kw">if</span> (iv[<span class="num">0</span>] &gt;= end) end = iv[<span class="num">1</span>];
    <span class="kw">else</span> removed++;
  }
  <span class="kw">return</span> removed;
}` },

      { type: 'heading', text: 'How to justify greedy', level: 2 },
      { type: 'para', html: 'Exchange argument: assume an optimal solution differs from greedy at some step. Swap greedy\'s choice in — show it\'s still optimal. By induction, greedy is also optimal.' },

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Jump Game (LC 55)',
        'Gas Station (LC 134)',
        'Non-overlapping Intervals (LC 435)',
        'Task Scheduler (LC 621)',
        'Partition Labels (LC 763)',
        'Minimum Number of Arrows (LC 452)'
      ]}
    ]},

    /* ============== CH 15: Heap / Priority Queue ============== */
    { id: 'iv-c15', title: 'Pattern: Heap / Priority Queue', icon: '⛰️', sections: [
      { type: 'heading', text: 'Always know the next best element', level: 1 },
      { type: 'para', html: 'A heap (priority queue) gives you O(log n) insert and O(log n) extract-min/max. Use it whenever you keep needing the smallest, largest, or k-th smallest of a changing set.' },

      { type: 'heading', text: 'Java API quick ref', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; minHeap = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();
<span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; maxHeap = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(<span class="ty">Comparator</span>.reverseOrder());

minHeap.offer(<span class="num">5</span>);    <span class="com">// add</span>
minHeap.peek();      <span class="com">// look (O(1))</span>
minHeap.poll();      <span class="com">// remove top (O(log n))</span>
minHeap.size();` },

      { type: 'heading', text: 'Top K largest', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">int</span>[] <span class="fn">topK</span>(<span class="kw">int</span>[] a, <span class="kw">int</span> k) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;();  <span class="com">// min-heap</span>
  <span class="kw">for</span> (<span class="kw">int</span> x : a) {
    pq.offer(x);
    <span class="kw">if</span> (pq.size() &gt; k) pq.poll();   <span class="com">// kick smallest</span>
  }
  <span class="kw">int</span>[] out = <span class="kw">new int</span>[k];
  <span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; k; i++) out[i] = pq.poll();
  <span class="kw">return</span> out;
}
<span class="com">// Time O(n log k), Space O(k)</span>` },
      { type: 'callout', kind: 'tip', html: 'For top-K largest, use a <strong>min-heap of size k</strong>. The smallest in the heap is the threshold — anything smaller gets dropped.' },

      { type: 'heading', text: 'Merge K sorted lists', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="ty">ListNode</span> <span class="fn">mergeK</span>(<span class="ty">ListNode</span>[] lists) {
  <span class="ty">PriorityQueue</span>&lt;<span class="ty">ListNode</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;((a, b) -&gt; a.val - b.val);
  <span class="kw">for</span> (<span class="ty">ListNode</span> head : lists) <span class="kw">if</span> (head != <span class="kw">null</span>) pq.offer(head);
  <span class="ty">ListNode</span> dummy = <span class="kw">new</span> <span class="ty">ListNode</span>(<span class="num">0</span>), tail = dummy;
  <span class="kw">while</span> (!pq.isEmpty()) {
    <span class="ty">ListNode</span> n = pq.poll();
    tail.next = n; tail = n;
    <span class="kw">if</span> (n.next != <span class="kw">null</span>) pq.offer(n.next);
  }
  <span class="kw">return</span> dummy.next;
}` },

      { type: 'heading', text: 'Two-heap trick: median stream', level: 2 },
      { type: 'para', html: 'Maintain a max-heap of the lower half and a min-heap of the upper half. Median is the top of one (odd) or average of both tops (even).' },

      { type: 'heading', text: 'Practice list', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Kth Largest Element (LC 215)',
        'Top K Frequent Elements (LC 347)',
        'Merge K Sorted Lists (LC 23)',
        'Find Median from Data Stream (LC 295)',
        'K Closest Points to Origin (LC 973)',
        'Task Scheduler (LC 621)'
      ]}
    ]},

    /* ============== CH 16: System Design Foundations ============== */
    { id: 'iv-c16', title: 'System Design Foundations', icon: '🏗️', sections: [
      { type: 'heading', text: 'You\'re not just coding anymore', level: 1 },
      { type: 'para', html: 'System design rounds test how you reason about <strong>scale</strong>. There\'s no single correct answer — interviewers want to see how you make trade-offs given constraints.' },

      { type: 'heading', text: 'The 5-step framework', level: 2 },
      { type: 'image', alt: 'system design framework', svg:
`<svg viewBox="0 0 720 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="140" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <rect x="20" y="40" width="120" height="60" rx="10" fill="#7c4dff"/><text x="80" y="68" text-anchor="middle" fill="white" font-weight="bold">1. Requirements</text><text x="80" y="86" text-anchor="middle" fill="white" font-size="10">functional + non</text>
    <text x="150" y="74" fill="#666">→</text>
    <rect x="165" y="40" width="120" height="60" rx="10" fill="#5e35d5"/><text x="225" y="68" text-anchor="middle" fill="white" font-weight="bold">2. Estimate</text><text x="225" y="86" text-anchor="middle" fill="white" font-size="10">QPS, storage</text>
    <text x="295" y="74" fill="#666">→</text>
    <rect x="310" y="40" width="120" height="60" rx="10" fill="#1cb0f6"/><text x="370" y="68" text-anchor="middle" fill="white" font-weight="bold">3. High-level</text><text x="370" y="86" text-anchor="middle" fill="white" font-size="10">boxes + arrows</text>
    <text x="440" y="74" fill="#666">→</text>
    <rect x="455" y="40" width="120" height="60" rx="10" fill="#0e88c8"/><text x="515" y="68" text-anchor="middle" fill="white" font-weight="bold">4. Deep dive</text><text x="515" y="86" text-anchor="middle" fill="white" font-size="10">DB, cache, API</text>
    <text x="585" y="74" fill="#666">→</text>
    <rect x="600" y="40" width="100" height="60" rx="10" fill="#58cc02"/><text x="650" y="68" text-anchor="middle" fill="white" font-weight="bold">5. Trade-offs</text><text x="650" y="86" text-anchor="middle" fill="white" font-size="10">+ scale</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Latency vs throughput', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Latency</strong>: how long a single request takes (e.g., 50ms)',
        '<strong>Throughput</strong>: how many requests per second (e.g., 10k QPS)',
        'Lower latency does not mean higher throughput — a system can be slow per request but parallel'
      ]},

      { type: 'heading', text: 'Vertical vs horizontal scaling', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Vertical (scale up)</strong>: bigger machine — more RAM, more CPU. Simple but capped.',
        '<strong>Horizontal (scale out)</strong>: more machines — load-balanced. Unlimited, but stateful coordination is hard.'
      ]},
      { type: 'callout', kind: 'info', html: 'Modern web systems are nearly always horizontal. Vertical scaling shows up for DBs, caches, or specialized hardware.' },

      { type: 'heading', text: 'Availability vs consistency', level: 2 },
      { type: 'para', html: 'CAP theorem: under a network partition, you must choose between consistency (every read sees the latest write) and availability (every request gets a response). Most internet-scale systems prefer AP, with eventual consistency.' },

      { type: 'heading', text: 'Back-of-envelope numbers', level: 2 },
      { type: 'code', lang: 'text', code:
`L1 cache       : ~1 ns
RAM access     : ~100 ns
SSD read       : ~100 µs
Network (LAN)  : ~500 µs
SSD seq read   : ~1 GB/s
Disk seek      : ~10 ms
Network (intl) : ~150 ms

1M users · 10 req/day = ~120 QPS avg, ~1.2k peak` },

      { type: 'heading', text: 'Always start with requirements', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Who uses it? (users, internal, public)',
        'Key features? (read-heavy vs write-heavy)',
        'Scale? (1k vs 1M vs 1B users)',
        'Read/write ratio?',
        'Consistency needs? (eventual OK or must be strong?)',
        'Latency budget? (real-time? batch?)'
      ]},

      { type: 'heading', text: 'Estimate, don\'t guess', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Round aggressively. 1M ≈ 10^6. 1 year ≈ 30M seconds. 1KB · 1B rows = 1TB. The point is order of magnitude, not precision.' }
    ]},

    /* ============== CH 17: System Design Building Blocks ============== */
    { id: 'iv-c17', title: 'System Design Building Blocks', icon: '🧱', sections: [
      { type: 'heading', text: 'The boxes you draw on the whiteboard', level: 1 },
      { type: 'para', html: 'Almost every system design uses a small toolbox of components. Master 8–10 of these and you can sketch any common system in 10 minutes.' },

      { type: 'image', alt: 'standard architecture', svg:
`<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="280" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <rect x="20" y="30" width="80" height="40" rx="6" fill="#7c4dff"/><text x="60" y="56" text-anchor="middle" fill="white" font-weight="bold">Client</text>
    <line x1="100" y1="50" x2="135" y2="50" stroke="#888"/>
    <rect x="135" y="30" width="80" height="40" rx="6" fill="#5e35d5"/><text x="175" y="56" text-anchor="middle" fill="white" font-weight="bold">CDN</text>
    <line x1="215" y1="50" x2="250" y2="50" stroke="#888"/>
    <rect x="250" y="30" width="80" height="40" rx="6" fill="#5e35d5"/><text x="290" y="56" text-anchor="middle" fill="white" font-weight="bold">LB</text>
    <line x1="330" y1="50" x2="365" y2="50" stroke="#888"/>
    <rect x="365" y="20" width="100" height="60" rx="6" fill="#1cb0f6"/><text x="415" y="50" text-anchor="middle" fill="white" font-weight="bold">API</text><text x="415" y="68" text-anchor="middle" fill="white" font-size="10">app servers</text>
    <line x1="465" y1="50" x2="500" y2="50" stroke="#888"/>
    <rect x="500" y="20" width="100" height="60" rx="6" fill="#0e88c8"/><text x="550" y="44" text-anchor="middle" fill="white" font-weight="bold">Cache</text><text x="550" y="64" text-anchor="middle" fill="white" font-size="10">Redis</text>
    <line x1="600" y1="50" x2="640" y2="50" stroke="#888"/>
    <rect x="640" y="20" width="60" height="60" rx="6" fill="#58cc02"/><text x="670" y="44" text-anchor="middle" fill="white" font-weight="bold">DB</text><text x="670" y="64" text-anchor="middle" fill="white" font-size="10">primary</text>

    <line x1="415" y1="80" x2="415" y2="120" stroke="#888"/>
    <rect x="365" y="120" width="100" height="40" rx="6" fill="#ff9600"/><text x="415" y="146" text-anchor="middle" fill="white" font-weight="bold">Queue</text>
    <line x1="465" y1="140" x2="500" y2="140" stroke="#888"/>
    <rect x="500" y="120" width="120" height="40" rx="6" fill="#ff7043"/><text x="560" y="146" text-anchor="middle" fill="white" font-weight="bold">Workers</text>

    <line x1="670" y1="80" x2="670" y2="200" stroke="#888" stroke-dasharray="4 4"/>
    <rect x="600" y="200" width="80" height="40" rx="6" fill="#7e57c2"/><text x="640" y="226" text-anchor="middle" fill="white" font-weight="bold">DB replica</text>

    <line x1="560" y1="160" x2="560" y2="200" stroke="#888"/>
    <rect x="500" y="200" width="120" height="40" rx="6" fill="#26a69a"/><text x="560" y="226" text-anchor="middle" fill="white" font-weight="bold">Search/Analytics</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Load balancer', level: 2 },
      { type: 'para', html: 'Sits in front of servers, distributes requests. Layer 4 (TCP) is fast; Layer 7 (HTTP) is smart — can route by URL, header, cookie. Examples: AWS ALB/NLB, NGINX, HAProxy.' },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Round-robin</strong>: simple, equal share',
        '<strong>Least connections</strong>: route to least busy server',
        '<strong>IP hash / sticky session</strong>: same user → same server (avoid for stateless)',
        '<strong>Weighted</strong>: bigger servers get more traffic'
      ]},

      { type: 'heading', text: 'CDN (Content Delivery Network)', level: 2 },
      { type: 'para', html: 'Edge servers around the world cache static assets (images, JS, video). A user in Tokyo hits a Tokyo edge — not your US origin. Examples: CloudFront, Cloudflare, Fastly.' },

      { type: 'heading', text: 'Cache (in-memory)', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Redis</strong>: in-memory key-value store; persistence + pub/sub',
        '<strong>Memcached</strong>: simpler, pure cache',
        '<strong>Strategies</strong>: cache-aside (app fills on miss), write-through (sync), write-back (async)',
        '<strong>Eviction</strong>: LRU, LFU, TTL'
      ]},
      { type: 'callout', kind: 'tip', html: 'Cache hit rate of 90%+ is the bar. 10× the requests now hit RAM (microseconds) instead of disk (milliseconds).' },

      { type: 'heading', text: 'Databases — SQL vs NoSQL', level: 2 },
      { type: 'image', alt: 'SQL vs NoSQL', svg:
`<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="180" fill="#fafafa" rx="8"/>
  <text x="150" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14" fill="#1cb0f6">SQL</text>
  <text x="450" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14" fill="#ff9600">NoSQL</text>
  <g font-family="Nunito" font-size="11">
    <text x="40" y="50">• Schema fixed</text>
    <text x="40" y="70">• ACID transactions</text>
    <text x="40" y="90">• Joins</text>
    <text x="40" y="110">• Vertical scaling primary</text>
    <text x="40" y="130">• Strong consistency</text>
    <text x="40" y="158" font-style="italic" fill="#666">Postgres, MySQL</text>

    <text x="340" y="50">• Schema flexible (doc/KV)</text>
    <text x="340" y="70">• Eventual consistency</text>
    <text x="340" y="90">• Horizontal first</text>
    <text x="340" y="110">• High throughput</text>
    <text x="340" y="130">• Denormalize for speed</text>
    <text x="340" y="158" font-style="italic" fill="#666">MongoDB, DynamoDB, Cassandra</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Message queue / broker', level: 2 },
      { type: 'para', html: 'Decouples producers from consumers. Producer drops a message; consumer picks it up later. Smooths spikes, enables async work, retries on failure. Examples: Kafka, RabbitMQ, AWS SQS.' },
      { type: 'list', kind: 'check', items: [
        'Buffer write spikes',
        'Offload slow work (email, video encode)',
        'Decouple microservices',
        'Fan-out events (pub/sub)'
      ]},

      { type: 'heading', text: 'Object storage', level: 2 },
      { type: 'para', html: 'Cheap, durable storage for files/blobs — S3, GCS, Azure Blob. Pair with CDN for delivery. Cheaper than DB for large/infrequently changed data.' },

      { type: 'heading', text: 'Search engine', level: 2 },
      { type: 'para', html: 'For full-text search, autocomplete, fuzzy match. Use Elasticsearch, OpenSearch, or Algolia. Don\'t use SQL LIKE on millions of rows — it doesn\'t scale.' },

      { type: 'heading', text: 'API Gateway', level: 2 },
      { type: 'para', html: 'Single entry point for clients. Handles auth, rate limiting, routing, request/response transformation. Examples: Kong, AWS API Gateway, Apigee.' },

      { type: 'heading', text: 'Monitoring & observability', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Metrics</strong>: Prometheus, Grafana',
        '<strong>Logs</strong>: ELK stack, Datadog, Splunk',
        '<strong>Tracing</strong>: Jaeger, Zipkin, OpenTelemetry',
        'Mention these as the final layer in your design'
      ]}
    ]},

    /* ============== CH 18: System Design Patterns ============== */
    { id: 'iv-c18', title: 'System Design Patterns', icon: '🧩', sections: [
      { type: 'heading', text: 'Patterns that show up in every design', level: 1 },
      { type: 'para', html: 'Once you know the building blocks, designs come together via a few core patterns: sharding, replication, partitioning, and caching strategies.' },

      { type: 'heading', text: 'Replication', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Primary–replica</strong>: writes to primary, reads to replicas. Eventual consistency.',
        '<strong>Multi-primary</strong>: writes to multiple. Hard — conflict resolution needed.',
        '<strong>Synchronous</strong>: primary waits for replica ack. Slower, safer.',
        '<strong>Asynchronous</strong>: faster but may lose recent writes on failover.'
      ]},

      { type: 'heading', text: 'Sharding (horizontal partitioning)', level: 2 },
      { type: 'image', alt: 'sharded database', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <rect x="240" y="20" width="120" height="40" rx="6" fill="#7c4dff"/><text x="300" y="46" text-anchor="middle" fill="white" font-family="Nunito" font-weight="bold">Shard router</text>
  <line x1="300" y1="60" x2="100" y2="100" stroke="#888"/>
  <line x1="300" y1="60" x2="300" y2="100" stroke="#888"/>
  <line x1="300" y1="60" x2="500" y2="100" stroke="#888"/>
  <g font-family="Nunito" font-size="11">
    <rect x="40" y="100" width="120" height="80" rx="8" fill="#1cb0f6"/><text x="100" y="124" text-anchor="middle" fill="white" font-weight="bold">Shard 1</text><text x="100" y="144" text-anchor="middle" fill="white">user_id % 3 = 0</text><text x="100" y="164" text-anchor="middle" fill="white" font-size="10">~1B rows</text>
    <rect x="240" y="100" width="120" height="80" rx="8" fill="#1cb0f6"/><text x="300" y="124" text-anchor="middle" fill="white" font-weight="bold">Shard 2</text><text x="300" y="144" text-anchor="middle" fill="white">user_id % 3 = 1</text><text x="300" y="164" text-anchor="middle" fill="white" font-size="10">~1B rows</text>
    <rect x="440" y="100" width="120" height="80" rx="8" fill="#1cb0f6"/><text x="500" y="124" text-anchor="middle" fill="white" font-weight="bold">Shard 3</text><text x="500" y="144" text-anchor="middle" fill="white">user_id % 3 = 2</text><text x="500" y="164" text-anchor="middle" fill="white" font-size="10">~1B rows</text>
  </g>
</svg>` },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Hash sharding</strong>: hash(key) % N. Even, but resharding hurts.',
        '<strong>Range sharding</strong>: A–G, H–M... Hot spots if uneven.',
        '<strong>Consistent hashing</strong>: ring of hashes — adding a shard moves only 1/N keys.',
        '<strong>Directory-based</strong>: a lookup service maps key → shard.'
      ]},

      { type: 'heading', text: 'CAP theorem', level: 2 },
      { type: 'para', html: 'Under a network <strong>P</strong>artition, you must choose either <strong>C</strong>onsistency or <strong>A</strong>vailability — not both.' },
      { type: 'list', kind: 'check', items: [
        '<strong>CP</strong> (banking, locks): refuse reads/writes rather than return stale data',
        '<strong>AP</strong> (social feed, DNS): serve possibly stale data rather than fail',
        'No system is "CA" in production — partitions happen'
      ]},

      { type: 'heading', text: 'PACELC extension', level: 2 },
      { type: 'para', html: 'When there\'s <strong>no</strong> partition, you still trade between Latency and Consistency. PACELC = If Partition, A vs C; <strong>E</strong>lse, L vs C.' },

      { type: 'heading', text: 'Cache patterns', level: 2 },
      { type: 'code', lang: 'text', code:
`Cache-aside (lazy)
  Read: check cache; on miss, fetch DB, fill cache
  Write: write DB, invalidate cache

Write-through
  Write: write cache + DB together (sync)

Write-back
  Write: write cache, flush to DB async (risky on crash)

Read-through
  Cache library handles miss → DB call (transparent to app)` },

      { type: 'heading', text: 'Rate limiting', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Token bucket</strong>: refill tokens at rate r, request takes one',
        '<strong>Leaky bucket</strong>: smooth output rate',
        '<strong>Fixed window</strong>: count per minute (cheap, burstable at edges)',
        '<strong>Sliding window</strong>: smoother count'
      ]},

      { type: 'heading', text: 'Idempotency', level: 2 },
      { type: 'para', html: 'A request you can safely repeat. Critical for payments, retries. Implement via idempotency keys: client sends a UUID, server stores it for N hours, second request with same key returns cached result.' },
      { type: 'callout', kind: 'warn', html: 'Stripe and most payment APIs require idempotency keys. Always mention this when designing money-flow systems.' }
    ]},

    /* ============== CH 19: System Design Walkthroughs ============== */
    { id: 'iv-c19', title: 'System Design Walkthroughs', icon: '📐', sections: [
      { type: 'heading', text: 'Putting it all together', level: 1 },
      { type: 'para', html: 'Two example walkthroughs you can practice end-to-end. Time-box yourself: 5 min requirements, 5 min estimate, 10 min high-level, 15 min deep-dive, 10 min trade-offs.' },

      { type: 'heading', text: 'Walkthrough 1: URL Shortener', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Functional</strong>: shorten long URL → short ID; redirect short ID → long URL',
        '<strong>Non-functional</strong>: low latency reads, high availability, no collisions',
        '<strong>Scale</strong>: 100M shortens/day, 10x reads, 5-year retention'
      ]},

      { type: 'heading', text: 'URL shortener architecture', level: 2 },
      { type: 'image', alt: 'url shortener arch', svg:
`<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="240" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <rect x="20" y="30" width="80" height="40" rx="6" fill="#7c4dff"/><text x="60" y="56" text-anchor="middle" fill="white" font-weight="bold">Browser</text>
    <line x1="100" y1="50" x2="135" y2="50" stroke="#888"/>
    <rect x="135" y="30" width="80" height="40" rx="6" fill="#5e35d5"/><text x="175" y="56" text-anchor="middle" fill="white" font-weight="bold">CDN</text>
    <line x1="215" y1="50" x2="250" y2="50" stroke="#888"/>
    <rect x="250" y="30" width="80" height="40" rx="6" fill="#5e35d5"/><text x="290" y="56" text-anchor="middle" fill="white" font-weight="bold">LB</text>
    <line x1="330" y1="50" x2="365" y2="50" stroke="#888"/>
    <rect x="365" y="30" width="110" height="40" rx="6" fill="#1cb0f6"/><text x="420" y="56" text-anchor="middle" fill="white" font-weight="bold">API server</text>

    <line x1="420" y1="70" x2="420" y2="110" stroke="#888"/>
    <rect x="365" y="110" width="110" height="40" rx="6" fill="#0e88c8"/><text x="420" y="136" text-anchor="middle" fill="white" font-weight="bold">Redis cache</text>
    <line x1="420" y1="150" x2="420" y2="190" stroke="#888"/>
    <rect x="365" y="190" width="110" height="40" rx="6" fill="#58cc02"/><text x="420" y="216" text-anchor="middle" fill="white" font-weight="bold">DB (sharded)</text>

    <line x1="475" y1="50" x2="510" y2="50" stroke="#888"/>
    <rect x="510" y="30" width="100" height="40" rx="6" fill="#ff9600"/><text x="560" y="56" text-anchor="middle" fill="white" font-weight="bold">ID generator</text>
  </g>
</svg>` },

      { type: 'heading', text: 'URL shortener — design decisions', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Short ID</strong>: base62-encoded 7-char ID = 62^7 ≈ 3.5T URLs',
        '<strong>ID generation</strong>: pre-allocate ranges to API servers (avoid coordination)',
        '<strong>Storage</strong>: KV store (DynamoDB/Cassandra) — read-heavy, no joins',
        '<strong>Cache</strong>: hot URLs in Redis with LRU eviction',
        '<strong>Analytics</strong>: async write to Kafka → data warehouse'
      ]},
      { type: 'code', lang: 'text', code:
`<span class="com">// Estimate</span>
100M writes/day = ~1.2k QPS write
1B reads/day = ~12k QPS read
Storage: 500 bytes/URL · 100M · 365 · 5 = ~90TB

<span class="com">// Latency targets</span>
GET /:id  p99 &lt; 50ms (redirect is critical path)
POST /shorten p99 &lt; 200ms (less critical)` },

      { type: 'heading', text: 'Walkthrough 2: Chat app (1-1 messaging)', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Functional</strong>: send/receive messages, online status, history',
        '<strong>Non-functional</strong>: real-time delivery, ordered, durable',
        '<strong>Scale</strong>: 50M DAU, 1B messages/day'
      ]},

      { type: 'heading', text: 'Chat architecture', level: 2 },
      { type: 'image', alt: 'chat architecture', svg:
`<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:720px;display:block;margin:0 auto;">
  <rect width="720" height="260" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <rect x="20" y="30" width="80" height="40" rx="6" fill="#7c4dff"/><text x="60" y="56" text-anchor="middle" fill="white" font-weight="bold">Client A</text>
    <line x1="100" y1="50" x2="220" y2="50" stroke="#888" stroke-dasharray="3 3"/>
    <text x="160" y="44" text-anchor="middle" font-size="10" fill="#666">WebSocket</text>

    <rect x="220" y="30" width="120" height="40" rx="6" fill="#5e35d5"/><text x="280" y="56" text-anchor="middle" fill="white" font-weight="bold">WS gateway</text>
    <line x1="340" y1="50" x2="380" y2="50" stroke="#888"/>
    <rect x="380" y="30" width="110" height="40" rx="6" fill="#1cb0f6"/><text x="435" y="56" text-anchor="middle" fill="white" font-weight="bold">Chat service</text>

    <line x1="435" y1="70" x2="435" y2="110" stroke="#888"/>
    <rect x="380" y="110" width="110" height="40" rx="6" fill="#ff9600"/><text x="435" y="136" text-anchor="middle" fill="white" font-weight="bold">Kafka</text>

    <line x1="435" y1="150" x2="435" y2="190" stroke="#888"/>
    <rect x="380" y="190" width="110" height="40" rx="6" fill="#58cc02"/><text x="435" y="216" text-anchor="middle" fill="white" font-weight="bold">Message DB</text>

    <line x1="490" y1="130" x2="540" y2="130" stroke="#888"/>
    <rect x="540" y="110" width="110" height="40" rx="6" fill="#0e88c8"/><text x="595" y="136" text-anchor="middle" fill="white" font-weight="bold">Notif. service</text>

    <line x1="280" y1="70" x2="280" y2="190" stroke="#888"/>
    <rect x="220" y="190" width="120" height="40" rx="6" fill="#7e57c2"/><text x="280" y="216" text-anchor="middle" fill="white" font-weight="bold">Presence (Redis)</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Chat — protocol & storage', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>WebSocket</strong> for real-time bidirectional channel',
        '<strong>Fallback</strong> to long-polling on bad networks',
        '<strong>Message ID</strong>: Snowflake (timestamp + machine + seq) → ordered, sortable',
        '<strong>Storage</strong>: time-series friendly (Cassandra, DynamoDB)',
        '<strong>Sharding</strong>: by conversation_id (keeps a chat together)',
        '<strong>Offline delivery</strong>: queue per user, drain on reconnect'
      ]},

      { type: 'heading', text: 'Chat — delivery guarantees', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>At-least-once</strong>: dedupe on client by message_id',
        '<strong>Ack flow</strong>: sender → server → receiver → ack back',
        '<strong>Read receipts</strong>: separate event, batch updates',
        '<strong>End-to-end encryption</strong> (optional): Signal protocol, keys never leave devices'
      ]},

      { type: 'heading', text: 'Walkthrough cheat-sheet', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Twitter timeline → fanout-on-write vs fanout-on-read',
        'Newsfeed → ranking, batching, async fanout',
        'Dropbox → chunk + dedup + delta sync',
        'Uber → geo-index (S2), dispatch service',
        'YouTube → CDN heavy, transcoding pipeline, watch history'
      ]},

      { type: 'heading', text: 'Common SD interview mistakes', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Jumping to "let\'s add a cache" without justifying',
        'No estimation — diagram looks arbitrary',
        'Ignoring failure modes (what if Redis dies?)',
        'Over-engineering for scale you don\'t have',
        'Single point of failure — only one DB, one queue'
      ]},

      { type: 'heading', text: 'Stay flexible', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Interviewers will challenge: <em>"What if 10x more users?"</em> Have one or two evolutions ready: shard, add replicas, push more to CDN.' }
    ]},

    /* ============== CH 20: OOP for Interviews ============== */
    { id: 'iv-c20', title: 'OOP for Interviews', icon: '🧱', sections: [
      { type: 'heading', text: 'OOP design rounds', level: 1 },
      { type: 'para', html: 'Some companies (Microsoft, Amazon, Indian product cos) ask "design a parking lot / elevator / library system". They\'re evaluating your <strong>OOP modeling</strong>: classes, relationships, SOLID, patterns.' },

      { type: 'heading', text: 'The 4 pillars', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Encapsulation</strong> — bundle data + behavior, hide internals',
        '<strong>Abstraction</strong> — expose what, hide how',
        '<strong>Inheritance</strong> — reuse via "is-a" relationship',
        '<strong>Polymorphism</strong> — same call, different behavior at runtime'
      ]},

      { type: 'heading', text: 'SOLID principles', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>S</strong>ingle Responsibility — a class has one reason to change',
        '<strong>O</strong>pen/Closed — open for extension, closed for modification',
        '<strong>L</strong>iskov Substitution — subclasses must honor parent contracts',
        '<strong>I</strong>nterface Segregation — many small interfaces &gt; one fat one',
        '<strong>D</strong>ependency Inversion — depend on abstractions, not concretes'
      ]},

      { type: 'heading', text: 'Singleton', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">public class</span> <span class="ty">Config</span> {
  <span class="kw">private static volatile</span> <span class="ty">Config</span> instance;
  <span class="kw">private</span> <span class="ty">Config</span>() {}

  <span class="kw">public static</span> <span class="ty">Config</span> <span class="fn">getInstance</span>() {
    <span class="kw">if</span> (instance == <span class="kw">null</span>) {
      <span class="kw">synchronized</span>(<span class="ty">Config</span>.<span class="kw">class</span>) {
        <span class="kw">if</span> (instance == <span class="kw">null</span>) instance = <span class="kw">new</span> <span class="ty">Config</span>();
      }
    }
    <span class="kw">return</span> instance;
  }
}` },
      { type: 'callout', kind: 'warn', html: 'Singletons are <strong>often over-used</strong>. They\'re really global state. Prefer DI when possible.' },

      { type: 'heading', text: 'Factory', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">Shape</span> { <span class="kw">void</span> <span class="fn">draw</span>(); }
<span class="kw">class</span> <span class="ty">Circle</span> <span class="kw">implements</span> <span class="ty">Shape</span> { <span class="kw">public void</span> <span class="fn">draw</span>() { ... } }
<span class="kw">class</span> <span class="ty">Square</span> <span class="kw">implements</span> <span class="ty">Shape</span> { <span class="kw">public void</span> <span class="fn">draw</span>() { ... } }

<span class="kw">class</span> <span class="ty">ShapeFactory</span> {
  <span class="kw">public static</span> <span class="ty">Shape</span> <span class="fn">create</span>(<span class="ty">String</span> type) {
    <span class="kw">return switch</span> (type) {
      <span class="kw">case</span> <span class="str">"circle"</span> -&gt; <span class="kw">new</span> <span class="ty">Circle</span>();
      <span class="kw">case</span> <span class="str">"square"</span> -&gt; <span class="kw">new</span> <span class="ty">Square</span>();
      <span class="kw">default</span> -&gt; <span class="kw">throw new</span> <span class="ty">IllegalArgumentException</span>();
    };
  }
}` },

      { type: 'heading', text: 'Observer', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">Observer</span> { <span class="kw">void</span> <span class="fn">update</span>(<span class="ty">String</span> event); }

<span class="kw">class</span> <span class="ty">Subject</span> {
  <span class="kw">private</span> <span class="ty">List</span>&lt;<span class="ty">Observer</span>&gt; observers = <span class="kw">new</span> <span class="ty">ArrayList</span>&lt;&gt;();
  <span class="kw">public void</span> <span class="fn">subscribe</span>(<span class="ty">Observer</span> o) { observers.add(o); }
  <span class="kw">public void</span> <span class="fn">notifyAll</span>(<span class="ty">String</span> e) {
    <span class="kw">for</span> (<span class="ty">Observer</span> o : observers) o.<span class="fn">update</span>(e);
  }
}` },

      { type: 'heading', text: 'Strategy', level: 2 },
      { type: 'code', lang: 'java', code:
`<span class="kw">interface</span> <span class="ty">SortStrategy</span> { <span class="kw">void</span> <span class="fn">sort</span>(<span class="kw">int</span>[] a); }
<span class="kw">class</span> <span class="ty">QuickSort</span> <span class="kw">implements</span> <span class="ty">SortStrategy</span> { ... }
<span class="kw">class</span> <span class="ty">MergeSort</span> <span class="kw">implements</span> <span class="ty">SortStrategy</span> { ... }

<span class="kw">class</span> <span class="ty">Sorter</span> {
  <span class="kw">private</span> <span class="ty">SortStrategy</span> strategy;
  <span class="kw">public</span> <span class="ty">Sorter</span>(<span class="ty">SortStrategy</span> s) { <span class="kw">this</span>.strategy = s; }
  <span class="kw">public void</span> <span class="fn">run</span>(<span class="kw">int</span>[] a) { strategy.<span class="fn">sort</span>(a); }
}` },

      { type: 'heading', text: 'Design a parking lot — outline', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Entities: <code>ParkingLot</code>, <code>Floor</code>, <code>Spot</code>, <code>Vehicle</code>, <code>Ticket</code>',
        'Spot types: <code>Compact</code>, <code>Large</code>, <code>EV</code>, <code>Handicap</code>',
        'Use polymorphism for vehicles → fit policy',
        'Patterns: Factory for tickets, Strategy for pricing',
        'Concurrency: synchronize spot allocation'
      ]},

      { type: 'heading', text: 'Composition over inheritance', level: 2 },
      { type: 'para', html: 'A duck that flies is not a "FlyingAnimal extends Duck". It\'s a Duck with a FlyBehavior strategy. Inheritance is rigid; composition is flexible.' },
      { type: 'callout', kind: 'tip', html: 'When two classes share data → composition. When they share interface → interface. Inheritance is the rarest correct choice.' },

      { type: 'heading', text: 'Common UML quick-look', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Association: <code>has-a</code> (User has Address)',
        'Aggregation: <code>has-a</code> but Address can exist without User',
        'Composition: <code>part-of</code> — Address dies with User',
        'Inheritance: <code>is-a</code> (Dog is Animal)',
        'Realization: implements interface'
      ]}
    ]},

    /* ============== CH 21: DB Basics for Interviews ============== */
    { id: 'iv-c21', title: 'DB Basics for Interviews', icon: '🗄️', sections: [
      { type: 'heading', text: 'Database knowledge interviewers love', level: 1 },
      { type: 'para', html: 'Even non-DB roles expect basic SQL fluency. You\'ll be asked about keys, indexes, joins, normalization, and trade-offs.' },

      { type: 'heading', text: 'Keys', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Primary key</strong>: unique, not null, one per table',
        '<strong>Foreign key</strong>: references another table\'s primary key',
        '<strong>Unique key</strong>: unique but can be null',
        '<strong>Composite key</strong>: combination of columns that\'s unique',
        '<strong>Surrogate key</strong>: synthetic ID (auto-increment, UUID) vs natural key (email)'
      ]},

      { type: 'heading', text: 'Indexes', level: 2 },
      { type: 'para', html: 'An index is a sorted lookup structure (typically B-tree) over a column. Without an index, lookup is O(n) (full scan); with one, it\'s O(log n).' },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- Speed up WHERE email = ?</span>
<span class="kw">CREATE INDEX</span> idx_users_email <span class="kw">ON</span> users(email);

<span class="com">-- Multi-column (composite)</span>
<span class="kw">CREATE INDEX</span> idx_orders_user_date <span class="kw">ON</span> orders(user_id, created_at);` },
      { type: 'callout', kind: 'warn', html: 'Indexes speed up reads but slow down writes (every insert/update updates the index). Don\'t index everything.' },

      { type: 'heading', text: 'Joins', level: 2 },
      { type: 'image', alt: 'join venn', svg:
`<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="200" fill="#fafafa" rx="8"/>
  <g font-family="Nunito" font-size="11">
    <circle cx="80" cy="100" r="40" fill="#7c4dff" fill-opacity="0.5"/>
    <circle cx="120" cy="100" r="40" fill="#1cb0f6" fill-opacity="0.5"/>
    <text x="100" y="160" text-anchor="middle" font-weight="bold">INNER</text>

    <circle cx="240" cy="100" r="40" fill="#7c4dff"/>
    <circle cx="280" cy="100" r="40" fill="#1cb0f6" fill-opacity="0.5"/>
    <text x="260" y="160" text-anchor="middle" font-weight="bold">LEFT</text>

    <circle cx="400" cy="100" r="40" fill="#7c4dff" fill-opacity="0.5"/>
    <circle cx="440" cy="100" r="40" fill="#1cb0f6"/>
    <text x="420" y="160" text-anchor="middle" font-weight="bold">RIGHT</text>

    <circle cx="540" cy="100" r="40" fill="#7c4dff"/>
    <circle cx="560" cy="100" r="40" fill="#1cb0f6"/>
    <text x="550" y="160" text-anchor="middle" font-weight="bold">FULL OUTER</text>
  </g>
</svg>` },
      { type: 'code', lang: 'sql', code:
`<span class="com">-- INNER: only matches</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u <span class="kw">INNER JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;

<span class="com">-- LEFT: all users, even those with no order</span>
<span class="kw">SELECT</span> u.name, o.total
<span class="kw">FROM</span> users u <span class="kw">LEFT JOIN</span> orders o <span class="kw">ON</span> u.id = o.user_id;` },

      { type: 'heading', text: 'Normalization', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>1NF</strong>: atomic values (no lists in cells), unique rows',
        '<strong>2NF</strong>: 1NF + every non-key column depends on the <em>whole</em> key',
        '<strong>3NF</strong>: 2NF + no transitive dependencies (non-key → non-key)',
        '<strong>BCNF</strong>: stronger 3NF — every determinant is a superkey'
      ]},

      { type: 'heading', text: 'Denormalization for speed', level: 2 },
      { type: 'para', html: 'Sometimes you intentionally duplicate data (e.g., store username on each post) to avoid joins. Trade write complexity for read speed. Common in NoSQL.' },

      { type: 'heading', text: 'ACID', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>A</strong>tomicity — all or nothing',
        '<strong>C</strong>onsistency — constraints hold before/after',
        '<strong>I</strong>solation — concurrent txns don\'t interfere',
        '<strong>D</strong>urability — committed data survives crash'
      ]},

      { type: 'heading', text: 'Isolation levels', level: 2 },
      { type: 'code', lang: 'text', code:
`READ UNCOMMITTED → dirty reads possible
READ COMMITTED   → no dirty, but non-repeatable
REPEATABLE READ  → same query, same result (in txn)
SERIALIZABLE     → full isolation, slowest` },

      { type: 'heading', text: 'Transactions and locks', level: 2 },
      { type: 'para', html: 'A transaction groups operations. Pessimistic locking: take a lock, others wait. Optimistic locking: check version on commit, retry on conflict.' },

      { type: 'heading', text: 'N+1 query problem', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Bad</span>
SELECT * FROM users;
for each user:
  SELECT * FROM orders WHERE user_id = ?;   ← N extra queries

<span class="com">// Good</span>
SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id;` },

      { type: 'heading', text: 'Common interview SQL questions', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Find 2nd highest salary',
        'Top N by group (window function: ROW_NUMBER, RANK)',
        'Self-join: employee with manager\'s name',
        'Detect duplicates',
        'Find users with at least N actions'
      ]}
    ]},

    /* ============== CH 22: OS & Networking Quick Hits ============== */
    { id: 'iv-c22', title: 'OS & Networking Quick Hits', icon: '🖧', sections: [
      { type: 'heading', text: 'Core concepts you must know', level: 1 },
      { type: 'para', html: 'A few OS and networking topics appear in nearly every interview. You don\'t need depth — you need <em>vocabulary</em> and clean one-liners.' },

      { type: 'heading', text: 'Process vs thread', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Process</strong>: own memory space, OS-level isolation, expensive to switch',
        '<strong>Thread</strong>: shares memory with siblings, lighter context switch',
        'Threads can corrupt shared data → need synchronization',
        'Processes communicate via IPC (pipes, sockets, shared memory)'
      ]},

      { type: 'heading', text: 'Concurrency vs parallelism', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Concurrency</strong>: tasks interleave (1 CPU, time-slicing)',
        '<strong>Parallelism</strong>: tasks run simultaneously (multi-CPU)',
        'Concurrency is a structure; parallelism is an execution'
      ]},

      { type: 'heading', text: 'Deadlock', level: 2 },
      { type: 'para', html: 'Two threads each hold a lock the other needs. Four Coffman conditions: mutual exclusion, hold-and-wait, no preemption, circular wait. Break any one → no deadlock.' },
      { type: 'callout', kind: 'tip', html: 'Easiest fix: always acquire locks in the <strong>same global order</strong>. Eliminates circular wait.' },

      { type: 'heading', text: 'OSI model', level: 2 },
      { type: 'code', lang: 'text', code:
`7  Application   — HTTP, DNS, SMTP
6  Presentation  — TLS, encoding
5  Session       — sockets
4  Transport     — TCP, UDP
3  Network       — IP, routing
2  Data link     — Ethernet, MAC
1  Physical      — cables, signals` },

      { type: 'heading', text: 'TCP vs UDP', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>TCP</strong>: connection, reliable, ordered, slower. Web, email, SSH.',
        '<strong>UDP</strong>: connectionless, fast, no guarantees. DNS, video, gaming.',
        'TCP handshake: SYN → SYN-ACK → ACK',
        'TCP teardown: FIN → ACK → FIN → ACK'
      ]},

      { type: 'heading', text: 'HTTP basics', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Methods: GET (read), POST (create), PUT (replace), PATCH (partial), DELETE',
        'Status: 1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error',
        '200 OK, 201 Created, 301 Moved, 401 Unauth, 403 Forbidden, 404 Not Found, 500 ISE',
        'Stateless — server doesn\'t remember between requests',
        'Cookies / JWT carry state across requests'
      ]},

      { type: 'heading', text: 'HTTPS / TLS', level: 2 },
      { type: 'para', html: 'TLS provides encryption + integrity + authentication. Handshake: client hello → server cert → key exchange → encrypted channel. Certificates verified via CA chain.' },

      { type: 'heading', text: 'DNS', level: 2 },
      { type: 'para', html: 'Browser asks recursive resolver → root → TLD → authoritative → IP. Cached aggressively (TTL). Major part of why "the internet is slow today" — DNS lookups.' }
    ]},

    /* ============== CH 23: STAR Method ============== */
    { id: 'iv-c23', title: 'STAR Method', icon: '⭐', sections: [
      { type: 'heading', text: 'Behavioral answers that land', level: 1 },
      { type: 'para', html: 'Behavioral questions test how you\'ve <em>actually</em> behaved. The STAR framework keeps your story tight, specific, and impactful.' },

      { type: 'heading', text: 'The 4 letters', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>S</strong>ituation — set the scene (1 sentence)',
        '<strong>T</strong>ask — what was the goal / your role (1 sentence)',
        '<strong>A</strong>ction — what <em>you</em> did, in detail (60% of the story)',
        '<strong>R</strong>esult — outcome, ideally with a metric (20%)'
      ]},

      { type: 'heading', text: 'Example STAR answer', level: 2 },
      { type: 'code', lang: 'text', code:
`Q: "Tell me about a time you handled a conflict."

S: "In Q3 last year, my team was migrating to a new auth service."
T: "I was lead engineer. A senior backend dev disagreed with using JWT
    instead of session cookies."
A: "I scheduled a 1-1 to hear his concerns. He was worried about token
    revocation. I proposed a hybrid: short-lived JWT + Redis blocklist.
    I prototyped it in 2 days, walked through trade-offs in a doc."
R: "Team unanimously adopted the hybrid. Launched 2 weeks ahead of
    schedule, zero security incidents in 6 months."` },

      { type: 'heading', text: 'I, not we', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Behavioral interviewers want to know <strong>what YOU did</strong>. "We" answers are weak. Say "I designed", "I owned", "I convinced".' },

      { type: 'heading', text: 'Build your story bank', level: 2 },
      { type: 'para', html: 'Prepare 6–10 stories that cover common themes. The same story can answer multiple questions if framed differently.' },
      { type: 'list', kind: 'check', items: [
        'A technical challenge you solved',
        'A time you led / influenced',
        'A failure and what you learned',
        'A conflict and how you resolved it',
        'A time you mentored someone',
        'A time you disagreed with a manager',
        'A project you\'re proud of',
        'A time you missed a deadline'
      ]},

      { type: 'heading', text: 'Quantify your results', level: 2 },
      { type: 'code', lang: 'text', code:
`<span class="com">// Weak</span>
"We improved performance and users were happy."

<span class="com">// Strong</span>
"Cut API p95 from 800ms to 220ms (-72%), which lifted weekly active users
 by 9% and removed 2 customer escalations."` },

      { type: 'heading', text: 'Story length', level: 2 },
      { type: 'para', html: 'Aim for <strong>90–120 seconds</strong> per story. Practice with a timer. If you go over, you\'re rambling; if you finish in 30 seconds, you\'re under-selling.' },

      { type: 'heading', text: 'Adapting on the fly', level: 2 },
      { type: 'callout', kind: 'tip', html: 'If you don\'t have a perfect story, take 5 seconds, pick the closest one, and reframe the Task to match the question. <em>"I haven\'t led a 10-person team, but I led a 3-person migration..."</em>' },

      { type: 'heading', text: 'Common STAR mistakes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Too much Situation, not enough Action',
        'Vague: "I worked hard and it went well"',
        'Blaming teammates in conflict stories',
        'No measurable Result',
        'Telling a story that makes <em>you</em> look bad accidentally'
      ]}
    ]},

    /* ============== CH 24: Top Behavioral Questions ============== */
    { id: 'iv-c24', title: 'Top Behavioral Questions', icon: '🎙️', sections: [
      { type: 'heading', text: '"Tell me about yourself"', level: 1 },
      { type: 'para', html: 'The most common opener. Most candidates ramble. Build a <strong>90-second pitch</strong> in 3 acts: present, past, future.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Template</span>
"I\'m a [role] with [N] years of experience in [stack/domain].
 Currently at [company], I [main responsibility / recent win].
 Before that, I [past role + something relevant].
 I\'m looking for [why this role / what excites me]."

<span class="com">// Example</span>
"I\'m a backend engineer with 4 years in fintech, mostly Java + Spring.
 At Razorpay, I own the payouts service that processes 500k transactions
 a day. Before that I was at Flipkart on the order pipeline.
 I\'m looking to move into platform engineering — building tools my
 fellow engineers love — which is why this role excited me."` },

      { type: 'heading', text: '"What\'s your biggest weakness?"', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Avoid the cliché humblebrag ("I work too hard"). Interviewers see it from a mile away. Pick a real weakness, show <em>active work</em> to fix it.' },
      { type: 'code', lang: 'text', code:
`"Historically I\'ve been bad at saying no. Last year I took on too much
 and burned out for a week. Since then I keep a weekly Trello board with
 my commitments and review with my manager every Monday. I\'ve learned
 to push back, and my output is actually higher because I\'m focused on
 fewer things."` },

      { type: 'heading', text: '"Why do you want to work here?"', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Show you researched the company (product, tech blog, recent news)',
        'Connect it to your goals',
        'Name one specific thing — a project, value, person',
        'Avoid generic praise ("you\'re a great company")'
      ]},

      { type: 'heading', text: '"Why are you leaving your current job?"', level: 2 },
      { type: 'callout', kind: 'warn', html: '<strong>Never bash your current employer.</strong> Frame the move as moving toward something better, not away from something bad.' },
      { type: 'code', lang: 'text', code:
`<span class="com">// Bad</span>
"My manager micromanages me and the codebase is a mess."

<span class="com">// Good</span>
"I\'ve grown a lot at Acme but the team has stabilized — we\'re on
 maintenance work. I want to be in a phase where I\'m building, and
 your team is in that phase."` },

      { type: 'heading', text: '"Tell me about a conflict"', level: 2 },
      { type: 'para', html: 'Pick a story where you <strong>resolved</strong> the conflict through communication, not where you "won". Avoid stories that paint anyone as a villain.' },

      { type: 'heading', text: '"Time you failed"', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Pick a real failure, not "I tried too hard"',
        'Own it — no blame',
        'Spend most of the answer on what you learned',
        'End with how you applied the lesson later'
      ]},

      { type: 'heading', text: '"Time you took initiative"', level: 2 },
      { type: 'para', html: 'Show you do things even when not asked. A scrappy side project, a tool you built for your team, a bug you found and fixed off-hours — perfect material.' },

      { type: 'heading', text: '"Strengths"', level: 2 },
      { type: 'para', html: 'Pick 2–3 strengths relevant to the role. Each with a 1-sentence example. Don\'t list 10.' },

      { type: 'heading', text: '"Where do you see yourself in 5 years?"', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Show <strong>direction</strong>, not a specific title. <em>"Tech lead at a product company shipping infrastructure that other engineers love."</em> Avoids over-promising while sounding ambitious.' },

      { type: 'heading', text: '"Questions for us?"', level: 2 },
      { type: 'para', html: 'Always have 3–5 ready. <strong>No questions = no interest.</strong>' },
      { type: 'list', kind: 'bullet', items: [
        '"What does a typical week look like on this team?"',
        '"How is success measured in the first 6 months?"',
        '"What\'s the biggest technical challenge the team faces?"',
        '"How do you handle on-call?"',
        '"What\'s a recent project you\'re proud of?"',
        '"How does the team handle disagreements?"',
        '"What\'s the path to promotion here?"'
      ]}
    ]},

    /* ============== CH 25: Leadership Stories ============== */
    { id: 'iv-c25', title: 'Leadership Stories', icon: '🚀', sections: [
      { type: 'heading', text: 'Leadership without the title', level: 1 },
      { type: 'para', html: 'You don\'t need to be a manager to have leadership stories. Companies look for <em>technical leadership</em>, ownership, and influence.' },

      { type: 'heading', text: '"Tell me about a time you led X"', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Owned an ambiguous problem end-to-end',
        'Drove a multi-team migration',
        'Designed and shipped a key feature',
        'Set up team processes (code review, on-call rota)',
        'Mentored a junior engineer through a launch'
      ]},

      { type: 'heading', text: '"Disagreed with your manager"', level: 2 },
      { type: 'para', html: 'A classic. The interviewer wants to see disagreement <em>handled professionally</em>. Pick a story where you ultimately convinced them, or were proven right.' },
      { type: 'code', lang: 'text', code:
`"My manager wanted to use library X for caching. I\'d benchmarked it
 against Y and found Y was 3x faster for our access pattern. I sent her
 a 2-page doc with the data. She pushed back on operational complexity.
 We agreed to do a one-week trial of Y in staging. Numbers held up; we
 switched. The trial period was her idea — I learned to invite pushback
 instead of arguing."` },

      { type: 'heading', text: '"Gave critical feedback"', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Focus on behavior, not personality',
        'Private, timely, specific',
        'Show empathy for how they received it',
        'Mention follow-up — did they grow?'
      ]},

      { type: 'heading', text: '"Mentored someone"', level: 2 },
      { type: 'para', html: 'Pick a real growth story. <em>"Junior couldn\'t debug async issues → I paired with them 30 min/week → 3 months later they were teaching new hires."</em>' },

      { type: 'heading', text: 'Influence without authority', level: 2 },
      { type: 'para', html: 'Senior engineers don\'t order people around — they <em>convince</em>. Stories about RFCs, design docs, demos, and "selling" ideas are gold.' },

      { type: 'heading', text: '"Hardest decision"', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Frame as <em>"I had data for both sides; I chose X because Y; here\'s how it played out."</em> Shows judgment and post-mortem mindset.' }
    ]},

    /* ============== CH 26: Failure Stories ============== */
    { id: 'iv-c26', title: 'Failure Stories', icon: '💥', sections: [
      { type: 'heading', text: 'Why failure questions are gold', level: 1 },
      { type: 'para', html: 'Strong candidates have failed and grown. Saying "I haven\'t really failed" is a red flag — either you\'re lying or you haven\'t taken risks.' },

      { type: 'heading', text: 'A good failure story has 3 parts', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>The setup</strong> — what you were trying to do (ambitious is good)',
        '<strong>What went wrong</strong> — honest, specific',
        '<strong>What you learned + applied later</strong> — this is 50% of the story'
      ]},

      { type: 'heading', text: '"Missed deadline"', level: 2 },
      { type: 'code', lang: 'text', code:
`"I committed to shipping a search feature in 2 weeks. Day 9 I realized
 the underlying index would take 3 days alone to build. I told my PM
 immediately, proposed cutting fuzzy matching to v2. We shipped on
 day 14 with the smaller scope.
 What I learned: I had estimated based on the happy path, not the
 actual data shape. Now I always do a 1-day spike on real data
 before committing to a timeline. Saved my next 3 projects."` },

      { type: 'heading', text: '"Made a mistake in production"', level: 2 },
      { type: 'para', html: 'Pick one with real impact but also where you led the recovery. <em>"Pushed a bad config Friday 5pm → site degraded for 20 min → I rolled back, ran the postmortem, added a guardrail in CI to prevent the class of bug."</em>' },
      { type: 'callout', kind: 'tip', html: 'Postmortem culture is huge at modern companies. Show you respond to incidents with <strong>systems</strong>, not blame.' },

      { type: 'heading', text: '"Project that didn\'t ship"', level: 2 },
      { type: 'para', html: 'Some projects die. That\'s OK. Talk about what you took away — even if the code was thrown out, the learnings stayed.' },

      { type: 'heading', text: 'What NOT to say', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '"I haven\'t really failed."',
        '"It was actually a teammate\'s fault."',
        '"I failed at being too perfectionist."',
        'Pick a tiny failure that\'s clearly a humblebrag'
      ]},

      { type: 'heading', text: 'Failure is a hiring asset', level: 2 },
      { type: 'callout', kind: 'info', html: 'Companies promote engineers who learn fast. A clear "I screwed up → I extracted a lesson → I changed how I work" is one of the strongest signals you can give.' }
    ]},

    /* ============== CH 27: HR Round ============== */
    { id: 'iv-c27', title: 'HR Round', icon: '🤝', sections: [
      { type: 'heading', text: 'HR is not just a formality', level: 1 },
      { type: 'para', html: 'HR rounds in India and many international companies cover relocation, notice period, salary expectations, and reason for leaving. A weak HR round can sink an otherwise strong loop.' },

      { type: 'heading', text: 'Notice period', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Know your exact notice period (90 days is common in India)',
        'Some companies buy out part of it — ask the recruiter',
        'Be honest — never claim a shorter notice you can\'t deliver',
        'If you\'re negotiable (have vacation balance), say so'
      ]},

      { type: 'heading', text: 'Relocation', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Know whether the role is hybrid / remote / on-site',
        'Ask about relocation assistance (one-time bonus, temp housing)',
        'If you have family constraints, surface them early — not after offer'
      ]},

      { type: 'heading', text: 'Salary expectations', level: 2 },
      { type: 'para', html: 'You\'ll likely be asked this in HR. Don\'t lowball yourself; don\'t throw a wild number. We cover this fully in CH 28.' },
      { type: 'callout', kind: 'tip', html: 'Have <strong>current CTC</strong> and <strong>expected CTC</strong> numbers ready. Glassdoor, Levels.fyi, AmbitionBox for benchmarks.' },

      { type: 'heading', text: 'Reason for leaving', level: 2 },
      { type: 'para', html: 'Already covered in CH 24 — never bash. Frame as growth, scope, or fit.' },

      { type: 'heading', text: 'Background verification (BGV)', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Be 100% truthful on dates, titles, education',
        'BGV agencies check via official records',
        'Caught lies lead to immediate revocation',
        'Have offer letters / relieving letters from each company ready'
      ]},

      { type: 'heading', text: 'Behavioral fit', level: 2 },
      { type: 'para', html: 'HR also assesses tone, professionalism, and clarity. Show enthusiasm without overdoing it. Be polite, not subservient.' },

      { type: 'heading', text: 'Questions to ask HR', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Full comp structure — base, bonus, stock, sign-on',
        'Stock vesting schedule (4-year, 1-year cliff is standard)',
        'Performance review cycle',
        'Health insurance, parental leave',
        'WFH / hybrid policy in writing'
      ]}
    ]},

    /* ============== CH 28: Salary Negotiation ============== */
    { id: 'iv-c28', title: 'Salary Negotiation', icon: '💰', sections: [
      { type: 'heading', text: 'The highest-leverage 30 minutes of your career', level: 1 },
      { type: 'para', html: 'A 15-minute negotiation can mean $10k–$50k more per year — and that gap compounds across raises. Yet most engineers skip negotiating entirely.' },
      { type: 'callout', kind: 'info', html: 'Recruiters expect you to negotiate. Asking does not put the offer at risk. The recruiter\'s job is to land you, and they have flex.' },

      { type: 'heading', text: 'Compensation components', level: 2 },
      { type: 'image', alt: 'comp components', svg:
`<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;display:block;margin:0 auto;">
  <rect width="600" height="240" fill="#fafafa" rx="8"/>
  <text x="300" y="22" text-anchor="middle" font-family="Nunito" font-weight="bold" font-size="14">Total Compensation (TC)</text>
  <g font-family="Nunito" font-size="11">
    <rect x="60" y="50" width="100" height="160" fill="#7c4dff"/><text x="110" y="100" text-anchor="middle" fill="white" font-weight="bold">Base salary</text><text x="110" y="120" text-anchor="middle" fill="white" font-size="10">guaranteed</text><text x="110" y="140" text-anchor="middle" fill="white" font-size="10">monthly cash</text>

    <rect x="180" y="100" width="100" height="110" fill="#1cb0f6"/><text x="230" y="140" text-anchor="middle" fill="white" font-weight="bold">Bonus</text><text x="230" y="160" text-anchor="middle" fill="white" font-size="10">target %</text><text x="230" y="178" text-anchor="middle" fill="white" font-size="10">perf-based</text>

    <rect x="300" y="60" width="100" height="150" fill="#58cc02"/><text x="350" y="100" text-anchor="middle" fill="white" font-weight="bold">Stock</text><text x="350" y="120" text-anchor="middle" fill="white" font-size="10">RSU / ESOP</text><text x="350" y="138" text-anchor="middle" fill="white" font-size="10">4-yr vest</text><text x="350" y="156" text-anchor="middle" fill="white" font-size="10">1-yr cliff</text>

    <rect x="420" y="140" width="100" height="70" fill="#ff9600"/><text x="470" y="170" text-anchor="middle" fill="white" font-weight="bold">Sign-on</text><text x="470" y="190" text-anchor="middle" fill="white" font-size="10">one-time</text>
  </g>
</svg>` },

      { type: 'heading', text: 'Rule 1: Never give a number first', level: 2 },
      { type: 'para', html: 'When recruiters ask your expectation, deflect. <em>"I\'d love to hear the band for this role first."</em> If forced, give a range based on market data, anchored 10–15% above your target.' },

      { type: 'heading', text: 'Rule 2: Wait for the written offer', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Don\'t accept verbally on the call. Say: <em>"Thank you, I\'m really excited. Can I take a few days to review?"</em>' },

      { type: 'heading', text: 'Rule 3: Anchor on TC, not base', level: 2 },
      { type: 'para', html: 'Discuss total compensation. Companies often have rigid base bands but flexible stock / sign-on. If they can\'t move base, ask for sign-on or extra stock.' },

      { type: 'heading', text: 'Rule 4: Multiple offers = power', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Even one competing offer changes the conversation',
        'Time interviews so offers land within the same 2 weeks',
        'Share competing offer numbers (with permission)',
        'Don\'t bluff — they will ask for proof'
      ]},

      { type: 'heading', text: 'Negotiation script', level: 2 },
      { type: 'code', lang: 'text', code:
`"Thanks for the offer, I\'m really excited about the role and team.

I\'ve been talking with [Company B] and they\'re in the [X-Y range],
heavier on base. I\'d love to make [Your Company] my first choice —
can we look at the base around X and a sign-on of Y to bridge the gap?"` },

      { type: 'heading', text: 'What\'s negotiable', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Base salary</strong> — usually 5–15% flex',
        '<strong>Sign-on bonus</strong> — most flexible item',
        '<strong>Stock grant</strong> — flexible at senior+',
        '<strong>Start date</strong>',
        '<strong>Title / level</strong> — possible if you have offers at higher level',
        '<strong>Vacation / PTO</strong>',
        '<strong>Remote work / relocation</strong>'
      ]},

      { type: 'heading', text: 'Use silence', level: 2 },
      { type: 'para', html: 'After you state your ask, <strong>shut up</strong>. The pause feels long, but the recruiter will fill it — often with a counter-offer.' },

      { type: 'heading', text: 'Get it in writing', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Verbal commitments evaporate. Always insist on the revised offer in email before resigning your current job.' },

      { type: 'heading', text: 'Common mistakes', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Accepting on the call out of relief',
        'Lying about competing offers',
        'Negotiating before you have a written offer',
        'Negotiating over chat — always do it on a call or email',
        'Being aggressive / threatening',
        'Forgetting non-cash perks (relocation, education stipend, equipment)'
      ]}
    ]},

    /* ============== CH 29: Communication & Body Language ============== */
    { id: 'iv-c29', title: 'Communication & Body Language', icon: '🗨️', sections: [
      { type: 'heading', text: 'How you say it matters', level: 1 },
      { type: 'para', html: 'Two candidates with identical answers — one comes across as confident, the other as anxious. Delivery makes the difference.' },

      { type: 'heading', text: 'In-person body language', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Firm (not bone-crushing) handshake',
        'Sit upright, lean slightly forward when listening',
        'Hands visible — open palms read as honest',
        'Eye contact 60–70% — not a staring contest',
        'Mirror your interviewer\'s energy slightly'
      ]},

      { type: 'heading', text: 'Virtual interview etiquette', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Camera at eye level (stack books under your laptop)',
        'Look at the camera, not your own image',
        'Light from in front, not behind',
        'Wired ethernet if possible',
        'Headphones — prevents echo, signals seriousness',
        'Test the platform 10 min before',
        'Quiet, plain background',
        'Close other tabs and notifications'
      ]},
      { type: 'callout', kind: 'tip', html: 'If your video freezes, say so calmly and switch to phone audio. Cool composure under glitches is a great signal.' },

      { type: 'heading', text: 'Active listening', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        'Nod, hum a small "mhm"',
        'Repeat the question back before answering',
        'Don\'t interrupt — wait for a full breath after their question',
        'If you miss something, ask: <em>"Can you repeat the last part?"</em> — totally fine'
      ]},

      { type: 'heading', text: 'Filler words', level: 2 },
      { type: 'para', html: 'Cut "um", "like", "you know". Replace with silence. A pause feels long to you but lands as <em>thoughtful</em> to the listener.' },

      { type: 'heading', text: 'Confident vs arrogant', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Confident</strong>: "I think X because Y"',
        '<strong>Arrogant</strong>: "Obviously it\'s X"',
        '<strong>Confident</strong>: "I don\'t know that, but here\'s how I\'d find out"',
        '<strong>Arrogant</strong>: "That\'s a weird question"'
      ]},

      { type: 'heading', text: 'Energy management', level: 2 },
      { type: 'para', html: 'Onsite is a marathon. Eat protein for breakfast, hydrate, and keep snacks. A 4pm slump after lunch is real — schedule heavier rounds in the morning if you have a choice.' }
    ]},

    /* ============== CH 30: Common Mistakes ============== */
    { id: 'iv-c30', title: 'Common Mistakes', icon: '⚠️', sections: [
      { type: 'heading', text: 'The patterns that sink candidates', level: 1 },
      { type: 'para', html: 'Most rejections are preventable. Here are the top recurring mistakes interviewers report.' },

      { type: 'heading', text: '1. Jumping straight into code', level: 2 },
      { type: 'para', html: 'Spending 0 seconds clarifying before typing is the #1 reason "competent" candidates fail. Always do U+M+P (Understand, Match, Plan) before keyboard.' },

      { type: 'heading', text: '2. Going silent', level: 2 },
      { type: 'callout', kind: 'warn', html: 'Silence reads as either stuck or rude. Even when you don\'t know, narrate: <em>"I\'m considering two approaches..."</em>' },

      { type: 'heading', text: '3. Bashing past employers', level: 2 },
      { type: 'para', html: 'Even if your last manager was awful, never say it. It signals you\'ll do the same about <em>this</em> company someday. Reframe everything in growth terms.' },

      { type: 'heading', text: '4. Not asking questions', level: 2 },
      { type: 'para', html: 'When interviewer asks "Do you have any questions?" — never say no. It signals zero interest. Always have 3 ready.' },

      { type: 'heading', text: '5. Refusing hints', level: 2 },
      { type: 'callout', kind: 'warn', html: 'When the interviewer says <em>"Hmm, what if the array is sorted?"</em> — that\'s a hint. Take it. Pretending you didn\'t hear is worse than asking.' }
    ]},

    /* ============== CH 31: Mock Interview Strategy ============== */
    { id: 'iv-c31', title: 'Mock Interview Strategy', icon: '🎭', sections: [
      { type: 'heading', text: 'The skill that closes the gap', level: 1 },
      { type: 'para', html: 'You can solve 200 LeetCode problems alone and still freeze in a real interview. Mocks bridge solo prep to live performance.' },

      { type: 'heading', text: 'Where to find partners', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Pramp / Interviewing.io</strong>: free / paid peer matches with structured rubrics',
        '<strong>Friends in tech</strong>: swap mocks weekly',
        '<strong>Discord study groups</strong>: r/cscareerquestions, BlindTeamBlind',
        '<strong>Senior engineers</strong>: paid mocks ($150–300) but excellent feedback'
      ]},

      { type: 'heading', text: 'Record yourself', level: 2 },
      { type: 'para', html: 'OBS or QuickTime. Watching the replay is brutal but transformative — you\'ll catch every "um", every silent stretch, every untested edge case.' },

      { type: 'heading', text: 'Solo mock with rubric', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Pick a random LC problem',
        'Start a 45-min timer',
        'Talk out loud as if someone\'s there',
        'Don\'t look anything up until time\'s up',
        'Grade yourself on: clarify, brute, optimal, code, test'
      ]},

      { type: 'heading', text: 'Frequency', level: 2 },
      { type: 'callout', kind: 'tip', html: 'In the 2 weeks before onsite, do <strong>2–3 full mocks per week</strong>. Solo problem-solving in the mornings, mocks in the evenings.' },

      { type: 'heading', text: 'Ask for harsh feedback', level: 2 },
      { type: 'para', html: 'Tell partners: <em>"Be brutally honest, don\'t spare me."</em> Specific feedback is gold. Vague praise feels nice but doesn\'t help.' }
    ]},

    /* ============== CH 32: Final 24 Hours ============== */
    { id: 'iv-c32', title: 'Final 24 Hours', icon: '⏰', sections: [
      { type: 'heading', text: 'The day before', level: 1 },
      { type: 'para', html: 'The night before an interview is not the time for new prep. It\'s for rest, review, and logistics.' },

      { type: 'heading', text: 'What to do the day before', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Light review only — flashcards, your story bank',
        'Re-read the JD and the company\'s recent news',
        'Lay out clothes, charge devices, print resume copies',
        'Set 2 alarms, plan transit (or test video link)',
        'Avoid hard problems — failure tonight wrecks confidence',
        'Eat a normal dinner, no alcohol',
        'Lights out 8 hours before alarm'
      ]},

      { type: 'heading', text: 'Attire', level: 2 },
      { type: 'list', kind: 'bullet', items: [
        '<strong>Startups</strong>: smart casual (clean shirt, jeans OK)',
        '<strong>Big tech</strong>: business casual (collared shirt, no tie)',
        '<strong>Banks / consulting</strong>: full business (suit/tie)',
        '<strong>Virtual</strong>: same as in-person from the waist up',
        'When in doubt, ask the recruiter'
      ]},

      { type: 'heading', text: 'Materials checklist', level: 2 },
      { type: 'list', kind: 'check', items: [
        '3 paper copies of resume',
        'Notebook + 2 pens',
        'Photo ID',
        'Phone fully charged',
        'Backup phone charger',
        'Water bottle',
        'Snack (granola bar)'
      ]},

      { type: 'heading', text: 'Mental prep', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Visualize the interview going well the night before. Sports psych research shows visualization measurably improves performance.' },

      { type: 'heading', text: 'Morning of', level: 2 },
      { type: 'list', kind: 'check', items: [
        'Wake 2 hours before — no rushing',
        'Protein breakfast, low sugar',
        'Light exercise (10 min walk) wakes the brain',
        'Re-read your wins file',
        'Arrive 15 min early; don\'t enter the lobby until 5 min before'
      ]}
    ]},

    /* ============== CH 33: After the Interview ============== */
    { id: 'iv-c33', title: 'After the Interview', icon: '📬', sections: [
      { type: 'heading', text: 'Done means done — almost', level: 1 },
      { type: 'para', html: 'The interview is over but your influence isn\'t. A few small actions in the next 24 hours can tip a "maybe" into a "yes".' },

      { type: 'heading', text: 'Thank-you note', level: 2 },
      { type: 'para', html: 'Send within 24 hours, one per interviewer if you have their emails (recruiter can forward). Keep it short — 3 sentences — and reference something specific.' },
      { type: 'code', lang: 'text', code:
`Subject: Thanks — great chat today

Hi Priya,

Really enjoyed our conversation about the platform team\'s
migration strategy. The way you described handling the
deprecation of the v1 API gave me a lot to think about.

I\'m even more excited about the role after today. Happy to
share anything else that would help. Thanks again for your time.

Best,
[Your name]` },

      { type: 'heading', text: 'Self-debrief', level: 2 },
      { type: 'list', kind: 'check', items: [
        'What questions did they ask?',
        'What did I answer well? What did I fumble?',
        '1 thing to practice before next round',
        'Save it — patterns emerge across companies'
      ]},

      { type: 'heading', text: 'Following up', level: 2 },
      { type: 'para', html: 'If you haven\'t heard back by the date the recruiter promised, send a polite check-in. <em>"Hi X, hope you\'re well. Following up on next steps — happy to share anything else if useful."</em>' },
      { type: 'callout', kind: 'warn', html: 'Wait the full promised time before nudging. Following up 24h after a "we\'ll get back by Friday" reads as anxious.' },

      { type: 'heading', text: 'Evaluating offers', level: 2 },
      { type: 'list', kind: 'check', items: [
        '<strong>Comp</strong>: TC over 4 years, not year 1',
        '<strong>Team & manager</strong>: ask to chat with 1–2 future teammates',
        '<strong>Growth</strong>: promotion path, mentorship, learning budget',
        '<strong>Work-life</strong>: on-call frequency, vacation taken in practice',
        '<strong>Stability</strong>: company runway, recent layoffs, product fit',
        '<strong>Tech stack & domain</strong>: would you brag about this work in 5 years?'
      ]},

      { type: 'heading', text: 'Declining gracefully', level: 2 },
      { type: 'para', html: 'If you decline, do it warmly. The tech world is small — the recruiter you decline today may be hiring at your dream company in 2 years.' },
      { type: 'code', lang: 'text', code:
`"Thank you so much for the offer and for everyone\'s time. After
careful thought, I\'ve decided to accept another role that\'s a closer
fit for what I\'m looking for right now. I really enjoyed meeting the
team and hope our paths cross again."` },

      { type: 'heading', text: 'You did the thing', level: 2 },
      { type: 'callout', kind: 'tip', html: 'Whether you got the offer or not, finishing an interview loop is a win. Each one makes the next easier. <strong>Keep going.</strong>' }
    ]}

  ]
});

PUSH({
  id: 'interview',
  name: 'Interview Prep',
  icon: '💼',
  color: '#26a69a',
  description: 'Crack any tech interview — coding, behavioral, system design & career skills.',
  units: [
    {
      id: 'iv-u1',
      name: 'Unit 1 · Interview Mindset',
      description: 'What interviewers really look for and how to think before you prep.',
      lessons: [
        {
          id: 'iv-u1-l1',
          name: 'What Interviewers Want',
          icon: '🎯',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Signal, not perfection',
              content: `<p>Interviewers are <b>not</b> looking for a perfect candidate. They are looking for <b>signal</b> — evidence that you can do the job.</p>
<p>Four signals every interviewer hunts for:</p>
<ul>
  <li><b>Problem solving</b> — can you decompose, reason, recover?</li>
  <li><b>Coding</b> — do you write clean, working code?</li>
  <li><b>Communication</b> — can you explain your thinking?</li>
  <li><b>Collaboration</b> — would I want you on my team at 2am?</li>
</ul>
<div class="code-block"><span class="com">// What gets you hired is not what you know,</span>
<span class="com">// but how you behave when you don't know.</span></div>
<p>Confidence comes from <b>process</b>, not from memorising answers.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which signal matters MOST in a typical engineering interview?',
              options: [
                { text: 'Knowing every algorithm by heart.', code: false },
                { text: 'Structured problem-solving with clear communication.', code: false },
                { text: 'Speed-typing your solution.', code: false },
                { text: 'Using fancy language features.', code: false }
              ],
              correct: 1,
              explanation: 'Interviewers can teach syntax — they cannot teach structured thinking and communication.'
            },
            {
              type: 'true-false',
              statement: 'It is okay to admit you do not know something during an interview.',
              correct: true,
              explanation: 'Honesty + a structured attempt beats bluffing every time.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each interviewer concern with what they are evaluating.',
              leftLabel: 'What they ask',
              rightLabel: 'What they evaluate',
              pairs: [
                { left: '"Walk me through your approach."', right: 'Problem solving' },
                { left: '"Why did you pick this data structure?"', right: 'Trade-off awareness' },
                { left: '"Tell me about a conflict you had."', right: 'Collaboration' },
                { left: '"How would you test this?"', right: 'Engineering rigour' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Arrange the four hire signals in priority order (most to least universal).',
              tokens: ['Problem-solving', 'Communication', 'Coding', 'Collaboration'],
              correctOrder: ['Problem-solving', 'Coding', 'Communication', 'Collaboration'],
              explanation: 'Most rubrics weight problem-solving + coding highest, then communication, then collaboration.'
            },
            {
              type: 'type-answer',
              prompt: 'One word: the thing interviewers want from you that is more valuable than the right answer.',
              code: '',
              accept: ['signal', 'Signal', 'SIGNAL'],
              explanation: 'Signal — evidence of how you think, code and communicate.'
            }
          ]
        },
        {
          id: 'iv-u1-l2',
          name: 'Handling Rejection',
          icon: '💪',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Rejection is data, not verdict',
              content: `<p>Every rejection is a <b>data point</b>, not a final judgement.</p>
<p>Three healthy responses to a "no":</p>
<ol>
  <li><b>Decompress</b> — give yourself 24 hours before analysing.</li>
  <li><b>Retrospect</b> — write 3 things that went well, 3 to improve.</li>
  <li><b>Re-aim</b> — apply to 3 more roles within the week.</li>
</ol>
<div class="code-block"><span class="com">// Average successful candidate: 50–200 applications,</span>
<span class="com">// 5–15 final rounds, 2–4 offers.</span>
<span class="com">// Rejection is the baseline, not the exception.</span></div>
<p>The candidates who get hired are not the smartest — they are the ones who kept applying.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the healthiest first action after a rejection?',
              options: [
                { text: 'Email the recruiter angrily for "real" feedback.', code: false },
                { text: 'Decompress, then retrospect calmly.', code: false },
                { text: 'Quit applying for a month.', code: false },
                { text: 'Lower your standards immediately.', code: false }
              ],
              correct: 1,
              explanation: 'Emotions distort retrospection. Wait, then analyse.'
            },
            {
              type: 'true-false',
              statement: 'Most senior engineers were rejected from companies they later joined.',
              correct: true,
              explanation: 'Rejection is so common at top companies that "re-apply after 6–12 months" is standard advice.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the steps of a healthy post-rejection routine.',
              lines: [
                'Apply to 3 more roles this week',
                'Take 24h to decompress',
                'Write 3 wins + 3 improvements',
                'Identify ONE concrete skill to drill'
              ],
              correctOrder: [1, 0, 2, 3]
            },
            {
              type: 'match-pairs',
              prompt: 'Match each thought distortion with its healthier reframe.',
              leftLabel: 'Distortion',
              rightLabel: 'Reframe',
              pairs: [
                { left: '"I am not good enough."', right: '"I have not interviewed enough."' },
                { left: '"They saw through me."', right: '"They had a specific bar I missed today."' },
                { left: '"I should quit tech."', right: '"I should adjust my prep plan."' },
                { left: '"Everyone else gets offers."', right: '"Survivorship bias — most people fail loudly too."' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the mantra in order.',
              tokens: ['Rejection', 'is', 'data', ',', 'not', 'verdict'],
              correctOrder: ['Rejection', 'is', 'data', ',', 'not', 'verdict'],
              explanation: 'Repeat this often. It changes how you read every "no".'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u2',
      name: 'Unit 2 · Stages of a Tech Interview',
      description: 'From application to offer — the full funnel.',
      lessons: [
        {
          id: 'iv-u2-l1',
          name: 'The Interview Funnel',
          icon: '🪜',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Six stages, one funnel',
              content: `<p>Most tech hiring follows the same six stages:</p>
<ol>
  <li><b>Resume screen</b> — recruiter or ATS filter.</li>
  <li><b>Phone screen</b> — culture + basic fit (30 min).</li>
  <li><b>Online assessment (OA)</b> — 1–3 coding problems, timed.</li>
  <li><b>Technical round(s)</b> — DSA / system design with engineers.</li>
  <li><b>Behavioral / hiring manager</b> — STAR stories, motivation.</li>
  <li><b>Onsite / loop</b> — 4–6 back-to-back rounds, then debrief.</li>
</ol>
<div class="code-block"><span class="com">// Typical conversion rates (rough):</span>
<span class="com">// 100 applications  -&gt; 10 phone screens</span>
<span class="com">// 10 phone screens  -&gt; 4 OAs / techs</span>
<span class="com">// 4 onsites        -&gt; 1–2 offers</span></div>
<p>Know which stage you are at — the strategy is different for each.</p>`
            },
            {
              type: 'reorder-code',
              prompt: 'Put the six stages in the order they usually happen.',
              lines: [
                'Online assessment',
                'Resume screen',
                'Behavioral round',
                'Phone screen',
                'Onsite loop',
                'Technical round'
              ],
              correctOrder: [1, 3, 0, 5, 2, 4]
            },
            {
              type: 'multiple-choice',
              prompt: 'You bombed the OA. What is the typical next step?',
              options: [
                { text: 'You get a free retry next week.', code: false },
                { text: 'The pipeline usually stops; you can reapply later.', code: false },
                { text: 'You skip ahead to onsite.', code: false },
                { text: 'You get an automatic offer if your resume was strong.', code: false }
              ],
              correct: 1,
              explanation: 'OAs are usually a hard gate. Cooldowns of 3–12 months are standard.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each stage with what to optimise for.',
              leftLabel: 'Stage',
              rightLabel: 'Optimise for',
              pairs: [
                { left: 'Resume screen', right: 'Keywords + measurable impact' },
                { left: 'Phone screen', right: 'Clarity, energy, basic fit' },
                { left: 'Technical round', right: 'Process + clean code' },
                { left: 'Behavioral round', right: 'STAR stories' },
                { left: 'Onsite debrief', right: 'Consistency across rounds' }
              ]
            },
            {
              type: 'true-false',
              statement: 'Recruiters are rooting for you — they get paid when you get hired.',
              correct: true,
              explanation: 'Treat the recruiter as an ally. They want you to clear.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the recruiter-friendly status update.',
              codeLines: [
                { html: '"Quick update: I cleared the _BLANK_ round and have my onsite next Tuesday."' }
              ],
              tokens: ['technical', 'free', 'cancelled', 'gym'],
              correctAnswer: 'technical',
              explanation: 'Clear, factual updates keep recruiters engaged.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u3',
      name: 'Unit 3 · Resume That Gets Calls',
      description: 'Resumes that actually pass ATS and human screens.',
      lessons: [
        {
          id: 'iv-u3-l1',
          name: 'Resume Structure',
          icon: '📄',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'One page, scannable in 10 seconds',
              content: `<p>A recruiter spends <b>~7–10 seconds</b> on the first pass. Your resume must be scannable.</p>
<p>The canonical order:</p>
<ol>
  <li><b>Header</b> — name, email, phone, LinkedIn, GitHub.</li>
  <li><b>Summary</b> (optional) — 2 lines of value prop.</li>
  <li><b>Experience</b> — reverse chronological, impact bullets.</li>
  <li><b>Projects</b> — 2–4, with live links.</li>
  <li><b>Skills</b> — grouped, no proficiency bars.</li>
  <li><b>Education</b> — degree, school, year, GPA (if &gt;3.5).</li>
</ol>
<div class="code-block"><span class="ty">Jane Doe</span>  |  jane@mail.com  |  +1 555 0100
linkedin.com/in/janedoe  |  github.com/janedoe

<span class="kw">EXPERIENCE</span>
<span class="ty">Software Engineer</span>, Acme Corp           2022–Present
• Cut checkout latency <span class="num">38</span>% by adding a Redis cache layer
  serving <span class="num">2M</span> daily requests.</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How long should a resume be for &lt;10 years of experience?',
              options: [
                { text: 'One page.', code: false },
                { text: 'Two pages.', code: false },
                { text: 'Three pages.', code: false },
                { text: 'As long as needed.', code: false }
              ],
              correct: 0,
              explanation: 'One page is the standard until ~10 years of experience or you are deeply senior.'
            },
            {
              type: 'true-false',
              statement: 'You should include your photo and date of birth on a US/UK resume.',
              correct: false,
              explanation: 'In US/UK, no photo, no DOB, no marital status — anti-bias norms.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each section with its job.',
              leftLabel: 'Section',
              rightLabel: 'Purpose',
              pairs: [
                { left: 'Header', right: 'Get them to contact you' },
                { left: 'Experience', right: 'Prove impact' },
                { left: 'Projects', right: 'Show passion + skill' },
                { left: 'Skills', right: 'Pass keyword filters' }
              ]
            },
            {
              type: 'reorder-code',
              prompt: 'Order resume sections top-to-bottom for a new grad.',
              lines: [
                'Skills',
                'Header',
                'Education',
                'Projects',
                'Experience'
              ],
              correctOrder: [1, 2, 4, 3, 0]
            },
            {
              type: 'fill-blank',
              prompt: 'Pick the strongest opening word for a bullet.',
              codeLines: [
                { html: '"_BLANK_ search latency from 800ms to 120ms by indexing hot paths."' }
              ],
              tokens: ['Worked on', 'Reduced', 'Was responsible for', 'Helped with'],
              correctAnswer: 'Reduced',
              explanation: 'Strong action verbs + numbers beat vague ownership phrases.'
            }
          ]
        },
        {
          id: 'iv-u3-l2',
          name: 'Action Verbs & Impact',
          icon: '⚡',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Bullets that punch',
              content: `<p>Every bullet should follow the <b>X-Y-Z</b> formula popularised by Google recruiters:</p>
<p><i>Accomplished <b>[X]</b>, as measured by <b>[Y]</b>, by doing <b>[Z]</b>.</i></p>
<div class="code-block"><span class="com">// Weak</span>
• Worked on the search team.

<span class="com">// Strong</span>
• <span class="kw">Reduced</span> p99 search latency by <span class="num">62</span>%
  (<span class="num">800</span>ms -&gt; <span class="num">300</span>ms)
  by re-architecting the query planner.</div>
<p>Power verbs to keep in your back pocket:</p>
<ul>
  <li><b>Built / Designed / Architected</b> — creation</li>
  <li><b>Reduced / Increased / Cut</b> — measurable change</li>
  <li><b>Led / Mentored / Drove</b> — leadership</li>
  <li><b>Shipped / Launched / Delivered</b> — completion</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which bullet is strongest?',
              options: [
                { text: '"Worked on backend APIs."', code: false },
                { text: '"Helped improve the system."', code: false },
                { text: '"Built REST API serving 5M req/day; cut p95 latency 40%."', code: false },
                { text: '"Was part of the migration project."', code: false }
              ],
              correct: 2,
              explanation: 'Specific verb + scale + measured impact = strong.'
            },
            {
              type: 'true-false',
              statement: 'Every bullet should ideally contain a number.',
              correct: true,
              explanation: 'Numbers anchor impact. If you cannot measure it, estimate honestly.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a strong bullet using X-Y-Z.',
              tokens: ['Reduced', 'page load time', 'by 45%', 'by lazy-loading', 'images'],
              correctOrder: ['Reduced', 'page load time', 'by 45%', 'by lazy-loading', 'images'],
              explanation: 'Verb → metric → magnitude → method.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match weak phrase with stronger replacement.',
              leftLabel: 'Weak',
              rightLabel: 'Stronger',
              pairs: [
                { left: 'Worked on', right: 'Built' },
                { left: 'Helped with', right: 'Drove' },
                { left: 'Was responsible for', right: 'Owned' },
                { left: 'Did some testing', right: 'Wrote 40+ unit tests covering 92% of module' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the X-Y-Z formula.',
              codeLines: [
                { html: 'Accomplished X, as measured by Y, by doing _BLANK_.' }
              ],
              tokens: ['Z', 'A', 'W', 'V'],
              correctAnswer: 'Z',
              explanation: 'X = what, Y = measure, Z = how.'
            }
          ]
        },
        {
          id: 'iv-u3-l3',
          name: 'Resume Mistakes',
          icon: '🚫',
          xp: 15,
          challenges: [
            {
              type: 'concept',
              title: 'Top resume killers',
              content: `<p>The top reasons resumes get rejected at the first pass:</p>
<ul>
  <li><b>Typos & grammar</b> — instant trust killer.</li>
  <li><b>Walls of text</b> — recruiters skim, not read.</li>
  <li><b>Generic objective</b> — "seeking a challenging role…" 🪦</li>
  <li><b>No measurable impact</b> — all responsibilities, no outcomes.</li>
  <li><b>Skill bars / star ratings</b> — meaningless to ATS.</li>
  <li><b>Wrong tense</b> — past roles in present tense.</li>
  <li><b>Buzzword soup</b> — "synergistic", "rockstar", "ninja".</li>
</ul>
<div class="code-block"><span class="com">// Run this checklist before sending:</span>
<span class="num">1</span>. Spell-check + read aloud
<span class="num">2</span>. One page, &lt; 10s scan
<span class="num">3</span>. Every bullet has a number
<span class="num">4</span>. PDF, not .docx
<span class="num">5</span>. Filename: FirstLast_Resume.pdf</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Which file format is safest to send?',
              options: [
                { text: '.docx', code: false },
                { text: '.pdf', code: false },
                { text: '.pages', code: false },
                { text: '.txt', code: false }
              ],
              correct: 1,
              explanation: 'PDF preserves layout across every ATS and OS.'
            },
            {
              type: 'true-false',
              statement: 'Including "References available upon request" is a smart use of space.',
              correct: false,
              explanation: 'It is assumed. Use the line for something with signal.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the mistake to its fix.',
              leftLabel: 'Mistake',
              rightLabel: 'Fix',
              pairs: [
                { left: 'Generic objective', right: 'Remove or replace with summary' },
                { left: 'No metrics', right: 'Estimate and quantify' },
                { left: 'Skill bars', right: 'Plain comma-separated list' },
                { left: '2-page resume (junior)', right: 'Trim to 1 page' }
              ]
            },
            {
              type: 'type-answer',
              prompt: 'File extension you should usually send a resume in:',
              code: '',
              accept: ['pdf', 'PDF', '.pdf'],
              explanation: 'PDF is universal and ATS-safe.'
            },
            {
              type: 'fill-blank',
              prompt: 'Fix the buzzword.',
              codeLines: [
                { html: '"Rockstar developer who synergises stakeholders." -> "_BLANK_ developer who collaborates with stakeholders."' }
              ],
              tokens: ['Senior', 'Rockstar', 'Ninja', 'Guru'],
              correctAnswer: 'Senior',
              explanation: 'Precise titles beat hype words.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Order the pre-send checklist.',
              tokens: ['Spell-check', 'Read aloud', 'Convert to PDF', 'Rename file'],
              correctOrder: ['Spell-check', 'Read aloud', 'Convert to PDF', 'Rename file'],
              explanation: 'Catch issues earliest; finalise format last.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u4',
      name: 'Unit 4 · LinkedIn & Portfolio',
      description: 'Recruiters search; make sure they find you.',
      lessons: [
        {
          id: 'iv-u4-l1',
          name: 'LinkedIn That Recruiters Find',
          icon: '🔗',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Be searchable, not just present',
              content: `<p>LinkedIn is a <b>keyword search engine</b> first, social network second.</p>
<p>The recruiter checklist:</p>
<ul>
  <li><b>Headline</b> — role + stack, e.g. "Backend Engineer · Go · Kafka · AWS".</li>
  <li><b>About</b> — 3 short paragraphs: who, what, what next.</li>
  <li><b>Experience</b> — mirror your resume bullets.</li>
  <li><b>Skills</b> — pin your top 3.</li>
  <li><b>Open to work</b> — toggle ON for recruiters only.</li>
  <li><b>Photo</b> — clear, smiling, professional-ish.</li>
</ul>
<div class="code-block"><span class="com">// Headline templates that work:</span>
<span class="str">"Senior Frontend · React · TypeScript · Hiring? DM open"</span>
<span class="str">"SWE @ Acme · Distributed systems · ex-Google"</span>
<span class="str">"New grad SDE · Python, Java · seeking Summer 2026"</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What is the single most important LinkedIn field for recruiter search?',
              options: [
                { text: 'Cover photo banner.', code: false },
                { text: 'Headline.', code: false },
                { text: 'Recent post count.', code: false },
                { text: 'Connection count.', code: false }
              ],
              correct: 1,
              explanation: 'Headline appears in every search result and influences ranking heavily.'
            },
            {
              type: 'true-false',
              statement: '"Open to work" can be set to be visible only to recruiters.',
              correct: true,
              explanation: 'Use the recruiter-only toggle if you do not want your current employer to see.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each LinkedIn element with its priority.',
              leftLabel: 'Element',
              rightLabel: 'Priority',
              pairs: [
                { left: 'Headline', right: 'Critical' },
                { left: 'Profile photo', right: 'High' },
                { left: 'About section', right: 'High' },
                { left: 'Banner image', right: 'Low' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete a strong headline.',
              codeLines: [
                { html: '"Backend Engineer · Java · Spring · _BLANK_ · AWS"' }
              ],
              tokens: ['Kafka', 'Cooking', 'Vacation', 'Pets'],
              correctAnswer: 'Kafka',
              explanation: 'Headlines should be packed with relevant technical keywords.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a headline in the right order.',
              tokens: ['Role', '·', 'Stack', '·', 'Hook'],
              correctOrder: ['Role', '·', 'Stack', '·', 'Hook'],
              explanation: 'Role first (searched most), then tech stack, then a hook.'
            }
          ]
        },
        {
          id: 'iv-u4-l2',
          name: 'Portfolio & GitHub README',
          icon: '🗂️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Three pinned projects beat thirty repos',
              content: `<p>Pin <b>three</b> projects on your GitHub profile. Each must have:</p>
<ul>
  <li><b>Crisp README</b> — what it does, why, screenshots.</li>
  <li><b>Live demo link</b> — Vercel, Render, Fly.io.</li>
  <li><b>Setup section</b> — one-liner install.</li>
  <li><b>Architecture sketch</b> — even hand-drawn helps.</li>
</ul>
<div class="code-block"><span class="com"># 🚀 RouteWise — real-time bus ETA</span>

A React + Go app that predicts bus arrival times
using <span class="num">2</span>M rows of GTFS data.

<span class="com">## Demo</span>
👉 https://routewise.dev

<span class="com">## Stack</span>
React • Go • PostgreSQL • Redis • Fly.io

<span class="com">## Setup</span>
<span class="kw">git clone</span> ... && <span class="kw">make</span> dev</div>
<p>Recruiters spend <b>~30 seconds</b> per repo. Make the first scroll count.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How many pinned GitHub projects should a job-seeker showcase?',
              options: [
                { text: '1', code: false },
                { text: '3–6', code: false },
                { text: '15+', code: false },
                { text: '0 — let them browse.', code: false }
              ],
              correct: 1,
              explanation: 'Pinning 3–6 high-quality projects beats thirty half-done ones.'
            },
            {
              type: 'true-false',
              statement: 'A README without a live demo is a missed opportunity.',
              correct: true,
              explanation: 'Live demos let recruiters click and feel the project in 10 seconds.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order README sections from top to bottom.',
              lines: [
                'Setup / install',
                'Project title + tagline',
                'Demo link + screenshot',
                'Tech stack',
                'License'
              ],
              correctOrder: [1, 2, 3, 0, 4]
            },
            {
              type: 'match-pairs',
              prompt: 'Match README section with its job.',
              leftLabel: 'Section',
              rightLabel: 'Purpose',
              pairs: [
                { left: 'Title + tagline', right: 'Hook in 1 line' },
                { left: 'Screenshot/demo', right: 'Prove it works' },
                { left: 'Tech stack', right: 'Keyword match' },
                { left: 'Setup', right: 'Lower friction to try' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the GitHub bio line.',
              codeLines: [
                { html: '"_BLANK_ engineer building reliable backend systems · open to opportunities"' }
              ],
              tokens: ['Software', 'Software', 'Pizza', 'Karaoke'],
              correctAnswer: 'Software',
              explanation: 'Lead with role, follow with focus, close with availability.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u5',
      name: 'Unit 5 · Coding Interview Approach',
      description: 'How to attack any coding problem in front of an interviewer.',
      lessons: [
        {
          id: 'iv-u5-l1',
          name: 'The UMPIRE Method',
          icon: '🧭',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'U-M-P-I-R-E',
              content: `<p>A reliable framework for any coding interview:</p>
<ul>
  <li><b><span class="kw">U</span>nderstand</b> — restate the problem in your own words.</li>
  <li><b><span class="kw">M</span>atch</b> — does this fit a pattern you know?</li>
  <li><b><span class="kw">P</span>lan</b> — write pseudocode before code.</li>
  <li><b><span class="kw">I</span>mplement</b> — clean syntax, talk while coding.</li>
  <li><b><span class="kw">R</span>eview</b> — re-read your code as if it is someone else's.</li>
  <li><b><span class="kw">E</span>valuate</b> — time / space complexity + edge cases.</li>
</ul>
<div class="code-block"><span class="com">// Time budget for a 45-min interview:</span>
<span class="kw">U</span> + <span class="kw">M</span> + <span class="kw">P</span>   <span class="num">10</span> min
<span class="kw">I</span>           <span class="num">20</span> min
<span class="kw">R</span> + <span class="kw">E</span>       <span class="num">10</span> min
buffer        <span class="num">5</span> min</div>
<p>Most candidates jump straight to <span class="kw">I</span>mplement and lose points on the other five.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'What does the U in UMPIRE stand for?',
              options: [
                { text: 'Update', code: false },
                { text: 'Understand', code: false },
                { text: 'Unit-test', code: false },
                { text: 'Unwrap', code: false }
              ],
              correct: 1,
              explanation: 'Always start by understanding — restate the problem.'
            },
            {
              type: 'reorder-code',
              prompt: 'Put the UMPIRE steps in order.',
              lines: ['Plan', 'Match', 'Implement', 'Understand', 'Evaluate', 'Review'],
              correctOrder: [3, 1, 0, 2, 5, 4]
            },
            {
              type: 'true-false',
              statement: 'You should start coding within the first minute to save time.',
              correct: false,
              explanation: 'Coding too early is the #1 mistake. Plan first.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Spell out UMPIRE letter by letter.',
              tokens: ['U', 'M', 'P', 'I', 'R', 'E'],
              correctOrder: ['U', 'M', 'P', 'I', 'R', 'E'],
              explanation: 'Understand · Match · Plan · Implement · Review · Evaluate.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match each UMPIRE step with the question to ask yourself.',
              leftLabel: 'Step',
              rightLabel: 'Question',
              pairs: [
                { left: 'Understand', right: '"Can I restate this in one sentence?"' },
                { left: 'Match', right: '"Have I seen anything similar?"' },
                { left: 'Plan', right: '"What is my pseudocode?"' },
                { left: 'Evaluate', right: '"What is the Big O?"' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Fill the missing UMPIRE step.',
              codeLines: [
                { html: 'Understand · Match · Plan · Implement · _BLANK_ · Evaluate' }
              ],
              tokens: ['Review', 'Refactor', 'Run', 'Restart'],
              correctAnswer: 'Review',
              explanation: 'Review before Evaluate — re-read like a stranger.'
            }
          ]
        },
        {
          id: 'iv-u5-l2',
          name: 'Clarifying Questions',
          icon: '❓',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The questions that save you',
              content: `<p>Always ask <b>3–5 clarifying questions</b> before coding. They are graded.</p>
<p>Universal go-tos:</p>
<ul>
  <li>"What is the input size? Up to <span class="num">10</span>? <span class="num">10⁶</span>?"</li>
  <li>"Can the input be empty / null / negative?"</li>
  <li>"Are there duplicates?"</li>
  <li>"Should I optimise for time or space?"</li>
  <li>"What should I return on invalid input?"</li>
</ul>
<div class="code-block"><span class="com">// Example: "Find the kth largest element"</span>
- Can k be larger than the array length?
- Are elements unique?
- Is the array sorted?
- Is k 1-indexed or 0-indexed?</div>
<p>Asking these signals seniority. <b>Silence</b> signals a junior.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Roughly how many clarifying questions should you ask?',
              options: [
                { text: '0 — just start coding.', code: false },
                { text: '1 — to seem efficient.', code: false },
                { text: '3–5 — universal good range.', code: false },
                { text: '15+ — show curiosity.', code: false }
              ],
              correct: 2,
              explanation: '3–5 is the sweet spot — enough signal, not enough to look paralysed.'
            },
            {
              type: 'true-false',
              statement: 'Asking "what is the input size?" is a clarifying question worth asking.',
              correct: true,
              explanation: 'Input size dictates which algorithms are even acceptable.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the question to its purpose.',
              leftLabel: 'Question',
              rightLabel: 'Purpose',
              pairs: [
                { left: '"Can input be empty?"', right: 'Edge case discovery' },
                { left: '"What is N?"', right: 'Pick the right algorithm' },
                { left: '"Time or space priority?"', right: 'Frame trade-offs' },
                { left: '"Duplicates allowed?"', right: 'Affects data structure choice' }
              ]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build a great clarifying question.',
              tokens: ['What', 'is', 'the', 'maximum', 'input', 'size', '?'],
              correctOrder: ['What', 'is', 'the', 'maximum', 'input', 'size', '?'],
              explanation: 'Always ask about scale before choosing your approach.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the clarifying question.',
              codeLines: [
                { html: '"Can the input array contain _BLANK_ values?"' }
              ],
              tokens: ['negative', 'pizza', 'green', 'loud'],
              correctAnswer: 'negative',
              explanation: 'Sign of numbers changes whether tricks like prefix sums or bitmasks work.'
            }
          ]
        },
        {
          id: 'iv-u5-l3',
          name: 'Talking Out Loud',
          icon: '🗣️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Narrate, do not perform',
              content: `<p>An interviewer cannot read your mind. <b>Narrate</b>, do not perform.</p>
<p>Four phrases to keep in your pocket:</p>
<ul>
  <li>"My first instinct is X, because…"</li>
  <li>"Let me trace through an example with N=4…"</li>
  <li>"I am going to start with a brute force; we can optimise after."</li>
  <li>"I am stuck — let me restate the problem out loud."</li>
</ul>
<div class="code-block"><span class="com">// Silent candidate:</span>
... 5 minutes of staring ...

<span class="com">// Strong candidate:</span>
"I notice the array is sorted, which makes me think two pointers
or binary search. Let me try two pointers first because the
constraint suggests O(n)."</div>
<p>Talking exposes <b>signal</b> — even when you are wrong.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'You are stuck. Best move?',
              options: [
                { text: 'Stay silent and think for 10 minutes.', code: false },
                { text: 'Give up and apologise.', code: false },
                { text: 'Restate the problem out loud and trace an example.', code: false },
                { text: 'Switch problems abruptly.', code: false }
              ],
              correct: 2,
              explanation: 'Restating + tracing often unlocks the idea AND shows process.'
            },
            {
              type: 'true-false',
              statement: 'It is okay to think silently for 30+ seconds, but say "let me think for a moment" first.',
              correct: true,
              explanation: 'Signal that you are thinking — silence without context reads as freezing.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match the moment with the phrase.',
              leftLabel: 'Moment',
              rightLabel: 'What to say',
              pairs: [
                { left: 'You see a pattern', right: '"This looks like sliding window…"' },
                { left: 'You are stuck', right: '"Let me trace through an example."' },
                { left: 'You spot a bug', right: '"Wait, this fails for empty input."' },
                { left: 'You finish', right: '"Let me walk through complexity."' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the recovery phrase.',
              codeLines: [
                { html: '"Let me trace through an _BLANK_ to make sure my logic holds."' }
              ],
              tokens: ['example', 'enemy', 'engine', 'envelope'],
              correctAnswer: 'example',
              explanation: 'Concrete examples are the universal unsticker.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the brute-force opener.',
              tokens: ['Let', 'me', 'start', 'with', 'a', 'brute', 'force'],
              correctOrder: ['Let', 'me', 'start', 'with', 'a', 'brute', 'force'],
              explanation: 'Announce the brute force first — then optimise.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u6',
      name: 'Unit 6 · Complexity Analysis in Interviews',
      description: 'Big O without the panic.',
      lessons: [
        {
          id: 'iv-u6-l1',
          name: 'Big O Cheat Sheet',
          icon: '📈',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'The eight curves you must know',
              content: `<p>From fastest to slowest:</p>
<ul>
  <li><b>O(1)</b> — constant (hash lookup)</li>
  <li><b>O(log n)</b> — binary search</li>
  <li><b>O(n)</b> — single loop</li>
  <li><b>O(n log n)</b> — efficient sort</li>
  <li><b>O(n²)</b> — nested loops</li>
  <li><b>O(n³)</b> — triple nested</li>
  <li><b>O(2ⁿ)</b> — naive subsets / recursion</li>
  <li><b>O(n!)</b> — permutations</li>
</ul>
<div class="code-block"><span class="com">// At N = 10^6:</span>
O(n)        <span class="num">10</span>ms
O(n log n)  <span class="num">200</span>ms
O(n^2)      <span class="num">3</span> hours
O(2^n)      heat death of the universe</div>
<p>Interviewers expect you to <b>state Big O for time AND space</b> after every solution.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Two nested loops over n elements. Time complexity?',
              options: [
                { text: 'O(n)', code: true },
                { text: 'O(log n)', code: true },
                { text: 'O(n²)', code: true },
                { text: 'O(2ⁿ)', code: true }
              ],
              correct: 2,
              explanation: 'Each loop is n; nested = n × n = n².'
            },
            {
              type: 'output-predict',
              prompt: 'What is the time complexity of this code?',
              code: `for (int i = 0; i < n; i++) {
  for (int j = i; j < n; j++) {
    sum += a[i] * a[j];
  }
}`,
              options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
              correct: 2,
              explanation: 'Inner loop runs n + (n-1) + ... = n(n+1)/2 = O(n²).'
            },
            {
              type: 'true-false',
              statement: 'O(2n) and O(n) are the same complexity class.',
              correct: true,
              explanation: 'Constants drop out in Big O.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation to typical complexity.',
              leftLabel: 'Operation',
              rightLabel: 'Big O',
              pairs: [
                { left: 'HashMap.get', right: 'O(1) average' },
                { left: 'Binary search', right: 'O(log n)' },
                { left: 'Merge sort', right: 'O(n log n)' },
                { left: 'All subsets', right: 'O(2ⁿ)' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the complexity.',
              codeLines: [
                { html: 'Binary search runs in O(_BLANK_) time.' }
              ],
              tokens: ['log n', 'n', 'n²', '1'],
              correctAnswer: 'log n',
              explanation: 'Halving the search space → logarithmic.'
            }
          ]
        },
        {
          id: 'iv-u6-l2',
          name: 'Common Big O Mistakes',
          icon: '🐞',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Traps that cost you offers',
              content: `<p>Frequent Big O errors interviewers catch:</p>
<ul>
  <li><b>Ignoring hidden loops</b> — <code>String.contains</code> is O(n)!</li>
  <li><b>Forgetting recursion stack</b> — recursion uses O(depth) space.</li>
  <li><b>Counting amortised vs worst</b> — ArrayList add is O(1) amortised, O(n) worst.</li>
  <li><b>Forgetting input copies</b> — slicing arrays is often O(n).</li>
</ul>
<div class="code-block"><span class="com">// Looks O(n), is actually O(n²):</span>
<span class="kw">for</span> (String w : words) {
  <span class="kw">if</span> (result.contains(w)) ...   <span class="com">// O(n) inside O(n)</span>
}</div>
<p>Always state <b>average</b> and <b>worst</b> case if they differ.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'What is the time complexity?',
              code: `for (String w : words) {       // n words
  if (sortedList.contains(w))  // O(n)
    count++;
}`,
              options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
              correct: 2,
              explanation: 'List.contains is O(n) — inside a loop that is O(n²).'
            },
            {
              type: 'true-false',
              statement: 'HashMap.put is O(1) amortised but can be O(n) on a bad hash.',
              correct: true,
              explanation: 'Hash collisions degenerate to bucket scans.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Recursive Fibonacci with no memo — time complexity?',
              options: [
                { text: 'O(n)', code: true },
                { text: 'O(n log n)', code: true },
                { text: 'O(2ⁿ)', code: true },
                { text: 'O(log n)', code: true }
              ],
              correct: 2,
              explanation: 'Each call branches into two — exponential.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match misconception to truth.',
              leftLabel: 'Mistake',
              rightLabel: 'Reality',
              pairs: [
                { left: 'ArrayList add = O(1)', right: 'Amortised O(1), worst O(n)' },
                { left: 'String + String = O(1)', right: 'O(n) — copies both' },
                { left: 'HashMap = always O(1)', right: 'Worst case O(n)' },
                { left: 'Recursion = free space', right: 'O(depth) stack' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the trade-off.',
              codeLines: [
                { html: 'Recursion uses O(_BLANK_) extra space for the call stack.' }
              ],
              tokens: ['depth', '1', 'n²', 'log n'],
              correctAnswer: 'depth',
              explanation: 'Stack space is proportional to recursion depth.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u7',
      name: 'Unit 7 · Pattern — Two Pointers',
      description: 'A favourite of interviewers everywhere.',
      lessons: [
        {
          id: 'iv-u7-l1',
          name: 'Two Pointers Basics',
          icon: '👉',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Two indices, one pass',
              content: `<p>Two-pointer technique uses two indices walking the array, often saving an O(n) factor.</p>
<p>Three classic shapes:</p>
<ul>
  <li><b>Opposite ends</b> — start at 0 and n-1, move inward.</li>
  <li><b>Same direction</b> — slow + fast (e.g. remove duplicates).</li>
  <li><b>Fast / slow</b> — cycle detection.</li>
</ul>
<div class="code-block"><span class="com">// Opposite ends: pair sum in sorted array</span>
<span class="kw">int</span> l = <span class="num">0</span>, r = a.length - <span class="num">1</span>;
<span class="kw">while</span> (l &lt; r) {
  <span class="kw">int</span> s = a[l] + a[r];
  <span class="kw">if</span> (s == target) <span class="kw">return</span> <span class="kw">true</span>;
  <span class="kw">if</span> (s &lt; target) l++;
  <span class="kw">else</span> r--;
}</div>
<p>Works when the input is <b>sorted</b> or has monotonic structure.</p>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Two pointers from opposite ends — what is the typical complexity?',
              options: [
                { text: 'O(log n) time, O(1) space', code: true },
                { text: 'O(n) time, O(1) space', code: true },
                { text: 'O(n²) time', code: true },
                { text: 'O(n log n) time', code: true }
              ],
              correct: 1,
              explanation: 'Each step moves at least one pointer; both meet in n steps.'
            },
            {
              type: 'output-predict',
              prompt: 'Trace this. What does it return for a = [1,2,3,4,6], target = 6?',
              code: `int l = 0, r = a.length - 1;
while (l < r) {
  int s = a[l] + a[r];
  if (s == target) return true;
  if (s < target) l++; else r--;
}
return false;`,
              options: ['true', 'false', 'crash', '0'],
              correct: 0,
              explanation: '2+4=6 → true.'
            },
            {
              type: 'true-false',
              statement: 'Two pointers usually requires the array to be sorted.',
              correct: true,
              explanation: 'Sorted (or monotonic) order is the precondition for most variants.'
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the loop condition.',
              codeLines: [
                { html: 'while (l _BLANK_ r) { ... }' }
              ],
              tokens: ['<', '>', '==', '!='],
              correctAnswer: '<',
              explanation: 'Pointers move inward; stop when they cross.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the two-pointer pair-sum algorithm.',
              lines: [
                'sum = a[l] + a[r]',
                'while l < r',
                'if sum == target return true',
                'l = 0, r = n-1',
                'if sum < target l++; else r--'
              ],
              correctOrder: [3, 1, 0, 2, 4]
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the standard two-pointer skeleton.',
              tokens: ['l', '=', '0', ',', 'r', '=', 'n', '-', '1'],
              correctOrder: ['l', '=', '0', ',', 'r', '=', 'n', '-', '1'],
              explanation: 'Anchor at both ends.'
            }
          ]
        },
        {
          id: 'iv-u7-l2',
          name: 'Two Pointers Classics',
          icon: '🥇',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Three problems to memorise',
              content: `<p>These three problems appear in 80% of two-pointer interview sets:</p>
<ol>
  <li><b>Two Sum (sorted)</b> — opposite ends.</li>
  <li><b>Remove duplicates</b> — slow + fast, in-place.</li>
  <li><b>Container with most water</b> — opposite ends with area = min(h[l],h[r]) × (r-l).</li>
</ol>
<div class="code-block"><span class="com">// Remove duplicates in sorted array (in-place)</span>
<span class="kw">int</span> slow = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> fast = <span class="num">1</span>; fast &lt; n; fast++) {
  <span class="kw">if</span> (a[fast] != a[slow]) {
    slow++;
    a[slow] = a[fast];
  }
}
<span class="kw">return</span> slow + <span class="num">1</span>;</div>`
            },
            {
              type: 'output-predict',
              prompt: 'a = [1,1,2,2,3]. What does the dedup return?',
              code: `int slow = 0;
for (int fast = 1; fast < a.length; fast++) {
  if (a[fast] != a[slow]) { slow++; a[slow] = a[fast]; }
}
return slow + 1;`,
              options: ['2', '3', '4', '5'],
              correct: 1,
              explanation: 'Unique count is 3 → return 3.'
            },
            {
              type: 'multiple-choice',
              prompt: 'In "Container with most water", what move shrinks the search space optimally?',
              options: [
                { text: 'Always move left pointer.', code: false },
                { text: 'Always move right pointer.', code: false },
                { text: 'Move the pointer with the shorter height.', code: false },
                { text: 'Move the pointer with the taller height.', code: false }
              ],
              correct: 2,
              explanation: 'Moving the taller pointer cannot increase area — height is capped by the shorter one.'
            },
            {
              type: 'true-false',
              statement: 'Slow/fast pointers can detect cycles in a linked list in O(1) extra space.',
              correct: true,
              explanation: 'Floyd\'s tortoise-and-hare.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem to pointer shape.',
              leftLabel: 'Problem',
              rightLabel: 'Shape',
              pairs: [
                { left: 'Two sum sorted', right: 'Opposite ends' },
                { left: 'Remove duplicates', right: 'Slow + fast same direction' },
                { left: 'Linked-list cycle', right: 'Tortoise + hare' },
                { left: 'Container w/ water', right: 'Opposite ends' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the area formula.',
              codeLines: [
                { html: 'area = Math.min(h[l], h[r]) * (_BLANK_)' }
              ],
              tokens: ['r - l', 'r + l', 'l - r', 'r * l'],
              correctAnswer: 'r - l',
              explanation: 'Width is the distance between pointers.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u8',
      name: 'Unit 8 · Pattern — Sliding Window',
      description: 'Run a window across the array — fixed or variable size.',
      lessons: [
        {
          id: 'iv-u8-l1',
          name: 'Fixed-Size Sliding Window',
          icon: '🪟',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Add right, remove left',
              content: `<p>A <b>sliding window</b> maintains a running aggregate (sum, count, max…) over a contiguous range.</p>
<p>Fixed window of size k:</p>
<div class="code-block"><span class="com">// Max sum of any k-length subarray</span>
<span class="kw">int</span> sum = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; k; i++) sum += a[i];
<span class="kw">int</span> best = sum;
<span class="kw">for</span> (<span class="kw">int</span> i = k; i &lt; n; i++) {
  sum += a[i] - a[i - k];   <span class="com">// add right, drop left</span>
  best = Math.max(best, sum);
}
<span class="kw">return</span> best;</div>
<p>Complexity: <b>O(n)</b> time, <b>O(1)</b> space — beats recomputing sums.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'a = [2,1,5,1,3,2], k = 3. Max sum?',
              code: `int sum = 0;
for (int i = 0; i < k; i++) sum += a[i];
int best = sum;
for (int i = k; i < a.length; i++) {
  sum += a[i] - a[i - k];
  best = Math.max(best, sum);
}
return best;`,
              options: ['7', '8', '9', '11'],
              correct: 2,
              explanation: '[5,1,3] = 9 is the max.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Why is sliding window O(n) instead of O(n·k)?',
              options: [
                { text: 'Because k is always small.', code: false },
                { text: 'Because we add one and remove one per step.', code: false },
                { text: 'Because Java is fast.', code: false },
                { text: 'Because the array is sorted.', code: false }
              ],
              correct: 1,
              explanation: 'Each element enters and leaves the window once.'
            },
            {
              type: 'true-false',
              statement: 'Sliding window only works on contiguous ranges.',
              correct: true,
              explanation: 'It exploits the structure of contiguous index ranges.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the fixed-window template.',
              lines: [
                'best = max(best, sum)',
                'initialize first window sum',
                'slide: sum += a[i] - a[i-k]',
                'loop i from k to n-1'
              ],
              correctOrder: [1, 3, 2, 0]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the slide step.',
              codeLines: [
                { html: 'sum += a[i] - a[i _BLANK_ k];' }
              ],
              tokens: ['-', '+', '*', '/'],
              correctAnswer: '-',
              explanation: 'Drop the element leaving the window.'
            }
          ]
        },
        {
          id: 'iv-u8-l2',
          name: 'Variable-Size Sliding Window',
          icon: '🧬',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Expand right, shrink left',
              content: `<p>For "longest / shortest subarray with property P", grow right until P breaks, then shrink left.</p>
<div class="code-block"><span class="com">// Longest substring with at most K distinct chars</span>
<span class="ty">Map</span>&lt;Character, Integer&gt; freq = <span class="kw">new</span> HashMap&lt;&gt;();
<span class="kw">int</span> l = <span class="num">0</span>, best = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r &lt; s.length(); r++) {
  freq.merge(s.charAt(r), <span class="num">1</span>, Integer::sum);
  <span class="kw">while</span> (freq.size() &gt; k) {
    <span class="kw">char</span> c = s.charAt(l++);
    <span class="kw">if</span> (freq.merge(c, -<span class="num">1</span>, Integer::sum) == <span class="num">0</span>)
      freq.remove(c);
  }
  best = Math.max(best, r - l + <span class="num">1</span>);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Time complexity of variable sliding window over n items?',
              options: [
                { text: 'O(n²)', code: true },
                { text: 'O(n log n)', code: true },
                { text: 'O(n)', code: true },
                { text: 'O(1)', code: true }
              ],
              correct: 2,
              explanation: 'Each index enters and exits the window at most once → O(n).'
            },
            {
              type: 'true-false',
              statement: 'In a variable window, the left pointer can only move forward.',
              correct: true,
              explanation: 'Both pointers are monotonic — that is what makes the analysis O(n).'
            },
            {
              type: 'output-predict',
              prompt: 's = "eceba", k = 2. Length of longest substring with ≤ 2 distinct chars?',
              code: `// Apply the K-distinct sliding window`,
              options: ['2', '3', '4', '5'],
              correct: 1,
              explanation: '"ece" length 3.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match operation to side of the window.',
              leftLabel: 'Action',
              rightLabel: 'Side',
              pairs: [
                { left: 'Add new char to freq', right: 'Right (expand)' },
                { left: 'Drop char that left', right: 'Left (shrink)' },
                { left: 'Update best = max(best, len)', right: 'After each expand' },
                { left: 'while property broken', right: 'Shrink loop' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the length expression.',
              codeLines: [
                { html: 'best = Math.max(best, r - l _BLANK_ 1);' }
              ],
              tokens: ['+', '-', '*', '/'],
              correctAnswer: '+',
              explanation: 'Inclusive on both ends → r - l + 1.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u9',
      name: 'Unit 9 · Pattern — Hashing',
      description: 'O(1) lookups change everything.',
      lessons: [
        {
          id: 'iv-u9-l1',
          name: 'HashMap / HashSet Tricks',
          icon: '🗃️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Trade space for time',
              content: `<p>The hashing pattern: spend <b>O(n) space</b> to drop time from O(n²) to O(n).</p>
<p>Hot use cases:</p>
<ul>
  <li><b>Two Sum</b> — store seen → complement check.</li>
  <li><b>Duplicate detection</b> — HashSet contains check.</li>
  <li><b>Anagram grouping</b> — sorted-string key.</li>
  <li><b>First non-repeating char</b> — count map.</li>
</ul>
<div class="code-block"><span class="com">// Two Sum in O(n)</span>
<span class="ty">Map</span>&lt;Integer, Integer&gt; seen = <span class="kw">new</span> HashMap&lt;&gt;();
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="num">0</span>; i &lt; a.length; i++) {
  <span class="kw">int</span> need = target - a[i];
  <span class="kw">if</span> (seen.containsKey(need))
    <span class="kw">return</span> <span class="kw">new</span> <span class="kw">int</span>[]{ seen.get(need), i };
  seen.put(a[i], i);
}</div>`
            },
            {
              type: 'output-predict',
              prompt: 'a=[2,7,11,15], target=9. Two-sum returns indices…',
              code: `Map<Integer,Integer> seen = new HashMap<>();
for (int i = 0; i < a.length; i++) {
  int need = target - a[i];
  if (seen.containsKey(need)) return new int[]{seen.get(need), i};
  seen.put(a[i], i);
}`,
              options: ['[0,1]', '[1,2]', '[0,2]', '[2,3]'],
              correct: 0,
              explanation: '2 + 7 = 9 at indices 0 and 1.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Best structure to count character frequency?',
              options: [
                { text: 'List<Character>', code: true },
                { text: 'Map<Character, Integer>', code: true },
                { text: 'Stack<Character>', code: true },
                { text: 'Queue<Character>', code: true }
              ],
              correct: 1,
              explanation: 'Map gives O(1) increments and lookups.'
            },
            {
              type: 'true-false',
              statement: 'HashSet operations are O(1) on average.',
              correct: true,
              explanation: 'Hashing buckets give average O(1), worst case O(n).'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem to hash structure.',
              leftLabel: 'Problem',
              rightLabel: 'Use',
              pairs: [
                { left: 'Is there a duplicate?', right: 'HashSet' },
                { left: 'Count occurrences', right: 'HashMap<T, Integer>' },
                { left: 'Anagram groups', right: 'Map<String, List<String>>' },
                { left: 'Index lookup', right: 'Map<T, Integer>' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the complement.',
              codeLines: [
                { html: 'int need = target _BLANK_ a[i];' }
              ],
              tokens: ['-', '+', '*', '/'],
              correctAnswer: '-',
              explanation: 'Complement = target - current.'
            }
          ]
        },
        {
          id: 'iv-u9-l2',
          name: 'Hashing Pitfalls',
          icon: '⚠️',
          xp: 20,
          challenges: [
            {
              type: 'concept',
              title: 'Mutable keys = pain',
              content: `<p>Three hashing landmines:</p>
<ul>
  <li><b>Mutable keys</b> — never put a mutable object in a HashMap.</li>
  <li><b>equals() without hashCode()</b> — silent bugs.</li>
  <li><b>Iteration order</b> — HashMap has no order; use LinkedHashMap or TreeMap.</li>
</ul>
<div class="code-block"><span class="com">// Classic Java foot-gun</span>
<span class="ty">Map</span>&lt;<span class="ty">Point</span>, String&gt; m = <span class="kw">new</span> HashMap&lt;&gt;();
m.put(p, <span class="str">"a"</span>);
p.x = <span class="num">99</span>;          <span class="com">// p mutated</span>
m.get(p);             <span class="com">// returns null!</span></div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Java rule: if you override equals(), you must also override…',
              options: [
                { text: 'toString()', code: true },
                { text: 'hashCode()', code: true },
                { text: 'compareTo()', code: true },
                { text: 'clone()', code: true }
              ],
              correct: 1,
              explanation: 'Equal objects must have equal hash codes.'
            },
            {
              type: 'true-false',
              statement: 'TreeMap maintains sorted key order.',
              correct: true,
              explanation: 'TreeMap is a red-black tree → keys sorted, O(log n) ops.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match map flavour to ordering.',
              leftLabel: 'Type',
              rightLabel: 'Order',
              pairs: [
                { left: 'HashMap', right: 'No order' },
                { left: 'LinkedHashMap', right: 'Insertion order' },
                { left: 'TreeMap', right: 'Sorted order' },
                { left: 'ConcurrentHashMap', right: 'No order, thread-safe' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Use this map when you need iteration to match insertion order.',
              codeLines: [
                { html: '_BLANK_<String, Integer> m = new ___<>();' }
              ],
              tokens: ['LinkedHashMap', 'HashMap', 'TreeMap', 'WeakHashMap'],
              correctAnswer: 'LinkedHashMap',
              explanation: 'LinkedHashMap preserves insertion order.'
            },
            {
              type: 'tap-tokens',
              prompt: 'Build the override pair every Java engineer should remember.',
              tokens: ['equals', '+', 'hashCode'],
              correctOrder: ['equals', '+', 'hashCode'],
              explanation: 'Override both, or neither.'
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u10',
      name: 'Unit 10 · Pattern — Recursion & Backtracking',
      description: 'Try, recurse, undo.',
      lessons: [
        {
          id: 'iv-u10-l1',
          name: 'Recursion Mental Model',
          icon: '🌀',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Base case + recursive case',
              content: `<p>Every recursive function has two parts:</p>
<ol>
  <li><b>Base case</b> — when to stop.</li>
  <li><b>Recursive case</b> — break problem into smaller version(s).</li>
</ol>
<div class="code-block"><span class="kw">int</span> <span class="fn">fact</span>(<span class="kw">int</span> n) {
  <span class="kw">if</span> (n &lt;= <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;     <span class="com">// base</span>
  <span class="kw">return</span> n * <span class="fn">fact</span>(n - <span class="num">1</span>); <span class="com">// recurse</span>
}</div>
<p>Mental check before writing recursion:</p>
<ul>
  <li>What is the smallest input?</li>
  <li>How do I shrink the input each call?</li>
  <li>What do I combine from the sub-answer?</li>
</ul>`
            },
            {
              type: 'output-predict',
              prompt: 'fact(5) returns?',
              code: `int fact(int n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}`,
              options: ['24', '60', '120', '125'],
              correct: 2,
              explanation: '5*4*3*2*1 = 120.'
            },
            {
              type: 'multiple-choice',
              prompt: 'A recursion without a base case will…',
              options: [
                { text: 'Run forever.', code: false },
                { text: 'Throw StackOverflowError.', code: false },
                { text: 'Return null.', code: false },
                { text: 'Print 0.', code: false }
              ],
              correct: 1,
              explanation: 'The call stack fills up and the JVM throws.'
            },
            {
              type: 'true-false',
              statement: 'Tail-recursive calls do NOT save stack frames in standard Java.',
              correct: true,
              explanation: 'JVM does not optimise tail calls by default.'
            },
            {
              type: 'fill-blank',
              prompt: 'Add the base case.',
              codeLines: [
                { html: 'if (n _BLANK_ 1) return 1;' }
              ],
              tokens: ['<=', '>=', '==', '!='],
              correctAnswer: '<=',
              explanation: '0! and 1! are both 1.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order recursive thinking steps.',
              lines: [
                'Define smaller subproblem',
                'Identify base case',
                'Combine sub-answer with current',
                'Trust the recursion'
              ],
              correctOrder: [1, 0, 2, 3]
            }
          ]
        },
        {
          id: 'iv-u10-l2',
          name: 'Backtracking Template',
          icon: '↩️',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Choose, recurse, un-choose',
              content: `<p>Backtracking explores choices then undoes them:</p>
<div class="code-block"><span class="kw">void</span> <span class="fn">backtrack</span>(<span class="ty">State</span> s) {
  <span class="kw">if</span> (isGoal(s)) { record(s); <span class="kw">return</span>; }
  <span class="kw">for</span> (Choice c : choices(s)) {
    apply(s, c);          <span class="com">// choose</span>
    <span class="fn">backtrack</span>(s);         <span class="com">// recurse</span>
    undo(s, c);           <span class="com">// un-choose</span>
  }
}</div>
<p>Classics:</p>
<ul>
  <li><b>Subsets</b> — include / skip each element.</li>
  <li><b>Permutations</b> — pick each unused element.</li>
  <li><b>N-Queens</b> — place row by row, validate columns/diagonals.</li>
  <li><b>Sudoku</b> — fill empty cells with valid digits.</li>
</ul>`
            },
            {
              type: 'multiple-choice',
              prompt: 'How many subsets does an array of length n have?',
              options: [
                { text: 'n', code: true },
                { text: 'n²', code: true },
                { text: '2ⁿ', code: true },
                { text: 'n!', code: true }
              ],
              correct: 2,
              explanation: 'Each element is in or out → 2ⁿ subsets.'
            },
            {
              type: 'output-predict',
              prompt: 'How many permutations of [1,2,3]?',
              code: `// permutations of length-3 distinct array`,
              options: ['3', '6', '8', '9'],
              correct: 1,
              explanation: '3! = 6.'
            },
            {
              type: 'true-false',
              statement: 'Backtracking always requires explicit "undo" steps.',
              correct: true,
              explanation: 'Otherwise state leaks across branches.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the backtracking template.',
              lines: [
                'record solution if goal reached',
                'apply choice',
                'undo choice',
                'recurse',
                'for each choice'
              ],
              correctOrder: [0, 4, 1, 3, 2]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the missing step.',
              codeLines: [
                { html: 'apply(s, c); backtrack(s); _BLANK_(s, c);' }
              ],
              tokens: ['undo', 'apply', 'commit', 'check'],
              correctAnswer: 'undo',
              explanation: 'Always undo when returning from a branch.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match problem to its branching factor.',
              leftLabel: 'Problem',
              rightLabel: 'Branching',
              pairs: [
                { left: 'Subsets', right: '2 (take / skip)' },
                { left: 'Permutations', right: 'n then n-1 ...' },
                { left: 'N-Queens', right: 'n per row' },
                { left: 'Sudoku', right: '1–9 per empty cell' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'iv-u11',
      name: 'Unit 11 · Pattern — BFS / DFS',
      description: 'Two ways to traverse anything.',
      lessons: [
        {
          id: 'iv-u11-l1',
          name: 'BFS vs DFS',
          icon: '🌐',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Queue vs stack, layer vs depth',
              content: `<p><b>BFS</b> uses a queue — explores layer by layer. Best for shortest path in unweighted graphs.</p>
<p><b>DFS</b> uses recursion or a stack — explores deep first. Best for connectivity, topological sort, cycle detection.</p>
<div class="code-block"><span class="com">// BFS template</span>
<span class="ty">Queue</span>&lt;Node&gt; q = <span class="kw">new</span> ArrayDeque&lt;&gt;();
q.offer(start);
seen.add(start);
<span class="kw">while</span> (!q.isEmpty()) {
  Node v = q.poll();
  <span class="kw">for</span> (Node n : v.neighbors)
    <span class="kw">if</span> (seen.add(n)) q.offer(n);
}</div>`
            },
            {
              type: 'multiple-choice',
              prompt: 'Shortest path in an unweighted graph — which traversal?',
              options: [
                { text: 'DFS', code: false },
                { text: 'BFS', code: false },
                { text: 'Dijkstra', code: false },
                { text: 'A*', code: false }
              ],
              correct: 1,
              explanation: 'BFS finds the fewest-edges path.'
            },
            {
              type: 'true-false',
              statement: 'DFS naturally maps to recursion.',
              correct: true,
              explanation: 'The call stack IS the DFS stack.'
            },
            {
              type: 'match-pairs',
              prompt: 'Match traversal to use case.',
              leftLabel: 'Use',
              rightLabel: 'Algorithm',
              pairs: [
                { left: 'Shortest unweighted path', right: 'BFS' },
                { left: 'Topological sort', right: 'DFS' },
                { left: 'Detect cycle', right: 'DFS' },
                { left: 'Level-order tree print', right: 'BFS' }
              ]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the BFS data structure.',
              codeLines: [
                { html: '_BLANK_<Node> q = new ArrayDeque<>();' }
              ],
              tokens: ['Queue', 'Stack', 'Set', 'List'],
              correctAnswer: 'Queue',
              explanation: 'BFS uses a FIFO queue.'
            },
            {
              type: 'output-predict',
              prompt: 'BFS from node 1 in graph 1-2, 1-3, 2-4, 3-5. Order visited?',
              code: `// Standard BFS, neighbors visited in numeric order`,
              options: ['1 2 3 4 5', '1 3 2 5 4', '1 2 4 3 5', '5 4 3 2 1'],
              correct: 0,
              explanation: 'BFS expands layer by layer.'
            }
          ]
        },
        {
          id: 'iv-u11-l2',
          name: 'Connected Components',
          icon: '🧩',
          xp: 25,
          challenges: [
            {
              type: 'concept',
              title: 'Count islands',
              content: `<p>Counting connected components is the canonical BFS/DFS interview question.</p>
<div class="code-block"><span class="com">// Number of islands in a grid</span>
<span class="kw">int</span> count = <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">int</span> r = <span class="num">0</span>; r &lt; rows; r++)
  <span class="kw">for</span> (<span class="kw">int</span> c = <span class="num">0</span>; c &lt; cols; c++)
    <span class="kw">if</span> (grid[r][c] == <span class="str">'1'</span>) {
      <span class="fn">dfs</span>(grid, r, c);
      count++;
    }
<span class="kw">return</span> count;</div>
<p>Each unvisited "1" triggers a flood fill that marks its whole island as visited.</p>`
            },
            {
              type: 'output-predict',
              prompt: 'How many islands?\n110\n110\n001',
              code: `grid = [
  "110",
  "110",
  "001"
]`,
              options: ['1', '2', '3', '4'],
              correct: 1,
              explanation: 'Top-left blob + bottom-right cell = 2.'
            },
            {
              type: 'multiple-choice',
              prompt: 'Time complexity of "number of islands" on m×n grid?',
              options: [
                { text: 'O(m + n)', code: true },
                { text: 'O(m · n)', code: true },
                { text: 'O(m² · n²)', code: true },
                { text: 'O(log mn)', code: true }
              ],
              correct: 1,
              explanation: 'Each cell visited once → O(m·n).'
            },
            {
              type: 'true-false',
              statement: 'Union-Find (DSU) is an alternative to BFS/DFS for counting components.',
              correct: true,
              explanation: 'DSU shines when edges are added dynamically.'
            },
            {
              type: 'reorder-code',
              prompt: 'Order the island-count algorithm.',
              lines: [
                'count++',
                'if grid[r][c] == 1',
                'dfs to flood-fill',
                'for each cell (r, c)'
              ],
              correctOrder: [3, 1, 2, 0]
            },
            {
              type: 'fill-blank',
              prompt: 'Complete the flood-fill check.',
              codeLines: [
                { html: 'if (r<0 || r>=rows || c<0 || c>=cols || grid[r][c] != _BLANK_) return;' }
              ],
              tokens: ["'1'", "'0'", "1", "'X'"],
              correctAnswer: "'1'",
              explanation: 'Stop when out-of-bounds or not on land.'
            }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — DP ============== */
    {
      id: 'iv-u12',
      name: 'Unit 12 · Pattern — Dynamic Programming',
      description: 'Memoize. Tabulate. Win.',
      lessons: [
        {
          id: 'iv-u12-l1',
          name: 'Recognising DP',
          icon: '🧠',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Two signals it\'s DP', content: `<p>Reach for DP when you see:</p>
<div class="code-block"><span class="com">1. Overlapping subproblems</span> — same calc repeats
<span class="com">2. Optimal substructure</span> — best of subparts builds best of whole</div>
<p>Examples: Fibonacci, climb-stairs, min-cost-path, knapsack, coin-change.</p>
<p>Always start by writing the recurrence — DP is just smart recursion + a cache.</p>` },
            { type: 'multiple-choice', prompt: 'Which problem is the canonical DP intro?',
              options: [{text:'Fibonacci numbers', code:false},{text:'Binary search', code:false},{text:'Bubble sort', code:false},{text:'BFS', code:false}],
              correct: 0, explanation: 'Naive fib is O(2^n); memoised fib is O(n) — same subproblems repeat.' },
            { type: 'true-false', statement: 'Memoization caches results of recursive calls.', correct: true, explanation: 'Top-down DP.' },
            { type: 'true-false', statement: 'Tabulation fills an array bottom-up.', correct: true, explanation: 'Bottom-up DP.' },
            { type: 'match-pairs', prompt: 'Match DP variant to direction.', leftLabel: 'Technique', rightLabel: 'Direction',
              pairs: [{left:'Memoization', right:'Top-down'},{left:'Tabulation', right:'Bottom-up'},{left:'Recursion + cache', right:'Top-down'},{left:'Array filling', right:'Bottom-up'}] }
          ]
        },
        {
          id: 'iv-u12-l2',
          name: 'Climb-stairs / house robber',
          icon: '🏠',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Two classic 1D-DPs', content: `<p><strong>Climb stairs</strong>: ways(n) = ways(n-1) + ways(n-2). It\'s Fibonacci in disguise.</p>
<p><strong>House robber</strong>: rob(i) = max(rob(i-1), rob(i-2) + nums[i]). Pick or skip.</p>
<div class="code-block"><span class="com">// Climb stairs in Java</span>
<span class="ty">int</span> <span class="fn">climb</span>(<span class="ty">int</span> n) {
  <span class="kw">if</span> (n <= 2) <span class="kw">return</span> n;
  <span class="ty">int</span> a = <span class="num">1</span>, b = <span class="num">2</span>;
  <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">3</span>; i <= n; i++) {
    <span class="ty">int</span> c = a + b; a = b; b = c;
  }
  <span class="kw">return</span> b;
}</div>` },
            { type: 'output-predict', prompt: 'climb(5) returns?',
              code: `<span class="com">// 1: 1
// 2: 2
// 3: 3
// 4: 5
// 5: ?</span>`,
              options: ['5','7','8','13'], correct: 2, explanation: '3 + 5 = 8.' },
            { type: 'multiple-choice', prompt: 'House robber: nums = [2,7,9,3,1]. Max?',
              options: [{text:'10', code:false},{text:'11', code:false},{text:'12', code:false},{text:'13', code:false}],
              correct: 2, explanation: 'Rob 2, 9, 1 = 12.' },
            { type: 'fill-blank', prompt: 'Climb-stairs recurrence',
              codeLines: [{html:'ways(n) = ways(n-<span class="num">1</span>) + ways(n-<span class="num">_BLANK_</span>);'}],
              tokens: ['1','2','3','n'], correctAnswer: '2', explanation: 'You either step from n-1 or from n-2.' },
            { type: 'true-false', statement: 'Climb-stairs is just Fibonacci.', correct: true, explanation: 'Same recurrence; offset by one.' }
          ]
        },
        {
          id: 'iv-u12-l3',
          name: '0/1 Knapsack & coin change',
          icon: '💰',
          xp: 30,
          challenges: [
            { type: 'concept', title: '2D DP: capacity × item', content: `<p>For knapsack: <code>dp[i][w]</code> = max value using first i items with weight ≤ w.</p>
<div class="code-block">dp[i][w] = max(
  dp[i-1][w],                          <span class="com">// skip item i</span>
  dp[i-1][w - wt[i]] + val[i]          <span class="com">// take item i</span>
)</div>
<p>For coin change (min coins): <code>dp[v] = min(dp[v - c] + 1)</code> for each coin c.</p>` },
            { type: 'multiple-choice', prompt: 'Coins {1,3,4}, amount 6. Minimum coins?',
              options: [{text:'2', code:false},{text:'3', code:false},{text:'4', code:false},{text:'6', code:false}],
              correct: 0, explanation: '3 + 3 = 6 (two coins).' },
            { type: 'true-false', statement: '0/1 knapsack: each item can be taken at most once.', correct: true, explanation: 'That\'s what 0/1 means.' },
            { type: 'multiple-choice', prompt: 'Time complexity of basic DP knapsack with n items, capacity W?',
              options: [{text:'O(n)', code:true},{text:'O(W)', code:true},{text:'O(n + W)', code:true},{text:'O(n × W)', code:true}],
              correct: 3, explanation: 'Two nested loops, hence O(n*W).' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Greedy ============== */
    {
      id: 'iv-u13',
      name: 'Unit 13 · Pattern — Greedy',
      description: 'Make the locally-best choice',
      lessons: [
        {
          id: 'iv-u13-l1',
          name: 'When greedy works',
          icon: '🍰',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Local optimum → global optimum?', content: `<p>Greedy works when the problem has the <strong>greedy choice property</strong>: making the best local choice never blocks the global best.</p>
<div class="code-block"><span class="com">Greedy wins:</span>
- Activity selection (earliest finish first)
- Fractional knapsack (best $/kg first)
- Huffman coding

<span class="com">Greedy loses:</span>
- Coin change for arbitrary denominations
- 0/1 knapsack</div>
<p>If greedy gives a counterexample, fall back to DP.</p>` },
            { type: 'multiple-choice', prompt: 'Which problem is solved correctly by greedy?',
              options: [{text:'0/1 Knapsack', code:false},{text:'Fractional Knapsack', code:false},{text:'Coin change (arbitrary coins)', code:false},{text:'Longest common subsequence', code:false}],
              correct: 1, explanation: 'Fractional knapsack: sort by value/weight, take greedily — provably optimal.' },
            { type: 'multiple-choice', prompt: 'Activity selection (pick most non-overlapping). Sort by:',
              options: [{text:'Start time', code:false},{text:'Duration', code:false},{text:'Finish time', code:false},{text:'Random', code:false}],
              correct: 2, explanation: 'Earliest finish time first → maximal selection.' },
            { type: 'true-false', statement: 'Greedy always gives the optimal answer.', correct: false, explanation: 'Only when the problem has greedy choice + optimal substructure.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Heaps ============== */
    {
      id: 'iv-u14',
      name: 'Unit 14 · Pattern — Heaps / Priority Queue',
      description: 'Top-K problems',
      lessons: [
        {
          id: 'iv-u14-l1',
          name: 'Heap tricks',
          icon: '🏆',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'When you need the "best so far"', content: `<p>Use a <strong>min-heap of size k</strong> to find the top-K largest. Each insert/pop is O(log k).</p>
<div class="code-block"><span class="ty">PriorityQueue</span>&lt;<span class="ty">Integer</span>&gt; pq = <span class="kw">new</span> <span class="ty">PriorityQueue</span>&lt;&gt;(); <span class="com">// min-heap</span>
<span class="kw">for</span> (<span class="ty">int</span> n : nums) {
  pq.<span class="fn">offer</span>(n);
  <span class="kw">if</span> (pq.<span class="fn">size</span>() > k) pq.<span class="fn">poll</span>(); <span class="com">// remove smallest</span>
}
<span class="com">// pq now holds top-K largest</span></div>
<p>Total time: O(n log k). Beats sorting (O(n log n)) when k is small.</p>` },
            { type: 'multiple-choice', prompt: 'Find Kth largest element. Best approach for very small k?',
              options: [{text:'Sort then index', code:false},{text:'Min-heap of size k', code:false},{text:'Linear scan', code:false},{text:'BST', code:false}],
              correct: 1, explanation: 'O(n log k) beats O(n log n) when k << n.' },
            { type: 'multiple-choice', prompt: 'Merge K sorted lists. Best data structure?',
              options: [{text:'Stack', code:true},{text:'Queue', code:true},{text:'PriorityQueue (min-heap)', code:true},{text:'HashMap', code:true}],
              correct: 2, explanation: 'Heap of heads, repeatedly pop min and add next.' },
            { type: 'true-false', statement: 'Java\'s default PriorityQueue is a min-heap.', correct: true, explanation: 'For max-heap, pass Collections.reverseOrder() or custom Comparator.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Hard problems ============== */
    {
      id: 'iv-u15',
      name: 'Unit 15 · Tackling Hard Problems',
      description: 'When stuck, what to do',
      lessons: [
        {
          id: 'iv-u15-l1',
          name: 'A stuck-recovery checklist',
          icon: '🛟',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Stay calm, ask for hints', content: `<p>When stuck:</p>
<ol>
<li><strong>Restate the problem.</strong> Often clarifies it.</li>
<li><strong>Try tiny examples</strong> (n=1, n=2). Patterns surface.</li>
<li><strong>Brute force first.</strong> Get something working, then optimise.</li>
<li><strong>Ask interviewer for hints</strong> — better than silence.</li>
<li><strong>Match patterns</strong> — two pointers, sliding window, DP, BFS, etc.</li>
</ol>
<p><em>Silence is the worst answer.</em> Even "I\'m thinking about whether to use DP because subproblems repeat" earns credit.</p>` },
            { type: 'multiple-choice', prompt: 'You\'re stuck for 2 minutes. Best action:',
              options: [{text:'Stay silent and think', code:false},{text:'Ask interviewer for a hint', code:false},{text:'Give up', code:false},{text:'Change the problem', code:false}],
              correct: 1, explanation: 'A short hint request shows collaboration — better than silence.' },
            { type: 'true-false', statement: 'Brute-force solutions are a strong starting point in interviews.', correct: true, explanation: 'Show you can solve it; then optimise. Don\'t aim for the optimal first.' }
          ]
        }
      ]
    },

    /* ============== UNIT 16 — System Design Foundations ============== */
    {
      id: 'iv-u16',
      name: 'Unit 16 · System Design · Foundations',
      description: 'Scalability essentials',
      lessons: [
        {
          id: 'iv-u16-l1',
          name: 'Latency, throughput, scale',
          icon: '📏',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Three numbers to know', content: `<p><strong>Latency</strong>: time per request (ms). Lower = snappier.<br/>
<strong>Throughput</strong>: requests per second (RPS). Higher = handles more load.<br/>
<strong>Scalability</strong>: ability to handle more load (vertical = bigger machine; horizontal = more machines).</p>
<div class="code-block"><span class="com">Reference latencies:</span>
L1 cache:        1   ns
RAM:             100 ns
SSD random read: 100 us
Network round:   1   ms (same DC)
Network US↔EU:   100 ms</div>` },
            { type: 'multiple-choice', prompt: 'Which is faster?',
              options: [{text:'L1 cache (1ns)', code:false},{text:'RAM (100ns)', code:false},{text:'Disk (10ms)', code:false},{text:'Network (1ms)', code:false}],
              correct: 0, explanation: 'L1 cache is the fastest tier — by orders of magnitude.' },
            { type: 'multiple-choice', prompt: 'Vertical vs horizontal scaling. Horizontal means:',
              options: [{text:'Bigger CPU on one box', code:false},{text:'More boxes, distributed load', code:false},{text:'Faster disk', code:false},{text:'Smaller boxes', code:false}],
              correct: 1, explanation: 'Horizontal = scale out across many machines.' },
            { type: 'true-false', statement: 'Latency and throughput always improve together.', correct: false, explanation: 'You can have high throughput with high latency (batched).' },
            { type: 'type-answer', prompt: 'What does "RPS" stand for? (one word)',
              accept: ['requests-per-second','requests per second','rps'], explanation: 'Requests Per Second.' }
          ]
        },
        {
          id: 'iv-u16-l2',
          name: 'Common bottlenecks',
          icon: '🚧',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Where systems usually break', content: `<p>Common bottlenecks (in order of frequency):</p>
<ol><li><strong>Database</strong> — single-point write contention.</li>
<li><strong>Network</strong> — bandwidth or round-trips.</li>
<li><strong>CPU/memory</strong> on app servers.</li>
<li><strong>Single-threaded queues</strong>.</li>
</ol>
<p>Add metrics & dashboards. You can\'t fix what you can\'t measure.</p>` },
            { type: 'multiple-choice', prompt: 'Most common bottleneck in web apps?',
              options: [{text:'CPU', code:false},{text:'Database', code:false},{text:'Memory', code:false},{text:'GPU', code:false}],
              correct: 1, explanation: 'Database I/O is typically the first to saturate.' },
            { type: 'true-false', statement: '"You can\'t fix what you can\'t measure" — always add metrics.', correct: true, explanation: 'Observability is the foundation of scaling work.' }
          ]
        }
      ]
    },

    /* ============== UNIT 17 — Building Blocks ============== */
    {
      id: 'iv-u17',
      name: 'Unit 17 · System Design · Building Blocks',
      description: 'LB, cache, DB, queue',
      lessons: [
        {
          id: 'iv-u17-l1',
          name: 'Load balancer & cache',
          icon: '🧱',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Spread load, cache hot data', content: `<p><strong>Load balancer (LB)</strong>: distributes incoming requests across servers (round-robin, least-loaded, IP-hash).</p>
<p><strong>Cache</strong>: store hot data closer/faster (CDN, Redis, in-memory).</p>
<div class="code-block">Client → LB → App servers → Cache → DB
                              ↑ if not in cache, fetch from DB
                                and populate cache</div>` },
            { type: 'multiple-choice', prompt: 'A CDN primarily helps with:',
              options: [{text:'Database queries', code:false},{text:'Serving static assets close to users', code:false},{text:'Background jobs', code:false},{text:'Caching login state', code:false}],
              correct: 1, explanation: 'CDN = edge servers serving images/JS/CSS near the user.' },
            { type: 'multiple-choice', prompt: 'Redis is best as a:',
              options: [{text:'Primary DB', code:false},{text:'CDN', code:false},{text:'In-memory cache', code:false},{text:'Load balancer', code:false}],
              correct: 2, explanation: 'Sub-millisecond key-value store — perfect for caching.' },
            { type: 'true-false', statement: 'A cache eliminates the need for a database.', correct: false, explanation: 'Cache complements DB — it doesn\'t replace it.' }
          ]
        },
        {
          id: 'iv-u17-l2',
          name: 'SQL vs NoSQL & queues',
          icon: '📦',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick the right store', content: `<p><strong>SQL</strong>: structured schema, joins, ACID transactions. Postgres, MySQL.<br/>
<strong>NoSQL</strong>: flexible schema, scales horizontally. MongoDB, Cassandra, DynamoDB.</p>
<p><strong>Message queue (MQ)</strong>: decouples producers from consumers. Kafka, RabbitMQ, SQS.</p>
<div class="code-block">Producer → [Queue] → Consumer
<span class="com">// Producer doesn\'t wait. Consumer processes at its own pace.</span></div>` },
            { type: 'multiple-choice', prompt: 'You need ACID transactions on a relational schema. Choose:',
              options: [{text:'Postgres (SQL)', code:false},{text:'Cassandra (NoSQL)', code:false},{text:'Redis', code:false},{text:'Kafka', code:false}],
              correct: 0, explanation: 'SQL DBs are the standard for ACID.' },
            { type: 'multiple-choice', prompt: 'Massive scale, eventual consistency OK, flexible schema:',
              options: [{text:'Postgres', code:false},{text:'MongoDB', code:false},{text:'SQLite', code:false},{text:'MySQL', code:false}],
              correct: 1, explanation: 'NoSQL like MongoDB shines for scale + flexibility.' },
            { type: 'match-pairs', prompt: 'Tech to category.', leftLabel: 'Tool', rightLabel: 'Type',
              pairs: [{left:'Postgres', right:'SQL DB'},{left:'MongoDB', right:'NoSQL DB'},{left:'Redis', right:'Cache'},{left:'Kafka', right:'Message Queue'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 18 — System Design Patterns ============== */
    {
      id: 'iv-u18',
      name: 'Unit 18 · System Design · Patterns',
      description: 'Sharding, replication, CAP',
      lessons: [
        {
          id: 'iv-u18-l1',
          name: 'Sharding & replication',
          icon: '🗂️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Split & copy your data', content: `<p><strong>Sharding</strong>: split data across multiple DBs by a key (e.g., user_id % 4).</p>
<p><strong>Replication</strong>: copy data to multiple machines for read scaling and fault tolerance.</p>
<div class="code-block"><span class="com">Read-heavy:</span> primary + many read replicas
<span class="com">Write-heavy:</span> shard by key</div>` },
            { type: 'multiple-choice', prompt: 'Reads >> writes. Best technique:',
              options: [{text:'Sharding', code:false},{text:'Read replicas', code:false},{text:'Vertical scaling', code:false},{text:'More LBs', code:false}],
              correct: 1, explanation: 'Replicas distribute reads. Writes still go to primary.' },
            { type: 'true-false', statement: 'Sharding handles write scaling by distributing writes across shards.', correct: true, explanation: 'Each shard takes a slice of writes.' }
          ]
        },
        {
          id: 'iv-u18-l2',
          name: 'CAP theorem',
          icon: '⚖️',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Pick two', content: `<p>In a distributed system facing a network partition, you must choose between:</p>
<div class="code-block"><span class="kw">C</span>onsistency  — all nodes see the same data
<span class="kw">A</span>vailability — every request gets a response
<span class="kw">P</span>artition tolerance — works despite network splits</div>
<p>Since partitions happen, real systems pick <strong>CP</strong> (e.g., MongoDB with majority writes) or <strong>AP</strong> (e.g., Cassandra, DynamoDB).</p>` },
            { type: 'multiple-choice', prompt: 'CAP theorem says you can only have two of three. Which is usually the non-negotiable in distributed systems?',
              options: [{text:'C (Consistency)', code:false},{text:'A (Availability)', code:false},{text:'P (Partition tolerance)', code:false},{text:'All three', code:false}],
              correct: 2, explanation: 'Partitions are reality; you must choose C vs A under partition.' },
            { type: 'match-pairs', prompt: 'Match DB to its bias.', leftLabel: 'DB', rightLabel: 'Bias',
              pairs: [{left:'Postgres', right:'CA (single-node)'},{left:'MongoDB', right:'CP'},{left:'Cassandra', right:'AP'},{left:'DynamoDB', right:'AP'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 19 — Walkthroughs ============== */
    {
      id: 'iv-u19',
      name: 'Unit 19 · System Design · Walkthroughs',
      description: 'Real interview-style designs',
      lessons: [
        {
          id: 'iv-u19-l1',
          name: 'URL shortener',
          icon: '🔗',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Design a tinyurl', content: `<p>Requirements:</p>
<ul><li>POST a long URL → return short code</li>
<li>GET short code → redirect to long URL</li>
<li>Scale: ~100M URLs, ~10K writes/sec, ~1M reads/sec</li>
</ul>
<p><strong>Key components:</strong></p>
<div class="code-block">Client → LB → App
              ↓
           Cache (hot codes)
              ↓
            DB (codes → URLs)

<span class="com">// Code generation:</span>
- Counter + base62 encode (62 chars: 0-9, a-z, A-Z)
- 6 chars → 62⁶ ≈ 56 billion codes</div>` },
            { type: 'multiple-choice', prompt: 'For a URL shortener, generating a 6-char base62 code gives roughly how many possibilities?',
              options: [{text:'1 million', code:false},{text:'1 billion', code:false},{text:'50+ billion', code:false},{text:'1 trillion', code:false}],
              correct: 2, explanation: '62⁶ ≈ 56.8 billion.' },
            { type: 'multiple-choice', prompt: 'Read-heavy URL shortener. Most useful optimization:',
              options: [{text:'Cache hot URLs', code:false},{text:'Bigger DB', code:false},{text:'More writers', code:false},{text:'Polling', code:false}],
              correct: 0, explanation: 'Reads ≫ writes → cache solves it.' },
            { type: 'true-false', statement: 'Short codes can be generated by hashing the long URL.', correct: true, explanation: 'But you must handle collisions (rare with good hash). Counter+base62 is simpler.' }
          ]
        },
        {
          id: 'iv-u19-l2',
          name: 'Chat app',
          icon: '💬',
          xp: 30,
          challenges: [
            { type: 'concept', title: 'Real-time messaging', content: `<p>Key components:</p>
<ul><li>WebSocket connection per user</li>
<li>Message queue or pub/sub (Kafka)</li>
<li>Persistent store for history (Cassandra/Mongo)</li>
<li>Presence service ("online/offline")</li>
</ul>
<div class="code-block">Alice → WebSocket → Server → Queue → Server → WebSocket → Bob
                       ↓
                   Persistent DB (for history)</div>` },
            { type: 'multiple-choice', prompt: 'Real-time delivery needs:',
              options: [{text:'HTTP polling every 5s', code:false},{text:'WebSocket / long-lived connection', code:false},{text:'Email', code:false},{text:'FTP', code:false}],
              correct: 1, explanation: 'WebSocket enables true server-push without polling overhead.' },
            { type: 'true-false', statement: 'A chat app must store messages persistently to support history.', correct: true, explanation: 'Otherwise users can\'t see older messages.' }
          ]
        }
      ]
    },

    /* ============== UNIT 20 — OOP ============== */
    {
      id: 'iv-u20',
      name: 'Unit 20 · OOP for Interviews',
      description: 'Pillars and SOLID',
      lessons: [
        {
          id: 'iv-u20-l1',
          name: 'Four OOP pillars',
          icon: '🏛️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'The classic four', content: `<p><strong>Encapsulation</strong> — bundle data + methods, hide internals (private fields, public methods).<br/>
<strong>Inheritance</strong> — class B extends A, reuses A\'s code.<br/>
<strong>Polymorphism</strong> — same method name, different behaviour by type.<br/>
<strong>Abstraction</strong> — expose <em>what</em>, hide <em>how</em> (interfaces, abstract classes).</p>` },
            { type: 'match-pairs', prompt: 'Match pillar to its definition.', leftLabel: 'Pillar', rightLabel: 'Definition',
              pairs: [{left:'Encapsulation', right:'Hide internal state'},{left:'Inheritance', right:'Reuse parent code'},{left:'Polymorphism', right:'Same name, different behaviour'},{left:'Abstraction', right:'Expose what, hide how'}] },
            { type: 'multiple-choice', prompt: 'Which keyword enforces encapsulation in Java?',
              options: [{text:'public', code:true},{text:'private', code:true},{text:'static', code:true},{text:'final', code:true}],
              correct: 1, explanation: 'private restricts access to within the class.' },
            { type: 'true-false', statement: 'Polymorphism lets a parent reference call a child method.', correct: true, explanation: '"Polymorphic dispatch" — runtime picks the right override.' }
          ]
        },
        {
          id: 'iv-u20-l2',
          name: 'SOLID principles',
          icon: '🧱',
          xp: 25,
          challenges: [
            { type: 'concept', title: '5 design principles', content: `<p><strong>S</strong>ingle Responsibility — one class, one reason to change.<br/>
<strong>O</strong>pen/Closed — open to extension, closed to modification.<br/>
<strong>L</strong>iskov Substitution — subtypes work wherever parents do.<br/>
<strong>I</strong>nterface Segregation — many small interfaces > one fat interface.<br/>
<strong>D</strong>ependency Inversion — depend on abstractions, not concretions.</p>` },
            { type: 'multiple-choice', prompt: 'A class that handles parsing AND emailing AND logging violates which principle?',
              options: [{text:'O', code:false},{text:'L', code:false},{text:'S', code:false},{text:'D', code:false}],
              correct: 2, explanation: 'Single Responsibility Principle violated.' },
            { type: 'multiple-choice', prompt: 'Subclass cannot replace parent without breaking code → violates:',
              options: [{text:'S', code:false},{text:'L', code:false},{text:'I', code:false},{text:'D', code:false}],
              correct: 1, explanation: 'Liskov Substitution.' },
            { type: 'fill-blank', prompt: 'Open/Closed: open for ___, closed for modification',
              codeLines: [{html:'<span class="kw">_BLANK_</span>'}],
              tokens: ['extension','deletion','inheritance','testing'], correctAnswer: 'extension' }
          ]
        },
        {
          id: 'iv-u20-l3',
          name: 'Design patterns quick-look',
          icon: '🎨',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Three patterns interviewers love', content: `<div class="code-block"><span class="com">Singleton:</span>    Only one instance ever (e.g., Logger)
<span class="com">Factory:</span>      Create objects without specifying class
<span class="com">Observer:</span>     Subscribe/notify (e.g., event listeners)
<span class="com">Strategy:</span>     Swap algorithms at runtime
<span class="com">Decorator:</span>    Wrap behaviour around an object</div>` },
            { type: 'multiple-choice', prompt: 'You want one logger instance shared across the app. Pattern?',
              options: [{text:'Factory', code:false},{text:'Singleton', code:false},{text:'Observer', code:false},{text:'Strategy', code:false}],
              correct: 1, explanation: 'Singleton ensures one instance.' },
            { type: 'match-pairs', prompt: 'Match pattern to purpose.', leftLabel: 'Pattern', rightLabel: 'Purpose',
              pairs: [{left:'Singleton', right:'One instance'},{left:'Factory', right:'Create objects'},{left:'Observer', right:'Subscribe / notify'},{left:'Strategy', right:'Pluggable algorithm'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 21 — DB ============== */
    {
      id: 'iv-u21',
      name: 'Unit 21 · DB Basics for Interviews',
      description: 'Keys, joins, normalisation',
      lessons: [
        {
          id: 'iv-u21-l1',
          name: 'Keys & indexes',
          icon: '🔑',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Primary key, foreign key, index', content: `<p><strong>Primary key (PK)</strong>: unique identifier for each row. Cannot be NULL.<br/>
<strong>Foreign key (FK)</strong>: column referencing another table\'s PK.<br/>
<strong>Index</strong>: speeds up SELECT but slows down INSERT/UPDATE (must keep index in sync).</p>` },
            { type: 'multiple-choice', prompt: 'Which is true about a primary key?',
              options: [{text:'Can be NULL', code:false},{text:'Must be unique and non-null', code:false},{text:'Must be auto-increment', code:false},{text:'Stored in another table', code:false}],
              correct: 1, explanation: 'PK = unique + not null.' },
            { type: 'multiple-choice', prompt: 'Adding an index to a frequently-written column:',
              options: [{text:'Speeds up reads, slows writes', code:false},{text:'Speeds up everything', code:false},{text:'Slows down everything', code:false},{text:'Has no effect', code:false}],
              correct: 0, explanation: 'Index must update on every write.' },
            { type: 'true-false', statement: 'A foreign key enforces referential integrity.', correct: true, explanation: 'FK prevents pointing to non-existent parent rows.' }
          ]
        },
        {
          id: 'iv-u21-l2',
          name: 'Joins',
          icon: '🔗',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'The four common joins', content: `<div class="code-block"><span class="kw">INNER JOIN</span>: rows matching both sides
<span class="kw">LEFT JOIN</span>:  all left rows, matching right (or NULL)
<span class="kw">RIGHT JOIN</span>: all right rows, matching left (or NULL)
<span class="kw">FULL JOIN</span>:  all rows from both sides</div>` },
            { type: 'multiple-choice', prompt: 'Tables: users(id), orders(user_id). List ALL users + their orders (or NULL if none). Use:',
              options: [{text:'INNER JOIN', code:true},{text:'LEFT JOIN', code:true},{text:'RIGHT JOIN', code:true},{text:'CROSS JOIN', code:true}],
              correct: 1, explanation: 'LEFT JOIN keeps all left rows even without right match.' },
            { type: 'multiple-choice', prompt: 'INNER JOIN returns:',
              options: [{text:'All left rows', code:false},{text:'All right rows', code:false},{text:'Only matched rows', code:false},{text:'All from both', code:false}],
              correct: 2, explanation: 'Only rows that match the ON condition.' },
            { type: 'match-pairs', prompt: 'Match join type to behaviour.', leftLabel: 'Join', rightLabel: 'Behaviour',
              pairs: [{left:'INNER', right:'Both must match'},{left:'LEFT', right:'All left, match right'},{left:'RIGHT', right:'All right, match left'},{left:'FULL', right:'All both, NULLs where unmatched'}] }
          ]
        },
        {
          id: 'iv-u21-l3',
          name: 'Normalisation 1NF/2NF/3NF',
          icon: '📐',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Reduce redundancy', content: `<p><strong>1NF</strong>: each column holds a single value (no lists in a cell).<br/>
<strong>2NF</strong>: 1NF + every non-key column depends on the WHOLE primary key (no partial dependencies on a composite PK).<br/>
<strong>3NF</strong>: 2NF + no transitive dependencies (non-key cols don\'t depend on other non-key cols).</p>
<p>Higher normal forms exist (BCNF, 4NF) but 3NF is usually the practical target.</p>` },
            { type: 'multiple-choice', prompt: 'Storing a comma-separated list of phone numbers in one cell violates:',
              options: [{text:'1NF', code:false},{text:'2NF', code:false},{text:'3NF', code:false},{text:'No NF', code:false}],
              correct: 0, explanation: '1NF requires atomic values per cell.' },
            { type: 'true-false', statement: '3NF eliminates transitive dependencies between non-key columns.', correct: true, explanation: 'Definition of 3NF.' }
          ]
        }
      ]
    },

    /* ============== UNIT 22 — OS & Networking ============== */
    {
      id: 'iv-u22',
      name: 'Unit 22 · OS & Networking Quick Hits',
      description: 'Common gotchas',
      lessons: [
        {
          id: 'iv-u22-l1',
          name: 'Process vs thread',
          icon: '🧵',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'OS basics', content: `<p><strong>Process</strong>: independent program with its own memory space.<br/>
<strong>Thread</strong>: lightweight unit of execution within a process; threads share memory.</p>
<p><strong>Deadlock</strong>: two threads each hold a lock the other wants, neither makes progress.</p>` },
            { type: 'multiple-choice', prompt: 'Threads of the same process:',
              options: [{text:'Have separate memory', code:false},{text:'Share memory', code:false},{text:'Can\'t communicate', code:false},{text:'Have their own PID', code:false}],
              correct: 1, explanation: 'Threads share the process address space.' },
            { type: 'multiple-choice', prompt: 'Deadlock requires:',
              options: [{text:'One thread', code:false},{text:'Two+ threads each holding/wanting locks', code:false},{text:'A crash', code:false},{text:'Lots of memory', code:false}],
              correct: 1, explanation: 'Circular wait among locks.' },
            { type: 'true-false', statement: 'Threads have their own stack but share heap.', correct: true, explanation: 'Each thread has a private stack; heap is shared.' }
          ]
        },
        {
          id: 'iv-u22-l2',
          name: 'OSI, TCP/UDP, HTTP',
          icon: '🌐',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Networking quick-look', content: `<div class="code-block"><span class="com">OSI 7 layers (top→bottom):</span>
Application · Presentation · Session · Transport · Network · DataLink · Physical

<span class="com">TCP vs UDP:</span>
TCP: reliable, ordered, slow (handshake)
UDP: unreliable, unordered, fast (no handshake)</div>
<p>HTTP status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error.</p>` },
            { type: 'multiple-choice', prompt: 'Voice/video calls usually use:',
              options: [{text:'TCP', code:true},{text:'UDP', code:true},{text:'FTP', code:true},{text:'SSH', code:true}],
              correct: 1, explanation: 'UDP\'s low latency outweighs reliability for real-time audio/video.' },
            { type: 'multiple-choice', prompt: 'HTTP 404 means:',
              options: [{text:'Server error', code:false},{text:'Not found', code:false},{text:'Unauthorized', code:false},{text:'Success', code:false}],
              correct: 1, explanation: '404 = resource not found (client error).' },
            { type: 'match-pairs', prompt: 'Match HTTP code.', leftLabel: 'Code', rightLabel: 'Meaning',
              pairs: [{left:'200', right:'Success'},{left:'301', right:'Permanent redirect'},{left:'404', right:'Not found'},{left:'500', right:'Server error'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 23 — STAR Method ============== */
    {
      id: 'iv-u23',
      name: 'Unit 23 · Behavioral · STAR Method',
      description: 'The story formula',
      lessons: [
        {
          id: 'iv-u23-l1',
          name: 'S-T-A-R',
          icon: '⭐',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Four parts of every story', content: `<p><strong>S</strong>ituation — what was the context? (1-2 sentences)<br/>
<strong>T</strong>ask — what was your goal/responsibility?<br/>
<strong>A</strong>ction — what did <em>you</em> do? (the bulk of the answer)<br/>
<strong>R</strong>esult — what was the outcome? (quantify if possible)</p>
<p>Aim for ~2 minutes total. The Action takes ~60% of your time.</p>` },
            { type: 'reorder-code', prompt: 'Reorder the STAR steps.',
              lines: ['Situation: the context','Task: my goal','Action: what I did','Result: outcome'],
              correctOrder: [0, 1, 2, 3] },
            { type: 'fill-blank', prompt: 'STAR\'s "A" stands for',
              codeLines: [{html:'<span class="kw">_BLANK_</span>'}],
              tokens: ['Action','Assumption','Acceptance','Accomplishment'], correctAnswer: 'Action' },
            { type: 'true-false', statement: 'A good STAR answer focuses 60%+ on YOUR specific actions.', correct: true, explanation: 'Otherwise the interviewer can\'t evaluate YOUR skills.' }
          ]
        },
        {
          id: 'iv-u23-l2',
          name: 'Building a story bank',
          icon: '📚',
          xp: 20,
          challenges: [
            { type: 'concept', title: '6-8 stories to cover most prompts', content: `<p>Prepare 6-8 stories that cover these themes:</p>
<ol><li>A success/achievement</li>
<li>A failure & what you learned</li>
<li>A conflict (with peer/manager)</li>
<li>Leadership / driving a project</li>
<li>Tight deadline / pressure</li>
<li>Innovation / improvement you proposed</li>
<li>Cross-team collaboration</li>
<li>Learning a new skill quickly</li>
</ol>
<p>Each story can be reused across many prompts with small tweaks.</p>` },
            { type: 'multiple-choice', prompt: 'How many STAR stories should you typically prepare?',
              options: [{text:'1', code:false},{text:'2-3', code:false},{text:'6-8', code:false},{text:'20+', code:false}],
              correct: 2, explanation: 'Enough to cover all common themes without overload.' },
            { type: 'true-false', statement: 'It\'s OK to reuse the same story for multiple behavioral questions.', correct: true, explanation: 'Yes — angle it differently per prompt.' }
          ]
        },
        {
          id: 'iv-u23-l3',
          name: 'Common STAR pitfalls',
          icon: '🪤',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'What goes wrong', content: `<ul>
<li><strong>Vague situation</strong> — too much context, no specifics.</li>
<li><strong>"We did..."</strong> — say "I did" to highlight your contribution.</li>
<li><strong>No measurable result</strong> — quantify ("cut load time 40%").</li>
<li><strong>Negative ending</strong> — finish on the lesson learned.</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Best phrasing in a STAR answer:',
              options: [{text:'"We rewrote the system"', code:false},{text:'"I led the rewrite and shipped it in 6 weeks"', code:false},{text:'"The team did it"', code:false},{text:'"It happened"', code:false}],
              correct: 1, explanation: 'Specific + quantified + your action.' },
            { type: 'true-false', statement: 'A good STAR result always quantifies impact when possible.', correct: true, explanation: 'Numbers stick. "40% faster", "10K users", etc.' }
          ]
        }
      ]
    },

    /* ============== UNIT 24 — Top Behavioral Qs ============== */
    {
      id: 'iv-u24',
      name: 'Unit 24 · Behavioral · Top Questions',
      description: 'The greatest hits',
      lessons: [
        {
          id: 'iv-u24-l1',
          name: '"Tell me about yourself"',
          icon: '🗣️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'The 90-second story', content: `<p>Structure: <strong>Past → Present → Future</strong>.</p>
<div class="code-block"><span class="com">Past:</span>    What you\'ve done (1-2 sentences on relevant background)
<span class="com">Present:</span> What you\'re doing now (current role/project highlight)
<span class="com">Future:</span>  Why you\'re here, what you want next (ties to this role)</div>
<p>Keep it to 90 seconds. Tailor the "future" to the job.</p>` },
            { type: 'multiple-choice', prompt: 'In "Tell me about yourself", end with:',
              options: [{text:'Hobbies', code:false},{text:'Why you\'re excited about this role', code:false},{text:'Salary expectations', code:false},{text:'Past failures', code:false}],
              correct: 1, explanation: 'Tie the past/present to "I want this role because..."' },
            { type: 'true-false', statement: '"Tell me about yourself" is the right time to share your full life story.', correct: false, explanation: 'Keep it under 90 seconds and relevant.' }
          ]
        },
        {
          id: 'iv-u24-l2',
          name: '"Biggest weakness"',
          icon: '💡',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Show self-awareness + action', content: `<p>Bad answer: "I work too hard" — sounds fake.<br/>
Good answer: Pick a real, non-disqualifying weakness, explain how you\'re actively improving.</p>
<div class="code-block"><span class="com">Pattern: weakness + concrete improvement</span>
"I used to struggle with public speaking. Last year I joined Toastmasters
and gave 12 talks. It\'s still not my superpower, but I\'m much more
comfortable presenting now."</div>` },
            { type: 'multiple-choice', prompt: 'Best "biggest weakness" answer style:',
              options: [{text:'"I\'m a perfectionist"', code:false},{text:'A real weakness + specific improvement steps', code:false},{text:'"I have no weaknesses"', code:false},{text:'A weakness directly required by the job', code:false}],
              correct: 1, explanation: 'Shows self-awareness + action — what interviewers want.' },
            { type: 'true-false', statement: '"I work too hard" is a strong weakness answer.', correct: false, explanation: 'It\'s a cliché and sounds insincere.' }
          ]
        },
        {
          id: 'iv-u24-l3',
          name: '"Why this company?"',
          icon: '🏢',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Specifics beat platitudes', content: `<p>Mention specific things you know about the company:</p>
<ul><li>A product/feature you use & like</li>
<li>The company\'s mission/values that resonate</li>
<li>A recent project, blog post, or talk by an employee</li>
<li>The tech stack or engineering culture (if known)</li>
</ul>
<p>Avoid generic phrases like "your great culture" — every candidate says that.</p>` },
            { type: 'multiple-choice', prompt: 'Strongest "why this company" answer references:',
              options: [{text:'A specific product or recent project', code:false},{text:'Great salary', code:false},{text:'It\'s famous', code:false},{text:'You like the logo', code:false}],
              correct: 0, explanation: 'Shows real research and genuine interest.' },
            { type: 'true-false', statement: '"Because you have great culture" is a strong answer.', correct: false, explanation: 'Too generic — every candidate says that.' }
          ]
        }
      ]
    },

    /* ============== UNIT 25 — Leadership ============== */
    {
      id: 'iv-u25',
      name: 'Unit 25 · Behavioral · Leadership',
      description: 'Lead, disagree, give feedback',
      lessons: [
        {
          id: 'iv-u25-l1',
          name: 'Times you led',
          icon: '👑',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'You don\'t need a title to lead', content: `<p>Leadership stories don\'t require being a manager. Examples:</p>
<ul><li>Driving a cross-team initiative</li>
<li>Mentoring a teammate</li>
<li>Proposing & owning an improvement</li>
<li>Coordinating an incident response</li>
</ul>
<p>Focus on: how you <em>influenced</em> others without authority, and what changed because of you.</p>` },
            { type: 'multiple-choice', prompt: 'Best leadership story example:',
              options: [{text:'I was told to do X', code:false},{text:'I noticed Y, proposed Z, rallied the team, shipped it', code:false},{text:'My manager handled it', code:false}],
              correct: 1, explanation: 'Initiative + impact + ownership = leadership.' },
            { type: 'true-false', statement: 'You need to be a manager to have leadership stories.', correct: false, explanation: 'Leadership = initiative + influence, regardless of title.' }
          ]
        },
        {
          id: 'iv-u25-l2',
          name: 'Disagreement & feedback',
          icon: '💬',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Healthy conflict', content: `<p>"Tell me about a time you disagreed with your manager":</p>
<ol><li>Frame the disagreement <em>professionally</em>.</li>
<li>Show you <em>listened first</em>.</li>
<li>Present your case with <em>data</em>.</li>
<li>End with a <em>collaborative outcome</em> — even if you didn\'t fully win.</li>
</ol>` },
            { type: 'multiple-choice', prompt: 'Best closing for a disagreement story:',
              options: [{text:'"And I was proven right"', code:false},{text:'"We aligned on a hybrid plan and shipped together"', code:false},{text:'"My manager was wrong"', code:false},{text:'"I quit"', code:false}],
              correct: 1, explanation: 'Shows collaboration and a positive outcome.' },
            { type: 'true-false', statement: 'Critical feedback should be specific, timely, and kind.', correct: true, explanation: 'Vague/late/harsh feedback rarely lands well.' }
          ]
        }
      ]
    },

    /* ============== UNIT 26 — Failure ============== */
    {
      id: 'iv-u26',
      name: 'Unit 26 · Behavioral · Failure',
      description: 'Mistakes, lessons',
      lessons: [
        {
          id: 'iv-u26-l1',
          name: 'Talking about failure',
          icon: '💥',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Real failure + real lesson', content: `<p>Pick a real failure (not "I worked too hard"). Be honest about your part.</p>
<div class="code-block"><span class="com">Structure:</span>
1. What you set out to do
2. What went wrong
3. WHY it went wrong (root cause + your role)
4. What you learned
5. How you\'ve applied the lesson since</div>
<p>Skip step 5 and you sound like you haven\'t grown.</p>` },
            { type: 'multiple-choice', prompt: 'Worst answer to "tell me about a failure":',
              options: [{text:'"I work too hard"', code:false},{text:'A real, scoped failure with a clear lesson', code:false},{text:'A mistake from years ago you\'ve clearly grown from', code:false}],
              correct: 0, explanation: 'It\'s a cliché — sounds evasive.' },
            { type: 'true-false', statement: 'You should end a failure story with how you\'ve since applied the lesson.', correct: true, explanation: 'Without that, it\'s not a growth story.' }
          ]
        },
        {
          id: 'iv-u26-l2',
          name: 'Missed deadlines & high pressure',
          icon: '⏰',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Show your process', content: `<p>For "tell me about a tight deadline" or "missed deadline":</p>
<ol><li>Acknowledge the constraint.</li>
<li>Describe the prioritization decisions you made.</li>
<li>Highlight communication with stakeholders.</li>
<li>Outcome (shipped on time, or didn\'t — what changed).</li>
</ol>` },
            { type: 'multiple-choice', prompt: 'When you realise you\'ll miss a deadline, the BEST first action is:',
              options: [{text:'Hide it and work harder', code:false},{text:'Communicate to stakeholders immediately', code:false},{text:'Blame someone', code:false},{text:'Cut features without telling anyone', code:false}],
              correct: 1, explanation: 'Early communication preserves trust and allows replanning.' },
            { type: 'true-false', statement: 'Hiding a missed deadline always makes things worse.', correct: true, explanation: 'Surprise + late info = lost trust.' }
          ]
        }
      ]
    },

    /* ============== UNIT 27 — HR ============== */
    {
      id: 'iv-u27',
      name: 'Unit 27 · HR Round Essentials',
      description: 'Logistics & culture fit',
      lessons: [
        {
          id: 'iv-u27-l1',
          name: 'Common HR questions',
          icon: '🤝',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Logistics + culture-fit screening', content: `<p>HR commonly asks:</p>
<ul><li>Why are you leaving your current role?</li>
<li>Notice period?</li>
<li>Relocation OK?</li>
<li>Salary expectations? (give a <em>range</em>)</li>
<li>How did you hear about us?</li>
<li>What are you looking for in your next role?</li>
</ul>
<p>Be honest, professional, and prepared. Never bad-mouth current/past employer.</p>` },
            { type: 'multiple-choice', prompt: '"Why are you leaving?" — best framing:',
              options: [{text:'My manager is terrible', code:false},{text:'Seeking growth in X area which my current role can\'t offer', code:false},{text:'I hate it there', code:false},{text:'For more money', code:false}],
              correct: 1, explanation: 'Forward-looking, professional.' },
            { type: 'true-false', statement: 'Bad-mouthing a past employer is a red flag for HR.', correct: true, explanation: 'It suggests you might do the same about THIS employer one day.' }
          ]
        },
        {
          id: 'iv-u27-l2',
          name: 'Salary expectations',
          icon: '💵',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'The salary question', content: `<p>Three strategies:</p>
<ol><li><strong>Defer</strong>: "I\'d like to learn more about the role first."</li>
<li><strong>Range</strong>: "Based on market data for this role, I\'d expect $X-$Y."</li>
<li><strong>Reverse</strong>: "What\'s the budgeted range for this position?"</li>
</ol>
<p>If pressed for a number, give a range, anchored on the higher side of market data.</p>` },
            { type: 'multiple-choice', prompt: 'Best answer to "what\'s your expected salary":',
              options: [{text:'Specific exact amount', code:false},{text:'A market-based range', code:false},{text:'"Anything you offer"', code:false},{text:'"I won\'t say"', code:false}],
              correct: 1, explanation: 'A range gives flexibility while anchoring.' },
            { type: 'true-false', statement: 'Anchoring slightly high in a range is a useful negotiation tactic.', correct: true, explanation: 'Offers often land below the top of your range.' }
          ]
        }
      ]
    },

    /* ============== UNIT 28 — Salary Negotiation ============== */
    {
      id: 'iv-u28',
      name: 'Unit 28 · Salary Negotiation',
      description: 'Get paid what you\'re worth',
      lessons: [
        {
          id: 'iv-u28-l1',
          name: 'Timing & framing',
          icon: '💰',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Wait for the offer', content: `<p><strong>Rule #1:</strong> Don\'t talk numbers until you have a written offer.</p>
<p><strong>Rule #2:</strong> Negotiate <em>total comp</em>, not just base salary. Components:</p>
<div class="code-block">- Base salary
- Signing bonus
- Equity / stock (RSU, options)
- Annual bonus / performance
- Benefits (insurance, 401k match)
- Relocation</div>
<p><strong>Rule #3:</strong> Always negotiate (politely). Most companies expect it.</p>` },
            { type: 'multiple-choice', prompt: 'When is the best time to negotiate?',
              options: [{text:'Before any interview', code:false},{text:'During the first interview', code:false},{text:'After receiving a written offer', code:false},{text:'After signing', code:false}],
              correct: 2, explanation: 'You have the most leverage after they\'ve decided they want you.' },
            { type: 'multiple-choice', prompt: 'Don\'t only focus on base salary — total comp includes:',
              options: [{text:'Base only', code:false},{text:'Base + bonus + equity + benefits + signing', code:false},{text:'Just bonus', code:false},{text:'Just equity', code:false}],
              correct: 1, explanation: 'All components matter for the package value.' },
            { type: 'true-false', statement: 'Most companies have room to negotiate above their initial offer.', correct: true, explanation: 'Usually 5-20% wiggle room. Always ask politely.' }
          ]
        },
        {
          id: 'iv-u28-l2',
          name: 'Tactics & scripts',
          icon: '🎯',
          xp: 25,
          challenges: [
            { type: 'concept', title: 'Useful phrases', content: `<div class="code-block"><span class="com">If offer < expectations:</span>
"Thanks for the offer. I\'m really excited. Based on my experience and
market data, I was hoping for something closer to $X. Is there
flexibility on base or signing?"

<span class="com">With a competing offer:</span>
"I have another offer at $Y. I prefer your team — can you match?"

<span class="com">Closing:</span>
"If we can get to $Z, I\'m ready to accept and start on [date]."</div>` },
            { type: 'multiple-choice', prompt: 'Best opening to a negotiation:',
              options: [{text:'"This is insulting"', code:false},{text:'"Thanks for the offer. Is there flexibility on X?"', code:false},{text:'"I need more"', code:false},{text:'Aggressive ultimatum', code:false}],
              correct: 1, explanation: 'Gratitude + specific ask = professional.' },
            { type: 'true-false', statement: '"If we can get to $X, I\'m ready to accept" is a strong closing.', correct: true, explanation: 'Commits both sides — recruiters love it.' }
          ]
        }
      ]
    },

    /* ============== UNIT 29 — Communication ============== */
    {
      id: 'iv-u29',
      name: 'Unit 29 · Communication & Body Language',
      description: 'How you say matters as much as what',
      lessons: [
        {
          id: 'iv-u29-l1',
          name: 'Verbal & vocal',
          icon: '🎙️',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Clarity > cleverness', content: `<p>Speak <em>slower</em> than feels natural. Use pauses — they show you\'re thinking, not stalling.</p>
<p>Mirror the interviewer\'s tone (formal/casual). Avoid filler words ("um", "like", "you know").</p>
<p>If you don\'t understand a question, say "Can I make sure I understand — are you asking X?"</p>` },
            { type: 'multiple-choice', prompt: 'When unsure about a question:',
              options: [{text:'Guess and hope', code:false},{text:'Ask a clarifying question', code:false},{text:'Stay silent', code:false},{text:'Change the topic', code:false}],
              correct: 1, explanation: 'Clarifying shows engagement & care for accuracy.' },
            { type: 'true-false', statement: 'Pauses make you sound less confident.', correct: false, explanation: 'Strategic pauses signal thoughtfulness — the opposite.' }
          ]
        },
        {
          id: 'iv-u29-l2',
          name: 'Virtual interview etiquette',
          icon: '💻',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Camera, lighting, audio', content: `<ol><li>Test your camera & mic 10 min before.</li>
<li>Light source <em>in front</em>, not behind you.</li>
<li>Look at the <em>camera</em>, not the screen, when speaking.</li>
<li>Plain background, no notifications.</li>
<li>Wear what you\'d wear in person (top half visible).</li>
</ol>` },
            { type: 'multiple-choice', prompt: 'Best light position for video interviews:',
              options: [{text:'Behind you (window)', code:false},{text:'In front of you', code:false},{text:'Off, bright screen only', code:false},{text:'From the side', code:false}],
              correct: 1, explanation: 'Front light keeps your face visible & lit.' },
            { type: 'true-false', statement: 'Looking at the camera (not the screen) feels more like eye contact.', correct: true, explanation: 'Even though it feels weird, viewers perceive it as connection.' }
          ]
        }
      ]
    },

    /* ============== UNIT 30 — Common Mistakes ============== */
    {
      id: 'iv-u30',
      name: 'Unit 30 · Common Interview Mistakes',
      description: 'Avoid these traps',
      lessons: [
        {
          id: 'iv-u30-l1',
          name: 'Top 5 mistakes',
          icon: '🚫',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Avoid these', content: `<ol>
<li><strong>Not asking questions at the end.</strong> Signals low interest.</li>
<li><strong>Criticizing past employer.</strong> Major red flag.</li>
<li><strong>Going silent</strong> on hard problems.</li>
<li><strong>Overconfidence</strong> or claiming expertise you don\'t have.</li>
<li><strong>Not researching the company</strong>. Comes across as lazy.</li>
</ol>` },
            { type: 'multiple-choice', prompt: 'You should ALWAYS:',
              options: [{text:'Ask the interviewer questions at the end', code:false},{text:'Mention your salary', code:false},{text:'Stay quiet', code:false},{text:'Talk about hobbies first', code:false}],
              correct: 0, explanation: 'No questions = no interest. Have 3-5 prepared.' },
            { type: 'multiple-choice', prompt: 'Worst sign of disinterest at the end:',
              options: [{text:'"No, I have no questions"', code:false},{text:'"Can you tell me about team culture?"', code:false},{text:'"What\'s the biggest challenge for this role?"', code:false}],
              correct: 0, explanation: 'No questions screams "I haven\'t thought about this seriously."' },
            { type: 'true-false', statement: 'Researching the company before interviews is optional.', correct: false, explanation: 'It\'s expected.' }
          ]
        }
      ]
    },

    /* ============== UNIT 31 — Mock Strategy ============== */
    {
      id: 'iv-u31',
      name: 'Unit 31 · Mock Interview Strategy',
      description: 'Practice like a pro',
      lessons: [
        {
          id: 'iv-u31-l1',
          name: 'How to practice',
          icon: '🎯',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Deliberate practice', content: `<p><strong>Solo practice:</strong></p>
<ul><li>Record yourself answering common questions.</li>
<li>Solve problems on a <em>whiteboard or shared editor</em> (not your IDE).</li>
<li>Talk out loud the whole time.</li>
</ul>
<p><strong>With others:</strong></p>
<ul><li>Mock interview partners (peers, Pramp, Interviewing.io).</li>
<li>Real interviews you\'re less excited about — practice run.</li>
<li>Always ask for feedback after every mock.</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Most effective practice setting for coding interviews:',
              options: [{text:'Your full IDE with auto-complete', code:false},{text:'A plain text editor or whiteboard', code:false},{text:'Phone notes', code:false}],
              correct: 1, explanation: 'Matches the constraints of a real interview.' },
            { type: 'true-false', statement: 'Recording yourself and watching back reveals filler words and habits.', correct: true, explanation: 'Painful but effective.' }
          ]
        }
      ]
    },

    /* ============== UNIT 32 — Final 24 Hours ============== */
    {
      id: 'iv-u32',
      name: 'Unit 32 · The Final 24 Hours',
      description: 'Day-before checklist',
      lessons: [
        {
          id: 'iv-u32-l1',
          name: 'The night before & morning of',
          icon: '🌙',
          xp: 15,
          challenges: [
            { type: 'concept', title: 'A clean runway', content: `<p><strong>Night before:</strong></p>
<ul><li>Light review only (do NOT cram).</li>
<li>Lay out clothes, charge devices, set alarms.</li>
<li>Test video/audio for virtual interviews.</li>
<li>Sleep 7+ hours.</li>
</ul>
<p><strong>Morning of:</strong></p>
<ul><li>Eat properly. Hydrate.</li>
<li>Arrive (or log in) 10 minutes early.</li>
<li>Bring printed resume copies + notebook (in-person).</li>
<li>Breathe — interviews go better when you\'re calm.</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Best activity the night before:',
              options: [{text:'Cram new topics', code:false},{text:'Light review + sleep early', code:false},{text:'Stay up worrying', code:false},{text:'New all-nighter', code:false}],
              correct: 1, explanation: 'Sleep > cramming. You can\'t learn new content in one night.' },
            { type: 'true-false', statement: 'You should arrive (or log in) 10 minutes early.', correct: true, explanation: 'Shows respect; gives buffer for tech issues.' }
          ]
        }
      ]
    },

    /* ============== UNIT 33 — After ============== */
    {
      id: 'iv-u33',
      name: 'Unit 33 · After the Interview',
      description: 'Thank-you, follow-up, decisions',
      lessons: [
        {
          id: 'iv-u33-l1',
          name: 'Thank-you & decision',
          icon: '📨',
          xp: 20,
          challenges: [
            { type: 'concept', title: 'Within 24 hours, send a thank-you', content: `<p>Short, personalized thank-you email to each interviewer:</p>
<div class="code-block">"Thanks for taking the time today. I really enjoyed discussing [X],
and after our conversation I\'m even more excited about [role/team].
Let me know if I can share anything else."</div>
<p>For decisions, weigh: total comp, growth, manager/team, culture, work-life balance, location.</p>` },
            { type: 'multiple-choice', prompt: 'Send thank-you emails within:',
              options: [{text:'24 hours', code:false},{text:'1 week', code:false},{text:'1 month', code:false},{text:'Never', code:false}],
              correct: 0, explanation: 'Fresh in mind, before any team decision meeting.' },
            { type: 'multiple-choice', prompt: 'When evaluating multiple offers, most underrated factor:',
              options: [{text:'Your direct manager', code:false},{text:'Office snacks', code:false},{text:'Logo color', code:false},{text:'Title length', code:false}],
              correct: 0, explanation: 'Your manager shapes your daily experience and growth.' },
            { type: 'true-false', statement: 'A short, personalized thank-you can tip the decision in your favour.', correct: true, explanation: 'Especially if the team is on the fence.' },
            { type: 'fill-blank', prompt: 'Most important factor when choosing between offers (besides comp):',
              codeLines: [{html:'Your future <span class="kw">_BLANK_</span> and team culture'}],
              tokens: ['manager','title','office','laptop'], correctAnswer: 'manager' }
          ]
        }
      ]
    }

  ]
});


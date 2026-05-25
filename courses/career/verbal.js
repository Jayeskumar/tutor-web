PUSH({
  id: 'verbal',
  name: 'Verbal Aptitude',
  icon: '📚',
  color: '#827717',
  description: 'Master English for placements — vocabulary, grammar, comprehension.',
  units: [

    /* ============== UNIT 1 — Synonyms ============== */
    {
      id: 'vrb-u1', name: 'Unit 1 · Synonyms', description: 'High-frequency placement words',
      lessons: [
        {
          id: 'vrb-u1-l1', name: 'Common synonyms', icon: '🟰', xp: 15,
          challenges: [
            { type: 'concept', title: 'What is a synonym?', content: `<p>A <strong>synonym</strong> is a word that means (nearly) the same thing as another word. Placement tests love these because they probe your vocabulary breadth in a few seconds.</p>
<div class="code-block">happy      → joyful, cheerful, content
big        → enormous, massive, vast
quick      → rapid, swift, brisk
clever     → astute, shrewd, sharp
honest     → truthful, candid, sincere</div>
<p><strong>Strategy</strong>: when you don\'t know the word, look at the <em>root</em> (e.g., "ben-" = good, "mal-" = bad), and use elimination on the options.</p>` },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>ABUNDANT</code>.',
              options: [{text:'Scarce', code:false},{text:'Plentiful', code:false},{text:'Hidden', code:false},{text:'Dull', code:false}],
              correct: 1, explanation: '<strong>Abundant</strong> = present in large quantities → plentiful.' },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>CANDID</code>.',
              options: [{text:'Frank', code:false},{text:'Cunning', code:false},{text:'Cautious', code:false},{text:'Confused', code:false}],
              correct: 0, explanation: 'Candid means open and honest — frank.' },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>DILIGENT</code>.',
              options: [{text:'Lazy', code:false},{text:'Hard-working', code:false},{text:'Distracted', code:false},{text:'Indifferent', code:false}],
              correct: 1, explanation: 'Diligent = showing care and effort.' },
            { type: 'match-pairs', prompt: 'Match each word to its synonym.', leftLabel: 'Word', rightLabel: 'Synonym',
              pairs: [
                { left: 'Brave',    right: 'Valiant' },
                { left: 'Sad',      right: 'Melancholy' },
                { left: 'Quick',    right: 'Swift' },
                { left: 'Lazy',     right: 'Indolent' }
              ] },
            { type: 'true-false', statement: 'The word <code>OBSOLETE</code> is a synonym of <code>OUTDATED</code>.', correct: true, explanation: 'Both mean no longer in use.' },
            { type: 'type-answer', prompt: 'Type a one-word synonym for <code>BENEVOLENT</code> (starts with K).',
              code: '', accept: ['kind', 'kindly'], explanation: 'Benevolent = kind, generous.' }
          ]
        },
        {
          id: 'vrb-u1-l2', name: 'Tougher synonyms', icon: '🟰', xp: 20,
          challenges: [
            { type: 'concept', title: 'Going up a level', content: `<p>Tougher placement papers use less common words. Three patterns help:</p>
<ul>
  <li><strong>Latin/Greek roots</strong> — "lum" (light), "ver" (truth), "loq" (speak)</li>
  <li><strong>Context clues</strong> — even outside a sentence, a positive-sounding word usually pairs with positive options</li>
  <li><strong>Elimination</strong> — knock out clear opposites first</li>
</ul>
<div class="code-block">LUCID      → clear, easily understood
GARRULOUS  → talkative
TACITURN   → silent, reserved
EPHEMERAL  → short-lived
PRAGMATIC  → practical, sensible</div>` },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>LUCID</code>.',
              options: [{text:'Confused', code:false},{text:'Clear', code:false},{text:'Damp', code:false},{text:'Loud', code:false}],
              correct: 1, explanation: '"Luc-" root = light, so lucid = clear.' },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>EPHEMERAL</code>.',
              options: [{text:'Eternal', code:false},{text:'Foreign', code:false},{text:'Short-lived', code:false},{text:'Heavy', code:false}],
              correct: 2, explanation: 'Ephemeral describes something that lasts a very short time.' },
            { type: 'multiple-choice', prompt: 'Choose the synonym of <code>GARRULOUS</code>.',
              options: [{text:'Silent', code:false},{text:'Talkative', code:false},{text:'Mean', code:false},{text:'Strict', code:false}],
              correct: 1, explanation: 'A garrulous person talks a lot.' },
            { type: 'match-pairs', prompt: 'Match the harder words.', leftLabel: 'Word', rightLabel: 'Synonym',
              pairs: [
                { left: 'Pragmatic',  right: 'Practical' },
                { left: 'Taciturn',   right: 'Reserved' },
                { left: 'Verbose',    right: 'Wordy' },
                { left: 'Frugal',     right: 'Thrifty' }
              ] },
            { type: 'type-answer', prompt: 'Single word synonym for <code>ZENITH</code> (highest point).',
              accept: ['peak', 'summit', 'apex', 'top'], explanation: 'Zenith = the highest point — peak/summit/apex.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Antonyms ============== */
    {
      id: 'vrb-u2', name: 'Unit 2 · Antonyms', description: 'Common opposites',
      lessons: [
        {
          id: 'vrb-u2-l1', name: 'Common antonyms', icon: '↔️', xp: 15,
          challenges: [
            { type: 'concept', title: 'What is an antonym?', content: `<p>An <strong>antonym</strong> is a word that means the opposite of another. The classic trap: option lists usually include both a near-synonym AND the antonym, hoping you read fast.</p>
<div class="code-block">expand     ↔ contract / shrink
ascend     ↔ descend
praise     ↔ criticize / blame
courage    ↔ cowardice
permanent  ↔ temporary</div>
<p><strong>Tip</strong>: re-read the prompt and underline the words "synonym" or "antonym" — confusing the two is the #1 cause of lost marks.</p>` },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>ASCEND</code>.',
              options: [{text:'Climb', code:false},{text:'Rise', code:false},{text:'Descend', code:false},{text:'Mount', code:false}],
              correct: 2, explanation: 'Ascend = go up; descend = go down.' },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>SCARCE</code>.',
              options: [{text:'Rare', code:false},{text:'Abundant', code:false},{text:'Empty', code:false},{text:'Few', code:false}],
              correct: 1, explanation: 'Scarce ↔ abundant.' },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>FRUGAL</code>.',
              options: [{text:'Thrifty', code:false},{text:'Lavish', code:false},{text:'Poor', code:false},{text:'Simple', code:false}],
              correct: 1, explanation: 'Frugal = sparing; lavish = extravagant.' },
            { type: 'true-false', statement: 'The antonym of <code>OPTIMISTIC</code> is <code>PESSIMISTIC</code>.', correct: true, explanation: 'Hopeful vs. negative outlook.' },
            { type: 'match-pairs', prompt: 'Match each word to its antonym.', leftLabel: 'Word', rightLabel: 'Antonym',
              pairs: [
                { left: 'Bold',      right: 'Timid' },
                { left: 'Generous',  right: 'Stingy' },
                { left: 'Vivid',     right: 'Dull' },
                { left: 'Hostile',   right: 'Friendly' }
              ] },
            { type: 'type-answer', prompt: 'One-word antonym of <code>TRANSPARENT</code>.',
              accept: ['opaque'], explanation: 'Transparent (lets light through) ↔ opaque (does not).' }
          ]
        },
        {
          id: 'vrb-u2-l2', name: 'Tougher antonyms', icon: '↔️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Tricky opposites', content: `<p>Some words look like they should be opposites but aren\'t. Watch out for these:</p>
<div class="code-block">flammable  vs  inflammable    → BOTH mean catches fire
valuable   vs  invaluable     → invaluable = priceless (stronger)
famous     vs  infamous       → infamous = famous for BAD reasons</div>
<p>For real antonyms, common high-difficulty pairs:</p>
<div class="code-block">PROLIFIC   ↔ unproductive
LUCID      ↔ obscure
CANDID     ↔ evasive
VIRTUE     ↔ vice
HUMBLE     ↔ arrogant</div>` },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>PROLIFIC</code>.',
              options: [{text:'Productive', code:false},{text:'Unproductive', code:false},{text:'Generous', code:false},{text:'Quiet', code:false}],
              correct: 1, explanation: 'Prolific = producing a lot; unproductive is its opposite.' },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>LUCID</code>.',
              options: [{text:'Clear', code:false},{text:'Obscure', code:false},{text:'Hot', code:false},{text:'Loud', code:false}],
              correct: 1, explanation: 'Lucid = clear; obscure = unclear.' },
            { type: 'multiple-choice', prompt: 'Choose the antonym of <code>HUMBLE</code>.',
              options: [{text:'Modest', code:false},{text:'Arrogant', code:false},{text:'Calm', code:false},{text:'Tall', code:false}],
              correct: 1, explanation: 'Humble ↔ arrogant.' },
            { type: 'true-false', statement: '<code>INVALUABLE</code> is the antonym of <code>VALUABLE</code>.', correct: false, explanation: 'Trap! Invaluable actually means EXTREMELY valuable.' },
            { type: 'match-pairs', prompt: 'Match each word to its antonym.', leftLabel: 'Word', rightLabel: 'Antonym',
              pairs: [
                { left: 'Candid',    right: 'Evasive' },
                { left: 'Virtue',    right: 'Vice' },
                { left: 'Sober',     right: 'Drunk' },
                { left: 'Concur',    right: 'Disagree' }
              ] },
            { type: 'type-answer', prompt: 'One-word antonym of <code>BENEVOLENT</code>.',
              accept: ['malevolent', 'cruel'], explanation: 'Ben- (good) ↔ mal- (bad). Benevolent ↔ malevolent.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Roots, Prefixes, Suffixes ============== */
    {
      id: 'vrb-u3', name: 'Unit 3 · Roots, Prefixes, Suffixes', description: 'Decode words you\'ve never seen',
      lessons: [
        {
          id: 'vrb-u3-l1', name: 'Word roots', icon: '🌱', xp: 20,
          challenges: [
            { type: 'concept', title: 'Roots are word DNA', content: `<p>Most English words borrow from Latin and Greek. Learn 30 roots and you can guess thousands of words.</p>
<div class="code-block">aqua  / hydro  → water     (aquatic, hydrate)
bio            → life      (biology, biography)
chrono         → time      (chronology, synchronous)
dict / dic     → say       (dictate, predict, contradict)
graph / scrib  → write     (graphite, scribe)
log / logue    → word      (dialogue, logic)
mort           → death     (mortal, immortal)
photo          → light     (photon, photograph)
port           → carry     (portable, transport)
vid / vis      → see       (video, visible)</div>` },
            { type: 'multiple-choice', prompt: 'The root <code>chrono</code> means:',
              options: [{text:'Color', code:false},{text:'Time', code:false},{text:'Sound', code:false},{text:'Sand', code:false}],
              correct: 1, explanation: 'Chronology, synchronous, chronic — all about TIME.' },
            { type: 'multiple-choice', prompt: 'Which word does NOT share the "say/speak" root?',
              options: [{text:'Dictate', code:false},{text:'Predict', code:false},{text:'Audible', code:false},{text:'Contradict', code:false}],
              correct: 2, explanation: 'Audible comes from "aud" (hear), not "dict" (say).' },
            { type: 'match-pairs', prompt: 'Match the root to its meaning.', leftLabel: 'Root', rightLabel: 'Meaning',
              pairs: [
                { left: 'aqua',   right: 'water' },
                { left: 'bio',    right: 'life' },
                { left: 'mort',   right: 'death' },
                { left: 'port',   right: 'carry' }
              ] },
            { type: 'fill-blank', prompt: 'The root <code>_BLANK_</code> means "write" — appears in scribe, manuscript.',
              codeLines: [{ html: '<span class="kw">root</span>: <span class="fn">_BLANK_</span>  &rarr;  meaning: write' }],
              tokens: ['scrib', 'graph', 'log', 'voc'], correctAnswer: 'scrib',
              explanation: 'Scrib/script = write (transcribe, manuscript).' },
            { type: 'type-answer', prompt: 'Which root means "light"? (one word)',
              accept: ['photo', 'lum'], explanation: 'Photo (photograph) and lum (illuminate) both mean light.' }
          ]
        },
        {
          id: 'vrb-u3-l2', name: 'Prefixes & suffixes', icon: '🧩', xp: 20,
          challenges: [
            { type: 'concept', title: 'Affixes change meaning', content: `<p>A <strong>prefix</strong> goes BEFORE a root. A <strong>suffix</strong> goes AFTER. Together with the root, they form a complete word.</p>
<div class="code-block">PREFIXES
un-, in-, im-   → not          (unfair, incorrect, impossible)
pre-            → before       (preview, prepare)
re-             → again        (rewrite, return)
anti-           → against      (antibiotic, antisocial)
sub-            → under        (submarine, subway)
mis-            → wrongly      (misread, misuse)

SUFFIXES
-able / -ible   → can be       (readable, edible)
-less           → without      (hopeless, careless)
-ful            → full of      (helpful, joyful)
-ist            → person who   (artist, scientist)
-ity / -ness    → state of     (clarity, kindness)</div>` },
            { type: 'multiple-choice', prompt: 'The prefix <code>anti-</code> means:',
              options: [{text:'Before', code:false},{text:'Against', code:false},{text:'After', code:false},{text:'Under', code:false}],
              correct: 1, explanation: 'Antisocial = against social interaction.' },
            { type: 'multiple-choice', prompt: 'Adding <code>-less</code> to a word means:',
              options: [{text:'Full of', code:false},{text:'Without', code:false},{text:'Before', code:false},{text:'Again', code:false}],
              correct: 1, explanation: 'Hopeless = without hope.' },
            { type: 'fill-blank', prompt: 'Add the right prefix: <code>_BLANK_</code>view = look at before publishing.',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>view  &rarr;  to look at beforehand' }],
              tokens: ['pre', 'post', 'sub', 'anti'], correctAnswer: 'pre',
              explanation: 'Pre- = before. Preview = look before.' },
            { type: 'match-pairs', prompt: 'Match prefix to meaning.', leftLabel: 'Prefix', rightLabel: 'Meaning',
              pairs: [
                { left: 'sub-',   right: 'under' },
                { left: 'mis-',   right: 'wrongly' },
                { left: 're-',    right: 'again' },
                { left: 'in-',    right: 'not' }
              ] },
            { type: 'true-false', statement: 'The suffix <code>-ist</code> usually denotes a person who does something (artist, scientist).', correct: true, explanation: '-ist marks a doer/practitioner.' },
            { type: 'type-answer', prompt: 'What does the prefix <code>sub-</code> mean? (one word)',
              accept: ['under', 'below'], explanation: 'Submarine = under sea. Subway = under road.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — One-word substitutions ============== */
    {
      id: 'vrb-u4', name: 'Unit 4 · One-word substitutions', description: 'A whole phrase, in just one word',
      lessons: [
        {
          id: 'vrb-u4-l1', name: 'Common substitutions', icon: '✏️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Phrase → single word', content: `<p>Some words exist precisely to replace a long descriptive phrase. Placement questions show the definition and ask you to name the word.</p>
<div class="code-block">"One who studies stars"           → astronomer
"A speech made without preparation" → impromptu
"A government by the people"      → democracy
"One who cannot read or write"    → illiterate
"Animals that eat both plants and meat" → omnivores
"A word opposite in meaning"      → antonym
"A place where coins are made"    → mint
"A list of books"                 → bibliography
"A doctor who treats children"    → pediatrician
"One who walks in their sleep"    → somnambulist</div>` },
            { type: 'multiple-choice', prompt: 'One word for "A speech made without preparation":',
              options: [{text:'Eulogy', code:false},{text:'Impromptu', code:false},{text:'Soliloquy', code:false},{text:'Monologue', code:false}],
              correct: 1, explanation: 'Impromptu = spontaneous, unrehearsed.' },
            { type: 'multiple-choice', prompt: 'One word for "Animals that eat both plants and meat":',
              options: [{text:'Carnivores', code:false},{text:'Herbivores', code:false},{text:'Omnivores', code:false},{text:'Insectivores', code:false}],
              correct: 2, explanation: 'Omni- = all. Omnivores eat anything.' },
            { type: 'multiple-choice', prompt: 'One word for "A government run by religious leaders":',
              options: [{text:'Democracy', code:false},{text:'Theocracy', code:false},{text:'Aristocracy', code:false},{text:'Plutocracy', code:false}],
              correct: 1, explanation: 'Theo- = god; -cracy = rule.' },
            { type: 'match-pairs', prompt: 'Match the definition to its single word.', leftLabel: 'Definition', rightLabel: 'Word',
              pairs: [
                { left: 'Studies stars',      right: 'Astronomer' },
                { left: 'Cannot read/write',  right: 'Illiterate' },
                { left: 'Treats children',    right: 'Pediatrician' },
                { left: 'List of books',      right: 'Bibliography' }
              ] },
            { type: 'type-answer', prompt: 'One word for "A person who walks in their sleep":',
              accept: ['somnambulist', 'sleepwalker'], explanation: 'Somnus = sleep, ambulare = to walk.' }
          ]
        },
        {
          id: 'vrb-u4-l2', name: 'Tougher substitutions', icon: '✏️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Less common ones', content: `<div class="code-block">"Fear of confined spaces"          → claustrophobia
"Fear of heights"                  → acrophobia
"Lover of books"                   → bibliophile
"Person who is always optimistic"  → sanguine
"Animals living in water"          → aquatic
"Killing of a king"                → regicide
"Killing of a brother"             → fratricide
"One who collects coins"           → numismatist
"A speech in praise of someone"    → eulogy
"One who is new to something"      → novice
"That which cannot be corrected"   → incorrigible
"A child whose parents are dead"   → orphan</div>` },
            { type: 'multiple-choice', prompt: 'One word for "Fear of confined spaces":',
              options: [{text:'Acrophobia', code:false},{text:'Claustrophobia', code:false},{text:'Hydrophobia', code:false},{text:'Xenophobia', code:false}],
              correct: 1, explanation: 'Claustro- = enclosed; phobia = fear.' },
            { type: 'multiple-choice', prompt: 'One word for "A speech praising someone, often at a funeral":',
              options: [{text:'Eulogy', code:false},{text:'Anecdote', code:false},{text:'Diatribe', code:false},{text:'Critique', code:false}],
              correct: 0, explanation: 'Eulogy = high praise speech.' },
            { type: 'multiple-choice', prompt: 'One word for "A person who collects coins":',
              options: [{text:'Philatelist', code:false},{text:'Numismatist', code:false},{text:'Bibliophile', code:false},{text:'Connoisseur', code:false}],
              correct: 1, explanation: 'Philatelist = stamps. Numismatist = coins.' },
            { type: 'match-pairs', prompt: 'Match the definition to its word.', leftLabel: 'Definition', rightLabel: 'Word',
              pairs: [
                { left: 'Fear of heights',     right: 'Acrophobia' },
                { left: 'Killing of a king',   right: 'Regicide' },
                { left: 'New to something',    right: 'Novice' },
                { left: 'Lover of books',      right: 'Bibliophile' }
              ] },
            { type: 'true-false', statement: '<code>INCORRIGIBLE</code> means "cannot be corrected or reformed".', correct: true, explanation: 'Literally "not correctable".' },
            { type: 'type-answer', prompt: 'One word for "A child whose parents are dead":',
              accept: ['orphan'], explanation: 'An orphan has lost both parents.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Idioms & Phrases ============== */
    {
      id: 'vrb-u5', name: 'Unit 5 · Idioms & Phrases', description: 'Meaning that isn\'t literal',
      lessons: [
        {
          id: 'vrb-u5-l1', name: 'Everyday idioms', icon: '💬', xp: 20,
          challenges: [
            { type: 'concept', title: 'Idioms work figuratively', content: `<p>An <strong>idiom</strong> is a phrase whose meaning can\'t be guessed from the individual words. "It is raining cats and dogs" doesn\'t mean animals are falling — it means it\'s raining heavily.</p>
<div class="code-block">"a piece of cake"          → very easy
"break the ice"            → start a conversation
"hit the books"            → study hard
"once in a blue moon"      → very rarely
"spill the beans"          → reveal a secret
"the ball is in your court"→ it is your decision/turn
"under the weather"        → feeling sick
"cost an arm and a leg"    → very expensive</div>
<p><strong>Tip</strong>: in sentence-level questions, replace the idiom with the literal meaning and see which option matches.</p>` },
            { type: 'multiple-choice', prompt: 'The idiom <em>"a piece of cake"</em> means:',
              options: [{text:'A small dessert', code:false},{text:'Very easy', code:false},{text:'Very tasty', code:false},{text:'A celebration', code:false}],
              correct: 1, explanation: 'Common idiom for something effortless.' },
            { type: 'multiple-choice', prompt: 'The idiom <em>"under the weather"</em> means:',
              options: [{text:'Wet from rain', code:false},{text:'Feeling sick', code:false},{text:'Outdoors', code:false},{text:'In trouble', code:false}],
              correct: 1, explanation: 'Used for mild illness — "I\'m feeling under the weather today".' },
            { type: 'multiple-choice', prompt: '"He decided to <em>hit the books</em> before exams." Here it means:',
              options: [{text:'Throw books', code:false},{text:'Study hard', code:false},{text:'Buy books', code:false},{text:'Tear books', code:false}],
              correct: 1, explanation: '"Hit the books" = study intensely.' },
            { type: 'match-pairs', prompt: 'Match each idiom to its meaning.', leftLabel: 'Idiom', rightLabel: 'Meaning',
              pairs: [
                { left: 'Spill the beans',  right: 'Reveal a secret' },
                { left: 'Break the ice',    right: 'Start conversation' },
                { left: 'Once in a blue moon', right: 'Rarely' },
                { left: 'Cost an arm and a leg', right: 'Very expensive' }
              ] },
            { type: 'true-false', statement: 'If something happens "once in a blue moon", it happens very often.', correct: false, explanation: 'The opposite — it means rarely.' }
          ]
        },
        {
          id: 'vrb-u5-l2', name: 'Phrasal verbs', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Verb + preposition = new meaning', content: `<p>A <strong>phrasal verb</strong> is a verb combined with a preposition/adverb that takes on a meaning different from the verb alone.</p>
<div class="code-block">give up        → quit, stop trying
look after     → take care of
put off        → postpone
turn down      → reject
break down     → stop working / cry
call off       → cancel
come across    → meet by chance
get along      → have a friendly relationship
run out (of)   → exhaust the supply of
look up to     → admire</div>` },
            { type: 'multiple-choice', prompt: '"They had to <em>call off</em> the meeting." Here it means:',
              options: [{text:'Phone someone', code:false},{text:'Cancel', code:false},{text:'Postpone', code:false},{text:'Attend', code:false}],
              correct: 1, explanation: 'Call off = cancel.' },
            { type: 'multiple-choice', prompt: '"I <em>look up to</em> my elder sister." Here it means:',
              options: [{text:'Search for', code:false},{text:'Admire', code:false},{text:'Mimic', code:false},{text:'Avoid', code:false}],
              correct: 1, explanation: 'Look up to = respect/admire.' },
            { type: 'multiple-choice', prompt: '"The car <em>broke down</em> on the highway." Here it means:',
              options: [{text:'Split apart', code:false},{text:'Stopped working', code:false},{text:'Crashed', code:false},{text:'Sped up', code:false}],
              correct: 1, explanation: 'Break down (machines) = malfunction.' },
            { type: 'match-pairs', prompt: 'Match phrasal verb to meaning.', leftLabel: 'Phrasal verb', rightLabel: 'Meaning',
              pairs: [
                { left: 'put off',     right: 'postpone' },
                { left: 'turn down',   right: 'reject' },
                { left: 'look after',  right: 'take care of' },
                { left: 'give up',     right: 'quit' }
              ] },
            { type: 'fill-blank', prompt: 'Pick the correct phrasal verb.',
              codeLines: [{ html: 'We have <span class="fn">_BLANK_</span> milk; please buy some more.' }],
              tokens: ['run out of', 'put off', 'gave up', 'looked into'],
              correctAnswer: 'run out of',
              explanation: 'Run out of = no supply left.' },
            { type: 'type-answer', prompt: 'Which phrasal verb means "meet by chance"? (two words)',
              accept: ['come across', 'run into', 'bump into'], explanation: 'Come across / run into / bump into all work.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Spotting errors ============== */
    {
      id: 'vrb-u6', name: 'Unit 6 · Spotting errors', description: 'Subject-verb agreement, tense, pronouns',
      lessons: [
        {
          id: 'vrb-u6-l1', name: 'Subject-verb agreement', icon: '🔍', xp: 20,
          challenges: [
            { type: 'concept', title: 'The verb must agree with the subject', content: `<p>The verb has to match its subject in <strong>number</strong> (singular/plural) and <strong>person</strong> (1st/2nd/3rd).</p>
<div class="code-block">She write a letter.        ← WRONG
She writes a letter.       ← right (3rd-person singular adds -s)

The team are playing.      ← debatable (group as units → singular in US English)
The team is playing.       ← preferred

Each of the boys have       ← WRONG (subject is "each", singular)
Each of the boys has        ← right</div>
<p><strong>Trickier patterns</strong>:</p>
<ul>
  <li>"either / neither + nor" → verb agrees with the noun NEAREST it</li>
  <li>"one of the X who Y" → Y refers to the X (plural), so plural verb</li>
  <li>Collective nouns (team, family, government) usually take a singular verb</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Spot the error: "Neither John nor his brothers <code>is</code> coming."',
              options: [{text:'Neither', code:false},{text:'nor', code:false},{text:'is', code:false},{text:'coming', code:false}],
              correct: 2, explanation: 'Verb agrees with the nearer noun "brothers" (plural). Use ARE.' },
            { type: 'multiple-choice', prompt: 'Pick the correct sentence:',
              options: [
                {text:'Each of the players have a uniform.', code:false},
                {text:'Each of the players has a uniform.', code:false},
                {text:'Each of the players had have a uniform.', code:false},
                {text:'Each of the player have a uniform.', code:false}
              ],
              correct: 1, explanation: '"Each" is singular → "has".' },
            { type: 'multiple-choice', prompt: 'Pick the correct sentence:',
              options: [
                {text:'The news are good today.', code:false},
                {text:'The news is good today.', code:false},
                {text:'The news were good today.', code:false},
                {text:'The newses is good today.', code:false}
              ],
              correct: 1, explanation: '"News" is uncountable → singular verb.' },
            { type: 'true-false', statement: '"One of the books that <code>is</code> on the table is mine." This sentence is grammatically correct.', correct: false, explanation: '"One of the books that ARE on the table" — "that" refers to "books".' },
            { type: 'fill-blank', prompt: 'Fill the correct verb form.',
              codeLines: [{ html: 'The number of students <span class="fn">_BLANK_</span> increasing every year.' }],
              tokens: ['is', 'are', 'were', 'have'], correctAnswer: 'is',
              explanation: '"The number" (the count itself) is singular → IS. Compare with "A number of students ARE...".' }
          ]
        },
        {
          id: 'vrb-u6-l2', name: 'Tense & pronoun errors', icon: '🔍', xp: 20,
          challenges: [
            { type: 'concept', title: 'Tense and pronoun consistency', content: `<p><strong>Tense rules</strong>:</p>
<ul>
  <li>Time markers must match: yesterday → past, tomorrow → future, now → present</li>
  <li>After "since" / "for" with duration, use present perfect: "I have known him for ten years"</li>
  <li>In reported speech, shift tenses back: said + present → said + past</li>
</ul>
<p><strong>Pronoun rules</strong>:</p>
<ul>
  <li>Subject pronouns: I, he, she, we, they / Object pronouns: me, him, her, us, them</li>
  <li>After "between" use object pronouns: "between you and me" (not "you and I")</li>
  <li>"Who" = subject, "Whom" = object</li>
</ul>
<div class="code-block">He don\'t know me.          ← WRONG
He doesn\'t know me.        ← right

Between you and I, ...      ← WRONG
Between you and me, ...     ← right

He is taller than me.       ← acceptable (informal)
He is taller than I (am).   ← formal/test-correct</div>` },
            { type: 'multiple-choice', prompt: 'Spot the error: "Between you and <code>I</code>, the deal is risky."',
              options: [{text:'Between', code:false},{text:'you', code:false},{text:'I', code:false},{text:'risky', code:false}],
              correct: 2, explanation: 'After "between", use the object pronoun → "you and me".' },
            { type: 'multiple-choice', prompt: 'Choose the correct sentence:',
              options: [
                {text:'I am living here since 2018.', code:false},
                {text:'I have been living here since 2018.', code:false},
                {text:'I lived here since 2018.', code:false},
                {text:'I am here since 2018.', code:false}
              ],
              correct: 1, explanation: '"Since" with a starting point needs present perfect (continuous).' },
            { type: 'multiple-choice', prompt: 'Spot the error: "If I <code>was</code> you, I would apologize."',
              options: [{text:'If', code:false},{text:'was', code:false},{text:'would', code:false},{text:'apologize', code:false}],
              correct: 1, explanation: 'Hypothetical → subjunctive "were": "If I were you...".' },
            { type: 'true-false', statement: '"Who did you give the book to?" is preferred over "Whom did you give the book to?" in formal writing.', correct: false, explanation: 'Formally, "whom" follows a preposition: "To whom did you give...".' },
            { type: 'fill-blank', prompt: 'Use the correct pronoun.',
              codeLines: [{ html: 'The teacher praised <span class="fn">_BLANK_</span> and me for the project.' }],
              tokens: ['he', 'him', 'his', 'they'], correctAnswer: 'him',
              explanation: 'Object position after "praised" → "him and me".' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Sentence improvement ============== */
    {
      id: 'vrb-u7', name: 'Unit 7 · Sentence improvement', description: 'Pick the better version',
      lessons: [
        {
          id: 'vrb-u7-l1', name: 'Common improvements', icon: '✨', xp: 20,
          challenges: [
            { type: 'concept', title: 'Find the best replacement', content: `<p>You\'re shown a sentence with one phrase <em>underlined</em>. Four replacements are offered. Pick the grammatically correct, idiomatic one. "No improvement" is sometimes an option — don\'t pick it by default.</p>
<div class="code-block">Original: "He suggested me to leave early."
Better  : "He suggested that I leave early."
(suggest is followed by "that + subjunctive", not "+ object + infinitive")

Original: "I am playing chess since morning."
Better  : "I have been playing chess since morning."
(present perfect continuous after "since")

Original: "Despite of his efforts, he failed."
Better  : "Despite his efforts, he failed." (no "of")
or       "In spite of his efforts, he failed."</div>` },
            { type: 'multiple-choice', prompt: 'Improve: "He <em>insisted to come</em> with us."',
              options: [
                {text:'insisted on coming', code:false},
                {text:'insisted for coming', code:false},
                {text:'insisted came', code:false},
                {text:'No improvement', code:false}
              ],
              correct: 0, explanation: 'Insist + on + -ing.' },
            { type: 'multiple-choice', prompt: 'Improve: "<em>Despite of</em> his wealth, he is unhappy."',
              options: [
                {text:'Despite for', code:false},
                {text:'Despite', code:false},
                {text:'In spite for', code:false},
                {text:'No improvement', code:false}
              ],
              correct: 1, explanation: '"Despite" already means "in spite of"; never write "despite of".' },
            { type: 'multiple-choice', prompt: 'Improve: "She <em>is preferring</em> tea over coffee."',
              options: [
                {text:'prefers', code:false},
                {text:'has prefer', code:false},
                {text:'was prefer', code:false},
                {text:'No improvement', code:false}
              ],
              correct: 0, explanation: 'Stative verbs like "prefer" aren\'t normally used in the continuous form.' },
            { type: 'multiple-choice', prompt: 'Improve: "<em>One of my friend</em> is a doctor."',
              options: [
                {text:'One of my friends', code:false},
                {text:'One of mine friend', code:false},
                {text:'One of friend mine', code:false},
                {text:'No improvement', code:false}
              ],
              correct: 0, explanation: '"One of" must be followed by a plural noun: "One of my friends".' },
            { type: 'true-false', statement: '"Hardly had he reached the station when the train left." is grammatically correct.', correct: true, explanation: '"Hardly...when" is a fixed construction; inversion is required.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Sentence completion / fill-blanks ============== */
    {
      id: 'vrb-u8', name: 'Unit 8 · Sentence completion', description: 'Fill the blank with the best word',
      lessons: [
        {
          id: 'vrb-u8-l1', name: 'Single-blank sentences', icon: '🧠', xp: 20,
          challenges: [
            { type: 'concept', title: 'Read for tone & logic', content: `<p>Look for these clues before choosing:</p>
<ul>
  <li><strong>Connectors</strong> — "but / yet / however" signal contrast; "and / also / moreover" continue an idea</li>
  <li><strong>Tone</strong> — positive sentence usually needs a positive word</li>
  <li><strong>Collocation</strong> — some words pair naturally ("commit a crime", "make a decision")</li>
</ul>
<div class="code-block">"Although he was tired, he ___ working."
positive contrast → kept / continued</div>` },
            { type: 'fill-blank', prompt: 'Fill the blank.',
              codeLines: [{ html: 'The new policy was met with <span class="fn">_BLANK_</span> by the employees.' }],
              tokens: ['resistance', 'comfort', 'silence', 'laughter'], correctAnswer: 'resistance',
              explanation: 'Policies "met with" resistance is a common collocation.' },
            { type: 'fill-blank', prompt: 'Fill the blank.',
              codeLines: [{ html: 'Despite being a beginner, she handled the problem with surprising <span class="fn">_BLANK_</span>.' }],
              tokens: ['confusion', 'confidence', 'cowardice', 'carelessness'], correctAnswer: 'confidence',
              explanation: '"Despite being a beginner" + "surprising" → positive contrast → confidence.' },
            { type: 'multiple-choice', prompt: '"He is _____ to forgive small mistakes." Pick the best word.',
              options: [{text:'reluctant', code:false},{text:'inclined', code:false},{text:'opposed', code:false},{text:'forbidden', code:false}],
              correct: 1, explanation: '"Inclined to" + verb = tends to. Reluctant means the opposite here.' },
            { type: 'multiple-choice', prompt: '"The argument was so _____ that even experts could not follow it." Pick the best word.',
              options: [{text:'lucid', code:false},{text:'convoluted', code:false},{text:'brief', code:false},{text:'shallow', code:false}],
              correct: 1, explanation: 'Experts not following it → argument was complex/convoluted.' },
            { type: 'fill-blank', prompt: 'Fill the blank.',
              codeLines: [{ html: 'She <span class="fn">_BLANK_</span> the offer because the salary was too low.' }],
              tokens: ['accepted', 'turned down', 'looked up', 'set up'], correctAnswer: 'turned down',
              explanation: '"Salary too low" → she rejected/turned down the offer.' },
            { type: 'type-answer', prompt: '"Honesty is the ___ policy." (Famous proverb — single word)',
              accept: ['best'], explanation: 'Honesty is the best policy.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Cloze test ============== */
    {
      id: 'vrb-u9', name: 'Unit 9 · Cloze test', description: 'Multiple blanks in a passage',
      lessons: [
        {
          id: 'vrb-u9-l1', name: 'Short cloze passages', icon: '📃', xp: 25,
          challenges: [
            { type: 'concept', title: 'Cloze strategy', content: `<p>A <strong>cloze test</strong> is a short passage with several blanks. You don\'t solve each blank in isolation — you read the whole passage first, then fill in based on context.</p>
<ul>
  <li>Identify the topic and overall tone</li>
  <li>For each blank, decide what part of speech is needed (noun/verb/adj/conjunction)</li>
  <li>Use the options to cross-check — eliminate ones that don\'t agree grammatically</li>
</ul>
<p>Example passage:</p>
<div class="code-block">Computers have ___(1)___ the way we work. Tasks that once took hours
can now be ___(2)___ in minutes. ___(3)___, with this efficiency comes
a new ___(4)___ — dependence on machines we don\'t fully understand.</div>
<p>Reasonable fills: (1) revolutionized (2) completed (3) However (4) problem/challenge.</p>` },
            { type: 'fill-blank', prompt: 'Passage: "Computers have <code>_____</code> the way we work."',
              codeLines: [{ html: 'Computers have <span class="fn">_BLANK_</span> the way we work.' }],
              tokens: ['revolutionized', 'destroyed', 'reduced', 'reversed'], correctAnswer: 'revolutionized',
              explanation: 'Neutral-positive context about computers → revolutionized.' },
            { type: 'fill-blank', prompt: 'Continue the passage: "Tasks that once took hours can now be <code>_____</code> in minutes."',
              codeLines: [{ html: 'Tasks that once took hours can now be <span class="fn">_BLANK_</span> in minutes.' }],
              tokens: ['completed', 'forgotten', 'wasted', 'started'], correctAnswer: 'completed',
              explanation: 'Contrast "took hours" with "minutes" → tasks are completed faster.' },
            { type: 'fill-blank', prompt: 'Continue: "_____, with this efficiency comes a new problem."',
              codeLines: [{ html: '<span class="fn">_BLANK_</span>, with this efficiency comes a new problem.' }],
              tokens: ['However', 'Therefore', 'Because', 'Likewise'], correctAnswer: 'However',
              explanation: 'Signals contrast between the upside (efficiency) and the downside (problem).' },
            { type: 'fill-blank', prompt: 'Continue: "Dependence on machines we don\'t fully _____."',
              codeLines: [{ html: 'Dependence on machines we don\'t fully <span class="fn">_BLANK_</span>.' }],
              tokens: ['understand', 'destroy', 'forget', 'visit'], correctAnswer: 'understand',
              explanation: 'Sentence about hidden complexity → "understand".' },
            { type: 'multiple-choice', prompt: 'Passage: "Reading <em>widely</em> helps you write _____. The more authors you read, the more <em>styles</em> you absorb."',
              options: [{text:'badly', code:false},{text:'silently', code:false},{text:'better', code:false},{text:'less', code:false}],
              correct: 2, explanation: 'Positive context → "better".' },
            { type: 'multiple-choice', prompt: 'Passage: "She studied diligently <em>and</em>, _____, scored top marks."',
              options: [{text:'surprisingly', code:false},{text:'unsurprisingly', code:false},{text:'unfortunately', code:false},{text:'reluctantly', code:false}],
              correct: 1, explanation: 'Diligent study leading to good marks is the expected outcome → unsurprisingly.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Para jumbles ============== */
    {
      id: 'vrb-u10', name: 'Unit 10 · Para jumbles', description: 'Reorder sentences into a paragraph',
      lessons: [
        {
          id: 'vrb-u10-l1', name: 'Sentence ordering', icon: '🔀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Find the opener, then chain', content: `<p>Para-jumbles give you 4-6 shuffled sentences (often labeled P, Q, R, S). Your job: restore the original order.</p>
<p><strong>Workflow</strong>:</p>
<ul>
  <li>Find the <strong>opener</strong> — usually introduces the topic; rarely starts with "however", "therefore", "it" without context</li>
  <li>Find the <strong>closer</strong> — wraps up or concludes</li>
  <li>Look for <strong>connectors</strong> (also, thus, but, this/these, finally) — they point to the previous sentence</li>
  <li>Match <strong>pronouns to their nouns</strong> — "He" must come AFTER the named person is introduced</li>
</ul>` },
            { type: 'reorder-code', prompt: 'Reorder these sentences into a coherent paragraph.',
              lines: [
                'But the meeting was cancelled at the last minute.',
                'I had prepared a long presentation for the meeting.',
                'So I spent the saved hours reviewing my notes instead.',
                'Yesterday I was supposed to meet our client.'
              ],
              correctOrder: [3, 1, 0, 2],
              explanation: 'Open with the situation (yesterday), build it (prepared), pivot (but cancelled), close (spent time differently).' },
            { type: 'reorder-code', prompt: 'Reorder these sentences.',
              lines: [
                'It was a tough exam.',
                'I had studied for three weeks.',
                'When the results came out, I had scored an A.',
                'Last month I sat for the math final.'
              ],
              correctOrder: [3, 1, 0, 2],
              explanation: 'Establish (sat for finals), then prep, then describe the test, then result.' },
            { type: 'reorder-code', prompt: 'Reorder these sentences.',
              lines: [
                'In fact, the entire city was paralysed for two days.',
                'The storm reached the coast late on Tuesday.',
                'By Wednesday morning, electricity was out across half the town.',
                'Repair crews worked through the night to restore power.'
              ],
              correctOrder: [1, 2, 0, 3],
              explanation: 'Sequence: storm arrives → power out → city paralysed → crews respond.' },
            { type: 'tap-tokens', prompt: 'Tap the words in order to form a sensible sentence.',
              tokens: ['Although', 'Despite', 'he', 'studied', 'hard', 'he', 'failed', 'the', 'exam'],
              correctOrder: ['Although', 'he', 'studied', 'hard', 'he', 'failed', 'the', 'exam'],
              explanation: '"Although + clause" introduces a contrast; "despite" cannot be followed by a full subject-verb clause.' },
            { type: 'multiple-choice', prompt: 'Which sentence is most likely the OPENING of a paragraph?',
              options: [
                {text:'However, this caused new issues.', code:false},
                {text:'It quickly became standard practice.', code:false},
                {text:'In the 1990s, programmers began experimenting with object-oriented design.', code:false},
                {text:'These benefits, in turn, encouraged adoption.', code:false}
              ],
              correct: 2, explanation: 'Openers introduce the topic with a full noun phrase ("programmers"), not pronouns ("it"/"these") or connectors ("however").' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Reading comprehension ============== */
    {
      id: 'vrb-u11', name: 'Unit 11 · Reading comprehension', description: 'Read a short passage, answer questions',
      lessons: [
        {
          id: 'vrb-u11-l1', name: 'RC fundamentals', icon: '📖', xp: 25,
          challenges: [
            { type: 'concept', title: 'How to attack RC', content: `<p><strong>The Passage</strong>: "Artificial intelligence has moved from research labs to everyday devices. Smart assistants book appointments, suggest routes, and even draft emails. While productivity has surged, many worry that constant reliance on these tools is eroding our problem-solving habits. Studies show that people who outsource simple decisions to AI later struggle to make the same decisions on their own. The challenge ahead is not whether we use AI, but whether we keep our own minds sharp while doing so."</p>
<ul>
  <li><strong>Skim first</strong> — get the gist, don\'t read word-by-word</li>
  <li><strong>Identify the main idea</strong> — usually the first or last sentence</li>
  <li><strong>Locate specifics</strong> — go back to the passage; don\'t answer from memory</li>
  <li><strong>Watch for "tone"</strong> — is the author positive, critical, neutral?</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'According to the passage, the MAIN concern about AI is that:',
              options: [
                {text:'It is too expensive', code:false},
                {text:'It may reduce our problem-solving skills', code:false},
                {text:'It cannot draft emails well', code:false},
                {text:'It is hard to use', code:false}
              ],
              correct: 1, explanation: 'The passage says reliance is "eroding our problem-solving habits".' },
            { type: 'multiple-choice', prompt: 'The tone of the passage is best described as:',
              options: [
                {text:'Wholly enthusiastic', code:false},
                {text:'Strongly hostile', code:false},
                {text:'Cautiously balanced', code:false},
                {text:'Sarcastic', code:false}
              ],
              correct: 2, explanation: 'Author notes both benefits (productivity) and concerns (skill erosion).' },
            { type: 'multiple-choice', prompt: 'The phrase "outsource simple decisions to AI" means:',
              options: [
                {text:'Hire someone outside to use AI', code:false},
                {text:'Let AI make those decisions for them', code:false},
                {text:'Translate decisions into another language', code:false},
                {text:'Save the decisions in cloud storage', code:false}
              ],
              correct: 1, explanation: '"Outsource" here = hand over to AI.' },
            { type: 'multiple-choice', prompt: 'The author would MOST LIKELY agree that:',
              options: [
                {text:'AI should be banned in workplaces', code:false},
                {text:'We should use AI but stay mentally active', code:false},
                {text:'AI is never useful', code:false},
                {text:'Smart assistants always make mistakes', code:false}
              ],
              correct: 1, explanation: '"Keep our own minds sharp while doing so" — the author urges balance.' },
            { type: 'true-false', statement: 'The passage says AI has REPLACED human workers.', correct: false, explanation: 'Not stated. The passage discusses skill erosion, not replacement.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Para completion ============== */
    {
      id: 'vrb-u12', name: 'Unit 12 · Para completion', description: 'Pick the sentence that best concludes',
      lessons: [
        {
          id: 'vrb-u12-l1', name: 'Concluding sentences', icon: '🎯', xp: 20,
          challenges: [
            { type: 'concept', title: 'A good closer ties the paragraph together', content: `<p>You\'re shown a paragraph with the last sentence missing. From 4 options, pick the one that:</p>
<ul>
  <li>Stays on the SAME topic</li>
  <li>Doesn\'t introduce brand-new information</li>
  <li>Resolves or summarizes the line of thought</li>
  <li>Matches the tone of the rest of the paragraph</li>
</ul>
<p>Eliminate options that <em>contradict</em>, <em>shift topic</em>, or <em>introduce unrelated specifics</em>.</p>` },
            { type: 'multiple-choice', prompt: 'Paragraph: <em>"Cycling to work saves money and cuts pollution. It also keeps you fit. ____"</em>. Best completion?',
              options: [
                {text:'Cars, in contrast, are noisy.', code:false},
                {text:'In short, it is a small change with big benefits.', code:false},
                {text:'Pollution is caused by many other sources too.', code:false},
                {text:'Many cyclists wear helmets.', code:false}
              ],
              correct: 1, explanation: 'A summarizing closer ties the listed benefits together.' },
            { type: 'multiple-choice', prompt: 'Paragraph: <em>"Reading widely exposes you to new ideas. It also builds vocabulary and improves writing. ____"</em>. Best completion?',
              options: [
                {text:'Most libraries close on Sundays.', code:false},
                {text:'In short, reading is one of the highest-leverage habits you can build.', code:false},
                {text:'Television is more popular than books.', code:false},
                {text:'Writers must read every day.', code:false}
              ],
              correct: 1, explanation: 'Summarizing line consistent with the rest.' },
            { type: 'multiple-choice', prompt: 'Paragraph: <em>"Floods damaged several roads last week. Bus services were cancelled and many schools shut. Officials are still assessing the impact. ____"</em>. Best completion?',
              options: [
                {text:'Football matches were also held.', code:false},
                {text:'Repair work is expected to take several weeks.', code:false},
                {text:'Floods are common in deserts.', code:false},
                {text:'Most people prefer trains anyway.', code:false}
              ],
              correct: 1, explanation: 'Continues the timeline naturally — assessment to repair plan.' },
            { type: 'multiple-choice', prompt: 'Paragraph: <em>"Learning a new language exposes you to a new culture. You see the world through different eyes. New friendships open up too. ____"</em>. Best completion?',
              options: [
                {text:'But grammar can be hard.', code:false},
                {text:'In other words, every language you learn enlarges your world.', code:false},
                {text:'French is the most-spoken language.', code:false},
                {text:'Children pick up languages faster than adults.', code:false}
              ],
              correct: 1, explanation: 'Mirrors the optimistic, summarizing tone.' },
            { type: 'true-false', statement: 'A good concluding sentence often introduces a totally new sub-topic.', correct: false, explanation: 'Concluders stay ON-topic and wrap up. New sub-topics belong to a new paragraph.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Analogies ============== */
    {
      id: 'vrb-u13', name: 'Unit 13 · Analogies', description: 'Find the matching relationship',
      lessons: [
        {
          id: 'vrb-u13-l1', name: 'Word analogies', icon: '🔗', xp: 20,
          challenges: [
            { type: 'concept', title: 'Identify the relationship FIRST', content: `<p>An analogy question reads "A : B :: C : ?". Step 1: figure out the relationship between A and B. Step 2: apply the SAME relationship to C.</p>
<p>Common relationship types:</p>
<div class="code-block">SYNONYM       happy : joyful   :: angry : furious
ANTONYM       hot : cold       :: rich  : poor
PART:WHOLE    finger : hand    :: petal : flower
TOOL:USER     scalpel : surgeon :: gavel : judge
CAUSE:EFFECT  virus : illness  :: spark : fire
ITEM:CATEGORY rose : flower    :: oak   : tree
DEGREE        warm : hot       :: cool  : cold
WORKER:PRODUCT poet : poem     :: chef  : meal</div>` },
            { type: 'multiple-choice', prompt: 'Doctor : Patient :: Teacher : ?',
              options: [{text:'School', code:false},{text:'Book', code:false},{text:'Student', code:false},{text:'Lesson', code:false}],
              correct: 2, explanation: 'Service-provider : recipient.' },
            { type: 'multiple-choice', prompt: 'Pen : Write :: Knife : ?',
              options: [{text:'Sharp', code:false},{text:'Cut', code:false},{text:'Steel', code:false},{text:'Cook', code:false}],
              correct: 1, explanation: 'Tool : function. Pen is for writing; knife is for cutting.' },
            { type: 'multiple-choice', prompt: 'Petal : Flower :: ? : Book',
              options: [{text:'Cover', code:false},{text:'Word', code:false},{text:'Page', code:false},{text:'Author', code:false}],
              correct: 2, explanation: 'Part : whole. A petal is one piece of a flower; a page is one piece of a book.' },
            { type: 'multiple-choice', prompt: 'Hungry : Eat :: Tired : ?',
              options: [{text:'Sleep', code:false},{text:'Stop', code:false},{text:'Lazy', code:false},{text:'Rest', code:false}],
              correct: 0, explanation: 'State → action that resolves it. (Rest is also acceptable, but Sleep is the most direct counterpart of Eat.)' },
            { type: 'match-pairs', prompt: 'Match each pair to its relationship type.', leftLabel: 'Pair', rightLabel: 'Relationship',
              pairs: [
                { left: 'Hot : Cold',         right: 'Antonyms' },
                { left: 'Finger : Hand',      right: 'Part : Whole' },
                { left: 'Surgeon : Scalpel',  right: 'User : Tool' },
                { left: 'Rose : Flower',      right: 'Item : Category' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Voice & Speech ============== */
    {
      id: 'vrb-u14', name: 'Unit 14 · Voice & Speech transformations', description: 'Active/passive & direct/indirect',
      lessons: [
        {
          id: 'vrb-u14-l1', name: 'Active vs Passive', icon: '🔁', xp: 20,
          challenges: [
            { type: 'concept', title: 'Swap the doer and the receiver', content: `<p>An <strong>active</strong> sentence focuses on the doer; a <strong>passive</strong> sentence focuses on what was done.</p>
<div class="code-block">ACTIVE :  Subject + Verb + Object
          "The chef cooked the meal."

PASSIVE:  Object + (form of be) + Past Participle + (by Subject)
          "The meal was cooked by the chef."</div>
<p>Tense pattern:</p>
<div class="code-block">Simple Present : eats        → is/are eaten
Simple Past    : ate         → was/were eaten
Future         : will eat    → will be eaten
Present Cont.  : is eating   → is being eaten
Present Perfect: has eaten   → has been eaten</div>` },
            { type: 'multiple-choice', prompt: 'Convert to passive: "The teacher praised the student."',
              options: [
                {text:'The student is praised by the teacher.', code:false},
                {text:'The student was praised by the teacher.', code:false},
                {text:'The student has praised by the teacher.', code:false},
                {text:'The teacher was praised by the student.', code:false}
              ],
              correct: 1, explanation: 'Simple past active → was/were + past participle.' },
            { type: 'multiple-choice', prompt: 'Convert to passive: "They are building a new road."',
              options: [
                {text:'A new road is built by them.', code:false},
                {text:'A new road is being built by them.', code:false},
                {text:'A new road was built by them.', code:false},
                {text:'A new road has built by them.', code:false}
              ],
              correct: 1, explanation: 'Present continuous → is/are being + past participle.' },
            { type: 'multiple-choice', prompt: 'Convert to active: "The letter has been written by Anu."',
              options: [
                {text:'Anu writes the letter.', code:false},
                {text:'Anu wrote the letter.', code:false},
                {text:'Anu has written the letter.', code:false},
                {text:'Anu had written the letter.', code:false}
              ],
              correct: 2, explanation: 'Present perfect passive → present perfect active.' },
            { type: 'true-false', statement: 'In passive voice, the object of the active sentence becomes the subject.', correct: true, explanation: 'That\'s exactly the transformation rule.' },
            { type: 'tap-tokens', prompt: 'Build the passive form of: "The cat chased the mouse."',
              tokens: ['The', 'mouse', 'was', 'chased', 'by', 'the', 'cat', '.', 'cats', 'chase'],
              correctOrder: ['The', 'mouse', 'was', 'chased', 'by', 'the', 'cat', '.'],
              explanation: 'Simple past passive: object + was/were + past participle + by + subject.' }
          ]
        },
        {
          id: 'vrb-u14-l2', name: 'Direct vs Indirect speech', icon: '💭', xp: 25,
          challenges: [
            { type: 'concept', title: 'Reporting what someone said', content: `<p><strong>Direct speech</strong> uses the exact words: <em>She said, "I am happy."</em><br><strong>Indirect speech</strong> reports them: <em>She said that she was happy.</em></p>
<p>Common shifts when converting direct → indirect:</p>
<div class="code-block">Tense backshift
  am/is   → was       are    → were
  do/does → did       have   → had
  will    → would     can    → could

Pronoun changes (depends on speaker/listener):
  "I"   → he/she     "we"   → they
  "you" → I/we/he... depending on context

Time/place words
  now       → then       today      → that day
  tomorrow  → the next day      yesterday  → the previous day
  here      → there</div>` },
            { type: 'multiple-choice', prompt: 'Convert to indirect: <em>He said, "I am tired."</em>',
              options: [
                {text:'He said that he is tired.', code:false},
                {text:'He said that he was tired.', code:false},
                {text:'He says he was tired.', code:false},
                {text:'He told that he tired.', code:false}
              ],
              correct: 1, explanation: 'Past reporting verb → backshift "am" to "was".' },
            { type: 'multiple-choice', prompt: 'Convert to indirect: <em>She said, "I will call you tomorrow."</em>',
              options: [
                {text:'She said she will call me tomorrow.', code:false},
                {text:'She said she would call me the next day.', code:false},
                {text:'She told she calls me tomorrow.', code:false},
                {text:'She says she would call me tomorrow.', code:false}
              ],
              correct: 1, explanation: '"Will" → "would"; "tomorrow" → "the next day"; "you" → "me" (assuming I am being addressed).' },
            { type: 'multiple-choice', prompt: 'Convert to indirect: <em>He asked, "Where do you live?"</em>',
              options: [
                {text:'He asked where I live.', code:false},
                {text:'He asked where do I live.', code:false},
                {text:'He asked where I lived.', code:false},
                {text:'He asked where did I lived.', code:false}
              ],
              correct: 2, explanation: 'Question becomes statement; tense backshifts "live" → "lived".' },
            { type: 'true-false', statement: 'When the reporting verb is in the present tense ("says"), we still backshift the tense in indirect speech.', correct: false, explanation: 'No backshift when the reporting verb is in the present.' },
            { type: 'output-predict', prompt: 'Identify the correct indirect form. Original: <em>Ram said, "I am writing a letter now."</em>',
              code: `<span class="com">Direct:</span>   Ram said, <span class="str">"I am writing a letter now."</span>
<span class="com">Backshift:</span> "am writing" → "was writing"
<span class="com">Time:</span>      "now" → "then"
<span class="com">Pronoun:</span>   "I" → "he"`,
              options: [
                'Ram said that he is writing a letter now.',
                'Ram said that he was writing a letter then.',
                'Ram says he was writing a letter then.',
                'Ram said that I was writing a letter now.'
              ],
              correct: 1, explanation: 'All three shifts applied: pronoun, tense, time word.' }
          ]
        }
      ]
    }

  ]
});

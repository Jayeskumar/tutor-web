/* ============================================================
   Tutor — main application
   Single global state object, simple screen router, challenge
   engine that switches on challenge.type.
   ============================================================ */

const STORAGE_KEY = 'tutor.state.v1';
const THEME_KEY = 'tutor.theme';

// Unlimited mode — hearts never run out, gems never block.
// The learner is never stopped because of meta-currency.
const UNLIMITED = true;

const DEFAULT_STATE = {
  user: {
    xp: 0,
    hearts: UNLIMITED ? 999999 : 5,
    maxHearts: UNLIMITED ? 999999 : 5,
    gems: UNLIMITED ? 999999 : 50,
    streak: 0,
    lastActiveDate: null,
    name: 'Coder'
  },
  // map of lessonId -> 'completed'
  progress: {},
  soundOn: true,
  // last viewed course (for nicer back navigation)
  lastCourse: null
};

let state = loadState();

/* ============================================================
   Storage
   ============================================================ */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return { ...clone(DEFAULT_STATE), ...parsed, user: { ...DEFAULT_STATE.user, ...(parsed.user || {}) } };
  } catch {
    return clone(DEFAULT_STATE);
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function clone(o) { return JSON.parse(JSON.stringify(o)); }

/* ============================================================
   Streak update (run once per session)
   ============================================================ */
function updateStreak() {
  const today = new Date().toDateString();
  const last = state.user.lastActiveDate;
  if (!last) {
    state.user.streak = 1;
  } else if (last === today) {
    // already counted today
  } else {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (last === yesterday) state.user.streak += 1;
    else state.user.streak = 1;
  }
  state.user.lastActiveDate = today;
  saveState();
}

/* ============================================================
   Sound engine (Web Audio API — no audio files needed)
   ============================================================ */
const Sound = (() => {
  let ctx = null;
  function ensure() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch {}
    }
    return ctx;
  }
  function tone(freq, duration = 0.12, when = 0, type = 'sine', volume = 0.15) {
    if (!state.soundOn) return;
    const c = ensure();
    if (!c) return;
    const t = c.currentTime + when;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(t);
    osc.stop(t + duration + 0.02);
  }
  // Sweep — small "whoosh" using a frequency ramp
  function sweep(startFreq, endFreq, duration = 0.25, when = 0, type = 'sine', volume = 0.12) {
    if (!state.soundOn) return;
    const c = ensure(); if (!c) return;
    const t = c.currentTime + when;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, t);
    osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(volume, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(t); osc.stop(t + duration + 0.02);
  }
  return {
    correct() {
      tone(523.25, 0.12, 0,    'triangle', 0.18);
      tone(659.25, 0.14, 0.08, 'triangle', 0.18);
      tone(783.99, 0.18, 0.16, 'triangle', 0.16);
    },
    wrong()   {
      tone(220, 0.16, 0,    'sawtooth', 0.13);
      tone(165, 0.22, 0.08, 'sawtooth', 0.13);
      tone(110, 0.28, 0.18, 'sawtooth', 0.10);
    },
    tap()     { tone(880, 0.04, 0, 'sine', 0.05); },
    pop()     { tone(660, 0.05, 0, 'triangle', 0.07); tone(880, 0.06, 0.04, 'triangle', 0.07); },
    xpGain()  { tone(1318.5, 0.10, 0, 'triangle', 0.14); tone(1760, 0.14, 0.06, 'triangle', 0.12); },
    streakHit(){ tone(880, 0.10, 0, 'triangle', 0.12); tone(1175, 0.10, 0.08, 'triangle', 0.12); tone(1568, 0.18, 0.16, 'triangle', 0.12); },
    lessonStart(){ sweep(220, 880, 0.30, 0, 'sine', 0.13); tone(1046.5, 0.12, 0.30, 'triangle', 0.12); },
    matchAll(){ [523, 659, 880, 1046].forEach((f,i)=>tone(f, 0.12, i*0.05, 'triangle', 0.14)); },
    complete(){
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f,i)=>tone(f, 0.18, i*0.09, 'triangle', 0.17));
      // sparkle tail
      [1568, 1760, 2093].forEach((f,i)=>tone(f, 0.12, 0.6 + i*0.05, 'sine', 0.08));
    },
    heartLose(){ tone(440, 0.08, 0, 'square', 0.15); tone(330, 0.12, 0.07, 'square', 0.15); sweep(200, 80, 0.20, 0.14, 'sawtooth', 0.08); },
    levelUp() { [392, 523, 659, 783, 1046, 1318].forEach((f,i)=>tone(f, 0.14, i*0.07, 'triangle', 0.18)); }
  };
})();

/* ============================================================
   Particle effects — sparkles, floating XP, burst confetti
   ============================================================ */
function spawnFloatingXP(x, y, amount) {
  const el = document.createElement('div');
  el.className = 'floating-xp';
  el.textContent = `+${amount} XP`;
  el.style.left = (x - 40) + 'px';
  el.style.top  = (y - 20) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

function spawnSparkles(x, y, count = 8) {
  const variants = ['star1','star2','star3','star4','star5','dot'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const v = variants[i % variants.length];
    el.className = 'sparkle ' + v;
    el.style.left = (x - 7) + 'px';
    el.style.top  = (y - 7) + 'px';
    const angle = (Math.PI * 2 * i / count) + Math.random() * 0.4 - 0.2;
    const dist = 50 + Math.random() * 50;
    el.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    el.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    el.style.animationDuration = (0.7 + Math.random() * 0.5) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}

function spawnCelebrateBurst(x, y) {
  const icons = ['🎉','✨','⭐','💫','🎊','💚','💎'];
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('div');
    el.className = 'celebrate-burst';
    el.textContent = icons[i % icons.length];
    el.style.left = (x - 10) + 'px';
    el.style.top  = (y - 10) + 'px';
    const angle = (Math.PI * 2 * i / 10) + Math.random() * 0.5;
    const dist = 80 + Math.random() * 80;
    el.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    el.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    el.style.animationDuration = (0.7 + Math.random() * 0.4) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}

function answerEffectAt(targetEl, correct, xpAmount) {
  const rect = targetEl ? targetEl.getBoundingClientRect() : null;
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + 20 : window.innerHeight / 2;
  if (correct) {
    spawnSparkles(x, y, 10);
    spawnFloatingXP(x, y, xpAmount || 1);
    spawnCelebrateBurst(x, y);
  }
}

/* ============================================================
   Screen navigation
   ============================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================================
   Helpers
   ============================================================ */
function $(id) { return document.getElementById(id); }
function el(tag, props = {}, ...children) {
  const e = document.createElement(tag);
  for (const k in props) {
    if (k === 'class') e.className = props[k];
    else if (k === 'html') e.innerHTML = props[k];
    else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), props[k]);
    else e.setAttribute(k, props[k]);
  }
  for (const c of children) {
    if (c == null) continue;
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return e;
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   Stat refresh
   ============================================================ */
function refreshStats() {
  $('statStreak').textContent = state.user.streak;
  $('statGems').textContent = UNLIMITED ? '∞' : state.user.gems;
  $('statHearts').textContent = UNLIMITED ? '∞' : state.user.hearts;
  $('statXP').textContent = state.user.xp;
  $('statXP2').textContent = state.user.xp;
  $('statHearts2').textContent = UNLIMITED ? '∞' : state.user.hearts;
}

/* ============================================================
   Splash screen
   ============================================================ */
function setupSplash() {
  $('splashMascot').innerHTML = MASCOT_SVG;
  $('splashStartBtn').addEventListener('click', () => {
    Sound.tap();
    updateStreak();
    renderHome();
    showScreen('home');
  });
}

/* ============================================================
   Home screen
   ============================================================ */
function renderHome() {
  refreshStats();
  $('homeMascot').innerHTML = MASCOT_SVG;
  const greeting = greetingText();
  $('welcomeTitle').textContent = greeting.title;
  $('welcomeSub').textContent = greeting.sub;

  const grid = $('courseGrid');
  grid.innerHTML = '';
  for (const course of COURSES) {
    const total = totalLessons(course);
    const done = completedLessons(course);
    const pct = total ? (done / total) * 100 : 0;
    const card = el('div', { class: 'course-card', onclick: () => openCourse(course.id) });
    card.appendChild(el('div', { class: 'course-card-bg', style: `background:${course.color}` }));
    const icon = el('div', { class: 'course-icon', style: `background:${course.color}22; color:${course.color}` });
    icon.textContent = course.icon;
    card.appendChild(icon);
    card.appendChild(el('h3', { class: 'course-name' }, course.name));
    card.appendChild(el('p', { class: 'course-desc' }, course.description));
    const bar = el('div', { class: 'course-progress' });
    const fill = el('div', { class: 'course-progress-fill', style: `width:${pct}%; background:${course.color}` });
    bar.appendChild(fill);
    card.appendChild(bar);
    card.appendChild(el('div', { class: 'course-progress-text' }, `${done} / ${total} lessons`));
    grid.appendChild(card);
  }
}

function greetingText() {
  const h = new Date().getHours();
  let g = 'Welcome back!';
  if (h < 12) g = 'Good morning!';
  else if (h < 18) g = 'Good afternoon!';
  else g = 'Good evening!';
  const totalXP = state.user.xp;
  const sub = totalXP === 0
    ? "Pick a course and start your streak today."
    : `You've earned ${totalXP} XP. Keep that streak alive! 🔥`;
  return { title: g, sub };
}

function totalLessons(course) {
  return course.units.reduce((n, u) => n + u.lessons.length, 0);
}
function completedLessons(course) {
  let n = 0;
  for (const u of course.units) for (const l of u.lessons) {
    if (state.progress[l.id] === 'completed') n++;
  }
  return n;
}

/* ============================================================
   Course (skill tree)
   ============================================================ */
function openCourse(courseId) {
  state.lastCourse = courseId;
  saveState();
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  $('courseHeaderName').textContent = course.name;
  $('courseHeaderIcon').textContent = course.icon;
  $('courseHeaderIcon').style.background = course.color + '22';

  const total = totalLessons(course);
  const done = completedLessons(course);
  $('courseHeaderSub').textContent = `${done} / ${total} lessons`;
  const pct = total ? (done / total) * 100 : 0;
  $('courseProgressFill').style.width = pct + '%';
  $('courseProgressFill').style.background = `linear-gradient(90deg, ${course.color}, ${course.color}dd)`;

  renderSkillTree(course);
  renderLearnView(course);
  // Default tab: Learn if there's learning content for this course; otherwise Practice
  const hasLearn = (typeof LEARN_DATA !== 'undefined') && LEARN_DATA[course.id] && LEARN_DATA[course.id].chapters && LEARN_DATA[course.id].chapters.length;
  setCourseTab(hasLearn ? 'learn' : 'practice');
  refreshStats();
  showScreen('course');
}

/* ============================================================
   Course tabs (Learn / Practice)
   ============================================================ */
function setCourseTab(tab) {
  $('tabLearn').classList.toggle('active', tab === 'learn');
  $('tabPractice').classList.toggle('active', tab === 'practice');
  $('learnView').style.display = (tab === 'learn') ? 'grid' : 'none';
  $('skillTree').style.display = (tab === 'practice') ? '' : 'none';
  $('courseProgressBarWrap').style.display = (tab === 'practice') ? '' : 'none';
  const rp = $('readProgress');
  if (rp) rp.classList.toggle('active', tab === 'learn');
}

/* ============================================================
   Learn view (chapters with sidebar)
   ============================================================ */
let currentChapterIdx = 0;

/* localStorage helpers for read-state per chapter */
function getReadSet(courseId) {
  try { return new Set(JSON.parse(localStorage.getItem('tutor.read.' + courseId) || '[]')); }
  catch { return new Set(); }
}
function saveReadSet(courseId, set) {
  try { localStorage.setItem('tutor.read.' + courseId, JSON.stringify([...set])); } catch {}
}

function renderLearnView(course) {
  const learn = (typeof LEARN_DATA !== 'undefined' && LEARN_DATA[course.id]) || null;
  const list = $('chapterList');
  const body = $('chapterBody');
  list.innerHTML = '';
  body.innerHTML = '';

  if (!learn || !learn.chapters || !learn.chapters.length) {
    list.innerHTML = '<div class="chapter-list-title">No learn content yet</div>';
    body.innerHTML = `
      <h1>📚 Learn mode coming soon for this course</h1>
      <p>For now, head over to the <strong>Practice</strong> tab to test what you know with interactive challenges.</p>
      <p class="callout callout-info" style="opacity:1;transform:none;animation:none">Want learning content here? It\'s easy to add — see <code>learn-data.js</code> in the project. Each course just needs an entry with chapters and sections.</p>
    `;
    return;
  }

  const readSet = getReadSet(course.id);
  // sidebar header with course progress
  const header = el('div', { class: 'chapter-list-header' });
  header.appendChild(el('div', { class: 'chapter-list-name' }, course.name + ' · Learn'));
  const total = learn.chapters.length;
  const done = learn.chapters.filter(c => readSet.has(c.id)).length;
  header.appendChild(el('div', { class: 'chapter-list-meta' }, done + ' / ' + total + ' chapters'));
  const pbar = el('div', { class: 'chapter-list-progress' });
  pbar.appendChild(el('div', { class: 'chapter-list-progress-fill', style: 'width:' + Math.round(done / total * 100) + '%' }));
  header.appendChild(pbar);
  list.appendChild(header);

  learn.chapters.forEach((ch, idx) => {
    const cls = ['chapter-link'];
    if (idx === currentChapterIdx) cls.push('active');
    if (readSet.has(ch.id)) cls.push('read');
    const link = el('div', { class: cls.join(' '),
      onclick: () => goToChapter(course, idx)
    });
    link.appendChild(el('span', { class: 'chapter-link-icon' }, ch.icon || '📖'));
    link.appendChild(el('span', {}, ch.title));
    list.appendChild(link);
  });

  // Render the current chapter
  if (currentChapterIdx >= learn.chapters.length) currentChapterIdx = 0;
  const chapter = learn.chapters[currentChapterIdx];
  renderChapter(body, chapter, course, learn);
  // Show/hide the sticky read-progress bar
  if ($('readProgress')) $('readProgress').classList.add('active');
}

function goToChapter(course, idx) {
  const body = $('chapterBody');
  body.classList.add('fading-out');
  setTimeout(() => {
    currentChapterIdx = idx;
    renderLearnView(course);
    body.classList.remove('fading-out');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 150);
}

/* Reading time estimate: ~200 words/minute */
function estimateReadingTime(chapter) {
  let words = 0;
  for (const sec of chapter.sections || []) {
    if (sec.html) words += sec.html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    if (sec.text) words += String(sec.text).split(/\s+/).filter(Boolean).length;
    if (sec.code) words += sec.code.split(/\s+/).filter(Boolean).length / 2; // code is denser
    if (sec.items) for (const it of sec.items) words += String(it).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  }
  return Math.max(1, Math.round(words / 200));
}

/* Count widgets/visualizations in a chapter */
function countInteractive(chapter) {
  let w = 0, svg = 0;
  for (const sec of chapter.sections || []) {
    if (sec.type === 'widget') w++;
    if (sec.type === 'image') svg++;
  }
  return { widgets: w, svgs: svg };
}

function renderChapter(host, chapter, course, learn) {
  // Chapter meta: reading time + section/widget count
  const meta = el('div', { class: 'chapter-meta' });
  const mins = estimateReadingTime(chapter);
  const ix = countInteractive(chapter);
  meta.appendChild(el('span', { class: 'chapter-meta-item' },
    el('span', { class: 'chapter-meta-item-icon' }, '⏱️'),
    document.createTextNode(mins + ' min read')
  ));
  meta.appendChild(el('span', { class: 'chapter-meta-item' },
    el('span', { class: 'chapter-meta-item-icon' }, '📄'),
    document.createTextNode((chapter.sections || []).length + ' sections')
  ));
  if (ix.widgets) meta.appendChild(el('span', { class: 'chapter-meta-item' },
    el('span', { class: 'chapter-meta-item-icon' }, '🎮'),
    document.createTextNode(ix.widgets + ' interactive')
  ));
  if (ix.svgs) meta.appendChild(el('span', { class: 'chapter-meta-item' },
    el('span', { class: 'chapter-meta-item-icon' }, '🖼️'),
    document.createTextNode(ix.svgs + ' diagram' + (ix.svgs > 1 ? 's' : ''))
  ));
  meta.appendChild(el('span', { class: 'chapter-meta-item' },
    el('span', { class: 'chapter-meta-item-icon' }, '📖'),
    document.createTextNode('Chapter ' + (currentChapterIdx + 1) + ' / ' + learn.chapters.length)
  ));
  host.appendChild(meta);

  // Mini-TOC if multiple H2 sections
  const h2s = (chapter.sections || []).filter(s => s.type === 'heading' && (s.level || 2) === 2);
  if (h2s.length >= 3) {
    const toc = el('div', { class: 'mini-toc' });
    toc.appendChild(el('div', { class: 'mini-toc-title' }, 'On this page'));
    const ul = el('ul', { class: 'mini-toc-list' });
    h2s.forEach((h, i) => {
      const anchorId = 'sec-' + currentChapterIdx + '-' + i;
      const li = el('li');
      const a = el('a', { href: '#' + anchorId, onclick: (e) => {
        e.preventDefault();
        const target = document.getElementById(anchorId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } }, '▸ ' + h.text);
      li.appendChild(a);
      ul.appendChild(li);
    });
    toc.appendChild(ul);
    host.appendChild(toc);
  }

  // Render sections — track H2 index to add anchor ids
  let h2Idx = 0;
  for (const sec of chapter.sections) {
    const node = renderSection(sec);
    if (sec.type === 'heading' && (sec.level || 2) === 2) {
      node.id = 'sec-' + currentChapterIdx + '-' + (h2Idx++);
    }
    host.appendChild(node);
  }

  // Mark as read / Reset row
  const readSet = getReadSet(course.id);
  const isRead = readSet.has(chapter.id);
  const markRow = el('div', { style: 'margin: 22px 0 8px;' });
  const markBtn = el('button', { class: 'mark-as-read' + (isRead ? ' done' : '') }, isRead ? 'Marked as read' : 'Mark as read');
  markBtn.addEventListener('click', () => {
    const set = getReadSet(course.id);
    if (set.has(chapter.id)) set.delete(chapter.id);
    else { set.add(chapter.id); Sound.correct(); }
    saveReadSet(course.id, set);
    renderLearnView(course);
  });
  markRow.appendChild(markBtn);
  host.appendChild(markRow);

  // Pagination
  const nav = el('div', { class: 'chapter-nav' });
  const prevIdx = currentChapterIdx - 1;
  const nextIdx = currentChapterIdx + 1;
  const prevBtn = el('button', { class: 'chapter-nav-btn' });
  prevBtn.disabled = prevIdx < 0;
  prevBtn.appendChild(el('div', { class: 'cnav-label' }, '← Prev'));
  prevBtn.appendChild(el('div', { class: 'cnav-title' }, prevIdx >= 0 ? learn.chapters[prevIdx].title : '— start —'));
  prevBtn.addEventListener('click', () => { if (prevIdx >= 0) goToChapter(course, prevIdx); });
  const nextBtn = el('button', { class: 'chapter-nav-btn chapter-nav-next' });
  nextBtn.disabled = nextIdx >= learn.chapters.length;
  nextBtn.appendChild(el('div', { class: 'cnav-label' }, 'Next →'));
  nextBtn.appendChild(el('div', { class: 'cnav-title' }, nextIdx < learn.chapters.length ? learn.chapters[nextIdx].title : '— end —'));
  nextBtn.addEventListener('click', () => {
    if (nextIdx < learn.chapters.length) {
      // Auto-mark current chapter as read when moving forward
      const set = getReadSet(course.id);
      set.add(chapter.id);
      saveReadSet(course.id, set);
      goToChapter(course, nextIdx);
    }
  });
  nav.appendChild(prevBtn); nav.appendChild(nextBtn);
  host.appendChild(nav);
}

function renderSection(sec) {
  switch (sec.type) {
    case 'heading': {
      const level = Math.min(3, Math.max(1, sec.level || 2));
      return el('h' + level, {}, sec.text);
    }
    case 'para':
      return el('p', { html: sec.html });
    case 'code': {
      const wrap = el('div', { class: 'lb-code', html: sec.code });
      if (sec.lang) wrap.appendChild(el('span', { class: 'lb-code-lang' }, sec.lang));
      return wrap;
    }
    case 'callout':
      return el('div', { class: 'callout callout-' + (sec.kind || 'info'), html: sec.html });
    case 'list': {
      const tag = (sec.kind === 'numbered') ? 'ol' : 'ul';
      const cls = 'lb-list' + (sec.kind === 'check' ? ' lb-list-check' : '');
      const wrap = el(tag, { class: cls });
      for (const item of (sec.items || [])) {
        wrap.appendChild(el('li', { html: item }));
      }
      return wrap;
    }
    case 'image':
      return el('div', { class: 'lb-image', html: sec.svg });
    case 'divider':
      return el('hr', { style: 'border:none;border-top:2px dashed var(--border);margin:24px 0;' });
    case 'widget': {
      const host = el('div', {});
      if (typeof Widgets !== 'undefined' && typeof Widgets[sec.name] === 'function') {
        try { Widgets[sec.name](host, sec.props || {}); }
        catch (e) { host.innerHTML = '<div class="callout callout-danger">Widget error: ' + e.message + '</div>'; }
      } else {
        host.innerHTML = '<div class="callout callout-warn">Widget "' + sec.name + '" not loaded</div>';
      }
      return host;
    }
    default:
      return el('div', {}, '(unknown section: ' + sec.type + ')');
  }
}

function renderSkillTree(course) {
  const tree = $('skillTree');
  tree.innerHTML = '';

  // figure out which lesson is "current" — first not-completed lesson
  const flatLessons = [];
  for (const u of course.units) for (const l of u.lessons) flatLessons.push(l);
  let currentLessonId = null;
  for (const l of flatLessons) {
    if (state.progress[l.id] !== 'completed') { currentLessonId = l.id; break; }
  }

  // No order lock — every lesson is freely accessible. `current` highlight
  // still marks the first uncompleted lesson as a suggested next step.
  const unlocked = new Set(flatLessons.map(l => l.id));

  for (const unit of course.units) {
    const section = el('section', { class: 'unit-section' });
    const header = el('div', { class: 'unit-header' },
      el('div', {},
        el('div', { class: 'unit-title' }, unit.name),
        el('div', { class: 'unit-sub' }, unit.description)
      )
    );
    section.appendChild(header);

    const zig = el('div', { class: 'lessons-zigzag' });
    for (const lesson of unit.lessons) {
      const completed = state.progress[lesson.id] === 'completed';
      const isUnlocked = unlocked.has(lesson.id);
      const isCurrent = lesson.id === currentLessonId;
      const cls = ['lesson-node'];
      if (completed) cls.push('completed');
      if (!isUnlocked) cls.push('locked');
      if (isCurrent && isUnlocked) cls.push('current');

      const wrap = el('div', { class: 'lesson-node-wrap' });
      const node = el('button', {
        class: cls.join(' '),
        style: completed
          ? '' : (isUnlocked ? `background:${course.color}; box-shadow:0 6px 0 ${shade(course.color, -20)};` : '')
      });
      node.textContent = completed ? '⭐' : (isUnlocked ? lesson.icon : '🔒');
      node.addEventListener('click', () => {
        if (!isUnlocked) {
          shakeEl(node);
          Sound.wrong();
          return;
        }
        showLessonPopup(wrap, lesson, course);
      });
      wrap.appendChild(node);
      wrap.appendChild(el('div', { class: 'lesson-node-label' }, lesson.name));
      zig.appendChild(wrap);
    }
    section.appendChild(zig);
    tree.appendChild(section);
  }
}

function shade(hex, percent) {
  const num = parseInt(hex.replace('#',''), 16);
  let r = (num >> 16) + percent; let g = ((num >> 8) & 0xff) + percent; let b = (num & 0xff) + percent;
  r = Math.min(255, Math.max(0, r)); g = Math.min(255, Math.max(0, g)); b = Math.min(255, Math.max(0, b));
  return '#' + ((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
}
function shakeEl(node) {
  node.style.animation = 'none';
  void node.offsetWidth;
  node.style.animation = 'shake 0.4s';
  setTimeout(() => node.style.animation = '', 500);
}

function showLessonPopup(wrap, lesson, course) {
  document.querySelectorAll('.lesson-start-popup').forEach(p => p.remove());
  const popup = el('div', { class: 'lesson-start-popup' },
    el('div', { class: 'popup-title' }, lesson.name),
    el('div', { class: 'popup-sub' }, `+${lesson.xp} XP · ${lesson.challenges.length} challenges`),
    el('button', { class: 'popup-btn', onclick: (e) => { e.stopPropagation(); startLesson(course.id, lesson.id); } }, 'Start')
  );
  wrap.appendChild(popup);
  setTimeout(() => {
    const offClick = (ev) => {
      if (!popup.contains(ev.target)) { popup.remove(); document.removeEventListener('click', offClick); }
    };
    document.addEventListener('click', offClick);
  }, 50);
}

/* ============================================================
   LESSON ENGINE
   ============================================================ */
let lessonRun = null;

function startLesson(courseId, lessonId) {
  Sound.lessonStart();
  const course = COURSES.find(c => c.id === courseId);
  const lesson = course.units.flatMap(u => u.lessons).find(l => l.id === lessonId);
  if (!lesson) return;

  if (!UNLIMITED && state.user.hearts <= 0) { openModal('outOfHeartsModal'); return; }

  lessonRun = {
    courseId, lessonId,
    course, lesson,
    queue: [...lesson.challenges],
    index: 0,
    total: lesson.challenges.length,
    mistakes: 0,
    correctCount: 0,
    startedAt: Date.now(),
    currentChallenge: null,
    answered: false,
    answerCorrect: false,
    answerData: null   // for input collection
  };
  refreshLessonHeader();
  showScreen('lesson');
  renderCurrentChallenge();
}

function refreshLessonHeader() {
  if (!lessonRun) return;
  const pct = (lessonRun.index / lessonRun.total) * 100;
  $('lessonProgressFill').style.width = pct + '%';
  $('lessonHearts').textContent = UNLIMITED ? '∞' : state.user.hearts;
}

function renderCurrentChallenge() {
  if (!lessonRun) return;
  lessonRun.answered = false;
  lessonRun.answerCorrect = false;
  lessonRun.answerData = null;
  $('lessonFooter').classList.remove('feedback-correct', 'feedback-incorrect');
  const checkBtn = $('checkBtn');
  checkBtn.textContent = 'Check';
  checkBtn.disabled = true;

  const ch = lessonRun.queue[lessonRun.index];
  lessonRun.currentChallenge = ch;
  const host = $('challengeContainer');
  host.innerHTML = '';
  host.appendChild(renderChallenge(ch));
  refreshLessonHeader();
}

/* ------------------------------------------------------------
   Challenge renderers — return a single DOM node
   ------------------------------------------------------------ */
function renderChallenge(ch) {
  switch (ch.type) {
    case 'concept':         return renderConcept(ch);
    case 'multiple-choice': return renderMultipleChoice(ch);
    case 'true-false':      return renderTrueFalse(ch);
    case 'fill-blank':      return renderFillBlank(ch);
    case 'tap-tokens':      return renderTapTokens(ch);
    case 'match-pairs':     return renderMatchPairs(ch);
    case 'reorder-code':    return renderReorderCode(ch);
    case 'output-predict':  return renderOutputPredict(ch);
    case 'type-answer':     return renderTypeAnswer(ch);
    default:                return el('div', {}, `(Unknown challenge type: ${ch.type})`);
  }
}

/* concept slide — auto enables Check (now "Continue") */
function renderConcept(ch) {
  const card = el('div', { class: 'concept-card' });
  const wrap = el('div', { class: 'concept-mascot-wrap' });
  const mascotDiv = el('div', { class: 'concept-mascot' });
  mascotDiv.innerHTML = MASCOT_SVG;
  wrap.appendChild(mascotDiv);
  wrap.appendChild(el('div', { class: 'concept-bubble' }, el('div', { html: `<strong>${ch.title}</strong>` })));
  card.appendChild(wrap);
  card.appendChild(el('div', { class: 'concept-body', html: ch.content }));

  // concept is always "correct" — just continue
  lessonRun.answered = true;
  lessonRun.answerCorrect = true;
  lessonRun.skipFeedback = true;
  $('checkBtn').disabled = false;
  $('checkBtn').textContent = 'Continue';
  return card;
}

/* multiple-choice */
function renderMultipleChoice(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Select the correct answer'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt', html: ch.prompt }));
  const list = el('div', { class: 'options-list' });
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  ch.options.forEach((opt, i) => {
    const optEl = el('button', { class: 'option-btn' });
    optEl.appendChild(el('span', { class: 'option-letter' }, letters[i]));
    const textCls = opt.code ? 'option-text-code' : '';
    optEl.appendChild(el('span', { class: textCls, html: typeof opt === 'string' ? opt : opt.text }));
    optEl.addEventListener('click', () => {
      if (lessonRun.answered) return;
      Sound.tap();
      list.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      optEl.classList.add('selected');
      lessonRun.answerData = i;
      $('checkBtn').disabled = false;
    });
    list.appendChild(optEl);
  });
  wrap.appendChild(list);
  return wrap;
}

/* true-false */
function renderTrueFalse(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'True or false?'));
  wrap.appendChild(el('div', { class: 'tf-statement', html: ch.statement }));
  const bts = el('div', { class: 'tf-buttons' });
  const tBtn = el('button', { class: 'tf-button' }, el('span', { class: 'tf-icon' }, '✅'), document.createTextNode('TRUE'));
  const fBtn = el('button', { class: 'tf-button' }, el('span', { class: 'tf-icon' }, '❌'), document.createTextNode('FALSE'));
  [tBtn, fBtn].forEach((b, idx) => {
    b.addEventListener('click', () => {
      if (lessonRun.answered) return;
      Sound.tap();
      [tBtn, fBtn].forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      lessonRun.answerData = idx === 0;
      $('checkBtn').disabled = false;
    });
  });
  bts.appendChild(tBtn); bts.appendChild(fBtn);
  wrap.appendChild(bts);
  return wrap;
}

/* fill-blank */
function renderFillBlank(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Fill in the blank'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt', html: ch.prompt }));

  // build code block with a slot
  const snippet = el('div', { class: 'code-snippet' });
  const linesHtml = ch.codeLines.map(l => l.html).join('<br/>');
  // we'll insert a placeholder span where _BLANK_ appears
  const placeholderHTML = linesHtml.replace('_BLANK_', `<span class="code-blank" id="blankSlot">____</span>`);
  snippet.innerHTML = placeholderHTML;
  wrap.appendChild(snippet);

  // token bank
  const bank = el('div', { class: 'token-bank' });
  const shuffled = shuffle(ch.tokens);
  let selectedToken = null;
  shuffled.forEach(t => {
    const tk = el('button', { class: 'token' }, t);
    tk.addEventListener('click', () => {
      if (lessonRun.answered) return;
      Sound.tap();
      if (selectedToken) selectedToken.classList.remove('used');
      tk.classList.add('used');
      selectedToken = tk;
      const slot = $('blankSlot');
      slot.textContent = t;
      slot.classList.add('filled');
      lessonRun.answerData = t;
      $('checkBtn').disabled = false;
    });
    bank.appendChild(tk);
  });
  wrap.appendChild(bank);
  return wrap;
}

/* tap-tokens — build code by tapping in order */
function renderTapTokens(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Tap the words in the right order'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt', html: ch.prompt }));

  const builtArea = el('div', { class: 'token-bank', style: 'min-height: 80px; margin-bottom: 16px; background: white; border: 2px dashed var(--border);' });
  const bank = el('div', { class: 'token-bank' });

  const built = []; // ordered tokens currently in built area
  // token id ensures uniqueness when same string appears
  const tokens = ch.tokens.map((t, i) => ({ id: i, text: t }));
  const shuffled = shuffle(tokens);

  function repaint() {
    builtArea.innerHTML = '';
    built.forEach(({ id, text }) => {
      const tk = el('button', { class: 'token token-landing' }, text);
      tk.addEventListener('click', () => {
        if (lessonRun.answered) return;
        Sound.tap();
        const idx = built.findIndex(b => b.id === id);
        if (idx > -1) built.splice(idx, 1);
        const bankBtn = bank.querySelector(`[data-tid="${id}"]`);
        if (bankBtn) bankBtn.classList.remove('used');
        sync();
      });
      builtArea.appendChild(tk);
    });
    if (built.length === 0) {
      builtArea.appendChild(el('span', { style: 'color:var(--text-faint); font-size:14px; font-weight:600;' }, 'Tap tokens below…'));
    }
  }
  function sync() {
    repaint();
    lessonRun.answerData = built.map(b => b.text);
    $('checkBtn').disabled = built.length === 0;
  }

  shuffled.forEach(({ id, text }) => {
    const tk = el('button', { class: 'token', 'data-tid': id }, text);
    tk.addEventListener('click', () => {
      if (lessonRun.answered) return;
      if (tk.classList.contains('used')) return;
      Sound.tap();
      tk.classList.add('used');
      built.push({ id, text });
      sync();
    });
    bank.appendChild(tk);
  });

  wrap.appendChild(builtArea);
  wrap.appendChild(bank);
  sync();
  return wrap;
}

/* match-pairs */
function renderMatchPairs(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Match each item with its pair'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt' }, ch.prompt));

  const grid = el('div', { class: 'match-grid' });
  const leftCol = el('div', { class: 'match-col' });
  const rightCol = el('div', { class: 'match-col' });
  const leftLabel = el('div', { class: 'challenge-instruction', style: 'text-align:center;' }, ch.leftLabel || 'Left');
  const rightLabel = el('div', { class: 'challenge-instruction', style: 'text-align:center;' }, ch.rightLabel || 'Right');

  const lefts = ch.pairs.map((p, i) => ({ id: i, text: p.left }));
  const rights = ch.pairs.map((p, i) => ({ id: i, text: p.right }));
  const leftsShuffled = shuffle(lefts);
  const rightsShuffled = shuffle(rights);

  let activeLeft = null;
  let activeRight = null;
  const matched = new Set();

  function isCode(s) { return /[(){}\[\]<>;=]/.test(s) || /^\.\w/.test(s); }

  function check() {
    if (activeLeft != null && activeRight != null) {
      if (activeLeft.dataset.id === activeRight.dataset.id) {
        activeLeft.classList.remove('selected');
        activeRight.classList.remove('selected');
        activeLeft.classList.add('matched');
        activeRight.classList.add('matched');
        matched.add(activeLeft.dataset.id);
        Sound.correct();
        activeLeft = null; activeRight = null;
        if (matched.size === ch.pairs.length) {
          lessonRun.answerData = true;
          lessonRun.answerCorrect = true;
          lessonRun.answered = true;
          $('checkBtn').disabled = false;
          $('checkBtn').textContent = 'Continue';
          showInlineFeedback(true, 'All matched! 🎯');
        }
      } else {
        const l = activeLeft, r = activeRight;
        l.classList.add('wrong'); r.classList.add('wrong');
        Sound.wrong();
        setTimeout(() => {
          l.classList.remove('wrong', 'selected');
          r.classList.remove('wrong', 'selected');
        }, 500);
        activeLeft = null; activeRight = null;
      }
    }
  }

  leftCol.appendChild(leftLabel);
  rightCol.appendChild(rightLabel);

  leftsShuffled.forEach(({ id, text }) => {
    const cls = isCode(text) ? 'match-item code-item' : 'match-item';
    const item = el('div', { class: cls, 'data-id': id }, text);
    item.addEventListener('click', () => {
      if (matched.has(String(id)) || item.classList.contains('matched')) return;
      Sound.tap();
      if (activeLeft) activeLeft.classList.remove('selected');
      activeLeft = item;
      item.classList.add('selected');
      check();
    });
    leftCol.appendChild(item);
  });
  rightsShuffled.forEach(({ id, text }) => {
    const cls = isCode(text) ? 'match-item code-item' : 'match-item';
    const item = el('div', { class: cls, 'data-id': id }, text);
    item.addEventListener('click', () => {
      if (matched.has(String(id)) || item.classList.contains('matched')) return;
      Sound.tap();
      if (activeRight) activeRight.classList.remove('selected');
      activeRight = item;
      item.classList.add('selected');
      check();
    });
    rightCol.appendChild(item);
  });

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  wrap.appendChild(grid);
  return wrap;
}

/* reorder-code */
function renderReorderCode(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Drag the lines into the correct order'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt' }, ch.prompt));

  // shuffle but keep mapping to original index
  let items = ch.lines.map((html, i) => ({ html, origIndex: i }));
  // ensure shuffled isn't already correct
  let shuffled = shuffle(items);
  if (shuffled.every((it, idx) => it.origIndex === ch.correctOrder[idx])) {
    shuffled = shuffle(shuffled);
  }

  const list = el('div', { class: 'reorder-list' });

  function repaint() {
    list.innerHTML = '';
    items.forEach((it, idx) => {
      const row = el('div', { class: 'reorder-item' });
      row.dataset.idx = idx;
      const handle = el('span', { class: 'reorder-handle' }, '☰');
      const code = el('span', { html: it.html, style: 'flex:1;' });
      const up = el('button', { class: 'icon-btn', style: 'color:#a0a0c0; width:32px; height:32px; font-size:18px;', title: 'Move up' }, '↑');
      const down = el('button', { class: 'icon-btn', style: 'color:#a0a0c0; width:32px; height:32px; font-size:18px;', title: 'Move down' }, '↓');
      up.addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx === 0) return;
        Sound.tap();
        [items[idx-1], items[idx]] = [items[idx], items[idx-1]];
        capture();
        repaint();
      });
      down.addEventListener('click', (e) => {
        e.stopPropagation();
        if (idx === items.length - 1) return;
        Sound.tap();
        [items[idx+1], items[idx]] = [items[idx], items[idx+1]];
        capture();
        repaint();
      });
      row.appendChild(handle);
      row.appendChild(code);
      row.appendChild(up);
      row.appendChild(down);
      // pointer-based drag too
      enableRowDrag(row, idx, () => repaint());
      list.appendChild(row);
    });
  }

  function capture() {
    lessonRun.answerData = items.map(i => i.origIndex);
    $('checkBtn').disabled = false;
  }

  function enableRowDrag(row, idx, onChange) {
    let startY = 0, dragging = false, originalIdx = idx, currentOver = null;
    row.addEventListener('pointerdown', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      dragging = true; startY = e.clientY; originalIdx = idx;
      row.classList.add('dragging');
      row.setPointerCapture(e.pointerId);
    });
    row.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dy = e.clientY - startY;
      row.style.transform = `translateY(${dy}px)`;
      // find target
      const others = Array.from(list.children).filter(c => c !== row);
      let over = null;
      for (const o of others) {
        const r = o.getBoundingClientRect();
        if (e.clientY >= r.top && e.clientY <= r.bottom) { over = o; break; }
      }
      if (currentOver && currentOver !== over) currentOver.classList.remove('drop-target');
      if (over) over.classList.add('drop-target');
      currentOver = over;
    });
    row.addEventListener('pointerup', (e) => {
      if (!dragging) return;
      dragging = false;
      row.classList.remove('dragging');
      row.style.transform = '';
      if (currentOver) {
        const targetIdx = parseInt(currentOver.dataset.idx, 10);
        currentOver.classList.remove('drop-target');
        if (!isNaN(targetIdx) && targetIdx !== idx) {
          const item = items.splice(idx, 1)[0];
          items.splice(targetIdx, 0, item);
          Sound.tap();
          capture();
          onChange();
        }
      }
      currentOver = null;
    });
    row.addEventListener('pointercancel', () => {
      dragging = false;
      row.classList.remove('dragging');
      row.style.transform = '';
      if (currentOver) currentOver.classList.remove('drop-target');
    });
  }

  capture();
  repaint();
  wrap.appendChild(list);
  return wrap;
}

/* output-predict — same UI as multiple-choice + code block */
function renderOutputPredict(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Predict the output'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt' }, ch.prompt));
  wrap.appendChild(el('div', { class: 'code-preview-label' }, 'Code'));
  wrap.appendChild(el('div', { class: 'code-preview', html: ch.code }));

  const list = el('div', { class: 'options-list' });
  const letters = ['A', 'B', 'C', 'D'];
  ch.options.forEach((text, i) => {
    const optEl = el('button', { class: 'option-btn' });
    optEl.appendChild(el('span', { class: 'option-letter' }, letters[i]));
    optEl.appendChild(el('span', { class: 'option-text-code' }, text));
    optEl.addEventListener('click', () => {
      if (lessonRun.answered) return;
      Sound.tap();
      list.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      optEl.classList.add('selected');
      lessonRun.answerData = i;
      $('checkBtn').disabled = false;
    });
    list.appendChild(optEl);
  });
  wrap.appendChild(list);
  return wrap;
}

/* type-answer */
function renderTypeAnswer(ch) {
  lessonRun.skipFeedback = false;
  const wrap = el('div', {});
  wrap.appendChild(el('div', { class: 'challenge-instruction' }, 'Type your answer'));
  wrap.appendChild(el('h2', { class: 'challenge-prompt', html: ch.prompt }));
  if (ch.code) {
    wrap.appendChild(el('div', { class: 'code-preview', html: ch.code }));
  }
  const inputWrap = el('div', { class: 'type-answer-wrap' });
  const input = el('input', { type: 'text', class: 'type-answer-input', placeholder: 'Type here…', autocomplete: 'off', spellcheck: 'false' });
  input.addEventListener('input', () => {
    lessonRun.answerData = input.value.trim();
    $('checkBtn').disabled = !lessonRun.answerData;
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && lessonRun.answerData) {
      e.preventDefault();
      $('checkBtn').click();
    }
  });
  inputWrap.appendChild(input);
  wrap.appendChild(inputWrap);
  setTimeout(() => input.focus(), 100);
  return wrap;
}

function showInlineFeedback(correct, msg) {
  const f = $('lessonFooter');
  f.classList.remove('feedback-correct', 'feedback-incorrect');
  f.classList.add(correct ? 'feedback-correct' : 'feedback-incorrect');
  $('feedbackIcon').textContent = correct ? '✓' : '✕';
  $('feedbackTitle').textContent = correct ? 'Nice!' : 'Not quite';
  $('feedbackDetail').innerHTML = msg || '';
}

/* ------------------------------------------------------------
   Check button logic — validate answer
   ------------------------------------------------------------ */
function handleCheck() {
  if (!lessonRun) return;
  const ch = lessonRun.currentChallenge;

  // If already showed feedback, "Check" becomes "Continue"
  if (lessonRun.answered) {
    advance();
    return;
  }

  // Validate based on type
  let correct = false;
  let detail = ch.explanation || '';

  switch (ch.type) {
    case 'concept':
      correct = true;
      break;
    case 'multiple-choice':
    case 'output-predict':
      correct = (lessonRun.answerData === ch.correct);
      break;
    case 'true-false':
      correct = (lessonRun.answerData === ch.correct);
      break;
    case 'fill-blank':
      correct = (lessonRun.answerData === ch.correctAnswer);
      if (!correct) detail = `Answer: <code>${ch.correctAnswer}</code>. ` + detail;
      break;
    case 'tap-tokens': {
      const ans = lessonRun.answerData || [];
      correct = ans.length === ch.correctOrder.length && ans.every((t, i) => t === ch.correctOrder[i]);
      if (!correct) detail = `Answer: <code>${ch.correctOrder.join(' ')}</code>. ` + detail;
      break;
    }
    case 'reorder-code': {
      const ans = lessonRun.answerData || [];
      correct = ans.length === ch.correctOrder.length && ans.every((v, i) => v === ch.correctOrder[i]);
      break;
    }
    case 'type-answer': {
      const ans = (lessonRun.answerData || '').toLowerCase().trim();
      correct = (ch.accept || []).some(a => a.toLowerCase().trim() === ans);
      if (!correct) detail = `Answer: <code>${ch.accept[0]}</code>. ` + detail;
      break;
    }
    case 'match-pairs':
      // handled inline; falls through
      correct = !!lessonRun.answerCorrect;
      break;
  }

  lessonRun.answered = true;
  lessonRun.answerCorrect = correct;
  $('checkBtn').textContent = 'Continue';

  // Decorate options to show correct/incorrect
  decorateAnswerFeedback(ch, correct);

  if (correct) {
    lessonRun.correctCount += 1;
    Sound.correct();
    setTimeout(() => Sound.xpGain(), 120);
    // visual burst — sparkles, floating +XP, mini confetti — anchored to the
    // first correct-styled answer on screen, falling back to the check button.
    requestAnimationFrame(() => {
      const host = $('challengeContainer');
      let anchor = host && (host.querySelector('.option-btn.correct, .tf-button.correct, .code-blank.correct, .type-answer-input.correct, .match-item.matched'));
      if (!anchor) anchor = $('checkBtn');
      const xpPer = Math.max(1, Math.round((lessonRun.lesson.xp || 10) / lessonRun.total));
      answerEffectAt(anchor, true, xpPer);
    });
    // also briefly pulse the XP counter
    const xpEl = $('statXP');
    if (xpEl) { xpEl.classList.remove('xp-boost'); void xpEl.offsetWidth; xpEl.classList.add('xp-boost'); }
    showInlineFeedback(true, detail || pickPraise());
  } else {
    lessonRun.mistakes += 1;
    if (!UNLIMITED) state.user.hearts = Math.max(0, state.user.hearts - 1);
    saveState();
    Sound.wrong();
    if (!UNLIMITED) {
      Sound.heartLose();
      const h = $('lessonHearts');
      h.classList.remove('heart-break'); void h.offsetWidth; h.classList.add('heart-break');
    }
    // shake the whole challenge container subtly
    const cc = $('challengeContainer');
    if (cc) { cc.style.animation = 'none'; void cc.offsetWidth; cc.style.animation = 'shake 0.45s'; }
    refreshLessonHeader();
    showInlineFeedback(false, detail || 'Take another look!');
  }

  if (!UNLIMITED && state.user.hearts <= 0 && !correct) {
    // out of hearts after wrong answer — show modal after a beat
    setTimeout(() => openModal('outOfHeartsModal'), 600);
  }
}

function pickPraise() {
  const arr = ['Nice work! 🎉', 'You got it!', 'Spot on. 💯', 'Excellent.', 'Great job!', 'Boom! 💥', 'Crushed it!'];
  return arr[Math.floor(Math.random() * arr.length)];
}

function decorateAnswerFeedback(ch, correct) {
  const host = $('challengeContainer');
  switch (ch.type) {
    case 'multiple-choice':
    case 'output-predict': {
      const opts = host.querySelectorAll('.option-btn');
      opts.forEach((b, i) => {
        if (i === ch.correct) b.classList.add('correct');
        else if (b.classList.contains('selected') && !correct) b.classList.add('incorrect');
      });
      break;
    }
    case 'true-false': {
      const btns = host.querySelectorAll('.tf-button');
      const correctIdx = ch.correct ? 0 : 1;
      btns.forEach((b, i) => {
        if (i === correctIdx) b.classList.add('correct');
        else if (b.classList.contains('selected') && !correct) b.classList.add('incorrect');
      });
      break;
    }
    case 'fill-blank': {
      const slot = $('blankSlot');
      if (slot) {
        slot.classList.remove('filled');
        slot.classList.add(correct ? 'correct' : 'incorrect');
        if (!correct) slot.textContent = ch.correctAnswer;
      }
      break;
    }
    case 'type-answer': {
      const inp = host.querySelector('.type-answer-input');
      if (inp) {
        inp.classList.add(correct ? 'correct' : 'incorrect');
        if (!correct) inp.value = ch.accept[0];
        inp.disabled = true;
      }
      break;
    }
  }
}

function advance() {
  if (!lessonRun) return;
  if (lessonRun.answerCorrect) {
    lessonRun.index += 1;
  } else {
    // wrong answer — push the challenge back into the queue (after a few more) for retry
    const ch = lessonRun.queue[lessonRun.index];
    lessonRun.queue.splice(lessonRun.index, 1);
    const insertAt = Math.min(lessonRun.queue.length, lessonRun.index + 2);
    lessonRun.queue.splice(insertAt, 0, ch);
    lessonRun.total = lessonRun.queue.length;
  }
  if (lessonRun.index >= lessonRun.queue.length) {
    completeLesson();
    return;
  }
  renderCurrentChallenge();
}

function completeLesson() {
  const xp = lessonRun.lesson.xp;
  state.user.xp += xp;
  state.user.gems += 2;
  state.progress[lessonRun.lesson.id] = 'completed';
  saveState();

  const elapsed = Math.round((Date.now() - lessonRun.startedAt) / 1000);
  const mm = Math.floor(elapsed / 60), ss = elapsed % 60;
  const total = lessonRun.lesson.challenges.length;
  const accuracy = Math.max(0, Math.round(((total) / (total + lessonRun.mistakes)) * 100));

  $('completeXP').textContent = xp;
  $('completeAccuracy').textContent = accuracy;
  $('completeTime').textContent = `${mm}:${String(ss).padStart(2,'0')}`;
  $('completeMascot').innerHTML = MASCOT_CELEBRATE_SVG;
  $('completeSub').textContent = accuracy === 100 ? 'A perfect run! 🏆' : 'You crushed it!';

  Sound.complete();
  showScreen('complete');
  launchConfetti();
}

function launchConfetti() {
  const host = $('confettiHost');
  host.innerHTML = '';
  const colors = ['#58cc02', '#7c4dff', '#ffc800', '#1cb0f6', '#ff4b4b', '#ff9600'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (2 + Math.random() * 2) + 's';
    p.style.animationDelay = Math.random() * 0.5 + 's';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.width = (6 + Math.random() * 10) + 'px';
    p.style.height = (6 + Math.random() * 10) + 'px';
    host.appendChild(p);
  }
}

/* ============================================================
   Modals
   ============================================================ */
function openModal(id) { $(id).classList.add('active'); }
function closeModal(id) { $(id).classList.remove('active'); }

function setupModals() {
  $('quitStayBtn').addEventListener('click', () => { Sound.tap(); closeModal('quitModal'); });
  $('quitConfirmBtn').addEventListener('click', () => {
    Sound.tap();
    closeModal('quitModal');
    lessonRun = null;
    if (state.lastCourse) openCourse(state.lastCourse);
    else { renderHome(); showScreen('home'); }
  });
  $('ohQuitBtn').addEventListener('click', () => {
    Sound.tap();
    closeModal('outOfHeartsModal');
    lessonRun = null;
    if (state.lastCourse) openCourse(state.lastCourse);
    else { renderHome(); showScreen('home'); }
  });
  $('ohRefillBtn').addEventListener('click', () => {
    if (state.user.gems >= 10) {
      state.user.gems -= 10;
      state.user.hearts = state.user.maxHearts;
      saveState();
      refreshLessonHeader();
      refreshStats();
      closeModal('outOfHeartsModal');
      Sound.levelUp();
    } else {
      Sound.wrong();
      const b = $('ohRefillBtn');
      shakeEl(b);
    }
  });
}

/* ============================================================
   Wire up
   ============================================================ */
function setup() {
  setupSplash();
  setupModals();

  $('courseBackBtn').addEventListener('click', () => {
    Sound.tap();
    renderHome();
    showScreen('home');
  });

  // Course tabs
  $('tabLearn').addEventListener('click', () => { Sound.tap(); setCourseTab('learn'); });
  $('tabPractice').addEventListener('click', () => { Sound.tap(); setCourseTab('practice'); });

  // Back-to-top floating button
  const fab = $('backToTopBtn');
  if (fab) {
    fab.addEventListener('click', () => {
      Sound.tap();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Window scroll: update read-progress bar + toggle FAB
  window.addEventListener('scroll', () => {
    const fab = $('backToTopBtn');
    const isLearn = $('learnView').style.display !== 'none' && document.getElementById('screen-course').classList.contains('active');
    if (fab) fab.classList.toggle('visible', isLearn && window.scrollY > 400);

    const fill = $('readProgressFill');
    if (fill && isLearn) {
      const body = $('chapterBody');
      if (body) {
        const rect = body.getBoundingClientRect();
        const viewport = window.innerHeight;
        const total = rect.height;
        const scrolled = Math.max(0, Math.min(total, viewport - rect.top));
        const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
        fill.style.width = pct + '%';
      }
    }
  }, { passive: true });

  $('lessonQuitBtn').addEventListener('click', () => {
    Sound.tap();
    openModal('quitModal');
  });

  $('checkBtn').addEventListener('click', () => {
    Sound.tap();
    handleCheck();
  });

  $('completeContinueBtn').addEventListener('click', () => {
    Sound.tap();
    refreshStats();
    if (state.lastCourse) openCourse(state.lastCourse);
    else { renderHome(); showScreen('home'); }
  });

  $('soundToggle').addEventListener('click', () => {
    state.soundOn = !state.soundOn;
    saveState();
    $('soundToggle').textContent = state.soundOn ? '🔊' : '🔇';
    if (state.soundOn) Sound.tap();
  });
  $('soundToggle').textContent = state.soundOn ? '🔊' : '🔇';

  setupTheme();

  // If user has existing progress, skip splash on revisit
  if (state.user.xp > 0 || Object.keys(state.progress).length > 0) {
    updateStreak();
    renderHome();
    showScreen('home');
  }
}

function setupTheme() {
  const stored = (() => { try { return localStorage.getItem(THEME_KEY); } catch { return null; } })();
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);
  const btn = $('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch {}
    Sound.tap();
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = $('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', setup);

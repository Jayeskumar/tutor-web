/* ============================================================
   Tutor — data bootstrap
   Each courses/*.js file pushes a course onto COURSES.
   ============================================================ */

const COURSES = [];

/* Helper used by course files — call as PUSH({...}) */
function PUSH(course) { COURSES.push(course); }

/* ============================================================
   Mascot SVG — a friendly green robot called "Bit"
   Used in: splash, home, lesson concept slides, complete screen
   ============================================================ */
const MASCOT_SVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#58cc02"/>
      <stop offset="100%" stop-color="#3fa000"/>
    </linearGradient>
    <linearGradient id="headGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7ee032"/>
      <stop offset="100%" stop-color="#58cc02"/>
    </linearGradient>
  </defs>
  <line x1="100" y1="22" x2="100" y2="40" stroke="#2d6b00" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="18" r="7" fill="#ffc800"/>
  <circle cx="98" cy="16" r="2" fill="#fff" opacity="0.7"/>
  <rect x="40" y="40" width="120" height="100" rx="26" ry="26" fill="url(#headGrad)" stroke="#2d6b00" stroke-width="3"/>
  <rect x="56" y="60" width="88" height="60" rx="14" ry="14" fill="#1e1e2e"/>
  <circle cx="82" cy="88" r="9" fill="#fff"/>
  <circle cx="118" cy="88" r="9" fill="#fff"/>
  <circle cx="84" cy="90" r="4" fill="#1e1e2e"/>
  <circle cx="120" cy="90" r="4" fill="#1e1e2e"/>
  <circle cx="85" cy="88" r="1.5" fill="#fff"/>
  <circle cx="121" cy="88" r="1.5" fill="#fff"/>
  <path d="M 82 105 Q 100 116 118 105" stroke="#58cc02" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="64" cy="105" r="4" fill="#ff8aa6" opacity="0.7"/>
  <circle cx="136" cy="105" r="4" fill="#ff8aa6" opacity="0.7"/>
  <rect x="60" y="135" width="80" height="50" rx="18" ry="18" fill="url(#bodyGrad)" stroke="#2d6b00" stroke-width="3"/>
  <circle cx="100" cy="160" r="8" fill="#ffc800" stroke="#2d6b00" stroke-width="2"/>
  <circle cx="98" cy="158" r="2" fill="#fff" opacity="0.7"/>
  <rect x="28" y="140" width="22" height="36" rx="11" ry="11" fill="url(#bodyGrad)" stroke="#2d6b00" stroke-width="3"/>
  <rect x="150" y="140" width="22" height="36" rx="11" ry="11" fill="url(#bodyGrad)" stroke="#2d6b00" stroke-width="3"/>
</svg>
`;

const MASCOT_CELEBRATE_SVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#58cc02"/>
      <stop offset="100%" stop-color="#3fa000"/>
    </linearGradient>
    <linearGradient id="headGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7ee032"/>
      <stop offset="100%" stop-color="#58cc02"/>
    </linearGradient>
  </defs>
  <line x1="100" y1="22" x2="100" y2="40" stroke="#2d6b00" stroke-width="4" stroke-linecap="round"/>
  <circle cx="100" cy="18" r="8" fill="#ffc800"/>
  <rect x="40" y="40" width="120" height="100" rx="26" ry="26" fill="url(#headGrad2)" stroke="#2d6b00" stroke-width="3"/>
  <rect x="56" y="60" width="88" height="60" rx="14" ry="14" fill="#1e1e2e"/>
  <path d="M 75 92 Q 82 80 89 92" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 111 92 Q 118 80 125 92" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 75 102 Q 100 122 125 102" stroke="#ffc800" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="64" cy="105" r="5" fill="#ff8aa6" opacity="0.8"/>
  <circle cx="136" cy="105" r="5" fill="#ff8aa6" opacity="0.8"/>
  <rect x="60" y="135" width="80" height="50" rx="18" ry="18" fill="url(#bodyGrad2)" stroke="#2d6b00" stroke-width="3"/>
  <circle cx="100" cy="160" r="8" fill="#ffc800" stroke="#2d6b00" stroke-width="2"/>
  <rect x="22" y="100" width="22" height="36" rx="11" ry="11" fill="url(#bodyGrad2)" stroke="#2d6b00" stroke-width="3" transform="rotate(-30 33 118)"/>
  <rect x="156" y="100" width="22" height="36" rx="11" ry="11" fill="url(#bodyGrad2)" stroke="#2d6b00" stroke-width="3" transform="rotate(30 167 118)"/>
</svg>
`;

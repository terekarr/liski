// ── Liski SVG hedgehog character ─────────────────────────────────────────────
// One body (feet + torso + spikes + head + snout), three warm, always-friendly
// moods: encouraging (default), celebrating (right answer), curious (thinking /
// gentle retry). No mood is ever mocking — only the pose and props change.

function getLiskiSVG(mood = 'normal') {
  if (mood === 'happy' || mood === 'excited') return _hogCelebrating();
  if (mood === 'think' || mood === 'silly')   return _hogCurious();
  return _hogEncouraging();
}

function _hogQuills(bgRotY, fgRotY) {
  return `
    <g stroke-linecap="round" fill="none" stroke="var(--primary-dk)">
      <line x1="120" y1="112" x2="120" y2="78" stroke-width="10" transform="rotate(-85 120 148)"/>
      <line x1="120" y1="112" x2="120" y2="67" stroke-width="10" transform="rotate(-55 120 148)"/>
      <line x1="120" y1="112" x2="120" y2="62" stroke-width="10" transform="rotate(-25 120 148)"/>
      <line x1="120" y1="112" x2="120" y2="61" stroke-width="10" transform="rotate(10 120 148)"/>
      <line x1="120" y1="112" x2="120" y2="64" stroke-width="10" transform="rotate(40 120 148)"/>
      <line x1="120" y1="112" x2="120" y2="72" stroke-width="10" transform="rotate(70 120 148)"/>
    </g>
    <g stroke-linecap="round" fill="none" stroke="var(--ink)">
      <line x1="120" y1="104" x2="120" y2="64" stroke-width="8" transform="rotate(-92 120 140)"/>
      <line x1="120" y1="104" x2="120" y2="49" stroke-width="8" transform="rotate(-60 120 140)"/>
      <line x1="120" y1="104" x2="120" y2="38" stroke-width="8" transform="rotate(0 120 140)"/>
      <line x1="120" y1="104" x2="120" y2="49" stroke-width="8" transform="rotate(60 120 140)"/>
      <line x1="120" y1="104" x2="120" y2="64" stroke-width="8" transform="rotate(92 120 140)"/>
    </g>`;
}

function _hogBodyQuills() {
  return `
    <g stroke-linecap="round" fill="none" stroke="var(--primary-dk)">
      <line x1="70" y1="220" x2="46" y2="206" stroke-width="9"/>
      <line x1="66" y1="232" x2="40" y2="226" stroke-width="9"/>
      <line x1="66" y1="244" x2="42" y2="250" stroke-width="9"/>
      <line x1="170" y1="220" x2="194" y2="206" stroke-width="9"/>
      <line x1="174" y1="232" x2="200" y2="226" stroke-width="9"/>
      <line x1="174" y1="244" x2="198" y2="250" stroke-width="9"/>
    </g>
    <g stroke-linecap="round" fill="none" stroke="var(--ink)">
      <line x1="74" y1="216" x2="54" y2="198" stroke-width="7"/>
      <line x1="70" y1="230" x2="46" y2="220" stroke-width="7"/>
      <line x1="70" y1="242" x2="48" y2="252" stroke-width="7"/>
      <line x1="166" y1="216" x2="186" y2="198" stroke-width="7"/>
      <line x1="170" y1="230" x2="194" y2="220" stroke-width="7"/>
      <line x1="170" y1="242" x2="192" y2="252" stroke-width="7"/>
    </g>`;
}

function _hogHead(browPath1, browPath2) {
  return `
    <circle cx="120" cy="118" r="54" fill="var(--primary)"/>
    ${_hogQuills()}
    <ellipse cx="80" cy="96" rx="10" ry="12" fill="var(--primary-dk)" transform="rotate(-16 80 96)"/>
    <ellipse cx="160" cy="96" rx="10" ry="12" fill="var(--primary-dk)" transform="rotate(16 160 96)"/>
    <path d="M96,150 Q90,168 100,182 Q109,192 120,193 Q131,192 140,182 Q150,168 144,150 Q132,142 120,142 Q108,142 96,150 Z" fill="var(--muzzle)"/>
    <path d="${browPath1}" stroke="var(--primary-dk)" stroke-width="2.7" fill="none" stroke-linecap="round"/>
    <path d="${browPath2}" stroke="var(--primary-dk)" stroke-width="2.7" fill="none" stroke-linecap="round"/>`;
}

function _hogEncouraging() {
  return `<svg viewBox="0 0 240 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <g class="hog-idle">
      <ellipse cx="94" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="146" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="120" cy="204" rx="58" ry="64" fill="var(--primary)"/>
      <ellipse cx="120" cy="218" rx="38" ry="42" fill="var(--muzzle)"/>
      ${_hogBodyQuills()}
      <ellipse cx="168" cy="206" rx="13" ry="20" fill="var(--primary-dk)" transform="rotate(16 168 206)"/>
      <ellipse cx="72" cy="206" rx="13" ry="20" fill="var(--primary-dk)" transform="rotate(-16 72 206)"/>
      ${_hogHead('M91,112 Q102,106 112,111', 'M128,111 Q138,106 149,112')}
      <g class="hog-blink">
        <circle cx="102" cy="133" r="7.5" fill="var(--ink)"/><circle cx="104.8" cy="130.3" r="2.6" fill="#fdf1de"/>
        <circle cx="138" cy="133" r="7.5" fill="var(--ink)"/><circle cx="140.8" cy="130.3" r="2.6" fill="#fdf1de"/>
      </g>
      <path d="M95,139 Q102,143 109,139" stroke="var(--ink)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".4"/>
      <path d="M131,139 Q138,143 145,139" stroke="var(--ink)" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".4"/>
      <circle cx="90" cy="144" r="7" fill="var(--blush)" opacity=".6"/>
      <circle cx="150" cy="144" r="7" fill="var(--blush)" opacity=".6"/>
      <ellipse cx="120" cy="172" rx="7" ry="5" fill="var(--ink)"/>
      <path d="M100,178 Q120,196 140,178" stroke="var(--ink)" stroke-width="3" fill="#fdf3e4" stroke-linecap="round"/>
      <path d="M100,178 Q120,196 140,178" stroke="var(--ink)" stroke-width="2.5" fill="none"/>
    </g>
  </svg>`;
}

function _hogCelebrating() {
  return `<svg viewBox="0 0 240 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <path class="hog-sparkle-a" d="M52,90 l4,12 l12,4 l-12,4 l-4,12 l-4,-12 l-12,-4 l12,-4 Z" fill="var(--primary-dk)"/>
    <path class="hog-sparkle-b" d="M196,120 l3,9 l9,3 l-9,3 l-3,9 l-3,-9 l-9,-3 l9,-3 Z" fill="var(--primary-dk)"/>
    <path class="hog-sparkle-a" style="animation-delay:.4s" d="M186,70 l3,8 l8,3 l-8,3 l-3,8 l-3,-8 l-8,-3 l8,-3 Z" fill="var(--blush)"/>
    <g class="hog-celebrate">
      <ellipse cx="94" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="146" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="120" cy="204" rx="58" ry="64" fill="var(--primary)"/>
      <ellipse cx="120" cy="218" rx="38" ry="42" fill="var(--muzzle)"/>
      ${_hogBodyQuills()}
      <g class="hog-arm-l"><ellipse cx="60" cy="176" rx="13" ry="22" fill="var(--primary-dk)" transform="rotate(-55 60 176)"/></g>
      <g class="hog-arm-r"><ellipse cx="180" cy="176" rx="13" ry="22" fill="var(--primary-dk)" transform="rotate(55 180 176)"/></g>
      ${_hogHead('M89,110 Q102,100 115,110', 'M125,110 Q138,100 151,110')}
      <path d="M94,133 Q102,124 110,133" stroke="var(--ink)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path d="M130,133 Q138,124 146,133" stroke="var(--ink)" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <circle cx="88" cy="140" r="8" fill="var(--blush)" opacity=".8"/>
      <circle cx="152" cy="140" r="8" fill="var(--blush)" opacity=".8"/>
      <ellipse cx="120" cy="166" rx="6.5" ry="5" fill="var(--ink)"/>
      <path d="M96,182 Q96,204 120,215 Q144,204 144,182 Q120,197 96,182 Z" fill="var(--ink)"/>
      <ellipse cx="120" cy="200" rx="15" ry="10" fill="#fdf3e4"/>
    </g>
  </svg>`;
}

function _hogCurious() {
  return `<svg viewBox="0 0 240 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <g class="hog-curbob">
      <ellipse cx="94" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="146" cy="254" rx="15" ry="11" fill="var(--primary-dk)"/>
      <ellipse cx="120" cy="204" rx="58" ry="64" fill="var(--primary)"/>
      <ellipse cx="120" cy="218" rx="38" ry="42" fill="var(--muzzle)"/>
      ${_hogBodyQuills()}
      <ellipse cx="168" cy="206" rx="13" ry="20" fill="var(--primary-dk)" transform="rotate(16 168 206)"/>
      <g class="hog-chin"><ellipse cx="86" cy="180" rx="13" ry="22" fill="var(--primary-dk)" transform="rotate(-45 86 180)"/></g>
      <g transform="rotate(-8 120 118)">
        ${_hogHead('M91,116 Q102,104 112,111', 'M128,111 Q138,106 149,112')}
        <circle cx="102" cy="133" r="7.5" fill="var(--ink)"/><circle cx="105.2" cy="130.1" r="2.6" fill="#fdf1de"/>
        <circle cx="138" cy="133" r="7.5" fill="var(--ink)"/><circle cx="141.2" cy="130.1" r="2.6" fill="#fdf1de"/>
        <circle cx="90" cy="144" r="7" fill="var(--blush)" opacity=".55"/>
        <circle cx="150" cy="144" r="7" fill="var(--blush)" opacity=".55"/>
        <ellipse cx="120" cy="172" rx="7" ry="5" fill="var(--ink)"/>
        <path d="M108,180 Q120,186 132,180" stroke="var(--ink)" stroke-width="2.3" fill="none" stroke-linecap="round"/>
      </g>
    </g>
  </svg>`;
}

// ── Island scene illustrations ────────────────────────────────────────────────

function getIslandSVG(levelId) {
  const scenes = [null, sceneOu, sceneOn, sceneAn, sceneAi, sceneOi, sceneEu, sceneEn, sceneIn, sceneAu, sceneUn, scenePh, sceneGn, sceneIll, sceneEil, sceneOuill];
  return (scenes[levelId] || sceneDefault)();
}

function _star(cx, cy, r=5) {
  const p = [];
  for (let i=0;i<10;i++) {
    const a = (i*36-90)*Math.PI/180, rad = i%2===0 ? r : r*0.42;
    p.push(`${(cx+rad*Math.cos(a)).toFixed(1)},${(cy+rad*Math.sin(a)).toFixed(1)}`);
  }
  return `<polygon points="${p.join(' ')}" fill="#FFD700"/>`;
}

function sceneOu() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#A8EDEA"/><stop offset="100%" stop-color="#2EC4B6"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g1)"/>
    <circle cx="230" cy="28" r="22" fill="#FFF9C4" opacity="0.9"/>
    <path d="M0,72Q35,58 70,72Q105,86 140,72Q175,58 210,72Q245,86 280,72L280,110L0,110Z" fill="#1FBDB4" opacity="0.7"/>
    <path d="M0,84Q40,70 80,84Q120,98 160,84Q200,70 240,84Q265,92 280,84L280,110L0,110Z" fill="#0EA59C"/>
    <g transform="translate(80,82)">
      <circle cx="0" cy="0" r="13" fill="#FF6B6B"/>
      ${[0,45,90,135,180,225,270,315].map(a=>{const rad=a*Math.PI/180;return `<line x1="${(12*Math.cos(rad)).toFixed(1)}" y1="${(12*Math.sin(rad)).toFixed(1)}" x2="${(20*Math.cos(rad)).toFixed(1)}" y2="${(20*Math.sin(rad)).toFixed(1)}" stroke="#FF6B6B" stroke-width="3.5" stroke-linecap="round"/>`}).join('')}
      <circle cx="0" cy="0" r="9" fill="#FF8C8C"/>
      <circle cx="-3" cy="-3" r="3" fill="#FFAAAA" opacity="0.7"/>
    </g>
    <g transform="translate(170,68)" opacity="0.9">
      <ellipse cx="0" cy="0" rx="13" ry="7" fill="#FFD166"/>
      <polygon points="-13,0 -22,-6 -22,6" fill="#FFD166"/>
      <circle cx="7" cy="-2" r="2" fill="#1A0A00"/>
    </g>
  </svg>`;
}

function sceneOn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FF9A5C"/><stop offset="100%" stop-color="#FF6B6B"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g2)"/>
    <circle cx="140" cy="68" r="30" fill="#FFD166" opacity="0.85"/>
    <path d="M0,78Q70,66 140,78Q210,90 280,78L280,110L0,110Z" fill="#C0392B" opacity="0.7"/>
    <path d="M0,88Q70,78 140,88Q210,98 280,88L280,110L0,110Z" fill="#962d2d"/>
    <rect x="68" y="52" width="10" height="58" rx="3" fill="#8B5E3C"/>
    <rect x="108" y="52" width="10" height="58" rx="3" fill="#8B5E3C"/>
    <rect x="148" y="52" width="10" height="58" rx="3" fill="#8B5E3C"/>
    <rect x="188" y="52" width="10" height="58" rx="3" fill="#8B5E3C"/>
    <rect x="63" y="49" width="140" height="12" rx="4" fill="#A0714A"/>
    <rect x="127" y="80" width="26" height="30" fill="#FFD166" opacity="0.25"/>
  </svg>`;
}

function sceneAn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFD93D"/><stop offset="100%" stop-color="#FF9A3C"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g3)"/>
    <ellipse cx="55" cy="22" rx="30" ry="17" fill="white" opacity="0.75"/>
    <ellipse cx="220" cy="28" rx="26" ry="15" fill="white" opacity="0.7"/>
    <polygon points="80,110 140,32 200,110" fill="#7B4A26"/>
    <polygon points="96,110 140,37 184,110" fill="#9B6040"/>
    <ellipse cx="140" cy="36" rx="22" ry="11" fill="#FF6B35"/>
    <path d="M126,40Q128,18 140,12Q152,18 154,40" fill="#FF4500" opacity="0.95"/>
    <path d="M131,40Q133,23 140,19Q147,23 149,40" fill="#FFD166" opacity="0.9"/>
    <path d="M140,46Q151,62 155,82Q159,98 150,110" stroke="#FF6B35" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
  </svg>`;
}

function sceneAi() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C8B6FF"/><stop offset="100%" stop-color="#A29BFE"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g4)"/>
    <ellipse cx="50" cy="112" rx="90" ry="38" fill="#8B77E0" opacity="0.65"/>
    <ellipse cx="235" cy="115" rx="80" ry="33" fill="#7B67D0" opacity="0.65"/>
    <path d="M42,42Q55,30 68,42Q81,54 94,42" stroke="#4A3D90" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M110,24Q126,12 142,24Q158,36 174,24" stroke="#4A3D90" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M180,50Q192,40 204,50Q216,60 228,50" stroke="#4A3D90" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M75,65Q86,55 97,65Q108,75 119,65" stroke="#6050A8" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="58" cy="78" rx="5" ry="13" fill="#C0B0FF" transform="rotate(22 58 78)" opacity="0.65"/>
    <ellipse cx="205" cy="68" rx="4" ry="11" fill="#C0B0FF" transform="rotate(-18 205 68)" opacity="0.6"/>
  </svg>`;
}

function sceneOi() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4A1070"/><stop offset="100%" stop-color="#FD79A8"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g5)"/>
    ${[[40,20,5],[80,35,4],[130,18,6],[175,28,4],[220,15,5.5],[250,35,4],[60,55,3.5],[155,48,4.5],[210,52,3.5],[30,65,3],[100,70,4]].map(([x,y,r])=>_star(x,y,r)).join('')}
    <circle cx="220" cy="26" r="22" fill="#FFF9C4"/>
    <circle cx="228" cy="20" r="17" fill="#4A1070"/>
    <path d="M0,88Q40,75 90,82Q140,90 200,80Q240,73 280,82L280,110L0,110Z" fill="#2D0A50"/>
  </svg>`;
}

function sceneEu() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g6" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1A1A3E"/><stop offset="100%" stop-color="#2D1B4E"/></linearGradient>
      <radialGradient id="glow6" cx="50%" cy="100%">
        <stop offset="0%" stop-color="#FF8C00" stop-opacity="0.55"/><stop offset="100%" stop-color="#FF8C00" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="280" height="110" fill="url(#g6)"/>
    ${[[30,20,4],[80,14,4.5],[180,22,4],[232,12,5],[152,34,3.5]].map(([x,y,r])=>_star(x,y,r)).join('')}
    <rect x="0" y="86" width="280" height="24" fill="#2A1A08"/>
    <ellipse cx="140" cy="90" rx="58" ry="28" fill="url(#glow6)"/>
    <ellipse cx="128" cy="91" rx="18" ry="6" fill="#5C3A1E" transform="rotate(-22 128 91)"/>
    <ellipse cx="152" cy="91" rx="18" ry="6" fill="#5C3A1E" transform="rotate(22 152 91)"/>
    <path d="M128,90Q125,70 132,58Q140,50 148,58Q155,70 152,90Z" fill="#FF6B35"/>
    <path d="M131,90Q129,73 135,63Q140,57 145,63Q149,73 149,90Z" fill="#FFD166"/>
    <path d="M135,90Q134,79 138,70Q140,66 142,70Q145,79 145,90Z" fill="#FFF176"/>
    <circle cx="118" cy="76" r="2.5" fill="#FF8C00" opacity="0.8"/>
    <circle cx="162" cy="70" r="2" fill="#FF8C00" opacity="0.7"/>
    <circle cx="150" cy="62" r="1.5" fill="#FFA500" opacity="0.6"/>
  </svg>`;
}

function sceneEn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g7" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5BBFFF"/><stop offset="100%" stop-color="#A8D8FF"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g7)"/>
    <circle cx="250" cy="12" r="20" fill="#FFD166" opacity="0.9"/>
    <g transform="translate(55,42)">
      <ellipse cx="0" cy="0" rx="36" ry="22" fill="white"/>
      <ellipse cx="30" cy="-5" rx="28" ry="20" fill="white"/>
      <ellipse cx="58" cy="2" rx="26" ry="18" fill="white"/>
      <ellipse cx="82" cy="0" rx="22" ry="17" fill="white"/>
    </g>
    <g transform="translate(155,68)">
      <ellipse cx="0" cy="0" rx="28" ry="17" fill="#EEF6FF"/>
      <ellipse cx="24" cy="-4" rx="22" ry="16" fill="#EEF6FF"/>
      <ellipse cx="46" cy="1" rx="20" ry="14" fill="#EEF6FF"/>
    </g>
    <g transform="translate(18,26)">
      <ellipse cx="0" cy="0" rx="18" ry="12" fill="white" opacity="0.8"/>
      <ellipse cx="16" cy="-3" rx="14" ry="10" fill="white" opacity="0.8"/>
    </g>
  </svg>`;
}

function sceneIn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g8" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C0F0EC"/><stop offset="100%" stop-color="#80E0D8"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g8)"/>
    <path d="M0,73Q40,63 90,70Q140,77 190,66Q230,58 280,68L280,110L0,110Z" fill="white" opacity="0.9"/>
    <rect x="28" y="60" width="42" height="22" rx="7" fill="#DDF4F2"/>
    <rect x="198" y="55" width="52" height="26" rx="7" fill="#DDF4F2"/>
    <g transform="translate(140,52)">
      <ellipse cx="0" cy="20" rx="18" ry="25" fill="#1A1A2E"/>
      <ellipse cx="0" cy="24" rx="11" ry="17" fill="white"/>
      <circle cx="0" cy="-2" r="16" fill="#1A1A2E"/>
      <circle cx="-5" cy="-4" r="4.5" fill="white"/><circle cx="5" cy="-4" r="4.5" fill="white"/>
      <circle cx="-4" cy="-4" r="2.2" fill="#1A0A00"/><circle cx="6" cy="-4" r="2.2" fill="#1A0A00"/>
      <circle cx="-3" cy="-5" r="1" fill="white"/><circle cx="7" cy="-5" r="1" fill="white"/>
      <polygon points="0,2 -4,8 4,8" fill="#FFA500"/>
      <ellipse cx="-20" cy="14" rx="8" ry="16" fill="#1A1A2E" transform="rotate(-14 -20 14)"/>
      <ellipse cx="20" cy="14" rx="8" ry="16" fill="#1A1A2E" transform="rotate(14 20 14)"/>
      <ellipse cx="-8" cy="42" rx="8" ry="4" fill="#FFA500"/>
      <ellipse cx="8" cy="42" rx="8" ry="4" fill="#FFA500"/>
    </g>
    <text x="60" y="42" font-size="18" opacity="0.65" fill="#5BCAC4">❄</text>
    <text x="212" y="32" font-size="13" opacity="0.55" fill="#5BCAC4">❄</text>
    <text x="22" y="56" font-size="11" opacity="0.5" fill="#5BCAC4">❄</text>
  </svg>`;
}

function sceneAu() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g9" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFF3D0"/><stop offset="100%" stop-color="#FBBF7A"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g9)"/>
    <circle cx="240" cy="22" r="22" fill="#FFD166" opacity="0.9"/>
    <polygon points="0,110 0,38 58,18 118,52 118,110" fill="#8FAF60"/>
    <polygon points="0,110 0,43 58,23 118,57 118,110" fill="#A8C870"/>
    <rect x="50" y="20" width="16" height="90" rx="7" fill="#AEE8F8" opacity="0.85"/>
    <rect x="54" y="20" width="8" height="90" rx="4" fill="white" opacity="0.5"/>
    <ellipse cx="58" cy="107" rx="26" ry="8" fill="#AEE8F8" opacity="0.65"/>
    <g transform="translate(22,28)"><rect x="-3" y="0" width="6" height="15" fill="#5A3820"/>
      <ellipse cx="0" cy="-6" rx="11" ry="13" fill="#4A7C2F"/></g>
    <g transform="translate(88,44)"><rect x="-3" y="0" width="5" height="12" fill="#5A3820"/>
      <ellipse cx="0" cy="-5" rx="9" ry="11" fill="#4A7C2F"/></g>
    <path d="M138,102Q178,42 228,72" stroke="#FF6B6B" stroke-width="4" fill="none" opacity="0.55" stroke-linecap="round"/>
    <path d="M138,102Q178,50 230,77" stroke="#FFD166" stroke-width="4" fill="none" opacity="0.55" stroke-linecap="round"/>
    <path d="M138,102Q178,58 232,82" stroke="#55EFC4" stroke-width="4" fill="none" opacity="0.55" stroke-linecap="round"/>
    <path d="M138,102Q178,66 234,87" stroke="#74B9FF" stroke-width="4" fill="none" opacity="0.55" stroke-linecap="round"/>
  </svg>`;
}

function sceneUn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g10" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A5A"/><stop offset="100%" stop-color="#7A6A8A"/></linearGradient>
      <filter id="f10"><feGaussianBlur stdDeviation="3.5"/></filter>
    </defs>
    <rect width="280" height="110" fill="url(#g10)"/>
    <ellipse cx="70" cy="92" rx="110" ry="36" fill="#B2BEC3" opacity="0.38" filter="url(#f10)"/>
    <ellipse cx="210" cy="96" rx="90" ry="30" fill="#B2BEC3" opacity="0.35" filter="url(#f10)"/>
    <g transform="translate(38,48)">
      <rect x="-3" y="0" width="6" height="50" fill="#3D3058"/>
      <line x1="0" y1="14" x2="-20" y2="4" stroke="#3D3058" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="0" y1="14" x2="20" y2="4" stroke="#3D3058" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="0" y1="27" x2="-15" y2="20" stroke="#3D3058" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="27" x2="15" y2="20" stroke="#3D3058" stroke-width="3" stroke-linecap="round"/>
    </g>
    <g transform="translate(222,43)">
      <rect x="-3" y="0" width="5" height="55" fill="#3D3058"/>
      <line x1="0" y1="17" x2="-18" y2="7" stroke="#3D3058" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="17" x2="18" y2="7" stroke="#3D3058" stroke-width="3" stroke-linecap="round"/>
      <line x1="0" y1="30" x2="-12" y2="23" stroke="#3D3058" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <text x="116" y="56" font-size="30" fill="#9B8AAA" opacity="0.82" font-weight="bold" font-family="Georgia,serif">?</text>
    <text x="152" y="40" font-size="20" fill="#9B8AAA" opacity="0.58" font-weight="bold" font-family="Georgia,serif">?</text>
    <text x="92" y="74" font-size="16" fill="#9B8AAA" opacity="0.48" font-weight="bold" font-family="Georgia,serif">?</text>
    <circle cx="80" cy="66" r="3" fill="#E2D9F3" opacity="0.8"/>
    <circle cx="190" cy="58" r="3" fill="#E2D9F3" opacity="0.8"/>
    <circle cx="146" cy="82" r="2" fill="#E2D9F3" opacity="0.6"/>
  </svg>`;
}

function scenePh() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g11" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#80DEEA"/><stop offset="100%" stop-color="#00ACC1"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g11)"/>
    <circle cx="245" cy="22" r="18" fill="#FFF9C4" opacity="0.9"/>
    <path d="M0,78Q40,65 80,78Q120,91 160,78Q200,65 240,78Q265,86 280,78L280,110L0,110Z" fill="#0097A7"/>
    <path d="M0,90Q40,80 80,90Q120,100 160,90Q200,80 240,90L280,90L280,110L0,110Z" fill="#00838F"/>
    <g transform="translate(80,60)">
      <path d="M-20,10 Q-5,-15 15,-12 Q30,-8 28,5 Q15,18 -5,12 Z" fill="#00BCD4"/>
      <path d="M-22,10 L-35,2 L-28,16 Z" fill="#00BCD4"/>
      <circle cx="18" cy="-6" r="2.5" fill="#004D5A"/>
      <circle cx="19" cy="-7" r="1" fill="white"/>
    </g>
    <g transform="translate(170,45)">
      <path d="M-18,8 Q-4,-14 14,-10 Q28,-6 26,6 Q13,18 -4,10 Z" fill="#00BCD4"/>
      <path d="M-20,8 L-32,1 L-26,14 Z" fill="#00BCD4"/>
      <circle cx="16" cy="-4" r="2.5" fill="#004D5A"/>
      <circle cx="17" cy="-5" r="1" fill="white"/>
    </g>
    <g transform="translate(130,72)">
      <path d="M-14,6 Q-3,-10 10,-8 Q20,-4 19,4 Q9,12 -3,8 Z" fill="#26C6DA"/>
      <path d="M-16,6 L-24,1 L-20,10 Z" fill="#26C6DA"/>
    </g>
    <!-- splashes -->
    <path d="M68,62 Q72,55 76,62" stroke="white" stroke-width="2" fill="none" opacity="0.7"/>
    <path d="M158,48 Q162,41 166,48" stroke="white" stroke-width="2" fill="none" opacity="0.7"/>
  </svg>`;
}

// gn — mountain landscape
function sceneGn() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g12" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#B0BEC5"/><stop offset="100%" stop-color="#78909C"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g12)"/>
    <!-- Back mountains -->
    <polygon points="0,110 60,30 130,110" fill="#607D8B"/>
    <polygon points="50,110 140,15 230,110" fill="#546E7A"/>
    <polygon points="150,110 220,28 280,110" fill="#607D8B"/>
    <!-- Snow caps -->
    <polygon points="60,30 48,55 72,55" fill="white" opacity="0.9"/>
    <polygon points="140,15 124,46 156,46" fill="white" opacity="0.95"/>
    <polygon points="220,28 208,52 232,52" fill="white" opacity="0.9"/>
    <!-- Front hills (green) -->
    <ellipse cx="40" cy="115" rx="80" ry="40" fill="#558B2F"/>
    <ellipse cx="240" cy="118" rx="75" ry="36" fill="#558B2F"/>
    <ellipse cx="140" cy="120" rx="100" ry="35" fill="#689F38"/>
    <!-- Pine trees -->
    <g transform="translate(22,72)">
      <polygon points="0,-22 -10,0 10,0" fill="#2E7D32"/><rect x="-2" y="0" width="4" height="8" fill="#5D4037"/>
    </g>
    <g transform="translate(258,68)">
      <polygon points="0,-20 -9,0 9,0" fill="#2E7D32"/><rect x="-2" y="0" width="4" height="7" fill="#5D4037"/>
    </g>
    <!-- Eagle -->
    <path d="M200,35 Q210,28 220,35" stroke="#37474F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

// ill — butterfly meadow
function sceneIll() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g13" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F8BBD0"/><stop offset="100%" stop-color="#CE93D8"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g13)"/>
    <!-- Ground -->
    <ellipse cx="140" cy="122" rx="180" ry="40" fill="#81C784"/>
    <ellipse cx="140" cy="118" rx="180" ry="32" fill="#A5D6A7"/>
    <!-- Flowers -->
    ${[30,75,130,185,235].map((x,i)=>{const c=['#FF8A80','#FFD54F','#80DEEA','#CF94DA','#FF8A65'][i];return `<g transform="translate(${x},88)"><circle cx="0" cy="-8" r="7" fill="${c}" opacity="0.9"/><circle cx="0" cy="-14" r="5" fill="${c}"/><circle cx="5" cy="-10" r="5" fill="${c}"/><circle cx="-5" cy="-10" r="5" fill="${c}"/><circle cx="0" cy="-12" r="4" fill="#FFF9C4"/><rect x="-1.5" y="-4" width="3" height="16" rx="1.5" fill="#388E3C"/></g>`;}).join('')}
    <!-- Butterflies -->
    <g transform="translate(100,38)">
      <path d="M0,0 Q-18,-20 -22,-5 Q-18,8 0,0" fill="#FF6B6B" opacity="0.9"/>
      <path d="M0,0 Q18,-20 22,-5 Q18,8 0,0" fill="#FF6B6B" opacity="0.9"/>
      <path d="M0,0 Q-12,12 -14,2 Q-10,-4 0,0" fill="#FF8A80" opacity="0.8"/>
      <path d="M0,0 Q12,12 14,2 Q10,-4 0,0" fill="#FF8A80" opacity="0.8"/>
      <ellipse cx="0" cy="0" rx="2" ry="6" fill="#5D1A00"/>
    </g>
    <g transform="translate(185,28)">
      <path d="M0,0 Q-15,-17 -18,-4 Q-15,7 0,0" fill="#7986CB" opacity="0.9"/>
      <path d="M0,0 Q15,-17 18,-4 Q15,7 0,0" fill="#7986CB" opacity="0.9"/>
      <path d="M0,0 Q-10,10 -11,2 Q-8,-3 0,0" fill="#9FA8DA" opacity="0.8"/>
      <path d="M0,0 Q10,10 11,2 Q8,-3 0,0" fill="#9FA8DA" opacity="0.8"/>
      <ellipse cx="0" cy="0" rx="2" ry="5" fill="#311B92"/>
    </g>
    <g transform="translate(55,52)">
      <path d="M0,0 Q-12,-14 -15,-3 Q-12,6 0,0" fill="#FFD54F" opacity="0.9"/>
      <path d="M0,0 Q12,-14 15,-3 Q12,6 0,0" fill="#FFD54F" opacity="0.9"/>
      <path d="M0,0 Q-8,8 -10,1 Q-7,-2 0,0" fill="#FFEE58" opacity="0.8"/>
      <path d="M0,0 Q8,8 10,1 Q7,-2 0,0" fill="#FFEE58" opacity="0.8"/>
      <ellipse cx="0" cy="0" rx="1.5" ry="5" fill="#4E342E"/>
    </g>
  </svg>`;
}

// eil — bright sunny day
function sceneEil() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g14" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFF9C4"/><stop offset="100%" stop-color="#FFB300"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g14)"/>
    <!-- Sun rays -->
    ${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180,x1=140+46*Math.cos(a),y1=55+46*Math.sin(a),x2=140+70*Math.cos(a),y2=55+70*Math.sin(a);return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#FF8F00" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`;}).join('')}
    <!-- Sun body -->
    <circle cx="140" cy="55" r="38" fill="#FFD700"/>
    <circle cx="140" cy="55" r="30" fill="#FFE83D"/>
    <circle cx="140" cy="55" r="22" fill="#FFF176"/>
    <!-- Face on sun -->
    <circle cx="132" cy="50" r="3.5" fill="#E65100"/>
    <circle cx="148" cy="50" r="3.5" fill="#E65100"/>
    <path d="M130,62 Q140,72 150,62" stroke="#E65100" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <!-- Ground (yellow-green) -->
    <path d="M0,92 Q70,82 140,92 Q210,102 280,92 L280,110 L0,110Z" fill="#F9A825"/>
    <!-- Small hills/flowers -->
    <ellipse cx="30" cy="108" rx="40" ry="20" fill="#F57F17" opacity="0.6"/>
    <ellipse cx="250" cy="108" rx="40" ry="20" fill="#F57F17" opacity="0.6"/>
    <!-- Sunbeam glitter -->
    <circle cx="55"  cy="25" r="3" fill="#FFF9C4" opacity="0.8"/>
    <circle cx="225" cy="18" r="2" fill="#FFF9C4" opacity="0.7"/>
    <circle cx="80"  cy="15" r="2" fill="#FFF9C4" opacity="0.6"/>
  </svg>`;
}

// ouill — frog pond with lily pads
function sceneOuill() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g15" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C8E6C9"/><stop offset="100%" stop-color="#81C784"/></linearGradient></defs>
    <rect width="280" height="110" fill="url(#g15)"/>
    <!-- Pond -->
    <ellipse cx="140" cy="80" rx="115" ry="38" fill="#1565C0" opacity="0.6"/>
    <ellipse cx="140" cy="80" rx="110" ry="33" fill="#1976D2" opacity="0.5"/>
    <!-- Water shimmer -->
    <path d="M65,72 Q80,68 95,72" stroke="#90CAF9" stroke-width="1.5" fill="none" opacity="0.7"/>
    <path d="M170,76 Q185,72 200,76" stroke="#90CAF9" stroke-width="1.5" fill="none" opacity="0.7"/>
    <!-- Lily pads -->
    <ellipse cx="90"  cy="82" rx="22" ry="12" fill="#2E7D32"/>
    <path d="M90,82 L90,70" stroke="#2E7D32" stroke-width="1"/>
    <ellipse cx="175" cy="78" rx="20" ry="11" fill="#388E3C"/>
    <path d="M175,78 L175,67" stroke="#388E3C" stroke-width="1"/>
    <ellipse cx="130" cy="90" rx="18" ry="9"  fill="#1B5E20"/>
    <!-- Flowers on lily pads -->
    <circle cx="90" cy="78" r="5" fill="#FF8A80"/>
    <circle cx="90" cy="78" r="3" fill="#FFF9C4"/>
    <circle cx="175" cy="74" r="4" fill="#F48FB1"/>
    <circle cx="175" cy="74" r="2.5" fill="#FFF9C4"/>
    <!-- Frog 1 (big, on pad) -->
    <g transform="translate(90,70)">
      <ellipse cx="0" cy="2" rx="11" ry="8" fill="#43A047"/>
      <circle cx="0" cy="-4" r="8" fill="#43A047"/>
      <circle cx="-4" cy="-7" r="4" fill="#66BB6A"/>
      <circle cx="4"  cy="-7" r="4" fill="#66BB6A"/>
      <circle cx="-4" cy="-7" r="2.5" fill="#1A0A00"/>
      <circle cx="4"  cy="-7" r="2.5" fill="#1A0A00"/>
      <circle cx="-3" cy="-8" r="1"   fill="white"/>
      <circle cx="5"  cy="-8" r="1"   fill="white"/>
      <path d="M-3,0 Q0,3 3,0" stroke="#1B5E20" stroke-width="1.5" fill="none"/>
    </g>
    <!-- Frog 2 (small, peeping from water) -->
    <g transform="translate(175,68)">
      <circle cx="0" cy="0" r="7" fill="#558B2F"/>
      <circle cx="-3" cy="-2" r="3" fill="#7CB342"/>
      <circle cx="3"  cy="-2" r="3" fill="#7CB342"/>
      <circle cx="-3" cy="-2" r="1.8" fill="#1A0A00"/>
      <circle cx="3"  cy="-2" r="1.8" fill="#1A0A00"/>
    </g>
    <!-- Reeds -->
    <rect x="30" y="55" width="3" height="45" rx="1.5" fill="#5D4037"/>
    <ellipse cx="31" cy="53" rx="4" ry="10" fill="#795548"/>
    <rect x="248" y="58" width="3" height="42" rx="1.5" fill="#5D4037"/>
    <ellipse cx="249" cy="56" rx="3.5" ry="9" fill="#795548"/>
  </svg>`;
}

function sceneDefault() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="110" fill="#DDD"/></svg>`;
}

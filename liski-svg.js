// ── Liski SVG hedgehog character ─────────────────────────────────────────────

let _hogId = 0;

function getLiskiSVG(mood = 'normal') {
  const id = ++_hogId;
  const bg = `hbg${id}`, bl = `hbl${id}`;
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs>
      <radialGradient id="${bg}" cx="38%" cy="32%">
        <stop offset="0%" stop-color="#D4975A"/>
        <stop offset="100%" stop-color="#7B4A26"/>
      </radialGradient>
      <radialGradient id="${bl}" cx="50%" cy="28%">
        <stop offset="0%" stop-color="#FAE3C0"/>
        <stop offset="100%" stop-color="#F0C898"/>
      </radialGradient>
    </defs>
    ${_spines()}
    <ellipse cx="100" cy="130" rx="68" ry="54" fill="#6B3D1E"/>
    <circle cx="100" cy="108" r="66" fill="url(#${bg})"/>
    <ellipse cx="100" cy="150" rx="42" ry="32" fill="url(#${bl})"/>
    ${_eyes(mood)}
    <ellipse cx="100" cy="120" rx="10" ry="7.5" fill="#D97B7B"/>
    <ellipse cx="99" cy="118" rx="3.5" ry="2" fill="#F5B5B5" opacity="0.7"/>
    ${_mouth(mood)}
    ${_blush(mood)}
  </svg>`;
}

function _spines() {
  const qs = [[0,9,25],[25,8,22],[-25,8,22],[50,7,19],[-50,7,19],[72,6,16],[-72,6,16],[90,5,13],[-90,5,13]];
  return `<g fill="#3D1F08">` +
    qs.map(([a,rx,ry]) =>
      `<ellipse cx="100" cy="40" rx="${rx}" ry="${ry}" transform="rotate(${a} 100 110)"/>`
    ).join('') + `</g>`;
}

function _eyes(mood) {
  const lx=78, rx=122, ey=102, r=14;
  if (mood === 'happy') return `
    <path d="M${lx-14},${ey+1}Q${lx},${ey-13}${lx+14},${ey+1}" stroke="#1A0A00" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <path d="M${rx-14},${ey+1}Q${rx},${ey-13}${rx+14},${ey+1}" stroke="#1A0A00" stroke-width="5.5" fill="none" stroke-linecap="round"/>`;
  if (mood === 'silly') return `
    <path d="M${lx-12},${ey}Q${lx},${ey-10}${lx+12},${ey}" stroke="#1A0A00" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="${rx}" cy="${ey}" r="${r+2}" fill="#1A0A00"/>
    <circle cx="${rx+5}" cy="${ey-6}" r="6" fill="white"/>`;
  if (mood === 'think') return `
    <circle cx="${lx}" cy="${ey}" r="${r}" fill="#1A0A00"/><circle cx="${lx+1}" cy="${ey-8}" r="5" fill="white"/>
    <circle cx="${rx}" cy="${ey}" r="${r}" fill="#1A0A00"/><circle cx="${rx+1}" cy="${ey-8}" r="5" fill="white"/>`;
  if (mood === 'excited' || mood === 'speak') return `
    <circle cx="${lx}" cy="${ey}" r="${r+2}" fill="#1A0A00"/><circle cx="${lx+5}" cy="${ey-6}" r="6.5" fill="white"/>
    <circle cx="${rx}" cy="${ey}" r="${r+2}" fill="#1A0A00"/><circle cx="${rx+5}" cy="${ey-6}" r="6.5" fill="white"/>`;
  return `
    <circle cx="${lx}" cy="${ey}" r="${r}" fill="#1A0A00"/><circle cx="${lx+4}" cy="${ey-5}" r="5.5" fill="white"/>
    <circle cx="${rx}" cy="${ey}" r="${r}" fill="#1A0A00"/><circle cx="${rx+4}" cy="${ey-5}" r="5.5" fill="white"/>`;
}

function _mouth(mood) {
  if (mood === 'happy' || mood === 'excited') return `
    <path d="M78,126Q100,148 122,126" stroke="#7a3a2a" stroke-width="3" fill="white" stroke-linecap="round"/>
    <path d="M78,126Q100,148 122,126" stroke="#7a3a2a" stroke-width="2.5" fill="none"/>
    <line x1="91" y1="131" x2="91" y2="138" stroke="#c0806a" stroke-width="2"/>
    <line x1="100" y1="133" x2="100" y2="140" stroke="#c0806a" stroke-width="2"/>
    <line x1="109" y1="131" x2="109" y2="138" stroke="#c0806a" stroke-width="2"/>`;
  if (mood === 'silly') return `
    <path d="M80,126Q100,142 120,126" stroke="#7a3a2a" stroke-width="3" fill="white" stroke-linecap="round"/>
    <ellipse cx="100" cy="139" rx="12" ry="8" fill="#FF9999"/>
    <line x1="100" y1="131" x2="100" y2="147" stroke="#E07070" stroke-width="1.5"/>`;
  if (mood === 'speak') return `
    <ellipse cx="100" cy="132" rx="13" ry="10" fill="#7a3a2a"/>
    <ellipse cx="100" cy="133" rx="8" ry="6" fill="#C45E5E"/>`;
  if (mood === 'think') return `
    <path d="M88,130Q97,128 106,130Q113,132 118,129" stroke="#7a3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  return `<path d="M84,127Q100,142 116,127" stroke="#7a3a2a" stroke-width="3" fill="none" stroke-linecap="round"/>`;
}

function _blush(mood) {
  const op = (mood === 'silly' || mood === 'happy' || mood === 'excited') ? 0.6 : 0.38;
  const r  = (mood === 'happy' || mood === 'excited') ? 15 : 12;
  return `<circle cx="57" cy="114" r="${r}" fill="#FFB5B5" opacity="${op}"/>
    <circle cx="143" cy="114" r="${r}" fill="#FFB5B5" opacity="${op}"/>`;
}

// ── Island scene illustrations ────────────────────────────────────────────────

function getIslandSVG(levelId) {
  const scenes = [null, sceneOu, sceneOn, sceneAn, sceneAi, sceneOi, sceneEu, sceneEn, sceneIn, sceneAu, sceneUn];
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

function sceneDefault() {
  return `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="110" fill="#DDD"/></svg>`;
}

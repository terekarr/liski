// ── Init ─────────────────────────────────────────────────────────────────────
let _frVoice = null;

function _pickVoice() {
  const all = speechSynthesis.getVoices();
  if (!all.length) return;
  const fr  = all.filter(v => v.lang.startsWith('fr'));
  const frFR = fr.filter(v => v.lang === 'fr-FR');
  // Preference: Google français (neural) > Flo/Sandy/Eddy fr-FR (macOS character voices,
  // very natural) > Thomas (classic macOS fr-FR) > any fr-FR > any French voice
  _frVoice =
    fr.find(v => /google/i.test(v.name))                        ||
    frFR.find(v => /^flo/i.test(v.name))                        ||
    frFR.find(v => /^sandy/i.test(v.name))                      ||
    frFR.find(v => /^eddy/i.test(v.name))                       ||
    frFR.find(v => /thomas/i.test(v.name))                      ||
    frFR[0]                                                      ||
    fr[0]                                                        ||
    null;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hedgehog').forEach(el => {
    el.innerHTML = getLiskiSVG('normal');
  });
  updateLives();
  // Voices may not be ready yet — try now and again on voiceschanged
  _pickVoice();
  if (window.speechSynthesis) {
    speechSynthesis.onvoiceschanged = _pickVoice;
  }
});

// ── State ────────────────────────────────────────────────────────────────────
let state = loadState();
let currentLevel = null;
let activityQueue = [];
let activityIndex = 0;
let lives = 3;
let wrongAttempts = 0;

function loadState() {
  try { return JSON.parse(localStorage.getItem('liski_state')) || defaultState(); }
  catch { return defaultState(); }
}
function defaultState() { return { stars: {}, unlocked: [1] }; }
function saveState() { localStorage.setItem('liski_state', JSON.stringify(state)); }

// ── Screen helpers ───────────────────────────────────────────────────────────
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showWelcome()   { show('screen-welcome'); }
function showMap()       { buildMap(); show('screen-map'); }
function showDashboard() { buildDashboard(); show('screen-dashboard'); }

// ── Map ──────────────────────────────────────────────────────────────────────
function buildMap() {
  document.getElementById('stars-display').textContent =
    '⭐ ' + Object.values(state.stars).reduce((a, b) => a + b, 0);

  const container = document.getElementById('island-map');
  container.innerHTML = '';

  LEVELS.forEach(level => {
    const unlocked = state.unlocked.includes(level.id);
    const stars    = state.stars[level.id] || 0;

    const el = document.createElement('div');
    el.className = 'island ' + (unlocked ? 'island-unlocked' : 'island-locked');
    el.style.setProperty('--island-color', level.color);

    el.innerHTML = `
      <div class="island-scene">
        ${getIslandSVG(level.id)}
        ${!unlocked ? '<div class="island-scene-lock">🔒</div>' : ''}
      </div>
      <div class="island-info">
        <div class="island-name">${level.island}</div>
        <div class="island-meta">
          <span class="sound-pill" style="background:${level.color}">${level.sound}</span>
          <span class="island-stars">${starsHtml(stars)}</span>
        </div>
      </div>
    `;

    if (unlocked) el.onclick = () => openLevel(level.id);
    container.appendChild(el);
  });
}

function starsHtml(n) { return '⭐'.repeat(n) + '☆'.repeat(3 - n); }

// ── Level intro ──────────────────────────────────────────────────────────────
function openLevel(levelId) {
  currentLevel = LEVELS.find(l => l.id === levelId);
  document.getElementById('intro-title').textContent    = currentLevel.island;
  document.getElementById('intro-sound').textContent    = currentLevel.sound;
  document.getElementById('intro-sound').style.background = currentLevel.color;
  document.getElementById('intro-desc').textContent     = currentLevel.desc;
  setHogMood('hog-intro', 'excited');
  show('screen-level-intro');
}

// ── Build activity queue ─────────────────────────────────────────────────────
function startLevel() {
  lives = 3; wrongAttempts = 0;
  activityQueue = buildQueue(currentLevel);
  activityIndex = 0;
  show('screen-activity');
  nextActivity();
}

function buildQueue(level) {
  const words = shuffle([...level.words]);
  const types = ['listen', 'read', 'fill'];
  return words.map((w, i) => ({ type: types[i % 3], word: w, level }));
}

// ── Activity rendering ───────────────────────────────────────────────────────
function nextActivity() {
  if (activityIndex >= activityQueue.length) { levelComplete(); return; }
  updateProgress();
  updateLives();
  const activity = activityQueue[activityIndex];
  const area = document.getElementById('activity-area');
  area.innerHTML = '';
  hideSpeech();

  if (activity.type === 'listen') renderListen(activity, area);
  if (activity.type === 'read')   renderRead(activity, area);
  if (activity.type === 'fill')   renderFill(activity, area);
}

// Activity 1: tap the speaker button to hear the word, then pick the image
function renderListen(act, area) {
  setSpeech('Écoute bien… puis touche la bonne image !');
  setHogMood('hog-activity', 'speak');

  const correct = act.word;
  const choices = shuffle([correct, ...getDistractors(correct, act.level, 2)]);

  // Word is only spoken when the button is tapped — never automatically
  const wordBtn = document.createElement('button');
  wordBtn.className = 'word-speaker';
  wordBtn.innerHTML = `🔊 <span class="listen-word">${correct.word}</span>`;
  wordBtn.onclick = () => speak(correct.word);
  area.appendChild(wordBtn);

  const grid = document.createElement('div');
  grid.className = 'choice-grid';
  choices.forEach(w => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-emoji">${w.emoji}</span><span class="choice-label">${w.hint}</span>`;
    btn.onclick = () => handleAnswer(btn, w === correct, grid);
    grid.appendChild(btn);
  });
  area.appendChild(grid);
}

// Activity 2: read the highlighted word, pick the image
function renderRead(act, area) {
  setSpeech('Lis ce mot et touche la bonne image !');
  setHogMood('hog-activity', 'curious');

  const correct = act.word;
  const choices = shuffle([correct, ...getDistractors(correct, act.level, 2)]);

  const wordEl = document.createElement('div');
  wordEl.className = 'read-word';
  wordEl.innerHTML = highlightSound(correct.word, act.level.sound);
  area.appendChild(wordEl);

  const grid = document.createElement('div');
  grid.className = 'choice-grid';
  choices.forEach(w => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-emoji">${w.emoji}</span><span class="choice-label">${w.hint}</span>`;
    btn.onclick = () => handleAnswer(btn, w === correct, grid);
    grid.appendChild(btn);
  });
  area.appendChild(grid);
}

// Activity 3: see emoji + blanked word, pick the right sound
function renderFill(act, area) {
  setSpeech('Quel son complète le mot ?');
  setHogMood('hog-activity', 'think');

  const correct = act.word;
  const sound   = act.level.sound;
  const blanked = correct.word.replace(sound, '___');

  const wordEl = document.createElement('div');
  wordEl.className = 'fill-word';
  wordEl.innerHTML = `<span class="fill-emoji">${correct.emoji}</span><span class="fill-blank">${blanked}</span>`;
  area.appendChild(wordEl);

  const soundChoices = shuffle([sound, ...getDistractorSounds(act.level.id, 2)]);
  const grid = document.createElement('div');
  grid.className = 'choice-grid choice-grid-sounds';
  soundChoices.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn choice-btn-sound';
    btn.textContent = s;
    btn.onclick = () => handleAnswer(btn, s === sound, grid);
    grid.appendChild(btn);
  });
  area.appendChild(grid);
}

// ── Answer handling ──────────────────────────────────────────────────────────
function handleAnswer(btn, correct, grid) {
  disableGrid(grid);
  if (correct) {
    btn.classList.add('correct');
    setHogMood('hog-activity', 'happy');
    const praise = randomPraise();
    setSpeech(praise);
    speakSilly(praise, false);
    setTimeout(() => { activityIndex++; nextActivity(); }, 1300);
  } else {
    btn.classList.add('wrong');
    wrongAttempts++;
    lives = Math.max(0, lives - 1);
    updateLives();
    setHogMood('hog-activity', 'silly');
    const silly = randomSilly();
    setSpeech(silly);
    speakSilly(silly, true);
    setTimeout(() => {
      btn.classList.remove('wrong');
      enableGrid(grid);
      setHogMood('hog-activity', 'curious');
      hideSpeech();
    }, 1500);
  }
}

function disableGrid(grid) { grid.querySelectorAll('.choice-btn').forEach(b => b.disabled = true); }
function enableGrid(grid) {
  grid.querySelectorAll('.choice-btn').forEach(b => { b.disabled = false; b.classList.remove('wrong','correct'); });
}

// ── Level complete ───────────────────────────────────────────────────────────
function levelComplete() {
  const earned = wrongAttempts === 0 ? 3 : wrongAttempts <= 2 ? 2 : 1;
  state.stars[currentLevel.id] = Math.max(state.stars[currentLevel.id] || 0, earned);
  const nextId = currentLevel.id + 1;
  if (nextId <= LEVELS.length && !state.unlocked.includes(nextId)) state.unlocked.push(nextId);
  saveState();

  setHogMood('hog-complete', 'happy');
  const title = wrongAttempts === 0 ? 'Parfait ! 🎉' : 'Bravo ! 👏';
  document.getElementById('complete-title').textContent = title;
  document.getElementById('stars-earned').innerHTML = starsHtml(earned);
  document.getElementById('complete-msg').textContent = wrongAttempts === 0
    ? 'Zéro faute ! Tu es incroyable !'
    : `Tu as réussi avec ${wrongAttempts} erreur${wrongAttempts > 1 ? 's' : ''}. Continue !`;

  speakSilly(title, false);
  show('screen-level-complete');
}

// ── Dashboard ────────────────────────────────────────────────────────────────
function buildDashboard() {
  const el = document.getElementById('dashboard-content');
  const totalStars = Object.values(state.stars).reduce((a, b) => a + b, 0);
  const mastered   = Object.entries(state.stars).filter(([,s]) => s === 3).length;
  const attempted  = Object.keys(state.stars).length;

  let html = `
    <div class="dash-summary">
      <div class="dash-stat"><span class="dash-num">${totalStars}</span><span class="dash-lbl">étoiles</span></div>
      <div class="dash-stat"><span class="dash-num">${mastered}</span><span class="dash-lbl">maîtrisés</span></div>
      <div class="dash-stat"><span class="dash-num">${attempted}</span><span class="dash-lbl">niveaux tentés</span></div>
    </div>
    <h3>Sons travaillés</h3>
    <div class="dash-sounds">`;

  LEVELS.forEach(level => {
    const stars   = state.stars[level.id] || 0;
    const unlocked = state.unlocked.includes(level.id);
    const status  = !unlocked ? 'verrouillé' : stars === 3 ? 'maîtrisé ✓' : stars > 0 ? 'en progrès' : 'débloqué';
    html += `
      <div class="dash-row ${stars === 3 ? 'dash-mastered' : ''}">
        <span class="dash-sound-pill" style="background:${level.color}">${level.sound}</span>
        <span class="dash-island">${level.island}</span>
        <span class="dash-stars">${starsHtml(stars)}</span>
        <span class="dash-status">${status}</span>
      </div>`;
  });

  html += `</div>
    <div id="reset-confirm" style="display:none;background:#fff0f3;border-radius:14px;padding:14px;text-align:center;margin-top:16px">
      <p style="margin-bottom:10px;font-weight:700">Effacer toute la progression ?</p>
      <button class="btn-danger" onclick="doReset()" style="margin-right:8px">Oui, effacer</button>
      <button class="btn-secondary" onclick="document.getElementById('reset-confirm').style.display='none'">Annuler</button>
    </div>
    <button class="btn-danger" onclick="document.getElementById('reset-confirm').style.display='block'">
      Réinitialiser la progression
    </button>`;

  el.innerHTML = html;
}

// ── UI helpers ───────────────────────────────────────────────────────────────
function updateProgress() {
  document.getElementById('progress-bar').style.width =
    (activityIndex / activityQueue.length * 100) + '%';
}
function updateLives() {
  document.getElementById('lives-display').textContent = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
}
function setSpeech(text) {
  const b = document.getElementById('speech-bubble');
  b.textContent = text;
  b.style.display = 'block';
}
function hideSpeech() { document.getElementById('speech-bubble').style.display = 'none'; }

// ── Mascot ───────────────────────────────────────────────────────────────────
function setHogMood(id, mood) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'hedgehog hog-' + mood;
  el.innerHTML = getLiskiSVG(mood);
}

// ── Speech synthesis ─────────────────────────────────────────────────────────
function _utter(text, { rate = 0.82, pitch = 1.0 } = {}) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang  = 'fr-FR';
  if (_frVoice) utt.voice = _frVoice;
  utt.rate  = rate;
  utt.pitch = pitch;
  speechSynthesis.speak(utt);
}

// Word pronunciation — slow, clear, natural pitch
function speak(text) {
  _utter(text, { rate: 0.75, pitch: 1.0 });
}

// Feedback voice: warm for praise, intentionally silly for errors
function speakSilly(text, isSilly = true) {
  _utter(text, { rate: isSilly ? 0.80 : 0.88, pitch: isSilly ? 1.7 : 1.25 });
}

// ── Sound highlighting ───────────────────────────────────────────────────────
function highlightSound(word, sound) {
  return word.replace(new RegExp(`(${sound})`, 'gi'), '<span class="hl">$1</span>');
}

// ── Distractor helpers ───────────────────────────────────────────────────────
function getDistractors(correct, level, n) {
  return shuffle(level.words.filter(w => w !== correct)).slice(0, n);
}
function getDistractorSounds(levelId, n) {
  return shuffle(LEVELS.filter(l => l.id !== levelId)).slice(0, n).map(l => l.sound);
}

// ── Praise / silly lines ─────────────────────────────────────────────────────
const PRAISE = ['Super !', 'Bravo !', 'Excellent !', 'Trop fort !', "C'est parfait !", 'Ouiii !', 'Tu déchires !'];
const SILLY  = ['Essaie encore !', 'Oups ! Pas tout à fait…', 'Presque ! Courage !', 'Encore une fois !', 'Liski rigole… réessaie !'];
function randomPraise() { return PRAISE[Math.floor(Math.random() * PRAISE.length)]; }
function randomSilly()  { return SILLY [Math.floor(Math.random() * SILLY.length)];  }

function doReset() {
  localStorage.removeItem('liski_state');
  state = defaultState();
  saveState();
  buildDashboard();
}

// ── Blagues module ───────────────────────────────────────────────────────
let _blagueIndex = 0;
let _blagueRevealed = false;

function showBlagues() {
  _blagueIndex = 0;
  renderBlague(0);
  show('screen-blagues');
}

function renderBlague(index) {
  const b = BLAGUES[index];
  _blagueRevealed = false;

  document.getElementById('blague-badge').textContent  = b.label;
  document.getElementById('blague-badge').style.background = b.color;
  document.getElementById('blague-counter').textContent = `${index + 1} / ${BLAGUES.length}`;
  document.getElementById('blague-question').textContent = b.question;
  document.getElementById('blague-answer-emoji').textContent = b.emoji;
  document.getElementById('blague-answer-text').textContent  = b.answer;

  document.getElementById('blague-answer-wrap').classList.remove('visible');
  document.getElementById('btn-reveal').style.display = '';
  document.getElementById('blague-speech').style.display = 'none';

  document.getElementById('btn-blague-prev').disabled = index === 0;
  document.getElementById('btn-blague-next').disabled = index === BLAGUES.length - 1;

  setHogMood('hog-blagues', 'think');
}

function revealBlagueAnswer() {
  if (_blagueRevealed) return;
  _blagueRevealed = true;

  const b = BLAGUES[_blagueIndex];
  const isFunny = b.type === 'blague';

  document.getElementById('btn-reveal').style.display = 'none';
  document.getElementById('blague-answer-wrap').classList.add('visible');

  setHogMood('hog-blagues', isFunny ? 'silly' : 'happy');

  const speech = document.getElementById('blague-speech');
  speech.textContent = b.reaction;
  speech.style.display = 'block';

  speakSilly(b.reaction, isFunny);
}

function nextBlague() {
  if (_blagueIndex < BLAGUES.length - 1) renderBlague(++_blagueIndex);
}
function prevBlague() {
  if (_blagueIndex > 0) renderBlague(--_blagueIndex);
}

// ── Misc ─────────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function confirmBackToMap() {
  if (confirm('Retourner à la carte ? Ta progression dans ce niveau sera perdue.')) showMap();
}

/* ==========================================================================
   WONDERLIC 2.0 / 3.0 BETA — EXAM ENGINE
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------ config ------------------------------- */
  const QUESTIONS_PER_EXAM = 20;
  const STORAGE_KEY = 'wonderlic_nfl_state_v1';

  const MODES = {
    core: {
      key: 'core',
      bank: CORE_BANK,
      title: 'Wonderlic 2.0',
      subtitle: 'Cognitive ability — the Combine test',
      timers: [
        { id: 'combine', label: 'Combine pace', detail: '4:48 — the real 12:00-for-50 rate', seconds: 288 },
        { id: 'relaxed', label: 'Study pace', detail: '10:00 — room to think it through', seconds: 600 },
        { id: 'untimed', label: 'Untimed', detail: 'No clock, pure accuracy', seconds: 0 }
      ]
    },
    advanced: {
      key: 'advanced',
      bank: ADVANCED_BANK,
      title: 'Wonderlic 3.0 Beta',
      subtitle: 'Advanced football concepts — coordinator level',
      timers: [
        { id: 'install', label: 'Install pace', detail: '10:00 — meeting-room speed', seconds: 600 },
        { id: 'gameday', label: 'Game day', detail: '6:00 — decide and go', seconds: 360 },
        { id: 'untimed', label: 'Untimed', detail: 'No clock, pure accuracy', seconds: 0 }
      ]
    }
  };

  /* Options that must never be reordered (their sequence carries meaning). */
  const FIXED_OPTION_SETS = [
    'true|false',
    'true|false|not certain',
    'similar|contradictory|neither'
  ];

  /* ---------------------------- persistence ---------------------------- */
  function blankState() {
    return {
      core: { seen: [], recent: [], rounds: 0 },
      advanced: { seen: [], recent: [], rounds: 0 },
      history: []
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return blankState();
      const parsed = JSON.parse(raw);
      const base = blankState();
      ['core', 'advanced'].forEach(function (k) {
        if (parsed[k]) {
          base[k].seen = Array.isArray(parsed[k].seen) ? parsed[k].seen : [];
          base[k].recent = Array.isArray(parsed[k].recent) ? parsed[k].recent : [];
          base[k].rounds = parsed[k].rounds || 0;
        }
      });
      base.history = Array.isArray(parsed.history) ? parsed.history : [];
      return base;
    } catch (e) {
      return blankState();
    }
  }

  function saveState(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  let STATE = loadState();

  /* ----------------------------- utilities ----------------------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  /* Tables live in a scroll box so a wide row can never push the page
     sideways on a phone. */
  function wrapTable(table) {
    const box = el('div', 'tablewrap');
    box.appendChild(table);
    return box;
  }

  function clockText(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  /* ------------------------- question selection -------------------------
     Rule 1: the first five exams in a cycle never repeat a question, so a
             player gets 100 distinct questions before seeing anything twice.
     Rule 2: after the bank is exhausted, every exam is drawn from all 100,
             but the composition is re-rolled each time: the category order
             is shuffled, the per-category counts are random, the question
             order is shuffled, and the answer options are shuffled. The most
             recently used questions are avoided so back-to-back exams do not
             feel like reruns.
     ---------------------------------------------------------------------- */
  function quotaSample(pool, count) {
    if (pool.length <= count) return shuffle(pool);

    const byCat = {};
    pool.forEach(function (q) {
      (byCat[q.cat] = byCat[q.cat] || []).push(q);
    });
    const cats = Object.keys(byCat);
    cats.forEach(function (c) { byCat[c] = shuffle(byCat[c]); });

    // Each sitting gets its own random taste: a per-category weight multiplier
    // re-rolled every exam. Draws are then weighted by how much of a category
    // is still available, so the bank drains evenly (no all-arithmetic final
    // exam at the end of a cycle) while the mix still shifts every time.
    const jitter = {};
    cats.forEach(function (c) { jitter[c] = 0.55 + Math.random() * 1.15; });

    const cap = Math.max(2, Math.ceil(count / 3));
    const used = {};
    const picked = [];

    let guard = 0;
    while (picked.length < count && guard++ < 5000) {
      let live = cats.filter(function (c) {
        return byCat[c].length > 0 && (used[c] || 0) < cap;
      });
      if (!live.length) {
        live = cats.filter(function (c) { return byCat[c].length > 0; });
        if (!live.length) break;
      }

      const weights = live.map(function (c) { return byCat[c].length * jitter[c]; });
      const total = weights.reduce(function (a, b) { return a + b; }, 0);
      let roll = Math.random() * total;
      let chosen = live[live.length - 1];
      for (let i = 0; i < live.length; i++) {
        roll -= weights[i];
        if (roll <= 0) { chosen = live[i]; break; }
      }

      picked.push(byCat[chosen].pop());
      used[chosen] = (used[chosen] || 0) + 1;
    }

    return shuffle(picked);
  }

  function buildExam(modeKey) {
    const mode = MODES[modeKey];
    const prog = STATE[modeKey];
    const seen = new Set(prog.seen);
    const recent = new Set(prog.recent);

    const unseen = mode.bank.filter(function (q) { return !seen.has(q.id); });
    let picked;
    let freshCount;

    if (unseen.length >= QUESTIONS_PER_EXAM) {
      picked = quotaSample(unseen, QUESTIONS_PER_EXAM);
      freshCount = picked.length;
    } else {
      // Take whatever is left unseen, then top up from the full bank while
      // steering clear of the questions used in the last exam.
      picked = unseen.slice();
      freshCount = picked.length;
      const takenIds = new Set(picked.map(function (q) { return q.id; }));
      let refill = mode.bank.filter(function (q) {
        return !takenIds.has(q.id) && !recent.has(q.id);
      });
      if (refill.length < QUESTIONS_PER_EXAM - picked.length) {
        refill = mode.bank.filter(function (q) { return !takenIds.has(q.id); });
      }
      picked = picked.concat(quotaSample(refill, QUESTIONS_PER_EXAM - picked.length));
      picked = shuffle(picked);
    }

    return {
      modeKey: modeKey,
      freshCount: freshCount,
      items: picked.map(function (q) { return prepare(q); })
    };
  }

  function prepare(q) {
    const signature = q.options.map(function (o) { return String(o).toLowerCase(); }).join('|');
    const fixed = FIXED_OPTION_SETS.indexOf(signature) !== -1;

    let order = q.options.map(function (_, i) { return i; });
    if (!fixed) {
      order = shuffle(order);
      // Keep catch-all options in the anchor position where they belong.
      order.sort(function (a, b) {
        return catchAllRank(q.options[a]) - catchAllRank(q.options[b]);
      });
    }

    return {
      ref: q,
      order: order,
      options: order.map(function (i) { return q.options[i]; }),
      correct: order.indexOf(q.answer),
      picked: null,
      flagged: false,
      ms: 0
    };
  }

  function catchAllRank(text) {
    return /^(none of these|all of the above|none of the above|cannot be determined|nothing can be concluded)/i
      .test(String(text)) ? 1 : 0;
  }


  /* ------------------------------ theming ------------------------------
     The interface ships white and neutral. Choosing a team writes that
     club's colors into the custom properties the stylesheet reads, so the
     chrome, accents and highlights all follow. Ink colors are computed from
     contrast rather than hard-coded, which is what keeps white-on-gold
     (Saints, Steelers) legible alongside white-on-navy (Bears, Seahawks).
     -------------------------------------------------------------------- */
  const TEAM_KEY = 'wonderlic_team_v1';

  function hexToRgb(hex) {
    const h = String(hex).replace('#', '');
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16)
    ];
  }

  function toHex(rgb) {
    return '#' + rgb.map(function (v) {
      const c = Math.max(0, Math.min(255, Math.round(v))).toString(16);
      return c.length === 1 ? '0' + c : c;
    }).join('');
  }

  function relLuminance(hex) {
    return hexToRgb(hex).map(function (v) {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }).reduce(function (a, c, i) { return a + c * [0.2126, 0.7152, 0.0722][i]; }, 0);
  }

  function contrast(a, b) {
    const la = relLuminance(a), lb = relLuminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  }

  /* Whichever of white or near-black reads better on this color. */
  function inkFor(hex) {
    return contrast(hex, '#ffffff') >= contrast(hex, '#0d1117') ? '#ffffff' : '#0d1117';
  }

  /* Nudge a color until it clears a contrast target against `ink`, moving away
     from that ink. Powder blue and Saints gold are the reason this exists: as
     shipped they fail AA both as a surface behind white text and as text on
     white, so chrome uses a slightly adjusted variant while the true colors
     stay on the team swatches. */
  function ensureContrast(color, ink, target) {
    const toward = ink === '#ffffff' ? '#000000' : '#ffffff';
    let out = color, guard = 0;
    while (contrast(out, ink) < target && guard++ < 40) out = mix(out, toward, 0.05);
    return out;
  }

  function mix(hex, other, amount) {
    const a = hexToRgb(hex), b = hexToRgb(other);
    return toHex(a.map(function (v, i) { return v + (b[i] - v) * amount; }));
  }

  /* Small highlights need a color with some life in it, so a secondary that
     is basically black, white or silver loses out to the tertiary. */
  function vividness(hex) {
    const rgb = hexToRgb(hex);
    const max = Math.max.apply(null, rgb), min = Math.min.apply(null, rgb);
    const lightness = (max + min) / 2 / 255;
    const sat = max === min ? 0 : (max - min) / (255 - Math.abs(max + min - 255));
    return sat * (1 - Math.abs(lightness - 0.5) * 1.2);
  }

  function pickAccent(team) {
    const options = [team.secondary, team.tertiary, team.primary].filter(Boolean);
    return options.slice().sort(function (a, b) { return vividness(b) - vividness(a); })[0];
  }

  function applyTeam(team) {
    const root = document.documentElement;
    const vars = {};

    if (team) {
      const p = team.primary;
      const accent = pickAccent(team);
      const brandInk = inkFor(p);
      const brandBar = ensureContrast(p, brandInk, 4.5);
      const accentInk = inkFor(accent);
      const accentBar = ensureContrast(accent, accentInk, 4.5);

      vars['--brand'] = p;                                        /* true color */
      vars['--brand-bar'] = brandBar;                             /* surfaces holding text */
      vars['--brand-ink'] = brandInk;
      vars['--brand-text'] = ensureContrast(p, '#ffffff', 4.5);   /* text and lines on white */
      vars['--brand-soft'] = mix(p, '#ffffff', 0.92);
      vars['--brand-soft-2'] = mix(p, '#ffffff', 0.84);
      vars['--brand-line'] = mix(p, '#ffffff', 0.68);
      vars['--accent'] = accent;
      vars['--accent-bar'] = accentBar;
      vars['--accent-ink'] = accentInk;
      /* The wordmark accent sits on the brand bar, so fall back when it would
         disappear against it. */
      vars['--accent-on-bar'] = contrast(accent, brandBar) >= 3.5 ? accent : brandInk;
      vars['--page-tint'] = mix(p, '#ffffff', 0.94);
    }

    Object.keys(vars).forEach(function (k) { root.style.setProperty(k, vars[k]); });
    if (!team) {
      ['--brand', '--brand-bar', '--brand-ink', '--brand-text', '--brand-soft',
       '--brand-soft-2', '--brand-line', '--accent', '--accent-bar', '--accent-ink',
       '--accent-on-bar', '--page-tint']
        .forEach(function (k) { root.style.removeProperty(k); });
    }

    if (team) root.setAttribute('data-team', team.id);
    else root.removeAttribute('data-team');

    const meta = document.getElementById('theme-color');
    if (meta) meta.setAttribute('content', team ? team.primary : '#ffffff');

    renderTeamButton(team);
  }

  function loadTeam() {
    try {
      const id = localStorage.getItem(TEAM_KEY);
      if (!id) return null;
      return TEAMS.filter(function (t) { return t.id === id; })[0] || null;
    } catch (e) { return null; }
  }

  function saveTeam(team) {
    try {
      if (team) localStorage.setItem(TEAM_KEY, team.id);
      else localStorage.removeItem(TEAM_KEY);
    } catch (e) { /* private mode */ }
  }

  let TEAM = loadTeam();

  function renderTeamButton(team) {
    const btn = document.getElementById('btn-team');
    const dot = document.getElementById('btn-team-dot');
    const label = document.getElementById('btn-team-label');
    if (!team) { btn.hidden = true; return; }
    btn.hidden = false;
    dot.style.background = 'linear-gradient(135deg, ' + team.primary + ' 0 50%, ' + team.secondary + ' 50% 100%)';
    label.textContent = team.name;
  }

  function teamSwatch(team, cls) {
    const sw = el('span', cls || 'teamcard__swatch');
    sw.style.setProperty('--p', team.primary);
    sw.style.setProperty('--s', team.secondary);
    return sw;
  }

  /* ------------------------ question zero: the team --------------------- */
  function renderTeamPicker() {
    const host = document.getElementById('team-body');
    host.innerHTML = '';

    host.appendChild(el('p', 'teamscreen__eyebrow', 'Question 1'));
    host.appendChild(el('h1', 'teamscreen__q', 'What\u2019s your favorite team?'));
    host.appendChild(el('p', 'teamscreen__lede',
      'This one is not scored. Pick a club and the whole app takes its colors \u2014 then the actual exam starts.'));

    DIVISIONS.forEach(function (div) {
      const parts = div.split(' ');
      const members = TEAMS.filter(function (t) { return t.conf === parts[0] && t.div === parts[1]; });
      const group = el('section', 'divgroup');
      group.appendChild(el('h2', 'divgroup__head', div));
      const grid = el('div', 'teamgrid');
      members.forEach(function (team) {
        const card = el('button', 'teamcard' + (TEAM && TEAM.id === team.id ? ' is-active' : ''));
        card.type = 'button';
        card.setAttribute('aria-label', team.city + ' ' + team.name);
        card.appendChild(teamSwatch(team));
        const text = el('span', 'teamcard__text');
        text.appendChild(el('span', 'teamcard__city', team.city));
        text.appendChild(el('span', 'teamcard__name', team.name));
        card.appendChild(text);
        card.addEventListener('click', function () { chooseTeam(team); });
        grid.appendChild(card);
      });
      group.appendChild(grid);
      host.appendChild(grid.children.length ? group : el('span'));
    });

    const skip = el('button', 'teamskip', TEAM ? 'Clear my team and keep it neutral' : 'No favorite \u2014 keep it neutral');
    skip.type = 'button';
    skip.addEventListener('click', function () { chooseTeam(null); });
    host.appendChild(skip);
  }

  function chooseTeam(team) {
    TEAM = team;
    saveTeam(team);
    applyTeam(team);
    renderHome(currentMode);
    show('home');
  }

  /* ------------------------------ screens ------------------------------ */
  const screens = {
    team: document.getElementById('screen-team'),
    home: document.getElementById('screen-home'),
    exam: document.getElementById('screen-exam'),
    results: document.getElementById('screen-results')
  };

  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle('is-active', k === name);
    });
    // On a phone the exam hides the site bar to give the question the screen.
    document.body.classList.toggle('is-exam', name === 'exam');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  /* ------------------------------- home -------------------------------- */
  let selectedTimer = { core: 'combine', advanced: 'install' };
  let currentMode = 'core';

  function renderHome(modeKey) {
    currentMode = modeKey;
    const mode = MODES[modeKey];
    const prog = STATE[modeKey];
    const host = document.getElementById('home-body');
    host.innerHTML = '';

    document.querySelectorAll('[data-mode-tab]').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.modeTab === modeKey);
    });

    const unseen = mode.bank.filter(function (q) { return prog.seen.indexOf(q.id) === -1; }).length;
    const freshExams = Math.floor(unseen / QUESTIONS_PER_EXAM);

    const hero = el('div', 'hero');
    if (TEAM) {
      const chip = el('button', 'hero__team');
      chip.type = 'button';
      chip.appendChild(teamSwatch(TEAM));
      chip.appendChild(el('span', null, TEAM.city + ' ' + TEAM.name));
      chip.appendChild(el('span', null, '\u00b7 change'));
      chip.addEventListener('click', openTeamPicker);
      hero.appendChild(chip);
    }
    hero.appendChild(el('p', 'hero__eyebrow', mode.subtitle));
    hero.appendChild(el('h1', 'hero__title', mode.title));

    const blurb = el('p', 'hero__lede');
    blurb.textContent = modeKey === 'core'
      ? 'Twenty questions drawn from a bank of ' + mode.bank.length + '. No answers, no feedback, no going back to a graded question until the whole thing is over — then every single item gets walked through, and your score gets stacked against the NFL players whose Combine numbers leaked.'
      : 'The beta. Twenty questions drawn from a bank of ' + mode.bank.length + ' on coverage structure, run fits, blocking schemes, route concepts, protection math, rules minutiae, clock management and cap mechanics. This is not a cognitive test — it is a football IQ test, and it is meant to be hard.';
    hero.appendChild(blurb);
    host.appendChild(hero);

    // Fresh-question tracker
    const tracker = el('div', 'panel');
    tracker.appendChild(el('h2', 'panel__title', 'Your question bank'));

    const bar = el('div', 'bankbar');
    const fill = el('div', 'bankbar__fill');
    fill.style.width = ((mode.bank.length - unseen) / mode.bank.length * 100) + '%';
    bar.appendChild(fill);
    tracker.appendChild(bar);

    const stats = el('div', 'statrow');
    stats.appendChild(stat(unseen, 'questions never shown to you'));
    stats.appendChild(stat(prog.rounds, 'exams completed'));
    stats.appendChild(stat(freshExams, 'all-new exams left in this cycle'));
    tracker.appendChild(stats);

    const note = el('p', 'panel__note');
    note.textContent = unseen >= QUESTIONS_PER_EXAM
      ? 'Your next exam is guaranteed to be ' + QUESTIONS_PER_EXAM + ' questions you have never seen.'
      : 'The bank is spent, so exams now pull from all ' + mode.bank.length + ' questions. The category mix, the question order and the answer order are re-rolled every time, and whatever you just saw is pushed to the back of the line — no two sittings are built the same.';
    tracker.appendChild(note);

    if (prog.seen.length) {
      const reset = el('button', 'btn btn--ghost btn--small', 'Reset this bank');
      reset.addEventListener('click', function () {
        if (confirm('Clear your seen-question history for ' + mode.title + '? Your next five exams will be all-new again.')) {
          STATE[modeKey] = { seen: [], recent: [], rounds: 0 };
          saveState(STATE);
          renderHome(modeKey);
        }
      });
      tracker.appendChild(reset);
    }
    host.appendChild(tracker);

    // Timer choice
    const timing = el('div', 'panel');
    timing.appendChild(el('h2', 'panel__title', 'Set the clock'));
    const opts = el('div', 'choices');
    mode.timers.forEach(function (t) {
      const b = el('button', 'choice' + (selectedTimer[modeKey] === t.id ? ' is-active' : ''));
      b.appendChild(el('span', 'choice__label', t.label));
      b.appendChild(el('span', 'choice__detail', t.detail));
      b.addEventListener('click', function () {
        selectedTimer[modeKey] = t.id;
        renderHome(modeKey);
      });
      opts.appendChild(b);
    });
    timing.appendChild(opts);
    host.appendChild(timing);

    const start = el('button', 'btn btn--primary btn--big', 'Start ' + mode.title);
    start.addEventListener('click', function () { startExam(modeKey); });
    host.appendChild(start);

    // Rules of engagement
    const rules = el('div', 'panel panel--quiet');
    rules.appendChild(el('h2', 'panel__title', 'How it works'));
    const ul = el('ul', 'bullets');
    [
      'Twenty questions, one screen at a time. You can move backward and change anything until you submit.',
      'No score, no right answers and no hints until the exam is over. That is the whole point.',
      'Flag anything you want to come back to; the navigator at the bottom shows what is answered, flagged or blank.',
      'When the clock hits zero the exam submits itself with whatever you have.',
      'Keyboard: 1-5 picks an answer, arrow keys move, F flags, Enter advances.'
    ].forEach(function (t) { ul.appendChild(el('li', null, t)); });
    rules.appendChild(ul);
    host.appendChild(rules);

    if (STATE.history.length) host.appendChild(renderHistory());
  }

  function stat(value, label) {
    const box = el('div', 'stat');
    box.appendChild(el('div', 'stat__value', String(value)));
    box.appendChild(el('div', 'stat__label', label));
    return box;
  }

  function renderHistory() {
    const panel = el('div', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Your history'));
    const table = el('table', 'table');
    const thead = el('thead');
    const hr = el('tr');
    ['Date', 'Exam', 'Raw', 'Projected /50', 'Time'].forEach(function (h) { hr.appendChild(el('th', null, h)); });
    thead.appendChild(hr); table.appendChild(thead);
    const tb = el('tbody');
    STATE.history.slice().reverse().slice(0, 10).forEach(function (h) {
      const tr = el('tr');
      tr.appendChild(el('td', null, new Date(h.ts).toLocaleDateString()));
      tr.appendChild(el('td', null, h.mode === 'core' ? 'Wonderlic 2.0' : '3.0 Beta'));
      tr.appendChild(el('td', null, h.raw + '/' + h.total));
      tr.appendChild(el('td', null, h.mode === 'core' ? String(h.projected) : '—'));
      tr.appendChild(el('td', null, clockText(h.seconds)));
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    panel.appendChild(wrapTable(table));
    return panel;
  }

  /* ------------------------------- exam -------------------------------- */
  let EXAM = null;

  function startExam(modeKey) {
    const mode = MODES[modeKey];
    const timerDef = mode.timers.filter(function (t) { return t.id === selectedTimer[modeKey]; })[0];
    const built = buildExam(modeKey);

    EXAM = {
      modeKey: modeKey,
      items: built.items,
      freshCount: built.freshCount,
      index: 0,
      limit: timerDef.seconds,
      startedAt: Date.now(),
      questionEnteredAt: Date.now(),
      finished: false,
      ticker: null
    };

    document.getElementById('exam-title').textContent = mode.title;
    show('exam');
    renderQuestion();
    startTicker();
  }

  function startTicker() {
    const out = document.getElementById('exam-clock');
    function tick() {
      if (!EXAM || EXAM.finished) return;
      const elapsed = (Date.now() - EXAM.startedAt) / 1000;
      if (!EXAM.limit) {
        out.textContent = clockText(elapsed);
        out.classList.remove('is-warning', 'is-critical');
        return;
      }
      const left = EXAM.limit - elapsed;
      out.textContent = clockText(left);
      out.classList.toggle('is-warning', left <= 60 && left > 20);
      out.classList.toggle('is-critical', left <= 20);
      if (left <= 0) finishExam(true);
    }
    tick();
    EXAM.ticker = setInterval(tick, 250);
  }

  function stampTime() {
    if (!EXAM) return;
    const item = EXAM.items[EXAM.index];
    item.ms += Date.now() - EXAM.questionEnteredAt;
    EXAM.questionEnteredAt = Date.now();
  }

  function renderQuestion() {
    const item = EXAM.items[EXAM.index];
    const q = item.ref;
    const host = document.getElementById('exam-body');
    host.innerHTML = '';

    document.getElementById('exam-progress-fill').style.width =
      ((EXAM.index) / EXAM.items.length * 100) + '%';
    document.getElementById('exam-counter').textContent =
      'Question ' + (EXAM.index + 1) + ' of ' + EXAM.items.length;

    const card = el('article', 'qcard');
    const head = el('div', 'qcard__head');
    head.appendChild(el('span', 'tag', q.cat));
    const flagBtn = el('button', 'flagbtn' + (item.flagged ? ' is-on' : ''), item.flagged ? 'Flagged' : 'Flag');
    flagBtn.addEventListener('click', function () { toggleFlag(); });
    head.appendChild(flagBtn);
    card.appendChild(head);

    card.appendChild(el('h2', 'qcard__stem', q.q));
    if (q.pre) card.appendChild(el('pre', 'qcard__pre', q.pre));

    const list = el('div', 'answers');
    item.options.forEach(function (text, i) {
      const b = el('button', 'answer' + (item.picked === i ? ' is-picked' : ''));
      b.appendChild(el('span', 'answer__key', String(i + 1)));
      b.appendChild(el('span', 'answer__text', text));
      b.addEventListener('click', function () { pick(i); });
      list.appendChild(b);
    });
    card.appendChild(list);

    const clearRow = el('div', 'qcard__foot');
    if (item.picked !== null) {
      const clear = el('button', 'btn btn--ghost btn--small', 'Clear answer');
      clear.addEventListener('click', function () { item.picked = null; renderQuestion(); });
      clearRow.appendChild(clear);
    }
    card.appendChild(clearRow);
    host.appendChild(card);

    // Navigator
    const nav = el('div', 'navgrid');
    EXAM.items.forEach(function (it, i) {
      const dot = el('button', 'navdot', String(i + 1));
      if (i === EXAM.index) dot.classList.add('is-current');
      if (it.picked !== null) dot.classList.add('is-answered');
      if (it.flagged) dot.classList.add('is-flagged');
      dot.addEventListener('click', function () { goTo(i); });
      nav.appendChild(dot);
    });
    host.appendChild(nav);

    const prev = document.getElementById('btn-prev');
    const next = document.getElementById('btn-next');
    prev.disabled = EXAM.index === 0;
    next.textContent = EXAM.index === EXAM.items.length - 1 ? 'Submit exam' : 'Next';
    next.classList.toggle('btn--primary', EXAM.index === EXAM.items.length - 1);

    const blanks = EXAM.items.filter(function (i) { return i.picked === null; }).length;
    document.getElementById('exam-blanks').textContent =
      blanks === 0 ? 'All answered' : blanks + ' unanswered';
  }

  function pick(i) {
    const item = EXAM.items[EXAM.index];
    item.picked = i;
    renderQuestion();
  }

  function toggleFlag() {
    EXAM.items[EXAM.index].flagged = !EXAM.items[EXAM.index].flagged;
    renderQuestion();
  }

  function goTo(i) {
    if (i < 0 || i >= EXAM.items.length) return;
    stampTime();
    EXAM.index = i;
    renderQuestion();
  }

  function nextQuestion() {
    if (EXAM.index === EXAM.items.length - 1) {
      const blanks = EXAM.items.filter(function (i) { return i.picked === null; }).length;
      if (blanks && !confirm(blanks + ' question' + (blanks > 1 ? 's are' : ' is') + ' still blank. Submit anyway?')) return;
      finishExam(false);
      return;
    }
    goTo(EXAM.index + 1);
  }

  function finishExam(auto) {
    if (!EXAM || EXAM.finished) return;
    stampTime();
    EXAM.finished = true;
    clearInterval(EXAM.ticker);

    const seconds = Math.min(
      EXAM.limit || Infinity,
      Math.round((Date.now() - EXAM.startedAt) / 1000)
    );

    const prog = STATE[EXAM.modeKey];
    const ids = EXAM.items.map(function (i) { return i.ref.id; });
    ids.forEach(function (id) { if (prog.seen.indexOf(id) === -1) prog.seen.push(id); });
    prog.recent = ids;
    prog.rounds += 1;

    const raw = EXAM.items.filter(function (i) { return i.picked === i.correct; }).length;
    const projected = Math.round(raw * 2.5);

    STATE.history.push({
      ts: Date.now(), mode: EXAM.modeKey, raw: raw,
      total: EXAM.items.length, projected: projected, seconds: seconds
    });
    saveState(STATE);

    renderResults({ raw: raw, projected: projected, seconds: seconds, auto: auto });
  }

  /* ------------------------------ results ------------------------------ */
  function renderResults(summary) {
    const host = document.getElementById('results-body');
    host.innerHTML = '';
    const isCore = EXAM.modeKey === 'core';
    const raw = summary.raw;
    const total = EXAM.items.length;

    /* --- headline --- */
    const head = el('section', 'panel panel--score');
    head.appendChild(el('p', 'panel__eyebrow', MODES[EXAM.modeKey].title + ' — complete'));
    if (summary.auto) head.appendChild(el('p', 'flash', 'Time expired. Your exam was submitted automatically.'));

    const scoreRow = el('div', 'scorerow');
    scoreRow.appendChild(bigStat(raw + '/' + total, 'Raw score'));
    if (isCore) scoreRow.appendChild(bigStat(String(summary.projected), 'Projected 50-question Wonderlic'));
    scoreRow.appendChild(bigStat(Math.round(raw / total * 100) + '%', 'Accuracy'));
    scoreRow.appendChild(bigStat(clockText(summary.seconds), 'Time used'));
    head.appendChild(scoreRow);

    const verdict = isCore ? coreVerdict(summary.projected) : advancedVerdict(raw);
    const vbox = el('div', 'verdict');
    vbox.appendChild(el('h2', 'verdict__title', verdict.title));
    vbox.appendChild(el('p', 'verdict__text', verdict.text));
    head.appendChild(vbox);

    if (isCore) {
      head.appendChild(el('p', 'panel__note',
        'The real test is 50 questions in 12 minutes. This one is 20, so your raw score is multiplied by 2.5 to put it on the same scale the Combine numbers below use.'));
    }
    host.appendChild(head);

    /* --- NFL comparison (core exam only) --- */
    if (isCore) {
      host.appendChild(renderComparison(summary.projected));
      host.appendChild(renderBenchmarks(summary.projected));
      host.appendChild(renderPositionTable(summary.projected));
    }

    /* --- category breakdown --- */
    host.appendChild(renderBreakdown());

    /* --- full walkthrough --- */
    host.appendChild(renderWalkthrough());

    /* --- player database (core exam only) --- */
    if (isCore) host.appendChild(renderPlayerList(summary.projected));

    /* --- next step --- */
    host.appendChild(renderNextStep(isCore));

    show('results');
  }

  function bigStat(value, label) {
    const box = el('div', 'bigstat');
    box.appendChild(el('div', 'bigstat__value', value));
    box.appendChild(el('div', 'bigstat__label', label));
    return box;
  }

  function coreVerdict(p) {
    if (p >= 45) return { title: 'Pat McInally territory', text: 'A score in this range is the rarest result in Combine history. Only one player is publicly known to have hit 50, and he said it made teams suspicious of him.' };
    if (p >= 38) return { title: 'Front office material', text: 'You are in the neighborhood of Eli Manning, Matthew Stafford and Calvin Johnson — the top of the leaked-score list among players who actually starred.' };
    if (p >= 30) return { title: 'Day one starter', text: 'Comfortably above the quarterback average and roughly where Tom Brady, Kirk Cousins and Aaron Rodgers reportedly landed. Teams stop asking questions at this number.' };
    if (p >= 24) return { title: 'Right on the quarterback line', text: 'The commonly cited average for NFL quarterbacks is about 24 and the general population averages about 20. You are at or above the position bar.' };
    if (p >= 18) return { title: 'League average', text: 'This is the middle of the NFL distribution — the same range as Brett Favre, Michael Vick and Cam Newton. It has never stopped anybody from being great.' };
    if (p >= 12) return { title: 'Bradshaw and Marino country', text: 'Four Super Bowls and 5,084 yards in a season came out of this range. The test measures a narrow slice of processing speed, and this is the proof.' };
    return { title: 'The test got you', text: 'Low scores here say more about clock pressure and arithmetic under duress than about football. Frank Gore reportedly scored a 6 and rushed for over 16,000 yards. Run it back and watch the walkthrough below.' };
  }

  function advancedVerdict(raw) {
    if (raw >= 19) return { title: 'Coordinator', text: 'You are diagnosing structure, not memorizing terms. Coverage rules, run fits and protection math are all living in the same place in your head.' };
    if (raw >= 16) return { title: 'Ten-year starter', text: 'Strong command of scheme. The gaps that showed up are the fine print — the stuff that separates a good film study session from a great one.' };
    if (raw >= 12) return { title: 'Rotational starter', text: 'You know the concepts by name and get most of the why. Push on the categories you missed below and this climbs fast.' };
    if (raw >= 8) return { title: 'Practice squad', text: 'The vocabulary is there; the underlying rules are not yet. Read every walkthrough below — that is the actual install.' };
    return { title: 'Rookie minicamp', text: 'This bank is deliberately brutal. Nothing here is common knowledge, so treat the walkthrough below as the playbook rather than a scorecard.' };
  }

  function renderComparison(projected) {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Where you land among the NFL scores'));

    const below = NFL_SCORES.filter(function (p) { return p.score < projected; });
    const tied = NFL_SCORES.filter(function (p) { return p.score === projected; });
    const above = NFL_SCORES.filter(function (p) { return p.score > projected; });

    const sum = el('p', 'panel__lede');
    sum.textContent = 'Your projected ' + projected + ' beats ' + below.length + ' of the ' +
      NFL_SCORES.length + ' reported scores in this database' +
      (tied.length ? ', ties ' + tied.length + ' (' + tied.map(function (p) { return p.name; }).join(', ') + ')' : '') +
      ' and trails ' + above.length + '.';
    panel.appendChild(sum);

    // Nearest neighbours above and below
    const neighbours = el('div', 'neighbours');
    const lower = below.length ? below[0] : null;           // list is sorted desc
    const upper = above.length ? above[above.length - 1] : null;
    if (upper) neighbours.appendChild(neighbourCard('Just ahead of you', upper));
    neighbours.appendChild(neighbourCard('You', { name: 'Your score', score: projected, pos: '—', college: '—', era: 'today', fact: '' }, true));
    if (lower) neighbours.appendChild(neighbourCard('Just behind you', lower));
    panel.appendChild(neighbours);

    // Scale
    const scale = el('div', 'scale');
    NFL_SCORES.forEach(function (p) {
      const row = el('div', 'scale__row');
      row.appendChild(el('span', 'scale__name', p.name));
      const track = el('span', 'scale__track');
      const barFill = el('span', 'scale__bar');
      barFill.style.width = (p.score / 50 * 100) + '%';
      track.appendChild(barFill);
      row.appendChild(track);
      row.appendChild(el('span', 'scale__num', String(p.score)));
      if (p.score <= projected) row.classList.add('is-beaten');
      scale.appendChild(row);
    });
    const you = el('div', 'scale__row is-you');
    you.appendChild(el('span', 'scale__name', 'YOU'));
    const yTrack = el('span', 'scale__track');
    const yBar = el('span', 'scale__bar');
    yBar.style.width = (Math.min(projected, 50) / 50 * 100) + '%';
    yTrack.appendChild(yBar);
    you.appendChild(yTrack);
    you.appendChild(el('span', 'scale__num', String(projected)));
    // insert in rank order
    const rows = Array.prototype.slice.call(scale.children);
    let placed = false;
    for (let i = 0; i < rows.length; i++) {
      if (NFL_SCORES[i].score < projected) { scale.insertBefore(you, rows[i]); placed = true; break; }
    }
    if (!placed) scale.appendChild(you);
    panel.appendChild(scale);

    panel.appendChild(disclaimer());
    return panel;
  }

  function neighbourCard(label, p, isYou) {
    const card = el('div', 'ncard' + (isYou ? ' ncard--you' : ''));
    card.appendChild(el('p', 'ncard__label', label));
    card.appendChild(el('p', 'ncard__score', String(p.score)));
    card.appendChild(el('p', 'ncard__name', p.name));
    if (!isYou) card.appendChild(el('p', 'ncard__meta', p.pos + ' • ' + p.college));
    return card;
  }

  function renderBenchmarks(projected) {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Reference points'));
    const list = el('div', 'benchgrid');
    BENCHMARKS.forEach(function (b) {
      const card = el('div', 'bench');
      card.appendChild(el('div', 'bench__value', String(b.value)));
      card.appendChild(el('div', 'bench__label', b.label));
      const delta = projected - b.value;
      const tag = el('div', 'bench__delta', delta === 0 ? 'even' : (delta > 0 ? '+' + delta : String(delta)));
      tag.classList.add(delta >= 0 ? 'is-up' : 'is-down');
      card.appendChild(tag);
      list.appendChild(card);
    });
    panel.appendChild(list);
    return panel;
  }

  function renderPositionTable(projected) {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Commonly cited position averages'));
    panel.appendChild(el('p', 'panel__lede', 'Positions you would grade out at or above are highlighted.'));
    const table = el('table', 'table');
    const tb = el('tbody');
    POSITION_AVERAGES.forEach(function (p) {
      const tr = el('tr');
      if (projected >= p.avg) tr.classList.add('is-beaten');
      tr.appendChild(el('td', null, p.pos));
      tr.appendChild(el('td', null, String(p.avg)));
      tr.appendChild(el('td', null, projected >= p.avg ? 'You clear it' : 'Short by ' + (p.avg - projected)));
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    panel.appendChild(wrapTable(table));
    return panel;
  }

  function renderBreakdown() {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Category breakdown'));
    const agg = {};
    EXAM.items.forEach(function (it) {
      const c = it.ref.cat;
      agg[c] = agg[c] || { right: 0, total: 0, ms: 0 };
      agg[c].total += 1;
      agg[c].ms += it.ms;
      if (it.picked === it.correct) agg[c].right += 1;
    });
    const table = el('table', 'table');
    const thead = el('thead'); const hr = el('tr');
    ['Category', 'Correct', 'Rate', 'Avg time'].forEach(function (h) { hr.appendChild(el('th', null, h)); });
    thead.appendChild(hr); table.appendChild(thead);
    const tb = el('tbody');
    Object.keys(agg).sort().forEach(function (c) {
      const a = agg[c];
      const tr = el('tr');
      tr.appendChild(el('td', null, c));
      tr.appendChild(el('td', null, a.right + '/' + a.total));
      tr.appendChild(el('td', null, Math.round(a.right / a.total * 100) + '%'));
      tr.appendChild(el('td', null, (a.ms / a.total / 1000).toFixed(1) + 's'));
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    panel.appendChild(wrapTable(table));
    return panel;
  }

  function renderWalkthrough() {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'Every question, walked through'));
    panel.appendChild(el('p', 'panel__lede', 'This is the part that actually moves your score. Each item shows what you chose, what the answer is, and why.'));

    EXAM.items.forEach(function (it, i) {
      const q = it.ref;
      const right = it.picked === it.correct;
      const blank = it.picked === null;

      const card = el('article', 'review' + (right ? ' is-right' : (blank ? ' is-blank' : ' is-wrong')));
      const head = el('div', 'review__head');
      head.appendChild(el('span', 'review__num', 'Q' + (i + 1)));
      head.appendChild(el('span', 'tag', q.cat));
      head.appendChild(el('span', 'review__mark', right ? 'Correct' : (blank ? 'Left blank' : 'Incorrect')));
      head.appendChild(el('span', 'review__time', (it.ms / 1000).toFixed(1) + 's'));
      card.appendChild(head);

      card.appendChild(el('h3', 'review__stem', q.q));
      if (q.pre) card.appendChild(el('pre', 'qcard__pre', q.pre));

      const list = el('ul', 'review__options');
      it.options.forEach(function (text, idx) {
        const li = el('li', 'review__option');
        const marks = [];
        if (idx === it.correct) { li.classList.add('is-correct'); marks.push('Correct answer'); }
        if (idx === it.picked && idx !== it.correct) { li.classList.add('is-chosen'); marks.push('Your answer'); }
        if (idx === it.picked && idx === it.correct) marks.push('Your answer');
        li.appendChild(el('span', 'review__optiontext', text));
        if (marks.length) li.appendChild(el('span', 'review__badge', marks.join(' • ')));
        list.appendChild(li);
      });
      card.appendChild(list);

      const why = el('div', 'why');
      why.appendChild(el('span', 'why__label', 'Why'));
      why.appendChild(el('p', 'why__text', q.why));
      card.appendChild(why);

      panel.appendChild(card);
    });
    return panel;
  }

  function renderPlayerList(projected) {
    const panel = el('section', 'panel');
    panel.appendChild(el('h2', 'panel__title', 'The leaked scores, player by player'));
    panel.appendChild(el('p', 'panel__lede', 'Every reported score in the database, highest first, with what the player actually did on a football field. Rows you out-scored are marked.'));

    NFL_SCORES.forEach(function (p) {
      const card = el('article', 'player' + (projected >= p.score ? ' is-beaten' : ''));
      const top = el('div', 'player__top');
      const s = el('div', 'player__score', String(p.score));
      top.appendChild(s);
      const id = el('div', 'player__id');
      id.appendChild(el('h3', 'player__name', p.name));
      id.appendChild(el('p', 'player__meta', p.pos + ' • ' + p.college + ' • ' + p.era));
      top.appendChild(id);
      if (projected >= p.score) top.appendChild(el('span', 'player__flag', 'You beat this'));
      card.appendChild(top);
      card.appendChild(el('p', 'player__fact', p.fact));
      panel.appendChild(card);
    });

    panel.appendChild(disclaimer());
    return panel;
  }

  function disclaimer() {
    const d = el('p', 'disclaimer');
    d.textContent = 'On the record: the NFL and Wonderlic have never officially published individual scores. Every number here comes from figures that leaked to reporters at the Combine and have been repeated ever since. Several are disputed, some players have denied theirs, and a few retested with different results. Treat it as well-documented folklore, not an official transcript.';
    return d;
  }

  function renderNextStep(isCore) {
    const panel = el('section', 'panel panel--cta');
    if (isCore) {
      panel.appendChild(el('h2', 'panel__title', 'That was the easy one. Want Wonderlic 3.0 Beta?'));
      panel.appendChild(el('p', 'panel__lede',
        'Wonderlic 3.0 Beta throws out arithmetic and analogies and tests football itself — match-quarters rules, Tite fronts, Counter GT, Dagger versus single high, simulated pressures, the one-yard ineligible downfield rule, victory formation math and cap proration. Twenty questions from a bank of ' +
        ADVANCED_BANK.length + ', graded on a coordinator scale, with the same full walkthrough at the end.'));
      const row = el('div', 'ctarow');
      const yes = el('button', 'btn btn--primary btn--big', 'Yes — take Wonderlic 3.0 Beta');
      yes.addEventListener('click', function () { STATE = loadState(); renderHome('advanced'); show('home'); });
      row.appendChild(yes);
      const again = el('button', 'btn btn--ghost btn--big', 'Not yet — retake 2.0');
      again.addEventListener('click', function () { renderHome('core'); show('home'); });
      row.appendChild(again);
      panel.appendChild(row);
    } else {
      panel.appendChild(el('h2', 'panel__title', 'Run it back'));
      panel.appendChild(el('p', 'panel__lede', 'The beta bank holds ' + ADVANCED_BANK.length +
        ' questions, so there are fresh sittings left before anything repeats — and the mix is re-rolled every time regardless.'));
      const row = el('div', 'ctarow');
      const again = el('button', 'btn btn--primary btn--big', 'Another 3.0 Beta exam');
      again.addEventListener('click', function () { renderHome('advanced'); show('home'); });
      row.appendChild(again);
      const back = el('button', 'btn btn--ghost btn--big', 'Back to Wonderlic 2.0');
      back.addEventListener('click', function () { renderHome('core'); show('home'); });
      row.appendChild(back);
      panel.appendChild(row);
    }
    return panel;
  }

  /* ------------------------------ wiring ------------------------------- */
  document.getElementById('btn-prev').addEventListener('click', function () { goTo(EXAM.index - 1); });
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  document.getElementById('btn-quit').addEventListener('click', function () {
    if (!EXAM) { renderHome('core'); show('home'); return; }
    if (confirm('Leave this exam? Your answers will be discarded and the questions will stay unseen.')) {
      clearInterval(EXAM.ticker);
      EXAM.finished = true;
      EXAM = null;
      renderHome('core');
      show('home');
    }
  });
  document.querySelectorAll('[data-mode-tab]').forEach(function (b) {
    b.addEventListener('click', function () { renderHome(b.dataset.modeTab); show('home'); });
  });
  document.getElementById('btn-team').addEventListener('click', openTeamPicker);

  function openTeamPicker() {
    if (EXAM && !EXAM.finished) return;
    renderTeamPicker();
    show('team');
  }
  document.getElementById('btn-home').addEventListener('click', function () {
    renderHome('core'); show('home');
  });

  document.addEventListener('keydown', function (e) {
    if (!screens.exam.classList.contains('is-active') || !EXAM || EXAM.finished) return;
    const item = EXAM.items[EXAM.index];
    if (e.key >= '1' && e.key <= '9') {
      const i = parseInt(e.key, 10) - 1;
      if (i < item.options.length) { pick(i); e.preventDefault(); }
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      nextQuestion(); e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      goTo(EXAM.index - 1); e.preventDefault();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFlag(); e.preventDefault();
    }
  });

  window.addEventListener('beforeunload', function (e) {
    if (EXAM && !EXAM.finished) { e.preventDefault(); e.returnValue = ''; }
  });

  /* Question 1 comes before anything else: the interface stays white until a
     team is chosen, then takes that club's colors for the rest of the visit. */
  applyTeam(TEAM);
  renderHome('core');
  if (TEAM) show('home'); else { renderTeamPicker(); show('team'); }
})();

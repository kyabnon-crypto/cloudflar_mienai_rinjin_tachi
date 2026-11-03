/*
 * みつけて、となりびと ― ゲーム本体
 * 依存：js/episodes.js（NEIGHBORS, LINKS_COMMON）
 */
(() => {
  'use strict';

  // 旧Service Workerとキャッシュをバックグラウンドで静かに解除（リロードは一切しない）
  try {
    if ('caches' in window) {
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister())).catch(() => {});
    }
  } catch (e) {}

  const SAVE_KEY = 'mitsukete_tonaribito_v1';
  const THEME_BGM = 'assets/audio/theme_bgm.m4a'; // 月舟のゆりかご
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // ---------- 保存 ----------
  const save = loadSave();
  function loadSave() {
    try {
      return Object.assign({ found: {}, sound: true }, JSON.parse(localStorage.getItem(SAVE_KEY) || '{}'));
    } catch (e) {
      return { found: {}, sound: true };
    }
  }
  function writeSave() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* 容量・プライベートモード */ }
  }
  const foundCount = () => NEIGHBORS.filter((n) => save.found[n.id]).length;

  // ---------- 音 ----------
  const bgm = $('#bgm');
  bgm.volume = 0.45;
  function setBgm(src) {
    if (!src) return;
    if (!bgm.src.endsWith(src)) bgm.src = src;
    if (save.sound) bgm.play().catch(() => {});
  }
  function stopBgm() {
    bgm.pause();
    try { bgm.currentTime = 0; } catch (e) {}
  }

  // ---------- 画面切り替え ----------
  let current = 'title';
  function show(name) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#screen-' + name).classList.add('active');
    current = name;
    if (name === 'play') startLoop(); else stopLoop();
    if (name === 'title') stopBgm();
  }
  function updateSoundIcons() {
    $$('.btn-sound').forEach((b) => { b.textContent = save.sound ? '🔈' : '🔇'; });
  }
  $$('.btn-sound').forEach((b) => b.addEventListener('click', () => {
    save.sound = !save.sound;
    writeSave();
    updateSoundIcons();
    if (save.sound) bgm.play().catch(() => {}); else bgm.pause();
  }));
  updateSoundIcons();

  // ---------- モーダル ----------
  function openModal(html, onClose) {
    $('#modal-body').innerHTML = html;
    $('#modal').classList.remove('hidden');
    $('#modal-close').onclick = () => {
      $('#modal').classList.add('hidden');
      if (onClose) onClose();
    };
  }
  function closeModal() { $('#modal').classList.add('hidden'); }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---------- タイトル ----------
  $('#btn-start').addEventListener('click', () => {
    openMap();
  });

  // ---------- マップ ----------
  function openMap(justLitId) {
    setBgm(THEME_BGM);
    renderMap(justLitId);
    show('map');
    // 遊べる灯り（または今ともった灯り）が見えるようにスクロール
    requestAnimationFrame(() => {
      const target = NEIGHBORS.find((n) => n.id === justLitId) || NEIGHBORS.find((n) => n.playable && !save.found[n.id]) || NEIGHBORS.find((n) => n.playable);
      const sc = $('.map-scroll');
      const map = $('#map');
      if (target && map.offsetHeight) {
        sc.scrollTop = Math.max(0, map.offsetHeight * target.map.y / 100 - sc.clientHeight / 2);
        sc.scrollLeft = Math.max(0, map.offsetWidth * target.map.x / 100 - sc.clientWidth / 2);
      }
    });
  }

  function renderMap(justLitId) {
    const wrap = $('#map-spots');
    wrap.innerHTML = '';
    NEIGHBORS.forEach((n) => {
      const b = document.createElement('button');
      b.className = 'spot';
      if (save.found[n.id]) b.classList.add('lit');
      else if (n.playable) b.classList.add('playable');
      b.style.left = n.map.x + '%';
      b.style.top = n.map.y + '%';
      b.setAttribute('aria-label', '第' + n.id + '夜');
      b.innerHTML = '<span class="spot-dot"></span><span class="spot-label">第' + n.id + '夜' + (save.found[n.id] ? ' ' + esc(n.name) : '') + '</span>';
      b.addEventListener('click', () => onSpot(n));
      wrap.appendChild(b);
      if (n.id === justLitId) {
        b.animate([{ transform: 'translate(-50%,-50%) scale(.2)', opacity: 0 }, { transform: 'translate(-50%,-50%) scale(1.6)', opacity: 1 }, { transform: 'translate(-50%,-50%) scale(1)' }], { duration: 1400, easing: 'ease-out' });
      }
    });
    $('#map-count').textContent = '灯り ' + foundCount() + ' / ' + NEIGHBORS.length;
  }

  function onSpot(n) {
    if (n.playable) {
      if (save.found[n.id]) {
        openModal(
          '<h3>第' + n.id + '夜　' + esc(n.name) + '</h3><p class="m-sub">' + esc(n.title) + '</p>' +
          '<img class="m-img" src="' + n.portrait + '" alt="">' +
          '<button class="btn btn-primary" id="m-replay">もう一度さがす</button>' +
          '<button class="btn btn-ghost" id="m-book">絵本をよむ</button>'
        );
        $('#m-replay').onclick = () => { closeModal(); openIntro(n); };
        $('#m-book').onclick = () => { closeModal(); openBook(n, false); };
      } else {
        openIntro(n);
      }
    } else {
      openModal(
        '<p class="m-sub">第' + n.id + '夜</p><h3>？？？</h3>' +
        '<p class="m-quote">' + esc(n.title) + '</p>' +
        '<p class="m-sub">この場所の灯りは、まだ消えたまま。<br>近日、隣人がやってきます。</p>'
      );
    }
  }

  $$('.btn-back-map').forEach((b) => b.addEventListener('click', () => openMap()));
  const btnBackTitle = $('#btn-back-title');
  if (btnBackTitle) btnBackTitle.addEventListener('click', () => show('title'));
  $('#btn-zukan').addEventListener('click', openZukan);

  // ---------- イントロ ----------
  let ep = null;        // 遊んでいる隣人
  let stageIdx = 0;

  function openIntro(n) {
    ep = n;
    setBgm(n.bgm);
    $('#intro-night').textContent = '第' + n.id + '夜';
    $('#intro-title').textContent = n.title;
    $('#intro-text').textContent = n.intro;
    show('intro');
  }
  $('#btn-intro-go').addEventListener('click', () => { stageIdx = 0; startStage(); });

  // ---------- さがす ----------
  const stageEl = $('#stage');
  const canvas = $('#dark');
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, DPR = 1;
  let light = { x: 0.5, y: 0.55 };          // 0〜1
  let targets = [];                          // { def, el, found }
  let hint = null;                           // { x, y, t0 }
  let hintCooldownUntil = 0;
  let stageDone = false;

  function resizeCanvas() {
    const r = stageEl.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
  }
  new ResizeObserver(resizeCanvas).observe(stageEl);

  function startStage() {
    const st = ep.stages[stageIdx];
    stageDone = false;
    hint = null;
    light = { x: 0.5, y: 0.55 };
    $('#play-night').textContent = '第' + ep.id + '夜';
    $('#play-stage').textContent = st.title + '（' + (stageIdx + 1) + '/' + ep.stages.length + '）';
    $('#play-lead').textContent = st.lead;
    $('#stage-bg').src = st.bg;

    const holder = $('#stage-targets');
    holder.innerHTML = '';
    targets = st.targets.map((def) => {
      const el = document.createElement('div');
      el.className = 'target ' + def.type;
      el.style.left = def.x + '%';
      el.style.top = def.y + '%';
      if (def.type === 'neighbor') {
        el.style.width = def.size + '%';
        el.innerHTML = '<img src="' + def.sprite + '" alt="" draggable="false">';
      }
      holder.appendChild(el);
      return { def, el, found: false };
    });

    // トレイ
    const slots = $('#tray-slots');
    slots.innerHTML = '';
    targets.forEach((t) => {
      const s = document.createElement('div');
      s.className = 'slot';
      s.innerHTML = t.def.type === 'neighbor' ? '<img src="' + t.def.sprite + '" alt="">' : '<span class="slot-orb"></span>';
      slots.appendChild(s);
      t.slot = s;
    });

    show('play');
    resizeCanvas();
  }

  // 指・マウスでランタンを動かす
  let down = null;
  function toLocal(e) {
    const r = stageEl.getBoundingClientRect();
    return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
  }
  stageEl.addEventListener('pointerdown', (e) => {
    try { stageEl.setPointerCapture(e.pointerId); } catch (err) { /* 未対応環境 */ }
    const p = toLocal(e);
    light = p;
    down = { x: e.clientX, y: e.clientY, t: performance.now(), p };
  });
  stageEl.addEventListener('pointermove', (e) => {
    // マウスはボタンを押していなくても光が追いかける
    if (down || e.pointerType === 'mouse') light = toLocal(e);
  });
  stageEl.addEventListener('pointerup', (e) => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const p = toLocal(e);
    down = null;
    if (moved < 14) tryFind(p);
  });
  stageEl.addEventListener('pointercancel', () => { down = null; });

  function hitRadius(t) {
    // 画像幅に対する割合（0〜1）
    return t.def.type === 'neighbor' ? Math.max(t.def.size / 100 * 0.6, 0.07) : 0.065;
  }

  function tryFind(p) {
    if (stageDone) return;
    let best = null, bestD = Infinity;
    targets.forEach((t) => {
      if (t.found) return;
      const d = Math.hypot(p.x - t.def.x / 100, p.y - t.def.y / 100);
      if (d < hitRadius(t) && d < bestD) { best = t; bestD = d; }
    });
    if (best) onFound(best);
  }

  function onFound(t) {
    t.found = true;
    t.el.classList.remove('near');
    t.el.classList.add('found');
    t.slot.classList.add('got');
    sparks(t.def.x / 100, t.def.y / 100);
    toast(t.def.line);
    if (navigator.vibrate) navigator.vibrate(30);
    if (hint && hint.target === t) hint = null;

    if (targets.every((x) => x.found)) {
      stageDone = true;
      setTimeout(onStageClear, 1700);
    }
  }

  function onStageClear() {
    const st = ep.stages[stageIdx];
    const last = stageIdx === ep.stages.length - 1;
    openModal(
      '<p class="m-sub">' + esc(st.title) + '</p>' +
      '<h3>あたたかくなった</h3>' +
      '<p class="m-quote" style="white-space:pre-line">' + esc(st.clear) + '</p>' +
      '<button class="btn btn-primary" id="m-next">' + (last ? 'だれが、あたためていたの？' : 'つぎの場所へ') + '</button>'
    );
    $('#modal-close').style.display = 'none';
    $('#m-next').onclick = () => {
      $('#modal-close').style.display = '';
      closeModal();
      if (last) openReveal();
      else { stageIdx++; startStage(); }
    };
  }

  // ヒント：だいたいの場所がふわっと明るくなる
  $('#btn-hint').addEventListener('click', () => {
    const now = performance.now();
    if (now < hintCooldownUntil || stageDone) return;
    const left = targets.filter((t) => !t.found);
    if (!left.length) return;
    const t = left[Math.floor(Math.random() * left.length)];
    hint = {
      target: t,
      x: t.def.x / 100 + (Math.random() - 0.5) * 0.08,
      y: t.def.y / 100 + (Math.random() - 0.5) * 0.08,
      t0: now,
    };
    hintCooldownUntil = now + 6000;
    const btn = $('#btn-hint');
    btn.disabled = true;
    setTimeout(() => { btn.disabled = false; }, 6000);
  });

  function toast(text) {
    const el = $('#toast');
    el.textContent = text;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function sparks(x, y) {
    for (let i = 0; i < 14; i++) {
      const s = document.createElement('span');
      s.className = 'spark';
      const a = Math.random() * Math.PI * 2;
      const r = 30 + Math.random() * 50;
      s.style.left = x * 100 + '%';
      s.style.top = y * 100 + '%';
      s.style.setProperty('--dx', Math.cos(a) * r + 'px');
      s.style.setProperty('--dy', Math.sin(a) * r + 'px');
      stageEl.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  }

  // ---------- 闇とランタンの描画 ----------
  let raf = 0;
  function startLoop() { if (!raf) raf = requestAnimationFrame(draw); }
  function stopLoop() { cancelAnimationFrame(raf); raf = 0; }

  function hole(x, y, r, strength) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(0,0,0,' + strength + ')');
    g.addColorStop(0.55, 'rgba(0,0,0,' + strength * 0.85 + ')');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  function draw(now) {
    raf = requestAnimationFrame(draw);
    if (!W) return;
    const cw = canvas.width, ch = canvas.height;
    const unit = Math.min(cw, ch);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'rgba(4, 6, 22, 0.93)';
    ctx.fillRect(0, 0, cw, ch);

    ctx.globalCompositeOperation = 'destination-out';
    // ランタン（ゆらぎ付き）
    const flick = 1 + Math.sin(now / 180) * 0.025 + Math.sin(now / 67) * 0.015;
    const lx = light.x * cw, ly = light.y * ch, lr = unit * 0.17 * flick;
    hole(lx, ly, lr, 1);
    // 見つけた場所には、小さな灯りが残る
    targets.forEach((t) => { if (t.found) hole(t.def.x / 100 * cw, t.def.y / 100 * ch, unit * 0.1, 0.9); });
    // ヒント
    if (hint) {
      const k = (now - hint.t0) / 2600;
      if (k >= 1) hint = null;
      else hole(hint.x * cw, hint.y * ch, unit * 0.16, Math.sin(k * Math.PI) * 0.75);
    }

    // 琥珀色のあかり
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createRadialGradient(lx, ly, 0, lx, ly, lr * 1.25);
    g.addColorStop(0, 'rgba(255, 190, 100, 0.16)');
    g.addColorStop(1, 'rgba(255, 190, 100, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(lx, ly, lr * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // 近づくと、隠れているものが少し揺れる（ヒント演出）
    targets.forEach((t) => {
      if (t.found) return;
      const d = Math.hypot(light.x - t.def.x / 100, light.y - t.def.y / 100);
      t.el.classList.toggle('near', d < 0.2);
    });
  }

  // ---------- 発見（隣人登場） ----------
  function openReveal() {
    $('#reveal-sprite').src = ep.reveal.sprite;
    $('#reveal-name').textContent = ep.name;
    $('#reveal-title').textContent = ep.title;
    $('#reveal-text').textContent = ep.reveal.text;
    show('reveal');
  }
  $('#btn-to-book').addEventListener('click', () => openBook(ep, true));

  // ---------- 絵本 ----------
  let book = { n: null, i: 0, afterClear: false };
  function openBook(n, afterClear) {
    book = { n, i: 0, afterClear };
    setBgm(n.bgm);
    $('#book-title').textContent = n.name + '　' + n.title;
    renderBook();
    show('book');
  }
  function renderBook() {
    const pages = book.n.book;
    const p = pages[book.i];
    const img = $('#book-img');
    const txt = $('#book-text');
    img.style.animation = 'none'; txt.style.animation = 'none';
    void img.offsetWidth;
    img.style.animation = ''; txt.style.animation = '';
    img.src = p.img;
    txt.textContent = p.text;
    $('#book-page').textContent = (book.i + 1) + ' / ' + pages.length;
    $('#book-prev').disabled = book.i === 0;
    const last = book.i === pages.length - 1;
    $('#book-next').textContent = last ? (book.afterClear ? '図鑑にのせる' : '町へもどる') : 'つぎ';
    // 次のページ画像を先読み
    if (pages[book.i + 1]) new Image().src = pages[book.i + 1].img;
  }
  // ---------- SNSシェア ----------
  function getShareUrl() {
    return location.href.split('?')[0].split('#')[0];
  }
  function buildShareText(n) {
    const cnt = foundCount();
    const total = NEIGHBORS.length;
    if (n) {
      return '常世町で第' + n.id + '夜「' + n.name + '（' + n.title + '）」をみつけました🏮（灯り ' + cnt + '/' + total + '）\n#みつけてとなりびと #見えない隣人たち';
    }
    if (cnt >= total) {
      return '常世町の13人すべての隣人をみつけ、町中に灯りがともりました🏮✨（灯り ' + cnt + '/' + total + '）\n#みつけてとなりびと #見えない隣人たち';
    }
    return '『みつけて、となりびと』で常世町の灯りを ' + cnt + ' / ' + total + ' ともしました🏮\n#みつけてとなりびと #見えない隣人たち';
  }
  function shareLinksHtml() {
    return (
      '<div class="m-share">' +
        '<button type="button" class="m-share-btn primary-share" id="m-share-x">𝕏 ポスト</button>' +
        '<button type="button" class="m-share-btn" id="m-share-line">LINEで送る</button>' +
        (navigator.share ? '<button type="button" class="m-share-btn" id="m-share-native">📤 シェア</button>' : '') +
      '</div>'
    );
  }
  function bindShareButtons(n) {
    const text = buildShareText(n);
    const url = getShareUrl();
    const bx = $('#m-share-x');
    if (bx) bx.onclick = () => {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text + '\n' + url), '_blank', 'noopener');
    };
    const bl = $('#m-share-line');
    if (bl) bl.onclick = () => {
      window.open('https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank', 'noopener');
    };
    const bn = $('#m-share-native');
    if (bn) bn.onclick = () => {
      navigator.share({ title: 'みつけて、となりびと ― 見えない隣人たち', text, url }).catch(() => {});
    };
  }

  function completeBonusHtml() {
    return (
      '<div class="m-bonus" style="margin-top:4px;padding:12px;border-radius:14px;background:rgba(255,207,122,0.12);border:1px solid rgba(255,207,122,0.45);">' +
        '<p class="m-sub" style="color:#ffd27a;font-weight:700;margin-bottom:8px;">🎁 13人の灯りコンプリート特典</p>' +
        '<div class="m-links">' +
          '<a href="' + (LINKS_COMMON.note || LINKS_COMMON.site) + '" target="_blank" rel="noopener">📝 公式note連載＆全話ガイド</a>' +
          (LINKS_COMMON.line_stamp ? '<a href="' + LINKS_COMMON.line_stamp + '" target="_blank" rel="noopener">💬 全13人の動くスタンプ（販売中）</a>' : '') +
          (LINKS_COMMON.kindle_all ? '<a href="' + LINKS_COMMON.kindle_all + '" target="_blank" rel="noopener">📚 絵本シリーズ一覧</a>' : '') +
          '<a href="' + LINKS_COMMON.site + '" target="_blank" rel="noopener">🌐 公式サイトへ</a>' +
        '</div>' +
      '</div>'
    );
  }

  $('#book-prev').addEventListener('click', () => { if (book.i > 0) { book.i--; renderBook(); } });
  $('#book-next').addEventListener('click', () => {
    const pages = book.n.book;
    if (book.i < pages.length - 1) { book.i++; renderBook(); return; }
    if (book.afterClear) {
      const first = !save.found[book.n.id];
      save.found[book.n.id] = true;
      writeSave();
      const n = book.n;
      const L = n.links || {};
      const stampHref = L.line_stamp || LINKS_COMMON.line_stamp;
      const allLit = foundCount() >= NEIGHBORS.length;
      openMap(n.id);
      setTimeout(() => {
        openModal(
          '<img class="m-img" src="' + n.portrait + '" alt="">' +
          '<h3>' + esc(n.name) + '</h3>' +
          '<p class="m-quote">' + esc(n.quote) + '</p>' +
          '<p class="m-sub">' + (
            allLit
              ? '🎉 常世町の13すべての灯りがともりました！<br>今夜も、町はあたたかい光に包まれています。'
              : (first ? '隣人図鑑にのりました。<br>常世町に、灯りがひとつともりました。（' + foundCount() + '/' + NEIGHBORS.length + '）' : '今夜も、町はすこしあたたかい。')
          ) + '</p>' +
          '<div class="m-links">' +
            (L.kindle ? '<a href="' + L.kindle + '" target="_blank" rel="noopener">📖 Kindle絵本</a>' : '') +
            (L.youtube ? '<a href="' + L.youtube + '" target="_blank" rel="noopener">🎬 読み聞かせ</a>' : '') +
            (L.spotify ? '<a href="' + L.spotify + '" target="_blank" rel="noopener">🎵 テーマ曲</a>' : '') +
            (stampHref ? '<a href="' + stampHref + '" target="_blank" rel="noopener">💬 動くLINEスタンプ（販売中）</a>' : '') +
          '</div>' +
          (allLit ? completeBonusHtml() : '') +
          shareLinksHtml()
        );
        bindShareButtons(n);
      }, 1500);
    } else {
      openMap();
    }
  });

  // ---------- 図鑑 ----------
  function openZukan() {
    setBgm(THEME_BGM);
    const grid = $('#zukan-grid');
    grid.innerHTML = '';
    NEIGHBORS.forEach((n) => {
      const got = !!save.found[n.id];
      const c = document.createElement('button');
      c.className = 'zcard' + (got ? ' got' : '');
      c.innerHTML =
        '<span class="zno">第' + n.id + '夜</span>' +
        '<span class="zimg">' + (got ? '<img src="' + n.portrait + '" alt="">' : '？') + '</span>' +
        '<span class="zname">' + (got ? esc(n.name) : '？？？') + '</span>';
      c.addEventListener('click', () => openZukanDetail(n, got));
      grid.appendChild(c);
    });
    $('#zukan-count').textContent = foundCount() + ' / ' + NEIGHBORS.length;
    show('zukan');
  }

  const btnShareZukan = $('#btn-share-zukan');
  if (btnShareZukan) {
    btnShareZukan.addEventListener('click', () => {
      const cnt = foundCount();
      const total = NEIGHBORS.length;
      openModal(
        '<p class="m-sub">常世町の隣人図鑑</p>' +
        '<h3>灯り ' + cnt + ' / ' + total + '</h3>' +
        '<p class="m-quote">' + (cnt >= total ? '13人すべての隣人をみつけました！<br>常世町にすべての灯りがともっています。' : 'みつけた隣人の記録を、SNSでシェアできます。') + '</p>' +
        completeBonusHtml() +
        shareLinksHtml()
      );
      bindShareButtons(null);
    });
  }

  function openZukanDetail(n, got) {
    const L = n.links || {};
    const stampHref = L.line_stamp || LINKS_COMMON.line_stamp;
    if (!got) {
      openModal(
        '<p class="m-sub">第' + n.id + '夜</p>' +
        '<h3>？？？</h3>' +
        '<p class="m-quote">' + esc(n.title) + '</p>' +
        '<p class="m-sub">まだ見つけていない隣人。<br>町のマップから第' + n.id + '夜を探してみよう。</p>' +
        '<div class="m-links">' +
          (L.kindle ? '<a href="' + L.kindle + '" target="_blank" rel="noopener">📖 Kindle絵本</a>' : '') +
          (L.youtube ? '<a href="' + L.youtube + '" target="_blank" rel="noopener">🎬 読み聞かせ</a>' : '') +
          (L.spotify ? '<a href="' + L.spotify + '" target="_blank" rel="noopener">🎵 テーマ曲</a>' : '') +
          (stampHref ? '<a href="' + stampHref + '" target="_blank" rel="noopener">💬 動くLINEスタンプ（販売中）</a>' : '') +
          '<a href="' + LINKS_COMMON.site + '" target="_blank" rel="noopener">🌐 公式サイト</a>' +
        '</div>'
      );
      return;
    }
    openModal(
      '<img class="m-img" src="' + n.portrait + '" alt="">' +
      '<h3>' + esc(n.name) + '</h3>' +
      '<p class="m-sub">第' + n.id + '夜　' + esc(n.title) + '</p>' +
      '<p class="m-quote">' + esc(n.quote) + '</p>' +
      '<div class="m-table">役目：' + esc(n.role || '') + '<br>性格：' + esc(n.personality || '') + '</div>' +
      '<button class="btn btn-ghost" id="m-book">絵本をよむ</button>' +
      '<div class="m-links">' +
        (L.kindle ? '<a href="' + L.kindle + '" target="_blank" rel="noopener">📖 Kindle絵本</a>' : '') +
        (L.youtube ? '<a href="' + L.youtube + '" target="_blank" rel="noopener">🎬 読み聞かせ</a>' : '') +
        (L.spotify ? '<a href="' + L.spotify + '" target="_blank" rel="noopener">🎵 テーマ曲</a>' : '') +
        (LINKS_COMMON.note ? '<a href="' + LINKS_COMMON.note + '" target="_blank" rel="noopener">📝 note連載・裏話</a>' : '') +
        (stampHref ? '<a href="' + stampHref + '" target="_blank" rel="noopener">💬 動くLINEスタンプ（販売中）</a>' : '') +
        '<a href="' + LINKS_COMMON.site + '" target="_blank" rel="noopener">🌐 公式サイト</a>' +
      '</div>' +
      shareLinksHtml()
    );
    $('#m-book').onclick = () => { closeModal(); openBook(n, false); };
    bindShareButtons(n);
  }

  // デバッグ用：URL に ?reset を付けると進み具合を消す
  if (/[?&]reset\b/.test(location.search)) { localStorage.removeItem(SAVE_KEY); location.replace(location.pathname); }

  // プレビュー用：?preview=zukan または ?preview=complete で5号の実装箇所を即座に表示（セーブデータは書き換えない）
  const previewMatch = location.search.match(/[?&]preview=(zukan|complete)/);
  if (previewMatch) {
    NEIGHBORS.forEach((n) => { save.found[n.id] = true; });
    const mode = previewMatch[1];
    setTimeout(() => {
      openZukan();
      if (mode === 'zukan') {
        const targetN = NEIGHBORS.find((n) => n.id === 5) || NEIGHBORS[0];
        openZukanDetail(targetN, true);
      } else if (mode === 'complete') {
        const total = NEIGHBORS.length;
        openModal(
          '<p class="m-sub">常世町の隣人図鑑（プレビュー）</p>' +
          '<h3>🎉 灯り ' + total + ' / ' + total + ' コンプリート！</h3>' +
          '<p class="m-quote">13人すべての隣人をみつけました！<br>常世町にすべての灯りがともっています。</p>' +
          completeBonusHtml() +
          shareLinksHtml()
        );
        bindShareButtons(null);
      }
    }, 120);
  }

  // バックグラウンド復帰時・スリープ復帰時に画面と描画ループ・音を正常に復帰させる
  function onResume() {
    if (document.hidden) {
      bgm.pause();
      stopLoop();
    } else {
      if (current === 'play') {
        resizeCanvas();
        startLoop();
      }
      if (save.sound && current !== 'title') {
        bgm.play().catch(() => {});
      }
    }
  }
  document.addEventListener('visibilitychange', onResume);
  window.addEventListener('pageshow', () => {
    // どの画面も確実に1つだけ active になるよう保証
    if (!document.querySelector('.screen.active')) show(current || 'title');
    onResume();
  });
})();

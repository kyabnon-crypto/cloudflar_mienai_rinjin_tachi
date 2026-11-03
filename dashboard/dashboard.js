(() => {
  'use strict';

  let STATE = window.RINJIN_DASHBOARD_DATA || null;
  let isLiveServer = false;
  let currentTab = 'weekly_plan';
  let selectedDraftPath = null;
  let filterMissingOnly = false;
  let qrMode = 'public'; // 'public' or 'lan'

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const esc = (s) =>
    String(s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function showToast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function copyText(text, label) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast(label || 'クリップボードにコピーしました！'))
      .catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast(label || 'コピーしました！');
      });
  }

  async function fetchState() {
    try {
      const res = await fetch('/api/state', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      STATE = await res.json();
      isLiveServer = true;
      updateLiveBadge();
      renderAll();
    } catch (e) {
      isLiveServer = false;
      updateLiveBadge();
      if (STATE) renderAll();
    }
  }

  function updateLiveBadge() {
    const pill = $('#live-indicator');
    const txt = $('#live-text');
    const scanned = STATE ? STATE.scanned_at : '';
    if (isLiveServer) {
      pill.classList.remove('snapshot');
      txt.textContent = 'リアルタイム接続中 (' + scanned + ')';
    } else {
      pill.classList.add('snapshot');
      txt.textContent = 'スナップショット表示 (' + scanned + ')';
    }
  }

  // スマホからのワンタップ発注送信
  async function dispatchRemoteOrder(target_agent, agent_name, instruction) {
    if (!instruction) return;
    if (isLiveServer) {
      try {
        const res = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ target_agent, agent_name, instruction }),
        });
        if (res.ok) {
          const data = await res.json();
          STATE = data.state;
          renderAll();
          showToast(`🚀 「${agent_name}」へ発注しました！（受付番号: ${data.order.id}）`);
          return;
        }
      } catch (e) {
        // Fallback below
      }
    }
    copyText(instruction, `「${agent_name}」への指示文をコピーしました！`);
  }

  function renderKpis() {
    if (!STATE || !STATE.kpi) return;
    const k = STATE.kpi;
    const total = k.total_characters || 13;
    const cards = [
      {
        label: '🏮 ゲーム『みつけて、となりびと』',
        val: k.game_ready,
        max: total,
        unit: '夜 実装済',
        sub: '全13ステージ＆隣人図鑑 稼働中',
      },
      {
        label: '📖 Kindle絵本 (KDP)',
        val: k.kindle_ready,
        max: total,
        unit: '冊 出版済',
        sub: '全13話 Amazon販売URL完備',
      },
      {
        label: '🎵 Spotify テーマ曲',
        val: k.spotify_ready,
        max: total,
        unit: '曲 配信済',
        sub: '全14曲（通常＋Dreamy）完備',
      },
      {
        label: '💬 LINE動くスタンプ',
        val: k.stamp_ready || total,
        max: total,
        unit: '人分 販売中',
        sub: '全13キャラ 動くAPNGスタンプ販売中！',
      },
      {
        label: '🎬 YouTube 読み聞かせ動画',
        val: k.youtube_ready,
        max: total,
        unit: '話 公開済',
        sub: k.youtube_ready < total ? `⚠️ 残り ${total - k.youtube_ready}話（11〜13話）未登録` : '全話公開完了！',
      },
      {
        label: '📝 note / Substack 連載',
        val: k.note_ready,
        max: total,
        unit: 'キャラ完了',
        sub: `Week 5まで完了（計 ${k.total_note_files} 記事ファイル）`,
      },
      {
        label: '📱 SNS 週間キャンペーン',
        val: k.sns_ready,
        max: total,
        unit: 'キャラ完了',
        sub: `Week 5まで完了（計 ${k.total_sns_files} 下書きファイル）`,
      },
    ];

    $('#kpi-grid').innerHTML = cards
      .map((c) => {
        const pct = Math.min(100, Math.round((c.val / c.max) * 100));
        return `
        <div class="kpi-card">
          <div class="kpi-label"><span>${esc(c.label)}</span><span>${pct}%</span></div>
          <div class="kpi-value">${c.val} <small>/ ${c.max} ${esc(c.unit)}</small></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="kpi-sub">${esc(c.sub)}</div>
        </div>
      `;
      })
      .join('');
  }

  function renderAgents() {
    if (!STATE || !STATE.agents) return;
    $('#banner-prev').textContent = STATE.previous_week || 'Week 4 完了';
    $('#banner-current').textContent = '🔥 現在フェーズ：' + (STATE.current_week || 'Week 5');

    $('#agents-grid').innerHTML = STATE.agents
      .map((ag) => {
        const st = ag.status || 'standby';
        const badgeClass = st === 'working' ? 'working' : st === 'completed' ? 'completed' : 'standby';
        const dot = st === 'working' ? '🟢 ' : st === 'completed' ? '✅ ' : '⏳ ';
        return `
        <div class="agent-card status-${esc(st)}">
          <div>
            <div class="agent-top">
              <div class="agent-identity">
                <div class="agent-icon">${esc(ag.icon)}</div>
                <div>
                  <div class="agent-num">${esc(ag.number)} (${esc(ag.id)})</div>
                  <h3 class="agent-name">${esc(ag.name)}</h3>
                  <p class="agent-role">${esc(ag.role)}</p>
                </div>
              </div>
              <span class="status-badge ${badgeClass}">${dot}${esc(ag.status_label)}</span>
            </div>
            <div class="agent-task-box" style="margin-top:0.85rem;">
              ${esc(ag.current_task)}
            </div>
          </div>
          <div>
            <div class="agent-meta" style="margin-bottom:0.55rem;">
              <span>📁 出力先: <code>${esc(ag.output_path)}</code></span>
              <span>🕒 ${esc(ag.last_active)}</span>
            </div>
            <div class="agent-actions">
              <button class="btn btn-amber btn-order-agent" data-id="${esc(ag.id)}" data-name="${esc(ag.number + '：' + ag.name)}" data-prompt="${esc(ag.quick_prompt)}">
                🚀 このAIに発注
              </button>
              <button class="btn btn-copy-prompt" data-prompt="${esc(ag.quick_prompt)}" data-name="${esc(ag.name)}" title="指示文をクリップボードにコピー">
                📋 コピー
              </button>
              <button class="btn btn-toggle-status" data-id="${esc(ag.id)}" data-status="${esc(st)}" title="ステータス切り替え" style="flex:0.5;">
                🔄
              </button>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    $$('.btn-order-agent').forEach((btn) => {
      btn.onclick = () => {
        dispatchRemoteOrder(btn.dataset.id, btn.dataset.name, btn.dataset.prompt);
      };
    });

    $$('.btn-copy-prompt').forEach((btn) => {
      btn.onclick = () => {
        copyText(btn.dataset.prompt, `「${btn.dataset.name}」への指示文をコピーしました！`);
      };
    });

    $$('.btn-toggle-status').forEach((btn) => {
      btn.onclick = async () => {
        const id = btn.dataset.id;
        const cur = btn.dataset.status;
        const order = ['standby', 'working', 'completed'];
        const labels = {
          standby: 'Week 5 指示待ち',
          working: '現在稼働中...',
          completed: 'Week 5 完了',
        };
        const next = order[(order.indexOf(cur) + 1) % order.length];
        if (isLiveServer) {
          await fetch('/api/agent-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: next, status_label: labels[next] }),
          });
          fetchState();
          showToast(`ステータスを「${labels[next]}」に更新しました`);
        }
      };
    });
  }

  function renderOrders() {
    const orders = (STATE && STATE.orders) || [];
    const pendingCount = orders.filter((o) => o.status === 'pending' || o.status === 'running').length;
    const badge = $('#order-queue-badge');
    if (badge) {
      badge.textContent = pendingCount > 0 ? `🟢 実行待ち・稼働中: ${pendingCount}件` : '待機中の発注: 0件';
      badge.className = 'status-badge ' + (pendingCount > 0 ? 'working' : 'standby');
    }

    const box = $('#orders-list-box');
    if (!box) return;
    if (!orders.length) {
      box.innerHTML =
        '<div style="color:var(--text-muted); font-size:0.8rem; padding:0.8rem; text-align:center;">まだスマホからの発注履歴はありません。<br>上の「🚀 このAIに発注」ボタンまたは左のフォームからワンタップで発注できます。</div>';
      return;
    }

    box.innerHTML = orders
      .map((o) => {
        const isDone = o.status === 'completed';
        return `
        <div class="order-item ${isDone ? 'completed' : ''}">
          <div class="order-head">
            <strong style="color:var(--amber);">${esc(o.agent_name)} <small style="color:var(--text-muted);">(${esc(o.id)})</small></strong>
            <span class="status-badge ${isDone ? 'completed' : 'working'}">${esc(o.status_label || o.status)}</span>
          </div>
          <div style="color:var(--text-main);">${esc(o.instruction)}</div>
          ${o.result_summary ? `<div style="color:#6ee7b7; font-size:0.76rem;">✨ 結果: ${esc(o.result_summary)}</div>` : ''}
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.2rem; font-size:0.72rem; color:var(--text-muted);">
            <span>🕒 ${esc(o.created_at)}</span>
            <div style="display:flex; gap:0.35rem;">
              ${!isDone ? `<button type="button" class="btn btn-order-act" style="padding:0.15rem 0.45rem; font-size:0.7rem;" data-id="${esc(o.id)}" data-act="completed">✅ 完了にする</button>` : ''}
              <button type="button" class="btn btn-order-act" style="padding:0.15rem 0.45rem; font-size:0.7rem;" data-id="${esc(o.id)}" data-act="delete">🗑️ 削除</button>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    $$('.btn-order-act').forEach((btn) => {
      btn.onclick = async () => {
        if (!isLiveServer) return;
        await fetch('/api/order-update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: btn.dataset.id, status: btn.dataset.act }),
        });
        fetchState();
      };
    });
  }

  function renderMatrix() {
    if (!STATE || !STATE.characters) return;
    const rows = STATE.characters.filter((c) => {
      if (!filterMissingOnly) return true;
      return !c.has_youtube || !c.has_note || !c.has_sns;
    });

    $('#matrix-tbody').innerHTML = rows
      .map((c) => {
        const isWeek5 = c.week_badge.includes('Week 5');
        const isDoneWeek = c.week_badge.includes('完了') || c.week_badge.includes('導入');
        const weekClass = isWeek5 ? 'week5' : isDoneWeek ? 'done' : '';

        const noteCell = c.has_note
          ? `<button class="btn btn-preview-jump" style="padding:0.2rem 0.55rem; font-size:0.74rem;" data-type="note" data-path="${esc(c.note_files[0].rel_path)}">📝 記事を見る (${c.note_files.length})</button>`
          : `<span class="badge-pending">未執筆</span>`;

        const snsCell = c.has_sns
          ? `<button class="btn btn-preview-jump" style="padding:0.2rem 0.55rem; font-size:0.74rem;" data-type="sns" data-path="${esc(c.sns_files[0].rel_path)}">📱 下書きを見る (${c.sns_files.length})</button>`
          : `<span class="badge-pending">未作成</span>`;

        const stampCell = c.stamp_url
          ? `<a href="${esc(c.stamp_url)}" target="_blank" class="badge-ok">💬 販売中 ↗</a>`
          : `<span class="badge-ok">💬 販売中</span>`;

        return `
        <tr class="${isWeek5 ? 'highlight-week5' : ''}">
          <td><strong>#${esc(c.id)}</strong></td>
          <td>
            <div style="font-weight:700; color:var(--text-main);">${esc(c.name)} <small style="color:var(--text-muted); font-weight:400;">(${esc(c.role)})</small></div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${esc(c.episode_title)}</div>
          </td>
          <td><span class="week-pill ${weekClass}">${esc(c.week_badge)}</span></td>
          <td>${c.has_game ? '<a href="../game/play.html" target="_blank" class="badge-ok">🏮 実装済</a>' : '<span class="badge-missing">未実装</span>'}</td>
          <td>${c.has_kindle ? `<a href="${esc(c.kindle_url)}" target="_blank" class="badge-ok">📖 公開済 ↗</a>` : '<span class="badge-missing">未登録</span>'}</td>
          <td>${c.has_spotify ? `<a href="${esc(c.spotify_url)}" target="_blank" class="badge-ok">🎵 配信済 ↗</a>` : '<span class="badge-missing">未登録</span>'}</td>
          <td>${stampCell}</td>
          <td>${c.has_youtube ? `<a href="${esc(c.youtube_url)}" target="_blank" class="badge-ok">🎬 公開済 ↗</a>` : '<span class="badge-missing">⚠️ 未登録 (4号担当)</span>'}</td>
          <td>${noteCell}</td>
          <td>${snsCell}</td>
        </tr>
      `;
      })
      .join('');

    $$('.btn-preview-jump').forEach((btn) => {
      btn.onclick = () => {
        currentTab = btn.dataset.type;
        selectedDraftPath = btn.dataset.path;
        updateTabsUI();
        renderViewer();
        $('#viewer-section').scrollIntoView({ behavior: 'smooth' });
      };
    });
  }

  function updateTabsUI() {
    $$('.tab-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.tab === currentTab);
    });
  }

  function renderViewer() {
    if (!STATE) return;
    const selectorWrap = $('#file-selector-wrap');
    const selectEl = $('#draft-file-select');
    const metaEl = $('#draft-file-meta');
    const box = $('#preview-box');

    if (currentTab === 'weekly_plan') {
      selectorWrap.style.display = 'none';
      box.textContent = STATE.documents.weekly_plan || '';
    } else if (currentTab === 'revenue_tracker') {
      selectorWrap.style.display = 'none';
      box.textContent = STATE.documents.revenue_tracker || '';
    } else if (currentTab === 'note' || currentTab === 'sns') {
      const list = (STATE.drafts && STATE.drafts[currentTab]) || [];
      selectorWrap.style.display = 'flex';
      if (!list.length) {
        selectEl.innerHTML = '<option>ファイルがありません</option>';
        box.textContent = '原稿ファイルがまだありません。';
        return;
      }
      if (!selectedDraftPath || !list.some((f) => f.rel_path === selectedDraftPath)) {
        const preferred = list.find((f) => f.rel_path.includes('week5')) || list.find((f) => f.rel_path.includes('week4')) || list[list.length - 1];
        selectedDraftPath = preferred.rel_path;
      }
      selectEl.innerHTML = list
        .map(
          (f) =>
            `<option value="${esc(f.rel_path)}" ${f.rel_path === selectedDraftPath ? 'selected' : ''}>${esc(f.rel_path)}</option>`
        )
        .join('');
      const currentFile = list.find((f) => f.rel_path === selectedDraftPath) || list[0];
      metaEl.textContent = `最終更新: ${currentFile.mtime} (${currentFile.size} bytes)`;
      box.textContent = currentFile.content;
    }

    $('#feedback-box').textContent = (STATE.documents && STATE.documents.feedback_log) || '';
  }

  function renderAll() {
    renderKpis();
    renderAgents();
    renderOrders();
    renderMatrix();
    renderViewer();
  }

  // Event bindings
  $$('.tab-btn').forEach((btn) => {
    btn.onclick = () => {
      currentTab = btn.dataset.tab;
      selectedDraftPath = null;
      updateTabsUI();
      renderViewer();
    };
  });

  $('#draft-file-select').addEventListener('change', (e) => {
    selectedDraftPath = e.target.value;
    renderViewer();
  });

  $('#btn-copy-preview').addEventListener('click', () => {
    copyText($('#preview-box').textContent, '表示中の原稿テキストをコピーしました！');
  });

  const btnOrderAll = $('#btn-order-all-week5');
  if (btnOrderAll) {
    btnOrderAll.addEventListener('click', () => {
      dispatchRemoteOrder(
        'all',
        '全員 (1号〜5号)',
        'dashboard/weekly-plan.md のWeek 5計画（第5話：ヌクモリ特集）に従って、2号（SNS広報AI）と3号（連載ライターAI）でWeek 5のX投稿セット・Instagram案・note記事を作成し、4号・5号のタスクも進めてください。'
      );
    });
  }

  $$('.btn-quick-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
      dispatchRemoteOrder(btn.dataset.agent, btn.dataset.name, btn.dataset.inst);
    });
  });

  const orderForm = $('#remote-order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sel = $('#order-agent');
      const target_agent = sel.value;
      const agent_name = sel.options[sel.selectedIndex].dataset.name || 'AI社員';
      const instruction = $('#order-instruction').value.trim();
      if (!instruction) {
        showToast('業務指示内容を入力してください');
        return;
      }
      dispatchRemoteOrder(target_agent, agent_name, instruction);
      $('#order-instruction').value = '';
    });
  }

  $('#filter-all').addEventListener('click', () => {
    filterMissingOnly = false;
    renderMatrix();
  });

  $('#filter-missing').addEventListener('click', () => {
    filterMissingOnly = true;
    renderMatrix();
  });

  $('#btn-refresh').addEventListener('click', () => {
    fetchState();
    showToast('最新状態をスキャンしました');
  });

  // Mobile & Remote QR Modal
  const qrModal = $('#qr-modal');
  const btnMobileQr = $('#btn-mobile-qr');
  function updateQrModalView() {
    const pubUrl = (STATE && STATE.public_url) || '';
    const lanUrl = (STATE && STATE.lan_url) || 'http://192.168.0.6:8766/dashboard/';
    const tabPub = $('#qr-tab-public');
    const tabLan = $('#qr-tab-lan');
    const noteEl = $('#qr-mode-note');

    if (qrMode === 'public') {
      tabPub.classList.add('btn-amber');
      tabLan.classList.remove('btn-amber');
      if (pubUrl) {
        $('#qr-url-text').textContent = pubUrl;
        $('#qr-img').src =
          'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(pubUrl);
        noteEl.textContent = '🌐 外出先（4G/5G回線）からリアルタイム接続・ワンタップ発注が可能です！';
      } else {
        $('#qr-url-text').textContent = '外出先トンネル未起動（下の自宅Wi-Fiタブを使うか、start-remote.sh を起動してください）';
        $('#qr-img').src =
          'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(lanUrl);
        noteEl.textContent = '💡 トンネル起動後、ここに https://xxxx.trycloudflare.com/dashboard/ が自動表示されます。';
      }
    } else {
      tabLan.classList.add('btn-amber');
      tabPub.classList.remove('btn-amber');
      $('#qr-url-text').textContent = lanUrl;
      $('#qr-img').src =
        'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(lanUrl);
      noteEl.textContent = '🏠 Macと同じWi-Fiに接続しているスマホからリアルタイム接続・発注が可能です。';
    }
  }

  if (btnMobileQr && qrModal) {
    btnMobileQr.addEventListener('click', () => {
      qrMode = STATE && STATE.public_url ? 'public' : 'lan';
      updateQrModalView();
      qrModal.classList.remove('hidden');
    });
    $('#qr-tab-public').addEventListener('click', () => {
      qrMode = 'public';
      updateQrModalView();
    });
    $('#qr-tab-lan').addEventListener('click', () => {
      qrMode = 'lan';
      updateQrModalView();
    });
    $('#btn-close-qr').addEventListener('click', () => qrModal.classList.add('hidden'));
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) qrModal.classList.add('hidden');
    });
    $('#btn-copy-lan-url').addEventListener('click', () => {
      const u = $('#qr-url-text').textContent;
      copyText(u, '📱 接続用URLをコピーしました！');
    });
  }

  $('#feedback-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const target_ai = $('#fb-target').value;
    const feedback = $('#fb-text').value.trim();
    const action_rule = $('#fb-rule').value.trim() || '次回制作時より即時反映';
    if (!feedback) {
      showToast('赤入れ・改善指示を入力してください');
      return;
    }
    if (isLiveServer) {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target_ai, feedback, action_rule }),
      });
      if (res.ok) {
        const data = await res.json();
        STATE = data.state;
        $('#fb-text').value = '';
        $('#fb-rule').value = '';
        renderAll();
        showToast('✍️ feedback-log.md に直接追記しました！');
        return;
      }
    }
    const cmd = `【育成ノート追記指示】対象：${target_ai} / 内容：「${feedback}」 / ルール：「${action_rule}」を .agent/feedback-log.md に追記してください。`;
    copyText(cmd, '育成ノート追記用コマンドをコピーしました！');
  });

  // Init & Poll every 4 seconds
  fetchState();
  setInterval(fetchState, 4000);
})();

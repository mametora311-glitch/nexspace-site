const GATE = (window.AIEC_GATE_BASE || "").replace(/\/$/, "");
const SUCCESS_URL = (window.AIEC_SUCCESS_URL || location.origin).replace(/\/$/, "") + "/";
const CANCEL_URL  = (window.AIEC_CANCEL_URL  || location.origin).replace(/\/$/, "") + "/";

function must(v, name){
  if(!v){ throw new Error(`${name} が未設定です。ページ冒頭の window.${name} を設定してください`); }
  return v;
}
must(GATE, "AIEC_GATE_BASE"); must(SUCCESS_URL, "AIEC_SUCCESS_URL"); must(CANCEL_URL, "AIEC_CANCEL_URL");

async function j(url, opts) {
  const r = await fetch(url, opts);
  if (!r.ok) {
    let msg = `HTTP ${r.status}`;
    try { msg += `: ${await r.text()}`; } catch {}
    throw new Error(msg);
  }
  const ct = r.headers.get("content-type") || "";
  return ct.includes("application/json") ? r.json() : r.text();
}
function el(tag, props = {}, html = "") { const x = Object.assign(document.createElement(tag), props); if (html) x.innerHTML = html; return x; }

async function render() {
  const list = await j(`${GATE}/v1/plans`);
  const root = document.getElementById('plans');
  root.innerHTML = '';

  for (const p of list) {
    const card = el('div', { className: 'card' });
    card.innerHTML = `
<h2 style="margin:0 0 6px 0">${p.name} ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}</h2>
<p style="opacity:.8;margin:0 0 12px 0">${p.tagline || ''}</p>
<label>請求間隔</label>
<select data-k="interval">${p.intervals.map(iv => `<option value="${iv}">${iv === 'month' ? '月額' : '年額'}</option>`).join('')}</select>
<div style="height:8px"></div>
<button data-k="buy">このプランで申し込む</button>
<div style="height:12px"></div>
<div><strong>含まれるもの</strong><ul>${(p.features || []).map(f => `<li>${f}</li>`).join('')}</ul></div>`;

    card.querySelector('button[data-k="buy"]').addEventListener('click', async () => {
      try {
        const interval = card.querySelector('select[data-k="interval"]').value;
        const body = {
          plan: p.key,
          interval,
          mode: 'subscription',
          success_url: SUCCESS_URL,
          cancel_url: CANCEL_URL
        };
        const resp = await j(`${GATE}/v1/checkout/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (!resp?.url) throw new Error("Checkout URL生成に失敗しました");
        location.href = resp.url;
      } catch (e) {
        console.error(e);
        alert(`購入手続きに失敗しました。\n${e.message || e}`);
      }
    });

    root.appendChild(card);
  }
}
render().catch(e => { console.error(e); alert('初期化に失敗しました: ' + (e?.message || e)); });

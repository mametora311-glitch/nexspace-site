(function () {
  "use strict";

  const GATE = (window.AIEC_GATE_BASE || "").replace(/\/+$/, "");
  function normUrl(u) {
    u = String(u).trim();
    if (/\.[a-z0-9]+$/i.test(u)) return u; // 例: .../index.html → そのまま
    return u.replace(/\/+$/, "") + "/";     // 例: .../success → .../success/
  }
  const RAW_SUCCESS = normUrl(window.AIEC_SUCCESS_URL || (location.origin + "/success/index.html"));
  const RAW_CANCEL = normUrl(window.AIEC_CANCEL_URL || (location.origin + "/products/aiec-light/cancel/"));

  // ★ {CHECKOUT_SESSION_ID} を自前で付けない（Stripe側で付与される想定）
  const SUCCESS_URL = RAW_SUCCESS;
  const CANCEL_URL = RAW_CANCEL;

  async function asJson(r) {
    const ct = r.headers.get("content-type") || "";
    return ct.includes("application/json") ? r.json() : r.text();
  }
  async function j(url, opts) {
    const r = await fetch(url, opts);
    if (!r.ok) { let body = ""; try { body = await r.text(); } catch { }; throw new Error(`HTTP ${r.status}: ${body}`); }
    return asJson(r);
  }
  function el(tag, props = {}, html = "") { const x = Object.assign(document.createElement(tag), props); if (html) x.innerHTML = html; return x; }

  async function render() {
    const root = document.getElementById("plans");
    const errEl = document.getElementById("error");
    if (!root) return;
    try {
      if (!GATE) throw new Error("AIEC_GATE_BASE が設定されていません。");
      const plans = await j(`${GATE}/v1/plans`);
      root.innerHTML = "";
      plans.forEach(p => {
        const card = el("div", { className: "card" });
        card.innerHTML = `
<h2 style="margin:0 0 6px 0">${p.name || p.key}${p.badge ? ` <span class="badge">${p.badge}</span>` : ""}</h2>
<p style="opacity:.8;margin:0 0 12px 0">${p.tagline || ""}</p>
<label>請求間隔</label>
<select data-k="interval">${(p.intervals || ["month"]).map(iv => `<option value="${iv}">${iv === "month" ? "月額" : "年額"}</option>`).join("")}</select>
<div style="height:8px"></div>
<button data-k="buy">このプランで申し込む</button>
<div style="height:12px"></div>
<div><strong>含まれるもの</strong><ul>${(p.features || []).map(f => `<li>${f}</li>`).join("")}</ul></div>`;
        card.querySelector('button[data-k="buy"]').addEventListener("click", async () => {
          const btn = card.querySelector('button[data-k="buy"]');
          btn.disabled = true;
          try {
            const interval = card.querySelector('select[data-k="interval"]').value;
            const body = {
              plan: p.key,
              interval,
              mode: "subscription",
              success_url: SUCCESS_URL,
              cancel_url: CANCEL_URL
            };
            const resp = await j(`${GATE}/v1/checkout/session`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            });
            if (!resp?.url) throw new Error("Checkout URL の生成に失敗しました。");
            location.href = resp.url;
          } catch (e) { console.error(e); alert(`購入手続きに失敗しました。\n${e.message || e}`); }
          finally { btn.disabled = false; }
        });
        root.appendChild(card);
      });
    } catch (e) { console.error(e); if (errEl) { errEl.style.display = "block"; errEl.textContent = e.message || String(e); } }
  }

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", render) : render();
})();

async function startCheckout() {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      success_url: "https://your.site/success",
      cancel_url: "https://your.site/cancel"
    })
  });
  const { url } = await res.json();
  location.href = url;
}
document.getElementById("buy-btn").addEventListener("click", startCheckout);

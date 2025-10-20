(async function () {
  "use strict";

  // ====== 定数（index.html で未定義でも動くように） ======
  const GATE_BASE = (window.AIEC_GATE_BASE || "https://aiec-gate-766292311890.asia-northeast1.run.app").replace(/\/+$/, "");
  const ORIGIN = location.origin.replace(/\/+$/, "");
  const SUCCESS_URL = (window.AIEC_SUCCESS_URL || ORIGIN + "/success/index.html").replace(/\/+$/, "");
  const CANCEL_URL  = (window.AIEC_CANCEL_URL  || ORIGIN + "/products/aiec-light/cancel/").replace(/\/+$/, "") + "/";

  // ====== 汎用 fetch ======
  async function j(url, opts) {
    const r = await fetch(url, { credentials: "include", ...opts });
    const ct = (r.headers.get("content-type") || "").toLowerCase();
    const raw = ct.includes("application/json") ? await r.json() : await r.text();
    if (!r.ok) {
      const err = new Error(typeof raw === "string" ? raw : (raw.detail || raw.message || "HTTP " + r.status));
      err.status = r.status;
      err.responseBody = typeof raw === "string" ? raw : JSON.stringify(raw);
      throw err;
    }
    return raw;
  }

  // ====== DOM helper ======
  function el(tag, attrs = {}, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else e.setAttribute(k, v);
    }
    for (const c of children) e.append(c);
    return e;
  }

  // ====== API ======
  async function fetchPlans() {
    const raw = await j(`${GATE_BASE}/v1/plans`);
    // [] / {plans:[]} / {data:{plans:[]}} のどれでも拾う
    const list =
      Array.isArray(raw) ? raw :
      (raw && Array.isArray(raw.plans)) ? raw.plans :
      (raw && raw.data && Array.isArray(raw.data.plans)) ? raw.data.plans :
      [];
    return list;
  }

  async function startCheckout(planKey, interval) {
    const payload = {
      plan_key: String(planKey),
      interval : String(interval || "month"),
      success_url: SUCCESS_URL,
      cancel_url : CANCEL_URL,
    };
    const res = await j(`${GATE_BASE}/v1/checkout/session`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res && res.url) location.href = res.url;
    else throw new Error("checkout_url_not_returned");
  }

  // ====== UI描画 ======
  function renderPlans(list) {
    const host = document.getElementById("plans");
    const err  = document.getElementById("error");
    host.innerHTML = "";
    err.style.display = "none";

    list.forEach((p) => {
      // タイトル等
      const title   = el("h2", { style: "margin:0 0 6px;font-size:18px" }, p.name || p.key);
      const tagline = el("div", { style: "color:#94a3b8;margin-bottom:8px" }, p.tagline || "");
      const badge   = p.badge ? el("span", { class: "tag" }, p.badge) : null;

      // 機能箇条書き
      const feat = el("ul", { class: "features" });
      (p.features || []).forEach((f) => feat.append(el("li", {}, f)));

      // interval はサーバが返したものだけ表示
      const ivs = Array.isArray(p.intervals) && p.intervals.length ? p.intervals : ["month"];
      const pill = el("div", { class: "pill" });
      ivs.forEach((iv, idx) => {
        const id = `${iv}_${p.key}`;
        const r = el("input", { type: "radio", name: `iv_${p.key}`, id, value: iv, ...(idx===0?{checked:"checked"}:{}) });
        pill.append( el("label", { for: id }, r, el("span", {}, iv === "year" ? "年額" : "月額")) );
      });

      // 申込みボタン
      const btn = el("button", { class: "primary", type: "button" }, "申し込む");
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        try {
          const iv = (pill.querySelector("input:checked") || {}).value || ivs[0];
          await startCheckout(p.key, iv);
        } catch (e) {
          // 422 の本文をそのまま見せる
          alert("購入手続きに失敗しました。\n" + (e.responseBody || e.message || ("HTTP " + (e.status||""))));
        } finally {
          btn.disabled = false;
        }
      });

      // カード
      const card = el("div", { class: "card" },
        el("div", { class: "row" },
          el("div", { style: "flex:1 1 auto" }, title, badge || "", tagline),
          pill
        ),
        feat,
        el("div", { class: "row" }, btn),
      );
      host.append(card);
    });
  }

  // ====== 起動 ======
  async function main() {
    try {
      const plans = await fetchPlans();
      if (!plans.length) throw new Error("plans_empty");
      renderPlans(plans);
    } catch (e) {
      console.error("[AIEC] plans fetch error:", e);
      const err = document.getElementById("error");
      err.textContent = "プラン情報の取得に失敗しました。時間をおいて再度お試しください。";
      err.style.display = "block";
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
  else main();
})();

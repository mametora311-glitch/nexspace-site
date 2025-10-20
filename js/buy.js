(async function () {
  "use strict";

  // ====== 設定値 ======
  const GATE_BASE = (window.AIEC_GATE_BASE || "").replace(/\/+$/, "");
  const SUCCESS_URL = (window.AIEC_SUCCESS_URL || (location.origin + "/success/index.html")).replace(/\/+$/, "");
  const CANCEL_URL = (window.AIEC_CANCEL_URL || (location.origin + "/products/aiec-light/cancel/")).replace(/\/+$/, "") + "/";

  if (!GATE_BASE) console.warn("[AIEC] GATE_BASE 未設定です。");

  // ====== util ======
  async function j(url, opts) {
    const r = await fetch(url, { credentials: "include", ...opts });
    const ct = (r.headers.get("content-type") || "").toLowerCase();
    const body = ct.includes("application/json") ? await r.json() : await r.text();
    if (!r.ok) throw new Error(typeof body === "string" ? body : (body.message || "HTTP " + r.status));
    return body;
  }
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
    const url = `${GATE_BASE}/v1/plans`;
    return j(url);
  }
  async function startCheckout(planKey, interval) {
    const url = `${GATE_BASE}/v1/checkout/session`;
    const body = {
      plan_key: String(planKey),
      interval: String(interval || "month"),
      success_url: SUCCESS_URL,
      cancel_url: CANCEL_URL,
    };
    const res = await j(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res && res.url) location.href = res.url;
    else throw new Error("checkout_url_not_returned");
  }

  // ====== UI描画 ======
  function renderPlans(list) {
    const host = document.getElementById("plans");
    const err = document.getElementById("error");
    host.innerHTML = "";
    err.style.display = "none";

    list.forEach((p) => {
      const title = el("h2", { style: "margin:0 0 6px;font-size:18px" }, p.name);
      const tagline = el("div", { class: "muted", style: "color:#94a3b8;margin-bottom:8px" }, p.tagline || "");
      const badge = p.badge ? el("span", { class: "tag" }, p.badge) : null;

      const feat = el("ul", { class: "features" });
      (p.features || []).forEach((f) => feat.append(el("li", {}, f)));

      // 月/年のトグル
      // （差分だけ）renderPlans 内のトグル生成を置き換え
      const ivs = Array.isArray(p.intervals) && p.intervals.length ? p.intervals : ["month"];
      const pill = el("div", { class: "pill" });
      ivs.forEach((iv, idx) => {
        const id = `${iv}_${p.key}`;
        const r = el("input", { type: "radio", name: `iv_${p.key}`, id, value: iv, ...(idx === 0 ? { checked: "checked" } : {}) });
        pill.append(
          el("label", { for: id }, r, el("span", {}, iv === "month" ? "月額" : "年額"))
        );
      });

      btn.addEventListener("click", async () => {
        btn.disabled = true;
        try {
          let interval = (pill.querySelector("input:checked") || {}).value || ivs[0];
          // 念のため、許可されてない値は送らない
          if (!ivs.includes(interval)) interval = ivs[0];
          await startCheckout(p.key, interval);
        } catch (e) {
          // エラー本文を必ず表示（422の原因がそのまま見える）
          if (e.responseBody) alert(`購入手続きに失敗しました。\n${e.responseBody}`);
          else alert(`購入手続きに失敗しました。\n${e.message || e}\nHTTP ${e.status || ""}`);
        } finally {
          btn.disabled = false;
        }
      });


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
      const plans = await fetchPlans(); // [{key,name,tagline,features,intervals,badge?}]
      if (!Array.isArray(plans) || !plans.length) throw new Error("plans_empty");
      renderPlans(plans);
    } catch (e) {
      console.error(e);
      const err = document.getElementById("error");
      err.textContent = "プラン情報の取得に失敗しました。時間をおいて再度お試しください。";
      err.style.display = "block";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
  async function j(url, opts) {
    const r = await fetch(url, { credentials: "include", ...opts });
    const ct = (r.headers.get("content-type") || "").toLowerCase();
    const raw = ct.includes("application/json") ? await r.json() : await r.text();
    if (!r.ok) {
      const err = new Error(typeof raw === "string" ? raw : (raw.detail || raw.message || "HTTP " + r.status));
      err.status = r.status; err.responseBody = typeof raw === "string" ? raw : JSON.stringify(raw);
      throw err;
    }
    return raw;
  }

})();

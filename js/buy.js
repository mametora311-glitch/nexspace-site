(function () {
  "use strict";

  // 環境変数（index.html などで window に差し込む想定）
  const GATE = (window.AIEC_GATE_BASE || "").replace(/\/+$/, "");
  function normUrl(u) {
    u = String(u || "").trim();
    if (!u) return location.origin + "/success/";
    if (/\.[a-z0-9]+$/i.test(u)) return u;
    return u.replace(/\/+$/, "") + "/";
  }
  const SUCCESS_URL = normUrl(window.AIEC_SUCCESS_URL || (location.origin + "/success/index.html"));
  const CANCEL_URL = normUrl(window.AIEC_CANCEL_URL || (location.origin + "/products/aiec-light/cancel/"));

  // 便利関数
  const asJson = (r) => r.json();
  async function j(url, opt) {
    const r = await fetch(url, opt);
    if (!r.ok) {
      let body = "";
      try { body = await r.text(); } catch {}
      throw new Error(`HTTP ${r.status}: ${body}`);
    }
    return asJson(r);
  }
  const el = (tag, props = {}, html = "") => {
    const x = Object.assign(document.createElement(tag), props);
    if (html) x.innerHTML = html;
    return x;
  };

  async function render() {
    const root = document.getElementById("plans");
    const errEl = document.getElementById("error");
    if (!root) return;

    try {
      if (!GATE) throw new Error("AIEC_GATE_BASE が設定されていません。");

      // 料金プラン一覧を取得（{ plan_key, interval_key, price_id } など）
      const plans = await j(`${GATE}/v1/plans`);
      root.innerHTML = "";

      plans.forEach((p) => {
        const options = p.intervals || p.interval_options || p.billing_intervals || [];
        const pick = options[0] || { key: (p.default_interval || "month"), label: (p.interval_label || "月額") };

       const intervalKey   = pick.key || "month";
       const intervalLabel = pick.label || "月額";
       const priceText     = p.price_label || "¥3,980/月";

       const card = el("div", { className: "plan-card" });
         card.append(
          el("h3", {}, `${p.name}（${intervalLabel}）`),
         el("p", {}, p.description || ""),
          el(
            "button",
        {
         className: "buy",
         onclick: async () => {
          try {
            const body = {
              plan: p.key,                 // 例: 'light'
              interval: intervalKey,       // 例: 'month'
              mode: "subscription",
              success_url: SUCCESS_URL,
              cancel_url: CANCEL_URL,
            };
            console.log("checkout body:", body);
            const res = await j(`${GATE}/v1/checkout/session`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            if (!res || !res.url) throw new Error("Checkout URL が取得できませんでした。");
            location.href = res.url;
          } catch (e) {
            console.error(e);
            alert(`購入手続きに失敗しました。\n${e.message || e}`);
          }
        },
      },
      `今すぐ無料体験をはじめる（${priceText}）`
    )
  );
  root.appendChild(card);
});
    } catch (e) {
      console.error(e);
      errEl.innerText = e.message || e;
    }
  }

  render();
})();
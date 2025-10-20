(async function () {
  "use strict";

  const GATE = (window.AIEC_GATE_BASE || "").replace(/\/+$/, "");
  function normUrl(u){u=String(u).trim(); if(/\.[a-z0-9]+$/i.test(u)) return u; return u.replace(/\/+$/,"")+"/";}
  const SUCCESS_URL = normUrl(window.AIEC_SUCCESS_URL || (location.origin + "/success/index.html"));
  const CANCEL_URL  = normUrl(window.AIEC_CANCEL_URL  || (location.origin + "/products/aiec-light/cancel/"));

  async function j(url, opts){ const r = await fetch(url, opts); if(!r.ok){throw new Error(`HTTP ${r.status}: ${await r.text().catch(()=> "")}`)}; const ct=r.headers.get("content-type")||""; return ct.includes("application/json")? r.json(): r.text(); }

  // 既存ページの要素をなるべく拾うためのセレクタ候補
  const BUTTON_SEL = {
    light:  '[data-plan="light"] button, #light button, #plan-light button',
    middle: '[data-plan="middle"] button, #middle button, #plan-middle button',
    pro:    '[data-plan="pro"] button, #pro button, #plan-pro button'
  };
  const TITLE_SEL = {
    light:  '[data-plan="light"], #light, #plan-light',
    middle: '[data-plan="middle"], #middle, #plan-middle',
    pro:    '[data-plan="pro"], #pro, #plan-pro'
  };

  function findButton(plan){ return document.querySelector(BUTTON_SEL[plan]); }
  function findRoot(plan){ return document.querySelector(TITLE_SEL[plan]); }

  // クリック時：UIは触らずPOSTだけ飛ばす
  async function startCheckout(planKey){
    const body = {
      plan: planKey,
      interval: "month",                // UIを変えずに月額固定
      mode: "subscription",
      success_url: SUCCESS_URL,
      cancel_url: CANCEL_URL
    };
    const resp = await j(`${GATE}/v1/checkout/session`, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(body)
    });
    if(!resp || !resp.url) throw new Error("Checkout URL の生成に失敗しました。");
    location.href = resp.url;
  }

  async function wire(){
    if(!GATE) throw new Error("AIEC_GATE_BASE が設定されていません。");
    const plans = await j(`${GATE}/v1/plans`);     // ← ここから price_label をもらう

    // 表示価格の差し替え＆クリック付与（UIは変更しない）
    for(const p of plans){
      const btn = findButton(p.key);
      if(btn){
        // 表示価格がplansに入ってる場合のみ上書き。無ければそのまま（固定文言を残す）
        if(p.price_label){
          // ボタン内のテキストに価格を埋め込む（既存の「（¥xxxx/月）」を丸ごと置き換え）
          const base = btn.textContent.replace(/（[^）]*）/g, "").trim(); // 既存の括弧付き価格を除去
          btn.textContent = `${base}（${p.price_label}）`;
        }
        btn.onclick = async () => {
          btn.disabled = true;
          try { await startCheckout(p.key); }
          catch(e){ alert(`購入手続きに失敗しました。\n${e.message || e}`); }
          finally { btn.disabled = false; }
        };
      }
      // 見出しに「（月額）」等があるならそのまま残す。触らない。
    }
  }

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", wire)
    : wire();
})();
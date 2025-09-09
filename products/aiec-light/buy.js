(() => {
  'use strict';

  // --- 実行時設定の取り込み（未定義ガード込み）
  const cfg = Object.assign(
    { API_BASE: 'http://127.0.0.1:8000', STRIPE_PUBLISHABLE_KEY: 'pk_live_51RzC5ODObxTEUuKDs77DdvjuD5paQlsgAvX1yaYop8Kvp4mbkzUYSlJJrDBQHvOpOL2RWv3kIXXkPKXDat5Umh0q009DUTenRP', PRICE_ID: null },
    window.AIEC_CONFIG || {}
  );
  console.log('[AIEC] cfg', cfg);

  async function onBuyClick(e) {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      const resp = await fetch(`${cfg.API_BASE}/checkout/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cfg.PRICE_ID ? { price_id: cfg.PRICE_ID } : {})
      });
      if (!resp.ok) {
        const t = await resp.text().catch(()=>'');
        alert('セッション作成に失敗しました。設定（API_BASE/キー/price）を確認してください。');
        console.error('[AIEC] create failed', resp.status, t);
        return;
      }
      const json = await resp.json();
      if (!json.id) { alert('セッションIDの取得に失敗しました。'); return; }

      const stripe = window.Stripe(cfg.STRIPE_PUBLISHABLE_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId: json.id });
      if (error) { alert('決済ページへの遷移に失敗しました。'); console.error(error); }
    } catch (err) {
      alert('エラーが発生しました。コンソールを確認してください。');
      console.error(err);
    } finally {
      btn.disabled = false;
    }
  }

  function bind() {
    const btn = document.getElementById('buyButton') || document.querySelector('[data-buy]');
    console.log('[AIEC] buy button node =', btn);
    if (!btn) { console.error('[AIEC] 購入ボタンが見つかりません'); return; }
    const safe = btn.cloneNode(true);
    btn.replaceWith(safe);
    safe.addEventListener('click', onBuyClick, { passive: false });
    console.log('[AIEC] buy button bound.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind, { once: true });
  } else {
    bind();
  }
})();

(() => {
  'use strict';

  // 既定 + window.AIEC_CONFIG マージ
  const cfg = Object.assign({
    API_BASE: 'https://aiec-api-1.onrender.com',
    STRIPE_PUBLISHABLE_KEY: 'pk_live_51RzC5ODObxTEUuKDs77DdvjuD5paQlsgAvX1yaYop8Kvp4mbkzUYSlJJrDBQHvOpOL2RWv3kIXXkPKXDat5Umh0q009DUTenRP',
    PRICE_ID: null
  }, (window.AIEC_CONFIG || {}));

  function assertStripeLoaded() {
    if (!window.Stripe || typeof window.Stripe !== 'function') {
      throw new Error('[AIEC] Stripe.js が読み込まれていません。<script src="https://js.stripe.com/v3"></script> を先に配置してください。');
    }
  }

  async function createCheckoutSession(bodyObj) {
    const url = `${cfg.API_BASE}/checkout/create`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyObj || {})
    });
    if (!resp.ok) {
      const text = await resp.text().catch(()=>'');
      console.error('[AIEC] /checkout/create failed', resp.status, text);
      throw new Error('セッション作成に失敗しました。API/キー/price設定を確認してください。');
    }
    const json = await resp.json().catch(() => ({}));
    if (!json || !json.id) throw new Error('セッションIDの取得に失敗しました。');
    return json.id;
  }

  async function onBuyClick(e) {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      assertStripeLoaded();
      const sessionId = await createCheckoutSession(cfg.PRICE_ID ? { price_id: cfg.PRICE_ID } : {});
      const stripe = window.Stripe(cfg.STRIPE_PUBLISHABLE_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('[AIEC] redirectToCheckout error', error);
        alert('決済ページへの遷移に失敗しました。コンソールを確認してください。');
      }
    } catch (err) {
      console.error('[AIEC] onBuyClick error', err);
      alert(err && err.message ? err.message : 'エラーが発生しました。コンソールを確認してください。');
    } finally {
      btn.disabled = false;
    }
  }

  function bind() {
    const btn = document.getElementById('buyButton') || document.querySelector('[data-buy]');
    if (!btn) { console.error('[AIEC] 購入ボタンが見つかりません (#buyButton または [data-buy])'); return; }
    // 重複バインド防止
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

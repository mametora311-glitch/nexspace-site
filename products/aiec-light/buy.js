/* AIEC Light — Stripe client-only checkout (no server fetch) */
(() => {
  'use strict';
  const cfg = Object.assign({
    STRIPE_PUBLISHABLE_KEY: "pk_live_51RzC5ODObxTEUuKDs77DdvjuD5paQlsgAvX1yaYop8Kvp4mbkzUYSlJJrDBQHvOpOL2RWv3kIXXkPKXDat5Umh0q009DUTenRP",
    PRICE_ID: "price_1S5PKhDObxTEUuKDOV5OazEe",
    SUCCESS_URL: "https://nexspace.jp/success/?session_id={CHECKOUT_SESSION_ID}",
    CANCEL_URL: "https://nexspace.jp/products/aiec-light/"
  }, (window.AIEC_CONFIG || {}));

  const btn = document.getElementById('buyButton');
  if (!btn) { console.error('[AIEC] buyButton not found'); return; }

  function guard() {
    if (!window.Stripe)         { alert("Stripe.jsの読み込みに失敗しました。"); return false; }
    if (!cfg.STRIPE_PUBLISHABLE_KEY){ alert("Stripe公開鍵が未設定です。"); return false; }
    if (!cfg.PRICE_ID)          { alert("PRICE_IDが未設定です。"); return false; }
    return true;
  }

  const mail = document.getElementById('buyerEmail')?.value?.trim();
  if (mail) localStorage.setItem('aiec_license_key', mail);
  localStorage.setItem('aiec_device_id', (navigator.userAgent||'web').slice(0,64));

  btn.addEventListener('click', async () => {
    if (!guard()) return;
    btn.disabled = true;
    try {
      const stripe = Stripe(cfg.STRIPE_PUBLISHABLE_KEY);
      const { error } = await stripe.redirectToCheckout({
        mode: 'subscription',
        lineItems: [{ price: cfg.PRICE_ID, quantity: 1 }],
        successUrl: cfg.SUCCESS_URL,
        cancelUrl: cfg.CANCEL_URL
      });
      if (error) alert(error.message || 'Checkoutへ移動できませんでした。');
    } catch (e) {
      alert(e?.message || 'エラーが発生しました。');
    } finally {
      btn.disabled = false;
    }
  }, { passive: true });
})();

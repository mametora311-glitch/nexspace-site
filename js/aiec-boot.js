// js/aiec-boot.js
(() => {
    'use strict';

    // すでにStripeが居たら再読込しない（重複警告の回避）
    function ensureStripeLoaded() {
        return new Promise((resolve) => {
            if (window.Stripe) return resolve();
            const s = document.createElement('script');
            s.src = 'https://js.stripe.com/v3';
            s.defer = true;
            s.onload = () => resolve();
            document.head.appendChild(s);
        });
    }

    // 環境判定 → AIEC_CONFIG を一元設定
    const isProd = location.protocol === 'https:' && /(^|\.)nexspace\.jp$/.test(location.hostname);
    window.AIEC_CONFIG = Object.assign({}, window.AIEC_CONFIG || {}, {
        API_BASE: isProd ? 'https://aiec-api-1.onrender.com' : 'http://127.0.0.1:8000',
        STRIPE_PUBLISHABLE_KEY: isProd ? 'pk_live_51RzC5ODObxTEUuKDs77DdvjuD5paQlsgAvX1yaYop8Kvp4mbkzUYSlJJrDBQHvOpOL2RWv3kIXXkPKXDat5Umh0q009DUTenRP' : 'pk_test_********'
        // ,PRICE_ID: 'price_xxxxxxxxx'  // 固定したい場合のみ
    });

    // グローバルに1度だけStripeを用意
    ensureStripeLoaded().then(() => {
        console.log('[AIEC] boot ok', window.AIEC_CONFIG);
    });
})();

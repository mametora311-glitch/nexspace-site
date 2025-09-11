(()=>{'use strict';
  const cfg = Object.assign({
    API_BASE:'https://aiec-api-1.onrender.com',
    STRIPE_PUBLISHABLE_KEY:'pk_live_51RzC5ODObxTEUuKDs77DdvjuD5paQlsgAvX1yaYop8Kvp4mbkzUYSlJJrDBQHvOpOL2RWv3kIXXkPKXDat5Umh0q009DUTenRP',
    PRICE_ID:null
  }, (window.AIEC_CONFIG||{}));

  function requireStripe(){
    if(!window.Stripe||typeof window.Stripe!=='function'){
      throw new Error('Stripe.jsの読み込みに失敗しました。ネットワーク状態をご確認ください。');
    }
  }

  async function warmup(){
    try{ await fetch(cfg.API_BASE+'/healthz',{method:'GET'}); }catch(e){}
  }

  async function createSession(payload){
    const url=cfg.API_BASE+'/checkout/create';
    const res=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload||{})});
    if(!res.ok){
      const t=await res.text().catch(()=> '');
      console.error('[AIEC] /checkout/create failed',res.status,t);
      throw new Error('セッション作成に失敗しました（設定/回線/サーバ状態をご確認ください）。');
    }
    const j=await res.json().catch(()=> ({}));
    if(!j||!j.id) throw new Error('セッションIDの取得に失敗しました。');
    return j.id;
  }

  async function onBuy(e){
    const btn=e.currentTarget;
    if(btn.dataset.busy==='1') return;
    btn.dataset.busy='1'; btn.disabled=true;
    try{
      await warmup();
      requireStripe();
      const payload = cfg.PRICE_ID ? {price_id:cfg.PRICE_ID} : {};
      const sessionId = await createSession(payload);
      const stripe = window.Stripe(cfg.STRIPE_PUBLISHABLE_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if(error){ console.error('[AIEC] redirect error',error); alert('決済ページへの遷移に失敗しました。しばらくして再度お試しください。'); }
    }catch(err){
      console.error('[AIEC] buy error',err);
      alert(err && err.message ? err.message : 'エラーが発生しました。時間をおいて再試行してください。');
    }finally{
      btn.disabled=false; btn.dataset.busy='0';
    }
  }

  function bind(){
    const btn=document.getElementById('buyButton')||document.querySelector('[data-buy]');
    if(!btn){ console.error('[AIEC] #buyButton が見つかりません'); return; }
    const clone=btn.cloneNode(true); btn.replaceWith(clone);
    clone.addEventListener('click',onBuy,{passive:false});
  }

  (document.readyState==='loading')?document.addEventListener('DOMContentLoaded',bind,{once:true}):bind();
})();

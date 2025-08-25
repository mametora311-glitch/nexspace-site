(function(){
  const cfg = (window.AIEC_CONFIG||{});
  document.querySelectorAll(".js-year").forEach(n=>n.textContent = new Date().getFullYear());
  document.querySelectorAll(".js-company").forEach(n=>n.textContent = cfg.COMPANY_NAME || "Nexspace");
  document.querySelectorAll(".js-mail").forEach(n=>{
    const m = cfg.SUPPORT_EMAIL || "support@example.com";
    n.textContent = m; n.setAttribute("href","mailto:"+m);
  });
  document.querySelectorAll("[data-buy]").forEach(btn=>{
    if(!cfg.PAYMENT_LINK_URL){ btn.style.display="none"; return; }
    btn.addEventListener("click",()=>{ location.href = cfg.PAYMENT_LINK_URL; });
  });
})();

(function () {
  const host = document.getElementById('history-list');
  const dataEl = document.getElementById('history-data');
  if (!host || !dataEl) return;

  // JSON 取得
  let items = [];
  try { items = JSON.parse(dataEl.textContent || '[]'); } catch { items = []; }

  // 並び整える：UNKNOWNは末尾、他は新しい→古い
  const pad = s => String(s).padStart(2, '0');
  const key = d => {
    if (!d || d === 'UNKNOWN') return '00000000';
    const [y,m,day] = String(d).split('-');
    return (y || '0000') + pad(m || '00') + pad(day || '00');
  };

  // ★ ここを修正：date を渡す
  items.sort((a,b) => key(b.date).localeCompare(key(a.date)));

  // 描画
  const cssRow = 'padding:12px 0;border-top:1px solid #1f2a44;';
  const cssTime = 'min-width:9ch;color:#93c5fd;font-variant-numeric:tabular-nums;';
  const cssWrap = 'display:flex;gap:12px;align-items:baseline;flex-wrap:wrap;';
  const cssDesc = 'margin:6px 0 0;color:#94a3b8;';
  const esc = s => String(s || '').replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

  if (!items.length) {
    host.innerHTML = `<li style="${cssRow}">更新情報はありません。</li>`;
    return;
  }
  host.innerHTML = items.map((it,i,arr) => {
    const edge = (i === arr.length - 1) ? 'border-bottom:1px solid #1f2a44;' : '';
    return `
      <li style="${cssRow}${edge}">
        <div style="${cssWrap}">
          <time style="${cssTime}">${esc(it.date || 'UNKNOWN')}</time>
          <span style="font-weight:600;">${esc(it.title || '（無題）')}</span>
        </div>
        ${it.desc ? `<p style="${cssDesc}">${esc(it.desc)}</p>` : ''}
      </li>`;
  }).join('');
})();

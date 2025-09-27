<script>
(async () => {
    const params = new URLSearchParams(location.search);
    const sid = params.get('session_id'); // cs_live_...
    const GATE = 'https://aiec-gate-bbsaeuy2ma-an.a.run.app'; // ← 現在のGate URLに合わせる

    if (!sid) {document.body.insertAdjacentHTML('beforeend', '<p>session_id がありません</p>'); return; }

    try {
    // 1) クレーム → DLトークン取得
    const r = await fetch(`${GATE}/v1/claim`, {
        method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({session_id: sid })
    });
    if (!r.ok) throw new Error(`claim ${r.status}`);
    const {download_token} = await r.json();

    // 2) そのままDL開始（クエリに token を付与）
    const url = `${GATE}/v1/download/light?token=${encodeURIComponent(download_token)}`;
    // 自動DL + フォールバックリンク
    const a = document.createElement('a'); a.href = url; a.download = ''; document.body.appendChild(a); a.click();
    document.body.insertAdjacentHTML('beforeend', `<p>自動で始まらない場合は <a href="${url}">こちら</a></p>`);
    } catch (e) {
        console.error(e);
    document.body.insertAdjacentHTML('beforeend','<p>ダウンロード処理に失敗しました。時間をおいて再試行してください。</p>');
    }
})();
</script>

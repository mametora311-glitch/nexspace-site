(() => {
    const params = new URLSearchParams(location.search);
    const sid = params.get('session_id'); // cs_live_...
    const GATE = 'https://aiec-gate-bbsaeuy2ma-an.a.run.app'; // 現在のGate URL

    const showMsg = (html) => {
        const p = document.createElement('p');
        p.innerHTML = html;
        document.body.appendChild(p);
    };

    if (!sid) {
        showMsg('<span class="error">session_id がありません。</span>');
        return;
    }

    (async () => {
        try {
            // 1) claim → DLトークン取得
            const r = await fetch(`${GATE}/v1/claim`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ session_id: sid })
            });
            if (!r.ok) throw new Error(`claim ${r.status}`);
            const data = await r.json();
            const download_token = data.download_token;
            if (!download_token) throw new Error('no download_token');

            // 2) そのままDL開始（tokenをクエリに付与）
            const url = `${GATE}/v1/download/light?token=${encodeURIComponent(download_token)}`;

            // 自動ダウンロード
            const a = document.createElement('a');
            a.href = url;
            a.download = '';
            document.body.appendChild(a);
            a.click();

            // フォールバックリンク
            showMsg(`自動で始まらない場合は <a class="ok" href="${url}">こちら</a> から保存してください。`);
        } catch (e) {
            console.error(e);
            showMsg('<span class="error">ダウンロード処理に失敗しました。時間をおいて再試行してください。</span>');
        }
    })();
})();

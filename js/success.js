document.addEventListener("DOMContentLoaded", function() {
    const downloadLink = document.getElementById("download-link");
    const errorMessage = document.getElementById("error-message");

    try {
        const urlParams = new URLSearchParams(window.location.search);
        // Stripeは checkout session id を `session_id` というクエリパラメータで返す
        const stripeSessionId = urlParams.get('session_id'); 

        if (stripeSessionId) {
            // ライセンスキーとしてブラウザのlocalStorageに保存
            localStorage.setItem("aiec_license_key", stripeSessionId);

            // デバイスIDもなければ簡易的に生成して保存
            if (!localStorage.getItem("aiec_device_id")) {
                const deviceId = "web-" + Date.now() + "-" + Math.random().toString(36).substring(2, 10);
                localStorage.setItem("aiec_device_id", deviceId);
            }
            
            console.log("ライセンスキーを保存しました:", stripeSessionId);
            
            // 成功したのでダウンロードリンクを表示
            if(downloadLink) {
                downloadLink.style.display = 'inline-block';
            }

        } else {
            // URLにsession_idがなかった場合
            throw new Error("決済情報が見つかりませんでした。");
        }
    } catch (error) {
        console.error("処理に失敗しました:", error);
        if(errorMessage) {
            errorMessage.textContent = "エラーが発生しました。決済は完了していますが、製品のダウンロードができません。お手数ですが、サポートまでお問い合わせください。";
        }
    }
});
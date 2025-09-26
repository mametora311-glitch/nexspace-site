// js/aiec-boot.js (最終版・フルコード)

// ★★★ 必ずご自身のCloud Runの本番URLに書き換えてください ★★★
const API_BASE_URL = "https://aiec-gate-766292311890.asia-northeast1.run.app";

document.addEventListener("DOMContentLoaded", function() {
    const licenseKeyDisplay = document.getElementById("license-key-display");
    const downloadButton = document.getElementById("download-button");
    const buttonText = document.querySelector("#download-button .button-text");
    const copyButton = document.getElementById("copy-button"); // コピーボタンを取得

    // ブラウザに保存されたライセンスキーとデバイスIDを取得
    const license_key = localStorage.getItem("aiec_license_key");
    const device_id = localStorage.getItem("aiec_device_id");

    // ライセンスキーを表示
    if (license_key && licenseKeyDisplay) {
        licenseKeyDisplay.textContent = license_key;
    }

    // キーがない場合はボタンを無効化して終了
    if (!license_key || !device_id) {
        if(licenseKeyDisplay) licenseKeyDisplay.textContent = "ライセンス情報が見つかりません";
        if(downloadButton) downloadButton.disabled = true;
        if(copyButton) copyButton.disabled = true;
        return;
    }
    
    // --- 認証処理 ---
    let jwtToken = null; // 取得したJWTトークンを保持する変数

    async function issueTokenAndProceed() {
        try {
            const response = await fetch(API_BASE_URL + "/auth/issue", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ license_key, device_id }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || "Authentication failed");
            }
            
            const data = await response.json();
            jwtToken = data.token; // トークンを保存
            
            // 認証成功後、ダウンロードボタンを有効化
            downloadButton.disabled = false;
            buttonText.textContent = "インストーラーをダウンロード";

        } catch (error) {
            console.error("認証に失敗:", error);
            buttonText.textContent = "認証に失敗しました";
        }
    }
    
    // --- コピー処理 ---
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            if (!license_key) return;
            navigator.clipboard.writeText(license_key).then(() => {
                copyButton.textContent = 'コピー完了!';
                setTimeout(() => { copyButton.textContent = 'コピー'; }, 2000); // 2秒後にテキストを元に戻す
            }).catch(err => {
                console.error('コピーに失敗しました', err);
                alert('コピーに失敗しました。');
            });
        });
    }

    // --- ダウンロード処理 ---
    if (downloadButton) {
        downloadButton.addEventListener("click", async function() {
            if (!jwtToken) {
                alert("認証が完了していません。ページを再読み込みしてください。");
                return;
            }

            const originalText = buttonText.textContent;
            buttonText.textContent = "ダウンロード準備中...";
            downloadButton.disabled = true;

            try {
                // ★★★ バックエンドに実装が必要なエンドポイント ★★★
                const response = await fetch(API_BASE_URL + "/v1/download/light", {
                    method: "GET", // またはPOST
                    headers: {
                        "Authorization": "Bearer " + jwtToken,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.detail || "Download request failed");
                }

                // ファイルをダウンロード
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = url;
                
                const disposition = response.headers.get('content-disposition');
                let filename = 'AIEC-Light-Installer.zip'; // デフォルトのファイル名
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    const matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) {
                        filename = matches[1].replace(/['"]/g, '');
                    }
                }
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                
                buttonText.textContent = "ダウンロード完了";

            } catch (error) {
                console.error("ダウンロードに失敗:", error);
                alert("ダウンロードに失敗しました。時間をおいて再度お試しください。");
                buttonText.textContent = originalText;
                downloadButton.disabled = false;
            }
        });
    }

    // ページ読み込み時に認証を開始
    issueTokenAndProceed();
});


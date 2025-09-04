document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("decideBtn");
    const resultDiv = document.getElementById("result");

    btn.addEventListener("click", () => {
        // ボタンを消す
        btn.style.display = "none";

        // 結果表示を中央に
        resultDiv.classList.remove("hidden");

        let showDo = true; // 「する／しない」交互フラグ

        // 0.3秒間隔で「する／しない」を交互に表示
        const intervalId = setInterval(() => {
            resultDiv.textContent = showDo ? "する" : "しない";
            showDo = !showDo;
        }, 300);

        // 5秒後に最終結果を表示
        setTimeout(() => {
            clearInterval(intervalId); // 点滅停止
            const rand = Math.random();
            if (rand < 0.6) {
                resultDiv.textContent = "する";
                resultDiv.classList.add("ok");
                resultDiv.classList.remove("ng");
            } else {
                resultDiv.textContent = "しない";
                resultDiv.classList.add("ng");
                resultDiv.classList.remove("ok");
            }
        }, 3000);
    });
});
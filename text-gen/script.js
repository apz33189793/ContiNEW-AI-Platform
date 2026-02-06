document.getElementById('update-btn').addEventListener('click', function() {
    const area = document.getElementById('text-content-area');
    const status = document.getElementById('text-status');
    
    if (!area || !status) return;

    status.innerText = 'AI 思考中...';
    status.className = 'text-xs font-semibold text-orange-500 bg-orange-100 px-2 py-1 rounded animate-pulse';

    setTimeout(() => {
        status.innerText = '生成完成';
        status.className = 'text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded';
        
        area.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-slate-800">Q3 市場競爭分析與策略建議</h2>
            <h3 class="text-xl font-bold mb-2 text-primary">1. 執行摘要</h3>
            <p class="mb-4">本季度市場數據顯示，雖然整體經濟環境趨緩，但針對 Z 世代的數位產品需求逆勢增長了 15%。競品 A 透過降價策略獲取了短期市佔，但其用戶留存率下降了 8%。</p>
            <h3 class="text-xl font-bold mb-2 text-primary">2. 關鍵發現</h3>
            <ul class="list-disc pl-5 mb-4">
                <li><strong>價格敏感度降低：</strong> 用戶更看重品牌價值觀與環保承諾。</li>
                <li><strong>社群影響力：</strong> 短影音內容的轉化率是圖文內容的 3 倍。</li>
            </ul>
            <h3 class="text-xl font-bold mb-2 text-primary">3. 策略建議</h3>
            <p>建議將 Q4 行銷預算的 40% 重新分配至 TikTok 與 Reels 廣告，並強調產品的永續性特點。</p>
        `;
    }, 1500);
});
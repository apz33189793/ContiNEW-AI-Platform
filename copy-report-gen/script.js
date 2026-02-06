document.getElementById('update-btn').addEventListener('click', function() {
    const area = document.getElementById('text-content-area');
    const status = document.getElementById('text-status');
    
    if (!area || !status) return;

    status.innerText = 'AI 生成中...';
    status.className = 'text-xs font-semibold text-orange-500 bg-orange-100 px-2 py-1 rounded animate-pulse';

    setTimeout(() => {
        status.innerText = '生成完成';
        status.className = 'text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded';
        
        area.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-slate-800">2024 整合行銷傳播策略規劃報告</h2>
            <h3 class="text-xl font-bold mb-2 text-primary">壹、執行摘要</h3>
            <p class="mb-4">本報告針對 2024 年 IMC 策略進行全面規劃。市場機會：B2B 企業服務數位化需求持續增長，預估年度市場規模達 120 億。核心目標：品牌知名度 +25%、潛在客戶 +40%、交叉銷售率 +15%。</p>
            <h3 class="text-xl font-bold mb-2 text-primary">貳、競品比較分析（新增）</h3>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>競品 A：</strong>高端策略顧問，客單價 200-500 萬。優勢：品牌歷史久、國際案例多；劣勢：價格高、交期長。</li>
                <li><strong>競品 B：</strong>數位行銷執行，客單價 50-150 萬。優勢：技術強、投放成效好；劣勢：缺乏策略高度。</li>
                <li><strong>我們的差異：</strong>提供策略+執行的整合方案，性價比更佳，可從規劃到落地一條龍服務。</li>
            </ul>
            <h3 class="text-xl font-bold mb-2 text-primary">參、策略建議</h3>
            <p>建議將 Q4 行銷預算的 40% 重新分配至 LinkedIn 與 Google Ads，並強化內容行銷與白皮書產出，建立思想領導地位。</p>
        `;
    }, 1500);
});

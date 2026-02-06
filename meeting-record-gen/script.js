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
            <h2 class="text-2xl font-bold mb-4 text-slate-800">【2024 Q4 品牌行銷專案 第三次專案會議記錄】</h2>
            <div class="space-y-4 text-sm">
                <p><strong>會議日期：</strong>2024 年 9 月 15 日 | <strong>主持人：</strong>王經理</p>
                <h3 class="text-lg font-bold text-primary">一、決議事項</h3>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Q4 行銷主軸確認：品牌年輕化、節慶檔期、會員再購三大方向</li>
                    <li>預算分配通過：數位廣告 42%、社群製作 28%、OTV 18%、公關 12%</li>
                    <li>建立三階段審核機制：初稿→複審→決審，各階段 2 工作天</li>
                </ul>
                <h3 class="text-lg font-bold text-primary">二、行動項目</h3>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>陳副理</strong>：9/20 前產出 Q4 行銷時程表</li>
                    <li><strong>張組長</strong>：9/22 前提供主視覺初稿</li>
                    <li><strong>林專員</strong>：9/25 前完成 AI 平台效益評估簡報</li>
                    <li><strong>鄭會計</strong>：9/18 前更新預算分配表</li>
                </ul>
                <h3 class="text-lg font-bold text-primary">三、下次會議</h3>
                <p>2024/09/22（五）14:00 — 主視覺審核、社群內容腳本討論</p>
            </div>
        `;
    }, 1500);
});

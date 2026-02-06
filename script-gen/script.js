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
            <h2 class="text-xl font-bold mb-4 text-slate-800">【OTV 品牌形象影片腳本 v.2】</h2>
            <div class="space-y-3 text-sm leading-relaxed">
                <p class="text-slate-500 text-xs">專案：2024 年度品牌形象影片 | 時長：60 秒</p>
                <div class="border-l-4 border-primary pl-4 py-2">
                    <p class="font-bold text-slate-600">【第一幕】開場 — 0:00-0:08</p>
                    <p class="mt-1">畫面：黑畫面淡入，品牌 Logo 自中心浮現，周圍粒子流動。</p>
                    <p class="text-slate-600 mt-1">旁白：「在瞬息萬變的時代，唯有不斷創新，才能持續領先。」</p>
                </div>
                <div class="border-l-4 border-primary pl-4 py-2">
                    <p class="font-bold text-slate-600">【第二幕】企業願景 — 0:08-0:22</p>
                    <p class="mt-1">畫面：航拍城市天際線，剪接至辦公室團隊側寫。</p>
                    <p class="text-slate-600 mt-1">旁白：「十五年來，我們專注於幫助客戶創造更大的價值...」</p>
                </div>
                <div class="border-l-4 border-primary pl-4 py-2">
                    <p class="font-bold text-slate-600">【第三幕】核心價值 — 0:22-0:38</p>
                    <p class="mt-1">畫面：快速剪接專案成果、數據動畫。節奏由慢轉快。</p>
                    <p class="text-slate-600 mt-1">旁白：「整合行銷、品牌策略、數位轉型——為超過 500 家企業寫下成功故事。」</p>
                </div>
                <div class="border-l-4 border-primary pl-4 py-2">
                    <p class="font-bold text-slate-600">【第四幕】結尾 CTA — 0:50-0:60</p>
                    <p class="mt-1">畫面：Logo + Slogan 字卡。</p>
                    <p class="text-slate-600 mt-1">旁白：「你的下一篇章，從這裡開始。續續院，與你一起前行。」</p>
                </div>
            </div>
        `;
    }, 1500);
});

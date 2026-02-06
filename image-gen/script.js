document.getElementById('gen-btn').addEventListener('click', function() {
    const btnIcon = document.getElementById('img-gen-icon');
    const btnText = document.getElementById('img-gen-text');
    const grid = document.getElementById('image-grid');

    if (!btnIcon || !btnText || !grid) return;

    // Loading State
    btnIcon.classList.add('animate-spin');
    btnText.innerText = '生成中...';
    
    // Clear grid and show skeletons
    grid.innerHTML = `
        <div class="aspect-video bg-slate-200 animate-pulse rounded-xl"></div>
        <div class="aspect-video bg-slate-200 animate-pulse rounded-xl"></div>
    `;

    // Simulate API delay
    setTimeout(() => {
        btnIcon.classList.remove('animate-spin');
        btnText.innerText = '再次生成';
        
        // Show Result
        grid.innerHTML = `
            <div class="group relative aspect-video bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer border-2 border-transparent hover:border-secondary transition-all">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" class="w-full h-full object-cover">
                <div class="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs font-bold rounded shadow">Ver A</div>
            </div>
            <div class="group relative aspect-video bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer border-2 border-transparent hover:border-secondary transition-all">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" class="w-full h-full object-cover">
                <div class="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs font-bold rounded shadow">Ver B</div>
            </div>
        `;
    }, 2000);
});
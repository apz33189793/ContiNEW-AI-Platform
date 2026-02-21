(function() {
    const IMG_BASE = '../img/';
    const RESULT_IMGS = ['img-gen-01.png', 'img-gen-02.png', 'img-gen-03.png'];

    var lightbox = document.getElementById('image-lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (lightbox) {
        lightbox.addEventListener('click', closeLightbox);
    }
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });

    var grid = document.getElementById('image-grid');
    var btnToReview = document.getElementById('btn-to-review');
    var selectHint = document.getElementById('select-hint');
    var selectedFilename = null;

    function setReviewButtonEnabled(enabled) {
        if (!btnToReview) return;
        btnToReview.disabled = !enabled;
        if (enabled) {
            btnToReview.className = 'text-sm px-4 py-2 bg-primary text-white border border-primary rounded-lg hover:opacity-90 transition-all';
            btnToReview.classList.remove('bg-slate-200', 'text-slate-400', 'cursor-not-allowed');
        } else {
            btnToReview.className = 'text-sm px-4 py-2 bg-slate-200 text-slate-400 border border-slate-200 rounded-lg cursor-not-allowed transition-all disabled:opacity-70';
            selectedFilename = null;
        }
    }

    function goToReview() {
        if (selectedFilename) {
            window.location.href = '../review-mode/index.html?img=' + encodeURIComponent(selectedFilename);
        }
    }

    if (grid) {
        grid.addEventListener('click', function(e) {
            var cell = e.target.closest('#image-grid .aspect-square[data-filename]');
            var img = cell ? cell.querySelector('img[src]') : null;
            if (!cell || !img) return;
            e.preventDefault();
            var filename = cell.getAttribute('data-filename');
            if (!filename) return;
            var wasSelected = cell.classList.contains('ring-2');
            if (wasSelected) {
                openLightbox(img.src);
                return;
            }
            grid.querySelectorAll('.aspect-square[data-filename]').forEach(function(c) {
                c.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
            });
            cell.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
            selectedFilename = filename;
            setReviewButtonEnabled(true);
            if (selectHint) selectHint.classList.remove('hidden');
        });
    }
    if (btnToReview) {
        btnToReview.addEventListener('click', function() {
            if (!this.disabled) goToReview();
        });
    }

    document.getElementById('gen-btn').addEventListener('click', function() {
        const btnIcon = document.getElementById('img-gen-icon');
        const btnText = document.getElementById('img-gen-text');
        const gridEl = document.getElementById('image-grid');

        if (!btnIcon || !btnText || !gridEl) return;

        const btn = document.getElementById('gen-btn');
        btn.disabled = true;
        btnIcon.textContent = 'progress_activity';
        btnIcon.classList.add('animate-spin');
        btnText.innerText = '生成中...';
        if (selectHint) selectHint.classList.add('hidden');
        setReviewButtonEnabled(false);

        gridEl.innerHTML = [
            '<div class="aspect-square bg-slate-200 animate-pulse rounded-xl"></div>',
            '<div class="aspect-square bg-slate-200 animate-pulse rounded-xl"></div>',
            '<div class="aspect-square bg-slate-200 animate-pulse rounded-xl"></div>'
        ].join('');

        setTimeout(function() {
            btn.disabled = false;
            btnIcon.textContent = 'bolt';
            btnText.innerText = '再次生成';

            setReviewButtonEnabled(false);
            if (selectHint) selectHint.classList.remove('hidden');

            gridEl.innerHTML = RESULT_IMGS.map(function(file) {
                var src = IMG_BASE + file;
                return '<div class="aspect-square bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all" data-filename="' + file + '">' +
                    '<img src="' + src + '" alt="生成結果" class="w-full h-full object-cover">' +
                    '</div>';
            }).join('');
        }, 1000);
    });
})();
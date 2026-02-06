// 檔案上傳處理函數
function setupFileUpload(uploadId, listId, fileTypes, fileTypeName) {
    const uploadInput = document.getElementById(uploadId);
    const fileList = document.getElementById(listId);
    
    uploadInput.addEventListener('change', function(e) {
        handleFiles(e.target.files, listId, fileTypes);
    });

    // 拖曳上傳
    const uploadArea = uploadInput.closest('.border-dashed');
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('border-primary', 'bg-primary/5');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('border-primary', 'bg-primary/5');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-primary', 'bg-primary/5');
        const files = Array.from(e.dataTransfer.files).filter(file => {
            const ext = '.' + file.name.split('.').pop().toLowerCase();
            return fileTypes.some(type => file.type.includes(type) || file.name.toLowerCase().endsWith(type));
        });
        handleFiles(files, listId, fileTypes);
    });
}

function handleFiles(files, listId, fileTypes) {
    const fileList = document.getElementById(listId);
    Array.from(files).forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200';
        fileItem.innerHTML = `
            <div class="flex items-center gap-2 flex-1 min-w-0">
                <span class="material-symbols-outlined text-slate-400">${getFileIcon(file.name)}</span>
                <span class="text-sm text-slate-700 truncate" title="${file.name}">${file.name}</span>
                <span class="text-xs text-slate-400">(${formatFileSize(file.size)})</span>
            </div>
            <button class="text-slate-400 hover:text-red-500 transition-colors" onclick="this.parentElement.remove()">
                <span class="material-symbols-outlined text-sm">close</span>
            </button>
        `;
        fileList.appendChild(fileItem);
    });
}

function getFileIcon(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
    if (['txt', 'pdf', 'doc', 'docx'].includes(ext)) return 'description';
    return 'insert_drive_file';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// 初始化檔案上傳
setupFileUpload('image-upload', 'image-list', ['image/jpeg', 'image/png', '.jpg', '.png'], '圖片');
setupFileUpload('text-upload', 'text-list', ['text/plain', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.txt', '.pdf', '.docx'], '文本');

// 生成電子書按鈕
document.getElementById('gen-btn').addEventListener('click', function() {
    const imageFiles = document.getElementById('image-upload').files;
    const textFiles = document.getElementById('text-upload').files;
    
    if (imageFiles.length === 0 && textFiles.length === 0) {
        alert('請至少上傳一個圖片或文本檔案');
        return;
    }
    
    // 收集上傳的檔案
    const formData = {
        images: Array.from(imageFiles),
        texts: Array.from(textFiles)
    };
    
    console.log('生成電子書，檔案:', formData);
    
    // 這裡可以加入實際的 API 呼叫
    alert('電子書生成中...');
    
    // 模擬生成完成後顯示完成按鈕
    // document.getElementById('ebook-finish-btn').classList.remove('hidden');
});
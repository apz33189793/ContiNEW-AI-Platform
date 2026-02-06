document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idInput = document.getElementById('login-id');
            if (idInput && idInput.value) {
                // Navigate to dashboard directory
                window.location.href = 'dashboard/index.html';
            } else {
                alert('請輸入員工編號');
            }
        });
    }
});
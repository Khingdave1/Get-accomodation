    // Access DOM elemnts //
const headContent = document.getElementById('header_cont');
const menu = document.getElementById('menu');

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const logBtn = document.getElementById('log-btn');
const passwordError = document.getElementById('passworderror');


// Modify DOM elemnts //

// password confirmation //
confirmPassword.addEventListener('blur', () => {
    if (password.value === confirmPassword.value) {
            password.style.borderBottom = '3px solid #036c23';
            confirmPassword.style.borderBottom = '3px solid #036c23';
            passwordError.style.display = 'none';
    }else {
        password.style.borderBottom = '3px solid #ff0000';
        confirmPassword.style.borderBottom = '3px solid #ff0000';
        passwordError.style.display = 'block';
    }
});

// menu toggle //
menu.addEventListener('click', function(){
    headContent.classList.toggle('open-menu');
});
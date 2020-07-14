    // Access DOM elements //
const headContent = document.getElementById('header_cont');
const menu = document.getElementById('menu');

const username = document.getElementById('username');
const password = document.getElementById('password');
const logBtn = document.getElementById('log-btn');

    // Modify DOM elements //
// login confirmation //
logBtn.addEventListener('click', () => {
    if (username.value == "" || password.value == "") {
            username.style.borderBottom = '3px solid #ff0000';
            password.style.borderBottom = '3px solid #ff0000';  /* If both fields are empty */
        if (username.value == "") {
            username.style.borderBottom = '3px solid #ff0000';  /* If only username fields is empty */
        } else {
            username.style.borderBottom = '3px solid #036c23';
        }
        if (password.value == "") {
            password.style.borderBottom = '3px solid #ff0000';  /* If only password fields is empty */
        }else {
            password.style.borderBottom = '3px solid #036c23';
        }
    }else {
        username.style.borderBottom = '3px solid #036c23';   /* If both fields are not empty */
        password.style.borderBottom = '3px solid #036c23';
    }
});

// menu toggle //
menu.addEventListener('click', function(){
    headContent.classList.toggle('open-menu');
});



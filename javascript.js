document.addEventListener("DOMContentLoaded", () => {

    const fullName = document.getElementById('full-name');
    const username = document.getElementById('username');
    const checkbox = document.getElementById('checkbox');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeat-password');
    const signUpForm = document.getElementById('sign-in-form');
    const popup = document.getElementById('success');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    const formTitle = document.querySelector('.form-title h1');
    const formSubtitle = document.querySelector('.form-title h3');
    const alreadyHaveAccountLink = document.querySelector('.form-query');

    function transitionToLogin() {
        formTitle.textContent = "Log in to the system";
        formSubtitle.style.display = "none";

        fullName.closest('.form-block').remove();
        email.closest('.form-block').remove();
        repeatPassword.closest('.form-block').remove();
        checkbox.closest('.form-checkbox').remove();

        document.querySelector('.btn a').textContent = "Sign In";

        alreadyHaveAccountLink.remove();

        signUpForm.removeEventListener("submit", signUpHandler);
        signUpForm.addEventListener("submit", loginHandler);
    }

    function signUpHandler(event) {
        event.preventDefault();
        if (email.value.trim().length === 0) {
            alert('Заполните поле E-mail');
            return;
        }
        if (password.value.trim().length < 8) {
            alert('Пароль должен быть не менее 8 символов');
            return;
        }
        if (password.value !== repeatPassword.value) {
            alert('Пароли не совпадают');
            return;
        }
        if (!checkbox.checked) {
            alert('Подтвердите согласие');
            return;
        }

        popup.style.display = "block";

        modalOkBtn.addEventListener("click", () => {
            popup.style.display = "none";
            signUpForm.reset();
            transitionToLogin();
        });
    }

    function loginHandler(event) {
        event.preventDefault();
        if (username.value.trim().length === 0 || password.value.trim().length === 0) {
            alert('Заполните все поля');
            return;
        }

        alert(`Добро пожаловать, ${username.value}!`);
    }

    fullName.addEventListener("input", (event) => {
        const digital = [0,1,2,3,4,5,6,7,8,9];
        let result ='';
        const currentInputValue = event.target.value;
        for (let i= 0; i < currentInputValue.length; i++) {
            if (!digital.includes(+ currentInputValue[i])) {
                result+= currentInputValue[i];
            }
        }
        fullName.value = result;
    });

    username.addEventListener("input", (event) => {
        const marks = ['.', ','];
        let result = '';
        const currentUsernameInputValue = event.target.value;
        for (let i= 0; i < currentUsernameInputValue.length; i++) {
            if (!marks.includes(currentUsernameInputValue[i])) {
                result+= currentUsernameInputValue[i];
            }
        }
        username.value = result;
    });

    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    signUpForm.addEventListener("submit", signUpHandler);

    alreadyHaveAccountLink.addEventListener("click", (event) => {
        event.preventDefault();
        transitionToLogin();
    });
});

//console.log ()
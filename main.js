const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const eye = document.querySelector('.feather-eye');
const eyeoff = document.querySelector('.feather-eye-off');
const passwordField = document.querySelector('input[type=password]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

eye.addEventListener('click', () => {
    eye.style.display = "none";
    eyeoff.style.display = "block";
    passwordField.type = "text";
});

eyeoff.addEventListener('click', () => {
    eyeoff.style.display = "none";
    eye.style.display = "block";
    passwordField.type = "password";
});

function checkInputs() {
    // get value from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, "L'utilisateur ne peut pas être vide");
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, "L'email ne peut pas être vide");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "L'email n'est pas valide");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "Le mot de passe ne peut pas être vide");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, "Le mot de passe ne peut pas être vide");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Les mots de passe ne correspond pas");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error messgae inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control

    // add error class
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
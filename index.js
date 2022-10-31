const form = document.querySelector('#form')
const emailImput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const matchInput = document.querySelector('#match-input')

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const validation = (regex, e, element) => {
    const isValid = regex.test(e.target.value);
    if (isValid) {
       element.classList.add('border-green-500');
       element.classList.remove('border-rose-500');
    }
    else {
        element.classList.remove('border-rose-500');
        element.classList.add('border-green-500');
    }
};

emailInput.addEventListener('input', e => {
    validation(EMAIL_REGEX, e, emailInput);

});

passwordInput.addEventListener('input', e => {
    validation(PASSWORD_REGEX, e, passwordInput);

});


matchInput.addEventListener('input', e => {
    const isValid = e.target.value === passwordInput.value;
    if (isValid) {
        matchInput.classList.add('correct');
        matchInput.classList.remove('incorrect');
    }
    else {
        matchInput.classList.remove('correct');
        matchInput.classList.add('incorrect');
    }
 });
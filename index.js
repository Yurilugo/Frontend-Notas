const form = document.querySelector('#form')
const emailImput = document.querySelector('#email-input')
const passwordInput = document.querySelector('#password-input')
const matchInput = document.querySelector('#match-input')

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/;

const validation = (regex, e, element) => {
    const isValid = regex.test(e.target.value);
    if (isValid) {
        element.classList.add('border-2', 'border-green-500');
        element.classList.remove('border-2', 'border-rose-500');
    }else {
        element.classList.remove('border-2', 'border-green-500');
        element.classList.add('border-2', 'border-rose-500');
    }
};


emailImput.addEventListener('input', e => {
    validation(EMAIL_REGEX, e, emailImput);
});

passwordInput.addEventListener('input', e => {
    validation(PASSWORD_REGEX, e, passwordInput);
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newUser = {
            email: emailImput.value,
            password: passwordInput.value 
        }
        const response = await fetch('http://localhost:3003/api/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        console.log(response.status);
    } catch (error) {
        console.log(error);
        
    }

})
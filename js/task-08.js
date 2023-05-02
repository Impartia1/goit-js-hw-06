const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onRegisterForm);

function onRegisterForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
 
    if (mail.trim() == '' || password.trim() == '') {
        return alert('error');
    } else {
        const formData = {
        mail,
        password,
        };
        console.log(formData);
    }

    
    formRef.reset();
}

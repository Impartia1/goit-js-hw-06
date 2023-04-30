const inputRef = document.querySelector('#validation-input');



console.log('length', inputRef.getAttribute('data-length'));
inputRef.addEventListener('blur', (event) => {
    
    console.log(event.target.value.length);
    if (event.target.value.length == inputRef.getAttribute('data-length')) {
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid');
        }
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.add('invalid');
    }
    
});

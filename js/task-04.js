const decrementRef = document.querySelector('.decrement');
const incrementRef = document.querySelector('.increment');
const valueRef = document.querySelector('#value');

decrementRef.addEventListener('click', () => {
    valueRef.textContent = valueRef.textContent - 1;
});
incrementRef.addEventListener('click', () => {
    valueRef.textContent++;
});
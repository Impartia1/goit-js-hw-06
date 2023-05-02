const liItemEL = document.querySelectorAll('.item');
console.log('Number of elements:', liItemEL.length);
console.log('')



const ulEl = document.querySelectorAll('.item > ul');

ulEl.forEach(function (el, i) {
    console.log('Category:', ulEl[i].previousElementSibling.textContent);
    
    console.log('Elements:', ulEl[i].children.length);
    console.log('');
});

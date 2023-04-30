const liItemEL = document.querySelectorAll('.item');
console.log('Number of elements:', liItemEL.length);
console.log('')

const titleItemFirstEl = document.querySelectorAll('.title-list-item.first');
const titleItemSecondEl = document.querySelectorAll('.title-list-item.second');
const titleItemThirdEl = document.querySelectorAll('.title-list-item.third');

const arrayTitleItem = [titleItemFirstEl, titleItemSecondEl, titleItemThirdEl];

const titleEl = document.querySelectorAll('.categories-title');
titleEl.forEach(function (el, i) {
    console.log('Category:', el.textContent);
    console.log('Elements:', arrayTitleItem[i].length);
    console.log('');
});

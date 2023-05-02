const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

const liElOne = document.createElement('li');
liElOne.classList.add('item');
liElOne.textContent = ingredients[0];

const liElTwo = document.createElement('li');
liElTwo.classList.add('item');
liElTwo.textContent = ingredients[1];

const liElThree = document.createElement('li');
liElThree.classList.add('item');
liElThree.textContent = ingredients[2];

const liElFour = document.createElement('li');
liElFour.classList.add('item');
liElFour.textContent = ingredients[3];

const liElFive = document.createElement('li');
liElFive.classList.add('item');
liElFive.textContent = ingredients[4];

const liElSix = document.createElement('li');
liElSix.classList.add('item');
liElSix.textContent = ingredients[5];

ulEl.append(liElOne, liElTwo, liElThree, liElFour, liElFive, liElSix);

// for (let i = 0; i < ingredients.length; i++) {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredients[i];
//   // ulEl.appendChild(liEl);
//   // console.log(liEl);
// };
// ulEl.appendChild(liEl);
// console.log(liEl);



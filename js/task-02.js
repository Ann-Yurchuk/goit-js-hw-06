const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");
const li = document.createElement("li");
li.classList.add("item");

const markup = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

console.log(markup);

list.innerHTML = markup;

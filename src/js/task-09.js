const button = document.querySelector('.change-color');
const color = document.querySelector('.color');


const colors = [getRandomHexColor()];

button.addEventListener('click', () => {

  let nexColor = colors;
  document.body.style.backgroundColor = nexColor;
  color.textContent = nexColor;
});

  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


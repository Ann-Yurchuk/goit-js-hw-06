const button = document.querySelector('.change-color');
const color = document.querySelector('.color');


button.addEventListener('click', () => {
  const colors = getRandomHexColor();
  let nexColor = colors;
  document.body.style.backgroundColor = nexColor;
  color.textContent = nexColor;
});

  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
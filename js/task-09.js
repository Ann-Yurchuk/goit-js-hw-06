const button = document.querySelector('.change-color');
const color = document.querySelector('.color');


button.addEventListener('click', () => {
  const colors = getRandomHexColor();
  document.body.style.backgroundColor = colors;
  color.textContent = colors;
});
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const boxes = document.getElementById("boxes");
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');



const inputChange = (e) => {
input.setAttribute("count", Number(e.currentTarget.value));
console.log(Number(e.currentTarget.value));
};
input.addEventListener("input", inputChange);




function getAmount(){
  createBoxes(input.value);
};

function createBoxes(amount) {
  let boxSize = 30;
  const elements = [];
  for (let i = 1; i <= amount; i += 1) {
    let size = boxSize + i * 10;
    const box = document.createElement("div");

    box.style.background = getRandomHexColor();
    box.style.height = size + "px";
    box.style.width = size + "px";
    box.style.margin = "10px";
    box.classList.add("new-box");
    boxes.append(box);
    elements.push(box);
  }
  
  boxes.append(...elements);
    
};

  

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};



function destroyBoxes() {
  while (boxes.firstChild) {
   boxes.removeChild(boxes.lastChild);
}
};


destroy.addEventListener("click", destroyBoxes);


create.addEventListener("click", getAmount);
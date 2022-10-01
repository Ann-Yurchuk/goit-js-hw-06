let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;

incrBtn.addEventListener('click', event => {
  console.log("Вішаю слухача події на цільову кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

decrBtn.addEventListener('click', event => {
  console.log("Знімаю слухача події з цільової кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  console.log("counterValue", counterValue);
});

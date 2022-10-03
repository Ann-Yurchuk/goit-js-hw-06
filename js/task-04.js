const decrBtn = document.querySelectorAll('button')[0];
const incrBtn = document.querySelectorAll('button')[1];

let counterValue = 0;

 decrBtn.addEventListener('click', event => {
  counterValue -= 1;
   const valueEl = document.querySelector('#value');
   valueEl.textContent = counterValue;
   console.log(counterValue);
 });

incrBtn.addEventListener('click', event => {
  counterValue += 1;
  const valueEl = document.querySelector('#value');
  valueEl.textContent = counterValue;
  console.log(counterValue);
});
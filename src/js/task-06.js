let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;

const input = document.querySelector('input');
inputEl.addEventListener('blur', e => {
const text = e.target.value;
  if (text.length === +inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
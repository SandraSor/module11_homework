const btn = document.querySelector('.btn');
const first = document.querySelector('.bi-arrow-down-left-circle');
const second = document.querySelector('.bi-arrow-down-left-circle-fill');

btn.addEventListener('click',() => {
  first.classList.toggle('btn-magic');
  second.classList.toggle('btn-magic');
})

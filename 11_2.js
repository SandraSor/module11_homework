const btn=document.querySelector('.btn');

btn.addEventListener('click', () => {
  alert(`Размеры вашего экрана ${window.innerWidth}x${window.innerHeight}`)
})

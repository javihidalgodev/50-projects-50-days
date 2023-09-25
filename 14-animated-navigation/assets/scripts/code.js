const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.nav__action-btn')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
})
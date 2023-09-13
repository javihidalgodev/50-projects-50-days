const btnOpen = document.getElementById('open')
const btnClose = document.getElementById('close')

const article = document.querySelector('.article')
const navBtnContainer = document.querySelector('.btn-navigation')
const menu = document.querySelector('.menu')

btnOpen.addEventListener('click', () => {
  navBtnContainer.style.transform = 'rotate(-90deg)'
  article.style.transform = 'rotate(-15deg)'
  menu.classList.add('active')
})

btnClose.addEventListener('click', () => {
  navBtnContainer.style.transform = 'rotate(0deg)'
  article.style.transform = 'rotate(0deg)'
  menu.classList.remove('active')
})
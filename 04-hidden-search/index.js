const inputField = document.querySelector('input')
const searchBtn = document.querySelector('button')

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  inputField.classList.toggle('active')
})
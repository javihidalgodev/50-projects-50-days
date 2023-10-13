const checkLabels = Array.from(document.querySelectorAll('label'))
const checkBtns = Array.from(document.querySelectorAll('input'))
let options = []

checkLabels.forEach(checkBtn => checkBtn.addEventListener('click', changeCheckBox))

function changeCheckBox (e) {
  if(e.target.control.checked) {
    e.target.classList.remove('active')
    let index = options.findIndex(op => op === e.target.control.value)
    options.splice(index, 1)
  } else {
    e.target.classList.add('active')
    options.push(e.target.control.value)
    if(options.length === checkBtns.length) {
      checkLabels.find(c => c.htmlFor === options[0]).classList.remove('active')
      checkBtns.find(c => c.id === options[0]).checked = false
  
      options.shift()
    }
  }
}

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}
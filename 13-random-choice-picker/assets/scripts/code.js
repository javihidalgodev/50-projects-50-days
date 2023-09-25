const textArea = document.querySelector('.main-container__text-area')
const choicesContainer = document.querySelector('.dynamic-list')

const createChoices = (choicesArray) => {
  const fragment = document.createDocumentFragment()
  
  choicesArray.forEach(choice => {
    if (choice.trim().length > 0) {
      const item = document.createElement('DIV')
      item.classList.add('dynamic-list__item')
      item.textContent = choice

      fragment.append(item)
    }
  })

  choicesContainer.replaceChildren(fragment)
}

textArea.addEventListener('keyup', () => {
  const choices = textArea.value.split(',')
  
  createChoices(choices)
}
)

const pickRandomChoice = (e) => {
  if (textArea.value.trim().length > 0) {
    if (e.key === 'Enter') {
      textArea.disabled = true
      const numOfChoices = document.querySelector('.dynamic-list')
      
      let round = 0
      let last = 0
      
      const classListUpdate = () => {
        round++
        numOfChoices.children[last].classList.remove('dynamic-list__item--active')
        const randomNumber = Math.ceil(Math.random() * numOfChoices.childElementCount)
        numOfChoices.children[randomNumber - 1].classList.add('dynamic-list__item--active')
        last = randomNumber - 1
        round >= 30 && (
          clearInterval(interval),
          textArea.disabled = false,
          textArea.value = null
          )
        }
        
        const interval = setInterval(classListUpdate, 150)
      }
  } else {
    textArea.value = ''
  }
}
  
  window.addEventListener('keyup', pickRandomChoice)
  
  // María, Ramón, Alfredo, Susana, Daniela, Javier
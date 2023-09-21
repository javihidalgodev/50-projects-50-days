const mainContainer = document.querySelector('.main-container')
const initial = document.querySelector('#initial').outerHTML

const resetBtn = document.querySelector('#reset')

const createDiv = (keyCodeItems) => {
  let fragment = document.createDocumentFragment()

  Object.entries(keyCodeItems).forEach(item => {
    console.log(item)
    
    const div = document.createElement('DIV')
    div.classList.add('btn')
    
    const spanDescription = document.createElement('SPAN')
    spanDescription.classList.add('description')
    spanDescription.textContent = `event.${item[0]}`
    
    item[1] === ' '
      ? div.innerHTML = `${spanDescription.outerHTML} Space`
      : div.innerHTML = `${spanDescription.outerHTML} ${item[1]}`

    fragment.append(div)
  })
  
  mainContainer.replaceChildren(fragment)
}

const printKeyCode = (e) => {
  const { key, keyCode, code } = e
  const keyCodeItems = {key, keyCode, code}

  createDiv(keyCodeItems)
}

window.addEventListener('keydown', printKeyCode)

resetBtn.addEventListener('click', (e) => {
  mainContainer.innerHTML = initial
  resetBtn.blur()
})
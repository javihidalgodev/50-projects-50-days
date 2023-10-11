const text = document.querySelector('.text')
const string = "Bienvenido a mi maravilloso mundo"
const yourText = document.querySelector('#your-text')
const speed = document.querySelector('#speed')

let position = 0
let currentSpeed = 1
let arrayString = string.split("")
let interval

function type () {
  position < arrayString.length
    ? (
      text.textContent += arrayString[position],
      position++
    ) : (
      text.textContent = "",
      position = 0
    )
}

function speedModification () {
  if(speed.value > 10 || speed.value < 1) {
    alert('El valor debe estar entre 1 y 10')
    speed.value = currentSpeed
  } else {
    currentSpeed = speed.value
    if(interval === undefined) {
      interval = setInterval(type, 250 / currentSpeed)
    } else {
      clearInterval(interval)
      interval = setInterval(type, 250 / currentSpeed)
    }
  }
}

speed.addEventListener('change', speedModification)

yourText.addEventListener('change', (e) => {
  yourText.value = yourText.value.trim()
  arrayString = e.target.value.split('')
  text.textContent = ''
  position = 0
})

speedModification()
const passInput = document.querySelector('#pass')
const passStrength = 10

passInput.addEventListener('input', passStrengthChecker)

function passStrengthChecker () {
  if (passInput.value.length <= passStrength) {
    changeBlur()
  }
}

function changeBlur () {
  const passLength = passInput.value.length
  // En este caso lo hacemos sobre el body, pero sería posible crear un contenedor específico para la imagen, cual deberíamos acceder con un querySelector
  const blur = document.querySelector('body')
  blur.style.backdropFilter = `blur(${passStrength-passLength}px)`
}
// Creamos las variables con todas las opciones para generar la pass
const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUWVXYZ"
const lowerCaseLetter = "abcdefghijklmnopqrstyuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*(){}[]=<>/,."

// Obtenemos el formulario completo y el campo donde aparecerá la pass generada
const passForm = document.querySelector('#pass-form')
const passPH = document.querySelector('#pass')

// Obtenemos los botones de copia y generación
const copyBtn = document.querySelector('#copy-btn')
const genBtn = document.querySelector('#gen-btn')

// Función generador de la password
function genPass (passLength, passPath) {
  let password = ""
  for(let i = 0; i < passLength; i++) {
    password += passPath[Math.floor(Math.random() * passPath.length)]
  }

  passPH.textContent = password
}

// Control del formulario para generar la password
genBtn.addEventListener('click', (e) => {
  //Prevenimos el comportamiento por defecto submit de recarga
  e.preventDefault()

  if(checkPassLength()) {
    // Obtenemos las opciones de creación
    const passAttributes = Object.fromEntries(new FormData(passForm))
    const passLength = parseInt(passAttributes["pass-length"])
    
    // Generamos el patrón en relación a las opciones seleccionadas
    let passPath = ""
    
    if(passAttributes["upper-case-chbx"] === "on") {
      passPath = upperCaseLetter
    }
    
    if (passAttributes["lower-case-chbx"] === "on") {
      passPath += lowerCaseLetter
    }
    
    if (passAttributes["numbers-chbx"] === "on") {
      passPath += numbers
    }
    
    if (passAttributes["symbols-chbx"] === "on") {
      passPath += symbols
    }
  
    // Generamos la pass con el patrón generado
    genPass(passLength, passPath)
  }
})

// Control del botón de copia
copyBtn.addEventListener('click', copyPass)

function copyPass () {
  if (pass.textContent !== '') {
    const copied = document.createElement('DIV')
    copied.classList.add('copied')
    copied.textContent = 'Copied!'

    document.querySelector('.pass-form__ph').append(copied)

    navigator.clipboard.writeText(passPH.textContent);

    setInterval(() => {
      copied.remove()
    }, 2000)
  }
}

// Control de la longitud de la pass
const passLengthInput = document.querySelector('#pass-length')
passLengthInput.addEventListener('change', checkPassLength)

function checkPassLength (e) {
  if(!passLengthInput.validity.valid) {
    let error
    if(!passForm.contains(document.querySelector('.error-length'))) {
      error = document.createElement('SMALL')
      error.classList.add('error', 'error-length')
      passLengthInput.parentElement.after(error)
    }

    if(passLengthInput.valueAsNumber < 10) {
      document.querySelector('.error-length').textContent = 'La password debe tener al menos 10 caracteres.'
    } else if (passLengthInput.valueAsNumber > 30) {
      document.querySelector('.error-length').textContent = 'La password debe tener menos de 30 caracteres.'
    }

    return false
  } else {
    if(passForm.contains(document.querySelector('.error-length'))){
      document.querySelector('.error-length').remove()
    }
    return true
  }
}

const chBxs = Array.from(document.querySelectorAll('input[type=checkbox]'))
chBxs.forEach(chBxItem => chBxItem.addEventListener('change', checkBoxes))

function checkBoxes (e) {
  const boxes = Array.from(document.querySelectorAll('input[type=checkbox]'))
  let error = document.createElement('small')
  error.classList.add('error-ch', 'error')

  if(!boxes.find(c => c.checked)){
    if(!document.querySelector('.error-ch')) {
      error.textContent = 'Al menos una casilla debe estar marcada'
      passForm.insertBefore(error, genBtn)

    }
    e.target.checked = true
  } else {
    document.querySelector('.error-ch') && document.querySelector('.error-ch').remove()
  }
}
const codePositions = Array.from(document.querySelectorAll('.verify-form__code-position'))
const verifyMain = document.querySelector('.verify-main')
let checked = false

codePositions.forEach(codePosition => {
  codePosition.addEventListener('input', () => {
    // Comprobar longitud del campo para:
    // 1. Si tiene un carácter, pasar al siguiente campo
    if(codePosition.value.length > 0) {
      codePosition.value = codePosition.value[0]
      codePosition.nextElementSibling && codePosition.nextElementSibling.focus()
    }

    checkCode()
  })
  
  codePosition.addEventListener('keyup', (e) => {
    // 2. Si borro hacer focus en el campo anterior
    if(e.code === 'Backspace') {
      codePosition.previousElementSibling && codePosition.previousElementSibling.focus()
    }
  })
})

// 3. Cualquier otra forma de borrar, solo borra y no pierde focus

function isFill () {
  const empty = codePositions.find(codePosition => {return codePosition.value === ''})

  return empty
}

function checkCode () {
  const empty = isFill()
  
  if (empty === undefined) {
    let code = ''
  
    codePositions.forEach(codePosition => {
      code += codePosition.value
    })
  
    const codeRes = document.createElement('P')
    
    if(code === '123456') {
      codeRes.classList = 'verify-main__code-res correct'
      codeRes.textContent = 'Código correcto'
    } else {
      codeRes.classList = 'verify-main__code-res error'
      codeRes.textContent = 'Código erróneo'
    }

    if (checked === false) {
      verifyMain.append (codeRes)
    }
    checked = true
  } else {
    document.querySelector('.verify-main__code-res')?.remove()
    checked = false
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
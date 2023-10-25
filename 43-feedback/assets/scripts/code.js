const feedbackContainer = document.querySelector('.feedback')
const feedBackOptions = document.querySelectorAll('input[type=radio]')
const submitBtn = document.querySelector('.feedback__submit-btn')

feedBackOptions.forEach(option => {
  option.addEventListener('change', checkRadio)
})

function checkRadio (e) {
  feedBackOptions.forEach(option => {
    if(option.checked) {
      option.parentElement.classList.add('active')
    } else {
      option.parentElement.classList.toggle('active', false)
    }
  })
}

submitBtn.addEventListener('click', (e) => {checkForm(e)})

function checkForm (e) {
  e.preventDefault()

  const {feedback} = Object.fromEntries(new FormData(document.querySelector('form')))

  showSysAnswer(feedback)
}

function showSysAnswer (feedback) {
  let answer = ''
  
  switch (feedback) {
    case 'unhappy':
      answer = {res: 'Descontento', explanation: 'Sentimos que tu experiencia haya sido negativa. Seguiremos trabajando para mejorar nuestro servicio.'}
      break;
    case 'meh':
      answer = {res: 'Normal', explanation: 'Gracias por darnos tu valoración. Seguiremos trabajando para mejorar nuestro servicio.'}
      break;
    case 'happy':
      answer = {res: 'Contento', explanation: 'Nos alegramos de que tu experiencia con nosotros haya sido positiva. Seguiremos trabajando para mejorar nuestro servicio.'}
      break;
    
  }

  const answerDiv = document.createElement('DIV')
  answerDiv.classList = 'feedback__system-answer'

  answerDiv.innerHTML = `
    <i class="fa fa-heart" style="color: red; font-size: 2rem"></i>
    <h4>¡Gracias!</h4>
    <strong>Feedback: ${answer.res}</strong>
    <p>${answer.explanation}</p>
  `
  feedbackContainer.replaceChildren(answerDiv)
}
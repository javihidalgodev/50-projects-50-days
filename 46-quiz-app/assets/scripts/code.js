const qContainer = document.querySelector('.q-card__question-container')
const submitBtn = document.querySelector('.q-card__submit-btn')

let questions = []
let answers = []
let state = 0

submitBtn.addEventListener('click', () => {
  state < questions.length ? grabAnswer() : reset()
})

async function getQuestions () {
  try {
    const res = await fetch('http://127.0.0.1:5500/46-quiz-app/assets/mocks/questions.json')
    const json = await res.json()

    json.forEach(item => questions.push(item))

    createQuestion()
  } catch (error) {
    console.error('Error:', error)
  }
}

function createQuestion () {
  const q = questions[state]

  mixOptions(q)

  const question = `
  <h2 class="q-card__question">${q.pregunta}</h2>
  <div class="q-card__options">
    <div>
      <input type="radio" name="q-option" id="answer-1">
      <label for="answer-1">${q.respuestas[0].texto}</label>
    </div>
    <div>
      <input type="radio" name="q-option" id="answer-2"> 
      <label for="answer-2">${q.respuestas[1].texto}</label>
    </div>
    <div>
      <input type="radio" name="q-option" id="answer-3"> 
      <label for="answer-3">${q.respuestas[2].texto}</label>
    </div>
    <div>
      <input type="radio" name="q-option" id="answer-4"> 
      <label for="answer-4">${q.respuestas[3].texto}</label>
    </div>
  </div>
  `
  qContainer.innerHTML = question
}

function mixOptions (question) {
  for(let i = question.respuestas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = question.respuestas[i]
    question.respuestas[i] = question.respuestas[j]
    question.respuestas[j] = temp
  }
}

function grabAnswer () {
  const ans = document.querySelector(':checked')
  
  if (ans !== null) {
    answers.push(ans.labels[0].textContent)
    state++
  
    state < questions.length ? createQuestion() : showRes()
  }
}

function showRes () {
  let correct = 0
  let fail = 0

  answers.forEach((ans, index) => {
    const correctRes = questions[index].respuestas.find(res => res.correcta === true)
    ans === correctRes.texto ? correct++ : fail++
  })

  const res = `
    <h2>RESULTADO</h2>
    <p><span class="correct-ans">${correct}</span> acertadas / <span class="fail-ans">${fail}</span> falladas</p>
  `

  qContainer.innerHTML = res
  submitBtn.textContent = 'REINICIAR'
}

function reset () {
  state = 0
  submitBtn.textContent = 'RESPONDER'
  createQuestion()
}

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}

getQuestions()
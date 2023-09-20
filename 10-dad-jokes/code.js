const jokeGenBtn = document.querySelector('#generate-joke')
const jokeContainer = document.querySelector('#joke')
const answer = jokeContainer.querySelector('#answer')
const question = jokeContainer.querySelector('#question')
const audio = document.querySelector('audio')

const genJoke = async () => {
  const res = await fetch('./chistes.json')
  const json = await res.json()
  
  const joke = json[Math.round(Math.random() * (json.length - 1))]

  let dots = ''
  answer.textContent = ''
  
  question.textContent = joke.question
  
  const wait = () => {
    dots += '.'
    answer.textContent = dots
    
    if (dots.length > 3) {
      clearInterval(animateWait)
      answer.textContent = joke.answer
      audio.play()    
    }
  }
  
  const animateWait = setInterval(wait, 1000)
}

jokeGenBtn.addEventListener('click', genJoke)
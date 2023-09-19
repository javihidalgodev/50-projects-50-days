const audioSrc = document.querySelector('audio')
const audioBtns = document.querySelectorAll('button')

const play = (value) => {
  audioSrc.src = `./${value}.mp3`
  console.log(value)
}

audioBtns.forEach(audioBtn => {
  audioBtn.addEventListener('click', () => {
    play(audioBtn.value)
  })
})
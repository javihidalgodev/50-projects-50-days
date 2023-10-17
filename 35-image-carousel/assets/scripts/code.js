const imgContainer = document.querySelector('.carousel__images-container')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

let position = 0
let interval

function startInterval () {
  interval = setInterval(move, 3000)
}

prevBtn.addEventListener('click', prevImg)
prevBtn.addEventListener('mouseenter', stop)
prevBtn.addEventListener('mouseleave', startInterval)
nextBtn.addEventListener('click', nextImg)
nextBtn.addEventListener('mouseenter', stop)
nextBtn.addEventListener('mouseleave', startInterval)

window.addEventListener('keyup', (e) => {
  e.code === 'ArrowLeft' && prevImg()
  e.code === 'ArrowRight' && nextImg()
})

function move () {
  nextImg()
}

function prevImg () {
  position--

  if (position < 0) {
    position = imgContainer.childElementCount - 1
  }

  imgContainer.style.transform = `translateX(-${400 * position}px)`
}

function nextImg () {
  position++

  if (position == imgContainer.childElementCount) {
    position = 0
  }

  imgContainer.style.transform = `translateX(-${400 * position}px)`
}

function stop () {clearInterval(interval)}

startInterval()

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}
const progressLine = document.querySelector('.progress-line')
const circles = document.querySelectorAll('.circle')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const grow = Math.round(100 / (circles.length - 1))

let state = 1

prevBtn.addEventListener('click', () => {
  state--
  nextBtnChecker()
  prevBtnChecker()

  const wPb = widthChecker() - 1
  progressLine.style.width = `${(grow * wPb) - grow}%`
  
  circles[state].classList.remove('active')
})

nextBtn.addEventListener('click', () => {
  state++
  nextBtnChecker()
  prevBtnChecker()
  
  const wPb = widthChecker()
  console.log(wPb * grow)
  progressLine.style.width = `${grow * wPb}%`

  for(i = 0; i < state; i++){
    circles[i].classList.add('active')
  }
})

const widthChecker = () => {
  return document.querySelectorAll('.circle.active').length
}

const nextBtnChecker = () => {
  state >= 3 && (nextBtn.disabled = true)
  state < 4 && (nextBtn.disabled = false)
}

const prevBtnChecker = () => {
  state > 1 && (prevBtn.disabled = false)
  state < 2 && (prevBtn.disabled = true)
}
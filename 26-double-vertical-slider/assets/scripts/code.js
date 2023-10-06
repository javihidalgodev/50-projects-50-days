const sliderLeft = document.querySelector('.slide-left')
const sliderRight = document.querySelector('.slide-right')
const slides = sliderRight.childElementCount - 1
const prevBtn = document.querySelector('.navigation-buttons__prev')
const nextBtn = document.querySelector('.navigation-buttons__next')

let currentTarget = 0

function slide () {
  sliderLeft.style.transform = `translateY(-${currentTarget * 100}%)`
  sliderRight.style.transform = `translateY(-${(slides - currentTarget) * 100}%)`
}

function getNextIMG () {
  if(currentTarget === slides) {
    currentTarget = 0
    slide()
  } else {
    currentTarget++
    slide()
  }
}

function getPrevIMG () {  
  if(currentTarget === 0) {
    currentTarget = slides
    slide()
  } else {
    currentTarget--
    slide()
  }
}

prevBtn.addEventListener('click', getPrevIMG)
nextBtn.addEventListener('click', getNextIMG)
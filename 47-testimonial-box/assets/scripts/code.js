const testimonial = document.querySelector('.testimonial')
const testimonialTime = document.querySelector('.testimonial__time')
const testimonialText = document.querySelector('.testimonial__text')
const userIMG = document.querySelector('.user__img')
const userName = document.querySelector('.user__name')
const userPosition = document.querySelector('.user__position')

let testimonials = []
let count = 0

let time = 0
let pausedAt = 0
let timeLeft = 10000
let reset = false

async function getTestimonials () {
  const res = await fetch('./assets/mocks/testimonials.json')
  const json = await res.json()

  json.forEach(testimonial => testimonials.push(testimonial))
  createTestimonial()
}

function createTestimonial () {
  testimonialTime.style.animationPlayState = 'paused'
  time = new Date().getTime()
  timeLeft = 10000

  if(reset) {
    clearInterval(interval)
    interval = setInterval(createTestimonial, 10000)
    reset = false
  }

  if(count < testimonials.length) {
    testimonial.style.backgroundImage = `url('${testimonials[count].backgroundImg}')`
    testimonialText.textContent = testimonials[count].testimonial
    userIMG.style.backgroundImage = `url('${testimonials[count].img}')`
    userName.textContent = testimonials[count].name
    userPosition.textContent = testimonials[count].position
    count++
  } else {
    count = 0
    createTestimonial()
  }
  
  testimonialTime.style.animationPlayState = 'running'
}

testimonial.addEventListener('mouseenter', ()=> {
  pausedAt = new Date().getTime() - time
  testimonialTime.style.animationPlayState = 'paused'
  clearInterval(interval)
})

testimonial.addEventListener('mouseleave', () => {
  time = new Date().getTime()
  reset = true
  testimonialTime.style.animationPlayState = 'running'
  interval = setInterval(createTestimonial, (timeLeft - pausedAt))
  timeLeft -= pausedAt
})

let interval = setInterval(createTestimonial, 10000)

getTestimonials()
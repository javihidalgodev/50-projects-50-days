const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    slides.forEach(slide => {
      slide.classList.remove('active')
    })
    slide.classList.toggle('active')
  })
})
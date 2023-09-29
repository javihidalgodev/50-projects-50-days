const bodyBG = document.querySelector('body')
const slider = document.querySelector('.main-container')
const btns = document.querySelectorAll('button')

const imgs = ['https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80', 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80']

imgs.forEach((img, index) => {
  const divIMGContainer = document.createElement('DIV')
  divIMGContainer.style.backgroundImage = `url(${img})`
  
  divIMGContainer.classList = 'main-container__main-img'
  
  index === 0 && (
    divIMGContainer.classList.add('active'),
    bodyBG.style.backgroundImage = `url(${imgs[index]})`
    )
    
    slider.append(divIMGContainer)
  })

  const slides = document.querySelectorAll('.main-container__main-img')

  let position = 0

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.value === 'last') {
      slides[position].classList.remove('active')
      position--
      position < 0 && (position = imgs.length - 1)
      bodyBG.style.backgroundImage = `url(${imgs[position]})`
      slides[position].classList.add('active')
    } else {
      slides[position].classList.remove('active')
      position++
      position > 3 && (position = 0)
      bodyBG.style.backgroundImage = `url(${imgs[position]})`
      slides[position].classList.add('active')
    }
  })
})
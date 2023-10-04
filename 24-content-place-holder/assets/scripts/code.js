const animatedBG = document.querySelectorAll('.animated-bg')
const animatedTXT = document.querySelectorAll('.animated-text')

const headerIMG = document.querySelector('.content-placeholder__img')
const cardTitle = document.querySelector('.content-placeholder__title')
const texts = document.querySelector('.content-place-holder__text')
const userIMG = document.querySelector('.user__pic')
const userName = document.querySelector('.user__name')
const userDate = document.querySelector('.user__date')

function load () {
  animatedBG.forEach(item => item.classList.remove('animated-bg'))
  animatedTXT.forEach(item => item.classList.remove('animated-text'))

  headerIMG.style.backgroundImage = `url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80')`
  cardTitle.textContent = 'Lorem ipsum dolor sit amet'
  texts.innerHTML = `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</p>
  `
  userIMG.style.backgroundImage = `url('https://randomuser.me/api/portraits/men/45.jpg')`
  userName.innerHTML = '<strong>John Doe</strong>'
  userDate.textContent = 'Oct 08, 2020'
}

setTimeout(load, 2500)
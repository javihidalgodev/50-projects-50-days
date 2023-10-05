const nav = document.querySelector('.sticky-navigation')

window.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})
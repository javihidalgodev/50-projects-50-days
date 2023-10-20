const nav = document.querySelectorAll('.mobile-tab__item')

nav.forEach(navItem => navItem.addEventListener('click', navigate))

function navigate (e) {
  const currentSection = document.querySelector('.active')
  const navigateTo = e.currentTarget.children[1].hash

  const hrefContent = document.querySelector(navigateTo)

  currentSection.classList.remove('active')
  !hrefContent.classList.contains('active') && hrefContent.classList.add('active')
}

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}
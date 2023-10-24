const API_REQUEST = 'https://randomuser.me/api/?results=20'
const form = document.querySelector('#search-form')
const filter = document.querySelector('#search-users-box')
const usersContainer = document.querySelector('.live-user-filter__results')

let userList = []

filter.addEventListener('input', (e) => {filterUsers(e.target.value)})
form.addEventListener('submit', (e) => {e.preventDefault()})

function getUsers () {
  const loading = document.createElement('DIV')
  loading.classList = 'loading'
  loading.style.top = `${usersContainer.scrollTop}px`
  loading.innerHTML = '<span>Loading...</span>'
  usersContainer.append(loading)

  fetch(API_REQUEST)
    .then(res => res.json())
    .then(({results: data}) => {
      loading.remove()
      data.map(user => {
        user = {
          name: user.name,
          location: user.location,
          picture: user.picture
        }

        createUser(user)
      })
    })
}

function createUser(user) {
  const userCard = document.createElement('DIV')
  userList.push(userCard)
  userCard.classList = 'user'
  userCard.innerHTML = `
      <div class="user__img" style="background-image: url('${user.picture.thumbnail}');"></div>
      <div class="user__info">
      <p class="user__name">${user.name.first} ${user.name.last}</p>
      <small class="user__location">${user.location.city} ${user.location.country}</small>
      </div>
      `
      usersContainer.append(userCard)
}

function filterUsers (e) { 
  userList.forEach(user => {
    if(!user.innerHTML.toLowerCase().includes(e.toLowerCase())) {
      user.classList.add('hidden')
    } else {
      user.classList.remove('hidden')
    }
  })

  const visibleUsers = document.querySelectorAll('.user:not(.hidden)')
    if(visibleUsers.length < 1) {
      if(!document.querySelector('.no-results')) {
        const noResults = document.createElement('DIV')
        noResults.classList = 'no-results'
        noResults.innerHTML = '<span>No hay resultados</span>'
  
        usersContainer.append(noResults)
      }
    } else {
      if(document.querySelector('.no-results')) {
        document.querySelector('.no-results').remove()
      }
    }
}

usersContainer.addEventListener('scrollend', () => {
  if(usersContainer.childElementCount < 100) {
    if(usersContainer.scrollTop + usersContainer.clientHeight >= usersContainer.scrollHeight) {
      getUsers()
    }
  }
})

getUsers()
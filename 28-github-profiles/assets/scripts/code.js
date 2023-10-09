const API_URL = 'https://api.github.com/users/'
const searchBox = document.querySelector('form')
const userProfile = document.querySelector('.result')

searchBox.addEventListener('submit', (e)=> {
  sendQuery(e)
})


async function sendQuery (e) {
  e.preventDefault()
  
  const {query} = Object.fromEntries(new FormData(searchBox))
  document.querySelector('#search-box').value = query.trim()
  if(query.trim() !== '') {
    const userInfo = await showUser(query.trim())
  }
}

async function showUser (query) {
  try {
    const userInfo = await fetch(API_URL + query)

    if(userInfo.ok) {
      const userJson = await userInfo.json()

      const reposInfo = await fetch(API_URL + query + '/repos?per_page=10')
      const reposJson = await reposInfo.json()
    
      reposJsonMapped = reposJson.map(repo => {
        return {
          repo_url: repo.html_url,
          repo_name: repo.name
        }
      })
    
      const res = {
        ...userJson,
        repos: [
          ...reposJsonMapped
        ]
      }
    
      createUserInfo(res)
    } else {
      noResults()
    }
  } catch (error) {
    console.log(error)
  }
}

function noResults() {
  userProfile.classList.remove('filled')
  userProfile.classList.add('no-result')
  userProfile.textContent = 'Sin datos para esa búsqueda'
}

function createUserInfo(userInfo) {
  const repoLinks = userInfo.repos.map(repo => {
    return `<small><a class="result__repo-link" href="${repo.repo_url}" target="_blank">/${repo.repo_name}</a></small>`
  })

  const repoLinksString = repoLinks.join('')

  userProfile.innerHTML = `
    <div class="result__img-profile">
      <a class="go-to" href="${userInfo.html_url}" target="_blank">Go to Github</a>
    </div>
    <div class="result__user-data">
      <h2 class="result__user-name">${userInfo.name}</h2>
      <p class="result__user-description">${userInfo.bio ? userInfo.bio : 'Sin bio'}</p>
      <div class="result__user-stats">
        <span class="result__user-followers">${userInfo.followers} <b>followers</b></span>
        <span class="result__user-following">${userInfo.following} <b>following</b></span>
        <span class="result__user-num-repos">${userInfo.public_repos} <b>repos</b></span>
      </div>
      <div class="result__user-repos">
        ${repoLinksString}
      </div>
    </div>
  `

  document.querySelector('.result__img-profile').style.backgroundImage = `url(${userInfo.avatar_url})`

  userProfile.classList.remove('no-result')
  userProfile.classList.add('filled')
}
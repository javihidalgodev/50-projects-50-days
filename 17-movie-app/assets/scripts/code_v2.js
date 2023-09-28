// Datos de la API
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


getListOfMovies(API_URL)

async function getListOfMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  const mappedMovies = data.results.map(movie => {

    movie.poster_path !== null && (movie.poster_path = IMG_PATH + movie.poster_path)

    return {
      title: movie.title,
      poster:  movie.poster_path,
      rating: movie.vote_average,
      summary: movie.overview
    }
  })

  createMovie(mappedMovies)
}

// Maquetamos cada película
const moviesContainer = document.querySelector('.movies-container')

function createMovie(movies) {

  let fragment = document.createDocumentFragment()

  movies.forEach(movie => {
    const divMovie = document.createElement('DIV')
    divMovie.classList.add('movie')
    
    const divMovieIMG = document.createElement('DIV')
    divMovieIMG.classList.add('movie__img')    
    movie.poster !== null
      ? divMovieIMG.style.backgroundImage = `url(${movie.poster})`
      : imgNoAvailable(divMovieIMG)
    
    const divMovieData = document.createElement('DIV')
    divMovieData.classList.add('movie__data')
    
    const h3MovieTitle = document.createElement('H3')
    h3MovieTitle.classList.add('movie__title')
    h3MovieTitle.textContent = movie.title

    const h3MovieRating = document.createElement('H3')
    h3MovieRating.classList.add('movie__rating')
    if(movie.rating !== 0.0) {
      h3MovieRating.textContent = parseFloat(movie.rating).toFixed(1)

      if (movie.rating > 8) {
        h3MovieRating.style.backgroundColor = 'green'
      } else if (movie.rating >= 5) {
        h3MovieRating.style.backgroundColor = 'orange'
      } else {
        h3MovieRating.style.backgroundColor = 'red'
      }
    } else {
      h3MovieRating.textContent = 'N/A'
      h3MovieRating.style.backgroundColor = 'var(--main-bg)'
    }
        

    
    if (movie.summary !== '') {
      const divMovieSummary = document.createElement('DIV')
      divMovieSummary.classList.add('movie__summary')

      const pMovieSummary = document.createElement('P')
      pMovieSummary.textContent = movie.summary
      
      divMovieSummary.append(pMovieSummary)
      divMovie.append(divMovieSummary)
    }
    
    divMovieData.append(h3MovieTitle, h3MovieRating)

    divMovie.append(divMovieIMG, divMovieData)
    fragment.append(divMovie)
  })

  moviesContainer.replaceChildren(fragment)
}

// Manejar la búsqueda
const form = document.querySelector('.search-bar__input-search')
const loading = document.querySelector('.loading')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const query = `${SEARCH_API}${e.target.firstElementChild.value}`
  getListOfMovies(query)
})

const imgNoAvailable = (divMovieIMG) => {
  divMovieIMG.style.background = '#f9dc5c',
  divMovieIMG.classList.add('img-no-available'),
  divMovieIMG.innerHTML  = '<i class="fa-solid fa-video-slash"></i> IMAGE NO AVAILABLE'
}
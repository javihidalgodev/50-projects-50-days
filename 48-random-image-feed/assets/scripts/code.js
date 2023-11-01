const API_URL = 'https://source.unsplash.com/random/'
const randomContainer = document.querySelector('.random-img-container')
const more = document.querySelector('#load')

async function getRandomImage () {
  const randomResolution = Math.floor(Math.random() * 100) + 300
  const res = await fetch(`${API_URL+randomResolution}x${randomResolution + 10}`)

  const randomImage = document.createElement('DIV')
  randomImage.classList = 'random-img loading'
  randomContainer.append(randomImage)

  setTimeout(() => {
    randomImage.innerHTML = `
    <img src="" />
    <div class="img-link">
    <a class="fa-solid fa-link" href=""></a>
    </div>
    `
    const link = randomImage.querySelector('.img-link a')
    link.href = res.url

    const img = randomImage.querySelector('img')
    img.addEventListener('load', () => {
      randomImage.classList.remove('loading')
    })

    img.src = res.url
  }, 1000)
}

for(let i = 0; i < 20; i++) {
  getRandomImage()
}

more.addEventListener('click', () => {
  for(let i = 0; i < 10; i++) {
    getRandomImage()
  }
})
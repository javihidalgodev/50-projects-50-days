const API_URL = 'https://picsum.photos/200/300'
const imageContainer = document.querySelector('.post-container__img-container')
const image = document.querySelector('.post-container__img')
const likes = document.querySelector('.like-times')
const refreshBtn = document.querySelector('.refresh-btn')

let likesCount = 0

async function getImage() {
  const {url} = await fetch(API_URL)

  image.src = url
}

getImage()

image.addEventListener('dblclick', like)

function like(e) {
  likesCount++
  likesCounter()
  const x = e.offsetX;
  const y = e.offsetY;
  
  const heart = document.createElement('IMG')
  heart.classList.add('heart')
  heart.src = 'https://imgs.search.brave.com/VVwyPZeZuatTZxSmThVgavvOncWK7wd1OCxFHQV-92Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2hlYXJ0LXBu/Zy1yZWQtaGVhcnQt/cG5nLWltYWdlLWZy/ZWUtZG93bmxvYWQt/MTMzMS5wbmc'
  
  heart.style.top = `${y}px`
  heart.style.left = `${x}px`
  
  imageContainer.append(heart)
  
  setTimeout(() => {
    heart.remove()
  } ,1000)
}

function likesCounter () {
  likes.textContent = likesCount
}

refreshBtn.addEventListener('click', refreshIMG)

function refreshIMG () {
  getImage()

  likesCount = 0
  likesCounter()
}
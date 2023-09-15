const container = document.querySelector('.container')
const loadingText = document.querySelector('.loading-text')

let counter = 0

const load = (interval) => {
  counter++

  if(counter > 100) {
    clearInterval(interval)
    counter = 0

    loadingText.classList.add('finish')
  } else {
    loadingText.textContent = counter + '%'
    console.log(2 * ((100 - counter) / 100))
    container.style.filter = `blur(${2 * ((100 - counter) / 100)}px)`
  }
}

const charge = () => {
  let interval = setInterval(() => {load(interval)}, 20)
}

addEventListener('load', charge)
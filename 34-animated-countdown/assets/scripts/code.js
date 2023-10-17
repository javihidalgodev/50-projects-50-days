const counter = document.querySelector('.counter')
const startBtn = document.querySelector('#start')
const getReady = document.querySelector('#get-ready')

let initialCount = 10
let countState = 0

startBtn.addEventListener('click', startCount)

function count (interval) {
  console.log('Ejecutando acción')
  initialCount--
  countState++

  if(initialCount >= 0) {
    const change = document.querySelector('.decrease')

    if(initialCount < 1) {
      change.textContent = 'GO!'
    } else {
      change.textContent = initialCount
    }

    counter.style.transform = `rotate(-${180 * countState}deg)`

    counter.firstElementChild.classList.toggle('decrease')
    counter.lastElementChild.classList.toggle('decrease')
  } else {
    clearInterval(interval)
    startBtn.classList.add('active')
    getReady.classList.remove('active')
  }
}

function startCount() {
  reset()
  
  getReady.classList.add('active')
  startBtn.classList.remove('active')
  const interval = setInterval(()=>{count(interval)} , 1000)
}

function reset () {
  initialCount = 10
  countState = 0

  counter.firstElementChild.classList.remove('decrease')
  counter.firstElementChild.textContent = initialCount
  counter.lastElementChild.textContent = initialCount

  counter.style.transition = 'none'
  counter.style.transform = `rotate(0deg)`
  
  setTimeout(() => {
    counter.style.transition = '.5s'
  }, 1)
}
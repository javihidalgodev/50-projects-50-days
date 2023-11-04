const game = document.querySelector('.game')
const playBtn = document.querySelector('#play-btn')
let villainSelected = ''
let time = 1
let score = 0

const villains = [
  {
    name: 'Dos Caras',
    img: 'assets/img/harvey-dent.png'
  },
  {
    name: 'Joker',
    img: 'assets/img/joker.png'
  },
  {
    name: 'Pingüino',
    img: 'assets/img/penguin.png'
  },
  {
    name: 'Espantapájaros',
    img: 'assets/img/scarecrow.png'
  }
]

playBtn.addEventListener('click', prepareGame)

function prepareGame () {
  const mainTitle = document.querySelector('.game__title')
  mainTitle.textContent = "¿Qué villano prefieres?"
  playBtn.remove()

  const villainOptions =  document.createElement('DIV')
  villainOptions.classList = 'villains-container'

  villains.forEach(villain => {
    const villainDIV = document.createElement('DIV')
    villainDIV.classList = 'villain'

    villainDIV.innerHTML = `
      <span class="villain__name">${villain.name}</span>
      <img class="villain__img" src="${villain.img}" alt="${villain.name}" />
    `

    villainDIV.addEventListener('click', () => {
      startGame(villain)
    })

    villainOptions.append(villainDIV)
  })

  game.append(villainOptions)
}


function startGame (villain) {
  villainSelected = villain

  game.innerHTML = `
    <div class="timer">Time: 00:00</div>
    <div class="score">Score: ${score}</div>
  `

  let timer = document.querySelector('.timer')

  setInterval(() => {
    let m = Math.floor(time / 60)
    let s = time % 60

    if(m < 10) {
      m = `0${m}`
    }

    if(s < 10) {
      s = `0${s}`
    }

    timer.textContent = `Time: ${m}:${s}`
    time++
  }, 1000)

  getPNJ()
}

function getPNJ () {
  let x = Math.random() * (innerWidth - 100) + 50
  let y = Math.random() * (innerHeight- 100) + 50

  const pnj = document.createElement('DIV')
  pnj.classList = 'pnj'
  pnj.style.backgroundImage = `url('${villainSelected.img}')`
  
  pnj.addEventListener('click', () => {
    pnj.remove()
    updateScore()
    setTimeout(getPNJ, 1000)
    setTimeout(getPNJ, 1500)
  })

  game.append(pnj)
  pnj.style.left = `${x}px`
  pnj.style.top = `${y}px`
}

function updateScore () {
  score++

  document.querySelector('.score').textContent = `Score: ${score}`

  if(score === 20) {
    const banner = document.createElement('DIV')
    banner.classList = 'banner'

    banner.innerHTML = `
      <p>¿No te has dado cuenta todavía?</p>
      <p>Nunca conseguirás vencer a <b>${villainSelected.name}</b></p>
    ` 
    game.append(banner)
  }
}
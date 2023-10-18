const hoverboardContainer = document.querySelector('.hoverboard-container')

const matriz = [
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
  [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
]

const colors = ['green', 'orange', 'blue', 'pink']
let currentBox = null

function createHoverboard () {
  let hoverboard = new DocumentFragment()

  matriz.forEach(row => row.forEach(box =>{createBox(hoverboard)}))

  hoverboardContainer.append(hoverboard)
}

function createBox(hoverboard) {
  const box = document.createElement('DIV')
  box.classList.add('box')

  box.addEventListener('pointerenter', () => {
    box.classList.add(generateColor())
  })
  box.addEventListener('pointerleave', () => {
    box.classList = 'box'
  })

  // Método para replicar el comportamiento de hover en dispositivos móviles
  hoverboardContainer.addEventListener('touchmove', (e) => {
    // Registramos con cada movimiento del puntero la posición del cliente
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    // Obtenemos la posición de cada caja
    const boxPosition = box.getBoundingClientRect()

    // Si la posición del cliente está dentro del posicicionamiento de dicha caja...
    if (x >= boxPosition.left && x <= boxPosition.right && y >= boxPosition.top && y <= boxPosition.bottom) {
      // ... y dicha caja es distinta a la actual...
      if (box !== currentBox) {
        // ... comprobamos que existe un currentBox y y lo limpiamos...
        if (currentBox) {
            currentBox.classList = 'box'
        }

        // ... añadimos color a la caja actual y lo convertimos en el currentBox
        box.classList.add(generateColor())
        currentBox = box;
      }
    }
  });

  // Para borrar el color una vez se levante el dedo de la pantalla del último elemento en target, gestionamos el evento touchend
  hoverboardContainer.addEventListener('touchend', ()=> {
    currentBox.classList = 'box'
  })

  hoverboard.appendChild(box)
}

function generateColor () {
  const color = colors[Math.floor(Math.random() * (colors.length))]
  return color
}

createHoverboard()

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}
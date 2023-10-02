const canvasContainer = document.querySelector('.canvas-container')
const canvas = document.querySelector('#board')
const context = canvas.getContext('2d')

let initialX;
let initialY;
let lineWidth = 10;
let lineColor = '#000';

// Función que dibuja
const draw = (cursorX, cursorY) => {
  context.beginPath()
  context.moveTo(initialX, initialY) // Mover desde, referencias iniciales
  context.lineWidth = lineWidth // Ancho del pincel
  context.strokeStyle = lineColor // Color trazo
  context.lineCap = 'round' // Forma del pincel 
  context.lineJoin = 'round' // Forma de la linea
  context.lineTo(cursorX, cursorY) // Mover hasta referencias dadas
  context.stroke() // Pinta

  initialX = cursorX
  initialY = cursorY
}

const mouseDown = (e) => {
  initialX = e.offsetX;
  initialY = e.offsetY;

  draw(initialX, initialY)
  canvas.addEventListener('mousemove', mouseMoving)
}

const mouseMoving = (e) => {
  draw(e.offsetX, e.offsetY)
}

const mouseUp = () => {
  canvas.removeEventListener('mousemove', mouseMoving)
}

canvas.addEventListener('mousedown', mouseDown)
canvas.addEventListener('mouseup', mouseUp)

// Control de los parámetros del dibujo
const lineWidthDecrease = document.querySelector('#line-width-decrease')
const lineWidthValue = document.querySelector('#line-width-value')
const lineWidthIncrease = document.querySelector('#line-width-increase')
const lineColorValue = document.querySelector('#line-color')
const eraser = document.querySelector('#eraser')

lineWidthDecrease.addEventListener('click', (e) => {
  lineWidthValue.valueAsNumber > 1 && (
    --lineWidthValue.value,
    lineWidth = lineWidthValue.value
  )
})

lineWidthIncrease.addEventListener('click', () => {
  lineWidthValue.valueAsNumber < 100 && (
    ++lineWidthValue.value,
    lineWidth = lineWidthValue.value
  )
})

lineWidthValue.addEventListener('change', () => {
  if(lineWidthValue.valueAsNumber < 1) {
    lineWidthValue.value = 1
  } else if (lineWidthValue.valueAsNumber > 100) {
    lineWidthValue.value = 100
  }

  lineWidth = lineWidthValue.value
  mouseDown
})

lineColorValue.addEventListener('change', (e) => {
  lineColor = lineColorValue.value
  mouseDown
})

eraser.addEventListener('click', (e) => {
  const modal = document.createElement('DIV')
  modal.classList.add('modal')
  modal.innerHTML = `
    <p>¿Estás seguro? Esta acción borrará toda la pizarra:</p>
    <button class="dialog-button dialog-button--ok">Borrar</button>
    <button class="dialog-button dialog-button--cancel">Cancelar</button>
  `
  canvasContainer.appendChild(modal)

  const dialogBtns = Array.from(document.querySelector('.modal').querySelectorAll('button'))

  dialogBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent === 'Borrar'
        ? (
          context.clearRect(0, 0, canvas.width, canvas.height),
          canvasContainer.removeChild(modal)
        ) : canvasContainer.removeChild(modal)
    })
  })
})
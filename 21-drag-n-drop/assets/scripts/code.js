// Controlamos la imagen y los elementos donde puede colocarse
const picBoxes = document.querySelectorAll('.pic-box')
const draggableIMG = document.querySelector('.pic-box__img')

// Por cada elemento permitimos que la imagen pueda pasar por encima y pueda recibir los datos del evento
picBoxes.forEach(picBox => {
  picBox.addEventListener('dragover', e => {
    e.preventDefault()
  })

  // Recuperamos los datos de dataTransfer y los añadimos al elemento afectado
  picBox.addEventListener('drop', (e) => {
    e.preventDefault()

    const img = e.dataTransfer.getData('img')
    e.target.id === '' && e.target.replaceChildren(document.querySelector(`#${img}`))
  })
})

// Configuramos el evento para que la imagen se pueda arrastrar
draggableIMG.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('img', e.target.id)
})

// const uploadIMG = document.querySelector('#upload-img')

// uploadIMG.addEventListener('change', (e) => {
//   console.log(e)
  
//   if(e.target.files.length > 0) {
//     const container = Array.from(picBoxes).find(picBox => picBox.childElementCount < 1)

//     const reader = new FileReader()

//     reader.onload = function (e) {
//       const image = document.createElement('DIV')
//       image.classList.add('pic-box__img', 'pic-box--fill')
//       image.setAttribute('draggable', 'true')
//       image.style.backgroundImage = `url(${e.target.result})`

//       container.appendChild(image)
//     }

//     reader.readAsDataURL(uploadIMG.files[0])
//   }
// })
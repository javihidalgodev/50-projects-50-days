const droppableMenu = document.querySelector('.navbar__item--droppable')
const hideNavBtn = document.querySelector('#hide-menu')
const showNavBtn = document.querySelector('#show-menu')

droppableMenu.addEventListener('pointerdown', dropMenu)

function dropMenu (e) {
  e.target.parentElement.classList.toggle('active')
}

hideNavBtn.addEventListener('pointerup', showHideMenu)
showNavBtn.addEventListener('pointerup', showHideMenu)

function showHideMenu(e) {
  const layers = document.querySelectorAll('.navbar__layer')

  layers.forEach(layer => {
    const {width: layerWidth} = layer.getBoundingClientRect()
    console.log(layerWidth)

    if(e.target.parentElement.id === 'hide-menu') {
      layer.classList.remove('active')
      layer.style.transform = `translateX(-${layerWidth}px)`
    } else {
      layer.classList.add('active')
      layer.style.transform = `translateX(0px)`
    }

  })

  console.log(e.target.parentElement)
}

window.addEventListener('resize', showHideMenu)
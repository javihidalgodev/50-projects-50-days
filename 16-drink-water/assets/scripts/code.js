const dynamicGlass = document.querySelector('.glass--dynamic')
const remainderLiters = document.getElementById('remainder-liters')
const achievedPercentage = document.getElementById('achieved-percentage')
const glasses = Array.from(document.querySelector('.water-glasses__container').children)

const checkGlasses = (index) => {
  for(i = 0; i < glasses.length; i++){
    if(i <= index) {
      glasses[i].classList.add('drunk')
    } else {
      glasses[i].classList.remove('drunk')
    }
  }
}

const updateDynamicGlass = () => {
  let drunk = 0
  
  glasses.forEach(glass => {
    // console.log(glass.classList.contains('drunk'))
    if (glass.classList.contains('drunk')) {
      drunk++
    }
  })

  remainderLiters.textContent = 2 - (drunk * 0.25)
  dynamicGlass.children[0].style.height = `${((glasses.length - drunk) * 100) / glasses.length}%`
  
  achievedPercentage.textContent = 0 + (drunk * 12.5)
  dynamicGlass.children[1].style.height = `${parseFloat(achievedPercentage.textContent)}%`
}

glasses.forEach((glass, index) => {
  glass.addEventListener('click', (e) => {
    checkGlasses(index)
    updateDynamicGlass()
  })

  glass.addEventListener('mouseover', () => {
    for(i = 0; i < glasses.length; i++){
      if(i <= index) {
        if (!glasses[i].classList.contains('drunk'))
        glasses[i].classList.add('hover')
      }
    }
  })

  glass.addEventListener('mouseout', () => {
    for(i = 0; i < glasses.length; i++){
      if(i <= index) {
        glasses[i].classList.remove('hover')
      }
    }
  })
})

updateDynamicGlass()
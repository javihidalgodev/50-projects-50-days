const puzzleContainer = document.querySelector('.puzzle')
const puzzleBoxes = document.querySelectorAll('.puzzle__box')
const magicBtn = document.querySelector('#magic')

for (let i = 0; i < puzzleBoxes.length; i++) {
  const puzzleSize = window.getComputedStyle(puzzleBoxes[i], '::before')
  console.log(puzzleSize)
  puzzleBoxes[i].style.backgroundImage = `url('./assets/pictures/${i}.jpg')`
  puzzleBoxes[i].style.height = puzzleSize.width
}

magicBtn.addEventListener('click', () => {
  puzzleContainer.classList.toggle('active')
  puzzleBoxes.forEach(puzzleBox => {
    const {width} = puzzleBox.getBoundingClientRect()
    puzzleBox.style.height = `${width}px`
  })
})

window.addEventListener('resize', () => {
  puzzleBoxes.forEach(puzzleBox => {
    const {width} = puzzleBox.getBoundingClientRect()
    puzzleBox.style.height = `${width}px`
  })
})
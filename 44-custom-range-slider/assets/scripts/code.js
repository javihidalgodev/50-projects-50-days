const rangeSlider = document.querySelector('.range-slider__range')
const rangePopover = document.querySelector('.range-slider__popover')
const {width: rangeWidth} = rangeSlider.getBoundingClientRect()
const {width: popoverWidth} = rangePopover.getBoundingClientRect()

rangeSlider.addEventListener('input', checkPopover)

function checkPopover (e) {
  const range = rangeSlider.valueAsNumber
  rangePopover.style.left = `${((rangeWidth - 16) * range / 100) - (popoverWidth / 2) + 8}px`
  rangePopover.textContent = rangeSlider.valueAsNumber
}

checkPopover()

const theme = document.querySelector('.theme')
theme.addEventListener('click', changeTheme)

function changeTheme () {
  document.body.classList.toggle('dark')

  theme.classList.contains('fa-moon')
    ? theme.classList.replace('fa-moon', 'fa-lightbulb')
    : theme.classList.replace('fa-lightbulb', 'fa-moon')
}
const rippleBtn = document.querySelector('.ripple-btn')

rippleBtn.addEventListener('click', (e => {
  const circle = document.createElement('DIV')
  circle.classList.add('circle')
  rippleBtn.append(circle)

  const posX = e.clientX - rippleBtn.offsetLeft
  const posY = e.clientY - rippleBtn.offsetTop

  circle.style.top = `${posY}px`
  circle.style.left = `${posX}px`

  setTimeout(() => rippleBtn.removeChild(circle), 500)
}))
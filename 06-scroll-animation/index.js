const cards = Array.from(document.querySelectorAll('.card'))

const checkBox = () => {
  const clientHeight = window.innerHeight

  cards.forEach(card => {
    const cardBottom = card.getClientRects()[0].bottom

    if (cardBottom < innerHeight) {
      card.style.transform = 'translateX(0)'
    } else {
      if (card.classList.contains('par')){
        card.style.transform = 'translateX(400%)'
      } else {
        card.style.transform = 'translateX(-400%)'
      }
    }
  })
}

checkBox()

addEventListener("scroll", checkBox)
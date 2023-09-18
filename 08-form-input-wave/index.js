const fields = document.querySelectorAll('.field')

/* Función para controlar el estado de los label */
const setWavy = (element) => {
  let delay = 0
  Array.from(element.children).forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.toggle('wavy')
    }, delay += 50)
  })
}

/* Control de los eventos focus y blur */
fields.forEach(field => {
  field.children[1].addEventListener('focus', (e) => {
    e.target.value === '' && setWavy(field.children[0])
  })

  field.children[1].addEventListener('blur', (e) => {
   e.target.value === '' && setWavy(field.children[0])
  })
})

/* Función para la transformación de los campos label */
const transformLabel = (labelItem) => {
  const labelItemArray = labelItem.textContent
  .split('')
  .map(letter => {
    console.log(letter)
    return `<span>${letter}</span>`
  }).join('')

  labelItem.innerHTML = labelItemArray
}

fields.forEach(labelItem => {
  transformLabel(labelItem.children[0])
})
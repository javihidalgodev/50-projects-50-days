const accordionBtns = document.querySelectorAll('.btn')

console.log(accordionBtns)

accordionBtns.forEach(btn => {
  const faqDescription = btn.previousElementSibling
  btn.addEventListener('click', () => {
    btn.children[0].classList.contains('btn--open')
      ? (
        btn.children[0].classList.replace('btn--open', 'btn--close'),
        btn.children[0].classList.replace('fa-circle-chevron-down', 'fa-circle-xmark'),
        faqDescription.classList.remove('faq__description--hidden')
        )
        : (
          btn.children[0].classList.replace('btn--close', 'btn--open'),
          btn.children[0].classList.replace('fa-circle-xmark', 'fa-circle-chevron-down'),
          faqDescription.classList.add('faq__description--hidden')
      )
  })
})
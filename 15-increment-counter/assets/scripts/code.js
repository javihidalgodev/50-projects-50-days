const dataCounters = document.querySelectorAll('.social-card__count')

dataCounters.forEach(data => {
  const followers = parseInt(data.getAttribute('data-target'))
  const increment = followers / 200
  let count = 0

  const counting = () => {
    count < followers
      ? (
        count += increment,
        data.innerText = Math.ceil(count),
        setTimeout(counting, 1)
      ) : data.innerText = followers
  }

  counting()
})
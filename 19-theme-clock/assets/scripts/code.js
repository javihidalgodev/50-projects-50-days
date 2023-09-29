
const theme = document.querySelector('body').classList
const btnToggleTheme = document.querySelector('#btn-toggle-theme')

theme.add(localStorage.getItem('theme'))

localStorage.getItem('theme') === null
  ? (btnToggleTheme.textContent = 'Dark mode')
  : (btnToggleTheme.textContent = 'Light mode')

btnToggleTheme.addEventListener('click', () => {
  theme.contains('darkmode')
    ? (
      btnToggleTheme.textContent = 'Dark mode',
      localStorage.clear('theme')
    ) : (
      btnToggleTheme.textContent = 'Light mode',
      localStorage.setItem('theme', 'darkmode')
    )
  theme.toggle('darkmode')
})

const dataTime = document.querySelector('.date-time-data__time')
const dataDate = document.querySelector('.date-time-data__date')
const seconds = document.querySelector('.clock__wise--seconds')
const minutes = document.querySelector('.clock__wise--minutes')
const hours = document.querySelector('.clock__wise--hours')

function updateSeconds() {
  const dateTime = new Date()
  
  seconds.style.transform = `rotate(${(360 / 60) * (dateTime.getSeconds())}deg)`
  
  dateTime.getSeconds() === 0 && updateMinutes()
  
  dateTime.getMinutes() === 0 && dateTime.getSeconds() === 0 && updateHours()
  
  dateTime.getHours() === 0 && dateTime.getSeconds() === 0 && updateDate()
}

function updateMinutes() {
  const dateTime = new Date()
  dataTime.textContent = dateTime.toLocaleTimeString('en-US', {hour: "numeric", minute: "2-digit"})
  minutes.style.transform = `rotate(${(360 / 60) * (dateTime.getMinutes())}deg)`
}

function updateHours() {
  hours.style.transform = `rotate(${(360 / 12) * (new Date().getHours())}deg)`
}

function updateDate() {
  const newDate = new Date()

  let date = newDate.getDate()
  const month = newDate.toLocaleString('en-US', {month: 'short'}).toUpperCase()
  const dow = newDate.toLocaleString('en-US', {weekday: 'long'}).toUpperCase()
  dataDate.innerHTML = `${dow}, ${month} <span class="date__day">${date}</span>`
}

updateSeconds()
updateMinutes()
updateHours()
updateDate()

setInterval(updateSeconds, 1000)
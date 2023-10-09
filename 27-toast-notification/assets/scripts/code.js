const showBtn = document.querySelector('.show-btn')
const notificationContainer = document.querySelector('.notification-container')

const messages = [
  'Mensaje 1',
  'Mensaje 2',
  'Mensaje 3',
  'Mensaje 4'
]

const typeMsg = [
  'success',
  'error',
  'info'
]

showBtn.addEventListener('click', () => {
  getNotification()
})

const getNotification = () => {
  const message = getMessage()
  const type = getType()

  const notification = document.createElement('DIV')
  notification.classList.add('notification', type)
  notification.innerHTML = `<span>${message}</span>`

  notificationContainer.append(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

const getMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)]
}

const getType = () => {
  return typeMsg[Math.floor(Math.random() * typeMsg.length)]
}
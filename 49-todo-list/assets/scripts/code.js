const form = document.querySelector('#todo-form')
const todoInput = document.querySelector('.todo-input')
const todosContainer = document.querySelector('.todos')

form.addEventListener('submit', grabTodo)

function grabTodo (e) {
  e.preventDefault()

  checkTodos()
  if(todoInput.value.trim() !== '') {
    const newTodo = document.createElement('DIV')
    newTodo.classList = 'todo'
    newTodo.textContent = todoInput.value
    
    newTodo.addEventListener('click', actionControl)
    newTodo.addEventListener('contextmenu', actionControl)
    
    todosContainer.append(newTodo)
    
    saveLS()
    todoInput.value = ''
  } else {
    todoInput.value = ''
  }
}

function actionControl (e) {
  e.preventDefault()
  
  const clicked = e.which
  const todo = e.target
  
  if(clicked === 1) {
    todo.classList.toggle('complete')
    saveLS()

  } else if(clicked === 3) {
    todo.remove()
    saveLS()
  }
  
  checkTodos()
}

function checkTodos () {
  if(todosContainer.childElementCount === 0) {
    todosContainer.innerHTML = '<div class="no-content">No hay tareas</div>'
  } else {
    todosContainer.querySelector('.no-content') && todosContainer.querySelector('.no-content').remove()
  }
}

function saveLS () {
  const todosToSave = todosContainer.innerHTML
  localStorage.setItem('savedTodos', todosToSave)
}

const savedTodos = localStorage.getItem('savedTodos')
todosContainer.innerHTML = savedTodos

if(todosContainer.childElementCount > 0) {
  todosContainer.childNodes.forEach(todo => {
    todo.addEventListener('click', actionControl)
    todo.addEventListener('contextmenu', actionControl)
  })
}

checkTodos()
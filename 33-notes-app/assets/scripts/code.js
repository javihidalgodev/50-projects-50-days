const notesContainer = document.querySelector('.notes-container')
const addNoteBtn = document.querySelector('.add-note-btn')
const savedNotes = JSON.parse(localStorage.getItem('notes'))

function createNote (note = null) {
  const noteContainer = document.createElement('DIV')
  noteContainer.classList.add('note')
  
  const noteHeader = document.createElement('HEADER')
  noteHeader.classList.add('note-header')
  const editBtn = document.createElement('button')
  editBtn.classList.add('note-header__btn', 'fa-solid', 'fa-edit')
  editBtn.title = "Edit"
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('note-header__btn', 'fa-solid', 'fa-trash-can')
  deleteBtn.title = "Delete"
  noteHeader.append(editBtn, deleteBtn)
  
  const noteMain = document.createElement('MAIN')
  noteMain.classList.add('note-text-zone')
  const noteText = document.createElement('TEXTAREA')
  noteText.classList.add('text')
  noteText.setAttribute('readonly', '')
  noteText.value = note
  
  editBtn.addEventListener('click', (e)=>{editNote(e, noteText)})
  deleteBtn.addEventListener('click', (e)=>{deleteNote(e, noteContainer)})
  noteText.addEventListener('input', updateNotes)
  noteText.addEventListener('blur', (e) => {
    if(e.relatedTarget === null) {
      editBtn.classList.remove('active')
      e.readOnly = true
    } else if (editBtn !== e.relatedTarget) {
      editBtn.classList.remove('active')
      e.readOnly = true
    }
  })

  noteMain.append(noteText)
  noteContainer.append(noteHeader, noteMain)
  
  notesContainer.appendChild(noteContainer)
}

addNoteBtn.addEventListener('click', ()=>{createNote()})

function editNote (e, noteText) {
  e.target.classList.toggle('active')

  if(e.target.classList.contains('active')) {
    noteText.readOnly = false
    noteText.classList.add('active')
    noteText.focus()
  } else {
    noteText.readOnly = true
    noteText.classList.remove('active')
    noteText.blur()
  }
}

function deleteNote(e, noteContainer) {
  const modal = document.createElement('DIV')
  modal.classList.add('modal')
  modal.innerHTML = `
    <div class="modal-box">
      <h2>¿Seguro que quieres borrar esta nota?</h2>
      <p>Recuerda que si lo haces no podrás recuperarla</p>
      <div class="modal__options">
        <button id="ok" class="modal__answer fa-solid fa-check"></button>
        <button id="no" class="modal__answer fa-solid fa-cancel"></button>
      </div>
    </div>
  `
  document.body.append(modal)

  const okBtn = document.querySelector('#ok')
  okBtn.addEventListener('click', () => {
    modal.remove()
    noteContainer.remove()
    updateNotes()
  })

  const noBtn = document.querySelector('#no')
  noBtn.addEventListener('click', ()=>{modal.remove()})

}

function updateNotes () {
  const notes = document.querySelectorAll('.text')
  const savedNotes = []

  notes.forEach(note => {
    if(note.textLength > 0) {
      savedNotes.push(note.value)
    }
  })

  localStorage.setItem('notes', JSON.stringify(savedNotes))
}

function showSavedNotes () {
  if(savedNotes) {
    savedNotes.forEach(note => createNote(note))
  }
}

showSavedNotes()
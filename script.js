const btn = document.querySelector('.btn');
const notesDiv = document.querySelector('.notes-div');
let notesArr = JSON.parse(localStorage.getItem('note')) || [];

function renderNote(notesObj) {
  const newNoteEl = document.createElement('textarea');

  newNoteEl.classList.add('notes');
  newNoteEl.placeholder = 'Enter Your Notes Here...';
  newNoteEl.value = notesObj.content;

  newNoteEl.addEventListener('input', () => {
    notesObj.content = newNoteEl.value;
    saveNote();
  })
  notesDiv.insertBefore(newNoteEl, btn);
}

function saveNote() {
  localStorage.setItem('note', JSON.stringify(notesArr));
}

function addNote() {
  const notesObj = {
    id: Math.round(Math.random() * 1000),
    content : ''
  }
  notesArr.push(notesObj);
  renderNote(notesObj);
  saveNote();
}

notesArr.forEach(note => renderNote(note));

btn.addEventListener('click', addNote)
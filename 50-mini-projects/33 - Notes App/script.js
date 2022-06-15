const addNote = document.querySelector(".add-note");
const notes = document.querySelector(".notes");

let notesCount = 0;
let notesText = [];

addNote.addEventListener("click", () => {
  createNote();
});

const localStorageNotes = JSON.parse(localStorage.getItem("note"));

if (localStorageNotes) {
  console.log(localStorageNotes);
  localStorageNotes.forEach((element) => {
    createNote(element);
  });
}

function createNote(value) {
  if (!value) {
    value = "";
  }
  notesCount++;

  let note = document.createElement("div");
  note.classList.add("note");
  note.setAttribute("id", notesCount);
  note.innerHTML = `<div class="note-header">
                        <div class="edit-icon"><i class="fa-solid fa-floppy-disk"></i></div>
                        <div class="delete-icon"><i class="fa-solid fa-trash"></i></div>
                    </div><textarea>${value}</textarea>`;
  notes.append(note);

  updateLS();

  const deleteIcon = document.querySelector(
    `.note[id="${notesCount}"] .delete-icon i`
  );

  deleteIcon.addEventListener("click", (e) => {
    e.target.closest(".note").remove();
    updateLS();
  });

  const textarea = document.querySelector(`.note[id="${notesCount}"] textarea`);

  const editIcon = document.querySelector(
    `.note[id="${notesCount}"] .edit-icon i`
  );

  editIcon.addEventListener("click", () => {
    updateLS();
  });
  // textarea.addEventListener("input", (e) => {
  //   updateLS();
  // });
}

function updateLS() {
  const notes = document.querySelectorAll("textarea");
  const notesArray = [];

  notes.forEach((note) => {
    notesArray.push(note.value);
  });

  localStorage.setItem("note", JSON.stringify(notesArray));
}

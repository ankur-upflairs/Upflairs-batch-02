let addNoteButton=document.getElementById('add-note-button')
let inputBox=document.getElementById('new-note')
let notesBox=document.querySelector('.notes')
let newNote;
addNoteButton.addEventListener('click',function(){
    newNote=inputBox.value
    createNewNote(newNote)
    inputBox.value=''
    // alert(newNote)

})

function createNewNote(text){
    let newNotebox=document.createElement('div')
    newNotebox.className='note-item'
    let noteText=document.createElement('span')
    noteText.textContent=text

    let deleteButton=document.createElement('button')
    deleteButton.innerText='DELETE'
    deleteButton.addEventListener('click',function(){
        this.parentElement.remove()
    })
    newNotebox.append(noteText) 
    newNotebox.append(deleteButton)
    notesBox.append(newNotebox)    

}
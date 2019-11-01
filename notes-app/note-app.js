const notes = [{
    title: 'My next trip',
    body:'i would like to go to spain'
}, {
    title:'Habits to work on',
    body:'Exercise. Eating a bit better'
}, {
    title:'Office modifaction',
    body:'Get a new seat'
}]

const filters = {
    searchText:''
}

const renderNotes = function(notes , filters){
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function (event){
    event.target.textContent ='The Button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function (){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener('input' , function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

















// //DOM Document Object Model

// // const p = document.querySelector('p')
// // p.remove()
// //Query all and remove

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p){
//     p.textContent = "*******"
//     //console.log(p.textContent)
//    // p.remove()
// })

// //add a new element

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JS'
// document.querySelector('body').appendChild(newParagraph)
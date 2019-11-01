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

console.log('a' < 'b')

const sortNotes = function (notes){
    notes.sort(function(a,b){
       if (a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
       } else if (b.title.toLowerCase() < a.title.toLowerCase()){
           return 1
       }
       else {
        return 0 
       }
    })
}

sortNotes(notes)
console.log(notes)

const findNote = function (notes, noteTitle){
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const findNotes = function (notes, query){
    return notes.find(function (note, index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
    })
}

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)
// console.log(notes.pop())
// notes.push('My New Note')
// console.log(notes.shift())
// console.log(notes.unshift('My first note'))
// notes[2] = 'This is the new note 3'
//notes.splice(1, 1 ,'This is the new second item')
// notes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)
// })
// console.log(notes.length)
// console.log(notes)
// //counting ... 1
// //initializer value only runs once
// //condition must be true 
// //count increment 
// for(let count = 2; count >= 0; count--){
//     console.log(count)
// }
// for(let count = notes.length -1; count >= 0; count--){
//    console.log(notes[count])
// }
// console.log(notes.indexOf('Note 2'))

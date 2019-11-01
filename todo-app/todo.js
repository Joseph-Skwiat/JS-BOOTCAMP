const todos = [{
    text:'Walk the dog',
    completed: false
},{
    text:'Clean kitchen',
    completed: false
},{
    text:'Buy food',
    completed: false 
},{
    text:'Do work',
    completed: false
},{
    text:'Exercise',
    completed: false
}]
//1. setup a div contain for todos
//2. setup filters (searchText) and wire up a new filter input to change it 
//3. create a renderTodos function to render and rereneder the latest filtered dat

//starts
const incompleteTodos = todos.filter(function (todo){
    return !todo.completed
})
document.querySelector(#search-text)
console.log(incompleteTodos)
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
    if(!todo.completed)
        document.querySelector('body').appendChild(p)
})
//ends

//listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("You clicked the button")
  })

//listen for todo text change   
document.querySelector('#todo-search').addEventListener('input', function(i) {
   console.log(i.target.value);
})


//const todo = ['Walk the dog', 'Run', 'Work out', 'Clean', 'Cook']

const todos = [{
    text:'Walk the dog',
    completed: false
},{
    text:'Clean kithen',
    completed: false
},{
    text:'Buy food',
    completed: true 
},{
    text:'Do work',
    completed: false
},{
    text:'Exercise',
    completed: true
}]

const sortTodos= function(todos){
    todos.sort(function(a,b){
    if (!a.completed && b.completed){
        return -1
        }
        else if (!b.completed && a.completed){
            return 1
        }
        else {
         return 0 
        }
    })
}

sortTodos(todos)
console.log(todos)




const getThingsToDo = function(todos, status){
    return todos.filter(function(todo, index) {
       return !todo.completed
    })
}















// const deleteTodo = function (todos, todoText){
//     const index = todos.findIndex(function (todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
//     }
// todos.push()
// deleteTodo(todos, 'clean')
// console.log(todos)

//delete the 3rd item 
//add a new item to the end 
//remove the first item to the list 

// todo.pop(2)
// todo.push('Get Bike')
// todo.shift()
// console.log(`You have ${todo.length} todo's`)
// todo.forEach(function(todo, index){
//     console.log( `${index +1}. ${todo}`)
// })

// for(let count= 0; count < todo.length ; count++){
//     const num = count +1
//     const todos = todo[count]
//     console.log(`${num}. ${todos}`)
//  }
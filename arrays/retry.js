const todos =[{
    task:'Task 1',
    completed: true
    },{
    task:'Task 2',
    completed: true
    },{
    task:'Task 3',
    completed: true
    },{
    task:'Task 4',
    completed: false
    }]

    const sortTodos = function(todos){
        todos.sort(function(a,b){
            if (!a.completed && b.completed)
            return -1
            else if (!b.complete && a.completed)
            return 1
            else
            return 0 
        })
    }

    sortTodos(todos)
    console.log(todos)
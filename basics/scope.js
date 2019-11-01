//lexical scope (static scope)
//global scope - defined outside of all code boxes
//local scope - defined inside a code box

//In a scope you can access variables defined in that scope, or in any parent / ancestor

//global scope (varOne)
    //local scope (varTwo)
        //local scope(varFour)
    //local scope (varThree)
let varOne = 'varOne' //global variable

if(true){
    console.log(varOne)
    let varTwo = 'varTwo' //local variable
    console.log(varTwo)
}

if (true){
    let varFour = 'varFour'
}
console.log(varTwo)
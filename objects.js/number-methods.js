// let num = 100.9574

// console.log(num.toFixed(2))

// console.log(Math.round(num))

// console.log(Math.ceil(num))

// console.log(Math.floor(num))


// let min = 0
// let max = 1

// let random = Math.floor(Math.random() * (max - min +1))+ min

// console.log(random)


//chanllenge area
//1-5  true if correct - false if not correct 
let min = 1
let max = 5
console.log("Make a guess between 1 and 5 ")
let makeGuess = function(guess){
    let random = Math.floor(Math.random() * (max - min +1))+ min
    console.log(random)
    return guess == random
}
console.log(makeGuess(5))

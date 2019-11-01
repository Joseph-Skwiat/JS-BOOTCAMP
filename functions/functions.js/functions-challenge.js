//function - input (argument) , code , output (return value)

let fahrenheit = 32

let celsius = (fahrenheit-32) * (5/9)
let kelvin = (fahrenheit + 459.67) * (5/9)



let farenheitToCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit-32) * (5/9)
    if(celsius <=0){
        let isFrezzing = true
    }
    return celsius
}

let tempOne = farenheitToCelsius(32)
let tempTwo = farenheitToCelsius(20)

console.log(tempOne)
console.log(tempTwo)

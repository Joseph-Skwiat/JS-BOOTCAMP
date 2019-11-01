//let fahrenheit = 32

let temperatureCalculate = function(fahrenheit)
{
    let celsius = (fahrenheit-32) * (5/9)
    let kelvin = (fahrenheit + 459.67) * (5/9)
   return{
    fahrenheit: fahrenheit,
    celsius: celsius,
    kelvin:kelvin
   }
}

let tempOne = temperatureCalculate(100)
//let tempTwo = farenheitToCelsius()

console.log(`${tempOne.fahrenheit} degree's is ${tempOne.celsius} C and ${tempOne.kelvin} K.`)
//console.log(tempTwo)

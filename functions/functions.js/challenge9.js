//tip calculcator 



let totalTipCalculator = function(billTotal, tipPercentage = .20){
    return billTotal * (tipPercentage/100)
}

let tipPercentage = 18 
let totalBill = 100

let totalTip = totalTipCalculator(totalBill, tipPercentage)
let message = `A ${tipPercentage}% tip on a $${totalBill} bill would be $${totalTip}.`

console.log(message)


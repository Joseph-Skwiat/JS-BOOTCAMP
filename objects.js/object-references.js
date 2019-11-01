let myAccount = {
    name: 'Joe Skwiat',
    expenses: 0,
    income: 0
}

let addExpense = function(account ,amount){
    account.expenses = account.expenses + amount 
}

let addIncome = function(account, addedIncome){
    account.income = account.income + addedIncome
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${myAccount.name} has ${myAccount.income - myAccount.expenses}, ${myAccount.income} in income, ${myAccount.expenses} in expenses. `
}
addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))


//add income to account addIncome
//resetAccount back to zero for expense and income
//getAccountSummary
// Account for Joe has $0 , $10 in income, $100 in exoenses 

//addIncome
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

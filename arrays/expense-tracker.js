const account={
    name:'Joseph Skwiat',
    income:[],
    expenses:[],
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalExpenses = 0 
        let totalIncome = 0
        let totalBalance = 0

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income){
             totalIncome = totalIncome + income.amount
        })
        
        totalBalance = totalIncome - totalExpenses
        
        return `${this.name} has $${totalBalance}. $${totalIncome} and  $${totalExpenses} in expenses.`
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
}

 account.addExpense('rent' , 950)
 account.addExpense('coffee', 2)
 account.addIncome('Job', 1000)
 account.addIncome('2nd Job', 1000)
console.log(account.getAccountSummary())

//1. add income array to account 
//2. addIncome method -> description , amount 
//3. tweak getAccountSummary 

//examople:
//   Joseph Skwiat has a balance of $10. $100 in income, $90 in expenses. 






//  addExpense = function(description, amount){
//     account.expenses.description(description)
//     account.expenses.amount(amount)
// }
   
//expense -> description , amount
// addExpense -> description , amount
// getAccountSummary -> total up all expenses --> Joseph Skwiat has $xxx in expenses 


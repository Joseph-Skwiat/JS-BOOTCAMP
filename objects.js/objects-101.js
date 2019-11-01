let myBook = { 
    title: '1984',
    author: 'George Orwell',
    pageCount: '326'
}
console.log(myBook)

myBook.title = 'Animal Farm'

console.log(myBook)

//Challenge
//Joe is 25 and lives in Philadelphia.


let myInfo = {
    name: 'Joe',
    age:'24',
    location: 'Philadelphia'
}

console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}. `)

myInfo.age = '25'
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}. `)

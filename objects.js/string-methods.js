let name = 'Joe      '

//length property
console.log(name.length)

//convert to upper case


console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'baseball20'
console.log(password.includes('base'))

//Trim 
console.log(name.trim())

//chanllenge area
//isValidPassword
//length is more than 8 - and it doesn't contain the word password


let isValidPassword = function (password){
   if(!password.includes('password') && password.length >= 8 ){
        return true
   }
   else {
       return false
   }
}
let isValidPassword1 = function (password){
    return  password.length >= 8 && !password.includes('password')
        
}

console.log(isValidPassword1('dfdf'))
console.log(isValidPassword1('abc123^&^*^^'))
console.log(isValidPassword1('njknjnjjnjnjpassword'))
console.log(isValidPassword1('abcdefghi'))

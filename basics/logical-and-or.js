//let temp = 5 

//logical and operator 

/*if(temp>=60 && temp <=90 ){
    console.log('It is pretty nice out')  
}
else if(temp <= 0 || temp >=120){
    console.log('Dont go outside')
}
else {
    console.log('Do what you want')
}
*/
//challenge 


//Are both vegan? only offer up vegan dishes
//At least one is vegan? make use to offer up some vegan options
//Else , offer up anything on the menu

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Are both vegan')
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('At least one is vegan')
    
}else{
    console.log('offer up anything on the menu')
}

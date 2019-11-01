function removeMultiples(array, multiple) {
    return array.filter(function(num) {
        return num % multiple !== 0;
    }.bind(this))
}

console.log(removeMultiples(myArray, 3));

function removeMultiples(array, multiple) {
    return array.filter(num => num % multiple !== 0)
}

//console.log(removeMultiples(myArray, 3));

var a = [1,2,3,5,9,15,16,21,23,25];


function removeMultiples(arr, multiple) {
  return arr.filter(function(num) {
    return num % multiple !== 0;
  });
}

console.log(removeMultiples([1,2,3,5,9,15,16,21,23,25], 3));
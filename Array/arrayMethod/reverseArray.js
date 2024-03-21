/*
The reverse() method returns the array in reverse order.

reverse() is function

 reverse() method does not take any parameters.
*/


let number=[1,3,4,5,6,7];
console.log(number.reverse());

//if spread operator is used then reverse() can't reverse
let reversedArray=[...number].reverse();
console.log(reversedArray); //not reverse value

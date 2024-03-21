/*
forEach() method is used to iterate over an array and execute a provided callback function for each element
*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Element at index ${index}: ${number}`);
});

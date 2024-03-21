let str='hello';
let str1='shweta';
console.log(str.length);
console.log(str.charAt(1));//the character at a specified index in a string.

console.log(str.charCodeAt(2));

console.log(str1.concat(str));
/*
: Returns the index of the first occurrence of a specified value in a string.
*/

console.log(str.indexOf('s'));

/*
Returns the index of the last occurrence of a specified value in a string.
*/
console.log(str.lastIndexOf('e'));

//slice
/*
Extracts a section of a string and returns a new string.

*/

console.log(str.slice(5,10))

//substring
console.log(str.substring(5,10))

/*
substr(startIndex, length)
from start index to mentioned length

*/

//toUpperCase(): Converts a string to uppercase.
console.log(str.toUpperCase());

//to Lowercase
console.log(str.toLowerCase());

//trim
console.log(str.trim());


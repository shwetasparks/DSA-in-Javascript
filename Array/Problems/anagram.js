/*
Write a program in JavaScript to check if two strings are anagrams of each other or not

String a= “india”
String b= “nidia”
*/

//1. check length;
//now convert it into array of string
//sort it
//join it

// function isAnagram(a, b) {
//   let str1 = a.split('').sort().join('');
//   let str2 = b.split('').sort().join('');

//   if (a.length !== b.length) {
//     return "not an anagram";
//   } else if (str1===str2) {
//   return "is an anagram";
//   } else {
//   return "not a anagram";
//   }
// }

// let result = isAnagram("india", "nidia");
// console.log(result);

function checkStringsAnagram(a, b) {
   let len1 = a.length;
   let len2 = b.length;
   if(len1 !== len2){
      console.log('Invalid Input');
      return
   }
   let str1 = a.split('').sort().join('');
   let str2 = b.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }
}
checkStringsAnagram("indian","indiaa")


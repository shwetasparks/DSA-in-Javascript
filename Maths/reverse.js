// //reverse number
// function reverseNum(n){
//   let result=0;
//   result=n.toString().split('').reverse().join('')
  
//   return result;
// }
// let reverse=reverseNum(12345);
// console.log(reverse);



//reverse num

function revNum(n){
   let revN=0
  while(n>0){
    let lastDigit=n%10;
    n=Math.floor(n/10);
   
    revN=(revN*10)+lastDigit;
  }
  return revN;
}
let result=revNum(12345);
console.log(result);
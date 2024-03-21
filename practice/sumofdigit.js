//sum of digit
/**
 *12334=1+2+3+3+4=13
 *
 * 
 */
//declare unction
function sumDigit(n){
  //extraction of digit=> n%10 then n=n/10
  let sum=0;
  while(n>0){
    sum = sum+ n%10; 
     n = Math.floor(n/10);
    
  }
  return sum;
  
}
let result =sumDigit(12334); //13
console.log(result);
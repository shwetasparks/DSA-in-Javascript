//count no. of digit
function countDigit(n){
  let count=0;
  while(n!=0){
    x=Math.floor(n/10);
    count++;
  }
  return count;
}
let result=countDigit(12345);
console.log(result);



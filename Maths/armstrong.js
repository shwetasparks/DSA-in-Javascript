    //armstrong number
function armstrong(n){
  let originalNum=n;
  let sum=0;
  while(n>0){
    let lastDigit=n%10; 
    sum=sum+(lastDigit**3);
    n=Math.floor(n/10);
  }
  if(sum===originalNum){
    return originalNum;
  }
  else return false;
}
let result=armstrong(123);
console.log(result);
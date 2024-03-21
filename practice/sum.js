//declare function with n
function sum(n){
  //initiallly sum is 0
  let sum=0;
  //sum=sum+i in loop
  for(let i=0;i<=n;i++){
    sum=sum+i;  //sum=0;sum=1+2+3+4+5=>15
  }
  //return sum
  return sum
}
//call
let result=sum(5);
console.log(result);

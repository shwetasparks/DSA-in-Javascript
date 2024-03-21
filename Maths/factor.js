//print all divisor of n brute
function divisor(n){
  for(i=1;i<=n;i++){
    if(n%i==0){
      console.log(i)
    }
  }
}
let result=divisor(36);
console.log(result)



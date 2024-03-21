function factorial(n){
 let fact=1;
  for(i=n;i>=1;i--){
    fact=fact*i;   //1*10
  }
  return fact;
}
let result=factorial(5)
console.log(result);

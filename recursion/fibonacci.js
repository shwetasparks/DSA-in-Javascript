function fibonacci (n){
  if(n==1 || n==0){
    return 1;
  }
  return f(n-1)+f(n-2);
  
}
let result=fibonacci(3);
console.log(result);
function decimalToBinary(n){  if(n==1){
    return 1;
  }
  return decimalToBinary(n/2)
  console.log(n%2);
    }
let result=decimalToBinary(10);
console.log(result);
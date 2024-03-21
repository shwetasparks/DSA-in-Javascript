function printArray(arr,n){
if(n<0) return 0;
  
  return printArray(arr,n-1);
 }
let arr=[3,4,5,7,2]
let result=printArray(arr,5)
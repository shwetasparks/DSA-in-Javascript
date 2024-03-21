//define 
function countNum(n){
  let count=0
  while(n>0){
    
  //extranction o digit
    let digit = Math.floor(n%10);
    n=Math.floor(n/10)
    
    count++;
  }
  return count;
}

let result=countNum(1289634)
console.log(result)
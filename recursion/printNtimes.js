//print N times using recusrsion
function printN(i,n){
 //base case
  if(n==6) return;
  console.log(n)
  printN(n+1)
}
printN(1)

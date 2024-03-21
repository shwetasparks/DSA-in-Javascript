// function divisor(n){
//   for(let i=1;i<=n;i++){
//     if(n%i===0){
//       console.log(i)
//     }
//   }
// }
// divisor(24)


//optimised
function divisor(n){
  let factor=[]
  for(let i=1;i*i<n;i++){
    if(n%i===0){
      factor.push(i);
    }
    if()
  }
   return factor;
}
let result=divisor(36);
console.log(result);

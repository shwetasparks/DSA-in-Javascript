/*
1.convert into binary
2.masking - left shift the bit k times
3. do bit wise OR


*/
function setKBit(n,k){
  let bitmask= 1<<k;
  return n|bitmask;
}
let result=setKBit(10,2)
console.log(result);
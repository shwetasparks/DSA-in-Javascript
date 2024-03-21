function findUniqueElement(arr){
  let ans=0;   //ans initialise 0 because X xor 0 = X  , no effect
  for (let i=0;i<arr.length;i++){
     ans=ans^arr[i]   //XOR with each ele with ans
  }
    return ans;
}

let arr=[1,2,4,2,1,3,6,5,5,6,4];
let result= findUniqueElement(arr);
console.log(result);
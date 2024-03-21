function reverseArray(arr) {
  let n=arr.length-1
  for(let i=0;i<n/2;i++){
  
  [arr[i],arr[n]]=[arr[n],arr[i]]

    n--;
  
  }
  return arr;
}
let arr=[2,3,4,5,6,7,8,9,10];
  

let result=reverseArray(arr);

console.log(result);
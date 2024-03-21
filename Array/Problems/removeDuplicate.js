function removeDuplicate(arr){
  let uniqueData=new Set();
  for(let i=0;i<arr.length;i++){
     uniqueData.add(arr[i]);
  }
  let k =uniqueData.size;
  return k;
  
}
let arr=[1,2,2,3,3,4,5,5]
removeDuplicate(arr)
console.log(k);
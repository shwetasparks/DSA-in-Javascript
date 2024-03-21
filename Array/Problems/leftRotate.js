//brute
function leftRotate(arr,n){

  let temp=new Array(n);
  for(let i=1;i<arr.length;i++){
    temp[i-1]=arr[i];
    temp[n-1]=arr[0]
  }
  return temp;
}
let rotatedArray=leftRotate([1,2,3,4,5],5)
console.log(rotatedArray)
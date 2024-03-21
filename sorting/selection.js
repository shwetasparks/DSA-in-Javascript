
function selectionSort(arr){
for(let i=0;i< arr.length-1;i++){
  let min=i;  //
  for(let j=i;j<arr.length-1;j++){
    if(arr[j]<arr[min]){
      min=j;    
    }
  }
   (arr[min],arr[i])=(arr[i],arr[min])
  }
}
let arr=[8,20,-2,4,-6];
selectionSort(arr);
console.log()
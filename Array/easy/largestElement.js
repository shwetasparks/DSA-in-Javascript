// function largestElement(arr){
//   arr.sort((a,b)=>a-b)
//   let largest=arr[arr.length-1];
//   return largest;
  
// }
// let arr=[2,3,5,26,13]
// console.log(largestElement(arr))

function largestEle(arr){
  let largest=arr[0];   //consider 1 st element is largest
  for(let i=0;i<arr.length;i++){   //loop through array
    if(arr[i]> largest){
      largest=arr[i]
    
    }
    
  }
  return largest;
}

let result=largestEle([2,4,5,7,3]);
console.log(result);

/*
2->largest

*/
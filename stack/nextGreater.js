function nextGreater(arr){
  //ans[]=-1
    let ans= new Array(arr.length).fill(-1);
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]>arr[i]){
        ans[i]=arr[j];
        break;
      }
  
      
    }
    
    
  }
  return ans;
  
}
let arr=[8,6,4,7,10,9]
let result=nextGreater(arr)
console.log(result);
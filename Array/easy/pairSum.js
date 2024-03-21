function pairSum(arr, target){
  let pair=[];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){   //aage wale element
     if(arr[i]+arr[j]===target){
     
       pair.push([i,j])
     }
    }
    
  }
  return pair;

}
let arr= [10,20,30,40]
let result=pairSum(arr,50)
console.log(result)
function linearSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      console.log("target found")
      return i;
    }
    
  }
  console.log("target not found")
  return -1;
  
}
let arr=[3,45,67,90,2]
let target =2;
let result=linearSearch(arr,target)
console.log(result);
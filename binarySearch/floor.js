function floor(target,n,arr){
  ans=-1;
  let low=0;
  let high=n-1;
  while(low<=high){
  let mid=Math.floor((low+high)/2);
  //ans<=x
  if(target>=arr[mid]){
    ans=arr[mid];
    low=mid+1;
  }
  else high=mid-1;
  
  }
  return ans;
}
let arr=[10,20,30,40,50]

let result=floor(25,5,arr)
console.log(result);
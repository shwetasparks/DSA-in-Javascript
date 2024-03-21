function unionOfArray(arr1,arr2){
  let ans=[];
   ans=[...arr1, ...arr2];
  let mySet=new Set(ans); //create set to remove duplicates
  
  return ans.from (mySet);   //create back to array
}
let arr1=[1,2,3];
let arr2=[4,5,6];

let result= unionOfArray(arr1,arr2)
console.log(result);


//print second largest element
/*
given an array Arrr of size N , print second largest distint element from array

input: [12,35,1,10,34,1]
output:34

input:[10,10,5]
output:[5]


approach:
create set so that uniques array is created 


*/
// function secondLargest(arr){
// // array.from will convert map set to array 
//   const uniqueArr= Array.from(new Set(arr));
//   uniqueArr.sort((a,b)=>{    //descending order   //O(nlogn)
//     return b-a; 
//   });
//   if(uniqueArr.length>=2){
//     return uniqueArr[1] //second element
//   } else
//     return -1;
  
//   console.log(uniqueArr);
  
// }
// let arr= [2,3,5,4,6,88,11]
// let result= secondLargest(arr)
// console.log(result);

//optimised approach
/*
dryrun 




*/

function secondLargestOptimised(arr){
  let largest=-1; //initial value
  let secondLargest=-1;
  for (let i=0;i<arr.length;i++){
    if(arr[i]>largest){
       secondLargest=largest;
       largest=arr[i];
     
    }
    else if
  }
  
}
 
// function intersection(arr1, arr2){
//   let ans=[];
//   for(let i=0; i<arr1.length;i++){
//     for (let j=0;j<arr2.length;j++){
//       if(arr1[i]===arr2[j]){  //compare arr1 and arr2 each element
//         let ele =arr1[i];
//         ans.push(ele);    //push ele into ans array
//       }   
        
//     }
    
//   }
//   return ans;   //return ans
// }
// let arr1=[1,2,3];
// let arr2=[1,4,5];
// let result=intersection(arr1,arr2);
// console.log(result);


function intersection(arr1, arr2) {
  let ans = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      ans.push(arr1[i]);
    }
  }

  return ans;
}

let arr1 = [1, 2, 3];
let arr2 = [1, 4, 3,3];
let result = intersection(arr1, arr2);
console.log(result); // [1]

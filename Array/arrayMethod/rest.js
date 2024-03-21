const  nums=[1,3,4,5]
const num2=[2,3,5,6,7]

function sum(...numbers){
  return numbers;
}
console.log(sum(nums,num2))
//this only take one parameter wiithout spread operator
//after spread will take both

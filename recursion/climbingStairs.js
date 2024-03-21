function climbingStair(n){
  if(n==0 || n==1){
    return 1;
  }
  return climbingStair(n-1)+climbingStair(n-2)
  
}
let result=climbingStair(3);
console.log(result);


//time complexity is high
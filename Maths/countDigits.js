//convert to string
function count(n){
 const nStr=  n.toString()
return nStr.length;
}
let result=count(12345)
console.log(result);


//divide by 10  => one number less  , jo remainder hoga wo last num dega => put it into count

function Countnum(num){
    let count=0;
 while(num!==0){
 
    num=Math.floor(num/10);
    remainder=num%10;
   count++;
    
  }
  return count;
}
let results=Countnum(12345);
console.log(result);


//math.abs
//-8=8, -2.5=2.5


//with log base 10 
function countDigit(x){
  let baseTen=Math.log10(Math.abs(x))
  let countNums =Math.floor(baseTen)+1
  return countNums;
}
let countResult=countDigit(12345);
console.log(countResult);
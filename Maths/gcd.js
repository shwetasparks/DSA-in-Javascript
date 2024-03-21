//gcd
function gcd(a,b){
  while (a>0 && b>0){
    if(a>b){
      a=a%b;
    }
    else b=b%a;
    
  }
  if(a==0) {return b}
  else return a
  
}
let answer=gcd(8,4)
console.log(answer);

function factorOptimise(n){
  for(i=1;i<=Math.sqrt(n);i++){
    if(n%i==0){
      console.log(i);
       if((n/i)!=i){
      console.log(Math.floor(n/i));
    }
    
  }
}
let result=factorOptimise(36);
console.log(result);


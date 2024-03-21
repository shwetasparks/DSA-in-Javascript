function toBinary(n){
  let res='';
  while(n!=1){
    if(n%2==1){
      res+='1';
      n=n/2;
    }
    n=n/2
  
  }
}
let binary=toBinary(40);
console.log(binary);
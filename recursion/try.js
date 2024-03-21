let count=0;
function print1(){
  if(count==4) return;
  console.log("count is",count)
  count++
 print1()

 
  
}
print1();
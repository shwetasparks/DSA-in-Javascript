//palindrome is =>reverse is same
function checkPalindrome(n){
  //reverse
  let original=n;
  let num=0;
  while(n>0){
  //check is n=reverse
    let digit= Math.floor(n%10)
    n=Math.floor(n/10)
     num= num*10+digit
}
  if(original===num){
    console.log('is palindrome ')
  }
  else console.log("not a palindrome ")
}
 checkPalindrome(121);

function f(n, dp) {
  //base case
  if (n <= 1) {
    return n;
  }
// means no particular data stored in array 
  if (dp[n] !== -1) {
    return dp[n];
  }
 //
  dp[n] = f(n - 1, dp) + f(n - 2, dp);
  return dp[n];
}

let n = 5;
let dp = Array(n + 1).fill(-1);
console.log(f(n, dp));

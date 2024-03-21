function niceSubsequence(arr, n) {
  let map = new Map();
  let ans = 1;
  for (let i = 0; i < n; i++) {
      let diff = arr[i] - i;
      if (map.has(diff)) {
          map.set(diff, map.get(diff) + 1);
      } else {
          map.set(diff, 1);
      }
      ans = Math.max(ans, map.get(diff));
  }
  return ans;
}

// Example usage
var n = 6;
var s = [2,1,4,10,7,7]; // 2 1 4 10 7 7
var num = niceSubsequence(s, n);
console.log(num);
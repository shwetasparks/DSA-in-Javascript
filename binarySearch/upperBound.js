function upperBound(target, arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target<arr[mid]) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [23, 34, 56, 7, 8, 9, 10];
let result = upperBound(8, arr);
console.log(result);

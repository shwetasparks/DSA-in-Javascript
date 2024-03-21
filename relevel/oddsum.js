function oddSum(arr, n) {
  // Check if the sum of the array is already odd.
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  if (sum % 2 !== 0) {
    // The array is already odd, so no operations are required.
    return 0;
  }

  // The array is even, so we need to make it odd.
  // We can do this by either removing one element or dividing all elements by 2.

  let minOperations = Infinity;

  // Try removing one element.
  for (let i = 0; i < n; i++) {
    let newArray = arr.slice();
    newArray.splice(i, 1);
    sum = 0;
    for (let j = 0; j < newArray.length; j++) {
      sum += newArray[j];
    }
    if (sum % 2 !== 0) {
      minOperations = Math.min(minOperations, 1);
    }
  }

  // Try dividing all elements by 2.
  sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i] / 2;
  }
  if (sum % 2 !== 0) {
    minOperations = Math.min(minOperations, n);
  }

  return minOperations;
}

//Driver Code
var n = readline();
var temp = readline().trim();
var s = temp.split(" ");
for (let i = 0; i < n; i++) {
  s[i] = Number(s[i]);
}
var num = oddSum(s, n);
print(num);

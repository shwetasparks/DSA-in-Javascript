// Function to find the minimum number of operations required to make the sum odd
function oddSum(arr, n) {
  // Check if the sum of the array is already odd.
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  if (sum % 2 === 1) {
    // The array is already odd, so no operations are needed.
    return 0;
  }

  // Otherwise, the array is even, so we need to either remove an element or divide all elements by 2.
  let minOperations = Math.min(1, n / 2);

  // Check if dividing all elements by 2 will make the sum odd.
  let newSum = 0;
  for (let i = 0; i < n; i++) {
    newSum += arr[i] / 2;
  }
  if (newSum % 2 === 1) {
    // Dividing all elements by 2 works, so return 1 operation.
    return 1;
  }

  // Otherwise, we need to remove an element.
  return minOperations;
}

// Driver Code
var n = parseInt(readline());
var temp = readline().trim();
var s = temp.split(" ").map(Number);
var num = oddSum(s, n);
print(num);

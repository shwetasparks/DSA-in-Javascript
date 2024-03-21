function fillArray(A, n) {
  let B = new Array(n).fill(0);
  B[0] = A[0];
  let sum = B[0];
  for (let i = 1; i < n; i++) {
    if (A[i] >= B[i - 1]) {
      B[i] = B[i - 1];
    } else {
      B[i] = A[i];
    }
    sum += B[i];
  }
  return sum;
}

// Simulated input (replace this with actual input)
var n = 3;
var s = [2, 3, 1]; // Replace with your input array

var num = fillArray(s, n);
console.log(num); // Output result

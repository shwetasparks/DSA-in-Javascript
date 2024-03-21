function printSubArray(start, end, arr) {
  // Base case
  if (end == arr.length) {
    return;
  }

  // Print subarray from start to end
  for (let i = start; i <= end; i++) {
    arr[i];
  }
  console.log("");

  // Recursive call
  printSubArray(start, end + 1, arr);
}

function printSubarrayStart(start, end, arr) {
  // Base case
  if (start == arr.length) {
    return;
  }

  // Print subarrays starting from 'start'
  for (let i = start; i < arr.length; i++) {
    for (let j = start; j <= i; j++) {
      console.log(arr[j]);
    }
    console.log("");
  }

  // Recursive call
  printSubarrayStart(start + 1, end, arr);
}

let arr = [1, 2, 3, 4, 5];
printSubArray(0, 0, arr);
printSubarrayStart(0, arr.length - 1, arr);

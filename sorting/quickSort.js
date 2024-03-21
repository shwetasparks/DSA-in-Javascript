function qs(arr, low, high) {
  if (low < high) {
    let p = pIndex(arr, low, high);
    qs(arr, low, p - 1);
    qs(arr, p + 1, high);
  }
}

// Find pivot index
function pIndex(arr, low, high) {
  let pivot = arr[low];
  let i = low + 1; // Change here
  let j = high;
  while (i <= j) { // Change here
    while (arr[i] <= pivot && i <= high) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i <= j) { // Change here
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

let arr = [10, 7, 8, 9, 1, 5];
qs(arr, 0, arr.length - 1);
console.log(arr);

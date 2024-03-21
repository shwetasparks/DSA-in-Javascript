function minimiseTheInteger(n, k) {
  // Find the index of the first non-zero digit.
  let i = 0;
  while (i < n.length && n[i] === 0) {
    i++;
  }

  // If all the digits are zero, then the minimum integer is 0.
  if (i === n.length) {
    return 0;
  }

  // The minimum integer is the largest integer that can be formed by changing at most K digits of the given integer.
  let minInteger = "";
  for (let j = 0; j < k; j++) {
    minInteger += "9";
  }
  minInteger += n.slice(i);

  // If the minimum integer is still greater than the given integer, then we can't change any more digits.
  if (parseInt(minInteger) > parseInt(n)) {
    return n;
  }
  else {
    return minInteger;
  }
}

//Driver Code
var n = readline();
var k = readline();
var num  = minimiseTheInteger(n,k);
print(num);

function minimiseTheInteger(n, k) {
  // Convert the integer to a string for easier manipulation
  let numStr = n.toString();
  let length = numStr.length;

  // Convert the number of changes 'k' to a number to be used as a counter
  k = parseInt(k);

  // If there's only one digit or no changes allowed, return the original integer
  if (length === 1 || k === 0) {
    return n;
  }

  // Initialize the result string with the first digit
  let result = numStr[0];

  // Iterate through the rest of the digits starting from the second one
  for (let i = 1; i < length; i++) {
    // If the current digit can be minimized by changing it to '0' and 'k' allows it
    if (numStr[i] !== '0' && k > 0) {
      result += '0';
      k--;
    } else {
      // Otherwise, keep the original digit
      result += numStr[i];
    }
  }

  return parseInt(result); // Convert the result string back to an integer
}

// Driver Code
var n = readline();
var k = readline();
var num = minimiseTheInteger(n, k);
print(num);

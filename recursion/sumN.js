function sumOfN(n) {
  if (n ==0) {
    return 0;
  }
  return n + sumOfN(n - 1); // Changed f(n-1) to sumOfN(n-1)
}

let result = sumOfN(3);
console.log(result);

function primeNum(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if ((n / i) !== i) {
        count++;
      }
    }
  }

  if (count === 2) {
    return "prime";
  } else {
    return "not prime";
  }
}

let result = primeNum(4);
console.log(result);

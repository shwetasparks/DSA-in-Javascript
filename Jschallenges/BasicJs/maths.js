// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function operator(a, b, c, d, e, f) {
  return ((a + b - c) * d / e) ** f

}
let result=operator(2,4,5,6,7,8)
console.log(result);
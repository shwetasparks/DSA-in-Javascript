function fillArray(A, n) {
    let B = new Array(n).fill(0);
    B[0] = A[0];
    let sum = B[0];
    for (let i = 1; i < n; i++) {
        if (A[i] >= B[i-1]) {
            B[i] = B[i-1];
        } else {
            B[i] = A[i];
        }
        sum += B[i];
    }
    return sum;
}
var n = parseInt(readline());
var temp = readline().trim();
var s = temp.split(" ").map(Number);
var num = fillArray(s, n);
print(num);


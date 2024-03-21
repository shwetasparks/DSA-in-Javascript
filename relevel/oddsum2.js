function oddSum(arr, n) {
    let oddCount = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 1) {
            oddCount++;
        }
        sum += arr[i];
    }

    if (sum % 2 === 1) {
        return 0;
    } else if (oddCount === 0) {
        return -1;
    } else {
        return 1;
    }
}

// Sample input
const n = 3;
const arr = [6, 4, 10];

const num = oddSum(arr, n);
console.log(num);

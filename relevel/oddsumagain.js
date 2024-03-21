function minOperationsToMakeSumOdd(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    if (totalSum % 2 === 1) {
        return 0; // Sum is already odd
    }

    // If there is at least one even element, remove it
    for (let num of arr) {
        if (num % 2 === 0) {
            return 1;
        }
    }

    // If all elements are odd, divide any odd element by 2
    return 2;
}

// Input
const n = Number(prompt());
const arr = prompt().split(' ').map(Number);

// Calculate minimum operations
const minOps = minOperationsToMakeSumOdd(arr);
console.log(minOps);

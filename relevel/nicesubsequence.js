function niceSubsequence(arr, n) {
    let map = new Map();
    let ans = 1;
    for (let i = 0; i < n; i++) {
        let diff = arr[i] - i;
        if (map.has(diff)) {
            map.set(diff, map.get(diff) + 1);
        } else {
            map.set(diff, 1);
        }
        ans = Math.max(ans, map.get(diff));
    }
    return ans;
}
var n = parseInt(readline());
var temp = readline().trim();
var s = temp.split(" ").map(Number);
var num = niceSubsequence(s, n);
print(num);
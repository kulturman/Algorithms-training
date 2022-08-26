function maximumSubArray(arr) {
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd]; 

        if (sum < 0) {
            sum = 0;
        }

        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximumSubArray([-2, -1, -3, -4, -1, -2, 1, -5, 100]));
console.log(maximumSubArray([100, -2, -1, -3, -4, -1, -2, 1, -5]));
function longestSubArrayWithOnesAfterReplacement(arr, k) {
    let windowStart = 0;
    let maxLength = 0;
    let repeatingOnes = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        let currentDigit = arr[windowEnd];

        if (currentDigit === 1) {
            repeatingOnes++;
        }

        if (windowEnd - windowStart + 1 - repeatingOnes > k) {
            let leftDigit = arr[windowStart];

            if (leftDigit === 1) {
                repeatingOnes--;
            }
            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(longestSubArrayWithOnesAfterReplacement([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestSubArrayWithOnesAfterReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
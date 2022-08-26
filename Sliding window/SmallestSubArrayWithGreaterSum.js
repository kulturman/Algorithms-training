const smallestSubarraySum = function(s, arr) {
    let smallestArraySize = Number.MAX_SAFE_INTEGER;
    let currentSum = 0;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      currentSum += arr[windowEnd];
  
      while(currentSum >= s) {
        smallestArraySize = Math.min(smallestArraySize, windowEnd - windowStart + 1);
        currentSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return smallestArraySize === Number.MAX_SAFE_INTEGER ? 0: smallestArraySize;
};

console.log(smallestSubarraySum(7, [2,1,5,2,3,2])); // 2, because [5,2] is the smallest subarray with a sum greater than 7.
console.log(smallestSubarraySum(7, [2,1,5,2,8])); // 1, becase [8] is the smallest subarray with a sum greater than 7.
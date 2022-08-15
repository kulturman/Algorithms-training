//Solution to: https://www.hackerrank.com/challenges/maxsubarray 
function maxSubarray(arr) {
    let maxSubArraysSum = Number.NEGATIVE_INFINITY;
    let maxSubSequencesSum = Number.NEGATIVE_INFINITY;
    let subArraysSum = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        subArraysSum += arr[windowEnd];
        maxSubSequencesSum = Math.max(maxSubSequencesSum, arr[windowEnd], maxSubSequencesSum + arr[windowEnd]);
        maxSubArraysSum = Math.max(maxSubArraysSum, subArraysSum);
        
        if (subArraysSum < 0) {
            subArraysSum = 0;
        }
    }
    
    return [maxSubArraysSum, maxSubSequencesSum];
}


console.log(maxSubarray([-1, 2, 3, -4, 5, 10]));
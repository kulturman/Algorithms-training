//Solution to https://www.hackerrank.com/challenges/closest-numbers/problem

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    
    return arr[parseInt(arr.length / 2)];
}

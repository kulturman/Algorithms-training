//Solution to https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr) {

    let currentMinDifference = Number.MAX_SAFE_INTEGER;
    let validPairs = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        let difference = Math.abs(arr[i] - arr[i + 1]);
        
        if (difference < currentMinDifference) {
            validPairs = [arr[i], arr[i + 1]];
            currentMinDifference = difference;
        }
        
        else if (difference === currentMinDifference) {
            validPairs.push(arr[i], arr[i + 1]);
        }
        
    }
    
    return validPairs;

}

console.log(closestNumbers([-1, 2, 5, -2, 10, 3, 9, 8, 7]));
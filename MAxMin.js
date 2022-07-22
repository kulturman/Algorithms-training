//Solution to: https://www.hackerrank.com/challenges/angry-children/problem

function maxMin(k, arr) {
    arr.sort((a, b) => b - a);
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i <= arr.length - k; i++) {
        if (arr[i] - arr[i + k - 1] < min) {
            min = arr[i] - arr[i + k - 1];
        }
    }
    
    return min;

}

console.log(maxMin(3, [300, 1000, 100, 200, 30, 20, 10]));

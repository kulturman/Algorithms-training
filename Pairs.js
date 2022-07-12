//Solution to: https://www.hackerrank.com/challenges/pairs/problem

function pairs(k, arr) {
    let nbPairs = 0;
    
    arr.sort((a, b) => b - a);
    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] - arr[j] === k) {
                nbPairs++;
            }
        }
    }
    
    return nbPairs;

}

console.log(pairs(5, [0, 2, 5, 8, -3]));
/*
You are visiting a farm to collect fruits. The farm has a single row of fruit trees.
You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.
You will be given an array of characters where each character represents a fruit tree.
The farm has following restrictions:
Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit 
*/
const fruitsIntoBaskets = function(fruits) {
    let windowStart = 0;
    const map = new Map();
    let maxNumberOfFruitsInBaskets = Number.MIN_SAFE_INTEGER;

    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let currentTreeFruitsInBaskets = map.get(fruits[windowEnd]) || 0;
        map.set(fruits[windowEnd], currentTreeFruitsInBaskets + 1);

        while (map.size > 2) {
            map.delete(fruits[windowStart]);
            windowStart++;
        }
        
        let currentMapSum = 0;

        for (let qty of map.values()) {
            currentMapSum += qty;
        }
        maxNumberOfFruitsInBaskets = windowEnd - windowStart + 1;
    }
    return maxNumberOfFruitsInBaskets;
};

console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));
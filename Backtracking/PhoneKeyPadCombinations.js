function getCombinations(numbers, currentCombination = "", position = 0) {
    let mapping = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    if (currentCombination.length == numbers.length || position > numbers.length - 1) {
        solutions.push(currentCombination);
        return;
    }

    let map = mapping[numbers[position]];

    for (let i = 0; i < map.length; i++) {
        currentCombination += map[i];
        position++;
        getCombinations(numbers, currentCombination, position);
        currentCombination = currentCombination.slice(0, -1);
        position--;
    }
}

let solutions = [];
getCombinations("23", "");
console.log(solutions);

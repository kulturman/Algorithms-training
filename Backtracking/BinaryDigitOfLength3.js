function printCombinations(combination) {
    if (combination.length === 3) {
        console.log(combination.join(''));
        return;
    }

    for (let i = 0; i < 2; i++) {
        combination.push(i);
        printCombinations(combination);
        combination.pop();
    }
}

printCombinations([]);
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

function combinationsOfLetters() {
    const letters = ['A', 'B', 'C'];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                console.log(letters[i] + letters[j] + letters[k]);
            }
        }
    }
}

//combinationsOfLetters()
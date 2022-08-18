function permutationInAString(str, pattern) {
    let windowStart = 0;
    let matched = 0;
    const patternLettersFrenquency = {};
    //Populate the patternLettersFrenquency object with the pattern letters and their frenquency
    for (let letter of pattern) {
        patternLettersFrenquency[letter] = (patternLettersFrenquency[letter] || 0) + 1;
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentCharacter = str[windowEnd];

        if (currentCharacter in patternLettersFrenquency) {
            patternLettersFrenquency[currentCharacter]--;

            if (patternLettersFrenquency[currentCharacter] === 0) {
                matched++;
            }
        }

        if (matched === Object.keys(patternLettersFrenquency).length) {
            return true;
        }

        if (windowEnd >= pattern.length - 1) {
            let leftCharacter = str[windowStart];
            windowStart++;

            if (leftCharacter in patternLettersFrenquency) {
                if (patternLettersFrenquency[leftCharacter] === 0) {
                    matched--;
                }
                patternLettersFrenquency[leftCharacter]++;
            }
        }
    }
console.log(patternLettersFrenquency);
    return false;
}

console.log(permutationInAString('oidbcafa', 'abc'));
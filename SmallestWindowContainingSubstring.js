function smallestWindowContainingSubstring(str, pattern) {
    const patternLettersFrequency = {};
    let windowStart = 0;
    let shortestSubstring = '';
    let matched = 0;

    for (let letter of pattern) {
        patternLettersFrequency[letter] = (patternLettersFrequency[letter] || 0) + 1;
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentCharacter = str[windowEnd];

        if (currentCharacter in patternLettersFrequency) {
            patternLettersFrequency[currentCharacter]--;
        }

        if (patternLettersFrequency[currentCharacter] === 0) {
            matched++;
        }

        //There is match, try to shrink the window to find the shortest windows
        while (matched === Object.entries(patternLettersFrequency).length) {
            if (shortestSubstring === '') {
                shortestSubstring = str.substring(windowStart, windowEnd + 1);
            }

            else {
                if (windowEnd - windowStart + 1 < shortestSubstring.length) {
                    shortestSubstring = str.substring(windowStart, windowEnd + 1);
                }
            }
            const leftChar = str[windowStart];
            if (leftChar in patternLettersFrequency) {
                if (patternLettersFrequency[leftChar] === 0) {
                    matched--;
                }
                patternLettersFrequency[leftChar]++;
            }
            windowStart++;
        }
    }

    return shortestSubstring;
}

console.log(smallestWindowContainingSubstring('abdbca', 'abc'));
console.log(smallestWindowContainingSubstring('aabdec', 'abac'));
console.log(smallestWindowContainingSubstring('adcad', 'abc'));
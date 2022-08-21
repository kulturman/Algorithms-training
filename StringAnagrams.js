function stringAnagrams(str, pattern) {
    let patternLettersFrenquency = {};
    let windowStart = 0;
    let matched = 0;
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
            const indexes = []
            for (let i = windowStart; i <= windowEnd; i++) {
                indexes.push(i);
            }
            return indexes;
        }

        if (windowEnd >= pattern.length - 1) {
            let leftChar = str[windowStart];
            windowStart++;

            if (leftChar in patternLettersFrenquency) {
                if (patternLettersFrenquency[leftChar] === 0) {
                    matched--;
                }
                patternLettersFrenquency[leftChar]++;
            }
        }
    }
}

console.log(stringAnagrams('ppqp', 'pq'));
console.log(stringAnagrams('abbcabc', 'abc'));
const longestSubstringWithKDistinct = function(str, k) {
    const map = new Map();
    let windowStart = 0;
    let maxLength = Number.MIN_SAFE_INTEGER;
    
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentLetter = str[windowEnd];
        let currentLetterCount = map.get(currentLetter) || 0;
        map.set(currentLetter, currentLetterCount + 1);

        if (map.size <= k) {
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }
        else {
            map.delete(str[windowStart]);
            windowStart++;
        }
    }

    return maxLength;
};

console.log(longestSubstringWithKDistinct("araaci", 1)); // 2

console.log(longestSubstringWithKDistinct("ara", 2)); // 3
console.log(longestSubstringWithKDistinct("araaci", 2)); // 4
console.log(longestSubstringWithKDistinct("cbbebi", 3)); // 5
console.log(longestSubstringWithKDistinct('cbbebi', 10)) // 6
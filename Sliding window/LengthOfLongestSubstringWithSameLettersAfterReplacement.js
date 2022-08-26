function lengthOfLongestSubstringWithSameLettersAfterReplacement(str, k) {
    let windowStart = 0;
    let maxRepeatingLettersCount = 0;
    let maxLength = 0
    let map = new Map();

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let currentLetter = str[windowEnd];

        if (!map.has(currentLetter)) {
            map.set(currentLetter, 0);
        }
        map.set(currentLetter, map.get(currentLetter) + 1);
        maxRepeatingLettersCount = Math.max(maxRepeatingLettersCount, map.get(currentLetter));

        if (windowEnd - windowStart + 1 - maxRepeatingLettersCount > k) {
            map.set(str[windowStart], map.get(str[windowStart]) - 1);
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstringWithSameLettersAfterReplacement('aabccbb', 2));
console.log(lengthOfLongestSubstringWithSameLettersAfterReplacement('abccde', 1));
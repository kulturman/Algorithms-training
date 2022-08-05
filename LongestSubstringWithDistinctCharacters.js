function longestSubstringWithDistinctCharacters(str) {
    let lastIndexOfCharacters = {};
    let windowStart = 0;
    let longestString = "";

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const currentCharacterLastIndex = lastIndexOfCharacters[str[windowEnd]];
        //The character already exists in the map and is in the current window (this is needed, remove it and see how last case fails)
        if (currentCharacterLastIndex !== undefined && currentCharacterLastIndex >= windowStart) {
            windowStart = currentCharacterLastIndex + 1;
        }
        lastIndexOfCharacters[str[windowEnd]] = windowEnd;

        if (longestString.length < windowEnd - windowStart + 1) {
            longestString = str.substring(windowStart, windowEnd + 1);
        }
    }

    return longestString;
}

console.log(longestSubstringWithDistinctCharacters('aabccbb'));
console.log(longestSubstringWithDistinctCharacters('abbbb'));
console.log(longestSubstringWithDistinctCharacters('algorithms'));
console.log(longestSubstringWithDistinctCharacters('algorithmsamabcdefghijklmop'));
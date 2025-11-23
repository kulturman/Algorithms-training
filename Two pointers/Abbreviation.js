function Abbreviation(word, abbr) {
    let i = 0;
    let j = 0;

    while(i < word.length && j < abbr.length) {
        if (isNumber(abbr[j])) {
            let wholeNumber = abbr[j];

            if (j < abbr.length - 1 && isNumber(abbr[j + 1])) {
                //We found a two digits number
                wholeNumber += abbr[j+1]
            }

            i += parseInt(wholeNumber);
            j += wholeNumber.length;
        }

        else {
            if (word[i] != abbr[j]) {
                return false;
            }
            i++;
            j++;
        }
    }

    return i == word.length && j == abbr.length;
}

function isNumber(char) {
    const codePoint = char.codePointAt();
    return codePoint >= '0'.codePointAt() && codePoint <= '9'.codePointAt();
}

console.log(Abbreviation('h', '2'))
console.log(Abbreviation('internationalization', '13iz4n'))
console.log(Abbreviation('calendar', 'c6r'))
console.log(Abbreviation('calendar', 'calendar'))
console.log(Abbreviation('internationalization', 'i18n'))
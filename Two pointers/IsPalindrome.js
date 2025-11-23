function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let i = 0;
    let j = str.length - 1;

    while(i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
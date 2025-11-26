function findFirsOccurence(haystack, needle) {
    let i = 0;
    let j = 0;

    while(i < haystack.length && j < needle.length) {
        if (haystack[i] == needle[j]) {
            if (j == needle.length - 1) {
                return i -  needle.length + 1;
            }
            i++;
            j++;
        }
        else {
            if (j > 0) {
                i = i - j + 1;
            } else {
                i++;
            }
            j = 0;
        }
    }
    return - 1;
}

console.log(findFirsOccurence("mississippi", "issip"))
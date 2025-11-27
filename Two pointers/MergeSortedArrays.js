//Solution for https://leetcode.com/problems/merge-sorted-array
function mergeSortedArrays(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    if (m == 0) {
        for(i = 0; i < n + m; i++) {
            arr1[i] = arr2[i];
        }
        console.log(arr1);
        return;
    }

    while(i >= 0 && j >= 0) {
        if (arr1[i] >= arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }

    console.log(arr1);
}

mergeSortedArrays([1, 3, 6], 3, [1], 1);
mergeSortedArrays([2, 0], 1, [1, 2], 2);
mergeSortedArrays([2, 0], 1, [1], 1);
mergeSortedArrays([0, 0, 0], 0, [1, 2, 3], 3);
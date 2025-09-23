//Solution to: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function cyclicRotation(A, K) {
    const flippedArray = [...A];

    for (let i = 0; i < A.length; i++) {
        let flippedIndex = i + K;

        if (flippedIndex > A.length - 1) {
            flippedIndex = flippedIndex % A.length;
        }

        flippedArray[flippedIndex] = A[i];
    }

    return flippedArray;
}

function moveZeroes(arr) {
    let j = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    console.log(arr);
}


moveZeroes([0, 1, 0, 3, 0]);
moveZeroes([0,1,0,3,12]);
moveZeroes([0]);
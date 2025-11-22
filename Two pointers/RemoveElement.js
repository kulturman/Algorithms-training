function removeElement(nums, val) {
    let j = nums.length - 1;
    let i = 0;

    while(i <= j) {
        if (nums[i] === val) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j--;
        }
        else {
            i++;
        }
    }

    return i;
}

const arr = [0,1,2,2,3,0,4,2];
console.log(removeElement(arr, 2));
console.log(arr);
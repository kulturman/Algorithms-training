function removeDuplicates(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            console.log(`New element found: ${nums[j]}, old element: ${nums[i]}, index: ${i}, j: ${j}`);
            i++;
            nums[i] = nums[j];
        } else {
            console.log(`Duplicate element found: ${nums[j]}`);
            //i++;
        }
    }

    console.log('DONE')
}

const arr = [0,0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr)
console.log(arr)
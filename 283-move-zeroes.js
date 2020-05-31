/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i_zero = 0,
        i_non_zero = 1;

    while (i_zero < nums.length && i_non_zero < nums.length) {
        if (nums[i_zero] === 0 && nums[i_non_zero] !== 0) {
            [nums[i_zero], nums[i_non_zero]] = [nums[i_non_zero], nums[i_zero]];
            i_zero++;
            i_non_zero++;
        } else if (nums[i_zero] === 0 && nums[i_non_zero] === 0) {
            i_non_zero++;
        } else if (nums[i_zero] !== 0) {
            i_zero++;
            i_non_zero++;
        }
    }

    return nums;
};

console.log(moveZeroes([1, 0, 0, 2]));
console.log(moveZeroes([1, 0, 0, 3, 12]));

// var rotate = function (nums, k) {
//     return [...nums.slice(nums.length - k, nums.length), ...nums.slice(0, nums.length - k)];
// };

var reverse = function (arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    const endIndex = nums.length - 1;
    if (k > endIndex) {
        k = k % nums.length;
    }
    if (endIndex > 0) {
        reverse(nums, 0, endIndex);
        reverse(nums, 0, k - 1);
        reverse(nums, k, endIndex);
    }

    return nums;
};

console.log(rotate([1, 2], 1));

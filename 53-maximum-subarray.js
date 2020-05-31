var maxSubArray = function (nums) {
    let current_sum = nums[0],
        best_sum = nums[0];
    for (let i=1; i< nums.length; i++) {
        current_sum = Math.max(nums[i] + current_sum, nums[i]);
        best_sum = Math.max(best_sum, current_sum);
    }
    return best_sum;
};

console.log(maxSubArray([-1, 2, -3, -4]));

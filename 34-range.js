/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const first = nums.indexOf(target);
  const last = nums.lastIndexOf(target);

  return [first, last];
};

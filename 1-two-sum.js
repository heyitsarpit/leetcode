// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (num2 === nums[j]) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  let dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (dict.get(complement) != undefined) return [i, dict.get(complement)];
    dict.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

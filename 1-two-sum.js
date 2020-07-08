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
        if (dict.get(complement) !== undefined) return [i, dict.get(complement)];
        dict.set(nums[i], i);
    }
};

console.log(twoSum([2, 7, 6, 5, 4, 11, 15], 9));

const num = 10000;

// const sumDigits = (num) => {
//   let sum = 0;
//   while (num / 10 !== 0) {
//       sum += num % 10;
//       num = Math.floor(num / 10);
//   }
//   return sum;
// };

// const digitalRoot = (num) => {
//     if (num % 10 === num) {
//         return num;
//     }
//     return digitalRoot(sumDigits(num));
// };

// console.log(digitalRoot(0));

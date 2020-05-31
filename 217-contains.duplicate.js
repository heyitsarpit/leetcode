// var containsDuplicate = function (nums) {
//     let map = {};

//     nums.forEach((num) => {
//         map[num] = map[num] ? map[num] + 1 : 1;
//     });

//     for (value of Object.values(map)) {
//         if (value > 1) return true;
//     }

//     return false;
// };

var containsDuplicate = function (nums) {
    let set = new Set(nums);
    return nums.length !== set.size;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

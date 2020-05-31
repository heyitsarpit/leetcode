/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let temp_x = x;
  let rev = 0;

  while (rev < temp_x) {
    rev = rev * 10 + (temp_x % 10);
    temp_x = Math.floor(temp_x / 10);
  }

  return rev === temp_x || temp_x === Math.floor(rev / 10);
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(12344321)); // true
console.log(isPalindrome(10)); // false

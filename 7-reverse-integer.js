/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x);

  if (x === 0) return 0;

  let temp_x = sign * x;
  let rev = 0,
    digit = 0;
  while (temp_x / 10 > 0) {
    digit = temp_x % 10;
    rev = rev * 10 + digit;
    temp_x = Math.floor(temp_x / 10);
  }

  rev = sign * rev;
  if (rev < -1 * Math.pow(2, 31) || rev > Math.pow(2, 31) - 1) return 0;
  return rev;
};

console.log(reverse(1234));
console.log(reverse(-1230));
console.log(reverse(Math.pow(2, 75)));

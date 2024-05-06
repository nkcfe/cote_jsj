// const plusOne = (digits) => {
//   return (BigInt(digits.join("")) + 1n).toString().split("");
// };

const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    console.log(digits);
  }
  console.log(digits);
  digits.unshift(1);
  console.log(digits);
  return digits;
};

const digits = [8, 6, 7, 9];

console.log(plusOne(digits));

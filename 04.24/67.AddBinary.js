// const addBinary = (a, b) => {
//   const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
//   return sum.toString(2);
// };

const addBinary = (a, b) => {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--], 2);
    if (j >= 0) sum += parseInt(b[j--], 2);

    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }

  if (carry !== 0) result = carry + result;

  return result;
};

const a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary(a, b));

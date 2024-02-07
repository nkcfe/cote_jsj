const bin1 = "10";
const bin2 = "11";

function solution(bin1, bin2) {
  const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  return sum.toString(2);
}

console.log(solution(bin1, bin2));

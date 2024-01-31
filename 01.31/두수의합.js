const a = "18446744073709551615";
const b = "287346502836570928366";

function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

console.log(solution(a, b));

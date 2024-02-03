const num = 29183;
const k = 1;

function solution(num, k) {
  const index = num.toString().indexOf(k.toString()) + 1;
  return index > 0 ? index : -1;
}

console.log(solution(num, k));

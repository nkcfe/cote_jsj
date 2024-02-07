const i = 1;
const j = 13;
const k = 1;

function solution(i, j, k) {
  return Array.from({ length: j - i + 1 }, (_, index) => i + index)
    .flatMap((v) => v.toString().split(""))
    .filter((v) => v.toString().includes(k)).length;
}

console.log(solution(i, j, k));

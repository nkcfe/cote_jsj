const cipher = "dfjardstddetckdaccccdegk";
const code = 4;

function solution(cipher, code) {
  return [...cipher].filter((_, i) => (i + 1) % code === 0).join("");
}

console.log(solution(cipher, code));

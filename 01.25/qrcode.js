const q = 3;
const r = 1;
const code = "qjnwezgrpirldywt";

function solution(q, r, code) {
  return code
    .split("")
    .filter((char, idx) => idx % q === r)
    .join("");
}

console.log(solution(q, r, code));

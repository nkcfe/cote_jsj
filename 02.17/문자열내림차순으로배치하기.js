const s = "Zbcdefg";

function solution(s) {
  return [...s].sort().reverse().join("");
}

console.log(solution(s));

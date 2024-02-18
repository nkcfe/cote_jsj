const n = 45;

function solution(n) {
  const reversed = n.toString(3).split("").reverse().join("");
  return parseInt(reversed, 3);
}

console.log(solution(n));

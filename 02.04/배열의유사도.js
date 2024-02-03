const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
  return s1.reduce((acc, cur) => (s2.includes(cur) ? acc + 1 : acc), 0);
}

console.log(solution(s1, s2));

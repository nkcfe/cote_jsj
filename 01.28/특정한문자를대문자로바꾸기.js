const my_string = "programmers";
const alp = "p";

function solution(s, t) {
  return [...s]
    .map((char) => (char === t ? char.toUpperCase() : char))
    .join("");
}

console.log(solution(my_string, alp));

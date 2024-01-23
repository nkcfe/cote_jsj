const my_string = "hello";
const n = 3;

function solution(my_string, n) {
  return my_string
    .split("")
    .map((char) => char.repeat(n))
    .join("");
}

console.log(solution(my_string, n));

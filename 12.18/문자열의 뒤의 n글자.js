const my_string = "ProgrammerS123";
const n = 11;

function solution(my_string, n) {
  return my_string.split("").reverse().splice(0, n).reverse().join("");
}

console.log(solution(my_string, n));

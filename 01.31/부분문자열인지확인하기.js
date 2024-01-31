const my_string = "banana";
const target = "ana";

function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

console.log(solution(my_string, target));

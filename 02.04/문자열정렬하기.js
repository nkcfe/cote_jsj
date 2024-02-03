const my_str = "Bcad";

function solution(my_str) {
  return my_str.toLowerCase().split("").sort().join("");
}

console.log(solution(my_str));

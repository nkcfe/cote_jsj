const num_str = "123456789";

function solution(num_str) {
  return num_str.split("").reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution(num_str));

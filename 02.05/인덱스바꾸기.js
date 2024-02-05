const my_string = "hello";
const num1 = 1;
const num2 = 2;

function solution(my_string, num1, num2) {
  const arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}

console.log(solution(my_string, num1, num2)); // "hlelo"

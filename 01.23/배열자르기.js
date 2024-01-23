const numbers = [1, 2, 3, 4, 5];
const num1 = 1;
const num2 = 3;

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

console.log(solution(numbers, num1, num2));

// 다른사람 풀이
// splice를 사용한 방법
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

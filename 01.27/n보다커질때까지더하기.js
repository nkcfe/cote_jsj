const numbers = [58, 44, 27, 10, 100];
const n = 139;

function solution(numbers, n) {
  let sum = 0;
  numbers.reverse();
  while (true) {
    sum += numbers.pop();
    if (sum > n) {
      break;
    }
  }
  return sum;
}

console.log(solution(numbers, n));

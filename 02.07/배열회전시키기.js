const numbers = [1, 2, 3];
const direction = "right";

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

console.log(solution(numbers, direction));

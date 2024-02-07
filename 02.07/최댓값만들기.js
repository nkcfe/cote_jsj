const numbers = [1, 2, 3, 4, 5];

function solution(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, cur) => acc * cur, 1);
}

console.log(solution(numbers));

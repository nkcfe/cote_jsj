const numbers = [1, 2, 3];
const k = 5;

function solution(numbers, k) {
  const index = ((k * 2 - 1) % numbers.length) - 1;
  if (index === -1) return numbers[numbers.length - 1];
  return numbers[index];
}

console.log(solution(numbers, k));

1 - 1;
2 - 3;
3 - 5;
4 - 7;
5 - 9;
6 - 11;
7 - 13;

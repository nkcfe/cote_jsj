const array = [1, 2, 7, 10, 11];

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

console.log(solution(array));

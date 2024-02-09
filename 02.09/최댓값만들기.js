const numbers = [0, -31, 24, 10, 1, 9];

function solution(numbers) {
  const sortedArray = numbers.sort((a, b) => b - a);

  const minusMax = sortedArray[0] * sortedArray[1];
  const plusMax =
    sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];
  return Math.max(minusMax, plusMax);
}

console.log(solution(numbers));

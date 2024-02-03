const array = [777, 77, 77, 1, 2, 3, 4, 5, 6, 7];

function solution(array) {
  return array
    .flatMap((num) => num.toString().split(""))
    .reduce((acc, cur) => (Number(cur) === 7 ? acc + 1 : acc), 0);
}

console.log(solution(array));

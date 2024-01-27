const arr = [1, 2, 3, 100, 99, 98];

function solution(arr) {
  return arr.map((num) =>
    num >= 50 && num % 2 === 0
      ? num / 2
      : num < 50 && num % 2 === 1
      ? num * 2
      : num
  );
}

console.log(solution(arr));

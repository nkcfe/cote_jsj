const arr = [1, 2, 3, 100, 99, 98];

function solution(arr) {
  let count = 0;
  let newArr = [...arr];

  while (true) {
    const newArr2 = [...newArr].map((num) =>
      num >= 50 && num % 2 === 0
        ? num / 2
        : num < 50 && num % 2 === 1
        ? num * 2 + 1
        : num
    );

    if (JSON.stringify(newArr) === JSON.stringify(newArr2)) break;
    count++;
    newArr = [...newArr2];
  }
  return count;
}

console.log(solution(arr));

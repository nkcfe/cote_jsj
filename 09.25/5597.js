let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = Array.from({ length: 30 }, (_, idx) => idx + 1);

input.forEach((num) => {
  const target = arr.indexOf(parseInt(num));
  console.log(target);
  arr[target] = 0;
});

const filter = arr.filter((num) => num !== 0);
console.log(filter[0]);
console.log(filter[1]);


// 1부터 30까지의 숫자 Set 생성
const numbers = new Set(Array.from({length: 30}, (_, i) => i + 1));

// 입력받은 숫자 제거
input.forEach(num => numbers.delete(num));

// Set을 배열로 변환하고 정렬
const missingNumbers = Array.from(numbers).sort((a, b) => a - b);

// 가장 작은 두 숫자 출력
console.log(missingNumbers[0]);
console.log(missingNumbers[1]);
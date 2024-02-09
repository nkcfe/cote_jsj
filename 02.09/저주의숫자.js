const n = 15;

function solution(n) {
  const arr = [];
  let number = 1;
  while (arr.length < n) {
    while (number % 3 === 0 || number.toString().includes("3")) number++;
    arr.push(number);
    number++;
  }
  return arr[arr.length - 1];
}

console.log(solution(n));

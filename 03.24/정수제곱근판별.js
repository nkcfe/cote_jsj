const n = 121;

// isInteger로 정수 판별하기
const solution = (n) => {
  const squareNum = Math.sqrt(n);
  return Number.isInteger(squareNum) ? (squareNum + 1) ** 2 : -1;
};

// 나머지 연산자로 정수 판별하기
const solution2 = (n) => {
  const squareNum = Math.sqrt(n);
  return squareNum % 1 === 0 ? Math.pow(squareNum + 1, 2) : -1;
};

console.log(solution(n));

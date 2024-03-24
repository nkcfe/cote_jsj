const left = 13;
const right = 17;

const getMineralCount = (num) => {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result.length % 2 === 0 ? true : false;
};

const solution = (left, right) => {
  return Array.from({ length: right - left + 1 })
    .map((_, i) => i + left)
    .reduce((acc, cur) => (getMineralCount(cur) ? acc + cur : acc - cur), 0);
};

// 훨씬 효율적
// 제곱근이 정수일 경우 약수의 개수는 홀수개.
const solution2 = (left, right) => {
  let answer = 0;
  for (let i = 0; i <= right - left; i++) {
    if (Math.sqrt(left + i) % 1 === 0) {
      answer -= left + i;
    } else {
      answer += left + i;
    }
  }
  return answer;
};

console.log(solution2(left, right));

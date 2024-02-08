const a = 7;
const b = 20;

// 1. a와 b의 최대공약수를 구한다.
// 2. b를 최대공약수로 나눈 값을 구한다.
// 3. 2의 배수와 5의 배수를 제거한다.
// 4. 3의 결과가 1이면 1을 반환한다.
// 5. 3의 결과가 1이 아니면 2를 반환한다.
function solution(a, b) {
  let g = 1;

  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) g = i;
  }

  b = b / g;

  console.log(b);

  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;

  return b === 1 ? 1 : 2;
}

function solution(a, b) {
  // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
  // 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
  // 아니라면 무한소수이므로 2를 리턴한다.
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}

console.log(solution(a, b)); // 27

const n = 4;

const solution = (n) => {
  const piece = 6; // 나눈 조각
  let lcm = 1; // 최소공배수 시작은 1

  // 최소공배수 구하기
  while (true) {
    if (lcm % n == 0 && lcm % piece == 0) break;
    lcm++;
  }

  // 최소공배수를 나눈 조각을 리턴
  return lcm / piece;
};

console.log(solution(n));

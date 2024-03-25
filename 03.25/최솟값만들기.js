const A = [1, 4, 2];
const B = [5, 4, 4];

// 유니코드 기준 정렬은 두 자리수 이상이면 정렬이 제대로 되지 않는다.
const solution = (A, B) => {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return Array.from({ length: A.length })
    .map((_, i) => A[i] * B[i])
    .reduce((acc, cur) => acc + cur, 0);
};

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

console.log(solution(A, B));

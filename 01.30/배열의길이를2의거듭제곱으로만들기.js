const arr = [1, 2, 3, 4, 5, 6];

function solution(arr) {
  const arrLength = arr.length; // 배열 길이
  let exponent = 0; // 2의 제곱수

  // 배열보다 큰 2의 제곱수 찾기
  while (Math.pow(2, exponent) < arrLength) exponent++;

  // 2의 제곱수 - 배열 길이 = 채워야 할 0의 개수
  let fillNum = Math.pow(2, exponent) - arrLength;

  // 0의 개수만큼 0을 채워서 반환
  const zArr = Array(fillNum).fill(0);

  // 배열과 0을 합쳐서 반환
  return arr.concat(zArr);
}

console.log(solution(arr));

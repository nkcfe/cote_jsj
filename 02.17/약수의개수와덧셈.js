const left = 13;
const right = 17;

function solution(left, right) {
  let answer = 0;
  for (let i = 0; i <= right - left; i++) {
    if (Math.sqrt(left + i) % 1 === 0) {
      answer -= left + i;
    } else {
      answer += left + i;
    }
  }
  return answer;
}

console.log(solution(left, right));

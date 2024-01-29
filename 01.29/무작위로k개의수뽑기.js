const arr = [0, 1, 1, 1, 1];
const k = 4;

function solution(arr, k) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === k) {
      break;
    }
    if (!answer.includes(arr[i])) {
      answer.push(arr[i]);
    }
  }
  while (answer.length < k) {
    answer.push(-1);
  }
  return answer;
}

console.log(solution(arr, k));

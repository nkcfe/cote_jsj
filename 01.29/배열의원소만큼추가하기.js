const arr = [5, 1, 4];

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const repeatCount = arr[i];
    for (let j = 0; j < repeatCount; j++) {
      answer.push(repeatCount);
    }
  }
  return answer;
}

console.log(solution(arr));

const arr = [1, 1, 1];

function solution(arr) {
  const firstIndex = arr.indexOf(2);
  const LastIndex = arr.lastIndexOf(2);
  const answer = arr.slice(firstIndex, LastIndex + 1);
  return answer.length > 0 ? answer : [-1];
}

console.log(solution(arr));

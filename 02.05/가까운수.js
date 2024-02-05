const array = [3, 1];
const n = 2;

function solution(array, n) {
  array.sort();
  let dif = 1000;
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i] - n) < dif) {
      dif = Math.abs(array[i] - n);
      answer = array[i];
    }
  }
  return answer;
}

console.log(solution(array, n));

const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

function solution(numlist, n) {
  const obj = {};
  for (let i = 0; i < numlist.length; i++) {
    obj[numlist[i]] = Math.abs(numlist[i] - n);
  }
  return Object.keys(obj)
    .sort((a, b) => parseInt(obj[b]) - parseInt(obj[a]))
    .reverse()
    .map((el) => parseInt(el));
}

console.log(solution(numlist, n));

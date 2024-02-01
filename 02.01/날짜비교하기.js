const date1 = [2021, 12, 28];
const date2 = [2021, 12, 29];

function solution(date1, date2) {
  return new Date(date1) < new Date(date2) ? 1 : 0;
}

console.log(solution(date1, date2));

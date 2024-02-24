const a = 5;
const b = 24;

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  return days[date.getDay()];
}

console.log(solution(a, b));

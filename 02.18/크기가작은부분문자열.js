const t = "3141592";
const p = "271";

function solution(t, p) {
  const partArr = [];
  let temp = "";
  for (let i = 0; i < t.length; i++) {
    let repeatCount = 0;
    while (repeatCount < p.length) {
      temp += t[i + repeatCount];
      repeatCount++;
    }
    if (temp.length === p.length) {
      partArr.push(temp);
      temp = "";
    }
  }
  return partArr.filter((num) => parseInt(num) <= parseInt(p)).length;
}

console.log(solution(t, p));

const intStrs = ["0123456789", "9876543210", "9999999999999"];
k = 50000;
s = 5;
l = 5;

function solution(intStrs, k, s, l) {
  const answer = [];
  intStrs.forEach((str) => {
    const arr = [...str];
    const sliceArr = arr.slice(s, s + l);
    if (Number(sliceArr.join("")) > k) {
      answer.push(Number(sliceArr.join("")));
    }
  });
  return answer;
}

console.log(solution(intStrs, k, s, l));

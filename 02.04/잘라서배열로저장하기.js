const my_str = "abc1Addfggg4556b";
const n = 6;

function solution(my_str, n) {
  const answer = [];
  const strArr = my_str.split("");
  const repeatCount = Math.ceil(strArr.length / n);
  for (let i = 0; i < repeatCount; i++) {
    answer.push(strArr.splice(0, n).join(""));
  }
  return answer;
}

console.log(solution(my_str, n));

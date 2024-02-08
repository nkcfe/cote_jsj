const s = "1 2 Z 3";

function solution(s) {
  let answer = 0;
  let prev = 0;
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      answer -= prev;
    } else {
      prev = parseInt(arr[i]);
      answer += prev;
    }
  }
  return answer;
}

function solution2(s) {
  const stack = [];

  s.split(" ").forEach((el) => {
    if (el === "Z") stack.pop();
    else stack.push(parseInt(el));
  });

  return stack.length ? stack.reduce((acc, cur) => acc + cur, 0) : 0;
}

console.log(solution2(s));

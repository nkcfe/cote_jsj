const s = "banana";

function solution(s) {
  const stack = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      result.push(i - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
    } else {
      result.push(-1);
      stack.push(s[i]);
    }
  }
  console.log(stack);
  return result;
}

console.log(solution(s)); // 3

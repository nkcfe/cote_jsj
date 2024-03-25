const s = "(())()";

const solution = (s) => {
  const arr = s.split("");
  const stack = [];

  while (arr.length > 0) {
    const front = arr.shift();

    if (stack.length === 0 && front === ")") {
      return false;
    }
    if (stack[stack.length - 1] === "(" && front === ")") {
      stack.pop();
    }
    if (front === "(") {
      stack.push(front);
    }
  }
  return stack.length === 0 ? true : false;
};

const solution2 = (s) => {
  let openCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++;
    } else {
      if (openCount === 0) {
        return false;
      }
      openCount--;
    }
  }

  return openCount === 0;
};

console.log(solution2(s));

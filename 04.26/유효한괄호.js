const isValid = (s) => {
  const stack = [];
  const dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (Object.values(dict).includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === dict[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const s = "{[]}";

console.log(isValid(s));

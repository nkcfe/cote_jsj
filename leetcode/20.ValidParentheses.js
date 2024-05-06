const isValid = (s) => {
  const dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in dict)) {
      stack.push(s[i]);
      continue;
    }

    if (dict[s[i]] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    } else {
      return false;
    }
  }

  return stack.length !== 0 ? false : true;
};

const s = "(])";
console.log(isValid(s));

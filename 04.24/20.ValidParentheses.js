// const isValid = (s) => {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     const openTag = ["(", "{", "["];

//     if (openTag.includes(s[i])) {
//       stack.push(s[i]);
//     } else {
//       if (stack.length === 0) return false;

//       if (stack[stack.length - 1] === "[" && s[i] === "]") {
//         stack.pop();
//       } else if (stack[stack.length - 1] === "{" && s[i] === "}") {
//         stack.pop();
//       } else if (stack[stack.length - 1] === "(" && s[i] === ")") {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length > 0 ? false : true;
// };

const isValid = (s) => {
  let map = { "}": "{", "]": "[", ")": "(" };
  let temp = [];

  for (i in s) {
    if (s[i] in map) {
      if (temp.length > 0 && temp[temp.length - 1] === map[s[i]]) {
        temp.pop();
      } else {
        return false;
      }
    } else {
      temp.push(s[i]);
    }
  }

  return temp.length === 0;
};

const s = "(])";
console.log(isValid(s));

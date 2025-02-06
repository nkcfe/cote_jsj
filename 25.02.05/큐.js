function createStack() {
  const stack = [];

  function push(item) {
    stack.push(item);
  }

  function pop() {
    if (stack.length === 0) return -1;
    return stack.pop();
  }

  function size() {
    return stack.length;
  }

  function empty() {
    return stack.length === 0 ? 1 : 0;
  }

  function top() {
    if (stack.length === 0) return -1;
    return stack[stack.length - 1];
  }

  return { push, pop, size, empty, top };
}

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const stack = createStack();
const result = [];

for (let i = 1; i <= n; i++) {
  const [command, num] = input[i].split(" ");

  if (command === "push") {
    stack.push(Number(num));
    continue;
  }
  result.push(stack[command]());
}

// executeArr.forEach((execute) => {
//   const [command, number] = execute.split(" ");

//   if (command === "push") {
//     stack.push(Number(number));
//   } else {
//     console.log(stack[command]());
//   }
// });

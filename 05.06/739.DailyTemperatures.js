// const dailyTemperatures = (temperatures) => {
//   const answer = Array.from({ length: temperatures.length }).fill(0);
//   const stack = [temperatures[0]];

//   for (let i = 1; i < temperatures.length; i++) {
//     const current = temperatures[i];
//     while (stack[stack.length - 1] < current) {
//       const idx = temperatures.indexOf(stack.pop());
//       answer[idx] = i - idx;
//       temperatures[idx] = 0;
//     }
//     stack.push(current);
//   }

//   return answer;
// };

const dailyTemperatures = (temperatures) => {
  const answer = Array.from({ length: temperatures.length }).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const cur = temperatures[i];
    while (stack && cur > temperatures[stack[stack.length - 1]]) {
      const last = stack.pop();
      answer[last] = i - last;
    }
    stack.push(i);
  }

  return answer;
};

const temperatures = [30, 60, 90];
console.log(dailyTemperatures(temperatures));

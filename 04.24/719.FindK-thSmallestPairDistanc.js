const dailyTemperatures = (temperatures) => {
  // temperatures길이의 0으로 채운 배열 생성
  const answer = Array.from({ length: temperatures.length }).fill(0);

  // stack 생성
  const stack = [];

  // temperatures loop
  for (let i = 0; i < temperatures.length; i++) {
    // stack에 값이 있고, 현재 온도가 스택의 온도보다 높을 경우
    while (stack && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      //
      const last = stack.pop();
      answer[last] = i - last;
    }
    stack.push(i);
  }
  return answer;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));

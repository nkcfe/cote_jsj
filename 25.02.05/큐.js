function createQueue() {
  const queue = [];

  function push(item) {
    queue.push(item);
  }

  function pop() {
    if (queue.length === 0) return -1;
    return queue.shift(); // 스택의 pop()과 다르게 shift()를 사용하여 첫 번째 요소를 제거
  }

  function size() {
    return queue.length;
  }

  function empty() {
    return queue.length === 0 ? 1 : 0;
  }

  function front() {
    // top 대신 front로 변경
    if (queue.length === 0) return -1;
    return queue[0]; // 첫 번째 요소 반환
  }

  function back() {
    // 큐의 마지막 요소를 확인하는 함수 추가
    if (queue.length === 0) return -1;
    return queue[queue.length - 1];
  }

  return { push, pop, size, empty, front, back };
}

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const queue = createQueue(); // stack을 queue로 변경
const result = [];

for (let i = 1; i <= n; i++) {
  const [command, num] = input[i].split(" ");

  if (command === "push") {
    queue.push(Number(num));
    continue;
  }
  result.push(queue[command]());
}

console.log(result.join("\n")); // 결과 출력 추가

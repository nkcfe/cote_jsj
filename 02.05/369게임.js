const order = 303;

function solution(order) {
  return [...String(order)].filter((v) => Number(v) % 3 === 0 && v !== "0")
    .length;
}

console.log(solution(order));

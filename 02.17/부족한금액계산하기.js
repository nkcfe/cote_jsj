const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += price * (i + 1);
  }
  return total > money ? total - money : 0;
}

console.log(solution(price, money, count));

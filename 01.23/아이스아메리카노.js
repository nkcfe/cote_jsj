const money = 15000;

const solution = (money) => {
  const price = 5500;
  let count = 0;
  let exchange = money;
  while (exchange >= price) {
    count += 1;
    exchange -= price;
  }
  return [count, exchange];
};

console.log(solution(money));

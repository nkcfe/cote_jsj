const price = 3;
const money = 20;
const count = 4;

// 등차수열
const solution = (price, money, count) => {
  const totalPrice = (price * count * (count + 1)) / 2;
  return totalPrice > money ? totalPrice - money : 0;
};

console.log(solution(price, money, count));

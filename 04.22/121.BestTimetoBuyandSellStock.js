const maxProfit = (prices) => {
  let profit = 0;
  let minPrice = 9999999999;
  for (let price in prices) {
    minPrice = Math.min(minPrice, prices[price]);
    profit = Math.max(profit, prices[price] - minPrice);
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

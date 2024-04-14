const money = 1000
const price = 380
let change = money - price

const coins = [500, 100, 50, 10, 5, 1]
let count = 0

for (let coin of coins) {
  count += Math.floor(change / coin)
  change %= coin
}

console.log(count)

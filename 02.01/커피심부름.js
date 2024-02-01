const order = ["cafelatte", "americanoice", "hotcafelatte", "anything"];

function solution(order) {
  const menu = { americano: 4500, cafelatte: 5000 };
  return order.reduce((acc, cur) => {
    if (cur.includes("americano") | cur.includes("anything")) {
      acc += menu.americano;
    } else if (cur.includes("cafelatte")) {
      acc += menu.cafelatte;
    }
    return acc;
  }, 0);
}

console.log(solution(order));

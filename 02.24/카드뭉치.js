const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

function solution(cards1, cards2, goal) {
  let flag = true;
  let index = 0;
  while (index < goal.length) {
    const card1 = [...cards1].shift();
    const card2 = [...cards2].shift();
    if (card1 === goal[index]) {
      cards1.shift();
    } else if (card2 === goal[index]) {
      cards2.shift();
    } else {
      flag = false;
      break;
    }
    index++;
  }

  return flag ? "Yes" : "No";
}

console.log(solution(cards1, cards2, goal));

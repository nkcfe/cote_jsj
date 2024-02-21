const food = [1, 3, 4, 6];

function solution(food) {
  const answer = [];
  for (let i = 0; i < food.length; i++) {
    let count = Math.floor(food[i] / 2);

    while (count > 0) {
      answer.push(i);
      count--;
    }
  }
  const reverse = [...answer, 0].reverse();
  return answer.concat(reverse).join("");
}

console.log(solution(food));

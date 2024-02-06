const hp = 7;

function solution(hp) {
  let count = 0;
  if (hp >= 5) {
    count += Math.floor(hp / 5);
    hp = hp % 5;
  }
  if (hp >= 3) {
    count += Math.floor(hp / 3);
    hp = hp % 3;
  }
  while (hp > 0) {
    count += 1;
    hp -= 1;
  }

  return count;
}

console.log(solution(hp));

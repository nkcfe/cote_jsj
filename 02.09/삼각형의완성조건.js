const sides = [11, 7];

function solution(sides) {
  const overBoundary = sides.reduce((acc, cur) => acc + cur, 0);
  sides = sides.sort((a, b) => a - b);

  const count = Array.from({ length: sides[1] }, (_, i) => i + 1).filter(
    (el) => el + sides[0] > sides[1]
  );

  const count1 = Array.from(
    { length: overBoundary - sides[1] - 1 },
    (_, i) => sides[1] + i + 1
  );

  return count1.length + count.length;
}

console.log(solution(sides));

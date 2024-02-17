const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

function solution(numbers) {
  const notIncludes = [];

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      notIncludes.push(i);
    }
  }
  return notIncludes.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(numbers));

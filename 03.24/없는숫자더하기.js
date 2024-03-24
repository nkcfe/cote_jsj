const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

const solution = (numbers) => {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }
  return result;
};

console.log(solution(numbers));

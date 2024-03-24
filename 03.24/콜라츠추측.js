const n = 6;

const solution = (n) => {
  let count = 0;

  while (true) {
    if (n === 1 || count === 500) break;

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    count++;
  }

  return count < 500 ? count : -1;
};

return solution(n);

const n = 6;

function solution(n) {
  let number = n;
  let count = 0;
  
  while (number !== 1 || count < 500) {
    if (number === 1) {
      break;
    }
    if (number % 2 === 0) {
      number = number / 2;
      count++;
    } else {
      number = number * 3 + 1;
      count++;
    }
    
  }
  return count >= 500 ? -1 : count;
}

console.log(solution(n));

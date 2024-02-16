const x = 10;

function solution(x) {
  const hashad = [...x.toString()].reduce((acc, cur) => acc + parseInt(cur), 0);
  return x % hashad === 0;
}

console.log(solution(x));

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  const fail = {};
  for (let i = 1; i <= N; i++) {
    const challenger = stages.filter((num) => num >= i).length;
    const failure = stages.filter((num) => num === i).length;
    fail[i] = failure / challenger;
  }
  return Object.keys(fail)
    .sort((a, b) => fail[b] - fail[a])
    .map((num) => Number(num));
}

function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

console.log(solution(N, stages));

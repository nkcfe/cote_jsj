const array = [10, 2];
const commands = [[1, 2, 1]];

function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0];
    const end = commands[i][1];
    const index = commands[i][2];
    const slicedSorted = array.slice(start - 1, end).sort((a, b) => a - b);

    answer.push(slicedSorted[index - 1]);
  }
  return answer;
}

console.log(solution(array, commands));

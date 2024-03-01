const s = "abracadabra";

function solution(s) {
  const answer = [];
  let temp = [];

  while (s.length > 0) {
    const x = s[0];

    let countX = 0, // countX를 0으로 초기화
      countY = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === x) {
        countX++;
        temp.push(s[i]);
      } else {
        countY++;
        temp.push(s[i]);
      }

      if (countX > 0 && countX === countY) {
        answer.push(temp.join(""));

        temp = [];
        break;
      }
    }
    s = s.slice(countX + countY);
    if (countX !== countY) {
      answer.push(temp.join(""));
    }
  }
  return answer.length;
}

function solution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for(let i = 0; i < s.length; i++) {
      if(count === 0) {
          answer++;
          current = s[i]
          count = 1
      } else {
          if(current !== s[i]) count--;
          else count++;
      }
  }

  return answer;
}

console.log(solution(s));

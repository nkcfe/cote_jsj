const strArr = ["a", "bc", "d", "efg", "hi"];

function solution(strArr) {
  let answer = {};
  strArr.forEach((str) => {
    if (answer[str.length]) {
      answer[str.length].push(str);
    } else {
      answer[str.length] = [str];
    }
  });
  let count = 0;
  for (let key in answer) {
    if (answer[key].length > count) {
      count = answer[key].length;
    }
  }
  return count;
}

console.log(solution(strArr));

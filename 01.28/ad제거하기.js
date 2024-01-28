const strArr = ["and", "notad", "abcd"];

function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

console.log(solution(strArr));

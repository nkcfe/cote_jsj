const my_string = "BCBdbe";
const letter = "B";

const solution = (my_string, letter) => {
  const array_string = [...my_string];
  while (true) {
    const findIndex = array_string.findIndex((char) => char === letter);
    if (findIndex === -1) break;
    array_string.splice(findIndex, 1);
  }
  return array_string.join("");
};

console.log(solution(my_string, letter));

// 다른사람 풀이
// 뺄 문자를 기준으로 분리한 후 다시 합치는 방법
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
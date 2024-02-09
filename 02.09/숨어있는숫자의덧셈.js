const my_string = "aAb1B2cC34oOp1";

function solution(my_string) {
  const answer = [];
  let numbers = [];
  [...my_string].forEach((el) => {
    if (!isNaN(parseInt(el))) {
      numbers.push(el);
    } else if (numbers.length) {
      answer.push(numbers.join(""));
      numbers = [];
    }
  });

  if (numbers.length) answer.push(numbers.join(""));
  return answer.reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(my_string));

const myStr = "baconlettucetomato";

function solution(myStr) {
  let temp = "";
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] !== "a" && myStr[i] !== "b" && myStr[i] !== "c") {
      temp += myStr[i];
    } else {
      temp += " ";
    }
  }
  const answer = temp.split(" ").filter((el) => el !== "");

  return answer.length > 0 ? answer : ["EMPTY"];
}

console.log(solution(myStr));

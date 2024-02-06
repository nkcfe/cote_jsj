const rsp = "2";

function solution(rsp) {
  const answer = [...rsp].map((v) => {
    if (v === "0") {
      return "5";
    } else if (v === "2") {
      return "0";
    } else {
      return "2";
    }
  });
  return answer.join("");
}

console.log(solution(rsp));

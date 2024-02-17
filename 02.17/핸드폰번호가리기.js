const phoneNumber = "01033334444";

// function solution(phone_number) {
//   // \d : 숫자 (0 ~ 9)
//   // ?= : 긍정형 전방 탐색
//   // \d{4} : 숫자가 4개
//   // g : 전역 검색
//   return phone_number.replace(/\d(?=\d{4})/g, "*");
// }

function solution(phone_number) {
  const preNumber = "*".repeat(phone_number.slice(0, -4).length);
  const lastFour = phone_number.slice(-4);
  return preNumber + lastFour;
}

console.log(solution(phoneNumber));

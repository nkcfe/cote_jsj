const phone_number = "01033334444";

const solution = (phone_number) => {
  const hideNumber = "*".repeat(phone_number.slice(0, -4).length);
  const lastFourNumber = phone_number.slice(-4);
  return hideNumber + lastFourNumber;
};

console.log(solution(phone_number));

const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const studentNumberArr = input
  .slice(1)
  .filter((_, index) => index % 2 !== 0)
  .map((line) => line.split(" "));

const studentMap = new Map();

studentNumberArr.forEach((line) => {
  line.forEach((number) => {
    if (studentMap.has(number)) {
      studentMap.set(number, studentMap.get(number) + 1);
    } else {
      studentMap.set(number, 1);
    }
  });
});

const result = Array.from(studentMap.values()).filter(
  (count) => count >= m
).length;
console.log(result);

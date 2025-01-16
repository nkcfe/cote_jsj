const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [N, _M] = input[0].split(" ").map(Number);

for (let i = 1; i <= N; i++) {
  const line = input[i].trim();
  const reversed = [...line].reverse().join("");
  console.log(reversed);
}

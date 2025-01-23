const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const music = input.slice(1, n + 1);
const musicStore = music.reduce((acc, cur) => {
  const [titleCount, title, ...rest] = cur.split(" ");
  const sound = rest.slice(0, 3).join("");
  acc[title] = sound;
  return acc;
}, {});

const questions = input
  .slice(n + 1)
  .map((question) => question.split(" ").join(""));

return questions.forEach((question) => {
  const findMusic = Object.values(musicStore).filter(
    (music) => music === question
  );
  if (findMusic.length === 0) return console.log("!");
  if (findMusic.length > 1) return console.log("?");

  const answer = Object.entries(musicStore).find(
    ([key, value]) => value === findMusic[0]
  )[0];
  console.log(answer);
});

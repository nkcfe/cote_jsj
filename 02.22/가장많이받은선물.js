const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

function solution(friends, gifts) {
  const grid = Array.from({ length: friends.length }, () =>
    Array.from({ length: friends.length }, () => 0)
  );
  const score = {};
  const answer = {};
  friends.forEach((friend) => (score[friend] = 0));
  friends.forEach((friend) => (answer[friend] = 0));

  gifts.forEach((gift) => {
    const [giver, receiver] = gift.split(" ");
    score[giver] += 1;
    score[receiver] -= 1;
    const giverIndex = friends.indexOf(giver);
    const receiverIndex = friends.indexOf(receiver);
    grid[giverIndex][receiverIndex]++;
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (i === j) continue;

      if (grid[i][j] > grid[j][i]) {
        answer[friends[i]] += 1;
      } else if (grid[i][j] === grid[j][i]) {
        if (score[friends[i]] > score[friends[j]]) {
          answer[friends[i]] += 1;
        }
      }
    }
  }
  const Max = Math.max(...Object.values(answer));

  return Max;
}

console.log(solution(friends, gifts));

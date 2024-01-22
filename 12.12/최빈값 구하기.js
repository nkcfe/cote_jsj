const array = [1, 2, 3, 3, 3, 4];

function solution(array) {
  const frequencyMap = {};

  // 배열의 각 요소의 빈도수를 계산합니다.
  array.forEach((element) => {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  });
  for (let i=0; )
  return frequencyMap;
}

console.log(solution(array));

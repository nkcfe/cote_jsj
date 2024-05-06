const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagram = (strs) => {
  // 객체 생성
  const anagramDict = {};

  // strs loop
  for (let i in strs) {
    // 정렬
    const sortedStr = strs[i].split("").sort().join("");
    // dict에 있을 경우 word 추가
    if (sortedStr in anagramDict) {
      anagramDict[sortedStr].push(strs[i]);
      // 없을경우 word가 포함된 list 추가
    } else {
      anagramDict[sortedStr] = [strs[i]];
    }
  }
  // 객체의 value만 출력
  return Object.values(anagramDict);
};

console.log(groupAnagram(strs));

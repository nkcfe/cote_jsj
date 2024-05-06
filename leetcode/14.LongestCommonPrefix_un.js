const strs = ["flower", "flow", "flight"];
// prefix 접두사는 연속된 문자열이나, 해당 풀이는 prefix 풀이법이 아니다.
// const longestCommonPrefix = (strs) => {
//   const dict = {};
//   for (let str in strs) {
//     const setStr = new Set([...strs[str]]);

//     [...setStr].forEach((val) => {
//       if (dict[val]) {
//         dict[val] += 1;
//       } else {
//         dict[val] = 1;
//       }
//     });
//   }
//   console.log(dict);
//   return Object.keys(dict)
//     .filter((val) => dict[val] === strs.length)
//     .join("");
// };

const longestCommonPrefix = (strs) => {
    // 첫번째 문장과 비교
    return [...strs[0]]
    .filter((char, index) => {
      // 두번째 문장부터 반복문
      for (let i = 1; i < strs.length; i++) {
        // 첫번째 문장에서 연속된 문자열이 다음 문장들과 일치하지 않으면 제외
        if (!strs[i].startsWith(strs[0].substring(0, index + 1))) {
          return false;
        }
      }
      return true;
    })
    .join("");
};

console.log(longestCommonPrefix(strs));

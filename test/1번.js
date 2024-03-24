function getZarray(str) {
  let Z = Array(str.length).fill(0);
  let L = 0,
    R = 0;
  for (let i = 1; i < str.length; i++) {
    if (i > R) {
      L = R = i;
      while (R < str.length && str[R - L] === str[R]) R++;
      Z[i] = R - L;
      R--;
    } else {
      let k = i - L;
      if (Z[k] < R - i + 1) Z[i] = Z[k];
      else {
        L = i;
        while (R < str.length && str[R - L] === str[R]) R++;
        Z[i] = R - L;
        R--;
      }
    }
  }
  return Z;
}

function solution(s) {
  let reverse = s.split("").reverse().join("");
  let concat = reverse + "#" + s;
  let Z = getZarray(concat);
  let maxZ = Math.max(...Z);
  return s.length * 2 - maxZ;
}

const plain = "aezaws";
console.log(solution(plain)); // 10

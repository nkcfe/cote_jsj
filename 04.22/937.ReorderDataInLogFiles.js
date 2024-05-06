const reorderLogFiles = (logs) => {
  const letLogs = [];
  const digLogs = [];
  logs.forEach((value) => {
    const identity = value.split(" ")[1][0].charCodeAt(0);
    if (identity >= 48 && identity <= 57) {
      digLogs.push(value);
    } else {
      letLogs.push(value);
    }
  });
  letLogs.sort((a, b) => {
    const aRest = a.slice(a.indexOf(" ") + 1);
    const bRest = b.slice(b.indexOf(" ") + 1);
    const aId = a.slice(0, a.indexOf(" "));ㅠ
    const bId = b.slice(0, b.indexOf(" "));
    const compareRest = aRest.localeCompare(bRest);
    if (compareRest !== 0) {
      return compareRest;
    } else {
      return aId.localeCompare(bId);
    }
  });

  return letLogs.concat(digLogs);
};

const logs = [
  "a1 9 2 3 1",
  "g1 act car",
  "zo4 4 7",
  "ab1 off key dog",
  "a8 act Zoo",
  "a2 act car",
];

console.log(reorderLogFiles(logs));

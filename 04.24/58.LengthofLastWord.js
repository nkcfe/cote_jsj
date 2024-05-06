const lengthOfLastWord = (s) => {
  const trimArray = s.split(" ").filter((val) => val !== "");
  return trimArray[trimArray.length - 1].length;
};

const s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));

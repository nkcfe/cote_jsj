const input = require("fs").readFileSync(0).toString().trim().split("\n");

const allIngredients = input[1].split(" ");
const usedIngredients = input[2].split(" ");

const unUsedIngredients = allIngredients.filter((ingredient) => {
  return !usedIngredients.includes(ingredient);
});

console.log(unUsedIngredients[0]);

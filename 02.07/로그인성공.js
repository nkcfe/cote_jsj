const id_pw = ["abc04", "345"];
const db = [
  ["abc04", "335"],
  ["abc03", "345"],
];

// function solution(id_pw, db) {
//   const [id, pw] = id_pw;
//   let result = "";
//   for (let i = 0; i < db.length; i++) {
//     const [db_id, db_pw] = db[i];
//     if (db_id === id && db_pw === pw) {
//       result = "login";
//       break;
//     } else if (db_id === id) {
//       result = "wrong pw";
//       break;
//     } else {
//       result = "fail";
//     }
//   }
//   return result;
// }

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}

console.log(solution(id_pw, db));

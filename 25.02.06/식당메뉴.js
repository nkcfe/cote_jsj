const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const queue = [];
const type1 = [];
const type2 = [];
const type3 = [];

// 입력을 미리 한번에 처리
const commands = input.slice(1).map(line => line.split(" ").map(Number));

for (const [type, ...args] of commands) {
    if (type === 1) {
        const [student, menu] = args;
        queue.push([student, menu]);
    } else {
        const [menu] = args;
        const [student, favoriteMenu] = queue.shift();
        
        if (favoriteMenu === menu) {
            type1.push(student);
        } else {
            type2.push(student);
        }
    }
}

// 남은 학생들 처리
if (queue.length > 0) {
    for (const [student] of queue) {
        type3.push(student);
    }
}

// 정렬 및 출력
console.log(type1.length ? type1.sort((a,b) => a-b).join(" ") : "None");
console.log(type2.length ? type2.sort((a,b) => a-b).join(" ") : "None");
console.log(type3.length ? type3.sort((a,b) => a-b).join(" ") : "None");
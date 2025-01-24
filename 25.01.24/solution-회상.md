# TIL: 배열 필터링을 통한 요소 찾기
## 코드 설명
1. 일단은 학번만 가진 배열을 생성한다. 수강한 학생의 숫자는 몇명인지 나타내는 줄을 걸러보자.
```javascript
const studentNumberArr = input
.slice(1)
.filter((_, index) => index % 2 !== 0)
.map((line) => line.split(" "));
```

2. 학번이 누적 몇번 수강했는지 알기 위해 Map을 사용하고, 수강한 횟수를 누적 합산한다.
```javascript
const studentMap = new Map();

studentNumberArr.forEach((line) => {
  line.forEach((number) => {
    if (studentMap.has(number)) {
      studentMap.set(number, studentMap.get(number) + 1);
    } else {
      studentMap.set(number, 1);
    }
  });
});
```

3. 결과값을 배열로 변환한 뒤 m개 이상 수강한 학생의 수를 출력한다.
```javascript
const result = Array.from(studentMap.values()).filter(
  (count) => count >= m
).length;
console.log(result);
```

## 학습 내용
1. Map의 사용법 학습.
- 데이터 추가
```javascript
const map = new Map();

// 데이터 추가
map.set(key, value);  // key-value 쌍 추가

// 체이닝 가능
map.set(key1, value1)
   .set(key2, value2);
```

- 데이터 조회
```javascript
// 값 가져오기
map.get(key);  // key에 해당하는 value 반환, 없으면 undefined

// key 존재 여부 확인
map.has(key);  // boolean 반환

// Map 크기 확인
map.size;  // 요소 개수 반환
```

- 데이터 삭제
```javascript
// 특정 key-value 쌍 삭제
map.delete(key);  // 성공하면 true, 실패하면 false 반환

// 모든 요소 삭제
map.clear();
```

- 순회 메소드
```javascript
// keys(): key들의 Iterator 반환
for (const key of map.keys()) {
    console.log(key);
}

// values(): value들의 Iterator 반환
for (const value of map.values()) {
    console.log(value);
}

// entries(): [key, value] 쌍의 Iterator 반환
for (const [key, value] of map.entries()) {
    console.log(key, value);
}

// forEach(): 각 요소에 대해 콜백 함수 실행
map.forEach((value, key, map) => {
    console.log(key, value);
});
```

- 변환 메소드
```javascript
// Map을 배열로 변환
const keyArray = Array.from(map.keys());
const valueArray = Array.from(map.values());
const entriesArray = Array.from(map.entries());

// 객체로 변환
const obj = Object.fromEntries(map);

// 배열에서 Map 생성
const arr = [['key1', 'value1'], ['key2', 'value2']];
const mapFromArray = new Map(arr);
```


- 주요 특징
```javascript
// key는 어떤 타입이든 가능
const map = new Map();
map.set('string', 1);         // 문자열
map.set(42, 2);              // 숫자
map.set(true, 3);            // 불리언
map.set({x: 10}, 4);         // 객체
map.set(() => {}, 5);        // 함수

// key의 유일성
map.set('key', 1);
map.set('key', 2);  // 같은 key의 경우 값이 덮어씌워짐
```
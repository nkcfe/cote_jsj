# TIL: 배열 필터링을 통한 요소 찾기
## 코드 설명
1. 노래 제목과 음으로 map을 만든다.
```javascript
const music = input.slice(1, n + 1);
const musicStore = music.reduce((acc, cur) => {
  const [titleCount, title, ...rest] = cur.split(" ");
  const sound = rest.slice(0, 3).join("");
  acc[title] = sound;
  return acc;
}, {});
```
2. 문제들을 3음절로 정리한다.
```javascript
const questions = input
  .slice(n + 1)
  .map((question) => question.split(" ").join(""));
```
3. 문제들을 순회하면서 아래 로직을 점검한다.
   - 찾은 노래가 없을 경우 '!' 출력
   - 찾은 노래가 두개 이상일 경우 '?' 출력
   - 정확히 찾은 노래가 있을경우 제목을 출력
```javascript
   return questions.forEach((question) => {
  const findMusic = Object.values(musicStore).filter(
    (music) => music === question
  );
  if (findMusic.length === 0) return console.log("!");
  if (findMusic.length > 1) return console.log("?");

  const answer = Object.entries(musicStore).find(
    ([key, value]) => value === findMusic[0]
  )[0];
  console.log(answer);
})
```

## 학습 내용
1. `Object.entries` 메서드를 사용하여 객체의 값으로 키를 찾는 로직을 학습했습니다.

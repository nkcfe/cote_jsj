## 문재열 내 p와 y의 개수
### 접근 방식
1. 문자열을 toLowerCase()를 사용해 소문자로 변경한다.
2. 문자열을 스프레드 연산자를 사용해 이터레이블하게 만든다.
3. reduce를 사용하여 p와 y의 누적 개수를 구한다.
4. p와 y의 개수가 같을 경우 true를 반환, 다를 경우 false를 반환한다.


### 배운 점
- 문자열 처리 방법의 다양성
- for 루프를 사용한 기본적인 반복 처리
- reduce를 활용한 함수형 프로그래밍 접근법
- 문자열을 배열로 변환하는 spread operator ([...s]) 활용
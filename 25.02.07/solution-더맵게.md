
## 📝 배운 점
1. 힙 자료구조의 중요성
   - 최소/최대값을 빠르게 찾아야 하는 문제에서 유용
   - 우선순위 큐 구현에 적합

2. JavaScript에서 힙 구현하기
   - 배열을 사용한 이진 트리 표현
   - 부모-자식 관계: parent = Math.floor((index-1)/2)
   - 자식 노드: left = 2*index + 1, right = 2*index + 2

3. 효율성 고려의 중요성
   - Array.sort()나 Math.min() 사용 시 O(n log n) 또는 O(n)
   - 힙 사용 시 삽입/삭제가 O(log n)으로 개선

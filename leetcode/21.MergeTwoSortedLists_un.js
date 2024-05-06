class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      return (this.head = newNode);
    }

    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;
  }
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

for (let i = 0; i < list1.length; i++) {
  linkedList1.append(list1[i]);
  linkedList2.append(list2[i]);
}

// 재귀 방식 풀이
// const mergeTwoLists = (list1, list2) => {
//   // 아래 조건일 경우 list1 list2 스왑
//   // 1. list1이 없을 때.
//   // 2. list2가 남아있고, list1이 더 클 때.
//   if (!list1 || (list2 && list1.val > list2.val)) {
//     [list1, list2] = [list2, list1];
//   }

//   // list1이 있을 경우
//   if (list1) {
//     //lisț1 next부터 재귀 작동.
//     list1.next = mergeTwoLists2(list1.next, list2);
//   }

//   return list1;
// };

// 반복문 풀이
const mergeTwoLists = (list1, list2) => {
  // 새로운 연결리스트 생성
  let mergedLinkedList = { val: -1, next: null };
  // 복제
  let current = mergedLinkedList;

  // list1과 list2가 있을때까지 반복
  while (list1 && list2) {
    // list1이 list2보다 클 경우 current.next에 list2 붙히기
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
      // list2이 list1보다 클 경우 current.next에 list1 붙히기
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    // current 이동
    current = current.next;
  }
  // 남은 부분 붙히기
  current.next = list1 || list2;
  return mergedLinkedList.next;
};

console.log(mergeTwoLists(linkedList1.head, linkedList2.head));

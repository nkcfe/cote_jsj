class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 연결 리스트에 새로운 노드를 추가하는 메서드
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

for (let i = 0; i < list1.length; i++) {
  linkedList1.append(list1[i]);
}

for (let i = 0; i < list2.length; i++) {
  linkedList2.append(list2[i]);
}

// const mergeTwoLists = (l1, l2) => {
//   let mergedLinkedList = { val: -1, next: null };
//   let current = mergedLinkedList;
//   while (l1 && l2) {
//     if (l1.val > l2.val) {
//       current.next = l2;
//       l2 = l2.next;
//     } else {
//       current.next = l1;
//       l1 = l1.next;
//     }
//     current = current.next;
//   }
//   current.next = l1 || l2;

//   return mergedLinkedList.next;
// };

const mergeTwoLists2 = (l1, l2) => {
  if (!l1 || (l2 && l1.val > l2.val)) {
    [l1, l2] = [l2, l1];
  }

  if (l1) {
    l1.next = mergeTwoLists2(l1.next, l2);
  }

  return l1;
};

console.log(mergeTwoLists2(linkedList1.head, linkedList2.head));

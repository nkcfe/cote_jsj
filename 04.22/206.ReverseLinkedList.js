class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      return (this.head = newNode);
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const li = [1, 2, 3, 4, 5];

const linkedList = new LinkedList();

for (let i = 0; i < li.length; i++) {
  linkedList.append(li[i]);
}

const reverseList = (head) => {
  const reverse = (node, prev = null) => {
    // 종료조건
    if (!node) return prev;

    // 2 345 // 3 45 / 4 5 // 5 // null
    let next = node.next;

    // node: 1 // node: 2,1 // node: 3, 2, 1 // node: 4, 3, 2, 1 // node: 5,4,3,2,1 //
    node.next = prev;

    return reverse(next, node);
  };

  return reverse(head);
};

const reverseList2 = (head) => {
  let node = head;
  let prev = null;
  while (true) {
    if (node === null) break;

    let next = node.next; // 다음 값

    node.next = prev; // 원본 변경

    prev = node; // 이전값 저장
    node = next; // 
  }
  return prev;
};

console.log(reverseList2(linkedList.head));

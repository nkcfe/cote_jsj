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

  // 연결 리스트의 맨 앞에 새로운 노드를 추가하는 메서드
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 연결 리스트에서 특정 데이터를 가진 노드를 삭제하는 메서드
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // 연결 리스트를 출력하는 메서드
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
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

linkedList1.printList();

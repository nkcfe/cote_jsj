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
}
const list = [1, 2];
const linkedList = new LinkedList();
for (let i = 0; i < list.length; i++) {
  linkedList.append(list[i]);
}

const isPalidrome = (head) => {
  const li = [];

  if (!head) return true;

  while (head) {
    li.push(head.value);
    head = head.next;
  }

  while (li.length > 1) {
    const front = li.shift();
    const back = li.pop();
    if (front !== back) {
      return false;
    }
  }
  return true;
};

console.log(isPalidrome(linkedList.head));

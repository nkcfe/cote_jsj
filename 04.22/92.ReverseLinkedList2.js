class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new ListNode(val);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
}

const head = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();

for (let i = 0; i < head.length; i++) {
  linkedList.append(head[i]);
}

const left = 2,
  right = 4;

const reverseBetween = (head, left, right) => {
  while (head) {
    if (!head || right === left) {
      return head;
    }

    let root = ListNode();
    let start = root;

    root.next = head;

    for (let i; i < right - 1; i++) {
      start = start.next;
    }
    let end = start.next;

    for (let i = 0; i < left - right; i++) {
      let temp = start.next;
      start.next = end.next;
      end.next = end.next.next;
      start.next.next = temp;
    }
    return root.next;
  }
};

console.log(reverseBetween(linkedList.head, left, right));

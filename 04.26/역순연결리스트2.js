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
      return (this.head = newNode);
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
  }
}

const list = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();

for (let i = 0; i < list.length; i++) {
  linkedList.append(list[i]);
}

var reverseBetween = function (head, left, right) {
  let root = ListNode();
  let start = root;

  root.next = head;

  for (let i = 0; i < left - 1; i++) {
    start = start.next;
  }
  let end = start.next;

  for (let i = 0; i < m - n; i++) {
    let temp = start.next;
    [start.next, end.next] = [end.next, end.next.next];
    start.next.next = temp;
  }
  return root.next;
};

const head = [1, 2, 3, 4, 5];
const left = 2;
const right = 4;

console.log(reverseBetween(head, left, right));

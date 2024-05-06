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

    if (!this.head) {
      return (this.head = newNode);
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    node.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();

for (let i = 0; i < l1.length; i++) {
  linkedList1.append(l1[i]);
  linkedList2.append(l2[i]);
}

const mergeTwo = (l1, l2) => {
  if (!l1 || (l2 && l1.val > l2.val)) {
    [l1, l2] = [l2, l1];
    console.log(l1);
  }

  if (l1) {
    l1.next = mergeTwo(l1.next, l2);
  }

  return l1;
};

console.log(mergeTwo(linkedList1.head, linkedList2.head));

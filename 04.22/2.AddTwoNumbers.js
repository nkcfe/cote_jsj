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

function addTwoNumber(l1, l2) {
  const reverse = (head) => {
    let node = head;
    let prev = null;

    while (node) {
      let next = node.next;
      node.next = prev;
      [prev, node] = [node, next];
    }
    return prev;
  };

  const toList = (head) => {
    const li = [];
    while (head) {
      li.push(head.val);
      head = head.next;
    }
    return li;
  };

  const toLinkedList = (list) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let i = 0; i < list.length; i++) {
      current.next = new ListNode(list[i]);
      current = current.next;
    }
    return dummyHead.next;
  };

  const addTwoNumber = (l1, l2) => {
    const a = toList(reverse(l1));
    const b = toList(reverse(l2));
  
    const sum = BigInt(a.join("")) + BigInt(b.join(""));
  
    return reverse(toLinkedList(sum.toString().split("")));
  };

  return addTwoNumber(l1, l2);
}

const l1 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
];
const l2 = [5, 6, 4];

const linked1 = new LinkedList();
const linked2 = new LinkedList();

for (let i = 0; i < l1.length; i++) {
  linked1.append(l1[i]);
}
for (let i = 0; i < l2.length; i++) {
  linked2.append(l2[i]);
}

console.log(addTwoNumber(linked1.head, linked2.head));

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

const oddEven = (head) => {
  if (head === null) return null;

  let odd = head;
  let even = head.next;
  let even_head = head.next;

  while (even && even.next) {
    [odd.next, even.next] = [odd.next.next, even.next.next];
    [odd, even] = [odd.next, even.next];
  }

  odd.next = even_head;
  return head;
};

console.log(oddEven(linkedList.head));

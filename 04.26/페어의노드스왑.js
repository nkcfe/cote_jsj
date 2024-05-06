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

const list = [1, 2, 3, 4];
const linkedList = new LinkedList();

for (let i = 0; i < list.length; i++) {
  linkedList.append(list[i]);
}

// const swap = (head) => {
//   let node = head;

//   while (node && node.next) {
//     [node.val, node.next.val] = [node.next.val, node.val];
//     node = node.next.next;
//   }

//   return head;
// };

const swap = (head) => {
  const root = new LinkedList();
  let prev = new LinkedList();
  prev.next = head;

  while (head && head.next) {
    let b = head.next;
    head.next = b.next;
    b.next = head;

    prev.next = b;

    head = head.next;
    prev = prev.next.next;
  }
  return root.next;
};

console.log(swap(linkedList.head));

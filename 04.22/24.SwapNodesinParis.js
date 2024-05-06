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

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const swapPairs = (head) => {
//   let cur = head;
//   while (cur && cur.next) {
//     [cur.val, cur.next.val] = [cur.next.val, cur.val];

//     cur = cur.next.next;
//   }
//   return head;
// };

const swapPairs = (head) => {
  let root = new ListNode();
  let prev = root;

  prev.next = head;
  //1234
  while (head && head.next) {
    // b가 head를 가리키도록 할당
    let b = head.next; // b: 234 // 4
    head.next = b.next; // head: 134 // 3null
    console.log(head.next);

    // 스왑
    b.next = head; // 2134 // 2143

    // prev가 b를 가리키도록
    prev.next = b; // null2134 // 1 4

    // 다음 비교를 위해 이동
    head = head.next; // 34 // null
    prev = prev.next.next; // 134 // null
  }

  return root.next;
};

const head = [1, 2, 3, 4];
const linkedList = new LinkedList();
for (idx in head) {
  linkedList.append(head[idx]);
}

console.log(swapPairs(linkedList.head));

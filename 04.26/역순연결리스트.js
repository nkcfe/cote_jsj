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
}

const li = [1, 2, 3, 4, 5];
const linkedList = new LinkedList();

for (i in li) {
  linkedList.append(li[i]);
}

// const reverse = (head) => {
//   let node = head;
//   let prev = null;
//   while (true) {
//     if (node === null) break;

//     let next = node.next; // 다음 값

//     node.next = prev; // 원본 변경

//     prev = node; // 이전값 저장
//     node = next; //
//   }
//   return prev;
// };

const reverse = (head) => {
  const re = (node, prev) => {
    if (!node) return prev;

    let next = node.next;
    node.next = prev;
    return re(next, node);
  };
  return re(head, null);
};

console.log(reverse(linkedList.head));

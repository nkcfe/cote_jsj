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

const li = [1, 2, 2, 1];
const linkedList = new LinkedList();
for (let i = 0; i < li.length; i++) {
  linkedList.append(li[i]);
}

// 배열로 변환 > 투포인터로 풀이 160ms
// const isPalindrome = (head) => {
//   const li = [];

//   while (head) {
//     li.push(head.val);
//     head = head.next;
//   }
//   let left = 0;
//   let right = li.length - 1;

//   while (left < right) {
//     if (li[left] !== li[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// 런너를 이용한 풀이 140ms
const isPalindrome = (head) => {
  let rev = null;

  let slow = head;

  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    [rev, rev.next, slow] = [slow, rev, slow.next];
  }

  if (fast) {
    slow = slow.next;
  }

  while (rev && rev.val === slow.val) {
    [slow, rev] = [slow.next, rev.next];
  }
  return !rev;
};

console.log(isPalindrome(linkedList.head));

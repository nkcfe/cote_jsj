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

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const linked1 = new LinkedList();
const linked2 = new LinkedList();

for (let i = 0; i < l1.length; i++) {
  linked1.append(l1[i]);
  linked2.append(l2[i]);
}

function twoSum(l1, l2) {
  const reverse = (li) => {
    let node = li;
    let prev = null;
    while (node) {
      let next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return prev;
  };

  const toList = (li) => {
    const list = [];

    while (li) {
      list.push(li.val);
      li = li.next;
    }
    return list;
  };

  const sum = (list1, list2) => {
    return (Number(list1.join("")) + Number(list2.join("")))
      .toString()
      .split("");
  };

  const toLinked = (list) => {
    const linkedList = new LinkedList();
    for (let i = 0; i < list.length; i++) {
      linkedList.append(list[i]);
    }
    return linkedList;
  };

  return toLinked(sum(toList(reverse(l1)), toList(reverse(l2))));
}

console.log(twoSum(linked1.head, linked2.head));

class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.last = null;
  }

  push(item) {
    this.last = new Node(item, this.last);
  }

  pop() {
    const item = this.last.item;
    this.last = this.last.next;
    return item;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);

console.log(stack);
stack.pop();
console.log(stack);

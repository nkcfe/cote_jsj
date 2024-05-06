class MyStack {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
  }

  pop() {
    return this.q.pop();
  }

  top() {
    return this.q[this.q.length - 1];
  }

  empty() {
    return this.q.length === 0;
  }
}

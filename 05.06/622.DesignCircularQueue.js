class MyCircularQueue {
  constructor(k) {
    this.q = Array.from({ length: k }).fill(null);
    this.maxlen = k;
    this.p1 = 0;
    this.p2 = 0;
  }

  enQueue(value) {
    if (this.q[this.p2] === null) {
      this.q[this.p2] = value;
      this.p2 = (this.p2 + 1) % this.maxlen;
      return true;
    } else {
      return false;
    }
  }

  deQueue() {
    if (this.q[this.p1] === null) {
      return false;
    } else {
      this.q[this.p1] = null;
      this.p1 = (this.p1 + 1) % this.maxlen;
      return true;
    }
  }

  Front() {
    if (this.q[this.p1] === null) {
      return -1;
    } else {
      return this.q[this.p1];
    }
  }

  Rear() {
    let pointer = this.p2 - 1;
    if (pointer < 0) {
      pointer = this.q.length - 1;
    }
    if (this.q[pointer] === null) {
      return -1;
    } else {
      return this.q[pointer];
    }
  }

  isEmpty() {
    return this.p1 === this.p2 && this.q[this.p1] === null;
  }

  isFull() {
    return this.p1 === this.p2 && this.q[this.p1] !== null;
  }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
console.log(myCircularQueue.deQueue()); // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear()); // return 4

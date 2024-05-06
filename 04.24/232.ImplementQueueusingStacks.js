class MyStack {
  constructor() {
    this.input = [];
    this.output = [];
  }

  push(x) {
    this.input.push(x);
  }

  pop() {
    return this.output.pop();
  }

  peek() {
    if (!this.output) {
      while (this.input) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }

  empty() {
    return this.input == [] && this.output == [];
  }
}

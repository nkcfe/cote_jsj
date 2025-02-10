function solution(scoville, K) {
  // 최소 힙 구현
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    push(value) {
      this.heap.push(value);
      this.bubbleUp();
    }

    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();

      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
    }

    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] <= this.heap[index]) break;

        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      }
    }

    bubbleDown() {
      let index = 0;
      while (true) {
        let smallest = index;
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;

        if (
          leftIndex < this.heap.length &&
          this.heap[leftIndex] < this.heap[smallest]
        ) {
          smallest = leftIndex;
        }

        if (
          rightIndex < this.heap.length &&
          this.heap[rightIndex] < this.heap[smallest]
        ) {
          smallest = rightIndex;
        }

        if (smallest === index) break;

        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      }
    }

    size() {
      return this.heap.length;
    }

    peek() {
      return this.heap[0];
    }
  }

  const minHeap = new MinHeap();
  scoville.forEach((s) => minHeap.push(s));

  let mixCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;
    minHeap.push(newScoville);
    mixCount++;
  }

  return minHeap.peek() >= K ? mixCount : -1;
}

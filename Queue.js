import Stack from "./Stack";

class Queue {
  constructor() {
    this.queue = new Array(capacity);
    this.front = this.rear = 0;
    this.count = 0;
  }

  isFull() {
    return this.count === this.items.length;
  }

  isEmppty() {
    return this.count === 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      return "Queue is full";
    }
    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.items.length;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.items[this.front] = element;
    this.front = (this.front + 1) % this.items.length;
    this.count--;
  }
}

class QueueUsingTwoStacks {
  stack1 = new Stack();
  stack2 = new Stack();

  enqueue(element) {
    this.stack1.push(element);
  }

  dequeue() {
    if (this.stack2.isEmpty() && this.stack1.isEmpty()) return "Queue is empty";

    if (this.stack2.isEmpty()) {
      while (this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

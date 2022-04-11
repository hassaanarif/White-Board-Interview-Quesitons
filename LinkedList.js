class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head == null;
  }

  addLast(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  addFirst(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  //* 1->2->3->4->null
  //! H        T

  //* 1<-2<-3<-4->null
  //?        P  C
  //! null<-1<-2<-3<-4->null
  //?                 P  C
  //*          H

  reverse() {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    this.tail = this.head;
    this.tail.next = current;
    this.head = previous;
  }

  kthNodeFromEnd(k) {
    if (k > this.length) {
      return null;
    }
    if (k === this.length) {
      return this.tail;
    }
    if (k === 1) {
      return this.head;
    }

    let ahead = this.head;
    let behind = this.head;

    for (let i = 0; i <= k - 1; i++) {
      ahead = ahead.next;
    }

    while (ahead !== this.tail) {
      ahead = ahead.next;
      behind = behind.next;
    }
    return behind;
  }

  middleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== this.tail && fast.next !== this.tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

let list = new LinkedList();

list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);
list.reverse();

console.log(list);

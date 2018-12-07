// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(num) {
    this.head = new Node(num, this.head);
  }

  size() {
    let count = 0;
    let currNode = this.head;
    while(currNode) {
      count++
      currNode = currNode.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() {
    this.head = null;
  }
  
  removeFirst() {
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode;
    let currNode = this.head;
    while(currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
  }

  insertLast(num) {
    if(!this.head) {
      this.head = new Node(num);
    }
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(num);
  }

  getAt(num) {
    if(!this.head) {
      return null;
    }
    let currNode = this.head;

    if(num === 0) {
      return this.head
    }

    for(let i = 0; i <= num; i++) {
      currNode = currNode.next;
    }
    return currNode
  }

  removeAt(num) {
    if(!this.head) {
      return;
    }
    if(num === 0) {
      this.head = this.head.next;
      return;
    }
    let prevNode;
    let currNode = this.head;
    let counter = 0;
    while(counter < num) {
      if(!currNode.next) {
        return;
      }
      counter++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = currNode.next;
  }

  insertAt(record, num) {
    const newNode = new Node(record);

    if(num === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prevNode;
    let currNode = this.head;

    for(let i = 0; i <= num; i++) {
      
      prevNode = currNode;
      currNode = currNode.next
    }
    newNode.next = currNode;
    prevNode.next = newNode;
  }
}

module.exports = { Node, LinkedList };

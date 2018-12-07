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
      this.head = this.head.next.next;
      return;
    }
    let prevNode = this.getAt(num - 1);
    if(!prevNode || !prevNode.next) {
      return
    }
    prevNode.next = prevNode.next.next;
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
      if(currNode.next) {
        currNode = currNode.next;
      }
    }
    newNode.next = currNode;
    prevNode.next = newNode;
  }

  forEach(callback) {
    let currNode = this.head;

    while(currNode) {
      callback(currNode);
      currNode = currNode.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

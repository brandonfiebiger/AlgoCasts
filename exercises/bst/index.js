// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data
    this.left = null;
    this.right = null;
  }

  insert(num) {
    if(num < this.data && this.left) {
      this.left.insert(num);
    } else if (num < this.data){
      this.left = new Node(num);
    } else if (num > this.data && this.right) {
      this.right.insert(num);
    } else if (num > this.data) {
      this.right = new Node(num);
    }
  }

  contains(num) {
    if (this.data === num) {
      return this;
    } 
    
    if (this.data < num && this.right) {
      return this.right.contains(num);
    } else if (this.data > num && this.left) {
     return this.left.contains(num);
    } else {
      return null;
    }
  }
}

module.exports = Node;

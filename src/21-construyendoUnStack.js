class Node {
  constructor(value) {
  this.value = value;
  this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length == 0) {
        console.error('el stack esta vacio');
        return undefined;
    }

    const nodeToRemove = this.top;
    delete this.top;
    this.top = nodeToRemove.next;
    
    this.length--;
    
    if (this.length == 0){
        this.bottom = null;
    }

    return nodeToRemove;
  }
}

const myStack = new Stack();
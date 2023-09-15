class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;//Este metodo agrega un nodo a la cola
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }//esta primera validacion se hace por que si el indice que se suministra es mayor a los elementos la longitud total deberia ir al final ese elemento.
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;//este es el valor que queremos agregar en un punto diferente del final o inicio si  es requerido tiene que estar en espera si no  el garbage collector lo va a eliminar.
    newNode.next = holdingPointer;


    this.length++;

    return this;
  }
  getTheIndex (index) {
    let counter = 0;
    let currentNode = this.head;

    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
}


let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.insert(2,5);

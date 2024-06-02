import DoublyLinkedListNode from './DoublyLinkedListNode';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
  * Append value
  *
  * @param {*} value - The value of new node
  * @return {LinkedListNode}
  */
  append = (value) => {
    let newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail = newNode;
    let currNode = this.head;
    while (currNode) {
      if (currNode.next === null) break;

      currNode = currNode.next;
    }
    currNode.next = newNode;
    newNode.previous = currNode;
    return this;
  }

  /**
  * Prepend new node
  *
  * @param {*} value - The value od new node
  * @return {DoublyLinkedList}
  */
  prepend = (value) => {
    let newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    return this;
  }

  /**
  * Create Doubly Linked List from to Array
  *
  * @param {Array} array - Description
  * @return {LinkedList}
  */
  fromArray = (array) => {
    array.forEach((item) => {
      let newNode = new DoublyLinkedListNode(item);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
      }
    })
    return this;
  }

  /**
  * Delete tail node
  *
  * @return {LinkedListNode}
  */
  deleteTail = () => {
    if (!this.tail) return null;

    let tailRemove = this.tail;
    this.tail = this.tail.previous;

    if (!this.tail) this.head = null;
    else this.tail.next = null;

    return tailRemove;
  }

  /**
  * Delete head node
  *
  * @return {LinkedListNode}
  */
  deleteHead = () => {
    if (!this.head) return null;

    let headRemove = this.head;
    this.head = this.head.next;

    if (!this.head) this.tail = null;
    else this.head.previous = null;

    return headRemove;
  }





  /**
  * Find value of node
  *
  * @param {*} value - Description
  * @return {LinkedListNode}
  */
  find = ({ value, callback }) => {
    let node = null;
    let currentNode = this.head;
    while (currentNode) {
      if ((value && currentNode.value === value)
        || (callback && callback(currentNode.value))) {
        node = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return node;
  }


  /**
  * Convert values of node to string
  *
  * @return {string}
  */
  toString = (callback) => {
    if (!this.head) return '';

    let currNode = this.head;
    let strOutput = '';
    while (currNode) {
      strOutput += callback ? `${callback(currNode.value)},` : `${currNode.value},`;
      currNode = currNode.next;
    }
    return strOutput.slice(0, -1);
  }
}

export default DoublyLinkedList;

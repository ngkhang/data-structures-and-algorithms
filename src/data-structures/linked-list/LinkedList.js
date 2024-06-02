import LinkedListNode from "./LinkedListNode";

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  /**
   * Prepend new node
   *
   * @param {*} value - The value of new node
   * @return {LinkedList}
   */
  prepend = (value) => {
    let newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  };

  /**
   * Append new node
   *
   * @param {*} value - The value of new node
   * @return {LinkedList}
   */
  append = (value) => {
    let newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  };

  /**
   * Insert value into position node
   *
   * @param {*} value - The value of new node
   * @param {number} rawIndex - The position insert into Linked List
   * @return {LinkedList}
   */
  insert = (value, rawIndex) => {
    if (!this.head) this.append(value);
    else {
      let len = 1;
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        len++;
      }

      // Get length linked list
      if (rawIndex <= 0) this.prepend(value);
      else if (rawIndex > len) this.append(value);
      else {
        let newNode = new LinkedListNode(value);
        let currNode = this.head;
        let count = 1;
        while (count === rawIndex - 1) {
          currNode = currNode.next;
          count++;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
        return this;
      }
    }
  }

  /**
   * Delete Tail node
   *
   * @return {*} Return value of node be removed
   */
  deleteTail = () => {
    let currentNode = this.head;

    while (currentNode.next && currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    let nodeRemove = currentNode.next ? currentNode.next : currentNode;

    if (currentNode.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      currentNode.next = null;
      this.tail = currentNode;
    }

    return nodeRemove;
  };

  /**
   * Delete Head node
   *
   * @return {*} Return value of node be removed
   */
  deleteHead = () => {
    if (!this.head) return null;

    let nodeRemove = this.head;
    this.head = this.head.next;
    nodeRemove.next = null;

    if (this.head === null) this.tail = null;
    return nodeRemove;
  };

  /**
   * Delete node by value
   *
   * @param {*} value - Description
   * @return {ReturnType} Description
   */

  delete = (value) => { };

  /**
   * Find node by value or callback
   *
   * @param {Object} {value, callback} - Description
   * @return {LinkedListNode}
   */
  find = ({ value, callback }) => {
    if (!this.head) return null;

    let currentNode = this.head;
    let node = null;

    while (currentNode) {
      if (
        (value && currentNode.value === value) ||
        (callback && callback(currentNode.value))
      ) {
        node = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    return node;
  };

  /**
   * Reverse linked list
   *
   * @return {LinkedList}
   */
  reverse = () => {
    this.tail = this.head;

    let currNode = this.head;
    let nextNode = currNode.next;
    let preNode = null;

    while (nextNode) {
      currNode.next = preNode;
      preNode = currNode;
      currNode = nextNode;
      nextNode = nextNode.next;
    }
    currNode.next = preNode;
    this.head = currNode;
    return this;
  };

  /**
   * Convert element of an array to linked list
   *
   * @param {Array} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray = (values) => {
    let currentNode = this.head;
    if (!this.head) {
      values.forEach((item) => {
        let newNode = new LinkedListNode(item);
        if (!currentNode) {
          this.head = newNode;
          currentNode = this.head;
        } else {
          currentNode.next = newNode;
          currentNode = newNode;
        }
      });
      this.tail = currentNode;
      return this;
    }

    values.forEach((item) => {
      let newNode = new LinkedListNode(item);
      this.tail.next = newNode;
      this.tail = newNode;
    });
    return this;
  };

  /**
   * Convert to array
   *
   * @return {Array}
   */
  toArray = () => {
    if (!this.head) return [];

    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  };

  /**
   * Convert all value of node to string
   *
   * @param {callback | undefined}
   * @return {string} String of value of nodes
   */
  toString = (callback) => {
    let values = "";

    let currentNode = this.head;
    while (currentNode !== null) {
      values += callback
        ? `${callback(currentNode.value)},`
        : `${currentNode.value},`;
      currentNode = currentNode.next;
    }

    return values.slice(0, -1);
  };
}

export default LinkedList;

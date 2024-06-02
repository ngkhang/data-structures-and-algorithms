class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.previous = previous;
    this.value = value;
    this.next = next;
  }

  toString = (callback) => {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default DoublyLinkedListNode;

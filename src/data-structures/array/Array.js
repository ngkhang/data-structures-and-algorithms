/**
 * Array
 *
 * @constructor
 */
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Get item by index
   *
   * @param {number} index - The index of item
   * @return {any | undefined} Return the value of element in array, and undefined otherwise.
   */
  getByIndex = (index) => this.data[index];

  /**
   * Inserts new elements at the start
   *
   * @param {...any} items - Elements to insert at the start
   * @return {number} Return the new length of the array
   */
  unshift = (...items) => {
    let size = items.length;
    for (let step = this.length + size - 1; step >= 0; step--) {
      this.data[step] = step - size < 0 ? items[step] : this.data[step - size];
    }
    this.length += size;
    return this.length;
  };

  /**
   * Appends new elements to the end
   *
   * @param {...any} items - New elements to add to the array.
   * @return {number} Returns the new length of the array.
   */
  push = (...items) => {
    for (const value of items) {
      this.data[this.length] = value;
      this.length++;
    }
    return this.length;
  };

  /**
   * Removes the last element from an array
   *
   * @return {any | undefined} If the array is empty, undefined is returned and the array is not modified.
   */
  pop = () => {
    if (!this.length) return undefined;
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };

  /**
   * Removes the first element from an array and returns it.
   *
   * @return {any | undefined} If the array is empty, undefined is returned and the array is not modified.
   */
  shift = () => {
    if (!this.length) return undefined;

    let firstItem = this.data[0];
    for (let step = 0; step < this.length; step++) {
      this.data[step] = this.data[step + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  };

  /**
   * Removes elements from an array and, if necessary, inserts new elements in their place,
   *
   * @param {number} start - he zero-based location in the array from which to start removing elements
   * @param {number} deleteCount - The number of elements to remove.
   * @param {...any} items - New elements need insert.
   * @return {Array} Return the deleted elements.
   */
  splice = (start = 0, deleteCount = 0, ...items) => {
    let itemsDel = new MyArray();

    if (deleteCount) {
      let count = deleteCount;
      for (let step = start; step < this.length; step++) {
        let itemRemove = this.data[step];
        if (count > 0) {
          itemsDel.push(itemRemove);
          count--;
        }
        this.data[step] = this.data[step + deleteCount];
      }
      for (
        let step = this.length - 1;
        step >= this.length - deleteCount;
        step--
      ) {
        delete this.data[step];
      }
      this.length -= deleteCount;
    }
    if (items.length) {
      let size = items.length;

      for (let step = this.length + size - 1; step > start; step--) {
        this.data[step] = this.data[step - size];
      }
      for (let step = 0; step < size; step++) {
        this.data[start + step] = items[step];
      }
      this.length += size;
    }
    return itemsDel;
  };

  /**
   * Delete item by Index
   *
   * @param {number} index - The index of item in array
   * @return {any | undefined} Return item remove.
   */
  delItemByIndex = (index) => {
    if (index < 0 || index > this.length - 1) return undefined;

    let itemDel = this.data[index];

    for (let step = index; step < this.length; step++) {
      this.data[step] = this.data[step + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemDel;
  };

  /**
   * Convert values to string
   *
   * @return {string} Returns a string representation of an array.
   */
  toString = () => {
    if (!this.length) return "";

    let output = "";
    for (let index = 0; index < this.length; index++) {
      const value = this.data[index];
      if (index === this.length - 1) {
        output += `${value}`;
        return output;
      }
      output += `${value},`;
    }
    return output;
  };

  /**
   * Copy of a section of an array
   *
   * @param {number} start - The beginning index of the specified portion of the array (default: 0)
   * @param {number} end - The end index of the specified portion of the array (default: length of array)
   * @return {Array} Returns a copy of a section of an array.
   */
  slice = (start = 0, end = this.length) => {
    let subArr = new MyArray();

    if (!this.length) return subArr;

    if (start === undefined) start = 0;
    else if (start < 0) start = this.length + start;

    if (end < 0) end = this.length + end;

    for (let index = start; index < end; index++) {
      subArr.push(this.data[index]);
    }
    return subArr;
  };

  /**
   * Adds all the elements of an array into a string, separated by the specified separator string.
   *
   * @param {string} separator - A string used to separate one element of the array
   * @return {string} A string of all the elements are separated with a comma.
   */
  join = (separator = "") => {
    if (this.length === 0) return "";
    else if (this.length === 1) return `${this.data[0]}`;

    let str = this.data[0];
    for (let index = 1; index < this.length; index++) {
      str += `${separator}${this.data[index]}`;
    }
    return str;
  };

  /**
   * Determines whether an array includes a certain element
   *
   * @param {any} searchElement - The element to search for.
   * @param {number} fromIndex - The position in this array at which to begin searching for searchElement.
   * @return {Boolean} Return true or false as appropriate.
   */
  includes = (searchElement, fromIndex = 0) => {
    if (!this.length) return false;

    for (let key = fromIndex; key < this.length; key++) {
      if (this.data[key] === searchElement) return true;
    }
    return false;
  };

  /**
   *  Returns the index of the first occurrence of a value in an array.
   *
   * @param {any} searchElement - The value to locate in the array.
   * @param {number} fromIndex - The array index at which to begin the search, default 0
   */
  indexOf = (searchElement, fromIndex = 0) => {
    if (!this.length) return -1;

    for (let index = fromIndex; index < this.length; index++) {
      if (this.data[index] === searchElement) return index;
    }
    return -1;
  };
}

let a = [];
console.log(a.slice());

export default MyArray;

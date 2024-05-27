class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Access
  getByIndex = (index) => this.data[index];

  // Insert at the begin
  unshift = (...values) => {
    let size = values.length;
    for (let step = this.length + size - 1; step >= 0; step--) {
      this.data[step] = step - size < 0 ? values[step] : this.data[step - size];
    }
    this.length += size;
    return this.length;
  }

  // Insert at index
  splice = (start = 0, delCount = 0, ...values) => {
    let itemsDel = new MyArray();
    if (delCount) {
      let count = delCount;
      // Delete
      for (let step = start; step < this.length; step++) {
        let itemRemove = this.data[step];
        if (count > 0) {
          itemsDel.push(itemRemove);
          count--;
        }
        this.data[step] = this.data[step + delCount];
      }
      for (let step = this.length - 1; step >= this.length - delCount; step--) {
        delete this.data[step];
      }
      this.length -= delCount;
    }
    if (values.length) {
      let size = values.length;

      for (let step = this.length + size - 1; step > start; step--) {
        this.data[step] = this.data[step - size];
      }
      for (let step = 0; step < size; step++) {
        this.data[start + step] = values[step];
      }
      this.length += size;
    }
    return itemsDel;
  }

  // Delete value by index
  delByIndex = (index) => {
    if (index < 0 || index > this.length - 1) return undefined;

    let itemDel = this.data[index];

    for (let step = index; step < this.length; step++) {
      this.data[step] = this.data[step + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemDel;
  }

  // Insert at the end
  push = (...values) => {
    for (const value of values) {
      this.data[this.length] = value;
      this.length++;
    };
    return this.length;
  }

  // Convert values to string
  toString = () => {
    let output = '';
    for (let index = 0; index < this.length; index++) {
      const ele = this.data[index];
      output += `${ele},`
    }
    return output.trim().replace(/,?$/, '');
  }
}

export default MyArray;

import { expect, it } from "vitest";

import MyArray from "../Array";

// Testing
describe("Array", () => {
  it("should create empty array", () => {
    const newArr = new MyArray();
    expect(newArr.toString()).toBe("");
    expect(newArr.length).toBe(0);
  });

  it("should get value by index", () => {
    const newArr = new MyArray();
    let values1 = newArr.getByIndex(-1000);
    expect(values1).toBeUndefined();

    newArr.push(1, 2, 3);
    let values2 = newArr.getByIndex(0);
    let values3 = newArr.getByIndex(1);
    expect(values2).toBe(1);
    expect(values3).toBe(2);
  });

  it("should appends new elements to the end", () => {
    const newArr = new MyArray();
    newArr.push(1);
    expect(newArr.toString()).toBe("1");
    expect(newArr.length).toBe(1);
    newArr.push(2, 3, 4, 5);
    expect(newArr.toString()).toBe("1,2,3,4,5");
    expect(newArr.length).toBe(5);
  });

  it("should inserts new elements at the start", () => {
    const newArr = new MyArray();
    newArr.push(1, "abc");
    newArr.unshift(0);
    expect(newArr.toString()).toBe("0,1,abc");
    expect(newArr.unshift(-2, -1)).toBe(5);
    expect(newArr.toString()).toBe("-2,-1,0,1,abc");
  });

  it("should remove the last element", () => {
    const newArr = new MyArray();
    expect(newArr.pop()).toBeUndefined();
    newArr.push(1, 2, 3, 4);
    expect(newArr.pop()).toBe(4);
    expect(newArr.toString()).toBe("1,2,3");
  });

  it("should remove the first element", () => {
    const newArr = new MyArray();
    expect(newArr.shift()).toBeUndefined();
    newArr.push(1, 2, 3, 4);
    expect(newArr.shift()).toBe(1);
    expect(newArr.toString()).toBe("2,3,4");
  });

  it("should delete values by index", () => {
    const newArr = new MyArray();
    newArr.push(1, "abc", 2, 3, 4);
    expect(newArr.delItemByIndex(-100)).toBeUndefined();
    expect(newArr.delItemByIndex(99)).toBeUndefined();
    expect(newArr.delItemByIndex(1)).toBe("abc");
    expect(newArr.toString()).toBe("1,2,3,4");
  });

  it("should removes/or and inserts new elements", () => {
    const newArr = new MyArray();
    newArr.push(1, 2, 3, 4, 5, 6);

    let itemsRemove = newArr.splice(1, 2);
    expect(itemsRemove.toString()).toBe("2,3");
    expect(itemsRemove.length).toBe(2);
    expect(newArr.toString()).toBe("1,4,5,6");

    newArr.splice(1, 2, 9, 10);
    expect(newArr.toString()).toBe("1,9,10,6");

    let newLen = newArr.splice(0, 0, -1).length;
    expect(newLen).toBe(0);
    expect(newArr.toString()).toBe("-1,1,9,10,6");
    expect(newArr.length).toBe(5);
  });

  it("should determines whether an array includes a certain element", () => {
    const newArr = new MyArray();
    expect(newArr.includes('1')).toBeFalsy();
    newArr.push(1, 2, 'abc', 4);
    expect(newArr.includes('1')).toBeFalsy();
    expect(newArr.includes(2)).toBeTruthy();
    expect(newArr.includes(2, 2)).toBeFalsy();
  });

  it("should returns the index of the first occurrence of a value", () => {
    const newArr = new MyArray();
    newArr.push(1, 2, 'abc', 4, 2);
    expect(newArr.indexOf('1')).toBe(-1);
    expect(newArr.indexOf(2)).toBe(1);
    expect(newArr.indexOf(2, 2)).toBe(4);
  })

  it("should convert all the elements of an array and separated by the specified separator string", () => {
    const newArr = new MyArray();
    expect(newArr.join()).toBe('');
    newArr.push(1);
    expect(newArr.join()).toBe('1');
    newArr.push(2, 'abc', 3);
    expect(newArr.join('')).toBe('12abc3');
    expect(newArr.join(', ')).toBe('1, 2, abc, 3');
  });

  it("should return a copy of a section of an array", () => {
    const newArr = new MyArray();
    expect(newArr.slice().length).toBe(0);
    newArr.push(1, 2, 3, 4);
    expect(newArr.slice().toString()).toBe('1,2,3,4');
    expect(newArr.slice().length).toBe(4);
    expect(newArr.slice(1,).toString()).toBe('2,3,4');
    expect(newArr.slice(1, 2).toString()).toBe('2');
    expect(newArr.slice(undefined, 2).toString()).toBe('1,2');
    expect(newArr.slice(-2,).toString()).toBe('3,4');
    expect(newArr.slice(undefined, -2).toString()).toBe('1,2');
    expect(newArr.slice(-3, -1).toString()).toBe('2,3');
  })
});

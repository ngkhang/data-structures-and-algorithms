import { expect, it } from 'vitest';

import MyArray from '../Array';


// Testing
describe('Array', () => {
  it('should create empty array', () => {
    const newArr = new MyArray();
    expect(newArr.toString()).toBe('');
    expect(newArr.length).toBe(0);
  });

  it('get value by index', () => {
    const newArr = new MyArray();
    let values1 = newArr.getByIndex(-1000);
    expect(values1).toBe(undefined);

    newArr.push(1, 2, 3);
    let values2 = newArr.getByIndex(0);
    let values3 = newArr.getByIndex(1);
    expect(values2).toBe(1);
    expect(values3).toBe(2);
  });

  it('should insert values at the end', () => {
    const newArr = new MyArray();
    newArr.push(1)
    expect(newArr.toString()).toBe('1');
    expect(newArr.length).toBe(1);
    newArr.push(2, 3, 4, 5)
    expect(newArr.toString()).toBe('1,2,3,4,5');
    expect(newArr.length).toBe(5);
  });

  it('should insert values at the begin', () => {
    const newArr = new MyArray();
    newArr.push(1, 'abc');
    newArr.unshift(0);
    expect(newArr.toString()).toBe('0,1,abc');
    expect(newArr.unshift(-2, -1)).toBe(5);
    expect(newArr.toString()).toBe('-2,-1,0,1,abc');
  });

  it('should insert values by index', () => {
    const newArr = new MyArray();
    newArr.push(1, 'abc');
    newArr.unshift(0);
    expect(newArr.toString()).toBe('0,1,abc');
    expect(newArr.unshift(-2, -1)).toBe(5);
    expect(newArr.toString()).toBe('-2,-1,0,1,abc');
  });

  it('should delete values by index', () => {
    const newArr = new MyArray();
    newArr.push(1, 'abc', 2, 3, 4);
    expect(newArr.delByIndex(-100)).toBe(undefined);
    expect(newArr.delByIndex(99)).toBe(undefined);
    expect(newArr.delByIndex(1)).toBe('abc');
    expect(newArr.toString()).toBe('1,2,3,4');
  });

  it('should delete/insert values by splice', () => {
    const newArr = new MyArray();
    newArr.push(1, 2, 3, 4, 5, 6);

    let itemsRemove = newArr.splice(1, 2);
    expect(itemsRemove.toString()).toBe('2,3');
    expect(itemsRemove.length).toBe(2);
    expect(newArr.toString()).toBe('1,4,5,6');

    newArr.splice(1, 2, 9, 10);
    expect(newArr.toString()).toBe('1,9,10,6');

    let newLen = newArr.splice(0, 0, -1).length;
    expect(newLen).toBe(0);
    expect(newArr.toString()).toBe('-1,1,9,10,6');
    expect(newArr.length).toBe(5);
  });
});
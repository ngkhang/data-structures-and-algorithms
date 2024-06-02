import { expect, it } from 'vitest'
import LinkedListNode from '../LinkedListNode'

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    let node = new LinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  })

  it('should create list node with object as a value', () => {
    let object = {
      id: 1,
      name: 'Khang',
    }
    let node = new LinkedListNode(object);
    expect(node.value.id).toBe(1);
    expect(node.value.name).toBe('Khang');
    expect(node.next).toBeNull();
  })

  it('should link nodes together', () => {
    let node1 = new LinkedListNode(1);
    let node2 = new LinkedListNode(2);
    node1.next = node2;

    expect(node1.value).toBe(1);
    expect(node2.value).toBe(2);
    expect(node2.next).toBeNull();
    expect(node1.next).toBeDefined();
    expect(node1.next).toMatchObject(node2);
  })

  it('should convert node to string', () => {
    let node = new LinkedListNode(1);

    expect(node.toString()).toBe('1');

    node.value = 'string value';
    expect(node.toString()).toBe('string value');
  })

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = { id: 1, name: 'Khang', };
    let node = new LinkedListNode(nodeValue);

    const toStringCallback = (value) => `ID: ${value.id} - Name: ${value.name}`;

    expect(node.toString(toStringCallback)).toBe('ID: 1 - Name: Khang');
  })
})

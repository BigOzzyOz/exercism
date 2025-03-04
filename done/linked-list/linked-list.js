//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  head;
  tail;


  /**
   * Constructor for a LinkedList.
   *
   * Initializes the head and tail of the list to null.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }


  /**
   * Adds a new element with the specified value to the end of the list.
   *
   * @param {Number} n - The value to add to the list.
   */
  push(n) {
    let node = new Node(n);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }


  /**
   * Removes the last element from the list and returns its value.
   *
   * If the list is empty, returns null.
   *
   * @returns {Number} The value of the last element in the list.
   */
  pop() {
    if (this.head == null) return null;
    else {
      let value = this.tail.value;
      if (this.tail === this.head) this.head = null;
      this.tail = this.tail.prev || null;
      if (this.tail !== null) this.tail.next = null;
      return value;
    }
  }


  /**
   * Removes the first element from the list and returns its value.
   *
   * If the list is empty, returns null.
   *
   * @returns {Number} The value of the first element in the list.
   */
  shift() {
    if (this.head == null) return null;
    else {
      let value = this.head.value;
      if (this.head === this.tail) this.tail = null;
      this.head = this.head.next || null;
      if (this.head !== null) this.head.prev = null;
      return value;
    }
  }


  /**
   * Adds a new element to the front of the list.
   *
   * @param {Number} n The value of the element to add.
   */
  unshift(n) {
    let node = new Node(n);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }


  /**
   * Removes the first occurrence of a given value in the list.
   *
   * If the element is not found, this method does nothing.
   *
   * @param {Number} n The value to remove from the list.
   */
  delete(n) {
    let node = this.head;
    while (node !== null) {
      if (node.value === n) {
        if (node.prev !== null) node.prev.next = node.next;
        else this.head = node.next;
        if (node.next !== null) node.next.prev = node.prev;
        else this.tail = node.prev;
        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;
        return;
      }
      node = node.next;
    }
  }


  /**
   * Returns the number of elements in the list.
   *
   * Iterates through the list and counts each node.
   * If the list is empty, returns 0.
   *
   * @returns {Number} The total count of elements in the list.
   */
  count() {
    if (this.head == null) return 0;
    else {
      let count = 0;
      let node = this.head;
      while (node !== null) {
        count++;
        node = node.next;
      };
      return count;
    }
  }
}

class Node {


  /**
   * Initializes a new instance of the Node class.
   *
   * @param {Number} value - The value to store in this node.
   * This constructor sets the value of the node and initializes 
   * the previous and next pointers to null.
   */
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

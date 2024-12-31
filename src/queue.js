const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {

    const addInQueue = (node, value) => {
      if (!node) {
        return new ListNode(value);
      }
      if (node.next) {
        node.next = addInQueue(node.next, value);
      } else {
        node.next = new ListNode(value);
      }
      return node;
    }

    this.queue = addInQueue(this.queue, value);
  }

  dequeue() {
    if (!this.queue) return null;
    const { value } = this.queue;
    if (!this.queue.next) {
      this.queue = null;
    } else {
      this.queue = this.queue.next;
    }
    return value;
  }
}

module.exports = {
  Queue
};

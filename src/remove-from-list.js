const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function getCurrentIdx(current, k) {
  let idx = 0;
  while(current) {
    if (current.value === k) {
      return idx;
    }
    current = current.next;
    idx += 1;
  }
  return null;
}

function removeKFromList(l, k) {
  let currentIdx = getCurrentIdx(l, k);
  if (!currentIdx && currentIdx !== 0) {
    return l;
  }
  const removeNode = (position) => {
    let currentNode = l;
    let prev = null;
    let idx = 0;
    if (position === 0) {
      l = currentNode.next;
    } else {
      while (idx < position) {
        prev = currentNode;
        currentNode = currentNode.next;
        idx += 1;
      }
      prev.next = currentNode.next;
    }
    return l;
  };

  l = removeNode(currentIdx);
  
  return removeKFromList(l, k);
}

module.exports = {
  removeKFromList
};

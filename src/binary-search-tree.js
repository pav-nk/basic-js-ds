const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
    this.tree = addNode(this.tree, data);
  }

  has(data) {
    const searchNode = (node, data) => {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data < data) {
        return searchNode(node.right, data);
      }
      return searchNode(node.left, data);
    }
    return searchNode(this.tree, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        return findNode(node.right, data);
      }
      return findNode(node.left, data);
    }
    return findNode(this.tree, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let maxLeftNode = node.left;
        while (maxLeftNode.right) {
          maxLeftNode = maxLeftNode.right;
        }
        node.data = maxLeftNode.data;
        node.left = removeNode(node.left, maxLeftNode.data);
        return node;
      }
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
    }
    this.tree = removeNode(this.tree, data);
  }

  min() {
    const getMinNode = (node) => {
      if (!node) {
        return null;
      }
      if (node.left) {
        return getMinNode(node.left);
      }
      return node.data;
    }
    return getMinNode(this.tree);
  }

  max() {
    const getMaxNode = (node) => {
      if (!node) {
        return null;
      }
      if (node.right) {
        return getMaxNode(node.right);
      }
      return node.data;
    }
    return getMaxNode(this.tree);  
  }
}

module.exports = {
  BinarySearchTree
};
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
      return this;

    }
    let current = this.root

    while(current) {
      if(val === current.val) return undefined;

      if(val < current.val) {
        if(current.left === null) {
          current.left = newNode;
          return this
        }
        current = current.left
      } else {
        if(current.right === null) {
          current.right = newNode
          return this
        } 
        current = current.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null) {
      this.root = new Node(val);
      return this
    }
    if(val < current.val) {
      if(current.left === null) {
        current.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.left)
    } else {
      if(current.right === null) {
        current.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    let found = false

    if(current.val === val) return current

    while(current && !found) {
      if(current.val > val) {
        current = current.left
      } else if(current.val < val) {
        current = current.right
      } else {
        found = true
      }
    }
    if(!found) return undefined
    return current
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null) return undefined
    
    if(val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    }
    if(val > current.val) {
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    if(val === current.val) return current;
    if(val !== current.val) return undefined
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let results = []
    let current = this.root;

    function traverse(node) {
      results.push(node.val);
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
  traverse(current)
  return results
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let results = []
    let current = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left)
      results.push(node.val);
      if(node.right) traverse(node.right)
    }
  traverse(current)
  return results
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let results = []
    let current = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      results.push(node.val);
    }
  traverse(current)
  return results
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let results = [];
    let queue = [ this.root ]
    while(queue.length) {
     let current = queue.shift()
     results.push(current.val)
     if(current.left) queue.push(current.left)
     if(current.right) queue.push(current.right)
    }
  return results
  }
}
module.exports = BinarySearchTree;

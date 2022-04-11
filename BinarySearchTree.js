class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {}

  insert(value) {
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) {
        return;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = new Node(value);
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(value);
          break;
        }
        current = current.right;
      }
    }
  }
}

//TODO Tree Traversal (Depth First)

//*                10
//*               /  \
//*              5    15
//*             / \   / \
//*            2   5 13  22

function preOrder(root) {
  if (root === null) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

function inOrder(root) {
  if (root === null) return;
  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

function postOrder(root) {
  if (root === null) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.value);
}

function height(root) {
  if (root === null) return 0;
  if (root.left == null && root.right == null) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function minimunValueOfBinarySearchTree(root) {
  if (root === null) return "Tree is empty";
  if (root.left == null) return root.value;
  return minimunValueOfBinarySearchTree(root.left);
}

let binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);
binarySearchTree.insert(22);
binarySearchTree.insert(13);
binarySearchTree.insert(2);
binarySearchTree.insert(6);

//*--------------------------------------------------------------------------------

//TODO Tree Traversal (Bredth First)

//*                10
//*               /  \
//*              5    15
//*             / \   / \
//*            2   6 13  22

function reverseBinaryTree(root) {
  if (!root.left && !root.right) return;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  reverseBinaryTree(root.right);
  reverseBinaryTree(root.left);
}

//*                10
//*               /  \
//*              15    5
//*             / \   / \
//*            22 13 6  2

function levelOrderTraversal(root) {
  if (root == null) return;

  let queue = [root];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    console.log(currentNode.value);
  }
}

//recursion
function findMinimumValueInBinarySearchTree(root) {
  if (root === null) return null;
  if (root.left == null && root.right == null) {
    console.log(root.value);
    return;
  }
  findMinimumValueInBinarySearchTree(root.left);
}

//loop
function findMinimumValueInBinarySearchTreeUsingLoop(root) {
  if (root == null) return null;
  let currentNode = root;
  while (currentNode.left && currentNode.right) {
    currentNode = currentNode.left;
  }
  return currentNode.value;
}

function validatingBinarySearchTree(root) {
  if (root == null) return true;
  if (!root.left && !root.right) return true;

  if (root.left.value > root.value || root.right.value < root.value)
    return false;
  return (
    validatingBinarySearchTree(root.left) &&
    validatingBinarySearchTree(root.right)
  );
}

// reverseBinaryTree(binarySearchTree.root);
// console.log(validatingBinarySearchTree(binarySearchTree.root));
// levelOrderTraversal(binarySearchTree.root);
// findMinimumValueInBinarySearchTree(binarySearchTree.root);
// console.log(findMinimumValueInBinarySearchTreeUsingLoop(binarySearchTree.root));

class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    let currentNode = this.root;
    for (let ch of word) {
      if (!currentNode.children.get(ch))
        currentNode.children.set(ch, currentNode);
      currentNode = currentNode.children.get(ch);
    }
    currentNode.end = true;
  }

  traverse() {
    console.log(this.root.value);
    for (let children of this.root.children.keys()) {
      this.traverse(children);
    }
  }

  //*       C
  //*       A
  //*      / \
  //*     N   T
  autoCompletionPublic(word) {
    let output = [];
    let currentNode = this.root;
    this.autoCompletion(word, currentNode, output);
  }

  autoCompletion(word, currentNode, output) {
    if (currentNode.end) {
      output.push(word + end);
    }
    for (let ch of word) {
      if (!currentNode.children.get(ch)) return null;
      currentNode = currentNode.children.get(ch);
    }
    this.autoCompletion(word, currentNode, output);
  }
}

let trie = new Trie();
trie.insert("hello");

trie.traverse();

export default class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function isBalanced(inputString) {
  let leftCharacters = ["(", "[", "{", "<"];
  let rightCharacters = [")", "]", "}", ">"];

  let stack = new Stack();

  for (let character of inputString) {
    if (leftCharacters.includes(character)) {
      stack.push(character);
    } else if (rightCharacters.includes(character)) {
      if (stack.isEmpty()) return false;
      let top = stack.pop();
      if (leftCharacters.indexOf(top) !== rightCharacters.indexOf(character))
        return false;
    }
  }
  return stack.isEmpty();
}

function transferAStackInSameOrderWithUsingExtraSpace(stack) {
  let destinationStack = new Stack();
  let count = 0;

  while (count !== stack.size()) {
    let temp = stack.pop();

    while (count !== stack.size()) {
      destinationStack.push(stack.pop());
    }
    stack.push(temp);
    while (destinationStack.size() !== 0) {
      stack.push(destinationStack.pop());
    }
    count++;
  }
  while (stack.size() !== 0) {
    destinationStack.push(stack.pop());
  }
  return destinationStack;
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(transferAStackInSameOrderWithUsingExtraSpace(stack));

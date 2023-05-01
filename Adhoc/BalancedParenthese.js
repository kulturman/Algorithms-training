function balancedParentheses(str) {
  const queue = new Queue();

  for (let character of str) {
    if (queue.isOpeningParenthese(character)) {
      queue.push(character);
    }
    else {
      const poppedCharacter = queue.pop();
      if (poppedCharacter !== queue.getOpening(character)) {
        return false;
      }
    }
  }
  return queue.data.length === 0;
}

class Queue {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  isOpeningParenthese(element) {
    return '{[('.includes(element);
  }

  isClosingParenthese(element) {
    return '}])'.includes(element);
  }

  getOpening(element) {
    const map = {'}' : '{', ']' : '[', ')' : '('}

    return map[element];
  }
}

console.log(balancedParentheses('{[]()}')); //true
console.log(balancedParentheses('{[(])}')); //false
console.log(balancedParentheses('{[}')); // false
console.log(balancedParentheses('([{[]()}])')); //true
console.log(balancedParentheses('([{')); //false
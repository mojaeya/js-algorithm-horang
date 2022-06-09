const one = (str) => {
  const stack = [];
  for (const char of str) {
    if (isNaN(char)) {
      const i = parseInt(stack.pop());
      const j = parseInt(stack.pop());
      if (char === "+") stack.push(j + i);
      if (char === "-") stack.push(j - i);
      if (char === "*") stack.push(j * i);
      if (char === "/") stack.push(j / i);
    } else {
      stack.push(char);
    }
  }
  return stack[0];
};
//console.log(one('352+*9-'));
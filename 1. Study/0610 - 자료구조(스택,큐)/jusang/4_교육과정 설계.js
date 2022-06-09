const four = (str, plan) => {
  const order = str.split("");
  const queue = plan.split("");
  // 큐의 길이가 order이 길이와 같아질 때까지 반복문 돌림
  while (queue.length > order.length) {
    if (order.includes(queue[0])) {
      queue.push(queue.shift());
    } else {
      queue.shift();
    }
  }
  return queue.join("") === str ? "YES" : "NO";
};
console.log(four("CBA", "CBDAGE"));
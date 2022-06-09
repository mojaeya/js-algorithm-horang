console.log(solution(8, 3));

function solution(N, K) {
  let queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }
  while (queue.length > 1) {
    for (let i = 0; i < K; i++) {
      if (i !== K - 1) queue.push(queue.shift());
      else queue.shift();
    }
  }
  return queue[0];
}

const three = (n, k) => {
  let answer;

  let queue = Array.from({ length: n }, (_, i) => i + 1);
  //1명만 남을때 까지 반복,0이되면 거짓 이니 멈춤
  while (queue.length) {
    //1,2번왕자 제일 첫번째값을 맨뒤에push 하기
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    //3번 왕자는제외
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
};
//console.log(three(8, 3));
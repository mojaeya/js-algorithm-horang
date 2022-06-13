let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, 9, arr));

function solution(S, N, workNum) {
  let cache = Array.from({ length: S }, () => 0);
  for (let x of workNum) {
    let pos = -1;
    for (let i = 0; i < S; i++) if (cache[i] === x) pos = i; // Hit
    if (pos === -1) {
      // Miss
      for (let i = S - 1; i >= 1; i--) cache[i] = cache[i - 1];
    } else {
      for (let i = pos; i >= 1; i--) cache[i] = cache[i - 1];
    }
    cache[0] = x;
  }
  return cache.join(" ");
}

// const readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// let input = []

// rl.on('line', function(line){
//    input.push(line)
// })
//   .on('close', function(){
//     let S = input[0].split(" ").map(Number)[0]  // 캐시 크기
//     let N = input[0].split(" ").map(Number)[1]  /// 작업의 개수
//     let workNum = input[1].split(" ").map(Number) // 작업 번호

//     let cache = []; cache.length = S;
//     console.log("캐시 메모리 상태 변화")
//     for(let i=0; i<N; i++) {
//         if(cache.indexOf(workNum[i]) === -1) {
//             cache.unshift(workNum[i])
//             cache.pop()
//         } else {
//             let idx = cache.indexOf(workNum[i])
//             cache.splice(idx,1)
//             cache.unshift(workNum[i])
//         }
//         console.log(cache)
//     }

//     process.exit()
// })

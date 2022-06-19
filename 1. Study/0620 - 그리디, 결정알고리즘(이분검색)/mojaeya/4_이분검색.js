// 이진탐색은 오름차순 혹은 내림차순으로 정렬되어있어야 찾을 수 있는 전제조건이 있다.

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(8, 32, arr));

function solution(N, M, arr) {
  arr.sort((a, b) => a - b);
  let low = 0;
  let high = N - 1;

  while (low <= high) {
    let midIdx = Math.floor((low + high) / 2);
    //console.log("midIdx :",midIdx)
    let mid = arr[midIdx];
    //console.log("mid :", mid)
    if (mid === M) return arr.indexOf(mid) + 1;
    else if (mid > M) high = midIdx - 1;
    else low = midIdx + 1;
  }
}

// 이진탐색은 오름차순 혹은 내림차순으로 정렬되어있어야 찾을 수 있는 전제조건이 있다.
// 순차탐색처럼 처음부터 끝까지 하나씩 모든 데이터를 체크하여 값을 찾는 것이 아니라
//  탐색 범위를 절반씩 줄여가며 찾아가는 Search 방법이다.

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(8, 32, arr));

function solution(N, M, arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);
  let lt = 0;
  let rt = N - 1;

  while (lt <= rt) {
    let midIdx = Math.floor((lt + rt) / 2);
    // console.log("midIdx :", midIdx);
    let mid = arr[midIdx];
    // console.log("mid :", mid);
    if (mid === M) return arr.indexOf(mid) + 1;
    else if (mid > M) rt = midIdx - 1;
    else lt = midIdx + 1;
  }
}

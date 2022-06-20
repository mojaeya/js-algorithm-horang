let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));

function solution(arr) {
  let answer = 0;
  let endTime = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let x of arr) {
    if (endTime <= x[0]) {
      endTime = x[1];
      answer++;
      //   console.log(x);
    }
  }
  return answer;
}

// 탐욕법은 각 단계마다 지금 당장 가장 좋은 방법만을 선택한다. 지금의 선택이 앞으로 남은 선택들에 어떤 영향을 끼칠지 고려하지 않는다는 것이다.

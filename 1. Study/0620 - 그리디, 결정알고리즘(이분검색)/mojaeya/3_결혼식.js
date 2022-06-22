let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

function solution(arr) {
  let timeList = [];

  for (let x of arr) {
    timeList.push([x[0], "S"]);
    timeList.push([x[1], "E"]);
  }

  timeList.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    // 시간이 같을 경우 앞서 넣은 's','e' 중 ASSICI code가 e가 먼저임을 이용해 떠나는 시간이 먼저 오게 오름차순 정렬
    else return a[0] - b[0]; // 기본적으로 도착한 시간을 기준으로 오름차순 정렬
  });

  console.log(timeList);

  let cnt = 0; // 현재 피로연에 있는 인원수
  let maxNum = 0; // 피로연장 동시에 존재하는 최대 인원수

  for (let x of timeList) {
    if (x[1] === "S") cnt++;
    else cnt--;
    maxNum = Math.max(maxNum, cnt);
    console.log(
      "time :",
      x,
      "현재 피로연에 있는 인원수 :",
      cnt,
      "최대 인원수 :",
      maxNum
    );
  }
  return maxNum;
}

/* ### 🐯 6. 격자판 최대합

5\*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
"https://user-images.githubusercontent.com/76654131/168520828-55895e68-c7df-4ce9-9ca7-77da8f8dde6e.png"
N\*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

> 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)  
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
> 출력설명
최대합을 출력합니다.
> 입력예제
5  
10 13 10 12 15  
12 39 30 23 11  
11 25 50 53 15  
19 27 29 37 27  
19 13 30 13 19
> 출력예제
155
*/

function getResult(arr) {
  const N = arr.length;
  const row = new Array(N).fill(0);
  const col = new Array(N).fill(0);
  const cross = new Array(2).fill(0);
  for (let i = 0; i < N; i += 1) {
    cross[0] += arr[i][i];
    cross[1] += arr[N - i - 1][i];
    for (let j = 0; j < N; j += 1) {
      row[i] += arr[i][j];
      col[i] += arr[j][i];
    }
  }
  const result = [...row, ...col, ...cross].reduce((a, b) => Math.max(a, b));
  return result;
}
const arr = [[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(getResult(arr))
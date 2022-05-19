console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));

function solution(N, arr) {
  let count = 1;
  let max = arr[0];
  for (let i = 1; i < N; i++) {
    // if (arr[i] > arr[i - 1] && max < arr[i])
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
  }
  return count;
}

let n = 8;
let arr = [5, 3, 7, 8, 6, 2, 9, 4];

console.log(solution(n, arr));

function solution(n, arr) {
  //   if (n === 1) return 1;
  let dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let answer = Math.max(...dp);

  return answer;
}

// function solution(n, arr){
//     if (n === 1) return 1;
//     let dp = Array.from({length: n}, () => 0);
//     let answer = 0;

//     dp[0] = 1; // dp[i] = "i번째 인덱스에서 끝나는 최장 증가 수열의 길이

//     for (let i=1; i<n; i++){
//       let max = 0;
//       for (let j=i-1; j>=0; j--){
//         if (arr[i] > arr[j] && dp[j] > max) max = dp[j]
//       }
//       dp[i] = max+1;
//       answer = Math.max(answer, dp[i]);
//       //console.log("answer:",answer)
//       //console.log("dp:",dp)
//     }
//     return answer;
//   }

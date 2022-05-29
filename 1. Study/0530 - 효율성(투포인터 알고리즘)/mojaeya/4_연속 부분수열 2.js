// let arr = [1, 3, 1, 2, 3];

// console.log(solution(5, arr));

// function solution(M, arr) {
//   let answer = 0;
//   let sum = 0;
//   let end = 0;
//   for (let st = 0; st < arr.length; st++) {
//     while (end < arr.length) {
//       sum += arr[end];
//       if (sum <= M) {
//         answer++;
//       } else {
//         end = st++;
//         sum = 0;
//         break;
//       }
//       end++;
//     }
//   }
//   return answer;
// }

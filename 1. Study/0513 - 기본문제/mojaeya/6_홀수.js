let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

function solution(arr) {
  let sum = 0;
  for (let x of arr) {
    if (x % 2 === 1) sum += x;
  }
  return sum;
}

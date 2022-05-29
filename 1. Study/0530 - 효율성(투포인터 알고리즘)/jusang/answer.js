const one = (n,arr_1,m,arr_2) => {
  answer = [];
  answer = [...arr_1,...arr_2].sort();
  return answer;
}
// console.log(one(3,
// [1, 3, 5],
// 5,
// [2, 3, 6, 7, 9]))
const two = (n,arr_1,m,arr_2) => {
  const answer = [];
  let pointer_1 = 0; 
  let pointer_2 = 0;
  // 배열 전부 오름차순 정렬
  arr_1.sort();
  arr_2.sort();
  // 포인터가 배열 끝에 도달하면 종료
  while (pointer_1 < n && pointer_2 < m) {
    // 포인터가 가리키는 배열의 요소가 같을 때, 정답에 추가
    if (arr_1[pointer_1]===arr_2[pointer_2]){
      answer.push(arr_1[pointer_1]);
      pointer_1++;
      pointer_2++;
    // 두 배열 모두 오름차순 정렬을 했기 때문에, 포인터가 가리키는 곳 중에 한곳이 더 작으면, 작은 쪽의 포인터 인덱스를 늘려줘야 한다. 
    } else if (arr_1[pointer_1] < arr_2[pointer_2]) {
      pointer_1++;
    // 위의 반대 경우
    } else {
      pointer_2++;
    }
  }
  return answer;
}
//console.log(two(5,[1,3,9,5,2],5,[3,2,5,7,8]));
//https://github.com/WooVictory/Ready-For-Tech-Interview/blob/master/Algorithm/%ED%88%AC%ED%8F%AC%EC%9D%B8%ED%84%B0%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98.md

const three = (n, m, arr) => {
  let answer = 0;
  let start = 0;
  let end = 0;
//   만약 현재 부분합이 m 보다 크면 start 포인터를 늘려주고
//   반대면 end 포인터를 늘려주고 
//   같으면 카운트를 센다 
  while (start < n && end < n){
    const sum = arr.slice(start, end+1).reduce((a,b)=>a+b);
    if (sum === m) {
      answer++;
      start++;
      end++;
    }
    if (sum < m) {
      end++;
    }
    if (sum > m) {
      start++;
    }
  }
  return answer;
};

//console.log(three(8,6,[1,2,1,3,1,1,1,2]));
//https://talking-potato.me/26
const four = (m, arr) => {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
//rt,lt는 0부터 시작이다. 합이 m이하가 되는 부분수열을 다 찾는 것인데, sum > m을 넘지 않는 선에서 부분수열의 개수는 rt-lt가 되는데 0부터 시작이여서 1을 추가한다.
//console.log(four(5, [1, 3, 1, 2, 3]));

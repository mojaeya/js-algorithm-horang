const one = (num) => {
  return (num !== 1) ? num * one(num - 1) : 1;
}
//console.log(one(5))
function two(n, f) {
  let answer = [];
  let flag = 0;
  let dy = Array.from(Array(11), () => Array(30).fill(0));
  let ch = Array.from({length: n + 1}, () => 0);
  let p = Array.from({length: n}, () => 0);
  let b = Array.from({length: n}, () => 0);
  
  function combi(n, r) { 
    //파스칼의 삼각형에 대한 이항계수 값을 사전에 먼저 구해둔다.
    if(dy[n][r] > 0) return dy[n][r];
    if(n === r || r === 0) return 1;
    else return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
  }

  function DFS(L, sum) {
    if(flag) return
    if(L === n && sum === f) {
        answer = p.slice();
        flag = 1;
    }
    else {
      for(let i = 1; i <= n; i++) {
        if(ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum+(b[L] * p[L])); //{1, 3, 3, 1} * {1, 2, 3, 4}, {2, 1, 3, 4} ...
          ch[i] = 0;
        }
      }
    }
  }
  
  for(let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}
//https://choi95.tistory.com/123
//console.log(two(4, 16))
function three(n, m){         
    let answer=[];
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L, s){
      if(L===m){
        answer.push([...tmp]); 
      }
      else{ 
        for(let i=s; i<=n; i++){
          tmp[L] = i; //L지점에서 i를 뽑았다는 기록
          DFS(L+1, i+1);
        }
      }
    }
    DFS(0, 1);
    return answer;
}
//console.log(three(4, 2))
  
function four(n, k, arr, m){
    let cnt = 0;
    let temp = Array.from({length: k}, () => 0);
    function DFS(L, s, sum){
        if (L === k && sum % m === 0) cnt++;
        if (L === k) console.log(temp, sum); // 조합 확인
        else{
            for (let i=s; i<n; i++){
                temp[L] = arr[i]  // 조합 확인용 코드
                DFS(L+1, i+1, sum+arr[i]);
            }
        }
    }
    DFS(0, 0, 0);
    return cnt;
}
const n = 5;
const k = 3;
const arr = [2, 4, 5, 8, 12];
const m = 6;
//console.log(four(n, k, arr, m));


function five(n, r){         
  let answer=[];
  let dy=Array.from(Array(35), ()=>Array(35).fill(0)); //35행 35열 배열 만듦 
                
                //console.log(dy); //표 확인 
  function DFS(n, r){
      if(dy[n][r]>0) return dy[n][r];//이미 기록이 되어있는 값: 재귀해서 다시 계산 할 필요 없음
      if(n===r || r===0) return 1;
      else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
  }
  answer=DFS(n, r);
  return answer;
}
//console.log(five(33, 19));
//console.log(five(5, 3))

//https://velog.io/@rladpwl0512/8-12-%EC%A1%B0%ED%95%A9%EC%9D%98-%EA%B2%BD%EC%9A%B0%EC%88%98%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98

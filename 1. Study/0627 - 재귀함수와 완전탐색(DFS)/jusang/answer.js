const one = (len, arr) => {
  const total = arr.reduce((a, c) => a + c);
  let answer="NO", isFinished=false;
  function DFS(L, sum){
    if(isFinished) return;
    if ( L===len ) { // 재귀 끝까지 돌았을 때
      console.log(sum, total-sum);
      if( (total-sum)===sum ){ // 부분집합의 합과 나머지의 합들이 같을 때
        answer="YES";
        isFinished = true; // YES인 경우를 찾았으면 재귀 멈추도록 하는 flag
      }
    } else {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0, 0);
  return answer;
};
//console.log(one(6, [1, 3, 5, 6, 7, 10]));
const two = (max, arr) => {
  let tempArr = [];
  const len = arr.length;
  function DFS(L, sum) {
    if (L===len) {
      if (max > sum) tempArr.push(sum);
    } else {
      DFS(L+1, sum+arr[L]);
      DFS(L+1, sum);
    }
  }
  DFS(0, 0);
  return Math.max(...tempArr);
};

//console.log(two(259, [81, 58, 42, 33, 61]));
const three = (len, limitTime, arr) => {
  let tempArr = [];
  function DFS(L, sum, times) {
    if (L === len) {
      if (limitTime >= times) tempArr.push(sum);
    } else {
      DFS(L+1, sum+arr[L][0], times+arr[L][1]);
      DFS(L+1, sum, times);
    }
  }
  DFS(0, 0, 0);
  return Math.max(...tempArr);
};
// console.log(three(5, 20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]));
const four = (num, pick) => {
  const temp = Array.from({ length: pick }, () => 0);
	const answer = [];
	const DFS = L => {
		if (L === pick) {
			answer.push([...temp]);
		} else {
			for (let i = 1; i <= num; i++) {
				temp[L] = i;
				DFS(L + 1);
			}
		}
	};

	DFS(0);
  return answer;
};
//console.log(four(3, 2));
function five(coins, price) {
  let answer = price;
  function dfs(L, sum) {
    if (sum > price) return;
    console.log('L:' + L, 'sum:' + sum);
    if (sum === price) {
      answer = Math.min(answer, L)
      return;
    } else {
      for(let i=0;i<coins.length; i++) {
        dfs(L+1, sum+coins[i])
      }
    }
  }
  dfs(0,0)
  return answer;
}
//console.log(five([1,2,5], 15));
const six = (numbers, pick) => {
  let check = Array.from({length:numbers.length},() => 0);
  let answer = [];
  let count = 0;
  function dfs(level, result) {
    if (level === pick) {
      count++
      answer.push(result)
      return;
    } else {
      for(let i = 0; i < numbers.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          dfs(level + 1, result + numbers[i]);
          check[i] = 0;
        }
      }
    }

  }
  dfs(0,'')
  return [answer, count]
};
console.log(six([3, 6, 9],2));

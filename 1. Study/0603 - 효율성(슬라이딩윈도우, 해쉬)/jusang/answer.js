// 슬라이딩 윈도우로 품
const one = (n, windowSize, arr) => {
  let curSum = 0; // 현재 윈도우의 합
  let maxSum = 0; // 최대매출액 === 윈도우의 합의 최대값 
  for (let i = 0; i < n- windowSize + 1; i++) {
    if (i===0) {
      let sum = 0;
      for (let i=0; i<windowSize; i++) {
        sum += arr[i];
      }
      curSum = sum;
    } else {
      curSum = curSum - arr[i-1] + arr[i+ windowSize-1];
    }
    if(curSum > maxSum) maxSum = curSum;
  }
  return maxSum;
};

//console.log(one(10, 3,[12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
const two = (arr) => {
  const hash = {};
  let max = 0;
  let answer = '';
  arr.forEach(student => {
    if (hash[student]) {
      hash[student] += 1;
    } else {
      hash[student] = 1;
    }
  });
  Object.keys(hash).forEach(key => {
    if(hash[key] > max) {
      max = hash[key];
      answer = key;
    }
  });
  return answer;
};

//console.log(two(['B','A','C','B','A','C','C','A','C','C','B','D','E','D','E']));
const three = (str_1, str_2) => {
  const hash_1 = {};
  const hash_2 = {};
  // 해쉬를 두개만들어서 그 두개를 비교해서 같으면 yes 아니면 no 
  str_1.split("").sort().forEach(char => {
    if (hash_1[char]) {
      hash_1[char] += 1;
    } else {
      hash_1[char] = 1;
    }
  });
  str_2.split("").sort().forEach(char => {
    if (hash_2[char]) {
      hash_2[char] += 1;
    } else {
      hash_2[char] = 1;
    }
  });
  console.log(hash_1, hash_2);
  return JSON.stringify(hash_1) === JSON.stringify(hash_2) ? 'YES' : 'NO';
};

//console.log(three('AbaAeCe', 'baeeACA'));
//console.log(three('abaCC', 'Caaab'));

// 해쉬 + 슬라이딩 윈도우로 품 
const four = (word, t) => {
  const hash_part = {};
  const hash_t = {};
  const wordArr = word.split('');
  const len = word.length;
  const windowSize = t.length;
  let count = 0;
  let curStr = ''; // 부분문자열
  // 부분문자열로 만든 hash와 t의 hash가 같으면 count 증가 
  for (let i = 0; i < len - windowSize + 1; i++) {
    if (i===0) {
      let tempStr = ''; // 임시문자열
      for (let i=0; i<windowSize; i++) {
        tempStr += wordArr[i];
      }
      curStr = tempStr;
    } else {
      // bac => aca , b를 빼주고 a를 더해준다
      curStr = curStr.slice(1) + wordArr[i + windowSize - 1];
    }
    console.log(curStr);
    if (isHashSame(curStr, t)) {
      count++;
    }
  }
  return count;
};
const isHashSame = (str_1, str_2) => {
  const hash_1 = {};
  const hash_2 = {};
  // 해쉬를 두개만들어서 그 두개를 비교해서 같으면 yes 아니면 no 
  str_1.split("").sort().forEach(char => {
    if (hash_1[char]) {
      hash_1[char] += 1;
    } else {
      hash_1[char] = 1;
    }
  });
  str_2.split("").sort().forEach(char => {
    if (hash_2[char]) {
      hash_2[char] += 1;
    } else {
      hash_2[char] = 1;
    }
  });
  return JSON.stringify(hash_1) === JSON.stringify(hash_2);
};
//console.log(four('bacaAacba', 'abc'));

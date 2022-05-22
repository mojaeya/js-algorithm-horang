const one = str => {
  return str.toLowerCase()===str.toLowerCase().split("").reverse().join("") ? "YES" : "NO";
}
//console.log(one('gooG'))

const two = str => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const eng = /^[a-zA-Z]*$/;
  if(korean.test(str)) return;
  let strArr = str.split("");
  const newStr = strArr.map(cur => {
    return !eng.test(cur) ? "" : cur;
  }).join('').toLowerCase();
  console.log(newStr);
  return newStr===newStr.split("").reverse().join("") ? "YES" : "NO";
}
//console.log(two("found7, time: study; Yduts; emit, 7Dnuof"))

const three = str => {
  const strArr = str.split("").filter(cur => !isNaN(parseInt(cur, 10)));
  console.log(strArr);
  return (strArr[0]!=="0") ? strArr.join("") : strArr.slice(1).join("");
}
//console.log(three("g0en2T0s8eSoft"))

const four = (str, char) => {
  let answer = 0;
  let search_cnt = 0;
  return str.split("").map((c,i,arr)=>{
    search_cnt = 0;
    answer = 0;
    if(c===char){
      return answer;
    }
    answer++;
    while(i>0 && ![arr[i-1-search_cnt], arr[i+1+search_cnt]].includes(char)) {
      answer++;
      search_cnt++;
    }
    return answer;
  }).join("");
}

//console.log(four("teachermode", "e"))

const five = str => {
  let isRepeated = false;
  let repeat_cnt = 1;
  let tempStr, answer = "";
  const strArr = str.split("");
  strArr.forEach((cur, idx, arr) => {
    isRepeated = (idx < arr.length-1) ? cur === arr[idx+1] : cur === arr[idx-1];
    if (!isRepeated) {
      if (repeat_cnt !== 1) {
        answer += tempStr;
      } else {
        answer += cur;
      }
      tempStr = "";
      repeat_cnt = 1;
    } else {
      if (repeat_cnt === 1) answer += cur;
      repeat_cnt++;
      tempStr = repeat_cnt;
    }
    console.log(idx, answer);
  });
  return answer;
}
//console.log(five("KKHSSSSSSSE"))
const banana = str => str.replace(/A/gi,'#');
//console.log(banana('BANANA'));

const howMany = (str, char) => {
  let cnt=0;
  for(let i of str) {
    if(i===char) cnt++;
  }
  return cnt;
}
// const word = "COMPUTERPROGRAMMING";
// const alphabet = "R";
// console.log(howMany(word, alphabet));

const howManyUpper = str => {
  let cnt = 0;
  for(let i of str) {
    if(i===i.toUpperCase()) cnt++;
  }
  return cnt;
}
const toUpper = str => str.toUpperCase();
const lowerToUpperUpperToLower = str => {
  let ret = "";
  for(let i of str) {
    if(i===i.toUpperCase()) {
      ret += i.toLowerCase();
    } else if (i===i.toLowerCase()) {
      ret += i.toUpperCase();
    }
  }
  return ret;
}
// const word = "JavaScriptAlgorithmRocketStudy";
// console.log(howManyUpper(word));
// console.log(toUpper(word));
// console.log(lowerToUpperUpperToLower(word));

const four = arr => {
  let answer = "";
  arr.forEach(str => {
    if (str.length > answer.length) answer = str;
  });
  return answer;
};

// console.log(four(["teacher", "time", 
// "student",
// "beautiful",
// "good"]));

const five = str => {
  let answer = "";
  answer = (str.length % 2 == 0) ? str.slice(str.length/2-1,str.length/2+1) : str.slice(Math.ceil(str.length/2)-1, Math.ceil(str.length/2));
  return answer;
}

// console.log(five("study"));
// console.log(five("stoo"));

const six = str => {
  const strArr = str.split('');
  const set = new Set(strArr);
  const uniqueArr = [...set];
  return uniqueArr.join('');
}

//console.log(six("ksekkset"));

const seven = strArr => {
  const set = new Set(strArr);
  const uniqueArr = [...set];
  return uniqueArr;
}

// console.log(seven(["html"
// ,"css"
// ,"html"
// ,"css"
// ,"javascript"]));
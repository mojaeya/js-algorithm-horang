console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

function solution(str1, str2) {
  let answer = "YES";
  let Hash = new Map();
  for (let x of str1) {
    if (Hash.has(x)) Hash.set(x, Hash.get(x) + 1);
    else Hash.set(x, 1);
  }

  // console.log("Hash:", Hash);

  for (let x of str2) {
    if (!Hash.has(x) || Hash.get(x) === 0) return "NO";
    Hash.set(x, Hash.get(x) - 1);
    // console.log(x, Hash);
  }
  return answer;
}

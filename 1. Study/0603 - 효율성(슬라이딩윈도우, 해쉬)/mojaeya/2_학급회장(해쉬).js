console.log(solution("BACBACCACCBDEDE"));

function solution(votes) {
  let answer;
  let vote = new Map();
  let maxVote = Number.MIN_SAFE_INTEGER;

  for (let x of votes) {
    if (vote.has(x)) vote.set(x, vote.get(x) + 1);
    else vote.set(x, 1);
  }
  // console.log(vote);
  // Map.prototype.forEach(value, key, map)
  vote.forEach((numOfVote, candidate) => {
    if (numOfVote > maxVote) {
      maxVote = numOfVote;
      answer = candidate;
    }
  });
  return answer;
}

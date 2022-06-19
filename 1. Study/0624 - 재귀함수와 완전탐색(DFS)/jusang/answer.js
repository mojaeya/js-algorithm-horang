const one = (arr) => {
  //x값으로 정렬
  arr.sort((a, b) => {
    //x 같으면 y 값으로 정렬
    if (a[0] - b[0] === 0) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return arr;
};

// console.log(
//   one([
//     [2, 7],
//     [1, 3],
//     [1, 2],
//     [2, 5],
//     [3, 6]
//   ])
// );
const two = (arr) => {
  let answer = 0;
  let last = 0;
  arr.sort((a, b) => a[1] - b[1]);
  arr.forEach((cur) => {
    if (cur[0] >= last) {
      last = cur[1];
      console.log(last);
      answer++;
    }
  });
  return answer;
};
// console.log(
//   two([
//     [1, 4],
//     [2, 3],
//     [3, 5],
//     [4, 6],
//     [5, 7]
//   ])
// );

const three = (arr) => {};
// console.log(
//   three([
//     [14, 18],
//     [12, 15],
//     [15, 20],
//     [20, 30],
//     [5, 14]
//   ])
// );
const numArr = [23, 87, 65, 12, 57, 32, 99, 81].sort((a, b) => a - b);
let cnt = 0;

const four = (search, arr) => {
  const len = arr.length;
  let mid = len / 2;
  cnt++;
  console.log(arr, cnt);
  if (arr[mid] === search) {
    return arr.indexOf(search) + 1;
  } else if (arr[mid] > search) {
    return four(search, arr.slice(0, mid));
  } else if (arr[mid] < search) {
    return four(search, arr.slice(mid));
  }
};

//console.log(four(32, numArr));

function count(songs, mid) {
  let sum = 0;
  let cnt = 1;
  for (let x of songs) {
    sum += x;
    if (sum > mid) {
      cnt++;
      sum = x;
    }
  }
  return cnt;
}

function five(m, songs) {
  let answer;
  let l = Math.max(...songs);
  let r = songs.reduce((sum, v) => sum + v, 0);
  while (l <= r) {
    let mid = parseInt((l + r) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      r = mid - 1;
    } else l = mid + 1;
  }
  return answer;
}

//console.log(five(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

const six = () => {};

console.log(six());

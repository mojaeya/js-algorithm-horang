const one = (arr) => {
  const length = arr.length;
  let minIndex, temp, i, j;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      // 최솟값의 위치를 찾음
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex]; // 최솟값을 저장
    arr[minIndex] = arr[i];
    arr[i] = temp; // 최솟값을 제일 앞으로 보냄
  }
  return arr;
};

//console.log(one([13, 5, 11, 7, 23, 15]));

const two = (arr) => {
  const length = arr.length;
  let i, j, temp;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//console.log(two([13, 5, 11, 7, 23, 15]));

const three = (arr) => {
  arr.sort();
  let i, minusLastIndex;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= 0) {
      minusLastIndex = i - 1;
      break;
    }
  }
  const plusSorted = arr.slice(minusLastIndex + 1);
  const minusSorted = arr.slice(0, minusLastIndex + 1);
  minusSorted.sort((a, b) => b - a);

  return [...minusSorted, ...plusSorted];
};

//console.log(three([1, 2, 3, -3, -2, 5, 6, -6]));

const insertionSort = (arr) => {
  let i = 1,
    j,
    temp;
  for (i; i < arr.length; i++) {
    temp = arr[i]; // 새로운 숫자를 선택함
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
      arr[j + 1] = arr[j]; // 한 칸씩 뒤로 밀어낸다
    }
    arr[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return arr;
};
//console.log(insertionSort([5, 6, 1, 2, 4, 3]));

const five = (cLen, wLen, works) => {
  const queue = [];
  works.forEach((cur, idx) => {
    if (queue.includes(cur)) {
      queue.splice(queue.indexOf(cur), 1);
    }
    if (!queue.includes(cur) && cLen === queue.length) {
      queue.pop();
    }
    queue.unshift(cur);
  });
  return queue;
};
//console.log(five(5, 9, [1, 2, 3, 6, 2, 3, 5, 7]));

const six = (len, arr) => {
  const copyArr = [...arr].sort();
  const answerArr = arr.filter((v, i) => {
    return v !== copyArr[i];
  });
  const indexArr = answerArr.map((cur) => arr.indexOf(cur) + 1);
  return indexArr;
};
//console.log(six(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));

console.log(selectionSort([13, 5, 11, 7, 23, 15]));

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // 최솟값의 위치를 찾음
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    min = array[minIndex]; // 최솟값을 저장
    array[minIndex] = array[i]; // ex) 첫번째 턴의 경우 : 5가 제일 작기 떄문에, array[1] = array[0]
    array[i] = min; // 최솟값을 제일 앞으로 보냄
  }
  return array;
}

// 선택 정렬은 배열을 처음부터 훑어서 가작 작은 수를 제일 앞에 가져다 놓습니다.
// 그 다음, 다시 배열을 훑어서 두 번째로 작은 수를 두 번째 칸에 가져다 놓습니다.
// 계속 반복해서 끝까지 정렬합니다.
// 성능 안좋으나, 코드 간단하고 작은수에서 효과적

console.log(bubbleSort([13, 5, 11, 7, 23, 15]));

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      // array.length-1-i인 이유는 각 회전이 끝날 때마다 마지막 데이터의 정렬이 끝나기 때문에 i를 빼줘야한다.
      if (array[j] > array[j + 1]) {
        max = array[j];
        array[j] = array[j + 1];
        array[j + 1] = max;
      }
    }
  }
  return array;
}

//버블정렬 : 한 과정에 겨우 두 수의 위치를 서로 바꾸는 작업밖에 못합
// 성능 제일 구리고, 알고리즘 교육용으로밖에 안씀

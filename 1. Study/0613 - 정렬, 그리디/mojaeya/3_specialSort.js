console.log(specialSort([1, 2, 3, -3, -2, 5, 6, -6]));

function specialSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > 0 && array[j] > array[j + 1]) {
        // array[j]>0 => 음수는 입력 순서 그대로 정렬되어야 하기 떄문.
        max = array[j];
        array[j] = array[j + 1];
        array[j + 1] = max;
      }
    }
    // console.log(array);
  }
  return array;
}

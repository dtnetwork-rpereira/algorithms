function Find(arsenal, valueToFound, property = "price") {
  let start = 0;
  let end = arsenal.length;

  while (end > start) {
    let middle = parseInt((start + end) / 2);
    let middleItem = arsenal[middle];

    if (middleItem[property] == valueToFound) {
      return middle;
    }

    if (valueToFound < middleItem[property]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

function Sort(arsenal, start, end, property = "price") {
  let newPivotPosition = start;

  const endOfArray = end - 1;
  const pivot = arsenal[endOfArray];

  for (let idx = newPivotPosition; idx < endOfArray; idx++) {
    const currentItem = arsenal[idx];

    if (currentItem[property] < pivot[property]) {
      [arsenal[newPivotPosition], arsenal[idx]] = [
        arsenal[idx],
        arsenal[newPivotPosition],
      ];
      newPivotPosition++;
    }
  }

  [arsenal[endOfArray], arsenal[newPivotPosition]] = [
    arsenal[newPivotPosition],
    arsenal[endOfArray],
  ];

  return newPivotPosition;
}

function QuickSort(arsenal, start, end, property = "price") {
  if (end - start > 1) {
    const pivotIndex = Sort(arsenal, start, end, property);

    QuickSort(arsenal, pivotIndex + 1, end, property);
    QuickSort(arsenal, start, pivotIndex, property);
  }
}

function BinarySearch(arsenal, valueToFound, property = "price") {
  const response = Find(arsenal, valueToFound, property);
  return response;
}

export { BinarySearch, QuickSort };

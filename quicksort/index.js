function SwapItems(gunsArray, indexOne, indexTwo) {
  [gunsArray[indexOne], gunsArray[indexTwo]] = [
    gunsArray[indexTwo],
    gunsArray[indexOne],
  ];
}

function Pivot(productsToSort = [], start = 0, end = productsToSort.length) {
  const endOfArray = end - 1;

  const pivot = productsToSort[endOfArray];
  let newPivotIndex = start;

  for (let i = start; i < endOfArray; i++) {
    const currentProduct = productsToSort[i];

    if (currentProduct.price < pivot.price) {
      if (i != newPivotIndex) {
        SwapItems(productsToSort, newPivotIndex, i);
      }

      newPivotIndex++;
    }
  }

  SwapItems(productsToSort, newPivotIndex, endOfArray);
  return newPivotIndex;
}

function Sort(gunsToSort, start, end) {
  if (end - start > 1) {
    const newPivotPosition = Pivot(gunsToSort, start, end);

    Sort(gunsToSort, start, newPivotPosition);
    Sort(gunsToSort, newPivotPosition + 1, end);
  }
}

function QuickSort(gunsToSort, start = 0, end = gunsToSort.length) {
  Sort(gunsToSort, start, end);

  return gunsToSort;
}

export { QuickSort, Pivot };

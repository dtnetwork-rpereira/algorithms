function SwapItems(gunsArray, indexOne, indexTwo) {
  [gunsArray[indexOne], gunsArray[indexTwo]] = [
    gunsArray[indexTwo],
    gunsArray[indexOne],
  ];
}

function Pivot(
  productsToSort = [],
  start = 0,
  end = productsToSort.length,
  property = "price"
) {
  const endOfArray = end - 1;

  const pivot = productsToSort[endOfArray];
  let newPivotIndex = start;

  for (let i = start; i < endOfArray; i++) {
    const currentProduct = productsToSort[i];

    if (currentProduct[property] < pivot[property]) {
      SwapItems(productsToSort, newPivotIndex, i);

      newPivotIndex++;
    }
  }

  SwapItems(productsToSort, newPivotIndex, endOfArray);
  return newPivotIndex;
}

function Sort(gunsToSort, start, end, property) {
  if (end - start > 1) {
    const newPivotPosition = Pivot(gunsToSort, start, end, property);

    Sort(gunsToSort, start, newPivotPosition, property);
    Sort(gunsToSort, newPivotPosition + 1, end, property);
  }
}

function QuickSort(
  gunsToSort,
  start = 0,
  end = gunsToSort.length,
  property = "price"
) {
  Sort(gunsToSort, start, end, property);

  return gunsToSort;
}

export { QuickSort, Pivot };

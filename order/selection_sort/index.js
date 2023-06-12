const steps = [];

function SwapItems(gunsArray, indexOne, indexTwo) {
  [gunsArray[indexOne], gunsArray[indexTwo]] = [
    gunsArray[indexTwo],
    gunsArray[indexOne],
  ];

  steps.push({
    from: indexOne,
    to: indexTwo,
  });
}

function GunSort(gunsToSort = []) {
  for (let index = 1; index < gunsToSort.length; index++) {
    let previousIndex = index - 1;
    let currentIndex = index;

    while (
      previousIndex >= 0 &&
      gunsToSort[currentIndex].price < gunsToSort[previousIndex].price
    ) {
      SwapItems(gunsToSort, currentIndex, previousIndex);

      currentIndex--;
      previousIndex--;
    }
  }

  return gunsToSort;
}

export { GunSort, steps };

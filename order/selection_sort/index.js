let steps = [];

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

function FindCheaperGun(gunsToSort, startPosition = 0, endPosition) {
  let cheapGunIndex;

  for (let index = startPosition; index < endPosition; index++) {
    if (
      cheapGunIndex == undefined ||
      gunsToSort[index].price < gunsToSort[cheapGunIndex].price
    ) {
      cheapGunIndex = index;
    }
  }

  steps.push(`Found in position ${cheapGunIndex}`);

  return cheapGunIndex;
}

function GunSort(gunsToSort = []) {
  const maxArsenalSize = gunsToSort.length;
  steps = [];

  for (let index = 0; index < maxArsenalSize - 1; index++) {
    steps.push(`Position ${index}`);
    steps.push("Searching");
    const cheapGunIndex = FindCheaperGun(gunsToSort, index, maxArsenalSize);
    SwapItems(gunsToSort, cheapGunIndex, index);
  }

  return gunsToSort;
}

export { GunSort, steps };

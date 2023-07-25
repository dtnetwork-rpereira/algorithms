function SwapItems(gunsArray, indexOne, indexTwo) {
  [gunsArray[indexOne], gunsArray[indexTwo]] = [
    gunsArray[indexTwo],
    gunsArray[indexOne],
  ];
}

function Pivot(gunsToSort = [], start = 0, end = gunsToSort.length) {
  const pivotGunIndex = end - 1;

  const pivot = gunsToSort[pivotGunIndex];
  let cheaperProducts = 0;

  for (let i = start; i < pivotGunIndex; i++) {
    const gun = gunsToSort[i];

    if (gun.price < pivot.price) {
      if (i != cheaperProducts) {
        SwapItems(gunsToSort, cheaperProducts, i);
      }

      cheaperProducts++;
    }
  }

  SwapItems(gunsToSort, cheaperProducts, pivotGunIndex);

  return gunsToSort;
}

export { Pivot };

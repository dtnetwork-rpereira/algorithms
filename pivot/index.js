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

function Pivot(gunsToSort = [], start = 0, end = gunsToSort.length) {
  const pivotGunIndex = end - 1;

  const pivot = gunsToSort[pivotGunIndex];
  let cheaperProducts = 0;
  let organizedArray = [...gunsToSort];

  for (let i = start; i < end; i++) {
    const gun = gunsToSort[i];

    if (gun.price < pivot.price) {
      if (i != cheaperProducts) {
        SwapItems(organizedArray, cheaperProducts, i);
      }

      cheaperProducts++;
    }
  }

  SwapItems(organizedArray, cheaperProducts, pivotGunIndex);

  return organizedArray;
}

export { Pivot, steps };

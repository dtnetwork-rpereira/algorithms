let steps = [];

function GunSort(firstArsenal = [], secondArsenal = []) {
  steps = [];

  const totalItemSize = firstArsenal.length + secondArsenal.length;

  let [indexFirstArsenal, indexSecondArsenal] = [0, 0];
  let sortedArsenal = [];
  let done = false;

  while (!done) {
    if (sortedArsenal.length == totalItemSize) {
      steps.push("Done");
      done = true;
    } else {
      const firstGun = firstArsenal[indexFirstArsenal];
      const secondGun = secondArsenal[indexSecondArsenal];

      if (!firstGun || !secondGun) {
        if (!firstGun) {
          sortedArsenal = sortedArsenal.concat(secondGun);
        } else if (!secondGun) {
          sortedArsenal = sortedArsenal.concat(firstGun);
        }
      } else if (firstGun.price < secondGun.price) {
        steps.push("First gun is cheaper");
        sortedArsenal.push(firstGun);
        indexFirstArsenal++;
      } else if (firstGun.price > secondGun.price) {
        steps.push("Second gun is cheaper");
        sortedArsenal.push(secondGun);
        indexSecondArsenal++;
      } else {
        if (firstGun.name < secondGun.name) {
          steps.push("First gun name comes first");
          sortedArsenal.push(firstGun);
          indexFirstArsenal++;
        } else {
          steps.push("Second gun name comes first");
          sortedArsenal.push(secondGun);
          indexSecondArsenal++;
        }
      }
    }
  }

  return sortedArsenal;
}

export { GunSort, steps };

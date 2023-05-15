import { Guns } from '../guns.mjs';

function mergeArrays(arrayOne, arrayTwo) {
  let newArray = [];

  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;
  
  while (arrayOneIndex < arrayOne.length || arrayTwoIndex < arrayTwo.length) {
    const item1 = arrayOne[arrayOneIndex];
    const item2 = arrayTwo[arrayTwoIndex];

    /* console.log('Array 1:', arrayOneIndex, arrayOne.length);
    console.log('Array 2:', arrayTwoIndex, arrayTwo.length); */

    if (!item1) {
      newArray.push(item2);
      arrayTwoIndex++;

      /* newArray = [...newArray, ...arrayTwo.slice(arrayTwoIndex)]
      arrayTwoIndex = arrayTwo.length; */
    } else if (!item2) {
      newArray.push(item1);
      arrayOneIndex++;

      /* newArray = [...newArray, ...arrayOne.slice(arrayOneIndex)];
      arrayOneIndex = arrayOne.length; */
    } else {
      if (item1.price < item2.price) {
        newArray.push(item1);
        arrayOneIndex++;
      } else if (item1.price > item2.price) {
        newArray.push(item2);
        arrayTwoIndex++;
      }
    }
  }

  return newArray;
}

function sliceArray(gunsArray) {
  const slicedArrays = [];
  let lowerIndex = 0;

  for (let index = 0; index < gunsArray.length; index++) {
    const currentItem = gunsArray[index];
    const nextItem = gunsArray[index + 1];

    if (!nextItem || currentItem.price > nextItem.price) {
      slicedArrays.push(gunsArray.slice(lowerIndex, index + 1));
      lowerIndex = index + 1;
    }
  }

  return slicedArrays;
}

const gunGroupOne = new Guns();
gunGroupOne.add({ name: '.38', price: 100 });
gunGroupOne.add({ name: 'Bazuka', price: 150 });
gunGroupOne.add({ name: 'AK-47', price: 300 });
// gunGroupOne.add({ name: 'Minigun', price: 999 });

const gunGroupTwo = new Guns();
gunGroupTwo.add({ name: 'Shotgun', price: 50 });
gunGroupTwo.add({ name: 'Grenades (5x)', price: 250 });
gunGroupTwo.add({ name: 'Shield', price: 259.99 });
gunGroupTwo.add({ name: 'Krauser\'s Knife', price: 301 });

// const gunGroupThree = new Guns();
// gunGroupThree.add({ name: 'Common Knife', price: 67.05 });

/* const arsenalMerged = mergeArrays(gunGroupOne.arsenal, gunGroupTwo.arsenal);

for (const gun of arsenalMerged) {
  console.log(`${gun.name}: $${gun.price}`);
} */

const slicedArrays = sliceArray([...gunGroupOne.arsenal, ...gunGroupTwo.arsenal]);

console.log(mergeArrays(...slicedArrays));

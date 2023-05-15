import { Guns } from '../guns.mjs';
// const { Guns } = pkg;

function mergeArrays(arrayOne, arrayTwo) {
  const newArray = [];
  const done = false;

  let arrayOneIndex = 0;
  let arrayTwoIndex = 0;
  let counter = 0;
  
  while (!done) {
    if (arrayOne.length + arrayTwo.length == counter) done = true;

    const item1 = arrayOne[arrayOneIndex];
    const item2 = arrayTwo[arrayTwoIndex];

    if (!item1) {
      newArray.push(item2);
      arrayTwoIndex++;
    } else if (!item2) {
      newArray.push(item1);
      arrayOneIndex++;
    } else {
      if (item1.price < item2.price) {
        newArray.push(item1);
        arrayOneIndex++;
      } else {
        newArray.push(item2);
        arrayTwoIndex++;
      }
    }

    counter++;
  }

  return newArray;
}

const gunGroupOne = new Guns();
gunGroupOne.add({ name: '.38', price: 100 });
gunGroupOne.add({ name: 'Bazuka', price: 150 });
gunGroupOne.add({ name: 'AK-47', price: 300 });

const gunGroupTwo = new Guns();
gunGroupTwo.add({ name: 'Shotgun', price: 50 });
gunGroupTwo.add({ name: 'Grenades (5x)', price: 250 });
gunGroupTwo.add({ name: 'Shield', price: 259.99 });
gunGroupTwo.add({ name: 'Krauser\'s Knife', price: 301 });

console.log(mergeArrays(gunGroupOne, gunGroupTwo));

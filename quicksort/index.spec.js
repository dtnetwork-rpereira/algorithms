import { describe, it } from "node:test";
import assert from "node:assert";

import { QuickSort } from "./index.js";
import { Guns } from "./guns.js";

describe("Quick Sort", () => {
  it("should order", () => {
    const gun = new Guns();
    gun.add({ name: "AK-48", price: 20.0 });
    gun.add({ name: "Molotov", price: 10 });
    gun.add({ name: "Hammer", price: 5.73 });
    gun.add({ name: "Butterfly Knife", price: 7.01 });
    gun.add({ name: "Minigun", price: 99.9 });
    gun.add({ name: "ExtraMinigun", price: 79.9 });
    gun.add({ name: "AK-46", price: 19.99 });
    gun.add({ name: "Electric Bow", price: 69.9 });

    // const mockedSort = [
    //   { name: "AK-48", price: 20.0 },
    //   { name: "Molotov", price: 10 },
    //   { name: "Hammer", price: 5.73 },
    //   { name: "Butterfly Knife", price: 7.01 },
    //   { name: "AK-46", price: 19.99 },
    //   { name: "Electric Bow", price: 69.9 },
    //   { name: "Minigun", price: 99.9 },
    //   { name: "ExtraMinigun", price: 79.9 },
    // ];

    const mockedSort = [
      { name: "Hammer", price: 5.73 },
      { name: "Butterfly Knife", price: 7.01 },
      { name: "Molotov", price: 10 },
      { name: "AK-46", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "Electric Bow", price: 69.9 },
      { name: "ExtraMinigun", price: 79.9 },
      { name: "Minigun", price: 99.9 },
    ];

    const sortedArray = QuickSort(gun.arsenal, 0, gun.arsenal.length);
    assert.deepEqual(sortedArray, mockedSort);
  });

  /* it("should order half array", () => {
    const gun = new Guns();
    gun.add({ name: "AK-48", price: 20.0 });
    gun.add({ name: "Molotov", price: 10 });
    gun.add({ name: "Hammer", price: 5.73 });
    gun.add({ name: "Butterfly Knife", price: 7.01 });
    gun.add({ name: "Minigun", price: 99.9 });
    gun.add({ name: "ExtraMinigun", price: 79.9 });
    gun.add({ name: "AK-46", price: 19.99 });
    gun.add({ name: "Electric Bow", price: 69.9 });

    const mockedSort = [
      { name: "Hammer", price: 5.73 },
      { name: "Butterfly Knife", price: 7.01 },
      { name: "AK-48", price: 20.0 },
      { name: "Molotov", price: 10 },
      { name: "Minigun", price: 99.9 },
      { name: "ExtraMinigun", price: 79.9 },
      { name: "AK-46", price: 19.99 },
      { name: "Electric Bow", price: 69.9 },
    ];

    const sortedArray = QuickSort(gun.arsenal, 0, 4);
    assert.deepEqual(sortedArray, mockedSort);
  }); */
});

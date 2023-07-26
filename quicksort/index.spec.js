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

  it("should order in alphabetic order", () => {
    const gun = new Guns();
    gun.add({ name: "AK-48", price: 20.0 });
    gun.add({ name: "Molotov", price: 10 });
    gun.add({ name: "Hammer", price: 5.73 });
    gun.add({ name: "Butterfly Knife", price: 7.01 });
    gun.add({ name: "Dagger Knife", price: 7.01 });
    gun.add({ name: "Bread Knife", price: 7.01 });
    gun.add({ name: "Minigun", price: 99.9 });
    gun.add({ name: "ExtraMinigun", price: 79.9 });
    gun.add({ name: "AK-46", price: 19.99 });
    gun.add({ name: "Electric Bow", price: 69.9 });

    const mockedSort = [
      { name: "AK-46", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "Bread Knife", price: 7.01 },
      { name: "Butterfly Knife", price: 7.01 },
      { name: "Dagger Knife", price: 7.01 },
      { name: "Electric Bow", price: 69.9 },
      { name: "ExtraMinigun", price: 79.9 },
      { name: "Hammer", price: 5.73 },
      { name: "Minigun", price: 99.9 },
      { name: "Molotov", price: 10 },
    ];

    const sortedArray = QuickSort(gun.arsenal, 0, undefined, "name");
    assert.deepEqual(sortedArray, mockedSort);
  });
});

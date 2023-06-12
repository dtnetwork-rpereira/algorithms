import { describe, it } from "node:test";
import assert from "node:assert";

import { GunSort, steps } from "./index.js";
import { Guns } from "../guns.js";

describe("Selection Sort", () => {
  it("should order", () => {
    const gun = new Guns();
    gun.add({ name: "AK-48", price: 20.0 });
    gun.add({ name: "Molotov", price: 10 });
    gun.add({ name: "Minigun", price: 99.99 });
    gun.add({ name: "AK-46", price: 19.99 });

    const sortedArray = GunSort(gun.arsenal);
    const mockedSort = [
      { name: "Molotov", price: 10 },
      { name: "AK-46", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "Minigun", price: 99.99 },
    ];

    const mockedSteps = [
      "Position 1",
      { from: 1, to: 0 },
      "Position 2",
      "Position 3",
      { from: 3, to: 2 },
      { from: 2, to: 1 },
    ];

    assert.deepEqual(mockedSort, sortedArray);
    assert.deepEqual(mockedSteps, steps);
  });
});

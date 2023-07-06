import { describe, it } from "node:test";
import assert from "node:assert";

import { GunSort, steps } from "./index.js";
import { Guns } from "../guns.js";

describe("Merge Sort", () => {
  it("should order", () => {
    const gunsOne = new Guns();
    gunsOne.add({ name: "Molotov", price: 10 });
    gunsOne.add({ name: "Excalibur", price: 19.99 });
    gunsOne.add({ name: "AK-48", price: 20.0 });
    gunsOne.add({ name: "Minigun", price: 99.99 });

    const gunsTwo = new Guns();
    gunsTwo.add({ name: "Hand Grenade", price: 9.99 });
    gunsTwo.add({ name: "AK-46", price: 19.99 });
    gunsTwo.add({ name: "AK-45", price: 22.2 });
    gunsTwo.add({ name: "Minishark", price: 999.99 });

    const sortedArray = GunSort(gunsOne.arsenal, gunsTwo.arsenal);
    const mockedSort = [
      { name: "Hand Grenade", price: 9.99 },
      { name: "Molotov", price: 10 },
      { name: "AK-46", price: 19.99 },
      { name: "Excalibur", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "AK-45", price: 22.2 },
      { name: "Minigun", price: 99.99 },
      { name: "Minishark", price: 999.99 },
    ];

    assert.deepEqual(sortedArray, mockedSort);
  });

  it("should order with empty array", () => {
    const gunsOne = new Guns();
    const gunsTwo = new Guns();

    const sortedArray = GunSort(gunsOne.arsenal, gunsTwo.arsenal);
    const mockedSort = [];

    assert.deepEqual(sortedArray, mockedSort);
  });

  it("should save steps history", () => {
    const gunsOne = new Guns();
    gunsOne.add({ name: "Molotov", price: 10 });
    gunsOne.add({ name: "Excalibur", price: 19.99 });
    gunsOne.add({ name: "AK-48", price: 20.0 });
    gunsOne.add({ name: "Minigun", price: 99.99 });

    const gunsTwo = new Guns();
    gunsTwo.add({ name: "Hand Grenade", price: 9.99 });
    gunsTwo.add({ name: "AK-46", price: 19.99 });
    gunsTwo.add({ name: "AK-45", price: 22.2 });
    gunsTwo.add({ name: "Minishark", price: 999.99 });

    GunSort(gunsOne.arsenal, gunsTwo.arsenal);

    const mockedSteps = [
      "Second gun is cheaper",
      "First gun is cheaper",
      "Second gun name comes first",
      "First gun is cheaper",
      "First gun is cheaper",
      "Second gun is cheaper",
      "First gun is cheaper",
      "Done",
    ];

    assert.deepEqual(steps, mockedSteps);
  });
});

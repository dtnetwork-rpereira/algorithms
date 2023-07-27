import { describe, it } from "node:test";
import assert from "node:assert";

import { BinarySearch, QuickSort } from "./index.js";

describe("Binary Search", () => {
  it("should find extraminigun", () => {
    const arsenal = [
      { name: "Hammer", price: 5.73 },
      { name: "Butterfly Knife", price: 7.01 },
      { name: "Molotov", price: 10 },
      { name: "AK-46", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "Electric Bow", price: 69.9 },
      { name: "ExtraMinigun", price: 79.9 },
      { name: "Minigun", price: 99.9 },
    ];

    const elementFoundIndex = BinarySearch(arsenal, 79.9, "price");
    assert.deepEqual(elementFoundIndex, 6);
  });

  it("should not find axe", () => {
    const arsenal = [
      { name: "Hammer", price: 5.73 },
      { name: "Butterfly Knife", price: 7.01 },
      { name: "Molotov", price: 10 },
      { name: "AK-46", price: 19.99 },
      { name: "AK-48", price: 20.0 },
      { name: "Electric Bow", price: 69.9 },
      { name: "ExtraMinigun", price: 79.9 },
      { name: "Minigun", price: 99.9 },
    ];

    const elementFoundIndex = BinarySearch(arsenal, 80, "price");
    assert.deepEqual(elementFoundIndex, -1);
  });

  it("should find by name", () => {
    const arsenal = [
      {
        name: "Colt M1911",
        price: 800,
      },
      {
        name: "Smith & Wesson M&P 9",
        price: 600,
      },
      {
        name: "Glock 17",
        price: 700,
      },
      {
        name: "Sig Sauer P226",
        price: 750,
      },
      {
        name: "Beretta 92FS",
        price: 650,
      },
      {
        name: "Heckler & Koch USP",
        price: 900,
      },
      {
        name: "Ruger SR9",
        price: 550,
      },
      {
        name: "Walther P99",
        price: 650,
      },
      {
        name: "CZ 75",
        price: 600,
      },
      {
        name: "Springfield XD",
        price: 650,
      },
      {
        name: "FN FNX",
        price: 800,
      },
      {
        name: "Taurus G2C",
        price: 350,
      },
      {
        name: "Browning Hi-Power",
        price: 850,
      },
      {
        name: "Steyr M9-A1",
        price: 650,
      },
      {
        name: "Walther PPQ",
        price: 700,
      },
      {
        name: "S&W Model 686",
        price: 900,
      },
      {
        name: "Springfield 1911",
        price: 950,
      },
      {
        name: "HK VP9",
        price: 750,
      },
      {
        name: "CZ P-10",
        price: 600,
      },
      {
        name: "Ruger LCR",
        price: 500,
      },
    ];

    const property = "name";

    QuickSort(arsenal, 0, arsenal.length, property);

    const elementFoundIndex = BinarySearch(arsenal, "Walther PPQ", property);
    assert.deepEqual(elementFoundIndex, arsenal.length - 1);
  });
});

import { QuickSort } from "./index.js";
import { Guns } from "./guns.js";

const gun = new Guns();
gun.add({ name: "AK-48", price: 20.0 });
gun.add({ name: "Molotov", price: 10 });
gun.add({ name: "Hammer", price: 5.73 });
gun.add({ name: "Butterfly Knife", price: 7.01 });
gun.add({ name: "Minigun", price: 99.9 });
gun.add({ name: "ExtraMinigun", price: 79.9 });
gun.add({ name: "AK-46", price: 19.99 });
gun.add({ name: "Electric Bow", price: 69.9 });

const sortedArray = QuickSort(gun.arsenal, 0, gun.arsenal.length);

console.log(sortedArray);

class Guns {
  arsenal = [];

  constructor() {}

  add({ name, price }) {
    this.arsenal.push({name, price});
  }
}

export { Guns };

export class Inventory {
  constructor(playerId) {
    this.playerId = playerId;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  // removeItem(id) {}

  // useItem(id) {}
}

export default Inventory;

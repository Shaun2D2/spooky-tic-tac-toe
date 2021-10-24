import { Inventory } from './Inventory';

class Player {
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
    this.health = 100;
    this.winCount = 0;
    this.history = [];

    this.inventory = new Inventory();
  }

  resetHistory() {
    this.history = [];
  }

  set incrementWinCount(by = 1) {
    this.winCount += 1;
  }

  addHistory(move) {
    this.history.push(move);
  }

  damage() {
    this.health -= 10;
  }
}

export default Player;

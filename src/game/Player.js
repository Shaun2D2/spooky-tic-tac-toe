import { Inventory } from './Inventory';

class Player {
    constructor(name) {
        this.name = name;
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

    set history(move) {
        this.history.push(move);
    }

}

export default Player;
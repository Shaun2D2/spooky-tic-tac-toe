import { publish } from '../lib/pubSub';

import winConditions from '../const/conditions';
import Player from './Player';

import { launchTextFST } from '../utils/fullScreenTakeover';

const coinFlip = () => Math.floor(Math.random() * 2);

export class GameController {
  constructor({ forceStartPlayer = null, player1 = 'Orc', player2 = 'Knight' } = {}) {
    if (![null, 0, 1].includes(forceStartPlayer)) { throw new Error('a forced start player must be either 1 or 0 intger'); }

    this.players = [new Player(player1, 'orc'), new Player(player2, 'knight')];

    this.activePlayer = forceStartPlayer || coinFlip();

    this.lastWinner = null;
    this.roundCount = 0;
    this.roundMove = 0;

    publish('activePlayerChange', this.getActivePlayer);
  }

  /**
   * we need to fix this, super inefficient!
   */
  checkWinners() {
    let winner = null;

    for (let i = 0; i < this.players.length; i += 1) {
      if (winner) break;

      const targetPlayer = this.players[i];

      for (let j = 0; j < winConditions.length; j += 1) {
        const condition = winConditions[i];
        let streak = 0;

        targetPlayer.history.forEach((id) => {
          if (condition.includes(id)) streak += 1;
        });

        if (streak === 3) {
          winner = targetPlayer;
          break;
        }
      }
    }

    return winner;
  }

  playerSelection(cellId) {
    this.players[this.activePlayer].addHistory(cellId);

    const winner = this.checkWinners();

    if (winner) {
      publish('winner', winner);
      return;
    }

    this.toggleActivePlayer();

    this.players.roundMove += 1;

    if (this.players.roundMove === 9) {
      alert('cats game');
    }
  }

  nextRound() {
    const { players } = this;

    players.roundCount += 1;
    players.roundMove = 0;
  }

  toggleActivePlayer() {
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;

    publish('activePlayerChange', this.getActivePlayer);
  }

  get getActivePlayer() {
    return this.players[this.activePlayer];
  }
}

let gameController = null;

export const createGameController = (config) => {
  gameController = new GameController(config);
};

export const getGameController = (config) => {
  if (gameController) return gameController;

  gameController = new GameController(config);

  return gameController;
};

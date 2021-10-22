// import { injectRootHtmlElement, findHtmlElement } from "../utils";

import winConditions from '../const/conditions';

export class GameController {
    players = {
        player1: {
            name: '',
            winCount: 0,
            history: []
        },
        player2: {
            name: '',
            winCount: 0,
            history: []
        },
        active: 1,
        lastWinner: null,
        roundCount: 0,
        roundMove: 0
    }

    constructor({ starterPlayer, player1 = '', player2 = '' } = {}) {
        this.activePlayer = starterPlayer || 1;

        this.players.player1.name = player1;
        this.players.player2.name = player2;

        if (starterPlayer) {
            this.player.active = starterPlayer;
        }
    }

    evaluatePlayerWin(targetPlayer) {
        let win = false;

        for(let i = 0; i < winConditions.length; i += 1) {
            const condition = winConditions[i];
            let streak = 0;

            targetPlayer.history.forEach(id => {
                if (condition.includes(id)) streak += 1;
            });
    
            if (streak === 3) {
                win = true;
                break;
            }
        }

        return win;
    }

    checkWinner() {
        const player1 = this.evaluatePlayerWin(this.players.player1);
        const player2 = this.evaluatePlayerWin(this.players.player2);

        return {
            player1,
            player2
        };
    }

    playerSelection(cellId) {
        this.players[this.getActivePlayer].history.push(cellId);

        const winner = this.checkWinner();

        if (winner.player1 || winner.player2) {
            alert('we have a winner!');
            window.location.reload(); // simple reload to reset the game for now until I get better UI;
            return;
        }

        this.toggleActivePlayer();

        this.players.roundMove += 1;

        if (this.players.roundMove === 9) {
            alert('cats game');
        }

        return this;
    }

    nextRound() {
        const players = this.players;

        players.roundCount += 1;
        players.roundMove = 0;
    }

    toggleActivePlayer() {
        const newActivePlayer = this.players.active === 1 ? 2 : 1;

        console.log(`player ${newActivePlayer} is now active`);
        this.players.active = newActivePlayer;
    }

    get getActivePlayer() {
        return `player${this.players.active}`;
    }

    get getPlayerStatus() {
        return this.players
    }

    get roundCount() {
        return this.players.player1.winCount + this.players.player2.winCount
    }
};

let gameController = null;

export const getGameController = (config) => {
    if (gameController) return gameController;

    gameController = new GameController(config);

    return gameController;
}

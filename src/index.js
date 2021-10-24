import * as scripts from './scripts';
import { launchFST } from './utils/fullScreenTakeover';
import { ITEMS } from './const/items';
import { subscribe } from './lib/pubSub';
import { updatePlayerCard } from './utils/updatePlayerCard';
import { createGameController } from './game/GameController';

import './index.scss';

Object.values(scripts.default).forEach((step) => step.call());

subscribe('activePlayerChange', (player) => {
  updatePlayerCard(player);
});

createGameController();

window.dev = {};

window.dev = {
  launchFST,
  items: ITEMS,
  dismissFST() {
    this.getFST().classList.remove('full-screen-takeover--show');
  },
};

import * as scripts from './scripts';
import { launchCardFST, launchTextFST } from './utils/fullScreenTakeover';
import { ITEMS } from './const/items';
import { subscribe } from './lib/pubSub';
import { updatePlayerCard } from './utils/updatePlayerCard';
import { createGameController } from './game/GameController';
import trans from './utils/translations';

import './index.scss';

Object.values(scripts.default).forEach((step) => step.call());

subscribe('activePlayerChange', (player) => {
  updatePlayerCard(player);
});

subscribe('winner', (player) => {
  launchTextFST({ type: 'victory', image: player.avatar, title: `${player.name} has won the match!` });
});

createGameController();

launchTextFST({
  image: 'fairy',
  title: trans('WELCOME'),
  text: `${trans('WELCOME_TEXT_1')}<br /> ${trans('WELCOME_TEXT_2')}`,
});

window.dev = {};

window.dev = {
  launchCardFST,
  launchTextFST,
  items: ITEMS,
  dismissFST() {
    this.getFST().classList.remove('full-screen-takeover--show');
  },
};

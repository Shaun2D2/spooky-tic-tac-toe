import * as scripts from './scripts';
import { launchFST } from './utils/fullScreenTakeover';
import { ITEMS } from './const/items';
// import { subscribe } from './lib/pubSub';

import './index.scss';

Object.values(scripts.default).forEach((step) => step.call());

window.dev = {};

window.dev = {
  launchFST,
  items: ITEMS,
  dismissFST() {
    this.getFST().classList.remove('full-screen-takeover--show');
  },
};

import * as scripts from "./scripts";
// import { subscribe } from './lib/pubSub';

import './index.scss';

Object.values(scripts.default).forEach((step) => step.call());

window.dev = {
    getFST() { return document.querySelector('.full-screen-takeover') },
    showFST () {
        this.getFST().classList.add("full-screen-takeover--show");
    },
    dismissFST() {
        this.getFST().classList.remove("full-screen-takeover--show");
    }
}
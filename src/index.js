import * as scripts from "./scripts";

import './index.scss';

// // setup the game like a champion
Object.values(scripts.default).forEach((step) => step.call());


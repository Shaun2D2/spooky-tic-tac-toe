import * as scripts from "./scripts";
// import { subscribe } from './lib/pubSub';

import './index.scss';

Object.values(scripts.default).forEach((step) => step.call());

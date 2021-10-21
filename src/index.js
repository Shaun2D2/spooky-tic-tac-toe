import { setupArea, setupGameBoard } from "./scripts";

const setup = [
    setupArea,
    setupGameBoard
];

// setup the game like a champion
setup.forEach((step) => step.call());


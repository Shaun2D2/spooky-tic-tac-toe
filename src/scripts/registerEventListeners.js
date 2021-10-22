import { fetchAllElements } from "../utils/html";

import { getGameController } from "../game";

export const registerEventListeners = () => {
    const elements = fetchAllElements(".game-table__cell");

    elements.forEach(element => {
        element.addEventListener("click", (e) => { 
            const { target: { classList } } = e;

            if (classList.contains("cell-selected")) return;
            console.log('do a thing...');
            const controller = getGameController();

            const activePlayer = controller.getActivePlayer;
            console.log(activePlayer);
            controller.playerSelection(e.target.id);

            classList.add("cell-selected");

            classList.add(`cell-selected-${activePlayer}`);
        });

    });
}
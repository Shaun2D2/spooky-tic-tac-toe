import { fetchAllElements } from "../utils/html";

import { getGameController } from "../game/GameController";

export const registerEventListeners = () => {
    const elements = fetchAllElements(".game-table__cell");

    elements.forEach(element => {
        element.addEventListener("click", (e) => { 
            const { target: { classList } } = e;

            if (classList.contains("cell-selected")) return;
            console.log('test');
            const controller = getGameController();

            const activePlayer = controller.getActivePlayer;
            console.log(activePlayer);
            controller.playerSelection(e.target.id);

            classList.add("cell-selected");

            classList.add(`cell-selected-${activePlayer}`);
        });

    });

    document.querySelector('.starburst__card-button').addEventListener('click', () => {
        document.querySelector('.full-screen-takeover').classList.remove('full-screen-takeover--show');
    });
}
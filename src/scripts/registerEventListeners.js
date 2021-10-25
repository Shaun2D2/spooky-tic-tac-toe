import { fetchAllElements } from '../utils/html';

import { getGameController } from '../game/GameController';

export const registerEventListeners = () => {
  const elements = fetchAllElements('.game-table__cell');

  elements.forEach((element) => {
    element.addEventListener('click', (e) => {
      const {
        target: { classList },
      } = e;

      if (classList.contains('cell-selected')) return;

      const controller = getGameController();

      const { activePlayer } = controller;

      controller.playerSelection(e.target.id);

      classList.add('cell-selected');

      classList.add(`cell-selected-${activePlayer}`);
    });
  });
};

export default registerEventListeners;

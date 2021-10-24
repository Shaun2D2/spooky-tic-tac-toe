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

      const activePlayer = controller.getActivePlayer;

      controller.playerSelection(e.target.id);

      classList.add('cell-selected');

      classList.add(`cell-selected-${activePlayer}`);
    });
  });

  document
    .querySelector('.starburst__card-button')
    .addEventListener('click', () => {
      const el = document.querySelector('.full-screen-takeover');

      el.classList.remove('full-screen-takeover--show');

      el.classList.add('full-screen-takeover--hide');

      setTimeout(() => el.classList.remove('full-screen-takeover--hide'), 1500);
    });
};

export default registerEventListeners;

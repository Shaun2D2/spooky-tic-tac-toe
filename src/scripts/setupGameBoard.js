import { createElement } from '../utils';

const table = (content) => `
    <div class="card">
        <div class="card__body">
            <table class="game-table">
                <tbody>
                    ${content}
                </tbody>
            </table>
        </div>
    </div>
`;

const card = (content) => `
    <div class="card">
        <div class="card__body">
            ${content}
        </div>
    </div>
`;

const scoreCard = card`
    <div class="details">
        <img src="./images/orc.svg" class="details__avatar" />
        <div class="details__player-stats">
            <div class="details__player-stats-name">Player 1</div>
            <div class="details__player-stats-health">
                <div class="details__player-stats-health-inner"></div>
            </div>
        </div>
        <button class="details__player-inventory"><img src="./images/sack.svg"></button>
    </div>
`;

const gameTable = table`
<tr>
    <td class="game-table__cell" id="game-table_cell-1-1"></td>
    <td class="game-table__cell" id="game-table_cell-1-2"></td>
    <td class="game-table__cell" id="game-table_cell-1-3"></td>
</tr>
<tr>
    <td class="game-table__cell" id="game-table_cell-2-1"></td>
    <td class="game-table__cell" id="game-table_cell-2-2"></td>
    <td class="game-table__cell" id="game-table_cell-2-3"></td>
</tr>
<tr>
    <td class="game-table__cell" id="game-table_cell-3-1"></td>
    <td class="game-table__cell" id="game-table_cell-3-2"></td>
    <td class="game-table__cell" id="game-table_cell-3-3"></td>
</tr>
`;

const rootFST = '<div class="full-screen-takeover-root"></div>';

const UI_CONFIG = [
  {
    target: 'body',
    content: rootFST,
  },
  {
    target: 'body',
    tag: 'div',
    attributes: {
      class: 'play-area',
    },
  },
  {
    target: '.play-area',
    tag: 'div',
    attributes: {
      class: 'game-details',
    },
  },
  {
    target: '.play-area',
    tag: 'div',
    attributes: {
      class: 'game-board',
    },
  },
  {
    target: '.game-details',
    content: scoreCard,
  },
  {
    target: '.game-board',
    content: gameTable,
  },
];

export const setupGameBoard = () => {
  UI_CONFIG.forEach((config) => createElement(config));
};

export default setupGameBoard;

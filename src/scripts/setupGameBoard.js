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

const activePlayerCard = card`
    <div class="player">
        this is the players section!
    </div>
`;

const scoreCard = card`
    <div class="details">
        this is the details section!
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

const gameBoard = card`
    ${gameTable}
`;

const fullScreenTakeover = `
    <div class="full-screen-takeover">
        <div class="starburst"></div>
        <div class="starburst__card">
            <div class="starburst__card-body">
                <img src="./images/potion.svg" class="starburst__image" />
                <div class="starburst__description">
                    <h3 class="starburst__card-title">Holy Water Found!</h3>
                    <p class="starburst__card-description">Some really cool description here</p>
                </div>
                <button class="starburst__card-button">Dismiss</button>
            </div>
        </div>
    </div>
`;

const UI_CONFIG = [
  {
    target: 'body',
    content: fullScreenTakeover,
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
    content: [
      activePlayerCard,
      scoreCard,
    ],
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

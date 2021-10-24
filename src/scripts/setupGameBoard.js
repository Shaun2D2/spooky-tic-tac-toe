import { injectHtmlElement, injectHtmlContent, findHtmlElement, createElement } from "../utils"

const table = (content) => `
    <table class="game-table">
        <tbody>
            ${content}
        </tbody>
    </table>
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

console.log(gameTable, gameBoard);

const UI_CONFIG = [
    {
        target: 'body',
        tag: 'div',
        attributes: {
            class: 'play-area'
        }
    },
    {
        target: '.play-area',
        tag: 'div',
        attributes: {
            class: 'game-details'
        }
    },
    {
        target: '.play-area',
        tag: 'div',
        attributes: {
            class: 'game-board'
        }
    },
    {
        target: '.game-details',
        content: [
            activePlayerCard,
            scoreCard
        ]
    },
    {
        target: '.game-board',
        content: gameTable
    }
];


export const setupGameBoard = () => {
    UI_CONFIG.forEach(config => createElement(config));

    // const el = findHtmlElement('#game-table');

    // let tableHtml = '';

    // for(let i = 0; i < 3; i++) {
    //     tableHtml += createTableRow(i + 1);
    // }

    // injectHtmlContent(el, `<tbody>${tableHtml}</tbody>`);
}

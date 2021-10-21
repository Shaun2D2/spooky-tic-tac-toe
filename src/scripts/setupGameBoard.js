import { injectHtmlElement, injectHtmlContent, findHtmlElement } from "../utils"

export const createTableRow = (row) => `
    <tr>
        <td class="game-table__cell" id="game-table_cell-${row}-1"></td>
        <td class="game-table__cell" id="game-table_cell-${row}-2"></td>
        <td class="game-table__cell" id="game-table_cell-${row}-3"></td>
    </tr>
`;

export const setupGameBoard = () => {
    injectHtmlElement('#game-area', 'table', 'game-table');

    const el = findHtmlElement('#game-table');

    let tableHtml = '';

    for(let i = 0; i < 3; i++) {
        tableHtml += createTableRow(i + 1);
    }

    injectHtmlContent(el, `<tbody>${tableHtml}</tbody>`);
}

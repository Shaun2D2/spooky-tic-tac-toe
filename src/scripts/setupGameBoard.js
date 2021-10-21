import { injectHtmlElement, injectHtmlContent, findHtmlElement } from "../utils"

export const createTableRow = (row) => `
    <tr>
        <td id="game-table-${row}-1"></td>
        <td id="game-table-${row}-2"></td>
        <td id="game-table-${row}-3"></td>
    </tr>
`;

export const setupGameBoard = () => {
    injectHtmlElement('#game-area', 'table', 'game-table');

    const el = findHtmlElement('#game-table');

    let tableHtml = '';

    for(let i = 0; i < 3; i++) {
        tableHtml += createTableRow(i + 1)
    }

    injectHtmlContent(el, `<tbody>${tableHtml}</tbody>`);
}

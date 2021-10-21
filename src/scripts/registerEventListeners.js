import { fetchAllElements } from "../utils/html";

export const registerEventListeners = () => {
    const elements = fetchAllElements(".game-table__cell");

    elements.forEach(element => {
        element.addEventListener("click", (e) => { 
            e.stopPropagation();

            e.target.classList.add("cell-selected");

            console.log(e.target.id); 
        });

    });
}
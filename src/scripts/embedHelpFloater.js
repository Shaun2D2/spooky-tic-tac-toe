import { injectHtmlElement } from "../utils"

export const embedHelpFloater = () => {
    injectHtmlElement('#game-area', 'div', 'game-help');
}

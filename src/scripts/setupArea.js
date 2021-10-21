import { findHtmlElement, injectRootHtmlElement } from "../utils";

export const setupArea = () => {
    const rootEl = findHtmlElement('game-area');

    if (!rootEl) injectRootHtmlElement();
}
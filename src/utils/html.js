export const composeTag = (tag, id, classNames) => `<${tag} ${id ? `id=${id}` : ''} ${classNames ? `class=${classNames.toString(' ')}` : `` }></${tag}>`;

export const fetchElement = (element) => typeof element === "object" ? element : document.querySelector(element);

export const injectHtmlElement = (parent, tag, id, classNames) => {
    const el = fetchElement(parent);

    el.innerHTML += composeTag(tag, id, classNames);

    return el;
};

export const injectHtmlContent = (el, html) => {
    el.innerHTML += html;

    console.log(el.innerHTML);
};

export const injectRootHtmlElement = () => injectHtmlElement('body', 'div', 'game-area');

export const findHtmlElement = (name) =>  document.querySelector(name);

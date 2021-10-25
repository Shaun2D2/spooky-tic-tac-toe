import { fetchElement, updateElements, addOnClick } from './html';
import trans from './translations';

const fullScreenTakeover = (content, starburst, shootingStars) => `
    <div class="full-screen-takeover">
        ${starburst && '<div class="starburst"></div>'}
        ${shootingStars && (`
          <div class="starburst__star starburst__star--up-right"></div>
          <div class="starburst__star starburst__star--up-left"></div>
          <div class="starburst__star starburst__star--down-right"></div>
          <div class="starburst__star starburst__star--down-left"></div>
        `)}
        ${content}
      </div>
`;

const itemCard = fullScreenTakeover(`
  <div class="starburst__card">
    <div class="starburst__card-body">
        <img src="./images/potion.svg" class="starburst__image" />
        <div class="starburst__description">
            <h3 class="starburst__card-title"></h3>
            <p class="starburst__card-description"></p>
        </div>
        <button class="starburst__card-button">Dismiss</button>
    </div>
  </div>
`, true, true);

const baseTextCard = `
<div class="starburst__card starburst__card--large">
  <div class="starburst__card-body">
    <img class="starburst__card-image" src="" />
    <div class="starburst__card-description">
      <h1 class="starburst__card-description-title"></h1>
      <p class="starburst__card-description-text"></p>
      <button class="starburst__card-button"></button>
    </div>
</div>
</div>
`;

const textCard = fullScreenTakeover(`${baseTextCard}`, false, false);

const victoryTextCard = fullScreenTakeover(`${baseTextCard}`, true, true);

export const cardOnClick = () => {
  const el = fetchElement('.full-screen-takeover');

  el.classList.remove('full-screen-takeover--show');

  el.classList.add('full-screen-takeover--hide');

  setTimeout(() => el.remove(), 1500);
};

export const launchTextFST = (config) => {
  const {
    type, image, title, text, btnText,
  } = config;

  const el = fetchElement('.full-screen-takeover-root');

  el.innerHTML = type === 'victory' ? victoryTextCard : textCard;
  updateElements([
    {
      target: '.starburst__card-image',
      attributes: {
        src: `./images/${image}.svg`,
      },
    },
    {
      target: '.starburst__card-description-title',
      content: title,
    },
    {
      target: '.starburst__card-description-text',
      content: text,
    },
    {
      target: '.starburst__card-button',
      content: btnText || 'Dismiss',
    },
  ]);

  addOnClick({
    target: '.starburst__card-button',
    handler: cardOnClick,
  });
};

export const launchCardFST = (config) => {
  const el = fetchElement('.full-screen-takeover-root');

  el.innerHTML = itemCard;

  updateElements([
    {
      target: '.starburst__image',
      attributes: {
        src: config.image,
      },
    },
    {
      target: '.starburst__card-title',
      content: config.name,
    },
    {
      target: '.starburst__card-description',
      content: config.description,
    },
  ]);

  addOnClick({
    target: '.starburst__card-button',
    handler: cardOnClick,
  });
};

export const launchFST = (config) => {
  const el = fetchElement('.full-screen-takeover');
};

// export const launchItemFST = (config) => {
//   const el = fetchElement('.full-screen-takeover-root');
// };

export default launchFST;

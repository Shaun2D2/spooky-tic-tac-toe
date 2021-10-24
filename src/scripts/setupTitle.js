import { injectHtmlContent } from '../utils';

export const setupTitle = () => {
  const el = document.querySelector('#game-area');

  injectHtmlContent(el, '<h1 class="spooky-title">Spooky Tic Tac Toe</h1>');
};

import { ITEMS } from '../const/items';

export const roll = () => Math.floor(Math.random() * 100);

export const treasureDrop = () => {
  const rollScore = roll();

  const item = ITEMS.reduce((acc, possibleItem) => {
    if (rollScore >= possibleItem.score) return possibleItem;

    return acc;
  }, null);

  if (item) return item;

  return null;
};

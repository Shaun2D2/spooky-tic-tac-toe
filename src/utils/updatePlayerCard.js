import { updateElement } from './html';

export const updatePlayerCard = (player) => {
  const UPDATES = [
    {
      target: '.details__avatar',
      attributes: {
        src: `./images/${player.avatar}.svg`,
      },
    },
    {
      target: '.details__player-stats-name',
      content: player.name,
    },
    {
      target: '.details__player-stats-health-inner',
      attributes: {
        style: `width: ${player.health}%`,
      },
    },
  ];

  UPDATES.forEach((config) => updateElement(config));
};

export default updatePlayerCard;

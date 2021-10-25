import translations from '../const/translations';

const language = 'en-US';

const trans = (key) => {
  const text = translations[language][key];

  if (!text) return key;

  return text;
};

export default trans;

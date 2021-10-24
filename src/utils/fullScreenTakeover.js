export const launchFST = (config) => {
  const el = document.querySelector('.full-screen-takeover');

  el.querySelector('.starburst__image').setAttribute('src', config.image);
  el.querySelector('.starburst__card-title').innerHTML = config.name;
  el.querySelector('.starburst__card-description').innerHTML = config.description;

  el.classList.add('full-screen-takeover--show');
};

export default launchFST;

import AbstractComponent from "./abstract-component";

const createMenuMarkup = (menuName, isActive) => {
  return (
    `<a class="trip-tabs__btn
      ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${menuName}</a>`
  );
};

const createMenuTemplate = (menuArr) => {
  const menu = menuArr.map((it, i) => createMenuMarkup(it, i === 0))
    .join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menu}
    </nav>`
  );
};

export default class Menu extends AbstractComponent {
  constructor(menuArray) {
    super();
    this._menuArray = menuArray;
  }

  getTemplate() {
    return createMenuTemplate(this._menuArray);
  }
}


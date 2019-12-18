import {createElement} from "../utils";

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

export default class Menu {
  constructor(menuArray) {
    this._menuArray = menuArray;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._menuArray);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


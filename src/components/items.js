import {createElement} from "../utils";

const createItemsTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class Items {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createItemsTemplate();
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

import {createElement} from '../utils.js';

const noItemTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point
    </p>`
  );
};

export default class NoItem {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return noItemTemplate();
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


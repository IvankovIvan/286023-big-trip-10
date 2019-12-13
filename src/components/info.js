import {createElement} from '../utils.js';
import {tripsInfo} from '../utilsTrip';

const createInfoTemplate = (tripInfo) => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title"
      >${tripInfo.tripCityFrom} &mdash; ... &mdash; ${tripInfo.tripCityTo}</h1>

      <p class="trip-info__dates">${tripInfo.periodDateToString}</p>
    </div>`
  );
};

export default class Info {
  constructor(tripArray) {
    this._tripInfo = tripsInfo(tripArray);
    this._element = null;
  }

  getTemplate() {
    return createInfoTemplate(this._tripInfo);
  }

  getElement() {
    this._element = createElement(this.getTemplate());
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

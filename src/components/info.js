import {tripsInfo} from '../utilsTrip';
import AbstractComponent from "./abstract-component";

const createInfoTemplate = (tripInfo) => {
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title"
      >${tripInfo.tripCityFrom} &mdash; ... &mdash; ${tripInfo.tripCityTo}</h1>

      <p class="trip-info__dates">${tripInfo.periodDateToString}</p>
    </div>`
  );
};

export default class Info extends AbstractComponent {
  constructor(tripArray) {
    super();
    this._tripInfo = tripsInfo(tripArray);
  }

  getTemplate() {
    return createInfoTemplate(this._tripInfo);
  }
}

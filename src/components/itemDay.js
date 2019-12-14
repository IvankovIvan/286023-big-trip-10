import {MonthNames} from "../const";
import {getDateFormatUS} from "../utilsDate";
import {createItemTripTemplate} from './item.js';
import {createElement} from "../utils";

export const createItemDayTemplate = (trips) => {
  const {schedule} = trips[0];
  const day = schedule.timeStart.getDate();
  const month = MonthNames[schedule.timeStart.getMonth()];
  const year = schedule.timeStart.getFullYear().toString().slice(-2);
  const tripsDay = trips.map((trip) => createItemTripTemplate(trip)).join(`\n`);
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date"
          datetime="${getDateFormatUS(schedule.timeStart)}"
        >${month} ${year}</time>
      </div>
        <ul class="trip-events__list">
          ${tripsDay}
        </ul>
    </li>`
  );
};

export default class ItemDay {
  constructor(trips) {
    this._trips = trips;
    this._element = null;
  }

  getTemplate() {
    return createItemDayTemplate(this._trips);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }
}


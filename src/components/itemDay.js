import {MonthNames} from "../const";
import {getDateFormatUS} from "../utilsDate";
import AbstractComponent from "./abstract-component";

const createItemDayTemplate = (trips) => {
  const {schedule} = trips[0];
  const day = schedule.timeStart.getDate();
  const month = MonthNames[schedule.timeStart.getMonth()];
  const year = schedule.timeStart.getFullYear().toString().slice(-2);
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${day}</span>
        <time class="day__date"
          datetime="${getDateFormatUS(schedule.timeStart)}"
        >${month} ${year}</time>
      </div>
        <ul class="trip-events__list">
        </ul>
    </li>`
  );
};

export default class ItemDay extends AbstractComponent {
  constructor(trips) {
    super();
    this._trips = trips;
  }

  getTemplate() {
    return createItemDayTemplate(this._trips);
  }
}


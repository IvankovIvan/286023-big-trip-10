import {getTimeFormat, getDateFormatISO,
  getTimeFormatString} from '../utilsDate.js';

const createOffersMarkup = (offers) => {
  return offers
    .map((offer) => {
      return (
        `<li class="event__offer">
          <span class="event__offer-title">${offer ? offer.name : ``}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
        </li>`
      );
    })
    .join(`\n`);
};

export const createItemTripTemplate = (trip) => {
  const {type, city, typeToLine,
    schedule: {timeStart, timeEnd, duration}, price, offers} = trip;

  const offersMarkup = offers.length === 0 ? `` : createOffersMarkup(offers);
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42"
            src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${typeToLine} ${city}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time"
              datetime="${getDateFormatISO(timeStart)}"
            >${getTimeFormat(timeStart)}</time>
            &mdash;
            <time class="event__end-time"
              datetime="${getDateFormatISO(timeEnd)}"
            >${getTimeFormat(timeEnd)}</time>
          </p>
          <p class="event__duration">${getTimeFormatString(duration)}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersMarkup}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};


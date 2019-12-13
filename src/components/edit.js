import {TransferTypes, ActivityTypes, Cities, EventOffers} from '../const.js';
import {castTimeFormat} from '../utilsDate.js';
import {createElement} from '../utils.js';

const getDateFormatSmallDateTime = (dateTime, separation = `/`) => {
  return (`${castTimeFormat(dateTime.getDate())}${separation}${
    castTimeFormat(dateTime.getMonth())}${separation}${
    dateTime.getFullYear().toString().slice(-2)} ${
    castTimeFormat(dateTime.getHours())}:${
    castTimeFormat(dateTime.getMinutes())}`);
};

const createTypesMarkup = (type) => {
  const typeLowerCase = type.toLowerCase();
  return (
    `<div class="event__type-item">
      <input id="event-type-${typeLowerCase}-1"
        class="event__type-input  visually-hidden" type="radio"
        name="event-type" value="${typeLowerCase}">
      <label class="event__type-label  event__type-label--${typeLowerCase}"
      for="event-type-${typeLowerCase}-1">${type}</label>
    </div>`
  );
};

const createOfferMarkup = (offer, isChecked) => {
  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox visually-hidden"
      id="event-offer-${offer.id}-1" type="checkbox"
      name="event-offer-${offer.id}"
      ${isChecked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  );
};

const createCityMarkup = (cityName) => {
  return (`<option value="${cityName}"></option>`);
};

const createPhotoMarkup = (photo) => {
  return (
    `<img class="event__photo" src="http://picsum.photos/300/150?r=${photo}" alt="Event photo">`
  );
};

const createEditTemplate = (trip) => {
  const {type, typeToLine, city, schedule: {timeStart, timeEnd},
    price, offers, description, photos} = trip;

  const transferTypesMarkup = TransferTypes
    .map((typeItem) => createTypesMarkup(typeItem))
    .join(`\n`);

  const activityTypesMarkup = ActivityTypes
    .map((typeItem) => createTypesMarkup(typeItem))
    .join(`\n`);

  const cityMarkup = Cities
    .map((cityName) => createCityMarkup(cityName))
    .join(`\n`);

  const offersMarkup = EventOffers
    .map((offer) => createOfferMarkup(offer, offers.includes(offer)))
    .join((`\n`));

  const photosMarkup = Array.from(photos)
    .map((photo) => createPhotoMarkup(photo))
    .join(`\n`);

  return (
    `<form class="trip-events__item  event  event--edit" action="#"
        method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17"
              src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden"
            id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Transfer</legend>
              ${transferTypesMarkup}
            </fieldset>

            <fieldset class="event__type-group">
              <legend class="visually-hidden">Activity</legend>
              ${activityTypesMarkup}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group event__field-group--destination">
          <label class="event__label  event__type-output"
            for="event-destination-1">
            ${typeToLine}
          </label>
          <input class="event__input  event__input--destination"
            id="event-destination-1" type="text" name="event-destination"
            value="${city}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${cityMarkup}
          </datalist>
        </div>

        <div class="event__field-group event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">
            From
          </label>
          <input class="event__input event__input--time" id="event-start-time-1"
            type="text" name="event-start-time"
            value="${getDateFormatSmallDateTime(timeStart)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">
            To
          </label>
          <input class="event__input event__input--time" id="event-end-time-1"
          type="text" name="event-end-time"
          value="${getDateFormatSmallDateTime(timeEnd)}">
        </div>

        <div class="event__field-group event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1"
          type="text" name="event-price" value="${price}">
        </div>

        <button class="event__save-btn btn btn--blue" type="submit"
        >Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">

        <section class="event__section event__section--offers">
          <h3 class="event__section-title event__section-title--offers"
          >Offers</h3>

          <div class="event__available-offers">
          ${offersMarkup}
          </div>
        </section>

        <section class="event__section event__section--destination">
          <h3 class="event__section-title
            event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
              ${photosMarkup}
            </div>
          </div>
        </section>
      </section>
    </form>`
  );
};

export default class Edit {
  constructor(trip) {
    this._trip = trip;
    this._element = null;
  }

  getTemplate() {
    return createEditTemplate(this._trip);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
